# thaikit — working notes for Claude

An MIT library of game-ready **props** for a browser FPS / level builder on
**low-end PCs**, plus the skills that make them.

A prop is a **procedural Three.js factory** — TypeScript that builds a
`THREE.Group` in code — not a GLB. That changed in schema v3; anything below
that still says "mesh" means the model.

## Non-negotiables

- **The artefact is code, and the store is a vibe3d-shaped source tree.**
  `packages/props/src/models/<id>/createObjectModel.ts` builds a `THREE.Group`
  (it exports both `createObjectModel(spec, options)` and vibe3d's
  `createModel(options)`); `model.ts` beside it is the vibe3d entry, the sculpt
  spec and images sit beside those, and **`thaikit.json`** is the asset record
  that used to be one row of `registry.json`. The CommonJS bundle is a BUILD
  PRODUCT of the pack installer, at `packs/@thai-kit/<tag>/<id>/model.bundle.js`,
  never committed and found only through `packItemBundle()`. Nothing exports a GLB.
- **thaikit's own props are a vibe3d pack, and that is the only way they ship or
  are consumed.** vibe3d's `meta` schema is `.strict()` (title, description,
  category, tags, preview, controls, materialSlots, parts, sockets as bare
  names) and has no extension slot -- verified against their schema, not
  assumed. But a `files[]` entry can be any file, so `thaikit.json` and
  `colliders.json` ride in the pack as ordinary files: a consumer's `vibe3d add`
  installs them verbatim, and thaikit's installer reads them back to fill
  physics, placement, pivot, destruction groups, budgets, the review score and a
  hand-tuned compound. The web app has ONE catalogue source, `packs/index.json`;
  `install-pack.mjs --source tree:packages/props` installs thaikit's kit
  straight from the tree, and `--refresh-item @thai-kit/<id>` rebuilds one item
  (promote runs it). An item's `version` hashes its `*.ts` and `maps/*` only, so
  a metadata edit never invalidates the level editor's prototype cache. Foreign
  pack items take LOCAL OVERRIDES (physics, placement, hand-tuned colliders,
  budgets) from the tracked `overrides/<ns>/<name>.json`.
- **A third-party pack is ADOPTED into a tree of its own, and a prop id may be
  qualified.** `install-pack.mjs` writes a downloaded pack's source to
  `adopted/<ns>/` (tracked; `pack.json` + `models/<name>/` + `vibe3d/`), gives
  every item a `thaikit.json`, and builds from THAT tree -- so
  `adopted/<ns>/models` is a second registry-core root and every skill works on
  `@ns/name` exactly as on a bare id (`parseId`, `storeOptionsFor`,
  `modelDir('@medieval-kit/bronze-bell')`, `scratch/@medieval-kit/bronze-bell`).
  The ref stays `@ns/name` because the item DIRECTORY is still the bare name;
  nesting under `packages/props/src/models/` was rejected because
  `readRegistry` walks one level and `ItemRef` is exactly two segments.
  `--upgrade` refuses over edited files, `--remove` deletes the tree,
  `fork-item.mjs` moves an item into `@thai-kit` with `forkedFrom` and VENDORS
  the shared pack source it imports (a pack item imports `../core/index.ts`;
  resolve those against the ORIGINAL directory, the copy has no `../core`).
  No licence gate, by decision. docs/adopting-packs.md.
- **`three` is external, always.** The bundle is CommonJS with a bare
  `require("three")`, and the host page injects its OWN three instance. A second
  copy of three means the factory's `Mesh` is not the renderer's `Mesh` and
  nothing draws. This is why an ESM build is wrong here: a bare specifier needs
  an import map, which either duplicates three or forces a fixed-name chunk out
  of Rollup.
- **The Meshy mesh is evidence, not the prop.** `scratch/<id>/reference.glb` is a
  structural and visual baseline — rendered through the same browser route as the
  candidate, measured band-by-band by `mesh_reference_compare.py`. Its topology
  and materials never enter the factory, and it never ships.
- **img2threejs owns quality, iteration and verification.** thaikit has no rubric,
  no judge and no improvement loop; `prompts/rubric.md`, `score.mjs`,
  `loop-state.mjs` and the critique skill are gone. Do not re-score a model — a
  second opinion with no evidence behind it is worse than none.
- **The state file is the authority, not the conversation.**
  `scratch/<id>/.img2threejs/state.json` holds the checklist, the loop counts and
  the evidence. `forge/next.py` exiting 3 is a hard stop: report the reason and
  stop. Never reconstruct progress from chat history.
- **`subject` changes the pipeline.** `prop` | `animal` | `character`. It selects
  the reconstruction profile, so a person left as `prop` is built with every
  anatomy gate silently skipped. `character` is for HUMANS — its landmark gates
  are MediaPipe face and pose extractors, so an animal runs the generic profile
  with the chirality and swept-arc gates instead.
- **The scene budget is four ceilings, not one number.** `targetTriangles`,
  `maxDrawCalls`, `maxMaterials`, `maxUniqueGeometries` — rasterisation, CPU
  submissions, shader switches, VRAM. They live per class in `prompts/budgets.json`
  and per asset as nullable overrides; `resolveBudget()` in `scripts/lib/config.mjs`
  is the ONLY place they are combined. A prop at a third of its triangle budget can
  still be what costs a low-end GPU its frame. `render-model.mjs` measures all four
  and warns; `promote-model.mjs` is the gate that refuses to ship an overrun.
- **The collider is DERIVED from the geometry; destruction groups are DECLARED on
  the asset.** They used to be the same kind of thing and they are not. A
  `destructionGroup` is design intent — the assemblies the prop must break into,
  empty meaning not breakable — and `promote-model.mjs` checks built against
  declared as an EQUALITY in both directions. A collider is a MEASUREMENT:
  `scripts/derive-colliders.mjs` evaluates the installed pack bundle under Node,
  voxelises its triangles and writes a compound of boxes and cylinders to
  `packages/props/src/models/<id>/colliders.json` in root-local metres, with `scale` as half-extents.
  The old `collider: 'box' | 'cylinder' | 'convex' | 'none'` enum is gone: it
  published one word to consumers, the harness discarded the shapes and kept the
  names, and the gate could only assert the count was not zero — so a hundred
  props shipped exactly one collider each and not one of them could be stood on.
  `physics.enabled` and `physics.massKg` are the declaration that word was
  pretending to be, and `physics.enabled` HALVES the part ceiling, so set it
  before deriving.
- **A collider without its self-check is the old system again.** The derivation
  casts rays down onto the real geometry and onto the compound and records
  `coverage` (below 0.99 is a player falling through), `p95`/`maxAbsDelta` (how
  wrong the floor is underfoot) and `ledgesPreserved`. `promote-model.mjs` gates
  on them. Saving a hand edit in the viewer CLEARS them, because a moved box has
  not been measured — never quote a derivation's coverage beside a shape somebody
  dragged. A `handTuned` file makes the derivation refuse without `--force`.
- **thaikit never scores a model, but it does carry the score.**
  `scripts/lib/review.mjs` reads img2threejs's own verdict out of the sculpt
  spec's `reviewHistory` (fidelity, layer scores, per-feature scores) and the
  state file's `loops`, and `promote-model.mjs` records it. Never hand-write a
  number into `model.review`: the drum wore a hand-entered 99.8 for as long as
  nothing carried the real 0.90 across, and a number nobody generated still looks
  like a measurement.
- **Pivots and sockets are required on anything that moves — and forbidden on
  anything that does not.** The default is one root pivot and no sockets. A named
  pivot promises a part turns on that axis and a named socket promises something
  attaches there; both are contract, and a sealed steel drum that declares eight
  pivots and ten sockets has described a machine that does not exist. Name them
  for the mechanism (`lid-hinge`, `wheel-front-l`, `handle-socket`), never for a
  place on the surface, and expose them on `root.userData.sculptRuntime`. The
  drawer's separate **pivots** and **sockets** toggles carry their counts, which is
  the fastest way to see both a marker in the wrong place and a static prop that
  was given axes nothing will ever turn.
- **One reference image per prop, never a turnaround.** `packages/props/src/models/<id>/preview.jpg`,
  recorded as `image`. `thaikit-preview-image` is the only thing that writes it;
  everything downstream consumes it.
- **Never write a `thaikit.json` directly.** Always go through
  `@thaikit/registry-core`, which holds ONE directory lock
  (`packages/props/src/models/.lock`) the web UI also respects, and whose
  `updateRegistry` diffs and writes only the records that changed -- so
  `updateAsset` touches one file. A direct write will be silently lost or will
  corrupt a concurrent one. A record whose `schemaVersion` is not the current one,
  or whose `id` disagrees with its directory, is refused by name.

- **`THAIKIT_READ_ONLY=1` is a deliberate mode; the registry-fault read-only is not.** Both set
  `state.readOnly`, so the same `guard`s and the same client banner fire, but the env flag also sets
  `state.publicReadOnly`, which is what the blanket `/api` middleware in `app.js` keys on: every
  non-GET answers 403 before any router runs, and that is what disables the bake on the public
  instance. The client asks `/api/health` once (`web/client/src/readOnly.js`) and HIDES its save,
  delete, upload, fork and rebuild controls rather than disabling them. The EXPORT dialog stays, as a
  preview of the bake settings and the last result on record, with only its `bake & export` button disabled. Local edits in the
  level editor still work and the dirty flag still shows; nothing is uploaded.
- **`THAIKIT_BASE_PATH` mounts the whole app under a prefix, and the client bundle bakes it in.**
  `app.js` hangs every route off ONE router mounted at the prefix (Express strips it, so routes still
  see `/api/...`); Vite sits on the ROOT app with `base` set, because it carries the prefix itself.
  The server prefixes every URL it hands out (`publicUrl` in `lib/catalogue.js` -- thumbs and bundles
  from `packs/index.json` are recorded app-root-absolute and prefixed at serve time) and the client
  routes every URL it builds through `url()` in `src/base.js`. A production build made without the
  variable serves `/assets/...` and 404s behind the proxy: `deploy.sh` builds into
  `web/client/dist-public` with it set and rsyncs that to the server's `web/client/dist`.
- **The public instance is `compose.public.yaml` on ssh.nonlocal.ca (`~/thaikit`), proxied at
  outdoordevs.com/thaikit.** That host has NO GPU, so the nvidia reservation in the other two compose
  files would refuse to start there; the public stack drops it along with the bake agent, the export
  mount and the img2threejs mount. `./deploy.sh` is the whole round trip; the nginx block is
  `deploy/nginx/thaikit.conf`. Pack bundles and level GLBs are rsynced up as build products rather
  than rebuilt on a 4-core, 8 GB box.

## The level editor, packs, bake and runtime

`/level` is a second page in the same client (a pathname switch in `web/client/src/main.jsx`, no
router). It edits a **GLB** -- `levels/<id>/level.glb` is the whole project: one node per
placement with `extras.tk = {kind:'placement', ref:'@pack/item', version, static, physics, ...}`
and the prop's meshes underneath, lights as `KHR_lights_punctual` nodes named `light_<id>`, spawns
as empties, and the settings on `scene.extras.thaikitLevel` (schemas in
`packages/level-schema`). On load the editor **re-evaluates every factory from `ref`** and only
falls back to the embedded meshes when the pack is gone; that is what makes "refresh pack" update
placed geometry. Export writes a second, self-contained GLB.

- **A pack is a vibe3d registry, and packs ship SOURCE, not bundles.** `scripts/install-pack.mjs`
  downloads the npm tarball, writes every item's inlined TypeScript under `packs/<ns>/<tag>/src/`
  (`{models}` -> `src/models`, `{vibe3d}` -> `src/vibe3d`, plus the three runtime templates from
  the vibe3d CLI vendored in `scripts/lib/packs/templates/`), wraps each model item so it exports
  thaikit's `createObjectModel(spec, options)` (unwrapping a `ModelInstance { root }`), and
  esbuild-bundles it. Then it constructs every item once in an isolated child process (6 min budget,
  4 at a time -- the scifi kit's occlusion bakes take seconds each and one model printed its whole
  geometry to stdout) to record size, cost, sockets and a derived collider compound
  (`deriveFromParts` in `scripts/lib/colliders.mjs`, bbox fallback). `packs/index.json` is the
  record; `packs/` is gitignored because a pack is re-downloadable.
