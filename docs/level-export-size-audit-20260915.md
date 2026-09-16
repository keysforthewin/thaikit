# BangkokSoi export size audit — 2026-09-15

The latest completed low build is **310,452,904 bytes: 310.45 MB / 296.07 MiB**.
Its embedded generation timestamp is `2026-09-15T23:21:03.045Z`.
Audited file: `levels/bangkoksoi/build/level_low.glb`.

All sizes below are decimal MB of actual file payload, unless stated otherwise.
This measures download/file size, not decoded CPU memory or GPU memory.
No production assets, settings, or pipeline code were changed for this audit.

## Where the bytes go

| Payload | Latest low, MB | Existing medium, MB |
| --- | ---: | ---: |
| Material textures | 145.32 | 139.45 |
| Compressed geometry, all LODs and dynamic objects | 113.25 | 193.93 |
| Baked lighting | 28.97 | 172.93 |
| Sky and clouds | 15.06 | 15.06 |
| glTF JSON | 7.83 | 10.66 |
| Headers, alignment, other | 0.02 | 0.03 |
| **Total** | **310.45** | **532.07** |

The medium file is an older scene/build, generated `2026-09-15T15:48:23.589Z`.
A newer medium bake was still running during this audit. This is not a controlled
quality-preset comparison: medium has 396 material images and 30 lighting pages,
whereas the latest low has 521 material images and four lighting pages.

The low file already uses KTX2 textures and meshopt geometry compression. The
second buffer declared in its JSON is meshopt's virtual decompression/fallback
buffer; its 266 MB declaration is **not** another physical copy inside the file.
Image payloads contain no byte-identical duplicates, and the current verifier
finds no unused images. The recent texture cleanup and 1024-pixel material cap
are present in this build.

## 1. Color texture encoding is the largest immediate saving

`levels/bangkoksoi/settings.json` selects `uastc` for both color and data maps.
`scripts/level/bake-level.mjs:272` honors that setting; low currently changes
resolution, not encoding. The 521 material images break down as follows:

| Role | Images | MB |
| --- | ---: | ---: |
| Base color only | 393 | 113.21 |
| Shared base color / emissive | 16 | 1.56 |
| Normal | 50 | 21.11 |
| Metallic / roughness | 59 | 9.25 |
| Occlusion | 3 | 0.20 |

**Measured experiment:** re-encoded all 409 color images from the original PNG
payloads in `stage3_low.glb`, using the existing `encodeKtx2()` implementation,
ETC1S quality 160, mipmaps, and the same 1024-pixel ceiling as the shipped low.

* Current color payload: **114,772,704 bytes**.
* ETC1S color payload: **27,664,783 bytes**.
* Saving: **87,107,921 bytes (87.11 MB)**, or 76% of color-image bytes.
* Other material maps, lightmaps, and sky were excluded from this experiment.

This is a measured encoding result for every color image, not a sample-based
estimate. All 409 source names were unique. A UASTC control encode of the largest
color map reproduced every shipped mip payload byte; only the encoder's recorded
thread-count metadata differed. Visual acceptance is still outstanding: inspect signs, fine patterns,
foliage alpha, and gradients. Selective UASTC exceptions may be appropriate.
The existing separate color/data encoding routes allow normals and lightmaps to
retain UASTC. Changing the level-wide color setting would also affect sky encoding;
a low-only material encoding override would need to be made explicit.

## 2. Unreferenced geometry survives the final cleanup

The final low contains **3,488 accessors not referenced by any mesh**. Of these,
3,113 buffer views are wholly unused, containing **14,737,755 compressed bytes**.
Some other views mix used and unused data and were conservatively retained.

The pipeline's final `prune()` at `scripts/level/bake-level.mjs:298` includes
nodes, meshes, accessors, and materials, but omits primitives. A removed mesh can
leave a detached primitive retaining accessors in the in-memory property graph.
The writer serializes those accessors even though that primitive is never written.
A minimal reproduction using the installed glTF Transform version confirmed:

* Existing cleanup: zero meshes, one detached primitive, one surviving accessor.
* Additional primitive/accessor cleanup: zero surviving accessors.

**Measured experiment:** removed only unreachable accessor records and wholly
unused buffer views from a scratch GLB, remapped references, and repacked the
remaining binary payloads without decoding or re-encoding them.

* Scratch result: **294,603,876 bytes**.
* Saving including JSON/alignment: **15,849,028 bytes (15.85 MB)**.
* SHA-256 comparison confirmed all **9,813 retained payloads** were unchanged.
* `verify-level --quality low --file <scratch file> --strict`: **passed**.
* Same 76 pre-existing warnings as the production low; zero failures.

The production fix should include detached-primitive cleanup before accessor
cleanup and add a serialized-accessor reachability check to verification. Preserve
lightmap attributes and manifest-owned textures. The scratch repacker is specific
to this static GLB and is evidence, not a replacement production exporter.

## 3. Low does not have a low geometry budget

Low ships the full LOD0 alongside LOD1 and LOD2; the quality preset does not reduce
the starting geometry. Across static cells:

| Geometry | LOD0 triangles | LOD1 triangles | LOD2 triangles |
| --- | ---: | ---: | ---: |
| Baked surfaces | 1,541,478 | 1,370,784 | 1,369,678 |
| Unbaked surroundings / foliage | 1,474,088 | 745,514 | 461,580 |
| **Total** | **3,015,566** | **2,116,298** | **1,831,258** |

The targets are 40% and 15%, but the actual tiers retain 70% and 61%. Baked
surfaces retain **89% even at LOD2**, with almost no improvement from LOD1.
`scripts/level/pipeline/lod.mjs:46` protects lightmap chart borders and applies a
strict UV-error bound. Both baked LODs use this protected path; LOD2 does not use
the topology-ignoring fallback suggested by the file's introductory comment.

The current lightmap layout has **762,138 charts for 1.54 million baked triangles**.
These numerous small charts split vertices and constrain simplification.
Selected contributors to LOD0 triangle count, aggregated by material:

* Shared exterior-tree bark material (named after the rain tree): 263,656.
* Honda Wave material bucket (named tire/rim/hub): 165,816.
* Zinc hoarding steel and sheet combined: 272,440.
* Apartment-block material bucket named green: 146,880.
* Low-rise condominium material bucket named aluminum: 141,936.

Correction from the September 16 source-ownership audit: these are material
groups, not necessarily individual asset families. The bark group above contains
ten tree species; rain-tree exterior bark contributes 39,032 of its triangles.
Material merging retains one source name, so that name alone cannot establish
per-asset or per-component geometry ownership.

There are **39.14 MB of compressed views used only by LOD1/LOD2**. This is not a
promise that all those bytes can be removed: distant rendering still needs
appropriate geometry. Many buffers are already shared across LODs, so simply
calling LOD1/LOD2 duplicates overstates their physical cost.

The substantial next reduction needs simpler source geometry for low, especially
repeated poles, bikes, fences and foliage, and a UV/LOD strategy that permits
simplification while preserving baked lighting. Consider better chart grouping,
simplification before low's unwrap/bake, or separately baked LODs. Do not just
disable UV protection: it exists to prevent lighting corruption. Repeated unbaked
props are also candidates for mesh reuse/instancing instead of expanding each
placement into merged cell geometry; this needs pipeline/runtime work.

The exported bounds include surroundings: about **701 × 718 metres**, 314 metres
vertically, across **210 cell entries**. The compact playable street therefore
understates the scenery actually included in the file.

## 4. Sky and lighting

Low's sky retains a **2608 × 2608 × six-face** UASTC cubemap with 12 mip levels:
14.23 MB, plus 0.83 MB of clouds. It is identical in size to the existing medium
sky. Low's preset has no `maxFace` cap; the pipeline already supports one through
`textureBudgetFor()` and `prepareSkyImages()`. A 1024-face low sky is worth testing.
No sky savings or visual results have been measured here.

