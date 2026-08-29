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
 * Six cube faces are resampled here into ONE equirectangular map, and that is
 * the point of this file. A KTX2 `CubeTexture` cannot be assembled out of six
 * compressed 2D images, so shipping a cube would mean a second runtime path
 * with uncompressed faces in it. Resampling once at bake time leaves the
 * runtime with exactly one thing to load, and costs the author nothing: the
 * editor still previews the real cube through `CubeTextureLoader`.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';
import { KHRTextureBasisu } from '@gltf-transform/extensions';

import { levelDir } from '@thaikit/registry-core';
import { CUBE_FACES } from '@thaikit/level-schema';

import { encodeKtx2 } from './ktx2.mjs';

/** Wider than most authored panoramas need, and 2:1 as an equirect must be. */
const EQUIRECT_WIDTH = 2048;

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
 * The sky's images as PNG bytes, ready to encode. Returns nulls rather than
 * throwing for a missing file: a sky whose picture was deleted outside the
 * editor should bake as the layers that remain, not fail the whole level.
 *
 * @returns {{ base: Buffer|null, clouds: Buffer|null, notes: string[] }}
 */
export async function prepareSkyImages(levelId, sky, { onProgress } = {}) {
  const notes = [];
  if (!sky?.enabled) return { base: null, clouds: null, notes };

  let base = null;
  const mode = sky.base?.mode ?? 'none';
  if (mode === 'equirect') {
    base = await readSlot(levelId, sky.base?.file);
    if (!base) notes.push(`equirect image "${sky.base?.file ?? '(none)'}" is missing`);
  } else if (mode === 'cube') {
    const files = CUBE_FACES.map((f) => sky.base?.faces?.[f]);
    const buffers = await Promise.all(files.map((f) => readSlot(levelId, f)));
    const missing = CUBE_FACES.filter((_, i) => !buffers[i]);
    if (missing.length) {
      notes.push(`cube map is missing ${missing.join(', ')}; the base layer is skipped`);
    } else {
      onProgress?.(`resampling 6 cube faces to ${EQUIRECT_WIDTH}×${EQUIRECT_WIDTH >> 1} equirect`);
      base = await cubeToEquirect(buffers);
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
  const flip = async (bytes) => (bytes ? sharp(bytes, { failOn: 'none' }).flip().png().toBuffer() : null);
  return { base: await flip(base), clouds: await flip(clouds), notes };
}

/**
 * The sky's images as unreferenced KTX2 textures. Mirrors `addLightmapTexture`:
 * `prune` is told to keep textures, and the runtime pulls these back by index.
 *
 * @returns {{ base: number|null, clouds: number|null }} indices into textures[]
 */
export async function addSkyTextures(doc, { base = null, clouds = null }, { colorMode = 'etc1s', maxSize = 2048, onProgress } = {}) {
  if (!base && !clouds) return { base: null, clouds: null };
  doc.createExtension(KHRTextureBasisu).setRequired(true);

  const add = async (name, bytes, opts) => {
    onProgress?.(`encoding sky ${name}`);
    const out = await encodeKtx2(bytes, { srgb: true, mipmaps: true, ...opts });
    const tex = doc.createTexture(`sky-${name}`).setImage(out.bytes).setMimeType('image/ktx2').setExtras({ tk: { kind: 'sky', layer: name } });
    return doc.getRoot().listTextures().indexOf(tex);
  };

  // The backdrop is the largest single texture in the level and is never seen
  // up close, so it takes the colour mode like any other colour map.
  // No mip chain on the backdrop: the runtime samples it with LinearFilter to
  // avoid an equirect's pole collapse, so a chain would be uploaded and never
  // read. Roughly a third off the texture.
  const baseIndex = base ? await add('base', base, { mode: colorMode, mipmaps: false, maxSize: Math.max(maxSize, 2048) }) : null;
  // Clouds carry their shape in ALPHA as well as luminance, and ETC1S's palette
  // is hard on an alpha ramp -- a soft cloud edge bands into contours. UASTC.
  const cloudIndex = clouds ? await add('clouds', clouds, { mode: 'uastc', maxSize }) : null;

  return { base: baseIndex, clouds: cloudIndex };
}
