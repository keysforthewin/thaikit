/**
 * Stage 4a: every texture to KTX2.
 *
 * Colour slots (base colour, emissive) take the colour mode; everything else
 * -- normals, roughness, occlusion -- takes the data mode, because ETC1S's
 * palette wrecks a normal map. The lightmap, when there is one, is added here
 * as a texture nothing references: prune is told to keep textures, and the
 * runtime pulls it by index from the manifest.
 */
import { KHRTextureBasisu } from '@gltf-transform/extensions';
import { listTextureSlots } from '@gltf-transform/functions';

import { encodeKtx2 } from './ktx2.mjs';

const COLOUR_SLOTS = /baseColor|emissive/i;

export function compressTextures({ colorMode = 'etc1s', dataMode = 'uastc', maxSize = 2048, onProgress } = {}) {
  return async (doc) => {
    const textures = doc.getRoot().listTextures();
    if (!textures.length) return { count: 0 };
    const basisu = doc.createExtension(KHRTextureBasisu).setRequired(true);
    let i = 0;
    for (const tex of textures) {
      i += 1;
      if (tex.getMimeType() === 'image/ktx2') continue;
      const slots = listTextureSlots(tex);
      const colour = slots.length === 0 || slots.some((s) => COLOUR_SLOTS.test(s));
      const mode = colour ? colorMode : dataMode;
      const image = tex.getImage();
      if (!image) continue;
      onProgress?.(`${tex.getName() || `texture ${i}`}: ${slots.join(',') || 'unreferenced'} → ${mode}`, i, textures.length);
      const out = await encodeKtx2(image, { mode, srgb: colour, mipmaps: true, maxSize });
      tex.setImage(out.bytes).setMimeType('image/ktx2');
      if (tex.getURI()) tex.setURI(tex.getURI().replace(/\.[a-z0-9]+$/i, '.ktx2'));
    }
    void basisu;
    return { count: textures.length };
  };
}

/** The lightmap as an unreferenced KTX2 texture; returns its index. */
export async function addLightmapTexture(doc, pngBytes, { onProgress } = {}) {
  doc.createExtension(KHRTextureBasisu).setRequired(true);
  onProgress?.('encoding lightmap (UASTC, linear, no mips)');
  // sRGB, because that is what the file HOLDS. Blender saves the atlas through
  // view_transform 'Standard', which is sRGB display encoding, and the runtime
  // has always tagged the transcoded texture SRGBColorSpace -- so the pixels
  // were right and only the container was lying, `--assign-tf linear`
  // relabelling without converting. Two wrongs cancelled; this removes both.
  const out = await encodeKtx2(pngBytes, { mode: 'uastc', srgb: true, mipmaps: false, maxSize: 8192, uastcLevel: 2, zstd: 18 });
  const tex = doc.createTexture('lightmap').setImage(out.bytes).setMimeType('image/ktx2').setExtras({ tk: { kind: 'lightmap' } });
  return doc.getRoot().listTextures().indexOf(tex);
}