- **A pack ships no pictures, so thaikit renders them.** `meta.preview` on a vibe3d item LOOKS
  like an image path and is a code reference (`.../model.ts#createPreview`, a preview scene for the
  pack's own site), so the installer's image-extension test correctly rejects all 110 of the scifi
  kit's. `scripts/lib/packs/previews.mjs` is the last install stage: one headless Chrome, ONE page
  reused across the pack, `render/harness.html` at the same 45/20 hero angle as thaikit's own
  tiles, sharp-resized to a 512 webp under `packs/<ns>/<tag>/previews/`. It is never fatal -- by
  then the pack is installed and usable, and no Chrome just means no pictures. `--previews <id>`
  (also the pack manager's `previews` button, `POST /api/packs/:id/previews`) redoes them from the
  bundles on disk with nothing downloaded. Two things it needed: the web image now installs
  `chromium` and sets `CHROME_PATH` (puppeteer-CORE, so npm never downloads a second browser), and
  the harness had to answer `three/webgpu` and `three/tsl` the way the editor does -- without the
  stub, 108 of 110 scifi items throw before they can be photographed. It also disposes the previous
  model now: a hundred undisposed factories in one page exhaust the GPU around item sixty.
- **Use the FULL npm packument.** `application/vnd.npm.install-v1+json` strips custom fields, and
  `vibe3d.registry` in package.json is the only thing that says a package is a pack.
- **`external: ['three']` in esbuild externalises `three/addons/*` too**, which the host cannot
  answer. `scripts/lib/bundle.mjs` carries a plugin that bundles `three/addons/*` and
  `three/examples/jsm/*` back in; their own bare `three` import stays external and shared. No
  thaikit factory imports an addon, so this changed nothing for them.
- **`three/webgpu` maps to the host's three; `three/tsl` is a stub.** Both shims
  (`scripts/lib/probe.mjs` `makePackShim`, `web/client/src/three/modelModule.js`) answer
  `three/webgpu` with the same THREE (the scene graph is shared with three.core.js) and `three/tsl`
  with a Proxy whose every property is a callable returning itself. The scifi kit imports TSL in a
  shared `wear.ts` that every model pulls in while only one model builds a node material; the stub
  lets 108 of 110 build, degrading wear to plain materials. The probe records `tslUsed`.
- **`Object3D.clone()` JSON-copies `userData`, and a factory root's `sculptRuntime` holds Object3D
  references** -- so `web/client/src/three/instances.js` harvests markers and bbox from the built
  prototype, strips every node's `userData`, and only then clones per placement. N placements of
  one prop share geometry, materials and the synthesised canvases.
- **three-stdlib's TransformControls ignores a `pointermove` whose `button !== -1`.** A real mouse
  reports -1 while moving; a synthetic test event that copies `button: 0` from the pointerdown
  drags nothing and looks like a broken gizmo.
- **The ground plane is a SETTING that bakes as tiles.** `settings.ground` (enabled, y, colour,
  margin) is one flat walkable surface under the whole map -- there is exactly one, it cannot be
  rotated or scaled, and the only thing anyone moves is its height. Its extent is DERIVED from the
  world bounds of everything placed, expanded by the margin on EVERY side, so adding a prop at
  the edge extends the floor under it. The rectangle is NOT snapped to the cell grid: it was, and
  a 1 m margin then only moved the two sides where bounds + margin crossed a cell line, by a whole
  24 m cell. The cells decide how the floor is CUT, so each tile is its cell clipped to the
  rectangle and the edge tiles are narrower than a cell. `buildExportScene` emits it as one ordinary
  STATIC placement per cell (`ground_<ix>_<iz>`, `@thaikit/ground`), which is the whole trick:
  partition, join, LOD, the lightmap and the manifest's collider list all key off the placement
  rows, so the floor needs no special case in any of them and the runtime needs no change at all.
  **Billboards are not ground.** The extent comes from world bounds, and a skyline imposter is a
  backdrop quad standing kilometres away -- so `levels/thepurge`, 20 placements of which 14 are
  yaw-billboarded imposters up to 3.1 km out, derived a floor of **5496 x 5568 m**. That is 53,128
  cells, so `MAX_TILES` silently clipped it to a lopsided 4096 that did not even cover the walkable
  map, and every one of those tiles was a separate Cycles bake target, an atlas island and a share
  of the lightmap's texels: **4142 bake objects for a level with 6 static props**, three hours at
  512²/16, the cheapest settings there are. `groundExtent` now skips any box whose `billboard` is
  not `none` -- 12 tiles, 72 x 96 m, 18 bake objects. The test is the billboard flag rather than a
  distance cutoff because that is what actually separates backdrop from level, and the flag is
  carried on the footprint boxes so ALL THREE callers agree: the editor's preview quad
  (`Viewport`), play mode's collider (`collisionWorld`) and the bake's tiles (`addGround`). The
  `truncated` flag existed all along and nothing read it; `addGround` warns on it now.
  A single 400 m quad would instead land in ONE cell, take one lightmap island for the level and
  simplify to nothing at LOD2. The collider is a box a quarter-metre THICK hanging below the
  surface, not a zero-height sheet: a plane is a knife edge to a character controller. Its default
  colour is `#8b909b` because the first try, `#4a4f5c`, was invisible under the editor's night rig
  and made the toggle look broken.
- **The sky is a setting with SIDECAR images, and it is three domes, not a background.**
  `settings.sky` is a base backdrop (one ground-level `panoramic` plate, or six
  cube faces -- the old `equirect` mode, which shipped a 2D panorama as itself with
  no mip chain and a collapsing pole, is GONE and reads back as `none`), an additive
  cloud dome that drifts, and a procedural star field -- authored on the `sky` tab
  beside `object` and `level`. The pictures do NOT go in the level GLB: it is
  rebuilt and re-uploaded whole on every save, so they are uploaded to
  `levels/<id>/sky/<slot>.<ext>` (`POST /api/levels/:id/sky/:slot`, one file per
  slot, replaced not accumulated) and the setting records only the filename.
  `/levels` already serves them statically, so the editor reads them back with no
  route. The BAKE is what makes a shipped level self-contained again: it reads the
  sidecars off disk and writes them into the GLB as unreferenced KTX2 images, the
  lightmap's arrangement, with the indices on `manifest.sky`.
  `packages/level-runtime/src/sky.js` (`buildSky`) is shared VERBATIM by
  `loadLevel()` and the editor's `<SkyDome>`, so the star shader you art-direct is
  the one that ships. What it cost:
  - **The editor resamples a panorama into a cubemap at load, on the GPU, and
    never samples the equirect itself.** `web/client/src/level/equirectCube.js`
    renders six faces through a `CubeCamera` into a `WebGLCubeRenderTarget`
    using `BASE_FRAG`'s `PANORAMIC_SOURCE` arithmetic verbatim -- elevation
    remap plus nadir fade -- then disposes the source texture, so `SkyDome`
    always hands `buildSky` a `CubeTexture` and the editor takes the same
    `CUBE_SOURCE` branch the shipped level does, `lodBias` and all. An unmipped
    8192x2048 backdrop is 64 MB the whole dome samples every frame (it CANNOT
    carry mips -- the equirect pole collapses), which is what "the editor got
    slow when I added a sky" is. Faces are `width/PI` capped at **3072**, the
    bake's own ceiling, so the preview resolves exactly what ships. It was 1024
    to hold the preview to 33 MB -- nothing here is compressed, so six 2608 faces
    with mips are ~217 MB against the equirect's 64 -- and that bought a preview
    a whole mip softer than the level, which makes a soft SOURCE and a soft
    preview indistinguishable, the one judgement the sky tab exists to support.
    The 217 MB is the price of that call; it is clamped to the GPU's
    `maxCubemapSize`, which WebGL2 only guarantees to 2048, so a low-end GPU
    previews softer than it ships and `equirectToCubeTexture` warns when that
    binds. Measured against the old 2D path over a synthetic
    panorama at seven bearings and three nadir settings: mean |diff| 0.02-0.41
    of 255, the only pixels over 8 being a hard 1-texel test edge and the
    equirect ZENITH, where the cube is the correct one. The decoded image is
    kept and the GPU texture is not, so a nudge of the spans or the ground fade
    re-bakes in milliseconds without re-fetching 16 megapixels. Do not measure
    this under SwiftShader or llvmpipe -- a software rasterizer's sampler cost
    is filter ALU, not cache misses, and it reports the cubemap as SLOWER.
  - **Nothing anybody downloads is called `px.png`, so the cube tab imports a
    ZIP.** A skybox from a generator or an asset pack is six files named
    `_right _left _up _down _front _back` (also `_top`/`_bottom`), and picking
    them through six file dialogs is six chances to put the left face on the
    right. `POST /api/levels/:id/sky/cube-zip` unpacks the archive with
    `scripts/lib/unzip.mjs` -- 60 lines over `node:zlib`, because the one copy of
    `fflate` on disk is a TRANSITIVE drei dependency hoisted here by chance --
    maps the names through `faceFromFilename()` in `@thai-kit/level-schema`, and
    writes all six slots. Three things it insists on: ALL SIX or none (a partial
    set is a sky that silently never draws, as `CubeTextureLoader` never fires
    `onLoad`), square and equal-sized, and re-encoded to WEBP -- six 2048x2048
    PNG faces are ~50 MB the editor re-fetches on every load, and the bake
    resamples them either way. **`_front` is -Z and `_back` is +Z**, three's own
    convention -- the default camera looks down -Z, so "front" is what is in
    front of it. Shipped the other way round first, on the assumption the naming
    came from Unity, and it put a seam down all four vertical joins. Do not
    settle this from convention lore: ``scripts/level/check-cubemap.mjs` scores an
    assignment by the mean |difference| across the pixels either side of all 12
    shared cube edges, and on a real pack the two orders measured **1.19** and
    **14.70** against an in-face adjacent-column floor of **2.24** -- the right
    one is smoother than ordinary detail INSIDE a face, and the best wrong one
    was 7.57. Re-run it on any cubemap that looks subtly off. `__MACOSX/._*` AppleDouble forks are skipped -- they match
    the suffix and are not images. `accept` is a bare `.zip`, not a mime
    type, and the control also takes a dropped file.

    **A file chooser that stops opening is chrome-devtools MCP, not the page.**
    `upload_file` turns on `Page.setInterceptFileChooserDialog` for that TARGET
    and leaves it on, so from then until the tab is closed EVERY file input on it
    silently does nothing when a human clicks it -- the dialog is suppressed and
    handed to CDP instead. It cost a real debugging session and a wrong fix: the
    button was never broken. Never leave a page you called `upload_file` on in
    front of the user, and when a chooser "does nothing", check whether an
    automated upload has touched that tab BEFORE reading any code.
  - **BOTH picture modes ship a real compressed cubemap.** Six SEPARATE KTX2
    files cannot be assembled into a `CubeTexture` -- three has no loader that
    stitches compressed 2D images. But ONE KTX2 with
    `faceCount: 6` is fine: `ktx create --cubemap` writes it and `KTX2Loader`
    returns a `CompressedCubeTexture` unasked (`isCubeTexture` true), so
    `buildSky`'s existing `CUBE_SOURCE` branch takes it with no runtime change.
    `cube` mode therefore resamples NOTHING: it is the one mode that already has
    cube faces, and it hands them straight to `encodeKtx2Cubemap`. It used to
    flatten them to a 2048-wide equirect first, which on a real 1024 face pack
    measured **2048x1024, faceCount 1, 1 mip, 5.7 px/deg** against the faces'
    own **1024x1024, faceCount 6, 11 mips, 8.9 px/deg at face centre** -- half
    the resolution
    the author supplied, thrown away to reach the projection with the collapsing
    pole and no mip chain. It was a leftover from before `encodeKtx2Cubemap`
    existed. The cost is bytes: 167 KB became 583 KB, which is what a mip chain
    and twice the angular detail weigh. `maxFace` (3072) caps cube mode too, for
    the same reason it caps the panoramic path -- face size is the VRAM bill, six
    times over.
    `cubeToEquirect` and `equirectToCube` are inverses of three's own convention
    (`u = atan2(z,x)/2PI + 0.5`, `v = asin(y)/PI + 0.5`) and must stay so; the
    first version was a quarter turn out and looked entirely plausible. Nothing
    in the bake calls `cubeToEquirect` any more -- it survives as the inverse
    that guards `equirectToCube` in `sky.test.mjs`, which is the only thing
    keeping that arithmetic honest.
  - **A `panoramic` source is a ground-level 360 whose ground is SYNTHESISED.**
    The projection crushes the nadir into one row, so whatever is down there was
    invented, and resampling it onto `ny` makes that row a full-resolution square
    underfoot. `equirectToCube` fades everything below `nadir.startDeg` into one
    colour by `endDeg`, in DIRECTION space rather than on `ny` alone, so every
    face crossing the band blends identically and the sides meet the bottom with
    no step. The fade runs 0..8 degrees BELOW the horizon and both ends are
    measured, not chosen: it starts AT the horizon because a panoramic sky is the
    top half of the dome and nothing else, and it ends FAST because a wide fade
    is a blend, not a cut -- at 0..25 the mix was still two thirds image ten
    degrees down and the aerial half of the panorama glowed through the ground as
    orange street lights underfoot. The colour is MEASURED off the horizon rows by the client at upload
    (`measurePanorama`) and recorded on the setting, because the editor previews
    the fade in the shader while the bake bakes it into the faces -- re-measuring
    at bake time is how those two drift apart. `base.elevation` says what the
    rows span: 2:1 is a whole sphere, 4:1 the sky alone. And a cube face is an
    ordinary square, so unlike the equirect backdrop the cubemap ships WITH a mip
    chain -- the pole collapse is the equirect projection's artefact, not a
    property of skies, and WebGL2 filters cube seams unconditionally.
  - **A backdrop that RINGS a level needs `nadir.mode: 'cut'`, not a fade.** A
    fade thins the panorama's lower hemisphere toward a colour and leaves its
    first `startDeg` degrees untouched, so an aerial plate keeps a whole second
    city under the map with its roads showing through the unfaded band -- which
    is what `levels/thepurge`'s first sky did, its skyline sitting at +5° with
    drone-shot streets filling everything below. `cut` ends the image AT the
    horizon: `ny` is one flat colour written directly (no resampling a million
    texels of a face that is entirely past the fade), the four side faces stop
    dead at the skyline, and `auto` sinks to BLACK rather than the mean of the
    horizon rows, which for a night city would paint the skyline's own glow
    underfoot as a lit disc. It is a hairline fade, not a branch:
    `resolveNadirFade()` in `@thai-kit/level-schema` turns `cut` into 0..0.35°
    so the editor's preview shader and the bake's resampler run the SAME
    arithmetic -- a genuinely hard edge stair-steps, because a cube face's row
    is not an iso-elevation line. Measured on the old panorama at 512²: a side
    face went 48.8 KB -> 20.5 KB.
  - **The nadir fade's defaults lived in three places and two of them were
    stale.** The schema said 0..8°, `equirectToCube` defaulted to 8..40 and
    `panoramaToFaces` passed `nadir.startDeg ?? 8, nadir.endDeg ?? 40` -- so any
    setting the editor had not written got EIGHT degrees of unfaded panorama
    below the horizon. `resolveNadirFade()` is now the only place the defaults
    exist; callers pass the setting through and never guess.
  - **The stretch and the floor are DIFFERENT knobs, and only one of them is
    `nadir`.** `nadir` decides what happens BELOW the horizon; `base.elevation`
    decides how tall what is above it looks. A 2:1 plate read as -90..90 spreads
    its rows over the whole sphere, so every building is twice as tall as the
    same plate read as 0..90 -- and no amount of fading or cutting changes that,
    which is what "fading and cutting are doing the same thing" means when you
    hear it. `measurePanorama` only ever GUESSES the span off the aspect ratio,
    so the SkyPanel now has `spans from/to` plus a "top half only" button
    (0..90 + cut). Squeezing a 2:1 into 0..90 is only right when the image's
    content really is sky-above-horizon: do it to an aerial plate and the roads
    move from underfoot to overhead.
  - **Four street-level plates stitched beat any image-to-360.** The route that
    works for a backdrop that RINGS a level is
    `scripts/level/stitch-plates.mjs`: N rectilinear plates, each treated as a
    camera on its own bearing, inverted per equirect texel and cross-faded by
    angular distance from each plate's centre. Four nano-banana-pro 4K plates
    (6336px over 95 degrees = 67 px/deg native) give an 8192-wide equirect --
    22.8 px/deg, EXACTLY what a 2608 face resolves at its centre, so there is
    nothing left to upscale
    and a seam-preserving upscaler would only invent detail already there.
    Measured wrap seam **0.60** against an adjacent-column floor of 0.25, seamless
    by construction rather than by repair. Three things it needs: the plates must
    be shot at STREET level tilted UP (a rooftop or drone plate has its towers
    BELOW the horizon, so cutting at the horizon throws the city away -- this is
    the same defect as the old panorama, and it is invisible until you profile
    the rows); the far left and right edges must be prompted LOW, distant and
    hazy so the joins land where nothing is recognisable; and `pitch` and `hfov`
    must satisfy `pitch - atan(tanV * cos(180/N)) <= 0`, because a rectilinear
    plate's bottom edge bows UPWARD in an equirect and at 90/20 each join wore a
    black wedge notch where the bottom edge sat at +3.3 degrees. 95/15 clears it.
  - **No text-to-image model will draw an equirect, and the good ones fail
    convincingly.** nano-banana-pro at 4K (6336x2688) returns either a
    beautiful FLAT photograph -- candidate A, wrap seam mean|L-R| **24.25**
    against an adjacent-column floor of 0.88, no 360 content at all -- or the
    mirrored-band hallucination, the skyline repeated top and bottom around a
    black stripe, whose zenith row means 77 with max 255. Both look like
    panoramas in a thumbnail. Check the ROW LUMA PROFILE before anything else:
    a ground-level sky is brightest at the horizon and darkest at the zenith,
    and the old panorama read 90-102 at 75-90° falling to 39 at the horizon,
    which is the whole "buildings are stretched" complaint stated as a
    measurement. The route that works is t2i for the PLATE, then
    `fal-ai/hunyuan_world` for the wrap. Its `aspect_ratio` has no `2:1` --
    `21:9` is the closest, and the fix is to stretch VERTICALLY to 2:1, which
    keeps every horizontal pixel and only interpolates the axis about to be
    upscaled. A rejected aspect_ratio is a 422 at result-fetch time and is not
    billed.
  - **A sky's sharpness is px/DEGREE, and a cube face's density is measured at
    its CENTRE, not its average.** An equirect of width W carries `W/360`
    px/deg. A cube face spans 90 degrees, so `size/90` looks like its density
    and is only its AVERAGE: a face is a TANGENT plane, densest at the corners
    and sparsest in the middle, where one pixel step is `atan(2/size)` --
    **`size * PI / 360` px/deg**, a factor of PI/4 lower. A 2048 face resolves
    **17.9** px/deg where the camera is actually pointed, not 22.8. A 1080p
    screen at 60 degrees FOV wants 18; the editor at fov 50 and dpr 1.5 wants
    21-27. So face size is DERIVED as **`width/PI`** (2608 for an 8192
    panorama), capped by `maxFace` -- the size whose CENTRE matches the source.
    It was `width/4`, which threw away 21% of an 8192 plate's linear resolution
    before anything else touched it and read as "the sky is blurry"; the
    resample itself is not the loss (2x supersampling the faces changed the
    laplacian energy 24.47 -> 24.64, i.e. nothing). The other half of that
    complaint is `base.lodBias`: `levels/thepurge` had it saved at 0 against the
    -0.5 default, which is a half-resolution mip blended into a sky that was
    already under-resolved. The hunyuan panorama was 1920 wide -- **5.3 px/deg**
    -- so faces at a hard-coded 1024 were UPSAMPLING it 2x and paying for bytes
    that carried no detail. Fixing the pipeline without fixing the source does
    nothing.
  - **The resample's RECONSTRUCTION FILTER was costing 40%, and no face size
    fixes that.** Once `faceSizeFor` derives a face carrying the source's own
    density, the resample runs at ~1:1 -- and a 1:1 resample lands on arbitrary
    fractional phase, where hardware bilinear is a 2x2 box blur. Measured on the
    8192 plate's +X face at 2608, same window, same projection, only the filter
    changing: source **34.16**, NEAREST **35.02**, bilinear **21.06**,
    Catmull-Rom **25.58**. Nearest matching the source is the proof that the
    texels are there and the loss is entirely the filter; nearest is not the fix,
    because it scores well by ALIASING and crawls when the camera turns. So both
    resamplers are Catmull-Rom: `sampler()` in `equirect-to-cube.mjs` and
    `sampleCatmullRom` in the editor's `equirectCube.js` FRAG, same weights.
    Costs: 11 s for six 2608 faces in Node (it was ~3), and 16 taps in a shader
    that runs six times in the life of a panorama. Two things the shader needs --
    the taps go through `texture2D` so the sampler's own Repeat/ClampToEdge
    carries the seam, and the weights are applied UNROLLED, because indexing a
    vec4 by a loop counter is a constant-index-expression the ESSL1 spec allows
    and some drivers refuse.
  - **"The skybox is zoomed in" was the editor's FIELD OF VIEW, and the fov is
    HORIZONTAL now.** The Canvas camera was a hard-coded `fov: 50`, and three's
    fov is VERTICAL -- so the horizontal angle actually on screen fell out of
    whatever width the two side panels left behind. At 1360x1041 that is **62.6
    degrees across**, against the **100** a 360 viewer like Pannellum shows by
    default and the ~90 a game does. Everything in the sky was therefore about
    1.6x larger than in the visualiser the plate was judged in, which reads
    exactly like a pipeline defect and is not one. `view.fov` in the store is
    now horizontal degrees, defaulting to **90**, with a toolbar select
    (60..120) and `CameraFov` in `Viewport.jsx` deriving the vertical from the
    live aspect: `tan(vfov/2) = tan(hfov/2) / aspect`. Play mode shares the
    camera, so it gets the game-standard 90 too. Verified live: 75.9 vertical,
    90.0 horizontal, and the skyline that ran off the top edge now fits with
    room above it.
    Do NOT reach for the plate's standoff first -- that was the wrong diagnosis
    here and it cost a whole exchange. It is still worth knowing how to measure:
    scan the columns for the highest lit structure and convert the row with
    `90 - (row / height) * 180`. This panorama's tower tops sit at **40.3°**,
    which is a real property of the plate (Petronas is 452 m, so the camera
    stood 533 m away) -- but a 360 has no depth, so that number only matters
    when you are choosing a plate, never when the SAME plate looks different in
    two viewers. Two viewers disagreeing is fov.
  - **The editor's `dpr` cap was the last thing making the preview a preview.**
    `Viewport`'s Canvas asked for `dpr={[1, 1.5]}`, so on an ordinary HiDPI
    laptop (`devicePixelRatio` 2) a 1360x1041 viewport rendered into a 2040x1561
    buffer and the BROWSER upscaled that to 2720x2082 -- the whole editor, sky
    included, arriving through a 1.33x upscale the shipped game does not apply.
    It is `[1, 2]` now. Read the numbers off the live page rather than guessing:
    `window.__r3f` is exposed in DEV, so `gl.getPixelRatio()`,
    `gl.domElement.width/height` and `camera.fov` give the px/deg the screen can
    actually show -- 41.6 vertical here, against the sky's 22.8.
  - **Past that point the sky is SOURCE-limited, and the way to prove it is a
    matched window against the plate.** Render the sky in the editor, crop the
    middle of the render buffer, and crop the SAME solid angle out of the
    panorama: 512 px of a 1561/50 deg frame is 16.40 deg is 373 px of an 8192
    plate. Rendered scored a laplacian energy of **11.08** against the source
    window's **7.30** -- the renderer is showing everything the plate has and
    then some (Catmull-Rom's overshoot), so any remaining softness is
    magnification, not the pipeline. A 8192 plate is 22.8 px/deg; feeding a
    41.6 px/deg display wants one about **15,000** px wide.
  - **The bake is the FLOOR, not the ceiling.** The editor holds uncompressed
    RGBA faces off a GPU resample; the shipped cubemap is ETC1S at half a byte
    per pixel. A baked sky is never sharper than the preview, so "it will look
    better once it ships" is backwards.
  - **Measuring sharpness with laplacian energy needs a matched WINDOW, twice
    over.** Two false readings were chased here. Comparing a face crop against a
    source crop of different angular width reads the CONTENT density, not the
    filter -- a 2048 face's centre 1024 px spans 53 degrees against a 2608
    face's 43, so the coarser face scored HIGHER. And a window that includes the
    cut ground is half flat colour: that read a correct 2608 face at 12.27
    against the source's 34.16 and looked like a catastrophic pipeline loss.
    Crop the same solid angle, at the same px/deg, with the nadir off.
  - **Upscale the sky-only crop, and wrap-pad it first.** Half a 2:1 panorama is
    thrown away by `panoramic` mode, so crop to the upper hemisphere BEFORE
    upscaling and every pixel bought lands where it is used -- 1920x480 through
    `fal-ai/clarity-upscaler` at 4x is 7680x1920, 21.3 px/deg, and 10x the
    laplacian energy of a plain lanczos 4x (13.9 vs 1.4), so it is real detail
    and not resampling. Clarity is TILED diffusion and does not know the image
    wraps: pad each side with 45 degrees taken from the other end, upscale, then
    crop the pad back off. Even then the seam wants a short cross-fade whose
    strength is HIGHEST at the outermost column and decays inward -- inverted,
    it leaves the seam exactly as it was (measured mean 2.34 -> 0.93, against a
    0.95 natural adjacent-column floor).
  - **A cubemap sky needs a NEGATIVE mip bias, not a disabled mip chain.** A sky
    authored denser than the screen is minified, so the GPU picks a fractional
    mip and trilinear blends in a half-resolution level -- correct filtering, and
    visibly softer than the display can show. Against a 3x3 supersampled
    reference at 60 degrees FOV: bias 0 scored RMSE **1.42**, -0.25 **0.85**,
    -0.5 **0.52**, and level-0-only **0.52**. So `base.lodBias` defaults to
    **-0.5** -- all of the detail back, with the chain still there for the wide
    FOV and small viewport where the backdrop really is minified several times
    and city lights would crawl. Sampling is `textureCube(uCube, dir, uLodBias)`,
    whose bias overload is valid in both ESSL1 and GLSL3.
  - **A cube face's ROW is not an iso-elevation line.** Its edge columns look
    along `(1, -v, +-1)`, which is `asin(v / sqrt(2 + v^2))` below the horizon --
    shallower than the `atan(v)` at its centre. At 10 degrees down the corners
    are still at 7, so a fade that ends at 8 has not finished across the whole
    row until about 12. A side face also spans only +-45 degrees, so its BOTTOM
    row looks 45 degrees down and the horizon is its MIDDLE row; both mistakes
    cost a test rewrite each.
  - **Cube faces are NOT flipped; equirects are.** `CubeTexture.flipY` is false
    in three, for the editor's `CubeTextureLoader` preview and the runtime's
    `CompressedCubeTexture` alike, so both read row 0 as the top and there is
    nothing to reconcile. Flipping the faces the way `prepareSkyImages` flips an
    equirect ships the sky upside down.
  - **Every sky image ships FLIPPED.** The editor loads PNG/JPEG through
    `TextureLoader`, where `flipY` defaults true; a KTX2 arrives as a
    `CompressedTexture`, which ignores `flipY` because WebGL cannot flip a
    compressed upload. Flipping the pixels once in `prepareSkyImages` is the only
    place the two paths can agree.
  - **`scene.background` is the wrong home for a panorama.** Three does not sample
    an equirect background directly -- `WebGLEnvironments.getCube` converts it into
    a `WebGLCubeRenderTarget` sized by the texture's HEIGHT (24 MB of VRAM for a
    2048x1024 sky) and copies `minFilter`/`generateMipmaps` off the source, so a
    KTX2's mipmap filtering with no generated chain makes the target incomplete and
    it samples BLACK. It rendered fine in the editor and vanished in the shipped
    level. The base is a dome sampling the panorama as itself.
  - **The backdrop ships with NO mip chain** (`minFilter = LinearFilter`, and the
    bake encodes it without one). An equirect's `u` sweeps the whole panorama
    across a few pixels at the poles, so automatic mip selection picks the smallest
    level and the zenith collapses to the average colour of the entire sky -- a
    grey disc directly overhead.
  A hand-written `ShaderMaterial` also gets none of three's output pipeline: without
  `#include <tonemapping_fragment>` and `#include <colorspace_fragment>` the domes
  write linear values into a buffer the renderer already treats as encoded, and a
  pure blue sky renders half dark. Both domes set `raycast = () => {}`, or
  `placementPoint`'s forward ray meets the sky first and every object lands on it;
  and `smoke-level.mjs` passes `sky: false`, because `frameStats` measures the share
  of the frame that is not the backdrop and a sky makes every pixel foreground.
- **The QUICK EXPORT bakes ONE cell as a playable level, and it is filtered in the BROWSER.**
  The export dialog's `scope: one cell` cuts the scene down inside `buildExportScene` (the
  `cell` option): the placements whose bbox centre falls in the cell, ONE ground tile covering
  the whole cell (not the margin-clipped extent -- the player needs a floor everywhere they can
  walk), the moon always, the point/spot lamps that stand in the cell or whose `distance` reaches
  it (a `distance` of 0 is INFINITE in three, so those count only when standing inside, or every
  lamp on the map would come along), the level's spawns inside it, and a spawn named `quick` that
  `placeSpawn` puts on free ground nearest the lamps, facing the nearest spot. It filters there
  and nowhere else because every downstream stage -- partition, join, LOD, the Cycles bake,
  colliders, `dynamic`, the manifest -- keys off the placement rows in `thaikitBake`. The
  pipeline learns only WHERE and WHAT NAME: `--cell <ix>_<iz>` builds under
  `levels/<id>/build/cell_<key>/` and delivers `<id>_<key>.glb`, through `buildDirOf` /
  `exportNameOf` in `scripts/level/pipeline/build-dir.mjs` (verify and smoke take `--cell` too),
  so a full build's raw, stages and level.glb are never touched. The job record, log and out file
  stay in `build/`: one bake per level at a time, quick or full, with `cell` on the record. The
  raw carries `thaikitBake.cell` and the pipeline refuses a mismatch. `auto` picks the
  selection's cell, else a spot-lit cell at random (`pickCell` in
  `web/client/src/level/export/quickCell.js`), and the choice rides on `store.quickCell`, which
  `QuickCellOverlay` paints in the viewport so what is about to be baked is visible behind the
  dialog and after it closes. Measured on `lamptest`: 5 s of Cycles for the cell against 60 for
  the level, same settings.
