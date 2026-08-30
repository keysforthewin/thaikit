/**
 * Resample a panorama into a cubemap, in the browser, at load time.
 *
 * The editor used to hand the panorama to `buildSky` as itself and let the dome
 * shader do the equirect lookup per fragment. That is the same picture and a
 * very different bill. An 8192x2048 backdrop is 64 MB of RGBA that has to ship
 * with NO mip chain -- an equirect's `u` sweeps the whole panorama across a few
 * texels at the poles, so automatic mip selection collapses the zenith to the
 * mean colour of the sky -- and an unmipped 64 MB texture sampled across a
 * full-screen dome misses the texture cache on nearly every fragment. It reads
 * as "the editor got slow when I added a sky", because it is.
 *
 * A cubemap has neither problem: a face is an ordinary square, so it carries a
 * real mip chain, so the texels a frame actually touches are a screenful rather
 * than the whole plate -- and WebGL2 filters the seams unconditionally. So the
 * panorama is resampled ONCE, on the GPU, the moment it lands, and the source
 * texture is disposed straight afterwards. What is resident afterwards is 33 MB
 * of mipped cube instead of 64 MB of unmipped equirect.
 *
 * Face size is `width / PI` capped, the same arithmetic `faceSizeFor` uses in
 * the bake and under the same ceiling, so the preview resolves exactly what the
 * level will. It is PI and not 4 because a cube face is a TANGENT plane: a face
 * spans 90 degrees, but its density is lowest at the centre -- one pixel step
 * there is `atan(2 / size)`, so `size * PI / 360` px/deg, a factor of PI/4
 * below the `size / 90` the 90-over-360 argument suggests. `width / 4` therefore
 * threw away 21% of an 8192-wide panorama's linear resolution exactly where the
 * camera is pointed, and read as "the sky is blurry".
 *
 * The synthesised ground is resampled IN, exactly as the bake does it, rather
 * than left to the dome's shader. That is the real prize: the editor's preview
 * and the shipped level now run the same code path -- `buildSky`'s
 * `CUBE_SOURCE` branch over a mipped cubemap, `lodBias` and all -- instead of
 * the panoramic branch previewing an approximation of what the bake would
 * later produce.
 *
 * The arithmetic is `BASE_FRAG`'s `PANORAMIC_SOURCE` block, unchanged, and it
 * has to stay that way: it is also `equirectToCube()` in
 * `scripts/level/equirect-to-cube.mjs` and the fade in
 * `pipeline/sky.mjs`. Three implementations of one projection, and a
 * disagreement between any two of them is a sky that turns a quarter of the way
 * round between the editor and the game.
 */
import * as THREE from 'three';
import { resolveNadirFade } from '@thai-kit/level-schema';

/**
 * The ceiling on a PREVIEW face. The bake's, so the editor shows what ships.
 *
 * This was 1024 -- half the bake's -- to hold the preview to 33 MB, because
 * nothing here is compressed: six 2048 faces are 6 x 2048^2 x 4 bytes plus a
 * third again for the mips, about 134 MB, where the shipped cubemap is six
 * ETC1S faces at half a byte per pixel. That bought a preview a whole mip
 * softer than the level, and it was the only place in the sky pipeline where
 * the editor knowingly did not show what ships. On a machine with VRAM to spare
 * that is the wrong trade: art-directing a sky against a preview you know is
 * soft means you cannot tell a soft SOURCE from a soft preview, which is the
 * one judgement this tab exists to support.
 *
 * The VRAM is real and it is the cost of the decision -- 217 MB for the 2608
 * face an 8192 panorama derives, 302 MB if a source ever reaches this ceiling.
 * It is also bounded: `equirectToCubeTexture` clamps to the GPU's own
 * `maxCubemapSize`, and the face is still `width / PI`, so only a panorama
 * wider than 9650 px reaches 3072 at all. A 4096-wide plate previews at 1304.
 */
export const PREVIEW_MAX_FACE = 3072;

/**
 * The face edge for a panorama of this width. Mirrors `faceSizeFor` in
 * `scripts/level/pipeline/sky.mjs`; keep the two the same, or the editor
 * previews a sharpness the bake will not ship.
 */
export function faceSizeFor(width, maxFace = PREVIEW_MAX_FACE) {
  const ideal = Math.round(width / Math.PI);
  return Math.max(256, Math.floor(Math.min(ideal, maxFace) / 4) * 4);
}

