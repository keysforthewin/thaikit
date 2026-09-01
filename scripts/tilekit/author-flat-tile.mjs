#!/usr/bin/env node
/**
 * Author a SURFACE tile: one flat quad wearing its reference plate and nothing else.
 *
 * This is the cheap sibling of author-tile.mjs. That script authors the road and
 * soi pieces, whose plates are composited band by band from `regions.mjs` and
 * which ship a four-map PBR set. A surface tile has no bands and no regions --
 * cobblestone, laterite, grass, pavers, terrazzo, concrete, brick, flagstone,
 * asphalt -- and its plate is ALREADY the thing that ships: the preview was
 * generated as a seamless, orthographic, shadowless 8 x 8 m albedo swatch by the
 * `thai-ground-tile-seamless-v1` profile, which is exactly what a base colour map
 * is. So the plate becomes `maps/albedo.webp` unchanged, and there is no
 * roughness, normal or AO map at all.
 *
 * That omission is deliberate and it is a trade, not an oversight. A synthesised
 * normal map derived from an albedo's luminance guesses relief from tone, so a
 * dark wet patch on concrete becomes a dent and a pale stone becomes a bump --
 * detail nobody measured, presented as though somebody had. One honest map beats
 * four maps three of which were invented. Roughness stays the material's authored
 * scalar 1 and metalness 0, which is right for every surface in this set.
 *
 * It honours the same downstream contract as every other prop:
 * `createObjectModel(spec, options)`, a bare `three` import and nothing else,
 * `root.userData.sculptRuntime`, one root pivot, no sockets, no destruction
 * groups, and the map load behind `if (options.baseUrl)` so the Node-side gates
 * can construct it with no DOM.
 *
 * Usage:
 *   node scripts/tilekit/author-flat-tile.mjs --id cobblestone-paving-tile
 *   node scripts/tilekit/author-flat-tile.mjs --all
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';
import { readRegistry, workDir, modelDir, toRepoRelative } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from '../lib/out.mjs';
import { TILES } from './regions.mjs';

/** Only the albedo ships, so it is the only map the spec may declare. */
const SHIPPED = ['albedo'];

/**
 * WebP quality for the shipped albedo.
 *
 * The source is already a JPEG, so its blocking is baked in and re-encoding
 * cannot recover what it lost -- 92 is the point past which the encoder starts
 * spending bytes preserving that JPEG noise rather than the stone.
 */
const WEBP_QUALITY = 92;

/**
 * A surface tile is anything tagged `flat-quad` that is not one of the road and
 * soi pieces `regions.mjs` already owns. Selecting on the tag rather than a hand
 * list means a tile added to the registry later is picked up by `--all` without
 * this file being edited, which is how the two authoring routes stay disjoint
 * without either of them holding a copy of the other's membership.
 */
export function isSurfaceTile(asset) {
  return (asset.tags ?? []).includes('flat-quad') && !TILES[asset.id];
}

function spec(asset, pxPerMetre) {
  const { w, d } = asset.scale.declared;
  return {
    schemaVersion: 3,
    objectId: asset.id,
    objectName: asset.name,
    subject: 'prop',
    coordinateFrame: {
      up: '+Y',
      origin: 'base-center',
      units: 'metres',
      note: 'The quad lies in the ground plane at y=0; the origin is its centre so tiles snap on the kit grid.',
    },
    scale: { width: w, height: 0.01, depth: d },
    performanceBudget: {
      targetTriangles: asset.targetTriangles,
      maxDrawCalls: asset.maxDrawCalls,
      maxMaterials: asset.maxMaterials,
      maxUniqueGeometries: asset.maxUniqueGeometries,
    },
    materials: [
      {
        id: 'surface',
        name: 'Ground surface',
        // NOT textureless, and this is the documented exception to that default:
        // the detail here is both resolvable at prop distance and the entire
        // identity of the prop -- a cobble tile with no cobbles is a grey square.
        // Nothing is synthesised at runtime either, so the 24-second canvas cost
        // the textureless rule exists to prevent is not on the table.
        textureless: { declared: false },
        color: '#ffffff',
        roughness: 1,
        metalness: 0,
        referencePbr: {
          usable: true,
          confidence: 0.9,
          estimatedFidelity: 0.9,
          verdict: 'pass',
          source:
            'the asset\'s own reference plate, generated as a seamless orthographic shadowless ' +
            'albedo swatch by the thai-ground-tile-seamless-v1 profile and shipped unaltered',
          maps: Object.fromEntries(
            SHIPPED.map((role) => [role, { url: `maps/${role}.webp`, channel: role, source: 'preview-plate' }]),
          ),
        },
        textureProjection: { repeat: [1, 1], anisotropy: 8 },
      },
    ],
    componentTree: [
      {
        id: 'deck',
        name: 'Ground deck',
        primitive: 'plane-card',
        material: 'surface',
        transform: { position: [0, 0, 0], rotation: [-90, 0, 0], scale: [w, d, 1] },
      },
    ],
    runtimeContract: {
      pivots: ['root'],
      sockets: [],
      destructionGroups: [],
      note:
        'A ground tile is static level geometry. It has no moving parts, so one root pivot is ' +
        'the whole of its contract -- and nothing attaches to it, so it has no sockets.',
    },
    textureAuthoring: {
      pxPerMetre,
      note:
        'Derived from the plate the generator actually returned rather than requested: the ' +
        'density a tile ships at is a property of its image, and recording the requested ' +
        'number instead is how a set comes to disagree with itself about its own scale.',
    },
  };
}