- **A group is a remembered multi-select, not a transform node.** "Join" names a set of
  placements, lights, spawns and other groups so they drag, turn and scale as one unit; nothing is
  merged and nothing is reparented. Every member keeps its own WORLD transform, so the bake, the
  cells, the colliders, the manifest and the runtime never learn that groups exist -- which is why
  `groups: [{id, name, children}]` can ride flat on `scene.extras.thaikitLevel` beside `placements`
  and children can be entity ids OR other group ids, to any depth. `web/client/src/level/groups.js`
  is the whole model (`groupTransform.js` the numeric fields: position is the DERIVED centroid, and
  `group.rotation` is an accumulator every rotate drag and field edit composes into, so the field
  can read what the assembly has been turned by instead of 0 for ever): `expandIds` turns the selection into the leaves the gizmo actually moves (it
  drags them exactly as a hand-made multi-select), `rootOf` is what a viewport click resolves to
  (Alt-click reaches the piece inside), and `pruneGroups` -- run inside `commit` -- drops any group
  a delete has emptied, so the outliner never grows folders that name nothing. A group id is only
  ever `g-`-prefixed, which is how `kindOf` and `findEntity` stay unbothered by them.
- **A new object lands under the CROSSHAIR, not under the pointer.** `placementPoint` casts the
  camera's forward ray through the centre of the frame and takes the first thing it meets -- another
  object's surface, or the ground plane -- and with neither, puts the item in front of the camera at
  `r / sin(fov/2) * 1.35`, the distance that frames it whole. The grid step snaps x and z ONLY: the
  surface it landed on is the answer for y, whatever the grid says. The old behaviour was
  `lastGroundHit` at y=0, which after a pick from a modal is wherever the pointer last crossed the
  plane on its way to the button.
