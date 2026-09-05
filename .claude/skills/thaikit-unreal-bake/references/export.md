# Exporting the level from Unreal

Run this INSIDE the editor through whichever unreal-mcp toolset executes Python
(describe it first). It is Unreal 5.1+ Python; the glTF Exporter plugin ships
with the engine and is enabled by default from 5.1.

```python
import unreal, os

REPO = r"\\wsl.localhost\Ubuntu\home\mulligan\code\thaikit"   # the repo AS THIS HOST SEES IT -- confirm with the user
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

world = unreal.EditorLevelLibrary.get_editor_world()
ok = unreal.GLTFExporter.export_to_gltf(world, out, o, [])    # [] = the whole level, not a selection
size = os.path.getsize(out) if os.path.exists(out) else 0
unreal.log(f"[thaikit] glTF export {'ok' if ok else 'FAILED'}: {out} ({size/1048576:.1f} MB); lightmaps={'on' if lightmaps else 'unavailable in this engine version'}")
```

If `set_editor_property` raises on a name, `dir(unreal.GLTFExportOptions())`
lists what this engine version has; drop the missing one and say so in the
report. `export_to_gltf`'s fourth argument is the selected-actor list; empty
means the level.

## What the exporter writes, and what the converter does with it

| In the export | Becomes |
| --- | --- |
| a node with a mesh | a placement row; `SM_TK_*` meshes get the kit's ref, physics and compound from `exports/unreal/manifest.json` |
| actor label `dyn_*` | a dynamic placement with a Rapier body |
| actor label `bb_*` | a yaw billboard |
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
