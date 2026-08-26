#!/usr/bin/env bash
# Regenerate the factory from the spec, re-apply thaikit's post-generation patch, bundle
# and render. The patch is NOT optional and must run on every regeneration: the generator
# overwrites the file, so the three-only import rule, the marking canvas, the sculptRuntime
# adaptor and the createObjectModel alias all have to be re-applied or the bundle will not
# load. Run this instead of calling the generator by hand.
set -euo pipefail
REPO=/home/mulligan/code/thaikit
SKILL=/home/mulligan/.claude/skills/img2threejs
ID="$1"; shift
S="$REPO/scratch/$ID"
MARK=""
[ -f "$S/markings.json" ] && MARK="--markings $S/markings.json"

( cd "$SKILL" && python3 forge/stage3_build/generate_threejs_factory.py \
    "$S/object-sculpt-spec.json" --out "$S/src/createObjectModel.ts" --force >/dev/null )
node "$REPO/scripts/tilekit/postgen.mjs" --file "$S/src/createObjectModel.ts" $MARK "$@"
node "$REPO/scripts/build-model-module.mjs" --id "$ID" 2>&1 | tail -1
# beauty AND clay every time: the blockout gate will not credit a pass without
# unlit, map-stripped evidence, and clay is what supplies it.
node "$REPO/scripts/render-model.mjs" --id "$ID" --modes beauty,clay 2>&1 | tail -6
