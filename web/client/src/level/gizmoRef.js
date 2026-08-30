import * as THREE from 'three';

/**
 * The one live TransformControls, and the question everything that can be
 * clicked has to ask before it steals the click: is the pointer on the widget?
 *
 * The gizmo and the scene are picked by two separate raycasts against the same
 * pointerdown -- three's own listener on the canvas, and react-three-fiber's --
 * so an object that happens to be in front of an axis handle answers first and
 * selects itself instead of the drag starting. Depth is the wrong tie-breaker
 * for a widget: a hinge handle is usually INSIDE the thing it moves. So the
 * widget always wins, and Ctrl is how you reach past it.
 */
let controls = null;

export const setGizmo = (c) => { controls = c ?? null; };
export const getGizmo = () => controls;

const raycaster = new THREE.Raycaster();

/**
 * True when this pointer event lands on a gizmo handle. Takes the event's own
 * ray rather than re-deriving one from the pointer, so it cannot disagree with
 * the pick that produced the event, and tests the SAME picker meshes three
 * tests -- its handles' materials are invisible, the objects are not.
 */
export function gizmoOwnsPointer(event) {
  const c = controls;
  if (!c || !c.enabled || !c.visible || c.object === undefined) return false;
  if (c.dragging) return true;
  const picker = c.gizmo?.picker?.[c.mode];
  if (!picker || !event?.ray) return false;
  raycaster.set(event.ray.origin, event.ray.direction);
  raycaster.far = Infinity;
  return raycaster.intersectObject(picker, true).some((h) => h.object.visible);
}
