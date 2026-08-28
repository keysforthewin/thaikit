import { useEffect, useMemo } from 'react';
import * as THREE from 'three';

/**
 * `sculptRuntime` arrives in one of two shapes and both are legitimate.
 *
 * img2threejs's generator emits Records keyed by component id; a factory whose
 * wrapper normalises for thaikit emits arrays of named things. Neither side is
 * wrong -- they are two contracts over the same data -- so every reader here
 * accepts both rather than assuming whichever one the prop in front of it used.
 * A prop built without the normalising wrapper otherwise shows an empty runtime,
 * which reads as "this model has no pivots" when it means "I could not parse it".
 */
export const entries = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) =>
      typeof item === 'string' ? [item, null] : [item?.name, item],
    ).filter(([name]) => name);
  }
  if (value && typeof value === 'object') return Object.entries(value);
  return [];
};

export const names = (list) => entries(list).map(([name]) => name);

/** Names on `sculptRuntime` that no object in the scene answers to. */
export const unplaced = (runtime) =>
  ['pivots', 'sockets', 'groups'].reduce(
    (total, key) => total + ((runtime.declared?.[key] ?? 0) - (runtime[key]?.length ?? 0)),
    0,
  );

/**
 * The named pivots and sockets, counted whether or not they are being drawn.
 *
 * Counted separately because they answer different questions and a single
 * "markers" number answers neither. Pivots are moving parts, and a static prop
 * that reports eight of them has been given seven axes nothing will ever turn.
 * Sockets are attachment points, and a prop something clips onto that reports
 * none is missing its contract.
 *
 * `placed` is the count that actually resolved to a node in the scene: a name on
 * `sculptRuntime` with no object behind it draws nothing, and silently counting
 * it would make a broken contract look honoured.
 */
export function useRuntimeMarkers(scene) {
  return useMemo(() => {
    const empty = { pivots: [], sockets: [], groups: [] };
    if (!scene) return empty;
    const rt = scene.userData?.sculptRuntime;
    if (!rt) return empty;

    // A runtime entry may carry its own Object3D, or only a name to look up.
    const nodeFor = (name, value) =>
      (value?.isObject3D ? value : null) ?? rt.byId?.nodes?.[name] ?? scene.getObjectByName(name);

    const resolve = (list) => {
      const out = [];
      for (const [name, value] of entries(list)) {
        const node = nodeFor(name, value);
        if (!node) continue;
        const position = new THREE.Vector3();
        node.getWorldPosition(position);
        out.push({ name, node, position });
      }
      return out;
    };

    // Members may be the Object3Ds themselves, or component ids to resolve.
    const groups = [];
    for (const [name, value] of entries(rt.destructionGroups)) {
      const raw = Array.isArray(value) ? value : value?.members ?? [];
      const members = raw
        .map((m) => (m?.isObject3D ? m : rt.byId?.nodes?.[m] ?? scene.getObjectByName(String(m))))
        .filter(Boolean);
      if (members.length) groups.push({ name, members });
    }

    return {
      pivots: resolve(rt.pivots),
      sockets: resolve(rt.sockets),
      groups,
      declared: {
        pivots: names(rt.pivots).length,
        sockets: names(rt.sockets).length,
        groups: names(rt.destructionGroups).length,
      },
    };
  }, [scene]);
}

/**
 * An axes helper at every marker in one set.
 *
 * This is the visible payoff of requiring pivots and sockets on anything that
 * moves, and the fastest way to see one is in the wrong place: a lid hinge
 * floating above the lid is obvious here and invisible in a beauty render.
 */
export function MarkerGizmos({ markers, size, kind }) {
  // Build the helpers once per marker set and dispose them on the way out --
  // creating them inline would leak a helper per render.
  const helpers = useMemo(
    () =>
      markers.map((m) => {
        // Pivots and sockets are shown at once and must be told apart at a
        // glance: a pivot is an AXIS, so it gets the three coloured axes and you
        // can read which way a lid swings off it. A socket is a POINT something
        // clips into, with no orientation to read, so it gets one cyan cage.
        const helper =
          kind === 'pivot'
            ? new THREE.AxesHelper(size)
            : new THREE.Mesh(
                new THREE.OctahedronGeometry(size * 0.28),
                new THREE.MeshBasicMaterial({ color: 0x35d6d6, wireframe: true }),
              );
        // Draw through the prop. A hinge is almost always INSIDE the geometry it
        // hinges -- the lid pivot sits under the lid -- so a depth-tested gizmo
        // is invisible exactly when you most need to see it.
        helper.material.depthTest = false;
        helper.material.depthWrite = false;
        helper.material.transparent = true;
        helper.renderOrder = 999;
        helper.position.copy(m.position);
        return { name: m.name, helper };
      }),
    [markers, size, kind],
  );

  useEffect(
    () => () => { for (const h of helpers) { h.helper.geometry.dispose(); h.helper.material.dispose(); } },
    [helpers],
  );

  if (!helpers.length) return null;
  return (
    <group>
      {helpers.map((h) => <primitive key={h.name} object={h.helper} />)}
    </group>
  );
}

/** The same resolution as the hook, callable outside React. */
export function useRuntimeMarkersOf(scene) {
  const empty = { pivots: [], sockets: [], groups: [] };
  if (!scene) return empty;
  const rt = scene.userData?.sculptRuntime;
  if (!rt) return empty;
  const nodeFor = (name, value) =>
    (value?.isObject3D ? value : null) ?? rt.byId?.nodes?.[name] ?? scene.getObjectByName(name);
  const resolve = (list) => {
    const out = [];
    for (const [name, value] of entries(list)) {
      const node = nodeFor(name, value);
      if (!node) continue;
      const position = new THREE.Vector3();
      node.getWorldPosition(position);
      out.push({ name, node, position });
    }
    return out;
  };
  return { pivots: resolve(rt.pivots), sockets: resolve(rt.sockets), groups: [] };
}
