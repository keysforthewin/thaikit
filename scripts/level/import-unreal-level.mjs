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
 *   - name a dynamic actor `dyn_<anything>` and a billboard `bb_<anything>`;
 *   - put a Camera actor named `spawn_<name>` where a player starts;
 *   - if Unreal 5.6+ exported lightmaps (`EPIC_lightmap_textures`), they are
 *     adopted: baked into TEXCOORD_1 and one PNG atlas for `--baker unreal`.
 *     Otherwise `bake-level.mjs --baker blender` re-bakes the same geometry and
 *     lights in Cycles, which is the path that has been measured.
 *
 * Usage:
 *   node scripts/level/import-unreal-level.mjs --level <id> [--in levels/<id>/unreal/level.glb]
 *        [--manifest exports/unreal/manifest.json] [--cell-size 24] [--sun live|baked]
 *        [--settings <json>] [--no-bbox-colliders]
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

import { REPO_ROOT, toRepoRelative } from '@thaikit/registry-core';
import { LevelSettings } from '@thai-kit/level-schema';

import { ok, fail, parseArgs } from '../lib/out.mjs';
import { buildDirOf } from './pipeline/build-dir.mjs';

const VERSION = '0.1.0';
const EPIC_LIGHTMAP = 'EPIC_lightmap_textures';
const DEFAULT_SHADOW = { mapSize: 2048, extent: 60, bias: -0.0005, normalBias: 0.02, softDeg: 1.5 };
/** Meshes that are dressing, never something to stand on. */
const NO_COLLIDER = /cable|wire|rain|fog|sky|decal|puddle|particle|niagara|glow|billboard|light|lamp_cone/i;

