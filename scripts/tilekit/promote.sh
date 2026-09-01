#!/usr/bin/env bash
# Walk the on-disk state, promote, then check for coplanar pairs on the PROMOTED bundle
# (check-coplanar reads the installed pack bundle, so it can only run after promotion).
set -u
REPO=/home/mulligan/code/thaikit
for ID in "$@"; do
  echo "=== $ID"
  "$REPO/scripts/tilekit/state.sh" "$ID"
  node "$REPO/scripts/promote-model.mjs" --id "$ID" 2>&1 | grep -E "^budget|^runtime|^review|error" || true
  node "$REPO/scripts/check-coplanar.mjs" --id "$ID" 2>&1 | tail -3
done
