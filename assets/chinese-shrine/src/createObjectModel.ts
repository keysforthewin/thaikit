import * as THREE from 'three';

/**
 * Chinese Shrine -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 8.70 x 9.20 x 12.00 m, origin base-center, +Y up, long axis on Z, open front +X.
 * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=32 unique geometries.
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
    "id": "chinese-shrine",
    "name": "Chinese Shrine",
    "exportName": "ChineseShrine",
    "envelope": "Envelope 8.70 x 9.20 x 12.00 m, origin base-center, +Y up, long axis on Z, open front +X.\n * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=32 unique geometries.",
    "materials": [
      {
        "id": "pale",
        "color": 9208696,
        "roughness": 0.92,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "red",
        "color": 6169116,
        "roughness": 0.74,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "gold",
        "color": 10121288,
        "roughness": 0.38,
        "metalness": 0.35,
        "envMapIntensity": 1.2
      },
      {
        "id": "green",
        "color": 5204822,
        "roughness": 0.55,
        "metalness": 0
      },
      {
        "id": "eave",
        "color": 5204822,
        "roughness": 0.58,
        "metalness": 0
      },
      {
        "id": "dark",
        "color": 4531488,
        "roughness": 0.95,
        "metalness": 0
      },
      {
        "id": "coil",
        "color": 7629410,
        "roughness": 0.93,
        "metalness": 0
      }
    ],
    "geometry": {
      "H": 9.2,
      "plinth": {
        "top": 0.55,
        "xF": 3.68,
        "xB": -2.88,
        "hz": 5.06,
        "step": 0.32
      },
      "wall": {
        "y1": 4.85,
        "xF": 3.52,
        "xB": -2.76,
        "hz": 5.01,
        "thick": 0.37,
        "doorWallX": -0.3
      },
      "beam": {
        "y0": 4.78,
        "y1": 5.45,
        "thick": 0.45,
        "proud": 0.25
      },
      "column": {
        "r": 0.28,
        "y0": 0.85,
        "y1": 4.8,
        "baseR": 0.42,
        "baseH": 0.3,
        "z": [
          -4.3,
          -2.48,
          2.48,
          4.3
        ],
        "xFront": 3.2,
        "xInner": 0.35
      },
      "dragon": {
        "z": [
          -2.48,
          2.48
        ],
        "x": 3.2,
        "R": 0.41,
        "r": 0.1,
        "turns": 2.4,
        "y0": 1.15,
        "y1": 4.25,
        "stations": 64
      },
      "doors": {
        "central": [
          -1.2,
          1.2,
          3.6
        ],
        "side": [
          [
            -3.95,
            -2.8,
            3.4
          ],
          [
            2.8,
            3.95,
            3.4
          ]
        ],
        "recess": 0.26
      },
      "roof": {
        "yE": 5.66,
        "yR": 7.73,
        "hPed": 0.69,
        "dX0": 4.14,
        "dZ0": 5.93,
        "dZPed": 4.09,
        "hipExp": 1.3,
        "lift": 0.7,
        "liftT": 0.3,
        "push": 0.06,
        "fascia": 0.23,
        "perSide": 8,
        "profile": [
          [
            0,
            1
          ],
          [
            0.058,
            0.913
          ],
          [
            0.116,
            0.831
          ],
          [
            0.169,
            0.74
          ],
          [
            0.227,
            0.653
          ],
          [
            0.284,
            0.587
          ],
          [
            0.342,
            0.531
          ],
          [
            0.4,
            0.476
          ],
          [
            0.453,
            0.424
          ],
          [
            0.511,
            0.384
          ],
          [
            0.569,
            0.333
          ],
          [
            0.627,
            0.284
          ],
          [
            0.684,
            0.242
          ],
          [
            0.738,
            0.189
          ],
          [
            0.796,
            0.149
          ],
          [
            0.853,
            0.087
          ],
          [
            0.911,
            0.055
          ],
          [
            0.969,
            0.025
          ],
          [
            1,
            0
          ]
        ],
        "t": [
          0,
          0.058,
          0.116,
          0.169,
          0.227,
          0.284,
          0.333,
          0.4,
          0.453,
          0.511,
          0.569,
          0.627,
          0.684,
          0.738,
          0.796,
          0.853,
          0.911,
          0.969,
          1
        ]
      },
      "ridge": {
        "halfZ": 3.96,
        "w": 0.4,
        "y0": 7.65,
        "y1": 8.19
      },
      "coils": {
        "count": 10,
        "rTop": 0.07,
        "rBot": 0.42,
        "h": 0.75,
        "x": 2.2,
        "z0": -3.95,
        "z1": 3.95
      },
      "censer": {
        "x": 1.7,
        "z": 0
      },
      "wear": {
        "size": 512,
        "roof": {
          "tile": 2,
          "pitch": 0.25,
          "course": 0.34,
          "valley": 0.64,
          "crest": 1.12,
          "bump": 0.07,
          "moss": [
            0.8,
            0.86,
            0.78
          ],
          "grime": [
            0.72,
            0.72,
            0.7
          ]
        },
        "eave": {
          "pitch": 0.25,
          "capR": 0.095,
          "field": 0.92,
          "capRim": 0.55,
          "capFace": 1.08,
          "capCore": 0.78,
          "drip": 0.8,
          "bump": 0.05
        },
        "red": {
          "tile": 2,
          "bump": 0.03,
          "soot": [
            0.42,
            0.36,
            0.34
          ],
          "wash": [
            0.62,
            0.55,
            0.52
          ],
          "grain": [
            0.55,
            0.45,
            0.42
          ]
        },
        "stone": {
          "tile": 2,
          "bump": 0.03,
          "mottle": [
            0.84,
            0.84,
            0.86
          ],
          "stain": [
            0.78,
            0.66,
            0.5
          ],
          "grime": [
            0.6,
            0.58,
            0.55
          ],
          "grain": [
            0.7,
            0.7,
            0.72
          ]
        },
        "coil": {
          "groove": 0.66,
          "grooves": 12,
          "bump": 0.08
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

export function createChineseShrineModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Chinese Shrine';

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


  /** Metre-scaled planar UVs by dominant normal, so a post-construction tile reads at the same
   *  scale on every face of a merged component. Works on indexed and non-indexed geometry. */
  function projUv(geo: THREE.BufferGeometry, tile: number): void {
    const p = geo.getAttribute('position'), n = geo.getAttribute('normal');
    const out = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      const nx = n.getX(i), ny = n.getY(i), nz = n.getZ(i);
      const horiz = Math.sqrt(nx * nx + nz * nz);
      let u: number, v: number;
      if (horiz < 0.2) { u = p.getX(i); v = p.getZ(i); }
      else { u = Math.abs(nx) >= Math.abs(nz) ? p.getZ(i) : p.getX(i); v = p.getY(i); }
      out[i * 2] = u / tile; out[i * 2 + 1] = v / tile;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(out, 2));
  }
  const W = G.wear;
  /** The long-slope profile: horizontal distance from the ridge as a fraction of the eave
   *  distance, at fraction t of the rise, linearly interpolated from the proxy scan table. */
  function profileAt(t: number): number {
    const P = G.roof.profile as number[][];
    if (t <= 0) return 1; if (t >= 1) return 0;
    for (let i = 1; i < P.length; i++) if (t <= P[i][0]) {
      const f = (t - P[i - 1][0]) / (P[i][0] - P[i - 1][0]);
      return P[i - 1][1] + (P[i][1] - P[i - 1][1]) * f;
    }
    return 0;
  }
  /** A curling horn: n box segments along a path whose heading turns linearly from phi0 to phi1
   *  (radians from +x, in the x-y plane, starting at the origin), tapering from w0 to w1 in the
   *  plane and ACROSS thick out of it. The preamble's curledHorn samples a sine and comes out a
   *  near-straight spike; a ridge end that sweeps up and curls back over needs the heading to pass
   *  90 degrees, which this does. */
  function spiralHorn(len: number, phi0: number, phi1: number, w0: number, w1: number, across: number, n: number): THREE.BufferGeometry {
    const segs: THREE.BufferGeometry[] = [];
    let x = 0, y = 0;
    const L = len / n;
    for (let j = 0; j < n; j++) {
      const phi = phi0 + (phi1 - phi0) * (j + 0.5) / n;
      const w = w0 + (w1 - w0) * (j + 0.5) / n;
      const g = new THREE.BoxGeometry(w, L + w * 0.35, across);
      g.rotateZ(phi - Math.PI / 2);
      g.translate(x + Math.cos(phi) * L / 2, y + Math.sin(phi) * L / 2, 0);
      segs.push(g);
      x += Math.cos(phi) * L; y += Math.sin(phi) * L;
    }
    return mergeGeos(segs);
  }

  /* ---------------------------------------------------------------- stone plinth, quoins, censer
   * One pale stone: the two-step slab, the four wall-corner quoins the plate shows at every corner,
   * and the tripod censer standing on the porch floor. ONE component and ONE draw call. */
  {
    const P = G.plinth, C = G.censer, Wl = G.wall;
    const parts: THREE.BufferGeometry[] = [
      boxAt((P.xF + P.xB) / 2, P.step / 2, 0, P.xF - P.xB + 0.12, P.step, (P.hz + 0.06) * 2),
      boxAt((P.xF + P.xB) / 2, (P.step + P.top) / 2, 0, P.xF - P.xB, P.top - P.step, P.hz * 2),
    ];
    // Quoins: stone blocks on the four wall corners, 25 mm proud of both wall faces.
    for (const x of [Wl.xF - 0.21 + 0.025, Wl.xB + 0.21 - 0.025]) for (const zs of [-1, 1]) {
      parts.push(boxAt(x, P.top + 0.48, zs * (Wl.hz - 0.21 + 0.025), 0.42, 0.96, 0.42));
    }
    // Tripod censer: bowl profile, two ears, three legs, a fistful of incense sticks.
    const bowl = lathe([[0.20, 0.36], [0.48, 0.48], [0.60, 0.86], [0.55, 1.12], [0.62, 1.22], [0.62, 1.34],
                        [0.52, 1.34], [0.52, 1.26], [0.0, 1.26]], 18, P.top);
    bowl.translate(C.x, 0, C.z);
    parts.push(bowl);
    for (const zs of [-1, 1]) parts.push(boxAt(C.x, P.top + 1.42, C.z + zs * 0.53, 0.12, 0.26, 0.14));
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + 0.5;
      parts.push(boxAt(C.x + Math.sin(a) * 0.36, P.top + 0.20, C.z + Math.cos(a) * 0.36, 0.12, 0.40, 0.12));
    }
    for (let i = 0; i < 7; i++) {
      const a = i * 1.3;
      parts.push(cylAt(C.x + Math.sin(a) * 0.15, P.top + 1.55, C.z + Math.cos(a) * 0.15, 0.012, 0.012, 0.60, 5));
    }
    const geo = mergeGeos(parts);
    projUv(geo, W.stone.tile);
    tintByHeight(geo, 0, P.top, [0.84, 0.82, 0.78]);
    add('plinth', 'Stone plinth, quoins and censer', geo, 'pale');
    colliders['plinth'] = {
      shape: 'box', localCenter: [0, 4.6, 0], halfExtents: [4.35, 4.6, 6.0],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level '
           + 'builder collides with the shrine, not with its individual columns.',
    };
  }

  /* ---------------------------------------------------------------- red lacquer body
   * Hall block, door wall with its openings, the two side walls running to the FRONT, the closed
   * central door pair, and the two vertical pediments of the upper gable. All red lacquer, one
   * merge, one draw call. The shrine is an exterior shell: the hall block is solid and the porch
   * is the only "interior" -- a 3.1 m deep colonnade in front of the door wall. */
  {
    const Wl = G.wall, P = G.plinth, D = G.doors, R = G.roof;
    // Walls start 20 mm INSIDE the plinth slab, so their bottom faces are buried rather than
    // lying in the plinth-top plane with the drum bases and the recess panels (check-coplanar
    // compares bounding-box faces, and three families of bottoms at y=0.55 were 17 pairs).
    const y0 = P.top - 0.02, y1 = Wl.y1, hh = y1 - y0;
    const dwx = Wl.doorWallX;                     // door wall spans dwx..0
    const parts: THREE.BufferGeometry[] = [
      boxAt((Wl.xB + dwx) / 2, y0 + hh / 2, 0, dwx - Wl.xB, hh, Wl.hz * 2),           // hall block
    ];
    // Side walls x 0..xF, |z| hz-thick..hz: the colonnade sits INSIDE the wall envelope.
    for (const zs of [-1, 1]) parts.push(boxAt(Wl.xF / 2, y0 + hh / 2, zs * (Wl.hz - Wl.thick / 2), Wl.xF, hh, Wl.thick));
    // Door wall: solid piers between the openings, lintel band over them.
    const openings = [[D.side[0][0], D.side[0][1], D.side[0][2]], [D.central[0], D.central[1], D.central[2]], [D.side[1][0], D.side[1][1], D.side[1][2]]];
    let zc = -Wl.hz;
    for (const [za, zb, top] of openings) {
      parts.push(boxAt(dwx / 2, y0 + hh / 2, (zc + za) / 2, -dwx, hh, za - zc));       // pier
      parts.push(boxAt(dwx / 2, (y0 + top + y1) / 2, (za + zb) / 2, -dwx, y1 - (y0 + top), zb - za)); // lintel band
      zc = zb;
    }
    parts.push(boxAt(dwx / 2, y0 + hh / 2, (zc + Wl.hz) / 2, -dwx, hh, Wl.hz - zc));
    // Central door leaves, recessed into the opening, 10 mm in front of the dark backing panel.
    const leafX = dwx + 0.03 + 0.04;
    for (const zs of [-1, 1]) {
      const zi = zs * 0.02, zo = zs * (D.central[1] - 0.03);
      const ly0 = P.top + 0.01, lh = D.central[2] - 0.14;      // leaves 10 mm clear of the floor
      parts.push(boxAt(leafX, ly0 + lh / 2, (zi + zo) / 2, 0.06, lh, Math.abs(zo - zi)));
      // Raised panel on each leaf.
      parts.push(boxAt(leafX + 0.045, ly0 + 2.05, (zi + zo) / 2, 0.03, 2.4, Math.abs(zo - zi) - 0.30));
    }
    // Pediments: the vertical gable triangles at z = +-(dZPed - 0.10..0.0), between the two long
    // slopes above the hip skirt. 100 mm thick prism, its outer face 20 mm inside the slope's end
    // edge so no bbox plane of the roof coincides with it.
    const dXPed = profileAt(R.hPed / (R.yR - R.yE)) * R.dX0;
    for (const zs of [-1, 1]) {
      const sh = new THREE.Shape();
      sh.moveTo(-dXPed + 0.02, R.yE + R.hPed - 0.04); sh.lineTo(dXPed - 0.02, R.yE + R.hPed - 0.04); sh.lineTo(0, R.yR - 0.02); sh.closePath();
      const g = extrudeAlongZ(sh, zs > 0 ? R.dZPed - 0.12 : -R.dZPed + 0.02, zs > 0 ? R.dZPed - 0.02 : -R.dZPed + 0.12);
      parts.push(g);
    }
    const geo = mergeGeos(parts);
    projUv(geo, W.red.tile);
    // Soot: the plate's lacquer is darkest under the eaves beam and clean at the plinth -- per
    // vertex multiplier 0.70 at the wall head fading to 1.0 by 2.2 m. Pediments carry it too.
    {
      const p = geo.getAttribute('position');
      const col = new Float32Array(p.count * 3);
      for (let i = 0; i < p.count; i++) {
        const t = Math.min(1, Math.max(0, (p.getY(i) - 2.0) / (y1 - 2.0)));
        const m = 1 - 0.38 * t * t;
        col[i * 3] = m; col[i * 3 + 1] = m * 0.97; col[i * 3 + 2] = m * 0.97;
      }
      geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    }
    add('body', 'Shrine body and pediments', geo, 'red');
  }

  /* ---------------------------------------------------------------- the dark: beam band, brackets, recesses, ceiling
   * Everything the plate shows near-black: the sooted eaves beam running round all four walls,
   * the bracket blocks over the front columns, the backing of the three door-wall openings, and
   * the porch ceiling. One warm dark material, one merge, one draw call. */
  {
    const Wl = G.wall, B = G.beam, P = G.plinth, D = G.doors, C = G.column, R = G.roof;
    const ox = Wl.xF + B.proud, bx0 = Wl.xB - B.proud, oz = Wl.hz + B.proud;
    const parts: THREE.BufferGeometry[] = [
      boxAt(ox - B.thick / 2, (B.y0 + B.y1) / 2, 0, B.thick, B.y1 - B.y0, oz * 2),          // front beam
      boxAt(bx0 + 0.15, (B.y0 + B.y1) / 2, 0, 0.30, B.y1 - B.y0, oz * 2),                   // back beam
    ];
    for (const zs of [-1, 1]) parts.push(boxAt((ox - B.thick + bx0 + 0.30) / 2, (B.y0 + B.y1) / 2, zs * (oz - B.thick / 2), ox - B.thick - bx0 - 0.30, B.y1 - B.y0, B.thick));
    // Bracket (dougong) blocks on the front beam face over each front column: two tiers.
    for (const z of C.z as number[]) {
      parts.push(boxAt(ox + 0.11, B.y0 + 0.22, z, 0.22, 0.26, 0.62));
      parts.push(boxAt(ox + 0.16, B.y0 + 0.50, z, 0.32, 0.22, 0.90));
    }
    // Backing panels of the door-wall openings: 20 mm proud of the hall block face.
    const bx = Wl.doorWallX;
    for (const [za, zb, top] of [D.side[0], D.central, D.side[1]] as number[][]) {
      parts.push(boxAt(bx + 0.01, P.top + 0.015 + (top - 0.015) / 2, (za + zb) / 2, 0.02, top - 0.015, zb - za));   // 15 mm clear of the floor
    }
    // Porch ceiling: a dark panel 10 mm under the roof soffit over the colonnade.
    const soffitY = R.yE - R.fascia - 0.03;
    parts.push(boxAt(Wl.xF / 2 - 0.05, soffitY - 0.025, 0, Wl.xF - 0.10, 0.03, (Wl.hz - Wl.thick) * 2 - 0.10));
    add('shade', 'Sooted beam, brackets, recesses and ceiling', mergeGeos(parts), 'dark');
  }

  /* ---------------------------------------------------------------- columns and their bases
   * Eight round columns -- four on the front line, four on the door wall -- and eight stone drums,
   * as TWO InstancedMesh systems on one placement schedule. */
  {
    const C = G.column, P = G.plinth;
    const h = C.y1 - C.y0;
    const shaft = cylAt(0, 0, 0, C.r, C.r * 1.06, h, 16);
    const at: number[][] = [];
    for (const z of C.z as number[]) { at.push([C.xFront, z]); at.push([C.xInner, z]); }
    addInst('columns', 'Round columns', shaft, 'red',
      at.map(([x, z]) => new THREE.Matrix4().setPosition(x, C.y0 + h / 2, z)));
    const base = mergeGeos([
      cylAt(0, 0, 0, C.baseR * 0.94, C.baseR, C.baseH * 0.7, 16),
      cylAt(0, C.baseH * 0.35 + C.baseH * 0.15, 0, C.r * 1.25, C.baseR * 0.90, C.baseH * 0.30, 16),
    ]);
    projUv(base, W.stone.tile);
    addInst('bases', 'Column drum bases', base, 'pale',
      at.map(([x, z]) => new THREE.Matrix4().setPosition(x, P.top - 0.005 + C.baseH * 0.35, z)));   // drums 5 mm into the slab
  }

  /* ---------------------------------------------------------------- gilt: dragons and beam panels
   * The dragon-wrapped columns are one of the two features the registry notes name for
   * recognition, so the dragon is GEOMETRY: a smooth helical tube (Frenet frame, indexed, shared
   * ring vertices) of 2.4 turns, tapering from the head, with a dorsal fin row and a blocked head.
   * The five gilt relief panels on the front beam ride the same material and merge. */
  {
    const D = G.dragon, B = G.beam, Wl = G.wall;
    const parts: THREE.BufferGeometry[] = [];
    const helix = (cz: number, s: number) => {
      const a = s * D.turns * Math.PI * 2;
      return [D.x + Math.sin(a) * D.R, D.y0 + (D.y1 - D.y0) * s, cz + Math.cos(a) * D.R];
    };
    for (const cz of D.z as number[]) {
      const pos: number[] = [], idx: number[] = [], seg = 8, n = D.stations;
      for (let i = 0; i <= n; i++) {
        const s = i / n, p = helix(cz, s), q = helix(cz, Math.min(1, s + 0.002));
        const tx = q[0] - p[0], ty = q[1] - p[1], tz = q[2] - p[2], tl = Math.hypot(tx, ty, tz) || 1;
        const T = [tx / tl, ty / tl, tz / tl];
        const N = [(p[0] - D.x) / D.R, 0, (p[2] - cz) / D.R];                // radial, outward
        const Bn = [T[1] * N[2] - T[2] * N[1], T[2] * N[0] - T[0] * N[2], T[0] * N[1] - T[1] * N[0]];
        const rr = D.r * (0.45 + 0.55 * Math.pow(s, 0.6));                   // tail thin, head thick
        for (let j = 0; j < seg; j++) {
          const th = j * Math.PI * 2 / seg, c = Math.cos(th) * rr, sn = Math.sin(th) * rr;
          pos.push(p[0] + N[0] * c + Bn[0] * sn, p[1] + N[1] * c + Bn[1] * sn, p[2] + N[2] * c + Bn[2] * sn);
        }
      }
      for (let i = 0; i < n; i++) for (let j = 0; j < seg; j++) {
        const a = i * seg + j, b = (i + 1) * seg + j, c = (i + 1) * seg + (j + 1) % seg, d = i * seg + (j + 1) % seg;
        idx.push(a, b, c, a, c, d);
      }
      const tube = new THREE.BufferGeometry();
      tube.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
      tube.setAttribute('uv', new THREE.BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
      tube.setIndex(idx); tube.computeVertexNormals();
      parts.push(tube);
      // Dorsal fins: flat plates standing off the outer side of the body.
      for (let k = 2; k < 22; k++) {
        const s = k / 24, p = helix(cz, s);
        const a = s * D.turns * Math.PI * 2;
        const g = new THREE.BoxGeometry(0.05, 0.16, 0.13);
        g.rotateY(-a);
        g.translate(p[0] + Math.sin(a) * (D.r * 0.9), p[1] + 0.02, p[2] + Math.cos(a) * (D.r * 0.9));
        parts.push(g);
      }
      // Head at the top of the coil: blocked jaw, brow and two horns, aimed along the tangent.
      const p = helix(cz, 1), a = D.turns * Math.PI * 2;
      const head = mergeGeos([
        boxAt(0, 0, 0.22, 0.30, 0.24, 0.46),
        boxAt(0, 0.15, 0.08, 0.26, 0.10, 0.22),
        boxAt(-0.10, 0.26, -0.02, 0.05, 0.16, 0.05),
        boxAt(0.10, 0.26, -0.02, 0.05, 0.16, 0.05),
      ]);
      head.rotateX(-0.35);
      head.rotateY(a + Math.PI / 2);
      head.translate(p[0] + Math.sin(a) * 0.05, p[1] + 0.02, p[2] + Math.cos(a) * 0.05);
      parts.push(head);
    }
    // Gilt relief panels on the front beam, between the brackets.
    const ox = Wl.xF + B.proud;
    for (const z of [-3.40, -1.25, 0, 1.25, 3.40]) {
      parts.push(boxAt(ox + 0.035, B.y0 + 0.36, z, 0.07, 0.42, 0.90));
      parts.push(boxAt(ox + 0.085, B.y0 + 0.36, z, 0.03, 0.26, 0.66));
    }
    add('gilt', 'Gilt dragons and beam panels', mergeGeos(parts), 'gold');
  }

  /* ---------------------------------------------------------------- roof: xieshan hip-and-gable
   * The whole identity of the prop, and everything glazed green rides ONE component and ONE draw
   * call: the two long slopes, the two hip ends, the soffit, the ridge bar, two ridge horns, four
   * eaves-corner horns, two pediment-foot horns, the verge boards and the two guardian beasts.
   *
   * Rings climb from the eaves to the ridge; each side is subdivided so the eaves line can SWEEP
   * up into the corners (the flying eaves) instead of bending at one midpoint. Below the pediment
   * base (t = hPed/rise) all four sides are surfaced; above it only the two long sides are, with
   * their z extent held at +-dZPed, and the red pediment prisms fill the ends. The long-slope
   * profile is the proxy's own centre-column depth scan (concave, 18 -> 33 degrees); the hip ends
   * are the shallow 21-degree skirt the end map reads. UVs are metres along the eaves by slope
   * distance, so the tile-course canvas lays real courses. */
  {
    const R = G.roof, RG = G.ridge;
    const rise = R.yR - R.yE, tPed = R.hPed / rise, M = R.perSide as number;
    const dX = (t: number) => profileAt(t) * R.dX0;
    const dZ = (t: number) => t >= tPed ? R.dZPed : R.dZPed + (R.dZ0 - R.dZPed) * Math.pow(1 - t / tPed, R.hipExp);
    const ts = R.t as number[];
    type Pt = { p: number[]; u: number; v: number };
    const sX: number[] = [0], sZ: number[] = [0];
    for (let i = 1; i < ts.length; i++) {
      sX.push(sX[i - 1] + Math.hypot(dX(ts[i - 1]) - dX(ts[i]), (ts[i] - ts[i - 1]) * rise));
      sZ.push(sZ[i - 1] + Math.hypot(dZ(ts[i - 1]) - dZ(ts[i]), (ts[i] - ts[i - 1]) * rise));
    }
    // Cornerness of a point at normalised (px, pz) on the ring rectangle: the product of two ramps,
    // so a corner is 1 from both of its sides and the middle of a side is 0.
    const ramp = (a: number) => Math.pow(Math.max(0, (Math.abs(a) - 0.40) / 0.60), 2.5);
    // Side s at ring i, M+1 points, first corner to last: 0 = -z end, 1 = -x slope, 2 = +z end, 3 = +x slope.
    const side = (i: number, s: number): Pt[] => {
      const t = ts[i], y = R.yE + t * rise;
      const fade = Math.pow(Math.max(0, 1 - t / R.liftT), 2);
      const ax = dX(t), az = dZ(t);
      const out: Pt[] = [];
      for (let k = 0; k <= M; k++) {
        const q = k / M, lat = 2 * q - 1;
        let px: number, pz: number;
        if (s === 0) { px = -lat; pz = -1; } else if (s === 1) { px = -1; pz = lat; }
        else if (s === 2) { px = lat; pz = 1; } else { px = 1; pz = -lat; }
        const c = ramp(px) * ramp(pz);
        const lift = R.lift * c * fade, push = 1 + R.push * c * fade;
        const x = px * ax * push, z = pz * az * push;
        const longSide = s === 1 || s === 3;
        out.push({ p: [x, y + lift, z], u: longSide ? z : x, v: longSide ? sX[i] : sZ[i] });
      }
      return out;
    };
    // INDEXED, with shared vertices within each side, so computeVertexNormals averages across
    // the quads and the swept corners shade smooth; built loose, the lifted corner region showed
    // every quad as a facet. Sides do not share vertices with each other (their u differs).
    const pos: number[] = [], uvs: number[] = [], idx: number[] = [];
    const nPed = ts.filter((t) => t <= tPed + 1e-6).length;
    for (let s = 0; s < 4; s++) {
      const nR = (s === 0 || s === 2) ? nPed : ts.length;
      const base = pos.length / 3;
      for (let i = 0; i < nR; i++) for (const q of side(i, s)) { pos.push(...q.p); uvs.push(q.u, q.v); }
      for (let i = 0; i < nR - 1; i++) for (let k = 0; k < M; k++) {
        const a = base + i * (M + 1) + k, b = a + 1, c = base + (i + 1) * (M + 1) + k + 1, d = c - 1;
        idx.push(a, b, c, a, c, d);
      }
    }
    // Eaves ring, corner to corner round all four sides (4M points), for the soffit and fascia.
    const eave: Pt[] = [];
    for (let s = 0; s < 4; s++) { const pts = side(0, s); for (let k = 0; k < M; k++) eave.push(pts[k]); }
    const low = eave.map((e) => ({ p: [e.p[0], e.p[1] - R.fascia, e.p[2]], u: e.p[0], v: e.p[2] }));
    // Soffit: a STRIP from the lowered eaves ring in to the beam band's outer faces, so the
    // underside follows the swept corners. The first build closed it with one flat fan, which from
    // the ground cut across the lifted corners as a black slab. Downward-facing (CW from above).
    const Bm = G.beam, Wl = G.wall;
    const innerY = R.yE - R.fascia - 0.03;
    const inX0 = Wl.xB - Bm.proud, inX1 = Wl.xF + Bm.proud, inZ = Wl.hz + Bm.proud;
    const inner = eave.map((e, k) => {
      const s = Math.floor(k / M), q = (k % M) / M, lat = 2 * q - 1;
      let px: number, pz: number;
      if (s === 0) { px = -lat; pz = -1; } else if (s === 1) { px = -1; pz = lat; }
      else if (s === 2) { px = lat; pz = 1; } else { px = 1; pz = -lat; }
      const x = (inX0 + inX1) / 2 + px * (inX1 - inX0) / 2;
      return { p: [x, innerY, pz * inZ], u: x, v: pz * inZ };
    });
    const baseL = pos.length / 3, baseI = baseL + low.length;
    for (const q of low) { pos.push(...q.p); uvs.push(q.u, q.v); }
    for (const q of inner) { pos.push(...q.p); uvs.push(q.u, q.v); }
    for (let k = 0; k < low.length; k++) {
      const k1 = (k + 1) % low.length;
      idx.push(baseL + k, baseI + k, baseI + k1, baseL + k, baseI + k1, baseL + k1);
    }
    const slope = new THREE.BufferGeometry();
    slope.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
    slope.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uvs), 2));
    slope.setIndex(idx);
    slope.computeVertexNormals();

    const parts: THREE.BufferGeometry[] = [slope];
    const trim: THREE.BufferGeometry[] = [];
    // Ridge bar: a tall band over the apex, shorter than the gable so the horns overhang it.
    trim.push(boxAt(0, (RG.y0 + RG.y1) / 2, 0, RG.w, RG.y1 - RG.y0, RG.halfZ * 2));
    trim.push(boxAt(0, RG.y1 + 0.03, 0, RG.w * 0.55, 0.06, RG.halfZ * 2 - 0.30));
    trim.push(boxAt(0, (RG.y0 + RG.y1) / 2, 0, RG.w + 0.08, 0.10, RG.halfZ * 2 - 0.40));   // moulding band
    // Ridge-end horns: the swallow-tail ends, sweeping out and up from the bar end and curling
    // back over at the tip (heading 35 -> 135 degrees), flat across the ridge, tip at 1.0 H and
    // 0.23 m past the gable face. Built in x-y, turned to run along +-z.
    for (const zs of [-1, 1]) {
      const g = spiralHorn(1.38, 0.60, 2.35, 0.44, 0.12, 0.16, 8);
      g.rotateY(zs > 0 ? 0 : Math.PI);
      g.rotateY(Math.PI / 2);
      g.translate(0, RG.y0 + 0.25, zs * (RG.halfZ - 0.12));
      trim.push(g);
      const g2 = spiralHorn(0.80, 0.75, 2.5, 0.22, 0.08, 0.12, 6);   // the tail's second prong
      g2.rotateY(zs > 0 ? 0 : Math.PI);
      g2.rotateY(Math.PI / 2);
      g2.translate(0, RG.y1 - 0.05, zs * (RG.halfZ - 0.55));
      trim.push(g2);
    }
    // Four eaves-corner horns: the swept eaves line ends in a short upturned curl, aimed
    // diagonally outward from each lifted corner.
    for (const zs of [-1, 1]) for (const xs of [-1, 1]) {
      const c = side(0, zs < 0 ? 0 : 2).find((p) => Math.sign(p.p[0]) === xs)!;   // that side's corner point
      const g = spiralHorn(0.62, 0.55, 2.0, 0.28, 0.10, 0.20, 6);
      g.rotateY(Math.atan2(-zs, xs));
      g.translate(c.p[0] - xs * 0.16, c.p[1] - 0.10, c.p[2] - zs * 0.16);
      trim.push(g);
    }
    // Verge boards along the two rakes of each gable, and a horn at each pediment foot.
    const dXPed = dX(tPed), yPed = R.yE + R.hPed;
    const rakeLen = Math.hypot(dXPed, R.yR - yPed), rakeAng = Math.atan2(R.yR - yPed, dXPed);
    for (const zs of [-1, 1]) {
      for (const xs of [-1, 1]) {
        const vb = new THREE.BoxGeometry(rakeLen + 0.10, 0.22, 0.12);
        vb.rotateZ(-xs * rakeAng);                        // +x board runs DOWN from the apex
        vb.translate(xs * dXPed / 2, (yPed + R.yR) / 2 + 0.07, zs * (R.dZPed + 0.02));
        trim.push(vb);
        const g = spiralHorn(0.50, 0.40, 1.95, 0.24, 0.08, 0.14, 5);
        g.rotateY(xs > 0 ? 0 : Math.PI);
        g.translate(xs * (dXPed - 0.06), yPed - 0.08, zs * (R.dZPed - 0.02));
        trim.push(g);
      }
    }
    // Guardian beasts: two blocked silhouettes facing each other across the ridge centre.
    for (const zs of [-1, 1]) {
      const z = zs * 0.36, top = RG.y1 + 0.03;
      const body = [
        boxAt(0, top + 0.32, z, 0.24, 0.28, 0.52),
        boxAt(0, top + 0.56, z - zs * 0.30, 0.22, 0.24, 0.24),   // head, inner end
        boxAt(0, top + 0.46, z - zs * 0.44, 0.10, 0.10, 0.10),   // muzzle
        boxAt(0, top + 0.42, z + zs * 0.30, 0.06, 0.28, 0.10),   // tail up
      ];
      for (const xs of [-1, 1]) for (const zz of [-0.18, 0.18]) body.push(boxAt(xs * 0.08, top + 0.10, z + zz, 0.07, 0.20, 0.08));
      trim.push(...body);
    }
    const trimGeo = mergeGeos(trim);
    projUv(trimGeo, W.roof.tile);
    parts.push(trimGeo);
    add('roof', 'Glazed tile roof', mergeGeos(parts), 'green');

    /* ------------------------------------------------------------ eaves fascia with cap tiles
     * The band between the eaves ring and the soffit, on its own material so the cap-tile canvas
     * (round end caps at every course, drip tiles between) can be clamped to it. */
    {
      const ft: number[] = [], fu: number[] = [];
      let along = 0;
      const n = eave.length;
      for (let k = 0; k < n; k++) {
        const a = eave[k], b = eave[(k + 1) % n];
        const len = Math.hypot(b.p[0] - a.p[0], b.p[2] - a.p[2]);
        const u0 = along, u1 = along + len;
        const A = a.p, B2 = b.p;
        const Al = [A[0], A[1] - R.fascia, A[2]], Bl = [B2[0], B2[1] - R.fascia, B2[2]];
        // (Al, B2, A) / (Al, Bl, B2): OUTWARD for a ring wound CCW from above. Wound the other way
        // the band's front faces point into the roof, the outside is culled, and from the ground
        // you see the far side's inner face as a black ring.
        ft.push(...Al, ...B2, ...A, ...Al, ...Bl, ...B2);
        fu.push(u0, 0, u1, 1, u0, 1, u0, 0, u1, 0, u1, 1);
        along = u1;
      }
      const fg = new THREE.BufferGeometry();
      fg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ft), 3));
      fg.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(fu), 2));
      fg.computeVertexNormals();
      add('eave', 'Eaves fascia and cap tiles', fg, 'eave');
    }
  }

  /* ---------------------------------------------------------------- hanging incense coils
   * The other feature the notes call out. Ten conical coils hung from the front beam at two
   * alternating heights just inside the colonnade, as ONE InstancedMesh. Plate: ~0.85 m across
   * the bottom, ~0.75 m tall, i.e. big -- v1 had them at 0.60 x 0.52. */
  {
    const K = G.coils, B = G.beam;
    const unit = mergeGeos([
      cylAt(0, 0, 0, K.rTop, K.rBot, K.h, 14),
      cylAt(0, K.h / 2 + 0.25, 0, 0.015, 0.015, 0.50, 5),
    ]);
    const mats: THREE.Matrix4[] = [];
    for (let i = 0; i < K.count; i++) {
      const z = K.z0 + ((K.z1 - K.z0) * i) / (K.count - 1);
      const top = B.y0 - 0.02 - (i % 2) * 0.38;              // wire top at the beam underside
      mats.push(new THREE.Matrix4().setPosition(K.x, top - 0.50 - K.h / 2, z));
    }
    addInst('coils', 'Hanging incense coils', unit, 'coil', mats);
  }

  /* ---------------------------------------------------------------- surface canvases
   * Five Canvas 2D tiles assigned AFTER material construction, so every sculpt material stays
   * declared textureless and keeps its measured albedo as the multiplicand; each tile is a few
   * hundred fills at 512 px on the CPU canvas path (willReadFrequently), single-digit ms. Under
   * Node -- bands.mjs and check-coplanar run this factory with no DOM -- there is no canvas and
   * every material keeps its flat measured colour. */
  {
    const hasDom = typeof document !== 'undefined' && typeof (document as any).createElement === 'function';
    const size = Math.min(W.size, options.textureSize ?? W.size);
    const css = (t: number[], a: number) =>
      'rgba(' + Math.round(t[0] * 255) + ',' + Math.round(t[1] * 255) + ',' + Math.round(t[2] * 255) + ',' + a + ')';
    const grey = (t: number, a = 1) => css([t, t, t], a);
    const rng = (seed: number) => () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    type Draw = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void) => void;
    function makeTile(seed: number, w: number, h: number, draw: Draw): HTMLCanvasElement | null {
      if (!hasDom) return null;
      const cv = document.createElement('canvas');
      cv.width = w; cv.height = h;
      const ctx = cv.getContext('2d', { willReadFrequently: true });
      if (!ctx) return null;
      const wrapped = (fn: () => void) => {
        for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
          ctx.save(); ctx.translate(ox * w, oy * h); fn(); ctx.restore();
        }
      };
      draw(ctx, rng(seed), w, wrapped);
      return cv;
    }
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
    const washes = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                    tone: number[], count: number, alpha: number, blurPx: number, wMin: number, wMax: number) => {
      const marks: number[][] = [];
      for (let i = 0; i < count; i++) marks.push([r() * S, r() * S, S * (0.15 + 0.5 * r()), wMin + (wMax - wMin) * r(), alpha * (0.5 + 0.5 * r())]);
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
    const grain = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                   tone: number[], count: number, alpha: number) => {
      const p = new Path2D();
      for (let i = 0; i < count; i++) { const x = r() * S, y = r() * S, d = 0.6 + r() * 1.4; p.rect(x, y, d, d); }
      wrapped(() => { ctx.fillStyle = css(tone, alpha); ctx.fill(p); });
    };
    const bind = (mat: THREE.MeshStandardMaterial, cv: HTMLCanvasElement | null, bump: number, clampV = false) => {
      if (!cv) return;
      const tex = new THREE.CanvasTexture(cv);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = clampV ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex; mat.bumpMap = tex; mat.bumpScale = bump; mat.needsUpdate = true;
    };
    const rebase = (m: THREE.MeshStandardMaterial, avg: number) => {
      if (!hasDom) return;
      const k = Math.pow(avg, 2.2);
      m.color.setRGB(m.color.r / k, m.color.g / k, m.color.b / k);
    };

    // Roof: laid half-round tile courses. Vertical ridges at the plate's ~0.25 m pitch, each a
    // valley-crest-valley gradient, a faint course joint every 0.34 m, then moss and grime clouds.
    {
      const P = W.roof;
      bind(materials.green, makeTile(11052011, size, size, (ctx, r, S, wrapped) => {
        const n = Math.round(P.tile / P.pitch), cw = S / n;
        for (let i = 0; i < n; i++) {
          const g = ctx.createLinearGradient(i * cw, 0, (i + 1) * cw, 0);
          g.addColorStop(0, grey(P.valley)); g.addColorStop(0.18, grey(P.crest * 0.94)); g.addColorStop(0.45, grey(P.crest));
          g.addColorStop(0.72, grey(P.crest * 0.90)); g.addColorStop(1, grey(P.valley));
          ctx.fillStyle = g; ctx.fillRect(i * cw, 0, cw + 1, S);
        }
        const rows = Math.round(P.tile / P.course), rh = S / rows;
        ctx.fillStyle = grey(0.82, 0.55);
        for (let j = 0; j < rows; j++) ctx.fillRect(0, j * rh, S, 2);
        cloud(ctx, r, S, wrapped, P.moss, 4, 0.10, 0.22, 12);
        cloud(ctx, r, S, wrapped, P.grime, 3, 0.14, 0.20, 16);
        grain(ctx, r, S, wrapped, [0.6, 0.6, 0.6], 2500, 0.07);
      }), P.bump);
    }
    // Eaves: round cap tiles at every course over a field of pointed drip tiles. Clamped in v to
    // the fascia band, repeating along it in metres.
    {
      const P = W.eave, ph = Math.round(size * G.roof.fascia);
      bind(materials.eave, makeTile(3, size, ph, (ctx, r, S) => {
        ctx.fillStyle = grey(P.field); ctx.fillRect(0, 0, S, ph);
        const n = Math.round(1 / P.pitch), cw = S / n, cr = P.capR * S;
        for (let i = 0; i < n; i++) {
          const cx = (i + 0.5) * cw, cy = ph * 0.55;
          // drip tile between caps: a pointed tongue hanging below the row
          ctx.fillStyle = grey(P.drip);
          ctx.beginPath(); ctx.moveTo(cx + cw * 0.5 - cw * 0.34, ph * 0.05); ctx.lineTo(cx + cw * 0.5 + cw * 0.34, ph * 0.05);
          ctx.lineTo(cx + cw * 0.5, ph * 0.92); ctx.closePath(); ctx.fill();
          // cap: dark rim, lighter face, darker embossed core
          ctx.fillStyle = grey(P.capRim); ctx.beginPath(); ctx.arc(cx, cy, cr, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = grey(P.capFace); ctx.beginPath(); ctx.arc(cx, cy, cr * 0.80, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = grey(P.capCore); ctx.beginPath(); ctx.arc(cx, cy, cr * 0.42, 0, Math.PI * 2); ctx.fill();
        }
        ctx.fillStyle = grey(0.6, 0.5); ctx.fillRect(0, 0, S, 2);
      }), P.bump, true);
    }
    // Red lacquer: soot washes running down from the top, grime, grain.
    {
      const P = W.red;
      bind(materials.red, makeTile(8261403, size, size, (ctx, r, S, wrapped) => {
        ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, S, S);
        // Continuous vertical streaking, never round blotches: soot runs DOWN a lacquered wall.
        washes(ctx, r, S, wrapped, P.wash, 5, 0.18, 14, 60, 140);
        washes(ctx, r, S, wrapped, P.soot, 16, 0.22, 3, 3, 14);
        washes(ctx, r, S, wrapped, P.soot, 6, 0.16, 6, 20, 50);
        grain(ctx, r, S, wrapped, P.grain, 3000, 0.08);
      }), P.bump);
    }
    // Stone: cloudy mottle, warm rust-brown staining, dark grime, grain.
    {
      const P = W.stone;
      bind(materials.pale, makeTile(20260828, size, size, (ctx, r, S, wrapped) => {
        ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, S, S);
        cloud(ctx, r, S, wrapped, P.mottle, 8, 0.18, 0.35, 16);
        cloud(ctx, r, S, wrapped, P.stain, 3, 0.14, 0.30, 14);
        washes(ctx, r, S, wrapped, P.grime, 4, 0.28, 8, 20, 90);
        grain(ctx, r, S, wrapped, P.grain, 5000, 0.07);
      }), P.bump);
    }
    // Coils: the spiral read as horizontal grooves round the cone, one tile per coil height. They
    // hang in the porch, which the harness's shadow-casting directionals leave in shadow, while
    // the plate shows them as the brightest thing under the eaves (lit by open sky the harness
    // has no environment for): a small emissive term stands in for that skylight.
    {
      const P = W.coil;
      materials.coil.emissive = new THREE.Color(0x2a2522);
      bind(materials.coil, makeTile(5, 128, 128, (ctx, r, S, wrapped) => {
        ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, S, S);
        const rh = S / P.grooves;
        for (let j = 0; j < P.grooves; j++) {
          const g = ctx.createLinearGradient(0, j * rh, 0, (j + 1) * rh);
          g.addColorStop(0, grey(P.groove)); g.addColorStop(0.25, grey(1.0)); g.addColorStop(0.8, grey(0.94)); g.addColorStop(1, grey(P.groove));
          ctx.fillStyle = g; ctx.fillRect(0, j * rh, S, rh + 1);
        }
        grain(ctx, r, S, wrapped, [0.5, 0.45, 0.42], 800, 0.10);
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
  const root = createChineseShrineModel(options);
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
