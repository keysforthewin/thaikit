import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';

import { findNode } from '../src/names.js';

test('findNode resolves a manifest name under the spelling GLTFLoader gives it', () => {
  const root = new THREE.Group();
  const holder = new THREE.Group();
  // What GLTFLoader does to `dynamic/dyn-tuktuk` (r185 GLTFLoader.js: sanitizeNodeName on every node).
  holder.name = THREE.PropertyBinding.sanitizeNodeName('dynamic/dyn-tuktuk');
  root.add(holder);
  assert.equal(holder.name, 'dynamicdyn-tuktuk', 'the slash really is stripped');
  assert.equal(root.getObjectByName('dynamic/dyn-tuktuk'), undefined, 'the manifest spelling misses');
  assert.equal(findNode(root, 'dynamic/dyn-tuktuk'), holder);
  const exact = new THREE.Group(); exact.name = 'dynamic/dyn-cone-0'; root.add(exact);
  assert.equal(findNode(root, 'dynamic/dyn-cone-0'), exact, 'an exact name still wins');
  assert.equal(findNode(root, 'dynamic/missing'), null);
});
