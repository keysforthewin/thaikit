import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

import { getPrototype } from '../three/instances.js';

/**
 * One prop as ONE glTF binary that Unreal's importer turns into ONE Static Mesh.
 *
 * A thaikit factory builds a tree of meshes -- sometimes a hundred, plus
 * InstancedMeshes -- and Unreal's Interchange importer makes a Static Mesh asset
 * out of every mesh node it finds unless "combine" is on. Rather than lean on an
 * importer checkbox, the whole tree is flattened here: every mesh is baked into
 * world space, InstancedMeshes are expanded, and all of it is merged into a
 * single mesh with one geometry GROUP per material, which glTF writes as one
 * mesh with N primitives and Unreal reads as one Static Mesh with N material
 * slots. The prop's origin (base-centre for every thaikit prop) becomes the
 * Static Mesh pivot.
 *
 * Vertex colours are normalised rather than dropped: glTF ALWAYS multiplies
 * COLOR_0 into the base colour, three only when the material asks. So a mesh
 * whose material ignores its colour attribute gets white, an instanced tint is
 * baked into the attribute (its material must be white -- that is the kit's own
 * rule for `setColorAt`), and everything else keeps what the factory painted.
 *
 * The physics compound rides along as `UCX_<mesh>_NN` siblings: Interchange's
 * "import collision according to mesh name" (on by default) turns those into the
 * Static Mesh's simple collision, so a prop is standable in Unreal on the same
 * boxes and cylinders it is in the level runtime. A cylinder is emitted as a
 * 16-gon prism, which is convex, which is all UCX asks.
 */

const PACK_FOLDER = { '@thai-kit': 'ThaiKit', '@thaikit': 'ThaiKit' };
const PACK_PREFIX = { '@thai-kit': 'TK', '@thaikit': 'TK' };

export function pascal(s) {
  return String(s)
    .replace(/^@/, '')
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join('');
}

export function packFolder(packId) {
  return PACK_FOLDER[packId] ?? pascal(packId);
}

/** `@thai-kit/oil-drum` -> `SM_TK_OilDrum`; `@scifi-kit/crate` -> `SM_ScifiKit_Crate`. */
export function assetName(ref) {
  const [ns, name] = ref.split('/');
  const prefix = PACK_PREFIX[ns] ?? pascal(ns);
  return `SM_${prefix}_${pascal(name)}`;
}

/** InstancedMesh -> plain meshes, each remembering its instance tint for the vertex-colour bake. */
function expandInstances(root) {
  const found = [];
  root.traverse((o) => { if (o.isInstancedMesh) found.push(o); });
  const m = new THREE.Matrix4();
  for (const im of found) {
    const holder = new THREE.Group();
    holder.position.copy(im.position);
    holder.quaternion.copy(im.quaternion);
    holder.scale.copy(im.scale);
    for (let i = 0; i < im.count; i += 1) {
      im.getMatrixAt(i, m);
      const mesh = new THREE.Mesh(im.geometry, im.material);
      mesh.applyMatrix4(m);
      if (im.instanceColor) {
        const c = new THREE.Color();
        im.getColorAt(i, c);
        mesh.userData.tint = c;
      }
      holder.add(mesh);
    }
    im.parent.add(holder);
    im.parent.remove(im);
  }
}

/** A multi-material geometry, one piece per group so each lands with its own material. */
function splitByGroups(geometry) {
  if (!geometry.groups?.length) return [{ geometry, materialIndex: 0 }];
  const src = geometry.index ? geometry.toNonIndexed() : geometry;
  const out = [];
  for (const g of src.groups) {
    const count = g.count === Infinity ? src.attributes.position.count - g.start : g.count;
    if (count <= 0) continue;
    const piece = new THREE.BufferGeometry();
    for (const [name, attr] of Object.entries(src.attributes)) {
      const size = attr.itemSize;
      const arr = attr.array.slice(g.start * size, (g.start + count) * size);
      piece.setAttribute(name, new THREE.BufferAttribute(arr, size, attr.normalized));
    }
    out.push({ geometry: piece, materialIndex: g.materialIndex ?? 0 });
  }
  return out;
}

