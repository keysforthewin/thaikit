import * as THREE from 'three';

/**
 * The three lines we splice into three's own shader chunks.
 *
 * These are verbatim source from three r185. `packages/level-runtime/test/
 * materials.test.mjs` asserts each one still exists, so a `three` bump that
 * rewrites a chunk fails the build instead of silently un-patching the level.
 */
const DIRECT_LINE =
  'directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], ' +
  'directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, ' +
  'directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;';

const HEMI_LINE = 'irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );';

const IBL_LINE = 'iblIrradiance += getIBLIrradiance( geometryNormal );';

// The `#if` that opens each punctual-light loop. Guarding the whole block is
// safer than zeroing `directLight.color` inside it: `unrollLoops` expands the
// `#pragma unroll_loop` region textually BEFORE the preprocessor runs, so the
// added clause survives unrolling and the preprocessor then drops the loop,
// its shadow lookups and all; the `pointLights[]` uniforms simply go inactive.
const POINT_GUARD = '#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )';
const SPOT_GUARD = '#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )';
const BAKED_PUNCTUAL = '&& !defined( THAIKIT_BAKED_PUNCTUAL )';

/**
 * Patch a chunk's BODY, then substitute it for its unresolved include token.
 *
 * `onBeforeCompile` runs BEFORE three's `resolveIncludes()`, so the shader it
 * hands you still says `#include <lights_fragment_begin>` and contains none of
 * the code you want to edit. Replacing against the resolved text is the bug
 * this file shipped with for its whole life: both replacements matched nothing
 * and every level rendered with the sky counted twice and the moon unshadowed.
 */
function splice(shader, chunk, edits) {
  let body = THREE.ShaderChunk[chunk];
  for (const [find, replace, what] of edits) {
    if (!body.includes(find)) {
      console.warn(`[level-runtime] three changed ${chunk}; ${what}`);
      continue;
    }
    body = body.replace(find, replace);
  }
  shader.fragmentShader = shader.fragmentShader.replace(`#include <${chunk}>`, body);
}

/**
 * Attach the baked lightmap to a static material.
 *
 * RGB is indirect + sky + emissive bounce -- and, when the bake says
 * `bakedLights`, every authored point and spot lamp's direct light, shadows
 * and bounce -- added as irradiance the normal way (three's lightMap path).
 * A is the moon's visibility, which masks the real-time directional light's
 * DIRECT term -- so the moon stays a live light for dynamic objects and a
 * small dynamic shadow map, while static geometry gets Cycles' soft shadows
 * for free. The hemisphere term is zeroed on static materials because the
 * bake already contains the sky.
 *
 * `bakedPunctual` is the lamps' half of the same bargain: the bake holds
 * them, so their live direct term is cut here by dropping the point and spot
 * loops from the fragment shader. Dynamic objects never pass through this
 * and keep every lamp live, which is what a baked FPS level does. It is an
 * opt-in so a level baked before the lamps went into the atlas renders
 * exactly as it did.
 *
 * The mask is injected after the shadow lookup, which sits inside
 * `#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )`
 * -- so it applies to SHADOW-CASTING directionals only. That is the moon, which
 * is the light the alpha channel was baked against; a directional with no shadow
 * map has no baked visibility to mask it with.
 */
export function attachLightmap(material, texture, { intensity = 1, iblDiffuse = 0, bakedPunctual = false } = {}) {
  material.lightMap = texture;
  material.lightMapIntensity = intensity;
  material.userData.thaikitLightmap = true;
  const factor = Number(iblDiffuse).toFixed(3);
  material.onBeforeCompile = (shader) => {
    shader.defines = shader.defines ?? {};
    shader.defines.THAIKIT_LIGHTMAP = 1;
    shader.defines.THAIKIT_IBL_DIFFUSE = factor;
    if (bakedPunctual) shader.defines.THAIKIT_BAKED_PUNCTUAL = 1;
    splice(shader, 'lights_fragment_begin', [
      [
        DIRECT_LINE,
        `${DIRECT_LINE}\n\t\tdirectLight.color *= texture2D( lightMap, vLightMapUv ).a;`,
        'the moon is not masked by the baked visibility',
      ],
      // The sky is baked in: drop the live hemisphere light's contribution here.
      // `irradiance` is a vec3, so the zero has to be one too.
      [HEMI_LINE, 'irradiance += vec3( 0.0 );', 'the baked sky is counted twice'],
      // The lamps are in the bake (direct + bounce) on static geometry, so
      // their live loops go. Spliced only when asked, so an older level's
      // shader source is byte-identical to what it was.
      ...(bakedPunctual ? [
        [POINT_GUARD, `${POINT_GUARD} ${BAKED_PUNCTUAL}`, 'baked point lights are counted twice'],
        [SPOT_GUARD, `${SPOT_GUARD} ${BAKED_PUNCTUAL}`, 'baked spot lights are counted twice'],
      ] : []),
    ]);
    // ...and for the same reason, drop the ENVIRONMENT's diffuse half. Verified
    // in three r185: `lights_fragment_end` hands `iblIrradiance` only to
    // `RE_IndirectSpecular`, where it feeds `diffuse * cosineWeightedIrradiance`
    // and the multiscatter compensation, while the specular we want arrives
    // separately as `radiance` from `getIBLRadiance`. So this is exactly the
    // cut: env diffuse out, env specular and the lightmap's own indirect
    // diffuse untouched.
    //
    // A #define rather than a hard zero so a dim bake can be given some of it
    // back without another string edit.
    splice(shader, 'lights_fragment_maps', [
      [IBL_LINE, IBL_LINE.replace(';', ' * THAIKIT_IBL_DIFFUSE;'), 'the environment sky is counted twice'],
    ]);
  };
  // Static and dynamic materials happen to differ by USE_LIGHTMAP today, but
  // that accident is not a cache key -- name the patch so it cannot collide,
  // and vary it with anything that changes the generated source.
  material.customProgramCacheKey = () => `thaikit-lightmap-2:${factor}:${bakedPunctual ? 1 : 0}`;
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

export { THREE, DIRECT_LINE, HEMI_LINE, IBL_LINE, POINT_GUARD, SPOT_GUARD, BAKED_PUNCTUAL };
