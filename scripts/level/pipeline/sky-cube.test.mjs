/**
 * Cube mode ships the faces it already has.
 *
 * It used to resample the six faces into one 2048-wide equirect -- 5.7 px/deg
 * against a 1024 face's 11.4 -- and then encode that with no mip chain and a
 * pole that collapses to the average colour of the whole sky. The regression
 * this guards is silent and reads as "the sky is a bit soft": nothing throws if
 * `base` comes back instead of `baseFaces`, the level just ships at half the
 * resolution the author gave it.
 *
 * Its own file because `LEVELS_DIR` is resolved once, when registry-core is
 * first imported -- so the temp directory has to be in the environment BEFORE
 * anything pulls it in, which a static import at the top of a shared test file
 * cannot arrange.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

import sharp from 'sharp';

const LEVELS = await fs.mkdtemp(path.join(os.tmpdir(), 'tk-levels-'));
process.env.THAIKIT_LEVELS_DIR = LEVELS;

const { prepareSkyImages } = await import('./sky.mjs');
const { CUBE_FACES } = await import('@thai-kit/level-schema');

const RGB = [[255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 255, 0], [255, 0, 255], [0, 255, 255]];
const square = (size, [r, g, b]) =>
  sharp({ create: { width: size, height: size, channels: 3, background: { r, g, b } } }).png().toBuffer();

/** A level whose sky directory holds one square PNG per face. */
async function levelWithCube(id, size) {
  await fs.mkdir(path.join(LEVELS, id, 'sky'), { recursive: true });
  const faces = {};
  for (let i = 0; i < CUBE_FACES.length; i += 1) {
    const name = `${CUBE_FACES[i]}.png`;
    await fs.writeFile(path.join(LEVELS, id, 'sky', name), await square(size, RGB[i]));
    faces[CUBE_FACES[i]] = name;
  }
  return { enabled: true, base: { mode: 'cube', faces } };
}

test('a cube sky bakes as six faces, not as a flattened equirect', async () => {
  const out = await prepareSkyImages('native', await levelWithCube('native', 256));
  assert.equal(out.base, null, 'nothing is flattened to an equirect');
  assert.equal(out.baseFaces?.length, 6, 'all six faces go through');
  for (const buf of out.baseFaces) {
    const m = await sharp(buf).metadata();
    assert.equal(m.width, 256);
    assert.equal(m.height, 256);
  }
});

test('faces at native size are passed through, not re-encoded', async () => {
  const sky = await levelWithCube('passthru', 128);
  const out = await prepareSkyImages('passthru', sky);
  const onDisk = await fs.readFile(path.join(LEVELS, 'passthru', 'sky', 'px.png'));
  assert.deepEqual(Buffer.from(out.baseFaces[0]), onDisk, 'the bytes are the file, so there is no generation loss');
});

test('cube faces larger than the ceiling are capped, and say so', async () => {
  const out = await prepareSkyImages('big', await levelWithCube('big', 512), { maxFace: 256 });
  assert.equal(out.baseFaces?.length, 6);
  assert.equal((await sharp(out.baseFaces[0]).metadata()).width, 256);
  assert.ok(out.notes.some((n) => /capped at 256/.test(n)), `expected a cap note, got ${JSON.stringify(out.notes)}`);
});

test('a cube sky missing a face skips the base layer rather than half-shipping it', async () => {
  const sky = await levelWithCube('partial', 64);
  delete sky.base.faces.py;
  const out = await prepareSkyImages('partial', sky);
  assert.equal(out.baseFaces, null);
  assert.equal(out.base, null);
  assert.ok(out.notes.some((n) => /missing py/.test(n)), JSON.stringify(out.notes));
});

test.after(() => fs.rm(LEVELS, { recursive: true, force: true }));
