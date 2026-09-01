/**
 * The merged item catalogue both editors browse.
 *
 * ONE source: packs/index.json, written by scripts/install-pack.mjs. thaikit's
 * own props are the `@thai-kit` pack, installed from the source tree
 * (`--source tree:packages/props`) through exactly the path a third-party pack
 * takes; the pack entry's `tree` is what makes it EDITABLE here. Nothing
 * downstream reads the registry directly.
 *
 * An item is the editor's whole view of a prop: where its bundle is, how big it
 * is, what it costs, and the physics compound it carries -- merged, in this
 * order, from the installer's probe record, then the `thaikit.json` beside the
 * item's source (thaikit's own props, or a pack that ships one), then a local
 * override (`overrides/<ns>/<name>.json`, for foreign props only). The record
 * and the override are read LIVE off disk (mtime-cached), so an edit in the
 * object editor reaches an open level tab without any pack job.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { REPO_ROOT, PACKS_DIR, MODELS_DIR, modelDir, toRepoRelative, qualifiedId } from '@thaikit/registry-core';

import { readSidecars, slimColliders } from '../../../../scripts/lib/packs/sidecar.mjs';
import { readOverride } from './overrides.js';

const MODELS_REL = toRepoRelative(MODELS_DIR);

/** What a prop is assumed to be when nothing says otherwise. */
const DEFAULTS = {
  pivot: 'base-center',
  placement: ['floor'],
  physics: { enabled: false, massKg: null },
  destructionGroups: [],
  maps: [],
};

const BUDGET_KEYS = ['targetTriangles', 'maxDrawCalls', 'maxMaterials', 'maxUniqueGeometries'];

