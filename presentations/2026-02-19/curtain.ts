import { EmbeddedSPA, HoloImage } from '../../src/components';

export const section = {
    title: "Curtain Collections",
    slides: `
<section>
    <h2>What are Collections?</h2>
    <p>A new feature allowing users to group related Curtain sessions together.</p>
    <ul>
        <li><strong>Organization:</strong> Categorize sessions by project, experiment, or publication.</li>
        <li><strong>Sharing:</strong> Share a single link to multiple related session.</li>
    </ul>
</section>

<section>
    <h2>Collection in Home Screen</h2>
    ${HoloImage('assets/collection-dropdown-on-home-screen-of-section-with-collection-association.png', 'Collection Dropdown', '400px')}
</section>

<section>
    <h2>Management Workflow</h2>
    <p>Logged-in users can manage their collections directly from the session view:</p>
    ${HoloImage('assets/adding-current-session-to-a-collection.png', 'Add to Collection', '400px')}
</section>

<section>
    <h2>User Account Management</h2>
    <p>View and organize all your created collections in your personal account space.</p>
    ${HoloImage('assets/collection-tab-in-user-account-screenshot.png', 'Account Tab', '400px')}
</section>

<section>
    <h2>Landing Page</h2>
    <p>Collections are private by default but can be made public:</p>
    <ul>
        <li><strong>Public Links:</strong> Toggle sharing to generate a shareable URL.</li>
    </ul>
    ${HoloImage('assets/dedicated-landing-page-for-collection-that-can-be-share.png', 'Landing Page', '400px')}
</section>

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

<section>
    <h2>User &amp; Visitor Estimation Statistics January - February 2026</h2>
    <div style="display: flex; justify-content: space-around; align-items: center; gap: 20px;">
        ${HoloImage('assets/jan-feb-user-view-visitors-statistics.png', 'Visitor Stats', '350px')}
        ${HoloImage('assets/visitor-statistics-per-country.png', 'Country Stats', '350px')}
    </div>
</section>
`
};
