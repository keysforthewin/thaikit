import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { gzipSync } from 'node:zlib';
import { Document } from '@gltf-transform/core';
import { auditAtlasCoverage } from './atlas-coverage.mjs';

test('an appended LOD atlas validates its own UVs and rejects wrong page assignments', async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'lod-coverage-'));
  try {
    await fs.mkdir(path.join(directory, 'atlas-000'));
    await fs.writeFile(path.join(directory, 'atlas-layout.json'), JSON.stringify({ size:8, count:1,
      objects:{ transferred:{source:'target',atlas:0} }, rectangles:[{source:'target',atlas:0}] }));
    await fs.writeFile(path.join(directory, 'atlas-000/owner.bin.gz'), gzipSync(new Uint8Array(new Int32Array(64).buffer)));
    const doc=new Document(), buffer=doc.createBuffer(), scene=doc.createScene();
    const uv=doc.createAccessor().setType('VEC2').setArray(new Float32Array([.25,.25,.6,.25,.25,.6])).setBuffer(buffer);
    const position=doc.createAccessor().setType('VEC3').setArray(new Float32Array([0,0,0,1,0,0,0,1,0])).setBuffer(buffer);
    const add=(name,page)=>{
      const material=doc.createMaterial().setExtras({tk:{lightmapAtlas:page}});
      scene.addChild(doc.createNode(name).setMesh(doc.createMesh().addPrimitive(doc.createPrimitive()
        .setAttribute('POSITION',position).setAttribute('TEXCOORD_1',uv).setMaterial(material))));
      return material;
    };
    add('original',0);
    const material=add('transferred',1);
    const options={atlasOffset:1,atlasCount:2};
    const result=await auditAtlasCoverage(doc,directory,options);
    assert.equal(result.ok,true);
    assert.deepEqual(result.atlases,[{atlas:1,triangles:1}]);
    assert.equal((await auditAtlasCoverage(doc,directory)).ok,false);
    material.setExtras({tk:{lightmapAtlas:0}});
    assert.equal((await auditAtlasCoverage(doc,directory,options)).ok,false);
  } finally { await fs.rm(directory,{recursive:true,force:true}); }
});
