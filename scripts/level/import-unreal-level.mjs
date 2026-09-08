#!/usr/bin/env node
/**
 * An Unreal level, exported with Unreal's own glTF Exporter, into the bake
 * pipeline's RAW format -- so `bake-level.mjs` and `@thai-kit/level-runtime`
 * take it from there with no special case.
 *
 * The editor's export (`buildExportScene`) and this script produce the same
 * thing: `levels/<id>/build/raw.glb`, one mesh node per placement tagged
 * `extras.tk`, and `scene.extras.thaikitBake` carrying the placement rows,
 * lights, spawns and settings. Everything downstream -- normalise, partition,
 * join, the Cycles bake or the adopted Unreal lightmap, LOD, KTX2, the manifest
 * -- keys off those rows, which is why an Unreal level costs the runtime
 * nothing: `loadLevel()` reads `thaikitManifest`, and this makes one.
 *
 * What the Unreal side has to do (the `thaikit-unreal-bake` skill does it):
 *   - export the level with `GLTFExporter` at uniform scale 0.01 (metres, Y up),
 *     lights and cameras on, materials baked to textures, vertex colours on;
 *   - keep thaikit's Static Mesh names (`SM_TK_<Prop>`): they are how a placement
 *     finds its `@thai-kit/<prop>` ref, physics and collider compound in
 *     `exports/unreal/manifest.json`;
 *   - name a dynamic actor `dyn_<anything>`, a billboard `bb_<anything>` and a
 *     climbable ladder `ladder_<anything>` (static, its compound tagged `ladder`);
 *   - put a Camera actor named `spawn_<name>` where a player starts;
 *   - place ONE `BP_TK_Sky` actor (label `tk_sky`) and run
 *     `scripts/level/unreal/tk_sky_dump.py`: it writes `levels/<id>/unreal/sky.json`
 *     (the sky settings, the moon's source angle and browser intensity) and exports
 *     the sky textures to `levels/<id>/sky/`. The glTF itself carries no sky -- the
 *     exporter is told not to, and the runtime builds its own dome from these;
 *   - if Unreal 5.6+ exported lightmaps (`EPIC_lightmap_textures`), they are
 *     adopted: baked into TEXCOORD_1 and one PNG atlas for `--baker unreal`.
 *     Otherwise `bake-level.mjs --baker blender` re-bakes the same geometry and
 *     lights in Cycles, which is the path that has been measured.
 *
 * Usage:
 *   node scripts/level/import-unreal-level.mjs --level <id> [--in levels/<id>/unreal/level.glb]
 *        [--manifest exports/unreal/manifest.json] [--cell-size 24] [--sun live|baked]
 *        [--settings <json>] [--no-bbox-colliders] [--ground <y>[,<#hex>]] [--light-scale <f>] [--emissive-scale <f>]
 *        [--sky-map levels/<id>/unreal/sky.json | --no-sky-map]
 * Then:
 *   node scripts/level/bake-level.mjs --level <id> --baker unreal      # adopt Unreal's lightmap
 *   node scripts/level/bake-level.mjs --level <id> --baker blender     # or re-bake in Cycles
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { NodeIO, Logger } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { flatten, getBounds } from '@gltf-transform/functions';
import sharp from 'sharp';

import { REPO_ROOT, levelDir, toRepoRelative } from '@thaikit/registry-core';
import { CUBE_FACES, LevelSettings, SkySettings } from '@thai-kit/level-schema';

import { ok, fail, parseArgs } from '../lib/out.mjs';
import { buildDirOf } from './pipeline/build-dir.mjs';

const VERSION = '0.1.0';
const EPIC_LIGHTMAP = 'EPIC_lightmap_textures';
const DEFAULT_SHADOW = { mapSize: 2048, extent: 60, bias: -0.0005, normalBias: 0.02, softDeg: 1.5 };
/**
 * Editor-side backdrops that must not ship: the runtime builds its own sky dome
 * (`buildSky`). `tk_sky` is thaikit's own `BP_TK_Sky` actor -- its preview
 * sphere is a picture of the settings the sidecar carries, not geometry.
 */
const BACKDROP = /^(sky|skydome|skysphere|hdri|tk[_-]?sky|bp[_-]?tk[_-]?sky)/i;
/** A single huge far-ground plane laid in Unreal; replaced by cell tiles when --ground is given. */
const FAR_GROUND = /^far[_-]?ground/i;
/**
 * Unreal-side meshes that are dressing, never something to stand on. Matched as
 * whole words between separators: a bare `rain` used to catch SM_EXT_RainTree
 * and every drain, `sky` a skylight, `light` anything lit.
 */
const NO_COLLIDER = /(?:^|[_\s-])(?:cable|wire|rain|fog|sky|skydome|decal|puddle|particle|niagara|glow|billboard|light|lamp_cone)(?=$|[_\s-]|\d)/i;
/** The tracked half of the ext collider table -- see readExtManifest. */
const EXT_COLLIDERS_TRACKED = path.join(REPO_ROOT, 'scripts', 'level', 'unreal', 'ext-colliders.json');

const log = (msg) => process.stderr.write(`${msg}\n`);
export const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'x';

// ---- Ground tiles ------------------------------------------------------------

/**
 * One flat walkable quad per cell under everything static, the way the editor's
 * `buildExportScene` lays `settings.ground`: extent = world bounds of every
 * non-billboard placement plus the margin on each side, cut on cell lines, each
 * tile an ordinary STATIC placement (`ground_<ix>_<iz>`, `@thaikit/ground`) with a
 * quarter-metre-thick box hanging below the surface. The converter needs its own
 * copy because the browser's version materialises three.js factories.
 */
