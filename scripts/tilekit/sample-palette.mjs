/**
 * Sample a plate's actual colours in named regions.
 *
 * A material palette must be MEASURED off this asset's own plate, never inherited from a
 * sibling's spec. Two convenience stores share a structure; they do not share a green, and a
 * palette copied across nine buildings would put numbers in nine specs that nobody generated.
 *
 *   node scripts/tilekit/sample-palette.mjs <id> <name>=<x0,y0,x1,y1> ...   (0..1 normalised)
 */
import sharp from 'sharp';

const [, , id, ...regions] = process.argv;
const src = `packages/props/src/models/${id}/preview.jpg`;
const meta = await sharp(src).metadata();

const out = {};
for (const spec of regions) {
  const [name, box] = spec.split('=');
  const [x0, y0, x1, y1] = box.split(',').map(Number);
  const left = Math.round(x0 * meta.width), top = Math.round(y0 * meta.height);
  const width = Math.max(1, Math.round((x1 - x0) * meta.width));
  const height = Math.max(1, Math.round((y1 - y0) * meta.height));
  const { data, info } = await sharp(src).extract({ left, top, width, height })
    .raw().toBuffer({ resolveWithObject: true });
  const n = info.width * info.height;
  // Mean, plus the 10th/90th lightness percentiles: a lit surface's albedo is nearer the
  // upper end of its own distribution than its mean, because every crop pixel carries some
  // self-shading. Reporting the spread is what lets that judgement be made rather than guessed.
  let r = 0, g = 0, b = 0; const lum = [];
  for (let i = 0; i < n; i++) {
    const R = data[i * info.channels], G = data[i * info.channels + 1], B = data[i * info.channels + 2];
    r += R; g += G; b += B; lum.push(0.2126 * R + 0.7152 * G + 0.0722 * B);
  }
  lum.sort((a, b2) => a - b2);
  const hex = (v) => Math.round(v).toString(16).padStart(2, '0');
  out[name] = {
    px: n, mean: `#${hex(r / n)}${hex(g / n)}${hex(b / n)}`,
    lumaMean: +(lum.reduce((a, b2) => a + b2, 0) / n).toFixed(1),
    lumaP10: +lum[Math.floor(n * 0.1)].toFixed(1), lumaP90: +lum[Math.floor(n * 0.9)].toFixed(1),
    spread: +(lum[Math.floor(n * 0.9)] - lum[Math.floor(n * 0.1)]).toFixed(1),
  };
}
console.log(JSON.stringify(out, null, 1));
