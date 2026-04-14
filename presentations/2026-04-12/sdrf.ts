export const section = {
    title: "What is SDRF?",
    slides: `
<section>
    <h2>Sample and Data Relationship Format</h2>
    <ul>
        <li><strong>Origin:</strong> Developed by HUPO-PSI (Proteomics Standards Initiative)</li>
        <li><strong>Purpose:</strong> Machine-readable sample annotations for mass spectrometry experiments</li>
        <li><strong>Format:</strong> Tab-separated values (.tsv) — one row per raw file</li>
        <li><strong>ASAP adoption:</strong> Required document for CRN Cloud submission</li>
    </ul>
</section>

<section>
    <h2>Column Categories</h2>
    <table>
        <thead><tr><th>Category</th><th>Purpose</th><th>Example</th></tr></thead>
        <tbody>
            <tr><td><strong>source name</strong></td><td>Sample identifiers</td><td>Sample_001</td></tr>
            <tr><td><strong>characteristics[...]</strong></td><td>Biological attributes</td><td>organism, tissue, disease</td></tr>
            <tr><td><strong>comment[...]</strong></td><td>Technical metadata</td><td>instrument, data file, method</td></tr>
            <tr><td><strong>factor value[...]</strong></td><td>Experimental variables</td><td>condition, treatment</td></tr>
        </tbody>
    </table>
</section>

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

<section>
    <h2>ASAP Submission: What SDRF Enables</h2>
    <p>A single SDRF file can auto-generate the majority of the ASAP submission package:</p>
    <table>
        <thead><tr><th>File</th><th>Source</th></tr></thead>
        <tbody>
            <tr><td>SAMPLE.csv</td><td style="color: var(--dx-gold);">Auto-generated from SDRF</td></tr>
            <tr><td>PROTEOMICS.csv</td><td style="color: var(--dx-gold);">Auto-generated from SDRF</td></tr>
            <tr><td>DATA.csv</td><td style="color: var(--dx-gold);">Auto-generated from SDRF</td></tr>
            <tr><td>CONDITION.csv</td><td style="color: var(--dx-gold);">Auto-generated from SDRF</td></tr>
            <tr><td>STUDY.csv</td><td style="color: #888;">Manual — PI &amp; grant details</td></tr>
            <tr><td>PROTOCOL.csv</td><td style="color: #888;">Manual — method narratives</td></tr>
        </tbody>
    </table>
</section>
`
};
