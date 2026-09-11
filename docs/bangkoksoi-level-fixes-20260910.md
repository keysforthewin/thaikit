# BangkokSoi level fixes — 10 September 2026

Target: `/Game/Maps/BangkokSoi` in the live ThePurge Unreal project.

## Changes

| Request | Work performed |
| --- | --- |
| Softer storefront lighting | Retuned 26 fascia and 26 entrance lights. Fascia floods moved farther from their targets, widened to 80°, and reduced to 85 cd (120 cd at 7-Eleven). Increased source softness and reduced specular contribution. Broadened and softened the other local lights while keeping the warm/cool palette. |
| Every ThaiKit asset | Compared the 180 imported static meshes with placed meshes. Added the 28 missing types as working street, bridge, highway, and court placements. |
| Kit ground throughout | Removed `far_ground`, the 900 × 900 m primitive slab. Added 347 fitted kit tile pieces around existing tiles, including ground beneath the scenery. Ground extent is now 320 × 320 m; the core uses smaller pieces, with larger grass tiles under distant scenery. No importer-generated ground has been added. |
| Replace primitive overpasses | Removed the old pedestrian bridge and the primitive expressway/extension. Built three pedestrian crossings, a roof catwalk, and a modular expressway from the kit. Shortened the distant highway extension and joined it with the supplied curve and ramp pieces. |
| Clear running routes | Moved the roadworks together into an eastern service bay, aligned parked vehicles with the street, and moved blocking furniture, bins, planters, and bikes into adjoining areas. Cleared vegetation from stair flights. |
| Vertical routes | Added stairs, switchback and top landings, a catwalk/ramp, a bank roof connection, a ladder to the clinic roof, and a taller ladder stack at the walk-up block. Ladder labels use the existing `ladder_*` runtime convention. |
| Slightly tighter boundary | Brought the fence inward by approximately 2 m per side: its nominal 148 × 148 m footprint becomes 144 × 144 m, about 5.3% less area. Street/building scale is preserved. |

## Defects found during validation

- The covered stair's roof pitched against the stair rise. Corrected the pitch in the imported mesh and source factory. The Unreal mesh also received 40 cm more canopy clearance, including extended supports, so a walking character with a 45 cm step limit can ascend beneath it.
- The ground-entry plinth's guard panels left only approximately 19 cm between them. Widened the opening to approximately 1.31 m in Unreal and the source factory; a source-geometry ray check measured 1.32 m.
- New stairs use complex collision matching their actual treads, rather than the imported eight-step approximation. Roof and ground collision were also checked against actual surfaces.
- Removed player collision from the sky backdrop and skyline actors.
- Fixed the catwalk seam, connected the bank landing to the actual roof surface, and moved a ladder out of that landing's walking line. Routed the roof descent around the building's existing rooftop equipment.

## Validation and limits

Final audit: **180/180 kit asset types**, 2,074 actors, nine tagged ladder segments, and no engine primitives in the ground/structure folders. All 939 ground-route capsule samples are clear; 729 vertical-route samples have no unexpected obstruction. The ground coverage grid has no gaps. All four play-mode routes passed, including a final complete run from the rear stair entrance through the catwalk and ramp to the bank roof. Temporary test characters were removed and the map reports no unsaved changes.

The final lighting inventory is 332 lights, 304 with shadows enabled. This pass improves placement, softness, and surface coverage; it does not claim a measured bake-time or frame-rate improvement.

The evidence folder is `scratch/level-fixes-20260910/`. It contains the original actor dump, catalogue snapshot, editor scripts, collision probes, and play-mode movement logs. The scripts are a record of the individual passes; several are incremental and must not be blindly rerun as a batch.

Static checks sample the main road, both pavements, rear street, and soi using an 84 cm diameter capsule. Additional probes check stair treads, spans, ramp surfaces, and joints. Play-mode tests use Unreal CharacterMovement with an 84 cm diameter / 192 cm tall capsule and a 45 cm step limit, exercising the main road, western bridge/switchback, rear bridge, and stair-to-roof route.

Both edited source factories bundle successfully. Geometry checks verify the corrected roof pitch and usable entry opening. The Unreal map has been reviewed from street and bridge viewpoints with the softened lighting.

