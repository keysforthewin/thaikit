#!/usr/bin/env node
/**
 * Resample one equirectangular panorama into the six cube faces the sky's
 * `cube` mode wants -- `px nx py ny pz nz`, square, seamless by construction.
 *
 * This is the exact INVERSE of `cubeToEquirect()` in
 * `scripts/level/pipeline/sky.mjs`, and it has to stay that way: that function
 * is what the bake runs on a cube-mode sky, so anything that disagrees here is
 * a panorama that renders one way in the editor and a quarter turn out in the
 * shipped level. The convention is three's own --
 *   u = atan2(dir.z, dir.x) / 2PI + 0.5,  v = asin(dir.y) / PI + 0.5
 * with v = 1 (the zenith) at the FIRST row of the file.
 *
 * Seams are free here in a way they never are for a generator: adjacent faces
 * read the same directions off the same source, so the edges agree to within
 * the bilinear filter. Generating six faces with an image model instead cannot
 * make that promise -- nothing ties one face's pixels to its neighbour's.
 *
 * Worth knowing before reaching for it: the bake resamples a `cube`-mode sky
 * straight back to ONE equirect, so for a panorama that already exists, feeding
 * the faces back in as a cube is a round trip that only loses filtering. Use
 * `panoramic` mode instead -- the bake runs this same resample and ships the
 * six faces as a single KTX2 cubemap. This CLI is for the case where the faces
 * themselves are the artefact: a render out of another tool, or a hand-painted
 * sky.
 *
 * Usage:
 *   node scripts/level/equirect-to-cube.mjs <equirect> --out <dir> [--size 1024]
 *                                           [--format jpg|png|webp] [--quality 90]
 *                                           [--nadir auto|#rrggbb|none]
 *                                           [--nadir-start 8] [--nadir-end 40]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import sharp from 'sharp';
import { resolveNadirFade } from '@thaikit/level-schema';

/** In the order `cubeToEquirect` indexes them, which is three's cube order. */
const FACES = ['px', 'nx', 'py', 'ny', 'pz', 'nz'];

/**
 * The direction a face's (u, v) in [-1, 1] looks at. Read these against the
 * `face = ...; u = ...; v = ...` block in `cubeToEquirect`: each line is that
 * line solved for the direction.
 */
const DIRECTION = {
  px: (u, v) => [1, -v, -u],
  nx: (u, v) => [-1, -v, u],
  py: (u, v) => [u, 1, v],
  ny: (u, v) => [u, -1, -v],
  pz: (u, v) => [u, -v, 1],
  nz: (u, v) => [-u, -v, -1],
};

function parseArgs(argv) {
  const out = {
    input: null,
    out: null,
    size: 1024,
    format: 'jpg',
    quality: 90,
    nadir: 'auto',
    nadirMode: 'fade',
    nadirStart: 0,
    nadirEnd: 8,
    elevMinDeg: null,
    elevMaxDeg: 90,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '--out') out.out = argv[++i];
    else if (a === '--size') out.size = Number(argv[++i]);
    else if (a === '--format') out.format = argv[++i];
    else if (a === '--quality') out.quality = Number(argv[++i]);
    else if (a === '--nadir') out.nadir = argv[++i];
    else if (a === '--nadir-mode') out.nadirMode = argv[++i];
    else if (a === '--nadir-start') out.nadirStart = Number(argv[++i]);
    else if (a === '--nadir-end') out.nadirEnd = Number(argv[++i]);
    else if (a === '--elev-min') out.elevMinDeg = Number(argv[++i]);
    else if (a === '--elev-max') out.elevMaxDeg = Number(argv[++i]);
    else if (!a.startsWith('-')) out.input = a;
  }
  return out;
}

const clamp01 = (t) => Math.min(1, Math.max(0, t));
const smoothstep = (t) => t * t * (3 - 2 * t);

const HEX = /^#?([0-9a-f]{6})$/i;
function parseHex(s) {
  const m = HEX.exec(s);
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255, 255];
}

/**
 * The colour to sink the nadir into, measured off the panorama rather than
 * guessed: the mean of the rows just above where the fade starts. A hand-picked
 * grey is a disc of the wrong hue directly underfoot, and against a night sky
 * that reads as a lit hole rather than as ground.
 */
export function measureNadirColour(src, { elevMin, elevMax, startRad }) {
  const rowAt = (rad) => Math.round(((elevMax - rad) / (elevMax - elevMin)) * src.h);
  // The band just below where the fade starts, clamped into the image: for a
  // sky-only panorama that row is the last one there is, so the "horizon
  // colour" is the bottom edge rather than something off the end of the file.
  const from = Math.max(0, Math.min(src.h - 2, rowAt(-startRad)));
  const to = Math.min(src.h, from + Math.max(2, Math.round(src.h * 0.03)));
  const acc = [0, 0, 0];
  let n = 0;
  for (let y = from; y < to; y += 1) {
    for (let x = 0; x < src.w; x += 1) {
      const o = (y * src.w + x) * src.channels;
      acc[0] += src.data[o];
      acc[1] += src.data[o + 1];
      acc[2] += src.data[o + 2];
      n += 1;
    }
  }
  return [Math.round(acc[0] / n), Math.round(acc[1] / n), Math.round(acc[2] / n), 255];
}

