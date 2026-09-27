import * as THREE from 'three';

/**
 * Road Straight, Lane Arrows — a flat ground tile.
 *
 * Two triangles, one geometry, one material. Aggregate, patch seams and wear are carried by independent
 * albedo, normal and packed AO/roughness channels; no displaced geometry. Nothing stands proud of the ground plane, which is the point -- a
 * ground tile must not catch a player's feet.
 */
export interface ProceduralModelOptions {
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
  root.name = 'road-straight-lane-arrows';

  const geometry = new THREE.PlaneGeometry(8, 8, 1, 1);
  geometry.rotateX(-Math.PI / 2);

  const material = new THREE.MeshStandardMaterial({
    name: 'asphalt-surface',
    normalScale: new THREE.Vector2(0.35, 0.35),
    aoMapIntensity: 0.25,
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
    const loader = new THREE.TextureLoader();
    const load = (file: string, colorSpace: typeof THREE.SRGBColorSpace | typeof THREE.NoColorSpace) => {
      const texture = loader.load(new URL(file, base).href);
      texture.colorSpace = colorSpace;
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? 8));
      return texture;
    };
    material.map = load('maps/albedo.webp', THREE.SRGBColorSpace);
    material.normalMap = load('maps/normal.webp', THREE.NoColorSpace);
    const orm = load('maps/orm.webp', THREE.NoColorSpace);
    // Standard glTF packing: AO in red, roughness in green, metalness in blue.
    // One shared data texture avoids three duplicate image allocations.
    material.aoMap = orm;
    material.roughnessMap = orm;
    material.metalnessMap = orm;
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

/** Standard one-argument pack entry. */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}
