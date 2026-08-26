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
  { id: 'render-wall', color: 0x9c948b, roughness: 0.88, metalness: 0.0 },
  { id: 'roof-deck', color: 0xc2c2c3, roughness: 0.85, metalness: 0.0 },
  // WHITE, deliberately. This material is only ever used by an InstancedMesh that sets a
  // per-instance colour, and InstancedMesh.setColorAt MULTIPLIES with material.color. Authored
  // at the measured #B0ADA8 the measured block tones were being multiplied down by it and the
  // cap course rendered brown. The measured colours now live in CAP_BLOCK_TONES, unmodulated.
  { id: 'parapet-block', color: 0xffffff, roughness: 0.8, metalness: 0.0 },
  { id: 'sign-face', color: 0xd9d9d8, roughness: 0.35, metalness: 0.0, envMapIntensity: 0.6 },
  // Metalness is capped well below the physical value for aluminium and galvanised steel. The
  // thaikit harness supplies a hemisphere light and three directionals and NO environment map,
  // and a metal with nothing to reflect renders black -- at the physical 0.85 the canopy plates,
  // mullions and condensers all came out near-black against a plate that shows them pale grey.
  // The albedo stays at the measured value; it is the metalness that is wrong for this lighting
  // rig, so that is what moves. The shipped 7-Eleven sibling caps the same two at 0.35 and 0.30.
  { id: 'aluminium', color: 0xbdbcb9, roughness: 0.42, metalness: 0.35 },
  { id: 'glass-tinted', color: 0x6b6f6e, roughness: 0.18, metalness: 0.0, opacity: 0.92, envMapIntensity: 1.1 },
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

