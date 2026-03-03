import { HoloImage, HoloFlow } from '../../src/components';

export const section = {
    title: "Cupcake Vanilla: Persistent SDRF Management",
    slides: `
<section>
    <h1>Cupcake Vanilla</h1>
    <p>A specialized subset of Cupcake Lab Management focused on persistent SDRF (Sample and Data Relationship Format) file writing and management.</p>
    ${HoloImage('assets/cupcake-vanilla-metadata-table-overview.png', 'Cupcake Vanilla Metadata Table Overview', '400px')}
</section>

<section>
    <h2>Template-Driven Metadata</h2>
    <p>Standardize metadata collection using pre-defined or community-vetted templates.</p>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
        ${HoloImage('assets/cupcake-vanilla-table-template-browser.png', 'Template Browser', '320px')}
        <ul style="display: flex; gap: 20px; font-size: 0.8em; list-style: none; justify-content: center; width: 100%;">
            <li><strong>Template Browser:</strong> Library of experiment templates.</li>
            <li><strong>Schema Enforcement:</strong> Maintains required formats.</li>
            <li><strong>Customization:</strong> Adapts to lab-specific needs.</li>
        </ul>
    </div>
</section>

<section>
    <h2>Scenario: Creating from Schemas</h2>
    <p>Build robust experimental designs starting from standardized SDRF schemas.</p>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
        <div style="display: flex; justify-content: center; gap: 20px; align-items: center; width: 100%;">
            <div style="width: 45%;">
                 <small style="color: var(--dx-gold-dim); display: block;">[ 01. SELECT SCHEMA ]</small>
                 ${HoloImage('assets/cupcake-vanilla-create-template-from-schemas.png', 'Select Schema', '300px')}
            </div>
            <div style="color: var(--dx-gold); font-size: 2em;">▶</div>
            <div style="width: 45%;">
                 <small style="color: var(--dx-gold-dim); display: block;">[ 02. GENERATE TABLE ]</small>
                 ${HoloImage('assets/cupcake-vanilla-create-table-from-template.png', 'Generate Table', '300px')}
            </div>
        </div>
    </div>
</section>

<section>
    <h2>Smart Filling &amp; Automation</h2>
    <div style="display: flex; justify-content: center; align-items: flex-start; gap: 20px; width: 100%;">
        <div style="flex: 1;">
            <small style="color: var(--dx-gold-dim); display: block; text-align: left; margin-bottom: 5px;">[ 01. BASIC AUTO-FILL ]</small>
            ${HoloImage('assets/cupcake-vanilla-basic-auto-fill.png', 'Basic Auto-Fill', '350px')}
        </div>
        <div style="flex: 1;">
            <small style="color: var(--dx-gold-dim); display: block; text-align: left; margin-bottom: 5px;">[ 02. ADVANCED PATTERN RECOGNITION ]</small>
            ${HoloImage('assets/cupcake-vanilla-advanced-auto-fill.png', 'Advanced Auto-Fill', '350px')}
        </div>
    </div>
    <p><small>Reduce manual entry with pattern-based propagation and intelligent default values.</small></p>
</section>

<section>
    <h2>Ontology-Driven Annotation</h2>
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px;">
        <div style="flex: 1.2;">
            ${HoloImage('assets/cupcake-vanilla-ontology-driven-search-term.png', 'Ontology Search', '400px')}
        </div>
        <div style="flex: 0.8;">
            <p>Seamless integration with community-standard ontologies.</p>
            <ul style="font-size: 0.8em;">
                <li><strong>Real-time Search:</strong> Query OLS and other repositories.</li>
                <li><strong>Ontology Mapping:</strong> Automatic URI linking.</li>
                <li><strong>Validation:</strong> Ensures PRIDE/PX compliance.</li>
            </ul>
        </div>
    </div>
</section>

<section>
    <h2>Persistent Metadata History</h2>
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px;">
        <div style="flex: 0.8;">
            <p>Track the evolution of your project metadata over time.</p>
            <ul style="font-size: 0.8em;">
                <li><strong>Column History:</strong> View previous values and changes.</li>
                <li><strong>Audit Trail:</strong> Understand how and when parameters were modified.</li>
                <li><strong>Recovery:</strong> Roll back to previous design states.</li>
            </ul>
        </div>
        <div style="flex: 1.2;">
            ${HoloImage('assets/cupcake-vanilla-column-metadata-history.png', 'Metadata History', '400px')}
        </div>
    </div>
</section>

<section>
    <h2>Deep Integration with Cupcake Ecosystem</h2>
    <p>Vanilla serves as the entry point for metadata that flows into downstream analysis and visualization.</p>
    <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 20px; font-size: 0.8em;">
        <li style="border: 1px solid var(--dx-gold-dim); padding: 15px; background: rgba(201, 160, 77, 0.05);">
            <strong>Data Ingestion</strong><br><small>Directly feeds into Curtain for automated grouping.</small>
        </li>
        <li style="border: 1px solid var(--dx-gold-dim); padding: 15px; background: rgba(201, 160, 77, 0.05);">
            <strong>Analysis Setup</strong><br><small>Provides the experimental design for CauldronGO pipelines.</small>
        </li>
        <li style="border: 1px solid var(--dx-gold-dim); padding: 15px; background: rgba(201, 160, 77, 0.05);">
            <strong>Collaboration</strong><br><small>Share standardized metadata across the laboratory.</small>
        </li>
        <li style="border: 1px solid var(--dx-gold-dim); padding: 15px; background: rgba(201, 160, 77, 0.05);">
            <strong>Archiving</strong><br><small>Long-term storage of experimental parameters.</small>
        </li>
    </ul>
</section>
`
};
