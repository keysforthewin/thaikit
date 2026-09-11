# Overpass and Toyota export repairs — 11 September 2026

The subsequent [GLB material audit](glb-material-audit-20260911.md) removed the
van's remaining browser-only cabin effect. Its current windows use static tint
in both the browser and GLB.

The two roofed overpasses and Toyota Commuter Van were rebuilt/refined, promoted into the kit, exported as GLB, and checked in the live Unreal project. The existing Static Mesh assets retain their paths, so the placed actors use the repairs. Only affected asset packages were saved; the user's level was not saved wholesale. Original mesh backups are under `/Game/ThaiKit/RepairBackups20260911`. Final imported materials and textures are under `/Game/ThaiKit/RepairedMaterials`.

The span now has four connected portal frames, supported deck edges, continuous rails, correctly sloped roof sheets and a ridge cap. The stair has connected stringers, 15 closed risers, a level upper landing, continuous handrails and a supported corrugated roof. The overpasses use physical roof corrugations and standard canvas material maps.

The van's paint and steel weathering previously depended on browser shader modifications. They now use four embedded 1024 × 512 PNG albedo/roughness maps with explicit UV charts. The colored livery remains in vertex colors. Tinted glazing exports; the simulated parallax cabin remains browser-only.

Two Unreal import issues were reproduced and corrected. The exporter now names glTF **mesh definitions**, as well as nodes, so Interchange recognizes UCX collision geometry. Unreal's material-instance preset dropped vertex colors in this project; generated **Materials** preserve the multiply. The export instructions now specify that mode. Fresh imports were verified, and their geometry, UVs and material slots were applied to the existing assets.

## Measured budgets

These are factory/browser costs, measured against each asset's resolved ceilings. GLB merges the visible geometry to three, three and four material sections respectively.

| Asset | Triangles | Draw calls | Materials | Geometries | Textures |
|---|---:|---:|---:|---:|---:|
| Roofed span | 3,548 / 16,000 | 4 / 12 | 3 / 8 | 4 / 16 | 3 |
| Roofed stair | 2,936 / 8,000 | 5 / 6 | 3 / 4 | 5 / 8 | 3 |
| Toyota van | 7,964 / 8,000 | 12 / 12 | 4 / 4 | 12 / 12 | 4 |

Unreal's saved originals contain exactly 3,548, 2,936 and 7,964 visible triangles, **zero rendered UCX triangles**, and 3, 8 and 8 convex collision parts. Nanite is disabled. GLB inspection confirms that all embedded textures have power-of-two dimensions. Estimated texture memory is 4 MB per overpass and 10.7 MB for the van.

## Review and runtime

The img2threejs review estimate is **0.85** for each asset. For the overpasses, silhouette / structure / detail / material / lighting scores are **0.88 / 0.88 / 0.85 / 0.81 / 0.85**. Structure carries the result; wear placement and fasteners are simplified against the reference photograph. The van retains **0.85 / 0.86 / 0.85 / 0.85 / 0.85**, without claiming improved likeness from an export repair. No reviewed feature falls below its recorded threshold.

All eight existing pass stages have `continue` records, including the new final optimization review. The completed overpass states each record **5 / 10** total corrections. The van records **24 total**, including two export corrections in this repair; its inherited 1,000,000 ceiling was left unchanged. No new generation services were used: **additional generation cost $0**.

Each overpass has one `root` pivot. The static parked van has one `root-pivot`. All three have **zero sockets and zero destruction groups**, matching their declarations. Hidden overpass underside construction is inferred with confidence 0.65. The van's unobserved cabin layout remains low confidence (0.35); it is not reconstructed interior geometry.

Strict spec validation, headless construction, coplanar checks, component coverage and four-view turntables passed. Axial views and reference comparisons were inspected. The self-intersection sampler still finds deliberate solid overlaps at welded beam/rail joints and the ridge cap; these are documented attachments, not a claim of an intersection-free Boolean union. The roof sheets themselves are closed and do not fold through their supports.

The production client build and the GLB mesh-name and Toyota windscreen regression tests passed. The build retains its bundle-size warning.

## Collision scope

The overpasses retain their floor/rail collision approximations. Coverage is 0.9983 for the span and 1.0 for the stair. Their roofs are not walkable collision surfaces: top-down height errors remain large (span p95 3.6285 m, max 3.6451 m; stair p95 2.7509 m, max 2.8117 m). These numbers must not be presented as accurate full-shell collision.

The van has eight box parts. Its main body half-width increased from 0.8765 to 0.925 m and half-length from 2.5878 to 2.63 m, covering the missing silhouette rim without adding parts. Measured coverage improved from 0.9400 to **0.9802**; p95 height error is **0.8334 m**, max **1.5609 m**, footprint overshoot **0.0094**, volume ratio **1.123**. Five of six detected ledges are preserved; a 0.25 m² ledge at y=1.15 m remains unmatched. This is still a coarse vehicle proxy, especially around the sloping nose, not precise standable bodywork. Physics remains static.

## Files and review

Updated GLBs are in `exports/unreal/ThaiKit/`, with refreshed manifest entries and import instructions. Saved Unreal and GLB verification data is in `scratch/repairs-20260911/`. Reference comparisons are in each overpass's `scratch/<id>/repair-comparison.png`.

Orbit the shipped models and inspect their runtime, costs and quality records at [the asset editor](http://localhost:3733).
