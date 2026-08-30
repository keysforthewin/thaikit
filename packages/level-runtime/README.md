# @thai-kit/level-runtime

Load a baked [thaikit](https://github.com/keysforthewin/thaikit) level into a
three.js game. **One GLB is the whole map** — geometry, LOD tiers, lightmap, sky,
lights, colliders and spawn points — and `loadLevel()` is the only call you make.

```sh
npm i @thai-kit/level-runtime three
```

```js
import * as THREE from 'three';
import { loadLevel } from '@thai-kit/level-runtime';

const level = await loadLevel('/levels/soi.glb', {
  scene, renderer, camera,
  transcoderPath: '/basis/',      // where you serve basis_transcoder.{js,wasm}
});

const spawn = level.spawns.pick();
camera.position.fromArray(spawn.position);

renderer.setAnimationLoop(() => {
  level.update(clock.getDelta(), camera.position);
  renderer.render(scene, camera);
});
```

`level.update()` steps physics, switches LOD tiers by distance to each cell's
box, keeps the moon's shadow frustum snapped around the camera, re-faces
billboards and drifts the sky. `loadLevel` adds the level root to your scene
itself, builds the sky as domes, and sets `scene.environment` from a PMREM probe
prefiltered off the sky's own shader.

## What you must not do

The level arrives **already lit**. Do not add an ambient or hemisphere light, and
do not add a sun — the bake put sky light and bounce in the lightmap, and the
manifest's directional light comes back with its shadow settings intact. Adding
yours on top double-counts the bake. Set `camera.far` to at least 2000; the sky
domes sit at radius 1200. And as with three itself: **two copies of `three` and
nothing draws.**

Full integration guide, including migrating a game that loads one GLB per prop:
[`docs/using-a-baked-level.md`](https://github.com/keysforthewin/thaikit/blob/main/docs/using-a-baked-level.md).

## Physics is your choice

Colliders ship as plain data — boxes, cylinders, spheres and capsules in metres —
so no engine is baked in. A [Rapier](https://rapier.rs) adapter is included
(`@thai-kit/level-runtime/physics/rapier`), or implement four methods on
`PhysicsAdapter`, or use none: `level.raycast(ray)` is a `three-mesh-bvh` query
against real lod0 triangles and works regardless.

## Headless

`@thai-kit/level-runtime/node` never imports three. A game server reads the same
GLB and builds the same bodies from the same manifest:

```js
import { loadLevelHeadless } from '@thai-kit/level-runtime/node';
const level = await loadLevelHeadless('./level.glb', { physics });
```

This is why `three` is an optional peer dependency: the browser entries all
require it, the `/node` entry genuinely does not.

MIT.
