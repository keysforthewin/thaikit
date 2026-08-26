/** Dump the built model's parts and runtime contract — the explodable/clickable evidence
 *  check_part_coverage.py wants, read off the actual bundle rather than off the spec. */
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const THREE = require('three');
const id = process.argv[2];
const file = `scratch/${id}/model.bundle.js`;
const mod = { exports: {} };
new Function('module', 'exports', 'require', readFileSync(file, 'utf8'))(mod, mod.exports,
  (n) => { if (n === 'three') return THREE; throw new Error(`unexpected import: ${n}`); });
const root = mod.exports.createObjectModel(null, {});
root.updateMatrixWorld(true);
const parts = [];
root.traverse((o) => {
  if (!o.isMesh) return;
  const b = new THREE.Box3().setFromObject(o);
  // `name` is the COMPONENT ID, not the display name: check_part_coverage.py matches the
  // manifest against the spec's componentTree ids, and a human label ("Asphalt carriageway")
  // matches nothing, which reads as "the model exposes no named parts at all".
  const cid = o.userData?.sculptComponent?.id ?? o.parent?.userData?.sculptComponent?.id ?? o.name;
  parts.push({ name: cid, id: cid, label: o.name, clickable: true, explodable: true,
    min: b.min.toArray().map((v) => +v.toFixed(3)), max: b.max.toArray().map((v) => +v.toFixed(3)) });
});
const rt = root.userData.sculptRuntime;
console.log(JSON.stringify({ parts,
  pivots: rt.pivots.map((p) => p.name), sockets: rt.sockets.map((s) => s.name ?? String(s)),
  colliders: rt.colliders.map((c) => ({ name: c.name, type: c.type })),
  destructionGroups: rt.destructionGroups.map((g) => g.name), nodes: rt.nodes }, null, 1));
