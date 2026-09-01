import * as THREE from 'three';

/**
 * Student Dormitory Block -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 14.90 x 24.00 x 13.30 m, origin base-center, +Y up.
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
    "id": "student-dormitory-block",
    "name": "Student Dormitory Block",
    "exportName": "StudentDormitoryBlock",
    "envelope": "Envelope 14.90 x 24.00 x 13.30 m, origin base-center, +Y up.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
    "materials": [
      {
        "id": "tile",
        "color": 14469544,
        "roughness": 0.85,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "band",
        "color": 6707012,
        "roughness": 0.8,
        "metalness": 0.05
      },
      {
        "id": "paint",
        "color": 14340800,
        "roughness": 0.9,
        "metalness": 0
      },
      {
        "id": "deck",
        "color": 11183000,
        "roughness": 0.95,
        "metalness": 0
      },
      {
        "id": "grille",
        "color": 5794140,
        "roughness": 0.45,
        "metalness": 0.1
      },
      {
        "id": "recess",
        "color": 6574138,
        "roughness": 0.9,
        "metalness": 0
      },
      {
        "id": "cond",
        "color": 12170666,
        "roughness": 0.6,
        "metalness": 0.15,
        "vertexColors": true
      },
      {
        "id": "cloth",
        "color": 16777215,
        "roughness": 0.9,
        "metalness": 0,
        "vertexColors": true,
        "doubleSided": true
      },
      {
        "id": "streak",
        "color": 16777215,
        "roughness": 0.9,
        "metalness": 0,
        "opacity": 0.85
      },
      {
        "id": "shutter",
        "color": 9868943,
        "roughness": 0.55,
        "metalness": 0.25
      },
      {
        "id": "glass",
        "color": 5204578,
        "roughness": 0.12,
        "metalness": 0,
        "opacity": 0.92,
        "envMapIntensity": 1
      },
      {
        "id": "sign",
        "color": 16777215,
        "roughness": 0.75,
        "metalness": 0
      },
      {
        "id": "steel",
        "color": 6834232,
        "roughness": 0.75,
        "metalness": 0.3
      },
      {
        "id": "tank",
        "color": 9077882,
        "roughness": 0.65,
        "metalness": 0.35
      }
    ],
    "geometry": {
      "hx": 7.18,
      "hz": 6.4,
      "t": 0.3,
      "innerX": 6.88,
      "innerZ": 6.1,
      "facadeT": 0.3,
      "top": 20,
      "deckY": 18.6,
      "deckT": 0.2,
      "floors": [
        3.42,
        6.42,
        9.42,
        12.42,
        15.42
      ],
      "bays": [
        -5.4,
        -2.77,
        2.77,
        5.4
      ],
      "pitch": 3,
      "win": {
        "w": 1.7,
        "y0": 1.15,
        "y1": 2.55,
        "inset": 0.15,
        "t": 0.1
      },
      "band": {
        "h": 0.3,
        "proud": 0.03
      },
      "balcony": {
        "half": 0.95,
        "boxHalf": 1.075,
        "parapet": 1.15,
        "open0": 1.13,
        "open1": 2.71,
        "proud": 0.45,
        "liner": 0.3,
        "back": 5.2
      },
      "fascia": {
        "y0": 3.3,
        "y1": 3.78,
        "proud": 0.45
      },
      "ground": {
        "top": 3.3,
        "holeY0": 0.1,
        "holeY1": 3.1,
        "entrance": {
          "half": 0.95,
          "y1": 3.2,
          "depth": 2
        },
        "shutters": [
          [
            -6.5,
            -3.9
          ],
          [
            -3.6,
            -1.3
          ],
          [
            1.3,
            3.9
          ]
        ],
        "glass": [
          4.2,
          6.5
        ],
        "inset": 0.15
      },
      "stair": {
        "steps": 6,
        "rise": 0.16,
        "tread": 0.26,
        "z0": 6
      },
      "sign": {
        "x0": -2.7,
        "x1": 2.8,
        "y0": 18.25,
        "y1": 19.5,
        "t": 0.15,
        "text": "DORMITORY",
        "ink": "#9a3538",
        "ground": "#ebe9e6"
      },
      "cond": {
        "w": 0.62,
        "h": 0.5,
        "d": 0.27,
        "fanR": 0.19,
        "fanTint": 0.5,
        "sideZ": [
          -0.95,
          -0.2
        ],
        "sideDy": 2.1,
        "balconyX": -0.5,
        "balconyDy": 2.4
      },
      "laundry": {
        "shirtFloors": [
          1,
          2
        ],
        "towelFloor": 3,
        "railY": 2.42
      },
      "tower": {
        "cx": 4.6,
        "cz": -3.6,
        "baseHalf": 1.5,
        "topHalf": 1.05,
        "y0": 18.8,
        "y1": 22,
        "tiers": 3,
        "leg": 0.14,
        "brace": 0.08,
        "platform": 2.5,
        "platformT": 0.08,
        "railH": 1,
        "ladderZ": -2.05,
        "rung": 0.3
      },
      "tank": {
        "r": 0.88,
        "h": 1.92
      },
      "grooves": {
        "u": [
          0.273,
          0.617,
          0.93
        ],
        "y": [
          3.55,
          6.27,
          9.27,
          12.27,
          15.27,
          18.27
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

export function createStudentDormitoryBlockModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Student Dormitory Block';

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
  const hx = G.hx as number, hz = G.hz as number, ix = G.innerX as number, iz = G.innerZ as number;
  const zFace = hz, zBack = hz - G.facadeT;          // 6.40 / 6.10: the facade slab
  const B = G.balcony, W = G.win, GR = G.ground, TW = G.tower;
  const inBrowser = typeof document !== 'undefined';

  /* ---------------------------------------------------------------- helpers */
  const span = (x0: number, x1: number, y0: number, y1: number, z0: number, z1: number) =>
    boxAt((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2, x1 - x0, y1 - y0, z1 - z0);
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
  // A plan in [x, z] pairs as a Shape whose second axis is -z, so extrudeSlab's rotateX(-PI/2)
  // lands it at the intended world z.
  const planShape = (pts: number[][]) => {
    const sh = new THREE.Shape();
    sh.moveTo(pts[0][0], -pts[0][1]);
    for (let i = 1; i < pts.length; i++) sh.lineTo(pts[i][0], -pts[i][1]);
    sh.closePath();
    return sh;
  };
  // world-planar UVs by dominant normal, in metres over one tile
  const planarUV = (geo: THREE.BufferGeometry, tile: number) => {
    const p = geo.getAttribute('position'), n = geo.getAttribute('normal');
    const uv = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
      let u: number, v: number;
      if (ay >= ax && ay >= az) { u = p.getX(i); v = p.getZ(i); }
      else if (ax >= az) { u = p.getZ(i); v = p.getY(i); }
      else { u = p.getX(i); v = p.getY(i); }
      uv[i * 2] = u / tile; uv[i * 2 + 1] = v / tile;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  };
  // a per-vertex linear multiplier wherever a predicate on (x, y, z) holds
  const tintWhere = (geo: THREE.BufferGeometry, rules: [(x: number, y: number, z: number) => boolean, number][]) => {
    const p = geo.getAttribute('position');
    const col = new Float32Array(p.count * 3).fill(1);
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      for (const [pred, k] of rules) if (pred(x, y, z)) { col[i * 3] = k; col[i * 3 + 1] = k; col[i * 3 + 2] = k; }
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    return geo;
  };
  const tintAll = (geo: THREE.BufferGeometry, k: number) => {
    const n = geo.getAttribute('position').count;
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * 3).fill(k), 3));
    return geo;
  };
  const colourAll = (geo: THREE.BufferGeometry, hex: number) => {
    const c = new THREE.Color(hex), n = geo.getAttribute('position').count;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
    geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    return geo;
  };
  // a box whose +Z face carries a canvas and whose other five faces sample a plain corner of it
  const facedBox = (w: number, h: number, d: number) => {
    const g = new THREE.BoxGeometry(w, h, d);
    const uv = g.getAttribute('uv') as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) if (i < 16 || i > 19) uv.setXY(i, 0.02, 0.02);
    return g;
  };
  const at = (x: number, y: number, z: number, yaw = 0) => new THREE.Matrix4().compose(
    new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
    new THREE.Vector3(1, 1, 1));
  // a square-section strut from a to b
  const strut = (a: number[], b: number[], s: number) => {
    const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2];
    const L = Math.hypot(dx, dy, dz);
    const g = new THREE.BoxGeometry(s, L, s);
    g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(dx, dy, dz).normalize()));
    g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2);
    return g;
  };
  // seeded LCG so every canvas is byte-identical on every build
  let seed = 31337;
  const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const canvas = (w: number, h: number) => {
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    return [c, c.getContext('2d', { willReadFrequently: true })!] as const;
  };
  const bind = (matId: string, c: HTMLCanvasElement, opts: { bump?: number, white?: boolean, repeat?: boolean } = {}) => {
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    if (opts.repeat !== false) { tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.RepeatWrapping; }
    tex.anisotropy = options.textureAnisotropy ?? 4;
    const m = materials[matId];
    m.map = tex;
    if (opts.white) m.color.set(0xffffff);
    if (opts.bump) { m.bumpMap = tex; m.bumpScale = opts.bump; }
    m.needsUpdate = true;
  };
  const softBlob = (ctx: CanvasRenderingContext2D, x: number, y: number, rx: number, ry: number, rgb: string, a: number) => {
    const gg = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
    gg.addColorStop(0, 'rgba(' + rgb + ', ' + a.toFixed(3) + ')'); gg.addColorStop(1, 'rgba(' + rgb + ', 0)');
    ctx.save(); ctx.translate(x, y); ctx.scale(rx, ry); ctx.fillStyle = gg; ctx.fillRect(-1, -1, 2, 2); ctx.restore();
  };
  const streakDown = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, len: number, rgb: string, a: number) => {
    const gg = ctx.createLinearGradient(0, y, 0, y + len);
    gg.addColorStop(0, 'rgba(' + rgb + ', ' + a.toFixed(3) + ')'); gg.addColorStop(1, 'rgba(' + rgb + ', 0)');
    ctx.fillStyle = gg; ctx.fillRect(x, y, w, len);
  };

  /* ---------------------------------------------------------------- the tiled shell
   * ONE component: the 0.30 m facade slab 0..20 with every window, balcony and shop opening as a
   * real hole; the balcony recess liners and floor plugs; the five tiled parapet boxes standing
   * 0.45 proud; the fascia canopy over the shops; the ground-floor body as a plan extrusion with
   * the entrance tunnel notched out of it. Every joint is an opposed pair or an overlap. */
  {
    const parts: THREE.BufferGeometry[] = [];
    const sh = rectShape(-ix, 0, ix, G.top);
    for (const S of F) {
      for (const bx of BX) rectHole(sh, bx - W.w / 2, S + W.y0, bx + W.w / 2, S + W.y1);
      rectHole(sh, -B.half, S + B.open0, B.half, S + B.open1);
    }
    for (const [x0, x1] of GR.shutters as number[][]) rectHole(sh, x0, GR.holeY0, x1, GR.holeY1);
    rectHole(sh, GR.glass[0], GR.holeY0, GR.glass[1], GR.holeY1);
    rectHole(sh, -GR.entrance.half, 0.02, GR.entrance.half, GR.entrance.y1);
    parts.push(extrudeAlongZ(sh, zBack, zFace));
    // balcony liners: side cheeks and ceiling continuing the reveal 1 cm inboard, and the floor
    // plug that hides the hole's bottom reveal inside itself
    for (const S of F) {
      for (const s of [-1, 1]) {
        const x0 = s * (B.half - 0.01), x1 = s * (B.half + B.liner);
        parts.push(span(Math.min(x0, x1), Math.max(x0, x1), S + B.open0 - 0.02, S + B.open1 + 0.25, B.back, zBack + 0.02));
      }
      parts.push(span(-B.half - B.liner, B.half + B.liner, S + B.open1 - 0.01, S + B.open1 + 0.25, B.back, zBack + 0.02));
      parts.push(span(-B.half - 0.02, B.half + 0.02, S + B.open0 - 0.08, S + B.parapet, B.back, zBack + 0.02));
    }
    // parapet boxes: the lowest sits on the fascia, which is its band
    F.forEach((S, k) => parts.push(span(-B.boxHalf, B.boxHalf, k === 0 ? G.fascia.y1 + 0.01 : S, S + B.parapet, zFace - 0.02, zFace + B.proud)));
    // fascia canopy over the shops, full width
    parts.push(span(-hx - 0.02, hx + 0.02, G.fascia.y0, G.fascia.y1, zFace - 0.02, zFace + G.fascia.proud));   // 2 cm past the flank plane so no bbox face is shared
    // ground-floor body with the entrance tunnel notched out of its front
    {
      const E = GR.entrance, zN = zFace - E.depth;
      const plan = planShape([[-ix, -iz], [ix, -iz], [ix, zBack], [E.half, zBack], [E.half, zN], [-E.half, zN], [-E.half, zBack], [-ix, zBack]]);
      parts.push(extrudeSlab(plan, 0, GR.top));
    }
    const shell = mergeGeos(parts);
    planarUV(shell, 2.0);
    const E = GR.entrance;
    tintWhere(shell, [
      [(x, y, z) => Math.abs(x) <= B.boxHalf + 0.2 && z <= zBack + 0.03 && F.some((S) => y >= S + B.open0 - 0.1 && y <= S + B.open1 + 0.3), 0.80],
      [(x, y, z) => Math.abs(x) <= E.half + 0.02 && y <= GR.top + 0.01 && z <= zFace - 0.005 && z >= zFace - E.depth - 0.02, 0.55],
    ]);
    add('shell', 'Tiled shell', shell, 'tile');
    colliders['shell'] = {
      shape: 'box', localCenter: [0, 12.0, 0.23], halfExtents: [7.45, 12.0, 6.63],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope including the tank tower, balcony boxes and flank condensers.',
    };
    if (inBrowser) {
      // 512 px = 2.0 m of mosaic: 40 x 40 tiles of 50 mm with 1.5 px grout at 0.72, per-tile tone
      // jitter of +-5 percent and a faint cloudy mottle. Multiplier space over white.
      const [c, ctx] = canvas(512, 512);
      ctx.fillStyle = '#b8b8b8'; ctx.fillRect(0, 0, 512, 512);
      const tp = 512 / 40;
      for (let r = 0; r < 40; r++) for (let q = 0; q < 40; q++) {
        const v = 245 + Math.round((rnd() - 0.5) * 26);
        ctx.fillStyle = 'rgb(' + v + ',' + (v - 1) + ',' + (v - 4) + ')';
        ctx.fillRect(q * tp + 0.8, r * tp + 0.8, tp - 1.6, tp - 1.6);
      }
      for (let i = 0; i < 60; i++) softBlob(ctx, rnd() * 512, rnd() * 512, 30 + rnd() * 70, 30 + rnd() * 70, '60, 55, 45', 0.03 + rnd() * 0.05);
      bind('tile', c, { bump: 0.004 });
    }
  }

  /* ---------------------------------------------------------------- the dark bands and the shopfront frame */
  {
    const parts: THREE.BufferGeometry[] = [];
    const bp = G.band.proud;
    F.forEach((S, k) => {
      const y0 = S + G.pitch - G.band.h + 0.01, y1 = S + G.pitch;
      if (k < F.length - 1) {
        parts.push(span(-hx - 0.01, -B.boxHalf, y0, y1, zFace - 0.01, zFace + bp));
        parts.push(span(B.boxHalf, hx + 0.01, y0, y1, zFace - 0.01, zFace + bp));
        parts.push(span(-B.boxHalf, B.boxHalf, y0, y1, zFace - 0.02, zFace + B.proud - 0.01));   // under the parapet box above, 1 cm behind its front
      } else {
        parts.push(span(-hx - 0.01, hx + 0.01, y0, y1, zFace - 0.01, zFace + bp));
      }
    });
    // shopfront frame: jambs, head, sill, door mullion, mid-rail and kick panel, proud of the pane
    const [gx0, gx1] = GR.glass as number[], zf0 = zFace - GR.inset + 0.02, zf1 = zf0 + 0.06;
    const y0 = GR.holeY0, y1 = GR.holeY1, doorX = gx0 + 1.0;
    parts.push(span(gx0 + 0.02, gx0 + 0.10, y0, y1, zf0, zf1));
    parts.push(span(gx1 - 0.10, gx1 - 0.02, y0, y1, zf0, zf1));
    parts.push(span(gx0 + 0.10, gx1 - 0.10, y1 - 0.08, y1, zf0, zf1));
    parts.push(span(gx0 + 0.10, gx1 - 0.10, y0, y0 + 0.10, zf0, zf1));
    parts.push(span(doorX - 0.04, doorX + 0.04, y0 + 0.10, y1 - 0.08, zf0, zf1));
    parts.push(span(gx0 + 0.10, doorX - 0.04, 1.0, 1.06, zf0, zf1));
    parts.push(span(gx0 + 0.10, doorX - 0.04, y0 + 0.10, 1.0, zf0 - 0.01, zf0 + 0.02));
    parts.push(span(doorX + 0.04, gx1 - 0.10, 0.85, 0.91, zf0, zf1));
    add('bands', 'Spandrel bands and shopfront frame', mergeGeos(parts), 'band');
  }

  /* ---------------------------------------------------------------- the painted flanks and rear
   * Two side walls and the rear wall, one cream component. The +X flank is the observed one; the
   * -X flank mirrors it and the rear is plain. UVs: u runs rear (0) to front (1) along each flank
   * and v is height over 20 m, so one canvas carries the panel grooves and the condenser drips at
   * their measured positions; the rear samples a plain column of the same canvas. */
  {
    const parts: THREE.BufferGeometry[] = [];
    const wallUV = (g: THREE.BufferGeometry, kind: 'px' | 'nx' | 'rear') => {
      const p = g.getAttribute('position');
      const uv = new Float32Array(p.count * 2);
      for (let i = 0; i < p.count; i++) {
        const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
        let u: number;
        if (kind === 'px') u = (z + hz) / (2 * hz);
        else if (kind === 'nx') u = (z + hz) / (2 * hz);
        else u = 0.12 + 0.06 * (x + hx) / (2 * hx);
        uv[i * 2] = u; uv[i * 2 + 1] = y / G.top;
      }
      g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
      return g;
    };
    // flank and rear tops 2 cm under the tiled parapet top so no bbox face is shared with the shell
    parts.push(wallUV(span(ix, hx, 0, G.top - 0.02, -hz, zFace - 0.01), 'px'));
    parts.push(wallUV(span(-hx, -ix, 0, G.top - 0.02, -hz, zFace - 0.01), 'nx'));
    parts.push(wallUV(span(-ix, ix, 0, G.top - 0.02, -hz, -iz), 'rear'));
    // the white-tiled entrance stair and its paving, in the same cream, sampling a plain patch
    {
      const ST = G.stair, E = GR.entrance;
      const st: THREE.BufferGeometry[] = [];
      for (let i = 0; i < ST.steps; i++) st.push(span(-E.half + 0.02, E.half - 0.02, 0, ST.rise * (i + 1), ST.z0 - ST.tread * (i + 1), ST.z0 - ST.tread * i));
      st.push(span(-E.half + 0.02, E.half - 0.02, 0, ST.rise * ST.steps, zFace - E.depth + 0.005, ST.z0 - ST.tread * ST.steps));
      st.push(span(-E.half - 0.3, E.half + 0.3, 0, 0.03, zFace + 0.005, zFace + B.proud - 0.02));
      const g = mergeGeos(st);
      const n = g.getAttribute('position').count;
      const uv = new Float32Array(n * 2);
      for (let i = 0; i < n; i++) { uv[i * 2] = 0.15; uv[i * 2 + 1] = 0.5; }
      g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
      parts.push(g);
    }
    add('flanks', 'Painted flanks, rear and entrance stair', mergeGeos(parts), 'paint');
    if (inBrowser) {
      // 1024 px = the 12.8 m flank across, 20 m up (rows run top to bottom). Multiplier over white:
      // recessed panel grooves 4 px at 0.62, a soft shadow line under each, condenser drips from the
      // ten side units, rain streaks off the parapet, grime at the base and the corners.
      const [c, ctx] = canvas(1024, 1024);
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 1024, 1024);
      const row = (y: number) => (1 - y / G.top) * 1024;
      const GV = G.grooves;
      ctx.fillStyle = 'rgba(40, 36, 30, 0.38)';
      for (const u of GV.u as number[]) ctx.fillRect(u * 1024 - 2, row(19.4), 4, row(3.4) - row(19.4));
      for (const y of GV.y as number[]) ctx.fillRect(GV.u[0] * 1024 - 2, row(y) - 2, (0.985 - GV.u[0]) * 1024, 4);
      ctx.fillRect(0.985 * 1024 - 2, row(19.4), 4, row(3.4) - row(19.4));
      ctx.fillStyle = 'rgba(40, 36, 30, 0.10)';
      for (const y of GV.y as number[]) ctx.fillRect(GV.u[0] * 1024, row(y) + 2, (0.985 - GV.u[0]) * 1024, 5);
      // condenser drips: two per floor at the unit positions, from the unit base downward
      for (const S of F) for (const z of G.cond.sideZ as number[]) {
        const u = (z + hz) / (2 * hz) * 1024, y = row(S + G.cond.sideDy - G.cond.h / 2);
        for (let i = 0; i < 4; i++) streakDown(ctx, u - 14 + rnd() * 28, y, 4 + rnd() * 8, 60 + rnd() * 90, '55, 48, 38', 0.14 + rnd() * 0.20);
        softBlob(ctx, u, y + 30, 26, 40, '55, 48, 38', 0.16);
      }
      // rain streaks hanging off the parapet line and the top groove
      for (let i = 0; i < 26; i++) streakDown(ctx, rnd() * 1000, row(19.4) + rnd() * 20, 3 + rnd() * 9, 60 + rnd() * 220, '60, 55, 45', 0.05 + rnd() * 0.12);
      for (let i = 0; i < 18; i++) streakDown(ctx, rnd() * 1000, row(GV.y[0]) + 2, 3 + rnd() * 8, 60 + rnd() * 160, '60, 55, 45', 0.04 + rnd() * 0.10);
      // grime at the base and soft mottling everywhere
      const gb = ctx.createLinearGradient(0, row(2.2), 0, 1024);
      gb.addColorStop(0, 'rgba(50, 45, 36, 0)'); gb.addColorStop(1, 'rgba(50, 45, 36, 0.22)');
      ctx.fillStyle = gb; ctx.fillRect(0, row(2.2), 1024, 1024 - row(2.2));
      for (let i = 0; i < 90; i++) softBlob(ctx, rnd() * 1024, rnd() * 1024, 30 + rnd() * 90, 40 + rnd() * 120, '55, 50, 40', 0.02 + rnd() * 0.05);
      for (let i = 0; i < 12; i++) softBlob(ctx, 20 + rnd() * 60, row(19.6) + rnd() * 120, 30 + rnd() * 40, 60 + rnd() * 120, '55, 50, 40', 0.10 + rnd() * 0.12);
      bind('paint', c, { repeat: false });
    }
  }

  /* ---------------------------------------------------------------- the core: body box, recess back walls, door */
  {
    const parts: THREE.BufferGeometry[] = [];
    parts.push(span(-ix, ix, GR.top, G.deckY, -iz + 0.01, B.back));   // 1 cm off the rear wall: the ground body and deck butt the same wall
    const E = GR.entrance, zN = zFace - E.depth;
    parts.push(span(-E.half + 0.01, E.half - 0.01, G.stair.steps * G.stair.rise, E.y1 - 0.02, zN + 0.005, zN + 0.04));
    add('core', 'Body core and entrance door', mergeGeos(parts), 'recess');
  }

  /* ---------------------------------------------------------------- deck, stair, paving */
  {
    const parts: THREE.BufferGeometry[] = [];
    parts.push(span(-ix + 0.01, ix - 0.01, G.deckY, G.deckY + G.deckT, -iz + 0.02, zBack));
    add('deck', 'Roof deck', mergeGeos(parts), 'deck');
  }

  /* ---------------------------------------------------------------- barred windows, x20 */
  {
    const mats: THREE.Matrix4[] = [];
    for (const S of F) for (const bx of BX) mats.push(at(bx, S + (W.y0 + W.y1) / 2, zFace - W.inset - W.t / 2));
    addInst('grilles', 'Barred windows', facedBox(W.w + 0.04, W.y1 - W.y0 + 0.04, W.t), 'grille', mats);
    if (inBrowser) {
      // dark green glass, a 0.06 m grille at a 0.12 m pitch both ways, a dark frame and a sill
      // shadow. The grille canvas is not a multiplier, so the material goes white under it.
      const [c, ctx] = canvas(256, 208);
      ctx.fillStyle = '#274d3e'; ctx.fillRect(0, 0, 256, 208);
      const gv = ctx.createLinearGradient(0, 0, 0, 208);
      gv.addColorStop(0, 'rgba(20, 30, 24, 0.45)'); gv.addColorStop(0.35, 'rgba(20, 30, 24, 0)'); gv.addColorStop(1, 'rgba(160, 175, 165, 0.18)');
      ctx.fillStyle = gv; ctx.fillRect(0, 0, 256, 208);
      ctx.fillStyle = '#a8a49a';
      for (let x = 20; x < 246; x += 21) ctx.fillRect(x, 8, 5, 192);
      for (let y = 40; y < 190; y += 52) ctx.fillRect(8, y, 240, 5);
      ctx.fillStyle = '#244a3c'; ctx.fillRect(8, 8, 240, 10);
      ctx.strokeStyle = '#3e5a48'; ctx.lineWidth = 10; ctx.strokeRect(5, 5, 246, 198);
      ctx.strokeStyle = '#c9c4b8'; ctx.lineWidth = 3; ctx.strokeRect(11, 11, 234, 186);
      bind('grille', c, { white: true, repeat: false });
    }
  }

  /* ---------------------------------------------------------------- condensers: ten per flank, one per balcony */
  {
    const CD = G.cond;
    const body = boxAt(0, 0, 0, CD.w, CD.h, CD.d);
    const fan = new THREE.CylinderGeometry(CD.fanR, CD.fanR, 0.02, 20);
    fan.rotateX(Math.PI / 2); fan.translate(-0.06, 0, CD.d / 2 + 0.005);
    fan.setAttribute('color', new THREE.BufferAttribute(new Float32Array(fan.getAttribute('position').count * 3).fill(CD.fanTint), 3));
    body.setAttribute('color', new THREE.BufferAttribute(new Float32Array(body.getAttribute('position').count * 3).fill(1), 3));
    const mats: THREE.Matrix4[] = [];
    for (const S of F) {
      for (const z of CD.sideZ as number[]) {
        mats.push(at(hx + CD.d / 2, S + CD.sideDy, z, Math.PI / 2));
        mats.push(at(-hx - CD.d / 2, S + CD.sideDy, z, -Math.PI / 2));
      }
      mats.push(at(CD.balconyX, S + CD.balconyDy, B.back + CD.d / 2 + 0.01));
    }
    addInst('condensers', 'Air-conditioning condensers', mergeGeos([body, fan]), 'cond', mats);
  }

  /* ---------------------------------------------------------------- laundry: shirts on two balconies, towels over one parapet */
  {
    const LD = G.laundry;
    const garment = (x: number, y: number, z: number, w: number, h: number, d: number, hex: number) => colourAll(boxAt(x, y, z, w, h, d), hex);
    const shirt = (x: number, hex: number, dz: number) => [
      garment(x, LD.railY - 0.32, dz, 0.40, 0.56, 0.03, hex),
      garment(x - 0.27, LD.railY - 0.14, dz + 0.01, 0.16, 0.22, 0.03, hex),
      garment(x + 0.27, LD.railY - 0.14, dz - 0.01, 0.16, 0.22, 0.03, hex),
    ];
    const rack = mergeGeos([
      ...shirt(-0.05, 0xdedcd4, 0), ...shirt(0.42, 0x3a4a6a, -0.03), ...shirt(0.80, 0x6e7466, 0.02),
      colourAll(boxAt(0.40, LD.railY, 0, 1.6, 0.03, 0.03), 0x9a9a94),
    ]);
    const rz = B.back + 0.55;
    addInst('laundry', 'Hanging shirts', rack, 'cloth',
      (LD.shirtFloors as number[]).map((k) => at(0, F[k], rz)), [0xffffff, 0xe8e2d8]);
    // two towels draped over the parapet top: a fold on the top face and a drop down the front
    const S = F[LD.towelFloor], yT = S + B.parapet;
    const towel = (x: number, w: number, hex: number) => [
      garment(x, yT + 0.02, zFace + 0.15, w, 0.04, 0.34, hex),
      garment(x, yT - 0.24, zFace + B.proud + 0.02, w, 0.52, 0.03, hex),
    ];
    add('towels', 'Towels over the parapet', mergeGeos([...towel(-0.42, 0.62, 0x7a8a5e), ...towel(0.30, 0.50, 0x6d8aa8)]), 'cloth');
  }

  /* ---------------------------------------------------------------- grime streaks under every sill */
  {
    const q = new THREE.PlaneGeometry(W.w - 0.1, 0.95);
    q.translate(0, 0, 0.006);
    const mats: THREE.Matrix4[] = [];
    const tints: number[] = [];
    let k = 0;
    for (const S of F) for (const bx of BX) { mats.push(at(bx, S + W.y0 - 0.5, zFace)); tints.push([0xffffff, 0xc8c8c8, 0xe6e6e6, 0xb0b0b0, 0xd8d8d8][(k * 7) % 5]); k++; }
    const inst = addInst('streaks', 'Sill grime streaks', q, 'streak', mats, tints);
    const sm = inst.material as THREE.MeshStandardMaterial;
    sm.depthWrite = false; sm.polygonOffset = true; sm.polygonOffsetFactor = -1;
    if (!inBrowser) {
      sm.opacity = 0;
    } else {
      const [c, ctx] = canvas(256, 128);
      ctx.clearRect(0, 0, 256, 128);
      const g2 = ctx.createLinearGradient(0, 0, 0, 14);
      g2.addColorStop(0, 'rgba(60, 52, 40, 0.45)'); g2.addColorStop(1, 'rgba(60, 52, 40, 0)');
      ctx.fillStyle = g2; ctx.fillRect(0, 0, 256, 14);
      const anchors = [14, 30, 226, 242, 60 + rnd() * 50, 120 + rnd() * 40, 170 + rnd() * 40];
      for (const a0 of anchors) streakDown(ctx, a0 + (rnd() - 0.5) * 8, 0, 4 + rnd() * 9, 60 + rnd() * 68, '60, 52, 40', 0.30 + rnd() * 0.35);
      for (let i = 0; i < 6; i++) streakDown(ctx, rnd() * 250, 0, 2 + rnd() * 4, 30 + rnd() * 60, '60, 52, 40', 0.15 + rnd() * 0.2);
      bind('streak', c, { repeat: false });
    }
  }

  /* ---------------------------------------------------------------- roller shutters, x3, and the shop glazing */
  {
    const mats = (GR.shutters as number[][]).map(([x0, x1]) => at((x0 + x1) / 2, (GR.holeY0 + GR.holeY1) / 2, zFace - GR.inset - 0.04));
    const [x0, x1] = GR.shutters[0] as number[];
    addInst('shutters', 'Roller shutters', facedBox(x1 - x0 + 0.04, GR.holeY1 - GR.holeY0 + 0.04, 0.08), 'shutter', mats);
    if (inBrowser) {
      // 256 px = 1 m: 13 slats at a 75 mm pitch, each a lit crest over a shadowed valley, with a
      // faint rust wash near the bottom. Multiplier over white.
      const [c, ctx] = canvas(256, 256);
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 256, 256);
      const sp = 256 / 13;
      for (let i = 0; i < 13; i++) {
        const y = i * sp;
        const gg = ctx.createLinearGradient(0, y, 0, y + sp);
        gg.addColorStop(0, 'rgba(30, 30, 28, 0.30)'); gg.addColorStop(0.25, 'rgba(30, 30, 28, 0.0)');
        gg.addColorStop(0.7, 'rgba(30, 30, 28, 0.08)'); gg.addColorStop(1, 'rgba(30, 30, 28, 0.30)');
        ctx.fillStyle = gg; ctx.fillRect(0, y, 256, sp);
      }
      for (let i = 0; i < 30; i++) softBlob(ctx, rnd() * 256, rnd() * 256, 10 + rnd() * 30, 6 + rnd() * 14, '40, 38, 34', 0.04 + rnd() * 0.08);
      bind('shutter', c, { repeat: false });
    }
    const [gx0, gx1] = GR.glass as number[];
    add('shopglass', 'Shopfront pane', span(gx0 + 0.04, gx1 - 0.04, GR.holeY0 + 0.04, GR.holeY1 - 0.04, zFace - GR.inset - 0.02, zFace - GR.inset + 0.02), 'glass');
  }

  /* ---------------------------------------------------------------- the name board */
  {
    const S = G.sign;
    const g = new THREE.BoxGeometry(S.x1 - S.x0, S.y1 - S.y0, S.t);
    const uv = g.getAttribute('uv') as THREE.BufferAttribute;
    for (let i = 0; i < uv.count; i++) if (i < 16 || i > 19) uv.setXY(i, 0.01, 0.01);
    g.translate((S.x0 + S.x1) / 2, (S.y0 + S.y1) / 2, zFace + 0.01 + S.t / 2);
    const mesh = add('sign', 'Name board', g, 'sign');
    const mat = mesh.material as THREE.MeshStandardMaterial;
    if (!inBrowser) {
      mat.color.set(S.ground);
    } else {
      const c = document.createElement('canvas');
      c.width = 1024; c.height = 232;
      const ctx = c.getContext('2d')!;
      ctx.fillStyle = S.ground; ctx.fillRect(0, 0, c.width, c.height);
      ctx.strokeStyle = '#b9b6b0'; ctx.lineWidth = 8; ctx.strokeRect(4, 4, c.width - 8, c.height - 8);
      ctx.fillStyle = S.ink; ctx.textBaseline = 'middle'; ctx.textAlign = 'center';
      ctx.font = 'bold 160px Arial, Helvetica, sans-serif';
      ctx.fillText(S.text, 512, 124);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex; mat.needsUpdate = true;
    }
  }

  /* ---------------------------------------------------------------- the water-tank tower
   * Four tapering legs with a ring and an X brace on every face per tier, a platform with a
   * railing and a ladder up the +Z face. All rust-steel, one merged component. */
  {
    const parts: THREE.BufferGeometry[] = [];
    const cx = TW.cx, cz = TW.cz;
    const corner = (i: number, t: number) => {
      const f = t / TW.tiers, half = TW.baseHalf + (TW.topHalf - TW.baseHalf) * f;
      const sx = [1, -1, -1, 1][i], sz = [1, 1, -1, -1][i];
      return [cx + sx * half, TW.y0 + (TW.y1 - TW.y0) * f, cz + sz * half];
    };
    for (let i = 0; i < 4; i++) parts.push(strut(corner(i, 0), corner(i, TW.tiers), TW.leg));
    for (let t = 0; t <= TW.tiers; t++) for (let i = 0; i < 4; i++) {
      const a = corner(i, t), b = corner((i + 1) % 4, t);
      if (t > 0) parts.push(strut(a, b, TW.brace));
      if (t < TW.tiers) {
        parts.push(strut(a, corner((i + 1) % 4, t + 1), TW.brace));
        parts.push(strut(b, corner(i, t + 1), TW.brace));
      }
    }
    parts.push(boxAt(cx, TW.y1 + TW.platformT / 2, cz, TW.platform, TW.platformT, TW.platform));
    const ph = TW.platform / 2 - 0.05, ry = TW.y1 + TW.platformT;
    for (const [sx, sz] of [[1, 1], [-1, 1], [-1, -1], [1, -1]]) parts.push(boxAt(cx + sx * ph, ry + TW.railH / 2, cz + sz * ph, 0.05, TW.railH, 0.05));
    for (const yy of [ry + TW.railH, ry + TW.railH * 0.55]) {
      parts.push(boxAt(cx, yy, cz + ph, ph * 2 + 0.05, 0.04, 0.04)); parts.push(boxAt(cx, yy, cz - ph, ph * 2 + 0.05, 0.04, 0.04));
      parts.push(boxAt(cx + ph, yy, cz, 0.04, 0.04, ph * 2 - 0.04)); parts.push(boxAt(cx - ph, yy, cz, 0.04, 0.04, ph * 2 - 0.04));
    }
    // ladder up the +Z face, from the deck to the rail top
    const lz = TW.ladderZ, ly1 = ry + TW.railH;
    for (const sx of [-1, 1]) parts.push(boxAt(cx + sx * 0.22, (TW.y0 + ly1) / 2, lz, 0.05, ly1 - TW.y0, 0.05));
    for (let y = TW.y0 + 0.25; y < ly1 - 0.1; y += TW.rung) parts.push(boxAt(cx, y, lz, 0.44, 0.03, 0.03));
    add('tower', 'Water-tank tower, railing and ladder', mergeGeos(parts), 'steel');
  }
  {
    const TK = G.tank, r = TK.r;
    const prof = [[0, 0], [r * 0.96, 0], [r * 0.96, 0.05], [r, 0.08], [r, 0.55], [r * 0.96, 0.58], [r * 0.96, 0.63], [r, 0.66],
                  [r, 1.12], [r * 0.96, 1.15], [r * 0.96, 1.20], [r, 1.23], [r, 1.62], [r * 0.94, 1.68], [r * 0.7, 1.80], [r * 0.35, 1.88], [0, TK.h]];
    const g = lathe(prof, 24, TW.y1 + TW.platformT);
    g.translate(TW.cx, 0, TW.cz);
    add('tank', 'Water tank', g, 'tank');
    if (inBrowser) {
      // rust bleeding down from the seams and the top rim, over galvanised grey: a multiplier tile
      // wrapping once around the drum
      const [c, ctx] = canvas(512, 256);
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 512, 256);
      for (let i = 0; i < 40; i++) streakDown(ctx, rnd() * 512, rnd() * 200, 3 + rnd() * 10, 40 + rnd() * 120, '120, 60, 25', 0.15 + rnd() * 0.35);
      for (let i = 0; i < 24; i++) softBlob(ctx, rnd() * 512, rnd() * 256, 10 + rnd() * 30, 8 + rnd() * 24, '110, 55, 22', 0.15 + rnd() * 0.3);
      for (const y of [8, 78, 150]) { ctx.fillStyle = 'rgba(90, 45, 20, 0.35)'; ctx.fillRect(0, y, 512, 4); }
      for (let i = 0; i < 300; i++) { ctx.fillStyle = 'rgba(60, 60, 58, ' + (0.05 + rnd() * 0.15).toFixed(2) + ')'; ctx.fillRect(rnd() * 512, rnd() * 256, 2 + rnd() * 4, 1 + rnd() * 3); }
      bind('tank', c, { bump: 0.01 });
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
  const root = createStudentDormitoryBlockModel(options);
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
