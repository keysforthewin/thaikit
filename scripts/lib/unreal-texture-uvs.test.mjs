import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { flattenPrototype } from '../../web/client/src/unreal/propGlb.js';

for (const slot of ['map', 'roughnessMap', 'metalnessMap', 'normalMap', 'emissiveMap']) {
  test(`Unreal export preserves constant lookup UVs consumed by ${slot}`, () => {
    const geometry = new THREE.BoxGeometry(); geometry.clearGroups();
    const uv = geometry.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, 0.35, 0.8);
    const expected = Array.from(uv.array);
    const material = new THREE.MeshStandardMaterial();
    material[slot] = new THREE.DataTexture(new Uint8Array([255, 90, 200, 255]), 1, 1);
    const root = new THREE.Group(); root.add(new THREE.Mesh(geometry, material));
    const mesh = flattenPrototype(root, 'SM_Test');
    assert.deepEqual(Array.from(mesh.geometry.attributes.uv.array), expected);
    assert.deepEqual(Array.from(uv.array), expected, 'source is unchanged');
  });
}
test('Unreal export still supplies usable UV charts on untextured geometry', () => {
  const geometry = new THREE.BoxGeometry(); geometry.clearGroups(); geometry.deleteAttribute('uv');
  const root = new THREE.Group(); root.add(new THREE.Mesh(geometry, new THREE.MeshStandardMaterial()));
  const mesh = flattenPrototype(root, 'SM_Test');
  assert.ok(Array.from(mesh.geometry.attributes.uv.array).some(v => v !== 0));
});

test('Unreal export preserves AO UV1 while merging a piece with only UV0', () => {
  const geometry = new THREE.BoxGeometry(); geometry.clearGroups();
  const uv1 = geometry.attributes.uv.clone();
  for (let i = 0; i < uv1.count; i++) uv1.setXY(i, .125 + uv1.getX(i) * .25, .625 + uv1.getY(i) * .125);
  geometry.setAttribute('uv1', uv1);
  geometry.setAttribute('uv2', uv1.clone()); // Unused lightmap probe should still disappear.
  const ao = new THREE.DataTexture(new Uint8Array([192, 192, 192, 255]), 1, 1);
  ao.channel = 1;
  const coated = new THREE.MeshStandardMaterial({ aoMap: ao });
  const plainGeometry = new THREE.BoxGeometry(); plainGeometry.clearGroups();
  const root = new THREE.Group();
  root.add(new THREE.Mesh(geometry, coated), new THREE.Mesh(plainGeometry, new THREE.MeshStandardMaterial()));
  const mesh = flattenPrototype(root, 'SM_Ao');
  const actual = mesh.geometry.attributes.uv1;
  assert.ok(actual, 'material-consumed UV channel is present');
  assert.deepEqual(Array.from(actual.array.slice(0, uv1.array.length)), Array.from(uv1.array));
  assert.ok(Array.from(actual.array.slice(uv1.array.length)).every(v => v === 0), 'unmapped pieces have harmless padding');
  assert.equal(mesh.geometry.attributes.uv2, undefined);
  assert.equal(mesh.material[0].aoMap.channel, 1);
  assert.equal(plainGeometry.attributes.uv1, undefined, 'source geometry remains unchanged');
});

test('Unreal export rejects an AO material whose authored UV channel is missing', () => {
  const geometry = new THREE.BoxGeometry(); geometry.clearGroups();
  const ao = new THREE.Texture(); ao.channel = 1;
  const root = new THREE.Group(); root.add(new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({ aoMap: ao })));
  assert.throws(() => flattenPrototype(root, 'SM_BadAo'), /requires missing uv1/);
});

