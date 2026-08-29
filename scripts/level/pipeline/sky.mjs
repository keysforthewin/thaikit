/**
 * Stage 4c: the sky, folded into the baked GLB.
 *
 * The sky's images are SIDECARS while a level is being edited -- the project
 * GLB is re-uploaded whole on every save, so several megabytes of equirect
 * cannot live inside it. A SHIPPED level is the opposite: it has to be one
 * file, because `loadLevel()` is handed a URL and nothing else. So the bake
 * reads `levels/<id>/sky/` off disk and writes the images into the GLB the same
 * way the lightmap goes in -- as KTX2 textures nothing references, pulled back
 * out by index from the manifest.
 *
 * Two shapes of backdrop ship from here, and which one is a real decision.
 *
 * `cube` mode resamples six faces into ONE equirect, because six SEPARATE KTX2
 * files cannot be assembled into a `CubeTexture` -- three has no loader that
 * stitches compressed 2D images together. `panoramic` mode goes the other way
 * and ships a single KTX2 with `faceCount: 6`, which `ktx create --cubemap`
 * writes and `KTX2Loader` hands back as a `CompressedCubeTexture` unasked. One
 * container, one download, one `parse` -- so there is no second runtime path,
 * which was the only thing wrong with cubes before.
 *
 * The cubemap is the better of the two where it applies. An equirect backdrop
 * has to ship with NO mip chain (its u singularity collapses the zenith to the
 * sky's average colour under automatic mip selection); a cube face is an
 * ordinary square, WebGL2 filters across the seams unconditionally, and the
 * whole artefact goes away.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';
import { KHRTextureBasisu } from '@gltf-transform/extensions';

import { levelDir } from '@thaikit/registry-core';
import { CUBE_FACES } from '@thaikit/level-schema';

import { encodeKtx2, encodeKtx2Cubemap } from './ktx2.mjs';
import { equirectToCube } from '../equirect-to-cube.mjs';

/** Wider than most authored panoramas need, and 2:1 as an equirect must be. */
const EQUIRECT_WIDTH = 2048;

/**
 * The ceiling on a cube face edge, shared by both picture modes.
 *
 * `faceSizeFor` derives the face from the source, so this only ever binds on a
 * panorama wider than `3072 * PI` = 9650 px, or on a cube pack whose own faces
 * are larger. It is a VRAM budget: six ETC1S faces at half a byte per pixel
 * plus a third again for the mips is 38 MB at 3072, against 17 MB at 2048.
 *
 * Mirrored by `PREVIEW_MAX_FACE` in `web/client/src/level/equirectCube.js`, so
 * the editor previews the sharpness the bake ships. Keep the two the same.
 */
export const MAX_FACE = 3072;

const skyDir = (id) => path.join(levelDir(id), 'sky');

async function readSlot(id, file) {
  if (!file) return null;
  try {
    return await fs.readFile(path.join(skyDir(id), path.basename(file)));
  } catch (err) {
    if (err.code === 'ENOENT') return null;
    throw err;
  }
}

/**
 * Six cube faces to one equirectangular image.
 *
 * For every output pixel: longitude/latitude -> a unit direction -> the axis
 * with the largest component picks the face -> the other two components,
 * divided by the major one, are the face's uv. Bilinear on the way out, so a
 * 512-px face does not stair-step across a 2048-px panorama.
 *
 * Face orientation follows three's CubeTextureLoader, which is the WebGL cube
 * convention: +Y is up, and the horizontal faces are addressed left-handed.
 * Getting this wrong does not error -- it mirrors the sky, which is why the
 * axis expressions below are spelled out rather than derived in a loop.
 */
