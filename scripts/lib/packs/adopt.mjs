/**
 * Adopt a downloaded vibe3d pack into a source tree of its own.
 *
 * `adopted/<ns>/` is laid out exactly like a materialised pack source dir --
 * `models/<name>/...` and `vibe3d/...` -- plus a `pack.json` naming the
 * upstream and listing what was adopted. Because every item's directory is
 * `models/<name>/`, it is ALSO a registry-core models root: `rootFor(ns)`
 * points at `adopted/<ns>/models`, a `thaikit.json` beside each item's source
 * makes it an asset the skills can edit, and `--source tree:adopted/<ns>` makes
 * the installer build the pack from the adopted tree rather than the download.
 * See docs/adopting-packs.md.
 *
 * Real packs prefix every `{models}` target with their kit name
 * (`{models}/medieval-kit/bronze-bell/model.ts`), so the one rewrite adoption
 * performs is stripping that common prefix -- from EVERY `{models}` target, so
 * relative imports between items (`../core/index.ts`) still resolve. Nothing
 * under `{vibe3d}` moves. A pack whose item directories are not named after
 * their items cannot be adopted; say so rather than rename source.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

import { adoptedPackDir, toRepoRelative } from '@thaikit/registry-core';

import { materialise } from './materialise.mjs';

export const PACK_FILE = 'pack.json';
export const MANIFEST_VERSION = 1;

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');

/** Split a `{root}/a/b/c` target into its root token and path segments. */
function splitTarget(target) {
  const m = /^(\{[a-z0-9]+\})\/(.+)$/.exec(target);
  if (!m) throw new Error(`file target uses no root: ${target}`);
  return { root: m[1], segments: m[2].split('/') };
}

/**
 * The directory prefix every model item shares under `{models}`, and the
 * items that break the `<prefix>/<name>/` rule. `prefix` is '' for a pack laid
 * out like thaikit's own.
 */
export function computePrefix(registry) {
  const models = (registry.items ?? []).filter((it) => it.type === 'vibe3d:model');
  const prefixes = new Set();
  const problems = [];
  for (const it of models) {
    const own = [...(it.files ?? []), ...(it.artifacts ?? [])].filter((f) => f.target.startsWith('{models}/'));
    if (!own.length) {
      problems.push(`${it.name}: no files under {models}`);
      continue;
    }
    // The item's directory is the deepest directory that holds ALL its files.
    const dirs = own.map((f) => splitTarget(f.target).segments.slice(0, -1));
    let common = dirs[0];
    for (const d of dirs.slice(1)) {
      let i = 0;
      while (i < common.length && i < d.length && common[i] === d[i]) i += 1;
      common = common.slice(0, i);
    }
    if (common[common.length - 1] !== it.name) {
      problems.push(`${it.name}: its files live under {models}/${common.join('/')}, not a directory named after it`);
      continue;
    }
    prefixes.add(common.slice(0, -1).join('/'));
  }
  if (prefixes.size > 1) problems.push(`items disagree on their {models} prefix: ${[...prefixes].map((p) => p || '(none)').join(', ')}`);
  return { prefix: prefixes.size === 1 ? [...prefixes][0] : '', problems };
}

/** `{models}/<prefix>/x` -> `{models}/x`; anything else unchanged. */
export function rewriteTarget(target, prefix) {
  if (!prefix) return target;
  const head = `{models}/${prefix}/`;
  return target.startsWith(head) ? `{models}/${target.slice(head.length)}` : target;
}

/** Where a (rewritten) target lands relative to the adopted root. */
export function targetToRel(target) {
  const { root, segments } = splitTarget(target);
  const dir = { '{models}': 'models', '{vibe3d}': 'vibe3d' }[root];
  if (!dir) throw new Error(`file target uses an unknown root: ${target}`);
  if (segments.includes('..')) throw new Error(`file target escapes the pack: ${target}`);
  return [dir, ...segments].join('/');
}

