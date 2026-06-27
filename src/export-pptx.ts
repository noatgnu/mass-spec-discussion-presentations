import * as fs from 'fs';
import * as path from 'path';
import pptxgen from 'pptxgenjs';
import * as cheerio from 'cheerio';
import type { CheerioAPI, Cheerio } from 'cheerio';
import type { AnyNode, Element } from 'domhandler';
import { marked } from 'marked';

require('ts-node').register({ transpileOnly: true });

const PRESENTATIONS_DIR = path.resolve(__dirname, '../presentations');

interface ThemeConfig {
    background: string;
    titleColor: string;
    dimTitleColor: string;
    textColor: string;
    textSecondaryColor: string;
    highlightColor: string;
    codeBg: string;
    codeColor: string;
    lineColor: string;
}

const themes: Record<'dark' | 'light', ThemeConfig> = {
    dark: {
        background: '0A0A0A',
        titleColor: 'FFB400',
        dimTitleColor: '886000',
        textColor: 'DDDDDD',
        textSecondaryColor: 'CCCCCC',
        highlightColor: 'FFB400',
        codeBg: '1A1A1A',
        codeColor: 'FFB400',
        lineColor: 'FFB400'
    },
    light: {
        background: 'F5F0E6',
        titleColor: '0077BE',
        dimTitleColor: '004466',
        textColor: '102A43',
        textSecondaryColor: '334E68',
        highlightColor: '0077BE',
        codeBg: 'EADEC9',
        codeColor: '0077BE',
        lineColor: '0077BE'
    }
};

interface Section {
    title: string;
    slides?: string;
    markdown?: string;
}

interface PresentationConfig {
    title: string;
    theme?: 'dark' | 'light';
    showToc?: boolean;
    showPageNumbers?: boolean | string;
    loc?: string;
    sections?: string[];
    slides?: string;
    markdown?: string;
}

function clearRequireCache(filePath: string): void {
    delete require.cache[require.resolve(filePath)];
}

function getPresentationDirs(): string[] {
    if (!fs.existsSync(PRESENTATIONS_DIR)) {
        console.error('Presentations directory not found');
        return [];
    }

    return fs.readdirSync(PRESENTATIONS_DIR).filter(file => {
        const dirPath = path.join(PRESENTATIONS_DIR, file);
        const indexPath = path.join(dirPath, 'index.ts');
        return fs.statSync(dirPath).isDirectory() && fs.existsSync(indexPath);
    });
}

function loadSection(presentationDir: string, sectionName: string): Section | null {
    const sectionPath = path.join(presentationDir, `${sectionName}.ts`);

    if (!fs.existsSync(sectionPath)) {
        console.error(`Section file not found: ${sectionPath}`);
        return null;
    }

    clearRequireCache(sectionPath);
    const { section } = require(sectionPath);

    if (!section || (!section.slides && !section.markdown)) {
        console.error(`Invalid section format in ${sectionPath}`);
        return null;
    }

    return section;
}

function convertMarkdownToHtml(markdown: string): string {
    const separator = /\r?\n---\r?\n/;
    const slidesMd = markdown.split(separator);
    
    return slidesMd
        .map(slideMd => `<section>${marked.parse(slideMd)}</section>`)
        .join('\n');
}

function generateTocSlide(title: string, sections: { name: string; section: Section }[]): string {
    const tocItems = sections
        .map((s, index) => `<li><a href="#/section-${index + 1}">${s.section.title}</a></li>`)
        .join('\n                        ');

    return `
                <section id="toc">
                    <h2>Table of Contents</h2>
                    <ol>
                        ${tocItems}
                    </ol>
                </section>`;
}

function generateTitleSlide(title: string): string {
    return `
                <section>
                    <h1>${title}</h1>
                </section>`;
}

function wrapSectionSlides(section: Section, sectionIndex: number): string {
    let content = '';

    if (section.slides) {
        content = section.slides;
    } else if (section.markdown) {
        content = convertMarkdownToHtml(section.markdown);
    }

    return `
                <section id="section-${sectionIndex}">
                    ${content}
                </section>`;
}

function getSlidesHtml(presentationDir: string, config: PresentationConfig): string {
    if (config.sections && Array.isArray(config.sections)) {
        const loadedSections: { name: string; section: Section }[] = [];

        for (const sectionName of config.sections) {
            const section = loadSection(presentationDir, sectionName);
            if (section) {
                loadedSections.push({ name: sectionName, section });
            }
        }

        let allSlides = generateTitleSlide(config.title);

        if (config.showToc !== false) {
            allSlides += generateTocSlide(config.title, loadedSections);
        }

        loadedSections.forEach((s, index) => {
            allSlides += wrapSectionSlides(s.section, index + 1);
        });

        return allSlides;
    } else {
        let slides = config.slides || '';
        if (config.markdown) {
            slides += convertMarkdownToHtml(config.markdown);
        }
        return slides;
    }
}

function parseInlineText($: CheerioAPI, element: Cheerio<AnyNode>, baseOptions: any = {}): any[] {
    const runs: any[] = [];

    element.contents().each((_: number, node: AnyNode) => {
        if (node.type === 'text') {
            const text = (node.data || '').replace(/\r?\n|\r/g, ' ').replace(/\s+/g, ' ');
            if (text.trim() || text === ' ') {
                runs.push({
                    text: text,
                    options: { ...baseOptions }
                });
            }
        } else if (node.type === 'tag') {
            const child = $(node);
            const tagName = node.tagName.toLowerCase();
            const childOptions = { ...baseOptions };

            if (tagName === 'br') {
                if (runs.length > 0) {
                    runs[runs.length - 1].options = { ...runs[runs.length - 1].options, breakLine: true };
                } else {
                    runs.push({ text: '', options: { ...baseOptions, breakLine: true } });
                }
                return;
            }

            if (tagName === 'strong' || tagName === 'b') {
                childOptions.bold = true;
                childOptions.color = baseOptions.highlightColor || baseOptions.color;
            } else if (tagName === 'em' || tagName === 'i') {
                childOptions.italic = true;
            } else if (tagName === 'code') {
                childOptions.fontFace = 'Courier New';
                childOptions.color = baseOptions.codeColor || 'FFB400';
            } else if (tagName === 'a') {
                childOptions.underline = true;
                childOptions.color = baseOptions.highlightColor || '0077BE';
            }
            
            runs.push(...parseInlineText($, child, childOptions));
        }
    });
    
    return runs;
}