/**
 * `transformDirection(position, modelMatrix)`, spelled out. The cube camera
 * sits at the origin inside a box, so a vertex's world position IS the
 * direction that texel looks along.
 */
const VERT = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = normalize((modelMatrix * vec4(position, 0.0)).xyz);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

/**
 * There is deliberately no `<colorspace_fragment>` here, the same way three's
 * own `CubemapFromEquirect` shader has none. The source is tagged sRGB so the
 * hardware decodes it to linear on the read, and the render target is tagged
 * sRGB so the hardware encodes it again on the write -- the pair round-trips,
 * and an explicit conversion would apply the encode twice. The nadir colour is
 * a `THREE.Color`, so it is already in the working (linear) space the texel is
 * in and the mix happens where the runtime's does.
 */
const FRAG = /* glsl */ `
uniform sampler2D uMap;
uniform vec2 uMapSize;     // the panorama in texels, for the reconstruction filter
uniform vec2 uElevation;   // the elevation the first and last rows sit at, radians
uniform vec3 uNadirColor;
uniform vec2 uNadirFade;   // start, end -- radians BELOW the horizon
varying vec3 vDir;

// Catmull-Rom, the same weights sampler() in scripts/level/equirect-to-cube.mjs
// uses, and for the same reason: faceSizeFor derives a face that carries the
// panorama's own texel density, so this resample runs at ~1:1 on arbitrary
// fractional phase -- where hardware bilinear is a 2x2 box blur that costs 40%
// of the high-frequency detail. Measured on an 8192 plate's +X face at 2608:
// nearest 35.02, bilinear 21.06, Catmull-Rom 25.58, against the source's 34.16.
//
// Sixteen taps, but this shader runs SIX TIMES in the life of a panorama and
// never again -- the faces are rendered once into a cube render target at load.
vec4 cubicWeights(float t) {
  float t2 = t * t;
  float t3 = t2 * t;
  return vec4(
    -0.5 * t3 + t2 - 0.5 * t,
     1.5 * t3 - 2.5 * t2 + 1.0,
    -1.5 * t3 + 2.0 * t2 + 0.5 * t,
     0.5 * t3 - 0.5 * t2
  );
}

// The taps go through texture2D rather than texelFetch, so the sampler's own
// wrapS = Repeat carries the azimuth seam and wrapT = ClampToEdge repeats the
// top and bottom rows -- exactly what the Node resampler does by hand.
//
// Written out rather than looped: indexing a vec4 by a loop counter is a
// constant-index-expression the ESSL1 spec allows and some drivers refuse, and
// a sky that compiles on the development machine and not on a user's is the
// worst way to find that out.
vec3 tapRow(vec2 base, float dy, vec4 wx) {
  vec3 r = vec3(0.0);
  r += texture2D(uMap, (base + vec2(-1.0, dy) + 0.5) / uMapSize).rgb * wx.x;
  r += texture2D(uMap, (base + vec2( 0.0, dy) + 0.5) / uMapSize).rgb * wx.y;
  r += texture2D(uMap, (base + vec2( 1.0, dy) + 0.5) / uMapSize).rgb * wx.z;
  r += texture2D(uMap, (base + vec2( 2.0, dy) + 0.5) / uMapSize).rgb * wx.w;
  return r;
}

vec3 sampleCatmullRom(vec2 uv) {
  vec2 p = uv * uMapSize - 0.5;
  vec2 f = fract(p);
  vec2 base = floor(p);
  vec4 wx = cubicWeights(f.x);
  vec4 wy = cubicWeights(f.y);
  vec3 acc = tapRow(base, -1.0, wx) * wy.x
           + tapRow(base,  0.0, wx) * wy.y
           + tapRow(base,  1.0, wx) * wy.z
           + tapRow(base,  2.0, wx) * wy.w;
  // Cubic overshoots at an edge; that is the sharpening, and it still has to
  // land in range before it is written into an 8-bit render target.
  return clamp(acc, 0.0, 1.0);
}

void main() {
  vec3 dir = normalize(vDir);
  float lat = asin(clamp(dir.y, -1.0, 1.0));
  float u = atan(dir.z, dir.x) * 0.15915494 + 0.5;
  float v = 1.0 - (uElevation.y - lat) / (uElevation.y - uElevation.x);
  vec3 rgb = sampleCatmullRom(vec2(u, v));
  float below = smoothstep(uNadirFade.x, uNadirFade.y, -lat);
  rgb = mix(rgb, uNadirColor, below);
  gl_FragColor = vec4(rgb, 1.0);
}
`;

