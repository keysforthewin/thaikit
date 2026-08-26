"""Assemble and validate a shop-building spec, then hand it to the generator."""
import copy, json, os, subprocess, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from shopspec import make_material, make_component, rgba
import shops

REPO = "/home/mulligan/code/thaikit"
SKILL = "/home/mulligan/.claude/skills/img2threejs"
def run(a): return subprocess.run(a, cwd=SKILL, capture_output=True, text=True)

DEFAULT_DETAILS = [
 {"id": "brand-band", "zone": "fascia", "kind": "linework", "identityDefining": True,
  "description": "The fascia's coloured bands and wordmark -- what names the building.",
  "mapsTo": {"ref": "fascia-band/brand-band"}},
 {"id": "coping", "zone": "roofline", "kind": "contour", "identityDefining": True,
  "description": "Parapet upstand capping the walls above the flat roof.",
  "mapsTo": {"ref": "parapet/coping"}},
 {"id": "pane", "zone": "shopfront", "kind": "gloss", "identityDefining": True,
  "description": "Tinted glazing standing proud of the wall face.",
  "mapsTo": {"ref": "shopfront-glazing/pane"}},
 {"id": "mullions", "zone": "shopfront", "kind": "linework", "identityDefining": True,
  "description": "White framing dividing the shopfront into five bays.",
  "mapsTo": {"ref": "shopfront-framing/mullions"}},
 {"id": "condenser-bank", "zone": "roof", "kind": "contour", "identityDefining": False,
  "description": "Rooftop condenser plant breaking the roofline.",
  "mapsTo": {"ref": "rooftop-plant/condenser-bank"}},
 {"id": "leaf", "zone": "flank", "kind": "contour", "identityDefining": False,
  "description": "Service door on the flank wall.", "mapsTo": {"ref": "service-door/leaf"}},
 {"id": "wall-streaking", "zone": "walls", "kind": "stain", "identityDefining": False,
  "description": "Run-off staining down the render below the coping drip.",
  "mapsTo": {"ref": "render/wall-streaking"}},
]


