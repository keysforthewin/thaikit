# Vehicle iteration checkpoint — 12 September 2026

Historical checkpoint (subsequently superseded by the active above-90 goal and the focused Songthaew-88 request). See [Songthaew 88 checkpoint](songthaew-88-checkpoint.md) for the latest Songthaew result.

The then-requested visual target, **85 or higher for every vehicle**, is met. Work proceeded one by one from Songthaew, then Fortuner, Tuk-Tuk, Honda Wave and Hilux. D-Max, Commuter Van, sidecar motorcycle and walking tractor already met the target. All nine catalogue scores are numeric and at least 85.

These are whole-asset visual estimates saved on promoted previews. They are not deterministic acceptance scores. All seven model runs retain active, resumable state, disabled correction stops and full review history; no build passes are accepted. No background iteration remains running.

## Installed scores

| Vehicle | Score |
|---|---:|
| Honda Wave | 85 |
| Iron Buffalo Walking Tractor | 93 |
| Isuzu D-Max | 85 |
| Sidecar Motorcycle | 92 |
| Songthaew | 85 |
| Toyota Commuter Van | 89 |
| Toyota Fortuner | 85 |
| Toyota Hilux | 85 |
| Tuk-tuk | 85 |

## Measured budgets

Each cell is measured / recorded ceiling. Triangle ceilings were raised where needed for visible geometry; other scene axes were retained.

| Model / iteration | Triangles | Draw calls | Materials | Geometries |
|---|---:|---:|---:|---:|
| Songthaew / 42 | 13788 / 14000 | 6 / 6 | 6 / 6 | 6 / 6 |
| Toyota Fortuner / 40 | 13654 / 14000 | 6 / 6 | 4 / 4 | 6 / 6 |
| Tuk-tuk / 45 | 7988 / 8000 | 6 / 6 | 4 / 4 | 6 / 8 |
| Honda Wave / 42 | 11972 / 12000 | 8 / 8 | 3 / 4 | 6 / 8 |
| Toyota Hilux / 39 | 13976 / 14000 | 6 / 6 | 4 / 4 | 6 / 8 |
| Isuzu D-Max / 33 | 11968 / 12000 | 6 / 6 | 4 / 4 | 6 / 8 |
| Toyota Commuter Van / 43 | 11988 / 12000 | 8 / 12 | 4 / 4 | 8 / 12 |

## Final changes and remaining defects

- Songthaew 42: rounded entrance rails and boarding step, rear canopy support, wheel/tread/lug detail, cab shoulders, mirrors, lamp/seat maps, bench legs and mudflaps. Minor windshield/roof seams remain; shape, turntable and intersection checks fail.
- Fortuner 40: longer cabin, rounded nose/rear glass/mirrors, readable alloy spokes, continuous dirt and rear reflectors. Shape, turntable and attachment checks pass; standard intersection fails and geometric-normal diagnostics flag 25 reflector contact samples.
- Tuk-Tuk 45: corrected headlamp and handlebar, six-vent wheels, instrument pod and controls, grille, darker vinyl/floor and standard lens/rim maps. Shape, turntable and intersection checks fail; control contacts remain.
- Honda Wave 42: real fork apertures and rack slots, corrected shield tips, livery, controls, cable, reflectors, engine covers, hub fasteners and revised paint/metal/saddle finish. Turntable, attachment, multi-angle and interior checks pass; shape and intersection fail. Lower-body contour, saddle fullness and hidden mechanics remain approximate.
- Hilux 39: rounded cab/nose/flares, tire shoulders and tread, steel wheel maps, own-reference paint wear, cargo housings, continuous seats, lamps, mudflaps and wider rounded textured steps. Shape, turntable and intersection checks fail; geometric-normal diagnostic flags 231 body/interior/trim samples. Roof highlights, bed weathering and rear bumper remain approximate.
- D-Max 33: portable cabin/tire/steel maps, plate-derived door mud, rounded roof/arches and wheel detail. Shape, turntable, attachment and geometric-normal checks pass; standard smooth-normal intersection fails.
- Commuter Van 43: pressed steel wheels, tire maps, seats/cowl, lamp chambers, seals, dividers/latches, lower-body crown and repaired nose skin separation. Shape, turntable, attachment and geometric-normal checks pass; standard smooth-normal intersection fails.

