---
name: thaikit-model
description: >-
  Builds the 3D model for a thaikit prop as a procedural Three.js factory -- code,
  not a GLB. Hands the asset's single reference plate to the img2threejs skill,
  which generates a Meshy v7 reference mesh through fal, sculpts the prop pass by
  pass into a TypeScript `THREE.Group` factory with named pivots and sockets, and
  gates it against its own deterministic review loop; then bundles, renders and
  records it in the registry. Use when the user wants the mesh, model, 3D object,
  geometry or Three.js build for a prop, animal or character -- including rebuild,
  regenerate, remodel and "make the model for X".
---

# thaikit — model (procedural Three.js)

Reference plate → img2threejs (Meshy reference mesh → sculpt spec → factory →
gates) → bundle → render → promote.

**This skill is thin on purpose.** It does not sculpt, score or iterate. All of
that belongs to `img2threejs`, which has a locked pass order, ~35 deterministic
gates and its own on-disk state machine. thaikit's job is to satisfy the
preconditions, compose a prompt that says what this prop actually is, and turn
the result into a registry entry.

**Do not re-score the model.** There is no thaikit rubric any more —
`prompts/rubric.md`, `score.mjs` and the critique skill are gone. A second
opinion with no evidence behind it is worse than none.

## What ships

A prop is a **JavaScript module**, not a GLB:

| File | What it is |
|---|---|
| `packages/props/src/models/<id>/createObjectModel.ts` | The TypeScript factory — the artefact |
| `packages/props/src/models/<id>/model.ts` | Its vibe3d entry (`createModel`, `createPreview`); emitted by promote, never hand-edited |
| `packages/props/src/models/<id>/thaikit.json` | The asset record (budgets, scale, physics, review, stages). Never hand-edit: go through the scripts |
| `packages/props/src/models/<id>/object-sculpt-spec.json` | The spec behind the factory — **edit this to refine** |
| `packages/props/src/models/<id>/thumb.webp` | Grid thumbnail, rendered from the module |
| `packs/@thai-kit/<tag>/<id>/model.bundle.js` | The CommonJS bundle. A BUILD PRODUCT of the pack installer, never committed |
| `scratch/<id>/reference.glb` | The Meshy mesh. **Evidence. Never ships.** |

## Step 0 — gates

**The plate must exist.**

```bash
node --input-type=module -e "
import { readRegistry } from '@thaikit/registry-core';
import { resolveBudget } from './scripts/lib/config.mjs';
const a = (await readRegistry()).assets.find(x => x.id === process.argv[1]);
console.log(JSON.stringify({
  image: a.status.image, url: a.image?.uploadedUrl, subject: a.subject,
  budgetClass: a.budgetClass, budget: await resolveBudget(a),
  collider: a.collider, destructionGroups: a.destructionGroups,
}, null, 1));" <id>
```

`resolveBudget` is the one place the four ceilings are worked out — the asset's
own overrides over its class's numbers. Read them from there and never re-derive
them from `budgets.json` by hand, which is how `targetTriangles` came to be
honoured in two places and quietly ignored in a third.

If `status.image` is not `done`, stop and run **`thaikit-preview-image`**. Never
regenerate the plate here to "improve" it — a prop whose plate is wrong is a
preview-image problem.

`image.uploadedUrl` is the fal CDN copy of exactly the file on disk, and it is
what the reference-mesh call needs. Re-upload only when it is null:

```bash
npm run --silent upload -- packages/props/src/models/<id>/preview.jpg
```

Never hand-encode an image to base64 to get it to fal.

**The toolchain must be there.**

```bash
npm run doctor
```

It checks python ≥ 3.10, that the img2threejs skill is installed, `FAL_KEY`,
esbuild and Chrome. A failed Blender probe is expected and does not matter.

## Step 1 — decide the subject, because it changes the pipeline

Read `asset.subject`. It is the single most consequential fact in the prompt.

