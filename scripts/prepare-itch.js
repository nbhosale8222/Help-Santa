// Script to prepare the build for itch.io deployment
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import archiver from 'archiver';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '..', 'dist');
const zipPath = path.join(__dirname, '..', 'sql-quest-itch.zip');

console.log('📦 Preparing itch.io build...');

// Create zip file
const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', {
  zlib: { level: 9 } // Maximum compression
});

output.on('close', function() {
  console.log('✅ itch.io build ready!');
  console.log(`📁 File: sql-quest-itch.zip (${(archive.pointer() / 1024 / 1024).toFixed(2)} MB)`);
  console.log('\n🎮 Next steps:');
  console.log('1. Go to https://itch.io/game/new');
  console.log('2. Upload sql-quest-itch.zip');
  console.log('3. Check "This file will be played in the browser"');
  console.log('4. Set viewport: 1920 x 1080');
  console.log('5. Publish your game! 🎉');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// Add all files from dist folder
archive.directory(distPath, false);

archive.finalize();
