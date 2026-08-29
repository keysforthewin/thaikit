import * as THREE from 'three';

import { groundOf, groundExtent, docFootprints, GROUND_THICKNESS } from '../ground.js';

/**
 * The static collision world play mode walks on.
 *
 * It is built from the COLLIDER COMPOUNDS, not from the visible meshes: every
 * catalogue item carries the `colliders.json` the derivation measured, and that
 * is the same compound the baked level ships to the runtime. Walking the editor
 * is then a preview of the physics the level will actually have -- a doorway you
 * can get through here is one you can get through in the game, and a prop you
 * walk into here is one that was measured, not one that merely looks solid.
 *
 * A part is axis-aligned in the item's ROOT-LOCAL frame and stores HALF-extents
 * in `scale` (a cylinder is [radius, halfHeight, radius] about +Y). Placements
 * rotate, so the resolution happens in each body's own local frame: the capsule
 * is transformed in by the placement's inverse matrix, resolved against an
 * axis-aligned shape there, and the push-out is transformed back out. That is
 * exact for any rotation, and costs one matrix pair per body rather than a
 * general OBB test per part.
 *
 * Everything here is pure -- no scene graph, no React -- so it can be tested
 * under plain Node the way snap.js is.
 */

/** Bodies whose local scale is degenerate cannot be inverted; skip them. */
const MIN_SCALE = 1e-4;
/**
 * The broadphase cell, in metres. Deliberately NOT the document's `cellSize`:
 * that is 24 m and a bake unit, and a query against it would hand back every
 * prop in a whole city block. Six capsule diameters is the right size for a
 * query that touches four cells at worst.
 */
const GRID_CELL = 4;
/**
 * A body spanning more cells than this goes on the `unbounded` list, which every
 * query scans. The ground is one box over the entire map; rasterising it would
 * put it in every bucket in the grid.
 */
const GRID_MAX_CELLS = 64;

/**
 * The placement's local->world matrix.
 *
 * cells.js has `placementMatrix`, and this deliberately does not import it: that
 * module reaches through to `three/instances.js` and a .jsx file, which makes it
 * unloadable under plain Node and would cost this module its test.
 */
function placementMatrix(p, out) {
  const q = new THREE.Quaternion().setFromEuler(
    new THREE.Euler(p.rotation[0], p.rotation[1], p.rotation[2], 'XYZ'),
  );
  return out.compose(
    new THREE.Vector3().fromArray(p.position),
    q,
    new THREE.Vector3().fromArray(p.scale),
  );
}
/** Grown by this much when a body's AABB goes into the broadphase grid, so a
 *  capsule sitting exactly on a boundary still finds the floor under it. */
const AABB_SKIN = 0.05;

/**
 * One collidable: a placement's compound, or the ground.
 *
 * `matrix` takes local -> world, `inverse` world -> local. `scale` is the
 * placement's own scale, kept separately because a push-out computed in local
 * metres has to be scaled back up to world metres, and because a non-uniform
 * scale makes the local capsule an ellipsoid -- we approximate that with the
 * largest axis, which errs on the side of not letting the player through.
 */
function makeBody({ id, parts, matrix, scale, ladder }) {
  const inverse = new THREE.Matrix4().copy(matrix).invert();
  const bounds = new THREE.Box3();
  const corner = new THREE.Vector3();
  for (const p of parts) {
    for (let i = 0; i < 8; i += 1) {
      corner.set(
        p.offset[0] + (i & 1 ? p.half[0] : -p.half[0]),
        p.offset[1] + (i & 2 ? p.half[1] : -p.half[1]),
        p.offset[2] + (i & 4 ? p.half[2] : -p.half[2]),
      );
      bounds.expandByPoint(corner.applyMatrix4(matrix));
    }
  }
  bounds.expandByScalar(AABB_SKIN);
  return { id, parts, matrix, inverse, scale, ladder, bounds };
}

