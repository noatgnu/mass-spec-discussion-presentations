export const section = {
    title: "The Workflow",
    slides: `
<section>
    <h2>End-to-End Metadata Workflow</h2>
    <div style="display: flex; justify-content: center; align-items: center; gap: 0; width: 100%; margin-top: 30px; flex-wrap: nowrap;">
        <div style="text-align: center; flex: 1; padding: 15px; border: 1px solid var(--dx-gold-dim); background: rgba(201,160,77,0.04);">
            <div style="font-family: monospace; color: var(--dx-gold-dim); font-size: 0.65em; margin-bottom: 8px;">[ 01 ]</div>
            <div style="font-weight: bold; font-size: 0.85em;">Pick a Template</div>
            <div style="font-size: 0.7em; color: #aaa; margin-top: 6px;">Select an experiment type from the template browser or build from SDRF schemas</div>
        </div>
        <div style="color: var(--dx-gold); font-size: 1.2em; padding: 0 8px;">▶</div>
        <div style="text-align: center; flex: 1; padding: 15px; border: 1px solid var(--dx-gold-dim); background: rgba(201,160,77,0.04);">
            <div style="font-family: monospace; color: var(--dx-gold-dim); font-size: 0.65em; margin-bottom: 8px;">[ 02 ]</div>
            <div style="font-weight: bold; font-size: 0.85em;">Annotate Metadata</div>
            <div style="font-size: 0.7em; color: #aaa; margin-top: 6px;">Use auto-fill, ontology search, and structured helpers — in the web app or Excel</div>
        </div>
        <div style="color: var(--dx-gold); font-size: 1.2em; padding: 0 8px;">▶</div>
        <div style="text-align: center; flex: 1; padding: 15px; border: 1px solid var(--dx-gold-dim); background: rgba(201,160,77,0.04);">
            <div style="font-family: monospace; color: var(--dx-gold-dim); font-size: 0.65em; margin-bottom: 8px;">[ 03 ]</div>
            <div style="font-weight: bold; font-size: 0.85em;">Validate</div>
            <div style="font-size: 0.7em; color: #aaa; margin-top: 6px;">Run SDRF schema compliance checks before export</div>
        </div>
        <div style="color: var(--dx-gold); font-size: 1.2em; padding: 0 8px;">▶</div>
        <div style="text-align: center; flex: 1; padding: 15px; border: 1px solid var(--dx-gold-dim); background: rgba(201,160,77,0.04);">
            <div style="font-family: monospace; color: var(--dx-gold-dim); font-size: 0.65em; margin-bottom: 8px;">[ 04 ]</div>
            <div style="font-weight: bold; font-size: 0.85em;">Export</div>
            <div style="font-size: 0.7em; color: #aaa; margin-top: 6px;">SDRF .tsv + ASAP CSV bundle — ready for submission</div>
        </div>
    </div>
</section>

<section>
    <h2>Key Properties of This Approach</h2>
    <ul>
        <li><strong>Standardized:</strong> every annotation uses validated ontology terms</li>
        <li><strong>Reproducible:</strong> templates encode institutional knowledge and can be reused verbatim</li>
        <li><strong>Persistent:</strong> metadata lives on a server — not in someone's Downloads folder</li>
        <li><strong>Flexible:</strong> work in the web app or Excel — same backend, same data</li>
        <li><strong>Submission-ready:</strong> ASAP bundle is generated automatically from a single SDRF file</li>
    </ul>
</section>
`
};
