"""Author a sculpt spec for a thaikit shop / branch building.

WHAT IS SHARED AND WHAT IS NOT. Nine of these are pending at an identical declared size
(8 x 4.6 x 7 m) and four siblings already ship, so the STRUCTURE is genuinely common: a render
shell, a parapet standing above a flat roof deck, a fascia band carrying the brand, a glazed
shopfront under it, a service door on the flank, and rooftop plant. That much is evidence about
the building type.

The PALETTE is not shared and must never be. Two convenience stores have the same shape and
different greens, and a colour copied from a sibling's spec is a number nobody measured wearing
the appearance of one. Every material here takes its albedo from this asset's own plate, via
crops that were rendered to a contact sheet and looked at before any value was read, and each
carries the luma spread that says whether the crop sat on one surface or straddled two.

BUDGET (hero2x: 16000 tris / 12 draws / 8 materials / 8 geometries). The binding axis is
geometries and materials, not triangles -- the generator bakes each component's dimensions into
its vertex data, so every box is a distinct geometry however similar it looks. Designed to the
ceiling in the blockout: eight components, seven materials, and the brand graphics carried as a
canvas on the fascia material rather than as extra materials or proud panels.
"""
import copy, json, math

def rgba(h, a=1.0):
    h = h.lstrip("#")
    return f"rgba({int(h[0:2],16)}, {int(h[2:4],16)}, {int(h[4:6],16)}, {a})"

def lift(hex_color, factor):
    """Raise a shaded crop's value toward the albedo it would read at in full key.

    A crop taken on a shaded elevation measures that surface UNDER FILL, not its albedo. The
    lift is stated per material with the reason, so the authored number can be traced back to
    the measured one rather than appearing from nowhere.
    """
    h = hex_color.lstrip("#")
    c = [min(255, round(int(h[i:i+2], 16) * factor)) for i in (0, 2, 4)]
    return "#" + "".join(f"{v:02x}" for v in c)


def make_material(proto, m):
    """One material from a measured entry.

    `m` carries: id, name, color, roughness, metalness, evidence (list of strings that each
    name a crop, a measurement or the reason a measurement was refused), plus optional
    opacity/transparent for glazing.
    """
    mat = copy.deepcopy(proto)
    for f in ("textureResolution", "referencePbr", "textureProjection",
              "surfaceFrequencyBands", "normal", "bump", "displacement"):
        mat.pop(f, None)
    color = m["color"]
    mat.update(id=m["id"], name=m["name"], baseColor=color, color=color)
    mat["albedo"] = {"dominant": color, "secondary": m.get("secondary", [color]),
        "samplingNotes": m["sampling"]}
    mat["colorVariation"] = {"palette": [color] + m.get("secondary", []),
        "pattern": "mottled", "amplitude": 0.05, "heightCorrelation": 0.0}
    mat["roughness"] = {"base": m["roughness"], "variation": 0.05, "map": "none",
        "localResponse": m.get("roughnessNote", "Scalar; this surface has no cavity or "
                               "edge-wear response worth a channel at prop distance.")}
    mat["metalness"] = {"base": m.get("metalness", 0.0), "variation": 0.0}
    mat["ambientOcclusion"] = {"cavityStrength": 0.0, "contactShadowBias": 0.0,
        "notes": "No AO channel; the shell's own cast shadows carry the occlusion read."}
    mat["wear"] = {"edgeWear": 0.0, "scratches": [], "chips": []}
    mat["dirt"] = {"amount": m.get("dirt", 0.0), "cavityBias": 0.0, "color": "#4A4640"}
    mat["textureless"] = {"declared": True, "evidence": m["evidence"]}
    mat["shaderNotes"] = m.get("notes", [])
    mat["localOverrides"] = m.get("overrides", [])
    if "opacity" in m:
        mat["opacity"] = m["opacity"]
        mat["transparent"] = True
        mat["opacityNote"] = m["opacityNote"]
    return mat


def make_component(proto, c):
    comp = copy.deepcopy(proto)
    comp.update(id=c["id"], name=c["name"], level=c.get("level", "macro"),
        role=c.get("role", "body"), primitive=c["primitive"],
        topologyClass=c.get("topology", "assembled-solid"),
        topologyRationale=c["rationale"], importance=c.get("importance", 0.6),
        confidence=c.get("confidence", 0.8), material=c["material"],
        materialLayers=[c["material"]], localFeatures=c["features"],
        parent=None, attachment=None)
    d = c["dims"]
    comp["dimensions"] = {"width": d[0], "height": d[1], "depth": d[2],
                          "units": "meters", "confidence": c.get("confidence", 0.8)}
    comp["transform"] = {"position": c["pos"], "rotation": list(c.get("rotation", (0, 0, 0))),
                         "scale": c.get("scale", d)}
    if "descriptor" in c:
        comp["geometryDescriptor"].update(c["descriptor"])
    ap = comp["actionProfile"]
    root = c.get("collider") is not None
    ap["animationRole"] = "root" if root else "static"
    ap["pivot"] = {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0],
        "confidence": 1.0,
        "note": ("The ONLY pivot on this prop. A shop building is static level geometry: no part "
                 "turns on an axis, so a second pivot would promise a mechanism that does not "
                 "exist. The roller shutter and the doors are modelled closed and do not open.")
                if root else "Inherited placement only; this component declares no axis."}
    ap["transformChannels"] = {"translate": root, "rotate": root, "scale": False, "bend": False,
        "twist": False, "detach": False, "visibility": True, "materialState": False}
    ap["sockets"] = []
    ap["collider"] = c.get("collider")
    ap["destruction"] = {"breakable": False, "fractureGroup": None, "seamRefs": [],
        "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": c["material"]}
    comp["colorMaterialRecipe"] = c["recipe"]
    return comp
