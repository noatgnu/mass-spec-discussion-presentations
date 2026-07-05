import * as fs from 'fs';
import * as path from 'path';
import { spawn, execSync, ChildProcess } from 'child_process';
import pptxgen from 'pptxgenjs';
import puppeteer, { Browser, Page } from 'puppeteer';

require('ts-node').register({ transpileOnly: true });

const PRESENTATIONS_DIR = path.resolve(__dirname, '../presentations');
const PORT = 3001;
const SLIDE_W = 1280;
const SLIDE_H = 720;
const PPTX_W = 13.333;
const PPTX_H = 7.5;

const PPTX_MARGIN = 0.35;
const CONTENT_W = PPTX_W - 2 * PPTX_MARGIN;
const CONTENT_H = PPTX_H - 2 * PPTX_MARGIN;

function toInW(px: number): number { return (px / SLIDE_W) * CONTENT_W; }
function toInH(py: number): number { return (py / SLIDE_H) * CONTENT_H; }
function ptX(px: number): number { return PPTX_MARGIN + toInW(px); }
function ptY(py: number): number { return PPTX_MARGIN + toInH(py); }
function toPt(px: number): number { return Math.max(6, Math.round(px * (PPTX_H * 72 / SLIDE_H))); }
function toCharSpacing(letterSpacingPx: number): number { return Math.round(letterSpacingPx * 0.75 * 100) / 100; }

const UI_HIDE_SELECTORS = [
    '.controls',
    '.progress',
    '.slide-number',
    '#dx-hud',
    '#hotkeys-hud',
    '.holo-img-hint',
    '#holo-lightbox',
    '.timer',
    '#meta-top-left',
    '#meta-top-right',
    '#meta-bottom-left',
    '#meta-bottom-right',
    '.scanline',
    '#zoomIndicator',
    '#laserPointer',
    '#synth-canvas',
    '#qr-button',
    '#qr-modal',
    'aside.notes',
];

interface ExtractedElement {
    type: 'rect' | 'text' | 'image' | 'svg' | 'canvas' | 'clip';
    tag: string;
    x: number; y: number; w: number; h: number;
    text?: string;
    color?: string;
    bgColor?: string;
    bgAlpha?: number;
    borderColor?: string;
    borderWidth?: number;
    borderLeftWidth?: number; borderRightWidth?: number; borderTopWidth?: number; borderBottomWidth?: number;
    borderLeft?: boolean; borderRight?: boolean; borderTop?: boolean; borderBottom?: boolean;
    fontSize?: number;
    bold?: boolean;
    italic?: boolean;
    fontFamily?: string;
    align?: string;
    lineHeight?: number;
    charSpacing?: number;
    isH1?: boolean;
    isH2?: boolean;
    elementX?: number;
    elementY?: number;
    src?: string;
    originalFilename?: string;
    naturalWidth?: number;
    naturalHeight?: number;
    cssMaxHeight?: number;
    dataUrl?: string;
    clipX?: number; clipY?: number; clipW?: number; clipH?: number;
    gifSrc?: string;
    gifCropX?: number;
    gifCropY?: number;
}

interface SlidePos { h: number; v: number; }

interface PresentationConfig {
    title: string;
    theme?: 'dark' | 'light';
    showToc?: boolean;
    loc?: string;
    sections?: string[];
    slides?: string;
    markdown?: string;
}

function getPresentationDirs(): string[] {
    if (!fs.existsSync(PRESENTATIONS_DIR)) {
        console.error('Presentations directory not found');
        return [];
    }
    return fs.readdirSync(PRESENTATIONS_DIR).filter(file => {
        const dirPath = path.join(PRESENTATIONS_DIR, file);
        const htmlPath = path.join(dirPath, 'index.html');
        return fs.statSync(dirPath).isDirectory() && fs.existsSync(htmlPath);
    });
}

function startServer(): ChildProcess {
    console.log(`Starting server on port ${PORT}...`);
    return spawn('npx', ['serve', 'presentations', '-l', String(PORT)], {
        stdio: 'pipe',
        shell: true
    });
}

function waitForServer(port: number, timeout = 10000): Promise<void> {
    return new Promise((resolve, reject) => {
        const start = Date.now();
        const check = () => {
            try {
                execSync(`curl -s http://localhost:${port} > /dev/null 2>&1`, { stdio: 'ignore' });
                resolve();
            } catch {
                if (Date.now() - start > timeout) reject(new Error('Server startup timeout'));
                else setTimeout(check, 500);
            }
        };
        check();
    });
}

async function hideRevealUI(page: Page): Promise<void> {
    await page.evaluate((selectors: string[]) => {
        const style = document.createElement('style');
        style.id = '__export-hide';
        style.textContent = selectors.map(s => `${s}{display:none!important;visibility:hidden!important;opacity:0!important;}`).join('');
        document.head.appendChild(style);
    }, UI_HIDE_SELECTORS);
}

