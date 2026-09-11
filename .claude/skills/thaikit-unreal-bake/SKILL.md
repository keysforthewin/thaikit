---
name: thaikit-unreal-bake
description: >-
  Bakes and exports a level that was built in Unreal Editor into ONE
  self-contained GLB that Operation X loads with `@thai-kit/level-runtime`'s
  `loadLevel()` -- the same module and the same call as a level from thaikit's
  own level editor. Drives Unreal's glTF Exporter over the unreal-mcp connection
  (metres, lights, cameras, baked materials, Unreal 5.6+ lightmaps), converts
  the export with scripts/level/import-unreal-level.mjs, and runs the thaikit
  bake pipeline (cells, LOD, KTX2, colliders, manifest) with the Unreal lightmap
  adopted or a fresh Cycles bake. Use when the user wants to export, bake, ship
  or "get into the game" a level made in Unreal, wants the Unreal level as a
  GLB, or asks how an Unreal level reaches Operation X.
---

# thaikit — bake an Unreal level for Operation X

The game loads ONE kind of file: a baked thaikit level, `level.glb` with
`scene.extras.thaikitManifest`, through `loadLevel()`. An Unreal level becomes
that file in three steps, and nothing about the runtime changes:

```
Unreal Editor ──(glTF Exporter, over unreal-mcp)──▶ levels/<id>/unreal/level.glb
      │
      ▼  node scripts/level/import-unreal-level.mjs --level <id>
levels/<id>/build/raw.glb   (placement rows, lights, spawns, colliders, TEXCOORD_1 + lightmap.png if Unreal had lightmaps)
      │
      ▼  node scripts/level/bake-level.mjs --level <id> --baker unreal|blender
levels/<id>/build/level.glb  ──copied──▶ $THAIKIT_EXPORT_DIR/<id>.glb  (Operation X's GLB folder)
```

Everything after the export runs IN THE CONTAINER (`docker compose run --rm web
node scripts/...`); nothing runs on the host. The export itself runs inside
Unreal, because that is where the level is.

## 0. Before exporting: make the level exportable

Check these in the editor (query, do not assume) and fix what is wrong. Each one
is something the converter keys on, and the report it writes will say when a
convention was not followed.

