import { HoloImage } from '../../src/components';


export const section = {
    title: "Curtain",
    slides: `
<section>
    <h2>The static figure problem</h2>
    <p style="font-size: 0.85em; color: var(--dx-text-secondary); margin: 12px 0 0; line-height: 1.6;">Differential analysis results are communicated as static figures. Once the image is exported, the data and the decisions that shaped it become invisible to everyone receiving it.</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; font-size: 0.75em; text-align: left;">
        <div class="fragment" data-fragment-index="0" style="border: 1px solid var(--dx-gold-dim); padding: 12px 14px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); letter-spacing: 1px; margin-bottom: 6px;">01 · STATIC</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">A volcano plot is a frozen image. Meaning that others can look at it but cannot explore the underlying data</div>
        </div>
        <div class="fragment" data-fragment-index="1" style="border: 1px solid var(--dx-gold-dim); padding: 12px 14px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); letter-spacing: 1px; margin-bottom: 6px;">02 · OPAQUE</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Analysis parameters, filters, and thresholds are invisible to anyone receiving the exported figure</div>
        </div>
        <div class="fragment" data-fragment-index="2" style="border: 1px solid var(--dx-gold-dim); padding: 12px 14px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); letter-spacing: 1px; margin-bottom: 6px;">03 · ISOLATED</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Sessions cannot be shared with interactive filtering, zoom, and protein search intact for reviewers</div>
        </div>
        <div class="fragment" data-fragment-index="3" style="border: 1px solid var(--dx-gold-dim); padding: 12px 14px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); letter-spacing: 1px; margin-bottom: 6px;">04 · UNCITABLE</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">There is no permanent reference to the exact analysis state thus sessions cannot be cited or tracked</div>
        </div>
    </div>
</section>

<section>
    <h2>Curtain</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 14px; align-items: start; justify-items: center;">
        ${HoloImage('assets/curtain.intro.parameters.png', 'Curtain input parameters', '9999px', '5px')}
        ${HoloImage('assets/curtain.volcano.plot.overview.png', 'Curtain volcano plot overview', '9999px', '5px')}
    </div>
</section>
`
};
