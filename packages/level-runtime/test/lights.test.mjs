/**
 * The moon's follow-the-player shadow box must never change the moon's
 * DIRECTION.
 *
 * GLTFLoader parents a directional light's `target` to the light itself, and
 * `makeFollow` used to write a root-space point into that child's position --
 * so the moon pointed along `R_moon * playerPosition`, swinging with every
 * step and shining upward over most of a level. Build the light exactly the
 * way GLTFLoader does and assert the world direction survives two follows.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';

import { applyLights, moonDirection } from '../src/lights.js';

const AUTHORED = new THREE.Vector3(-0.53906, -0.64078, 0.54664).normalize();

function gltfMoon(direction) {
  // KHR_lights_punctual: the node's -Z is the light direction; a light-only
  // node IS the light, target a child at (0, 0, -1).
  const light = new THREE.DirectionalLight('#dde5f9', 0.6);
  light.name = 'light_moon';
  light.position.set(0, 20, 0);
  light.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, -1), direction);
  light.target.position.set(0, 0, -1);
  light.add(light.target);
  return light;
}

function worldDirection(light) {
  light.updateMatrixWorld(true);
  light.target.updateMatrixWorld(true);
  const a = new THREE.Vector3().setFromMatrixPosition(light.matrixWorld);
  const b = new THREE.Vector3().setFromMatrixPosition(light.target.matrixWorld);
  return b.sub(a).normalize();
}

const manifest = {
  lights: [{ node: 'light_moon', type: 'directional', role: 'moon', castShadow: true, shadow: { mapSize: 2048, extent: 60, bias: -0.0005, normalBias: 0.02 } }],
  ambient: { sky: '#8797c2', ground: '#2a2620', intensity: 0.35 },
};

test('the moon keeps its authored direction while the shadow box follows the player', () => {
  const root = new THREE.Group();
  root.position.set(-7.21, 0, -67.368); // the game translates the root
  const moon = gltfMoon(AUTHORED);
  root.add(moon);
  const scene = new THREE.Scene();
  scene.add(root);

  assert.ok(worldDirection(moon).distanceTo(AUTHORED) < 1e-5, 'GLTFLoader-style light points where it was authored before any follow');
  assert.ok(moonDirection(moon, root).distanceTo(AUTHORED) < 1e-5, 'moonDirection reads the authored direction');

  const lights = applyLights(manifest, root, { hemisphere: false });
  assert.equal(lights.moon, moon);

  for (const p of [[0, 0, 0], [-6.27, 9.02, 77.75], [13.73, 9.02, 77.75], [-140, 2, 33]]) {
    lights.follow(new THREE.Vector3(...p));
    const dir = worldDirection(moon);
    assert.ok(dir.distanceTo(AUTHORED) < 1e-5, `direction after follow to ${p}: ${dir.toArray().map((v) => v.toFixed(3))}`);
    // The box sits 2 x extent upstream of the player and looks at them.
    const target = new THREE.Vector3().setFromMatrixPosition(moon.target.matrixWorld);
    const player = root.localToWorld(new THREE.Vector3(...p));
    assert.ok(target.distanceTo(player) < 0.1, 'target on the (texel-snapped) player');
    const from = new THREE.Vector3().setFromMatrixPosition(moon.matrixWorld);
    assert.ok(Math.abs(from.distanceTo(target) - 120) < 1e-3, 'moon 2 x extent from the target');
  }
});

test('a moon nested under a rotated node still follows in root space', () => {
  const root = new THREE.Group();
  const carrier = new THREE.Group();
  carrier.rotation.y = Math.PI / 3;
  carrier.position.set(5, 0, -3);
  root.add(carrier);
  // Author the WORLD direction: the nested node's local rotation is derived.
  const moon = gltfMoon(new THREE.Vector3(0, 0, -1));
  moon.quaternion.copy(carrier.quaternion.clone().invert().multiply(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, -1), AUTHORED)));
  carrier.add(moon);
  root.updateMatrixWorld(true);
  assert.ok(worldDirection(moon).distanceTo(AUTHORED) < 1e-5);

  const lights = applyLights(manifest, root, { hemisphere: false });
  lights.follow(new THREE.Vector3(30, 1, -40));
  assert.ok(worldDirection(moon).distanceTo(AUTHORED) < 1e-5, 'direction survives a follow under a rotated parent');
  const target = new THREE.Vector3().setFromMatrixPosition(moon.target.matrixWorld);
  assert.ok(target.distanceTo(new THREE.Vector3(30, 1, -40)) < 0.1, 'target on the player in root space');
});
