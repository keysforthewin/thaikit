# Unreal recipes for the Thai street

Every recipe is written against WHAT the editor must end up containing, with the
Unreal classes and properties by their real names. The unreal-mcp toolset that
does each thing varies by plugin version, so the flow is always: `describe_toolset`
on the likely owner (named in each section), match the recipe's fields to the
tool's schema, `call_tool`. Where a toolset exposes a Python execute tool, the
`unreal` Python snippets here run as written (Unreal 5.3+ Python API).

Units: **centimetres, degrees, Z up, left-handed.** thaikit metres x 100. Light
intensity: point/spot in **candela** (default units), rect in candela, directional
in **lux**, sky light in cd/m². Colour as linear RGB 0-1 or a temperature with
`bUseTemperature`.

## Import (AssetTools / asset-import toolset)

Target: every `exports/unreal/ThaiKit/*.glb` → `/Game/ThaiKit/SM_TK_*`, one Static
Mesh each, UCX collision attached, material instances created.

Python fallback:

```python
import unreal, glob, os
src = r"<repo>/exports/unreal/ThaiKit"          # respell for the host that runs the editor
dest = "/Game/ThaiKit"
tasks = []
for f in sorted(glob.glob(os.path.join(src, "*.glb"))):
    t = unreal.AssetImportTask()
    t.filename = f
    t.destination_path = dest
    t.automated = True
    t.replace_existing = True
    t.save = True
    tasks.append(t)
unreal.AssetToolsHelpers.get_asset_tools().import_asset_tasks(tasks)
# Interchange picks up the project's default glTF pipeline. If meshes did not
# combine or collision is missing, set the defaults first:
# Project Settings -> Interchange -> Content Import Settings -> Assets pipeline
#   Common Meshes: bCombineStaticMeshes=True, bImportCollisionAccordingToMeshName=True,
#   bBuildNanite=False, bGenerateLightmapUVs=True; Materials: bImportMaterials=True,
#   MaterialImport=CreateMaterialInstances.
```

Verify: `unreal.EditorAssetLibrary.find_asset_data("/Game/ThaiKit/SM_TK_TukTuk")`
exists, and its `get_bounds().box_extent * 2` is about (140, 290, 197) in some
axis order. Tens of thousands means the scale was applied twice; 1.4 means not
at all.

## Spawn a prop (actor / level toolset)

```python
import unreal
sub = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
sm = unreal.load_asset("/Game/ThaiKit/SM_TK_HondaWave")
a = sub.spawn_actor_from_object(sm, unreal.Vector(1200, -350, 0), unreal.Rotator(0, 0, 65))
a.set_actor_label("Bike_01")
a.set_folder_path("StreetLife/Bikes")
a.root_component.set_mobility(unreal.ComponentMobility.STATIC)   # MOVABLE + simulate for physics props
```

Ground snapping: `unreal.EditorLevelLibrary` has no "End" key; trace instead --
`unreal.SystemLibrary.line_trace_single(world, start, end, TraceTypeQuery1, ...)`
from 5 m above the intended point and place at the hit. Tiles are at z = 0 so
most props can simply take z = 0.

Facing: thaikit fronts are +Z in glTF. After import, spawn `SM_TK_7ElevenStoreBuilding`
with rotation (0,0,0), look at which world axis the glazing faces, and derive the
yaw offset; apply it to every "faces the road" placement.

## Cables (Cable Component plugin; actor toolset or Python)

Target per span: 4-8 `CableActor`s between pole tops, sagging.

```python
import unreal
sub = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
def span(p0, p1, n=6, z=720, spread=25, label="Wires/Span_01"):
    for i in range(n):
        a = sub.spawn_actor_from_class(unreal.CableActor, p0 + unreal.Vector(0, spread*(i - n/2), z + 8*i))
        c = a.cable_component
        c.set_editor_property("attach_end_to", unreal.ComponentReference())   # free end
        c.set_editor_property("end_location", (p1 - p0) + unreal.Vector(0, spread*(i - n/2), 8*i))  # relative
        c.set_editor_property("cable_length", (p1 - p0).length() * (1.04 + 0.02*i))   # longer = more sag
        c.set_editor_property("num_segments", 24)
        c.set_editor_property("cable_width", 2.5 + (i % 3))
        c.set_editor_property("solver_iterations", 4)
        c.set_editor_property("enable_stiffness", False)
        c.set_editor_property("cable_gravity_scale", 1.0)
        a.set_actor_label(f"{label}_{i:02d}"); a.set_folder_path("Wires")
```

Drops: one cable from the pole at ~650 cm down to the fascia (~380 cm) of the
nearest shopfront, `cable_length` 1.02x. Bundles: 3 short cables from a pole to a
point 60 cm off it and back, `cable_length` 2x, which loops. Material: a black
`M_Cable` (base 0.02, roughness 0.6). Cables SIMULATE each frame; for a shipped
level convert to spline meshes or freeze (`bEnableCollision` off, tick interval
0.1 s) -- 60 cables at 24 segments is fine in the editor.

