# Shipping a baked level in your game

You have a game that loads one GLB per prop and places them itself. A baked
thaikit level replaces that whole layer: **one GLB is the entire map** — the
geometry, its LOD tiers, the lightmap, the sky, the lights, the colliders and
the spawn points — and `loadLevel()` from `@thai-kit/level-runtime` is the only
call you make. This document is how to wire it up and what changes on your side.

---

## 1. What you ship

The bake writes `levels/<id>/build/level.glb` and copies it to
`$THAIKIT_EXPORT_DIR/<id>.glb` -- your game's GLB folder, set in `.env` (default
`../Operation-X/GLB`); the export dialog prints the delivered path. **That file is
self-contained.**
Everything is inside it, including the images nothing in glTF has a slot for:

| Thing | Where it lives in the file |
| --- | --- |
| Static geometry | `cell_<ix>_<iz>/lod0 · lod1 · lod2` nodes |
| Dynamic (physics / billboard) props | `dynamic/<placement>` nodes |
| Lights | `KHR_lights_punctual` nodes |
| Lightmap | a KTX2 `images[]` entry, index in `manifest.lightmap.image` |
| Sky base + clouds | KTX2 `images[]` entries, indices in `manifest.sky` |
| Colliders, spawns, LOD distances, ambient, IBL | `scene.extras.thaikitManifest` |

The other files in `build/` (`raw.glb`, `stage1..3.glb`, `bake.json`,
`lod.json`, `verify.json`, `lightmap/`) are **build intermediates**. Do not ship
them. `levels/<id>/level.glb` (the editable project, 43 MB for `thepurge`) and
`levels/<id>/sky/*` are **authoring** inputs — also not shipped. Only
`build/level.glb` goes to the game (8.3 MB for `thepurge`).

### The one external asset

`level.glb` is compressed with **KTX2/Basis** textures and **meshopt** geometry.
The meshopt decoder is bundled with three; the Basis transcoder is not — it is a
`.js` + `.wasm` pair you must serve. Copy them out of three and host them:

```sh
mkdir -p public/basis
cp node_modules/three/examples/jsm/libs/basis/basis_transcoder.{js,wasm} public/basis/
```

Then pass `transcoderPath: '/basis/'`. The default points at unpkg, which works
but adds a third-party request on the critical path — don't ship that.

---

## 2. Installing the runtime

`@thai-kit/level-runtime` is a workspace package in this repo and is
`private: true`, so it is not on npm. Two ways to consume it from your game:

**Vendor it.** Copy `packages/level-runtime/` and `packages/level-schema/` into
your game, or add this repo as a git submodule and point your bundler at
`packages/level-runtime/src/index.js`. Both are plain ESM with no build step.

**Or install from git** if your game is a separate repo:

```json
{
  "dependencies": {
    "@thai-kit/level-runtime": "github:<you>/thaikit#main&path:/packages/level-runtime"
  }
}
```

Its real dependencies:

```sh
npm i three@^0.185.1 three-mesh-bvh@^0.8.3 zod
npm i @dimforge/rapier3d-compat@^0.20.0   # only if you want physics
```

`three` and rapier are **peer** dependencies and both are optional at the
package level — the runtime uses whichever `three` your app already has. As with
the prop bundles, **a second copy of three means nothing draws.** Deduplicate it
in your bundler if you see two.

`three-mesh-bvh` is a hard dependency (it powers `level.raycast`), and
`@thai-kit/level-schema` pulls in `zod`, which validates the manifest at load.

---

## 3. The minimum integration

```js
import * as THREE from 'three';
import { loadLevel } from '@thai-kit/level-runtime';

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;              // the moon's dynamic shadows

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 2000);  // far >= 2000: the sky domes sit at r=1200

const level = await loadLevel('/levels/thepurge.glb', {
  scene, renderer, camera,
  transcoderPath: '/basis/',
});

// Put the player at a spawn the level author placed.
const spawn = level.spawns.pick();              // or .pick('red') for a team
camera.position.fromArray(spawn.position);
camera.position.y += 1.7;                       // eye height
camera.rotation.y = THREE.MathUtils.degToRad(spawn.yawDeg);

const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.1);
  level.update(dt, camera.position);            // physics, LOD, shadow box, billboards, sky
  renderer.render(scene, camera);
});
```

That is the whole thing. `loadLevel` adds the level root to your scene itself,
adds the sky domes to `scene` (not to the root), sets `scene.environment`, and
creates the lights.

### `level.update(dt, cameraPosition)` — call it every frame

It does five jobs, and skipping it breaks each in a different way:

1. steps physics and copies dynamic bodies back onto their nodes,
2. switches LOD tiers by distance (every 3rd frame, with hysteresis),
3. keeps the moon's shadow frustum snapped around the camera,
4. re-faces billboarded placements,
5. moves the sky domes with the camera and drifts the clouds.

