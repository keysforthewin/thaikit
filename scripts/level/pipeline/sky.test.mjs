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
import { equirectToCube } from '../equirect-to-cube.mjs';
import { CUBE_FACES, SkyNadir } from '@thai-kit/level-schema';

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

/**
 * The other direction: one panorama into six faces.
 *
 * `equirectToCube` has to be the exact inverse of the function above, because
 * the bake runs BOTH -- a cube-mode sky is resampled to an equirect, a
 * panoramic one to a cube. A disagreement between them is a sky that turns a
 * quarter of the way round somewhere in the pipeline and still looks plausible.
 */
test('equirectToCube inverts cubeToEquirect', async () => {
  // A panorama with a distinct quadrant colour per bearing, so a rotation or a
  // mirror shows up as a colour landing on the wrong face.
  const w = 256;
  const h = 128;
  const raw = Buffer.alloc(w * h * 3);
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const o = (y * w + x) * 3;
      const q = Math.floor((x / w) * 4);
      raw[o] = q === 0 ? 220 : 30;
      raw[o + 1] = q === 1 ? 220 : 30;
      raw[o + 2] = q === 2 ? 220 : 30;
      if (q === 3) { raw[o] = 200; raw[o + 1] = 200; raw[o + 2] = 40; }
    }
  }
  const src = await sharp(raw, { raw: { width: w, height: h, channels: 3 } }).png().toBuffer();

  const { faces } = await equirectToCube(src, { size: 64, nadir: null });
  const png = await Promise.all(
    CUBE_FACES.map((f) => sharp(faces[f].raw, { raw: { width: 64, height: 64, channels: 4 } }).png().toBuffer()),
  );
  const back = await cubeToEquirect(png, { width: w });
  const a = await sharp(src).removeAlpha().raw().toBuffer();
  const b = await sharp(back).removeAlpha().raw().toBuffer();

  let worst = 0;
  for (let i = 0; i < a.length; i += 1) worst = Math.max(worst, Math.abs(a[i] - b[i]));
  // Bilinear twice over a hard quadrant edge, so exact equality is not the bar;
  // a quarter turn would put 220 where 30 belongs and blow this wide open.
  let bad = 0;
  for (let i = 0; i < a.length; i += 1) if (Math.abs(a[i] - b[i]) > 60) bad += 1;
  assert.ok(bad / a.length < 0.02, `round trip differs on ${((bad / a.length) * 100).toFixed(1)}% of channels (worst ${worst})`);
});

test('a sky-only panorama maps its last row to the horizon, not the nadir', async () => {
  // A vertical gradient, so a row can be read back as a number rather than as a
  // side of a threshold. White at the first row, black at the last.
  const w = 256;
  const h = 64;
  const raw = Buffer.alloc(w * h * 3);
  for (let y = 0; y < h; y += 1) {
    const v = Math.round(255 * (1 - y / (h - 1)));
    for (let x = 0; x < w; x += 1) raw.fill(v, (y * w + x) * 3, (y * w + x) * 3 + 3);
  }
  const src = await sharp(raw, { raw: { width: w, height: h, channels: 3 } }).png().toBuffer();

  // A side face spans only +/-45 degrees of elevation, so the horizon is its
  // MIDDLE row -- the bottom row looks 45 degrees DOWN, which is a common way
  // to misread a cube face. Sample the row that genuinely points at 0.
  const horizonOf = async (elevMinDeg) => {
    const { faces } = await equirectToCube(src, { size: 32, nadir: null, elevMinDeg, elevMaxDeg: 90 });
    return faces.px.raw[(16 * 32 + 16) * 4];
  };

  // Read as the sky alone, the panorama's LAST row is the horizon: black.
  assert.ok((await horizonOf(0)) < 20, 'a 0..90 panorama puts its last row on the horizon');
  // Read as a whole sphere, its MIDDLE row is: mid grey. This is the failure
  // the coverage exists to prevent -- the sky squashed into the top half of the
  // dome, with the ground half of the image hanging above the skyline.
  const asSphere = await horizonOf(-90);
  assert.ok(asSphere > 100 && asSphere < 160, `a -90..90 panorama puts its middle row on the horizon (got ${asSphere})`);

  // And the zenith is the first row either way.
  const { faces } = await equirectToCube(src, { size: 32, nadir: null, elevMinDeg: 0, elevMaxDeg: 90 });
  assert.ok(faces.py.raw[(16 * 32 + 16) * 4] > 240, 'the zenith is the panorama\'s first row');
});

