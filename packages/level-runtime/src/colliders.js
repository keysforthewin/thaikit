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
  return { staticShapes, staticHandle, dynamic };
}
