import * as THREE from 'three';

/**
 * Brown Mirrored Stepped Office Block — a skyline imposter.
 *
 * One upright quad carrying the asset's straight-on elevation plate, keyed to
 * alpha. Two triangles, one geometry, one material. It stands 120.000 m tall and
 * 70.000 m wide (height is the real building's; width follows the plate's keyed
 * silhouette so the texture is never stretched), and it yaws every frame to
 * face the camera so it reads the same from any direction on the horizon.
 *
 * Unlit on purpose: the plate was shot as flat overcast albedo, and a lit quad
 * facing the camera would brighten and darken with the sun's azimuth in a way
 * a photograph of a building never does. It still takes scene fog, which is
 * what sells distance.
 */
export type ProceduralModelOptions = {
  /**
   * Where this prop's shipped files live, with a trailing slash.
   *
   * The map is recorded as a bare filename because the bundle is EVALUATED
   * rather than imported: it has no import.meta and no currentScript, so it
   * cannot see its own URL. Both hosts derive this from the module URL. With no
   * base (the Node-side probes) the quad ships untextured rather than throwing.
   */
  baseUrl?: string;
  textureAnisotropy?: number;
  /** Yaw the card to face the camera each frame. Default true. */
  billboard?: boolean;
};

const WIDTH = 70.000;
const HEIGHT = 120.000;

export function createObjectModel(
  _spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = new THREE.Group();
  root.name = 'brown-mirrored-stepped-office-block';

  const geometry = new THREE.PlaneGeometry(WIDTH, HEIGHT, 1, 1);
  geometry.translate(0, HEIGHT / 2, 0);

  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    // Alpha test, not blending: a cut-out needs no sorting against the rest of
    // the skyline and writes depth like the solid it stands in for.
    alphaTest: 0.5,
    side: THREE.DoubleSide,
    fog: true,
  });

  const base = options.baseUrl;
  if (base) {
    const texture = new THREE.TextureLoader().load(new URL("maps/albedo.webp", base).href);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? 8));
    material.map = texture;
    material.needsUpdate = true;
  }

  const card = new THREE.Mesh(geometry, material);
  card.name = 'card';
  card.castShadow = false;
  card.receiveShadow = false;
  root.add(card);

  if (options.billboard ?? true) {
    const camPos = new THREE.Vector3();
    const selfPos = new THREE.Vector3();
    const parentQuat = new THREE.Quaternion();
    const yawQuat = new THREE.Quaternion();
    const Y = new THREE.Vector3(0, 1, 0);
    card.onBeforeRender = (_renderer, _scene, camera) => {
      camera.getWorldPosition(camPos);
      card.getWorldPosition(selfPos);
      const yaw = Math.atan2(camPos.x - selfPos.x, camPos.z - selfPos.z);
      yawQuat.setFromAxisAngle(Y, yaw);
      if (card.parent) {
        card.parent.getWorldQuaternion(parentQuat).invert();
        yawQuat.premultiply(parentQuat);
      }
      card.quaternion.copy(yawQuat);
      // onBeforeRender fires after the frame's matrix pass, so the new yaw has
      // to be pushed into matrixWorld by hand to be drawn this frame.
      card.updateMatrixWorld(true);
    };
  }

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
