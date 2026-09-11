import test from 'node:test';
import assert from 'node:assert/strict';
import { applyLightSidecar } from './light-sidecar.mjs';
import { blenderBakeSpec } from '../bakers/blender-args.mjs';

test('disabled lamps stay disabled unless explicitly requested', () => {
  const make = () => ({ lights: [{ role: 'moon' }], source: {} });
  const light = { label: 'parked-headlight', class: 'PointLightComponent', visible: false, intensity_units: 'CANDELAS', colorLinear: [1,1,1], intensity: 10 };
  const bake = make();
  const inventory = applyLightSidecar(bake, { lights: [light] });
  assert.equal(bake.lights.length, 1);
  assert.deepEqual(inventory.disabled, [light.label]);
  const explicit = make();
  assert.equal(applyLightSidecar(explicit, { lights: [light] }, 1, null, true).lamps, 1);
});

test('complete lighting retains rect dimensions, color, shadows and SkyLight through the Cycles spec', () => {
  const bake = { lights: [{ role: 'moon', type: 'directional', color: '#ffffff', shadow: {} }, { type: 'point', id: 'old' }], settings: {}, source: {} };
  const light = { label: 'temple', class: 'RectLightComponent', intensity_units: 'CANDELAS', intensity: 400, colorLinear: [1, .5, .25], source_width: 900, source_height: 300, position: [1, 2, 3], direction: [1, 0, 0], up: [0, 1, 0], cast_shadows: false };
  const result = applyLightSidecar(bake, { lights: [light, { class: 'SkyLightComponent', label: 'sky', intensity: 2, colorLinear: [1, .8, .6] }] }, .25, { mapSize: 4096 });
  assert.deepEqual(result, { lamps: 1, rect: 1, sky: 1, moon: 1 });
  assert.equal(bake.lights[0].shadow.mapSize, 4096);
  const spec = blenderBakeSpec({ bake, hasEnv: true });
  assert.equal(spec.lights.length, 1);
  assert.equal(spec.lights[0].shape, 'rectangle');
  assert.equal(spec.lights[0].sourceWidth, 9);
  assert.equal(spec.lights[0].sourceHeight, 3);
  assert.equal(spec.lights[0].intensity, 100);
  assert.equal(spec.lights[0].castShadow, false);
  assert.deepEqual(spec.lights[0].color, [1, .5, .25]);
  assert.equal(spec.env.strength, .5);
  assert.throws(() => applyLightSidecar(bake, { lights: [light, light] }), /Duplicate/);
});
