import * as THREE from 'three';

/**
 * MK Restaurants Building -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging and
 * instancing are hand-rolled below -- anything under three/examples/jsm is a second import.
 *
 * Envelope 8.00 x 4.60 x 7.00 m, origin base-center, +Y up, shopfront facing +Z.
 * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=16 unique geometries.
 *
 * One of thaikit's shared retail-module buildings. The shell front face sits at z=+2.50 rather
 * than the envelope edge so the entrance canopy can cantilever forward and still land exactly on
 * the declared 7.0 m depth. Every surface pair on the facade is deliberately offset in depth:
 * two surfaces in the same plane facing the same way tear into interleaved triangles as the
 * camera moves, and authoring components flush against one another produces that by default.
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

const CONFIG = {
    "id": "mk-restaurants-building",
    "name": "MK Restaurants Building",
    "exportName": "MKRestaurantsBuilding",
    "materials": [
      {
        "id": "wall",
        "color": 14799026,
        "roughness": 0.88,
        "metalness": 0
      },
      {
        "id": "deck",
        "color": 11250351,
        "roughness": 0.92,
        "metalness": 0
      },
      {
        "id": "green",
        "color": 3762496,
        "roughness": 0.55,
        "metalness": 0
      },
      {
        "id": "fascia",
        "color": 16382713,
        "roughness": 0.35,
        "metalness": 0,
        "envMapIntensity": 0.6
      },
      {
        "id": "glass",
        "color": 7237994,
        "roughness": 0.14,
        "metalness": 0,
        "opacity": 0.94,
        "envMapIntensity": 1.1
      },
      {
        "id": "frame",
        "color": 3813411,
        "roughness": 0.55,
        "metalness": 0.25
      },
      {
        "id": "galv",
        "color": 10132124,
        "roughness": 0.52,
        "metalness": 0.3
      }
    ],
    "geometry": {
      "shellFront": 3.22,
      "fasciaWall": {
        "cy": 4.075,
        "cz": 3.1,
        "h": 1.05,
        "d": 0.36
      },
      "fasciaWallMaterial": "wall",
      "frameMaterial": "frame",
      "fascia": {
        "shape": "disc",
        "w": 1.16,
        "h": 1.16,
        "cy": 3.55,
        "cz": 3.44
      },
      "glazing": {
        "cx": -0.47,
        "w": 5.380000000000001,
        "h": 2.82,
        "cy": 1.49,
        "cz": 3.31,
        "d": 0.08
      },
      "glazingExtra": [
        [
          1.7000000000000002,
          1.31,
          3.365,
          0.96,
          2.54,
          0.07
        ],
        [
          2.7,
          1.18,
          3.375,
          0.76,
          2.04,
          0.03
        ]
      ],
      "frame": [
        [
          -0.47,
          2.86,
          3.36,
          5.380000000000001,
          0.12,
          0.14
        ],
        [
          -0.47,
          0.08,
          3.36,
          5.380000000000001,
          0.16,
          0.14
        ],
        [
          -3.14,
          1.46,
          3.36,
          0.08,
          2.92,
          0.14
        ],
        [
          1.18,
          1.46,
          3.36,
          0.08,
          2.92,
          0.14
        ],
        [
          2.22,
          1.46,
          3.36,
          0.08,
          2.92,
          0.14
        ],
        [
          1.7000000000000002,
          2.62,
          3.36,
          1.0400000000000003,
          0.08,
          0.14
        ],
        [
          2.7,
          1.18,
          3.29,
          0.8400000000000001,
          2.12,
          0.16
        ],
        [
          1.3199999999999998,
          0.7,
          3.435,
          0.03,
          0.03,
          0.05
        ],
        [
          1.3199999999999998,
          1.4,
          3.435,
          0.03,
          0.03,
          0.05
        ],
        {
          "cyl": [
            1.3199999999999998,
            1.05,
            3.46,
            0.015,
            0.8,
            8
          ]
        }
      ],
      "mullions": {
        "w": 0.05,
        "h": 2.5,
        "cy": 1.31,
        "cz": 3.395,
        "x": [
          1.2700000000000002,
          2.1300000000000003
        ]
      },
      "frontFeature": {
        "name": "Green facade band and corner pilasters",
        "material": "green",
        "boxes": [
          [
            0,
            3.575,
            3.35,
            7.88,
            1.35,
            0.22
          ],
          [
            -3.55,
            2.125,
            3.35,
            0.78,
            4.25,
            0.22
          ],
          [
            3.55,
            2.125,
            3.35,
            0.78,
            4.25,
            0.22
          ]
        ]
      },
      "sideFeature": {
        "name": "Service door and louvre vent",
        "material": "galv",
        "boxes": [
          [
            3.96,
            1.1,
            -0.55,
            0.06,
            2.1,
            0.95
          ],
          [
            3.96,
            2.85,
            0.95,
            0.06,
            0.62,
            1.1
          ]
        ]
      },
      "condensers": [
        [
          -1.35,
          -0.75,
          0
        ],
        [
          -0.35,
          -0.75,
          0
        ],
        [
          1.35,
          -0.55,
          1.5707963267948966
        ]
      ]
    },
    "graphic": {
      "square": true,
      "background": "#F9FAF9",
      "ops": [
        {
          "type": "circle",
          "cx": 0.5,
          "cy": 0.5,
          "r": 0.47,
          "fill": "#2E6B3A"
        },
        {
          "type": "circle",
          "cx": 0.5,
          "cy": 0.5,
          "r": 0.43,
          "fill": "#F9FAF9"
        },
        {
          "type": "text",
          "text": "MK",
          "x0": 0.2,
          "x1": 0.8,
          "cy": 0.44,
          "size": 0.42,
          "fill": "#D8232A",
          "style": "italic bold"
        },
        {
          "type": "rect",
          "x": 0.18,
          "y": 0.6,
          "w": 0.64,
          "h": 0.13,
          "r": 0.03,
          "fill": "#2E6B3A"
        },
        {
          "type": "text",
          "text": "RESTAURANTS",
          "x0": 0.21,
          "x1": 0.79,
          "cy": 0.665,
          "size": 0.085,
          "fill": "#FFFFFF"
        }
      ],
      "glass": {
        "baked": "data:image/webp;base64,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",
        "rect": [
          -3.16,
          0,
          3.16,
          2.9
        ],
        "roughness": 0.18
      }
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
/** A box list is the merge lever for everything in one material. An entry is
 *  [cx, cy, cz, w, h, d] with an optional seventh number, a rotation about X in radians applied
 *  before the translate (a sloped keypad shelf), or `{ cyl: [cx, cy, cz, r, h, seg?, rotX?, rotZ?] }`
 *  for a round part in the same submission (a door pull bar). */