/**
 * Bilinear sample of an equirect, wrapping in x and clamping in y.
 *
 * The x wrap is the whole point of the exercise: a face straddling the
 * panorama's own seam (nx, at u = 0) reads columns from both ends, so clamping
 * there would print the seam onto the face.
 */
function sampler({ data, w, h, channels }) {
  return (fx, fy, dst, o) => {
    const x = fx - 0.5;
    const y = Math.min(h - 1, Math.max(0, fy - 0.5));
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const tx = x - x0;
    const ty = y - y0;
    const xa = ((x0 % w) + w) % w;
    const xb = (xa + 1) % w;
    const ya = y0;
    const yb = Math.min(h - 1, y0 + 1);
    const at = (px, py) => (py * w + px) * channels;
    const a = at(xa, ya);
    const b = at(xb, ya);
    const c = at(xa, yb);
    const d = at(xb, yb);
    for (let k = 0; k < channels; k += 1) {
      const top = data[a + k] * (1 - tx) + data[b + k] * tx;
      const bot = data[c + k] * (1 - tx) + data[d + k] * tx;
      dst[o + k] = Math.round(top * (1 - ty) + bot * ty);
    }
  };
}

/**
 * @param {Buffer} buffer  the equirect
 * @param {object} [opts]
 * @param {number} [opts.size]        face edge in px
 * @param {string|null} [opts.nadir]  '#rrggbb', 'auto' (measure it), or null to
 *                                    keep whatever the panorama has underneath
 * @param {'fade'|'cut'} [opts.nadirMode]  'cut' gives the cube NO FLOOR -- `ny`
 *                                    is one flat colour and the sides stop at
 *                                    the skyline. See `SkyNadir` in the schema.
 * @param {number} [opts.nadirStart]  degrees BELOW the horizon where the fade begins
 * @param {number} [opts.nadirEnd]    degrees below which it is the flat colour
 * @param {number} [opts.elevMinDeg]  elevation the image's LAST row sits at
 * @param {number} [opts.elevMaxDeg]  elevation its FIRST row sits at
 */
