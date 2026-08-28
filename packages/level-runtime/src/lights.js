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
  return { moon, list, ambient, follow: moon ? makeFollow(moon, manifest) : () => {} };
}

/** Keep the moon's shadow box around a target, moving in whole texels. */
function makeFollow(moon, manifest) {
  const entry = manifest.lights.find((l) => l.role === 'moon');
  const extent = entry?.shadow?.extent ?? 60;
  const mapSize = entry?.shadow?.mapSize ?? 2048;
  const texel = (extent * 2) / mapSize;
  const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(moon.quaternion).normalize();
  const offset = dir.clone().multiplyScalar(-extent * 2);
  const snapped = new THREE.Vector3();
  return (target) => {
    snapped.set(Math.round(target.x / texel) * texel, Math.round(target.y / texel) * texel, Math.round(target.z / texel) * texel);
    moon.position.copy(snapped).add(offset);
    moon.target.position.copy(snapped);
    moon.target.updateMatrixWorld();
  };
}
