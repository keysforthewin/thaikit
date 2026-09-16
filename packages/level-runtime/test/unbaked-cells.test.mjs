import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { CellSet, CASTER_LAYER } from '../src/cells.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { loadLevel } from '../src/loadLevel.js';
test('unbaked cells switch LOD without retaining an invisible shadow caster',()=>{
 const root=new THREE.Group(), node=new THREE.Group();node.name='unbaked_0_0';root.add(node);
 for(const name of ['lod0','lod1','lod2']){const tier=new THREE.Group();tier.name=name;tier.add(new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshBasicMaterial()));node.add(tier);}
 const cells=new CellSet({lod:{distances:[10,20],hysteresis:0},cells:{list:[{key:'unbaked/0_0',node:node.name,ix:0,iz:0,bakeLighting:false,bounds:{min:[0,0,0],max:[1,1,1]}}]}},root);
 for(const tier of [0,1,2]){cells.forceTier(tier);node.children.forEach((n,i)=>{assert.equal(n.visible,i===tier);assert.equal(n.children[0].castShadow,false);assert.equal(n.children[0].layers.isEnabled(CASTER_LAYER),false);});}
});

test('loadLevel binds an atlas only to baked cells, even when source materials are shared', async t => {
 const root = new THREE.Group(), material = new THREE.MeshStandardMaterial();
 material.userData.tk = {lightmapAtlas: 0};
 const bounds = {min:[0,0,0],max:[1,1,1]}, list = [], meshes = [];
 for (const bakeLighting of [true, false]) {
  const node = new THREE.Group(); node.name = `${bakeLighting ? 'cell' : 'unbaked'}_0_0`;
  const lod = new THREE.Group(); lod.name = 'lod0';
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(), material);
  lod.add(mesh); node.add(lod); root.add(node); meshes.push(mesh);
  list.push({key:node.name,node:node.name,bakeLighting,ix:0,iz:0,bounds,drawCalls:[1,0,0],triangles:[12,0,0]});
 }
 root.userData.thaikitManifest = {
  schemaVersion:3,id:'unbaked-test',name:'Unbaked test',generatedAt:new Date().toISOString(),
  generator:{tool:'test',version:'1'},bounds,cells:{size:24,list},
  lod:{distances:[60,140],hysteresis:8},ambient:{sky:'#ffffff',ground:'#111111',intensity:1},
  lightmap:{atlases:[{image:0,size:1,range:1}]},
 };
 const texture = new THREE.Texture();
 t.mock.method(GLTFLoader.prototype, 'parseAsync', async () => ({scene:root,parser:{
  json:{images:[{bufferView:0}]},getDependency:async()=>new ArrayBuffer(4),
 }}));
 const level = await loadLevel(new ArrayBuffer(0), {
  scene:new THREE.Scene(),renderer:{},ktx2Loader:{parse:(_data,done)=>done(texture)},sky:false,ibl:false,
 });
 assert.equal(meshes[0].material.lightMap, texture);
 assert.equal(meshes[1].material.lightMap, null);
 assert.equal(meshes[1].material, material);
 assert.equal(meshes[1].castShadow, false);
 level.dispose();
});
