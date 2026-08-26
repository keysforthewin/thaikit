"""Author a strict-quality sculpt spec for a thaikit modular street tile.

WHY THIS EXISTS. Ten tiles share one kit contract and one structural idea, and hand-writing
ten specs is ten chances to get the mating profile wrong by a centimetre -- which is the one
error that makes the whole kit worthless, because a tile that does not mate is not a tile.
The profile constants live here ONCE and every tile derives from them.

THE STRUCTURE, and why it is the same for every piece:

    base          a plain slab, y -0.20 .. -0.02, concrete. The skirt, under everything.
    deck          the 8x8 footprint extruded y -0.02 .. +0.15 WITH THE ROAD REGION AS A HOLE,
                  concrete. Sidewalks and kerbs both fall out of this one extrusion: the
                  hole's walls ARE the kerb risers, so they cannot drift out of alignment
                  with the carriageway they face.
    carriageway   the road region itself, y -0.02 .. 0.00, asphalt. Exactly the deck's hole,
                  so it fills it as an inlay of OPPOSED faces -- a butt joint, not a z-fight.

That is 3 draw calls, 3 unique geometries and 2 materials before a tile spends anything on
what makes it that particular tile, which leaves room inside the large class (4/3/3) for one
piece of hardware. Changing the road region is the ONLY thing that changes between a
straight, a curve, a T and a crossroads.
"""
import copy, json, math

# ---- the kit contract. Nothing below may be edited per tile. --------------------------
HALF      = 4.0     # 8 m module: tiles snap on 8 m centres
SW        = 1.25    # raised sidewalk each side
CW_HALF   = 2.75    # carriageway half-width -> 5.5 m two lanes
Y_BOT     = -0.20   # underside of the slab
Y_BED     = -0.02   # carriageway bed floor / top of the base slab
Y_ROAD    =  0.00   # THE DATUM every tile mates on
Y_KERB    =  0.15   # sidewalk top
# Radiused corner sidewalk return, so a turning vehicle can clear it. The CEILING is
# HALF - CW_HALF = 1.25, and at exactly that value the fillet's centre lands on the tile
# corner, its two tangent points land on the tile edges, and the corner island stops being a
# 1.25 m square with a rounded inner corner and becomes a bare quarter-disc -- the whole
# island eaten by its own fillet. 0.75 leaves the island a real body to be.
CORNER_R  = 0.75

# soi half-module: a different profile that mates only with the alley pieces
SOI_HALF   = 2.0
SOI_W_HALF = 1.5    # 3 m shared surface
SOI_Y_BOT  = -0.20
SOI_Y_BED  = -0.02
SOI_Y_EDGE =  0.10  # raised edge, not a kerb: a soi has no separated sidewalk


def arc(cx, cz, r, a0, a1, steps=6):
    """Points along an arc. Corner returns are radiused rather than square because a vehicle
    prop turning into a branch has to clear them -- and because a square return reads as a
    kerb someone forgot to finish."""
    return [[cx + r * math.cos(a0 + (a1 - a0) * i / steps),
             cz + r * math.sin(a0 + (a1 - a0) * i / steps)] for i in range(steps + 1)]


def square(h=HALF):
    """Footprint rectangle. `h` is a half-extent, or a (half_x, half_z) pair for the soi
    pieces, which are half-module in width but full-module in run."""
    hx, hz = h if isinstance(h, (tuple, list)) else (h, h)
    return [[-hx, -hz], [hx, -hz], [hx, hz], [-hx, hz]]


# ---------------------------------------------------------------------------------------
# Road regions. This is the ONLY thing that differs between a straight, a curve and a T.
# All coordinates are (x, z) in metres, tile-centred. Concave corners are filleted because
# a square sidewalk return is one a turning vehicle cannot clear.
# ---------------------------------------------------------------------------------------

def _fillet(cx, cz, r, a0deg, a1deg, steps=8):
    return arc(cx, cz, r, math.radians(a0deg), math.radians(a1deg), steps)


def region_straight(w=CW_HALF, h=HALF):
    return [[-w, -h], [w, -h], [w, h], [-w, h]]


