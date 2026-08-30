# thaikit

An MIT-licensed library of game-ready **Three.js props** — Thai street and urban
themed — plus the Claude Code skills that generate them.

Built for a browser FPS / level builder running on **low-end PCs**. A prop is not
a GLB: it is a **procedural Three.js factory**, a small JavaScript module that
builds a `THREE.Group` in code. That makes every part named, every moving part
pivoted, and every prop editable as source rather than as opaque geometry.

```js
import * as THREE from 'three';
const code = await fetch('assets/oil-drum/model.bundle.js').then((r) => r.text());
const mod = { exports: {} };
new Function('module', 'exports', 'require', code)(
  mod, mod.exports, (n) => { if (n === 'three') return THREE; throw new Error(n); });

const drum = mod.exports.createObjectModel({}, {});   // a THREE.Group
scene.add(drum);
drum.getObjectByName('lid-hinge').rotation.x = -Math.PI / 3;
```

The module is bundled with `three` left **external**, so you hand it your own
three instance. That is deliberate: a second copy of three would mean the
factory's `Mesh` is not your renderer's `Mesh`, and nothing would draw.

---

## Quickstart

```bash
git clone <your-fork> thaikit && cd thaikit
cp .env.example .env
# only if your uid is not 1000:
echo "THAIKIT_UID=$(id -u)" >> .env && echo "THAIKIT_GID=$(id -g)" >> .env

docker compose up
```

Open <http://localhost:3733> to browse, edit, and curate the registry.

For host-side development with hot reload, on the same port:

```bash
npm install
npm run dev
```

## How it fits together

```
                    registry.json  <-- single source of truth, committed, diffable
                     ^          ^
      web UI (Docker)|          |host-side Claude Code skills
      browse / edit  |          |generate
                     |          |
              both import @thaikit/registry-core
              (one zod schema, one lock, one atomic writer)
```

The web UI and the generation skills both write the same file. That is safe
because every writer goes through one module that takes a lock, **re-reads from
disk inside the lock**, validates, and writes atomically via a same-directory
temp file and `rename`. The UI never launches a generation job — generation needs
tool calls that only exist inside a Claude Code session.

## The skills

| Skill | Does | Costs |
|---|---|---|
| `thaikit-asset-list` | Theme → deduplicated asset entries with prompts and real-world sizes | free |
| `thaikit-preview-image` | Prompt → one validated reference plate per prop | ~$0.003 each |
| `thaikit-model` | Plate → Meshy v7 reference mesh → sculpted Three.js factory | Meshy + tokens |

