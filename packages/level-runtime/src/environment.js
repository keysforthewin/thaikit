import * as THREE from 'three';

import { buildSky, SKY_RADIUS } from './sky.js';

/**
 * The level's image-based lighting: one PMREM-prefiltered environment built
 * from the sky the author already art-directed.
 *
 * three has no runtime global illumination. What it has is two ways to CONSUME
 * precomputed lighting -- `material.lightMap`, which the Cycles bake fills with
 * diffuse irradiance, and `scene.environment`, which adds ambient diffuse AND
 * specular from a prefiltered cubemap. This module is the second one. Without
 * it a shop window, wet asphalt or chrome has nothing to reflect and every
 * `envMapIntensity` an asset factory authored is dead.
 *
 * Shared VERBATIM by `loadLevel()` and the editor, the way `buildSky` is, so
 * the reflections you art-direct are the ones that ship.
 *
 * WHY NOT `scene.environment = theSkyCubemap`
 * ------------------------------------------
 * Because three would prefilter it for you, at the SOURCE's face size.
 * `WebGLEnvironments.getPMREM` auto-PMREMs any `CubeReflectionMapping` texture,
 * and `PMREMGenerator._setSize` reads `texture.image[0].width` -- our faces go
 * up to 3072, giving `_cubeSize` 2048 and a 6144x8192 RGBA16F atlas: 402 MB,
 * and ~805 MB peak because `_allocateTargets` holds an equal ping-pong target
 * while it filters. On the low-end GPUs this kit exists for, that is the whole
 * VRAM budget spent on a backdrop's reflection.
 *
 * `fromScene` is the ONLY entry point that takes an explicit `size`
 * (`fromCubemap`/`fromEquirectangular` have no such parameter), so it is the
 * only way to ask for a 256 probe. It is also the parity win: the probe scene
 * holds a real `buildSky` dome, so the environment is filtered from the sky's
 * own shader -- nadir cut, elevation remap, sRGB decode and all -- rather than
 * from a second interpretation of the same pixels.
 */

/** VRAM of the CubeUV atlas `fromScene` allocates, in bytes. RGBA16F. */
export function environmentBytes(size) {
  const cube = 2 ** Math.floor(Math.log2(size));
  return 3 * Math.max(cube, 112) * (4 * cube) * 8;
}

/**
 * The no-sky fallback: three's own hemisphere ramp, as a dome.
 *
 * `mix(ground, sky, y * 0.5 + 0.5)` is literally what
 * `getHemisphereLightIrradiance` computes, so an environment built from this
 * reproduces the HemisphereLight's diffuse and adds grey specular on top --
 * which is what lets the caller retire the HemisphereLight entirely and keep
 * exactly one ambient code path.
 *
 * Do NOT reach for an empty probe scene instead. `_sceneToCubeUV` would fill it
 * with `scene.background`, which is a single flat colour and loses the ground
 * darkening the author set.
 */
function gradientDome(hemisphere) {
  const material = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: {
      uSky: { value: new THREE.Color(hemisphere?.sky ?? '#8797c2') },
      uGround: { value: new THREE.Color(hemisphere?.ground ?? '#2a2620') },
      uIntensity: { value: hemisphere?.intensity ?? 0.35 },
    },
    vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = normalize( position );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
    `,
    fragmentShader: `
      uniform vec3 uSky;
      uniform vec3 uGround;
      uniform float uIntensity;
      varying vec3 vDir;
      void main() {
        gl_FragColor = vec4( mix( uGround, uSky, vDir.y * 0.5 + 0.5 ) * uIntensity, 1.0 );
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,
  });
  const geometry = new THREE.SphereGeometry(SKY_RADIUS, 32, 24);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = 'env-gradient';
  mesh.frustumCulled = false;
  return {
    group: mesh,
    dispose() {
      geometry.dispose();
      material.dispose();
    },
  };
}

/**
 * Prefilter an environment for this level.
 *
 * @param {THREE.WebGLRenderer} renderer
 * @param {object|null} config       `settings.sky`, as `buildSky` takes it
 * @param {object} opts
 * @param {THREE.Texture|null} opts.base        the sky's base texture, if there is one
 * @param {object|null} opts.hemisphere         `settings.environment.hemisphere`, for the fallback
 * @param {number} opts.size                    probe face size; the atlas is derived from it
 * @returns {{texture: THREE.Texture, size: number, ms: number, bytes: number, source: string, dispose(): void}|null}
 */
