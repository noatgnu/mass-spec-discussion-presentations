import * as fs from 'fs';
import * as path from 'path';
import { execSync, spawn, ChildProcess } from 'child_process';

const PRESENTATIONS_DIR = path.resolve(__dirname, '../presentations');
const PORT = 3001;

function getPresentationDirs(): string[] {
    if (!fs.existsSync(PRESENTATIONS_DIR)) {
        console.error('Presentations directory not found');
        return [];
    }

    return fs.readdirSync(PRESENTATIONS_DIR).filter(file => {
        const dirPath = path.join(PRESENTATIONS_DIR, file);
        const htmlPath = path.join(dirPath, 'index.html');
        return fs.statSync(dirPath).isDirectory() && fs.existsSync(htmlPath);
    });
}

function startServer(): ChildProcess {
    console.log(`Starting server on port ${PORT}...`);
    const server = spawn('npx', ['serve', 'presentations', '-l', String(PORT)], {
        stdio: 'pipe',
        shell: true
    });
    return server;
}

function waitForServer(port: number, timeout: number = 10000): Promise<void> {
    return new Promise((resolve, reject) => {
        const start = Date.now();
        const check = () => {
            try {
                execSync(`curl -s http://localhost:${port} > /dev/null 2>&1`, { stdio: 'ignore' });
                resolve();
            } catch {
                if (Date.now() - start > timeout) {
                    reject(new Error('Server startup timeout'));
                } else {
                    setTimeout(check, 500);
                }
            }
        };
        check();
    });
}

function exportToPdf(presentationName: string): void {
    const url = `http://localhost:${PORT}/${presentationName}/index.html`;
    const outputDir = path.join(PRESENTATIONS_DIR, presentationName);
    const outputPath = path.join(outputDir, `${presentationName}.pdf`);

    console.log(`Exporting ${presentationName} to PDF...`);

    try {
        execSync(`npx decktape reveal "${url}" "${outputPath}" --size 1920x1080`, {
            stdio: 'inherit'
        });
        console.log(`Successfully exported: ${outputPath}`);
    } catch (error) {
        console.error(`Failed to export ${presentationName}:`, error);
    }
}

async function main() {
    const args = process.argv.slice(2);
    const exportAll = args.includes('--all');
    const specificName = args.find(arg => !arg.startsWith('--'));

    const presentations = getPresentationDirs();

    if (presentations.length === 0) {
        console.error('No presentations found. Run "npm run generate" first.');
        process.exit(1);
    }

    let toExport: string[] = [];

    if (exportAll) {
        toExport = presentations;
    } else if (specificName) {
        if (presentations.includes(specificName)) {
            toExport = [specificName];
        } else {
            console.error(`Presentation "${specificName}" not found.`);
            console.log('Available presentations:', presentations.join(', '));
            process.exit(1);
        }
    } else {
        console.log('Usage:');
        console.log('  npm run pdf <presentation-name>  - Export specific presentation');
        console.log('  npm run pdf:all                  - Export all presentations');
        console.log('');
        console.log('Available presentations:', presentations.join(', '));
        process.exit(0);
    }

    const server = startServer();

    try {
        await waitForServer(PORT);
        console.log('Server ready.');

        for (const name of toExport) {
            exportToPdf(name);
        }
    } finally {
        server.kill();
        console.log('Server stopped.');
    }
}

main().catch(console.error);
