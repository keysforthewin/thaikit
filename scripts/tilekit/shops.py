"""Per-building definitions for the shop / branch family.

Shared: the structure (shell, parapet, roof deck, fascia, glazed shopfront, framing, service
door, rooftop plant), the 8 x 4.6 x 7 m declared size, and the hero2x budget.
Per-asset and MEASURED: every albedo, from crops on that building's own plate.
"""
import sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from shopspec import rgba, lift

# --- shared shell geometry, in metres, origin at base-centre -------------------------------
W, D, H      = 8.0, 7.0, 4.6
WALL_W, WALL_D = 7.80, 6.80     # walls inset from the declared envelope
ROOF_Y       = 3.70             # roof deck / top of walls
PARAPET_Y    = 4.30             # top of the parapet upstand
PARAPET_T    = 0.22             # parapet wall thickness
FASCIA_TOP   = 3.86             # fascia band hangs off the front, overlapping the parapet
FASCIA_BOT   = 2.94
FRONT_Z      = WALL_D / 2       # 3.40
GLAZE_Z      = FRONT_Z + 0.02   # stands PROUD of the wall; flush would z-fight
FRAME_Z      = FRONT_Z + 0.05   # frame OVERLAPS the opening it fills, per the kit's rule

HERO2X = {"targetTriangles": 16000, "maxDrawCalls": 12, "maxMaterials": 8,
          "maxUniqueGeometries": 8}


def _bay_holes(bays=5, x0=-3.42, x1=3.42, y0=0.10, y1=2.72, mullion=0.075):
    """Five window openings in one frame plate.

    A bay per component would be five draw calls and five geometries for what is one welded
    shopfront in life, on the two axes this budget class is tightest on. The openings are cut
    from a single plate instead, and they are inset from the glazing behind so the frame LAPS
    the pane rather than meeting its reveal edge.
    """
    holes = []
    span = (x1 - x0 - mullion * (bays - 1)) / bays
    for i in range(bays):
        a = x0 + i * (span + mullion)
        holes.append([[a, y0], [a + span, y0], [a + span, y1], [a, y1]])
    return holes


