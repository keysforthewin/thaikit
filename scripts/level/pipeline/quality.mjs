/**
 * Bake QUALITY tiers: one word that picks the baker and the lightmap budget,
 * and stamps the delivered file so the three never overwrite each other.
 *
 *   low     Cycles at 4096² / 4096 samples, adaptive off. This is the first
 *           shippable lighting tier: it retains the level's texture budget and
 *           bakes lamps, sky, and moon visibility into the atlas.
 *   medium  Cycles at 8192² / 4096 samples, adaptive off. This is the higher
 *           resolution shipping tier when the low atlas needs more detail.
 *   high    Cycles at the level's OWN lightmap settings (bangkoksoi: 16384² /
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
  low: { baker: 'blender', lightmap: { size: 4096, samples: 4096, noiseThreshold: 0 } },
  medium: { baker: 'blender', lightmap: { size: 8192, samples: 4096, noiseThreshold: 0 } },
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
