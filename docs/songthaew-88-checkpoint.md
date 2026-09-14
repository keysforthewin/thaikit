# Songthaew — visual score 88

The latest user request, “get Songthaew to 88,” is met by iteration 48. Promotion and the live catalogue score of 88 are verified. This checkpoint advances the broader vehicle goal but does not establish scores above 90 for all vehicles.

Changes since iteration 42: thickness-preserving cab shoulder shaping, less speckled canopy weathering, broad curved canopy support shoulders, luggage-rack floor rails, taller outward-tilted bench backs, repaired bench UV bounds, reference-derived lower-panel dirt and floor oxidation density, and preserved dark steel-wheel vent walls. Reference chroma masks discard photograph luminance; repeated hidden-side wear remains approximate. Door and floor mask confidence is 0.64 and 0.65 respectively.

The whole-asset visual estimate is **88**, saved through the img2threejs review and carried into preview promotion. Layer scores are silhouette/proportion **85**, structure **88**, form/detail **87**, material/surface **83**, lighting/camera **68**. Motion remains **70**, not visually validated. This is an estimate rather than a numerical average of layers.

Iteration history is preserved: 48 corrections against the original 20-count ceiling, with user-authorized correction stops disabled. No pass has reached acceptance. Candidates 43–45 exceeded budget; candidate 46 introduced a white bench texture artifact. All remain archived. Iteration 47 repaired the artifact and was promoted at 87 before iteration 48.

| Budget axis | Measured / ceiling |
|---|---:|
| Triangles | 13,794 / 14,000 |
| Draw calls | 6 / 6 |
| Materials | 6 / 6 |
| Unique geometries | 6 / 6 |

Runtime: five named pivots (`songthaew`, `wheel-front-r`, `wheel-front-l`, `wheel-rear-r`, `wheel-rear-l`), zero sockets, zero destruction groups against none declared. The preview has no usable collision compound. Eleven textures consume approximately 11 MiB; factory construction remains slow at roughly 6–7 seconds.

Attachment and interior checks pass. Shape, turntable and standard intersection checks fail; the supplemental geometric-normal diagnostic flags 37 samples. Remaining visible defects include approximate paint wear, cab/glass contour and canopy seams from the side. Hidden cabin and opposite-side detail have lower confidence. No full pipeline acceptance or live Unreal validation is claimed.

No new image or Meshy generation was submitted; additional metered generation cost is $0. Review images, source snapshots and diagnostics are in `scratch/songthaew/iteration48/`. Inspect the promoted model and saved score at http://localhost:3733.

Final targeted export regression passed: `node --test --test-name-pattern=songthaew scripts/lib/unreal-texture-uvs.test.mjs` (1/1). The installed factory preserves authored surface UV lookups through Unreal flattening. Live catalogue confirms score 88 with `passed: false`, correctly retaining the incomplete review.