function boxes(list: (number[] | { cyl: number[] })[]) {
  return mergeGeos(list.map((b) => {
    if (!Array.isArray(b)) {
      const c = b.cyl;
      const g = new THREE.CylinderGeometry(c[3], c[3], c[4], c[5] ?? 12);
      if (c[6]) g.rotateX(c[6]);
      if (c[7]) g.rotateZ(c[7]);
      g.translate(c[0], c[1], c[2]);
      return g;
    }
    if (b[6]) { const g = new THREE.BoxGeometry(b[3], b[4], b[5]); g.rotateX(b[6]); g.translate(b[0], b[1], b[2]); return g; }
    return boxAt(b[0], b[1], b[2], b[3], b[4], b[5]);
  }));
}

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

export function createMKRestaurantsBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'MK Restaurants Building';

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
        // `u: [u0, u1]` lets a board sample a horizontal SLICE of the canvas band instead of all of
        // it, so two boards with two different graphics (a blue board with white text, a white board
        // with blue text) still share one canvas, one material and one draw call. `plainUV` is the
        // canvas point the board's other five faces sample; it defaults to the bottom-left corner
        // and a board whose ground is not the canvas background names its own.
        const u0 = bd.u ? bd.u[0] : 0, u1 = bd.u ? bd.u[1] : 1;
        const pu = bd.plainUV ? bd.plainUV[0] : 0.015, pv = bd.plainUV ? bd.plainUV[1] : 0.015;
        for (let i = 0; i < uv.count; i++) {
          // `f.uvRect` [u0, v0, u1, v1] names the ATLAS region the band occupies when the sign
          // shares its image with other textured parts; default is the canvas contract (top 87.5 %).
          const R = (f.uvRect as number[]) ?? [0, 0.125, 1, 1];
          if (!plain && i >= startAt && i < startAt + 4) uv.setXY(i, R[0] + (u0 + uv.getX(i) * (u1 - u0)) * (R[2] - R[0]), R[1] + uv.getY(i) * (R[3] - R[1]));
          else uv.setXY(i, pu, pv);
        }
        uv.needsUpdate = true;
        b.translate(bd.at[0], bd.at[1], bd.at[2]);
        parts.push(b);
      }
      g = parts.length === 1 ? parts[0] : mergeGeos(parts);
    }
    // `curved`: textured bulged fronts (an ATM kiosk face) that ride the SAME material and
    // submission as the sign, sampling their own region of the baked atlas. Each is a partial
    // cylinder about Y, apex at z, edges at z - bulge, spanning w by h, UVs remapped to uvRect.
    if (f.curved) {
      const cparts: THREE.BufferGeometry[] = [g];
      for (const c of f.curved as any[]) {
        const R = (c.w * c.w / 4 + c.bulge * c.bulge) / (2 * c.bulge);
        const half = Math.asin(c.w / 2 / R);
        const cyl = new THREE.CylinderGeometry(R, R, c.h, c.seg ?? 12, 1, true, -half, 2 * half);
        const cuv = cyl.getAttribute('uv') as THREE.BufferAttribute;
        const r = c.uvRect as number[];
        for (let i = 0; i < cuv.count; i++) cuv.setXY(i, r[0] + cuv.getX(i) * (r[2] - r[0]), r[1] + cuv.getY(i) * (r[3] - r[1]));
        cyl.translate(c.x, c.y, c.z - R);
        cparts.push(cyl);
      }
      g = mergeGeos(cparts);
    }
    add('fascia-panel', 'Brand fascia panel', g, 'fascia');
  }

  /* One glazing pane, not one per bay: the mullion grid in front does the dividing. Overlaps INTO
   * the facade at the back and sits RECESSED behind the framing at the front. Mostly opaque by
   * design -- there is no interior behind it, so a transparent pane would read as a hole. */
  // The pane is not always centred: a branch plan can put its glazing to one side of the entrance.
  // Authored centred while its framing sat off to the left, the two read as unrelated parts.
  // `glazingExtra` folds further panes -- a side window, a clerestory -- into the SAME component:
  // one material, one draw call, however many openings the plate shows.
  {
    const pane = boxAt(G.glazing.cx ?? 0, G.glazing.cy, G.glazing.cz ?? 2.51, G.glazing.w, G.glazing.h, G.glazing.d ?? 0.10);
    const extra = (G.glazingExtra ?? []) as number[][];
    add('shopfront-glazing', 'Shopfront glazing',
        extra.length ? mergeGeos([pane, ...extra.map((b) => boxAt(b[0], b[1], b[2], b[3], b[4], b[5]))]) : pane, 'glass');
  }

  /* Framing, transom, kick rail, door jambs and header MERGED into one component. Every part is
   * the same metal; folding them together is the draw-call lever chosen in the blockout, not an
   * optimisation deferred to the end -- a part split for authoring convenience cannot be merged
   * afterwards once a pivot hangs off it. Front face stands proud of glazing and mullions. */
  add('shopfront-frame', 'Shopfront framing and door bay', boxes(G.frame), G.frameMaterial);

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

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
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
  const srgb = (THREE as any).SRGBColorSpace;

  // A BAKED sign -- the face image composed once from a real font and vector marks and embedded
  // as a WebP data URI -- beats fillText, which draws a different wordmark on every machine's
  // font fallback. Laid out to the same UV contract as the canvas: the top 87.5 % is the band
  // the +Z face samples and the bottom-left corner is the plain field every other face samples.
  // Assigned synchronously so the harness waits on the decode; the canvas ops below are the
  // decode FALLBACK only.
  if (g.baked) {
    const baked = new THREE.TextureLoader().load(g.baked, undefined, undefined, () => {
      const c = drawFasciaCanvas(g);
      if (!c) return;
      const t = new THREE.CanvasTexture(c);
      if (srgb) t.colorSpace = srgb;
      t.anisotropy = 4;
      material.map = t;
      material.needsUpdate = true;
    });
    if (srgb) baked.colorSpace = srgb;
    baked.anisotropy = 4;
    baked.needsUpdate = true;
    material.map = baked;
    material.color.setHex(0xffffff);
    material.needsUpdate = true;
    return;
  }

  const canvas = drawFasciaCanvas(g);
  if (!canvas) return;
  const tex = new THREE.CanvasTexture(canvas);
  if (srgb) tex.colorSpace = srgb;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  material.map = tex;
  // White base so the canvas shows as drawn rather than tinted -- the measured fascia colour is
  // already painted into the canvas background.
  material.color.setHex(0xffffff);
  material.needsUpdate = true;
}

