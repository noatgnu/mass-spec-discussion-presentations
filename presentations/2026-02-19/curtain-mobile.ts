import { HoloImage, QRCode } from '../../src/components';

export const section = {
    title: "Curtain iOS",
    slides: `
<section>
    <h1>Curtain iOS</h1>
    <div style="display: flex; justify-content: center; align-items: center; gap: 40px; margin-top: 30px;">
        <div style="text-align: center;">
            <p style="color: var(--dx-gold); font-family: monospace; margin-bottom: 10px;">[ JOIN_TESTFLIGHT_BETA ]</p>
            ${QRCode('https://testflight.apple.com/join/fLw6A8XG', { size: 250 })}
            <p style="font-size: 0.6em; margin-top: 10px; color: var(--dx-gold-dim);">Scan with your iPhone to install via TestFlight</p>
        </div>
    </div>
</section>

<section>
    <h2>Mobile Interface</h2>
    <div style="display: flex; justify-content: center; align-items: flex-start; gap: 15px; margin-top: 20px;">
        ${HoloImage('assets/Simulator Screenshot - iPhone 17 Pro Max - 2026-01-31 at 07.53.36.png', 'Settings Overview', '480px')}
        ${HoloImage('assets/Simulator Screenshot - iPhone 17 Pro Max - 2026-01-31 at 07.53.49.png', 'Filter Lists', '480px')}
    </div>
</section>

<section>
    <h2>Interactive Visualization</h2>
    <div style="display: flex; justify-content: center; align-items: flex-start; gap: 20px; margin-top: 10px;">
        ${HoloImage('assets/Simulator Screenshot - iPhone 17 Pro Max - 2026-01-31 at 07.53.23.png', 'Volcano Plot', '450px')}
        ${HoloImage('assets/Simulator Screenshot - iPhone 17 Pro Max - 2026-01-31 at 07.53.26.png', 'Selected Protein', '450px')}
        ${HoloImage('assets/Simulator Screenshot - iPhone 17 Pro Max - 2026-01-31 at 07.53.30.png', 'Bar Chart', '450px')}
    </div>
</section>
`
};
