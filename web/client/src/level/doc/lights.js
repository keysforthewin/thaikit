import * as THREE from 'three';

/** glTF lights shine down -Z; this is the node rotation that aims -Z along `dir`. */
export function quaternionFromDirection(dir) {
  const d = new THREE.Vector3().fromArray(dir).normalize();
  return new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, -1), d);
}

export function directionFromQuaternion(q) {
  return new THREE.Vector3(0, 0, -1).applyQuaternion(q).normalize().toArray();
}

/** Build the three light object a doc light describes, aimed the glTF way. */
export function buildLight(l) {
  let light;
  if (l.type === 'directional') light = new THREE.DirectionalLight(l.color, l.intensity);
  else if (l.type === 'spot') {
    light = new THREE.SpotLight(l.color, l.intensity, l.distance ?? 0, l.angle ?? Math.PI / 6, l.penumbra ?? 0, l.decay ?? 2);
  } else light = new THREE.PointLight(l.color, l.intensity, l.distance ?? 0, l.decay ?? 2);
  light.name = `light_${l.id}`;
  light.position.fromArray(l.position);
  if (l.direction) {
    light.quaternion.copy(quaternionFromDirection(l.direction));
    // What GLTFExporter asks for: a target as a child at (0,0,-1), so the
    // direction survives as the node's rotation.
    light.target.position.set(0, 0, -1);
    light.add(light.target);
  }
  light.castShadow = false;
  light.userData.tk = { kind: 'light', role: l.role ?? null, enabled: l.enabled !== false, castShadow: Boolean(l.castShadow), shadow: { ...l.shadow } };
  return light;
}