function parseList($: CheerioAPI, listEl: Cheerio<AnyNode>, level: number = 0, theme: ThemeConfig): any[] {
    const runs: any[] = [];
    listEl.children('li').each((_: number, li: AnyNode) => {
        const liEl = $(li);
        const sublists = liEl.children('ul, ol');
        const textEl = liEl.clone();
        textEl.children('ul, ol').remove();
        
        const baseLiOptions = {
            fontSize: Math.max(10, 16 - level * 2),
            color: theme.textColor,
            fontFace: 'Segoe UI'
        };
        
        const liRuns = parseInlineText($, textEl, {
            ...baseLiOptions,
            highlightColor: theme.highlightColor,
            codeColor: theme.codeColor
        });
        
        if (liRuns.length > 0) {
            liRuns[0].options = {
                ...liRuns[0].options,
                bullet: true,
                indentLevel: level
            };
            liRuns[liRuns.length - 1].options = {
                ...liRuns[liRuns.length - 1].options,
                breakLine: true
            };
            runs.push(...liRuns);
        }
        
        sublists.each((_: number, sublist: AnyNode) => {
            runs.push(...parseList($, $(sublist), level + 1, theme));
        });
    });
    return runs;
}

function estimateTextHeight(text: string, w: number, fontSize: number): number {
    const charsPerLine = Math.max(20, Math.floor((w * 72) / (fontSize * 0.55)));
    const lines = Math.max(1, Math.ceil(text.length / charsPerLine));
    return lines * (fontSize / 72) * 1.4;
}

function fitSingleLineFontSize(text: string, w: number, maxFontSize: number, minFontSize: number): number {
    let fontSize = maxFontSize;
    while (fontSize > minFontSize) {
        const charsPerLine = (w * 72) / (fontSize * 0.55);
        if (text.length <= charsPerLine) break;
        fontSize -= 1;
    }
    return fontSize;
}

function estimateListHeight(runs: any[], w: number): number {
    let totalHeight = 0;
    let currentLineText = '';
    runs.forEach(run => {
        if (run.options && run.options.breakLine) {
            currentLineText += run.text;
            const fontSize = run.options.fontSize || 14;
            totalHeight += estimateTextHeight(currentLineText, w - (run.options.indentLevel || 0) * 0.4, fontSize);
            currentLineText = '';
        } else {
            currentLineText += run.text;
        }
    });
    if (currentLineText) {
        totalHeight += estimateTextHeight(currentLineText, w, 14);
    }
    return totalHeight;
}

function scaleRunsFontSize(runs: any[], scale: number): any[] {
    return runs.map(run => {
        if (!run.options || !run.options.fontSize) return run;
        return { ...run, options: { ...run.options, fontSize: Math.max(7, Math.round(run.options.fontSize * scale)) } };
    });
}

function fitRunsToHeight(runs: any[], w: number, maxHeight: number, minScale: number = 0.5): any[] {
    if (runs.length === 0 || maxHeight <= 0) return runs;
    let scale = 1.0;
    let scaledRuns = runs;
    for (let i = 0; i < 8; i++) {
        const h = estimateListHeight(scaledRuns, w);
        if (h <= maxHeight || scale <= minScale) break;
        scale = Math.max(minScale, scale * Math.sqrt(maxHeight / h));
        scaledRuns = scaleRunsFontSize(runs, scale);
    }
    return scaledRuns;
}

function getBlockTextOptions(tagName: string, text: string, theme: ThemeConfig, fontSize: number): any {
    if (tagName === 'small') {
        return { fontFace: 'Courier New', fontSize: Math.max(8, fontSize - 2), color: theme.dimTitleColor };
    }
    if (tagName === 'strong' || tagName === 'b') {
        return { fontFace: 'Segoe UI', fontSize, bold: true, color: theme.highlightColor };
    }
    if (tagName.startsWith('h')) {
        return { fontFace: 'Segoe UI', fontSize: fontSize + 2, bold: true, color: theme.titleColor };
    }
    const isLabel = text.length > 0 && /[A-Z]/.test(text) && text === text.toUpperCase();
    if (isLabel) {
        return { fontFace: 'Courier New', fontSize, color: theme.titleColor };
    }
    return { fontFace: 'Segoe UI', fontSize, color: theme.textColor };
}

function extractBlockRuns($: CheerioAPI, elements: Cheerio<AnyNode>, theme: ThemeConfig, fontSize: number): any[] {
    const runs: any[] = [];
    elements.each((_: number, el: AnyNode) => {
        const elTag = (el as Element).tagName?.toLowerCase();
        if (!elTag || elTag === 'script' || elTag === 'style') return;
        const elEl = $(el);

        if (elTag === 'ul' || elTag === 'ol') {
            runs.push(...parseList($, elEl, 0, theme));
            runs.push({ text: '', options: { breakLine: true } });
            return;
        }

        const text = elEl.text().trim();
        if (!text) return;

        const blockOptions = getBlockTextOptions(elTag, text, theme, fontSize);
        const blockRuns = parseInlineText($, elEl, blockOptions);
        if (blockRuns.length > 0) {
            blockRuns[blockRuns.length - 1].options = {
                ...blockRuns[blockRuns.length - 1].options,
                breakLine: true
            };
            runs.push(...blockRuns);
        }
    });
    return runs;
}

function getCardRoot($: CheerioAPI, img: AnyNode, slideEl: Cheerio<AnyNode>): Cheerio<AnyNode> | null {
    const slideNode = slideEl.get(0);
    let node = $(img).parent();

    while (node.length > 0 && node.get(0) !== slideNode) {
        const siblings = node.siblings();
        const hasImageSibling = siblings.toArray().some(sib => {
            const sibEl = $(sib);
            return sibEl.is('img') || sibEl.find('img').length > 0;
        });

        if (hasImageSibling) {
            return node;
        }

        const parent = node.parent();
        if (parent.length === 0 || parent.get(0) === slideNode) {
            return null;
        }
        node = parent;
    }

    return null;
}

