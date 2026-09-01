import * as THREE from 'three';

/**
 * Cast Iron Manhole Cover — a flat ground decal.
 *
 * Two triangles, one geometry, one material. The top face is rectified out of
 * the reference plate and painted; nothing is built. It sits 5 mm proud of
 * the ground so it does not z-fight the road tile it is dropped onto.
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
  root.name = 'cast-iron-manhole-cover';

  const geometry = new THREE.PlaneGeometry(0.65, 0.65, 1, 1);
  geometry.rotateX(-Math.PI / 2);

  const material = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
    // Left white on purpose: the albedo map carries the colour, and tinting it
    // would fight the tone measured off the plate.
    color: 0xffffff,
  });

  // The cover is round and its quad is square, so the corners are cut by the
  // albedo's own alpha. alphaTest rather than transparent: a cutout needs no
  // depth sort, and a transparent decal over a lightmapped road is exactly the
  // sort that goes wrong.
  material.alphaTest = 0.5;
  material.transparent = false;

  // Behind the baseUrl guard so the Node-side gates -- promote's headless
  // construction, derive-colliders, check-coplanar -- can build this factory in a
  // runtime with no DOM, where ImageLoader throws.
  const base = options.baseUrl;
  if (base) {
    const albedo = new THREE.TextureLoader().load(new URL('maps/albedo.webp', base).href);
    albedo.colorSpace = THREE.SRGBColorSpace;
    // Clamped, not repeated: this is one fitting at a fixed size, and a decal
    // that tiles when a level builder scales it would repeat the cover.
    albedo.wrapS = THREE.ClampToEdgeWrapping;
    albedo.wrapT = THREE.ClampToEdgeWrapping;
    albedo.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? 8));
    material.map = albedo;
    material.needsUpdate = true;
  }

  const deck = new THREE.Mesh(geometry, material);
  deck.name = 'deck';
  deck.position.y = 0.005;
  deck.receiveShadow = options.receiveShadow ?? true;
  // A flush ground fitting casting a shadow onto the road it lies in is pure cost.
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

export default createObjectModel;

/**
 * The one-argument entry point: vibe3d's contract, and img2threejs's own.
 *
 * `createObjectModel` above keeps thaikit's historical (spec, options) shape so
 * the harness, the level editor and the Node-side gates carry on unchanged.
 * `spec` has never been passed by any caller -- it is inspection data that is
 * already baked into this module -- so this is the honest signature, and it is
 * what a vibe3d consumer installs and calls.
 */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}