- **The bake runs in the browser first, then Node.** Procedural textures are canvases that only
  exist in a page, so `web/client/src/level/export/buildExportScene.js` materialises every
  factory, expands `InstancedMesh`es, tags meshes with placement/cell/static, and ships a raw GLB to
  `POST /api/levels/:id/bake`; `scripts/level/bake-level.mjs` does the rest with gltf-transform:
  fold base colour into COLOR_0 so tinted twins dedup, normalise attributes, flatten, reparent
  static meshes under `cell_<ix>_<iz>/lod0` and dynamic ones under `dynamic/<placement>`, `join()`
  (siblings only, so never across cells), LOD tiers with meshoptimizer (lod1 quality at 0.4, lod2
  sloppy at 0.15 -- sloppy needs an error budget of ~0.5, at 0.01 it keeps 98% of the triangles),
  KTX2 through the `ktx` CLI, meshopt, and the manifest on `scene.extras.thaikitManifest`.
  `doc.transform(fn)` returns the Document, NOT `fn`'s result -- call custom stages directly.
  gltf-transform logs to stdout; the pipeline's stdout is one JSON line, so its loggers are silent.
- **`prune()` strips `TEXCOORD_0` from untextured meshes, and Blender then makes the lightmap layer
  the FIRST UV layer** -- exported as `TEXCOORD_0` where the pipeline expects `TEXCOORD_1`. Keep
  attributes through prune and give every mesh a base UV layer before adding `lightmap`.
- **The sky LIGHTS the bake, and the world is never a flat colour.** Cycles used to see one
  `Background` node holding `environment.hemisphere.sky`, so a level with an authored panorama baked
  as though lit by its average tone -- the art direction was absent from the lighting it should
  dominate -- and `hemisphere.ground` never reached Blender at all, so everything was lit from below
  as though the floor glowed. `prepareSkyImages` is hoisted ahead of stage 2 now (it also stops the
  10-30 s panorama resample happening twice), its six faces are folded back to a 1024x512 equirect
  with `cubeToEquirect`, and that drives a `ShaderNodeTexEnvironment`. Both picture modes converge
  on the SAME faces the level ships, so the bake is lit by the pixels the player sees, with no
  second interpretation of the source. 1024 is plenty -- diffuse GI is a low-pass filter integrated
  over hemispheres. With no sky picture the world becomes `Generated -> Z -> MapRange -> ColorRamp`,
  which is three's own `mix(ground, sky, y*0.5+0.5)`, so it matches what dynamic objects still get
  from the HemisphereLight. **The guard that protects everything already tuned** is that a FLAT
  image at a given linear value must bake identically to the flat colour it replaces --
  `levels/<id>/build/calib` and `probe-lightmap --compare`. `cubeToEquirect` was dead code kept
  alive only by `sky.test.mjs`; this is what it is for.
  **The yaw is NEGATED.** The runtime turns the DOME by `+rotationDeg`; Blender's Mapping node
  (type POINT) rotates the LOOKUP VECTOR, and rotating the lookup by +phi turns the content by
  -phi. glTF +Y and Blender +Z agree in handedness under the `(x, y, z) -> (x, -z, y)` swizzle the
  moon already uses, so the sign is the only correction. Derived, not measured -- `thepurge` bakes
  at rotation 0 -- so check it against a picture the first time a level actually turns its sky.
- **The atlas is LDR, so bright bounce is DIVIDED OUT rather than clipped.** `clip(lin, 0, 1)` left
  7.5% of covered texels pinned at full scale on a real bake -- one in thirteen, and precisely the
  emissive-lit surfaces the RGB channel exists to carry. The bake now divides by a `range` scalar
  (the 99.9th percentile of the PER-CHANNEL PEAK over covered texels, quantised to quarters, capped
  at 16) and records it on `manifest.lightmap.range`; `loadLevel` folds it into `lightMapIntensity`, which
  three's `lights_fragment_maps` already multiplies by, so it costs NOTHING at runtime. p99.9 rather
  than the max so one runaway specular texel cannot dim the level. `range` defaults to 1 and a bake
  with nothing above 1 gets exactly 1, so an LDR level is byte-identical to before. RGBM was
  rejected: three's lightmap chunk has no decode hook, it loses the hardware sRGB decode, and
  bilinear filtering across texels with different exponents is wrong.
  **The percentile must follow the CHANNEL, not the luminance.** Clipping happens channel by
  channel and luminance weights blue at 0.0722, so a blue night sky pegs its B channel at full scale
  while its luminance sits at 0.07 -- nowhere near any luminance percentile. The first version used
  luminance and reported `range 1, 0.03% clipped` on an atlas where **2.1%** of covered texels were
  actually at full scale, two thirds of them in blue alone. What caught it was
  `probe-lightmap.mjs` disagreeing with the bake's own number: the probe counts stored bytes at full
  scale, the bake was computing a percentile, and when a tool and the thing it measures disagree one
  of them is wrong. Never reconcile that by picking the more convenient number.
- **Blender's image writer UN-PREMULTIPLIES, and `CHANNEL_PACKED` does not stop it.** The lightmap
  packs the moon's visibility into alpha, so `img_out.save_render()` was dividing every texel's
  sky-and-bounce RGB by that mask -- approaching a divide by zero wherever the moon was fully
  occluded. Measured on a real bake: **24% of fully shadowed texels pinned at full scale**, and
  shadowed texels averaging **13.5x BRIGHTER** than lit ones in a channel the moon is not part of,
  with the per-bin means falling off as 1/alpha. That is physically backwards -- a moon-shadowed
  spot is usually under something and sees LESS sky -- and it shipped in every level ever baked,
  because a too-bright shadow still looks like a shadow. `bake_lightmap.py` writes the 16-bit RGBA
  PNG itself now (numpy + zlib + struct, ~20 lines), which also takes the view transform out of the
  equation: the sRGB encode is explicit rather than a scene setting that must first be talked out of
  tone mapping. **Alpha is NOT sRGB-encoded** -- it is a mask, and an sRGB texture stores alpha
  linearly, so encoding it would deform the moon's shadow.
  **And `Image.pixels` is BOTTOM row first.** The hand-rolled writer that fixed the
  un-premultiply wrote the pixel array in order, which is a PNG with Blender's bottom row at the
  top. The glTF exporter writes `v' = 1 - v` on the assumption the image was saved the other way
  round (`save_render()` did that flip for free), so the whole atlas shipped upside down against
  its UVs: every ground tile sampled some OTHER island -- roof rectangles, facade strips, the
  gutter between two tiles -- and read as jagged shadows nothing was casting, on the floor and up
  the sides of every building. It looked like billboards casting shadows, and it looked like a
  starved lightmap; it was neither, and a real-time shadow toggle changed nothing. `write_png16`
  does `u16[::-1]` now. How it was settled: sample the atlas inside each ground tile's `TEXCOORD_1`
  box under both row orders (`scratch/_lm/flipcheck.mjs` did it) -- the right one reads a flat
  0.177 +- 0.006 with alpha 1.000 on every open tile, the wrong one reads alpha 0.09..0.5 on tiles
  with nothing near them. A lightmap that "shows shadows" where no caster stands is a UV/row
  mismatch before it is anything else.
  How it was caught: `probe-lightmap.mjs` said 2.1% of texels were clipped and the bake said 0.10%.
  A tool and the thing it measures disagreeing by 20x is a fault in one of them, and the way to find
  out which is to bin the disagreement against another channel -- here, clip rate against alpha,
  which came out 24% in the shadowed bin and 0.00% in every middle bin.
- **A lightmap UV set belongs to a PLACE, so nothing may share a primitive.** Stage 1's
  `dedup({ MESH })` is right for shipping -- twelve identical ground tiles have no business being
  twelve copies of a quad -- but it leaves twelve NODES pointing at one primitive, and both halves
  of the bake key off nodes. `splitForBlender`'s map then held twelve entries aimed at the same
  buffer, so the swap-back wrote twelve UV sets over each other and eleven tiles shipped with
  another tile's lighting; in Blender the same sharing arrives as twelve objects on one mesh
  datablock, and a UV layer lives on the MESH, so all twelve baked to one island. It renders as a
  perfectly plausible floor that is simply lit wrong, which is why it survived. Both halves now
  un-share: `splitForBlender` clones a primitive that another node has already claimed (and only
  disposes a source mesh when no Node still references it), and `bake_lightmap.py` copies any
  datablock with `users > 1`. **The thing that caught it was arithmetic, not looking**: the summed
  UV areas came to 115% of an atlas, and a correct pack cannot exceed 100%. That check is a warning
  in the bake now, and it is the standing test for this class of fault.
- **The pack gutter is TEXELS, set after the atlas size is known -- never a fraction per island.**
  `bake_lightmap.py` packed with `margin=0.004, margin_method='FRACTION'`: 16 px at 4096 around
  EVERY island, which was fine for the 18 islands the ground-tile era had and impossible for the
  **107,753** that smart-project makes of `thepurge`'s 466 merged static meshes (310k boxy polygons:
  every box face is its own island, ~3 polygons each). The pack overflowed the unit square (u ran
  to 2.98), `measure_density()` saw no UV area, the atlas was written at the ceiling and EMPTY --
  probe coverage 0 -- and every multi-hour bake of that level shipped a black lightmap while the
  log said only "no measurable UV area; using the ceiling". Measured on the same `in.glb` in
  Blender 5.2.1: FRACTION 0.004 -> area 0.0000; the operator defaults (SCALED 0.001) -> 1.5% of
  the atlas, in bounds; margin 0 -> 80%. The angle limit does not matter (66° and 89° both give
  ~107k islands). Now it packs TWICE: gutterless to measure density and choose the size, then
  with `--gutter` (default 2) texels at THAT size as an `ADD` margin (absolute UV units, half per
  side), stepping the atlas up once if the gutter drops the density under half the request.
  `thepurge` at 4096²: 60.1% covered, 10.0 texels/m against 8 requested, p90/p10 1.26. The
  bake's own dilation (`render.bake.margin`, 8 px at 4096) still fills the gutter from the nearest
  island, so 2 texels is enough for bilinear sampling. A 512² test ceiling cannot hold 107k
  islands with any gutter -- use `--lightmap-size 2048` for the cheap round trip on this level;
  the time is per-object anyway. The log now says `WARNING ... the lightmap will be EMPTY` when
  the post-pack area is zero, and it names the island count.
