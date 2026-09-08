# BangkokSoi lighting revision — 2026-09-07

The lighting is authored in `/Game/Maps/BangkokSoi` for a Blender Cycles bake
and Three.js playback. The previous map is saved at
`/Game/Maps/Backups/BangkokSoi_PreLighting_20260907`.

The audit, original light values, placed-fixture survey, Unreal scripts and
render comparisons are in `scratch/lighting-20260907/`. That directory also
holds copies of the pre-change GLB and actor/sky sidecars.

## Authored lighting

- Street lights: 2700–3000 K warm white; LED poles 4500 K. Cobra heads face
  into the road, with light origins below their lenses.
- Storefronts: separate fascia washes and two wall-mounted entrance lights
  per frontage. Convenience stores/clinic 5000 K, ordinary retail 4000 K,
  cafés/restaurants 3200 K. Fascia cones reduced from 80 to 62 degree half-angle.
- Footbridge: three ceiling battens underneath, three above the walkway, and
  three bulkheads along each stair flight.
- Market: light origins moved below the fluorescent reflector housings.
- Expressway: reduced court/canopy hotspots, warm-white soffit lights, added
  physical bulkhead fittings where sources had no fixture.
- Source-less haze fills and vehicle head/tail lights are archived, hidden,
  and disabled for export; their illumination must not be baked in place.
- Moon: 1 lux in Unreal, 0.3 runtime intensity via the sky sidecar. Panorama
  intensity 0.16. Exposure in the game remains 1.

The colour-temperature palette is stored as explicit RGB light colours because
this Unreal glTF exporter omits temperature. Use named `r/g/b/a` arguments for
`unreal.Color`; positional arguments are in a different order in this editor.

All active local lights use inverse-square falloff and occluding shadows in
the Unreal preview. Cycles supplies their static illumination and bounce.
Only point, spot, and directional sources are exported; no Rect Light,
Lumen, fog, or Unreal post-process dependency is used for the bake.

## Runtime shadows

Four street spotlights are nominated with `runtimeShadow: true` in
`unreal/actors.json`: SpotLight_14, SpotLight_18, SpotLight_22, SpotLight_23.
The importer accepts Unreal's `LightNode_` prefix. The live-light selector
keeps these inside the 20-lamp cap, and the runtime includes static cell
occluders in their shadow cameras. The Purge's graphics tiers can further
limit the number of local shadow maps.

The Purge's default Low preset previously set `shadowSpotlights: 0`, so loading
the high GLB did not enable lamp self-shadows. It now keeps two local shadows
on Low and Medium, four on High. `lampShadows.ts` chooses a nearby subset from
the live spotlights as the player moves, with selection hysteresis to avoid
recreating maps on small boundary movements. Static self-shadowing remains in
the bake; live lamp shadows shade moving objects, while the moon can project
moving shadows onto baked surfaces.

## Bake and review

Convert with the level's settings and the revised unit calibration:

```sh
docker compose run --rm web node scripts/level/import-unreal-level.mjs --level bangkoksoi --settings levels/bangkoksoi/settings.json --ground=-0.12,#2b2b29 --light-scale 0.25 --emissive-scale 0.125
docker compose run --rm web node scripts/level/bake-level.mjs --level bangkoksoi --quality medium --lightmap-size 8192 --samples 4096 --noise-threshold 0 --live-lamps 20
docker compose run --rm web node scripts/level/bake-level.mjs --level bangkoksoi --quality high --samples 4096 --noise-threshold 0 --live-lamps 20
```

Use `verify-level.mjs` and `smoke-level.mjs` with the same tier.
`scratch/lighting-20260907/review.mjs` produces street-level comparisons using
both neutral runtime settings and The Purge's current lighting defaults:
lightmap 0.65, lamps 0.65, moon 0.8, IBL 2.4, road roughness 0.58,
exposure 1. These are separate from the authoring/export unit conversions.
The earlier baseline (0.2031 / 0.8409 / 1.25 / 0.84) left shaded areas too
dark and lit moving objects differently from static geometry. The Purge's
settings now migrate that exact old baseline; custom saved tunes survive.
Its existing runtime 0.2.2 also receives the local-shadow camera layer fix
at the game integration point, without changing package dependencies.

The level now requests an 8192-pixel atlas, 4096 samples and adaptive sampling
off. Do not reduce this on the strength of atlas resolution alone. A measured
road patch against a 16,384-sample reference showed relative RGB absolute error
of 43.4% at 128 samples, 7.7% at 1152, and 2.5% at 4096. The 128-sample bake
below passed file validation but FAILED visual acceptance: its stochastic
lamp-light noise appeared as black blotches once magnified across the level.

Unreal static light intensity must be changed with `set_editor_property`,
not the runtime `set_intensity` method: the latter left static brightness
unchanged in this editor. Always compare exported candela values as well as
the viewport.

## Previous delivery — rejected for blotchy lamp lighting

- Saved Unreal map: `/Game/Maps/BangkokSoi`.
- Game files: `/home/mulligan/code/Operation-X/GLB/bangkoksoi_high.glb`
  (102,777,200 bytes) and `bangkoksoi_medium.glb` (87,426,404 bytes).
  These identify the rejected files, not the corrected replacement.
- Previous game files are preserved in `scratch/lighting-20260907/previous-game-*.glb`.
- 236 local sources baked with Cycles; 20 remain live for moving objects,
  including four nominated shadow casters. The moon is the 21st live light.
- 1701 placements: 967 kit meshes and 464 Unreal-side meshes, plus 270 ground
  tiles. 270 static cells, 23 dynamic objects, 29 spawn points.
