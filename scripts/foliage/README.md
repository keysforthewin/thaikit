# Procedural tropical foliage

Twenty asset families: ten city plants and ten trees. Each family has one
ThaiKit registry entry. Mesh LODs, exterior meshes, billboards and clusters are
representations of that entry, rather than additional kit items.

`catalog.mjs` records species, dimensions, deterministic seeds and recipes.
`factory.ts` uses the pinned MIT-licensed EZ-Tree geometry code in `vendor/`
for branching plants, plus ThaiKit geometry for palms and other plant forms.
Textures and reference plates were generated with `fal-ai/nano-banana-2`;
request receipts are under `scratch/foliage-20260915/images/`.

## Asset workflow

Run Node/build commands in the project's Docker environment. These scripts
target the September 2026 batch and its scratch directory.

1. Register the entries from `catalog.mjs` using the normal asset-list workflow.
2. `generate-images.mjs` submits/resumes the 41 image jobs. This uses the paid
   image service; completed receipts are reused.
3. `prepare-maps.mjs` creates cropped alpha-cutout WebP leaf maps, shared bark
   maps and reference images.
4. `build-assets.mjs` writes self-contained model source, recipes, references,
   maps, initial disabled collision sidecars and generator metadata. Existing
   measured compounds are preserved; derive physical collision as described below.
5. Run `preview-server.mjs` on port 3735. Use the existing Windows Chrome to
   call `foliage.renderAll()`, `foliage.billboards()` and `foliage.exportAll()`.
   These render real geometry and export GLBs with Three.js GLTFExporter.
6. `stage-exports.mjs` checks metre dimensions, finite attributes, alpha/unlit
   materials and absence of lightmap UVs. It stages 125 GLB derivatives under
   `exports/unreal/foliage/`, with standalone and combined manifests.
7. `finish-assets.mjs` validates the shipped source, triangle budgets and GLBs,
   copies previews/maps and finalizes registry metadata. Run this after
   `build-assets.mjs`; the latter alone is not a completed asset build.
8. Install/update the entries using `install-pack.mjs`, then run the normal
   package build. Publishing is a separate operation.

The package ships Three.js source and texture maps. The 125 Unreal GLBs are
separate export artifacts; they are not all embedded in the npm package.
Factory options include `detail: 0 | 1 | 2`, `representation: 'mesh' |
'billboard' | 'cluster'`, `lighting: 'live' | 'unlit'`, and `potted`.
The default city plants use live lighting; exterior meshes and billboards use
unlit materials. Every representation defaults to `bakeLighting: false`.

## BangkokSoi replacement and Unreal round trip

The scripts below are level-specific. Inspect their paths and exact inventory
guards before adapting them to another level. Execute Unreal Python through
the configured Unreal MCP connection, sequentially on the editor thread.

1. `unreal-inventory.py` saves the current level, inventories actors and creates
   a recovery copy in `C:/tk/foliage-20260915/`.
2. Stage the selected GLBs and manifest in `C:/tk/foliage-assets/`; run the
   standard `web/client/src/unreal/import_into_unreal.py` importer there.
3. **Run `unreal-fix-unlit.py` after importing these variants.** Unreal's
   Interchange importer dropped alpha masking and double-sided settings on
   unlit materials in this batch. The repair reconstructs texture × vertex
   colour × base factor, restores masking and saves the imported materials.
4. `unreal-replant.py` validates the expected inventory, replaces 232 old
   vegetation actors, adds 38 understorey placements, preserves 234 fence
   actors, marks foliage/exterior lighting off and saves the level. It is a
   guarded migration, not an incremental placement tool to run repeatedly.
5. `unreal-export.py` exports through ThaiKit's material wrapper, writes actor
   flags to the sidecar, and cleans up temporary spawn cameras. Its `.done`
   marker is authoritative when a long MCP call times out.
6. Convert with `import-unreal-level.mjs`, using
   `exports/unreal/foliage/combined-manifest.json`, then prepare fresh stage 1
   with `bake-level.mjs --level bangkoksoi --stage1-only`.