- **`texelsPerMeter` is real, and `--size` is now the CEILING.** It sat in the schema and the
  editor's defaults read by NOTHING, so the density a level got was an accident of how much surface
  it contained -- a small level wasted most of a 4096 atlas and a big one starved every prop.
  The bake measures `sqrt(uv_area / world_area)` per triangle, takes the MEDIAN (the mean lets one
  enormous island -- the ground -- size the atlas for everything) and picks the smallest power of
  two delivering the requested density, capped by `--size`. It logs achieved density with p10/p90,
  which is also the measurement that settles whether `pack_islands(scale=True)` preserves relative
  island scale: a p90/p10 above ~2 says it does not and `average_islands_scale()` before packing is
  the follow-up. Do not add that pre-emptively -- measured on `thepurge` it is **1.64**, so the
  packer IS preserving relative scale and the follow-up is not needed.
- **The lightmap KTX2 said `linear` and held sRGB, and both wrongs cancelled.** Blender saves
  through view_transform `Standard`, which IS sRGB encoding; `--assign-tf linear` relabelled without
  converting; the runtime tagged the transcoded texture `SRGBColorSpace` and got the right pixels
  from a container that was lying. It is `srgb: true` now. **Proven a no-op before shipping**:
  encoding the same PNG both ways gives identical container size and an identical payload SHA, with
  only the DFD `transferFunction` differing (1 -> 2). No baked level changes brightness.
- **The lightmap is an image nothing references.** glTF has no lightmap slot, so it is written as
  a KTX2 `images[]` entry (index in `manifest.lightmap.image`) with no `textures[]` entry; the
  runtime reads its bufferView and hands it to `KTX2Loader.parse`. `parser.loadTexture(i)` on it
  fails with "reading 'source'". RGB = sky + bounce + emissive (moon off), A = the moon's
  visibility (Cycles SHADOW bake), and `attachLightmap` masks the real-time moon's direct term
  with A so the moon stays a live light for dynamic objects and a small dynamic shadow map.
- **`onBeforeCompile` runs BEFORE `resolveIncludes()`, so patch the CHUNK and substitute it for the
  token.** The shader handed to `onBeforeCompile` still says `#include <lights_fragment_begin>` and
  contains none of the code you want to edit -- `ShaderLib.physical.fragmentShader` does not even
  contain the string `getHemisphereLightIrradiance`. `attachLightmap` shipped two `replace()` calls
  against the RESOLVED text and both matched nothing for the life of the file, so every level
  rendered with the sky counted TWICE (baked, plus the live hemisphere that was never zeroed) and
  the moon lighting static geometry UNSHADOWED, discarding Cycles' soft shadows. Its `DIRECT_LINE`
  was wrong a second way -- an extra outer paren pair three does not have -- and its replacement
  text was `irradiance += 0.0`, a `vec3 += float` type error that would not have compiled had it
  ever matched. Take `THREE.ShaderChunk[name]`, edit that, then
  `fragmentShader.replace('#include <name>', body)`. A `replace()` that matches nothing is silent,
  which is why `packages/level-runtime/test/materials.test.mjs` asserts all three anchor strings
  exist verbatim AND that the patch lands in the shader a real compile would see, and why
  `smoke-level.mjs` now FAILS on any `[level-runtime]` console warning.
- **Every authored point and spot lamp is BAKED -- direct, shadows and bounce -- and the runtime
  cuts their live direct term on static materials.** That is what a lightmap is for, and for a
  while it was the opposite: `bake_lightmap.py` hid every lamp for both passes and RGB held sky +
  bounce + emissive only, because the runtime re-created every lamp live on static geometry too
  and baking them was double counting. The hide was the wrong side to fix. Now
  `blenderBakeSpec()` puts every enabled non-moon point/spot into `spec.lights` (linear colour,
  three's units), `buildBlenderArgs()` passes it as one inline `--lights=<json>` flag (no path, so
  both bakers emit it identically; both spawn with an argv array), and the Python BUILDS the lamps
  itself in pass 1 and hides them in pass 2 so alpha stays the moon's alone. The glTF-imported
  lights are still hidden, for UNITS: Blender's importer converts them through its lighting mode
  (÷683 lm/W). The bake's `lightmap.json` carries `bakedLights`, the manifest records
  `lightmap.bakedLights` (default false: an older level keeps its live lamps and renders
  unchanged), and `attachLightmap(..., { bakedPunctual })` guards three's point and spot loops in
  `lights_fragment_begin` with `&& !defined( THAIKIT_BAKED_PUNCTUAL )` -- the whole `#if`, not a
  `*= 0.0`, because `unrollLoops` expands the pragma region textually before the preprocessor and
  the guard drops the shadow lookups too. Dynamic objects never pass through it and keep every
  lamp live. No per-light baked/realtime switch: three's shader cannot tell lights apart per
  receiver. A non-moon directional stays live and unbaked; `distance` and `decay != 2` are
  three-only (Cycles has neither), so a short-range lamp reaches further in the bake.
  **The unit conversion is `P = 4π²·I` watts per candela, and the second π is real.** three's
  lightmap path multiplies the texel by albedo/π exactly as it does a live lamp's `I/d²`, so the
  texel must BE `I/d²`; Blender's point of P watts gives irradiance `P/(4π d²)` and Cycles'
  DIFFUSE pass with colour off writes irradiance/π. The steradian argument alone (`4πI`) leaves
  a static wall π times darker than the dynamic crate beside it. The sky needs no such factor
  (three's HemisphereLight also skips the π) and the sun's `energy = moon strength` never met it
  (SHADOW pass only). `scripts/level/calibrate-lamp-bake.mjs` measures it with no level at all:
  one 10 m quad it writes itself, a black world, one 10 cd lamp at 4 m -- brightest texel
  **0.6250 against I/h² = 0.6250 (ratio 1.000)**, mean over the quad 0.996 of the analytic
  integral. Run it after touching the constant, the swizzle or either pass. Measured end to end
  on `levels/lamptest` (wall, drum, bin, barrier, shrine, a 12 cd point and a 40 cd spot):
  range 3, alpha 99.1% in the top bin with 0.5% penumbra, `verify-level` `bakedLights: true`,
  `smoke-level` clean. A lit level's `range` is usually above 1 now (a 12 cd lamp is 1.33 at
  3 m); that is the 8-bit atlas paying for the lamps with precision in the dark.
- **The moon's soft shadow edge is `shadow.softDeg` on the moon light, and it is BAKED, not
  live.** It is the sun's angular diameter in Cycles (`--moon`'s eighth number, default 1.5; the
  real moon is 0.5, 3-6 reads as soft moonlight) and so the width of the penumbra in the
  lightmap's alpha on static geometry. A smaller live shadow map only LOOKS soft in the editor:
  that is PCF blurring 512 texels over 120 m, it shimmers as the box follows the player, and the
  shipped level never uses the map for static geometry anyway. The baker logs `moon: ... angular
  diameter N deg`; read that line to know what the bake used.
- **A placement's `castShadow` / `receiveShadow` now reach the bake and the runtime -- for DYNAMIC
  placements only.** They used to stop at the three meshes `buildExportScene` built, which glTF
  cannot carry, so Cycles saw every billboard -- a kilometre-tall quad standing at its AUTHORED
  yaw -- as a caster in both passes, and `loadLevel` set `castShadow = true` on every dynamic node
  regardless. The flags ride on the `bake.placements` rows, on the `dynamic/<id>` holder's node
  extras (Blender's importer keeps those as custom properties, and `bake_lightmap.py` walks up
  from each mesh to find `tk.castShadow` and sets `visible_shadow = False`), and on the manifest's
  `dynamic` entries (defaulted true, so an older level parses). A STATIC placement has no such
  switch: it is merged into its cell's mesh and its shadow IS the lightmap. If a static prop must
  not shadow, make it dynamic.
- **three has no runtime GI; it consumes two kinds of precomputed lighting.** `material.lightMap`
  is the Cycles bake. `scene.environment` is the other half -- ambient specular, and diffuse for
  anything with no lightmap -- and `packages/level-runtime/src/environment.js` (`buildEnvironment`)
  is it, shared verbatim by `loadLevel()` and the editor's `EnvironmentProbe` the way `buildSky`
  is. What it cost:
  - **Never assign the sky cubemap to `scene.environment`.** `WebGLEnvironments.getPMREM`
    auto-prefilters any `CubeReflectionMapping` texture and `PMREMGenerator._setSize` reads the
    SOURCE face width, so a 3072 face gives `_cubeSize` 2048 and a 6144x8192 RGBA16F atlas: 384 MB,
    doubled while `_allocateTargets` holds an equal ping-pong target. `fromScene` is the ONLY entry
    point that takes an explicit `size` (`fromCubemap`/`fromEquirectangular` have none), so it is
    the only way to ask for a 256 probe -- 768x1024, **6 MB**. If `scene.environment.image.width`
    ever reads 6144, that is what happened.
  - **Prefilter from a real `buildSky` dome, not from the texture.** `fromScene` over a dedicated
    probe dome puts the sky's own shader in the loop -- nadir cut, elevation remap, sRGB decode --
    rather than a second reading of the same pixels, and it is what gives the no-sky case somewhere
    to go: a gradient dome carrying three's own `mix(ground, sky, y*0.5+0.5)`. That fallback is why
    the **HemisphereLight can be retired outright** whenever IBL is live: the probe reproduces its
    diffuse and adds grey specular, leaving one ambient path instead of two. Do NOT hand `fromScene`
    an empty scene expecting `scene.background` to stand in -- `_sceneToCubeUV` will fill it with
    one flat colour and lose the ground darkening. Pass `far` explicitly; the default is 100 and the
    dome sits at 1224. Build a SEPARATE dome: reparenting the live one tears a frame in the editor.
  - **Only the env DIFFUSE may be cut on lightmapped materials.** One line in
    `lights_fragment_maps`: `iblIrradiance += getIBLIrradiance( geometryNormal )` scaled by a
    `THAIKIT_IBL_DIFFUSE` define. `lights_fragment_end` hands `iblIrradiance` only to
    `RE_IndirectSpecular`, where it feeds `diffuse * cosineWeightedIrradiance`; the specular we want
    arrives separately as `radiance` from `getIBLRadiance`. Cutting both would be the same as having
    no IBL. Dynamic objects never pass through `attachLightmap`, so they keep both halves -- which
    is right, they have no baked diffuse to double.
  - **Key the probe effect on VALUES, not on the settings objects.** Every `setSetting` commits a
    new document, so an effect depending on `sky` or `hemisphere` re-prefilters when you nudge the
    lightmap samples. Intensity and bearing ride on `scene.environmentIntensity` and
    `scene.environmentRotation` and must never rebuild; only the pixels and the probe size may.
    Measured live: rotation, intensity and an unrelated edit all leave the texture uuid alone.
  - `scene.environment` also OVERRIDES per-material `envMapIntensity` with
    `scene.environmentIntensity` (`WebGLRenderer.js`), so the values the asset factories author stay
    dead. glTF cannot carry the property anyway and `GLTFLoader` gives every material 1.0.
  - The sky is LDR, so the IBL is a soft ambient shell with no sun glint. And the editor
    over-lights static geometry relative to the ship, because it has no lightmap so the diffuse
    suppression never fires there.
  - **`sky.base.intensity` is how bright the sky IS, so it must light the level and not only the
    backdrop.** It multiplies the dome's pixels inside `buildSky`, and the prefilter deliberately
    forces it to 1 so that dragging it costs no re-prefilter -- which for a while meant it reached
    nothing but the picture behind the geometry, and turning the sky up left every object in the
    level exactly as dark. `environmentIntensity()` in `packages/level-runtime/src/environment.js`
    is now the ONE place the applied ambient is decided (`ibl.intensity * sky.base.intensity`, the
    sky factor only when the probe was built from a base texture -- with no picture the source is
    the gradient dome, whose intensity is already in the prefiltered pixels), and the editor's
    `EnvironmentProbe` and `loadLevel` both go through it. It rides on
    `scene.environmentIntensity`, so it is free: measured live, sky intensity 0.2/1/2.5 moved the
    geometry's mean luma 9.7/40.7/80.5 with the texture uuid unchanged.
  - **`environment.hemisphere.*` is the NO-SKY FALLBACK RAMP and nothing else.** With a sky picture
    up and IBL on, the viewport retires the HemisphereLight, the probe takes the sky branch and
    `loadLevel` retires it too -- so all three fields are inert, and `PropertiesPanel` hides them
    in that configuration rather than offering dials that cannot change the level. The bake used to
    be the one exception, multiplying `--env-strength` by `hemisphere.intensity`: a hidden second
    gain on every lightmap, driven by a control the editor could not preview. `--env-strength` is
    `sky.base.intensity` alone now. `--sky` / `--ground` still carry the ramp for the no-picture
    case, which is the only case it means anything.
- **`manifest.ibl` is null by default, and null means off.** A level baked before image lighting
  existed parses unchanged and renders identically; only a re-bake opts one in. Same shape as
  `lightmap.range` -- additive with a default, so no schema-version bump.
- **The Blender bake is batch (`blender -b --python`), not the addon, and it runs
  IN THE CONTAINER on a LINUX Blender.** Blender 5.2.1 LTS is installed in the
  Dockerfile's `base` stage from the official tarball (`ARG BLENDER_VERSION`,
  sha256-checked against Blender's own published file) -- not Debian's `blender`
  package, which is 3.4. It has to be in the same image as the web server, because
  the server SPAWNS the bake: `web/server/src/lib/bake.js` runs
  `scripts/level/bake-level.mjs` when the editor POSTs to `/api/levels/:id/bake`.
  It costs ~1.2 GB.
  It used to be `blender.exe` on Windows reached over UNC, which is what
  `toBlenderPath()` exists for. Inside the container `WSL_DISTRO_NAME` is unset,
  so `blenderRepoRoot()` returns `REPO_ROOT` and there is nothing to translate --
  but the repo is bind-mounted TWICE, `/app` for code and `/repo` for data, so a
  module resolving a sibling off `import.meta.url` gets `/app/scripts/...` while
  `REPO_ROOT` is `/repo`, and rebasing one on the other produced
  `../app/scripts/...` and threw "path escapes the repo". `toBlenderPath` now
  returns an absolute path unchanged unless it is actually bridging to Windows.
  Pass vector args as `--moon=-0.4,...`: a value starting with `-` reads as an
  option to argparse.
