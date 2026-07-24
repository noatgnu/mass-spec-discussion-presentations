import { HoloImage } from '../../src/components';


export const section = {
    title: "Cupcake",
    branding: true,
    slides: `
<section>
    <h2>Lab information management without network connection</h2>
    <p style="font-size: 0.85em; color: var(--dx-text-secondary); margin: 12px 0 0; line-height: 1.6;">A native app for local, offline lab information management.</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; font-size: 0.75em; text-align: left;">
        <div class="fragment" data-fragment-index="0" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); overflow: hidden;">
            <div style="padding: 8px 14px 6px; background: var(--dx-problem-bg); border-bottom: 1px solid var(--dx-problem-border);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⚠ TODAY</div>
                <div style="font-family: monospace; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold;">01 · ALL ELAB-NOTEBOOK REQUIRES CONSTANT NETWORK CONNECTION</div>
            </div>
            <div style="padding: 8px 14px 10px; background: var(--dx-solution-bg);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-solution); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⏳ CURRENT PROTOTYPE</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">A standalone app usable as a personal lab notebook with at the bench without constant connection. protocol steps, annotations, right at the bench.</div>
            </div>
        </div>
        <div class="fragment" data-fragment-index="1" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); overflow: hidden;">
            <div style="padding: 8px 14px 6px; background: var(--dx-problem-bg); border-bottom: 1px solid var(--dx-problem-border);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⚠ TODAY</div>
                <div style="font-family: monospace; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold;">02 · PROTEOMICS ONTOLOGY OFTEN REQUIRE WEB-BASED SOURCE</div>
            </div>
            <div style="padding: 8px 14px 10px; background: var(--dx-solution-bg);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-solution); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⏳ PROTOTYPE</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">User can choose to preload proteomics-related resource on their devices to access anytime, anywhere</div>
            </div>
        </div>
    </div>
</section>

<section>
    <h2>Offline protocols and ontology lookup</h2>
    ${HoloImage('assets/ipad.preview.protocol.and.ontology.browser.png', 'iPad preview of the offline protocol list and ontology browser, with an Offline/Online toggle', '520px')}
</section>
`
};
