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
 * thaikit's registry stays the source of truth. This writes a SECOND, derived
 * file; nothing here reads back into `registry.json`.
 *
 * What does not survive the trip, by design: their `modelMetadataSchema` is
 * `.strict()`, so pivots, colliders, destruction groups, the four budget
 * ceilings, declared/measured metres, placement, pivot origin, the measured
 * stats, the img2threejs review and `nameTh` have nowhere to go. This script
 * does not smuggle them into `tags` or `description` -- a consumer wanting them
 * reads thaikit's own registry. The single exception is a non-default
 * `license.notice`, which leads the description: see below for why a trademark
 * caveat is not the same kind of loss as a dropped pivot list.
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

import { readRegistry, REPO_ROOT } from '@thaikit/registry-core';

import { domReport } from './lib/dom-guard.mjs';
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
 * Vibe3D's `createModel` contract, wrapping thaikit's `createObjectModel`.
 *
 * Written as a separate file rather than patched into the factory so the
 * generated source ships byte-for-byte identical to what this repo holds and
 * what img2threejs reviewed. Named `model.ts` because that is where the
 * vibe-model skill looks for `createModel`.
 */
/**
 * The per-asset look-dev helpers the generated factory already exports.
 *
 * Their names carry the prop's own name (`createOilDrumLookDevLights`,
 * `frameOilDrumCamera`), so they are discovered rather than assumed. A prop that
 * exports neither still gets a working preview from the fallbacks below.
 */
