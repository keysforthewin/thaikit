"""Per-tile definitions. Everything shared -- the kit contract, the base/deck/carriageway
structure, materials, lighting, look-dev -- lives in tilespec.py and author.py. What is here
is only what makes each piece that piece."""
import sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from tilespec import *   # noqa

KIT = ("Part of a 10-piece modular street kit on an 8 m grid. Every road-facing edge carries "
       "an identical profile so any tile meets any other: 1.25 m raised sidewalk, 5.5 m two-lane "
       "carriageway, 1.25 m raised sidewalk, kerb 0.15 m, road at y=0 and sidewalk top at y=0.15.")

SHARED_RESOLVED = [
 "[hidden] Underside of the slab -> closed flat bottom face. A tile is never viewed from below.",
 "[contract-inference] Edge faces occluded by perspective -> inferred identical, and the kit "
 "contract MANDATES that, so the extruded deck makes it true by construction. Confidence 0.95.",
 "[material-not-geometry] Sidewalk paving-joint pitch reads ~1.0 m at confidence 0.55 -> "
 "surface-relief below the geometric-relief threshold at prop distance; carried as a material "
 "note, not geometry.",
 "[contract-override] Slab THICKNESS. The plate renders a chunky product-shot display slab and "
 "the Meshy proxy measures it at h/w 0.182; the registry contract declares 0.35 m on an 8 m "
 "module, h/w 0.044. An 8 m tile 1.45 m thick is not level geometry, so the contract wins. The "
 "proxy's square footprint DOES corroborate the contract on the band that governs mating.",
]

SHARED_DETAILS = [
 {"id": "edge-profile", "zone": "full-object", "kind": "contour", "identityDefining": True,
  "description": "The mating profile across the module, identical on every live edge.",
  "mapsTo": {"ref": "tile-deck/edge-profile"}},
 {"id": "kerb-riser", "zone": "kerb", "kind": "contour", "identityDefining": True,
  "description": "Crisp vertical riser separating sidewalk top from the road surface.",
  "mapsTo": {"ref": "tile-deck/kerb-riser"}},
 {"id": "substrate-skirt", "zone": "skirt", "kind": "contour", "identityDefining": False,
  "description": "Vertical concrete skirt below the road plane on all four sides.",
  "mapsTo": {"ref": "tile-base/substrate-skirt"}},
 {"id": "marking-run", "zone": "carriageway", "kind": "linework", "identityDefining": True,
  "description": "White lane markings, carried in the road material's canvas albedo.",
  "mapsTo": {"ref": "carriageway/marking-run"}},
 {"id": "patch-scars", "zone": "carriageway", "kind": "stain", "identityDefining": False,
  "description": "Patch-repair rectangles and joint seams breaking up the road value.",
  "mapsTo": {"ref": "asphalt/patch-scars"}},
 {"id": "value-ramp", "zone": "full-object", "kind": "stain", "identityDefining": True,
  "description": "Three-step value ramp asphalt < concrete < paint. This is what carries the "
                 "read at prop distance and the thing most likely to be lost.",
  "mapsTo": {"ref": "asphalt/value-ramp"}},
 {"id": "paving-joints", "zone": "sidewalk-top", "kind": "linework", "identityDefining": False,
  "description": "Transverse paving-slab joints across the sidewalk top at roughly 1.0 m pitch.",
  "mapsTo": {"ref": "concrete/paving-joints"}},
]

SHARED_OVERRIDES = {
 "asphalt": [
  {"id": "patch-scars", "albedo": "#4A4A52", "roughness": 0.95, "evidenceRefs": ["full-object"],
   "description": "Patch-repair rectangles kept within one or two values of the base and "
     "overlapped in pairs so their edges break. Authored four values down as clean single "
     "rectangles they read as sunken panels cut into the road rather than as worn patches."},
  {"id": "value-ramp", "albedo": "#4E4E55", "evidenceRefs": ["full-object"],
   "description": "The road end of the three-step ramp: it must stay about one value step below "
     "the concrete and two below the paint. This relationship, not any texture, carries the read."},
  {"id": "lane-joint", "albedo": "#474751", "evidenceRefs": ["full-object"],
   "description": "Longitudinal construction joint down the centreline. Deliberately NOT a "
     "transverse seam: on an 8 m module a cross-tile seam reads as a JOIN in the middle of the "
     "piece, which is the one thing a modular tile must never show."}],
 "concrete": [
  {"id": "paving-joints", "albedo": "#A2977F", "evidenceRefs": ["full-object"],
   "description": "Transverse paving-slab joints at roughly 1.0 m pitch. Surface-relief below the "
     "geometric-relief threshold at prop distance, so a shading note rather than geometry."},
  {"id": "kerb-riser", "albedo": "#A2977F", "evidenceRefs": ["full-object"],
   "description": "The kerb face reads a half value step darker than the sidewalk top under the "
     "plate's key, which is what separates the two planes."}],
}

