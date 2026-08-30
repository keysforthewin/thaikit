/**
 * The lightmap's shader patch, pinned against three's own source.
 *
 * `attachLightmap` splices text into three's shader chunks, which is a hard
 * dependency on three's exact source. It shipped broken for its whole life --
 * `onBeforeCompile` runs BEFORE `resolveIncludes()`, so the two `replace()`
 * calls were matching against a shader that still said
 * `#include <lights_fragment_begin>` -- and nothing noticed, because a
 * `replace()` that matches nothing is silent and the one `console.warn` went to
 * a smoke log that did not gate.
 *
 * So: assert every anchor string exists verbatim, and assert the patch actually
 * lands in the shader a real compile would see. A `three` bump that rewrites a
 * chunk now fails `npm test` instead of quietly un-lighting the level.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';

import { attachLightmap, DIRECT_LINE, HEMI_LINE, IBL_LINE } from '../src/materials.js';

test('three still contains every anchor we splice against', () => {
  const begin = THREE.ShaderChunk.lights_fragment_begin;
  const maps = THREE.ShaderChunk.lights_fragment_maps;

  // Once each -- a second occurrence would make `replace()` patch the wrong one.
  assert.equal(begin.split(DIRECT_LINE).length - 1, 1, 'directional shadow line');
  assert.equal(begin.split(HEMI_LINE).length - 1, 1, 'hemisphere irradiance line');
  assert.equal(maps.split(IBL_LINE).length - 1, 1, 'IBL irradiance line');
});

test('onBeforeCompile receives UNRESOLVED includes', () => {
  // This is the fact the original code got wrong. If three ever starts
  // resolving includes first, the splice-the-chunk-body approach breaks and
  // this test says so.
  const f = THREE.ShaderLib.physical.fragmentShader;
  assert.ok(f.includes('#include <lights_fragment_begin>'), 'include token present');
  assert.ok(!f.includes('getHemisphereLightIrradiance'), 'chunk body NOT already inlined');
});

/** Run a material's onBeforeCompile the way WebGLRenderer does. */
const compile = (material) => {
  const shader = {
    fragmentShader: THREE.ShaderLib.physical.fragmentShader,
    vertexShader: THREE.ShaderLib.physical.vertexShader,
    uniforms: {},
    defines: {},
  };
  const warnings = [];
  const warn = console.warn;
  console.warn = (m) => warnings.push(m);
  try {
    material.onBeforeCompile(shader, null);
  } finally {
    console.warn = warn;
  }
  return { shader, warnings };
};

test('attachLightmap patches the shader it is actually given', () => {
  const m = new THREE.MeshStandardMaterial();
  attachLightmap(m, new THREE.Texture(), { intensity: 0.5 });

  assert.equal(m.lightMapIntensity, 0.5);
  assert.equal(m.userData.thaikitLightmap, true);

  const { shader, warnings } = compile(m);
  assert.deepEqual(warnings, [], 'no anchor missed');

  assert.ok(
    shader.fragmentShader.includes('directLight.color *= texture2D( lightMap, vLightMapUv ).a;'),
    'moon mask injected',
  );
  assert.ok(shader.fragmentShader.includes('irradiance += vec3( 0.0 );'), 'hemisphere zeroed');
  assert.ok(!shader.fragmentShader.includes(HEMI_LINE), 'live hemisphere term gone');
  assert.ok(
    !shader.fragmentShader.includes('#include <lights_fragment_begin>'),
    'include token consumed',
  );
  assert.equal(shader.defines.THAIKIT_LIGHTMAP, 1);
});

test('the zero we splice in is a vec3, not a float', () => {
  // `irradiance` is a vec3; `irradiance += 0.0;` is a GLSL type error. The
  // original wrote exactly that and got away with it only because the
  // replacement never matched.
  const m = new THREE.MeshStandardMaterial();
  attachLightmap(m, new THREE.Texture());
  const { shader } = compile(m);
  assert.ok(!/irradiance \+= 0\.0;/.test(shader.fragmentShader));
});

test('the patch is named in the program cache key', () => {
  const m = new THREE.MeshStandardMaterial();
  attachLightmap(m, new THREE.Texture());
  assert.equal(m.customProgramCacheKey(), 'thaikit-lightmap-1:0.000');
});

test('env diffuse is suppressed on lightmapped materials, specular is not', () => {
  // Adding `scene.environment` gives a material BOTH ambient diffuse and
  // specular. Static geometry already has the sky as baked diffuse, so only the
  // diffuse half may be cut -- cutting both would be the same as having no IBL.
  const m = new THREE.MeshStandardMaterial();
  attachLightmap(m, new THREE.Texture());
  const { shader, warnings } = compile(m);
  assert.deepEqual(warnings, []);

  assert.ok(
    shader.fragmentShader.includes('getIBLIrradiance( geometryNormal ) * THAIKIT_IBL_DIFFUSE;'),
    'env diffuse scaled by the define',
  );
  assert.equal(shader.defines.THAIKIT_IBL_DIFFUSE, '0.000');
  // The specular path must survive untouched, or metals go matte.
  assert.ok(shader.fragmentShader.includes('getIBLRadiance'), 'env specular still called');
  assert.ok(!shader.fragmentShader.includes('#include <lights_fragment_maps>'), 'token consumed');
});

test('iblDiffuse is dialable and changes the program cache key', () => {
  const dark = new THREE.MeshStandardMaterial();
  attachLightmap(dark, new THREE.Texture());
  const lifted = new THREE.MeshStandardMaterial();
  attachLightmap(lifted, new THREE.Texture(), { iblDiffuse: 0.2 });

  assert.equal(compile(lifted).shader.defines.THAIKIT_IBL_DIFFUSE, '0.200');
  // Two materials generating different source must not share a compiled program.
  assert.notEqual(dark.customProgramCacheKey(), lifted.customProgramCacheKey());
});
