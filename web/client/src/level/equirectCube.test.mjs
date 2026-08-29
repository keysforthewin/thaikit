/**
 * The preview face size.
 *
 * This mirrors `faceSizeFor` in `scripts/level/pipeline/sky.mjs`, and the two
 * drifting apart is a sky the editor resolves differently from the level --
 * which is exactly what happened while the preview ceiling sat at 1024 against
 * the bake's 2048: an 8192-wide panorama previewed at 11.4 px/deg and shipped
 * at 22.8, so a soft source and a soft preview looked identical.
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import { faceSizeFor, PREVIEW_MAX_FACE } from './equirectCube.js';
import { faceSizeFor as bakeFaceSizeFor, MAX_FACE } from '../../../../scripts/level/pipeline/sky.mjs';

test('the preview ceiling is the bake ceiling', () => {
  assert.equal(PREVIEW_MAX_FACE, MAX_FACE);
  assert.equal(PREVIEW_MAX_FACE, 3072);
});

test('a face is the panorama width over PI, under that ceiling', () => {
  assert.equal(faceSizeFor(4096), 1304);
  assert.equal(faceSizeFor(8192), 2608, 'an 8192 panorama is source-limited, not capped');
  assert.equal(faceSizeFor(16384), 3072, 'past the ceiling, capped');
  assert.equal(faceSizeFor(1920), 608, 'a small source is not upsampled');
  assert.equal(faceSizeFor(64), 256, 'with a floor, so a thumbnail is still a cubemap');
});

/**
 * The whole point of PI rather than 4: a face's CENTRE, where the camera is
 * pointed, has to carry the density the equirect does. `width / 4` gave it the
 * face AVERAGE, which on a tangent plane is PI/4 too optimistic.
 */
test('the face centre resolves what the panorama does', () => {
  for (const w of [4096, 8192]) {
    const centre = (faceSizeFor(w) * Math.PI) / 360;   // px/deg at the face centre
    const source = w / 360;                            // px/deg in the equirect
    assert.ok(Math.abs(centre - source) / source < 0.01, `width ${w}: ${centre} vs ${source}`);
  }
});

test('the editor and the bake agree at every width', () => {
  for (const w of [512, 1920, 2048, 4096, 6336, 8192, 12000, 16384]) {
    assert.equal(faceSizeFor(w), bakeFaceSizeFor(w, PREVIEW_MAX_FACE), `width ${w}`);
  }
});