function detectCardGroups($: CheerioAPI, slideEl: Cheerio<AnyNode>, imageEls: Cheerio<AnyNode>): Cheerio<AnyNode>[] | null {
    if (imageEls.length < 2) return null;

    const roots: Cheerio<AnyNode>[] = [];
    const seenRoots = new Set<AnyNode>();
    let groupParent: AnyNode | null = null;

    for (const imgNode of imageEls.toArray()) {
        const root = getCardRoot($, imgNode, slideEl);
        if (!root) return null;

        const rootNode = root.get(0)!;
        if (seenRoots.has(rootNode)) return null;
        seenRoots.add(rootNode);

        const rootParent = root.parent().get(0) ?? null;
        if (groupParent === null) {
            groupParent = rootParent;
        } else if (groupParent !== rootParent) {
            return null;
        }

        roots.push(root);
    }

    return roots.length === imageEls.length ? roots : null;
}

function hasFlexOrGridAncestor($: CheerioAPI, el: Cheerio<AnyNode>, slideEl: Cheerio<AnyNode>): boolean {
    const slideNode = slideEl.get(0);
    let node = el.parent();
    while (node.length > 0 && node.get(0) !== slideNode) {
        const style = node.attr('style') || '';
        if (/display\s*:\s*(flex|grid)/i.test(style)) return true;
        node = node.parent();
    }
    return false;
}

const REVEAL_VIEWPORT_PX = 960;

function renderCardGrid(pres: any, slide: any, $: CheerioAPI, cardRoots: Cheerio<AnyNode>[], presentationDir: string, theme: ThemeConfig): void {
    const n = cardRoots.length;
    const cols = n <= 2 ? n : n === 4 ? 2 : Math.min(3, n);
    const rows = Math.ceil(n / cols);

    const areaX = 0.5, areaY = 1.5, areaW = 9.0, areaH = 3.5;
    const gapX = 0.25, gapY = 0.25;
    const cellW = (areaW - gapX * (cols - 1)) / cols;
    const cellH = (areaH - gapY * (rows - 1)) / rows;
    const fontSize = cols >= 3 ? 9 : 11;
    const captionGap = 0.08;
    const cardPadding = 0.15;

    cardRoots.forEach((card, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cellX = areaX + col * (cellW + gapX);
        const cellY = areaY + row * (cellH + gapY);

        slide.addShape(pres.ShapeType.rect, {
            x: cellX,
            y: cellY,
            w: cellW,
            h: cellH,
            fill: { color: theme.codeBg },
            line: { color: theme.lineColor, width: 1 }
        });

        const innerX = cellX + cardPadding;
        const innerY = cellY + cardPadding;
        const innerW = cellW - cardPadding * 2;
        const innerH = cellH - cardPadding * 2;

        const imageChild = card.children().filter((_: number, c: AnyNode) => {
            const cEl = $(c);
            return cEl.is('img') || cEl.find('img').length > 0;
        }).first();

        const imgEl = (imageChild.is('img') ? imageChild : imageChild.find('img')).first();
        const imgSrc = imgEl.attr('src') || '';
        const imgPath = path.resolve(presentationDir, imgSrc);
        const imgExists = fs.existsSync(imgPath);

        const attrWidth = parseFloat(imgEl.attr('width') || '');
        const attrHeight = parseFloat(imgEl.attr('height') || '');
        const hasFixedSize = !isNaN(attrWidth) && !isNaN(attrHeight) && attrWidth > 0 && attrHeight > 0;

        const beforeEls = imageChild.length > 0 ? $(imageChild.prevAll().toArray().reverse()) : $();
        const afterEls = imageChild.length > 0 ? imageChild.nextAll() : $();

        const beforeRuns = extractBlockRuns($, beforeEls, theme, fontSize);
        const afterRuns = extractBlockRuns($, afterEls, theme, fontSize);

        if (hasFixedSize && beforeRuns.length === 0) {
            const naturalW = (attrWidth / REVEAL_VIEWPORT_PX) * areaW;
            const naturalH = (attrHeight / REVEAL_VIEWPORT_PX) * areaW;
            const maxIconSize = Math.min(innerW * 0.5, innerH * 0.4);
            const scale = Math.min(1, maxIconSize / Math.max(naturalW, naturalH));
            const imgW = naturalW * scale;
            const imgH = naturalH * scale;

            const afterBoxH = afterRuns.length > 0 ? Math.min(innerH * 0.6, estimateListHeight(afterRuns, innerW)) : 0;
            const groupH = imgH + (afterBoxH > 0 ? captionGap + afterBoxH : 0);
            const groupY = innerY + Math.max(0, (innerH - groupH) / 2);

            if (imgExists) {
                slide.addImage({
                    path: imgPath,
                    x: cellX + (cellW - imgW) / 2,
                    y: groupY,
                    w: imgW,
                    h: imgH,
                    sizing: { type: 'contain', w: imgW, h: imgH }
                });
            }

            if (afterRuns.length > 0) {
                slide.addText(fitRunsToHeight(afterRuns, innerW, afterBoxH), {
                    x: innerX,
                    y: groupY + imgH + captionGap,
                    w: innerW,
                    h: afterBoxH,
                    align: 'center',
                    valign: 'top'
                });
            }
            return;
        }

        let imageH = innerH;
        let imageY = innerY;
        let beforeBoxH = 0;
        let afterBoxH = 0;

        if (beforeRuns.length > 0) {
            beforeBoxH = Math.min(innerH * 0.45, estimateListHeight(beforeRuns, innerW));
            imageY += beforeBoxH + captionGap;
            imageH -= beforeBoxH + captionGap;
        }
        if (afterRuns.length > 0) {
            afterBoxH = Math.min(innerH * 0.5, estimateListHeight(afterRuns, innerW));
            imageH -= afterBoxH + captionGap;
        }
        imageH = Math.max(innerH * 0.35, imageH);

        if (beforeRuns.length > 0) {
            slide.addText(fitRunsToHeight(beforeRuns, innerW, beforeBoxH), {
                x: innerX,
                y: innerY,
                w: innerW,
                h: beforeBoxH,
                align: 'center',
                valign: 'bottom'
            });
        }

        if (imgExists) {
            slide.addImage({
                path: imgPath,
                x: innerX,
                y: imageY,
                w: innerW,
                h: imageH,
                sizing: { type: 'contain', w: innerW, h: imageH }
            });
        }

        if (afterRuns.length > 0) {
            slide.addText(fitRunsToHeight(afterRuns, innerW, afterBoxH), {
                x: innerX,
                y: imageY + imageH + captionGap,
                w: innerW,
                h: afterBoxH,
                align: 'center',
                valign: 'top'
            });
        }
    });
}

