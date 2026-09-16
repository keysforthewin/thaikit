import { PropertyType } from '@gltf-transform/core';
import { prune, weldPrimitive } from '@gltf-transform/functions';

/** Weld indexed exports too. The library's default skips existing indices.
 * Complete attribute equality preserves authored seams and lightmap addresses. */
export function weldIndexedGeometry() {
  return async doc => {
    for (const mesh of doc.getRoot().listMeshes()) {
      for (const primitive of mesh.listPrimitives()) weldPrimitive(primitive, { overwrite: true });
    }
  };
}

/** Disposing a mesh does not dispose its primitives. Clear those graph-only
 * parents before testing accessor liveness, or their buffers still serialize.
 * Keep lighting UVs, named cell leaves, and manifest-owned textures intact. */
export function pruneUnusedGeometry() {
  return prune({
    propertyTypes: [PropertyType.NODE, PropertyType.MESH, PropertyType.PRIMITIVE,
      PropertyType.PRIMITIVE_TARGET, PropertyType.ACCESSOR, PropertyType.MATERIAL],
    keepLeaves: true, keepAttributes: true, keepSolidTextures: true,
  });
}

/** Check serialized accessor references independently of the property graph. */
export function auditGeometryUsage(json) {
  const accessors = json.accessors ?? [];
  const used = new Set();
  const failures = [];
  const add = (index, label) => {
    if (!Number.isInteger(index) || !accessors[index]) failures.push(`${label}: missing accessor ${index}`);
    else used.add(index);
  };
  const attributes = (values, label) => {
    for (const [semantic, index] of Object.entries(values ?? {})) add(index, `${label}.${semantic}`);
  };
  for (const [mi, mesh] of (json.meshes ?? []).entries()) {
    for (const [pi, prim] of (mesh.primitives ?? []).entries()) {
      const label = `meshes[${mi}].primitives[${pi}]`;
      attributes(prim.attributes, `${label}.attributes`);
      if (prim.indices != null) add(prim.indices, `${label}.indices`);
      for (const [ti, target] of (prim.targets ?? []).entries()) attributes(target, `${label}.targets[${ti}]`);
    }
  }
  for (const [i, skin] of (json.skins ?? []).entries()) {
    if (skin.inverseBindMatrices != null) add(skin.inverseBindMatrices, `skins[${i}].inverseBindMatrices`);
  }
  for (const [i, animation] of (json.animations ?? []).entries()) {
    for (const [si, sampler] of (animation.samplers ?? []).entries()) {
      add(sampler.input, `animations[${i}].samplers[${si}].input`);
      add(sampler.output, `animations[${i}].samplers[${si}].output`);
    }
  }
  for (const [i, node] of (json.nodes ?? []).entries()) {
    attributes(node.extensions?.EXT_mesh_gpu_instancing?.attributes, `nodes[${i}].instances`);
  }
  const unusedAccessors = accessors.map((_, i) => i).filter(i => !used.has(i));
  if (unusedAccessors.length) failures.push(`unused geometry accessors: ${unusedAccessors.join(', ')}`);
  return { ok: failures.length === 0, failures, unusedAccessors, usedAccessors: used.size };
}
