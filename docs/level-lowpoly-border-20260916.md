# Low-poly props and simple border buildings — 2026-09-16

Saved in `/Game/Maps/BangkokSoi`. All 95 vehicle/pole placements use the new meshes. The 28 border apartment/condo actors now share two native Unreal meshes; one detailed apartment and one detailed condominium remain in the main level. Measured reduction for these five asset families: **938,688 placed triangles**.

## Model budgets

| Model | Before triangles | After / ceiling | Draw calls / ceiling | Materials / ceiling | Geometries / ceiling |
|---|---:|---:|---:|---:|---:|
| honda-wave | 11,998 | 2,994 / 3,000 | 8 / 8 | 4 / 4 | 7 / 8 |
| soi-lamp-on-utility-pole | 1,260 | 384 / 400 | 5 / 12 | 3 / 8 | 5 / 16 |
| songthaew | 13,994 | 3,476 / 3,500 | 6 / 6 | 6 / 6 | 6 / 6 |

Counts above are procedural-factory triangles, including repeated parts. The prior exported Honda had 11,862 triangles and Songthaew 13,958 after exporter cleanup; the level savings use those exported counts.

Honda retains the steering and two wheel pivots, with fewer wheel segments/spokes and simpler fittings. Songthaew retains its four wheel pivots, benches, passenger opening, canopy and rails, with simpler wheels, arches, curves and roof subdivisions. The pole uses four-sided insulators and bracket sections, with surface marks represented by flat patches. Existing textures are retained.

## Level geometry after source export

Full source actor geometry: **2,639,566 → 1,700,878 triangles (−35.6%)**. These are placed source triangles, not a simultaneous sum of runtime LODs. The source exporter removes some degenerate triangles; Honda exports at 2,954 per placement after the Unreal roundtrip.

| Asset | Placements | Placed triangles |
|---|---:|---:|
| SM_TK_BanyanExterior | 13 | 69,940 |
| SM_TK_TamarindExterior | 12 | 64,560 |
| SM_TK_RainTreeExterior | 14 | 62,160 |
| SM_TK_IsuzuDMax | 5 | 59,960 |
| SM_TK_TropicalAlmondExterior | 11 | 59,180 |
| SM_TK_MangoTreeExterior | 11 | 59,180 |
| SM_TK_GoldenShowerExterior | 11 | 59,180 |
| SM_TK_QueensCrapeMyrtleExterior | 11 | 59,180 |
| SM_TK_IndianMastTreeExterior | 11 | 59,180 |
| SM_TK_StudentDormitoryBlock | 10 | 58,000 |

## Border buildings

| Mesh | Placements | Triangles each | Placed triangles |
|---|---:|---:|---:|
| SM_TK_BangkokApartmentBlock | 1 | 27,664 | 27,664 |
| SM_TK_LowRiseCondominium | 1 | 18,844 | 18,844 |
| SM_BorderApartmentSimple | 18 | 36 | 648 |
| SM_BorderCondoSimple | 10 | 36 | 360 |

The replacements use three boxes each (36 triangles), with window detail in native Unreal materials. Actor positions, scales, exterior/bake tags and labels are preserved. Mesh assets live under `/Game/ThaiKit/BorderSimple20260916/`. The detailed main buildings keep their original meshes and locations.

## Verification and limits

- Build, browser turntables, Node construction, four budget axes, runtime contracts and ordinary promotion completed for all three models. Installed previews are available at http://localhost:3733. No new Meshy/image-generation charges.
- GLB exports retain vertex colors, texture references and valid UV ranges; checked Unreal imports use fresh assets under `/Game/ThaiKit/GLBImports/LowPolyBorder20260916/`. Existing concrete overrides on 25 poles are preserved by slot name.
- All three props retain eight collider parts. Measured coverage: Honda 97.14%, pole 100%, Songthaew 97.63%. Existing coarse collider compounds were measured, not redesigned; Honda/Songthaew p95 vertical error remains about 0.46–0.47m.
- Pivots including root: Honda 4, pole 1, Songthaew 5. Each has 0 sockets and 0 destruction groups, matching the declarations.
- Vehicle baseline silhouette comparisons pass (Honda IoU 0.889; Songthaew 0.937). Pole whole-frame segmentation is inconclusive because its silhouette is thin. Attachment gate reports zero declared anchors, so it is not a measurement of assembly joins.
- Geometry sampling flags overlapping vertices in assembled meshes (Honda 92/1,425, pole 89/690, Songthaew 20/1,996). This is not a clean self-intersection pass. Multi-angle visual review did not find new visible penetrations; simplified rail ends and overlapping fittings are not watertight geometry.
- Photo-fidelity acceptance remains incomplete. Latest subjective whole-asset estimates: Honda 0.78, pole 0.73, Songthaew 0.78; all retain `refine-code`, not a fabricated passing verdict. Layer scores (silhouette, structure, form, material, lighting): Honda .85/.85/.70/.76/.70; pole .86/.83/.62/.60/.72; Songthaew .86/.88/.68/.74/.73. History and counters are preserved (85/105, 1/30, 57/77 corrections); prior passed stages are 0/8, 8/8 and 0/8 respectively, not newly re-certified stages. Hidden surfaces are inherited approximations with low confidence rather than independently verified reconstructions. Honda retains a legacy strict material-spec evidence failure.
- Native border material export roundtrip passed: two buildings plus Songthaew = 3,548 triangles; the border window textures are present. Unreal asset and level viewport reviewed.

## Deliverables and recovery

Full Unreal source export: `levels/bangkoksoi/unreal/level.glb` (408,007,444 bytes). This is the source GLB, not the compressed game delivery.

The previously delivered `Operation-X/GLB/bangkoksoi_low.glb` remains the prior 161,074,328-byte bake. It does **not** yet include this revision. A fresh low bake must use the approved 2048 lighting / 512 moon samples; no new game-file size is claimed here.

Evidence and full source counts: `scratch/lowpoly-border-20260916/`. Model source backups: `scratch/<id>/lowpoly-20260916/before/`. Unreal map backup: `C:/tk/lowpoly-border-20260916/BangkokSoi-before.umap`; full source export also preserves its predecessor alongside the export.

Subsequent revision: the [Isuzu D-Max simplification](isuzu-dmax-lowpoly-20260916.md) saves another 45,190 placed triangles in the saved Unreal map. The full-level GLB and tables above describe the preceding export.

## Subsequent full low rebake

These changes are now included in the delivered 141.82 MB low build using
2048 lighting / 512 moon samples. File verification and both hardware-browser
smoke views passed. See [the rebake report](level-low-rebake-20260916.md) for
final counts, atlas allocation, remaining warnings and the delivery receipt.
