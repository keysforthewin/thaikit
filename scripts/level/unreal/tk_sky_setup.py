"""
One-time project setup for the thaikit sky in Unreal: builds `M_TK_SkyPanorama`,
the unlit two-sided material `BP_TK_Sky`'s preview sphere wears.

Run INSIDE the Unreal editor (console box: `py <path>/tk_sky_setup.py`).
Idempotent: re-running rebuilds the material's graph from scratch.

The material samples an equirectangular panorama by WORLD DIRECTION from the
camera -- the same lookup thaikit's `buildSky` dome does -- so the
level artist sees the skybox they picked on BP_TK_Sky. Parameters (set by the
Blueprint's construction script from its own fields):
  Panorama (texture), RotationDeg, ElevMinDeg, ElevMaxDeg, NadirStartDeg,
  NadirEndDeg, NadirColor, Intensity -- plus PreviewBoost, an exposure
  compensation for the Unreal viewport only (see PREVIEW_BOOST).
Clouds and stars are thaikit-only and are not previewed here.

Direction -> uv: Unreal's glTF exporter maps a UE vector (X, Y, Z) to glTF
(X, Z, Y), so three's `u = atan2(z, x)` is `atan2(Y, X)` here and the
elevation comes off Z. The V direction and the bearing sign were checked
against the thaikit editor rendering the same panorama; see
docs/unreal-level-export.md.
"""
import unreal, traceback

MAT_PATH = "/Game/ThaiKit/Sky"
MAT_NAME = "M_TK_SkyPanorama"
DEFAULT_PANORAMA = "/Game/ThaiKit/Sky/T_ThePurge_Panorama"
PREVIEW_BOOST = 128.0  # 1 / the importer's --light-scale for this project
LOG = r"C:\tk\tk_sky_setup.log"
DONE = r"C:\tk\tk_sky_setup.done"

MEL = unreal.MaterialEditingLibrary
lines = []
def log(s):
    lines.append(str(s)); unreal.log("[thaikit] " + str(s))
    try: open(LOG, "w").write("\n".join(lines))
    except Exception: pass

HLSL = """
float3 d = normalize(wp - op);
float elev = degrees(asin(clamp(d.z, -1.0, 1.0)));
float u = frac(atan2(d.y, d.x) / (2.0 * PI) + 0.5 + rot / 360.0);
float v = 1.0 - saturate((elev - emin) / max(emax - emin, 0.001));
float below = saturate((-elev - nstart) / max(nend - nstart, 0.35));
return float4(u, v, below, 0.0);
"""

def expr(mat, cls, x, y):
    return MEL.create_material_expression(mat, cls, x, y)

def scalar_param(mat, name, value, x, y):
    e = expr(mat, unreal.MaterialExpressionScalarParameter, x, y)
    e.set_editor_property("parameter_name", name); e.set_editor_property("default_value", value)
    return e

