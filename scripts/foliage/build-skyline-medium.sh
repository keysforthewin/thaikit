#!/bin/sh
# Reuse the reviewed geometry; independently bake medium lighting and textures.
set -eu
job=/repo/scratch/skyline-repair-20260915
build=/repo/levels/bangkoksoi/build
status() { printf '%s %s\n' "$(date -u +%FT%TZ)" "$*" >> "$job/status_medium.log"; }
trap 'result=$?; if [ "$result" -ne 0 ]; then status "FAILED exit=$result"; fi' EXIT
archive="$build/cli/before-skyline-medium-20260915"
mkdir -p "$archive"
if [ -f "$archive/archived.done" ]; then status 'Refusing to overwrite recovery archive'; exit 1; fi
for name in stage2_medium.glb stage3_medium.glb lod_medium.json lightmap_medium; do
    if [ -e "$build/$name" ]; then mv "$build/$name" "$archive/$name"; fi
done
if [ -f "$build/level_medium.glb" ]; then cp "$build/level_medium.glb" "$archive/level_medium.glb"; fi
touch "$archive/archived.done"
status 'MEDIUM bake start: 4096 pages, 12 texels/metre, 2048 samples; reviewed stage 1'
THAIKIT_EXPORT_DIR= node scripts/level/bake-level.mjs --level bangkoksoi \
    --quality medium --resume-from 2 --live-lamps 20 > "$job/bake_medium.out" 2> "$job/bake_medium.err"
status 'MEDIUM bake complete; verifying'
node scripts/level/verify-level.mjs --level bangkoksoi --quality medium \
    > "$job/verify_medium.out" 2> "$job/verify_medium.err"
status 'ALL DONE: medium build and file verification passed; browser review next'
