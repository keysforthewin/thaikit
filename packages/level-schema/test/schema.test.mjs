import test from 'node:test';
import assert from 'node:assert/strict';

import { LevelExtras, PlacementExtras, NodeExtras, ManifestExtras, SkySettings, emptyLevelGltf } from '../src/index.js';

test('an empty level validates and carries one moon', () => {
  const gltf = emptyLevelGltf({ id: 'soi-1', name: 'Soi 1' });
  const extras = LevelExtras.parse(gltf.scenes[0].extras.thaikitLevel);
  assert.equal(extras.settings.cellSize, 24);
  assert.equal(gltf.nodes[0].extras.tk.role, 'moon');
  assert.equal(NodeExtras.parse(gltf.nodes[0].extras.tk).kind, 'light');
});

test('placement refs must be pack-qualified', () => {
  assert.throws(() => PlacementExtras.parse({ kind: 'placement', ref: 'honda-wave' }));
  const p = PlacementExtras.parse({ kind: 'placement', ref: '@thaikit/honda-wave' });
  assert.equal(p.static, null);
  assert.equal(p.castShadow, true);
});

test('a manifest round-trips its defaults', () => {
  const m = ManifestExtras.parse({
    schemaVersion: 1, id: 'soi-1', name: 'Soi 1', generatedAt: new Date().toISOString(),
    generator: { tool: 'thaikit', version: '0' },
    bounds: { min: [0, 0, 0], max: [1, 1, 1] },
    cells: { size: 24, list: [] }, lod: { distances: [60, 140], hysteresis: 8 },
    ambient: { sky: '#8797c2', ground: '#2a2620', intensity: 0.35 },
  });
  assert.equal(m.lightmap, null);
  assert.equal(m.units, 'm');
});

test('a level with no sky settings still gets the defaults, off', () => {
  const gltf = emptyLevelGltf({ id: 'soi-1', name: 'Soi 1' });
  const { settings } = LevelExtras.parse(gltf.scenes[0].extras.thaikitLevel);
  assert.equal(settings.sky.enabled, false);
  assert.equal(settings.sky.base.mode, 'none');
  assert.equal(settings.sky.stars.enabled, true);
  assert.equal(settings.sky.clouds.driftDegPerMin, 3);
});

test('a cube map records one filename per face', () => {
  const s = SkySettings.parse({ enabled: true, base: { mode: 'cube', faces: { px: 'px.jpg', nx: 'nx.png' } } });
  assert.equal(s.base.faces.px, 'px.jpg');
  assert.equal(s.base.file, null);
  assert.throws(() => SkySettings.parse({ base: { mode: 'sphere' } }));
  assert.throws(() => SkySettings.parse({ base: { mode: 'cube', faces: { up: 'up.jpg' } } }));
});

// A level baked before the sky existed has no `sky` key, and must still parse
// at schemaVersion 1 -- which is why the field is nullable with a default
// rather than a bump of MANIFEST_SCHEMA_VERSION.
test('a manifest baked before the sky still parses', () => {
  const m = ManifestExtras.parse({
    schemaVersion: 1, id: 'soi-1', name: 'Soi 1', generatedAt: new Date().toISOString(),
    generator: { tool: 'thaikit', version: '0' },
    bounds: { min: [0, 0, 0], max: [1, 1, 1] },
    cells: { size: 24, list: [] }, lod: { distances: [60, 140], hysteresis: 8 },
    ambient: { sky: '#8797c2', ground: '#2a2620', intensity: 0.35 },
  });
  assert.equal(m.sky, null);
});

test('a baked sky carries image indices, not filenames', () => {
  const m = ManifestExtras.parse({
    schemaVersion: 1, id: 'soi-1', name: 'Soi 1', generatedAt: new Date().toISOString(),
    generator: { tool: 'thaikit', version: '0' },
    bounds: { min: [0, 0, 0], max: [1, 1, 1] },
    cells: { size: 24, list: [] }, lod: { distances: [60, 140], hysteresis: 8 },
    ambient: { sky: '#8797c2', ground: '#2a2620', intensity: 0.35 },
    sky: { base: { image: 3 }, clouds: { image: 4, opacity: 0.4 }, stars: { brightness: 2 } },
  });
  assert.equal(m.sky.base.image, 3);
  assert.equal(m.sky.base.intensity, 1);
  assert.equal(m.sky.clouds.opacity, 0.4);
  assert.equal(m.sky.stars.brightness, 2);
  assert.equal(m.sky.stars.color, '#dfe6ff');
});
