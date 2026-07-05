import { QRCode } from '../../src/components';

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
