import { HoloImage } from '../../src/components';


export const section = {
    title: "Cupcake",
    slides: `
<section>
    <h2>The incomplete metadata problem</h2>
    <p style="font-size: 0.85em; color: var(--dx-text-secondary); margin: 12px 0 0; line-height: 1.6;">Proteomics experiments generate rich data but the metadata describing them is often incomplete, inconsistently recorded, and stored in ways that make it hard to reuse or share.</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; font-size: 0.75em; text-align: left;">
        <div class="fragment" data-fragment-index="0" style="border: 1px solid var(--dx-gold-dim); padding: 12px 14px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); letter-spacing: 1px; margin-bottom: 6px;">01 · INCOMPLETE</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Critical sample details - organism, tissue, treatment, instrument - are routinely left unrecorded</div>
        </div>
        <div class="fragment" data-fragment-index="1" style="border: 1px solid var(--dx-gold-dim); padding: 12px 14px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); letter-spacing: 1px; margin-bottom: 6px;">02 · INCONSISTENT</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">The same condition appears in dozens of forms - free text with no controlled vocabulary or standard terms</div>
        </div>
        <div class="fragment" data-fragment-index="2" style="border: 1px solid var(--dx-gold-dim); padding: 12px 14px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); letter-spacing: 1px; margin-bottom: 6px;">03 · FRAGMENTED</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">What is recorded ends up scattered across emails, lab books, and ad-hoc spreadsheets that drift apart</div>
        </div>
        <div class="fragment" data-fragment-index="3" style="border: 1px solid var(--dx-gold-dim); padding: 12px 14px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); letter-spacing: 1px; margin-bottom: 6px;">04 · IRREPRODUCIBLE</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Without consistent metadata it is impossible to reproduce, compare across studies, or meet deposition requirements</div>
        </div>
    </div>
</section>

<section>
    <h2>Cupcake - adopting field best practices</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 14px; align-items: start; justify-items: center;">
        ${HoloImage('assets/cupcake.overview.table.png', 'Cupcake metadata table overview', '9999px', '5px')}
        ${HoloImage('assets/cupcake.vanilla.metadata.lookup.autofill.png', 'Cupcake metadata autofill', '9999px', '5px')}
        ${HoloImage('assets/cupcake.vanilla.create.from.schema.png', 'Cupcake create from schema', '9999px', '5px')}
    </div>
</section>
`
};