/** The one directory (relative to the root) an item's files all sit under. */
function itemDir(item) {
  const rels = [...(item.files ?? []), ...(item.artifacts ?? [])].map((f) => targetToRel(f.target).split('/').slice(0, -1));
  if (!rels.length) return null;
  let common = rels[0];
  for (const d of rels.slice(1)) {
    let i = 0;
    while (i < common.length && i < d.length && common[i] === d[i]) i += 1;
    common = common.slice(0, i);
  }
  return common.join('/');
}

export async function readManifest(root) {
  try {
    return JSON.parse(await fs.readFile(path.join(root, PACK_FILE), 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') return null;
    throw err;
  }
}

/**
 * Write the pack's sources into `adopted/<ns>/` and record what was adopted.
 *
 * `mode` is `create` (the directory must not exist yet), `replace` (an
 * upgrade: upstream files are rewritten, files upstream dropped are removed,
 * and the records, compounds and thumbnails beside them are kept) or `force`
 * (create over whatever is there).
 */
export async function adoptRegistry(
  { registry, ns, version, source, license = null, homepage = null, description = '', pkgDir = null },
  { mode = 'create', warn = () => {} } = {},
) {
  if (registry.namespace !== ns) throw new Error(`registry namespace ${registry.namespace} is not ${ns}`);
  const { prefix, problems } = computePrefix(registry);
  if (problems.length) {
    throw new Error(`${ns} cannot be adopted as a source tree (install it with --no-adopt):\n  ${problems.join('\n  ')}`);
  }
  const root = adoptedPackDir(ns);
  const previous = await readManifest(root);
  if (mode === 'create' && previous) throw new Error(`${ns} is already adopted at ${toRepoRelative(root)}; refresh or --upgrade it instead`);
  if (mode === 'replace' && !previous) throw new Error(`${ns} is not adopted; nothing to upgrade`);

  // The rewritten registry: same content, prefix-free targets.
  const items = [];
  const rewritten = { ...registry, items: [] };
  for (const it of registry.items ?? []) {
    const files = (it.files ?? []).map((f) => ({ ...f, target: rewriteTarget(f.target, prefix) }));
    const artifacts = (it.artifacts ?? []).map((a) => ({ ...a, target: rewriteTarget(a.target, prefix) }));
    const copy = { ...it, files, artifacts };
    rewritten.items.push(copy);
    items.push({
      name: it.name,
      type: it.type,
      title: it.title ?? it.name,
      description: it.description ?? '',
      dependencies: it.dependencies ?? [],
      registryDependencies: it.registryDependencies ?? [],
      meta: it.meta ?? null,
      dir: itemDir(copy),
      files: files.map((f) => ({ target: f.target, hash: f.hash ?? (typeof f.content === 'string' ? sha256(f.content) : null) })),
      artifacts: artifacts.map((a) => ({ target: a.target, hash: a.hash ?? null })),
    });
  }

  await fs.mkdir(root, { recursive: true });
  const written = await materialise(rewritten, root, { warn, wipe: mode !== 'replace' });

  // An upgrade drops what upstream dropped -- but never a record, a compound
  // or a thumbnail, which are thaikit's and sit beside the source.
  let removed = 0;
  if (mode === 'replace') {
    const now = new Set(items.flatMap((it) => [...it.files, ...it.artifacts].map((f) => f.target)));
    for (const it of previous.items ?? []) {
      for (const f of [...(it.files ?? []), ...(it.artifacts ?? [])]) {
        if (now.has(f.target)) continue;
        await fs.rm(path.join(root, targetToRel(f.target)), { force: true });
        removed += 1;
      }
    }
  }

  const manifest = {
    schemaVersion: MANIFEST_VERSION,
    namespace: ns,
    name: registry.name ?? ns,
    description: description || registry.description || '',
    homepage,
    license: license ?? registry.license ?? null,
    upstream: { source, version, registrySchemaVersion: registry.schemaVersion ?? null, three: registry.compatibility?.three ?? null, capabilities: registry.compatibility?.capabilities ?? [], defaultItem: registry.defaultItem ?? null },
    prefix,
    adoptedAt: new Date().toISOString(),
    items,
  };
  await fs.writeFile(path.join(root, PACK_FILE), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  void pkgDir;
  return { root, manifest, files: written.files, artifacts: written.artifacts, removed };
}

/**
 * Which adopted files have been edited since adoption: `[{ item, target,
 * adopted, current }]` -- `current` null when the file is gone. Records,
 * compounds and thumbnails are thaikit's own and never count.
 */
export async function divergence(root) {
  const manifest = await readManifest(root);
  if (!manifest) throw new Error(`${toRepoRelative(root)} holds no ${PACK_FILE}`);
  const out = [];
  for (const it of manifest.items ?? []) {
    for (const f of [...(it.files ?? []), ...(it.artifacts ?? [])]) {
      if (!f.hash) continue;
      let current = null;
      try {
        current = sha256(await fs.readFile(path.join(root, targetToRel(f.target))));
      } catch (err) {
        if (err.code !== 'ENOENT') throw err;
      }
      if (current !== f.hash) out.push({ item: it.name, target: f.target, adopted: f.hash, current });
    }
  }
  return out;
}

/** `building-part` from `Building Part`, the inverse of tree.mjs's titleCase. */
export function slugCategory(category) {
  const slug = String(category ?? '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug || 'uncategorised';
}

/**
 * A brand-new asset record for an adopted item, from what the probe measured.
 * Validated by the store when it is written; every field the schema requires
 * is filled here, everything else takes its default.
 */
export function recordForAdopted({ ns, manifest, item, probe, entryRel, budgetClass }) {
  const now = new Date().toISOString();
  const size = probe?.size ?? { w: 1, h: 1, d: 1 };
  const declared = { w: Math.max(0.01, size.w), h: Math.max(0.01, size.h), d: Math.max(0.01, size.d) };
  const primaryAxis = ['w', 'h', 'd'].reduce((best, k) => (declared[k] > declared[best] ? k : best), 'h');
  const text = (item.description || item.title || item.name).trim();
  const version = manifest.upstream?.version ?? '';
  return {
    id: item.name,
    name: item.title || item.name,
    nameTh: '',
    description: item.description ?? '',
    category: slugCategory(item.meta?.category),
    tags: item.meta?.tags ?? [],
    prompts: { image: text, imageBase: text, texture: '', styleProfileId: 'thai-street-photoreal-v1' },
    subject: 'prop',
    budgetClass,
    scale: { declared, measured: declared, primaryAxis, tolerance: 0.1 },
    pivot: 'base-center',
    placement: ['floor'],
    physics: { enabled: false, massKg: null },
    destructionGroups: [],
    status: { image: 'pending', model: probe?.supported ? 'done' : 'failed' },
    image: null,
    model: {
      status: probe?.supported ? 'done' : 'failed',
      source: entryRel,
      export: 'createModel',
      triangles: probe?.stats?.triangles ?? null,
      vertices: probe?.stats?.vertices ?? null,
      meshes: probe?.stats?.meshes ?? null,
      materials: probe?.stats?.materials ?? null,
      textures: probe?.stats?.textures ?? null,
      drawCalls: probe?.stats?.drawCalls ?? null,
      uniqueGeometries: probe?.stats?.uniqueGeometries ?? null,
      runtime: { nodes: 0, sockets: probe?.sockets ?? [], pivots: probe?.pivots ?? [], destructionGroups: [] },
    },
    license: {
      spdx: manifest.license ?? 'MIT',
      generatedBy: [{ role: 'source', model: `${ns}@${version}`, vendor: 'vibe3d' }],
      notice: `Adopted from the vibe3d pack ${ns}@${version} (${manifest.upstream?.source ?? 'unknown source'}). Its licence and authorship are upstream's.`,
    },
    notes: `Adopted from ${ns}@${version}.`,
    createdAt: now,
    updatedAt: now,
  };
}
