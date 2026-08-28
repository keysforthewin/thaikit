import * as THREE from 'three';

/**
 * Bangkok Apartment Block -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 15.00 x 19.00 x 12.30 m, origin base-center, +Y up.
 * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.
 *
 * This is one of thaikit's MONUMENTAL buildings, and unlike the shared retail module its form is
 * not a box: the recognisable feature is a curved or tiered profile that has to survive at the
 * distance a village skyline is read from. The shared vocabulary here is therefore the LATHE --
 * a profile revolved about +Y -- and the tiered/stepped merge, not the parameterised shopfront.
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
    "id": "bangkok-apartment-block",
    "name": "Bangkok Apartment Block",
    "exportName": "BangkokApartmentBlock",
    "envelope": "Envelope 15.00 x 19.00 x 12.30 m, origin base-center, +Y up.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
    "materials": [
      {
        "id": "wall",
        "color": 13946301,
        "roughness": 0.9,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "concrete",
        "color": 10263704,
        "roughness": 0.94,
        "metalness": 0
      },
      {
        "id": "green",
        "color": 10930352,
        "roughness": 0.55,
        "metalness": 0.1
      },
      {
        "id": "glass",
        "color": 7765102,
        "roughness": 0.15,
        "metalness": 0,
        "opacity": 0.93,
        "envMapIntensity": 1
      },
      {
        "id": "alu",
        "color": 11843250,
        "roughness": 0.45,
        "metalness": 0.3
      },
      {
        "id": "cond",
        "color": 11315360,
        "roughness": 0.6,
        "metalness": 0.15,
        "vertexColors": true
      },
      {
        "id": "tank",
        "color": 7178406,
        "roughness": 0.62,
        "metalness": 0
      },
      {
        "id": "deck",
        "color": 11906716,
        "roughness": 0.95,
        "metalness": 0
      },
      {
        "id": "frosted",
        "color": 13224127,
        "roughness": 0.5,
        "metalness": 0,
        "opacity": 0.97
      },
      {
        "id": "sign",
        "color": 16777215,
        "roughness": 0.85,
        "metalness": 0
      },
      {
        "id": "streak",
        "color": 16777215,
        "roughness": 0.9,
        "metalness": 0,
        "opacity": 0.85
      },
      {
        "id": "cloth",
        "color": 16777215,
        "roughness": 0.9,
        "metalness": 0,
        "vertexColors": true,
        "doubleSided": true
      }
    ],
    "geometry": {
      "wx": 7.46,
      "wz": 6.12,
      "t": 0.3,
      "groove": 0.03,
      "plinth": {
        "y1": 0.25
      },
      "beam": {
        "y0": 3.6,
        "y1": 4.15
      },
      "floors": [
        4.15,
        6.73,
        9.31,
        11.89,
        14.47
      ],
      "pitch": 2.58,
      "deckY": 17.05,
      "deckT": 0.07,
      "parapetY": 18.5,
      "bays": [
        -5.55,
        -1.85,
        1.85,
        5.55
      ],
      "opening": 3.1,
      "recess": 1.1,
      "hole": {
        "y0": 0.5,
        "y1": 2.48
      },
      "core": {
        "x1": 4.9,
        "z1": 0.25
      },
      "lobby": {
        "x0": -5.9,
        "x1": -2.6,
        "z0": 0.25,
        "z1": 3
      },
      "columns": {
        "s": 0.45,
        "front": [
          [
            -6.9,
            5.15
          ],
          [
            -3.75,
            5.15
          ],
          [
            0,
            5.15
          ],
          [
            3.75,
            5.15
          ],
          [
            6.9,
            5.15
          ],
          [
            6.9,
            1.5
          ],
          [
            6.9,
            -2.2
          ],
          [
            6.9,
            -4.8
          ],
          [
            -3.75,
            2.6
          ],
          [
            0,
            2.6
          ],
          [
            3.75,
            2.6
          ]
        ]
      },
      "railing": {
        "y0": 0.55,
        "y1": 1.42,
        "half": 1.5,
        "z": -0.12,
        "balusters": 13
      },
      "door": {
        "x0": -1.45,
        "x1": 0.25,
        "y0": 0.5,
        "y1": 2.4,
        "z": -1.09
      },
      "condenser": {
        "x0": 0.65,
        "x1": 1.35,
        "y0": 1.55,
        "y1": 2.1,
        "d": 0.29,
        "fanR": 0.2,
        "fanTint": 0.34
      },
      "rack": {
        "y": 2.05,
        "x0": -0.4,
        "x1": 1.2,
        "z": -0.45
      },
      "clothes": {
        "items": [
          [
            -0.25,
            0.42,
            0.5,
            0,
            -0.01
          ],
          [
            0.22,
            0.24,
            0.72,
            2,
            0.015
          ],
          [
            0.62,
            0.36,
            0.56,
            1,
            -0.02
          ],
          [
            1.02,
            0.3,
            0.4,
            3,
            0.01
          ]
        ],
        "colors": [
          3820138,
          14605524,
          7237748,
          8360880,
          8141370,
          10787448
        ],
        "on": [
          0,
          2,
          5,
          6,
          9,
          11,
          12,
          15,
          16,
          18,
          21,
          22,
          25,
          27,
          28,
          31,
          32,
          34,
          37,
          39
        ]
      },
      "strip": {
        "z0": -1.7,
        "z1": -0.05,
        "win": {
          "w": 1.4,
          "h": 1.9
        },
        "groundY": 1.85,
        "floorDy": 1.35
      },
      "lobbyDoor": {
        "z0": 0.8,
        "z1": 2.7,
        "y0": 0.3,
        "y1": 2.5
      },
      "tanks": {
        "r": 0.62,
        "h": 1.88,
        "at": [
          [
            -2.5,
            -1.95
          ],
          [
            -1.2,
            -1.95
          ],
          [
            0.1,
            -1.95
          ],
          [
            -1.85,
            -0.65
          ],
          [
            -0.55,
            -0.65
          ],
          [
            0.75,
            -0.65
          ]
        ]
      },
      "sign": {
        "x0": -0.5,
        "x1": 3.5,
        "y0": 3.65,
        "y1": 4.1,
        "text": "APARTMENT",
        "ink": "#5a5852",
        "ground": "#d4cdbd"
      },
      "grooveW": 0.08,
      "sideCols": {
        "back": [
          -5.85,
          -2.1
        ],
        "front": [
          0.2,
          5.85
        ],
        "mid": [
          -1.9,
          1.9
        ],
        "plusX": [
          [
            -5.85,
            -2.2
          ],
          [
            -1.9,
            1.9
          ],
          [
            2.2,
            5.85
          ]
        ]
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

export function createBangkokApartmentBlockModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Bangkok Apartment Block';

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


  const F = G.floors as number[], BX = G.bays as number[];
  const half = G.opening / 2;
  const innerX = G.wx - G.t;           // 7.17: inner face of the side walls
  const zFace = G.wz, zBack = G.wz - G.recess;

  /* ---------------------------------------------------------------- the shell
   * ONE cream component: two facade extrusions with the balcony recesses as real holes, an
   * L-shaped -X wall, the +X wall, the body between, the parapet runs, the ground-floor core and
   * lobby, and every panel groove. Nothing here shares a plane with anything else facing the
   * same way: facades butt the side walls' inner faces, the body butts the facades' backs, the
   * core butts the body's underside, and the grooves butt each other. */
  {
    const parts: THREE.BufferGeometry[] = [];
    // facade with holes: x across the inner width, y from yLow to the deck
    const facade = (yLow: number, z0: number, z1: number, rows: number[]) => {
      const sh = new THREE.Shape();
      sh.moveTo(-innerX, yLow); sh.lineTo(innerX, yLow); sh.lineTo(innerX, G.deckY); sh.lineTo(-innerX, G.deckY); sh.closePath();
      for (const yb of rows) for (const bx of BX) {
        const p = new THREE.Path();
        p.moveTo(bx - half, yb + G.hole.y0); p.lineTo(bx + half, yb + G.hole.y0);
        p.lineTo(bx + half, yb + G.hole.y1); p.lineTo(bx - half, yb + G.hole.y1); p.closePath();
        sh.holes.push(p);
      }
      return extrudeAlongZ(sh, z0, z1);
    };
    parts.push(facade(G.beam.y0, zBack, zFace, F));           // +Z: beam and five balcony rows
    parts.push(facade(G.plinth.y1, -zFace, -zBack, F));       // -Z: solid ground floor, five rows
    // side walls, extruded in the YZ plane. Shape x holds -z, so rotateY(+PI/2) (x' = z, z' = -x)
    // lands the wall at world z = intended z with its thickness along +x.
    const sideWall = (pts: number[][], x0: number) => {
      const sh = new THREE.Shape();
      sh.moveTo(-pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length; i++) sh.lineTo(-pts[i][0], pts[i][1]);
      sh.closePath();
      const g = new THREE.ExtrudeGeometry(sh, { depth: G.t, bevelEnabled: false, curveSegments: 1 });
      g.rotateY(Math.PI / 2); g.translate(x0, 0, 0); g.computeVertexNormals();
      return g;
    };
    // -X: solid to the plinth for the rear 6.4 m, open (the lobby colonnade) forward of z=0.25
    parts.push(sideWall([[-zFace, G.plinth.y1], [G.core.z1, G.plinth.y1], [G.core.z1, G.beam.y0],
                         [zFace, G.beam.y0], [zFace, G.parapetY], [-zFace, G.parapetY]], -G.wx));
    // +X: beam level up; the ground floor beneath is the open colonnade
    parts.push(sideWall([[-zFace, G.beam.y0], [zFace, G.beam.y0], [zFace, G.parapetY], [-zFace, G.parapetY]], innerX));
    // body between the facades, beam level to deck level
    {
      const body = boxAt(0, (G.beam.y0 + G.deckY) / 2, 0, innerX * 2, G.deckY - G.beam.y0, zBack * 2);
      const n = body.getAttribute('position').count;
      const col = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { col[i * 3] = 0.64; col[i * 3 + 1] = 0.64; col[i * 3 + 2] = 0.63; }
      body.setAttribute('color', new THREE.BufferAttribute(col, 3));
      parts.push(body);
    }
    // parapet runs over the facades, between the side walls, 0.30 thick
    const ph = G.parapetY - G.deckY;
    parts.push(boxAt(0, G.deckY + ph / 2, zFace - G.t / 2, innerX * 2, ph, G.t));
    parts.push(boxAt(0, G.deckY + ph / 2, -zFace + G.t / 2, innerX * 2, ph, G.t));
    // ground-floor core (the plain back wall of the parking) and the recessed lobby
    const C = G.core, L = G.lobby, gy = (G.plinth.y1 + G.beam.y0) / 2, gh = G.beam.y0 - G.plinth.y1;
    parts.push(boxAt((-innerX + C.x1) / 2, gy, (-zBack + C.z1) / 2, C.x1 + innerX, gh, C.z1 + zBack));
    parts.push(boxAt((L.x0 + L.x1) / 2, gy, (L.z0 + L.z1) / 2, L.x1 - L.x0, gh, L.z1 - L.z0));

    // panel grooves: an outline of four strips per panel, verticals full height and horizontals
    // butted between them, all standing G.groove proud of the wall face
    const gw = G.grooveW, gp = G.groove;
    const sidePanel = (x: number, sgn: number, z0: number, z1: number, y0: number, y1: number) => {
      const cx = x + sgn * gp / 2;
      parts.push(boxAt(cx, (y0 + y1) / 2, z0 + gw / 2, gp, y1 - y0, gw));
      parts.push(boxAt(cx, (y0 + y1) / 2, z1 - gw / 2, gp, y1 - y0, gw));
      parts.push(boxAt(cx, y0 + gw / 2, (z0 + z1) / 2, gp, gw, z1 - z0 - 2 * gw));
      parts.push(boxAt(cx, y1 - gw / 2, (z0 + z1) / 2, gp, gw, z1 - z0 - 2 * gw));
    };
    const frontPanel = (z: number, sgn: number, x0: number, x1: number, y0: number, y1: number) => {
      const cz = z + sgn * gp / 2;
      parts.push(boxAt(x0 + gw / 2, (y0 + y1) / 2, cz, gw, y1 - y0, gp));
      parts.push(boxAt(x1 - gw / 2, (y0 + y1) / 2, cz, gw, y1 - y0, gp));
      parts.push(boxAt((x0 + x1) / 2, y0 + gw / 2, cz, x1 - x0 - 2 * gw, gw, gp));
      parts.push(boxAt((x0 + x1) / 2, y1 - gw / 2, cz, x1 - x0 - 2 * gw, gw, gp));
    };
    const rows: number[][] = F.map((yb) => [yb + 0.25, yb + G.pitch - 0.25]);
    const top: number[] = [G.deckY + 0.25, G.parapetY - 0.25];
    const ground: number[] = [G.plinth.y1 + 0.25, G.beam.y0 - 0.25];
    const SC = G.sideCols;
    for (const r of [...rows, top]) { sidePanel(-G.wx, -1, SC.back[0], SC.back[1], r[0], r[1]); sidePanel(-G.wx, -1, SC.front[0], SC.front[1], r[0], r[1]); }
    sidePanel(-G.wx, -1, SC.back[0], SC.back[1], ground[0], ground[1]);
    for (const r of [...rows, top]) for (const c of SC.plusX as number[][]) sidePanel(G.wx, 1, c[0], c[1], r[0], r[1]);
    for (const bx of BX) {
      frontPanel(zFace, 1, bx - half, bx + half, top[0], top[1]);
      frontPanel(-zFace, -1, bx - half, bx + half, top[0], top[1]);
      frontPanel(-zFace, -1, bx - half, bx + half, ground[0], ground[1]);
    }
    add('shell', 'Rendered shell', mergeGeos(parts), 'wall');
    colliders['shell'] = {
      shape: 'box', localCenter: [0, 9.5, 0], halfExtents: [7.5, 9.5, 6.15],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope.',
    };
  }

  /* ---------------------------------------------------------------- plinth and roof deck */
  add('plinth', 'Plinth and parking slab', boxAt(0, G.plinth.y1 / 2, 0, G.wx * 2 + 2 * G.groove, G.plinth.y1, G.wz * 2 + 2 * G.groove), 'concrete');
  add('deck', 'Roof deck', boxAt(0, G.deckY + G.deckT / 2, 0, innerX * 2, G.deckT, (zFace - G.t) * 2), 'deck');

  /* ---------------------------------------------------------------- columns: one geometry, 11 instances */
  {
    const CL = G.columns, ch = G.beam.y0 - G.plinth.y1 + 0.01;
    addInst('columns', 'Ground-floor columns', new THREE.BoxGeometry(CL.s, ch, CL.s), 'concrete',
      (CL.front as number[][]).map(([x, z]) => new THREE.Matrix4().setPosition(x, G.plinth.y1 - 0.01 + ch / 2, z)));
  }

  /* ---------------------------------------------------------------- the balcony module, x40
   * Local frame: origin at the bay centre on the facade plane at the floor's slab level, +Z out
   * of the recess. Rear instances are the same module yawed a half turn. */
  const placements: THREE.Matrix4[] = [];
  const flags: boolean[] = [];
  {
    const on = new Set(G.clothes.on as number[]);
    let k = 0;
    for (let fi = 0; fi < F.length; fi++) for (const elev of [0, 1]) for (let bi = 0; bi < BX.length; bi++) {
      const yb = F[fi];
      const m = new THREE.Matrix4().compose(
        new THREE.Vector3(BX[bi], yb, elev === 0 ? zFace : -zFace),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), elev === 0 ? 0 : Math.PI),
        new THREE.Vector3(1, 1, 1));
      placements.push(m); flags.push(on.has(k)); k++;
    }
  }
  {
    const R = G.railing;
    const parts: THREE.BufferGeometry[] = [];
    const rh = R.y1 - R.y0;
    parts.push(boxAt(0, R.y1, R.z, R.half * 2, 0.05, 0.05));
    parts.push(boxAt(0, R.y0, R.z, R.half * 2 - 0.10, 0.04, 0.04));
    for (const s of [-1, 1]) parts.push(boxAt(s * (R.half - 0.025), R.y0 + rh / 2, R.z, 0.05, rh + 0.05, 0.05));
    for (let i = 1; i <= R.balusters; i++) {
      const x = -R.half + (R.half * 2) * i / (R.balusters + 1);
      parts.push(boxAt(x, R.y0 + rh / 2, R.z, 0.025, rh - 0.04, 0.025));
    }
    addInst('railings', 'Balcony railings', mergeGeos(parts), 'green', placements);
  }
  {
    const D = G.door, CD = G.condenser, RK = G.rack;
    const parts: THREE.BufferGeometry[] = [];
    const fz = D.z + 0.025, fd = 0.05;
    parts.push(boxAt(D.x0 + 0.03, (D.y0 + D.y1) / 2, fz, 0.06, D.y1 - D.y0, fd));
    parts.push(boxAt(D.x1 - 0.03, (D.y0 + D.y1) / 2, fz, 0.06, D.y1 - D.y0, fd));
    parts.push(boxAt((D.x0 + D.x1) / 2, D.y1 - 0.03, fz, D.x1 - D.x0 - 0.12, 0.06, fd));
    parts.push(boxAt((D.x0 + D.x1) / 2, D.y0 + 0.04, fz, D.x1 - D.x0 - 0.12, 0.08, fd));
    parts.push(boxAt((D.x0 + D.x1) / 2, (D.y0 + D.y1) / 2, fz, 0.05, D.y1 - D.y0 - 0.14, fd - 0.01));
    // condenser refrigerant pipe down the wall, and the laundry rail with its two wall brackets
    parts.push(cylAt(CD.x1 - 0.06, (D.y0 + CD.y0) / 2, D.z + 0.03, 0.03, 0.03, CD.y0 - D.y0, 8));
    parts.push(boxAt((RK.x0 + RK.x1) / 2, RK.y, RK.z, RK.x1 - RK.x0, 0.03, 0.03));
    for (const x of [RK.x0 + 0.05, RK.x1 - 0.05]) parts.push(boxAt(x, RK.y + 0.06, (RK.z + D.z) / 2, 0.03, 0.03, D.z - RK.z > 0 ? D.z - RK.z : RK.z - D.z));
    addInst('door-frames', 'Sliding-door frames, pipes and laundry rails', mergeGeos(parts), 'alu', placements);
    addInst('door-panes', 'Sliding-door panes',
      boxAt((D.x0 + D.x1) / 2, (D.y0 + D.y1) / 2, D.z + 0.015, D.x1 - D.x0 - 0.10, D.y1 - D.y0 - 0.12, 0.02), 'glass', placements);
    // The plate's panes are dark glass with pale curtain folds behind the left two-thirds. One
    // 256^2 canvas on the shared glass material (the lobby door takes it too): dark #5F665C ground,
    // alternating pale curtain stripes. Mean luma ~150, so 40 recessed panes never read as holes.
    // Under Node there is no document and the pane ships in its measured flat tone.
    if (typeof document !== 'undefined') {
      const c = document.createElement('canvas');
      c.width = 256; c.height = 256;
      const ctx = c.getContext('2d')!;
      ctx.fillStyle = '#5f665c'; ctx.fillRect(0, 0, 256, 256);
      for (let x = 0; x < 168; x += 14) { ctx.fillStyle = (x / 14) % 2 === 0 ? 'rgba(200, 199, 185, 0.78)' : 'rgba(168, 168, 156, 0.70)'; ctx.fillRect(x, 6, 14, 250); }
      ctx.fillStyle = 'rgba(120, 128, 118, 0.55)'; ctx.fillRect(168, 0, 88, 256);
      ctx.fillStyle = 'rgba(30, 34, 30, 0.35)'; ctx.fillRect(0, 0, 256, 6);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      const gm = materials['glass'];
      gm.map = tex; gm.color.set(0xffffff); gm.needsUpdate = true;
    }
  }
  {
    const CD = G.condenser;
    const body = boxAt((CD.x0 + CD.x1) / 2, (CD.y0 + CD.y1) / 2, G.door.z + 0.01 + CD.d / 2, CD.x1 - CD.x0, CD.y1 - CD.y0, CD.d);
    const fan = new THREE.CylinderGeometry(CD.fanR, CD.fanR, 0.02, 20);
    fan.rotateX(Math.PI / 2);
    fan.translate((CD.x0 + CD.x1) / 2 - 0.05, (CD.y0 + CD.y1) / 2, G.door.z + CD.d + 0.01);
    // the grille: a per-vertex multiplier in LINEAR space, 0.34 ~ a 0.61 sRGB ratio, so it renders
    // near luma 80 side-lit rather than the measured #3A3830 that the hole gate would flag
    const fc = new Float32Array(fan.getAttribute('position').count * 3).fill(CD.fanTint);
    fan.setAttribute('color', new THREE.BufferAttribute(fc, 3));
    const bc = new Float32Array(body.getAttribute('position').count * 3).fill(1);
    body.setAttribute('color', new THREE.BufferAttribute(bc, 3));
    addInst('condensers', 'Air-conditioning condensers', mergeGeos([body, fan]), 'cond', placements);
  }
  {
    const CL = G.clothes, RK = G.rack;
    const parts: THREE.BufferGeometry[] = [];
    const cols = CL.colors as number[];
    (CL.items as number[][]).forEach(([x, w, h, ci, dz]) => {
      const g = boxAt(x, RK.y - 0.02 - h / 2, RK.z + dz, w, h, 0.03);
      const c = new THREE.Color(cols[ci % cols.length]);
      const arr = new Float32Array(g.getAttribute('position').count * 3);
      for (let v = 0; v < arr.length; v += 3) { arr[v] = c.r; arr[v + 1] = c.g; arr[v + 2] = c.b; }
      g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
      parts.push(g);
    });
    const mats = placements.filter((_, i) => flags[i]);
    // per-instance tint rotates the palette by index so no two racks read identical
    const tints = mats.map((_, i) => [0xffffff, 0xd8dce8, 0xe8d8d0, 0xd0d8d0, 0xc8c8d8][i % 5]);
    addInst('laundry', 'Hanging laundry', mergeGeos(parts), 'cloth', mats, tints);
  }

  {
    const q = new THREE.PlaneGeometry(G.opening - 0.06, 0.62);
    q.translate(0, 0.19, 0.006);
    const tints = placements.map((_, i) => [0xffffff, 0xbdbdbd, 0xe0e0e0, 0x9f9f9f, 0xd0d0d0][(i * 7) % 5]);
    const inst = addInst('streaks', 'Rain-wash streaks', q, 'streak', placements, tints);
    const sm = inst.material as THREE.MeshStandardMaterial;
    sm.depthWrite = false; sm.polygonOffset = true; sm.polygonOffsetFactor = -1;
    if (typeof document === 'undefined') {
      sm.opacity = 0;
    } else {
      const c = document.createElement('canvas');
      c.width = 512; c.height = 96;
      const ctx = c.getContext('2d')!;
      ctx.clearRect(0, 0, c.width, c.height);
      // seeded LCG so the streak layout is byte-identical on every build
      let seed = 4242; const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
      // the plate's streaks hang from the railing post bases and the slab ends -- a few per bay,
      // faint, not a fringe: two clusters at the ends plus three loose ones
      const anchors = [18, 40, 470, 494, 120 + rnd() * 80, 220 + rnd() * 80, 330 + rnd() * 80];
      for (let i = 0; i < anchors.length; i++) {
        const x = anchors[i] + (rnd() - 0.5) * 10, w = 3 + rnd() * 6, a = 0.10 + rnd() * 0.20, len = 30 + rnd() * 60;
        const grad = ctx.createLinearGradient(0, 0, 0, len);
        grad.addColorStop(0, 'rgba(90, 90, 85, ' + a.toFixed(2) + ')');
        grad.addColorStop(1, 'rgba(90, 90, 85, 0)');
        ctx.fillStyle = grad; ctx.fillRect(x, 0, w, len);
      }
      // a thin wash right under the railing line
      const g2 = ctx.createLinearGradient(0, 0, 0, 10);
      g2.addColorStop(0, 'rgba(90, 90, 85, 0.16)'); g2.addColorStop(1, 'rgba(90, 90, 85, 0)');
      ctx.fillStyle = g2; ctx.fillRect(0, 0, c.width, 18);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      sm.map = tex; sm.needsUpdate = true;
    }
  }

  /* ---------------------------------------------------------------- stairwell windows, x6 */
  {
    const S = G.strip, W = S.win;
    const zc = (S.z0 + S.z1) / 2;
    const ys: number[] = [S.groundY, ...F.map((yb) => yb + S.floorDy)];
    const x = -G.wx;
    const frame: THREE.BufferGeometry[] = [];
    const fd = 0.06, fx = x - 0.01;
    frame.push(boxAt(fx, 0, -W.w / 2 + 0.03, fd, W.h, 0.06));
    frame.push(boxAt(fx, 0, W.w / 2 - 0.03, fd, W.h, 0.06));
    frame.push(boxAt(fx, W.h / 2 - 0.03, 0, fd, 0.06, W.w - 0.12));
    frame.push(boxAt(fx, -W.h / 2 + 0.03, 0, fd, 0.06, W.w - 0.12));
    frame.push(boxAt(fx, 0, 0, fd - 0.01, W.h - 0.12, 0.05));
    for (const f of [-1 / 6, 1 / 6]) frame.push(boxAt(fx, f * W.h, 0, fd - 0.01, 0.05, W.w - 0.12));
    const at = ys.map((y) => new THREE.Matrix4().setPosition(0, y, zc));
    addInst('stair-frames', 'Stairwell window frames', mergeGeos(frame), 'alu', at);
    addInst('stair-panes', 'Stairwell frosted panes', boxAt(x + 0.005, 0, 0, 0.05, W.h - 0.10, W.w - 0.10), 'frosted', at);
  }

  /* ---------------------------------------------------------------- lobby door on the -X face of the lobby */
  {
    const L = G.lobby, D = G.lobbyDoor;
    const x = L.x0, zc = (D.z0 + D.z1) / 2, yc = (D.y0 + D.y1) / 2, w = D.z1 - D.z0, h = D.y1 - D.y0;
    const fx = x - 0.025, fd = 0.05;
    add('lobby-frame', 'Lobby door frame', mergeGeos([
      boxAt(fx, yc, D.z0 + 0.03, fd, h, 0.06), boxAt(fx, yc, D.z1 - 0.03, fd, h, 0.06),
      boxAt(fx, D.y1 - 0.03, zc, fd, 0.06, w - 0.12), boxAt(fx, yc, zc, fd - 0.01, h - 0.06, 0.05),
    ]), 'alu');
    add('lobby-pane', 'Lobby door glass', boxAt(x - 0.015, yc - 0.02, zc, 0.02, h - 0.10, w - 0.10), 'glass');
  }

  /* ---------------------------------------------------------------- water tanks, x6 */
  {
    const T = G.tanks, r = T.r;
    const prof: number[][] = [[0, 0], [r * 0.82, 0], [r, 0.10]];
    // four moulded hoops up the body, then a shouldered dome and a screw cap
    for (let i = 0; i < 4; i++) { const y = 0.30 + i * 0.36; prof.push([r, y], [r * 0.95, y + 0.06], [r * 0.95, y + 0.14], [r, y + 0.20]); }
    prof.push([r, 1.50], [r * 0.90, 1.66], [r * 0.62, 1.78], [r * 0.30, 1.83], [r * 0.30, T.h], [0, T.h]);
    const g = lathe(prof, 20);
    addInst('tanks', 'Rooftop water tanks', g, 'tank',
      (T.at as number[][]).map(([x, z]) => new THREE.Matrix4().setPosition(x, G.deckY + G.deckT, z)));
  }

  /* ---------------------------------------------------------------- the name board
   * A thin board proud of the beam, its +Z face carrying a canvas; every other face samples a
   * plain corner of the same canvas. Under Node there is no document, so the board ships in the
   * beam's own cream and the runtime probes see a plain box. */
  {
    const S = G.sign;
    const g = new THREE.BoxGeometry(S.x1 - S.x0, S.y1 - S.y0, 0.02);
    const uv = g.getAttribute('uv') as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) if (i < 16 || i > 19) uv.setXY(i, 0.01, 0.01);
    g.translate((S.x0 + S.x1) / 2, (S.y0 + S.y1) / 2, zFace + 0.01);
    const mesh = add('sign', 'Name board', g, 'sign');
    const mat = mesh.material as THREE.MeshStandardMaterial;
    if (typeof document === 'undefined') {
      mat.color.set(S.ground);
    } else {
      const c = document.createElement('canvas');
      c.width = 1024; c.height = 116;
      const ctx = c.getContext('2d')!;
      ctx.fillStyle = S.ground; ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = S.ink;
      ctx.font = 'bold 84px Arial, Helvetica, sans-serif';
      ctx.textBaseline = 'middle'; ctx.textAlign = 'center';
      ctx.fillText(S.text, c.width * 0.5, c.height * 0.54);
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
  const root = createBangkokApartmentBlockModel(options);
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
