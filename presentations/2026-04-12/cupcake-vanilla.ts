import { HoloImage } from '../../src/components';

export const section = {
    title: "Cupcake Vanilla",
    slides: `
<section>
    <h1>Cupcake Vanilla</h1>
    <p>A persistent, template-based SDRF metadata editor — designed to make standardized annotation the path of least resistance.</p>
    ${HoloImage('assets/cupcake-vanilla-metadata-table-overview.png', 'Cupcake Vanilla Metadata Table Overview', '380px')}
</section>

<section>
    <h2>Combine different schemas to create your owned persistent template</h2>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
        ${HoloImage('assets/cupcake-vanilla-table-template-browser.png', 'Template Browser', '300px')}
        <ul style="display: flex; gap: 20px; font-size: 0.8em; list-style: none; justify-content: center; width: 100%;">
            <li><strong>Template Browser:</strong> Template from you or your lab group</li>
            <li><strong>Schema Enforcement:</strong> Template create from schema carry over all schema requirements</li>
            <li><strong>Reusable:</strong> Share templates across experiments and users</li>
        </ul>
    </div>
</section>

<section>
    <h2>Creating from Schemas</h2>
    <div style="display: flex; justify-content: center; gap: 20px; align-items: center; width: 100%;">
        <div style="width: 45%;">
            <small style="color: var(--dx-gold-dim); display: block;">[ 01. SELECT SCHEMA ]</small>
            ${HoloImage('assets/cupcake-vanilla-create-template-from-schemas.png', 'Select Schema', '280px')}
        </div>
        <div style="color: var(--dx-gold); font-size: 2em;">▶</div>
        <div style="width: 45%;">
            <small style="color: var(--dx-gold-dim); display: block;">[ 02. GENERATE TABLE ]</small>
            ${HoloImage('assets/cupcake-vanilla-create-table-from-template.png', 'Generate Table', '280px')}
        </div>
    </div>
</section>

<section>
    <h2>Smart Auto-Fill</h2>
    <div style="display: flex; justify-content: center; align-items: flex-start; gap: 20px; width: 100%;">
        <div style="flex: 1;">
            <small style="color: var(--dx-gold-dim); display: block; margin-bottom: 5px;">[ BASIC — REPEAT VALUE ]</small>
            ${HoloImage('assets/cupcake-vanilla-basic-auto-fill.png', 'Basic Auto-Fill', '320px')}
        </div>
        <div style="flex: 1;">
            <small style="color: var(--dx-gold-dim); display: block; margin-bottom: 5px;">[ ADVANCED — PATTERN RECOGNITION ]</small>
            ${HoloImage('assets/cupcake-vanilla-advanced-auto-fill.png', 'Advanced Auto-Fill', '320px')}
        </div>
    </div>
    <p><small>Reduce manual entry with intelligent value propagation across rows.</small></p>
</section>

<section>
    <h2>Ontology-Driven Annotation</h2>
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px;">
        <div style="flex: 1.2;">
            ${HoloImage('assets/cupcake-vanilla-ontology-driven-search-term.png', 'Ontology Search', '380px')}
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
    <h2>Persistent Metadata History</h2>
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px;">
        <div style="flex: 0.8;">
            <ul style="font-size: 0.85em;">
                <li><strong>Column history:</strong> view every value a column has held</li>
                <li><strong>Audit trail:</strong> know when and how parameters were changed</li>
                <li><strong>Rollback:</strong> restore any previous state</li>
            </ul>
        </div>
        <div style="flex: 1.2;">
            ${HoloImage('assets/cupcake-vanilla-column-metadata-history.png', 'Metadata History', '380px')}
        </div>
    </div>
</section>

<section>
    <h2>Export</h2>
    <p>From a single metadata table, Cupcake Vanilla exports:</p>
    <ul>
        <li><strong>SDRF .tsv</strong> — submission-ready for PRIDE / ASAP</li>
        <li><strong>ASAP CSV bundle</strong> — SAMPLE, PROTEOMICS, DATA, CONDITION, intervention — all auto-generated</li>
        <li><strong>Excel .xlsx</strong> — for downstream manual editing or archiving</li>
    </ul>
    <p style="margin-top: 15px; color: var(--dx-gold);">STUDY.csv and PROTOCOL.csv still require manual input — PI details and method narratives cannot be inferred.</p>
</section>
`
};
