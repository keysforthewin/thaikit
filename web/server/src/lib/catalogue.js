/**
 * The merged item catalogue the level editor's picker browses.
 *
 * Two sources, one shape. thaikit itself is the built-in `@thaikit` pack, read
 * straight from the registry (the same "ships" gate build-registry.mjs uses).
 * Every other pack comes from packs/index.json, written by
 * scripts/install-pack.mjs. An item is the editor's whole view of a prop: where
 * its bundle is, how big it is, what it costs, and the physics compound it
 * carries -- nothing downstream reads the registry directly.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { readRegistry, PACKS_DIR, assetDir } from '@thaikit/registry-core';

const colliderCache = new Map();

/** The compound sidecar, cached by mtime so a hundred assets do not cost a hundred reads per listing. */
async function collidersFor(id) {
  const file = path.join(assetDir(id), 'colliders.json');
  let stat;
  try {
    stat = await fs.stat(file);
  } catch {
    return null;
  }
  const hit = colliderCache.get(id);
  if (hit && hit.mtime === stat.mtimeMs) return hit.doc;
  try {
    const doc = JSON.parse(await fs.readFile(file, 'utf8'));
    const slim = {
      parts: (doc.parts ?? []).map((p) => ({
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
    colliderCache.set(id, { mtime: stat.mtimeMs, doc: slim });
    return slim;
  } catch {
    return null;
  }
}

const ships = (a) => !a.hidden && a.model?.status === 'done' && Boolean(a.model?.file) && !a.model?.quarantine;

export async function thaikitItems() {
  const registry = await readRegistry();
  const items = [];
  for (const a of registry.assets.filter(ships)) {
    const size = a.scale?.measured ?? a.scale?.declared ?? null;
    items.push({
      ref: `@thaikit/${a.id}`,
      pack: '@thaikit',
      name: a.id,
      title: a.name,
      description: a.description || a.notes || '',
      category: a.category,
      tags: a.tags ?? [],
      thumb: a.model.thumb ? `/media/${a.model.thumb.replace(/^assets\//, '')}` : null,
      bundleUrl: `/media/${a.model.file.replace(/^assets\//, '')}`,
      exportName: a.model.export ?? 'createObjectModel',
      // What the client keys its prototype cache on: a rebuilt prop has a new
      // updatedAt, so the old module is simply forgotten.
      version: a.updatedAt,
      supported: true,
      error: null,
      size,
      pivot: a.pivot,
      placement: a.placement ?? ['floor'],
      physics: a.physics ?? { enabled: false, massKg: null },
      destructionGroups: a.destructionGroups ?? [],
      stats: {
        triangles: a.model.triangles ?? null,
        drawCalls: a.model.drawCalls ?? null,
        materials: a.model.materials ?? null,
        uniqueGeometries: a.model.uniqueGeometries ?? null,
      },
      maps: a.model.maps ?? [],
      sockets: a.model.runtime?.sockets ?? [],
      pivots: a.model.runtime?.pivots ?? [],
      colliders: await collidersFor(a.id),
    });
  }
  return { pack: { id: '@thaikit', name: 'thaikit', builtin: true, version: registry.updatedAt ?? null, source: 'registry.json', items: items.length }, items };
}

export async function readPacksIndex() {
  try {
    return JSON.parse(await fs.readFile(path.join(PACKS_DIR, 'index.json'), 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') return { schemaVersion: 1, packs: [] };
    throw err;
  }
}

/** Every installed pack's items, as the picker wants them. */
export async function installedItems() {
  const index = await readPacksIndex();
  const packs = [];
  const items = [];
  for (const p of index.packs ?? []) {
    packs.push({ id: p.id, name: p.name, builtin: false, version: p.version, source: p.source, installedAt: p.installedAt, items: (p.items ?? []).filter((i) => i.role !== 'support').length, unsupported: (p.items ?? []).filter((i) => i.role !== 'support' && !i.supported).length, license: p.license ?? null });
    for (const it of p.items ?? []) {
      if (it.role === 'support') continue;
      items.push({
        ref: `${p.id}/${it.name}`,
        pack: p.id,
        name: it.name,
        title: it.title ?? it.name,
        description: it.description ?? '',
        category: it.category ?? 'uncategorised',
        tags: it.tags ?? [],
        thumb: it.preview ?? null,
        bundleUrl: it.bundle ?? null,
        exportName: 'createObjectModel',
        version: p.version,
        supported: Boolean(it.supported),
        error: it.error ?? null,
        size: it.size ?? null,
        pivot: 'base-center',
        placement: ['floor'],
        physics: { enabled: false, massKg: null },
        destructionGroups: [],
        stats: it.stats ?? {},
        maps: [],
        sockets: it.sockets ?? [],
        pivots: it.pivots ?? [],
        colliders: it.colliders ?? null,
      });
    }
  }
  return { packs, items };
}

export async function catalogue() {
  const builtin = await thaikitItems();
  const installed = await installedItems();
  return { packs: [builtin.pack, ...installed.packs], items: [...builtin.items, ...installed.items] };
}

/** The same free-text match the asset list uses, over the fields a picker shows. */
export function filterItems(items, { q, pack, category, tag }) {
  const needle = (q ?? '').trim().toLowerCase();
  return items.filter((it) => {
    if (pack && it.pack !== pack) return false;
    if (category && it.category !== category) return false;
    if (tag && !it.tags.includes(tag)) return false;
    if (!needle) return true;
    return [it.name, it.title, it.description, it.category, it.pack, ...it.tags].join(' ').toLowerCase().includes(needle);
  });
}