/**
 * The attribute set every piece must share for `mergeGeometries` to accept it:
 * position, normal, uv and a 3-float colour, indexed. Everything else the
 * factory attached (uv1 for a lightmap probe, tangents) is dropped -- Unreal
 * builds its own lightmap UVs and tangents at import.
 */
function normalise(geometry, matrixWorld, { useVertexColor, tint }) {
  let geo = geometry.clone();
  for (const name of Object.keys(geo.attributes)) {
    if (!['position', 'normal', 'uv', 'color'].includes(name)) geo.deleteAttribute(name);
  }
  geo.applyMatrix4(matrixWorld);
  if (!geo.attributes.normal) geo.computeVertexNormals();
  const n = geo.attributes.position.count;
  if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));

  const color = new Float32Array(n * 3).fill(1);
  const existing = useVertexColor ? geo.attributes.color : null;
  if (existing) {
    for (let i = 0; i < n; i += 1) {
      color[i * 3] = existing.getX(i);
      color[i * 3 + 1] = existing.getY(i);
      color[i * 3 + 2] = existing.getZ(i);
    }
  }
  if (tint) {
    for (let i = 0; i < n; i += 1) {
      color[i * 3] *= tint.r;
      color[i * 3 + 1] *= tint.g;
      color[i * 3 + 2] *= tint.b;
    }
  }
  geo.setAttribute('color', new THREE.BufferAttribute(color, 3));

  if (!geo.index) {
    const idx = n > 65535 ? new Uint32Array(n) : new Uint16Array(n);
    for (let i = 0; i < n; i += 1) idx[i] = i;
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
  }
  geo.clearGroups();
  return geo;
}

/** A material as glTF will read it: named for Unreal, and cloned so the prototype keeps its own. */
function exportMaterial(mat, propName, index) {
  const m = mat.clone();
  // COLOR_0 is always applied downstream, so the attribute carries every tone
  // and the material must not multiply it a second time in three's own preview.
  m.vertexColors = false;
  const base = (mat.name || `mat${index}`).replace(/[^A-Za-z0-9]+/g, '_').replace(/^_+|_+$/g, '') || `mat${index}`;
  m.name = `M_${propName.replace(/^SM_/, '')}_${base}`;
  return m;
}

/**
 * Where a prop EMITS light, read off its emissive materials.
 *
 * Unreal imports emissive as colour, not as a light: a lamp head glows and lights
 * nothing. So every material whose emissive is not black is measured -- the
 * world-space bounds of the triangles wearing it -- and recorded as an emitter
 * the skill turns into a Point/Spot/Rect light at exactly that spot. A sign
 * fascia is a wide flat emitter, a lamp head a small one, a lantern a small
 * warm one. Positions are root-local metres like everything else in the file.
 */
function emitterOf(mat, pieces, slotName) {
  const e = mat.emissive;
  const intensity = mat.emissiveIntensity ?? 1;
  const hasMap = Boolean(mat.emissiveMap);
  if (!e || (!hasMap && e.r + e.g + e.b < 0.05) || intensity <= 0) return null;
  const box = new THREE.Box3();
  let tris = 0;
  for (const g of pieces) {
    g.computeBoundingBox();
    box.union(g.boundingBox);
    tris += g.index.count / 3;
  }
  const size = box.getSize(new THREE.Vector3());
  const c = box.getCenter(new THREE.Vector3());
  const lum = 0.2126 * e.r + 0.7152 * e.g + 0.0722 * e.b;
  const r3 = (v) => +v.toFixed(3);
  return {
    slot: slotName,
    position: [r3(c.x), r3(c.y), r3(c.z)],
    extent: [r3(size.x), r3(size.y), r3(size.z)],
    color: hasMap && lum < 0.05 ? '#ffffff' : `#${e.getHexString()}`,
    intensity: +intensity.toFixed(2),
    luminance: +lum.toFixed(3),
    textured: hasMap,
    triangles: tris,
    // A flat emitter (one axis under a tenth of the others) is a face -- a sign
    // or a batten -- and wants a rect light aimed along its thin axis.
    shape: Math.min(size.x, size.y, size.z) < 0.1 * Math.max(size.x, size.y, size.z) ? 'panel' : 'bulb',
  };
}

