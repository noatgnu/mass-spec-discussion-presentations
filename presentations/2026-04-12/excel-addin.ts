export const section = {
    title: "Excel Add-in",
    slides: `
<section>
    <h2>SDRF Where You Already Work</h2>
    <ul style="margin-top: 20px;">
        <li>Runs as a task pane inside Microsoft Excel</li>
        <li>Connects remotely to the table you have created in Cupcake Vanilla</li>
    </ul>
</section>

<section>
    <h2>Connect &amp; Browse</h2>
    <ul>
        <li><strong>Authentication:</strong> log in to your Cupcake Vanilla instance from within Excel</li>
        <li><strong>Table browser:</strong> browse all your metadata tables and pull any one into the active sheet</li>
        <li><strong>Column schema:</strong> columns are loaded in their correct SDRF order with types preserved</li>
    </ul>
</section>

<section>
    <h2>Synchronize your work in Excel</h2>
    <ul>
        <li>Edit cells directly in Excel — the add-in tracks every change against the original version</li>
        <li><strong>Change detection:</strong> only modified cells are flagged for update on the backend</li>
        <li><strong>Remote conflict detection:</strong> warns if the backend was modified by someone else since your last pull</li>
    </ul>
</section>

<section>
    <h2>Ontology Search &amp; Validation — In-Taskpane</h2>
    <table>
        <thead><tr><th>Panel</th><th>What It Does</th></tr></thead>
        <tbody>
            <tr><td><strong>Ontology Search</strong></td><td>Look up OLS terms and insert NT/AC pairs without leaving Excel</td></tr>
            <tr><td><strong>Favorites</strong></td><td>Save frequently used ontology terms for one-click reuse</td></tr>
            <tr><td><strong>Validation</strong></td><td>Run SDRF schema compliance checks against the current sheet</td></tr>
            <tr><td><strong>Age Input</strong></td><td>Structured helper for SDRF-compliant age annotation</td></tr>
            <tr><td><strong>Modification Input</strong></td><td>Structured NT/MT/TA/AC builder for modification parameters</td></tr>
            <tr><td><strong>Cleavage Input</strong></td><td>Structured helper for enzyme cleavage annotation</td></tr>
        </tbody>
    </table>
</section>

`
};
