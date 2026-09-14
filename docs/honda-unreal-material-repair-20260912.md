# Honda Wave Unreal material repair — 12 September 2026

The live `/Game/ThaiKit/SM_TK_HondaWave` had all three visible slots assigned to
`/Engine/EngineMaterials/WorldGridMaterial`. All 14 Honda actors in BangkokSoi
used that mesh, with no component overrides. The slots had the current factory's
names, while the older paint/rubber/trim material assets remained in Content.
This is consistent with a geometry reimport that did not bind the renamed
materials; the original import operation was not observed.

The source GLB contained vertex colors and one embedded metallic/roughness PNG.
Its material was not missing from the file. However, the exporter also changed
intentional constant/one-dimensional UVs into planar charts, corrupting lookup
sampling. The earlier shader-to-texture repair did not catch this. The exporter
now preserves authored UVs on textured materials; missing UVs and untextured
surfaces still receive generated charts.

The Honda GLB was regenerated from the installed prototype: 5,912 triangles,
three visible materials, one shared texture, eight collision shapes. The checked
importer produced generated Material graphs in
`/Game/ThaiKit/GLBImports/SM_TK_HondaWave`. All 14 actors were rebound to this
verified import and BangkokSoi was saved. The original mesh was also reimported
with explicit material creation and reuse disabled, and validated for future
placements. Unreal's mesh preview shows blue paint, dark tires and metal parts.

A selected `bike_00` export through `scripts/level/unreal/export_materials.py`
retained all three named materials, one embedded texture and `COLOR_0` plus
`TEXCOORD_0` on all visible primitives. Pixel comparison exposed another defect:
Unreal 5.8's LDR texture preview gamma-encoded linear data (G=90 became 159).
The local engine exporter source uses a no-gamma preview for HDR textures.
The wrapper now temporarily switches linear default/mask textures to that path
and restores their compression in `finally`, including on export failure.
sRGB color maps and normal maps keep their existing paths; no assets are saved
by the wrapper. The final 256 × 256 map matches the source in all 65,536 pixels,
with zero difference in every RGBA channel. This verifies the selected-actor
round trip, not a new full-level bake. Existing baked level files were not rebuilt.

The model skill now requires conditional Unreal export verification, including
mapping and the actual placed mesh. The level skill and its import recipe now
use the checked importer instead of material instances and project defaults.
The importer rejects default engine materials and does not count stock
Interchange white/normal fallbacks as imported texture evidence.

Validation includes UV preservation tests for five texture slots and the actual
Honda factory, default-material/fallback-texture importer regressions, the
existing material compatibility and mesh-name tests, and the client production
build (existing bundle-size warning). Evidence is in
`scratch/honda-export-fix/`, including before/after Unreal reports and
`roundtrip-final.glb` and `pixel-check.json`. No model generation or fidelity rescoring was performed.
