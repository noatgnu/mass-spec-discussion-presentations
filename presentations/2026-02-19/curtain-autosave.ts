import { HoloImage } from '../../src/components';

export const section = {
    title: "Curtain Auto-Save",
    slides: `
<section>
    <h2>Beta: Revamped Local State System</h2>
    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 20px;">
        <div style="flex: 1;">
            <p>Enhanced local session state management for better workflow organization.</p>
            <ul>
                <li><strong>Auto-Save:</strong> Automatic checkpoints while working across sessions.</li>
                <li><strong>Named States:</strong> Custom names and descriptions for saved states.</li>
                <li><strong>Tags:</strong> Organize states with searchable tags.</li>
                <li><strong>Selective Import/Export:</strong> Choose specific settings categories to include.</li>
            </ul>
        </div>
        ${HoloImage('assets/local-state-management-overview.png', 'Local State Management', '350px')}
    </div>
</section>

<section>
    <h2>Auto-Save Feature</h2>
    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 20px;">
        <div style="flex: 1;">
            <p>Automatic background minimizes data loss during analysis:</p>
            <ul>
                <li><strong>Configurable Interval:</strong> Set auto-save frequency (1, 5, 10, or 30 minutes).</li>
                <li><strong>Multi-Tab Support:</strong> Coordinates across browser tabs to avoid duplicates.</li>
                <li><strong>Automatic Rotation:</strong> Keeps last 5 auto-saves, removes older ones.</li>
            </ul>
        </div>
        ${HoloImage('assets/auto-save-settings.png', 'Auto-Save Settings', '350px')}
    </div>
</section>
`
};