SHARED_RISKS = [
 {"id": "edge-mismatch", "severity": "high",
  "description": "If the profile is off by a centimetre the tile does not mate with its siblings "
    "and the whole 10-piece kit is unusable. Mitigated structurally: the kerb risers ARE the "
    "walls of the deck extrusion's hole, so they cannot drift out of alignment with the "
    "carriageway that fills it."},
 {"id": "false-seam", "severity": "medium",
  "description": "Any transverse mark across a tile reads as a join in the middle of the piece "
    "once a row of them is laid. All wear on these tiles runs longitudinally or sits well inside "
    "the footprint for that reason."},
]

def targets(extra=()):
    t = [
     {"id": "edge-profile-contract", "name": "Mating edge profile (1.25 / 5.5 / 1.25, kerb 0.15)",
      "tier": "critical", "passIds": ["blockout", "structural-pass"], "minimumScore": 0.9,
      "mustPass": True, "componentRefs": ["tile-deck"], "evidenceRefs": ["full-object"]},
     {"id": "kerb-step", "name": "Kerb riser reads as a crisp 0.15 m step",
      "tier": "critical", "passIds": ["structural-pass", "form-refinement"], "minimumScore": 0.8,
      "mustPass": True, "componentRefs": ["tile-deck"], "evidenceRefs": ["full-object"]},
     {"id": "value-ramp", "name": "Three-step value ramp asphalt < concrete < paint",
      "tier": "critical", "passIds": ["material-pass"], "minimumScore": 0.75, "mustPass": True,
      "componentRefs": ["carriageway", "tile-deck"], "evidenceRefs": ["full-object"]},
     {"id": "marking-run", "name": "Lane markings, tiling continuously",
      "tier": "important", "passIds": ["material-pass"], "minimumScore": 0.7, "mustPass": False,
      "componentRefs": ["carriageway"], "evidenceRefs": ["full-object"]},
    ]
    return t + list(extra)

LARGE = {"targetTriangles": 4000, "maxDrawCalls": 4, "maxMaterials": 3, "maxUniqueGeometries": 3}


def common(tid, name, primary, class_notes, region, observations, aspects, symmetry,
           landmarks, assumptions, done, review_extra=(), **kw):
    d = {"id": tid, "name": name, "primaryType": primary, "classNotes": class_notes,
         "region": region, "materials": kw.pop("materials", ("concrete", "asphalt")),
         "budget": kw.pop("budget", LARGE), "resolved": SHARED_RESOLVED + kw.pop("resolved", []),
         # Dedupe by id, LAST wins: a tile that re-states a shared detail (the soi pieces
         # rewrite the riser and the skirt) is overriding it, not adding a second copy.
         "details": list({x["id"]: x for x in
                          SHARED_DETAILS + kw.pop("details", [])}.values()),
         "observations": observations, "aspects": aspects, "symmetry": symmetry,
         "landmarks": landmarks, "assumptions": assumptions, "done": done,
         "reviewTargets": targets(review_extra), "risks": SHARED_RISKS + kw.pop("risks", [])}
    d.update(kw)
    return d


DONE_BASE = [
 "Footprint is exactly 8.00 x 8.00 m with no geometry overhanging it in x or z.",
 "Every LIVE edge measures 1.25 / 5.5 / 1.25 m with the kerb top at y=0.15 and the road at "
 "y=0.00, so the tile mates with any other tile.",
 "The three-step value ramp asphalt < concrete < paint is visible in the render.",
 "All four budget axes hold, measured not estimated.",
 "No coincident co-facing face pair anywhere (check-coplanar clean).",
 "Exactly one pivot (root) and zero sockets.",
]

