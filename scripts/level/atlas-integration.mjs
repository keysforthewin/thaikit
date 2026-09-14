/** Small real Cycles integration, writes only the requested scratch directory. */
import fs from 'node:fs/promises';
import path from 'node:path';
import { NodeIO, Document } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { getBounds } from '@gltf-transform/functions';
import { bakeWithBlender } from './bakers/blender-cycles.mjs';
import { LevelSettings, ManifestExtras } from '@thai-kit/level-schema';
import assert from 'node:assert/strict';
import { auditAtlasCoverage } from './pipeline/atlas-coverage.mjs';
import { addLightmapTexture } from './pipeline/textures.mjs';
import { buildLodTiers } from './pipeline/lod.mjs';
import { compressLevelGeometry } from './pipeline/compress-geometry.mjs';
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';
const outDir=path.resolve(process.argv[2]??'scratch/atlas-integration');
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS),doc=new Document(),buffer=doc.createBuffer(),scene=doc.createScene();
const mat=doc.createMaterial('shared').setMetallicFactor(0);
for(let i=0;i<2;i++){
 const p=doc.createPrimitive().setMaterial(mat);
 for(const [name,type,array] of [['POSITION','VEC3',[0,0,0,0,0,3,3,0,3,3,0,0]],['NORMAL','VEC3',[0,1,0,0,1,0,0,1,0,0,1,0]],['TEXCOORD_0','VEC2',[0,0,0,1,1,1,1,0]],['COLOR_0','VEC3',Array(12).fill(1)],['_TK_SOURCE','SCALAR',Array(4).fill(i)]])p.setAttribute(name,doc.createAccessor().setType(type).setArray(new Float32Array(array)).setBuffer(buffer));
 p.setIndices(doc.createAccessor().setType('SCALAR').setArray(new Uint16Array([0,1,2,0,2,3])).setBuffer(buffer));
 scene.addChild(doc.createNode(`cell_${i}_0`).addChild(doc.createNode('lod0').addChild(doc.createNode('surface').setTranslation([i*8,0,0]).setMesh(doc.createMesh().addPrimitive(p)))));
}
const settings=LevelSettings.parse({lightmap:{size:64,texelsPerMeter:12,maxAtlases:32,samples:1,noiseThreshold:0}});
const boundsBefore=getBounds(scene);
const result=await bakeWithBlender({io,doc,bake:{id:'atlas-test',settings,lights:[]},outDir,cpu:true,coverageOnly:process.argv.includes('--coverage-only'),onProgress:console.log});
assert.deepEqual(getBounds(scene),boundsBefore,'atlas round trip moved geometry');
assert.ok(result.lightmapPngs.length>=2);
if(process.argv.includes('--coverage-only'))assert.equal(result.lightmapStats.coverageOnly,true);
const assignments=[];
for(const node of doc.getRoot().listNodes())for(const p of node.getMesh()?.listPrimitives()??[])assignments.push(p.getMaterial()?.getExtras()?.tk?.lightmapAtlas);
assert.ok(assignments.every(Number.isInteger));assert.ok(new Set(assignments).size>=2);
await io.write(path.join(outDir,'result.glb'),doc);
const coverage=await auditAtlasCoverage(doc,outDir);
assert.equal(coverage.ok,true,JSON.stringify(coverage.failures));
await buildLodTiers()(doc);
const images=[];
for(const png of result.lightmapPngs)images.push(await addLightmapTexture(doc,png,{onProgress:console.log}));
scene.setExtras({thaikitManifest:ManifestExtras.parse({schemaVersion:2,id:'atlas-test',name:'Atlas integration',generatedAt:new Date().toISOString(),generator:{tool:'test',version:'1'},
 bounds:{min:[0,0,0],max:[11,.2,3]},cells:{size:8,list:[0,1].map(i=>({key:`${i}_0`,ix:i,iz:0,bounds:{min:[i*8,0,0],max:[i*8+3,.2,3]},drawCalls:[1,1,1],triangles:[2,2,2]}))},
 lod:{distances:[60,140],hysteresis:8},ambient:{sky:'#ffffff',ground:'#111111',intensity:.35},
 spawns:[{name:'test',position:[1.5,.1,1.5],yawDeg:0}],
 lightmap:{atlases:images.map((image,i)=>({image,size:64,range:result.lightmapStats.atlases[i].range})),texelsPerMeter:12,bakedLights:true}
})});
await Promise.all([MeshoptEncoder.ready,MeshoptDecoder.ready]);
io.registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
await doc.transform(compressLevelGeometry({encoder:MeshoptEncoder}));
await io.write(path.join(outDir,'level.glb'),doc);
const final=await io.read(path.join(outDir,'level.glb'));
const after=await auditAtlasCoverage(final,outDir);
assert.equal(after.ok,true,JSON.stringify(after.failures));
console.log('MULTI ATLAS INTEGRATION PASS',assignments);
