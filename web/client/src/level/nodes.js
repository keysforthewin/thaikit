/**
 * The live Object3D behind each id, so the gizmo and the snapper can move things
 * imperatively during a drag without a React render per frame.
 */
const nodes = new Map();
export const registerNode = (id, obj) => { if (obj) nodes.set(id, obj); else nodes.delete(id); };
export const unregisterNode = (id) => nodes.delete(id);
export const nodeFor = (id) => nodes.get(id) ?? null;
export const allNodes = () => nodes;
