import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { namedMeshPlugin } from '../../web/client/src/unreal/namedMeshPlugin.js';

test('GLB mesh definitions retain render and UCX names for Interchange', async () => {
  const previous = globalThis.FileReader;
  globalThis.FileReader = class {
    async readAsArrayBuffer(blob) {
      this.result = await blob.arrayBuffer();
      this.onloadend?.();
    }
  };
  const scene = new THREE.Scene();
  const names = ['SM_TK_Test', 'UCX_SM_TK_Test_01', 'UCX_SM_TK_Test_02'];
  for (const name of names) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshStandardMaterial());
    mesh.name = name;
    scene.add(mesh);
  }
  try {
    const exporter = new GLTFExporter().register(namedMeshPlugin);
    const buffer = await exporter.parseAsync(scene, { binary: true });
    const bytes = new Uint8Array(buffer);
    const jsonLength = new DataView(buffer).getUint32(12, true);
    const json = JSON.parse(new TextDecoder().decode(bytes.subarray(20, 20 + jsonLength)));
    assert.deepEqual(json.meshes.map(mesh => mesh.name), names);
    for (const node of json.nodes) {
      assert.equal(json.meshes[node.mesh].name, node.name);
    }
  } finally {
    globalThis.FileReader = previous;
    scene.traverse(object => { object.geometry?.dispose(); object.material?.dispose(); });
  }
});
