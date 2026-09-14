import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { loadLightmaps, bindLightmaps } from '../src/lightmaps.js';

test('atlas materials preserve separate ranges, shared LODs and dynamic lighting', async () => {
  const spec = { atlases: [{ image: 0, range: 2 }, { image: 1, range: 4 }], intensity: 3, bakedLights: true };
  const textures = await loadLightmaps(spec, async () => new THREE.Texture());
  const a = new THREE.MeshStandardMaterial();a.userData.tk = { lightmapAtlas: 0 };
  const b = a.clone();b.userData.tk.lightmapAtlas = 1;
  const roots = [new THREE.Mesh(new THREE.BoxGeometry(),a),new THREE.Mesh(new THREE.BoxGeometry(),b),new THREE.Mesh(new THREE.BoxGeometry(),a)];
  const dynamic = new THREE.Mesh(new THREE.BoxGeometry(),a);
  bindLightmaps(roots,spec,textures);
  assert.equal(roots[0].material.lightMap,textures[0]);
  assert.equal(roots[1].material.lightMap,textures[1]);
  assert.equal(roots[0].material.lightMapIntensity,6);
  assert.equal(roots[1].material.lightMapIntensity,12);
  assert.equal(roots[0].material,roots[2].material);
  assert.equal(dynamic.material.lightMap,null);
});
test('legacy image and failed atlas loading dispose correctly',async()=>{
  let disposed=0;const t=new THREE.Texture();t.addEventListener('dispose',()=>disposed++);
  await assert.rejects(loadLightmaps({atlases:[{image:0},{image:1}]},async i=>{if(i)throw Error('missing');return t}),/missing/);
  assert.equal(disposed,1);
  const textures=await loadLightmaps({image:4,range:2},async i=>{assert.equal(i,4);return t});
  const mesh=new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshStandardMaterial());
  bindLightmaps([mesh],{image:4,range:2},textures);
  assert.equal(mesh.material.lightMapIntensity,2);
});
test('missing atlas assignment fails before scene mutation',()=>{
  const original=new THREE.MeshStandardMaterial();const mesh=new THREE.Mesh(new THREE.BoxGeometry(),original);
  assert.throws(()=>bindLightmaps([mesh],{atlases:[{image:0}]},[new THREE.Texture()]),/invalid lightmap/);
  assert.equal(mesh.material,original);
});
