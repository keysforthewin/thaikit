#!/usr/bin/env node
/**
 * Check a baked level against what the runtime expects. One JSON line on
 * stdout: { ok, failures[], warnings[], report{} }. --strict exits 1 on failure.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { NodeIO, Logger } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { MeshoptDecoder } from 'meshoptimizer';
import { read as readKtx } from 'ktx-parse';

import { ManifestExtras } from '@thai-kit/level-schema';

import { ok, fail, parseArgs } from '../lib/out.mjs';
import { assertCellKey, buildDirOf } from './pipeline/build-dir.mjs';
import { assertQuality, withQuality } from './pipeline/quality.mjs';

async function main() {
  const args = parseArgs();
  const id = String(args.level ?? '');
  if (!id) return fail('need --level <id>');
  const maxDrawCalls = Number(args['max-draw-calls-per-cell'] ?? 24);
  const cell = assertCellKey(args.cell ?? null);
  const quality = assertQuality(args.quality ?? null);
  const file = path.join(buildDirOf(id, cell), withQuality('level.glb', quality));
  const failures = [];
  const warnings = [];

  await MeshoptDecoder.ready;
  const io = new NodeIO().setLogger(new Logger(Logger.Verbosity.SILENT)).registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder });
  const doc = await io.read(file);
  const root = doc.getRoot();
  const scene = root.listScenes()[0];
  const raw = scene.getExtras()?.thaikitManifest;
  if (!raw) failures.push('scene.extras.thaikitManifest is missing');
  let manifest = null;
  try { manifest = ManifestExtras.parse(raw); } catch (err) { failures.push(`manifest does not validate: ${err.message.split('\n')[0]}`); }

  const nodes = new Map(root.listNodes().map((n) => [n.getName(), n]));
  const primsUnder = (node) => { let n = 0; let t = 0; node.traverse((x) => { const m = x.getMesh(); if (!m) return; for (const p of m.listPrimitives()) { n += 1; t += (p.getIndices()?.getCount() ?? p.getAttribute('POSITION').getCount()) / 3; } }); return { n, t }; };

  const report = { cells: [], textures: [], extensions: root.listExtensionsUsed().map((e) => e.extensionName) };
  if (manifest) {
    for (const cell of manifest.cells.list) {
      const cellNode = nodes.get(`cell_${cell.ix}_${cell.iz}`);
      if (!cellNode) { failures.push(`cell ${cell.key} has no node`); continue; }
      const tiers = ['lod0', 'lod1', 'lod2'].map((name) => cellNode.listChildren().find((c) => c.getName() === name));
      tiers.forEach((tier, i) => { if (!tier) failures.push(`cell ${cell.key} has no lod${i}`); });
      const counts = tiers.map((t) => (t ? primsUnder(t) : { n: 0, t: 0 }));
      report.cells.push({ key: cell.key, drawCalls: counts.map((c) => c.n), triangles: counts.map((c) => Math.round(c.t)) });
      if (counts[0].n > maxDrawCalls) warnings.push(`cell ${cell.key} is ${counts[0].n} draw calls at lod0 (over ${maxDrawCalls})`);
      if (counts[0].t > 0 && counts[1].t > counts[0].t) failures.push(`cell ${cell.key}: lod1 has more triangles than lod0`);
      if (counts[0].t > 300 && counts[2].t > counts[0].t * 0.6) warnings.push(`cell ${cell.key}: lod2 kept ${Math.round((counts[2].t / counts[0].t) * 100)}% of lod0's triangles`);
      if (manifest.lightmap) {
        for (const src of tiers[0]?.listChildren() ?? []) for (const prim of src.getMesh()?.listPrimitives() ?? []) {
          if (!prim.getAttribute('TEXCOORD_1')) failures.push(`cell ${cell.key}: a lod0 primitive has no TEXCOORD_1 but the manifest declares a lightmap`);
        }
      }
    }
    for (const c of manifest.cells.list) { const n = nodes.get(`cell_${c.ix}_${c.iz}`); if (n && !n.listChildren().length) failures.push(`cell ${c.key} is empty`); }
    for (const node of scene.listChildren()) { const name = node.getName(); if (name.startsWith('cell_') && !manifest.cells.list.some((c) => `cell_${c.ix}_${c.iz}` === name)) failures.push(`node ${name} is not in the manifest`); }
    for (const d of manifest.dynamic) if (!nodes.get(d.node)) failures.push(`dynamic node ${d.node} is missing`);
    for (const l of manifest.lights) { const n = nodes.get(l.node); if (!n) failures.push(`light node ${l.node} is missing`); else if (!n.getExtension('KHR_lights_punctual')) failures.push(`light node ${l.node} has no KHR_lights_punctual`); }
    if (!manifest.spawns.length) warnings.push('the level has no spawn point; a game has nowhere to drop the player');
    for (const s of manifest.spawns) {
      const b = manifest.bounds;
      if (s.position.some((v, i) => v < b.min[i] - 1 || v > b.max[i] + 1)) warnings.push(`spawn ${s.name} lies outside the level bounds`);
    }
    if (manifest.lightmap) {
      const pages = manifest.lightmap.atlases ?? [{ image: manifest.lightmap.image, range: manifest.lightmap.range ?? 1 }];
      report.lightmap = { atlasCount: pages.length, texelsPerMeter: manifest.lightmap.texelsPerMeter, atlases: [] };
      for (const [i, page] of pages.entries()) {
        const tex = root.listTextures()[page.image];
        if (!tex) { failures.push(`lightmap atlas ${i}: missing image`); continue; }
        try {
          const k = readKtx(tex.getImage());
          const transfer = k.dataFormatDescriptor?.[0]?.transferFunction;
          report.lightmap.atlases.push({ width:k.pixelWidth,height:k.pixelHeight,levels:k.levels.length,range:page.range,transferFunction:transfer });
          if (transfer !== 2) failures.push(`lightmap atlas ${i}: expected sRGB`);
          if (manifest.lightmap.atlases && (k.pixelWidth !== page.size || k.pixelHeight !== page.size || k.levels.length !== 1)) failures.push(`lightmap atlas ${i}: dimensions/mipmaps disagree with manifest`);
        } catch (err) { failures.push(`lightmap atlas ${i}: ${err.message}`); }
      }
      if (manifest.lightmap.atlases) for (const cell of manifest.cells.list) {
        const node = nodes.get(`cell_${cell.ix}_${cell.iz}`);
        node?.traverse(n => { for (const p of n.getMesh()?.listPrimitives() ?? []) {
          const index=p.getMaterial()?.getExtras()?.tk?.lightmapAtlas;
          if (!Number.isInteger(index) || index<0 || index>=pages.length) failures.push(`${n.getName()}: invalid atlas assignment`);
          const uv=p.getAttribute('TEXCOORD_1');
          if (!uv) { failures.push(`${n.getName()}: missing lightmap UVs`); continue; }
          for (const v of uv.getArray()) if (!Number.isFinite(v) || v<0 || v>1) { failures.push(`${n.getName()}: invalid lightmap coordinate`); break; }
        }});
      }
    }
  }

  for (const tex of root.listTextures()) {
    const mime = tex.getMimeType();
    report.textures.push({ name: tex.getName(), mime, bytes: tex.getImage()?.byteLength ?? 0 });
    if (mime !== 'image/ktx2') failures.push(`texture "${tex.getName() || '?'}" is ${mime}, not image/ktx2`);
  }
  if (root.listTextures().length && !report.extensions.includes('KHR_texture_basisu')) failures.push('KHR_texture_basisu is not declared');
  if (!report.extensions.includes('EXT_meshopt_compression')) warnings.push('EXT_meshopt_compression is not declared; geometry is uncompressed');
  for (const node of root.listNodes()) { const ex = node.getExtras() ?? {}; if (ex.sculptRuntime || ex.sculptSpec) failures.push(`node ${node.getName()} still carries sculpt extras`); }
  for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) if (!p.getAttribute('COLOR_0') && mesh.getName() !== 'lightmap') { warnings.push(`mesh ${mesh.getName() || '?'} has no COLOR_0`); break; }

  const stat = await fs.stat(file);
  const result = { ok: failures.length === 0, failures, warnings, bytes: stat.size, report };
  if (args.strict && failures.length) { process.stdout.write(`${JSON.stringify({ ok: false, ...result })}\n`); process.exitCode = 1; return undefined; }
  return ok(result);
}

main().catch(fail);
