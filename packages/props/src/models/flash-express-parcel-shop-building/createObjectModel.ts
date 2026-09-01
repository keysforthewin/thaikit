import * as THREE from 'three';

/**
 * Flash Express Parcel Shop Building -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging and
 * instancing are hand-rolled below -- anything under three/examples/jsm is a second import.
 *
 * Envelope 8.00 x 4.60 x 7.00 m, origin base-center, +Y up, shopfront facing +Z.
 * Budget (hero2x): <=16000 triangles, <=16 draw calls, <=8 materials, <=32 unique geometries.
 *
 * One of thaikit's shared retail-module buildings. The shell front face sits at z=+2.50 rather
 * than the envelope edge so the entrance canopy can cantilever forward and still land exactly on
 * the declared 7.0 m depth. Every surface pair on the facade is deliberately offset in depth:
 * two surfaces in the same plane facing the same way tear into interleaved triangles as the
 * camera moves, and authoring components flush against one another produces that by default.
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

const CONFIG = {
    "id": "flash-express-parcel-shop-building",
    "name": "Flash Express Parcel Shop Building",
    "exportName": "FlashExpressParcelShopBuilding",
    "materials": [
      {
        "id": "wall",
        "color": 11316910,
        "roughness": 0.9,
        "metalness": 0
      },
      {
        "id": "deck",
        "color": 5988712,
        "roughness": 0.93,
        "metalness": 0
      },
      {
        "id": "yellow",
        "color": 15195980,
        "roughness": 0.5,
        "metalness": 0
      },
      {
        "id": "fascia",
        "color": 15195980,
        "roughness": 0.36,
        "metalness": 0,
        "envMapIntensity": 0.6
      },
      {
        "id": "glass",
        "color": 8225148,
        "roughness": 0.13,
        "metalness": 0,
        "opacity": 0.94,
        "envMapIntensity": 1.1
      },
      {
        "id": "frame",
        "color": 7040876,
        "roughness": 0.52,
        "metalness": 0.25
      },
      {
        "id": "galv",
        "color": 10133927,
        "roughness": 0.5,
        "metalness": 0.3
      },
      {
        "id": "coping",
        "color": 10396326,
        "roughness": 0.86,
        "metalness": 0
      }
    ],
    "geometry": {
      "shellFront": 3.14,
      "plantMaterial": "galv",
      "fasciaWall": {
        "cy": 3.995,
        "cz": 3.02,
        "h": 0.89,
        "d": 0.36
      },
      "fasciaWallMaterial": "wall",
      "frameMaterial": "frame",
      "fascia": {
        "w": 6.3,
        "h": 0.94,
        "cy": 3.86,
        "cz": 3.42
      },
      // Shopfront CENTRED on the facade (x -2.79..2.79 across the 8.0 m front). The pane is one
      // merged component: a fixed run on the left, a transom over the door bay on the right, and a
      // gap cut where the delivery hatch opens. The door leaf itself is a separate hinged part.
      "glazing": {
        "cy": 1.52,
        "cz": 3.26,
        "boxes": [
          [-1.975, 1.52, 3.26, 1.15, 2.55, 0.10],
          [0.575, 1.52, 3.26, 1.55, 2.55, 0.10],
          [-0.8, 2.2275, 3.26, 1.2, 1.135, 0.10],
          [-0.8, 0.6525, 3.26, 1.2, 0.815, 0.10],
          [1.95, 2.6175, 3.26, 1.2, 0.355, 0.10]
        ]
      },
      "frame": [
        [0, 4.36, 3.4, 6.46, 0.1, 0.14],
        [0, 3.36, 3.4, 6.46, 0.1, 0.14],
        [-3.18, 3.86, 3.4, 0.1, 1.1, 0.14],
        [3.18, 3.86, 3.4, 0.1, 1.1, 0.14],
        [-2.55, 1.52, 3.32, 0.08, 2.66, 0.16],
        [2.55, 1.52, 3.32, 0.08, 2.66, 0.16],
        [0, 2.83, 3.32, 5.18, 0.08, 0.16],
        [-0.6, 0.22, 3.32, 3.98, 0.08, 0.16],
        [1.35, 1.52, 3.32, 0.08, 2.66, 0.16],
        [1.95, 2.42, 3.32, 1.28, 0.08, 0.16],
        [-1.4, 1.52, 3.32, 0.08, 2.66, 0.16],
        [-0.2, 1.52, 3.32, 0.08, 2.66, 0.16],
        [-0.8, 1.06, 3.32, 1.28, 0.08, 0.16],
        [-0.8, 1.70, 3.32, 1.28, 0.08, 0.16],
        [-0.8, 1.36, 3.05, 1.2, 0.6, 0.30]
      ],
      "mullions": {
        "w": 0.06,
        "h": 2.58,
        "cy": 1.52,
        "cz": 3.32,
        "x": [
          -1.975,
          0.575
        ]
      },
      "door": {
        "hinge": [1.40, 0, 3.32],
        "w": 1.10,
        "h": 2.26,
        "y0": 0.10
      },
      "frontFeature": {
        "name": "Yellow shopfront surround, lintel and delivery counter",
        "material": "yellow",
        "boxes": [
          [-2.68, 1.55, 3.24, 0.22, 2.9, 0.2],
          [2.68, 1.55, 3.24, 0.22, 2.9, 0.2],
          [0, 3.1, 3.3, 5.58, 0.36, 0.4],
          [-0.8, 0.99, 3.26, 1.7, 0.14, 0.4],
          [-0.8, 0.585, 3.37, 1.5, 0.67, 0.1]
        ]
      },
      "sideFeature": {
        "name": "Roller shutter and lintel",
        "material": "galv",
        "boxes": [
          [
            3.945,
            0.1756818181818182,
            0.15,
            0.09,
            0.10245454545454546,
            3.1
          ],
          [
            3.9375,
            0.28704545454545455,
            0.15,
            0.075,
            0.10245454545454546,
            3.1
          ],
          [
            3.945,
            0.39840909090909093,
            0.15,
            0.09,
            0.10245454545454546,
            3.1
          ],
          [
            3.9375,
            0.5097727272727273,
            0.15,
            0.075,
            0.10245454545454546,
            3.1
          ],
          [
            3.945,
            0.6211363636363637,
            0.15,
            0.09,
            0.10245454545454546,
            3.1
          ],
          [
            3.9375,
            0.7325,
            0.15,
            0.075,
            0.10245454545454546,
            3.1
          ],
          [
            3.945,
            0.8438636363636364,
            0.15,
            0.09,
            0.10245454545454546,
            3.1
          ],
          [
            3.9375,
            0.9552272727272728,
            0.15,
            0.075,
            0.10245454545454546,
            3.1
          ],
          [
            3.945,
            1.0665909090909091,
            0.15,
            0.09,
            0.10245454545454546,
            3.1
          ],
          [
            3.9375,
            1.1779545454545457,
            0.15,
            0.075,
            0.10245454545454546,
            3.1
          ],
          [
            3.945,
            1.289318181818182,
            0.15,
            0.09,
            0.10245454545454546,
            3.1
          ],
          [
            3.9375,
            1.4006818181818184,
            0.15,
            0.075,
            0.10245454545454546,
            3.1
          ],
          [
            3.945,
            1.5120454545454547,
            0.15,
            0.09,
            0.10245454545454546,
            3.1
          ],
          [
            3.9375,
            1.623409090909091,
            0.15,
            0.075,
            0.10245454545454546,
            3.1
          ],
          [
            3.945,
            1.7347727272727274,
            0.15,
            0.09,
            0.10245454545454546,
            3.1
          ],
          [
            3.9375,
            1.8461363636363637,
            0.15,
            0.075,
            0.10245454545454546,
            3.1
          ],
          [
            3.945,
            1.9575,
            0.15,
            0.09,
            0.10245454545454546,
            3.1
          ],
          [
            3.9375,
            2.0688636363636363,
            0.15,
            0.075,
            0.10245454545454546,
            3.1
          ],
          [
            3.945,
            2.180227272727273,
            0.15,
            0.09,
            0.10245454545454546,
            3.1
          ],
          [
            3.9375,
            2.2915909090909095,
            0.15,
            0.075,
            0.10245454545454546,
            3.1
          ],
          [
            3.945,
            2.402954545454546,
            0.15,
            0.09,
            0.10245454545454546,
            3.1
          ],
          [
            3.9375,
            2.514318181818182,
            0.15,
            0.075,
            0.10245454545454546,
            3.1
          ]
        ]
      },
      "extraFeature": {
        "name": "Parapet coping and shutter lintel",
        "material": "coping",
        "boxes": [
          [
            0,
            4.52,
            3.02,
            7.96,
            0.16,
            0.44
          ],
          [
            -3.88,
            4.03,
            -0.31,
            0.16,
            0.16,
            6.3
          ],
          [
            3.88,
            4.03,
            -0.31,
            0.16,
            0.16,
            6.3
          ],
          [
            0,
            4.03,
            -3.37,
            7.96,
            0.16,
            0.14
          ],
          [
            3.92,
            2.72,
            0.15,
            0.14,
            0.34,
            3.3
          ]
        ]
      },
      "condensers": [
        [
          -1.3,
          -0.35,
          0
        ],
        [
          1.05,
          -0.35,
          0
        ]
      ]
    },
    "graphic": {
      "background": "#E7DF4C",
      "ops": [
        {
          "type": "text",
          "text": "FLA",
          "x0": 0.285,
          "x1": 0.475,
          "cy": 0.44,
          "size": 0.5,
          "fill": "#1A1A1A",
          "style": "italic bold"
        },
        {
          "type": "poly",
          "fill": "#FFFFFF",
          "stroke": "#1A1A1A",
          "strokeW": 0.05,
          "points": [[0.513, 0.10], [0.568, 0.10], [0.538, 0.40], [0.578, 0.40], [0.500, 0.76], [0.522, 0.50], [0.486, 0.50]]
        },
        {
          "type": "text",
          "text": "H",
          "x0": 0.595,
          "x1": 0.72,
          "cy": 0.44,
          "size": 0.5,
          "fill": "#1A1A1A",
          "style": "italic bold"
        },
        {
          "type": "text",
          "text": "EXPRESS",
          "x0": 0.535,
          "x1": 0.745,
          "cy": 0.8,
          "size": 0.22,
          "fill": "#1A1A1A",
          "style": "bold"
        }
      ]
    }
  } as any;

/* ------------------------------------------------------------------ geometry helpers */

