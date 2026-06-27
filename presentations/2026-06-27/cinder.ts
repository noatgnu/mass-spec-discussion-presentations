import { HoloImage } from '../../src/components';

export const section = {
    title: "Cinder",
    slides: `
<section>
    <h1>Cinder</h1>
    <p>A platform for searching and comparing findings across many experiments at once — so that years of individual analyses can finally talk to each other.</p>
    ${HoloImage('assets/cinder-overview.png', 'Cinder Application Overview', '340px')}
</section>

<section>
    <h2>Each experiment shouldn't have to stand alone</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; font-size: 0.78em;">
        <div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 16px; background: var(--dx-holo-bg); margin-bottom: 12px;">
                <strong style="color: var(--dx-gold); display: block; margin-bottom: 6px;">The manual approach</strong>
                <div style="color: var(--dx-text-secondary); line-height: 1.6;">"Is Protein X regulated in any of our other experiments?" means opening each result file one by one, searching manually, and building a comparison table by hand.</div>
            </div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 16px; background: var(--dx-holo-bg);">
                <strong style="color: var(--dx-gold); display: block; margin-bottom: 6px;">The scale problem</strong>
                <div style="color: var(--dx-text-secondary); line-height: 1.6;">When a lab has run hundreds of experiments over several years, even knowing what exists — let alone comparing it — is impractical without dedicated tooling.</div>
            </div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 10px; font-size: 0.85em; letter-spacing: 1px;">[ WHAT CINDER DOES ]</p>
            <ul style="color: var(--dx-text-secondary); line-height: 1.8;">
                <li>Import results from any number of Curtain sessions into one project</li>
                <li>Search by protein name across every imported experiment simultaneously</li>
                <li>View fold changes from all matching experiments side by side</li>
                <li>Combine selected results into a single cross-experiment figure</li>
                <li>Share the combined view with a persistent link</li>
            </ul>
        </div>
    </div>
</section>

<section>
    <h2>From sessions to insight in four steps</h2>
    <p style="font-size: 0.72em; color: var(--dx-text-secondary); margin-bottom: 18px;">No re-analysis required. Cinder works directly from existing Curtain sessions.</p>
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; font-size: 0.72em;">
        <div style="padding: 16px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim); border-right: none;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 8px;">01 · COLLECT</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">Paste in the links to any Curtain or CurtainPTM sessions. Cinder indexes them server-side — no re-upload of raw data.</div>
        </div>
        <div style="padding: 16px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim); border-right: none;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 8px;">02 · SEARCH</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">Type a protein name. Results come back with fold change and significance values from every experiment where it was detected.</div>
        </div>
        <div style="padding: 16px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim); border-right: none;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 8px;">03 · SELECT</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">Choose which experiments to include and configure how sample conditions should be labelled and ordered in the combined view.</div>
        </div>
        <div style="padding: 16px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim);">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 8px;">04 · VISUALISE</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">Explore the result as a colour-coded heatmap or interaction network. Tag findings and share the view with a permanent link.</div>
        </div>
    </div>
    <div style="margin-top: 14px; text-align: center;">
        ${HoloImage('assets/cinder-search.png', 'Cinder Cross-Dataset Search', '230px')}
    </div>
</section>

<section>
    <h2>Organise and share cross-experiment findings</h2>
    <div style="display: flex; gap: 20px; margin-top: 14px; font-size: 0.78em;">
        <div style="flex: 0.9;">
            <div style="border: 1px solid var(--dx-gold-dim); padding: 14px; background: var(--dx-holo-bg); margin-bottom: 10px;">
                <strong style="color: var(--dx-gold); display: block; margin-bottom: 6px;">Multi-experiment heatmap</strong>
                <div style="color: var(--dx-text-secondary); line-height: 1.6;">See the fold change for a set of proteins or peptides across every selected experiment in a single colour-coded grid. Reorder columns, rename conditions, and export for publication.</div>
            </div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 14px; background: var(--dx-holo-bg); margin-bottom: 10px;">
                <strong style="color: var(--dx-gold); display: block; margin-bottom: 6px;">Network diagram</strong>
                <div style="color: var(--dx-text-secondary); line-height: 1.6;">Map the collated hits onto a protein interaction network — with enrichment terms shown as node labels — to understand the biology at a systems level.</div>
            </div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 14px; background: var(--dx-holo-bg);">
                <strong style="color: var(--dx-gold); display: block; margin-bottom: 6px;">Projects, tags, and shared links</strong>
                <div style="color: var(--dx-text-secondary); line-height: 1.6;">Organise collations with user-defined labels and project structures. Share the entire combined view as a persistent URL — the same way Curtain sessions are shared.</div>
            </div>
        </div>
        <div style="flex: 1.1; text-align: center; display: flex; align-items: center; justify-content: center;">
            ${HoloImage('assets/cinder-collate.png', 'Cinder Multi-Experiment Heatmap', '370px')}
        </div>
    </div>
</section>
`
};
