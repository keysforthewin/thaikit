import * as THREE from 'three';

/**
 * FamilyMart Store Building -- procedural Three.js factory.
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
    "id": "familymart-store-building",
    "name": "FamilyMart Store Building",
    "exportName": "FamilyMartStoreBuilding",
    "materials": [
      {
        "id": "wall",
        "color": 9672602,
        "roughness": 0.94,
        "metalness": 0
      },
      {
        "id": "deck",
        "color": 7238261,
        "roughness": 0.95,
        "metalness": 0
      },
      {
        "id": "fascia",
        "color": 15066856,
        "roughness": 0.34,
        "metalness": 0,
        "envMapIntensity": 0.6
      },
      {
        "id": "glass",
        "color": 7304049,
        "roughness": 0.14,
        "metalness": 0,
        "opacity": 0.94,
        "envMapIntensity": 1.1
      },
      {
        "id": "alu",
        "color": 13948629,
        "roughness": 0.38,
        "metalness": 0.18
      },
      {
        "id": "galv",
        "color": 11053997,
        "roughness": 0.55,
        "metalness": 0.28
      },
      {
        "id": "decal",
        "color": 16777215,
        "roughness": 0.3,
        "metalness": 0
      },
      {
        "id": "steel",
        "color": 7633019,
        "roughness": 0.62,
        "metalness": 0.22
      }
    ],
    "geometry": {
      "shellFront": 3.1,
      "fasciaWall": {
        "cy": 4.075,
        "cz": 3.1,
        "h": 1.05,
        "d": 0.6
      },
      "fasciaWallMaterial": "wall",
      "parapetW": 7.95,
      "parapetSides": {
        "cy": 4.075,
        "h": 1.05,
        "thick": 0.24,
        "cx": 3.855
      },
      "parapetExtra": [
        [
          -3.745,
          1.71,
          3.15,
          0.45,
          3.42,
          0.3
        ],
        [
          0,
          0.06,
          -0.01,
          7.91,
          0.12,
          6.9
        ]
      ],
      "frameMaterial": "alu",
      "fascia": {
        "boards": [
          {
            "w": 7.98,
            "h": 1.07,
            "d": 0.12,
            "at": [
              0,
              3.935,
              3.44
            ],
            "face": "+Z"
          },
          {
            "w": 0.12,
            "h": 1.07,
            "d": 2.55,
            "at": [
              3.94,
              3.935,
              2.225
            ],
            "face": "+X",
            "u": [
              0.02,
              0.3
            ]
          }
        ]
      },
      "glazing": {
        "cx": 0.205,
        "cy": 1.7,
        "cz": 3.2,
        "w": 7.17,
        "h": 3.04,
        "d": 0.08
      },
      "glazingExtra": [
        [
          -0.295,
          1.34,
          3.29,
          0.99,
          2.36,
          0.06
        ],
        [
          0.745,
          1.34,
          3.29,
          0.87,
          2.36,
          0.06
        ],
        [
          3.92,
          1.7,
          2.99,
          0.08,
          3.04,
          0.86
        ]
      ],
      "frame": [
        [
          0.205,
          3.29,
          3.29,
          7.45,
          0.14,
          0.14
        ],
        [
          0.205,
          0.15,
          3.29,
          7.45,
          0.2,
          0.14
        ],
        [
          -3.34,
          1.7,
          3.29,
          0.2,
          3.04,
          0.14
        ],
        [
          3.8,
          1.7,
          3.31,
          0.28,
          3.04,
          0.24
        ],
        [
          0.19499999999999984,
          2.665,
          3.325,
          4.5,
          0.21,
          0.17
        ],
        [
          0.255,
          1.35,
          3.36,
          0.125,
          2.5,
          0.1
        ],
        [
          0.16,
          2.665,
          3.415,
          0.36,
          0.09,
          0.04
        ],
        [
          -0.295,
          2.52,
          3.325,
          0.99,
          0.06,
          0.07
        ],
        [
          0.745,
          2.52,
          3.325,
          0.87,
          0.06,
          0.07
        ],
        [
          3.94,
          3.29,
          3.02,
          0.09,
          0.14,
          0.92
        ],
        [
          3.94,
          0.15,
          3.02,
          0.09,
          0.2,
          0.92
        ],
        [
          3.94,
          1.7,
          2.6,
          0.09,
          3.04,
          0.1
        ],
        [
          3.95,
          2.815,
          -2.5,
          0.07,
          0.09,
          0.99
        ],
        [
          3.95,
          2.065,
          -2.5,
          0.07,
          0.09,
          0.99
        ],
        [
          3.95,
          2.44,
          -2.975,
          0.07,
          0.84,
          0.05
        ],
        [
          3.95,
          2.44,
          -2.025,
          0.07,
          0.84,
          0.05
        ],
        [
          3.9625,
          1.225,
          0.815,
          0.045,
          2.45,
          0.08
        ],
        [
          3.9625,
          1.225,
          -0.315,
          0.045,
          2.45,
          0.08
        ],
        [
          3.9625,
          2.415,
          0.25,
          0.045,
          0.07,
          1.21
        ]
      ],
      "mullions": {
        "w": 0.065,
        "h": 3.07,
        "cy": 1.685,
        "cz": 3.33,
        "x": [
          -2.02,
          -0.83,
          1.21,
          2.41
        ]
      },
      "sideFeature": {
        "name": "Service door, louvre and side window",
        "material": "steel",
        "boxes": [
          [
            3.96,
            1.2,
            0.25,
            0.04,
            2.4,
            1.05
          ],
          [
            3.9875,
            0.45,
            0.42,
            0.015,
            0.3,
            0.7
          ],
          [
            3.9875,
            1.15,
            0.7,
            0.015,
            0.05,
            0.16
          ],
          [
            3.965,
            2.44,
            -2.5,
            0.03,
            0.66,
            0.85
          ]
        ]
      },
      "extraFeature": {
        "name": "Rooftop plant deck",
        "material": "galv",
        "boxes": [
          [
            -0.75,
            3.87,
            -1.75,
            2.3,
            0.5,
            0.55
          ],
          [
            -0.75,
            4.145,
            -1.75,
            2.42,
            0.05,
            0.7
          ],
          [
            -1.7,
            3.79,
            -1.75,
            0.06,
            0.34,
            0.6
          ],
          [
            0.2,
            3.79,
            -1.75,
            0.06,
            0.34,
            0.6
          ],
          [
            1.2,
            3.96,
            -1.65,
            1.05,
            0.68,
            0.72
          ],
          [
            1.2,
            3.96,
            -1.275,
            0.66,
            0.56,
            0.04
          ],
          {
            "cyl": [
              1.2,
              3.96,
              -1.245,
              0.21,
              0.03,
              16,
              1.5707963267948966
            ]
          },
          [
            2.05,
            4.02,
            -2.45,
            0.46,
            0.8,
            0.52
          ],
          {
            "cyl": [
              2.05,
              3.86,
              -2.17,
              0.035,
              0.48,
              8
            ]
          },
          [
            2.9,
            4.09,
            -1.95,
            1,
            0.94,
            0.9
          ],
          [
            2.9,
            4.09,
            -1.49,
            0.84,
            0.78,
            0.04
          ],
          [
            2.9,
            4.575,
            -1.95,
            1.06,
            0.03,
            0.96
          ]
        ]
      },
      "tintFeature": {
        "name": "Glazing decal bands",
        "material": "decal",
        "tones": [
          3121482,
          3121482,
          3121482,
          3121482,
          2068676,
          2068676,
          2068676,
          2068676
        ],
        "boxes": [
          [
            -2.105,
            1.25,
            3.245,
            2.51,
            0.03,
            0.012
          ],
          [
            0.185,
            1.25,
            3.325,
            2.03,
            0.03,
            0.012
          ],
          [
            2.495,
            1.25,
            3.245,
            2.59,
            0.03,
            0.012
          ],
          [
            3.965,
            1.25,
            2.99,
            0.012,
            0.03,
            0.82
          ],
          [
            -2.105,
            1.165,
            3.245,
            2.51,
            0.03,
            0.012
          ],
          [
            0.185,
            1.165,
            3.325,
            2.03,
            0.03,
            0.012
          ],
          [
            2.495,
            1.165,
            3.245,
            2.59,
            0.03,
            0.012
          ],
          [
            3.965,
            1.165,
            2.99,
            0.012,
            0.03,
            0.82
          ]
        ]
      },
      "condensers": []
    },
    "graphic": {
      "baked": "data:image/webp;base64,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",
      "size": [
        2048,
        384
      ],
      "background": "#E5E6E8",
      "ops": [
        {
          "type": "rect",
          "x": 0,
          "y": 0.03,
          "w": 1,
          "h": 0.284,
          "fill": "#35A24B"
        },
        {
          "type": "rect",
          "x": 0,
          "y": 0.814,
          "w": 1,
          "h": 0.118,
          "fill": "#2191C5"
        },
        {
          "type": "rect",
          "x": 0.32,
          "y": 0.402,
          "w": 0.072,
          "h": 0.115,
          "fill": "#35A24B"
        },
        {
          "type": "rect",
          "x": 0.32,
          "y": 0.54,
          "w": 0.072,
          "h": 0.115,
          "fill": "#1A90C8"
        },
        {
          "type": "text",
          "text": "FamilyMart",
          "x0": 0.404,
          "x1": 0.664,
          "cy": 0.545,
          "size": 0.24,
          "fill": "#2191C5"
        }
      ],
      "wall": {
        "meshes": [
          "building-shell",
          "parapet"
        ],
        "tile": 2.5,
        "size": 512,
        "seed": 20260828,
        "base": 248,
        "patches": 55,
        "patchAmp": 22,
        "streaks": 260,
        "streakAmp": 52,
        "specks": 3200,
        "speckAmp": 36
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

export function createFamilyMartStoreBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'FamilyMart Store Building';

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
  const PS = (G.parapetSides ?? { cy: 3.75, h: 0.4, thick: 0.24 }) as any;
  // Parapet plan size. It defaults to the full 8.00 m envelope width, but a building whose FASCIA
  // turns the corner has to pull the ring in: the return board is the outermost thing on that
  // elevation, and a parapet at the same +-4.00 both hides it and puts two co-facing planes at the
  // same x. `parapetW` and `PS.cx` are how a config buys that clearance without every sibling
  // moving.
  const PW = (G.parapetW ?? 8.0) as number;
  const PCX = (PS.cx ?? 3.88) as number;
  add('parapet', 'Parapet ring and fascia wall', boxes([
    [0, G.fasciaWall.cy, G.fasciaWall.cz, PW, G.fasciaWall.h, G.fasciaWall.d],
    // Side and rear upstands. `parapetSides` overrides the default 0.40 m upstand for a plate whose
    // parapet is a full-height ring rather than a low kerb; the front is always the taller face and
    // comes in through `fasciaWall`, which a plan extrusion could not express.
    [-PCX, PS.cy, (SF - 0.30 - 3.5) / 2, PS.thick, PS.h, SF + 3.20],
    [PCX, PS.cy, (SF - 0.30 - 3.5) / 2, PS.thick, PS.h, SF + 3.20],
    [0, PS.cy, -3.38, PW, PS.h, 0.24],
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

  /* A fourth merged slot. Two features in DIFFERENT materials cannot share a component, and a
   * plate that shows a galvanised plant deck AND a painted steel service door needs both. */
  if (G.extraFeature2) add('extra-feature-2', G.extraFeature2.name, boxes(G.extraFeature2.boxes), G.extraFeature2.material);

  /* A TINTED merged slot: one component, one material, and a per-BOX colour written into a vertex
   * colour attribute. This is how a two-colour applied graphic -- a vinyl decal band on a shopfront,
   * a painted stripe on a kerb -- ships without a material per colour, on a kit whose material
   * ceiling is the axis these props are tightest on after draw calls.
   *
   * Two rules make it safe. The material must be WHITE, because a vertex colour MULTIPLIES with
   * material.color and a tinted base would darken every tone. And EVERY vertex has to be written,
   * because the shader reads a missing colour attribute as (0,0,0) and renders the mesh black --
   * the failure that shipped the ubosot's walls and eight boundary stones as silhouettes. Both are
   * satisfied here by construction: the attribute is filled box by box over the whole merge. The
   * tones are LINEAR, matching how three.js multiplies them. */
  if (G.tintFeature) {
    const t = G.tintFeature;
    const list = t.boxes as (number[] | { cyl: number[] })[];
    const parts = list.map((b) => boxes([b]));
    const geo = mergeGeos(parts.map((g) => g.clone()));
    const col = new Float32Array(geo.getAttribute('position').count * 3);
    const c = new THREE.Color();
    let v = 0;
    for (let i = 0; i < parts.length; i++) {
      const n = parts[i].getAttribute('position').count;
      c.setHex(t.tones[i % t.tones.length]);
      // setHex on a Color is sRGB-decoded by three.js when colorManagement is on, which is what a
      // vertex colour wants: the multiply happens in linear space.
      for (let k = 0; k < n; k++) { col[(v + k) * 3] = c.r; col[(v + k) * 3 + 1] = c.g; col[(v + k) * 3 + 2] = c.b; }
      v += n;
      parts[i].dispose();
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const mesh = add('tint-feature', t.name, geo, t.material);
    (mesh.material as THREE.MeshStandardMaterial).vertexColors = true;
    (mesh.material as THREE.MeshStandardMaterial).needsUpdate = true;
  }

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
   * Feet start below the deck top so the two overlap rather than sharing a plane.
   *
   * An EMPTY list is a legitimate answer, not a missing config. Instancing one casing is the right
   * lever when a plate shows the same box two or three times; it is the wrong one when the plate
   * shows genuinely different units -- a hooded duct run, a wall-type condenser with a square fan
   * guard, a tall louvred tower -- and repeating one casing three times is then a simplification
   * that costs fidelity to save nothing. Such a plant deck comes in through `extraFeature` as
   * merged geometry: still ONE draw call, and every unit its own shape. */
  if ((G.condensers as number[][] ?? []).length) {
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

/* ------------------------------------------------------------------ wall render graphic */

/** A rendered concrete wall is not a flat colour. Every plate in this set shows the same thing --
 *  vertical rain streaking off the coping, patchy float marks, a darker band where the wall meets
 *  the ground -- and a wall authored as one albedo reads as painted card next to the shopfront's
 *  real detail. `graphic.wall` paints a SEAMLESS tile once and repeats it over the wall meshes.
 *
 *  It is a post-construction canvas, so the material stays `textureless` in the spec: what that
 *  declaration skips is createSculptMaterial's five-canvas procedural set, which costs the square
 *  of its resolution and discards the measured albedo. One tile drawn once costs milliseconds and
 *  keeps the albedo, because the tile is authored in MULTIPLIER space -- mid-grey 128 is "leave the
 *  measured colour alone" -- and is applied as `map` over the material's own colour.
 *
 *  UVs are metric and WORLD-PLANAR, chosen per vertex off the face normal: an X-facing face is
 *  projected (z, y), a Z-facing face (x, y), a Y-facing face (x, z). Box UVs would stretch one
 *  tile over each face, which puts a 7-metre-wide streak on the side wall and a 0.24-metre-wide one
 *  on the parapet coping. */
function applyWallGraphic(root: THREE.Group): void {
  const g = (CONFIG.graphic as any)?.wall;
  if (!g || typeof document === 'undefined') return;
  const rt = root.userData.sculptRuntime as ProceduralModelRuntime | undefined;
  if (!rt) return;
  const tile = g.tile ?? 2.5;
  let tex: THREE.Texture | null = null;
  for (const id of (g.meshes as string[])) {
    const mesh = rt.meshes?.[id];
    if (!mesh) continue;
    const geo = mesh.geometry as THREE.BufferGeometry;
    const pos = geo.getAttribute('position'), nrm = geo.getAttribute('normal');
    if (!pos || !nrm) continue;
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      const ax = Math.abs(nrm.getX(i)), ay = Math.abs(nrm.getY(i)), az = Math.abs(nrm.getZ(i));
      let u: number, v: number;
      if (ax >= ay && ax >= az) { u = pos.getZ(i); v = pos.getY(i); }
      else if (az >= ay) { u = pos.getX(i); v = pos.getY(i); }
      else { u = pos.getX(i); v = pos.getZ(i); }
      uv[i * 2] = u / tile; uv[i * 2 + 1] = v / tile;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    if (!tex) {
      const canvas = drawWallCanvas(g);
      if (!canvas) return;
      tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.RepeatWrapping;
      const srgb = (THREE as any).SRGBColorSpace;
      if (srgb) tex.colorSpace = srgb;
      tex.anisotropy = 4; tex.needsUpdate = true;
    }
    const material = mesh.material as THREE.MeshStandardMaterial;
    // ONE texture for however many meshes share the material: assigning per mesh would upload the
    // same canvas twice and cost VRAM for nothing.
    if (material && material.map !== tex) { material.map = tex; material.needsUpdate = true; }
  }
}

/** Seamless render tile in MULTIPLIER space, and the neutral value is WHITE, not mid-grey.
 *  `map` multiplies the material colour by the texture's LINEAR value, and the texture is decoded
 *  as sRGB, so a tile drawn around 128 multiplies the measured albedo by 0.216 and renders a light
 *  grey render wall near black -- which is exactly what the first build of this tile did. `base`
 *  therefore sits just under white and every mark DARKENS from it; the wall's own albedo stays the
 *  material's, and the tile only ever takes value away.
 *
 *  Everything wraps by drawing each mark a second time at x-W and x+W, which is what makes the
 *  tile seamless -- a mark clipped at the edge is the single most visible artefact when a wall is
 *  8 tiles wide. */
function drawWallCanvas(g: any): HTMLCanvasElement | null {
  const N = g.size ?? 512;
  const canvas = document.createElement('canvas');
  canvas.width = N; canvas.height = N;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  let seed = g.seed ?? 20260828;
  const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const base = g.base ?? 246;
  ctx.fillStyle = `rgb(${base},${base},${base})`;
  ctx.fillRect(0, 0, N, N);

  // Broad float-mark blotches: low-frequency patchiness in the render coat.
  for (let i = 0; i < (g.patches ?? 90); i++) {
    const x = rnd() * N, y = rnd() * N, r = (0.05 + rnd() * 0.18) * N;
    const v = base - rnd() * (g.patchAmp ?? 26);
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, `rgba(${v | 0},${v | 0},${v | 0},0.55)`);
    grad.addColorStop(1, `rgba(${v | 0},${v | 0},${v | 0},0)`);
    ctx.fillStyle = grad;
    for (const dx of [-N, 0, N]) { ctx.save(); ctx.translate(dx, 0); ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); ctx.restore(); }
  }
  // Vertical rain streaks. Narrow, soft-edged, top-weighted -- water runs DOWN from the coping and
  // fades out, so the alpha ramps to nothing at the bottom of each streak rather than stopping.
  for (let i = 0; i < (g.streaks ?? 130); i++) {
    const x = rnd() * N, w = (0.002 + rnd() * 0.010) * N;
    const y0 = rnd() * N * 0.5, len = (0.25 + rnd() * 0.75) * N;
    const dark = base - (6 + rnd() * (g.streakAmp ?? 22));
    const grad = ctx.createLinearGradient(0, y0, 0, y0 + len);
    grad.addColorStop(0, `rgba(${dark | 0},${dark | 0},${dark | 0},0.42)`);
    grad.addColorStop(0.35, `rgba(${dark | 0},${dark | 0},${dark | 0},0.26)`);
    grad.addColorStop(1, `rgba(${dark | 0},${dark | 0},${dark | 0},0)`);
    ctx.fillStyle = grad;
    for (const dx of [-N, 0, N]) ctx.fillRect(x + dx - w / 2, y0, w, len);
  }
  // Fine speckle: the aggregate in the render, at the limit of what a prop-distance viewer resolves.
  for (let i = 0; i < (g.specks ?? 2600); i++) {
    const x = rnd() * N, y = rnd() * N, r = 0.5 + rnd() * 1.6;
    const v = base - rnd() * (g.speckAmp ?? 30);
    ctx.fillStyle = `rgba(${v | 0},${v | 0},${v | 0},0.30)`;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }
  return canvas;
}

/* ------------------------------------------------------------------ thaikit entry point */

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it with
 * (spec, options). `spec` is accepted and attached for host-side inspection -- the reconstruction
 * data already lives in this module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  const root = createFamilyMartStoreBuildingModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  applyFasciaGraphic(root);
  applyGlassGraphic(root);
  applyWallGraphic(root);

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