/**
 * The kit's luminaires are NOT authored emissive (the render harness reads a
 * bright enclosed surface as a hole, so lamp heads ship as pale diffuse
 * glazing). For a `lighting` prop with no emissive slot, the head is inferred
 * from the slot NAME -- the factories name them for what they are
 * (`lantern_shade`, `acrylic_refractor`, `led_lens`, `tube`, `warm_glazing`,
 * `red_silk`) -- and failing that, the smallest material group in the top half
 * of the prop. Marked `inferred` so the skill knows it is a guess.
 */
const HEAD_SLOT = /lens|refractor|tube|glazing|shade|glass|bulb|diffus|silk|cloth|flood|lantern|shell|globe|opal/i;
const NOT_HEAD = /steel|concrete|iron|brass|alumin|enamel|rope|trim|pv_panel|bracket|crossarm|pole|base|housing$/i;

function inferredEmitters(groups, propHeight) {
  const measure = (pieces) => {
    const box = new THREE.Box3();
    for (const g of pieces) { g.computeBoundingBox(); box.union(g.boundingBox); }
    return box;
  };
  // Test the factory's OWN slot name (`lantern_shade`), never the exported
  // `M_TK_<Prop>_...` name: a prop called ...Lantern or ...Pole would otherwise
  // make every slot a head, or none.
  const rows = groups.map(({ mat, pieces, slotName }) => ({ mat, slotName, raw: mat.name || '', box: measure(pieces) }));
  let picked = rows.filter((r) => HEAD_SLOT.test(r.raw) && !NOT_HEAD.test(r.raw.replace(HEAD_SLOT, '')));
  if (!picked.length) {
    const upper = rows.filter((r) => r.box.getCenter(new THREE.Vector3()).y > propHeight * 0.5);
    picked = upper.sort((a, b) => a.box.getSize(new THREE.Vector3()).length() - b.box.getSize(new THREE.Vector3()).length()).slice(0, 1);
  }
  const r3 = (v) => +v.toFixed(3);
  return picked.map(({ mat, slotName, box }) => {
    const size = box.getSize(new THREE.Vector3());
    const c = box.getCenter(new THREE.Vector3());
    const col = mat.color ?? new THREE.Color(1, 1, 1);
    return {
      slot: slotName,
      position: [r3(c.x), r3(c.y), r3(c.z)],
      extent: [r3(size.x), r3(size.y), r3(size.z)],
      color: `#${col.getHexString()}`,
      intensity: 1,
      luminance: +(0.2126 * col.r + 0.7152 * col.g + 0.0722 * col.b).toFixed(3),
      textured: Boolean(mat.map),
      inferred: true,
      shape: Math.min(size.x, size.y, size.z) < 0.1 * Math.max(size.x, size.y, size.z) ? 'panel' : 'bulb',
    };
  });
}

/**
 * Flatten a built prototype into one Mesh with material groups.
 * Returns null when the prop has no renderable triangles. `mesh.userData.emitters`
 * carries the emissive surfaces (see emitterOf), or for a `lighting` prop with
 * none, the inferred lamp head (inferredEmitters).
 */