function addGroundTiles({ doc, scene, placements, cellSize, y, color, margin, uniqueId }) {
  const boxes = placements.filter((p) => p.billboard === 'none' && p.static);
  if (!boxes.length) return 0;
  const min = [Infinity, Infinity]; const max = [-Infinity, -Infinity];
  for (const p of boxes) {
    min[0] = Math.min(min[0], p.bounds.min[0]); min[1] = Math.min(min[1], p.bounds.min[2]);
    max[0] = Math.max(max[0], p.bounds.max[0]); max[1] = Math.max(max[1], p.bounds.max[2]);
  }
  const x0 = min[0] - margin; const x1 = max[0] + margin; const z0 = min[1] - margin; const z1 = max[1] + margin;
  const rgb = hexToLinear(color);
  const buffer = doc.getRoot().listBuffers()[0] ?? doc.createBuffer();
  const material = doc.createMaterial('thaikit_ground').setBaseColorFactor([rgb[0], rgb[1], rgb[2], 1]).setRoughnessFactor(0.92).setMetallicFactor(0);
  let n = 0;
  for (let ix = Math.floor(x0 / cellSize); ix * cellSize < x1; ix += 1) {
    for (let iz = Math.floor(z0 / cellSize); iz * cellSize < z1; iz += 1) {
      const ax = Math.max(x0, ix * cellSize); const bx = Math.min(x1, (ix + 1) * cellSize);
      const az = Math.max(z0, iz * cellSize); const bz = Math.min(z1, (iz + 1) * cellSize);
      const w = bx - ax; const d = bz - az;
      if (w < 0.05 || d < 0.05) continue;
      const cx = (ax + bx) / 2; const cz = (az + bz) / 2;
      const hw = w / 2; const hd = d / 2;
      const pos = new Float32Array([-hw, 0, -hd, hw, 0, -hd, hw, 0, hd, -hw, 0, hd]);
      const nrm = new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]);
      const uv = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
      const idx = new Uint16Array([0, 2, 1, 0, 3, 2]);
      const prim = doc.createPrimitive().setMaterial(material)
        .setAttribute('POSITION', doc.createAccessor().setType('VEC3').setArray(pos).setBuffer(buffer))
        .setAttribute('NORMAL', doc.createAccessor().setType('VEC3').setArray(nrm).setBuffer(buffer))
        .setAttribute('TEXCOORD_0', doc.createAccessor().setType('VEC2').setArray(uv).setBuffer(buffer))
        .setIndices(doc.createAccessor().setType('SCALAR').setArray(idx).setBuffer(buffer));
      const name = `ground_${ix}_${iz}`;
      const pid = uniqueId(name);
      const mesh = doc.createMesh(name).addPrimitive(prim);
      const node = doc.createNode(name).setMesh(mesh).setTranslation([cx, y, cz]);
      scene.addChild(node);
      const row = {
        id: pid, ref: '@thaikit/ground', static: true, cell: `${ix}_${iz}`, ix, iz,
        position: [+cx.toFixed(4), y, +cz.toFixed(4)], rotation: [0, 0, 0], scale: [1, 1, 1],
        bounds: { min: [+ax.toFixed(3), y, +az.toFixed(3)], max: [+bx.toFixed(3), y, +bz.toFixed(3)] },
        physics: { enabled: false, massKg: null }, billboard: 'none', castShadow: true, receiveShadow: true, destructionGroups: [],
        colliders: [{ name: 'ground', type: 'box', offset: [0, -0.125, 0], scale: [+hw.toFixed(4), 0.125, +hd.toFixed(4)], isTrigger: false }], colliderYaw: 0,
        source: { actor: name, mesh: null, kit: false },
      };
      placements.push(row);
      node.setExtras({ tk: { kind: 'placement', placement: pid, asset: '@thaikit/ground', cell: row.cell, static: true, billboard: 'none' } });
      n += 1;
    }
  }
  return n;
}

function hexToLinear(hex) {
  const h = String(hex ?? '#8b909b').replace('#', '');
  const c = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  return c.map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
}

// ---- GLB and JSON helpers ----------------------------------------------------

/** JSON and BIN chunks of a GLB, raw -- for extensions gltf-transform does not know. */
export function parseGlb(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (view.getUint32(0, true) !== 0x46546c67) throw new Error('not a GLB');
  let off = 12;
  let json = null;
  let bin = null;
  while (off < bytes.byteLength) {
    const len = view.getUint32(off, true);
    const type = view.getUint32(off + 4, true);
    const chunk = bytes.subarray(off + 8, off + 8 + len);
    if (type === 0x4e4f534a) json = JSON.parse(new TextDecoder().decode(chunk));
    else if (type === 0x004e4942) bin = chunk;
    off += 8 + len;
  }
  if (!json) throw new Error('GLB has no JSON chunk');
  return { json, bin };
}

function imageBytes(json, bin, imageIndex) {
  const img = json.images?.[imageIndex];
  if (!img) throw new Error(`image ${imageIndex} does not exist`);
  if (img.bufferView == null) throw new Error(`image ${imageIndex} is external (${img.uri}); export as .glb`);
  const bv = json.bufferViews[img.bufferView];
  return bin.subarray(bv.byteOffset ?? 0, (bv.byteOffset ?? 0) + bv.byteLength);
}

const linearToSrgb = (c) => (c <= 0.0031308 ? c * 12.92 : 1.055 * c ** (1 / 2.4) - 0.055);
export const rgbToHex = ([r, g, b]) => `#${[r, g, b].map((c) => Math.round(Math.min(1, Math.max(0, linearToSrgb(c))) * 255).toString(16).padStart(2, '0')).join('')}`;

/** Quaternion -> THREE.Euler 'XYZ', the order the pipeline's placement rows use. */
export function eulerXYZ([x, y, z, w]) {
  const m11 = 1 - 2 * (y * y + z * z), m12 = 2 * (x * y - w * z), m13 = 2 * (x * z + w * y);
  const m23 = 2 * (y * z - w * x), m33 = 1 - 2 * (x * x + y * y);
  const m22 = 1 - 2 * (x * x + z * z), m21 = 2 * (y * z + w * x), m31 = 2 * (x * z - w * y), m32 = 2 * (y * z + w * x);
  void m21; void m31; void m32;
  const ey = Math.asin(Math.max(-1, Math.min(1, m13)));
  if (Math.abs(m13) < 0.9999999) return [Math.atan2(-m23, m33), ey, Math.atan2(-m12, m11)];
  return [Math.atan2(2 * (y * z + w * x), m22), ey, 0];
}

/** (0,0,-1) through a quaternion: where a glTF light or camera points. */
export function forward([x, y, z, w]) {
  return [-(2 * (x * z + w * y)), -(2 * (y * z - w * x)), -(1 - 2 * (x * x + y * y))];
}

// ---- the manifest of what Unreal was given -----------------------------------

/**
 * Colliders for Unreal-side meshes built outside the kit, `{ meshes: { <mesh
 * name>: { colliders } } }`. Two sources, the exports one winning per mesh:
 * `exports/unreal/ext/manifest.json` (what the ext builders write beside their
 * GLBs) over `scripts/level/unreal/ext-colliders.json` (TRACKED). The exports
 * tree is a build product -- a full "export to Unreal" replaced it whole and took
 * `ext/` with it, after which every tree in bangkoksoi imported as a bounding
 * box the size of its canopy -- so the table the level actually depends on lives
 * in git and the build product is only ever an override.
 */
