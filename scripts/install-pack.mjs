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
 *   node scripts/install-pack.mjs --remove @scifi-kit [--keep-source]
 *   node scripts/install-pack.mjs --previews @scifi-kit [--force]
 *   node scripts/install-pack.mjs --upgrade @scifi-kit [--force]
 *   node scripts/install-pack.mjs --drop-item @scifi-kit/crate       # after a fork moved it away
 *
 * A downloaded pack is ADOPTED by default (docs/adopting-packs.md): its source
 * is written to `adopted/<ns>/` -- a tracked tree laid out like thaikit's own,
 * with a `thaikit.json` beside every item -- and the pack is built from THAT,
 * so the skills can edit it and the watcher rebuilds it like any thaikit prop.
 * `--no-adopt` keeps the old behaviour (bundles from the download, edits only
 * through overrides/). `--upgrade` re-downloads upstream over the adopted tree,
 * refusing if any adopted file has been edited unless `--force`.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import os from 'node:os';

import { PACKS_DIR, REPO_ROOT, OWN_NAMESPACE, adoptedPackDir, namespaceOfRoot, rootFor, toRepoRelative, updateRegistry, updateAsset } from '@thaikit/registry-core';

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
    const [source, fetchMod, materialiseMod, wrap, tree, sidecar, adopt] = await Promise.all([
      import('./lib/packs/source.mjs'),
      import('./lib/packs/fetch.mjs'),
      import('./lib/packs/materialise.mjs'),
      import('./lib/packs/wrap.mjs'),
      import('./lib/packs/tree.mjs'),
      import('./lib/packs/sidecar.mjs'),
      import('./lib/packs/adopt.mjs'),
    ]);
    installDeps = { ...source, ...fetchMod, ...materialiseMod, ...wrap, ...tree, ...sidecar, ...adopt };
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

/** The adopted root (`adopted/<ns>`) behind a tree pack entry, or null for thaikit's own tree. */
function adoptedRootOf(tree) {
  if (!tree) return null;
  const ns = namespaceOfRoot(path.resolve(REPO_ROOT, tree));
  return ns && ns !== OWN_NAMESPACE ? { ns, root: adoptedPackDir(ns), modelsDir: rootFor(ns) } : null;
}

/**
 * Give every adopted item that has none a `thaikit.json`, from what the probe
 * measured, and re-read the sidecars so the index record reflects it. Done
 * AFTER the probe because the record needs a size to classify a budget from.
 */
async function ensureAdoptedRecords(entry, built, ctx) {
  const adopted = adoptedRootOf(entry.tree);
  if (!adopted) return 0;
  const { readManifest, recordForAdopted, targetToPath } = await loadInstallDeps();
  const { classifyBySize } = await import('./lib/config.mjs');
  const manifest = await readManifest(adopted.root);
  if (!manifest) return 0;
  const missing = built.filter(({ record }) => record.role === 'model' && !record.hasRecord);
  if (!missing.length) return 0;
  const drafts = [];
  for (const { it, record, probe } of missing) {
    const item = manifest.items.find((m) => m.name === it.name) ?? { name: it.name, title: record.title, description: record.description, meta: { category: record.category, tags: record.tags } };
    const size = probe?.size ?? null;
    const longest = size ? Math.max(size.w, size.h, size.d) : 1;
    const entryRel = record.entry ? toRepoRelative(path.join(adopted.root, 'models', it.name, path.posix.relative(`{models}/${it.name}`, record.entry))) : null;
    drafts.push(recordForAdopted({ ns: adopted.ns, manifest, item, probe, entryRel, budgetClass: await classifyBySize(longest) }));
    void targetToPath;
  }
  await updateRegistry((registry) => {
    const have = new Set(registry.assets.map((a) => a.id));
    for (const d of drafts) if (!have.has(d.id)) registry.assets.push(d);
    return registry;
  }, { modelsDir: adopted.modelsDir });
  for (const b of missing) await finishRecord(b.record, b.probe ?? { supported: false, error: b.record.error }, b.it, ctx);
  progress('adopt', `wrote ${drafts.length} record(s) into ${toRepoRelative(adopted.modelsDir)}`);
  return drafts.length;
}

/**
 * Copy rendered thumbnails into the adopted tree as `thumb.webp` beside each
 * item (tracked, so a fresh clone has pictures before Chrome ever runs) and
 * point the record at them.
 */
