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

## Coverage pass — 2026-09-08

The 09-07/09-08 work fixed sampling and atlas padding; it never audited **where the
light lands**. The light-coverage viewmode showed large voids. This pass measures
coverage in world space, retunes the existing rig for softness, and fills the voids
with real fixtures.

### The instrument

`scripts/level/light-coverage.mjs` (new, 12 tests in `light-coverage.test.mjs`) is the
only thing in the repo that answers "where is it dark" in **world space** —
`probe-lightmap.mjs` is atlas-statistical and `scratch/_qa/sample_lm.py` samples six
hard-coded AABBs. Two modes, one output format (ASCII map + percentiles to stderr, one
JSON line to stdout):

- `--mode rig` integrates `I·f·cosθ/d²` from the punctual rig onto an XZ grid at ankle
  height, with the spot cone smoothstepped between inner and outer, and occlusion
  against a span-based occluder lattice. Reads `bake.json`, or a compact CSV
  (`kind,x,y,z,dx,dy,dz,intensity,angle,penumbra,distance`) so the **live editor** can
  be measured without an export.
- `--mode atlas --quality high` samples the shipped lightmap through every primitive's
  `TEXCOORD_1`, keeping up-facing triangles in the walkable band.

Three things it had to learn, each of which produced a wrong map first:

- **Occluders are SPANS, not a heightfield**, foliage is skipped by name, and they
  rasterise on their own 1 m lattice. Rasterising every static AABB at report
  resolution blacked the map out — 176 `border_trees` and 51 `border_block` boxes are
  mostly air. A thin volume above 2.5 m is a deck or canopy and still occludes; the
  same volume on the ground is a kerb and does not.
- **A cell inside a building footprint is EMPTY, not dark** (290 of 992 here).
  Otherwise the rig and atlas modes are not comparable and every interior reads as a
  coverage failure.
- **The atlas is sampled with NO v flip.** `bake_lightmap.py` writes `u16[::-1]` so the
  exporter's `v' = 1 − v` already agrees. Settled by correlation against the
  independent rig map: **r = 0.7272 unflipped, −0.0374 flipped** (the zero-sample rate
  argues the other way and is misleading — it counts out-of-grid samples on the 900 m
  `far_ground`).

`--mode rig` honours `distance`, which Cycles ignores, so it is deliberately the
conservative of the two: a lamp reaches further in the bake than the map says.

### What changed in `/Game/Maps/BangkokSoi`

**Retune (167 spotlights across 22 families).** `innerConeAngle` driven down so
penumbra lands at **0.83–0.89** (was 0.44–0.61), outer angle untouched so the lit
footprint does not shrink. `innerConeAngle` is the *only* softness knob that survives
the bake — `bake_lightmap.py` hands Blender `spot_blend = 1 − inner/outer`, and
`sourceRadius` never reaches it (`LAMP_RADIUS` is hard-coded at 0.1 m). Examples:
`L_soi_pole_soilamp` 38/72 → 8/72; `border_lamp` 35/70 → 10/70; `L_front0/1_*` 25/62 →
10/62; `relight_entry_*` 28/70 → 12/70. Uplights and the archived vehicle lights were
deliberately skipped.

Peaks trimmed now that the cones are feathered: `L_soi_pole_soilamp*` 2100 → 1700 cd,
`L_cobra_pole_cobra` 3200 → 2600 cd. `border_lamp_04` was authored in **Nits**
(45,445) while all 21 siblings are Candelas; normalised to 1500 cd / atten 3000.
**It was not the source of the shipped bake's maximum** — the glTF exporter normalises
Nits to candela by source area, so `bake.json` exports it at 375, identical to its
siblings. The editor viewmode was the only place it read hot.

**Fill: 74 new lights, each with its own placed thaikit fixture mesh** (folders
`Lights/Added2609` and `Lights/Added2609/Fixtures`) — `SoiLampOnUtilityPole` ×50,
`OrnamentalLampPost` ×9, `BulkheadWallPackLight` ×6, `EnamelShadeMarketBulb` ×3,
`FluorescentBattenLight` ×2, `SteelCobraHeadStreetLamp` ×2, `LedFloodPanelWallLight`
×2. All Static, Candelas, inverse-square, explicit RGB (`bUseTemperature` false),
shadows on, inner ≈ 0.12 × outer.

Positions for the last 34 came from **greedy set cover**
(`scratch/lighting-20260908/propose.mjs`) over the rig grid, not from an outliner
survey. That matters: hand placement from the actor list moved the dark-cell count by
**10**; set cover moved it by **89**. The void was never "the temple compound" — it is
a band across the whole northern half.

`snap_to_ground` perched three fixtures on obstacles (posts at 1.50 m and 1.87 m, a
pole at 5.04 m); they were reset to z = 0 and snapping was disabled for the remaining
batches, since the play block's ground tiles are all at z = 0.

**Ambient:** `sky.base.intensity` 0.16 → **0.22** in `unreal/sky.json` (this is also
`--env-strength`, so the Cycles world and the runtime probe move together).
**Signage:** import with `--emissive-scale 0.18` (was 0.125).

### Measured result

Live editor rig, 307 enabled point/spot lights (242 spot, 65 point, 28 correctly
archived), standable ground only, bake units, threshold 0.4, alleys excluded:

| metric | before | after |
|---|---|---|
| p10 | 0.000 | **0.676** |
| p25 | 0.591 | **1.621** |
| p50 | 1.087 | **3.071** |
| max | 30.759 | **23.332** |
| uniformity p10/p50 | 0.000 | **0.220** |
| peak max/p50 | 15.06 | **7.598** |
| cells under 0.4 | 361 / 702 (51%) | **50 / 702 (7.1%)** |

Peak target (≤ 8) met.

### The atlas — the actual judge (2026-09-09)

Bake: 8192², 4096 samples, adaptive off, 307 baked lamps, 3h17m diffuse + 4h53m mask.
`range` 15, coverage 0.456, clipRate 0.17%, alpha bimodal (90.5% top bin, 2.1% bottom).
Standable ground, 702 cells, interiors and the two alleys excluded, same tool both sides:

| metric | previous delivery | this bake |
|---|---|---|
| p10 | 0.097 | **0.236** |
| p25 | 0.312 | **0.502** |
| p50 | 1.151 | 1.128 |
| p90 | 4.858 | **3.963** |
| max | 11.118 | **7.828** |
| uniformity p10/p50 | 0.085 | **0.210** |
| peak max/p50 | 9.656 | **6.939** |
| cells under 0.4 | 206 (29.3%) | **132 (18.8%)** |

**But the median did not move (−2%).** Read with the renders, that is the finding:
the pass REDISTRIBUTED light rather than adding it. Feathering to penumbra 0.86–0.89
spreads a cone's flux across a wide gradient so its peak collapses, and the intensity
trims (soi pole 2100→1700, cobra 3200→2600) were applied ON TOP of that. Those trims
were justified against the UNFEATHERED cones; after feathering they double-counted, and
together they gave back roughly what 74 new fixtures, the sky lift and the emissive lift
had added. In `views/` the lamp heads glow while the open ground under them shows no
pool — smooth, and under-lit.

The correction is NOT to undo the feathering, which is what makes the light soft and
what took peak/median from 9.66 to 6.94. It is to put the flux back: restore the soi
pole and cobra intensities and raise the ground-facing families roughly 40–60%, keeping
every inner-cone angle exactly as it is. Watch the atlas MEDIAN, not the dark-cell
count — the count improves under redistribution alone and hid this.

### An instrument defect found while judging this bake

`markIndoor` ran only in `rigMode`. Atlas mode therefore scored all 992 cells including
~290 building interiors, which are legitimately unlit, and the street signal drowned in
them: measured that way this bake read as 246 → 337 cells under threshold, i.e. a
REGRESSION, when on standable ground it is 206 → 132. Atlas mode marks interiors now
(`atlasMode` takes `placements`, marks after sampling because the samples are what prove
a surface exists). The earlier note in this file claiming indoor marking "made rig and
atlas modes comparable" was wrong — it only ever applied to rig mode.

Two lessons worth keeping: a coverage number that counts interiors measures the
buildings, not the lighting; and when the fast proxy and the real judge disagree, suspect
the instrument before believing either.

Baselines for the comparison are `scratch/lighting-20260908/baseline-rig.json` and
`baseline-atlas-high.json`; the live rig dump is `rig-live-after.csv`.

### Deliberately dark

Two service gaps behind the shophouse row, recorded by name so a later coverage run
does not read them as a regression:

- `alley_north` = x −46…32, y 8…11
- `alley_south` = x −42…−9, y −11…−8

Pass them as
`--exclude "alley_north=-46,8,32,11;alley_south=-42,-11,-9,-8"`.

### Drift found

Three `soi_wall` lights present in the delivered `bake.json` (16) no longer exist in
the map (13) — deleted since the 09-07 export. The measurement above is therefore
taken from a **live rig dump**, not from `bake.json` plus an edit list, which removes
that whole class of error.

### Remaining chain (not yet run)

```sh
# in the Unreal editor
scratch/lighting-20260907/export-colours.py
scratch/lighting-20260907/export.py

