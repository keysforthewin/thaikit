import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { unzipSync } from './unzip.mjs';
import { faceFromFilename } from '@thai-kit/level-schema';

/** A real archive from the `zip` CLI -- the point is to read what tools write. */
function makeZip(files, args = []) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'tk-unzip-'));
  for (const [name, body] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(path.join(dir, name)), { recursive: true });
    fs.writeFileSync(path.join(dir, name), body);
  }
  const zip = path.join(dir, 'out.zip');
  execFileSync('zip', ['-q', '-r', ...args, zip, ...Object.keys(files)], { cwd: dir });
  const buf = fs.readFileSync(zip);
  fs.rmSync(dir, { recursive: true, force: true });
  return buf;
}

test('reads deflated entries', () => {
  // Compressible, so `zip` really deflates rather than falling back to stored.
  const body = 'x'.repeat(4096);
  const entries = unzipSync(makeZip({ 'a.txt': body, 'sub/b.txt': 'hello' }));
  assert.deepEqual(entries.map((e) => e.name).sort(), ['a.txt', 'sub/b.txt']);
  assert.equal(entries.find((e) => e.name === 'a.txt').data.toString(), body);
  assert.equal(entries.find((e) => e.name === 'sub/b.txt').data.toString(), 'hello');
});

test('reads stored entries and drops directory records', () => {
  const entries = unzipSync(makeZip({ 'sub/b.txt': 'hello' }, ['-0']));
  assert.deepEqual(entries.map((e) => e.name), ['sub/b.txt']);
  assert.equal(entries[0].data.toString(), 'hello');
});

test('rejects something that is not a zip', () => {
  assert.throws(() => unzipSync(Buffer.alloc(64)), /not a zip archive/);
});

test('a skybox export maps onto the six faces', () => {
  const names = ['Skybox/sky_right.png', 'Skybox/sky_left.png', 'Skybox/sky_up.png',
    'Skybox/sky_down.png', 'Skybox/sky_front.png', 'Skybox/sky_back.png'];
  // front is -Z and back is +Z, three's own convention -- measured, not assumed:
  // see CUBE_FACE_ALIASES for the seam scores that settled it.
  assert.deepEqual(names.map(faceFromFilename), ['px', 'nx', 'py', 'ny', 'nz', 'pz']);
});

test('top/bottom are the same faces as up/down, and case does not matter', () => {
  assert.equal(faceFromFilename('SKY-Top.JPG'), 'py');
  assert.equal(faceFromFilename('bottom.webp'), 'ny');
});

test('a Mac resource fork does not claim a face', () => {
  assert.equal(faceFromFilename('__MACOSX/._sky_left.png'), null);
  assert.equal(faceFromFilename('readme.txt'), null);
});
