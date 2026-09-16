/** Validate the saved Unreal export and stage 1; extract real exported meshes for browser review. */
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune } from '@gltf-transform/functions';
import { FOLIAGE } from './catalog.mjs';
const out = 'scratch/foliage-20260915';
const bake = JSON.parse(await fs.readFile('levels/bangkoksoi/build/bake.json', 'utf8'));
const foliage = bake.placements.filter(p => p.source?.actor?.includes('tk_foliage'));
assert.equal(foliage.length, 270);
for (const p of foliage) {
  assert.equal(p.bakeLighting, false, p.id);
  assert.equal(p.physics.enabled, false, p.id);
  assert.equal(p.castShadow, false, p.id);
  assert.equal(p.colliders?.length ?? 0, 0, p.id);
  assert.ok(FOLIAGE.some(a => p.ref === `@thai-kit/${a.id}`), p.ref);
  if (p.source.actor.startsWith('bb_')) assert.equal(p.billboard, 'yaw', p.id);
}
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const stage = await io.read('levels/bangkoksoi/build/stage1.glb');
const excludedSources = new Set(bake.placements.flatMap((p, i) => p.bakeLighting === false ? [i] : []));
let sourceVertices = 0, unbakedGroups = 0;
const surfaceByAsset = new Map();
for (const node of stage.getRoot().listNodes()) {
  if (node.getName().startsWith('unbaked_')) unbakedGroups++;
  const mesh = node.getMesh();
  if (!mesh) continue;
  for (const primitive of mesh.listPrimitives()) {
    const source = primitive.getAttribute('_TK_SOURCE');
    if (!source) continue;
    for (const i of source.getArray()) {
      assert.ok(!excludedSources.has(i), `Excluded placement ${i} leaked into atlas geometry`);
      sourceVertices++;
    }
    const position = primitive.getAttribute('POSITION'), indices = primitive.getIndices();
    const matrix = node.getWorldMatrix();
    const edge = (a, b) => {
      const x = b[0]-a[0], y = b[1]-a[1], z = b[2]-a[2];
      return [matrix[0]*x+matrix[4]*y+matrix[8]*z, matrix[1]*x+matrix[5]*y+matrix[9]*z, matrix[2]*x+matrix[6]*y+matrix[10]*z];
    };
    for (let i = 0; i < (indices?.getCount() ?? position.getCount()); i += 3) {
      const ids = [0,1,2].map(k => indices ? indices.getScalar(i+k) : i+k);
      const points = ids.map(j => position.getElement(j, []));
      const a = edge(points[0],points[1]), b = edge(points[0],points[2]);
      const area = Math.hypot(a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]) / 2;
      const ref = bake.placements[source.getScalar(ids[0])].ref;
      surfaceByAsset.set(ref, (surfaceByAsset.get(ref) ?? 0) + area);
    }
  }
}
assert.ok(sourceVertices > 0);
assert.ok(unbakedGroups > 0);
const doc = await io.read('levels/bangkoksoi/unreal/level.glb');
const nodes = doc.getRoot().listNodes().filter(n => n.getName().includes('tk_foliage'));
assert.equal(nodes.length, 270);
const chosen = [
  nodes.find(n => n.getName() === 'tk_foliage_border_000'),
  nodes.find(n => n.getName().startsWith('bb_tk_foliage')),
  nodes.find(n => n.getName().startsWith('tk_foliage_plant')),
];
assert.ok(chosen.every(Boolean));
const scene = doc.getRoot().listScenes()[0];
const matrices = chosen.map(n => n.getWorldMatrix());
for (const n of [...scene.listChildren()]) scene.removeChild(n);
chosen.forEach((n, i) => { scene.addChild(n); n.setMatrix(matrices[i]); n.setTranslation([i * 30, 0, 0]); });
await doc.transform(prune());
await io.write(`${out}/roundtrip.glb`, doc);
const report = {
  foliage: foliage.length, excludedPlacements: excludedSources.size,
  unbakedGroups, checkedSourceVertices: sourceVertices,
  billboards: foliage.filter(p => p.billboard === 'yaw').length,
  browserFixture: chosen.map(n => n.getName()),
  eligibleSurfaceM2: [...surfaceByAsset.values()].reduce((sum, n) => sum+n, 0),
  surfaceByAsset: [...surfaceByAsset].map(([ref, areaM2]) => ({ref, areaM2})).sort((a,b) => b.areaM2-a.areaM2),
};
await fs.writeFile(`${out}/roundtrip-audit.json`, JSON.stringify(report, null, 2));
console.log({...report, surfaceByAsset:report.surfaceByAsset.slice(0,10)});
