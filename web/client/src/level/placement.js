import * as THREE from 'three';

import { getViewport } from './viewportRef.js';
import { nodeFor } from './nodes.js';
import { groundOf } from './ground.js';

/**
 * Where a newly added object goes: under the crosshair.
 *
 * The old answer was `lastGroundHit` at y=0 -- wherever the pointer last
 * crossed the invisible plane, which after a pick from a modal is usually the
 * button you clicked on the way there, and always on the floor even when you
 * were looking at a rooftop. This casts the camera's own forward ray through
 * the centre of the frame instead and takes the first thing it meets: another
 * object's surface, or the ground plane.
 *
 * With neither -- no ground, nothing under the crosshair -- the object is put
 * in FRONT of the camera at the distance that frames it whole, because an
 * object dropped at the origin of an empty level is off screen as often as not.
 */
const centre = new THREE.Vector2(0, 0);
const raycaster = new THREE.Raycaster();

/** Half the diagonal of the item's declared box; the sphere that frames it. */
function radiusOf(item) {
  const s = item?.size;
  if (!s) return 0.6;
  return Math.max(0.15, Math.hypot(s.w ?? 1, s.h ?? 1, s.d ?? 1) / 2);
}

/**
 * @returns { position:[x,y,z], on: 'object' | 'ground' | 'view' } -- `on` is
 *          what the status line tells the user, so a surprising placement
 *          explains itself.
 */
export function placementPoint(doc, item, { fallback = [0, 0, 0] } = {}) {
  const view = getViewport();
  const camera = view?.camera;
  const ground = groundOf(doc);
  if (!camera) {
    return { position: [fallback[0], ground.enabled ? ground.y : fallback[1] ?? 0, fallback[2]], on: 'view' };
  }

  raycaster.setFromCamera(centre, camera);

  // Placements only. Lights and spawns register nodes too, and dropping a crate
  // onto a light's helper gizmo is not what anyone means by "on that surface".
  const targets = doc.placements.map((p) => nodeFor(p.id)).filter(Boolean);
  const hit = raycaster.intersectObjects(targets, true).find((h) => h.object.visible);

  let best = hit ? { point: hit.point.clone(), distance: hit.distance, on: 'object' } : null;

  if (ground.enabled) {
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -ground.y);
    const point = new THREE.Vector3();
    // Null when the ray runs parallel to the plane or the plane is behind the
    // camera -- looking at the horizon or up at the sky.
    if (raycaster.ray.intersectPlane(plane, point)) {
      const distance = point.distanceTo(camera.position);
      if (!best || distance < best.distance) best = { point, distance, on: 'ground' };
    }
  }

  if (best) return { position: best.point.toArray(), on: best.on };

  // Nothing under the crosshair. r / sin(fov/2) is the distance at which the
  // item's bounding sphere is exactly tangent to the frustum, so a little more
  // than that frames it whole with a margin -- the same fit render-model.mjs
  // uses for a hero shot.
  const fov = THREE.MathUtils.degToRad(camera.fov ?? 50);
  const distance = Math.max(1.5, (radiusOf(item) / Math.sin(fov / 2)) * 1.35);
  const centrePoint = camera.position.clone().add(
    raycaster.ray.direction.clone().multiplyScalar(distance),
  );
  // The prop's origin is its BASE, so lower it by half its height to put the
  // item itself on the camera axis rather than hanging above it.
  centrePoint.y -= (item?.size?.h ?? 1) / 2;
  return { position: centrePoint.toArray(), on: 'view' };
}
