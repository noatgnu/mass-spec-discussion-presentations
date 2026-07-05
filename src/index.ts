import * as fs from 'fs';
import * as path from 'path';
import { QRCode } from './components';

require('ts-node').register({ transpileOnly: true });

const PRESENTATIONS_DIR = path.resolve(__dirname, '../presentations');
const TEMPLATE_PATH = path.resolve(__dirname, '../templates/presentation-template.html');
const INDEX_TEMPLATE_PATH = path.resolve(__dirname, '../templates/index-template.html');
const REVEAL_SRC = path.resolve(__dirname, '../node_modules/reveal.js');
const REVEAL_DEST = path.resolve(PRESENTATIONS_DIR, '_assets/reveal.js');
const ASSETS_DIR = path.resolve(PRESENTATIONS_DIR, '_assets');

function copyRevealAssets(): void {
    const dirsToCreate = [
        '_assets/reveal.js/dist',
        '_assets/reveal.js/plugin/notes',
        '_assets/reveal.js/plugin/markdown',
        '_assets/reveal.js/plugin/highlight'
    ];

    dirsToCreate.forEach(dir => {
        const fullPath = path.join(PRESENTATIONS_DIR, dir);
        if (!fs.existsSync(fullPath)) {
            fs.mkdirSync(fullPath, { recursive: true });
        }
    });

    const filesToCopy = [
        'dist/reset.css',
        'dist/reveal.css',
        'dist/reveal.js',
        'dist/theme/black.css',
        'plugin/notes/notes.js',
        'plugin/markdown/markdown.js',
        'plugin/highlight/highlight.js',
        'plugin/highlight/monokai.css'
    ];

    filesToCopy.forEach(file => {
        const src = path.join(REVEAL_SRC, file);
        const dest = path.join(REVEAL_DEST, file);
        const destDir = path.dirname(dest);

        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }

        if (fs.existsSync(src)) {
            fs.copyFileSync(src, dest);
        }
    });

    console.log('Copied reveal.js assets to _assets/reveal.js');

    const qrSrc = path.resolve(__dirname, '../node_modules/qr-code-styling/lib/qr-code-styling.js');
    const qrDest = path.join(ASSETS_DIR, 'qr-code-styling.js');
    if (fs.existsSync(qrSrc)) {
        fs.copyFileSync(qrSrc, qrDest);
        console.log('Copied qr-code-styling.js to _assets/');
    }
}

interface Section {
    title: string;
    slides?: string;
    markdown?: string;
    /** Shows the section title as a large faded watermark in the corner of every slide in this section. */
    branding?: boolean;
}

interface Author {
    name: string;
    affiliation?: string;
    /** Underlines this author's name to mark them as the presenting speaker. */
    speaker?: boolean;
}

interface PresentationConfig {
    title: string;
    theme?: 'dark' | 'light';
    showToc?: boolean;
    showPageNumbers?: boolean | string;
    loc?: string;
    url?: string;
    sections?: string[];
    slides?: string;
    markdown?: string;
    /** Optional author list shown on the title slide, with the speaker's name underlined. */
    authors?: Author[];
}

function clearRequireCache(filePath: string): void {
    delete require.cache[require.resolve(filePath)];
}

function loadSection(presentationDir: string, sectionName: string): Section | null {
    const sectionPath = path.join(presentationDir, `${sectionName}.ts`);

    if (!fs.existsSync(sectionPath)) {
        console.error(`Section file not found: ${sectionPath}`);
        return null;
    }

    clearRequireCache(sectionPath);
    const { section } = require(sectionPath);

    if (!section || (!section.slides && !section.markdown)) {
        console.error(`Invalid section format in ${sectionPath}`);
        return null;
    }

    return section;
}