function findCardGridContainer($: CheerioAPI, slideEl: Cheerio<AnyNode>): Cheerio<AnyNode> | null {
    const candidates: Cheerio<AnyNode>[] = [slideEl, ...slideEl.children('div').toArray().map(d => $(d))];

    for (const container of candidates) {
        const directDivChildren = container.children('div');
        if (directDivChildren.length < 2) continue;

        const borderedChildren = directDivChildren.filter((_: number, c: AnyNode) => /border\s*:/i.test($(c).attr('style') || ''));
        if (borderedChildren.length >= 2 && borderedChildren.length / directDivChildren.length >= 0.5) {
            return container;
        }
    }

    return null;
}

function renderTextCardGrid(pres: any, slide: any, $: CheerioAPI, slideEl: Cheerio<AnyNode>, container: Cheerio<AnyNode>, theme: ThemeConfig): void {
    const cards = container.children('div')
        .filter((_: number, c: AnyNode) => /border\s*:/i.test($(c).attr('style') || ''))
        .toArray()
        .map(c => $(c));
    const n = cards.length;
    const isWholeSlide = container.get(0) === slideEl.get(0);

    const beforeEls = isWholeSlide ? $() : $(container.prevAll().toArray().reverse());
    const afterEls = isWholeSlide ? $() : container.nextAll();

    const beforeRuns = extractBlockRuns($, beforeEls, theme, 13);
    const afterRuns = extractBlockRuns($, afterEls, theme, 13);

    let gridTop = 1.5;
    if (beforeRuns.length > 0) {
        const beforeH = Math.min(0.9, estimateListHeight(beforeRuns, 9.0));
        slide.addText(fitRunsToHeight(beforeRuns, 9.0, beforeH), {
            x: 0.5,
            y: gridTop,
            w: 9.0,
            h: beforeH,
            valign: 'top'
        });
        gridTop += beforeH + 0.15;
    }

    let afterH = 0;
    if (afterRuns.length > 0) {
        afterH = Math.min(0.9, estimateListHeight(afterRuns, 9.0));
    }

    const gridBottom = 5.0 - (afterH > 0 ? afterH + 0.15 : 0);
    const gridH = gridBottom - gridTop;

    const cols = n <= 4 ? n : Math.min(3, n);
    const rows = Math.ceil(n / cols);
    const gapX = 0.2, gapY = 0.2;
    const cellW = (9.0 - gapX * (cols - 1)) / cols;
    const cellH = (gridH - gapY * (rows - 1)) / rows;
    const fontSize = cols >= 3 ? 10 : 12;

    cards.forEach((card, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const cellX = 0.5 + col * (cellW + gapX);
        const cellY = gridTop + row * (cellH + gapY);

        slide.addShape(pres.ShapeType.rect, {
            x: cellX,
            y: cellY,
            w: cellW,
            h: cellH,
            fill: { color: theme.codeBg },
            line: { color: theme.lineColor, width: 1 }
        });

        const cardRuns = extractBlockRuns($, card.children(), theme, fontSize);
        if (cardRuns.length > 0) {
            slide.addText(fitRunsToHeight(cardRuns, cellW - 0.2, cellH - 0.2), {
                x: cellX + 0.1,
                y: cellY + 0.1,
                w: cellW - 0.2,
                h: cellH - 0.2,
                align: 'center',
                valign: 'top'
            });
        }
    });

    if (afterRuns.length > 0) {
        slide.addText(fitRunsToHeight(afterRuns, 9.0, afterH), {
            x: 0.5,
            y: gridBottom + 0.15,
            w: 9.0,
            h: afterH,
            valign: 'top'
        });
    }
}

interface TableCell {
    text: string;
    options?: any;
}

function parseTable($: CheerioAPI, tableEl: Cheerio<AnyNode>, theme: ThemeConfig): TableCell[][] {
    const rows: TableCell[][] = [];

    tableEl.find('tr').each((_: number, tr: AnyNode) => {
        const rowCells: TableCell[] = [];
        $(tr).children('th, td').each((_: number, cell: Element) => {
            const cellEl = $(cell);
            const isHeader = cell.tagName.toLowerCase() === 'th';
            const cellText = cellEl.text().trim();
            
            const cellOptions: any = {
                fontFace: 'Segoe UI',
                fontSize: isHeader ? 12 : 11,
                bold: isHeader,
                color: isHeader ? theme.background : theme.textColor,
                fill: isHeader ? theme.titleColor : undefined,
                align: 'left',
                valign: 'middle',
                border: { type: 'solid', color: theme.lineColor, width: 1 }
            };
            
            rowCells.push({
                text: cellText,
                options: cellOptions
            });
        });
        
        if (rowCells.length > 0) {
            rows.push(rowCells);
        }
    });
    
    return rows;
}

