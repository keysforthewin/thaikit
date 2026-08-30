#!/usr/bin/env node
/**
 * Measure a baked lightmap atlas. One JSON line on stdout, a readable table on
 * stderr.
 *
 * Every change to the bake is accepted or rejected by a number from this tool
 * rather than by eye, because the bake's defects push in opposite directions --
 * hiding the double-counted lights DARKENS the atlas, feeding it the real sky
 * BRIGHTENS it -- so a side-by-side render of the whole stack tells you nothing
 * about either step.
 *
 * What the numbers mean:
 *   coverage   fraction of texels an island actually landed on. The rest is
 *              gutter. A big drop means the pack changed, not the lighting.
 *   p50/p99/p999/max   per channel, in LINEAR light (the PNG is sRGB-encoded,
 *              written through Blender's 'Standard' view transform).
 *   clipRate   fraction of covered texels pinned at full scale. This is the
 *              number that says whether the LDR clamp is destroying bounce.
 *   alpha      10-bin histogram of the moon-visibility mask over covered
 *              texels. A correct mask is BIMODAL -- lit or shadowed, with a
 *              narrow penumbra. A smear across the middle bins is another
 *              light contaminating the SHADOW pass.
 *
 * Usage:
 *   node scripts/level/probe-lightmap.mjs --level <id> [--compare <png>]
 *   node scripts/level/probe-lightmap.mjs --file <png> [--compare <png>]
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

import { levelDir } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from '../lib/out.mjs';

const srgbToLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);

/** Read an RGBA lightmap as floats in 0..1, at whatever bit depth it carries. */
export async function readAtlas(file) {
  const meta = await sharp(file, { unlimited: true }).metadata();
  const deep = meta.depth === 'ushort' || meta.depth === 'short';
  const depth = deep ? 'ushort' : 'uchar';
  // `raw({ depth: 'ushort' })` alone gives you a ushort BUFFER holding values
  // libvips has already squashed into 0..255 -- Blender's 40000 comes back as
  // 156. Only an explicit `toColourspace('rgb16')` keeps the pipeline 16-bit,
  // and without it every number this tool prints is quantised to a byte.
  let img = sharp(file, { unlimited: true }).ensureAlpha();
  if (deep) img = img.toColourspace('rgb16');
  const { data, info } = await img.raw({ depth }).toBuffer({ resolveWithObject: true });
  const scale = depth === 'ushort' ? 65535 : 255;
  const raw = depth === 'ushort'
    ? new Uint16Array(data.buffer, data.byteOffset, data.byteLength / 2)
    : new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  const n = info.width * info.height;
  const px = new Float32Array(n * 4);
  for (let i = 0; i < n * 4; i++) px[i] = raw[i] / scale;
  return { px, n, width: info.width, height: info.height, depth, scale, bits: raw };
}

const quantile = (sorted, q) => {
  if (!sorted.length) return 0;
  const i = Math.min(sorted.length - 1, Math.max(0, Math.round(q * (sorted.length - 1))));
  return sorted[i];
};

const r3 = (x) => Number(x.toFixed(3));
const r4 = (x) => Number(x.toFixed(4));

