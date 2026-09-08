import test from 'node:test';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import * as THREE from 'three';

test('Toyota lower windscreen and seal stay seated against the actual body', async () => {
  const source = fileURLToPath(new URL('../../packages/props/src/models/toyota-commuter-van/createObjectModel.ts', import.meta.url));
  const { outputFiles } = await build({ entryPoints: [source], bundle: true, write: false, format: 'cjs', platform: 'node', plugins: [{ name: 'shared-three', setup(b) { b.onResolve({ filter: /^three$/ }, () => ({ path: 'three', external: true })); } }] });
  const mod = { exports: {} };
  new Function('module', 'exports', 'require', outputFiles[0].text)(mod, mod.exports, name => {
    assert.equal(name, 'three'); return THREE;
  });
  const root = mod.exports.createObjectModel();
  root.updateMatrixWorld(true);
  const body = root.getObjectByName('root'), glass = root.getObjectByName('windscreen'), trim = root.getObjectByName('trim');
  const ray = new THREE.Raycaster();
  const frontZ = (mesh, x, y) => {
    ray.set(new THREE.Vector3(x, y, 4), new THREE.Vector3(0, 0, -1));
    const hit = ray.intersectObject(mesh, false)[0];
    assert.ok(hit, `${mesh.name} missing at (${x}, ${y})`);
    return hit.point.z;
  };
  for (const [mesh, halfWidth, y, depth] of [[trim, .72, 1.108, .012], [glass, .70, 1.118, .014]]) {
    for (let i = 0; i <= 60; i++) {
      const x = -halfWidth + 2 * halfWidth * i / 60;
      const gap = frontZ(mesh, x, y) - depth - frontZ(body, x, y);
      assert.ok(gap <= .001, `${mesh.name} has ${(gap * 1000).toFixed(2)} mm air gap at x=${x}`);
      assert.ok(gap >= -.010, `${mesh.name} is buried more than 10 mm at x=${x}`);
    }
  }
});