/** Local stand-in for BufferGeometryUtils.mergeGeometries, which cannot be imported here.
 *  Everything is converted to non-indexed so attribute arrays can be appended; that changes the
 *  vertex count but NOT the triangle count, which is the axis the budget measures. */
function mergeGeos(geos: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [];
  const temp: boolean[] = [];
  for (const g of geos) {
    if (g.index) { parts.push(g.toNonIndexed()); temp.push(true); }
    else { parts.push(g); temp.push(false); }
  }
  let total = 0;
  for (const g of parts) total += g.getAttribute('position').count;
  const position = new Float32Array(total * 3);
  const normal = new Float32Array(total * 3);
  const uv = new Float32Array(total * 2);
  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute('position'), n = g.getAttribute('normal'), t = g.getAttribute('uv');
    for (let i = 0; i < p.count; i++) {
      position[(v + i) * 3] = p.getX(i); position[(v + i) * 3 + 1] = p.getY(i); position[(v + i) * 3 + 2] = p.getZ(i);
      if (n) { normal[(v + i) * 3] = n.getX(i); normal[(v + i) * 3 + 1] = n.getY(i); normal[(v + i) * 3 + 2] = n.getZ(i); }
      if (t) { uv[(v + i) * 2] = t.getX(i); uv[(v + i) * 2 + 1] = t.getY(i); }
    }
    v += p.count;
  }
  for (let i = 0; i < parts.length; i++) { if (temp[i]) parts[i].dispose(); geos[i].dispose(); }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(position, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  out.computeBoundingBox(); out.computeBoundingSphere();
  return out;
}