`cameraPosition` defaults to `camera.position` if you passed a camera.

---

## 4. What `loadLevel` returns

```js
{
  manifest,          // the parsed thaikitManifest — bounds, cells, lod, lights, sky, ibl…
  root,              // THREE.Group already added to your scene
  cells,             // CellSet — .forceTier(n) pins an LOD tier, -1 restores
  lights,            // { moon, list, ambient, follow }
  sky,               // { group, update, dispose } or null
  environment,       // { texture, size, source, bytes, ms } or null
  billboards, lightmap, gltf,
  colliders,         // { staticShapes, staticHandle, dynamic }
  physics,           // the adapter you passed
  spawns: { list, pick(team) },
  raycast(ray, { far }),   // BVH hitscan against static lod0 geometry
  update(dt, cameraPosition),
  dispose(),
}
```

### Options

| Option | Default | Notes |
| --- | --- | --- |
| `scene`, `renderer` | **required** | the renderer is needed for KTX2 format detection |
| `camera` | `null` | needed for billboards and for the default `update` target |
| `physics` | `new NullPhysics()` | see §6 |
| `transcoderPath` | unpkg | where `basis_transcoder.{js,wasm}` are served |
| `ktx2Loader` | — | pass your own if you already have one configured |
| `sky` | `true` | `false` leaves `scene.background` to you |
| `ibl` | `true` | image-based lighting, if the level was baked with it |
| `iblSize` | manifest's | probe resolution; 256 is the bake default |
| `lightmapIntensity` | manifest's | override |
| `hemisphere` | `true` | ignored when IBL is live — see §5 |

`source` may be a URL **or** an `ArrayBuffer`, if you fetch the GLB yourself
(progress bars, caching, a packed asset bundle).

### Teardown

`level.dispose()` removes the root and the sky, disposes every geometry,
material, texture, BVH and physics body, and disposes the KTX2Loader **unless
you supplied one**. Call it before loading the next map.

---

## 5. Lighting: what you must stop doing

This is where a per-prop-GLB game most often gets it wrong, because the level
arrives **already lit** and adding your old lighting on top double-counts it.

* **Do not add an ambient or hemisphere light.** The bake put sky light and
  bounce into the lightmap, and `loadLevel` zeroes the live hemisphere term on
  static materials. If IBL is on it retires the HemisphereLight entirely and
  `scene.environment` carries the ambient for dynamic objects too.
* **Do not add a sun/moon.** The level's directional light comes out of the
  manifest with its shadow map size, bias and follow-the-player ortho frustum
  already configured. Its direct term on static geometry is masked by the
  lightmap's alpha channel (Cycles' soft shadows), and it stays a live light for
  dynamic objects.
* **Do not set `envMapIntensity` per material.** `scene.environment` overrides it
  with `scene.environmentIntensity`, which the manifest sets.
* **Do set `renderer.toneMapping` and `outputColorSpace`.** The sky domes are
  hand-written `ShaderMaterial`s that include three's tonemapping and colorspace
  chunks; a mismatched renderer renders the sky too dark.
* **`camera.far` must exceed 1200.** That is `SKY_RADIUS`; 2000 is a good value.

Your own gameplay lights (a torch, a muzzle flash, a headlight) are fine — add
them to the scene as usual. They just were not part of the bake.

### The caster layer

Layer **7** is the shadow-caster layer. `loadLevel` disables it on the camera
you pass, so the lod2 tier can be permanently visible to the shadow camera and
invisible to yours. If you create additional cameras (a spectator view, a
render-target camera, a minimap), call `otherCamera.layers.disable(7)` yourself
or you will see the coarsest LOD drawn over everything.

```js
import { CASTER_LAYER } from '@thai-kit/level-runtime';
otherCamera.layers.disable(CASTER_LAYER);
```

---

## 6. Physics and collision

The manifest carries the colliders as plain data — boxes, cylinders, spheres and
capsules in metres, `halfExtents` as `[hx, hy, hz]` for a box and
`[radius, halfHeight, radius]` for the round ones — so **no engine is baked in**.
You choose:

**Rapier**, which the runtime ships an adapter for and which runs in the browser
and in Node, so a multiplayer server builds identical bodies from the same file:

```js
import RAPIER from '@dimforge/rapier3d-compat';
import { RapierPhysics } from '@thai-kit/level-runtime/physics/rapier';

await RAPIER.init();
const physics = new RapierPhysics(RAPIER, { gravity: [0, -9.81, 0] });
const level = await loadLevel(url, { scene, renderer, camera, physics });

physics.sync();               // make the fresh colliders visible to queries before the first step
const world = physics.world;  // your character controller lives here
```

**Your own engine**: implement four methods.