## Lights (light / actor toolset)

```python
import unreal
sub = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
def soi_lamp(pos, yaw):
    a = sub.spawn_actor_from_class(unreal.SpotLight, pos + unreal.Vector(0, 0, 750), unreal.Rotator(-75, yaw, 0))
    l = a.light_component
    l.set_intensity(1600)                       # cd
    l.set_editor_property("use_temperature", True); l.set_editor_property("temperature", 2000)
    l.set_editor_property("attenuation_radius", 1800)
    l.set_inner_cone_angle(35); l.set_outer_cone_angle(70)
    l.set_editor_property("cast_shadows", True)
    l.set_editor_property("volumetric_scattering_intensity", 2.0)   # visible cone in the fog
    a.set_folder_path("Lights/Poles")
```

### Every fixture from the manifest's emitters

```python
import unreal, json, math
MAN = json.load(open(r"<repo>/exports/unreal/manifest.json"))
BY_ASSET = {it["asset"]: it for it in MAN["items"]}
# glTF (x, y=up, z) -> Unreal (x, -z? , z=up): CALIBRATE this once against the 7-Eleven
# facing test in the skill's step 1 and fix the lambda; the default below assumes the
# Interchange convention glTF(x,y,z) -> UE(x*100, -z*100, y*100) ... verify.
def to_ue(v): return unreal.Vector(v[0]*100, -v[2]*100, v[1]*100)
TEMP = {  # by slot-name hint, else category default
    "warm": 2000, "sodium": 2000, "lantern": 2200, "silk": 1900, "cloth": 2400, "glazing": 2400,
    "led": 6000, "flood": 5800, "tube": 6500, "lens": 5500, "refractor": 2200, "shell": 4000,
}
def temp_for(slot):
    s = slot.lower()
    for k, t in TEMP.items():
        if k in s: return t
    return 3200
def cd_for(em, item):
    ex = em["extent"]; area = max(ex[0]*ex[1], ex[1]*ex[2], ex[0]*ex[2])
    if item["category"] == "lighting":
        h = em["position"][1]
        return 1500 if h > 6 else 400 if h > 3 else 120
    return min(1500, 300 + 800 * area)          # a sign: brightness follows its face area
sub = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
made = 0
for a in sub.get_all_level_actors():
    smc = a.get_component_by_class(unreal.StaticMeshComponent)
    if not smc or not smc.static_mesh: continue
    item = BY_ASSET.get(smc.static_mesh.get_name())
    if not item or not item.get("emitters"): continue
    xf = a.get_actor_transform()
    for em in item["emitters"]:
        wpos = xf.transform_location(to_ue(em["position"]))
        if em["shape"] == "panel":
            L = sub.spawn_actor_from_class(unreal.RectLight, wpos, a.get_actor_rotation())
            c = L.light_component
            ex = em["extent"]; thin = min(range(3), key=lambda i: ex[i])
            wide = sorted([ex[i]*100 for i in range(3) if i != thin], reverse=True)
            c.set_editor_property("source_width", wide[0]); c.set_editor_property("source_height", wide[1])
            # rotate to face along the thin axis, away from the prop's centre
            c.set_editor_property("barn_door_angle", 60)
        else:
            L = sub.spawn_actor_from_class(unreal.SpotLight if item["category"] == "lighting" and em["position"][1] > 3 else unreal.PointLight, wpos, unreal.Rotator(-80, 0, 0))
            c = L.light_component
            c.set_editor_property("source_radius", max(3, min(em["extent"]) * 50))
            if isinstance(L, unreal.SpotLight): c.set_inner_cone_angle(35); c.set_outer_cone_angle(72)
        c.set_intensity(cd_for(em, item))
        c.set_editor_property("use_temperature", True); c.set_editor_property("temperature", temp_for(em["slot"]))
        c.set_editor_property("attenuation_radius", 1800 if item["category"] == "lighting" else 900)
        c.set_editor_property("cast_shadows", item["category"] == "lighting" and em["position"][1] > 6)
        c.set_editor_property("volumetric_scattering_intensity", 1.5)
        L.set_actor_label(f"L_{a.get_actor_label()}_{em['slot'][-12:]}"); L.set_folder_path("Lights/Fixtures")
        L.attach_to_actor(a, "", unreal.AttachmentRule.KEEP_WORLD, unreal.AttachmentRule.KEEP_WORLD, unreal.AttachmentRule.KEEP_WORLD)
        made += 1
unreal.log(f"[thaikit] lit {made} fixtures")
```

Then hand-tune the few that matter: the 7-Eleven's fascia rects want 1200 cd and
a slight green (`#DDF5E8`), the cobra heads 3000+ cd, and anything that reads
as a wall of light gets its `attenuation_radius` halved.

