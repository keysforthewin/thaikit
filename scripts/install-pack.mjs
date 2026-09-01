#!/usr/bin/env node
/**
 * Install, refresh or remove a vibe3d asset pack for the level editor.
 *
 * A vibe3d pack is a registry.json with every model's TypeScript inlined. This
 * script downloads it, writes the sources under packs/<ns>/<version>/src/,
 * bundles each model item into thaikit's own module shape (CommonJS,
 * `createObjectModel(spec, options)`, three external), constructs each once
 * under Node to measure it and derive a collider compound, renders a thumbnail
 * for each in headless Chrome, and records the lot in packs/index.json. The web server spawns it; progress goes to stderr as
 * JSON lines and the result is one JSON line on stdout.
 *
 * thaikit's OWN kit goes through exactly this path -- `--source tree:packages/props`
 * reads the source tree instead of a downloaded registry -- so the level editor
 * and the object editor see it as one more installed pack. Two things a
 * thaikit item carries that a strict vibe3d `meta` cannot: `thaikit.json` (the
 * asset record) and `colliders.json`, shipped as ordinary files beside
 * `model.ts`. When they are present they fill physics, placement, pivot,
 * destruction groups and budgets, and a shipped compound wins over the one the
 * probe derives. `--refresh-item` rebuilds ONE item of a tree-installed pack.
 *
 * Usage:
 *   node scripts/install-pack.mjs --source @scifi-kit/registry
 *   node scripts/install-pack.mjs --source npm:@medieval-kit/registry@^0.1 --refresh --pack @medieval-kit
 *   node scripts/install-pack.mjs --source https://example.com/registry.json
 *   node scripts/install-pack.mjs --source tree:packages/props --refresh
 *   node scripts/install-pack.mjs --refresh-item @thai-kit/oil-drum [--add]
 *   node scripts/install-pack.mjs --remove @scifi-kit
 *   node scripts/install-pack.mjs --previews @scifi-kit [--force]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import os from 'node:os';

import { PACKS_DIR, REPO_ROOT, toRepoRelative } from '@thaikit/registry-core';

import { ok, fail, parseArgs } from './lib/out.mjs';
import { readIndex, writeIndex } from './lib/packs/index.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATES = path.join(here, 'lib/packs/templates');
const MAX_PARTS = 8;
const MAX_TRIANGLES = 200_000;

/**
 * The download-and-bundle stack, loaded on demand.
 *
 * source.mjs needs semver, fetch.mjs needs tar and wrap.mjs needs esbuild --
 * three third-party dependencies that only INSTALLING a pack has any use for.
 * Removing one is a filesystem operation, so it must not be able to fail on a
 * runtime whose node_modules predates any of them. That is exactly how
 * `--remove @medieval-kit` died inside the container:
 * ERR_MODULE_NOT_FOUND: Cannot find package 'tar'.
 */
let installDeps = null;
async function loadInstallDeps() {
  if (!installDeps) {
    const [source, fetchMod, materialiseMod, wrap, tree, sidecar] = await Promise.all([
      import('./lib/packs/source.mjs'),
      import('./lib/packs/fetch.mjs'),
      import('./lib/packs/materialise.mjs'),
      import('./lib/packs/wrap.mjs'),
      import('./lib/packs/tree.mjs'),
      import('./lib/packs/sidecar.mjs'),
    ]);
    installDeps = { ...source, ...fetchMod, ...materialiseMod, ...wrap, ...tree, ...sidecar };
  }
  return installDeps;
}

const progress = (phase, message, extra = {}) => {
  process.stderr.write(`${JSON.stringify({ phase, message, ...extra })}\n`);
};

const posix = (p) => p.split(path.sep).join('/');

