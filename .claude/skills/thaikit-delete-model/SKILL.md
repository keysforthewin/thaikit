---
name: thaikit-delete-model
description: >-
  Deletes the BUILT MODEL of a thaikit prop and puts its model stage back to
  pending, in one command. Removes the factory, vibe3d entry, sculpt spec,
  colliders, thumbnail and maps from packages/props/src/models/<id>/, resets
  the asset record through registry-core, drops the @thai-kit pack item, and
  sets the img2threejs scratch state aside so the next build starts clean. The
  asset itself, its reference plate and its authoring fields survive. Use when
  the user says a prop's model, mesh, geometry or 3D build is bad and wants it
  deleted, removed, scrapped, thrown away or reset -- "delete the model for X",
  "get rid of X's mesh", "start X over" -- without deleting the prop.
---

# thaikit — delete model

One script. Run it and report. Do not investigate first, do not reset the
record by hand, do not delete files by hand.

```bash
docker compose run --rm --no-deps -T web node scripts/delete-model.mjs --id <id>
```

Find `<id>` from the name if the user gave a name:

```bash
grep -l '"name": "<Name>"' packages/props/src/models/*/thaikit.json
```

An adopted pack item takes the qualified id (`--id @medieval-kit/bronze-bell`).

## What it does

It is the inverse of `promote-model.mjs`, idempotent, and safe to re-run:

1. **Tree** — removes `createObjectModel.ts`, `model.ts`,
   `object-sculpt-spec.json`, `colliders.json`, `thumb.webp` and `maps/`.
   `preview.jpg` and `thaikit.json` stay. The files are tracked, so `git
   checkout -- packages/props/src/models/<id>` brings them back.
2. **Record** — `model` back to the schema default, `status.model = 'pending'`,
   via `updateAsset` (lock respected, watcher notified). The image stage and
   every authoring field are untouched.
3. **Pack** — `install-pack.mjs --drop-item @thai-kit/<id>`, so the level
   editor's catalogue stops offering the bundle. A prop that was never promoted
   reports "no item dropped"; that is fine.
4. **Scratch** — `scratch/<id>` is MOVED to `scratch/_deleted/<id>-<stamp>`.
   The img2threejs state file is the authority for a build, so leaving it would
   make the next build resume the model being thrown away; but `reference.glb`
   is a paid Meshy result, so it is kept aside rather than lost.
   `--purge-scratch` deletes instead; `--keep-scratch` leaves it in place.

`--dry-run` prints what would go without touching anything.

## Report

Three lines: which files left the tree, that the model stage is `pending`, and
where the scratch went. Then say the prop is ready for `/thaikit-model` to
rebuild, and that nothing was committed.

## Not this skill

- Deleting the whole prop: the web UI's `DELETE /api/assets/:id`, or hide it
  with `thaikit-asset-list` (`{"hidden": true}`).
- Redoing the reference plate: `thaikit-preview-image`.
- Rebuilding: `thaikit-model`.
