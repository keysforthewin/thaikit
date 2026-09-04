#!/usr/bin/env node
/**
 * The guard on "the lamps are in the bake at the right brightness".
 *
 * A baked point light lands in the atlas as an irradiance texel that three
 * multiplies by albedo/pi, the same way it treats a live lamp's I/d^2 -- so
 * a static wall beside a lamp and a dynamic crate beside it must read the same.
 * The conversion from three's candela to Blender's watts is derived in
 * bake_lightmap.py (P = 4 pi^2 I) and derivations are cheap to get wrong by a
 * factor of pi, so this measures it: one 10 x 10 m quad, a black world, one
 * white point lamp of I candela at h metres above its centre, and the
 * brightest texel in the atlas must be I / h^2.
 *
 * Self-contained: it writes its own in.glb (a cell_0_0/lod0 quad, the shape the
 * baker walks) and runs bake_lightmap.py over it, so it needs no level.
 *
 *   node scripts/level/calibrate-lamp-bake.mjs [--intensity 10] [--height 4] [--size 512] [--samples 32]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';

import { NodeIO } from '@gltf-transform/core';

import { SCRATCH_DIR } from '@thaikit/registry-core';
import { blenderExe, toBlenderPath } from '../lib/blender.mjs';
import { ok, fail, log, parseArgs } from '../lib/out.mjs';
import { readAtlas, statsOf } from './probe-lightmap.mjs';

const SCRIPT = path.resolve(path.dirname(new URL(import.meta.url).pathname), 'bakers/bake_lightmap.py');

function run(exe, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(exe, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    const tail = [];
    const feed = (chunk) => {
      for (const line of chunk.toString().split('\n')) {
        if (!line.trim()) continue;
        tail.push(line);
        if (tail.length > 60) tail.shift();
        if (line.startsWith('[thaikit]')) log(`    ${line.slice(10).trim()}`);
      }
    };
    child.stdout.on('data', feed);
    child.stderr.on('data', feed);
    child.on('error', reject);
    child.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`blender exited ${code}:\n${tail.join('\n')}`))));
  });
}

/** One `side` x `side` metre quad at y=0 under cell_0_0/lod0, facing +Y. */
async function writeQuad(file, side) {
  const doc = new (await import('@gltf-transform/core')).Document();
  const buffer = doc.createBuffer();
  const h = side / 2;
  const position = doc.createAccessor().setType('VEC3').setBuffer(buffer)
    .setArray(new Float32Array([-h, 0, -h, h, 0, -h, h, 0, h, -h, 0, h]));
  const normal = doc.createAccessor().setType('VEC3').setBuffer(buffer)
    .setArray(new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]));
  const uv = doc.createAccessor().setType('VEC2').setBuffer(buffer)
    .setArray(new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]));
  // Counter-clockwise seen from +Y, so the face normal agrees with NORMAL.
  const indices = doc.createAccessor().setType('SCALAR').setBuffer(buffer)
    .setArray(new Uint16Array([0, 2, 1, 0, 3, 2]));
  const material = doc.createMaterial('calib').setBaseColorFactor([1, 1, 1, 1]).setRoughnessFactor(1).setMetallicFactor(0);
  const prim = doc.createPrimitive().setAttribute('POSITION', position).setAttribute('NORMAL', normal)
    .setAttribute('TEXCOORD_0', uv).setIndices(indices).setMaterial(material);
  const mesh = doc.createMesh('quad').addPrimitive(prim);
  const quad = doc.createNode('quad').setMesh(mesh);
  const lod0 = doc.createNode('lod0').addChild(quad);
  const cell = doc.createNode('cell_0_0').addChild(lod0);
  doc.createScene('calib').addChild(cell);
  await new NodeIO().write(file, doc);
}

