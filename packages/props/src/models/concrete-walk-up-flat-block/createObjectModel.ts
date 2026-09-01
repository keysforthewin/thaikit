import * as THREE from 'three';

/**
 * Concrete Walk-Up Flat Block -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 26.50 x 17.50 x 10.50 m, origin base-center, +Y up.
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
    "id": "concrete-walk-up-flat-block",
    "name": "Concrete Walk-Up Flat Block",
    "exportName": "ConcreteWalkUpFlatBlock",
    "envelope": "Envelope 26.50 x 17.50 x 10.50 m, origin base-center, +Y up.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
    "materials": [
      {
        "id": "concrete",
        "color": 10788759,
        "roughness": 0.95,
        "metalness": 0
      },
      {
        "id": "ochre",
        "color": 11572840,
        "roughness": 0.9,
        "metalness": 0,
        "vertexColors": true
      },
      {
        "id": "roof",
        "color": 10262673,
        "roughness": 0.85,
        "metalness": 0.05
      },
      {
        "id": "door",
        "color": 7232068,
        "roughness": 0.75,
        "metalness": 0
      },
      {
        "id": "louvre",
        "color": 11117976,
        "roughness": 0.5,
        "metalness": 0.1
      },
      {
        "id": "breeze",
        "color": 10328723,
        "roughness": 0.95,
        "metalness": 0
      },
      {
        "id": "stair",
        "color": 14077888,
        "roughness": 0.9,
        "metalness": 0
      },
      {
        "id": "foliage",
        "color": 5795904,
        "roughness": 0.8,
        "metalness": 0,
        "vertexColors": true,
        "doubleSided": true
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
      "hx": 13.25,
      "hz": 5.25,
      "innerX": 9.95,
      "towerTop": 16,
      "plinthY": 0.2,
      "pitch": 2.6333,
      "floors": [
        0.2,
        2.8333,
        5.4666,
        8.0999,
        10.7332,
        13.3665
      ],
      "bays": [
        -8.5287,
        -5.6858,
        -2.8429,
        0,
        2.8429,
        5.6858,
        8.5287
      ],
      "backZ": 0.95,
      "wallT": 0.15,
      "spandrelZ": 2.45,
      "spandrelT": 0.15,
      "spandrelH": 0.98,
      "copingT": 0.06,
      "copingD": 0.19,
      "slabT": 0.15,
      "backTint": 0.4,
      "reliefT": 0.05,
      "slot": {
        "z0": 2.6,
        "z1": 4.8,
        "y0": 0.5,
        "y1": 15.4,
        "xInner": 10.85
      },
      "stair": {
        "w": 1.08,
        "t": 0.6,
        "inset": 0.12,
        "margin": 0.05,
        "floors": 5
      },
      "landing": {
        "d": 0.9,
        "y0": -0.2,
        "y1": 0.45
      },
      "roof": {
        "xEnd": 12.95,
        "deckTop": 16.15,
        "parapetTop": 16.7,
        "parapetT": 0.35,
        "ridgeZ": -1.4,
        "gableTop": 17.5,
        "eaveY": 16.35,
        "ridgeY": 17.3,
        "sheetT": 0.1,
        "gutter": 0.35,
        "tileM": 3.2
      },
      "tileM": 5.2666,
      "door": {
        "w": 0.9,
        "h": 2.05,
        "dx": -0.75
      },
      "win": {
        "w": 1,
        "h": 0.6,
        "dx": 0.65,
        "y": 1.55
      },
      "rearWin": {
        "w": 1,
        "h": 0.6,
        "dx": [
          -0.8,
          0.8
        ],
        "y": 1.6
      },
      "breeze": {
        "w": 2.5,
        "h": 1.75,
        "t": 0.04,
        "x": 11.6,
        "y": 1.175
      },
      "plants": [
        [
          4,
          0
        ],
        [
          5,
          1
        ],
        [
          3,
          2
        ],
        [
          5,
          3
        ]
      ],
      "laundry": [
        [
          2,
          3
        ],
        [
          4,
          1
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

export function createConcreteWalkUpFlatBlockModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Concrete Walk-Up Flat Block';

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
  const hx = G.hx as number, hz = G.hz as number, ix = G.innerX as number;
  const yT = G.towerTop as number, zS = G.spandrelZ as number, zB = G.backZ as number;
  const S = G.slot, R = G.roof;
  const inBrowser = typeof document !== 'undefined';

  /* ---------------------------------------------------------------- helpers */
  const span = (x0: number, x1: number, y0: number, y1: number, z0: number, z1: number) =>
    boxAt((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2, x1 - x0, y1 - y0, z1 - z0);
  // world-planar UVs by dominant normal, in metres over one tile: the way a canvas tile lands on a
  // merged shell without a seam per box
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
  const tintGeo = (geo: THREE.BufferGeometry, t: number) => {
    const c = geo.getAttribute('position').count;
    geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(c * 3).fill(t), 3));
    return geo;
  };
  // extrusion in the YZ plane: pts are [z, y]; thickness t along +x from x0. Shape x holds -z, so
  // rotateY(+PI/2) (x' = z, z' = -x) lands the profile at the intended z with its depth along +x.
  const yzExtrude = (pts: number[][], x0: number, t: number) => {
    const sh = new THREE.Shape();
    sh.moveTo(-pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) sh.lineTo(-pts[i][0], pts[i][1]);
    sh.closePath();
    const g = new THREE.ExtrudeGeometry(sh, { depth: t, bevelEnabled: false, curveSegments: 1 });
    g.rotateY(Math.PI / 2); g.translate(x0, 0, 0); g.computeVertexNormals();
    return g;
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
  // seeded LCG so every canvas is byte-identical on every build
  let seed = 90210;
  const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const canvas = (w: number, h: number) => {
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    return [c, c.getContext('2d', { willReadFrequently: true })!] as const;
  };
  const bind = (matId: string, c: HTMLCanvasElement, bump = 0) => {
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = options.textureAnisotropy ?? 4;
    const m = materials[matId];
    m.map = tex;
    if (bump > 0) { m.bumpMap = tex; m.bumpScale = bump; }
    m.needsUpdate = true;
  };

  /* ---------------------------------------------------------------- the concrete shell
   * ONE component: plinth, the body behind the corridor, the two towers as five boxes each so the
   * stair slot is a real cavity, the corridor slabs and copings, the roof deck, the parapets and the
   * two gable ends. Every joint is an opposed butt; co-facing faces on one plane only ever meet at an
   * edge (tower front strip / head / sill on the end wall plane), never over an area. */
  {
    const parts: THREE.BufferGeometry[] = [];
    parts.push(span(-hx - 0.1, hx + 0.1, 0, G.plinthY, -hz - 0.1, hz + 0.1));
    parts.push(span(-ix, ix, G.plinthY, yT, -hz, zB - G.wallT));
    for (const s of [-1, 1]) {
      const X = (a: number, b: number) => [Math.min(a, b), Math.max(a, b)];
      const xo = s * hx, xi = s * ix, xc = s * S.xInner;
      let r = X(xi, xo);
      parts.push(span(r[0], r[1], G.plinthY, yT, S.z1, hz));      // front strip, breeze screen face
      parts.push(span(r[0], r[1], G.plinthY, yT, -hz, S.z0));     // rear block under the gable
      r = X(xi, xc);
      parts.push(span(r[0], r[1], G.plinthY, yT, S.z0, S.z1));    // inner block: the cavity's back wall
      r = X(xc, xo);
      parts.push(span(r[0], r[1], S.y1, yT, S.z0, S.z1));         // head over the slot
      parts.push(span(r[0], r[1], G.plinthY, S.y0, S.z0, S.z1));  // sill under the slot
    }
    for (let k = 1; k < F.length; k++) parts.push(span(-ix, ix, F[k] - G.slabT, F[k], zB, zS));
    for (const yk of F) parts.push(span(-ix, ix, yk + G.spandrelH, yk + G.spandrelH + G.copingT, zS - G.copingD, zS + 0.03));
    parts.push(span(-R.xEnd, R.xEnd, yT, R.deckTop, -hz, zS));
    parts.push(span(-R.xEnd, R.xEnd, R.deckTop, R.parapetTop, zS - R.parapetT, zS));
    parts.push(span(-R.xEnd, R.xEnd, R.deckTop, R.parapetTop, -hz, -hz + R.parapetT));
    const gable = [[-hz, yT], [zS, yT], [zS, R.parapetTop], [R.ridgeZ, R.gableTop], [-hz, R.parapetTop]];
    parts.push(yzExtrude(gable, R.xEnd, hx - R.xEnd));
    parts.push(yzExtrude(gable, -hx, hx - R.xEnd));
    const shell = mergeGeos(parts);
    planarUV(shell, G.tileM);
    add('shell', 'Concrete shell', shell, 'concrete');
    colliders['shell'] = {
      shape: 'box', localCenter: [0, 8.75, 0], halfExtents: [13.35, 8.75, 5.35],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope.',
    };
    if (inBrowser) {
      // 512 px = one 5.27 m tile (two floor pitches): panel grooves at floor level and one vertical
      // per tile, rain streaks hanging from the grooves, soft mottling. Multiplier space over white.
      const [c, ctx] = canvas(512, 512);
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 120; i++) {
        const x = rnd() * 512, y = rnd() * 512, r = 40 + rnd() * 90;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, 'rgba(40, 40, 36, ' + (0.02 + rnd() * 0.04).toFixed(3) + ')');
        g.addColorStop(1, 'rgba(40, 40, 36, 0)');
        ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }
      const rows = [236, 493];
      for (const y0 of rows) for (let i = 0; i < 40; i++) {
        const x = rnd() * 512, w = 2 + rnd() * 10, len = 60 + rnd() * 230, a = 0.04 + rnd() * 0.10;
        const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
        g.addColorStop(0, 'rgba(30, 30, 28, ' + a.toFixed(3) + ')');
        g.addColorStop(1, 'rgba(30, 30, 28, 0)');
        ctx.fillStyle = g; ctx.fillRect(x, y0, w, len);
        if (x + w > 512) ctx.fillRect(x - 512, y0, w, len);
      }
      ctx.fillStyle = 'rgba(25, 25, 22, 0.38)';
      for (const y0 of rows) ctx.fillRect(0, y0 - 1, 512, 3);
      ctx.fillRect(0, 0, 3, 512);
      ctx.fillStyle = 'rgba(80, 90, 60, 0.10)';
      for (let i = 0; i < 40; i++) { const x = rnd() * 512, y = rnd() * 512; ctx.fillRect(x, y, 2 + rnd() * 6, 2 + rnd() * 4); }
      bind('concrete', c);
    }
  }

  /* ---------------------------------------------------------------- the ochre corridor: back wall and six spandrels */
  {
    const parts: THREE.BufferGeometry[] = [];
    parts.push(tintGeo(span(-ix, ix, G.plinthY, yT, zB - G.wallT, zB), G.backTint));
    for (const yk of F) parts.push(tintGeo(span(-ix, ix, yk, yk + G.spandrelH, zS - G.spandrelT, zS), 1));
    const g = mergeGeos(parts);
    // one 1024 x 256 canvas: the spandrel strip in the top half, the back wall in the bottom half;
    // u runs the facade width and shifts 0.137 per floor so no two spandrels carry the same streaks
    const p = g.getAttribute('position');
    const uv = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      const u0 = (x + ix) / (2 * ix);
      if (z < zB + 0.001) { uv[i * 2] = u0; uv[i * 2 + 1] = 0.02 + 0.44 * (y - G.plinthY) / (yT - G.plinthY); }
      else {
        let k = 0; for (let j = 0; j < F.length; j++) if (y >= F[j] - 0.01) k = j;
        uv[i * 2] = u0 + k * 0.137;
        uv[i * 2 + 1] = 0.52 + 0.46 * Math.min(1, Math.max(0, (y - F[k]) / G.spandrelH));
      }
    }
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    add('corridor', 'Corridor spandrels and back wall', g, 'ochre');
    if (inBrowser) {
      const [c, ctx] = canvas(1024, 256);
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 1024, 256);
      // spandrel strip (rows 0..128): black-mould grime along the coping line and the foot, rust
      // bleeding from the fixings, a few pale-grime clouds; all darker than the paint
      // black-mould band along the coping line, cloudy and continuous rather than spotted
      const gt = ctx.createLinearGradient(0, 0, 0, 40);
      gt.addColorStop(0, 'rgba(35, 32, 22, 0.30)'); gt.addColorStop(1, 'rgba(35, 32, 22, 0)');
      ctx.fillStyle = gt; ctx.fillRect(0, 0, 1024, 40);
      for (let i = 0; i < 34; i++) {
        const x = rnd() * 1024, y = rnd() < 0.6 ? rnd() * 30 : 84 + rnd() * 44, rx = 30 + rnd() * 90, ry = 10 + rnd() * 26;
        const gg = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
        gg.addColorStop(0, 'rgba(35, 32, 22, ' + (0.10 + rnd() * 0.22).toFixed(3) + ')');
        gg.addColorStop(1, 'rgba(35, 32, 22, 0)');
        ctx.save(); ctx.translate(x, y); ctx.scale(rx, ry); ctx.fillStyle = gg; ctx.fillRect(-1, -1, 2, 2); ctx.restore();
      }
      for (let i = 0; i < 22; i++) {
        const x = rnd() * 1024, w = 3 + rnd() * 7, len = 30 + rnd() * 90, a = 0.25 + rnd() * 0.45;
        const gg = ctx.createLinearGradient(0, 6, 0, 6 + len);
        gg.addColorStop(0, 'rgba(150, 62, 18, ' + a.toFixed(3) + ')');
        gg.addColorStop(1, 'rgba(150, 62, 18, 0)');
        ctx.fillStyle = gg; ctx.fillRect(x, 6, w, len);
      }
      for (let i = 0; i < 60; i++) {
        const x = rnd() * 1024, y = rnd() * 128, r = 6 + rnd() * 22;
        const gg = ctx.createRadialGradient(x, y, 0, x, y, r);
        gg.addColorStop(0, 'rgba(60, 55, 40, ' + (0.05 + rnd() * 0.12).toFixed(3) + ')');
        gg.addColorStop(1, 'rgba(60, 55, 40, 0)');
        ctx.fillStyle = gg; ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }
      // back wall (rows 128..256): a soft shadow band under each floor's slab and light grime
      const gs = ctx.createLinearGradient(0, 128, 0, 256);
      gs.addColorStop(0, 'rgba(20, 18, 12, 0.0)'); gs.addColorStop(1, 'rgba(20, 18, 12, 0.10)');
      ctx.fillStyle = gs; ctx.fillRect(0, 128, 1024, 128);
      for (let i = 0; i < 120; i++) {
        const x = rnd() * 1024, y = 128 + rnd() * 128, r = 6 + rnd() * 24;
        const gg = ctx.createRadialGradient(x, y, 0, x, y, r);
        gg.addColorStop(0, 'rgba(40, 36, 26, ' + (0.04 + rnd() * 0.10).toFixed(3) + ')');
        gg.addColorStop(1, 'rgba(40, 36, 26, 0)');
        ctx.fillStyle = gg; ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }
      bind('ochre', c);
    }
  }

  /* ---------------------------------------------------------------- the corrugated roof sheet */
  {
    const prof = [[-hz + R.gutter, R.eaveY], [R.ridgeZ, R.ridgeY], [zS - R.gutter, R.eaveY],
                  [zS - R.gutter, R.eaveY - R.sheetT], [R.ridgeZ, R.ridgeY - R.sheetT], [-hz + R.gutter, R.eaveY - R.sheetT]];
    const g = yzExtrude(prof, -R.xEnd, 2 * R.xEnd);
    planarUV(g, R.tileM);
    add('roof', 'Corrugated roof sheet', g, 'roof');
    if (inBrowser) {
      // 512 px = 3.2 m: 32 corrugations at a 0.10 m pitch running down the slope, lichen freckles
      // and three rust blooms per tile
      const [c, ctx] = canvas(512, 512);
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 32; i++) {
        const x = i * 16;
        const gg = ctx.createLinearGradient(x, 0, x + 16, 0);
        gg.addColorStop(0, 'rgba(30, 30, 28, 0.62)'); gg.addColorStop(0.3, 'rgba(30, 30, 28, 0.0)');
        gg.addColorStop(0.6, 'rgba(30, 30, 28, 0.10)'); gg.addColorStop(1, 'rgba(30, 30, 28, 0.62)');
        ctx.fillStyle = gg; ctx.fillRect(x, 0, 16, 512);
      }
      for (let i = 0; i < 3; i++) {
        const x = rnd() * 512, y = rnd() * 512, rx = 30 + rnd() * 60, ry = 60 + rnd() * 160;
        const gg = ctx.createRadialGradient(x, y, 0, x, y, 1);
        gg.addColorStop(0, 'rgba(150, 70, 30, 0.75)'); gg.addColorStop(0.6, 'rgba(150, 70, 30, 0.45)'); gg.addColorStop(1, 'rgba(150, 70, 30, 0)');
        ctx.save(); ctx.translate(x, y); ctx.scale(rx, ry); ctx.fillStyle = gg; ctx.fillRect(-1, -1, 2, 2); ctx.restore();
      }
      for (let i = 0; i < 400; i++) {
        const x = rnd() * 512, y = rnd() * 512;
        ctx.fillStyle = rnd() < 0.7 ? 'rgba(40, 40, 36, ' + (0.08 + rnd() * 0.2).toFixed(2) + ')' : 'rgba(90, 105, 55, ' + (0.15 + rnd() * 0.25).toFixed(2) + ')';
        ctx.fillRect(x, y, 2 + rnd() * 5, 2 + rnd() * 10);
      }
      bind('roof', c, 0.02);
    }
  }

  /* ---------------------------------------------------------------- doors and louvre windows */
  const doorMats: THREE.Matrix4[] = [], winMats: THREE.Matrix4[] = [];
  for (const yk of F) for (const bx of BX) {
    doorMats.push(at(bx + G.door.dx, yk + 0.02 + G.door.h / 2, zB + G.reliefT / 2));
    winMats.push(at(bx + G.win.dx, yk + G.win.y, zB + G.reliefT / 2));
    for (const dx of G.rearWin.dx as number[]) winMats.push(at(bx + dx, yk + G.rearWin.y, -hz - G.reliefT / 2, Math.PI));
  }
  addInst('doors', 'Unit doors', new THREE.BoxGeometry(G.door.w, G.door.h, G.reliefT), 'door', doorMats);
  addInst('windows', 'Louvre windows', facedBox(G.win.w, G.win.h, G.reliefT), 'louvre', winMats);
  if (inBrowser) {
    const [c, ctx] = canvas(64, 64);
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 64, 64);
    for (let i = 0; i < 6; i++) { const y = 8 + i * 9; ctx.fillStyle = 'rgba(30, 32, 30, 0.50)'; ctx.fillRect(6, y + 5, 52, 3); }
    ctx.strokeStyle = 'rgba(20, 20, 20, 0.35)'; ctx.lineWidth = 3; ctx.strokeRect(4.5, 4.5, 55, 55);
    bind('louvre', c);
  }

  /* ---------------------------------------------------------------- breeze-block screens on the tower fronts */
  {
    const B = G.breeze;
    const mats: THREE.Matrix4[] = [];
    for (const yk of F) for (const s of [-1, 1]) mats.push(at(s * B.x, yk + B.y, hz + B.t / 2));
    addInst('breeze', 'Breeze-block screens', facedBox(B.w, B.h, B.t), 'breeze', mats);
    if (inBrowser) {
      // 12 x 9 slots per panel, the slot floors lifted to a 0.6 multiplier so the gate never reads
      // a screen as a field of holes
      const [c, ctx] = canvas(256, 256);
      ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, 256, 256);
      for (let r = 0; r < 9; r++) for (let q = 0; q < 12; q++) {
        const x = 10 + q * 20, y = 14 + r * 26;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.40)'; ctx.fillRect(x, y, 14, 10);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.18)'; ctx.fillRect(x, y + 10, 14, 3);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.0)';
      }
      for (let i = 0; i < 40; i++) { const x = rnd() * 256, y = rnd() * 256, r = 8 + rnd() * 24;
        const gg = ctx.createRadialGradient(x, y, 0, x, y, r);
        gg.addColorStop(0, 'rgba(30, 30, 26, ' + (0.04 + rnd() * 0.10).toFixed(3) + ')'); gg.addColorStop(1, 'rgba(30, 30, 26, 0)');
        ctx.fillStyle = gg; ctx.fillRect(x - r, y - r, r * 2, r * 2); }
      bind('breeze', c);
    }
  }

  /* ---------------------------------------------------------------- the dog-leg stairs, x24
   * Two flights per floor in each tower's cavity: the outer one against the slot rises toward +Z,
   * the inner one behind it back toward -Z, so the slot shows the zigzag the plate shows. Instanced
   * on the concrete material with the inner flight tinted into the cavity's shade. */
  {
    const ST = G.stair;
    const rise = G.pitch / 2, run = S.z1 - S.z0 - 2 * ST.margin;
    const L = Math.hypot(run, rise), a = Math.atan2(rise, run), zc = (S.z0 + S.z1) / 2;
    const geo = new THREE.BoxGeometry(ST.w, ST.t, L);
    const mats: THREE.Matrix4[] = [], tints: number[] = [];
    const rot = (x: number, y: number, z: number, ang: number) => new THREE.Matrix4().compose(
      new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), ang),
      new THREE.Vector3(1, 1, 1));
    for (const s of [-1, 1]) for (const yk of F.slice(0, ST.floors)) {
      mats.push(rot(s * (hx - ST.inset - ST.w / 2), yk + rise / 2 + ST.t / 2, zc, -a)); tints.push(0xf4f4f0);
      mats.push(rot(s * (S.xInner + ST.inset + ST.w / 2), yk + rise * 1.5 + ST.t / 2, zc, a)); tints.push(0xd2d2cd);
    }
    addInst('flights', 'Stair flights', geo, 'stair', mats, tints);
    // the half landing at the front end of the cavity where the flights turn, one per floor
    const LD = G.landing;
    const lm: THREE.Matrix4[] = [];
    for (const s of [-1, 1]) for (const yk of F.slice(0, ST.floors))
      lm.push(at(s * (S.xInner + hx) / 2, yk + rise + (LD.y1 - LD.y0) / 2 + LD.y0, S.z1 - LD.d / 2 - ST.margin));
    addInst('landings', 'Stair landings', new THREE.BoxGeometry(hx - S.xInner - 2 * ST.margin, LD.y1 - LD.y0, LD.d), 'stair', lm);
  }

  /* ---------------------------------------------------------------- plants on four copings, laundry on two bays */
  {
    const leaf = (x: number, y: number, z: number, w: number, h: number, d: number, tone: number[]) => {
      const g = boxAt(x, y, z, w, h, d);
      const c = new Float32Array(g.getAttribute('position').count * 3);
      for (let i = 0; i < c.length; i += 3) { c[i] = tone[0]; c[i + 1] = tone[1]; c[i + 2] = tone[2]; }
      g.setAttribute('color', new THREE.BufferAttribute(c, 3));
      return g;
    };
    const plant = mergeGeos([
      leaf(-0.32, 0.24, 0.0, 0.5, 0.48, 0.42, [1, 1, 1]), leaf(0.14, 0.32, 0.06, 0.42, 0.64, 0.36, [0.78, 0.9, 0.7]),
      leaf(0.52, 0.19, -0.05, 0.36, 0.38, 0.32, [0.9, 0.82, 0.55]), leaf(0.1, 0.56, -0.1, 0.22, 0.3, 0.2, [0.85, 1, 0.8]),
    ]);
    const yTop = (k: number) => F[k] + G.spandrelH + G.copingT;
    addInst('plants', 'Potted plants', plant, 'foliage',
      (G.plants as number[][]).map(([b, k]) => at(BX[b] + 0.3, yTop(k), zS - 0.22)));
    const garment = (x: number, w: number, h: number, dz: number, tone: number[]) => {
      const g = boxAt(x, 1.95 - h / 2, dz, w, h, 0.02);
      const c = new Float32Array(g.getAttribute('position').count * 3);
      for (let i = 0; i < c.length; i += 3) { c[i] = tone[0]; c[i + 1] = tone[1]; c[i + 2] = tone[2]; }
      g.setAttribute('color', new THREE.BufferAttribute(c, 3));
      return g;
    };
    const wash = mergeGeos([
      garment(-0.45, 0.36, 0.52, 0.0, [0.92, 0.92, 0.9]), garment(0.0, 0.28, 0.62, 0.03, [0.55, 0.62, 0.75]),
      garment(0.42, 0.4, 0.44, -0.02, [0.7, 0.68, 0.66]), garment(0.85, 0.3, 0.5, 0.02, [0.86, 0.8, 0.7]),
    ]);
    addInst('laundry', 'Hanging laundry', wash, 'cloth',
      (G.laundry as number[][]).map(([b, k]) => at(BX[b] - 0.2, F[k], zB + 0.45)), [0xffffff, 0xe8e6e0]);
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
  const root = createConcreteWalkUpFlatBlockModel(options);
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