async function readExtManifest(file, tracked = EXT_COLLIDERS_TRACKED) {
  const read = async (f) => { try { return JSON.parse(await fs.readFile(f, 'utf8')).meshes ?? {}; } catch (err) { if (err.code === 'ENOENT') return {}; throw err; } };
  return { ...(await read(tracked)), ...(await read(file)) };
}

/**
 * Optional actor sidecar written from the Unreal editor (`levels/<id>/unreal/actors.json`,
 * `{ actors: { <actor label>: { mesh, folder, mobility, physics } } }`). Unreal's glTF
 * exporter names a node after its actor and, once a component carries baked or overridden
 * materials, names the MESH after the actor too -- so the `SM_TK_*` asset name the kit
 * lookup keys on is gone from the file. The sidecar puts it back by actor label.
 */
async function readActorMap(file) {
  try { return JSON.parse(await fs.readFile(file, 'utf8')).actors ?? {}; } catch (err) { if (err.code === 'ENOENT') return null; throw err; }
}

/**
 * Optional sky sidecar written from the Unreal editor by
 * `scripts/level/unreal/tk_sky_dump.py` (`levels/<id>/unreal/sky.json`):
 * `{ sky: <SkySettings with slot filenames>, moon: { sourceAngleDeg, intensityOverride, ... } }`.
 * The glTF carries no sky at all -- Unreal's exporter is told to skip sky spheres
 * and HDRI backdrops -- so this is the ONLY way the panorama, the cloud map and the
 * star settings authored on `BP_TK_Sky` reach the bake. The images it names live in
 * `levels/<id>/sky/`, where the editor route keeps its own sidecars, so
 * `prepareSkyImages` reads both routes the same way.
 */
export async function readSkySidecar(file) {
  try { return JSON.parse(await fs.readFile(file, 'utf8')); } catch (err) { if (err.code === 'ENOENT') return null; throw err; }
}

/**
 * The sidecar's `sky` block through the schema, with every referenced image
 * checked on disk. A missing image is NOT fatal -- `prepareSkyImages` degrades a
 * layer whose file is absent -- but it is the fault that ships a level with no
 * sky and a log line nobody reads, so it is a WARNING by name, and the report
 * carries what was found.
 */
export async function skySettingsFromSidecar(sidecar, id, notes, { fileExists = null } = {}) {
  const sky = SkySettings.parse(sidecar?.sky ?? {});
  const exists = fileExists ?? (async (name) => {
    try { await fs.access(path.join(levelDir(id), 'sky', path.basename(name))); return true; } catch { return false; }
  });
  const wanted = [];
  if (sky.base.mode === 'panoramic' && sky.base.panorama) wanted.push(['base.panorama', sky.base.panorama]);
  if (sky.base.mode === 'cube') for (const f of CUBE_FACES) { if (sky.base.faces?.[f]) wanted.push([`base.faces.${f}`, sky.base.faces[f]]); else notes.push(`WARNING sky.json names cube mode but no ${f} face: the base layer will not ship`); }
  if (sky.clouds.file) wanted.push(['clouds.file', sky.clouds.file]);
  const found = {};
  for (const [slot, name] of wanted) {
    found[slot] = await exists(name);
    if (!found[slot]) notes.push(`WARNING sky.json names ${slot} = ${name} but levels/${id}/sky/${path.basename(name)} is not on disk: that layer will NOT ship. Re-run tk_sky_dump.py in the editor.`);
  }
  return { sky, found };
}

async function readKitManifest(file) {
  try {
    const m = JSON.parse(await fs.readFile(file, 'utf8'));
    const byAsset = new Map();
    for (const it of m.items ?? []) byAsset.set(it.asset, it);
    return { byAsset, generatedAt: m.generatedAt ?? null, file };
  } catch (err) {
    if (err.code === 'ENOENT') return { byAsset: new Map(), generatedAt: null, file, missing: true };
    throw err;
  }
}

/** `SM_TK_OilDrum`, `SM_TK_OilDrum_2`, `SM_TK_OilDrum.001` -> the manifest item. */
function kitItemFor(meshName, kit) {
  if (!meshName) return null;
  let name = meshName;
  for (let i = 0; i < 3 && name; i += 1) {
    const it = kit.byAsset.get(name);
    if (it) return it;
    name = name.replace(/(?:[_.-]\d+|_\d+_\d+)$/, '');
    if (name === meshName) break;
    meshName = name;
  }
  return null;
}

// ---- Unreal lightmaps -----------------------------------------------------------

/**
 * Whatever `EPIC_lightmap_textures` says about a primitive, read tolerantly.
 *
 * The extension is Epic's own, undocumented outside the engine source, removed
 * in 5.2 and back in 5.6, so its field names are not something to hard-code
 * and then trust. Every occurrence is collected with the object it hangs off,
 * the first one is dumped verbatim into the import report, and the fields are
 * interpreted by SHAPE: a texture reference is any `{index}` or integer under a
 * key naming a texture; the UV set is `texCoord`/`coordinateIndex` (default 1);
 * a 2-vector under a key with `scale` and one with `offset|add|bias` remap the
 * UVs; a 4-vector under `scale`/`add` is the engine's coefficient decode and is
 * recorded but NOT applied -- the atlas then ships as the exporter wrote it,
 * and the report says so.
 */