const CAP_BLOCK_TONES = [0x9d9992, 0xc3c3c2, 0xb9b7b4, 0xa9a6a1];

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
   * The front box OVERLAPS into the shell top rather than butting it. */
  addComponent(
    'parapet',
    'Parapet ring and sign wall',
    mergeGeos([
      boxAt(0, 3.935, 2.47, 8.0, 0.77, 0.54), // front sign wall, 0.24 m proud of the facade
      boxAt(-3.88, 3.75, -0.65, 0.24, 0.4, 5.7), // left upstand
      boxAt(3.88, 3.75, -0.65, 0.24, 0.4, 5.7), // right upstand
      boxAt(0, 3.75, -3.38, 8.0, 0.4, 0.24), // rear upstand
    ]),
    'render-wall',
  );

  /* -- 4. Big C fascia lightbox ------------------------------------------------------------
   * Sunk 0.04 m INTO the parapet front face (2.74) and standing 0.08 m proud of it, so the
   * panel overlaps its surround instead of meeting it. UVs are AUTHORED, not generated: the
   * +Z face samples the wordmark band of the canvas and the other five faces sample a plain
   * white corner of the same canvas, which keeps the brand graphic at one material and one
   * draw call instead of adding a separate graphic plane. */
  const signGeo = new THREE.BoxGeometry(6.6, 0.58, 0.12);
  {
    // BoxGeometry vertex order is px, nx, py, ny, pz, nz -- four vertices per face.
    // Face 4 (+Z) is vertices 16..19.
    const uv = signGeo.getAttribute('uv') as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) {
      if (i >= 16 && i < 20) {
        // +Z -> the wordmark band, canvas v 0.125..1.0
        const u = uv.getX(i);
        const vv = uv.getY(i);
        uv.setXY(i, u, 0.125 + vv * 0.875);
      } else {
        // every other face -> a 3% white corner of the same canvas
        uv.setXY(i, uv.getX(i) * 0.03, uv.getY(i) * 0.03);
      }
    }
    uv.needsUpdate = true;
    signGeo.translate(0, 3.97, 2.76);
  }
  addComponent('sign-lightbox', 'Big C fascia lightbox', signGeo, 'sign-face');

  /* -- 5. shopfront glazing ---------------------------------------------------------------
   * One pane, not one per bay: the mullion grid in front does the dividing. Overlaps INTO the
   * facade at the back (2.46 vs the wall face at 2.50) and sits RECESSED behind the framing at
   * the front (2.56 vs 2.64), which is what makes it read as glass set into a frame. */
  addComponent('shopfront-glazing', 'Shopfront glazing', boxAt(0, 1.665, 2.51, 6.5, 2.97, 0.1), 'glass-tinted');

  /* -- 6. shopfront framing + door bay ----------------------------------------------------
   * Eight boxes merged into one component. Every part is the same anodised aluminium; folding
   * them together is the draw-call lever chosen in the blockout, not an optimisation deferred
   * to the end -- a part split for authoring convenience cannot be merged afterwards once a
   * pivot hangs off it. Front face 2.64 stands proud of both the glazing and the mullions. */
  addComponent(
    'shopfront-frame',
    'Shopfront framing and door bay',
    mergeGeos([
      boxAt(-3.285, 1.66, 2.58, 0.07, 3.12, 0.12), // left stile
      boxAt(3.285, 1.66, 2.58, 0.07, 3.12, 0.12), // right stile
      boxAt(0, 3.185, 2.58, 6.64, 0.07, 0.12), // head
      boxAt(0, 0.14, 2.58, 6.64, 0.08, 0.12), // sill / kick rail
      boxAt(0, 2.46, 2.58, 6.5, 0.08, 0.12), // transom
      boxAt(-1.185, 1.3, 2.58, 0.07, 2.4, 0.12), // door jamb L
      boxAt(1.185, 1.3, 2.58, 0.07, 2.4, 0.12), // door jamb R
      boxAt(0, 2.61, 2.58, 2.3, 0.22, 0.12), // door header box
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
      slats.push(boxAt(-3.9 - thickness / 2, y, 1.35, thickness, SLAT_H * 0.92, 1.5));
    }
    slats.push(boxAt(-3.935, 2.485, 1.35, 0.11, 0.27, 1.6)); // head box
    addComponent('roller-shutter', 'Roller shutter and head box', mergeGeos(slats), 'galv-plant');
  }

  /* -- R1. parapet cap course + corner quoins ---------------------------------------------
   * Cap course and quoins are the SAME block at different transforms, so both sets ride one
   * InstancedMesh and one geometry: 18 parts for 1 draw call instead of 18. The block-to-block
   * tonal variation measured at standard deviation 25 is carried by instanceColor, which costs
   * nothing, rather than by a texture set -- a colour difference is not a material difference.
   * Blocks stop 0.02 m short of the parapet outer face so the two are never coplanar, and
   * overhang the parapet front to z=2.80, which is what a coping does. */
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
    const N = 12;
    const SPAN = 7.96;
    const W = SPAN / N;
    for (let i = 0; i < N; i++) push(-3.98 + W * (i + 0.5), 4.46, 2.55, W - 0.02, 0.28, 0.5);
    for (const sx of [-3.74, 3.74]) {
      for (let i = 0; i < 3; i++) push(sx, 3.55 + 0.2567 * (i + 0.5), 2.55, 0.48, 0.2567 - 0.02, 0.5);
    }
    addInstanced('parapet-cap-blocks', 'Parapet cap blocks and quoins', new THREE.BoxGeometry(1, 1, 1), 'parapet-block', mats, cols);
  }

  /* -- R2. entrance canopy plates, with the downlight merged in ---------------------------
   * ONE downlight is merged into the plate geometry itself, so six plates give six downlights
   * for ZERO extra draw calls; as its own repetition system it would have cost one. Count and
   * spacing are INFERRED at 0.50 confidence -- the soffit is seen only at a grazing angle.
   * The canopy nose at z=3.50 IS the declared front of the envelope: the shell front face was
   * set back to z=2.50 precisely so this 1.00 m cantilever lands on the declared 7.0 m depth
   * instead of overrunning it. */
  {
    const plate = mergeGeos([
      boxAt(0, 0, 0, 1.08, 0.14, 1.1),
      cylAt(0, -0.085, 0.0, 0.085, 0.03, 12),
    ]);
    const mats: THREE.Matrix4[] = [];
    for (let i = 0; i < 6; i++) {
      mats.push(new THREE.Matrix4().setPosition(-3.3 + 1.1 * (i + 0.5), 3.37, 2.95));
    }
    addInstanced('canopy-plates', 'Entrance canopy plates', plate, 'aluminium', mats);
  }

  /* -- R3. shopfront mullions --------------------------------------------------------------
   * The fine vertical grid is the most recognisable thing about the shopfront. Eleven
   * instances on one geometry cost one draw call; eleven components would have cost eleven and
   * blown the ceiling on their own. They occupy z 2.54..2.62 -- INSIDE the frame band
   * (2.52..2.64) at both ends, so they are not coplanar with it, while still standing proud of
   * the glazing at 2.56 so the glass reads as recessed. */
  {
    const mats: THREE.Matrix4[] = [];
    const xs: number[] = [0];
    for (let k = 1; k <= 5; k++) {
      xs.push(-3.25 + 0.3383 * k, 3.25 - 0.3383 * k);
    }
    for (const x of xs.sort((a, b) => a - b)) {
      mats.push(new THREE.Matrix4().setPosition(x, 1.645, 2.58));
    }
    addInstanced('shopfront-mullions', 'Shopfront mullions', new THREE.BoxGeometry(0.07, 3.05, 0.08), 'aluminium', mats);
  }

  /* -- R4. rooftop condenser units ---------------------------------------------------------
   * Casing, circular fan cowl and four feet MERGED into a single instanced geometry: four
   * units, one geometry, one draw call. The plate shows two visually similar unit types;
   * collapsing them to one costs a little fidelity and saves a whole draw call, and is
   * reported as a deliberate simplification. Alternating yaw gives the cluster variety without
   * a second geometry. Feet start at y=3.60, sunk 0.02 m INTO the roof deck (top 3.62), so the
   * two overlap rather than sharing a plane. */
  {
    const parts: THREE.BufferGeometry[] = [
      boxAt(0, 0.46, 0, 0.95, 0.72, 0.85), // casing
      cylAt(0, 0.87, 0, 0.3, 0.1, 16), // fan cowl
    ];
    for (const fx of [-0.4, 0.4]) {
      for (const fz of [-0.35, 0.35]) parts.push(boxAt(fx, 0.05, fz, 0.08, 0.1, 0.08));
    }
    const unit = mergeGeos(parts);
    const placements: [number, number, number, number][] = [
      [-2.5, 3.6, -0.6, 0],
      [-1.6, 3.6, -1.3, Math.PI / 2],
      [0.9, 3.6, -0.5, 0],
      [1.8, 3.6, -1.2, Math.PI / 2],
    ];
    const mats = placements.map(([x, y, z, yaw]) =>
      new THREE.Matrix4().compose(
        new THREE.Vector3(x, y, z),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
        new THREE.Vector3(1, 1, 1),
      ),
    );
    addInstanced('plant-condensers', 'Rooftop condenser units', unit, 'galv-plant', mats);
  }

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  return root;
}