TILES = {}

TILES["road-crossroads-tile"] = common(
 "road-crossroads-tile", "Road Crossroads Tile",
 "modular street tile, four-way intersection",
 KIT + " This piece is rotationally symmetric on all four edges, so it drops in at any of four "
 "orientations, which is what lets it close a street grid. The open centre carries NO lane "
 "markings at all: real junctions wear them away, and it also keeps this tile's marking geometry "
 "from fighting whatever meets it on each of the four approaches.",
 region_crossroads(),
 ["four-way intersection with all four arms live",
  "radiused corner sidewalk returns on all four corners",
  "open unmarked centre where the two carriageways cross",
  "raised sidewalk islands in each of the four corners"],
 [{"pair": "width:depth", "value": 1.0, "evidence": "kit contract 8.00 : 8.00, square module"},
  {"pair": "width:height", "value": 22.86, "evidence": "kit contract 8.00 : 0.35"}],
 "four-fold rotational (C4) about the tile centre - the strongest symmetry in the kit",
 ["kerb top edge y=0.15", "road plane y=0.00", "tile edge x,z = +-4.00",
  "corner return fillet radius 1.25 m centred (+-4.00, +-4.00)"],
 ["The four corner returns are filleted at 1.25 m rather than the 2 m a wide turn would want: "
  "with arm half-width 2.75 on a 4 m half-module, any radius above 1.25 pushes the fillet past "
  "the tile edge and the sidewalk island stops closing. 1.25 is the largest radius the module "
  "admits, not a styling choice.",
  "No lane markings in the junction mouth. This is the asset's own instruction and it is also "
  "what keeps four approaches from disagreeing about where their lines end."] ,
 DONE_BASE + ["All four edges are live and identical, so the tile is correct at any of four "
              "orientations."])

TILES["road-t-junction-tile"] = common(
 "road-t-junction-tile", "Road T-Junction Tile",
 "modular street tile, three-way junction",
 KIT + " Three of the four edges are live road connections and the fourth is a plain sidewalk "
 "run, so this piece has a FIXED orientation and cannot be rotated freely the way the straight "
 "and crossroads tiles can.",
 region_t_junction(),
 ["side street meeting a through road",
  "radiused corner sidewalk returns where the branch opens",
  "one continuous sidewalk run along the closed edge",
  "open unmarked junction mouth"],
 [{"pair": "width:depth", "value": 1.0, "evidence": "kit contract 8.00 : 8.00"},
  {"pair": "width:height", "value": 22.86, "evidence": "kit contract 8.00 : 0.35"}],
 "bilateral about x=0 only; the z axis is NOT symmetric, which is what fixes the orientation",
 ["kerb top edge y=0.15", "road plane y=0.00", "closed edge sidewalk run at z=+2.75..+4.00"],
 ["The stem points -z and the through road runs +-x. That choice is arbitrary but it is now "
  "CONTRACT: a level builder rotates the tile to place it, so what matters is that the piece has "
  "one defined orientation, not which one.",
  "The corner returns are radiused rather than square because a vehicle prop turning into the "
  "branch has to clear them."],
 DONE_BASE + ["The closed edge carries an uninterrupted 1.25 m sidewalk run with no road reaching it."])