async function loadRegistry(source, cacheDir, { only = null } = {}) {
  const { resolveNpm, fetchTarball, registryFromTree } = await loadInstallDeps();
  if (source.kind === 'tree') {
    const root = path.resolve(REPO_ROOT, source.path);
    progress('resolve', `reading the kit's source tree at ${toRepoRelative(root)}`);
    return registryFromTree(root, { only });
  }
  if (source.kind === 'npm') {
    progress('resolve', `resolving ${source.name}@${source.range} on npm`);
    const r = await resolveNpm(source.name, source.range);
    const pkgDir = path.join(cacheDir, 'pkg', `${r.name.replace('/', '__')}-${r.version}`);
    progress('download', `downloading ${r.name}@${r.version}`);
    await fetchTarball(r.tarball, { integrity: r.integrity, cacheFile: path.join(cacheDir, 'tgz', `${r.name.replace('/', '__')}-${r.version}.tgz`), extractTo: pkgDir });
    const regFile = path.join(pkgDir, r.registryPath);
    const registry = JSON.parse(await fs.readFile(regFile, 'utf8'));
    return { registry, version: r.version, pkgDir, license: r.license, description: r.description, homepage: r.homepage, tree: null };
  }
  if (source.kind === 'https') {
    progress('download', `fetching ${source.url}`);
    const res = await fetch(source.url, { headers: { accept: 'application/json' } });
    if (!res.ok) throw new Error(`${res.status} fetching ${source.url}`);
    const text = await res.text();
    const registry = JSON.parse(text);
    const version = registry.version ?? createHash('sha256').update(text).digest('hex').slice(0, 12);
    return { registry, version, pkgDir: null, license: registry.license ?? null, description: registry.description ?? '', homepage: registry.homepage ?? null, tree: null };
  }
  const text = await fs.readFile(source.path, 'utf8');
  const registry = JSON.parse(text);
  const version = registry.version ?? createHash('sha256').update(text).digest('hex').slice(0, 12);
  return { registry, version, pkgDir: path.dirname(source.path), license: registry.license ?? null, description: registry.description ?? '', homepage: registry.homepage ?? null, tree: null };
}

function validateRegistry(registry) {
  if (!registry || typeof registry !== 'object') throw new Error('registry is not an object');
  if (!/^@[a-z0-9][a-z0-9-]*$/.test(registry.namespace ?? '')) throw new Error(`registry namespace "${registry.namespace}" is not a vibe3d address`);
  if (!Array.isArray(registry.items)) throw new Error('registry has no items[]');
}

const PROBE_WORKER = path.join(here, 'lib/packs/probe-worker.mjs');
const PROBE_TIMEOUT_MS = 360_000;
const PROBE_CONCURRENCY = Math.max(1, Math.min(4, (os.availableParallelism?.() ?? 4) - 1));

/** Build one item in a child process; a hang or a crash is a recorded failure, not ours. */
function probeItem(bundleFile) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [PROBE_WORKER, bundleFile], { stdio: ['ignore', 'pipe', 'ignore'] });
    let out = '';
    const timer = setTimeout(() => { child.kill('SIGKILL'); }, PROBE_TIMEOUT_MS);
    child.stdout.on('data', (d) => { out += d; });
    child.on('close', (code, signal) => {
      clearTimeout(timer);
      if (signal === 'SIGKILL') return resolve({ supported: false, error: `building took longer than ${PROBE_TIMEOUT_MS / 1000} s` });
      try {
        const line = out.trim().split('\n').pop();
        resolve(JSON.parse(line));
      } catch {
        resolve({ supported: false, error: `probe exited ${code} without a result` });
      }
    });
  });
}

async function pool(items, limit, fn) {
  let i = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      await fn(items[idx], idx);
    }
  });
  await Promise.all(workers);
}

/**
 * Render a thumbnail for every supported item that has none.
 *
 * A vibe3d pack ships no pictures, so without this the Add-object grid is a
 * wall of "no preview". Deliberately the LAST stage and deliberately
 * non-fatal: by the time it runs the pack is already installed, measured and
 * usable, and a missing thumbnail must never cost you a working pack.
 */