export async function cubeToEquirect(faceBuffers, { width = EQUIRECT_WIDTH } = {}) {
  const height = width >> 1;
  const faces = [];
  for (const buf of faceBuffers) {
    const { data, info } = await sharp(buf, { failOn: 'none' })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    faces.push({ data, w: info.width, h: info.height });
  }

  const out = Buffer.alloc(width * height * 4);

  const sample = (face, u, v) => {
    // uv in [0,1] -> pixel centres, clamped so the seam does not wrap.
    const x = Math.min(face.w - 1, Math.max(0, u * face.w - 0.5));
    const y = Math.min(face.h - 1, Math.max(0, v * face.h - 0.5));
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const x1 = Math.min(face.w - 1, x0 + 1);
    const y1 = Math.min(face.h - 1, y0 + 1);
    const fx = x - x0;
    const fy = y - y0;
    const at = (px, py) => (py * face.w + px) * 4;
    const a = at(x0, y0);
    const b = at(x1, y0);
    const c = at(x0, y1);
    const d = at(x1, y1);
    const px = [0, 0, 0, 0];
    for (let k = 0; k < 4; k += 1) {
      const top = face.data[a + k] * (1 - fx) + face.data[b + k] * fx;
      const bot = face.data[c + k] * (1 - fx) + face.data[d + k] * fx;
      px[k] = top * (1 - fy) + bot * fy;
    }
    return px;
  };

  for (let j = 0; j < height; j += 1) {
    // Latitude from the top row down: +pi/2 at the top, -pi/2 at the bottom.
    // Three's equirect background reads v = asin(dir.y)/PI + 0.5, so v = 1 is
    // the zenith -- which is the first row of a conventional equirect file.
    const lat = (0.5 - (j + 0.5) / height) * Math.PI;
    const cosLat = Math.cos(lat);
    const dy = Math.sin(lat);
    for (let i = 0; i < width; i += 1) {
      // ...and u = atan2(dir.z, dir.x)/2PI + 0.5, so u = 0.5 is +X, u = 0.75 is
      // +Z. Inverting that is what makes the resampled panorama point the same
      // way the cube did in the editor; get it wrong and the sky is silently
      // rotated a quarter turn between authoring and shipping.
      const theta = ((i + 0.5) / width - 0.5) * 2 * Math.PI;
      const dx = cosLat * Math.cos(theta);
      const dz = cosLat * Math.sin(theta);

      const ax = Math.abs(dx);
      const ay = Math.abs(dy);
      const az = Math.abs(dz);

      let face;
      let u;
      let v;
      if (ax >= ay && ax >= az) {
        if (dx > 0) { face = 0; u = -dz / ax; v = -dy / ax; }   // +X
        else { face = 1; u = dz / ax; v = -dy / ax; }           // -X
      } else if (ay >= az) {
        if (dy > 0) { face = 2; u = dx / ay; v = dz / ay; }     // +Y
        else { face = 3; u = dx / ay; v = -dz / ay; }           // -Y
      } else if (dz > 0) { face = 4; u = dx / az; v = -dy / az; } // +Z
      else { face = 5; u = -dx / az; v = -dy / az; }             // -Z

      const px = sample(faces[face], (u + 1) / 2, (v + 1) / 2);
      const o = (j * width + i) * 4;
      out[o] = px[0]; out[o + 1] = px[1]; out[o + 2] = px[2]; out[o + 3] = px[3];
    }
  }

  return sharp(out, { raw: { width, height, channels: 4 } }).png().toBuffer();
}

/**
 * The face edge to resample a panorama onto.
 *
 * A cube face spans 90 degrees and an equirect's width spans 360, so `width / 4`
 * looks like the size that neither invents pixels nor throws any away. It is
 * not: that is the face's AVERAGE density, and a cube face is a tangent plane,
 * so its density is LOWEST at the centre and highest at the corners. One pixel
 * step at the centre is `atan(2 / size)`, which is `size * PI / 360` px/deg --
 * a factor of PI/4 below the `size / 90` the average suggests. A 2048 face
 * therefore resolves 17.9 px/deg where you are actually looking, not 22.8, and
 * an 8192-wide panorama fed through `width / 4` lost 21% of its linear
 * resolution to the projection before anything else touched it.
 *
 * So the face that matches the source AT THE CENTRE is `width / PI`: set
 * `size * PI / 360` equal to the equirect's own `width / 360` and the 4 becomes
 * PI. For an 8192 panorama that is 2608 rather than 2048.
 *
 * Pinning it to a constant is wrong in both directions and was: at a fixed
 * 1024 a 2048-wide panorama was UPSAMPLED 2x, paying for bytes that carried no
 * detail, while a 7680-wide one would have been thrown away down to a quarter
 * of what it had.
 *
 * `maxFace` is the ceiling, because the face size is also the VRAM bill: six
 * faces of ETC1S at half a byte per pixel, plus a third again for the mips.
 */
