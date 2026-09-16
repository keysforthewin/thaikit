# Geometry, sky, and low lighting calibration

Follow-up to the 2026-09-15 BangkokSoi size audit. The original geometry and sky
proposals below have been implemented; final measurements and tradeoffs are in
[the geometry optimization report](level-geometry-optimization.md). The final
section records the completed lighting sample calibration on two representative
receiver patches. The recommended full lighting bake was completed on September
16 with the fence and rain-tree revisions; see the follow-up below.

## Geometry experiment

The current static LOD0 has 3,015,566 triangles. A 40% LOD1 would have about
1,206,226; a 15% LOD2 about 452,335. Actual LOD1/LOD2 are 2,116,298 / 1,831,258.
Even meeting these targets leaves LOD0 in the download: the sum across the three
tiers would fall from 6.96 million to 4.67 million triangles, about a 33% reduction.
Compressed byte savings will differ because attributes and indices already share
some buffers. This is not a route to removing 85% of the entire level file.

Start with a representative street containing a building, bikes, corrugated
fencing, utility poles, and foliage. Build both target LODs from the original
geometry, rather than successively simplifying already simplified output:

1. Generate LODs before lightmap UV seams are introduced. Weld redundant vertices
   while retaining UV0/material boundaries and meaningful normals/colors. Use
   attribute-aware simplification with explicit silhouette and boundary error
   limits. Treat tiny disconnected components and foliage as separate cases:
   remove/substitute distant components and use authored foliage LODs where
   appropriate, rather than reducing two-triangle leaf cards to half-leaves.
2. Preserve LOD0's existing lighting. Give reduced meshes new UVs and transfer
   the baked RGB illumination **and linear moon-visibility alpha** from LOD0
   into compact LOD-specific atlases. Transfer uses surface correspondence and
   texture baking, not a new noisy lighting solve. Check projection failures
   and thin surfaces explicitly. Extra lower-resolution atlases cost bytes, so
   measure the net geometry-plus-lighting change.
3. Compare locked LOD0/LOD1/LOD2 views at identical camera/exposure, then inspect
   the actual 60 m / 140 m transition distances while moving. Look for silhouette
   loss, warped signage, missing railings/leaves, seams, and lighting jumps.
   Run coverage tests against each LOD's own new atlas ownership data.
4. Report achieved ratio and visual error. If a prop cannot reach its ratio
   acceptably, keep an exception or build a specific simplified representation.

Simply lowering the existing error bound's protection or enabling sloppy
simplification while retaining old lightmap UVs is not equivalent: triangles
may sample unrelated chart lighting. A geometry-only diagnostic render can
compare silhouettes before the transfer work, but cannot validate final lighting.

The installed meshoptimizer implementation documents why discontinuities can
stall simplification and supports attribute-aware simplification:
<https://github.com/zeux/meshoptimizer/blob/master/js/README.md>.
Use the installed version's supported flags. The follow-up inspected the actual
1.2 implementation and TypeScript API and confirmed `Permissive` support despite
its omission from the installed JavaScript README's flag list.

For larger download reductions, also simplify low's near geometry and reuse
repeated unbaked prop meshes. LOD1/LOD2 alone leave a substantial LOD0 payload.

## Sky

Six faces are six directional images in one KTX2 cubemap: left/right,
front/back, top/bottom. This is not a high polygon count. Keeping six preserves
the runtime's existing cubemap sampling and filtering.

The source is an 8192-wide panorama. `faceSizeFor()` uses approximately
`8192 / pi = 2608` pixels to preserve angular image resolution near face centres;
low currently has no separate face ceiling. Six 2608² faces have 40.81 million
base pixels, or about 54.41 million including mipmaps.

Proposed ceilings: 1024 per face for low, 2048 for medium, retaining mipmaps.
1024 uses 84.6% fewer pixels than 2608, reducing GPU texture storage proportionally
when using the same GPU format. File savings depend on the actual encoding and
sky content; ETC1S color encoding already reduces low's sky payload without a
resolution change. Verify horizon detail, clouds, banding, seams, and rotation.
The completed ETC1S low repack measured **1.62 MB for sky plus clouds**, down from
15.06 MB, at the original face resolution. A lower face cap is consequently
mainly a GPU-memory optimization now, with less remaining download-size upside.
Do not shrink the sky used to illuminate an existing bake when testing a
display-only sky change, since that would introduce a second lighting variable.