def region_crossroads(w=CW_HALF, h=HALF, r=CORNER_R):
    """A plus, with all four concave returns filleted. Rotationally symmetric on all four
    edges, which is what lets this piece close a street grid at any of four orientations."""
    p = [[-w, -h], [w, -h]]
    p += _fillet(w + r, -w - r, r, 180, 90)
    p += [[h, -w], [h, w]]
    p += _fillet(w + r, w + r, r, 270, 180)
    p += [[w, h], [-w, h]]
    p += _fillet(-w - r, w + r, r, 0, -90)
    p += [[-h, w], [-h, -w]]
    p += _fillet(-w - r, -w - r, r, 90, 0)
    return p


def region_t_junction(w=CW_HALF, h=HALF, r=CORNER_R):
    """Three live edges, fourth a continuous sidewalk run. Fixed orientation: unlike the
    straight and the crossroads this piece CANNOT be rotated freely."""
    p = [[-w, -h], [w, -h]]
    p += _fillet(w + r, -w - r, r, 180, 90)
    p += [[h, -w], [h, w], [-h, w], [-h, -w]]
    p += _fillet(-w - r, -w - r, r, 90, 0)
    return p


def region_curve(w=CW_HALF, h=HALF):
    """Quarter turn inside one module. The centreline is tangent to +z at the south edge and
    to +x at the east edge, which puts its centre at the (h, -h) corner with radius h. The
    inner return is therefore TIGHT (h - w) and the outer one WIDE (h + w) -- that asymmetry
    IS the piece, and evening it out would stop the carriageway being a constant 5.5 m
    through the turn, at which point the tile no longer mates at both edges."""
    cx, cz = h, -h
    p = [[-w, -h]]
    p += arc(cx, cz, h + w, math.pi, math.pi / 2, 24)      # outer, wide return
    p += [[h, -w]] if False else []
    p += arc(cx, cz, h - w, math.pi / 2, math.pi, 12)      # inner, tight return
    return p


def region_dead_end(w=CW_HALF, h=HALF):
    """One live edge; the other three closed. The carriageway ends in a rounded turning head
    so the sidewalk can wrap continuously across the closed end -- a player walking the
    pavement is never dropped into the road."""
    head = 1.0
    p = [[-w, -h], [w, -h]]
    p += arc(0.0, head, w, 0.0, math.pi, 20)
    return p


def region_crosswalk(w=CW_HALF, h=HALF):
    """Straight carriageway plus a full-depth crossing band. The band cuts the sidewalk down
    to road level rather than ramping to it: this factory has no sloped-solid primitive, and a
    flush cut is the honest simplification -- what must NOT happen is a crossing painted onto
    a full-height kerb, which is a crossing nothing can step across. Both MATING edges (z=+-h)
    keep the full profile; only the x edges, which face buildings, are interrupted."""
    band = 1.6
    return [[-w, -h], [w, -h], [w, -band], [h, -band], [h, band], [w, band],
            [w, h], [-w, h], [-w, band], [-h, band], [-h, -band], [-w, -band]]


def region_soi_entrance(w=CW_HALF, h=HALF, r=CORNER_R):
    """A T of full road edges with a soi mouth opening off the fourth. The alley occupies the
    EASTERN HALF-MODULE of that edge (x 0.5..3.5 paved, 0..4 including its raised edges), which
    is both off-centre -- a soi is a gap between buildings, not a designed junction -- and
    exactly on the half-module grid the alley pieces snap to."""
    p = [[-w, -h], [w, -h]]
    p += _fillet(w + r, -w - r, r, 180, 90)
    p += [[h, -w], [h, w], [3.5, w], [3.5, h], [0.5, h], [0.5, w], [-h, w], [-h, -w]]
    p += _fillet(-w - r, -w - r, r, 90, 0)
    return p


def region_soi_straight(w=SOI_W_HALF, h=HALF):
    return [[-w, -h], [w, -h], [w, h], [-w, h]]


def region_soi_corner(w=SOI_W_HALF, h=SOI_HALF):
    cx, cz = h, -h
    p = [[-w, -h]]
    p += arc(cx, cz, h + w, math.pi, math.pi / 2, 20)
    p += arc(cx, cz, h - w, math.pi / 2, math.pi, 10)
    return p


# ---------------------------------------------------------------------------------------
# Spec assembly
# ---------------------------------------------------------------------------------------

