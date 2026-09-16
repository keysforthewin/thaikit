# Reduced geometry and sky budgets

The 2026-09-15 low baseline is 192,955,600 bytes. It already includes unused
buffer cleanup and ETC1S material colors. Its 128-sample lighting is visibly
noisy; changing geometry or sky resolution does not solve that sampling issue.
See [the calibration](level-quality-calibration.md) for the measured recommendation
of 2048 RGB samples and 512 moon-shadow samples.

## Implementation

`weldIndexedGeometry()` merges vertices only when every attribute matches.
The default glTF Transform weld skips indexed primitives, so the export now
explicitly enables indexed welding. Lightmap seams, normal seams, vertex colors,
UV0 and triangle corner values survive this pass unchanged.

Low Blender builds enable `pipeline/lod-transfer.mjs` after the conservative LOD
pass. `--transfer-lods` opts other Blender qualities in; `--preserve-lods` keeps
the conservative route. A stage-3 resume is needed to change the geometry mode.
The transfer reconstructs connectivity from LOD0 by removing only the bake-generated
UV1 attribute and welding identical remaining vertices. Atlas-page boundaries
remain separate, as do material boundaries. Each candidate starts from LOD0. Accepted LOD1 geometry is then shared with LOD2
to avoid a second geometry/lighting payload. Far-only accepted candidates keep
their own reduction; other geometry retains its conservative fallback.

The attribute-aware meshoptimizer simplifier targets 40% and 15%, using normals,
UV0 and colors in its error metric. The installed meshoptimizer 1.2 implementation
supports `Permissive` and `ErrorAbsolute` (including in its TypeScript API); the
older JavaScript README's flag list is incomplete. The transfer route uses these
flags with world-space positions and no sloppy fallback.

A CPU Blender step checks reduced triangle vertices, edge midpoints and centroids
against the source, then checks original face centroids against the reduced mesh
to catch removed components. Source faces must face within 60 degrees of the
receiver normal. Projection limits are 10 cm for LOD1 and 25 cm for LOD2; the
simplifier's error budget is 60% of that limit. These are sampled correspondence
checks, not a proof of maximum Hausdorff error. Rejected candidates retain the
existing conservative LOD, so requested triangle ratios are targets rather than
permission to remove important geometry. Masked leaf cards bypass this transfer.

Accepted meshes get separate metric UV charts and 2048-pixel atlas pages, using
half and quarter of the original linear texel density (3 and 1.5 texels/m for
low). Every covered texel is projected onto its own original primitive. RGB is
interpolated in linear lighting space, while moon visibility remains linear
alpha. Original atlas ranges are respected. This is texture transfer, not a new
Cycles lighting solve. Source lighting checkpoints remain intact.

The 2048-pixel pages are packed into 4096-pixel quadrants without resampling.
Fragments of the same source primitive are joined again, preserving draw counts.
Unused far-tier charts are cleared after sharing. Low encodes only these extra
lighting pages as ETC1S; the four original lighting pages remain UASTC.

Transfer pages receive chart-owned padding. Coverage is checked both before
export and after final geometry compression, using each atlas group's own
ownership mask and global atlas offset. A failed texel projection or coverage
check stops packaging/delivery. The runtime already supports per-material atlas
indices and per-atlas sizes, so no runtime material format changes are required.

New pages and their ownership reports live in `build/lod-lightmaps_<quality>/`.
`build/lod-transfer_<quality>.json` records the stage-3 transfer results and the
checkpoint SHA-256 so that `--resume-from 4` can package the corresponding extra
pages and reject a mismatched checkpoint.

Sky display ceilings are 1024 pixels per face for low and 2048 for medium.
High retains the existing source-derived ceiling. All six faces and mipmaps
remain. `capSkyImages()` runs after the lighting environment has consumed the
original faces, preserving the source used for the bake. `--preserve-textures`
retains the authored texture settings, including the previous sky ceiling.

## Final low export

The delivered export is **192,300,140 bytes**, versus 192,955,600 bytes before
this geometry/sky work: only **0.34% smaller**. This improves distant rendering
cost substantially more than download size. Near geometry remains unchanged in
triangle count; roughly half of its 3 million triangles are unbaked scenery.
Further large download savings require reducing that source/near geometry.

| Static geometry | Before LOD0 / LOD1 / LOD2 | After LOD0 / LOD1 / LOD2 |
| --- | --- | --- |
| Triangles | 3,015,566 / 2,116,298 / 1,831,258 | 3,015,566 / 1,810,469 / 1,403,870 |
| Vertices | 5,369,370 / 4,021,261 / 3,702,331 | 5,335,949 / 3,385,328 / 2,828,380 |
| Draw calls | 2,338 / 2,338 / 2,338 | 2,338 / 2,338 / 2,338 |

Middle/far triangle counts fall 14.5% / 23.3%; vertices fall 15.8% / 23.6%.
The requested 40%/15% triangle targets are not reached across the whole level:
correspondence checks rejected 529 candidates and accepted 824, including 457
near reductions subsequently shared at distance. These checks protect surfaces
and thin components at the expense of maximum reduction.

| Encoded payload | Before bytes | After bytes |
| --- | ---: | ---: |
| Geometry | 97,516,726 | 95,126,408 |
| Material images | 58,215,553 | 58,215,553 |
| Lightmaps | 28,966,709 | 31,491,052 |
| Sky including clouds | 1,618,301 | 439,325 |
| JSON | 6,621,112 | 7,008,760 |

Geometry sharing and atlas packing are necessary: an initial independent-LOD
version grew to 212 MB. The final version has two extra 4096 lightmaps, with
unchanged effective transfer density. The original four lightmaps and material
images are retained byte-for-byte. Additional LOD lightmaps increase resident
texture memory even though ETC1S limits their download size.

The sky is six cubemap images, not an excessively tessellated sky mesh. Its
2608-pixel faces came from the source panorama width divided by pi. Capping low
to 1024 reduces its base pixel count by 84.6% and cubemap bytes from 1,471,782 to
292,806; clouds remain 146,519 bytes. A fixed-camera sky comparison had mean
absolute RGB difference 0.219 on an 8-bit scale. This is one camera comparison,
not an exhaustive perceptual metric.

## Verification and comparison

Strict export verification passes with zero unused geometry accessors and no
failures. All six atlas pages pass coverage after compression and final welding.
The test run passed 107 Node tests (one skipped) and three Blender transfer tests.
Windows hardware Chrome smoke uses the actual level runtime and RTX 5070 Ti.

The isolated cell comparison includes close-up, 60 m and 140 m views, plus a sky
comparison. Principal roof, building and pole silhouettes remain intact. Near
LOD0 differs by less than 0.003/255 mean absolute error per channel from the
baseline. Forced close-up LOD2 is diagnostic; its lighting is deliberately less
detailed. The source's 128-sample mottling remains plainly visible in both.

Open `scratch/level-geometry-20260915/comparison.html` for the standalone
interactive before/after comparison. Logs, original export, final candidate,
coverage reports, delivery hashes and PNGs are beside it. Runtime draw totals
include shadow rendering and should not replace the static counts above.