export function statsOf(atlas) {
  const { px, n, bits, scale } = atlas;
  // "Covered" is any texel an island wrote colour to. Alpha alone will not do:
  // a fully shadowed texel has alpha 0 and is still part of the bake.
  const covered = [];
  for (let i = 0; i < n; i++) {
    const o = i * 4;
    if (px[o] > 0 || px[o + 1] > 0 || px[o + 2] > 0) covered.push(i);
  }
  const channels = {};
  let clipped = 0;
  for (const [ci, name] of [[0, 'r'], [1, 'g'], [2, 'b']]) {
    const lin = new Float64Array(covered.length);
    for (let k = 0; k < covered.length; k++) lin[k] = srgbToLinear(px[covered[k] * 4 + ci]);
    const sorted = Float64Array.from(lin).sort();
    channels[name] = {
      p50: r4(quantile(sorted, 0.5)),
      p99: r4(quantile(sorted, 0.99)),
      p999: r4(quantile(sorted, 0.999)),
      max: r4(sorted.length ? sorted[sorted.length - 1] : 0),
      mean: r4(lin.reduce((a, b) => a + b, 0) / (lin.length || 1)),
    };
  }
  for (const i of covered) {
    const o = i * 4;
    if (bits[o] >= scale || bits[o + 1] >= scale || bits[o + 2] >= scale) clipped++;
  }
  const alpha = new Array(10).fill(0);
  for (const i of covered) alpha[Math.min(9, Math.floor(px[i * 4 + 3] * 10))]++;
  const alphaFrac = alpha.map((c) => r4(c / (covered.length || 1)));
  // The moon's penumbra. Bins 2..7 are neither lit nor shadowed; with a 1.5
  // degree sun that band should be thin. Wide means something else is in the
  // SHADOW pass.
  const penumbra = r4(alphaFrac.slice(2, 8).reduce((a, b) => a + b, 0));

  return {
    size: `${atlas.width}x${atlas.height}`,
    depth: atlas.depth,
    coverage: r4(covered.length / n),
    coveredTexels: covered.length,
    channels,
    clipRate: r4(clipped / (covered.length || 1)),
    alpha: alphaFrac,
    penumbra,
  };
}

export function diffOf(a, b) {
  if (a.n !== b.n) return { error: `size mismatch: ${a.width}x${a.height} vs ${b.width}x${b.height}` };
  const abs = [];
  const per = {};
  for (const [ci, name] of [[0, 'r'], [1, 'g'], [2, 'b'], [3, 'a']]) {
    let sum = 0;
    let sumA = 0;
    let sumB = 0;
    const d = new Float64Array(a.n);
    for (let i = 0; i < a.n; i++) {
      const x = a.px[i * 4 + ci];
      const y = b.px[i * 4 + ci];
      d[i] = Math.abs(x - y);
      sum += d[i];
      sumA += x;
      sumB += y;
    }
    const sorted = Float64Array.from(d).sort();
    per[name] = {
      meanAbs: r4(sum / a.n),
      p99: r4(quantile(sorted, 0.99)),
      max: r4(sorted[sorted.length - 1]),
      // >1 means the NEW atlas is brighter than the one compared against.
      ratio: sumB > 0 ? r3(sumA / sumB) : null,
    };
    if (ci < 3) abs.push(sum / a.n);
  }
  return { perChannel: per, rgbMeanAbs: r4(abs.reduce((x, y) => x + y, 0) / 3) };
}

async function main() {
  const args = parseArgs();
  const file = args.file
    ? String(args.file)
    : args.level
      ? path.join(levelDir(String(args.level)), 'build', 'lightmap', 'lightmap.png')
      : null;
  if (!file) return fail('need --level <id> or --file <png>');

  const atlas = await readAtlas(file);
  const report = statsOf(atlas);
  report.file = file;

  if (args.compare) {
    const other = await readAtlas(String(args.compare));
    report.compare = { file: String(args.compare), ...diffOf(atlas, other) };
  }

  log(`${report.file}`);
  log(`  ${report.size} ${report.depth}  coverage ${report.coverage}  (${report.coveredTexels} texels)`);
  for (const [name, c] of Object.entries(report.channels)) {
    log(`  ${name}  p50 ${c.p50}  p99 ${c.p99}  p99.9 ${c.p999}  max ${c.max}  mean ${c.mean}`);
  }
  log(`  clip rate ${report.clipRate}${report.clipRate > 0 ? '   <- bounce is being destroyed' : ''}`);
  log(`  alpha     ${report.alpha.join(' ')}`);
  log(`  penumbra  ${report.penumbra} of covered texels in bins 2..7`);
  if (report.compare) {
    if (report.compare.error) log(`  compare: ${report.compare.error}`);
    else {
      log(`  vs ${report.compare.file}`);
      log(`    rgb mean|delta| ${report.compare.rgbMeanAbs}`);
      for (const [name, d] of Object.entries(report.compare.perChannel)) {
        log(`    ${name}  mean ${d.meanAbs}  p99 ${d.p99}  max ${d.max}  ratio new/old ${d.ratio}`);
      }
    }
  }

  ok(report);
}

// Importable for tests; only runs when invoked as a script.
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((err) => fail(err));
}
