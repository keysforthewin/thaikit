import * as THREE from 'three';

/**
 * Surface and edge snapping between oriented bounding boxes, and the drop onto
 * whatever stands beneath.
 *
 * Pure maths, no React: the gizmo hands in the moving object's OBB and every
 * candidate's, and gets back the smallest translation that lands a face of the
 * mover flush against a face of a neighbour, then slides it along that face so
 * an edge lines up. That is what butts two road tiles or two wall pieces
 * together with one drag. `dropToSurface` is the other half: a ray straight
 * down from the mover's footprint onto the REAL geometry of the level, so a
 * crate dragged across a rooftop rides the roof and a lamp dragged onto a
 * table climbs onto it.
 */
const _v = new THREE.Vector3();
const _down = new THREE.Vector3(0, -1, 0);
const _ray = new THREE.Raycaster();

/** An OBB from a local AABB and a world matrix. */
export function obbFromBox(box, matrixWorld) {
  const center = box.getCenter(new THREE.Vector3()).applyMatrix4(matrixWorld);
  const axes = [0, 1, 2].map((i) => new THREE.Vector3().setFromMatrixColumn(matrixWorld, i));
  const size = box.getSize(new THREE.Vector3());
  const half = [size.x / 2, size.y / 2, size.z / 2].map((h, i) => h * axes[i].length());
  for (const a of axes) if (a.lengthSq() > 0) a.normalize();
  const radius = Math.hypot(...half);
  return { center, axes, half, radius };
}

/** The six faces: centre, outward normal, in-plane axes u/v and their half-extents. */
export function faces(obb) {
  const out = [];
  for (let i = 0; i < 3; i += 1) {
    const u = obb.axes[(i + 1) % 3];
    const v = obb.axes[(i + 2) % 3];
    for (const sign of [1, -1]) {
      const normal = obb.axes[i].clone().multiplyScalar(sign);
      const center = obb.center.clone().addScaledVector(obb.axes[i], sign * obb.half[i]);
      out.push({ id: `${i}${sign > 0 ? '+' : '-'}`, center, normal, u, v, hu: obb.half[(i + 1) % 3], hv: obb.half[(i + 2) % 3] });
    }
  }
  return out;
}

/** Extent of face `f` projected onto `axis` about `origin`, as [min, max]. */
function extentAlong(f, axis, origin) {
  const c = _v.copy(f.center).sub(origin).dot(axis);
  const r = Math.abs(f.u.dot(axis)) * f.hu + Math.abs(f.v.dot(axis)) * f.hv;
  return [c - r, c + r];
}

function overlap1D(a, b) {
  return Math.min(a[1], b[1]) - Math.max(a[0], b[0]);
}

/**
 * The best face-to-face snap, or null.
 *
 * Accepts opposed normals (a butt joint, the common case) and co-facing ones
 * (two tile tops that should sit flush), rejects rotated pairs by angle, then
 * takes the smallest correction that has real overlap. Ties go to butt joints.
 */
