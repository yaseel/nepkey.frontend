const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const iconsDir = path.join(projectRoot, 'public', 'icons');
const outputFile = path.join(projectRoot, 'public', 'icons.svg');

if (!fs.existsSync(iconsDir)) {
  console.error(`Icons directory not found: ${iconsDir}`);
  process.exit(1);
}

const files = fs.readdirSync(iconsDir)
  .filter((f) => f.endsWith('.svg'))
  .sort();

if (files.length === 0) {
  console.error(`No SVG files found in: ${iconsDir}`);
  process.exit(1);
}

const symbols = files.map((file) => {
  const key = path.basename(file, '.svg');
  let svg = fs.readFileSync(path.join(iconsDir, file), 'utf8').trim();

  const viewBoxMatch = svg.match(/viewBox="([^"]+)"/i);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  svg = svg.replace(/^<\?xml[^>]*>\s*/i, '');
  svg = svg.replace(/^<svg[^>]*>/i, '').replace(/<\/svg>\s*$/i, '').trim();

  return `<symbol id="${key}" viewBox="${viewBox}">${svg}</symbol>`;
});

const sprite = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">\n${symbols.join('\n')}\n</svg>\n`;

fs.writeFileSync(outputFile, sprite);
console.log(`Generated ${outputFile} with ${files.length} icons.`);