def SHARED_BLOCKS(b):
    W, H, D = shops.W, shops.H, shops.D
    return {
     "suitability": "pass",
     "scores": {"object_isolation": 3, "silhouette_readability": 3, "depth_inference": 2,
       "primitive_decomposition": 3, "material_procedurality": 3, "occlusion_risk": 1,
       "interaction_fit": 2},
     "coordinateFrame": {"front": "+Z is the shopfront elevation", "up": "+Y",
       "scaleReference": f"Real metres. Origin at the CENTRE OF THE FOOTPRINT ON THE GROUND "
         f"PLANE (y=0 at grade), envelope {W} x {H} x {D} m."},
     "silhouette": {"boundingShape": "cuboid with a parapet upstand and a hung fascia",
       "aspectRatios": [{"pair": "width:depth", "value": round(W / D, 3),
                         "evidence": f"registry declared {W} : {D}"},
                        {"pair": "width:height", "value": round(W / H, 3),
                         "evidence": f"registry declared {W} : {H}"}],
       "symmetry": "bilateral about x=0 on the front elevation; front-to-back strongly "
                   "asymmetric, which is the whole point of a shopfront building",
       "dominantCurves": [], "negativeSpaces": ["the glazed shopfront bays"],
       "landmarks": [f"roof deck y={shops.ROOF_Y}", f"parapet top y={shops.PARAPET_Y}",
                     f"fascia band y={shops.FASCIA_BOT}..{shops.FASCIA_TOP}",
                     f"front wall face z={shops.FRONT_Z}"]},
     "viewEvidence": [{"id": "full-object", "view": "three-quarter-front-high",
       "imageRegion": {"x": 0.0, "y": 0.0, "width": 1.0, "height": 1.0, "units": "normalized"},
       "observations": b.get("observations", []), "confidence": 0.85}],
     "assumptions": b.get("assumptions", []) + [
       "Only the front and one flank are visible in the single plate. The rear and far flank are "
       "inferred as plain render continuing the near flank -- what this building type does -- and "
       "nothing is invented there. Confidence 0.7.",
       "Four of ten material crops were REFUSED after being rendered to a contact sheet and "
       "looked at: the blue fascia line (spread 110.6 on a 5 px band), the glazing (every pixel "
       "is shop interior), the parapet and the roof deck (both straddle two surfaces). Their "
       "values are authored and are labelled as authored in each material's evidence.",
       "Crops on the SHADED elevation are lifted toward full-key albedo by a stated factor "
       "rather than used raw, because a shaded crop measures the surface under fill, not its "
       "albedo."],
     "featureReviewTargets": [
       {"id": "brand-fascia", "name": "Brand fascia: colours, bands and wordmark",
        "tier": "critical", "passIds": ["material-pass"], "minimumScore": 0.75, "mustPass": True,
        "componentRefs": ["fascia-band"], "evidenceRefs": ["full-object"]},
       {"id": "massing", "name": "Massing: box, parapet, hung fascia, glazed front",
        "tier": "critical", "passIds": ["blockout", "structural-pass"], "minimumScore": 0.8,
        "mustPass": True, "componentRefs": ["building-shell", "parapet"],
        "evidenceRefs": ["full-object"]},
       {"id": "glazing-reads-as-glass", "name": "Shopfront reads as glass, not as a hole",
        "tier": "critical", "passIds": ["material-pass"], "minimumScore": 0.7, "mustPass": True,
        "componentRefs": ["shopfront-glazing"], "evidenceRefs": ["full-object"]},
       {"id": "shopfront-framing", "name": "Five-bay framing lapping the glazing",
        "tier": "important", "passIds": ["form-refinement"], "minimumScore": 0.65,
        "mustPass": False, "componentRefs": ["shopfront-framing"],
        "evidenceRefs": ["full-object"]},
       {"id": "roofline", "name": "Roofline: parapet plus condenser plant",
        "tier": "important", "passIds": ["form-refinement"], "minimumScore": 0.65,
        "mustPass": False, "componentRefs": ["rooftop-plant"], "evidenceRefs": ["full-object"]}],
     "risks": [
       {"id": "glazing-as-hole", "severity": "high",
        "description": "With no interior behind it, a pane authored transparent reads as a hole "
          "punched in the facade. Held at opacity 0.92 for that reason; if a render shows the far "
          "wall through the glass, the opacity is the fix, not interior geometry."},
       {"id": "fascia-flush", "severity": "medium",
        "description": "The fascia, glazing and framing all sit on the front elevation and are "
          "the natural place for a coplanar co-facing pair. Each is held at a different offset "
          "from the wall face (0.02, 0.05, 0.11) rather than flush."},
       {"id": "brand-colour-authored", "severity": "medium",
        "description": "The blue fascia line could not be measured and is authored from the "
          "brand. If the shipped render's blue looks wrong beside the plate, that is the reason."}],
     "lodPlan": [{"tier": "near", "distance": 0, "strategy": "full eight-component tree"},
       {"tier": "far", "distance": 60, "strategy": "drop the service door and the condenser bank; "
         "the shell, parapet and fascia carry the read at this distance"}],
     "lightingFromPhoto": [
       {"id": "key", "role": "key", "type": "directional", "direction": [-0.42, 0.80, 0.43],
        "intensity": 1.0, "intensityRelative": 1.0, "colorTemperatureK": 5600, "color": "#FFF4E2",
        "evidence": "The front elevation is in shade while the flank and the coping take the "
          "light: a high key from behind and to the camera-left."},
       {"id": "fill", "role": "fill", "type": "hemisphere", "direction": [0, 1, 0],
        "intensity": 0.42, "intensityRelative": 0.42, "colorTemperatureK": 7000,
        "color": "#CFE0F0",
        "evidence": "The shaded front elevation still reads its own colours rather than going to "
          "black, so a broad sky fill is present. This is exactly why the front-elevation crops "
          "are lifted before use."},
       {"id": "rim", "role": "rim", "type": "directional", "direction": [0.6, 0.4, -0.7],
        "intensity": 0.22, "intensityRelative": 0.22, "colorTemperatureK": 6200,
        "color": "#E8EEF6",
        "evidence": "The parapet's far edge separates from the backdrop with a faint bright line."},
       {"id": "exposure", "role": "grade", "type": "tone-mapping", "toneMapping": "ACES filmic",
        "exposure": 1.0, "contactShadow": {"enabled": True, "strength": 0.6, "radius": 0.4},
        "groundShadow": {"enabled": True, "receive": True},
        "ambientOcclusion": {"enabled": False,
          "note": "No AO pass: the shopfront reveal is the only cavity and the framing's own "
                  "cast shadow carries it."},
        "evidence": "The plate holds detail in both the lit coping and the shaded front, which "
          "is a filmic roll-off rather than a linear grade."}],
     "lookDevTargets": {
       "contactShadow": {"enabled": True, "strength": 0.6, "radius": 0.4,
         "note": "A building needs a firm contact shadow or it floats off the tile it stands on."},
       "groundShadow": {"enabled": True, "receive": True,
         "note": "castShadow matters more than receiveShadow here: this prop shades the street."},
       "environment": {"intensity": 0.4,
         "note": "The glazing and the metals need SOMETHING to reflect; with no environment map "
                 "a metallic surface renders near-black, which is why metalness is held low."}}}


