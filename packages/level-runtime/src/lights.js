import * as THREE from 'three';

import { CASTER_LAYER } from './cells.js';

/**
 * The lights the manifest describes, as GLTFLoader created them, with the
 * settings glTF cannot carry: shadows, and the moon's follow-the-player ortho
 * frustum snapped to shadow texels so it does not swim.
 */
export function applyLights(manifest, root, { hemisphere = true } = {}) {
  const list = [];
  let moon = null;
  for (const entry of manifest.lights) {
    const node = root.getObjectByName(entry.node);
    const light = node?.isLight ? node : node?.children.find((c) => c.isLight) ?? null;
    if (!light) continue;
    light.castShadow = Boolean(entry.castShadow);
    if (entry.castShadow && entry.shadow) {
      light.shadow.mapSize.set(entry.shadow.mapSize, entry.shadow.mapSize);
      light.shadow.bias = entry.shadow.bias;
      light.shadow.normalBias = entry.shadow.normalBias;
      if (light.isDirectionalLight) {
        const ext = entry.shadow.extent;
        const cam = light.shadow.camera;
        cam.left = -ext; cam.right = ext; cam.top = ext; cam.bottom = -ext; cam.near = 0.5; cam.far = ext * 4;
        cam.updateProjectionMatrix();
        light.shadow.camera.layers.enable(CASTER_LAYER);
      }
    }
    if (entry.role === 'moon') moon = light;
    list.push({ entry, light });
  }
  let ambient = null;
  if (hemisphere) {
    const a = manifest.ambient;
    ambient = new THREE.HemisphereLight(a.sky, a.ground, a.intensity);
    root.add(ambient);
  }
  return { moon, list, ambient, follow: moon ? makeFollow(moon, manifest, root) : () => {} };
}

/**
 * The moon's direction in ROOT space, read off the node GLTFLoader built.
 *
 * A KHR_lights_punctual directional shines down its node's -Z. GLTFLoader
 * makes a light-only node the light itself, so the rotation is on the light
 * and its parent is the level root -- but a nested light would carry its
 * parent's rotation too, so this goes through world matrices rather than
 * trusting the local quaternion.
 */
export function moonDirection(moon, root, target = new THREE.Vector3()) {
  root.updateMatrixWorld(true);
  const q = moon.getWorldQuaternion(new THREE.Quaternion());
  const rootQ = root.getWorldQuaternion(new THREE.Quaternion()).invert();
  return target.set(0, 0, -1).applyQuaternion(q).applyQuaternion(rootQ).normalize();
}

/**
 * Keep the moon's shadow box around a target, moving in whole texels.
 *
 * `target` is a point in ROOT space (the game hands `loadLevel().update` the
 * camera position in the level root's frame).
 *
 * GLTFLoader parents a directional light's `target` to the LIGHT ITSELF, at
 * local (0, 0, -1), which is how the node's rotation becomes the light's
 * direction. The first version of this function wrote the player's root-space
 * position into that child's `position`, so the moon's direction became
 * `R_moon * playerPosition` -- swinging with every step, shining UPWARD over
 * most of a level, and lighting whole facades as the player walked past
 * them, while the lightmap's alpha kept masking against the AUTHORED
 * direction. Cycles' bake, the editor's play mode and the smoke harness never
 * called `follow`, so nothing here ever caught it. The target now lives under
 * the root, in the frame the point is given in.
 */
function makeFollow(moon, manifest, root) {
  const entry = manifest.lights.find((l) => l.role === 'moon');
  const extent = entry?.shadow?.extent ?? 60;
  const mapSize = entry?.shadow?.mapSize ?? 2048;
  const texel = (extent * 2) / mapSize;
  const dir = moonDirection(moon, root);
  const offset = dir.clone().multiplyScalar(-extent * 2);
  root.add(moon.target);
  const snapped = new THREE.Vector3();
  const position = new THREE.Vector3();
  return (target) => {
    snapped.set(Math.round(target.x / texel) * texel, Math.round(target.y / texel) * texel, Math.round(target.z / texel) * texel);
    // Root space -> the moon's parent's space. The same thing when the moon is
    // a direct child of the root, which GLTFLoader's light-only node is.
    position.copy(snapped).add(offset);
    if (moon.parent !== root) { root.localToWorld(position); moon.parent.worldToLocal(position); }
    moon.position.copy(position);
    moon.target.position.copy(snapped);
    moon.updateMatrixWorld();
    moon.target.updateMatrixWorld();
  };
}