async function main() {
  const args = parseArgs();
  const intensity = Number(args.intensity ?? 10);
  const height = Number(args.height ?? 4);
  const size = Number(args.size ?? 512);
  const samples = Number(args.samples ?? 32);
  const side = 10;

  const dir = path.join(SCRATCH_DIR, '_calib', 'lamp');
  await fs.mkdir(dir, { recursive: true });
  const inGlb = path.join(dir, 'in.glb');
  await writeQuad(inGlb, side);

  const exe = await blenderExe();
  if (!exe) return fail('no Blender executable found (set THAIKIT_BLENDER_EXE)');

  const lamp = { name: 'calib', type: 'point', position: [0, height, 0], direction: null, color: [1, 1, 1], intensity, angle: null, penumbra: null, distance: null, decay: 2 };
  const argv = [
    '-b', '--python', toBlenderPath(SCRIPT), '--',
    '--glb', toBlenderPath(inGlb), '--out', toBlenderPath(dir),
    '--size', String(size), '--samples', String(samples),
    // A black world and a moon that only pass 2 sees: pass 1 has ONE emitter.
    '--moon=-0.4,-1,-0.3,0.72,0.78,0.95,1.0',
    '--sky=0,0,0,0', '--ground=0,0,0',
    '--exposure', '1', '--device', String(args.device ?? 'GPU'),
    `--lights=${JSON.stringify([lamp])}`,
  ];
  log(`one white point lamp, ${intensity} cd at ${height} m over a ${side} m quad, ${size}² / ${samples} samples`);
  await run(exe, argv);

  const atlas = await readAtlas(path.join(dir, 'lightmap.png'));
  const stats = statsOf(atlas);
  const range = JSON.parse(await fs.readFile(path.join(dir, 'lightmap.json'), 'utf8')).range ?? 1;
  const measured = stats.channels.g.max * range;
  const expected = intensity / (height * height);
  const ratio = measured / expected;
  // Cycles is a sampler and the atlas is quantised, so this is a tolerance on
  // the brightest texel, not an equality. A miss by ~pi (0.318 or 3.14) is
  // the unit conversion; anything else is the plumbing.
  const tolerance = Number(args.tolerance ?? 0.1);
  const passed = Math.abs(ratio - 1) <= tolerance;

  // The mean over the whole quad is a second, integral reading of the same
  // constant: E(r) = I h / (h^2 + r^2)^1.5 averaged over the square. Reported
  // rather than gated, because the gutter dilation smears the island's edge.
  let sum = 0;
  const N = 200;
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
    const x = ((i + 0.5) / N - 0.5) * side;
    const z = ((j + 0.5) / N - 0.5) * side;
    sum += (intensity * height) / (height * height + x * x + z * z) ** 1.5;
  }
  const expectedMean = sum / (N * N);
  const measuredMean = stats.channels.g.mean * range;

  log(`brightest texel ${measured.toFixed(4)} (range ${range}) against I/h² = ${expected.toFixed(4)}: ratio ${ratio.toFixed(3)} -> ${passed ? 'MATCH' : 'MISMATCH'}`);
  log(`mean over covered texels ${measuredMean.toFixed(4)} against the analytic ${expectedMean.toFixed(4)} (ratio ${(measuredMean / expectedMean).toFixed(3)}; informational)`);
  if (!passed) {
    if (Math.abs(ratio - 1 / Math.PI) < 0.1) log('the bake is pi too DARK: LAMP_WATTS_PER_CANDELA in bake_lightmap.py is short a factor of pi');
    else if (Math.abs(ratio - Math.PI) < 0.35) log('the bake is pi too BRIGHT: LAMP_WATTS_PER_CANDELA in bake_lightmap.py carries one pi too many');
    else log('neither pi nor 1: check the lamp position swizzle, the world strength, and that pass 1 shows the lamps');
  }
  ok({ intensity, height, size, samples, range, measured: +measured.toFixed(4), expected: +expected.toFixed(4), ratio: +ratio.toFixed(4), measuredMean: +measuredMean.toFixed(4), expectedMean: +expectedMean.toFixed(4), coverage: stats.coverage, tolerance, passed, dir });
  if (!passed) process.exitCode = 1;
}

main().catch((err) => fail(err));