## Sample calibration

Current low uses 128 samples, 6 texels/metre, 4096² pages, adaptive sampling off.
Medium uses different texel density, so comparing the existing low and medium
images cannot isolate sample count. Low's 6 texels/m means roughly 16.7 cm per
texel along a surface; more samples do not recover detail below that footprint.

Use one road surface and one building facade with nearby shadow casters, plus a
deep-shadow region. Retain all relevant occluders, lights, sky, materials,
exposure, UVs, coverage, and padding. Restrict bake receivers, not shadow casters.

* Bake 128, 256, 512, and 1024 samples with exactly the same low layout.
* Use two independent random seeds at each count. Keep denoising configuration
  fixed; record it because the production baker enables denoising.
* Use 2048 or 4096 as a convergence reference, increasing it if its own paired
  results are still unstable. A finite reference is not ground truth.
* Compare raw float RGB lighting and moon-mask alpha separately, before PNG
  quantization, UASTC, and display tonemapping. Use covered interiors and include
  separately reported shadow-edge regions; exclude padding and invalid texels.
* For a scalar channel and a fixed region, estimate repeat-bake variation with
  `sigma(N) = sqrt(mean((A_N - B_N)^2) / 2)`. Paired stability alone cannot detect
  denoiser bias or fixed UV artifacts, so also compare against the reference and
  inspect identical rendered views.
* Predict a candidate with `N_needed ~= N * (sigma(N) / target_sigma)^2`, round
  upward to a practical count, then verify it. Use absolute error/exposure-aware
  luminance rather than dividing by near-zero shadow brightness.

For independent unbiased Monte Carlo estimates, error scales approximately as
`1/sqrt(N)`. Relative to 128 samples:

| Samples | Approximate noise amplitude | Sampling work relative to 128 |
| --- | ---: | ---: |
| 128 | 100% | 1× |
| 256 | 71% | 2× |
| 512 | 50% | 4× |
| 1024 | 35% | 8× |
| 2048 | 25% | 16× |

These are statistical starting estimates, not measured timings or guarantees
for stratified Cycles sampling and denoising. Total bake time also has fixed
overhead. A simple Bernoulli visibility model has worst-case standard error
`0.5/sqrt(N)`: 4.42 percentage points at 128, 2.21 at 512, and 1.56 at 1024.
A 2-point target suggests at least 625 independent samples (round up to 1024),
but this model does not account for diffuse lighting, texture resolution, or
denoising and cannot diagnose the actual street's patchiness by itself.

**First candidates: 512 and 1024, retaining 6 texels/m.** No new sample count is
accepted until the fixed-layout comparison has run. Higher sample counts change
bake time, not atlas dimensions; encoded byte size may vary with image content.

The level-bake CLI now forwards `--shadow-samples` independently of `--samples`,
also accepting `lightmap.shadowSamples` through the bake spec. Without an explicit
shadow count, the existing common-count behavior is retained. If paired runs are stable but
the patches remain, investigate chart boundaries, padding, low spatial resolution,
and denoising rather than continuing to multiply sample counts.

Existing `calibrate-lamp-bake.mjs` and `calibrate-sky-bake.mjs` check brightness and
sky equivalence. The completed convergence study used a separate diagnostic
script on CPU; the medium GPU bake continued independently.

Blender documents adaptive sampling and baking support in its Cycles release
notes: <https://developer.blender.org/docs/release_notes/3.0/cycles/>.

## Completed sample study

Tested the paved apron (`lm_-2_-1.0__atlas_0`) and an MK restaurant wall chart
(`lm_-1_-1.5__atlas_0`, chart 141935), using the current production scene setup:
394 authored lamps, the same sky/environment, 6-degree moon, adaptive sampling
off, and the production denoising flag enabled. Ran on Blender 5.2.1 CPU with
eight threads and independent seeds 101 and 719 at 128/512/1024/2048 samples.