export function readEpicLightmaps(json) {
  if (!(json.extensionsUsed ?? []).includes(EPIC_LIGHTMAP)) return null;
  const found = [];
  const rootExt = json.extensions?.[EPIC_LIGHTMAP] ?? null;
  const table = rootExt?.lightmaps ?? rootExt?.lightMaps ?? rootExt?.textures ?? null;
  const resolve = (ext) => {
    // An integer or `{lightmap: n}` may index a root-level table.
    if (typeof ext === 'number' && table) return table[ext];
    if (typeof ext === 'object' && table && typeof (ext.lightmap ?? ext.lightMap ?? ext.index) === 'number' && Object.keys(ext).length === 1) return table[ext.lightmap ?? ext.lightMap ?? ext.index];
    return ext;
  };
  json.meshes?.forEach((mesh, mi) => {
    mesh.primitives?.forEach((prim, pi) => {
      let ext = prim.extensions?.[EPIC_LIGHTMAP];
      if (ext == null && prim.material != null) ext = json.materials?.[prim.material]?.extensions?.[EPIC_LIGHTMAP] ?? null;
      if (ext == null) return;
      const entry = resolve(ext);
      found.push({ mesh: mi, primitive: pi, node: null, raw: entry, ...interpret(entry, json) });
    });
  });
  // Lightmap coordinates are PER COMPONENT in Unreal, so the exporter may hang
  // the entry off the node (instance) rather than the shared mesh. Those apply
  // to every primitive of that node's mesh, on a copy of it.
  const perNode = [];
  json.nodes?.forEach((node, ni) => {
    const ext = node.extensions?.[EPIC_LIGHTMAP];
    if (ext == null || node.mesh == null) return;
    const entry = resolve(ext);
    perNode.push({ node: ni, mesh: node.mesh, primitive: null, raw: entry, ...interpret(entry, json) });
  });
  return { found: [...found, ...perNode], perNode, sample: found[0]?.raw ?? perNode[0]?.raw ?? rootExt, rootExtension: rootExt };
}

function interpret(entry, json) {
  const out = { texture: null, image: null, texCoord: 1, scale: [1, 1], offset: [0, 0], decode: null };
  if (!entry || typeof entry !== 'object') return out;
  for (const [key, value] of Object.entries(entry)) {
    const k = key.toLowerCase();
    if (/texture|lightmap$|^index$/.test(k) && (typeof value === 'number' || typeof value?.index === 'number')) {
      out.texture = typeof value === 'number' ? value : value.index;
      if (typeof value?.texCoord === 'number') out.texCoord = value.texCoord;
    } else if (/texcoord|coordinateindex|uvindex|uvchannel/.test(k) && typeof value === 'number') out.texCoord = value;
    else if (Array.isArray(value) && value.length === 2 && /scale/.test(k)) out.scale = value;
    else if (Array.isArray(value) && value.length === 2 && /offset|add|bias/.test(k)) out.offset = value;
    else if (Array.isArray(value) && value.length === 4 && /coord|uv/.test(k)) { out.scale = [value[0], value[1]]; out.offset = [value[2], value[3]]; }
    else if (Array.isArray(value) && value.length === 4 && /scale|add|mul/.test(k)) { out.decode ??= {}; out.decode[key] = value; }
  }
  if (out.texture != null) out.image = json.textures?.[out.texture]?.source ?? null;
  return out;
}

/**
 * Bake Unreal's per-instance scale/offset into TEXCOORD_1 and, when the level
 * used several lightmap textures, tile them into ONE atlas the runtime can take
 * as its single `lightmap.image`. Returns the PNG or null.
 */
async function adoptLightmaps(doc, json, bin, epic, outDir, notes) {
  const images = [...new Set(epic.found.map((f) => f.image).filter((i) => i != null))];
  if (!images.length) { notes.push(`${EPIC_LIGHTMAP} is declared but no primitive resolved to a texture; nothing adopted`); return null; }
  const decoded = [];
  for (const idx of images) {
    const img = sharp(imageBytes(json, bin, idx)).ensureAlpha();
    const meta = await img.metadata();
    decoded.push({ idx, img, w: meta.width, h: meta.height });
  }
  const size = Math.max(...decoded.map((d) => Math.max(d.w, d.h)));
  const cols = Math.ceil(Math.sqrt(decoded.length));
  const rows = Math.ceil(decoded.length / cols);
  const tile = new Map(decoded.map((d, i) => [d.idx, { col: i % cols, row: Math.floor(i / cols) }]));

  // Every primitive gets a TEXCOORD_1 so join() never sees a mixed set; a
  // primitive with no lightmap entry keeps zeros and simply reads one texel.
  const meshes = doc.getRoot().listMeshes();
  const nodes = doc.getRoot().listNodes();
  const byMesh = new Map();
  for (const f of epic.found) if (f.node == null) byMesh.set(`${f.mesh}/${f.primitive}`, f);
  let remapped = 0;
  const remap = (prim, f) => {
    const pos = prim.getAttribute('POSITION');
      const n = pos.getCount();
      if (prim.getAttribute('TEXCOORD_1')?.getExtras()?.tkRemapped) return; // already placed in the atlas
      const src = f ? prim.getAttribute(`TEXCOORD_${f.texCoord}`) ?? prim.getAttribute('TEXCOORD_1') ?? prim.getAttribute('TEXCOORD_0') : null;
      const out = new Float32Array(n * 2);
      if (f && src && f.image != null) {
        const t = tile.get(f.image) ?? { col: 0, row: 0 };
        const el = [0, 0];
        for (let i = 0; i < n; i += 1) {
          src.getElement(i, el);
          const u = el[0] * f.scale[0] + f.offset[0];
          const v = el[1] * f.scale[1] + f.offset[1];
          out[i * 2] = (u + t.col) / cols;
          out[i * 2 + 1] = (v + t.row) / rows;
        }
        remapped += 1;
      }
      const acc = doc.createAccessor().setType('VEC2').setArray(out).setBuffer(doc.getRoot().listBuffers()[0]);
      if (f) acc.setExtras({ tkRemapped: true });
      prim.setAttribute('TEXCOORD_1', acc);
  };
  // Per-node entries first: each such node gets its OWN copy of the mesh, so two
  // instances of one Static Mesh can sit in different places in the atlas.
  for (const f of epic.perNode ?? []) {
    const node = nodes[f.node];
    const mesh = node?.getMesh();
    if (!mesh) continue;
    // Mesh.clone() SHARES its primitives (gltf-transform copies references),
    // so copy them: the whole point is a TEXCOORD_1 the other instance lacks.
    const own = doc.createMesh(mesh.getName());
    for (const p of mesh.listPrimitives()) own.addPrimitive(p.clone());
    node.setMesh(own);
    for (const prim of own.listPrimitives()) remap(prim, f);
  }
  meshes.forEach((mesh, mi) => {
    if (mesh.listParents().every((p) => p.propertyType !== 'Node')) return; // orphaned by a clone above
    mesh.listPrimitives().forEach((prim, pi) => remap(prim, byMesh.get(`${mi}/${pi}`) ?? null));
  });

  await fs.mkdir(outDir, { recursive: true });
  const composite = await Promise.all(decoded.map(async (d) => ({
    input: await d.img.resize(size, size, { fit: 'fill' }).png().toBuffer(),
    left: tile.get(d.idx).col * size, top: tile.get(d.idx).row * size,
  })));
  const png = await sharp({ create: { width: cols * size, height: rows * size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 1 } } })
    // Alpha is the MOON'S VISIBILITY in the runtime's layout. Unreal's lightmap
    // carries no such mask, so it ships fully lit (every tile was ensureAlpha'd
    // onto an opaque ground): the live moon adds its direct term unshadowed on
    // static geometry, which is why the skill keeps the moon Movable in Unreal
    // -- a Static sun would be counted twice.
    .composite(composite)
    .png()
    .toBuffer();
  await fs.writeFile(path.join(outDir, 'lightmap.png'), png);
  const stats = { source: 'unreal', range: 1, bakedLights: true, clipRate: 0, textures: decoded.length, atlas: [cols * size, rows * size], remappedPrimitives: remapped, decode: epic.found.find((f) => f.decode)?.decode ?? null };
  await fs.writeFile(path.join(outDir, 'lightmap.json'), JSON.stringify(stats));
  notes.push(`adopted ${decoded.length} Unreal lightmap texture(s) into one ${cols * size}x${rows * size} atlas; ${remapped} primitive(s) remapped into TEXCOORD_1`);
  if (stats.decode) notes.push(`WARNING the extension carries 4-vector decode factors (${Object.keys(stats.decode).join(', ')}); they were recorded, NOT applied -- check the atlas brightness against Unreal before trusting it`);
  return png;
}

