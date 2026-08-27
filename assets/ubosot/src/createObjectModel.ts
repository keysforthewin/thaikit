import * as THREE from 'three';

/**
 * Ubosot -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 14.00 x 17.00 x 24.00 m, origin base-center, +Y up, long axis on Z.
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
    "id": "ubosot",
    "name": "Ubosot",
    "exportName": "Ubosot",
    "envelope": "Envelope 14.00 x 17.00 x 24.00 m, origin base-center, +Y up, long axis on Z.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
    "materials": [
      {
        "id": "stone",
        "color": 12428954,
        "roughness": 0.92,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "red",
        "color": 7418666,
        "roughness": 0.8,
        "metalness": 0
      },
      {
        "id": "tile",
        "color": 12814946,
        "roughness": 0.78,
        "metalness": 0
      },
      {
        "id": "green",
        "color": 7236168,
        "roughness": 0.76,
        "metalness": 0
      },
      {
        "id": "gilt",
        "color": 9071698,
        "roughness": 0.36,
        "metalness": 0.3,
        "envMapIntensity": 1.2
      },
      {
        "id": "dark",
        "color": 5522747,
        "roughness": 0.96,
        "metalness": 0
      },
      {
        "id": "carved",
        "color": 16777215,
        "roughness": 0.45,
        "metalness": 0.2,
        "envMapIntensity": 1.2
      }
    ],
    "geometry": {
      "floor": 1.3,
      "platform": {
        "slab1": [
          0,
          0.45,
          6.85,
          12
        ],
        "slab2": [
          0.45,
          1.08,
          6.35,
          11.3
        ],
        "cap": [
          1.08,
          1.3,
          6.45,
          11.4
        ]
      },
      "notch": {
        "halfX": 1.9,
        "zInner": 9.6
      },
      "stair": {
        "steps": 4,
        "z0": 9.6,
        "z1": 11.3,
        "yBase": 0.45,
        "top": 1.3,
        "treadHalfX": 1.6
      },
      "parapet": {
        "outer": 6.12,
        "thick": 0.32,
        "y0": 1.3,
        "y1": 1.85,
        "gapHalfX": 1.9
      },
      "column": {
        "hw": 0.275,
        "y0": 1.3,
        "y1": 6.6,
        "insetX": 5.95,
        "insetZ": 10.2,
        "longCount": 11,
        "shortCount": 4
      },
      "beam": {
        "y0": 6.25,
        "y1": 6.85,
        "thick": 0.65
      },
      "wall": {
        "y0": 1.3,
        "y1": 6.9,
        "hx": 5.5,
        "hz": 8.4
      },
      "door": {
        "w": 2,
        "h": 3.6,
        "frame": 0.3,
        "proud": 0.1
      },
      "window": {
        "w": 1.1,
        "h": 2.2,
        "sill": 2.6,
        "frame": 0.16,
        "bays": [
          1.02,
          3.06,
          5.1,
          7.14
        ]
      },
      "skirt": {
        "hx": 6.8,
        "hz": 10.9,
        "y0": 6.9,
        "hxI": 4.7,
        "hzI": 8.8,
        "y1": 8.5,
        "soffit": 6.5,
        "band": 0.45
      },
      "mid": {
        "hx": 5,
        "y0": 9,
        "drop": 8.05,
        "hxT": 3.15,
        "y1": 10.85,
        "hz": 8.95,
        "band": 0.45
      },
      "top": {
        "hx": 3.1,
        "y0": 10.9,
        "drop": 10.3,
        "band": 0.45,
        "hz": 8.95,
        "sections": [
          [
            -6.03,
            6.03,
            14.8
          ],
          [
            6,
            8.95,
            14
          ],
          [
            -8.95,
            -6,
            14
          ]
        ]
      },
      "gable": {
        "slab": 0.15,
        "boardW": 0.42,
        "boardT": 0.3
      },
      "horn": {
        "apexRise": 2.35,
        "footRise": 1.3,
        "cornerRise": 1.4
      },
      "sema": {
        "h": 1.05,
        "ped": 0.6
      },
      "wear": {
        "size": 512,
        "stone": {
          "tile": 3,
          "bump": 0.035,
          "mottle": [
            0.86,
            0.86,
            0.87
          ],
          "wash": [
            0.55,
            0.56,
            0.58
          ],
          "streak": [
            0.62,
            0.63,
            0.64
          ],
          "grain": [
            0.7,
            0.7,
            0.72
          ]
        },
        "red": {
          "tile": 2,
          "bump": 0.05,
          "clean": [
            0.565,
            0.31,
            0.3
          ],
          "flake": [
            0.96,
            0.96,
            0.95
          ],
          "rim": [
            0.3,
            0.16,
            0.14
          ],
          "grime": [
            0.34,
            0.2,
            0.18
          ],
          "grain": [
            0.45,
            0.25,
            0.23
          ]
        },
        "roof": {
          "tile": 2.4,
          "cols": 11,
          "rows": 7,
          "bump": 0.045,
          "avg": 0.9,
          "joint": [
            0.6,
            0.58,
            0.55
          ],
          "loTone": 0.84,
          "hiTone": 1,
          "moss": [
            0.62,
            0.66,
            0.52
          ],
          "grime": [
            0.7,
            0.7,
            0.7
          ]
        },
        "pediment": {
          "ground": "#74402e",
          "gold": "#a8865a",
          "goldHi": "#c9a774",
          "goldLo": "#7a5a3a"
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

export function createUbosotModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Ubosot';

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


  /** Project UVs in METRES over a tile size, by each vertex's normal: vertical faces get (along,
   *  height), horizontals get plan, and a roof slope gets (along, distance-up-the-slope) so a tile
   *  course is not foreshortened on a 52-degree pitch. Every geometry here is non-indexed with
   *  per-face normals, so a face never straddles two projections. */
  function projUv(geo: THREE.BufferGeometry, tile: number): void {
    const p = geo.getAttribute('position'), n = geo.getAttribute('normal');
    const out = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      const nx = n.getX(i), ny = n.getY(i), nz = n.getZ(i);
      const horiz = Math.sqrt(nx * nx + nz * nz);
      let u: number, v: number;
      if (horiz < 0.2) { u = p.getX(i); v = p.getZ(i); }
      else {
        u = Math.abs(nx) >= Math.abs(nz) ? p.getZ(i) : p.getX(i);
        v = p.getY(i) / horiz;
      }
      out[i * 2] = u / tile; out[i * 2 + 1] = v / tile;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(out, 2));
  }

  /** A quad strip between two horizontal rectangles [hx, hz, y] -- four trapezoids sharing their
   *  hip edges. The winding is fixed per face against a hint direction, so the same builder makes
   *  an outward-facing slope, a downward soffit and an inward closing wall. */
  function ring(r0: number[], r1: number[], hint: (sx: number, sz: number) => number[]): THREE.BufferGeometry {
    const corner = (r: number[], i: number) => [[r[0], r[2], -r[1]], [r[0], r[2], r[1]], [-r[0], r[2], r[1]], [-r[0], r[2], -r[1]]][i];
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const pos: number[] = [];
    for (let s = 0; s < 4; s++) {
      const a = corner(r0, s), b = corner(r0, (s + 1) % 4), c = corner(r1, (s + 1) % 4), d = corner(r1, s);
      const h = hint(dirs[s][0], dirs[s][1]);
      const tri = (p: number[], q: number[], r: number[]) => {
        const ux = q[0] - p[0], uy = q[1] - p[1], uz = q[2] - p[2], vx = r[0] - p[0], vy = r[1] - p[1], vz = r[2] - p[2];
        const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
        if (nx * h[0] + ny * h[1] + nz * h[2] < 0) pos.push(...p, ...r, ...q); else pos.push(...p, ...q, ...r);
      };
      tri(a, b, c); tri(a, c, d);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
    g.computeVertexNormals();
    return g;
  }
  const outUp = (sx: number, sz: number) => [sx, 1, sz];
  const outward = (sx: number, sz: number) => [sx, 0, sz];
  const inward = (sx: number, sz: number) => [-sx, 0, -sz];
  const down = () => [0, -1, 0];

  /** A roof layer's glaze band as a closed prism: the bottom 'band' metres of rise of the slope on
   *  both sides, extruded along Z. */
  /** A rectangular plan with a stair notch cut into BOTH short ends. */
  function notchedRect2(hx: number, hz: number, nx: number, zInner: number): THREE.Shape {
    const pts = [[hx, -hz], [hx, hz], [nx, hz], [nx, zInner], [-nx, zInner], [-nx, hz], [-hx, hz],
                 [-hx, -hz], [-nx, -hz], [-nx, -zInner], [nx, -zInner], [nx, -hz]];
    const shape = new THREE.Shape();
    shape.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
    shape.closePath();
    return shape;
  }
  function bandProfile(hb: number, y0: number, pitch: number, band: number): THREE.Shape {
    const hi = hb - band / pitch;
    const s = new THREE.Shape();
    s.moveTo(-hb, y0); s.lineTo(hb, y0); s.lineTo(hi, y0 + band); s.lineTo(-hi, y0 + band); s.closePath();
    return s;
  }
  const FLOOR = G.floor as number;

  /* ---------------------------------------------------------------- stone platform
   * Bottom terrace, plinth, proud cap course, a four-tread stair at EACH end cut into the plinth
   * plan as a notch, and the low parapet between the column bases: all one whitewashed stone and
   * therefore ONE component and ONE draw call. */
  {
    const P = G.platform, N = G.notch, ST = G.stair, PA = G.parapet, C = G.column;
    const parts: THREE.BufferGeometry[] = [];
    const [a0, a1, ahx, ahz] = P.slab1;
    parts.push(boxAt(0, (a0 + a1) / 2, 0, ahx * 2, a1 - a0, ahz * 2));
    for (const [y0, y1, hx, hz] of [P.slab2, P.cap]) {
      parts.push(extrudeSlab(notchedRect2(hx, hz, N.halfX, N.zInner), y0, y1));
    }
    // Treads occupy only their own going and start just inside the terrace slab, so no two
    // undersides share the ground plane.
    const run = (ST.z1 - ST.z0) / ST.steps, rise = (ST.top - ST.yBase) / ST.steps;
    for (const zs of [-1, 1]) {
      for (let i = 0; i < ST.steps; i++) {
        const zOut = ST.z1 - i * run, top = ST.yBase + (i + 1) * rise, bot = ST.yBase - 0.01;
        parts.push(boxAt(0, (top + bot) / 2, zs * (zOut - run / 2), ST.treadHalfX * 2, top - bot, run));
      }
    }
    // Parapet: side runs the full colonnade length, end runs stopping at the side runs' inner
    // faces and at the stair opening.
    const ph = PA.y1 - PA.y0, py = (PA.y0 + PA.y1) / 2, inner = PA.outer - PA.thick;
    const zEnd = C.insetZ + PA.thick / 2;
    for (const xs of [-1, 1]) parts.push(boxAt(xs * (PA.outer - PA.thick / 2), py, 0, PA.thick, ph, zEnd * 2));
    for (const zs of [-1, 1]) for (const xs of [-1, 1]) {
      const x0 = PA.gapHalfX, x1 = inner;
      parts.push(boxAt(xs * (x0 + x1) / 2, py - 0.01, zs * C.insetZ, x1 - x0, ph, PA.thick));
    }
    const geo = mergeGeos(parts);
    // Ground dirt and the black weathering the plate shows on the plinth, as a per-vertex tint on
    // top of the stone tile: the plate's bottom courses measure distinctly darker than the deck.
    tintByHeight(geo, 0, FLOOR, [0.80, 0.81, 0.79]);
    projUv(geo, G.wear.stone.tile);
    add('platform', 'Stone platform, stairs and parapet', geo, 'stone');
    colliders['platform'] = {
      shape: 'box', localCenter: [0, 8.5, 0], halfExtents: [7.0, 8.5, 12.0],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level '
           + 'builder collides with the hall, not with its thirty individual columns.',
    };
  }

  /* ---------------------------------------------------------------- hall body and door surrounds
   * A SOLID box inside the colonnade -- an exterior shell only ever seen from outside, so there is
   * no interior, and the doorways need no opening cut. Two stone door surrounds stand proud of
   * the end faces; their feet are sunk into the cap course so no underside shares its plane. */
  {
    const W = G.wall, D = G.door;
    const parts = [boxAt(0, (W.y0 + W.y1) / 2, 0, W.hx * 2, W.y1 - W.y0, W.hz * 2)];
    const fw = D.w + 2 * D.frame, fh = D.h + D.frame, fy0 = FLOOR - 0.10;
    for (const zs of [-1, 1]) parts.push(boxAt(0, (fy0 + FLOOR + fh) / 2, zs * (W.hz + D.proud / 2), fw, FLOOR + fh - fy0, D.proud));
    const geo = mergeGeos(parts);
    projUv(geo, G.wear.stone.tile);
    add('wall', 'Hall wall body and door surrounds', geo, 'stone');
  }

  /* ---------------------------------------------------------------- door and window leaves
   * The plate's openings are dark timber leaves in white surrounds. Leaves are proud panels: the
   * body is solid, so a sunk panel would be inside it and invisible. Doors are two panels merged;
   * the sixteen window leaves are one InstancedMesh, their surrounds another. */
  {
    const W = G.wall, D = G.door, WI = G.window;
    const leaves: THREE.BufferGeometry[] = [];
    for (const zs of [-1, 1]) leaves.push(boxAt(0, FLOOR + D.h / 2, zs * (W.hz + D.proud + 0.03), D.w, D.h, 0.06));
    add('doorway', 'Doorways', mergeGeos(leaves), 'dark');

    const frame = new THREE.BoxGeometry(0.10, WI.h + 2 * WI.frame, WI.w + 2 * WI.frame);
    projUv(frame, G.wear.stone.tile);
    const leaf = new THREE.BoxGeometry(0.06, WI.h, WI.w);
    const fm: THREE.Matrix4[] = [], lm: THREE.Matrix4[] = [];
    const cy = FLOOR + WI.sill + WI.h / 2;
    for (const xs of [-1, 1]) for (const bz of WI.bays as number[]) for (const zs of [-1, 1]) {
      fm.push(new THREE.Matrix4().setPosition(xs * (W.hx + 0.05), cy, zs * bz));
      lm.push(new THREE.Matrix4().setPosition(xs * (W.hx + 0.10 + 0.03), cy, zs * bz));
    }
    addInst('window-frames', 'Window surrounds', frame, 'stone', fm);
    addInst('window-leaves', 'Window leaves', leaf, 'dark', lm);
  }

  /* ---------------------------------------------------------------- peristyle columns
   * Thirty square red columns as ONE InstancedMesh: eleven a side and four between the corners
   * on each end, counted off the plate's right-hand elevation. Their heads are buried in the
   * eaves beam, which is what carries the skirt. */
  {
    const C = G.column;
    const unit = new THREE.BoxGeometry(C.hw * 2, C.y1 - C.y0, C.hw * 2);
    projUv(unit, G.wear.red.tile);
    const cy = (C.y0 + C.y1) / 2;
    const mats: THREE.Matrix4[] = [];
    for (let i = 0; i < C.longCount; i++) {
      const z = -C.insetZ + (2 * C.insetZ * i) / (C.longCount - 1);
      mats.push(new THREE.Matrix4().setPosition(-C.insetX, cy, z));
      mats.push(new THREE.Matrix4().setPosition(C.insetX, cy, z));
    }
    for (let i = 1; i <= C.shortCount; i++) {
      const x = -C.insetX + (2 * C.insetX * i) / (C.shortCount + 1);
      mats.push(new THREE.Matrix4().setPosition(x, cy, -C.insetZ));
      mats.push(new THREE.Matrix4().setPosition(x, cy, C.insetZ));
    }
    addInst('columns', 'Peristyle columns', unit, 'red', mats);
  }

  /* ---------------------------------------------------------------- roof
   * Four registers, read off the proxy elevations:
   *   skirt  -- a hipped portico ring over the colonnade, 37 degrees, eaves hw 6.8 at 6.4 m;
   *   mid    -- one 45-degree layer the full 18 m, eaves hw 5.0 at 9.0 m;
   *   top    -- the gable, telescoped: centre ridge 14.8 over 12 m, end ridges 14.0 over 3 m each,
   *             one shared eaves line at hw 3.1 / 10.9 m.
   * Each layer is three solids: a WHITE RISER (the vertical fascia band under the eaves, dropped
   * below the layer beneath so it reads as the wall between roofs), a GLAZE BAND prism (the first
   * 0.45 m of rise), and the TILE field above it. Consecutive solids meet as opposed faces. The
   * skirt is built as quad rings instead of prisms because it hips round the ends. */
  const SK = G.skirt, MD = G.mid, TP = G.top;
  const skPitch = (SK.y1 - SK.y0) / (SK.hx - SK.hxI);
  const mdPitch = (MD.y1 - MD.y0) / (MD.hx - MD.hxT);
  {
    const tile: THREE.BufferGeometry[] = [], band: THREE.BufferGeometry[] = [], riser: THREE.BufferGeometry[] = [];
    // skirt
    const bi = SK.band / skPitch;
    // The band's outer edge, the fascia strip's face and the soffit's outer edge are pulled
    // apart by a few millimetres: an EDGE lying in a face's plane is not a z-fight, but the
    // coplanar check compares bounding boxes and cannot tell the two apart.
    const outer = [SK.hx + 0.003, SK.hz + 0.003, SK.y0], midR = [SK.hx - bi, SK.hz - bi, SK.y0 + SK.band], innerR = [SK.hxI, SK.hzI, SK.y1];
    band.push(ring(outer, midR, outUp));
    tile.push(ring(midR, innerR, outUp));
    tile.push(ring([SK.hx - 0.005, SK.hz - 0.005, SK.soffit], [SK.hxI, SK.hzI, SK.soffit], down));
    tile.push(ring([SK.hxI, SK.hzI, SK.soffit], [SK.hxI, SK.hzI, SK.y1], inward));
    riser.push(ring([SK.hx, SK.hz, SK.soffit - 0.005], [SK.hx, SK.hz, SK.y0], outward));
    // middle layer
    riser.push(boxAt(0, (MD.drop + MD.y0) / 2, 0, MD.hx * 2, MD.y0 - MD.drop, MD.hz * 2));
    band.push(extrudeAlongZ(bandProfile(MD.hx, MD.y0, mdPitch, MD.band), -MD.hz, MD.hz));
    tile.push(extrudeAlongZ(tierProfile(MD.hx - MD.band / mdPitch, MD.y0 + MD.band, MD.y1, mdPitch), -MD.hz + 0.01, MD.hz - 0.01));
    // top gable, three sections
    riser.push(boxAt(0, (TP.drop + TP.y0) / 2, 0, TP.hx * 2, TP.y0 - TP.drop, TP.hz * 2));
    for (const [z0, z1, ridge] of TP.sections as number[][]) {
      const pitch = (ridge - TP.y0) / TP.hx;
      band.push(extrudeAlongZ(bandProfile(TP.hx, TP.y0, pitch, TP.band), z0, z1));
      tile.push(extrudeAlongZ(tierProfile(TP.hx - TP.band / pitch, TP.y0 + TP.band, ridge, pitch), z0 + 0.01, z1 - 0.01));
    }
    const tg = mergeGeos(tile), bg = mergeGeos(band), rg = mergeGeos(riser);
    projUv(tg, G.wear.roof.tile); projUv(bg, G.wear.roof.tile); projUv(rg, G.wear.stone.tile);
    add('roof-tile', 'Tile roof fields', tg, 'tile');
    add('roof-band', 'Glazed eaves bands', bg, 'green');
    add('roof-risers', 'Roof fascia bands', rg, 'stone');
  }

  /* ---------------------------------------------------------------- gable walls, bargeboards, pediments
   * Each gable end is a white slab standing 0.05 m proud of the risers behind it, following the
   * stacked outline of the layers it closes; a bargeboard up every rake, offset outward so its
   * lower edge sits on the roof edge; and the carved gilt pediment inside the top gable. The
   * centre section's gables at z = +-6 are the same, and only their upper 0.8 m shows above the
   * end sections' ridges -- which is exactly the telescoped step the plate shows. */
  const GB = G.gable;
  const gables: { z: number, ridge: number, full: boolean }[] = [];
  for (const [z0, z1, ridge] of TP.sections as number[][]) {
    const zo = Math.abs(z0) > Math.abs(z1) ? z0 : z1;
    if (Math.abs(zo) > 8.9) gables.push({ z: Math.sign(zo) * 9.0, ridge, full: true });
    else { gables.push({ z: 6.0, ridge, full: false }); gables.push({ z: -6.0, ridge, full: false }); }
  }
  {
    const slabs: THREE.BufferGeometry[] = [], boards: THREE.BufferGeometry[] = [], reds: THREE.BufferGeometry[] = [];
    const peds: THREE.BufferGeometry[] = [];
    // The END gables carry ONE rake from the middle layer's eaves to the ridge: the plate's gilt
    // pediment spans the whole gable, and the top layer's step shows only on the side slopes (the
    // end sections' top pitch of 1.0 is the middle layer's 45 degrees continued). The centre
    // section's gables at z = +-6 start at the top layer's own eaves.
    const rakeOf = (g: { z: number, ridge: number, full: boolean }) =>
      g.full ? [MD.hx + 0.05, MD.y0, MD.drop + 0.10] : [TP.hx + 0.05, TP.y0 + 0.02, TP.drop + 0.10];   // [hb, yb, yBottom]
    for (const g of gables) {
      const zs = Math.sign(g.z);
      const [hb, yb, yBot] = rakeOf(g);
      const s = new THREE.Shape();
      s.moveTo(-hb, yBot); s.lineTo(hb, yBot); s.lineTo(hb, yb); s.lineTo(0, g.ridge + 0.01); s.lineTo(-hb, yb);
      s.closePath();
      const zIn = Math.abs(g.z) - 0.07, zOut = Math.abs(g.z) + GB.slab - 0.07;
      slabs.push(extrudeAlongZ(s, zs > 0 ? zIn : -zOut, zs > 0 ? zOut : -zIn));
      // bargeboards and their red outer strips, up each rake
      {
        const ht = 0, yt = g.ridge;
        const run = hb - ht, rise = yt - yb, len = Math.hypot(run, rise) + 0.12;
        // atan2(RUN, RISE): rotateZ maps a box's +Y to (-sin, cos), so aiming it along the rake
        // needs the COMPLEMENT of the pitch angle -- three degrees off at 46 degrees, twenty-four
        // at 33, which is how it survived a whole prop before the reclining hall caught it.
        const ang = Math.atan2(run, rise);
        const px = rise / len, py = run / len;   // unit perpendicular, outward-and-up
        for (const xs of [-1, 1]) {
          const cx = xs * (hb + ht) / 2, cy = (yb + yt) / 2;
          const b = new THREE.BoxGeometry(GB.boardW, len, GB.boardT);
          b.rotateZ(xs * ang);
          b.translate(cx + xs * px * GB.boardW / 2, cy + py * GB.boardW / 2, zs * (zOut + GB.boardT / 2));
          boards.push(b);
          const r = new THREE.BoxGeometry(0.12, len, 0.16);
          r.rotateZ(xs * ang);
          r.translate(cx + xs * px * (GB.boardW + 0.06), cy + py * (GB.boardW + 0.06), zs * (zOut + 0.10));
          reds.push(r);
        }
      }
      // pediment: the carved field, inset from the rakes, proud of the slab
      const inset = 0.50, base = yb + 0.30;
      const hw = hb - inset - 0.30 * hb / (g.ridge - yb), apex = g.ridge - inset * (g.ridge - yb) / hb - 0.15;
      const t = new THREE.Shape();
      t.moveTo(-hw, base); t.lineTo(hw, base); t.lineTo(0, apex); t.closePath();
      const pg = extrudeAlongZ(t, zs > 0 ? zOut : -zOut - 0.18, zs > 0 ? zOut + 0.18 : -zOut);
      // canvas UVs over the triangle's own box, apex at v = 1
      const pp = pg.getAttribute('position'), uv = new Float32Array(pp.count * 2);
      for (let i = 0; i < pp.count; i++) {
        uv[i * 2] = (pp.getX(i) * zs + hw) / (2 * hw);
        uv[i * 2 + 1] = (pp.getY(i) - base) / (apex - base);
      }
      pg.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
      peds.push(pg);
    }
    const sg = mergeGeos(slabs); projUv(sg, G.wear.stone.tile);
    add('gable-walls', 'Gable walls', sg, 'stone');
    const bg = mergeGeos(boards); projUv(bg, G.wear.stone.tile);
    add('barge-boards', 'Bargeboards', bg, 'stone');
    add('pediment', 'Carved gable pediments', mergeGeos(peds), 'carved');

    /* red trim: eaves fascias on every layer, the eaves beam on the columns, ridge caps, and the
     * rake strips already collected. End runs butt against the side runs' inner faces, never
     * overlapping them, so no two top faces share a plane. */
    const fasciaRing = (hx: number, hz: number, y: number, h: number, t: number) => {
      for (const xs of [-1, 1]) reds.push(boxAt(xs * (hx + t / 2), y, 0, t, h, hz * 2 + t * 2));
      for (const zs of [-1, 1]) reds.push(boxAt(0, y - 0.01, zs * (hz + t / 2), hx * 2, h, t));
    };
    fasciaRing(SK.hx, SK.hz, SK.y0 - 0.20, 0.36, 0.14);
    for (const xs of [-1, 1]) {
      reds.push(boxAt(xs * (MD.hx + 0.07), MD.y0 - 0.20, 0, 0.14, 0.36, MD.hz * 2 + 0.10));
      reds.push(boxAt(xs * (TP.hx + 0.07), TP.y0 - 0.20, 0, 0.14, 0.36, TP.hz * 2 + 0.10));
    }
    const C = G.column, B = G.beam;
    const by = (B.y0 + B.y1) / 2, bh = B.y1 - B.y0;
    for (const xs of [-1, 1]) reds.push(boxAt(xs * C.insetX, by, 0, B.thick, bh, C.insetZ * 2 + B.thick));
    for (const zs of [-1, 1]) reds.push(boxAt(0, by - 0.01, zs * C.insetZ, C.insetX * 2 - B.thick, bh, B.thick));
    for (const [z0, z1, ridge] of TP.sections as number[][]) {
      reds.push(boxAt(0, ridge + 0.06, (z0 + z1) / 2, 0.36, 0.24, z1 - z0 + 0.24));
    }
    const rg = mergeGeos(reds); projUv(rg, G.wear.red.tile);
    add('roof-trim', 'Eaves beam, fascias and ridge caps', rg, 'red');
  }

  /* ---------------------------------------------------------------- chofa and rake-foot horns
   * The curved finials -- the feature the registry notes say separates an ubosot from any other
   * rectangular hall. One curled-horn geometry, sixteen instances: an apex chofa on every gable
   * (2.35 m on the centre ridge, so its tip sets the declared 17.0 m), a horn at every rake foot
   * of every layer, and one at each hip corner of the skirt. Each instance carries its own yaw,
   * rise and hand; a NEGATIVE X scale mirrors the curl. */
  {
    const H = G.horn;
    const unit = curledHorn(0.46, 1.0, 0.20, 9);
    const mats: THREE.Matrix4[] = [];
    const place = (x: number, y: number, z: number, yaw: number, rise: number, mirror = 1) => {
      const sxz = 0.55 + 0.32 * rise;
      mats.push(new THREE.Matrix4().compose(
        new THREE.Vector3(x, y, z),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
        new THREE.Vector3(sxz * mirror, rise, sxz)));
    };
    for (const g of gables) {
      const zs = Math.sign(g.z), zf = Math.abs(g.z) + GB.slab + 0.16;
      // apex, curling outward along the ridge
      place(0, g.ridge - 0.30, zs * zf, zs > 0 ? -Math.PI / 2 : Math.PI / 2, g.full ? H.apexRise * (g.ridge > 14.5 ? 1 : 0.92) : H.apexRise);
      // rake feet, curling outward across the building
      const [fhb, fyb] = g.full ? [MD.hx, MD.y0] : [TP.hx, TP.y0];
      for (const xs of [-1, 1]) {
        place(xs * (fhb + 0.14), fyb + 0.02, zs * (zf - 0.02), xs > 0 ? 0 : Math.PI, H.footRise);
      }
    }
    for (const zs of [-1, 1]) for (const xs of [-1, 1]) {
      place(xs * (SK.hx - 0.28), SK.y0 + 0.02, zs * (SK.hz - 0.18), Math.atan2(-zs, xs), H.cornerRise);
    }
    addInst('chofa', 'Chofa and rake-foot horns', unit, 'gilt', mats);
  }

  /* ---------------------------------------------------------------- bai sema boundary stones
   * Eight pointed stones on pedestals, on the bottom terrace outside the plinth: four at the
   * corners, two at the mid-sides, and one centred before each stair. The registry notes are
   * explicit that these are what make the building an ORDINATION hall. */
  {
    const S = G.sema;
    const leaf = new THREE.Shape();
    leaf.moveTo(-0.20, 0); leaf.lineTo(0.20, 0); leaf.lineTo(0.20, S.h * 0.52);
    leaf.quadraticCurveTo(0.20, S.h * 0.92, 0, S.h);
    leaf.quadraticCurveTo(-0.20, S.h * 0.92, -0.20, S.h * 0.52);
    leaf.closePath();
    const blade = new THREE.ExtrudeGeometry(leaf, { depth: 0.13, bevelEnabled: false, curveSegments: 5 });
    blade.translate(0, 0.46, -0.065);
    blade.computeVertexNormals();
    const unit = mergeGeos([
      boxAt(0, 0.10, 0, S.ped, 0.20, S.ped),
      boxAt(0, 0.32, 0, S.ped * 0.8, 0.26, S.ped * 0.8),
      blade,
    ]);
    projUv(unit, G.wear.stone.tile);
    const spots: number[][] = [
      [-6.56, -11.60], [6.56, -11.60], [-6.56, 11.60], [6.56, 11.60],
      [-6.56, 0], [6.56, 0], [0, -11.65], [0, 11.65],
    ];
    addInst('sema', 'Bai sema boundary stones', unit, 'stone',
      spots.map(([x, z]) => new THREE.Matrix4().setPosition(x, G.platform.slab1[1], z)));
  }

  /* ---------------------------------------------------------------- weathering
   * The plate is not a clean model: its whitewash is streaked grey-black down every face and
   * grimed at the plinth, the red lacquer on the columns is PEELING to pale plaster in hand-sized
   * flakes, the roof is laid in visible tile courses with grey-green growth in the field, and the
   * pediment is dense gilt carving on red. The first build shipped flat paint and was returned.
   *
   * Delivered as four Canvas 2D tiles assigned AFTER material construction: the sculpt materials
   * stay declared textureless (no five-canvas procedural set, no per-pixel JavaScript, and the
   * measured albedo is NOT thrown away), and each tile is a few hundred Path2D fills at 512 px --
   * single-digit milliseconds. Each is a MULTIPLIER on the material colour, bound as both map
   * and bumpMap so a flake reads as lifted paint and a tile joint as a groove.
   *
   * The lacquer's flakes are BRIGHTER than the red, and a multiplier cannot brighten: the red
   * material is re-based to the flake ENVELOPE and the clean red painted back as a ratio, on
   * LINEAR components with the ratio raised to 2.2 because the sRGB tile is decoded before the
   * multiply. Under Node -- bands.mjs and check-coplanar run this factory with no DOM -- there is
   * no canvas and every material keeps its flat measured colour. */
  {
    const W = G.wear;
    const hasDom = typeof document !== 'undefined' && typeof (document as any).createElement === 'function';
    const size = Math.min(W.size, options.textureSize ?? W.size);
    const css = (t: number[], a: number) =>
      'rgba(' + Math.round(t[0] * 255) + ',' + Math.round(t[1] * 255) + ',' + Math.round(t[2] * 255) + ',' + a + ')';
    const rng = (seed: number) => () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    type Draw = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void) => void;

    function makeTile(seed: number, draw: Draw): HTMLCanvasElement | null {
      if (!hasDom) return null;
      const cv = document.createElement('canvas');
      cv.width = cv.height = size;
      const ctx = cv.getContext('2d');
      if (!ctx) return null;
      const S = size;
      // Every mark is built once and drawn at nine wrapped offsets, so the tile is seamless under
      // RepeatWrapping; shapes are precomputed before the nine fills or the copies differ.
      const wrapped = (fn: () => void) => {
        for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
          ctx.save(); ctx.translate(ox * S, oy * S); fn(); ctx.restore();
        }
      };
      draw(ctx, rng(seed), S, wrapped);
      return cv;
    }
    /** Soft low-frequency mottle through a canvas blur, so tone drifts cloud-like instead of
     *  stopping at a hard edge -- hard blotches on stone read as camouflage paint. */
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
    /** Water-borne washes: vertical gradient streaks fading DOWN the face (canvas +y is world -y
     *  under flipY), blurred so they read as staining rather than stripes. */
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
    /** Fine grain: near-transparent specks, so no area is a flat fill. */
    const grain = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                   tone: number[], count: number, alpha: number) => {
      const p = new Path2D();
      for (let i = 0; i < count; i++) { const x = r() * S, y = r() * S, d = 0.6 + r() * 1.4; p.rect(x, y, d, d); }
      wrapped(() => { ctx.fillStyle = css(tone, alpha); ctx.fill(p); });
    };
    /** Peeling paint: a random WALK of overlapping discs filled once as a union (scattered discs
     *  are polka dots; a flake is a worm), with a thin dark rim where the lifted edge shadows. */
    const flakes = (ctx: CanvasRenderingContext2D, r: () => number, S: number, wrapped: (fn: () => void) => void,
                    tone: number[], rim: number[], count: number, rad: number) => {
      for (let i = 0; i < count; i++) {
        const p = new Path2D();
        let cx = r() * S, cy = r() * S, a = r() * Math.PI * 2;
        const R = rad * S * (0.4 + r()), n = 6 + Math.floor(r() * 12);
        for (let k = 0; k < n; k++) {
          a += (r() - 0.5) * 2.0;
          cx += Math.cos(a) * R * 0.45; cy += Math.sin(a) * R * 0.45 * 1.4;
          const rr = R * (0.35 + 0.5 * r());
          p.moveTo(cx + rr, cy); p.arc(cx, cy, rr, 0, Math.PI * 2);
        }
        wrapped(() => {
          ctx.lineWidth = 3; ctx.strokeStyle = css(rim, 0.7); ctx.stroke(p);
          ctx.fillStyle = css(tone, 0.92); ctx.fill(p);
        });
      }
    };
    const bind = (mat: THREE.MeshStandardMaterial, cv: HTMLCanvasElement | null, bump: number, repeatUv = true) => {
      if (!cv) return;
      const tex = new THREE.CanvasTexture(cv);
      tex.wrapS = tex.wrapT = repeatUv ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;   // the tile holds display-space ratios
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex;
      mat.bumpMap = tex;
      mat.bumpScale = bump;
      mat.needsUpdate = true;
    };
    const rebase = (m: THREE.MeshStandardMaterial, ratio: number[]) => {
      if (!hasDom) return;
      const c = m.color.clone();
      m.color.setRGB(c.r / Math.pow(ratio[0], 2.2), c.g / Math.pow(ratio[1], 2.2), c.b / Math.pow(ratio[2], 2.2));
    };

    // Whitewashed stone: cloudy grey drift, grain, then the washes and streaks running down.
    {
      const P = W.stone;
      bind(materials.stone, makeTile(20260826, (ctx, r, S, wrapped) => {
        ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, S, S);
        cloud(ctx, r, S, wrapped, P.mottle, 10, 0.18, 0.40, 16);
        grain(ctx, r, S, wrapped, P.grain, 6000, 0.07);
        washes(ctx, r, S, wrapped, P.wash, 9, 0.42, 9, 30, 110);
        washes(ctx, r, S, wrapped, P.streak, 7, 0.45, 3, 5, 16);
        cloud(ctx, r, S, wrapped, P.wash, 4, 0.10, 0.28, 20);
      }), P.bump);
    }
    // Red lacquer: re-based to the plaster envelope, the clean red painted as its ratio, then the
    // flakes, their rims, dark grime washes and grain.
    {
      const P = W.red;
      rebase(materials.red, P.clean);
      bind(materials.red, makeTile(8261403, (ctx, r, S, wrapped) => {
        ctx.fillStyle = css(P.clean, 1); ctx.fillRect(0, 0, S, S);
        cloud(ctx, r, S, wrapped, [P.clean[0] * 0.8, P.clean[1] * 0.8, P.clean[2] * 0.8], 10, 0.14, 0.5, 12);
        washes(ctx, r, S, wrapped, P.grime, 18, 0.50, 6, 16, 70);
        flakes(ctx, r, S, wrapped, P.flake, P.rim, 6, 0.028);
        grain(ctx, r, S, wrapped, P.grain, 3000, 0.10);
      }), P.bump);
    }
    // Roof: laid tile courses -- the tile is an exact whole number of courses and columns in
    // running bond, each tile a scalloped rectangle in its own tone over a joint ground -- then
    // grey-green growth and grime. One canvas serves both the terracotta field and the glaze
    // band, since it is a multiplier and each keeps its own measured colour.
    {
      const P = W.roof;
      const avg = [P.avg, P.avg, P.avg];
      rebase(materials.tile, avg); rebase(materials.green, avg);
      const cv = makeTile(11052011, (ctx, r, S, wrapped) => {
        ctx.fillStyle = css(P.joint, 1); ctx.fillRect(0, 0, S, S);
        const cw = S / P.cols, rh = S / P.rows;
        const tiles: { p: Path2D, t: number }[] = [];
        for (let row = 0; row < P.rows; row++) {
          const off = (row % 2) * cw / 2;
          for (let col = 0; col < P.cols; col++) {
            const x0 = col * cw + off + 1.5, x1 = x0 + cw - 3, y0 = row * rh + 1, y1 = y0 + rh - 2;
            const p = new Path2D();
            p.moveTo(x0, y0); p.lineTo(x1, y0); p.lineTo(x1, y1 - cw * 0.25);
            p.quadraticCurveTo((x0 + x1) / 2, y1 + cw * 0.12, x0, y1 - cw * 0.25); p.closePath();
            tiles.push({ p, t: P.loTone + (P.hiTone - P.loTone) * r() });
          }
        }
        wrapped(() => { for (const t of tiles) { ctx.fillStyle = css([t.t, t.t * (0.97 + 0.03 * r()), t.t * 0.96], 1); ctx.fill(t.p); } });
        cloud(ctx, r, S, wrapped, P.moss, 9, 0.12, 0.45, 10);
        cloud(ctx, r, S, wrapped, P.grime, 6, 0.16, 0.35, 16);
        grain(ctx, r, S, wrapped, P.joint, 2500, 0.08);
      });
      bind(materials.tile, cv, P.bump);
      bind(materials.green, cv, P.bump);
    }
    // Pediment: the carved gilt field -- a central flame with tiers of mirrored kranok scrolls
    // over red lacquer, drawn as stroked curves, plus the sawtooth border along both rakes. The
    // canvas is absolute, clamped, and mapped over each pediment's own triangle, apex at the top.
    {
      const P = W.pediment;
      bind(materials.carved, makeTile(7, (ctx, r, S) => {
        ctx.fillStyle = P.ground; ctx.fillRect(0, 0, S, S);
        const mid = S / 2;
        const scroll = (x: number, y: number, w: number, h: number, dir: number, lw: number, col: string) => {
          ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.bezierCurveTo(x + dir * w * 0.2, y - h * 0.6, x + dir * w * 0.9, y - h * 0.9, x + dir * w * 0.6, y - h * 0.35);
          ctx.bezierCurveTo(x + dir * w * 0.45, y - h * 0.1, x + dir * w * 0.25, y - h * 0.2, x + dir * w * 0.35, y - h * 0.45);
          ctx.stroke();
        };
        // tiers of scrolls climbing the triangle, each row narrower than the one below
        for (let row = 0; row < 9; row++) {
          const y = S * (0.97 - row * 0.095), half = mid * (0.94 - row * 0.10);
          const n = 7 - Math.floor(row / 2);
          for (let i = 0; i < n; i++) {
            const x = half * (i + 0.5) / n, w = half / n * 1.1, h = S * 0.11;
            for (const dir of [-1, 1]) {
              scroll(mid + dir * x, y, w, h, dir, 6, P.gold);
              scroll(mid + dir * x, y, w * 0.8, h * 0.8, dir, 2, P.goldHi);
              scroll(mid + dir * (x + w * 0.5), y - h * 0.15, w * 0.5, h * 0.5, -dir, 2.5, P.goldLo);
            }
          }
        }
        // central flame: nested pointed leaves up the axis
        for (let k = 0; k < 5; k++) {
          const y0 = S * (0.98 - k * 0.19), h = S * 0.22, w = S * (0.11 - k * 0.012);
          ctx.fillStyle = k % 2 ? P.goldHi : P.gold;
          ctx.beginPath(); ctx.moveTo(mid, y0);
          ctx.quadraticCurveTo(mid + w, y0 - h * 0.45, mid, y0 - h);
          ctx.quadraticCurveTo(mid - w, y0 - h * 0.45, mid, y0); ctx.fill();
          ctx.fillStyle = P.ground;
          ctx.beginPath(); ctx.moveTo(mid, y0 - h * 0.12);
          ctx.quadraticCurveTo(mid + w * 0.4, y0 - h * 0.45, mid, y0 - h * 0.82);
          ctx.quadraticCurveTo(mid - w * 0.4, y0 - h * 0.45, mid, y0 - h * 0.12); ctx.fill();
        }
        // sawtooth borders along both rakes and the base
        ctx.fillStyle = P.goldHi;
        const teeth = 26;
        for (let i = 0; i < teeth; i++) {
          const t0 = i / teeth, t1 = (i + 0.5) / teeth, t2 = (i + 1) / teeth;
          for (const dir of [-1, 1]) {
            const px = (t: number) => mid + dir * mid * 0.97 * (1 - t), py = (t: number) => S * (0.03 + 0.95 * (1 - t));
            ctx.beginPath(); ctx.moveTo(px(t0), py(t0)); ctx.lineTo(px(t1) + dir * 9, py(t1) - 9); ctx.lineTo(px(t2), py(t2)); ctx.fill();
          }
          ctx.beginPath(); ctx.moveTo(t0 * S, S * 0.985); ctx.lineTo(t1 * S, S * 0.955); ctx.lineTo(t2 * S, S * 0.985); ctx.fill();
        }
        // sparkle: small bright discs at the scroll eyes
        ctx.fillStyle = P.goldHi;
        for (let i = 0; i < 60; i++) {
          const t = r(), y = S * (0.15 + 0.8 * t), x = mid + (r() - 0.5) * mid * 1.7 * (0.15 + 0.85 * t);
          ctx.beginPath(); ctx.arc(x, y, 2 + 2 * r(), 0, Math.PI * 2); ctx.fill();
        }
      }), 0.02, false);
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
  const root = createUbosotModel(options);
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
