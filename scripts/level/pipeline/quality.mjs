/**
 * Bake QUALITY tiers: one word that picks the baker and the lightmap budget,
 * and stamps the delivered file so the three never overwrite each other.
 *
 *   low     `--baker none`: no lightmap, the geometry, colliders, LOD tiers and
 *           sky as they ship, lit by the live moon, with textures and the sky
 *           cubemap capped at 1024 -- a smoke test of the level's SHAPE. It has
 *           to be quick, and the geometry stages are not what a bake costs:
 *           measured on bangkoksoi, stages 1-3 took 21 s and the KTX2 encode
 *           of 286 textures at 2048 plus six 2608² sky faces took 122 s, so the
 *           texture cap is what brings it under two minutes.
 *   medium  Cycles at 2048² / 16 samples, adaptive: the lamps, the sky and the
 *           moon's shadows land roughly where they will. About ten minutes.
 *   high    Cycles at the level's OWN lightmap settings (bangkoksoi: 8192² /
 *           4096 samples / adaptive off) -- the shipping bake, hours.
 *
 * `--quality medium` delivers `<id>_medium.glb`, builds `build/level_medium.glb`
 * and bakes into `build/lightmap_medium/`, so a low, a medium and a high build
 * of the same level coexist in the game's GLB folder and in `build/`; the raw
 * and the stage checkpoints are shared, because stages 1 and 3 do not depend on
 * the tier. Explicit `--baker`, `--lightmap-size`, `--samples` and
 * `--noise-threshold` still win over the preset. No `--quality` keeps every
 * name exactly as it was (`<id>.glb`, `build/level.glb`).
 */
export const QUALITIES = ['low', 'medium', 'high'];

export const QUALITY_PRESETS = {
  low: { baker: 'none', lightmap: {}, textures: { maxSize: 1024, maxFace: 1024 } },
  medium: { baker: 'blender', lightmap: { size: 2048, samples: 16, noiseThreshold: null } },
  high: { baker: 'blender', lightmap: {} },
};

/** The texture ceilings a tier imposes over the level's own (`min`), or the level's as they are. */
export function textureBudgetFor(tex = {}, preset = null) {
  const cap = preset?.textures ?? {};
  const maxSize = Math.min(tex.maxSize ?? 2048, cap.maxSize ?? Infinity);
  return { maxSize, maxFace: cap.maxFace ?? null };
}

export function assertQuality(q) {
  if (q == null || q === '') return null;
  const s = String(q);
  if (!QUALITIES.includes(s)) throw new Error(`--quality must be one of ${QUALITIES.join('|')}, got ${JSON.stringify(q)}`);
  return s;
}

/** `level.glb` -> `level_low.glb`, `lightmap` -> `lightmap_low`; unchanged with no tier. */
export function withQuality(name, quality) {
  if (!quality) return name;
  const dot = name.lastIndexOf('.');
  return dot > 0 ? `${name.slice(0, dot)}_${quality}${name.slice(dot)}` : `${name}_${quality}`;
}