async function addPreviews(entry, { force = false } = {}) {
  const { renderPreviews } = await import('./lib/packs/previews.mjs');
  const packRoot = path.join(PACKS_DIR, entry.id, entry.buildTag);
  const todo = entry.items.filter((i) => i.role === 'model' && i.supported && i.bundle && (force || !i.preview));
  if (!todo.length) return;
  progress('preview', `rendering ${todo.length} thumbnail(s)`);
  const entries = todo.map((i) => ({
    name: i.name,
    bundleFile: path.join(packRoot, i.name, 'model.bundle.js'),
    outFile: path.join(packRoot, 'previews', `${i.name}.webp`),
  }));
  const { done, warnings: warned } = await renderPreviews(entries, {
    progress: (message, extra) => progress('preview', message, extra),
  });
  for (const item of todo) {
    if (done.has(item.name)) item.preview = `/packs/${entry.id}/${entry.buildTag}/previews/${item.name}.webp`;
  }
  entry.warnings.push(...warned);
  progress('preview', `${done.size} of ${todo.length} thumbnail(s) rendered`);
}


/** The fields a thaikit record contributes to an item, or their defaults when there is none. */
const ITEM_DEFAULTS = { pivot: 'base-center', placement: ['floor'], physics: { enabled: false, massKg: null }, destructionGroups: [], maps: [] };

/** A 12-hex digest over the files that decide what the BUNDLE draws. */
function itemVersion(it, hashes) {
  const parts = [];
  for (const f of it.files ?? []) if (/\.(ts|tsx|js|mjs)$/.test(f.target)) parts.push(`${f.target}:${hashes[f.target] ?? f.hash ?? ''}`);
  for (const a of it.artifacts ?? []) parts.push(`${a.target}:${hashes[a.target] ?? a.hash ?? ''}`);
  return createHash('sha256').update(parts.sort().join('\n')).digest('hex').slice(0, 12);
}

/**
 * Wrap, bundle and lay out ONE model item under the pack's build tag. Returns
 * the index record (unsupported when anything threw) and the bundle to probe.
 */
