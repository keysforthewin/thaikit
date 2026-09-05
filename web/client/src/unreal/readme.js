/**
 * The README that ships INSIDE the export zip, beside manifest.json. Written
 * for whoever opens the folder on the Unreal side, so it repeats what
 * docs/unreal-export.md says in the order they will need it. Keep the two in
 * step.
 */
export function unrealReadme({ generatedAt, packs, items, options }) {
  const folders = [...new Set(items.map((i) => i.folder))];
  return `# thaikit props for Unreal Engine

Generated ${generatedAt} from the thaikit asset editor.
${items.length} props from ${packs.length} pack(s): ${packs.join(', ')}.
Textures were baked at up to ${options.maxTextureSize} px; collision ${options.collision ? 'is included as UCX_ meshes' : 'was NOT exported'}.

## What is in here

- \`${folders.join('/`, `')}/\` -- one \`.glb\` per prop, named \`SM_<Pack>_<Prop>.glb\`. Each file
  is ONE mesh with one material slot per material, in metres with +Y up (glTF), the
  pivot at the prop's base centre. Collision shapes ride along as \`UCX_<mesh>_NN\`
  meshes, which Unreal turns into simple collision at import.
- \`manifest.json\` -- every prop's ref, title, Thai name, category, tags, real size,
  footprint, placement surface, physics, pivots and sockets, triangle count and file.
  This is the file to read when choosing what to place where.
- \`_previews/\` -- a thumbnail per prop. Not for import; keep it out of Content.

## Getting it into Unreal (5.1 or later)

1. Unzip. Keep the folder structure.
2. In the Content Browser, make a folder (e.g. \`Content/ThaiKit\`) and drag the
   \`${folders[0]}\` folder's \`.glb\` files onto it. Unreal's Interchange framework
   imports glTF out of the box; nothing to enable. (UE 5.0 needs the "glTF Importer"
   plugin.) Do not drag \`_previews\`, \`manifest.json\` or this file into Content.
3. In the import dialog:
   - Common Meshes -> **Combine Static Meshes: ON**. Each file becomes one Static Mesh.
     (The export already merged every prop into one mesh, so this is belt and braces.)
   - Common Meshes -> **Import Collision According To Mesh Name: ON** (default).
     The \`UCX_\` meshes become the mesh's simple collision and are not rendered.
   - Materials -> **Import Materials: ON**, **Create Material Instances**. Unreal builds
     one material instance per slot from its glTF material functions, vertex colour
     included.
   - Leave the scale alone: glTF is metres, Unreal is centimetres, the importer
     converts (a 0.85 m oil drum arrives 85 cm tall).
   - Nanite: off for a low-end target; on if you are shipping to a Nanite platform.
   Tick "Use the same options for every file" and Import All.
4. Open any \`SM_TK_*\` asset: material slots on the right, collision under
   Show -> Simple Collision. Set **Collision Complexity** to *Use Simple Collision As
   Complex* on hero props if you want the UCX shapes to be the ONLY collision.
5. Drag props from the Content Browser into the level. \`End\` snaps a selected actor
   to the floor; every thaikit pivot is at the base centre so it lands standing.
6. Re-exporting: overwrite the folder, then right-click the folder in Content and
   **Reimport**. Unreal remembers the source path per asset.

## Things worth knowing

- **Emissive** materials (shop signs, lamp heads, lanterns) arrive as emissive
  colour. They glow but do not LIGHT anything until you add a Point/Spot Light or
  enable Lumen emissive lighting. \`manifest.json\` names every \`lighting\` prop.
- **Skyline imposters** (tag \`imposter\`) are single unlit quads with an alpha
  texture, meant to stand 150-300 m out and face the camera. Import them like the
  rest, then either place them as billboards (a Blueprint that yaws to the camera)
  or skip them and use your own skyline.
- **Glass** exports as a translucent material. If it sorts badly, switch the
  instance's blend mode to Masked or set Opacity to 1 and lower Roughness.
- **Road and ground tiles** are 8 x 8 m (soi tiles 4 x 8) and butt-join on a metre
  grid; \`manifest.json\` carries each footprint in \`size\`.
- Vertex colours are real: many props carry their tones in COLOR_0 rather than in
  a texture, so a material instance that drops the vertex-colour multiply will
  render flat.
`;
}