| `subject` | img2threejs profile | Notes |
|---|---|---|
| `prop` | `generic` | Almost everything in this kit. |
| `animal` | `generic`, `primaryDomain: "hybrid"` | A living figure, but the `character` profile's landmark gates are MediaPipe **face and pose** extractors that have nothing to say about a dog. Turn on the chirality and swept-arc gates by hand instead. |
| `character` | `character` | **Humans only.** Turns on the anatomy track, landmark evidence and the likeness gates. |

Never use the `cs2` profile. If `subject` looks wrong for what the prop plainly
is, say so and fix it with `scripts/edit-assets.mjs` before building — a person
built as a `prop` skips every anatomy gate silently.

## Step 2 — invoke img2threejs

Use the `Skill` tool with `skill: "img2threejs"`, and compose the prompt from the
registry entry. Fill every `<>`; take the triangle target from
`asset.targetTriangles ?? budgets.json classes[budgetClass].targetTriangles` and
never invent it.

> Reconstruct **`<name>`** (`<description>`) as a procedural Three.js model.
>
> - **Subject class:** this is a **`<prop | animal | person/character>`**.
>   `<animal/character: it is a living figure — anatomy, proportion and pose are
>   identity-defining, and every left/right pair is a reflection, not a rotation.>`
> - **Reference image:** `packages/props/src/models/<id>/preview.jpg` — the single authoritative
>   plate. There is no turnaround, so report per-region confidence for anything
>   the one view cannot show rather than inventing a back side.
> - **Reference mesh — use the fal provider, not the TRELLIS Space:**
>   ```bash
>   python3 integrations/mesh3d/generate_reference_mesh.py \
>     --provider fal --fal-endpoint meshy/v7/image-to-3d \
>     --image-url "<asset.image.uploadedUrl>" \
>     --out-dir <ABSOLUTE repo path>/scratch/<id> \
>     --fal-arg ultra_mode=true --fal-arg enable_pbr=true \
>     --fal-arg should_remesh=true --fal-arg topology=triangle \
>     --fal-arg symmetry_mode=auto \
>     --fal-arg target_polycount=<targetTriangles>
>   ```
>   `<character only: --fal-arg pose_mode=a-pose --fal-arg enable_rigging=true
>   --fal-arg rigging_height_meters=<scale.declared.h>>`
>   `<animal: no rigging and no pose_mode — Meshy rigs humanoids only, and a bad
>   rig is worse than none.>`
>   Then `probe_glb.py` it and run the GLB-mediated v2 track: render it through
>   the same browser route as the candidate, and score proportions band by band
>   with `mesh_reference_compare.py`. It is a generative PROXY, not ground truth
>   — its topology and materials never enter the factory.
> - **Intended use:** a real-time browser FPS prop on low-end integrated GPUs.
>   A level builder places hundreds of these at once, so the scene budget is four
>   separate ceilings and none of them substitutes for another. Set all four on
>   `performanceBudget`, from the resolved budget above and never invented:
>
>   | field | value | what it costs |
>   |---|---|---|
>   | `targetTriangles` | `<targetTriangles>` | rasterisation, and the tessellation tier |
>   | `maxDrawCalls` | `<maxDrawCalls>` | one CPU submission per component, per frame |
>   | `maxMaterials` | `<maxMaterials>` | a shader and render-state switch each |
>   | `maxUniqueGeometries` | `<maxUniqueGeometries>` | VRAM, and upload on first draw |
>
>   `validate_sculpt_spec.py --strict-quality` counts all four off the spec, so
>   they bite before a factory exists. **Design to them in the blockout, do not
>   optimise into them at the end** — a prop split into seven components in the
>   blockout is seven draw calls through every later pass, and the optimization
>   pass cannot merge what the pivots have already been hung off.
>   Two levers move these numbers: fold parts that share a material into ONE
>   component, and move a repeated part (spokes, slats, fasteners) into
>   `repetitionSystems`, which emits a single `InstancedMesh` for the whole set.
>   A colour difference is not a material difference — two parts that differ only
>   in albedo want one material and a vertex-colour or texture-region split.
> - **Working directory:** `<ABSOLUTE repo path>/scratch/<id>/`. Write the spec,
>   assessment, renders and factory there. Run every `forge/` script from the
>   img2threejs skill root with absolute `--state` / `--out` paths.
> - **Iteration budget — strict quality, up to 10 corrections:**
>   `state.py init --profile <generic|character> --max-per-pass 3 --max-total 10`.
>   Run `validate_sculpt_spec.py --strict-quality` and do not generate a factory
>   until it passes. Do not stop at "improved" — stop at the gate or the ceiling.
> - **Work every pass:** `blockout → structural-pass → form-refinement →
>   material-pass → lighting-pass → interaction-pass → optimization-pass`. Run the
>   deterministic gates before AI vision, and the turntable / self-intersection /
>   attachment-anchor trio at every review. A single front view is not evidence.
> - **Materials matter.** Use the Meshy PBR maps and the plate as material
>   evidence: `analyze_texture.py` per crop, then `extract_pbr_evidence.py` —
>   confidence below 0.7 is a stop signal, not a pass — then the material views /
>   comparator / gate chain. Solid albedo for flat paint; a projected de-lit
>   reference crop for anything patterned or printed. No baked lighting or AO in
>   base colour. Verify each crop sits on the part you think it does: three
>   materials here were sampled off a crop of a different surface and only the
>   confidence score gave it away.
> - **Declare `textureless` on every material that does not need a texture — this
>   is the default, and the exceptions are what need arguing.** `createSculptMaterial`
>   otherwise synthesises FIVE canvases per material at `textureResolution`, written
>   pixel by pixel in JavaScript. Thirteen materials at 1024 cost **24 seconds inside
>   `createObjectModel`** — before the drawer can show anything — plus 34 textures,
>   35 megapixels and ~64 MB of VRAM on a kit aimed at low-end integrated GPUs. It
>   scales as the SQUARE of the resolution (256 → 1.6 s, 512 → 6.5 s, 1024 → 26 s),
>   so lowering the resolution only makes a bad default cheaper. Declaring
>   `textureless: {declared: true, evidence: [...]}` skips it: 24,180 ms → 23 ms.
>   The evidence array must NAME a reference region or a measurement, and the
>   material must then carry no `textureResolution`, `referencePbr`,
>   `textureProjection` or `surfaceFrequencyBands` — the validator enforces both
>   halves.
>
>   It is also a CORRECTNESS fix, not only a speed one: whenever a texture set
>   exists the generator forces `color` to white and `roughness` to 1 and reads
>   both from the generated maps, discarding the authored albedo and the
>   reference-derived roughness. That is what renders a white building mid-grey.
>
>   Opt IN only where the surface carries detail a viewer resolves at prop
>   distance and that detail is identity-defining — the oil drum's rust and worn
>   hoop crowns earn it at 1.0 s; flat paint, bare glass, mill-finish metal,
>   render, membrane and vinyl do not. A generated canvas texture assigned AFTER
>   material construction (the way a brand fascia is) is unaffected by the
>   declaration and stays the right route for printed graphics.
> - **Do not author surfaces flush against one another — coincident co-facing faces
>   z-fight.** Two surfaces in the same plane pointing the same way tear into
>   interleaved triangles as the camera moves. An OPPOSED butt joint is fine. Make
>   panels stand proud of what they sit on, and make a frame OVERLAP the opening it
>   fills instead of meeting its reveal edge exactly. Check with
>   `node scripts/check-coplanar.mjs --id <id>` after building, and by eye at high
>   zoom on any seam — the check only sees bounding-box faces, not interior profile
>   edges like a ring's inner rail.
> - **Pivots and sockets are required where something moves, and nowhere else.**
>   The default for a prop is **one** pivot — the root, at `<pivot>` — and **no**
>   sockets. A named pivot is a promise that a part turns on that axis; a named
>   socket is a promise that something attaches there. Neither is free: both are
>   contract the kit has to keep, and a prop that declares eight pivots and ten
>   sockets when it has no moving parts and nothing attaches to it has described
>   a machine that does not exist. An oil drum is a sealed steel cylinder. It
>   moves as one rigid body, and the only axis it has is the one it rolls on.
>
>   So: add a pivot only for a part that a game will actually articulate — a lid
>   that opens, a wheel that turns, a door that swings — and put it at the real
>   hinge or axis. Add a socket only where something is meant to be attached or
>   emitted: a handle slot, a bulb mount, a spout. **Do not add a pivot per
>   component**, do not add a socket per seam, and do not name a marker after a
>   place on the surface (`socket-top-center`, `socket-label-front`) — a location
>   is not a mechanism. Name them for the mechanism: `lid-hinge`, `wheel-front-l`,
>   `handle-socket`.
>
>   If the prop genuinely has no moving parts, say so in the spec and ship one
>   root pivot. That is a correct answer, not a gap. Then run
>   `check_part_coverage.py` — the model must be explodable and clickable.
> - **Colliders and destruction groups are DECLARED on the asset, and the build
>   must match them exactly.** They are the runtime contract, and unlike the scene
>   budget they are an equality check in both directions.
>   - **Collider: `<collider>`.** Give the components that need one an
>     `actionProfile.collider` of that shape. A collider is the cheap convex proxy
>     a physics engine tests against instead of the mesh, in the component's own
>     local frame. `none` means nothing collides with this prop, and then the model
>     must expose no colliders at all.
>   - **Destruction groups: `<destructionGroups, or "none — this prop is not
>     breakable">`.** Set `actionProfile.destruction.fractureGroup` to exactly
>     these names, on exactly the components that belong to each. Do not invent a
>     group that is not on this list and do not leave one off it: an undeclared
>     group is contract a consumer may come to rely on that nobody asked for, and
>     a missing one is a prop that does not come apart the way its entry says.
>     Group by what physically separates — a lid and the hinge it swings on are one
>     assembly, not two.
> - **World placement:** origin at `<pivot>`, `+Y` up, real size
>   `<scale.declared.w> x <scale.declared.h> x <scale.declared.d>` m.
>   `<placement>` prop.
> - Emit the factory at `scratch/<id>/src/createObjectModel.ts`, exporting
>   `createObjectModel(spec, options): THREE.Group`. It must import `three` as a
>   bare specifier **and nothing else** — the bundler leaves `three` external and
>   the host page injects its own instance, so any other import fails at runtime.

