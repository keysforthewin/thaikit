#!/usr/bin/env node
/**
 * Bake a level: the editor's raw scene GLB in, one self-contained GLB out.
 *
 * Stages, each checkpointed under levels/<id>/build/ so --resume-from works:
 *   1  normalise + partition + merge   build/stage1.glb
 *   2  lightmap (Blender Cycles)       build/stage2.glb, build/lightmap/
 *   3  LOD tiers                       build/stage3.glb
 *   4  KTX2 textures, meshopt, manifest -> build/level.glb, then verify.json
 *
 * Progress goes to stderr as JSON lines (the server relays them as SSE); the
 * result is one JSON line on stdout.
 *
 * Usage:
 *   node scripts/level/bake-level.mjs --level <id> [--baker blender|none] [--resume-from 2|3|4]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { NodeIO, PropertyType, Logger } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, flatten, join, weld, meshopt, prune } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer';

import { levelDir, toRepoRelative } from '@thaikit/registry-core';

import { ok, fail, parseArgs } from '../lib/out.mjs';
import { readTags, stripEditorExtras, foldBaseColorIntoVertexColor, normaliseAttributes } from './pipeline/normalise.mjs';
import { partitionCells } from './pipeline/partition.mjs';
import { buildLodTiers } from './pipeline/lod.mjs';
import { compressTextures, addLightmapTexture } from './pipeline/textures.mjs';
import { writeManifest } from './pipeline/manifest.mjs';
import { prepareSkyImages, addSkyTextures } from './pipeline/sky.mjs';
import { bakeWithBlender } from './bakers/blender-cycles.mjs';
import { findKtx, KTX_INSTALL_HINT } from './pipeline/ktx2.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const VERSION = '0.1.0';

const progress = (phase, message, extra = {}) => process.stderr.write(`${JSON.stringify({ phase, message, ...extra })}\n`);

async function makeIO() {
  await MeshoptDecoder.ready;
  await MeshoptEncoder.ready;
  // Silent: gltf-transform logs to stdout, and stdout here is one JSON line.
  return new NodeIO().setLogger(new Logger(Logger.Verbosity.SILENT)).registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder, 'meshopt.encoder': MeshoptEncoder });
}

function countPrims(doc, prefix) {
  let prims = 0;
  let tris = 0;
  for (const node of doc.getRoot().listNodes()) {
    if (!node.getName().startsWith(prefix)) continue;
    node.traverse((n) => {
      const mesh = n.getMesh();
      if (!mesh) return;
      for (const p of mesh.listPrimitives()) { prims += 1; tris += (p.getIndices()?.getCount() ?? p.getAttribute('POSITION').getCount()) / 3; }
    });
  }
  return { prims, tris: Math.round(tris) };
}

async function main() {
  const args = parseArgs();
  const id = String(args.level ?? '');
  if (!id) return fail('need --level <id>');
  const baker = String(args.baker ?? 'blender');
  const resumeFrom = Number(args['resume-from'] ?? 1);
  // Test-time overrides for the lightmap; the level's own settings otherwise.
  const lightmapOverride = { size: args['lightmap-size'] ? Number(args['lightmap-size']) : null, samples: args.samples ? Number(args.samples) : null };
  const buildDir = path.join(levelDir(id), 'build');
  const rawFile = path.join(buildDir, 'raw.glb');
  const stage = (n) => path.join(buildDir, `stage${n}.glb`);
  const bakeFile = path.join(buildDir, 'bake.json');

  const ktx = await findKtx();
  if (!ktx) throw new Error(KTX_INSTALL_HINT);

  const io = await makeIO();
  let doc;
  let bake;
  let lodStats = [];
  let lightmapPng = null;

  // ---- stage 1 -------------------------------------------------------------
  if (resumeFrom <= 1) {
    progress('read', `reading ${toRepoRelative(rawFile)}`);
    doc = await io.read(rawFile);
    doc.setLogger(new Logger(Logger.Verbosity.SILENT));
    const scene = doc.getRoot().listScenes()[0];
    bake = scene.getExtras()?.thaikitBake;
    if (!bake) throw new Error('raw.glb carries no scene.extras.thaikitBake; export it from the level editor');
    await fs.writeFile(bakeFile, JSON.stringify(bake, null, 2));
    scene.setExtras({});

    const before = countPrims(doc, '');
    progress('normalise', `${before.prims} primitives, ${before.tris.toLocaleString()} triangles in`);
    readTags()(doc);
    stripEditorExtras()(doc);
    await doc.transform(dedup({ propertyTypes: [PropertyType.ACCESSOR, PropertyType.TEXTURE, PropertyType.MESH] }));
    foldBaseColorIntoVertexColor()(doc);
    normaliseAttributes()(doc);
    await doc.transform(dedup({ propertyTypes: [PropertyType.MATERIAL, PropertyType.TEXTURE] }));
    progress('normalise', `${doc.getRoot().listMaterials().length} distinct material signatures`);
    await doc.transform(flatten({ cleanup: false }));
    // Custom stages are called directly: doc.transform() hands back the document, not their results.
    const { cells, dynamic, stray } = partitionCells({ bake })(doc);
    progress('partition', `${cells?.size ?? 0} cells, ${dynamic?.size ?? 0} dynamic objects${stray?.length ? `, ${stray.length} untagged nodes dropped` : ''}`);
    await doc.transform(join({ keepMeshes: false, keepNamed: false }), weld(), prune({ propertyTypes: [PropertyType.NODE, PropertyType.MESH, PropertyType.ACCESSOR, PropertyType.MATERIAL], keepLeaves: true, keepAttributes: true }));
    const after = countPrims(doc, 'cell_');
    progress('merge', `static geometry is now ${after.prims} draw calls (${after.tris.toLocaleString()} triangles) across ${cells?.size ?? 0} cells`);
    await io.write(stage(1), doc);
  } else {
    bake = JSON.parse(await fs.readFile(bakeFile, 'utf8'));
    doc = await io.read(stage(Math.min(resumeFrom - 1, 3)));
    doc.setLogger(new Logger(Logger.Verbosity.SILENT));
  }

  // ---- stage 2: lightmap -----------------------------------------------------
  if (resumeFrom <= 2) {
    if (lightmapOverride.size || lightmapOverride.samples) {
      bake.settings = { ...bake.settings, lightmap: { ...(bake.settings?.lightmap ?? {}), ...(lightmapOverride.size ? { size: lightmapOverride.size } : {}), ...(lightmapOverride.samples ? { samples: lightmapOverride.samples } : {}) } };
    }
    if (baker === 'blender' && bake.settings?.lightmap?.enabled !== false) {
      const result = await bakeWithBlender({ io, doc, stage1: stage(1), bake, outDir: path.join(buildDir, 'lightmap'), onProgress: (m) => progress('lightmap', m) });
      doc = result.doc;
      lightmapPng = result.lightmapPng;
      await fs.writeFile(path.join(buildDir, 'lightmap', 'lightmap.png'), lightmapPng);
    } else {
      progress('lightmap', 'skipped (baker: none); static geometry will be lit by the real-time moon');
    }
    await io.write(stage(2), doc);
  } else {
    try { lightmapPng = await fs.readFile(path.join(buildDir, 'lightmap', 'lightmap.png')); } catch { lightmapPng = null; }
  }

  // ---- stage 3: LOD ----------------------------------------------------------
  if (resumeFrom <= 3) {
    progress('lod', `simplifying: lod1 ×${bake.settings?.lod?.lod1Ratio ?? 0.4}, lod2 ×${bake.settings?.lod?.lod2Ratio ?? 0.15} (sloppy)`);
    lodStats = await buildLodTiers({ lod1Ratio: bake.settings?.lod?.lod1Ratio ?? 0.4, lod2Ratio: bake.settings?.lod?.lod2Ratio ?? 0.15 })(doc);
    const t = lodStats.reduce((acc, s) => acc.map((v, i) => v + s.triangles[i]), [0, 0, 0]);
    progress('lod', `triangles per tier: ${t.map((n) => n.toLocaleString()).join(' / ')}`);
    await fs.writeFile(path.join(buildDir, 'lod.json'), JSON.stringify(lodStats));
    await io.write(stage(3), doc);
  } else {
    lodStats = JSON.parse(await fs.readFile(path.join(buildDir, 'lod.json'), 'utf8'));
  }

  // ---- stage 4: textures, compression, manifest ----------------------------
  const tex = bake.settings?.textures ?? {};
  const { count } = await compressTextures({
    colorMode: tex.colorMode ?? 'etc1s', dataMode: tex.dataMode ?? 'uastc', maxSize: tex.maxSize ?? 2048,
    onProgress: (m, i, n) => progress('textures', `${m} (${i}/${n})`),
  })(doc);
  let lightmapImage = null;
  if (lightmapPng) lightmapImage = await addLightmapTexture(doc, lightmapPng, { onProgress: (m) => progress('textures', m) });

  // The sky's images are sidecars beside the project; the shipped level is one
  // file, so they are folded in here as unreferenced KTX2, the lightmap's
  // arrangement. Both picture modes ship as one KTX2 with faceCount 6.
  const skySettings = bake.settings?.sky ?? null;
  const skyImages = await prepareSkyImages(id, skySettings, { onProgress: (m) => progress('textures', m) });
  for (const note of skyImages.notes) progress('textures', `sky: ${note}`);
  const skyIndices = await addSkyTextures(doc, skyImages, {
    colorMode: tex.colorMode ?? 'etc1s', maxSize: tex.maxSize ?? 2048,
    onProgress: (m) => progress('textures', m),
  });

  const extra = [lightmapImage != null && 'lightmap', skyIndices.base != null && 'sky', skyIndices.clouds != null && 'clouds'].filter(Boolean);
  progress('textures', `${count} texture(s) as KTX2${extra.length ? ` + ${extra.join(' + ')}` : ''}`);

  progress('compress', 'meshopt (EXT_meshopt_compression, medium)');
  await doc.transform(meshopt({ encoder: MeshoptEncoder, level: 'medium' }));

  const manifest = writeManifest({ bake, lodStats, lightmapImage, skyIndices, generator: { tool: 'thaikit', version: VERSION } })(doc);
  await doc.transform(prune({ propertyTypes: [PropertyType.NODE, PropertyType.MESH, PropertyType.ACCESSOR, PropertyType.MATERIAL], keepLeaves: true, keepAttributes: true }));

  const outFile = path.join(buildDir, 'level.glb');
  await io.write(outFile, doc);
  const bytes = (await fs.stat(outFile)).size;
  progress('write', `${toRepoRelative(outFile)} (${(bytes / 1048576).toFixed(1)} MB)`);

  // ---- verify ----------------------------------------------------------------
  const verify = await new Promise((resolve) => {
    const child = spawn(process.execPath, [path.join(here, 'verify-level.mjs'), '--level', id], { stdio: ['ignore', 'pipe', 'inherit'] });
    let out = '';
    child.stdout.on('data', (d) => { out += d; });
    child.on('close', () => { try { resolve(JSON.parse(out.trim().split('\n').pop())); } catch { resolve({ ok: false, failures: ['verify produced no result'] }); } });
  });
  await fs.writeFile(path.join(buildDir, 'verify.json'), JSON.stringify(verify, null, 2));
  progress('verify', verify.ok ? 'passed' : `${verify.failures?.length ?? '?'} failure(s)`);

  const dc = lodStats.reduce((a, s) => a.map((v, i) => v + s.drawCalls[i]), [0, 0, 0]);
  const tri = lodStats.reduce((a, s) => a.map((v, i) => v + s.triangles[i]), [0, 0, 0]);
  return ok({
    level: id, file: toRepoRelative(outFile), bytes, cells: manifest.cells.list.length, drawCalls: dc, triangles: tri,
    textures: count, lightmap: lightmapImage != null, colliders: manifest.colliders.reduce((n, c) => n + c.shapes.length, 0), dynamic: manifest.dynamic.length,
    verify,
  });
}

main().catch((err) => { progress('failed', err.message); fail(err); });
