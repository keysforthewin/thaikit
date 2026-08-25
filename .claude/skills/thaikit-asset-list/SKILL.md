---
name: thaikit-asset-list
description: >-
  Authors and maintains the thaikit prop list. Turns a themed description of a
  place or scene ("things you'd find on a Thai street", "night market clutter",
  "roadside shrine props") into a deduplicated list of individual game props, each
  with a physical size in metres, a category, a budget class, and a
  reference-image prompt, then adds them to the registry with image and mesh
  generation marked pending. Also edits, fixes, retunes and audits entries that
  already exist -- rewriting an image or texture prompt, correcting a declared
  size or category, retagging, renaming, hiding a prop, or requeueing it for
  regeneration. Use when the user wants to brainstorm, plan, expand, add, or
  backfill props, assets, or objects for the thaikit prop kit, asks what props
  a scene should have, wants new entries queued up for generation, or wants an
  existing asset's prompt, scale, category, tags, budget or notes changed,
  improved or reviewed.
---

# thaikit — asset list author and editor

You own the *authoring* fields of the registry: what a prop is, how big it is,
what it is called, and how it should be described to an image model. No images,
no meshes, no fal calls happen here — this skill is pure reasoning plus one
delegated write.

Two modes, and a request often needs both:

| Mode | Trigger | Delegate |
|---|---|---|
| **Add** | "props for a night market", "backfill the shrine category" | `scripts/new-assets.mjs` |
| **Edit** | "the stool prompt is too vague", "the wok is way too big", "retag these", "regenerate that one with a better description" | `scripts/edit-assets.mjs` |

Step 1 is always first. Adding is steps 2–6, editing is step 7, and both end at
the same report in step 8.

## What thaikit is

An MIT-licensed library of game-ready Three.js **props** for a browser FPS and level
builder targeting **low-end PCs**. Props only: no characters, nothing rigged,
nothing animated. Every asset ends up as one mesh, one material, and one small
texture set, with surface detail carried by normal maps rather than geometry.

## Steps

### 1. Read the current state first

```bash
cat prompts/categories.json          # taxonomy + real-world size priors
node -e "const r=require('./registry.json');console.log(r.assets.map(a=>a.id+' :: '+a.name).join('\n'))"
```

You must know what already exists before proposing anything.

When you are editing or auditing rather than adding, dump the authoring fields
too — you cannot improve a prompt you have not read:

```bash
node -e "const r=require('./registry.json');for(const a of r.assets)console.log(
  [a.id,a.category,a.budgetClass,
   \`\${a.scale.declared.w}x\${a.scale.declared.h}x\${a.scale.declared.d}m\`,
   \`img:\${a.status.image}/model:\${a.status.model}\`,a.tags.join('+'),
   JSON.stringify(a.prompts.image)].join(' | '))"
```

### 2. Brainstorm wide, then cut hard

Generate 30–60 candidates for the theme, then reduce.

**Prefer props that repeat in the real environment.** A level builder wants forty
plastic stools and a dozen crates far more than it wants one ornate unique thing.
Density of reuse is the point.

**Reject** anything that is: a character or creature; rigged or animated; better
done as a wall texture than a mesh (posters, stains, tiling brickwork); purely
decorative geometry too thin to survive a poly budget (loose wires, cobwebs); or a
whole scene rather than one object.

### 3. Deduplicate semantically — this is your job, not the script's

`scripts/new-assets.mjs` catches *lexical* duplicates (shared words) and slug
collisions. It cannot catch **semantic** duplicates, because that needs judgement:

- "plastic stool" and "monobloc chair" are **one** asset.
- "wok" and "wok burner" are **two** — different objects, different silhouettes.
- "rice sack" and "sack of rice" are one.

Compare each candidate against the existing registry *and* against the rest of
your own batch. When two candidates would produce near-identical meshes, keep one.

### 4. Author each entry

