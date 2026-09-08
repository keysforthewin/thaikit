# From an Unreal level to Operation X

Operation X loads one kind of file: a baked thaikit level, a single `.glb` with
`scene.extras.thaikitManifest`, through `loadLevel()` from
`@thai-kit/level-runtime`. A level built in Unreal Editor reaches the game by
becoming that file. Nothing in the runtime changes; the Unreal level enters the
same bake pipeline the level editor uses, one step earlier.

```
Unreal Editor ──glTF Exporter──▶ levels/<id>/unreal/level.glb
   ──import-unreal-level.mjs──▶ levels/<id>/build/raw.glb
   ──bake-level.mjs──────────▶ levels/<id>/build/level[_<quality>].glb ──▶ $THAIKIT_EXPORT_DIR/<id>[_<quality>].glb
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
  yaw billboard (skyline imposter). **`ladder_`** = a climbable ladder: still
  merged static geometry with its kit compound, but the manifest's collider
  entry carries `tags: ['ladder']`, the runtime lists it under
  `level.colliders.ladders`, and the game's controller does the climbing.
  Everything else is merged static geometry.
- **A Camera actor labelled `spawn_<name>`** is a spawn point, facing the way the
  camera looks; `spawn_red_a` gives it team `red`. Empties and PlayerStarts do
  not export.
- **One Directional Light, Movable.** It becomes the runtime's live moon with a
  dynamic shadow map. A Static sun would also be inside Unreal's lightmap and be
  counted twice; if you must have one, pass `--sun baked` to the converter.
- **Point and spot lamps** export in candela and become `bake.lights`. With a
  Cycles bake they are baked; with an adopted Unreal lightmap they already are.
- **Selected live spotlight shadows:** add `{ "runtimeShadow": true }` to the
  light's entry in `actors.json`'s `actors` map. Use unique actor labels. This
  explicitly nominates a spotlight for a 1024px runtime shadow map; ordinary
  Unreal `Cast Shadows` remains a bake/preview setting. Nominated lights take
  priority inside `--live-lamps`, which still caps the total. The game may
  further limit them by graphics quality. Point lights remain unshadowed live.
- **The sky is `BP_TK_Sky`** (`/Game/ThaiKit/Sky/BP_TK_Sky`, one per level,
  label `tk_sky`, folder `Sky`). Its Details panel holds every field of thaikit's
  sky settings -- the panorama or six cube-face textures, the elevation span and
  nadir cut, the cloud texture with its opacity/drift/repeat/height, the star
  field's density/brightness/twinkle/colour/horizon fade, and a **Moon
  Intensity** in three's units -- and its sphere previews the panorama in the
  viewport (clouds and stars are thaikit-only and are not previewed).
  `scripts/level/unreal/tk_sky_dump.py`, run in the editor, writes
  `levels/<id>/unreal/sky.json` and exports the textures losslessly to
  `levels/<id>/sky/`; the converter reads the sidecar from beside the `.glb`
  (`--sky-map` to point elsewhere, `--no-sky-map` to ignore it). The glTF itself
  carries no sky: the exporter is told not to, and the converter drops the
  preview sphere by its label. Without the sidecar the level ships with NO sky.
  `scripts/level/unreal/tk_sky_setup.py` builds the preview material once per
  project; `BlueprintTools` over unreal-mcp built the Blueprint (see the skill).
- **The moon's soft shadow and brightness come from the sidecar too.** Its
  `light_source_angle` becomes `shadow.softDeg` (the Cycles sun angle), and
  `BP_TK_Sky`'s Moon Intensity (default 0.6, thepurge's) replaces `lux x
  --light-scale`, which at 1/128 left a 16 lux moon at 0.125. Set it to 0 to
  keep the derived value.
- Fog, post-process, Niagara and decals do not export. Cables export as static
  meshes with no collider.

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
lightmap size for Cycles, ambient; its `sky` block loses to the sidecar),
`--manifest <path>` (a kit manifest other than `exports/unreal/manifest.json`),
`--ground <y>[,<#hex>]` (drop the `far_ground` plane and lay per-cell tiles at
that height; write it `--ground=-0.12,#2b2b29`, a leading `-` reads as a flag),
`--light-scale <f>` (Unreal candela → three at exposure 1; 0.25 on
`bangkoksoi`), `--sky-map <path>` / `--no-sky-map`.

