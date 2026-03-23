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

const originalFiles = [];
const lines = reportContent.split('\n');
for(const line of lines) {
    const match = line.match(/-\s+`([^`]+)`/);
    if (match) {
        originalFiles.push(path.resolve(process.cwd(), match[1]));
    }
}

const safeNormalizeName = (filename) => {
    const ext = path.extname(filename);
    let name = path.basename(filename, ext);
    name = name.toLowerCase()
        .replace(/[^a-z0-9]+/g, '_') 
        .replace(/^_+|_+$/g, ''); 
    return `${name}${ext.toLowerCase()}`;
};

const srcFiles = getFiles(path.join(process.cwd(), 'src'), ['ts', 'tsx', 'js', 'jsx', 'json', 'css', 'scss', 'html', 'md']);
const publicTextFiles = getFiles(path.join(process.cwd(), 'public'), ['json', 'html', 'css', 'js', 'txt', 'xml']);
const rootFiles = getFiles(process.cwd(), ['ts', 'js', 'json', 'html']); 

const filesToRead = [...srcFiles, ...publicTextFiles, ...rootFiles].filter(f => 
    !f.includes('unused_images_report.md') && 
    !f.includes('audit-images.mjs') && 
    !f.includes('move-discarded.mjs') &&
    !f.includes('restore-images.mjs')
);

let fullSourceCode = '';
for (const f of filesToRead) {
    fullSourceCode += fs.readFileSync(f, 'utf8') + '\n';
}

const discardDir = path.join(process.cwd(), 'discarded', 'images'); // Assuming they are all mapped correctly
const fallbackDiscardDir = path.join(process.cwd(), 'discarded');

let restoreCount = 0;
for (const originalPath of originalFiles) {
    const baseName = path.basename(originalPath);
    // If the exact original filename is referenced anywhere in the source files (which includes imports like "../assets/hero-T Sign.webp")
    if (fullSourceCode.includes(baseName)) {
        
        const newName = safeNormalizeName(originalPath);
        
        let foundPath = null;
        if (fs.existsSync(path.join(discardDir, newName))) {
            foundPath = path.join(discardDir, newName);
        } else if (fs.existsSync(path.join(fallbackDiscardDir, newName))) {
            foundPath = path.join(fallbackDiscardDir, newName);
        } else {
            // Might have counter like _1.webp
            // Let's just find any file matching the name prefix
            const possibleDirs = [discardDir, fallbackDiscardDir];
            for (const dir of possibleDirs) {
                if (fs.existsSync(dir)) {
                    for (const f of fs.readdirSync(dir)) {
                        if (f.startsWith(path.basename(newName, path.extname(newName)))) {
                            foundPath = path.join(dir, f);
                            break;
                        }
                    }
                }
                if (foundPath) break;
            }
        }
        
        if (foundPath) {
            // Ensure the directory exists
            const destDir = path.dirname(originalPath);
            if (!fs.existsSync(destDir)) {
                fs.mkdirSync(destDir, { recursive: true });
            }
            fs.copyFileSync(foundPath, originalPath);
            fs.unlinkSync(foundPath);
            console.log(`RESTORED: ${baseName}`);
            restoreCount++;
        }
    }
}
console.log(`\nSuccessfully restored ${restoreCount} images that were referenced in code.`);
