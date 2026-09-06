"""
Dump the thaikit sky settings authored on the level's BP_TK_Sky actor, and the
moon, into the sky sidecar the Unreal importer reads.

Run INSIDE the Unreal editor (console box: `py <path>/tk_sky_dump.py`, the same
route as C:\\tk\\actor_map.py). It writes:

  levels/<id>/unreal/sky.json   -- SkySettings-shaped `sky` block with slot
                                   filenames, the moon's source angle and
                                   browser intensity, and what was exported
  levels/<id>/sky/<slot>.png    -- the SOURCE pixels of every texture the actor
                                   references (panorama or six cube faces, clouds)

Unreal's glTF exporter carries nothing about the sky (sky spheres and HDRI
backdrops are switched off in export_gltf.py, and the importer drops the preview
sphere by label), so this file is the ONLY way the panorama, the cloud map and
the star settings reach the bake. `import-unreal-level.mjs` reads it from beside
the .glb automatically.

Edit REPO and LEVEL_ID below, the way actor_map.py and export_gltf.py are set.
The actor is found by label (`tk_sky`), then by class name (`BP_TK_Sky_C`).
Colours are read as LinearColor (linear) and written as sRGB hex, which is what
the schema and the editor's sky tab store.
"""
import unreal, json, os, math, traceback, datetime

REPO = r"\\wsl.localhost\Ubuntu-22.04\home\mulligan\code\thaikit"
LEVEL_ID = "bangkoksoi"
SKY_LABEL = "tk_sky"
SKY_CLASS = "BP_TK_Sky_C"
LOG = r"C:\tk\tk_sky_dump.log"
DONE = r"C:\tk\tk_sky_dump.done"

lines = []
def log(s):
    lines.append(str(s)); unreal.log("[thaikit] " + str(s))
    try: open(LOG, "w").write("\n".join(lines))
    except Exception: pass

CUBE_FACES = ["px", "nx", "py", "ny", "pz", "nz"]

def lin_to_srgb(c):
    c = max(0.0, min(1.0, float(c)))
    return c * 12.92 if c <= 0.0031308 else 1.055 * (c ** (1 / 2.4)) - 0.055

def hex_of(color):
    """LinearColor -> #rrggbb through the sRGB curve (thaikit hexes are sRGB).
    A `Color` (8-bit, already sRGB -- `light_color` is one) is passed through."""
    r, g, b = color.r, color.g, color.b
    if isinstance(color, unreal.Color) or max(r, g, b) > 1.0:
        return "#%02x%02x%02x" % (int(r), int(g), int(b))
    return "#%02x%02x%02x" % tuple(int(round(lin_to_srgb(v) * 255)) for v in (r, g, b))

def prop(obj, name, default=None):
    try:
        v = obj.get_editor_property(name)
        return default if v is None else v
    except Exception:
        return default

def num(obj, name, default):
    v = prop(obj, name, None)
    try: return float(v) if v is not None else default
    except Exception: return default

def export_texture(tex, out_path):
    """Write the texture's SOURCE mips (lossless for a PNG import) as PNG; TGA if PNG refuses."""
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    for exporter_cls, ext in ((unreal.TextureExporterPNG, ".png"), (unreal.TextureExporterTGA, ".tga")):
        path = os.path.splitext(out_path)[0] + ext
        task = unreal.AssetExportTask()
        task.set_editor_property("object", tex)
        task.set_editor_property("filename", path)
        task.set_editor_property("exporter", exporter_cls())
        task.set_editor_property("automated", True)
        task.set_editor_property("prompt", False)
        task.set_editor_property("replace_identical", True)
        ok = unreal.Exporter.run_asset_export_task(task)
        if ok and os.path.exists(path) and os.path.getsize(path) > 0:
            return path
        log("export %s as %s failed (%s); trying next exporter" % (tex.get_name(), ext, ok))
    return None

def find_sky_actor(sub):
    by_class = None
    for a in sub.get_all_level_actors():
        if a.get_actor_label() == SKY_LABEL: return a
        if by_class is None and a.get_class().get_name() == SKY_CLASS: by_class = a
    return by_class

