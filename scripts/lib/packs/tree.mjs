/**
 * thaikit's own prop kit as a vibe3d registry, read STRAIGHT FROM THE SOURCE
 * TREE -- packages/props/src/models/<id>/ -- with nothing inlined.
 *
 * The published pack (`build-vibe3d-registry.mjs`) inlines every file as text
 * and every image as base64, which is what a consumer downloads. Installing
 * thaikit's own kit that way means a 27 MB JSON round trip for 134 props that
 * are already on disk, and it needs the export to have been run first. This
 * synthesises the same items with `src` (an absolute path) in place of
 * `content`; `materialise()` copies instead of decoding. It is also what makes
 * a ONE-item refresh cheap.
 *
 * The items are shaped like vibe3d's so the rest of the installer cannot tell
 * the difference, with two private extras: `_thumb` (the rendered thumbnail
 * already in the tree, so Chrome is not on the critical path) and `_sourceDir`
 * (the live directory the catalogue should read sidecars from).
 */
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

import { REPO_ROOT, MODELS_DIR, modelDir, readRegistry, shipsAsset, toRepoRelative } from '@thaikit/registry-core';

import { readManifest } from './adopt.mjs';

const DEFAULT_THREE = '>=0.185.0';
const DEFAULT_LICENSE_NOTICE = 'Fully synthetic. No third-party scanned or scraped geometry.';

/** Their v2 artifact media types, by extension. Images only: nothing else ships. */
export const MEDIA_TYPES = { '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' };

/**
 * `ProceduralModelOptions` from the generated factory, expressed as vibe3d
 * controls so their docs app can drive the model without reading the source.
 * Shared by every prop because every generated factory takes the same options.
 */
export const CONTROLS = {
  wireframe: { type: 'boolean', label: 'Wireframe', description: 'Draw every material in wireframe. Diagnostic, not a look.', default: false },
  castShadow: { type: 'boolean', label: 'Cast shadow', default: true },
  receiveShadow: { type: 'boolean', label: 'Receive shadow', default: true },
  textureSize: {
    type: 'number', label: 'Texture size',
    description: 'Edge of each synthesised texture. Ignored by materials that declare `textureless`, which is most of them; where it does apply the cost is the SQUARE of this number.',
    default: 1024, min: 256, max: 2048, step: 256, unit: 'px',
  },
  textureAnisotropy: { type: 'number', label: 'Anisotropy', default: 8, min: 1, max: 16, step: 1 },
  qualityPriority: {
    type: 'select', label: 'Quality priority', description: 'Only affects the default texture size when one is not given.',
    default: 'reference-fidelity', options: ['reference-fidelity', 'balanced'],
  },
};

/** `building-part` -> `Building Part`. Their categories are free strings, capitalised. */
export const titleCase = (slug) =>
  slug.split('-').filter(Boolean).map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');

async function readIfPresent(file) {
  try {
    return await fs.readFile(file);
  } catch (err) {
    if (err.code === 'ENOENT') return null;
    throw err;
  }
}

/**
 * The vibe3d `meta` block for one asset. The only structured metadata their
 * schema accepts; everything else rides in `thaikit.json`.
 */
export function itemMeta(asset, { parts = [], materialSlots = [], previewTarget = null } = {}) {
  const body =
    asset.description?.trim() || asset.notes?.trim() || `${asset.name}: a procedural Three.js prop built as source, not a mesh.`;
  // A trademark notice must reach a consumer even though `meta` has no field for it.
  const notice = asset.license?.notice?.trim();
  const description = notice && notice !== DEFAULT_LICENSE_NOTICE ? `${notice} ${body}` : body;
  return {
    description,
    meta: {
      title: asset.name,
      description,
      category: titleCase(asset.category),
      tags: asset.tags ?? [],
      ...(previewTarget ? { preview: previewTarget } : {}),
      controls: CONTROLS,
      materialSlots,
      parts,
      sockets: asset.model?.runtime?.sockets ?? [],
    },
  };
}

/** Part and material names from the sculpt spec -- the thing that named them. */
export async function specNames(asset) {
  if (!asset.model?.spec) return { parts: [], materialSlots: [] };
  const raw = await readIfPresent(path.join(REPO_ROOT, asset.model.spec));
  if (!raw) return { parts: [], materialSlots: [] };
  const spec = JSON.parse(raw.toString('utf8'));
  return {
    parts: (spec.componentTree ?? []).map((c) => c.id).filter(Boolean),
    materialSlots: (spec.materials ?? []).map((m) => m.id).filter(Boolean),
  };
}