export function faceSizeFor(width, maxFace) {
  const ideal = Math.round(width / Math.PI);
  // Block compression wants a multiple of 4.
  return Math.max(256, Math.floor(Math.min(ideal, maxFace) / 4) * 4);
}

/**
 * A `panoramic` base: one ground-level panorama, completed into six faces.
 *
 * The panorama covers the azimuth fully and the sky honestly, and the ground
 * not at all -- so `equirectToCube` synthesises the lower hemisphere while it
 * resamples, fading into a colour measured off the horizon rows. Doing it here
 * rather than on the `ny` face alone is what keeps the four side faces meeting
 * the bottom one without a step: the fade is a function of ELEVATION, so every
 * face crossing the band gets the same blend at the same angle.
 *
 * These faces are NOT flipped, and that is the one place this path differs from
 * the equirect one. `CubeTexture.flipY` is false in three -- for the editor's
 * `CubeTextureLoader` preview and for the `CompressedCubeTexture` the runtime
 * transcodes alike -- so both ends read row 0 as the top and there is nothing
 * to reconcile. Flipping here would ship the sky upside down.
 */
async function panoramaToFaces(bytes, base, { onProgress, maxFace = MAX_FACE } = {}) {
  const notes = [];
  const meta = await sharp(bytes, { failOn: 'none' }).metadata();
  const aspect = (meta.width ?? 2) / (meta.height ?? 1);

  // What the rows span. The uploader records this; an older level, or a
  // panorama dropped in by hand, gets the aspect ratio's answer -- 4:1 is the
  // sky alone, anything else is treated as a whole sphere.
  let { minDeg, maxDeg } = base?.elevation ?? {};
  if (typeof minDeg !== 'number' || typeof maxDeg !== 'number') {
    minDeg = Math.abs(aspect - 4) < Math.abs(aspect - 2) ? 0 : -90;
    maxDeg = 90;
    notes.push(`panorama elevation not recorded; ${meta.width}x${meta.height} (${aspect.toFixed(2)}:1) read as ${minDeg}..${maxDeg}°`);
  }

  const nadir = base?.nadir ?? {};
  const size = faceSizeFor(meta.width ?? 2048, maxFace);
  if (size < Math.round((meta.width ?? 0) / Math.PI)) {
    notes.push(`panorama is ${meta.width}px wide (${((meta.width ?? 0) / 360).toFixed(1)} px/deg); faces capped at ${size}`);
  }
  onProgress?.(`resampling panorama to 6 x ${size}² cube faces (${((size * Math.PI) / 360).toFixed(1)} px/deg at face centre)`);
  if (nadir.mode === 'cut') {
    onProgress?.('nadir mode is cut: the cube ships with no floor');
    notes.push('nadir cut at the horizon; ny is one flat colour and the side faces stop at the skyline');
  }
  const { faces, nadirColour } = await equirectToCube(bytes, {
    size,
    nadir: nadir.color ?? 'auto',
    // The defaults live in `resolveNadirFade`, not here. These used to fall back
    // to 8/40 while the schema said 0/8, so a setting the editor never wrote
    // left EIGHT degrees of unfaded panorama below the horizon -- for an aerial
    // plate, roads running under the map.
    nadirMode: nadir.mode ?? 'fade',
    nadirStart: nadir.startDeg,
    nadirEnd: nadir.endDeg,
    elevMinDeg: minDeg,
    elevMaxDeg: maxDeg,
  });
  if (!nadir.color && nadirColour) {
    notes.push(`nadir measured off the horizon at #${nadirColour.slice(0, 3).map((c) => c.toString(16).padStart(2, '0')).join('')}`);
  }

  // Raw RGBA out, PNG in: the encoder wants a file it can read.
  const png = await Promise.all(
    CUBE_FACES.map((f) =>
      sharp(faces[f].raw, { raw: { width: faces[f].size, height: faces[f].size, channels: 4 } }).png().toBuffer(),
    ),
  );
  return { faces: png, notes };
}

