import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

import { manifestFromScene } from './manifest.js';
import { CellSet, CASTER_LAYER } from './cells.js';
import { attachLightmap, eachMaterial } from './materials.js';
import { applyLights } from './lights.js';
import { buildSky } from './sky.js';
import { buildEnvironment, applyEnvironment, environmentIntensity } from './environment.js';
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
 * @param {boolean}        [opts.ibl]            image-based lighting from the sky (default true, when the manifest carries an `ibl` block)
 * @param {number}         [opts.iblSize]        override the probe size the level was baked with
 */
export async function loadLevel(source, opts) {
  const { scene, renderer, camera = null, physics = new NullPhysics(), transcoderPath, ktx2Loader: givenKtx2, lightmapIntensity = null, hemisphere = true, sky: wantSky = true, ibl: wantIbl = true, iblSize = null } = opts;
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
  // receives the small dynamic shadow map. Dynamic objects follow their
  // placement's own switches -- a skyline billboard with cast shadow off must
  // stay out of the moon's shadow map, as it stayed out of the bake.
  for (const cell of cells.cells) {
    for (const tier of cell.tiers.slice(0, 2)) tier?.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.receiveShadow = true; } });
  }
  for (const d of manifest.dynamic) {
    const node = dynamicNodes.get(d.node);
    node?.traverse((o) => { if (o.isMesh) { o.castShadow = d.castShadow !== false; o.receiveShadow = d.receiveShadow !== false; } });
  }

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
    // `range` is the scalar the bake divided out to fit bright bounce into an
    // 8-bit atlas. Folding it into the intensity costs nothing: three's
    // `lights_fragment_maps` already multiplies the lightmap by this uniform.
    const intensity = (lightmapIntensity ?? manifest.lightmap.intensity ?? 1) * (manifest.lightmap.range ?? 1);
    for (const cell of cells.cells) for (const tier of cell.tiers) if (tier) eachMaterial(tier, (m) => { if (!m.userData.thaikitLightmap) attachLightmap(m, lightmap, { intensity }); });
  }

  if (camera) camera.layers.disable(CASTER_LAYER);
  scene.add(root);

  // The sky goes on the SCENE, not on `root`: it is not level geometry, and
  // anything under root is fair game for the cell sweep and the LOD tiers. It
  // is all domes, so `scene.background` is left exactly as the game set it --
  // it shows only if every sky layer is off.
  // The base texture is read whether or not a DOME is wanted: the environment
  // is prefiltered from the same pixels, and `smoke-level.mjs` deliberately
  // passes `sky: false` (a backdrop makes every pixel foreground for its
  // coverage measurement) while still needing the level lit the shipped way.
  const wantEnv = wantIbl && manifest.ibl?.enabled !== false && Boolean(manifest.ibl);
  let skyBase = null;
  let skyClouds = null;
  if (manifest.sky?.base && (wantSky || wantEnv)) skyBase = await readEmbedded(manifest.sky.base.image, 'sky.base.image');
  if (manifest.sky?.clouds && wantSky) skyClouds = await readEmbedded(manifest.sky.clouds.image, 'sky.clouds.image');

  let sky = null;
  if (manifest.sky && wantSky) {
    // No flipY to set: KTX2Loader hands back CompressedTextures, which ignore
    // the flag because WebGL cannot flip a compressed upload. The bake writes
    // these images already flipped so this path matches what the editor showed.
    // `owned: true`: the dome disposes the textures it was given.
    sky = buildSky(manifest.sky, { base: skyBase, clouds: skyClouds, owned: true });
    scene.add(sky.group);
  }

  // Image-based lighting. Prefiltered from the sky's own dome, so it carries the
  // nadir cut and the elevation remap rather than a second reading of the same
  // image; falls back to the hemisphere ramp when the level has no sky picture.
  let environment = null;
  let restoreEnvironment = null;
  if (wantEnv) {
    environment = buildEnvironment(renderer, manifest.sky, {
      base: skyBase,
      hemisphere: manifest.ambient,
      size: iblSize ?? manifest.ibl.size ?? 256,
    });
    if (environment) {
      restoreEnvironment = applyEnvironment(scene, environment.texture, {
        // `sky.base.intensity` is folded in here, not into the prefilter --
        // the same rule the editor's probe applies, so what was art-directed
        // is what ships.
        intensity: environmentIntensity({ ibl: manifest.ibl, sky: manifest.sky, base: skyBase }),
        rotationDeg: manifest.sky?.base?.rotationDeg ?? 0,
      });
    }
  }

  // The HemisphereLight is retired whenever IBL is live. It is already zeroed
  // on static materials (the bake holds the sky), and for dynamic objects an
  // environment's diffuse is strictly better: it has directional structure
  // beyond up/down, and it costs no light uniform block and no loop iteration
  // in every shader in the level.
  const lights = applyLights(manifest, root, { hemisphere: hemisphere && !environment });

  const colliders = buildColliders(manifest, physics, { nodes: dynamicNodes });
  const raycaster = new LevelRaycaster(cells);

  const followTarget = new THREE.Vector3();
  return {
    manifest, root, cells, lights, sky, environment, billboards, lightmap, colliders, physics, gltf,
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
      restoreEnvironment?.();
      environment?.dispose();
      if (sky) {
        scene.remove(sky.group);
        sky.dispose();
      } else {
        // Nothing owns the base texture when there is no dome -- the probe read
        // it only to prefilter from, and the prefilter does not keep it.
        skyBase?.dispose();
        skyClouds?.dispose();
      }
      physics.dispose();
      if (!givenKtx2) ktx2.dispose();
    },
  };
}