async function storeAdoptedThumbs(entry) {
  const adopted = adoptedRootOf(entry.tree);
  if (!adopted) return 0;
  let n = 0;
  for (const item of entry.items) {
    if (item.role !== 'model' || !item.preview) continue;
    const from = path.join(PACKS_DIR, item.preview.replace(/^\/packs\//, ''));
    const dir = path.join(adopted.modelsDir, item.name);
    const to = path.join(dir, 'thumb.webp');
    try {
      await fs.access(dir);
      const same = await fs.readFile(from).then(async (a) => a.equals(await fs.readFile(to))).catch(() => false);
      if (same) continue;
      await fs.copyFile(from, to);
      const rel = toRepoRelative(to);
      await updateAsset(item.name, (a) => ({ ...a, model: { ...a.model, thumb: rel } }), { modelsDir: adopted.modelsDir }).catch(() => {});
      n += 1;
    } catch { /* no directory: not adopted, or forked away */ }
  }
  return n;
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

  if (adoptedRootOf(pack.tree)) {
    await ensureAdoptedRecords({ tree: pack.tree }, [{ it, record, probe: record.supported ? record : null }], ctx).catch((err) => warnings.push(`record: ${err.message}`));
    await storeAdoptedThumbs({ tree: pack.tree, items: [record] }).catch((err) => warnings.push(`thumb: ${err.message}`));
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

async function install({ source, refresh, packId, previews = true, adopt = true, upgrade = false, force = false }) {
  const { materialise, parseSource, adoptRegistry, readManifest, divergence } = await loadInstallDeps();
  const cacheDir = path.join(PACKS_DIR, '.cache');
  let loaded = await loadRegistry(source, cacheDir);
  validateRegistry(loaded.registry);
  const ns = loaded.registry.namespace;
  if (packId && packId !== ns) throw new Error(`source resolves to ${ns}, not the ${packId} being refreshed`);

  const index = await readIndex();
  const previous = index.packs.find((p) => p.id === ns) ?? null;
  if (previous && !refresh && !upgrade) {
    throw new Error(`${ns} is already installed (v${previous.version}); use refresh to update it`);
  }

  // Adoption: a downloaded pack becomes a tree of its own, and the build below
  // runs from THAT tree, exactly as thaikit's own kit does.
  let upstream = null;
  if (source.kind !== 'tree' && ns !== OWN_NAMESPACE && adopt) {
    const root = adoptedPackDir(ns);
    const manifest = await readManifest(root);
    if (manifest && !upgrade) {
      progress('adopt', `${ns} is already adopted at ${toRepoRelative(root)}; building from that tree (--upgrade re-downloads over it)`);
    } else {
      if (upgrade) {
        if (!manifest) throw new Error(`${ns} is not adopted; install it first`);
        const edits = await divergence(root);
        if (edits.length && !force) {
          throw new Error(`${ns} has ${edits.length} adopted file(s) edited since adoption; --force to overwrite them:\n  ${edits.slice(0, 20).map((e) => `${e.item}: ${e.target}${e.current === null ? ' (deleted)' : ''}`).join('\n  ')}${edits.length > 20 ? `\n  … ${edits.length - 20} more` : ''}`);
        }
        if (edits.length) progress('adopt', `overwriting ${edits.length} edited file(s) with upstream ${loaded.version}`);
      }
      progress('adopt', `${upgrade ? 'upgrading' : 'adopting'} ${ns}@${loaded.version} into ${toRepoRelative(root)}`);
      const warnings = [];
      const done = await adoptRegistry(
        { registry: loaded.registry, ns, version: loaded.version, source: source.spec, license: loaded.license, homepage: loaded.homepage, description: loaded.description, pkgDir: loaded.pkgDir },
        { mode: upgrade ? 'replace' : 'create', warn: (w) => warnings.push(w) },
      );
      progress('adopt', `${done.files} file(s) and ${done.artifacts} artifact(s) written${done.removed ? `, ${done.removed} stale file(s) removed` : ''}`);
      for (const w of warnings) progress('adopt', w);
    }
    upstream = source.spec;
    source = parseSource(`tree:${toRepoRelative(root)}`);
    loaded = await loadRegistry(source, cacheDir);
    validateRegistry(loaded.registry);
  }
  const { registry, version, pkgDir, license, description, homepage, tree, adopted } = loaded;

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
  const builtAll = [];
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
    builtAll.push({ it, record });
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

  if (adopted) {
    try {
      await ensureAdoptedRecords({ tree }, builtAll.map((b) => ({ ...b, probe: b.record.supported ? b.record : { supported: false, error: b.record.error } })), ctx);
    } catch (err) {
      warnings.push(`records: ${err.message}`);
      progress('adopt', `records: ${err.message}`);
    }
  }

  const entry = {
    id: ns, name: registry.name ?? ns, description: description || registry.description || '', homepage,
    source: source.spec, requested: source.kind === 'npm' ? source.range : null, version, buildTag,
    // For an adopted pack: where it came from, so --upgrade can go back there.
    upstream: adopted?.upstream?.source ?? upstream ?? previous?.upstream ?? null,
    adopted: adopted ? adopted.root : null,
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
  if (adopted) {
    const stored = await storeAdoptedThumbs(entry).catch((err) => { warnings.push(`thumbs: ${err.message}`); return 0; });
    if (stored) progress('adopt', `${stored} thumbnail(s) stored beside their source`);
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
    pack: ns, version, previousVersion: previous?.version ?? null, adopted: entry.adopted, upstream: entry.upstream,
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

/** Forget one item of an installed pack (its source has moved away) and delete its bundle. */
async function dropItem(ref) {
  const m = /^(@[a-z0-9][a-z0-9-]*)\/([a-z0-9][a-z0-9-]*)$/.exec(ref);
  if (!m) throw new Error(`not an item ref: ${ref}`);
  const [, ns, name] = m;
  const index = await readIndex();
  const pack = index.packs.find((p) => p.id === ns);
  if (!pack) throw new Error(`no installed pack "${ns}"`);
  const before = pack.items.length;
  pack.items = pack.items.filter((i) => !(i.name === name && i.role === 'model'));
  for (const it of pack.items) if (Array.isArray(it.registryDependencies)) it.registryDependencies = it.registryDependencies.filter((d) => d !== ref);
  await writeIndex(index);
  await fs.rm(path.join(PACKS_DIR, ns, pack.buildTag, name), { recursive: true, force: true });
  return { pack: ns, dropped: name, wasInstalled: pack.items.length < before };
}

async function remove(packId, { keepSource = false } = {}) {
  const index = await readIndex();
  const pack = index.packs.find((p) => p.id === packId);
  if (!pack) throw new Error(`no installed pack "${packId}"`);
  if (packId === OWN_NAMESPACE && !keepSource) throw new Error(`${packId} is thaikit's own kit; its source is not removable (pass --keep-source to drop only the build)`);
  index.packs = index.packs.filter((p) => p.id !== packId);
  await writeIndex(index);
  await fs.rm(path.join(PACKS_DIR, packId), { recursive: true, force: true });
  // The adopted tree goes with it unless asked otherwise: a removed pack that
  // leaves a tracked source tree behind is a pack that is still half here.
  let source = null;
  if (!keepSource && packId !== OWN_NAMESPACE) {
    try {
      const root = adoptedPackDir(packId);
      await fs.access(root);
      await fs.rm(root, { recursive: true, force: true });
      source = toRepoRelative(root);
    } catch { /* not adopted */ }
  }
  return { removed: packId, version: pack.version, sourceRemoved: source };
}

/** Re-download an adopted pack's upstream and re-adopt it over the tree. */
async function upgrade(packId, { force = false, previews = true }) {
  const { parseSource, readManifest } = await loadInstallDeps();
  const index = await readIndex();
  const pack = index.packs.find((p) => p.id === packId);
  const manifest = await readManifest(adoptedPackDir(packId));
  const spec = manifest?.upstream?.source ?? pack?.upstream ?? null;
  if (!spec) throw new Error(`${packId} has no recorded upstream to upgrade from`);
  const source = parseSource(spec);
  if (source.kind === 'tree') throw new Error(`${packId}'s upstream is a tree; nothing to download`);
  return install({ source, refresh: true, packId, previews, adopt: true, upgrade: true, force });
}

async function main() {
  const args = parseArgs();
  if (args.remove) return ok(await remove(String(args.remove), { keepSource: Boolean(args['keep-source']) }));
  if (args['drop-item']) return ok(await dropItem(String(args['drop-item'])));
  if (args.upgrade) return ok(await upgrade(String(args.upgrade), { force: Boolean(args.force), previews: args['no-previews'] !== true }));
  // Previews need puppeteer and sharp, not the download stack, so this mode
  // works on a pack whose source is long gone.
  if (args.previews) return ok(await previewsOnly(String(args.previews), { force: Boolean(args.force) }));
  if (args['refresh-item']) return ok(await refreshItem(String(args['refresh-item']), { add: Boolean(args.add), previews: args['no-previews'] !== true }));
  if (!args.source) return fail('need --source <npm name | npm:name@range | https://…json | file:… | tree:dir>, --refresh-item <ref>, --previews <id> or --remove <id>');
  const { parseSource } = await loadInstallDeps();
  const source = parseSource(String(args.source));
  return ok(await install({
    source, refresh: Boolean(args.refresh), packId: args.pack ? String(args.pack) : null,
    previews: args['no-previews'] !== true, adopt: args['no-adopt'] !== true, force: Boolean(args.force),
  }));
}

main().catch((err) => { progress('failed', err.message); fail(err); });