/**
 * The sky's images as PNG bytes, ready to encode. Returns nulls rather than
 * throwing for a missing file: a sky whose picture was deleted outside the
 * editor should bake as the layers that remain, not fail the whole level.
 *
 * `base` and `baseFaces` are exclusive, and BOTH picture modes now take the
 * `baseFaces` route: a cube sky ships the faces it already has, a panoramic one
 * is resampled into six. `base` remains for an equirect nothing produces today.
 *
 * @returns {{ base: Buffer|null, baseFaces: Buffer[]|null, clouds: Buffer|null, notes: string[] }}
 */
export async function prepareSkyImages(levelId, sky, { onProgress, maxFace = MAX_FACE } = {}) {
  const notes = [];
  if (!sky?.enabled) return { base: null, baseFaces: null, clouds: null, notes };

  let base = null;
  let baseFaces = null;
  const mode = sky.base?.mode ?? 'none';
  if (mode === 'panoramic') {
    const bytes = await readSlot(levelId, sky.base?.panorama);
    if (!bytes) {
      notes.push(`panorama "${sky.base?.panorama ?? '(none)'}" is missing`);
    } else {
      const built = await panoramaToFaces(bytes, sky.base, { onProgress, maxFace });
      baseFaces = built.faces;
      notes.push(...built.notes);
    }
  } else if (mode === 'cube') {
    // Six faces SHIP as six faces. They used to be resampled into one 2048-wide
    // equirect here, which is 5.7 px/deg against a 1024 face's 11.4 -- it threw
    // away half of a sky that was already in the right projection, and landed it
    // on the `base` branch, which encodes an equirect with NO mip chain and a
    // pole that collapses to the average colour of the whole sky. That was a
    // leftover from before `encodeKtx2Cubemap` existed: six separate KTX2 files
    // cannot be assembled into a CubeTexture, but ONE file with `faceCount: 6`
    // can, which is exactly what the panoramic path has been shipping. Cube mode
    // is the one mode that STARTS with cube faces, so it resamples nothing at
    // all now. `cubeToEquirect` stays as the inverse that guards
    // `equirectToCube` in the tests.
    const files = CUBE_FACES.map((f) => sky.base?.faces?.[f]);
    const buffers = await Promise.all(files.map((f) => readSlot(levelId, f)));
    const missing = CUBE_FACES.filter((_, i) => !buffers[i]);
    if (missing.length) {
      notes.push(`cube map is missing ${missing.join(', ')}; the base layer is skipped`);
    } else {
      const metas = await Promise.all(buffers.map((b) => sharp(b, { failOn: 'none' }).metadata()));
      const edges = metas.map((m) => Math.min(m.width ?? 0, m.height ?? 0));
      if (metas.some((m) => m.width !== m.height)) {
        notes.push('some cube faces are not square; all six ship stretched to the first face\'s edge');
      }
      const sizes = [...new Set(edges)];
      if (sizes.length > 1) notes.push(`cube faces differ in size (${sizes.join(', ')}px); all six ship at ${edges[0]}px`);
      // The same ceiling the panoramic path applies: face size is the VRAM bill,
      // six of them. A 2608 face is 22.8 px/deg at its CENTRE against the ~18 a
      // 1080p view at 60 degrees can show; `MAX_FACE` leaves headroom above it.
      const edge = Math.min(edges[0], maxFace);
      if (edge < edges[0]) notes.push(`cube faces are ${edges[0]}px; capped at ${edge}`);
      onProgress?.(`encoding 6 cube faces at ${edge}² (${((edge * Math.PI) / 360).toFixed(1)} px/deg at face centre)`);
      baseFaces = edge < edges[0]
        ? await Promise.all(buffers.map((b) => sharp(b, { failOn: 'none' }).resize(edge, edge, { fit: 'fill' }).png().toBuffer()))
        : buffers;
    }
  }

  let clouds = null;
  if (sky.clouds?.file) {
    clouds = await readSlot(levelId, sky.clouds.file);
    if (!clouds) notes.push(`cloud image "${sky.clouds.file}" is missing`);
  }

  // Every sky image ships upside down, and that is not a bug to fix later.
  //
  // The editor loads these as PNG/JPEG through TextureLoader, where three's
  // default `flipY = true` flips the rows on upload, so the file's FIRST row is
  // sampled at v = 1. A KTX2 arrives with `flipY = false` and cannot be flipped
  // on upload at all -- WebGL has no flip for compressed uploads, so three
  // ignores the flag on a CompressedTexture. So the same file sampled at v = 1
  // in the runtime is its LAST row: a sky that renders correctly while you
  // author it and comes back inverted in the game. Flipping the pixels once,
  // here, is the only place the two paths can be made to agree.
  //
  // None of which applies to CUBE faces: `CubeTexture.flipY` is false, and the
  // editor's six-face preview and the runtime's transcoded cubemap both read
  // row 0 as the top. `baseFaces` therefore goes through untouched.
  const flip = async (bytes) => (bytes ? sharp(bytes, { failOn: 'none' }).flip().png().toBuffer() : null);
  return { base: await flip(base), baseFaces, clouds: await flip(clouds), notes };
}

