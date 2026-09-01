---
name: thaikit-colliders
description: >-
  Derives the physics compound for a thaikit prop -- the outer shell, as a
  handful of boxes and cylinders a player can walk up to and stand on. Runs after
  the geometry is built: it evaluates the shipped module under Node, voxelises
  the triangles, cuts the prop into horizontal layers at the heights where its
  footprint changes, covers each layer with rectangles, and measures the result
  by casting rays down onto both the real geometry and the compound. Writes
  packages/props/src/models/<id>/colliders.json and records the numbers on the asset. Use when the
  user wants colliders, collision, physics shapes, a collision mesh, hitboxes or
  a walkable shell for a prop -- including "make this standable", "the player
  falls through X", "re-derive the colliders", or setting a prop up to be kicked
  around.
---

# thaikit — colliders (the walkable shell)

Built module → derive → look at it → correct by hand → record.

**This skill does not touch the model.** It reads the geometry that already
shipped and stands a cheap proxy beside it. If the prop's shape is wrong, that is
`thaikit-model`'s problem, and deriving a collider over it will not hide it.

## What a compound is, and what it replaced

A prop used to declare one word — `collider: 'box'` — and that was the whole
contract. It never became geometry anything could use: the shipped registry
published only the word, the render harness threw away the shapes and kept the
NAMES, and the promotion gate could therefore only assert that the count was not
zero. All 100 props shipped exactly one collider, and one primitive cannot
express a ledge: a box to the 7-Eleven's parapet leaves the canopy at 3 m with
nothing to stand on, and a box to the canopy leaves the parapet gone.

What ships now is `packages/props/src/models/<id>/colliders.json`: boxes and cylinders in
**root-local metres**, `scale` as HALF-EXTENTS, shipped inside the vibe3d pack as a `files[]` entry
so a consumer gets them in the same fetch as the module.

| | |
|---|---|
| `packages/props/src/models/<id>/colliders.json` | the compound, and the measurements taken off it |
| `model.colliders` on the asset | file, part count, `handTuned`, coverage, max ledge error |
| `physics` on the asset | whether it is a dynamic body, and what it weighs |

## Step 0 — gates

**There must be a model.** Read the entry:

```bash
node --input-type=module -e "
import {readRegistry} from '@thaikit/registry-core';
const a=(await readRegistry()).assets.find(x=>x.id==='<id>');
console.log(a.status.model, a.model.file, a.budgetClass, JSON.stringify(a.physics), JSON.stringify(a.model.colliders));
"
```

If `status.model` is not `done`, stop and run **`thaikit-model`**. There is
nothing to derive a shell from. **Never rebuild the model here to make a collider
come out better** — that inverts the pipeline, and a prop reshaped to suit its
proxy is a prop shaped by the wrong constraint.

**Decide `physics` FIRST, before deriving.** It halves the part ceiling, so
deriving and then flipping the checkbox leaves a compound built to the wrong
budget. Default false, which is right for most of the kit: a building, a road
tile and a bolted-down sign are static, and making one dynamic costs a solver
island every frame for something that must not move. Set it with
`edit-assets.mjs`, and note that it stales NOTHING — the geometry does not change
because a crate got heavier.

## Step 1 — derive

```bash
node scripts/derive-colliders.mjs --id <id>          # one prop
node scripts/derive-colliders.mjs --all              # the kit, ranked worst-first
```

Useful flags: `--max-parts N` (default from the budget class: small 2, medium 4,
large and hero 8, halved for a dynamic body), `--cylinders off`, `--dry-run`,
`--measure` (see step 3), `--force` (replaces a hand-tuned file), `--from scratch`.

**Quote the numbers, not the part count.** The line it prints is the evidence:

```
7-eleven-store-building: 6/8 part(s) [box] · 1884 tris, voxel 0.0647 m, 18 filtered
  · coverage 0.9968, p95 0.0841 m, max 3.7312 m · ledges 5/6 · 161 ms
```

| number | what it means | worth acting on |
|---|---|---|
| `coverage` | fraction of the footprint with a collider over it | gate is **0.95**; below **0.99** on a boxy prop is a hole |
| `p95` / `max` | height disagreement underfoot, in metres | p95 over **0.08 m** is a floor you can feel |
| `ledges k/n` | walkable surfaces that survived | any loss, and the log names the height |
| `volumeRatio` | compound over column-filled truth | over **1.35** is a proxy fatter than the prop |
| `footprintOvershoot` | compound outside the real footprint | this is stopping short of a wall |

