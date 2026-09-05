# Using thaikit props in Unreal Engine

thaikit props are Three.js factories, not files, so Unreal cannot load them as
they are. The asset editor's **export to Unreal** button turns the whole kit
into what Unreal *can* load: **one glTF binary per prop**, flattened to a single
mesh with a material slot per material, its physics compound as collision, and
a `manifest.json` describing every prop. This page is how to run the export and
how to get the result into Unreal Editor as placeable Static Meshes.

---

## 1. Run the export

Open the prop registry (`http://localhost:3733/`) and press **export to Unreal**
in the header. The dialog offers:

| Option | Default | What it does |
| --- | --- | --- |
| packs | all installed | Which packs to include. Foreign vibe3d packs export too, under their own folder. |
| textures ≤ | 2048 px | Procedural canvases larger than this are downscaled in the file. 1024 halves the export for a low-end target. |
| collision | on | The derived or hand-tuned compound ships as `UCX_` meshes Unreal turns into simple collision. |
| skyline imposters | on | The fifteen yaw-billboarded skyline quads. Off if you have your own skyline. |
| also write to `exports/unreal/` | on (writable instance only) | Unpacks the zip into the repo so an Unreal project on the same machine imports from disk. |
| filter + checkboxes | every prop | Type to narrow the list by name, category or tag, then tick the props you want (*all shown* / *none shown*). Anything short of the whole kit is **merged** into `exports/unreal/` rather than replacing it. |

A prop's own drawer has an **export to Unreal** button too: it opens the same dialog
preselected to that one prop, so after fixing a building you re-export it alone,
then right-click its `SM_TK_*` asset in Unreal and *Reimport*.

The export runs **in the browser**, for the same reason the level bake starts
there: the props' textures are canvases that exist only in a page. Every prop is
built once through the level editor's prototype cache, so the whole 154-prop
kit takes about 40 seconds and 190 MB at 2048 px. The log names each file with
its triangle count, material slots and collider count; a prop that fails to
build is listed and skipped, never half-written.

You get a **zip download** either way, and on a writable instance the same tree
under `exports/unreal/` (gitignored, replaced whole on every export):

```
exports/unreal/
├── README.md            import instructions, the same as below
├── manifest.json        every prop: ref, title, Thai name, category, tags, size, footprint,
│                        placement surface, physics, pivots/sockets, triangles, file
├── ThaiKit/             one .glb per prop
│   ├── SM_TK_OilDrum.glb
│   ├── SM_TK_TukTuk.glb
│   └── ...
└── _previews/ThaiKit/   a thumbnail per prop (NOT for import)
```

### What is in a file

Each `.glb` holds one mesh node named for the Static Mesh it becomes
(`SM_TK_<Prop>`), in metres with +Y up as glTF requires, pivot at the prop's
base centre. Everything the factory built -- a hundred child meshes,
`InstancedMesh` copies, per-instance tints -- is baked into world space and merged
into that one mesh, with **one primitive per material** (glTF's word for a
material slot). Materials are named `M_TK_<Prop>_<slot>`. Vertex colours are
normalised so glTF's always-on `COLOR_0` multiply gives the same tones three
did: white where the factory's material ignored the attribute, the instance tint
where a `setColorAt` carried it, the painted colour everywhere else.

Beside the mesh sit `UCX_SM_TK_<Prop>_01..NN`: the boxes and cylinders from
`colliders.json`, cylinders as 16-gon prisms. Unreal's importer recognises the
prefix and attaches them as simple collision without rendering them.

---

## 2. Import into Unreal Editor

Works on **Unreal 5.1 or later** with nothing to enable: glTF import is part of
the Interchange framework. (5.0 needs the *glTF Importer* plugin turned on.)

1. In the Content Browser, create a folder such as `Content/ThaiKit`.
2. Drag the **`.glb` files** from `ThaiKit/` onto it (or right-click → Import).
   Do **not** import `_previews/`, `manifest.json` or `README.md`; they are not
   assets.
3. In the Interchange import dialog, set once and tick *use the same options for
   every file*:

   | Setting | Value | Why |
   | --- | --- | --- |
   | Common Meshes → **Combine Static Meshes** | on | One Static Mesh per file. The export already merged each prop, so this is a safeguard. |
   | Common Meshes → **Import Collision According To Mesh Name** | on (default) | Turns the `UCX_` meshes into simple collision. |
   | Materials → **Import Materials** / **Create Material Instances** | on | One material instance per slot, built from Unreal's glTF material functions, vertex-colour multiply included. |
   | Common Meshes → Uniform Scale | 1.0 | glTF is metres, Unreal centimetres; the translator converts. A 0.85 m oil drum arrives 85 cm tall. |
   | Common Meshes → **Build Nanite** | **off** | ON by default since UE 5.5. A Nanite mesh renders every translucent slot with the DEFAULT material (`Invalid material ... used on Nanite static mesh` in the Output Log) and simplifies a door's 15 mm of relief into its wall at distance. These are 2 k-triangle meshes; Nanite buys nothing. |
   | Common Meshes → Generate Lightmap UVs | on | The export ships one UV set; Unreal's baked lighting wants a second. |

