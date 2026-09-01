/**
 * The only way anything writes an asset record.
 *
 * Both the Express server (in Docker) and the host-side generation skills import
 * this module, so there is exactly one lock implementation and one writer. That
 * shared import -- not an HTTP endpoint -- is the interface between the two.
 *
 * The registry is a DIRECTORY: packages/props/src/models/<id>/thaikit.json, one
 * record per prop, laid out the way a vibe3d kit's source tree is. `readRegistry`
 * assembles them into the `{ schemaVersion, updatedAt, license, assets }` shape
 * every caller has always seen, and `updateRegistry` diffs what `mutate` returned
 * against what was read and writes ONLY the records that changed -- so
 * `updateAsset` touches one file, and two contributors adding different props
 * never write the same file.
 *
 * The critical invariant survives the split: every record is re-read from disk
 * inside the lock. An in-memory copy may be stale, because the process on the
 * other side of the bind mount may have written since we last looked. The lock
 * is one `proper-lockfile` lock on the models directory (mkdir-based, so it
 * works across the container/host boundary like the old registry.json.lock).
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import lockfile from 'proper-lockfile';

import { MODELS_DIR, ADOPTED_DIR, OWN_NAMESPACE, parseId, rootFor, namespaceOfRoot } from './paths.js';
import { writeFileAtomic } from './atomic.js';
import { serializeAsset, etagFor, etagForAsset } from './hash.js';
import { RegistrySchema, AssetFileSchema, SCHEMA_VERSION, emptyRegistry } from './schema.js';

export const RECORD_FILE = 'thaikit.json';

/** Raised when an If-Match ETag no longer matches what is on disk. */
export class ConflictError extends Error {
  constructor(current) {
    super('this asset changed on disk since the ETag was issued');
    this.name = 'ConflictError';
    this.status = 409;
    this.current = current;
  }
}

export class ValidationError extends Error {
  constructor(issues, message = 'registry failed validation; refusing to write') {
    super(message);
    this.name = 'ValidationError';
    this.status = 400;
    this.issues = issues;
  }
}

function lockOptions(modelsDir) {
  return {
    // proper-lockfile uses mkdir + an mtime heartbeat rather than OS advisory
    // locks, which is exactly why it works across the container/host boundary --
    // both sides see the same inode and the same mtime on the bind mount.
    lockfilePath: path.join(modelsDir, '.lock'),
    stale: 10_000,
    update: 2_000,
    realpath: false,
    retries: { retries: 10, minTimeout: 50, maxTimeout: 500 },
  };
}

const recordPath = (modelsDir, id) => path.join(modelsDir, id, RECORD_FILE);

async function withLock(modelsDir, fn) {
  await fs.mkdir(modelsDir, { recursive: true });
  const release = await lockfile.lock(modelsDir, lockOptions(modelsDir));
  try {
    return await fn();
  } finally {
    await release();
  }
}

/**
 * Every record on disk, unparsed: `[{ dir, file, raw }]`, or null when the models
 * directory does not exist. A directory with no record file is skipped -- the
 * DELETE route removes the record before the rest of the prop's files.
 */
export async function readRegistryRaw(options = {}) {
  const modelsDir = optionsDir(options);
  let entries;
  try {
    entries = await fs.readdir(modelsDir, { withFileTypes: true });
  } catch (err) {
    if (err.code === 'ENOENT') return null;
    throw err;
  }
  const records = [];
  for (const entry of entries.filter((e) => e.isDirectory() && !e.name.startsWith('.')).sort((a, b) => (a.name < b.name ? -1 : 1))) {
    const file = recordPath(modelsDir, entry.name);
    let text;
    try {
      text = await fs.readFile(file, 'utf8');
    } catch (err) {
      if (err.code === 'ENOENT') continue;
      throw err;
    }
    let raw;
    try {
      raw = JSON.parse(text);
    } catch (err) {
      throw new ValidationError([{ path: [file], message: err.message }], `${file} is not valid JSON`);
    }
    records.push({ dir: entry.name, file, raw });
  }
  return records;
}

/** Accept the old `{ registryPath }` spelling as well as `{ modelsDir }`. */
function optionsDir(options) {
  if (typeof options === 'string') return options;
  return options.modelsDir ?? options.registryPath ?? MODELS_DIR;
}

function assemble(assets) {
  const updatedAt = assets.reduce((max, a) => (a.updatedAt > max ? a.updatedAt : max), '') || new Date().toISOString();
  return { schemaVersion: SCHEMA_VERSION, updatedAt, license: 'MIT', assets };
}

