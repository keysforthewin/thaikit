import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { prepareExportTextures } from '../../web/client/src/unreal/propGlb.js';

test('DataTexture export retains bytes, sampling and shared maps without changing the viewer source', () => {
  const previous = globalThis.document;
  let written;
  globalThis.document = { createElement() { return { getContext() { return {
    createImageData(w, h) { return { data: new Uint8ClampedArray(w * h * 4) }; },
    putImageData(image) { written = image.data; },
  }; } }; } };
  try {
    const data = new Uint8Array([128, 64, 255, 255, 0, 240, 50, 255]);
    const texture = new THREE.DataTexture(data, 2, 1);
    texture.colorSpace = THREE.NoColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.set(2, 3); texture.offset.set(.25, .5);
    const source = texture.source;
    const material = new THREE.MeshStandardMaterial({ normalMap: texture, roughnessMap: texture, metalnessMap: texture });
    prepareExportTextures([material]);
    assert.equal(material.normalMap, material.roughnessMap);
    assert.equal(material.normalMap, material.metalnessMap);
    assert.notEqual(material.normalMap.source, source);
    assert.equal(texture.source, source);
    assert.equal(texture.image.data, data);
    assert.equal(material.normalMap.isDataTexture, undefined);
    for (const key of ['flipY', 'colorSpace', 'wrapS', 'minFilter', 'magFilter']) assert.equal(material.normalMap[key], texture[key]);
    assert.deepEqual(material.normalMap.repeat, texture.repeat);
    assert.deepEqual(material.normalMap.offset, texture.offset);
    assert.deepEqual(Array.from(written), Array.from(data));
    assert.equal(material.normalMap.image.width, 2);
    assert.equal(material.normalMap.image.height, 1);
  } finally { globalThis.document = previous; }
});