4. **Import All.** Each file becomes an `SM_TK_*` Static Mesh with its material
   instances beside it.
5. Open one. The material slots are on the right; *Show → Simple Collision*
   draws the UCX shapes in green. Under *Collision*, leave complexity at *Project
   Default* (simple for movement, complex for traces) or set *Use Simple Collision
   As Complex* if the compound should be the only collision.

### If something looks off

- **Collision missing** — the import dialog had *Import Collision According To
  Mesh Name* off, or the mesh was renamed on import so the `UCX_` prefix no
  longer matches. Re-import with the option on, or add collision in the Static
  Mesh editor (*Collision → Add Box Simplified Collision*). The manifest's
  `collisionParts` says how many shapes to expect. If the Output Log says
  `Primitive Mode[LINES] ... Geometry won't be imported` the export is from before
  2026-09-05, when the `UCX_` meshes were written with a wireframe material and
  three's exporter wrote them as LINES; re-export.
- **A flat, grey prop** — the material instance lost its vertex-colour multiply.
  Many props carry their tones in `COLOR_0` rather than a texture. Check the
  instance's parent is one of the `MF_glTF`/`M_glTF` parents Interchange creates.
- **A window or sign face that renders as the grey default checker** — the mesh
  was imported with Nanite on and that slot is translucent. Glass at or above
  0.8 opacity now exports OPAQUE (the kit authors it as a near-opaque surface,
  and buildings have no interiors), so only genuinely see-through slots stay
  `BLEND` -- `manifest.json` lists them per prop as `translucentSlots`. Re-import
  those props with *Build Nanite* off.
- **`degenerate tangent bases` / `nearly zero bi-normals` warnings** — a face
  with no UV area. The export now gives such faces a planar projection in
  metres, so a current export should log none; an older one is harmless under
  Lumen but starves those faces of lightmap space under baked lighting.
- **Signs glow but light nothing** — emissive is colour, not a light. Add a
  Point or Spot Light at the fascia, or turn on Lumen's emissive contribution.

---

## 3. Use them as props

- Drag any `SM_TK_*` into the level. Press **End** with the actor selected to
  drop it to the floor; every pivot is the base centre, so it lands standing.
- **Road and ground tiles** are 8 × 8 m (soi alley tiles 4 × 8) and butt-join on
  a metre grid: 800 uu steps with grid snapping on. `manifest.json → size` has
  each footprint.
- **Lighting props** (`category: lighting`) are lamp posts, utility-pole lamps,
  battens, lanterns and wall packs. Add a Point/Spot Light where the lamp head
  is; the manifest's `bbox` gives the head height (a soi lamp's is about 7.5 m).
- **Vehicles, bins, furniture** with `physics.enabled: true` in the manifest are
  meant to be pushed around: set the actor's mobility to Movable and enable
  *Simulate Physics*; the UCX compound is the shape that simulates.
- **Skyline imposters** (`tags` includes `imposter`) are single unlit quads with
  an alpha texture, meant to stand 150–300 m out and face the camera. Either give
  them a Blueprint that yaws toward the camera each tick, or leave them out.
- **Re-export**: run the export again over the same folder, then right-click the
  Content folder → **Reimport**. Unreal remembers each asset's source path.

---

## 4. Let Claude build the level

With a live Unreal MCP connection (the `unreal-mcp` server running inside your
editor, reached through the `unreal-engine-skills-for-claude-code` plugin), the
project skill
**`thaikit-unreal-level`** does the layout: it reads `manifest.json`, imports the
folder, and lays out a Thai night street from the kit -- roads, shophouses,
utility poles with cables, sodium and fluorescent lighting, wet-road material,
rain and fog -- prioritising these props over engine content. Ask for it by
name: *"build a Thai soi at night in Unreal from the thaikit export"*.

## 5. And back again

A level laid out in Unreal from these props can come BACK as a baked thaikit
level for Operation X: `docs/unreal-level-export.md`. Keep the `SM_TK_*` names
when you place them, because that is how the round trip finds each prop's
physics and collider compound.
