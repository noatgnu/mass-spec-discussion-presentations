import { QRCode } from '../../src/components';

const iPerson = `<svg width="22" height="22" viewBox="0 0 28 28" style="display:block;margin-bottom:4px"><circle cx="14" cy="8" r="4" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><path d="M7 24c0-6 14-6 14 0" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/></svg>`;
const iGlobe  = `<svg width="22" height="22" viewBox="0 0 28 28" style="display:block;margin-bottom:4px"><circle cx="14" cy="14" r="10" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="4" y1="14" x2="24" y2="14" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.5"/><path d="M14 4C11 8 11 20 14 24" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.5"/><path d="M14 4C17 8 17 20 14 24" fill="none" style="stroke:var(--dx-gold-dim);stroke-width:1;opacity:0.5"/></svg>`;
const iLink   = `<svg width="22" height="22" viewBox="0 0 28 28" style="display:block;margin-bottom:4px"><path d="M8 17l-2 2a5 5 0 0 0 8 0l4-4" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><path d="M20 11l2-2a5 5 0 0 0-8 0l-4 4" fill="none" style="stroke:var(--dx-gold);stroke-width:1.5"/><line x1="11" y1="17" x2="17" y2="11" style="stroke:var(--dx-gold-dim);stroke-width:1.5;opacity:0.5"/></svg>`;

export const section = {
    title: "Conclusion",
    slides: `
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

<section>
    <h2>Acknowledgements</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 24px; font-size: 0.78em;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg); text-align: center;">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 10px; font-size: 0.8em; letter-spacing: 1px;">[ DARIO ALESSI LAB ]</p>
            <div style="color: var(--dx-text-secondary); line-height: 1.7;">
                All members of the lab
            </div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg); text-align: center;">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 10px; font-size: 0.8em; letter-spacing: 1px;">[ MRC-PPU ]</p>
            <div style="color: var(--dx-text-secondary); line-height: 1.7;">
                MRC Protein Phosphorylation &amp; Ubiquitylation Unit<br>
                University of Dundee
            </div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg); text-align: center;">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 10px; font-size: 0.8em; letter-spacing: 1px;">[ ASAP ]</p>
            <div style="color: var(--dx-text-secondary); line-height: 1.7;">
                ASAP
            </div>
        </div>
    </div>
</section>
`
};