function previewHelpers(source) {
  return {
    lookDevLights: source.match(/export function (create\w*LookDevLights)\s*\(/)?.[1] ?? null,
    frameCamera: source.match(/export function (frame\w*Camera)\s*\(/)?.[1] ?? null,
  };
}

/**
 * Vibe3D's two entry points, wrapping thaikit's `createObjectModel`.
 *
 * `createModel` is what their CLI installs and a game calls. `createPreview` is
 * what their docs gallery calls -- `apps/docs/src/catalog.ts` types it as
 * `{ scene, root, camera, update(dt), dispose() }` -- and it is where all
 * preview-only scene setup belongs, per the vibe-model skill. Nothing here
 * reaches into the prop: the lights and camera come from helpers the factory
 * already exports, so a preview cannot drift from the model.
 *
 * Written as a separate file rather than patched into the factory so the
 * generated source ships byte-for-byte identical to what this repo holds and
 * what img2threejs reviewed. Named `model.ts` because that is where the
 * vibe-model skill looks for `createModel`.
 */
function entryModule(asset, helpers, hasArtifacts) {
  // Their catalog types the preview against `three/webgpu`, and their own models
  // import from it. That is safe to cross: three's `three.module.js` and
  // `three.webgpu.js` both re-export the scene graph from a shared
  // `three.core.js`, so `Mesh` from 'three' IS `Mesh` from 'three/webgpu' --
  // verified by identity, not assumed. Importing plain 'three' keeps the wrapper
  // matched to the factory beside it, which imports 'three' too.
  const named = ['createObjectModel'];
  if (helpers.lookDevLights) named.push(helpers.lookDevLights);
  if (helpers.frameCamera) named.push(helpers.frameCamera);

  const imports = `import {\n${named.map((n) => `  ${n},`).join('\n')}\n  type ProceduralModelOptions,\n} from './createObjectModel';`;

  // Fallbacks, emitted only when the factory did not export the real thing.
  const lightsFallback = helpers.lookDevLights
    ? ''
    : `
/** This prop's factory exports no look-dev rig, so the preview brings a neutral one. */
function defaultLookDevLights(): Group {
  const lights = new Group();
  lights.name = 'preview lights';
  lights.userData.excludeFromExport = true;
  lights.add(new HemisphereLight(0xf2f4ff, 0x363b42, 0.85));
  const key = new DirectionalLight(0xfff4e8, 2.15);
  key.position.set(4, 6, 5);
  lights.add(key);
  return lights;
}
`;

  const cameraFallback = helpers.frameCamera
    ? ''
    : `
/** This prop's factory exports no framing helper, so the preview frames it here. */
function defaultFrameCamera(
  camera: PerspectiveCamera,
  object: Object3D,
  options: { margin?: number; azimuthDeg?: number; elevationDeg?: number } = {},
): void {
  const box = new Box3().setFromObject(object);
  if (box.isEmpty()) return;
  const size = box.getSize(new Vector3());
  const center = box.getCenter(new Vector3());
  const maxDim = Math.max(size.x, size.y, size.z) * (options.margin ?? 1.15);
  const fov = (camera.fov * Math.PI) / 180;
  const distance = maxDim / 2 / Math.tan(fov / 2);
  const az = ((options.azimuthDeg ?? 0) * Math.PI) / 180;
  const el = ((options.elevationDeg ?? 0) * Math.PI) / 180;
  camera.position.copy(center).addScaledVector(
    new Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)),
    distance,
  );
  camera.near = Math.max(0.01, distance - maxDim);
  camera.far = distance + maxDim * 2;
  camera.lookAt(center);
  camera.updateProjectionMatrix();
}
`;

  // Only import what this prop's variant actually uses -- an unused import is a
  // build error under noUnusedLocals, which a consumer is entitled to have on.
  const threeNames = new Set(['Color', 'Group', 'Object3D', 'PerspectiveCamera', 'Scene']);
  if (!helpers.lookDevLights) for (const n of ['HemisphereLight', 'DirectionalLight']) threeNames.add(n);
  if (!helpers.frameCamera) for (const n of ['Box3', 'Vector3']) threeNames.add(n);
  const threeImports = [...threeNames].sort().map((n) => `  ${n},`).join('\n');

  // A prop whose images ship as v2 `artifacts` needs to find them at runtime.
  // In thaikit the bundle is EVALUATED and cannot see its own URL, which is why
  // the factories take bare filenames plus a `baseUrl`; here the wrapper is an
  // ordinary ES module sitting beside its own installed `maps/`, so
  // `import.meta.url` IS that answer, and bundlers resolve it to an emitted
  // asset. Defaulted rather than forced: a consumer who relocates the images
  // passes their own baseUrl and this stops applying.
  const baseUrlConst = hasArtifacts
    ? [
        '',
        "/**",
        " * Where this prop's shipped images live: beside this module, installed",
        ' * from this item\'s `artifacts`.',
        ' *',
        ' * Wrapped, because `import.meta` is EMPTY in a CommonJS bundle -- esbuild',
        " * rewrites it to `{}`, so `new URL('.', undefined)` throws `Invalid URL`",
        ' * and takes the whole factory down at construction. thaikit\'s own pack',
        ' * installer bundles to CJS and hit exactly that. Falling back to',
        ' * undefined is safe: the caller\'s own baseUrl still wins below, and a',
        ' * factory with no baseUrl simply skips its texture load.',
        ' */',
        'const BASE_URL: string | undefined = (() => {',
        '  try {',
        "    return new URL('.', import.meta.url).href;",
        '  } catch {',
        '    return undefined;',
        '  }',
        '})();',
        '',
      ].join('\n')
    : '';
  // `options` spreads LAST, so a caller who passes their own baseUrl wins.
  const baseUrlArg = hasArtifacts ? 'BASE_URL ? { baseUrl: BASE_URL, ...options } : options' : 'options';

  const lightsCall = helpers.lookDevLights ? `${helpers.lookDevLights}('neutral')` : 'defaultLookDevLights()';
  const frameCall = helpers.frameCamera ? helpers.frameCamera : 'defaultFrameCamera';

  return `/**
 * ${asset.name} -- Vibe3D entry point.
 *
 * Generated by thaikit's scripts/build-vibe3d-registry.mjs. Once installed this
 * file is yours: editing it is the point of a source-first registry.
 *
 * The model itself is in ./createObjectModel, unmodified.
 */
import {
${threeImports}
} from 'three';
import type { Material, Mesh, Texture } from 'three';

${imports}

export type { ProceduralModelOptions } from './createObjectModel';

/**
 * thaikit's factory takes (spec, options). \`spec\` is host-side inspection data
 * that already lives inside the module -- it is deliberately not a second source
 * of truth -- so it is left undefined here.
 */
${baseUrlConst}
export function createModel(options: ProceduralModelOptions = {}): Group {
  return createObjectModel(undefined, ${baseUrlArg});
}

/** The shape Vibe3D's docs catalogue expects back from \`createPreview\`. */
export interface ModelPreview {
  scene: Scene;
  root: Group;
  camera: PerspectiveCamera;
  update(deltaSeconds: number): void;
  dispose(): void;
}

export interface PreviewOptions extends ProceduralModelOptions {
  /** Viewport aspect ratio. */
  aspect?: number;
  /** Seconds into the turntable, so a captured frame is reproducible. */
  time?: number;
  /** Turntable speed. Zero holds the opening three-quarter view. */
  degreesPerSecond?: number;
  elevationDeg?: number;
  margin?: number;
}
${lightsFallback}${cameraFallback}
/**
 * A preview scene for the docs gallery. Everything it adds is preview-only and
 * never reaches the installed model root.
 *
 * The turntable moves the CAMERA rather than the prop: these props are pivoted
 * base-center, not bounding-box-center, so spinning the root would swing it
 * around an off-centre axis and wobble in frame.
 */
export function createPreview(options: PreviewOptions = {}): ModelPreview {
  const {
    aspect = 16 / 9,
    time = 0,
    degreesPerSecond = 18,
    elevationDeg = 20,
    margin = 1.25,
    ...modelOptions
  } = options;

  const root = createModel(modelOptions);

  const scene = new Scene();
  // The backdrop the model's own look-dev targets were authored against, so the
  // gallery tile matches the render the review looked at.
  const lookDev = root.userData.lookDevTargets as { backgroundColor?: string } | undefined;
  scene.background = new Color(lookDev?.backgroundColor ?? '#3A3A3A');
  scene.add(root);

  const lights = ${lightsCall};
  lights.userData.excludeFromExport = true;
  scene.add(lights);

  const camera = new PerspectiveCamera(35, aspect, 0.01, 1000);
  let elapsed = time;
  const aim = () => {
    ${frameCall}(camera, root, {
      margin,
      elevationDeg,
      azimuthDeg: 35 + elapsed * degreesPerSecond,
    });
  };
  aim();

  let disposed = false;

  return {
    scene,
    root,
    camera,
    update(deltaSeconds: number): void {
      if (disposed || degreesPerSecond === 0) return;
      elapsed += deltaSeconds;
      aim();
    },
    dispose(): void {
      if (disposed) return;            // idempotent, per the vibe-model contract
      disposed = true;
      const geometries = new Set<{ dispose(): void }>();
      const materials = new Set<Material>();
      scene.traverse((node: Object3D) => {
        const mesh = node as Mesh;
        if (!mesh.isMesh) return;
        geometries.add(mesh.geometry);
        for (const material of Array.isArray(mesh.material) ? mesh.material : [mesh.material]) {
          if (material) materials.add(material);
        }
      });
      for (const geometry of geometries) geometry.dispose();
      for (const material of materials) {
        // Textures are synthesised per material, so nothing else holds them.
        for (const value of Object.values(material as unknown as Record<string, unknown>)) {
          const texture = value as Texture | null;
          if (texture && (texture as { isTexture?: boolean }).isTexture) texture.dispose();
        }
        material.dispose();
      }
      scene.clear();
    },
  };
}

export default createModel;
`;
}

/** Their v2 artifact media types, by extension. Images only: nothing else ships. */
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
 * so there is no literal to match. The .ktx2 siblings are deliberately left
 * behind -- those exist for the level bake's GPU upload path, and nothing in a
 * factory loads them.
 */
async function collectArtifacts(asset) {
  const dir = path.join(REPO_ROOT, 'assets', asset.id, 'maps');
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
      path: posix(path.join('assets', asset.id, 'maps', name)),
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
  const entry = entryModule(asset, previewHelpers(source), artifacts.length > 0);
  const files = [
    {
      path: posix(sourceRelative),
      target: `{models}/${asset.id}/createObjectModel.ts`,
      content: source,
      hash: sha256(source),
    },
    {
      // No such file on disk: `path` is provenance only -- their installer writes
      // to `target`. Marked so nobody goes looking for it in this repo.
      path: `<generated>/${asset.id}/model.ts`,
      target: `{models}/${asset.id}/model.ts`,
      content: entry,
      hash: sha256(entry),
    },
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
  if (registry.license?.spdx && registry.license.spdx !== 'MIT') {
    throw new Error(
      `Vibe3D registries must be MIT; thaikit declares ${registry.license.spdx}`,
    );
  }

  // Same gate as build-registry.mjs: only props that actually ship.
  const ships = (a) =>
    !a.hidden && a.model.status === 'done' && Boolean(a.model.file) && !a.model.quarantine;

  let assets = registry.assets.filter(ships);
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
    // The preview plate is a JPEG next to the asset. Copied beside the registry
    // so the emitted directory is self-contained, and referenced relatively.
    let previewTarget = null;
    if (asset.image?.file) {
      const bytes = await readIfPresent(path.join(REPO_ROOT, asset.image.file));
      if (bytes) {
        previewTarget = `previews/${asset.id}${path.extname(asset.image.file)}`;
        previews.push({ target: previewTarget, bytes });
      }
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
