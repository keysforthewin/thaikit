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
| `assets/<id>/model.bundle.js` | The factory, bundled for the browser |
| `assets/<id>/src/createObjectModel.ts` | The TypeScript it was generated from |
| `assets/<id>/object-sculpt-spec.json` | The spec behind that — **edit this to refine** |
| `assets/<id>/thumb.webp` | Grid thumbnail, rendered from the module |
| `scratch/<id>/reference.glb` | The Meshy mesh. **Evidence. Never ships.** |

## Step 0 — gates

**The plate must exist.**

```bash
node -e "const r=require('./registry.json');const a=r.assets.find(x=>x.id===process.argv[1]);console.log(JSON.stringify({image:a.status.image,url:a.image?.uploadedUrl,subject:a.subject,budgetClass:a.budgetClass,targetTriangles:a.targetTriangles},null,1))" <id>
```

If `status.image` is not `done`, stop and run **`thaikit-preview-image`**. Never
regenerate the plate here to "improve" it — a prop whose plate is wrong is a
preview-image problem.

`image.uploadedUrl` is the fal CDN copy of exactly the file on disk, and it is
what the reference-mesh call needs. Re-upload only when it is null:

```bash
npm run --silent upload -- assets/<id>/preview.jpg
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
> - **Reference image:** `assets/<id>/preview.jpg` — the single authoritative
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
>   Set `performanceBudget.targetTriangles` to `<targetTriangles>`.
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
>   base colour.
> - **Pivots and sockets are required.** Every part that should move gets its own
>   pivot at the real hinge or axis, and every attachment point a named socket,
>   both exposed on `root.userData.sculptRuntime`. Name them for the mechanism
>   (`lid-hinge`, `wheel-front-l`, `handle-socket`), and finish with
>   `check_part_coverage.py` — the model must be explodable and clickable.
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
node scripts/promote-model.mjs --id <id>
node scripts/build-registry.mjs
```

- **build** compiles the TypeScript to CommonJS with `three` external. If it
  fails, esbuild names the file and line — fix the factory, do not work around it.
- **render** runs the factory in a headless harness and writes the turntable at
  0/90/180/270 plus a hero shot. It measures triangles, draw calls and the
  `sculptRuntime` contract, and records them. **It fails a blank render** — a
  valid PNG of the background is the failure that looks like success.
- Feed that turntable back to img2threejs's gates if its review is still open.
- **promote** moves the module, TypeScript and spec into `assets/<id>/`, makes
  the thumbnail from the hero, and flips the status to `done`.

## Step 4 — report

Say all of it:

- **Cost.** Meshy is metered by compute-second. Stop and ask before exceeding
  **$3 on one asset** (`budgets.json` `limits.maxCostPerAssetUsd`).
- Fidelity score, which passes reached `continue`, and the correction count
  against the 10 ceiling.
- The named pivots and sockets. If there are none, say so plainly — a prop with
  a lid and no `lid-hinge` did not meet the brief.
- Triangles against the class budget.
- Anything the single plate could not show, with its confidence.

Then point at `http://localhost:3733` — the drawer's **preview** tab orbits the
model, and its **pivots** toggle draws an axes helper at every named pivot and
socket, which is the fastest way to see one in the wrong place.