function factory(asset) {
  const { w, d } = asset.scale.declared;
  return `import * as THREE from 'three';

/**
 * ${asset.name} — a flat ground tile.
 *
 * Two triangles, one geometry, one material. Everything a player sees on this
 * prop is in the albedo: every stone, joint, rut and stain is painted, never
 * built. Nothing stands proud of the ground plane, which is the point -- a
 * ground tile must not catch a player's feet.
 */
export type ProceduralModelOptions = {
  /**
   * Where this prop's shipped files live, with a trailing slash.
   *
   * The map is recorded as a bare filename because the bundle is EVALUATED
   * rather than imported: it has no import.meta and no currentScript, so it
   * cannot see its own URL, and a relative path would resolve against whatever
   * document is hosting it instead. Both hosts derive this from the module URL.
   */
  baseUrl?: string;
  textureAnisotropy?: number;
  receiveShadow?: boolean;
};

export function createObjectModel(
  _spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = new THREE.Group();
  root.name = '${asset.id}';

  const geometry = new THREE.PlaneGeometry(${w}, ${d}, 1, 1);
  geometry.rotateX(-Math.PI / 2);

  const material = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
    // Left white on purpose: the albedo map carries the colour, and tinting it
    // would fight the tone the plate was generated at.
    color: 0xffffff,
  });

  // Behind the baseUrl guard so the Node-side gates -- promote's headless
  // construction, derive-colliders, check-coplanar -- can build this factory in a
  // runtime with no DOM, where ImageLoader throws.
  const base = options.baseUrl;
  if (base) {
    const albedo = new THREE.TextureLoader().load(new URL('maps/albedo.webp', base).href);
    albedo.colorSpace = THREE.SRGBColorSpace;
    // The tile is authored at exactly its own footprint, so it never repeats
    // within itself. Repeat wrapping is still correct: a level builder that
    // scales a tile should get more ground, not a stretched one.
    albedo.wrapS = THREE.RepeatWrapping;
    albedo.wrapT = THREE.RepeatWrapping;
    albedo.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? 8));
    material.map = albedo;
    material.needsUpdate = true;
  }

  const deck = new THREE.Mesh(geometry, material);
  deck.name = 'deck';
  deck.receiveShadow = options.receiveShadow ?? true;
  // A ground plane casting a shadow onto nothing is pure cost.
  deck.castShadow = false;
  root.add(deck);

  root.userData.sculptRuntime = {
    nodes: 2,
    pivots: [{ name: 'root', object: 'root' }],
    sockets: [],
    colliders: [],
    destructionGroups: [],
  };

  return root;
}

/**
 * The one-argument entry point: vibe3d's contract, and img2threejs's own.
 *
 * \`createObjectModel\` above keeps thaikit's historical (spec, options) shape so
 * the harness, the level editor and the Node-side gates carry on unchanged.
 * \`spec\` has never been passed by any caller, so this is the honest signature,
 * and it is what a vibe3d consumer installs and calls.
 */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}

export default createObjectModel;
`;
}

async function authorOne(asset) {
  const dir = workDir(asset.id);
  await fs.mkdir(path.join(dir, 'src'), { recursive: true });
  await fs.mkdir(path.join(dir, 'maps'), { recursive: true });

  // The plate IS the albedo, so it is transcoded and not reinterpreted: no
  // resize, no tone correction, no sharpening. Anything done to it here would be
  // a second opinion about a surface that was already measured once.
  const plate = path.join(modelDir(asset.id), 'preview.jpg');
  const image = sharp(plate);
  const meta = await image.metadata();
  const albedoPath = path.join(dir, 'maps/albedo.webp');
  await image.webp({ quality: WEBP_QUALITY }).toFile(albedoPath);

  const pxPerMetre = Math.round(meta.width / asset.scale.declared.w);
  const specPath = path.join(dir, 'object-sculpt-spec.json');
  await fs.writeFile(specPath, `${JSON.stringify(spec(asset, pxPerMetre), null, 2)}\n`);
  const tsPath = path.join(dir, 'src/createObjectModel.ts');
  await fs.writeFile(tsPath, factory(asset));

  return {
    id: asset.id,
    plate: `${meta.width}x${meta.height}`,
    pxPerMetre,
    albedo: toRepoRelative(albedoPath),
    spec: toRepoRelative(specPath),
    source: toRepoRelative(tsPath),
  };
}

async function main() {
  const args = parseArgs();
  const registry = await readRegistry();

  let assets;
  if (args.all) {
    assets = registry.assets.filter(isSurfaceTile);
  } else if (args.id) {
    const asset = registry.assets.find((a) => a.id === args.id);
    if (!asset) return fail(`no asset with id ${args.id}`);
    if (!isSurfaceTile(asset)) {
      return fail(
        `${args.id} is not a surface tile. The road and soi pieces are authored by ` +
          'scripts/tilekit/author-tile.mjs, which composites their bands from regions.mjs.',
      );
    }
    assets = [asset];
  } else {
    return fail('need --id <asset> or --all');
  }
  if (!assets.length) return fail('no surface tiles matched');

  const results = [];
  for (const asset of assets) {
    if (asset.status.image !== 'done') {
      return fail(`${asset.id} has no reference plate (status.image=${asset.status.image}). Run thaikit-preview-image first.`);
    }
    const result = await authorOne(asset);
    log(`${result.id}: ${result.plate} plate -> ${result.pxPerMetre} px/m, spec + factory written`);
    results.push(result);
  }
  ok({ count: results.length, maps: SHIPPED, tiles: results });
}

if (import.meta.url === `file://${process.argv[1]}`) main().catch((err) => fail(err));
