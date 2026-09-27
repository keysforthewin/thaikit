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
      ...[-1,1].flatMap(sign=>{
        const handle=new THREE.CylinderGeometry(.017,.017,.31,10,1,false);handle.translate(sign*.13,1.07,2.72);
        return [handle,boxAt(sign*.13,.95,2.674,.036,.033,.07),boxAt(sign*.13,1.19,2.674,.036,.033,.07)];
      }),
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
  'data:image/webp;base64,UklGRi6CAABXRUJQVlA4ICKCAADQOAOdASoACGwBPikUiEMhoSESbHxYGAKEs7dJUqe9hnX5fGymOEkpJzaUVSOluDAmfDLT17xfOwfq/CEPff7neP962ZNrIn3282V84DNubM5P8JPcX4r9ff3750P9fe/8d/4fLC6O/9v+Z9mH/h9e/6x/9X5//Q3+tP/Z/yP+g7YHna/dL9sfd0/KP4Qf3X1Iv65/uPW69cL+seqv5zXrbfvF+4GYd/Ev/z6Nfmf+54K/mn3H/A/wntxV0eRB4J5G+Mf5z/T+Zf/ZvNcasXxOSLxWP3b9c/QV/q9DV40P0QT7nXG/CYvDbkbNeAjOmLgtRxRBmBE9x5rUANl9KnXopWfxqcEX1vLV69NST1HO1zmLxqzw6NpNzVR1eaZ/+U9o4u/4MCqEiVsbVasyfaHlJdYyz1dL4h7NOzauos4WATiHOHmmYZWV5GZFX9dT0NovmsCzLEawiX/Y07MEuV70DMKkFZAVmp+4jWDyD0u8FOBwhlPuHVIu4mAy02rJWdetiPV0ZRNkhhzTMMrLTx9vWS67nyB1IsVk+NShqaeNNKXpp2yP0UE+S9qbPeJGEfp6r0Aba05yfQie4bGLcHwNtFQ7FHrSmnGisV1dRDldAx+ZL/IMZYei1PjyqkZ3ljgGiXi/MDdf/+hTLyPl3wtG2tc0AzBcGNccDMjMpY6NFcHLhtVC8Ih66iBgCssbjqmUtZwQNb1JrWLYF9crFFdRyiVa3U9VaBKURXLZ82oK6IgalrSHS24slCckURWJxKxHpzaVHszUJxrReRVBLww5PFycO89GICkIdcwRmsDNyyeTGpR+zhIQ3/djvQeqAe6OBO15/shLGycrKqsOB7OUCKLVtK4RrN7datTcinCnQEqOIwxL31sAciIIMGRqEw6/kgrsqxsfUq3wgapdd81NNWCkpfN3H3mchh0MDl5vpyW8PnEVoB9nYLYWrVhYy2e+GDYR3rc8tllRLBSH5enw2AVF1HCN1+Wkf05kQBQGik8mX0XCBJrWYLJFo/ZWZ4Q8GimGoqCDJi5Ay9YULsJZ+W7bni7pBZQ2LQDwGcxcuh/wGcCwZnGlJiVBls17YG3Dc+Pt1o2G1kE8jsz9TvpTCg9pt4cW8ZV94PU0Iqi3cxPmJi0FYJ+pXFtQS1BtXmiJ51fbMuabRdWOHG4Ml+a1MfNUmNmHLJ528nkln8Ogqv8Uxj33wR3pp4ZJ6gPjWzcmx6k93QB4l2aENLZtxl6tcl5xPMeugMOrL7Q4peclxCD4QXINg4i5fmAvAU0Wd5RKVvyB0T/opUpHNjRUIuGGeUw9mzxsmOr/NJinXQMTUqhWJN5p+v68j9dXCyXBthmrlAHraqQshMsZu6GNdRpsaLfifqEDCfnEKhqek80pHbIwCPV1hYOyZMEDpdmSSsARBkej5PVeejF+Py25M1g86XvUAOuVpHiYVk1Ah5fGQWE/Qk+prs79n2uF3AA0NIKNpQyb1BXMcNokyHehFJULws4oasPean8ksCOzQPvUg4J79jZJLDlAdsw3vEdjT+I352VH2fk5z6N51u1qniWSfx3K5L1X2iypaGRIwsNaHdLTJOe8c4OAN4hrDOXMzp7BbagebwuRvUrNlVSeMbT5mLTbXpF9NEws9z10qZAoaW0Up5pKYywnBRF9b+V4kTZuJBkYKw5gqgOl7rlkmgJ4PdCjdiaqyr8nX3Y//5H2asDj0VkO/Ar9iH5XEZoq5io0v2jy77JC8UE0CHarjldFAHiQVcNP/ETg3+EzBfVcEhigapxRk5hYCOGZInnjkQnlmtDHWaGhgzHGwEd499AJEMPkA4lVkkZBpZjbBljvTN5h9L9D33W8ZhTXACTLv0XDKc/JXc+cYOOZzUeAJZ2Tph8OpNNFhs6QaNnEg9/97Y93zkakmf0moFwbPm8h13+SZCwkp4fD1XWYuOBlHZL9XvCEc15OTY0aWyaoD7n6wLKq9wgOa1frIkYjgLEh9ANTjW7DIrLcKtQ1UsKG7TePPEwNl1077BFoIQ2zMnHhNWtfZWGb7+9vKVZCH1sT2oazjr6CKxqSwd6sj/vTw91xypsRPcz516tsmZZ0eeYsJ4ZXGIkcbeBQjRhoYf09ikDFo9jlaNIsNojFIU+7hoP5FNHmoif247eoEHrQOEULBVvnEB75qEteMBXUjuXYK4YzB2GH3PiHgWfIH6wLKq+QP7/ARYQIS3TzsopFKRb5BxLV8ZN2QgOa1fEb8HTFGtInzWoqM104QifP4I0i1cKzK0HTirqHG069fFYmaaqctiIVrh0uNC/jVix0ql8gIcnJvmr1H7JyzmOTDZfR+1KloFH5ALbM0dsf9UwpvmUiTRZX37x42jRpO/H2eEoIpxUt5hdS5rZf76tHmve70uhOo6j2t7dHoADdfWU45GZSF4eA+NT2enj263GLW0rBrKyovmH4rtoDrFdnVNxoCb1r/OoHYZu3d8sFR/DLILp4wxhmbWhzAC1bkrNnEXBpVjqy32F5ceGQnocqZtVbv3CA81IB6yJGI3hFVs0cmSU+3eNjUPq5zROqafnTlNo0Z31oaRIb3KEtaTXCv8EfOyP6zMcOmP3PTlz78LwSQo0n5QkO5cCNb17rDGXoCEImiqa0W/EpOePj+Elai4bGXmc64yyLvm2dzrK31bIa9/EKFOCGWYAe9iV6ypqz2IjcI7JOTVcjTvLze+XeyFZnBqXjIcCw835rEjE1PUaHjz8kqvXkWf3hPi1ZatFF/1mp2qLcTrvKVUiqWwD3tYe+uNOIn60hy/jBeYgVplHuf9GEq4hoL4vSANDClFo1K9qurBO92RaAX7n4VuToDoYfpSl+JwSszVdXxk2+I4L6sKTSAc5EvpVfKULSRefioEcNJFGkTfK2G9jTGGgIF0KW/KoBORafc9ER3CEv8NRoNySBdnrLUxf5HGmPXBiYtUjiFGy+omqS/SQbK6Y8HcSb4jgxnPRWun16zRZZotoOciEooUd4RMujs1T+MLxN264obkBvxK+cL4wwOUDQJZkQBJmHOpwNPsx/5L+4C/K9l5EjNmbPQQ/ILi8Gw/vVtjdzemFLysLpwM+h8D9khaD41mJo3RHW2cXzwZbi7mF1ej3ztYdIBYM2uGmSHTvgI8B39rVsfM5SXUmJxhCRi3SPFbHif4IirsrA1swVke/tWN6mGe4QHe+LVxVVu/c0uXgqTUi956c2FugARxyA8iHzOMvgzzIs9LuO4eWMADkhYhNSAbcyidp+DmDRpjlvzDtZzfOxQd7FsO5lOIqoEy/dTjhnCdica2mZJ2IMUIeVJHn00D4NOCTwHHM45Jw7+N04mkmPM1ygoHoJ0fZZnozZbWtzjtR9q5T/CrFUIGer3TN3Omqq3MjjJzRLozZJzzDhevMrW9wCpfv3/iQT73WOykNe1NQr2PTdJUbU8JfqZhTRwJhJIcVo08r1hwGaiJ3P0ApxYmlFuE1rY7W0Dz+GD3UZaF0kQZ+XWZpqk5HqK0s7bXBqBzfOClByEAQiRiOr82TPRWyemdwNINWqSljZS7gOmC+nlbCE8gcqVHhIRWAXFbBwTnCg9aX39HWeXz3sV0yRUKgruK2wFFiFGFym5GblvlY1e3/tJl+s4kJZ6Rq6a+vbSJkVMCAxQ5VBMkkDy6OxfpwxdmvNMHeIpJ7R0gF3hFFtq/nngwdvlyOeus5HvDI3bgrIcf02VMxHXn4gha7P1C7OaN5iOTLmriOoiRGOOeEkMJkBz4mHdkwCoBrw6n7q6NOGD+pVMZf5HWlbJ5ydTOFYWHC8ko61tx+ncAjf3fft2RVbEbwP4aTBnvXYyKAeWR4AJ5Qg5RHNBqrIMPCSQiXMS40fPNv2ElTRwiwQcccimZK/cIDyh7sU64Shb/b/5a3BsdI9OMdAkCcRw62WbCXHf9XMWx3uczWcohieaQxfjYl6TNl/8vavivUa6OqFDHdX7g2U+9lSGL2cB/BMX2h8ycyJQpGv4Ja4mVIVTezpKoPBf2XuuH8ZDi7mitd/1eR1EgBt886R9mcJg+Wi8boHOi8F2qoXMYw15dkmoke79DjWP7gi2WrjzI17QvlMlJss08u9NVBD0TJaN+qDriXBZE0cdwQbW36MqAmtSATzuXk5K0g5h8S1frJPGpeQ9sudo8n3wef0BiocboDGZipfZBIEnpWOuAArndTO4EZvpDLpqaNJZe+fjeJZp/v7ZKEUYZsBWNSvVam97iVSrEsR/whRJ58dRAg4U7u5k/V0HmgeNIOrx17vXnucbuD7Mj3ImonqJbgB16gMsw7gLb+xENfvM8tnuGmCp54S3UEl5JlHc9nB4dOGTFY33YZ3NbQTkltz+xpq6kokgeedN17wShZmOBzAS6ss/EzIYfu87o3ZIs6fog7l1/xNqCr4CsPpRFPGfKpilQ2zMGcWb1UFf1v4Tk7azT/juQUZYf+Baq6qskYusa1ft29jN+0zyYAWEJYbcpvvMPUSr5Nw108W9/ho87C6wBL9A6uV/Vs6YNYFfRUYZd1Lc3RaXcTZ41BAQXVgyTgw/SyildmjGmk7RLCQBMj3v4saTkDHy72s3LoLSEAYaWudlcC4z5spXuteAqh1ENUTl65HpQ8qF1ykNJQQhul8j3Mnp13fR1Eeiuyyd3OE26njcKK0tDVDT7rGrYaNZcPssiQhWZv6uVhKr2Lii6THuH0lxuBt17oHkg8+cfK0k+Pj49BoPCQBnqW6LTmq5jfhCcn0tYSiSl6IM7+hP4jjyrZdnGyOHGdBtqT8yJ3aZ9jj/AmOFHGnWsakVU01katGwjtiIj2ndbACAJav3BpOcEDB6geFscbwPuQp6e/GAxDFmTY246t04rG40g1xQkH40CqlmnAMJTPF3KkmtdOI3IupljpOZWl1yJ+1VSboaYwhMtlZ+nG66YH9F/RPfvVrif9PzEZr0uv59wge/ElKHYlLbS2/0/gRIrSWsVTuI6651B5Xd7KDLAeIXmdDYpZ9g6VWC315MBHgs85EsTKCGZD/FXmrWBAohNBPs0ILkWu6MBdRs4uuNFol9X/sY5ZWTDX+NRiw15mDCZ8gArVUB15w0CtZccjtgFxXVcWHVzGuSF6brcr9dkF5tP2/adBlM5CtJNK+QP30VPl8WWGqi3RBMBUHDd3q6t+josi5SZzmabpvkpEoHfOceaDdDc4JdvURiN4Uo2NfNuMcDwicl2LiyduucJMqCS4AlaV835pQo23jaZrV+siR47qjq+VeWslfXSrXdLqQXj24wEdnc+y1uzwCv4PkgnUTuvl0qibbsycpMhs5zzwlalm3XaoyyU3Wo9SMgtmxKXsfRP09S0TNZcGUiB65XiRbPWcNjmkFPgxBr1alEAFa2puqXOwJp9a4dNNrv9OSpvN/TKTy4uznIMY3eVKu79hjcARvbgnPl3DAD85r91rQOhDJaS5V6NqHDuaroIz3w/g85y5bRR1AMW5eKKbOyCiK5mV21/2pBRgV8+08LVRGyFmWruxKV3yGbG9uYX7giDFXuEjB3jPm94O9Q/dDPkig75j+VEDlKyatSNZFO2u32yWhJIq1YtcZKHGWOPdXPRBWRW4PcfvEN2zjbJaIjesbged0w1R9chXUfyFsZr9u+51X49SEVjT+DBglixDT+xVdYPA1nFUhvwIWNwE1ensFJF3t2KCWSQCmnzNP0QHZn8KMkv7vccX7Ynl11Hw27uh21Tfp75XzkKy+ZENs1q4oKKdaSJVfhxyjQok9SM/Z1ZvX+WFJuTS75ygyoooDvPFidlSIqYRQZcGwuDz1rfGxMudkO4ZG83CTlQlrfWnk8Jh6zetJvg1wNh/zKjOwiRiN42buX/TzS1fthFHqc14WmyAzH70ziMmc2CdA2qsh3/1Wxt8c7eThv/A7Lh08f8uFOIyQj3/akCLh/+5XhAQA3E3EO0xSJdTKrrkf1lCuAp/k75OR26O0B91ybQ2gLdaEwYbxnclcT7wCer/y2yca2vECobKxY8gdabu/51sDUFwavvZBTeonAHpd/DfimySNxLlQZmVCSPLEegrENyLRHNqKwFNGFSnYYbmvtVjQ0FwOGgCgL1XsxuOrpkEp393yR8IwpYVpeFYlmWwpJy2kVHwlUJk7iHap05Kmww1VZD6BNB9x44Ga0sQaKJqCa2hf5u28EhubQJehfRCqxNSN13K47YnAXsygriBLqxZTYmUL0nErc/b0tBjALlwjog4ir0KAv4JTgK1BXDlDDGyNJTwcexHawvbnPpna5S/0GMhVoJ+hVIbvo2qjfhZx4U3B8umSZlOliX6KP0k+NpHmUaGVsKpXAiihayeMCCyDgCmM2F2Nhif/6jbF40l6gdOf6ibzKCz1hvv8d71BGBn3m60y1wWJYwF0xgxfLfgj8GDWc8WktKNJGwssAUvzhgA9fJoscerEjC14zE8e1txWG0Ze6jyGoQFazkbSYcQsql3Y/JF776yvf7LjkISYfa6YikMdruDvKb7hZyM0/z5+7Q/9YtFFqiePCTz1/IGjnrfkl0HKPXOnrHgHrhpZAmF+TPHEAaz69Qmts3YisVWjH2BtZy63TGRJc0YbA1TUTuw/akKHaKRsH3GQJqiyxzM4sroY+p/6GrszkIGajZ9DswYC3HLr43gdK4/0XHUIBgV+QgV1/50PXIH6z0AqTI7RVK3EiaOzLYUqRk7X2xF0ClfKux4Cfyp0m1knW0ClZYGgU0C/GsNUSdQPDQnGqw0smgbi9F/AZI0WHyVDaLPv/3DmsYIWCccxk1UHz2LNdEwGiOLg4cYkILZUuMM2t/eGiB+gvSgtEs9BUCbc8nbpF6AKfLiwSB56EivgjHV4EFgzBzunaHiewGltx6MMxmYfZURCChUdoMLBcixXPbYcoBcSZGlwDKdrfj0rPdA0WcZtGjc4hJNnMP2M3/0QfN+JyQVuMbwlvOxw6sPjD5PLqtGqkcT93Q/rDv0AqoqQhiZX0x1KRpvYP+lqB+5ANKXYq4MVH68aCHwfz2/x3huSTeRSv0vqft06ZWSwBmv7yrqgtSqUTLG7jQp+f6MaTUrv93KXFbHiLbORwTG2voRnMTByZ42I8QQjuyf5YNk9kzgo68dWwzMXhV4GhJ2IYSd6THw5lX+PuzyRaNaMLZja+FWhD3bDVwo+rSUASRDR46iokbtdvdeyAAllP+fcfe0IRSOP5xcrQgd88pRtYYi+fuC0UCQf+30nZ/wvoW2DPuR6hCa6JVNuoahjt0GObWPQ3CWvISHceZwjCiCfitVxVkeSuygfVO+8wIYUbmiOuSmLsBswFcupTvSFQAZZNx3DiZyWDEqx/xON3LyAIN5HJt5DAoT4ecczJ1Z3MNENQ1jnMoX2RWLVagDH0vW+ZH/0earSpY6EnpgkTugQQpI7YH3rXxCWF2V5BPmBEfOiele7MQu9qMZst97btDrR2sqUlP6o2xTzotazslOEdrJFrAXZCvqoG5NmXx8KoBgkhkFC8oyA94QAsvHS460xNVvLGDouktWBFsZoHW3LsmIv7MJJeri6okU6N6o8Rtgcl8Avopli666CbuOB7+txhmY6iYlwVDZP3Pxr762p5YIgKb0f8qu+Yg+UxakdKxZz0dugVepvYJ+f6l39hNOGeSHklv4s8xJrfBAe1jO4yzY4kD6/hego6kHhLhZXfEQNSJg1uNdTRCetdx7IYFzLTqmn/RK2J9dbTon1/exv0jAYzuLFROjrZoVdLD4CELmDlJdeGoh3w83EmMeMDn/PawUvIKo3FEONHMowm4KelETSHzq1glLUp4R/XsguHmI5fCNy8GXj9rebBBUyFd5fG+gXj4+S5uJGLdK1Crd+DA1vc8l+ZT+J0CmQhT31quibOHvPFfzIegJo7TpNk/D/eQFmJJigsn50LKSa6ZW1t0ojp7sHgfD+C3d79JEFOZkH6pg4K7G9ArQ5DKoWhhDGlXb37jd+BPqbPXHFMRS9TOpN1ESnGclgyOWwD56Hq9aw50UUfnmcy8gvWGoEy33KNKPYxWXO7WgY5ZaK+5EWPa0BMrXZM9nptq8bjoSq+3jN95lqIwMx60v2+eyUSkIXgdZb/gy9wtSNhEgsMfvTPKC69qolP+wVZe41fAHs+wXKw7OvSBmKyKmwFQItThHODM5Ypcv2NTGIrvF0B7TDnoYYJUvEEofhoDPnx40cge8RbbkIej5o18qOroBDPQT9SEimPQ3qf5+Xw1M6Sz4NoUoE6iWELrJrUYGjLES1lAJxg/8QWoSYzxhhxdpWtsZsoLwvPU+aur2cO4kCRYIyRGxK7D0UOEMQVRbqjMzO0+Mkwznu2ld2QyKLND8M1UXxxypGQB0niWjBvN/va3jhMlO73AN5C5zm50A5M+CIMai4VFfS/zOgrbnOKM0pvSHqpz6jyi3f2fzrwaHMrsZ6HdfMFHtPmEkUfbxsCRhT5VPemqjmCqhGFX+V45fv3RmnAaYvlT6ZAtTObZQdK7l8SZAjrHMYd8L5NnE7F/UNFU1ugXHtJHPEO1HC3lMZLLljp29m6kWBzbDob+xlNH73ExJ4OEMbPQViRkATRvMCSgH+6NWmKtRabKPNXY/58xzJTyVnbhZA+msBNQv9p6KoXrBuvPIrMMAU7rHT3FApNxP4nv8EV6HFrT7EvNUZTdRjEdu/MDjuYX3lCwtSs5GkoIMdXqAIyCDC1IoEFlz0HRw9TSFOQv+vdYkrUzviFkDumpnrG9ZuTulpEziyEuiX0LSvdj9E0nr2IJiHkpy67a2uUre7w1Kfi4RkPiM+Mbbfwxyuc7MraQNwOFliE9JNpYfD1FPe2q5O7oeQAP79PLTSTgrT7VuFsyti+iTof5CLZs/AUOnK+9h1P6WHk5dWu6642v15dxH03cd+yt5NdypcZbv+hdfpBPgYCl3BnPXWdoPyxRaSRiYMBzhOs9x3KOSdaT9e7CdYMQdyXS538wU7bvNb+W9N2Sx3e0Asgrzfm1XIR+/wJPh+3tifIeONX6U/l9fkVFQQ/rOY856JeJgG2LmDWIkCrlf6NZw0Vke0xjnKwqQwwjtsxDruLLVppZ0RxxNiH2SMPD6fv1n3bi+ZMQyJwUYzc4BwHKOEiKlkvgI4k7oiAZyL5GjIFXJUMSUXAyVCaonAKOVKQVfwk/dXWce5zSYjTqMkeNYEZkTRvSb+xRFQ9OynCfZPZ38npekL3tmCZgJ67ytejhhFNQ9yRqffrVD2Om05DSZKmGATUE7ulJjaEGkySFSuW1jVGHbl8E3IzEv33fBQwTTj2q0BgbLJP3R1R7s9ch8opXzNfyDcp/FhnkMzl3hjMpxEmPGae0ve4MmE4R7D736WvJ/erNz9gVKHKJVsRLJm9KEkad/A9HqIjFIl2tY9Hkk3oh+KbbSy9j4Ab3FKNhoytcGiQonUMJd4SH+QuF4e/nxFvclZ0ZsZzdVSxE3bKR9rRj7AiQuEhQHytjfv+OIepla6g4/UF8tggQbhi5d9qdPGsvlqIAslzftWhpIR/nxMcKkEuT2vvqvlx1TXaJDa0/hazzzi4xxymAYbIBEFH0pf85lgR2vLw/GgfkHMUVitPHJRPuMEG3IE0W/aEzAdM9yZWqcedK5bv56oqPuzEzHqo3C1m2JodBpUVbO1CMzbvhPE3Lg81fjzXv9Q/xgtUYz1TZHvVmrFoNXHFZkwFtbnsexHdTf4hEmSl3fgTXu/XtL9xp8TBO+qvuR1Rts30/6//PtwkZ4AmZRjr3GIpAgOG0e/yXx6+Y97HVsbFVdL3xlF7JklNMWzSqU3+nKIawHfNQgR8i8gRKrsBaa9A9C1ftYxltRvsWpjimDscMy6/YSZ0W4j5sJAm5LqNUvZpaZMEzEvoZInXwhucJlRpXajLSv0B3/nH4O9K3lFJoejbMOfd4n1FnAwDrTSwmX1mHLP/mQ+XCZ90YQJBx9jMt2RhQR8FIxNOoWG/uOSV98mgKI+4qtgni0wX7IBhHRCVTSN3ZvfJWVxYZ8HEbSVxZT8uy+Rwn2qATFLY3UkTWn8XAq5ZbOokgPLLjEqVp2Md5eR8OG+598UXmmSOVYU6qkOp9/TSFuHwL8XAmxA3hPtLFVHg9mTIAg7eWFZjRZn6QtS9dZrqJQ3v/iRPmzGiYJUBboQJRIj2EBfir8/vkSUCZnPGCG7tLpFZpF3wCJ0b65NDRfhCIcj066IknpLeyfXdCeQlV2AaixytUG1+yU7OdjK0RyqXwR5o5soTsCsvlMqM76BEEYr4wVe3L1/mpyOSp170zZPkJVaMf3ausHagfJ8cL9V/heuISHGpiVtj2/+TYG2ng/GZbgBqTVJF7SEQGOsIrLSiRB5mID28tk07hHrQB5xU1jCaxcHOBGVgxOLYFqy7ImOjAKxKLEkMzyKE0NOxUr3T8xID534UioKw0SqznbgGIPTZ5rdDUlIom+ablSeQSZd03PVYtlDM8OtHFFYdyHg/xZIK6Rt0jxE1ZadMqFeKEw3jsJ+z5143LzyT92ZzS9djRJHHOq1P7lqFulUNhuoJMhuvDnB/TdxJdkInnsxIvtQbS0Ur16X6LepW5gMwR9c2e6kjjPlHMoaKBf9yNMunhqHrQOlFZNuy7I4NxwJez1mar3k+7w6u+Y9IYhgkVJXcDDEDOHGDnx3LDU7xXEbfkSPV3AEe8rbzU45m0AXEF9k2tMsfqyz4ushQAYryxDsINzVtKOg9HXiIEwQ1U68iFQ2guyn1im9NSUVKNgDn1g4iOUdDh9cnIGAF0CG8d8WsweYmiaodiI6uP6iI0I/9ScGBkZxKRIjYkSEXNFbkT9CKLWLRtOHTa1GCw4f9t6MBHIrYtMPnzv2CZrEfob/ri07I/OaKFkNog26bmTY1S/Vjb31r4vHZfgX7j9HmO4ck+xbt9kdRW6HWy+uDxHe89vWm71tAF+afwKwSaBaiJqKfkgt6wU+ebgJ9EizkkzTUsyyryO6vkhWxJMc+vwyCaOsu2yeWdplDevJVZe/ITlJRylVkaj0yMicAcuYsWyfRMtV6ECP67GmGY36AmxqmQhhq5v7o66y/rIJek/MSkT43jS7wI3djYjNv6VbgPLh5N9jusGap8RGU2sSKgH7WTs3FeQb+XqtrqEkSfVkgedWVzD+vG/hpbP7VGbnsTCIuifkAqQqWjB5YF1lp4dBKjRPlHpsXZ93aDqCCwJDhLt0GZBUvcwDvs01zjji64uwqpX/8iMRSTN/7VB7ZKB+PKpHbaUtHUhySfECmCkD7w1tEX5Eez+KDkz4fsT0ilCNVDOdsmLXiO0mzk7TZSyuHJ1aEMQHcL5MhyRSCfngiOlCTZTbPC5GJT0qYzasGjbOjZAfP7a590ebrnw9NZbUepkihbZ3dkZUmI842QWbXY32Cx8X0u3NFphhOGHqW5/u+xfRs/jjrBZYbON5GibjqccxVALm706PHozqgp1HllfLBRbcCecfvySmBW61jgLBB3Wfwb+55XIVEeSROnhVCiyVk01RkqMP8gcVq71mwBNdY652bH5RfHjVla7kmnXgzuis92f13GtCCdNtdRG08izJIpQqbECF8+c7cnib0YsO4FvpEfznvwBWv/OgwI8TDMrRP6z6QCVfCZuBVThzlgcq6VBxpHMQqr3f4ywKa7dE/f5nVJNNuaJylglIn+Zog8qAJ9LN+cGPNXK2aIVl7OeCSjciOGs2ZTYA/pUjAjLi0UARXhc8oaSc+upsAGJGqnNHrBNIDNg5z/6BcA1IIcTfvhsBeLkp6KN536ulcNSwpWg89ZSlPe/DZE/9l6YVlt5WX9LJaNnwy++awG4KBpULqwYN8vrPQ8IgqGMj48d7o0m26Rwaq6p1Z3m2S2d7pwCI+VV0NjmEADq6hFq/ABv98UhIqrSuGx7YiE39pyQAagunWqFU6ehiLXA7vRNYpNiViTJ6NIvPLlGTPhcdOZdnWm6jB9X/Gqrm1LgsOHEYGZ5r4H1bZ4sFz3lMTDAqty1YwCADPVFDIyt2pGApGjnhqSIlNONIWCo7aUr9K4mt3OEPQSYbCK8w/L5xmGgv/K3b2pnXuFv84ghEm0ioIbUd3j0bm6ekkdia2S64jmPNMMKJJnhTfgY2Olyfh18J6r1w1uosZ+twZZKQ68lAeEUseS8nL6ZuON7pC0hQntbYzCPDKRFbpyWdgUDFoeF+XXz9VbEDqaxuX+gv9NGSl+OGRWTqwml4k/pel95KmYByftn5iBgmLAuZKGWWZT+AIJubCSq2LAo24tIpvh+8q0Vdc+R5q99FDkv4/sZa5ww9fl0fC6eVZsKXIPjX96GkYBA32HuhlWmKl4/NJ8P5THQEg2KjsYqkX+J0IWWsWWW7OED7e3mZJE0TQrokvR3oDjkVef1aSbBs5gEfKgjF10JSAVYD7l24X6/Y6WQqj4k2xcSkKUyg5AbnNhO6S7wTntMKE6sI7O9hoiP4fRDR0Coo5kgRdEu6KXpFSawfIhpSEWQ6tnkhrTi6tha4ydLJ4xCZQV6TcCngKa1PiII9QhaRrfW/6VY89bt/J6ymBrYyKpuBvH7bROxOd6theiq5qEdyi96vqYj6SbWS52iwdkdt2NVfaDgceOSrCcHq4Wgd3zF/IyTh60BFKZLyIuhr01XG/g+KjM0DNFrAyb3FfVszawfGKhKjMQzz5yAQsv47GEME4OcaJBiwRrcbp8uDCe0EcseIJdTaCDy8EUdfbD2oSTvHBRngVYXcmgwPQOI3VOBEDi0aTJWmNYdliBwa/BoXWIo6y19Koy6RJzeVMh05l21ikjAMJIsNo4E8ZVXkTbWqdjchzQIHhrfXKQpCckGzm4VPSFAB2YJGDar5lhGgzIXAd+CcbqJeyA+pve8uLjdm+QHLd4iIyTz0HMaY+3/DfLS3SiwrSYiqnR8DxxpqAGKs7fPPS61mW6mx0LbJfCbTh8LgR7danDuaapisAp2pm9nCABTl/GUDIhBbgyNdl3o4F1vrt7BgIp4CPiTSHT9k2HI/FdllnnbZmu6qQ8ddalLV0TouVBJAQ0SoFbTXHchgsJS7tTI70+E1MjKvUoWEx9RXMSHQSO2p377AhaHuorMs4iZ9nBYCIJPhnfD1UlJJKBk4ey9p71PhJlnjHRsD00KPgbpgNr3nXbwZtkuB9FFpnQ16iNPVDFhssWHUiR6sUydKGSxJjsAda2zpsE0L+N3+/2HYfCyoEaSi0HTZ3qhqQpftrQwge2dEFa+wfO0DX1bOkR10z1Bvm3Kmjs8OH9P6DNTxg+y5dsgl0F2FojAQal4SYvJ6lOFqpBJnmMuNJ3CoNJhksQU69GTRql5iSMCjvemXD6A6gdSGIreyt1K5mYHyxQ7OAqX+Jd93BT4V3fchv6btruxmHYChHWeKt0K9jMjsTHsRXi/O+UWsGH3iECZ5k11z9omj0rtrqAp52FzD/UhHknpecY3yJ+X5VXQ24kG41ESJw4xtOQ6Hclns8UPQE21uC5Q5D2gbGql1hAqEaYy22KnV44Lf7XL6W/w0MRfy2nJgw9SZY5Qz4ch7xkwNhQuyiJ6XYLq4nG/4HB353mp3uXOi64yK9wVUkr1LkmHOOc0gNP5WnpjOIPE6Puk7U/xzumo2iUu/AnjiZO/uva9gKiqxD2+zvrnr/CJsb1v85JQuxwhv/BggmBO5j1YWAjbqoMCzNWyNqVKDwtyjdLSWe83wmqaKtqtGDKJyF64vPyepbQmBg01LIvoBL1jogbQwHekcgDevBCGSZp3GX2HdZ4fhrdxL0V9WaFgKv3NoB0XL1Na4oWjs8a1IKyL8mkcu710zkKwif0flB9YyI++jrFiXSLxuOvfnrs2p4FFCQE+Aj7Arh0rWCOs2V8AJPyj5JtyDJqclTgI/qINcjnnT/la5Gc3NzY65bqcHyJchlHFW7oPsiMo7GCU7F/dFSDBHYstazCsk1mbFz4QvvAmyWGNW+s8Xh1PMUm0BPw3R/i8IjFWHBAJqZYJmpvq3OPUberORgzSQvmR5Kcd7WXI6sLnzQc3tinO70ISjy/t21U05prHyzq1d704DsOhGKmrAogD9oYz6X4LPqEsl9QcNu0Kvd++bJVmSWtM7eHE1qSM2bPJHIjdncWDRTUX+F87u98toYEGcRfkhkJbnu6VlcDCgdBWDatM/wY0Ahvxz/LUrKEd0yQ1/Q8o5Ag/XQobTfF0BFSkoIUyJVB8yeCxEQPQXrwbP9oKERXzl21xo6ugVMCWdJu+BxH+IJMXR3RraVIhdVs/1LiigVexHgT4ByPy9B67dtLj6aFVu226RbiFOFY+lganj3dfwDmPP2hClVzRgO4HGDJlHkVyq1we7oSNJrB4KMhlxYNADZxTZt79U1XFglQiR/Fnu6RUwDIADT4D6l7WkH/dVQzzurR3npHjGgvTTf1+0xrCymmn1hxQcWOsEBich6eeBCcWFbvw/u8gQCEf3YrRwNPyNfia5VAZ68WHjhPnpoOrlYiPQyhEBFTaU1UKvWxQgsIyaP6zHDnzg/FywHDNrpSLvvMxqK1F2SGJQ9HkgHSnnJzWt+zDwCeXs3VUhSI1yYT/kXkJoKCuTpN2WNo52nQXbvQKBb6WQM/SHAO3YG3y4MN9rpoM/9GGhSHaOls8ViqjS65IzcOvgkn9ZejZ4/RYdVOQt85tcsZFhW8/ZeM/xM86VS0JNUB6b8X56jwzBFmXDijb49e5huK0ErqdrypSWQUdyL9Zner6kbV/O1Q5AvdEJ3NKte62xvreJFqsL22+LSarV5SGYbMRQSaMs6LkcZe4DMIW2aJvgYai3qWL97uV676ufiWRf15Ov/pwjqSJSIEaXcA2lCD2rWx2COczx2HO6rp1cg28dF9sxIBz/YOzEw3kB3aLDhD1Mdp233iWjxyUlss3Z0X1FvSMjSh1ej8Tb63ySkRPduZ0tkGZD/hg20hWRzs/4xOfaSf/85yJRGmuG3L4QyRQcsk5HMfbC6Jf9BxnRskULVKlnEEXxuoinQIwPA+04eDSdDh1QKp6/f03cenRo7FA8zWJyIh1UWYO9NI8GVKh1mz12A1/9/PegF3fr3kTDfOMHytY7FBm/NcXD4knTiv6VUVvFpJ9wMdqdN171qw022Xsw1RxkeYUTBy+ed2jC2zoYqWoxT7+78Z/PKieTg8Qkd6cP6MzsdZf9/j58+LSS/Q2k07cAEN/GvDFlorFT9NPvgEECYWTw4CBslJcn9kp9OszfV96XAaYzg/gR7lkJrb8PU+YH6WfBykWv5rHqgaty6zHA+nTj5QeydYBUoZK/KEisSoaoEDHJ+AmdbunI6ZfhR7UftcxguMCYjsJrRyU1UusIx1KTFkDoYo78VN3i/wgfVJI+0Z9PQg5fyPOO3ZO5uIm7tlsY7ExvWCkYF4GzU1BzIxrLnA2KMA/etq9mgAkaVqW111t4DOFJ/thU8+zT2Ak8cOzx7eZEixQjuE92ZDaCxbwTWRA5gv+b21CaEotTPPfAWcPxAAApFBzaQ+kAAAB80AlFgBAWvO6uP2jMNJDFgbi9ktyIKlg09rxxdr0SJptDr/TUtM/pWNvPb1/AESaRCI40Sn2irn54dIASHdze/1aqx0qUhnhH1fWBCvu2iNCZ9Ch1a8/uuFirx/ijTCKiztjp2w5E8vRHvWqgb2Rzr1SNGLdL4UtPT1lrVXY2TbAribUTTVE34SGKUcVh76PKq71Iu6D2bEVYzFsN5Hpajvbs7KWxjfLGCH2TZ+Ty9KC5mhQw8TbyldjDR1Ulxce/Vu/5u2dryFQNpkayL1b4kZAxIPmPABTHSEzXj3+KqxsQviOjC3AtLTpRV1CvShcZfOGHYLWAkylnKOMbddMeJpwvtf+6xxiIxMCaYrx9fYKc1cGfNzmIxERAYzlWZ4jLLTMOHuTrIgLvJxNG33qoELvYUicNGe7f1QV0Vll4lZuewH7F/rBbPVDk2SY/U36yO1cbvpPdbBUEBJ0qdjxdxEKzXya/0yTzueIvLq1jhA5G2RbbYZwEYKpiFUNJQ6Zc3SGuidZHiBmdZ5vHvkgNcad5SuvATeb8FzBJK12t7rtsDWwCysT2iRMowVVjHTnAjeO+PY20RpE8HyRsKU2RKPHjL1UU2M7KDVjIwmq2XZZiSAqBUhODvELBCkk7Nx3G+9jiivdeZnZqCzWVQc14xLx4j1hw+/+DHVM2z69WBy0oro66xKH3Qc35xRgi8TZfIvJ6elIdpjeFRSlSAvu+0WgMu/GNOXBz2wwjHnr/UScj1dW/xzQODxoPMH4QTTvHx2TU/i4Nv8m/QlJDZBip3ijDbDIZP6HvKRMq65IUl8PkrA90GJGw/fQg0D9D/PSqavQlyQJFEqnuSzw+6DrlpkVzWVkglbmZpK/4KA/SKlq9pdTV7KzyDjDHO4QEYYjMD4Vyc72iYiiweS9cX34cia7H6hL6nRwTljF8VXG3ekjZXXgZjFVoOyaiwUpCFFvMYAv/TUFJ0sd3Ouzp1P9V5muq65I0QGe8KYYRYhzLxQbIV1CfXSCOpaQsm1qo6gfMP5IOf56E6LPe7pMRBZr7R5UxVybGFS6Hk6zNAnp39dFQjgBTPDW5bTqZbgvQIqcUzqorCDILJKinQ7y/Q6IxR2rORCkX49HYjAupyFF+riP6tGKCIACfmFa8AAAMj5eLXRX/hs5GUWi67Mg1EVQO7n3WYOwDBH5TV59UOOAOfRklLssyzhyaN6c4AFv9UAAAAABoF3AAAAAAAlao/hLEs9YvJieMYpB/9fZTXhYhh1CocA6rTCY2gyGDAdeya7Gv1LqVP+XNhvWxrWoI5G5i3aItDRo1xgCQ0mdPDL6S7R1yrLOYJOn9BKov8gre42c845bAKEuGBkGfZEayjtTHYb+lfF/k5B/J8Jc0DCqiKC9KfiAtwfdlcj94k+I+QMjlltEgaa3S0ygQ30Qm+rQuyC/ZAN6LOW9S75BEkdUxgDWJDpbKvQtK8Kae63PrPPR1W03cxp6Zd+eOHDPMpUjiAuL1GaKeJ6Z5HdA8ExFe5i18HH7pN7Zj3Sq1U6v32uEs9PKNm5/Yf5LFntjyu3cyU2CCUv6cqCPrJUaVWNS2kuOuHmRLn/sLL6VppDGv5HBQVsd0Xt0OqeEf8jJWLRlRmBtNOZKGRXdR/74IKrwG2fBFELYKGxkU2gr3oSdAKTWAPyIBP/hqYKjV1LTd/TkoO2UGFCDN4MNMJInaTIaIcQEqYElgAP/JBz4TgsogHNQHjDMmvlnIxAHt8vgbztawRMd7CBnafnHL4J4PCvBb9k1RX9lazHC0FbyvGO8tycoxZ7vya0ao3xXWyHe+GhXRT1aS25s+S+YaghLfJzCKIl85REJIpLuY0e0H+2xQftoiHxDPSjsjUTntiNeIghCU1giGMs3sGdCjJxywYc8K+Y5C4a/3xz6hZnTYmnpe/wqHP875Wfh0ED+4l4QimKaWYCy0fHADUfSqIb5nW7paphLpTYd336o/TVpxOH/nVgPcrFTMkNVQpg7wXnXFcGr5gfBzKuEKUGsIOkpIfXHVimEN1y15o2cY9nVSxLCIZRvkyaDKa4WGw+oaaEvf+5sZ66hNv+qND8mvKdgqo4QHLUcIlS7HTCtyTDylsKts5AX6MV1Jo+/C7y2nIxQ37nuBw2ypBAwI6MpxZdPn9aG+s0W9wSqNedugiZJidna+xs5rScT4AIXZ0LbkpuWV4iJ5RmZ/JAlMwiPzS3WHYoE8Yy7ree9FKpcTPIMEwkMTsaxppU9CZ1D/WuBGMvgs8Dj67tpEZDCZzMq0tVv3pRlz92sEVHjA879Gut29d+ztOxp8VLe2sm/G2ypI158/1xWqulGbDsrj9r8HCjobHM2DQMGAPK46aSetKpd59+/xnUhRowjNlr4IV86bhluGFbo3DnH+c5wY/VPH0X/CrAsecydGNYcMnJYIIe471OtlEO5JJLXCXdS8WBmuSW6YZHYNR3fMNsk0dQbZjDQrrX2Q55zmUr/tZ8Wd3FJ/odzibeaRHkO2WxU2v4JqT0VGhi2RXUzWxF1bbtTotp8Nw2X7wUeqOccJjAxzkVKCbGvaKn6Xfu3lkv5zKrYF/dQxOpC8O/mOph10NoQuHM8XGNFSTJWKaF8r884v59xvqolZhJtM1zxoiElKk9+tfa2WRvwnZDcEQ4AcnYLp7UP+mlDMCOo4Ag/mPFQynoED0iLrDf6NCCYp6b9L0inADC0i215qfWy5VdAnDtzvaPMQ9+91AMxhUUOYjrgfWnoL2hxt7jP0UK6ZPTYRxLJMyU77zErmypBrjA+jI5+yxtSZMQDq39QtwyutdkDf3in9Y2FDOX+1tUN/4gyOzgAAAKc88ZxTBlpfVNlJXwAGtxCPw03WiFQ2Oe9yBV68meTalYQK0mRakrWdo7uogca21crHkja9EJFVIFUOlwkUAAAAGhtiOFXi01WJjWXFVhMjHJYFdEy3xYy71PQc6PjaFHNN42Xw6a/JkjRXEW7x2zvcL/ttzu+n9oUZbrSgNOWAaTCf7vpIbuMAVQ6Lt5YfQiM1HgLZLWuPd6KP0mMBPfiYVUnHouh3sRC9ly16vJ//SZEWyTA3lVRlfEBRdINReu1wcNSbuTZSl08b6xc2k6f1S+9wwKptvfWnpfnzmTdEW24baUBGiP0zgJ49dWlj0Ue7ZbYEN/aMS4/w26a0MI25deEuw3ddrg+3fkVURyw5uxm9gzLTZ1gJMy9tkktGFDAbpOAv1BQuDagE+Yr/UZ+AaLQw0m2ao6FJHrnitzZUkfX2s+RcmZmU/z/FRw+/aurviRSk9dnIdAEJJZA9oghTYo4tgvD8OXar2VGLU367wdH7OilEl0sKKtgodV5XOp2vYu4x0puDggTiJ9kUPefiuWv/HZ43openUWl7sUnFUqRmk+J0K92mBJM+Tmv0fURF0RX+PzIQ8Du5F7Lj1L9GRmGWxFFFwN9+TPUA8goQCmgJrRAY1Gu2hN+G00tTH9WvGwX8VzZ6XOuu0486d19VVSWVHcmf+SqPRyAbQWWew7bJEX8WKo7jxZlg90Zz0CGIS0kkskpP1NXz+z+7kOMgDFYS8MXjZdusaxlxwVOmEc+c+Zwzj7HujeAKc1FEcKgMCdpnZY9/1kg9qX7Lrc+DdF6V6x24z4uAcOg3nungAV1basRuzAAqpeJVuhbzHnPEKhlLZLc7xqsrcP5Ehe8T3JPZfXri1f1gzGPUW3uktxgKXxe4VtXd5ZVhGz8H1Yg8iPsmtkHZ1b4kwHk3c7bi4/ZrBZqGVX6uV8MjvHlXtNfYpRavjXCRvzeRU22xns/EID3joqIcumR/Q9o1V1wzWK6ObKXHcpGGwgWeQpePhtBja7PkME9tZYItTFtAv5lXLhbDx3G7kzp/V/Jl4/oSTXMwZJ38Xjb/xT94GPDASKp4uXTDcQDkATwJ+IL1ume6R0xUjoTcyzE21UQFqBaX7/6WkY0606E1rxkA35pnCeDuYhSqs5T/JqAG6eOHcH2cyJ7dYB4NB9gT/dk2ZbjTM66x7eFtWWdqHfuRdLMsVO4yTTCYbgn8iH9ir5TGzHsUQYwiPfJiOeWrto+J+WzWqkIo7EOQJNYEs8+6+bzj8oN6c/1Ldd8HCSLiSWNFFFTr6tW1sUUeQcwlrIlqLB0kpCFLlTIrTI622kG+6YepANmKkKoT22W4SPzQ5CaOxJrMQlNvo8rQzAh6tGhUTGSHirbqX7pUjzkPa7oHBo35jGga9jVQKVZIpVtMulzsPTDQgVWtZFpNO4xnRwzIkXfWPm6uydtlIvUM44AMSxjPvhMnP49B5ZV/rY1PEp9J8s79pxh5sPOMBWKfXbp/P4NmXVnrw/JeObiRtQi5yNGgk7i4Gbk6IaPinu1XgiOec6gIpDMcbTjqfRovtFnORx3QeX0g+b5D8B4Vyom+/EcLsXWx1pmdMZHr/13heiRv9vhPNHifgXdQZ+oWDan9cPB5kJzLn08ZBtulocof5Gp5hq71nmIF/TLN/lXYqS/bbsUFjTZfvws6nmQg4DLjVOjKhWeCaR3aTCT2KJBeBLG+udpvqj48lhJ9XvOGNz/lJ7w62zZoezF1viwAAAAYaIb8+tT+xta8gIGA2IMwXbEYMzEoqnedTrf6Z+A9F3plWxohwiOlygCBy6EDD/xE+AAAAAD8oYAArBwiiyA9Zqpni9S0ofqxwA4ukQyaHwTjuw9YB3Wbj19ddHohxfcwkI/Tsgfo3IIgC8ncOJx5aucnvYNG4Xp/X2nmyq5mx9ZHufpIQYmXxXHwyOOmmBKT1z3YRnxfmjXsZAnnWhmYVQrf/nYMKnhD+TBGz73+HCLdfkEv+UYG6H7lltAX0KX64gt5/P32x7uaTYprXfQzqbLOv1RzMqVWD8qq4PUh0lEzZGySxetRo3ant174ELHuiovSp/XvsVVmx2G/FeKZZMOg8aqF+JCR7IgHDf+4SYjpITI33MFSRU//OcvKuPSSUEkJd5T5iTgCorkVN3AhcSPEryXGbvpGIKEPpPDwtpKHafrOw9AHy2fti5XWq+6yfkqMPdg4sMdJotzTfQlfLdDh78MLveA45wX8xfLiJTpKY/1VCpvNw/gvConhAqsjVaYCaoXIrxbI1ywS7JbjKJBPmpB3QGmO6tXVglZ+tFq1C1z/H8FTYparFK2CQ9+FwGGcEYiuBDPYme8yvPZ5wmLh59RMUl9it1yOtqKFIDO5HogzYRxOBx8/aHtYadnSstodQByBOGG+gGobiIfOh8UnuHjblupppR1MaiN5Ksox43oBkeGx2zX0uvCRc9Mu5uhssLhLVlSbBci+TDoCAqh3uTu3mjktJMJajtX6cNlnsyAGYxhMW3nPP99w+I0yS0dd35XjFRqKkmauQpADaOCzE0G1GFL5yiO9y0BM9daajImAIcF/Y0ACFfovA0yAft8DNlHXP2Skxh2oa40CTtG14IL+A63dwYt5hvBECxkQS5SxMz3mw5AykBQTStUr0CKcXnuMjgcrUEcCLUqnXqUpiDxZp63gEpmW1gX7R5mppK2h8VUAH5dxGujeoTz9r8LMpdhLm/3pAPkZOsERInpFtjiDQyhQkXffB8atMSw+VU+5Y1luAB19xhkG4oBerIBuliZLI6TVaiE23QKd9CjPSF3Vq8+vJfqXpZZEwWTqseM1f47XCCvM8hz8t7WYW7NZ09QJMMi1I/lP4twqHTXab7nng89W7W4VDCSNtnp2rXpR7x1l2BON4AqsO4GyOH0U+Kms6wdaja28iRWWBZvVgvqUIyIsXE5Zoi+fy8M2alpdl60jzWplaTTreIe2jXZUut/IDCVM2XQ9ZqOMugWoCtDIHulDD1EmKcq0BaASkjPtU+d5S21egE1MJJbCdNICQ0zpZsf8D2ql3nDdjIQRXMnqvPFQcATXo1vXeBfo0okEVp2fMGPBJI02FBe+nfywSfmzkvzIHJnYRm1yrdfN1Yg9FT6INThtwJQO4rDMsZ7IkXCe1w9ZYmhDhzLPRudk7xfeoHwDi0fTs6J7WDmzoRVoFi0xe8lLbcvlv0D2X0w4zAts2mT2vuy3sh/bFHI/4+P+a7Vdc9fkDrPIFqQLY8BtryHKFi6SmCVg7x8SKM+8n80iW6x0AGNPfkH/BdPRXWUcLj7HlgFFwDcFRTZOS5cDzWGgAA5DpyikKNneEzgoKuHTcVxgLBrfTprFKk+zoesN/SQ2LBaUAEc6IC0RJG4m7EOfwWDEpqWA/5nCWKph2J72IN+0aSoMZVWPiaGoyk3/IMwAEjWRhjOIo19k8phV46V0FOXMSUJxA93E1TFsDPhMzULjKPGpVRRU0cRAfgHGoEID0KyYQCBWtnP5vp/gJgBO1+M3Egc6f+6RfsktQ/6VXIbkypS7/TdaAkb5nk2gfcP+N0/u2h/LzEzz9oyMxxkoUkZCFC4fYVNYD5yfv6ySHTKcKqdwDptiINsFmiqTwwy3FPl6q9gk+ROTocnBccSwnIh0XhlD/O9Fw6PaV78/29CGaZz4N+EBAy0kdB/yXHOyrlp+BSdox/hwwELMcnrR0oOcYhJhX0Gz/7Qce9oS5QiqHEqk+vMPuB1MohM4lfqqHX8UxIafJBTMqGyuzG2g+VqbPrEFM7ONP02xQmlmNC4P1qRikgXeLTawLVasqtneD3ltULa4q2uc4qqTuQhplb2MYkETwQMnUqPtH/34FbGhu0B4WEv9lCkOBRS6ZUm/bdEgS2pIf2HBRUyOlEEg1a6tSQi9gJknxz9ZBae6wtGaT0T4f6M8lQL4+BDuZjBAPvM4BDfx3BoNJa2lGqD7/a/6WlqIRLM8N9+FfUb1i0mOzARcSzm/HyolV4ToS21eSZUdAMmLnb2ui0OOrOe4BrjVhvDZiVr1F+xQt5cBJPQH94MlBiOkIBavpP5F+IY6F2y93x3ybZMxtmdIMUUY2quwLkHY8EeJNHRwxL3pu6tyCZ45JGqRaMuVmSbQguPxBSTb7Dubff/e+Oj9qVCMKg7CRoJU2valE4fugzBbl8ReMEMHZRjHz2umN2AWQ4TXrX8GhbBePWh0UBOYrKsBIBTPhQ6633RpCjd35YHmWXIbmmpQ/bVLokNvGu2qcPuiKcV1GT5huVQMO+qqOoiB81GyS5WyGx5dalkH0ul1vcxwc3bMCiO7YHiJ8GxwcaWlGEUxGPr0YPgpbFdn9+ieU31rEjXDPGPOqQLMDZFpQ1FGz+WaabY2GS+N7anjBOJcjuzVlIcFiB8gvjWq4+h2/aZZqpzkGJ25mLrOEPHDEb8mWkZL0wyDeE92p3s6ODAddvOrgtvoenHpEniquC1FDido9HPQ6kubmsaHm5ihXHxkOlSq26K2jceA2fAXBPjxNrUgg0/nACe3ljlwUoUXuVj/aKNZ9y1XpWIZTLqfOB92fJ9TMi2BnIRuOQMQo636x/pcLd9c//r5OLVunJ5SVJoDjeYU6PJP2QCo4zU/a3WBfo3lrIDe6dl67Le7N5b/iSChUX6qygjaRjUdrtVRKcFBomZAG792XbMdWAK4ur/EauxCRkFYoEzCmf9hiecSvXRY+xDe6HGPEfnIo2GOB1dPpZmPTGudgYMiKsj/wZ+k6wag7P3vg2K9PCYi0VG72zkaQGe7sPZMzv0qei/OcsrJfq6wpwlbd3n0ddycgRQI1R85LOwQBvf804XeyuD5gkj6qFYcyT316WqZ0VoKsgcL8Ko5dXrO49X1yA68pm+Kt+N4xwZZ3k4Wqchbe3s/ZWHU0zAmozTVRT+lUT8QI+FUB6WgOZOiVWHUmuKBM4GjCJLD1Kr9QSkLin5C/cvtC8kheO1bcSrCF7RZQQE+H3+204dapjpr5QOuB4DCZ8eWPN7WE2YIimPk3kG9pYXPDwljUD1/DjKHQIKgCDlgpOtAamjgH1hJy4UOrN33lGEc1ViKPx4kfRFhOzEjRGgVC6yn8xMPMuCWCQYAvR7cjjTg6DiT72ja5hc5JwZXCZHzl3dwGkj1H7qi6IjBuXTiqWEn8ASTAiVY9w0msJotIa+rks8UmZ1wnv4AG4LCza0GL1sZ1UG5JFoRmGz1g/2svm0zv6suCom18B1uw3kdRlcniCSQY6XNNvP/soZw/gppn3NgAoqsPE4YEm3uA0a7hWmbQ0xruwybUiCd04QZHCaPJ3D7BIhYATpm1SVgZHRalx6RujMYKqBxjQDa51bOdPiT0kfbAM/trQ8DW99XS5OZS4uCemqgLjQfcrLljNl8mMssIIHnUTqlKwsTq7sq/4sS5Oi104yAyO89JG17XKQ2xG3ou+spoRq4Fs/MTg9YW9GNWWB78KhgLONo8HIukXP5NgsYhYixG2CFwvNixrS+vtOnC/PBxuzI3q+GQ1CEwdiCnK5uDewdHcuPYj7rLzdwnrvRJcTHm7a2WSLqk94Q33CxW5CikzlMrWaznMW1V/COWS32gacrzV2hhKba8d7DYB2pbI68z+VyvPUNFFbdXYCOMrgsvYFkYFczWELgCYptKgydj8kVsuvk495JBFeCgTltmKxY8zDOuYbn7XwxR6oPNR4/MCx9ux3k13Cko3DmPvDSlojTmS6eE6hgb4jRLERnsV5FKkNuEzQUByWuNcZqxN1Ca5OAsJeXvLKZMeYsYXzgcDw6Wpe3MDXqh7OdY5HMRcJs+4cpfruJ1KZKgCFAhYHrx+3MsqzqyQuiHSTCzbEJ3rgEn0bK8xRj0f0j0rVGzY37+Q+4Dpw8boUjsOy2jiLLmmDH3YCkXIjccXLGegoU0lONVWbvzz2wzJCuVWiKFYyNA+Medf4rEtOn0dFLmpVvTxBNN0uGPq97qT3FWhzhS8WQAm69WdEoNRK8LlB7Fwlm+eY3du7CBFp5iFufLrnYdmSRpp02xvePSBiYBWdU+1UFvTYlnS55c49iCstCqP24iIWhBN+ZmbjuNJrBe29NTEmIclfGEP2pC6gzjpFCp6nPpc7rmHkw3dgjYQG/SAMNtUIWcbuKq0iGZtoFqC2CY9QiII7VBuz6pOvBN2Os9V/SK11JLbh22qf4/DH5NEmEdG8mCi8YdZT/uqN/iKVEk84ovC6vbAi3+fJgYfaMba21RfcF7wGTOU2kHM30ddtIOdwpn5tlyq+J5fKbK1/iVbSBEQc2IYSN895cNTbq0/ywzV1RziyhfYqz1OnvbisanbH4yZodVaqMx6xeVq/qJCeZS1d9SWiIM355w980jS9ue7dBJ6pEr76hi+Vk7lnzPpS+GSgnt+XiW3myHkQzfQ1mp0ak2DPek1f3h4hw0FR3dAwjEK60AMMUN7dfRsJ/OAmOsam0cpYHCfIsR3ryc9Oyz315/eZeh5NjD+Xfe9/HO5zuce12ryXeyeNfPTH2bgFRmuOWla5ZVIzF7EYGVeEx3Mcn/2ZaVZvacASgRGgfL533zhuzAClzc0Y81XntzYCMaW/TVXkStW6Tt2PEqzGGlG5aCoUTrNT8LAtDuCJltQWhfwg5ePInRQG07/04MAaXU9lagLT+/KJa2xHYZ8dWXB7Ai/XFLPPVa6vBg4VE1MXMu99AL5igSi5kb1JzctANOVza6diOEvvqwFpXacPnA2lsokhoz4eHtizQ7ysMUTbm6VHNKva9MPu+5LThnHcw7qWICE9uMKs32rMafNdh9g5ryS9lN3HSE7DAbvsRh5SKVo3+uFZ8JGRJm53ucnwLxYo13rhoMaMQLypHoPpVG/XMCChzEDZBGDDWSpD/wHbxsYBRyUYGOPYaoMYS4yQYhx7m662r/TgRMmaMsw8fNzs7PZ/S4EBEys6cEjlv4ZaZPs+NfbugoQixzWluxEpONAOijOAocwLkC/qXiWZyNJRnkS+ToSuY1mNFtrTONWVHqvSWnEzWjfnAdcLHTGtr9I4smMQG6Ineflwye8SONyBl4dndPnEvtSWDpwG2s+moihm2/M15Kzmfu3neJEwrzqFB705xC102sVAM6KxKZ2EI0lcCQukASYSAwtxSkIrDdi7mVJqn4DA/4ojL9Xi1fJHbaDCr+0dMNkW+AQLhGYQ/HFsYjrECR9k0ArcmgAGZ5xNu3CTEAdzfrvwrTP+vfLET+StQO7EcALXv0Y/2MQ6uuOCGncjadjyqsBZQwhxYD2budRWTJa2vGLmWG0s4AytD/VOqolMITbotnx08WSDq3yILfxtBSeC7uigF99s0SiuDnJ4DUM6Iut/Oc+v0GVNpfwwlH2OxYx7KZHi1VQk457yxbL+4Xv1poDYlAiyNvABEFKyIEAy0cHlS7XS2FW7QcH1ywDVCY88M7/VGdaKQeoq66lDigm+l0eW2ToQvWUQuZErPDcqxxK//CtPWa8lqzM57PZeUaCOY/YM29Xg/xGmvvxsUimso2A/b7v/nWM9CrMMb5U8oqZzFbnnsf9LJctiW4LHRUc9HS+4D4cITpkbAYM8m6nD3FL/Wh6X7keT5Tp8lzDdo3vLFtq6moZ3cUNK5DuKVN8Zj2hdeaBDaf1rS2zh9SgjGoc4SLI8QvfnfGFfS0rAEHwVhHL1F6auTJqY+YXfwXqJymQ1hhljia12069xNNQUeXgqlqF6OYK903mR+wCy221EapIFn0G3FRg/W8DJg2Tx56pKh+UTgG/u41Fr6KTmw3jlEfBeHuDslZ/1QmcwUhnHJ7xNmf6vLbqhTLzWigu35Y9XQ4Pi8qx1eXNIDefnNjY8UtkDVvIyS+2jOvGxLYUOpfLxq7Qw0LzaCWW67qfcylwS6bC4pvh1BwLKc06CzBn8VcHEW3jLShTbdIcUjtAdgIJ94yJdJUHN8jbuwDRguhKHJZ4FLu0GdecyNu9qtx+scYyI7ZT+kapKfKe2oqhS/lxLdg27x6DjM9QGWlmWzTtkUMH2+rsrxUg9Wykhosas6O4R4kInfcYNHD7Kd9yuoJb2nuNEaxYQiPdgwp24JJfxxaOr/tT031QgAAAu2sNUoFgw8YcWA1WCHsLTA/vyBQDGmFCCg+QAGCz6Y+umDJOTJ1AR3V9AIZeVYzFpA0NRjYuJK8AvAUthZMqSFFQdcXCKLHhvknUooPwk3cD+7J6zLnP8vq+x7WoMU3Wnr6nvZ/zzJOkFd3gK0z0mW5CAPWVDNYV/xnpxLVk3+AUTc749IR6J8GFGTj8eDSeHb9BTP3aHbYXGM+/NH97Fe0bfMYiwpMHviVQiH+Y/5jX/SFMx/3NwovSLozKTxO/S1jN8UYwupK8QG9ButQqr5nx456SfeqHj0GOMq0ckj3KlSV1nfERESefbXONo3/nS0FSPhBm6/XU9iUy+P75QaHbp58jyQUF1Vb6tJeEDns2s+fxcGNaDUdtH+cXT7/xJyBovznRSG8eXUJhPrQqzuR1wIgbPMlPdzDtLe6jgxzemyr2SWGC+PGHULY/4KgKnQx1P4vGQcRBAS6Va5WR4QRur+wcjZrm9DSRBZ9tI8dzR1ubhFBcY6PpBlFw3mf2Mz52WiSAXSTk3htRD3BkBBIx7iTjoirDL2VW3VqcQXHz//DmqZh1lLOw0Yyxx/E0i5G4JWrSv6QdAoBm9DPWJ6M3IM+WlUOFPyq0OPxsqs0VtbbkOCCLhqbe1r8dMBfYHKxO/hImZ1rDiTZjaJ8Te8jZL7E9v+TAd+Y86aezpoCWC7U5iWmoyUh1kjYXm9hxT0twcFq54a1ugr6EoFkJboiDTaKyE0eYSgA8H6764dr/10Fvo331dqbtiAKgP6LaEyETd4ALHk3UehqVbwO56ApTUTGZ8deV8/2UEQ8syfMhjTwDOd5WIgNM/+dJKkE4FP0b2TG1jkz7WPklpN2rvl0K4NYyCp8IsaBVQz8eJuL+fdMZeeaTDcq2AqG/b59OlH12HYjIhFkSLuvwCU6zmsn+25Fd8Bh+gl0gr/jK+UVtY7OvhTOSdcV6i9xcoMtSIehKywbmnGffuBhqV+1xLuHDWwU9XuicIWy71Sr+tDUHd7dNpMlOMdOGuxSrD6xDvP8LkoUXRVbKyDLr+Dnj0SnLx0qPsSKxpU50Vq0AtLH4w4haO7Z8XaUIfc0ByvjVIYMdmiX0BT75ftYmTr3yJgQ+MPjqJROpyuUwy/ArlJIBElrxSpy3iVwtyC5qHmzPju3eySX97rCm5wz32dRFYsQVZhfSfB/ow92xl2MQ8YX8Wvm4j6u8qe3cnsey343fo+SdQRzbbO5KgWrdT8Bw5O2hS4iQaclJtzxlBL5c7Hd5oXJhsxbX07FYAQWUBB6T8zc304NOxO8YIEzD9587xUzdUmcR6LaYYUL48QSSpL03hwkRP+A1SM5eibj6+2Aj+pPv5Sz/tHTPZUP67YflidDZEfanXzBEoQM/A7RmFnxr8oTar6j+hpCM3niPMfT9/hxgJXBM3Z6o84maDnY1boLRzIMmMM8Ynh3F9zmvM7xkrrtmZu8RhA6WDBv3EK1/RqiqPJuBveA2xdy1/N4l8z2dlGPsyfweZTmz5ibA4YO/71Sh2DrJdJkMVrLgzReFQbBuVXmuknR2WZ1VZyEF1tkrQA1ybK0mYyo3CdGpuZhrcrpPZ/SfDa/I2KEehUbrEnPXPwOKI+YCmgIpyU1YRkjxCWanucLS36RN4BNpLsNx1uLre3yBLmx2Uh1FhuEILUg+DbF6E9VT3rPv2PlCTBxVsuxjC8NcMUPqNjefjHy4791NYEpzY+yKPbbgBmiYrMAE/Ot4xjzCSE6oorIbwL9slDOKispD9V2fnpNKL4dJh1aOnUEDV0fYybEAzLyX4VxW1Pnw8mGXVJ8y8gtXh6ir3bW0xmdNdzVOsW/wnqqfSYkOA2F+W0ibJuDUqJXu3heKlWNTtAPM6RjbV//mZSjCXTsA/pg2lbKSG6EB+OObdXO2Im1WvPtrL+At7Qerr83Uo0a5elPSETqNNwQD8p+wx5tr+bwvXTLq9ZfqkMKOK8yjiuzZkigyPq0mbvG4JHxj3a54apT1VicXLNQITGsHst1Rz73dmWRTfyqtRYmIyFri58sWZoCWdSexdvD7KDV8kW566g9KpEtIHESnhURP5lsfFFlSGeKVGrL7De+TUYebX1SXplAR+cicu1yU8HZ3yXa1R49/n43bNxLLF1GaazS6uqzoiofysyDpbG1K4wWCWrJKM/OlJ5bl6KNHYGTJzHly5X4OmoITpI8Q70pwdmg/vY0upWyIbURYEYuCdMkBntx+48Z/gvNbjKgH/TsJmeSKKv6Eef6UOsql/8QczWBRvmdrUul7PNk5QFDcmfbLr8OJ23K9gJN6v0+pMb3Zjm1+KbtA/MSFBtUfwS5scw11YBJm573hpxsbNRRZsDh896ib7bAFOabehx38d/M119mroysjoSyJwQKfm6zZm9Z4jUpiuyZcxK5mI+48B76ykWotBYUmLlTr21YgYQ396n+3camfDVsvtFE0h5uzQGkwpRbfds4XJN/MDmkOqahD3USFC3E/HY6XdxP4dWrMihllo07OX8meGZd/Jzqjhwh7mZa+0qwUVysvtFKD3IYgqvkNl5/zEA+WV1fjYXe0WOXHWbeVlK1/2NE/0uPk7quy4y+uPsv3EB5jRJQ/wBhBsnA/YVdLgR6gPnOJQV0x0j1GP78Lb1gfcWYZtaqS/9nXKe4PofvOuOIaZr7uJy56r8Ssjv/Gp2yhDROHSDEa/MRE7/frLk4NI3F+kKKWobHTZuJl92ugW8+4Ss/HGxKowSruWDjdFQqI6UH5Gh6FR69ihEoXi9agIpoV9s3KYLDjXtsD6ml+d3tbZ5f+Ks1RnOYP3KV5L+iDn0uBc4gLcgFnNG2e5XjygfCohmGpBS7wx+PE1UGSpcjRaLVByqbG5v6AHODhvGKmlWJlNwGVQX4T4mtlpXNQUTteM63p7TR7CXPFeHckz8zIwULrsmxU7ooU3RKymmYIVZAApY+ho6LYp3iGqe9BPsO18kHWzwYF83Kj/Dtp1ETdMBmW8tWq1sINXCfPN18U2JNq0sm/vy5508SqR4v6GNGFvdR7+RRbCfVi67pP7mODQlczwjos3rIjzhj89tYFSa6dvAy/lz1sC09qjDTC3i8Jj73ZNG0DZXRP5d91T131Pj3j490IKdS3Evg9felA8LwVcmTq/8MD2G8I146KuhkzmI6SfSdmAjBuMk0y1zQxPSuieHTufmZ9Rfrmd+XaRP1fzAAQixxTEwtiegMGRg+wmmOiVVZ89p3IEBIHZvrBF8EF2/kz/BjVR62oAAFZNf3WxcAzcA91/Knf9qxM+SE0HiL8PPeGZGa3n5An3yD3ukRJvONM1xQOtgPO+vl9/kpS3cEyr8jXqY9fRWIw1reAK6YwIEBQRnAd6cLGGxANIMOuFjgGwHyLTeq3reSah/6GcP64ACXLz5OzowM2k5lXxhbe6u401dT4sFKwVQe4WjpE+No4Ys3ulZFjPGjO4bDDUCYX++bwZbw5HIr11qvnDslEzzisF8E5KKzvT+ms/J+EywwfwxJ5YxUMK2qq2B5ULx8mkQPe0U4b6Qybimyc+ZyfnZYcuKgjD+3GuR/TgDPWpGqduqjg7ODSQLT4A/CLF40c3MVpXko4jfG2cJeLXb+y8hVsjXwaJ6m5Dr562qT8OYJ4l9pBMMswbEtZ/g5OxGpa/LA6gLcDgbxFOK5WZrLvwPdwOuY+M83bIkKxBVa1/LK6xOgjNyGkulEs62GW9Ii4ay+iFWvdXAuekmdk4PxzBr3Kmf+8lIiYJaS7me9dYsyYdaI5pAKWczeBE7bKCbpS6wjNCgEsiIsbzFBkiND57bbBQuF8fomRWxMM/89vojSWVcVcfxIL3KhiNcRz6ZBdsyv+J7jj2rsYBsdZnGeidjDzJXqiG536jhnqPsLe37i9l1BDk2UbatlKkEK9caJmHwSb3P3n7E6nJG0H7PXc3bkgvYKmGvDapw2sdAwAM3XP+pdt6ObB3zqlOScjuI5eRpienwpIKWLCPzsExzyo2jZ3E66ymCaOFLu6P3ApzPYb2ohb1Z8h5uiH6dc2vvjKPCW0LPx2JEeU3FSDIw8zXsMI5KdmjzIfze5aK2xB1tXynD4oa26IL4Vxq1f0Id0NFBo45x3/6/ZIKNZyb5AkbXb1ZsFqAkPFQtjtabdo+iyigRoLPVrOvyD3omwvbrvzcYSdc6tmkzN0CxUTOm6KdbsBDj89NNILr2pBsjvOqNEMBmlu7ZMnpoRJPA/YLjQPe2taohA0cOG1nz7wp+81OEAQu8Vi/NrXLQ5Ans0VeEQahKmZKgLhpSiN8ttTfmiI47YU+YcIb+5RKqWgBsWoHIF2BATEs7HQig2L6kjIi/IY7LVXFGPHbWZH4uxFoCaIsuvzk90JSqQuqyTcFFeaZ649qtPaDPCjsztmeB36ng+pMQ49AI9XVxHMBRSOLnZPIue4u54GYW8LjrSlK1FB0e8uCcuInKWts3bLIhIjq8+c/A/8G2pnLpFBUWs7tk6dkqaiOiaRR7zD7DsG9PrhpRMrtVghcv/ITCwCORlefSxdEwhEynZ1eELyzxo+V3P7890rFHLnsRYJhhS9XkVveENjqKCFYR5Oq89mP2gLfB0zS5nzXZingqS0Urd6W20r+Dh0BBO6YR62+Sg+AD+VssSfIYjcCNx6+aVwsCdtE9V7ERUjmENz5ePe4PFOIrY6Rwz85WGtSWmHEvJZ8+hE7hwbK72C5kIP5H16w13Ugb6R3RSB1r3XY1svzty1XjS85MllOSu/QSzj7b3+KWHeXmqoeVsQ2zo2gwKWW/ai8DaA8GrsUGKj5ZYngrCujXx28Jeql+Bj8bW8awjygFeJtYRQrJTXH3LuS4fPAAXA7t0CrAWCqgAK8l9rK91oKZ0TvjX2c0VrlUd86D6sjXJ4cjGXj1iLmxgACWu54EHJfe11MC2zPYFRgrzyCbsg1kEFZQzMeBqb7IzWgYk/g4NzPICaY985Dvhvz9coxhxRfwMSKhUKUpEbAonRG+ZTl6PWmy9MAk86538U+XQpoYC7hWSIXEi9fu+01I1jlOaCrbtmuJvhWhydZxOHVfwtfoybdLPQGrsNCFnVqGVLneGW/JKsyFjfPdbW7kOAqvdIeEGf+YFMehEuoc8Kl5Sqhvlp84HnCMcMB+kdX2YURYMkYwLPGid7ZqFEPqRyw3n9G/7zWi2tgInNVK7dNkQn37kR8KfEYflMlFV3hFgTPjN7ThYPncObbpMlPb2YMHBAdk7RX8gsy4zxx8h9LNsbIy2/UdoEucbGP2Wk+LzXv4MHsDGKamlzAg0/hLKpPfyq/oLKbkDIVFuVUMge2jUPg77iFf315xsVt5RDgfOpS9OCxzV2tZEX64R7gyyNqwbJIYEqxrH7dMpjLRsqgMgEKZwI7BoeFPjXCpMXmF89ftPhKhabrm6hvUem+xnPuyYBNSiRJ+8eB+JuDaa1L0JRre2NFB6qM9aIWxdsLsHxa5poOAEr710v5PDWs/dgFIMknSI1pByUATdTDjTFwbw7RYgDzZ3yeIzSk5pJd+qhtKuKO3hb1CFCJ/04fN29/4LQ1hKAWizPCAJK+IK8sHE8zjdUxfvqHi/ud7LZHUGs6OCTHZax1Sd+cN4L15vSkhh/4GsgaqU0Xmq9WjdoQQHsygvFHNrv9SaHGn2to+hhx0za3e4cZs0Ol/b0OLQoAmefMNrL3Dyck/Sq1aNRCNbskOi4xrVSg6z7uFIh6t/lgyhpqhhTQ6JuqYx+/oVOqgK1Au/H/IjzIRIYQkMN3EawdN2/hgAI7LDLL2k2cr9GECjYZD05FlutRYXyQqKVCsy2S6aVDIRBPeTxCkRhuggpmmPxpcTL9mgRvH59JzsUAYhhHMnTA+He9byGvNJRoVNEv2uSLehJOhO57Tf7J9U6371yWAYK0oXt0AA/cdGdkvvKFcCb+4P64Qcxt8Xn2yzzFl2D2gBeoT8hMU7o2AsYJzTdAxV7dKFM6b7cSkBGvYmJKzNVpwj/u17O4/YUkr2PlmMgC2xbk2gsuPJZL/gZIu8QlBXFV9agm2NidYVyXoORSs7tDwGzfGDMJ8rLyUomZP0boeEIpYoiYo/ZKV4/dTXP9/+ydGPC2NCEiIHde5tnFd5y+rXBFkKwxx2L3rSf9aNV0Lz4Qlbrmn5WhZCgaZwS/DqUW6ODMjC7J9gYLpt0KYia3aNH0bN3GRC9UQjYCAVFBYAG8uZRkd1kyLssga1/ZxcCAAH9oeg9jldH3NaNT2W+Z2GPQLMKOegiypulzvbQa6Cc7YSQCl1GkhyU+xfsNSAAVbwaJ/s0Ki9quOgr8EkxxltXAUgxWIbTS4AVmBfEJWID27foPnKCijToLiMmDeivQ6MD3CMiPMCf22R8Gfcp26a1CvIrLy8oFak0hPnF9Ae6g0bzV/j/l99wLScyd8jJkssne531n2TgtTkJhiAQ1IH4z1pPUBEeFzyLvNynUk8SQPigFpUIUy2XaEiAnXDUT/Zlj08dk+K3Tjv1eUBqujR35p7QvNG+desqSRc/z11GYiK2MswCQIcql+dURbWH0weCGCoE5MsUQDvk/Gq2Y2YtxkULxUk1mcveeb7NOqH+F+54EgUjN1dWedx4ph1Y0fiUn9yShnXjR0zrIFTimn1EDH50yRK2yLq9Jz59v0GR9iBih7OnZTPeMhRsU7ohBPYhB+34eywSMQMDCA3CqLY0Iv/jplFzXaJIOzUEZ4pTG+Km5nWgaFRMS/YnUzOkkMFFp3iEMROD0AAc1GG5L/Q9Ske5NrzUIf6SEXmmkwIcGTdBv+x1Xz9DNoeHU7kjR+cjM3ejZ/VsnBVuhIKkr97HNqGnTfuHa0qDxSsQJDhQ1HbOSs4WutecPyFM65wRwQuiY2MgVyml+kd1ml8v20OuVyBVaKwKfcDdYtmd5dvW7dWAwtwXDXteC0qJ96v+utUsJR3aNe5VKrhugoex8Flwf681oYlYBLpTXWLhgUlZEdLcnOJ8c4L26BEilOP5hxWRNjMyCrzMyYTMccrzKcq3FmuvVCA/HqyWI3sD0j/bDm4MY71OZiw+ylgiYmoDcK2MF6LAX4ohuPsiKVJdz1DfYi/H2ETOootCG9ClnYswB5yum9jmhR+vWc8oELf6u4KgKMKm1lNZlaIWKjbXtq3mBAO5I6AvPQAO03xeyl3XkT+gzlkJnX/u86v6VOrKChCE7HmASi6jPBG85o0W/b1ZutUSLsa8uBOn+oeZfT0lGmM1+PF5Wjt2lpjZ08/BhnXllkRaTsxQMv6omTUFIl5Dn/XP3EA0UdRBCwbQHar6rFo+BVK7VzoDwvTSgRvO+6JKTRJDQopvHyoOBtHZAtH16GTd5OKoOHlvTcYg+ct8XfXqBpNzPCqq0YDS5Y6xtYlIrH1CrKe9tv7QvXyjcIiLAE5SyCOAI3gCTd4/ApzZcILz8Bedm0M1DH1//q5uAOm2s+PLW30zbGcgoELgh3Yus9IABz+vo3DC3h2nqb44uHh39mdz19Ua+f3HNoJC59IvPnwl7rUwBn777nIVK5vu47Ja6wtI9BlNzE2mIKIJDC19ZPdMvsHIqcV50gP2kD6K857m7JS+KL+e5UVoKj6BVpc5X7h8aXRmGHAC5Gf9OvVZ1+bbgGxk+/ezaFx46RQYqhXbkp8pTJbxgK66JipCSJWEWxalIQb5I6niUp2kUbBJoqLDxLVxEfc8HyEkeNn66L/Mw7gOs3dVQLNYQjGA2UHJHBloO6DCDV8Be00A9THCfpMTIlTNqHjTCvc5tSavxm9T3kUWm1hAUgHeUQa7SQIPmPtaf766max0Ld/ON94ys7vv5jEYo6ZcfAIKVCYzlmePfM9kcvNKTw4GD0DTDMSdAkBQaR2299Sz/mnDV5Nu9R8exCQRshbt9n+yJ6pP9VUHJMSA+TFupyt/Z/Aa96KJLUGXkS/OstqNfK3PoT7BsBMDgJ9PM/n+zD5RggOcPmukJAUTxcsr/0T8qGhCZ9m3dc48jt0zHvgAATHAByHOsSCA8Cdw+B6Bnl8vgr3v5g4Rh8S6fnpbwaN8lIBNljeOYWmyH7ybbG0J2di0gALWQyrez08LKB2j93urHud+o9PEXFwHqRNb8ZVjwQAAAAC4qGbMA1KqMovpVvqE+bFJ6ZdiXxsI9Gv0K10H15pCG1Ey2Kc5naAzPhY4u5ttgv6O8MWEMvoqURNWjX4M94kQG3c3unQ/ccEvsm1YOkE5ur8+xUmx+sDuA9RXMBMEZMI+1lNqkvLxeedHmrlR/TEe3Tx8AdCx1/KG6F2tD/OcLnFnFaEyiks7T9R9EqwkYK3N5fmeqnajgdh7/E/tfTWh0LPStO37An8YECKpj0vFBWLxOvD/L39RVtmX2FpOAjWUuei5zwQrQ7kZWsK0xFcXeIEA6BkGKOUT4H6HNSKeJ0n9r6agWmFwYUo5Tj1Mv5Yhc8ca+DhYVLbFstkufosPPifz+Deqcd+E4UOyFEady39qnBt8MRPR3A3c56V/AW8ucHsTL956cf5bb0qWGUTnmLvwzxp0pIbOVE1xtm9LVPMidIZa647uEVIcxAv8dHinTLfUNrwmGka7x0RDDHU2AhslVrK6PmMf7YFcLNOqOS4R6YiQ4ZNtlg7XeYuT9EpBkScMLcX/vSqCa+isxuBIbcjuoiU93oCAKjyrP6PZr3MwFVe06rJfx0I4L7VK9hk+hNSgd/pG2TEgiHUJ6Axdt/DdWs3A54o65kFbk11DVgfQKp5RWdUeKL0//8U5E8JCgup//Ynffp4vDH6zS7ftoP/WjAEfr4UVyvPbJtHmSTvHgy6bnUWVE3kN5ykubfMDjsyVsm2rdvj/CzcYRgooZwbBGbhzlrV5K8grtsd1xX9eVfYolVmwXN9qTF+o7LKt9XJOexp0ZGsp/IbTmh73VF5YBbjMnbB5k3NHgRwXKDwRyiGjBilaHIDW+sba2+cSKunxBR0jNO1YEW8Vmsg/0SmW4yq+StxRh8sIoc91Jb5yL8YRIdcJsaFazYOUCPA/bvINXGVM8sZ38LyCXZfamRu7rlo1IqoU7JGvIyWUQyQIxVbRYcYWpIg9m4A+qNR2oGltE99iAndWaJH8py0J/kDK/H7HrSaXFO8kLAUiR4h5EYknkNxV6wlaEyTeqON8H6ANOpQjCAdX9ONGOwfluBIJ+31TMGWCtt+X/2olhGN+wSLS8ts/7xLDBXvd2ESMsfsidNetwPRdUBgqumZYJ1wUk3Xnl/0eBczLtslBIWrGbQymQgFoWP7QLosFyT4QaEvZugO2MxT7MP4y6xQsEO03zoq2zzHX0XcAROOSSFgV6dwzi6W4RujYgZttIT8Z+wO0M3OhjOC/yZbJsbWOWiH1dCvZr8TgfhqXTCkDB2MjbRZql2gg2CTmhMUTnjALEiLpR9I74+m5ieao6xYeyduNyzcO/KqVijnstviGLkCPX+mwVgK9RMlDXazhumykydSCS0s/AzEI7KP0JTkoOd+gsBJYCbGERtc9yk8en6LK2jT+SL+xuqkLVwBICyxNwgxhZfrF+tr+iZj8ZKUSLQGtAC2ZcANkLWCYf2+BKjZ5RO7t0EUCAkehxz51DTHOQ45s+ucKe+Q1lBgg+IJohkGloCZc4CwTG1qSnD3aR50SZJPTB4ysbYCU9TamjqUOGjZYZTrbJJXk/Z4B7zVu5tw8HAxEpGp6QoYdhMcK3ll6RXIDRcU9/nyFZP48Ahd/wBbB3DFTOikViF/jJGzmeOckuRUc39A4O9PANMWWwxn52d6si/IKgW40neWJcGwUiSJFdEYcfnHpdQOdf9Of6auT00QNpSE8c+N+DSD5TzgU/BPi4WzITmY48BGMUkNzZfg/OSK+6uCAnfcNz66zsGMMi/bEuRdtN5dmrd8gx+7yNfW12zf3SBxa6nUFeGktdU9PCxKw3KHjUwCM8EZOElfpf1Uta+UnRIwaVuaUAK+Ou6diRh9xWW1phvxBlz1hULZGoFH569iKabpBf8GzjLftrXqI2JROuME7WKQyTBc2XHAjIw2IpGQlKK3M/UlrG7043K48CUmeHD1dwkJaFkCuMlYukNkkPEu4gKV4f6QGShyQeXZCTjVc9J68aMeVzJYSsFu4l3anHsriv/s7fTEmYRx2qXplvd29+3bchGZKisoOmyayarYQr3IC2hlo3QiEg7JLg7umePvyUG1ZK4+UOIrfux2y4eQ0stpPqtSioDQ+olFaWnQkwGKVio2nPrJq2tFBoRKfSJMXnGtSUnF7+Wj7uoO4hIB7Pg1wdjoW5Js+OQyJZXmVxsYweX90lG+0AjnSXtxBBuSzxUxV8OPCWzT+V6KKhacveZp2DvTSDubYxKEb3vjYCkF9BQ5Ft2GxtER4YyVLtKcpwOM5ZAVIDlPu3w6JTXzjS+DXzyrKPGmtDGs1vFeltPbysV8w/Ygy2GOU3GDTdvIHO8hEozNfez3/CkhRjJOONtGhiJxJ+0jAH2iC845Kw9HiCZ4xiLJxj9WQDTMoj/S0n6mRQs7y0sRGJfnSVVNHCcEQRkT9xqq4qf4iFNRvaro1ef6fGvNLVbSkMj5pZz9brQujMAm4vbKmnklR2iCudOAcLLewQI7AK8xzuDRp2bOBRLLyGGjbWLx27l/t9WlY4nj1R06f3JC8gEmFAqcFJWcnWrcax1oh0BeE4t0Xlpv9nZTZftSlsG+0p+qvXclQvtLByaZhROYnR9iZo2cbqBNJwwgT5bux90cF+UexXLO7KlAy35JAU5St6xEnE34SJqAjq3AdwPAwqpRDcAmUtazMcbM/k0VoxGK0I/ySNm3d/9HsH1ZzWyJ1vzhSgNuADuWu7HajbgABb4jW7YheS5LXAphXh3PUn9episLISA+kl20ExeDklzi0CtTgtiy0OErHaF+bzK6HVTlyM1O2liaNgBnz0YqQmHNAqxiIbbdW0AkTEdmCbJ7kC3B4G+jIFv8/l9AnOcOadv6v+ojHjhiJGhqgQ9iDaQ30DxhESMslGMJwDp3c7t9ZBrHhQdBMWlj+QN3ladhhvOdDgFxac28LF3RfSVqXjvxifBMvUgzXT50FIie+qcR5jBVwxtSWYJTdpEKSy3hVRVABOvhQxdnWdOAoXdBEtxULg4r+T2fJFd+r5nk3U6RUaEn+Mx3aavWYF6BUsPsEqBid5ju3BRp4oIrUnyqRK2T952NSJLdHkWso2vm2pNJvnWuSxmDa1VCifmH4+OBxWFU2KGh86t2lPe2I4Qqat8B3Ptw2TNNkoKDKJh3QwPz8fShjmhejVXGDvLDeza+dU/bck2b3uagfLKXQjPopG8OuXsYsx0OeUfhYGUY7iLTVOFe+jjT97o/lPIxgCYLVzvLKfVGQbT0kICJn0mUk4oZEBjsWDbzgnRqjpvGI5SZFI1HCOtY79/Di6TOGnuieXPYtUPaAFOiOIvV78TMhAI0dLROZmvitBjq/mdCOw8k+bW5vsGO8pBSDSDKeFclhKwiJy+Cv4EKunWnCVBf0tPplXzM4ZpWarpQi1ILLGIewOdus4IY5QFzzz/q0KytG/XqBbu2x32/kh3Lt1LVlrzkQBiJfCJbt5ZCRTH6PrnKDFUUmnahaIWZ01XuVtYBv34QMPzGKfXLxGjmD+vdNMIf4yki5ZOIkXXU/2CRO7HsSghj2+vjhZWmF+BVGZ7RMCCod/BPNZbGofQu/J9xdimNCz36saoJ1s4azLUYGhETfWEixjpptgfF6kSp6y/88SRZ6U2X2nFnM4rDRP7Q7EgljgSz2wHrqJfwxKDPcJC4f+2z7B5ypn0OdIu9z9JGcFKtApR697lzltUJGsm0ZuqYTGcCHu0F05mVeMP0BdTzVQZMrIyorYq1BRZcseusZwMYErkfl4997BGGc8QJzjBxiJF5dyx1Uzscv+BPTQzWttMNB7GUZZFmJj6r6T95Ta1AQwnq9mzKK6Yfodjm2FiRXcDBU1xFxpFbM7djiH9muh/JgLUE818elNLkJz4FoLnJ84HZceimuBFzaIqBO/bmpQEJQjeSp5g3Ix46UyQn8CpHmjUWE2xMrmKx3TZSzuWQl2I9RIEzQaMQda3HxsDuvqegrTIj8UzlmZmP3c5iAjSWcbw5S4nNbhXK5NutA+Q3t0jstFtL20scKh9lS/WVhn57K9kSpNg9i/27NIegr0Acwvlu4C9gR3mEy87s+zegKewVgt9MS5YEiRYenhJeEJEyRKAYoPsBNNa0zzUYcNZQuTvEir9HX98KCDIhg9XIBBHXhlro96Qi48Hy+jQV6DZFgRT42B0AfKWDjaUODkvoCJXFd+eKZ578qVSuyG3qvoJFIWg1Einxq2rRBQNCc2YWSCsfWYX12SMaQjZfovmvvoaxhpVslkHDknOEtPSpZ2TGLBi1s3mJhKhEYuZaCMr0t4WdlES1IkOlN6lTb+fcAsfb9nKtKpcOMP7bFHUXXX9zjAPN/ygT+gmwdshxgmRUhTlQ4tv83yZVcLPEHq6GxZxKNPvJ4Mc/8KxX4hZ7fwaaOxdCUUStS+ITCrgJGVvSyDJHAoexuY/QDsTb6gMAhlHWW6gh55Iv3GctfghYRn+Gdrq1BMyNqa41KBqswwLbvSt6XISY4p6cG2MemdW6z+HK5r2nXOyj+Qxb4nzUCzE8IPOBwglXGcwFDDT5fSM88dJ7l+p3TvwDvAgOAUt31eQ2px7dj2mhTJLeaPObmPylhTeDepBrDcCBpTALonCKVuihEwcYD2z/KYukBJMfa1Rat+MHDSdUxAXdrUBu57d9HIF5+Z5bROYQS+zlPeFRS19NWGRZQkiuEIPwMBx2g+cFIaetwjjgI1iSO4p9wz2+HLSEnT5hRLa+HliIJm3Hsw/rkkMVdGBXHdklgEni90QTHCSTFgfPtWPYKUiiXXuDAJqvbeDuqAvK5m7GdCHTIrWQDkv0LlmntIisYLxO6f15x2wiIejh4mdYcZjuwiAxi2U8Y0HBVOvv1ttRa4aC+xqioDD06PXWIwUch1V5KMKKuZ3UiuGIlKg7Cfuw/46ZAn0/VKbutTzl9sY2DYYVgY2WsJoETNfpF4SGaKbBxBaKIgCv0BR/pEXWJI9u/3V2afY18yEBHm0an+/RtFgdrn/45zpAjC7zrLugKwg0kuBA5Yzmw4HOLgiyZ/4uZepXM3KCBqPaByOOOzcoRvHUBudr8aRfSuEJLPS/lsUgJteZBUGrXaeaCsaVe8Uv6RQUTOVOs3k39h7iymixnJQPyk98tgDW/iompyDMoYEYWfpzQBH09pbJQbj65NPEylCD763+gnCMAGv86wfYft0Gs8tqAlrQxq1qOKbw2AWFlW6X57iuIA3myzxwpqci7XOWdvHKT4hdLw327zh/hlVEr7QK17t5BQAC+QtZGzydaVwymIDAZJXkO8ej67dY6fXWGNiAoHt2VsPFIDipffNJnJFJ0GIHM75zHabgiytqvuaDG0zsWJFvDZ6RLQqwNt1VbAszDRr8izvtiqxXjAWZpWacC8e7eQrtNwJQKQLl3Fc0cnW1pkGu7sejyg7jLFeBUY+uF3kM+O6+M/UisM6Rw8qtWHbEKBV3OITUocHhqkrlSZPxqWv9znQ1ecrQjSj3H8aTIx+qdloKxubQrkhNCSYirqvYim0hbTB3EuUrdzTXq6zKDjs9pr5I7U/7BXkTTP/xY5zKeCBaRHgfgRWt3f/dAgnYaa8WzBaFyCfg+5ke5prDKjg3X/25M1Fsz2L1Dsm0QR6Y2CbsIXVg37HrLWdQ8+V+FoHB5VlgtlZGIMSkmWiVegxAL4jKuQIdtkX5LjhziPfpupVtF7E/bYLAfV3tfkHX1IggRubN72Zdv66/2o0P1EVLUmyjAd9i+hlWFXq73WGxg8CBRr6PJl9ZESQqaudSDhbTo8ITYaHo2tKzIHGYftH7Qy3R4qfCZJ/DoHGyVeqv5+iAI1hRv8sdNlSofdfSjCXqY77mTTtXWkLXUI1lWxdwgJUgv2tiWjdSv5rMzVMEgDGBK4C1ymLz85W+waFlV0YYVuOkkJ7EgfpQXgWITYCnxDh7T19eQEY6E49TSzf56jD9fMxRHkfYOWnk5YZi1PjSKfwimJJPmT59ITQGkMbg5chwLJsG5rVTBQrcU7fjio2VXwzQmpaB7TonpnSIZJoOV+YgqupSyxk6GsxbL96CTus06O6+0QgKsF2v6LJvNCLfpY8U8pD1faTdRbsEFFhEdoPKCoCrZxvz1U+GbQ1AgS0mYWgedSvs/L4p8wzORHrdLiD07rSUeYGGUzeb/gI9Y9Zn0dE2lwBXQ+W7FNXnbHa6WKioDtGYnDNTrAd8dWPgboMyq7vihpWkx0ChMuneOXAqfRIjiyLz+zxAixgdS8LQ6aJdNwmTcZo4lgo0EdvIZRWWdyzhOclNxV6AIPYl9VWgR8g4ogFdKywzJgo0y9LW31hZQ6nDLEtX8IL3KWWYnmdotl99TBuIvmvaH+H1jLGXMLihri+aHZrHpSUrUK96M6RmIxmjwqoPCkbglDspMB/Bm89m2rkYfTZaLU8RWPfcXAgXOzpuhi2C3T9309G6syCOHIAK+RECT9a0ZV4+W06r1VhaQTWoarbxKzdZ9XZlyIGKoG74YoFMW5DZ/NYr4ibULBcZ3dUmNJrQlfD0N+SchveeLMmt1mx/kYPGtMN55ql0M6l4QpQzbQDEVMiq7Uqqub/7RKZwrMMWkIO4OJBWaMhz7CAwOFd6+Vvw7fQIOiM73bCGunUclsTqvIlmRvyEqs6f4+cyzELKNL+vRLeIEf810AcI78nY/SoGWbHEDNVS+3OEmPf74O0I7O2p+Mfkhqc+sUw9Wu8N8s9BUphR8EqTGj3Dv8h9Q5+OtK6bfVt/3IFa4CtcuZZMnuAy7GFX3L9LHFAKvODfja44xaiJF17P8e2eIchVvClh2XZ+WUB7FMzqqe3aU8j8uCZz/GgTxCiHeCMshDwEJ/j+iVM+P9YfHvoqK/MvJ9vxnRcBFfoZ55ueFssBgLRZR4pf6qTh3coOppMXkH4sc0criuX/OrjMB2JSVnT/YqRFB9AtYGIPi31jnb1OT9KBvZ71HwwkuUyVtXV+OAaWpCIv8TQivyIU5BeChS6KPd6J1KpSUa4Tg0XaYlKb9Izl59OAJupwV2lmI5xxgl8Caxr00VjhRIwT+mVMECKkAZCw6w2zCRGjB2WFbKxYWWeCyDFU74woJ83IExE7MMPLrm+QWG9qyZRW3nsP+bsKcEKj2piJRHdRCAGD5raSkXBqNLDfEYD+7an0prwePkwXNxdLAg0JZ1pfgnGYBwmr0fSpLeYQoPTNRLslpIEZ2M2ibP0wPMG9nawHGJFejSDMtN7obWpqWn35/mRdogkwsnTE47LSQYpvFHum9YEXT4Iav5dmBBzfpS8N+13nqrjQoEIa5E5JW25uPf9C83G0ACWx9c8aC9n4Nr5lLTTVjdK1Ut6jDzeMq5LIZuDRBV2oxWy1lwXNgRVK3FBOh/eP/7Tw2EkyGDUlC/6ZuJ9F7rOZZNZcfMLDCKQhuLh0Tj/F1pMh1BtmUN5k4YimYd1n+PmzFp7aOO9KBJlw5D3hzVFwmsny+8tvK2PoBJbROttHdxW2ybbXcho8SXIIykpf1LXl9DpD4VDNjflsEccLUTCgaHxEMM4Hq09DA7cKVY5KlOQSNa8XmRcb/vlq0Rd9lVU1FE1X+0t1P27rNiAd8SYvgqZaN6qmj8Q9Id9bM1MwZCz0mWZKqc046OF9MAxPjzzOhqdlSa/FRbb+8e7IS7OPnlJpEr+g/WQ5pTAq6uvr8Aa/NvTrorV7ccCjJ1IznpwP5IO0kvTGMmgOu2c3S2W2jZcJ93iiUirFXAjvuH24D3J813rZ+f0sWm4+q7Ew5WGtr8II92DFiwEkKLXU/TKwmvXaVcD3HFGF+b9PmZdeD92dcx6xDZkGynO+1VDN/LzNFABxWdL3Pxa5amCRJdFS1zYmNLbI3MjH2Vodb7L7VqHwvZ5990CaqzT8ZPIVe7X/iWbRbVrOZuMnJs1nGjKHxTheHQbjPGLbHIup+1Ov/t+o9CY/4xV+0UxuHUE1Ksz1iXyN7bhNywayR+hsJvstFRY5eFLEcpgLMaCwIWq3uX7S7TaOE8kdPEqdeVyFEGoAdVEou9xGaNtau9s5j1gv9ebIIbQW+0FuYt+AdlvZPVVPglexLI94gWGWg329XQ+IxH2V2SqJlbalKn8RSllVSk1IksTACU4ae1X7Fvyy9Z04QqmI10I6tEIdicq3Q0XmWHKS7ATbi1hB0ImmM8bvQJOnaZaorMo+LNs7zuj/5BLMWfUztaI5omF8dC/bSoysblcvapU9zlOc/6VXr4dExJhtvt6BxZ3ktPrf4ZWUvNmQK/es1MjUeEoJpFyRQUAPj/iYbcH6WUq38ZfUBrga6AL29qQlCYbEhjWX/A7fM/rFMufzcAGxaFHOftMQXrTPftAx5Tz928gHJI/rplWJe/gfl3iYdvDb8GJqsCi72sgBo+sLh7cPlRu4/Siwo3bhXnxC1Rqwj+mTFidIvzEnvw3dkc1ADekCi1yd65UmL9jSIfQgpibHM57CzKAlcUvkfhHF6HaO8uJMb/aPcxHqWIqVSlxN859YWG0y74wmaOx0Q2hfdwj2XXIQ1eJ2vDhq8brpSan1J13y7Gfz7fqDSJ2L0cQtJRrnNdXlEaM2fmhXmIA2C5XTQqUO5SzlnQiho/WYXg2q2liobCfgr3smuflLxDQQptQ7UHDHUfJEKuGbzpe5oKUnHcEDlWUX5o02bqLbhrjny0SsP8bUu+bbeCOrYAEMym2yACQPtQcIEnPY5PBYfFNm//849ASYgUE2GAWJRNE8+PiQxZxZRom7EzTlqPmPTffB6Zb/jZnKdbXksQx2ApeKzTSyUOj+XQmGXYMNASFzlncw11rpTRTDO6ljT0nIen5/dFXL7MEMserlW/kBqgtPZ+nkSMNMKAKoNQLSZuhpjBroIljanVJhISrzHSwMNskj7CuuKWdlkZMUK+eoZocZnxMEFzLaOGTBFgOhmcz2YvGdwv97rw0PKU/mCFtUv8UoK5DtzQhmRqSskgz2DQwXIlK147UKG52X+aA8xBPy2Ma8UwveDZXMjsMFsZ6eE6C6RXWex/pCKhTYRGmYZSe0xpzk/3V4MDfIZjFj7WOZ7m+HIQhk7FUV+puwSpLVHy5fhIBUCrazSnrjh4NhkvR3+YSeRodWsa6BiZGOh15fgU+f50jWQ2Jx4D8RtOJonzk6TWsbf/IkzQiyi9WJ0aNTv50y7sfgGgGJFGxyBBhLvkCPBulWe2UcEUexixkty2E2hkUbKqErcGVSys4bE+6eWdY0yZHJ7ijusJt6gjW4vHB8PZtM8mch0/H6g/wGyTzPngqSUF6+0ogfH9Pk+PB8K+FNTqhN0jE/9ZJi7Fv//6TEcs3e6O6oEbL9nczzpYwG6LPcJLwebJvteuSJOWavXUWZDKgT/Jc6MyMFHbBvtaIv0WJOAX27xiBhCwmrPd3AI8codQpDI14XVYH38ECcQiDk1epCY/n8yx/u+2d0LFrE8q7ZDnT5RBL4DVdUrdhy+IuN+U4uhCOmQyl82M/ip1Rr0SSjFqlM+oDp5cJdXvHxzeTo8W4m+zfOPaM5QvQZ4Oy79o+AAaI0HUjuB+htTNGuleWUPx798tj6R1LyarlWaeyJ54YEdhKfXQ6MGWGyRPK5GZB/ZGw1+TBxcxuWzR+xSrhaqxbKHx65zswVSNiFzgBpw6D0L21DVBFbRQVaerojixtk9FBibtMDeGN8XoWTwmAxobYPfreUuS8b+N5ferrEVTs42LPPVAddqIqBbnfGur5GHBVyTeZ06bkh7pty9axCe4b6J5+DwViNKKxVDgBCx870YYmu459gR4g9F7ujpLgyrr8t6xnNqrgA2LGoD6gsTuZ/jq3u/0gFl4o/htRRSEd6EtW3JN70N3SpVi5A8q3PhY3WlhH/OU2aIidwetWIZ6VKeKdC/9jdy+hbCTpEq9yVZIcvrn9bueVsjFmXseRDpQ4zeyp7sl4Z3pX791Zm2APVLixMCYx5481piYAAA==';

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

export function createModel(options: ProceduralModelOptions = {}): THREE.Group { return createObjectModel(null, options); }
