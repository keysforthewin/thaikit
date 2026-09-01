#!/usr/bin/env node
/**
 * Export shipped thaikit props as a Vibe3D registry.
 *
 * Vibe3D (github.com/vibe-stack/vibe3d) is a source-first model registry for
 * Three.js: a registry.json INLINES each file's TypeScript source plus a sha256,
 * and its CLI installs those files into the consuming app, shadcn-style. That is
 * the same bet thaikit makes -- the artefact is code -- so the export is a
 * repackaging, not a conversion. No geometry is touched and no GLB is produced.
 *
 * The source tree, packages/props/src/models/<id>/, is the source of truth --
 * laid out the way vibe3d's own kits are, one directory per prop, and read here
 * through registry-core's `readRegistry()`, which IS the tree scan. This writes
 * the derived `dist/registry.json`; nothing here reads back into the tree.
 *
 * EVERYTHING survives the trip. Their `modelMetadataSchema` is `.strict()`, so
 * pivots, colliders, destruction groups, the four budget ceilings, declared and
 * measured metres, placement, physics, the review and `nameTh` have no home in
 * `meta` -- but a `files[]` entry may be any file at all, so each item ships
 * FOUR: the factory, its vibe3d entry, `thaikit.json` (the whole asset record,
 * byte-for-byte the file in the tree) and `colliders.json` (the physics
 * compound). vibe3d's installer writes them beside `model.ts` without reading
 * them; thaikit's own installer reads them back. A non-default
 * `license.notice` still leads the description as well, because a consumer who
 * never opens thaikit.json must still see a trademark caveat.
 *
 * Emits schemaVersion 2, for `artifacts`. Fifteen skyline imposters and fifteen
 * ground tiles are mostly TEXTURE -- an imposter is two triangles and a keyed
 * RGBA plate -- and a source-only export shipped them as cards that drew
 * nothing. A v2 item carries those images inline as base64 with a sha256 and a
 * byte length, both of which their installer re-checks before writing them to
 * `target`. v1 had no way to express that, and the alternative (make every
 * consumer supply a `baseUrl`) is a pack that needs configuration to draw.
 *
 * Their `registryV2Schema` requires EVERY item to be a v2 item, so all 135
 * carry an `artifacts` array -- empty for the 104 props that synthesise their
 * surfaces at construction, which is most of them. `representations` is the
 * other v2 addition and is not used: it describes compiled topology, and these
 * props are the source.
 *
 * Usage:
 *   node scripts/build-vibe3d-registry.mjs
 *   node scripts/build-vibe3d-registry.mjs --out somewhere/else/registry.json
 *   node scripts/build-vibe3d-registry.mjs --id 7-eleven-store-building
 *   node scripts/build-vibe3d-registry.mjs --namespace @thai-kit --three '>=0.185.0'
 */
import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

import { readRegistry, shipsAsset, modelDir, REPO_ROOT } from '@thaikit/registry-core';

import { domReport } from './lib/dom-guard.mjs';
import { entryModule, previewHelpers } from './lib/vibe3d-entry.mjs';
import { ok, fail, log, parseArgs } from './lib/out.mjs';

/**
 * Inside the package that publishes it, `@thai-kit/props`, whose package.json
 * points `vibe3d.registry` here. Generated and gitignored: a pack is
 * re-downloadable, from npm or by re-running this script.
 */
const DEFAULT_OUT = 'packages/props/dist/registry.json';
/**
 * Matches Vibe3D's own kit naming (`@scifi-kit`). It is baked into every address
 * in the emitted registry AND into consumers' models.lock.json, so changing it
 * after anyone has installed is a breaking change.
 */
const DEFAULT_NAMESPACE = '@thai-kit';
/**
 * The schema default for `license.notice`. Anything else is a real notice a
 * human wrote and must survive the export; this value carries no information.
 */
const DEFAULT_LICENSE_NOTICE = 'Fully synthetic. No third-party scanned or scraped geometry.';

/** Matches this repo's own `three` dependency, and Vibe3D's scifi-kit floor. */
const DEFAULT_THREE = '>=0.185.0';

