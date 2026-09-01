# @thai-kit/props

A [vibe3d](https://github.com/vibe-stack/vibe3d) pack of **134 game-ready Thai street props**,
shipped as procedural Three.js **source** rather than as GLB files.

Every prop is a factory that builds a `THREE.Group` in code. `vibe3d add` installs the
TypeScript into your app, shadcn-style, and from then on it is yours to edit.

```bash
npx vibe3d add @thai-kit/props        # the whole kit
npx vibe3d add @thai-kit/oil-drum     # one prop
```

Each installed prop is two files:

- `createObjectModel.ts` — the factory, byte-identical to the one in the thaikit repo.
- `model.ts` — the vibe3d entry point: `createModel(options)` and `createPreview()`.

```ts
import { createModel } from './models/oil-drum/model';

scene.add(createModel({ castShadow: true, textureSize: 512 }));
```

## Requirements

`three >= 0.185.0`, as a peer dependency. The factories import bare `three`; your app
supplies it, and there must be exactly one copy — a second instance means the factory's
`Mesh` is not the renderer's `Mesh` and nothing draws.

## What this pack does not carry

vibe3d's model metadata schema is strict, so the export drops thaikit's own extras:
named pivots, derived collider compounds, destruction groups, the four budget ceilings
(triangles, draw calls, materials, unique geometries), declared and measured metres, and
the generation review history. Sockets, parts, material slots, tags, category and a
preview image do survive.

If you want any of that, read
[thaikit's own registry](https://github.com/keysforthewin/thaikit) directly — it is the
source of truth, and this pack is a derived repackaging of it.

## Licence and trademarks

MIT. The geometry is fully synthetic — no scanned or scraped meshes.

Some props depict **real commercial marks** (7-Eleven, Big C, PTT, Toyota and others).
MIT covers the code, not the trademark. Those props carry a notice at the head of their
description; read it before shipping one in a commercial product.
