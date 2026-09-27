# Taller canopy modules — final review, 2026-09-27

All five canopy modules were raised by **1.10 m (3.61 ft)**. Grounded posts were lengthened and roof assemblies moved up; ground rails remain grounded. The full visual refinement includes reference-derived roof and frame materials, not only clearance. All five are promoted and available in the [asset editor](http://localhost:3733).

The scores below are **img2threejs AI visual-review estimates for the whole asset at intended real-time prop viewing distance**, including roof materials. They are not pixel-similarity percentages. The approved taller support proportions supersede the old proportions in the reference plates.

| Module | Old → new height | Visual score | Triangles | Draws | Materials | Geometries | Recorded corrections |
|---|---:|---:|---:|---:|---:|---:|---:|
| Bamboo Half-Pipe Canopy Module | 3.1 → 4.2 m | 95/100 | 3480/4000 | 4/4 | 3/3 | 4/6 | 14 |
| Corrugated Metal Canopy Module | 2.9 → 4.0 m | 96/100 | 3188/4000 | 3/4 | 2/3 | 3/6 | 9 |
| Nipa Thatch Canopy Module | 3.2 → 4.3 m | 95/100 | 3120/4000 | 3/4 | 2/3 | 3/6 | 10 |
| Tarpaulin Canopy Module | 2.7 → 3.8 m | 95/100 | 3912/4000 | 2/4 | 2/3 | 2/6 | 15 |
| Vetiver Thatch Canopy Module | 3.9 → 5.0 m | 95/100 | 1880/4000 | 3/4 | 2/3 | 3/6 | 11 |

All **8 passes** reached `continue`: blockout, structure, form, material, surface, lighting, interaction and optimization. Every selected semantic feature meets its threshold. Saved correction counts and review histories were preserved. The existing runs had 3-per-pass/10-total limits; the user’s “loop until quality is 95” authorization disabled those count stops without lowering quality or rendering budgets.

| Module | Silhouette / proportion | Structure | Form / detail | Material / surface | Lighting / camera |
|---|---:|---:|---:|---:|---:|
| Bamboo Half-Pipe Canopy Module | 97 | 96 | 95 | 95 | 95 |
| Corrugated Metal Canopy Module | 97 | 97 | 96 | 96 | 95 |
| Nipa Thatch Canopy Module | 97 | 96 | 95 | 95 | 95 |
| Tarpaulin Canopy Module | 97 | 96 | 95 | 95 | 95 |
| Vetiver Thatch Canopy Module | 97 | 96 | 95 | 95 | 95 |

## Changes and remaining approximations

Roof textures use inspected regions from each original plate, registered to the actual roof surface. Roughness and normal maps are independent inferred channels. Frame grain follows each timber or tube member. Material extraction confidence is 0.86 for the roof regions and 0.786–0.820 for the new frame regions. No plate was regenerated.

- **Bamboo Half-Pipe Canopy Module:** Matched split half-pipe courses, scalloped open ends, olive/tan culms, reference-aligned green/cream weathering and lashed joints. Minor approximation: the exact braid and individual bamboo scars are not unique on every unseen member.
- **Corrugated Metal Canopy Module:** Matched single-pitch corrugated zinc, bright galvanized weathering with reference rust streak locations, and red steel angle frame. Minor approximation: tiny fasteners and rolled edge damage are simplified at this budget.
- **Nipa Thatch Canopy Module:** Matched overlapping desaturated nipa leaf texture, localized dark organic wear, uneven tapered fringe, exposed purlins and aged timber. Minor approximation: individual free leaf tips are represented by the rim profile and normal texture rather than separate blades.
- **Tarpaulin Canopy Module:** Matched shallow four-corner-supported blue woven roof, hanging skirts, open corner tears, orange lining, thicker galvanized tube frame, lower rails and corner rope ties. Minor approximation: the photograph's exact cloth creases and knot microfibers differ; the small top region limits recoverable weave detail.
- **Vetiver Thatch Canopy Module:** Matched steep grass-thatched gable roof, moss layout, reed-filled gable, bound ridge, timber structure and tapered eave bulk. Minor approximation: individual grass tips and hidden ridge fastening details remain simplified.

## Verification

- Strict sculpt-spec validation and all eight pass-specific review gates passed.
- Four-angle turntables, multi-angle consistency, per-member solid self-intersection, attachment anchors, part coverage and coplanar checks passed. Intentional contacts between separate construction members were retained.
- Roof and frame material crop comparisons passed. Twenty controlled captures per asset cover four azimuths in unlit, neutral, grazing, environment-reflection and reference-beauty conditions. These diagnostic scores remain separate from the AI visual scores.
- A 1.85 m tall, 0.60 m wide player proxy passed 162 samples per asset through the two central entrance routes. The check allows a 0.30 m step, relevant to the tarp’s low perimeter rails. Removed former full-side collision boxes that blocked walking under several roofs.
- Final installed pack renders are byte-identical PNGs to the approved canonical hero captures. No browser errors, pending textures or texture-loading errors occurred.
- Each static model has exactly **one root pivot**, **zero sockets**, and **zero destruction groups**, matching its declared contract. Compound collision is present; dynamic physics remains disabled as declared.

The original global photo silhouette diagnostic remains a failed diagnostic because the approved 1.10 m lift intentionally changes the silhouette. It was not relabeled as a pass. Revised dimensional measurements, visual review, component checks and material comparisons establish acceptance for this changed brief.

## Collision measurements

Compounds are deliberately coarse roof/support proxies. Coverage and overshoot pass the current promotion gate. Large worst-case deltas can occur on slender ropes, edges or steep thatch; the table records them rather than implying exact mesh collision.

| Module | Parts | Coverage | p95 vertical delta | Maximum vertical delta |
|---|---:|---:|---:|---:|
| Bamboo Half-Pipe Canopy Module | 24 | 98.44% | 0.096 m | 0.775 m |
| Corrugated Metal Canopy Module | 9 | 100.00% | 0.175 m | 0.213 m |
| Nipa Thatch Canopy Module | 8 | 100.00% | 0.249 m | 0.497 m |
| Tarpaulin Canopy Module | 13 | 98.87% | 0.073 m | 3.609 m |
| Vetiver Thatch Canopy Module | 9 | 99.03% | 0.673 m | 0.739 m |

## Cost and evidence

**New generation spend: $0.** Existing reference plates and Meshy evidence were reused; all changes are procedural factories and locally processed material maps. No new remote image or mesh generation was requested.

A single plate cannot establish every hidden surface. Confidence: inferred back roof construction **0.70**, underside joinery **0.65**, unique back-side weathering **0.55**. Fine fibers, knot microstructure and unseen wear are approximations.

- [Final reference/render sheet](../scratch/canopy-height-20260927/final-comparison.png)
- [Controlled lighting sheet](../scratch/canopy-height-20260927/controlled-lighting.png)
- [Untextured form check](../scratch/canopy-height-20260927/clay.png)

Per-asset specs retain the full review history and exact geometry in `canopyHeightRefinement`. Evidence lives in `scratch/<id>/height-review/`, `height-material-views/` and `height-runtime.json`. Initial source/spec/state/render backups are in `scratch/<id>/height-20260927-before/`.
