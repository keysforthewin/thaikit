import * as THREE from 'three';

import { getPrototype, instantiate } from '../../three/instances.js';
import { buildLight } from '../doc/lights.js';
import { cellOf, cellKey, isStatic } from '../cells.js';
import { groundOf, groundExtent, GROUND_THICKNESS } from '../ground.js';
import { exportGlb } from '../doc/toGlb.js';

/**
 * The level as the bake wants it: every placement's factory output in world
 * space, InstancedMeshes expanded into plain meshes (cell merging is per
 * placement, and gltf-transform has no de-instancing pass), every mesh tagged
 * with its placement, asset and cell, and the lights and spawns alongside.
 * Nothing here references thaikit at runtime -- that is the point of the file
 * this becomes.
 */
export async function buildExportScene(doc, catalogue, orphans, { onProgress, signal } = {}) {
  const scene = new THREE.Scene();
  scene.name = doc.name;
  const cellSize = doc.settings?.cellSize ?? 24;
  const placements = [];
  const missing = [];

  for (const [i, p] of doc.placements.entries()) {
    if (signal?.aborted) throw new DOMException('export cancelled', 'AbortError');
    const item = catalogue.byRef[p.ref];
    let source = null;
    let proto = null;
    if (item?.supported) {
      proto = await getPrototype(item);
      source = instantiate(proto, { castShadow: p.castShadow !== false, receiveShadow: p.receiveShadow !== false });
    } else if (orphans.get(p.id)) {
      source = orphans.get(p.id).clone(true);
    } else {
      missing.push(p.id);
      continue;
    }

    const g = new THREE.Group();
    g.name = p.id;
    g.position.fromArray(p.position);
    g.rotation.set(p.rotation[0], p.rotation[1], p.rotation[2], 'XYZ');
    g.scale.fromArray(p.scale);
    g.add(source);
    g.updateMatrixWorld(true);

    const bbox = new THREE.Box3().setFromObject(g, true);
    const c = bbox.getCenter(new THREE.Vector3());
    const { ix, iz } = cellOf(c.x, c.z, cellSize);
    const staticFlag = isStatic(p, item, proto);
    const colliders = item?.colliders?.parts ?? [];
    // The geometry is exported at its AUTHORED rotation and the runtime turns
    // the node; there is nothing to bake about facing the camera.
    const billboard = p.billboard ?? 'none';
    const tk = { kind: 'placement', placement: p.id, asset: p.ref, cell: cellKey(ix, iz), static: staticFlag, billboard };

    expandInstances(source);
    source.traverse((o) => {
      o.userData = {};
      if (!o.isMesh) return;
      o.userData.tk = tk;
      // glTF always multiplies COLOR_0 into the base colour; three only does
      // when the material asks. A colour attribute the material ignores would
      // tint the export, so it goes -- on a copy, the prototype keeps its own.
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      if (o.geometry.attributes.color && !mats.some((m) => m?.vertexColors)) {
        o.geometry = o.geometry.clone();
        o.geometry.deleteAttribute('color');
      }
    });
    g.userData = { tk: { ...tk, physics: { enabled: p.physics ?? Boolean(item?.physics?.enabled), massKg: item?.physics?.massKg ?? null } } };
    scene.add(g);
    placements.push({
      id: p.id, ref: p.ref, static: staticFlag, cell: cellKey(ix, iz), ix, iz,
      position: p.position, rotation: p.rotation, scale: p.scale,
      bounds: { min: bbox.min.toArray(), max: bbox.max.toArray() },
      physics: { enabled: p.physics ?? Boolean(item?.physics?.enabled), massKg: item?.physics?.massKg ?? null },
      billboard,
      // Read by the bake (a dynamic caster can be hidden from Cycles' shadow
      // rays) and carried to the runtime on the manifest's dynamic entries.
      // Static placements are merged per cell and always bake as casters.
      castShadow: p.castShadow !== false, receiveShadow: p.receiveShadow !== false,
      destructionGroups: item?.destructionGroups ?? [],
      colliders: colliders.map((c) => ({ name: c.name, type: c.type, offset: c.offset, scale: c.scale, isTrigger: Boolean(c.isTrigger) })),
      colliderYaw: 0,
    });
    onProgress?.(i + 1, doc.placements.length);
  }

  addGround(doc, scene, placements, cellSize);

  for (const l of doc.lights) {
    if (l.enabled === false) continue;
    const light = buildLight(l);
    scene.add(light);
  }
  for (const s of doc.spawns) {
    const o = new THREE.Object3D();
    o.name = `spawn_${s.name}`;
    o.position.fromArray(s.position);
    o.rotation.y = THREE.MathUtils.degToRad(s.yawDeg ?? 0);
    o.userData.tk = { kind: 'spawn', team: s.team ?? null, yawDeg: s.yawDeg ?? 0 };
    scene.add(o);
  }

  // Everything the Node pipeline needs that the geometry cannot say.
  scene.userData.thaikitBake = {
    id: doc.id, name: doc.name, settings: doc.settings, cellSize,
    placements,
    lights: doc.lights.filter((l) => l.enabled !== false).map((l) => ({
      id: l.id, node: `light_${l.id}`, type: l.type, role: l.role ?? null, color: l.color, intensity: l.intensity,
      position: l.position, direction: l.direction ?? null, castShadow: Boolean(l.castShadow), shadow: l.shadow ?? null,
      distance: l.distance ?? null, angle: l.angle ?? null, penumbra: l.penumbra ?? null, decay: l.decay ?? null,
    })),
    spawns: doc.spawns.map((s) => ({ name: s.name, position: s.position, yawDeg: s.yawDeg ?? 0, team: s.team ?? null })),
    missing,
  };

  await settleImages(scene);
  markCanvasTextures(scene);
  return { scene, missing };
}

