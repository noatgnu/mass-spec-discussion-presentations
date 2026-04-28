import { HoloImage } from '../../src/components';

export const section = {
    title: "Excel Add-in",
    slides: `
<section>
    <h2>Cupcake Add-in: Editing SDRF table with an enhanced Excel experience</h2>
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px;">
        <ul style="flex: 0.9; font-size: 0.85em;">
            <li>Runs as a task pane inside Microsoft Excel</li>
            <li>Connects remotely to the table you have created in Cupcake Vanilla</li>
            <li>Editing plain SDRF file with templating and ontology assistance from Cupcake Vanilla</li>
        </ul>
        <div style="flex: 1.1;">
            ${HoloImage('assets/excel_addin_panel_preview.png', 'Excel Add-in Panel Preview', '340px')}
        </div>
    </div>
</section>

<section>
    <h2>Synchronize your work in Excel</h2>
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px;">
        <div style="flex: 1.1;">
            ${HoloImage('assets/excel_addin_table_loaded_example.png', 'Table Loaded in Excel', '340px')}
        </div>
        <ul style="flex: 0.9; font-size: 0.85em;">
            <li>Edit cells directly in Excel</li>
            <li>Changes are tracked against original</li>
            <li>Conflict warning if the original have been changed before saving from excel</li>
        </ul>
    </div>
</section>

<section>
    <h2>Ontology Search &amp; Validation — In-Taskpane</h2>
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 20px;">
        <table style="flex: 1; font-size: 0.72em;">
            <thead><tr><th>Panel</th><th>What It Does</th></tr></thead>
            <tbody>
                <tr><td><strong>Ontology Search</strong></td><td>Look up OLS terms and insert NT/AC pairs without leaving Excel</td></tr>
                <tr><td><strong>Favorites</strong></td><td>Save frequently used ontology terms for one-click reuse</td></tr>
                <tr><td><strong>Validation</strong></td><td>Run SDRF schema compliance checks against the current sheet</td></tr>
            </tbody>
        </table>
        <div style="flex: 0.8;">
            ${HoloImage('assets/excel_validate_sdrf_sheet.png', 'SDRF Validation Panel', '280px')}
        </div>
    </div>
</section>

`
};