The report's `sky` block says where the sky came from (`sidecar`, `settings`
or `none`) and whether each named image was found. A `WARNING sky.json names
...` line means the dump did not export that texture; re-run
`tk_sky_dump.py`.

### Unreal ⇄ glTF axes, measured

Unreal's exporter maps a UE vector `(X, Y, Z)` to glTF `(X, Z, Y)`. Proven on
`bangkoksoi`: a Moon at pitch −48 / yaw −145 is UE forward
`(−0.548, −0.384, −0.743)` and imports as direction `[−0.548, −0.743, −0.384]`.
So a thaikit moon direction `[x, y, z]` is the UE rotator
`pitch = asin(y)`, `yaw = atan2(z, x)` (degrees); thepurge's
`[−0.539, −0.641, 0.547]` is **pitch −39.85, yaw 134.60**. The preview
material uses the same swizzle: three's `u = atan2(z, x)` is `atan2(Y, X)`
in Unreal, and elevation comes off Z.

## 4. Bake

Three quality tiers, each delivered under its OWN name so the three coexist in
the game's folder and nothing has to be restored after a test bake:

| `--quality` | What it is | Delivers | bangkoksoi, measured |
| --- | --- | --- | --- |
| `low` | `--baker none`: no lightmap, textures and sky faces capped at 1024, lit by the live moon. Tests the geometry, colliders, LOD, spawns and sky. | `<id>_low.glb` | 52 s |
| `medium` | Cycles at 2048² / 16 samples (adaptive). The lamps, the sky light and the moon's shadows land roughly where they will. | `<id>_medium.glb` | ~9 min |
| `high` | Cycles at the level's own lightmap settings (`settings.json`: 8192² / 4096 / adaptive off). The shipping bake. | `<id>_high.glb` | hours; depends on scene and hardware |

```
docker compose run --rm web node scripts/level/bake-level.mjs --level <id> --quality low --live-lamps 20
docker compose run --rm web node scripts/level/bake-level.mjs --level <id> --quality medium --live-lamps 20
docker compose run --rm web node scripts/level/bake-level.mjs --level <id> --quality high --live-lamps 20
# the explicit forms still work, and deliver the plain <id>.glb:
docker compose run --rm web node scripts/level/bake-level.mjs --level <id> --baker unreal
docker compose run --rm web node scripts/level/bake-level.mjs --level <id> --baker blender
```

A tier also stamps the build (`build/level_medium.glb`, `build/lightmap_medium/`,
`build/verify_medium.json`); `verify-level`, `smoke-level` and `probe-lightmap`
take the same `--quality` to find them. `--baker`, `--lightmap-size`,
`--samples` and `--noise-threshold` override the preset. Run one tier at a time:
the raw and the stage checkpoints are shared, and two Blenders will not fit in
memory anyway.

The rest is the ordinary pipeline: normalise, 24 m cells, join, LOD tiers, KTX2
textures, meshopt, manifest, verify. Colliders are rebuilt from the kit's
compounds wherever a `SM_TK_*` mesh stands, from a bounding box for other static
meshes, and a `dyn_` actor becomes a Rapier body. The finished file is copied to
`$THAIKIT_EXPORT_DIR/<id>.glb`, the game's GLB folder, and the result line names
it. `manifest.source` records that the level came from Unreal and which lightmap
route it took. `manifest.sky` carries the sidecar's sky exactly as an editor
level's would: the panorama resampled to a KTX2 cubemap, the cloud map, the
star settings. Every bake is copied to the game folder under its tier's name,
so a `low` test never overwrites the `high` build the game is playing.

Check it the way every level is checked (same `--quality` as the bake):

```
docker compose run --rm web node scripts/level/verify-level.mjs --level <id> --quality low
docker compose run --rm web node scripts/level/smoke-level.mjs --level <id> --quality low
```

## 5. Load it

Exactly as any other level:

```js
import { loadLevel } from '@thai-kit/level-runtime';
const level = await loadLevel('/GLB/<id>_high.glb', { scene, renderer, camera, physics });   // or _medium / _low
```

`level.manifest.source` is `{ tool: 'unreal-gltf-exporter', lightmap: 'adopted' | 'blender' | 'none', ... }`
for an Unreal level and `null` for an editor level. Nothing else differs.
