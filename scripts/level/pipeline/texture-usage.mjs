import { PropertyType } from '@gltf-transform/core';
import { prune } from '@gltf-transform/functions';

/** These images are loaded directly by the runtime, outside glTF materials. */
export function manifestImageSlots(manifest) {
  const slots = [];
  const add = (owner, label) => { if (owner) slots.push({ owner, label }); };
  if (manifest?.lightmap?.atlases) {
    manifest.lightmap.atlases.forEach((page, i) => add(page, `lightmap.atlases[${i}].image`));
  } else add(manifest?.lightmap, 'lightmap.image');
  add(manifest?.sky?.base, 'sky.base.image');
  add(manifest?.sky?.clouds, 'sky.clouds.image');
  return slots;
}

/** Remove dead images before encoding, or preserve/remap manifest images in
 * an already packaged document. Never rely on names or extras as proof of use. */
export async function pruneUnusedTextures(doc) {
  const root = doc.getRoot();
  const before = root.listTextures();
  const refs = root.listScenes().flatMap(scene =>
    manifestImageSlots(scene.getExtras()?.thaikitManifest).map(slot => {
      const index = slot.owner.image;
      if (!Number.isInteger(index) || !before[index]) throw new Error(`${slot.label}: missing image ${index}`);
      return { ...slot, texture: before[index] };
    }));
  // Material removal must precede image liveness checks. Preserve solid maps:
  // this operation must not alter a surviving material's appearance.
  await doc.transform(prune({ propertyTypes: [PropertyType.MATERIAL], keepSolidTextures: true }));
  const protectedImages = new Set(refs.map(ref => ref.texture));
  // Follow surviving materials through their extension properties. An orphaned
  // extension can still reference an image after its material is disposed.
  const materialImages = new Set();
  const visited = new Set();
  const visit = property => {
    if (visited.has(property)) return;
    visited.add(property);
    if (property.propertyType === PropertyType.TEXTURE) materialImages.add(property);
    for (const edge of doc.getGraph().listChildEdges(property)) visit(edge.getChild());
  };
  root.listMaterials().forEach(visit);
  const removed = [];
  for (const texture of before) {
    if (protectedImages.has(texture) || materialImages.has(texture)) continue;
    removed.push({ name: texture.getName(), bytes: texture.getImage()?.byteLength ?? 0 });
    texture.dispose();
  }
  const after = root.listTextures();
  for (const ref of refs) ref.owner.image = after.indexOf(ref.texture);
  return { removed: removed.length, bytes: removed.reduce((n, image) => n + image.bytes, 0), remaining: after.length };
}

/** Audit serialized indices independently of the document graph used to prune.
 * Material extension texture slots follow glTF's *Texture: { index } convention.
 * Lightmaps/sky deliberately reference images[], not textures[]. */
export function auditTextureUsage(json) {
  const failures = [];
  const images = json.images ?? [];
  const textures = json.textures ?? [];
  const usedTextures = new Set();
  const materialImages = new Set();
  const manifestImages = new Set();
  const usedMaterials = new Set();
  for (const mesh of json.meshes ?? []) for (const prim of mesh.primitives ?? []) {
    if (prim.material != null) usedMaterials.add(prim.material);
    for (const mapping of prim.extensions?.KHR_materials_variants?.mappings ?? []) usedMaterials.add(mapping.material);
  }
  const addImage = (index, label, used) => {
    if (!Number.isInteger(index) || !images[index]) { failures.push(`${label}: missing image ${index}`); return; }
    used.add(index);
    const image = images[index];
    const view = json.bufferViews?.[image.bufferView];
    if (!Number.isInteger(image.bufferView) || !view || !(view.byteLength > 0) || image.uri != null) {
      failures.push(`${label}: image ${index} must have embedded bytes`);
    }
  };
  const walk = (value, label) => {
    if (!value || typeof value !== 'object') return;
    for (const [key, child] of Object.entries(value)) {
      if (key === 'extras') continue;
      if (key.endsWith('Texture') && child && typeof child === 'object') {
        const index = child.index;
        if (!Number.isInteger(index) || !textures[index]) failures.push(`${label}.${key}: missing texture ${index}`);
        else usedTextures.add(index);
      } else walk(child, `${label}.${key}`);
    }
  };
  for (const index of usedMaterials) {
    if (!json.materials?.[index]) failures.push(`missing material ${index}`);
    else walk(json.materials[index], `materials[${index}]`);
  }
  for (const index of usedTextures) {
    const texture = textures[index];
    const sources = [];
    if (texture.source != null) sources.push(texture.source);
    for (const extension of Object.values(texture.extensions ?? {})) {
      if (extension.source != null) sources.push(extension.source);
    }
    if (!sources.length) failures.push(`textures[${index}]: no image source`);
    for (const source of sources) addImage(source, `textures[${index}]`, materialImages);
  }
  for (const scene of json.scenes ?? []) for (const { owner, label } of manifestImageSlots(scene.extras?.thaikitManifest)) {
    addImage(owner.image, label, manifestImages);
  }
  const usedImages = new Set([...materialImages, ...manifestImages]);
  const unusedImages = images.map((_, i) => i).filter(i => !usedImages.has(i));
  const unusedTextures = textures.map((_, i) => i).filter(i => !usedTextures.has(i));
  if (unusedImages.length) failures.push(`unused images: ${unusedImages.join(', ')}`);
  if (unusedTextures.length) failures.push(`unused glTF textures: ${unusedTextures.join(', ')}`);
  return { ok: failures.length === 0, failures, materialImages: [...materialImages], manifestImages: [...manifestImages], unusedImages, unusedTextures };
}
