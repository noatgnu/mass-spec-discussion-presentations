import { HoloImage } from '../../src/components';


export const section = {
    title: "Cinder",
    slides: `
<section>
    <h2>Experiments in isolation</h2>
    <p style="font-size: 0.85em; color: var(--dx-text-secondary); margin: 12px 0 0; line-height: 1.6;">Curtain makes a single experiment explorable. But as experiment libraries grow, comparing a protein across multiple conditions means manually opening every session one by one.</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; font-size: 0.75em; text-align: left;">
        <div class="fragment" data-fragment-index="0" style="border: 1px solid var(--dx-gold-dim); padding: 12px 14px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); letter-spacing: 1px; margin-bottom: 6px;">01 · SILOED</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Every Curtain session contains exactly one experiment with no cross-session view</div>
        </div>
        <div class="fragment" data-fragment-index="1" style="border: 1px solid var(--dx-gold-dim); padding: 12px 14px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); letter-spacing: 1px; margin-bottom: 6px;">02 · MANUAL</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Checking one protein across ten experiments means opening and searching ten sessions individually</div>
        </div>
        <div class="fragment" data-fragment-index="2" style="border: 1px solid var(--dx-gold-dim); padding: 12px 14px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); letter-spacing: 1px; margin-bottom: 6px;">03 · UNCOLLECTABLE</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">No way to bundle related experiments into a shareable library for a lab or publication</div>
        </div>
        <div class="fragment" data-fragment-index="3" style="border: 1px solid var(--dx-gold-dim); padding: 12px 14px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); letter-spacing: 1px; margin-bottom: 6px;">04 · INVISIBLE</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Shared datasets have no cross-study discovery surface - relevant experiments remain unknown</div>
        </div>
    </div>
</section>

<section>
    <h2>Cinder</h2>
    <div style="text-align: center; margin-top: 14px;">
        ${HoloImage('assets/cinder.cross-dataset-search.png', 'Cinder cross-dataset search', '550px', '5px')}
    </div>
</section>
`
};
