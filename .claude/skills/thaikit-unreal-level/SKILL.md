---
name: thaikit-unreal-level
description: >-
  Builds a Thailand-at-night level INSIDE a live Unreal Editor over the
  unreal-mcp connection, from the thaikit Unreal export (exports/unreal/, made by
  the asset editor's "export to Unreal" button). Imports the kit's GLBs as Static
  Meshes, then lays out a soi or main-road block the way a Thai street actually
  reads after dark: shophouses and a glowing 7-Eleven, utility poles with sagging
  cable bundles, sodium and fluorescent lighting, shrines, carts and plastic
  stools, parked motorbikes, wet asphalt with puddles, rain, haze and a skyline
  of imposters -- prioritising thaikit props over engine content and using
  Unreal's own lights, materials, Cable actors, Niagara, fog and post-process
  for everything the props cannot carry. Use when the user wants a Thai street,
  soi, night market, Bangkok block, or "Thailand vibe" level built or dressed in
  Unreal, or asks to bring the thaikit props into Unreal and place them.
---

# thaikit → Unreal: a Thai street at night

You are building in a LIVE Unreal Editor through `unreal-mcp`. Read the `unreal-mcp`
plugin skill's rules first and keep them: **discover tools with `list_toolsets` /
`describe_toolset`, dispatch with `call_tool`, one call at a time, check every
result, save before and after bulk work.** Nothing in this skill names a tool you
may call without describing it first -- toolset APIs differ between plugin
versions, and a guessed signature fails on the game thread in ways that look like
a broken editor.

The deliverable is a level that **looks and feels like Thailand after dark**, built
from **thaikit's props first**. Engine or Starter Content fills only what the kit
has no prop for (cables, rain, fog, puddle decals, the moon).

## 0. Preconditions -- check, do not assume

1. `list_toolsets` answers. If not, the editor or its MCP server is down: say so
   and stop (the plugin's `references/setup.md` has the fix).
2. The export exists: `exports/unreal/manifest.json` in this repo, with
   `ThaiKit/*.glb` beside it. If it does not, tell the user to press **export to
   Unreal** in the asset editor (`docs/unreal-export.md`), or offer to open the
   page for them. Never build a Thai street out of engine cubes because the kit
   was not exported.
3. Read `manifest.json` in full. It is the catalogue you place from: every prop's
   `asset` name, `size` (metres), `bbox`, `category`, `tags`, `placement`,
   `physics`, `nameTh`. `references/kit-roles.md` maps those categories to street
   roles; the manifest is the authority on what actually exported.
4. Ask the user two things only if the request does not already say: **which
   street type** (`soi` -- a narrow residential alley -- or `main road` with
   shopfronts and traffic) and **how big** (one block, ~60 x 40 m, is the default
   and is what this skill is tuned for). Everything else has a default below.
5. Note the project's Content path for the kit (`/Game/ThaiKit` by default) and
   whether it is already imported (`AssetTools` / asset registry query for
   `SM_TK_`). Skip the import if the assets are there and the manifest's
   `generatedAt` is older than the import.

## 1. Import the kit

- Describe the asset-import toolset (`AssetTools`, or whatever `list_toolsets`
  shows that imports files). Import every `ThaiKit/*.glb` into `/Game/ThaiKit`
  with: combine static meshes ON, collision-from-mesh-name ON, materials as
  instances, scale 1.0, Nanite OFF, lightmap UVs ON. `references/unreal-recipes.md`
  has the Python fallback (`unreal.AssetImportTask` + Interchange pipeline) if the
  toolset offers a script-execute path but no import tool.
- Leave `_previews/`, `manifest.json` and `README.md` out of Content.
- **Verify**, do not trust: query the imported `SM_TK_TukTuk`'s bounds. Expect
  about 140 x 290 x 197 uu (the manifest `size` x 100, axes permuted). If it is
  100x smaller or larger the scale option was wrong; fix and reimport before
  placing a single actor.
- **Calibrate facing once.** Spawn `SM_TK_7ElevenStoreBuilding` at the origin with
  zero rotation and find which world axis its shopfront faces (the glazed side with
  the sign; in the kit it is +Z in glTF). Record that yaw offset and apply it to
  every "front" in the layout maths below. Delete the test actor.

## 2. Lay out the street

Read `references/thai-night-look.md` before placing anything -- it is the visual
grammar, and the layout rules below are the geometric half of it. Build in this
order, saving after each numbered step:

1. **Ground and road.** Thaikit's tiles are 8 x 8 m (soi tiles 4 x 8) and
   butt-join on a metre grid. Lay the road spine from the `road-*` tiles
   (`SM_TK_RoadStraightTile`, junctions, zebra, drain-and-utility, parking bays),
   with `SM_TK_SoiAlleyStraightTile` for a soi. Flank it with pavement tiles
   (`InterlockingConcretePaverTile`, `PebbleWashTerrazzoPavingTile`,
   `PouredConcreteApronTile`) and patches of `CompactedLateriteDirtTile` /
   `PatchyGrassGroundTile` where the pavement gives out. Fill under everything
   with tiles, not an engine plane: the tiles carry the manhole covers and the
   drain grates the wet-road pass reflects.
2. **The buildings.** Shophouses stand SHOULDER TO SHOULDER with their fronts on
   one line, 1.0-1.5 m back from the kerb, and never with a gap you could walk
   through unless it is a soi mouth. The `*StoreBuilding` set (7-Eleven, FamilyMart,
   Cafe Amazon, AIS, Lotus's, Big C, SCB, MK, King Power, Makro, Flash Express,
   the clinic, the PTT station) are all 8 m modules: alternate them, and break
   the rhythm with `BangkokApartmentBlock`, `ConcreteWalkUpFlatBlock`,
   `LowRiseCondominium` or `StudentDormitoryBlock` set back behind a
   `PrecastConcreteFencePanel` run. One 7-Eleven per block, mid-block, is the
   anchor light source. A temple prop (`Ubosot`, `Chedi`, `Prang`,
   `RecliningBuddhaHall`, `KhmerStoneSanctuary`) goes at the END of the street
   behind a wall, never mid-row; `Mosque`, `ChineseShrine`, `BrahmanStreetShrine`
   likewise. `ZincSheetHoardingPanel` runs close a vacant lot.
3. **Poles and wires.** `SM_TK_SoiLampOnUtilityPole` and
   `SM_TK_SoiLedFloodlightOnUtilityPole` every 30-40 m on ONE side of the road,
   0.5 m inside the kerb, plus `ConcreteStreetLampColumn` / `SteelCobraHeadStreetLamp`
   / `SteelTwinArmStreetLamp` on a main road. Then the wires, which the kit does
   not carry: **Cable actors** (`references/unreal-recipes.md` §cables), 4-8 per
   span at 6.5-7.5 m, slightly different sags, plus 2-3 drops from each pole to
   the nearest shopfront at fascia height, and one tangled bundle looped on
   every third pole. `ElectricMeterBox` on facades near the drops. A Thai street
   with clean sky over it is wrong.
4. **Street life.** Along the kerb outside the 7-Eleven and the noodle shop:
   `HondaWave` x 6-10 nose-in at 60-70 degrees, a `TukTuk`, a `Songthaew` or
   `IsuzuDMax` half on the pavement. Carts (`NoodleSoupCart`, `SomTamCart`,
   `MooPingSkewerBrazier`, `RotiGriddleStand`, `IcedFruitCart`,
   `StreetStallCanopyCart`) under a `TarpaulinCanopyModule` or `SquarePatioUmbrella`
   with `MonoblocPlasticStool` x 6-12, `StainlessSteelNoodleShopTable` x 3,
   `MonoblocPlasticArmchair` x 2 and a `RoundPlasticGardenTable`. Bins in
   CLUSTERS of 2-4 (`MunicipalWheelieBin`, `FourWheelPlasticRefuseBin`, an
   `OilDrum`, a `TyreStackBin`), `TrafficCone` and `WaterFilledPlasticBarrier`
   where the road is dug up (`RoadDrainAndUtilityTile`), `ConcreteJerseyBarrier`
   at the junction. A `SpiritHouse` with a `ShrineOfferingSet` at the corner of a
   lot, facing the street. Signs: `SoiNameSign` at the soi mouth, `NoParkingSign`,
   `MotorcycleLaneSign`, `SpeedLimitSign`, `UTurnSign`, `TouristAttractionSign`
   near the temple, `KilometreStone` on a main road, `FloodDepthMarker` by the
   canal side. Nothing sits perfectly aligned: yaw ±5-15 degrees on every loose
   object, and every second bin or stool is slightly off its neighbour.
5. **Skyline.** The `imposter`-tagged towers stand 150-300 m out, above the roof
   line, facing the play area; two or three is plenty, and `LedWrappedAdvertisingTower`
   or `MallPodiumWithTwinTowers` wants an emissive boost so it reads as the lit
   city. Give them a camera-facing Blueprint (recipes) or place them
   perpendicular to the main view and accept the edge.

**Build it so it can leave again.** A level this skill lays out is meant to come
back as a baked thaikit level for Operation X (`thaikit-unreal-bake`), and that
converter reads NAMES: keep every kit Static Mesh named `SM_TK_*` as imported;
label a physics prop `dyn_<thing>` and a skyline imposter `bb_<thing>`; put ONE
Camera actor labelled `spawn_<team>_<name>` where the player starts, facing down
the street; make the moon the only Directional Light and keep it **Movable**;
make the lamps Static so a 5.6+ lightmap holds them. Cables export as static
meshes with no collider; fog, rain and post-process do not export at all.

Placement mechanics: spawn StaticMeshActors from the imported assets (actor
toolset), set location in **centimetres** (manifest metres x 100), rotation in
degrees. Pivots are base-centre, so `z` is the ground height. Use `End`-style
snapping if the toolset offers it, otherwise place at the tile's known height.
Group actors in the Outliner by role (`Road`, `Buildings`, `Poles`, `Wires`,
`StreetLife`, `Lights`, `FX`) so the user can tune a layer at a time.

## 3. Light it like Thailand

Thaikit's lamp props glow (emissive) but do not LIGHT; every light in the level
is an Unreal light you add. **Where** each one goes is in the manifest: every
item carries `emitters[]`, one per emitting surface, with `position` (root-local
metres, so actor transform x 100 uu), `extent`, `color`, and `shape` -- `panel`
for a flat face (a sign fascia, a batten tube, an LED lens: use a Rect light
aimed along the panel's thin axis, pointing away from the prop) or `bulb` for a
lump (a lantern, a lamp shade, a refractor: a Point or a downward Spot). An
emitter marked `inferred: true` is the lamp HEAD guessed from its material slot
name (`lantern_shade`, `acrylic_refractor`, `led_lens`, `tube`, `warm_glazing`)
because the kit does not author its luminaires emissive; treat its position as
right and its colour as a hint only -- the table below decides temperature.
`references/unreal-recipes.md` §lights has `light_every_thaikit_actor()`, which
walks every placed `SM_TK_*` actor, looks its emitters up and spawns the lights
in one pass; run it AFTER the layout is final, and put the results in
`Lights/Fixtures`. A prop with no emitters and no `lighting` category gets no
light of its own.

The palette is the whole mood:

| Source | Unreal light | Colour / temp | Intensity (cd unless noted) | Where |
| --- | --- | --- | --- | --- |
| Soi lamp on pole | Spot, 60/90 deg cone, down | 2000 K amber (`#FFA040`) | 1200-2000 | lamp head, ~7.5 m |
| LED floodlight on pole | Spot, cool | 6000 K (`#DFEBFF`) | 2500-4000 | head, 7-8 m |
| Cobra / twin-arm | Spot down | 2200 K sodium or 4000 K LED | 3000-6000 | head |
| Shop interior (7-Eleven, FamilyMart) | 2-3 Rect or Spot inside the glazing, pointing OUT | 5000-6500 K white, 7-Eleven slightly green | 500-1500 each | behind the glass, 2.5 m |
| Fluorescent batten | Rect light, tube-shaped source | 6500 K, slight green | 150-400 | under canopies, over carts |
| Enamel market bulb / bare bulb | Point, small radius | 2700 K warm | 80-200 | cart canopies |
| Red Chinese lantern / Lanna lantern | Point inside | red-orange / warm | 30-80 | shrines, restaurant fronts |
| Shrine fairy lights | 4-6 tiny Points, or emissive only | mixed | 5-15 | spirit house, shrine roof |
| Sign faces | emissive on the material instance, x3-x8 | as authored | -- | fascias |
| Moon | Directional, one | 8000 K cold blue | 0.5-1.5 lux | high, opposite the main view |
| Sky | SkyLight | dark blue-violet, low | 0.05-0.15 | captured from the scene |

Rules: **warm sodium against cool fluorescent** is the Thai night contrast; never
one temperature everywhere. Lights cast shadows only where it matters (poles,
7-Eleven, the cart canopy) -- 6-8 shadow-casting lights for a block, the rest
unshadowed. Attenuation radius tight (6-10 m for a batten, 15-20 m for a pole).
Bloom on, moderate. Exposure is MANUAL (post-process volume, EV100 roughly 3-6)
so the dark stays dark; auto-exposure will lift a night street to dusk.

## 4. Wet roads, rain and air

- **Wet asphalt**: on every road and pavement tile's material instance, drop
  roughness (0.15-0.3), raise specular, darken base colour ~25%. Then PUDDLES:
  decals or a second material layer with a noise mask where roughness → 0.02 and
  a panning ripple normal; puddles gather at kerbs, drain grates and the middle
  of the soi, not evenly. Recipes §wet-road gives both routes.
- **Rain**: a Niagara system (recipes §rain) -- thin GPU sprite streaks falling at
  8-10 m/s in a 40 m box following the camera, plus a splash/ripple emitter near
  the ground. Light streaks catch the sodium lamps: give the rain material a
  little emissive tinted by nearby light, or rely on translucency lighting.
- **Air**: ExponentialHeightFog, density 0.02-0.06, inscattering warm orange
  low and blue-violet up, **volumetric fog ON** so the pole lamps grow cones and
  the 7-Eleven bleeds into the street. Heavy rain = more fog, not more particles.
- **Post-process**: bloom 0.6-1.0, slight vignette, no lens flare, colour
  grading with lifted warm shadows and slightly crushed blacks; a touch of
  chromatic aberration if the user wants the "phone camera" look. Motion blur low.
- **Sound** is out of scope unless asked; if asked, ambient loops (traffic hum,
  rain, cicadas) as AmbientSound actors.

## 5. Finish

1. Save the level and every modified asset. Report the counts: actors per group,
   lights (shadowed / not), cables, Niagara systems, and which thaikit props were
   used and which were left out and why.
2. Take a viewport screenshot (`AIAssistantToolset` or the viewport toolset) from
   the main street view and check it against `references/thai-night-look.md`'s
   checklist. If the street reads as clean, evenly lit, dry or empty, it is not
   finished -- go back to step 2.4 or 3.
3. Tell the user what to tune by hand: exposure EV, fog density, rain density,
   the imposter set. Do not promise a lightmap bake; Lumen or unbaked dynamic
   lighting is fine for a first look, and a bake is the user's call.

## What this skill does not do

- It does not export the props. The asset editor's button does that, in a
  browser, because the textures are canvases (`docs/unreal-export.md`).
- It does not write to thaikit's registry or the level GLB; nothing here flows
  back into the web level editor.
- It does not fabricate tool names. Every call is preceded by `describe_toolset`
  on the toolset that owns it, and a tool that does not exist is reported, not
  imagined.