/** The compound of one catalogue item, or a base-origin box from its declared size. */
function partsForItem(item) {
  const declared = item?.colliders?.parts;
  if (declared?.length) {
    const parts = [];
    for (const p of declared) {
      if (p.isTrigger) continue;
      const half = [Math.abs(p.scale[0]), Math.abs(p.scale[1]), Math.abs(p.scale[2])];
      if (half[0] < MIN_SCALE || half[1] < MIN_SCALE || half[2] < MIN_SCALE) continue;
      parts.push({ type: p.type === 'box' ? 'box' : 'round', offset: p.offset, half });
    }
    if (parts.length) return parts;
  }
  // No compound: the declared envelope, origin at the BASE, which is where every
  // thaikit prop puts it. Coarse, and better than walking through the prop.
  const s = item?.size;
  if (!s) return [];
  const w = Math.abs(s.w ?? 1);
  const h = Math.abs(s.h ?? 1);
  const d = Math.abs(s.d ?? 1);
  if (w < MIN_SCALE || h < MIN_SCALE || d < MIN_SCALE) return [];
  return [{ type: 'box', offset: [0, h / 2, 0], half: [w / 2, h / 2, d / 2] }];
}

/**
 * A uniform grid over the world XZ plane. Bodies are large and few compared to
 * the map, so one cell list per body AABB is plenty -- the query is what has to
 * be cheap, and it touches a 3x3 neighbourhood at most for a player capsule.
 */
class Broadphase {
  constructor() {
    this.cellSize = GRID_CELL;
    this.buckets = new Map();
    /** Bodies too large to rasterise -- the ground, a long wall. Always scanned. */
    this.unbounded = [];
  }

  #key(ix, iz) { return `${ix}_${iz}`; }

  insert(body) {
    const c = this.cellSize;
    const ix0 = Math.floor(body.bounds.min.x / c);
    const ix1 = Math.floor(body.bounds.max.x / c);
    const iz0 = Math.floor(body.bounds.min.z / c);
    const iz1 = Math.floor(body.bounds.max.z / c);
    if ((ix1 - ix0 + 1) * (iz1 - iz0 + 1) > GRID_MAX_CELLS) {
      this.unbounded.push(body);
      return;
    }
    for (let ix = ix0; ix <= ix1; ix += 1) {
      for (let iz = iz0; iz <= iz1; iz += 1) {
        const k = this.#key(ix, iz);
        let list = this.buckets.get(k);
        if (!list) this.buckets.set(k, (list = []));
        list.push(body);
      }
    }
  }

