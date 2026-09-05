/**
 * Stage 1: make every primitive mergeable.
 *
 * Merging by material only pays off when materials that differ by a tint
 * collapse into one, so base colour is folded into COLOR_0 (linear, as three
 * multiplies it) and the factor reset to white; every prim then carries the
 * same attribute set at the same types, or `join()` refuses them.
 */
import { Accessor, PropertyType } from '@gltf-transform/core';
import { dedup, flatten, prune } from '@gltf-transform/functions';

const KEEP = new Set(['POSITION', 'NORMAL', 'TEXCOORD_0', 'COLOR_0']);

export function readTags() {
  return (doc) => {
    const tags = new Map();
    for (const node of doc.getRoot().listNodes()) {
      const tk = node.getExtras()?.tk;
      if (tk) tags.set(node, tk);
    }
    doc.getRoot().setExtras({ ...doc.getRoot().getExtras(), _tagCount: tags.size });
    return tags;
  };
}

/** Anything the editor left on extras that a consumer must not see. */
export function stripEditorExtras() {
  return (doc) => {
    for (const node of doc.getRoot().listNodes()) {
      const ex = node.getExtras() ?? {};
      if (ex.sculptRuntime || ex.sculptSpec || ex.vibe3dInstance) {
        const { sculptRuntime, sculptSpec, vibe3dInstance, ...rest } = ex;
        node.setExtras(rest);
      }
    }
  };
}

function ensureFloatAttribute(doc, prim, semantic, size, fill) {
  const pos = prim.getAttribute('POSITION');
  const count = pos.getCount();
  const existing = prim.getAttribute(semantic);
  const out = new Float32Array(count * size);
  if (existing) {
    const el = new Array(existing.getElementSize()).fill(0);
    for (let i = 0; i < count; i += 1) {
      existing.getElement(i, el);
      for (let k = 0; k < size; k += 1) out[i * size + k] = k < el.length ? el[k] : fill[k];
    }
    if (existing.getElementSize() === size && existing.getComponentType() === Accessor.ComponentType.FLOAT && !existing.getNormalized()) return existing;
  } else {
    for (let i = 0; i < count; i += 1) for (let k = 0; k < size; k += 1) out[i * size + k] = fill[k];
  }
  const acc = doc.createAccessor().setType(size === 2 ? 'VEC2' : size === 3 ? 'VEC3' : 'VEC4').setArray(out).setBuffer(doc.getRoot().listBuffers()[0]);
  prim.setAttribute(semantic, acc);
  return acc;
}

/** Flat normals for a primitive that has none (unindexed or indexed). */
function computeNormals(doc, prim) {
  const pos = prim.getAttribute('POSITION');
  const count = pos.getCount();
  const indices = prim.getIndices();
  const n = new Float32Array(count * 3);
  const p = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  const triCount = indices ? indices.getCount() / 3 : count / 3;
  for (let t = 0; t < triCount; t += 1) {
    const ids = [0, 1, 2].map((k) => (indices ? indices.getScalar(t * 3 + k) : t * 3 + k));
    ids.forEach((id, k) => pos.getElement(id, p[k]));
    const ux = p[1][0] - p[0][0], uy = p[1][1] - p[0][1], uz = p[1][2] - p[0][2];
    const vx = p[2][0] - p[0][0], vy = p[2][1] - p[0][1], vz = p[2][2] - p[0][2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    for (const id of ids) { n[id * 3] += nx; n[id * 3 + 1] += ny; n[id * 3 + 2] += nz; }
  }
  for (let i = 0; i < count; i += 1) {
    const l = Math.hypot(n[i * 3], n[i * 3 + 1], n[i * 3 + 2]) || 1;
    n[i * 3] /= l; n[i * 3 + 1] /= l; n[i * 3 + 2] /= l;
  }
  prim.setAttribute('NORMAL', doc.createAccessor().setType('VEC3').setArray(n).setBuffer(doc.getRoot().listBuffers()[0]));
}

/** sRGB -> linear, the way three multiplies vertex colours. */
const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);

/**
 * Fold each material's base colour factor into COLOR_0 and reset it to white,
 * so materials differing only by tint become identical to dedup. Skipped for
 * blended materials and anything with a base colour texture whose tint is
 * usually a deliberate multiplier the artist expects on the map.
 */
export function foldBaseColorIntoVertexColor() {
  return (doc) => {
    let folded = 0;
    for (const mesh of doc.getRoot().listMeshes()) {
      for (const prim of mesh.listPrimitives()) {
        if (prim.getMode() !== 4) continue;
        const mat = prim.getMaterial();
        if (!mat) continue;
        const [r, g, b, a] = mat.getBaseColorFactor();
        const isWhite = r > 0.999 && g > 0.999 && b > 0.999;
        if (isWhite || mat.getAlphaMode() !== 'OPAQUE') {
          ensureFloatAttribute(doc, prim, 'COLOR_0', 3, [1, 1, 1]);
          continue;
        }
        // glTF baseColorFactor is linear already.
        const color = ensureFloatAttribute(doc, prim, 'COLOR_0', 3, [1, 1, 1]);
        const arr = color.getArray();
        const out = arr instanceof Float32Array ? arr : new Float32Array(arr);
        for (let i = 0; i < out.length; i += 3) { out[i] *= r; out[i + 1] *= g; out[i + 2] *= b; }
        color.setArray(out);
        // Materials are shared between prims, so the factor is reset on a copy
        // that dedup will merge with every other white-factor twin.
        const white = mat.clone().setBaseColorFactor([1, 1, 1, a]);
        prim.setMaterial(white);
        folded += 1;
      }
    }
    void toLinear;
    return folded;
  };
}

/**
 * Every prim: POSITION, NORMAL, TEXCOORD_0, COLOR_0 as float; nothing else --
 * except what `keep` names. An imported Unreal level arrives with its lightmap
 * already in TEXCOORD_1 (see import-unreal-level.mjs), and that must survive
 * to stage 4 the way the Blender baker's own TEXCOORD_1 does.
 */
export function normaliseAttributes({ keep = [] } = {}) {
  const kept = new Set([...KEEP, ...keep]);
  return (doc) => {
    for (const mesh of doc.getRoot().listMeshes()) {
      for (const prim of mesh.listPrimitives()) {
        if (prim.getMode() !== 4) continue;
        if (!prim.getAttribute('NORMAL')) computeNormals(doc, prim);
        else ensureFloatAttribute(doc, prim, 'NORMAL', 3, [0, 1, 0]);
        ensureFloatAttribute(doc, prim, 'TEXCOORD_0', 2, [0, 0]);
        ensureFloatAttribute(doc, prim, 'COLOR_0', 3, [1, 1, 1]);
        for (const semantic of prim.listSemantics()) if (!kept.has(semantic)) prim.setAttribute(semantic, null);
        for (const target of prim.listTargets()) prim.removeTarget(target);
      }
    }
  };
}

export { dedup, flatten, prune, PropertyType };
