# Lightmap atlases

The Cycles baker generates lightmap UVs at the tier's world-space density,
allocating 4096² pages until the charts fit. It does not shrink charts to satisfy
an atlas cap. The default cap is 32 pages. An allocation or coverage failure
stops before production lighting; the report identifies affected source meshes
and placement IDs where available.

Medium and high use 12 texels per metre; low uses 6. All use 4096² pages.
Halving linear density quarters the surface pixel requirement, before chart
padding, coverage repairs and packing overhead. Low uses 128 samples, medium
2048 and high 16384, for both diffuse lighting and moon visibility.
Adaptive sampling is off. More samples reduce integration noise; they cannot
repair missing UV coverage.
`--shadow-samples N` (or `lightmap.shadowSamples` in level settings) sets a separate
moon-visibility budget; otherwise that pass follows `--samples`. For example,
`--quality low --samples 2048 --shadow-samples 512` retains low's 6 texels/m while
spending more sampling work on RGB illumination. Sample changes require stage 2;
resuming only stage 4 repackages existing lighting and cannot change its noise.

Material texture resolution is independent of lightmap resolution. `low` caps
material images at 1024 pixels per dimension and uses ETC1S for color maps
(including sky color encoding); `medium` and `high` retain the level's configured
ceiling (4096 for BangkokSoi) and encoding. Data-map encoding remains authored
(UASTC by default). Lower authored ceilings are respected. Lighting atlases and
sky images keep their existing resolutions. `--preserve-textures` bypasses low's
material resolution and color-encoding overrides.

Before texture encoding, the pipeline removes images with no material users.
Geometry cleanup disposes detached primitives before unused accessors, preventing
obsolete bake-source buffers from surviving after their meshes have been removed.
The verifier reports serialized accessor reachability; new pipeline builds pass
`--strict-geometry` to reject orphan data. Standalone verification of older builds
reports orphan accessors as warnings unless that flag is supplied.
Final cleanup also preserves and remaps images referenced directly by the
manifest (legacy lightmap, atlas pages, sky and clouds). `verify-level` audits
the serialized GLB independently and fails on unused images/textures, broken
material/image references, or missing embedded payloads. It checks low's 1024
material cap; `--max-texture-size` checks another explicit ceiling. The bake
passes its effective ceiling, including `--preserve-textures`, to verification.
`--resume-from 4` reapplies cleanup and texture budgets to saved geometry and
lighting without rerunning Cycles.

Settings are `lightmap.size`, `texelsPerMeter`, `maxAtlases`, `samples` and
`noiseThreshold`. CLI overrides are `--lightmap-size`, `--texels-per-meter`,
`--lightmap-max-atlases`, `--samples` and `--noise-threshold`. Atlas limits are
counts, not claims about available VRAM: one 4096² page without mipmaps typically
uses 16 MiB in an 8-bit/pixel GPU format, or 64 MiB as uncompressed RGBA.

## Validation

`node scripts/level/report-atlas-sizing.mjs --level bangkoksoi --build <directory>`
measures a freshly prepared `stage1.glb` and matching `bake.json`, medium first
then low. Run it in the Docker environment. It only lays out and validates UVs;
it does not render lighting or deliver a game build. The JSON report includes
eligible surface area, target pixels, actual chart pixels, padded rectangle
area, page occupancy, page count and input SHA-256. Area lower bounds show how
much packing overhead remains; the valid page count is not a mathematical
proof of optimal packing. Generate stage 1 after changing lighting eligibility
so excluded foliage and exterior scenery are absent from the lightmap cells.

To compare packing efficiency after that preflight, run Blender in Docker with
`--python-exit-code 1 --python scripts/level/bakers/compare_atlas_packing.py --
<atlas-layout.json> <output.json>`. The study tries six ordering strategies,
checks every padded rectangle for bounds and overlap, and records the resulting
page count and number of mesh pieces split across pages. Matching the rectangle
area lower bound proves the minimum for those fixed rectangles. It does not
prove that no better UV unwrap exists, and it does not change the production
layout. Compare the drawing cost as well as the texture-memory saving.

`lightmap_atlas_test.py` tests metric projection, deterministic allocation,
budget failures and irregular coverage. `lightmap_layout_blender_test.py` runs
the real van-side fixture through chart generation and Cycles emission baking.
`audit_models.py` applies the production chart audit to every model in the kit's
Unreal export manifest (or `--asset <substring>`). These Python tools run under
Blender's bundled Python; the Blender integration tests use `--python-exit-code 1`.

Run `node scripts/level/bake-level.mjs --level <id> --quality low --layout-only`
in the bake environment for a full-level layout preflight. It reports allocation
and per-placement coverage, saves the reusable layout, and stops before lighting,
encoding or delivery. Run Blender work in a detached container as documented in
the Unreal bake skill.

The full bake audits chart geometry and then Cycles' one-sample emission
coverage before spending production samples. Coverage is separate from lighting
brightness. Padding is constrained to each chart, and final exported geometry
is checked against the chart-owned coverage masks. UV seams are protected during
LOD simplification; the topology-ignoring simplifier is disabled for atlas geometry.

`atlas-layout.json` records page assignments and chart rectangles. `coverage.json`
reports source meshes. Each `atlas-NNN` directory contains a lightmap PNG,
coverage evidence and pass checkpoints. `coverage-final_<tier>.json` records the
final compressed-GLB audit. A failed audit withholds automatic delivery.