function boxAt(cx: number, cy: number, cz: number, w: number, h: number, d: number) {
  const g = new THREE.BoxGeometry(w, h, d); g.translate(cx, cy, cz); return g;
}
function cylAt(cx: number, cy: number, cz: number, r: number, h: number, seg = 16) {
  const g = new THREE.CylinderGeometry(r, r, h, seg); g.translate(cx, cy, cz); return g;
}
function boxes(list: number[][]) { return mergeGeos(list.map((b) => boxAt(b[0], b[1], b[2], b[3], b[4], b[5]))); }

/* ------------------------------------------------------------------ materials */

/**
 * Every material is declared `textureless` in the sculpt spec, so no procedural texture set is
 * synthesised. That matters twice. Speed: makeProceduralTextureSet writes FIVE canvases per
 * material pixel by pixel in JavaScript, at a cost that is the SQUARE of the resolution.
 * Correctness: whenever a texture set exists the generator forces color to white and roughness
 * to 1 and reads both back from the generated maps, discarding the measured albedo -- which is
 * what renders a building mid-grey.
 *
 * Metalness is capped well below physical for metals. The thaikit harness supplies a hemisphere
 * light and three directionals and NO environment map, and a metal with nothing to reflect
 * renders black. The albedo stays measured; the metalness is what is wrong for this rig.
 *
 * The one printed graphic, the brand fascia, is a canvas assigned AFTER material construction.
 * The textureless declaration does not affect that, and it is the documented route.
 */