const log = (msg) => process.stderr.write(`${msg}\n`);
export const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'x';

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
export async function convertUnrealLevel({ id, doc, json, bin, kit, cellSize = 24, sun = 'live', bboxColliders = true, settings = null, lightmapDir = null }) {
  const notes = [];
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
  let orientationWarned = false;

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
        lights.push({ id: lid, node: `light_${lid}`, type, role: isMoon ? 'moon' : null, color: rgbToHex(light.getColor()), intensity: light.getIntensity(), position: [t[0], Math.max(t[1], 20), t[2]].map((v) => +v.toFixed(4)), direction: dir, castShadow: isMoon, shadow: isMoon ? { ...DEFAULT_SHADOW } : null, distance: null, angle: null, penumbra: null, decay: null });
      } else {
        const outer = type === 'spot' ? light.getOuterConeAngle() : null;
        const inner = type === 'spot' ? light.getInnerConeAngle() : null;
        lights.push({
          id: lid, node: `light_${lid}`, type, role: null, color: rgbToHex(light.getColor()), intensity: light.getIntensity(),
          position: t.map((v) => +v.toFixed(4)), direction: type === 'spot' ? dir : null, castShadow: false, shadow: null,
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

    // A placement. Its transform is the actor's; the mesh stays as exported.
    const t = node.getWorldTranslation();
    const q = node.getWorldRotation();
    const s = node.getWorldScale();
    const item = kitItemFor(mesh.getName(), kit);
    const dynamic = /^dyn[_-]/i.test(name);
    const billboard = /^bb[_-]/i.test(name) ? 'yaw' : 'none';
    const pid = uniqueId(name);
    const b = getBounds(node);
    const ref = item ? item.ref : `@unreal/${slug(mesh.getName() || 'mesh')}`;
    if (item) kitHits.set(item.asset, (kitHits.get(item.asset) ?? 0) + 1); else unknownMeshes += 1;

    // Orientation self-check: a thaikit prop's mesh-local height must match the
    // kit's `size.h`. If Interchange or the exporter swapped axes on the round
    // trip, every compound would stand sideways -- say so once, loudly.
    if (item && item.size?.h && !orientationWarned) {
      const localH = (b.max[1] - b.min[1]) / (Math.abs(s[1]) || 1);
      const ratio = localH / item.size.h;
      if (ratio < 0.6 || ratio > 1.6) {
        notes.push(`WARNING ${mesh.getName()} is ${localH.toFixed(2)} m tall in the export but ${item.size.h} m in the kit (ratio ${ratio.toFixed(2)}): the Unreal round trip changed the axes or scale, and every compound placed from the manifest will be wrong. Check the exporter's uniform scale (0.01) and the import's axis settings.`);
        orientationWarned = true;
      }
    }

    let colliders = [];
    if (item?.colliders?.length) {
      colliders = item.colliders.map((c) => ({ name: c.name, type: c.type, offset: c.offset, scale: c.scale, isTrigger: Boolean(c.isTrigger) }));
    } else if (bboxColliders && !dynamic && billboard === 'none' && !NO_COLLIDER.test(`${name} ${mesh.getName()}`)) {
      // Mesh-local box for an Unreal-side mesh: bounds back in the node's frame.
      const lb = meshLocalBounds(mesh);
      const h = lb.max[1] - lb.min[1];
      if (h > 0.05 && lb.max[0] - lb.min[0] > 0.05 && lb.max[2] - lb.min[2] > 0.05) {
        colliders = [{ name: 'bbox', type: 'box', offset: [0, 1, 2].map((i) => +((lb.min[i] + lb.max[i]) / 2).toFixed(4)), scale: [0, 1, 2].map((i) => +Math.max(0.01, (lb.max[i] - lb.min[i]) / 2).toFixed(4)), isTrigger: false }];
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
      colliders, colliderYaw: 0,
      source: { actor: name, mesh: mesh.getName() || null, kit: Boolean(item) },
    };
    placements.push(row);
    node.setExtras({ tk: { kind: 'placement', placement: pid, asset: ref, cell: row.cell, static: isStatic, billboard } });
    // The pipeline wants COLOR_0 always applied; Unreal's exporter writes it only
    // when asked, and normaliseAttributes fills white where it is missing.
  }

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
  const merged = { ...base, ground: { ...base.ground, enabled: false }, lightmap: { ...base.lightmap, enabled: true } };

  const bake = {
    id, name: id, settings: merged, cellSize, cell: null,
    placements, lights, spawns, missing: [],
    source: { tool: 'unreal-gltf-exporter', importer: { tool: 'thaikit-import-unreal-level', version: VERSION }, kitManifest: kit.file ? toRepoRelative(kit.file) : null, kitGeneratedAt: kit.generatedAt, lightmap: epic ? (lightmapPng ? 'adopted' : 'declared') : 'none' },
  };
  scene.setExtras({ thaikitBake: bake });

  const report = {
    placements: placements.length, static: placements.filter((p) => p.static).length, dynamic: placements.filter((p) => !p.static).length,
    kitProps: [...kitHits.entries()].sort((a, b) => b[1] - a[1]).map(([asset, n]) => ({ asset, n })), unknownMeshes,
    lights: lights.length, spawns: spawns.length, dropped, cells: new Set(placements.filter((p) => p.static).map((p) => p.cell)).size,
    lightmap: bake.source.lightmap, epicSample: epic?.sample ?? null, notes,
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
  if (!['live', 'baked'].includes(sun)) return fail('--sun must be live or baked');
  const settings = args.settings ? JSON.parse(await fs.readFile(path.resolve(REPO_ROOT, String(args.settings)), 'utf8')) : null;
  const bboxColliders = !args['no-bbox-colliders'];

  const bytes = new Uint8Array(await fs.readFile(inFile));
  const { json, bin } = parseGlb(bytes);
  const io = new NodeIO().setLogger(new Logger(Logger.Verbosity.SILENT)).registerExtensions(ALL_EXTENSIONS);
  const doc = await io.readBinary(bytes);
  const kit = await readKitManifest(manifestFile);
  if (kit.missing) log(`WARNING no kit manifest at ${toRepoRelative(manifestFile)}: every mesh is treated as an Unreal-side mesh (bbox colliders, no physics). Run "export to Unreal" in the asset editor first.`);

  const buildDir = buildDirOf(id, null);
  await fs.mkdir(buildDir, { recursive: true });
  const { bake, doc: out, report, lightmapPng } = await convertUnrealLevel({ id, doc, json, bin, kit, cellSize, sun, bboxColliders, settings, lightmapDir: path.join(buildDir, 'lightmap') });

  const rawFile = path.join(buildDir, 'raw.glb');
  await io.write(rawFile, out);
  await fs.writeFile(path.join(buildDir, 'unreal-import.json'), JSON.stringify({ ...report, in: toRepoRelative(inFile), raw: toRepoRelative(rawFile), generatedAt: new Date().toISOString() }, null, 2));
  for (const n of report.notes) log(n);
  log(`${report.placements} placement(s) (${report.static} static in ${report.cells} cell(s), ${report.dynamic} dynamic), ${report.kitProps.reduce((n, k) => n + k.n, 0)} from the kit, ${report.unknownMeshes} Unreal-side mesh(es), ${report.lights} light(s), ${report.spawns} spawn(s)${report.dropped.length ? `, ${report.dropped.length} empty node(s) dropped` : ''}`);
  log(`lightmap: ${report.lightmap}${lightmapPng ? ' -> bake with --baker unreal' : ' -> bake with --baker blender to light it in Cycles'}`);
  return ok({ level: id, raw: toRepoRelative(rawFile), report: toRepoRelative(path.join(buildDir, 'unreal-import.json')), placements: report.placements, lights: report.lights, spawns: report.spawns, lightmap: report.lightmap, nextBaker: lightmapPng ? 'unreal' : 'blender' });
}

if (process.argv[1] && import.meta.url === new URL(`file://${path.resolve(process.argv[1])}`).href) {
  main().catch((err) => fail(err));
}
