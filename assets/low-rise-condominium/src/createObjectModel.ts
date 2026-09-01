import * as THREE from 'three';

/**
 * Low-Rise Condominium -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 21.80 x 21.00 x 16.55 m, origin base-center, +Y up.
 * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.
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
    "id": "low-rise-condominium",
    "name": "Low-Rise Condominium",
    "exportName": "LowRiseCondominium",
    "envelope": "Envelope 21.80 x 21.00 x 16.55 m, origin base-center, +Y up.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
    "materials": [
      {
        "id": "white",
        "color": 15527148,
        "roughness": 0.88,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "fin",
        "color": 4479580,
        "roughness": 0.62,
        "metalness": 0.2
      },
      {
        "id": "glass",
        "color": 5008232,
        "roughness": 0.12,
        "metalness": 0,
        "opacity": 0.92,
        "envMapIntensity": 1
      },
      {
        "id": "balglass",
        "color": 13030608,
        "roughness": 0.25,
        "metalness": 0,
        "opacity": 0.62
      },
      {
        "id": "alu",
        "color": 10133665,
        "roughness": 0.45,
        "metalness": 0.3
      },
      {
        "id": "timber",
        "color": 11770751,
        "roughness": 0.8,
        "metalness": 0
      },
      {
        "id": "steel",
        "color": 9407104,
        "roughness": 0.38,
        "metalness": 0.35
      },
      {
        "id": "deck",
        "color": 11906984,
        "roughness": 0.95,
        "metalness": 0
      },
      {
        "id": "plinth",
        "color": 13618629,
        "roughness": 0.9,
        "metalness": 0
      },
      {
        "id": "plant",
        "color": 16777215,
        "roughness": 0.85,
        "metalness": 0
      },
      {
        "id": "sign",
        "color": 16777215,
        "roughness": 0.8,
        "metalness": 0
      }
    ],
    "geometry": {
      "hx": 10.25,
      "hz": 7,
      "t": 0.3,
      "groundTop": 3.05,
      "roofY": 17.75,
      "band": 0.45,
      "holeH": 2.4,
      "recess": 1.5,
      "levels": [
        3.5,
        6.35,
        9.2,
        12.05,
        14.9
      ],
      "bays": [
        [
          -9.8,
          -7.3
        ],
        [
          -7,
          -4.5
        ],
        [
          -2.65,
          -0.15
        ],
        [
          0.15,
          2.65
        ],
        [
          4.5,
          7
        ],
        [
          7.3,
          9.8
        ]
      ],
      "balcony": [
        false,
        true,
        true,
        false,
        true,
        false
      ],
      "fins": {
        "narrow": [
          [
            -7.3,
            -7
          ],
          [
            -0.15,
            0.15
          ],
          [
            7,
            7.3
          ]
        ],
        "corner": [
          [
            -10.2,
            -9.75
          ],
          [
            9.75,
            10.2
          ]
        ],
        "narrowD": 0.3,
        "cornerD": 0.5,
        "y1": 17.4
      },
      "louvre": {
        "front": [
          [
            -4.5,
            -2.65
          ],
          [
            2.65,
            4.5
          ]
        ],
        "d": 0.6,
        "slatW": 0.06,
        "slatD": 0.12,
        "pitch": 0.11,
        "side": [
          [
            -3,
            -1.2
          ],
          [
            0.2,
            2
          ]
        ],
        "sideD": 0.55,
        "y0": 2.9
      },
      "sideGap": {
        "z0": -1.2,
        "z1": 0.2,
        "ledgeD": 0.3,
        "ledgeH": 0.12
      },
      "sideWin": {
        "z0": 2,
        "z1": 2.45,
        "y0": 0.7,
        "y1": 2.3
      },
      "coping": {
        "y0": 17.4,
        "y1": 18.5,
        "out": 0.35
      },
      "deck": {
        "y": 17.85
      },
      "screen": {
        "x0": -8.7,
        "x1": 8.7,
        "z0": -6.5,
        "z1": 2.5,
        "y1": 21,
        "battenW": 0.075,
        "battenD": 0.05,
        "pitch": 0.12,
        "rails": [
          17.95,
          19.45,
          20.92
        ],
        "postPitch": 2.9,
        "partitions": [
          -2.2,
          3.3
        ]
      },
      "roofbox": {
        "x0": -5.9,
        "x1": -2.35,
        "z0": -0.1,
        "z1": 2.3,
        "y1": 20.7
      },
      "portal": {
        "x0": -2.5,
        "x1": 2.5,
        "surround": 0.4,
        "recess": 1,
        "doorZ": 6.05
      },
      "groundGlazing": [
        [
          -9.8,
          -7.3
        ],
        [
          4.5,
          9.8
        ]
      ],
      "groundWin": {
        "y0": 0.45,
        "y1": 2.75
      },
      "canopy": {
        "y0": 2.4,
        "y1": 2.6,
        "out": 2.5,
        "x0": -2.8,
        "x1": 2.8,
        "postX": 2.35,
        "postS": 0.15
      },
      "step": {
        "x0": -3,
        "x1": 3,
        "z1": 9.6,
        "h": 0.15
      },
      "planter": {
        "spans": [
          [
            -10.25,
            -3
          ],
          [
            3,
            10.25
          ]
        ],
        "d": 1.2,
        "h": 0.5
      },
      "sideGround": {
        "z0": 0.6,
        "z1": 5.2,
        "y0": 0.6,
        "y1": 2.7
      },
      "sign": {
        "x0": -6.6,
        "x1": -4.9,
        "y0": 1.65,
        "y1": 2.25,
        "line1": "BAAN JAI",
        "line2": "CONDO",
        "ink": "#3a4440",
        "ground": "#e6e6e4"
      },
      "bushes": [
        [
          -9.75,
          7.48,
          0.58,
          0.3,
          0.52,
          0
        ],
        [
          -9.05,
          7.6,
          0.58,
          0.32999999999999996,
          0.52,
          1
        ],
        [
          -8.35,
          7.72,
          0.58,
          0.36,
          0.52,
          2
        ],
        [
          -7.65,
          7.48,
          0.58,
          0.3,
          0.52,
          3
        ],
        [
          -6.95,
          7.6,
          0.58,
          0.32999999999999996,
          0.52,
          0
        ],
        [
          -6.25,
          7.72,
          0.58,
          0.36,
          0.52,
          1
        ],
        [
          -5.55,
          7.48,
          0.58,
          0.3,
          0.52,
          2
        ],
        [
          -4.85,
          7.6,
          0.58,
          0.32999999999999996,
          0.52,
          3
        ],
        [
          -4.15,
          7.72,
          0.58,
          0.36,
          0.52,
          0
        ],
        [
          -3.45,
          7.48,
          0.58,
          0.3,
          0.52,
          1
        ],
        [
          3.45,
          7.48,
          0.58,
          0.32999999999999996,
          0.52,
          2
        ],
        [
          4.15,
          7.72,
          0.58,
          0.36,
          0.52,
          3
        ],
        [
          4.85,
          7.6,
          0.58,
          0.3,
          0.52,
          0
        ],
        [
          5.55,
          7.48,
          0.58,
          0.32999999999999996,
          0.52,
          1
        ],
        [
          6.25,
          7.72,
          0.58,
          0.36,
          0.52,
          2
        ],
        [
          6.95,
          7.6,
          0.58,
          0.3,
          0.52,
          3
        ],
        [
          7.65,
          7.48,
          0.58,
          0.32999999999999996,
          0.52,
          0
        ],
        [
          8.35,
          7.72,
          0.58,
          0.36,
          0.52,
          1
        ],
        [
          9.05,
          7.6,
          0.58,
          0.3,
          0.52,
          2
        ],
        [
          9.75,
          7.48,
          0.58,
          0.32999999999999996,
          0.52,
          3
        ]
      ],
      "bushTints": [
        6253124,
        7305808,
        8358492,
        5661240
      ],
      "palms": [
        [
          -8.2,
          7.4,
          0.3,
          0
        ],
        [
          -6,
          7.45,
          1.4,
          1
        ],
        [
          -4,
          7.35,
          2.6,
          0
        ],
        [
          4,
          7.4,
          0.9,
          1
        ],
        [
          6.2,
          7.35,
          2,
          0
        ],
        [
          8.4,
          7.45,
          3.3,
          1
        ]
      ],
      "palmTints": [
        9083486,
        8031314
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
  // INDEXED, with shared ring vertices, so computeVertexNormals averages across the quads and the
  // surface shades smooth. The first build emitted loose triangles, and a flat-shaded soft body
  // shows every station as a crease -- a reclining figure that looked crumpled rather than draped.
  const pos: number[] = [], idx: number[] = [];
  for (let i = 0; i < stations.length; i++) {
    const [z, cx, cy, rx, ry] = stations[i];
    for (let j = 0; j < seg; j++) {
      const th = j * Math.PI * 2 / seg;
      pos.push(cx + Math.sin(th) * rx, cy + Math.cos(th) * ry, z);
    }
  }
  for (let i = 0; i < stations.length - 1; i++) {
    for (let j = 0; j < seg; j++) {
      const a = i * seg + j, b = (i + 1) * seg + j, c = (i + 1) * seg + (j + 1) % seg, d = i * seg + (j + 1) % seg;
      idx.push(a, b, c, a, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
  g.setIndex(idx);
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

export function createLowRiseCondominiumModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Low-Rise Condominium';

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


  const F = G.levels as number[], BX = G.bays as number[][], BAL = G.balcony as boolean[];
  const innerX = G.hx - G.t;                 // 9.95: inner face of the side walls
  const zFace = G.hz, zBack = G.hz - G.recess;
  const rectShape = (x0: number, y0: number, x1: number, y1: number) => {
    const sh = new THREE.Shape();
    sh.moveTo(x0, y0); sh.lineTo(x1, y0); sh.lineTo(x1, y1); sh.lineTo(x0, y1); sh.closePath();
    return sh;
  };
  const rectHole = (sh: THREE.Shape, x0: number, y0: number, x1: number, y1: number) => {
    const p = new THREE.Path();
    p.moveTo(x0, y0); p.lineTo(x1, y0); p.lineTo(x1, y1); p.lineTo(x0, y1); p.closePath();
    sh.holes.push(p);
  };
  // A plan in [x, z] pairs, as a Shape whose second axis is -z so that extrudeSlab's rotateX(-PI/2)
  // lands it at the intended world z. Used for every non-symmetric plan here.
  const planShape = (pts: number[][]) => {
    const sh = new THREE.Shape();
    sh.moveTo(pts[0][0], -pts[0][1]);
    for (let i = 1; i < pts.length; i++) sh.lineTo(pts[i][0], -pts[i][1]);
    sh.closePath();
    return sh;
  };
  const tintGeo = (g: THREE.BufferGeometry, k: number) => {
    const n = g.getAttribute('position').count;
    const col = new Float32Array(n * 3).fill(k);
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    return g;
  };

  /* ---------------------------------------------------------------- the shell
   * ONE white component: two facade extrusions with the thirty bay openings per elevation as real
   * holes 1.5 m deep, two side walls extruded in the YZ plane with the window-strip and gap holes,
   * the body between, the ground floor as a notched plan extrusion with its own front slab, the
   * portal surround, the coping ring, the roof box, the side ledges and the canopy slab. Every
   * joint is an opposed pair. */
  {
    const parts: THREE.BufferGeometry[] = [];
    const facade = (z0: number, z1: number) => {
      const sh = rectShape(-innerX, G.groundTop, innerX, G.roofY);
      for (const yb of F) for (const b of BX) rectHole(sh, b[0], yb, b[1], yb + G.holeH);
      return extrudeAlongZ(sh, z0, z1);
    };
    parts.push(facade(zBack, zFace));            // +Z
    parts.push(facade(-zFace, -zBack));          // -Z: the same grammar, unobserved (confidence 0.60)
    // side walls: shape x holds -z, rotateY(+PI/2) maps it to world z with thickness along +x
    const sideWall = (x0: number) => {
      const sh = new THREE.Shape();
      const pts = [[-zFace, G.groundTop], [zFace, G.groundTop], [zFace, G.roofY], [-zFace, G.roofY]];
      sh.moveTo(-pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length; i++) sh.lineTo(-pts[i][0], pts[i][1]);
      sh.closePath();
      const SW = G.sideWin, SG = G.sideGap;
      for (const yb of F) {
        const p = new THREE.Path();
        p.moveTo(-SW.z0, yb + SW.y0); p.lineTo(-SW.z1, yb + SW.y0); p.lineTo(-SW.z1, yb + SW.y1); p.lineTo(-SW.z0, yb + SW.y1); p.closePath();
        sh.holes.push(p);
        const q = new THREE.Path();
        q.moveTo(-SG.z0, yb); q.lineTo(-SG.z1, yb); q.lineTo(-SG.z1, yb + G.holeH); q.lineTo(-SG.z0, yb + G.holeH); q.closePath();
        sh.holes.push(q);
      }
      const g = new THREE.ExtrudeGeometry(sh, { depth: G.t, bevelEnabled: false, curveSegments: 1 });
      g.rotateY(Math.PI / 2); g.translate(x0, 0, 0); g.computeVertexNormals();
      return g;
    };
    parts.push(sideWall(-G.hx));
    parts.push(sideWall(innerX));
    // body between the facades and side walls: its +Z/-Z faces are the recess back walls, tinted
    // 0.70 linear (the plate's recess glazing surround reads ~0.78 sRGB of the lit render)
    parts.push(tintGeo(boxAt(0, (G.groundTop + G.roofY) / 2, 0, innerX * 2, G.roofY - G.groundTop, zBack * 2), 0.70));
    // ground floor: notched plan (the portal recess), inset 0.30 on -X, +X and -Z, flush on +Z
    {
      const P = G.portal, zFront = zFace - 0.4, zRear = -zFace + 0.3;
      const plan = planShape([[-innerX, zRear], [innerX, zRear], [innerX, zFront], [P.x1, zFront],
                              [P.x1, zFace - P.recess], [P.x0, zFace - P.recess], [P.x0, zFront], [-innerX, zFront]]);
      parts.push(extrudeSlab(plan, 0, G.groundTop));
      // front slab left and right of the portal surround, with the ground glazing as holes
      const GW = G.groundWin, GG = G.groundGlazing as number[][];
      const left = rectShape(-innerX, 0, P.x0 - P.surround, G.groundTop);
      rectHole(left, GG[0][0], GW.y0, GG[0][1], GW.y1);
      parts.push(extrudeAlongZ(left, zFront, zFace));
      const right = rectShape(P.x1 + P.surround, 0, innerX, G.groundTop);
      rectHole(right, GG[1][0], GW.y0, GG[1][1], GW.y1);
      parts.push(extrudeAlongZ(right, zFront, zFace));
      // portal surround: two piers and a head, 0.4 deep, flush with the front plane
      const hy = G.groundTop - P.surround;
      parts.push(boxAt(P.x0 - P.surround / 2, hy / 2, (zFront + zFace) / 2, P.surround, hy, 0.4));
      parts.push(boxAt(P.x1 + P.surround / 2, hy / 2, (zFront + zFace) / 2, P.surround, hy, 0.4));
      parts.push(boxAt(0, hy + P.surround / 2, (zFront + zFace) / 2, P.x1 - P.x0 + 2 * P.surround, P.surround, 0.4));
      // canopy slab through the portal glazing line, 2.2 m out
      const C = G.canopy;
      parts.push(boxAt((C.x0 + C.x1) / 2, (C.y0 + C.y1) / 2, zFace + C.out / 2, C.x1 - C.x0, C.y1 - C.y0, C.out));
    }
    // coping ring: 0.35 proud all round, 17.6..18.5, the parapet being its inner 0.30
    {
      const CP = G.coping;
      const ring = rectShape(-G.hx - CP.out, -G.hz - CP.out, G.hx + CP.out, G.hz + CP.out);
      rectHole(ring, -innerX, -(G.hz - G.t), innerX, G.hz - G.t);
      parts.push(extrudeSlab(ring, CP.y0, CP.y1));
    }
    // roof box (lift and stair head) on the deck inside the screen
    {
      const R = G.roofbox;
      parts.push(boxAt((R.x0 + R.x1) / 2, (G.deck.y + R.y1) / 2, (R.z0 + R.z1) / 2, R.x1 - R.x0, R.y1 - G.deck.y, R.z1 - R.z0));
    }
    // side ledges in the glazed gap between the louvre boxes, one per floor, both flanks
    {
      const SG = G.sideGap;
      for (const yb of F) for (const s of [-1, 1]) {
        const x0 = s * (G.hx - 0.02), x1 = s * (G.hx + SG.ledgeD);
        parts.push(boxAt((x0 + x1) / 2, yb + SG.ledgeH / 2, (SG.z0 + SG.z1) / 2, Math.abs(x1 - x0), SG.ledgeH, SG.z1 - SG.z0));
      }
    }
    add('shell', 'White rendered shell', mergeGeos(parts), 'white');
    colliders['shell'] = {
      shape: 'box', localCenter: [0, 10.5, 0.925], halfExtents: [10.9, 10.5, 8.275],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope including the canopy and planters.',
    };
  }

  /* ---------------------------------------------------------------- deck, planters, step */
  add('deck', 'Roof deck', boxAt(0, (G.roofY + G.deck.y) / 2, 0, innerX * 2, G.deck.y - G.roofY, (G.hz - G.t) * 2), 'deck');
  {
    const PL = G.planter, S = G.step;
    const parts: THREE.BufferGeometry[] = [];
    for (const [x0, x1] of PL.spans as number[][]) parts.push(boxAt((x0 + x1) / 2, PL.h / 2, zFace + PL.d / 2, x1 - x0, PL.h, PL.d));
    const z0 = zFace - G.portal.recess;
    parts.push(boxAt((S.x0 + S.x1) / 2, S.h / 2, (z0 + S.z1) / 2, S.x1 - S.x0, S.h, S.z1 - z0));
    add('planters', 'Planters and entrance paving', mergeGeos(parts), 'plinth');
  }

  /* ---------------------------------------------------------------- glazing: unit boxes, scaled per instance
   * glass: every tinted pane (window bays, balcony recess glazing, side strips, ground floor, portal).
   * alu: every mullion, transom, rail and jamb. balglass: the thirty balustrade panes. */
  const glassM: THREE.Matrix4[] = [], aluM: THREE.Matrix4[] = [], balM: THREE.Matrix4[] = [];
  const unit = new THREE.BoxGeometry(1, 1, 1);
  const pane = (x0: number, x1: number, y0: number, y1: number, z0: number, z1: number, list: THREE.Matrix4[]) => {
    list.push(new THREE.Matrix4().compose(new THREE.Vector3((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2), new THREE.Quaternion(),
      new THREE.Vector3(Math.abs(x1 - x0), y1 - y0, Math.abs(z1 - z0))));
  };
  const mullionW = 0.06, mullionD = 0.06;
  /* ---------------------------------------------------------------- fins and louvre boxes
   * The plate's fins are dark on the FACE and light grey on the RETURNS (crops/fin.png: median
   * #404C49 with a lit side at #A5AAA9), and that contrast is what makes them read as fins rather
   * than stripes. So each fin is a light aluminium body (an instance of the mullion unit box) with a
   * 0.05 m dark plate on its face, 0.02 wider each side so the two never share a plane. */
  {
    const FN = G.fins, LV = G.louvre, pt = 0.05;
    const parts: THREE.BufferGeometry[] = [];
    const fy = (G.groundTop + FN.y1) / 2, fh = FN.y1 - G.groundTop;
    const finZ = (s: number, x0: number, x1: number, d: number) => {
      pane(x0, x1, G.groundTop, FN.y1, s * zFace, s * (zFace + d - pt), aluM);
      parts.push(boxAt((x0 + x1) / 2, fy, s * (zFace + d - pt / 2), x1 - x0 + 0.04, fh + 0.04, pt));
    };
    for (const s of [1, -1]) {
      for (const [x0, x1] of FN.narrow as number[][]) finZ(s, x0, x1, FN.narrowD);
      for (const [x0, x1] of FN.corner as number[][]) finZ(s, x0, x1, FN.cornerD);
      for (const [x0, x1] of LV.front as number[][]) finZ(s, x0, x1, LV.d);
      // side louvre boxes on -X and +X
      const ly = (LV.y0 + FN.y1) / 2, lh = FN.y1 - LV.y0;
      for (const [z0, z1] of LV.side as number[][]) {
        pane(s * G.hx, s * (G.hx + LV.sideD - pt), LV.y0, FN.y1, z0, z1, aluM);
        parts.push(boxAt(s * (G.hx + LV.sideD - pt / 2), ly, (z0 + z1) / 2, pt, lh + 0.04, z1 - z0 + 0.04));
      }
    }
    // entrance mat on the step
    parts.push(boxAt(0, G.step.h + 0.01, zFace - 0.35, 1.2, 0.02, 0.8));
    add('fins', 'Fin and louvre face plates', mergeGeos(parts), 'fin');
  }
  /* louvre slats: one geometry, instanced across the four front boxes and four side boxes */
  {
    const LV = G.louvre, FN = G.fins;
    const mats: THREE.Matrix4[] = [];
    const yFront = (G.groundTop + FN.y1) / 2, hFront = FN.y1 - G.groundTop - 0.1;
    const ySide = (LV.y0 + FN.y1) / 2, hSide = FN.y1 - LV.y0 - 0.1;
    const slat = new THREE.BoxGeometry(LV.slatW, 1, LV.slatD);
    const q0 = new THREE.Quaternion(), q90 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
    for (const s of [1, -1]) {
      for (const [x0, x1] of LV.front as number[][]) {
        const n = Math.floor((x1 - x0 - LV.slatW) / LV.pitch);
        for (let i = 0; i <= n; i++) {
          const x = x0 + LV.slatW / 2 + 0.03 + i * LV.pitch;
          mats.push(new THREE.Matrix4().compose(new THREE.Vector3(x, yFront, s * (zFace + LV.d + LV.slatD / 2)), q0, new THREE.Vector3(1, hFront, 1)));
        }
      }
      for (const [z0, z1] of LV.side as number[][]) {
        const n = Math.floor((z1 - z0 - LV.slatW) / LV.pitch);
        for (let i = 0; i <= n; i++) {
          const z = z0 + LV.slatW / 2 + 0.03 + i * LV.pitch;
          mats.push(new THREE.Matrix4().compose(new THREE.Vector3(s * (G.hx + LV.sideD + LV.slatD / 2), ySide, z), q90, new THREE.Vector3(1, hSide, 1)));
        }
      }
    }
    addInst('louvre-slats', 'Louvre slats', slat, 'fin', mats);
  }

  for (const s of [1, -1]) {
    const face = s * zFace, sgn = s;
    for (const yb of F) for (let bi = 0; bi < BX.length; bi++) {
      const [x0, x1] = BX[bi];
      if (!BAL[bi]) {
        // grid window: pane 0.15 inside the front plane, two mullions and a transom proud of it
        const zp = face - sgn * 0.15;
        pane(x0 + 0.02, x1 - 0.02, yb + 0.02, yb + G.holeH - 0.02, zp, zp - sgn * 0.02, glassM);
        const zm0 = zp, zm1 = zp + sgn * mullionD;
        for (const f of [1 / 3, 2 / 3]) pane(x0 + (x1 - x0) * f - mullionW / 2, x0 + (x1 - x0) * f + mullionW / 2, yb + 0.02, yb + G.holeH - 0.02, zm0, zm1, aluM);
        pane(x0 + 0.02, x1 - 0.02, yb + 1.0 - mullionW / 2, yb + 1.0 + mullionW / 2, zm0, zm1, aluM);
        pane(x0 + 0.02, x1 - 0.02, yb + 0.02, yb + 0.08, zm0, zm1, aluM);
      } else {
        // balcony: frosted balustrade at the front plane with an alu top rail, sliding glazing at
        // the recess back with a centre mullion and jambs
        const zb = face - sgn * 0.10;
        pane(x0 + 0.05, x1 - 0.05, yb + 0.02, yb + 1.05, zb, zb - sgn * 0.03, balM);
        pane(x0 + 0.03, x1 - 0.03, yb + 1.05, yb + 1.10, zb + sgn * 0.02, zb - sgn * 0.05, aluM);
        const zr = face - sgn * (G.recess - 0.05);
        pane(x0 + 0.02, x1 - 0.02, yb + 0.02, yb + G.holeH - 0.02, zr, zr + sgn * 0.02, glassM);
        const zm0 = zr + sgn * 0.02, zm1 = zm0 + sgn * mullionD;
        pane((x0 + x1) / 2 - mullionW / 2, (x0 + x1) / 2 + mullionW / 2, yb + 0.02, yb + G.holeH - 0.02, zm0, zm1, aluM);
        pane(x0 + 0.02, x0 + 0.02 + mullionW, yb + 0.02, yb + G.holeH - 0.02, zm0, zm1, aluM);
        pane(x1 - 0.02 - mullionW, x1 - 0.02, yb + 0.02, yb + G.holeH - 0.02, zm0, zm1, aluM);
        pane(x0 + 0.02, x1 - 0.02, yb + 0.02, yb + 0.08, zm0, zm1, aluM);
      }
    }
  }
  // side strips on -X and +X: the narrow window per floor and the glazed gap between the louvres
  {
    const SW = G.sideWin, SG = G.sideGap;
    for (const s of [-1, 1]) for (const yb of F) {
      const xw = s * (G.hx - 0.10);
      pane(xw, xw - s * 0.02, yb + SW.y0 + 0.02, yb + SW.y1 - 0.02, SW.z0 + 0.02, SW.z1 - 0.02, glassM);
      pane(xw - s * 0.02, xw - s * 0.02 - s * 0.05, yb + (SW.y0 + SW.y1) / 2 - 0.03, yb + (SW.y0 + SW.y1) / 2 + 0.03, SW.z0 + 0.02, SW.z1 - 0.02, aluM);
      const xg = s * (G.hx - 0.25);
      pane(xg, xg - s * 0.02, yb + G.sideGap.ledgeH + 0.02, yb + G.holeH - 0.02, SG.z0 + 0.02, SG.z1 - 0.02, glassM);
      pane(xg + s * 0.01, xg + s * 0.07, yb + G.sideGap.ledgeH + 0.02, yb + G.holeH - 0.02, (SG.z0 + SG.z1) / 2 - mullionW / 2, (SG.z0 + SG.z1) / 2 + mullionW / 2, aluM);
    }
  }
  // ground floor: the two glazing runs, the portal doors, and the side windows as proud panels
  {
    const GW = G.groundWin, P = G.portal, SGd = G.sideGround;
    for (const [x0, x1] of G.groundGlazing as number[][]) {
      const zp = zFace - 0.12;
      pane(x0 + 0.02, x1 - 0.02, GW.y0 + 0.02, GW.y1 - 0.02, zp, zp - 0.02, glassM);
      const n = Math.round((x1 - x0) / 1.25);
      for (let i = 1; i < n; i++) pane(x0 + (x1 - x0) * i / n - mullionW / 2, x0 + (x1 - x0) * i / n + mullionW / 2, GW.y0 + 0.02, GW.y1 - 0.02, zp, zp + mullionD, aluM);
      pane(x0 + 0.02, x1 - 0.02, GW.y0 + 0.02, GW.y0 + 0.08, zp, zp + mullionD, aluM);
    }
    // portal: full-height glazing at the recess back, a centre pair of door leaves under the canopy line
    const hy = G.groundTop - P.surround;
    pane(P.x0 + 0.03, P.x1 - 0.03, 0.05, hy - 0.03, P.doorZ, P.doorZ + 0.02, glassM);
    for (const x of [P.x0 + 0.03, -0.9, 0, 0.9, P.x1 - 0.09]) pane(x, x + mullionW, 0.05, hy - 0.03, P.doorZ + 0.02, P.doorZ + 0.08, aluM);
    pane(P.x0 + 0.03, P.x1 - 0.03, hy - 0.09, hy - 0.03, P.doorZ + 0.02, P.doorZ + 0.08, aluM);
    pane(P.x0 + 0.03, P.x1 - 0.03, G.canopy.y0 - 0.03, G.canopy.y0 + 0.03, P.doorZ + 0.02, P.doorZ + 0.08, aluM);
    pane(-1.0, 1.0, 0.95, 1.0, P.doorZ + 0.02, P.doorZ + 0.10, aluM);
    // side ground-floor windows, proud of the inset ground wall by 0.03
    for (const s of [-1, 1]) {
      const xw = s * (innerX + 0.01);
      pane(xw, xw + s * 0.03, SGd.y0, SGd.y1, SGd.z0, SGd.z1, glassM);
      for (const z of [SGd.z0, (SGd.z0 + SGd.z1) / 2 - mullionW / 2, SGd.z1 - mullionW]) pane(xw + s * 0.03, xw + s * 0.09, SGd.y0, SGd.y1, z, z + mullionW, aluM);
      pane(xw + s * 0.03, xw + s * 0.09, SGd.y0, SGd.y0 + mullionW, SGd.z0, SGd.z1, aluM);
      pane(xw + s * 0.03, xw + s * 0.09, SGd.y1 - mullionW, SGd.y1, SGd.z0, SGd.z1, aluM);
    }
  }
  {
    const inst = addInst('glass', 'Tinted glazing', unit.clone(), 'glass', glassM);
    // The plate's panes are dark teal with pale curtain folds and a bright reflection band. One
    // 256^2 canvas on the shared glass material; mean luma ~105 and the teal ground at saturation 0.29, so no pane is read as backdrop.
    // Under Node there is no document and the pane ships in its authored flat tone.
    if (typeof document !== 'undefined') {
      const c = document.createElement('canvas');
      c.width = 256; c.height = 256;
      const ctx = c.getContext('2d')!;
      ctx.fillStyle = '#4c6b68'; ctx.fillRect(0, 0, 256, 256);
      for (let x = 0; x < 256; x += 18) { ctx.fillStyle = (x / 18) % 2 === 0 ? 'rgba(176, 188, 184, 0.30)' : 'rgba(140, 152, 148, 0.22)'; ctx.fillRect(x + 2, 8, 14, 248); }
      const gr = ctx.createLinearGradient(0, 0, 0, 256);
      gr.addColorStop(0, 'rgba(215, 226, 228, 0.42)'); gr.addColorStop(0.30, 'rgba(215, 226, 228, 0.08)'); gr.addColorStop(1, 'rgba(50, 68, 66, 0.30)');
      ctx.fillStyle = gr; ctx.fillRect(0, 0, 256, 256);
      ctx.fillStyle = 'rgba(40, 52, 50, 0.45)'; ctx.fillRect(0, 0, 256, 6);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      const gm = inst.material as THREE.MeshStandardMaterial;
      gm.map = tex; gm.color.set(0xffffff); gm.needsUpdate = true;
    }
  }
  addInst('mullions', 'Aluminium mullions, rails and jambs', unit.clone(), 'alu', aluM);
  addInst('balustrades', 'Frosted balustrade panes', unit.clone(), 'balglass', balM);

  /* ---------------------------------------------------------------- roof screen: battens + steel rails */
  {
    const S = G.screen;
    const h = S.y1 - G.deck.y;
    const batten = new THREE.BoxGeometry(S.battenW, h, S.battenD);
    const mats: THREE.Matrix4[] = [];
    const q0 = new THREE.Quaternion(), q90 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
    const yc = G.deck.y + h / 2;
    const runX = (z: number) => { for (let x = S.x0 + 0.06; x <= S.x1 - 0.06; x += S.pitch) mats.push(new THREE.Matrix4().compose(new THREE.Vector3(x, yc, z), q0, new THREE.Vector3(1, 1, 1))); };
    const runZ = (x: number) => { for (let z = S.z0 + 0.12; z <= S.z1 - 0.12; z += S.pitch) mats.push(new THREE.Matrix4().compose(new THREE.Vector3(x, yc, z), q90, new THREE.Vector3(1, 1, 1))); };
    runX(S.z1); runX(S.z0); runZ(S.x0); runZ(S.x1);
    for (const px of S.partitions as number[]) runZ(px);
    addInst('battens', 'Timber screen battens', batten, 'timber', mats);
    // steel: three rails per run, posts at the corners, partitions and every 2.9 m, the canopy
    // posts and its edge trim
    const parts: THREE.BufferGeometry[] = [];
    const rs = 0.05;
    for (const y of S.rails as number[]) {
      for (const z of [S.z0, S.z1]) parts.push(boxAt(0, y, z, S.x1 - S.x0 + rs, rs, S.battenD + 0.03));
      for (const x of [S.x0, S.x1, ...(S.partitions as number[])]) parts.push(boxAt(x, y, (S.z0 + S.z1) / 2, S.battenD + 0.03, rs, S.z1 - S.z0 - S.battenD - 0.03));
    }
    const ps = 0.08, ph = h - 0.02;
    const posts: number[][] = [];
    for (const z of [S.z0, S.z1]) for (let x = S.x0; x <= S.x1 + 0.01; x += S.postPitch) posts.push([x, z]);
    for (const x of [S.x0, S.x1, ...(S.partitions as number[])]) posts.push([x, (S.z0 + S.z1) / 2]);
    for (const [x, z] of posts) parts.push(boxAt(x, G.deck.y + ph / 2, z, ps, ph, ps));
    const C = G.canopy;
    for (const x of [-C.postX, C.postX]) parts.push(boxAt(x, (G.step.h - 0.02 + C.y0) / 2, zFace + C.out - 0.25, C.postS, C.y0 - G.step.h + 0.02, C.postS));  // sunk 0.02 into the step so no bbox face shares the mat's plane
    const ty = (C.y0 + C.y1) / 2, th = 0.08;
    parts.push(boxAt((C.x0 + C.x1) / 2, ty, zFace + C.out + 0.02, C.x1 - C.x0 + 0.08, th, 0.04));
    for (const x of [C.x0 - 0.02, C.x1 + 0.02]) parts.push(boxAt(x, ty, zFace + C.out / 2, 0.04, th, C.out));
    add('steel', 'Stainless posts, rails and canopy trim', mergeGeos(parts), 'steel');
  }

  /* ---------------------------------------------------------------- planting: bushes and palms */
  {
    const bush = new THREE.IcosahedronGeometry(1, 1);
    const mats = (G.bushes as number[][]).map(([x, z, sx, sy, sz]) =>
      new THREE.Matrix4().compose(new THREE.Vector3(x, G.planter.h + sy * 0.6, z),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), x * 1.7), new THREE.Vector3(sx, sy, sz)));
    const tints = (G.bushes as number[][]).map((b) => (G.bushTints as number[])[b[5]]);
    addInst('bushes', 'Planter shrubs', bush, 'plant', mats, tints);
    const blades: THREE.BufferGeometry[] = [];
    for (let i = 0; i < 11; i++) {
      const a = -1.15 + i * 0.23, b = new THREE.BoxGeometry(0.05, 1.25, 0.14);
      b.translate(0, 0.5, 0); b.rotateZ(a); b.rotateY(i * 0.7);
      blades.push(b);
    }
    const palm = mergeGeos(blades);
    const pm = (G.palms as number[][]).map(([x, z, r], i) => new THREE.Matrix4().compose(new THREE.Vector3(x, G.planter.h - 0.02 + i * 0.006, z),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), r), new THREE.Vector3(1, 1, 1)));
    const pt = (G.palms as number[][]).map((p) => (G.palmTints as number[])[p[3]]);
    addInst('palms', 'Planter fan palms', palm, 'plant', pm, pt);
  }

  /* ---------------------------------------------------------------- the name board */
  {
    const S = G.sign;
    const g = new THREE.BoxGeometry(S.x1 - S.x0, S.y1 - S.y0, 0.03);
    const uv = g.getAttribute('uv') as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) if (i < 16 || i > 19) uv.setXY(i, 0.01, 0.01);
    g.translate((S.x0 + S.x1) / 2, (S.y0 + S.y1) / 2, zFace + 0.015);
    const mesh = add('sign', 'Name board', g, 'sign');
    const mat = mesh.material as THREE.MeshStandardMaterial;
    if (typeof document === 'undefined') {
      mat.color.set(S.ground);
    } else {
      const c = document.createElement('canvas');
      c.width = 1024; c.height = 360;
      const ctx = c.getContext('2d')!;
      ctx.fillStyle = S.ground; ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = S.ink; ctx.textBaseline = 'middle'; ctx.textAlign = 'center';
      ctx.font = 'bold 150px Arial, Helvetica, sans-serif';
      ctx.fillText(S.line1, 512, 140);
      ctx.font = '600 84px Arial, Helvetica, sans-serif';
      ctx.fillText(S.line2, 512, 268);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex; mat.needsUpdate = true;
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
  const root = createLowRiseCondominiumModel(options);
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