/* ------------------------------------------------------------------ brand fascia canvas */

/**
 * The Big C wordmark, drawn onto a canvas and assigned AFTER material construction. This is
 * the documented route for a printed brand fascia and is unaffected by the material's
 * `textureless` declaration -- what that declaration skips is the five-canvas PROCEDURAL
 * texture set, which is a different thing from a single authored graphic.
 *
 * Layout is measured off the plate: the white lightbox spans x 385..905 px and the green field
 * spans 575..755 px, so the green sits from 36.5% to 73% of the sign width.
 */
function applyFasciaGraphic(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as ProceduralModelRuntime | undefined;
  const mesh = rt?.meshes?.['sign-lightbox'];
  if (!mesh) return;
  const material = mesh.material as THREE.MeshStandardMaterial;
  if (!material || typeof document === 'undefined') return;

  // 2048 x 320: the fascia is 6.6 m wide, so the wordmark needs real horizontal resolution to
  // stay crisp when a player walks up to the door.
  const W = 2048;
  const H = 320;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // The whole canvas starts as the measured lightbox white (#D9D9D8). The bottom 12.5% is the
  // plain corner every non-front face of the box samples, so it must stay clean.
  ctx.fillStyle = '#D9D9D8';
  ctx.fillRect(0, 0, W, H);

  const bandH = H * 0.875; // canvas rows 0..280 are the +Z face; 280..320 is the white corner
  const gx0 = W * 0.365;
  const gx1 = W * 0.73;
  const gy0 = bandH * 0.1;
  const gy1 = bandH * 0.9;
  const panelW = gx1 - gx0;
  const panelH = gy1 - gy0;

  // green rounded-rect field
  const r = panelH * 0.12;
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

  // The wordmark is fitted to the panel by MEASUREMENT, not by a guessed font size. Sized by
  // ratio alone the glyphs filled about 40% of the green field against the plate's ~86%, and the
  // shortfall is not something a fixed multiplier can fix: headless Chrome's font fallback
  // decides the actual advance widths, so the only reliable way to fill a known box is to
  // measure the text and scale it horizontally to fit.
  const cy = gy0 + panelH * 0.56;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';

  const fontBig = `italic bold ${Math.round(panelH * 0.58)}px Arial, Helvetica, sans-serif`;
  const fontC = `bold ${Math.round(panelH * 1.02)}px Arial, Helvetica, sans-serif`;

  ctx.font = fontBig;
  const wBig = ctx.measureText('Big').width;
  ctx.font = fontC;
  const wC = ctx.measureText('C').width;
  const gap = panelH * 0.06;
  const scaleX = (panelW * 0.86) / (wBig + gap + wC);

  ctx.save();
  ctx.translate(gx0 + panelW * 0.07, 0);
  ctx.scale(scaleX, 1);

  // Cream keyline around every glyph. It is not decoration: in the plate the outline is what
  // separates the red letterforms from the green field, and without it the wordmark reads as a
  // muddy red smear at the distance a player actually sees this fascia from.
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
  stroke('C', wBig + gap, cy - panelH * 0.04, panelH * 0.07);

  // small yellow "Big" on the C's upper-left shoulder, clear of the glyph
  ctx.fillStyle = '#FFD400';
  ctx.font = `italic bold ${Math.round(panelH * 0.28)}px Arial, Helvetica, sans-serif`;
  stroke('Big', wBig + gap + wC * 0.02, gy0 + panelH * 0.13, panelH * 0.045);
  ctx.restore();

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = (THREE as any).SRGBColorSpace ?? tex.colorSpace;
  tex.anisotropy = 4;
  tex.needsUpdate = true;

  material.map = tex;
  // White base so the canvas shows as drawn rather than being tinted by the measured albedo --
  // the measured value is already painted into the canvas background.
  material.color.setHex(0xffffff);
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
