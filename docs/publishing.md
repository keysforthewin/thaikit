# Going public: the repo and the npm packages

Two separate releases that people confuse for one:

* **The repo** — the engine, the skills, the editor, the asset sources. Already
  MIT-licensed and, as checked below, clean of secrets. Making it public is
  mostly a hygiene pass.
* **The packages** — what a *game* installs. That is a much smaller surface than
  the repo, and getting the boundary right is the whole job.

---

## 1. What should actually be published

| Package | Publish? | Why |
| --- | --- | --- |
| `@thai-kit/level-runtime` | **yes** | The point of the exercise. A game imports this. |
| `@thai-kit/level-schema` | **yes** | level-runtime depends on it; it must resolve on npm. |
| `@thaikit/registry-core` | **later, or never** | Authoring-side: it holds a filesystem lock over `registry.json`. No game needs it. Publish only if you want third parties writing tooling against the registry. |

The repo now carries **two scopes on purpose**: `@thai-kit/*` is what is
published, and `@thaikit/*` (`registry-core`, `client`, `server`) is internal and
stays `private`. That is not a typo to tidy up — renaming 43 importers of
`registry-core` would buy nothing, and the split makes "published" visible at
the import line. Rename it only if it is ever published.
| The 100 props | **not as one npm package** | 159 MB. See §5. |

`level-runtime` imports only `@thai-kit/level-schema`, `three-mesh-bvh` and
(peer) `three` — it does **not** touch `registry-core`. That is what makes it
cleanly publishable on its own.

---

## 2. Pre-flight on the repo — what I checked

Already good:

* `LICENSE` is MIT at the root; every package declares `"license": "MIT"`.
* **No secret has ever been committed.** Across all 24 commits the only
  env-shaped file ever added is `.env.example`; no key patterns
  (`fal_…`, `sk-…`, `AKIA…`, PEM blocks) appear in any tree.
* `.env` is gitignored, and so are `scratch/`, `/packs/` (third-party vibe3d
  packs — not yours to redistribute) and `levels/*/build/`.

Needs a decision before you flip the switch:

* **Size.** 225 MB tracked, 160 MB of `.git`. That is publishable — GitHub is
  comfortable well past it — but it is dominated by files nobody consuming the
  repo needs:

  | File | Size | Is it needed? |
  | --- | --- | --- |
  | `levels/thepurge/level.glb` | 43 MB | the editable project; a demo level |
  | `levels/thepurge/sky/panorama.png` | 22 MB | authoring input to the sky bake |
  | `assets/*/imposter.png` (×25) | **86 MB** | **authoring input only** — the shipped texture is `maps/albedo.webp` (~1 MB each) |

  The imposter plates alone are more than a third of the repo, and
  `author-imposter.mjs` is the only thing that reads them. If you want the repo
  lean, **now is the only cheap moment** — 24 commits, no forks, no clones to
  break:

  ```sh
  pipx install git-filter-repo
  git filter-repo --path-glob 'assets/*/imposter.png' --invert-paths
  git filter-repo --path levels/thepurge/sky/panorama.png --invert-paths
  ```

  Then add them to `.gitignore` and attach them to a GitHub Release, or keep
  them in Git LFS. Rewriting history after the repo is public means every
  clone diverges, so this is a one-way door.

  Alternatively: ship as-is. 225 MB is not a problem, only an annoyance.

* **`z2/`** is an empty untracked directory in the working tree. Delete it or
  gitignore it.
* **`dist/`** is tracked (`registry.json`, `dist/vibe3d/`). Intentional — it is
  the published registry — but say so in the README, because a tracked `dist/`
  usually means a mistake.

---

## 3. Claim the npm scope

`@thai-kit/level-runtime`, `@thai-kit/level-schema` and the unscoped name
`thaikit` are all **unregistered** as of this writing. You are logged in as
`keysforthewin`.

An `@scope` on npm is an **organisation**, and public packages under it are
free. Create it at <https://www.npmjs.com/org/create> with the name `thaikit`.
Do this first — the package names in your docs, the level GLBs' consumers and
any vibe3d addresses all bake the scope in, and changing it later is a breaking
change for everyone who installed.

If you would rather not run an org, the fallback is unscoped names
(`thaikit-level-runtime`), which are uglier and cannot be grouped. Grab the
unscoped `thaikit` name regardless, as a placeholder that points at the repo.

---

## 4. Making the two packages publishable