// ---- the conversion -------------------------------------------------------------

/**
 * @returns {{ bake: object, doc: Document, report: object }}
 */
export async function convertUnrealLevel({ id, doc, json, bin, kit, extMeshes = null, actorMap = null, skyMap = null, cellSize = 24, sun = 'live', bboxColliders = true, settings = null, lightmapDir = null, ground = null, lightScale = 1, emissiveScale = 1, skyFileExists = null }) {
  const notes = [];
  // Emissive is scene luminance in the same sense a lamp is: a sign fascia at
  // KHR_materials_emissive_strength 4 reads as a lightbox under Unreal's EV100
  // exposure and as a blown-out white sheet at three's exposure 1. Scale it
  // here beside the lamps (`--emissive-scale`, typically 1/8 against the lamps'
  // 1/128 -- measured on bangkoksoi's brand fascias, not derived) so the
  // runtime and the Cycles bake both see the sign the editor showed.
  if (emissiveScale !== 1) {
    let n = 0;
    for (const mat of doc.getRoot().listMaterials()) {
      const ext = mat.getExtension('KHR_materials_emissive_strength');
      const factor = mat.getEmissiveFactor();
      if (ext) ext.setEmissiveStrength(ext.getEmissiveStrength() * emissiveScale);
      else if (factor.some((v) => v > 0)) mat.setEmissiveFactor(factor.map((v) => v * emissiveScale));
      else continue;
      n++;
    }
    notes.push(`${n} emissive material(s) scaled by ${emissiveScale} (--emissive-scale)`);
  }
  const scene = doc.getRoot().listScenes()[0];
  if (!scene) throw new Error('the glTF has no scene');
  doc.setLogger(new Logger(Logger.Verbosity.SILENT));

  // Before flatten: the adoption addresses meshes and nodes by their INDEX in
  // the file, and flatten is free to create and drop nodes.
  const epic = readEpicLightmaps(json);
  let lightmapPng = null;
  if (epic) lightmapPng = lightmapDir ? await adoptLightmaps(doc, json, bin, epic, lightmapDir, notes) : null;
  await doc.transform(flatten({ cleanup: false }));

  const placements = [];
  const lights = [];
  const spawns = [];
  const dropped = [];
  const usedIds = new Set();
  const uniqueId = (base) => { let s = slug(base); let n = 2; while (usedIds.has(s)) s = `${slug(base)}-${n++}`; usedIds.add(s); return s; };
  const kitHits = new Map();
  let unknownMeshes = 0;
  let ladders = 0;
  let extHits = 0;
  let actorHits = 0;
  const orientationWarned = new Set();
  const bboxFallback = new Map();

  for (const node of [...scene.listChildren()]) {
    const name = node.getName() || 'node';
    const light = node.getExtension('KHR_lights_punctual');
    const mesh = node.getMesh();
    const camera = node.getCamera();
    const isSpawn = /^(spawn|playerstart)[_ -]?/i.test(name);

    if (light) {
      const type = light.getType();
      const q = node.getWorldRotation();
      const t = node.getWorldTranslation();
      const dir = forward(q).map((v) => +v.toFixed(5));
      const lid = uniqueId(name);
      if (type === 'directional') {
        if (sun === 'baked') { notes.push(`directional light ${name} dropped: --sun baked (its light is in the Unreal lightmap)`); scene.removeChild(node); continue; }
        const isMoon = !lights.some((l) => l.role === 'moon');
        // The moon's brightness in three's units is authored on BP_TK_Sky
        // (`MoonIntensity`), because `--light-scale` is tuned for the candela
        // lamps and applied to a lux-valued directional it left bangkoksoi's moon
        // at 0.125 against thepurge's 0.6. 0 (or no sidecar) keeps lux * scale.
        // Its soft-shadow width is the light's own `light_source_angle`, which
        // is the Cycles sun angle by another name -- glTF has no field for it.
        const override = isMoon ? Number(skyMap?.moon?.intensityOverride ?? 0) : 0;
        const intensity = override > 0 ? override : light.getIntensity() * lightScale;
        const softDeg = isMoon && Number.isFinite(Number(skyMap?.moon?.sourceAngleDeg)) ? Math.min(45, Math.max(0, Number(skyMap.moon.sourceAngleDeg))) : DEFAULT_SHADOW.softDeg;
        if (isMoon) notes.push(`moon ${name}: intensity ${+intensity.toFixed(4)} (${override > 0 ? 'BP_TK_Sky MoonIntensity override' : `${light.getIntensity()} lux x light-scale ${lightScale}`}), softDeg ${softDeg}${skyMap?.moon?.sourceAngleDeg != null ? ' (light_source_angle)' : ' (default)'}`);
        lights.push({ id: lid, node: `light_${lid}`, type, role: isMoon ? 'moon' : null, color: rgbToHex(light.getColor()), intensity: +intensity.toFixed(6), position: [t[0], Math.max(t[1], 20), t[2]].map((v) => +v.toFixed(4)), direction: dir, castShadow: isMoon, shadow: isMoon ? { ...DEFAULT_SHADOW, softDeg } : null, distance: null, angle: null, penumbra: null, decay: null });
      } else {
        const outer = type === 'spot' ? light.getOuterConeAngle() : null;
        const inner = type === 'spot' ? light.getInnerConeAngle() : null;
        // Only explicitly nominated spotlights get live shadows. Unreal's
        // castShadows is also needed for the bake preview and is not a live budget.
        const lightActor = actorMap?.[name] ?? actorMap?.[name.replace(/^LightNode_/, '')];
        const runtimeShadow = type === 'spot' && lightActor?.runtimeShadow === true;
        lights.push({
          id: lid, node: `light_${lid}`, type, role: null, color: rgbToHex(light.getColor()), intensity: light.getIntensity() * lightScale,
          position: t.map((v) => +v.toFixed(4)), direction: type === 'spot' ? dir : null, castShadow: runtimeShadow, shadow: runtimeShadow ? { ...DEFAULT_SHADOW, mapSize: 1024 } : null,
          distance: light.getRange() ?? null, angle: outer, penumbra: outer ? +(1 - (inner ?? outer) / outer).toFixed(3) : null, decay: 2,
        });
      }
      scene.removeChild(node);
      continue;
    }

    if (isSpawn && !mesh) {
      const t = node.getWorldTranslation();
      const f = forward(node.getWorldRotation());
      // A camera looks down -Z; a spawn's yaw turns (0,0,-1) about Y.
      const yawDeg = +((Math.atan2(-f[0], -f[2]) * 180) / Math.PI).toFixed(2);
      const m = name.match(/^(?:spawn|playerstart)[_ -]?(.*)$/i);
      const label = slug(m?.[1] || `spawn-${spawns.length + 1}`);
      const team = /^(red|blue|green|yellow)[-_]/.test(label) ? label.split(/[-_]/)[0] : null;
      spawns.push({ name: label, position: t.map((v) => +v.toFixed(3)), yawDeg, team });
      scene.removeChild(node);
      continue;
    }

    if (!mesh) {
      if (!camera) dropped.push(name);
      scene.removeChild(node);
      continue;
    }

    if (ground && FAR_GROUND.test(name)) {
      notes.push(`dropped "${name}": --ground lays the pipeline's own tiles instead of one ${Math.round(getBounds(node).max[0] - getBounds(node).min[0])} m plane`);
      node.dispose(); continue;
    }
    if (BACKDROP.test(name)) {
      notes.push(`dropped backdrop "${name}": the shipped level builds its own sky`);
      node.dispose(); continue;
    }
    // A placement. Its transform is the actor's; the mesh stays as exported.
    const t = node.getWorldTranslation();
    const q = node.getWorldRotation();
    const s = node.getWorldScale();
    // The mesh's asset name: the sidecar by actor label first, then the exporter's own mesh name.
    const meshName = actorMap?.[name]?.mesh ?? mesh.getName();
    if (actorMap && actorMap[name]) actorHits += 1;
    const item = kitItemFor(meshName, kit);
    const dynamic = /^dyn[_-]/i.test(name);
    const billboard = /^bb[_-]/i.test(name) ? 'yaw' : 'none';
    // A ladder is an ordinary static body whose compound carries the tag; the
    // runtime lists it and the game's controller does the climbing.
    const tags = /^ladder[_-]/i.test(name) ? ['ladder'] : [];
    if (tags.length) ladders += 1;
    const pid = uniqueId(name);
    const b = getBounds(node);
    const ref = item ? item.ref : `@unreal/${slug(meshName || 'mesh')}`;
    if (item) kitHits.set(item.asset, (kitHits.get(item.asset) ?? 0) + 1); else unknownMeshes += 1;

    // Orientation self-check: a thaikit prop's MESH-LOCAL height must match the
    // kit's `size.h`. If Interchange or the exporter swapped axes on the round
    // trip, every compound would stand sideways -- say so once per asset. It is
    // measured on the mesh, not the placed bounds: a wall-mounted light lying
    // on its back used to trip it, and the one warning it fired masked any
    // real one.
    if (item && item.size?.h && !orientationWarned.has(item.asset)) {
      const lb = meshLocalBounds(mesh);
      const localH = lb.max[1] - lb.min[1];
      const ratio = localH / item.size.h;
      if (ratio < 0.6 || ratio > 1.6) {
        notes.push(`WARNING ${item.asset} is ${localH.toFixed(2)} m tall in the export but ${item.size.h} m in the kit (ratio ${ratio.toFixed(2)}): the Unreal round trip changed the axes or scale, or the level places an older import of the mesh, and its compound will be wrong. Check the exporter's uniform scale (0.01), the import's axis settings, and re-import the kit GLB.`);
        orientationWarned.add(item.asset);
      }
    }

    let colliders = [];
    const ext = !item && extMeshes ? extMeshes[meshName] : null;
    if (billboard !== 'none') {
      // A billboard turns every frame and its compound cannot follow: the kit's
      // thin box for a skyline card would ship as a fixed 37 x 83 m wall at
      // the authored yaw. The skill's contract is "dynamic, no collider".
      colliders = [];
    } else if (item?.colliders?.length) {
      colliders = item.colliders.map((c) => ({ name: c.name, type: c.type, offset: c.offset, scale: c.scale, isTrigger: Boolean(c.isTrigger) }));
    } else if (ext?.colliders) {
      // An Unreal-side mesh built by scratch/_unreal/build_ext.mjs: its own compound (trunk-only for a tree, so the canopy is not a wall).
      colliders = ext.colliders.map((c) => ({ name: c.name, type: c.type, offset: c.offset, scale: c.scale, isTrigger: Boolean(c.isTrigger) }));
      extHits += 1;
    } else if (bboxColliders && !dynamic && billboard === 'none' && !NO_COLLIDER.test(`${name} ${meshName}`)) {
      // Mesh-local box for an Unreal-side mesh: bounds back in the node's frame.
      // A mesh NAMED as a cylinder (Unreal's basic shape, a column) ships as
      // one: boxed, a 4.8 m round column collided as a 4.8 m square.
      const lb = meshLocalBounds(mesh);
      const h = lb.max[1] - lb.min[1];
      if (h > 0.05 && lb.max[0] - lb.min[0] > 0.05 && lb.max[2] - lb.min[2] > 0.05) {
        const round = /cylinder/i.test(`${name} ${meshName}`);
        colliders = [{ name: 'bbox', type: round ? 'cylinder' : 'box', offset: [0, 1, 2].map((i) => +((lb.min[i] + lb.max[i]) / 2).toFixed(4)), scale: [0, 1, 2].map((i) => +Math.max(0.01, (lb.max[i] - lb.min[i]) / 2).toFixed(4)), isTrigger: false }];
        bboxFallback.set(meshName || name, (bboxFallback.get(meshName || name) ?? 0) + 1);
      }
    }

    const cx = (b.min[0] + b.max[0]) / 2;
    const cz = (b.min[2] + b.max[2]) / 2;
    const ix = Math.floor(cx / cellSize);
    const iz = Math.floor(cz / cellSize);
    const rotation = eulerXYZ(q).map((v) => +v.toFixed(6));
    const isStatic = !dynamic && billboard === 'none';
    const row = {
      id: pid, ref, static: isStatic, cell: `${ix}_${iz}`, ix, iz,
      position: t.map((v) => +v.toFixed(4)), rotation, scale: s.map((v) => +v.toFixed(4)),
      bounds: { min: b.min.map((v) => +v.toFixed(3)), max: b.max.map((v) => +v.toFixed(3)) },
      physics: { enabled: dynamic && Boolean(item?.physics?.enabled ?? true), massKg: item?.physics?.massKg ?? null },
      billboard, castShadow: true, receiveShadow: true,
      destructionGroups: item?.destructionGroups ?? [],
      colliders, colliderYaw: 0, tags,
      source: { actor: name, mesh: meshName || null, kit: Boolean(item) },
    };
    placements.push(row);
    node.setExtras({ tk: { kind: 'placement', placement: pid, asset: ref, cell: row.cell, static: isStatic, billboard } });
    // The pipeline wants COLOR_0 always applied; Unreal's exporter writes it only
    // when asked, and normaliseAttributes fills white where it is missing.
  }

  // An ext mesh (built by scratch/_unreal) that fell back to its bounding box
  // has no entry in either collider table. For a tree that is a canopy-sized
  // wall, and it is exactly what a wiped exports/unreal/ext/ looks like.
  const extFallback = [...bboxFallback.entries()].filter(([m]) => /^SM_EXT_/i.test(m));
  if (extFallback.length) notes.push(`WARNING ${extFallback.reduce((n, [, c]) => n + c, 0)} placement(s) of ${extFallback.length} SM_EXT_ mesh(es) have no ext collider entry and took a BOUNDING-BOX collider: ${extFallback.map(([m, c]) => `${m} x${c}`).join(', ')}. Add them to scripts/level/unreal/ext-colliders.json (a plant gets its trunk or pot only: its canopy is otherwise a wall).`);

  if (!lights.some((l) => l.role === 'moon') && sun !== 'baked') {
    notes.push('no directional light in the export; adding a dim default moon so static geometry is not black without a lightmap');
    lights.push({ id: 'moon', node: 'light_moon', type: 'directional', role: 'moon', color: '#b8c7f2', intensity: 0.6, position: [16, 40, 12], direction: [-0.4, -1, -0.3].map((v, _, a) => +(v / Math.hypot(...a)).toFixed(5)), castShadow: true, shadow: { ...DEFAULT_SHADOW }, distance: null, angle: null, penumbra: null, decay: null });
  }
  if (!spawns.length) {
    const b = getBounds(scene);
    const fallback = [+((b.min[0] + b.max[0]) / 2).toFixed(3), +(b.min[1] + 0.1).toFixed(3), +((b.min[2] + b.max[2]) / 2).toFixed(3)];
    spawns.push({ name: 'centre', position: fallback, yawDeg: 0, team: null });
    notes.push('no Camera actor named spawn_*; a spawn was placed at the level centre -- add one in Unreal for a real start point');
  }

  const base = LevelSettings.parse(settings ?? {});
  const groundSetting = ground ? { ...base.ground, enabled: true, y: ground.y, color: ground.color ?? base.ground.color } : { ...base.ground, enabled: false };
  if (ground) {
    const n = addGroundTiles({ doc, scene, placements, cellSize, y: ground.y, color: groundSetting.color, margin: groundSetting.margin, uniqueId });
    notes.push(`ground: ${n} tile(s) at y=${ground.y} under the static placements (margin ${groundSetting.margin} m)`);
  }
  let skyReport = { source: settings?.sky ? 'settings' : 'none', base: null, clouds: null, stars: null, found: {} };
  let skySetting = base.sky;
  if (skyMap) {
    // The sidecar is what the level artist edited in Unreal, so it wins over a
    // `--settings` file that may be stale.
    const { sky, found } = await skySettingsFromSidecar(skyMap, id, notes, { fileExists: skyFileExists });
    skySetting = sky;
    if (settings?.sky) notes.push('settings.sky from --settings is overridden by the sky sidecar (sky.json)');
    skyReport = { source: 'sidecar', found, base: sky.enabled ? sky.base.mode : 'none', clouds: sky.enabled && sky.clouds.file ? sky.clouds.file : null, stars: sky.enabled && sky.stars.enabled };
    notes.push(sky.enabled ? `sky from sidecar: base ${sky.base.mode}${sky.base.panorama ? ` (${sky.base.panorama})` : ''}, clouds ${sky.clouds.file ?? 'none'}, stars ${sky.stars.enabled ? 'on' : 'off'}` : 'sky sidecar present but sky.enabled is false: the level ships with no sky');
  } else {
    notes.push('no sky sidecar (levels/<id>/unreal/sky.json): the level ships with no sky unless --settings carries one. Place BP_TK_Sky in Unreal and run tk_sky_dump.py.');
  }
  const merged = { ...base, sky: skySetting, ground: groundSetting, lightmap: { ...base.lightmap, enabled: true } };

  const bake = {
    id, name: id, settings: merged, cellSize, cell: null,
    placements, lights, spawns, missing: [],
    source: { tool: 'unreal-gltf-exporter', importer: { tool: 'thaikit-import-unreal-level', version: VERSION }, kitManifest: kit.file ? toRepoRelative(kit.file) : null, kitGeneratedAt: kit.generatedAt, lightmap: epic ? (lightmapPng ? 'adopted' : 'declared') : 'none' },
  };
  scene.setExtras({ thaikitBake: bake });

  const report = {
    placements: placements.length, static: placements.filter((p) => p.static).length, dynamic: placements.filter((p) => !p.static).length,
    kitProps: [...kitHits.entries()].sort((a, b) => b[1] - a[1]).map(([asset, n]) => ({ asset, n })), unknownMeshes, ladders, extColliders: extHits, actorMapHits: actorHits,
    bboxFallback: Object.fromEntries(bboxFallback),
    lights: lights.length, spawns: spawns.length, dropped, cells: new Set(placements.filter((p) => p.static).map((p) => p.cell)).size,
    lightmap: bake.source.lightmap, epicSample: epic?.sample ?? null, lightScale, sky: skyReport, notes,
  };
  return { bake, doc, report, lightmapPng };
}

