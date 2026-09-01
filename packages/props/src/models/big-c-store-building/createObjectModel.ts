import * as THREE from 'three';

/**
 * Big C Store Building -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else is imported. The bundle is CommonJS
 * with a bare require("three") and the host page injects its OWN three instance; a second copy
 * means this file's Mesh is not the renderer's Mesh and nothing draws. That is also why the
 * geometry merging and instancing below are hand-rolled instead of using BufferGeometryUtils --
 * anything under three/examples/jsm is a second import and would fail at runtime.
 *
 * Envelope: 8.00 x 4.60 x 7.00 m, origin at base-center, +Y up, glazed shopfront facing +Z.
 * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=16 unique geometries.
 * Built: 11 draw calls, 7 materials, 11 unique geometries.
 */

export type ProceduralModelOptions = {
  /**
   * Where this prop's shipped files live, with a trailing slash.
   *
   * The maps are recorded as bare filenames because the bundle is EVALUATED
   * rather than imported: it has no import.meta and no currentScript, so it
   * cannot see its own URL. Every host derives this from the module URL.
   */
  baseUrl?: string;
  wireframe?: boolean;
  castShadow?: boolean;
  receiveShadow?: boolean;
  textureSize?: number;
  textureAnisotropy?: number;
  qualityPriority?: 'reference-fidelity' | 'balanced';
};

export type ProceduralModelRuntime = {
  nodes: Record<string, THREE.Object3D>;
  meshes: Record<string, THREE.Mesh>;
  sockets: Record<string, THREE.Object3D>;
  colliders: Record<string, unknown>;
  destructionGroups: Record<string, THREE.Object3D[]>;
};

/* ------------------------------------------------------------------ geometry helpers */

/**
 * Concatenate geometries into one BufferGeometry -- the local stand-in for
 * BufferGeometryUtils.mergeGeometries, which lives under three/examples/jsm and therefore
 * cannot be imported here. Everything is converted to non-indexed first so the attribute
 * arrays can simply be appended; that changes the vertex count but NOT the triangle count,
 * which is the axis the budget actually measures.
 */
function mergeGeos(geos: THREE.BufferGeometry[]): THREE.BufferGeometry {
  // Track which parts are throwaway conversions so only those get disposed. Disposing a
  // caller-owned geometry here would free a buffer that is still referenced elsewhere.
  const parts: THREE.BufferGeometry[] = [];
  const temporary: boolean[] = [];
  for (const g of geos) {
    if (g.index) {
      parts.push(g.toNonIndexed());
      temporary.push(true);
    } else {
      parts.push(g);
      temporary.push(false);
    }
  }
  let total = 0;
  for (const g of parts) total += g.getAttribute('position').count;

  const position = new Float32Array(total * 3);
  const normal = new Float32Array(total * 3);
  const uv = new Float32Array(total * 2);

  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute('position');
    const n = g.getAttribute('normal');
    const t = g.getAttribute('uv');
    for (let i = 0; i < p.count; i++) {
      position[(v + i) * 3] = p.getX(i);
      position[(v + i) * 3 + 1] = p.getY(i);
      position[(v + i) * 3 + 2] = p.getZ(i);
      if (n) {
        normal[(v + i) * 3] = n.getX(i);
        normal[(v + i) * 3 + 1] = n.getY(i);
        normal[(v + i) * 3 + 2] = n.getZ(i);
      }
      if (t) {
        uv[(v + i) * 2] = t.getX(i);
        uv[(v + i) * 2 + 1] = t.getY(i);
      }
    }
    v += p.count;
  }
  for (let i = 0; i < parts.length; i++) {
    if (temporary[i]) parts[i].dispose();
    geos[i].dispose();
  }

  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(position, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  out.computeBoundingBox();
  out.computeBoundingSphere();
  return out;
}

/** A box in WORLD metres, given as centre + size. */
function boxAt(cx: number, cy: number, cz: number, w: number, h: number, d: number): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(cx, cy, cz);
  return g;
}

/** A Y-axis cylinder in WORLD metres. */
function cylAt(cx: number, cy: number, cz: number, r: number, h: number, seg = 16): THREE.BufferGeometry {
  const g = new THREE.CylinderGeometry(r, r, h, seg);
  g.translate(cx, cy, cz);
  return g;
}

/* ------------------------------------------------------------------ materials */

type MatSpec = {
  id: string;
  color: number;
  roughness: number;
  metalness: number;
  opacity?: number;
  envMapIntensity?: number;
  /** Internally illuminated surfaces only. See the sign-face note below. */
  emissive?: number;
  emissiveIntensity?: number;
};

/**
 * Every material here is declared `textureless` in the sculpt spec, so this function does NOT
 * synthesise a procedural texture set. That matters twice over. Speed: makeProceduralTextureSet
 * writes FIVE canvases per material pixel by pixel in JavaScript, at a cost that is the SQUARE
 * of the resolution -- seven materials at 1024 would cost seconds inside this call, before the
 * drawer can show anything. Correctness: whenever a texture set exists the generator forces
 * color to white and roughness to 1 and reads both back out of the generated maps, discarding
 * the measured albedo below -- which is exactly what renders a building mid-grey.
 *
 * The one printed graphic on this prop, the Big C fascia, is a canvas assigned AFTER material
 * construction in applyFasciaGraphic(). The textureless declaration does not affect it, and
 * that is the documented route for a brand fascia.
 */
