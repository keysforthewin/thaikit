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

export function findEntity(doc, id) {
  const base = ownerOf(id);
  const kind = kindOf(base);
  if (!doc || !kind) return null;
  const list = kind === 'placement' ? doc.placements : kind === 'light' ? doc.lights : doc.spawns;
  const entity = list.find((e) => e.id === base);
  return entity ? { kind, entity } : null;
}
