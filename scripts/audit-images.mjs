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
      results = results.concat(getFiles(fullPath, exts));
    } else {
      const ext = path.extname(fullPath).toLowerCase().slice(1);
      if (!exts || exts.includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const imageExts = ['png', 'jpg', 'jpeg', 'webp', 'svg', 'gif'];
const srcImages = getFiles(path.join(process.cwd(), 'src'), imageExts);
const publicImages = getFiles(path.join(process.cwd(), 'public'), imageExts);

const distImgDir = path.join(process.cwd(), 'dist', 'assets', 'images');
const distImages = fs.existsSync(distImgDir) ? getFiles(distImgDir, imageExts) : [];
const builtImageNames = distImages.map(f => path.basename(f));

const srcUnused = [];
for (const srcImg of srcImages) {
    const ext = path.extname(srcImg);
    const base = path.basename(srcImg, ext);
    const escapedBase = base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`^${escapedBase}-[a-zA-Z0-9_-]+${ext}$`);
    let found = false;
    for (const builtName of builtImageNames) {
        if (regex.test(builtName) || builtName === base + ext) {
            found = true;
            break;
        }
    }
    if (!found) {
        srcUnused.push(srcImg);
    }
}

const distDir = path.join(process.cwd(), 'dist');
const allDistFiles = getFiles(distDir, ['js', 'css', 'html']);
let distContent = '';
for (const f of allDistFiles) {
    distContent += fs.readFileSync(f, 'utf8') + '\n';
}

const publicUnused = [];
for (const pubImg of publicImages) {
    const relativePath = path.relative(path.join(process.cwd(), 'public'), pubImg).replace(/\\/g, '/');
    const baseNameUrlEncoded = encodeURIComponent(path.basename(pubImg));
    
    const isMatched = distContent.includes(relativePath) 
                    || distContent.includes(`/${relativePath}`)
                    || distContent.includes(path.basename(pubImg))
                    || distContent.includes(baseNameUrlEncoded);
    if (!isMatched) {
        publicUnused.push(pubImg);
    }
}

let report = `# Unused Images Report\n\n`;
report += `This report lists all images that are not referenced in the final production bundle. This means they are either never imported, or only imported by unused components.\n\n`;
report += `## In \`src/assets/\` (${srcUnused.length} unused images found)\n`;
srcUnused.forEach(img => {
    let rel = path.relative(process.cwd(), img).replace(/\\/g, '/');
    report += `- \`${rel}\`\n`;
});

report += `\n## In \`public/\` (${publicUnused.length} unused images found)\n`;
publicUnused.forEach(img => {
    let rel = path.relative(process.cwd(), img).replace(/\\/g, '/');
    report += `- \`${rel}\`\n`;
});

fs.writeFileSync(path.join('d:/whatnextstudio/tesseractApps', 'unused_images_report.md'), report);
console.log('Report written to unused_images_report.md');
