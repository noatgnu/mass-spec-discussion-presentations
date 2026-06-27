import { HoloImage } from '../../src/components';

export const section = {
    title: "Cupcake",
    slides: `
<section>
    <h1>Cupcake</h1>
    <p>A platform for recording and managing the details behind every mass spectrometry experiment — in a format that is structured, reusable, and accepted by public repositories.</p>
    ${HoloImage('assets/cupcake-vanilla-overview.png', 'Cupcake Vanilla Metadata Table Overview', '340px')}
</section>

<section>
    <h2>The annotation problem</h2>
    <p style="font-size: 0.75em; color: var(--dx-text-secondary); margin-bottom: 20px;">Public repositories like PRIDE hold tens of thousands of proteomics datasets. Only those with rich, structured metadata can be re-analysed or integrated into meta-studies.</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 0.78em;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <strong style="color: var(--dx-gold); display: block; margin-bottom: 8px;">What good annotation enables</strong>
            <ul style="color: var(--dx-text-secondary); line-height: 1.7;">
                <li>Anyone can reproduce the experiment — knowing exactly what samples were used, how they were prepared, and which instrument parameters were applied</li>
                <li>Datasets can be discovered by other researchers searching by organism, disease, tissue, or treatment</li>
                <li>Results become eligible for large-scale meta-analyses</li>
            </ul>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <strong style="color: var(--dx-gold); display: block; margin-bottom: 8px;">Why it rarely happens</strong>
            <ul style="color: var(--dx-text-secondary); line-height: 1.7;">
                <li>The required format (SDRF) has dozens of columns — easy to get wrong and time-consuming to fill manually</li>
                <li>Finding the correct controlled vocabulary term requires switching between external tools</li>
                <li>There is no official requirement, so it stays low priority until submission</li>
            </ul>
        </div>
    </div>
</section>

<section>
    <h2>Cupcake Vanilla — annotation without the friction</h2>
    <p style="font-size: 0.72em; color: var(--dx-text-secondary); margin-bottom: 14px;">A dedicated editor that makes structured annotation faster than doing it in a plain spreadsheet.</p>
    <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; font-size: 0.7em; margin-bottom: 16px;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 8px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">TEMPLATES</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.9em; line-height: 1.5;">Define the column layout once and reuse it for every experiment of the same type</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 8px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">AUTO-FILL</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.9em; line-height: 1.5;">Fill hundreds of cells using simple naming patterns — no manual copy-pasting across rows</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 8px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">TERM LOOKUP</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.9em; line-height: 1.5;">Search standard scientific vocabularies inline — the correct identifier is filled automatically</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 8px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">VALIDATION</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.9em; line-height: 1.5;">Check the completed annotation against the official requirements before submitting to a repository</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 8px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">EXPORT</div>
            <div style="color: var(--dx-text-secondary); font-size: 0.9em; line-height: 1.5;">Download in the exact file format required by PRIDE and other public repositories</div>
        </div>
    </div>
    <div style="text-align: center;">
        ${HoloImage('assets/cupcake-autofill.png', 'Cupcake Vanilla Auto-Fill', '240px')}
    </div>
</section>

<section>
    <h2>Structured metadata becomes a discovery layer</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 16px; font-size: 0.78em;">
        <div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 16px; background: var(--dx-holo-bg); margin-bottom: 12px;">
                <strong style="color: var(--dx-gold); display: block; margin-bottom: 6px;">Find any experiment, instantly</strong>
                <div style="color: var(--dx-text-secondary); line-height: 1.6;">Filter the entire lab archive by organism, tissue, treatment, reagent, or instrument. What used to require emailing a former PhD student now takes seconds.</div>
            </div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 16px; background: var(--dx-holo-bg); margin-bottom: 12px;">
                <strong style="color: var(--dx-gold); display: block; margin-bottom: 6px;">Templates shared across the lab</strong>
                <div style="color: var(--dx-text-secondary); line-height: 1.6;">A template created by one person is available to everyone — new members follow the same structure from day one, without needing to be trained on the format.</div>
            </div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 16px; background: var(--dx-holo-bg);">
                <strong style="color: var(--dx-gold); display: block; margin-bottom: 6px;">Beyond metadata — the full platform</strong>
                <div style="color: var(--dx-text-secondary); line-height: 1.6;">Cupcake also supports instrument booking, reagent inventory, an electronic lab notebook with protocol import, and facility billing — as optional modules that can be added when needed.</div>
            </div>
        </div>
        <div style="text-align: center; display: flex; align-items: center; justify-content: center;">
            ${HoloImage('assets/cupcake-search.png', 'Cupcake experiment search', '360px')}
        </div>
    </div>
</section>
`
};
