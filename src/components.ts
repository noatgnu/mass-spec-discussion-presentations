/**
 * Reusable UI components for the Deus Ex themed presentations
 */

/**
 * Generates a styled QR code using the qr-code-styling library.
 * This component requires the qr-code-styling library to be available in the presentation.
 */
export function QRCode(data: string, options: { size?: number, margin?: number } = {}): string {
    const { size = 300, margin = 0 } = options;
    const id = `qr-${Math.random().toString(36).substr(2, 9)}`;

    return `
<div id="${id}" class="qr-code-container" style="display: inline-block; line-height: 0; padding: ${margin}px; border: 1px solid var(--dx-gold); background: var(--dx-holo-bg); box-shadow: 0 0 20px rgba(255, 180, 0, 0.1);"></div>
<script>
    (function() {
        const checkLibrary = setInterval(() => {
            if (window.QRCodeStyling) {
                clearInterval(checkLibrary);
                const theme = document.documentElement.getAttribute('data-theme');
                const goldColor = theme === 'light' ? '#0077be' : '#ffb400';
                const bgColor = theme === 'light' ? '#f5f0e6' : '#0a0a0a';

                const qrCode = new QRCodeStyling({
                    width: ${size},
                    height: ${size},
                    type: "svg",
                    data: "${data}",
                    dotsOptions: {
                        color: goldColor,
                        type: "rounded"
                    },
                    backgroundOptions: {
                        color: bgColor,
                    },
                    cornersSquareOptions: {
                        color: goldColor,
                        type: "extra-rounded"
                    },
                    cornersDotOptions: {
                        color: goldColor,
                        type: "dot"
                    }
                });
                qrCode.append(document.getElementById("${id}"));
                const svg = document.getElementById("${id}").querySelector('svg');
                if (svg) svg.style.display = 'block';
            }
        }, 100);
    })();
</script>`;
}

export interface HoloImageFacetOptions {
    width?: string;
    height?: string;
    /** CSS object-position string ('center', 'left') or a number 0–100 representing
     *  the horizontal percentage into the image where the crop window is anchored. */
    cropPosition?: string | number;
    captionPosition?: 'top' | 'bottom';
    margin?: string;
    stretch?: boolean;
}

function parseCssObjectPosition(pos: string): { x: number; y: number } {
    const keyword: Record<string, number> = { left: 0, top: 0, center: 50, right: 100, bottom: 100 };
    const parts = pos.trim().split(/\s+/);
    const parse = (v: string) => {
        if (v in keyword) return keyword[v];
        const m = v.match(/^(\d+(?:\.\d+)?)%$/);
        return m ? parseFloat(m[1]) : 50;
    };
    return { x: parse(parts[0] ?? 'center'), y: parse(parts[1] ?? 'center') };
}

/**
 * Shows a narrow vertical crop of an image with a caption. Clicking opens the full image in the lightbox.
 * cropPosition accepts a CSS object-position string ('center', 'left', '25% top') or a number 0–100
 * that anchors the crop window at that horizontal percentage into the source image.
 */
export function HoloImageFacet(
    src: string,
    alt: string,
    caption: string,
    options: HoloImageFacetOptions = {}
): string {
    const {
        width = '160px',
        height = '260px',
        cropPosition = 'center',
        captionPosition = 'bottom',
        margin = '0',
        stretch = false,
    } = options;

    const objectPosition = typeof cropPosition === 'number'
        ? `${Math.min(100, Math.max(0, cropPosition))}% center`
        : cropPosition;
    const isGif = src.toLowerCase().endsWith('.gif');
    const gifCrop = isGif ? parseCssObjectPosition(objectPosition) : null;
    const gifAttr = isGif
        ? ` data-pptx-gif-src="${src}" data-pptx-gif-crop-x="${gifCrop!.x}" data-pptx-gif-crop-y="${gifCrop!.y}"`
        : '';

    const captionHtml = `<div style="font-family: monospace; font-size: 0.65em; color: var(--dx-gold); letter-spacing: 0.5px; text-align: center; padding: 4px 2px; line-height: 1.4; opacity: 0.85; flex-shrink: 0;">${caption}</div>`;
    const cropStyle = stretch
        ? `position: relative; overflow: hidden; width: 100%; flex: 1; min-height: 0; border: 1px solid var(--dx-gold-dim);`
        : `position: relative; overflow: hidden; width: ${width}; height: ${height}; border: 1px solid var(--dx-gold-dim); flex-shrink: 0;`;
    const wrapperStyle = stretch
        ? `display: flex; flex-direction: column; margin: ${margin}; width: ${width}; gap: 4px; align-self: stretch;`
        : `display: inline-flex; flex-direction: column; margin: ${margin}; width: ${width}; gap: 4px;`;

    return `
<div style="${wrapperStyle}">
    ${captionPosition === 'top' ? captionHtml : ''}
    <div data-pptx-export="screenshot"${gifAttr} style="${cropStyle}">
        <img src="${src}" alt="${alt}" class="holo-facet-img"
             style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: ${objectPosition}; margin: 0; border: none; box-shadow: none;">
        <div class="holo-img-hint" style="
            position: absolute; bottom: 6px; right: 6px;
            color: var(--dx-gold); font-family: monospace; font-size: 9px;
            background: rgba(0,0,0,0.7); padding: 2px 6px;
            border: 1px solid var(--dx-gold); pointer-events: none;
            letter-spacing: 1px; opacity: 0.7; z-index: 5;
        ">[ EXPAND ]</div>
    </div>
    ${captionPosition === 'bottom' ? captionHtml : ''}
</div>`;
}