function buildMaterials(options: ProceduralModelOptions): Record<string, THREE.MeshStandardMaterial> {
  const map: Record<string, THREE.MeshStandardMaterial> = {};
  for (const s of CONFIG.materials as any[]) {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(s.color),
      roughness: s.roughness,
      metalness: s.metalness,
      wireframe: options.wireframe ?? false,
    });
    if (s.envMapIntensity !== undefined) m.envMapIntensity = s.envMapIntensity;
    if (s.opacity !== undefined) { m.transparent = true; m.opacity = s.opacity; m.depthWrite = true; }
    m.name = s.id;
    map[s.id] = m;
  }
  return map;
}

/* ------------------------------------------------------------------ the model */

export function createFlashExpressParcelShopBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Flash Express Parcel Shop Building';

  const materials = buildMaterials(options);
  const nodes: Record<string, THREE.Object3D> = {};
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};
  const castShadow = options.castShadow ?? true;
  const receiveShadow = options.receiveShadow ?? true;

  function add(id: string, name: string, geo: THREE.BufferGeometry, matId: string) {
    const node = new THREE.Group(); node.name = name + '__node';
    const mesh = new THREE.Mesh(geo, materials[matId]);
    mesh.name = name; mesh.castShadow = castShadow; mesh.receiveShadow = receiveShadow;
    node.add(mesh); root.add(node);
    nodes[id] = node; meshes[id] = mesh; colliders[id] = null;
    return mesh;
  }
  function addInst(id: string, name: string, geo: THREE.BufferGeometry, matId: string, mats: THREE.Matrix4[], cols?: number[]) {
    const node = new THREE.Group(); node.name = name + '__node';
    const inst = new THREE.InstancedMesh(geo, materials[matId], mats.length);
    inst.name = name; inst.castShadow = castShadow; inst.receiveShadow = receiveShadow;
    for (let i = 0; i < mats.length; i++) inst.setMatrixAt(i, mats[i]);
    if (cols) {
      const c = new THREE.Color();
      for (let i = 0; i < cols.length; i++) inst.setColorAt(i, c.setHex(cols[i]));
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    }
    inst.instanceMatrix.needsUpdate = true;
    node.add(inst); root.add(node);
    nodes[id] = node; meshes[id] = inst as unknown as THREE.Mesh; colliders[id] = null;
    return inst;
  }

  const G = CONFIG.geometry as any;

  /* Shell: SOLID box, not a ring. The prop is an exterior shell only ever seen from outside, so
   * an interior costs draw calls, geometries and VRAM for something nobody sees -- and solid
   * means the shopfront needs no opening cut in it, which removes all four reveal faces and the
   * z-fighting they cause. Set 0.06 m INSIDE the parapet ring on every elevation so no wall face
   * is ever coplanar and co-facing with a parapet face. */
  // How far forward the shell face sits. The DEFAULT 2.50 leaves 1.00 m for an entrance canopy to
  // cantilever into, so the canopy nose lands exactly on the declared 7.0 m depth. A building with
  // NO forward cantilever must push this out instead, or the prop is built short of its declared
  // envelope -- MK first came out 6.3 m deep against a declared 7.0 for exactly that reason.
  const SF = (G.shellFront ?? 2.50) as number;
  add('building-shell', 'Building shell', boxAt(0, 1.775, (SF - 3.44) / 2, 7.88, 3.55, SF + 3.44), 'wall');
  colliders['building-shell'] = {
    shape: 'box', localCenter: [0, 2.3, 0], halfExtents: [4.0, 2.3, 3.5],
    notes: 'Asset declares collider "box". One convex proxy over the whole envelope.',
  };

  /* Roof deck spans y 3.50..3.62 so its underside is sunk INTO the shell rather than resting on
   * it. Authored flush, the deck's bottom face and the parapet ring's bottom face were both at
   * y=3.550 and both facing down -- 46 m2 of coplanar co-facing surface. */
  add('roof-deck', 'Roof deck', boxAt(0, 3.56, (SF - 0.02 - 3.42) / 2, 7.8, 0.12, SF + 3.40), 'deck');

  /* Parapet: front fascia wall plus three upstands, MERGED into one component and one draw call.
   * The front is taller than the sides, which a plan extrusion cannot express. Outer faces stand
   * 0.06 m proud of the walls -- a coping drip edge, and what keeps them off the wall planes. */
  add('parapet', 'Parapet ring and fascia wall', boxes([
    [0, G.fasciaWall.cy, G.fasciaWall.cz, 8.0, G.fasciaWall.h, G.fasciaWall.d],
    [-3.88, 3.75, (SF - 0.30 - 3.5) / 2, 0.24, 0.4, SF + 3.20],
    [3.88, 3.75, (SF - 0.30 - 3.5) / 2, 0.24, 0.4, SF + 3.20],
    [0, 3.75, -3.38, 8.0, 0.4, 0.24],
    // Anything else in the SAME material folds in here rather than costing its own draw call --
    // full-height facade cladding, corner pilasters, a plinth. This is the merge lever: two
    // parts that share a material should never be two submissions.
    ...((G.parapetExtra ?? []) as number[][]),
  ]), G.fasciaWallMaterial);

  /* Brand fascia panel. Sunk INTO the fascia wall at the back and standing proud at the front, so
   * it overlaps its surround instead of meeting it. UVs are AUTHORED: the +Z face samples the
   * wordmark band of the canvas and the other five faces sample a plain corner of the same
   * canvas, which keeps the brand graphic at ONE material and ONE draw call. */
  {
    const f = G.fascia;
    let g: THREE.BufferGeometry;
    if (f.shape === 'disc') {
      // A round sign disc, built as a CircleGeometry face plus a shallow cylinder body.
      //
      // The obvious construction -- one cylinder rotated to face +Z -- puts the wordmark on its
      // side, because CylinderGeometry lays its cap UVs out in the cylinder's own XZ plane and
      // rotating the geometry does not rotate them with it. CircleGeometry's UVs are already
      // (x, y) in the plane it faces, so the square canvas lands the right way up with no
      // correction. The body's UVs are collapsed onto a plain corner of the same canvas so the
      // disc's edge does not smear the wordmark around its rim.
      const r = f.w / 2;
      const face = new THREE.CircleGeometry(r, 32);
      face.translate(0, 0, 0.061);
      const body = new THREE.CylinderGeometry(r, r, 0.12, 32);
      body.rotateX(-Math.PI / 2);
      const buv = body.getAttribute('uv') as THREE.BufferAttribute;
      for (let i = 0; i < buv.count; i++) buv.setXY(i, 0.02, 0.02);
      buv.needsUpdate = true;
      g = mergeGeos([face, body]);
      g.translate(0, f.cy, f.cz);
    } else {
      // BoxGeometry vertex order is px, nx, py, ny, pz, nz -- four vertices per face -- so the
      // outward face of a board is a known slice of the uv attribute. A building can carry the
      // same mark on more than one elevation (this kit's hospital signs its front AND its side),
      // so `boards` lets each board name the face that samples the graphic while every other face
      // samples a plain corner of the same canvas. One material, one draw call, any number of
      // boards facing any way.
      const FACE_SLICE: Record<string, number> = { '+X': 0, '-X': 4, '+Y': 8, '-Y': 12, '+Z': 16, '-Z': 20 };
      const boards = (f.boards as any[]) ?? [{ w: f.w, h: f.h, d: 0.12, at: [0, f.cy, f.cz], face: '+Z' }];
      const parts: THREE.BufferGeometry[] = [];
      for (const bd of boards) {
        const b = new THREE.BoxGeometry(bd.w, bd.h, bd.d ?? 0.12);
        const uv = b.getAttribute('uv') as THREE.BufferAttribute;
        // `plain` boards carry no graphic at all: a band that wraps three sides of a canopy should
        // repeat its mark on none of the returns, only on the face that fronts the street.
        // The test is an explicit boolean, NOT a sentinel index -- setting the slice start to -1
        // still satisfied `i >= start && i < start + 4` for vertices 0, 1 and 2, so three corners
        // of the +X face kept sampling the wordmark band and smeared a stretched ghost of the mark
        // along every return.
        const plain = bd.plain === true;
        const startAt = FACE_SLICE[bd.face ?? '+Z'];
        for (let i = 0; i < uv.count; i++) {
          if (!plain && i >= startAt && i < startAt + 4) uv.setXY(i, uv.getX(i), 0.125 + uv.getY(i) * 0.875);
          else uv.setXY(i, uv.getX(i) * 0.03, uv.getY(i) * 0.03);
        }
        uv.needsUpdate = true;
        b.translate(bd.at[0], bd.at[1], bd.at[2]);
        parts.push(b);
      }
      g = parts.length === 1 ? parts[0] : mergeGeos(parts);
    }
    add('fascia-panel', 'Brand fascia panel', g, 'fascia');
  }

  /* One glazing pane, not one per bay: the mullion grid in front does the dividing. Overlaps INTO
   * the facade at the back and sits RECESSED behind the framing at the front. Mostly opaque by
   * design -- there is no interior behind it, so a transparent pane would read as a hole. */
  // The pane is not always centred: a branch plan can put its glazing to one side of the entrance.
  // Authored centred while its framing sat off to the left, the two read as unrelated parts.
  // `boxes` lets the pane be several panels in ONE component -- a fixed run, a transom over a
  // door bay, and a gap where a hatch opens -- without costing a draw call per panel.
  add('shopfront-glazing', 'Shopfront glazing',
      G.glazing.boxes ? boxes(G.glazing.boxes)
        : boxAt(G.glazing.cx ?? 0, G.glazing.cy, G.glazing.cz ?? 2.51, G.glazing.w, G.glazing.h, 0.10), 'glass');

  /* Framing, transom, kick rail, door jambs and header MERGED into one component. Every part is
   * the same metal; folding them together is the draw-call lever chosen in the blockout, not an
   * optimisation deferred to the end -- a part split for authoring convenience cannot be merged
   * afterwards once a pivot hangs off it. Front face stands proud of glazing and mullions. */
  add('shopfront-frame', 'Shopfront framing, door bay and delivery hatch', boxes(G.frame), G.frameMaterial);

  /* Entrance door: a real LEAF hung on a real HINGE, not a rectangle painted into the glazing.
   * The leaf is built in hinge-local coordinates (x runs from the hinge stile outward) under a
   * pivot node at the jamb, so rotating the node about +Y swings the door open. Two meshes, two
   * draw calls -- stiles and rails in the frame metal, a pane in the glass -- and this is the
   * one part of the prop that earns a named pivot. The leaf sits in its own depth band (frame
   * 3.26..3.38, pane 3.30..3.34) between the glazing (3.21..3.31) and the fixed frame
   * (3.24..3.40) so nothing on it is coplanar with a fixed face at any swing angle. */
  const pivotNodes: THREE.Object3D[] = [];
  if (G.door) {
    const d = G.door;
    const hinge = new THREE.Group();
    hinge.name = 'door-hinge';
    hinge.position.set(d.hinge[0], d.hinge[1], d.hinge[2]);
    hinge.userData.actionProfile = {
      animationRole: 'articulated',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'door-hinge',
               note: 'Entrance door swings about the jamb stile. Closed at 0, opens outward toward +Z with negative yaw.' },
    };
    root.add(hinge);
    pivotNodes.push(hinge);
    const w = d.w as number, h = d.h as number, y0 = d.y0 as number, y1 = y0 + h, ym = (y0 + y1) / 2;
    const st = 0.08, D = 0.12;
    const leafFrame = boxes([
      [st / 2, ym, 0, st, h, D],
      [w - st / 2, ym, 0, st, h, D],
      [w / 2, y1 - 0.04, 0, w, 0.08, D],
      [w / 2, y0 + 0.16, 0, w, 0.32, D],
      [w / 2, 1.05, 0, w, 0.07, D],
    ]);
    const leafPane = boxAt(w / 2, (y0 + 0.32 + y1 - 0.08) / 2, 0, w - 2 * st, y1 - 0.08 - (y0 + 0.32), 0.04);
    for (const [id, name, geo, mat] of [
      ['door-leaf-frame', 'Entrance door leaf frame', leafFrame, G.frameMaterial],
      ['door-leaf-glass', 'Entrance door leaf glass', leafPane, 'glass'],
    ] as [string, string, THREE.BufferGeometry, string][]) {
      const node = new THREE.Group(); node.name = name + '__node';
      const mesh = new THREE.Mesh(geo, materials[mat]);
      mesh.name = name; mesh.castShadow = castShadow; mesh.receiveShadow = receiveShadow;
      node.add(mesh); hinge.add(node);
      nodes[id] = node; meshes[id] = mesh; colliders[id] = null;
    }
  }

  /* Side feature: shutter, service door or louvre, per plate. Stands proud of the wall face but
   * deliberately NOT out to the parapet plane at +-4.00 -- a face at exactly +-4.00 would be
   * coplanar and co-facing with the parapet outer face, which the bounding-box coplanarity check
   * flags even though the two never overlap in Y. */
  if (G.sideFeature) add('side-feature', G.sideFeature.name, boxes(G.sideFeature.boxes), G.sideFeature.material);

  /* Front feature: cladding band, ATM bank, upper-storey band or forecourt, per plate. */
  if (G.frontFeature) add('front-feature', G.frontFeature.name, boxes(G.frontFeature.boxes), G.frontFeature.material);

  /* A third merged slot, for whatever the plate has that the two above do not cover -- a parapet
   * coping, a kerb, a forecourt column base. Same rule as the others: everything in it shares one
   * material and is submitted once. */
  if (G.extraFeature) add('extra-feature', G.extraFeature.name, boxes(G.extraFeature.boxes), G.extraFeature.material);

  /* Mullions: the fine vertical grid is the most recognisable thing about a shopfront. Instances
   * on one geometry cost one draw call; as components they would have cost one each and blown the
   * ceiling on their own. They sit INSIDE the frame depth band at both ends so they are not
   * coplanar with it, while still standing proud of the glazing so the glass reads as recessed. */
  {
    const m = G.mullions;
    const mats = (m.x as number[]).map((x) => new THREE.Matrix4().setPosition(x, m.cy, m.cz ?? 2.58));
    addInst('shopfront-mullions', 'Shopfront mullions', new THREE.BoxGeometry(m.w, m.h, 0.08), G.frameMaterial, mats);
  }

  /* Rooftop condensers: casing, fan cowl and four feet MERGED into a single instanced geometry.
   * Feet start below the deck top so the two overlap rather than sharing a plane. */
  {
    const parts: THREE.BufferGeometry[] = [
      boxAt(0, 0.46, 0, 0.95, 0.72, 0.85),
      cylAt(0, 0.87, 0, 0.30, 0.10, 16),
    ];
    for (const fx of [-0.4, 0.4]) for (const fz of [-0.35, 0.35]) parts.push(boxAt(fx, 0.05, fz, 0.08, 0.10, 0.08));
    const unit = mergeGeos(parts);
    const mats = (G.condensers as number[][]).map(([x, z, yaw]) =>
      new THREE.Matrix4().compose(
        new THREE.Vector3(x, 3.60, z),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
        new THREE.Vector3(1, 1, 1),
      ));
    // The plant material is CONFIGURABLE, not hard-coded. Referencing a 'galv' id that a config
    // does not define silently hands InstancedMesh an undefined material, three.js substitutes a
    // default, and the prop ships one material over its ceiling with nothing in the config to
    // explain the extra.
    addInst('plant-condensers', 'Rooftop condenser units', unit, G.plantMaterial ?? 'galv', mats);
  }

  /* Optional instanced extra: canopy plates, pilasters or forecourt columns, per plate. */
  if (G.extraSystem) {
    const e = G.extraSystem;
    let unit: THREE.BufferGeometry;
    if (e.kind === 'plate') {
      unit = mergeGeos([boxAt(0, 0, 0, e.w, e.h, e.d), cylAt(0, -e.h / 2 - 0.015, 0, 0.085, 0.03, 12)]);
    } else {
      unit = boxAt(0, 0, 0, e.w, e.h, e.d);
    }
    const mats = (e.at as number[][]).map(([x, y, z]) => new THREE.Matrix4().setPosition(x, y, z));
    addInst(e.id, e.name, unit, e.material, mats, e.tones ? mats.map((_, i) => e.tones[i % e.tones.length]) : undefined);
  }

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups, pivotNodes } satisfies ProceduralModelRuntime & { pivotNodes: THREE.Object3D[] };
  return root;
}