TILES["road-curve-tile"] = common(
 "road-curve-tile", "Road Curve Tile", "modular street tile, ninety-degree curve",
 KIT + " The carriageway turns through ninety degrees inside a single 8 m square. Its centreline "
 "is tangent to +z at the south edge and to +x at the east edge, which puts the turn centre on "
 "the (4, -4) corner at radius 4 -- the ONLY circle that meets both tangency conditions on this "
 "module. The inner return is therefore tight (1.25 m) and the outer one wide (6.75 m).",
 region_curve(),
 ["ninety-degree turn of the carriageway inside one module",
  "tight sidewalk return on the inside of the bend",
  "wide sidewalk sweep on the outside of the bend",
  "carriageway width constant through the turn"],
 [{"pair": "width:depth", "value": 1.0, "evidence": "kit contract 8.00 : 8.00"},
  {"pair": "inner:outer return radius", "value": 0.185,
   "evidence": "1.25 : 6.75, forced by centreline radius 4.00 and carriageway half-width 2.75"}],
 "none - the turn is chiral, so this piece has a handedness and is placed by rotation",
 ["turn centre (4.00, -4.00)", "centreline radius 4.00",
  "inner kerb radius 1.25", "outer kerb radius 6.75"],
 ["The inner/outer radius asymmetry is NOT a styling choice and must not be evened out. Both arcs "
  "are concentric on the same centre, which is the only way the carriageway stays a constant "
  "5.5 m through the turn; the moment the radii are averaged the width varies and the tile stops "
  "mating at one or both edges.",
  "Two of these back to back give a 180-degree switchback and four give a loop, so the entry and "
  "exit edges carry the full standard profile exactly like a straight tile's."],
 DONE_BASE + ["The carriageway measures 5.5 m across at every point through the turn, and both "
              "live edges carry the full standard profile."],
 curves=["quarter-circle inner kerb, radius 1.25 m", "quarter-circle outer kerb, radius 6.75 m"])

TILES["road-dead-end-tile"] = common(
 "road-dead-end-tile", "Road Dead End Tile", "modular street tile, terminator",
 KIT + " The terminator: only ONE of the four edges is a live road connection and the other three "
 "are closed, which is what lets a street run end without leaving the carriageway hanging in open "
 "space. The sidewalk wraps continuously across the closed end so a player walking the pavement is "
 "never dropped into the road.",
 region_dead_end(),
 ["one live road edge; the other three closed",
  "carriageway ending in a rounded turning head",
  "sidewalk wrapping continuously across the closed end",
  "a barrier across the end of the carriageway"],
 [{"pair": "width:depth", "value": 1.0, "evidence": "kit contract 8.00 : 8.00"},
  {"pair": "width:height", "value": 22.86, "evidence": "kit contract 8.00 : 0.35"}],
 "bilateral about x=0; the z axis is strongly asymmetric, which is the whole point of the piece",
 ["live edge z=-4.00", "turning-head centre (0.00, 1.00), radius 2.75",
  "wrapped sidewalk across z=+3.75..+4.00 and around the head"],
 ["The turning head is a semicircle of the carriageway's own half-width centred 1.0 m forward of "
  "centre, so a vehicle prop has the full 5.5 m to turn in and the sidewalk still wraps behind it "
  "without pinching to nothing.",
  "The barrier is authored from the asset's description rather than from the plate, which does not "
  "show one. It is recorded as such and given the kit's only third material."],
 DONE_BASE + ["Exactly one edge is live; walking the sidewalk from one side to the other never "
              "crosses the carriageway."],
 materials=("concrete", "asphalt", "barrier-paint"),
 budget={"targetTriangles": 4000, "maxDrawCalls": 4, "maxMaterials": 3, "maxUniqueGeometries": 4},
 extras=[dict(cid="end-barrier", name="End barrier", level="meso", role="hardware",
   primitive="box", topo="assembled-solid",
   rationale="A discrete rigid rail with flat faces - genuinely a box. Its hazard banding comes "
     "from the material's canvas albedo rather than from alternating geometry, which would have "
     "cost a draw call per stripe on the most repeated class of object in the kit.",
   dims=[4.4, 0.30, 0.16], pos=[0, 0.15, 2.60], scale=[4.4, 0.30, 0.16],
   mat="barrier-paint", importance=0.5, conf=0.45,
   features=[{"id": "barrier-rail", "description":
     "Hazard-banded rail across the closed end of the carriageway, standing 0.30 m above the road "
     "at z=+2.60 and spanning 4.4 m. Placed where the carriageway is still 4.47 m wide rather than "
     "at the head itself: the turning head is a semicircle, so by z=3.55 the road has narrowed to "
     "2.06 m and a full-width rail there hung over the sidewalk at both ends with nothing under it. "
     "It marks the terminator as deliberate rather than as a road that simply stops.",
     "evidenceRefs": ["full-object"]}])],
 details=[{"id": "barrier-rail", "zone": "closed-end", "kind": "contour", "identityDefining": True,
   "description": "Hazard-banded barrier across the end of the carriageway.",
   "mapsTo": {"ref": "end-barrier/barrier-rail"}}],
 resolved=["[not-in-plate] The barrier is required by the asset's description but is not visible "
   "in the single plate. Authored as a hazard-banded rail on the kit's third material and recorded "
   "as description-derived, not observed. Confidence 0.45."],
 review_extra=[{"id": "closed-end", "name": "Three closed edges with the sidewalk wrapping the end",
   "tier": "critical", "passIds": ["structural-pass"], "minimumScore": 0.8, "mustPass": True,
   "componentRefs": ["tile-deck"], "evidenceRefs": ["full-object"]}])

