import { HoloImage, QRCode } from '../../src/components';

export const section = {
    title: "Curtain iOS",
    slides: `
<section>
    <h1>Curtain Mobile</h1>
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
        ${HoloImage('assets/Simulator Screenshot - iPhone 17 Pro Max - 2026-01-31 at 07.53.36.png', 'Interactive Plot View', '480px')}
        ${HoloImage('assets/Simulator Screenshot - iPhone 17 Pro Max - 2026-01-31 at 07.53.49.png', 'Detailed View', '480px')}
    </div>
</section>

<section>
    <h2>Interactive Visualization</h2>
    <div style="display: flex; justify-content: center; align-items: flex-start; gap: 20px; margin-top: 10px;">
        ${HoloImage('assets/Simulator Screenshot - iPhone 17 Pro Max - 2026-01-31 at 07.53.23.png', 'Mobile Home View', '450px')}
        ${HoloImage('assets/Simulator Screenshot - iPhone 17 Pro Max - 2026-01-31 at 07.53.26.png', 'Collection Browser', '450px')}
        ${HoloImage('assets/Simulator Screenshot - iPhone 17 Pro Max - 2026-01-31 at 07.53.30.png', 'Settings View', '450px')}
    </div>
</section>

<section>
    <h2>Integration: Desktop to Mobile</h2>
    <p>Seamlessly transition your analysis from the bench to the office or commute.</p>
    <div style="display: flex; justify-content: center; align-items: flex-start; gap: 20px; margin-top: 20px;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 15px; width: 30%;">
            <strong style="color: var(--dx-gold);">SCAN</strong><br>
            <small>Scan a QR code from the desktop web app.</small>
        </div>
        <div style="color: var(--dx-gold); font-size: 1.5em; align-self: center;">▶</div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 15px; width: 30%;">
            <strong style="color: var(--dx-gold);">VIEW</strong><br>
            <small>Instant rendering of the session on your device.</small>
        </div>
        <div style="color: var(--dx-gold); font-size: 1.5em; align-self: center;">▶</div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 15px; width: 30%;">
            <strong style="color: var(--dx-gold);">SHARE</strong><br>
            <small>Quickly send links or screenshots via mobile sharing.</small>
        </div>
    </div>
</section>
`
};
