# From an Unreal level to Operation X

Operation X loads one kind of file: a baked thaikit level, a single `.glb` with
`scene.extras.thaikitManifest`, through `loadLevel()` from
`@thai-kit/level-runtime`. A level built in Unreal Editor reaches the game by
becoming that file. Nothing in the runtime changes; the Unreal level enters the
same bake pipeline the level editor uses, one step earlier.

```
Unreal Editor ──glTF Exporter──▶ levels/<id>/unreal/level.glb
   ──import-unreal-level.mjs──▶ levels/<id>/build/raw.glb
   ──bake-level.mjs──────────▶ levels/<id>/build/level.glb ──▶ $THAIKIT_EXPORT_DIR/<id>.glb
```

The `thaikit-unreal-bake` skill runs all of it over the Unreal MCP connection;
this page is the same procedure by hand.

## 1. Build the level so it exports

The converter keys on names, because glTF carries nothing else:

- **Keep the kit's Static Mesh names** (`SM_TK_OilDrum`). They are how a placed
  actor finds its `@thai-kit/oil-drum` ref, its physics and its collider compound
  in `exports/unreal/manifest.json`, the manifest the asset editor's *export to
  Unreal* wrote. Run that export first; without it every mesh is anonymous.
- **`dyn_` prefix** on an actor label = a dynamic physics prop. **`bb_`** = a
  yaw billboard (skyline imposter). Everything else is merged static geometry.
- **A Camera actor labelled `spawn_<name>`** is a spawn point, facing the way the
  camera looks; `spawn_red_a` gives it team `red`. Empties and PlayerStarts do
  not export.
- **One Directional Light, Movable.** It becomes the runtime's live moon with a
  dynamic shadow map. A Static sun would also be inside Unreal's lightmap and be
  counted twice; if you must have one, pass `--sun baked` to the converter.
- **Point and spot lamps** export in candela and become `bake.lights`. With a
  Cycles bake they are baked; with an adopted Unreal lightmap they already are.
- Fog, post-process, Niagara, decals and sky do not export. The runtime has its
  own sky and ambient settings. Cables export as static meshes with no collider.

## 2. Export

In Unreal (5.1 or later; the glTF Exporter plugin is on by default), export the
level to `levels/<id>/unreal/level.glb` with **uniform scale 0.01** (the pipeline
is in metres), lights and cameras on, vertex colours on, materials baked to
textures (`bake_material_inputs = Use Mesh Data`, PNG), hidden actors off, and
**export lightmaps on if the option exists** (5.6+; it was removed in 5.2 and
came back in 5.6). The skill's `references/export.md` has the Python.

## 3. Convert

```
docker compose run --rm web node scripts/level/import-unreal-level.mjs --level <id>
```

Writes `levels/<id>/build/raw.glb` in the pipeline's raw format and
`build/unreal-import.json` with the report. It prints how many placements came
from the kit and how many are Unreal-side meshes, the lights and spawns, and
one of three lightmap states:

| State | Meaning | Bake with |
| --- | --- | --- |
| `adopted` | Unreal 5.6+ exported `EPIC_lightmap_textures`; the per-instance UVs are baked into `TEXCOORD_1` and the textures tiled into `build/lightmap/lightmap.png` | `--baker unreal` |
| `declared` | the extension is present but no primitive resolved to a texture | `--baker blender` |
| `none` | no lightmaps in the export (5.2–5.5, or a Lumen level) | `--baker blender` |

`EPIC_lightmap_textures` is Epic's own extension and is not documented outside
the engine. The converter reads it by field shape (a texture reference, a UV set
index, a 2-vector scale and offset) and dumps the first entry it saw into the
report as `epicSample`. If it also finds 4-vector decode factors it records them
and warns, because it does not apply them: check the baked level's brightness
against the Unreal viewport the first time, and fall back to Cycles if they
disagree. The Cycles route has been measured; the adoption route is verified
against a synthetic export shaped like the real one until a 5.6 export has been
through it.

Other options: `--cell-size 24`, `--no-bbox-colliders` (Unreal-side meshes get
no collision), `--settings <json>` (thaikit level settings: LOD distances,
lightmap size for Cycles, ambient), `--manifest <path>` (a kit manifest other
than `exports/unreal/manifest.json`).

## 4. Bake

```
docker compose run --rm web node scripts/level/bake-level.mjs --level <id> --baker unreal
# or
docker compose run --rm web node scripts/level/bake-level.mjs --level <id> --baker blender
```

The rest is the ordinary pipeline: normalise, 24 m cells, join, LOD tiers, KTX2
textures, meshopt, manifest, verify. Colliders are rebuilt from the kit's
compounds wherever a `SM_TK_*` mesh stands, from a bounding box for other static
meshes, and a `dyn_` actor becomes a Rapier body. The finished file is copied to
`$THAIKIT_EXPORT_DIR/<id>.glb`, the game's GLB folder, and the result line names
it. `manifest.source` records that the level came from Unreal and which lightmap
route it took.

Check it the way every level is checked:

```
docker compose run --rm web node scripts/level/verify-level.mjs --level <id>
docker compose run --rm web node scripts/level/smoke-level.mjs --level <id>
```

## 5. Load it

Exactly as any other level:

```js
import { loadLevel } from '@thai-kit/level-runtime';
const level = await loadLevel('/GLB/<id>.glb', { scene, renderer, camera, physics });
```

`level.manifest.source` is `{ tool: 'unreal-gltf-exporter', lightmap: 'adopted' | 'blender' | 'none', ... }`
for an Unreal level and `null` for an editor level. Nothing else differs.