**`thaikit-model` is thin on purpose.** It checks the preconditions, composes a
prompt and hands the work to the [`img2threejs`](https://github.com/img2threejs/img2threejs)
skill, which owns the whole reconstruction: a locked pass order, ~35
deterministic gates, and a bounded self-correction loop with its own on-disk
state. thaikit has no rubric and no judge of its own.

img2threejs generates a **Meshy v7** mesh through fal and uses it as a
structural baseline — rendered through the same browser route as the candidate
and measured band by band. That mesh is evidence. It never ships, and its
topology and materials never enter the factory.

Set `subject` on each asset — `prop`, `animal` or `character`. It selects the
reconstruction profile, so a person left as `prop` is built with every anatomy
gate silently skipped.

Ask Claude, in this repo:

> Use the thaikit asset list skill to add props you'd find on a Thai street.

Then browse the result at :3733, then generate.

fal.ai is reached through the **`fal-ai` MCP server** for image generation, and
through img2threejs's own `--provider fal` for the reference mesh, which needs
`FAL_KEY` in `.env`. Generation runs interactively rather than headless.

## Asset lifecycle

```
pending -> reference image -> validated -> Meshy v7 reference mesh
        -> sculpt spec -> factory, pass by pass, gated at each one
        -> bundled -> rendered -> promoted to assets/<id>/ -> shipped
```

Each build leaves four files behind:

| File | What it is |
|---|---|
| `model.bundle.js` | The factory, bundled for the browser |
| `src/createObjectModel.ts` | The TypeScript it was generated from |
| `object-sculpt-spec.json` | The spec behind that — **edit this to refine** |
| `thumb.webp` | Grid thumbnail, rendered from the module |

The spec matters most. Generated code must never be the only copy of a
reconstruction decision, so a refinement edits the spec and regenerates.

## Budgets

| Class | Longest dimension | Triangles |
|---|---|---|
| `small` | 0 – 0.5 m | 800 |
| `medium` | 0.5 – 2 m | 2,000 |
| `large` | 2 – 5 m | 4,000 |
| `hero` | 5 m + | 8,000 |

`targetTriangles` does two jobs: it is what Meshy is asked for when the reference
mesh is generated, and it is written into the spec's
`performanceBudget.targetTriangles`, which picks the tessellation tier for every
primitive the factory builds.

Texture budgets are gone with the GLB pipeline — a procedural factory ships no
texture files. Whatever canvas textures it generates are measured after the fact
by `render-model.mjs` rather than budgeted up front.

## Quality gate

Owned entirely by img2threejs. Its gates run **deterministically before** any AI
vision, and a `continue` needs a render, a comparison sheet, a global score over
threshold and every critical feature over its own. Highlights:

- A non-planar form must hold from **≥2 angles**, plus a turntable, a
  self-intersection check and an attachment-anchor check at every review.
- Fidelity is measured **inside** the silhouette — a model with its face deleted
  scored the same silhouette IoU as the finished one.
- Every `-l`/`-r` pair is a **mirror**, not a rotation, and that is checked at
  spec time.
- Corrections are bounded: 3 per pass, 10 total here. Hitting either is a hard
  stop, and so is oscillation or a plateau.

## Scripts

Every script prints **one JSON line on stdout** and human logs on stderr.

```bash
node scripts/doctor.mjs                  # preflight
node scripts/new-assets.mjs --file x.json --dry-run
node scripts/prepare-image.mjs --in raw.png --out assets/<id>/preview.jpg
node scripts/set-preview-image.mjs --id <id> --file assets/<id>/preview.jpg
node scripts/build-model-module.mjs --id <id>   # TypeScript -> browser bundle
node scripts/render-model.mjs      --id <id>   # turntable + hero, and measure it
node scripts/promote-model.mjs     --id <id>   # scratch/ -> assets/, + thumbnail
node scripts/migrate-registry.mjs --dry-run
node scripts/build-registry.mjs --report
npm test                                 # registry concurrency
```

## Notes and caveats

- **Keep the repo on the Linux filesystem** under WSL2. A clone under `/mnt/c`
  is 10–50× slower on bind-mount IO and file watching degrades further.
- `THAIKIT_WATCH_POLL=1` is set in compose and is **required**: host writes do
  not deliver inotify events into a container across a bind mount, so without
  polling the UI never notices the skills' work.
- The API binds to `127.0.0.1` deliberately. It has no auth and can delete files.
- Modules are committed directly and are a few KB each — code diffs, so the
  repo stays small and a regeneration is reviewable rather than an opaque binary
  churn. Reference meshes stay in gitignored `scratch/`.
- **Blender is no longer used.** The wiring (`npm run blender`, the MCP entry)
  is kept for ad-hoc work, so a closed Blender is expected and harmless.

## Licence

MIT — code and assets. Every model is fully synthetic and procedurally
authored; no scanned or scraped third-party geometry.

## Level editor

`http://localhost:3733/level` builds levels from these props -- and from any
[vibe3d](https://github.com/vibe-stack/vibe3d)-compatible pack you add by npm name
(`@scifi-kit/registry`, `@medieval-kit/registry`, ...). A level is a GLB
(`levels/<id>/level.glb`); **Export** bakes a second, self-contained GLB with geometry merged
per 24 m cell and material, three LOD tiers per cell, every texture as KTX2, a Cycles lightmap
(Blender, headless), and the colliders, lights and spawns in the scene extras.

```
npm run dev                                   # editor at /level
npm run packs:install -- --source @scifi-kit/registry
npm run level:bake -- --level <id> [--baker none]
npm run level:verify -- --level <id> --strict
npm run level:smoke -- --level <id>           # renders it through the runtime, headlessly
npm run compress:maps -- --all                # KTX2 siblings for every shipped webp
```

Load a baked level in a game with `packages/level-runtime`:

```js
import { loadLevel, RapierPhysics } from '@thai-kit/level-runtime';
const level = await loadLevel('/levels/soi/build/level.glb', { scene, renderer, camera, physics });
// per frame: level.update(dt, camera.position)   // physics, LOD tiers, moon shadow box
```

`loadLevelHeadless()` (`@thai-kit/level-runtime/node`) builds the same colliders on a server.
Requirements: [KTX-Software](https://github.com/KhronosGroup/KTX-Software/releases) for KTX2
(extract the .deb into `~/.local/opt/ktx`, no root needed) and Blender for the lightmap;
`npm run doctor` checks both.