const MATERIAL_SPECS: MatSpec[] = [
  // SOLVED against the harness, not copied from the plate. The transfer on this elevation at the
  // solved camera is affine with a large NEGATIVE offset -- R = 0.933 A - 26.2, fit on two renders
  // (albedo luma 149.1 landing at 112.9, and 193.9 landing at 154.7) -- so the plate's own measured
  // #9c948b renders 24% dark, at 112.9 against the plate's 148.6. Inverting 148.6 gives albedo
  // luma 187.4, i.e. #C2BAB0 at the plate's hue. The wall is the largest surface on the prop and
  // it was the largest single tonal error on it.
  { id: 'render-wall', color: 0xc2bab0, roughness: 0.88, metalness: 0.0 },
  { id: 'roof-deck', color: 0xc2c2c3, roughness: 0.85, metalness: 0.0 },
  // WHITE, deliberately. This material is only ever used by an InstancedMesh that sets a
  // per-instance colour, and InstancedMesh.setColorAt MULTIPLIES with material.color. Authored
  // at the measured #B0ADA8 the measured block tones were being multiplied down by it and the
  // cap course rendered brown. The measured colours now live in CAP_BLOCK_TONES, unmodulated.
  { id: 'parapet-block', color: 0xffffff, roughness: 0.8, metalness: 0.0 },
  // EMISSIVE, because a Big C fascia is an internally illuminated acrylic lightbox and the plate
  // renders it as one: measured in the normalised frame its white field reads luma 224.6, against
  // 148.6 for the wall beside it -- brighter than any surface in the picture including the roof
  // deck at 193. Lit only by the harness's key it came back at 142.7, DARKER than the plate's
  // wall, so the one surface on this prop that is a light source was the dimmest thing on the
  // front. The 7-Eleven sibling carries its fascia the same way at 0.30.
  { id: 'sign-face', color: 0xd9d9d8, roughness: 0.35, metalness: 0.0, envMapIntensity: 0.6,
    emissive: 0xfff6e8, emissiveIntensity: 0.34 },
  // Metalness is capped well below the physical value for aluminium and galvanised steel. The
  // thaikit harness supplies a hemisphere light and three directionals and NO environment map,
  // and a metal with nothing to reflect renders black -- at the physical 0.85 the canopy plates,
  // mullions and condensers all came out near-black against a plate that shows them pale grey.
  // The albedo stays at the measured value; it is the metalness that is wrong for this lighting
  // rig, so that is what moves. The shipped 7-Eleven sibling caps the same two at 0.35 and 0.30.
  { id: 'aluminium', color: 0xbdbcb9, roughness: 0.42, metalness: 0.35 },
  // SOLVED. Two renders fit this pane's transfer -- albedo luma 110.5 landing at 115.6 and 66.4
  // landing at 64.1, so R = 1.168 A - 13.5, measured over the exact pixel set the glass colour
  // changes rather than at a hand-picked point. The plate's panes read a median of 100.7 in the
  // same frame, which inverts to albedo luma 97.2. It was #6b6f6e, copied from the plate, and
  // rendered 16% bright -- the shopfront read as pale panels where the plate shows dark smoked
  // glass, and it was the single largest contributor to interiorDifference.
  { id: 'glass-tinted', color: 0x5e6261, roughness: 0.18, metalness: 0.0, opacity: 0.92, envMapIntensity: 1.1 },
  { id: 'galv-plant', color: 0x90969a, roughness: 0.52, metalness: 0.3 },
];

function buildMaterials(options: ProceduralModelOptions): Record<string, THREE.MeshStandardMaterial> {
  const map: Record<string, THREE.MeshStandardMaterial> = {};
  for (const s of MATERIAL_SPECS) {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(s.color),
      roughness: s.roughness,
      metalness: s.metalness,
      wireframe: options.wireframe ?? false,
    });
    if (s.envMapIntensity !== undefined) m.envMapIntensity = s.envMapIntensity;
    if (s.emissive !== undefined) {
      m.emissive = new THREE.Color(s.emissive);
      m.emissiveIntensity = s.emissiveIntensity ?? 1;
    }
    if (s.opacity !== undefined) {
      // Mostly opaque ON PURPOSE. The building is an exterior shell with no interior geometry
      // behind the glass, so a fully transparent pane would read as a hole punched through the
      // wall rather than as glazing.
      m.transparent = true;
      m.opacity = s.opacity;
      m.depthWrite = true;
    }
    m.name = s.id;
    map[s.id] = m;
  }
  return map;
}

/* ------------------------------------------------------------------ the model */

// Darkened 4.7% (2026-08-31). Measured over the pixel set the tones actually drive, the course
// rendered a mean of 185.8 against the plate's 177.6, and the same two-render fit gives
// R = 0.998 A + 11.6 -- so the albedo mean wanted 166.3 rather than 174.5. A small correction,
// and worth recording as small: a hand-picked sample point had suggested the blocks were 40%
// too bright, and it had landed on the lightbox.
const CAP_BLOCK_TONES = [0x96928b, 0xbabab9, 0xb0aeac, 0xa19e99];