Shop interior: `RectLight`, source 200 x 60 cm, 1000 cd, 6000 K, just inside the
glazing pointing OUT and down 20 deg, `attenuation_radius` 1200, shadows off.
Batten: `RectLight` 120 x 8, 250 cd, 6500 K, under the canopy. Bulb: `PointLight`
120 cd, 2700 K, `source_radius` 3, `attenuation_radius` 600. Moon:
`DirectionalLight` 1 lux, 8000 K, pitch -55, shadows on, `light_shaft_bloom` off.
`SkyLight` real-time capture off, `intensity` 0.1, colour (0.35, 0.4, 0.7).

Emissive boost on a sign: on the imported material instance
(`MI_M_TK_7ElevenStoreBuilding_<slot>`), `unreal.MaterialEditingLibrary.set_material_instance_scalar_parameter_value(mi, "EmissiveStrength", 6.0)`
-- the parameter name comes from the glTF parent; describe the instance's
parameters first (`get_scalar_parameter_names`).

## Wet road (material toolset or Python)

Route A (quick, every tile): on each `MI_M_TK_Road*` / paving instance:
`RoughnessFactor` 0.22, `BaseColorFactor` scaled 0.75, `SpecularFactor` 0.7 if
present. Check the names on the instance; glTF parents expose factors, not
textures, as parameters.

Route B (puddles): a decal material `M_Puddle` -- `DBuffer Translucent Color,Normal,Roughness`,
base colour dark (0.02), roughness 0.02, normal from a panning
`T_WaterRipple` normal (engine content `/Engine/EngineMaterials/...` or a
generated noise), opacity from a soft radial mask x a noise so edges are ragged.
Spawn `DecalActor`s 200-500 cm across at kerbs, drain grates, the soi centre line
and around the dug-up tile; 8-15 for a block, never a grid. A rain-ripple
`NormalIntensity` param at 0.6 while raining, 0.1 after.

## Rain (Niagara toolset)

Target: `NS_Rain` following the camera.

- Emitter `Streaks`: GPU sim, spawn rate 6000, box 4000 x 4000 x 1200 cm centred
  1000 cm above the player, velocity (0, 0, -900) ± 60 with a 6 deg wind lean,
  lifetime 1.6 s, sprite renderer with velocity-aligned stretch, size 1.2 x 24 cm,
  material `M_RainStreak` (translucent, unlit, 0.25 opacity, slight emissive
  0.02 so sodium lamps catch it). Kill at z < 0.
- Emitter `Splashes`: CPU, spawn 400, on the ground plane, 0.15 s lifetime, small
  ring sprite scaling 2 → 14 cm.
- Attach to the player camera / pawn, or a `NiagaraActor` with a Blueprint tick
  copying the camera XY.

Fallback if creating a system is out of reach: the `Fountain` template with
gravity 0, the velocity above and the sprite material swapped.

## Fog, sky and post-process

```python
import unreal
sub = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
fog = sub.spawn_actor_from_class(unreal.ExponentialHeightFog, unreal.Vector(0, 0, 0))
c = fog.component
c.set_editor_property("fog_density", 0.035)
c.set_editor_property("fog_height_falloff", 0.6)
c.set_editor_property("fog_inscattering_luminance", unreal.LinearColor(0.35, 0.18, 0.06, 1))   # warm low
c.set_editor_property("volumetric_fog", True)
c.set_editor_property("volumetric_fog_scattering_distribution", 0.6)
c.set_editor_property("volumetric_fog_extinction_scale", 1.5)

pp = sub.spawn_actor_from_class(unreal.PostProcessVolume, unreal.Vector(0, 0, 0))
pp.set_editor_property("unbound", True)
s = pp.settings
s.override_auto_exposure_method = True;  s.auto_exposure_method = unreal.AutoExposureMethod.AEM_MANUAL
s.override_auto_exposure_bias = True;    s.auto_exposure_bias = 4.5      # EV100-ish; tune 3..6
s.override_bloom_intensity = True;       s.bloom_intensity = 0.8
s.override_vignette_intensity = True;    s.vignette_intensity = 0.45
s.override_color_gain = True;            s.color_gain = unreal.Vector4(1.02, 0.98, 1.0, 1)
s.override_color_offset_shadows = True;  s.color_offset_shadows = unreal.Vector4(0.01, 0.005, 0.0, 0)
s.override_motion_blur_amount = True;    s.motion_blur_amount = 0.2
pp.settings = s
```

Sky: no `SkyAtmosphere` daylight. A dark `SM_SkySphere` with an emissive gradient
(horizon `#3A2410`, zenith `#05060F`), or a night HDRI on a sky dome, plus the
imposters. Keep the `SkyLight` weak; the street is lit by its lamps.

## Billboard Blueprint for imposters

`BP_Imposter`: a StaticMeshComponent, tick: yaw = look-at(camera).yaw so the quad
faces the player about Z only. Or place them perpendicular to the main vista and
leave them static; at 200 m the edge is rarely visible.

## Grouping and saving

`actor.set_folder_path("Buildings/NorthRow")` per role. Save with
`unreal.EditorLevelLibrary.save_current_level()` and
`unreal.EditorAssetLibrary.save_directory("/Game/ThaiKit")`. Save BEFORE the
import and the cable pass, which are the two bulk operations.