| Thing | Convention | Why |
| --- | --- | --- |
| Static Mesh names | keep `SM_TK_<Prop>` as imported from the kit | the converter finds the prop's `@thai-kit` ref, physics and collider compound in `exports/unreal/manifest.json` by that name |
| The actor sidecar | write `levels/<id>/unreal/actors.json` from the editor beside the `.glb` (`{ actors: { <label>: { mesh, folder, mobility, physics } } }`; `C:\tk\actor_map.py` in the ThePurge project is the template) | Unreal 5.8's glTF exporter names nodes after ACTOR LABELS and, once a component's materials were baked or overridden, names the MESH after the actor too -- the `SM_TK_` name is gone from the file and only 16 of 879 kit meshes on `bangkoksoi` kept it. The converter reads the sidecar automatically (`--actor-map` to point elsewhere) |
| Meshes built outside the kit (`SM_EXT_*` trees, AC units) | `scratch/_unreal/build_ext.mjs` writes `exports/unreal/ext/manifest.json` with each mesh's compound | trunk-only colliders for a tree; without it a card tree is a wall the size of its canopy |
| The sky | ONE `BP_TK_Sky` actor (`/Game/ThaiKit/Sky/BP_TK_Sky`, label `tk_sky`, folder `Sky`) with its panorama/cube faces, cloud texture, star settings and Moon Intensity set in Details; then run `scripts/level/unreal/tk_sky_dump.py` in the editor (copy to `C:\tk\`, edit `LEVEL_ID`, `py C:/tk/tk_sky_dump.py`) | the glTF carries no sky. The dump writes `levels/<id>/unreal/sky.json` and exports the textures to `levels/<id>/sky/`; the converter reads it automatically (`--sky-map`). Without it the level ships with NO sky and the report says so. The BP's sphere is the Unreal preview and is dropped by label; the old gradient `SkyDome` (anything starting `sky`) is dropped too |
| The far ground | ONE big plane in Unreal is fine for the editor, but convert with `--ground <y>[,<#hex>]` | the converter drops `far_ground` and lays the pipeline's own per-cell tiles (one lightmap island each) instead of a 900 m quad that owned two thirds of the atlas area |
| Dynamic props | actor label starts with `dyn_` | becomes a `dynamic/<id>` node with a Rapier body; anything else is merged static geometry |
| Skyline imposters | actor label starts with `bb_` | becomes a yaw billboard (dynamic, no collider) |
| Ladders | actor label starts with `ladder_` (the kit's `SM_TK_FireEscapeLadderSegment`, or any mesh) | static, keeps its compound, and the manifest collider entry is tagged `ladder`; `level.colliders.ladders` lists the volumes and Operation X's controller climbs them (needs `@thai-kit/level-schema` >= 0.2.0) |
| Spawns | a **Camera actor** labelled `spawn_<name>` (or `spawn_<team>_<name>`: red/blue/green/yellow) facing the way the player starts | the exporter writes cameras; empties and PlayerStarts do not export |
| The moon | ONE Directional Light, **Movable**; its `light_source_angle` is the shadow softness (6 = thaikit's `softDeg` 6) and `BP_TK_Sky`'s Moon Intensity is its brightness in three's units (0 = `lux x --light-scale`) | it stays a live light in the runtime; a Static/Stationary sun would also be in the lightmap and count twice (`--sun baked` drops it instead). Rotator from a thaikit direction `[x,y,z]`: `pitch = asin(y)`, `yaw = atan2(z, x)` -- thepurge's moon is pitch −39.85, yaw 134.6 (measured swizzle, docs/unreal-level-export.md) |
| Lamps | Point/Spot lights **Static** if you want them in the lightmap; their intensity in candela | the converter carries them as `bake.lights`; with `--baker blender` Cycles bakes them, with `--baker unreal` they are already in Unreal's atlas |
| Materials | export through `scripts/level/unreal/export_materials.py` as shown in `references/export.md` | supplies temporary compatible proxies for stock Interchange Substrate instances; custom graphs need explicit proxies. `USE_MESH_DATA` alone does not prevent black exports |
| Cables, rain, fog, decals, post-process | fine to leave; cables export as meshes (no collider), the rest does not export | the runtime has its own fog and sky settings, none of Unreal's |
| Hidden actors | `export_hidden_in_game` OFF | editor-only helpers must not ship |

Ask the user for the level `id` (a lowercase slug; it becomes `levels/<id>/` and
`<id>.glb` in the game) if the request does not say.

## 1. Export from Unreal (over unreal-mcp)

Discover the toolset that runs Python or exports assets (`describe_toolset` on
the candidates `list_toolsets` shows; a `PythonTools`/script-execute tool is the
usual route). Then run `references/export.md`'s script, which:

1. builds a `GLTFExportOptions` with **uniform scale 0.01** (centimetres → the
   metres the pipeline and glTF expect; the exporter turns Z-up into Y-up
   itself), `export_lights`, `export_cameras`, `export_vertex_colors`,
   `bake_material_inputs = USE_MESH_DATA`, PNG textures, `export_hidden_in_game`
   off, no animation, and `export_lightmaps` **if the property exists** (Unreal
   5.6+; it was absent 5.2–5.5);
2. calls `export_materials.export_level(world, "<repo>/levels/<id>/unreal/level.glb", options, [])`, never the engine exporter directly;
3. validates proxy materials before replacing the destination, writes
   `level.glb.materials.json`, and prints the option set and file size.

Read `references/export.md` for the wrapper invocation and unsupported-material
handling. This is required on every export, including later batches and scripts
adapted from earlier runs. The importer/baker reject black material regressions;
fix the export rather than bypassing that check or increasing lighting samples.

Then, in the same session, `actor_map.py` (the label → mesh sidecar) and
`tk_sky_dump.py` (the sky sidecar + textures). All three write straight into
the repo over the UNC path; check `levels/<id>/unreal/{level.glb,actors.json,sky.json}`
and `levels/<id>/sky/` exist before converting.

The path must be the REPO as the Unreal host sees it (on WSL that is the
`\\wsl.localhost\<distro>\home\...` spelling; ask if you cannot derive it from
the `.uproject`'s location). Check the file exists and is not tiny before
continuing. Save the level first; the export does not modify it.

## 2. Convert

```
docker compose run --rm web node scripts/level/import-unreal-level.mjs --level <id>
```

Read its stderr. It reports placements (kit props vs Unreal-side meshes), lights,
spawns, dropped empties, and one of three lightmap states:

- `adopted` -- Unreal exported `EPIC_lightmap_textures`; the UVs are in
  TEXCOORD_1 and `build/lightmap/lightmap.png` is written. Bake with
  `--baker unreal`. **The first time a real 5.6 export comes through, open
  `build/unreal-import.json` and read `epicSample`**: the extension is Epic's
  own and undocumented, the converter reads it by field SHAPE, and a `WARNING
  ... decode factors ... NOT applied` line means the atlas may need a decode the
  converter does not yet do. Compare the baked level's brightness against the
  Unreal viewport before shipping it, and if they disagree, bake with `blender`.
- `declared` -- the extension is there but no primitive resolved to a texture.
  Bake with `blender`.
- `none` -- no lightmaps in the export (5.2–5.5, or Lumen-only). Bake with
  `blender`: Cycles re-lights the same geometry with the same lamps and moon.

Also read:
- `WARNING ... ratio` about a prop's height: the Unreal round trip changed the
  axes or scale, and every compound is wrong. Fix the exporter's scale (0.01)
  before anything else.
- `no kit manifest`: run **export to Unreal** in the asset editor first; without
  it every mesh is an anonymous Unreal mesh with a box collider and no physics.
- `no Camera actor named spawn_*`: the level got a spawn at its centre. Add one.

`--sun baked` if the user insists on a Static sun in Unreal (drops the
directional from the runtime's lights so it is not counted twice).
`--no-bbox-colliders` if Unreal-side meshes should have no collision at all.
`--ground <y>[,<#hex>]` lays ground tiles under everything static (and drops an
Unreal `far_ground` plane); `bangkoksoi` uses `--ground=-0.12,#2b2b29` (the `=`
matters: a bare `-0.12` reads as an option).
`--settings <json>` to pass thaikit level settings (LOD distances, lightmap
size for a Cycles bake, ambient); the defaults are the editor's. **`--quality
high` bakes at whatever the RAW carries**, so an import without
`--settings levels/<id>/settings.json` ships a "high" build at the importer's
defaults (4096², 128 samples, adaptive) -- bangkoksoi's shipping recipe is
`--settings levels/bangkoksoi/settings.json` (8192², 4096 samples, adaptive
off) on every re-import; read the bake's `running blender` line to confirm.
Do not reduce the level's shipping sample count just because the atlas is
8192 pixels. A 128-sample BangkokSoi bake produced large black blotches in
lamp illumination. Compare a representative patch against a converged
reference and inspect player-height renders, including self-shadows, before
accepting a changed sample count. File validation does not measure noise.
Keep Cycles' per-batch bake margin at zero. The baker pads the completed atlas
once using geometric coverage, so neighboring islands and fully black shadow
texels survive. The old 16-pixel per-batch margin overwrote islands separated
by a 2-pixel gutter. Run `lightmap_padding_test.py` and
`lightmap_padding_blender_test.py` under Blender when changing atlas padding;
both RGB lighting and moon-mask alpha must be rebuilt after this fix.
`--emissive-scale <f>` scales every material's emissive (strength extension or
factor) the way `--light-scale` scales the lamps: a sign fascia at emissive
strength 4 is a lightbox under Unreal's exposure and a blown-out white sheet at
three's exposure 1. `bangkoksoi` uses `--light-scale 0.25 --emissive-scale
0.125` (measured on its brand fascias: signs 2-5 -> 0.25-0.6, glass 1 -> 0.125).
Note the Unreal side: the exporter reads Interchange's `MF_*_Body` function
INPUTS (`EmissiveTexture`, `EmissiveFactor`, `EmissiveStrength`), so emissive
added as extra material nodes never exports, and RectLights never export at all
(KHR_lights_punctual has no rect) -- light shopfronts with SpotLights.
CableActors, DecalActors, Niagara emitters and ExponentialHeightFog export as
EMPTY nodes (name only, dropped by the importer), so anything that must reach
the game is a StaticMeshActor or a punctual light; bangkoksoi has none of the
others left. Count emissive materials, light types and mesh-less nodes in the
exported GLB before baking.

## 3. Bake

A street with 180 lamps must NOT ship them all live: every live lamp is a three
light (uniforms on every material, a loop per dynamic fragment) and a low-end
GPU's fragment-uniform budget overflows long before 180. Bake with
`--live-lamps 20`: the moon plus the twenty strongest lamps nearest a spawn stay
live for dynamic objects, the rest live in the lightmap only, and the manifest
records `lightmap.bakedOnlyLamps`.

Bake in TIERS, low first. Each tier delivers its own file (`<id>_low.glb`,
`<id>_medium.glb`, `<id>_high.glb`) and builds beside the others
(`build/level_<q>.glb`, `build/lightmap_<q>/`), so a test bake never
overwrites the build the game is playing and nothing has to be restored:

```
docker compose run --rm web node scripts/level/bake-level.mjs --level <id> --quality low    --live-lamps 20   # no lightmap, ~1 min: geometry, colliders, LOD, sky
docker compose run --rm web node scripts/level/bake-level.mjs --level <id> --quality medium --live-lamps 20   # Cycles 2048²/16, ~10 min: approximate lighting
docker compose run --rm web node scripts/level/bake-level.mjs --level <id> --quality high   --live-lamps 20   # Cycles at the level's settings, hours: the shipping bake
```

(`--baker unreal|blender|blender-host` without a tier is the old form and
delivers the plain `<id>.glb`; `--lightmap-size`/`--samples` override a
preset.) Same pipeline as an editor level: normalise, partition into 24 m
cells, join, LOD tiers, KTX2 textures, meshopt, manifest, verify. The result is
copied to `$THAIKIT_EXPORT_DIR/` when that folder is mounted (the game's GLB
folder); the result line says where. One tier at a time -- the raw and the stage
checkpoints are shared, and a second Blender does not fit in memory beside an
8192² bake. Check `swapon --show` before `high`.

Then, always, with the same `--quality`:

```
docker compose run --rm web node scripts/level/verify-level.mjs --level <id> --quality <q>
docker compose run --rm web node scripts/level/smoke-level.mjs --level <id> --quality <q>
```

`verify` must pass; `smoke` renders the level through the real runtime and
fails on any `[level-runtime]` warning. Report both results verbatim.

## 4. Report

Say what shipped: the GLB path in the game's folder (which TIER, and that the
game must load that name), cells / draw calls /
triangles per tier from the bake's result line, how many placements came from
the kit versus Unreal-side meshes, the lightmap route (`adopted` or Cycles) and
the spawns. Say what the level LOST on the way, because some of it always does:
Unreal's fog, post-process, Niagara and decals do not export (the runtime has
its own sky and fog settings), cables are static meshes now, and a Static sun
would have been dropped. The game loads it with the call it already makes:

```js
const level = await loadLevel('/GLB/<id>.glb', { scene, renderer, camera, physics });
```

## What this skill does not do

- It does not build or dress the level; that is `thaikit-unreal-level`.
- It does not change `@thai-kit/level-runtime`. The Unreal route produces the
  same file the editor's bake does; `manifest.source` is the only trace.
- It does not trust an undocumented lightmap format silently: an adopted atlas
  is checked against the Unreal viewport the first time, and Cycles is the
  fallback that has been measured.
