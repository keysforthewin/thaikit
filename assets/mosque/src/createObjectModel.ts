import * as THREE from 'three';

/**
 * Mosque -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 14.00 x 18.00 x 16.00 m, origin base-center, +Y up.
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
    "id": "mosque",
    "name": "Mosque",
    "exportName": "Mosque",
    "envelope": "Envelope 14.00 x 18.00 x 16.00 m, origin base-center, +Y up.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
    "materials": [
      {
        "id": "white",
        "color": 11711150,
        "roughness": 0.93,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "dome",
        "color": 10199181,
        "roughness": 0.72,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "green",
        "color": 9475451,
        "roughness": 0.72,
        "metalness": 0
      },
      {
        "id": "deck",
        "color": 10986647,
        "roughness": 0.95,
        "metalness": 0
      },
      {
        "id": "dark",
        "color": 5133898,
        "roughness": 0.96,
        "metalness": 0
      },
      {
        "id": "gold",
        "color": 9800822,
        "roughness": 0.38,
        "metalness": 0.3,
        "envMapIntensity": 1.2
      }
    ],
    "geometry": {
      "court": {
        "hx": 7,
        "hz": 8,
        "t": 0.45,
        "h": 2.3,
        "gateHalf": 1.55,
        "pylon": 0.75,
        "gateH": 3.3,
        "gate": {
          "w": 1.7,
          "spring": 1.6,
          "rise": 1.35,
          "shoulder": 0.1
        }
      },
      "hall": {
        "hx": 4.6,
        "zBack": -5.4,
        "zFront": 4.2,
        "y0": 0,
        "y1": 7.2
      },
      "deck": {
        "y0": 7.2,
        "y1": 7.34
      },
      "parapet": {
        "y0": 7.2,
        "y1": 7.95,
        "band": 0.3
      },
      "arch": {
        "count": 5,
        "open": [
          1,
          2,
          3
        ],
        "w": 1.22,
        "spring": 4.65,
        "rise": 1.15,
        "shoulder": 0.09,
        "band": 0.2,
        "sill": 0,
        "depth": 0.42,
        "pitch": 1.86
      },
      "drum": {
        "sqY": [
          7.34,
          8.55
        ],
        "sqHalf": 2.85,
        "cylY": [
          8.55,
          9.55
        ],
        "cylR": 2.4
      },
      "dome": {
        "y0": 9.45,
        "y1": 13.3,
        "r": 2.58,
        "ribs": 22,
        "amp": 0.03,
        "seg": 88,
        "steps": 12
      },
      "valley": [
        0.33,
        0.42,
        0.35
      ],
      "small": {
        "at": [
          [
            -3.4,
            -2.9
          ],
          [
            3.4,
            -2.9
          ],
          [
            -3.4,
            2.9
          ],
          [
            3.4,
            2.9
          ]
        ],
        "drumY": [
          7.21,
          8
        ],
        "drumR": 1.02,
        "domeY": [
          7.95,
          9.35
        ],
        "domeR": 1.1,
        "ribs": 16,
        "amp": 0.035,
        "seg": 64,
        "steps": 8
      },
      "minaret": {
        "x": -5.75,
        "z": -6.6,
        "half": 0.62,
        "y1": 13.6,
        "balconyY": [
          13.6,
          14.25
        ],
        "balconyHalf": 1.02,
        "upperY": [
          14.25,
          15.8
        ],
        "upperR": 0.52,
        "domeY": [
          15.7,
          17.5
        ],
        "domeR": 0.78,
        "ribs": 14,
        "amp": 0.04,
        "seg": 56,
        "steps": 8
      },
      "finials": [
        [
          -3.4,
          9.25,
          -2.9,
          0.48
        ],
        [
          3.4,
          9.25,
          -2.9,
          0.48
        ],
        [
          -3.4,
          9.25,
          2.9,
          0.48
        ],
        [
          3.4,
          9.25,
          2.9,
          0.48
        ]
      ],
      "ornaments": [
        [
          0,
          13.15,
          0,
          1,
          2.12,
          0.3
        ],
        [
          -5.75,
          17.4849,
          -6.6,
          0.25,
          0.5151,
          0.11
        ]
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

export function createMosqueModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Mosque';

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


  /* ---------------------------------------------------------------- the Moorish arch
   * The arch the plate and the Meshy proxy's front elevation both show on the doorways, the blind
   * niches and the gate: vertical jambs, a shoulder that steps OUT at the spring (the horseshoe
   * overhang), a round lobe, and an ogee point. The two-centred lancet in the shared preamble has
   * none of that and read as a chapel window. The lobe is a circle centred a little above the spring
   * whose widest point is the shoulder; the point is a quadratic from the lobe's tangent to the apex,
   * so the outline is tangent-continuous at the inflection. */
  const moorishArchPath = (target: THREE.Path, w: number, spring: number, rise: number, sill: number,
                           shoulder: number) => {
    const hw = w / 2, sw = hw + shoulder;
    const a = 0.22 * sw, R = Math.hypot(sw, a), cy = spring + a;
    const th = Math.asin(Math.min(0.985, Math.max(0.5, (0.72 * rise - a) / R)));
    const px = R * Math.cos(th), py = cy + R * Math.sin(th);
    const tx = -Math.sin(th), ty = Math.cos(th);
    const dx = Math.cos(1.2566), dy = -Math.sin(1.2566);
    const ax = 0, ay = spring + rise;
    const det = tx * (-dy) - (-dx) * ty;
    let s = ((ax - px) * (-dy) - (-dx) * (ay - py)) / det;
    if (!(s > 0) || !isFinite(s)) s = 0.1 * R;
    const cxp = px + s * tx, cyp = py + s * ty;
    const th0 = -Math.asin(a / R);
    const n = 8;
    target.moveTo(hw, sill);
    target.lineTo(hw, spring);
    if (shoulder > 0) target.lineTo(sw, spring);
    for (let i = 1; i <= n; i++) { const t = th0 + (th - th0) * (i / n); target.lineTo(R * Math.cos(t), cy + R * Math.sin(t)); }
    target.quadraticCurveTo(cxp, cyp, ax, ay);
    target.quadraticCurveTo(-cxp, cyp, -px, py);
    for (let i = n - 1; i >= 0; i--) { const t = th0 + (th - th0) * (i / n); target.lineTo(-R * Math.cos(t), cy + R * Math.sin(t)); }
    target.lineTo(-hw, spring);
    target.lineTo(-hw, sill);
    target.closePath();
  };
  const moorishArchShape = (w: number, spring: number, rise: number, sill: number, shoulder: number,
                            hole?: { w: number, spring: number, rise: number, sill: number, shoulder: number }) => {
    const shape = new THREE.Shape();
    moorishArchPath(shape, w, spring, rise, sill, shoulder);
    if (hole) { const p = new THREE.Path(); moorishArchPath(p, hole.w, hole.spring, hole.rise, hole.sill, hole.shoulder); shape.holes.push(p); }
    return shape;
  };
  /** A flat crescent: outer circle R at the origin, inner circle ri offset by off towards +x, the
   *  body on -x and the horns at +x. Sampled as a polygon so it can be extruded as one plate. */
  const crescentShape = (R: number, ri: number, off: number, n: number) => {
    const xi = (R * R - ri * ri + off * off) / (2 * off);
    const yi = Math.sqrt(Math.max(0, R * R - xi * xi));
    const a0 = Math.atan2(yi, xi), b0 = Math.atan2(yi, xi - off);
    const sh = new THREE.Shape();
    sh.moveTo(xi, yi);
    for (let i = 1; i <= n; i++) { const t = a0 + (2 * Math.PI - 2 * a0) * (i / n); sh.lineTo(R * Math.cos(t), R * Math.sin(t)); }
    for (let i = 1; i < n; i++) { const t = -b0 - (2 * Math.PI - 2 * b0) * (i / n); sh.lineTo(off + ri * Math.cos(t), ri * Math.sin(t)); }
    sh.closePath();
    return sh;
  };

  /* ---------------------------------------------------------------- courtyard wall
   * Four runs and a gate, all the same render and therefore ONE component and ONE draw call. The
   * side runs carry the full depth and the front and back runs stop between them: run to full
   * width, every corner would put two outer faces in the same plane facing the same way. */
  {
    const C = G.court;
    const cc = C.hx - C.t / 2, ci = C.hx - C.t, dd = C.hz - C.t / 2, di = C.hz - C.t;
    const parts: THREE.BufferGeometry[] = [
      boxAt(-cc, C.h / 2, 0, C.t, C.h, C.hz * 2),
      boxAt(cc, C.h / 2, 0, C.t, C.h, C.hz * 2),
      boxAt(0, C.h / 2, -dd, ci * 2, C.h, C.t),
    ];
    // The +Z run is broken by the gate: two segments flanking it and ONE gate block spanning the
    // pylons and the head together, with the doorway cut through it as a hole. The first build stood
    // two pylon boxes inside a pointed-arch plate of the same depth, which put the plate's point
    // above the block and the pylons' faces in the plate's plane; the plate's gate is a flat-topped
    // block with a Moorish arch through it, and one extrusion says exactly that.
    const segLen = ci - C.gateHalf - C.pylon;
    parts.push(boxAt(-(C.gateHalf + C.pylon + segLen / 2), C.h / 2, dd, segLen, C.h, C.t));
    parts.push(boxAt(C.gateHalf + C.pylon + segLen / 2, C.h / 2, dd, segLen, C.h, C.t));
    {
      const GW = (C.gateHalf + C.pylon) * 2, GA = C.gate;
      const block = new THREE.Shape();
      block.moveTo(-GW / 2, 0); block.lineTo(GW / 2, 0); block.lineTo(GW / 2, C.gateH);
      block.lineTo(-GW / 2, C.gateH); block.closePath();
      const hole = new THREE.Path();
      moorishArchPath(hole, GA.w, GA.spring, GA.rise, 0, GA.shoulder);
      block.holes.push(hole);
      const gate = new THREE.ExtrudeGeometry(block, { depth: C.t, bevelEnabled: false, curveSegments: 8 });
      gate.translate(0, 0, dd - C.t / 2);
      gate.computeVertexNormals();
      parts.push(gate);
    }

    const geo = mergeGeos(parts);
    // The plate's walls are streaked black with rain wash from the top down -- the reverse of every
    // other prop in this batch, where the dirt collects at the bottom. The tint therefore runs the
    // other way: clean at the base, darkening towards the coping.
    tintByHeight(geo, C.h, 0.30, [0.72, 0.73, 0.70]);
    add('court-wall', 'Courtyard wall and gate', geo, 'white');
    colliders['court-wall'] = {
      shape: 'box', localCenter: [0, 9.0, 0], halfExtents: [7.0, 9.0, 8.0],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level '
           + 'builder collides with the compound, not with the minaret separately.',
    };
  }

  /* ---------------------------------------------------------------- prayer hall
   * A SOLID white block. The mosque is an exterior shell only ever seen from outside, so there is
   * no interior: it would cost draw calls, geometries and VRAM for something nobody sees, and a
   * solid body also means the arcade needs no opening cut in it. */
  {
    const H = G.hall, D = G.deck, P = G.parapet;
    const parts: THREE.BufferGeometry[] = [
      boxAt(0, (H.y0 + H.y1) / 2, (H.zBack + H.zFront) / 2, H.hx * 2, H.y1 - H.y0, H.zFront - H.zBack),
      boxAt(0, (D.y0 + D.y1) / 2, (H.zBack + H.zFront) / 2, H.hx * 2 - 0.30, D.y1 - D.y0, H.zFront - H.zBack - 0.30),
    ];
    // Parapet ring, standing 0.08 m proud of the walls -- a coping drip edge, and what keeps the
    // parapet faces off the wall planes.
    const px = H.hx + 0.08, pz0 = H.zBack - 0.08, pz1 = H.zFront + 0.08, t = 0.34;
    const py = (P.y0 + P.y1) / 2, ph = P.y1 - P.y0;
    parts.push(boxAt(-(px - t / 2), py, (pz0 + pz1) / 2, t, ph, pz1 - pz0));
    parts.push(boxAt(px - t / 2, py, (pz0 + pz1) / 2, t, ph, pz1 - pz0));
    parts.push(boxAt(0, py, pz0 + t / 2, (px - t) * 2, ph, t));
    parts.push(boxAt(0, py, pz1 - t / 2, (px - t) * 2, ph, t));
    const geo = mergeGeos(parts);
    tintByHeight(geo, H.y1, 1.20, [0.66, 0.68, 0.64]);
    add('hall', 'Prayer hall block', geo, 'white');
  }

  /* ---------------------------------------------------------------- roof deck
   * The flat area between the parapet and the domes, in its own grey material because the plate
   * shows it as a distinctly different surface from the rendered walls -- a screed, not a render. */
  {
    const H = G.hall, D = G.deck;
    add('roof-deck', 'Roof deck', boxAt(0, D.y1 - 0.03, (H.zBack + H.zFront) / 2,
      H.hx * 2 - 0.44, 0.06, H.zFront - H.zBack - 0.44), 'deck');
  }

  /* ---------------------------------------------------------------- parapet band
   * A green stripe along the top of the parapet ring. Its own component because it is the only
   * FLAT green on the prop: the domes carry a striped vertex colour and cannot share a material
   * with a surface that has to stay one value. */
  {
    const H = G.hall, P = G.parapet;
    const parts: THREE.BufferGeometry[] = [];
    // Parapet band: a green stripe along the top of the parapet ring, standing 0.03 m proud of it.
    const px = H.hx + 0.11, pz0 = H.zBack - 0.11, pz1 = H.zFront + 0.11, t = 0.30;
    // Top of the band at 7.99, not level with the parapet's own 7.95: level, the band's top face
    // and the parapet's top face are the same plane facing the same way over 91 m2 -- the largest
    // single coplanar pair found anywhere in this batch.
    const by = P.y1 + 0.04 - P.band / 2;
    parts.push(boxAt(-(px - t / 2), by, (pz0 + pz1) / 2, t, P.band, pz1 - pz0));
    parts.push(boxAt(px - t / 2, by, (pz0 + pz1) / 2, t, P.band, pz1 - pz0));
    parts.push(boxAt(0, by, pz0 + t / 2, (px - t) * 2, P.band, t));
    parts.push(boxAt(0, by, pz1 - t / 2, (px - t) * 2, P.band, t));
    add('parapet-band', 'Green parapet band', mergeGeos(parts), 'green');
  }

  /* ---------------------------------------------------------------- the great dome and the minaret's
   * Both ribbed, both in the striped dome material, merged into ONE component and ONE draw call.
   *
   * The ribs are generated geometry rather than a material: LatheGeometry revolves one profile at
   * one radius per height, and a rib is a variation AROUND the axis. A smooth green hemisphere
   * reads as a water tank. */
  {
    const D = G.dome, MN = G.minaret, V = G.valley as number[];
    const parts: THREE.BufferGeometry[] = [];
    // The great dome: a segmental profile a little more than a hemisphere, so it springs from a
    // slight overhang the way the plate's does rather than sitting on the drum like a lid.
    const prof: number[][] = [];
    for (let i = 0; i <= D.steps; i++) {
      const t2 = i / D.steps;
      prof.push([D.r * Math.cos(t2 * Math.PI * 0.5) * (1 - 0.06 * t2 * t2),
                 D.y0 + (D.y1 - D.y0) * Math.sin(t2 * Math.PI * 0.5)]);
    }
    parts.push(ribbedDome(prof, D.ribs, D.amp, D.seg, V));

    // The minaret's own dome, same construction at a sixth the size.
    const mp: number[][] = [];
    for (let i = 0; i <= MN.steps; i++) {
      const t2 = i / MN.steps;
      mp.push([MN.domeR * Math.cos(t2 * Math.PI * 0.5),
               MN.domeY[0] + (MN.domeY[1] - MN.domeY[0]) * Math.sin(t2 * Math.PI * 0.5)]);
    }
    const md = ribbedDome(mp, MN.ribs, MN.amp, MN.seg, V);
    md.translate(MN.x, 0, MN.z);
    parts.push(md);
    add('domes', 'Great dome and minaret dome', mergeGeos(parts), 'dome');
  }

  /* ---------------------------------------------------------------- dome drum
   * A square podium and a round drum under the great dome. Both white, one component. */
  {
    const DR = G.drum;
    add('drum', 'Dome drum', mergeGeos([
      boxAt(0, (DR.sqY[0] + DR.sqY[1]) / 2, 0, DR.sqHalf * 2, DR.sqY[1] - DR.sqY[0], DR.sqHalf * 2),
      cylAt(0, (DR.cylY[0] + DR.cylY[1]) / 2, 0, DR.cylR, DR.cylR * 1.04, DR.cylY[1] - DR.cylY[0], 32),
    ]), 'white');
  }

  /* ---------------------------------------------------------------- corner domes
   * Four, as TWO InstancedMesh systems on one placement schedule -- a white drum and a green
   * ribbed dome. Two systems rather than one because InstancedMesh takes a single material. */
  {
    const S = G.small;
    const drum = cylAt(0, 0, 0, S.drumR, S.drumR * 1.06, S.drumY[1] - S.drumY[0], 20);
    addInst('small-drums', 'Corner dome drums', drum, 'white',
      (S.at as number[][]).map(([x, z]) =>
        new THREE.Matrix4().setPosition(x, (S.drumY[0] + S.drumY[1]) / 2, z)));

    const prof: number[][] = [];
    for (let i = 0; i <= S.steps; i++) {
      const t = i / S.steps;
      prof.push([S.domeR * Math.cos(t * Math.PI * 0.5),
                 (S.domeY[1] - S.domeY[0]) * Math.sin(t * Math.PI * 0.5)]);
    }
    addInst('small-domes', 'Corner domes', ribbedDome(prof, S.ribs, S.amp, S.seg, G.valley as number[]), 'dome',
      (S.at as number[][]).map(([x, z]) => new THREE.Matrix4().setPosition(x, S.domeY[0], z)));
  }

  /* ---------------------------------------------------------------- minaret
   * The registry notes say the pairing of one great dome and a single slender minaret is what reads
   * at distance and that neither element works alone, so the minaret is not dressing: it is half
   * the silhouette, and it is what sets the declared 18 m. Shaft, balcony and upper stage merged
   * into one white component. */
  {
    const MN = G.minaret;
    add('minaret', 'Minaret', mergeGeos([
      boxAt(MN.x, MN.y1 / 2, MN.z, MN.half * 2, MN.y1, MN.half * 2),
      // The balcony slab, standing clear of the shaft on every side.
      boxAt(MN.x, (MN.balconyY[0] + MN.balconyY[1]) / 2, MN.z,
        MN.balconyHalf * 2, MN.balconyY[1] - MN.balconyY[0], MN.balconyHalf * 2),
      // A thinner parapet lip on top of it, inset so no two top faces share a plane.
      boxAt(MN.x, MN.balconyY[1] + 0.14, MN.z, MN.balconyHalf * 1.82, 0.28, MN.balconyHalf * 1.82),
      cylAt(MN.x, (MN.upperY[0] + MN.upperY[1]) / 2 + 0.16, MN.z,
        MN.upperR, MN.upperR * 1.05, MN.upperY[1] - MN.upperY[0] - 0.32, 16),
    ]), 'white');
  }

  /* ---------------------------------------------------------------- arcade
   * Five Moorish arches across the hall's front elevation -- three doorways and two blind niches --
   * as instanced systems: a white surround with a real aperture on every bay, a dark panel behind
   * each open bay, and a green field with a raised white panel in each blind one.
   *
   * The arch is the MOORISH one the plate and the proxy's front elevation both show -- shoulder,
   * lobe and ogee point -- not the two-centred lancet of the first build, which read as a chapel
   * window and stopped 2.4 m short of the parapet where the plate's surrounds all but touch it. */
  {
    const H = G.hall, A = G.arch;
    const face = H.zFront;
    const b = A.band;
    const shape = moorishArchShape(A.w + 2 * b, A.spring - 0.4 * b, A.rise + 1.25 * b, 0, A.shoulder,
      { w: A.w, spring: A.spring, rise: A.rise, sill: 0, shoulder: A.shoulder });
    const frame = new THREE.ExtrudeGeometry(shape, { depth: A.depth, bevelEnabled: false, curveSegments: 10 });
    frame.translate(0, 0, face - A.depth + 0.20);
    frame.computeVertexNormals();
    const xs: number[] = [];
    for (let i = 0; i < A.count; i++) xs.push((i - (A.count - 1) / 2) * A.pitch);
    const at = (idx: number[]) => idx.map((i) => new THREE.Matrix4().setPosition(xs[i], 0, 0));
    const open = A.open as number[];
    const all = xs.map((_, i) => i);
    const blind = all.filter((i) => !open.includes(i));
    addInst('arch-frames', 'Arcade surrounds', frame, 'white', at(all));

    // The dark behind each open bay: 0.02 m PROUD of the wall, not recessed into it. The hall is a
    // solid mass, so a panel sunk into it is inside the solid and invisible. Depth 0.05 at face+0.02
    // keeps the void's front at z=4.27, clear of the parapet's own +Z face at 4.28. At 0.06 the two
    // shared that plane over 5.35 m2, five times over.
    const voidShape = moorishArchShape(A.w, A.spring, A.rise, A.sill, A.shoulder);
    const vg = new THREE.ExtrudeGeometry(voidShape, { depth: 0.05, bevelEnabled: false, curveSegments: 10 });
    vg.translate(0, 0, face + 0.02);
    vg.computeVertexNormals();
    addInst('arch-voids', 'Arcade openings', vg, 'dark', at(open));

    // The blind bays: the plate fills the outer two surrounds with the parapet's green and sets a
    // smaller white arch panel inside each, the same outline again. Field front at 4.245 and panel
    // front at 4.26, both under the voids' 4.27 and the parapet's 4.28; the panel's back sits
    // inside the field's slab.
    const fg = new THREE.ExtrudeGeometry(voidShape, { depth: 0.025, bevelEnabled: false, curveSegments: 10 });
    fg.translate(0, 0, face + 0.02);
    fg.computeVertexNormals();
    addInst('blind-fields', 'Blind niche fields', fg, 'green', at(blind));
    const inset = 0.30;
    const pw = A.w - 2 * inset;
    const panel = moorishArchShape(pw, A.spring - 0.4 * inset, 0.95 * (pw + 1.4 * A.shoulder), 0.45, A.shoulder * 0.7);
    const pg = new THREE.ExtrudeGeometry(panel, { depth: 0.02, bevelEnabled: false, curveSegments: 8 });
    pg.translate(0, 0, face + 0.04);
    pg.computeVertexNormals();
    addInst('blind-panels', 'Blind niche panels', pg, 'white', at(blind));
  }

  /* ---------------------------------------------------------------- finials and crescents
   * Four gilt spikes on the corner domes, and the crescent ornament over the great dome and the
   * minaret, MERGED into one component and one draw call. The ornament is the plate's at 4x zoom:
   * a shallow gilt cap on the crown, a ball, a neck, a small bulb, a spike and a FLAT crescent plate
   * with its horns to the upper right. The first build's crescent was a square-section horseshoe
   * of eleven boxes opening downward over a bloated teardrop, and read as a hook on a bulb. */
  {
    const F = G.finials as number[][];
    const parts: THREE.BufferGeometry[] = [];
    for (const [x, y, z, s] of F) {
      const g = lathe([[0, 0], [0.16, 0.03], [0.20, 0.16], [0.10, 0.30],
                       [0.13, 0.42], [0.07, 0.58], [0, 0.78]], 14);
      g.scale(s, s, s);
      g.translate(x, y, z);
      parts.push(g);
    }
    for (const [x, y0, z, s, totalH, R] of G.ornaments as number[][]) {
      // The cap's rim sits 0.05 m into the dome crown, so the ribs run under it and it never floats.
      const cap = lathe([[0, 0], [0.46, 0], [0.46, 0.05], [0.32, 0.20], [0.13, 0.33], [0.06, 0.38], [0.06, 0.46]], 16);
      cap.scale(s, s, s); cap.translate(x, y0, z); parts.push(cap);
      const ball = new THREE.SphereGeometry(0.17 * s, 14, 10);
      ball.translate(x, y0 + 0.60 * s, z); parts.push(ball);
      parts.push(cylAt(x, y0 + 0.84 * s, z, 0.045 * s, 0.055 * s, 0.22 * s, 10));
      const bulb = lathe([[0, 0], [0.10, 0.03], [0.12, 0.10], [0.085, 0.19], [0.04, 0.27], [0.03, 0.31]], 12);
      bulb.scale(s, s, s); bulb.translate(x, y0 + 0.92 * s, z); parts.push(bulb);
      // The spike runs from the bulb to the crescent's underside, however tall the stack is; the
      // crescent's centre is set so its top is exactly totalH above the base.
      const spikeBase = y0 + 1.20 * s, cBottom = y0 + totalH - 2 * R + 0.03;
      if (cBottom > spikeBase + 0.02) parts.push(cylAt(x, (spikeBase + cBottom) / 2, z, 0.025 * s, 0.032 * s, cBottom - spikeBase, 8));
      const t = Math.max(0.035, 0.16 * R);
      const cg = new THREE.ExtrudeGeometry(crescentShape(R, 0.85 * R, 0.28 * R, 14), { depth: t, bevelEnabled: false });
      cg.translate(0, 0, -t / 2);
      cg.rotateZ(Math.PI * 0.28);
      cg.translate(x, y0 + totalH - R, z);
      cg.computeVertexNormals();
      parts.push(cg);
    }
    add('finials', 'Gilt finials and crescents', mergeGeos(parts), 'gold');
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
  const root = createMosqueModel(options);
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
