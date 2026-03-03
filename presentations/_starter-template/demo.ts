import { EmbeddedSPA } from '../../src/components';

export const section = {
    title: "Interactive Demo",
    slides: `
<section>
    <h2>Using Components</h2>
    <p>This section uses HTML format to include interactive components.</p>
    <p>Switch from <code>markdown</code> to <code>slides</code> in your section to use components.</p>
</section>

<section>
    <h2>Embedded SPA Example</h2>
    <p>Replace the URL below with your own application:</p>
    ${EmbeddedSPA('https://example.com', { title: 'YOUR_APP', height: '400px' })}
</section>

<section>
    <h2>Available Components</h2>
    <ul>
        <li><strong>EmbeddedSPA</strong> - Embed web applications</li>
        <li><strong>HoloImage</strong> - Images with zoom capability</li>
        <li><strong>HoloFlow</strong> - Step-by-step flow charts</li>
    </ul>
    <p>See <code>src/components.ts</code> for full documentation.</p>
</section>
`
};