async function buildOne(it, { ns, buildTag, packRoot, srcDir, pkgDir, hashes, warnings }) {
  const { targetToPath, pickEntry, wrapperSource, bundleItem } = await loadInstallDeps();
  const record = {
    name: it.name, type: it.type, role: 'model', title: it.title ?? it.name, description: it.description ?? '',
    category: it.meta?.category ?? 'uncategorised', tags: it.meta?.tags ?? [], hash: it.files?.[0]?.hash ?? null,
    dependencies: it.dependencies ?? [], registryDependencies: it.registryDependencies ?? [],
    preview: null, bundle: null, entry: null, entryStrategy: null, supported: false, error: null,
    version: itemVersion(it, hashes), sourceDir: it._sourceDir ?? null,
  };
  try {
    // Cross-namespace dependencies would need another pack's sources; say so.
    const foreign = (it.registryDependencies ?? []).filter((d) => !d.startsWith(`${ns}/`) && d !== ns);
    if (foreign.length) throw new Error(`needs ${foreign.join(', ')} from another pack, which this installer does not resolve yet`);

    const { entry, strategy } = pickEntry(it);
    if (!entry) throw new Error('item has no source file to build');
    record.entry = entry;
    record.entryStrategy = strategy;
    const entryAbs = targetToPath(srcDir, entry);
    if (!record.sourceDir) record.sourceDir = toRepoRelative(path.dirname(entryAbs));
    const buildDir = path.join(packRoot, 'build', it.name);
    await fs.mkdir(buildDir, { recursive: true });
    const wrapperFile = path.join(buildDir, 'entry.ts');
    await fs.writeFile(wrapperFile, wrapperSource(entryAbs), 'utf8');
    const outDir = path.join(packRoot, it.name);
    await fs.mkdir(outDir, { recursive: true });
    const outFile = path.join(outDir, 'model.bundle.js');
    const built = await bundleItem({ entryAbs, wrapperFile, outFile, srcDir });
    record.bundle = `/packs/${ns}/${buildTag}/${it.name}/model.bundle.js`;
    record.bytes = built.bytes;

    // A v2 item's `artifacts` are its images, and materialise() has already
    // written them under `src/models/<id>/` -- which is where vibe3d's own
    // installer puts them, beside the TypeScript that a consuming app
    // imports. thaikit does not import that source: it EVALUATES the bundle,
    // and every one of its loaders (render/harness.html, the level editor's
    // instances.js, Viewer.jsx) derives `baseUrl` from the BUNDLE's own URL.
    // So the images have to sit beside the bundle as well, or a factory
    // resolves `maps/albedo.webp` against a directory holding one .js file
    // and silently draws an untextured card. That is what shipped fifteen
    // blank skyline imposters.
    for (const artifact of it.artifacts ?? []) {
      const from = targetToPath(srcDir, artifact.target);
      const rel = path.relative(path.join(srcDir, 'models', it.name), from);
      if (rel.startsWith('..')) continue;          // not this item's own file
      const to = path.join(outDir, rel);
      await fs.mkdir(path.dirname(to), { recursive: true });
      await fs.copyFile(from, to);
    }
    for (const w of built.warnings) warnings.push(`${it.name}: ${w}`);

    // A picture the source already holds: the tree's rendered thumbnail, or an
    // image a downloaded pack points `meta.preview` at (rare -- the scifi kit's
    // is a code reference). Either way Chrome is not needed for this item.
    const previewsDir = path.join(packRoot, 'previews');
    const preview = it.meta?.preview;
    let from = null;
    if (it._thumb) from = it._thumb;
    else if (preview && pkgDir && /\.(png|jpe?g|webp)$/i.test(preview)) from = path.join(pkgDir, preview);
    if (from) {
      try {
        await fs.mkdir(previewsDir, { recursive: true });
        const to = path.join(previewsDir, `${it.name}${path.extname(from)}`);
        await fs.copyFile(from, to);
        record.preview = `/packs/${ns}/${buildTag}/previews/${path.basename(to)}`;
      } catch { /* no preview shipped */ }
    }
    return { record, outFile };
  } catch (err) {
    record.supported = false;
    record.error = err.message;
    progress('bundle', `${it.name}: failed — ${err.message}`, { item: it.name });
    return { record, outFile: null };
  }
}

/**
 * Fold the probe's measurements and the item's shipped sidecars into its record.
 *
 * `thaikit.json` fills what a strict vibe3d `meta` cannot carry; a shipped
 * `colliders.json` with parts is preferred over the compound the probe derived,
 * and one a human placed is marked so nothing re-derives over it.
 */
async function finishRecord(record, probe, it, { srcDir }) {
  const { readSidecars, invalidateSidecars, targetToPath } = await loadInstallDeps();
  Object.assign(record, probe);
  const dir = it._sourceDir ? path.join(REPO_ROOT, it._sourceDir) : record.entry ? path.dirname(targetToPath(srcDir, record.entry)) : null;
  const sidecar = dir ? (invalidateSidecars(dir), await readSidecars(dir)) : { thaikit: null, colliders: null };
  const a = sidecar.thaikit;
  Object.assign(record, {
    pivot: a?.pivot ?? ITEM_DEFAULTS.pivot,
    placement: a?.placement ?? ITEM_DEFAULTS.placement,
    physics: a?.physics ?? ITEM_DEFAULTS.physics,
    destructionGroups: a?.destructionGroups ?? ITEM_DEFAULTS.destructionGroups,
    maps: (a?.model?.maps ?? []).map((m) => ({ role: m.role, file: m.file })),
    nameTh: a?.nameTh ?? '',
    budgetClass: a?.budgetClass ?? null,
    budget: a
      ? { targetTriangles: a.targetTriangles, maxDrawCalls: a.maxDrawCalls, maxMaterials: a.maxMaterials, maxUniqueGeometries: a.maxUniqueGeometries }
      : null,
    review: a?.model?.review?.score != null ? { score: a.model.review.score, fidelity: a.model.review.fidelity ?? null } : null,
    status: a?.status ?? null,
    hasRecord: Boolean(a),
  });
  if (probe.supported) {
    if (sidecar.colliders?.parts?.length) {
      record.colliders = sidecar.colliders;
      record.collidersSource = sidecar.colliders.handTuned ? 'hand-tuned' : 'shipped';
    } else {
      record.collidersSource = probe.colliders?.note?.startsWith('bbox') ? 'bbox' : 'derived';
    }
  } else {
    record.colliders = sidecar.colliders ?? null;
    record.collidersSource = sidecar.colliders ? (sidecar.colliders.handTuned ? 'hand-tuned' : 'shipped') : null;
  }
  return record;
}

