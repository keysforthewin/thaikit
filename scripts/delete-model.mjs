#!/usr/bin/env node
/** Full local model reset. The asset record and reference image survive. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {
  REPO_ROOT, SCRATCH_DIR, PACKS_DIR, modelDir, workDir, toRepoRelative,
  readRegistry, updateAsset, parseId, storeOptionsFor, safeResolve, writeFileAtomic,
} from '@thaikit/registry-core';
import { readIndex, writeIndex } from './lib/packs/index.mjs';
import { ok, fail, log, parseArgs } from './lib/out.mjs';

async function entries(dir) {
  try { return await fs.readdir(dir, { withFileTypes: true }); }
  catch (err) { if (err.code === 'ENOENT') return []; throw err; }
}
async function readJson(file) {
  try { return JSON.parse(await fs.readFile(file, 'utf8')); }
  catch (err) { if (err.code === 'ENOENT') return null; throw err; }
}

async function main() {
  const args = parseArgs();
  const id = args.id ?? args._[0];
  if (!id) throw new Error('usage: delete-model.mjs --id <id> [--dry-run]');
  if (args['keep-scratch']) throw new Error('--keep-scratch defeats a full reset and is no longer supported');
  // --purge-scratch remains accepted for old callers; purging is now unconditional.
  const dryRun = Boolean(args['dry-run']);
  const { ns, name, own, ref } = parseId(id);
  const registry = await readRegistry(storeOptionsFor(id));
  const asset = registry.assets.find((a) => a.id === name);
  if (!asset) throw new Error(`no such asset: ${id}`);

  // Plan and validate BEFORE deleting anything, including JSON caches and paths.
  const removals = new Set();
  const add = (p) => removals.add(path.resolve(p));
  const dir = modelDir(id);
  const preserved = new Set(['thaikit.json', 'preview.jpg']);
  if (asset.image?.file) {
    const image = path.resolve(REPO_ROOT, asset.image.file);
    if (path.dirname(image) === path.resolve(dir)) preserved.add(path.basename(image));
  }
  for (const entry of await entries(dir)) {
    if (!preserved.has(entry.name)) add(path.join(dir, entry.name));
  }

  const scratchRoots = new Set([workDir(id)]);
  if (typeof args['scratch-dir'] === 'string') scratchRoots.add(path.resolve(args['scratch-dir']));
  if (asset.model.reference?.glb && !/^(https?:|data:)/.test(asset.model.reference.glb)) {
    const glb = path.resolve(REPO_ROOT, asset.model.reference.glb);
    if (path.dirname(glb) !== path.resolve(dir)) scratchRoots.add(path.dirname(glb));
  }
  // promote --from records its actual state path, which can differ from workDir.
  if (asset.model.state) {
    const state = path.resolve(REPO_ROOT, asset.model.state);
    if (path.basename(state) !== 'state.json' || path.basename(path.dirname(state)) !== '.img2threejs') {
      throw new Error(`unrecognised model state path: ${asset.model.state}`);
    }
    scratchRoots.add(path.dirname(path.dirname(state)));
  }
  for (const root of scratchRoots) {
    const checked = safeResolve(SCRATCH_DIR, root);
    const rel = path.relative(path.resolve(SCRATCH_DIR), checked);
    if (!rel || ['_deleted', '_archive'].includes(rel) || rel.split(path.sep).at(-1).startsWith('@')) {
      throw new Error(`refusing to purge shared scratch root: ${root}`);
    }
    for (const other of registry.assets) {
      if (other.id !== name && path.resolve(workDir(`${ns}/${other.id}`)) === checked) {
        throw new Error(`scratch path belongs to another asset: ${other.id}`);
      }
    }
    // Do not follow an ancestor symlink out of scratch while removing a custom run.
    let parent = checked;
    while (parent !== path.resolve(SCRATCH_DIR)) {
      try {
        if ((await fs.lstat(parent)).isSymbolicLink()) throw new Error(`scratch path contains a symlink: ${parent}`);
      } catch (err) { if (err.code !== 'ENOENT') throw err; }
      parent = path.dirname(parent);
    }
    add(checked);
  }
  // Old delete-model used unqualified names; only timestamp-shaped names are
  // attributable, not arbitrary prefix matches which could name another prop.
  for (const archive of ['_deleted', '_archive']) {
    const base = path.join(SCRATCH_DIR, archive, ...(own ? [] : [ns]));
    for (const entry of await entries(base)) {
      if (entry.name === name || new RegExp(`^${name}-\\d{4}-\\d{2}-\\d{2}(?:T|$)`).test(entry.name)) {
        add(path.join(base, entry.name));
      }
    }
    if (!own) {
      const ambiguous = (await entries(path.join(SCRATCH_DIR, archive))).filter((e) =>
        new RegExp(`^${name}-\\d{4}-\\d{2}-\\d{2}(?:T|$)`).test(e.name));
      if (ambiguous.length) throw new Error(`legacy unqualified archive needs ownership resolution before reset: ${archive}/${ambiguous[0].name}`);
    }
  }

  // Ad-hoc authoring also leaves e.g. _veh/honda-wave.v1.mjs.bak and
  // _archive/oil-drum-6000tri-oldplate. Remove prop-named copies, but skip
  // other registered props and foreign namespace roots. Never follow symlinks.
  const otherNames = registry.assets.filter((a) => a.id !== name).map((a) => a.id);
  const namedFor = (filename, slug) => filename === slug || filename.startsWith(`${slug}.`) || filename.startsWith(`${slug}-`);
  async function scanScratch(base) {
    for (const entry of await entries(base)) {
      const p = path.join(base, entry.name);
      if (entry.name.startsWith('@')) continue;
      const matchesTarget = namedFor(entry.name, name);
      if (otherNames.some((other) => namedFor(entry.name, other) && (!matchesTarget || other.length > name.length))) continue;
      if (matchesTarget) {
        add(p);
      } else if (entry.isDirectory()) {
        await scanScratch(p);
      }
    }
  }
  await scanScratch(own ? SCRATCH_DIR : path.join(SCRATCH_DIR, ns));

  const index = await readIndex();
  const pack = index.packs.find((p) => p.id === ns);
  if (pack) {
    pack.items = pack.items.filter((i) => !(i.name === name && i.role === 'model'));
    for (const item of pack.items) {
      if (Array.isArray(item.registryDependencies)) item.registryDependencies = item.registryDependencies.filter((d) => d !== ref);
    }
  }
  // Remove every build tag, even orphaned builds absent from the current index.
  for (const tag of await entries(path.join(PACKS_DIR, ns))) {
    if (tag.isDirectory()) add(path.join(PACKS_DIR, ns, tag.name, name));
  }

  const jsonWrites = [];
  const exportedRegistry = path.join(REPO_ROOT, 'packages/props/dist/registry.json');
  const exported = await readJson(exportedRegistry);
  if (exported?.namespace === ns) {
    exported.items = exported.items.filter((i) => !(i.name === name && i.role === 'model'));
    for (const item of exported.items) {
      if (Array.isArray(item.registryDependencies)) item.registryDependencies = item.registryDependencies.filter((d) => d !== ref);
    }
    jsonWrites.push([exportedRegistry, exported]);
  }
  const unrealDir = process.env.THAIKIT_UNREAL_EXPORT_DIR || path.join(REPO_ROOT, 'exports/unreal');
  const manifestPath = path.join(unrealDir, 'manifest.json');
  const manifest = await readJson(manifestPath);
  if (manifest) {
    for (const item of manifest.items.filter((i) => i.ref === ref)) {
      if (item.file) {
        const glb = safeResolve(unrealDir, item.file);
        if (glb === path.resolve(unrealDir) || !glb.endsWith('.glb')) throw new Error(`invalid exported model path: ${item.file}`);
        add(glb);
        add(safeResolve(unrealDir, `_previews/${item.file.replace(/\.glb$/, '.webp')}`));
      }
    }
    manifest.items = manifest.items.filter((i) => i.ref !== ref);
    jsonWrites.push([manifestPath, manifest]);
  }

  const plate = asset.image?.file ? path.resolve(REPO_ROOT, asset.image.file) : path.join(dir, 'preview.jpg');
  for (const p of removals) {
    if (plate === p || plate.startsWith(p + path.sep)) {
      throw new Error(`reset would remove the recorded reference image: ${toRepoRelative(plate)}`);
    }
  }
  const removed = [];
  for (const p of removals) {
    try { await fs.lstat(p); removed.push(toRepoRelative(p)); }
    catch (err) { if (err.code !== 'ENOENT') throw err; }
  }
  if (!dryRun) {
    for (const p of removals) await fs.rm(p, { recursive: true, force: true });
    if (pack) await writeIndex(index);
    for (const [file, value] of jsonWrites) await writeFileAtomic(file, `${JSON.stringify(value, null, 2)}\n`);
    // Mark pending only after all cleanup succeeds. Failures must never be
    // reported as a successful reset; rerunning completes a partial cleanup.
    await updateAsset(id, (a) => {
      a.model = {};
      a.scale.measured = null;
      a.status.model = 'pending';
      a.updatedAt = new Date().toISOString();
      return a;
    });
  }
  log(`${dryRun ? 'would remove' : 'removed'}: ${removed.join(', ') || 'nothing built'}`);
  log(`record: ${dryRun ? 'would reset to' : ''} pending; measured scale cleared`);
  ok({ id, dryRun, removed, updatedCaches: jsonWrites.map(([p]) => toRepoRelative(p)),
    status: { model: dryRun ? asset.status.model : 'pending' }, scratch: { action: dryRun ? 'would purge' : 'purged' } });
}
main().catch(fail);
