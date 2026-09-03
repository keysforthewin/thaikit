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
        "cy": 4.375,
        "cz": 3.1,
        "h": 1.65,
        "d": 0.6
      },
      "fasciaWallMaterial": "wall",
      "parapetW": 7.95,
      "parapetSides": {
        "cy": 4.375,
        "h": 1.65,
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
            "h": 1.38,
            "d": 0.12,
            "at": [
              0,
              4.09,
              3.44
            ],
            "face": "+Z"
          },
          {
            "w": 0.12,
            "h": 1.38,
            "d": 2.55,
            "at": [
              3.94,
              4.09,
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
            4.03,
            -1.75,
            2.3,
            0.82,
            0.55
          ],
          [
            -0.75,
            4.465,
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
            4.18,
            -1.65,
            1.05,
            1.12,
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
            4.275,
            -2.45,
            0.46,
            1.31,
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
            4.39,
            -1.95,
            1,
            1.54,
            0.9
          ],
          [
            2.9,
            4.39,
            -1.49,
            0.84,
            1.3,
            0.04
          ],
          [
            2.9,
            5.175,
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
        4096,
        768
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

/** Merge a box list with a per-ENTRY tone written into a vertex colour attribute. The material
 *  that draws it must then have `vertexColors` on -- see `finishVertexColors` -- and every other
 *  geometry on that material needs a white attribute, or it renders black. Tones are sRGB hexes,
 *  decoded to linear by setHex, which is the space the shader multiplies in. */
function tonedBoxes(list: (number[] | { cyl: number[] })[], tones: (number | undefined)[]) {
  const parts = list.map((b) => boxes([b]));
  const geo = mergeGeos(parts.map((g) => g.clone()));
  const col = new Float32Array(geo.getAttribute('position').count * 3);
  const c = new THREE.Color();
  let v = 0;
  for (let i = 0; i < parts.length; i++) {
    const n = parts[i].getAttribute('position').count;
    c.setHex(tones[i] ?? 0xffffff);
    for (let k = 0; k < n; k++) { col[(v + k) * 3] = c.r; col[(v + k) * 3 + 1] = c.g; col[(v + k) * 3 + 2] = c.b; }
    v += n;
    parts[i].dispose();
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return geo;
}
/** Turn `vertexColors` on for a material and give every geometry that shares it a WHITE colour
 *  attribute where one is missing. The shader reads an absent attribute as (0,0,0): one tinted
 *  part makes its whole material poisonous to every untinted mesh on it. */
function finishVertexColors(materials: Record<string, THREE.MeshStandardMaterial>, meshes: Record<string, THREE.Mesh>, matId: string) {
  const m = materials[matId];
  if (!m || m.vertexColors) return;
  m.vertexColors = true; m.needsUpdate = true;
  for (const mesh of Object.values(meshes)) {
    if (mesh.material !== m) continue;
    const geo = mesh.geometry as THREE.BufferGeometry;
    if (geo.getAttribute('color')) continue;
    const n = geo.getAttribute('position').count;
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * 3).fill(1), 3));
  }
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
  // `shellBox` [cx, cy, cz, w, h, d] replaces the full-module shell for a plate whose enclosed volume
  // does not fill the slab -- the PTT kiosk sits under the rear-right of an 8 x 7 canopy slab.
  const SB = (G.shellBox as number[] | undefined) ?? [0, 1.775, (SF - 3.44) / 2, 7.88, 3.55, SF + 3.44];
  // `shellBoxes` replaces the shell with SEVERAL boxes in one submission, for a plate whose wall has
  // a recess in it -- a service door set back into a reveal (MK). The pocket is left open by the
  // boxes around it, so the leaf inside can sit BEHIND the wall face without a hole being cut.
  add('building-shell', 'Building shell',
      G.shellBoxes ? boxes(G.shellBoxes as number[][]) : boxAt(SB[0], SB[1], SB[2], SB[3], SB[4], SB[5]), 'wall');
  colliders['building-shell'] = {
    // Half-height follows the parapet coping, so a taller module (FamilyMart's 5.20) is not
    // declared 2.3 m tall; every 4.60 sibling still gets exactly 2.3.
    shape: 'box', localCenter: [0, ((G.fasciaWall?.cy ?? 4.075) + (G.fasciaWall?.h ?? 1.05) / 2) / 2, 0], halfExtents: [4.0, ((G.fasciaWall?.cy ?? 4.075) + (G.fasciaWall?.h ?? 1.05) / 2) / 2, 3.5],
    notes: 'Asset declares collider "box". One convex proxy over the whole envelope.',
  };

  /* Roof deck spans y 3.50..3.62 by default, so its underside is sunk INTO the shell rather than
   * resting on it. Authored flush, the deck's bottom face and the parapet ring's bottom face were
   * both at y=3.550 and both facing down -- 46 m2 of coplanar co-facing surface.
   *
   * `deckY` raises it inside the parapet ring, which is what a plate showing a SHALLOW roof well
   * needs: with the deck at the shell top and a ring that runs to the coping, the rooftop plant
   * sits in a 0.8 m pit and only its lids clear the parapet, when the plate shows most of each
   * unit standing above it. Raising the deck cannot raise the plant past the declared 4.60 m --
   * that is what the coping is -- but it is what decides how much of it a viewer sees. */
  // `deckExtra` folds more boxes into the deck's submission -- a dark backdrop slab behind a glazed
  // opening, so a shopfront with no interior image shows a dark room through its glass and its
  // delivery hatch reads as a HOLE rather than as a patch of the render wall.
  // `deckBox` [cx, cy, cz, w, h, d] replaces the full-module deck the same way `shellBox` does.
  const DB = (G.deckBox as number[] | undefined) ?? [0, (G.deckY ?? 3.56) as number, (SF - 0.02 - 3.42) / 2, 7.8, 0.12, SF + 3.40];
  const deckGeo = boxAt(DB[0], DB[1], DB[2], DB[3], DB[4], DB[5]);
  // `deckExtraTones` (one per deckExtra box; the deck itself stays white) is how the backdrop is
  // DARK while the deck keeps its measured tone: one material, one draw call, a vertex colour.
  const tonedDeck = !!G.deckExtraTones;
  add('roof-deck', 'Roof deck',
      G.deckExtra
        ? (tonedDeck
            // `deckTone` tints the deck box itself, for a plate whose plant rides the deck MATERIAL
            // (a galvanised tile shared by the units and the membrane) while the membrane keeps its
            // own measured tone. Left unset the deck is white, i.e. the material's authored colour.
            ? tonedBoxes([DB, ...(G.deckExtra as number[][])],
                         [G.deckTone as number | undefined, ...(G.deckExtraTones as number[])])
            : mergeGeos([deckGeo, boxes(G.deckExtra as number[][])]))
        : deckGeo, 'deck');
  if (tonedDeck) deckGeo.dispose();

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
  // `parapetBoxes` replaces the whole default ring (fascia wall + three upstands) for a plate whose
  // roof edge is not the shared module's -- a canopy slab with its own fascia depths per side.
  add('parapet', 'Parapet ring and fascia wall', boxes(G.parapetBoxes ? [...(G.parapetBoxes as number[][]), ...((G.parapetExtra ?? []) as number[][])] : [
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
    // `boxes` lets the pane be several PANELS in one component -- a fixed run, a transom light
    // over the door bay, and a gap where a delivery hatch opens -- without costing a draw call
    // per panel. `glazingExtra` is the older single-pane-plus-extras form and still works.
    const pane = G.glazing.boxes
      ? boxes(G.glazing.boxes as number[][])
      : boxAt(G.glazing.cx ?? 0, G.glazing.cy, G.glazing.cz ?? 2.51, G.glazing.w, G.glazing.h, G.glazing.d ?? 0.10);
    const extra = (G.glazingExtra ?? []) as number[][];
    add('shopfront-glazing', 'Shopfront glazing',
        extra.length ? mergeGeos([pane, ...extra.map((b) => boxAt(b[0], b[1], b[2], b[3], b[4], b[5]))]) : pane, 'glass');
  }

  /* Framing, transom, kick rail, door jambs and header MERGED into one component. Every part is
   * the same metal; folding them together is the draw-call lever chosen in the blockout, not an
   * optimisation deferred to the end -- a part split for authoring convenience cannot be merged
   * afterwards once a pivot hangs off it. Front face stands proud of glazing and mullions. */
  add('shopfront-frame', 'Shopfront framing and door bay', boxes(G.frame), G.frameMaterial);

  /* Entrance door: a real LEAF on a real HINGE, not a rectangle painted into the glazing. The
   * leaf is built in hinge-local coordinates (x runs from the hinge stile outward) under a pivot
   * node at the jamb, so rotating that node about +Y swings the door. Two meshes -- stiles and
   * rails in the frame metal, a pane in the glass -- and this is the one part of an otherwise
   * static shell that earns a named pivot. The leaf sits in its own depth band between the
   * glazing and the fixed frame so nothing on it is coplanar with a fixed face at any angle. */
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
    const st = d.stile ?? 0.08, D = d.depth ?? 0.12;
    // `flip` hangs the leaf on the OTHER jamb: local +x runs toward -X instead of +X, so the
    // handle lands on the correct edge for a plate whose door pull is on the left. It is a sign
    // on the x coordinates rather than a mirrored transform, because a negative scale inverts
    // every normal on the leaf and the glass then renders inside-out.
    const sx = d.flip ? -1 : 1;
    const hx = w - (d.handle ? (d.handle[0] ?? 0.16) : 0);
    const leafFrame = boxes([
      [sx * (st / 2), ym, 0, st, h, D],
      [sx * (w - st / 2), ym, 0, st, h, D],
      [sx * (w / 2), y1 - 0.04, 0, w, 0.08, D],
      [sx * (w / 2), y0 + 0.16, 0, w, 0.32, D],
      [sx * (w / 2), d.railY ?? 1.05, 0, w, 0.07, D],
      // Pull handle: a vertical bar on two stand-offs, on the swinging edge. The plate shows one
      // and it is the detail that reads a glass leaf as a door rather than as another pane.
      ...(d.handle ? [
        { cyl: [sx * hx, (d.handle[1] ?? 1.05), D / 2 + 0.05, 0.018, d.handle[2] ?? 0.80, 10] },
        [sx * hx, (d.handle[1] ?? 1.05) + (d.handle[2] ?? 0.80) / 2 - 0.03, D / 2 + 0.025, 0.036, 0.036, 0.10],
        [sx * hx, (d.handle[1] ?? 1.05) - (d.handle[2] ?? 0.80) / 2 + 0.03, D / 2 + 0.025, 0.036, 0.036, 0.10],
      ] : []),
    ] as any);
    const leafPane = boxAt(sx * (w / 2), (y0 + 0.32 + y1 - 0.08) / 2, 0, w - 2 * st, y1 - 0.08 - (y0 + 0.32), 0.04);
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
    /* `condenserParts` replaces the default casing with an authored unit in the SAME box/cyl
     * grammar, in unit-local coordinates (origin on the deck, the grille facing +Z before yaw).
     * A packaged rooftop unit is not a plain box: the plate shows a recessed louvre panel with a
     * fan disc behind it, a lidded top with a round cowl opening, and panel seams down the long
     * side. All of it merges into the ONE instanced geometry, so the detail is free per unit. */
    let unit: THREE.BufferGeometry;
    if (G.condenserParts && G.condenserTones) {
      // Per-part tones: a dark back plate and fan disc behind lighter blades is what makes a louvre
      // grille read as an intake rather than as a panel of the casing. The tint rides a vertex
      // colour on the plant material, and every other mesh on that material is filled white below.
      unit = tonedBoxes(G.condenserParts as (number[] | { cyl: number[] })[], G.condenserTones as number[]);
    } else if (G.condenserParts) {
      unit = boxes(G.condenserParts as (number[] | { cyl: number[] })[]);
    } else {
      const parts: THREE.BufferGeometry[] = [
        boxAt(0, 0.46, 0, 0.95, 0.72, 0.85),
        cylAt(0, 0.87, 0, 0.30, 0.10, 16),
      ];
      for (const fx of [-0.4, 0.4]) for (const fz of [-0.35, 0.35]) parts.push(boxAt(fx, 0.05, fz, 0.08, 0.10, 0.08));
      unit = mergeGeos(parts);
    }
    // An optional fourth number is a UNIFORM SCALE, so one instanced unit can stand in for a plate
    // that shows one large condenser beside two small ones without a second geometry.
    const mats = (G.condensers as number[][]).map(([x, z, yaw, s]) =>
      new THREE.Matrix4().compose(
        new THREE.Vector3(x, (G.condenserY ?? 3.60) as number, z),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
        new THREE.Vector3(s ?? 1, s ?? 1, s ?? 1),
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

  /* Vertex-colour fill-in runs LAST, over every mesh that exists. It used to run right after the
   * deck and the plant were added, so any later mesh on the same material -- Makro's concrete
   * canopy and plinth on the toned deck material -- had no colour attribute and rendered BLACK. */
  if (tonedDeck) finishVertexColors(materials, meshes, 'deck');
  if (G.condenserTones && (G.condensers as number[][] ?? []).length) finishVertexColors(materials, meshes, G.plantMaterial ?? 'galv');

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
  const [x0, y0, x1, y1] = g.rect as number[];
  // `also` extends the projection to panes that are NOT in the glazing component -- a hinged door
  // leaf, whose geometry is authored in HINGE-local coordinates, so it names the offset from the
  // hinge to the world origin and the same world rect then lands on it. Without this the leaf is
  // the one pane in the shopfront with no interior behind it, which reads as a blind panel in
  // the middle of a window.
  const targets = [{ id: 'shopfront-glazing', off: [0, 0, 0] }, ...((g.also ?? []) as any[])];
  let material: THREE.MeshStandardMaterial | null = null;
  for (const t of targets) {
    const mesh = rt?.meshes?.[t.id];
    if (!mesh) continue;
    const m = mesh.material as THREE.MeshStandardMaterial;
    if (!m) continue;
    material = material ?? m;
    const geo = mesh.geometry as THREE.BufferGeometry;
    const pos = geo.getAttribute('position');
    const off = (t.off ?? [0, 0, 0]) as number[];
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      uv[i * 2] = (pos.getX(i) + off[0] - x0) / (x1 - x0);
      uv[i * 2 + 1] = (pos.getY(i) + off[1] - y0) / (y1 - y0);
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  }
  if (!material) return;
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
  const gr = CONFIG.graphic as any;
  if (!gr || typeof document === 'undefined') return;
  // `graphic.wall` is the original single entry; `graphic.walls` is a list of further entries in
  // the same shape, one per material that carries its own tile -- a grime tile on the coping and
  // the shutter hood, a dirt tile on the yellow surround, a galvanised spangle on the plant.
  const entries = [gr.wall, ...((gr.walls ?? []) as any[])].filter(Boolean);
  const rt = root.userData.sculptRuntime as ProceduralModelRuntime | undefined;
  if (!rt) return;
  for (const g of entries) applyOneWallGraphic(rt, g);
}

function applyOneWallGraphic(rt: ProceduralModelRuntime, g: any): void {
  const tile = g.tile ?? 2.5;
  const N = g.size ?? 512;
  // `clean` is a world-space XY rectangle whose vertices are pinned to one texel the tile leaves
  // untouched -- the delivery counter has to stay spotless yellow while the lintel and jambs it
  // shares a material with take the weather. The pin lands on a corner the canvas fills with the
  // base value after every mark is drawn (all four corners, since the tile wraps).
  const clean = g.clean as number[] | undefined;
  const pin = 6 / N;
  let tex: THREE.Texture | null = null;
  for (const id of (g.meshes as string[])) {
    const mesh = rt.meshes?.[id];
    if (!mesh) continue;
    const geo = mesh.geometry as THREE.BufferGeometry;
    const pos = geo.getAttribute('position'), nrm = geo.getAttribute('normal');
    if (!pos || !nrm) continue;
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
      if (clean && x >= clean[0] && x <= clean[2] && y >= clean[1] && y <= clean[3]) {
        uv[i * 2] = pin; uv[i * 2 + 1] = pin;
        continue;
      }
      const ax = Math.abs(nrm.getX(i)), ay = Math.abs(nrm.getY(i)), az = Math.abs(nrm.getZ(i));
      let u: number, v: number;
      if (ax >= ay && ax >= az) { u = z; v = y; }
      else if (az >= ay) { u = x; v = y; }
      else { u = x; v = z; }
      uv[i * 2] = u / tile; uv[i * 2 + 1] = v / tile;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    if (!tex) {
      const srgb = (THREE as any).SRGBColorSpace;
      if (g.image) {
        // A BAKED tile -- a seamless, multiplier-normalised image embedded as a data URI, the way
        // the fascia is -- for a surface whose finish a drawn canvas cannot reach: galvanised
        // spangle. Assigned synchronously so the harness waits on the decode.
        tex = new THREE.TextureLoader().load(g.image);
      } else {
        const canvas = drawWallCanvas(g);
        if (!canvas) return;
        tex = new THREE.CanvasTexture(canvas);
      }
      tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.RepeatWrapping;
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
  // Board marks: the horizontal seams a shuttered concrete pour leaves, one per board. Faint --
  // this is a rendered wall and the seam shows through the coat rather than on it -- and drawn as
  // a soft pair (a dark line under a slightly lighter one) because that is what a lipped shutter
  // joint does to the light. `seamPitch` is in TILE fractions, so it lands on the same metric
  // spacing wherever the tile repeats.
  if (g.seams) {
    const pitch = (g.seamPitch ?? 0.375) * N;
    const amp = g.seamAmp ?? 9;
    for (let y = pitch * 0.5; y < N + pitch; y += pitch) {
      const yy = y % N;
      const d = base - amp, l = Math.min(255, base + amp * 0.35);
      ctx.fillStyle = `rgba(${d | 0},${d | 0},${d | 0},0.5)`;
      ctx.fillRect(0, yy, N, 1.6);
      ctx.fillStyle = `rgba(${l | 0},${l | 0},${l | 0},0.35)`;
      ctx.fillRect(0, yy + 1.6, N, 1.2);
    }
  }
  // Fine speckle: the aggregate in the render, at the limit of what a prop-distance viewer resolves.
  for (let i = 0; i < (g.specks ?? 2600); i++) {
    const x = rnd() * N, y = rnd() * N, r = 0.5 + rnd() * 1.6;
    const v = base - rnd() * (g.speckAmp ?? 30);
    ctx.fillStyle = `rgba(${v | 0},${v | 0},${v | 0},0.30)`;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }
  // A clean texel for `clean`-pinned vertices: every corner, because the tile wraps and the pin
  // sits 6 px in from (0, 0).
  ctx.fillStyle = `rgb(${base},${base},${base})`;
  for (const [x, y] of [[0, 0], [N - 12, 0], [0, N - 12], [N - 12, N - 12]]) ctx.fillRect(x, y, 12, 12);
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

    // Pivots: the root, plus whatever the config actually hung a mechanism on -- `door-hinge`
    // for a swinging entrance leaf, and nothing else. A roller shutter authored as fixed
    // geometry gets no axis: a named pivot is a promise that a part turns on it, and a prop
    // that declares pivots it has no mechanisms for has described a machine that does not exist.
    const pivots: THREE.Object3D[] = [...(((rt as any).pivotNodes ?? []) as THREE.Object3D[])];
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
 * what a vibe3d consumer installs and calls. The emitted `model.ts` beside this
 * file IMPORTS it by name, so a factory without it fails the pack build with
 * "No matching export ... for import createModel" -- which is how it was found.
 */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}