function parseRecord({ dir, file, raw }) {
  const parsed = AssetFileSchema.safeParse(raw);
  if (!parsed.success) {
    const versionIssue = parsed.error.issues.find((i) => i.path[0] === 'schemaVersion');
    const hint =
      versionIssue && raw?.schemaVersion !== undefined && raw.schemaVersion !== SCHEMA_VERSION
        ? `${file} is schemaVersion ${raw.schemaVersion}; this code reads ${SCHEMA_VERSION}. A record this old needs a one-off migration through migrateRegistry().`
        : `${file} failed validation`;
    throw new ValidationError(parsed.error.issues.map((i) => ({ ...i, file })), hint);
  }
  const { schemaVersion: _v, ...asset } = parsed.data;
  if (asset.id !== dir) {
    throw new ValidationError(
      [{ path: ['id'], file, message: `record id "${asset.id}" does not match its directory "${dir}"` }],
      `${file}: id "${asset.id}" does not match directory "${dir}"`,
    );
  }
  return asset;
}

export async function readRegistry(options = {}) {
  const records = await readRegistryRaw(options);
  if (records === null) return emptyRegistry();
  const registry = assemble(records.map(parseRecord));
  const parsed = RegistrySchema.safeParse(registry);
  if (!parsed.success) throw new ValidationError(parsed.error.issues);
  return parsed.data;
}

/**
 * Write the records that differ between `before` and `after`; unlink the record
 * file (and nothing else) for ids that vanished. Returns what it touched.
 */
async function writeDiff(modelsDir, before, after) {
  const prev = new Map(before.map((a) => [a.id, a]));
  const seen = new Set();
  const written = [];
  const deleted = [];
  for (const asset of after) {
    if (seen.has(asset.id)) throw new ValidationError([{ path: ['assets'], message: `duplicate asset id: ${asset.id}` }]);
    seen.add(asset.id);
    const old = prev.get(asset.id);
    if (old && etagForAsset(old) === etagForAsset(asset)) continue;
    await fs.mkdir(path.join(modelsDir, asset.id), { recursive: true });
    await writeFileAtomic(recordPath(modelsDir, asset.id), serializeAsset(asset, SCHEMA_VERSION));
    written.push(asset.id);
  }
  for (const id of prev.keys()) {
    if (seen.has(id)) continue;
    await fs.unlink(recordPath(modelsDir, id)).catch((err) => {
      if (err.code !== 'ENOENT') throw err;
    });
    deleted.push(id);
  }
  return { written, deleted };
}

/** Stamp `updatedAt` on every record `mutate` changed (anything but the stamp itself). */
function stampChanged(before, after) {
  const prev = new Map(before.map((a) => [a.id, a]));
  const now = new Date().toISOString();
  for (const asset of after) {
    const old = prev.get(asset.id);
    if (!old) {
      asset.updatedAt = asset.updatedAt ?? now;
      continue;
    }
    if (etagForAsset({ ...old, updatedAt: null }) !== etagForAsset({ ...asset, updatedAt: null })) asset.updatedAt = now;
  }
}

/**
 * Apply `mutate` to the registry under an exclusive lock.
 *
 * `mutate` sees and returns the whole assembled registry, exactly as before the
 * split; only the records it actually changed are written.
 *
 * @param {(registry: object) => object|Promise<object>} mutate
 * @param {{ ifMatch?: string, modelsDir?: string }} [options]
 * @returns {Promise<{ registry: object, etag: string, written: string[], deleted: string[] }>}
 */
export async function updateRegistry(mutate, options = {}) {
  const modelsDir = optionsDir(options);
  const { ifMatch } = options;
  return withLock(modelsDir, async () => {
    const current = await readRegistry({ modelsDir });
    if (ifMatch && etagFor(current) !== ifMatch) throw new ConflictError(current);

    const next = await mutate(structuredClone(current));
    const parsed = RegistrySchema.safeParse(next);
    if (!parsed.success) throw new ValidationError(parsed.error.issues);

    stampChanged(current.assets, parsed.data.assets);
    const { written, deleted } = await writeDiff(modelsDir, current.assets, parsed.data.assets);
    const registry = assemble(parsed.data.assets);
    return { registry, etag: etagFor(registry), written, deleted };
  });
}

/**
 * Apply a schema migration under the same lock.
 *
 * Distinct from `updateRegistry` for one reason: that function re-reads through
 * `readRegistry`, which validates against the CURRENT schema, so it can never
 * open a record written by an older one. A migration is precisely the case
 * where the files on disk are not yet the shape this code expects. So the input
 * is handed over raw -- `{ assets: [{ dir, file, raw }] }` -- and only the
 * OUTPUT is validated; every returned record is rewritten, and records for ids
 * that vanished are unlinked.
 *
 * @param {(raw: { assets: Array<{dir:string,file:string,raw:object}> }) => object|Promise<object>} mutate
 */