- **Two bakers, and the host one is an AGENT.** The export dialog's `lightmap` dropdown offers
  `blender` (the container's Linux Blender, CUDA) and `blender-host` (the Windows Blender on the
  host, OptiX). The web server spawns every bake INSIDE the container, which cannot exec
  `blender.exe` and does not see `/mnt/c`, so host mode hands the Blender step to
  `scripts/level/bake-host-agent.mjs` (`npm run level:bake-agent`, run on the host and left
  running) over HTTP at `host.docker.internal:3734` -- the one process in this repo that runs on
  the host, because what it runs IS the host's Blender. The spec crosses the wire with
  REPO-RELATIVE paths and the agent respells them with the existing `toBlenderPath()` UNC bridge;
  `in.glb` and `out.glb` never move, they sit on the shared mount. Both bakers assemble their argv
  from ONE function, `buildBlenderArgs()` in `scripts/level/bakers/blender-args.mjs`, so they
  cannot drift on flags. The script path goes across as the fixed string
  `scripts/level/bakers/bake_lightmap.py`, not through `toRepoRelative()`: in the container the
  module lives under `/app` while `REPO_ROOT` is `/repo`, so the relative form is `../app/...`.
  **`--cpu` is OFF by default in both.** `bake_lightmap.py` used to force every CPU device on
  beside the GPU (`d.use = d.type == kind or d.type == 'CPU'`), which is Cycles' hybrid mode and
  on a fast card is usually SLOWER -- the frame waits for the CPU's tiles. `--device GPU|GPU+CPU|CPU`
  is the switch; the `cycles device:` line now names every enabled device and says `cpu on/off`,
  and it also fires when NO backend matched (it used to fall through silently with
  `compute_device_type` left at the last kind tried). Read that line, not the dropdown, to know
  what ran. **Cancel** is `DELETE /api/levels/:id/bake`: the pipeline is spawned `detached` so one
  SIGTERM to the process group takes the container's Blender down with it; in host mode the
  pipeline drops the agent's request and the agent kills `blender.exe` -- by the PID Blender
  logs on its own first line (`[thaikit] pid N`), because a signal to the WSL interop stub does
  not reliably reach the Windows process and `taskkill /IM` would also kill a Blender the user
  has open. The agent watches the RESPONSE's `close`, not the request's: an `IncomingMessage`
  emits `close` once its body is consumed, so a listener on `req` never sees the socket drop.
  **Measured on `thepurge` at 512²/16 (2026-09-04): container CUDA and host OptiX both run 63 s
  per 47-object batch, cpu off** -- the cost is per-object bake-operator overhead, so the backend
  is not what a large level's bake time is made of.
- **A bake is FILE-BACKED and outlives both the dialog and the server process.** The dev
  server runs under `node --watch-path`, so an edit to a server file restarts it mid-bake -- and a
  pipeline whose stderr was a pipe to the dead parent died with it on EPIPE. `web/server/src/lib/bake.js`
  now spawns the pipeline with its stdio ON FILES under `levels/<id>/build/` (`bake.log` is the
  stderr event stream, `bake.out` the result line, `bake-job.json` the record with the pid) and
  TAILS the log to broadcast; `adoptBakes()` at start-up re-adopts any record still `running`
  whose pid is alive and whose `/proc/<pid>/cmdline` is still our `bake-level.mjs` for that level
  (a zombie has an empty cmdline, so it reads as gone), and settles a dead one from `bake.out`.
  Every event carries `seq`, its line index in the file -- the `start` line is WRITTEN INTO THE
  FILE for that reason, so the original process and an adopter count the same lines. The export
  dialog reads `GET /api/levels/:id/bake` on mount (record plus log), subscribes to SSE first and
  drops anything at or below the seq it has, attaches to the job a 409 hands back, and treats a
  `start` for an unknown job as a bake begun in another window. Verified 2026-09-04: reload
  mid-bake, server killed mid-bake, and two tabs. A CONTAINER restart is different: the pipeline
  is in the container, so it dies, and the host agent kills blender.exe when the socket drops --
  that record settles as failed with "the bake process is gone". The host agent keeps NO state
  and needs none; what survives is the container-side record.
  **The agent caches its modules at startup, so RESTART IT after any edit under `scripts/level`.**
  A 14:50 agent ran a 16:11 pipeline and built its argv from the OLD `buildBlenderArgs` -- no
  `--lights` -- while the container logged "10 authored lamp(s) go into the bake" and Blender
  answered "built 0". The two lines come from different processes; when they disagree the agent
  is stale. **And the agent's stream carries a 20 s heartbeat** because Node's `fetch` (undici)
  times out a body silent for 300 s with the error `terminated`, and one 4096²/128 batch of
  `thepurge` is silent longer than that: the fetch threw, the socket dropped, and the agent
  killed Blender at 326 s as a "client went away" cancel with `cancelled: false` on the record.
  **The watcher does not see every edit.** In this container only a change to
  `web/server/src/index.js` reliably restarted the server; edits under `lib/` and `routes/` from
  the host, and even `touch` from inside the container, did not. `docker compose exec web touch
  /app/web/server/src/index.js` is the sure way to restart it, and the adoption above is what
  makes that safe during a bake.
- **The bake runs on the GPU via CUDA, and OPTIX IS UNREACHABLE UNDER WSL2.**
  `compose.yaml` and `compose.prod.yaml` both reserve the GPU
  (`deploy.resources.reservations.devices`, `driver: nvidia`) and set
  `NVIDIA_VISIBLE_DEVICES=all` / `NVIDIA_DRIVER_CAPABILITIES=compute,utility`;
  the host needs `nvidia-container-toolkit` and
  `sudo nvidia-ctk runtime configure --runtime=docker`. `docker compose run`
  honours the reservation, so a one-off bake is a GPU bake.
  OptiX is a different matter and the answer is NO, permanently -- not a setting
  that was missed. The nvidia runtime injects the host driver, so `libcuda.so.1`
  resolves and `bake_lightmap.py`'s `OPTIX -> CUDA -> HIP` probe lands on CUDA --
  full GPU Cycles on the real card. But on WSL the OptiX implementation is
  `nvoptix.dll`, a WINDOWS library; the Linux-side `libnvoptix.so.1` is a 14 KB
  shim exporting `dxcore_init`, `dxcore_adapter_load_library` and four siblings
  and NOTHING else. `optixQueryFunctionTable` is absent, which is exactly what
  Cycles prints as `OptiX initialization failed with error code 7805`
  (OPTIX_ERROR_ENTRY_SYMBOL_NOT_FOUND). Do NOT try to fix it by symlinking
  `libnvoptix_loader.so.1` to `libnvoptix.so.1` -- that was tried; they are the
  same hardlinked 14224-byte file, the alias makes `dlopen` succeed, and Cycles
  fails at 7805 exactly as before, because the name was never the problem. On a
  native Linux host with a real driver the probe picks OPTIX with nothing added.
  Read the `cycles device:` line the bake logs rather than assuming either way.
- **The bake reports progress because it is BATCHED, and batching is free.** Cycles'
  `bpy.ops.object.bake` is one blocking call that says nothing until it returns, so a 4142-object
  level sat silent for many minutes with no way to tell slow from hung. `bake_batched()` hands the
  operator `--batch` objects at a time (default 128) and logs percent, count, elapsed and a
  measured ETA per batch. It does NOT change the result: selection decides what is baked TO, while
  every object stays in the scene and still contributes its indirect light, shadows and emissive
  bounce. The one requirement is `use_clear = False` -- the batches share one atlas and clearing
  per batch would wipe the ones already done. The ETA is recomputed from the WHOLE run, not the
  last batch, because per-batch cost swings with how much of the atlas each object's islands cover,
  and it is suppressed on the first batch where one sample is just noise.
- **`ktx` is IN THE IMAGE, pinned, not on anybody's host.** KTX-Software 4.4.2 is
  installed in the Dockerfile's `base` stage (`ARG KTX_VERSION`), fetched with
  the image's own `node` (it has `fetch`; no curl or wget needed), checked
  against the release's published `.sha1`, and installed with `apt-get install
  ./ktx.deb` so the deb's own dependencies resolve. It is arch-aware --
  `dpkg --print-architecture` picks the x86_64 or arm64 asset. It used to be
  `dpkg-deb -x`'d into `~/.local/opt/ktx` on one machine, which is why
  `findKtx`'s CANDIDATES list still probes `THAIKIT_KTX_BIN`, PATH,
  `~/.local/opt/ktx/bin/ktx` and `/usr/local/bin`: harmless now, since PATH
  answers first. A bake shelling out to a binary only one host has is not
  reproducible, and a missing `ktx` fails the pipeline at STAGE 4 -- after the
  Blender bake has already run. gltf-transform 4.x's `toktx()` moved to its CLI
  package, so the shell-out is ours: `ktx create --format
  R8G8B8A8_SRGB|UNORM --encode basis-lz|uastc --generate-mipmap`.
- **A night level fails a brightness gate honestly.** `scripts/level/smoke-level.mjs` measures the
  share of the frame that is not the backdrop, not mean luma.
- **Judge a bake change by `scripts/level/probe-lightmap.mjs`, never by eye.** The defects push in
  opposite directions -- hiding the double-counted lights DARKENS the atlas, feeding it the real sky
  BRIGHTENS it -- so a render of the whole stack says nothing about either step. It prints coverage,
  per-channel linear percentiles, the CLIP RATE (whether the LDR clamp is destroying bounce) and a
  10-bin alpha histogram, plus `--compare <png>` against a saved earlier bake. A correct moon mask
  is BIMODAL; a smear across the middle bins is another light contaminating the SHADOW pass.
  **sharp silently squashes a 16-bit PNG to byte values** unless `toColourspace('rgb16')` is set
  before `.raw({ depth: 'ushort' })` -- Blender's 40000 comes back as 156 -- and it IGNORES
  `depth: 'ushort'` on raw INPUT, so a fixture round-tripped through sharp cannot prove the 16-bit
  path works. `probe-lightmap.test.mjs` hand-builds its PNGs over `node:zlib` for that reason.
- **A 4 ms bake with `--baker none` is a 4 s one in Blender at 4096²/128 samples per minute of
  level** -- use `--lightmap-size 512 --samples 16` to test the round trip.

- **Unreal gets the kit as ONE GLB PER PROP, made in the browser.** The registry page's
  **export to Unreal** button (`web/client/src/unreal/`) builds every supported prop through the
  level editor's prototype cache, flattens the whole factory tree -- world-space bake, InstancedMesh
  expansion, per-instance tints into `COLOR_0`, one merged mesh with a primitive per material -- and
  emits `SM_<Pack>_<Prop>.glb` with the compound as `UCX_<mesh>_NN` siblings (16-gon prisms for
  cylinders), which Interchange turns into simple collision. glTF ALWAYS multiplies `COLOR_0`, so
  the attribute is normalised (white where the material ignored it) rather than dropped. The zip is
  built client-side (`zip.js`, STORE only) with `manifest.json` and a README, downloads always, and
  on a writable instance is `PUT /api/exports/unreal` where the server unpacks it with the existing
  `unzip.mjs` into `exports/unreal/` (gitignored, replaced whole; static at `/exports/unreal`).
  154 props, 37 s, 194 MB at 2048 px. `docs/unreal-export.md` is the import guide; the
  `thaikit-unreal-level` skill lays a Thai night street out of it over unreal-mcp. Verified by
  loading the files back through a stock `GLTFLoader`: colours, textures and sizes round-trip.
  **A round trip through three proves nothing about Unreal; read the editor's Output Log.**
  The 7-Eleven "looked fine in the level editor and broken in Unreal" (2026-09-05) and the GLB
  was structurally clean -- no flipped winding, unit normals, identity nodes. `Saved/Logs/<Project>.log`
  named three faults the file could not show: every `UCX_` mesh was written with a `wireframe`
  material, which `GLTFExporter` emits as primitive mode LINES and Interchange drops (`Primitive
  Mode[LINES] ... Geometry won't be imported` -- 662 colliders across 154 props, so NO prop had
  collision, whatever the import dialog said); Interchange has built a NANITE mesh by default
  since 5.5, and Nanite renders a BLEND slot with the default material (`Invalid material ...
  used on Nanite static mesh`), which is what the two glazing panes were; and zero-area UV
  triangles (`degenerate tangent bases`) on 88 props. Now: UCX is a plain material, glass at or
  above 0.8 opacity with no alpha in its map ships OPAQUE (9 genuinely see-through slots stay
  BLEND, listed per item as `manifest.translucentSlots`, and need Nanite off), a `polygonOffset`
  decal is stood 3 mm off its wall (Unreal has no polygon offset), and any UV-degenerate face gets
  a planar projection off its FACE normal in metres. `scratch/_unreal/scan.mjs` counts LINES
  prims, BLEND slots and zero-area UV faces across the export; run it after touching propGlb.js.
  The drawer's own **export to Unreal** button and the dialog's filter + checkboxes export a
  SUBSET, and a subset is `PUT /api/exports/unreal?mode=merge`: files written over the live tree,
  manifest items replaced by ref -- so a one-building re-export never wipes the other 153.