If `forge/next.py` exits 3 or reports `status=stopped`, that is a hard stop.
Report the reason and stop. Never reconstruct progress from the conversation —
`scratch/<id>/.img2threejs/state.json` is the authority, and it survives a
restart precisely so you do not have to.

## Step 3 — bundle, render, promote

```bash
node scripts/build-model-module.mjs --id <id>
node scripts/render-model.mjs --id <id>
node scripts/promote-model.mjs --id <id>     # ends by refreshing the @thai-kit pack item
```

- **build** compiles the TypeScript to CommonJS with `three` external. If it
  fails, esbuild names the file and line — fix the factory, do not work around it.
- **render** runs the factory in a headless harness and writes the turntable at
  0/90/180/270 plus a hero shot. It measures all four budget axes and the
  `sculptRuntime` contract, records them, and prints the verdict as
  `budget : <class> — 5,392 triangles / 800, 7 draw calls / 1, …`. It only
  **warns** when a prop is over: these renders are also what img2threejs's review
  gates read, so failing here would withhold the pictures you need in order to
  see why the prop is heavy. **It does fail a blank render** — a valid PNG of the
  background is the failure that looks like success.
- **promote is the gate, and it carries the review across.** It records
  img2threejs's OWN verdict on the asset — fidelity, layer scores, per-feature
  scores, passes complete and corrections used — read out of the sculpt spec's
  `reviewHistory` and the state file's loop counts by `scripts/lib/review.mjs`.
  thaikit does not judge models, so do not hand-write a score into the registry:
  a number nobody generated still looks like a measurement, and the drum wore a
  hand-entered 99.8 for exactly as long as nothing carried the real 0.90 across.
