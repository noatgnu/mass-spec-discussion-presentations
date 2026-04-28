import { HoloImage } from '../../src/components';

export const section = {
    title: "Cupcake Vanilla",
    slides: `
<section>
    <h1>Cupcake Vanilla</h1>
    <p>A persistent, template-based SDRF metadata editor — designed to make standardized annotation the path of least resistance.</p>
    ${HoloImage('assets/overview_with_table_information_as_example.png', 'Cupcake Vanilla Metadata Table Overview', '380px')}
</section>

<section>
    <h2>Features</h2>
    <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; margin-top: 24px;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px 10px; background: var(--dx-holo-bg); text-align: center;">
            <img src="assets/icon-template.svg" width="44" height="44" alt="" style="margin-bottom: 10px; display: block; margin-left: auto; margin-right: auto;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.7em; letter-spacing: 1px; margin-bottom: 6px;">TEMPLATE LIBRARY</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.68em; line-height: 1.5;">Persistent, reusable, customizable and shareable templates</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px 10px; background: var(--dx-holo-bg); text-align: center;">
            <img src="assets/icon-autofill.svg" width="44" height="44" alt="" style="margin-bottom: 10px; display: block; margin-left: auto; margin-right: auto;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.7em; letter-spacing: 1px; margin-bottom: 6px;">AUTO-FILL</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.68em; line-height: 1.5;">Fill cells using user-defined patterns automatically</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px 10px; background: var(--dx-holo-bg); text-align: center;">
            <img src="assets/icon-ontology.svg" width="44" height="44" alt="" style="margin-bottom: 10px; display: block; margin-left: auto; margin-right: auto;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.7em; letter-spacing: 1px; margin-bottom: 6px;">ONTOLOGY SEARCH</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.68em; line-height: 1.5;">Look up OLS terms from ontology databases inline</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px 10px; background: var(--dx-holo-bg); text-align: center;">
            <img src="assets/icon-validation.svg" width="44" height="44" alt="" style="margin-bottom: 10px; display: block; margin-left: auto; margin-right: auto;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.7em; letter-spacing: 1px; margin-bottom: 6px;">VALIDATION</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.68em; line-height: 1.5;">SDRF compliance checks using official pipelines</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px 10px; background: var(--dx-holo-bg); text-align: center;">
            <img src="assets/icon-excel.svg" width="44" height="44" alt="" style="margin-bottom: 10px; display: block; margin-left: auto; margin-right: auto;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.7em; letter-spacing: 1px; margin-bottom: 6px;">EXCEL ADD-IN</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.68em; line-height: 1.5;">Sync, edit and annotate directly in Microsoft Excel</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px 10px; background: var(--dx-holo-bg); text-align: center;">
            <img src="assets/icon-export.svg" width="44" height="44" alt="" style="margin-bottom: 10px; display: block; margin-left: auto; margin-right: auto;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.7em; letter-spacing: 1px; margin-bottom: 6px;">EXPORT</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.68em; line-height: 1.5;">SDRF .tsv for PRIDE/ASAP &amp; enhanced .xlsx</div>
        </div>
    </div>
</section>

<section>
    <h2>Auto-Fill Capability</h2>
    <div style="display: flex; justify-content: center; align-items: flex-start; gap: 20px; width: 100%;">
        <div style="flex: 1;">
            <small style="color: var(--dx-gold-dim); display: block; margin-bottom: 5px;">[ BASIC — REPEAT VALUE ]</small>
            ${HoloImage('assets/basic_auto_fill.png', 'Basic Auto-Fill', '320px')}
        </div>
        <div style="flex: 1;">
            <small style="color: var(--dx-gold-dim); display: block; margin-bottom: 5px;">[ ADVANCED — PATTERN-BASED AUTO-FILL ]</small>
            ${HoloImage('assets/advanced_auto_fill.png', 'Advanced Auto-Fill', '320px')}
        </div>
    </div>
</section>

<!--
<section>
    <h2>Ontology-Driven Annotation</h2>
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px;">
        <div style="flex: 1.2;">
            ${HoloImage('assets/modification_parameter_ontology_search.png', 'Ontology Search', '380px')}
        </div>
        <div style="flex: 0.8;">
            <ul style="font-size: 0.85em;">
                <li><strong>Real-time OLS search</strong> — query community ontology repositories inline</li>
                <li><strong>Automatic URI linking</strong> — NT and AC populated together</li>
                <li><strong>PRIDE/PX compliance</strong> — terms validated against accepted vocabularies</li>
            </ul>
        </div>
    </div>
</section>
-->

<section>
    <h2>Metadata as a discovery layer</h2>
    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; margin-top: 10px;">
        <div style="flex: 0.85; font-size: 0.78em;">
            <div style="border: 1px solid var(--dx-gold-dim); padding: 14px; background: var(--dx-holo-bg); margin-bottom: 10px;">
                <strong style="color: var(--dx-gold); display: block; margin-bottom: 6px;">Search across experiments</strong>
                <div style="color: var(--dx-text-secondary); line-height: 1.6;">Filter by organism, disease, tissue, treatment, reagent, or instrument...</div>
            </div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 14px; background: var(--dx-holo-bg);">
                <strong style="color: var(--dx-gold); display: block; margin-bottom: 6px;">Collaboration opportunities</strong>
                <div style="color: var(--dx-text-secondary); line-height: 1.6;">New projects and collaborations from existing knowledgebase.</div>
            </div>
        </div>
        <div style="flex: 1.15; text-align: center;">
            <small style="color: var(--dx-gold-dim); font-family: monospace; font-size: 0.7em; display: block; margin-bottom: 6px;">[ CROSS-EXPERIMENT HEATMAP]</small>
            ${HoloImage('assets/heatmap_export.svg', 'Cross-experiment protein fold change heatmap', '400px')}
        </div>
    </div>
</section>
`
};
