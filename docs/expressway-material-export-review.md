# Expressway material export review — 2026-09-11

The new expressway materials become black during Unreal's glTF export, before
thaikit imports, lights, compresses or delivers the level. The inspected level
is BangkokSoi in the ThePurge Unreal project; its current delivery tiers are
`bangkoksoi_low.glb` and `bangkoksoi_medium.glb`. The high tier predates this batch.

## Evidence

Compared the original kit GLB, the September 10 Unreal export, the converted
raw GLB, and the pipeline implementation. Queried the live Unreal material
instance and its parent through Unreal MCP, and read the installed UE 5.8
exporter source.

| Hammerhead pier concrete | Original kit / live Unreal | Unreal level GLB / raw GLB |
| --- | --- | --- |
| Base colour | approximately `[0.687, 0.680, 0.644, 1]` | `[0, 0, 0, 1]` |
| Base-colour texture | present | absent |
| Roughness | 0.94 | 0.5 |

Original: `exports/unreal/ThaiKit/SM_TK_ExpresswayHammerheadPier.glb`.
Broken export: `levels/bangkoksoi/unreal/level.glb`.
Converted copy: `levels/bangkoksoi/build/raw.glb`.

The live instance is
`/Game/ThaiKit/SM_TK_ExpresswayHammerheadPier/Materials/M_TK_ExpresswayHammerheadPier_concrete`.
Its `BaseColorTexture`, `BaseColorFactor`, and `RoughnessFactor` are intact.
Its parent is `/InterchangeAssets/gltf/Substrate/M_GLTF.M_GLTF`.
The parent's `MP_BaseColor` input is disconnected; its `MP_FrontMaterial`
input is connected. This explains why the viewport can show the correct
material while a legacy-input export produces black.

The older working `/Game/ThaiKit/M_TK_ExpresswayGantrySign_sheeting` is a
Material with a material-function call and texture/constant inputs. Its two
gantry slots retain their base-colour textures in the Unreal export.

## Exporter mismatch

In the installed engine under
`E:/Epic/UE_5.8/Engine/Plugins/Enterprise/GLTFExporter/Source/GLTFExporter/Private/`:

- `Converters/GLTFMaterialUtilities.cpp:664`: the imported-material shortcut
  recognises material instances by exact topmost-parent path.
- The lookup comes from
  `Plugins/Interchange/Runtime/Source/Import/Public/Gltf/InterchangeGLTFMaterial.h:197`.
  It lists legacy parents such as `/InterchangeAssets/gltf/M_Default.M_Default`,
  but does not include `/InterchangeAssets/gltf/Substrate/M_GLTF.M_GLTF`.
- `Tasks/GLTFDelayedMaterialTasks.cpp:91`: failure to recognise an imported
  material falls through to the general material-property export path.

Together with the live graph and exported values, this identifies the
Substrate-parent mismatch as the cause. No engine patch or alternative-material
export has been tested during this review.

The actual export script, `C:/tk/bake_export_all.py`, already sets
`bake_material_inputs = USE_MESH_DATA` and a 2048-pixel bake size. Enabling those
options again will not address the mismatch. Epic documents that constant and
simple inputs use expression matching even when material baking is enabled:
[glTF material export behaviour](https://dev.epicgames.com/documentation/unreal-engine/how-the-gltf-exporter-handles-unreal-engine-content).

## Scope and why checks passed

The Unreal export contains 37 pure-black, untextured material slots across all
11 newly placed expressway types: I-girder deck, box-girder deck, hammerhead,
Y-fork, twin-column portal, blade-wall and straddle-bent piers, curve, ramp,
abutment, and noise barrier.

Another 41 slots across 15 pedestrian-bridge/skywalk types have the same
signature. Four TukTuk slots also match the black-value scan; those need separate
comparison before treating them as failures, since authored black is valid.
Only the hammerhead instance and older gantry graph were inspected live.

`scripts/level/pipeline/normalise.mjs:90` folds base-colour factors into
`COLOR_0`, then resets the material factor to white and deduplicates materials.
Consequently, scanning the delivered GLB only for black material factors misses
this failure: the black multiplier has moved into vertex colours.

The existing verifier checks structure, references, compression, and runtime
requirements. A valid black surface satisfies those checks. The previous smoke
and lighting checks also did not establish material fidelity for these parts.

## Repair path

1. Create export-compatible legacy glTF materials or explicit export proxies
   for the affected Substrate instances, preserving their actual texture,
   colour, roughness, metallic, alpha, and vertex-colour settings. Keep the
   current viewport materials if using proxies.
2. Export one pier and one deck to separate test files. Confirm texture
   references, colour factors, roughness, UVs and vertex colours, and compare
   a rendered result before changing the full export.
3. Add a pre-bake material comparison against the original kit GLBs. Flag a
   previously textured/nonblack material becoming untextured black, rather
   than rejecting every intentionally black material.
4. Re-export and rebuild the affected delivery tiers from the corrected source.
   Merely adding a texture to the final GLB leaves the zero vertex-colour
   multiplier in place; increasing lighting or compression quality cannot fix it.

Review only: no Unreal assets, pipeline code, or delivered maps were changed.

## Follow-up implementation — 2026-09-11

The subsequent fix adds `scripts/level/unreal/export_materials.py` and makes
both Unreal skills use it. It temporarily attaches legacy glTF proxies to stock
Interchange Substrate instances, copies inherited material parameter overrides,
validates exported PBR values and embedded textures/UVs, then restores original
user data. Unsupported custom/extension materials require explicit proxies.
The existing `C:/tk/bake_export_all.py` now calls this wrapper too.

The importer and baker compare suspicious black materials against the original
kit GLBs, before normalisation and even when resuming a bake. This catches
exports made through an outdated script as well as stale raw builds.

Validation:

- Live scene preflight: 517 distinct materials inspected, 78 adapted, 439
  legacy materials left on their existing route.
- Selected-actor export: all 78 expressway/bridge proxies validated across 88
  exported meshes, 252 material entries, and 69 embedded images.
- Injected validation failure: original material user data and parents,
  export options, and existing output file preserved; temporary GLB removed.
- Both real import and resumed-bake commands reject the old export's 82 black
  kit material slots. Four belong to older TukTuk materials, outside this
  Substrate adapter; these remain flagged for review on the next full export.
- Container regression suite: 11 tests passed, including an end-to-end bake
  and headless runtime load. Python export validation: 5 tests passed. Both
  edited skills passed the skill validator.

Evidence and the corrected selected-actor GLB are under
`scratch/material-export-regression/`. No full level was re-exported or rebaked,
and the game delivery files have not been replaced by this workflow change.
