import { HoloImageFacetGrid } from '../../src/components';


export const section = {
    title: "Curtain",
    branding: true,
    slides: `
<section>
    <h2>The static figure problem</h2>
    <p style="font-size: 0.85em; color: var(--dx-text-secondary); margin: 12px 0 0; line-height: 1.6;">Published figure has almost no explorability beyond its original context.</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 16px; font-size: 0.75em; text-align: left;">
        <div class="fragment" data-fragment-index="0" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); overflow: hidden;">
            <div style="padding: 8px 14px 6px; background: var(--dx-problem-bg); border-bottom: 1px solid var(--dx-problem-border);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⚠ PROBLEM</div>
                <div style="font-family: monospace; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold;">01 · STATIC</div>
            </div>
            <div style="padding: 8px 14px 10px; background: var(--dx-solution-bg);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-solution); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">✓ CURTAIN</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">Keeps the volcano plot live and explorable instead of a frozen picture</div>
            </div>
        </div>
        <div class="fragment" data-fragment-index="1" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); overflow: hidden;">
            <div style="padding: 8px 14px 6px; background: var(--dx-problem-bg); border-bottom: 1px solid var(--dx-problem-border);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⚠ PROBLEM</div>
                <div style="font-family: monospace; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold;">02 · ISOLATED</div>
            </div>
            <div style="padding: 8px 14px 10px; background: var(--dx-solution-bg);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-solution); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">✓ CURTAIN</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">A single shareable link hands reviewers the full interactive tool, not just a picture of it</div>
            </div>
        </div>
        <div class="fragment" data-fragment-index="2" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); overflow: hidden;">
            <div style="padding: 8px 14px 6px; background: var(--dx-problem-bg); border-bottom: 1px solid var(--dx-problem-border);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⚠ PROBLEM</div>
                <div style="font-family: monospace; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold;">03 · UNCITABLE</div>
            </div>
            <div style="padding: 8px 14px 10px; background: var(--dx-solution-bg);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-solution); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">✓ CURTAIN</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">Every published session can get a citable permanent DOI backed by DataCite.</div>
            </div>
        </div>
    </div>
</section>

${HoloImageFacetGrid('Explore and share your differential analysis', [
    { src: 'assets/curtain.mobile.volcano.plot.gif',       alt: 'Curtain mobile volcano plot exploration',    caption: 'VOLCANO PLOT',   width: '246px' },
    { src: 'assets/curtain.protein.list.gif',               alt: 'Curtain mobile protein list exploration',    caption: 'PROTEIN LIST',   width: '246px' },
    { src: 'assets/curtain.found.proteins.filter.gif',      alt: 'Curtain mobile found proteins filter results', caption: 'FOUND PROTEINS', width: '246px' },
    { src: 'assets/curtain.bar.chart.mobile.gif',           alt: 'Curtain mobile bar chart',                   caption: 'BAR CHART',      width: '246px' },
])}
`
};