async function fileEntry(dir, id, name, { optional = false } = {}) {
  const abs = path.join(dir, name);
  const bytes = await readIfPresent(abs);
  if (!bytes) {
    if (optional) return null;
    throw new Error(`${id}: ${toRepoRelative(abs)} is missing`);
  }
  return { path: toRepoRelative(abs), target: `{models}/${id}/${name}`, src: abs, hash: sha256(bytes) };
}

async function artifactEntries(dir, id) {
  const mapsDir = path.join(dir, 'maps');
  let names;
  try {
    names = await fs.readdir(mapsDir);
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
  const out = [];
  for (const name of names.sort()) {
    const mediaType = MEDIA_TYPES[path.extname(name).toLowerCase()];
    if (!mediaType) continue;
    const abs = path.join(mapsDir, name);
    const bytes = await fs.readFile(abs);
    out.push({ path: toRepoRelative(abs), target: `{models}/${id}/maps/${name}`, src: abs, mediaType, hash: sha256(bytes), byteLength: bytes.byteLength });
  }
  return out;
}

/** One shipped asset as a source-backed vibe3d item. */
export async function treeItem(asset, { modelsDir = null } = {}) {
  const dir = modelsDir ? path.join(modelsDir, asset.id) : modelDir(asset.id);
  // A prop forked from an adopted pack and not yet rebuilt: upstream's model.ts
  // plus whatever it vendored, shipped as it is.
  if (asset.forkedFrom && !(await readIfPresent(path.join(dir, 'createObjectModel.ts')))) {
    const rel = path.posix.relative(toRepoRelative(path.dirname(dir)), toRepoRelative(dir));
    const { files, artifacts } = await entriesUnder(path.dirname(path.dirname(dir)), `${path.basename(path.dirname(dir))}/${rel}`, { id: asset.id });
    const { description, meta } = itemMeta(asset, {});
    const thumb = path.join(dir, 'thumb.webp');
    return {
      name: asset.id, type: 'vibe3d:model', title: asset.name, description,
      dependencies: [`three@${DEFAULT_THREE}`], registryDependencies: [],
      files, artifacts, meta,
      _thumb: (await readIfPresent(thumb)) ? thumb : null,
      _sourceDir: toRepoRelative(dir),
    };
  }
  const files = [
    await fileEntry(dir, asset.id, 'createObjectModel.ts'),
    await fileEntry(dir, asset.id, 'model.ts'),
    await fileEntry(dir, asset.id, 'thaikit.json'),
    await fileEntry(dir, asset.id, 'colliders.json', { optional: true }),
  ].filter(Boolean);
  const artifacts = await artifactEntries(dir, asset.id);
  const { parts, materialSlots } = await specNames(asset);
  const { description, meta } = itemMeta(asset, { parts, materialSlots });
  const thumb = path.join(dir, 'thumb.webp');
  return {
    name: asset.id,
    type: 'vibe3d:model',
    title: asset.name,
    description,
    dependencies: [`three@${DEFAULT_THREE}`],
    registryDependencies: [],
    files,
    artifacts,
    meta,
    _thumb: (await readIfPresent(thumb)) ? thumb : null,
    _sourceDir: toRepoRelative(dir),
  };
}

/**
 * The whole kit (or `only` some of it) as a registry the installer can take.
 *
 * `root` is the package directory (packages/props); its package.json gives the
 * name, version and license, exactly as an npm install of the pack would.
 */
export async function registryFromTree(root, { only = null, namespace = '@thai-kit' } = {}) {
  // An adopted third-party pack is a tree too, with a pack.json instead of a
  // package.json and its own models root; see registryFromAdopted below.
  const manifest = await readManifest(root);
  if (manifest) return registryFromAdopted(root, manifest, { only });

  const pkg = JSON.parse(await fs.readFile(path.join(root, 'package.json'), 'utf8'));
  const registry = await readRegistry();
  let assets = registry.assets.filter(shipsAsset);
  if (only) {
    const want = new Set(only);
    assets = assets.filter((a) => want.has(a.id));
    const missing = [...want].filter((id) => !assets.some((a) => a.id === id));
    if (missing.length) {
      const known = registry.assets.filter((a) => missing.includes(a.id)).map((a) => a.id);
      throw new Error(
        known.length
          ? `${known.join(', ')}: not shipping (hidden, quarantined or model not done)`
          : `no such asset in the tree: ${missing.join(', ')}`,
      );
    }
  }
  assets.sort((a, b) => a.id.localeCompare(b.id));
  const items = [];
  for (const asset of assets) items.push(await treeItem(asset));
  if (!only) {
    items.push({
      name: 'kit', type: 'vibe3d:kit', title: 'thaikit',
      description: 'The complete thaikit prop kit: procedural Three.js props for a browser FPS on low-end PCs.',
      dependencies: [], registryDependencies: items.map((it) => `${namespace}/${it.name}`), files: [], artifacts: [],
    });
  }
  return {
    registry: {
      $schema: 'https://vibe3d.dev/schema/registry.json',
      schemaVersion: 2,
      namespace,
      name: 'Thai Kit',
      description: pkg.description ?? '',
      license: pkg.license ?? 'MIT',
      defaultItem: only ? items[0]?.name : 'kit',
      compatibility: { vibe3d: '^0.0.1', engine: 'three', three: pkg.peerDependencies?.three ?? DEFAULT_THREE, capabilities: [] },
      items,
    },
    version: pkg.version,
    pkgDir: null,
    license: pkg.license ?? 'MIT',
    description: pkg.description ?? '',
    homepage: pkg.homepage ?? null,
    tree: toRepoRelative(MODELS_DIR),
  };
}

const TEXT_EXT = new Set(['.ts', '.tsx', '.js', '.mjs', '.cjs', '.json', '.md', '.txt', '.glsl', '.frag', '.vert', '.wgsl', '.csv']);
/** thaikit's own files beside an adopted item: never part of the pack. */
const THAIKIT_OWN = new Set(['thumb.webp', 'preview.jpg', 'imposter.png', 'object-sculpt-spec.json']);

/** Every file under `dir`, as POSIX paths relative to it, sorted. */
async function walk(dir, rel = '') {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
  const out = [];
  for (const e of entries.sort((a, b) => (a.name < b.name ? -1 : 1))) {
    if (e.name.startsWith('.')) continue;
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...(await walk(path.join(dir, e.name), r)));
    else out.push(r);
  }
  return out;
}

