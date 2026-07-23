import { HoloImage } from '../../src/components';


export const section = {
    title: "Curtain",
    branding: true,
    slides: `
<section>
    <h2>Curtain update</h2>
    <p style="font-size: 0.85em; color: var(--dx-text-secondary); margin: 12px 0 0; line-height: 1.6;">Curtain issued its first DataCite DOI for a session built entirely from a data collection sourced from outside our own lab.</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px; margin-top: 20px; font-size: 0.72em; text-align: left;">
        <div class="fragment" data-fragment-index="0" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); padding: 10px 12px;">
            <div style="font-family: monospace; font-size: 0.75em; color: var(--dx-gold); letter-spacing: 1px; font-weight: bold; margin-bottom: 4px;">DATASET</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.4;">Cytokine Profiling Dataset</div>
        </div>
        <div class="fragment" data-fragment-index="1" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); padding: 10px 12px;">
            <div style="font-family: monospace; font-size: 0.75em; color: var(--dx-gold); letter-spacing: 1px; font-weight: bold; margin-bottom: 4px;">DOI</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.4; word-break: break-all;">10.71663/curtain.e3kv-zy19</div>
        </div>
        <div class="fragment" data-fragment-index="2" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); padding: 10px 12px;">
            <div style="font-family: monospace; font-size: 0.75em; color: var(--dx-gold); letter-spacing: 1px; font-weight: bold; margin-bottom: 4px;">PUBLISHER</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.4;">University of Dundee, 2026</div>
        </div>
        <div class="fragment" data-fragment-index="3" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); padding: 10px 12px;">
            <div style="font-family: monospace; font-size: 0.75em; color: var(--dx-gold); letter-spacing: 1px; font-weight: bold; margin-bottom: 4px;">LICENSE</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.4;">CC BY 4.0</div>
        </div>
    </div>
</section>

<section>
    <h2>First DOI-registered session</h2>
    ${HoloImage('assets/first.doi.link.registered.png', 'Curtain DOI-registered session page for the Cytokine Profiling Dataset', '520px')}
</section>

<section>
    <h2>What's in the collection</h2>
    <p style="font-size: 0.85em; color: var(--dx-text-secondary); margin: 12px 0 0; line-height: 1.6;">Peripheral inflammation profiling in LRRK2-linked Parkinson's disease, contributed by Rubiano-Castro, Alejandro.</p>
    <ul style="font-size: 0.75em; color: var(--dx-text-secondary); line-height: 1.8; text-align: left; margin-top: 16px;">
        <li>92 inflammatory markers measured by proximity extension assay (PEA)</li>
        <li>174 plasma samples across 5 cohorts: G2019S and R1441G LRRK2-PD patients, non-manifesting carriers, idiopathic PD, and healthy controls</li>
        <li>Sourced from a Spanish LRRK2 clinical cohort — external data, hosted and made explorable through Curtain</li>
        <li>Key findings: EN-RAGE, HGF, CXCL9, CCL25 up-regulated in G2019S carriers; IL-6 up-regulated in idiopathic PD</li>
    </ul>
</section>
`
};
