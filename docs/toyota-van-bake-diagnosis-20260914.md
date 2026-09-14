# Toyota Commuter Van: black side bands in BangkokSoi

Confirmed against the September 14 medium build and its uncompressed stage 2 checkpoint. This is a lightmap coverage defect related to the September 13 stainless pavement bin repair. The current bake already contains that repair; this is a remaining case its bounding-box alignment does not handle.

## Evidence

Isolated the placed ToyotaCommuterVan at world position [19.3405304, 0, 29.5], retaining the baked geometry, material textures and lightmap UVs. The exported geometry looks clean under neutral lighting; its baked-lighting render reproduces large black side bands. Rendering stage 2 with the original PNG lightmap reproduces the same bands, before meshopt geometry compression or KTX2 texture compression.

One connected paint island on the positive-X side contains 180 triangles and approximately 4.189 m² of surface. In the 4096² atlas its pixel-space bounds are [462, 2080.9536]–[463, 2124.4243]: one pixel wide by 43.47 pixels long. Its geometry spans local Y 0.40–2.00 and Z -2.50–2.39 metres.

174 of those 180 triangles contain no texel centre. They account for approximately 3.975 m² (94.9%) of that island's geometric area. This alone is not a universal failure criterion—adjacent triangles can provide valid filtered lighting—but here the actual atlas confirms extensive missing lighting: column 462 contains exactly zero RGBA in 29 of the 43 rows from 2081 through 2123. The longest empty run is 2084–2095. These holes persist despite the final one-pixel gutter dilation.

Both medium (8192 samples) and high (16384 samples) have those same 29 completely empty rows. Both use a 4096² atlas. Doubling sample count does not resolve geometric coverage holes.

The medium bake log reports 1,020,405 islands, achieved density 2.9 texels/metre versus 12 requested, and 925,537 aligned sub-texel islands. The overall atlas pressure contributes to undersized charts, but the concrete failure is the van side's inadequate UV coverage.

## Why the bin fix was insufficient

`scripts/level/bakers/lightmap_islands.py` groups connected UV faces, expands axes whose overall bounding-box span is below one pixel, and snaps those axes to a texel centre. This works for rectangular strips. It does not test raster coverage inside an irregular island. An island can have a one-pixel-wide overall envelope while large portions of its actual triangles lie entirely beside the pixel-centre column. Other portions of this island receive samples, so merely checking that each island has at least one sample would also miss this case.

The exact-Float32 UV compression repair is already in the pipeline. The uncompressed checkpoint reproduction rules out final compression as the origin of these bands.

## Repair direction

Improve lightmap chart generation/allocation so broad visible surfaces retain useful two-dimensional texel coverage. Validate coverage within irregular charts, not only their bounding boxes or the existence of one sampled texel. Any chart growth must be followed by safe packing or explicit separation validation; blindly expanding into neighbouring islands would reintroduce contamination. Then rebake lighting and moon visibility with the corrected UVs. Recompression or additional Cycles samples alone cannot recover missing lighting.

No production model, bake code, level or game delivery was changed during this diagnosis. No repair bake has been run.

Diagnostic scripts, extracted GLBs and images are in `scratch/van-bake-diagnosis-20260914/`:

- `toyota-commuter-van-final-export.png`: final geometry under neutral lighting.
- `toyota-commuter-van-final-baked.png`: current compressed baked result.
- `toyota-commuter-van-stage2-baked.png`: uncompressed geometry and original PNG lightmap; same bands.
- `side-islands.json`: measured side charts with geometry and pixel-space UVs.
- `side-lightmap.png`: magnified atlas crop around the affected column.
- `ToyotaCommuterVan-lightmap-probe.json`: per-triangle UVs, positions and sampled atlas values.

The isolated renders are diagnostic lighting views, not runtime beauty comparisons; they omit the live moon and use fixed exposure. Their purpose is to locate the defect in the stored lightmap.
