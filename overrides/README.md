# overrides/

Local overlays for items from THIRD-PARTY vibe3d packs: `<namespace>/<item>.json`
(for example `@scifi-kit/crate.json`). Each file carries the fields a pack cannot
say about its own prop -- physics, placement, pivot, destruction groups, budget
class and ceilings, notes, tags, category, and a hand-tuned collider compound --
and the catalogue merges it over the installer's probe-derived values.

Tracked in git, and deliberately not under `packs/` (gitignored, wiped by a pack
refresh or removal), not under `packages/props/` (the published kit), and not
under `levels/`. thaikit's own props need no overlay: their record is the
`thaikit.json` beside their source.

Written by the object editor (`PUT /api/items/:ns/:name/override`); the schema is
`web/server/src/lib/overrides.js`.