Geometric-normal diagnostics are supplemental and do not establish that all intersections are absent. Hidden sides and interiors have lower confidence than plate-visible features. Prior failed and over-budget candidates remain archived. Hilux iteration 31 clean-gate wording was premature and was corrected in iteration 32.

## Review layers and correction history

Layer values are silhouette/proportion, component structure, form/detail, material/surface and lighting/camera, respectively. They describe different aspects of the review; the whole-asset score is not their arithmetic mean. Vehicle-motion remains 70 with visibility false: screenshots do not validate articulation.

| Model | Layer scores / 100 | Recorded corrections | Accepted passes |
|---|---|---:|---:|
| Songthaew | 83 / 86 / 83 / 79 / 68 | 42 | 0 / 7 |
| Toyota Fortuner | 84 / 86 / 85 / 80 / 68 | 40 | 0 / 7 |
| Tuk-tuk | 83 / 85 / 84 / 82 / 71 | 45 | 0 / 7 |
| Honda Wave | 80 / 86 / 86 / 79 / 68 | 42 | 0 / 8 |
| Toyota Hilux | 82 / 85 / 85 / 81 / 68 | 39 | 0 / 7 |
| Isuzu D-Max | 85 / 87 / 83 / 76 / 72 | 33 | 0 / 7 |
| Toyota Commuter Van | 89 / 90 / 88 / 82 / 72 | 43 | 0 / 7 |

## Runtime and portability

All seven previews lack usable collision compounds and have no destruction groups. Physics and live Unreal import/bake were not validated. All seven factories use standard PBR materials, without custom shader callbacks; authored UV0 survives export, including expanded instances.

| Model | Named pivots | Sockets |
|---|---|---|
| Songthaew | songthaew, wheel-front-r, wheel-front-l, wheel-rear-r, wheel-rear-l | None |
| Toyota Fortuner | toyota-fortuner, wheel-front-r, wheel-front-l, wheel-rear-r, wheel-rear-l | None |
| Tuk-tuk | tuk-tuk, wheel-front, wheel-rear-l, wheel-rear-r | None |
| Honda Wave | honda-wave, steering, wheel-front, wheel-rear | None |
| Toyota Hilux | toyota-hilux, wheel-front-r, wheel-front-l, wheel-rear-r, wheel-rear-l, tailgate-hinge | tailgate-mount |
| Isuzu D-Max | isuzu-d-max, tailgate, wheel-front-l, wheel-front-r, wheel-rear-l, wheel-rear-r | tailgate-mount |
| Toyota Commuter Van | toyota-commuter-van, wheel-front-l, wheel-front-r, wheel-rear-l, wheel-rear-r | None |

Factory construction remains slow on several vehicles: Songthaew roughly 9–10 seconds, Hilux 6–7.3 seconds, Fortuner 3.5–5 seconds, van and D-Max 3–4 seconds. Texture/geometry synthesis still needs optimization.

## Verification

- Live catalogue: nine numeric vehicle scores at least 85; vehicle filter `maxScore=84` returns no items.
- Both catalogue and asset APIs include unscored models in `maxScore=0`. Missing scores remain absent in storage; filtering treats them as zero.
- Review-retention and actual-factory UV export regression suite passed 14/14. Subsequent targeted checks cover the final Fortuner 40, Tuk-Tuk 45, Honda 42 and Hilux 39 factories. Failed reviews retain numeric scores and do not become accepted merely by reaching the visual threshold.
- Every installed preview fits all four recorded scene budgets.

No new image or Meshy generation was submitted. Existing plates and proxy meshes were retained; added metered generation cost was **$0**.
