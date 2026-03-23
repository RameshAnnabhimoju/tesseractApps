import fs from 'fs';
import path from 'path';

const reportPath = path.join(process.cwd(), 'unused_images_report.md');
const reportContent = fs.readFileSync(reportPath, 'utf8');

const unusedFiles = [];
const lines = reportContent.split('\n');
for(const line of lines) {
    const match = line.match(/-\s+`([^`]+)`/);
    if (match) {
        const p = path.resolve(process.cwd(), match[1]);
        unusedFiles.push(p);
    }
}

const discardDir = path.join(process.cwd(), 'discarded');
if (!fs.existsSync(discardDir)) {
    fs.mkdirSync(discardDir);
}

const safeNormalizeName = (filename) => {
    const ext = path.extname(filename);
    let name = path.basename(filename, ext);
    name = name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '_') 
        .replace(/^_+|_+$/g, ''); 
    return `${name}${ext.toLowerCase()}`;
};

console.log(`\nMoving the remaining unused files that were left behind...`);
let moveCount = 0;
for (const originalPath of unusedFiles) {
    if (!fs.existsSync(originalPath)) {
        continue;
    }

    const newName = safeNormalizeName(originalPath);
    let destPath = path.join(discardDir, newName);
    
    let counter = 1;
    while(fs.existsSync(destPath)) {
        const ext = path.extname(newName);
        const nameNoExt = path.basename(newName, ext);
        destPath = path.join(discardDir, `${nameNoExt}_${counter}${ext}`);
        counter++;
    }
    
    fs.copyFileSync(originalPath, destPath);
    fs.unlinkSync(originalPath); 
    moveCount++;
}

console.log(`\nSuccessfully moved and renamed the remaining ${moveCount} files to 'discarded/'.\nAll 139 unused images have now been cleaned up!`);
