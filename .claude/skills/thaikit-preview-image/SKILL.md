---
name: thaikit-preview-image
description: >-
  Creates the single reference image for thaikit props. For each registry entry
  whose image stage is pending it composes the prompt from the style profile,
  generates one photoreal plate with a cheap fast fal.ai model (flux/schnell,
  about a third of a cent), validates and reframes it, uploads it, and records it
  on the asset. That image is what Meshy reconstructs from and what the browse
  grid shows. Use when the user wants to generate, make, redo, refresh or fix the
  preview, reference or plate image for one asset, a category, or every asset
  still missing one.
---

# thaikit — preview images

One prompt → one image → one prop. This is the whole image stage.

There is deliberately **one** image per asset, not a turnaround sheet. The
four-view sheet bought a little reconstruction accuracy and cost a splitter, a
rejection loop and a 50× more expensive image model; a single high three-quarter
plate is what `meshy/v7/image-to-3d` wants anyway.

## How fal is reached

**Generation** goes through the **`fal-ai` MCP server** — *you* make the image
call as a tool call. There is deliberately no scripted generation path.

**Uploads do not.** The MCP server is reached over HTTP, so `upload_file` rejects
`file_path` outright and its only fallback is a base64 blob through your context,
which the tool layer truncates around 30 KB. Never hand-encode an image to base64
to get it to fal. Use `npm run upload -- <file>` (needs `FAL_KEY` in `.env`).

## Cost

`fal-ai/flux/schnell` bills **$0.003 per megapixel**, so one 1024² plate is about
a third of a cent and lands in ~1.5 s. A hundred props is thirty cents. Cost is
not the constraint here; do not ask permission for a handful, and do say the
total when running the whole kit.

Do **not** reach for `nano-banana-pro` ($0.15, 50×) unless an asset has failed
this path three times and the user has agreed to spend it.

## Steps

### 1. Pick the work

```bash
node -e "import('@thaikit/registry-core').then(async m=>{const r=await m.readRegistry();console.log(JSON.stringify(r.assets.filter(a=>a.status.image==='pending').map(a=>a.id)))})"
```

Regenerating an asset that already has an image is fine when asked — it just
stales the mesh, see step 5.

### 2. Compose the prompt

Never hand-write it. The scaffold — camera, backdrop, lighting, the Form
paragraph that is the cheapest poly-count control in the repo — lives in
`prompts/style-profiles.json`, and the asset supplies only the object description.

```bash
mkdir -p scratch/<id>/preview
node -e "
import('./scripts/lib/config.mjs').then(async m=>{
  const r=await (await import('@thaikit/registry-core')).readRegistry(); const a=r.assets.find(x=>x.id===process.argv[1]);
  require('fs').writeFileSync('scratch/'+a.id+'/preview/prompt.txt', await m.composeImagePrompt(a));
})" <id>
```

### 3. Generate

`mcp__fal-ai__run_model` on **`fal-ai/flux/schnell`** with that prompt and:

```jsonc
{
  "image_size": "square_hd",      // 1024x1024; the plate is always square
  "num_inference_steps": 4,       // schnell is a 4-step model, more is wasted
  "output_format": "png",         // lossless in, JPEG out after prepare-image
  "num_images": 1,
  "seed": <record it>             // the one thing that makes a re-run reproducible
}
```

`run_model` is right here — this is an image, it returns in seconds. Save the
result:

```bash
curl -sfo scratch/<id>/preview/raw.png "<result.images[0].url>"
```

### 4. Validate and reframe

```bash
node scripts/prepare-image.mjs --in scratch/<id>/preview/raw.png --out packages/props/src/models/<id>/preview.jpg
```

This measures the backdrop, refuses a plate that would melt a reconstruction, and
writes a 1024² JPEG with the object recentred on its own backdrop. It rejects:

- **more than one object in frame** — Meshy fuses them into one lump
- **the object cropped or lost** — coverage outside 15–75% of the frame
- **a scene behind the object** — the border is not a plain backdrop
- **a contact shadow** — it bakes into the albedo as a permanent dark smear

A rejection is information, not a failure: it names what the model did. Rerun
step 3 with a **new seed**. After two rejections the prompt is the problem, not
the seed — the object description is asking for something the model keeps drawing
as a scene, and the fix is a simpler `prompts.image` via `thaikit-asset-list`.

The backdrop's *colour* is not a rejection. The profile asks for 50% grey and a
cheap model often returns a white product matte instead; the script measures
whatever arrived and pads with it, so both are fine.

### 5. Upload and record

`npm run` prints its own banner on stdout, so pass `--silent` when you want to
read the JSON line back:

```bash
npm run --silent upload -- packages/props/src/models/<id>/preview.jpg
node scripts/set-preview-image.mjs --id <id> --file packages/props/src/models/<id>/preview.jpg \
  --model fal-ai/flux/schnell --seed <seed> \
  --prompt-file scratch/<id>/preview/prompt.txt \
  --uploaded-url "<url from npm run upload>"
```

Uploading here rather than at mesh time means `thaikit-model` can hand
`asset.image.uploadedUrl` straight to the reference-mesh call without ever
touching the bytes again.

The registry write goes through `set-preview-image.mjs` because
`@thaikit/registry-core` holds the lock the web UI also respects. **Never write
`packages/props/src/models/<id>/thaikit.json` directly** — the write is silently lost, or it corrupts a
concurrent one.

**Replacing an existing image stales the model.** Every stage downstream reads
this plate -- the reference mesh is generated from it and the sculpt is reviewed
against it -- so a new plate invalidates the build. The script warns and leaves
it alone. Pass `--requeue` when the user wants the prop rebuilt from the new
plate; leave it off when they only wanted a nicer picture, and say plainly that
the shipped model still reflects the old one.

### 6. Hand off

The asset is now `image: done` with `model: pending`, which is what
`thaikit-model` waits for. Say what you made and what it cost, and point there.

If the prop is a person, an animal or a creature rather than an object, check
`asset.subject` before handing off -- it selects the reconstruction profile, and
a character built as a `prop` skips every anatomy gate without saying so.

## Do not

- Do not hand-write the scaffold into the prompt. Edit `prompts.image` on the
  asset, or `prompts/style-profiles.json` for the whole kit.
- Do not skip `prepare-image.mjs` because the picture "looks fine". A contact
  shadow you can barely see is a dark smear baked into the albedo forever.
- Do not send WebP to Meshy, and so do not write WebP here. `.jpg` and `.png`
  are the only outputs `prepare-image.mjs` will write.
- Do not base64 an image to get it to fal. `npm run upload` exists.
- Do not reach for an expensive image model to rescue a prop that keeps failing.
  A prop that will not photograph as one simple object is a prop whose
  description needs simplifying — that is `thaikit-asset-list`'s job.

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