- Across all cells, each LOD has 2077 draw calls; triangle totals are
  3,119,739 / 1,100,029 / 368,455. Actual visible counts depend on the camera.
- High lightmap: 8192², 62% occupied, median 7.1 texels/metre, range 16;
  0.30% of covered texels clipped. Player-height review covers storefronts,
  footbridge, backstreet and market, with no browser page errors.
- Both tiers: verify `"ok":true`; smoke `"ok":true`. Verification reports
  13 cells above the default draw-call budget; high also reports the 8192 atlas
  ceiling. These are warnings, not failed checks. Smoke logs one generic HTTP
  404 console message, but no runtime validation failure.
- 15 focused importer/runtime tests and 17 game settings tests pass.
  The Purge production build passes with its large-chunk advisory.
- This bake uses punctual lights and mesh/material content. Unreal-only fog,
  Lumen, post-process and Niagara are not part of the delivered appearance.

Rendered comparisons, validation logs and copy checksums are in
`scratch/lighting-20260907/`. The final screenshots are `high-*-purge.png`.
Those screenshots document the rejected version, not a clean reference.

## Correction diagnosis and validation

`scratch/lighting-diagnosis/` contains isolated moon/RGB/runtime-shadow renders,
a three-dimensional self-shadow probe, and sample-convergence bakes. The blotches
persist with the moon and runtime shadows disabled, and removing bump inputs
does not resolve them. Raising Cycles samples resolves the measured noise.
A separate two-island Blender test also confirmed destructive per-batch
padding: the old 16-pixel dilation overwrote neighboring surfaces packed only
two pixels apart. This affected both lighting RGB and moon visibility alpha.
The baker now uses zero per-batch margin and one global, coverage-aware pixel
of padding after both passes. Temporary coverage alpha includes fully black
surface texels, so real shadows cannot be mistaken for empty atlas space.
Three array tests and real Blender EMIT, DIFFUSE and SHADOW tests pass.
The live probe shows a
cap shadow on a receiving sphere when casts are enabled, absent when disabled.

`rebake-rgb.mjs` rebakes both lamp/sky RGB and moon visibility at 4096 samples
using the existing stage-2 geometry and UV layout. Neither previous lighting
channel is reused.
The candidate was staged in scratch until the actual final GLB was reviewed.

`repack-check.mjs --wait` ran after the corrected atlas completed. It
stages that atlas into both tiers, repacks each tier, runs verify/smoke, and
renders storefront, bridge, backstreet, market, bikes and bridge-walk views.
All outputs stay in `scratch/lighting-diagnosis/`. Inspect those final GLB
renders before running `deliver-corrected.mjs`; it backs up the rejected game
files and verifies the replacement copies. The corrected files were delivered on 2026-09-08; see the record below.

The Low-preset render regression uses the actual game `lampShadows.ts` with
two active lamps. In the self-shadow receiver crop, enabling casts darkens
50.5% of pixels by more than five display levels; the mean darkening is 18.6
levels. An unrelated control crop is unchanged. The game settings/selection
suite passes 20 tests and the production build passes.

Coverage validation (2026-09-08): the completed two-pass 4096-sample atlas reports
49.126% diffuse coverage. Independent pixel-center UV rasterization measures
61.974%; a fresh one-sample EMIT bake measures 61.977%, and a fresh DIFFUSE
bake measures 48.745%. A four-material CPU test confirms transparent areas
write alpha zero in DIFFUSE but alpha one in EMIT; black metal and opaque
emission surfaces retain alpha one. The scratch staging gate now compares
the candidate to the independent diffuse measurement (1 percentage point
tolerance), rather than requiring an arbitrary 50% occupied atlas. Packaging and final visual acceptance passed on 2026-09-08.

## Corrected delivery — 2026-09-08

Both /home/mulligan/code/Operation-X/GLB/bangkoksoi_high.glb and bangkoksoi_medium.glb
were replaced after validation and visual review. Each is 102,455,928 bytes.
Both use the corrected 8192-square, 4096-sample RGB and moon atlas.
Copy SHA-256 checks passed; hashes are in scratch/lighting-diagnosis/delivery.json.
Backups of the rejected game files are in scratch/lighting-diagnosis/rejected/.

For both tiers: verify `"ok":true`; smoke `"ok":true`. Review page errors: none.
The six final views cover storefronts, the street beneath the bridge, backstreet,
market, parked bikes, and the bridge walkway. Roads no longer show the large
noise blotches from the rejected bake; bike and furniture contact shadows are
visible. The walkway remains more subdued than the street but is readable.
All high views were inspected; all medium views were compared pixelwise to
those frames (three identical; remaining mean channel differences below 0.00004).
The actual game Low-preset self-shadow probe passed. Local dynamic lamp shadows
onto baked static receivers remain unsupported by the existing runtime shader;
baked static shadows and moon shadows are separate from that limitation.

The export contains 236 baked local lights, 20 live local lights plus the moon,
270 cells, 23 dynamic props, 29 spawns, and 1,701 placements. Across all cells,
LOD triangles are 3,119,739 / 1,100,029 / 368,455 with 2,077 draws per LOD.
Verification retains 13 cell draw-budget advisories and the 8192 atlas advisory.
The smoke harness reports a generic HTTP 404 but no runtime validation failure.
This is a Cycles bake; Unreal fog, Lumen, post-process and Niagara do not carry over.
Reload the selected high or medium GLB through the game Levels control to discard
the previously loaded asset.
