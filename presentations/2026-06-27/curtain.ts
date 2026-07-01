import { HoloImage, QRCode } from '../../src/components';

const iDoc    = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><rect x="5" y="4" width="18" height="20" rx="1" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.5;opacity:0.7"/><line x1="9" y1="10" x2="19" y2="10" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.5"/><line x1="9" y1="14" x2="17" y2="14" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.5"/><line x1="9" y1="18" x2="13" y2="18" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.5"/></svg>`;
const iClick  = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><line x1="4" y1="24" x2="24" y2="24" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.4"/><line x1="4" y1="4" x2="4" y2="24" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.4"/><circle cx="8" cy="20" r="1.5" style="fill:var(--dx-gold-dim)"/><circle cx="12" cy="15" r="1.5" style="fill:var(--dx-gold-dim)"/><circle cx="16" cy="10" r="3" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="18" y1="8" x2="22" y2="4" style="stroke:var(--dx-gold);stroke-width:1.5"/><circle cx="20" cy="17" r="1.5" style="fill:var(--dx-gold-dim)"/></svg>`;
const iBars   = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><line x1="4" y1="24" x2="24" y2="24" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.4"/><rect x="6" y="16" width="4" height="8" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><rect x="12" y="8" width="4" height="16" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><rect x="18" y="12" width="4" height="12" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.5;opacity:0.7"/></svg>`;
const iNodes  = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><circle cx="14" cy="14" r="3.5" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><circle cx="5" cy="7" r="2.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.2"/><circle cx="23" cy="7" r="2.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.2"/><circle cx="5" cy="21" r="2.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.2"/><circle cx="23" cy="21" r="2.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.2"/><line x1="11" y1="12" x2="7" y2="9" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.7"/><line x1="17" y1="12" x2="21" y2="9" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.7"/><line x1="11" y1="16" x2="7" y2="19" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.7"/><line x1="17" y1="16" x2="21" y2="19" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.7"/></svg>`;
const iFunnel = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><path d="M4 5h20l-6 8v10l-8-4V13z" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/></svg>`;
const iHeat   = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><rect x="3" y="3" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold);stroke-width:1;opacity:0.9"/><rect x="10" y="3" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.3"/><rect x="17" y="3" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold);stroke-width:1;opacity:0.7"/><rect x="3" y="10" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.3"/><rect x="10" y="10" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold);stroke-width:1;opacity:0.9"/><rect x="17" y="10" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.5"/><rect x="3" y="17" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold);stroke-width:1;opacity:0.6"/><rect x="10" y="17" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.3"/><rect x="17" y="17" width="6" height="6" rx="0.5" fill="none" style="stroke:var(--dx-gold);stroke-width:1;opacity:0.9"/></svg>`;
const iLink   = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><path d="M8 17l-2 2a5 5 0 0 0 8 0l4-4" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><path d="M20 11l2-2a5 5 0 0 0-8 0l-4 4" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="11" y1="17" x2="17" y2="11" style="stroke:var(--dx-gold-dim);stroke-width:1.5;opacity:0.5"/></svg>`;
const iSeq    = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><rect x="3" y="11" width="22" height="6" rx="1" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.5"/><circle cx="8" cy="14" r="2" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1"/><circle cx="14" cy="14" r="2.5" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><circle cx="20" cy="14" r="2" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1"/><line x1="14" y1="11" x2="14" y2="6" style="stroke:var(--dx-gold);stroke-width:1.5"/><circle cx="14" cy="5" r="2" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/></svg>`;
const iWave   = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><line x1="4" y1="24" x2="24" y2="24" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.4"/><path d="M4 20L8 18 12 8 16 14 20 10 24 16" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/></svg>`;
const iDBs    = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><rect x="3" y="4" width="10" height="8" rx="1" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><rect x="15" y="4" width="10" height="8" rx="1" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.6"/><rect x="3" y="16" width="10" height="8" rx="1" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.6"/><line x1="13" y1="8" x2="15" y2="8" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.7"/><line x1="8" y1="12" x2="8" y2="16" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.7"/></svg>`;
const iPerson = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><circle cx="14" cy="8" r="4" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><path d="M7 24c0-6 14-6 14 0" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><rect x="10" y="14" width="8" height="5" rx="1" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.6"/></svg>`;
const iFolder = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><path d="M4 10L4 22L24 22L24 10L14 10L12 8L4 8Z" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><path d="M7 8V6h8l2 2" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.5"/></svg>`;
const iDual   = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><rect x="2" y="5" width="11" height="18" rx="1" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><rect x="15" y="5" width="11" height="18" rx="1" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="4" y1="10" x2="11" y2="10" style="stroke:var(--dx-gold-dim);stroke-width:0.8;opacity:0.5"/><line x1="4" y1="14" x2="11" y2="14" style="stroke:var(--dx-gold-dim);stroke-width:0.8;opacity:0.5"/><line x1="17" y1="10" x2="24" y2="10" style="stroke:var(--dx-gold-dim);stroke-width:0.8;opacity:0.5"/><line x1="17" y1="14" x2="24" y2="14" style="stroke:var(--dx-gold-dim);stroke-width:0.8;opacity:0.5"/></svg>`;

export const section = {
    title: "Curtain & CurtainPTM",
    slides: `