Completed diffuse and moon passes can be reused only when their fingerprint
matches the input geometry, layout, lighting, settings and implementation.

## Runtime format

Atlas sets use manifest schema version 2, or version 3 when unbaked cells are
present. `lightmap.atlases` is an array of
`{image, size, range}` entries. Image indices address the embedded GLB images.
Common channel, intensity, baked-light and moon-mask semantics are unchanged.
Each static material carries `extras.tk.lightmapAtlas`, the zero-based page index.

The updated runtime accepts schema versions 1, 2 and 3. Version 1 single-image
lightmaps retain their previous appearance. Update the runtime to a version
supporting the exported schema before replacing a level file. `loadLevel()` is unchanged.
The returned `lightmaps` array exposes all pages; `lightmap` remains an alias for
the first texture for legacy consumers. One page is sampled per static material,
and dynamic materials remain independent.

## Browser validation

Run `node scripts/level/smoke-level.mjs --level <id> --quality <tier>` on the
WSL host. It connects through Chrome DevTools MCP to the existing Windows
Chrome at `http://127.0.0.1:9222`; it never launches Chrome. Missing hardware
WebGL, a Linux browser or a software renderer fails the check. `--benchmark`
records a fixed camera route for comparisons on the same GPU. Do not run this
command inside a container whose localhost cannot reach the Windows endpoint.

The UV raster regression accounts for Blender's 0.001/0.002 pixel offsets
([zbuf.cc](https://github.com/blender/blender/blob/main/source/blender/render/intern/zbuf.cc)).
Thin triangles are aligned to that sampling lattice, with a small expansion
that retains the minimum world-space density. Strict interior coverage checks
prevent a long triangle from relying solely on an excluded boundary row.

## Full validation without production lighting

`npm run level:validate-uv -- --level bangkoksoi` runs the saved stage-1 scene
through the corrected chart generator, checks actual Cycles emission coverage on
every atlas, then tests the final LODs and compressed UVs. Run it in a detached
bake container. The command has no delivery step and explicitly requests
`--coverage-only`; diffuse lighting and moon visibility passes are skipped.

Reports and a labelled diagnostic `validation.glb` are written under
`levels/<id>/build/uv_validation/`. `coverage-cycles.json` reports all failing
pages in one run, including source nodes, chart IDs and face indices.
`coverage-final.json` checks triangle interiors, edges, filtering support and
source/page ownership after LOD generation and compression.

Validate that diagnostic artifact on the host with:

```
node scripts/level/smoke-level.mjs --level bangkoksoi --file levels/bangkoksoi/build/uv_validation/validation.glb --atlas-probe --out scratch/uv-validation.png
```

`--atlas-probe` renders every diagnostic atlas on the Windows GPU, in addition
to the level's three LODs. It is intended for diagnostic textures, which are
bright by construction; a production lightmap may legitimately be black.

The full-level regression fixture contains the 16 zinc-hoarding/plumeria
charts that originally produced 64 failure entries (58 distinct triangles).
`lightmap_failures_blender_test.py` first reproduces those failures with the
original UVs, then requires repaired UVs to pass at a distant atlas location.
The chart validator reserves a small filtering margin for float32 placement
and raster sampling differences, rather than accepting marginal coverage.

For a full-resolution Windows GPU readback of every diagnostic atlas, add
`--coverage-masks levels/bangkoksoi/build/uv_validation`. The harness compares
every covered texel against the decoded KTX2 texture. This check is only for
bright diagnostic textures, not production lighting that can legitimately be
black. It reports checked and missing texels per page. A negative test with one
false covered texel verifies that the GPU gate detects a single missing texel.

## Reduced LOD lightmaps

Low Blender exports now reduce eligible LOD1/LOD2 geometry after reconstructing
connectivity without the original UV1 seams, then transfer existing RGB lighting
and linear moon visibility onto 2048-pixel pages, packed without resampling into
4096-pixel quadrants to retain the original draw count. Accepted LOD1 geometry
and lighting are shared with LOD2; far-only accepted reductions keep their own
page. Low uses ETC1S for these extra pages, while original pages remain UASTC.
They retain
LOD0's original lighting and coverage reports. New pages use half/quarter of
LOD0's linear density; the manifest's global `texelsPerMeter` describes LOD0.
The existing per-material atlas index selects the appropriate page at runtime.

`--preserve-lods` keeps the conservative original-atlas LODs. Other Blender
qualities can opt in with `--transfer-lods`. Changing this mode requires stage 3;
stage 4 resumes its saved geometry and verifies the transfer sidecar's checkpoint
hash. Each original or transferred atlas group gets its own final coverage audit.
See [geometry optimization](level-geometry-optimization.md) for projection limits,
fallback behavior, measurements and visual comparisons.

## Scenery without lightmaps

A placement with `bakeLighting: false` is grouped under `unbaked_<ix>_<iz>`.
It keeps spatial LOD switching and separate materials, receives no atlas UVs
or lightmap binding, and does not create an always-on shadow-caster tier.
Camera-facing billboards remain individual dynamic nodes with physics off.
The placement flag survives editable GLBs and Unreal's actor sidecar. Excluded
scenery does not expand automatic ground generation.

Manifest schema 3 carries each cell's explicit `node` and `bakeLighting` flag.
The runtime still reads schemas 1 and 2 with their existing baked-cell defaults.
New exports containing unbaked cells require this updated runtime.
