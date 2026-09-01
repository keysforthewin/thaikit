import * as THREE from 'three';

/**
 * Khmer Stone Sanctuary -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 12.00 x 9.00 x 12.00 m, origin base-center, +Y up.
 * Budget (hero2x): <=16000 triangles, <=16 draw calls, <=16 materials, <=16 unique geometries.
 *
 * This is one of thaikit's MONUMENTAL buildings, and unlike the shared retail module its form is
 * not a box: the recognisable feature is a curved or tiered profile that has to survive at the
 * distance a village skyline is read from. The shared vocabulary here is therefore the LATHE --
 * a profile revolved about +Y -- and the tiered/stepped merge, not the parameterised shopfront.
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
    "id": "khmer-stone-sanctuary",
    "name": "Khmer Stone Sanctuary",
    "exportName": "KhmerStoneSanctuary",
    "envelope": "Envelope 12.00 x 9.00 x 12.00 m, origin base-center, +Y up.\n * Budget (hero2x): <=16000 triangles, <=16 draw calls, <=16 materials, <=16 unique geometries.",
    "materials": [
      {
        "id": "laterite",
        "color": 7754816,
        "roughness": 0.96,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "sandstone",
        "color": 9139290,
        "roughness": 0.94,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "pale",
        "color": 16777215,
        "roughness": 0.93,
        "metalness": 0
      },
      {
        "id": "void",
        "color": 5130048,
        "roughness": 0.98,
        "metalness": 0
      }
    ],
    "geometry": {
      "platform": [
        [
          0,
          0.55,
          6
        ],
        [
          0.55,
          1.2,
          5.75
        ]
      ],
      "notch": {
        "halfZ": 1.55,
        "xInner": 4.25
      },
      "stair": {
        "steps": 6,
        "x0": 4.25,
        "x1": 6,
        "top": 1.2,
        "treadHalfZ": 1.4
      },
      "parapet": {
        "y0": 1.2,
        "y1": 2.05,
        "outer": 5.4,
        "thick": 0.6
      },
      "base": {
        "y0": 1.2,
        "y1": 1.55,
        "a": 2.95,
        "r": 0.48
      },
      "tower": {
        "y0": 1.55,
        "y1": 4.85,
        "a": 2.75,
        "r": 0.46
      },
      "cornice": [
        [
          4.85,
          5.25,
          3.05
        ],
        [
          5.25,
          5.75,
          3.3
        ],
        [
          5.75,
          6.3,
          3.5
        ]
      ],
      "tier1": {
        "y0": 6.3,
        "y1": 7.3,
        "a": 2.95,
        "aed": {
          "w": 1.5,
          "y0": 6.45,
          "y1": 7.15,
          "proud": 0.22
        }
      },
      "tier1cap": {
        "y0": 7.3,
        "y1": 7.55,
        "a": 3.05,
        "corner": 0.45
      },
      "tier2": {
        "y0": 7.55,
        "y1": 8.3,
        "a": 2.45,
        "aed": {
          "w": 1.2,
          "y0": 7.68,
          "y1": 8.22,
          "proud": 0.18
        }
      },
      "brokenTier": {
        "y0": 8.3,
        "y1": 8.7,
        "a": 2.4,
        "t": 0.65
      },
      "door": {
        "w": 1.9,
        "head": 3.52,
        "jamb": 0.34,
        "lintel": 0.4,
        "col": {
          "r": 0.15,
          "ring": 0.19,
          "x": 1.24
        },
        "sinkFrame": 1.02,
        "sinkBlind": 1.09,
        "sinkVoid": 1.15
      },
      "blocks": {
        "unit": [
          1,
          0.4,
          0.6
        ],
        "list": [
          [
            -2.075,
            8.85,
            0.6,
            1.62,
            0,
            0,
            1.3,
            0.75,
            0.9,
            1
          ],
          [
            -2.075,
            8.84,
            -1.2,
            1.51,
            0,
            0,
            1.2,
            0.7,
            0.9,
            2
          ],
          [
            0.4,
            8.83,
            2.075,
            0.04,
            0,
            0,
            1.4,
            0.65,
            0.9,
            0
          ],
          [
            -1,
            8.82,
            2.075,
            -0.05,
            0,
            0,
            1.1,
            0.6,
            0.9,
            1
          ],
          [
            2.075,
            8.72,
            1.2,
            1.6,
            0,
            0,
            1,
            0.65,
            0.85,
            2
          ],
          [
            -0.8,
            8.77,
            -2.075,
            0.03,
            0,
            0,
            1.2,
            0.6,
            0.9,
            3
          ],
          [
            0.2,
            8.46,
            0.1,
            0.5,
            0,
            0,
            1.3,
            0.8,
            1.2,
            2
          ],
          [
            -0.7,
            8.44,
            -0.6,
            1.2,
            0,
            0,
            1,
            0.7,
            0.9,
            1
          ],
          [
            0.9,
            8.43,
            0.9,
            -0.7,
            0,
            0,
            0.9,
            0.65,
            0.8,
            0
          ],
          [
            0.3,
            8.76,
            0.1,
            0.9,
            0,
            0,
            0.9,
            0.65,
            0.8,
            0
          ],
          [
            2.75,
            7.71,
            -1.5,
            1.67,
            0,
            0,
            1.1,
            0.8,
            0.9,
            2
          ],
          [
            1.4,
            7.69,
            -2.75,
            0.05,
            0,
            0,
            1,
            0.7,
            0.9,
            1
          ],
          [
            4.1,
            1.34,
            -3.5,
            0.35,
            0,
            0,
            1,
            0.6,
            0.9,
            0
          ],
          [
            3.4,
            1.36,
            3.4,
            0.4,
            0,
            0,
            1.2,
            0.8,
            1,
            0
          ],
          [
            4.2,
            1.34,
            -2.3,
            1,
            0,
            0,
            1.1,
            0.7,
            0.9,
            1
          ],
          [
            -3.8,
            1.36,
            2.8,
            -0.5,
            0,
            0,
            1.3,
            0.8,
            1,
            0
          ],
          [
            -4.3,
            1.33,
            -3.4,
            0.9,
            0,
            0,
            1,
            0.65,
            0.9,
            2
          ],
          [
            3,
            1.35,
            -4.3,
            0.2,
            0,
            0,
            1.2,
            0.75,
            1,
            3
          ],
          [
            -2.6,
            1.34,
            -4.4,
            2,
            0,
            0,
            1,
            0.7,
            0.9,
            1
          ],
          [
            -0.3,
            1.33,
            4.3,
            0.7,
            0,
            0,
            1,
            0.65,
            0.9,
            2
          ],
          [
            -4.2,
            1.35,
            4.2,
            1.4,
            0,
            0,
            1.1,
            0.75,
            1,
            0
          ],
          [
            4.4,
            1.34,
            4,
            -0.8,
            0,
            0,
            1,
            0.7,
            1,
            1
          ],
          [
            -2,
            1.36,
            -3.2,
            0.3,
            0,
            0,
            0.9,
            0.8,
            0.8,
            0
          ],
          [
            -3.6,
            1.63,
            2.7,
            0.1,
            0,
            0,
            0.9,
            0.7,
            0.8,
            2
          ],
          [
            4.35,
            1.6,
            1.5,
            0,
            0,
            0.55,
            1,
            0.9,
            0.8,
            0
          ],
          [
            -4.4,
            1.34,
            -0.5,
            1.6,
            0,
            0,
            1,
            0.7,
            0.9,
            1
          ],
          [
            4.3,
            1.33,
            -4.4,
            0.5,
            0,
            0,
            0.9,
            0.65,
            0.8,
            2
          ],
          [
            1.8,
            1.35,
            -4.2,
            -0.4,
            0,
            0,
            1.1,
            0.75,
            1,
            3
          ],
          [
            -5.1,
            2.19,
            2.6,
            1.62,
            0,
            0,
            1,
            0.7,
            0.9,
            2
          ],
          [
            2.6,
            2.19,
            -5.1,
            0.05,
            0,
            0,
            1.1,
            0.7,
            0.9,
            1
          ]
        ],
        "tones": [
          13605752,
          12102551,
          9139290,
          6969928
        ]
      },
      "wear": {
        "size": 512,
        "laterite": {
          "tile": 3.2,
          "course": 0.32,
          "block": 0.8,
          "joint": 8,
          "bump": 0.05,
          "jointTone": [
            0.55,
            0.54,
            0.54
          ],
          "pit": [
            0.52,
            0.52,
            0.55
          ],
          "blockLo": 0.8,
          "blockHi": 1,
          "mottle": [
            0.9,
            0.9,
            0.92
          ]
        },
        "sandstone": {
          "tile": 3.2,
          "course": 0.4,
          "block": 0.8,
          "joint": 2,
          "bump": 0.04,
          "clean": [
            0.79,
            0.95,
            1
          ],
          "side": [
            1,
            1,
            1
          ],
          "crust": [
            0.95,
            0.9,
            0.82
          ],
          "lichen": [
            1,
            1,
            0.7
          ],
          "black": [
            0.42,
            0.5,
            0.53
          ],
          "jointTone": [
            0.66,
            0.66,
            0.66
          ],
          "pit": [
            0.54,
            0.65,
            0.68
          ],
          "blockLo": 0.86,
          "blockHi": 1,
          "mottle": [
            0.86,
            0.86,
            0.87
          ],
          "light": [
            1,
            1,
            1
          ]
        },
        "rubble": {
          "tile": 1.2,
          "bump": 0.03,
          "pit": [
            0.62,
            0.62,
            0.62
          ],
          "mottle": [
            0.88,
            0.88,
            0.88
          ],
          "dark": [
            0.7,
            0.7,
            0.7
          ]
        }
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
  // COLOR has to be carried too, and it is easy to forget: this function copied position, normal
  // and uv only, and the mosque's ribbed domes lost their green-and-pale striping the moment they
  // were merged with anything. The failure is silent -- the dome renders, in one flat colour -- and
  // took a wrong theory about sRGB gamma before the attribute list was read. Any input carrying a
  // colour means every input gets one, white where it had none.
  const anyColor = parts.some((g) => !!g.getAttribute('color'));
  const color = anyColor ? new Float32Array(total * 3).fill(1) : null;
  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute('position'), n = g.getAttribute('normal'), t = g.getAttribute('uv');
    const c = g.getAttribute('color');
    for (let i = 0; i < p.count; i++) {
      position[(v + i) * 3] = p.getX(i); position[(v + i) * 3 + 1] = p.getY(i); position[(v + i) * 3 + 2] = p.getZ(i);
      if (n) { normal[(v + i) * 3] = n.getX(i); normal[(v + i) * 3 + 1] = n.getY(i); normal[(v + i) * 3 + 2] = n.getZ(i); }
      if (t) { uv[(v + i) * 2] = t.getX(i); uv[(v + i) * 2 + 1] = t.getY(i); }
      if (color && c) { color[(v + i) * 3] = c.getX(i); color[(v + i) * 3 + 1] = c.getY(i); color[(v + i) * 3 + 2] = c.getZ(i); }
    }
    v += p.count;
  }
  for (let i = 0; i < parts.length; i++) { if (temp[i]) parts[i].dispose(); geos[i].dispose(); }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(position, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(normal, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  if (color) out.setAttribute('color', new THREE.BufferAttribute(color, 3));
  out.computeBoundingBox(); out.computeBoundingSphere();
  return out;
}

function boxAt(cx: number, cy: number, cz: number, w: number, h: number, d: number) {
  const g = new THREE.BoxGeometry(w, h, d); g.translate(cx, cy, cz); return g;
}
function boxes(list: number[][]) { return mergeGeos(list.map((b) => boxAt(b[0], b[1], b[2], b[3], b[4], b[5]))); }
function cylAt(cx: number, cy: number, cz: number, rTop: number, rBot: number, h: number, seg = 16) {
  const g = new THREE.CylinderGeometry(rTop, rBot, h, seg); g.translate(cx, cy, cz); return g;
}

/**
 * Revolve a profile about +Y. `pts` are [radius, y] in metres, bottom to top.
 *
 * This is the shape vocabulary the whole monumental set is built from -- a chedi's bell, a prang's
 * corn-cob taper, a dome, a ringed spire are all one profile each. Two things are worth stating
 * because both cost a rebuild to learn:
 *
 * - LatheGeometry is OPEN at top and bottom. A profile that does not close on the axis (radius 0)
 *   leaves a hole the turntable gate reads as background enclosed by the silhouette. Close it, or
 *   cap it with what sits above.
 * - RADIAL SEGMENT COUNT is the triangle budget's main lever here and it is per-lathe: a profile of
 *   n points at s segments is 2*(n-1)*s triangles. A 24-ring spire at 32 segments is 1,472
 *   triangles on its own, which is why the low-relief rings are a profile rather than 24 rings.
 */
