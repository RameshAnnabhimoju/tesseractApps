import fs from 'fs';
import path from 'path';

function getFiles(dir, exts) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
        // Exclude node_modules, dist, .git
        if (!['node_modules', 'dist', '.git', 'discarded'].includes(path.basename(fullPath))) {
            results = results.concat(getFiles(fullPath, exts));
        }
    } else {
      const ext = path.extname(fullPath).toLowerCase().slice(1);
      if (!exts || exts.includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const reportPath = path.join(process.cwd(), 'unused_images_report.md');
const reportContent = fs.readFileSync(reportPath, 'utf8');

const unusedFiles = [];
const lines = reportContent.split('\n');
for(const line of lines) {
    const match = line.match(/-\s+`([^`]+)`/);
    if (match) {
        // Need to be careful. The paths in the md are relative to project root. e.g. "src/assets/..."
        const p = path.resolve(process.cwd(), match[1]);
        unusedFiles.push(p);
    }
}

console.log(`Parsed ${unusedFiles.length} unused files from report.`);

const srcFiles = getFiles(path.join(process.cwd(), 'src'), ['ts', 'tsx', 'js', 'jsx', 'json', 'css', 'scss', 'html', 'md']);
const publicTextFiles = getFiles(path.join(process.cwd(), 'public'), ['json', 'html', 'css', 'js', 'txt', 'xml']);
const rootFiles = getFiles(process.cwd(), ['ts', 'js', 'json', 'html']); 

const filesToRead = [...srcFiles, ...publicTextFiles, ...rootFiles].filter(f => 
    !f.includes('unused_images_report.md') && 
    !f.includes('audit-images.mjs') && 
    !f.includes('move-discarded.mjs')
);

let fullSourceCode = '';
for (const f of filesToRead) {
    fullSourceCode += fs.readFileSync(f, 'utf8') + '\n';
}

console.log(`Compiled ${filesToRead.length} source files for full-text double verification.`);

const confirmedUnused = [];
const possiblyUsed = [];

for (const imgPath of unusedFiles) {
    if (!fs.existsSync(imgPath)) {
        console.log(`File not found, maybe already moved? ${imgPath}`);
        continue;
    }
    const baseName = path.basename(imgPath);
    
    // We only double check the full filename. Since these are assets, if they aren't in the Vite build bundle,
    // they are NOT used by the application in production. So anything we find in source is likely an unused component.
    // However, if we find the exact `baseName` string anywhere in source code, we skip it just to be ultra safe.
    // E.g. "logo.png"
    
    if (fullSourceCode.includes(baseName)) {
        possiblyUsed.push(imgPath);
    } else {
        confirmedUnused.push(imgPath);
    }
}

console.log(`\nDouble check complete!`);
console.log(`Confirmed Absolutely Unused: ${confirmedUnused.length}`);
if (possiblyUsed.length > 0) {
    console.log(`Skipping these ${possiblyUsed.length} files as their names appear in source text (likely imported by unused components):`);
    possiblyUsed.forEach(f => console.log('   ', path.basename(f)));
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

console.log(`\nMoving and renaming ${confirmedUnused.length} confirmed unused files to 'discarded/'...`);
let moveCount = 0;
for (const originalPath of confirmedUnused) {
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

console.log(`\nSuccessfully moved and renamed ${moveCount} files to 'discarded/'.`);
