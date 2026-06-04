import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svgPath = path.join(root, "src/assets/brand/favicon-mark.svg");
const svg = await fs.readFile(svgPath);

async function renderPng(size) {
  const kernel = size <= 16 ? sharp.kernel.nearest : sharp.kernel.lanczos3;
  return sharp(svg, { density: Math.max(96, size * 12) })
    .resize(size, size, { kernel })
    .png({ compressionLevel: 9, palette: size <= 48, effort: 10 })
    .toBuffer();
}

const faviconSizes = [16, 32, 48];
const faviconBuffers = [];
for (const size of faviconSizes) {
  faviconBuffers.push(await renderPng(size));
}
const ico = await toIco(faviconBuffers);

await fs.writeFile(path.join(root, "src/app/favicon.ico"), ico);
await fs.writeFile(path.join(root, "public/favicon.ico"), ico);

for (let i = 0; i < faviconSizes.length; i++) {
  await fs.writeFile(
    path.join(root, `public/icon-${faviconSizes[i]}.png`),
    faviconBuffers[i],
  );
}

const appIconSizes = [
  [180, "apple-icon.png"],
  [192, "icon-192.png"],
  [512, "icon-512.png"],
];

for (const [size, filename] of appIconSizes) {
  const buffer = await renderPng(size);
  await fs.writeFile(path.join(root, "public", filename), buffer);
}

await fs.writeFile(path.join(root, "public/icon.png"), faviconBuffers[2]);
await fs.copyFile(svgPath, path.join(root, "public/icon.svg"));
await fs.copyFile(svgPath, path.join(root, "src/app/icon.svg"));

console.log("Favicons gerados: 16, 32, 48, 180, 192, 512 + favicon.ico + icon.svg");