function lathe(pts: number[][], seg: number, yOffset = 0): THREE.BufferGeometry {
  const v = pts.map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
  const g = new THREE.LatheGeometry(v, seg);
  g.computeVertexNormals();
  return g;
}

/** A stepped taper as a lathe profile: `rings` alternating out/in radii climbing from y0 to y1.
 *  One geometry, one draw call, and the step count is a profile-point count rather than a mesh
 *  count -- which is what keeps a 20-ring chedi spire inside a 32-geometry ceiling. */
function ringedTaper(y0: number, y1: number, r0: number, r1: number, rings: number, bulge: number): number[][] {
  const pts: number[][] = [];
  for (let i = 0; i <= rings; i++) {
    const t = i / rings;
    const y = y0 + (y1 - y0) * t;
    const r = r0 + (r1 - r0) * t;
    const step = (y1 - y0) / rings;
    pts.push([r + bulge, y]);
    pts.push([r + bulge, y + step * 0.45]);
    pts.push([r, y + step * 0.55]);
  }
  pts.push([r1, y1]);
  return pts;
}


/**
 * The REDENTED square plan -- a square whose four corners are cut back in two right-angled steps.
 * It is the plan of a Thai chedi's terrace and of a prang's base, and building it as a Shape that
 * is then extruded is not a stylistic choice: the obvious alternative, a wide box crossed by a
 * deep box, puts the two boxes' top faces in the same plane facing the same way over their whole
 * intersection, which z-fights. One extrusion of one closed plan has no interior coincidence at
 * all.
 *
 * `a` is the half-width across the flats; `r` is the depth of each redent step.
 */
function redentedShape(a: number, r: number): THREE.Shape {
  const quad = [[a, a - 2 * r], [a - r, a - 2 * r], [a - r, a - r], [a - 2 * r, a - r], [a - 2 * r, a]];
  const pts: number[][] = [];
  for (let k = 0; k < 4; k++) {
    for (const [x, z] of quad) {
      // rot90^k, applied k times: (x, z) -> (-z, x)
      let px = x, pz = z;
      for (let i = 0; i < k; i++) { const t = px; px = -pz; pz = t; }
      pts.push([px, pz]);
    }
  }
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.closePath();
  return shape;
}

/** Extrude a plan Shape between two heights. ExtrudeGeometry builds along +Z, so the result is
 *  rotated onto +Y; `-Math.PI / 2` about X maps +Z to +Y and leaves the plan's own x as x. */
function extrudeSlab(shape: THREE.Shape, y0: number, y1: number): THREE.BufferGeometry {
  const g = new THREE.ExtrudeGeometry(shape, { depth: y1 - y0, bevelEnabled: false, curveSegments: 4 });
  // rotateX(-PI/2) maps (x, y, z) -> (x, z, -y), so the extrusion depth becomes height and the
  // plan's own second axis becomes -z. Every plan here is four-fold symmetric, so that sign is
  // immaterial; what matters is that the slab now runs UP from y=0 and needs lifting by y0.
  g.rotateX(-Math.PI / 2);
  g.translate(0, y0, 0);
  g.computeVertexNormals();
  return g;
}

/**
 * A square plan with a rectangular NOTCH cut into its +X face -- the stair well of a temple
 * terrace. Cutting the stair out of the plan rather than hanging it off the outside is what keeps
 * an asymmetric feature inside a symmetric declared envelope: a flight projecting past a 9 m
 * terrace would put the prop's bounding box off-centre and over its declared width on one side.
 */
