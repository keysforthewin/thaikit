#!/usr/bin/env node
/**
 * Validate and normalise a generated reference image, and refuse the ones that
 * would melt a reconstruction.
 *
 * The validation is the point. Meshy reconstructs a single image assuming it
 * shows one rigid object cut out of empty space; an image with a second prop in
 * frame, a scene behind the object, or a contact shadow under it produces
 * smeared geometry and a dark smear baked permanently into the albedo. Cheaper
 * to reject a third-of-a-cent image than to spend a mesh generation finding out.
 *
 * What comes out is always the same shape: a 1024x1024 image, the object centred
 * with an even margin on its own measured backdrop. The encoder follows the
 * output extension, and .jpg is the default the kit ships: these are photographs,
 * so JPEG is 16x smaller than PNG for no difference a reconstruction can see, and
 * 150 props at 1.6 MB each is a quarter of a gigabyte in git. WebP is refused --
 * Meshy's image-to-3d rejects it outright with image_load_error.
 *
 * Usage:
 *   node scripts/prepare-image.mjs --in raw.png --out assets/<id>/preview.jpg
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';

import { ok, fail, log, parseArgs } from './lib/out.mjs';

/**
 * The backdrop's actual colour, measured from a ring of border pixels.
 *
 * Measured, never assumed. The profile asks for 50% grey; a cheap fast model
 * obliges only sometimes, and hands back a white product-shot matte just as
 * readily. Comparing against a hard-coded 128 then classifies the entire white
 * frame as foreground and every number below silently becomes garbage that reads
 * as "the object fills 99% of the frame". Any plain backdrop reconstructs fine,
 * so the colour is measured and normalised rather than demanded.
 *
 * `spread` is what makes the median trustworthy: the object is centred and does
 * not reach the frame edge, so a ring that is NOT uniform means either the object
 * runs off frame or there is a scene back there, and the caller rejects on it.
 */
function estimateBackdrop(data, width, height, channels) {
  const ring = Math.max(2, Math.round(Math.min(width, height) * 0.02));
  const samples = [[], [], []];
  const lumas = [];
  const push = (x, y) => {
    const i = (y * width + x) * channels;
    samples[0].push(data[i]);
    samples[1].push(data[i + 1]);
    samples[2].push(data[i + 2]);
    lumas.push(0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]);
  };
  for (let y = 0; y < height; y++) {
    const edgeRow = y < ring || y >= height - ring;
    for (let x = 0; x < width; x++) {
      if (edgeRow || x < ring || x >= width - ring) push(x, y);
    }
  }
  const colour = samples.map((ch) => {
    ch.sort((a, b) => a - b);
    return ch[Math.floor(ch.length / 2)] ?? 128;
  });
  const mean = lumas.reduce((a, b) => a + b, 0) / (lumas.length || 1);
  const variance = lumas.reduce((a, b) => a + (b - mean) ** 2, 0) / (lumas.length || 1);
  return { colour, spread: Math.sqrt(variance) };
}

/** Foreground mask stats for the image, measured against its own backdrop. */
async function inspect(buffer) {
  const { data, info } = await sharp(buffer).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const backdrop = estimateBackdrop(data, width, height, channels);
  const [bgR, bgG, bgB] = backdrop.colour;
  const bgLuma = 0.2126 * bgR + 0.7152 * bgG + 0.0722 * bgB;

  // The threshold follows the backdrop's own unevenness. Studio backdrops come
  // back with a soft vignette however hard the prompt argues against one, and a
  // fixed +-26 then labels the four darkened corners as foreground: three extra
  // "objects", a bbox spanning the whole frame, and a perfectly good plate
  // rejected. Three sigma clears the vignette; the ceiling stops a genuinely
  // busy border from dissolving the object along with it.
  const tolerance = Math.min(60, Math.max(26, backdrop.spread * 3));

  const mask = new Uint8Array(width * height);
  let fg = 0;
  let minX = width, maxX = -1, minY = height, maxY = -1;
  let bgSum = 0, bgCount = 0, bgSqSum = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const r = data[i], g = data[i + 1], b = data[i + 2];
      const isBg =
        Math.abs(r - bgR) < tolerance &&
        Math.abs(g - bgG) < tolerance &&
        Math.abs(b - bgB) < tolerance;
      if (isBg) {
        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        bgSum += luma;
        bgSqSum += luma * luma;
        bgCount++;
      } else {
        mask[y * width + x] = 1;
        fg++;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // Connected components, so a second object in frame is caught.
  const labels = new Int32Array(width * height).fill(-1);
  const sizes = [];
  const stack = [];
  for (let s = 0; s < mask.length; s++) {
    if (!mask[s] || labels[s] !== -1) continue;
    const id = sizes.length;
    let size = 0;
    stack.push(s);
    labels[s] = id;
    while (stack.length) {
      const p = stack.pop();
      size++;
      const px = p % width;
      const py = (p / width) | 0;
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = px + dx;
        const ny = py + dy;
        if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
        const n = ny * width + nx;
        if (mask[n] && labels[n] === -1) {
          labels[n] = id;
          stack.push(n);
        }
      }
    }
    sizes.push(size);
  }

  const area = width * height;
  const bgMean = bgCount ? bgSum / bgCount : 0;
  const bgVar = bgCount ? bgSqSum / bgCount - bgMean * bgMean : 0;

  // A dark band along the bottom is a contact shadow, which bakes into geometry.
  let darkBottom = 0;
  const bandStart = Math.floor(height * 0.95);
  for (let y = bandStart; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * channels;
      const luma = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
      // Relative to the measured backdrop, not an assumed one -- otherwise a
      // light-grey plate reads as one enormous contact shadow.
      if (luma < bgLuma - 40) darkBottom++;
    }
  }

  return {
    width,
    height,
    backdrop: { r: bgR, g: bgG, b: bgB },
    tolerance: Math.round(tolerance),
    backdropSpread: +backdrop.spread.toFixed(1),
    coveragePct: (fg / area) * 100,
    components: sizes.filter((s) => s > area * 0.005).length,
    largestComponentPct: sizes.length ? (Math.max(...sizes) / area) * 100 : 0,
    bbox: maxX < 0 ? null : { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 },
    backgroundMeanLuma: +bgMean.toFixed(1),
    backgroundStdev: +Math.sqrt(Math.max(0, bgVar)).toFixed(1),
    contactShadowPct: (darkBottom / (width * (height - bandStart))) * 100,
  };
}