/** Repo-relative path -> the URL the static mounts answer. */
export function mediaUrl(repoPath) {
  if (!repoPath) return null;
  const p = String(repoPath).replace(/^\.?\//, '');
  if (p.startsWith('scratch/')) return `/scratch/${p.slice('scratch/'.length)}`;
  if (p.startsWith('packs/')) return `/${p}`;
  if (p.startsWith('adopted/')) return `/${p}`;
  if (p.startsWith(`${MODELS_REL}/`)) return `/media/${p.slice(MODELS_REL.length + 1)}`;
  return `/media/${p.replace(/^assets\//, '')}`;
}

export async function readPacksIndex() {
  try {
    return JSON.parse(await fs.readFile(path.join(PACKS_DIR, 'index.json'), 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') return { schemaVersion: 1, packs: [] };
    throw err;
  }
}

const pick = (obj, keys) => Object.fromEntries(keys.filter((k) => obj?.[k] !== undefined).map((k) => [k, obj[k]]));

/** One catalogue item from its index record plus whatever is on disk beside it. */
async function mergeItem(p, it) {
  const editable = Boolean(p.tree);
  const sourceDir = it.sourceDir ?? (editable ? toRepoRelative(modelDir(it.name)) : null);
  const sidecar = sourceDir ? await readSidecars(path.join(REPO_ROOT, sourceDir)) : { thaikit: null, colliders: null };
  const record = sidecar.thaikit;
  const override = editable ? null : (await readOverride(p.id, it.name))?.doc ?? null;

  const budgetFrom = (src) => Object.fromEntries(BUDGET_KEYS.map((k) => [k, src?.[k] ?? null]));
  const merged = {
    ...DEFAULTS,
    ...pick(it, ['pivot', 'placement', 'physics', 'destructionGroups', 'maps', 'nameTh', 'budgetClass', 'notes']),
    budget: it.budget ?? null,
    ...(record
      ? {
          ...pick(record, ['pivot', 'placement', 'physics', 'destructionGroups', 'nameTh', 'budgetClass', 'notes', 'category', 'tags']),
          title: record.name,
          description: record.description || record.notes || '',
          maps: record.model?.maps ?? [],
          budget: budgetFrom(record),
        }
      : {}),
    ...(override
      ? {
          ...pick(override, ['pivot', 'placement', 'physics', 'destructionGroups', 'budgetClass', 'notes', 'tags', 'category']),
          budget: { ...(it.budget ?? budgetFrom(null)), ...pick(override, BUDGET_KEYS) },
        }
      : {}),
  };

  let colliders = it.colliders ?? null;
  let collidersSource = it.collidersSource ?? (colliders ? 'derived' : null);
  if (sidecar.colliders?.parts?.length) {
    colliders = sidecar.colliders;
    collidersSource = sidecar.colliders.handTuned ? 'hand-tuned' : 'shipped';
  }
  if (override?.colliders) {
    colliders = slimColliders({ ...override.colliders, selfCheck: null });
    collidersSource = 'override';
  }

  const review = record?.model?.review?.score != null
    ? { score: record.model.review.score, fidelity: record.model.review.fidelity ?? null, passed: record.model.review.passed ?? null }
    : it.review ?? null;

  const size = it.size ?? record?.scale?.measured ?? record?.scale?.declared ?? null;

  return {
    ref: `${p.id}/${it.name}`,
    pack: p.id,
    name: it.name,
    title: merged.title ?? it.title ?? it.name,
    description: merged.description ?? it.description ?? '',
    category: merged.category ?? it.category ?? 'uncategorised',
    tags: merged.tags ?? it.tags ?? [],
    nameTh: merged.nameTh ?? '',
    thumb: it.preview ?? null,
    image: mediaUrl(record?.image?.file),
    bundleUrl: it.bundle ?? null,
    // The pack wrapper always exports this name, whatever the item's own entry exported.
    exportName: 'createObjectModel',
    // Per item once the installer records one; the pack's for older installs.
    version: it.version ?? p.version,
    supported: Boolean(it.supported),
    error: it.error ?? null,
    size,
    pivot: merged.pivot,
    placement: merged.placement,
    physics: merged.physics,
    destructionGroups: merged.destructionGroups,
    budgetClass: merged.budgetClass ?? null,
    budget: merged.budget,
    notes: merged.notes ?? '',
    stats: {
      triangles: it.stats?.triangles ?? record?.model?.triangles ?? null,
      drawCalls: it.stats?.drawCalls ?? record?.model?.drawCalls ?? null,
      materials: it.stats?.materials ?? record?.model?.materials ?? null,
      uniqueGeometries: it.stats?.uniqueGeometries ?? record?.model?.uniqueGeometries ?? null,
      vertices: it.stats?.vertices ?? record?.model?.vertices ?? null,
    },
    bytes: it.bytes ?? null,
    maps: merged.maps,
    sockets: it.sockets ?? record?.model?.runtime?.sockets ?? [],
    pivots: it.pivots ?? record?.model?.runtime?.pivots ?? [],
    parts: it.parts ?? [],
    animated: Boolean(it.animated),
    tslUsed: it.tslUsed ?? [],
    colliders,
    collidersSource,
    review,
    status: record?.status ?? it.status ?? null,
    editable,
    // The id the asset routes and every script take: bare for thaikit's own
    // props, `@ns/name` for an adopted pack's. Null when the item is not editable.
    assetId: editable ? qualifiedId(p.id, it.name) : null,
    sourceDir,
    tree: p.tree ?? null,
    // The full record only where it can be edited; foreign items keep the
    // listing small and carry their override instead.
    thaikit: editable ? record : null,
    override,
    entryStrategy: it.entryStrategy ?? null,
  };
}

/** Every installed pack's items, as the editors want them. */
export async function installedItems() {
  const index = await readPacksIndex();
  const packs = [];
  const items = [];
  for (const p of index.packs ?? []) {
    packs.push({
      id: p.id,
      name: p.name,
      builtin: false,
      editable: Boolean(p.tree),
      tree: p.tree ?? null,
      version: p.version,
      source: p.source,
      installedAt: p.installedAt,
      items: (p.items ?? []).filter((i) => i.role !== 'support').length,
      unsupported: (p.items ?? []).filter((i) => i.role !== 'support' && !i.supported).length,
      warnings: p.warnings ?? [],
      license: p.license ?? null,
      // An adopted third-party pack: its source is a tracked tree of its own
      // (docs/adopting-packs.md), removable, and upgradable from `upstream`.
      adopted: p.adopted ?? null,
      upstream: p.upstream ?? null,
    });
    for (const it of p.items ?? []) {
      if (it.role === 'support') continue;
      items.push(await mergeItem(p, it));
    }
  }
  return { packs, items };
}

export async function catalogue() {
  return installedItems();
}

const list = (v) =>
  String(v ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

/**
 * The filters both editors use. `categories`/`tags` are the browser's
 * multi-select: comma-separated and OR'ed with EACH OTHER, with `q` AND'ed on
 * top -- picking "vendor" and the tag "night" asks for props that are either,
 * which is how a scene is assembled. The singular `category`/`tag` keep their
 * AND behaviour for the level picker.
 */
export function filterItems(items, query = {}) {
  const { q, pack, category, tag, categories, tags, imageStatus, modelStatus, minScore, maxScore, editable, supported } = query;
  const needle = (q ?? '').trim().toLowerCase();
  const pickedCategories = list(categories);
  const pickedTags = list(tags);
  return items.filter((it) => {
    if (pack && it.pack !== pack) return false;
    if (category && it.category !== category) return false;
    if (tag && !it.tags.includes(tag)) return false;
    if (editable === '1' && !it.editable) return false;
    if (supported === '1' && !it.supported) return false;
    if (imageStatus && it.status?.image !== imageStatus) return false;
    if (modelStatus && it.status?.model !== modelStatus) return false;
    if (minScore && (it.review?.score ?? -1) < Number(minScore)) return false;
    if (maxScore && (it.review?.score ?? 101) > Number(maxScore)) return false;
    if (pickedCategories.length || pickedTags.length) {
      if (!(pickedCategories.includes(it.category) || it.tags.some((t) => pickedTags.includes(t)))) return false;
    }
    if (!needle) return true;
    return [it.name, it.title, it.nameTh, it.description, it.category, it.pack, ...it.tags].join(' ').toLowerCase().includes(needle);
  });
}

/** Counts for the browse page's chips and facet dialogs. */
export function facets(items) {
  const packs = {};
  const categories = {};
  const tags = {};
  const status = { image: {}, model: {} };
  for (const it of items) {
    packs[it.pack] = (packs[it.pack] ?? 0) + 1;
    categories[it.category] = (categories[it.category] ?? 0) + 1;
    for (const t of it.tags) tags[t] = (tags[t] ?? 0) + 1;
    if (it.status) {
      for (const k of Object.keys(status)) {
        const v = it.status[k];
        if (v) status[k][v] = (status[k][v] ?? 0) + 1;
      }
    }
  }
  return { packs, categories, tags, status };
}
