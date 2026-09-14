import test from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import * as THREE from 'three';
import { MeshBVH } from 'three-mesh-bvh';

test('Toyota lower windscreen fits its seal and hollow body aperture', async () => {
  const source = fileURLToPath(new URL('../../packages/props/src/models/toyota-commuter-van/createObjectModel.ts', import.meta.url));
  const { outputFiles } = await build({ entryPoints: [source], bundle: true, write: false, format: 'cjs', platform: 'node', plugins: [{ name: 'shared-three', setup(b) { b.onResolve({ filter: /^three$/ }, () => ({ path: 'three', external: true })); } }] });
  const mod = { exports: {} };
  new Function('module', 'exports', 'require', outputFiles[0].text)(mod, mod.exports, name => {
    assert.equal(name, 'three'); return THREE;
  });
  const root = mod.exports.createObjectModel();
  root.updateMatrixWorld(true);
  // The rebuilt van has a hollow shell and grouped meshes. The old fixture
  // raycast a closed body directly behind the glass at obsolete coordinates.
  const body = root.getObjectByName('body-geometry');
  const glass = root.getObjectByName('glazing-geometry');
  const trim = root.getObjectByName('trim-geometry');
  assert.ok(body?.isMesh && glass?.isMesh && trim?.isMesh);
  const bodyBvh = new MeshBVH(body.geometry);
  const trimBvh = new MeshBVH(trim.geometry);
  const ray = new THREE.Raycaster();
  for (let i = 0; i <= 60; i++) {
    const x = -.6 + 1.2 * i / 60;
    ray.set(new THREE.Vector3(x, 1.12, 4), new THREE.Vector3(0, 0, -1));
    const glassHit = ray.intersectObject(glass, false)[0];
    assert.ok(glassHit && glassHit.point.z > 2, `lower front glass missing at x=${x}`);
    const seal = trimBvh.closestPointToPoint(glassHit.point, {});
    // 8 mm glazing plus 2 mm assembly clearance; the rubber surround is 24 mm deep.
    assert.ok(seal.distance <= .010, `glass is ${(seal.distance * 1000).toFixed(2)} mm from its seal at x=${x}`);
    const support = bodyBvh.closestPointToPoint(seal.point, {});
    assert.ok(support.distance <= .024, `seal is unsupported beyond its depth at x=${x}`);
  }
  ray.set(new THREE.Vector3(0, 1.4, 4), new THREE.Vector3(0, 0, -1));
  const glassHit = ray.intersectObject(glass, false)[0];
  const bodyHit = ray.intersectObject(body, false)[0];
  assert.ok(glassHit, 'front windscreen must exist');
  assert.ok(!bodyHit || bodyHit.point.z < glassHit.point.z - .05, 'body must leave the windscreen aperture open');
});