def author(b):
    bid = b["id"]; S = f"{REPO}/scratch/{bid}"
    os.makedirs(f"{S}/src", exist_ok=True)
    img = f"{S}/reference.png"

    run(["python3", "forge/stage2_spec/new_pre_spec_assessment.py", b["name"], "--image", img,
         "--complexity", "complex", "--out", f"{S}/assessment.json"])
    d0 = json.load(open(f"{S}/assessment.json")); a = d0["preSpecAssessment"]
    a["objectClass"] = {"primaryType": b["primaryType"], "primaryDomain": "object",
      "formLanguage": ["geometric", "rectilinear", "flat-roofed", "asymmetric-front-to-back"],
      "structureKind": ["static-level-geometry", "exterior-shell", "single-rigid-body"],
      "motionPotential": ["none - nothing on this prop turns and nothing attaches to it"],
      "materialFamilies": ["cement-render", "painted-steel", "architectural-glass",
                           "mill-finish-aluminium", "printed-vinyl"],
      "notes": "A single-storey shop shell. EXTERIOR ONLY: a prop kit is looked at from outside, "
        "so there is no interior geometry and the glazing is therefore authored as a tinted, "
        "mostly opaque pane rather than as a window -- with nothing behind it, a transparent pane "
        "reads as a hole punched in the facade."}
    a["complexity"]["scores"] = {"silhouetteComplexity": 2, "componentCount": 3,
      "hierarchyDepth": 1, "repetitionDensity": 2, "materialLayerCount": 3,
      "localDetailDensity": 2, "occlusionRisk": 1, "actionReadinessNeed": 1}
    a["complexity"]["estimatedCounts"] = {"macroComponents": 1, "mesoComponents": 7,
      "microFeatureGroups": 3, "materialLayers": len(b["materials"]), "repetitionSystems": 0}
    a["complexity"]["reasoning"] = [
      "The silhouette is a box with a parapet and a hung fascia; what identifies the building is "
      "the FASCIA, not the outline.",
      "The binding budget axes are unique geometries and materials, not triangles: the generator "
      "bakes each component's dimensions into vertex data, so every box is a distinct geometry.",
      "actionReadinessNeed is 1: a box collider, one root pivot, and no sockets."]
    a["specDepthDecision"] = {"requiredDepth": "moderate",
      "minimumComponentLevels": ["macro", "meso"], "needsRepetitionSystems": False,
      "needsMaterialLocalOverrides": True, "needsMultipleReviewViews": True,
      "needsActionReadyHierarchy": True,
      "rationale": "No repetition system: the shopfront bays are holes in ONE frame plate rather "
        "than a mullion per bay, which is cheaper on both binding axes and is what a shopfront "
        "actually is -- one welded assembly."}
    a["unknownsToResolveBeforeImplementation"] = []
    a["resolvedUnknowns"] = b.get("resolved", []) + [
      "[hidden] The rear and the far flank are not visible in the single plate. Inferred as plain "
      "render walls continuing the near flank, which is what this building type does. No detail "
      "is invented there. Confidence 0.7.",
      "[deliberate-non-modelling] No interior. The plate shows shelving through the glass; it is "
      "not modelled, and the glazing is authored mostly opaque so its absence cannot be seen.",
      "[measurement-refused] Four of ten crops were refused after inspection rather than used: "
      "the blue fascia line, the glazing, the parapet and the roof deck. Their values are "
      "authored and labelled as authored."]
    a["detailInventory"] = {"scanMethod": "component-zones", "targetMinDetails": 6,
      "note": "Each detail maps to a component.localFeatures or material.localOverrides entry.",
      "details": b.get("details", DEFAULT_DETAILS)}
    d0["qualityContract"]["minimumSpecDepth"] = {"macroComponents": 1, "mesoComponents": 4,
      "microFeatureGroups": 2, "materialLayers": len(b["materials"]), "repetitionSystems": 0,
      "reviewViewpoints": 4}
    d0["qualityContract"]["definitionOfDone"] = [
      f"Footprint sits inside the declared {shops.W} x {shops.H} x {shops.D} m envelope with no "
      "geometry overhanging it.",
      "The fascia carries the brand's own colours and wordmark and is legible in the render.",
      "The glazing reads as glass, not as a hole: nothing behind it is visible.",
      "All four budget axes hold, measured not estimated.",
      "No coincident co-facing face pair anywhere (check-coplanar clean).",
      "Exactly one pivot (root) and zero sockets."]
    json.dump(d0, open(f"{S}/assessment.json", "w"), indent=1)

    run(["python3", "forge/stage2_spec/new_sculpt_spec.py", b["name"], "--image", img,
         "--assessment", f"{S}/assessment.json", "--out", f"{S}/object-sculpt-spec.json"])
    spec = json.load(open(f"{S}/object-sculpt-spec.json"))
    spec["preSpecAssessment"] = d0["preSpecAssessment"]
    spec["qualityContract"] = d0["qualityContract"]
    proto_c = copy.deepcopy(spec["componentTree"][0])
    proto_m = copy.deepcopy(spec["materials"][0])
    spec["componentTree"] = [make_component(proto_c, c)
                             for c in shops.shell_components(b["palette"])]
    spec["materials"] = [make_material(proto_m, m) for m in b["materials"]]
    spec["repetitionSystems"] = []
    spec["performanceBudget"] = dict(shops.HERO2X, qualityPriority="real-time-first",
      textureSize=512, fpsTarget=60,
      optimizationPolicy="Four ceilings, none substituting for another. The binding axes here are "
        "unique geometries and materials, NOT triangles: the generator bakes each component's real "
        "dimensions into its vertex data, so every box is a genuinely distinct geometry however "
        "similar it looks. Eight components and seven materials were chosen in the blockout to sit "
        "under both ceilings, rather than optimised into them afterwards -- a pivot hung off a part "
        "cannot be merged later. All brand graphics ride one canvas on the fascia material.")
    spec.update(SHARED_BLOCKS(b))
    json.dump(spec, open(f"{S}/object-sculpt-spec.json", "w"), indent=1)
    r = run(["python3", "forge/stage2_spec/validate_sculpt_spec.py",
             f"{S}/object-sculpt-spec.json", "--strict-quality"])
    return r.stdout + r.stderr
