#!/usr/bin/env node
/**
 * The guard on "the sky lights the bake".
 *
 * Feeding Cycles the level's own sky replaced a flat `Background` colour with
 * an image, and that is exactly the kind of change that silently re-exposes
 * every level ever tuned. The check that catches it is cheap and exact: a FLAT
 * image at a given linear value must bake identically to the flat colour it
 * replaces. If it does not, the strength, the colour space or the texture
 * plumbing is wrong, and no amount of looking at a pretty render will say so.
 *
 * Runs the bake twice over an existing `build/lightmap/in.glb` -- once down the
 * old `--sky` path, once down the new `--env` path -- and diffs the atlases.
 *
 *   node scripts/level/calibrate-sky-bake.mjs --level thepurge [--size 256] [--samples 8]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';

import sharp from 'sharp';

import { levelDir } from '@thaikit/registry-core';
import { blenderExe, toBlenderPath } from '../lib/blender.mjs';
import { ok, fail, log, parseArgs } from '../lib/out.mjs';
import { readAtlas, diffOf } from './probe-lightmap.mjs';

const SCRIPT = path.resolve(path.dirname(new URL(import.meta.url).pathname), 'bakers/bake_lightmap.py');

const srgbToLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);

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

async function main() {
  const args = parseArgs();
  const id = String(args.level ?? '');
  if (!id) return fail('need --level <id>');
  const size = Number(args.size ?? 256);
  const samples = Number(args.samples ?? 8);

  const build = path.join(levelDir(id), 'build');
  const inGlb = path.join(build, 'lightmap', 'in.glb');
  try { await fs.access(inGlb); } catch { return fail(`no ${inGlb}; run a bake first so there is a scene to calibrate against`); }

  const dir = path.join(build, 'calib');
  await fs.mkdir(path.join(dir, 'sky'), { recursive: true });
  await fs.mkdir(path.join(dir, 'env'), { recursive: true });

  // Pick the BYTE first, then compute the linear value Blender will decode it
  // to, so the two runs cannot disagree over a rounding difference.
  const byte = 137;
  const linear = srgbToLinear(byte / 255);
  const flat = path.join(dir, 'flat.png');
  await sharp(Buffer.alloc(64 * 32 * 3, byte), { raw: { width: 64, height: 32, channels: 3 } }).png().toFile(flat);

  const exe = await blenderExe();
  if (!exe) return fail('no Blender executable found (set THAIKIT_BLENDER_EXE)');

  const common = [
    '-b', '--python', toBlenderPath(SCRIPT), '--',
    '--glb', toBlenderPath(inGlb),
    '--size', String(size), '--samples', String(samples),
    '--moon=-0.4,-1,-0.3,0.72,0.78,0.95,1.0',
    `--sky=${linear.toFixed(6)},${linear.toFixed(6)},${linear.toFixed(6)},1.0`,
    // GROUND EQUAL TO SKY, deliberately. With no --env the world is the
    // hemisphere ramp, which is darker below; comparing that to a uniform image
    // measures the ramp, not the image path. Flattening the ramp by giving it
    // one colour is what makes this a like-for-like test -- the first run of
    // this check reported the image 10% bright with blue most inflated and red
    // least, which is precisely the warm ground colour showing through.
    `--ground=${linear.toFixed(6)},${linear.toFixed(6)},${linear.toFixed(6)}`,
  ];

  log(`flat colour, linear ${linear.toFixed(6)} (sRGB byte ${byte}), ${size}² / ${samples} samples`);
  log('  A: --sky with ground == sky, i.e. the flat world it used to be)');
  await run(exe, [...common, '--out', toBlenderPath(path.join(dir, 'sky'))]);
  log('  B: --env (the same value as an image)');
  await run(exe, [...common, '--out', toBlenderPath(path.join(dir, 'env')), `--env=${toBlenderPath(flat)}`, '--env-strength=1.0']);

  const a = await readAtlas(path.join(dir, 'env', 'lightmap.png'));
  const b = await readAtlas(path.join(dir, 'sky', 'lightmap.png'));
  const diff = diffOf(a, b);
  // Cycles is a sampler: two runs of the SAME scene differ by sampling noise,
  // so this is a tolerance on the mean, not an equality.
  const tolerance = Number(args.tolerance ?? 0.01);
  const passed = !diff.error && diff.rgbMeanAbs <= tolerance;

  log(`rgb mean|delta| ${diff.rgbMeanAbs} (tolerance ${tolerance}) -> ${passed ? 'MATCH' : 'MISMATCH'}`);
  for (const [name, d] of Object.entries(diff.perChannel ?? {})) {
    log(`  ${name}  mean ${d.meanAbs}  p99 ${d.p99}  ratio env/sky ${d.ratio}`);
  }
  if (!passed) {
    log('the image path is not reproducing the colour path: check --env-strength, the image');
    log('colour space (sRGB), and that pass 1 is not overwriting the world it built');
  }
  ok({ level: id, size, samples, linear: +linear.toFixed(6), tolerance, passed, ...diff });
  if (!passed) process.exitCode = 1;
}

main().catch((err) => fail(err));
