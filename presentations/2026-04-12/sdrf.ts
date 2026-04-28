export const section = {
    title: "What is SDRF?",
    slides: `
<section>
    <h2>Sample and Data Relationship Format</h2>
    <ul>
        <li>Developed by HUPO-PSI (Proteomics Standards Initiative)</li>
        <li>Machine-readable and human sample annotations for mass spectrometry experiments</li>
        <li>Tab-separated values (.tsv)</li>
        <li>Controlled vocabulary from existing ontology databases</li>
    </ul>
</section>

<section>
    <h2>Column Categories</h2>
    <table>
        <thead><tr><th>Category</th><th>Purpose</th><th>Example</th></tr></thead>
        <tbody>
            <tr><td><strong>source name</strong></td><td>Sample identifiers</td><td>Sample_001</td></tr>
            <tr><td><strong>characteristics[...]</strong></td><td>Biological attributes</td><td>organism, tissue, disease</td></tr>
            <tr><td><strong>comment[...]</strong></td><td>Technical metadata</td><td>instrument, raw data file, method</td></tr>
            <tr><td><strong>factor value[...]</strong></td><td>Analysis comparison target</td><td>example: condition vs treatment</td></tr>
        </tbody>
    </table>
</section>

<!--
<section>
    <h2>Ontology-Controlled Values</h2>
    <p>Every SDRF value is tied to a standardized ontology term with a <strong>Name Term (NT)</strong> and <strong>Accession Code (AC)</strong>.</p>
    <table>
        <thead><tr><th>Field</th><th>NT</th><th>AC</th></tr></thead>
        <tbody>
            <tr><td>instrument</td><td>Orbitrap Exploris 480</td><td>MS:1003028</td></tr>
            <tr><td>label</td><td>label free sample</td><td>MS:1002038</td></tr>
            <tr><td>organism</td><td>Mus musculus</td><td>NCBITaxon:10090</td></tr>
        </tbody>
    </table>
    <p><small>This makes metadata portable, searchable, and interoperable across tools and repositories.</small></p>
</section>
-->

<section>
    <h2>Templates &amp; Schema Validation</h2>
    <p>SDRF is not one-size-fits-all. Templates define the required columns and validation rules for each experiment type.</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-top: 15px; font-size: 0.72em;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 12px; background: var(--dx-holo-bg);">
            <strong style="display:block; margin-bottom:6px; color: var(--dx-gold);">Sample Type</strong>
            <div>human</div>
            <div>vertebrates</div>
            <div>invertebrates</div>
            <div>plants</div>
            <div>cell-lines</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 12px; background: var(--dx-holo-bg);">
            <strong style="display:block; margin-bottom:6px; color: var(--dx-gold);">MS Acquisition</strong>
            <div>ms-proteomics</div>
            <div>dia-acquisition</div>
            <div>single-cell</div>
            <div>immunopeptidomics</div>
            <div>crosslinking</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 12px; background: var(--dx-holo-bg);">
            <strong style="display:block; margin-bottom:6px; color: var(--dx-gold);">Specialised</strong>
            <div>metaproteomics</div>
            <div>affinity-proteomics</div>
            <div>clinical-metadata</div>
            <div>oncology-metadata</div>
            <div>olink / somascan</div>
        </div>
    </div>
    <p style="margin-top: 12px; font-size: 0.75em;">Templates can be combined — e.g. <strong>human + dia-acquisition + clinical-metadata</strong> — each adding its own required fields and validation rules on top of the base SDRF schema.</p>
</section>
`
};