export function createBigCStoreBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Big C Store Building';

  const materials = buildMaterials(options);
  const nodes: Record<string, THREE.Object3D> = {};
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const castShadow = options.castShadow ?? true;
  const receiveShadow = options.receiveShadow ?? true;

  function addComponent(id: string, name: string, geo: THREE.BufferGeometry, matId: string): THREE.Mesh {
    const node = new THREE.Group();
    node.name = `${name}__node`;
    const mesh = new THREE.Mesh(geo, materials[matId]);
    mesh.name = name;
    mesh.castShadow = castShadow;
    mesh.receiveShadow = receiveShadow;
    node.add(mesh);
    root.add(node);
    nodes[id] = node;
    meshes[id] = mesh;
    colliders[id] = null;
    return mesh;
  }

  function addInstanced(
    id: string,
    name: string,
    geo: THREE.BufferGeometry,
    matId: string,
    matrices: THREE.Matrix4[],
    colors?: number[],
  ): THREE.InstancedMesh {
    const node = new THREE.Group();
    node.name = `${name}__node`;
    const inst = new THREE.InstancedMesh(geo, materials[matId], matrices.length);
    inst.name = name;
    inst.castShadow = castShadow;
    inst.receiveShadow = receiveShadow;
    for (let i = 0; i < matrices.length; i++) inst.setMatrixAt(i, matrices[i]);
    if (colors) {
      const c = new THREE.Color();
      for (let i = 0; i < colors.length; i++) inst.setColorAt(i, c.setHex(colors[i]));
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    }
    inst.instanceMatrix.needsUpdate = true;
    node.add(inst);
    root.add(node);
    nodes[id] = node;
    meshes[id] = inst as unknown as THREE.Mesh;
    colliders[id] = null;
    return inst;
  }

  /* -- 1. building shell ------------------------------------------------------------------
   * SOLID box, not a ring. The prop is an exterior shell that is only ever seen from outside,
   * so an interior costs draw calls, geometries and VRAM for something nobody sees. Solid also
   * means the shopfront needs no opening cut into it, which removes all four reveal faces and
   * the z-fighting they cause.
   * Set INSIDE the parapet ring by 0.06 m on every elevation (walls +-3.94 / -3.44; parapet
   * +-4.00 / -3.50) so no wall face is ever coplanar and co-facing with a parapet face. */
  addComponent('building-shell', 'Building shell', boxAt(0, 1.775, -0.47, 7.88, 3.55, 5.94), 'render-wall');
  colliders['building-shell'] = {
    shape: 'box',
    localCenter: [0, 2.3, 0],
    halfExtents: [4.0, 2.3, 3.5],
    notes: 'Asset declares collider "box". One convex proxy over the whole envelope.',
  };

  /* -- 2. roof deck ---------------------------------------------------------------------
   * Spans y 3.50..3.62, so its underside is sunk 0.05 m INTO the shell (top 3.55) rather than
   * resting on it. Authored 3.55..3.62 the deck's bottom face and the parapet ring's bottom
   * face were both at y=3.550 and both facing down -- 46 m2 of coplanar co-facing surface, and
   * the one pair check-coplanar caught on this prop. Sinking it makes the junction an overlap
   * of solids, which cannot fight. */
  addComponent('roof-deck', 'Roof deck', boxAt(0, 3.56, -0.47, 7.8, 0.12, 5.9), 'roof-deck');

  /* -- 3. parapet ring + front sign wall --------------------------------------------------
   * FOUR boxes merged into ONE component and ONE draw call. The front is taller than the
   * sides, which a plan extrusion cannot express, so merged boxes are the right primitive.
   * The front sign wall is the WHOLE elevation above the canopy (y 2.70..4.50), not a parapet
   * strip: in the plate the block piers and the lightbox both sit on one proud plane that runs
   * from the canopy to the cap course, and everything above the canopy is 48 % of the front
   * height (block course 0.6 m, lightbox 1.1 m, at 109 px/m on the near-left column). Its top
   * stops at 4.50 so the cap blocks (4.02..4.60) cap it rather than sit beside it. It overlaps
   * into the shell and into the canopy plates rather than butting either. */
  addComponent(
    'parapet',
    'Parapet ring and sign wall',
    mergeGeos([
      boxAt(0, 3.6, 2.47, 8.0, 1.8, 0.54), // front sign wall, y 2.70..4.50, 0.24 m proud of the facade
      boxAt(-3.88, 3.75, -0.65, 0.24, 0.4, 5.7), // left upstand
      boxAt(3.88, 3.75, -0.65, 0.24, 0.4, 5.7), // right upstand
      boxAt(0, 3.75, -3.38, 8.0, 0.4, 0.24), // rear upstand
    ]),
    'render-wall',
  );

  /* -- 4. Big C fascia lightbox ------------------------------------------------------------
   * 6.2 x 1.10 m, measured off the plate: the white box spans x 395..892 of the 325..935 px
   * front (6.2 of 8 m) and 121 of the 502 px front height on the near-left column (1.11 of
   * 4.6 m), and sits 0.08 m above the canopy. The first build had it at 0.58 m tall, which
   * squashed the badge to a 5:1 strip against the plate's 2.5:1 field. Sunk 0.04 m INTO the
   * sign wall face (2.74) and standing 0.12 m proud of it, so the panel overlaps its surround
   * instead of meeting it. UVs are AUTHORED: the +Z face samples the whole baked image and the
   * other five faces sample a 2 % strip at its left edge, which is plain lightbox white --
   * one material and one draw call, no separate graphic plane. */
  const signGeo = new THREE.BoxGeometry(6.2, 1.1, 0.16);
  {
    // BoxGeometry vertex order is px, nx, py, ny, pz, nz -- four vertices per face.
    // Face 4 (+Z) is vertices 16..19 and keeps its full 0..1 UVs.
    const uv = signGeo.getAttribute('uv') as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) {
      if (i < 16 || i >= 20) uv.setX(i, uv.getX(i) * 0.02);
    }
    uv.needsUpdate = true;
    signGeo.translate(0, 3.37, 2.78);
  }
  addComponent('sign-lightbox', 'Big C fascia lightbox', signGeo, 'sign-face');

  /* -- 5. shopfront glazing ---------------------------------------------------------------
   * One pane, not one per bay: the mullion grid in front does the dividing. Overlaps INTO the
   * facade at the back (2.46 vs the wall face at 2.50) and sits RECESSED behind the framing at
   * the front (2.56 vs 2.64), which is what makes it read as glass set into a frame. */
  addComponent('shopfront-glazing', 'Shopfront glazing', boxAt(0, 1.38, 2.51, 6.5, 2.56, 0.1), 'glass-tinted');

  /* -- 6. shopfront framing + door bay ----------------------------------------------------
   * Eight boxes merged into one component. Every part is the same anodised aluminium; folding
   * them together is the draw-call lever chosen in the blockout, not an optimisation deferred
   * to the end -- a part split for authoring convenience cannot be merged afterwards once a
   * pivot hangs off it. Front face 2.64 stands proud of both the glazing and the mullions.
   * Members BUTT one another (stiles and jambs stop at the rails they meet) rather than
   * overlapping: an overlap of two co-facing fronts inside one merged geometry z-fights just
   * as two components would, and check-coplanar cannot see inside a component. */
  addComponent(
    'shopfront-frame',
    'Shopfront framing and door bay',
    mergeGeos([
      boxAt(-3.285, 1.3525, 2.58, 0.07, 2.345, 0.12), // left stile, sill top 0.18 to head 2.525
      boxAt(3.285, 1.3525, 2.58, 0.07, 2.345, 0.12), // right stile
      boxAt(0, 2.56, 2.58, 6.64, 0.07, 0.12), // head, just under the canopy soffit at 2.60
      boxAt(0, 0.14, 2.58, 6.64, 0.08, 0.12), // sill / kick rail
      boxAt(0, 1.97, 2.58, 6.5, 0.08, 0.12), // transom. Re-measured on the shopfront crop: the clerestory strip is 27% of the 2.56 m opening, so the transom sits 0.59 m below the head, not 0.71
      boxAt(-1.185, 0.995, 2.58, 0.07, 1.63, 0.12), // door jamb L, sill top to transom
      boxAt(1.185, 0.995, 2.58, 0.07, 1.63, 0.12), // door jamb R
      boxAt(0, 2.0, 2.58, 2.3, 0.22, 0.12), // door header box, 1.89..2.11 on the transom
    ]),
    'aluminium',
  );

  /* -- 7. roller shutter (-X wall only) ---------------------------------------------------
   * NOT mirrored onto the +X wall: only one shutter is evidenced in the single plate, and the
   * +X elevation is unobserved at 0.25 confidence. The corrugation is 20 ribbed slats in
   * GEOMETRY, which the silhouette shows at a grazing angle, rather than a normal map.
   * The outer face sits at -3.99: proud of the wall (-3.94) but deliberately NOT at -4.00,
   * because a face at exactly -4.00 would be coplanar and co-facing with the parapet outer
   * face -- which the bounding-box coplanarity check flags even though the two never overlap
   * in Y. */
  {
    // z centre -2.10, not 1.35. The plate puts the shutter at the REAR end of this elevation --
    // at azimuth 315 the -X wall runs away to the left of frame and the shutter is at its far
    // left, which is -Z. It was at the front end, next to the shopfront corner, where a service
    // shutter never is.
    const SHUTTER_Z = -2.10;
    const slats: THREE.BufferGeometry[] = [];
    const SLAT_COUNT = 20;
    const SLAT_H = 2.25 / SLAT_COUNT;
    for (let i = 0; i < SLAT_COUNT; i++) {
      const y = 0.1 + SLAT_H * (i + 0.5);
      // The corrugation alternates by making every other slat THINNER, never by pushing one
      // further out. Growing the proud slats outward instead put their faces at x=-4.005 --
      // past the declared 8.00 m envelope AND onto the parapet's own -4.00 plane, which is the
      // coplanar co-facing pair this whole layout is arranged to avoid. Both slat depths share
      // the inner face at -3.90; only the outer face moves, between -3.99 and -3.975.
      const thickness = i % 2 === 0 ? 0.09 : 0.075;
      slats.push(boxAt(-3.9 - thickness / 2, y, SHUTTER_Z, thickness, SLAT_H * 0.92, 1.5));
    }
    slats.push(boxAt(-3.935, 2.485, SHUTTER_Z, 0.11, 0.27, 1.6)); // head box
    const shutter = mergeGeos(slats);
    {
      // Shares galv-plant with the condensers, whose atlas is assigned to the material after
      // construction: every slat samples the plain quadrant, never the louvre or grille.
      const uv = shutter.getAttribute('uv') as THREE.BufferAttribute;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 0.5, 0.5 + uv.getY(i) * 0.5);
    }
    addComponent('roller-shutter', 'Roller shutter and head box', shutter, 'galv-plant');
  }

  /* -- R1. parapet cap course + corner quoins ---------------------------------------------
   * Cap course and quoins are the SAME block at different transforms, so both sets ride one
   * InstancedMesh and one geometry: 18 parts for 1 draw call instead of 18. The block-to-block
   * tonal variation measured at standard deviation 25 is carried by instanceColor, which costs
   * nothing, rather than by a texture set -- a colour difference is not a material difference.
   * Blocks stop 0.02 m short of the parapet outer face so the two are never coplanar, and
   * overhang the sign wall front, which is what a coping does. Depth was 0.62 (z 2.18..2.80) and
   * is 0.52 (z 2.24..2.76): at the solved camera the course showed 0.62 m of TOP FACE and read as
   * a wall of slabs rather than as a cap, which is the "chunkier and deeper than the plate's"
   * residual the last review recorded after an earlier trim. It still overhangs the sign wall
   * front (2.74) by 0.02 and still covers the wall's own top, so no wall shows behind it. */
  {
    const mats: THREE.Matrix4[] = [];
    const cols: number[] = [];
    const push = (x: number, y: number, z: number, w: number, h: number, d: number) => {
      mats.push(new THREE.Matrix4().compose(
        new THREE.Vector3(x, y, z),
        new THREE.Quaternion(),
        new THREE.Vector3(w, h, d),
      ));
      cols.push(CAP_BLOCK_TONES[mats.length % CAP_BLOCK_TONES.length]);
    };
    // Course between the piers: FIVE blocks at the plate's varied widths (0.9, 1.35, 1.35,
    // 1.4, 1.4 m, read at 76 px/m along the front) and 0.58 m tall, capping the sign wall from
    // 4.02 to 4.60. The first build ran twelve uniform 0.64 x 0.28 m bricks, which read as a
    // brick soldier course; the plate's blocks are near-square slabs ~0.6 m tall.
    // Z 2.40..2.92 (centre 2.66), not 2.24..2.76. The course used to sit BEHIND the lightbox --
    // the box's face is at 2.86 and the blocks stopped at 2.76 -- so the fascia stood proud of its
    // own coping. In the plate the blocks are the outermost thing on the elevation and throw a
    // shadow line down the lightbox's edge, which is what a coping and a quoin do. They now stand
    // 0.06 m proud of it. The wall top behind them (2.20..2.40) is hidden at the solved elevation:
    // the blocks overhang it by 0.10 m in height and 19 degrees needs 0.29 m of run to see past
    // that, against the 0.20 m strip there is.
    const CAP_Z = 2.66, CAP_D = 0.52;
    const widths = [0.9, 1.35, 1.35, 1.4, 1.4];
    let x = -3.2;
    for (const w of widths) {
      push(x + w / 2, 4.31, CAP_Z, w - 0.02, 0.58, CAP_D);
      x += w;
    }
    // Piers: 0.8 m wide, THREE courses each -- cap, then two ~0.6 m blocks -- running from the
    // cap course down to the canopy plates, which is where the plate's corner stacks end.
    // The piers are QUOINS and a quoin turns the corner. Each course is TWO blocks: the front one
    // on the +Z elevation and a RETURN running back along the side wall, so the stack reads as a
    // corner pier from both elevations the way the plate shows it -- three courses of blocks whose
    // front face and side return are both visible, with the lightbox butting into the inner face.
    // Built as front-only they were invisible at the corner: the left pier occupied the cell where
    // the plate has a shaded quoin and the render had a bright cap block, the single worst cell in
    // the 8x8 interior comparison at 70 of 255.
    //
    // The return butts the front block's back face at z = 2.40 -- opposed faces, not a same-facing
    // overlap -- and its outer face stops at 3.99, inside the parapet's own 4.00 plane, for the
    // same reason the roller shutter does.
    for (const sx of [-3.6, 3.6]) {
      const rx = Math.sign(sx) * 3.74;
      for (const [y, h] of [[4.31, 0.58], [3.67, 0.62], [3.02, 0.6]] as [number, number][]) {
        push(sx, y, CAP_Z, 0.76, h, CAP_D);
        push(rx, y, CAP_Z - CAP_D, 0.50, h, CAP_D);
      }
    }
    addInstanced('parapet-cap-blocks', 'Parapet cap blocks and quoins', new THREE.BoxGeometry(1, 1, 1), 'parapet-block', mats, cols);
  }

  /* -- R2. entrance canopy: six slab panels, one instanced geometry --------------------
   * Rebuilt against the plate crop (2026-08-27). The plate's canopy is ONE thin slab, not six
   * chunky blocks: a ~0.10 m plate with a shallow nose lip on its front edge, divided into
   * panels by narrow joints, with a round recessed fitting showing on the TOP of every panel
   * (the discs are on the upper face in the plate, seen from its high camera). It runs from
   * the LEFT pier's inner edge (x -3.20) across the whole front and ON PAST the right pier,
   * ending just short of the building's +X face (3.98, not 4.00: an end face at exactly 4.000
   * would be coplanar and co-facing with the parapet's +X face). So six 1.17 m panels on a
   * 1.20 m pitch with 0.03 m joints, -3.20..3.98.
   *
   * Vertical placement is unchanged from the plate column scan: slab y 2.64..2.74 with the lip
   * to 2.60, top overlapping the right pier's lowest block (2.72) by 0.02 m so the two are a
   * solid overlap rather than a shared plane. The nose at z=3.50 IS the declared front of the
   * envelope; the slab face is set 0.01 m behind the lip so the two +Z faces never coincide.
   * Per-instance tone alternates through instanceColor -- the plate's panels read as pale and
   * warm-grey by turns -- and, since setColorAt MULTIPLIES material.color, the tones are ratios
   * about 1.0 rather than absolute albedos. One geometry, one draw call, as before. */
  {
    const panel = mergeGeos([
      boxAt(0, 2.69, 2.945, 1.17, 0.10, 1.09), // slab, y 2.64..2.74, z 2.40..3.49
      boxAt(0, 2.63, 3.45, 1.17, 0.06, 0.10), // nose lip, y 2.60..2.66, z 3.40..3.50
      cylAt(0, 2.745, 2.95, 0.10, 0.02, 16), // top fitting ring, proud 0.015 m of the slab
      cylAt(0, 2.635, 2.95, 0.075, 0.03, 12), // soffit downlight, sunk into the slab bottom
    ]);
    const mats: THREE.Matrix4[] = [];
    const cols: number[] = [];
    const TONES = [0xffffff, 0xeeece8, 0xf7f6f3, 0xe9e7e3, 0xffffff, 0xf2f0ec];
    for (let i = 0; i < 6; i++) {
      mats.push(new THREE.Matrix4().setPosition(-3.2 + 1.2 * (i + 0.5), 0, 0));
      cols.push(TONES[i]);
    }
    addInstanced('canopy-plates', 'Entrance canopy plates', panel, 'aluminium', mats, cols);
  }

  /* -- R3. shopfront mullions --------------------------------------------------------------
   * The fine vertical grid is the most recognisable thing about the shopfront. Eleven
   * instances on one geometry cost one draw call; eleven components would have cost eleven and
   * blown the ceiling on their own. They occupy z 2.54..2.62 -- INSIDE the frame band
   * (2.52..2.64) at both ends, so they are not coplanar with it, while still standing proud of
   * the glazing at 2.56 so the glass reads as recessed. */
  {
    // The spacing was WRONG, not the count. `-3.25 + 0.3383 * k` for k = 1..5 with its mirror puts
    // ten mullions at +-1.56, +-1.90, +-2.23, +-2.57 and +-2.91 -- a picket at 0.34 m pitch
    // crowded against each END of the shopfront, with 3.1 m of unbroken glass between +-1.56 and
    // one lone mullion at the centre of it. The plate shows an EVEN grid, and the geometry it is
    // even ACROSS is the two zones the door bay leaves: 1.185 (door jamb) to 3.25 (stile) is
    // 2.065 m a side, divided into four bays of 0.516 m by three mullions. Counted off the plate's
    // shopfront crop, three interior verticals a side is what is there.
    //
    // The eleventh instance stays, and it is now the DOOR'S MEETING STILE rather than a mullion
    // that happened to land at the centre: it stops at the door header (2.11) instead of running
    // the full height, because in the plate the leaves meet under their own head rail.
    const mats: THREE.Matrix4[] = [];
    const JAMB = 1.185, STILE = 3.25, BAYS = 4;
    const pitch = (STILE - JAMB) / BAYS;
    for (let k = 1; k < BAYS; k++) {
      for (const sx of [-1, 1]) {
        mats.push(new THREE.Matrix4().setPosition(sx * (JAMB + pitch * k), 1.32, 2.58));
      }
    }
    // meeting stile: 1.93 m tall (sill 0.18 to door header underside 2.11), so it is scaled down
    // from the shared 2.4 m box rather than given a geometry of its own.
    mats.push(new THREE.Matrix4().compose(
      new THREE.Vector3(0, 1.145, 2.58),
      new THREE.Quaternion(),
      new THREE.Vector3(1, 1.93 / 2.4, 1),
    ));
    addInstanced('shopfront-mullions', 'Shopfront mullions', new THREE.BoxGeometry(0.07, 2.4, 0.08), 'aluminium', mats);
  }

  /* -- R4. rooftop condenser units ---------------------------------------------------------
   * Rebuilt against the plate crop (2026-08-27). Each unit in the plate is a pale galvanised
   * cabinet about 1.05 x 0.74 x 0.90 m standing on a welded angle-steel STAND ~0.22 m tall,
   * with a dark circular fan grille let into a raised rim on the top and a dark louvred intake
   * panel on one long side; rust bleeds down the panel seams. The first build was a bare box
   * with a cylinder on it and no stand, which is what read as wrong.
   *
   * Still ONE geometry and ONE draw call for all four: casing, rim, stand rails and legs are
   * merged, and the grille, louvres and rust are carried by a 512 px canvas ATLAS assigned to
   * the shared galv-plant material after construction (applyPlantAtlas). The casing's six
   * faces get authored UVs into atlas quadrants -- top: fan grille; +-X: louvres; +-Z: panel
   * with rust; bottom: plain -- and every other part on the material, including the roller
   * shutter's slats, samples the plain quadrant. Louvres and grille are painted at a luma
   * well above the backdrop's 58 (louvre field #7d8287, slats #7d838a with #c4c9cd edges, measured to render at a minimum of ~64 side-lit against the backdrop's 58; grille field #62676c) so
   * the turntable gate cannot read a dark side panel as a hole.
   *
   * Placement follows the plate: one pair hard against the -X parapet near the front, one
   * pair on the +X side towards the rear, each pair staggered. All four face the same way (the
   * louvred side towards -X) as the plate shows. Legs start at y=3.60, sunk 0.02 m into the
   * deck (top 3.62); legs stop inside the rails and the cross rails sit 5 mm lower than the
   * long rails so no two merged parts share a co-facing plane. */
  {
    // H 0.74 on a 0.20 m stand: the rim then tops out at 4.59, inside the declared 4.60 m envelope.
    const W = 1.05, H = 0.74, D = 0.90;
    const casing = new THREE.BoxGeometry(W, H, D);
    {
      // BoxGeometry face order: +X, -X, +Y, -Y, +Z, -Z; four vertices each, UVs 0..1 per face.
      // Atlas quadrants (u, v origin): plain (0, 0.5), louvre (0.5, 0.5), grille (0, 0), rust (0.5, 0).
      const Q: [number, number][] = [[0.5, 0.5], [0.5, 0.5], [0, 0], [0, 0.5], [0.5, 0], [0.5, 0]];
      const uv = casing.getAttribute('uv') as THREE.BufferAttribute;
      for (let i = 0; i < uv.count; i++) {
        const [ou, ov] = Q[Math.floor(i / 4)];
        uv.setXY(i, ou + uv.getX(i) * 0.5, ov + uv.getY(i) * 0.5);
      }
      casing.translate(0, 0.215 + H / 2, 0);
    }
    const parts: THREE.BufferGeometry[] = [casing];
    const plain = (g: THREE.BufferGeometry) => {
      const uv = g.getAttribute('uv') as THREE.BufferAttribute;
      for (let i = 0; i < uv.count; i++) uv.setXY(i, 0.05 + uv.getX(i) * 0.02, 0.9 + uv.getY(i) * 0.02);
      return g;
    };
    // fan rim: a thin open ring standing 0.03 m proud of the lid around the painted grille
    parts.push(plain(new THREE.CylinderGeometry(0.31, 0.31, 0.03, 20, 1, true).translate(0, 0.215 + H + 0.012, 0)));
    // stand: four legs, two long rails (x), two cross rails (z)
    for (const lx of [-0.5, 0.5]) for (const lz of [-0.4, 0.4]) parts.push(plain(boxAt(lx, 0.085, lz, 0.05, 0.17, 0.05)));
    for (const lz of [-0.4, 0.4]) parts.push(plain(boxAt(0, 0.195, lz, W + 0.06, 0.05, 0.05)));
    for (const lx of [-0.5, 0.5]) parts.push(plain(boxAt(lx, 0.19, 0, 0.05, 0.05, 0.8)));
    const unit = mergeGeos(parts);
    // TIGHTENED 2026-08-31. The plate's four units are two PAIRS that nearly touch, each pair
    // stepped diagonally by roughly half a unit; the build had them 0.95 x 0.85 apart, which reads
    // as four units scattered over the roof rather than as two plant sets, and was the residual
    // the last review named for this feature. Group centres are unchanged -- left pair at
    // (-2.53, 0.58), right pair at (2.78, -1.95) -- because those were measured and only the
    // intra-pair spacing was wrong.
    //
    // The offset is (0.75, 0.95) and the SECOND number is the one that is load-bearing. A first
    // cut at (0.61, 0.70) put the casings 0.44 x 0.20 m INSIDE one another: the units are
    // 1.05 x 0.90, so any pair that overlaps in x must clear 0.90 in z or the two boxes
    // interpenetrate. check-coplanar caught it as four same-facing pairs sharing the y = 4.582
    // lid plane -- which is what an instanced set of identical units looks like once their
    // bounding boxes start to overlap, and is exactly why that check compares boxes.
    const placements: [number, number, number][] = [
      [-2.90, 3.6, 1.05],
      [-2.15, 3.6, 0.10],
      [2.40, 3.6, -1.475],
      [3.15, 3.6, -2.425],
    ];
    // TWO UNIT TYPES, at no cost. The last review recorded "the plate shows two visually similar
    // unit types; collapsing them to one instanced geometry costs a little fidelity and saves a
    // whole draw call" -- a real trade against a ceiling that finished at 11 of 12. It is not a
    // trade that has to be made: an instance matrix carries SCALE as well as position, so the
    // second type is the same geometry at different proportions. On the plate's roof crop the
    // right pair's front unit is visibly wider and squatter than the other three, so it is built
    // 12% wider, 10% lower and 6% deeper. Still one geometry, still one draw call.
    //
    // The scaled unit clears its pair partner: x centres are 0.75 apart against half-widths of
    // 0.525 and 0.59, so they overlap in x, but z centres are 0.95 apart against half-depths of
    // 0.45 and 0.477, so the boxes never intersect. Its rim tops out at 4.49, inside the 4.60 m
    // envelope, and its far corner at x 3.74 / z -2.90 is inside the deck's 3.90 / -3.42.
    const SCALES: [number, number, number][] = [[1, 1, 1], [1, 1, 1], [1, 1, 1], [1.12, 0.90, 1.06]];
    const mats = placements.map(([x, y, z], i) => new THREE.Matrix4().compose(
      new THREE.Vector3(x, y, z),
      new THREE.Quaternion(),
      new THREE.Vector3(...SCALES[i]),
    ));
    addInstanced('plant-condensers', 'Rooftop condenser units', unit, 'galv-plant', mats);
  }

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  return root;
}