async function disableAnimations(page: Page): Promise<void> {
    await page.evaluate(() => {
        const style = document.createElement('style');
        style.textContent = `*{animation:none!important;transition:none!important;}`;
        document.head.appendChild(style);
        if ((window as any).Reveal) {
            (window as any).Reveal.configure({ transition: 'none', transitionSpeed: 'fast' });
        }
    });
}

async function stopGlitchAnimations(page: Page): Promise<void> {
    await page.evaluate(() => {
        const maxId = window.setInterval(() => {}, 999999);
        for (let i = 0; i <= maxId; i++) clearInterval(i);
        document.querySelectorAll('[data-original-text]').forEach(el => {
            (el as HTMLElement).innerText = el.getAttribute('data-original-text') || '';
            el.removeAttribute('data-original-text');
        });
        document.querySelectorAll('.glitch-char').forEach(span => span.classList.remove('glitch-char'));
    });
}

async function waitForContent(page: Page): Promise<void> {
    await page.waitForFunction(() =>
        Array.from(document.querySelectorAll('img')).every(img => img.complete),
        { timeout: 8000 }
    ).catch(() => {});

    await page.waitForFunction(() => {
        const containers = document.querySelectorAll('.qr-code-container');
        if (containers.length === 0) return true;
        return Array.from(containers).every(c => c.querySelector('svg') !== null);
    }, { timeout: 8000 }).catch(() => {});

    await new Promise(r => setTimeout(r, 300));
}

async function getSlidePositions(page: Page): Promise<SlidePos[]> {
    return page.evaluate(() => {
        const positions: { h: number; v: number }[] = [];
        const hSlides = document.querySelectorAll('.reveal > .slides > section');
        hSlides.forEach((hSlide, h) => {
            const vSlides = hSlide.querySelectorAll(':scope > section');
            if (vSlides.length > 0) {
                vSlides.forEach((_, v) => positions.push({ h, v }));
            } else {
                positions.push({ h, v: 0 });
            }
        });
        return positions;
    });
}

async function navigateToSlide(page: Page, h: number, v: number): Promise<void> {
    await page.evaluate(({ h: hh, v: vv }) => {
        (window as any).Reveal.slide(hh, vv);
    }, { h, v });
    await new Promise(r => setTimeout(r, 300));
    await stopGlitchAnimations(page);
}

async function revealAllFragments(page: Page): Promise<void> {
    await page.evaluate(() => {
        document.querySelectorAll('.reveal .slides section.present .fragment').forEach(el => {
            el.classList.add('visible');
            el.classList.remove('current-fragment');
        });
    });
}

async function getSlidesRect(page: Page): Promise<{ x: number; y: number; w: number; h: number; scale: number }> {
    return page.evaluate(() => {
        const el = document.querySelector('.reveal .slides') as HTMLElement;
        const r = el.getBoundingClientRect();
        const scale = (window as any).Reveal?.getScale?.() || 1;
        return { x: r.left, y: r.top, w: r.width, h: r.height, scale };
    });
}