  /** Bodies whose AABB overlaps `box`, deduplicated. */
  query(box, out = []) {
    out.length = 0;
    for (const b of this.unbounded) if (b.bounds.intersectsBox(box)) out.push(b);
    const c = this.cellSize;
    const ix0 = Math.floor(box.min.x / c);
    const ix1 = Math.floor(box.max.x / c);
    const iz0 = Math.floor(box.min.z / c);
    const iz1 = Math.floor(box.max.z / c);
    for (let ix = ix0; ix <= ix1; ix += 1) {
      for (let iz = iz0; iz <= iz1; iz += 1) {
        const list = this.buckets.get(this.#key(ix, iz));
        if (!list) continue;
        for (const b of list) if (b.bounds.intersectsBox(box) && !out.includes(b)) out.push(b);
      }
    }
    return out;
  }
}

const _local = new THREE.Vector3();
const _push = new THREE.Vector3();
const _normal = new THREE.Vector3();
const _box = new THREE.Box3();
const _scan = [];

/**
 * The deepest overlap between a sphere at `centre` (LOCAL space) and one part,
 * written into `outNormal` as a unit push-out direction.
 *
 * @returns depth in local metres, or 0 when they do not overlap.
 */
function sphereVsPart(centre, radius, part, outNormal) {
  const [ox, oy, oz] = part.offset;
  const [hx, hy, hz] = part.half;
  const dx = centre.x - ox;
  const dy = centre.y - oy;
  const dz = centre.z - oz;

  if (part.type === 'round') {
    // A cylinder about +Y: solve the disc in XZ and the slab in Y separately,
    // then take whichever face is nearer -- the same decomposition the runtime's
    // cylinder collider uses, and the reason a bin's rim behaves like a rim.
    const r = Math.max(hx, hz);
    const radial = Math.hypot(dx, dz);
    const inSlab = Math.abs(dy) <= hy;
    const inDisc = radial <= r;
    if (inSlab && inDisc) {
      const outRadial = r - radial + radius;
      const outAxial = hy - Math.abs(dy) + radius;
      if (outAxial < outRadial) {
        outNormal.set(0, dy >= 0 ? 1 : -1, 0);
        return outAxial;
      }
      if (radial < 1e-6) { outNormal.set(1, 0, 0); return outRadial; }
      outNormal.set(dx / radial, 0, dz / radial);
      return outRadial;
    }
    const clampedY = Math.max(-hy, Math.min(hy, dy));
    let cx = dx;
    let cz = dz;
    if (radial > r) { const k = r / (radial || 1e-6); cx = dx * k; cz = dz * k; }
    outNormal.set(dx - cx, dy - clampedY, dz - cz);
    const dist = outNormal.length();
    if (dist >= radius || dist < 1e-9) return 0;
    outNormal.multiplyScalar(1 / dist);
    return radius - dist;
  }

  // Box.
  const cx = Math.max(-hx, Math.min(hx, dx));
  const cy = Math.max(-hy, Math.min(hy, dy));
  const cz = Math.max(-hz, Math.min(hz, dz));
  const inside = cx === dx && cy === dy && cz === dz;
  if (inside) {
    // Centre is inside the box: push out along the nearest face, or the whole
    // box collapses the capsule to its centre and the player is spat through it.
    const ex = hx - Math.abs(dx) + radius;
    const ey = hy - Math.abs(dy) + radius;
    const ez = hz - Math.abs(dz) + radius;
    if (ey <= ex && ey <= ez) { outNormal.set(0, dy >= 0 ? 1 : -1, 0); return ey; }
    if (ex <= ez) { outNormal.set(dx >= 0 ? 1 : -1, 0, 0); return ex; }
    outNormal.set(0, 0, dz >= 0 ? 1 : -1);
    return ez;
  }
  outNormal.set(dx - cx, dy - cy, dz - cz);
  const dist = outNormal.length();
  if (dist >= radius || dist < 1e-9) return 0;
  outNormal.multiplyScalar(1 / dist);
  return radius - dist;
}

/**
 * The world.
 *
 * `resolveCapsule` is the whole interface the controller needs: hand it a foot
 * position and the capsule's dimensions, get back a position clear of every
 * body and the contact normals it had to push along.
 */
export class CollisionWorld {
  constructor(bodies) {
    this.bodies = bodies;
    this.broadphase = new Broadphase();
    this.bounds = new THREE.Box3();
    /** Nothing tagged `ladder` means the per-frame ladder probe can be skipped. */
    this.hasLadders = false;
    for (const b of bodies) {
      this.broadphase.insert(b);
      this.bounds.union(b.bounds);
      if (b.ladder) this.hasLadders = true;
    }
    if (!bodies.length) this.bounds.set(new THREE.Vector3(-1, -1, -1), new THREE.Vector3(1, 1, 1));
  }

