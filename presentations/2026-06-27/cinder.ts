import { HoloImage } from '../../src/components';

const iFiles  = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><rect x="5" y="8" width="11" height="14" rx="1" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.2;opacity:0.5"/><rect x="9" y="5" width="11" height="14" rx="1" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.2;opacity:0.7"/><rect x="13" y="2" width="11" height="14" rx="1" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/></svg>`;
const iLens   = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><circle cx="12" cy="12" r="7" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="17" y1="17" x2="23" y2="23" style="stroke:var(--dx-gold);stroke-width:2;stroke-linecap:round"/></svg>`;
const iDL     = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><path d="M14 5v14M9 13l5 6 5-6" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><path d="M5 21v4h18v-4" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.5;opacity:0.7"/></svg>`;
const iFilter = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><line x1="5" y1="8" x2="23" y2="8" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="8" y1="14" x2="20" y2="14" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="11" y1="20" x2="17" y2="20" style="stroke:var(--dx-gold);stroke-width:1.5"/></svg>`;
const iHeat   = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><rect x="3" y="3" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold);stroke-width:1;opacity:0.9"/><rect x="10" y="3" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.3"/><rect x="17" y="3" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold);stroke-width:1;opacity:0.7"/><rect x="3" y="10" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.3"/><rect x="10" y="10" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold);stroke-width:1;opacity:0.9"/><rect x="17" y="10" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.5"/><rect x="3" y="17" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold);stroke-width:1;opacity:0.6"/><rect x="10" y="17" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.3"/><rect x="17" y="17" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold);stroke-width:1;opacity:0.9"/></svg>`;
const iNodes  = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><circle cx="14" cy="14" r="3.5" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><circle cx="5" cy="7" r="2.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.2"/><circle cx="23" cy="7" r="2.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.2"/><circle cx="5" cy="21" r="2.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.2"/><circle cx="23" cy="21" r="2.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.2"/><line x1="11" y1="12" x2="7" y2="9" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.7"/><line x1="17" y1="12" x2="21" y2="9" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.7"/><line x1="11" y1="16" x2="7" y2="19" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.7"/><line x1="17" y1="16" x2="21" y2="19" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.7"/></svg>`;
const iTag    = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><path d="M4 4h10l10 10-10 10L4 14z" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><circle cx="9" cy="9" r="2" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1"/></svg>`;

export const section = {
    title: "Cinder",
    slides: `
<section>
    <h1>Cinder</h1>
    <p>Collating your results into searchable collections</p>
    ${HoloImage('assets/cinder-overview.png', 'Cinder Application Overview', '340px')}
</section>

<section>
    <h2>The convenience of being able to search all your previous works for specific targets of interests</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px; font-size: 0.78em;">
        <div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 16px; background: var(--dx-holo-bg); margin-bottom: 12px; display:flex; gap:12px; align-items:flex-start;">
                <div style="flex-shrink:0">${iFiles.replace('display:block;margin:0 auto 10px', 'display:block;margin-top:2px')}</div>
                <div>
                    <strong style="color: var(--dx-gold); display: block; margin-bottom: 4px;">Manual lookup is time consuming</strong>
                    <div style="color: var(--dx-text-secondary); line-height: 1.5;">Searching for a protein across dozens of experiments means opening files one by one.</div>
                </div>
            </div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 16px; background: var(--dx-holo-bg); display:flex; gap:12px; align-items:flex-start;">
                <div style="flex-shrink:0">${iLens.replace('display:block;margin:0 auto 10px', 'display:block;margin-top:2px')}</div>
                <div>
                    <strong style="color: var(--dx-gold); display: block; margin-bottom: 4px;">Building a database of results is nontrivial</strong>
                    <div style="color: var(--dx-text-secondary); line-height: 1.5;">Without a central database, it is tricky to perform any search at all</div>
                </div>
            </div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 10px; font-size: 0.85em; letter-spacing: 1px;">[ CINDER SOLVES THIS ]</p>
            <ul style="color: var(--dx-text-secondary); line-height: 1.9; font-size: 0.95em;">
                <li>Import sessions from Curtain by link</li>
                <li>Search across all sessions at once</li>
                <li>View results from every experiment side by side</li>
                <li>Share the combined view permanently</li>
            </ul>
        </div>
    </div>
</section>

<section>
    <h2>From sessions to insight in four steps</h2>
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; font-size: 0.72em; margin-bottom: 14px;">
        <div style="padding: 16px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim); border-right: none; text-align: center;">
            ${iDL}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">01 · COLLECT</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">Manually import search and differential analysis output separately or from existing Curtain sessions</div>
        </div>
        <div style="padding: 16px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim); border-right: none; text-align: center;">
            ${iFilter}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">02 · COLLATE</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">Create shareable collection of experiments</div>
        </div>
        <div style="padding: 16px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim); border-right: none; text-align: center;">
            ${iLens}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">03 · SEARCH</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">Use curated protein list or your owned protein of interests</div>
        </div>
        <div style="padding: 16px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim); text-align: center;">
            ${iHeat}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">04 · VISUALISE</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">Explore the result in bar charts of intensity across different samples or a heatmap of changes direction across experiments</div>
        </div>
    </div>
    <div style="text-align: center;">
        ${HoloImage('assets/cinder-search.png', 'Cinder Cross-Dataset Search', '230px')}
    </div>
</section>
`
};