# in the container
docker compose run --rm --no-deps -e HOME=/tmp web node scripts/level/import-unreal-level.mjs \
  --level bangkoksoi --settings levels/bangkoksoi/settings.json \
  --ground=-0.12,#2b2b29 --light-scale 0.25 --emissive-scale 0.18
docker compose run --rm --no-deps -e HOME=/tmp web node scripts/level/bake-level.mjs \
  --level bangkoksoi --quality low --live-lamps 20      # ~52 s, no Cycles
docker compose run --rm --no-deps -e HOME=/tmp web node scripts/level/bake-level.mjs \
  --level bangkoksoi --quality medium --live-lamps 20   # ~9 min, 2048²/16
docker compose run --rm --no-deps -e HOME=/tmp web node scripts/level/bake-level.mjs \
  --level bangkoksoi --quality high --live-lamps 20     # ~2h20m
```

**Do not pass `--lightmap-size 8192 --samples 4096 --noise-threshold 0` to the
MEDIUM tier.** Those flags override medium's own 2048²/16 preset and make it cost
the same as a high bake, which is the whole reason medium exists as a cheap check.
The command recorded in the 09-07 section above does exactly that. `high` needs no
size or sample flags at all — `settings.json` already carries 8192 / 4096 /
noiseThreshold 0, and `--quality high` reads them.

Medium is a **pipeline** check, not a coverage preview: at 2048² this level gets
1.8 texels/m against high's 7.1, so its atlas coverage (~0.21) and dark percentiles
are atlas starvation and say nothing about the lighting. What medium does settle is
that the lamps baked, verify passes, and the moon-visibility alpha is bimodal.

Verification: `light-coverage.mjs --mode atlas --quality high` against
`baseline-atlas-high.json`; `probe-lightmap.mjs --compare` (coverage ~0.49,
clipRate ≤ 0.30%, alpha histogram bimodal — `range` will move, 74 new lamps shift the
p99.9 channel peak); `verify-level.mjs`; `smoke-level.mjs` with `--cam/--look` at the
temple courtyard (≈ −28, 2, 52), dorm backstreet (≈ −32, 2, 58), south verge
(≈ −2, 2, −42) and the west road curve.