| Field | Guidance |
|---|---|
| `name` | Plain English, specific. "Som Tam Cart", not "cart". |
| `nameTh` | Thai name where you are confident; empty string otherwise. |
| `category` | One of the keys in `prompts/categories.json`. |
| `tags` | Lowercase, reusable across assets — `wheeled`, `food`, `seating`. |
| `scale.declared` | **Real-world metres**, w/h/d. Check against the category's `typicalLongestDimMeters`. A plastic stool is 0.42 m tall, not 2 m. |
| `pivot` | `base-center` for floor props, `back-center` for wall-mounted, `top-center` for hanging. |
| `prompts.image` | **The object description only** — see below. |
| `prompts.texture` | Materials and wear only: "soot-blackened steel, rusted legs". |
| `subject` | `prop` (the default and almost always right), `animal`, or `character` for a **human** figure. |

`budgetClass`, `placement` and `collider` are derived automatically; only set them
to override.

**`subject` changes the pipeline, not just the label.** It selects the
reconstruction profile `thaikit-model` uses: `character` turns on the anatomy
track and its landmark and likeness gates, `animal` runs the generic profile with
the chirality and swept-arc gates because the landmark extractors are human-only,
and `prop` runs neither. A person or a creature left as `prop` is built with every
anatomy gate silently skipped, so set it when you add the entry.

### 5. Write the image prompt correctly

**Write the object description and nothing else.** The plate scaffold — camera
angle, grey backdrop, flat lighting, the whole list of negatives — is injected
from `prompts/style-profiles.json` when `thaikit-preview-image` runs.

If you hand-write backdrop or lighting instructions here, assets drift apart
visually and the kit stops looking like one kit.

- Good: `"Glass-fronted papaya salad cart on bicycle wheels, blue tarp roof, steel frame"`
- Bad: `"A cart on a white background, studio lighting, 4k, highly detailed"`

Describe form, structure and distinguishing features. Two or three clauses. No
camera direction, no lighting, no quality boosters, no art-style words.

### 6. Write them to the registry

Always dry-run first:

```bash
node scripts/new-assets.mjs --dry-run --json '[ ... ]'
```

Read the warnings — especially scale warnings, which mean your metre estimate
disagrees with the category prior and is usually wrong. Fix and re-run, then:

```bash
node scripts/new-assets.mjs --json '[ ... ]'
```

For more than about ten assets, write the JSON to a file in the scratchpad and use
`--file` instead; a very long `--json` argument is awkward to correct.

### 7. Edit existing entries

`scripts/edit-assets.mjs` is the edit delegate. It takes the same shape as
`new-assets.mjs` — a JSON array — except each object carries an `id` selecting
the asset to change (an asset id, or an exact `name`) plus only the fields that
should change:

```bash
node scripts/edit-assets.mjs --dry-run --json '[
  {"id": "plastic-stool", "prompts": {"image": "Stacked monobloc plastic stool, four tapered legs, ribbed seat"}},
  {"id": "carbon-steel-wok", "scale": {"declared": {"w": 0.36, "h": 0.12, "d": 0.36}}, "tags": ["food", "cookware"]}
]'
```

Read the warnings, fix, then re-run without `--dry-run`. Use `--file` for more
than about ten edits, as with adding.

**What you may change.** The authoring fields, and nothing else:
`name`, `nameTh`, `description`, `category`, `tags`, `notes`, `hidden`,
`subject`, `budgetClass`, `targetTriangles`, `maxDrawCalls`, `maxMaterials`,
`maxUniqueGeometries`, `pivot`,
`placement`, `collider`, `destructionGroups`, `prompts.image`, `prompts.texture`,
`prompts.styleProfileId`, `scale.declared.{w,h,d}`, `scale.primaryAxis`,
`scale.tolerance`.

Anything else is refused by the script, deliberately:

- `id` is immutable — it is the folder name under `assets/`. A prop that needs a
  different slug is a delete plus a re-add, which is the user's call, not yours.
- `status`, `image` and everything under `model` -- the built file, the review,
  the runtime hierarchy, the reference mesh, the quarantine -- belong to
  `thaikit-preview-image` and `thaikit-model`. Do not hand-edit their bookkeeping
  to make a number look better.
- `prompts.imageBase` is the frozen original that prompt drift is measured
  against. Rewrite `prompts.image`; leave `imageBase` alone.