def rgba(h, a=1.0):
    h = h.lstrip("#")
    return f"rgba({int(h[0:2],16)}, {int(h[2:4],16)}, {int(h[4:6],16)}, {a})"


MAT_EVIDENCE = {
 "concrete": [
   "Reference region: the sidewalk top and the kerb face below it on the straight tile's plate. "
   "A broad value falloff with NO specular lobe and no resolvable grain at 1024 - a flat matte "
   "dielectric.",
   "Measured: the warm ochre patches on the kerb are localised stain, not albedo variation of the "
   "material, so they do not justify a texture set.",
   "Cost measurement carried from the 7-Eleven: declaring textureless took createObjectModel from "
   "24,180 ms to 23 ms, and the cost scales as the SQUARE of textureResolution."],
 "asphalt": [
   "Reference region: the carriageway band between the two kerbs. No specular lobe anywhere on it "
   "under a strong key - a fully matte worn bituminous surface.",
   "Measured: the asphalt sits about one value step below the concrete and two below the paint. "
   "That three-step ramp is what carries the read at prop distance, and it is an albedo "
   "relationship rather than a texture one.",
   "The synthesised-texture path is refused for a CORRECTNESS reason as well as a cost one: "
   "whenever a generated texture set exists the generator forces color to white and roughness to "
   "1 and reads both from the generated maps, discarding the authored albedo."],
 "cast-iron": [
   "Reference region: the drain inlet at the kerb foot. Saturated orange-brown with NO metallic "
   "lobe - the specular response of a rough dielectric, which is what fully oxidised iron is.",
   "Measured: mid value, mid saturation, and the only saturated hue on the prop."],
 "barrier-paint": [
   "Reference region: none on this plate - the terminator's barrier is required by the asset's "
   "own description rather than visible in a single view. Authored as flat hazard paint on steel: "
   "a solid two-value albedo with no grain, which is what road furniture paint is.",
   "Measured against the concrete: it must sit ABOVE the concrete in value or the barrier stops "
   "reading as a warning and becomes another kerb."],
}

MAT_NOTES = {
 "concrete": [
   "MeshStandardMaterial. Flat dielectric, metalness 0.",
   "Sidewalk paving joints are deliberately NOT geometry and NOT a texture: on an 8 m tile viewed "
   "from standing height they fall below the geometric-relief threshold, and synthesising five "
   "canvases to carry them would cost more frame time than the detail is worth."],
 "asphalt": [
   "MeshStandardMaterial. Flat dielectric, metalness 0.",
   "color is WHITE by design and the surface colour lives in a canvas map assigned AFTER material "
   "construction, the route this kit reserves for PRINTED GRAPHICS. Road markings ARE printed "
   "graphics: they have no thickness, so putting them in the albedo is not a shortcut but the "
   "physically correct representation, and it is what makes a coplanar co-facing quad over the "
   "asphalt unnecessary.",
   "The canvas is drawn with fillRect calls, not pixel by pixel: microseconds, not the seconds "
   "createSculptMaterial's five synthesised canvases cost."],
 "cast-iron": [
   "MeshStandardMaterial. metalness 0 DESPITE being iron: the casting is fully oxidised and rust "
   "is a dielectric oxide. metalness 1 would give it a metal's coloured specular response, which "
   "the plate plainly does not show.",
   "The grate slats come from this material's own canvas albedo, so they cost nothing on any of "
   "the four budget axes."],
 "barrier-paint": [
   "MeshStandardMaterial, metalness 0. Hazard banding comes from the canvas albedo rather than "
   "from a second material or alternating geometry."],
}

MAT_COLOR = {"concrete": ("#B9AE96", ["#A2977F", "#CFC5AC"], 0.88, "stone", 0.93),
             "asphalt":  ("#FFFFFF", ["#4E4E55", "#474751"], 0.93, "stone", 0.88),
             "cast-iron":("#6E4A32", ["#5E3F2A", "#241811"], 0.90, "metal", 0.72),
             "barrier-paint":("#FFFFFF", ["#D8402E", "#E8E6E0"], 0.80, "metal", 0.70)}