- **An Unreal level reaches Operation X by becoming a thaikit RAW scene, never by a second loader.**
  `scripts/level/import-unreal-level.mjs` reads an Unreal glTF Exporter `.glb` (metres, Y up: uniform
  scale 0.01) and writes `levels/<id>/build/raw.glb` with `scene.extras.thaikitBake` -- placement rows
  from mesh nodes (`SM_TK_*` names look up ref, physics and the compound in
  `exports/unreal/manifest.json`, which now carries `colliders`; `dyn_`/`bb_` labels mark dynamic
  and billboard; Unreal-side meshes get a bbox box unless named cable/wire/rain/fog/decal), lights
  from `KHR_lights_punctual` (the directional is the live moon; `--sun baked` drops it), spawns from
  cameras named `spawn_*`. `bake-level.mjs --baker unreal` then ADOPTS Unreal 5.6+'s
  `EPIC_lightmap_textures`: the converter bakes per-instance scale/offset into `TEXCOORD_1` (cloning a
  shared mesh per lightmapped node -- `Mesh.clone()` shares primitives, copy them), tiles the textures
  into one PNG atlas with alpha 1 (no moon mask, so keep the moon Movable in Unreal), and
  `normaliseAttributes({ keep: ['TEXCOORD_1'] })` carries it to stage 4. The extension is UNDOCUMENTED
  (removed in 5.2, back in 5.6) and read by field shape; 4-vector decode factors are recorded, not
  applied, and the report's `epicSample` is what to read on the first real export. `--baker blender`
  re-lights the same rows in Cycles and is the measured route. `manifest.source` (schema, nullable
  default) is the only trace in the shipped file; `loadLevel()` is unchanged. Tested end to end on a
  synthetic export in `import-unreal-level.test.mjs`. Skill: `thaikit-unreal-bake`.
- **The Unreal manifest's `emitters` are where the kit's lights GO.** Per item, every emissive
  material slot -- and for a `lighting` prop with none (the harness reads a bright enclosed face as a
  hole, so luminaires ship as pale diffuse glazing), the head INFERRED from the factory's own slot
  name (`lantern_shade`, `acrylic_refractor`, `led_lens`, `tube`; test the raw `material.name`, never
  the `M_TK_<Prop>_` export name, or ...Lantern and ...Pole props match everything) -- with centre,
  extent, colour and `panel|bulb`. 19 emitters on 17 props; `thaikit-unreal-level` spawns Unreal lights
  from them.

## Layout

- `packages/registry-core/` — schema, the per-item store under one lock, atomic
  write, ETag. Imported by the server *and* the host-side skills. The shared import is the interface between
  them; there is deliberately no HTTP write path for generation.
- `scripts/` — the engine. One JSON line on stdout, human logs on stderr.
- `web/` — Express + Vite/React on port 3733.
- `prompts/` — budgets, categories and the image prompt scaffold. Data, so it
  lives here rather than inside a skill.
- `render/` — the headless harness. Vendored three, no loaders: it evaluates the
  model module the same way the browser does. `level-harness.*` is the runtime smoke page.
- `packages/level-schema/` — zod schemas for the level GLB extras and the export manifest.
- `packages/level-runtime/` — `loadLevel()` for a game (cells + LOD, lights, lightmap, Rapier
  colliders, per-cell BVH) and `loadLevelHeadless()` for a server.
- `levels/` — level projects: `<id>/level.glb` (GITIGNORED since 2026-09-04 -- it is re-saved whole and
  `thepurge` reached 158 MB against GitHub's 100 MB limit; back it up yourself), `<id>/sky/` sidecars
  (tracked) and `build/` (gitignored).
  A finished bake is COPIED to `$THAIKIT_EXPORT_DIR/<id>.glb` (the game's GLB folder, default
  `../Operation-X/GLB`, mounted at `/export`); the result carries `exported.path` in the HOST's
  spelling and the dialog prints it. Not mounted is a warning in the log, never a failed bake.
- `packs/` — installed vibe3d packs (gitignored; `packs/index.json` is the record).
- `scratch/` — gitignored; every build's working directory, and where
  img2threejs writes its state, spec and renders.

## The pipeline

`thaikit-asset-list` → `thaikit-preview-image` → `thaikit-model`.

`thaikit-model` is thin by design: it checks the gates, composes a prompt, and
invokes the `img2threejs` skill. Then `build-model-module.mjs` (esbuild) →
`render-model.mjs` (puppeteer) → `promote-model.mjs`, which ends by refreshing
the prop's `@thai-kit` pack item. `build-vibe3d-registry.mjs` is the PUBLISH step.

`scripts/delete-model.mjs --id <id>` (skill `thaikit-delete-model`) is promote's
inverse: built files out of the tree, `model` reset and stage `pending`, pack item
dropped, scratch moved to `scratch/_deleted/`. It never touches the plate or the record's
authoring fields.

## Conventions

- ES modules everywhere, Node ≥ 22, no build step for server or scripts.
- Paths in a `thaikit.json` are **repo-relative with POSIX separators**
  (`packages/props/src/models/<id>/...` or `scratch/...`), so the same record
  works on the host and inside the container.
- Scripts take paths and URLs as arguments. Generation calls fal only through
  the `fal-ai` MCP server or through img2threejs's own `--provider fal` — there
  is deliberately no scripted generation path in thaikit.
- **Uploads are the one exception.** The MCP server is reached over HTTP, so its
  `upload_file` rejects `file_path` and its only fallback is base64 through the
  model's context, which the tool layer truncates around 30 KB. Use
  `npm run upload -- <files>` (`scripts/upload-to-fal.mjs`, fal REST storage API,
  needs `FAL_KEY` in `.env`). Never hand-encode an image to base64 to get it to fal.

## Gotchas already paid for

- **Poll fal's returned `status_url`; never build one.** fal drops the path
  segments past the app root for queue sub-routes, so `meshy/v7/image-to-3d` is
  polled at `/meshy/v7/requests/<id>/status`. A hand-built URL that keeps
  `image-to-3d` in the path 404s, which reads as a dead request rather than a
  wrong address.
- **`page.goto`'s navigation promise never settles here** — not on `load`, not
  `domcontentloaded`, not `networkidle2` — even though the page loads fine and
  sets its ready flag. `render-model.mjs` fires the navigation without awaiting
  it and waits on `window.__thaikitReady` instead. Do not "fix" that back.
- **Puppeteer needs SwiftShader flags or renders come back silently black.** A
  valid PNG of the background is the failure that looks like success, so
  `render-model.mjs` fails the run on mean luma at or below the backdrop's ~58.
- **A pivot gizmo needs `depthTest: false`.** A hinge is almost always INSIDE the
  geometry it hinges, so a depth-tested helper is invisible exactly when you most
  need it.
- **`img2threejs` is a shared checkout** (its SKILL.md prescribes symlinking it
  into `~/.codex/skills/` too). Changes there must be focused and upstreamable,
  and must not alter behaviour for anyone who does not pass the new flag.
- Its `generate_reference_mesh.py` companion **OBJ is best effort** and needs
  `trimesh`, which is not installed. Nothing under `forge/` reads a `.obj` —
  `mesh_reference_compare.py` parses uncompressed GLB with `struct` alone — so a
  skipped OBJ is not a problem. A **compressed** (Draco/meshopt) GLB is: check
  the `compressed` flag in the report before assuming the pure-Python path works.
- Meshy's image-to-3d rejects **WebP** (`image_load_error`). `prepare-image.mjs`
  writes JPEG or PNG only, and `set-preview-image.mjs` refuses anything else.
  Preview plates ship as **JPEG**: they are photographs, and 1024² PNG is 1.6 MB
  against JPEG's 130 KB — a quarter of a gigabyte in git across a 150-prop kit,
  for no difference a reconstruction can see.
- **Never assume the backdrop is the grey the prompt asked for.** A cheap image
  model returns a white product matte just as readily, and a hard-coded 128 then
  reads the whole frame as foreground — "the object fills 99% of the frame" on a
  perfectly good plate. Measure the border ring; pad with what you measured.
- **A studio vignette is not a scene.** Image models draw a soft corner falloff
  however hard the prompt argues, so a fixed foreground tolerance labels the four
  corners as extra objects. The tolerance follows the backdrop's own spread.
- **A component's material is read under two spellings.** The generator read
  `component["material"]` and fell back to the FIRST material in the spec when it
  was absent — silently. The oil-drum spec spelled it `materialId` on all seven
  components, validated clean and shipped every mesh in blue enamel. img2threejs's
  `_shared/material_binding.py` now accepts both, and the validator errors on a
  component that names neither while the spec declares more than one material.
- **Declare `textureless` on every material that does not need a texture — that is
  the DEFAULT, and an opt-in is what needs arguing.** img2threejs's
  `createSculptMaterial` otherwise synthesises FIVE canvases per material at
  `textureResolution`, written pixel by pixel in JavaScript. Thirteen materials at
  1024 cost **24 seconds inside `createObjectModel`**, before the drawer can show
  anything, plus 34 textures, 35 megapixels and ~64 MB of VRAM on a kit aimed at
  low-end integrated GPUs. Cost is the SQUARE of the resolution (256 → 1.6 s,
  512 → 6.5 s, 1024 → 26 s), so turning the resolution down only makes a bad
  default cheaper. `textureless: {declared: true, evidence: [...]}` skips it
  outright: 24,180 ms → 23 ms on the 7-Eleven. The evidence array must NAME a
  reference region or measurement, and the material must then carry no
  `textureResolution`, `referencePbr`, `textureProjection` or
  `surfaceFrequencyBands`; the validator enforces both halves.
  It is a correctness fix too: whenever a texture set exists the generator forces
  `color` to white and `roughness` to 1 and reads both from the generated maps,
  discarding the authored albedo — which is what rendered a white building
  mid-grey and sent a whole pass chasing palettes. Opt IN only where the detail is
  resolvable at prop distance AND identity-defining: the oil drum's rust and worn
  hoop crowns earn it at 1.0 s; flat paint, glass, mill-finish metal, render,
  membrane and vinyl do not. A canvas texture assigned AFTER material construction
  (a brand fascia) is unaffected and stays the right route for printed graphics.
- **Never author two surfaces flush in the same plane facing the same way — they
  z-fight.** Coincident co-facing faces tear into interleaved triangles as the
  camera moves; the 7-Eleven shipped EIGHT such pairs, the visible one being the
  whole shopfront frame against the facade wall at z=3.500 over 6.2 x 3.19 m. A
  butt joint of OPPOSED faces is fine and is how solids are meant to meet. Make a
  panel stand proud of what it sits on, and make a frame OVERLAP the opening it
  fills rather than meeting its reveal edge — a frame whose hole is exactly the
  wall's opening puts four coincident reveal faces in the model.
  `node scripts/check-coplanar.mjs --id <id>` catches these; it exits 1 when it
  finds any. It compares BOUNDING-BOX faces only, so it is blind to interior
  profile edges — a ring's inner rail sitting on a plinth top, say — and two of the
  7-Eleven's worst cases had to be read off a zoomed render instead. A clean report
  means the envelopes are clear, not that the prop is.
- **Buildings are exterior shells. No interior geometry.** A prop kit is only ever
  looked at from outside, so an interior costs draw calls, geometries and VRAM for
  something nobody sees. With nothing behind it the glazing then has to stop being
  a window: author it as a tinted, mostly opaque pane (opacity ~0.92, low
  roughness) so it reads as glass instead of a hole punched in the wall.
- **A dark or saturated material rendering near the backdrop's luma of 58 is read as a HOLE.**
  The turntable's silhouette gate classifies background by MEAN LUMA alone, so any surface enclosed
  by the prop's own outline — a shopfront pane, a blind door, a colonnade shade, a hanging incense
  coil — is flagged as background punched through the model when its rendered value lands in that
  band. It has forced a lift on eleven materials across this kit, one of them measured at luma 57,
  one below the backdrop. Lift the albedo, and record on the material both the measurement it
  departs from and the margin it ships at. The legitimate `--allow-holes` case is different and
  rarer: the mosque's courtyard genuinely IS open ground inside the silhouette, and there the flag
  is set on a `_holecc.mjs` measurement showing thick real components, never on an unexplained fail.
- **`InstancedMesh.setColorAt` MULTIPLIES with `material.color`.** An instanced material carrying
  per-instance tones must be WHITE, or every tone ships darkened by the base. That is how the Khmer
  sanctuary's twenty fallen blocks carry four measured stone colours at one draw call.
- **A `vertexColors` material renders BLACK on any geometry with no `color` attribute** — the
  shader reads an undefined attribute as (0,0,0). One tinted platform makes its whole material
  poisonous to every other mesh using it: the ubosot's wall body and its eight boundary stones
  shipped as black silhouettes from exactly that. An InstancedMesh HIDES the fault by falling back
  to `instanceColor`, so the same mistake on the chedi's niche frames rendered correctly and taught
  nothing. Fill white where a colour is missing, once, at the point every geometry passes through.
- **A hand-rolled merge must carry `color` as well as position, normal and uv.** The monumental
  preamble's `mergeGeos` copied three attributes and silently dropped the fourth, which erased the
  mosque's dome rib striping the moment the domes were merged with anything. The dome still
  rendered, in one flat colour, and the wrong theory chased first was sRGB gamma.
- **Vertex colours multiply in LINEAR space, not sRGB.** A ratio measured between two crops has to
  be raised to 2.2 before it is used as a per-vertex multiplier; fed the display-space ratio, a
  rib stripe is there and simply too weak to see.
- **A board rotated onto a roof rake turns by `atan2(run, rise)`, not `atan(pitch)`** — `rotateZ`
  maps a box's +Y to (-sin, cos), so aiming along the rake needs the COMPLEMENT of the pitch angle.
  At the ubosot's 46 degrees the two are three degrees apart and the error is invisible; at the
  reclining hall's 33 they are twenty-four apart and the bargeboards stand off the roof like
  scaffolding. The near-miss is why it survived a whole prop.
- **Meshy's output orientation about Y is arbitrary, and for a building that is twice as long as it
  is wide that swaps every width against every depth.** The ubosot's first band comparison read a
  mean depth error of 1.05 of height, which was a coordinate convention and not a fidelity failure.
  `scratch/_mon/bands.mjs` now detects the mismatch from the two footprints and rotates the
  reference a quarter turn before measuring.
- **A review that says "symmetric at every azimuth" is not evidence; the 0 and 90 turntable
  frames are.** The kilometre stone shipped with its arch swept -π/2..π/2 — the RIGHT half of a
  circle, a one-sided cusp with no left shoulder — and a section HALF the proxy's width, under a
  recorded review claiming both were right. The review had compared only depth-over-width, where
  two wrong numbers agreed at 0.8 vs 0.89; the proxy's w/h of 0.548 against the declared 0.278 was
  in the same probe output and never read. Run `scratch/_mon/bands.mjs <id>` on a rebuild and quote
  the width AND depth rows; and when a semicircle is the whole silhouette, look at the frame.
- **The band table beats the plate for proportions, and it is worth trusting over your own eye.**
  A three-quarter plate foreshortens, and three of the seven monumental props were rebuilt on the
  table's evidence: the prang's terrace was a third too tall, the Khmer sanctuary's roof a fifth
  too narrow, and the Chinese shrine had its open front on the wrong elevation entirely — the plate
  shows a shrine wider than deep and the declared 10 x 12 makes it deeper than wide. Where the
  residual is the DECLARED aspect ratio rather than the build, say so with the arithmetic:
  re-normalising by width instead of height turned the mosque's 0.269 mean divergence into 1.6%.
- **`build-model-module.mjs` builds from `scratch/<id>/src`, not from the tree, and writes
  to `scratch/<id>/model.bundle.js`.** Editing a promoted asset's shipped TypeScript and rebuilding
  does nothing at all — it recompiles the old scratch source over the old scratch bundle, and the
  comparison that "proves" the shipped file is unchanged is comparing a file nothing wrote to. Emit
  into scratch, build, then promote; promote is what copies source and spec into the tree and then
  refreshes the pack item, which is the only place a shipped bundle exists. A hand edit to a tree
  `createObjectModel.ts` is picked up by the server's watcher, which runs the same refresh.
- **Meshy's fal endpoint refuses some innocuous plates as `422 content_policy_violation`** (the
  sleeping soi dog, twice), and `--fal-arg enable_safety_checker=false` is echoed back as `true` —
  the endpoint forces it. There is then no proxy and no band table: build from the plate alone,
  say so in `meshyNote` with the confidence, and keep the refused log in `scratch/<id>/`.
