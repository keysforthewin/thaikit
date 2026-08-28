import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

import { manifestFromScene } from './manifest.js';
import { CellSet, CASTER_LAYER } from './cells.js';
import { attachLightmap, eachMaterial } from './materials.js';
import { applyLights } from './lights.js';
import { buildColliders } from './colliders.js';
import { LevelRaycaster } from './bvh.js';
import { NullPhysics } from './physics/null.js';
import { pickSpawn } from './spawns.js';

/**
 * Load a baked level into a three.js scene.
 *
 *   const level = await loadLevel('/levels/soi/build/level.glb', { scene, renderer, camera, physics });
 *   // each frame:
 *   level.update(dt, camera.position);
 *
 * @param {string|ArrayBuffer} source  URL or the GLB bytes
 * @param {object} opts
 * @param {THREE.Scene}    opts.scene
 * @param {THREE.WebGLRenderer} opts.renderer   for KTX2 format detection
 * @param {THREE.Camera}   [opts.camera]
 * @param {PhysicsAdapter} [opts.physics]        default: none
 * @param {string}         [opts.transcoderPath] where basis_transcoder.{js,wasm} are served (default 'https://unpkg.com/three@0.185.0/examples/jsm/libs/basis/')
 * @param {KTX2Loader}     [opts.ktx2Loader]     a configured loader, if you already have one
 */
export async function loadLevel(source, opts) {
  const { scene, renderer, camera = null, physics = new NullPhysics(), transcoderPath, ktx2Loader: givenKtx2, lightmapIntensity = null, hemisphere = true } = opts;
  if (!scene || !renderer) throw new Error('loadLevel needs { scene, renderer }');

  const ktx2 = givenKtx2 ?? new KTX2Loader().setTranscoderPath(transcoderPath ?? 'https://unpkg.com/three@0.185.0/examples/jsm/libs/basis/').detectSupport(renderer);
  const loader = new GLTFLoader().setKTX2Loader(ktx2).setMeshoptDecoder(MeshoptDecoder);

  const gltf = typeof source === 'string' ? await loader.loadAsync(source) : await loader.parseAsync(source, '');
  const root = gltf.scene;
  root.name = 'level';
  const manifest = manifestFromScene(root);

  const cells = new CellSet(manifest, root);
  const dynamicNodes = new Map(manifest.dynamic.map((d) => [d.node, root.getObjectByName(d.node)]).filter(([, n]) => n));

  // Static geometry: no real-time casting (the bake already has the shadows),
  // receives the small dynamic shadow map. Dynamic objects cast and receive.
  for (const cell of cells.cells) {
    for (const tier of cell.tiers.slice(0, 2)) tier?.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = true; } });
  }
  for (const node of dynamicNodes.values()) node.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });

  let lightmap = null;
  if (manifest.lightmap) {
    // The lightmap is an IMAGE nothing references (no material carries a
    // lightMap in glTF), so it has no textures[] entry to load through the
    // parser: read its bufferView and transcode it directly.
    const imageDef = gltf.parser.json.images?.[manifest.lightmap.image];
    if (!imageDef || imageDef.bufferView == null) throw new Error('manifest.lightmap.image does not point at an embedded image');
    const view = await gltf.parser.getDependency('bufferView', imageDef.bufferView);
    lightmap = await new Promise((resolve, reject) => ktx2.parse(view.slice(0), resolve, reject));
    lightmap.channel = manifest.lightmap.channel ?? 1;
    lightmap.colorSpace = THREE.SRGBColorSpace;
    lightmap.flipY = false;
    lightmap.generateMipmaps = false;
    lightmap.minFilter = THREE.LinearFilter;
    const intensity = lightmapIntensity ?? manifest.lightmap.intensity ?? 1;
    for (const cell of cells.cells) for (const tier of cell.tiers) if (tier) eachMaterial(tier, (m) => { if (!m.userData.thaikitLightmap) attachLightmap(m, lightmap, { intensity }); });
  }

  const lights = applyLights(manifest, root, { hemisphere });
  if (camera) camera.layers.disable(CASTER_LAYER);
  scene.add(root);

  const colliders = buildColliders(manifest, physics, { nodes: dynamicNodes });
  const raycaster = new LevelRaycaster(cells);

  const followTarget = new THREE.Vector3();
  return {
    manifest, root, cells, lights, lightmap, colliders, physics, gltf,
    spawns: { list: manifest.spawns, pick: (team) => pickSpawn(manifest.spawns, team) },
    raycast: (ray, o) => raycaster.raycast(ray, o),
    /** Step physics, sync dynamic nodes, switch LOD tiers, keep the moon's shadow box around `cameraPosition`. */
    update(dt, cameraPosition = camera?.position) {
      physics.step(dt);
      for (const d of colliders.dynamic) {
        if (!d.node || !d.entry.physics?.enabled) continue;
        const t = d.body.getTransform();
        d.node.position.fromArray(t.position);
        d.node.quaternion.fromArray(t.quaternion);
      }
      if (cameraPosition) {
        cells.update(cameraPosition);
        lights.follow(followTarget.copy(cameraPosition));
      }
    },
    dispose() {
      scene.remove(root);
      root.traverse((o) => { if (o.isMesh) { o.geometry.boundsTree?.dispose?.(); o.geometry.dispose(); } });
      eachMaterial(root, (m) => { for (const v of Object.values(m)) if (v?.isTexture) v.dispose(); m.dispose(); });
      lightmap?.dispose();
      physics.dispose();
      if (!givenKtx2) ktx2.dispose();
    },
  };
}
