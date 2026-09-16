# Bangkok soi low rebake — 2026-09-16

This full Unreal export includes the simplified Honda Wave, soi utility pole,
Songthaew and Isuzu D-Max, plus the 28 simple border buildings. The main area
retains one detailed Bangkok apartment block and one detailed low-rise condo.
Earlier fence, tree and sky optimizations remain in place.

## Lighting and automatic atlas allocation

Low uses 6 texels/metre and 4096×4096 main lightmap pages. This run uses the
requested calibrated 2048 diffuse samples and 512 moon-mask samples, with
adaptive sampling disabled. Lighting alone took **29 minutes 42.6 seconds**:
17 minutes 51.5 seconds diffuse and 11 minutes 51.1 seconds moon visibility.
This excludes layout, coverage validation, LOD transfer and compression.

| Main lightmap measurement | Previous export | This export |
| --- | ---: | ---: |
| Charts | 523,353 | 418,801 |
| Pages | 3 | 3 |
| Baked surface area | 126,429.14 m² | 126,367.43 m² |
| Page 1 reserved rectangle area | 80.8% | 80.6% |
| Page 2 reserved rectangle area | 88.5% | 88.0% |
| Page 3 reserved rectangle area | 51.5% | 20.4% |

Pages are allocated automatically on every fresh layout; there is no fixed
three-page requirement or manual page-count calibration. Fewer triangles only
reduce lightmap demand when they remove surface area or reduce chart/padding
overhead. The border buildings already had baked lighting disabled, so their
large geometry reduction has little effect on these pages. The new reserved
rectangles total 31,708,811 pixels; fitting that into two pages would require
94.5% packing efficiency. That is a theoretical area bound, not proof that the
rectangles can actually fit. Improving packing is a possible future task;
this rebake keeps the agreed density and sample settings.

## LOD transfer precision fix

The initial run completed all main lighting but failed LOD2 coverage at chart
15342 of `lt2_137`: the layout retained a very thin triangle using float64 area
calculations, while transfer calculated its normal in float32, rounded it to
zero and skipped its texels. World-coordinate arrays in the transfer now use
float64, matching the layout. The regression test reproduces that exact
triangle; all four Blender transfer tests pass. Coverage checks remain active.
The export resumes from stage 3, preserving the completed lighting.

Evidence: `scratch/rebake-low-20260916/`, including `timings.json`,
`atlas-comparison.json`, the archived initial logs and the resume logs.

## Finished build measurements

File: **141,819,420 bytes (141.82 MB / 135.25 MiB)**, down 19.25 MB (12.0%) from the preceding export.

| Payload | MB (decimal) |
| --- | ---: |
| Meshopt geometry | 57.346 |
| Material textures | 57.897 |
| Lightmaps | 19.665 |
| Sky | 0.439 |
| GLB JSON | 6.455 |
| Other / alignment | 0.017 |

| Geometry tier | Triangles | Vertices | Draws across all cells |
| --- | ---: | ---: | ---: |
| LOD0 | 1,633,456 | 2,868,566 | 2,028 |
| LOD1 | 1,102,897 | 2,154,586 | 2,028 |
| LOD2 | 926,957 | 1,888,854 | 2,028 |
| dynamic | 21,398 | 19,654 | 99 |

These are whole-level counts, not a single frame. Shared buffers across tiers are counted once in the byte breakdown. There are 210 cells, 87 dynamic objects and 4,893 colliders. The five final 4096² lightmap pages comprise three main pages plus one per reduced LOD. File compression reduced lightmap bytes despite the unchanged page count; GPU atlas storage remains five × 16 MiB.

Verification: `ok: true`, zero failures, 65 performance warnings (cell draw-call budgets and conservative LOD reductions). These warnings remain work for future optimization; the build does not meet every performance target.

Browser smoke: `ok: true`, hardware NVIDIA RTX 5070 Ti through Windows Chrome; no browser console errors or runtime warnings. The standard view loaded in 5,365 ms. LOD0/LOD1 views preserve the scene, while forcing LOD2 up close shows darker and coarser lighting on some surfaces. Existing coarse texture/lightmap detail remains visible; passing coverage is not a claim that low is visually final.

Full unabridged results: [file verification](../scratch/rebake-low-20260916/verify_low.out), [runtime smoke](../scratch/rebake-low-20260916/smoke.out), [geometry breakdown](../scratch/rebake-low-20260916/geometry-breakdown.json).

## Delivery

Delivered at 2026-09-16T12:47:43.420359+00:00 to `/home/mulligan/code/Operation-X/GLB/bangkoksoi_low.glb`.
SHA-256: `0c7c0aee1290c5762e45c9e6a818ca32322dad3a90fd854b292b16fc71f6fa2a`. The previous game GLB is backed up at
`scratch/rebake-low-20260916/previous-game-low.glb`.

The additional player-height smoke passed (`ok: true`) at camera
`[14, 1.7, -36]`, looking toward `[14, 1.7, -24]`. The view shows a building
wall, ground and a pole; no blank lighting coverage or missing geometry is
visible, but mottled/coarse wall appearance remains. This does not establish
that every street or optimized prop is visually final.

[Comparison view](../scratch/rebake-low-20260916/after-street.png) ·
[Player-height view](../scratch/rebake-low-20260916/player-street.png) ·
[Player-height smoke result](../scratch/rebake-low-20260916/smoke-player.out) ·
[Delivery receipt](../scratch/rebake-low-20260916/delivery.json).