function parseSlideContent($: CheerioAPI, slideEl: Cheerio<AnyNode>, theme: ThemeConfig): any[] {
    const runs: any[] = [];

    function traverse(element: Cheerio<AnyNode>) {
        element.children().each((_: number, child: Element) => {
            const childEl = $(child);
            const tagName = child.tagName.toLowerCase();
            
            const hasBlockChildren = childEl.children('p, div, ul, ol, pre, section').length > 0;
            
            if (tagName === 'ul' || tagName === 'ol') {
                runs.push(...parseList($, childEl, 0, theme));
                runs.push({ text: '', options: { breakLine: true } });
            } else if (tagName === 'pre') {
                const codeEl = childEl.find('code');
                const codeText = codeEl.length > 0 ? codeEl.text() : childEl.text();
                const codeLines = codeText.split('\n');
                codeLines.forEach((line) => {
                    runs.push({
                        text: line,
                        options: {
                            fontFace: 'Courier New',
                            fontSize: 12,
                            color: theme.codeColor
                        }
                    });
                    runs.push({ text: '', options: { breakLine: true } });
                });
                runs.push({ text: '', options: { breakLine: true } });
            } else if (tagName === 'div' && childEl.hasClass('embedded-spa-container')) {
                const iframe = childEl.find('iframe');
                const url = iframe.attr('src') || '';
                const spaTitle = childEl.find('span').first().text().replace(/[\[\]]/g, '').trim() || 'LIVE DEMO';
                runs.push({
                    text: `[ INTERACTIVE DEMO: ${spaTitle} ]`,
                    options: {
                        fontFace: 'Courier New',
                        fontSize: 14,
                        bold: true,
                        color: theme.titleColor,
                        hyperlink: { url: url }
                    }
                });
                runs.push({ text: '', options: { breakLine: true } });
                runs.push({ text: `Link: ${url}`, options: { fontFace: 'Courier New', fontSize: 10, color: theme.textSecondaryColor, breakLine: true } });
                runs.push({ text: '', options: { breakLine: true } });
            } else if (hasBlockChildren) {
                traverse(childEl);
            } else if (tagName === 'p' || tagName === 'div' || tagName.startsWith('h') || tagName === 'blockquote' || tagName === 'small' || tagName === 'strong' || tagName === 'b') {
                const isQuote = tagName === 'blockquote';
                const blockText = childEl.text().trim();
                const pRuns = parseInlineText($, childEl, {
                    ...getBlockTextOptions(tagName, blockText, theme, 14),
                    italic: isQuote
                });
                if (pRuns.length > 0) {
                    pRuns[pRuns.length - 1].options = {
                        ...pRuns[pRuns.length - 1].options,
                        breakLine: true
                    };
                    runs.push(...pRuns);
                    runs.push({ text: '', options: { breakLine: true } });
                }
            }
        });
    }
    
    traverse(slideEl);
    return runs;
}

function computeSlideLayout($: CheerioAPI, leafSlides: Cheerio<AnyNode>): {
    coordByNode: Map<AnyNode, { sectionIdx: number; slideInSection: number }>;
    firstSlideNumberBySectionId: Map<string, number>;
} {
    const coordByNode = new Map<AnyNode, { sectionIdx: number; slideInSection: number }>();
    const firstSlideNumberBySectionId = new Map<string, number>();

    let sectionIdx = 0;
    let slideInSection = 0;
    let lastGroupNode: AnyNode | null = null;
    let slideCounter = 0;

    leafSlides.each((_: number, leafNode: AnyNode) => {
        slideCounter++;
        const ancestorSections = $(leafNode).parents('section');
        const groupNode: AnyNode = ancestorSections.length > 0 ? ancestorSections.toArray()[ancestorSections.length - 1] : leafNode;

        if (groupNode !== lastGroupNode) {
            sectionIdx++;
            slideInSection = 0;
            lastGroupNode = groupNode;

            const groupId = $(groupNode).attr('id');
            if (groupId) {
                firstSlideNumberBySectionId.set(groupId, slideCounter);
            }
        }
        slideInSection++;

        coordByNode.set(leafNode, { sectionIdx, slideInSection });
    });

    return { coordByNode, firstSlideNumberBySectionId };
}

function renderTocSlide($: CheerioAPI, slideEl: Cheerio<AnyNode>, slide: any, theme: ThemeConfig, firstSlideNumberBySectionId: Map<string, number>): void {
    const items: { label: string; sectionId: string | null }[] = [];

    slideEl.find('li').each((_: number, li: AnyNode) => {
        const liEl = $(li);
        const linkEl = liEl.find('a').first();
        const label = (linkEl.length > 0 ? linkEl.text() : liEl.text()).trim();
        const href = linkEl.attr('href') || '';
        const match = href.match(/section-(\d+)/);
        const sectionId = match ? `section-${match[1]}` : null;
        if (label) items.push({ label, sectionId });
    });

    const runs: any[] = [];
    items.forEach((item, i) => {
        const targetSlide = item.sectionId ? firstSlideNumberBySectionId.get(item.sectionId) : undefined;
        runs.push({
            text: `${i + 1}. ${item.label}`,
            options: {
                fontSize: 16,
                color: theme.highlightColor,
                fontFace: 'Segoe UI',
                underline: !!targetSlide,
                breakLine: true,
                paraSpaceAfter: 10,
                ...(targetSlide ? { hyperlink: { slide: targetSlide } } : {})
            }
        });
    });

    if (runs.length > 0) {
        slide.addText(runs, {
            x: 0.8,
            y: 1.5,
            w: 8.4,
            h: 3.5,
            valign: 'top'
        });
    }
}

function addHud(pres: any, slide: any, coord: { sectionIdx: number; slideInSection: number }, slideIndex: number, totalSlides: number, theme: ThemeConfig): void {
    slide.addText([
        { text: 'STATUS: EXPORTED\n', options: { bold: true } },
        { text: 'LOC: MASS-SPEC', options: {} }
    ], {
        x: 0.4,
        y: 0.2,
        w: 3.0,
        h: 0.4,
        fontFace: 'Courier New',
        fontSize: 8,
        color: theme.dimTitleColor
    });

    slide.addText([
        { text: `COORD: SEC-${String(coord.sectionIdx).padStart(2, '0')} / PG-${String(coord.slideInSection).padStart(2, '0')}` }
    ], {
        x: 6.6,
        y: 0.2,
        w: 3.0,
        h: 0.4,
        align: 'right',
        fontFace: 'Courier New',
        fontSize: 8,
        color: theme.dimTitleColor
    });

    slide.addText([
        { text: 'SYSTEM: INFOLINK v2.1\n', options: { bold: true } },
        { text: 'SIGNAL: NOMINAL', options: {} }
    ], {
        x: 0.4,
        y: 5.15,
        w: 3.0,
        h: 0.4,
        fontFace: 'Courier New',
        fontSize: 8,
        color: theme.dimTitleColor
    });

    slide.addText([
        { text: `SLIDE: ${slideIndex} / ${totalSlides}` }
    ], {
        x: 6.6,
        y: 5.15,
        w: 3.0,
        h: 0.4,
        align: 'right',
        fontFace: 'Courier New',
        fontSize: 8,
        color: theme.dimTitleColor
    });
}

