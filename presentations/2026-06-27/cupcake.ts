import { HoloImageFacetGrid } from '../../src/components';


export const section = {
    title: "Cupcake",
    branding: true,
    slides: `
<section>
    <h2>The metadata problem</h2>
    <p style="font-size: 0.85em; color: var(--dx-text-secondary); margin: 12px 0 0; line-height: 1.6;">Proteomics experiments generate rich data but the metadata describing them is often incomplete, inconsistently recorded, and stored in ways that make it hard to reuse or share.</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; font-size: 0.75em; text-align: left;">
        <div class="fragment" data-fragment-index="0" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); overflow: hidden;">
            <div style="padding: 8px 14px 6px; background: var(--dx-problem-bg); border-bottom: 1px solid var(--dx-problem-border);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⚠ PROBLEM</div>
                <div style="font-family: monospace; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold;">01 · INCOMPLETE</div>
            </div>
            <div style="padding: 8px 14px 10px; background: var(--dx-solution-bg);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-solution); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">✓ CUPCAKE</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">Convenient application that can be used anywhere with structured templates guiding the user to complete the necessary information</div>
            </div>
        </div>
        <div class="fragment" data-fragment-index="1" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); overflow: hidden;">
            <div style="padding: 8px 14px 6px; background: var(--dx-problem-bg); border-bottom: 1px solid var(--dx-problem-border);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⚠ PROBLEM</div>
                <div style="font-family: monospace; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold;">02 · INCONSISTENT</div>
            </div>
            <div style="padding: 8px 14px 10px; background: var(--dx-solution-bg);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-solution); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">✓ CUPCAKE</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">Simple controlled vocabulary look up for the exact type of data the user want complete.</div>
            </div>
        </div>
        <div class="fragment" data-fragment-index="2" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); overflow: hidden;">
            <div style="padding: 8px 14px 6px; background: var(--dx-problem-bg); border-bottom: 1px solid var(--dx-problem-border);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⚠ PROBLEM</div>
                <div style="font-family: monospace; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold;">03 · FRAGMENTED</div>
            </div>
            <div style="padding: 8px 14px 10px; background: var(--dx-solution-bg);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-solution); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">✓ CUPCAKE</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">A single persistent database with all your experimental metadata for search and archival purpose</div>
            </div>
        </div>
        <div class="fragment" data-fragment-index="3" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); overflow: hidden;">
            <div style="padding: 8px 14px 6px; background: var(--dx-problem-bg); border-bottom: 1px solid var(--dx-problem-border);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⚠ PROBLEM</div>
                <div style="font-family: monospace; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold;">04 · NONCOMPLIANT</div>
            </div>
            <div style="padding: 8px 14px 10px; background: var(--dx-solution-bg);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-solution); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">✓ CUPCAKE</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">Export directly to the templates and formats required by funders and raw data repositories such as PRIDE</div>
            </div>
        </div>
    </div>
</section>

${HoloImageFacetGrid('Simplify documenting your metadata in a format for archival purposes', [
    { src: 'assets/cupcake.lab.notebook.protocol.png',                  alt: 'Cupcake lab notebook protocol sections', caption: 'PROTOCOL STEPS',       width: '311px' },
    { src: 'assets/cupcake.lab.notebook.annotation.png',                alt: 'Cupcake lab notebook add annotation',    caption: 'ANNOTATION INPUT',     width: '311px' },
    { src: 'assets/cupcake.metadata.controlled.vocabulary.lookup.png',  alt: 'Cupcake controlled vocabulary lookup',   caption: 'VOCABULARY LOOKUP',    width: '269px' },
    { src: 'assets/cupcake.metadata.template.management.png',          alt: 'Cupcake metadata template management',   caption: 'TEMPLATE MANAGEMENT',  width: '274px' },
])}
`
};
