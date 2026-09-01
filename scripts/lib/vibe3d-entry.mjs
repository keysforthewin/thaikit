/**
 * The vibe3d entry module (`model.ts`) written beside every prop's factory.
 *
 * vibe3d's `createModel(options)` contract plus a `createPreview()` for their
 * docs gallery, wrapping thaikit's `createObjectModel.ts` without touching it.
 * It is a COMMITTED file in packages/props/src/models/<id>/ -- promote emits it,
 * the exporter verifies it still matches what this module would emit, and the
 * pack installer bundles it as the item's entry.
 */

/**
 * Vibe3D's `createModel` contract, wrapping thaikit's `createObjectModel`.
 *
 * Written as a separate file rather than patched into the factory so the
 * generated source ships byte-for-byte identical to what this repo holds and
 * what img2threejs reviewed. Named `model.ts` because that is where the
 * vibe-model skill looks for `createModel`.
 */
/**
 * The per-asset look-dev helpers the generated factory already exports.
 *
 * Their names carry the prop's own name (`createOilDrumLookDevLights`,
 * `frameOilDrumCamera`), so they are discovered rather than assumed. A prop that
 * exports neither still gets a working preview from the fallbacks below.
 */
export function previewHelpers(source) {
  return {
    lookDevLights: source.match(/export function (create\w*LookDevLights)\s*\(/)?.[1] ?? null,
    frameCamera: source.match(/export function (frame\w*Camera)\s*\(/)?.[1] ?? null,
  };
}

/**
 * Vibe3D's two entry points, wrapping thaikit's `createObjectModel`.
 *
 * `createModel` is what their CLI installs and a game calls. `createPreview` is
 * what their docs gallery calls -- `apps/docs/src/catalog.ts` types it as
 * `{ scene, root, camera, update(dt), dispose() }` -- and it is where all
 * preview-only scene setup belongs, per the vibe-model skill. Nothing here
 * reaches into the prop: the lights and camera come from helpers the factory
 * already exports, so a preview cannot drift from the model.
 *
 * Written as a separate file rather than patched into the factory so the
 * generated source ships byte-for-byte identical to what this repo holds and
 * what img2threejs reviewed. Named `model.ts` because that is where the
 * vibe-model skill looks for `createModel`.
 */
export function entryModule(asset, helpers, hasArtifacts) {
  // Their catalog types the preview against `three/webgpu`, and their own models
  // import from it. That is safe to cross: three's `three.module.js` and
  // `three.webgpu.js` both re-export the scene graph from a shared
  // `three.core.js`, so `Mesh` from 'three' IS `Mesh` from 'three/webgpu' --
  // verified by identity, not assumed. Importing plain 'three' keeps the wrapper
  // matched to the factory beside it, which imports 'three' too.
  const named = ['createModel as createBaseModel'];
  if (helpers.lookDevLights) named.push(helpers.lookDevLights);
  if (helpers.frameCamera) named.push(helpers.frameCamera);

  const imports = `import {\n${named.map((n) => `  ${n},`).join('\n')}\n  type ProceduralModelOptions,\n} from './createObjectModel';`;

  // Fallbacks, emitted only when the factory did not export the real thing.
  const lightsFallback = helpers.lookDevLights
    ? ''
    : `
/** This prop's factory exports no look-dev rig, so the preview brings a neutral one. */
function defaultLookDevLights(): Group {
  const lights = new Group();
  lights.name = 'preview lights';
  lights.userData.excludeFromExport = true;
  lights.add(new HemisphereLight(0xf2f4ff, 0x363b42, 0.85));
  const key = new DirectionalLight(0xfff4e8, 2.15);
  key.position.set(4, 6, 5);
  lights.add(key);
  return lights;
}
`;

  const cameraFallback = helpers.frameCamera
    ? ''
    : `
/** This prop's factory exports no framing helper, so the preview frames it here. */
function defaultFrameCamera(
  camera: PerspectiveCamera,
  object: Object3D,
  options: { margin?: number; azimuthDeg?: number; elevationDeg?: number } = {},
): void {
  const box = new Box3().setFromObject(object);
  if (box.isEmpty()) return;
  const size = box.getSize(new Vector3());
  const center = box.getCenter(new Vector3());
  const maxDim = Math.max(size.x, size.y, size.z) * (options.margin ?? 1.15);
  const fov = (camera.fov * Math.PI) / 180;
  const distance = maxDim / 2 / Math.tan(fov / 2);
  const az = ((options.azimuthDeg ?? 0) * Math.PI) / 180;
  const el = ((options.elevationDeg ?? 0) * Math.PI) / 180;
  camera.position.copy(center).addScaledVector(
    new Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)),
    distance,
  );
  camera.near = Math.max(0.01, distance - maxDim);
  camera.far = distance + maxDim * 2;
  camera.lookAt(center);
  camera.updateProjectionMatrix();
}
`;

  // Only import what this prop's variant actually uses -- an unused import is a
  // build error under noUnusedLocals, which a consumer is entitled to have on.
  const threeNames = new Set(['Color', 'Group', 'Object3D', 'PerspectiveCamera', 'Scene']);
  if (!helpers.lookDevLights) for (const n of ['HemisphereLight', 'DirectionalLight']) threeNames.add(n);
  if (!helpers.frameCamera) for (const n of ['Box3', 'Vector3']) threeNames.add(n);
  const threeImports = [...threeNames].sort().map((n) => `  ${n},`).join('\n');

  // A prop whose images ship as v2 `artifacts` needs to find them at runtime.
  // In thaikit the bundle is EVALUATED and cannot see its own URL, which is why
  // the factories take bare filenames plus a `baseUrl`; here the wrapper is an
  // ordinary ES module sitting beside its own installed `maps/`, so
  // `import.meta.url` IS that answer, and bundlers resolve it to an emitted
  // asset. Defaulted rather than forced: a consumer who relocates the images
  // passes their own baseUrl and this stops applying.
  const baseUrlConst = hasArtifacts
    ? [
        '',
        "/**",
        " * Where this prop's shipped images live: beside this module, installed",
        ' * from this item\'s `artifacts`.',
        ' *',
        ' * Wrapped, because `import.meta` is EMPTY in a CommonJS bundle -- esbuild',
        " * rewrites it to `{}`, so `new URL('.', undefined)` throws `Invalid URL`",
        ' * and takes the whole factory down at construction. thaikit\'s own pack',
        ' * installer bundles to CJS and hit exactly that. Falling back to',
        ' * undefined is safe: the caller\'s own baseUrl still wins below, and a',
        ' * factory with no baseUrl simply skips its texture load.',
        ' */',
        'const BASE_URL: string | undefined = (() => {',
        '  try {',
        "    return new URL('.', import.meta.url).href;",
        '  } catch {',
        '    return undefined;',
        '  }',
        '})();',
        '',
      ].join('\n')
    : '';
  // `options` spreads LAST, so a caller who passes their own baseUrl wins.
  const baseUrlArg = hasArtifacts ? 'BASE_URL ? { baseUrl: BASE_URL, ...options } : options' : 'options';

  const lightsCall = helpers.lookDevLights ? `${helpers.lookDevLights}('neutral')` : 'defaultLookDevLights()';
  const frameCall = helpers.frameCamera ? helpers.frameCamera : 'defaultFrameCamera';

  return `/**
 * ${asset.name} -- Vibe3D entry point.
 *
 * Generated by thaikit's scripts/build-vibe3d-registry.mjs. Once installed this
 * file is yours: editing it is the point of a source-first registry.
 *
 * The model itself is in ./createObjectModel, unmodified.
 */
import {
${threeImports}
} from 'three';
import type { Material, Mesh, Texture } from 'three';

${imports}

export type { ProceduralModelOptions } from './createObjectModel';

/**
 * The prop's own one-argument factory, re-exported under vibe3d's name.
 *
 * thaikit's factories export BOTH \`createObjectModel(spec, options)\` -- its
 * historical shape, kept for the render harness and the level editor -- and
 * \`createModel(options)\`, which is what this wraps. So this file no longer
 * knows the two-argument form exists, and the only thing it adds is the
 * baseUrl default below.
 */
${baseUrlConst}
export function createModel(options: ProceduralModelOptions = {}): Group {
  return createBaseModel(${baseUrlArg});
}

/** The shape Vibe3D's docs catalogue expects back from \`createPreview\`. */
export interface ModelPreview {
  scene: Scene;
  root: Group;
  camera: PerspectiveCamera;
  update(deltaSeconds: number): void;
  dispose(): void;
}

export interface PreviewOptions extends ProceduralModelOptions {
  /** Viewport aspect ratio. */
  aspect?: number;
  /** Seconds into the turntable, so a captured frame is reproducible. */
  time?: number;
  /** Turntable speed. Zero holds the opening three-quarter view. */
  degreesPerSecond?: number;
  elevationDeg?: number;
  margin?: number;
}
${lightsFallback}${cameraFallback}
/**
 * A preview scene for the docs gallery. Everything it adds is preview-only and
 * never reaches the installed model root.
 *
 * The turntable moves the CAMERA rather than the prop: these props are pivoted
 * base-center, not bounding-box-center, so spinning the root would swing it
 * around an off-centre axis and wobble in frame.
 */
export function createPreview(options: PreviewOptions = {}): ModelPreview {
  const {
    aspect = 16 / 9,
    time = 0,
    degreesPerSecond = 18,
    elevationDeg = 20,
    margin = 1.25,
    ...modelOptions
  } = options;

  const root = createModel(modelOptions);

  const scene = new Scene();
  // The backdrop the model's own look-dev targets were authored against, so the
  // gallery tile matches the render the review looked at.
  const lookDev = root.userData.lookDevTargets as { backgroundColor?: string } | undefined;
  scene.background = new Color(lookDev?.backgroundColor ?? '#3A3A3A');
  scene.add(root);

  const lights = ${lightsCall};
  lights.userData.excludeFromExport = true;
  scene.add(lights);

  const camera = new PerspectiveCamera(35, aspect, 0.01, 1000);
  let elapsed = time;
  const aim = () => {
    ${frameCall}(camera, root, {
      margin,
      elevationDeg,
      azimuthDeg: 35 + elapsed * degreesPerSecond,
    });
  };
  aim();

  let disposed = false;

  return {
    scene,
    root,
    camera,
    update(deltaSeconds: number): void {
      if (disposed || degreesPerSecond === 0) return;
      elapsed += deltaSeconds;
      aim();
    },
    dispose(): void {
      if (disposed) return;            // idempotent, per the vibe-model contract
      disposed = true;
      const geometries = new Set<{ dispose(): void }>();
      const materials = new Set<Material>();
      scene.traverse((node: Object3D) => {
        const mesh = node as Mesh;
        if (!mesh.isMesh) return;
        geometries.add(mesh.geometry);
        for (const material of Array.isArray(mesh.material) ? mesh.material : [mesh.material]) {
          if (material) materials.add(material);
        }
      });
      for (const geometry of geometries) geometry.dispose();
      for (const material of materials) {
        // Textures are synthesised per material, so nothing else holds them.
        for (const value of Object.values(material as unknown as Record<string, unknown>)) {
          const texture = value as Texture | null;
          if (texture && (texture as { isTexture?: boolean }).isTexture) texture.dispose();
        }
        material.dispose();
      }
      scene.clear();
    },
  };
}

export default createModel;
`;
}


/** The `model.ts` a prop's directory must hold, from its factory source and whether it ships maps. */
export function entrySource(asset, source, hasArtifacts) {
  return entryModule(asset, previewHelpers(source), hasArtifacts);
}
