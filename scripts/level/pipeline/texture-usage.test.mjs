import test from 'node:test';
import assert from 'node:assert/strict';
import { Document, NodeIO } from '@gltf-transform/core';
import { KHRMaterialsClearcoat } from '@gltf-transform/extensions';
import { auditTextureUsage, pruneUnusedTextures } from './texture-usage.mjs';

const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScLbtAAAAABJRU5ErkJggg==', 'base64');
function fixture(legacy = false) {
  const doc = new Document();
  const image = name => doc.createTexture(name).setImage(png).setMimeType('image/png');
  image('orphan-with-misleading-name-lightmap').setExtras({ tk: { kind: 'lightmap' } });
  const color = image('shared-color');
  const coat = image('extension-normal');
  const abandoned = image('abandoned-material-image');
  image('page-one'); image('page-two'); image('sky'); image('clouds');
  const ext = doc.createExtension(KHRMaterialsClearcoat);
  const material = doc.createMaterial().setBaseColorTexture(color).setEmissiveTexture(color)
    .setExtension('KHR_materials_clearcoat', ext.createClearcoat().setClearcoatNormalTexture(coat));
  doc.createMaterial('unused').setBaseColorTexture(abandoned)
    .setExtension('KHR_materials_clearcoat', ext.createClearcoat().setClearcoatNormalTexture(abandoned));
  const position = doc.createAccessor().setType('VEC3').setArray(new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0])).setBuffer(doc.createBuffer());
  const mesh = doc.createMesh().addPrimitive(doc.createPrimitive().setAttribute('POSITION', position).setMaterial(material));
  const manifest = { lightmap: legacy ? { image: 4 } : { atlases: [{ image: 4 }, { image: 5 }] }, sky: { base: { image: 6 }, clouds: { image: 7 } } };
  doc.createScene().addChild(doc.createNode('dynamic/prop').setMesh(mesh)).setExtras({ thaikitManifest: manifest });
  return { doc, manifest };
}

for (const legacy of [false, true]) test(`cleanup preserves material extensions and ${legacy ? 'legacy' : 'multi-atlas'} manifest images through GLB roundtrip`, async () => {
  const { doc, manifest } = fixture(legacy);
  const before = doc.getRoot().listTextures();
  const sky = before[6];
  const result = await pruneUnusedTextures(doc);
  assert.equal(result.removed, legacy ? 3 : 2);
  assert.equal(doc.getRoot().listTextures()[manifest.sky.base.image], sky);
  assert.equal(manifest.lightmap.atlases?.[0].image ?? manifest.lightmap.image, 2);
  const io = new NodeIO().registerExtensions([KHRMaterialsClearcoat]);
  const bytes = await io.writeBinary(doc);
  const json = JSON.parse(Buffer.from(bytes).subarray(20, 20 + new DataView(bytes.buffer, bytes.byteOffset).getUint32(12, true)).toString());
  const audit = auditTextureUsage(json);
  assert.equal(audit.ok, true, audit.failures.join('\n'));
  assert.equal(audit.materialImages.length, 2);
  assert.equal(audit.manifestImages.length, legacy ? 3 : 4);
  assert.deepEqual(await pruneUnusedTextures(doc), { removed: 0, bytes: 0, remaining: legacy ? 5 : 6 });
});

test('dangling manifest image fails before cleanup can silently retarget it', async () => {
  const { doc, manifest } = fixture();
  manifest.sky.base.image = 100;
  await assert.rejects(pruneUnusedTextures(doc), /sky.base.image: missing image/);
  assert.equal(doc.getRoot().listTextures().length, 8);
});

test('serialized audit rejects orphan payloads, missing sources and broken material references', () => {
  const json = {
    meshes: [{ primitives: [{ material: 0 }] }],
    materials: [{ pbrMetallicRoughness: { baseColorTexture: { index: 0 } } }],
    textures: [{ extensions: { KHR_texture_basisu: { source: 0 } } }],
    images: [{ bufferView: 0 }, { bufferView: 1 }],
    bufferViews: [{ byteLength: 8 }, { byteLength: 8 }],
  };
  assert.deepEqual(auditTextureUsage(json).unusedImages, [1]);
  json.scenes = [{ extras: { thaikitManifest: { sky: { base: { image: 1 } } } } }];
  assert.equal(auditTextureUsage(json).ok, true);
  json.textures[0].extensions.KHR_texture_basisu.source = 99;
  assert.match(auditTextureUsage(json).failures.join('\n'), /missing image 99/);
  json.materials[0].pbrMetallicRoughness.baseColorTexture.index = 9;
  assert.match(auditTextureUsage(json).failures.join('\n'), /missing texture 9/);
  assert.deepEqual(auditTextureUsage(json).unusedTextures, [0]);
});

test('an unused material does not justify keeping its texture', () => {
  const audit = auditTextureUsage({ materials: [{ normalTexture: { index: 0 } }], textures: [{ source: 0 }], images: [{ bufferView: 0 }], bufferViews: [{ byteLength: 4 }] });
  assert.deepEqual(audit.unusedImages, [0]);
  assert.deepEqual(audit.unusedTextures, [0]);
});