function drawFasciaCanvas(g: any): HTMLCanvasElement | null {
  // A round sign needs a SQUARE canvas: the cylinder cap maps the circle into the unit square,
  // so a 2048x320 strip would squash the mark flat. A rectangular fascia keeps the wide strip,
  // where the bottom 12.5% is the plain corner every non-front face samples.
  const square = !!g.square;
  const W = square ? 512 : (g.size?.[0] ?? 2048), H = square ? 512 : (g.size?.[1] ?? 320);
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  ctx.fillStyle = g.background;
  ctx.fillRect(0, 0, W, H);
  const band = square ? H : H * (g.bandFrac ?? 0.875);

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
      ctx.fillStyle = op.fill;
      ctx.beginPath();
      const pts = op.points as number[][];
      ctx.moveTo(pts[0][0] * W, pts[0][1] * band);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0] * W, pts[i][1] * band);
      ctx.closePath();
      ctx.fill();
    } else if (op.type === 'text') {
      fit(op.text, `${op.style ?? 'bold'} ${Math.round(op.size * band)}px ${op.family ?? 'Arial, Helvetica, sans-serif'}`,
        op.x0 * W, op.x1 * W, op.cy * band, op.fill, op.stroke, op.strokeW ? op.strokeW * band : undefined);
    }
  }

  return canvas;
}