TILES["road-crosswalk-tile"] = common(
 "road-crosswalk-tile", "Road Crosswalk Tile", "modular street tile, zebra crossing",
 KIT + " Geometrically the straight piece with a crossing cut through it. It is a separate asset "
 "rather than a texture swap because the DROPPED KERB IS REAL GEOMETRY: a crossing painted onto a "
 "full-height kerb is a crossing nothing can actually step across.",
 region_crosswalk(),
 ["straight two-lane carriageway", "painted zebra crossing across the carriageway",
  "sidewalk cut down to road level on both sides at the crossing",
  "full-height kerb resuming either side of the crossing"],
 [{"pair": "width:depth", "value": 1.0, "evidence": "kit contract 8.00 : 8.00"},
  {"pair": "crossing band : tile", "value": 0.4, "evidence": "3.2 m band across an 8 m module"}],
 "bilateral about BOTH axes - the crossing is centred, so the piece is symmetric in x and z",
 ["kerb top edge y=0.15", "road plane y=0.00", "crossing band z=-1.60..+1.60",
  "kerb interrupted over the crossing band on both sides"],
 ["The dropped kerb is a FLUSH CUT to road level over the crossing band, not a ramp. This factory "
  "has no sloped-solid primitive, and a flush cut is the honest simplification: what must not "
  "happen is the crossing being paint over a full-height kerb. The missing ramp slope is recorded "
  "as an accepted approximation, not passed over.",
  "Only the two MATING edges (z=+-4) must carry the standard profile, and they do. The x edges, "
  "which face buildings rather than other tiles, are the ones the crossing band interrupts."],
 DONE_BASE + ["A player can walk from one sidewalk to the other across the crossing without ever "
              "meeting a full-height kerb."],
 resolved=["[accepted-approximation] The dropped kerb is modelled as a flush cut rather than a "
   "ramp, because the generator has no sloped-solid primitive and a ramp would cost two more "
   "geometries on the kit's second-most-instanced piece. Confidence 0.6 on appearance, 1.0 on "
   "function - it is crossable, which is the property the asset exists for."],
 details=[{"id": "dropped-kerb", "zone": "crossing", "kind": "contour", "identityDefining": True,
   "description": "The sidewalk cut down to road level across the crossing band on both sides.",
   "mapsTo": {"ref": "tile-deck/edge-profile"}},
  {"id": "zebra-bars", "zone": "crossing", "kind": "linework", "identityDefining": True,
   "description": "White zebra bars across the carriageway, in the road material's canvas albedo.",
   "mapsTo": {"ref": "asphalt/zebra-bars"}}],
 overrides={"asphalt": [{"id": "zebra-bars", "albedo": "#E8E6E0", "roughness": 0.75,
   "evidenceRefs": ["full-object"],
   "description": "Zebra bars, drawn into the canvas albedo like every other marking on this kit. "
     "A zebra is the densest paint in the whole set, and as proud quads it would have been a dozen "
     "coplanar surfaces over the road - a z-fight per bar."}]},
 review_extra=[{"id": "dropped-kerb", "name": "Kerb dropped to road level across the crossing",
   "tier": "critical", "passIds": ["structural-pass"], "minimumScore": 0.8, "mustPass": True,
   "componentRefs": ["tile-deck"], "evidenceRefs": ["full-object"]}])

