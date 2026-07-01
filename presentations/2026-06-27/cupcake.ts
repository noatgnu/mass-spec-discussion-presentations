import { HoloImage } from '../../src/components';

const iCheck  = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><circle cx="14" cy="14" r="10" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><path d="M9 14l3 3 6-7" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/></svg>`;
const iBlock  = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><circle cx="14" cy="14" r="10" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.5;opacity:0.7"/><line x1="9" y1="9" x2="19" y2="19" style="stroke:var(--dx-gold-dim);stroke-width:1.5;opacity:0.7"/><line x1="19" y1="9" x2="9" y2="19" style="stroke:var(--dx-gold-dim);stroke-width:1.5;opacity:0.7"/></svg>`;
const iGrid   = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><rect x="4" y="4" width="20" height="20" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="4" y1="10" x2="24" y2="10" style="stroke:var(--dx-gold-dim);stroke-width:1"/><line x1="4" y1="16" x2="24" y2="16" style="stroke:var(--dx-gold-dim);stroke-width:1"/><line x1="12" y1="4" x2="12" y2="24" style="stroke:var(--dx-gold-dim);stroke-width:1"/></svg>`;
const iBolt   = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><path d="M16 4L8 16h6l-2 8 10-13h-6z" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/></svg>`;
const iBook   = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><rect x="4" y="3" width="14" height="18" rx="1" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="7" y1="8" x2="15" y2="8" style="stroke:var(--dx-gold-dim);stroke-width:1"/><line x1="7" y1="12" x2="13" y2="12" style="stroke:var(--dx-gold-dim);stroke-width:1"/><circle cx="21" cy="21" r="4" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="24" y1="24" x2="27" y2="27" style="stroke:var(--dx-gold);stroke-width:1.5"/></svg>`;
const iShield = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><path d="M14 3l9 4v9c0 5-9 9-9 9s-9-4-9-9V7z" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><path d="M10 14l3 3 5-6" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/></svg>`;
const iUpload = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><path d="M14 4v14M9 9l5-5 5 5" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><path d="M6 20v4h16v-4" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1.5;opacity:0.7"/></svg>`;
const iLens   = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><circle cx="12" cy="12" r="7" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="17" y1="17" x2="23" y2="23" style="stroke:var(--dx-gold);stroke-width:2;stroke-linecap:round"/></svg>`;
const iDevice = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><rect x="4" y="8" width="20" height="13" rx="1" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><rect x="7" y="11" width="6" height="4" rx="0.5" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.7"/><line x1="17" y1="13" x2="19" y2="13" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.7"/><line x1="14" y1="8" x2="14" y2="5" style="stroke:var(--dx-gold);stroke-width:1;opacity:0.6"/></svg>`;
const iLayers = `<svg width="28" height="28" viewBox="0 0 28 28" style="display:block;margin:0 auto 10px"><path d="M4 10l10-6 10 6-10 6z" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><path d="M4 16l10 6 10-6" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.6"/><path d="M4 13l10 6 10-6" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.35"/></svg>`;

export const section = {
    title: "Cupcake",
    slides: `
<section>
    <h1>Cupcake</h1>
    <p>Proteomics information management made easier</p>
    ${HoloImage('assets/cupcake-vanilla-overview.png', 'Cupcake Vanilla Metadata Table Overview', '340px')}
</section>

<section>
    <h2>A better experience with SDRF-based structural metadata</h2>
    <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; font-size: 0.7em; margin-bottom: 16px;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 16px 8px; background: var(--dx-holo-bg); text-align: center;">
            ${iGrid}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">TEMPLATES</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.9em; line-height: 1.5;">Reuse column layouts across every experiment</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 16px 8px; background: var(--dx-holo-bg); text-align: center;">
            ${iBolt}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">AUTO-FILL</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.9em; line-height: 1.5;">Fill cells with different patterns</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 16px 8px; background: var(--dx-holo-bg); text-align: center;">
            ${iBook}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">TERM LOOKUP</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.9em; line-height: 1.5;">Search scientific vocabularies inline</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 16px 8px; background: var(--dx-holo-bg); text-align: center;">
            ${iShield}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">VALIDATION</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.9em; line-height: 1.5;">Check annotation before export</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 16px 8px; background: var(--dx-holo-bg); text-align: center;">
            ${iUpload}
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">EXPORT</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.9em; line-height: 1.5;">Download in repository-ready format</div>
        </div>
    </div>
    <div style="text-align: center;">
        ${HoloImage('assets/cupcake-autofill.png', 'Cupcake Vanilla Auto-Fill', '240px')}
    </div>
</section>

<section>
    <h2>Institutional database of searchable experiment</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 16px; font-size: 0.78em;">
        <div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 16px; background: var(--dx-holo-bg); margin-bottom: 12px; display:flex; gap:12px; align-items:flex-start;">
                <div style="flex-shrink:0">${iLens.replace('display:block;margin:0 auto 10px', 'display:block;margin-top:2px')}</div>
                <div>
                    <strong style="color: var(--dx-gold); display: block; margin-bottom: 4px;">Find experiments in the context you are interested in</strong>
                    <div style="color: var(--dx-text-secondary); line-height: 1.6;">Filter the entire lab archive by organism, tissue, instrument, or treatment.</div>
                </div>
            </div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 16px; background: var(--dx-holo-bg); display:flex; gap:12px; align-items:flex-start;">
                <div style="flex-shrink:0">${iLayers.replace('display:block;margin:0 auto 10px', 'display:block;margin-top:2px')}</div>
                <div>
                    <strong style="color: var(--dx-gold); display: block; margin-bottom: 4px;">Use it for lab management and notebook</strong>
                    <div style="color: var(--dx-text-secondary); line-height: 1.6;">Instrument booking, lab notebook, and facility billing as optional add-ons.</div>
                </div>
            </div>
        </div>
        <div style="text-align: center; display: flex; align-items: center; justify-content: center;">
            ${HoloImage('assets/cupcake-search.png', 'Cupcake experiment search', '360px')}
        </div>
    </div>
</section>
`
};
