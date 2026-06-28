import { QRCode } from '../../src/components';

const iPerson = `<svg width="22" height="22" viewBox="0 0 28 28" style="display:block;margin-bottom:4px"><circle cx="14" cy="8" r="4" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><path d="M7 24c0-6 14-6 14 0" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/></svg>`;
const iGlobe  = `<svg width="22" height="22" viewBox="0 0 28 28" style="display:block;margin-bottom:4px"><circle cx="14" cy="14" r="10" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="4" y1="14" x2="24" y2="14" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.5"/><path d="M14 4C11 8 11 20 14 24" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.5"/><path d="M14 4C17 8 17 20 14 24" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.5"/></svg>`;
const iLink   = `<svg width="22" height="22" viewBox="0 0 28 28" style="display:block;margin-bottom:4px"><path d="M8 17l-2 2a5 5 0 0 0 8 0l4-4" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><path d="M20 11l2-2a5 5 0 0 0-8 0l-4 4" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="11" y1="17" x2="17" y2="11" style="stroke:var(--dx-gold-dim);stroke-width:1.5;opacity:0.5"/></svg>`;

export const section = {
    title: "Putting It Together",
    slides: `
<section>
    <h2>A more streamline process for visualization and documentation</h2>
    <p style="font-size: 0.72em; color: var(--dx-text-secondary); margin-bottom: 18px;">Where to place the data that you would need to archive and published.</p>
    <div style="display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; gap: 0; font-size: 0.74em; align-items: stretch;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.9em; letter-spacing: 1px; margin-bottom: 10px;">CUPCAKE</div>
            <ul style="color: var(--dx-text-secondary); line-height: 1.8; list-style: none; padding: 0; margin: 0;">
                <li>Record experiment details</li>
                <li>Annotate samples</li>
                <li>Build a searchable archive</li>
            </ul>
        </div>
        <div style="display: flex; align-items: center; padding: 0 10px; color: var(--dx-gold); font-size: 1.4em; font-family: monospace;">▶</div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.9em; letter-spacing: 1px; margin-bottom: 10px;">CURTAIN / PTM</div>
            <ul style="color: var(--dx-text-secondary); line-height: 1.8; list-style: none; padding: 0; margin: 0;">
                <li>Upload result tables</li>
                <li>Create interactive figures</li>
                <li>Share via link or DOI</li>
            </ul>
        </div>
        <div style="display: flex; align-items: center; padding: 0 10px; color: var(--dx-gold); font-size: 1.4em; font-family: monospace;">▶</div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.9em; letter-spacing: 1px; margin-bottom: 10px;">CINDER</div>
            <ul style="color: var(--dx-text-secondary); line-height: 1.8; list-style: none; padding: 0; margin: 0;">
                <li>Import sessions by link</li>
                <li>Search across all at once</li>
                <li>Share combined views</li>
            </ul>
        </div>
    </div>
    <div style="margin-top: 16px; border: 1px solid var(--dx-gold-dim); padding: 12px 20px; background: var(--dx-holo-bg); font-size: 0.74em; text-align: center; color: var(--dx-text-secondary);">
        Open-source · Self-hostable · No vendor lock-in
    </div>
</section>

<section>
    <h2>What this looks like in practice</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px; font-size: 0.78em;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 20px; background: var(--dx-holo-bg);">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
                ${iPerson}
                <p style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin:0">[ FOR THE RESEARCHER ]</p>
            </div>
            <ul style="color: var(--dx-text-secondary); line-height: 1.9;">
                <li>Annotation takes minutes — templates do the repetitive work</li>
                <li>Sharing is a link, not an attachment chain</li>
                <li>Look up a protein across all past experiments in seconds</li>
            </ul>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 20px; background: var(--dx-holo-bg);">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
                ${iGlobe}
                <p style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin:0">[ FOR THE COMMUNITY ]</p>
            </div>
            <ul style="color: var(--dx-text-secondary); line-height: 1.9;">
                <li>Knowledge persists when people leave the lab</li>
                <li>Reviewers can verify and build on published results</li>
                <li>Each citable session is a permanent contribution</li>
            </ul>
        </div>
    </div>
</section>

<section>
    <h2>Access &amp; Resources</h2>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 20px; text-align: center; font-size: 0.78em;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 12px; font-size: 0.85em; letter-spacing: 1px;">[ CUPCAKE ]</p>
            ${QRCode('https://ccv.proteo.info', { size: 120 })}
            <div style="color: var(--dx-text-secondary); margin-top: 10px; font-size: 0.9em;">ccv.proteo.info</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 12px; font-size: 0.85em; letter-spacing: 1px;">[ CURTAIN ]</p>
            ${QRCode('https://curtain.proteo.info', { size: 120 })}
            <div style="color: var(--dx-text-secondary); margin-top: 10px; font-size: 0.9em;">curtain.proteo.info</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 12px; font-size: 0.85em; letter-spacing: 1px;">[ CINDER ]</p>
            ${QRCode('https://cinder.proteo.info', { size: 120 })}
            <div style="color: var(--dx-text-secondary); margin-top: 10px; font-size: 0.9em;">cinder.proteo.info</div>
        </div>
    </div>
</section>
`
};