function meshLocalBounds(mesh) {
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  for (const prim of mesh.listPrimitives()) {
    const pos = prim.getAttribute('POSITION');
    if (!pos) continue;
    const lo = pos.getMin([0, 0, 0]);
    const hi = pos.getMax([0, 0, 0]);
    for (let i = 0; i < 3; i += 1) { min[i] = Math.min(min[i], lo[i]); max[i] = Math.max(max[i], hi[i]); }
  }
  return { min, max };
}

// ---- CLI --------------------------------------------------------------------------

async function main() {
  const args = parseArgs();
  const id = String(args.level ?? '');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id)) return fail('need --level <id> (lowercase slug)');
  const inFile = path.resolve(REPO_ROOT, String(args.in ?? path.join('levels', id, 'unreal', 'level.glb')));
  const manifestFile = path.resolve(REPO_ROOT, String(args.manifest ?? path.join('exports', 'unreal', 'manifest.json')));
  const cellSize = Number(args['cell-size'] ?? 24);
  const sun = String(args.sun ?? 'live');
  // Unreal's lamps export in candela and its picture is seen through a manual
  // exposure (EV100 ~9.9 from the default camera, +4 bias -> 1/72 of scene
  // luminance); three renders the same candela at exposure 1. Scale them here,
  // at the source, so the bake's atlas spends its 8 bits at the shipped level.
  const lightScale = Number(args['light-scale'] ?? 1);
  if (!(lightScale > 0)) return fail(`--light-scale must be a positive number, got ${args['light-scale']}`);
  const emissiveScale = Number(args['emissive-scale'] ?? 1);
  if (!(emissiveScale > 0)) return fail(`--emissive-scale must be a positive number, got ${args['emissive-scale']}`);
  if (!['live', 'baked'].includes(sun)) return fail('--sun must be live or baked');
  const settings = args.settings ? JSON.parse(await fs.readFile(path.resolve(REPO_ROOT, String(args.settings)), 'utf8')) : null;
  const bboxColliders = !args['no-bbox-colliders'];
  let ground = null;
  if (args.ground != null && args.ground !== false) {
    const [gy, gc] = String(args.ground).split(',');
    if (!Number.isFinite(Number(gy))) return fail('--ground wants <y>[,<#hex>]');
    ground = { y: Number(gy), color: gc || null };
  }

  const bytes = new Uint8Array(await fs.readFile(inFile));
  const { json, bin } = parseGlb(bytes);
  const io = new NodeIO().setLogger(new Logger(Logger.Verbosity.SILENT)).registerExtensions(ALL_EXTENSIONS);
  const doc = await io.readBinary(bytes);
  const kit = await readKitManifest(manifestFile);
  if (kit.missing) log(`WARNING no kit manifest at ${toRepoRelative(manifestFile)}: every mesh is treated as an Unreal-side mesh (bbox colliders, no physics). Run "export to Unreal" in the asset editor first.`);

  const buildDir = buildDirOf(id, null);
  await fs.mkdir(buildDir, { recursive: true });
  const actorMap = await readActorMap(path.resolve(REPO_ROOT, String(args['actor-map'] ?? path.join(path.dirname(toRepoRelative(inFile)), 'actors.json'))));
  if (actorMap) log(`actor sidecar: ${Object.keys(actorMap).length} label(s)`);
  const skyMapFile = path.resolve(REPO_ROOT, String(args['sky-map'] ?? path.join(path.dirname(toRepoRelative(inFile)), 'sky.json')));
  const skyMap = args['no-sky-map'] ? null : await readSkySidecar(skyMapFile);
  if (skyMap) log(`sky sidecar: ${toRepoRelative(skyMapFile)} (${skyMap.generatedAt ?? 'undated'})`);
  const extMeshes = await readExtManifest(path.resolve(REPO_ROOT, String(args['ext-manifest'] ?? path.join('exports', 'unreal', 'ext', 'manifest.json'))));
  const { bake, doc: out, report, lightmapPng } = await convertUnrealLevel({ id, doc, json, bin, kit, extMeshes, actorMap, skyMap, cellSize, sun, bboxColliders, settings, lightmapDir: path.join(buildDir, 'lightmap'), ground, lightScale, emissiveScale });

  const rawFile = path.join(buildDir, 'raw.glb');
  await io.write(rawFile, out);
  await fs.writeFile(path.join(buildDir, 'unreal-import.json'), JSON.stringify({ ...report, in: toRepoRelative(inFile), raw: toRepoRelative(rawFile), generatedAt: new Date().toISOString() }, null, 2));
  for (const n of report.notes) log(n);
  log(`${report.placements} placement(s) (${report.static} static in ${report.cells} cell(s), ${report.dynamic} dynamic), ${report.kitProps.reduce((n, k) => n + k.n, 0)} from the kit, ${report.unknownMeshes} Unreal-side mesh(es), ${report.ladders ? `${report.ladders} ladder(s), ` : ''}${report.lights} light(s), ${report.spawns} spawn(s)${report.dropped.length ? `, ${report.dropped.length} empty node(s) dropped` : ''}`);
  if (lightScale !== 1) log(`lights scaled by ${lightScale} (--light-scale): Unreal candela -> three at exposure 1`);
  if (emissiveScale !== 1) log(`emissive scaled by ${emissiveScale} (--emissive-scale)`);
  log(`lightmap: ${report.lightmap}${lightmapPng ? ' -> bake with --baker unreal' : ' -> bake with --baker blender to light it in Cycles'}`);
  return ok({ level: id, raw: toRepoRelative(rawFile), report: toRepoRelative(path.join(buildDir, 'unreal-import.json')), placements: report.placements, lights: report.lights, spawns: report.spawns, lightmap: report.lightmap, sky: report.sky, nextBaker: lightmapPng ? 'unreal' : 'blender' });
}

if (process.argv[1] && import.meta.url === new URL(`file://${path.resolve(process.argv[1])}`).href) {
  main().catch((err) => fail(err));
}
