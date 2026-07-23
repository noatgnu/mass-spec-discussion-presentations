import { HoloImageFacetGrid } from '../../src/components';


export const section = {
    title: "Cinder",
    branding: true,
    slides: `
<section>
    <h2>What's new in Cinder</h2>
    <p style="font-size: 0.85em; color: var(--dx-text-secondary); margin: 12px 0 0; line-height: 1.6;">Two new capabilities for exploring collate search results.</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; font-size: 0.75em; text-align: left;">
        <div class="fragment" data-fragment-index="0" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); overflow: hidden;">
            <div style="padding: 8px 14px 6px; background: var(--dx-problem-bg); border-bottom: 1px solid var(--dx-problem-border);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⚠ PROBLEM</div>
                <div style="font-family: monospace; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold;">01 · SCATTERED RESULTS</div>
            </div>
            <div style="padding: 8px 14px 10px; background: var(--dx-solution-bg);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-solution); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">✓ CINDER</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">Collate search hits now render as one heatmap — proteins by row, every project and analysis group by column, colored by log2 fold change, with adjustable cutoffs and reorderable rows/columns.</div>
            </div>
        </div>
        <div class="fragment" data-fragment-index="1" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); overflow: hidden;">
            <div style="padding: 8px 14px 6px; background: var(--dx-problem-bg); border-bottom: 1px solid var(--dx-problem-border);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⚠ PROBLEM</div>
                <div style="font-family: monospace; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold;">02 · MANUAL LIST BUILDING</div>
            </div>
            <div style="padding: 8px 14px 10px; background: var(--dx-solution-bg);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-solution); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">✓ CINDER</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">Collate search can now pull from Curtain's publicly curated protein lists — Parkinson's, LRRK2 pathway, cilia, and more — merged straight into your query instead of hand-typing IDs.</div>
            </div>
        </div>
    </div>
</section>

${HoloImageFacetGrid('Search and visualize collated results as a heatmap', [
    { src: 'assets/cinder.collate.search.gif',        alt: 'Cinder mobile collate search',         caption: 'COLLATE SEARCH',        width: '246px' },
    { src: 'assets/cinder.collate.visualization.gif', alt: 'Cinder mobile collate heatmap visualization', caption: 'UPDATED VISUALIZATION', width: '246px' },
])}
`
};