<section>
    <h1>Curtain &amp; CurtainPTM</h1>
    <p>Visualize, customize, explore, share, and cite MS-based proteomics differential analyses.</p>
    ${HoloImage('assets/curtain.intro.parameters.png', 'Curtain Input Parameters Overview', '550px')}
</section>

<section>
    <h2>Proteome level differential analysis visualization</h2>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; font-size: 0.71em; margin-bottom: 14px;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 8px; background: var(--dx-holo-bg); text-align: center;">
            ${iClick}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 4px;">INTERACTIVE SCATTER</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Click any point to inspect it</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 8px; background: var(--dx-holo-bg); text-align: center;">
            ${iBars}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 4px;">INTENSITY PROFILES</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Compare levels across all samples</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 8px; background: var(--dx-holo-bg); text-align: center;">
            ${iHeat}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 4px;">SAMPLE QUALITY</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Imputation and peptide number information for these quality information can be shown if provided</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 8px; background: var(--dx-holo-bg); text-align: center;">
            ${iLink}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 4px;">CITABLE LINK</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Register a permanent DOI for any sessions or collections</div>
        </div>
    </div>
</section>

<section>
    <h2>Try it yourself</h2>
    <div style="display: grid; grid-template-columns: 1fr auto; gap: 20px; margin-top: 16px; align-items: center;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; align-items: center; justify-items: center;">
            ${HoloImage('assets/curtain.volcano.plot.overview.png', 'Curtain Volcano Plot Session Overview', '300px')}
            ${HoloImage('assets/curtain.bar.chart.overview.png', 'Curtain Bar Chart Overview', '300px')}
            ${HoloImage('assets/curtain.bar.chart.settings.png', 'Curtain Bar Chart Settings', '300px')}
            ${HoloImage('assets/curtain.batch.search.protein.list.png', 'Curtain Batch Search Protein List', '300px')}
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 10px; min-width: 130px;">
            <div style="border: 1px solid var(--dx-gold-dim); padding: 12px; background: var(--dx-holo-bg); text-align: center;">
                ${QRCode('https://doi.org/10.71663/curtain.fc34-wd57', { size: 200 })}
            </div>
        </div>
    </div>
</section>

<section>
    <h2>CurtainPTM</h2>
    <div style="display: flex; gap: 20px; margin-top: 16px; font-size: 0.78em;">
        <div style="flex: 0.9;">
            <p style="color: var(--dx-text-secondary); line-height: 1.6; margin-bottom: 14px; font-size:0.9em;">The same interactive sharing as Curtain but with additional functionality for modifications.</p>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 14px; background: var(--dx-holo-bg); margin-bottom: 10px; display:flex; gap:10px; align-items:flex-start;">
                <div style="flex-shrink:0">${iSeq.replace('display:block;margin:0 auto 10px', 'display:block')}</div>
                <div>
                    <strong style="color: var(--dx-gold); display: block; margin-bottom: 4px;">PTM Position Viewer</strong>
                    <div style="color: var(--dx-text-secondary); line-height: 1.5;">Modified sites mapped onto the protein sequence and comparing to available knowledgebase of modification for that protein.</div>
                </div>
            </div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 14px; background: var(--dx-holo-bg); margin-bottom: 10px; display:flex; gap:10px; align-items:flex-start;">
                <div style="flex-shrink:0">${iWave.replace('display:block;margin:0 auto 10px', 'display:block')}</div>
                <div>
                    <strong style="color: var(--dx-gold); display: block; margin-bottom: 4px;">PTM Knowledgebase Comparison</strong>
                    <div style="color: var(--dx-text-secondary); line-height: 1.5;">Comparing your experimental data with known PTM positions.</div>
                </div>
            </div>
        </div>
        <div style="flex: 1.1; text-align: center; display: flex; align-items: center; justify-content: center;">
            ${HoloImage('assets/curtainptm.ptm.position.viewer.png', 'CurtainPTM PTM Position Viewer', '600px')}
        </div>
    </div>
</section>

<section>
    <h2>Login with your ORCID and create DOI for your publication</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 16px; align-items: center;">
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.75em;">
            <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 12px; background: var(--dx-holo-bg); text-align: center;">
                ${iLink}
                <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 4px;">LINK SHARING</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">DOI Permanent URL</div>
            </div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 12px; background: var(--dx-holo-bg); text-align: center;">
                ${iPerson}
                <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 4px;">ORCID LOGIN</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">Own sessions and track access with your researcher ID</div>
            </div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 12px; background: var(--dx-holo-bg); text-align: center;">
                ${iFolder}
                <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 4px;">COLLECTIONS</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">Group sessions to be shared in a single link</div>
            </div>
        </div>
        <div style="display: flex; justify-content: center;">
            ${HoloImage('assets/curtain.doi.registration.form.png', 'DOI Registration Form', '600px')}
        </div>
    </div>
</section>
`
};
