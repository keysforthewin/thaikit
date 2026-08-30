/** Ids for the three kinds of thing a level holds; the prefix says which. */
const rand = () => crypto.randomUUID().slice(0, 8);
export const newPlacementId = () => `p-${rand()}`;
export const newLightId = () => `l-${rand()}`;
export const newSpawnId = () => `s-${rand()}`;

export function kindOf(id) {
  if (!id) return null;
  if (id.startsWith('p-')) return 'placement';
  if (id.startsWith('l-')) return 'light';
  if (id.startsWith('s-')) return 'spawn';
  return null;
}

/** A light's aim handle shares the light's id with a suffix, so selecting it selects the light. */
export const targetIdOf = (lightId) => `${lightId}:target`;
export const isTargetId = (id) => typeof id === 'string' && id.endsWith(':target');
export const ownerOf = (id) => (isTargetId(id) ? id.slice(0, -':target'.length) : id);

/**
 * The doc decides an id's kind, not its prefix. A light loaded from a GLB keeps
 * the id written into its node name -- the template's moon is `moon`, with no
 * `l-` on it -- so a prefix lookup found no entity and every gizmo drag on it
 * committed nothing, which reads as the light snapping back on mouse-up.
 */
export function findEntity(doc, id) {
  const base = ownerOf(id);
  if (!doc || !base) return null;
  for (const [kind, list] of [['placement', doc.placements], ['light', doc.lights], ['spawn', doc.spawns]]) {
    const entity = list?.find((e) => e.id === base);
    if (entity) return { kind, entity };
  }
  return null;
}
