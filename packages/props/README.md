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

## What this pack carries beyond vibe3d's metadata

vibe3d's model metadata schema is strict — title, description, category, tags, preview,
controls, material slots, parts and socket names — so thaikit's extras ride in
`thaikit.json` and `colliders.json` instead, installed beside `model.ts` like any other
file. vibe3d itself never reads them; they are plain JSON for your game to load if it wants
a prop's mass, its walkable shell or its budget. The source of truth is the tree at
[`packages/props/src/models/`](https://github.com/keysforthewin/thaikit) in the thaikit
repo; this registry is built from it.

## Licence and trademarks

MIT. The geometry is fully synthetic — no scanned or scraped meshes.

Some props depict **real commercial marks** (7-Eleven, Big C, PTT, Toyota and others).
MIT covers the code, not the trademark. Those props carry a notice at the head of their
description; read it before shipping one in a commercial product.