/** Their address grammar, from packages/schema: registryAddressSchema. */
const ADDRESS_RE = /^@[a-z0-9][a-z0-9-]*(?:\/[a-z0-9][a-z0-9-]*)?$/;
/** Their registryArtifactSchema pins the hash to lowercase hex sha256. */
const ARTIFACT_HASH_RE = /^[a-f0-9]{64}$/;

/** Their item-name grammar. Leading digits are allowed, so `7-eleven-...` is fine. */
const NAME_RE = /^[a-z0-9][a-z0-9-]*$/;

/**
 * `ProceduralModelOptions` from the generated factory, expressed as Vibe3D
 * controls so their docs app can drive the model without reading the source.
 * Shared by every prop because every generated factory takes the same options.
 */
const CONTROLS = {
  wireframe: {
    type: 'boolean',
    label: 'Wireframe',
    description: 'Draw every material in wireframe. Diagnostic, not a look.',
    default: false,
  },
  castShadow: {
    type: 'boolean',
    label: 'Cast shadow',
    default: true,
  },
  receiveShadow: {
    type: 'boolean',
    label: 'Receive shadow',
    default: true,
  },
  textureSize: {
    type: 'number',
    label: 'Texture size',
    description:
      'Edge of each synthesised texture. Ignored by materials that declare `textureless`, which is most of them; where it does apply the cost is the SQUARE of this number.',
    default: 1024,
    min: 256,
    max: 2048,
    step: 256,
    unit: 'px',
  },
  textureAnisotropy: {
    type: 'number',
    label: 'Anisotropy',
    default: 8,
    min: 1,
    max: 16,
    step: 1,
  },
  qualityPriority: {
    type: 'select',
    label: 'Quality priority',
    description: 'Only affects the default texture size when one is not given.',
    default: 'reference-fidelity',
    options: ['reference-fidelity', 'balanced'],
  },
};

const sha256 = (content) => createHash('sha256').update(content).digest('hex');

/** `building-part` -> `Building Part`. Their categories are free strings, capitalised. */
const titleCase = (slug) =>
  slug
    .split('-')
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

const posix = (p) => p.split(path.sep).join('/');

/**
 * Their v2 artifact media types, by extension. Only the maps a factory loads
 * ship: webp (and png/jpeg should a prop ever author one). No .ktx2 -- the
 * per-asset KTX2 siblings are gone; the level bake encodes its own.
 */
const MEDIA_TYPES = {
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
};

/**
 * A prop's shipped images, as schemaVersion 2 `artifacts`.
 *
 * These are the one thing a source-only export cannot carry: an imposter IS two
 * triangles plus a keyed RGBA texture, and a road tile's albedo is most of what
 * it looks like. Inlined base64 beside the source, which their installer
 * decodes, length-checks and hashes before writing to `target`.
 *
 * `maps/` is taken WHOLESALE rather than by parsing the source for filenames:
 * the tiles build theirs from a MAPS array (`loadMap(base, `${name}.webp`)`),
 * so there is no literal to match.
 */
async function collectArtifacts(asset) {
  const dir = path.join(modelDir(asset.id), 'maps');
  let names;
  try {
    names = await fs.readdir(dir);
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }

  const artifacts = [];
  for (const name of names.sort()) {
    const mediaType = MEDIA_TYPES[path.extname(name).toLowerCase()];
    if (!mediaType) continue;
    const bytes = await fs.readFile(path.join(dir, name));
    artifacts.push({
      path: posix(path.relative(REPO_ROOT, path.join(dir, name))),
      target: `{models}/${asset.id}/maps/${name}`,
      mediaType,
      encoding: 'base64',
      content: bytes.toString('base64'),
      // Their schema pins this to lowercase hex sha256 of the DECODED bytes,
      // and their installer recomputes it before writing.
      hash: sha256(bytes),
      byteLength: bytes.byteLength,
    });
  }
  return artifacts;
}

