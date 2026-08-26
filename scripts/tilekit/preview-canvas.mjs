/** Render a canvas spec to a PNG so the generated albedo can be SEEN, instead of being
 *  inferred from a render of the model that uses it. */
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
const [, , specPath, idx, out] = process.argv;
const spec = JSON.parse(readFileSync(specPath, 'utf8')).canvases[Number(idx ?? 0)];
const PX = spec.px ?? 512;
const PY = spec.pxH ?? Math.max(8, Math.round(PX * (spec.depth / spec.width)));
const ux = (x) => ((x + spec.width / 2) / spec.width) * PX;
const vz = spec.flipY ? (z) => (1 - (z + spec.depth / 2) / spec.depth) * PY
                      : (z) => ((z + spec.depth / 2) / spec.depth) * PY;
const parts = [`<rect width="${PX}" height="${PY}" fill="${spec.base}"/>`];
for (const b of [...(spec.bands ?? []), ...(spec.dashes ?? [])])
  parts.push(`<rect x="${ux(b.x0)}" y="${Math.min(vz(b.z0), vz(b.z1))}" width="${ux(b.x1)-ux(b.x0)}" height="${Math.abs(vz(b.z1)-vz(b.z0))}" fill="${b.color}"/>`);
for (const t of spec.texts ?? []) {
  const px = Math.max(6, (t.size / spec.depth) * PY);
  parts.push(`<text x="${ux(t.x)}" y="${vz(t.z)}" fill="${t.color}" font-size="${px}" font-weight="${t.weight ?? 700}" font-family="Helvetica,Arial,sans-serif" text-anchor="${t.align === 'left' ? 'start' : 'middle'}" dominant-baseline="middle">${t.text}</text>`);
}
await sharp(Buffer.from(`<svg width="${PX}" height="${PY}">${parts.join('')}</svg>`)).png().toFile(out);
console.log(`wrote ${out}  ${PX}x${PY}  flipY=${!!spec.flipY}`);
