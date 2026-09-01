# Adopting third-party packs

Install any vibe3d pack, edit its props with thaikit's skills
(`thaikit-preview-image`, `thaikit-model`, `thaikit-colliders`) exactly as if
they were thaikit's own, and place the edited props with the level builder --
while keeping them segregated from `@thai-kit/props`, removable in one step,
and filterable in the browse grid by pack.

## Design: adopted packs are sibling source trees

Every skill and script resolves a prop through `modelDir(id)` and reads its
record through `@thaikit/registry-core`. So the whole feature is: give
registry-core more than one root, and put an adopted pack's source in a root
of its own.

```
packages/props/src/models/<id>/          # @thai-kit, unchanged
adopted/@medieval-kit/                   # one tree per adopted pack, TRACKED in git
  pack.json                              # namespace, upstream source/version, prefix, what was adopted
  models/bronze-bell/model.ts            # their source, verbatim
  models/bronze-bell/thaikit.json        # a thaikit record, written via registry-core
  models/bronze-bell/colliders.json      # the installer's probe-derived compound
  models/bronze-bell/thumb.webp          # rendered once, tracked, so a clone has pictures
  models/core/*.ts                       # their shared lib items, where they were
  vibe3d/<kit>/...                       # their {vibe3d} helpers, untouched
```

`adopted/<ns>/` is laid out like a materialised pack source directory
(`models/`, `vibe3d/`), so the installer can build it with `--source
tree:adopted/<ns>` exactly as it builds thaikit's own kit; and because every
item's directory is `models/<name>/`, `adopted/<ns>/models` is ALSO a
registry-core models root. Real packs prefix every `{models}` target with
their kit name (`{models}/medieval-kit/bronze-bell/model.ts`); adoption strips
that one common prefix from every `{models}` target, so relative imports
between items (`../core/index.ts`) still resolve. A pack whose item
directories are not named after their items cannot be adopted (install it
with `--no-adopt`).

Why sibling trees and not `packages/props/src/models/@scifi-kit/crate/`:

- The item NAME stays `crate` and the pack id stays `@scifi-kit`, so the ref
  `@scifi-kit/crate` is unchanged for levels (`ItemRef` in level-schema is
  exactly two segments), the catalogue, the outliner and vibe3d's own address
  grammar. Two packs can each have a `crate`.
- registry-core's id regex and its id-equals-directory check stay as they are.
- `packs/index.json` lists the pack with `tree: 'adopted/<ns>/models'`, and
  the catalogue's existing `editable = Boolean(p.tree)` makes it editable with
  no catalogue change. Overrides are never consulted for a tree pack.
- The npm export reads only `packages/props`, so adopted items cannot leak
  into `@thai-kit/props`.

There is deliberately **no licence gate**: `pack.json` records the upstream
licence and author as information, and adoption never refuses on it.

## Qualified ids

A prop id is either a bare slug (`oil-drum`, always `@thai-kit`) or a
qualified `@ns/name` (`@medieval-kit/bronze-bell`). `parseId`, `modelDir`,
`assetFile`, `collidersFile`, `workDir`, `readAsset` and `updateAsset` accept
both; `storeOptionsFor(id)` gives the `{ modelsDir }` for the root that holds
it, `listRoots()` / `readAllAssets()` see every root and stamp a DERIVED
`pack` on each asset (never stored -- the directory says it). Scratch for an
adopted item is `scratch/@medieval-kit/bronze-bell`.

Every `--id` on every script accepts a qualified id (`derive-colliders`,
`render-model`, `promote-model`, `set-preview-image`, `build-model-module`,
`edit-assets`, `check-coplanar`), and so do `/api/assets/:id` (URL-encoded)
and the object editor, which carries it as `item.assetId`. A bare id
continues to mean `@thai-kit`, so nothing existing changed.

## Adoption

`install-pack.mjs` adopts by default for npm / https / file sources; the pack
manager's *adopt* checkbox (default on) is the same switch. `--no-adopt` keeps
the old behaviour: bundles from the download, edits only through `overrides/`.