/**
 * Rebuild ONE item of a tree-installed pack in place.
 *
 * Promote calls this after copying a prop into the tree; the watcher calls it
 * when a factory's source changes. The pack's version and build tag stay; the
 * item's `version` changes only when the files that feed its bundle did, so a
 * metadata-only edit never invalidates the editor's prototype cache.
 */
async function refreshItem(ref, { add = false, previews = true } = {}) {
  const m = /^(@[a-z0-9][a-z0-9-]*)\/([a-z0-9][a-z0-9-]*)$/.exec(ref);
  if (!m) throw new Error(`not an item ref: ${ref}`);
  const [, ns, name] = m;
  const index = await readIndex();
  const pack = index.packs.find((p) => p.id === ns);
  if (!pack) throw new Error(`no installed pack "${ns}"`);
  if (!pack.tree) throw new Error(`${ns} was not installed from a source tree; refresh the whole pack instead`);
  const existing = pack.items.find((i) => i.name === name && i.role === 'model') ?? null;
  if (!existing && !add) throw new Error(`${ref} is not in the installed pack; pass --add to append it`);

  const { materialise, parseSource } = await loadInstallDeps();
  const source = parseSource(pack.source);
  if (source.kind !== 'tree') throw new Error(`${ns}'s recorded source ${pack.source} is not a tree`);
  const { registry } = await loadRegistry(source, null, { only: [name] });
  const it = registry.items.find((x) => x.name === name);
  if (!it) throw new Error(`${name} did not come back from the tree`);

  const packRoot = path.join(PACKS_DIR, ns, pack.buildTag);
  const srcDir = path.join(packRoot, 'src');
  const warnings = [];
  progress('materialise', `writing ${name}'s sources`);
  const { hashes } = await materialise({ items: [it] }, srcDir, { templatesDir: TEMPLATES, warn: (w) => warnings.push(w), wipe: false });
  const ctx = { ns, buildTag: pack.buildTag, packRoot, srcDir, pkgDir: null, hashes, warnings };
  progress('bundle', name, { item: name });
  const { record, outFile } = await buildOne(it, ctx);
  if (outFile) {
    progress('probe', `building ${name} to measure it`);
    const probe = await probeItem(outFile);
    await finishRecord(record, probe, it, ctx);
    if (!probe.supported) progress('probe', `${name}: unsupported — ${probe.error}`, { item: name });
  } else {
    await finishRecord(record, { supported: false, error: record.error }, it, ctx);
  }
  if (previews && record.supported && !record.preview) {
    try {
      await addPreviews({ id: ns, buildTag: pack.buildTag, items: [record], warnings }, {});
    } catch (err) {
      warnings.push(`previews: ${err.message}`);
    }
  }

  const next = await readIndex();
  const target = next.packs.find((p) => p.id === ns);
  if (!target) throw new Error(`${ns} disappeared from the index while refreshing ${name}`);
  const at = target.items.findIndex((i) => i.name === name && i.role === 'model');
  if (at === -1) target.items.push(record);
  else target.items[at] = record;
  target.warnings = (target.warnings ?? []).filter((w) => !w.startsWith(`${name}:`)).concat(warnings);
  await writeIndex(next);

  return {
    pack: ns,
    item: {
      name, bundle: record.bundle, bytes: record.bytes ?? null, version: record.version, previousVersion: existing?.version ?? null,
      supported: record.supported, error: record.error, probeMs: record.probeMs ?? null, collidersSource: record.collidersSource ?? null,
    },
    warnings,
  };
}