test('the nadir is filled flat, and the side faces meet it without a step', async () => {
  const w = 256;
  const h = 128;
  const raw = Buffer.alloc(w * h * 3, 90);
  const src = await sharp(raw, { raw: { width: w, height: h, channels: 3 } }).png().toBuffer();

  const { faces, nadirColour } = await equirectToCube(src, { size: 32, nadir: '#204060', nadirStart: 8, nadirEnd: 40 });
  assert.deepEqual(nadirColour.slice(0, 3), [0x20, 0x40, 0x60]);

  // ny is below -40 everywhere except its very corners, which reach -35.
  const ny = faces.ny.raw;
  for (let i = 0; i < ny.length; i += 4) {
    assert.ok(Math.abs(ny[i] - 0x20) < 40 && Math.abs(ny[i + 2] - 0x60) < 40, 'the bottom face is the nadir colour');
  }
  // And the blend is a function of elevation, so the bottom row of every side
  // face agrees with the edge of ny it is glued to.
  for (const f of ['px', 'nx', 'pz', 'nz']) {
    const side = faces[f].raw;
    const bottom = (31 * 32 + 16) * 4;
    assert.ok(Math.abs(side[bottom] - ny[(0 * 32 + 16) * 4]) < 24, `${f} must meet ny without a step`);
  }
});

test('with the shipped defaults nothing of the image survives below the horizon', async () => {
  // The bug this pins: the fade used to run 8..40 degrees BELOW the horizon, so
  // ten degrees down the mix was still two thirds image and the aerial half of
  // a panorama glowed through the ground -- orange street lights underfoot. A
  // panoramic sky fills the TOP HALF of the dome and nothing else.
  //
  // The ground half is given loud vertical STRIPES rather than a colour,
  // because the fill is itself measured off those rows: what distinguishes
  // "filled" from "leaking" is not the hue, it is whether any structure is
  // left. Below the fade a side face's row must be constant along x.
  const w = 256;
  const h = 128;
  const raw = Buffer.alloc(w * h * 3);
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const o = (y * w + x) * 3;
      if (y < h / 2) { raw[o] = 40; raw[o + 1] = 90; raw[o + 2] = 140; }
      else { const v = x % 8 < 4 ? 255 : 0; raw[o] = v; raw[o + 1] = v >> 1; raw[o + 2] = 0; }
    }
  }
  const src = await sharp(raw, { raw: { width: w, height: h, channels: 3 } }).png().toBuffer();

  const size = 64;
  // The schema's own defaults, so the test tracks what actually ships rather
  // than a copy of the numbers.
  const defaults = SkyNadir.parse({});
  const { faces, nadirColour } = await equirectToCube(src, {
    size,
    nadir: 'auto',
    nadirStart: defaults.startDeg,
    nadirEnd: defaults.endDeg,
  });

  // px spans +/-45 degrees across its rows as atan(v), not linearly: the row
  // looking `deg` DOWN sits at v = tan(deg).
  //
  // And a row is NOT an iso-elevation line. Its edge columns look along
  // (1, -v, -+1), which is asin(v / sqrt(2 + v^2)) below the horizon -- shallower
  // than the atan(v) at its centre. At 10 degrees down the corners are still at
  // 7, inside an 8-degree fade, so the first row that is ENTIRELY below the fade
  // is about 12. That is why these start at 15 rather than at the fade's end.
  const rowLookingDown = (deg) => Math.round(((Math.tan((deg * Math.PI) / 180) + 1) / 2) * size - 0.5);
  const px = faces.px.raw;

  for (const deg of [15, 25, 35, 44]) {
    const j = rowLookingDown(deg);
    let lo = 255;
    let hi = 0;
    for (let i = 0; i < size; i += 1) {
      const r = px[(j * size + i) * 4];
      lo = Math.min(lo, r);
      hi = Math.max(hi, r);
    }
    assert.ok(hi - lo <= 1, `${deg}° below the horizon still carries image structure (row spread ${hi - lo})`);
    const o = (j * size + size / 2) * 4;
    for (let k = 0; k < 3; k += 1) {
      assert.ok(Math.abs(px[o + k] - nadirColour[k]) <= 1, `${deg}° below the horizon is not the nadir colour`);
    }
  }

  // The centre column, which really is at atan(v), is the nadir colour as soon
  // as the fade is done.
  const justBelow = rowLookingDown(10);
  const jo = (justBelow * size + size / 2) * 4;
  for (let k = 0; k < 3; k += 1) {
    assert.ok(Math.abs(px[jo + k] - nadirColour[k]) <= 1, '10 degrees down the centre of a face is already ground');
  }

  // ...and the sky is untouched: two degrees UP is still the image.
  const up = rowLookingDown(-2);
  const uo = (up * size + size / 2) * 4;
  assert.deepEqual([px[uo], px[uo + 1], px[uo + 2]], [40, 90, 140], 'the sky above the horizon must survive');
});

