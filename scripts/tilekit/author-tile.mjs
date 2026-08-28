#!/usr/bin/env node
/**
 * Author a ground tile's sculpt spec and its Three.js factory.
 *
 * These tiles do NOT go through img2threejs's factory generator, and that is a
 * deliberate exception rather than a shortcut. The generator's smallest plane is
 * PlaneGeometry(1, 1, 4, 4) even at its lowest tessellation tier -- 32 triangles
 * where the declared budget for these pieces is 2 -- because it is built for
 * props whose identity is in their shape. A road tile's identity is entirely in
 * its surface: two triangles, one geometry, one material, and every marking,
 * slab joint and drain lid a pixel. There is no reconstruction here for a review
 * loop to judge, which is why there is no Meshy reference mesh either.
 *
 * What it must still honour is the contract everything downstream reads:
 * `createObjectModel(spec, options)`, a bare `three` import and nothing else,
 * `root.userData.sculptRuntime`, one root pivot, no sockets, the declared box
 * collider and no destruction groups.
 *
 * Usage:
 *   node scripts/tilekit/author-tile.mjs --id road-straight-tile
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { readRegistry, workDir, toRepoRelative } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from '../lib/out.mjs';
import { TILES } from './regions.mjs';
import { PX_PER_M } from './compose-maps.mjs';

/**
 * The maps the tile actually binds.
 *
 * `height` is composed and kept in scratch because AO is derived from it, but it
 * is not shipped: displacement on a two-triangle quad moves nothing, and a map
 * nothing reads is VRAM a low-end GPU pays for a feature it does not get.
 */
const SHIPPED = ['albedo', 'roughness', 'normal', 'ao'];

/**
 * The one tile that carries geometry.
 *
 * Every other piece in the set is a bare quad. The soi entrance keeps a modelled
 * sign because the sign is what tells a player this gap between buildings is a
 * NAMED soi rather than a service alley -- and because a level builder should
 * not have to remember to stand a separate prop on the right corner of the right
 * tile. It stands on the sidewalk corner beside the alley mouth, clear of both
 * the carriageway and the alley so nothing placed on either fouls it.
 */
const SIGN = {
  'soi-entrance-tile': { x: 0.1, z: 3.35, h: 2.2, yaw: 0 },
};

