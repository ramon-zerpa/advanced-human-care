import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

// Preserve the source logo. SVG isolates its gold emblem and renders it white.
const logo = (await readFile('brand/reference/advanced-human-care-logo-original.png')).toString('base64');
const definitions = `<defs>
    <filter id="white-emblem" color-interpolation-filters="sRGB">
      <feColorMatrix in="SourceGraphic" result="white" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  8 -8 0 0 0"/>
      <feComposite in="white" in2="SourceAlpha" operator="in"/>
    </filter>
    <clipPath id="symbol-only"><rect width="74" height="95"/></clipPath>
  </defs>`;
// Fit the actual visible emblem, rather than the original logo's empty canvas.
const mask = `<svg xmlns="http://www.w3.org/2000/svg" width="215" height="95">${definitions}<g clip-path="url(#symbol-only)"><image width="215" height="95" href="data:image/png;base64,${logo}" filter="url(#white-emblem)"/></g></svg>`;
const { data, info } = await sharp(Buffer.from(mask)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
let left = info.width, top = info.height, right = -1, bottom = -1;
for (let y = 0; y < info.height; y++) {
  for (let x = 0; x < info.width; x++) {
    if (data[(y * info.width + x) * 4 + 3] < 16) continue;
    left = Math.min(left, x); right = Math.max(right, x);
    top = Math.min(top, y); bottom = Math.max(bottom, y);
  }
}
if (right < left) throw new Error('No visible emblem found in source logo.');
const scale = Math.min(112 / (right - left + 1), 112 / (bottom - top + 1));
const tx = 64 - scale * (left + right + 1) / 2;
const ty = 64 - scale * (top + bottom + 1) / 2;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
  ${definitions}
  <rect width="128" height="128" rx="22" fill="#174A3A"/>
  <g transform="translate(${tx.toFixed(4)} ${ty.toFixed(4)}) scale(${scale.toFixed(4)})" clip-path="url(#symbol-only)">
    <image width="215" height="95" href="data:image/png;base64,${logo}" filter="url(#white-emblem)"/>
  </g>
</svg>`;
await writeFile('public/favicon.svg', svg);
await sharp(Buffer.from(svg)).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(Buffer.from(svg)).resize(180, 180).png().toFile('public/apple-touch-icon.png');
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(size => sharp(Buffer.from(svg)).resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  header[entry] = header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile('public/favicon.ico', Buffer.concat([header, ...images]));
console.log('Created SVG, 32px PNG, 16/32/48px ICO and 180px Apple icon from the original symbol.');