export function flattenPrototype(root, propName, { category = null } = {}) {
  const work = root.clone(true);
  work.updateMatrixWorld(true);
  expandInstances(work);
  work.updateMatrixWorld(true);

  // material -> pieces, in first-seen order so slot numbering is stable.
  const byMaterial = new Map();
  work.traverse((o) => {
    if (!o.isMesh || !o.geometry?.attributes?.position || o.visible === false) return;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    for (const { geometry, materialIndex } of splitByGroups(o.geometry)) {
      const mat = mats[Math.min(materialIndex, mats.length - 1)];
      if (!mat) continue;
      const piece = normalise(geometry, o.matrixWorld, { useVertexColor: Boolean(mat.vertexColors), tint: o.userData.tint ?? null });
      if (!byMaterial.has(mat)) byMaterial.set(mat, []);
      byMaterial.get(mat).push(piece);
    }
  });
  if (!byMaterial.size) return null;

  const perMaterial = [];
  const materials = [];
  const emitters = [];
  const groups = [];
  let i = 0;
  for (const [mat, pieces] of byMaterial) {
    const merged = pieces.length === 1 ? pieces[0] : mergeGeometries(pieces, false);
    if (!merged) continue;
    perMaterial.push(merged);
    const exported = exportMaterial(mat, propName, i);
    materials.push(exported);
    groups.push({ mat, pieces, slotName: exported.name });
    const em = emitterOf(mat, pieces, exported.name);
    if (em) emitters.push(em);
    i += 1;
  }
  if (!emitters.length && category === 'lighting') {
    const whole = new THREE.Box3();
    for (const g of perMaterial) { g.computeBoundingBox(); whole.union(g.boundingBox); }
    emitters.push(...inferredEmitters(groups, whole.max.y));
  }
  const geometry = perMaterial.length === 1 ? perMaterial[0] : mergeGeometries(perMaterial, true);
  if (perMaterial.length === 1) geometry.addGroup(0, geometry.index.count, 0);
  const mesh = new THREE.Mesh(geometry, materials);
  mesh.name = propName;
  mesh.userData.emitters = emitters;
  return mesh;
}

/**
 * The compound as UCX_ meshes. Root-local metres with `scale` as half-extents,
 * exactly as colliders.json records them; triggers are not collision.
 */
export function collisionMeshes(parts, propName) {
  // Standard, not Basic: a Basic material writes KHR_materials_unlit into every
  // file for a mesh Unreal never renders.
  const mat = new THREE.MeshStandardMaterial({ name: 'UCX', color: 0x00ff00, wireframe: true });
  const out = [];
  let n = 0;
  for (const part of parts ?? []) {
    if (part.isTrigger) continue;
    const [sx, sy, sz] = part.scale;
    let geo;
    if (part.type === 'cylinder') {
      geo = new THREE.CylinderGeometry(1, 1, 2, 16, 1, false);
      geo.scale(sx, sy, sz);
    } else if (part.type === 'box') {
      geo = new THREE.BoxGeometry(sx * 2, sy * 2, sz * 2);
    } else {
      continue;
    }
    n += 1;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.name = `UCX_${propName}_${String(n).padStart(2, '0')}`;
    mesh.position.fromArray(part.offset ?? [0, 0, 0]);
    out.push(mesh);
  }
  return out;
}

function triangleCount(mesh) {
  return mesh.geometry.index ? mesh.geometry.index.count / 3 : mesh.geometry.attributes.position.count / 3;
}

/**
 * Build the GLB for one catalogue item.
 * @returns {Promise<{glb: ArrayBuffer, asset: string, triangles: number, materials: number, collision: number, bbox: number[][]}>}
 */
export async function buildPropGlb(item, { maxTextureSize = 2048, collision = true } = {}) {
  const proto = await getPrototype(item);
  const name = assetName(item.ref);
  const mesh = flattenPrototype(proto.root, name, { category: item.category ?? null });
  if (!mesh) throw new Error('no renderable geometry');

  const scene = new THREE.Scene();
  scene.name = name;
  scene.add(mesh);
  const ucx = collision ? collisionMeshes(item.colliders?.parts, name) : [];
  for (const c of ucx) scene.add(c);

  const exporter = new GLTFExporter();
  const glb = await exporter.parseAsync(scene, {
    binary: true,
    onlyVisible: false,
    maxTextureSize,
    includeCustomExtensions: false,
    trs: false,
  });

  const bbox = new THREE.Box3().setFromObject(mesh, true);
  const result = {
    glb,
    asset: name,
    triangles: Math.round(triangleCount(mesh)),
    materials: mesh.material.length,
    collision: ucx.length,
    emitters: mesh.userData.emitters ?? [],
    bbox: [bbox.min.toArray().map((v) => +v.toFixed(3)), bbox.max.toArray().map((v) => +v.toFixed(3))],
  };

  // The flattened copy is ours; the prototype's geometry and textures stay cached.
  mesh.geometry.dispose();
  for (const m of mesh.material) m.dispose?.();
  for (const c of ucx) c.geometry.dispose();
  return result;
}