/* ------------------------------------------------------------------ brand fascia canvas */

/** Draw the brand wordmark onto a canvas and assign it AFTER material construction. This is the
 *  documented route for a printed brand fascia and is unaffected by the material's `textureless`
 *  declaration -- what that skips is the five-canvas PROCEDURAL set, a different thing entirely.
 *
 *  Text is fitted to its field by MEASUREMENT rather than by a font-size ratio: headless Chrome's
 *  font fallback decides the real advance widths, so the only reliable way to fill a known box is
 *  to measure the string and scale it horizontally. */
function applyFasciaGraphic(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as ProceduralModelRuntime | undefined;
  const mesh = rt?.meshes?.['fascia-panel'];
  if (!mesh || typeof document === 'undefined') return;
  const material = mesh.material as THREE.MeshStandardMaterial;
  if (!material) return;

  const g = CONFIG.graphic as any;
  // A round sign needs a SQUARE canvas: the cylinder cap maps the circle into the unit square,
  // so a 2048x320 strip would squash the mark flat. A rectangular fascia keeps the wide strip,
  // where the bottom 12.5% is the plain corner every non-front face samples.
  const square = !!g.square;
  const W = square ? 512 : 2048, H = square ? 512 : 320;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.fillStyle = g.background;
  ctx.fillRect(0, 0, W, H);
  const band = square ? H : H * 0.875;

  const fit = (text: string, font: string, x0: number, x1: number, cy: number, fill: string, strokeCol?: string, strokeW?: number) => {
    ctx.font = font;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    const w = ctx.measureText(text).width;
    const s = (x1 - x0) / w;
    ctx.save();
    ctx.translate(x0, 0);
    ctx.scale(s, 1);
    if (strokeCol) { ctx.lineJoin = 'round'; ctx.strokeStyle = strokeCol; ctx.lineWidth = (strokeW ?? 6) / s; ctx.strokeText(text, 0, cy); }
    ctx.fillStyle = fill;
    ctx.fillText(text, 0, cy);
    ctx.restore();
  };

  for (const op of g.ops as any[]) {
    if (op.type === 'rect') {
      ctx.fillStyle = op.fill;
      const x = op.x * W, y = op.y * band, w = op.w * W, h = op.h * band, r = (op.r ?? 0) * band;
      ctx.beginPath();
      if (r > 0) {
        ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y);
      } else ctx.rect(x, y, w, h);
      ctx.closePath(); ctx.fill();
    } else if (op.type === 'circle') {
      ctx.fillStyle = op.fill;
      ctx.beginPath();
      ctx.arc(op.cx * W, op.cy * band, op.r * band, 0, Math.PI * 2);
      ctx.fill();
    } else if (op.type === 'poly') {
      // An arbitrary polygon in normalised canvas coords, for a mark a font cannot set -- a
      // lightning bolt, a chevron, a leaf. Points are [x, y] with x a fraction of the canvas width
      // and y a fraction of the band height.
      // An optional outline: stroked at DOUBLE the wanted width before the fill, so the fill
      // covers the inner half and what remains is a clean outer border of exactly `strokeW`.
      ctx.beginPath();
      const pts = op.points as number[][];
      ctx.moveTo(pts[0][0] * W, pts[0][1] * band);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0] * W, pts[i][1] * band);
      ctx.closePath();
      if (op.stroke) {
        ctx.lineJoin = 'miter'; ctx.miterLimit = 6;
        ctx.strokeStyle = op.stroke; ctx.lineWidth = 2 * (op.strokeW ?? 0.04) * band;
        ctx.stroke();
      }
      ctx.fillStyle = op.fill;
      ctx.fill();
    } else if (op.type === 'text') {
      fit(op.text, `${op.style ?? 'bold'} ${Math.round(op.size * band)}px ${op.family ?? 'Arial, Helvetica, sans-serif'}`,
        op.x0 * W, op.x1 * W, op.cy * band, op.fill, op.stroke, op.strokeW ? op.strokeW * band : undefined);
    }
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = (THREE as any).SRGBColorSpace ?? tex.colorSpace;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  material.map = tex;
  // White base so the canvas shows as drawn rather than tinted -- the measured fascia colour is
  // already painted into the canvas background.
  material.color.setHex(0xffffff);
  material.needsUpdate = true;
}

