import * as THREE from 'three';

import { peekPrototype } from '../three/instances.js';

/** Grid cell of a world point. Origin at 0,0 so the runtime uses the same formula. */
export function cellOf(x, z, cellSize) {
  return { ix: Math.floor(x / cellSize), iz: Math.floor(z / cellSize) };
}
export const cellKey = (ix, iz) => `${ix}_${iz}`;

const _m = new THREE.Matrix4();
const _box = new THREE.Box3();

export function placementMatrix(p, out = _m) {
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(p.rotation[0], p.rotation[1], p.rotation[2], 'XYZ'));
  return out.compose(new THREE.Vector3().fromArray(p.position), q, new THREE.Vector3().fromArray(p.scale));
}

/** World AABB of a placement, from its prototype bbox. Null while the prototype is loading. */
export function placementWorldBox(p, item) {
  const proto = item ? peekPrototype(item) : null;
  if (!proto) return null;
  return _box.copy(proto.bbox).applyMatrix4(placementMatrix(p)).clone();
}

export function isStatic(p, item, proto) {
  if (p.static != null) return p.static;
  if (p.physics === true) return false;
  if (item?.physics?.enabled && p.physics !== false) return false;
  if (proto?.hasDestructionGroups) return false;
  if ((item?.destructionGroups?.length ?? 0) > 0) return false;
  return true;
}

/**
 * Whole-level stats plus a per-cell picture of what the bake will merge.
 *
 * Geometry cost sums per instance; materials and textures are counted once
 * per prototype in use, because clones share them. A cell's merged draw calls
 * are its distinct static material signatures plus every dynamic draw call.
 */
export function levelStats(doc, catalogue) {
  const out = {
    placements: doc?.placements.length ?? 0, loaded: 0, loading: 0, missing: 0,
    triangles: 0, vertices: 0, drawCalls: 0, materials: 0, textures: 0, gpuBytes: 0,
    textureList: [], cells: new Map(), buildMs: 0,
  };
  if (!doc) return out;
  const materialSet = new Set();
  const textureMap = new Map();
  const protos = new Set();
  const cellSize = doc.settings?.cellSize ?? 24;

  for (const p of doc.placements) {
    const item = catalogue.byRef[p.ref];
    if (!item || !item.supported) { out.missing += 1; continue; }
    const proto = peekPrototype(item);
    if (!proto) { out.loading += 1; continue; }
    out.loaded += 1;
    out.triangles += proto.stats.triangles;
    out.vertices += proto.stats.vertices;
    out.drawCalls += proto.stats.drawCalls;
    if (!protos.has(proto)) {
      protos.add(proto);
      out.buildMs += proto.buildMs;
      for (const id of proto.stats.materialIds) materialSet.add(id);
      for (const t of proto.stats.textureList) {
        const known = textureMap.get(t.uuid);
        if (known) known.uses += t.uses; else textureMap.set(t.uuid, { ...t, item: item.title });
      }
    }

    const box = _box.copy(proto.bbox).applyMatrix4(placementMatrix(p));
    const c = box.getCenter(new THREE.Vector3());
    const { ix, iz } = cellOf(c.x, c.z, cellSize);
    const key = cellKey(ix, iz);
    let cell = out.cells.get(key);
    if (!cell) {
      cell = { key, ix, iz, objects: 0, triangles: 0, staticMaterials: new Set(), dynamicDrawCalls: 0, maxY: 0 };
      out.cells.set(key, cell);
    }
    cell.objects += 1;
    cell.triangles += proto.stats.triangles;
    cell.maxY = Math.max(cell.maxY, box.max.y);
    if (isStatic(p, item, proto)) for (const id of proto.stats.materialIds) cell.staticMaterials.add(id);
    else cell.dynamicDrawCalls += proto.stats.drawCalls;
  }

  for (const cell of out.cells.values()) cell.mergedDrawCalls = cell.staticMaterials.size + cell.dynamicDrawCalls;
  out.materials = materialSet.size;
  out.textureList = [...textureMap.values()];
  out.textures = out.textureList.length;
  out.gpuBytes = out.textureList.reduce((t, x) => t + x.bytes, 0);
  return out;
}
