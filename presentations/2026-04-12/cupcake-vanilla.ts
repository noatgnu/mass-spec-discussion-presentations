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
    <h2>Combine different schemas to create your owned persistent template</h2>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
        ${HoloImage('assets/table_template_browser.png', 'Template Browser', '300px')}
        <ul style="display: flex; gap: 20px; font-size: 0.8em; list-style: none; justify-content: center; width: 100%;">
            <li><strong>Template Browser:</strong> Template from you or your lab group</li>
            <li><strong>Schema Enforcement:</strong> Template create from schema carry over all schema requirements</li>
            <li><strong>Reusable:</strong> Share templates across experiments and users</li>
        </ul>
    </div>
</section>

<section>
    <h2>Creating from Schemas</h2>
    <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
        ${HoloImage('assets/table_template_creation_from_schemas.png', 'Create Template from Schemas', '420px')}
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

<section>
    <h2>Metadata as a discovery layer</h2>
    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; margin-top: 10px;">
        <div style="flex: 0.85; font-size: 0.78em;">
            <div style="border: 1px solid var(--dx-gold-dim); padding: 14px; background: var(--dx-holo-bg); margin-bottom: 10px;">
                <strong style="color: var(--dx-gold); display: block; margin-bottom: 6px;">Search across experiments</strong>
                <div style="color: var(--dx-text-secondary); line-height: 1.6;">Filter by organism, disease, tissue, treatment, or instrument...</div>
            </div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 14px; background: var(--dx-holo-bg);">
                <strong style="color: var(--dx-gold); display: block; margin-bottom: 6px;">Collaboration opportunities</strong>
                <div style="color: var(--dx-text-secondary); line-height: 1.6;">New project and collaboration ideas.</div>
            </div>
        </div>
        <div style="flex: 1.15; text-align: center;">
            <small style="color: var(--dx-gold-dim); font-family: monospace; font-size: 0.7em; display: block; margin-bottom: 6px;">[ CROSS-EXPERIMENT HEATMAP]</small>
            ${HoloImage('assets/heatmap_export.svg', 'Cross-experiment protein fold change heatmap', '400px')}
        </div>
    </div>
</section>

<section>
    <h2>Export</h2>
    <p>From a single metadata table, Cupcake Vanilla exports:</p>
    <ul>
        <li><strong>SDRF .tsv</strong> — submission-ready for PRIDE / ASAP</li>
        <li><strong>Enhanced Excel .xlsx</strong> — for offline edit with embed information regarding favourites metadata that can be select network internet access</li>
    </ul>
</section>
`
};