/* ------------------------------------------------------------------ brand fascia */

/**
 * The Big C fascia face, BAKED once (scratch/big-c-store-building/sign/compose.py) and embedded
 * as a WebP data URI: 2048 x 368 px for the 6.2 x 1.10 m lightbox face, ~22 KB. Layout is
 * measured off the plate -- the green badge spans 35.4..72.8 % of the lightbox width and
 * 5..95 % of its height (a 2.32 x 0.99 m field, aspect 2.3), and the three glyph boxes are read
 * off the 4x badge crop. It is baked rather than drawn with fillText because the harness has no
 * bold-italic sans and a host has whatever the player's OS has, so a drawn wordmark is a
 * different shape on every machine. It is assigned AFTER material construction, which is the
 * documented route for a printed brand fascia and is unaffected by the material's `textureless`
 * declaration. drawFallbackSign() is the DECODE FALLBACK only.
 */
const SIGN_IMAGE_DATA_URL =
  'data:image/webp;base64,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';

function drawFallbackSign(): HTMLCanvasElement | null {
  const W = 2048;
  const H = 368;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  ctx.fillStyle = '#D9D9D8';
  ctx.fillRect(0, 0, W, H);

  const gx0 = W * 0.354;
  const gx1 = W * 0.728;
  const gy0 = H * 0.05;
  const gy1 = H * 0.95;
  const panelW = gx1 - gx0;
  const panelH = gy1 - gy0;

  const r = panelH * 0.03;
  ctx.fillStyle = '#8CC63F';
  ctx.beginPath();
  ctx.moveTo(gx0 + r, gy0);
  ctx.lineTo(gx1 - r, gy0);
  ctx.quadraticCurveTo(gx1, gy0, gx1, gy0 + r);
  ctx.lineTo(gx1, gy1 - r);
  ctx.quadraticCurveTo(gx1, gy1, gx1 - r, gy1);
  ctx.lineTo(gx0 + r, gy1);
  ctx.quadraticCurveTo(gx0, gy1, gx0, gy1 - r);
  ctx.lineTo(gx0, gy0 + r);
  ctx.quadraticCurveTo(gx0, gy0, gx0 + r, gy0);
  ctx.closePath();
  ctx.fill();

  // Fitted by MEASUREMENT: the host's font fallback decides advance widths, so the text is
  // measured and scaled horizontally to the badge rather than sized by a guessed ratio.
  const cy = gy0 + panelH * 0.56;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';
  const fontBig = `italic bold ${Math.round(panelH * 0.58)}px Arial, Helvetica, sans-serif`;
  const fontC = `bold ${Math.round(panelH * 0.9)}px Arial, Helvetica, sans-serif`;
  ctx.font = fontBig;
  const wBig = ctx.measureText('Big').width;
  ctx.font = fontC;
  const wC = ctx.measureText('C').width;
  const gap = panelH * 0.04;
  const scaleX = (panelW * 0.88) / (wBig + gap + wC);

  ctx.save();
  ctx.translate(gx0 + panelW * 0.06, 0);
  ctx.scale(scaleX, 1);
  const stroke = (text: string, x: number, y: number, width: number) => {
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#FFF6E0';
    ctx.lineWidth = width;
    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
  };
  ctx.fillStyle = '#E30613';
  ctx.font = fontBig;
  stroke('Big', 0, cy + panelH * 0.05, panelH * 0.07);
  ctx.font = fontC;
  stroke('C', wBig + gap, cy - panelH * 0.1, panelH * 0.07);
  ctx.fillStyle = '#FFD400';
  ctx.font = `italic bold ${Math.round(panelH * 0.2)}px Arial, Helvetica, sans-serif`;
  stroke('Big', wBig + gap + wC * 0.05, gy0 + panelH * 0.16, panelH * 0.045);
  ctx.restore();
  return canvas;
}

