#!/usr/bin/env node
/**
 * Stitch N flat perspective plates into one equirectangular panorama.
 *
 * The plates are the only real pixels anyone generated: no text-to-image model
 * will draw an equirect (they return either a flat photograph or a mirrored
 * band), and the one true image-to-360 on fal caps out around 1920px, which is
 * 5.3 px/deg -- below what a 1080p screen at 60 degrees FOV can already show.
 * A plate is 6336px across its own sector, so N of them carry N x that around
 * the full circle and the projection is arithmetic rather than a guess.
 *
 * Each plate is treated as a rectilinear camera looking along its own bearing:
 *   dir = normalize(f + r * tan(hfov/2) * sx + u * tan(vfov/2) * sy)
 * inverted per equirect texel. `--pitch` tilts every camera UP, which is what
 * puts a skyline ABOVE the horizon: a plate shot level has its towers below the
 * centre row, and a backdrop that rings a level needs them above it.
 *
 * Joins are cross-faded over `--blend` degrees of azimuth, weighted by angular
 * distance from each plate's own centre, so a texel in an overlap is mostly the
 * plate that sees it straightest.
 *
 * Usage:
 *   node scripts/level/stitch-plates.mjs <p0.png> <p1.png> ... --out <equirect.png>
 *                     [--width 8192] [--hfov 95] [--pitch 15] [--blend 10]
 *                     [--hemisphere <sky.png>]
 *
 * `--pitch` and `--hfov` are not free: a rectilinear plate's bottom edge BOWS
 * UPWARD in an equirect, sitting at `pitch - atan(tanV * cos d)` at azimuth
 * offset `d`, so at a 4-plate join it is 6 degrees higher than at the plate's
 * centre. At hfov 90 / pitch 20 that put the join's bottom edge at +3.3
 * degrees -- ABOVE the horizon -- and each join wore a black wedge notch. The
 * pair has to satisfy `pitch - atan(tanV * cos(180/N)) <= 0` or the ring has
 * holes in it; 95/15 clears it by 3 degrees.
 */
import fs from 'node:fs/promises';
import sharp from 'sharp';

const args = process.argv.slice(2);
const opts = { out: null, hemisphere: null, width: 8192, hfov: 95, pitch: 15, blend: 10, plates: [] };
for (let i = 0; i < args.length; i += 1) {
  const a = args[i];
  if (a === '--out') opts.out = args[++i];
  else if (a === '--hemisphere') opts.hemisphere = args[++i];
  else if (a === '--width') opts.width = Number(args[++i]);
  else if (a === '--hfov') opts.hfov = Number(args[++i]);
  else if (a === '--pitch') opts.pitch = Number(args[++i]);
  else if (a === '--blend') opts.blend = Number(args[++i]);
  else if (!a.startsWith('-')) opts.plates.push(a);
}
if (!opts.out || !opts.plates.length) { console.error('usage: .sky-stitch.mjs <plates...> --out <file>'); process.exit(2); }

const RAD = Math.PI / 180;
const N = opts.plates.length;
const sectorRad = (2 * Math.PI) / N;
const hfovRad = opts.hfov * RAD;
const pitchRad = opts.pitch * RAD;

const plates = await Promise.all(opts.plates.map(async (f) => {
  const { data, info } = await sharp(f).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  return { data, w: info.width, h: info.height, channels: info.channels };
}));
const { w: pw, h: ph } = plates[0];
for (const p of plates) if (p.w !== pw || p.h !== ph) throw new Error('every plate must be the same size');

// A rectilinear frame's vertical half-angle follows from its aspect, not from a
// second parameter: the same focal length governs both axes.
const tanH = Math.tan(hfovRad / 2);
const tanV = tanH * (ph / pw);
console.error(`${N} plates, ${pw}x${ph}, hfov ${opts.hfov}deg -> vfov ${(2 * Math.atan(tanV) / RAD).toFixed(1)}deg, pitch +${opts.pitch}deg`);
console.error(`covers elevation ${(opts.pitch - Math.atan(tanV) / RAD).toFixed(1)}..${(opts.pitch + Math.atan(tanV) / RAD).toFixed(1)}deg`);

const W = opts.width;
const H = Math.round(W / 2);
const out = Buffer.alloc(W * H * 3);
const acc = new Float64Array(W * H * 3);
const wsum = new Float64Array(W * H);
const blendRad = opts.blend * RAD;

