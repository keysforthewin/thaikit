/**
 * Stage 4a: every texture to KTX2.
 *
 * Colour slots (base colour, emissive) take the colour mode; everything else
 * -- normals, roughness, occlusion -- takes the data mode, because ETC1S's
 * palette wrecks a normal map. The lightmap, when there is one, is added here
 * as a texture nothing references: prune is told to keep textures, and the
 * runtime pulls it by index from the manifest.
 *
 * The encodes run in a POOL. One `ktx create` per texture, one after another,
 * was 100 s of bangkoksoi's 122 s no-lightmap bake: 286 textures, most of them
 * 1024² or smaller, where a process's fixed cost (spawn, PNG decode, temp
 * files) and basis-lz's poor thread scaling on a small image leave 32 cores
 * idle. `concurrency` encodes at a time, each told to use its share of the
 * threads (`THAIKIT_KTX_CONCURRENCY` overrides; 1 restores the serial path).
 */
export function defaultConcurrency() {
  const env = Number(process.env.THAIKIT_KTX_CONCURRENCY);
  if (Number.isFinite(env) && env >= 1) return Math.floor(env);
  return Math.max(1, Math.min(8, os.availableParallelism?.() ?? os.cpus().length));
}
import os from 'node:os';

import { KHRTextureBasisu } from '@gltf-transform/extensions';
import { listTextureSlots } from '@gltf-transform/functions';

import { encodeKtx2 } from './ktx2.mjs';

const COLOUR_SLOTS = /baseColor|emissive/i;

export function compressTextures({ colorMode = 'etc1s', dataMode = 'uastc', maxSize = 2048, concurrency = defaultConcurrency(), onProgress } = {}) {
  return async (doc) => {
    const textures = doc.getRoot().listTextures();
    if (!textures.length) return { count: 0 };
    const basisu = doc.createExtension(KHRTextureBasisu).setRequired(true);
    const jobs = [];
    textures.forEach((tex, idx) => {
      if (tex.getMimeType() === 'image/ktx2') return;
      const slots = listTextureSlots(tex);
      const colour = slots.length === 0 || slots.some((s) => COLOUR_SLOTS.test(s));
      const image = tex.getImage();
      if (!image) return;
      jobs.push({ tex, idx, slots, colour, mode: colour ? colorMode : dataMode, image });
    });
    const workers = Math.max(1, Math.min(concurrency, jobs.length || 1));
    const threads = workers > 1 ? Math.max(1, Math.floor((os.availableParallelism?.() ?? os.cpus().length) / workers)) : null;
    let done = 0;
    let next = 0;
    const worker = async () => {
      while (next < jobs.length) {
        const job = jobs[next++];
        const out = await encodeKtx2(job.image, { mode: job.mode, srgb: job.colour, mipmaps: true, maxSize, threads });
        job.tex.setImage(out.bytes).setMimeType('image/ktx2');
        if (job.tex.getURI()) job.tex.setURI(job.tex.getURI().replace(/\.[a-z0-9]+$/i, '.ktx2'));
        done += 1;
        onProgress?.(`${job.tex.getName() || `texture ${job.idx + 1}`}: ${job.slots.join(',') || 'unreferenced'} → ${job.mode}`, done, jobs.length);
      }
    };
    await Promise.all(Array.from({ length: workers }, worker));
    void basisu;
    return { count: textures.length, encoded: jobs.length, concurrency: workers };
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
