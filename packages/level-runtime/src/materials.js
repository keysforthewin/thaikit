import * as THREE from 'three';

const DIRECT_LINE = 'directLight.color *= ( ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0 );';

/**
 * Attach the baked lightmap to a static material.
 *
 * RGB is indirect + sky + emissive bounce, added as irradiance the normal
 * way (three's lightMap path). A is the moon's visibility, which masks the
 * real-time directional light's DIRECT term -- so the moon stays a live light
 * for dynamic objects and a small dynamic shadow map, while static geometry
 * gets Cycles' soft shadows for free. The hemisphere term is zeroed on static
 * materials because the bake already contains the sky.
 */
export function attachLightmap(material, texture, { intensity = 1 } = {}) {
  material.lightMap = texture;
  material.lightMapIntensity = intensity;
  material.userData.thaikitLightmap = true;
  material.onBeforeCompile = (shader) => {
    shader.defines = shader.defines ?? {};
    shader.defines.THAIKIT_LIGHTMAP = 1;
    if (shader.fragmentShader.includes(DIRECT_LINE)) {
      shader.fragmentShader = shader.fragmentShader.replace(
        DIRECT_LINE,
        `${DIRECT_LINE}\n\t\tdirectLight.color *= texture2D( lightMap, vLightMapUv ).a;`,
      );
    } else {
      console.warn('[level-runtime] three changed lights_fragment_begin; the moon is not masked by the baked visibility');
    }
    // The sky is baked in: drop the live hemisphere light's contribution here.
    shader.fragmentShader = shader.fragmentShader.replace(
      'irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );',
      'irradiance += 0.0;',
    );
  };
  material.needsUpdate = true;
}

/** Every material under a root, once. */
export function eachMaterial(root, fn) {
  const seen = new Set();
  root.traverse((o) => {
    if (!o.isMesh) return;
    for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
      if (!m || seen.has(m)) continue;
      seen.add(m);
      fn(m, o);
    }
  });
}

export { THREE };