/** `models/x/y` -> `{models}/x/y`; `vibe3d/x` -> `{vibe3d}/x`. */
function relToTarget(rel) {
  const [head, ...rest] = rel.split('/');
  const token = { models: '{models}', vibe3d: '{vibe3d}' }[head];
  if (!token) throw new Error(`not under models/ or vibe3d/: ${rel}`);
  return `${token}/${rest.join('/')}`;
}

/** Source-backed file and artifact entries for everything under `root/<dirRel>`. */
async function entriesUnder(root, dirRel, { id }) {
  const files = [];
  const artifacts = [];
  for (const rel of await walk(path.join(root, dirRel))) {
    const name = path.posix.basename(rel);
    if (THAIKIT_OWN.has(name)) continue;
    const abs = path.join(root, dirRel, rel);
    const target = relToTarget(`${dirRel}/${rel}`);
    const ext = path.extname(name).toLowerCase();
    const mediaType = MEDIA_TYPES[ext];
    if (mediaType) {
      const bytes = await fs.readFile(abs);
      artifacts.push({ path: toRepoRelative(abs), target, src: abs, mediaType, hash: sha256(bytes), byteLength: bytes.byteLength });
    } else if (TEXT_EXT.has(ext)) {
      const bytes = await fs.readFile(abs);
      files.push({ path: toRepoRelative(abs), target, src: abs, hash: sha256(bytes) });
    }
    // Anything else (a stray binary) is not something a vibe3d item can carry.
  }
  if (!files.length && !artifacts.length) throw new Error(`${id}: nothing under ${dirRel}`);
  return { files, artifacts };
}

/**
 * An adopted pack (`adopted/<ns>/`, see adopt.mjs) as a registry the installer
 * can take, read back off disk so that EDITS to the adopted source are what
 * gets built. `pack.json` says which items there are and what they were; a
 * `thaikit.json` beside an item, once one exists, overrides its title,
 * description, category and tags and can hide it. Items whose directory is
 * gone (forked away) are skipped; records the manifest never named (a prop
 * promoted straight into this namespace) are picked up as thaikit-shaped items.
 */
