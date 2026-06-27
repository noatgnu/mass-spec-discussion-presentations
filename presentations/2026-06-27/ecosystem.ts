import { QRCode } from '../../src/components';

export const section = {
    title: "Putting It Together",
    slides: `
<section>
    <h2>One continuous workflow</h2>
    <p style="font-size: 0.72em; color: var(--dx-text-secondary); margin-bottom: 18px;">The three tools connect naturally — data recorded in one flows into the next.</p>
    <div style="display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; gap: 0; font-size: 0.74em; align-items: stretch;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.9em; letter-spacing: 1px; margin-bottom: 10px;">CUPCAKE</div>
            <ul style="color: var(--dx-text-secondary); line-height: 1.7; list-style: none; padding: 0; margin: 0;">
                <li>▸ Record experiment details at the bench</li>
                <li>▸ Annotate samples in a reusable format</li>
                <li>▸ Build a searchable lab knowledge base</li>
                <li>▸ Track instruments and reagents</li>
            </ul>
        </div>
        <div style="display: flex; align-items: center; padding: 0 10px; color: var(--dx-gold); font-size: 1.4em; font-family: monospace;">▶</div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.9em; letter-spacing: 1px; margin-bottom: 10px;">CURTAIN / PTM</div>
            <ul style="color: var(--dx-text-secondary); line-height: 1.7; list-style: none; padding: 0; margin: 0;">
                <li>▸ Upload analysis result tables</li>
                <li>▸ Create interactive figures instantly</li>
                <li>▸ Share via link or citable reference</li>
                <li>▸ Let readers explore the data directly</li>
            </ul>
        </div>
        <div style="display: flex; align-items: center; padding: 0 10px; color: var(--dx-gold); font-size: 1.4em; font-family: monospace;">▶</div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.9em; letter-spacing: 1px; margin-bottom: 10px;">CINDER</div>
            <ul style="color: var(--dx-text-secondary); line-height: 1.7; list-style: none; padding: 0; margin: 0;">
                <li>▸ Import sessions from Curtain by link</li>
                <li>▸ Search across the full project at once</li>
                <li>▸ Compare results in a combined figure</li>
                <li>▸ Share cross-experiment views</li>
            </ul>
        </div>
    </div>
    <div style="margin-top: 16px; border: 1px solid var(--dx-gold-dim); padding: 14px; background: var(--dx-holo-bg); font-size: 0.75em; text-align: center; color: var(--dx-text-secondary); line-height: 1.6;">
        All three tools are open-source and self-hostable. They work independently or together — and there is no vendor lock-in or cloud subscription required.
    </div>
</section>

<section>
    <h2>What this looks like in practice</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; font-size: 0.78em;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 10px; font-size: 0.85em; letter-spacing: 1px;">[ FOR THE RESEARCHER ]</p>
            <ul style="color: var(--dx-text-secondary); line-height: 1.8;">
                <li>Annotation takes minutes instead of hours — templates and auto-fill do the repetitive work</li>
                <li>Sharing a result is a single link, not an attachment chain</li>
                <li>A protein of interest can be looked up across all past experiments in seconds</li>
            </ul>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 10px; font-size: 0.85em; letter-spacing: 1px;">[ FOR THE LAB AND COMMUNITY ]</p>
            <ul style="color: var(--dx-text-secondary); line-height: 1.8;">
                <li>Knowledge persists when people leave — the lab's history is structured, not scattered</li>
                <li>Reviewers and collaborators can verify and build on published results</li>
                <li>Each citable session is a permanent contribution to the scientific record</li>
            </ul>
        </div>
    </div>
</section>

<section>
    <h2>Access &amp; Resources</h2>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 20px; text-align: center; font-size: 0.78em;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 12px; font-size: 0.85em; letter-spacing: 1px;">[ CUPCAKE ]</p>
            ${QRCode('https://github.com/noatgnu/cupcake', { size: 120 })}
            <div style="color: var(--dx-text-secondary); margin-top: 10px; line-height: 1.5; font-size: 0.9em;">github.com/noatgnu/cupcake</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 12px; font-size: 0.85em; letter-spacing: 1px;">[ CURTAIN ]</p>
            ${QRCode('https://github.com/noatgnu/curtain', { size: 120 })}
            <div style="color: var(--dx-text-secondary); margin-top: 10px; line-height: 1.5; font-size: 0.9em;">github.com/noatgnu/curtain</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 12px; font-size: 0.85em; letter-spacing: 1px;">[ CINDER ]</p>
            ${QRCode('https://github.com/noatgnu/cinderbackend', { size: 120 })}
            <div style="color: var(--dx-text-secondary); margin-top: 10px; line-height: 1.5; font-size: 0.9em;">github.com/noatgnu/cinderbackend</div>
        </div>
    </div>
</section>
`
};
