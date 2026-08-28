/**
 * Stage 3: LOD tiers per cell.
 *
 * meshoptimizer's simplifiers return a new index buffer over the ORIGINAL
 * vertices, so every attribute -- the lightmap UVs included -- survives by
 * index. lod1 is the quality simplifier at the requested ratio; lod2 is the
 * sloppy one, which ignores topology and is what a 5,800-triangle plant pot
 * at 80 m deserves. Both tiers share the lod0 materials.
 */
import { MeshoptSimplifier } from 'meshoptimizer';
import { compactPrimitive } from '@gltf-transform/functions';

function indicesOf(prim) {
  const acc = prim.getIndices();
  if (acc) {
    const arr = acc.getArray();
    return arr instanceof Uint32Array ? arr : new Uint32Array(arr);
  }
  const n = prim.getAttribute('POSITION').getCount();
  const idx = new Uint32Array(n);
  for (let i = 0; i < n; i += 1) idx[i] = i;
  return idx;
}

function positionsOf(prim) {
  const acc = prim.getAttribute('POSITION');
  const arr = acc.getArray();
  return arr instanceof Float32Array && acc.getElementSize() === 3 && !acc.getNormalized() ? arr : (() => {
    const n = acc.getCount();
    const out = new Float32Array(n * 3);
    const el = [0, 0, 0];
    for (let i = 0; i < n; i += 1) { acc.getElement(i, el); out.set(el, i * 3); }
    return out;
  })();
}

/** A simplified copy of `prim` at `ratio` of its triangles. */
export function simplifiedCopy(doc, prim, { ratio, sloppy = false, error = sloppy ? 0.5 : 0.05, lockBorder = false }) {
  const indices = indicesOf(prim);
  const positions = positionsOf(prim);
  const triCount = indices.length / 3;
  const target = Math.max(3, Math.floor(triCount * ratio) * 3);
  let result;
  if (sloppy) {
    [result] = MeshoptSimplifier.simplifySloppy(indices, positions, 3, null, target, error);
  } else {
    [result] = MeshoptSimplifier.simplify(indices, positions, 3, target, error, lockBorder ? ['LockBorder'] : []);
  }
  // Quality simplification stops at its error budget; if it could not get
  // near the target, let the sloppy one finish the job.
  if (!sloppy && result.length > target * 1.5) [result] = MeshoptSimplifier.simplifySloppy(indices, positions, 3, null, target, 0.5);
  if (!result.length) [result] = MeshoptSimplifier.simplifySloppy(indices, positions, 3, null, target, 1);
  const copy = prim.clone();
  const buffer = doc.getRoot().listBuffers()[0];
  copy.setIndices(doc.createAccessor().setType('SCALAR').setArray(result.length ? result : indices.slice(0, 3)).setBuffer(buffer));
  compactPrimitive(copy);
  return copy;
}

/** Add lod1 and lod2 siblings beside every lod0 under the cell nodes. */
export function buildLodTiers({ lod1Ratio = 0.4, lod2Ratio = 0.15 } = {}) {
  return async (doc) => {
    await MeshoptSimplifier.ready;
    const stats = [];
    for (const cell of doc.getRoot().listNodes()) {
      if (!cell.getName().startsWith('cell_')) continue;
      const lod0 = cell.listChildren().find((n) => n.getName() === 'lod0');
      if (!lod0) continue;
      const tiers = [
        { name: 'lod1', ratio: lod1Ratio, sloppy: false },
        { name: 'lod2', ratio: lod2Ratio, sloppy: true },
      ];
      const tri = [0, 0, 0];
      const dc = [0, 0, 0];
      for (const source of lod0.listChildren()) {
        const mesh = source.getMesh();
        if (!mesh) continue;
        for (const prim of mesh.listPrimitives()) { dc[0] += 1; tri[0] += (prim.getIndices()?.getCount() ?? prim.getAttribute('POSITION').getCount()) / 3; }
      }
      tiers.forEach((tier, t) => {
        const tierNode = doc.createNode(tier.name);
        cell.addChild(tierNode);
        for (const source of lod0.listChildren()) {
          const mesh = source.getMesh();
          if (!mesh) continue;
          const copyMesh = doc.createMesh(`${mesh.getName() || 'mesh'}_${tier.name}`);
          for (const prim of mesh.listPrimitives()) {
            const copy = simplifiedCopy(doc, prim, { ratio: tier.ratio, sloppy: tier.sloppy });
            copyMesh.addPrimitive(copy);
            dc[t + 1] += 1;
            tri[t + 1] += copy.getIndices().getCount() / 3;
          }
          const n = doc.createNode(source.getName()).setMesh(copyMesh).setMatrix(source.getMatrix());
          tierNode.addChild(n);
        }
      });
      stats.push({ cell: cell.getName(), drawCalls: dc, triangles: tri.map(Math.round) });
    }
    return stats;
  };
}
