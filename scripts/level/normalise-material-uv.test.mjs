import test from 'node:test';
import assert from 'node:assert/strict';
import { Document } from '@gltf-transform/core';
import { KHRTextureTransform } from '@gltf-transform/extensions';
import { normaliseAttributes } from './pipeline/normalise.mjs';

function fixture() {
  const doc = new Document();
  const buffer = doc.createBuffer();
  const texture = doc.createTexture().setImage(new Uint8Array([1])).setMimeType('image/png');
  const material = doc.createMaterial('UnrealConcrete').setBaseColorTexture(texture).setNormalTexture(texture);
  material.getBaseColorTextureInfo().setTexCoord(1);
  material.getNormalTextureInfo().setTexCoord(1);
  const accessor = (type, values) => doc.createAccessor().setType(type).setArray(new Float32Array(values)).setBuffer(buffer);
  const primitives = [0, .1].map(offset => {
    const p = doc.createPrimitive().setMaterial(material)
      .setAttribute('POSITION', accessor('VEC3', [0,0,0, 1,0,0, 0,1,0]))
      .setAttribute('NORMAL', accessor('VEC3', [0,0,1, 0,0,1, 0,0,1]))
      .setAttribute('TEXCOORD_0', accessor('VEC2', [0,0, 0,0, 0,0]))
      .setAttribute('TEXCOORD_1', accessor('VEC2', [offset,0, 1,0, offset,1]));
    doc.createMesh().addPrimitive(p);
    return p;
  });
  return {doc,material,primitives};
}

test('preserves each primitive texture mapping when a shared Unreal material uses UV1', () => {
  const {doc,material,primitives} = fixture();
  const expected = primitives.map(p => [...p.getAttribute('TEXCOORD_1').getArray()]);
  normaliseAttributes()(doc);
  primitives.forEach((p,i) => {
    assert.deepEqual([...p.getAttribute('TEXCOORD_0').getArray()], expected[i]);
    assert.equal(p.getAttribute('TEXCOORD_1'),null);
  });
  assert.equal(material.getBaseColorTextureInfo().getTexCoord(),0);
  assert.equal(material.getNormalTextureInfo().getTexCoord(),0);
});

test('resolves a texture transform UV override and preserves transform and adopted lightmap UVs', () => {
  const {doc,material,primitives} = fixture();
  const transform=doc.createExtension(KHRTextureTransform).createTransform().setTexCoord(1).setScale([2,3]).setOffset([.2,.3]);
  material.getBaseColorTextureInfo().setTexCoord(0).setExtension('KHR_texture_transform',transform);
  normaliseAttributes({keep:['TEXCOORD_1']})(doc);
  assert.equal(transform.getTexCoord(),0);
  assert.deepEqual(transform.getScale(),[2,3]);
  assert.deepEqual(transform.getOffset(),[.2,.3]);
  assert.ok(primitives.every(p=>p.getAttribute('TEXCOORD_1')));
});

test('refuses missing or mixed texture coordinates before modifying primitives', () => {
  const {doc,material,primitives} = fixture();
  primitives[1].setAttribute('TEXCOORD_1',null);
  const original=primitives[0].getAttribute('TEXCOORD_0');
  assert.throws(()=>normaliseAttributes()(doc),/missing TEXCOORD_1/);
  assert.equal(primitives[0].getAttribute('TEXCOORD_0'),original);
  material.getNormalTextureInfo().setTexCoord(0);
  assert.throws(()=>normaliseAttributes()(doc),/multiple texture UV channels/);
});
