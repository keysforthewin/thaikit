/**
 * The level's sky: a base backdrop, a drifting cloud dome, and a star field.
 *
 * It is a SETTING for the same reasons the ground is one -- there is exactly
 * one sky, nothing about it is selectable or draggable, and it has no place in
 * the world. The difference is that a sky needs PICTURES, and a picture cannot
 * live in `settings`: the level GLB is rebuilt and re-uploaded whole on every
 * save, so a 4 MB panorama would be re-sent on every keystroke of the level
 * name.
 *
 * So the images are SIDECARS. They are uploaded to `levels/<id>/sky/<slot>.<ext>`
 * and the setting stores only the filename. `levels/` is already served
 * statically, so the editor reads them straight back with no new route; the
 * bake reads them off disk and folds them into the shipped GLB, which is what
 * keeps the exported level self-contained.
 *
 * The dome geometry and the star shader are NOT here -- they come from
 * `@thai-kit/level-runtime/sky`, so the editor previews exactly what the game
 * will render.
 */

/**
 * The six cube faces, in three's CubeTextureLoader order. Mirrored from
 * level-schema rather than imported, the way `defaults.js` mirrors
 * `LevelSettings` -- the client does not depend on the schema package, and
 * pulling zod into the bundle for six strings is not worth it.
 */
export const CUBE_FACES = ['px', 'nx', 'py', 'ny', 'pz', 'nz'];

/** Every uploadable slot, in the order the panel offers them. */
export const SKY_SLOTS = ['panorama', ...CUBE_FACES, 'clouds'];

/**
 * Off by default. A sky is an art decision, and a level that has not made it
 * should look exactly as it did before this feature existed -- the flat
 * `environment.background` colour.
 */
export const DEFAULT_SKY = {
  enabled: false,
  base: {
    mode: 'none',
    faces: null,
    panorama: null,
    elevation: { minDeg: -90, maxDeg: 90 },
    nadir: { color: null, startDeg: 0, endDeg: 8 },
    intensity: 1,
    lodBias: -0.5,
    rotationDeg: 0,
  },
  clouds: { file: null, color: '#ffffff', opacity: 0.5, driftDegPerMin: 3, repeat: 2, heightScale: 0.35 },
  stars: { enabled: true, density: 1, brightness: 1, twinkleSpeed: 1, color: '#dfe6ff', horizonFade: 0.25 },
};

/** The doc's sky with every default filled in, the way `groundOf` does it. */
export const skyOf = (doc) => ({
  ...DEFAULT_SKY,
  ...(doc?.settings?.sky ?? {}),
  base: {
    ...DEFAULT_SKY.base,
    ...(doc?.settings?.sky?.base ?? {}),
    elevation: { ...DEFAULT_SKY.base.elevation, ...(doc?.settings?.sky?.base?.elevation ?? {}) },
    nadir: { ...DEFAULT_SKY.base.nadir, ...(doc?.settings?.sky?.base?.nadir ?? {}) },
  },
  clouds: { ...DEFAULT_SKY.clouds, ...(doc?.settings?.sky?.clouds ?? {}) },
  stars: { ...DEFAULT_SKY.stars, ...(doc?.settings?.sky?.stars ?? {}) },
});

/**
 * Where a sky image is served from. `/levels` is an existing static mount, so
 * this is a plain URL with no API route behind it.
 *
 * The cache-buster matters: a slot keeps its name across a re-upload (`px.jpg`
 * replaced by another `px.jpg`), so without one the browser shows the old face
 * until a hard reload and the upload looks like it silently failed.
 */
export function skyUrl(levelId, file, rev) {
  if (!levelId || !file) return null;
  const q = rev ? `?v=${encodeURIComponent(rev)}` : '';
  return `/levels/${encodeURIComponent(levelId)}/sky/${encodeURIComponent(file)}${q}`;
}

/**
 * The base layer's files, or null when it is not usable yet.
 *
 * A cube is all-or-nothing: five faces out of six is not a sky with a gap, it
 * is a CubeTextureLoader that never fires its onLoad. Returning null keeps the
 * flat background up until the sixth face arrives.
 *
 * @returns {{ mode: 'panoramic', file: string } | { mode: 'cube', files: string[] } | null}
 */
export function baseSource(sky) {
  const base = sky?.base;
  if (!base || base.mode === 'none') return null;
  // A panorama is one 2D image through TextureLoader. What makes it a sky
  // rather than a flat equirect backdrop is in the shader, which remaps the
  // rows and synthesises the ground the panorama does not have -- and in the
  // bake, which resamples it into a real cubemap.
  if (base.mode === 'panoramic') return base.panorama ? { mode: 'panoramic', file: base.panorama } : null;
  const faces = base.faces ?? {};
  const files = CUBE_FACES.map((f) => faces[f]);
  return files.every(Boolean) ? { mode: 'cube', files } : null;
}

/** Whether anything at all would be drawn -- the panel says so, and so does the bake. */
export function skyIsActive(sky) {
  if (!sky?.enabled) return false;
  return Boolean(baseSource(sky)) || Boolean(sky.clouds?.file) || sky.stars?.enabled !== false;
}

/**
 * Read a panorama's coverage and its horizon colour, at upload time.
 *
 * Both are RECORDED on the setting rather than re-derived at bake time, and
 * that is the point: the editor previews the synthesised ground with a shader
 * fade and the bake resamples it into the cube faces, so the two have to agree
 * on the colour to the byte. Measuring once, here, is the only place they can.
 *
 * The arithmetic mirrors `measureNadirColour` in
 * `scripts/level/equirect-to-cube.mjs` -- the mean of a band 3% of the image
 * tall, starting at the row where the fade begins. Keep them the same.
 *
 * @returns {Promise<{ elevation: {minDeg:number,maxDeg:number}, nadirColor: string, width:number, height:number }>}
 */
export async function measurePanorama(blob, { startDeg = 0 } = {}) {
  const bitmap = await createImageBitmap(blob);
  const { width: w, height: h } = bitmap;
  try {
    // A 4:1 image is the sky alone, horizon to zenith; anything nearer 2:1 is a
    // whole sphere whose bottom half was invented. Nothing else is a panorama
    // we can place, so the closer of the two wins and the author can correct it.
    const aspect = w / h;
    const minDeg = Math.abs(aspect - 4) < Math.abs(aspect - 2) ? 0 : -90;
    const maxDeg = 90;

    const rowAt = (deg) => Math.round(((maxDeg - deg) / (maxDeg - minDeg)) * h);
    const from = Math.max(0, Math.min(h - 2, rowAt(-startDeg)));
    const band = Math.max(2, Math.round(h * 0.03));
    const to = Math.min(h, from + band);

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = to - from;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(bitmap, 0, from, w, to - from, 0, 0, w, to - from);
    const { data } = ctx.getImageData(0, 0, w, to - from);
    let r = 0;
    let g = 0;
    let b = 0;
    const n = data.length / 4;
    for (let i = 0; i < data.length; i += 4) { r += data[i]; g += data[i + 1]; b += data[i + 2]; }
    const hex = (v) => Math.round(v / n).toString(16).padStart(2, '0');
    return { elevation: { minDeg, maxDeg }, nadirColor: `#${hex(r)}${hex(g)}${hex(b)}`, width: w, height: h };
  } finally {
    bitmap.close?.();
  }
}