TILES["road-drain-and-utility-tile"] = common(
 "road-drain-and-utility-tile", "Road Drain and Utility Tile",
 "modular street tile, straight run carrying utility furniture",
 KIT + " A straight run carrying the street's utility furniture so the plain straight tile can "
 "stay bare and cheap. Alternating the two along a road gives the variation without paying for it "
 "on every instance.",
 region_straight(),
 ["straight two-lane carriageway", "manhole covers and drain inlets in the road surface",
  "a concrete base for a power pole on the sidewalk", "raised sidewalks both sides"],
 [{"pair": "width:depth", "value": 1.0, "evidence": "kit contract 8.00 : 8.00"},
  {"pair": "width:height", "value": 22.86, "evidence": "kit contract 8.00 : 0.35"}],
 "bilateral about x=0; the utility furniture breaks symmetry in z",
 ["kerb top edge y=0.15", "road plane y=0.00", "pole base centred (3.35, -2.20) on the sidewalk"],
 ["ONE pole base per tile, not a row. The asset's note fixes pole spacing to the 8 m grid, and one "
  "base per 8 m module IS that spacing - a second base on the same tile would halve it.",
  "Manhole covers and drain inlets are canvas albedo rather than geometry. At an 8 m tile seen "
  "from standing height a cover is a flat disc flush with the road: it has no silhouette to "
  "contribute, so geometry would buy nothing that the budget could not better spend on the pole "
  "base, which does have one."],
 DONE_BASE + ["The pole base is a real raised pad a power-pole prop can stand on, not a painted "
              "circle."],
 budget={"targetTriangles": 4000, "maxDrawCalls": 4, "maxMaterials": 3, "maxUniqueGeometries": 4},
 extras=[dict(cid="pole-base", name="Power-pole base pad", level="meso", role="hardware",
   primitive="box", topo="assembled-solid",
   rationale="A cast concrete pad with flat faces - genuinely a box, and unlike the manhole covers "
     "it has a real silhouette at prop distance, which is why it is the one piece of furniture "
     "here that earns geometry.",
   dims=[0.55, 0.12, 0.55], pos=[3.35, 0.21, -2.20], scale=[0.55, 0.12, 0.55],
   mat="concrete", importance=0.5, conf=0.5,
   features=[{"id": "pole-pad", "description":
     "Raised concrete pad on the sidewalk, top at y=0.21 - 0.06 m proud of the sidewalk so it "
     "reads as a separate casting rather than a patch, and NOT flush, which would have been a "
     "coplanar co-facing pair with the sidewalk top. A power-pole prop stands on this.",
     "evidenceRefs": ["full-object"]}])],
 details=[{"id": "pole-pad", "zone": "sidewalk", "kind": "contour", "identityDefining": True,
   "description": "Raised concrete pad a power-pole prop stands on.",
   "mapsTo": {"ref": "pole-base/pole-pad"}},
  {"id": "manhole-covers", "zone": "carriageway", "kind": "contour", "identityDefining": True,
   "description": "Manhole covers and drain inlets in the road surface.",
   "mapsTo": {"ref": "asphalt/manhole-covers"}}],
 overrides={"asphalt": [{"id": "manhole-covers", "albedo": "#3E3E45", "roughness": 0.92,
   "evidenceRefs": ["full-object"],
   "description": "Manhole covers and gutter inlets, drawn into the canvas albedo. Flush with the "
     "road by definition, so they contribute no silhouette and geometry would buy nothing."}]},
 review_extra=[{"id": "pole-base", "name": "Power-pole base pad stands proud on the sidewalk",
   "tier": "important", "passIds": ["form-refinement"], "minimumScore": 0.65, "mustPass": False,
   "componentRefs": ["pole-base"], "evidenceRefs": ["full-object"]}])

# ---- the soi half-module -------------------------------------------------------------
# A soi has NO separated sidewalk: pedestrians and motorcycles share one surface, which is why
# these pieces are a single flat plane with raised edges rather than a scaled-down road tile.
#
# ONE DELIBERATE DEVIATION FROM THE ASSET NOTES, and it is the kind worth stating loudly. The
# notes fix the alley's raised edge top at y=0.10 while the road kerb is y=0.15. Those two
# numbers meet at the Soi Entrance tile's alley mouth, and a 0.05 m lip would run along both
# sides of every soi in the kit. The edges are authored at 0.15 so the join is watertight.
# Changing a cosmetic edge height is a smaller cost than shipping a step at every soi mouth,
# but it IS a change to authored contract and it is flagged rather than absorbed.
SOI_TOP = 0.15
SOI_KIT = ("Part of the 10-piece modular street kit, on the kit's HALF-module. The edge profile is "
           "a 3 m paved alley with a 0.5 m raised edge each side, alley surface at y=0 and edge "
           "top at y=0.15. That profile mates only with the other alley pieces and with the branch "
           "edge of the Soi Entrance tile, which is the adapter back to the full 8 m road profile.")
