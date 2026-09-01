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
 * --flat is the ground-tile exception. A flat-quad tile's plate is not a photo of
 * an object at all: it is the seamless top-down texture the whole prop reads out
 * of, so it fills 100% of the frame, has no backdrop to measure and never goes
 * to Meshy. Every gate above is therefore meaningless on one -- coverage, the
 * border ring, the contact-shadow band and the connected components would each
 * reject a perfect texture -- and the contract that actually matters is the
 * WRAP. So flat mode replaces the object gates with a seam measurement and, for
 * the same reason, never crops: any crop of a tiling image destroys the tiling.
 *
 * Usage:
 *   node scripts/prepare-image.mjs --in raw.png --out packages/props/src/models/<id>/preview.jpg
 *   node scripts/prepare-image.mjs --in raw.png --out packages/props/src/models/<id>/preview.jpg --flat
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
    // How much of the FRAME the object's bounding box spans, on its longer
    // axis. Area alone cannot tell "drawn too small" from "tall and thin":
    // a sign plate on a post fills the height as asked and still covers under
    // 15% of the pixels, and so does a tapering stupa or a dog lying flat.
    bboxSpan: maxX < 0 ? 0 : Math.max((maxX - minX + 1) / width, (maxY - minY + 1) / height),
    backgroundMeanLuma: +bgMean.toFixed(1),
    backgroundStdev: +Math.sqrt(Math.max(0, bgVar)).toFixed(1),
    contactShadowPct: (darkBottom / (width * (height - bandStart))) * 100,
  };
}

/**
 * How badly a texture fails to wrap, measured two ways, because there are two
 * different failures and only one of them can be repaired.
 *
 * STRUCTURAL is whether the content lines up: do the courses, joints and stones
 * running off one edge arrive on the other? It is measured between BANDS of
 * `band` lines at each edge rather than between the outermost pair, so a tone
 * step at the boundary cannot masquerade as a layout that does not meet. Nothing
 * repairs a structural miss -- the tile has to be regenerated.
 *
 * EDGE is the outermost line pair alone. patina's tiling is structurally sound
 * and pixel-imperfect: the pilot paver tile wrapped its courses cleanly and
 * still carried a hard one-pixel tone line down the join, which is a visible
 * grid across a paved area. That one is healed in post, the way the panorama
 * wrap seam is (see the sky notes in CLAUDE.md).
 *
 * Both are scored against a FLOOR measured the same way between interior lines
 * of the same image, never against a constant: cobble and smooth concrete differ
 * tenfold in ordinary adjacent-pixel detail, so a fixed threshold means nothing.
 *
 * The two axes are measured separately and must stay so. The first version
 * inferred the axis from the sample count, which on a square plate -- every one
 * of these is square -- measured the same axis twice and reported one number
 * under two names, so a tile that wrapped one way and not the other passed.
 */
