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
- **Pivots and sockets are required on anything that moves.** Named for the
  mechanism (`lid-hinge`, `wheel-front-l`, `handle-socket`) and exposed on
  `root.userData.sculptRuntime`. The drawer's **pivots** toggle draws an axes
  helper at each, which is the fastest way to see one in the wrong place.
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
