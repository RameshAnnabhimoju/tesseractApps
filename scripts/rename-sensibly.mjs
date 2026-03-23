import fs from 'fs';
import path from 'path';

const discardedImgDir = path.join(process.cwd(), 'discarded', 'images');

if (!fs.existsSync(discardedImgDir)) {
    console.error(`Directory not found: ${discardedImgDir}`);
    process.exit(1);
}

const files = fs.readdirSync(discardedImgDir);

const semanticRename = (filename) => {
    const ext = path.extname(filename).toLowerCase();
    let name = path.basename(filename, ext);

    // 1. Lowercase everything
    name = name.toLowerCase();

    // 2. Remove common nasty suffixes
    name = name.replace(/_removebg_preview|_removebg|_preview/g, '');
    name = name.replace(/_desktop_[a-z0-9]+/g, '');
    name = name.replace(/_\d{8,}$/, ''); // remove long trailing numbers like _12038376

    // 3. Handle specific prefixes
    if (name.startsWith('cover_page_for_')) {
        name = name.replace('cover_page_for_', '') + '_cover';
    }

    // 4. Space out CamelCase or words-with-numbers
    // blog5image1 -> blog_5_image_1
    name = name.replace(/([a-z])(\d+)/g, '$1_$2')
               .replace(/(\d+)([a-z])/g, '$1_$2');

    // 5. Replace dashes and spaces with underscores
    name = name.replace(/[- ]+/g, '_');

    // 6. Truncate extremely long SEO titles (e.g. beyond_compliance_how_...)
    const words = name.split('_');
    if (words.length > 7) {
        name = words.slice(0, 6).join('_'); // keep first 6 words to be nice and short
    }

    // 7. Cleanup multiple underscores
    name = name.replace(/_+/g, '_').replace(/^_|_$/g, '');

    return name + ext;
};

console.log(`\nRenaming images in ${discardedImgDir} sensibly...`);
let renameCount = 0;

for (const file of files) {
    const originalPath = path.join(discardedImgDir, file);
    if (!fs.statSync(originalPath).isFile()) continue;

    const newName = semanticRename(file);
    
    if (newName !== file) {
        let destPath = path.join(discardedImgDir, newName);
        let counter = 1;
        while(fs.existsSync(destPath) && destPath !== originalPath) {
            const ext = path.extname(newName);
            const nameNoExt = path.basename(newName, ext);
            destPath = path.join(discardedImgDir, `${nameNoExt}_${counter}${ext}`);
            counter++;
        }
        
        fs.renameSync(originalPath, destPath);
        console.log(`Renamed: ${file} -> ${path.basename(destPath)}`);
        renameCount++;
    }
}

console.log(`\nSuccessfully applied semantic renaming to ${renameCount} images.`);
