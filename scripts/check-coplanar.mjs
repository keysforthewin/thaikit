/**
 * Find same-facing coplanar surfaces — the geometry that z-fights as the camera moves.
 *
 * Two surfaces facing the SAME direction in the SAME plane tear into interleaved triangles as the
 * camera moves. A butt joint of OPPOSED faces is fine and is how solids are meant to meet; it is
 * co-facing coincidence that fights. Authoring components flush against one another produces it by
 * default, which is why this exists: the 7-Eleven shipped eight such pairs, including its whole
 * shopfront frame against the facade wall.
 *
 * SCOPE, and it matters: this compares BOUNDING-BOX faces only -- one box per mesh, and one per
 * INSTANCE of an instanced cluster. It catches envelope coincidences —
 * a panel flush on a wall, two boxes sharing a base plane — and is blind to interior profile edges,
 * such as the inner edge of an extruded ring. Two of the 7-Eleven's worst cases were exactly that
 * and had to be read off a zoomed render. A clean report here means the envelopes are clear, not
 * that the prop is.
 *
 *   node scripts/check-coplanar.mjs --id <asset-id> [--from pack|scratch] [--eps 0.001] [--min-area 0.02]
 *
 * Reads the bundle that SHIPS -- the pack installer's build under packs/@thai-kit/ --
 * or the scratch bundle with --from scratch. The source tree carries no bundle.
 */
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

import { resolveBundle } from './lib/bundle-for.mjs';

const require = createRequire(import.meta.url);
const THREE = require('three');

const argv = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : fallback;
};
const id = arg('id');
if (!id) { console.error('usage: node scripts/check-coplanar.mjs --id <asset-id>'); process.exit(2); }
const EPS = Number(arg('eps', 0.001));
const MIN_AREA = Number(arg('min-area', 0.02));
const MIN_EDGE = 0.05;   // ignore edge-on slivers; only real AREA fights are worth a person's time

const file = await resolveBundle(id, arg('from', 'pack'));
const mod = { exports: {} };
new Function('module', 'exports', 'require', readFileSync(file, 'utf8'))(mod, mod.exports, (n) => {
  if (n === 'three') return THREE;
  throw new Error(`the bundle must import three and nothing else; it asked for ${n}`);
});

const root = mod.exports.createObjectModel(null, {});
root.updateMatrixWorld(true);
const items = [];
const push = (name, box) =>
  items.push({ name: name.slice(0, 30), min: box.min.toArray(), max: box.max.toArray() });
const instMatrix = new THREE.Matrix4();
const instBox = new THREE.Box3();
root.traverse((o) => {
  if (!o.isMesh) return;
  // An InstancedMesh must be expanded to one box PER INSTANCE. `Box3.setFromObject` returns the
  // envelope over every instance, so a cluster of forty scattered parts collapses into one box
  // spanning all of them -- and this kit builds almost everything as instanced clusters, to hold
  // the draw-call ceiling. That envelope is wrong in both directions: it invents coincidences
  // between parts that are metres apart (the Makro store's coping at y=4.08 and its kerb at y=0.00
  // share the x=+-4.000 plane but are disjoint regions of it, and were reported as three flickering
  // pairs), and it hides real ones between two instances inside the same cluster.
  if (o.isInstancedMesh) {
    o.geometry.computeBoundingBox();
    for (let i = 0; i < o.count; i++) {
      o.getMatrixAt(i, instMatrix);
      instBox.copy(o.geometry.boundingBox)
        .applyMatrix4(instMatrix.premultiply(o.matrixWorld));
      push(`${o.name || '?'}#${i}`, instBox);
    }
    return;
  }
  push(o.name || '?', new THREE.Box3().setFromObject(o));
});
const groundY = Math.min(...items.map((i) => i.min[1]));

const hits = [];
for (let a = 0; a < items.length; a++) for (let b = a + 1; b < items.length; b++) {
  const A = items[a], B = items[b];
  for (const ax of [0, 1, 2]) {
    const o1 = (ax + 1) % 3, o2 = (ax + 2) % 3;
    const ov = (p) => Math.min(A.max[p], B.max[p]) - Math.max(A.min[p], B.min[p]);
    if (ov(o1) <= MIN_EDGE || ov(o2) <= MIN_EDGE) continue;
    const area = ov(o1) * ov(o2);
    if (area < MIN_AREA) continue;
    for (const f of ['min', 'max']) {
      if (Math.abs(A[f][ax] - B[f][ax]) >= EPS) continue;
      // Ground contact is not a defect: a floor-placed prop legitimately has several components
      // sharing y=0, and those faces point DOWN into the ground and are never rendered.
      if (ax === 1 && f === 'min' && Math.abs(A[f][ax] - groundY) < EPS) continue;
      hits.push({ axis: 'xyz'[ax], at: A[f][ax], a: A.name, b: B.name, face: f, area });
    }
  }
}

for (const h of hits) {
  console.log(`  ${h.axis}=${h.at.toFixed(3)}  ${h.a} (${h.face}) vs ${h.b} (${h.face})` +
              `  area ${h.area.toFixed(2)} m2`);
}
console.log(hits.length
  ? `\n${hits.length} same-facing coplanar pair(s) within ${EPS} m — these will flicker. ` +
    'Separate them, or make the joint an opposed butt.'
  : `clean at ${EPS} m (bounding-box faces only; interior profile edges are not covered)`);
process.exit(hits.length ? 1 : 0);