async function extractSlideElements(page: Page, slidesRect: { x: number; y: number; w: number; h: number; scale: number }): Promise<{ elements: ExtractedElement[]; title: string }> {
    return page.evaluate((sr) => {
        const slide = (
            document.querySelector('.reveal .slides section.present > section.present') ||
            document.querySelector('.reveal .slides section.present')
        ) as HTMLElement;
        if (!slide) return { elements: [], title: '' };

        function parseColor(c: string): { hex: string; alpha: number } | null {
            if (!c || c === 'transparent' || c === 'rgba(0, 0, 0, 0)') return null;
            const m = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            if (!m) return null;
            const alpha = m[4] !== undefined ? parseFloat(m[4]) : 1;
            if (alpha < 0.02) return null;
            const hex = [m[1], m[2], m[3]].map(n => parseInt(n).toString(16).padStart(2, '0')).join('').toUpperCase();
            return { hex, alpha };
        }

        function parseBorderSide(colorVal: string, widthVal: string): { hex: string; alpha: number } | null {
            if (parseFloat(widthVal) < 0.5) return null;
            return parseColor(colorVal);
        }

        const INLINE = new Set(['b', 'strong', 'em', 'i', 'code', 'a', 'span', 'mark', 'sub', 'sup', 'small']);
        const TEXT_BLOCKS = new Set(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'div', 'blockquote', 'label', 'strong', 'b', 'em', 'span']);
        const BLOCK_TAGS = new Set(['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'section', 'article', 'ul', 'ol', 'li', 'table', 'tr', 'td', 'th', 'blockquote', 'pre', 'nav', 'aside']);

        const elements: any[] = [];
        let titleText = '';
        const h = slide.querySelector('h1, h2, h3');
        if (h) titleText = (h as HTMLElement).getAttribute('data-original-text') || (h as HTMLElement).innerText || '';

        // Reveal.js centers slide content vertically via section.style.top.
        // Subtract it so all y coordinates are relative to the section top, not the viewport center.
        const slideOffsetY = parseFloat(slide.style.top) || 0;

        function walk(el: Element, depth: number) {
            if (depth > 15) return;
            const style = window.getComputedStyle(el as HTMLElement);
            if (style.display === 'none' || style.visibility === 'hidden') return;
            if (parseFloat(style.opacity) < 0.05) return;

            const rect = el.getBoundingClientRect();
            if (rect.width < 1 || rect.height < 1) return;

            const tag = el.tagName.toLowerCase();
            // Convert viewport px → slide CSS px (1280×720 space), removing vertical centering offset
            const x = (rect.left - sr.x) / sr.scale;
            const y = (rect.top - sr.y) / sr.scale - slideOffsetY;
            const w = rect.width / sr.scale;
            const h = rect.height / sr.scale;

            const isInlineDisplay = style.display === 'inline' || style.display === 'inline-block' ||
                style.display === 'inline-flex' || style.display === 'inline-grid' ||
                style.display === 'inline-table' || style.display === 'contents';
            if (INLINE.has(tag) && isInlineDisplay) return;

            if (tag === 'svg') {
                const rootStyle = window.getComputedStyle(document.documentElement);
                let svgHtml = (el as SVGElement).outerHTML;
                const varRefs = [...new Set([...svgHtml.matchAll(/var\(--[\w-]+\)/g)].map(m => m[0]))];
                for (const varRef of varRefs) {
                    const varName = varRef.match(/var\((--[\w-]+)\)/)![1];
                    const value = rootStyle.getPropertyValue(varName).trim();
                    if (value) svgHtml = svgHtml.split(varRef).join(value);
                }
                elements.push({ type: 'svg', tag, x, y, w, h, clipX: rect.left, clipY: rect.top, clipW: rect.width, clipH: rect.height, dataUrl: svgHtml });
                return;
            }
            if (tag === 'canvas') {
                elements.push({ type: 'canvas', tag, x, y, w, h, dataUrl: (el as HTMLCanvasElement).toDataURL('image/png') });
                return;
            }
            if ((el as HTMLElement).dataset?.pptxExport === 'screenshot') {
                const gifSrc = (el as HTMLElement).dataset?.pptxGifSrc;
                const gifCropX = gifSrc ? parseFloat((el as HTMLElement).dataset?.pptxGifCropX ?? '50') : undefined;
                const gifCropY = gifSrc ? parseFloat((el as HTMLElement).dataset?.pptxGifCropY ?? '50') : undefined;
                elements.push({ type: 'clip', tag, x, y, w, h, clipX: rect.left, clipY: rect.top, clipW: rect.width, clipH: rect.height, gifSrc, gifCropX, gifCropY });
                return;
            }
            if (tag === 'img') {
                const imgEl = el as HTMLImageElement;
                const rawMaxH = window.getComputedStyle(imgEl).maxHeight;
                const cssMaxHeight = rawMaxH && rawMaxH !== 'none' ? parseFloat(rawMaxH) : 0;
                const originalFilename = imgEl.getAttribute('data-export-filename') || '';
                elements.push({ type: 'image', tag, x, y, w, h, src: imgEl.src, originalFilename, naturalWidth: imgEl.naturalWidth, naturalHeight: imgEl.naturalHeight, cssMaxHeight: isNaN(cssMaxHeight) ? 0 : cssMaxHeight });
                return;
            }

            const bgResult = parseColor(style.backgroundColor);
            const bTop = parseBorderSide(style.borderTopColor, style.borderTopWidth);
            const bRight = parseBorderSide(style.borderRightColor, style.borderRightWidth);
            const bBottom = parseBorderSide(style.borderBottomColor, style.borderBottomWidth);
            const bLeft = parseBorderSide(style.borderLeftColor, style.borderLeftWidth);
            const hasBorder = !!(bTop || bRight || bBottom || bLeft);
            const borderRef = bTop || bRight || bBottom || bLeft;

            if (bgResult || hasBorder) {
                const blW = bLeft ? parseFloat(style.borderLeftWidth) : 0;
                const brW = bRight ? parseFloat(style.borderRightWidth) : 0;
                const btW = bTop ? parseFloat(style.borderTopWidth) : 0;
                const bbW = bBottom ? parseFloat(style.borderBottomWidth) : 0;
                elements.push({
                    type: 'rect', tag, x, y, w, h,
                    bgColor: bgResult?.hex,
                    bgAlpha: bgResult?.alpha,
                    borderColor: borderRef?.hex,
                    borderWidth: Math.max(blW, brW, btW, bbW),
                    borderLeftWidth: blW, borderRightWidth: brW, borderTopWidth: btW, borderBottomWidth: bbW,
                    borderTop: !!bTop, borderRight: !!bRight, borderBottom: !!bBottom, borderLeft: !!bLeft,
                });
            }

            if (TEXT_BLOCKS.has(tag)) {
                const hasBlockChild = Array.from(el.children).some(c => BLOCK_TAGS.has(c.tagName.toLowerCase()));
                if (!hasBlockChild) {
                    let txt = ((el as HTMLElement).innerText || el.textContent || '').trim();
                    if (txt) {
                        let colorStr = style.color;
                        if (tag === 'li') {
                            const parentEl = el.parentElement;
                            if (parentEl && parentEl.tagName.toLowerCase() === 'ol') {
                                const idx = Array.from(parentEl.children)
                                    .filter(c => c.tagName.toLowerCase() === 'li')
                                    .indexOf(el as any) + 1;
                                txt = `${idx}. ${txt}`;
                            } else {
                                const before = window.getComputedStyle(el as HTMLElement, '::before');
                                const bc = before.content;
                                if (bc && bc !== 'none' && bc !== '""' && bc !== "''") {
                                    const bulletChar = bc.replace(/^['"]|['"]$/g, '');
                                    if (bulletChar && !/^[▶▸►•✦✓\-]/.test(txt)) {
                                        txt = bulletChar + '  ' + txt;
                                    }
                                }
                            }
                            const linkChild = (el as HTMLElement).querySelector('a');
                            if (linkChild && ((el as HTMLElement).innerText.trim() === (linkChild as HTMLElement).innerText.trim())) {
                                colorStr = window.getComputedStyle(linkChild).color;
                            }
                        }
                        const colorResult = parseColor(colorStr);
                        const color = colorResult ? colorResult.hex : '888888';
                        const fontSize = parseFloat(style.fontSize);
                        const fw = style.fontWeight;
                        const isMonospace = /monospace|Courier/i.test(style.fontFamily);
                        const lh = parseFloat(style.lineHeight) / fontSize;
                        const ls = style.letterSpacing === 'normal' ? 0 : parseFloat(style.letterSpacing) || 0;
                        const blW = parseFloat(style.borderLeftWidth) || 0;
                        const brW = parseFloat(style.borderRightWidth) || 0;
                        const btW = parseFloat(style.borderTopWidth) || 0;
                        const bbW = parseFloat(style.borderBottomWidth) || 0;
                        const pL = parseFloat(style.paddingLeft);
                        const pR = parseFloat(style.paddingRight);
                        const pT = parseFloat(style.paddingTop);
                        const pB = parseFloat(style.paddingBottom);
                        elements.push({
                            type: 'text', tag,
                            x: x + blW + pL, y: y + btW + pT,
                            w: Math.max(10, w - blW - brW - pL - pR),
                            h: Math.max(10, h - btW - bbW - pT - pB),
                            elementX: x, elementY: y,
                            text: txt, color, fontSize,
                            bold: parseInt(fw) >= 600 || fw === 'bold',
                            italic: style.fontStyle === 'italic',
                            fontFamily: isMonospace ? 'Courier New' : 'Segoe UI',
                            align: style.textAlign,
                            lineHeight: isNaN(lh) ? 1.2 : Math.min(3, Math.max(0.8, lh)),
                            charSpacing: ls,
                            isH1: tag === 'h1',
                            isH2: tag === 'h2',
                        });
                        return;
                    }
                }
            }

            for (const child of el.children) {
                walk(child, depth + 1);
            }
        }

        for (const child of slide.children) {
            walk(child, 0);
        }

        return { elements, title: titleText };
    }, slidesRect) as Promise<{ elements: ExtractedElement[]; title: string }>;
}

function readPngDimensions(filePath: string): { w: number; h: number } | null {
    try {
        const buf = Buffer.alloc(24);
        const fd = fs.openSync(filePath, 'r');
        fs.readSync(fd, buf, 0, 24, 0);
        fs.closeSync(fd);
        if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47) {
            return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
        }
        return null;
    } catch {
        return null;
    }
}

function readImageDimensions(filePath: string): { w: number; h: number } | null {
    try {
        const sizeOf = require('image-size');
        const result = sizeOf.default(filePath);
        return result?.width && result?.height ? { w: result.width, h: result.height } : null;
    } catch {
        return null;
    }
}

function cropGifWithFfmpeg(src: string, dest: string, cropW: number, cropH: number, cropX: number, cropY: number): boolean {
    try {
        const crop = `crop=${cropW}:${cropH}:${cropX}:${cropY}`;
        execSync(`ffmpeg -i "${src}" -vf "${crop},split[s0][s1];[s0]palettegen=stats_mode=full[p];[s1][p]paletteuse=dither=none" -y "${dest}" 2>/dev/null`);
        return true;
    } catch {
        return false;
    }
}

async function injectSlideImages(page: Page, presentationDir: string): Promise<void> {
    const unloadedSrcs: string[] = await page.evaluate(() => {
        const slide = (
            document.querySelector('.reveal .slides section.present > section.present') ||
            document.querySelector('.reveal .slides section.present')
        ) as HTMLElement | null;
        if (!slide) return [];
        return (Array.from(slide.querySelectorAll('img')) as HTMLImageElement[])
            .filter(el => el.naturalWidth === 0 && el.src)
            .map(el => el.src);
    });
    if (unloadedSrcs.length === 0) return;

    const dataUrlMap: Record<string, string> = {};
    for (const src of unloadedSrcs) {
        const filename = path.basename(new URL(src).pathname).split('?')[0];
        const localPath = path.join(presentationDir, filename);
        const assetsPath = path.join(presentationDir, 'assets', filename);
        const filePath = fs.existsSync(localPath) ? localPath : fs.existsSync(assetsPath) ? assetsPath : null;
        if (filePath) {
            const ext = path.extname(filename).slice(1).toLowerCase();
            const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : `image/${ext}`;
            dataUrlMap[filename] = `data:${mime};base64,${fs.readFileSync(filePath).toString('base64')}`;
        }
    }
    if (Object.keys(dataUrlMap).length === 0) return;

    await page.evaluate((map: Record<string, string>) => {
        return new Promise<void>(resolve => {
            const slide = (
                document.querySelector('.reveal .slides section.present > section.present') ||
                document.querySelector('.reveal .slides section.present')
            ) as HTMLElement | null;
            if (!slide) { resolve(); return; }
            const imgs = (Array.from(slide.querySelectorAll('img')) as HTMLImageElement[])
                .filter(el => el.naturalWidth === 0);
            if (imgs.length === 0) { resolve(); return; }
            let done = 0;
            const check = () => { if (++done >= imgs.length) resolve(); };
            imgs.forEach(el => {
                const filename = el.src.split('/').pop()?.split('?')[0] || '';
                if (map[filename]) {
                    el.setAttribute('data-export-filename', filename);
                    el.onload = check;
                    el.onerror = check;
                    el.src = map[filename];
                } else {
                    check();
                }
            });
        });
    }, dataUrlMap);

    await new Promise(r => setTimeout(r, 500));
}

async function screenshotClip(page: Page, clipX: number, clipY: number, clipW: number, clipH: number): Promise<string> {
    const buf = await page.screenshot({
        clip: { x: clipX, y: clipY, width: Math.max(1, clipW), height: Math.max(1, clipH) },
        type: 'png'
    });
    return `data:image/png;base64,${Buffer.from(buf).toString('base64')}`;
}

async function getSlideBackground(page: Page): Promise<string> {
    return page.evaluate(() => {
        const bg = window.getComputedStyle(document.body).backgroundColor;
        const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (m) return [m[1], m[2], m[3]].map(n => parseInt(n).toString(16).padStart(2, '0')).join('').toUpperCase();
        return '0A0A0A';
    });
}

async function buildPptxSlide(
    pres: any,
    page: Page,
    presentationDir: string,
    slidesRect: { x: number; y: number; w: number; h: number; scale: number }
): Promise<void> {
    await injectSlideImages(page, presentationDir);

    const bgColor = await getSlideBackground(page);
    const themeGold = await page.evaluate(() => {
        const v = window.getComputedStyle(document.documentElement).getPropertyValue('--dx-gold').trim();
        return v.startsWith('#') ? v.slice(1).toUpperCase() : 'FFB400';
    });
    const slide = pres.addSlide();
    slide.background = { color: bgColor };

    const { elements, title } = await extractSlideElements(page, slidesRect);

    const rects = elements.filter(e => e.type === 'rect');
    const svgs = elements.filter(e => e.type === 'svg');
    const canvases = elements.filter(e => e.type === 'canvas');
    const images = elements.filter(e => e.type === 'image');
    const texts = elements.filter(e => e.type === 'text');

    for (const r of rects) {
        const alpha = r.bgAlpha !== undefined ? r.bgAlpha : (r.bgColor ? 1 : 0);
        const transparency = Math.round((1 - alpha) * 100);
        const fill = r.bgColor
            ? { color: r.bgColor, transparency: transparency > 0 ? transparency : undefined }
            : { type: 'none' as const };
        const lineW = Math.max(0.5, (r.borderWidth || 1) * 0.75);
        const rx = ptX(r.x), ry = ptY(r.y), rw = toInW(r.w), rh = toInH(r.h);
        if (r.borderTop && r.borderRight && r.borderBottom && r.borderLeft) {
            slide.addShape(pres.ShapeType.rect, {
                x: rx, y: ry, w: rw, h: rh,
                fill,
                line: r.borderColor ? { color: r.borderColor, width: lineW } : { type: 'none' as const },
            });
        } else {
            slide.addShape(pres.ShapeType.rect, { x: rx, y: ry, w: rw, h: rh, fill, line: { type: 'none' as const } });
            if (r.borderColor) {
                const lc = r.borderColor;
                const btW = toInH(r.borderTopWidth || lineW);
                const bbW = toInH(r.borderBottomWidth || lineW);
                const blW = toInW(r.borderLeftWidth || lineW);
                const brW = toInW(r.borderRightWidth || lineW);
                const solidFill = { color: lc };
                const noLine = { type: 'none' as const };
                if (r.borderTop)    slide.addShape(pres.ShapeType.rect, { x: rx, y: ry, w: rw, h: btW, fill: solidFill, line: noLine });
                if (r.borderBottom) slide.addShape(pres.ShapeType.rect, { x: rx, y: ry + rh - bbW, w: rw, h: bbW, fill: solidFill, line: noLine });
                if (r.borderLeft)   slide.addShape(pres.ShapeType.rect, { x: rx, y: ry, w: blW, h: rh, fill: solidFill, line: noLine });
                if (r.borderRight)  slide.addShape(pres.ShapeType.rect, { x: rx + rw - brW, y: ry, w: brW, h: rh, fill: solidFill, line: noLine });
            }
        }
    }

    for (const svg of svgs) {
        if (svg.clipW && svg.clipH && svg.clipW > 0 && svg.clipH > 0) {
            let imgData: string;
            if (svg.dataUrl && svg.dataUrl.trimStart().startsWith('<svg')) {
                imgData = `data:image/svg+xml;base64,${Buffer.from(svg.dataUrl).toString('base64')}`;
            } else {
                imgData = await screenshotClip(page, svg.clipX!, svg.clipY!, svg.clipW, svg.clipH);
            }
            slide.addImage({ data: imgData, x: ptX(svg.x), y: ptY(svg.y), w: toInW(svg.w), h: toInH(svg.h) });
        }
    }

    for (const cv of canvases) {
        if (cv.dataUrl) {
            slide.addImage({ data: cv.dataUrl, x: ptX(cv.x), y: ptY(cv.y), w: toInW(cv.w), h: toInH(cv.h) });
        }
    }

    const clips = elements.filter(e => e.type === 'clip');
    for (const clip of clips) {
        if (clip.gifSrc) {
            const filename = path.basename(clip.gifSrc.split('?')[0]);
            const localPath = path.join(presentationDir, filename);
            const assetsPath = path.join(presentationDir, 'assets', filename);
            const srcPath = fs.existsSync(localPath) ? localPath : fs.existsSync(assetsPath) ? assetsPath : null;
            if (srcPath) {
                const dims = readImageDimensions(srcPath);
                let gifPath = srcPath;
                if (dims && clip.w > 0 && clip.h > 0) {
                    const posX = clip.gifCropX ?? 50;
                    const posY = clip.gifCropY ?? 50;
                    const scale = Math.max(clip.w / dims.w, clip.h / dims.h);
                    const cropW = Math.min(dims.w, Math.round(clip.w / scale));
                    const cropH = Math.min(dims.h, Math.round(clip.h / scale));
                    const cropX = Math.round((dims.w - cropW) * (posX / 100));
                    const cropY = Math.round((dims.h - cropH) * (posY / 100));
                    const tmpPath = path.join(require('os').tmpdir(), `pptx_gif_${Date.now()}_${filename}`);
                    if (cropGifWithFfmpeg(srcPath, tmpPath, cropW, cropH, cropX, cropY)) {
                        gifPath = tmpPath;
                    }
                }
                slide.addImage({ path: gifPath, x: ptX(clip.x), y: ptY(clip.y), w: toInW(clip.w), h: toInH(clip.h) });
            }
        } else if (clip.clipW && clip.clipH && clip.clipW > 0 && clip.clipH > 0) {
            const imgData = await screenshotClip(page, clip.clipX!, clip.clipY!, clip.clipW, clip.clipH);
            slide.addImage({ data: imgData, x: ptX(clip.x), y: ptY(clip.y), w: toInW(clip.w), h: toInH(clip.h) });
        }
    }

    for (const img of images) {
        if (!img.src) continue;
        const isDataUrl = img.src.startsWith('data:');
        const filename = img.originalFilename || (isDataUrl ? '' : path.basename(new URL(img.src).pathname));
        const localPath = filename ? path.join(presentationDir, filename) : '';
        const assetsPath = filename ? path.join(presentationDir, 'assets', filename) : '';
        const finalPath = filename && fs.existsSync(localPath) ? localPath
            : filename && fs.existsSync(assetsPath) ? assetsPath : null;
        if (!finalPath && !isDataUrl) continue;

        const diskDims = finalPath ? readPngDimensions(finalPath) : null;
        const natW = img.naturalWidth || diskDims?.w || 0;
        const natH = img.naturalHeight || diskDims?.h || 0;
        const imageLoaded = (img.naturalWidth ?? 0) > 0;
        // .reveal img has padding:15px; getBoundingClientRect includes it.
        // In PPTX there is no zoom, so we draw the image at full content size and
        // place the corner brackets just 3px outside the image content boundary.
        const CSS_PAD = 15;
        const BRACKET_GAP = 3;
        const refH = imageLoaded ? Math.max(1, img.h - CSS_PAD * 2) : (img.cssMaxHeight && img.cssMaxHeight > 0 ? img.cssMaxHeight : Math.max(1, img.h - CSS_PAD * 2));
        const refW = (natW && natH) ? refH * (natW / natH) : Math.max(1, img.w - CSS_PAD * 2);
        const elX = img.x;
        const elY = img.y;
        const elW = imageLoaded ? img.w : refW + CSS_PAD * 2;
        const elH = imageLoaded ? img.h : refH + CSS_PAD * 2;
        const contentX = elX + CSS_PAD;
        const contentY = elY + CSS_PAD;
        const ih = toInH(refH);
        const iw = toInW(refW);
        const ix = ptX(contentX);
        const iy = ptY(contentY);
        console.log(`    [IMG] ${filename || '(data)'}: loaded=${imageLoaded} rendered=${img.w.toFixed(0)}x${img.h.toFixed(0)} natural=${natW}x${natH} → pptx=${iw.toFixed(3)}"x${ih.toFixed(3)}" @ (${ix.toFixed(3)},${iy.toFixed(3)})`);
        if (finalPath) {
            slide.addImage({ path: finalPath, x: ix, y: iy, w: iw, h: ih });
        } else {
            slide.addImage({ data: img.src, x: ix, y: iy, w: iw, h: ih });
        }
        // Corner brackets drawn 3px outside the image content (not element bounds).
        const noLine = { type: 'none' as const };
        const bLen = toInW(10);
        const bThk = toInH(2);
        const bx = ptX(contentX - BRACKET_GAP);
        const by = ptY(contentY - BRACKET_GAP);
        const bw = iw + toInW(BRACKET_GAP * 2);
        const bh = ih + toInH(BRACKET_GAP * 2);
        const corners = [
            [bx, by, bLen, bThk], [bx, by, bThk, bLen],
            [bx + bw - bLen, by, bLen, bThk], [bx + bw - bThk, by, bThk, bLen],
            [bx, by + bh - bThk, bLen, bThk], [bx, by + bh - bLen, bThk, bLen],
            [bx + bw - bLen, by + bh - bThk, bLen, bThk], [bx + bw - bThk, by + bh - bLen, bThk, bLen],
        ];
        for (const [cx, cy, cw, ch] of corners) {
            slide.addShape(pres.ShapeType.rect, { x: cx, y: cy, w: cw, h: ch, fill: { color: themeGold }, line: noLine });
        }
    }

    const isTitleSlide = texts.length === 1 && texts[0].isH1;

    for (const t of texts) {
        const ptSize = toPt(t.fontSize || 14);
        const fontFace = t.fontFamily || 'Segoe UI';
        const align = t.align === 'center' ? 'center' : t.align === 'right' ? 'right' : 'left';
        const lineH = t.lineHeight || 1.2;
        const pptxLineH = (ptSize / 72) * lineH;
        // pptxgenjs lineSpacingMultiple is relative to PowerPoint's auto spacing (1.2× font size),
        // whereas CSS line-height is relative to font size directly. Divide by 1.2 to match.
        const pptxLineSpacing = lineH / 1.2;
        // toPt uses PPTX_H (7.5") but toInH uses CONTENT_H (6.8"); the ratio PPTX_H/CONTENT_H
        // accounts for this so h2/h1 boxes exactly fit their PPTX text, preserving the DOM gap.
        // Body text uses 1.2 for a generous safety margin.
        const thMultiplier = (isTitleSlide && t.isH1) ? 1.25 : (t.isH1 || t.isH2) ? (PPTX_H / CONTENT_H) : 1.2;
        const th = Math.max(pptxLineH * 1.05, toInH(t.h) * thMultiplier);
        const tx = ptX(t.x);
        const tw = toInW(t.w);
        const ty = (isTitleSlide && t.isH1) ? (PPTX_H - th) / 2 : ptY(t.y);
        slide.addText(t.text || '', {
            x: tx, y: ty, w: tw, h: th,
            fontSize: ptSize,
            fontFace,
            bold: t.bold || false,
            italic: t.italic || false,
            color: t.color || '888888',
            align,
            valign: 'top',
            lineSpacingMultiple: pptxLineSpacing,
            charSpacing: t.charSpacing ? toCharSpacing(t.charSpacing) : undefined,
            wrap: true,
            margin: 0,
            fit: 'shrink',
        });

        if (t.isH1) {
            const barH = 0.04;
            const barW = tw * 0.8;
            const barX = tx + (tw - barW) / 2;
            slide.addShape(pres.ShapeType.rect, {
                x: barX, y: ty + th + toInH(20), w: barW, h: barH,
                fill: { color: t.color || '0077BE' },
                line: { type: 'none' as const },
            });
        }

        if (t.isH2) {
            const ex = t.elementX !== undefined ? t.elementX : t.x;
            const ey = t.elementY !== undefined ? t.elementY : t.y;
            // CSS ::before: 20x5px, skewX(-45deg), transform-origin 50% 50%
            // After transform the bounding box is 25x5px.
            // top-left lands at ex+2.5 (center of the 5px border-left bar).
            // So bounding box left = ex+2.5 - adj*25 = ex+2.5 - 5 = ex-2.5
            const hBarW = toInW(25);
            const hBarH = toInH(5);
            slide.addShape(pres.ShapeType.parallelogram, {
                x: Math.max(0, ptX(ex) - toInW(2.5)),
                y: Math.max(0, ptY(ey - 5)),
                w: hBarW,
                h: hBarH,
                rectRadius: 0.2 * Math.min(hBarW, hBarH),
                fill: { color: t.color || '0077BE' },
                line: { type: 'none' as const },
            });
        }
    }
}

async function exportToPptx(presentationName: string): Promise<void> {
    const presentationDir = path.join(PRESENTATIONS_DIR, presentationName);
    const outputPath = path.join(presentationDir, `${presentationName}.pptx`);
    const url = `http://localhost:${PORT}/${presentationName}/index.html`;

    console.log(`Exporting ${presentationName} to PPTX...`);

    const browser: Browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        protocolTimeout: 60000
    });

    try {
        const page: Page = await browser.newPage();
        await page.setViewport({ width: SLIDE_W, height: SLIDE_H, deviceScaleFactor: 1.5 });

        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        await page.waitForFunction(() => !!(window as any).Reveal && (window as any).Reveal.isReady(), { timeout: 15000 });

        await disableAnimations(page);
        await hideRevealUI(page);
        await waitForContent(page);

        const slidePositions = await getSlidePositions(page);
        console.log(`  Found ${slidePositions.length} slides`);

        // Get the slides container rect once (stable across navigation)
        const slidesRect = await getSlidesRect(page);
        console.log(`  Slides rect: ${slidesRect.w.toFixed(0)}x${slidesRect.h.toFixed(0)} @ (${slidesRect.x.toFixed(1)},${slidesRect.y.toFixed(1)}) scale=${slidesRect.scale.toFixed(3)}`);

        const pres = new pptxgen();
        pres.defineLayout({ name: 'REVEAL', width: PPTX_W, height: PPTX_H });
        pres.layout = 'REVEAL';

        for (let i = 0; i < slidePositions.length; i++) {
            const { h, v } = slidePositions[i];
            console.log(`  Processing slide ${i + 1}/${slidePositions.length} [${h},${v}]`);
            await navigateToSlide(page, h, v);
            await waitForContent(page);
            await revealAllFragments(page);
            await buildPptxSlide(pres, page, presentationDir, slidesRect);
        }

        await pres.writeFile({ fileName: outputPath });
        console.log(`  Saved: ${outputPath}`);
    } finally {
        await browser.close();
    }
}

