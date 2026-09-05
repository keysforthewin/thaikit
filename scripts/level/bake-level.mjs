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
 *   node scripts/level/bake-level.mjs --level <id> [--baker blender|blender-host|unreal|none] [--cpu] [--resume-from 2|3|4] [--cell <ix>_<iz>]
 *
 * `--cell` is the QUICK EXPORT: the editor has already cut the raw scene down
 * to one cell (see buildExportScene), and this run builds it under
 * build/cell_<key>/ and delivers it as <id>_<key>.glb, so a full build is never
 * touched. The raw carries the cell it was cut to and must agree.
 *
 * `unreal` ADOPTS a lightmap instead of baking one: `import-unreal-level.mjs`
 * has already written build/lightmap/lightmap.png from the level's
 * EPIC_lightmap_textures and baked its UVs into every primitive's TEXCOORD_1,
 * so stage 1 keeps that attribute and stage 2 only reads the files back.
 * `blender` is the container's Linux Blender (CUDA); `blender-host` hands the
 * Blender step to the host agent (`npm run level:bake-agent`, Windows Blender,
 * OptiX). `--cpu` adds the CPU devices to the GPU -- off by default, because
 * hybrid rendering on a fast card is usually slower than the GPU alone.
 * SIGTERM cancels: the Blender child (or the host agent's request) is taken
 * down with it and the process exits 130.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { NodeIO, PropertyType, Logger } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, flatten, join, weld, meshopt, prune } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer';

import { toRepoRelative } from '@thaikit/registry-core';

import { ok, fail, parseArgs } from '../lib/out.mjs';
import { readTags, stripEditorExtras, foldBaseColorIntoVertexColor, normaliseAttributes } from './pipeline/normalise.mjs';
import { partitionCells } from './pipeline/partition.mjs';
import { buildLodTiers } from './pipeline/lod.mjs';
import { compressTextures, addLightmapTexture } from './pipeline/textures.mjs';
import { writeManifest } from './pipeline/manifest.mjs';
import { prepareSkyImages, addSkyTextures } from './pipeline/sky.mjs';
import { bakeWithBlender } from './bakers/blender-cycles.mjs';
import { findKtx, KTX_INSTALL_HINT } from './pipeline/ktx2.mjs';
import { assertCellKey, buildDirOf, exportNameOf } from './pipeline/build-dir.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const VERSION = '0.1.0';
const BAKERS = ['blender', 'blender-host', 'unreal', 'none'];