export function buildEnvironment(renderer, config, { base = null, hemisphere = null, size = 256 } = {}) {
  if (!renderer) return null;
  const t0 = (typeof performance !== 'undefined' ? performance : Date).now();

  // The probe dome is a DEDICATED build, never the live one. Reparenting the
  // sky the viewport is drawing tears a frame in the editor, and `fromScene`
  // renders whatever is in the scene it is handed -- so the scene must contain
  // the dome and nothing else.
  let dome = null;
  let source = 'none';
  if (base) {
    dome = buildSky(
      {
        ...config,
        base: {
          ...(config?.base ?? {}),
          // Intensity and bearing ride on `scene.environmentIntensity` and
          // `scene.environmentRotation` instead, so dragging either slider
          // costs zero re-prefilters.
          intensity: 1,
          rotationDeg: 0,
          // The shipped default is -0.5, tuned for a dome that fills the
          // screen. Rendering a 3072-face source into a 256 probe face is a
          // ~3.6 level minification; a negative bias there is aliasing baked
          // permanently into the environment.
          lodBias: 0,
        },
        // Additive pinpricks and haze carry negligible irradiance and cost two
        // more shader compiles.
        stars: null,
        clouds: null,
      },
      // `owned: false`: the base texture belongs to whoever loaded it.
      { base, clouds: null, owned: false },
    );
    source = 'sky';
  } else if (hemisphere) {
    dome = gradientDome(hemisphere);
    source = 'hemisphere';
  }
  if (!dome) return null;

  const scene = new THREE.Scene();
  scene.add(dome.group);

  const pmrem = new THREE.PMREMGenerator(renderer);
  let target;
  try {
    // `far` MUST be passed: the default is 100 and the dome sits at
    // SKY_RADIUS * 1.02 = 1224, so the probe would render an empty scene.
    target = pmrem.fromScene(scene, 0, 0.1, SKY_RADIUS * 4, { size });
  } finally {
    // Frees the equal-sized ping-pong target and the GGX/blur materials. The
    // output target survives and is disposed by the caller.
    pmrem.dispose();
    dome.dispose();
    scene.clear();
  }

  const ms = Math.round((typeof performance !== 'undefined' ? performance : Date).now() - t0);
  return {
    texture: target.texture,
    size,
    ms,
    bytes: environmentBytes(size),
    source,
    dispose() {
      target.dispose();
    },
  };
}

/**
 * Put a prefiltered environment on a scene, and hand back the undo.
 *
 * Deliberately separate from `buildEnvironment`: the scene belongs to the host
 * game, not to us. `loadLevel` shows `scene.background` the same courtesy.
 */
export function applyEnvironment(scene, texture, { intensity = 1, rotationDeg = 0 } = {}) {
  const previous = {
    environment: scene.environment,
    intensity: scene.environmentIntensity,
    rotation: scene.environmentRotation.clone(),
  };
  scene.environment = texture;
  scene.environmentIntensity = intensity;
  scene.environmentRotation.set(0, THREE.MathUtils.degToRad(rotationDeg), 0);
  return function restore() {
    scene.environment = previous.environment;
    scene.environmentIntensity = previous.intensity;
    scene.environmentRotation.copy(previous.rotation);
  };
}

/**
 * How bright the environment is applied, given the level's own settings.
 *
 * TWO dials reach it, and only one of them is the sky's own brightness:
 *
 *   - `sky.base.intensity` says how bright the sky IS. It multiplies the
 *     backdrop dome's pixels in `buildSky`, and it must multiply the light that
 *     sky casts too -- otherwise turning the sky up brightens the picture
 *     behind the level and leaves everything in it exactly as dark, which is
 *     what "the intensity does nothing" means when you hear it. The PREFILTER
 *     cannot carry it: `buildEnvironment` deliberately forces `intensity: 1` so
 *     that dragging the dial costs no re-prefilter, so it is folded in here
 *     instead, on `scene.environmentIntensity`, for free.
 *   - `environment.ibl.intensity` is the ambient trim on top of that.
 *
 * Only when the probe was built from a BASE TEXTURE, though. With no sky
 * picture the source is the hemisphere ramp, whose own intensity is already
 * baked into the prefiltered pixels -- multiplying by a sky that is not being
 * drawn would apply it twice.
 */
export function environmentIntensity({ ibl = null, sky = null, base = null } = {}) {
  const trim = ibl?.intensity ?? 1;
  return base ? trim * (sky?.base?.intensity ?? 1) : trim;
}
