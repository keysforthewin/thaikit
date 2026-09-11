# Exporting the level from Unreal

Run this INSIDE the editor through whichever unreal-mcp toolset executes Python
(describe it first). It is Unreal 5.1+ Python; the glTF Exporter plugin ships
with the engine and is enabled by default from 5.1.

```python
import unreal, os, sys, importlib

REPO = r"\\wsl.localhost\Ubuntu-22.04\home\mulligan\code\thaikit"  # derive the host-visible repo path from this environment
LEVEL_ID = "soi-night"                                        # lowercase slug; becomes levels/<id>/ and <id>.glb
out_dir = os.path.join(REPO, "levels", LEVEL_ID, "unreal")
os.makedirs(out_dir, exist_ok=True)
out = os.path.join(out_dir, "level.glb")

o = unreal.GLTFExportOptions()
o.set_editor_property("export_uniform_scale", 0.01)            # cm -> m; the exporter also turns Z-up into Y-up
o.set_editor_property("export_lights", True)                   # KHR_lights_punctual; point/spot in candela, directional in lux
o.set_editor_property("export_cameras", True)                  # spawn_* cameras become spawns
o.set_editor_property("export_vertex_colors", True)            # the kit's tones ride in COLOR_0
o.set_editor_property("export_hidden_in_game", False)
o.set_editor_property("export_level_sequences", False)
o.set_editor_property("export_animation_sequences", False)
o.set_editor_property("bake_material_inputs", unreal.GLTFMaterialBakeMode.USE_MESH_DATA)
o.set_editor_property("default_material_bake_size", unreal.GLTFMaterialBakeSize(1024, 1024)) if hasattr(unreal, "GLTFMaterialBakeSize") else None
o.set_editor_property("texture_image_format", unreal.GLTFTextureImageFormat.PNG)
o.set_editor_property("export_proxy_materials", True)
o.set_editor_property("use_mesh_quantization", False)          # the pipeline compresses with meshopt itself
for name in ("export_hdri_backdrops", "export_sky_spheres"):    # the runtime has its own sky
    try: o.set_editor_property(name, False)
    except Exception: pass
lightmaps = False
try:
    o.set_editor_property("export_lightmaps", True)            # 5.6+ only; EPIC_lightmap_textures
    lightmaps = True
except Exception:
    pass

sys.path.insert(0, os.path.join(REPO, "scripts", "level", "unreal"))
import export_materials
importlib.reload(export_materials)  # an editor session may have loaded an older helper
world = unreal.EditorLevelLibrary.get_editor_world()
result = export_materials.export_level(world, out, o, [])    # [] = the whole level, not a selection
size = os.path.getsize(out) if os.path.exists(out) else 0
unreal.log(f"[thaikit] validated glTF export: {out} ({size/1048576:.1f} MB); lightmaps={'on' if lightmaps else 'unavailable in this engine version'}")
```

Use this wrapper for every level export, including ad-hoc scripts based on this
recipe. Do not call `GLTFExporter.export_to_gltf` directly. New Interchange
imports can use `/InterchangeAssets/gltf/Substrate/M_GLTF`; UE 5.8's exporter
does not recognise that parent and emits black even with `USE_MESH_DATA`.

The helper creates temporary legacy glTF material proxies from the live
instance parameters (including inherited overrides), checks the exported PBR
values, texture embedding and UV channels, and writes the destination only
after validation. It restores original material user data in `finally` and
saves no Unreal assets. Existing explicit proxies are respected. The report
is `<out>.materials.json`. Keep it beside the GLB.

The automatic adapter covers stock Interchange metallic/roughness Substrate
instances. A custom Substrate graph or unsupported extension material needs an
explicit export-compatible proxy; if the helper raises, address that material
and retry through the wrapper. Do not bypass the check or switch off Substrate
globally. Test new proxy types on selected actors to a separate scratch GLB
before the full export.

The importer and baker also reject known nonblack kit materials that arrive as
untextured black. This check runs before normalisation turns black factors into
black vertex colours, including on a resumed bake. A structural `verify` pass
alone does not establish that materials survived the export.

If `set_editor_property` raises on a name, `dir(unreal.GLTFExportOptions())`
lists what this engine version has; drop the missing one and say so in the
report. `export_to_gltf`'s fourth argument is the selected-actor list; empty
means the level.

## What the exporter writes, and what the converter does with it

| In the export | Becomes |
| --- | --- |
| a node with a mesh | a placement row; `SM_TK_*` meshes get the kit's ref, physics and compound from `exports/unreal/manifest.json` |
| actor label `dyn_*` | a dynamic placement with a Rapier body |
| actor label `bb_*` | a yaw billboard (dynamic, no collider) |
| actor label `ladder_*` | a static body whose manifest collider entry is tagged `ladder` (climbable) |
| `levels/<id>/unreal/sky.json` (from `tk_sky_dump.py`) | `settings.sky` + the moon's `softDeg` and intensity; the sphere of `BP_TK_Sky` (label `tk_sky`) is dropped |
| `KHR_lights_punctual` directional | the moon (live, shadowed) unless `--sun baked` |
| `KHR_lights_punctual` point / spot | `bake.lights`: baked by Cycles, or already in Unreal's atlas |
| a camera named `spawn_<team>_<name>` | a spawn with yaw from the camera's facing |
| `EPIC_lightmap_textures` (5.6+) | TEXCOORD_1 remapped per instance, one PNG atlas, `--baker unreal` |
| an empty node | dropped, listed in the report |
| an Unreal-side mesh (cube, cable, plane) | a static placement with a bbox collider, or none for cable/wire/rain/fog/decal names |

## Checks worth making in Unreal before exporting

- `unreal.EditorLevelLibrary.get_all_level_actors()` filtered to
  `StaticMeshActor`: how many have a `dyn_` label, how many static meshes are
  not `SM_TK_*` (each one is an anonymous mesh in the game).
- Exactly one `DirectionalLight`, mobility Movable.
- At least one `CameraActor` labelled `spawn_*`.
- The level is saved.
