import * as THREE from 'three';

/**
 * The physics proxy for one part, at UNIT size.
 *
 * Sized by the mesh's own scale, which is what makes the gizmo work:
 * TransformControls in scale mode writes object.scale, so a unit box scaled to
 * [w, h, d] hands back the extents directly instead of a multiplier over a size
 * baked into the geometry. Colliders record HALF-extents, so scale = 2 * scale.
 */
export function unitGeometry(type) {
  if (type === 'sphere') return new THREE.SphereGeometry(0.5, 16, 12);
  if (type === 'cylinder' || type === 'capsule') return new THREE.CylinderGeometry(0.5, 0.5, 1, 20, 1);
  return new THREE.BoxGeometry(1, 1, 1);
}

export const COLLIDER_COLORS = { part: 0xf0a63a, trigger: 0xc06cf0, selected: 0x7ee787 };