Each currently says `"private": true`, which is npm's hard block on publishing.
For **both** `packages/level-schema/package.json` and
`packages/level-runtime/package.json`:

```diff
-  "private": true,
+  "publishConfig": { "access": "public" },
+  "repository": { "type": "git", "url": "git+https://github.com/<you>/thaikit.git", "directory": "packages/level-runtime" },
+  "homepage": "https://github.com/<you>/thaikit#readme",
+  "bugs": "https://github.com/<you>/thaikit/issues",
+  "author": "…",
+  "keywords": ["three", "threejs", "level", "gltf", "glb", "lightmap", "lod", "game"],
+  "files": ["src", "README.md"],
```

`publishConfig.access` is not optional: **a scoped package defaults to
`restricted`**, and without it your first `npm publish` fails on a free account
with a payment-required error that reads like an auth problem.

`files` matters too — without it npm packs `test/` as well. Harmless, but it
doubles `level-runtime`'s tarball for no one's benefit.

### The workspace dependency

`level-runtime` declares `"@thai-kit/level-schema": "*"`. npm publishes that
literally, so an installer resolves it to whatever the latest published
level-schema happens to be. Pin it:

```diff
-    "@thai-kit/level-schema": "*"
+    "@thai-kit/level-schema": "^0.1.0"
```

Workspaces still resolve it locally from `packages/`, so nothing changes for
development.

### The optional `three` peer

Leave `peerDependenciesMeta.three.optional = true` as it is, and say why in the
README: the `@thai-kit/level-runtime/node` entry (a game server reading spawns
and colliders) genuinely never imports three, so demanding it would be wrong.
Every browser entry needs it, and the *one copy of three* rule applies exactly
as it does to the prop bundles.

### Publish, in dependency order

```sh
npm run test                                    # the workspace test script
npm publish -w @thai-kit/level-schema
npm publish -w @thai-kit/level-runtime
```

`0.1.0` is the honest version for both — the API is young and `loadLevel`'s
options will move. Do not open at `1.0.0` unless you mean the semver promise.

For a public package, publish from CI with npm **provenance**, which puts a
signed link from the tarball back to the exact commit and workflow that built
it:

```yaml
# .github/workflows/release.yml
permissions: { contents: read, id-token: write }   # id-token is what signs it
steps:
  - uses: actions/checkout@v4
  - uses: actions/setup-node@v4
    with: { node-version: 22, registry-url: 'https://registry.npmjs.org' }
  - run: npm ci && npm test
  - run: npm publish -w @thai-kit/level-schema --provenance
  - run: npm publish -w @thai-kit/level-runtime --provenance
    env: { NODE_AUTH_TOKEN: '${{ secrets.NPM_TOKEN }}' }
```

Use a **granular access token** scoped to the `@thai-kit` org, not a classic
automation token.

---

## 5. Distributing the 100 props

Do not put `assets/` on npm as one package. It is 159 MB, most of it authoring
plates, and nobody wants all hundred props to get one drum.

Three routes, and they are not exclusive:

**A. As a vibe3d registry — the one that already exists.** `scripts/build-vibe3d-registry.mjs`
emits `dist/vibe3d/registry.json`, which inlines each prop's TypeScript source
plus a sha256, and vibe3d's CLI installs those files shadcn-style. This is the
format **thaikit's own pack installer already consumes**, so publishing this way
makes your kit installable by anything that speaks vibe3d — including thaikit
itself. Total inlined source across 100 props is 7.8 MB, so the whole registry
is one modest JSON.

```sh
npm run export:vibe3d                       # → dist/vibe3d/registry.json
```

