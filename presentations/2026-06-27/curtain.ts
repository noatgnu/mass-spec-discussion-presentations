import { HoloImage } from '../../src/components';

export const section = {
    title: "Curtain & CurtainPTM",
    slides: `
<section>
    <h1>Curtain &amp; CurtainPTM</h1>
    <p>Turn analysis results into interactive figures that anyone can explore — and share them with a link that works like a citation.</p>
    ${HoloImage('assets/curtain-overview.png', 'Curtain Application Overview', '340px')}
</section>

<section>
    <h2>What's wrong with a static figure?</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; font-size: 0.78em;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 10px; font-size: 0.85em; letter-spacing: 1px;">[ A FIGURE IN A PAPER ]</p>
            <ul style="color: var(--dx-text-secondary); line-height: 1.7;">
                <li>You can see the pattern but cannot identify individual points</li>
                <li>The underlying numbers are not accessible</li>
                <li>A reviewer cannot check the data behind the image</li>
                <li>Once published, there is no way to update it if an error is found</li>
            </ul>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 18px; background: var(--dx-holo-bg);">
            <p style="font-family: monospace; color: var(--dx-gold); margin-bottom: 10px; font-size: 0.85em; letter-spacing: 1px;">[ A CURTAIN SESSION ]</p>
            <ul style="color: var(--dx-text-secondary); line-height: 1.7;">
                <li>Every data point is clickable — hover to see protein name and exact values</li>
                <li>Readers can filter, highlight, and re-annotate the same dataset</li>
                <li>The link can be referenced in a paper like any other citation</li>
                <li>Sessions persist and can be imported into Cinder for cross-study queries</li>
            </ul>
        </div>
    </div>
</section>

<section>
    <h2>Curtain — visualising which proteins changed</h2>
    <p style="font-size: 0.72em; color: var(--dx-text-secondary); margin-bottom: 14px;">Upload a results table from any mass spectrometry software. Curtain generates an interactive session in seconds.</p>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; font-size: 0.72em; margin-bottom: 14px;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 10px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">INTERACTIVE SCATTER PLOTS</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">See which proteins are significantly up or down — click any point to get its identity and raw values</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 10px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">ABUNDANCE PROFILES</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Rank and bar chart views to compare expression levels across all samples for any selected protein</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 10px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">INTERACTION NETWORKS</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Map your significant hits onto a protein interaction network — drawn automatically from public databases</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 10px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">PATHWAY ENRICHMENT</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Ask what biological processes are over-represented in your hit list — directly from the same interface</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 10px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">SAMPLE QUALITY CHECK</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Correlation heatmap across samples to spot batch effects or outliers before drawing conclusions</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 14px 10px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 6px;">CITABLE LINK</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Register a DOI for any session so it can be referenced in a paper the same way a dataset or software is cited</div>
        </div>
    </div>
    <div style="text-align: center;">
        ${HoloImage('assets/curtain-volcano.png', 'Curtain Interactive Scatter Plot', '230px')}
    </div>
</section>

<section>
    <h2>CurtainPTM — for modification-focused experiments</h2>
    <div style="display: flex; gap: 20px; margin-top: 16px; font-size: 0.78em;">
        <div style="flex: 0.9;">
            <p style="color: var(--dx-text-secondary); line-height: 1.6; margin-bottom: 14px;">Many mass spectrometry experiments specifically look at which sites on a protein are chemically modified — phosphorylation, ubiquitination, and others. CurtainPTM provides the same interactive sharing as Curtain, with additional views tuned for that context.</p>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 14px; background: var(--dx-holo-bg); margin-bottom: 10px;">
                <strong style="color: var(--dx-gold); display: block; margin-bottom: 6px;">See where on the protein the change happens</strong>
                <div style="color: var(--dx-text-secondary); line-height: 1.6;">Modified sites are mapped onto the protein sequence and structural domain diagram so the biological location is immediately clear.</div>
            </div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 14px; background: var(--dx-holo-bg); margin-bottom: 10px;">
                <strong style="color: var(--dx-gold); display: block; margin-bottom: 6px;">Modification abundance across all samples</strong>
                <div style="color: var(--dx-text-secondary); line-height: 1.6;">Profile plots show how the level of each modification changes across every sample in the experiment at a glance.</div>
            </div>
            <div style="border: 1px solid var(--dx-gold-dim); padding: 14px; background: var(--dx-holo-bg);">
                <strong style="color: var(--dx-gold); display: block; margin-bottom: 6px;">Connected to specialist databases</strong>
                <div style="color: var(--dx-text-secondary); line-height: 1.6;">Look up known kinase–substrate relationships, glycosylation annotations, and other site-specific biology without leaving the session.</div>
            </div>
        </div>
        <div style="flex: 1.1; text-align: center; display: flex; align-items: center; justify-content: center;">
            ${HoloImage('assets/curtainptm-overview.png', 'CurtainPTM PTM Position Viewer', '370px')}
        </div>
    </div>
</section>

<section>
    <h2>Designed for sharing at every stage</h2>
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 20px; font-size: 0.75em;">
        <div style="border: 1px solid var(--dx-gold-dim); padding: 16px 12px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 8px;">LINK SHARING</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Every session has a permanent URL. Include it in a paper, a grant, or a lab meeting slide — no login required to view.</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 16px 12px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 8px;">ORCID LOGIN</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Sign in with your researcher ID to own sessions, manage collections, and track how often they are accessed.</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 16px 12px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 8px;">COLLECTIONS</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Bundle related sessions into a named collection — useful for grouping all figures from one project or paper.</div>
        </div>
        <div style="border: 1px solid var(--dx-gold-dim); padding: 16px 12px; background: var(--dx-holo-bg); text-align: center;">
            <div style="font-family: monospace; color: var(--dx-gold); font-size: 0.85em; letter-spacing: 1px; margin-bottom: 8px;">SIDE-BY-SIDE COMPARISON</div>
            <div style="color: var(--dx-text-secondary); line-height: 1.5;">Load two sessions together to compare conditions, biological replicates, or independent experiments.</div>
        </div>
    </div>
</section>
`
};
