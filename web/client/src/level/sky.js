/**
 * The level's sky: a base backdrop, a drifting cloud dome, and a star field.
 *
 * It is a SETTING for the same reasons the ground is one -- there is exactly
 * one sky, nothing about it is selectable or draggable, and it has no place in
 * the world. The difference is that a sky needs PICTURES, and a picture cannot
 * live in `settings`: the level GLB is rebuilt and re-uploaded whole on every
 * save, so a 4 MB equirect would be re-sent on every keystroke of the level
 * name.
 *
 * So the images are SIDECARS. They are uploaded to `levels/<id>/sky/<slot>.<ext>`
 * and the setting stores only the filename. `levels/` is already served
 * statically, so the editor reads them straight back with no new route; the
 * bake reads them off disk and folds them into the shipped GLB, which is what
 * keeps the exported level self-contained.
 *
 * The dome geometry and the star shader are NOT here -- they come from
 * `@thaikit/level-runtime/sky`, so the editor previews exactly what the game
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
export const SKY_SLOTS = ['equirect', ...CUBE_FACES, 'clouds'];

/**
 * Off by default. A sky is an art decision, and a level that has not made it
 * should look exactly as it did before this feature existed -- the flat
 * `environment.background` colour.
 */
export const DEFAULT_SKY = {
  enabled: false,
  base: { mode: 'none', file: null, faces: null, intensity: 1, rotationDeg: 0 },
  clouds: { file: null, color: '#ffffff', opacity: 0.5, driftDegPerMin: 3, repeat: 2, heightScale: 0.35 },
  stars: { enabled: true, density: 1, brightness: 1, twinkleSpeed: 1, color: '#dfe6ff', horizonFade: 0.25 },
};

/** The doc's sky with every default filled in, the way `groundOf` does it. */
export const skyOf = (doc) => ({
  ...DEFAULT_SKY,
  ...(doc?.settings?.sky ?? {}),
  base: { ...DEFAULT_SKY.base, ...(doc?.settings?.sky?.base ?? {}) },
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
 * @returns {{ mode: 'equirect', file: string } | { mode: 'cube', files: string[] } | null}
 */
export function baseSource(sky) {
  const base = sky?.base;
  if (!base || base.mode === 'none') return null;
  if (base.mode === 'equirect') return base.file ? { mode: 'equirect', file: base.file } : null;
  const faces = base.faces ?? {};
  const files = CUBE_FACES.map((f) => faces[f]);
  return files.every(Boolean) ? { mode: 'cube', files } : null;
}

/** Whether anything at all would be drawn -- the panel says so, and so does the bake. */
export function skyIsActive(sky) {
  if (!sky?.enabled) return false;
  return Boolean(baseSource(sky)) || Boolean(sky.clouds?.file) || sky.stars?.enabled !== false;
}