export async function migrateRegistry(mutate, options = {}) {
  const modelsDir = optionsDir(options);
  return withLock(modelsDir, async () => {
    const records = (await readRegistryRaw({ modelsDir })) ?? [];
    const next = await mutate({ assets: structuredClone(records) });
    const parsed = RegistrySchema.safeParse({ ...assemble(next.assets ?? []), ...next, schemaVersion: SCHEMA_VERSION });
    if (!parsed.success) throw new ValidationError(parsed.error.issues);

    const ids = new Set();
    for (const asset of parsed.data.assets) {
      if (ids.has(asset.id)) throw new ValidationError([{ path: ['assets'], message: `duplicate asset id: ${asset.id}` }]);
      ids.add(asset.id);
      await fs.mkdir(path.join(modelsDir, asset.id), { recursive: true });
      await writeFileAtomic(recordPath(modelsDir, asset.id), serializeAsset(asset, SCHEMA_VERSION));
    }
    for (const { dir } of records) {
      if (!ids.has(dir)) await fs.unlink(recordPath(modelsDir, dir)).catch(() => {});
    }
    const registry = assemble(parsed.data.assets);
    return { registry, etag: etagFor(registry) };
  });
}

/**
 * Convenience: mutate exactly one asset in place. Writes exactly one file.
 *
 * `ifMatch` is checked against THIS ASSET's ETag, not the registry's, and is
 * deliberately not forwarded to updateRegistry -- otherwise any concurrent write
 * anywhere in the tree would fail an editor that is only touching one prop.
 */
export async function updateAsset(id, mutate, options = {}) {
  const { ifMatch, ...registryOptions } = options;
  // A qualified id names its own root; a bare one keeps whatever root the
  // caller passed (the tests point at a temp dir), defaulting to thaikit's.
  const { ns, name } = parseId(id);
  if (!registryOptions.modelsDir && !registryOptions.registryPath && ns !== OWN_NAMESPACE) registryOptions.modelsDir = rootFor(ns);
  id = name;
  let updated = null;
  const result = await updateRegistry(async (registry) => {
    const index = registry.assets.findIndex((a) => a.id === id);
    if (index === -1) {
      const err = new Error(`no such asset: ${id}`);
      err.status = 404;
      throw err;
    }
    const before = registry.assets[index];
    if (ifMatch && etagForAsset(before) !== ifMatch) throw new ConflictError(before);

    updated = await mutate(before);
    registry.assets[index] = updated;
    return registry;
  }, registryOptions);
  updated = result.registry.assets.find((a) => a.id === id);
  return { asset: updated, etag: etagForAsset(updated), registryEtag: result.etag };
}

/**
 * One asset by id, bare or qualified, with `pack` stamped from its root.
 * Returns null when it does not exist.
 */
export async function readAsset(id, options = {}) {
  const { ns, name } = parseId(id);
  const modelsDir = optionsDir(options) === MODELS_DIR && ns !== OWN_NAMESPACE ? rootFor(ns) : optionsDir(options);
  const registry = await readRegistry({ modelsDir });
  const asset = registry.assets.find((a) => a.id === name) ?? null;
  return asset ? { ...asset, pack: namespaceOfRoot(modelsDir) ?? ns } : null;
}

/**
 * Every models root on disk: thaikit's own first, then each adopted pack that
 * has a `models/` directory. `[{ ns, modelsDir }]`.
 */
export async function listRoots() {
  const roots = [{ ns: OWN_NAMESPACE, modelsDir: MODELS_DIR }];
  let entries = [];
  try {
    entries = await fs.readdir(ADOPTED_DIR, { withFileTypes: true });
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }
  for (const entry of entries.filter((e) => e.isDirectory() && e.name.startsWith('@')).sort((a, b) => (a.name < b.name ? -1 : 1))) {
    const modelsDir = path.join(ADOPTED_DIR, entry.name, 'models');
    try {
      if ((await fs.stat(modelsDir)).isDirectory()) roots.push({ ns: entry.name, modelsDir });
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }
  }
  return roots;
}

/**
 * Every asset in every root, each stamped with a DERIVED `pack` (never stored:
 * the directory says it). For the callers that want the whole picture -- the
 * catalogue, doctor -- rather than one kit.
 */
export async function readAllAssets() {
  const out = [];
  for (const { ns, modelsDir } of await listRoots()) {
    const registry = await readRegistry({ modelsDir });
    for (const asset of registry.assets) out.push({ ...asset, pack: ns });
  }
  return out;
}
