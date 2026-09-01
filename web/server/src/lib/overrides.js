/**
 * Local overlays for FOREIGN pack items.
 *
 * A vibe3d item's `meta` is strict and says nothing about physics, placement,
 * pivots, destruction groups, budgets or a hand-placed collider; thaikit's own
 * props carry all of that in the `thaikit.json` beside their source, and a
 * third-party pack has no such file. An override is the same declaration for
 * someone else's prop, kept in a tracked `overrides/<ns>/<name>.json` -- outside
 * `packs/` (gitignored, wiped by refresh and remove), outside `packages/props/`
 * (the published kit) and outside `levels/` (which `GET /api/levels` walks) --
 * keyed by the item's ref rather than by any pack build tag, so a reinstall
 * never touches it.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';

import { REPO_ROOT, safeResolve, writeFileAtomic, etagForText } from '@thaikit/registry-core';

import { Part } from '../../../../scripts/lib/packs/sidecar.mjs';

export const OVERRIDES_DIR = process.env.THAIKIT_OVERRIDES_DIR || path.join(REPO_ROOT, 'overrides');

const REF_RE = /^@[a-z0-9][a-z0-9-]*\/[a-z0-9][a-z0-9-]*$/;

const nullableInt = z.number().int().positive().nullable();

/** The compound block: a hand-placed set of parts, with the derivation's numbers CLEARED. */
export const OverrideColliders = z
  .object({
    parts: z.array(Part).max(64),
    groundY: z.number().default(0),
    handTuned: z.literal(true).default(true),
    derived: z.literal(false).default(false),
    selfCheck: z.null().default(null),
    editedAt: z.string(),
  })
  .strict();

export const OverrideSchema = z
  .object({
    schemaVersion: z.literal(1),
    ref: z.string().regex(REF_RE),
    updatedAt: z.string(),
    pivot: z.enum(['base-center', 'center', 'back-center', 'top-center']).optional(),
    placement: z.array(z.enum(['floor', 'wall', 'ceiling', 'surface', 'vehicle-mounted'])).optional(),
    physics: z.object({ enabled: z.boolean(), massKg: z.number().positive().nullable() }).strict().optional(),
    destructionGroups: z.array(z.string()).optional(),
    budgetClass: z.enum(['small', 'medium', 'large', 'hero', 'hero2x', 'hero4x', 'hero8x']).optional(),
    targetTriangles: nullableInt.optional(),
    maxDrawCalls: nullableInt.optional(),
    maxMaterials: nullableInt.optional(),
    maxUniqueGeometries: nullableInt.optional(),
    notes: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().min(1).optional(),
    colliders: OverrideColliders.optional(),
  })
  .strict();

/** What a client may PUT: everything but the bookkeeping the server stamps. */
export const OverrideInput = OverrideSchema.omit({ schemaVersion: true, ref: true, updatedAt: true }).strict();

export function overrideFile(ns, name) {
  if (!REF_RE.test(`${ns}/${name}`)) throw Object.assign(new Error(`bad item ref: ${ns}/${name}`), { status: 400 });
  return path.join(safeResolve(OVERRIDES_DIR, ns), `${name}.json`);
}

const cache = new Map();

/** `{ doc, text, etag }` or null when there is no override. */
export async function readOverride(ns, name) {
  const file = overrideFile(ns, name);
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
    const text = await fs.readFile(file, 'utf8');
    const parsed = OverrideSchema.safeParse(JSON.parse(text));
    value = parsed.success ? { doc: parsed.data, text, etag: etagForText(text) } : null;
  } catch {
    value = null;
  }
  cache.set(file, { mtime: stat.mtimeMs, size: stat.size, value });
  return value;
}

export async function writeOverride(ns, name, input) {
  const doc = OverrideSchema.parse({
    ...OverrideInput.parse(input),
    schemaVersion: 1,
    ref: `${ns}/${name}`,
    updatedAt: new Date().toISOString(),
  });
  const file = overrideFile(ns, name);
  await fs.mkdir(path.dirname(file), { recursive: true });
  const text = `${JSON.stringify(doc, null, 2)}\n`;
  await writeFileAtomic(file, text);
  cache.delete(file);
  return { doc, text, etag: etagForText(text) };
}

export async function deleteOverride(ns, name) {
  const file = overrideFile(ns, name);
  cache.delete(file);
  try {
    await fs.unlink(file);
    return true;
  } catch (err) {
    if (err.code === 'ENOENT') return false;
    throw err;
  }
}
