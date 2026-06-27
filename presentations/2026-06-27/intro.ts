export const section = {
    title: "The Problem",
    slides: `
<section>
    <h2>A story that happens in every lab</h2>
    <svg viewBox="0 0 900 82" style="width:100%; height:auto; display:block; margin: 6px 0 16px 0;" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="46" font-family="monospace" font-size="9" letter-spacing="1" style="fill: var(--dx-gold)">EXPERIMENT</text>
        <text x="820" y="46" font-family="monospace" font-size="9" letter-spacing="1" style="fill: var(--dx-gold)">PUBLICATION</text>
        <!-- stable opening -->
        <path d="M 112 41 L 185 41" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold)"/>
        <!-- wobble 1 (small) -->
        <path d="M 185 41 L 194 33 L 202 52 L 210 36 L 218 41" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold-dim)"/>
        <!-- stable -->
        <path d="M 218 41 L 292 41" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold); opacity:0.85"/>
        <!-- near-break 1 (dashed gap) -->
        <path d="M 292 41 L 338 41" stroke-width="1" fill="none" stroke-dasharray="3 7" style="stroke: var(--dx-gold-dim); opacity:0.45"/>
        <!-- wobble 2 (medium) -->
        <path d="M 340 42 L 354 29 L 366 58 L 380 31 L 392 42" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold-dim)"/>
        <!-- stable -->
        <path d="M 392 42 L 432 42" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold); opacity:0.8"/>
        <!-- wobble 3 (wildest, largest amplitude) -->
        <path d="M 432 42 L 445 18 L 460 68 L 475 14 L 490 70 L 505 42" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold-dim)"/>
        <!-- stable -->
        <path d="M 505 42 L 565 42" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold); opacity:0.8"/>
        <!-- wobble 4 (medium) -->
        <path d="M 565 42 L 575 31 L 585 55 L 595 36 L 605 42" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold-dim)"/>
        <!-- near-break 2 (dashed gap) -->
        <path d="M 605 42 L 652 42" stroke-width="1" fill="none" stroke-dasharray="2 8" style="stroke: var(--dx-gold-dim); opacity:0.4"/>
        <!-- wobble 5 (small, recovering) -->
        <path d="M 654 43 L 661 36 L 669 51 L 676 39 L 683 43" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold-dim)"/>
        <!-- stable to end -->
        <path d="M 683 43 L 818 43" stroke-width="1.5" fill="none" style="stroke: var(--dx-gold)"/>
        <!-- stress dots at extremes -->
        <circle cx="202" cy="52" r="2.5" style="fill: var(--dx-gold-dim); opacity:0.65"/>
        <circle cx="315" cy="41" r="2" style="fill: var(--dx-gold-dim); opacity:0.4"/>
        <circle cx="366" cy="58" r="2.5" style="fill: var(--dx-gold-dim); opacity:0.65"/>
        <circle cx="475" cy="14" r="3.5" style="fill: var(--dx-gold-dim); opacity:0.75"/>
        <circle cx="490" cy="70" r="3.5" style="fill: var(--dx-gold-dim); opacity:0.75"/>
        <circle cx="585" cy="55" r="2.5" style="fill: var(--dx-gold-dim); opacity:0.65"/>
        <circle cx="630" cy="42" r="2" style="fill: var(--dx-gold-dim); opacity:0.4"/>
    </svg>
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; font-size: 0.72em; margin-top: 4px;">
        <div style="padding: 16px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim); border-right: none;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 8px;">01 · RUN</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">Experiments are run. Results are produced. The "who, what, when, and how" lives in someone's head or a private spreadsheet.</div>
        </div>
        <div style="padding: 16px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim); border-right: none;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 8px;">02 · MOVE ON</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">People graduate, switch projects, or leave. The context they carried disappears with them.</div>
        </div>
        <div style="padding: 16px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim); border-right: none;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 8px;">03 · SHARE</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">Results go out as static figures or PDFs. A reader can look at the graph but cannot interact with or interrogate the underlying data.</div>
        </div>
        <div style="padding: 16px; background: var(--dx-holo-bg); border: 1px solid var(--dx-gold-dim);">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 8px;">04 · REPEAT</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6;">The next project starts from scratch — unable to build on what the lab has already learned, because no one knows it exists.</div>
        </div>
    </div>
</section>

<section>
    <h2>Three tools built to address this</h2>
    <p style="font-size: 0.75em; color: var(--dx-text-secondary); margin-bottom: 24px;">Each application tackles a different point where research knowledge is typically lost.</p>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; font-size: 0.78em;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 20px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); letter-spacing: 1px; font-size: 0.85em; margin-bottom: 10px;">[ CUPCAKE ]</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6; margin-bottom: 10px;">Record what was done, how, and with what — structured so that anyone can find and reuse it later.</div>
            <div style="font-size: 0.8em; color: var(--dx-gold-dim); font-family: monospace;">RECORD &amp; ORGANISE</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 20px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); letter-spacing: 1px; font-size: 0.85em; margin-bottom: 10px;">[ CURTAIN / PTM ]</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6; margin-bottom: 10px;">Turn analysis results into interactive figures that anyone can explore — not just look at.</div>
            <div style="font-size: 0.8em; color: var(--dx-gold-dim); font-family: monospace;">SHARE &amp; CITE</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 20px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); letter-spacing: 1px; font-size: 0.85em; margin-bottom: 10px;">[ CINDER ]</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.6; margin-bottom: 10px;">Search and compare findings across many experiments at once — without repeating the analysis.</div>
            <div style="font-size: 0.8em; color: var(--dx-gold-dim); font-family: monospace;">CONNECT &amp; DISCOVER</div>
        </div>
    </div>
</section>
`
};
