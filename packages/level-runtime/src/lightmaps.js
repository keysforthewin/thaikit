import * as THREE from 'three';
import { attachLightmap } from './materials.js';

/** Load once per page, keep the legacy single-image manifest readable. */
export async function loadLightmaps(spec, readEmbedded) {
  if (!spec) return [];
  const pages = spec.atlases ?? (Number.isInteger(spec.image) ? [{ image: spec.image, range: spec.range ?? 1 }] : []);
  if (!pages.length) throw new Error('lightmap has no atlas images');
  const loaded = [];
  try {
    for (const [i, page] of pages.entries()) {
      const texture = await readEmbedded(page.image, `lightmap.atlases[${i}].image`);
      loaded.push(texture);
      texture.channel = spec.channel ?? 1;
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.flipY = false;
      texture.generateMipmaps = false;
      texture.minFilter = THREE.LinearFilter;
    }
    return loaded;
  } catch (error) {
    for (const texture of loaded) texture.dispose();
    throw error;
  }
}

/** Sharing is safe only within the same source material/page pair. */
export function bindLightmaps(roots, spec, textures, intensityOverride) {
  const copies = new Map();
  const bind = (source) => {
    const page = spec.atlases ? source.userData?.tk?.lightmapAtlas : 0;
    if (!Number.isInteger(page) || page < 0 || page >= textures.length) throw new Error(`material ${source.name}: invalid lightmap atlas ${page}`);
    let pages = copies.get(source);
    if (!pages) copies.set(source, pages = new Map());
    if (!pages.has(page)) {
      const material = source.clone();
      const range = spec.atlases?.[page]?.range ?? spec.range ?? 1;
      attachLightmap(material, textures[page], {
        intensity: (intensityOverride ?? spec.intensity ?? 1) * range,
        bakedPunctual: spec.bakedLights === true,
      });
      pages.set(page, material);
    }
    return pages.get(page);
  };
  // Validate first, avoiding a half-patched scene on invalid assignments.
  for (const root of roots) root?.traverse(o => {
    if (o.isMesh) for (const m of Array.isArray(o.material) ? o.material : [o.material]) bind(m);
  });
  for (const root of roots) root?.traverse(o => {
    if (o.isMesh) o.material = Array.isArray(o.material) ? o.material.map(bind) : bind(o.material);
  });
  return copies;
}
