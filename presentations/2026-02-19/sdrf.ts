import { EmbeddedSPA } from '../../src/components';

export const section = {
    title: "SDRF & ASAP Data Standards",
    slides: `
<section>
    <h2>Sample and Data Relationship Format (SDRF)</h2>
    <p>A standardized format for describing proteomics sample metadata.</p>
    <ul>
        <li><strong>Origin:</strong> Developed by HUPO-PSI (Proteomics Standards Initiative)</li>
        <li><strong>Purpose:</strong> Machine-readable sample annotations for mass spectrometry data</li>
        <li><strong>Format:</strong> Tab-separated values (.tsv)</li>
    </ul>
</section>

<section>
    <h2>SDRF Column Categories</h2>
    <table>
        <thead><tr><th>Category</th><th>Purpose</th></tr></thead>
        <tbody>
            <tr><td><strong>Source</strong></td><td>Sample identifiers</td></tr>
            <tr><td><strong>Characteristics</strong></td><td>Biological attributes</td></tr>
            <tr><td><strong>Comments</strong></td><td>Technical metadata</td></tr>
            <tr><td><strong>Factors</strong></td><td>Experimental variables</td></tr>
        </tbody>
    </table>
</section>

<section>
    <h2>Source &amp; Characteristics Columns</h2>
    <table>
        <thead><tr><th>Column</th><th>Example</th></tr></thead>
        <tbody>
            <tr><td>source name</td><td>Sample_001</td></tr>
            <tr><td>characteristics[organism]</td><td>Mus musculus</td></tr>
            <tr><td>characteristics[organism part]</td><td>brain</td></tr>
            <tr><td>characteristics[disease]</td><td>Parkinson's</td></tr>
            <tr><td>characteristics[cell type]</td><td>neuron</td></tr>
        </tbody>
    </table>
</section>

<section>
    <h2>Comment &amp; Factor Columns</h2>
    <table>
        <thead><tr><th>Column</th><th>Example</th></tr></thead>
        <tbody>
            <tr><td>comment[instrument]</td><td>Orbitrap Exploris 480</td></tr>
            <tr><td>comment[data file]</td><td>sample_001.raw</td></tr>
            <tr><td>comment[acquisition method]</td><td>DIA</td></tr>
            <tr><td>factor value[condition]</td><td>Treatment / Control</td></tr>
        </tbody>
    </table>
</section>

<section>
    <h2>Ontology-Controlled Values</h2>
    <p>SDRF uses standardized ontology terms with <strong>Name Term (NT)</strong> and <strong>Accession Code (AC)</strong>:</p>
    <table>
        <thead><tr><th>Field</th><th>NT</th><th>AC</th></tr></thead>
        <tbody>
            <tr><td>instrument</td><td>Orbitrap Exploris 480</td><td>MS:1003028</td></tr>
            <tr><td>label</td><td>label free sample</td><td>MS:1002038</td></tr>
        </tbody>
    </table>
</section>

<section>
    <h2>Modification Parameters</h2>
    <p>Modifications include additional fields:</p>
    <table>
        <thead><tr><th>Key</th><th>Meaning</th><th>Example</th></tr></thead>
        <tbody>
            <tr><td>NT</td><td>Name Term</td><td>Oxidation</td></tr>
            <tr><td>MT</td><td>Mod Type</td><td>Variable</td></tr>
            <tr><td>TA</td><td>Target AA</td><td>M</td></tr>
            <tr><td>AC</td><td>Accession</td><td>UNIMOD:35</td></tr>
        </tbody>
    </table>
</section>

<section>
    <h2>ASAP Submission Templates</h2>
    <p>ASAP (Accelerating Science for Parkinson's) requires structured metadata.</p>
</section>

<section>
    <h2>ASAP Files - Auto-Generated</h2>
    <table>
        <thead><tr><th>File</th><th>Purpose</th></tr></thead>
        <tbody>
            <tr><td><strong>SAMPLE.csv</strong></td><td>Per-sample annotations</td></tr>
            <tr><td><strong>PROTEOMICS.csv</strong></td><td>MS acquisition details</td></tr>
            <tr><td><strong>DATA.csv</strong></td><td>Raw file information</td></tr>
            <tr><td><strong>CONDITION.csv</strong></td><td>Experimental conditions</td></tr>
            <tr><td><strong>intervention.csv</strong></td><td>Condition descriptions</td></tr>
        </tbody>
    </table>
    <p><em>Can be generated from SDRF</em></p>
</section>

<section>
    <h2>Live Demo: Export ASAP Plugin</h2>
    ${EmbeddedSPA('https://noatgnu.github.io/export_asap_plugin/', { title: 'EXPORT_ASAP_PLUGIN', height: '520px' })}
</section>

<section>
    <h2>ASAP Files - Manual Input</h2>
    <table>
        <thead><tr><th>File</th><th>Purpose</th></tr></thead>
        <tbody>
            <tr><td><strong>STUDY.csv</strong></td><td>Project &amp; PI metadata</td></tr>
            <tr><td><strong>PROTOCOL.csv</strong></td><td>Experimental methods</td></tr>
        </tbody>
    </table>
    <p><em>Requires human input - narrative descriptions</em></p>
</section>

<section>
    <h2>PROTOCOL.csv - Columns</h2>
    <table>
        <thead><tr><th>Column</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><strong>sample_collection_summary</strong></td><td>Tissue collection methods</td></tr>
            <tr><td><strong>cell_extraction_summary</strong></td><td>Cell/organelle isolation</td></tr>
            <tr><td><strong>lib_prep_summary</strong></td><td>Sample preparation steps</td></tr>
            <tr><td><strong>data_processing_summary</strong></td><td>MS acquisition &amp; search</td></tr>
            <tr><td><strong>protocols_io_DOI</strong></td><td>Protocol references</td></tr>
            <tr><td><strong>other_reference</strong></td><td>PMIDs, citations</td></tr>
        </tbody>
    </table>
    <p><strong>Note:</strong> Requires manual input - cannot be auto-generated</p>
</section>

<section>
    <h2>PROTOCOL.csv - Example Values</h2>
    <p><strong>sample_collection_summary:</strong></p>
    <blockquote>Mice euthanized, brains removed. Cortex dissected, washed with ice-cold KPBS.</blockquote>
    <p><strong>lib_prep_summary:</strong></p>
    <blockquote>Reduced 10mM TCEP, alkylated 40mM IAA. S-Trap digestion with Trypsin/Lys-C.</blockquote>
    <p><strong>data_processing_summary:</strong></p>
    <blockquote>Exploris 480, DIA mode. DIA-NN 1.8.1 library-free search. 1% FDR.</blockquote>
</section>

<section>
    <h2>STUDY.csv - Example</h2>
    <table>
        <thead><tr><th>Field</th><th>Value</th></tr></thead>
        <tbody>
            <tr><td><strong>ASAP_team_name</strong></td><td>Alessi</td></tr>
            <tr><td><strong>PI_full_name</strong></td><td>Dario R. Alessi</td></tr>
            <tr><td><strong>PI_email</strong></td><td>d.r.alessi@dundee.ac.uk</td></tr>
            <tr><td><strong>number_samples</strong></td><td>24</td></tr>
            <tr><td><strong>ASAP_grant_id</strong></td><td>ASAP-000463</td></tr>
        </tbody>
    </table>
</section>

<section>
    <h2>STUDY.csv - Publication Info</h2>
    <table>
        <thead><tr><th>Field</th><th>Value</th></tr></thead>
        <tbody>
            <tr><td><strong>dataset_title</strong></td><td>VPS35[D620N] mutation induces LRRK2-mediated lysosomal association</td></tr>
            <tr><td><strong>publication_DOI</strong></td><td>10.1126/sciadv.adj1205</td></tr>
            <tr><td><strong>publication_PMID</strong></td><td>38091401</td></tr>
        </tbody>
    </table>
</section>

<section>
    <h2>SAMPLE.csv - Example</h2>
    <table>
        <thead><tr><th>sample_id</th><th>organism</th><th>tissue</th><th>condition_id</th></tr></thead>
        <tbody>
            <tr><td>IP_D620N.s3;run 1</td><td>Mus musculus</td><td>brain</td><td>IP_D620N</td></tr>
            <tr><td>IP_WT.s2;run 6</td><td>Mus musculus</td><td>brain</td><td>IP_WT</td></tr>
            <tr><td>Mock_IP.s1;run 11</td><td>Mus musculus</td><td>brain</td><td>Mock_IP</td></tr>
        </tbody>
    </table>
    <p><em>sample_id includes ontology: NT=label free sample;AC=MS:1002038</em></p>
</section>

<section>
    <h2>PROTEOMICS.csv - Example</h2>
    <table>
        <thead><tr><th>Column</th><th>Value</th></tr></thead>
        <tbody>
            <tr><td><strong>sample_id</strong></td><td>IP_D620N.s3;run 1</td></tr>
            <tr><td><strong>technology</strong></td><td>proteomic profiling by MS</td></tr>
            <tr><td><strong>assay</strong></td><td>Organelle-IP</td></tr>
            <tr><td><strong>instrument</strong></td><td>Orbitrap Exploris 480</td></tr>
            <tr><td><strong>raw_file</strong></td><td>20210407_YL_DIA_MouseBrain_S3.raw</td></tr>
        </tbody>
    </table>
</section>

<section>
    <h2>DATA.csv - Example</h2>
    <table>
        <thead><tr><th>sample_id</th><th>replicate</th><th>file_type</th><th>file_description</th></tr></thead>
        <tbody>
            <tr><td>IP_D620N.s3;run 1</td><td>1</td><td>Raw</td><td>DIA</td></tr>
            <tr><td>IP_D620N.s7;run 2</td><td>2</td><td>Raw</td><td>DIA</td></tr>
            <tr><td>IP_WT.s2;run 6</td><td>1</td><td>Raw</td><td>DIA</td></tr>
        </tbody>
    </table>
    <p><em>file_name: 20210407_YL_DIA_MouseBrain_Input_HomHet_S3.raw</em></p>
</section>

<section>
    <h2>CONDITION.csv - Example</h2>
    <table>
        <thead><tr><th>condition_id</th><th>intervention_name</th><th>intervention_id</th></tr></thead>
        <tbody>
            <tr><td>IP_D620N</td><td>Test-LysoEnrichment</td><td>LysoTAG-IP</td></tr>
            <tr><td>IP_WT</td><td>Control-LysoEnrichment</td><td>LysoTAG-IP</td></tr>
            <tr><td>Mock_IP</td><td>NegativeControl</td><td>Mock-IP</td></tr>
            <tr><td>WCL_D620N</td><td>Test-WholeCellExtract</td><td>LysoTAG-WCL</td></tr>
        </tbody>
    </table>
    <p><em>Links to intervention.csv via intervention_aux_table column</em></p>
</section>

<section>
    <h2>intervention.csv - Example</h2>
    <table>
        <thead><tr><th>condition_id</th><th>intervention_id</th></tr></thead>
        <tbody>
            <tr><td>IP_D620N</td><td>LysoTAG-IP</td></tr>
            <tr><td>IP_WT</td><td>LysoTAG-IP</td></tr>
            <tr><td>Mock_IP</td><td>Mock-IP</td></tr>
        </tbody>
    </table>
</section>

<section>
    <h2>intervention.csv - Descriptions</h2>
    <p><strong>IP_D620N (LysoTAG-IP):</strong></p>
    <blockquote>VPS35 D620N mice with 3XHA-TMEM192. Lysosome IP.</blockquote>
    <p><strong>IP_WT (LysoTAG-IP):</strong></p>
    <blockquote>Wild-Type VPS35 mice. Control for lysosome enrichment.</blockquote>
    <p><strong>Mock_IP:</strong></p>
    <blockquote>No 3XHA-TMEM192 tag. Negative control.</blockquote>
</section>

<section>
    <h2>Export ASAP Plugin</h2>
    <p>CauldronGO plugin to automate SDRF → ASAP conversion:</p>
    <ul>
        <li><strong>Input:</strong> SDRF .tsv file</li>
        <li><strong>Output:</strong> All required ASAP CSV files</li>
        <li><strong>Auto-extraction:</strong> Parses ontology terms, counts samples</li>
        <li><strong>Manual required:</strong> STUDY (PI info), PROTOCOL (method narratives)</li>
    </ul>
</section>

<section>
    <h2>Workflow Summary</h2>
    <p><strong>SDRF.tsv</strong> → <strong>Export ASAP Plugin</strong> → <strong>ASAP Files</strong></p>
</section>

<section>
    <h2>Auto-Generated Outputs</h2>
    <p>From a single SDRF file, the plugin creates:</p>
    <ul>
        <li>SAMPLE.csv</li>
        <li>PROTEOMICS.csv</li>
        <li>DATA.csv</li>
        <li>CONDITION.csv</li>
        <li>intervention.csv</li>
    </ul>
</section>

<section>
    <h2>Manual Input Required</h2>
    <p>These files need human input:</p>
    <table>
        <thead><tr><th>File</th><th>Why Manual?</th></tr></thead>
        <tbody>
            <tr><td><strong>STUDY.csv</strong></td><td>PI contact info, grant IDs</td></tr>
            <tr><td><strong>PROTOCOL.csv</strong></td><td>Method narratives, DOIs</td></tr>
        </tbody>
    </table>
</section>

<section>
    <h2>Benefits of Standardization</h2>
    <table>
        <thead><tr><th>Benefit</th><th>Description</th></tr></thead>
        <tbody>
            <tr><td><strong>Reproducibility</strong></td><td>Machine-readable metadata</td></tr>
            <tr><td><strong>Interoperability</strong></td><td>Works with PRIDE &amp; ASAP</td></tr>
            <tr><td><strong>Automation</strong></td><td>Fewer manual entry errors</td></tr>
            <tr><td><strong>Validation</strong></td><td>Ontology ensures consistency</td></tr>
        </tbody>
    </table>
</section>
`
};
