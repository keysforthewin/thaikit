/**
 * The cube-to-equirect resample.
 *
 * This is the only real arithmetic in the sky pipeline, and getting it wrong
 * does not throw -- it rotates or mirrors the sky silently between what the
 * author saw in the editor's cube preview and what ships. The first version was
 * a quarter turn out and looked entirely plausible. So the six faces are
 * checked one at a time against three's own equirect convention:
 *
 *   u = atan2(dir.z, dir.x) / 2PI + 0.5      v = asin(dir.y) / PI + 0.5
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import sharp from 'sharp';

import { cubeToEquirect } from './sky.mjs';

/** One flat colour per face, in CUBE_FACES order: px, nx, py, ny, pz, nz. */
const FACES = [
  { name: '+X', rgb: [255, 0, 0] },
  { name: '-X', rgb: [0, 255, 0] },
  { name: '+Y', rgb: [0, 0, 255] },
  { name: '-Y', rgb: [255, 255, 0] },
  { name: '+Z', rgb: [255, 0, 255] },
  { name: '-Z', rgb: [0, 255, 255] },
];

const flat = ([r, g, b]) =>
  sharp({ create: { width: 32, height: 32, channels: 3, background: { r, g, b } } }).png().toBuffer();

test('a cube map resamples to an equirect in three\'s own convention', async () => {
  const png = await cubeToEquirect(await Promise.all(FACES.map((f) => flat(f.rgb))), { width: 256 });
  const { data, info } = await sharp(png).raw().toBuffer({ resolveWithObject: true });

  assert.equal(info.width, 256);
  assert.equal(info.height, 128, 'an equirect is 2:1');

  const at = (u, v) => {
    const x = Math.round(u * (info.width - 1));
    const y = Math.round(v * (info.height - 1));
    const o = (y * info.width + x) * info.channels;
    return [data[o], data[o + 1], data[o + 2]];
  };
  // The images ship FLIPPED (compressed textures cannot honour flipY), so the
  // file's first row is the nadir and its last row is the zenith. `prepareSkyImages`
  // does that flip; `cubeToEquirect` itself writes zenith-first.
  const near = (got, want) => got.every((n, i) => Math.abs(n - want[i]) <= 4);

  const probes = [
    ['zenith', 0.5, 0.0, '+Y'],
    ['nadir', 0.5, 1.0, '-Y'],
    ['u=0.50 -> +X', 0.5, 0.5, '+X'],
    ['u=0.75 -> +Z', 0.75, 0.5, '+Z'],
    ['u=0.25 -> -Z', 0.25, 0.5, '-Z'],
    ['u=0.00 -> -X', 0.002, 0.5, '-X'],
  ];
  for (const [label, u, v, face] of probes) {
    const want = FACES.find((f) => f.name === face).rgb;
    const got = at(u, v);
    assert.ok(near(got, want), `${label}: expected ${face} ${want} but read ${got}`);
  }
});

test('the resample interpolates rather than picking the nearest face texel', async () => {
  // A gradient across one face must arrive as a gradient, not as bands: a
  // nearest-neighbour resample of a 32-px face over a 256-px panorama is what
  // stair-steps a horizon.
  const w = 32;
  const buf = Buffer.alloc(w * w * 3);
  for (let y = 0; y < w; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const o = (y * w + x) * 3;
      buf[o] = Math.round((x / (w - 1)) * 255);
      buf[o + 1] = 40;
      buf[o + 2] = 40;
    }
  }
  const grad = await sharp(buf, { raw: { width: w, height: w, channels: 3 } }).png().toBuffer();
  const others = await Promise.all(FACES.slice(1).map((f) => flat(f.rgb)));
  const png = await cubeToEquirect([grad, ...others], { width: 256 });
  const { data, info } = await sharp(png).raw().toBuffer({ resolveWithObject: true });

  // Walk the +X face's band along the equator and count distinct red values.
  const y = info.height >> 1;
  const seen = new Set();
  for (let x = Math.round(info.width * 0.44); x < Math.round(info.width * 0.56); x += 1) {
    seen.add(data[(y * info.width + x) * info.channels]);
  }
  assert.ok(seen.size > 8, `expected a smooth ramp, saw ${seen.size} distinct values`);
});
