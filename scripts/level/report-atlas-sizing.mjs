#!/usr/bin/env node
/** Uses a fresh stage1/bake pair. Never delivers a GLB or renders lighting. */
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { MeshoptDecoder } from 'meshoptimizer';
import { parseArgs } from '../lib/out.mjs';
import { bakeWithBlender } from './bakers/blender-cycles.mjs';
import { QUALITY_PRESETS } from './pipeline/quality.mjs';
import { atlasSizing } from './pipeline/atlas-sizing.mjs';
const args = parseArgs();
if (!/^[a-z0-9-]+$/.test(String(args.level ?? ''))) throw new Error('Use --level <id> [--build <fresh stage1 directory>]');
const build = path.resolve(args.build ?? `levels/${args.level}/build`);
const out = path.resolve(args.out ?? path.join(build, 'atlas-sizing'));
const input = await fs.readFile(path.join(build, 'stage1.glb'));
const bake = JSON.parse(await fs.readFile(path.join(build, 'bake.json'), 'utf8'));
await MeshoptDecoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.decoder': MeshoptDecoder});
const report = { level: args.level, generatedAt: new Date().toISOString(), stage1Sha256: createHash('sha256').update(input).digest('hex'), placements: bake.placements.length, excludedPlacements: bake.placements.filter(p => p.bakeLighting === false).length, tiers: {} };
for (const tier of ['medium', 'low']) {
  const work = path.join(out, tier);
  const settings = { ...bake.settings, lightmap: { ...bake.settings.lightmap, ...QUALITY_PRESETS[tier].lightmap, samples: 1 } };
  const { coverage } = await bakeWithBlender({ io, doc: await io.readBinary(input), bake: { ...bake, settings }, outDir: work, layoutOnly: true, onProgress: text => console.log(`[${tier}] ${text}`) });
  report.tiers[tier] = atlasSizing(coverage, JSON.parse(await fs.readFile(path.join(work, 'atlas-layout.json'), 'utf8')));
  await fs.writeFile(path.join(out, 'report.json'), JSON.stringify(report, null, 2));
  console.log(`${tier}: ${report.tiers[tier].pages} × ${report.tiers[tier].pageSize}, ${report.tiers[tier].texelsPerMeter} texels/metre`);
}
