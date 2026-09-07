/**
 * The sky: a base backdrop, an additive drifting cloud dome, and a procedural
 * star field.
 *
 * This module is shared VERBATIM between the editor viewport and the game
 * runtime -- it imports nothing but three, and both `web/client`'s `<SkyDome>`
 * and `loadLevel()` call `buildSky`. That is deliberate: a star shader that
 * differs between the thing you author in and the thing you ship is a sky you
 * cannot art-direct. The two callers differ only in where the textures come
 * from (URLs under `/levels/<id>/sky/` in the editor, KTX2 images embedded in
 * the baked GLB at runtime).
 *
 * Three things about the domes that are not decoration:
 *
 * - Neither dome is ever a raycast target. The editor casts the camera's
 *   forward ray through the centre of the frame to decide where a new object
 *   lands; a dome around the camera is the first thing that ray meets, so
 *   without `raycast = () => {}` every placement would land on the sky.
 * - Both ride the camera. The group is moved to the camera's position every
 *   frame, so walking never approaches the sky and the dome radius is a
 *   rendering convenience rather than a world size. It only has to sit inside
 *   the camera's far plane.
 * - The stars and clouds are additive with `depthWrite: false` but they DO
 *   depth-test. A negative `renderOrder` is not enough on its own: an additive
 *   material is `transparent`, so it is sorted into the TRANSPARENT queue,
 *   which three draws AFTER every opaque object regardless of render order --
 *   `renderOrder` only sorts within that queue. With `depthTest: false` the
 *   stars therefore painted over solid geometry, and you could see the field
 *   through a building. Testing (but not writing) depth puts them behind
 *   anything already in the depth buffer while still letting the three domes
 *   stack on each other, since none of them writes depth. Only the base
 *   backdrop skips the test: it is opaque, so it is drawn first in the opaque
 *   queue, before there is any depth to test against.
 */
import * as THREE from 'three';
// The one import that is not three: what a nadir setting MEANS belongs with the
// schema that declares it, and the bake resolves it from the same function.
import { resolveNadirFade } from '@thai-kit/level-schema';

/** Comfortably inside the editor's 3000 m far plane, and any sane game's. */
export const SKY_RADIUS = 1200;

/**
 * How far above the horizon the cloud layer fades in. Not a setting: a cloud
 * that reaches the skyline is a haze over the ground, and there is no level
 * that wants one.
 */
const CLOUD_HORIZON_FADE = 0.06;

/**
 * The star field.
 *
 * Screen-space noise twinkles as the camera turns, which reads as a dirty lens
 * rather than a sky, so everything is keyed off the world-space view DIRECTION:
 * a star sits at a fixed bearing and stays there. The direction is diced into
 * cells, each cell holds at most one star at a hashed offset with a hashed
 * magnitude, and the twinkle is a per-star phase and rate so the field
 * glimmers unevenly instead of pulsing as one.
 *
 * Three things it learned (2026-09-07), each of which had made the field read
 * as a pattern rather than a sky: the hash must not be the fract(sin) one,
 * which strings the hits along the lattice axes; a star's size is in PIXELS
 * (off `fwidth` of the direction), not in cell units, or every star is one
 * texel; and magnitude is a LOG scale, or every star is the same grey.
 *
 * `uDensity` scales the cell grid, so more density means smaller cells and more
 * stars rather than bigger ones.
 */
