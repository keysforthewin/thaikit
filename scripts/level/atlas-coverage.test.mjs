import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { gzipSync } from 'node:zlib';
import { Document } from '@gltf-transform/core';
import { auditAtlasCoverage } from './pipeline/atlas-coverage.mjs';

test('final atlas audit detects an interior hole away from edges and centroid',async()=>{
  const dir=await fs.mkdtemp(path.join(os.tmpdir(),'atlas-audit-'));
  try {
    const size=64,doc=new Document(),buffer=doc.createBuffer();
    const uv=doc.createAccessor().setBuffer(buffer).setType('VEC2').setArray(new Float32Array([.1,.9,.9,.9,.1,.1]));
    const material=doc.createMaterial().setExtras({tk:{lightmapAtlas:0}});
    doc.createScene().addChild(doc.createNode('lod1').setMesh(doc.createMesh().addPrimitive(doc.createPrimitive().setMaterial(material).setAttribute('TEXCOORD_1',uv))));
    const owner=new Int32Array(size*size);
    await fs.mkdir(path.join(dir,'atlas-000'));
    await fs.writeFile(path.join(dir,'atlas-layout.json'),JSON.stringify({size,count:1,objects:{lod1:{source:'original',atlas:0}},rectangles:[{source:'original'}]}));
    const save=()=>fs.writeFile(path.join(dir,'atlas-000/owner.bin.gz'),gzipSync(owner));
    await save();assert.equal((await auditAtlasCoverage(doc,dir)).ok,true);
    material.setExtras({tk:{lightmapAtlas:1}});
    assert.equal((await auditAtlasCoverage(doc,dir)).ok,false,'out-of-range pages must not be skipped');
    material.setExtras({tk:{lightmapAtlas:0}});
    await fs.writeFile(path.join(dir,'atlas-layout.json'),JSON.stringify({size,count:1,objects:{lod1:{source:'different-mesh',atlas:0}},rectangles:[{source:'original'}]}));
    assert.equal((await auditAtlasCoverage(doc,dir)).ok,false,'covered texels must belong to this source');
    await fs.writeFile(path.join(dir,'atlas-layout.json'),JSON.stringify({size,count:1,objects:{lod1:{source:'original',atlas:0}},rectangles:[{source:'original'}]}));
    owner[18*size+18]=-1;await save();
    const report=await auditAtlasCoverage(doc,dir);
    assert.equal(report.ok,false);assert.equal(report.failures[0].node,'lod1');
    owner.fill(0);await save();uv.setArray(new Float32Array([NaN,.9,.9,.9,.1,.1]));
    assert.equal((await auditAtlasCoverage(doc,dir)).failures[0].reason,'invalid UV');
  }finally{await fs.rm(dir,{recursive:true,force:true});}
});
