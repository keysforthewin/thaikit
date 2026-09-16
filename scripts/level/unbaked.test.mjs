import test from 'node:test';
import assert from 'node:assert/strict';
import { Document, NodeIO, Logger } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { convertUnrealLevel } from './import-unreal-level.mjs';
import { partitionCells } from './pipeline/partition.mjs';
import { buildLodTiers } from './pipeline/lod.mjs';
import { writeManifest } from './pipeline/manifest.mjs';
import { ManifestExtras } from '@thai-kit/level-schema';

test('Unreal lighting exclusions survive partition, LOD and serialized manifest without extending the floor',async()=>{
 const doc=new Document();doc.setLogger(new Logger(Logger.Verbosity.SILENT));const scene=doc.createScene(),buffer=doc.createBuffer();
 const pos=doc.createAccessor().setType('VEC3').setArray(new Float32Array([0,0,0,2,0,0,0,2,2])).setBuffer(buffer);
 const mesh=doc.createMesh('surface').addPrimitive(doc.createPrimitive().setAttribute('POSITION',pos).setMaterial(doc.createMaterial()));
 scene.addChild(doc.createNode('playable').setMesh(mesh));
 scene.addChild(doc.createNode('outside').setMesh(mesh).setTranslation([2000,0,0]));
 scene.addChild(doc.createNode('bb_tree').setMesh(mesh).setTranslation([-2000,0,0]));
 const {bake}=await convertUnrealLevel({id:'exclusion-test',doc,json:{},bin:new Uint8Array(),kit:{byAsset:new Map(),missing:true},actorMap:{outside:{mesh:'surface',bakeLighting:false,exterior:true},bb_tree:{mesh:'surface',bakeLighting:false,exterior:true}},ground:{y:-.1,color:'#555555'}});
 const outside=bake.placements.find(p=>p.source?.actor==='outside');assert.equal(outside.bakeLighting,false);assert.deepEqual(outside.colliders,[]);
 assert.ok(bake.placements.filter(p=>p.ref==='@thaikit/ground').every(p=>Math.abs(p.position[0])<100));
 const {cells}=partitionCells({bake})(doc);assert.ok([...cells.values()].some(c=>c.node.getName().startsWith('unbaked_')));
 const lodStats=await buildLodTiers()(doc);
 writeManifest({bake,lodStats,lightmapImage:null,generator:{tool:'test',version:'1'}})(doc);
 const io=new NodeIO().registerExtensions(ALL_EXTENSIONS),reopened=await io.readBinary(await io.writeBinary(doc));
 const manifest=ManifestExtras.parse(reopened.getRoot().listScenes()[0].getExtras().thaikitManifest);
 assert.equal(manifest.schemaVersion,3);
 assert.ok(manifest.cells.list.some(c=>c.bakeLighting===false&&c.node.startsWith('unbaked_')));
 assert.ok(manifest.dynamic.some(d=>d.billboard==='yaw'&&!d.physics.enabled&&d.colliders.length===0));
});

test('physical foliage keeps trunk compounds outside the bake while leaves and billboards stay pass-through',async()=>{
 const doc=new Document();doc.setLogger(new Logger(Logger.Verbosity.SILENT));const scene=doc.createScene(),buffer=doc.createBuffer();
 const pos=doc.createAccessor().setType('VEC3').setArray(new Float32Array([0,0,0,2,0,0,0,2,2])).setBuffer(buffer);
 const mesh=doc.createMesh('SM_TK_Test').addPrimitive(doc.createPrimitive().setAttribute('POSITION',pos).setMaterial(doc.createMaterial()));
 for(const name of ['tree','leaf','bb_tree','disabled'])scene.addChild(doc.createNode(name).setMesh(mesh));
 const part={name:'trunk',type:'cylinder',offset:[0,1,0],scale:[.2,1,.2],isTrigger:false};
 const byAsset=new Map([['tree',{ref:'@thai-kit/tree',asset:'tree',colliders:[part],collisionPolicy:'physical-foliage'}],['leaf',{ref:'@thai-kit/leaf',asset:'leaf',colliders:[],collisionPolicy:'none'}]]);
 const actorMap={tree:{mesh:'tree',exterior:true,bakeLighting:false},leaf:{mesh:'leaf'},bb_tree:{mesh:'tree',billboard:'yaw'},disabled:{mesh:'tree',collisionEnabled:'NO_COLLISION'}};
 const {bake}=await convertUnrealLevel({id:'physical-foliage',doc,json:{},bin:new Uint8Array(),kit:{byAsset},actorMap});
 const row=n=>bake.placements.find(p=>p.source?.actor===n);
 assert.equal(row('tree').colliders.length,1);assert.equal(row('tree').bakeLighting,false);
 for(const n of ['leaf','bb_tree','disabled'])assert.deepEqual(row(n).colliders,[]);
});
