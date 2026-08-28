# thaikit — working notes for Claude

An MIT library of game-ready **props** for a browser FPS / level builder on
**low-end PCs**, plus the skills that make them.

A prop is a **procedural Three.js factory** — TypeScript that builds a
`THREE.Group` in code — not a GLB. That changed in schema v3; anything below
that still says "mesh" means the model.

## Non-negotiables

- **The artefact is code.** `assets/<id>/model.bundle.js` exports
  `createObjectModel(spec, options): THREE.Group`. The TypeScript behind it and
  the sculpt spec behind that ship alongside it. Nothing exports a GLB.
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
  `scripts/derive-colliders.mjs` evaluates the shipped module under Node,
  voxelises its triangles and writes a compound of boxes and cylinders to
  `assets/<id>/colliders.json` in root-local metres, with `scale` as half-extents.
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
- **One reference image per prop, never a turnaround.** `assets/<id>/preview.jpg`,
  recorded as `image`. `thaikit-preview-image` is the only thing that writes it;
  everything downstream consumes it.
- **Never write `registry.json` directly.** Always go through
  `@thaikit/registry-core`, which holds the lock the web UI also respects. A
  direct write will be silently lost or will corrupt a concurrent one.

## Layout

- `packages/registry-core/` — schema, lock, atomic write, ETag. Imported by the
  server *and* the host-side skills. The shared import is the interface between
  them; there is deliberately no HTTP write path for generation.
- `scripts/` — the engine. One JSON line on stdout, human logs on stderr.
- `web/` — Express + Vite/React on port 3733.
- `prompts/` — budgets, categories and the image prompt scaffold. Data, so it
  lives here rather than inside a skill.
- `render/` — the headless harness. Vendored three, no loaders: it evaluates the
  model module the same way the browser does.
- `scratch/` — gitignored; every build's working directory, and where
  img2threejs writes its state, spec and renders.

## The pipeline

`thaikit-asset-list` → `thaikit-preview-image` → `thaikit-model`.

`thaikit-model` is thin by design: it checks the gates, composes a prompt, and
invokes the `img2threejs` skill. Then `build-model-module.mjs` (esbuild) →
`render-model.mjs` (puppeteer) → `promote-model.mjs` → `build-registry.mjs`.

## Conventions

- ES modules everywhere, Node ≥ 22, no build step for server or scripts.
- Registry paths are **repo-relative with POSIX separators**, so the same file
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
- **`build-model-module.mjs` builds from `scratch/<id>/src`, not from `assets/<id>/src`, and writes
  to `scratch/<id>/model.bundle.js`.** Editing a promoted asset's shipped TypeScript and rebuilding
  does nothing at all — it recompiles the old scratch source over the old scratch bundle, and the
  comparison that "proves" the shipped file is unchanged is comparing a file nothing wrote to. Emit
  into scratch, build, then promote; promote is what copies source, bundle and spec into `assets/`.
- **Meshy's fal endpoint refuses some innocuous plates as `422 content_policy_violation`** (the
  sleeping soi dog, twice), and `--fal-arg enable_safety_checker=false` is echoed back as `true` —
  the endpoint forces it. There is then no proxy and no band table: build from the plate alone,
  say so in `meshyNote` with the confidence, and keep the refused log in `scratch/<id>/`.
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
- **Skyline imposters do not go through img2threejs.** `scripts/skylinekit/author-imposter.mjs --id <id>`
  keys `assets/<id>/imposter.png` to alpha and writes the spec and factory for ONE unlit, yaw-billboarded
  quad (2 tris, 1 draw, 1 material, 1 geometry, one RGBA `maps/albedo.webp`); then the normal build →
  render → promote chain. Three things it learned: the key is a flood fill through SOLID backdrop only
  (≤10 levels off the measured border colour) with the anti-aliased rim added as a 2 px dilation
  afterwards — a flood that walks the soft band keyed the twin towers' whole light-grey podium into
  speckle; enclosed flat pockets ≥0.25% of the frame are keyed too (the elephant's belly is sky, at mean
  distance 1.0, where the mall's blank LED screen measures 63 and stays); and the quad's WIDTH follows
  the plate (height × keyed aspect) because a quad at the listed width stretches the texture — eight of
  fifteen declarations were 11–51% off and were corrected with the arithmetic in `notes`. `edit-assets`
  only honours `budgetClass` when it CHANGES in the same edit, so the `small` pin is a second edit.
- **The render harness's clip planes follow the camera fit.** They were a fixed 0.01..100 m, which
  clipped a 300 m tower out of the frame entirely and read as a SwiftShader blank-render fault.
- A schema migration cannot use `updateRegistry`: it re-reads through the
  CURRENT schema, so it can never open a file written by an older one. That is
  what `migrateRegistry` is for — raw in, validated out, same lock.
- Express 5's path-to-regexp removed bare `*`; the SPA fallback is a terminal
  `app.use` with no pattern.
- `compression` buffers SSE forever — that route is excluded.
- Don't wait for `networkidle0` on the UI; the SSE stream keeps it busy forever.

## Blender: kept, but unused

Nothing calls it any more — generation is code. `scripts/blender-preflight.mjs`,
`scripts/lib/blender.mjs`, the `blender` entry in `.mcp.json`, the `blender`
block in `budgets.json` and the doctor probe all stay for ad-hoc work, so a
closed Blender is information rather than a failure. If you do use it:

- **Blender is on Windows; the scripts are in WSL.** They exchange files over
  UNC (`\\wsl.localhost\<distro>\...`). `scripts/lib/blender.mjs` `toBlenderPath()`
  is the ONLY place that translation happens.
- **`bpy.context.active_object` does not exist under blender-mcp.** The addon
  runs your code from a timer, outside any operator context. Use
  `bpy.context.view_layer.objects.active`, or `bpy.data` and `bmesh`.
- **`bpy.ops.wm.read_factory_settings()` kills the connection.** It unregisters
  the addon you are talking over. Clear the scene by removing datablocks instead.
- **Never paste a long Python program into `execute_blender_code`.** Write it to
  a file and execute a one-line `exec(compile(open(...)))` stub.
