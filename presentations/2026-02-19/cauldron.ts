import { HoloImage, HoloFlow } from '../../src/components';

export const section = {
    title: "Introducing Cauldron & Plugin Ecosystem",
    slides: `
        <section>
            <h1>Cauldron</h1>
            <p>Data Analysis Made Slightly Easier</p>
        </section>

        <section>
            <h2>Desktop Analysis Hub</h2>
            <p>Native performance, interactive visuals, and local data security.</p>
            ${HoloImage('assets/cauldron-main-interface.png', 'CauldronGO Main Interface')}
        </section>

        <section>
            <h2>The Plugin Registry</h2>
            <p>One-click discovery and installation of community-driven tools.</p>
            ${HoloImage('assets/plugin-registry-browser.png', 'Plugin Registry Browser')}
        </section>

        <section>
            <h2>Plugin Submission</h2>
            <p>Directly import your tools via Git repository URLs.</p>
            ${HoloImage('assets/submit-plugin-form.png', 'Submit Plugin Interface')}
        </section>

        <section>
            <h2>Automation via YAML</h2>
            <div style="display: flex; gap: 20px; align-items: center; justify-content: center;">
                <div style="flex: 1; text-align: left;">
                    <p style="color: var(--dx-gold); font-family: monospace; font-size: 1.2em; margin-bottom: 20px;">[ SCRIPT_RECIPE ]</p>
                    <p>Cauldron reads your <strong>plugin.yaml</strong> and automatically generates the analysis form.</p>
                </div>
                <div style="flex: 1.5;">
                    ${HoloImage('assets/yaml-file-example.png', 'YAML to UI Transformation')}
                </div>
            </div>
        </section>
        
        <section>
            <h2>UI Created From Document</h2>
            ${HoloImage('assets/example-docker-based-analysis.png', 'Running Docker-based Plugin')}
        </section>

        <section>
            <h2>Installing A Plugin</h2>
            <p>Seamless, automated plugin discovery and setup.</p>
            ${HoloFlow([
                { label: 'BROWSE', src: 'assets/install-step-1.png' },
                { label: 'INSTALL', src: 'assets/install-step-2.png' },
                { label: 'ENV SELECT', src: 'assets/install-step-3.png' },
                { label: 'AUTO-SETUP', src: 'assets/install-step-4.png' }
            ])}
        </section>

        <section>
            <h2>Local Plugin Library</h2>
            <p>Your workspace, your tools. Managed locally for privacy and speed.</p>
            ${HoloImage('assets/installed-plugin-browser.png', 'Installed Plugin Browser')}
        </section>

        <section>
            <h2>Community Ecosystem</h2>
            <p>Contribute your Python or R scripts to the community.</p>
            ${HoloImage('assets/my-submitted-plugin-browser.png', 'My Submitted Plugins View')}
        </section>



        <section>
            <h2>Global Settings & Customization</h2>
            <p>Define local tool paths and custom plugin registries.</p>
            ${HoloImage('assets/local-settings-customization.png', 'Local Settings Management')}
        </section>

        <section>
            <h2>Custom Plugin Registries</h2>
            <p>Connect to remote or private registries for specialized tools.</p>
            ${HoloImage('assets/local-settings-remote-plugin-registry-customization.png', 'Remote Registry Configuration')}
        </section>

        <section>
            <h2>About CauldronGO</h2>
            <p>Cross-platform, secure, and extensible mass spectrometry toolset.</p>
            ${HoloImage('assets/about-section-screenshot-to-be-shown-at-the-end-of-cauldron-section.png', 'About CauldronGO View')}
        </section>
    `
};