async function measureWrap(buffer, band = 8) {
  const { data, info } = await sharp(buffer).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const at = (x, y, c) => data[(y * width + x) * channels + c];

  const colBand = (x0) => {
    const out = new Float64Array(height * 3);
    for (let y = 0; y < height; y++) {
      for (let c = 0; c < 3; c++) {
        let sum = 0;
        for (let k = 0; k < band; k++) sum += at(x0 + k, y, c);
        out[y * 3 + c] = sum / band;
      }
    }
    return out;
  };
  const rowBand = (y0) => {
    const out = new Float64Array(width * 3);
    for (let x = 0; x < width; x++) {
      for (let c = 0; c < 3; c++) {
        let sum = 0;
        for (let k = 0; k < band; k++) sum += at(x, y0 + k, c);
        out[x * 3 + c] = sum / band;
      }
    }
    return out;
  };
  const bandDiff = (a, b) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) sum += Math.abs(a[i] - b[i]);
    return sum / a.length;
  };
  const lineDiff = (get, a, b) => {
    let sum = 0;
    let n = 0;
    const span = get === colLine ? height : width;
    for (let i = 0; i < span; i++) {
      for (let c = 0; c < 3; c++) {
        sum += Math.abs(get(a, i, c) - get(b, i, c));
        n++;
      }
    }
    return sum / n;
  };
  function colLine(x, i, c) { return at(x, i, c); }
  function rowLine(y, i, c) { return at(i, y, c); }

  // Interior samples spread across the frame: one pair can land in a flat region
  // and report a floor of nothing, which then fails every texture measured
  // against it.
  const median = (xs) => { xs.sort((a, b) => a - b); return xs[Math.floor(xs.length / 2)] ?? 0; };
  const spread = (span, f) => {
    const out = [];
    for (let k = 1; k <= 8; k++) {
      const i = Math.round((span * k) / 9);
      if (i > band && i < span - 2 * band) out.push(f(i));
    }
    return median(out);
  };

  return {
    width,
    height,
    band,
    borderSpread: +estimateBackdrop(data, width, height, channels).spread.toFixed(1),

    hStructural: +bandDiff(colBand(0), colBand(width - band)).toFixed(2),
    hStructuralFloor: +spread(width, (i) => bandDiff(colBand(i - band), colBand(i))).toFixed(2),
    vStructural: +bandDiff(rowBand(0), rowBand(height - band)).toFixed(2),
    vStructuralFloor: +spread(height, (i) => bandDiff(rowBand(i - band), rowBand(i))).toFixed(2),

    hEdge: +lineDiff(colLine, 0, width - 1).toFixed(2),
    hEdgeFloor: +spread(width, (i) => lineDiff(colLine, i, i + 1)).toFixed(2),
    vEdge: +lineDiff(rowLine, 0, height - 1).toFixed(2),
    vEdgeFloor: +spread(height, (i) => lineDiff(rowLine, i, i + 1)).toFixed(2),
  };
}

/**
 * Pull the two opposite edges of a near-wrapping texture onto each other.
 *
 * Half the edge-to-edge difference is subtracted from one side and added to the
 * other, decaying linearly inward over `k` pixels, so the outermost lines land
 * on their shared midpoint and the correction is gone by the time it is `k`
 * pixels in. The strength is HIGHEST at the outermost line and decays inward --
 * inverted, it leaves the seam exactly as it was, which is the mistake the sky
 * pipeline already paid for once.
 *
 * This is a tone repair, not a layout repair: it removes a one-pixel step and
 * cannot make content that does not line up line up, which is why the structural
 * gate runs on the ORIGINAL and this runs afterwards.
 */
function healSeams(data, width, height, channels, k) {
  const idx = (x, y) => (y * width + x) * channels;
  const clamp = (v) => (v < 0 ? 0 : v > 255 ? 255 : v);

  for (let y = 0; y < height; y++) {
    for (let c = 0; c < 3; c++) {
      const d = (data[idx(0, y) + c] - data[idx(width - 1, y) + c]) / 2;
      for (let i = 0; i < k; i++) {
        const w = 1 - i / k;
        data[idx(i, y) + c] = clamp(Math.round(data[idx(i, y) + c] - d * w));
        data[idx(width - 1 - i, y) + c] = clamp(Math.round(data[idx(width - 1 - i, y) + c] + d * w));
      }
    }
  }
  for (let x = 0; x < width; x++) {
    for (let c = 0; c < 3; c++) {
      const d = (data[idx(x, 0) + c] - data[idx(x, height - 1) + c]) / 2;
      for (let i = 0; i < k; i++) {
        const w = 1 - i / k;
        data[idx(x, i) + c] = clamp(Math.round(data[idx(x, i) + c] - d * w));
        data[idx(x, height - 1 - i) + c] = clamp(Math.round(data[idx(x, height - 1 - i) + c] + d * w));
      }
    }
  }
  return data;
}

/**
 * Normalise a seamless ground-tile texture: gate the wrap, heal the join, resize
 * the WHOLE frame, write it. There is nothing to recentre and nothing to pad --
 * the plate already is the prop.
 */