function exportToPptx(presentationName: string): Promise<void> {
    const presentationDir = path.join(PRESENTATIONS_DIR, presentationName);
    const configPath = path.join(presentationDir, 'index.ts');
    
    if (!fs.existsSync(configPath)) {
        console.error(`Config file not found: ${configPath}`);
        return Promise.resolve();
    }
    
    console.log(`Exporting presentation: ${presentationName} to PPTX...`);
    
    try {
        clearRequireCache(configPath);
        const { presentation } = require(configPath) as { presentation: PresentationConfig };
        
        if (!presentation) {
            console.error(`No presentation export in ${configPath}`);
            return Promise.resolve();
        }
        
        const themeName = presentation.theme || 'dark';
        const theme = themes[themeName];
        
        const pres = new pptxgen();
        pres.layout = 'LAYOUT_16x9';

        pres.defineSlideMaster({
            title: 'DX_THEME',
            background: { color: theme.background },
            objects: [
                {
                    line: {
                        x: 0.5,
                        y: 1.2,
                        w: 9.0,
                        h: 0,
                        line: { color: theme.lineColor, width: 2 }
                    }
                },
                {
                    placeholder: {
                        options: {
                            name: 'title',
                            type: 'title',
                            x: 0.5,
                            y: 0.6,
                            w: 9.0,
                            h: 0.6,
                            fontFace: 'Segoe UI',
                            fontSize: 24,
                            bold: true,
                            color: theme.titleColor
                        },
                        text: 'Click to add title'
                    }
                },
                {
                    placeholder: {
                        options: {
                            name: 'body',
                            type: 'body',
                            x: 0.5,
                            y: 1.5,
                            w: 9.0,
                            h: 3.5,
                            fontFace: 'Segoe UI',
                            fontSize: 14,
                            color: theme.textColor,
                            valign: 'top'
                        },
                        text: 'Click to add text'
                    }
                },
                {
                    text: {
                        text: `THEME: ${themeName.toUpperCase()}  TITLE:${theme.titleColor}  TEXT:${theme.textColor}  ACCENT:${theme.highlightColor}  CODE:${theme.codeColor}`,
                        options: {
                            x: 0.4,
                            y: 5.35,
                            w: 9.2,
                            h: 0.2,
                            fontFace: 'Courier New',
                            fontSize: 7,
                            color: theme.dimTitleColor,
                            align: 'left'
                        }
                    }
                }
            ]
        });

        const allSlidesHtml = getSlidesHtml(presentationDir, presentation);
        const $ = cheerio.load(allSlidesHtml);

        const leafSlides = $('section').filter((_, el) => $(el).find('section').length === 0);
        const totalSlides = leafSlides.length;
        const { coordByNode, firstSlideNumberBySectionId } = computeSlideLayout($, leafSlides);

        leafSlides.each((index, el) => {
            const slideEl = $(el);
            const slide = pres.addSlide();

            const dataBgColor = slideEl.attr('data-background-color');
            if (dataBgColor) {
                slide.background = { fill: dataBgColor.replace('var(--dx-black)', theme.background) };
            } else {
                slide.background = { fill: theme.background };
            }

            const slideIndex = index + 1;
            addHud(pres, slide, coordByNode.get(el)!, slideIndex, totalSlides, theme);

            const titleEl = slideEl.find('h1, h2, h3, h4, h5, h6').first();
            let titleText = '';
            if (titleEl.length > 0) {
                titleText = titleEl.text().trim();
                titleEl.remove();
            }
            
            const isTitleSlide = index === 0 || (slideEl.find('p, ul, ol, img, pre').length === 0 && slideEl.text().trim() === '');
            
            if (isTitleSlide) {
                const subtitleEl = slideEl.find('h1, h2, h3, h4, h5, h6, p').first();
                const subtitleText = subtitleEl.length > 0 ? subtitleEl.text().trim() : '';
                
                if (subtitleText) {
                    slide.addText(titleText || presentation.title, {
                        x: 0.5,
                        y: 1.8,
                        w: 9.0,
                        h: 1.0,
                        align: 'center',
                        fontSize: 36,
                        bold: true,
                        fontFace: 'Segoe UI',
                        color: theme.titleColor
                    });
                    slide.addText(subtitleText, {
                        x: 0.5,
                        y: 3.0,
                        w: 9.0,
                        h: 0.8,
                        align: 'center',
                        fontSize: 20,
                        fontFace: 'Segoe UI',
                        color: theme.textColor
                    });
                } else {
                    slide.addText(titleText || presentation.title, {
                        x: 0.5,
                        y: 2.2,
                        w: 9.0,
                        h: 1.2,
                        align: 'center',
                        fontSize: 40,
                        bold: true,
                        fontFace: 'Segoe UI',
                        color: theme.titleColor
                    });
                }
            } else {
                if (titleText) {
                    slide.addText(titleText, {
                        x: 0.5,
                        y: 0.6,
                        w: 9.0,
                        h: 0.6,
                        fontSize: fitSingleLineFontSize(titleText, 9.0, 24, 16),
                        bold: true,
                        fontFace: 'Segoe UI',
                        color: theme.titleColor,
                        valign: 'middle'
                    });
                    
                    slide.addShape(pres.ShapeType.line, {
                        x: 0.5,
                        y: 1.2,
                        w: 9.0,
                        h: 0,
                        line: { color: theme.lineColor, width: 2 }
                    });
                }

                if (slideEl.attr('id') === 'toc') {
                    renderTocSlide($, slideEl, slide, theme, firstSlideNumberBySectionId);
                    return;
                }

                slideEl.find('.holo-img-hint').remove();
                const imageEls = slideEl.find('img');
                const cardGroups = detectCardGroups($, slideEl, imageEls);

                if (cardGroups) {
                    renderCardGrid(pres, slide, $, cardGroups, presentationDir, theme);
                } else if (imageEls.length > 0) {
                    const remainingText = slideEl.text().trim();
                    const isSideBySide = hasFlexOrGridAncestor($, imageEls.first(), slideEl);
                    const tableEl = slideEl.find('table');

                    if (imageEls.length === 1 && tableEl.length > 0) {
                        const imgSrc = imageEls.first().attr('src') || '';
                        const imgPath = path.resolve(presentationDir, imgSrc);
                        const tableRows = parseTable($, tableEl.first(), theme);
                        slideEl.find('table').remove();
                        slideEl.find('img').remove();

                        if (tableRows.length > 0) {
                            slide.addTable(tableRows, { x: 0.5, y: 1.5, w: 4.3, h: 3.5 });
                        }
                        if (fs.existsSync(imgPath)) {
                            slide.addImage({
                                path: imgPath,
                                x: 5.2,
                                y: 1.5,
                                w: 4.3,
                                h: 3.5,
                                sizing: { type: 'contain', w: 4.3, h: 3.5 }
                            });
                        }

                        return;
                    }

                    if (imageEls.length === 1 && remainingText !== '' && !isSideBySide) {
                        const imgSrc = imageEls.first().attr('src') || '';
                        const imgPath = path.resolve(presentationDir, imgSrc);
                        slideEl.find('img').remove();

                        const textRuns = fitRunsToHeight(parseSlideContent($, slideEl, theme), 9.0, 0.9);
                        let textH = 0;
                        if (textRuns.length > 0) {
                            textH = Math.min(0.9, estimateListHeight(textRuns, 9.0));
                            slide.addText(textRuns, {
                                x: 0.5,
                                y: 1.5,
                                w: 9.0,
                                h: textH,
                                align: 'center',
                                valign: 'top'
                            });
                        }

                        const imgY = 1.5 + textH + (textH > 0 ? 0.15 : 0);
                        const imgH = 5.0 - imgY;
                        if (fs.existsSync(imgPath)) {
                            slide.addImage({
                                path: imgPath,
                                x: 0.5,
                                y: imgY,
                                w: 9.0,
                                h: imgH,
                                sizing: { type: 'contain', w: 9.0, h: imgH }
                            });
                        }

                        return;
                    }

                    slideEl.find('img').remove();

                    if (remainingText !== '') {
                        const textRuns = fitRunsToHeight(parseSlideContent($, slideEl, theme), 4.3, 3.5);
                        if (textRuns.length > 0) {
                            slide.addText(textRuns, {
                                x: 0.5,
                                y: 1.5,
                                w: 4.3,
                                h: 3.5,
                                valign: 'top'
                            });
                        }

                        const numImages = imageEls.length;
                        const rightColX = 5.2;
                        const rightColW = 4.3;
                        const rightColY = 1.5;
                        const rightColH = 3.5;

                        imageEls.each((imgIdx, imgNode) => {
                            const imgSrc = $(imgNode).attr('src') || '';
                            const imgPath = path.resolve(presentationDir, imgSrc);

                            if (fs.existsSync(imgPath)) {
                                let imgX = rightColX;
                                let imgW = rightColW;
                                let imgY = rightColY;
                                let imgH = rightColH;

                                if (numImages === 2) {
                                    imgW = (rightColW - 0.4) / 2;
                                    imgX = rightColX + imgIdx * (imgW + 0.4);
                                } else if (numImages > 2) {
                                    imgH = (rightColH - (numImages - 1) * 0.2) / numImages;
                                    imgY = rightColY + imgIdx * (imgH + 0.2);
                                }

                                slide.addImage({
                                    path: imgPath,
                                    x: imgX,
                                    y: imgY,
                                    w: imgW,
                                    h: imgH,
                                    sizing: { type: 'contain', w: imgW, h: imgH }
                                });
                            }
                        });
                    } else {
                        const numImages = imageEls.length;
                        imageEls.each((imgIdx, imgNode) => {
                            const imgSrc = $(imgNode).attr('src') || '';
                            const imgPath = path.resolve(presentationDir, imgSrc);

                            if (fs.existsSync(imgPath)) {
                                let imgX = 1.5;
                                let imgW = 7.0;
                                let imgY = 1.5;
                                let imgH = 3.5;

                                if (numImages === 2) {
                                    imgW = 3.3;
                                    imgX = 1.5 + imgIdx * (imgW + 0.4);
                                } else if (numImages > 2) {
                                    imgW = (7.0 - (numImages - 1) * 0.2) / numImages;
                                    imgX = 1.5 + imgIdx * (imgW + 0.2);
                                }

                                slide.addImage({
                                    path: imgPath,
                                    x: imgX,
                                    y: imgY,
                                    w: imgW,
                                    h: imgH,
                                    sizing: { type: 'contain', w: imgW, h: imgH }
                                });
                            }
                        });
                    }
                } else {
                    const tableEl = slideEl.find('table');
                    const cardGridContainer = tableEl.length === 0 ? findCardGridContainer($, slideEl) : null;

                    if (tableEl.length > 0) {
                        const firstTable = tableEl.first();
                        const tableIsFirst = firstTable.prevAll().filter((_: number, e: AnyNode) => $(e).text().trim() !== '').length === 0;
                        slideEl.find('table').remove();

                        const rawTextRuns = parseSlideContent($, slideEl, theme);

                        if (tableIsFirst) {
                            const tableRowsList = tableEl.toArray().map(tbl => parseTable($, $(tbl), theme));
                            const totalRows = tableRowsList.reduce((sum, rows) => sum + rows.length, 0);
                            const tableH = Math.min(3.0, 0.4 + totalRows * 0.4);

                            tableRowsList.forEach(rows => {
                                if (rows.length > 0) {
                                    slide.addTable(rows, { x: 0.5, y: 1.5, w: 9.0, h: tableH });
                                }
                            });

                            const textY = 1.5 + tableH + 0.2;
                            if (rawTextRuns.length > 0) {
                                const textHeight = Math.min(5.0 - textY, estimateListHeight(rawTextRuns, 9.0));
                                const textRuns = fitRunsToHeight(rawTextRuns, 9.0, textHeight);
                                slide.addText(textRuns, {
                                    x: 0.5,
                                    y: textY,
                                    w: 9.0,
                                    h: textHeight,
                                    valign: 'top'
                                });
                            }
                        } else {
                            let textHeight = 0;
                            if (rawTextRuns.length > 0) {
                                textHeight = Math.min(1.5, estimateListHeight(rawTextRuns, 9.0));
                                const textRuns = fitRunsToHeight(rawTextRuns, 9.0, textHeight);
                                slide.addText(textRuns, {
                                    x: 0.5,
                                    y: 1.5,
                                    w: 9.0,
                                    h: textHeight,
                                    valign: 'top'
                                });
                            }

                            const tableY = 1.5 + textHeight + (textHeight > 0 ? 0.2 : 0);
                            const tableH = 5.0 - tableY;

                            tableEl.each((_, tbl) => {
                                const tableRows = parseTable($, $(tbl), theme);
                                if (tableRows.length > 0) {
                                    slide.addTable(tableRows, {
                                        x: 0.5,
                                        y: tableY,
                                        w: 9.0,
                                        h: tableH
                                    });
                                }
                            });
                        }
                    } else if (cardGridContainer) {
                        renderTextCardGrid(pres, slide, $, slideEl, cardGridContainer, theme);
                    } else {
                        const codeBlockEls = slideEl.find('pre');
                        if (codeBlockEls.length > 0) {
                            let currentY = 1.5;
                            slideEl.children().each((_, child) => {
                                const childEl = $(child);
                                const tagName = child.tagName.toLowerCase();
                                
                                if (tagName === 'pre') {
                                    const codeEl = childEl.find('code');
                                    const codeText = codeEl.length > 0 ? codeEl.text() : childEl.text();
                                    const numLines = codeText.split('\n').length;
                                    const codeH = Math.min(3.0, numLines * 0.22 + 0.2);
                                    
                                    slide.addText(codeText, {
                                        x: 0.5,
                                        y: currentY,
                                        w: 9.0,
                                        h: codeH,
                                        fontFace: 'Courier New',
                                        fontSize: 11,
                                        color: theme.codeColor,
                                        fill: { color: theme.codeBg },
                                        valign: 'middle',
                                        inset: 0.15
                                    });
                                    
                                    currentY += codeH + 0.15;
                                } else if (tagName === 'blockquote') {
                                    const quoteText = childEl.text().trim();
                                    const quoteH = estimateTextHeight(quoteText, 8.8, 14);
                                    
                                    slide.addShape(pres.ShapeType.line, {
                                        x: 0.5,
                                        y: currentY,
                                        w: 0,
                                        h: quoteH,
                                        line: { color: theme.lineColor, width: 3 }
                                    });
                                    slide.addText(quoteText, {
                                        x: 0.7,
                                        y: currentY,
                                        w: 8.8,
                                        h: quoteH,
                                        fontFace: 'Segoe UI',
                                        fontSize: 14,
                                        italic: true,
                                        color: theme.textColor,
                                        valign: 'middle'
                                    });
                                    
                                    currentY += quoteH + 0.15;
                                } else if (tagName === 'ul' || tagName === 'ol') {
                                    const listRuns = parseList($, childEl, 0, theme);
                                    if (listRuns.length > 0) {
                                        const listH = estimateListHeight(listRuns, 9.0);
                                        slide.addText(listRuns, {
                                            x: 0.5,
                                            y: currentY,
                                            w: 9.0,
                                            h: listH,
                                            valign: 'top'
                                        });
                                        currentY += listH + 0.15;
                                    }
                                } else {
                                    const pRuns = parseInlineText($, childEl, {
                                        fontSize: 15,
                                        color: theme.textColor,
                                        fontFace: 'Segoe UI'
                                    });
                                    if (pRuns.length > 0) {
                                        const pH = estimateListHeight(pRuns, 9.0);
                                        slide.addText(pRuns, {
                                            x: 0.5,
                                            y: currentY,
                                            w: 9.0,
                                            h: pH,
                                            valign: 'top'
                                        });
                                        currentY += pH + 0.15;
                                    }
                                }
                            });
                        } else {
                            const textRuns = fitRunsToHeight(parseSlideContent($, slideEl, theme), 9.0, 3.5);
                            if (textRuns.length > 0) {
                                slide.addText(textRuns, {
                                    x: 0.5,
                                    y: 1.5,
                                    w: 9.0,
                                    h: 3.5,
                                    valign: 'top'
                                });
                            }
                        }
                    }
                }
            }
        });
        
        const outputPath = path.join(presentationDir, `${presentationName}.pptx`);
        return pres.writeFile({ fileName: outputPath })
            .then(() => {
                console.log(`Successfully generated PPTX: ${outputPath}`);
            })
            .catch(error => {
                console.error(`Error saving PPTX for ${presentationName}:`, error);
            });
            
    } catch (error) {
        console.error(`Failed to export presentation ${presentationName} to PPTX:`, error);
        return Promise.resolve();
    }
}

async function main() {
    const args = process.argv.slice(2);
    const exportAll = args.includes('--all');
    const specificName = args.find(arg => !arg.startsWith('--'));

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
            console.log('Available presentations:', presentations.join(', '));
            process.exit(1);
        }
    } else {
        console.log('Usage:');
        console.log('  npm run pptx <presentation-name>  - Export specific presentation');
        console.log('  npm run pptx:all                  - Export all presentations');
        console.log('');
        console.log('Available presentations:', presentations.join(', '));
        process.exit(0);
    }

    const promises: Promise<void>[] = [];
    for (const name of toExport) {
        promises.push(exportToPptx(name));
    }
    
    await Promise.all(promises);
    console.log('All PPTX exports completed.');
}

main().catch(console.error);