- **A collider layer of thin separated legs falls back to ONE box over the whole footprint.**
  `coverWithRects` in `scripts/lib/colliders.mjs` takes no rectangle smaller than **0.15 m** in
  both axes, and when it takes none it falls back to the mask's bounding box. For four 0.10 m
  bamboo posts at the corners of a 4 x 4 m canopy bay that bbox IS THE WHOLE BAY: the compound
  shipped a solid 4 x 4 x 1.84 m block under the roof, and `promote-model.mjs` refused it with
  "20% of the footprint stands more than the 0.30 m step height above the real surface" -- a player
  standing on thin air at waist height inside a shelter whose whole point is to be walked under.
  The fallback now splits into **connected components**, but only when the bbox is under 35% full
  AND at least a square metre. Both conditions are measured, not chosen: splitting unconditionally
  dropped the **soi dog from 0.973 coverage to 0.718** and the futsal mast from 0.974 to 0.889,
  because for four legs under a SOLID BODY the bbox is the body and boxing the legs separately
  leaves the space between them uncovered. Re-derived across all 122 existing compounds, the gated
  version changes part geometry on four props (the bamboo bay, the stall cart, the songthaew, the
  tuk-tuk) and coverage on none. **Re-derive the whole kit into a dry run and diff it before
  touching that file**, and diff the PART GEOMETRY, not the part count: the bamboo bay's block and
  its two walls both scored coverage 0.9998, and only `volumeRatio` (9.95 against 4.52) and the
  parts themselves told them apart.
- **`sheet()` writes its own colour attribute when given `hexUnder`, and `tintGeo` erases it.**
  A tarp that is blue on top and orange underneath is two tones millimetres apart in y, which no
  component axis tint can separate and no second sheet can afford. `sheet` paints the top grid, the
  under grid and the rim itself; the body template must then NOT tint the merge, or both tones
  become one hex -- which shipped the tarpaulin bay as a white sail.
- **A baked `TextureLoader` graphic must be guarded with `typeof document === 'undefined'`.**
  `check-coplanar.mjs`, `derive-colliders.mjs` and the runtime probe evaluate the bundle under
  plain Node, where `ImageLoader` throws; unguarded, the prop passes the browser render and then
  fails every Node-side gate with a stack trace that reads as a broken module. The Cafe Amazon
  shopfront shipped that way — one unguarded loader on its fascia graphic — and was the only prop
  of a hundred with no physics compound, because it was the only one that would not construct.
  `promote-model.mjs` now constructs the module headlessly before it copies anything, so this
  cannot ship silently again. A load behind `if (options.baseUrl)` needs no guard and is the
  better pattern where the texture is a shipped map: the Node-side gates call the factory with
  `{}`, which is how all 25 imposters and road tiles are already safe.
- **`LatheGeometry` shares the corner vertex between an end disc and the side wall, so
  `computeVertexNormals` tilts the wall's first ring 45 degrees and the harness shades a dark band
  there** — a ring the turntable gate flagged as a 4,876 px HOLE under the stainless bin's cap and a
  black ring under the concrete bin's lid rim. `scratch/_prop/preamble.tmpl`'s `lathe()` now splits
  every profile corner sharper than 70 degrees with a point 0.8 mm past it (`sharp: false` on a lathe
  entry opts out where the budget cannot carry the extra ring). Luma-sample the render rows around
  the bbox the gate prints before touching albedo: the first fix chased the opening patch instead.
- **A back-lit turntable frame (azimuth 180) renders at ~0.55 of the painted luma, like a side-lit
  face.** A prop whose WHOLE silhouette is one dark material has nowhere to hide: the tyre stack at
  its measured #2f3030 collapsed the 180 ratio to 0.476, and only #7c7c7c (luma 124) held it. A
  darker albedo under an emissive floor also passes but renders the same grey with flatter shading.
- **A list-time declared size is an estimate, and the proxy band table is what checks it.** Three
  of the six bins (2026-08-27) had declarations the plate contradicted by 20-40% (a 0.60 m concrete
  bin the proxy read at 0.42, a 0.95 m tall 60 L bin, a 1.80 x 1.30 x 1.10 dumpster the proxy read
  at w/h 0.91). Correct the declaration with `edit-assets.mjs` and write the arithmetic into `notes`
  before building — building to a wrong envelope can never score its silhouette.
- **An animal's spec stays `primaryDomain: object`.** `hybrid` makes `--strict-quality` demand
  the HUMAN anatomy block (`styleHeads`, MediaPipe `faceLandmarks`), which is exactly what has
  nothing to say about a dog; the animal handling is the chirality / swept-arc reasoning
  recorded in `assumptions`, and `subject: animal` still selects the generic profile.
- **Re-running a gate script on a spec whose passes are already `complete` records nothing**
  (`cannot record submitted pass ... current unlocked pass is 'complete'`). Regenerate the spec
  from the facts first, then run with `rebuild=True`; and a facts script must exit non-zero on a
  strict-quality FAIL, or a `&&` chain promotes a prop whose spec never validated.
- **Skyline imposters take a keying step BEFORE img2threejs, not instead of it.**
  `scripts/skylinekit/author-imposter.mjs --id <id>` keys `packages/props/src/models/<id>/imposter.png` to alpha and
  writes the spec and factory for ONE unlit, yaw-billboarded quad (2 tris, 1 draw, 1 material,
  1 geometry, one RGBA `maps/albedo.webp`); the model is still built through img2threejs, then the
  normal build → render → promote chain. Three things it learned: the key is a flood fill through SOLID backdrop only
  (≤10 levels off the measured border colour) with the anti-aliased rim added as a 2 px dilation
  afterwards — a flood that walks the soft band keyed the twin towers' whole light-grey podium into
  speckle; enclosed flat pockets ≥0.25% of the frame are keyed too (the elephant's belly is sky, at mean
  distance 1.0, where the mall's blank LED screen measures 63 and stays); and the quad's WIDTH follows
  the plate (height × keyed aspect) because a quad at the listed width stretches the texture — eight of
  fifteen declarations were 11–51% off and were corrected with the arithmetic in `notes`. `edit-assets`
  only honours `budgetClass` when it CHANGES in the same edit, so the `small` pin is a second edit.
  **This bullet used to open "Skyline imposters do not go through img2threejs", and it was wrong.**
  That sentence cost a wrong provenance record across all fifteen of them. Nothing on disk
  contradicts it either way — an imposter's sculpt spec carries no `reviewHistory` and its
  `scratch/` state is long cleaned — so the absence of those files is NOT evidence of a different
  route, and do not "correct" it back from them. `license.generatedBy` says `img2threejs` on all
  100 assets and is correct.
- **The render harness's clip planes follow the camera fit.** They were a fixed 0.01..100 m, which
  clipped a 300 m tower out of the frame entirely and read as a SwiftShader blank-render fault.
- **Nothing runs on the host. Ever.** The container is the ENVIRONMENT; the host
  is storage. Every tool this project builds with -- node, npm, vite, esbuild,
  the headless chromium -- lives in the image and executes inside a container,
  and the host contributes source files plus a place to keep what the container
  writes. That is the whole of Docker's point: run `npm` on the host and you have
  reintroduced the host's Node version, the host's glibc and the host's global
  state as inputs to the build, which is the thing the image exists to delete.
  So:
  - `compose.yaml` bind-mounts the repo at `/app` and `/repo` and masks NOTHING.
  - The `dev` stage is `FROM base`: no source, no `node_modules`, only the
    toolchain `apt` and the base image provide.
  - `node_modules` is installed BY THE CONTAINER, INTO THE MOUNT:
    `docker compose run --rm --no-deps -e HOME=/tmp -e npm_config_cache=/tmp/npm-cache web npm ci`
    It lands at `./node_modules`, owned by the host user (the service runs as
    `${THAIKIT_UID}`), so it persists across `docker compose down` and is one
    tree rather than one per container -- while still being the image's own npm
    and Node that produced it. A dependency change needs no image rebuild and no
    restart; rerun that line.
  - Every script in `scripts/` is run the same way
    (`docker compose run --rm web node scripts/...`), not with a host `node`.
  This replaced four anonymous `node_modules` volumes, which were wrong twice
  over: they hid the mount, and an anonymous volume is seeded ONCE and survives
  `docker compose build`, so a dependency change reached the container only if
  somebody remembered `--renew-anon-volumes` AND rebuilt -- and since a fresh
  volume is seeded from the image, forgetting the rebuild silently re-seeded the
  STALE tree. It cost `tar` missing at `/app` while present on the host (the pack
  manager's delete button dying on `ERR_MODULE_NOT_FOUND ... 'tar'`), then twelve
  hours of a crash-looping web container on `Cannot find package
  '@thai-kit/level-schema'` after `d941da5` renamed two workspace packages to
  their published scope -- against a source tree that was already correct.
  **`compose.prod.yaml` behaves identically**, and the Dockerfile now has ONE
  `RUN` (apt-get) and no `COPY` at all: `runtime` and `dev` are both `FROM base`
  and differ only in `NODE_ENV` and `CMD`. Production used to bake source and run
  `npm ci --omit=dev --workspace @thaikit/server --workspace @thaikit/registry-core`,
  which meant the shipped image had a second, frozen answer to "what is running"
  -- and it was missing `@thai-kit/level-schema` outright, so every `/level` route
  in the prod stack died on `ERR_MODULE_NOT_FOUND` against a source tree that was
  correct. The one thing prod still needs that dev does not is the static client
  bundle, and that is built the same way as everything else:
  `docker compose run --rm --no-deps -e HOME=/tmp -e npm_config_cache=/tmp/npm-cache web npm run build --workspace @thaikit/client`,
  which writes `web/client/dist` into the mount.
- **`install-pack.mjs` loads its download/bundle stack lazily.** `source.mjs` needs semver,
  `fetch.mjs` needs tar, `wrap.mjs` needs esbuild -- and `--remove` needs none of them, being a
  filesystem delete plus a `packs/index.json` rewrite. Static imports made removal fail on a
  runtime that could not install; keep them behind `loadInstallDeps()`.
- A schema migration cannot use `updateRegistry`: it re-reads through the
  CURRENT schema, so it can never open a file written by an older one. That is
  what `migrateRegistry` is for — raw in, validated out, same lock.
- Express 5's path-to-regexp removed bare `*`; the SPA fallback is a terminal
  `app.use` with no pattern.
- `compression` buffers SSE forever — that route is excluded.
- Don't wait for `networkidle0` on the UI; the SSE stream keeps it busy forever.

## Blender: the bake uses it; blender-mcp does not

The LEVEL BAKE drives Blender headlessly in the container -- see the bake bullets
above. What is unused is the interactive `blender-mcp` route: generation is code,
so `scripts/blender-preflight.mjs`, the `blender` entry in `.mcp.json`, the
`blender` block in `budgets.json` and the doctor probe all stay for ad-hoc work,
and a closed Blender is information rather than a failure. If you use THAT:

- **`bpy.context.active_object` does not exist under blender-mcp.** The addon
  runs your code from a timer, outside any operator context. Use
  `bpy.context.view_layer.objects.active`, or `bpy.data` and `bmesh`.
- **`bpy.ops.wm.read_factory_settings()` kills the connection.** It unregisters
  the addon you are talking over. Clear the scene by removing datablocks instead.
- **Never paste a long Python program into `execute_blender_code`.** Write it to
  a file and execute a one-line `exec(compile(open(...)))` stub.
- The Windows bridge (`toBlenderPath`, `\\wsl.localhost\...`) is still there and
  still correct for a Blender running OUTSIDE the container. It is simply not the
  path the bake takes any more.
