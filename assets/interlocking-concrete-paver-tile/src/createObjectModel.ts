import * as THREE from 'three';

/**
 * Interlocking Concrete Paver Tile — a flat ground tile.
 *
 * Two triangles, one geometry, one material. Everything a player sees on this
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
  root.name = 'interlocking-concrete-paver-tile';

  const geometry = new THREE.PlaneGeometry(8, 8, 1, 1);
  geometry.rotateX(-Math.PI / 2);

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

export default createObjectModel;