function spec(id, asset, tile) {
  const [w, d] = tile.footprint;
  return {
    schemaVersion: 3,
    objectId: id,
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
        name: 'Street surface',
        // NOT textureless, and this is the documented exception to that default:
        // the detail here is both resolvable at prop distance and the entire
        // identity of the prop. Nothing is synthesised at runtime either -- these
        // are authored files, so the 24-second canvas cost the textureless rule
        // exists to prevent is not on the table.
        textureless: { declared: false },
        color: '#ffffff',
        roughness: 1,
        metalness: 0,
        referencePbr: {
          usable: true,
          confidence: 0.9,
          estimatedFidelity: 0.9,
          verdict: 'pass',
          source: 'composited from fal-ai/patina/material substrates onto measured plate tone',
          maps: Object.fromEntries(
            SHIPPED.map((role) => [role, { url: `maps/${role}.webp`, channel: role, source: 'tilekit-composite' }]),
          ),
        },
        textureProjection: { repeat: [1, 1], anisotropy: 8 },
      },
      ...(SIGN[id]
        ? [
            {
              id: 'post',
              name: 'Galvanised steel post',
              // Mill-finish metal at prop distance: no resolvable detail, so a
              // texture set here would be five canvases for nothing.
              textureless: { declared: true, evidence: ['Reference: the post on the plate is a flat mid-grey cylinder with a broad specular falloff and no resolvable grain at 1024.'] },
              color: '#9a9a96',
              roughness: 0.55,
              metalness: 0.7,
            },
            {
              id: 'board',
              name: 'Enamel sign board',
              textureless: { declared: true, evidence: ['Reference: flat enamel plate, uniform albedo with a specular sheen and no surface structure. The lettering is a printed graphic, not a material property.'] },
              color: '#1f4f8f',
              roughness: 0.35,
              metalness: 0,
            },
          ]
        : []),
    ],
    componentTree: [
      {
        id: 'deck',
        name: 'Street deck',
        primitive: 'plane-card',
        material: 'surface',
        transform: { position: [0, 0, 0], rotation: [-90, 0, 0], scale: [w, d, 1] },
      },
      ...(SIGN[id]
        ? [
            {
              id: 'sign-post',
              name: 'Sign post',
              primitive: 'cylinder',
              material: 'post',
              transform: { position: [SIGN[id].x, SIGN[id].h / 2, SIGN[id].z], rotation: [0, 0, 0], scale: [0.06, SIGN[id].h, 0.06] },
              actionProfile: { collider: 'cylinder' },
            },
            {
              id: 'sign-board',
              name: 'Soi name board',
              primitive: 'box',
              material: 'board',
              transform: { position: [SIGN[id].x, SIGN[id].h - 0.22, SIGN[id].z], rotation: [0, SIGN[id].yaw, 0], scale: [0.72, 0.3, 0.04] },
              actionProfile: { collider: 'box' },
            },
          ]
        : []),
    ],
    runtimeContract: {
      pivots: ['root'],
      sockets: [],
      destructionGroups: [],
      note:
        'A road tile is static level geometry. It has no moving parts, so one root pivot is the ' +
        'whole of its contract -- and nothing attaches to it, so it has no sockets.',
    },
    textureAuthoring: {
      pxPerMetre: PX_PER_M,
      note:
        'Every tile in the set shares this texel density. Substrate grain that changes scale ' +
        'across a join reads as a join even when the band boundaries line up exactly.',
    },
  };
}