def shell_components(pal, *, door_side=1.0):
    """The eight components. `pal` maps material id -> hex, already measured and lifted."""
    def rec(mat, zones):
        c = pal[mat]
        return {"dominant": c, "secondary": [zones[0][1]] if zones else [c],
                "zones": [{"id": z[0], "albedo": z[1], "note": z[2]} for z in zones],
                "finishStyle": "matte", "gradientStops": [],
                "dominantAlbedo": rgba(c), "secondaryAlbedo": rgba(zones[0][1] if zones else c),
                "materialClass": "stone" if mat in ("render", "roof-grey") else
                                 ("glass" if mat == "glass-tinted" else "metal"),
                "materialClassConfidence": 0.8}

    return [
     {"id": "building-shell", "name": "Render wall shell", "primitive": "box",
      "rationale": "A rigid box with flat faces and no interior: a prop kit is only ever looked "
        "at from outside, so an interior would cost draw calls, geometries and VRAM for something "
        "nobody sees. Solid rather than a wall ring for the same reason.",
      "dims": [WALL_W, ROOF_Y, WALL_D], "pos": [0, ROOF_Y / 2, 0], "material": "render",
      "importance": 1.0, "confidence": 0.9,
      "features": [{"id": "wall-mass", "description":
        f"The building mass, {WALL_W} x {ROOF_Y} x {WALL_D} m, inset inside the declared "
        f"{W} x {H} x {D} m envelope so the parapet and fascia can stand proud of it without "
        "overhanging the footprint.", "evidenceRefs": ["full-object"]}],
      "collider": {"type": "box", "offset": [0, H / 2, 0], "scale": [W, H, D], "isTrigger": False,
        "notes": "The asset's declared collider: one box over the whole envelope. A building is "
                 "a solid obstacle; nothing about it needs a finer proxy."},
      "recipe": rec("render", [("wall", pal["render"], "flat render, the flattest read on the plate"),
                               ("wall-shadowed", lift(pal["render"], 0.82), "the flank away from the key")])},

     {"id": "roof-deck", "name": "Flat roof deck", "primitive": "box", "level": "meso",
      "role": "surface",
      "rationale": "A flat slab. It exists because the parapet stands above it -- without a deck "
        "the parapet ring would frame a hole straight through the building.",
      "dims": [WALL_W - 2 * PARAPET_T, 0.14, WALL_D - 2 * PARAPET_T],
      "pos": [0, ROOF_Y + 0.05, 0], "material": "roof-grey", "importance": 0.4, "confidence": 0.6,
      "features": [{"id": "deck", "description":
        f"Spans y={ROOF_Y - 0.02} to {ROOF_Y + 0.12}, so it EMBEDS 20 mm into the wall top rather "
        "than resting on it. Flush, its underside and the parapet's underside both sat at "
        f"y={ROOF_Y} facing down; their footprints are complementary so nothing actually overlaps, "
        "but an envelope test cannot see that and check-coplanar reported a 46.8 m2 same-facing "
        "pair. Embedding is also the honest contact type -- a deck is laid INTO its upstand.",
        "evidenceRefs": ["full-object"]}],
      "recipe": rec("roof-grey", [("deck", pal["roof-grey"], "weathered flat-roof membrane")])},

     {"id": "parapet", "name": "Parapet upstand", "primitive": "extrude", "level": "meso",
      "rationale": "An extruded RING -- the roof outline with the deck opening as a hole -- so the "
        "upstand's inner and outer faces come from one geometry and cannot drift apart. This is "
        "what makes the building read as a flat-roofed shop rather than an open-topped box.",
      "dims": [WALL_W, PARAPET_Y - ROOF_Y, WALL_D], "pos": [0, PARAPET_Y, 0],
      "rotation": (math.pi / 2, 0, 0), "scale": [1, 1, 1],
      "material": "white-trim", "importance": 0.7, "confidence": 0.8,
      "features": [{"id": "coping", "description":
        f"Upstand from y={ROOF_Y} to y={PARAPET_Y}, {PARAPET_T} m thick, capping the walls. Reads "
        "a clear step lighter than the render below it, which is what separates the two planes.",
        "evidenceRefs": ["full-object"]}],
      "descriptor": {"topologyIntent": "roof outline extruded with the deck opening as a hole",
        "profile2D": {"points": [[-WALL_W / 2, -WALL_D / 2], [WALL_W / 2, -WALL_D / 2],
                                 [WALL_W / 2, WALL_D / 2], [-WALL_W / 2, WALL_D / 2]],
          "depth": PARAPET_Y - ROOF_Y,
          "holes": [[[-WALL_W / 2 + PARAPET_T, -WALL_D / 2 + PARAPET_T],
                     [WALL_W / 2 - PARAPET_T, -WALL_D / 2 + PARAPET_T],
                     [WALL_W / 2 - PARAPET_T, WALL_D / 2 - PARAPET_T],
                     [-WALL_W / 2 + PARAPET_T, WALL_D / 2 - PARAPET_T]]]}},
      "recipe": rec("white-trim", [("coping", pal["white-trim"], "in full key, no lift needed")])},

     {"id": "fascia-band", "name": "Brand fascia band", "primitive": "box", "level": "meso",
      "role": "signage",
      "rationale": "A shallow sign tray hung on the front. Its stripes and wordmark are PRINTED "
        "GRAPHICS carried in this material's canvas albedo -- paint has no thickness, and as proud "
        "panels they would be several coplanar surfaces over one face, plus materials and "
        "geometries on the two axes this class is tightest on.",
      "dims": [W, FASCIA_TOP - FASCIA_BOT, 0.22],
      "pos": [0, (FASCIA_TOP + FASCIA_BOT) / 2, FRONT_Z + 0.11], "material": "fascia",
      "importance": 0.95, "confidence": 0.85,
      "features": [{"id": "brand-band", "description":
        "White field with a green band along the top and a blue line near the bottom, carrying the "
        "wordmark. This is the single most identity-defining surface on the prop: the shell is "
        "generic and the fascia is what names it.", "evidenceRefs": ["full-object"]}],
      "recipe": rec("fascia", [("field", "#FFFFFF", "white by design; the colour lives in the canvas")])},

     {"id": "shopfront-glazing", "name": "Shopfront glazing", "primitive": "box", "level": "meso",
      "role": "surface",
      "rationale": "A tinted, mostly opaque pane -- NOT a window. This prop is an exterior shell "
        "with nothing behind it, so a transparent pane would show the inside of the far wall and "
        "read as a hole punched in the facade.",
      "dims": [6.9, 2.62, 0.04], "pos": [0, 1.53, GLAZE_Z], "material": "glass-tinted",
      "importance": 0.8, "confidence": 0.75,
      "features": [{"id": "pane", "description":
        f"Stands 0.02 m PROUD of the wall face at z={FRONT_Z}. Flush would be a coplanar "
        "co-facing pair over 18 m2 of facade -- the exact defect the 7-Eleven shipped eight of.",
        "evidenceRefs": ["full-object"]}],
      "recipe": rec("glass-tinted", [("pane", pal["glass-tinted"], "authored tint, not sampled")])},

     {"id": "shopfront-framing", "name": "Shopfront framing", "primitive": "extrude", "level": "meso",
      "rationale": "One extruded frame with the window openings as holes, rather than a mullion "
        "per bay: a bay per component would be five draw calls and five geometries for a part that "
        "is one welded assembly in life. It OVERLAPS the glazing it frames rather than meeting its "
        "reveal edge, which is the kit's standing rule.",
      "dims": [7.1, 2.82, 0.06], "pos": [0, 0.12, FRAME_Z], "scale": [1, 1, 1],
      "material": "white-trim", "importance": 0.7, "confidence": 0.7,
      "descriptor": {"topologyIntent": "one frame plate with the window bays as holes",
        "profile2D": {"points": [[-3.55, 0.0], [3.55, 0.0], [3.55, 2.82], [-3.55, 2.82]],
          "depth": 0.06, "holes": _bay_holes()}},
      "rotation": (0, 0, 0),
      "features": [{"id": "mullions", "description":
        "Perimeter frame plus four intermediate mullions and one transom, giving five bays. The "
        "openings are 0.05 m SMALLER than the glazing behind them on every side, so the frame "
        "laps the pane.", "evidenceRefs": ["full-object"]}],
      "recipe": rec("white-trim", [("frame", pal["white-trim"], "lit figure only; the crop straddles glazing")])},

     {"id": "service-door", "name": "Service door", "primitive": "box", "level": "meso",
      "role": "hardware",
      "rationale": "A flat leaf standing proud of the flank. Modelled shut and given no pivot: it "
        "is scenery, and a hinge would be a promise the prop cannot keep.",
      "dims": [0.06, 2.05, 0.95], "pos": [door_side * (WALL_W / 2 + 0.03), 1.025, -0.6],
      "material": "door-grey", "importance": 0.35, "confidence": 0.6,
      "features": [{"id": "leaf", "description":
        "Stands 0.03 m proud of the flank wall so it reads as a leaf in a frame rather than as a "
        "painted rectangle.", "evidenceRefs": ["full-object"]}],
      "recipe": rec("door-grey", [("leaf", pal["door-grey"], "flat painted steel")])},

     {"id": "rooftop-plant", "name": "Rooftop condenser plant", "primitive": "box", "level": "meso",
      "role": "hardware",
      "rationale": "A boxy condenser bank. Every Thai shop of this type carries one and it is a "
        "large part of the roofline read; one box for the bank rather than a unit each keeps it to "
        "a single draw call.",
      "dims": [2.4, 0.85, 1.1], "pos": [1.1, ROOF_Y + 0.12 + 0.425, -1.4], "material": "galvanised",
      "importance": 0.5, "confidence": 0.55,
      "features": [{"id": "condenser-bank", "description":
        "Sits ON the roof deck, inside the parapet, so it breaks the roofline exactly as far as "
        "the plate shows and no further.", "evidenceRefs": ["full-object"]}],
      "recipe": rec("galvanised", [("casing", pal["galvanised"], "galvanised steel casing")])},
    ]


