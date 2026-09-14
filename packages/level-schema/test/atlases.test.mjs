import test from 'node:test';
import assert from 'node:assert/strict';
import { ManifestExtras } from '../src/index.js';
const base={schemaVersion:2,id:'atlas-test',name:'Atlas test',generatedAt:new Date().toISOString(),generator:{tool:'test',version:'1'},source:{tool:'unreal-gltf-exporter',lightmap:'blender'},bounds:{min:[0,0,0],max:[1,1,1]},cells:{size:24,list:[]},lod:{distances:[60,140],hysteresis:8},ambient:{sky:'#ffffff',ground:'#111111',intensity:1}};
test('versioned atlas format preserves legacy manifests and rejects ambiguous bindings',()=>{
 assert.equal(ManifestExtras.parse({...base,lightmap:{atlases:[{image:1,size:4096,range:2}]}}).lightmap.atlases[0].range,2);
 assert.equal(ManifestExtras.parse({...base,schemaVersion:1,lightmap:{image:1}}).lightmap.image,1);
 for(const lightmap of [{},{image:1},{image:1,atlases:[{image:1,size:4096}]},{atlases:[]},{atlases:[{image:-1,size:4096}]}])assert.throws(()=>ManifestExtras.parse({...base,lightmap}));
 assert.throws(()=>ManifestExtras.parse({...base,schemaVersion:1,lightmap:{atlases:[{image:1,size:4096}]}}));
});