export async function registryFromAdopted(root, manifest, { only = null } = {}) {
  const namespace = manifest.namespace;
  const modelsDir = path.join(root, 'models');
  const registry = await readRegistry({ modelsDir });
  const records = new Map(registry.assets.map((a) => [a.id, a]));
  const want = only ? new Set(only) : null;
  const items = [];
  const seen = new Set();

  for (const it of manifest.items ?? []) {
    if (it.type === 'vibe3d:kit') continue;
    if (it.type === 'vibe3d:model') {
      seen.add(it.name);
      if (want && !want.has(it.name)) continue;
      const dirRel = `models/${it.name}`;
      const dir = path.join(root, dirRel);
      try {
        await fs.access(dir);
      } catch {
        continue; // forked away, or removed by hand
      }
      const record = records.get(it.name) ?? null;
      if (record && !shipsAsset(record)) continue;
      const { files, artifacts } = await entriesUnder(root, dirRel, { id: it.name });
      const meta = { ...(it.meta ?? {}) };
      let title = it.title;
      let description = it.description;
      if (record) {
        const m = itemMeta(record, { parts: meta.parts ?? [], materialSlots: meta.materialSlots ?? [] });
        title = record.name;
        description = m.description;
        Object.assign(meta, { title: record.name, description: m.description, category: titleCase(record.category), tags: record.tags ?? [] });
        if (record.model?.runtime?.sockets?.length) meta.sockets = record.model.runtime.sockets;
      }
      if (!meta.title) meta.title = title;
      if (!meta.description) meta.description = description || title;
      if (!meta.category) meta.category = 'Uncategorised';
      delete meta.preview;
      const thumb = path.join(dir, 'thumb.webp');
      items.push({
        name: it.name, type: it.type, title, description,
        dependencies: it.dependencies ?? [], registryDependencies: it.registryDependencies ?? [],
        files, artifacts, meta,
        _thumb: (await readIfPresent(thumb)) ? thumb : null,
        _sourceDir: toRepoRelative(dir),
      });
      continue;
    }
    // A lib or any other support item: its files, re-read from disk.
    if (want) continue;
    const entry = { name: it.name, type: it.type, title: it.title ?? it.name, description: it.description ?? '', dependencies: it.dependencies ?? [], registryDependencies: it.registryDependencies ?? [], files: [], artifacts: [] };
    if (it.dir) {
      try {
        Object.assign(entry, await entriesUnder(root, it.dir, { id: it.name }));
      } catch {
        // its directory is gone; keep the item so dependency lists still resolve
      }
    }
    items.push(entry);
  }

  // Records the manifest never named: props promoted into this namespace.
  for (const asset of registry.assets) {
    if (seen.has(asset.id) || !shipsAsset(asset)) continue;
    if (want && !want.has(asset.id)) continue;
    items.push(await treeItem(asset, { modelsDir }));
  }

  if (want) {
    const missing = [...want].filter((n) => !items.some((i) => i.name === n));
    if (missing.length) throw new Error(`not in the adopted tree, or not shipping: ${missing.join(', ')}`);
  }
  items.sort((a, b) => a.name.localeCompare(b.name));
  const models = items.filter((i) => i.type === 'vibe3d:model');
  if (!only) {
    items.push({
      name: 'kit', type: 'vibe3d:kit', title: manifest.name ?? namespace, description: manifest.description || `The adopted ${namespace} pack.`,
      dependencies: [], registryDependencies: models.map((i) => `${namespace}/${i.name}`), files: [], artifacts: [],
    });
  }
  return {
    registry: {
      $schema: 'https://vibe3d.dev/schema/registry.json',
      schemaVersion: 2,
      namespace,
      name: manifest.name ?? namespace,
      description: manifest.description ?? '',
      license: manifest.license ?? 'MIT',
      defaultItem: only ? items[0]?.name : 'kit',
      compatibility: { vibe3d: '^0.0.1', engine: 'three', three: manifest.upstream?.three ?? DEFAULT_THREE, capabilities: manifest.upstream?.capabilities ?? [] },
      items,
    },
    version: manifest.upstream?.version ?? '0.0.0',
    pkgDir: null,
    license: manifest.license ?? null,
    description: manifest.description ?? '',
    homepage: manifest.homepage ?? null,
    tree: toRepoRelative(modelsDir),
    adopted: { root: toRepoRelative(root), upstream: manifest.upstream ?? null, adoptedAt: manifest.adoptedAt ?? null },
  };
}
