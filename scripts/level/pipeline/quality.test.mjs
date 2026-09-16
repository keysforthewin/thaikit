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

test('presets: high increases samples while keeping the medium atlas budget', () => {
  assert.deepEqual(QUALITY_PRESETS.low, { baker: 'blender', textures: { maxSize: 1024 }, lightmap: { size: 4096, samples: 128, noiseThreshold: 0, texelsPerMeter: 6, maxAtlases: 32 } });
  assert.deepEqual(QUALITY_PRESETS.medium, { baker: 'blender', lightmap: { size: 4096, samples: 2048, noiseThreshold: 0, texelsPerMeter: 12, maxAtlases: 32 } });
  assert.deepEqual(QUALITY_PRESETS.high, { baker: 'blender', lightmap: { size: 4096, samples: 16384, noiseThreshold: 0, texelsPerMeter: 12, maxAtlases: 32 } });
});

test('the texture budget caps a tier below the level and never raises it', () => {
  assert.deepEqual(textureBudgetFor({}, null), { maxSize: 2048, maxFace: null });
  assert.deepEqual(textureBudgetFor({ maxSize: 2048 }, QUALITY_PRESETS.low), { maxSize: 1024, maxFace: null });
  assert.deepEqual(textureBudgetFor({ maxSize: 4096 }, QUALITY_PRESETS.medium), { maxSize: 4096, maxFace: null });
  assert.deepEqual(textureBudgetFor({ maxSize: 512 }, QUALITY_PRESETS.low), { maxSize: 512, maxFace: null });
  assert.deepEqual(textureBudgetFor({ maxSize: 4096 }, QUALITY_PRESETS.high), { maxSize: 4096, maxFace: null });
});
