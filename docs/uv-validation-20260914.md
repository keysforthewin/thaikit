# UV validation — 14 September 2026

Production lighting and delivery are paused. Validation uses one-sample Cycles
emission coverage and diagnostic atlas textures, not a lit level build.

The original full-level failure contained 64 report entries for 58 distinct
triangles in 16 charts. Fourteen charts belong to zinc-sheet hoarding panels;
two belong to Unreal potted plumeria placements. These charts were only a few
texels across. Marginal coverage could change with atlas placement and float32
rounding even though the original local-space chart check passed.

The repair tests multi-face charts with conservative raster coverage and a
filtering margin. Unsafe charts split into smaller charts. Single triangles
remain aligned to Blender's sampling lattice, with a bounded expansion that
survives atlas-coordinate rounding without extending thin tips past padding.
World-space density is retained. Material UVs and authored normals are preserved.

`lightmap_failures_blender_test.py` reproduces all 64 original failures before
regenerating the UVs. The repaired fixture passes actual Cycles coverage near
the far corner of a 4096² atlas. The Toyota van Cycles regression and the
multi-atlas attribute-preservation test also pass. All 180 exported kit models
pass the updated geometric UV audit.

The full-level run reports every atlas, rather than stopping at the first
coverage failure. Final checks inspect interiors, edges, bilinear filtering,
source ownership and page assignments after LOD generation and compression.
Windows GPU tests use Chrome DevTools MCP at port 9222, verified as Windows
Chrome with an NVIDIA RTX 5070 Ti using Direct3D 11. Diagnostic atlas probes
force each page to render, and the browser gate rejects an intentionally empty
view.

The repaired full level fits 30 atlases at 4096² and 12 texels/metre, within
the 32-page limit. All 30 pages passed actual Cycles coverage with zero
failures. The final compressed GLB audit passed 9,650,128 non-degenerate
triangles across all three LOD tiers, with zero coverage failures. A separate
assignment check passed all 8,862 static primitive assignments.

The full-level Windows GPU check passed all three LOD views and decoded all
30 4096² atlas textures. Full-resolution readback checked 339,261,388 covered
texels, with zero missing texels and no browser warnings/errors. The atlases
occupy 480 MiB of GPU texture storage on the tested RTX 5070 Ti. This validates
UV coverage and runtime compatibility; it is not an FPS benchmark or an
assessment of the unperformed production lighting bake.

The GPU coverage gate was also tested with a deliberately corrupted mask: a
single missing texel failed the check. An intentionally empty camera view also
failed the rendering gate.
Evidence: `scratch/uv-validation-20260914/` and
`levels/bangkoksoi/build/uv_validation/`.

Close-up diagnostic views of the Toyota van, stainless bin, zinc hoarding and
potted plumeria were inspected through the same Windows MCP connection. These
show continuous coverage on the visible surfaces. The checker colours are
validation textures, not final lighting.

Reproducible checks:

- `npm run level:validate-uv -- --level bangkoksoi`
- `node scripts/level/smoke-level.mjs --level bangkoksoi --file levels/bangkoksoi/build/uv_validation/validation.glb --coverage-masks levels/bangkoksoi/build/uv_validation --timeout-ms 600000`

Evidence files:

- `levels/bangkoksoi/build/uv_validation/coverage-cycles.json`
- `levels/bangkoksoi/build/uv_validation/coverage-final.json`
- `scratch/uv-validation-20260914/full-windows.json`
- `scratch/uv-validation-20260914/{van,bin,zinc,plumeria}-windows.png`
- `scratch/uv-validation-20260914/final-tests.log` (11 focused tests passed)

UV validation is complete. Production lighting and delivery remain paused.