export async function prepareTexture({ inPath, outPath, size = 1024, seamRatio = 2.5, heal = 24 }) {
  const source = await fs.readFile(inPath);
  const stats = await measureWrap(source);

  const rejections = [];
  if (stats.width !== stats.height) {
    rejections.push(
      `the plate is ${stats.width}x${stats.height}, not square - a ground tile is square ` +
        'and cannot be cropped to fit without destroying the wrap',
    );
  }
  // A product plate's border ring is FLAT -- that is what makes it a backdrop --
  // and a flat backdrop wraps against itself perfectly. Without this, a hero
  // plate of an object floating on grey sails through every seam test below.
  if (stats.borderSpread < 8) {
    rejections.push(
      `the frame border is a flat matte (spread ${stats.borderSpread}) - this is a product ` +
        'plate of an object floating on a backdrop, not a top-down ground texture',
    );
  }
  for (const [axis, seam, floor] of [
    ['left/right', stats.hStructural, stats.hStructuralFloor],
    ['top/bottom', stats.vStructural, stats.vStructuralFloor],
  ]) {
    // The +1 keeps a near-flat texture (smooth concrete, whose floor rounds to
    // well under 1) from failing on rounding alone.
    if (seam > floor * seamRatio + 1) {
      rejections.push(
        `the ${axis} edges do not line up: band seam ${seam} against an interior floor of ` +
          `${floor} - the layout does not continue across the join, which no seam repair fixes`,
      );
    }
  }

  const accepted = rejections.length === 0;
  if (!accepted) return { accepted, rejections, stats, file: null };

  const ext = path.extname(outPath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    throw new Error(`output must be .jpg, .jpeg or .png, not "${ext}"`);
  }

  // Resize FIRST, then heal, so the healed pixels are the ones that ship: a
  // resample after healing reintroduces the step it just removed.
  const resized = await sharp(source)
    .resize(size, size, { fit: 'fill' })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const healed = healSeams(resized.data, size, size, resized.info.channels, heal);

  await fs.mkdir(path.dirname(outPath), { recursive: true });
  const pipeline = sharp(healed, {
    raw: { width: size, height: size, channels: resized.info.channels },
  });
  await (ext === '.png'
    ? pipeline.png({ compressionLevel: 9 })
    : pipeline.jpeg({ quality: 94, mozjpeg: true })
  ).toFile(outPath);

  const after = await measureWrap(await fs.readFile(outPath));
  return {
    accepted,
    rejections,
    stats,
    healedEdge: { h: after.hEdge, v: after.vEdge, hFloor: after.hEdgeFloor, vFloor: after.vEdgeFloor },
    file: outPath,
    w: size,
    h: size,
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
  // Low area is only "too small" when the object also fails to span the frame.
  // A high-aspect silhouette is framed correctly at a fraction of the area, so
  // the span is what decides; the 3% floor below still catches a genuinely
  // tiny object, or one so thin there is nothing for Meshy to reconstruct.
  if (stats.coveragePct < 15 && stats.bboxSpan < 0.55) {
    rejections.push(
      `the object fills only ${stats.coveragePct.toFixed(1)}% of the frame ` +
        `and spans only ${(stats.bboxSpan * 100).toFixed(0)}% of it`,
    );
  } else if (stats.coveragePct < 3) {
    rejections.push(
      `the object fills only ${stats.coveragePct.toFixed(1)}% of the frame - too thin to reconstruct`,
    );
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

  const flat = args.flat === true || args.flat === 'true';
  const result = flat
    ? await prepareTexture({ inPath: args.in, outPath: args.out })
    : await prepareImage({ inPath: args.in, outPath: args.out });

  if (result.accepted) {
    log(`accepted: ${result.w}x${result.h} written to ${result.file}`);
    if (flat) {
      const s = result.stats;
      log(
        `  layout : left/right ${s.hStructural} (floor ${s.hStructuralFloor}), ` +
          `top/bottom ${s.vStructural} (floor ${s.vStructuralFloor})`,
      );
      log(
        `  join   : left/right ${s.hEdge} -> ${result.healedEdge.h} (floor ${result.healedEdge.hFloor}), ` +
          `top/bottom ${s.vEdge} -> ${result.healedEdge.v} (floor ${result.healedEdge.vFloor})`,
      );
    }
  } else {
    log(flat ? 'TEXTURE REJECTED:' : 'IMAGE REJECTED:');
    for (const r of result.rejections) log(`  - ${r}`);
    log('Regenerate with a new seed. After two rejections, simplify the prompt.');
  }
  return ok(result);
}

if (import.meta.url === `file://${process.argv[1]}`) main().catch(fail);
