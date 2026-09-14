/** Fixed atlas resolution and density; quality changes integration samples.
 * Atlas allocation is automatic up to maxAtlases. Explicit CLI overrides win.
 * low=128, medium=2048, high=16384 samples; adaptive sampling is disabled.
 */
export const QUALITIES = ['low', 'medium', 'high'];

export const QUALITY_PRESETS = {
  low: { baker: 'blender', lightmap: { size: 4096, samples: 128, noiseThreshold: 0, texelsPerMeter: 12, maxAtlases: 32 } },
  medium: { baker: 'blender', lightmap: { size: 4096, samples: 2048, noiseThreshold: 0, texelsPerMeter: 12, maxAtlases: 32 } },
  high: { baker: 'blender', lightmap: { size: 4096, samples: 16384, noiseThreshold: 0, texelsPerMeter: 12, maxAtlases: 32 } },
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