The full 4096² atlas incurred substantial diagnostic overhead. For the final
study, receivers were partitioned into small patches and remaining occluder
geometry; all physical surfaces and other scene casters were retained. The
receiver UVs were cropped onto a 128² test canvas using integer pixel translations
and the corresponding UV scale. This retains the original 6 texels/m and texel
centre alignment, while avoiding a mostly empty atlas. The paving patch has 276
covered texels, the wall patch 462. Only the diagnostic scene was altered.

Paired-seed RMS variation in linear RGB luminance, divided by each region's mean
2048-sample reference luminance:

| Samples | Paving RGB variation | Wall RGB variation | Paving moon-mask variation | Wall moon-mask variation |
| --- | ---: | ---: | ---: | ---: |
| 128 | 40.5% | 22.7% | 1.72 percentage points | 1.05 percentage points |
| 512 | 13.9% | 9.2% | 1.35 percentage points | 0.78 percentage points |
| 1024 | 8.8% | 5.9% | 1.01 percentage points | 0.65 percentage points |
| 2048 | 5.4% | 3.7% | 0.84 percentage points | 0.53 percentage points |

This supports sampling noise as a substantial cause of the visible patches,
particularly in RGB illumination. The moon mask is much more stable. The 2048
reference itself is finite/noisy; its zero self-difference is not a zero-error
claim. These local estimates are not a whole-level acceptance guarantee.

**Recommended next full low bake: 2048 RGB samples / 512 moon-shadow samples.**
2048 is the first tested count putting both patches below roughly 6% relative
RGB variation; 512 moon samples keep mask variation below 1.4 percentage points
in both patches. This is a practical initial quality target, not a universal
perceptual threshold. 1024 RGB is a faster compromise, with residual variation
of 8.8% on this paved patch. Keep low at 6 texels/m for the next visual comparison.

The main CLI now supports the recommended split directly:

```sh
node scripts/level/bake-level.mjs --level bangkoksoi --quality low --resume-from 2 --samples 2048 --shadow-samples 512 --live-lamps 20
```

The calibration study itself did not run the full bake or change the default
preset. Its then-delivered low GLB retained 128-sample lighting.

### Full-level follow-up, September 16

The user-approved full low export has now completed with **2048 lighting / 512
moon samples**, retaining 6 texels/m. It ran in a detached GPU bake container,
with adaptive sampling disabled. The simplified fences and rain trees reduced
the primary layout from four to three 4096² pages; lower-LOD transfer added two
packed pages. This means the whole-level comparison includes changed geometry
and atlas placement, unlike the controlled paired-seed study above.

At the same camera and exposure, the large speckled patches on walls, roofs and
paving are visibly much smoother. Some residual variation and low spatial
resolution remain. Forced LOD2 still has lighting differences; this is not a
claim that increasing samples fixes every LOD or atlas artifact. All three LODs
passed the Windows hardware-Chrome smoke check, with no browser warnings/errors.
The file verifier passed and final compressed atlas coverage had zero failures.

The resulting file is **161.074 MB** (decimal), down from the immediate previous
192.300 MB build. See the [full geometry and payload report](level-geometry-breakdown-20260916.md),
[before view](../scratch/mesh-simplify-20260916/before-street.png) and
[after view](../scratch/mesh-simplify-20260916/after-street.png).
The low preset default remains 128; this full bake used explicit CLI overrides.

Artifacts in `scratch/level-size-fix-20260915/`:

* `sample-calibration.py` / `sample-calibration-config.json`: diagnostic setup.
  The script explicitly identifies the production setup boundary and is not a
  general-purpose production calibration API.
* `sample-calibration/report.json`, paired `.npz` files, `regions.npz`, and
  `uv-transforms.json`: measurements and exact UV crop transforms.
* `sample-comparison.png`: RGB lighting crops, fixed exposure per row and a
  single seed per image. These are atlas patch visualizations, not level renders.
* `split-sample-tests.log`: 19 focused tests passed for the separate budget and
  the cleanup/quality changes.