Note it emits namespace `@thai-kit` (matching vibe3d's own `@scifi-kit`), which
is baked into every installed address and into consumers' `models.lock.json`.
Settle that string **before** anyone installs — `--namespace` overrides it.
Right now the export carries only 3 items; run it over the full registry before
publishing.

**B. As a thin npm package per consumer taste.** If you want plain
`npm i @thai-kit/props`, publish only what a game actually loads —
`model.bundle.js`, `maps/`, `colliders.json`, `thumb.webp`, `registry.json` —
and exclude `imposter.png`, `preview.jpg`, `src/` and
`object-sculpt-spec.json`. That is roughly 30 MB rather than 159 MB. Use a
`files` allowlist, and be aware npm has no partial install: everyone gets all
hundred props.

**C. Baked levels as GitHub Releases.** A shipped level is one 8 MB GLB
(`levels/<id>/build/level.glb`, per `docs/using-a-baked-level.md`). Levels are
build artefacts, not source — attach them to a release rather than tracking
them.

My recommendation: **A as the primary**, because the format already exists, is
source-first the way the whole project is, and needs no new infrastructure. Add
B only if people ask for a plain npm install.

---

## 6. The two licence gaps — done

Both findings from the first pass are fixed. `scripts/backfill-license.mjs`
applied them through `updateRegistry` (same lock the web UI takes), and
`--dry-run` reproduces the report without writing.

### Trademark notices — 18 assets, not 14

`license.notice` now carries the caveat on every asset that depicts a real mark,
instead of the schema default that said "Fully synthetic. No third-party scanned
or scraped geometry."

* **13 store buildings** — the sentence you had already written into `notes`
  (7-Eleven, AIS, Bangkok Hospital, Big C, Cafe Amazon, FamilyMart, Flash
  Express, King Power, Lotus's, Makro, MK Restaurants, PTT, SCB) was *moved*
  into `license.notice`, leaving the build notes behind. The owner names are
  whatever you wrote; nothing was re-worded.
* **5 vehicles** — `honda-wave`, `isuzu-d-max`, `toyota-commuter-van`,
  `toyota-fortuner`, `toyota-hilux` had **no caveat anywhere**, in notes or in
  the licence field. They are the larger exposure, not the smaller one: the mark
  is in the id, the display name and the filename, so nobody has to read a note
  to ship one. They now carry the same sentence.
* `student-dormitory-block` was a false positive in the first pass — its notes
  say "The sign is generic Thai signage, not a trademark". Left alone.

The script only ever overwrites the schema default, so a notice written by hand
later is never clobbered.

**The export had to be fixed too.** `build-vibe3d-registry.mjs` falls back to
`notes` for its description, which is the only reason the caveat ever reached a
vibe3d consumer — by accident, as the first sentence. Moving the text out of
`notes` would have silently dropped it. A non-default `license.notice` now leads
the exported description deliberately. Their `modelMetadataSchema` is `.strict()`
so there is nowhere structured to put it, and a dropped trademark notice is not
the same class of loss as a dropped pivot list.

### Provenance — all 100 assets

`license.generatedBy` is filled, and the entries are split by the route each
asset actually took rather than given one blanket value:

| Assets | `generatedBy` |
| --- | --- |
| 85 props | reference-image (`fal-ai/nano-banana-pro` \| `nano-banana-2` \| `flux/schnell`, vendor `fal.ai`) + model `img2threejs` |
| 15 skyline imposters | reference-image + model `skylinekit/author-imposter` (vendor `thaikit`) |
| `elephant-crossing-sign` | additionally a `reference-mesh` entry, `meshy/v7/image-to-3d` |

Imposters are deliberately **not** labelled `img2threejs` — they never go
through it (`scripts/skylinekit/author-imposter.mjs` writes the spec and factory
directly), and a provenance record that overclaims is worse than an empty one.

The Meshy entry appears on exactly one asset because `model.reference` is filled
on exactly one. The pipeline uses a Meshy v7 mesh as a structural baseline
across the img2threejs route, but that is recorded in `scratch/` rather than in
the registry, and provenance is worth nothing if it is inferred rather than
evidenced. **Worth closing separately**: have `promote-model.mjs` record
`model.reference` so future props evidence it. Note the reference mesh is
evidence only and never ships — that remains the strongest thing you can say
here, and it belongs in the README.

## 7. Order of operations

1. ~~Create the npm org~~ — **done**: `@thai-kit`. Grabbing the unscoped `thaikit` name as a placeholder is still worth doing.
2. Decide on the history rewrite (§2). Do it now or never.
3. ~~Fix `license.notice` on the branded props; fill `generatedBy`~~ — **done** (§6).
   Still open: teach `promote-model.mjs` to record `model.reference`.
4. README: add the package list, the trademark caveat, the provenance note, and
   a link to `docs/using-a-baked-level.md`.
5. ~~Un-private the two packages, add the metadata, pin the workspace dep~~ — **done** (§4).
6. Flip the repo to public.
7. `npm publish` both, in dependency order, ideally from CI with `--provenance`.
8. Run the full vibe3d export and publish the registry (§5A).

Steps 1–5 are all reversible. Steps 6 and 7 are not: a public commit is public
forever, and **an npm version can never be reused** even after `npm unpublish`.