export async function prepareImage({ inPath, outPath, padding = 0.08, size = 1024 }) {
  const source = await fs.readFile(inPath);
  const stats = await inspect(source);

  const rejections = [];
  if (stats.backdropSpread > 45) {
    rejections.push(
      `the frame border is not a plain backdrop (stdev ${stats.backdropSpread}) - ` +
        'the object runs off frame, or there is a scene behind it',
    );
  }
  if (stats.components === 0) rejections.push('the frame is empty - no object against the backdrop');
  if (stats.components > 1) {
    rejections.push(
      `${stats.components} separate objects in frame - Meshy fuses them into one lump`,
    );
  }
  if (stats.coveragePct < 15) {
    rejections.push(`the object fills only ${stats.coveragePct.toFixed(1)}% of the frame`);
  }
  if (stats.coveragePct > 75) {
    rejections.push(
      `the object fills ${stats.coveragePct.toFixed(1)}% of the frame - cropped or too close`,
    );
  }
  if (stats.backgroundStdev > 30) {
    rejections.push(
      `the backdrop is not flat (stdev ${stats.backgroundStdev}) - a scene crept in behind the object`,
    );
  }
  if (stats.contactShadowPct > 12) {
    rejections.push(
      `contact shadow along the bottom (${stats.contactShadowPct.toFixed(0)}%) - it will bake into the albedo`,
    );
  }

  const accepted = rejections.length === 0;
  if (!accepted) return { accepted, rejections, stats, file: null };

  // Recentre on the object's own bounding box with an even margin, so every
  // prop in the kit arrives at Meshy framed identically whatever the model did.
  const b = stats.bbox;
  const padX = Math.round(b.w * padding);
  const padY = Math.round(b.h * padding);
  const left = Math.max(0, b.x - padX);
  const top = Math.max(0, b.y - padY);
  const width = Math.min(stats.width - left, b.w + padX * 2);
  const height = Math.min(stats.height - top, b.h + padY * 2);

  const ext = path.extname(outPath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    throw new Error(`output must be .jpg, .jpeg or .png, not "${ext}" - Meshy reads only those`);
  }

  await fs.mkdir(path.dirname(outPath), { recursive: true });
  const pipeline = sharp(source)
    .extract({ left, top, width, height })
    .resize(size, size, {
      fit: 'contain',
      // Pad with the image's OWN backdrop, not a canonical grey: a grey band
      // around a white product shot is a hard edge Meshy reads as geometry.
      background: stats.backdrop,
    });
  await (ext === '.png'
    ? pipeline.png({ compressionLevel: 9 })
    : pipeline.jpeg({ quality: 92, mozjpeg: true })
  ).toFile(outPath);

  return { accepted, rejections, stats, file: outPath, w: size, h: size };
}

async function main() {
  const args = parseArgs();
  if (!args.in) throw new Error('pass --in <path>');
  if (!args.out) throw new Error('pass --out <path>');

  const result = await prepareImage({ inPath: args.in, outPath: args.out });

  if (result.accepted) {
    log(`accepted: ${result.w}x${result.h} written to ${result.file}`);
  } else {
    log('IMAGE REJECTED:');
    for (const r of result.rejections) log(`  - ${r}`);
    log('Regenerate with a new seed. After two rejections, simplify the prompt.');
  }
  return ok(result);
}

if (import.meta.url === `file://${process.argv[1]}`) main().catch(fail);
