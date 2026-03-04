/**
 * Reusable UI components for the Deus Ex themed presentations
 */

/**
 * Generates a styled QR code using the qr-code-styling library.
 * This component requires the qr-code-styling library to be available in the presentation.
 */
export function QRCode(data: string, options: { size?: number, margin?: number } = {}): string {
    const { size = 300, margin = 10 } = options;
    const id = `qr-${Math.random().toString(36).substr(2, 9)}`;

    return `
<div id="${id}" class="qr-code-container" style="display: inline-block; background: white; padding: ${margin}px; border: 4px solid var(--dx-gold);"></div>
<script>
    (function() {
        const checkLibrary = setInterval(() => {
            if (window.QRCodeStyling) {
                clearInterval(checkLibrary);
                const qrCode = new QRCodeStyling({
                    width: ${size},
                    height: ${size},
                    type: "svg",
                    data: "${data}",
                    dotsOptions: {
                        color: "#000",
                        type: "rounded"
                    },
                    backgroundOptions: {
                        color: "#fff",
                    },
                    cornersSquareOptions: {
                        type: "extra-rounded"
                    }
                });
                qrCode.append(document.getElementById("${id}"));
            }
        }, 100);
    })();
</script>`;
}

/**
 * Generates an image wrapped in a holographic container with a zoom hint.
 */
export function HoloImage(src: string, alt: string, height: string = '450px'): string {
    return `
<div class="holo-img-container" style="position: relative; display: inline-block; margin: 10px; max-width: 100%;">
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