  /**
   * Push a capsule out of everything it overlaps.
   *
   * The capsule is given by its FOOT: `foot` is the point on the floor between
   * the player's feet, `radius` the shaft radius and `height` the full standing
   * height. Internally it is two spheres, at foot + radius and at
   * foot + height - radius, which is the standard approximation and is what the
   * collider derivation's own ray probe assumes about a player.
   *
   * `ignore` is the placement id the player is currently attached to: a ladder
   * you are ON has to stop pushing you, or you can never occupy its rungs. Every
   * OTHER ladder is as solid as any prop -- a ladder you are not climbing is a
   * thing bolted to a wall, and walking through it would be a bug.
   *
   * @returns { position, normals, ladder, hits }
   */
  resolveCapsule(foot, radius, height, { iterations = 4, ladderTolerance = 0, ignore = null } = {}) {
    const position = foot.clone();
    const normals = [];
    let ladder = null;
    let hits = 0;

    const lower = new THREE.Vector3();
    const upper = new THREE.Vector3();
    const halfShaft = Math.max(0.01, height / 2 - radius);

    for (let iter = 0; iter < iterations; iter += 1) {
      _box.min.set(position.x - radius, position.y, position.z - radius);
      _box.max.set(position.x + radius, position.y + height, position.z + radius);
      _box.expandByScalar(Math.max(AABB_SKIN, ladderTolerance));
      const near = this.broadphase.query(_box, _scan);
      let moved = false;

      for (const body of near) {
        const s = body.scale;
        // A non-uniform placement scale turns the sphere into an ellipsoid in
        // local space. Dividing by the SMALLEST axis grows the local radius,
        // which keeps the player out rather than letting them squeeze in.
        const minScale = Math.min(Math.abs(s.x), Math.abs(s.y), Math.abs(s.z));
        if (minScale < MIN_SCALE) continue;
        const localRadius = radius / minScale;

        lower.set(position.x, position.y + radius, position.z);
        upper.set(position.x, position.y + height - radius, position.z);

        for (const centre of [lower, upper]) {
          _local.copy(centre).applyMatrix4(body.inverse);
          for (const part of body.parts) {
            const probe = body.ladder ? localRadius + ladderTolerance / minScale : localRadius;
            const depth = sphereVsPart(_local, probe, part, _normal);
            if (depth <= 0) continue;
            if (body.ladder) {
              _push.copy(_normal).transformDirection(body.matrix).normalize();
              // The nearest ladder wins, so standing between two grabs the one
              // you are actually against.
              if (!ladder || depth > ladder.depth) {
                ladder = { id: body.id, depth, normal: _push.clone(), bounds: body.bounds };
              }
              // Reported either way; only the one being climbed stops pushing.
              if (body.id === ignore) continue;
              // Within the tolerance skirt but not actually touching: felt, not hit.
              if (depth <= probe - localRadius) continue;
            }
            _push.copy(_normal).transformDirection(body.matrix).normalize();
            const worldDepth = depth * minScale;
            position.addScaledVector(_push, worldDepth);
            centre.addScaledVector(_push, worldDepth);
            normals.push(_push.clone());
            moved = true;
            hits += 1;
          }
        }
      }
      if (!moved) break;
    }

    return { position, normals, ladder, hits };
  }

  /**
   * Is there solid geometry within `pad` of this point?
   *
   * The broadphase alone cannot answer this: a body's AABB is the whole
   * envelope, so any point inside a building's bounding box reads as solid even
   * in the middle of its courtyard. The third-person boom needs the PARTS, or
   * the camera collapses onto the player's head the moment they stand near
   * anything large.
   */
  pointSolid(x, y, z, pad = 0.2) {
    _box.min.set(x - pad, y - pad, z - pad);
    _box.max.set(x + pad, y + pad, z + pad);
    const near = this.broadphase.query(_box, _scan);
    for (const body of near) {
      const minScale = Math.min(Math.abs(body.scale.x), Math.abs(body.scale.y), Math.abs(body.scale.z));
      if (minScale < MIN_SCALE) continue;
      _local.set(x, y, z).applyMatrix4(body.inverse);
      for (const part of body.parts) {
        if (sphereVsPart(_local, pad / minScale, part, _normal) > 0) return true;
      }
    }
    return false;
  }

