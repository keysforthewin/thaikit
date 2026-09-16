# Isuzu D-Max low-poly revision — 2026-09-16

Promoted the simplified procedural model and refreshed all five placements in `/Game/Maps/BangkokSoi`. The map is saved. New Unreal mesh: `/Game/ThaiKit/GLBImports/DMaxLowPoly20260916/SM_TK_IsuzuDMax/SM_TK_IsuzuDMax`.

| Budget axis | Before | After | Ceiling |
|---|---:|---:|---:|
| Triangles | 11,998 | 2,954 | 3,000 |
| Draw calls | 6 | 6 | 6 |
| Materials | 4 | 4 | 4 |
| Unique geometries | 6 | 6 | 8 |

Reduction: 75.4%. Wheels fell from 6,240 placed triangles per vehicle to 576. Wheels retain twelve circumferential segments and closed surfaces; tire tread and rim finish use the existing texture atlas. Cab, hood, window surrounds and arch tessellation are reduced, and minor cargo ribs are removed. Bounds remain 2.080 × 1.760 × 5.133 metres. Up close the wheels and arches are visibly faceted.

Five refreshed actors exported back out of Unreal at **14,770 triangles**, down from **59,960** in the preceding source export: **45,190 placed triangles saved**. The earlier exporter removed six degenerate triangles per original pickup, explaining the small difference from factory counts. Applying this verified delta to the preceding whole-level source count gives **1,655,688 triangles**; this is an updated inventory calculation, not a newly exported full-level GLB.

## Verification

- Browser turntable, Node construction, budget and runtime checks, ordinary promotion, official browser GLB export, checked Unreal import and five-actor export roundtrip completed. All eight texture images, texture UVs and vertex colors are retained. Unreal asset thumbnail and main street placement visually inspected.
- Original runtime contract retained: six pivots (`isuzu-d-max`, `tailgate`, `wheel-front-l`, `wheel-front-r`, `wheel-rear-l`, `wheel-rear-r`); one socket (`tailgate-mount`); zero destruction groups.
- Existing eight-box collision compound measured without changing shapes: coverage 98.41%, p95 vertical error 0.4164m, max 0.6221m; all five detected ledges retained. It remains a coarse approximation rather than a close-fitting vehicle collision surface.
- Baseline-to-candidate silhouette IoU 0.972 with unchanged aspect/scale. Interior difference 0.01793 over 19,237 cells. Two orbit views show no silhouette collapse. These comparisons measure retention of the preceding model, not photo fidelity.
- Part coverage passes with legacy dangling detail-inventory warnings. Attachment gate contains zero declared anchors and therefore does not measure assembly joins. Self-intersection sampler flags 15 of 1,997 sampled vertices, with four undecided: no watertight/self-intersection pass is claimed.
- Existing strict paint-spec evidence remains incomplete. Latest subjective whole-asset fidelity estimate is 0.78; silhouette/structure/form/material/lighting layers are .86/.87/.69/.73/.73. Decision stays `refine-code`; prior photo-fidelity acceptance is not re-certified. Existing 48 corrections and history remain preserved under the earlier explicit stop-threshold override; this revision adds one review. No build pass was newly certified `continue`. Hidden regions remain inherited approximations with low confidence.
- No new Meshy or image-generation cost.

Preview: http://localhost:3733 (Isuzu D-Max). Render: `scratch/isuzu-d-max/renders/beauty-hero.png`. Detailed evidence: `scratch/dmax-lowpoly-20260916/`. Recovery sources: `scratch/isuzu-d-max/lowpoly-20260916/before/`; map backup: `C:/tk/dmax-lowpoly-20260916/BangkokSoi-before.umap`.

The individual kit export and Unreal map are updated. The full-level source GLB remains the preceding border/vehicle revision, and the 161 MB game GLB remains the older lighting bake. A full export and calibrated low bake (2048 lighting / 512 moon samples) are still needed to put all recent geometry changes into that game file.

## Subsequent full low rebake

These changes are now included in the delivered 141.82 MB low build using
2048 lighting / 512 moon samples. File verification and both hardware-browser
smoke views passed. See [the rebake report](level-low-rebake-20260916.md) for
final counts, atlas allocation, remaining warnings and the delivery receipt.
