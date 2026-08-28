import { useMemo } from 'react';

const MAP_KEYS = ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'emissiveMap', 'aoMap', 'lightMap', 'alphaMap'];

/** Bytes a texture holds on the GPU, and whether it stays compressed there. */
export function textureInfo(tex) {
  const img = tex?.image;
  if (!img) return null;
  if (tex.isCompressedTexture) {
    const mips = Array.isArray(tex.mipmaps) && tex.mipmaps.length ? tex.mipmaps : img.mipmaps ?? [];
    const bytes = mips.reduce((t, m) => t + (m.data?.byteLength ?? 0), 0);
    return { width: img.width ?? 0, height: img.height ?? 0, bytes, format: 'ktx2' };
  }
  const w = img.width ?? img.videoWidth ?? 0;
  const h = img.height ?? img.videoHeight ?? 0;
  // 4 bytes per texel, plus a third again for the mip chain.
  return { width: w, height: h, bytes: Math.round(w * h * 4 * (4 / 3)), format: 'rgba' };
}

/**
 * Mesh stats read off a constructed scene: the four budget axes, vertices, and
 * every distinct texture with its GPU cost.
 *
 * GPU bytes and file bytes are shown separately and deliberately: they differ by
 * an order of magnitude, and it is the GPU number that decides whether a low-end
 * machine can hold the level.
 */
export function measureScene(scene) {
  if (!scene) return null;
  let triangles = 0;
  let vertices = 0;
  let drawCalls = 0;
  const materials = new Set();
  // Distinct geometries, not distinct meshes. The GAP between this and
  // drawCalls is the only visible evidence that a repeated part became one
  // InstancedMesh rather than N copies of the same primitive.
  const geometries = new Set();
  const images = new Map();
  let gpuBytes = 0;

  scene.traverse((o) => {
    if (!o.isMesh) return;
    drawCalls++;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of mats) if (m) materials.add(m.uuid);
    const g = o.geometry;
    geometries.add(g.uuid);
    // An InstancedMesh is one draw call and one geometry but N copies on
    // screen, every one of which the GPU rasterises.
    const copies = o.isInstancedMesh ? o.count ?? 0 : 1;
    const meshVertices = g.attributes.position?.count ?? 0;
    vertices += meshVertices * copies;
    triangles += (g.index ? g.index.count / 3 : meshVertices / 3) * copies;

    for (const m of mats) {
      if (!m) continue;
      for (const key of MAP_KEYS) {
        const tex = m[key];
        const img = tex?.image;
        if (!img) continue;
        const known = images.get(img);
        if (known) { known.uses++; continue; }
        const info = textureInfo(tex);
        if (!info) continue;
        images.set(img, { ...info, uses: 1, name: tex.name || key, uuid: tex.uuid });
        gpuBytes += info.bytes;
      }
    }
  });

  return {
    triangles: Math.round(triangles),
    vertices,
    drawCalls,
    materials: materials.size,
    materialIds: [...materials],
    uniqueGeometries: geometries.size,
    textures: images.size,
    textureList: [...images.values()],
    gpuBytes,
  };
}

export function useMeshStats(scene) {
  return useMemo(() => measureScene(scene), [scene]);
}
