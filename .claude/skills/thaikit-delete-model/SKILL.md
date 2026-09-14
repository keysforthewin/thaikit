---
name: thaikit-delete-model
description: >-
  Fully resets a thaikit prop's local model build so reconstruction starts from
  its reference image. Purges generated source, model caches, Meshy evidence,
  img2threejs state, scratch archives, installed bundles and indexed exports;
  resets the model stage to pending while retaining the asset and its plate.
  Use when the user wants a model deleted, scrapped or reset before rebuilding,
  or asks to audit or fix this reset workflow.
---

# thaikit — delete model

For a deletion request, run the script; never reset the record or remove model
files by hand. For an audit or repair of this workflow, inspect and test the
implementation without deleting real props.

```bash
docker compose run --rm --no-deps -T web node scripts/delete-model.mjs --id <id>
```

Resolve a name using `rg` against `packages/props/src/models/*/thaikit.json`.
An adopted item takes its qualified id, e.g. `--id @medieval-kit/bronze-bell`.

## Reset contract

- Preserve `thaikit.json`, `preview.jpg`, any other recorded plate filename,
  the image stage and authoring fields. Remove every other entry in the prop's
  model directory, including helper source, hidden caches, maps and backups.
- Purge the whole canonical scratch directory and any custom scratch directory
  recorded by `model.state` or the local reference GLB. This includes paid Meshy
  outputs, provenance/request IDs, generated maps, `.img2threejs`, `.cache`,
  assessments, specs, generated code, renders and review evidence.
- Purge prop-named scratch copies, including shared-folder backups such as
  `_veh/<id>.v1.mjs.bak` and `_archive/<id>-oldplate`, and timestamp archives in
  `scratch/_deleted` and `scratch/_archive`. Legacy unqualified archives for an
  adopted item require ownership resolution; the script refuses ambiguity.
- Remove the installed catalogue item and its bundles under **every** build tag,
  including orphaned tags. Remove its entry from the generated
  `packages/props/dist/registry.json` and its GLB/preview and manifest entry from
  the local Unreal export.
- Reset `model` to schema defaults, clear derived `scale.measured`, and set
  `status.model = 'pending'` through registry-core, after cleanup succeeds.
  Cleanup errors are failures, not "no item dropped" success.

Purging is the default. `--purge-scratch` is a compatibility alias;
`--keep-scratch` is rejected. `--dry-run` lists the removal plan without writes.
A failed or completed reset can be rerun.

Custom scratch roots must be below `scratch/`. For a known unrecorded run or
manually named archive, add `--scratch-dir <absolute-directory>`; use the path
as seen inside the container. The script cannot identify copies renamed without the prop id
by filename alone. Do not claim those have been removed without checking.
It does not rewrite git history, shared upstream package downloads, exported
level projects or models already imported into another application.
Stop any active build of this prop before resetting; this command does not
cancel agents, render processes or remote Meshy jobs.

## Rebuild and report

Report the removed locations, whether cleanup succeeded and the model stage.
Only on success say it is ready for `thaikit-model` to rebuild **from the plate**.
Never restore discarded source/spec/state/mesh from an archive, git, an old fal
result, or conversation history to save generation cost. New model work needs a
new Meshy request, fresh image analysis, a new sculpt spec and new state.
Report that nothing was committed if that is true.

Deleting the whole prop belongs to the asset UI; redoing the plate belongs to
`thaikit-preview-image`; rebuilding belongs to `thaikit-model`.