SOI_DEVIATION = ("[contract-deviation] The asset notes fix the alley's raised edge at y=0.10 while "
 "the road kerb is y=0.15. Those two heights MEET at the Soi Entrance tile's alley mouth, so the "
 "authored pair would put a 0.05 m lip along both sides of every soi in the kit. Authored at 0.15 "
 "instead, which makes the join watertight. Flagged, not absorbed: this is a change to declared "
 "contract and it needs a human's agreement.")

SOI_DONE = [
 "The alley surface is 3.00 m wide with a 0.5 m raised edge each side, so the piece mates with "
 "the other alley pieces and with the Soi Entrance tile's branch edge.",
 "The three-step value ramp holds.",
 "All four budget axes hold, measured not estimated.",
 "No coincident co-facing face pair anywhere (check-coplanar clean).",
 "Exactly one pivot (root) and zero sockets.",
]

def soi_details():
    d = []
    for x in SHARED_DETAILS:
        y = dict(x)
        if y["id"] == "substrate-skirt":
            y["description"] = "Vertical concrete skirt below the alley plane on all four sides." 
        if y["id"] == "kerb-riser":
            y["description"] = "Raised edge separating the alley surface from the drain channel."
        d.append(y)
    return d

TILES["soi-alley-straight-tile"] = common(
 "soi-alley-straight-tile", "Soi Alley Straight Tile", "modular alley tile, straight run",
 SOI_KIT + " A soi has no separated sidewalk -- pedestrians and motorcycles share one surface -- "
 "and that is why this piece is a single flat plane with drains at the edges rather than a "
 "scaled-down road tile.",
 region_soi_straight(),
 ["narrow shared alley surface with no separate sidewalk",
  "open side drains under lift-out lid slabs along both edges",
  "raised edge each side rather than a kerb", "much narrower than the road pieces"],
 [{"pair": "width:depth", "value": 0.5, "evidence": "kit contract 4.00 : 8.00, half-module width"},
  {"pair": "alley:module width", "value": 0.75, "evidence": "3.00 m paved of a 4.00 m module"}],
 "bilateral about the run axis (x=0)",
 ["alley surface y=0.00", "raised edge top y=0.15", "module edge x=+-2.00", "alley edge x=+-1.50"],
 ["The open side drain under lift-out lid slabs is the defining feature of a Thai alley and reads "
  "at a glance from the far end of a run. It is carried as albedo on the raised edge rather than "
  "as an open channel: an open slot on the kit's most-repeated alley piece would be geometry a "
  "player never looks into.",
  SOI_DEVIATION],
 SOI_DONE, half=(2.0, 4.0), y_top=SOI_TOP, y_bot=-0.15,
 edge_word="raised edge",
 surface_word="alley", details=soi_details(),
 resolved=[SOI_DEVIATION],
 overrides={"concrete": [{"id": "drain-lids", "albedo": "#9A9080", "evidenceRefs": ["full-object"],
   "description": "Lift-out drain lid slabs along both raised edges, drawn as albedo banding. The "
     "defining feature of a Thai alley, and legible as banding at the distance a soi is read from."}]})
TILES["soi-alley-straight-tile"]["details"].append(
 {"id": "drain-lids", "zone": "raised-edge", "kind": "linework", "identityDefining": True,
  "description": "Lift-out drain lid slabs running along both raised edges.",
  "mapsTo": {"ref": "concrete/drain-lids"}})

