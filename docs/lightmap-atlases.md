# Lightmap atlases

The Cycles baker generates lightmap UVs at 12 texels per metre in world space,
allocating 4096² pages until the charts fit. It does not shrink charts to satisfy
an atlas cap. The default cap is 32 pages. An allocation or coverage failure
stops before production lighting; the report identifies affected source meshes
and placement IDs where available.

All quality tiers use the same density and page resolution. Low uses 128
samples, medium 2048 and high 16384, for both diffuse lighting and moon visibility.
Adaptive sampling is off. More samples reduce integration noise; they cannot
repair missing UV coverage.

Settings are `lightmap.size`, `texelsPerMeter`, `maxAtlases`, `samples` and
`noiseThreshold`. CLI overrides are `--lightmap-size`, `--texels-per-meter`,
`--lightmap-max-atlases`, `--samples` and `--noise-threshold`. Atlas limits are
counts, not claims about available VRAM: one 4096² page without mipmaps typically
uses 16 MiB in an 8-bit/pixel GPU format, or 64 MiB as uncompressed RGBA.

## Validation

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

New atlas sets use manifest schema version 2. `lightmap.atlases` is an array of
`{image, size, range}` entries. Image indices address the embedded GLB images.
Common channel, intensity, baked-light and moon-mask semantics are unchanged.
Each static material carries `extras.tk.lightmapAtlas`, the zero-based page index.

The updated runtime accepts schema versions 1 and 2. Version 1 single-image
lightmaps retain their previous appearance. Older runtimes reject schema 2;
update the runtime before replacing a level file. `loadLevel()` is unchanged.
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