async function readIfPresent(absolute) {
  try {
    return await fs.readFile(absolute);
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

async function buildItem(asset, previewTarget) {
  const sourceRelative = asset.model.source;
  if (!sourceRelative) throw new Error(`${asset.id}: model.source is not recorded`);

  const sourceAbsolute = path.join(REPO_ROOT, sourceRelative);
  const source = await fs.readFile(sourceAbsolute, 'utf8');

  const { hits, guarded } = domReport(source);
  if (!guarded) {
    log(
      `  ! ${asset.id}: ${hits.length} DOM reference(s) and no DOM or baseUrl guard anywhere ` +
        `(lines ${hits.slice(0, 8).join(', ')}${hits.length > 8 ? ', ...' : ''}). ` +
        'Vibe3D previews and exports headlessly; this will throw there.',
    );
  }

  const artifacts = await collectArtifacts(asset);
  const dir = modelDir(asset.id);
  const relDir = posix(path.relative(REPO_ROOT, dir));

  // `model.ts` is a COMMITTED file beside the factory, written by promote. It is
  // read from disk and checked against what this repo would emit for the
  // factory's current exports: a stale entry (a renamed look-dev helper, say)
  // would compile in nobody's project, so drift is a hard stop, not a warning.
  const entryOnDisk = await readIfPresent(path.join(dir, 'model.ts'));
  if (!entryOnDisk) throw new Error(`${asset.id}: no model.ts beside the factory; re-run promote-model.mjs`);
  const entryExpected = entryModule(asset, previewHelpers(source), artifacts.length > 0);
  if (entryOnDisk.toString('utf8') !== entryExpected) {
    throw new Error(`${asset.id}: model.ts is stale against its factory; re-run promote-model.mjs --id ${asset.id}`);
  }
  const entry = entryOnDisk.toString('utf8');

  // The record and the compound, byte-for-byte the files in the tree, so a
  // consumer's install hashes to exactly what git holds.
  const record = await readIfPresent(path.join(dir, 'thaikit.json'));
  if (!record) throw new Error(`${asset.id}: no thaikit.json in ${relDir}`);
  const collidersDoc = await readIfPresent(path.join(dir, 'colliders.json'));
  if (!collidersDoc) log(`  ! ${asset.id}: no colliders.json; the pack ships without a compound for it`);

  // createObjectModel.ts FIRST: thaikit's installer takes files[0].hash as the
  // item hash, and the JSON files can never be picked as the entry (pickEntry
  // only considers .ts/.js).
  const files = [
    {
      path: posix(sourceRelative),
      target: `{models}/${asset.id}/createObjectModel.ts`,
      content: source,
      hash: sha256(source),
    },
    {
      path: `${relDir}/model.ts`,
      target: `{models}/${asset.id}/model.ts`,
      content: entry,
      hash: sha256(entry),
    },
    {
      path: `${relDir}/thaikit.json`,
      target: `{models}/${asset.id}/thaikit.json`,
      content: record.toString('utf8'),
      hash: sha256(record.toString('utf8')),
    },
    ...(collidersDoc
      ? [{
          path: `${relDir}/colliders.json`,
          target: `{models}/${asset.id}/colliders.json`,
          content: collidersDoc.toString('utf8'),
          hash: sha256(collidersDoc.toString('utf8')),
        }]
      : []),
  ];

  // Part and material names come from the sculpt spec rather than the built
  // scene: thaikit's registry records a node COUNT, and the spec is the thing
  // that named them in the first place. No module evaluation needed.
  let parts = [];
  let materialSlots = [];
  if (asset.model.spec) {
    const raw = await readIfPresent(path.join(REPO_ROOT, asset.model.spec));
    if (raw) {
      const spec = JSON.parse(raw.toString('utf8'));
      parts = (spec.componentTree ?? []).map((c) => c.id).filter(Boolean);
      materialSlots = (spec.materials ?? []).map((m) => m.id).filter(Boolean);
    }
  }

  // Their schema wants both non-empty. thaikit's `description` is routinely blank
  // because `notes` is where the asset-list skill actually writes.
  const body =
    asset.description?.trim() ||
    asset.notes?.trim() ||
    `${asset.name}: a procedural Three.js prop built as source, not a mesh.`;

  // The ONE piece of dropped metadata that gets carried anyway: a trademark
  // notice. Eighteen props depict real marks -- 7-Eleven, Big C, PTT, the
  // Toyotas -- and `modelMetadataSchema` being `.strict()` means there is
  // nowhere structured to put that. Losing it is not the same kind of loss as
  // losing a pivot list: a consumer who never sees it ships someone else's
  // mark believing MIT covered it. So a non-default `license.notice` leads the
  // description. It used to reach consumers by accident, as the first sentence
  // of `notes`; that is now a deliberate line rather than a lucky one.
  const notice = asset.license?.notice?.trim();
  const description = notice && notice !== DEFAULT_LICENSE_NOTICE ? `${notice} ${body}` : body;

  const category = titleCase(asset.category);

  return {
    name: asset.id,
    type: 'vibe3d:model',
    title: asset.name,
    description,
    dependencies: [`three@${DEFAULT_THREE}`],
    registryDependencies: [],
    files,
    artifacts,
    meta: {
      title: asset.name,
      description,
      category,
      tags: asset.tags ?? [],
      ...(previewTarget ? { preview: previewTarget } : {}),
      controls: CONTROLS,
      materialSlots,
      parts,
      sockets: asset.model.runtime?.sockets ?? [],
    },
  };
}

/**
 * The checks from their zod schema that a malformed export would trip, applied
 * here so a bad file is caught at write time rather than by `vibe3d add`.
 */
function validate(registry) {
  const problems = [];
  if (!ADDRESS_RE.test(registry.namespace)) problems.push(`namespace does not match their grammar: ${registry.namespace}`);
  if (registry.license !== 'MIT') problems.push('license must be the literal "MIT"');
  if (registry.compatibility.engine !== 'three') problems.push('compatibility.engine must be "three"');

  const names = new Set();
  for (const item of registry.items) {
    if (!NAME_RE.test(item.name)) problems.push(`item name does not match their grammar: ${item.name}`);
    if (names.has(item.name)) problems.push(`duplicate item: ${item.name}`);
    names.add(item.name);
    if (!item.title?.length) problems.push(`${item.name}: empty title`);
    if (!item.description?.length) problems.push(`${item.name}: empty description`);
    for (const dependency of item.registryDependencies) {
      if (!ADDRESS_RE.test(dependency)) problems.push(`${item.name}: bad registry address ${dependency}`);
    }
    for (const file of item.files) {
      if (!file.path || !file.target || !file.hash) problems.push(`${item.name}: incomplete file entry`);
    }
    // Their registryArtifactSchema is strict, and their installer throws on a
    // mismatched length or a stale hash rather than writing a bad image. Catch
    // both here, where the fix is a re-export rather than a consumer's failed
    // install.
    for (const artifact of item.artifacts ?? []) {
      if (!ARTIFACT_HASH_RE.test(artifact.hash)) {
        problems.push(`${item.name}: artifact hash is not lowercase hex sha256: ${artifact.path}`);
      }
      if (artifact.encoding !== 'base64') problems.push(`${item.name}: artifact encoding must be base64`);
      if (!artifact.mediaType) problems.push(`${item.name}: artifact has no mediaType: ${artifact.path}`);
      const decoded = Buffer.from(artifact.content, 'base64');
      if (decoded.byteLength !== artifact.byteLength) {
        problems.push(`${item.name}: artifact byteLength disagrees with its content: ${artifact.path}`);
      }
      if (sha256(decoded) !== artifact.hash) {
        problems.push(`${item.name}: artifact hash disagrees with its content: ${artifact.path}`);
      }
    }
  }
  if (!names.has(registry.defaultItem)) problems.push(`defaultItem does not exist: ${registry.defaultItem}`);
  return problems;
}

async function main() {
  const args = parseArgs();
  const outRelative = typeof args.out === 'string' ? args.out : DEFAULT_OUT;
  const namespace = typeof args.namespace === 'string' ? args.namespace : DEFAULT_NAMESPACE;
  const outAbsolute = path.resolve(REPO_ROOT, outRelative);
  const outDir = path.dirname(outAbsolute);

  const registry = await readRegistry();
  if (registry.license && registry.license !== 'MIT') {
    throw new Error(`Vibe3D registries must be MIT; thaikit declares ${registry.license}`);
  }

  // Only props that actually ship -- the one predicate every gate shares.
  let assets = registry.assets.filter(shipsAsset);
  if (typeof args.id === 'string') {
    assets = assets.filter((a) => a.id === args.id);
    if (!assets.length) throw new Error(`no shipped asset with id "${args.id}"`);
  }
  if (!assets.length) throw new Error('no shipped assets to export');
  assets.sort((a, b) => a.id.localeCompare(b.id));

  log(`exporting ${assets.length} prop(s) to ${outRelative}`);

  const items = [];
  const previews = [];
  for (const asset of assets) {
    // The preview is the RENDERED thumbnail (the hero frame the review looked at,
    // at the same 45/20 angle the pack installer would photograph), falling back
    // to the reference plate for a prop that has none. Copied beside the registry
    // so the emitted directory is self-contained, and referenced relatively.
    let previewTarget = null;
    for (const candidate of [asset.model?.thumb, asset.image?.file]) {
      if (!candidate) continue;
      const bytes = await readIfPresent(path.join(REPO_ROOT, candidate));
      if (!bytes) continue;
      previewTarget = `previews/${asset.id}${path.extname(candidate)}`;
      previews.push({ target: previewTarget, bytes });
      break;
    }
    items.push(await buildItem(asset, previewTarget));
    log(`  ${asset.id}`);
  }

  // A kit item, mirroring their scifi-kit: `vibe3d add @thaikit` then pulls the
  // whole prop kit, and it gives the registry a defaultItem that is not an
  // arbitrary prop.
  const modelNames = items.map((item) => item.name);
  items.push({
    name: 'kit',
    type: 'vibe3d:kit',
    title: 'thaikit',
    description: 'The complete thaikit prop kit: procedural Three.js props for a browser FPS on low-end PCs.',
    dependencies: [],
    registryDependencies: modelNames.map((name) => `${namespace}/${name}`),
    files: [],
    artifacts: [],
  });

  const out = {
    $schema: 'https://vibe3d.dev/schema/registry.json',
    schemaVersion: 2,
    namespace,
    name: 'Thai Kit',
    description:
      'Game-ready Thai street props as procedural Three.js source: each prop is a factory that builds a THREE.Group in code, with named pivots, sockets and colliders on root.userData.sculptRuntime.',
    // Their schema pins this to the literal 'MIT'. If thaikit ever relicenses,
    // the export stops being expressible rather than silently misdeclaring.
    license: 'MIT',
    defaultItem: 'kit',
    compatibility: {
      vibe3d: '^0.0.1',
      engine: 'three',
      three: typeof args.three === 'string' ? args.three : DEFAULT_THREE,
      capabilities: [],
    },
    items,
  };

  const problems = validate(out);
  if (problems.length) {
    for (const problem of problems) log(`  ! ${problem}`);
    throw new Error(`${problems.length} schema problem(s); nothing written`);
  }

  // previews/ is rebuilt from scratch: a preview the registry no longer names
  // (a prop renamed, or the .jpg plates a previous export used) would otherwise
  // ride into the tarball forever, and release-props counts them.
  await fs.rm(path.join(outDir, 'previews'), { recursive: true, force: true });
  await fs.mkdir(path.join(outDir, 'previews'), { recursive: true });
  for (const preview of previews) {
    await fs.writeFile(path.join(outDir, preview.target), preview.bytes);
  }
  await fs.writeFile(outAbsolute, `${JSON.stringify(out, null, 2)}\n`, 'utf8');

  const bytes = Buffer.byteLength(JSON.stringify(out));
  log(`wrote ${outRelative} (${items.length} items, ${(bytes / 1024).toFixed(0)} KB)`);

  const artifactCount = items.reduce((n, item) => n + (item.artifacts?.length ?? 0), 0);
  const artifactBytes = items.reduce(
    (n, item) => n + (item.artifacts ?? []).reduce((m, a) => m + a.byteLength, 0),
    0,
  );

  ok({
    out: posix(path.relative(REPO_ROOT, outAbsolute)),
    namespace,
    schemaVersion: out.schemaVersion,
    artifacts: artifactCount,
    artifactBytes,
    models: items.filter((item) => item.type === 'vibe3d:model').length,
    items: items.length,
    previews: previews.length,
    bytes,
  });
}

main().catch(fail);
