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
 * Usage:
 *   node scripts/install-pack.mjs --source @scifi-kit/registry
 *   node scripts/install-pack.mjs --source npm:@medieval-kit/registry@^0.1 --refresh --pack @medieval-kit
 *   node scripts/install-pack.mjs --source https://example.com/registry.json
 *   node scripts/install-pack.mjs --remove @scifi-kit
 *   node scripts/install-pack.mjs --previews @scifi-kit [--force]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import os from 'node:os';

import { PACKS_DIR } from '@thaikit/registry-core';

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
    const [source, fetchMod, materialiseMod, wrap] = await Promise.all([
      import('./lib/packs/source.mjs'),
      import('./lib/packs/fetch.mjs'),
      import('./lib/packs/materialise.mjs'),
      import('./lib/packs/wrap.mjs'),
    ]);
    installDeps = { ...source, ...fetchMod, ...materialiseMod, ...wrap };
  }
  return installDeps;
}

const progress = (phase, message, extra = {}) => {
  process.stderr.write(`${JSON.stringify({ phase, message, ...extra })}\n`);
};

const posix = (p) => p.split(path.sep).join('/');

async function loadRegistry(source, cacheDir) {
  const { resolveNpm, fetchTarball } = await loadInstallDeps();
  if (source.kind === 'npm') {
    progress('resolve', `resolving ${source.name}@${source.range} on npm`);
    const r = await resolveNpm(source.name, source.range);
    const pkgDir = path.join(cacheDir, 'pkg', `${r.name.replace('/', '__')}-${r.version}`);
    progress('download', `downloading ${r.name}@${r.version}`);
    await fetchTarball(r.tarball, { integrity: r.integrity, cacheFile: path.join(cacheDir, 'tgz', `${r.name.replace('/', '__')}-${r.version}.tgz`), extractTo: pkgDir });
    const regFile = path.join(pkgDir, r.registryPath);
    const registry = JSON.parse(await fs.readFile(regFile, 'utf8'));
    return { registry, version: r.version, pkgDir, license: r.license, description: r.description, homepage: r.homepage };
  }
  if (source.kind === 'https') {
    progress('download', `fetching ${source.url}`);
    const res = await fetch(source.url, { headers: { accept: 'application/json' } });
    if (!res.ok) throw new Error(`${res.status} fetching ${source.url}`);
    const text = await res.text();
    const registry = JSON.parse(text);
    const version = registry.version ?? createHash('sha256').update(text).digest('hex').slice(0, 12);
    return { registry, version, pkgDir: null, license: registry.license ?? null, description: registry.description ?? '', homepage: registry.homepage ?? null };
  }
  const text = await fs.readFile(source.path, 'utf8');
  const registry = JSON.parse(text);
  const version = registry.version ?? createHash('sha256').update(text).digest('hex').slice(0, 12);
  return { registry, version, pkgDir: path.dirname(source.path), license: registry.license ?? null, description: registry.description ?? '', homepage: registry.homepage ?? null };
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

async function install({ source, refresh, packId, previews = true }) {
  const { materialise, targetToPath, pickEntry, wrapperSource, bundleItem } = await loadInstallDeps();
  const cacheDir = path.join(PACKS_DIR, '.cache');
  const { registry, version, pkgDir, license, description, homepage } = await loadRegistry(source, cacheDir);
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
  const { files } = await materialise(registry, srcDir, { templatesDir: TEMPLATES, warn: (w) => warnings.push(w) });
  progress('materialise', `${files} files written`);

  // Previews: copy any image the registry points at into the pack dir.
  const previewsDir = path.join(packRoot, 'previews');
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
    const record = {
      name: it.name, type: it.type, role: 'model', title: it.title ?? it.name, description: it.description ?? '',
      category: it.meta?.category ?? 'uncategorised', tags: it.meta?.tags ?? [], hash: it.files?.[0]?.hash ?? null,
      dependencies: it.dependencies ?? [], registryDependencies: it.registryDependencies ?? [],
      preview: null, bundle: null, entry: null, entryStrategy: null, supported: false, error: null,
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

      const preview = it.meta?.preview;
      if (preview && pkgDir && /\.(png|jpe?g|webp)$/i.test(preview)) {
        const from = path.join(pkgDir, preview);
        try {
          await fs.mkdir(previewsDir, { recursive: true });
          const to = path.join(previewsDir, `${it.name}${path.extname(preview)}`);
          await fs.copyFile(from, to);
          record.preview = `/packs/${ns}/${buildTag}/previews/${path.basename(to)}`;
        } catch { /* no preview shipped */ }
      }

      toProbe.push({ record, outFile });
    } catch (err) {
      record.supported = false;
      record.error = err.message;
      progress('bundle', `${it.name}: failed — ${err.message}`, { item: it.name });
    }
    items.push(record);
  }

  // Build each bundled item once, several at a time, each in its own process.
  let done = 0;
  progress('probe', `building ${toProbe.length} items to measure them (${PROBE_CONCURRENCY} at a time)`);
  await pool(toProbe, PROBE_CONCURRENCY, async ({ record, outFile }) => {
    const probe = await probeItem(outFile);
    Object.assign(record, probe);
    done += 1;
    if (probe.supported) {
      progress('probe', `${record.name}: ${probe.size.w}×${probe.size.h}×${probe.size.d} m, ${probe.stats.triangles} tris, ${probe.stats.drawCalls} dc, ${probe.colliders.parts.length} collider part(s), ${(probe.probeMs / 1000).toFixed(1)} s${probe.tslUsed?.length ? ' (TSL stubbed)' : ''} (${done}/${toProbe.length})`, { item: record.name });
    } else {
      progress('probe', `${record.name}: unsupported — ${probe.error} (${done}/${toProbe.length})`, { item: record.name });
    }
  });

  const entry = {
    id: ns, name: registry.name ?? ns, description: description || registry.description || '', homepage,
    source: source.spec, requested: source.kind === 'npm' ? source.range : null, version, buildTag,
    installedAt: new Date().toISOString(), license: license ?? registry.license ?? null,
    three: registry.compatibility?.three ?? null, capabilities: registry.compatibility?.capabilities ?? [],
    schemaVersion: registry.schemaVersion ?? null, warnings, items,
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
  if (!args.source) return fail('need --source <npm name | npm:name@range | https://…json | file:…>, --previews <id> or --remove <id>');
  const { parseSource } = await loadInstallDeps();
  const source = parseSource(String(args.source));
  return ok(await install({
    source, refresh: Boolean(args.refresh), packId: args.pack ? String(args.pack) : null,
    previews: args['no-previews'] !== true,
  }));
}

main().catch((err) => { progress('failed', err.message); fail(err); });