// One controller for the whole run: SIGTERM (the server's cancel) aborts it,
// which kills the Blender child or drops the host agent's request.
const cancel = new AbortController();
process.on('SIGTERM', () => { if (!cancel.signal.aborted) { progress('cancelled', 'cancelled by user'); cancel.abort(); setTimeout(() => process.exit(130), 200).unref(); } });

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
  if (!BAKERS.includes(baker)) return fail(`--baker must be one of ${BAKERS.join('|')}, got ${baker}`);
  const cpu = Boolean(args.cpu);
  const resumeFrom = Number(args['resume-from'] ?? 1);
  // Test-time overrides for the lightmap; the level's own settings otherwise.
  const lightmapOverride = { size: args['lightmap-size'] ? Number(args['lightmap-size']) : null, samples: args.samples ? Number(args.samples) : null };
  const cell = assertCellKey(args.cell ?? null);
  const buildDir = buildDirOf(id, cell);
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
  let lightmapStats = null;

  // ---- stage 1 -------------------------------------------------------------
  if (resumeFrom <= 1) {
    progress('read', `reading ${toRepoRelative(rawFile)}`);
    doc = await io.read(rawFile);
    doc.setLogger(new Logger(Logger.Verbosity.SILENT));
    const scene = doc.getRoot().listScenes()[0];
    bake = scene.getExtras()?.thaikitBake;
    if (!bake) throw new Error('raw.glb carries no scene.extras.thaikitBake; export it from the level editor');
    if ((bake.cell?.key ?? null) !== cell) throw new Error(`raw.glb was cut to ${bake.cell ? `cell ${bake.cell.key}` : 'the whole level'} but this bake is for ${cell ? `cell ${cell}` : 'the whole level'}`);
    if (cell) progress('read', `quick export: cell ${cell}, ${bake.placements.length} placement(s) incl. ground, ${bake.lights.length} light(s), ${bake.spawns.length} spawn(s)`);
    await fs.writeFile(bakeFile, JSON.stringify(bake, null, 2));
    scene.setExtras({});

    const before = countPrims(doc, '');
    progress('normalise', `${before.prims} primitives, ${before.tris.toLocaleString()} triangles in`);
    readTags()(doc);
    stripEditorExtras()(doc);
    await doc.transform(dedup({ propertyTypes: [PropertyType.ACCESSOR, PropertyType.TEXTURE, PropertyType.MESH] }));
    foldBaseColorIntoVertexColor()(doc);
    normaliseAttributes({ keep: baker === 'unreal' ? ['TEXCOORD_1'] : [] })(doc);
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

  // The sky's images are needed TWICE: Cycles lights the bake with them (a level
  // with a rich panorama used to bake as if lit by one flat colour), and stage 4
  // folds them into the GLB. Resampling a panorama into six faces costs 10-30 s,
  // so it happens once, here, before the bake that now depends on it.
  const skySettings = bake.settings?.sky ?? null;
  const skyImages = await prepareSkyImages(id, skySettings, { onProgress: (m) => progress('sky', m) });
  for (const note of skyImages.notes) progress('sky', note);

  // ---- stage 2: lightmap -----------------------------------------------------
  if (resumeFrom <= 2) {
    if (lightmapOverride.size || lightmapOverride.samples) {
      bake.settings = { ...bake.settings, lightmap: { ...(bake.settings?.lightmap ?? {}), ...(lightmapOverride.size ? { size: lightmapOverride.size } : {}), ...(lightmapOverride.samples ? { samples: lightmapOverride.samples } : {}) } };
    }
    if (baker === 'unreal') {
      // Written by import-unreal-level.mjs alongside raw.glb; the UVs are
      // already in TEXCOORD_1 and survived stage 1 through `keep`.
      try {
        lightmapPng = await fs.readFile(path.join(buildDir, 'lightmap', 'lightmap.png'));
        lightmapStats = JSON.parse(await fs.readFile(path.join(buildDir, 'lightmap', 'lightmap.json'), 'utf8'));
      } catch {
        throw new Error('--baker unreal needs build/lightmap/lightmap.png from import-unreal-level.mjs; the Unreal export carried no EPIC_lightmap_textures, so re-run the import and bake with --baker blender instead');
      }
      const withUv = countPrims(doc, 'cell_');
      let missing = 0;
      for (const node of doc.getRoot().listNodes()) { if (!node.getName().startsWith('cell_')) continue; node.traverse((n) => { for (const p of n.getMesh()?.listPrimitives() ?? []) if (!p.getAttribute('TEXCOORD_1')) missing += 1; }); }
      if (missing) throw new Error(`${missing} of ${withUv.prims} static primitive(s) lost TEXCOORD_1 before the lightmap could be adopted`);
      progress('lightmap', `adopted Unreal's lightmap: ${lightmapStats.textures} texture(s) in a ${lightmapStats.atlas?.join('x')} atlas, ${lightmapStats.remappedPrimitives} primitive(s) remapped${lightmapStats.decode ? ' -- WARNING undecoded coefficient factors, check brightness' : ''}`);
    } else if (baker !== 'none' && bake.settings?.lightmap?.enabled !== false) {
      const result = await bakeWithBlender({ io, doc, bake, skyImages, outDir: path.join(buildDir, 'lightmap'), onProgress: (m) => progress('lightmap', m), host: baker === 'blender-host', cpu, signal: cancel.signal });
      doc = result.doc;
      lightmapPng = result.lightmapPng;
      lightmapStats = result.lightmapStats;
      if (lightmapStats) await fs.writeFile(path.join(buildDir, 'lightmap', 'lightmap.json'), JSON.stringify(lightmapStats));
      await fs.writeFile(path.join(buildDir, 'lightmap', 'lightmap.png'), lightmapPng);
    } else {
      progress('lightmap', `skipped (${baker === 'none' ? 'baker: none' : 'lightmap disabled in the level settings'}); static geometry will be lit by the real-time moon`);
    }
    await io.write(stage(2), doc);
  } else {
    try { lightmapPng = await fs.readFile(path.join(buildDir, 'lightmap', 'lightmap.png')); } catch { lightmapPng = null; }
    try { lightmapStats = JSON.parse(await fs.readFile(path.join(buildDir, 'lightmap', 'lightmap.json'), 'utf8')); } catch { lightmapStats = null; }
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
  const skyIndices = await addSkyTextures(doc, skyImages, {
    colorMode: tex.colorMode ?? 'etc1s', maxSize: tex.maxSize ?? 2048,
    onProgress: (m) => progress('textures', m),
  });

  const extra = [lightmapImage != null && 'lightmap', skyIndices.base != null && 'sky', skyIndices.clouds != null && 'clouds'].filter(Boolean);
  progress('textures', `${count} texture(s) as KTX2${extra.length ? ` + ${extra.join(' + ')}` : ''}`);

  progress('compress', 'meshopt (EXT_meshopt_compression, medium)');
  await doc.transform(meshopt({ encoder: MeshoptEncoder, level: 'medium' }));

  const manifest = writeManifest({ bake, lodStats, lightmapImage, lightmapStats, skyIndices, generator: { tool: 'thaikit', version: VERSION } })(doc);
  await doc.transform(prune({ propertyTypes: [PropertyType.NODE, PropertyType.MESH, PropertyType.ACCESSOR, PropertyType.MATERIAL], keepLeaves: true, keepAttributes: true }));

  const outFile = path.join(buildDir, 'level.glb');
  await io.write(outFile, doc);
  const bytes = (await fs.stat(outFile)).size;
  progress('write', `${toRepoRelative(outFile)} (${(bytes / 1048576).toFixed(1)} MB)`);

  // Deliver it. THAIKIT_EXPORT_DIR is the game's GLB folder as mounted in the
  // container (compose maps the host's folder to /export); the finished level
  // is copied there as <id>.glb so nothing has to be fished out of build/.
  // THAIKIT_EXPORT_DIR_HOST is the same folder as the HOST spells it, which is
  // what the dialog shows -- the container path means nothing to the person
  // reading it. Missing or unwritable is a warning, never a failed bake.
  let exported = null;
  const exportDir = process.env.THAIKIT_EXPORT_DIR;
  if (exportDir) {
    const name = exportNameOf(id, cell);
    const target = path.join(exportDir, name);
    try {
      await fs.access(exportDir);
      await fs.copyFile(outFile, target);
      const hostDir = process.env.THAIKIT_EXPORT_DIR_HOST || exportDir;
      // path.posix so a `${PWD}/../Operation-X/GLB` default reads as the folder it is.
      exported = { path: path.posix.normalize(`${hostDir.replace(/[\\/]+$/, '')}/${name}`), bytes };
      progress('export', `copied to ${exported.path}`);
    } catch (e) {
      progress('export', `WARNING not copied to ${target}: ${e.code === 'ENOENT' ? 'folder is not mounted (THAIKIT_EXPORT_DIR)' : e.message}`);
    }
  }

  // ---- verify ----------------------------------------------------------------
  const verify = await new Promise((resolve) => {
    const child = spawn(process.execPath, [path.join(here, 'verify-level.mjs'), '--level', id, ...(cell ? ['--cell', cell] : [])], { stdio: ['ignore', 'pipe', 'inherit'] });
    let out = '';
    child.stdout.on('data', (d) => { out += d; });
    child.on('close', () => { try { resolve(JSON.parse(out.trim().split('\n').pop())); } catch { resolve({ ok: false, failures: ['verify produced no result'] }); } });
  });
  await fs.writeFile(path.join(buildDir, 'verify.json'), JSON.stringify(verify, null, 2));
  progress('verify', verify.ok ? 'passed' : `${verify.failures?.length ?? '?'} failure(s)`);

  const dc = lodStats.reduce((a, s) => a.map((v, i) => v + s.drawCalls[i]), [0, 0, 0]);
  const tri = lodStats.reduce((a, s) => a.map((v, i) => v + s.triangles[i]), [0, 0, 0]);
  return ok({
    level: id, cell, file: toRepoRelative(outFile), exported, bytes, cells: manifest.cells.list.length, drawCalls: dc, triangles: tri,
    textures: count, lightmap: lightmapImage != null, colliders: manifest.colliders.reduce((n, c) => n + c.shapes.length, 0), dynamic: manifest.dynamic.length,
    verify,
  });
}

main().catch((err) => {
  if (cancel.signal.aborted) { fail(new Error('cancelled')); process.exit(130); }
  progress('failed', err.message); fail(err);
});