function generateTocSlide(title: string, sections: { name: string; section: Section }[], url?: string): string {
    const tocItems = sections
        .map((s, index) => `<li style="padding: 6px 0;"><a href="#/section-${index + 1}" style="color: var(--dx-text); text-decoration: none;">${s.section.title}</a></li>`)
        .join('\n                        ');

    const qrColumn = url ? `
                        <div style="display: flex; flex-direction: column; align-items: center; gap: 10px; padding-left: 20px; border-left: 1px solid var(--dx-gold-dim);">
                            <div style="border: 1px solid var(--dx-gold-dim); padding: 10px; background: var(--dx-holo-bg);">
                                ${QRCode(url, { size: 180 })}
                            </div>
                            <div style="font-family: monospace; color: var(--dx-gold-dim); font-size: 0.5em; letter-spacing: 1px; text-align: center;">ONLINE VERSION</div>
                        </div>` : '';

    const layout = url
        ? `<div style="display: flex; gap: 20px; align-items: flex-start; margin-top: 20px;">
                        <ol style="flex: 1; text-align: left; font-size: 1.15em; line-height: 1.8; padding-left: 2em; margin: 0;">
                            ${tocItems}
                        </ol>
                        ${qrColumn}
                    </div>`
        : `<ol style="width: 100%; text-align: left; margin-top: 20px; font-size: 1.15em; line-height: 1.8; padding-left: 2em;">
                        ${tocItems}
                    </ol>`;

    return `
                <section id="toc">
                    <h2>Table of Contents</h2>
                    ${layout}
                </section>`;
}

const SUPERSCRIPT_DIGITS = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];
function toSuperscript(n: number): string {
    return String(n).split('').map(d => SUPERSCRIPT_DIGITS[parseInt(d, 10)]).join('');
}

function generateAuthorsHtml(authors: Author[]): string {
    const affiliations: string[] = [];
    const indexFor = (aff?: string): number | null => {
        if (!aff) return null;
        let idx = affiliations.indexOf(aff);
        if (idx === -1) {
            affiliations.push(aff);
            idx = affiliations.length - 1;
        }
        return idx + 1;
    };

    const nameSpans = authors.map(a => {
        const idx = indexFor(a.affiliation);
        const sup = idx !== null ? `<span class="dx-sup">${toSuperscript(idx)}</span>` : '';
        const nameClass = a.speaker ? 'dx-name dx-speaker' : 'dx-name';
        return `<span class="${nameClass}">${a.name}</span>${sup}`;
    });

    const affiliationsHtml = affiliations
        .map((aff, i) => `<span class="dx-sup">${toSuperscript(i + 1)}</span>&nbsp;${aff}`)
        .join('&nbsp;&nbsp;&nbsp;');

    return `
                    <div class="dx-authors-block" data-pptx-authors>
                        <div class="dx-authors">${nameSpans.join(', ')}</div>
                        <div class="dx-affiliations">${affiliationsHtml}</div>
                    </div>`;
}

function generateTitleSlide(title: string, authors?: Author[]): string {
    const authorsHtml = authors && authors.length > 0 ? generateAuthorsHtml(authors) : '';
    return `
                <section>
                    <h1>${title}</h1>${authorsHtml}
                </section>`;
}

function wrapSectionSlides(section: Section, sectionIndex: number): string {
    let content = '';

    if (section.slides) {
        content = section.slides;
    } else if (section.markdown) {
        content = `<section data-markdown><textarea data-template>${section.markdown}</textarea></section>`;
    }

    const brandAttr = section.branding
        ? ` data-brand="${section.title.replace(/"/g, '&quot;')}"`
        : '';

    return `
                <section id="section-${sectionIndex}"${brandAttr}>
                    ${content}
                </section>`;
}

function buildMultiSectionPresentation(
    presentationDir: string,
    config: PresentationConfig
): { slides: string; markdown: string } {
    const loadedSections: { name: string; section: Section }[] = [];

    for (const sectionName of config.sections!) {
        const section = loadSection(presentationDir, sectionName);
        if (section) {
            loadedSections.push({ name: sectionName, section });
        }
    }

    if (loadedSections.length === 0) {
        return { slides: '', markdown: '' };
    }

    let allSlides = generateTitleSlide(config.title, config.authors);

    if (config.showToc !== false) {
        allSlides += generateTocSlide(config.title, loadedSections, config.url);
    }

    loadedSections.forEach((s, index) => {
        allSlides += wrapSectionSlides(s.section, index + 1);
    });

    return { slides: allSlides, markdown: '' };
}

