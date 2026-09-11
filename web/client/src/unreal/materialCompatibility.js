import { Material } from 'three';

/** Shader programs and callbacks have no representation in glTF material data. */
export function materialCompatibilityIssues(root, MaterialClass = Material) {
  const issues = [];
  const seen = new Set();
  root.traverse(object => {
    for (const material of [object.material].flat().filter(Boolean)) {
      if (seen.has(material)) continue;
      seen.add(material);
      const reasons = [];
      if (material.isShaderMaterial || material.isRawShaderMaterial || material.isNodeMaterial) {
        reasons.push('custom shader material');
      }
      for (const hook of ['onBeforeCompile', 'onBeforeRender']) {
        if (material[hook] !== MaterialClass.prototype[hook]) reasons.push(hook);
      }
      if (reasons.length) issues.push({ mesh: object.name, material: material.name || material.type, reasons });
    }
  });
  return issues;
}

export function assertMaterialCompatibility(root, name = root.name || 'asset', MaterialClass = Material) {
  const issues = materialCompatibilityIssues(root, MaterialClass);
  if (issues.length) {
    throw new Error(`${name} has materials that cannot export faithfully to GLB: ` +
      issues.map(i => `${i.material} on ${i.mesh || 'unnamed mesh'} (${i.reasons.join(', ')})`).join('; ') +
      '. Use standard PBR materials, textures and vertex colors.');
  }
}