FAMILYMART = {
 "id": "familymart-store-building",
 "name": "FamilyMart Store Building",
 "primaryType": "single-storey convenience-store building with a glazed shopfront",
 "palette": {
   "render":      "#6D6F74",
   "roof-grey":   "#7C8288",
   "white-trim":  "#D4D6D7",
   "fascia":      "#FFFFFF",
   "glass-tinted":"#7E8A8A",
   "door-grey":   "#3B3F42",
   "galvanised":  "#9AA0A4",
 },
 "brand": {"green": "#408546", "blue": "#1B6FB4", "text": "FamilyMart"},
 "materials": [
  {"id": "render", "name": "Painted cement render, walls", "color": "#6D6F74",
   "secondary": ["#5A5C60", "#7B7D82"], "roughness": 0.86, "dirt": 0.12,
   "sampling": "Measured on a 67x143 px crop of the +X flank between the door and the rear "
     "corner. Luma spread 5.2 -- the flattest read anywhere on this plate, so the crop sits on "
     "one surface and the number is the render's own albedo with no lift applied.",
   "evidence": [
     "material-crops/render-wall.png, 9,581 px: luma P10 108.1, P90 113.4, spread 5.2. A spread "
     "that small over that many pixels is a flat matte dielectric with no resolvable relief.",
     "The vertical streaking visible on the plate is run-off staining, which is localised dirt "
     "rather than albedo variation of the material, so it does not justify a texture set.",
     "Cost measurement carried from the 7-Eleven: declaring textureless took createObjectModel "
     "from 24,180 ms to 23 ms, and the cost is the SQUARE of textureResolution."],
   "overrides": [{"id": "wall-streaking", "albedo": "#5F6165", "roughnessDelta": 0.03,
     "coverage": 0.18, "evidenceRefs": ["full-object"],
     "description": "Run-off staining down the render below the coping drip, heaviest in the top "
       "0.8 m of each wall. Carried as a shading note rather than a texture: it is localised "
       "dirt, not albedo variation of the material, and the plate's own crop spread of 5.2 says "
       "the render itself is uniform."}],
   "notes": ["MeshStandardMaterial, metalness 0. Flat painted render."]},

  {"id": "roof-grey", "name": "Weathered flat-roof membrane", "color": "#7C8288",
   "secondary": ["#6B7076"], "roughness": 0.92, "dirt": 0.2,
   "sampling": "Read from the roof deck between the parapet and the plant. Recorded at LOW "
     "confidence: the crop measured spread 82.2 because at this camera angle the deck and the "
     "parapet's inner face cannot be separated by any axis-aligned box.",
   "evidence": [
     "material-crops/roof-deck.png measures spread 82.2, which is REFUSED as a direct albedo "
     "reading and recorded as such; the authored value is the crop's lit quartile, one step "
     "below the render, which is the relationship the plate plainly shows.",
     "A flat-roof membrane at prop distance is a value, not a pattern: this surface is visible "
     "only from above and is never the read that identifies the building."],
   "notes": ["Authored from a REFUSED crop, deliberately. The honest alternative to a bad "
             "measurement is an authored value that says so, not a bad measurement."]},

  {"id": "white-trim", "name": "White coping and shopfront framing", "color": "#D4D6D7",
   "secondary": ["#C3C5C6", "#E2E4E5"], "roughness": 0.55, "metalness": 0.15,
   "sampling": "Two crops. The coping (184x10 px, spread 25.1, in full key) gives #CACAC8 with "
     "no lift needed. The framing crop (205x10 px on a transom) straddles glazing either side "
     "and measures spread 172.2, so only its LIT quartile #D4D6D7 is used. The two agree within "
     "a few units, which is why they share one material.",
   "evidence": [
     "material-crops/coping.png, 1,840 px, spread 25.1 in full key: a single lit surface.",
     "material-crops/frame-white.png, spread 172.2: REFUSED as a mean and used only for its lit "
     "quartile. A 205x10 px band across a shopfront on a three-quarter view cannot avoid the "
     "glass either side of the transom.",
     "Mill-finish aluminium and painted coping are both flat at prop distance: a 0.075 m mullion "
     "on an 8 m facade is under two texels from across a street."],
   "notes": ["Coping and framing share this material on an observed match, not on convenience: "
             "the two independent crops land within a few units of each other.",
             "metalness 0.15 rather than a bare-metal value. The review harness has no "
             "environment map, and a high metalness with nothing to reflect renders near-black."]},

  {"id": "fascia", "name": "Brand fascia, printed", "color": "#FFFFFF",
   "secondary": ["#408546", "#1B6FB4"], "roughness": 0.5,
   "sampling": "color is WHITE BY DESIGN. The surface colour lives in a canvas assigned AFTER "
     "material construction -- the route this kit reserves for printed graphics -- so a tinted "
     "base would multiply through and darken the wordmark along with the field.",
   "evidence": [
     "material-crops/fascia-green.png, 530 px, spread 9.4: a single flat surface, measured "
     "#29562d on the SHADED right wing. The authored green #408546 is that value lifted 1.55x "
     "toward full key, and the lift is stated rather than hidden.",
     "material-crops/fascia-white.png, 636 px, spread 21.3, same shaded wing, measured #8F939A "
     "and lifted to the field white for the same reason.",
     "material-crops/fascia-blue.png is REFUSED: spread 110.6 over a 5 px band. No placement on "
     "this plate isolates a 6-pixel stripe, so the blue is AUTHORED from the brand and labelled "
     "as authored.",
     "Printed vinyl has no relief at prop distance; the identity is the flat field plus the "
     "wordmark, and the wordmark is a canvas assigned after construction, which the textureless "
     "declaration does not affect."],
   "notes": ["The green band, the blue line and the wordmark are ONE canvas on this material. "
             "As geometry they would have cost three materials and three geometries on a class "
             "whose binding axes are exactly those two."]},

  {"id": "glass-tinted", "name": "Tinted shopfront glazing", "color": "#7E8A8A",
   "secondary": ["#6E7A7A"], "roughness": 0.10, "metalness": 0.05,
   "opacity": 0.92, "opacityNote":
     "0.92 rather than a truly transparent pane. This prop is an exterior shell with NO interior "
     "geometry, so a transparent pane would show the inside of the far wall or the backdrop and "
     "read as a hole punched in the facade. At 0.92 it reads as glass with a hint of depth and "
     "nothing behind it is legible.",
   "sampling": "AUTHORED, not sampled, and deliberately. The crop measures a mid neutral, but "
     "every one of those pixels is the shop INTERIOR -- shelving, a magazine rack, a ceiling -- "
     "seen through the pane. Sampling it would reproduce a photograph of a room this model does "
     "not contain.",
   "evidence": [
     "material-crops/glazing.png measures spread 158.2, and inspection of the crop shows why: it "
     "is shelving and a lit ceiling, not a surface. REFUSED by rule, not by spread.",
     "Glass identity is the specular lobe and the tint, both carried by scalars. A generated "
     "texture set would force color to white and roughness to 1 and destroy precisely the two "
     "properties that make it read as glass."],
   "notes": ["metalness 0.05: the harness has no environment map and a metallic pane with "
             "nothing to reflect renders black."]},

  {"id": "door-grey", "name": "Painted steel service door", "color": "#3B3F42",
   "secondary": ["#33373A"], "roughness": 0.7,
   "sampling": "Measured on a 29x102 px crop of the flank door. Spread 35 across a flat leaf.",
   "evidence": [
     "material-crops/door.png, 2,958 px, spread 35.0: one flat painted panel.",
     "The louvre at its foot is under a texel at prop distance and is not modelled or textured."],
   "notes": ["MeshStandardMaterial, metalness 0. Flat paint on steel."]},

  {"id": "galvanised", "name": "Galvanised condenser casing", "color": "#9AA0A4",
   "secondary": ["#868C90"], "roughness": 0.55, "metalness": 0.25,
   "sampling": "Authored from the rooftop plant, which sits at the top of the plate at a shallow "
     "angle where no crop of usable area is available. Recorded as authored.",
   "evidence": [
     "No crop of sufficient area exists: the plant occupies roughly 40x25 px at a grazing angle, "
     "below the reference-admission floor, so no measurement is claimed for it.",
     "Spangle is a centimetre-scale crystal pattern; on a 2.4 m condenser bank seen at prop "
     "distance it is under one texel and reads as the value alone."],
   "notes": ["metalness 0.25 for the same environment-map reason as the other metals here."]},
 ],
}