for (const [id, materialCount] of [['honda-wave',4],['tuk-tuk',4],['toyota-hilux',4],['toyota-fortuner',4],['songthaew',6],['toyota-commuter-van',4],['isuzu-d-max',4]]) test(`${id} keeps every authored surface lookup through Unreal flattening`, async () => {
  const { build } = await import('esbuild');
  const { createRequire } = await import('node:module');
  const require = createRequire(import.meta.url);
  const { outputFiles } = await build({ entryPoints: [`packages/props/src/models/${id}/createObjectModel.ts`], bundle: true, write: false, format: 'cjs', platform: 'node', external: ['three'] });
  const mod = { exports: {} };
  new Function('require', 'module', 'exports', outputFiles[0].text)(name => name === 'three' ? THREE : require(name), mod, mod.exports);
  const root = mod.exports.createObjectModel({}, {});
  // The installed prototype cache removes runtime object references before export.
  delete root.userData.sculptRuntime;
  const histogram = (geometries) => {
    const counts = new Map();
    for (const g of geometries) {
      const uv = g.attributes.uv;
      for (let i = 0; i < (g.index?.count ?? uv.count); i++) {
        const j = g.index ? g.index.getX(i) : i;
        const key = `${uv.getX(j).toFixed(6)},${uv.getY(j).toFixed(6)}`;
        counts.set(key, (counts.get(key) ?? 0) + 1);
      }
    }
    return [...counts].sort();
  };
  const hasTexture = m => Object.values(m).some(v => v?.isTexture);
  const source = []; root.traverse(o => { if (o.isMesh && (id !== 'isuzu-d-max' || hasTexture(o.material))) for (let i = 0; i < (o.isInstancedMesh ? o.count : 1); i++) source.push(o.geometry); });
  const exported = flattenPrototype(root, `SM_TK_${id}`);
  let mappedGeometry = exported.geometry;
  if (id === 'isuzu-d-max') {
    // Its untextured glass deliberately has no authored UVs. Check every
    // textured primitive, without asserting the exporter's invented glass charts.
    mappedGeometry = exported.geometry.clone();
    const index = exported.geometry.index;
    mappedGeometry.setIndex(exported.geometry.groups
      .filter(g => hasTexture(exported.material[g.materialIndex]))
      .flatMap(g => Array.from({ length: g.count }, (_, i) => index.getX(g.start + i))));
  }
  assert.deepEqual(histogram([mappedGeometry]), histogram(source));
  assert.equal(exported.material.length, materialCount);
  if (id === 'honda-wave') {
    const lens = root.getObjectByName('headlamp-lens');
    assert.ok(lens?.isMesh, 'headlamp has a separate lens');
    assert.equal(lens.parent.name, 'steering');
    const glass = exported.material.find(m => m.name.endsWith('_headlamp_glass'));
    assert.ok(glass?.transparent && glass.opacity > 0.2 && glass.opacity < 0.8, 'lens remains translucent');
    assert.ok(glass.map && glass.normalMap, 'lens keeps its fluted surface maps');
    const glassSlot = exported.material.indexOf(glass), colors = exported.geometry.attributes.color;
    const glassVertices = exported.geometry.groups.filter(g => g.materialIndex === glassSlot)
      .flatMap(g => Array.from({ length: g.count }, (_, i) => exported.geometry.index.getX(g.start + i)));
    assert.ok(glassVertices.some(i => colors.getX(i) < 0.2 && colors.getY(i) > colors.getX(i) && colors.getZ(i) < colors.getY(i)), 'instrument tint survives flattening');
    assert.ok(glassVertices.some(i => colors.getX(i) > 0.99 && colors.getY(i) > 0.99 && colors.getZ(i) > 0.99), 'headlamp glass remains untinted');

    const uv = lens.geometry.attributes.uv;
    for (let i = 0; i < uv.count; i++) {
      assert.ok(uv.getX(i) >= 0 && uv.getX(i) < 0.5, 'lens avoids amber half of tile');
      assert.equal(Math.floor(uv.getY(i) * 6), 1, 'lens stays in its own atlas tile');
    }
  }

  if (!['toyota-commuter-van', 'isuzu-d-max'].includes(id)) for (const m of exported.material) assert.equal(m.roughnessMap, m.metalnessMap);
  for (const m of exported.material) assert.equal(m.onBeforeCompile, THREE.Material.prototype.onBeforeCompile, 'portable material has no shader callback');
});
