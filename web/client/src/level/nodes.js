/**
 * The live Object3D behind each id, so the gizmo and the snapper can move things
 * imperatively during a drag without a React render per frame.
 */
const nodes = new Map();
export const registerNode = (id, obj) => { if (obj) nodes.set(id, obj); else nodes.delete(id); };
export const unregisterNode = (id) => nodes.delete(id);
export const nodeFor = (id) => nodes.get(id) ?? null;
export const allNodes = () => nodes;

/**
 * The real meshes of a placement, and nothing else. A placement's group also
 * carries an invisible pick box the size of its bounding box, the selection
 * outline, socket markers and collider overlays; a ray that wants the SURFACE
 * -- a pitched roof, a table top under a canopy -- must test only this group.
 */
export const GEOMETRY_NAME = '__geometry';
export const geometryOf = (obj) => obj?.children.find((c) => c.name === GEOMETRY_NAME) ?? null;
