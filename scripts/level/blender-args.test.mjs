import test from 'node:test';
import assert from 'node:assert/strict';

import { blenderBakeSpec, buildBlenderArgs, blenderLineSink } from './bakers/blender-args.mjs';

const bake = {
  settings: {
    lightmap: { size: 2048, samples: 32, texelsPerMeter: 4 },
    environment: { hemisphere: { sky: '#8797c2', ground: '#2a2620', intensity: 0.5 } },
    sky: { base: { intensity: 1.5, rotationDeg: 30 } },
  },
  lights: [
    { id: 'moon', node: 'light_moon', role: 'moon', type: 'directional', direction: [-0.5, -0.6, 0.5], color: '#b8c7f2', intensity: 0.6 },
    { id: 'l-1', node: 'light_l-1', role: null, type: 'point', color: '#ffffff', intensity: 12, position: [1, 3, -2], direction: null, distance: 20, decay: 2 },
    { id: 'l-2', node: 'light_l-2', role: null, type: 'spot', color: '#808080', intensity: 40, position: [0, 4, 0], direction: [0, -1, 0], angle: Math.PI / 6, penumbra: 0.3, distance: 18, decay: 2 },
  ],
};

const flag = (args, name) => args[args.indexOf(name) + 1];
const eqFlag = (args, name) => args.find((a) => a.startsWith(`${name}=`))?.slice(name.length + 1);

test('spec: CPU off by default, GPU+CPU when asked', () => {
  assert.equal(blenderBakeSpec({ bake }).device, 'GPU');
  assert.equal(blenderBakeSpec({ bake, cpu: true }).device, 'GPU+CPU');
});

test('spec: env only when a sky image exists, rotation negated', () => {
  assert.equal(blenderBakeSpec({ bake }).env, null);
  const s = blenderBakeSpec({ bake, hasEnv: true });
  assert.equal(s.env.strength, 1.5);
  assert.equal(s.env.rotation, -30);
});

test('spec: every point and spot lamp goes to the bake in linear colour; the moon does not', () => {
  const { lights } = blenderBakeSpec({ bake });
  assert.deepEqual(lights.map((l) => l.name), ['l-1', 'l-2']);
  assert.equal(lights[0].type, 'point');
  assert.deepEqual(lights[0].color, [1, 1, 1]);
  assert.deepEqual(lights[0].position, [1, 3, -2]);
  assert.equal(lights[0].intensity, 12);
  // #808080 is 0.2158 linear, not 0.5: the Python gets linear, like the moon.
  assert.ok(Math.abs(lights[1].color[0] - 0.2158) < 1e-3, `spot colour linearised, got ${lights[1].color[0]}`);
  assert.equal(lights[1].angle, Math.PI / 6);
  assert.equal(lights[1].penumbra, 0.3);
  assert.deepEqual(lights[1].direction, [0, -1, 0]);
  assert.deepEqual(blenderBakeSpec({ bake: { ...bake, lights: [bake.lights[0]] } }).lights, []);
});

test('args: --lights carries the lamps as inline JSON, identical for both bakers', () => {
  const spec = blenderBakeSpec({ bake });
  const args = buildBlenderArgs(spec, { script: 's', glb: 'g', out: 'o' }, (p) => p);
  const parsed = JSON.parse(eqFlag(args, '--lights'));
  assert.deepEqual(parsed, spec.lights);
  assert.equal(parsed.length, 2);
  // No lamps: an empty array, never a missing flag, so the Python default and
  // the caller agree.
  const none = buildBlenderArgs(blenderBakeSpec({ bake: { ...bake, lights: [] } }), { script: 's', glb: 'g', out: 'o' }, (p) => p);
  assert.equal(eqFlag(none, '--lights'), '[]');
});

test('args: same spec, two path spellings', () => {
  const spec = blenderBakeSpec({ bake, cpu: true, hasEnv: true });
  const rel = { script: 'scripts/level/bakers/bake_lightmap.py', glb: 'levels/x/build/lightmap/in.glb', out: 'levels/x/build/lightmap', env: 'levels/x/build/lightmap/env.png' };
  const container = buildBlenderArgs(spec, rel, (p) => `/repo/${p}`);
  const windows = buildBlenderArgs(spec, rel, (p) => `\\\\wsl.localhost\\U\\repo\\${p.split('/').join('\\')}`);
  assert.deepEqual(container.slice(0, 4), ['-b', '--python', '/repo/scripts/level/bakers/bake_lightmap.py', '--']);
  assert.equal(flag(container, '--glb'), '/repo/levels/x/build/lightmap/in.glb');
  assert.equal(flag(windows, '--glb'), '\\\\wsl.localhost\\U\\repo\\levels\\x\\build\\lightmap\\in.glb');
  assert.equal(eqFlag(windows, '--env'), '\\\\wsl.localhost\\U\\repo\\levels\\x\\build\\lightmap\\env.png');
  // Everything that is not a path is byte-identical between the two.
  const strip = (a) => a.filter((x) => !x.includes('/repo') && !x.includes('wsl.localhost'));
  assert.deepEqual(strip(container), strip(windows));
  assert.equal(flag(container, '--device'), 'GPU+CPU');
  assert.equal(flag(container, '--size'), '2048');
  assert.equal(flag(container, '--samples'), '32');
  assert.equal(eqFlag(container, '--texels-per-meter'), '4');
  assert.equal(eqFlag(container, '--env-strength'), '1.5000');
  assert.equal(eqFlag(container, '--env-rotation'), '-30.000');
  assert.match(eqFlag(container, '--moon'), /^-0\.5000,-0\.6000,0\.5000,/);
});

test('args: no env flags without a sky, device GPU when cpu is off', () => {
  const args = buildBlenderArgs(blenderBakeSpec({ bake }), { script: 's', glb: 'g', out: 'o' }, (p) => p);
  assert.equal(args.some((a) => a.startsWith('--env')), false);
  assert.equal(flag(args, '--device'), 'GPU');
});

test('args: refuses an unknown device', () => {
  assert.throws(() => buildBlenderArgs({ ...blenderBakeSpec({ bake }), device: 'TPU' }, { script: 's', glb: 'g', out: 'o' }, (p) => p), /unknown cycles device/);
});

test('line sink: forwards [thaikit] lines, keeps a tail, handles CRLF and split chunks', () => {
  const got = [];
  const sink = blenderLineSink((l) => got.push(l), 3);
  sink.feed('Blender 5.2\r\n[thaikit] cycles dev');
  sink.feed('ice: OPTIX\n[thaikit] 10%\nnoise\nmore\n');
  assert.deepEqual(got, ['cycles device: OPTIX', '10%']);
  assert.equal(sink.tail(), '[thaikit] 10%\nnoise\nmore');
});
