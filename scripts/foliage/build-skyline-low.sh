#!/bin/sh
# One detached, sequential build. Review/validation precedes game delivery.
set -eu
job=/repo/scratch/skyline-repair-20260915
build=/repo/levels/bangkoksoi/build
status() { printf '%s %s\n' "$(date -u +%FT%TZ)" "$*" >> "$job/status.log"; }
trap 'result=$?; if [ "$result" -ne 0 ]; then status "FAILED exit=$result"; fi' EXIT
status 'Waiting for repaired Unreal export'
while [ ! -f "$job/export.done" ]; do
    if [ -f "$job/export.error" ]; then cat "$job/export.error"; exit 1; fi
    sleep 3
done
status 'Export complete; preserving previous intermediates and low build'
archive="$build/cli/before-skyline-low-20260915"
mkdir -p "$archive"
if [ -f "$archive/archived.done" ]; then
    status 'Refusing to overwrite recovery archive'; exit 1
fi
for name in raw.glb bake.json stage1.glb stage2_low.glb stage3_low.glb lod_low.json lightmap_low; do
    if [ -e "$build/$name" ]; then mv "$build/$name" "$archive/$name"; fi
done
if [ -f "$build/level_low.glb" ]; then cp "$build/level_low.glb" "$archive/level_low.glb"; fi
touch "$archive/archived.done"
status 'Converting repaired Unreal level'
node scripts/level/import-unreal-level.mjs --level bangkoksoi \
    --manifest exports/unreal/foliage/combined-manifest.json \
    --settings levels/bangkoksoi/settings.json \
    --light-map levels/bangkoksoi/unreal/lights.json \
    --ground=-0.12,#2b2b29 --light-scale 0.25 --emissive-scale 0.125 \
    > "$job/import.out" 2> "$job/import.err"
status 'LOW bake start: 4096 pages, 6 texels/metre, 128 samples, material cap 1024'
THAIKIT_EXPORT_DIR= node scripts/level/bake-level.mjs --level bangkoksoi \
    --quality low --live-lamps 20 > "$job/bake_low.out" 2> "$job/bake_low.err"
status 'LOW bake complete; verifying'
node scripts/level/verify-level.mjs --level bangkoksoi --quality low \
    > "$job/verify_low.out" 2> "$job/verify_low.err"
status 'ALL DONE: low build and file verification passed; browser review next'