test('a cut nadir gives the cube no floor, and takes nothing above the horizon', async () => {
  // What a cut is FOR: a backdrop that rings a level rather than containing it.
  // A fade only thins the panorama's lower half out -- and its first eight
  // degrees are not faded at all, which is where an aerial plate's roads come
  // through, running under the map. A cut ends the image AT the horizon.
  //
  // The two halves are structured differently on purpose. The sky half gets
  // vertical stripes so "nothing above the horizon was eaten" is testable as
  // surviving variance along x; the ground half gets a flat mid-grey, so if any
  // of it leaked the face would not be black.
  const w = 256;
  const h = 128;
  const raw = Buffer.alloc(w * h * 3);
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const o = (y * w + x) * 3;
      if (y < h / 2) { const v = x % 8 < 4 ? 250 : 20; raw[o] = v; raw[o + 1] = v; raw[o + 2] = 255; }
      else { raw[o] = 128; raw[o + 1] = 128; raw[o + 2] = 128; }
    }
  }
  const src = await sharp(raw, { raw: { width: w, height: h, channels: 3 } }).png().toBuffer();

  const size = 64;
  const { faces, nadirColour } = await equirectToCube(src, { size, nadir: 'auto', nadirMode: 'cut' });

  // A cut has no ground to average, so 'auto' means black rather than the mean
  // of the horizon rows -- which here would be a bright disc underfoot.
  assert.deepEqual([...nadirColour.slice(0, 3)], [0, 0, 0], 'an auto cut sinks to black');

  const ny = faces.ny.raw;
  for (let i = 0; i < size * size; i += 1) {
    const o = i * 4;
    assert.ok(ny[o] === 0 && ny[o + 1] === 0 && ny[o + 2] === 0, `ny must be empty at texel ${i}`);
  }

  // px spans +/-45 degrees as atan(v) at its centre, and its edge columns look
  // asin(v / sqrt(2 + v^2)) down -- shallower. v = 0.02 is 1.15 degrees down at
  // the centre and still 0.81 at the corners, so the whole row is past a 0.35
  // degree feather; v = -0.05 is 2.9 up at the centre and 2.0 at the corners,
  // so the whole row is clear of it on the other side.
  const px = faces.px.raw;
  const rowFor = (v) => Math.round(((v + 1) / 2) * size - 0.5);
  const spread = (j) => {
    let mn = 255;
    let mx = 0;
    for (let i = 0; i < size; i += 1) { const c = px[(j * size + i) * 4]; if (c < mn) mn = c; if (c > mx) mx = c; }
    return { mn, mx };
  };

  for (let j = rowFor(0.02); j < size; j += 1) {
    const { mn, mx } = spread(j);
    assert.ok(mx === 0 && mn === 0, `px row ${j} is below the horizon and must be empty (got ${mn}..${mx})`);
  }

  const above = spread(rowFor(-0.05));
  assert.ok(above.mx - above.mn > 100, `the sky above the horizon keeps its detail (spread ${above.mx - above.mn})`);
});