This work changes the **Unreal map**, not an existing baked Operation X GLB. No new export or production lightmap bake was run. A subsequent game build must preserve the corrected collision and geometry; Unreal's complex-collision setting itself is not represented by the kit manifest's old collider approximations. Ladder placement/tagging is ready for the existing game controller, but custom ladder-climbing gameplay was not exercised by the native Unreal walking test. The elevator is the kit's exterior shell; stair routes provide access.

## Recovery

The pre-edit map is saved at `C:/tk/BangkokSoi_before_fixes_20260910.umap`. Mesh recovery copies are under `C:/tk/backup_fixes_20260910/`. The original actor/mesh dump is `scratch/level-fixes-20260910/before.json`.

The two source corrections are in:

- `packages/props/src/models/pedestrian-bridge-roofed-stair-flight/createObjectModel.ts`
- `packages/props/src/models/pedestrian-bridge-ground-entry-plinth/createObjectModel.ts`

## Follow-up: preview lettering and useful bridge route

The ground lettering was Unreal's unbuilt-lighting preview shadow indicator. The project disables static lighting (`r.AllowStaticLighting=False`), while 317 lights were Static and 14 Stationary. Converted those 331 lights to Movable for the project's dynamic lighting setup. The actual ground materials now render without Preview lettering in editor and play-mode views; no texture replacement or overlay-hiding setting was needed. Including five added soft route lights, the current inventory is 337 Movable lights (309 shadowed).

Connected the western pedestrian bridge to the clinic roof using kit spans, a three-way landing, guarded roof landing and stairs. Added a stair crossing over the clinic/bank parapet and realigned the bank stairs around rooftop equipment. The route now links the south-side bridge entrance → main-street crossing → clinic roof → bank roof → rear catwalk → ground entrance near the soi. Existing north switchback access remains available. Kit columns sit clear of the pavement corridor. The clinic ladder was moved away from the stair crossing.

The full ground-to-ground route passed native Unreal CharacterMovement testing without jumps. Separate reverse-direction tests passed the clinic/bridge connection and the revised bank stair junction. Final checks: 939 clear ground-route capsule samples; 906 vertical samples with only expected overlapping kit landing/seam floors and no obstruction hits; 180/180 kit types; no ground coverage gaps or ground/structure engine primitives. Current actor count: 2,095. Temporary test characters were removed and the map saved. No new GLB export or game bake was performed.

Follow-up evidence: `scratch/bridge-preview-fix-20260910/`. Scripts are incremental audit records, not a batch to rerun. Recovery map: `C:/tk/BangkokSoi_before_bridge_preview_fix.umap`. The earlier validation counts and bank stair waypoints above describe the preceding pass and are superseded by this section.

## Follow-up: single storefront washes and alley fill

Replaced the 26 fascia and 26 entrance spotlights with 13 centered Rect lights, one per frontage. Replaced PTT's two panel spots with a single wash as well, and removed the two MK lantern point lights that were still creating paired spots on its sign. Fourteen frontages now each have one dedicated wash: 6 m source width (7 m at PTT), 1.8 m source height, 240 cd (300 cd at 7-Eleven), reduced specular contribution, and a greater wall setback. Authored warm/cool temperature differences remain.

Added 18 broad, soft Rect lights to the north/south rear shop lanes, walk-up rear access, and residential front/rear approaches. Lowered the north-lane sources beneath the catwalk after a viewport check showed that the deck was blocking their light. Added non-colliding kit wall-pack fixtures. Reviewed both storefront rows and rear areas at player height, including a play-mode storefront check followed by a final editor review of the MK/PTT refinements. Current inventory: 310 lights, 282 shadowed, all Movable. No level geometry or traversal paths changed.

Saved in Unreal; no GLB rebake. Evidence and incremental scripts: `scratch/light-quality-pass-20260910/`. Recovery: `C:/tk/BangkokSoi_before_light_quality_pass.umap`.

## Follow-up: walkway and overpass geometry quality

The southern approach to the rear soi bridge crowded the roof-access stair entrance. Replaced that straight lower approach with a kit switchback: lower flight and entrance moved west, a proper turning landing added, and a separate ground approach retained on the rear-road side. Upper flight, landing and span align with the new return flight. Both crossings remain usable independently.

Broadened inspection from center lines to three walking-width tracks, including endpoints and landings. Closed two narrow span seams with kit tile joints. Moved the clinic roof stairs sideways and widened their landing to clear rooftop equipment that detailed triangle traces detected, despite earlier simplified-collision walking tests passing. Cleared four tree canopies, a banana clump, refuse bins, fence sections and a lamp pole from bridge structures/approaches. Shifted the pole's matching light with it. Checked relocated bins for overlap with nearby props.

