import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

import { manifestFromScene } from './manifest.js';
import { CellSet, CASTER_LAYER } from './cells.js';
import { attachLightmap, eachMaterial } from './materials.js';
import { applyLights } from './lights.js';
import { buildSky } from './sky.js';
import { applyBillboard, isBillboard } from './billboard.js';
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
 * @param {boolean}        [opts.sky]            build the level's sky (default true); false leaves `scene.background` alone
 */
export async function loadLevel(source, opts) {
  const { scene, renderer, camera = null, physics = new NullPhysics(), transcoderPath, ktx2Loader: givenKtx2, lightmapIntensity = null, hemisphere = true, sky: wantSky = true } = opts;
  if (!scene || !renderer) throw new Error('loadLevel needs { scene, renderer }');

  const ktx2 = givenKtx2 ?? new KTX2Loader().setTranscoderPath(transcoderPath ?? 'https://unpkg.com/three@0.185.0/examples/jsm/libs/basis/').detectSupport(renderer);
  const loader = new GLTFLoader().setKTX2Loader(ktx2).setMeshoptDecoder(MeshoptDecoder);

  const gltf = typeof source === 'string' ? await loader.loadAsync(source) : await loader.parseAsync(source, '');
  const root = gltf.scene;
  root.name = 'level';
  const manifest = manifestFromScene(root);

  const cells = new CellSet(manifest, root);
  const dynamicNodes = new Map(manifest.dynamic.map((d) => [d.node, root.getObjectByName(d.node)]).filter(([, n]) => n));
  // Billboards are always dynamic -- a static placement is merged into its
  // cell's one mesh at bake and can never turn again -- so they are all here.
  const billboards = manifest.dynamic
    .filter((d) => isBillboard(d.billboard) && dynamicNodes.get(d.node))
    .map((d) => ({ node: dynamicNodes.get(d.node), mode: d.billboard }));

  // Static geometry: no real-time casting (the bake already has the shadows),
  // receives the small dynamic shadow map. Dynamic objects cast and receive.
  for (const cell of cells.cells) {
    for (const tier of cell.tiers.slice(0, 2)) tier?.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = true; } });
  }
  for (const node of dynamicNodes.values()) node.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });

  // The lightmap and the sky's maps are IMAGES nothing references (glTF has no
  // slot for either), so they have no textures[] entry to load through the
  // parser: read the bufferView the manifest points at and transcode it
  // directly. `parser.loadTexture(i)` on one of these fails on 'source'.
  const readEmbedded = async (index, what) => {
    const imageDef = gltf.parser.json.images?.[index];
    if (!imageDef || imageDef.bufferView == null) throw new Error(`manifest.${what} does not point at an embedded image`);
    const view = await gltf.parser.getDependency('bufferView', imageDef.bufferView);
    return new Promise((resolve, reject) => ktx2.parse(view.slice(0), resolve, reject));
  };

  let lightmap = null;
  if (manifest.lightmap) {
    lightmap = await readEmbedded(manifest.lightmap.image, 'lightmap.image');
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

  // The sky goes on the SCENE, not on `root`: it is not level geometry, and
  // anything under root is fair game for the cell sweep and the LOD tiers. It
  // is all domes, so `scene.background` is left exactly as the game set it --
  // it shows only if every sky layer is off.
  let sky = null;
  if (manifest.sky && wantSky) {
    const base = manifest.sky.base ? await readEmbedded(manifest.sky.base.image, 'sky.base.image') : null;
    const clouds = manifest.sky.clouds ? await readEmbedded(manifest.sky.clouds.image, 'sky.clouds.image') : null;
    // No flipY to set: KTX2Loader hands back CompressedTextures, which ignore
    // the flag because WebGL cannot flip a compressed upload. The bake writes
    // these images already flipped so this path matches what the editor showed.
    sky = buildSky(manifest.sky, { base, clouds, owned: true });
    scene.add(sky.group);
  }

  const colliders = buildColliders(manifest, physics, { nodes: dynamicNodes });
  const raycaster = new LevelRaycaster(cells);

  const followTarget = new THREE.Vector3();
  return {
    manifest, root, cells, lights, sky, billboards, lightmap, colliders, physics, gltf,
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
      // After the physics sync, so a billboard that also has a body keeps its
      // simulated POSITION and takes its facing from the camera.
      if (billboards.length && camera) {
        for (const b of billboards) applyBillboard(b.node, b.mode, camera);
      }
      // The domes ride the camera, so they take the position even on a frame
      // where nothing else moved.
      sky?.update(dt, cameraPosition);
    },
    dispose() {
      scene.remove(root);
      root.traverse((o) => { if (o.isMesh) { o.geometry.boundsTree?.dispose?.(); o.geometry.dispose(); } });
      eachMaterial(root, (m) => { for (const v of Object.values(m)) if (v?.isTexture) v.dispose(); m.dispose(); });
      lightmap?.dispose();
      if (sky) {
        scene.remove(sky.group);
        sky.dispose();
      }
      physics.dispose();
      if (!givenKtx2) ktx2.dispose();
    },
  };
}