/**
 * The sky's images as unreferenced KTX2 textures. Mirrors `addLightmapTexture`:
 * `prune` is told to keep textures, and the runtime pulls these back by index.
 *
 * @returns {{ base: number|null, clouds: number|null }} indices into textures[]
 */
export async function addSkyTextures(doc, { base = null, baseFaces = null, clouds = null }, { colorMode = 'etc1s', maxSize = 2048, onProgress } = {}) {
  if (!base && !baseFaces && !clouds) return { base: null, clouds: null, projection: 'equirect' };
  doc.createExtension(KHRTextureBasisu).setRequired(true);

  const store = (name, bytes) => {
    const tex = doc.createTexture(`sky-${name}`).setImage(bytes).setMimeType('image/ktx2').setExtras({ tk: { kind: 'sky', layer: name } });
    return doc.getRoot().listTextures().indexOf(tex);
  };

  const add = async (name, bytes, opts) => {
    onProgress?.(`encoding sky ${name}`);
    const out = await encodeKtx2(bytes, { srgb: true, mipmaps: true, ...opts });
    return store(name, out.bytes);
  };

  // Both layers are COLOUR maps and take the level's colour-texture mode, the
  // same as every base colour in the level. The sky is not a special case, and
  // a backdrop pinned to UASTC while the props hanging in front of it are ETC1S
  // is a setting that silently does not apply to the two largest textures in
  // the file. The cloud plate carries its shape in alpha as well as luminance;
  // basis-lz encodes alpha as its own slice, so a soft edge survives.
  //
  // The backdrop ships with NO mip chain: the runtime samples it with
  // LinearFilter to avoid an equirect's pole collapse, so a chain would be
  // uploaded and never read.
  //
  // A CUBEMAP has no such problem and so ships WITH one. The pole collapse is
  // an equirect artefact -- it is the projection's own u singularity, not a
  // property of skies -- and a cube face is an ordinary square that mips down
  // like any other. WebGL2 filters across cube seams unconditionally, so the
  // chain costs a third more bytes and buys correct minification everywhere.
  let baseIndex = null;
  let projection = 'equirect';
  if (baseFaces) {
    onProgress?.('encoding sky base as a 6-face cubemap');
    // The faces were already sized against the source; re-clamping here would
    // undo that silently.
    const edge = (await sharp(baseFaces[0], { failOn: 'none' }).metadata()).width;
    const out = await encodeKtx2Cubemap(baseFaces, { mode: colorMode, srgb: true, mipmaps: true, maxSize: edge });
    baseIndex = store('base', out.bytes);
    projection = 'cube';
  } else if (base) {
    baseIndex = await add('base', base, { mode: colorMode, mipmaps: false, maxSize: Math.max(maxSize, 2048) });
  }
  const cloudIndex = clouds ? await add('clouds', clouds, { mode: colorMode, maxSize }) : null;

  return { base: baseIndex, clouds: cloudIndex, projection };
}