A `max` far above `p95` is usually two or three cells at an edge and not worth
chasing — on the 7-Eleven, `max` 3.73 m is **two samples of 14,218** where the
body box overhangs a 3 cm plinth lip. Say which it is; do not report `max` alone.

## Step 2 — look at it

The numbers cannot see everything. Open the prop at `http://localhost:3733`,
preview tab, **colliders** on, and orbit it. Three things only your eyes catch:

- a **doorway or archway filled solid** that should be walk-through,
- a **canopy with no box under its top face**, so it cannot be stood on,
- a part **floating clear** of the geometry it stands for.

Buildings are exterior shells by rule, so a sealed shopfront is CORRECT, not a
defect — a player who walks in is standing in an empty box looking at the backs
of the walls. An arch you are meant to pass under is not.

## Step 3 — correct by hand

In the viewer: click a part to select it, drag the gizmo, `W`/`E`/`R` for
translate / rotate / scale, `Delete` to remove, **+ collider** bottom-right to add
one. Then **save colliders**.

Saving marks the file `handTuned`, and the derivation then REFUSES to overwrite
it without `--force`. That is deliberate: a hand-placed box is a measurement
somebody took with their eyes, and the script cannot see what they saw. Saving
also CLEARS the self-check, because a moved box has not been measured — do not
quote the old coverage next to a shape nobody re-checked.

Then **measure what you placed**:

```bash
node scripts/derive-colliders.mjs --id <id> --measure
```

This casts the same rays at the parts already in the file and records the
numbers, changing no shape and leaving `handTuned` set. Use it rather than
re-deriving: hand-tuning is a legitimate final state, and `--force` would undo
the very work the gate is asking you to justify.

Say what you moved and why. "Widened the roof deck box to the parapet's inner
face so the walkable area matches the deck" is a reason; "tidied the colliders"
is not.

## Step 4 — record

```bash
node scripts/promote-model.mjs --id <id>     # gates the compound, if re-promoting
```

The derivation reads the prop's bundle from the installed `@thai-kit` pack
(`packs/@thai-kit/<tag>/<id>/model.bundle.js`), which promote refreshes; a prop
that was never promoted has no pack bundle, so use `--from scratch`. The
catalogue reads the compound live off the tree, so nothing needs re-exporting
for the level editor to see it.

Promotion refuses a prop with no compound, one over its part ceiling, one with no
self-check, coverage under **0.95**, or a max ledge error over the 0.30 m step
height.

The coverage gate is 0.95 rather than 0.99 for a measured reason: 27 of 99 props
sit under 0.99 and they are the ROUNDED ones — the soi dog at 0.745, the fighting
cock at 0.850, four vehicles in the 0.92s. An axis-aligned box cover of a curved
silhouette leaves a thin RIM uncovered at the outline, which is a player stopping
a few centimetres early, not a player falling through. On a rounded prop the fix
is a `sphere` or `capsule` part placed by hand; anywhere else a low number is a
real hole and should be treated as one. `--allow-no-colliders` exists for a prop nothing should ever collide with
— a skyline imposter is the real case, and it is a decision to state, not a gate
to step over.

## Step 5 — report

Say, in this order:

1. **parts and shapes** — "6 parts: one body box, four parapet walls, one condenser".
2. **coverage, p95 and max**, with `max` explained if it is an edge artefact.
3. **ledges preserved**, and the height of any that were lost.
4. **what you moved by hand**, part by part, or that you moved nothing.
5. For a dynamic body: the **declared mass** against the suggested one, and say
   plainly if the field is still null. The derivation suggests a mass from the
   compound's volume and **never writes it** — a number nobody decided still
   looks like a decision.

Never report "colliders added". That is the claim the old system made, and it was
true of a hundred props that could not be stood on.

## Do not

- Re-derive over a hand-tuned file without being asked. `--force` throws work away.
- Hand-write a number into `model.colliders`. It is written by the derivation and
  by the editor, and nothing else should touch it.
- Rebuild the model to improve a collider.
- Report a part count as if it were a measurement.
- Treat a sealed building front as a bug.

Look at the result: `http://localhost:3733`
