import { QRCode } from '../../src/components';

export const section = {
    title: "Resources",
    slides: `
<section>
    <h2>Resources &amp; Links</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 20px;">
        <div style="text-align: center; border: 1px solid var(--dx-gold-dim); padding: 20px; background: rgba(201,160,77,0.04);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 10px;">[ CUPCAKE VANILLA ]</p>
            ${QRCode('https://github.com/noatgnu/cupcake-vanilla-ng', { size: 160 })}
            <p style="font-size: 0.7em; margin-top: 10px; color: #aaa;">github.com/noatgnu/cupcake-vanilla-ng</p>
        </div>
        <div style="text-align: center; border: 1px solid var(--dx-gold-dim); padding: 20px; background: rgba(201,160,77,0.04);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 10px;">[ SDRF SPECIFICATION ]</p>
            ${QRCode('https://github.com/bigbio/proteomics-sample-metadata', { size: 160 })}
            <p style="font-size: 0.7em; margin-top: 10px; color: #aaa;">HUPO-PSI / bigbio proteomics-sample-metadata</p>
        </div>
    </div>
</section>
`
};