function applyFasciaGraphic(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as ProceduralModelRuntime | undefined;
  const mesh = rt?.meshes?.['sign-lightbox'];
  if (!mesh) return;
  const material = mesh.material as THREE.MeshStandardMaterial;
  if (!material || typeof document === 'undefined') return;

  const srgb = (THREE as any).SRGBColorSpace;
  const baked = new THREE.TextureLoader().load(SIGN_IMAGE_DATA_URL, undefined, undefined, () => {
    const canvas = drawFallbackSign();
    if (!canvas) return;
    const tex = new THREE.CanvasTexture(canvas);
    if (srgb) tex.colorSpace = srgb;
    tex.anisotropy = 4;
    material.map = tex;
    material.needsUpdate = true;
  });
  if (srgb) baked.colorSpace = srgb;
  baked.anisotropy = 4;
  baked.needsUpdate = true;

  material.map = baked;
  // The box is emissive, so the graphic has to drive the EMISSION as well as the albedo -- an
  // emissive colour with no emissiveMap adds the same glow to every texel, which would wash a
  // flat cream over the badge and lose the green field the brand is read by.
  material.emissiveMap = baked;
  // A `map` MULTIPLIES `color`: the measured lightbox white is already painted into the image,
  // so the colour slot must be white or the albedo is applied twice.
  material.color.setHex(0xffffff);
  material.needsUpdate = true;
}


