import test from 'node:test';
import assert from 'node:assert/strict';

import { blenderBakeSpec, buildBlenderArgs, blenderLineSink } from './bakers/blender-args.mjs';

const bake = {
  settings: {
    lightmap: { size: 2048, samples: 32, texelsPerMeter: 4 },
    environment: { hemisphere: { sky: '#8797c2', ground: '#2a2620', intensity: 0.5 } },
    sky: { base: { intensity: 1.5, rotationDeg: 30 } },
  },
  lights: [{ role: 'moon', direction: [-0.5, -0.6, 0.5], color: '#b8c7f2', intensity: 0.6 }],
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
