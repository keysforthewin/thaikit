/**
 * The only way anything writes registry.json.
 *
 * Both the Express server (in Docker) and the host-side generation skills import
 * this module, so there is exactly one lock implementation and one writer. That
 * shared import -- not an HTTP endpoint -- is the interface between the two.
 *
 * The critical invariant: the registry is ALWAYS re-read from disk inside the
 * lock. An in-memory copy may be stale, because the process on the other side of
 * the bind mount may have written since we last looked.
 */
import fs from 'node:fs/promises';
import lockfile from 'proper-lockfile';

import { REGISTRY_PATH } from './paths.js';
import { writeFileAtomic } from './atomic.js';
import { serializeRegistry, etagFor, etagForAsset } from './hash.js';
import { RegistrySchema, emptyRegistry } from './schema.js';

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
  constructor(issues) {
    super('registry failed validation; refusing to write');
    this.name = 'ValidationError';
    this.status = 400;
    this.issues = issues;
  }
}

const LOCK_OPTIONS = {
  // proper-lockfile uses mkdir + an mtime heartbeat rather than OS advisory
  // locks, which is exactly why it works across the container/host boundary --
  // both sides see the same inode and the same mtime on the bind mount.
  lockfilePath: `${REGISTRY_PATH}.lock`,
  stale: 10_000,
  update: 2_000,
  realpath: false,
  retries: { retries: 10, minTimeout: 50, maxTimeout: 500 },
};

export async function readRegistry(registryPath = REGISTRY_PATH) {
  let raw;
  try {
    raw = await fs.readFile(registryPath, 'utf8');
  } catch (err) {
    if (err.code === 'ENOENT') return emptyRegistry();
    throw err;
  }
  const parsed = RegistrySchema.safeParse(JSON.parse(raw));
  if (!parsed.success) throw new ValidationError(parsed.error.issues);
  return parsed.data;
}

/** Read without validating, so a malformed registry can still be inspected. */
export async function readRegistryRaw(registryPath = REGISTRY_PATH) {
  try {
    return JSON.parse(await fs.readFile(registryPath, 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') return null;
    throw err;
  }
}

/**
 * Apply `mutate` to the registry under an exclusive lock.
 *
 * @param {(registry: object) => object|Promise<object>} mutate
 * @param {{ ifMatch?: string, registryPath?: string }} [options]
 * @returns {Promise<{ registry: object, etag: string }>}
 */
export async function updateRegistry(mutate, options = {}) {
  const { ifMatch, registryPath = REGISTRY_PATH } = options;

  // proper-lockfile needs the target to exist before it will lock it.
  await fs.access(registryPath).catch(async () => {
    await writeFileAtomic(registryPath, serializeRegistry(emptyRegistry()));
  });

  const release = await lockfile.lock(registryPath, LOCK_OPTIONS);
  try {
    const current = await readRegistry(registryPath);

    if (ifMatch && etagFor(current) !== ifMatch) throw new ConflictError(current);

    const next = await mutate(structuredClone(current));
    next.updatedAt = new Date().toISOString();

    const parsed = RegistrySchema.safeParse(next);
    if (!parsed.success) throw new ValidationError(parsed.error.issues);

    await writeFileAtomic(registryPath, serializeRegistry(parsed.data));
    return { registry: parsed.data, etag: etagFor(parsed.data) };
  } finally {
    await release();
  }
}

/**
 * Apply a schema migration under the same lock.
 *
 * Distinct from `updateRegistry` for one reason: that function re-reads through
 * `readRegistry`, which validates against the CURRENT schema, so it can never
 * open a registry written by an older one. A migration is precisely the case
 * where the file on disk is not yet the shape this code expects. So the input
 * is read raw and only the OUTPUT is validated -- the invariant that an invalid
 * registry is never written survives intact.
 *
 * Still goes through the same lock and the same atomic write, so a migration
 * racing the running server is safe.
 *
 * @param {(raw: object) => object|Promise<object>} mutate
 */
export async function migrateRegistry(mutate, options = {}) {
  const { registryPath = REGISTRY_PATH } = options;

  const release = await lockfile.lock(registryPath, LOCK_OPTIONS);
  try {
    const raw = JSON.parse(await fs.readFile(registryPath, 'utf8'));
    const next = await mutate(structuredClone(raw));
    next.updatedAt = new Date().toISOString();

    const parsed = RegistrySchema.safeParse(next);
    if (!parsed.success) throw new ValidationError(parsed.error.issues);

    await writeFileAtomic(registryPath, serializeRegistry(parsed.data));
    return { registry: parsed.data, etag: etagFor(parsed.data) };
  } finally {
    await release();
  }
}

/**
 * Convenience: mutate exactly one asset in place.
 *
 * `ifMatch` is checked against THIS ASSET's ETag, not the registry's, and is
 * deliberately not forwarded to updateRegistry -- otherwise any concurrent write
 * anywhere in the file would fail an editor that is only touching one prop.
 */
export async function updateAsset(id, mutate, options = {}) {
  const { ifMatch, ...registryOptions } = options;
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
  return { asset: updated, etag: etagForAsset(updated), registryEtag: result.etag };
}
