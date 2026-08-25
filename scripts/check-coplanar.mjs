/**
 * Find same-facing coplanar surfaces — the geometry that z-fights as the camera moves.
 *
 * Two surfaces facing the SAME direction in the SAME plane tear into interleaved triangles as the
 * camera moves. A butt joint of OPPOSED faces is fine and is how solids are meant to meet; it is
 * co-facing coincidence that fights. Authoring components flush against one another produces it by
 * default, which is why this exists: the 7-Eleven shipped eight such pairs, including its whole
 * shopfront frame against the facade wall.
 *
 * SCOPE, and it matters: this compares BOUNDING-BOX faces only. It catches envelope coincidences —
 * a panel flush on a wall, two boxes sharing a base plane — and is blind to interior profile edges,
 * such as the inner edge of an extruded ring. Two of the 7-Eleven's worst cases were exactly that
 * and had to be read off a zoomed render. A clean report here means the envelopes are clear, not
 * that the prop is.
 *
 *   node scripts/check-coplanar.mjs --id <asset-id> [--eps 0.001] [--min-area 0.02]
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

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

const REPO = path.resolve(import.meta.dirname, '..');
const file = path.join(REPO, 'assets', id, 'model.bundle.js');
const mod = { exports: {} };
new Function('module', 'exports', 'require', readFileSync(file, 'utf8'))(mod, mod.exports, (n) => {
  if (n === 'three') return THREE;
  throw new Error(`the bundle must import three and nothing else; it asked for ${n}`);
});

const root = mod.exports.createObjectModel(null, {});
root.updateMatrixWorld(true);
const items = [];
root.traverse((o) => {
  if (!o.isMesh) return;
  const b = new THREE.Box3().setFromObject(o);
  items.push({ name: (o.name || '?').slice(0, 30), min: b.min.toArray(), max: b.max.toArray() });
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