const STAR_VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const STAR_FRAG = /* glsl */ `
uniform float uTime;
uniform float uDensity;
uniform float uBrightness;
uniform float uTwinkleSpeed;
uniform vec3  uColor;
uniform float uHorizonFade;
varying vec3 vDir;

// Sine-free hashes (Dave Hoskins). The old fract(sin(dot(p, k)) * 43758.5)
// hash correlates along the lattice axes -- sin of a large argument loses its
// low bits in float, and the dot with fixed vectors makes neighbouring cells'
// arguments differ by a constant -- so the cells that passed the hit test sat
// in ROWS and the field read as stars strung on lines. These do not.
vec3 hash33(vec3 p3) {
  p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yxz + 33.33);
  return fract((p3.xxy + p3.yxx) * p3.zyx);
}
float hash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}

// Smooth value noise on a coarse grid: the large-scale unevenness of a real
// sky, where stars gather in some patches and thin out in others.
float vnoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i);
  float n100 = hash13(i + vec3(1.0, 0.0, 0.0));
  float n010 = hash13(i + vec3(0.0, 1.0, 0.0));
  float n110 = hash13(i + vec3(1.0, 1.0, 0.0));
  float n001 = hash13(i + vec3(0.0, 0.0, 1.0));
  float n101 = hash13(i + vec3(1.0, 0.0, 1.0));
  float n011 = hash13(i + vec3(0.0, 1.0, 1.0));
  float n111 = hash13(i + vec3(1.0, 1.0, 1.0));
  return mix(mix(mix(n000, n100, f.x), mix(n010, n110, f.x), f.y),
             mix(mix(n001, n101, f.x), mix(n011, n111, f.x), f.y), f.z);
}

void main() {
  vec3 dir = normalize(vDir);

  // How much of the sky one screen pixel covers, in direction units (radians,
  // near enough). Everything below is sized in PIXELS off this, so a star is
  // the same object at 720p and 4K and at any field of view -- the old shader
  // sized stars in cell units, and at the editor's 15 px/deg nearly every star
  // was under one pixel: one texel of the same grey, whatever its magnitude.
  float pix = max(length(fwidth(dir)), 1e-5);

  // Dice the sphere of directions into cells; each cell holds at most one
  // star, and the 27 cells around this one are searched so a star near a cell
  // boundary is not clipped in half. The cell count sets the MAXIMUM density
  // (one star per cell) and how far a bright star's glow may reach before it
  // crosses out of the neighbourhood -- about a cell. 160 makes a cell 0.36
  // degrees, so the largest glow still fits at the editor's 90-degree fov.
  float cells = 160.0 * clamp(uDensity, 0.05, 8.0);
  vec3 gp = dir * cells;
  vec3 base = floor(gp);

  // Clumping: the hit rate below is scaled by a two-octave noise over the
  // dome, so the field has rich patches and sparse ones instead of the even
  // Poisson sprinkle one hash threshold gives. Evaluated at the pixel rather
  // than per star -- it is smooth over ten degrees, so every star in the
  // neighbourhood sees the same value.
  float n = 0.6 * vnoise(dir * 5.0 + 11.3) + 0.4 * vnoise(dir * 13.0 + 3.7);
  float clump = 0.25 + 1.6 * pow(n, 1.6);

  vec3 acc = vec3(0.0);
  for (int x = -1; x <= 1; x++) {
    for (int y = -1; y <= 1; y++) {
      for (int z = -1; z <= 1; z++) {
        vec3 cell = base + vec3(float(x), float(y), float(z));
        vec3 h = hash33(cell);
        if (h.z > 0.022 * clump) continue;

        // Independent draws for the star's own properties, so magnitude never
        // correlates with position.
        vec3 g = hash33(cell + 17.31);
        vec3 k = hash33(cell + 41.7);

        // Position: jittered inside its cell.
        vec3 starDir = normalize((cell + 0.5 + (h - 0.5) * 0.8) / cells);
        float d = distance(dir, starDir);

        // Magnitude with the real sky's distribution: the count of stars
        // brighter than L goes as L^-1.25 (about three times as many per
        // magnitude step), spanning a 90:1 range. Inverting that CDF puts 6%
        // of stars above a tenth of full brightness and 1% above a third --
        // a handful of anchors over a field of faint specks. A plain
        // exponential had a quarter of them bright, and read as snow.
        float lum = pow(1.0 + 276.0 * g.x, -0.8);

        // Size in pixels. Faint stars are points; bright ones bloom, which is
        // the glare a camera or an eye puts around anything bright, and it is
        // what makes a bright star read as BRIGHT rather than merely white.
        float radPx = 0.55 + 1.9 * sqrt(lum);
        float rad = radPx * pix;
        // A sub-pixel star cannot draw smaller than a pixel, so keep its
        // ENERGY instead: widen it to the pixel and dim it by the area ratio.
        // Without this a faint star was on or off by where it fell in a pixel.
        float drawn = max(rad, 0.7 * pix);
        float energy = (rad * rad) / (drawn * drawn);
        // Never let a glow reach out of the 27-cell neighbourhood.
        drawn = min(drawn, 0.9 / cells);

        float q = d / drawn;
        // A Gaussian core, and a wider, fainter halo on the bright ones.
        float core = exp(-4.0 * q * q);
        float halo = exp(-0.7 * q * q) * 0.10 * lum;

        // Twinkle: two incommensurate rates per star so it flickers rather
        // than pulses; a small amplitude, smaller still on bright stars, and
        // stronger toward the horizon where there is more air in the way. A
        // star is never switched off by it -- it wavers, it does not blink.
        float t = uTime * uTwinkleSpeed * (0.7 + 2.0 * g.z);
        float ph = g.y * 6.2831853;
        float wave = 0.6 * sin(t + ph) + 0.4 * sin(1.73 * t + 2.1 * ph);
        float amp = 0.30 * (1.0 - 0.6 * lum) * (1.0 + 1.2 * (1.0 - clamp(dir.y, 0.0, 1.0)));
        float twinkle = 1.0 + amp * wave;

        // Colour temperature: most stars white, a tail to orange and to
        // blue-white. Normalised around 1 so uColor stays the level's tint.
        vec3 warm = vec3(1.00, 0.78, 0.58);
        vec3 cool = vec3(0.72, 0.82, 1.00);
        vec3 tint = mix(mix(warm, cool, smoothstep(0.15, 0.85, k.x)), vec3(1.0), 0.45);

        acc += tint * (lum * energy * (core + halo) * twinkle);
      }
    }
  }

  // Fade out toward and below the horizon -- a star field that runs into the
  // ground plane reads as a hole in the world.
  float fade = smoothstep(uHorizonFade - 0.05, uHorizonFade + 0.35, dir.y);
  vec3 v = acc * (2.2 * uBrightness * fade);
  if (max(v.r, max(v.g, v.b)) <= 0.001) discard;
  gl_FragColor = vec4(uColor * v, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

/**
 * The clouds.
 *
 * A `MeshBasicMaterial` would very nearly do this, and does not, for one
 * reason: the dome is a sphere, so an additive map on it puts cloud UNDER the
 * horizon as well as over it -- a bright haze across the ground half of every
 * frame. A hemisphere instead leaves a hard cut along the skyline. So the fade
 * has to be in the shader, and once it is there the drift and the tint may as
 * well be too.
 *
 * `uOffset` is the drift, in UV. The map wraps in U, so turning the layer is a
 * texture offset with no seam to hide and no matrix to recompute per frame.
 */
const CLOUD_VERT = /* glsl */ `
varying vec3 vDir;
varying vec2 vUv;
void main() {
  vDir = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const CLOUD_FRAG = /* glsl */ `
uniform sampler2D uMap;
uniform vec3  uColor;
uniform float uOpacity;
uniform vec2  uRepeat;
uniform float uOffset;
uniform float uHorizonFade;
varying vec3 vDir;
varying vec2 vUv;

void main() {
  // A sphere's own v runs pole to pole, so sampling it directly spends HALF the
  // plate under the horizon where the fade below throws it away -- the visible
  // sky gets only the top half of the image, squashed. Remap so the whole plate
  // spans horizon to zenith.
  float vv = clamp((vUv.y - 0.5) * 2.0, 0.0, 1.0);
  vec4 texel = texture2D(uMap, vec2(vUv.x * uRepeat.x + uOffset, vv * uRepeat.y));
  // Additive, so the cloud's own alpha AND its luminance both thin it out --
  // a plate with no alpha channel still reads, and a black sky adds nothing.
  float amount = texel.a * max(max(texel.r, texel.g), texel.b);
  float fade = smoothstep(uHorizonFade - 0.02, uHorizonFade + 0.30, normalize(vDir).y);
  float v = amount * uOpacity * fade;
  if (v <= 0.002) discard;
  gl_FragColor = vec4(texel.rgb * uColor * v, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

/**
 * The base backdrop, as a DOME rather than `scene.background`.
 *
 * `scene.background` looks like the obvious home for a panorama and is the
 * wrong one here, for two measured reasons. Three does not sample an equirect
 * background directly: `WebGLEnvironments.getCube` converts it into a
 * `WebGLCubeRenderTarget` sized by the texture's HEIGHT, so a 2048x1024
 * panorama silently allocates six 1024-square render targets -- 24 MB of VRAM
 * for a backdrop, on a kit whose whole premise is low-end GPUs. And that
 * conversion copies `minFilter` and `generateMipmaps` off the source: a KTX2
 * texture arrives with mipmap filtering and `generateMipmaps: false`, so the
 * render target has no mip chain, is incomplete, and samples BLACK. The sky
 * rendered correctly in the editor (an uncompressed texture generates its own
 * mips) and vanished in the shipped level.
 *
 * A dome samples the panorama once, as itself: no conversion, no render
 * target, one code path for the editor's uncompressed image and the runtime's
 * compressed one, and rotation for free because the dome can simply turn.
 *
 * `CUBE_SOURCE` swaps the sampler so the editor can preview six real faces
 * before the bake resamples them into one panorama.
 */
const BASE_VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const BASE_FRAG = /* glsl */ `
#ifdef CUBE_SOURCE
uniform samplerCube uCube;
uniform float uLodBias;
#else
uniform sampler2D uMap;
#endif
uniform float uIntensity;
#ifdef PANORAMIC_SOURCE
uniform vec2 uElevation;   // the elevation the first and last rows sit at, radians
uniform vec3 uNadirColor;
uniform vec2 uNadirFade;   // start, end -- radians BELOW the horizon
#endif
varying vec3 vDir;

void main() {
  vec3 dir = normalize(vDir);
#ifdef CUBE_SOURCE
  // A negative bias against trilinear's over-blur.
  //
  // A sky cubemap authored at more px/degree than the screen has is MINIFIED,
  // so the GPU picks a fractional mip and blends in a half-resolution level --
  // correct filtering, and softer than the display can actually show. Dropping
  // the selection by a fraction of a level trades a little aliasing back for
  // the detail that was paid for. Turning the chain off instead is the wrong
  // trade: at a wide FOV or on a small viewport the backdrop is minified
  // several times over and city lights crawl as the camera turns.
  vec4 texel = textureCube(uCube, dir, uLodBias);
#else
  // Three's own equirect convention, so a panorama authored against the
  // editor's cube preview lands the same way round after the bake resamples it.
  float lat = asin(clamp(dir.y, -1.0, 1.0));
  float u = atan(dir.z, dir.x) * 0.15915494 + 0.5;
  #ifdef PANORAMIC_SOURCE
  // A panorama's rows need not span the whole sphere -- a sky-only one covers
  // the horizon to the zenith and nothing below. Map the covered range, and
  // let the fade below deal with everything outside it.
  float v = 1.0 - (uElevation.y - lat) / (uElevation.y - uElevation.x);
  vec4 texel = texture2D(uMap, vec2(u, v));
  // The synthesised ground, in the SHADER rather than in the image, because
  // this is the preview: the bake bakes exactly this fade into the cube faces,
  // so what is authored here is what ships. Below the horizon a panorama has
  // only invented pixels, and the equirect projection crushes the nadir into
  // one row that would become a whole face underfoot.
  //
  // A 'cut' nadir arrives here as a fade a third of a degree wide starting AT
  // the horizon: a hard edge with just enough feather not to draw a
  // stair-stepped skyline. Same arithmetic as the fade, so there is no second
  // branch here to keep in step with the bake.
  float below = smoothstep(uNadirFade.x, uNadirFade.y, -lat);
  texel.rgb = mix(texel.rgb, uNadirColor, below);
  #else
  vec4 texel = texture2D(uMap, vec2(u, lat * 0.31830989 + 0.5));
  #endif
#endif
  gl_FragColor = vec4(texel.rgb * uIntensity, 1.0);
  // A hand-written ShaderMaterial gets none of three's output pipeline for
  // free. Without these two the dome writes LINEAR values into a buffer the
  // renderer already treats as encoded, and a pure blue sky renders half dark.
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

/** An inside-out dome: a sphere whose faces point at the camera in the middle. */
function domeGeometry(radius, widthSegments = 48, heightSegments = 32) {
  return new THREE.SphereGeometry(radius, widthSegments, heightSegments);
}

/**
 * Build the sky.
 *
 * @param {object} config              a manifest `sky` block, or the editor's `settings.sky`
 * @param {THREE.Texture} [textures.base]    equirectangular backdrop, already loaded
 * @param {THREE.Texture} [textures.clouds]  cloud map with a usable luminance, already loaded
 * @param {boolean} [textures.owned]   dispose the given textures in dispose()
 * @returns {{ group: THREE.Group, update: Function, dispose: Function }}
 */
export function buildSky(config, { base = null, clouds = null, owned = true } = {}) {
  const group = new THREE.Group();
  group.name = 'sky';
  // The domes are drawn wherever the camera is, and are never culled against
  // a frustum they always fill.
  group.frustumCulled = false;

  const parts = [];

  let baseMat = null;
  if (base) {
    const isCube = Boolean(base.isCubeTexture);
    base.colorSpace = THREE.SRGBColorSpace;
    if (!isCube) {
      // A dome samples the panorama directly, so it must NOT carry the equirect
      // mapping -- that is what would send it through the cube conversion above.
      base.mapping = THREE.UVMapping;
      // Wrap in U so the seam at the back of the sky blends instead of clamping.
      base.wrapS = THREE.RepeatWrapping;
      base.wrapT = THREE.ClampToEdgeWrapping;
      // NO MIPMAPS, deliberately. An equirect's u sweeps the full panorama
      // across a few pixels at the poles, so automatic mip selection picks the
      // smallest level there and the zenith collapses to the average colour of
      // the whole sky -- a grey disc directly overhead. A backdrop is low
      // frequency and fills the frame, so the aliasing that mips would prevent
      // costs less than the artefact they cause.
      base.minFilter = THREE.LinearFilter;
      base.magFilter = THREE.LinearFilter;
      base.generateMipmaps = false;
      base.needsUpdate = true;
    }
    // A `panoramic` base is a 2D panorama the EDITOR is previewing: the shipped
    // level gets the same sky as a cubemap with the ground already resampled
    // in, so it takes the cube branch above and needs none of this.
    const panoramic = !isCube && config?.base?.mode === 'panoramic';
    const nadir = config?.base?.nadir ?? {};
    const nadirFade = resolveNadirFade(nadir);
    const elevation = config?.base?.elevation ?? {};

    baseMat = new THREE.ShaderMaterial({
      defines: isCube ? { CUBE_SOURCE: '' } : panoramic ? { PANORAMIC_SOURCE: '' } : {},
      uniforms: {
        ...(isCube ? { uCube: { value: base }, uLodBias: { value: config?.base?.lodBias ?? -0.5 } } : { uMap: { value: base } }),
        ...(panoramic
          ? {
            uElevation: {
              value: new THREE.Vector2(
                THREE.MathUtils.degToRad(elevation.minDeg ?? -90),
                THREE.MathUtils.degToRad(elevation.maxDeg ?? 90),
              ),
            },
            uNadirColor: { value: new THREE.Color(nadir.color ?? '#202020') },
            uNadirFade: {
              value: new THREE.Vector2(
                THREE.MathUtils.degToRad(nadirFade.startDeg),
                THREE.MathUtils.degToRad(nadirFade.endDeg),
              ),
            },
          }
          : {}),
        uIntensity: { value: config?.base?.intensity ?? 1 },
      },
      vertexShader: BASE_VERT,
      fragmentShader: BASE_FRAG,
      side: THREE.BackSide,
      depthWrite: false,
      depthTest: false,
      fog: false,
    });
    // Outermost and first: the backdrop everything else paints over.
    const mesh = new THREE.Mesh(domeGeometry(SKY_RADIUS * 1.02, 64, 40), baseMat);
    mesh.name = 'sky-base';
    mesh.renderOrder = -30;
    mesh.frustumCulled = false;
    mesh.raycast = () => {};
    group.add(mesh);
    parts.push(mesh);
  }

  const starCfg = config?.stars ?? null;
  let starMat = null;
  if (starCfg && starCfg.enabled !== false) {
    starMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uDensity: { value: starCfg.density ?? 1 },
        uBrightness: { value: starCfg.brightness ?? 1 },
        uTwinkleSpeed: { value: starCfg.twinkleSpeed ?? 1 },
        uColor: { value: new THREE.Color(starCfg.color ?? '#dfe6ff') },
        uHorizonFade: { value: starCfg.horizonFade ?? 0.25 },
      },
      vertexShader: STAR_VERT,
      fragmentShader: STAR_FRAG,
      side: THREE.BackSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      // Tested, not written: an additive material lands in the transparent
      // queue, which is drawn after all solid geometry, so without this the
      // star field shows through every building.
      depthTest: true,
      fog: false,
    });
    const mesh = new THREE.Mesh(domeGeometry(SKY_RADIUS), starMat);
    mesh.name = 'sky-stars';
    mesh.renderOrder = -20;
    mesh.frustumCulled = false;
    mesh.raycast = () => {};
    group.add(mesh);
    parts.push(mesh);
  }

  const cloudCfg = config?.clouds ?? null;
  let cloudMat = null;
  let cloudMap = null;
  if (cloudCfg && clouds) {
    cloudMap = clouds;
    cloudMap.wrapS = THREE.RepeatWrapping;
    cloudMap.wrapT = THREE.ClampToEdgeWrapping;
    cloudMap.colorSpace = THREE.SRGBColorSpace;
    cloudMat = new THREE.ShaderMaterial({
      uniforms: {
        uMap: { value: cloudMap },
        uColor: { value: new THREE.Color(cloudCfg.color ?? '#ffffff') },
        uOpacity: { value: cloudCfg.opacity ?? 0.5 },
        uRepeat: { value: new THREE.Vector2(cloudCfg.repeat ?? 2, 1) },
        uOffset: { value: 0 },
        uHorizonFade: { value: CLOUD_HORIZON_FADE },
      },
      vertexShader: CLOUD_VERT,
      fragmentShader: CLOUD_FRAG,
      side: THREE.BackSide,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      // As the stars: occluded by anything solid in front of them.
      depthTest: true,
      fog: false,
    });
    // Slightly inside the stars, and flattened: a cloud layer sits ON the sky,
    // not around the player like a ball.
    const mesh = new THREE.Mesh(domeGeometry(SKY_RADIUS * 0.98), cloudMat);
    mesh.name = 'sky-clouds';
    mesh.scale.set(1, cloudCfg.heightScale ?? 0.35, 1);
    mesh.renderOrder = -10;
    mesh.frustumCulled = false;
    mesh.raycast = () => {};
    group.add(mesh);
    parts.push(mesh);
  }

  // The backdrop's bearing. Only the base turns: the clouds have their own
  // drift and the stars are a fixed field, and turning those with it would make
  // the rotation control look like it moved the whole world.
  if (baseMat && (config?.base?.rotationDeg ?? 0) !== 0) {
    parts[0].rotation.y = THREE.MathUtils.degToRad(config.base.rotationDeg);
  }

  // Degrees per minute -> UV per second. The cloud map wraps in U, so drifting
  // the offset is a yaw of the whole layer with no seam to hide.
  const driftPerSecond = ((cloudCfg?.driftDegPerMin ?? 0) / 360) / 60;

  let time = 0;
  return {
    group,
    base: baseMat,
    stars: starMat,
    clouds: cloudMat,
    /** @param {number} dt seconds @param {THREE.Vector3} [cameraPosition] */
    update(dt, cameraPosition) {
      const step = Number.isFinite(dt) ? dt : 0;
      time += step;
      if (starMat) starMat.uniforms.uTime.value = time;
      if (cloudMat && driftPerSecond) {
        cloudMat.uniforms.uOffset.value = (cloudMat.uniforms.uOffset.value + driftPerSecond * step) % 1;
      }
      if (cameraPosition) group.position.copy(cameraPosition);
    },
    dispose() {
      group.removeFromParent();
      for (const mesh of parts) mesh.geometry.dispose();
      baseMat?.dispose();
      starMat?.dispose();
      cloudMat?.dispose();
      if (owned) {
        base?.dispose();
        clouds?.dispose();
      }
    },
  };
}