function notchedSquare(a: number, notchHalfZ: number, xInner: number): THREE.Shape {
  const pts = [[a, -a], [a, -notchHalfZ], [xInner, -notchHalfZ], [xInner, notchHalfZ],
               [a, notchHalfZ], [a, a], [-a, a], [-a, -a]];
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.closePath();
  return shape;
}

/**
 * A RECTANGULAR plan with a notch cut into its +Z face. The square version above is what a chedi or
 * a prang terrace needs; a hall that is twice as long as it is wide needs the two half-extents kept
 * apart, and its stair is on a short end rather than a long one.
 */
function notchedRect(hx: number, hz: number, nx: number, zInner: number): THREE.Shape {
  const pts = [[hx, -hz], [hx, hz], [nx, hz], [nx, zInner], [-nx, zInner], [-nx, hz], [-hx, hz], [-hx, -hz]];
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.closePath();
  return shape;
}

/**
 * The cross-section of one roof tier, as a closed trapezoid in XY: eaves at (+-halfBase, y0)
 * rising at `pitch` (as a tangent) to a flat top at y1.
 *
 * Thai temple roofs nest, and that is the reason for the TRUNCATION. Three full gables at one
 * pitch cannot nest -- the widest tier's ridge would be the highest, which is upside down. What
 * actually happens is that each lower tier is cut off at the height where the next tier's eaves
 * begin, and its upper part is hidden behind that tier; only the topmost tier is a real gable,
 * closed by passing y1 at the apex.
 */
function tierProfile(halfBase: number, y0: number, y1: number, pitch: number): THREE.Shape {
  const inset = (y1 - y0) / pitch;
  const halfTop = halfBase - inset;
  const shape = new THREE.Shape();
  shape.moveTo(-halfBase, y0);
  shape.lineTo(halfBase, y0);
  if (halfTop > 0.02) {
    shape.lineTo(halfTop, y1);
    shape.lineTo(-halfTop, y1);
  } else {
    shape.lineTo(0, y0 + halfBase * pitch);   // a real ridge: the topmost tier closes to a point
  }
  shape.closePath();
  return shape;
}

/** Extrude a plan Shape along +Z between two depths, with no rotation -- the native direction of
 *  ExtrudeGeometry. Used where the profile genuinely lives in the XY plane, such as the raking
 *  triangle of a stair cheek. */
function extrudeAlongZ(shape: THREE.Shape, z0: number, z1: number): THREE.BufferGeometry {
  const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, z0);
  g.computeVertexNormals();
  return g;
}

/** A rectangular plate whose head is a half-round arch, optionally carrying an arched aperture of
 *  the same form. The aperture arc is ALWAYS swept from angle 0 to PI: written the other way it
 *  runs under the circle instead of over it and leaves the arch head filled solid, which reads as
 *  a square window with a ghost arch drawn across it. */
function archedPlate(w: number, h: number, archR: number, spring: number,
                     hole?: { r: number, spring: number, sill: number }): THREE.Shape {
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2, 0);
  shape.lineTo(w / 2, 0);
  shape.lineTo(w / 2, spring);
  shape.absarc(0, spring, archR, 0, Math.PI, false);
  shape.lineTo(-w / 2, spring);
  shape.closePath();
  if (hole) {
    const p = new THREE.Path();
    p.moveTo(hole.r, hole.sill);
    p.lineTo(hole.r, hole.spring);
    p.absarc(0, hole.spring, hole.r, 0, Math.PI, false);
    p.lineTo(-hole.r, hole.sill);
    p.closePath();
    shape.holes.push(p);
  }
  return shape;
}

/**
 * A HIP ROOF with a concave slope and upswept corners -- the East Asian roof, which none of the
 * other shape helpers here can express.
 *
 * It is generated as a ring of rectangles climbing from the eaves to the ridge rather than as an
 * extruded profile, because a hip slopes on all four sides: an extrusion gives vertical gable ends,
 * which is a different building.
 *
 * The horizontal shrink follows `(1 - t)^curveExp`, and the exponent must be ABOVE one. The slope
 * at any height is dy/dx, so a plan that shrinks FAST for a given rise is a shallow slope: with
 * q > 1 the derivative q(1-t)^(q-1) is large at the eaves and small at the ridge, which is shallow
 * eaves and a steep ridge -- the East Asian roof. Below one it is the other way round and builds a
 * flat-topped tent, which is what the first attempt here rendered. A linear shrink gives the
 * straight pyramid of a hip roof anywhere else in the world.
 *
 * `cornerLift` raises and pushes out the four eaves corners, tapering away by a third of the way
 * up. That upsweep is the single most identifying thing about the roof, and it is why the plan
 * half-width passed in must leave room: the corners end up further out than the eaves line.
 *
 * The result is a closed solid -- outer surface, a soffit `drop` below the eaves, and a fascia band
 * between them. An open shell would let the turntable gate read straight through the roof from any
 * low angle.
 */
function hipRoof(hx: number, hz: number, ridgeHalfZ: number, y0: number, y1: number,
                 curveExp: number, steps: number, drop: number, cornerLift: number): THREE.BufferGeometry {
  // EIGHT points per ring, not four: the four corners and the four edge midpoints. With four the
  // corner lift has nowhere to fall away to and raises the ENTIRE eaves line, which built a saddle
  // instead of a roof. The midpoints are what hold the eaves down between the corners.
  //
  // The order is (+x,-z), mid, (-x,-z), mid, (-x,+z), mid, (+x,+z), mid, which is counter-clockwise
  // seen from ABOVE -- the winding an upward-facing surface needs. Wound the other way the whole
  // roof renders inside out, which looks like a thin black membrane rather than a mistake.
  const ring = (t: number) => {
    const f = Math.pow(1 - t, curveExp);
    const g = Math.pow(Math.max(0, 1 - t / 0.34), 2);
    const lift = cornerLift * g, out = 1 + 0.045 * g;
    const ax = hx * f * out, az = (ridgeHalfZ + (hz - ridgeHalfZ) * f) * out;
    const y = y0 + (y1 - y0) * t;
    const c = (x: number, z: number) => [x, y + lift, z];
    const m = (x: number, z: number) => [x, y, z];
    return [c(ax, -az), m(0, -az), c(-ax, -az), m(-ax, 0),
            c(-ax, az), m(0, az), c(ax, az), m(ax, 0)];
  };
  const tri: number[] = [];
  const push = (a: number[], b: number[], c: number[]) => tri.push(...a, ...b, ...c);
  let prev = ring(0);
  for (let i = 1; i <= steps; i++) {
    const cur = ring(i / steps);
    for (let k = 0; k < 8; k++) {
      const k2 = (k + 1) % 8;
      push(prev[k], prev[k2], cur[k2]);
      push(prev[k], cur[k2], cur[k]);
    }
    prev = cur;
  }
  // Fascia band and soffit, so the roof is a solid rather than a shell. An open shell lets the
  // turntable gate read straight through the roof from any low angle.
  const e = ring(0);
  const low = e.map((p) => [p[0], p[1] - drop, p[2]]);
  for (let k = 0; k < 8; k++) {
    const k2 = (k + 1) % 8;
    push(low[k], e[k], e[k2]);
    push(low[k], e[k2], low[k2]);
  }
  for (let k = 1; k < 7; k++) push(low[0], low[k + 1], low[k]);   // soffit fan, facing down

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(tri), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array((tri.length / 3) * 2), 2));
  g.computeVertexNormals();
  return g;
}

/**
 * A RIBBED dome -- a surface of revolution whose radius is modulated around the axis, so it reads
 * as the melon-ribbed dome of a mosque rather than a smooth hemisphere.
 *
 * LatheGeometry cannot do this: a lathe revolves one profile at one radius per height, and ribs are
 * a variation AROUND the axis, not along it. So the surface is generated directly, sampling
 * `1 + amp * cos(ribs * theta)` per sector. The ribs are the reason the dome is recognisable at the
 * distance a village skyline is read from -- a smooth green hemisphere reads as a water tank.
 */
