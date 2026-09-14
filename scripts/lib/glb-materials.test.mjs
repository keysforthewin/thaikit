import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { materialCompatibilityIssues, assertMaterialCompatibility } from '../../web/client/src/unreal/materialCompatibility.js';
import { auditFactories } from '../audit-glb-materials.mjs';
import { createRequire } from 'node:module';
import { readRegistry } from '@thaikit/registry-core';

test('GLB guard accepts standard materials and rejects shader code before cloning', () => {
  const root = new THREE.Group();
  const material = new THREE.MeshStandardMaterial();
  root.add(new THREE.Mesh(new THREE.BoxGeometry(), material));
  assert.deepEqual(materialCompatibilityIssues(root), []);
  material.onBeforeCompile = () => {};
  assert.throws(() => assertMaterialCompatibility(root, 'test asset'), /test asset.*onBeforeCompile/);
  root.children[0].material = new THREE.ShaderMaterial();
  assert.throws(() => assertMaterialCompatibility(root), /custom shader material/);
  root.children[0].material = new THREE.MeshStandardMaterial();
  root.children[0].material.onBeforeRender = () => {};
  assert.throws(() => assertMaterialCompatibility(root), /onBeforeRender/);
});

test('promotion checks the injected CommonJS Three material prototype', () => {
  const three = createRequire(import.meta.url)('three');
  const root = new three.Group();
  const material = new three.MeshStandardMaterial();
  root.add(new three.Mesh(new three.BoxGeometry(), material));
  assert.doesNotThrow(() => assertMaterialCompatibility(root, 'CJS factory', three.Material));
  material.onBeforeCompile = () => {};
  assert.throws(() => assertMaterialCompatibility(root, 'CJS factory', three.Material), /onBeforeCompile/);
});

test('finished kit factories construct without nonportable material programs', async () => {
  const report = await auditFactories(new URL('../../packages/props/src/models/', import.meta.url).pathname);
  assert.ok(report.checked > 0);
  const {assets}=await readRegistry();
  const previews=new Set(assets.filter(a=>a.model.review.preview).map(a=>a.id));
  // Explicit preview checkpoints may retain browser effects; export guards above
  // continue to reject those effects. Construction errors are never exempted.
  assert.deepEqual(report.failures.filter(f=>!previews.has(f.asset) || !f.issues?.length), []);
});
