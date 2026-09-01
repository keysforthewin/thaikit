import fs from 'node:fs/promises';
import path from 'node:path';

import { PACKS_DIR, writeFileAtomic } from '@thaikit/registry-core';

export const INDEX_FILE = path.join(PACKS_DIR, 'index.json');

export async function readIndex() {
  try {
    return JSON.parse(await fs.readFile(INDEX_FILE, 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') return { schemaVersion: 1, packs: [] };
    throw err;
  }
}

export async function writeIndex(index) {
  await fs.mkdir(PACKS_DIR, { recursive: true });
  index.packs.sort((a, b) => a.id.localeCompare(b.id));
  await writeFileAtomic(INDEX_FILE, `${JSON.stringify(index, null, 2)}\n`);
}

/** The installed pack entry for a namespace, or null. */
export async function findPack(index, ns) {
  return (index.packs ?? []).find((p) => p.id === ns) ?? null;
}

/**
 * Absolute path of an installed item's CommonJS bundle, or null when the pack
 * or the item is not installed. For thaikit's own props this is the ONLY place
 * the bundle exists: the source tree never carries one, and every Node-side
 * gate (colliders, coplanar check, promote's construct) reads through here.
 *
 * The bundle URL in the index is `/packs/<ns>/<tag>/<id>/model.bundle.js`, i.e.
 * a path under PACKS_DIR with the `/packs` prefix that the web server mounts.
 */
export async function packItemBundle(ns, id, index = null) {
  const idx = index ?? (await readIndex());
  const pack = await findPack(idx, ns);
  const item = pack?.items?.find((it) => it.name === id && it.role !== 'support');
  if (!item?.bundle) return null;
  const rel = item.bundle.replace(/^\/packs\//, '');
  return path.join(PACKS_DIR, rel);
}
