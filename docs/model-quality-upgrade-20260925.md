**Twenty-model quality upgrade — 25 September 2026**

All twenty assets in the frozen lowest-score selection have revised geometry or materials and a recorded visual estimate five points above their starting score. All twenty are promoted to the local editor. Generation spend for this task: **$0**; existing references were reused.

These are img2threejs **whole-asset AI visual estimates**, reviewed against the reference and saved authoring contract. The starting scores are historical registry values; the deltas are not an independently calibrated benchmark. Every asset remains a **preview with `refine-code`**, and none is claimed to have full pipeline acceptance. Photo-fidelity and self-intersection checks still fail; additional failures are listed below.

The scope preserved the existing exterior-only building contracts, five occupied apartment floors, the three-metre repeating ladder module, authored scale, all four budgets, pivots, sockets and destruction groups. Existing collider compounds were retained and were **not re-derived or remeasured** after these visual refinements. Their stored coverage numbers predate this task.

Open [the editor](http://localhost:3733) to orbit each preview and inspect the quality, runtime, pivots, sockets and collider panels. Full machine-readable evidence is in [the result snapshot](model-quality-upgrade-20260925.json).

**Scores and measured cost / unchanged limit**

| Asset | Before → after | Δ | Triangles | Draw calls | Materials | Geometries |
|---|---:|---:|---:|---:|---:|---:|
| [Soi Lamp on Utility Pole](../packages/props/src/models/soi-lamp-on-utility-pole/createObjectModel.ts) | 73 → 78 | +5 | 384 / 400 | 5 / 12 | 3 / 8 | 5 / 16 |
| [Honda Wave](../packages/props/src/models/honda-wave/createObjectModel.ts) | 78 → 83 | +5 | 2,994 / 3,000 | 8 / 8 | 4 / 4 | 7 / 8 |
| [Isuzu D-Max](../packages/props/src/models/isuzu-d-max/createObjectModel.ts) | 78 → 83 | +5 | 2,954 / 3,000 | 6 / 6 | 4 / 4 | 6 / 8 |
| [Songthaew](../packages/props/src/models/songthaew/createObjectModel.ts) | 78 → 83 | +5 | 3,476 / 3,500 | 6 / 6 | 6 / 6 | 6 / 6 |
| [Chain-Link Fence Panel](../packages/props/src/models/chain-link-fence-panel/createObjectModel.ts) | 82 → 87 | +5 | 590 / 4,000 | 3 / 4 | 3 / 3 | 3 / 6 |
| [Zinc Sheet Hoarding Panel](../packages/props/src/models/zinc-sheet-hoarding-panel/createObjectModel.ts) | 82 → 87 | +5 | 410 / 4,000 | 2 / 4 | 2 / 3 | 2 / 6 |
| [Overpass Stair Flight, Roofed Steel](../packages/props/src/models/pedestrian-bridge-roofed-stair-flight/createObjectModel.ts) | 85 → 90 | +5 | 3,872 / 8,000 | 5 / 6 | 3 / 4 | 5 / 8 |
| [Overpass Walkway Span, Roofed](../packages/props/src/models/pedestrian-bridge-roofed-steel-span/createObjectModel.ts) | 85 → 90 | +5 | 4,700 / 16,000 | 4 / 12 | 3 / 8 | 4 / 16 |
| [Toyota Fortuner](../packages/props/src/models/toyota-fortuner/createObjectModel.ts) | 85 → 90 | +5 | 13,920 / 14,000 | 6 / 6 | 4 / 4 | 6 / 6 |
| [Toyota Commuter Van](../packages/props/src/models/toyota-commuter-van/createObjectModel.ts) | 89 → 94 | +5 | 11,988 / 12,000 | 8 / 12 | 4 / 4 | 8 / 12 |
| [7-Eleven Store Building](../packages/props/src/models/7-eleven-store-building/createObjectModel.ts) | 90 → 95 | +5 | 2,604 / 32,000 | 18 / 24 | 13 / 16 | 16 / 32 |
| [Bangkok Apartment Block](../packages/props/src/models/bangkok-apartment-block/createObjectModel.ts) | 90 → 95 | +5 | 31,744 / 32,000 | 16 / 24 | 12 / 16 | 16 / 32 |
| [Bangkok Hospital Clinic Building](../packages/props/src/models/bangkok-hospital-clinic-building/createObjectModel.ts) | 90 → 95 | +5 | 2,268 / 16,000 | 11 / 12 | 8 / 8 | 11 / 16 |
| [Big C Store Building](../packages/props/src/models/big-c-store-building/createObjectModel.ts) | 90 → 95 | +5 | 2,268 / 16,000 | 11 / 12 | 7 / 8 | 11 / 16 |
| [Chinese Shrine](../packages/props/src/models/chinese-shrine/createObjectModel.ts) | 90 → 95 | +5 | 15,620 / 16,000 | 9 / 12 | 7 / 8 | 9 / 32 |
| [Concrete Walk-Up Flat Block](../packages/props/src/models/concrete-walk-up-flat-block/createObjectModel.ts) | 90 → 95 | +5 | 10,572 / 32,000 | 10 / 24 | 9 / 16 | 10 / 32 |
| [Fire Escape Ladder Segment](../packages/props/src/models/fire-escape-ladder-segment/createObjectModel.ts) | 90 → 95 | +5 | 1,960 / 2,000 | 2 / 4 | 1 / 2 | 2 / 4 |
| [Low-Rise Condominium](../packages/props/src/models/low-rise-condominium/createObjectModel.ts) | 90 → 95 | +5 | 18,844 / 32,000 | 13 / 24 | 11 / 16 | 13 / 32 |
| [Monobloc Plastic Armchair](../packages/props/src/models/monobloc-plastic-armchair/createObjectModel.ts) | 90 → 95 | +5 | 1,856 / 2,000 | 1 / 2 | 1 / 2 | 1 / 4 |
| [Police Traffic Barrier](../packages/props/src/models/police-traffic-barrier/createObjectModel.ts) | 90 → 95 | +5 | 1,084 / 2,000 | 2 / 2 | 2 / 2 | 2 / 4 |

**Visual layers, scored out of 100**

S = silhouette/proportion; C = component structure; F = form detail; M = material surface; L = lighting/camera. The whole-asset estimate is a separate qualitative judgment, not an arithmetic average of these layers.

| Asset | S | C | F | M | L |
|---|---:|---:|---:|---:|---:|
| Soi Lamp on Utility Pole | 86 | 83 | 68 | 73 | 72 |
| Honda Wave | 85 | 85 | 79 | 82 | 70 |
| Isuzu D-Max | 86 | 88 | 76 | 83 | 75 |
| Songthaew | 87 | 88 | 78 | 82 | 74 |
| Chain-Link Fence Panel | 84 | 88 | 87 | 86 | 80 |
| Zinc Sheet Hoarding Panel | 84 | 88 | 87 | 89 | 80 |
| Overpass Stair Flight, Roofed Steel | 92 | 94 | 86 | 86 | 80 |
| Overpass Walkway Span, Roofed | 94 | 94 | 87 | 86 | 82 |
| Toyota Fortuner | 90 | 92 | 85 | 88 | 82 |
| Toyota Commuter Van | 94 | 95 | 90 | 93 | 86 |
| 7-Eleven Store Building | 94 | 96 | 94 | 91 | 84 |
| Bangkok Apartment Block | 94 | 96 | 94 | 92 | 82 |
| Bangkok Hospital Clinic Building | 94 | 95 | 94 | 94 | 85 |
| Big C Store Building | 94 | 96 | 94 | 94 | 84 |
| Chinese Shrine | 95 | 95 | 94 | 91 | 83 |
| Concrete Walk-Up Flat Block | 94 | 96 | 94 | 92 | 83 |
| Fire Escape Ladder Segment | 94 | 96 | 95 | 94 | 82 |
| Low-Rise Condominium | 94 | 96 | 94 | 92 | 84 |
| Monobloc Plastic Armchair | 94 | 96 | 95 | 90 | 83 |
| Police Traffic Barrier | 95 | 96 | 94 | 95 | 85 |

**Changes and remaining limits**

- **Soi Lamp on Utility Pole:** Deeper 0.20m lamp housing with connected diffuser and de-lit concrete surface evidence improves the reduced-budget draft. Concrete grain and low-pole algae now read; crossarm porcelain remains four-sided and no new wire detail is claimed. The declared narrow pole envelope differs substantially from the wider plate. Shared-crop turntable and part coverage pass; photo Tier 1 and assembled self-intersection do not. Hidden shaft faces use the same finish at 0.55 confidence. This is a scored usable preview, not full pipeline acceptance. Hidden-region confidence: 0.55. Below-threshold features: componentStructure 83/85, formDetail 68/80, materialSurface 73/80, lightingCamera 72/80.
- **Honda Wave:** Twenty-four alternating crossed spokes replace eight using the same triangle count. Faded blue albedo and oxidized spoke response are closer to the reference. Tyres, mirror outlines, hub, engine and rear rack remain faceted. Turntable and part coverage pass; strict glass material spec, photo Tier 1 and assembled self-intersection remain unresolved. Hidden engine/rear surfaces remain inferred at 0.6 confidence. This is a scored usable preview, not full pipeline acceptance. Hidden-region confidence: 0.6. Below-threshold features: formDetail 79/80, lightingCamera 70/80.
- **Isuzu D-Max:** Rims now separate from rubber after fixing per-triangle atlas selection and oxidized-metal response. Vent impressions, hubs and the preserved green body wear are legible. Remaining weaknesses are polygonal arches, squared mirrors and approximate stamped-wheel depth; the 3000-triangle contract is retained. Hidden-region confidence: 0.6. Below-threshold features: formDetail 76/80, lightingCamera 75/80.
- **Songthaew:** Corrected single-pass wheel UVs restore dusty rubber versus pale stamped steel; eight wheel vent impressions and filtered maps are visible. Canopy, rails, benches and the yellow cab remain intact. Cab curvature and wheel recess depth remain reduced-budget approximations. Hidden-region confidence: 0.6. Below-threshold features: formDetail 78/80, lightingCamera 74/80.
- **Chain-Link Fence Panel:** Rounded twelve-segment support tubes, cap sleeve, five rail couplers and four post tie bands improve the galvanized frame. Wire alpha cutout and one-post 3m tiling contract are preserved. Mesh is intentionally flat, with no wire depth, and reverse finish is inferred at 0.5 confidence. Part coverage and coplanar pass; edge-on/open-mesh turntable, photo Tier 1 and assembled intersection do not certify acceptance. This is a scored usable preview, not full pipeline acceptance. Hidden-region confidence: 0.5. Below-threshold features: silhouetteProportion 84/85.
- **Zinc Sheet Hoarding Panel:** Fifteen sheet fasteners and filtered normal-mapped ribs make the sheet and support rails read as assembled galvanized metal. The single flat sheet and one-left-post user requirement are preserved. No physical corrugation or accurate reverse-side wear is claimed. Hidden-region confidence: 0.5. Below-threshold features: silhouetteProportion 84/85.
- **Overpass Stair Flight, Roofed Steel:** Physical roof washers and base-shoe hex anchors make assembly junctions legible. Lighter blue galvanized roof, rust variation on the blue frame, and restrained chequer-plate grime improve the reference match. Repeated weathering remains visible; stair/deck dimensions and walkable geometry stay fixed. Hidden-region confidence: 0.6.
- **Overpass Walkway Span, Roofed:** Pale blue corrugated roofing, roof fasteners, base anchors, and corrected frame albedo now separate the structural materials. Deck pattern is less blotchy. Small welds and back-side weathering remain approximate. Full-length roof and rail geometry preserve the span's modular contract. Hidden-region confidence: 0.6.
- **Toyota Fortuner:** Rounded wider lamps, corrected charcoal paint and continuous analytic roof normals remove the strongest previous block and highlight artifacts. Existing separate wheel and roof-rail structure is preserved. Nose proportions, roof shoulders and rear-side wear remain approximate under the 14000-triangle budget. Hidden-region confidence: 0.6.
- **Toyota Commuter Van:** Windshield diffuse color, specular response and cowl opacity now read as dark glazing rather than white bodywork. Wipers and cabin silhouettes remain visible across the front and side views. Body wear, roof cover and wheel pivots remain intact. Residual limits: polygonal lamp corners, simplified wheel recesses and single-reference rear detailing. This is a visual estimate within the retained 12000-triangle contract. Hidden-region confidence: 0.6.
- **7-Eleven Store Building:** Reference-derived printed fascia restores the exact mark and stripe proportions; physical louvres, fan rims and a continuous curved duct end restore roof equipment. Separated casement panes expose the central mullion, and neutral green-grey glazing fits the exterior-only contract. Remaining limits are flat wall microfinish and opaque glazing; the photographed shop interior is intentionally outside this asset contract. Unseen rear wall is inferred. Hidden-region confidence: 0.45.
- **Bangkok Apartment Block:** Shallower balcony returns expose all forty condenser grilles and sliding-door recesses at oblique views. Reference-derived runoff strips replace faint generic streaks, and brackets have clean depth separation. Five occupied floors, forty balconies and six tanks follow the saved authoring contract. Repeated laundry and inferred rear bays remain simplified. Hidden-region confidence: 0.5.
- **Bangkok Hospital Clinic Building:** Actual printed hospital lettering and dark-blue field replace font approximations. Both roof units carry physical louvres; de-lit wall runoff and the cream service door improve surface continuity. Green-grey glazing replaces the blue cast. Remaining limits are exterior-only opaque glazing, simple cladding edges and inferred rear service wall. Hidden-region confidence: 0.45.
- **Big C Store Building:** Reference-rectified Big C artwork restores the principal identity feature, with real paired entrance handles and stand-offs now completing the framed door bay. Roof units, shutter slats, canopy joints and cap courses remain visible from the turntable. Residual limits are simple wall microfinish and inferred hidden service elevation. Hidden-region confidence: 0.45.
- **Chinese Shrine:** Closed continuous curled horns and physical tile ridges now follow all nineteen roof samples without bridging concave sections. Reduced painted valley contrast avoids competing stripes, keeping roof curvature readable. Remaining limits: simplified ridge guardians and dragon relief, and inferred unobserved wall decoration. Hidden-region confidence: 0.5.
- **Concrete Walk-Up Flat Block:** The formerly flat sheet has 130 physical roof corrugations and independent analytic upper/lower normals. Unique roof UVs replace repeated rust spots with sparse corrosion. Rounded planting crowns replace boxes; stair voids, corridor slabs and breeze-block pattern remain intact. Residual limits include repeated façade weathering and simplified plants. Hidden-region confidence: 0.55.
- **Fire Escape Ladder Segment:** Ten-sided rungs and collars, separate washers and 2 mm steel-stile chamfers improve the physical detail. Reference-derived chipped paint follows the stile length and lower mounting plates, replacing diffuse brown blobs. The saved three-metre repeating module is preserved. Repeated fastener wear and unseen back-face oxidation remain approximate. Hidden-region confidence: 0.6.
- **Low-Rise Condominium:** Shallower 0.85 m balcony recesses, corrected glass depth writing and grey balustrades reveal the real balcony structure. Darker vertical fins, restrained curtain contrast and varied timber battens restore façade material separation. Residual limits: simplified planting crowns and single-reference rear fenestration. Hidden-region confidence: 0.5.
- **Monobloc Plastic Armchair:** Continuous molded front skirt, radiused leg arch and curved side skirts replace disconnected square apron bars. The seat is dished with true radial drainage slots; the thin bowed fan back remains open at oblique views. Arm tips terminate inside the skirt without exposed folded caps. All detail remains one material and one mesh below 2000 triangles. Residual limits: simplified rear legs, sparse arm wear and single-reference underside details. Hidden-region confidence: 0.6.
- **Police Traffic Barrier:** Rounded frame tubes, hinge pins and actual hex sign bolts pair with the plate's worn printed face, restoring emblem, Thai text and edge paint damage. The occluding left tube was excluded from the sampled art, so the hidden leftmost stripe layout is approximate. Reverse print and tube pitting remain inferred. Hidden-region confidence: 0.6.

**Runtime contract**

Built and declared destruction groups agree: **none on all twenty assets**. The following named pivots and sockets are retained; a root pivot represents rigid-body placement. Static props have no moving-part pivots. The compound column counts the existing `colliders.json` physics shapes; authored factory proxies are listed separately in the JSON snapshot.

| Asset | Pivots (count; names) | Sockets (count; names) | Retained compound parts |
|---|---|---|---:|
| Soi Lamp on Utility Pole | 1; root | 0; none | 8 |
| Honda Wave | 4; honda-wave, steering, wheel-front, wheel-rear | 0; none | 8 |
| Isuzu D-Max | 6; isuzu-d-max, tailgate, wheel-front-l, wheel-front-r, wheel-rear-l, wheel-rear-r | 1; tailgate-mount | 8 |
| Songthaew | 5; songthaew, wheel-front-r, wheel-front-l, wheel-rear-r, wheel-rear-l | 0; none | 8 |
| Chain-Link Fence Panel | 1; root | 0; none | 3 |
| Zinc Sheet Hoarding Panel | 1; root | 0; none | 5 |
| Overpass Stair Flight, Roofed Steel | 1; root | 0; none | 8 |
| Overpass Walkway Span, Roofed | 1; root | 0; none | 3 |
| Toyota Fortuner | 5; toyota-fortuner, wheel-front-r, wheel-front-l, wheel-rear-r, wheel-rear-l | 0; none | 8 |
| Toyota Commuter Van | 5; toyota-commuter-van, wheel-front-l, wheel-front-r, wheel-rear-l, wheel-rear-r | 0; none | 8 |
| 7-Eleven Store Building | 3; root, door-slide-l, door-slide-r | 1; sign-mount | 6 |
| Bangkok Apartment Block | 1; root | 0; none | 8 |
| Bangkok Hospital Clinic Building | 1; root | 0; none | 8 |
| Big C Store Building | 1; root | 0; none | 8 |
| Chinese Shrine | 1; root | 0; none | 46 |
| Concrete Walk-Up Flat Block | 1; root | 0; none | 5 |
| Fire Escape Ladder Segment | 1; root | 0; none | 4 |
| Low-Rise Condominium | 1; root | 0; none | 7 |
| Monobloc Plastic Armchair | 1; root | 0; none | 4 |
| Police Traffic Barrier | 1; root | 0; none | 4 |

**Review state and automated checks**

Pass history and correction counts were preserved. The pass list below contains only the latest `continue` verdict for each pass. `B/S/F/M/U/L/I` means blockout, structural, form, material, legacy surface, lighting and interaction. Optimization remains open. Existing authorized count overrides remain enabled only on the saved vehicle runs; no budgets or correction limits were raised for this task. Zinc reached its saved optimization correction ceiling after reaching the requested score.

| Asset | Accepted passes | Current-pass corrections / limit | Total / limit | Failed checks |
|---|---|---:|---:|---|
| Soi Lamp on Utility Pole | B, S, M, U, L, I | 2 / 30 | 3 / 30 | intersection, tier1, pass-check |
| Honda Wave | none | 86 / 105 | 87 / 105 (saved override) | strict, intersection, tier1, pass-check |
| Isuzu D-Max | none | 50 / 68 | 51 / 68 (saved override) | coplanar, turntable, intersection, tier1, pass-check |
| Songthaew | none | 59 / 77 | 60 / 77 (saved override) | turntable, intersection, tier1, pass-check |
| Chain-Link Fence Panel | B, S, F, M, U, L, I | 2 / 3 | 5 / 10 | turntable, intersection, tier1, multi-angle |
| Zinc Sheet Hoarding Panel | B, S, F, M, U, L, I | 3 / 3 | 8 / 10 | turntable, intersection, tier1, multi-angle |
| Overpass Stair Flight, Roofed Steel | B, U, L, I | 1 / 3 | 6 / 10 | turntable, intersection, tier1, pass-check |
| Overpass Walkway Span, Roofed | B, U, L, I | 1 / 3 | 6 / 10 | turntable, intersection, tier1, pass-check |
| Toyota Fortuner | none | 41 / 20 | 41 / 20 (saved override) | turntable, intersection, tier1, pass-check |
| Toyota Commuter Van | none | 45 / 20 | 45 / 20 (saved override) | coplanar, turntable, intersection, tier1, pass-check |
| 7-Eleven Store Building | B, S, F, M, U, L, I | 2 / 3 | 2 / 10 | intersection, tier1 |
| Bangkok Apartment Block | B, S, F, M, U, L, I | 2 / 3 | 2 / 10 | intersection, tier1 |
| Bangkok Hospital Clinic Building | B, S, F, M, U, L, I | 2 / 3 | 2 / 10 | intersection, tier1 |
| Big C Store Building | B, S, F, M, U, L, I | 2 / 3 | 2 / 10 | intersection, tier1 |
| Chinese Shrine | B, S, F, M, U, L, I | 2 / 3 | 7 / 10 | intersection, tier1 |
| Concrete Walk-Up Flat Block | B, S, F, M, U, L, I | 2 / 3 | 2 / 10 | turntable, intersection, tier1 |
| Fire Escape Ladder Segment | B, S, F, M, U, L, I | 2 / 3 | 5 / 10 | intersection, tier1 |
| Low-Rise Condominium | B, S, F, M, U, L, I | 2 / 3 | 2 / 10 | intersection, tier1 |
| Monobloc Plastic Armchair | B, S, F, M, U, L, I | 2 / 3 | 8 / 10 | intersection, tier1 |
| Police Traffic Barrier | B, S, F, M, U, L, I | 1 / 3 | 4 / 10 | turntable, intersection, tier1 |

All twenty build, render and promotion checks completed within the four cost ceilings. Part coverage and attachment-anchor checks pass for all twenty. The full turntable, coplanar, strict-spec, intersection, image-comparison and multi-angle results are retained under each asset’s `scratch/<id>/quality-upgrade-20260925/` directory. Open or edge-on geometry and different photo cameras can affect image gates; those failed results have not been suppressed.

The registry review reader now reopens a pass after a later correction request and reports the current pass’s count instead of summing all pass counts. Two regression tests pass. The local img2threejs workflow also preserves explicit saved count overrides and uses the latest pass/Tier-1 evidence; its workflow and pass-identifier suites passed 32 tests. Backups of the two modified local skill files are in `scratch/quality-upgrade-20/`.

Installed-pack browser verification: 20/20 bundles rendered successfully; 20/20 hero images are pixel-identical to the reviewed scratch renders. The installed render stats also retain the budget measurements.

`git diff --check` passed. No models were reset, no reference images were regenerated, and no commits or remote publication were made.