try:
    sub = unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
    actor = find_sky_actor(sub)
    if actor is None:
        raise RuntimeError("no actor labelled %s (or of class %s) in the level: place BP_TK_Sky first" % (SKY_LABEL, SKY_CLASS))
    log("sky actor: %s (%s)" % (actor.get_actor_label(), actor.get_class().get_name()))

    sky_dir = os.path.join(REPO, "levels", LEVEL_ID, "sky")
    out_dir = os.path.join(REPO, "levels", LEVEL_ID, "unreal")
    os.makedirs(sky_dir, exist_ok=True); os.makedirs(out_dir, exist_ok=True)

    textures = {}
    def slot_file(slot, tex):
        """Export `tex` to levels/<id>/sky/<slot>.png and return the filename the settings record."""
        if tex is None: return None
        path = export_texture(tex, os.path.join(sky_dir, slot + ".png"))
        if not path:
            log("WARNING could not export %s for slot %s" % (tex.get_name(), slot)); return None
        size = unreal.Vector2D(0, 0)
        try:
            size = unreal.Vector2D(tex.blueprint_get_size_x(), tex.blueprint_get_size_y())
        except Exception:
            pass
        textures[slot] = {"asset": tex.get_path_name(), "width": int(size.x), "height": int(size.y), "file": os.path.basename(path), "bytes": os.path.getsize(path)}
        log("exported %s -> %s (%dx%d, %.1f MB)" % (tex.get_name(), os.path.basename(path), size.x, size.y, os.path.getsize(path) / 1048576.0))
        return os.path.basename(path)

    # ---- base -----------------------------------------------------------------
    panorama = prop(actor, "Panorama")
    faces = {f: prop(actor, "Cube" + f.upper()) for f in CUBE_FACES}
    have_faces = all(faces[f] is not None for f in CUBE_FACES)
    if have_faces:
        mode = "cube"
    elif panorama is not None:
        mode = "panoramic"
    else:
        mode = "none"
    base = {
        "mode": mode,
        "panorama": slot_file("panorama", panorama) if mode == "panoramic" else None,
        "faces": {f: slot_file(f, faces[f]) for f in CUBE_FACES} if mode == "cube" else None,
        "elevation": {"minDeg": num(actor, "ElevationMinDeg", -90.0), "maxDeg": num(actor, "ElevationMaxDeg", 90.0)},
        "nadir": {
            "mode": "cut" if bool(prop(actor, "NadirCut", True)) else "fade",
            "color": None if bool(prop(actor, "NadirColorAuto", True)) else hex_of(prop(actor, "NadirColor", unreal.LinearColor(0, 0, 0, 1))),
            "startDeg": num(actor, "NadirStartDeg", 0.0),
            "endDeg": num(actor, "NadirEndDeg", 3.0),
        },
        "intensity": num(actor, "Intensity", 1.0),
        "lodBias": num(actor, "LodBias", -0.5),
        "rotationDeg": num(actor, "RotationDeg", 0.0),
    }
    # ---- clouds ---------------------------------------------------------------
    cloud_tex = prop(actor, "CloudTexture")
    clouds = {
        "file": slot_file("clouds", cloud_tex),
        "color": hex_of(prop(actor, "CloudColor", unreal.LinearColor(1, 1, 1, 1))),
        "opacity": num(actor, "CloudOpacity", 0.5),
        "driftDegPerMin": num(actor, "CloudDriftDegPerMin", 3.0),
        "repeat": num(actor, "CloudRepeat", 2.0),
        "heightScale": num(actor, "CloudHeightScale", 0.35),
    }
    # ---- stars ----------------------------------------------------------------
    stars = {
        "enabled": bool(prop(actor, "StarsEnabled", True)),
        "density": num(actor, "StarDensity", 1.0),
        "brightness": num(actor, "StarBrightness", 1.0),
        "twinkleSpeed": num(actor, "StarTwinkleSpeed", 1.0),
        "color": hex_of(prop(actor, "StarColor", unreal.LinearColor(0.73, 0.80, 1.0, 1))),
        "horizonFade": num(actor, "StarHorizonFade", 0.25),
    }
    enabled = mode != "none" or clouds["file"] is not None or stars["enabled"]
    sky = {"enabled": enabled, "base": base, "clouds": clouds, "stars": stars}

    # ---- moon -----------------------------------------------------------------
    moon_label = str(prop(actor, "MoonActorLabel", "Moon") or "Moon")
    moon = {"actor": moon_label, "found": False, "intensityOverride": num(actor, "MoonIntensity", 0.6)}
    for a in sub.get_all_level_actors():
        if a.get_actor_label() != moon_label: continue
        comp = a.get_component_by_class(unreal.DirectionalLightComponent)
        if comp is None: continue
        rot = a.get_actor_rotation()
        moon.update({
            "found": True,
            "sourceAngleDeg": num(comp, "light_source_angle", 1.5),
            "intensityLux": num(comp, "intensity", 0.0),
            "temperature": num(comp, "temperature", 0.0) if bool(prop(comp, "use_temperature", False)) else None,
            "color": hex_of(prop(comp, "light_color", unreal.Color(255, 255, 255, 255))),
            "rotator": {"roll": rot.roll, "pitch": rot.pitch, "yaw": rot.yaw},
        })
        break
    if not moon["found"]:
        log("WARNING no DirectionalLight actor labelled %s: softDeg falls back to the importer default" % moon_label)

    doc = {
        "level": LEVEL_ID,
        "generatedAt": datetime.datetime.now().isoformat(),
        "actor": actor.get_actor_label(),
        "sky": sky,
        "moon": moon,
        "textures": textures,
    }
    out = os.path.join(out_dir, "sky.json")
    json.dump(doc, open(out, "w"), indent=1)
    log("DONE sky %s base=%s clouds=%s stars=%s moon=%s softDeg=%s intensity=%s -> %s" % (
        "on" if enabled else "OFF", mode, clouds["file"], stars["enabled"], moon["found"], moon.get("sourceAngleDeg"), moon["intensityOverride"], out))
except Exception:
    log("EXC " + traceback.format_exc())
open(DONE, "w").write("ok")
