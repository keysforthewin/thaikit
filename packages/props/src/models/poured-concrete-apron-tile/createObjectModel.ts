import * as THREE from 'three';

/**
 * Poured Concrete Apron Tile — a flat ground tile.
 *
 * Four triangles (a deck and its underside), one geometry, one material. Everything a player sees on this
 * prop is in the albedo: every stone, joint, rut and stain is painted, never
 * built. Nothing stands proud of the ground plane, which is the point -- a
 * ground tile must not catch a player's feet.
 */
export type ProceduralModelOptions = {
  /**
   * Where this prop's shipped files live, with a trailing slash.
   *
   * The map is recorded as a bare filename because the bundle is EVALUATED
   * rather than imported: it has no import.meta and no currentScript, so it
   * cannot see its own URL, and a relative path would resolve against whatever
   * document is hosting it instead. Both hosts derive this from the module URL.
   */
  baseUrl?: string;
  textureAnisotropy?: number;
  receiveShadow?: boolean;
};

export function createObjectModel(
  _spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = new THREE.Group();
  root.name = 'poured-concrete-apron-tile';

  // Two quads back to back in ONE geometry: the deck faces +Y, the underside
  // -Y. This tile is laid as a rooftop and a bridge landing as well as on the
  // ground, and a single-sided quad seen from beneath is back-face culled to
  // nothing -- an invisible floor over the player's head. Opposed faces in the
  // same plane do not z-fight; only co-facing ones do.
  const top = new THREE.PlaneGeometry(8, 8, 1, 1);
  top.rotateX(-Math.PI / 2);
  const under = new THREE.PlaneGeometry(8, 8, 1, 1);
  under.rotateX(Math.PI / 2);
  const geometry = mergeQuads(top, under);

  const material = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
    // Left white on purpose: the albedo map carries the colour, and tinting it
    // would fight the tone the plate was generated at.
    color: 0xffffff,
  });

  // Behind the baseUrl guard so the Node-side gates -- promote's headless
  // construction, derive-colliders, check-coplanar -- can build this factory in a
  // runtime with no DOM, where ImageLoader throws.
  const base = options.baseUrl;
  if (base) {
    const albedo = new THREE.TextureLoader().load(new URL('maps/albedo.webp', base).href);
    albedo.colorSpace = THREE.SRGBColorSpace;
    // The tile is authored at exactly its own footprint, so it never repeats
    // within itself. Repeat wrapping is still correct: a level builder that
    // scales a tile should get more ground, not a stretched one.
    albedo.wrapS = THREE.RepeatWrapping;
    albedo.wrapT = THREE.RepeatWrapping;
    albedo.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? 8));
    material.map = albedo;
    material.needsUpdate = true;
  }

  const deck = new THREE.Mesh(geometry, material);
  deck.name = 'deck';
  deck.receiveShadow = options.receiveShadow ?? true;
  // A ground plane casting a shadow onto nothing is pure cost.
  deck.castShadow = false;
  root.add(deck);

  root.userData.sculptRuntime = {
    nodes: 2,
    pivots: [{ name: 'root', object: 'root' }],
    sockets: [],
    colliders: [],
    destructionGroups: [],
  };

  return root;
}

/**
 * Concatenate two indexed quads. Hand-rolled rather than imported from
 * three/addons: a thaikit factory imports `three` and nothing else.
 */
function mergeQuads(a: THREE.BufferGeometry, b: THREE.BufferGeometry): THREE.BufferGeometry {
  const out = new THREE.BufferGeometry();
  for (const name of ['position', 'normal', 'uv']) {
    const pa = a.getAttribute(name) as THREE.BufferAttribute;
    const pb = b.getAttribute(name) as THREE.BufferAttribute;
    const arr = new Float32Array(pa.array.length + pb.array.length);
    arr.set(pa.array as Float32Array, 0);
    arr.set(pb.array as Float32Array, pa.array.length);
    out.setAttribute(name, new THREE.BufferAttribute(arr, pa.itemSize));
  }
  const ia = a.getIndex() as THREE.BufferAttribute;
  const ib = b.getIndex() as THREE.BufferAttribute;
  const offset = a.getAttribute('position').count;
  const index = new Uint16Array(ia.count + ib.count);
  for (let i = 0; i < ia.count; i += 1) index[i] = ia.getX(i);
  for (let i = 0; i < ib.count; i += 1) index[ia.count + i] = ib.getX(i) + offset;
  out.setIndex(new THREE.BufferAttribute(index, 1));
  a.dispose();
  b.dispose();
  return out;
}

/**
 * The one-argument entry point: vibe3d's contract, and img2threejs's own.
 *
 * `createObjectModel` above keeps thaikit's historical (spec, options) shape so
 * the harness, the level editor and the Node-side gates carry on unchanged.
 * `spec` has never been passed by any caller, so this is the honest signature,
 * and it is what a vibe3d consumer installs and calls.
 */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}

export default createObjectModel;
