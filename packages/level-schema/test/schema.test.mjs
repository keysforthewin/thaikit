import test from 'node:test';
import assert from 'node:assert/strict';

import { LevelExtras, PlacementExtras, NodeExtras, ManifestExtras, emptyLevelGltf } from '../src/index.js';

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
