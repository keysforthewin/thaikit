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
- **Colliders and destruction groups are declared on the ASSET, not discovered on
  the model.** `collider` is the physics proxy's shape; `destructionGroups` names
  the assemblies the prop must break into, empty meaning not breakable.
  `promote-model.mjs` checks built against declared as an EQUALITY in both
  directions — a group declared and not built is a prop that does not come apart
  as promised, and one built and not declared is contract nobody asked for.
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
