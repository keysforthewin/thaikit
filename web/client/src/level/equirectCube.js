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
 * Face size is `width / 4` capped -- a face spans 90 degrees and an equirect's
 * width spans 360, so that is the size that neither invents pixels nor throws
 * any away, the same arithmetic `faceSizeFor` uses in the bake. See
 * `PREVIEW_MAX_FACE` for why the cap here is not the bake's.
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
import { resolveNadirFade } from '@thaikit/level-schema';

/**
 * The ceiling on a PREVIEW face. Half the bake's, and deliberately.
 *
 * The bake caps at 2048 because it ships compressed: six ETC1S faces at half a
 * byte per pixel. Nothing here is compressed, so a 2048 face is
 * 6 x 2048^2 x 4 bytes plus a third again for the mips -- 134 MB, MORE than the
 * 64 MB equirect this is meant to relieve, and on a machine already short of
 * VRAM that trades a cache problem for a paging one. At 1024 it is 33 MB: half
 * of what the panorama costs today, mipped, and 11.4 px/deg against the shipped
 * cubemap's 22.8.
 *
 * So the preview is softer than the level, by one mip, and that is the only
 * place in the sky pipeline where the editor is knowingly not showing what
 * ships. Raise this to 2048 to close the gap and pay the 134 MB.
 */
export const PREVIEW_MAX_FACE = 1024;

/**
 * The face edge for a panorama of this width. Mirrors `faceSizeFor` in
 * `scripts/level/pipeline/sky.mjs`; keep the two the same, or the editor
 * previews a sharpness the bake will not ship.
 */
export function faceSizeFor(width, maxFace = PREVIEW_MAX_FACE) {
  const ideal = Math.round(width / 4);
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
uniform vec2 uElevation;   // the elevation the first and last rows sit at, radians
uniform vec3 uNadirColor;
uniform vec2 uNadirFade;   // start, end -- radians BELOW the horizon
varying vec3 vDir;

void main() {
  vec3 dir = normalize(vDir);
  float lat = asin(clamp(dir.y, -1.0, 1.0));
  float u = atan(dir.z, dir.x) * 0.15915494 + 0.5;
  float v = 1.0 - (uElevation.y - lat) / (uElevation.y - uElevation.x);
  vec4 texel = texture2D(uMap, vec2(u, v));
  float below = smoothstep(uNadirFade.x, uNadirFade.y, -lat);
  texel.rgb = mix(texel.rgb, uNadirColor, below);
  gl_FragColor = vec4(texel.rgb, 1.0);
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