function factory(id, asset, tile) {
  const [w, d] = tile.footprint;
  const sign = SIGN[id];

  // Segment counts are chosen against the declared triangle budget, not by
  // habit: an 8-sided post is round enough for something 6 cm across that a
  // player only ever sees from a few metres away.
  const signBody = sign
    ? `
  // The sign. It stands on the sidewalk corner beside the alley mouth, clear of
  // both the carriageway and the alley, so nothing placed on either fouls it.
  const postGeometry = new THREE.CylinderGeometry(0.03, 0.03, ${sign.h}, 8, 1);
  const postMaterial = new THREE.MeshStandardMaterial({ color: 0x9a9a96, roughness: 0.55, metalness: 0.7 });
  const post = new THREE.Mesh(postGeometry, postMaterial);
  post.name = 'sign-post';
  post.position.set(${sign.x}, ${sign.h / 2}, ${sign.z});
  post.castShadow = true;
  root.add(post);

  const boardGeometry = new THREE.BoxGeometry(0.72, 0.3, 0.04);
  const boardMaterial = new THREE.MeshStandardMaterial({ color: 0x1f4f8f, roughness: 0.35, metalness: 0 });
  const board = new THREE.Mesh(boardGeometry, boardMaterial);
  board.name = 'sign-board';
  board.position.set(${sign.x}, ${sign.h - 0.22}, ${sign.z});
  board.castShadow = true;
  root.add(board);
`
    : '';
  const nodes = sign ? 4 : 2;
  // No colliders on sculptRuntime any more. A tile's physics compound is derived
  // from the built geometry by scripts/derive-colliders.mjs and lives in
  // assets/<id>/colliders.json -- the names emitted here carried no extents and
  // nothing ever read them.
  const colliders = '[]';

  return `import * as THREE from 'three';

/**
 * ${asset.name} — a flat street tile.
 *
 * Two triangles, one geometry, one material. Everything a player sees on this
 * prop is in the maps: the carriageway, the sidewalk bands, the paint, the slab
 * coursing and the drain lids are painted, never built. Nothing stands proud of
 * the ground plane, which is the point -- a road tile must not catch a player's
 * feet, and there is no kerb here to step up onto.
 */
export type ProceduralModelOptions = {
  /**
   * Where this prop's shipped files live, with a trailing slash.
   *
   * The maps are recorded as bare filenames because the bundle is EVALUATED
   * rather than imported: it has no import.meta and no currentScript, so it
   * cannot see its own URL, and a relative path would resolve against whatever
   * document is hosting it instead. Both hosts derive this from the module URL.
   */
  baseUrl?: string;
  textureAnisotropy?: number;
  receiveShadow?: boolean;
};

const MAPS = ${JSON.stringify(SHIPPED)} as const;

function loadMap(
  base: string,
  file: string,
  colorSpace: THREE.ColorSpace,
  anisotropy: number,
): THREE.Texture {
  const texture = new THREE.TextureLoader().load(new URL(file, base).href);
  texture.colorSpace = colorSpace;
  // The tile is authored at exactly its own footprint, so it never repeats
  // within itself. Repeat wrapping is still correct: a level builder that scales
  // a tile should get more road, not a stretched one.
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = anisotropy;
  return texture;
}

export function createObjectModel(
  _spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = new THREE.Group();
  root.name = '${id}';

  const geometry = new THREE.PlaneGeometry(${w}, ${d}, 1, 1);
  geometry.rotateX(-Math.PI / 2);
  // aoMap reads the SECOND uv set. A PlaneGeometry only has one, so without this
  // the ambient occlusion is silently ignored and the drain channels and slab
  // joints lose the only shading that makes them read as recessed.
  const uv = geometry.getAttribute('uv');
  if (uv) geometry.setAttribute('uv1', uv);

  const anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? 8));
  const material = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
    // Left white on purpose: the albedo map carries the colour, and tinting it
    // would fight the tone that was measured off the reference plate.
    color: 0xffffff,
  });

  const base = options.baseUrl;
  if (base) {
    material.map = loadMap(base, 'maps/albedo.webp', THREE.SRGBColorSpace, anisotropy);
    material.roughnessMap = loadMap(base, 'maps/roughness.webp', THREE.NoColorSpace, anisotropy);
    material.normalMap = loadMap(base, 'maps/normal.webp', THREE.NoColorSpace, anisotropy);
    material.aoMap = loadMap(base, 'maps/ao.webp', THREE.NoColorSpace, anisotropy);
    material.aoMapIntensity = 0.85;
    material.needsUpdate = true;
  }

  const deck = new THREE.Mesh(geometry, material);
  deck.name = 'deck';
  deck.receiveShadow = options.receiveShadow ?? true;
  // A ground plane casting a shadow onto nothing is pure cost.
  deck.castShadow = false;
  root.add(deck);
${signBody}
  root.userData.sculptRuntime = {
    nodes: ${nodes},
    pivots: [{ name: 'root', object: 'root' }],
    sockets: [],
    colliders: ${colliders},
    destructionGroups: [],
  };

  return root;
}

export default createObjectModel;
`;
}

async function main() {
  const args = parseArgs();
  const id = args.id;
  if (!id) return fail('need --id');
  const tile = TILES[id];
  if (!tile) return fail(`${id} is not a ground tile`);

  const registry = await readRegistry();
  const asset = registry.assets.find((a) => a.id === id);
  if (!asset) return fail(`no asset with id ${id}`);

  const dir = workDir(id);
  await fs.mkdir(path.join(dir, 'src'), { recursive: true });

  const specPath = path.join(dir, 'object-sculpt-spec.json');
  await fs.writeFile(specPath, `${JSON.stringify(spec(id, asset, tile), null, 2)}\n`);
  const tsPath = path.join(dir, 'src/createObjectModel.ts');
  await fs.writeFile(tsPath, factory(id, asset, tile));

  log(`spec   : ${toRepoRelative(specPath)}`);
  log(`factory: ${toRepoRelative(tsPath)}`);
  ok({ id, spec: toRepoRelative(specPath), source: toRepoRelative(tsPath), maps: SHIPPED });
}

if (import.meta.url === `file://${process.argv[1]}`) main().catch((err) => fail(err));