  /**
   * The highest solid surface at or below `from.y` under a point, or null.
   * Used for ground snapping, step-up probes and the drop-in at spawn.
   */
  floorUnder(x, y, z, { reach = 4, radius = 0 } = {}) {
    _box.min.set(x - radius - AABB_SKIN, y - reach, z - radius - AABB_SKIN);
    _box.max.set(x + radius + AABB_SKIN, y + AABB_SKIN, z + radius + AABB_SKIN);
    const near = this.broadphase.query(_box, _scan);
    let best = null;
    for (const body of near) {
      if (body.ladder) continue;
      for (const part of body.parts) {
        const top = topOfPart(body, part, x, z, radius);
        if (top == null) continue;
        if (top <= y + 1e-3 && top >= y - reach && (best == null || top > best)) best = top;
      }
    }
    return best;
  }
}

/**
 * The height of a part's upper surface over (x, z), or null when the column
 * misses it. Exact for an unrotated part; for a rotated one it uses the part's
 * world AABB, which is what the step-up probe wants anyway -- it asks "is there
 * something to stand on here", not "at exactly what angle".
 */
const _partBox = new THREE.Box3();
const _corner = new THREE.Vector3();
function topOfPart(body, part, x, z, radius) {
  _partBox.makeEmpty();
  for (let i = 0; i < 8; i += 1) {
    _corner.set(
      part.offset[0] + (i & 1 ? part.half[0] : -part.half[0]),
      part.offset[1] + (i & 2 ? part.half[1] : -part.half[1]),
      part.offset[2] + (i & 4 ? part.half[2] : -part.half[2]),
    );
    _partBox.expandByPoint(_corner.applyMatrix4(body.matrix));
  }
  if (x < _partBox.min.x - radius || x > _partBox.max.x + radius) return null;
  if (z < _partBox.min.z - radius || z > _partBox.max.z + radius) return null;
  return _partBox.max.y;
}

/**
 * Build the world for a document.
 *
 * @param doc        the editor document
 * @param catalogue  the store's catalogue (`byRef` is what is read)
 */
export function buildCollisionWorld(doc, catalogue) {
  const byRef = catalogue?.byRef ?? {};
  const cellSize = doc?.settings?.cellSize ?? 24;
  const bodies = [];

  for (const p of doc?.placements ?? []) {
    const item = byRef[p.ref];
    const parts = partsForItem(item);
    if (!parts.length) continue;
    const scale = new THREE.Vector3().fromArray(p.scale ?? [1, 1, 1]);
    if (Math.min(Math.abs(scale.x), Math.abs(scale.y), Math.abs(scale.z)) < MIN_SCALE) continue;
    const matrix = placementMatrix(p, new THREE.Matrix4());
    bodies.push(makeBody({
      id: p.id,
      parts,
      matrix,
      scale,
      ladder: (p.tags ?? []).includes('ladder'),
    }));
  }

  const ground = groundOf(doc);
  if (ground.enabled) {
    const extent = groundExtent(docFootprints(doc, byRef), { cellSize, margin: ground.margin });
    // A SOLID, not a sheet: the bake gives the ground a quarter-metre thick box
    // hanging below the surface for exactly this reason -- a plane is a knife
    // edge to a character controller, and a fast fall goes straight through it.
    bodies.push(makeBody({
      id: '__ground',
      parts: [{
        type: 'box',
        offset: [0, -GROUND_THICKNESS / 2, 0],
        half: [extent.width / 2, GROUND_THICKNESS / 2, extent.depth / 2],
      }],
      matrix: new THREE.Matrix4().makeTranslation(
        (extent.minX + extent.maxX) / 2,
        ground.y,
        (extent.minZ + extent.maxZ) / 2,
      ),
      scale: new THREE.Vector3(1, 1, 1),
      ladder: false,
    }));
  }

  return new CollisionWorld(bodies);
}

export { sphereVsPart, partsForItem };