/* ------------------------------------------------------------------ thaikit entry point */

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it with
 * (spec, options). `spec` is accepted and attached for host-side inspection -- the reconstruction
 * data already lives in this module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  const root = createFlashExpressParcelShopBuildingModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  applyFasciaGraphic(root);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: the root, plus `door-hinge` for the entrance leaf -- the one part of this shell
    // that actually swings. The roller shutter stays fixed geometry and gets no axis: a named
    // pivot is a promise that a part turns on it, and a prop that declares pivots it has no
    // mechanisms for has described a machine that does not exist.
    const pivots: THREE.Object3D[] = [...((rt.pivotNodes ?? []) as THREE.Object3D[])];
    const rootPivot = new THREE.Object3D();
    rootPivot.name = 'root';
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'root' },
    };
    root.add(rootPivot);
    pivots.push(rootPivot);

    // Sockets: NONE. Nothing attaches to this prop and nothing is emitted from it.

    // Colliders are plain DATA, not Object3D, so they carry no .name of their own. Give each the
    // id of the component it owns and drop the empty ones -- a nameless empty proxy in the
    // runtime list reads as a physics shape that exists and does nothing.
    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // Destruction groups: this prop declares NONE, and promotion checks built against declared as
    // an equality in BOTH directions. Derived rather than assumed empty, so a component that
    // somehow carried a fractureGroup fails the gate loudly instead of being dropped here.
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
      // puppeteer bridge and its registry field is a number; a Record of Object3D is circular and
      // fails to serialise, which surfaces as the whole stats object arriving undefined. The
      // Record stays reachable under byId.
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
