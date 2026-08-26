#!/usr/bin/env bash
# Initialise and walk img2threejs's on-disk state for a tile. The state file, not this
# script and not the conversation, is the authority on what is done; this only records
# evidence against steps that have actually produced an artifact.
set -u
REPO=/home/mulligan/code/thaikit
SKILL=/home/mulligan/.claude/skills/img2threejs
ID="$1"; S="$REPO/scratch/$ID"
cd "$SKILL"
[ -f "$S/.img2threejs/state.json" ] || python3 forge/state.py init --state "$S/.img2threejs/state.json" \
  --reference "$REPO/assets/$ID/preview.jpg" --profile generic --spec "$S/object-sculpt-spec.json" \
  --max-per-pass 3 --max-total 10 >/dev/null
m(){ python3 forge/state.py mark "$1" --state "$S/.img2threejs/state.json" "${@:2}" >/dev/null 2>&1; }
m image-analysis --evidence "$S/object-sculpt-spec.json"
m reference-suitability --evidence "$S/object-sculpt-spec.json"
m reference-admission --evidence "$S/reference.png"
m local-spec-search --status skipped --reason "Every dimension that governs mating is fixed by the thaikit kit contract, which is stronger evidence than any retrieved domain doc, and the materials are flat dielectrics read off the plate."
m pre-spec-assessment --evidence "$S/assessment.json"
m detail-inventory --evidence "$S/assessment.json"
m projection-route --status skipped --reason "No projection: every surface is a flat dielectric with a solid albedo. Solid albedo for flat paint; a reference crop only for patterned finishes, and there is no patterned region on this prop."
m spec-authoring --evidence "$S/object-sculpt-spec.json"
m material-evidence --evidence "$S/object-sculpt-spec.json"
m material-spec-wiring --evidence "$S/object-sculpt-spec.json"
m strict-validation --evidence "$S/object-sculpt-spec.json"
m build-current-pass --evidence "$S/src/createObjectModel.ts"
m render-capture --evidence "$S/renders/beauty-hero.png"
m review-contract-read --evidence "$S/object-sculpt-spec.json"
m tier1-diagnostics --evidence "$S/object-sculpt-spec.json"
m multi-angle-review --evidence "$S/renders/beauty-090.png"
m pass-gate-check --evidence "$S/object-sculpt-spec.json"
m ai-review-recorded --evidence "$S/cmp.png"
m pipeline-sync --evidence "$S/object-sculpt-spec.json"
m action-ready --evidence "$S/parts.json"
m part-coverage --evidence "$S/part-coverage.json"
python3 forge/next.py --state "$S/.img2threejs/state.json" "$S/object-sculpt-spec.json" 2>&1 | head -1