```js
import { PhysicsAdapter } from '@thai-kit/level-runtime';

class MyPhysics extends PhysicsAdapter {
  createStatic(shapes) { /* … */ return handle; }
  createDynamic(entry, transform) { /* … */ return { handle, getTransform: () => ({ position, quaternion }) }; }
  step(dt) {}
  dispose() {}
}
```

**No engine at all.** The default `NullPhysics` still exposes
`level.colliders.staticShapes` for you to feed wherever you like, and
`level.raycast(ray)` works regardless — it is a `three-mesh-bvh` query against
real lod0 triangles, with a cell-bounds prefilter, built lazily per cell. That
is what a hitscan weapon or a placement cursor wants; the collider compound is
what a character controller wants.

---

## 7. Migrating from one-GLB-per-prop

| You had | You now have |
| --- | --- |
| A scene description (JSON, code) listing prop → transform | The level GLB. Placement is authoring-time, in `/level`. |
| `GLTFLoader.load()` per prop, plus your own instancing | One `loadLevel()`. Static props are already merged per cell. |
| A prop cache / dedupe layer | Gone. The bake dedups geometry and folds tint into `COLOR_0`. |
| `THREE.LOD` per object | Per-cell tiers, distance to the cell **box**. `cells.forceTier(n)` to inspect. |
| Hand-placed lights, ambient, fog | Baked. See §5 — remove yours. |
| Per-prop collision shapes you authored or approximated | `manifest.colliders`, derived and self-checked at bake. |
| Player start hard-coded | `level.spawns.pick(team)`. |
| A skybox you set on `scene.background` | `manifest.sky`, built as three domes. Leave `scene.background` alone. |

**Props that must stay dynamic** — anything the player knocks over, anything
billboarded — are marked `static: false` on the placement in the editor and come
through as `dynamic/<placement>` nodes with their own collider compound and
`physics.massKg`. Everything else is welded into its cell and can never move
again. That decision is made in the editor, not at runtime, so if a barrel needs
to be kickable, untick **static** on it and re-bake.

**Props your game spawns at runtime** (a dropped weapon, a vehicle, an NPC) are
not part of the level at all — keep loading those the way you do now, or build
them from thaikit's procedural factories. They will be lit by
`scene.environment` and cast shadows into the moon's map automatically, because
`loadLevel` leaves the live lighting intact for anything that has no lightmap.

---

## 8. Headless — a dedicated server

A game server needs the colliders and the spawns and none of the pixels. There
is a second entry point that never imports three:

```js
import { loadLevelHeadless } from '@thai-kit/level-runtime/node';
import { RapierPhysics } from '@thai-kit/level-runtime/physics/rapier';
import RAPIER from '@dimforge/rapier3d-compat';

await RAPIER.init();
const level = await loadLevelHeadless('./levels/thepurge.glb', {
  physics: new RapierPhysics(RAPIER),
});

level.spawns.pick('red');
level.colliders.staticShapes;
level.physics.step(1 / 60);
```

It reads only the GLB's JSON chunk, so it is fast and allocates nothing for the
geometry. Client and server build **the same bodies from the same file**, which
is the point.

---

## 9. Checking a level before you ship it

```sh
npm run level:bake   -- --level <id>          # produce build/level.glb
npm run level:verify -- --level <id>          # budgets: draw calls, triangles, bytes
npm run level:smoke  -- --level <id>          # load it through this runtime, headless Chrome
```

`smoke-level.mjs` is also the smallest complete working example of consuming the
runtime — see `render/level-harness.js`. It renders one frame per LOD tier and
reports draw calls, triangles, frame coverage, load time and the environment's
size and cost. It fails on a runtime warning, so a `three` upgrade that moves a
shader chunk under `attachLightmap` is caught there rather than shipping as a
level lit twice.

---

## 10. Gotchas

* **Two copies of `three` and nothing draws.** Same rule as the prop bundles.
* **`camera.far` below 1200 clips the sky away.** The domes sit at `SKY_RADIUS`.
* **A second camera sees the lod2 tier** unless you disable layer 7 on it.
* **Serve the Basis transcoder yourself**, or every KTX2 texture in the level
  goes through a unpkg round trip on load.
* **The manifest is validated with zod at load.** A GLB that is not a baked
  thaikit level throws `scene.userData.thaikitManifest is missing` — that is the
  authoring `level.glb`, not `build/level.glb`.
* **`manifest.ibl` is `null` on levels baked before IBL existed** and null means
  off. Re-bake to opt in; nothing else changes.
* **Adding your old ambient light back "because it looks dark"** is the most
  common mistake. A night level is dark by design; the smoke test measures frame
  *coverage*, not brightness, for exactly that reason. If it is genuinely too
  dark, change `ibl.intensity` or the lightmap intensity in the editor and
  re-bake — do not stack a second lighting model on top of the baked one.
