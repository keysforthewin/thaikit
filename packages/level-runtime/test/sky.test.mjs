/**
 * The sky's domes, built without a GL context.
 *
 * `buildSky` only assembles objects, so everything here runs headlessly. The
 * two properties worth pinning are the ones whose absence is silent and
 * expensive: a dome that answers a raycast swallows every object placement in
 * the editor, and a dome that does not ride the camera drifts away as the
 * player walks.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';

import { buildSky, SKY_RADIUS } from '../src/sky.js';

const fakeTexture = () => {
  const t = new THREE.Texture();
  t.image = { width: 4, height: 2 };
  return t;
};

const FULL = {
  base: { intensity: 1, rotationDeg: 0 },
  clouds: { color: '#ffffff', opacity: 0.5, driftDegPerMin: 360, repeat: 2, heightScale: 0.35 },
  stars: { density: 1, brightness: 1, twinkleSpeed: 1, color: '#dfe6ff', horizonFade: 0.25 },
};

test('all three layers build, in back-to-front order', () => {
  const sky = buildSky(FULL, { base: fakeTexture(), clouds: fakeTexture() });
  const names = sky.group.children.map((c) => c.name);
  assert.deepEqual(names, ['sky-base', 'sky-stars', 'sky-clouds']);
  // Painted first, and in that order, so everything solid draws over them.
  const orders = sky.group.children.map((c) => c.renderOrder);
  assert.deepEqual(orders, [-30, -20, -10]);
  for (const mesh of sky.group.children) {
    assert.equal(mesh.material.depthWrite, false, `${mesh.name} must not write depth`);
    assert.equal(mesh.material.side, THREE.BackSide, `${mesh.name} must face inward`);
  }
  sky.dispose();
});

// The editor casts the camera's forward ray through the centre of the frame to
// decide where a new object lands. A dome surrounds the camera, so it is the
// first thing that ray meets -- without an overridden raycast, every placement
// would land on the sky instead of on the ground.
// An additive material is `transparent`, so three sorts it into the transparent
// queue and draws it AFTER every opaque object no matter what renderOrder says.
// With depthTest off, the star field therefore painted straight over solid
// geometry and you could see stars through a building.
test('the additive domes are occluded by solid geometry', () => {
  const sky = buildSky(FULL, { base: fakeTexture(), clouds: fakeTexture() });
  const by = Object.fromEntries(sky.group.children.map((c) => [c.name, c.material]));
  assert.equal(by['sky-stars'].depthTest, true, 'stars must test depth');
  assert.equal(by['sky-clouds'].depthTest, true, 'clouds must test depth');
  // The backdrop is opaque and drawn first, before there is any depth to test.
  assert.equal(by['sky-base'].depthTest, false);
  sky.dispose();
});

test('no dome is ever a raycast target', () => {
  const sky = buildSky(FULL, { base: fakeTexture(), clouds: fakeTexture() });
  const caster = new THREE.Raycaster(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -1));
  const hits = caster.intersectObject(sky.group, true);
  assert.equal(hits.length, 0, 'a dome answered a raycast');
  sky.dispose();
});

test('the domes ride the camera and the clouds drift', () => {
  const sky = buildSky(FULL, { base: fakeTexture(), clouds: fakeTexture() });
  sky.update(0.5, new THREE.Vector3(120, 3, -47));
  assert.deepEqual(sky.group.position.toArray(), [120, 3, -47]);
  // 360 deg/min is one full turn a minute, so half a second is 1/120 of the map.
  assert.ok(Math.abs(sky.clouds.uniforms.uOffset.value - 1 / 120) < 1e-6);
  assert.equal(sky.stars.uniforms.uTime.value, 0.5);
  sky.update(0.25, new THREE.Vector3(0, 0, 0));
  assert.equal(sky.stars.uniforms.uTime.value, 0.75);
  sky.dispose();
});

test('layers left out of the config are simply absent', () => {
  const starsOnly = buildSky({ stars: FULL.stars }, {});
  assert.deepEqual(starsOnly.group.children.map((c) => c.name), ['sky-stars']);
  starsOnly.dispose();

  const noStars = buildSky({ ...FULL, stars: { ...FULL.stars, enabled: false } }, { base: fakeTexture() });
  assert.deepEqual(noStars.group.children.map((c) => c.name), ['sky-base']);
  noStars.dispose();

  // Clouds configured but with no image is not half a cloud layer.
  const noImage = buildSky({ clouds: FULL.clouds }, {});
  assert.deepEqual(noImage.group.children.map((c) => c.name), []);
  noImage.dispose();
});

test('a cube base takes the cube sampler, an equirect base does not', () => {
  const cube = new THREE.CubeTexture([{}, {}, {}, {}, {}, {}]);
  const withCube = buildSky(FULL, { base: cube });
  assert.ok('uCube' in withCube.base.uniforms);
  assert.ok(!('uMap' in withCube.base.uniforms));
  withCube.dispose();

  const flat = fakeTexture();
  const withFlat = buildSky(FULL, { base: flat });
  assert.ok('uMap' in withFlat.base.uniforms);
  // No mipmaps: an equirect's poles collapse to the sky's average colour under
  // automatic mip selection, which reads as a grey disc overhead.
  assert.equal(flat.generateMipmaps, false);
  assert.equal(flat.minFilter, THREE.LinearFilter);
  assert.equal(flat.mapping, THREE.UVMapping);
  withFlat.dispose();
});

test('the dome sits inside a normal camera far plane', () => {
  assert.ok(SKY_RADIUS * 1.02 < 3000, 'the base dome must be inside the editor camera far plane');
});

test('a panoramic base previews with the ground the panorama does not have', () => {
  const sky = buildSky(
    {
      ...FULL,
      base: {
        ...FULL.base,
        mode: 'panoramic',
        elevation: { minDeg: 0, maxDeg: 90 },
        nadir: { color: '#192027', startDeg: 8, endDeg: 40 },
      },
    },
    { base: fakeTexture() },
  );
  const { defines, uniforms } = sky.base;
  assert.ok('PANORAMIC_SOURCE' in defines, 'the preview must remap the rows and fill the nadir');
  assert.ok(!('CUBE_SOURCE' in defines));
  // The coverage reaches the shader in radians: a sky-only panorama's last row
  // is the HORIZON, not the nadir, and reading it as a whole sphere squashes
  // the sky into the top half of the dome.
  assert.equal(uniforms.uElevation.value.x, 0);
  assert.ok(Math.abs(uniforms.uElevation.value.y - Math.PI / 2) < 1e-9);
  assert.ok(Math.abs(uniforms.uNadirFade.value.x - (8 * Math.PI) / 180) < 1e-9);
  assert.ok(Math.abs(uniforms.uNadirFade.value.y - (40 * Math.PI) / 180) < 1e-9);
  sky.dispose();
});

test('a shipped panoramic sky is a cubemap, so the preview fill is not applied twice', () => {
  // The bake resamples the fade INTO the faces, so the runtime -- which gets a
  // CompressedCubeTexture and a manifest with no `mode` -- must take the cube
  // branch and leave the nadir alone.
  const cube = new THREE.CubeTexture([{}, {}, {}, {}, {}, {}]);
  const sky = buildSky({ ...FULL, base: { ...FULL.base, projection: 'cube' } }, { base: cube });
  assert.ok('CUBE_SOURCE' in sky.base.defines);
  assert.ok(!('PANORAMIC_SOURCE' in sky.base.defines));
  sky.dispose();
});

test('a cubemap backdrop is sampled with a negative mip bias', () => {
  // A sky authored at more px/degree than the screen has is MINIFIED, so the
  // GPU picks a fractional mip and trilinear blends in a half-resolution level.
  // Measured against a 3x3 supersampled reference at 60 degrees FOV, bias 0
  // scored an RMSE of 1.42 against 0.52 for -0.5 -- the latter being what
  // sampling level 0 directly scores, but without giving up the chain that
  // stops a wide FOV crawling.
  const cube = new THREE.CubeTexture([{}, {}, {}, {}, {}, {}]);
  const shipped = buildSky({ ...FULL, base: { ...FULL.base, projection: 'cube' } }, { base: cube });
  assert.equal(shipped.base.uniforms.uLodBias.value, -0.5, 'a manifest with no bias recorded still gets the default');
  shipped.dispose();

  const authored = buildSky({ ...FULL, base: { ...FULL.base, projection: 'cube', lodBias: -1.5 } }, { base: cube });
  assert.equal(authored.base.uniforms.uLodBias.value, -1.5);
  authored.dispose();

  // The equirect path ships no chain, so there is nothing to bias.
  const flat = buildSky(FULL, { base: fakeTexture() });
  assert.ok(!('uLodBias' in flat.base.uniforms));
  flat.dispose();
});
