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
| Dynamic props | actor label starts with `dyn_` | becomes a `dynamic/<id>` node with a Rapier body; anything else is merged static geometry |
| Skyline imposters | actor label starts with `bb_` | becomes a yaw billboard (dynamic, no collider) |
| Spawns | a **Camera actor** labelled `spawn_<name>` (or `spawn_<team>_<name>`: red/blue/green/yellow) facing the way the player starts | the exporter writes cameras; empties and PlayerStarts do not export |
| The moon | ONE Directional Light, **Movable** | it stays a live light in the runtime; a Static/Stationary sun would also be in the lightmap and count twice (`--sun baked` drops it instead) |
| Lamps | Point/Spot lights **Static** if you want them in the lightmap; their intensity in candela | the converter carries them as `bake.lights`; with `--baker blender` Cycles bakes them, with `--baker unreal` they are already in Unreal's atlas |
| Materials | anything; `bake_material_inputs` bakes them to textures | the runtime wants glTF PBR, not Unreal material graphs |
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
2. calls `GLTFExporter.export_to_gltf(world, "<repo>/levels/<id>/unreal/level.glb", options, [])`;
3. prints the option set it actually used and the file size.

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
`--settings <json>` to pass thaikit level settings (LOD distances, lightmap
size for a Cycles bake, ambient); the defaults are the editor's.

## 3. Bake

```
docker compose run --rm web node scripts/level/bake-level.mjs --level <id> --baker unreal
docker compose run --rm web node scripts/level/bake-level.mjs --level <id> --baker blender     # or blender-host
```

Same pipeline as an editor level: normalise, partition into 24 m cells, join,
LOD tiers, KTX2 textures, meshopt, manifest, verify. The result is copied to
`$THAIKIT_EXPORT_DIR/<id>.glb` when that folder is mounted (the game's GLB
folder); the result line says where. Cycles on a real block takes minutes; use
`--lightmap-size 512 --samples 16` for a first look, never for the shipped file.

Then, always:

```
docker compose run --rm web node scripts/level/verify-level.mjs --level <id>
docker compose run --rm web node scripts/level/smoke-level.mjs --level <id>
```

`verify` must pass; `smoke` renders the level through the real runtime and
fails on any `[level-runtime]` warning. Report both results verbatim.

## 4. Report

Say what shipped: the GLB path in the game's folder, cells / draw calls /
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