async function install({ source, refresh, packId, previews = true }) {
  const { materialise } = await loadInstallDeps();
  const cacheDir = path.join(PACKS_DIR, '.cache');
  const { registry, version, pkgDir, license, description, homepage, tree } = await loadRegistry(source, cacheDir);
  validateRegistry(registry);
  const ns = registry.namespace;
  if (packId && packId !== ns) throw new Error(`source resolves to ${ns}, not the ${packId} being refreshed`);

  const index = await readIndex();
  const previous = index.packs.find((p) => p.id === ns) ?? null;
  if (previous && !refresh) {
    throw new Error(`${ns} is already installed (v${previous.version}); use refresh to update it`);
  }

  const buildTag = `${version}-${Date.now().toString(36)}`;
  const packRoot = path.join(PACKS_DIR, ns, buildTag);
  const srcDir = path.join(packRoot, 'src');
  progress('materialise', `writing sources for ${registry.items.length} items`);
  const warnings = [];
  const { files, hashes } = await materialise(registry, srcDir, { templatesDir: TEMPLATES, warn: (w) => warnings.push(w) });
  progress('materialise', `${files} files written`);

  const ctx = { ns, buildTag, packRoot, srcDir, pkgDir, hashes, warnings };
  const items = [];
  const toProbe = [];
  const models = registry.items.filter((it) => it.type === 'vibe3d:model');
  let n = 0;
  for (const it of registry.items) {
    if (it.type !== 'vibe3d:model') {
      items.push({ name: it.name, type: it.type, role: 'support', title: it.title ?? it.name, registryDependencies: it.registryDependencies ?? [] });
      continue;
    }
    n += 1;
    progress('bundle', `${it.name} (${n}/${models.length})`, { item: it.name });
    const { record, outFile } = await buildOne(it, ctx);
    if (outFile) toProbe.push({ it, record, outFile });
    else await finishRecord(record, { supported: false, error: record.error }, it, ctx);
    items.push(record);
  }

  // Build each bundled item once, several at a time, each in its own process.
  let done = 0;
  progress('probe', `building ${toProbe.length} items to measure them (${PROBE_CONCURRENCY} at a time)`);
  await pool(toProbe, PROBE_CONCURRENCY, async ({ it, record, outFile }) => {
    const probe = await probeItem(outFile);
    await finishRecord(record, probe, it, ctx);
    done += 1;
    if (probe.supported) {
      progress('probe', `${record.name}: ${probe.size.w}×${probe.size.h}×${probe.size.d} m, ${probe.stats.triangles} tris, ${probe.stats.drawCalls} dc, ${record.colliders.parts.length} collider part(s) (${record.collidersSource}), ${(probe.probeMs / 1000).toFixed(1)} s${probe.tslUsed?.length ? ' (TSL stubbed)' : ''} (${done}/${toProbe.length})`, { item: record.name });
    } else {
      progress('probe', `${record.name}: unsupported — ${probe.error} (${done}/${toProbe.length})`, { item: record.name });
    }
  });

  const entry = {
    id: ns, name: registry.name ?? ns, description: description || registry.description || '', homepage,
    source: source.spec, requested: source.kind === 'npm' ? source.range : null, version, buildTag,
    installedAt: new Date().toISOString(), license: license ?? registry.license ?? null,
    three: registry.compatibility?.three ?? null, capabilities: registry.compatibility?.capabilities ?? [],
    schemaVersion: registry.schemaVersion ?? null,
    // Repo-relative directory of the kit's source tree when this pack was
    // installed from one; null for a downloaded pack. It is what makes a pack
    // EDITABLE and what `--refresh-item` rebuilds from.
    tree: tree ?? null,
    warnings, items,
  };

  if (previews) {
    try {
      await addPreviews(entry);
    } catch (err) {
      // No Chrome, no GPU, a harness that never came up: the pack is fine, it
      // just has no pictures. Recorded where the pack manager will show it.
      warnings.push(`previews: ${err.message}`);
      progress('preview', `skipped — ${err.message}`);
    }
  }

  const next = await readIndex();
  next.packs = next.packs.filter((p) => p.id !== ns).concat(entry);
  await writeIndex(next);

  // The previous build is only removed once the index points at the new one.
  if (previous?.buildTag && previous.buildTag !== buildTag) {
    await fs.rm(path.join(PACKS_DIR, ns, previous.buildTag), { recursive: true, force: true });
  }

  const modelItems = items.filter((i) => i.role === 'model');
  const before = new Set((previous?.items ?? []).filter((i) => i.role === 'model').map((i) => i.name));
  const after = new Set(modelItems.map((i) => i.name));
  return {
    pack: ns, version, previousVersion: previous?.version ?? null,
    models: modelItems.length, supported: modelItems.filter((i) => i.supported).length,
    previews: modelItems.filter((i) => i.preview).length,
    unsupported: modelItems.filter((i) => !i.supported).map((i) => ({ name: i.name, error: i.error })),
    added: [...after].filter((x) => !before.has(x)), removed: [...before].filter((x) => !after.has(x)),
    warnings,
  };
}

