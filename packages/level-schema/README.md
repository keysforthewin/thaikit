# @thai-kit/level-schema

The `extras` payloads a [thaikit](https://github.com/keysforthewin/thaikit) level
GLB carries, as [zod](https://zod.dev) schemas. Shared by the editor, the server,
the bake and the runtime, so all four agree on one contract.

A level is an ordinary glTF 2.0 file. Everything it needs that glTF cannot say —
which pack an object came from, whether it is static, the moon's shadow
settings, the cell size — rides in `extras`, and this package is the contract for
those payloads.

```sh
npm i @thai-kit/level-schema
```

Two GLBs use it:

* the **editable project** (`levels/<id>/level.glb`) — `scene.extras.thaikitLevel`
  plus per-node `extras.tk`, validated by `LevelExtras` and `NodeExtras`;
* the **baked export** — `scene.extras.thaikitManifest`, validated by
  `ManifestExtras`. This one is independent of thaikit and is what
  [`@thai-kit/level-runtime`](https://www.npmjs.com/package/@thai-kit/level-runtime)
  reads.

```js
import { ManifestExtras, faceFromFilename, resolveNadirFade } from '@thai-kit/level-schema';

const manifest = ManifestExtras.parse(scene.extras.thaikitManifest);
```

Also exports the cube-map face conventions (`CUBE_FACES`, `CUBE_FACE_ALIASES`,
`faceFromFilename`) — note `front` is **-Z** and `back` is **+Z**, three's own
convention — and `resolveNadirFade()`, the single source of the sky's horizon
fade so a preview and a bake cannot drift apart.

MIT.
