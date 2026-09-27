import * as THREE from 'three';

/**
 * Road Straight Tile — a flat street tile.
 *
 * Two triangles, one geometry, one material. Everything a player sees on this
 * prop is in the maps: the carriageway, the sidewalk bands, the paint, the slab
 * coursing and the drain lids are painted, never built. Nothing stands proud of
 * the ground plane, which is the point -- a road tile must not catch a player's
 * feet, and there is no kerb here to step up onto.
 */
export interface ProceduralModelOptions {
  /**
   * Where this prop's shipped files live, with a trailing slash.
   *
   * The maps are recorded as bare filenames because the bundle is EVALUATED
   * rather than imported: it has no import.meta and no currentScript, so it
   * cannot see its own URL, and a relative path would resolve against whatever
   * document is hosting it instead. Both hosts derive this from the module URL.
   */
  baseUrl?: string;
  textureAnisotropy?: number;
  receiveShadow?: boolean;
};

function loadMap(
  base: string,
  file: string,
  colorSpace: THREE.ColorSpace,
  anisotropy: number,
): THREE.Texture {
  const texture = new THREE.TextureLoader().load(new URL(file, base).href);
  texture.colorSpace = colorSpace;
  // The tile is authored at exactly its own footprint, so it never repeats
  // within itself. Repeat wrapping is still correct: a level builder that scales
  // a tile should get more road, not a stretched one.
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = anisotropy;
  return texture;
}

export function createObjectModel(
  _spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = new THREE.Group();
  root.name = 'road-straight-tile';

  const geometry = new THREE.PlaneGeometry(8, 8, 1, 1);
  geometry.rotateX(-Math.PI / 2);
  // Retain the native secondary UV set for consumers that use it.
  const uv = geometry.getAttribute('uv');
  if (uv) geometry.setAttribute('uv1', uv);

  const anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? 8));
  const material = new THREE.MeshStandardMaterial({
    name: 'weathered-street-surface',
    normalScale: new THREE.Vector2(0.18, 0.18),
    aoMapIntensity: 0.4,
    roughness: 1,
    metalness: 0,
    // Left white on purpose: the albedo map carries the colour, and tinting it
    // would fight the tone that was measured off the reference plate.
    color: 0xffffff,
  });

  const base = options.baseUrl;
  if (base) {
    material.map = loadMap(base, 'maps/albedo.webp', THREE.SRGBColorSpace, anisotropy);
    material.normalMap = loadMap(base, 'maps/normal.webp', THREE.NoColorSpace, anisotropy);
    const orm = loadMap(base, 'maps/orm.webp', THREE.NoColorSpace, anisotropy);
    material.roughnessMap = orm;
    material.aoMap = orm;
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
    colliders: [{ name: 'deck', shape: 'box' }],
    destructionGroups: [],
  };

  return root;
}

export default createObjectModel;

/** Standard one-argument pack entry. */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}
