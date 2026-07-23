import { HoloImage } from '../../src/components';


export const section = {
    title: "Curtain",
    branding: true,
    slides: `
<section>
    <h2>Curtain update</h2>
    <p style="font-size: 0.85em; color: var(--dx-text-secondary); margin: 12px 0 0; line-height: 1.6;">Curtain issued its first DataCite DOI for a session built entirely from a data collection sourced from outside our own lab.</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px; margin-top: 20px; font-size: 0.72em; text-align: left;">
        <div style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); padding: 10px 12px;">
            <div style="font-family: monospace; font-size: 0.75em; color: var(--dx-gold); letter-spacing: 1px; font-weight: bold; margin-bottom: 4px;">DATASET</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.4;">Cytokine Profiling Dataset</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); padding: 10px 12px;">
            <div style="font-family: monospace; font-size: 0.75em; color: var(--dx-gold); letter-spacing: 1px; font-weight: bold; margin-bottom: 4px;">DOI</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.4; word-break: break-all;">10.71663/curtain.e3kv-zy19</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); padding: 10px 12px;">
            <div style="font-family: monospace; font-size: 0.75em; color: var(--dx-gold); letter-spacing: 1px; font-weight: bold; margin-bottom: 4px;">PUBLISHER</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.4;">University of Dundee, 2026</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); padding: 10px 12px;">
            <div style="font-family: monospace; font-size: 0.75em; color: var(--dx-gold); letter-spacing: 1px; font-weight: bold; margin-bottom: 4px;">LICENSE</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.4;">CC BY 4.0</div>
        </div>
    </div>
    ${HoloImage('assets/first.doi.link.registered.png', 'Curtain DOI-registered session page for the Cytokine Profiling Dataset', '380px')}
</section>

<section>
    <h2>Steps to register a DOI</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px; font-size: 0.72em; text-align: left;">
        <div>
            <div style="padding: 8px 14px; border: 1px solid var(--dx-gold-dim); background: var(--dx-problem-bg); border-bottom: none; font-family: monospace; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold;">USER · SUBMITTING</div>
            <div class="fragment" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); padding: 8px 14px;">
                <strong style="color: var(--dx-gold);">1.</strong> From an owned session, open <strong>Register DOI</strong>
            </div>
            <div class="fragment" style="border: 1px solid var(--dx-gold-dim); border-top: none; background: var(--dx-holo-bg); padding: 8px 14px;">
                <strong style="color: var(--dx-gold);">2.</strong> Fill in the DataCite form: title, creators &amp; contributors (auto-filled from ORCID), publisher, license, abstract/methods, subjects, and related IDs (e.g. PRIDE, SDRF-Proteomics); optionally attach a session collection
            </div>
            <div class="fragment" style="border: 1px solid var(--dx-gold-dim); border-top: none; background: var(--dx-holo-bg); padding: 8px 14px;">
                <strong style="color: var(--dx-gold);">3.</strong> Give a contact email and PII statement, and confirm the info-is-accurate, publication-rights, and ASAP-policy declarations
            </div>
            <div class="fragment" style="border: 1px solid var(--dx-gold-dim); border-top: none; background: var(--dx-holo-bg); padding: 8px 14px;">
                <strong style="color: var(--dx-gold);">4.</strong> Once submitted, Curtain drafts the DOI with DataCite (status: <em>draft</em>) and locks the form pending review
            </div>
        </div>
        <div>
            <div style="padding: 8px 14px; border: 1px solid var(--dx-gold-dim); background: var(--dx-solution-bg); border-bottom: none; font-family: monospace; color: var(--dx-solution); letter-spacing: 1px; font-weight: bold;">ADMIN · APPROVING</div>
            <div class="fragment" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); padding: 8px 14px;">
                <strong style="color: var(--dx-gold);">1.</strong> Open the DOI admin queue, filtered to submissions in <em>draft</em> status
            </div>
            <div class="fragment" style="border: 1px solid var(--dx-gold-dim); border-top: none; background: var(--dx-holo-bg); padding: 8px 14px;">
                <strong style="color: var(--dx-gold);">2.</strong> Review the submitted metadata, the linked dataset/collection, contact email, and PII statement
            </div>
            <div class="fragment" style="border: 1px solid var(--dx-gold-dim); border-top: none; background: var(--dx-holo-bg); padding: 8px 14px;">
                <strong style="color: var(--dx-gold);">3.</strong> Approve. Publishes the DOI on DataCite and marks the session/collection permanent or reject and send it back
            </div>
            <div class="fragment" style="border: 1px solid var(--dx-gold-dim); border-top: none; background: var(--dx-holo-bg); padding: 8px 14px;">
                <strong style="color: var(--dx-gold);">4.</strong> Curtain emails the submitter automatically with the final status
            </div>
        </div>
    </div>
</section>
`
};
