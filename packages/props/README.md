# @thai-kit/props

A [vibe3d](https://github.com/vibe-stack/vibe3d) pack of **134 game-ready Thai street props**,
shipped as procedural Three.js **source** rather than as GLB files.

Every prop is a factory that builds a `THREE.Group` in code. `vibe3d add` installs the
TypeScript into your app, shadcn-style, and from then on it is yours to edit.

```bash
npx vibe3d add @thai-kit/props        # the whole kit
npx vibe3d add @thai-kit/oil-drum     # one prop
```

Each installed prop is four files:

- `createObjectModel.ts` — the factory, byte-identical to the one in the thaikit repo.
- `model.ts` — the vibe3d entry point: `createModel(options)` and `createPreview()`.
- `thaikit.json` — thaikit's full asset record: declared and measured metres, pivot and
  placement rules, physics (`enabled`, `massKg`), destruction groups, the four scene-budget
  ceilings, the named pivots and sockets the factory exposes, and the generation review.
- `colliders.json` — the physics compound: a handful of boxes and cylinders in root-local
  metres (`scale` is half-extents), with the ray-cast self-check that measured it.

```ts
import { createModel } from './models/oil-drum/model';

scene.add(createModel({ castShadow: true, textureSize: 512 }));
```

## Requirements

`three >= 0.185.0`, as a peer dependency. The factories import bare `three`; your app
supplies it, and there must be exactly one copy — a second instance means the factory's
`Mesh` is not the renderer's `Mesh` and nothing draws.

## Extra data the pack carries as files

A vibe3d pack can ship any file alongside an item's `model.ts`, and thaikit uses that to
carry the game-side data for every prop: `thaikit.json` (mass, physics flags, placement
rules, pivots, destruction groups, render budgets and the review score) and
`colliders.json` (a hand-checked walkable shell of boxes and cylinders, in root-local
metres). `vibe3d add` installs both beside the factory like any other file, so a game can
read a prop's mass, its collider compound or its budget straight from the install with no
extra tooling. The source of truth is the tree at
[`packages/props/src/models/`](https://github.com/keysforthewin/thaikit) in the thaikit
repo; this registry is built from it.

## Licence

MIT. The geometry is fully synthetic — no scanned or scraped meshes.