/* ------------------------------------------------------------------ plant atlas */

/**
 * A 512 px canvas atlas for the galv-plant material, drawn once after construction (so the
 * material stays `textureless` in the spec and pays none of createSculptMaterial's five-canvas
 * synthesis): plain galvanised sheet top-left, the louvred intake top-right, the fan grille
 * bottom-left and a rust-streaked panel bottom-right. Painted at the albedo the plate measures
 * for the units (pale galvanised ~#9fa4a8), with the material's colour then set to white
 * because a map MULTIPLIES colour. A few hundred rectangle fills: under 10 ms.
 */
function drawPlantAtlas(): HTMLCanvasElement | null {
  if (typeof document === 'undefined') return null;
  const S = 512, Q = 256;
  const canvas = document.createElement('canvas');
  canvas.width = S; canvas.height = S;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return null;
  let seed = 7;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  const galv = (x: number, y: number) => {
    ctx.fillStyle = '#9fa4a8'; ctx.fillRect(x, y, Q, Q);
    for (let i = 0; i < 90; i++) {
      const w = 12 + rnd() * 40, h = 8 + rnd() * 30;
      ctx.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,0.10)' : 'rgba(60,66,72,0.10)';
      ctx.fillRect(x + rnd() * (Q - w), y + rnd() * (Q - h), w, h);
    }
  };
  const rust = (x: number, y: number, n: number) => {
    for (let i = 0; i < n; i++) {
      const rx = x + 6 + rnd() * (Q - 12), ry = y + Q * (0.45 + rnd() * 0.5), len = 10 + rnd() * 50;
      ctx.fillStyle = `rgba(150,82,40,${0.22 + rnd() * 0.3})`;
      ctx.fillRect(rx, ry - len, 2 + rnd() * 3, len);
      ctx.fillStyle = 'rgba(120,60,28,0.35)';
      ctx.fillRect(rx - 2, ry - 3, 6 + rnd() * 5, 3);
    }
  };
  // plain (top-left in canvas space is v 0.5..1): canvas y runs down, so quadrant v 0.5..1 is y 0..256
  galv(0, 0);
  ctx.fillStyle = 'rgba(70,75,80,0.35)'; ctx.fillRect(0, 0, Q, 2); ctx.fillRect(0, Q - 2, Q, 2);
  // louvre panel (u 0.5..1, v 0.5..1): frame border, then dark slats with a lit top edge each
  galv(Q, 0);
  // Lifted twice for the turntable gate: at #4a4f54/#3c4146 the +X louvre, lit only by fill at the
  // 90 degree frame, rendered below the backdrop's luma 58 and was flagged as a hole (8,060 px).
  // Measured: the harness renders a side-lit +X face at ~0.56 of the painted value (painted luma 93
  // came back at 52), so the darkest slat line is painted at luma ~131; at ~121 the 90-degree frame still bottomed out at exactly 58.
  ctx.fillStyle = '#7d8287'; ctx.fillRect(Q + 14, 18, Q - 28, Q - 36);
  for (let y = 22; y < Q - 20; y += 7) {
    ctx.fillStyle = '#c4c9cd'; ctx.fillRect(Q + 14, y, Q - 28, 2);
    ctx.fillStyle = '#7d838a'; ctx.fillRect(Q + 14, y + 2, Q - 28, 2);
  }
  rust(Q, 0, 6);
  // fan grille (u 0..0.5, v 0..0.5 -> canvas y 256..512): lid, raised square rim, dark disc with rings and a hub
  galv(0, Q);
  ctx.fillStyle = 'rgba(255,255,255,0.18)'; ctx.fillRect(30, Q + 30, Q - 60, Q - 60);
  ctx.fillStyle = '#62676c'; ctx.beginPath(); ctx.arc(Q / 2, Q + Q / 2, 78, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#979ca0'; ctx.lineWidth = 1.5;
  for (let r = 12; r < 78; r += 9) { ctx.beginPath(); ctx.arc(Q / 2, Q + Q / 2, r, 0, Math.PI * 2); ctx.stroke(); }
  ctx.fillStyle = '#7d8286'; ctx.beginPath(); ctx.arc(Q / 2, Q + Q / 2, 12, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#b5babe'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(Q / 2, Q + Q / 2, 80, 0, Math.PI * 2); ctx.stroke();
  // rust-streaked panel (u 0.5..1, v 0..0.5): a seam line and streaks bleeding down from it
  galv(Q, Q);
  ctx.fillStyle = 'rgba(70,75,80,0.4)'; ctx.fillRect(Q, Q + 60, Q, 2); ctx.fillRect(Q + Q / 2 - 1, Q, 2, Q);
  rust(Q, Q, 14);
  return canvas;
}

function applyPlantAtlas(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as ProceduralModelRuntime | undefined;
  const mesh = rt?.meshes?.['plant-condensers'];
  if (!mesh) return;
  const material = mesh.material as THREE.MeshStandardMaterial;
  const canvas = drawPlantAtlas();
  if (!material || !canvas) return;
  const tex = new THREE.CanvasTexture(canvas);
  const srgb = (THREE as any).SRGBColorSpace;
  if (srgb) tex.colorSpace = srgb;
  tex.anisotropy = 4;
  material.map = tex;
  material.color.setHex(0xffffff); // the atlas carries the measured albedo
  material.needsUpdate = true;
}

/* ------------------------------------------------------------------ thaikit entry point */

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it with
 * (spec, options). `spec` is accepted and attached for host-side inspection -- the
 * reconstruction data already lives in this module, so it is deliberately not a second source
 * of truth.
 */
export function createObjectModel(spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  const root = createBigCStoreBuildingModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  applyFasciaGraphic(root);
  applyPlantAtlas(root);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: ONE. This building is a static exterior shell -- nothing opens, turns or swings.
    // The sliding doors and the roller shutter are authored as fixed geometry, so they get no
    // axis: a named pivot is a promise that a part turns on it, and a prop that declares eight
    // pivots when it has no mechanisms has described a machine that does not exist.
    const pivots: THREE.Object3D[] = [];
    const rootPivot = new THREE.Object3D();
    rootPivot.name = 'root';
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'root' },
    };
    root.add(rootPivot);
    pivots.push(rootPivot);

    // Sockets: NONE. Nothing attaches to this prop and nothing is emitted from it. A marker
    // named for a place on the surface is a location, not a mechanism.

    // Colliders are plain DATA, not Object3D, so they carry no .name of their own. Give each
    // the id of the component it owns, and drop the empty ones -- a nameless empty proxy in
    // the runtime list reads as a physics shape that exists and does nothing.
    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // Destruction groups: this prop declares NONE, and promotion checks built against declared
    // as an equality in BOTH directions. Derived rather than assumed empty, so a component
    // that somehow carried a fractureGroup fails the gate loudly instead of being dropped.
    const grouped = new Map<string, THREE.Object3D[]>();
    for (const [name, members] of Object.entries((rt.destructionGroups ?? {}) as Record<string, THREE.Object3D[]>)) {
      grouped.set(name, [...members]);
    }
    for (const node of Object.values(nodes)) {
      const group = (node as any)?.userData?.actionProfile?.destruction?.fractureGroup;
      if (typeof group !== 'string' || !group) continue;
      if (!grouped.has(group)) grouped.set(group, []);
      grouped.get(group)!.push(node);
    }

    root.userData.sculptRuntime = {
      ...rt,
      // A COUNT, not the Record. thaikit's harness returns this field straight across the
      // puppeteer bridge and its registry field is a number; a Record of Object3D is circular
      // and fails to serialise, which surfaces as the whole stats object arriving undefined.
      // The Record stays reachable under byId.
      nodes: Object.keys(nodes).length,
      pivots,
      sockets: Object.values((rt.sockets ?? {}) as Record<string, THREE.Object3D>),
      colliders,
      destructionGroups: [...grouped.entries()].map(([name, members]) => ({ name, members })),
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: rt.sockets ?? {} },
    };
  }
  return root;
}

/**
 * The one-argument entry point: vibe3d's contract, and img2threejs's own.
 *
 * `createObjectModel` above keeps thaikit's historical (spec, options) shape so
 * the harness, the level editor and the Node-side gates carry on unchanged.
 * `spec` has never been passed by any caller -- it is inspection data that is
 * already baked into this module -- so this is the honest signature, and it is
 * what a vibe3d consumer installs and calls.
 */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}
