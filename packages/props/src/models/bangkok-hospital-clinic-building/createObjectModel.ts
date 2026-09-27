import * as THREE from 'three';

/**
 * Bangkok Hospital Clinic Building -- procedural Three.js factory.
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
  "id": "bangkok-hospital-clinic-building",
  "name": "Bangkok Hospital Clinic Building",
  "exportName": "BangkokHospitalClinicBuilding",
  "materials": [
    {
      "id": "wall",
      "color": 15654852,
      "roughness": 0.88,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 9606553,
      "roughness": 0.93,
      "metalness": 0
    },
    {
      "id": "white",
      "color": 12896462,
      "roughness": 0.62,
      "metalness": 0
    },
    {
      "id": "fascia",
      "color": 3898328,
      "roughness": 0.42,
      "metalness": 0,
      "envMapIntensity": 0.6
    },
    {
      "id": "glass",
      "color": 6779243,
      "roughness": 0.18,
      "metalness": 0,
      "opacity": 0.97,
      "envMapIntensity": 0.55
    },
    {
      "id": "frame",
      "color": 11647167,
      "roughness": 0.44,
      "metalness": 0.3
    },
    {
      "id": "galv",
      "color": 12896202,
      "roughness": 0.52,
      "metalness": 0.3
    }
  ],
  "geometry": {
    "shellFront": 2.25,
    "shellBox": [
      0,
      2.45,
      -0.595,
      7.88,
      4.9,
      5.69
    ],
    "deckY": 4.96,
    "condenserY": 5.02,
    "parapetBoxes": [
      [
        0,
        5.15,
        2.055,
        7.8,
        0.6,
        0.23
      ],
      [
        -3.86,
        5.05,
        -1.3,
        0.24,
        0.4,
        4.4
      ],
      [
        3.86,
        5.05,
        -1.3,
        0.24,
        0.4,
        4.4
      ],
      [
        0,
        5.05,
        -3.38,
        7.96,
        0.4,
        0.24
      ]
    ],
    "plantMaterial": "galv",
    "fasciaWall": {
      "cy": 5.15,
      "cz": 2.055,
      "h": 0.6,
      "d": 0.23
    },
    "fasciaWallMaterial": "wall",
    "parapetExtra": [
      [
        -3.86,
        5.35,
        -1.3,
        0.24,
        0.2,
        4.4
      ],
      [
        3.86,
        5.35,
        -1.3,
        0.24,
        0.2,
        4.4
      ],
      [
        0,
        5.35,
        -3.38,
        7.96,
        0.2,
        0.24
      ]
    ],
    "frameMaterial": "frame",
    "fascia": {
      "boards": [
        {
          "w": 7.8,
          "h": 1,
          "d": 0.14,
          "at": [
            0,
            3.86,
            2.99
          ],
          "face": "+Z"
        }
      ]
    },
    "glazing": {
      "cx": 0,
      "w": 7.8,
      "h": 3.26,
      "cy": 1.68,
      "cz": 2.76
    },
    "glazingExtra": [
      [
        3.9425,
        3.52,
        1.5,
        0.045,
        1.54,
        1.14
      ],
      [
        3.9425,
        1.25,
        1.5,
        0.045,
        2.34,
        1.14
      ]
    ],
    "frame": [
      [
        0,
        0.06,
        2.8,
        7.8,
        0.1,
        0.16
      ],
      [
        0,
        2.405,
        2.8,
        7.8,
        0.09,
        0.16
      ],
      [
        -3.875,
        1.25,
        2.8,
        0.09,
        2.5,
        0.16
      ],
      [
        3.875,
        1.25,
        2.8,
        0.09,
        2.5,
        0.16
      ],
      [
        0,
        2.08,
        2.8,
        7.8,
        0.06,
        0.12
      ],
      [
        -0.75,
        1.08,
        2.81,
        0.1,
        1.94,
        0.14
      ],
      [
        0.75,
        1.08,
        2.81,
        0.1,
        1.94,
        0.14
      ],
      [
        0,
        1.08,
        2.805,
        0.04,
        1.94,
        0.13
      ],
      [
        0,
        2.695,
        2.8,
        7.8,
        0.09,
        0.16
      ],
      [
        0,
        3.295,
        2.8,
        7.8,
        0.09,
        0.16
      ],
      [
        -3.875,
        2.995,
        2.8,
        0.09,
        0.6,
        0.16
      ],
      [
        3.875,
        2.995,
        2.8,
        0.09,
        0.6,
        0.16
      ],
      [
        -2.95,
        2.995,
        2.8,
        0.06,
        0.6,
        0.12
      ],
      [
        -1.4,
        2.995,
        2.8,
        0.06,
        0.6,
        0.12
      ],
      [
        0.15,
        2.995,
        2.8,
        0.06,
        0.6,
        0.12
      ],
      [
        1.1,
        2.995,
        2.8,
        0.06,
        0.6,
        0.12
      ],
      [
        2.05,
        2.995,
        2.8,
        0.06,
        0.6,
        0.12
      ],
      [
        3,
        2.995,
        2.8,
        0.06,
        0.6,
        0.12
      ],
      [
        -2.86,
        5.18,
        2.93,
        0.03,
        1.54,
        0.02
      ],
      [
        -1.72,
        5.18,
        2.93,
        0.03,
        1.54,
        0.02
      ],
      [
        -0.58,
        5.18,
        2.93,
        0.03,
        1.54,
        0.02
      ],
      [
        0.56,
        5.18,
        2.93,
        0.03,
        1.54,
        0.02
      ],
      [
        1.7,
        5.18,
        2.93,
        0.03,
        1.54,
        0.02
      ],
      [
        2.84,
        5.18,
        2.93,
        0.03,
        1.54,
        0.02
      ],
      [
        3.96,
        3.52,
        0.935,
        0.06,
        1.6,
        0.07
      ],
      [
        3.96,
        3.52,
        2.065,
        0.06,
        1.6,
        0.07
      ],
      [
        3.96,
        4.285,
        1.5,
        0.06,
        0.07,
        1.2
      ],
      [
        3.96,
        2.755,
        1.5,
        0.06,
        0.07,
        1.2
      ],
      [
        3.96,
        3.52,
        1.5,
        0.06,
        1.6,
        0.05
      ],
      [
        3.96,
        1.25,
        0.935,
        0.06,
        2.4,
        0.07
      ],
      [
        3.96,
        1.25,
        2.065,
        0.06,
        2.4,
        0.07
      ],
      [
        3.96,
        2.415,
        1.5,
        0.06,
        0.07,
        1.2
      ],
      [
        3.96,
        0.085,
        1.5,
        0.06,
        0.07,
        1.2
      ],
      [
        3.96,
        1.25,
        1.5,
        0.06,
        2.4,
        0.05
      ],
      [
        3.96,
        2.08,
        1.5,
        0.06,
        0.05,
        1.2
      ],
      [
        3.965,
        1.05,
        -1.54,
        0.05,
        2.1,
        0.08
      ],
      [
        3.965,
        1.05,
        -0.56,
        0.05,
        2.1,
        0.08
      ],
      [
        3.965,
        2.14,
        -1.05,
        0.05,
        0.08,
        1.06
      ],
      [
        3.9625,
        1.05,
        -0.68,
        0.015,
        0.05,
        0.05
      ],
      [
        3.98,
        1.05,
        -0.72,
        0.02,
        0.02,
        0.11
      ]
    ],
    "mullions": {
      "w": 0.07,
      "h": 2.25,
      "cy": 1.235,
      "cz": 2.81,
      "x": [
        -2.83,
        -1.79,
        1.79,
        2.83
      ]
    },
    "frontFeature": {
      "name": "White cladding block",
      "material": "white",
      "boxes": [
        [
          0,
          4.67,
          2.545,
          8,
          2.66,
          0.75
        ],
        [
          -3.95,
          1.67,
          2.545,
          0.1,
          3.34,
          0.75
        ],
        [
          3.95,
          1.67,
          2.545,
          0.1,
          3.34,
          0.75
        ],
        [
          -3.945,
          5.18,
          1.535,
          0.1,
          1.64,
          1.27
        ],
        [
          3.945,
          5.18,
          1.535,
          0.1,
          1.64,
          1.27
        ]
      ]
    },
    "sideFeature": {
      "name": "Service door",
      "material": "white",
      "boxes": [
        [
          3.9475,
          1.05,
          -1.05,
          0.015,
          2.1,
          0.9
        ],
        [
          4.015,
          2.2,
          -1.05,
          0.15,
          0.06,
          1.14
        ]
      ]
    },
    "extraFeature": {
      "name": "Entrance canopy",
      "material": "white",
      "boxes": [
        [
          0,
          2.55,
          3.21,
          8,
          0.2,
          0.58
        ]
      ]
    },
    "condenserParts": [
      [
        0,
        0.5,
        0,
        1.2,
        0.9,
        1.1
      ],
      [
        0,
        0.5,
        0.554,
        1.04,
        0.76,
        0.008
      ],
      [
        0,
        0.5,
        -0.554,
        1.04,
        0.76,
        0.008
      ],
      [
        0.604,
        0.5,
        0,
        0.008,
        0.76,
        0.9400000000000001
      ],
      [
        -0.604,
        0.5,
        0,
        0.008,
        0.76,
        0.9400000000000001
      ],
      [
        0,
        0.9560000000000001,
        0,
        1.08,
        0.012,
        0.9800000000000001
      ],
      {
        "cyl": [
          0,
          0.9660000000000001,
          0,
          0.36,
          0.012,
          24
        ]
      },
      [
        -0.5,
        0.03,
        -0.45,
        0.1,
        0.06,
        0.1
      ],
      [
        -0.5,
        0.03,
        0.45,
        0.1,
        0.06,
        0.1
      ],
      [
        0.5,
        0.03,
        -0.45,
        0.1,
        0.06,
        0.1
      ],
      [
        0.5,
        0.03,
        0.45,
        0.1,
        0.06,
        0.1
      ],
      [
        0,
        0.18,
        -0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.18,
        0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.23399999999999999,
        -0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.23399999999999999,
        0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.288,
        -0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.288,
        0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.34199999999999997,
        -0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.34199999999999997,
        0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.396,
        -0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.396,
        0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.45,
        -0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.45,
        0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.504,
        -0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.504,
        0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.558,
        -0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.558,
        0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.612,
        -0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.612,
        0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.6659999999999999,
        -0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.6659999999999999,
        0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.72,
        -0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.72,
        0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.774,
        -0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        0,
        0.774,
        0.562,
        1.03,
        0.011,
        0.02
      ],
      [
        -0.605,
        0.2,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        -0.605,
        0.265,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        -0.605,
        0.33,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        -0.605,
        0.395,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        -0.605,
        0.46,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        -0.605,
        0.525,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        -0.605,
        0.5900000000000001,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        -0.605,
        0.655,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        -0.605,
        0.72,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        -0.605,
        0.7849999999999999,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        0.605,
        0.2,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        0.605,
        0.265,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        0.605,
        0.33,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        0.605,
        0.395,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        0.605,
        0.46,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        0.605,
        0.525,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        0.605,
        0.5900000000000001,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        0.605,
        0.655,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        0.605,
        0.72,
        0,
        0.02,
        0.012,
        0.94
      ],
      [
        0.605,
        0.7849999999999999,
        0,
        0.02,
        0.012,
        0.94
      ]
    ],
    "condenserTones": [
      null,
      12633288,
      12633288,
      12633288,
      12633288,
      10133154,
      13685976,
      null,
      null,
      null,
      null,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      11647416,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694,
      10923694
    ],
    "condensers": [
      [
        -0.6,
        -1.35,
        0
      ],
      [
        0.95,
        -1.35,
        0
      ]
    ]
  },
  "graphic": {
    "background": "#3B7BD8",
    "ops": [
      {
        "type": "rect",
        "x": 0,
        "y": 0,
        "w": 0.5,
        "h": 1.2,
        "fill": "#C4C8CE"
      },
      {
        "type": "text",
        "text": "\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e",
        "x0": 0.34,
        "x1": 0.475,
        "cy": 0.24,
        "size": 0.27,
        "fill": "#1C498B"
      },
      {
        "type": "text",
        "text": "Bangkok Hospital",
        "x0": 0.025,
        "x1": 0.475,
        "cy": 0.66,
        "size": 0.5,
        "fill": "#1C498B"
      },
      {
        "type": "text",
        "text": "\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e",
        "x0": 0.84,
        "x1": 0.975,
        "cy": 0.24,
        "size": 0.27,
        "fill": "#FFFFFF"
      },
      {
        "type": "text",
        "text": "Bangkok Hospital",
        "x0": 0.525,
        "x1": 0.975,
        "cy": 0.66,
        "size": 0.5,
        "fill": "#FFFFFF"
      }
    ],
    "walls": [
      {
        "meshes": [
          "plant-condensers"
        ],
        "tile": 1.4,
        "image": "data:image/webp;base64,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"
      }
    ],
    "baked": "data:image/webp;base64,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"
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

export function createBangkokHospitalClinicBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Bangkok Hospital Clinic Building';

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
    shape: 'box', localCenter: [0, 2.3, 0], halfExtents: [4.0, 2.3, 3.5],
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
  const root = createBangkokHospitalClinicBuildingModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  applyFasciaGraphic(root);
  applyGlassGraphic(root);
  applyWallGraphic(root);
  applyReferenceWallWear(root);
  {const rt=root.userData.sculptRuntime as any;const door=rt?.meshes?.['side-feature'];if(door){const m=(door.material as THREE.MeshStandardMaterial).clone();m.color.setHex(0xeedfc4);m.roughness=.82;door.material=m;}}

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

// Coping-to-ground wall projection from the unobstructed +X wall reference crop.
function applyReferenceWallWear(root: THREE.Group): void {
 if(typeof document==='undefined')return;
 const rt=root.userData.sculptRuntime as any;
 const shell=rt?.meshes?.['building-shell'];if(!shell)return;
 const tex=new THREE.TextureLoader().load("data:image/webp;base64,UklGRk4KAABXRUJQVlA4IEIKAADQVQCdASoAAQADPikUiEOhoSEQGqwYGAKEtLd+FuNQ5t53si/+9k8g95gp4XrT8H//fqV+G/+fnrddcgegtH7AFJZmRp0xyXToqpQ4l7AoaWJb56pB9sCLLnZZptDdbEdoKPD2XTWU8y9dS6opZG+ZBsgm9l7qmG17DkRO8ah5pj7rh/8Sz9lWEWfIvZOum2VlinSjrLEUIeV5tZLAaHEZ8eRyLDySH+qcMaGlb2onIhRIWyTGOKaTeE0tIrpFzKpOwGczumwT5v7uMaCNSw8xKigbscp/oCsmfy9635fFdCYK0GnGd2wO7fo2yMlG1/F5RekIAH4rEQ71x7F8YyrLMqofwQKqPL0JOZT02qMp3ZlVDsy0n9oXRDK+odiFy2lUOzLSdTve76jvmnP9rOLwkWEudFpPLPPyRRhd3fPLKqn40K7LB47YDu2r3fYl8Z3Zr96pIWJB4emiVlrz3KUbYMUFYgtnsJ3M1PGnP2RZrT4UDFO790Aj+aK+F49/QSnMyFUPnVV3+6qd2m19jVT9tuQzKsswoNU+O9IAXvB6fqkwHfG9aWQbBOF5x9qxLGZa3S7YD8aMEC0LT0A5md6ViDcruqpisYDZVU/W4/ZcrvRs1O7NDWDEzx8CO7Nh4iKcihDI/Z5N9UDR4DRtiqV70NSlcy7WoKd2vPLwvIxZh9IF+Ko57OOBGidYiHhP2asaY9XYUI3R+e7Yowo/TqUt+1UbO9PMSAlAVqo45g3ozlaD1zKXL1Ao00Cz355KozKq08TMqrm0dBlvntkmpBBVV1UqpRDq1kqq8i+NS0nfUbtWuYCfDs3hV/lWsVOLS63VCXwL/nDFQv/H+zRjNm6k3wjvdSexsx6eApW/ZCI8mLvRZFhSi+fJGX6npw06JLbtDaLTz9TP3zWwdzJtx+E3vxMUeo61kAD+//8/novb9jWtBTqWjQ2Mc8aFoqTtsRLg4ecCAkKLxJ9B5+yeNnU1Bwa/sFSQztoYqj1YG41iasgzPoqZm9HXIdJELVtBb0ZwSXqm1FqosOhLPaZQUv4xvaJxUaB+ldy6QsB+CyaTCWYgHg16P5wDWjOYswTpIicJH6UH39uMQGQ3hYUpSVf8ZVmJHjp9sQ3Feq2Oadte3/cFfPqkUyNGd1z1ukOJjBHqEry2aS84ByhSEPkGamY3IWx5Ij8GtyHYBQYHRtxPjY8IJJcVo8G8C/eqZt2ScWnqCmaxczE0/tFIu48PCtL7ivEWAmQFufu5sx0fMrszBrLP/7+A5WbKoUY4TpY5CQaUXltq5KYqNL/njtBFQnd4nyp6oLyfbcj42tIlbZopAY3W9AfZ9XK++sqY6/t1uSELRu862muZRoJGEZAAw5JL3ECF8SZmF/HE7VpPvIAwRJqHzgR6DhrmSV8cilH5IcYNnCNBjo/8I8R5CSMPcAV5PsQ+moEwv+6ntVd050ZxnXYFFmWZB9xUAr4h+wJwITTiXk284AJ1OM+1RpS+z3eIEkF50kVwbujGokU5KpAOatbq10fXFmiEAzEax5qammMOX967JqpcCjT4eI/f279LMEYHYhmyYuKeABy4pjlwRvwK6b5V57ieqBIw/c8aIzTUVYbQWrowSk8SrbiU7wyS9Yt21B/DwmRlezfYW3mKgD2H86hMjFikW9QEcyuZrInPdVQi6OyuyFyGYohE4aO4nBr9bBDDlsDLRB7FcFGBl1A5gt3r1JR4ShGWjfiG1+Mjl67o5QQRKwR6HFwACVNF7AeeO8Mar8qcPU9NVLko+K2Ud3M53+umUCAuAhBqYyxT604jKSU1Wm4RjXnBAj+byL1D7wd5FZuwWdQqnC3YZZ3qtqX03TS5Gsr/jCJB2G0W3+cdzC/8V3c0LcnDbBWECa0UwXHzJknaNh1RZNIsIspP4hnFyYz3154r1ON+T8dz5NLdgUYdHaNrXB4PcXudJPxIu9pyqTxoBX5BTJKRD4/CwUQ9eMARr0QAw8zRnIp54pEavO0+oe6dOib14s16ldRfDt5x/96RJUFoAf28wDDaBBjBGYjqHmUM+PZNuqXrZGDtKF8c7sugrtDcVaslwXTIQk0KkEWjK1Fo2qxL89t0Ys7zptdZ5j8ojTZFzlQYEA5FGOKBTqcPnsEskR2OrYKI4ASoZ8cL3gVoDIhhZz6sSj1mhuA3nEpDxt4OBdw1JWFliL4kKhbC8wu6K1HXchYOedIVmIbJYJCJVhJHjkfruKnpQ2zZAPeI2EET/ZgNf1FKkyGxjUB4KscTXyM9CuEkhEoRB4Fxw6Le0754hdnAAKjpamBOfUmxdW5V1Y5qyJRA0YMOMYW3NRdmGjRUgpYJN22GYX3N3dt2RhBLpUlSTRSXkjBgg7NxrxbAtbHvFoejAICvZBWbv2ZZkeTpDyeiBEJM4GFLqATlbpVUB12Lt1F0p/l41RDMBZO7+vHGj9vUuIJaTZMeJ8NA/N0ZgYlX1sq8buIWU1OcIBIsVYv8OzbLJsgtW8K5WPF1To9SxpLyuAhMcHhijYwTbKRDtcoRWbSj2bpyLk6NKaQUKC2A8dISIAD9cLtrdEgcDMySrSufjzQDcJnFvCGZNogGilKt1w+3EtWo/7cPXAe02QJ3p3zbPAXDkHEpkmYKthBYjZlfE0E6EMiZjTlTRtLcaGcop/vsdgSeuIg6SSjknMl2ShBuYKM/QCJaZxRvb/j8ycb1i8enpuTXxyNTHEJmrCc8kk1qVE6+Cg6qIbLVgto5AUcFsQMjWvvpMAUqSpLtl5LSh9wwb2338i3Xs3GmJJr2IbCNRQXtNE/WTa1YXxzEelp4mesT5+0Cp3f/UfdJ29+0PqVhgzhEAdwWo6RlmnblugdDAv2zuct5NaOcgdPFM28HgvSaXFEInAlREz6znTVCtLG996ZurRv64YsetMIUSv0Hq3FpqATaNpu39bjm5Vagt4aaQQLp88xowcNcAZ5vXeswWPkyJYpIDUEoinixY4dEZ9lpdhVgPYyHITCIWgXcALZMcrpx1IBCUxuoGI0t4zQIZy6JM2+e7ILWaVMwLj/KIGQtkdq5iSNU7q0XvUFgRnkQkB7GG9AOgrRuR2tEGSS2aFFlTBn62+Bypv+PqF3rl7cbO5rOfRd4ZrAC3ViXlfwZvzcfgUMfqddt1gjL4g2ANPQK7W2f79QMtV+NhhVHifcvEjG251cb8PJ90El/wnQ5F0mNmq0PUQ/fUTGegf2nwHeENqPT5ayhphdJiZP9Ur7Ek2fEhqD9EkYPbyx0QXawN4tjr4cecSd/JSKWRXbWpvL6YO85vQayUGIKviOVXRGqRxB5fnTcvHZmHR9oQCrP656wYWsWKWZ1FIxTlY3d9bY986bQIE3+SixxVP3+kzcntbGxD3WYpuOm9al5E4UGyvhGeZib6hPsVEVywdcJx+3kCjVmrV+GBgS8KrfXkQPF2dCqbEa5lcYVRjxvy4Y+jVFbm5flpoOx3KgmwZGY7icd94FpUsDmVSaKdL0OYWJxd30mCQwRAAAA");tex.colorSpace=THREE.SRGBColorSpace;tex.wrapS=THREE.RepeatWrapping;tex.wrapT=THREE.ClampToEdgeWrapping;tex.anisotropy=4;
 root.updateMatrixWorld(true);
 const material=shell.material as THREE.MeshStandardMaterial;
 root.traverse((o:any)=>{if(!o.isMesh||o.material!==material)return;const g=o.geometry,p=g.getAttribute('position'),n=g.getAttribute('normal'),uv=new Float32Array(p.count*2);const point=new THREE.Vector3(),normal=new THREE.Vector3(),nm=new THREE.Matrix3().getNormalMatrix(o.matrixWorld);
  for(let i=0;i<p.count;i++){point.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);normal.fromBufferAttribute(n,i).applyMatrix3(nm).normalize();uv[i*2]=(Math.abs(normal.x)>.5?point.z:point.x)/1.65;uv[i*2+1]=Math.abs(normal.y)>.7?.5:THREE.MathUtils.clamp(point.y/5.55,0,1);}
  g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));});
 material.map=tex;material.needsUpdate=true;
}
