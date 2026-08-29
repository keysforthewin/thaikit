/**
 * The live r3f state (camera, scene, size), for the few things that need to
 * ask the VIEW a question rather than the doc.
 *
 * Placing an object is one: "in front of me" has no meaning in the doc, and
 * threading a camera through the toolbar, the picker and the modal to reach
 * `addItem` would put a rendering concern in every one of them. Same shape as
 * nodes.js -- a module-level handle the renderer fills in and everyone else
 * reads.
 */
let state = null;
export const setViewport = (s) => { state = s; };
export const getViewport = () => state;