- **promote also checks the runtime contract.** Declared destruction groups must
  equal built ones, and a prop whose `collider` is not `none` must expose at
  least one. `--allow-contract-drift` is the deliberate override.
- **promote is the budget gate.** An over-budget prop does not enter the kit.
  Fix it in the sculpt spec and rebuild, or — if this prop has genuinely earned
  the frame time — raise its own ceiling with
  `node scripts/edit-assets.mjs --id <id> --set maxDrawCalls=3` and say why in
  `notes`. `--allow-over-budget` exists, ships a prop knowingly over, and says so
  in the log; it is not the way past a first failure.
- Feed that turntable back to img2threejs's gates if its review is still open.
- **promote** copies the TypeScript, spec, maps and thumbnail into `packages/props/src/models/<id>/`,
  emits the vibe3d `model.ts` beside them, flips the status to `done`, and then
  runs `install-pack.mjs --refresh-item @thai-kit/<id>` so the pack under
  `packs/` -- the only place a bundle exists -- carries the new build. Nothing
  else needs running; `build-vibe3d-registry.mjs` is the PUBLISH step only.

## Step 4 — report

Say all of it:

- **Cost.** Meshy is metered by compute-second. Stop and ask before exceeding
  **$3 on one asset** (`budgets.json` `limits.maxCostPerAssetUsd`).