On the elevated road, matched the abutment to the ramp's 16.4 m end elevation, widened the kit sign gantry so its supports clear the travel lanes, and moved two distant tree canopies off the ramp.

Validation: all three pedestrian crossings passed round-trip native CharacterMovement tests; the complete bridge → clinic → bank → rear catwalk route passed in both directions. Elevated-road movement passed the straight deck modules, gantry, both curves and ramp-to-abutment join. The long highway test reached the terminal abutment wall; a separate endpoint test verified the usable landing before that wall. The wall remains the road terminus outside the playable block.

Detailed geometry checks cover 2,319 pedestrian samples. The only remaining hits are intended rail edges beside the two switchback mouths; the usable turns pass movement tests in both directions. All 644 elevated-road lane samples and all 939 ground-route samples are clear. No missing sampled walking floors; all 180 kit types remain present; ground coverage has no gaps. Final inventory: 2,008 actors, 310 lights, 282 shadowed. Temporary test characters removed, map saved clean, original user camera restored. No GLB export/rebake performed.

Evidence: `scratch/walkway-quality-pass-20260910/`. Recovery: `C:/tk/BangkokSoi_before_walkway_quality_pass.umap`. Scripts are incremental pass records, not a batch to rerun. Previous route waypoints and validation counts above are historical and superseded here.

## Follow-up: pole self-lighting and mosque illumination

Repositioned 98 pole light sources using the actual kit lamp geometry. Many added soi lights were on the shaft, concrete-column lights were above their housings, and the solar light position followed the photovoltaic panel rather than the LED head. Sources now sit beneath their lamp heads, with smaller physical source radii, soft shadow radii and outward/downward beams that avoid the upper shafts. Reduced specular contribution and capped excessive intensities while retaining the warm/cool palette.

Rotated three pole/light pairs to aim away from the mosque wall or obstructing foliage. All 98 central beam traces now clear their own poles, with no first-hit obstruction within 2.5 m. Reviewed the mosque and main street in play mode: bright white patches at the tops of the poles are removed, with light directed onto the surrounding surfaces.

Replaced the mosque's two low uplights with eight broad, soft lights: facade and west-side washes, plus six entrance/side/rear access lights with non-colliding kit wall-pack fixtures. The mosque architecture, entrance and surrounding paths are now visible without the previous isolated wall hotspot. Current total: 316 lights. Saved in Unreal; no GLB rebake. Evidence: `scratch/pole-mosque-lighting-20260910/`; recovery: `C:/tk/BangkokSoi_before_pole_mosque_lighting.umap`.

## Follow-up: ConcreteWalkUpFlatBlock residential lighting

Added a warm, occupied residential feel with cyan/pink LED accents. Three broad neutral facade washes reveal the front architecture, 18 warm corridor lights illuminate all six levels, and six low-power colored washes accent the roof edge. Forty-seven kit batten fixtures provide the visible lighting: 23 around the roof perimeter, 18 corridor fixtures, and six short vertical accents on the stair towers. Three dedicated emissive materials override only these instances' tube slots; other kit instances are unaffected. Fixtures have no player collision or cast shadows, and the east roof-ladder exit is left clear.

Placement follows the model's actual recessed corridors and 16.7 m parapets, rather than treating its 17.5 m roof ridge as the whole perimeter. Reviewed the front at street level and in play mode from the user's original elevated camera. Final fixture/light counts: 47 / 27. Saved in Unreal; no GLB rebake. Evidence: `scratch/walkup-lighting-20260910/`. Recovery: `C:/tk/BangkokSoi_before_walkup_lights.umap`.

### Temple lighting follow-up
Added four warm 3800 K movable point lights inside RecliningBuddhaHall, distributed along the statue at 4.6 m height. After viewport review, moved the lights forward and down and reduced them to 130 cd for better illumination of the statue's face and body. Source radius 35 cm, soft radius 70 cm, specular scale 0.06.
Added eight broad movable Rect lights to Ubosot: entrance, rear, two per long side, and front/rear gable washes. Warm-neutral 4000 K, 200–400 cd, broad 9–10 m sources. No fixture meshes added. Reviewed hall and temple exterior viewport angles; saved BangkokSoi. Recovery map: C:/tk/BangkokSoi_before_temple_lighting.umap. Scripts and settings: scratch/temple-lighting-20260910/.
