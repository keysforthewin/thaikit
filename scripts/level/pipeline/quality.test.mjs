import test from 'node:test';
import assert from 'node:assert/strict';

import { QUALITIES, QUALITY_PRESETS, assertQuality, textureBudgetFor, withQuality } from './quality.mjs';
import { exportNameOf } from './build-dir.mjs';

test('the three tiers deliver three different files and never the plain name', () => {
  assert.equal(exportNameOf('bangkoksoi'), 'bangkoksoi.glb');
  assert.deepEqual(QUALITIES.map((q) => exportNameOf('bangkoksoi', null, q)), ['bangkoksoi_low.glb', 'bangkoksoi_medium.glb', 'bangkoksoi_high.glb']);
  assert.equal(exportNameOf('bangkoksoi', '3_-2', 'low'), 'bangkoksoi_3_-2_low.glb');
});

test('withQuality stamps before the extension and leaves a bare directory name stamped at the end', () => {
  assert.equal(withQuality('level.glb', 'medium'), 'level_medium.glb');
  assert.equal(withQuality('verify.json', 'high'), 'verify_high.json');
  assert.equal(withQuality('lightmap', 'low'), 'lightmap_low');
  assert.equal(withQuality('level.glb', null), 'level.glb');
});

test('assertQuality accepts the three words and nothing else', () => {
  assert.equal(assertQuality(null), null);
  assert.equal(assertQuality('medium'), 'medium');
  assert.throws(() => assertQuality('ultra'), /--quality must be one of low\|medium\|high/);
});

test('presets: low and medium are converged Cycles tiers, high defers to the level', () => {
  assert.deepEqual(QUALITY_PRESETS.low, { baker: 'blender', lightmap: { size: 4096, samples: 4096, noiseThreshold: 0 } });
  assert.deepEqual(QUALITY_PRESETS.medium, { baker: 'blender', lightmap: { size: 8192, samples: 4096, noiseThreshold: 0 } });
  assert.deepEqual(QUALITY_PRESETS.high, { baker: 'blender', lightmap: {} });
});

test('the texture budget caps a tier below the level and never raises it', () => {
  assert.deepEqual(textureBudgetFor({}, null), { maxSize: 2048, maxFace: null });
  assert.deepEqual(textureBudgetFor({ maxSize: 2048 }, QUALITY_PRESETS.low), { maxSize: 2048, maxFace: null });
  assert.deepEqual(textureBudgetFor({ maxSize: 512 }, QUALITY_PRESETS.low), { maxSize: 512, maxFace: null });
  assert.deepEqual(textureBudgetFor({ maxSize: 4096 }, QUALITY_PRESETS.high), { maxSize: 4096, maxFace: null });
});
