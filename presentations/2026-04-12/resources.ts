import { QRCode } from '../../src/components';

export const section = {
    title: "Resources",
    slides: `
<section>
    <h2>Resources &amp; Links</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 20px;">
        <div style="text-align: center; border: 1px solid var(--dx-gold-dim); padding: 20px; background: rgba(201,160,77,0.04);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 10px; font-size: 0.8em;">[ CUPCAKE VANILLA WEB APP ]</p>
            ${QRCode('https://ccv.proteo.info', { size: 140 })}
            <p style="font-size: 0.7em; margin-top: 10px; color: var(--dx-text-secondary);">ccv.proteo.info</p>
        </div>
        <div style="text-align: center; border: 1px solid var(--dx-gold-dim); padding: 20px; background: rgba(201,160,77,0.04);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 10px; font-size: 0.8em;">[ CUPCAKE VANILLA ]</p>
            ${QRCode('https://github.com/noatgnu/cupcake-vanilla-ng', { size: 140 })}
            <p style="font-size: 0.7em; margin-top: 10px; color: var(--dx-text-secondary);">github.com/noatgnu/cupcake-vanilla-ng</p>
        </div>
        <div style="text-align: center; border: 1px solid var(--dx-gold-dim); padding: 20px; background: rgba(201,160,77,0.04);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 10px; font-size: 0.8em;">[ SDRF SPECIFICATION ]</p>
            ${QRCode('https://github.com/bigbio/proteomics-sample-metadata', { size: 140 })}
            <p style="font-size: 0.7em; margin-top: 10px; color: var(--dx-text-secondary);">HUPO-PSI / bigbio proteomics-sample-metadata</p>
        </div>
    </div>
</section>
`
};