**Edits go stale.** If you change what generation consumed — the image prompt,
the texture prompt, the budget, the declared size, the pivot — then whatever is
already generated no longer matches the entry. The script warns for each affected
stage. Two ways to resolve it:

- The user wants the prop rebuilt: pass `--requeue`. Affected stages go back to
  `pending` (and a quarantine is lifted), so `thaikit-model` picks the asset up
  again. This does **not** delete any existing file; promotion overwrites.
- The user only wanted the metadata corrected: leave the warning, and say plainly
  in your report that the shipped model still reflects the old values.

Requeueing spends money on the next generation run, so do it when the user asked
for a regeneration or a fix to something visibly wrong — not as tidiness.

**A resize reclassifies.** Changing `scale.declared` re-derives `budgetClass`
from the new longest dimension, because size is what drives the scene
budget. The script reports the reclassification; pass an explicit
`budgetClass` in the same edit to override it.

**`collider` and `destructionGroups` are the runtime contract.** They are design
INTENT, declared before the build and checked against it at promotion, not a
description read off a finished model. `collider` is the shape of the cheap proxy
a physics engine tests against instead of the mesh (`none` means nothing collides
with this prop, and the model must then expose no colliders). `destructionGroups`
names the assemblies the prop must break into — `["lid", "body", "base"]` for a
crate whose lid comes off — and empty means not breakable, which is the right
answer for most props.

Both directions are a defect: a group declared and not built means the prop does
not come apart the way its entry says, and a group built and not declared is
contract a consumer may come to rely on that nobody asked for. So name only the
assemblies that physically separate, and group by what actually stays together —
a lid and the hinge it swings on are one assembly, not two.

**The budget is four ceilings, not one number.** `budgetClass` sets all four in
`prompts/budgets.json`: `targetTriangles` (rasterisation), `maxDrawCalls` (one
CPU submission per component, per frame), `maxMaterials` (a shader and
render-state switch each) and `maxUniqueGeometries` (VRAM and upload). They are
separate costs, and a prop can sit at a third of its triangle budget and still be
the thing that costs a low-end GPU its frame.

Leave all four null and the class supplies them, which is right for nearly every
prop. Set one only when a prop has genuinely earned a different ceiling than its
size implies — a market-stall canopy that truly needs a third material, a bollard
that should be one mesh even though it is `medium` — and say why in `notes`. An
override is a standing exemption from the kit's own budget, so it wants a reason
attached to it, not a number typed to make a build pass.

**Auditing.** When asked to review or improve the list rather than change named
entries, read the dump from step 1 and look for: image prompts carrying style,
lighting or quality words that belong to the profile scaffold (step 5); metre
estimates that fight the category prior; a `category` that no longer matches what
the prompt describes; missing or inconsistent tags; near-duplicate entries that
slipped through (step 3); and empty `nameTh` where you are confident of the Thai
name. Propose the edits as a list first and let the user pick, unless they
already said to go ahead — a sweeping rewrite of prompts across the kit is not a
change to make unasked.

### 8. Report

Print a table of what was added (name, category, size class, declared size) and,
for edits, what changed per asset — old value → new value — plus anything
requeued. List what was skipped and why. Call out any warning you decided to
accept rather than fix, and any asset whose generated output is now out of date.

Then tell the user they can browse and edit the result at
`http://localhost:3733` (`docker compose up`), that reference images come from
`thaikit-preview-image`, and that building the 3D model is `thaikit-model`.

## Do not

- Do not call fal.ai or generate images. That is skill 2.
- Do not edit `registry.json` directly — always go through `new-assets.mjs` or
  `edit-assets.mjs`, which hold the lock the web UI also respects.
- Do not invent categories. Use the taxonomy, or tell the user it needs extending.
- Do not delete assets. Hide one with `{"hidden": true}` if it should drop out of
  the built kit; an actual delete is the web UI's `DELETE /api/assets/:id`, and
  the user's decision.
- Do not touch generation state to change an outcome. A bad score is fixed by a
  better prompt and a regeneration, not by editing the score.
