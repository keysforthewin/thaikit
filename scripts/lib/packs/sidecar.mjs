/**
 * The two files thaikit ships INSIDE a vibe3d item beside its `model.ts`:
 * `thaikit.json` (the asset record) and `colliders.json` (the physics compound).
 *
 * vibe3d's `meta` schema is strict and has nowhere to put physics, pivots,
 * budgets, a review score or a hand-tuned collider, but a `files[]` entry can be
 * any file at all -- so the record rides in the pack as an ordinary file, a
 * consumer's `vibe3d add` installs it verbatim, and thaikit's own installer,
 * catalogue and routes read it back through this one module.
 *
 * Every reader is mtime-cached: the catalogue is assembled per request and a
 * hundred props must not cost a hundred reads each time.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';

import { AssetFileSchema } from '@thaikit/registry-core';

export const RECORD_FILE = 'thaikit.json';
export const COLLIDERS_FILE = 'colliders.json';

/**
 * What a collider part may be, kept to what a physics engine and the viewer
 * both read. `scale` is HALF-EXTENTS -- [radius, halfHeight, radius] for the
 * round types -- which is the convention the viewer's colliderGeometry() speaks
 * and the one Rapier's cuboid() takes directly.
 */
export const Part = z.object({
  name: z.string().min(1),
  type: z.enum(['box', 'cylinder', 'capsule', 'sphere']).default('box'),
  offset: z.tuple([z.number(), z.number(), z.number()]),
  scale: z.tuple([z.number().positive(), z.number().positive(), z.number().positive()]),
  isTrigger: z.boolean().default(false),
  notes: z.string().optional(),
});

const cache = new Map();

async function readCached(file, parse) {
  let stat;
  try {
    stat = await fs.stat(file);
  } catch {
    cache.delete(file);
    return null;
  }
  const hit = cache.get(file);
  if (hit && hit.mtime === stat.mtimeMs && hit.size === stat.size) return hit.value;
  let value = null;
  try {
    value = parse(JSON.parse(await fs.readFile(file, 'utf8')));
  } catch {
    value = null;
  }
  cache.set(file, { mtime: stat.mtimeMs, size: stat.size, value });
  return value;
}

/** The slim compound every consumer wants: parts, ground, and whether a human placed it. */
export function slimColliders(doc) {
  if (!doc || !Array.isArray(doc.parts)) return null;
  return {
    parts: doc.parts.map((p) => ({
      name: p.name,
      type: p.type,
      offset: p.offset,
      scale: p.scale,
      ...(p.isTrigger ? { isTrigger: true } : {}),
    })),
    groundY: doc.groundY ?? 0,
    coverage: doc.selfCheck?.coverage ?? null,
    handTuned: Boolean(doc.handTuned),
  };
}

/** The asset record in `dir`, validated, without its `schemaVersion`; null when absent or invalid. */
export async function readRecord(dir) {
  return readCached(path.join(dir, RECORD_FILE), (raw) => {
    const parsed = AssetFileSchema.safeParse(raw);
    if (!parsed.success) return null;
    const { schemaVersion: _v, ...asset } = parsed.data;
    return asset;
  });
}

/** The full colliders document in `dir`, or null. */
export async function readCollidersDoc(dir) {
  return readCached(path.join(dir, COLLIDERS_FILE), (raw) => raw);
}

/** `{ thaikit, colliders }` for an item directory -- either may be null. */
export async function readSidecars(dir) {
  const [thaikit, doc] = await Promise.all([readRecord(dir), readCollidersDoc(dir)]);
  return { thaikit, colliders: slimColliders(doc) };
}

/** Drop cached entries under `dir` (a refresh rewrote the copy). */
export function invalidateSidecars(dir) {
  for (const key of cache.keys()) if (key.startsWith(dir)) cache.delete(key);
}
