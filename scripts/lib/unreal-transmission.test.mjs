import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { flattenPrototype } from '../../web/client/src/unreal/propGlb.js';

test('physical glass retains transmission and is reported for import without alpha blending', () => {
  const glass = new THREE.MeshPhysicalMaterial({
    name: 'plate-glass', transmission: .96, roughness: .06, ior: 1.5,
    thickness: .016, attenuationColor: '#D9E5DD', attenuationDistance: 10,
  });
  const root = new THREE.Group();
  root.add(new THREE.Mesh(new THREE.BoxGeometry(), glass));
  const mesh = flattenPrototype(root, 'SM_Glass');
  const exported = mesh.material[0];
  for (const key of ['transmission', 'roughness', 'ior', 'thickness', 'attenuationDistance']) {
    assert.equal(exported[key], glass[key], key);
  }
  assert.deepEqual(exported.attenuationColor.toArray(), glass.attenuationColor.toArray());
  assert.equal(exported.transparent, false);
  assert.equal(exported.opacity, 1);
  assert.deepEqual(mesh.userData.translucentSlots, [exported.name]);
  assert.equal(glass.userData.translucent, undefined, 'source remains unchanged');
});

test('legacy near-opaque alpha surfaces stay opaque and clear stale import metadata', () => {
  const surface = new THREE.MeshPhysicalMaterial({ transparent: true, opacity: .92 });
  surface.userData.translucent = true;
  const root = new THREE.Group();
  root.add(new THREE.Mesh(new THREE.BoxGeometry(), surface));
  const mesh = flattenPrototype(root, 'SM_Surface');
  assert.equal(mesh.material[0].transparent, false);
  assert.equal(mesh.material[0].opacity, 1);
  assert.deepEqual(mesh.userData.translucentSlots, []);
  assert.equal(surface.opacity, .92);
  assert.equal(surface.userData.translucent, true);
});