export interface HoloImageFacetGridItem {
    src: string;
    alt: string;
    caption: string;
    cropPosition?: string | number;
    /** Overrides the equal-split column width, e.g. for a portrait image sitting next to a landscape one. */
    width?: string;
}

/**
 * Generates a full <section> slide containing a row of facet images that fill the
 * available space beneath the title. Uses an absolutely-positioned inner wrapper so
 * that the flex layout is not overridden by Reveal.js's own section styling.
 */
export function HoloImageFacetGrid(
    title: string,
    items: HoloImageFacetGridItem[],
    captionPosition: 'top' | 'bottom' = 'bottom'
): string {
    const defaultWidth = `${Math.floor(100 / items.length)}%`;
    const facets = items.map(item =>
        HoloImageFacet(item.src, item.alt, item.caption, {
            width: item.width ?? defaultWidth,
            cropPosition: item.cropPosition ?? 'center',
            captionPosition,
            stretch: true,
        })
    ).join('\n');

    return `
<section style="height: 720px;">
    <div style="position: absolute; inset: 0; display: flex; flex-direction: column; padding: 20px 40px;">
        <h2>${title}</h2>
        <div style="display: flex; justify-content: center; align-items: stretch; gap: 12px; flex: 1; min-height: 0; margin-top: 14px; width: 100%;">
${facets}
        </div>
    </div>
</section>`;
}

/**
 * Generates an image wrapped in a holographic container with a zoom hint.
 */
export function HoloImage(src: string, alt: string, height: string = '450px', margin: string = '10px'): string {
    return `
<div class="holo-img-container" style="position: relative; display: inline-block; margin: ${margin}; max-width: 100%;">
    <img src="${src}" alt="${alt}" style="max-height: ${height}; width: auto; max-width: 100%; display: block; object-fit: contain;">
    <div class="holo-img-hint" style="
        position: absolute; 
        bottom: 25px; 
        right: 25px; 
        color: var(--dx-gold); 
        font-family: monospace; 
        font-size: 10px; 
        background: rgba(0,0,0,0.7); 
        padding: 3px 8px; 
        border: 1px solid var(--dx-gold); 
        pointer-events: none;
        letter-spacing: 1px;
        opacity: 0.7;
        z-index: 5;
    ">
        [ ZOOM_ENABLED ]
    </div>
</div>`;
}

/**
 * Generates a row-based flow chart step
 */
export function HoloStep(index: number, label: string, src: string): string {
    return `
<div style="text-align: center; width: 20%;">
    <small style="display: block; margin-bottom: 5px; color: var(--dx-gold-dim); font-family: monospace;">0${index}. ${label}</small>
    <div class="holo-img-container" style="position: relative;">
        <img src="${src}" alt="${label}" style="width: 100%; border: 1px solid var(--dx-gold); cursor: zoom-in;">
    </div>
</div>`;
}

/**
 * Generates a full flow chart with arrows
 */
export function HoloFlow(steps: {label: string, src: string}[]): string {
    const stepsHtml = steps.map((s: {label: string, src: string}, i: number) => HoloStep(i + 1, s.label, s.src)).join(`
    <div style="color: var(--dx-gold); font-size: 1.5em; font-family: monospace; align-self: center; margin-top: 20px;">▶</div>
    `);

    return `
<div style="display: flex; justify-content: center; align-items: flex-start; gap: 15px; width: 100%; margin-top: 20px;">
    ${stepsHtml}
</div>`;
}

export interface EmbeddedSPAOptions {
    height?: string;
    title?: string;
    showHeader?: boolean;
}

/**
 * Embeds a Single Page Application (SPA) within a presentation slide.
 * Useful for live demonstrations of Cauldron plugins or other web applications.
 */
export function EmbeddedSPA(url: string, options: EmbeddedSPAOptions = {}): string {
    const {
        height = '500px',
        title = 'LIVE_DEMO',
        showHeader = true
    } = options;

    const headerHtml = showHeader ? `
    <div style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 12px;
        background: linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(20,20,20,0.9) 100%);
        border: 1px solid var(--dx-gold);
        border-bottom: none;
        font-family: monospace;
        font-size: 12px;
    ">
        <span style="color: var(--dx-gold); letter-spacing: 2px;">[ ${title} ]</span>
        <span style="color: var(--dx-gold-dim); font-size: 10px;">INTERACTIVE</span>
    </div>` : '';

    return `
<div class="embedded-spa-container" style="
    width: 95%;
    margin: 0 auto;
    box-shadow: 0 0 20px rgba(201, 160, 77, 0.3);
">
    ${headerHtml}
    <iframe
        src="${url}"
        style="
            width: 100%;
            height: ${height};
            border: 1px solid var(--dx-gold);
            background: #1a1a1a;
            display: block;
        "
        allow="clipboard-write"
        sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups allow-downloads"
    ></iframe>
</div>`;
}