export async function equirectToCube(
  buffer,
  { size = 1024, nadir = 'auto', nadirMode = 'fade', nadirStart, nadirEnd, elevMinDeg = -90, elevMaxDeg = 90 } = {},
) {
  // What the mode MEANS is resolved by the schema, so the bake and the editor's
  // preview shader cannot disagree about where the ground starts.
  const fade = resolveNadirFade({ mode: nadirMode, startDeg: nadirStart, endDeg: nadirEnd });
  const { data, info } = await sharp(buffer, { failOn: 'none' }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const src = { data, w: info.width, h: info.height, channels: 4 };
  const sample = sampler(src);

  // The nadir is the one direction a panorama never really has.
  //
  // A generated equirect has SOMETHING at the bottom -- for an aerial plate,
  // city sprawl; for a ground-level one, a smeared tripod -- and whatever it is
  // was invented, not observed, because the projection crushes the whole nadir
  // into a single row of pixels. Resampled onto `ny` that garbage becomes a
  // full-resolution square face you are standing on. So it is faded out into
  // one measured colour, and the fade is applied in DIRECTION space rather than
  // to the ny face alone: every face crossing that latitude band gets the same
  // blend at the same angle, so the four side faces meet ny without a step.
  // What the rows span. A full equirect is -90..+90; a ground-level panorama
  // cropped to the sky alone is 0..+90 and twice as wide as it is tall again.
  const elevMax = (elevMaxDeg * Math.PI) / 180;
  const elevMin = (elevMinDeg * Math.PI) / 180;
  const elevSpan = elevMax - elevMin;
  if (!(elevSpan > 0)) throw new Error(`elevation max (${elevMaxDeg}) must be above min (${elevMinDeg})`);

  // A cut has no ground to measure -- there IS no ground, and averaging the
  // horizon rows would paint the skyline's own glow across the lower hemisphere
  // as a lit disc underfoot. It sinks to black unless the author names a colour.
  const nadirColour = nadir == null
    ? null
    : nadir === 'auto'
      ? (fade.cut ? [0, 0, 0, 255] : measureNadirColour(src, { elevMin, elevMax, startRad: (fade.startDeg * Math.PI) / 180 }))
      : parseHex(nadir);
  if (nadir != null && !nadirColour) throw new Error(`--nadir must be 'auto', a #rrggbb colour, or 'none' (got "${nadir}")`);
  const startRad = (fade.startDeg * Math.PI) / 180;
  const endRad = (fade.endDeg * Math.PI) / 180;
  if (!(endRad > startRad)) throw new Error(`nadir end (${fade.endDeg}) must be below start (${fade.startDeg})`);

  const faces = {};
  for (const name of FACES) {
    const dir = DIRECTION[name];
    const out = Buffer.alloc(size * size * 4);

    // The floor of a cut cube is one colour edge to edge -- every direction on
    // `ny` is at least 35 degrees below the horizon, so the fade has finished
    // across the whole face and there is nothing of the panorama left in it.
    // Filling it directly skips a million samples of an image we would then
    // throw away, and it costs the KTX2 encoder almost nothing to store.
    if (fade.cut && nadirColour && name === 'ny') {
      for (let o = 0; o < out.length; o += 4) {
        out[o] = nadirColour[0]; out[o + 1] = nadirColour[1]; out[o + 2] = nadirColour[2]; out[o + 3] = 255;
      }
      faces[name] = { raw: out, size };
      continue;
    }

    for (let j = 0; j < size; j += 1) {
      const v = ((j + 0.5) / size) * 2 - 1;
      for (let i = 0; i < size; i += 1) {
        const u = ((i + 0.5) / size) * 2 - 1;
        const [dx, dy, dz] = dir(u, v);
        const len = Math.hypot(dx, dy, dz);
        const lat = Math.asin(dy / len);
        // Same two lines as the forward transform, read the other way -- with
        // the row mapping generalised, so a 4:1 sky-only panorama puts its last
        // row on the horizon instead of at the nadir. A direction outside the
        // coverage lands off the ends and the sampler clamps it, which is only
        // ever the ground the fade below is about to paint over anyway.
        const fx = (Math.atan2(dz, dx) / (2 * Math.PI) + 0.5) * src.w;
        const fy = ((elevMax - lat) / elevSpan) * src.h;
        const o = (j * size + i) * 4;
        sample(fx, fy, out, o);

        if (nadirColour && lat < -startRad) {
          const t = smoothstep(clamp01((-lat - startRad) / (endRad - startRad)));
          for (let k = 0; k < 3; k += 1) out[o + k] = Math.round(out[o + k] * (1 - t) + nadirColour[k] * t);
        }
      }
    }
    faces[name] = { raw: out, size };
  }
  return { faces, nadirColour };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.input || !args.out) {
    console.error(
      'usage: equirect-to-cube.mjs <equirect> --out <dir> [--size 1024] [--format jpg|png|webp] [--quality 90]\n' +
        "       [--nadir auto|#rrggbb|none] [--nadir-start 8] [--nadir-end 40]   degrees below the horizon",
    );
    process.exit(2);
  }
  const buf = await fs.readFile(args.input);
  const meta = await sharp(buf).metadata();
  const aspect = meta.width / meta.height;
  if (Math.abs(aspect - 2) > 0.01 && Math.abs(aspect - 4) > 0.01) {
    console.error(`warning: ${meta.width}x${meta.height} is ${aspect.toFixed(2)}:1, neither a 2:1 sphere nor a 4:1 sky-only panorama; pass --elev-min/--elev-max to say what the rows span`);
  }

  const { faces, nadirColour } = await equirectToCube(buf, {
    size: args.size,
    nadir: args.nadir === 'none' ? null : args.nadir,
    nadirMode: args.nadirMode,
    nadirStart: args.nadirStart,
    nadirEnd: args.nadirEnd,
    // Unstated, the coverage follows the aspect: 2:1 is a whole sphere, 4:1 is
    // the sky alone. Guessing beats defaulting to -90 here, because a sky-only
    // panorama read as a whole sphere is silently squashed to half its height.
    elevMinDeg: args.elevMinDeg ?? (Math.abs(meta.width / meta.height - 4) < Math.abs(meta.width / meta.height - 2) ? 0 : -90),
    elevMaxDeg: args.elevMaxDeg,
  });
  await fs.mkdir(args.out, { recursive: true });

  const written = [];
  for (const [name, face] of Object.entries(faces)) {
    let img = sharp(face.raw, { raw: { width: face.size, height: face.size, channels: 4 } });
    if (args.format === 'png') img = img.png();
    else if (args.format === 'webp') img = img.webp({ quality: args.quality });
    else img = img.flatten().jpeg({ quality: args.quality, chromaSubsampling: '4:4:4' });
    const file = path.join(args.out, `${name}.${args.format}`);
    const info = await img.toFile(file);
    written.push({ slot: name, file, bytes: info.size });
  }
  const nadir = nadirColour ? `#${nadirColour.slice(0, 3).map((c) => c.toString(16).padStart(2, '0')).join('')}` : null;
  process.stdout.write(`${JSON.stringify({ ok: true, source: args.input, size: args.size, nadir, faces: written })}\n`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((err) => {
    console.error(err.stack || String(err));
    process.exit(1);
  });
}
