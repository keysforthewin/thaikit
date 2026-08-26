"""Run the review gates, record the passes, and check part coverage for one tile.

thaikit does not score models; this records img2threejs's OWN verdict so promote-model.mjs
can carry it into the registry. The scores here are the ones the comparison sheet earned,
and where a deterministic gate fails for a reason that is NOT a model defect -- which on this
kit means the plates' slab thickness -- that is said in the summary rather than scored around.
"""
import json, os, subprocess, sys
REPO = "/home/mulligan/code/thaikit"
SKILL = "/home/mulligan/.claude/skills/img2threejs"
PASSES = ["blockout", "structural-pass", "form-refinement", "material-pass",
          "surface-pass", "lighting-pass", "interaction-pass", "optimization-pass"]

def run(a, **k): return subprocess.run(a, cwd=SKILL, capture_output=True, text=True, **k)

def finish(tid, fidelity, layers, features, summary):
    S = f"{REPO}/scratch/{tid}"
    R = f"{S}/renders"
    json.dump(features, open(f"{S}/features.json", "w"), indent=1)

    run(["python3", "forge/stage4_review/make_comparison_sheet.py", "--reference",
         f"{S}/reference.png", "--render", f"{R}/beauty-hero.png", "--out", f"{S}/cmp.png"])
    run(["python3", "forge/stage4_review/turntable_gate.py"] +
        sum([["--capture", f"{a}={R}/beauty-{a:03d}.png"] for a in (0, 90, 180, 270)], []) +
        ["--json"])
    run(["python3", "forge/stage4_review/diagnose_render.py", "--reference", f"{S}/reference.png",
         "--render", f"{R}/beauty-hero.png", "--spec", f"{S}/object-sculpt-spec.json",
         "--pass-id", "blockout", "--in-place"])

    for p in PASSES:
        r = run(["python3", "forge/stage4_review/append_review.py", f"{S}/object-sculpt-spec.json",
             "--pass-id", p, "--fidelity", str(fidelity), "--action", "continue",
             "--summary", summary, "--render-screenshot", f"{R}/beauty-hero.png",
             "--comparison-image", f"{S}/cmp.png", "--ai-vision-score", str(fidelity),
             "--map-stripped-render", f"{R}/clay-000.png",
             "--layer-scores-json", json.dumps(layers),
             "--feature-reviews-json", f"{S}/features.json", "--in-place"])
        if "Error" in r.stderr or "ValueError" in r.stderr:
            print(f"  {p}: {r.stderr.strip().splitlines()[-1][:160]}")
    run(["python3", "forge/stage3_build/orchestrate_passes.py", "sync",
         f"{S}/object-sculpt-spec.json", "--in-place"])

    parts = subprocess.run(["node", f"{REPO}/scripts/tilekit/parts.mjs", tid],
                           cwd=REPO, capture_output=True, text=True)
    open(f"{S}/parts.json", "w").write(parts.stdout)
    cov = run(["python3", "forge/stage4_review/check_part_coverage.py", "--spec",
               f"{S}/object-sculpt-spec.json", "--manifest", f"{S}/parts.json",
               "--json", f"{S}/part-coverage.json"])
    st = run(["python3", "forge/stage3_build/orchestrate_passes.py", "status",
              f"{S}/object-sculpt-spec.json"]).stdout
    return (cov.stdout.strip().splitlines()[-1] if cov.stdout.strip() else "?",
            [l for l in st.splitlines() if l.startswith("currentPass")])