/**
 * Re-render an installed pack's thumbnails without downloading anything.
 *
 * The bundles are already on disk, so this is the cheap way to give a pack
 * installed before previews existed its pictures -- and the only way to redo
 * them after a browser or harness fix, short of a full refresh.
 */
async function previewsOnly(packId, { force }) {
  const index = await readIndex();
  const entry = index.packs.find((p) => p.id === packId);
  if (!entry) throw new Error(`no installed pack "${packId}"`);
  entry.warnings = entry.warnings ?? [];
  await addPreviews(entry, { force });
  const next = await readIndex();
  next.packs = next.packs.map((p) => (p.id === packId ? entry : p));
  await writeIndex(next);
  const models = entry.items.filter((i) => i.role === 'model');
  return { pack: packId, version: entry.version, models: models.length, previews: models.filter((i) => i.preview).length };
}

async function remove(packId) {
  const index = await readIndex();
  const pack = index.packs.find((p) => p.id === packId);
  if (!pack) throw new Error(`no installed pack "${packId}"`);
  index.packs = index.packs.filter((p) => p.id !== packId);
  await writeIndex(index);
  await fs.rm(path.join(PACKS_DIR, packId), { recursive: true, force: true });
  return { removed: packId, version: pack.version };
}

async function main() {
  const args = parseArgs();
  if (args.remove) return ok(await remove(String(args.remove)));
  // Previews need puppeteer and sharp, not the download stack, so this mode
  // works on a pack whose source is long gone.
  if (args.previews) return ok(await previewsOnly(String(args.previews), { force: Boolean(args.force) }));
  if (args['refresh-item']) return ok(await refreshItem(String(args['refresh-item']), { add: Boolean(args.add), previews: args['no-previews'] !== true }));
  if (!args.source) return fail('need --source <npm name | npm:name@range | https://…json | file:… | tree:dir>, --refresh-item <ref>, --previews <id> or --remove <id>');
  const { parseSource } = await loadInstallDeps();
  const source = parseSource(String(args.source));
  return ok(await install({
    source, refresh: Boolean(args.refresh), packId: args.pack ? String(args.pack) : null,
    previews: args['no-previews'] !== true,
  }));
}

main().catch((err) => { progress('failed', err.message); fail(err); });
