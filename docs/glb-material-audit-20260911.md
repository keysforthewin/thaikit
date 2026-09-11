# GLB material audit — 11 September 2026

All **180 installed assets** were checked both by constructing their authored factories under Node and by loading their installed prototypes in Chrome. After the repairs, both audits report **zero custom material shader programs or callbacks**. The installed catalogue contains only `@thai-kit` assets.

Two factories required changes:

- **Honda Wave:** replaced its custom `surface` vertex-attribute shader with one shared 256 × 256 linear texture. Standard UVs address roughness in G and metalness in B, including the interpolated tire/rim transitions. The GLB's PNG channels, UVs and vertex colors were checked after export. Geometry and batches are unchanged: 5,912 triangles, 8 draw calls, 3 materials, 6 geometries; one new texture.
- **Toyota Commuter Van:** removed the remaining parallax interior shader and the obsolete paint/steel shader assignments. Paint and steel retain their standard albedo/roughness textures. Windows now have the same static tint in the browser and GLB. Geometry, batches and texture counts are unchanged: 7,964 triangles, 12 draw calls, 4 materials, 12 geometries, 4 textures.

The reconstructed model shapes were not resculpted or rescored. Existing sculpt review history and iteration limits were preserved. Additional generation cost: **$0**.

The GLB export paths now check materials **before cloning or flattening**, because Three.js material cloning can discard callbacks and hide the defect. Prop exports, level exports and model promotion reject custom shader materials, node materials and material `onBeforeCompile`/`onBeforeRender` overrides, with an error identifying the offending asset/material. A regression test constructs every authored model and checks this policy. No skills were changed.

Fifteen skyline assets use object `onBeforeRender` callbacks to face the camera. They use standard textured materials, with no material shader modifications. Their textured cards export; their auto-facing motion is runtime behavior and requires an Unreal/game billboard controller. This audit does not claim that GLB serializes JavaScript behavior, preview lighting or postprocessing.

The repaired factories and thumbnails were refreshed in the installed pack. Updated GLBs are `exports/unreal/ThaiKit/SM_TK_HondaWave.glb` and `SM_TK_ToyotaCommuterVan.glb`. Full audit results and renders are in `scratch/glb-audit/`, including `source-report.json` and `browser-report.json`. Run `node scripts/audit-glb-materials.mjs` to repeat the source/runtime audit.

Validation: 180/180 Node factory checks, 180/180 browser prototype checks, actual GLB export of both changed models, Honda exported texture channel checks, Toyota windscreen regression, GLB mesh-name regression and production client build. The client retains its existing bundle-size warning.
