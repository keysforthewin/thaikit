/**
 * Post-generation patch for img2threejs factories entering thaikit.
 *
 * Two things the generator cannot know about this kit:
 *
 * 1. THE BUNDLE MAY IMPORT `three` AND NOTHING ELSE. The generator emits optional
 *    preview helpers (environment, camera framing, composer, orbit controls) that pull in
 *    three/examples/jsm. The host page injects its OWN three instance, so a second copy
 *    means the factory's Mesh is not the renderer's Mesh and nothing draws.
 *
 * 2. ROAD MARKINGS ARE PRINTED GRAPHICS. They have no thickness, so they belong in the
 *    asphalt's albedo, not on a second surface hovering over it -- a coplanar co-facing
 *    quad over the carriageway is exactly the z-fight this kit has already paid for once.
 *    CLAUDE.md reserves the after-construction canvas route for printed graphics, and it
 *    is unaffected by the material's `textureless` declaration (which exists to stop
 *    createSculptMaterial synthesising five per-pixel canvases, a different thing
 *    entirely). This canvas is a handful of fillRect calls: microseconds, not seconds.
 *
 *   node scripts/tilekit/postgen.mjs --file <ts> --markings <json>
 *
 * `--markings` is a JSON file: {materialId, width, depth, base, bands:[...], dashes:[...]}
 * in METRES in the carriageway's own local frame. Omit it for a tile with no paint.
 */
import { readFileSync, writeFileSync } from 'node:fs';

const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] ? argv[i + 1] : d; };
const file = arg('file');
if (!file) { console.error('usage: postgen.mjs --file <ts> [--markings <json>]'); process.exit(2); }

let src = readFileSync(file, 'utf8');

// --- 1. imports -------------------------------------------------------------------
const lines = src.split('\n');
if (lines[0] !== "import * as THREE from 'three';") {
  console.error(`expected bare three import on line 1, got: ${lines[0]}`); process.exit(1);
}
const kept = [lines[0], ...lines.slice(1).filter((l) => !l.startsWith('import '))];
src = kept.join('\n');
const previewCut = src.indexOf('// PBR materials (clearcoat/iridescence/transmission/anisotropy) need an environment');
if (previewCut > 0) {
  src = src.slice(0, previewCut) +
    '// Preview-only exports (environment, camera framing, presentation composer, orbit\n' +
    '// controls) are deliberately NOT shipped: they imported three/examples/jsm, and this\n' +
    '// bundle must import \'three\' as a bare specifier and nothing else. The host page\n' +
    '// injects its own three instance, and a second copy makes this factory\'s Mesh a\n' +
    '// different class from the renderer\'s, so nothing draws.\n';
}
const stray = src.split('\n').filter((l) => l.startsWith('import ') && l !== lines[0]);
if (stray.length) { console.error(`stray imports remain:\n${stray.join('\n')}`); process.exit(1); }

