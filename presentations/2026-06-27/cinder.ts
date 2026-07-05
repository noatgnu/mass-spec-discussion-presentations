import { HoloImageFacetGrid } from '../../src/components';


export const section = {
    title: "Cinder",
    branding: true,
    slides: `
<section>
    <h2>Experiments in isolation</h2>
    <p style="font-size: 0.85em; color: var(--dx-text-secondary); margin: 12px 0 0; line-height: 1.6;">Exploration of a collection of experiments made easier than ever.</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 16px; font-size: 0.75em; text-align: left;">
        <div class="fragment" data-fragment-index="0" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); overflow: hidden;">
            <div style="padding: 8px 14px 6px; background: var(--dx-problem-bg); border-bottom: 1px solid var(--dx-problem-border);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⚠ PROBLEM</div>
                <div style="font-family: monospace; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold;">01 · MANUAL</div>
            </div>
            <div style="padding: 8px 14px 10px; background: var(--dx-solution-bg);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-solution); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">✓ CINDER</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">Search once and see a protein's status across every collated experiment at once</div>
            </div>
        </div>
        <div class="fragment" data-fragment-index="1" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); overflow: hidden;">
            <div style="padding: 8px 14px 6px; background: var(--dx-problem-bg); border-bottom: 1px solid var(--dx-problem-border);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⚠ PROBLEM</div>
                <div style="font-family: monospace; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold;">02 · UNCOLLECTABLE</div>
            </div>
            <div style="padding: 8px 14px 10px; background: var(--dx-solution-bg);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-solution); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">✓ CINDER</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">Related experiments bundle into a shareable, browsable collate library</div>
            </div>
        </div>
        <div class="fragment" data-fragment-index="2" style="border: 1px solid var(--dx-gold-dim); background: var(--dx-holo-bg); overflow: hidden;">
            <div style="padding: 8px 14px 6px; background: var(--dx-problem-bg); border-bottom: 1px solid var(--dx-problem-border);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">⚠ PROBLEM</div>
                <div style="font-family: monospace; color: var(--dx-problem); letter-spacing: 1px; font-weight: bold;">03 · UNRECORDED NEGATIVES</div>
            </div>
            <div style="padding: 8px 14px 10px; background: var(--dx-solution-bg);">
                <div style="font-family: monospace; font-size: 0.68em; color: var(--dx-solution); letter-spacing: 1px; font-weight: bold; margin-bottom: 3px;">✓ CINDER</div>
                <div style="color: var(--dx-text-secondary); line-height: 1.5;">Negative results are captured and searchable alongside positive ones, not discarded</div>
            </div>
        </div>
    </div>
</section>

${HoloImageFacetGrid('Browse and organize your collated experiment libraries', [
    { src: 'assets/cinder.browsing.collates.gif', alt: 'Cinder mobile browsing collates', caption: 'BROWSE COLLATES', width: '246px' },
    { src: 'assets/cinder.collate.details.gif',   alt: 'Cinder mobile collate details',    caption: 'COLLATE DETAILS', width: '246px' },
])}

${HoloImageFacetGrid('Search and visualize a protein across every collated experiment', [
    { src: 'assets/cinder.protein.search.list.gif',    alt: 'Cinder mobile protein filter list selection', caption: 'PROTEIN FILTER LIST',   width: '246px' },
    { src: 'assets/cinder.collate.search.gif',         alt: 'Cinder mobile collate search',              caption: 'COLLATE SEARCH',        width: '246px' },
    { src: 'assets/cinder.collate.visualization.gif',  alt: 'Cinder mobile collate visualization',        caption: 'COLLATE VISUALIZATION', width: '246px' },
])}
`
};
