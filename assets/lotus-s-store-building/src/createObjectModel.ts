import * as THREE from 'three';

/**
 * Lotus\'s Store Building -- procedural Three.js factory.
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
    "id": "lotus-s-store-building",
    "name": "Lotus's Store Building",
    "exportName": "LotussStoreBuilding",
    "materials": [
      {
        "id": "wall",
        "color": 9080724,
        "roughness": 0.88,
        "metalness": 0
      },
      {
        "id": "deck",
        "color": 6250851,
        "roughness": 0.92,
        "metalness": 0
      },
      {
        "id": "clad",
        "color": 16777215,
        "roughness": 0.62,
        "metalness": 0
      },
      {
        "id": "fascia",
        "color": 15265001,
        "roughness": 0.35,
        "metalness": 0,
        "envMapIntensity": 0.6
      },
      {
        "id": "glass",
        "color": 8422786,
        "roughness": 0.16,
        "metalness": 0,
        "opacity": 0.92,
        "envMapIntensity": 1.1
      },
      {
        "id": "aluminium",
        "color": 11447979,
        "roughness": 0.42,
        "metalness": 0.35
      },
      {
        "id": "galv",
        "color": 10133670,
        "roughness": 0.52,
        "metalness": 0.3
      }
    ],
    "geometry": {
      "fasciaWall": {
        "cy": 3.995,
        "cz": 2.41,
        "h": 0.89,
        "d": 0.42
      },
      "fasciaWallMaterial": "wall",
      "parapetExtra": [
        [
          0,
          1.775,
          2.55,
          7.88,
          3.55,
          0.14
        ]
      ],
      "fascia": {
        "w": 2.93,
        "h": 1.08,
        "cy": 3.52,
        "cz": 2.76,
        "boards": [
          {
            "w": 2.93,
            "h": 1.08,
            "d": 0.16,
            "at": [
              -0.19,
              3.52,
              2.76
            ],
            "face": "+Z"
          }
        ]
      },
      "frameMaterial": "aluminium",
      "glazing": {
        "cx": -0.6,
        "w": 5.92,
        "h": 2.36,
        "cy": 1.24,
        "cz": 2.51,
        "d": 0.1
      },
      "frame": [
        [
          -3.56,
          1.24,
          2.6,
          0.09,
          2.44,
          0.18
        ],
        [
          2.36,
          1.24,
          2.6,
          0.09,
          2.44,
          0.18
        ],
        [
          -0.6,
          2.415,
          2.6,
          5.92,
          0.1,
          0.18
        ],
        [
          -0.6,
          0.07,
          2.6,
          5.92,
          0.14,
          0.18
        ],
        [
          -0.45,
          1.78,
          2.6,
          2.24,
          0.11,
          0.18
        ],
        [
          -0.45,
          0.925,
          2.61,
          0.07,
          1.71,
          0.08
        ]
      ],
      "mullions": {
        "w": 0.07,
        "h": 2.36,
        "cy": 1.24,
        "cz": 2.61,
        "x": [
          -2.85,
          -2.2,
          -1.55,
          0.65,
          1.3,
          1.9
        ]
      },
      "tintFeature": {
        "name": "Front cladding panels",
        "material": "clad",
        "boxes": [
          [
            -3.75,
            0.3741666666666667,
            2.67,
            0.35499999999999987,
            0.7233333333333334,
            0.14
          ],
          [
            -3.75,
            1.1225,
            2.67,
            0.35499999999999987,
            0.7233333333333334,
            0.14
          ],
          [
            -3.75,
            1.8708333333333336,
            2.67,
            0.35499999999999987,
            0.7233333333333333,
            0.14
          ],
          [
            -3.75,
            2.6191666666666666,
            2.67,
            0.35499999999999987,
            0.7233333333333335,
            0.14
          ],
          [
            -3.75,
            3.3675000000000006,
            2.67,
            0.35499999999999987,
            0.7233333333333335,
            0.14
          ],
          [
            -3.75,
            4.115833333333334,
            2.67,
            0.35499999999999987,
            0.723333333333333,
            0.14
          ],
          [
            -3.1375,
            2.6191666666666666,
            2.67,
            0.8200000000000002,
            0.7233333333333335,
            0.14
          ],
          [
            -3.1375,
            3.3675000000000006,
            2.67,
            0.8200000000000002,
            0.7233333333333335,
            0.14
          ],
          [
            -3.1375,
            4.115833333333334,
            2.67,
            0.8200000000000002,
            0.723333333333333,
            0.14
          ],
          [
            -2.2925,
            2.6191666666666666,
            2.67,
            0.8199999999999997,
            0.7233333333333335,
            0.14
          ],
          [
            -2.2925,
            3.3675000000000006,
            2.67,
            0.8199999999999997,
            0.7233333333333335,
            0.14
          ],
          [
            -2.2925,
            4.115833333333334,
            2.67,
            0.8199999999999997,
            0.723333333333333,
            0.14
          ],
          [
            -1.4475,
            2.6191666666666666,
            2.67,
            0.8200000000000002,
            0.7233333333333335,
            0.14
          ],
          [
            -1.4475,
            3.3675000000000006,
            2.67,
            0.8200000000000002,
            0.7233333333333335,
            0.14
          ],
          [
            -1.4475,
            4.115833333333334,
            2.67,
            0.8200000000000002,
            0.723333333333333,
            0.14
          ],
          [
            -0.6024999999999999,
            2.6191666666666666,
            2.67,
            0.82,
            0.7233333333333335,
            0.14
          ],
          [
            -0.6024999999999999,
            3.3675000000000006,
            2.67,
            0.82,
            0.7233333333333335,
            0.14
          ],
          [
            -0.6024999999999999,
            4.115833333333334,
            2.67,
            0.82,
            0.723333333333333,
            0.14
          ],
          [
            0.24250000000000002,
            2.6191666666666666,
            2.67,
            0.82,
            0.7233333333333335,
            0.14
          ],
          [
            0.24250000000000002,
            3.3675000000000006,
            2.67,
            0.82,
            0.7233333333333335,
            0.14
          ],
          [
            0.24250000000000002,
            4.115833333333334,
            2.67,
            0.82,
            0.723333333333333,
            0.14
          ],
          [
            1.0875,
            2.6191666666666666,
            2.67,
            0.82,
            0.7233333333333335,
            0.14
          ],
          [
            1.0875,
            3.3675000000000006,
            2.67,
            0.82,
            0.7233333333333335,
            0.14
          ],
          [
            1.0875,
            4.115833333333334,
            2.67,
            0.82,
            0.723333333333333,
            0.14
          ],
          [
            1.9325,
            2.6191666666666666,
            2.67,
            0.82,
            0.7233333333333335,
            0.14
          ],
          [
            1.9325,
            3.3675000000000006,
            2.67,
            0.82,
            0.7233333333333335,
            0.14
          ],
          [
            1.9325,
            4.115833333333334,
            2.67,
            0.82,
            0.723333333333333,
            0.14
          ],
          [
            2.7775,
            0.3741666666666667,
            2.67,
            0.8200000000000002,
            0.7233333333333334,
            0.14
          ],
          [
            2.7775,
            1.1225,
            2.67,
            0.8200000000000002,
            0.7233333333333334,
            0.14
          ],
          [
            2.7775,
            1.8708333333333336,
            2.67,
            0.8200000000000002,
            0.7233333333333333,
            0.14
          ],
          [
            2.7775,
            2.6191666666666666,
            2.67,
            0.8200000000000002,
            0.7233333333333335,
            0.14
          ],
          [
            2.7775,
            3.3675000000000006,
            2.67,
            0.8200000000000002,
            0.7233333333333335,
            0.14
          ],
          [
            2.7775,
            4.115833333333334,
            2.67,
            0.8200000000000002,
            0.723333333333333,
            0.14
          ],
          [
            3.5700000000000003,
            0.3741666666666667,
            2.7,
            0.7149999999999997,
            0.7233333333333334,
            0.2
          ],
          [
            3.5700000000000003,
            1.1225,
            2.7,
            0.7149999999999997,
            0.7233333333333334,
            0.2
          ],
          [
            3.5700000000000003,
            1.8708333333333336,
            2.7,
            0.7149999999999997,
            0.7233333333333333,
            0.2
          ],
          [
            3.5700000000000003,
            2.6191666666666666,
            2.7,
            0.7149999999999997,
            0.7233333333333335,
            0.2
          ],
          [
            3.5700000000000003,
            3.3675000000000006,
            2.7,
            0.7149999999999997,
            0.7233333333333335,
            0.2
          ],
          [
            3.5700000000000003,
            4.115833333333334,
            2.7,
            0.7149999999999997,
            0.723333333333333,
            0.2
          ],
          [
            3.88,
            0.3741666666666667,
            2.28,
            0.16,
            0.7233333333333334,
            0.64
          ],
          [
            3.88,
            1.1225,
            2.28,
            0.16,
            0.7233333333333334,
            0.64
          ],
          [
            3.88,
            1.8708333333333336,
            2.28,
            0.16,
            0.7233333333333333,
            0.64
          ],
          [
            3.88,
            2.6191666666666666,
            2.28,
            0.16,
            0.7233333333333335,
            0.64
          ],
          [
            3.88,
            3.3675000000000006,
            2.28,
            0.16,
            0.7233333333333335,
            0.64
          ],
          [
            3.88,
            4.115833333333334,
            2.28,
            0.16,
            0.723333333333333,
            0.64
          ],
          [
            -0.6,
            1.05,
            2.625,
            5.92,
            0.14,
            0.05
          ]
        ],
        "tones": [
          5542000,
          5542000,
          5542000,
          5542000,
          5542000,
          5542000,
          15001313,
          5542000,
          5542000,
          15001313,
          15001313,
          5542000,
          15001313,
          15001313,
          5542000,
          15001313,
          15001313,
          5542000,
          15001313,
          15001313,
          5542000,
          15001313,
          15001313,
          5542000,
          15001313,
          15001313,
          5542000,
          5542000,
          5542000,
          5542000,
          15001313,
          5542000,
          5542000,
          5542000,
          5542000,
          5542000,
          5542000,
          5542000,
          5542000,
          5542000,
          5542000,
          5542000,
          5542000,
          5542000,
          5542000,
          5542000
        ]
      },
      "frontFeature": {
        "name": "Parapet coping",
        "material": "aluminium",
        "boxes": [
          [
            0,
            4.52,
            2.44,
            7.96,
            0.16,
            0.84
          ],
          [
            -3.88,
            4.03,
            -0.65,
            0.16,
            0.16,
            5.66
          ],
          [
            3.88,
            4.03,
            -0.65,
            0.16,
            0.16,
            5.66
          ],
          [
            0,
            4.03,
            -3.37,
            7.96,
            0.16,
            0.14
          ]
        ]
      },
      "extraFeature": {
        "name": "Entrance canopy",
        "material": "aluminium",
        "boxes": [
          [
            -0.51,
            2.43,
            3.04,
            6.18,
            0.12,
            0.8
          ],
          [
            -0.51,
            2.535,
            2.77,
            6.18,
            0.09,
            0.14
          ],
          [
            -0.51,
            2.5,
            3.43,
            6.18,
            0.08,
            0.14
          ],
          [
            -0.51,
            2.32,
            3.39,
            6.18,
            0.12,
            0.1
          ],
          [
            -3.32,
            2.525,
            2.98,
            0.22,
            0.08,
            0.13
          ],
          [
            -2.22,
            2.525,
            2.98,
            0.22,
            0.08,
            0.13
          ],
          [
            -1.07,
            2.525,
            2.98,
            0.22,
            0.08,
            0.13
          ],
          [
            0.11,
            2.525,
            2.98,
            0.22,
            0.08,
            0.13
          ],
          [
            1.25,
            2.525,
            2.98,
            0.22,
            0.08,
            0.13
          ]
        ]
      },
      "sideFeature": {
        "name": "Roller shutter and head box",
        "material": "galv",
        "boxes": [
          [
            3.945,
            0.20111111111111113,
            0.35,
            0.09,
            0.11244444444444446,
            1.55
          ],
          [
            3.9375,
            0.32333333333333336,
            0.35,
            0.075,
            0.11244444444444446,
            1.55
          ],
          [
            3.945,
            0.4455555555555556,
            0.35,
            0.09,
            0.11244444444444446,
            1.55
          ],
          [
            3.9375,
            0.5677777777777778,
            0.35,
            0.075,
            0.11244444444444446,
            1.55
          ],
          [
            3.945,
            0.6900000000000001,
            0.35,
            0.09,
            0.11244444444444446,
            1.55
          ],
          [
            3.9375,
            0.8122222222222223,
            0.35,
            0.075,
            0.11244444444444446,
            1.55
          ],
          [
            3.945,
            0.9344444444444445,
            0.35,
            0.09,
            0.11244444444444446,
            1.55
          ],
          [
            3.9375,
            1.0566666666666666,
            0.35,
            0.075,
            0.11244444444444446,
            1.55
          ],
          [
            3.945,
            1.1788888888888889,
            0.35,
            0.09,
            0.11244444444444446,
            1.55
          ],
          [
            3.9375,
            1.301111111111111,
            0.35,
            0.075,
            0.11244444444444446,
            1.55
          ],
          [
            3.945,
            1.4233333333333333,
            0.35,
            0.09,
            0.11244444444444446,
            1.55
          ],
          [
            3.9375,
            1.5455555555555556,
            0.35,
            0.075,
            0.11244444444444446,
            1.55
          ],
          [
            3.945,
            1.6677777777777778,
            0.35,
            0.09,
            0.11244444444444446,
            1.55
          ],
          [
            3.9375,
            1.79,
            0.35,
            0.075,
            0.11244444444444446,
            1.55
          ],
          [
            3.945,
            1.9122222222222223,
            0.35,
            0.09,
            0.11244444444444446,
            1.55
          ],
          [
            3.9375,
            2.0344444444444445,
            0.35,
            0.075,
            0.11244444444444446,
            1.55
          ],
          [
            3.945,
            2.1566666666666667,
            0.35,
            0.09,
            0.11244444444444446,
            1.55
          ],
          [
            3.9375,
            2.2788888888888894,
            0.35,
            0.075,
            0.11244444444444446,
            1.55
          ],
          [
            3.935,
            2.46,
            0.35,
            0.11,
            0.28,
            1.65
          ]
        ]
      },
      "condensers": [],
      "extraFeature2": {
        "name": "Rooftop plant",
        "material": "galv",
        "boxes": [
          [
            0.1,
            3.975,
            -0.1,
            2.3,
            0.75,
            1.15
          ],
          [
            1.6,
            3.975,
            -1.55,
            2.3,
            0.75,
            1.15
          ],
          [
            0.6,
            3.94,
            -0.8,
            0.7,
            0.68,
            1.1
          ],
          {
            "cyl": [
              -0.45,
              4.395,
              -0.1,
              0.3,
              0.11,
              16
            ]
          },
          {
            "cyl": [
              0.55,
              4.395,
              -0.1,
              0.3,
              0.11,
              16
            ]
          },
          {
            "cyl": [
              1.05,
              4.395,
              -1.55,
              0.3,
              0.11,
              16
            ]
          },
          {
            "cyl": [
              2.05,
              4.395,
              -1.55,
              0.3,
              0.11,
              16
            ]
          },
          [
            -0.3,
            3.72,
            0.5,
            1.15,
            0.055,
            0.06
          ],
          [
            -0.3,
            3.8200000000000003,
            0.5,
            1.15,
            0.055,
            0.06
          ],
          [
            -0.3,
            3.9200000000000004,
            0.5,
            1.15,
            0.055,
            0.06
          ],
          [
            -0.3,
            4.0200000000000005,
            0.5,
            1.15,
            0.055,
            0.06
          ],
          [
            -0.3,
            4.12,
            0.5,
            1.15,
            0.055,
            0.06
          ],
          [
            -0.3,
            4.220000000000001,
            0.5,
            1.15,
            0.055,
            0.06
          ],
          [
            1.2,
            3.72,
            -0.95,
            1.15,
            0.055,
            0.06
          ],
          [
            1.2,
            3.8200000000000003,
            -0.95,
            1.15,
            0.055,
            0.06
          ],
          [
            1.2,
            3.9200000000000004,
            -0.95,
            1.15,
            0.055,
            0.06
          ],
          [
            1.2,
            4.0200000000000005,
            -0.95,
            1.15,
            0.055,
            0.06
          ],
          [
            1.2,
            4.12,
            -0.95,
            1.15,
            0.055,
            0.06
          ],
          [
            1.2,
            4.220000000000001,
            -0.95,
            1.15,
            0.055,
            0.06
          ]
        ]
      }
    },
    "graphic": {
      "baked": "data:image/webp;base64,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",
      "size": [
        1536,
        576
      ],
      "background": "#F2F4F1",
      "ops": [
        {
          "type": "text",
          "text": "Lotus",
          "x0": 0.102,
          "x1": 0.735,
          "cy": 0.55,
          "size": 0.44,
          "fill": "#0E7A4F"
        },
        {
          "type": "text",
          "text": "'s",
          "x0": 0.76,
          "x1": 0.911,
          "cy": 0.55,
          "size": 0.44,
          "fill": "#E3A81C"
        }
      ],
      "wall": {
        "meshes": [
          "building-shell",
          "parapet",
          "tint-feature"
        ],
        "tile": 3.2,
        "size": 512,
        "seed": 20260828,
        "base": 252,
        "patches": 40,
        "patchAmp": 10,
        "streaks": 70,
        "streakAmp": 12,
        "specks": 2000,
        "speckAmp": 14
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

export function createLotussStoreBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Lotus\'s Store Building';

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
  const root = createLotussStoreBuildingModel(options);
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