// --- 2. marking canvas ------------------------------------------------------------
const markingsPath = arg('markings');
if (markingsPath) {
  const parsed = JSON.parse(readFileSync(markingsPath, 'utf8'));
  // One canvas per material that carries printed graphics. The road markings were the first,
  // but the drain inlet's slats are the same problem: detail that is pure albedo, on a prop
  // with no spare geometry or material budget to spend on it.
  const canvases = Array.isArray(parsed.canvases) ? parsed.canvases : [parsed];
  const m = canvases[0];
  const anchor = '  const materialMap: Record<string, THREE.Material> = {};';
  if (!src.includes(anchor)) { console.error('materialMap anchor not found'); process.exit(1); }
  const block = `
  // ---- printed graphics: road markings in the albedo, not on a second surface --------
  // A painted marking has no thickness. Drawing it into the carriageway's base colour is
  // the physically correct representation AND it is why this tile needs no proud quad
  // over the asphalt -- the one thing guaranteed to z-fight as the camera moves. The
  // canvas is drawn with fillRect only, so it costs microseconds; it is not the per-pixel
  // synthesis that \`textureless\` exists to prevent.
  function buildMarkingTexture(specIn: any): THREE.Texture | null {
    if (typeof document === 'undefined') return null;   // headless without a DOM: skip
    const spec = specIn;
    // Resolution per canvas, not one global size: a 0.6 m drain grate at 512 square costs the
    // same VRAM as an 8 m road surface for detail nobody can resolve. Default 512, opt down.
    //
    // The canvas must match the SURFACE'S ASPECT, not be square. A square canvas stretched
    // across an 8.0 x 0.92 m fascia scales x and y by 8.7:1, which smears a wordmark into an
    // unreadable streak while leaving the plain colour bands looking fine -- so the bug only
    // shows on the one element that carries the identity.
    const PX = spec.px ?? 512;
    const PY = spec.pxH ?? Math.max(8, Math.round(PX * (spec.depth / spec.width)));
    const canvas = document.createElement('canvas');
    canvas.width = PX; canvas.height = PY;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.fillStyle = spec.base;
    ctx.fillRect(0, 0, PX, PY);
    // metres -> pixels. The SECOND axis scales by PY, not PX. Scaling both by PX drew
    // everything 8.7x too tall on a 2048x236 fascia, so only a sliver of the intended layout
    // reached the surface -- the brand band vanished while the plain colours still looked
    // plausible, which is why it read as a mapping problem rather than a scaling one.
    //
    // Canvas y grows DOWNWARD while three's CanvasTexture already flips for UV, so a band whose
    // second axis is HEIGHT needs flipY to come out the right way up: on a fascia the difference
    // is the brand's top band ending up along its bottom edge.
    const ux = (x: number) => ((x + spec.width / 2) / spec.width) * PX;
    const vz = spec.flipY
      ? (z: number) => (1 - (z + spec.depth / 2) / spec.depth) * PY
      : (z: number) => ((z + spec.depth / 2) / spec.depth) * PY;
    for (const b of spec.bands ?? []) {
      ctx.fillStyle = b.color;
      ctx.fillRect(ux(b.x0), Math.min(vz(b.z0), vz(b.z1)), ux(b.x1) - ux(b.x0), Math.abs(vz(b.z1) - vz(b.z0)));
    }
    // Polylines: a curved edge line is a STROKE, not a run of little squares. Approximating an
    // arc with axis-aligned rects gave a dotted line that reads as a lane of cat's eyes rather
    // than as painted edge marking.
    for (const pl of spec.polylines ?? []) {
      if (!pl.points || pl.points.length < 2) continue;
      ctx.strokeStyle = pl.color;
      ctx.lineWidth = Math.max(1, (pl.width / spec.width) * PX);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      if (pl.dash) ctx.setLineDash(pl.dash.map((v) => (v / spec.depth) * PX));
      else ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(ux(pl.points[0][0]), vz(pl.points[0][1]));
      for (const [px, pz] of pl.points.slice(1)) ctx.lineTo(ux(px), vz(pz));
      ctx.stroke();
      ctx.setLineDash([]);
    }
    for (const d of spec.dashes ?? []) {
      ctx.fillStyle = d.color;
      ctx.fillRect(ux(d.x0), Math.min(vz(d.z0), vz(d.z1)), ux(d.x1) - ux(d.x0), Math.abs(vz(d.z1) - vz(d.z0)));
    }
    // Wordmarks. A brand fascia is PRINTED GRAPHICS -- the case CLAUDE.md reserves the
    // after-construction canvas for. Drawn rather than modelled: lettering as geometry would
    // cost a draw call and several geometries on the axis this class is tightest on, and paint
    // has no thickness to model anyway.
    for (const t of spec.texts ?? []) {
      const px = Math.max(6, (t.size / spec.depth) * PY);
      ctx.font = \`\${t.weight ?? 700} \${px}px \${t.font ?? 'Helvetica, Arial, sans-serif'}\`;
      ctx.fillStyle = t.color;
      ctx.textAlign = t.align ?? 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(t.text, ux(t.x), vz(t.z));
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    if (spec.uvMode === 'metres') {
      // ExtrudeGeometry's WorldUVGenerator emits CAP uvs as the shape's own (x, y) -- that is,
      // in METRES, spanning -4..4 on an 8 m tile -- not the 0..1 a BoxGeometry gives. Left
      // alone the canvas tiles eight times across the road and the lane lines come out as a
      // fine stripe pattern. Remap: u * (1/width) + 0.5 lands metres back on 0..1, which is
      // exactly the mapping the canvas was drawn with.
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.repeat.set(1 / spec.width, 1 / spec.depth);
      tex.offset.set(0.5, 0.5);
    }
    tex.needsUpdate = true;
    return tex;
  }
`;
  src = src.replace(anchor, block + anchor);

  // assign after the material exists, so createSculptMaterial's own construction is untouched
  const assign = '\n' + canvases.map((c) => `  {
    const tex = buildMarkingTexture(${JSON.stringify(c)});
    const target = materialMap[${JSON.stringify(c.materialId)}] as THREE.MeshStandardMaterial | undefined;
    if (tex && target) {
      // color stays white: the surface colour lives in the map, and multiplying a tinted
      // base through it would darken the light marks along with the dark ground.
      target.map = tex;
      target.color = new THREE.Color(0xffffff);
      target.needsUpdate = true;
    }
  }`).join('\n') + '\n';
  const nodeIdx = src.indexOf('  const node_');
  if (nodeIdx < 0) { console.error('node anchor not found'); process.exit(1); }
  src = src.slice(0, nodeIdx) + assign + src.slice(nodeIdx);
}