def make_material(proto, mid):
    color, secondary, rough, _cls, _conf = MAT_COLOR[mid]
    m = copy.deepcopy(proto)
    for f in ("textureResolution", "referencePbr", "textureProjection",
              "surfaceFrequencyBands", "normal", "bump", "displacement"):
        m.pop(f, None)
    m.update(id=mid, name=mid, baseColor=color, color=color)
    m["albedo"] = {"dominant": color, "secondary": secondary,
        "samplingNotes": "Read off the plate as flat local zones. No baked key highlight or "
                         "contact shadow is carried into base colour."}
    m["colorVariation"] = {"palette": [color] + secondary, "pattern": "mottled",
                           "amplitude": 0.06, "heightCorrelation": 0.0}
    m["roughness"] = {"base": rough, "variation": 0.05, "map": "none",
        "localResponse": "uniform; a flat dielectric with no cavity or edge-wear response worth "
                         "a channel"}
    m["metalness"] = {"base": 0.0, "variation": 0.0}
    m["ambientOcclusion"] = {"cavityStrength": 0.0, "contactShadowBias": 0.0,
        "notes": "No AO channel: nothing on this prop is a cavity at prop distance."}
    m["wear"] = {"edgeWear": 0.0, "scratches": [], "chips": []}
    m["dirt"] = {"amount": 0.08 if mid == "concrete" else 0.0, "cavityBias": 0.0, "color": "#3A342A"}
    m["textureless"] = {"declared": True, "evidence": MAT_EVIDENCE[mid]}
    m["shaderNotes"] = MAT_NOTES[mid]
    m["localOverrides"] = []
    return m


def make_component(proto, cid, name, level, role, primitive, topo, rationale,
                   dims, pos, scale, mat, importance, conf, features, descriptor=None,
                   collider=None, recipe=None, rotation=(0, 0, 0)):
    c = copy.deepcopy(proto)
    c.update(id=cid, name=name, level=level, role=role, primitive=primitive,
             topologyClass=topo, topologyRationale=rationale, importance=importance,
             confidence=conf, material=mat, materialLayers=[mat],
             localFeatures=features, parent=None, attachment=None)
    c["dimensions"] = {"width": dims[0], "height": dims[1], "depth": dims[2],
                       "units": "meters", "confidence": conf}
    c["transform"] = {"position": pos, "rotation": list(rotation), "scale": scale}
    if descriptor:
        c["geometryDescriptor"].update(descriptor)
    ap = c["actionProfile"]
    root = collider is not None
    ap["animationRole"] = "root" if root else "static"
    ap["pivot"] = {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0],
        "confidence": 1.0,
        "note": ("The ONLY pivot on this prop. A street tile is static level geometry: nothing "
                 "turns, so a second pivot would promise a mechanism that does not exist.")
                if root else
                "Inherited placement only. This component declares no independent axis."}
    ap["transformChannels"] = {"translate": root, "rotate": root, "scale": False, "bend": False,
        "twist": False, "detach": False, "visibility": True, "materialState": False}
    ap["sockets"] = []
    ap["collider"] = collider
    ap["destruction"] = {"breakable": False, "fractureGroup": None, "seamRefs": [],
        "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": mat}
    color, secondary, _r, cls, cconf = MAT_COLOR[mat]
    c["colorMaterialRecipe"] = recipe or {
        "dominant": color, "secondary": secondary,
        "zones": [{"id": mat, "albedo": color, "note": "flat local zone"}],
        "finishStyle": "matte", "gradientStops": [],
        "dominantAlbedo": rgba(color), "secondaryAlbedo": rgba(secondary[0]),
        "materialClass": cls, "materialClassConfidence": cconf}
    return c


def inset_hole(region, half, eps=0.004):
    """Shrink the deck's hole so the deck OVERLAPS the surface that fills it.

    Authored identically, the hole's wall and the surface's outer wall are coincident over the
    full height of the kerb. They face opposite ways, which is normally a clean butt joint, but
    the pair still tore into a moire band down the soi corner's east edge -- and where the road
    reaches the tile boundary the hole is also tangent to its own outer contour, which makes the
    shape non-simple and triangulates that span twice.

    Both go away by making the hole a few millimetres smaller than the surface everywhere, which
    is the kit's standing rule stated the other way round: make a frame OVERLAP the opening it
    fills rather than meet its reveal edge exactly. The SURFACE keeps the true region, so the
    tile still measures its full module and still mates; what changes is a 4 mm concrete lip at
    the road opening -- two orders of magnitude under the 0.10 m scale tolerance.

    Scaling about the region's own centroid rather than offsetting along vertex bisectors: every
    point moves inward, no vertex order can invert, and it needs no special case for the arcs.
    """
    hx, hz = half if isinstance(half, (tuple, list)) else (half, half)
    cx = sum(p[0] for p in region) / len(region)
    cz = sum(p[1] for p in region) / len(region)
    span = max(max(abs(p[0] - cx) for p in region), max(abs(p[1] - cz) for p in region), 1e-6)
    k = 1.0 - eps / span
    return [[cx + (x - cx) * k, cz + (z - cz) * k] for x, z in region]