- Fidelity score, which passes reached `continue`, and the correction count
  against the 10 ceiling.
- **Fidelity, and which layer is carrying it.** The overall number hides the
  answer: 0.90 made of a 0.95 silhouette and a 0.35 material surface is a prop
  whose shape is right and whose surface is not finished. Report the layer scores
  and any feature below its threshold, not just the headline.
- **The runtime contract**: the destruction groups built against those declared,
  and whether the collider shape was honoured.
- The named pivots and sockets, **with their counts**. If there are none, say so
  plainly — for a prop with no moving parts that is the right answer, and for a
  prop with a lid and no `lid-hinge` it did not meet the brief. If the count is
  higher than the prop has mechanisms, that is a defect to report, not a bonus.
- **All four budget axes** against the class, measured not estimated: triangles,
  draw calls, materials and unique geometries. Never report triangles alone — a
  prop at a third of its triangle budget can still be the thing that costs a
  low-end GPU its frame.
- Anything the single plate could not show, with its confidence.

Then point at `http://localhost:3733` — the drawer's **preview** tab orbits the
model. Its **pivots** and **sockets** toggles are separate and each carries its
count, because they answer different questions: a pivot draws the three coloured
axes a part turns on, a socket draws a cyan cage at a point something clips into.
Turning both on is the fastest way to see a marker in the wrong place, and the
counts on the buttons are the fastest way to see a static prop that was given
eight axes nothing will ever turn. **colliders** draws each physics proxy in
amber (purple for a trigger), which is how you notice a drum whose collider is a
box or a cap whose collider swallows the lid. **break** pulls the destruction
groups apart, so which parts leave together is something you can watch rather
than infer from a list of names. The **runtime** tab lists them all by name, the
**cost against budget** table shows each axis against its ceiling, and the
**quality** tab is img2threejs's own review — nothing on it is thaikit's.

## Adopted packs and qualified ids

A third-party vibe3d pack installed with adoption (the default; see
`docs/adopting-packs.md`) lives at `adopted/<ns>/models/<name>/` with a
`thaikit.json` beside its source, and this skill works on it unchanged: pass
the QUALIFIED id, `--id @medieval-kit/bronze-bell`. Everywhere this document
says `packages/props/src/models/<id>/` read `adopted/<ns>/models/<name>/`,
everywhere it says `scratch/<id>` read `scratch/@<ns>/<name>`, and the pack
refresh is `--refresh-item @<ns>/<name>`. A bare id is always `@thai-kit`.

An untouched adopted item keeps its upstream address so `--upgrade` can
replace it. Before the first rebuild or new preview of an adopted item, ASK
whether to fork it first (`node scripts/fork-item.mjs @<ns>/<name>` -> it
becomes `@thai-kit/<name>` with `forkedFrom` recorded, and every level
placement is re-pointed); rebuilding it in place is allowed, but it then
diverges from upstream under upstream's name and `--upgrade` will refuse
until `--force`.