/**
 * The ground plane, cut to the cell grid.
 *
 * Each tile enters the bake as an ordinary STATIC placement, which is the whole
 * trick: partition, join, LOD, the lightmap and the manifest's collider list
 * all key off the placement rows, so the floor needs no special case in any of
 * them. It gets a box collider a quarter-metre thick rather than a zero-height
 * sheet -- a plane collider is a knife edge to a character controller, and
 * something has to stop a physics prop that lands on it fast.
 *
 * The extent is measured from the real world bounds of everything already
 * placed, so it covers the map rather than a number somebody typed.
 */
function addGround(doc, scene, placements, cellSize) {
  const ground = groundOf(doc);
  if (!ground.enabled) return;

  // The billboard flag rides along so backdrop imposters do not drag the floor
  // out under the horizon -- see `groundExtent`.
  const extent = groundExtent(placements.map((p) => ({ ...p.bounds, billboard: p.billboard })), { cellSize, margin: ground.margin });
  if (extent.truncated) {
    console.warn(`[level] the ground wants ${extent.wanted} tiles and is capped at ${extent.tiles.length}; the floor will not cover the whole map`);
  }
  const geometry = new THREE.PlaneGeometry(cellSize, cellSize);
  // One material for every tile: the pipeline dedups identical materials, and
  // an identical one per tile is what lets the cells merge cleanly.
  const material = new THREE.MeshStandardMaterial({ color: new THREE.Color(ground.color), roughness: 1, metalness: 0 });
  const half = cellSize / 2;

  for (const t of extent.tiles) {
    const id = `ground_${t.ix}_${t.iz}`;
    const cell = cellKey(t.ix, t.iz);
    const tk = { kind: 'placement', placement: id, asset: '@thaikit/ground', cell, static: true };

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;
    mesh.castShadow = false;
    mesh.userData.tk = tk;

    const g = new THREE.Group();
    g.name = id;
    g.position.set(t.cx, ground.y, t.cz);
    g.add(mesh);
    g.userData = { tk: { ...tk, physics: { enabled: false, massKg: null } } };
    g.updateMatrixWorld(true);
    scene.add(g);

    placements.push({
      id, ref: '@thaikit/ground', static: true, cell, ix: t.ix, iz: t.iz,
      position: [t.cx, ground.y, t.cz], rotation: [0, 0, 0], scale: [1, 1, 1],
      bounds: { min: [t.cx - half, ground.y - GROUND_THICKNESS, t.cz - half], max: [t.cx + half, ground.y, t.cz + half] },
      physics: { enabled: false, massKg: null },
      destructionGroups: [],
      // Half-extents, hanging BELOW the surface so the walkable face is exactly
      // the rendered one.
      colliders: [{ name: 'ground', type: 'box', offset: [0, -GROUND_THICKNESS / 2, 0], scale: [half, GROUND_THICKNESS / 2, half], isTrigger: false }],
      colliderYaw: 0,
    });
  }
}

/** InstancedMesh -> N meshes, so every triangle has a real matrixWorld to flatten. */
function expandInstances(root) {
  const found = [];
  root.traverse((o) => { if (o.isInstancedMesh) found.push(o); });
  const m = new THREE.Matrix4();
  const color = new THREE.Color();
  for (const im of found) {
    const parent = im.parent;
    const holder = new THREE.Group();
    holder.name = im.name;
    holder.position.copy(im.position);
    holder.quaternion.copy(im.quaternion);
    holder.scale.copy(im.scale);
    const mats = Array.isArray(im.material) ? im.material : [im.material];
    for (let i = 0; i < im.count; i += 1) {
      im.getMatrixAt(i, m);
      let material = im.material;
      if (im.instanceColor) {
        im.getColorAt(i, color);
        // A per-instance tint becomes a material clone here and a vertex
        // colour in the pipeline, where identical materials fold back together.
        material = mats.map((x) => { const c = x.clone(); c.color.multiply(color); return c; });
        if (material.length === 1) material = material[0];
      }
      const mesh = new THREE.Mesh(im.geometry, material);
      mesh.applyMatrix4(m);
      mesh.castShadow = im.castShadow;
      mesh.receiveShadow = im.receiveShadow;
      holder.add(mesh);
    }
    parent.add(holder);
    parent.remove(im);
  }
}

async function settleImages(root) {
  const pending = [];
  root.traverse((o) => {
    if (!o.isMesh) return;
    for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
      if (!m) continue;
      for (const v of Object.values(m)) {
        const img = v?.isTexture ? v.image : null;
        if (img instanceof HTMLImageElement && !img.complete) pending.push(img.decode().catch(() => {}));
      }
    }
  });
  await Promise.all(pending);
}

/** Canvases go out lossless; the pipeline decides the final encoding. */
function markCanvasTextures(root) {
  root.traverse((o) => {
    if (!o.isMesh) return;
    for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
      if (!m) continue;
      for (const v of Object.values(m)) {
        if (v?.isTexture && v.image instanceof HTMLCanvasElement) v.userData.mimeType = 'image/png';
      }
    }
  });
}

export { exportGlb };
