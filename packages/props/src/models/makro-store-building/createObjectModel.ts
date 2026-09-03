import * as THREE from 'three';

/**
 * Makro Store Building -- procedural Three.js factory.
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
    "id": "makro-store-building",
    "name": "Makro Store Building",
    "exportName": "MakroStoreBuilding",
    "materials": [
      {
        "id": "wall",
        "color": 14212062,
        "roughness": 0.62,
        "metalness": 0.15
      },
      {
        "id": "deck",
        "color": 10132896,
        "roughness": 0.9,
        "metalness": 0
      },
      {
        "id": "blue",
        "color": 3825554,
        "roughness": 0.62,
        "metalness": 0.15
      },
      {
        "id": "fascia",
        "color": 2635635,
        "roughness": 0.45,
        "metalness": 0
      },
      {
        "id": "glass",
        "color": 9411226,
        "roughness": 0.15,
        "metalness": 0,
        "opacity": 0.92,
        "envMapIntensity": 1.1
      },
      {
        "id": "frame",
        "color": 13225167,
        "roughness": 0.42,
        "metalness": 0.3
      },
      {
        "id": "galv",
        "color": 11975616,
        "roughness": 0.5,
        "metalness": 0.3
      }
    ],
    "geometry": {
      "parapetW": 7.9,
      "parapetSides": {
        "cx": 3.83,
        "cy": 4.075,
        "h": 1.05,
        "thick": 0.24
      },
      "fasciaWall": {
        "cy": 3.99,
        "cz": 2.4,
        "h": 0.98,
        "d": 0.4
      },
      "fasciaWallMaterial": "wall",
      "parapetExtra": [
        [
          0,
          4.55,
          2.49,
          7.96,
          0.1,
          0.4
        ],
        [
          -3.865,
          4.55,
          -0.65,
          0.23,
          0.1,
          5.72
        ],
        [
          3.865,
          4.55,
          -0.65,
          0.23,
          0.1,
          5.72
        ],
        [
          0,
          4.55,
          -3.4,
          7.96,
          0.1,
          0.22
        ]
      ],
      "fascia": {
        "w": 7.3,
        "h": 1.04,
        "cy": 2.86,
        "cz": 2.67,
        "boards": [
          {
            "w": 7.3,
            "h": 1.04,
            "d": 0.14,
            "at": [
              0,
              2.86,
              2.67
            ],
            "face": "+Z"
          }
        ]
      },
      "frameMaterial": "frame",
      "glazing": {
        "cx": 0,
        "w": 6.4,
        "h": 1.56,
        "cy": 1,
        "cz": 2.51,
        "d": 0.1
      },
      "frame": [
        [
          -3.2,
          1,
          2.605,
          0.09,
          1.64,
          0.19
        ],
        [
          3.2,
          1,
          2.605,
          0.09,
          1.64,
          0.19
        ],
        [
          0,
          1.79,
          2.605,
          6.49,
          0.1,
          0.19
        ],
        [
          0,
          0.245,
          2.605,
          6.49,
          0.11,
          0.19
        ],
        [
          0,
          1.5,
          2.605,
          6.4,
          0.07,
          0.19
        ],
        [
          0,
          0.34,
          2.615,
          2.5,
          0.22,
          0.09
        ],
        [
          3.9695,
          1.165,
          0.010000000000000002,
          0.035,
          2.33,
          0.08
        ],
        [
          3.9695,
          1.165,
          2.04,
          0.035,
          2.33,
          0.08
        ],
        [
          3.9695,
          2.29,
          1.025,
          0.035,
          0.08,
          2.11
        ]
      ],
      "mullions": {
        "w": 0.06,
        "h": 1.52,
        "cy": 1,
        "cz": 2.58,
        "x": [
          -2.56,
          -1.9200000000000002,
          -1.2800000000000002,
          -0.6400000000000001,
          0,
          0.6399999999999997,
          1.2800000000000002,
          1.92,
          2.5599999999999996
        ]
      },
      "sideFeature": {
        "name": "Roller shutter slats, ducted rooftop units and duct run",
        "material": "galv",
        "boxes": [
          [
            3.9549999999999996,
            0.051250000000000004,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            0.11375,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            0.17625,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            0.23875,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            0.30125,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            0.36375,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            0.42625,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            0.48875,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            0.55125,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            0.61375,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            0.67625,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            0.73875,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            0.80125,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            0.86375,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            0.92625,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            0.98875,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            1.05125,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            1.11375,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            1.17625,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            1.23875,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            1.30125,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            1.36375,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            1.42625,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            1.48875,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            1.55125,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            1.61375,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            1.67625,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            1.73875,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            1.80125,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            1.86375,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            1.92625,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            1.98875,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            2.05125,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            2.11375,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            3.9549999999999996,
            2.17625,
            1.025,
            0.02,
            0.055,
            1.93
          ],
          [
            3.9509999999999996,
            2.23875,
            1.025,
            0.012,
            0.055,
            1.93
          ],
          [
            1.55,
            4.52,
            -2.15,
            2.1,
            0.6,
            0.8
          ],
          [
            2.94,
            4.37,
            -2.15,
            0.68,
            0.3,
            0.76
          ],
          {
            "cyl": [
              2.94,
              4.52,
              -2.15,
              0.3,
              0.76,
              18,
              1.5707963267948966
            ]
          },
          [
            1.55,
            4.239999999999999,
            -2.15,
            1.9000000000000001,
            0.05,
            0.7
          ],
          [
            1.55,
            4.83,
            -2.15,
            2.14,
            0.02,
            0.84
          ],
          [
            0.9500000000000001,
            4.52,
            -0.25,
            2.1,
            0.6,
            0.8
          ],
          [
            2.34,
            4.37,
            -0.25,
            0.68,
            0.3,
            0.76
          ],
          {
            "cyl": [
              2.34,
              4.52,
              -0.25,
              0.3,
              0.76,
              18,
              1.5707963267948966
            ]
          },
          [
            0.9500000000000001,
            4.239999999999999,
            -0.25,
            1.9000000000000001,
            0.05,
            0.7
          ],
          [
            0.9500000000000001,
            4.83,
            -0.25,
            2.14,
            0.02,
            0.84
          ],
          [
            -0.6,
            4.359999999999999,
            -3.05,
            3,
            0.28,
            0.4
          ],
          [
            1.4,
            4.359999999999999,
            -3.05,
            0.6,
            0.28,
            0.4
          ]
        ]
      },
      "frontFeature": {
        "name": "Blue profiled cladding, pilasters and canopy lip",
        "material": "blue",
        "boxes": [
          [
            0,
            3.375,
            2.58,
            7.88,
            2.25,
            0.2
          ],
          [
            -3.585,
            2.35,
            2.58,
            0.77,
            4.3,
            0.2
          ],
          [
            3.585,
            2.35,
            2.58,
            0.77,
            4.3,
            0.2
          ],
          [
            -3.975,
            2.35,
            2.55,
            0.05,
            4.3,
            0.2
          ],
          [
            3.975,
            2.35,
            2.55,
            0.05,
            4.3,
            0.2
          ],
          [
            -0.27,
            2,
            3.44,
            7.42,
            0.28,
            0.12
          ],
          [
            -3.94,
            2,
            3,
            0.08,
            0.28,
            0.9
          ],
          [
            3.4,
            2,
            3,
            0.08,
            0.28,
            0.9
          ]
        ]
      },
      "extraFeature": {
        "name": "Canopy slab and plinth",
        "material": "deck",
        "boxes": [
          [
            -0.27,
            2.19,
            2.98,
            7.44,
            0.18,
            0.96
          ],
          [
            0,
            0.105,
            2.565,
            7.96,
            0.21,
            0.13
          ],
          [
            -3.96,
            0.105,
            -0.47,
            0.06,
            0.21,
            5.94
          ],
          [
            3.96,
            0.105,
            -0.47,
            0.06,
            0.21,
            5.94
          ],
          [
            0,
            0.105,
            -3.48,
            7.96,
            0.21,
            0.08
          ]
        ]
      },
      "deckY": 4.16,
      "deckExtra": [
        [
          0,
          1,
          2.506,
          6.6000000000000005,
          1.76,
          0.008
        ]
      ],
      "deckExtraTones": [
        6975090
      ],
      "condenserY": 4.22,
      "condenserParts": [
        [
          0,
          0.35,
          0,
          1.05,
          0.66,
          1.4
        ],
        [
          0,
          0.695,
          0,
          1.09,
          0.04,
          1.44
        ],
        {
          "cyl": [
            0,
            0.725,
            -0.36,
            0.27,
            0.02,
            20
          ]
        },
        {
          "cyl": [
            0,
            0.725,
            -0.36,
            0.29,
            0.015,
            20
          ]
        },
        [
          0,
          0.745,
          -0.6,
          0.56,
          0.012,
          0.025
        ],
        [
          0,
          0.745,
          -0.48,
          0.56,
          0.012,
          0.025
        ],
        [
          0,
          0.745,
          -0.36,
          0.56,
          0.012,
          0.025
        ],
        [
          0,
          0.745,
          -0.24,
          0.56,
          0.012,
          0.025
        ],
        [
          0,
          0.745,
          -0.12,
          0.56,
          0.012,
          0.025
        ],
        {
          "cyl": [
            0,
            0.725,
            0.36,
            0.27,
            0.02,
            20
          ]
        },
        {
          "cyl": [
            0,
            0.725,
            0.36,
            0.29,
            0.015,
            20
          ]
        },
        [
          0,
          0.745,
          0.12,
          0.56,
          0.012,
          0.025
        ],
        [
          0,
          0.745,
          0.24,
          0.56,
          0.012,
          0.025
        ],
        [
          0,
          0.745,
          0.36,
          0.56,
          0.012,
          0.025
        ],
        [
          0,
          0.745,
          0.48,
          0.56,
          0.012,
          0.025
        ],
        [
          0,
          0.745,
          0.6,
          0.56,
          0.012,
          0.025
        ],
        [
          0.53,
          0.38,
          0.28,
          0.02,
          0.48,
          0.66
        ],
        [
          0.545,
          0.16,
          0.28,
          0.015,
          0.028,
          0.62
        ],
        [
          0.545,
          0.215,
          0.28,
          0.015,
          0.028,
          0.62
        ],
        [
          0.545,
          0.27,
          0.28,
          0.015,
          0.028,
          0.62
        ],
        [
          0.545,
          0.325,
          0.28,
          0.015,
          0.028,
          0.62
        ],
        [
          0.545,
          0.38,
          0.28,
          0.015,
          0.028,
          0.62
        ],
        [
          0.545,
          0.43500000000000005,
          0.28,
          0.015,
          0.028,
          0.62
        ],
        [
          0.545,
          0.49,
          0.28,
          0.015,
          0.028,
          0.62
        ],
        [
          0.545,
          0.545,
          0.28,
          0.015,
          0.028,
          0.62
        ],
        [
          0,
          0.38,
          0.71,
          0.7,
          0.48,
          0.02
        ],
        [
          0,
          0.16,
          0.725,
          0.66,
          0.028,
          0.015
        ],
        [
          0,
          0.215,
          0.725,
          0.66,
          0.028,
          0.015
        ],
        [
          0,
          0.27,
          0.725,
          0.66,
          0.028,
          0.015
        ],
        [
          0,
          0.325,
          0.725,
          0.66,
          0.028,
          0.015
        ],
        [
          0,
          0.38,
          0.725,
          0.66,
          0.028,
          0.015
        ],
        [
          0,
          0.43500000000000005,
          0.725,
          0.66,
          0.028,
          0.015
        ],
        [
          0,
          0.49,
          0.725,
          0.66,
          0.028,
          0.015
        ],
        [
          0,
          0.545,
          0.725,
          0.66,
          0.028,
          0.015
        ],
        [
          0.528,
          0.36,
          -0.34,
          0.012,
          0.56,
          0.02
        ],
        [
          0,
          0,
          -0.56,
          0.96,
          0.06,
          0.08
        ],
        [
          0,
          0,
          0.56,
          0.96,
          0.06,
          0.08
        ],
        [
          0.45,
          0.08,
          -0.64,
          0.08,
          0.12,
          0.1
        ]
      ],
      "condenserTones": [
        null,
        12896460,
        3027510,
        12896460,
        13685976,
        13685976,
        13685976,
        13685976,
        13685976,
        3027510,
        12896460,
        13685976,
        13685976,
        13685976,
        13685976,
        13685976,
        3948612,
        11843772,
        11843772,
        11843772,
        11843772,
        11843772,
        11843772,
        11843772,
        11843772,
        3948612,
        11843772,
        11843772,
        11843772,
        11843772,
        11843772,
        11843772,
        11843772,
        11843772,
        5922402,
        4869714,
        4869714,
        3948612
      ],
      "plantMaterial": "galv",
      "condensers": [
        [
          -2.85,
          -2.05,
          0
        ],
        [
          -2.85,
          -0.4,
          0
        ],
        [
          -2.85,
          1.25,
          0
        ]
      ]
    },
    "graphic": {
      "background": "#283773",
      "baked": "data:image/webp;base64,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",
      "size": [
        2048,
        336
      ],
      "bandFrac": 0.875,
      "ops": [
        {
          "type": "text",
          "text": "makro",
          "x0": 0.3,
          "x1": 0.72,
          "cy": 0.5,
          "size": 0.8,
          "fill": "#E32B2B",
          "stroke": "#F4F4F4",
          "strokeW": 0.05
        }
      ],
      "wall": {
        "meshes": [
          "roof-deck",
          "extra-feature"
        ],
        "tile": 2.6,
        "size": 512,
        "seed": 31,
        "base": 250,
        "patches": 70,
        "patchAmp": 14,
        "streaks": 40,
        "streakAmp": 10,
        "specks": 2600,
        "speckAmp": 16
      },
      "walls": [
        {
          "meshes": [
            "building-shell",
            "parapet",
            "front-feature"
          ],
          "tile": 0.88,
          "image": "data:image/webp;base64,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"
        },
        {
          "meshes": [
            "side-feature",
            "plant-condensers"
          ],
          "tile": 1.4,
          "image": "data:image/webp;base64,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"
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

export function createMakroStoreBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Makro Store Building';

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
  const root = createMakroStoreBuildingModel(options);
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