def build(spec, *, region, half=HALF, y_bot=Y_BOT, y_bed=Y_BED, y_top=Y_KERB,
          merge_base=False,
          extras=(), materials=("concrete", "asphalt"), budget=None,
          region_name="carriageway", surface_word="carriageway", edge_word="kerb",
          assumptions=(), features=(), risks=()):
    """Fill a seeded spec with the base / deck / carriageway structure plus any extras."""
    proto_c = copy.deepcopy(spec["componentTree"][0])
    proto_m = copy.deepcopy(spec["materials"][0])
    # merge_base: drop the separate skirt slab and extrude the deck the FULL height, so the
    # surface fills its hole all the way down. Two components instead of three, which is what
    # lets the soi pieces hold the medium class's 2 draw calls. It is free visually: the
    # surface's full-depth side faces only ever show at the END of an alley run, because along
    # the run the deck's own raised edges cover them.
    if merge_base:
        y_bed = y_bot
    base_h = y_bed - y_bot
    deck_h = y_top - y_bed
    hx, hz = half if isinstance(half, (tuple, list)) else (half, half)
    side_x, side_z = hx * 2, hz * 2

    comps = []
    base = [
      make_component(proto_c, "tile-base", "Substrate slab", "macro", "body", "box",
        "assembled-solid",
        "The skirt under everything, a plain slab of constant thickness. Genuinely a box: flat "
        "rigid faces with nothing to sweep or revolve.",
        # 6 mm narrower than the deck, so the deck OVERHANGS it instead of sharing its outer
        # silhouette edge. Flush, the two walls are coplanar and co-facing and meet edge-on at
        # y=-0.02: not an overlap, and below check-coplanar's sliver threshold, but still a
        # shared edge the depth buffer stipples at a grazing angle. It is also how a slab
        # actually sits on its foundation. The DECK defines the footprint, so the module is
        # unchanged.
        [side_x - 0.012, base_h, side_z - 0.012], [0, (y_bot + y_bed) / 2, 0],
        [side_x - 0.012, base_h, side_z - 0.012],
        "concrete", 0.8, 0.95,
        [{"id": "substrate-skirt", "description":
          f"Vertical concrete skirt from y={y_bot:.2f} to y={y_bed:.2f} on all four sides. It is "
          "what makes the piece read as a cut section of street rather than a decal on the ground.",
          "evidenceRefs": ["full-object"]}],
        collider={"type": "box", "offset": [0, (y_bot + y_top) / 2, 0],
          "scale": [side_x, y_top - y_bot, side_z], "isTrigger": False,
          "notes": "The asset's declared collider. One box over the whole footprint: a tile is "
                   f"walked and driven on, and the {edge_word} step sits inside the box, which is "
                   "the correct cheap proxy for level geometry."})]
    if not merge_base:
        comps += base
    comps += [
      make_component(proto_c, "tile-deck", f"Deck, sidewalks and {edge_word}s", "macro", "body",
        "extrude", "assembled-solid",
        f"The footprint extruded with the {surface_word} region as a HOLE. This is the decision "
        f"the whole kit rests on: the hole's walls ARE the {edge_word} risers, so they cannot "
        f"drift out of alignment with the {surface_word} they face, and the mating edge profile "
        "is identical on every live edge by construction rather than by hand-matching.",
        [side_x, deck_h, side_z], [0, y_top, 0], [1, 1, 1],
        "concrete", 1.0, 0.95,
        [{"id": "edge-profile", "description":
          f"The mating profile. If this is wrong by a centimetre the tile does not meet its "
          "siblings and the piece is worthless however it looks.", "evidenceRefs": ["full-object"]},
         {"id": "kerb-riser", "description":
          f"{deck_h:.2f} m vertical riser separating the sidewalk top (y={y_top:.2f}) from the "
          f"{surface_word} (y={Y_ROAD:.2f}), formed by the hole wall.",
          "evidenceRefs": ["full-object"]}],
        descriptor={"topologyIntent": "footprint extrusion with the road region as a hole",
          "profile2D": {"points": square(half), "depth": deck_h,
                        "holes": [inset_hole(region, half)]}},
        rotation=(math.pi / 2, 0, 0),
        recipe={"dominant": "#B9AE96", "secondary": ["#A2977F", "#CFC5AC"],
          "zones": [{"id": "sidewalk-top", "albedo": "#C4B9A0",
                     "note": "the brightest planes on the prop under the key"},
                    {"id": f"{edge_word}-face", "albedo": "#A2977F",
                     "note": "a half value step down from the sidewalk top; this is what makes "
                             "the step read as a step"}],
          "finishStyle": "matte", "gradientStops": [],
          "dominantAlbedo": rgba("#B9AE96"), "secondaryAlbedo": rgba("#A2977F"),
          "materialClass": "stone", "materialClassConfidence": 0.93},
        collider=(base[0]["actionProfile"]["collider"] if merge_base else None)),

      make_component(proto_c, region_name, f"{surface_word.capitalize()} surface", "macro",
        "surface", "extrude", "assembled-solid",
        f"Exactly the deck's hole, extruded {abs(y_bed) + 0.01:.3f} m -- 10 mm deeper than the bed "
        "so it EMBEDS into the base slab rather than resting flush on it. It fills the recess as an inlay of "
        "OPPOSED faces -- its underside faces DOWN onto the base's top, which faces UP -- and an "
        "opposed butt joint is how solids are meant to meet. Nothing here is coplanar and "
        "co-facing.",
        [side_x, abs(y_bed) + 0.01, side_z], [0, Y_ROAD, 0], [1, 1, 1],
        "asphalt", 0.9, 0.92,
        [{"id": "marking-run", "description":
          "Lane markings live in this material's canvas albedo, NOT as proud quads. A painted "
          "marking has no thickness, and a second coplanar surface over the road is the z-fight "
          "this kit has already paid for once.", "evidenceRefs": ["full-object"]}],
        descriptor={"topologyIntent": "road-region extrusion, the deck hole's exact complement",
          # 10 mm DEEPER than the bed, so the surface embeds into the base slab instead of
          # sharing its underside plane with the deck. Authored flush, the deck's underside and
          # the surface's underside both sat at y=-0.02 facing down; their footprints are
          # complementary so nothing actually overlaps, but that is invisible to an
          # envelope test and check-coplanar reported a 64 m2 same-facing pair on every tile.
          # Embedding is also the honest contact type -- a wearing course is laid INTO its bed.
          "profile2D": {"points": region, "depth": abs(y_bed) + 0.01}},
        rotation=(math.pi / 2, 0, 0),
        recipe={"dominant": "#4E4E55", "secondary": ["#474751", "#E8E6E0"],
          "zones": [{"id": "wearing-course", "albedo": "#4E4E55",
                     "note": "one value step below the concrete"},
                    {"id": "paint", "albedo": "#E8E6E0",
                     "note": "the top of the three-step ramp; canvas albedo, not a surface"}],
          "finishStyle": "matte", "gradientStops": [],
          "dominantAlbedo": rgba("#4E4E55"), "secondaryAlbedo": rgba("#474751"),
          "materialClass": "stone", "materialClassConfidence": 0.88}),
    ]
    for e in extras:
        comps.append(make_component(proto_c, **e))
    spec["componentTree"] = comps
    spec["materials"] = [make_material(proto_m, m) for m in materials]
    spec["repetitionSystems"] = []
    spec["performanceBudget"] = dict(budget or {}, qualityPriority="real-time-first",
        textureSize=512, fpsTarget=60,
        optimizationPolicy="Four ceilings, none substituting for another. A street tile is the "
          "most heavily instanced object in the kit -- forty on screen at once -- so draw calls "
          "are the binding axis, not triangles. Designed to the ceilings in the blockout rather "
          "than optimised into them at the end.")
    return spec