/* ------------------------------------------------------------------ glazing graphic */

/** A building is an exterior shell with no interior, so a plain tinted pane reads as a blind slab
 *  -- or, dark enough, as a hole. `graphic.glass` paints a de-lit interior view into the glazing:
 *  one baked image projected by WORLD x/y over `rect` [x0, y0, x1, y1] so it lines up across the
 *  window pane, the transom and the door leaves, which are separate boxes in one merged mesh.
 *  Assigned after material construction; the material stays `textureless` in the spec. */
function applyGlassGraphic(root: THREE.Group): void {
  const g = (CONFIG.graphic as any)?.glass;
  // Node has no `document`, and thaikit's coplanar checker and part manifest evaluate this
  // module there: TextureLoader would throw, so the glazing keeps its flat fallback albedo.
  if (!g || typeof document === 'undefined') return;
  const rt = root.userData.sculptRuntime as ProceduralModelRuntime | undefined;
  const mesh = rt?.meshes?.['shopfront-glazing'];
  if (!mesh) return;
  const material = mesh.material as THREE.MeshStandardMaterial;
  if (!material) return;
  const geo = mesh.geometry as THREE.BufferGeometry;
  const pos = geo.getAttribute('position');
  const [x0, y0, x1, y1] = g.rect as number[];
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    uv[i * 2] = (pos.getX(i) - x0) / (x1 - x0);
    uv[i * 2 + 1] = (pos.getY(i) - y0) / (y1 - y0);
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  const srgb = (THREE as any).SRGBColorSpace;
  const tex = new THREE.TextureLoader().load(g.baked);
  if (srgb) tex.colorSpace = srgb;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  material.map = tex;
  // The image carries the tint; a coloured base would apply it twice.
  material.color.setHex(0xffffff);
  if (g.roughness !== undefined) material.roughness = g.roughness;
  material.needsUpdate = true;
}

/* ------------------------------------------------------------------ thaikit entry point */

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it with
 * (spec, options). `spec` is accepted and attached for host-side inspection -- the reconstruction
 * data already lives in this module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  const root = createMKRestaurantsBuildingModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  applyFasciaGraphic(root);
  applyGlassGraphic(root);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: ONE. A static exterior shell -- nothing opens, turns or swings. The doors and any
    // shutter are authored as fixed geometry, so they get no axis: a named pivot is a promise
    // that a part turns on it, and a prop that declares pivots it has no mechanisms for has
    // described a machine that does not exist.
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
