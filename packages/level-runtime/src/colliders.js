/**
 * Build the level's colliders on any adapter. Pure: no three, no DOM, so the
 * browser and a headless server produce identical bodies from the same file.
 */
export function buildColliders(manifest, physics, { nodes = null } = {}) {
  const staticShapes = manifest.colliders.flatMap((c) => c.shapes);
  const staticHandle = physics.createStatic(staticShapes);
  const dynamic = manifest.dynamic.map((entry) => {
    const node = nodes?.get(entry.node) ?? null;
    const transform = node
      ? { position: node.position.toArray(), quaternion: node.quaternion.toArray() }
      : { position: [0, 0, 0], quaternion: [0, 0, 0, 1] };
    const body = physics.createDynamic(entry, transform);
    return { entry, node, body };
  });
  return { staticShapes, staticHandle, dynamic, ladders: ladderVolumes(manifest) };
}

/**
 * The bodies tagged `ladder`, as world-space volumes a character controller
 * can test against: the placement, its shapes (still part of the static
 * solid -- a ladder is climbed AND stood on), the tags, and one axis-aligned
 * box around the shapes, grown by `reach` so "within arm's length" is a box
 * test. Static entries only: a ladder that moves is not a thing the level
 * format describes. Empty for any level baked before tags were carried.
 */
export function ladderVolumes(manifest, { reach = 0.35 } = {}) {
  return (manifest.colliders ?? [])
    .filter((c) => (c.tags ?? []).includes('ladder'))
    .map((c) => ({ placement: c.placement, shapes: c.shapes, tags: c.tags, bounds: shapesBounds(c.shapes, reach) }));
}

/** World AABB of a shape list. A rotated box is bounded by its rotated half-extents, so this never under-reads. */
export function shapesBounds(shapes, pad = 0) {
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  for (const s of shapes) {
    const [hx, hy, hz] = s.halfExtents;
    const [x, y, z, w] = s.quaternion ?? [0, 0, 0, 1];
    // |R| applied to the half-extents: the extent of a rotated box along each world axis.
    const r = [
      Math.abs(1 - 2 * (y * y + z * z)) * hx + Math.abs(2 * (x * y - z * w)) * hy + Math.abs(2 * (x * z + y * w)) * hz,
      Math.abs(2 * (x * y + z * w)) * hx + Math.abs(1 - 2 * (x * x + z * z)) * hy + Math.abs(2 * (y * z - x * w)) * hz,
      Math.abs(2 * (x * z - y * w)) * hx + Math.abs(2 * (y * z + x * w)) * hy + Math.abs(1 - 2 * (x * x + y * y)) * hz,
    ];
    for (let i = 0; i < 3; i += 1) {
      min[i] = Math.min(min[i], s.position[i] - r[i] - pad);
      max[i] = Math.max(max[i], s.position[i] + r[i] + pad);
    }
  }
  return { min, max };
}