function ribbedDome(profile: number[][], ribs: number, amp: number, seg: number,
                    valley?: number[]): THREE.BufferGeometry {
  const tri: number[] = [];
  const col: number[] = [];
  // The ribs are not only a shape. On the mosque's domes the crests are pale and the valleys are
  // green, and that stripe is most of what the dome reads as at distance. It is carried as a
  // per-vertex MULTIPLIER off the same cosine that shapes the rib -- two measurements, the crest
  // colour on the material and the valley as the ratio between them -- so the striping costs an
  // attribute rather than a texture set or a second draw call.
  const tint = (j: number) => {
    if (!valley) return [1, 1, 1];
    // Raised to 0.55 rather than left linear. A cosine spends half its area near each extreme, and
    // that renders a dome that is pale overall where the plate's is green overall: the crest is a
    // narrow highlight on a real rib, not half of it. The exponent widens the valley.
    const f = Math.pow((1 - Math.cos(ribs * ((j % seg) * Math.PI * 2 / seg))) / 2, 0.55);
    return [1 + (valley[0] - 1) * f, 1 + (valley[1] - 1) * f, 1 + (valley[2] - 1) * f];
  };
  const push = (a: number[], b: number[], c: number[]) => tri.push(...a, ...b, ...c);
  const at = (i: number, j: number) => {
    const th = (j % seg) * Math.PI * 2 / seg;
    const f = 1 + amp * Math.cos(ribs * th);
    const r = profile[i][0] * f;
    return [Math.sin(th) * r, profile[i][1], Math.cos(th) * r];
  };
  for (let i = 0; i < profile.length - 1; i++) {
    for (let j = 0; j < seg; j++) {
      const a = at(i, j), b = at(i, j + 1), c = at(i + 1, j + 1), d = at(i + 1, j);
      push(a, b, c);
      push(a, c, d);
      const ta = tint(j), tb = tint(j + 1);
      col.push(...ta, ...tb, ...tb, ...ta, ...tb, ...ta);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(tri), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array((tri.length / 3) * 2), 2));
  if (valley) g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(col), 3));
  g.computeVertexNormals();
  return g;
}

/**
 * A POINTED arch plate -- the two-centred arch of a mosque, not the half-round of a Roman one.
 * `archedPlate` above sweeps a single semicircle, which is the wrong arch here and reads as a
 * railway viaduct; this one runs each side up to a shared apex through a quadratic, which gives the
 * ogee point.
 */
function pointedArchShape(w: number, spring: number, apexRise: number, sill: number,
                          hole?: { w: number, spring: number, apexRise: number, sill: number }): THREE.Shape {
  const build = (target: THREE.Shape | THREE.Path, ww: number, sp: number, rise: number, sl: number) => {
    const hw = ww / 2;
    target.moveTo(hw, sl);
    target.lineTo(hw, sp);
    target.quadraticCurveTo(hw, sp + rise * 0.72, 0, sp + rise);
    target.quadraticCurveTo(-hw, sp + rise * 0.72, -hw, sp);
    target.lineTo(-hw, sl);
    target.closePath();
  };
  const shape = new THREE.Shape();
  build(shape, w, spring, apexRise, sill);
  if (hole) {
    const p = new THREE.Path();
    build(p, hole.w, hole.spring, hole.apexRise, hole.sill);
    shape.holes.push(p);
  }
  return shape;
}

/**
 * A TAPERING TUBE along +Z, built from a list of stations. Each station is
 * [z, centreX, centreY, radiusX, radiusY], and consecutive stations are joined by a ring of `seg`
 * points, so the radius, the centre and the ellipse ratio can all vary along the length.
 *
 * This is the only ORGANIC form in the whole kit, and it exists for one prop: a reclining figure is
 * a long soft mass whose section changes at every point along it -- shoulder to waist to hip to
 * calf -- and neither a lathe nor a stack of boxes can say that. A box decomposition of a lying
 * body is not a low-poly body, it is a pile of luggage.
 *
 * A station with a radius at or near zero closes the tube, so the ends can be capped by the
 * station list itself rather than by a separate fan.
 */
function tubeAlong(stations: number[][], seg: number): THREE.BufferGeometry {
  const tri: number[] = [];
  const push = (a: number[], b: number[], c: number[]) => tri.push(...a, ...b, ...c);
  const at = (i: number, j: number) => {
    const [z, cx, cy, rx, ry] = stations[i];
    const th = (j % seg) * Math.PI * 2 / seg;
    return [cx + Math.sin(th) * rx, cy + Math.cos(th) * ry, z];
  };
  for (let i = 0; i < stations.length - 1; i++) {
    for (let j = 0; j < seg; j++) {
      const a = at(i, j), b = at(i + 1, j), c = at(i + 1, j + 1), d = at(i, j + 1);
      push(a, b, c);
      push(a, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(tri), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array((tri.length / 3) * 2), 2));
  g.computeVertexNormals();
  return g;
}

/**
 * A curled horn: `n` tapering box segments sampled along a sine, each rotated to its own tangent.
 * Shared by the ubosot's chofa, the prang's trident prongs and the Chinese shrine's flying eaves,
 * because all three are the same problem -- a straight spike at a roof end reads as a lightning rod
 * and the curl is the whole feature.
 */
function curledHorn(reach: number, rise: number, thick: number, n = 6): THREE.BufferGeometry {
  const segs: THREE.BufferGeometry[] = [];
  const at = (u: number) => [reach * Math.sin(u * Math.PI * 0.46), rise * u];
  for (let j = 0; j < n; j++) {
    const a = at(j / n), b = at((j + 1) / n);
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const w = thick * (1 - j / n) + thick * 0.28;
    const g = new THREE.BoxGeometry(w, Math.hypot(dx, dy) + thick * 0.2, w);
    g.rotateZ(Math.atan2(-dx, dy));
    g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, 0);
    segs.push(g);
  }
  return mergeGeos(segs);
}

/**
 * Ramp a per-vertex tint over a height band, as a MULTIPLIER on the material colour.
 *
 * This is how a local material override gets delivered on a merged component that is one mesh and
 * must stay one draw call: a second material would cost a submission and a shader switch to say
 * that the bottom of a wall is dirtier than the top. `rgb0` is the measured tint at y0 expressed
 * as a fraction of the material's own measured albedo, so the top of the band is untinted 1.0 and
 * the numbers below stay traceable to two crop measurements rather than to a chosen darkening.
 */
function tintByHeight(geo: THREE.BufferGeometry, y0: number, y1: number, rgb0: number[]): void {
  const p = geo.getAttribute('position');
  const col = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) {
    const t = Math.min(1, Math.max(0, (p.getY(i) - y0) / (y1 - y0)));
    for (let c = 0; c < 3; c++) col[i * 3 + c] = rgb0[c] + (1 - rgb0[c]) * t;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
}

/* ------------------------------------------------------------------ materials */

/**
 * Every material is declared `textureless` in the sculpt spec, so no procedural texture set is
 * synthesised. That matters twice. Speed: makeProceduralTextureSet writes FIVE canvases per
 * material pixel by pixel in JavaScript, at a cost that is the SQUARE of the resolution.
 * Correctness: whenever a texture set exists the generator forces color to white and roughness
 * to 1 and reads both back from the generated maps, discarding the measured albedo.
 *
 * Metalness is capped well below physical for the gilded surfaces. The thaikit harness supplies a
 * hemisphere light and three directionals and NO environment map, and a metal with nothing to
 * reflect renders black -- which on a gold finial is the whole feature lost. The albedo stays
 * measured; the metalness is what is wrong for this rig.
 */
function buildMaterials(options: ProceduralModelOptions): Record<string, THREE.MeshStandardMaterial> {
  const map: Record<string, THREE.MeshStandardMaterial> = {};
  for (const s of CONFIG.materials as any[]) {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(s.color),
      roughness: s.roughness,
      metalness: s.metalness,
      wireframe: options.wireframe ?? false,
      side: s.doubleSided ? THREE.DoubleSide : THREE.FrontSide,
      vertexColors: s.vertexColors === true,
    });
    if (s.envMapIntensity !== undefined) m.envMapIntensity = s.envMapIntensity;
    if (s.opacity !== undefined) { m.transparent = true; m.opacity = s.opacity; m.depthWrite = true; }
    m.name = s.id;
    map[s.id] = m;
  }
  return map;
}

/* ------------------------------------------------------------------ the model */

export function createKhmerStoneSanctuaryModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Khmer Stone Sanctuary';

  const materials = buildMaterials(options);
  const nodes: Record<string, THREE.Object3D> = {};
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};
  const castShadow = options.castShadow ?? true;
  const receiveShadow = options.receiveShadow ?? true;

  /**
   * A material with `vertexColors` reads a `color` attribute out of EVERY geometry bound to it, and
   * a geometry that has none hands the shader an undefined attribute -- which comes back as
   * (0, 0, 0) and renders the mesh BLACK. That is not a hypothetical: the ubosot's wall body and
   * its eight boundary stones shipped as black silhouettes from one tinted platform sharing their
   * stone material, and the failure is silent because the tinted component itself looks perfect.
   *
   * An InstancedMesh hides it -- it falls back to instanceColor and comes out white -- so the same
   * mistake on the chedi's niche frames rendered correctly and taught nothing. Guard it here, once,
   * for every geometry: no color attribute and a vertexColors material means fill with white.
   */
  function guardVertexColors(geo: THREE.BufferGeometry, mat: THREE.MeshStandardMaterial) {
    if (!mat || !mat.vertexColors || geo.getAttribute('color')) return;
    const n = geo.getAttribute('position').count;
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * 3).fill(1), 3));
  }

  function add(id: string, name: string, geo: THREE.BufferGeometry, matId: string) {
    const node = new THREE.Group(); node.name = name + '__node';
    guardVertexColors(geo, materials[matId]);
    const mesh = new THREE.Mesh(geo, materials[matId]);
    mesh.name = name; mesh.castShadow = castShadow; mesh.receiveShadow = receiveShadow;
    node.add(mesh); root.add(node);
    nodes[id] = node; meshes[id] = mesh; colliders[id] = null;
    return mesh;
  }
  function addInst(id: string, name: string, geo: THREE.BufferGeometry, matId: string, mats: THREE.Matrix4[], cols?: number[]) {
    const node = new THREE.Group(); node.name = name + '__node';
    guardVertexColors(geo, materials[matId]);
    const inst = new THREE.InstancedMesh(geo, materials[matId], mats.length);
    inst.name = name; inst.castShadow = castShadow; inst.receiveShadow = receiveShadow;
    for (let i = 0; i < mats.length; i++) inst.setMatrixAt(i, mats[i]);
    if (cols) {
      // setColorAt MULTIPLIES with material.color, so an instanced material carrying per-instance
      // tones must be white or every tone comes out darkened by the base.
      const c = new THREE.Color();
      for (let i = 0; i < cols.length; i++) inst.setColorAt(i, c.setHex(cols[i]));
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    }
    inst.instanceMatrix.needsUpdate = true;
    node.add(inst); root.add(node);
    nodes[id] = node; meshes[id] = inst as unknown as THREE.Mesh; colliders[id] = null;
    return inst;
  }
  /** Four instances at 90-degree yaw about the axis -- the corner/face repetition that every
   *  building in this set uses for niches, finials, boundary stones and corner domes. */
  function quad(radius: number, y: number, phase = 0): THREE.Matrix4[] {
    return [0, 1, 2, 3].map((i) => {
      const a = phase + i * Math.PI / 2;
      return new THREE.Matrix4().compose(
        new THREE.Vector3(Math.sin(a) * radius, y, Math.cos(a) * radius),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), a),
        new THREE.Vector3(1, 1, 1));
    });
  }

  const G = CONFIG.geometry as any;


  /** Box-project UVs by each vertex's dominant normal axis, in metres over the tile size, so the
   *  coursing tile lands at true block scale and lines up across every merged part. Every geometry
   *  this is used on is non-indexed with per-face normals, so a face never straddles two
   *  projections. */
  function boxUv(geo: THREE.BufferGeometry, tile: number): void {
    const p = geo.getAttribute('position'), n = geo.getAttribute('normal');
    const out = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
      let u: number, v: number;
      if (ay >= ax && ay >= az) { u = p.getX(i); v = p.getZ(i); }
      else if (ax >= az) { u = p.getZ(i); v = p.getY(i); }
      else { u = p.getX(i); v = p.getY(i); }
      out[i * 2] = u / tile; out[i * 2 + 1] = v / tile;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(out, 2));
  }
  /** Four copies of a geometry authored on the +Z face, yawed a quarter turn each -- for parts
   *  that belong INSIDE a merged component rather than in an instanced set. */
  function quadMerge(geo: THREE.BufferGeometry): THREE.BufferGeometry[] {
    return [0, 1, 2, 3].map((k) => { const g = geo.clone(); g.rotateY(k * Math.PI / 2); return g; });
  }
  /** Per-vertex tint by FACING: one display-space ratio for upward faces, another for the rest,
   *  raised to 2.2 because vertex colours multiply in linear space. This is how the sandstone's
   *  ledge-top lichen crust is delivered on one material: a repeating tile cannot tell a top
   *  from a side, but a normal can. */
  function tintByFacing(geo: THREE.BufferGeometry, side: number[], top: number[]): void {
    const p = geo.getAttribute('position'), n = geo.getAttribute('normal');
    const col = new Float32Array(p.count * 3);
    const lin = (t: number[]) => t.map((v) => Math.pow(v, 2.2));
    const S = lin(side), T = lin(top);
    for (let i = 0; i < p.count; i++) {
      const up = n.getY(i) > 0.7 ? T : S;
      col[i * 3] = up[0]; col[i * 3 + 1] = up[1]; col[i * 3 + 2] = up[2];
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  }
  const SAND = G.wear.sandstone;

  /* ---------------------------------------------------------------- laterite platform
   * Two slabs, a parapet enclosure and a six-tread stair, all the same red laterite and therefore
   * ONE component and ONE draw call.
   *
   * The stair is cut out of the platform PLAN as a notch. Everything here is built with that notch
   * on +X and the whole merged geometry is then rotated a quarter turn onto +Z, so the stair and
   * the sanctuary's one real doorway end up on the same elevation -- which is what the plate shows
   * and is the only reason either of them is where it is. */
  {
    const N = G.notch, ST = G.stair, P = G.parapet;
    const parts: THREE.BufferGeometry[] = (G.platform as number[][]).map(
      ([y0, y1, a]) => extrudeSlab(notchedSquare(a, N.halfZ, N.xInner), y0, y1));

    // Parapet enclosure, standing inside the platform edge on a ledge. Side runs carry the full
    // depth, front and back runs stop between them: run to full width, every corner would put
    // two outer faces in one plane facing one way.
    const bi = P.outer - P.thick, bc = P.outer - P.thick / 2, bh = P.y1 - P.y0, by = (P.y0 + P.y1) / 2;
    parts.push(boxAt(-bc, by, 0, P.thick, bh, P.outer * 2));
    parts.push(boxAt(0, by, bc, bi * 2, bh, P.thick));
    parts.push(boxAt(0, by, -bc, bi * 2, bh, P.thick));
    const segLen = P.outer - N.halfZ;
    parts.push(boxAt(bc, by, (N.halfZ + P.outer) / 2, P.thick, bh, segLen));
    parts.push(boxAt(bc, by, -(N.halfZ + P.outer) / 2, P.thick, bh, segLen));

    // Six shallow treads, each occupying only its own going. Stacked wedges all reaching x=6.00
    // would put six outer faces in one plane facing one way.
    const run = (ST.x1 - ST.x0) / ST.steps, rise = ST.top / ST.steps;
    for (let i = 0; i < ST.steps; i++) {
      const x1 = ST.x1 - i * run, h = (i + 1) * rise;
      parts.push(boxAt(x1 - run / 2, h / 2, 0, run, h, ST.treadHalfZ * 2));
    }

    const geo = mergeGeos(parts);
    geo.rotateY(-Math.PI / 2);   // +X notch -> +Z, joining the stair to the doorway elevation
    // Ground dirt and the darker weathering of the lower courses, as a per-vertex tint rather than
    // a second material: the plate's bottom courses measure distinctly darker than the enclosure.
    tintByHeight(geo, 0, 1.20, [0.78, 0.79, 0.80]);
    boxUv(geo, G.wear.laterite.tile);
    add('platform', 'Laterite platform, enclosure and stair', geo, 'laterite');
    colliders['platform'] = {
      shape: 'box', localCenter: [0, 4.5, 0], halfExtents: [6.0, 4.5, 6.0],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level '
           + 'builder collides with the sanctuary, not with its fallen blocks.',
    };
  }

  /* ---------------------------------------------------------------- sanctuary tower
   * Base moulding, body, the three-band entablature, two tiers with their miniature aedicules and
   * corner blocks, all sandstone and all ONE component. The plan is redented, as a Khmer tower's
   * is, and each slab is one closed twenty-point polygon rather than crossed boxes -- correct
   * shape, and no interior coincidence. Consecutive slabs meet top-to-bottom as opposed faces. */
  {
    const T = G.tower, B = G.base, T1 = G.tier1, C1 = G.tier1cap, T2 = G.tier2;
    const parts: THREE.BufferGeometry[] = [];
    parts.push(extrudeSlab(redentedShape(B.a, B.r), B.y0, B.y1));
    parts.push(extrudeSlab(redentedShape(T.a, T.r), T.y0, T.y1));
    for (const [y0, y1, a] of G.cornice as number[][]) {
      parts.push(extrudeSlab(redentedShape(a, a * 0.12), y0, y1));
    }
    parts.push(extrudeSlab(redentedShape(T1.a, T1.a * 0.16), T1.y0, T1.y1));
    parts.push(extrudeSlab(redentedShape(C1.a, C1.a * 0.16), C1.y0, C1.y1));
    parts.push(extrudeSlab(redentedShape(T2.a, T2.a * 0.16), T2.y0, T2.y1));
    // Each tier repeats the body's false door in miniature, one proud panel per face. On the
    // plate these small aedicules are what make the roof read as a stack of shrines rather than
    // as a stepped box.
    for (const [tier, a] of [[T1, T1.a], [T2, T2.a]] as any[]) {
      const d = tier.aed;
      const panel = boxAt(0, (d.y0 + d.y1) / 2, a + d.proud / 2, d.w, d.y1 - d.y0, d.proud);
      parts.push(...quadMerge(panel));
    }
    // Corner blocks on the first tier's cap ledge -- acroteria -- on THREE corners. The fourth,
    // (+X, -Z), is the one that has fallen; its blocks lie on the ledge and the cornice below.
    {
      // On the ledge that EXISTS: the cap plan is redented, so its geometric corner is cut back and
      // a block put at (a, a) hangs over nothing -- which is exactly what the second build shipped,
      // and it read as floating debris. The ledge at the corner is the square between the second
      // tier's cut-back and the cap's, x and z both in [a-2r, a-r].
      const c = C1.corner, o = C1.a - C1.a * 0.16 - c / 2 - 0.02;
      for (const [sx, sz] of [[1, 1], [-1, 1], [-1, -1]]) {
        parts.push(boxAt(sx * o, C1.y1 + c / 2, sz * o, c, c, c));
      }
    }
    const geo = mergeGeos(parts);
    boxUv(geo, SAND.tile);
    tintByFacing(geo, SAND.side, SAND.crust);
    add('tower', 'Sanctuary tower and roof tiers', geo, 'sandstone');
  }

  /* ---------------------------------------------------------------- collapsed top tier
   * The top tier is authored as a PARTIAL ring with the (+X, -Z) corner gone -- the same corner
   * whose acroterion is missing below it and whose blocks lie on the ledges and the platform. That
   * is the whole difference between this asset and an intact tower, and the registry notes ask
   * for it explicitly. Four runs, two of them stopping short of the fallen corner, at two heights
   * so the break reads as masonry giving way rather than a wall that was drawn shorter. */
  {
    const R = G.brokenTier;
    const h = R.y1 - R.y0, t = R.t, a = R.a, ai = a - t;
    const geo = mergeGeos([
      boxAt(-(a - t / 2), R.y0 + h / 2, 0, t, h, a * 2),                          // -X, full
      boxAt(0, R.y0 + h / 2, a - t / 2, ai * 2, h, t),                            // +Z, between
      boxAt(a - t / 2, R.y0 + h * 0.36, (a - 0.5) / 2, t, h * 0.72, a + 0.5),            // +X, stops at z=-0.5
      boxAt((-ai + 0.9) / 2, R.y0 + h * 0.43, -(a - t / 2), ai + 0.9, h * 0.86, t),      // -Z, stops at x=+0.9
    ]);
    boxUv(geo, SAND.tile);
    tintByFacing(geo, SAND.side, SAND.crust);
    add('broken-tier', 'Collapsed top tier', geo, 'sandstone');
  }

  /* ---------------------------------------------------------------- door aedicules
   * Four faces, each with the Khmer door surround the plate shows: two RINGED COLONNETTES standing
   * in front of plain jambs, a deep lintel over them, a tall pointed pediment above that, and a
   * threshold step at the foot. The first build carried jambs and a lintel only, and the render
   * read as a garage. One instanced unit, four rotations, one geometry. */
  {
    const T = G.tower, D = G.door;
    const face = T.a;
    const hw = D.w / 2 + D.jamb;
    const hF = D.head - D.sinkFrame;
    const parts: THREE.BufferGeometry[] = [
      // Jamb fronts at face+0.25, PROUD of the base moulding's face at face+0.20: level with it,
      // the two planes coincide over the plinth's height and tear.
      boxAt(-(D.w / 2 + D.jamb / 2), D.sinkFrame + hF / 2, face + 0.10, D.jamb, hF, 0.30),
      boxAt(D.w / 2 + D.jamb / 2, D.sinkFrame + hF / 2, face + 0.10, D.jamb, hF, 0.30),
      boxAt(0, D.head + D.lintel / 2, face + 0.10, hw * 2 + 0.28, D.lintel, 0.44),
      // threshold step, running back INTO the base moulding so there is no slot between them
      boxAt(0, 1.20 + 0.11, face + 0.55, D.w + 0.70, 0.22, 0.80),
    ];
    // Colonnettes: an engaged column each side with three ring collars, the plate's most
    // recognisable door feature. Ten segments -- they are 0.30 m across on a 12 m prop.
    for (const s of [-1, 1]) {
      const x = s * D.col.x, z = face + 0.20;
      parts.push(cylAt(x, D.sinkFrame + hF / 2, z, D.col.r, D.col.r, hF, 10));
      for (const y of [1.55, 2.25, 2.95]) parts.push(cylAt(x, y, z, D.col.ring, D.col.ring, 0.10, 10));
    }
    // The pediment: a tall panel with a pointed head, standing on the lintel and stopping just
    // under the first cornice band. In the plate it is the carved naga-frame over the door.
    {
      const y0 = D.head + D.lintel, w = hw + 0.14;
      const sh = new THREE.Shape();
      sh.moveTo(-w, y0); sh.lineTo(w, y0); sh.lineTo(w, y0 + 0.40);
      sh.lineTo(w * 0.70, y0 + 0.58); sh.lineTo(w * 0.36, y0 + 0.78); sh.lineTo(0, y0 + 0.88);
      sh.lineTo(-w * 0.36, y0 + 0.78); sh.lineTo(-w * 0.70, y0 + 0.58); sh.lineTo(-w, y0 + 0.40);
      sh.closePath();
      parts.push(extrudeAlongZ(sh, face - 0.05, face + 0.28));   // back buried in the wall, not floating off it
    }
    const unit = mergeGeos(parts);
    boxUv(unit, SAND.tile);
    tintByFacing(unit, SAND.side, SAND.crust);
    addInst('door-frames', 'Door aedicules', unit, 'sandstone', quad(0, 0));

    // THREE blind doors and ONE real opening. A Khmer sanctuary has a single cell and false doors
    // on the other three faces, so the set is deliberately not four identical things: quad()'s
    // first rotation is the identity, which puts index 0 on +Z, and that is the face left open.
    // The blind panels stand 0.10 m PROUD of the wall between the jambs with a central rib a
    // further 0.06 proud -- the closed leaves of a Khmer false door. Flush and the same stone as
    // the wall, they were invisible: with no colour to spend, depth is what says 'door'.
    const hB = D.head - D.sinkBlind;
    const blind = mergeGeos([
      boxAt(0, D.sinkBlind + hB / 2, face + 0.05, D.w, hB, 0.10),
      boxAt(0, D.sinkBlind + hB / 2 + 0.05, face + 0.09, 0.32, hB - 0.30, 0.14),
    ]);
    boxUv(blind, SAND.tile);
    tintByFacing(blind, SAND.side, SAND.side);
    addInst('blind-doors', 'Blind door panels', blind, 'sandstone', quad(0, 0).slice(1));

    // The one real doorway. It sits 0.02 m PROUD of the wall face, not behind it: the tower is a
    // SOLID mass, so a panel recessed into it is inside the solid and invisible. The opening
    // reads as an opening because the colonnettes, jambs and lintel stand in front of it.
    const hV = D.head - D.sinkVoid;
    add('doorway', 'Open doorway', boxAt(0, D.sinkVoid + hV / 2, face + 0.045, D.w, hV, 0.05), 'void');
  }

  /* ---------------------------------------------------------------- fallen blocks
   * Thirty blocks as ONE InstancedMesh: a heap on the truncated top, the slide of the fallen
   * corner down the ledges, and the scatter across the platform. Every placement is AUTHORED --
   * position, yaw, tilt, non-uniform scale and tone -- not hashed, so the top of the declared
   * 9.00 m is a block put there on purpose. This is the component that makes the prop a ruin
   * rather than a building. */
  {
    const U = G.blocks.unit as number[];
    const unit = boxAt(0, 0, 0, U[0], U[1], U[2]);
    boxUv(unit, G.wear.rubble.tile);
    const list = G.blocks.list as number[][];
    // Each block is sunk a few DISTINCT millimetres into whatever it lies on. Level with it, its
    // underside sits in the same plane as the tower's own base and its neighbours' undersides,
    // all facing down -- eleven coplanar co-facing pairs in the first render of this build.
    const mats = list.map(([x, y, z, yaw, tx, tz, sx, sy, sz], i) => new THREE.Matrix4().compose(
      new THREE.Vector3(x, y - 0.004 * (1 + (i % 9)), z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(tx, yaw, tz)),
      new THREE.Vector3(sx, sy, sz)));
    // Per-instance tones, all measured off blocks in the plate: the peach of a freshly broken
    // face (219,165,128), a cream weathered face, the tower's own stone, and a dark one. One
    // material, one geometry, four stones -- and the material is white because setColorAt
    // multiplies rather than replaces.
    const tones = G.blocks.tones as number[];
    addInst('fallen-blocks', 'Fallen blocks', unit, 'pale', mats, list.map((b) => tones[b[9]]));
  }

  /* ---------------------------------------------------------------- weathering
   * The plate's two stones are not flat. The laterite is laid in visible courses with wide dark
   * joints and its face is peppered with vesicular pits; the sandstone is tight ashlar streaked
   * BLACK down the pilasters and crusted ORANGE with lichen on every ledge. The first build left
   * all of it out and read as a clay model.
   *
   * It is delivered as three Canvas 2D tiles assigned AFTER material construction, the chedi's
   * route: the sculpt materials stay declared textureless (no five-canvas procedural set, no
   * per-pixel JavaScript, and the measured albedo is NOT thrown away), and each tile is a few
   * hundred Path2D fills at 512 px -- single-digit milliseconds. Each is a MULTIPLIER on the
   * material colour, bound as both map and bumpMap so a joint reads as a groove and a lichen crust
   * as a raised patch rather than as paint.
   *
   * The sandstone's lichen is BRIGHTER than the clean stone in red, and a multiplier cannot
   * brighten. So the material is re-based here to the lichen ENVELOPE -- per-channel max of the
   * clean stone and the lichen -- and the clean stone is painted as (0.79, 0.95, 1.0) of it. The
   * division is done on LINEAR components with the ratio raised to 2.2, because the tile is
   * sRGB and the shader decodes it before multiplying. Under Node -- bands.mjs and check-coplanar
   * both run this factory without a DOM -- there is no canvas, no re-basing, and the material
   * simply keeps its flat measured colour. */
  {
    const W = G.wear;
    const hasDom = typeof document !== 'undefined' && typeof (document as any).createElement === 'function';
    const size = Math.min(W.size, options.textureSize ?? W.size);
    const css = (t: number[], a: number) =>
      'rgba(' + Math.round(t[0] * 255) + ',' + Math.round(t[1] * 255) + ',' + Math.round(t[2] * 255) + ',' + a + ')';
    const rng = (seed: number) => () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

    function makeTile(seed: number, draw: (ctx: CanvasRenderingContext2D, r: () => number, S: number,
                                           wrapped: (fn: () => void) => void) => void): HTMLCanvasElement | null {
      if (!hasDom) return null;
      const cv = document.createElement('canvas');
      cv.width = cv.height = size;
      const ctx = cv.getContext('2d');
      if (!ctx) return null;
      const S = size;
      // Every mark is built once and drawn at nine wrapped offsets, so the tile is seamless under
      // RepeatWrapping; the shapes are precomputed before the nine fills or the copies differ.
      const wrapped = (fn: () => void) => {
        for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
          ctx.save(); ctx.translate(ox * S, oy * S); fn(); ctx.restore();
        }
      };
      draw(ctx, rng(seed), S, wrapped);
      return cv;
    }

    /** Ashlar coursing: the tile is an exact whole number of courses and blocks, laid in running
     *  bond, drawn as jittered quadrilaterals over a joint-coloured ground so the joints come out
     *  irregular for free. Each block carries its own tone from the measured spread. */
    const coursing = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                      P: any) => {
      const rows = Math.round(P.tile / P.course), cols = Math.round(P.tile / P.block);
      const ch = S / rows, bw = S / cols, j = P.joint / 2;
      ctx.fillStyle = css(P.jointTone, 1); ctx.fillRect(0, 0, S, S);
      const blocks: { p: Path2D, tone: number[] }[] = [];
      for (let row = 0; row < rows; row++) {
        const off = (row % 2) * bw / 2;
        for (let col = 0; col < cols; col++) {
          const x0 = col * bw + off + j, x1 = x0 + bw - 2 * j, y0 = row * ch + j, y1 = y0 + ch - 2 * j;
          const q = () => (r() - 0.5) * P.joint * 0.9;
          const p = new Path2D();
          p.moveTo(x0 + q(), y0 + q()); p.lineTo(x1 + q(), y0 + q());
          p.lineTo(x1 + q(), y1 + q()); p.lineTo(x0 + q(), y1 + q()); p.closePath();
          const t = P.blockLo + (P.blockHi - P.blockLo) * r();
          blocks.push({ p, tone: [t, t * (0.97 + 0.03 * r()), t * (0.95 + 0.05 * r())] });
        }
      }
      wrapped(() => { for (const b of blocks) { ctx.fillStyle = css(b.tone, 1); ctx.fill(b.p); } });
    };
    /** An irregular patch: a random WALK of overlapping discs, filled once as a union. Discs
     *  scattered about a centre render as polka dots; a stain is a worm, not a spot. */
    const blotch = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                    tone: number[], count: number, rad: number, alpha: number, vertical = 0) => {
      for (let i = 0; i < count; i++) {
        const halo = new Path2D(), core = new Path2D();
        let cx = r() * S, cy = r() * S, a = r() * Math.PI * 2;
        const R = rad * S * (0.5 + r()), n = 8 + Math.floor(r() * 16);
        for (let k = 0; k < n; k++) {
          a += (r() - 0.5) * 2.2;
          // a vertical bias turns the walk into a streak running down the face
          cx += Math.cos(a) * R * 0.4 * (1 - vertical); cy += Math.abs(Math.sin(a)) * R * 0.4 * (1 + vertical) ;
          const rr = R * (0.35 + 0.5 * r());
          halo.moveTo(cx + rr, cy); halo.arc(cx, cy, rr, 0, Math.PI * 2);
          core.moveTo(cx + rr * 0.6, cy); core.arc(cx, cy, rr * 0.6, 0, Math.PI * 2);
        }
        const al = alpha * (0.6 + 0.4 * r());
        wrapped(() => {
          ctx.fillStyle = css(tone, al * 0.55); ctx.fill(halo);
          ctx.fillStyle = css(tone, al * 0.45); ctx.fill(core);
        });
      }
    };
    /** Pits: small dark ellipses, the vesicles of laterite and the pocking of old sandstone. */
    const pits = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                  tone: number[], count: number, maxPx: number, alpha: number) => {
      const p = new Path2D();
      for (let i = 0; i < count; i++) {
        const x = r() * S, y = r() * S, rx = 1 + r() * maxPx, ry = rx * (0.6 + 0.6 * r());
        p.moveTo(x + rx, y); p.ellipse(x, y, rx, ry, r() * Math.PI, 0, Math.PI * 2);
      }
      wrapped(() => { ctx.fillStyle = css(tone, alpha); ctx.fill(p); });
    };
    /** Fine grain: a scatter of near-transparent specks, so a flat area is not flat. */
    const grain = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                   tone: number[], count: number, alpha: number) => {
      const p = new Path2D();
      for (let i = 0; i < count; i++) { const x = r() * S, y = r() * S, d = 0.6 + r() * 1.4; p.rect(x, y, d, d); }
      wrapped(() => { ctx.fillStyle = css(tone, alpha); ctx.fill(p); });
    };

    /** Black weathering streaks: vertical bands starting hard under a ledge and fading DOWN the
     *  face. v is world height on every mapping here and the canvas is flipped into UV space, so
     *  down the canvas is down the prop. */
    const streaks = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                     tone: number[], count: number, alpha: number) => {
      for (let i = 0; i < count; i++) {
        const x = r() * S, y0 = r() * S, len = S * (0.15 + 0.45 * r()), w = 12 + 44 * r();
        const a = alpha * (0.5 + 0.5 * r());
        wrapped(() => {
          const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
          g.addColorStop(0, css(tone, a)); g.addColorStop(0.35, css(tone, a * 0.7)); g.addColorStop(1, css(tone, 0));
          ctx.fillStyle = g; ctx.fillRect(x - w / 2, y0, w, len);
        });
      }
    };

    /** Soft low-frequency mottle: a few large discs drawn through a canvas blur, so the stone's
     *  tone drifts cloud-like over half a metre instead of stopping at a hard edge. Hard-edged
     *  random-walk blotches on this prop read as CAMOUFLAGE PAINT, which is the note that sent
     *  the second build back. */
    const cloud = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                   tone: number[], count: number, rad: number, alpha: number, blurPx: number) => {
      const marks: number[][] = [];
      for (let i = 0; i < count; i++) marks.push([r() * S, r() * S, rad * S * (0.5 + r()), alpha * (0.5 + 0.5 * r())]);
      wrapped(() => {
        ctx.filter = 'blur(' + blurPx + 'px)';
        for (const [x, y, rr, a] of marks) { ctx.fillStyle = css(tone, a); ctx.beginPath(); ctx.arc(x, y, rr, 0, Math.PI * 2); ctx.fill(); }
        ctx.filter = 'none';
      });
    };
    /** Soft weathering washes: vertical gradient streaks fading DOWN the face, blurred so they
     *  read as water-borne staining rather than as stripes. */
    const washes = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                    tone: number[], count: number, alpha: number, blurPx: number) => {
      const marks: number[][] = [];
      for (let i = 0; i < count; i++) marks.push([r() * S, r() * S, S * (0.15 + 0.45 * r()), 18 + 60 * r(), alpha * (0.5 + 0.5 * r())]);
      wrapped(() => {
        ctx.filter = 'blur(' + blurPx + 'px)';
        for (const [x, y0, len, w, a] of marks) {
          const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
          g.addColorStop(0, css(tone, a)); g.addColorStop(0.4, css(tone, a * 0.6)); g.addColorStop(1, css(tone, 0));
          ctx.fillStyle = g; ctx.fillRect(x - w / 2, y0, w, len);
        }
        ctx.filter = 'none';
      });
    };
    /** Lichen as CRUST: clusters of tiny specks, the way it grows, not a painted patch. At 6 mm
     *  a pixel the specks are 1-2 cm and blend to an orange tinge at prop distance. */
    const crust = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                   tone: number[], clusters: number, perCluster: number, rad: number, alpha: number) => {
      const p = new Path2D();
      for (let i = 0; i < clusters; i++) {
        const cx = r() * S, cy = r() * S, R = rad * S * (0.4 + r());
        for (let k = 0; k < perCluster; k++) {
          const a = r() * Math.PI * 2, d = R * Math.sqrt(r());
          const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.7, rr = 1 + 1.6 * r();
          p.moveTo(x + rr, y); p.arc(x, y, rr, 0, Math.PI * 2);
        }
      }
      wrapped(() => { ctx.fillStyle = css(tone, alpha); ctx.fill(p); });
    };

    const bind = (mat: THREE.MeshStandardMaterial, cv: HTMLCanvasElement | null, bump: number) => {
      if (!cv) return;
      const tex = new THREE.CanvasTexture(cv);
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;   // the tile holds display-space ratios
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex;
      mat.bumpMap = tex;
      mat.bumpScale = bump;
      mat.needsUpdate = true;
    };

    // Laterite: coursing with wide joints, then the pitting that is the stone's whole character.
    {
      const P = W.laterite;
      bind(materials.laterite, makeTile(20260826, (ctx, r, S, wrapped) => {
        coursing(ctx, r, S, wrapped, P);
        cloud(ctx, r, S, wrapped, P.mottle, 12, 0.14, 0.6, 12);
        pits(ctx, r, S, wrapped, P.pit, 1100, 4.5, 0.8);
        grain(ctx, r, S, wrapped, P.pit, 1800, 0.10);
      }), P.bump);
    }
    // Sandstone: tight ashlar, black streaks running down, lichen crust, light pocking.
    {
      const P = W.sandstone;
      const m = materials.sandstone;
      if (hasDom) {
        const c = m.color.clone();
        m.color.setRGB(c.r / Math.pow(P.clean[0], 2.2), c.g / Math.pow(P.clean[1], 2.2), c.b / Math.pow(P.clean[2], 2.2));
      }
      // Coursing and mottle are painted in CLEAN-stone terms, then the whole ground is scaled to
      // the clean ratio of the envelope with one multiply fill; everything after that -- the
      // black, the lichen, the pits -- is a ratio of E, which is how the lichen reaches an orange
      // BRIGHTER in red than the stone it sits on.
      bind(m, makeTile(8261403, (ctx, r, S, wrapped) => {
        coursing(ctx, r, S, wrapped, P);
        // Stone first: cloudy tonal drift, light and dark, then grain so no block is a flat fill.
        cloud(ctx, r, S, wrapped, P.mottle, 10, 0.16, 0.5, 14);
        cloud(ctx, r, S, wrapped, P.light, 8, 0.14, 0.4, 14);
        grain(ctx, r, S, wrapped, P.jointTone, 5000, 0.07);
        grain(ctx, r, S, wrapped, P.light, 2500, 0.07);
        ctx.globalCompositeOperation = 'multiply';
        ctx.fillStyle = css(P.clean, 1); ctx.fillRect(0, 0, S, S);
        ctx.globalCompositeOperation = 'source-over';
        // Weathering: soft washes running down, a few broad dark clouds under them, then pocking
        // and the lichen as speck clusters. Nothing here has a hard edge except the pits.
        washes(ctx, r, S, wrapped, P.black, 18, 0.55, 5);
        cloud(ctx, r, S, wrapped, P.black, 6, 0.09, 0.35, 16);
        pits(ctx, r, S, wrapped, P.pit, 420, 2.2, 0.5);
        crust(ctx, r, S, wrapped, P.lichen, 26, 34, 0.035, 0.55);
      }), P.bump);
    }
    // Rubble: no coursing -- each instance is one block -- just mottle, pocking and a dark side.
    {
      const P = W.rubble;
      bind(materials.pale, makeTile(11052011, (ctx, r, S, wrapped) => {
        ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, S, S);
        blotch(ctx, r, S, wrapped, P.mottle, 16, 0.12, 0.7);
        blotch(ctx, r, S, wrapped, P.dark, 6, 0.06, 0.6);
        pits(ctx, r, S, wrapped, P.pit, 260, 2.5, 0.6);
        grain(ctx, r, S, wrapped, P.dark, 1200, 0.10);
      }), P.bump);
    }
  }

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  return root;
}

/* ------------------------------------------------------------------ thaikit entry point */

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it with
 * (spec, options). `spec` is accepted and attached for host-side inspection -- the reconstruction
 * data already lives in this module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  const root = createKhmerStoneSanctuaryModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: ONE. Static landmark geometry -- nothing opens, turns or swings. A named pivot is a
    // promise that a part turns on it, and a prop that declares pivots it has no mechanisms for
    // has described a machine that does not exist.
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