The four 4096² lighting pages cost 28.97 MB, only 9.3% of low's file. Lowering
lighting further should follow the larger material and geometry improvements.
Do not resize already-packed atlases: chart gutters and UV coverage depend on
their dimensions. Any density/layout change needs the existing coverage gates.

## Recommended order

1. Fix and verify detached-primitive/accessor cleanup: measured 15.85 MB saving,
   with no changes to retained payloads.
2. Introduce a low color-encoding budget and visually review ETC1S: measured
   87.11 MB saving if all tested color maps are accepted.
3. Give low an explicit sky face-size budget and review it.
4. Address source mesh complexity and ineffective baked LODs for the next large
   reduction. Add file-size and actual LOD-ratio reporting to future builds.

Combining the first two measured savings gives approximately **207.50 MB
(197.88 MiB)**, 33% below the current low. This is a projected combined size,
not a shipped or visually approved combined build. There is not yet evidence
for promising a sub-100-MB result without additional geometry/texture tradeoffs.

## Reproduction artifacts

All experiments are under `scratch/level-size-audit-20260915/`:

* `audit.py`, `level_low.glb.json`, `level_medium.glb.json`: physical byte accounting.
  Per-mesh referenced-view sizes include shared views and must not be added up.
* `texture-experiment.mjs`, `texture-experiment.json`, `texture-experiment.log`:
  all 409 color-map encoding measurements.
* `strip-unused.py`, `cleanup-experiment.json`, `low-unused-buffers-removed.glb`:
  conservative removal experiment and retained-payload checks.
* `cleanup-verify.json`: passing existing level verification for that scratch GLB.

## Implemented follow-up

On user approval, implemented geometry cleanup (including detached primitives),
serialized geometry auditing, and ETC1S color encoding for low. Rebuilt low from
stage 3 without rebaking lighting or changing geometry LODs. Color encoding also
applies to sky; its resolution is unchanged.

The new file is **192,955,600 bytes (192.96 MB / 184.02 MiB)**, a reduction of
**117,497,304 bytes (37.85%)** from the audited low.

| Payload | New low, MB |
| --- | ---: |
| Material textures | 58.22 |
| Compressed geometry | 97.52 |
| Lighting | 28.97 |
| Sky/clouds | 1.62 |
| JSON | 6.62 |

Unlike the conservative scratch repacker, the real cleanup also removes unused
accessor data within shared views when re-encoding them. The sky color change
saves another 13.44 MB beyond the initial material-only experiment.

Validation: zero unused accessors; all four lightmap coverage checks passed;
hardware Chrome smoke passed on the RTX 5070 Ti with unchanged rendered triangle
counts and frame coverage. All 38 pipeline tests passed. The full suite had
248 passes, two skips, and one registry concurrency ELOCKED failure; the complete
12-test registry concurrency file passed on isolated retry.

Delivered to `../Operation-X/GLB/bangkoksoi_low.glb`, with SHA-256 equality checked
against `levels/bangkoksoi/build/level_low.glb`. The previous game copy matched the
saved baseline before replacement. Logs, baseline GLB, screenshots, and delivery
hash are in `scratch/level-size-fix-20260915/`.

Geometry/sky-resolution proposals and the completed receiver-patch sample
calibration are in `docs/level-quality-calibration.md`. The study recommends
2048 RGB / 512 moon samples for the next full low bake. Low's shipped lighting
and default preset remain at 128 samples; the active medium bake uses a different
layout and was not used as the calibration reference.

## Subsequent geometry and sky implementation

The completed low geometry/sky pass delivers 192,300,140 bytes (0.34% below the
192,955,600-byte cleanup baseline). Middle/far triangles fall 14.5%/23.3% with
unchanged draw counts; near triangles remain 3,015,566. Sky faces fall from 2608
to 1024 pixels. Extra transferred LOD lighting largely offsets the geometry and
sky download savings. See [the final report](level-geometry-optimization.md) for
exact counts, validation, constraints and the interactive comparison. Lighting
remains the existing 128-sample bake; the 2048/512 recommendation is not applied.