1. `adoptRegistry()` (`scripts/lib/packs/adopt.mjs`) writes the sources and
   decoded artifacts into `adopted/<ns>/` and `pack.json`.
2. The install re-points itself at `tree:adopted/<ns>` and builds from THAT
   tree (`registryFromAdopted()` in `tree.mjs` reads it back off disk, so an
   edit is what gets built).
3. After the probe, every item that has no `thaikit.json` gets one
   (`recordForAdopted()`: title/description/category/tags from `meta`,
   `image: null` so the preview stage is pending, `model.status: 'done'`,
   `model.source` at their entry, `license.generatedBy: vibe3d:<ns>@<version>`,
   size/budget from the probe, `physics`/`placement`/`pivot` defaults).
4. Rendered thumbnails are copied beside each item as `thumb.webp`, tracked.

The index entry carries `adopted: 'adopted/<ns>'`, `upstream: '<spec>'` and
`source: 'tree:adopted/<ns>'`, so *refresh* rebuilds from the tree and never
re-downloads. Then:

- `--refresh-item @ns/name` rebuilds one item -- the watcher queues it when a
  file under `adopted/<ns>/models/<name>/` changes, exactly as for thaikit's
  own props.
- `--upgrade @ns [--force]` re-downloads upstream over the tree
  (`mode: 'replace'`: files upstream dropped are removed, records, compounds
  and thumbnails are kept). It REFUSES when any adopted file was edited since
  adoption (`divergence()` compares sha256 against `pack.json`) unless forced.
  Pack manager: *upgrade*; `POST /api/packs/:id/upgrade?force=1`.
- `--remove @ns [--keep-source]` deletes the build AND `adopted/<ns>/`. The
  pack manager shows *remove* for adopted packs and says so in the confirm.
- `--drop-item @ns/name` forgets one item whose source moved away (a fork).

A fresh clone has `adopted/` but no `packs/`: installing the pack again (by
its npm name or `tree:adopted/<ns>`) finds the tree and builds from it.

## Fork

`node scripts/fork-item.mjs @medieval-kit/bronze-bell [--as @thai-kit/temple-bell | @other-ns] [--dry-run]`
(`scripts/lib/packs/fork.mjs`; the object editor's *fork into @thai-kit*
button, `POST /api/items/:ns/:name/fork`):

1. Copies the item directory into the target root, VENDORING whatever it
   imports from outside itself -- `../core/index.ts`, `@vibe3d/<kit>/...` --
   into `<item>/_vendor/<path relative to the adopted root>`, transitively.
   The mirrored layout keeps the vendored files' own relative imports valid;
   only the specifiers that cross into `_vendor` are rewritten. The three
   `@vibe3d/*` runtime templates are left alone (every build gets them).
2. Moves the record with `forkedFrom: { ref, version, hash }`, its paths
   rebased.
3. Rewrites every level placement that referenced the old ref.
4. Drops the old item from its pack and refreshes the new one.

A forked item that has not yet been rebuilt through `promote-model.mjs` has
upstream's `model.ts` and no `createObjectModel.ts`; the exporter, the release
verifier and the tree installer ship it verbatim with `model.ts` as its entry
(`buildForeignShapedItem`). Forking into `@thai-kit` is what puts an item into
the npm release; forking into any other adopted namespace keeps it out.

Policy for the skills: an untouched adopt keeps the upstream address; the
first `thaikit-model` / `thaikit-preview-image` run on an adopted item should
ask whether to fork first, so `@medieval-kit/bronze-bell` never silently
diverges from upstream under upstream's name.

## Tests

`scripts/lib/adopt.test.mjs` (prefix detection, adoption, upgrade with
divergence, reading the tree back, fork with vendoring and level rewrite) and
the qualified-id tests in `packages/registry-core/test/`. Both run their
filesystem work in a CHILD process with `THAIKIT_ADOPTED_DIR` /
`THAIKIT_MODELS_DIR` / `THAIKIT_LEVELS_DIR` pointed at temp directories --
registry-core reads those once at import time, and the first version of the
suite wrote a stray pack into the repo's real `adopted/`.