/**
 * Turn a loaded panorama image into a cubemap.
 *
 * @param {THREE.WebGLRenderer} renderer
 * @param {HTMLImageElement|ImageBitmap} image  the panorama, already decoded
 * @param {object} base                         `settings.sky.base`
 * @param {number} [options.maxFace]
 * @returns {{ texture: THREE.CubeTexture, size: number, dispose: () => void }}
 */
export function equirectToCubeTexture(renderer, image, base = {}, { maxFace = PREVIEW_MAX_FACE } = {}) {
  const width = image.width ?? 2048;
  // A driver ceiling is not a thing to discover as a black sky.
  const cap = Math.min(maxFace, renderer.capabilities?.maxCubemapSize ?? maxFace);
  const size = faceSizeFor(width, cap);
  // WebGL2 only GUARANTEES a 2048 cube, so on a low-end GPU the driver ceiling
  // binds before ours and the preview really is softer than the level. Say so,
  // or it is indistinguishable from a soft panorama -- the one judgement this
  // whole path exists to support.
  if (size < faceSizeFor(width, maxFace)) {
    console.warn(
      `[sky] this GPU caps cube faces at ${renderer.capabilities?.maxCubemapSize}px, so the preview is ` +
      `${size}² (${((size * Math.PI) / 360).toFixed(1)} px/deg) where the baked level ships ` +
      `${faceSizeFor(width, maxFace)}² (${((faceSizeFor(width, maxFace) * Math.PI) / 360).toFixed(1)} px/deg).`,
    );
  }

  const source = new THREE.Texture(image);
  source.colorSpace = THREE.SRGBColorSpace;
  source.mapping = THREE.UVMapping;
  // The panorama wraps in azimuth, so the seam at the back of the sky has to
  // blend across rather than clamp -- otherwise the two faces either side of it
  // meet on a repeated column.
  source.wrapS = THREE.RepeatWrapping;
  source.wrapT = THREE.ClampToEdgeWrapping;
  source.minFilter = THREE.LinearFilter;
  source.magFilter = THREE.LinearFilter;
  source.generateMipmaps = false;
  source.needsUpdate = true;

  const target = new THREE.WebGLCubeRenderTarget(size, {
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
    magFilter: THREE.LinearFilter,
  });
  // What makes the write encode: see the shader comment above.
  target.texture.colorSpace = THREE.SRGBColorSpace;
  target.texture.name = 'sky-base-cube';

  const nadir = base?.nadir ?? {};
  const fade = resolveNadirFade(nadir);
  const elevation = base?.elevation ?? {};

  const material = new THREE.ShaderMaterial({
    name: 'SkyCubeFromPanorama',
    uniforms: {
      uMap: { value: source },
      uMapSize: { value: new THREE.Vector2(image.width ?? 2048, image.height ?? 1024) },
      uElevation: {
        value: new THREE.Vector2(
          THREE.MathUtils.degToRad(elevation.minDeg ?? -90),
          THREE.MathUtils.degToRad(elevation.maxDeg ?? 90),
        ),
      },
      uNadirColor: { value: new THREE.Color(nadir.color ?? '#202020') },
      uNadirFade: {
        value: new THREE.Vector2(
          THREE.MathUtils.degToRad(fade.startDeg),
          THREE.MathUtils.degToRad(fade.endDeg),
        ),
      },
    },
    vertexShader: VERT,
    fragmentShader: FRAG,
    side: THREE.BackSide,
    blending: THREE.NoBlending,
    depthTest: false,
    depthWrite: false,
  });

  const mesh = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), material);
  // A CubeCamera renders the six faces in three's own order and restores the
  // renderer's target, active face and mipmap level afterwards -- which is why
  // this is worth borrowing rather than driving `setRenderTarget` by hand.
  const camera = new THREE.CubeCamera(1, 10, target);
  camera.update(renderer, mesh);

  mesh.geometry.dispose();
  material.dispose();
  // The 64 MB the panorama occupied is the whole reason for this module; it
  // goes as soon as the faces exist.
  source.dispose();

  return {
    texture: target.texture,
    size,
    dispose: () => target.dispose(),
  };
}
