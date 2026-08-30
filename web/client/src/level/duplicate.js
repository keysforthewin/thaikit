import { newPlacementId, newLightId, newSpawnId, findEntity } from './ids.js';
import { isGroupId, newGroupId, selectionRoots } from './groups.js';

/**
 * Copy entities inside a commit's draft doc. Shared by Ctrl+D and by the
 * gizmo's Shift-drag, which differ only in the offset: Ctrl+D nudges the copies
 * clear of their originals, Shift-drag leaves them exactly where the originals
 * were and drags the originals away.
 *
 * A group id copies the whole assembly: every member is duplicated and a new
 * group is made over the copies, with the same shape all the way down. The
 * copy lands beside the original at the top level rather than inside the
 * original's parent, which is what "duplicate this thing" means when the thing
 * is a named assembly.
 *
 * @returns the new ids, in the order the sources were given. A group source
 *   contributes its new GROUP id, so the result is what the caller should select.
 */
export function cloneEntities(draft, ids, offset = [0, 0, 0]) {
  const groups = new Map((draft.groups ?? []).map((g) => [g.id, g]));
  const copies = [];

  const copyOne = (id) => {
    if (isGroupId(id)) {
      const g = groups.get(id);
      if (!g) return null;
      const children = g.children.map(copyOne).filter(Boolean);
      if (!children.length) return null;
      const clone = { id: newGroupId(), name: `${g.name} copy`, children };
      (draft.groups ??= []).push(clone);
      return clone.id;
    }
    const found = findEntity(draft, id);
    if (!found) return null;
    // The moon is the level's one sun-equivalent; a second one is never meant.
    if (found.kind === 'light' && found.entity.role === 'moon') return null;
    const clone = structuredClone(found.entity);
    clone.id = found.kind === 'placement' ? newPlacementId() : found.kind === 'spawn' ? newSpawnId() : newLightId();
    clone.position = [
      clone.position[0] + offset[0],
      clone.position[1] + offset[1],
      clone.position[2] + offset[2],
    ];
    (found.kind === 'placement' ? draft.placements : found.kind === 'light' ? draft.lights : draft.spawns).push(clone);
    return clone.id;
  };

  // A member of a selected group is copied by the group; copying it again
  // would leave a stray twin outside the new assembly.
  for (const id of selectionRoots(draft, ids)) {
    const made = copyOne(id);
    if (made) copies.push(made);
  }
  return copies;
}