TILES["soi-alley-corner-tile"] = common(
 "soi-alley-corner-tile", "Soi Alley Corner Tile", "modular alley tile, ninety-degree corner",
 SOI_KIT + " This corner is a 4 m SQUARE rather than the 4 x 8 m of the straight alley piece, "
 "because a right-angle turn in a 3 m ribbon completes inside a 4 m square and padding it to a "
 "full half-module would leave dead surface a level builder has to hide. It still lands on the "
 "8 m grid: two corners and a straight make an 8 m offset.",
 region_soi_corner(),
 ["right-angle turn of the narrow shared alley surface",
  "drain channel mitred around the inside of the bend",
  "one shared surface throughout - no separate sidewalk", "tight inner return"],
 [{"pair": "width:depth", "value": 1.0, "evidence": "kit contract 4.00 : 4.00, square"},
  {"pair": "inner:outer return radius", "value": 0.143,
   "evidence": "0.50 : 3.50, forced by centreline radius 2.00 and alley half-width 1.50"}],
 "none - the turn is chiral and the piece is placed by rotation",
 ["turn centre (2.00, -2.00)", "centreline radius 2.00",
  "inner edge radius 0.50", "outer edge radius 3.50"],
 ["The turn centre sits on the module corner at radius 2.0, the only circle tangent to +z at the "
  "south edge and to +x at the east edge of a 4 m square. The inner return is consequently very "
  "tight (0.50 m), which is correct for a soi and must not be opened up: widening it varies the "
  "alley width through the bend and the piece stops mating.",
  SOI_DEVIATION],
 SOI_DONE, half=2.0, y_top=SOI_TOP, y_bot=-0.15,
 edge_word="raised edge", surface_word="alley",
 details=soi_details(), resolved=[SOI_DEVIATION],
 budget={"targetTriangles": 2000, "maxDrawCalls": 3, "maxMaterials": 2, "maxUniqueGeometries": 3},
 curves=["quarter-circle inner alley edge, radius 0.50 m",
         "quarter-circle outer alley edge, radius 3.50 m"])

TILES["soi-entrance-tile"] = common(
 "soi-entrance-tile", "Soi Entrance Tile", "modular street tile, road-to-alley adapter",
 KIT + " The ADAPTER of the kit, and the only piece carrying two different edge profiles: three "
 "edges are the standard 8 m road profile and the fourth is the 3 m alley profile with a raised "
 "edge each side, which is what the alley straight and alley corner tiles mate to. Without this "
 "piece the alley tiles connect to nothing.",
 region_soi_entrance(),
 ["a narrow soi opening off the main road",
  "three full-width road edges and one narrow alley mouth",
  "the alley mouth deliberately off-centre on its edge",
  "radiused corner returns where the road arms meet"],
 [{"pair": "width:depth", "value": 1.0, "evidence": "kit contract 8.00 : 8.00"},
  {"pair": "alley mouth : edge", "value": 0.375,
   "evidence": "3.0 m paved of the 8 m north edge, offset onto the eastern half-module"}],
 "none - two different edge profiles and an off-centre mouth make this the least symmetric piece "
 "in the kit",
 ["kerb top edge y=0.15", "road plane y=0.00",
  "alley mouth x=+0.50..+3.50 on the north edge", "alley half-module x=0.00..+4.00"],
 ["The alley occupies the EASTERN HALF-MODULE of the north edge rather than being centred. That is "
  "both what the asset asks for -- a soi is a gap between buildings, not a designed junction -- "
  "and what puts the mouth exactly on the half-module grid the alley pieces snap to. A centred "
  "mouth would look tidier and mate with nothing.",
  "The alley mouth is part of the SAME extruded region as the road, not a separate component: the "
  "two touch along z=+2.75, so their union is one connected polygon and the adapter costs no extra "
  "draw call for being an adapter.",
  SOI_DEVIATION],
 DONE_BASE + ["The north edge presents a 3.0 m alley surface at y=0 between raised edges at "
   "y=0.15 spanning x=0.00..4.00, so an alley piece butts onto it with no step.",
   "The other three edges each present the full 1.25 / 5.5 / 1.25 road profile."],
 resolved=[SOI_DEVIATION],
 review_extra=[{"id": "dual-edge-profile",
   "name": "Two different edge profiles on one tile, both exact",
   "tier": "critical", "passIds": ["blockout", "structural-pass"], "minimumScore": 0.9,
   "mustPass": True, "componentRefs": ["tile-deck"], "evidenceRefs": ["full-object"]}])
