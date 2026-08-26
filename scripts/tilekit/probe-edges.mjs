/**
 * Probe each tile's four edges by raycasting straight down just inside the boundary, and
 * report the surface height profile it presents.
 *
 * This is the kit's ONE load-bearing claim -- that any tile meets any other -- and until now
 * it was true by construction rather than by measurement. Construction arguments are how a
 * centimetre goes missing. A tile that presents 1.25 / 5.5 / 1.25 with the kerb at 0.15 and
 * the road at 0.00 on every live edge mates; one that does not is worthless however it looks.
 */
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const THREE = require('three');

const STEP = 0.01;
export function profile(id) {
  const mod = { exports: {} };
  new Function('module', 'exports', 'require',
    readFileSync(`assets/${id}/model.bundle.js`, 'utf8'))(mod, mod.exports,
    (n) => { if (n === 'three') return THREE; throw new Error(n); });
  const root = mod.exports.createObjectModel(null, {});
  root.updateMatrixWorld(true);
  const meshes = []; root.traverse((o) => { if (o.isMesh) meshes.push(o); });
  const box = new THREE.Box3().setFromObject(root);
  const hx = box.max.x, hz = box.max.z;
  const ray = new THREE.Raycaster();
  const down = new THREE.Vector3(0, -1, 0);
  const probe = (x, z) => {
    ray.set(new THREE.Vector3(x, box.max.y + 1, z), down);
    const h = ray.intersectObjects(meshes, true);
    return h.length ? Number(h[0].point.y.toFixed(3)) : null;
  };
  const edges = {};
  const inset = 0.03;
  for (const [name, at] of [['north', (t) => [t, hz - inset]], ['south', (t) => [t, -hz + inset]],
                           ['east', (t) => [hx - inset, t]], ['west', (t) => [-hx + inset, t]]]) {
    const lim = name === 'north' || name === 'south' ? hx : hz;
    const runs = []; let prev = Symbol(), start = -lim;
    for (let t = -lim; t <= lim + 1e-9; t += STEP) {
      const y = probe(...at(Number(t.toFixed(3))));
      if (y !== prev) { if (runs.length || prev !== undefined) runs.push({ from: +start.toFixed(2), y: prev }); prev = y; start = t; }
    }
    runs.push({ from: +start.toFixed(2), y: prev });
    edges[name] = runs.slice(1).map((r, i, a) => ({
      from: r.from, to: i + 1 < a.length ? a[i + 1].from : +lim.toFixed(2),
      width: +(((i + 1 < a.length ? a[i + 1].from : lim) - r.from)).toFixed(2), y: r.y }));
  }
  return { id, footprint: [+(hx * 2).toFixed(3), +(hz * 2).toFixed(3)], edges };
}

if (process.argv[2]) console.log(JSON.stringify(profile(process.argv[2]), null, 1));