function buildLegacyPresentation(config: PresentationConfig): { slides: string; markdown: string } {
    let markdown = '';

    if (config.markdown) {
        markdown = `<section data-markdown><textarea data-template>${config.markdown}</textarea></section>`;
    }

    return { slides: config.slides || '', markdown };
}

interface PresentationEntry {
    dir: string;
    title: string;
    loc?: string;
}

function generateRootIndex(presentations: PresentationEntry[]): void {
    if (!fs.existsSync(INDEX_TEMPLATE_PATH)) {
        console.error('Index template not found');
        return;
    }

    const template = fs.readFileSync(INDEX_TEMPLATE_PATH, 'utf-8');

    const presentationsHtml = presentations
        .filter(p => !p.dir.startsWith('_'))
        .sort((a, b) => b.dir.localeCompare(a.dir))
        .map(p => `
            <a href="./${p.dir}/" class="presentation-card">
                <div class="presentation-info">
                    <div class="presentation-title">${p.title}</div>
                    <div class="presentation-meta">${p.dir}${p.loc ? ` · ${p.loc}` : ''}</div>
                </div>
                <span class="presentation-arrow">→</span>
            </a>`)
        .join('\n');

    const html = template.replace('{{presentations}}', presentationsHtml || '<p class="empty-state">No presentations found</p>');
    const indexPath = path.join(PRESENTATIONS_DIR, 'index.html');

    fs.writeFileSync(indexPath, html);
    console.log(`Successfully generated root index: ${indexPath}`);
}

function buildPresentations(): void {
    if (!fs.existsSync(PRESENTATIONS_DIR)) {
        console.error('Presentations directory not found');
        return;
    }

    copyRevealAssets();

    const template = fs.readFileSync(TEMPLATE_PATH, 'utf-8');
    const presentationDirs = fs.readdirSync(PRESENTATIONS_DIR).filter(file =>
        fs.statSync(path.join(PRESENTATIONS_DIR, file)).isDirectory()
    );

    const builtPresentations: PresentationEntry[] = [];

    presentationDirs.forEach(dir => {
        const presentationTsPath = path.join(PRESENTATIONS_DIR, dir, 'index.ts');

        if (!fs.existsSync(presentationTsPath)) {
            return;
        }

        console.log(`Building presentation: ${dir}`);

        try {
            clearRequireCache(presentationTsPath);
            const { presentation } = require(presentationTsPath) as { presentation: PresentationConfig };

            if (!presentation) {
                console.error(`No presentation export in ${presentationTsPath}`);
                return;
            }

            const presentationDir = path.join(PRESENTATIONS_DIR, dir);
            let content: { slides: string; markdown: string };

            if (presentation.sections && Array.isArray(presentation.sections)) {
                content = buildMultiSectionPresentation(presentationDir, presentation);
            } else if (presentation.slides || presentation.markdown) {
                content = buildLegacyPresentation(presentation);
            } else {
                console.error(`Invalid presentation format in ${presentationTsPath}`);
                return;
            }

            const theme = presentation.theme || 'dark';
            const showPageNumbers = presentation.showPageNumbers ?? false;
            const loc = presentation.loc || '';
            const pageNumbersValue = typeof showPageNumbers === 'string'
                ? `'${showPageNumbers}'`
                : showPageNumbers;
            const indexPath = path.join(presentationDir, 'index.html');

            const html = template
                .replace('{{title}}', presentation.title || dir)
                .replace('{{theme}}', theme)
                .replace('{{showPageNumbers}}', String(pageNumbersValue))
                .replace('{{loc}}', loc)
                .replace('{{slides}}', content.slides)
                .replace('{{markdown}}', content.markdown);

            fs.writeFileSync(indexPath, html);
            console.log(`Successfully generated ${indexPath}`);

            builtPresentations.push({
                dir,
                title: presentation.title || dir,
                loc: presentation.loc
            });
        } catch (error) {
            console.error(`Error building ${dir}:`, error);
        }
    });

    generateRootIndex(builtPresentations);
}

buildPresentations();