/** Bilinear, clamped -- a plate has real edges and must not wrap. */
function sample(p, fx, fy, dst) {
  const x = Math.min(p.w - 1.001, Math.max(0, fx - 0.5));
  const y = Math.min(p.h - 1.001, Math.max(0, fy - 0.5));
  const x0 = Math.floor(x); const y0 = Math.floor(y);
  const tx = x - x0; const ty = y - y0;
  const at = (px, py) => (py * p.w + px) * p.channels;
  const a = at(x0, y0); const b = at(x0 + 1, y0); const c = at(x0, y0 + 1); const d = at(x0 + 1, y0 + 1);
  for (let k = 0; k < 3; k += 1) {
    const top = p.data[a + k] * (1 - tx) + p.data[b + k] * tx;
    const bot = p.data[c + k] * (1 - tx) + p.data[d + k] * tx;
    dst[k] = top * (1 - ty) + bot * ty;
  }
}

const rgb = [0, 0, 0];
for (let j = 0; j < H; j += 1) {
  // Three's own convention, so the result drops into `panoramic` mode unchanged.
  const lat = ((0.5 - (j + 0.5) / H)) * Math.PI;
  for (let i = 0; i < W; i += 1) {
    const lon = (((i + 0.5) / W) - 0.5) * 2 * Math.PI;
    const o = (j * W + i) * 3;
    for (let n = 0; n < N; n += 1) {
      const centre = -Math.PI + n * sectorRad + sectorRad / 2;
      let d = lon - centre;
      while (d > Math.PI) d -= 2 * Math.PI;
      while (d < -Math.PI) d += 2 * Math.PI;
      // Outside this plate's own sector plus the blend band, it has no opinion.
      if (Math.abs(d) > sectorRad / 2 + blendRad) continue;

      // Into the plate's camera frame: yaw by -d, then pitch down by `pitch`.
      const cx = Math.cos(lat) * Math.cos(d);
      const cz = Math.cos(lat) * Math.sin(d);
      const cy = Math.sin(lat);
      const fx2 = cx * Math.cos(pitchRad) + cy * Math.sin(pitchRad);
      const fy2 = -cx * Math.sin(pitchRad) + cy * Math.cos(pitchRad);
      if (fx2 <= 1e-6) continue;              // behind the camera
      const sx = (cz / fx2) / tanH;
      const sy = (fy2 / fx2) / tanV;
      if (sx < -1 || sx > 1 || sy < -1 || sy > 1) continue;  // outside the frame

      sample(plates[n], (sx * 0.5 + 0.5) * pw, (0.5 - sy * 0.5) * ph, rgb);
      // Straightest-view wins: 1 at the plate's own bearing, 0 at the far side
      // of the blend band. Squared so the join is a soft shoulder, not a ramp.
      const t = Math.max(0, 1 - Math.abs(d) / (sectorRad / 2 + blendRad));
      const wt = t * t + 1e-6;
      acc[o] += rgb[0] * wt; acc[o + 1] += rgb[1] * wt; acc[o + 2] += rgb[2] * wt;
      wsum[j * W + i] += wt;
    }
    const s = wsum[j * W + i];
    if (s > 0) { out[o] = Math.round(acc[o] / s); out[o + 1] = Math.round(acc[o + 1] / s); out[o + 2] = Math.round(acc[o + 2] / s); }
  }
  if (j % 256 === 0) console.error(`  row ${j}/${H}`);
}

const img = sharp(out, { raw: { width: W, height: H, channels: 3 } });
await img.clone().png().toFile(opts.out);
console.error(`wrote ${opts.out} ${W}x${H} (${(W / 360).toFixed(1)} px/deg)`);

// The wrap is seamless BY CONSTRUCTION -- azimuth is continuous and the columns
// either side of lon = +/-PI are sampled from the same plates -- but it costs
// nothing to say so, and a stitch that silently stopped wrapping would look
// like a generator artefact rather than a bug here.
const col = (x) => { const o = []; for (let y = 0; y < H; y += 1) { const i = (y * W + x) * 3; o.push([out[i], out[i + 1], out[i + 2]]); } return o; };
const meanAbs = (a, b) => { let s = 0; for (let i = 0; i < a.length; i += 1) for (let c = 0; c < 3; c += 1) s += Math.abs(a[i][c] - b[i][c]); return s / (a.length * 3); };
console.error(`wrap seam mean|L-R| ${meanAbs(col(0), col(W - 1)).toFixed(2)} (adjacent-column floor ${meanAbs(col(W >> 1), col((W >> 1) + 1)).toFixed(2)})`);

if (opts.hemisphere) {
  // 4:1, which is what `measurePanorama` reads as the sky alone: elevation
  // 0..90 recorded automatically, and no lower hemisphere to invent.
  await img.clone().extract({ left: 0, top: 0, width: W, height: Math.round(H / 2) })
    .jpeg({ quality: 92, chromaSubsampling: '4:4:4' }).toFile(opts.hemisphere);
  console.error(`wrote ${opts.hemisphere} ${W}x${Math.round(H / 2)} (4:1, elevation 0..90)`);
}