// --- 3. sculptRuntime: Records in, arrays out ------------------------------------
// The generator builds `nodes`/`sockets`/`colliders`/`destructionGroups` as Records keyed
// by component id. thaikit's harness and drawer read them as ARRAYS of named things, and
// `nodes` as a COUNT -- a Record of Object3D is circular and fails to cross the puppeteer
// bridge, which surfaces as the whole stats object arriving undefined rather than as an
// error about sockets. Same adaptor the oil drum established.
{
  const anchor = '  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;';
  if (!src.includes(anchor)) { console.error('sculptRuntime anchor not found'); process.exit(1); }
  const pivotName = arg('pivot', 'root');
  const adaptor = anchor + `

  // ONE pivot: the root. This prop is static level geometry -- nothing turns on an axis and
  // nothing attaches to it -- so a named pivot per component, or any socket at all, would be
  // contract the kit has to keep for a mechanism that does not exist.
  {
    const rootPivot = new THREE.Object3D();
    rootPivot.name = ${JSON.stringify(pivotName)};
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: ${JSON.stringify(pivotName)} },
    };
    root.add(rootPivot);

    // Colliders are plain DATA, not Object3D, so they carry no .name and would stringify as
    // [object Object]. Give each the id of the component it owns, and DROP the empty ones:
    // the generator writes an entry per component whether or not one was declared, and a
    // nameless empty proxy reads as a physics shape that exists and does nothing.
    const colliderList = Object.entries(colliders as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // Destruction groups DERIVED from what was actually built, never assumed empty: promotion
    // checks built against declared as an equality in both directions, so a component that
    // somehow carried a fractureGroup must show up here and fail loudly rather than be
    // quietly dropped at this boundary.
    const grouped = new Map<string, THREE.Object3D[]>();
    for (const [name, members] of Object.entries(destructionGroups as Record<string, THREE.Object3D[]>)) {
      grouped.set(name, [...members]);
    }
    for (const node of Object.values(nodes)) {
      const group = (node as any)?.userData?.actionProfile?.destruction?.fractureGroup;
      if (typeof group !== 'string' || !group) continue;
      if (!grouped.has(group)) grouped.set(group, []);
      grouped.get(group)!.push(node);
    }

    root.userData.sculptRuntime = {
      nodes: Object.keys(nodes).length,
      meshes,
      pivots: [rootPivot],
      sockets: Object.values(sockets as Record<string, THREE.Object3D>),
      colliders: colliderList,
      destructionGroups: [...grouped.entries()].map(([name, members]) => ({ name, members })),
      byId: { nodes, meshes, sockets },
    };
  }`;
  src = src.replace(anchor, adaptor);
}

// --- 4. the export name thaikit loads --------------------------------------------
// The generator names the factory after the subject (createRoadStraightTileModel);
// thaikit's loader, render harness and coplanar check all call `createObjectModel`.
// An alias rather than a rename, so the generated name stays greppable back to the spec.
const factory = src.match(/export function (create\w+Model)\(/);
if (!factory) { console.error('no generated factory export found'); process.exit(1); }
if (factory[1] !== 'createObjectModel' && !src.includes('export function createObjectModel(')) {
  // A WRAPPER, not a re-export: the arities differ. The generator emits
  // `create<Name>Model(options = {})`, and thaikit's contract -- which render-model.mjs,
  // check-coplanar.mjs and the drawer all call -- is `createObjectModel(spec, options)`.
  // Re-exporting the name directly makes the caller's `spec` land in `options`, and
  // `createObjectModel(null, {})` then dies reading `options.wireframe` of null.
  src += `
// thaikit entry point. Adapts the generated one-argument factory to thaikit's
// (spec, options) contract; the reconstruction spec is already baked into the module,
// so the first argument is accepted and ignored rather than being mistaken for options.
export function createObjectModel(_spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  return ${factory[1]}(options ?? {});
}

// And the one-argument name the rest of the ecosystem uses -- vibe3d's contract,
// which is also the shape the generator emitted before the adaptor above wrapped
// it. Exported under the canonical name so a prop needs no wrapper to be
// installed as a vibe3d model.
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return ${factory[1]}(options ?? {});
}
`;
}

writeFileSync(file, src);
console.log(`patched ${file}${markingsPath ? ' (+ marking canvas)' : ''}`);