async function main() {
    const args = process.argv.slice(2);
    const exportAll = args.includes('--all');
    const specificName = args.find(a => !a.startsWith('--'));

    const presentations = getPresentationDirs();
    if (presentations.length === 0) {
        console.error('No presentations found. Run "npm run generate" first.');
        process.exit(1);
    }

    let toExport: string[] = [];
    if (exportAll) {
        toExport = presentations;
    } else if (specificName) {
        if (presentations.includes(specificName)) {
            toExport = [specificName];
        } else {
            console.error(`Presentation "${specificName}" not found.`);
            console.log('Available:', presentations.join(', '));
            process.exit(1);
        }
    } else {
        console.log('Usage:');
        console.log('  npm run pptx <name>   Export specific presentation');
        console.log('  npm run pptx:all      Export all presentations');
        console.log('');
        console.log('Available:', presentations.join(', '));
        process.exit(0);
    }

    const server = startServer();
    try {
        await waitForServer(PORT);
        console.log('Server ready.');
        for (const name of toExport) {
            await exportToPptx(name);
        }
    } finally {
        try { process.kill(-server.pid!, 'SIGTERM'); } catch {}
        server.kill();
        console.log('Server stopped.');
    }
}

main().then(() => process.exit(0)).catch(err => {
    console.error(err);
    process.exit(1);
});