def build(mat):
    MEL.delete_all_material_expressions(mat)
    mat.set_editor_property("shading_model", unreal.MaterialShadingModel.MSM_UNLIT)
    mat.set_editor_property("two_sided", True)
    mat.set_editor_property("blend_mode", unreal.BlendMode.BLEND_OPAQUE)

    wp = expr(mat, unreal.MaterialExpressionWorldPosition, -1400, -200)
    # From the CAMERA, not the sphere's centre: the dome sits 200 m under the
    # street with a 700 m radius, so a centre-relative lookup put the plate's
    # horizon 16 degrees below the true one at street level (measured 18 at
    # 250 m up). Camera-relative, the sphere is a pure direction lookup like
    # three's dome, wherever it sits.
    op = expr(mat, unreal.MaterialExpressionCameraPositionWS, -1400, -50)
    rot = scalar_param(mat, "RotationDeg", 0.0, -1400, 100)
    emin = scalar_param(mat, "ElevMinDeg", -90.0, -1400, 220)
    emax = scalar_param(mat, "ElevMaxDeg", 90.0, -1400, 340)
    nstart = scalar_param(mat, "NadirStartDeg", 0.0, -1400, 460)
    nend = scalar_param(mat, "NadirEndDeg", 0.35, -1400, 580)

    custom = expr(mat, unreal.MaterialExpressionCustom, -1000, 0)
    custom.set_editor_property("code", HLSL)
    custom.set_editor_property("output_type", unreal.CustomMaterialOutputType.CMOT_FLOAT4)
    custom.set_editor_property("description", "equirect uv + nadir mask")
    inputs = []
    for n in ("wp", "op", "rot", "emin", "emax", "nstart", "nend"):
        ci = unreal.CustomInput(); ci.set_editor_property("input_name", n); inputs.append(ci)
    custom.set_editor_property("inputs", inputs)
    for e, n in ((wp, "wp"), (op, "op"), (rot, "rot"), (emin, "emin"), (emax, "emax"), (nstart, "nstart"), (nend, "nend")):
        MEL.connect_material_expressions(e, "", custom, n)

    uv = expr(mat, unreal.MaterialExpressionComponentMask, -700, -100)
    uv.set_editor_property("r", True); uv.set_editor_property("g", True); uv.set_editor_property("b", False); uv.set_editor_property("a", False)
    MEL.connect_material_expressions(custom, "", uv, "")
    below = expr(mat, unreal.MaterialExpressionComponentMask, -700, 150)
    below.set_editor_property("r", False); below.set_editor_property("g", False); below.set_editor_property("b", True); below.set_editor_property("a", False)
    MEL.connect_material_expressions(custom, "", below, "")

    tex = expr(mat, unreal.MaterialExpressionTextureSampleParameter2D, -500, -150)
    tex.set_editor_property("parameter_name", "Panorama")
    default_tex = unreal.load_asset(DEFAULT_PANORAMA)
    if default_tex: tex.set_editor_property("texture", default_tex)
    tex.set_editor_property("sampler_source", unreal.SamplerSourceMode.SSM_WRAP_WORLD_GROUP_SETTINGS)
    MEL.connect_material_expressions(uv, "", tex, "UVs")

    nadir = expr(mat, unreal.MaterialExpressionVectorParameter, -500, 150)
    nadir.set_editor_property("parameter_name", "NadirColor"); nadir.set_editor_property("default_value", unreal.LinearColor(0, 0, 0, 1))

    lerp = expr(mat, unreal.MaterialExpressionLinearInterpolate, -250, 0)
    MEL.connect_material_expressions(tex, "RGB", lerp, "A")
    MEL.connect_material_expressions(nadir, "", lerp, "B")
    MEL.connect_material_expressions(below, "", lerp, "Alpha")

    inten = scalar_param(mat, "Intensity", 1.0, -250, 200)
    mul = expr(mat, unreal.MaterialExpressionMultiply, -50, 0)
    MEL.connect_material_expressions(lerp, "", mul, "A")
    MEL.connect_material_expressions(inten, "", mul, "B")
    # The level is seen through an exposure calibrated for lamps in candela and
    # a 16 lux moon, under which an emissive of 0..1 is black. three shows the
    # same panorama at intensity 1 beside lamps scaled by --light-scale
    # (1/128), so the preview multiplies by the inverse. Preview only: nothing
    # of this reaches the sidecar or the bake.
    boost = scalar_param(mat, "PreviewBoost", PREVIEW_BOOST, -250, 320)
    mul2 = expr(mat, unreal.MaterialExpressionMultiply, 100, 0)
    MEL.connect_material_expressions(mul, "", mul2, "A")
    MEL.connect_material_expressions(boost, "", mul2, "B")
    MEL.connect_material_property(mul2, "", unreal.MaterialProperty.MP_EMISSIVE_COLOR)
    MEL.recompile_material(mat)

try:
    full = MAT_PATH + "/" + MAT_NAME
    mat = unreal.load_asset(full)
    if mat is None:
        tools = unreal.AssetToolsHelpers.get_asset_tools()
        mat = tools.create_asset(MAT_NAME, MAT_PATH, unreal.Material, unreal.MaterialFactoryNew())
        log("created %s" % full)
    build(mat)
    unreal.EditorAssetLibrary.save_asset(full, only_if_is_dirty=False)
    log("DONE %s built and saved" % full)
except Exception:
    log("EXC " + traceback.format_exc())
open(DONE, "w").write("ok")
