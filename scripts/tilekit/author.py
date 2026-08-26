"""Author + validate a complete sculpt spec for one street tile, then hand it to the
generator. Fills the blocks that are identical across the kit (lighting read off the shared
plate style, look-dev, review targets, coordinate frame) so a tile definition only has to
say what makes it that tile."""
import copy, json, math, subprocess, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from tilespec import *   # noqa

REPO = "/home/mulligan/code/thaikit"
SKILL = "/home/mulligan/.claude/skills/img2threejs"


def run(args, **kw):
    r = subprocess.run(args, cwd=SKILL, capture_output=True, text=True, **kw)
    return r


def author(tile):
    tid = tile["id"]
    S = f"{REPO}/scratch/{tid}"
    os.makedirs(f"{S}/src", exist_ok=True)
    img = f"{S}/reference.png"

    # 1. assessment ---------------------------------------------------------------------
    run(["python3", "forge/stage2_spec/new_pre_spec_assessment.py", tile["name"],
         "--image", img, "--complexity", "moderate", "--out", f"{S}/assessment.json"])
    # ONE load, then mutate through it. Loading twice gave two independent dicts and every
    # edit to the assessment was written to the copy that was thrown away, which surfaced as
    # "primaryType is unassessed" on a spec that plainly assessed it.
    d0 = json.load(open(f"{S}/assessment.json"))
    a = d0["preSpecAssessment"]
    a["objectClass"] = {
      "primaryType": tile["primaryType"], "primaryDomain": "object",
      "formLanguage": ["geometric", "rectilinear", "extruded-profile"],
      "structureKind": ["static-level-geometry", "modular-kit-piece", "single-rigid-body"],
      "motionPotential": ["none - static level geometry; nothing turns and nothing attaches"],
      "materialFamilies": ["cast-concrete", "bituminous-macadam"] + tile.get("extraFamilies", []),
      "notes": tile["classNotes"]}
    a["complexity"]["scores"] = {"silhouetteComplexity": 1, "componentCount": 2,
      "hierarchyDepth": 1, "repetitionDensity": 1, "materialLayerCount": 2,
      "localDetailDensity": 2, "occlusionRisk": 1, "actionReadinessNeed": 1}
    a["complexity"]["estimatedCounts"] = {"macroComponents": 3, "mesoComponents": len(tile.get("extras", [])),
      "microFeatureGroups": 3, "materialLayers": len(tile["materials"]), "repetitionSystems": 0}
    a["complexity"]["reasoning"] = [
      "The silhouette is a plain slab. What carries the piece is the EDGE PROFILE, not the outline.",
      "Occlusion risk is low: nothing overhangs, and the only hidden faces are the underside and "
      "the far edges, all of which the kit contract determines rather than the plate.",
      "actionReadinessNeed is 1, not 0: the piece needs a box collider, but no pivot beyond root "
      "and no socket at all."]
    a["specDepthDecision"] = {"requiredDepth": "moderate",
      "minimumComponentLevels": ["macro", "meso"], "needsRepetitionSystems": False,
      "needsMaterialLocalOverrides": True, "needsMultipleReviewViews": True,
      "needsActionReadyHierarchy": True,
      "rationale": "No repetition system: the marking run lives in the road material's canvas "
        "albedo instead of becoming instanced proud quads. That is cheaper (zero extra draw "
        "calls, materials or geometries) and more correct - a painted marking has no thickness."}
    a["unknownsToResolveBeforeImplementation"] = []
    a["resolvedUnknowns"] = tile["resolved"]
    a["detailInventory"] = {"scanMethod": "component-zones", "targetMinDetails": 6,
      "note": "Each detail maps to a component.localFeatures or material.localOverrides entry.",
      "details": tile["details"]}
    d0["qualityContract"]["minimumSpecDepth"] = {"macroComponents": 2,
      "mesoComponents": 1 if tile.get("extras") else 0,
      "microFeatureGroups": 2, "materialLayers": len(tile["materials"]),
      "repetitionSystems": 0, "reviewViewpoints": 4}
    d0["qualityContract"]["definitionOfDone"] = tile["done"]
    json.dump(d0, open(f"{S}/assessment.json", "w"), indent=1)

    # 2. seeded spec --------------------------------------------------------------------
    run(["python3", "forge/stage2_spec/new_sculpt_spec.py", tile["name"], "--image", img,
         "--assessment", f"{S}/assessment.json", "--out", f"{S}/object-sculpt-spec.json"])
    spec = json.load(open(f"{S}/object-sculpt-spec.json"))
    # new_sculpt_spec.py seeds these blocks from its own template rather than carrying them
    # across from --assessment, so the assessment has to be copied in explicitly. Without this
    # the spec reports "primaryType is unassessed" and zero detailInventory entries even though
    # the assessment beside it is fully filled.
    spec["preSpecAssessment"] = d0["preSpecAssessment"]
    spec["qualityContract"] = d0["qualityContract"]
    from tiles import SHARED_OVERRIDES
    spec = build(spec, region=tile["region"], half=tile.get("half", HALF),
                 y_bot=tile.get("y_bot", Y_BOT), y_bed=tile.get("y_bed", Y_BED),
                 y_top=tile.get("y_top", Y_KERB), merge_base=tile.get("merge_base", False),
                 extras=tile.get("extras", ()),
                 materials=tile["materials"], budget=tile["budget"],
                 surface_word=tile.get("surface_word", "carriageway"),
                 edge_word=tile.get("edge_word", "kerb"))

    # Wire the material localOverrides the detailInventory points at. A detail that maps to
    # nothing is prose, and prose is what this gate exists to refuse.
    for m in spec["materials"]:
        m["localOverrides"] = (list(SHARED_OVERRIDES.get(m["id"], []))
                               + list(tile.get("overrides", {}).get(m["id"], [])))

    half = tile.get("half", HALF); y_top = tile.get("y_top", Y_KERB); y_bot = tile.get("y_bot", Y_BOT)
    spec["suitability"] = "pass"
    spec["scores"] = {"object_isolation": 3, "silhouette_readability": 3, "depth_inference": 2,
      "primitive_decomposition": 3, "material_procedurality": 3, "occlusion_risk": 1,
      "interaction_fit": 2}
    spec["coordinateFrame"] = {"front": "+Z is the tile's north edge", "up": "+Y",
      "scaleReference": f"Real metres. Origin at the CENTRE OF THE FOOTPRINT ON THE ROAD PLANE: "
        f"the kit contract names road surface y=0 and sidewalk top y={y_top:.2f} as the datum "
        f"every tile mates on, so the slab spans y={y_bot:.2f} to y={y_top:.2f}. Tiles snap on "
        "8 m centres."}
    spec["silhouette"] = {"boundingShape": "cuboid, low aspect",
      "aspectRatios": tile["aspects"], "symmetry": tile["symmetry"],
      "dominantCurves": tile.get("curves", []),
      "negativeSpaces": ["the recessed road region between the raised edges"],
      "landmarks": tile["landmarks"]}
    spec["viewEvidence"] = [{"id": "full-object", "view": "three-quarter-front-high",
      "imageRegion": {"x": 0.0, "y": 0.0, "width": 1.0, "height": 1.0, "units": "normalized"},
      "observations": tile["observations"], "confidence": 0.9}]
    spec["assumptions"] = tile["assumptions"]
    spec["featureReviewTargets"] = tile["reviewTargets"]
    spec["risks"] = tile["risks"]
    spec["lodPlan"] = [{"tier": "near", "distance": 0, "strategy": "full component tree as authored"},
      {"tier": "far", "distance": 40, "strategy": "drop the meso hardware; the deck and road "
        "surface carry the read on their own at this distance"}]
    spec["lightingFromPhoto"] = [
      {"id": "key", "role": "key", "type": "directional", "direction": [-0.45, 0.78, 0.44],
       "intensity": 1.0, "intensityRelative": 1.0, "colorTemperatureK": 5600, "color": "#FFF4E2",
       "evidence": "The near kerb casts into the road toward camera-right and the sidewalk tops "
         "are the brightest planes: a high key from the upper camera-left."},
      {"id": "fill", "role": "fill", "type": "hemisphere", "direction": [0, 1, 0],
       "intensity": 0.35, "intensityRelative": 0.35, "colorTemperatureK": 7000, "color": "#CFE0F0",
       "evidence": "The vertical skirt faces are lifted well off black, so a broad cool sky fill "
         "is present rather than a single hard key."},
      {"id": "rim", "role": "rim", "type": "directional", "direction": [0.62, 0.35, -0.70],
       "intensity": 0.25, "intensityRelative": 0.25, "colorTemperatureK": 6200, "color": "#E8EEF6",
       "evidence": "The far edge separates from the backdrop with a faint bright line rather than "
         "falling to backdrop value."},
      {"id": "exposure", "role": "grade", "type": "tone-mapping", "toneMapping": "ACES filmic",
       "exposure": 1.0, "contactShadow": {"enabled": True, "strength": 0.55, "radius": 0.35},
       "groundShadow": {"enabled": True, "receive": True},
       "ambientOcclusion": {"enabled": False, "note": "No AO pass: nothing here is a cavity at "
         "prop distance, and the kerb's own cast shadow carries the only occlusion read that matters."},
       "evidence": "The plate is graded ACES-filmic-like: sidewalk tops hold detail instead of "
         "clipping and the skirt shadows roll off rather than crushing. receiveShadow is ON "
         "because a tile is what other props stand on, and that is the half easy to lose on "
         "ground geometry."}]
    spec["lookDevTargets"] = {
      "contactShadow": {"enabled": True, "strength": 0.55, "radius": 0.35,
        "note": "A tile is ground-plane geometry; its own contact shadow grounds the props placed "
                "on it rather than itself."},
      "groundShadow": {"enabled": True, "receive": True,
        "note": "receiveShadow must stay on: the point of the piece is that props standing on it "
                "land their shadows on the road and sidewalk."},
      "environment": {"intensity": 0.35,
        "note": "Broad sky fill, no sharp reflections - every material here is a rough dielectric."}}
    json.dump(spec, open(f"{S}/object-sculpt-spec.json", "w"), indent=1)

    r = run(["python3", "forge/stage2_spec/validate_sculpt_spec.py",
             f"{S}/object-sculpt-spec.json", "--strict-quality"])
    return r.stdout + r.stderr
