import * as fs from 'fs';
import * as path from 'path';

require('ts-node').register({ transpileOnly: true });

const PRESENTATIONS_DIR = path.resolve(__dirname, '../presentations');
const TEMPLATE_PATH = path.resolve(__dirname, '../templates/presentation-template.html');
const INDEX_TEMPLATE_PATH = path.resolve(__dirname, '../templates/index-template.html');

interface Section {
    title: string;
    slides?: string;
    markdown?: string;
}

interface PresentationConfig {
    title: string;
    theme?: 'dark' | 'light';
    showToc?: boolean;
    showPageNumbers?: boolean | string;
    loc?: string;
    sections?: string[];
    slides?: string;
    markdown?: string;
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

function generateTocSlide(title: string, sections: { name: string; section: Section }[]): string {
    const tocItems = sections
        .map((s, index) => `<li><a href="#/section-${index + 1}">${s.section.title}</a></li>`)
        .join('\n                        ');

    return `
                <section id="toc">
                    <h2>Table of Contents</h2>
                    <ol>
                        ${tocItems}
                    </ol>
                </section>`;
}

function generateTitleSlide(title: string): string {
    return `
                <section>
                    <h1>${title}</h1>
                </section>`;
}

function wrapSectionSlides(section: Section, sectionIndex: number): string {
    let content = '';

    if (section.slides) {
        content = section.slides;
    } else if (section.markdown) {
        content = `<section data-markdown><textarea data-template>${section.markdown}</textarea></section>`;
    }

    return `
                <section id="section-${sectionIndex}">
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

    let allSlides = generateTitleSlide(config.title);

    if (config.showToc !== false) {
        allSlides += generateTocSlide(config.title, loadedSections);
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