export function computeSnap(moving, candidates, opt, exclude = null) {
  const cosTol = Math.cos(THREE.MathUtils.degToRad(opt.angleDeg ?? 5));
  const threshold = opt.threshold ?? 0.3;
  const minOverlap = opt.minOverlap ?? 0.05;
  const mFaces = faces(moving);
  let best = null;

  for (const s of candidates) {
    if (moving.center.distanceTo(s.center) > moving.radius + s.radius + threshold) continue;
    for (const g of faces(s)) {
      if (exclude && Math.abs(g.normal.dot(exclude)) > cosTol) continue;
      for (const f of mFaces) {
        const d = f.normal.dot(g.normal);
        const opposed = d < -cosTol;
        const coplanar = d > cosTol;
        if (!opposed && !coplanar) continue;
        const gap = _v.copy(f.center).sub(g.center).dot(g.normal);
        if (Math.abs(gap) > threshold) continue;
        const ou = overlap1D(extentAlong(f, g.u, g.center), [-g.hu, g.hu]);
        const ov = overlap1D(extentAlong(f, g.v, g.center), [-g.hv, g.hv]);
        if (ou < minOverlap || ov < minOverlap) continue;
        const score = Math.abs(gap) - (opposed ? 0.02 : 0);
        if (!best || score < best.score) {
          best = { score, gap, face: g, moved: f, opposed, corr: g.normal.clone().multiplyScalar(-gap), edges: [] };
        }
      }
    }
  }
  if (!best) return null;

  // Edge alignment in the plane of the chosen face: slide along u and v so the
  // mover's extent lines up with the target's (same edge, opposite edge, or
  // centred), whichever is nearest and within reach.
  const edgeThreshold = opt.edgeThreshold ?? 0.25;
  for (const axis of [best.face.u, best.face.v]) {
    const m = extentAlong(best.moved, axis, best.face.center).map((x) => x + best.corr.dot(axis));
    const s = [-1, 1].map((k) => k * (axis === best.face.u ? best.face.hu : best.face.hv));
    const offs = [s[0] - m[0], s[1] - m[1], s[0] - m[1], s[1] - m[0], (s[0] + s[1]) / 2 - (m[0] + m[1]) / 2];
    let o = offs[0];
    for (const x of offs) if (Math.abs(x) < Math.abs(o)) o = x;
    if (Math.abs(o) <= edgeThreshold && Math.abs(o) > 1e-6) {
      best.corr.addScaledVector(axis, o);
      best.edges.push({ axis: axis.clone(), offset: o });
    }
  }
  return best;
}

/**
 * Up to two passes: a butt joint, then a lateral alignment against a face that
 * is not parallel to the first. Road tiles get both from one drag.
 */
export function snapTranslation(moving, candidates, opt) {
  const first = computeSnap(moving, candidates, opt);
  if (!first) return null;
  const shifted = { ...moving, center: moving.center.clone().add(first.corr) };
  const second = computeSnap(shifted, candidates, opt, first.face.normal);
  const corr = first.corr.clone();
  if (second) corr.add(second.corr);
  return { corr, hits: second ? [first, second] : [first] };
}

/**
 * A quad has no thickness, so resting it EXACTLY on a surface puts two faces
 * in one plane and they z-fight. Anything thinner than `THIN` metres is lifted
 * by `THIN_LIFT` when it lands; a real solid sits flush.
 */
export const THIN = 0.01;
export const THIN_LIFT = 0.02;
export const thinLift = (height) => (height < THIN ? THIN_LIFT : 0);

/**
 * The vertical correction that rests a footprint on the surface beneath it.
 *
 * Casts from `climb` metres above the mover's base straight down, so the mover
 * can climb onto anything up to that much higher than where it stands and can
 * drop any distance -- gravity, with a step height. The ray tests the real
 * meshes in `targets` (never the pick boxes: a pitched roof is not its bounding
 * box) and the ground plane at `groundY`, and the first thing it meets is the
 * answer. Callers pre-filter `targets` to the nodes whose footprint holds
 * (x, z); the raycaster's own sphere test would do it, but a building is
 * twenty thousand triangles and this runs on every pointer move.
 *
 * @returns { dy, point, on: 'object' | 'ground' } or null when nothing is
 *          beneath -- no ground and no object, so the height is left alone.
 */
export function dropToSurface({ x, z, bottomY, climb = 2, targets = [], groundY = null }) {
  const top = bottomY + climb;
  _ray.set(_v.set(x, top, z), _down);
  _ray.near = 0;
  _ray.far = Infinity;
  let best = null;
  if (targets.length) {
    const hit = _ray.intersectObjects(targets, true).find((h) => h.object.visible);
    if (hit) best = { y: hit.point.y, point: hit.point.clone(), on: 'object' };
  }
  if (groundY != null && groundY <= top && (!best || groundY > best.y)) {
    best = { y: groundY, point: new THREE.Vector3(x, groundY, z), on: 'ground' };
  }
  if (!best) return null;
  return { dy: best.y - bottomY, point: best.point, on: best.on };
}