7. `audit-roundtrip.mjs` is the original pre-collision audit: it checks 270 replacements, disabled collision and atlas
   exclusion against stage-1 source attributes. It extracts three real Unreal
   export meshes. In the browser, `foliage.roundtrip()` renders those meshes
   and records their materials, dimensions and triangle counts.
   After physical collision is installed, use `unreal-verify-physical-colliders.py`
   for collision checks; the historical audit expects the earlier empty compounds.
8. `report-atlas-sizing.mjs --level bangkoksoi` measures medium at 12 and low
   at 6 texels/metre. It validates chart geometry and packing, without a
   production lighting bake or game-file delivery.

Current recovery evidence and rendered previews are in
`scratch/foliage-20260915/`. The original Unreal export and pipeline caches were
archived before replacement; `prepare-sizing.mjs` is a one-time archive helper
and deliberately refuses to overwrite that archive.

The new unbaked spatial cells require the updated schema-3 runtime. Keep the
existing game GLBs until the new runtime and a validated lighting build are
ready together. Source validation and previews do not claim botanical or
reference-image fidelity review.

## Skyline repair and low review build

`unreal-audit-skyline.py` records the 15 placed skyscrapers and saves a recovery
map under `C:/tk/skyline-repair-20260915/`. Run it before the repair and retain
that original audit. `unreal-repair-skyline.py` assigns component material
instances using the original `M_Imposter` masked, two-sided, camera-facing
shader, current imported textures and the previous brightness adjustments.
It then exports the selected skyscrapers through the material wrapper for
alpha validation. The `bb_` labels preserve runtime camera facing.

`unreal-check-skyline-view.py` is a temporary diagnostic that hides the other
skyline actors. Restore its saved visibility state with `RESTORE=True` before
saving/exporting the whole map.

The full exporter accepts a `RUN_ID` global for separate logs and refuses
skyline materials without masking or camera-facing world position offset.
For this repair, use `RUN_ID='skyline-repair-20260915'`. After launching the
export, `build-skyline-low.sh` waits for its completion marker, preserves old
intermediates, imports fresh geometry and bakes low at 6 texels/metre, 4096²
pages and 128 samples, with a 1024 material texture cap. It runs file
verification and leaves browser review and game delivery as separate steps.
This build script is deliberately one-shot and refuses to overwrite its
recovery archive.

## Physical collision

Run `node scripts/foliage/derive-physical-colliders.mjs` and then
`node scripts/foliage/sync-physical-colliders.mjs` inside the development container.
The standard `colliders.json` format is retained: root-local metres and cylinder
half-extents. Main tree trunks and shrub stems are separated from the disconnected
branch tubes in the shipped mesh. Planters and other plant stems are retained;
leaves, flowers, branches, billboards and leaf-only rosettes are excluded.

The derivation records `includeMeshes`, `trunkOnly` and `fitStems`, so both future
re-derivation and `--measure` use the same physical geometry. Do not run automatic
whole-mesh convex decomposition on these assets: it makes the canopy solid.

Cylinder stacks are checked with horizontal rays for walking clearance as well
as the original downward-ray report. Downward height errors on tapering trunks
can be metres despite small lateral errors: the thin annulus outside a taper
hits a cylinder shoulder higher up. These are **not measured branch platforms**,
and the normal building/ledge promotion gate is not claimed as passing.

Each exported GLB representation is fitted separately because its normalisation
can shift the trunk relative to the leaf bounds. `collisionPolicy` in the Unreal
manifest carries physical compounds through the level importer, including outside
the baked area. `none` prevents bounding-box fallback on leaves and billboards.
The generic manifest synchroniser leaves these per-representation records alone.

`unreal-apply-physical-colliders.py` installs the same cylinders as 32-sided convex
hulls on imported Static Meshes, using Geometry Script through MCP. It marks them
as custom collision and uses simple collision for complex queries too, so leaf
triangles cannot block queries. It saves asset/map backups before changes.
`unreal-verify-physical-colliders.py` checks both simple and complex traces against
every placed foliage component. Re-export the level to put those changes in a GLB.
