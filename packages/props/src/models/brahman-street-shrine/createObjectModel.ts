import * as THREE from 'three';

/**
 * Brahman Street Shrine -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws. That is also why geometry merging,
 * instancing and the lathe helpers below are hand-rolled -- anything under three/examples/jsm is
 * a second import.
 *
 * Envelope 5.00 x 6.00 x 5.00 m, origin base-center, +Y up, square in plan, front on +X.
 * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=12 materials, <=12 unique geometries.
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
    "id": "brahman-street-shrine",
    "name": "Brahman Street Shrine",
    "exportName": "BrahmanStreetShrine",
    "envelope": "Envelope 5.00 x 6.00 x 5.00 m, origin base-center, +Y up, square in plan, front on +X.\n * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=12 materials, <=12 unique geometries.",
    "materials": [
      {
        "id": "granite",
        "color": 12501704,
        "roughness": 0.45,
        "metalness": 0
      },
      {
        "id": "gold",
        "color": 14463050,
        "roughness": 0.32,
        "metalness": 0.35,
        "envMapIntensity": 1.3
      },
      {
        "id": "teak",
        "color": 7618591,
        "roughness": 0.62,
        "metalness": 0
      },
      {
        "id": "brass",
        "color": 13213764,
        "roughness": 0.42,
        "metalness": 0.6,
        "envMapIntensity": 1.2
      },
      {
        "id": "lattice",
        "color": 16777215,
        "roughness": 0.55,
        "metalness": 0.15
      }
    ],
    "geometry": {
      "feet": {
        "half": 2.05,
        "size": 0.3,
        "y0": 0,
        "y1": 0.12
      },
      "slab": {
        "y0": 0.1,
        "y1": 0.5,
        "half": 2.38,
        "plateY1": 0.62,
        "plateHalf": 2.5
      },
      "block": {
        "y0": 0.61,
        "y1": 1.68,
        "half": 1.76,
        "bandY1": 0.8,
        "bandHalf": 1.9
      },
      "rail": {
        "y0": 1.68,
        "y1": 2.06,
        "half": 1.78,
        "post": 0.12,
        "bar": 0.07,
        "panel": 0.05
      },
      "pedestal": {
        "half": 0.46,
        "y0": 1.68,
        "y1": 2.15,
        "capHalf": 0.54,
        "capY1": 2.28,
        "topHalf": 0.36,
        "topY1": 2.45,
        "cushHalf": 0.4,
        "cushY1": 2.55
      },
      "column": {
        "at": 1.3,
        "r": 0.12,
        "baseHalf": 0.17,
        "baseY0": 1.68,
        "baseY1": 1.9,
        "y0": 1.9,
        "y1": 4,
        "capHalf": 0.16,
        "capY1": 4.22,
        "beamY0": 4.17,
        "beamY1": 4.35,
        "beamW": 0.16,
        "beamHalf": 1.4
      },
      "roof": {
        "hx": 1.78,
        "y0": 4.35,
        "y1": 5.7,
        "curveExp": 1.45,
        "steps": 12,
        "perSide": 8,
        "drop": 0.12,
        "lift": 0.28,
        "cornerBall": 0.06,
        "neckR": 0.07,
        "neckY1": 5.76,
        "ballR": 0.14,
        "ballY": 5.86
      },
      "deity": {
        "y0": 2.55
      },
      "trays": {
        "r": 0.2,
        "h": 0.07,
        "y": 0.62,
        "ring": 2.18,
        "off": 0.95
      },
      "elephants": {
        "y": 1.68,
        "at": 1.38,
        "off": 0.62,
        "len": 0.56,
        "h": 0.4
      },
      "wear": {
        "size": 512,
        "granite": {
          "tile": 2.4,
          "field": 0.5,
          "vein": 0.92,
          "bump": 0.02
        },
        "lattice": {
          "tile": 1.72,
          "ground": [
            0.42,
            0.44,
            0.47
          ],
          "line": [
            0.86,
            0.66,
            0.26
          ],
          "bump": 0.03
        },
        "gold": {
          "tile": 2,
          "bump": 0.02,
          "wear": [
            0.72,
            0.6,
            0.42
          ],
          "grain": [
            0.8,
            0.72,
            0.55
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
                    valley?: number[], crest = 0.55): THREE.BufferGeometry {
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
    // `crest` below 0.55 narrows the pale crest further: the mosque's plate at 3x shows the pale
    // rib as about a quarter of the pitch, which is 0.35.
    const f = Math.pow((1 - Math.cos(ribs * ((j % seg) * Math.PI * 2 / seg))) / 2, crest);
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

export function createBrahmanStreetShrineModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Brahman Street Shrine';

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


  const sphereAt = (cx: number, cy: number, cz: number, rx: number, ry: number, rz: number, seg = 18) => {
    const g = new THREE.SphereGeometry(1, seg, Math.max(8, Math.round(seg * 0.7)));
    g.scale(rx, ry, rz); g.translate(cx, cy, cz); return g;
  };
  const rot = (g: THREE.BufferGeometry, ax: 'x' | 'y' | 'z', a: number) => {
    if (ax === 'x') g.rotateX(a); else if (ax === 'y') g.rotateY(a); else g.rotateZ(a);
    return g;
  };

  /** A square concave pyramid roof with smoothly upturned corners: steps rings from the eaves
   *  (t=0) to the apex, each ring a square of half-size hx * (1-t)^curveExp sampled perSide
   *  times per side so the faces shade smooth; corners lift by lift scaled by a bump that dies
   *  by t = 0.34 and by the square of the distance along the side, so the eaves sag between the
   *  corners as a Thai roof does. A vertical fascia drop hangs from the eaves ring. Indexed. */
  function sqRoof(hx: number, y0: number, y1: number, curveExp: number, steps: number, perSide: number,
                  drop: number, lift: number): THREE.BufferGeometry {
    const N = perSide * 4;
    const ringPt = (t: number, k: number): number[] => {
      const f = Math.pow(1 - t, curveExp), a = Math.max(hx * f, 0.01);
      const side = Math.floor(k / perSide), s = (k % perSide) / perSide;   // s in [0,1) along the side
      const u = 2 * s - 1;                                                   // -1..1, corners at +-1
      const g = Math.pow(Math.max(0, 1 - t / 0.34), 2) * Math.pow(Math.abs(u), 2.2);
      const y = y0 + (y1 - y0) * t + lift * g;
      // sides run anticlockwise seen from above: +x edge (z from -a to a), +z edge, -x edge, -z edge
      if (side === 0) return [a, y, u * a];
      if (side === 1) return [-u * a, y, a];
      if (side === 2) return [-a, y, -u * a];
      return [u * a, y, -a];
    };
    const pos: number[] = [], idx: number[] = [];
    // fascia ring (below the eaves), then the eaves ring and the rings above, then the apex
    for (let k = 0; k < N; k++) { const p = ringPt(0, k); pos.push(p[0], p[1] - drop, p[2]); }
    for (let i = 0; i <= steps; i++) for (let k = 0; k < N; k++) pos.push(...ringPt(i / steps, k));
    const apex = pos.length / 3; pos.push(0, y1, 0);
    const rings = steps + 2;   // fascia + eaves..top
    for (let i = 0; i < rings - 1; i++) for (let k = 0; k < N; k++) {
      const a = i * N + k, b = i * N + (k + 1) % N, c = (i + 1) * N + (k + 1) % N, d = (i + 1) * N + k;
      // rings run anticlockwise seen from above, so an outward slope is (a, c, b); the fascia
      // hangs the other way. Probed: (a, b, c) on the slopes gave face normals pointing DOWN.
      if (i === 0) idx.push(a, c, b, a, d, c); else idx.push(a, c, b, a, d, c);
    }
    const top = (rings - 1) * N;
    for (let k = 0; k < N; k++) idx.push(top + k, apex, top + (k + 1) % N);
    // soffit: a flat underside at the fascia bottom so the roof is closed from below
    const soffitC = pos.length / 3; pos.push(0, y0 - drop, 0);
    for (let k = 0; k < N; k++) idx.push(k, soffitC, (k + 1) % N);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g.toNonIndexed();
  }

  /* ---------------------------------------------------------------- granite base, block, pedestal
   * Everything in dark marbled granite is ONE component: the lower slab with its proud top plate,
   * the railed upper block with its foot band, and the deity's pedestal. Steps meet top-to-bottom
   * as opposed butts; the proud plate overhangs the slab by 0.12 so no co-facing edge shares a
   * plane. */
  {
    const S = G.slab, B = G.block, P = G.pedestal;
    const geo = mergeGeos([
      boxAt(0, (S.y0 + S.y1) / 2, 0, S.half * 2, S.y1 - S.y0, S.half * 2),
      boxAt(0, (S.y1 + S.plateY1) / 2, 0, S.plateHalf * 2, S.plateY1 - S.y1, S.plateHalf * 2),
      boxAt(0, (B.y0 + B.bandY1) / 2, 0, B.bandHalf * 2, B.bandY1 - B.y0, B.bandHalf * 2),
      boxAt(0, (B.bandY1 + B.y1) / 2, 0, B.half * 2, B.y1 - B.bandY1, B.half * 2),
      boxAt(0, (P.y0 + P.y1) / 2, 0, P.half * 2, P.y1 - P.y0, P.half * 2),
      boxAt(0, (P.capY1 + P.topY1) / 2, 0, P.topHalf * 2, P.topY1 - P.capY1, P.topHalf * 2),
    ]);
    add('base', 'Granite base and pedestal', geo, 'granite');
    colliders['base'] = {
      shape: 'box', localCenter: [0, 3.0, 0], halfExtents: [2.5, 3.0, 2.5],
      notes: 'Asset declares collider "box". One convex proxy over the whole shrine; the physics '
           + 'compound is a hand file measured with derive-colliders --measure.',
    };
  }

  /* ---------------------------------------------------------------- gilt fittings
   * Feet, rail frame (posts and bars), pedestal cap and cushion, eaves beam, roof, finial and
   * corner balls: one gold merge. The roof is the preamble's hipRoof as a PYRAMID (ridgeHalfZ
   * ~0) with a concave sweep and lifted corners, plus its own fascia drop. */
  {
    const F = G.feet, R = G.rail, P = G.pedestal, C = G.column, RF = G.roof;
    const parts: THREE.BufferGeometry[] = [];
    for (const sx of [-1, 1]) for (const sz of [-1, 1])
      parts.push(boxAt(sx * F.half, (F.y0 + F.y1) / 2, sz * F.half, F.size, F.y1 - F.y0, F.size));
    // rail posts and bars
    for (const sx of [-1, 1]) for (const sz of [-1, 1])
      parts.push(boxAt(sx * R.half, (R.y0 + R.y1) / 2 + 0.02, sz * R.half, R.post, R.y1 - R.y0 + 0.04, R.post));
    const span = R.half * 2 - R.post;
    for (const s of [-1, 1]) {
      for (const y of [R.y0 + R.bar / 2 + 0.02, R.y1 - R.bar / 2]) {
        parts.push(boxAt(s * R.half, y, 0, R.bar, R.bar, span));
        parts.push(boxAt(0, y, s * R.half, span, R.bar, R.bar));
      }
    }
    parts.push(boxAt(0, (P.y1 + P.capY1) / 2, 0, P.capHalf * 2, P.capY1 - P.y1, P.capHalf * 2));
    parts.push(boxAt(0, (P.topY1 + P.cushY1) / 2, 0, P.cushHalf * 2, P.cushY1 - P.topY1, P.cushHalf * 2));
    // eaves beam ring under the roof
    const bw = C.beamW, bh = C.beamY1 - C.beamY0, by = (C.beamY0 + C.beamY1) / 2;
    for (const s of [-1, 1]) {
      parts.push(boxAt(s * C.beamHalf, by, 0, bw, bh, C.beamHalf * 2 + bw));
      parts.push(boxAt(0, by, s * C.beamHalf, C.beamHalf * 2 - bw, bh, bw));
    }
    // roof
    parts.push(sqRoof(RF.hx, RF.y0, RF.y1, RF.curveExp, RF.steps, RF.perSide, RF.drop, RF.lift));
    parts.push(cylAt(0, (RF.y1 + RF.neckY1) / 2 - 0.02, 0, RF.neckR * 0.8, RF.neckR, RF.neckY1 - RF.y1 + 0.04, 12));
    parts.push(sphereAt(0, RF.ballY, 0, RF.ballR, RF.ballR, RF.ballR, 20));
    const cr = RF.hx - 0.03;
    for (const sx of [-1, 1]) for (const sz of [-1, 1])
      parts.push(sphereAt(sx * cr, RF.y0 + RF.lift + 0.02, sz * cr, RF.cornerBall, RF.cornerBall, RF.cornerBall, 10));
    add('gilt', 'Gilt roof, rail frame and fittings', mergeGeos(parts), 'gold');
  }

  /* ---------------------------------------------------------------- lattice rail panels
   * Four thin panels between the rail bars, on the white lattice material whose canvas paints
   * the gold meander over granite grey. They sit 3 cm INSIDE the bar faces. */
  {
    const R = G.rail;
    const y = (R.y0 + R.y1) / 2 + 0.01, h = R.y1 - R.y0 - R.bar * 2 - 0.02;
    const span = R.half * 2 - R.post - 0.02;
    const off = R.half - 0.03;
    add('rail-panels', 'Lattice rail panels', mergeGeos([
      boxAt(off, y, 0, R.panel, h, span), boxAt(-off, y, 0, R.panel, h, span),
      boxAt(0, y, off, span, h, R.panel), boxAt(0, y, -off, span, h, R.panel),
    ]), 'lattice');
  }

  /* ---------------------------------------------------------------- columns
   * Four gilded columns as ONE InstancedMesh: base block, ringed shaft lathe, capital block and
   * two bracket wings under the beam. */
  {
    const C = G.column;
    const h = C.y1 - C.y0;
    const prof: number[][] = [
      [C.r * 1.35, 0], [C.r * 1.35, 0.06], [C.r * 1.05, 0.10], [C.r, 0.18], [C.r, h - 0.22],
      [C.r * 1.08, h - 0.16], [C.r * 1.08, h - 0.10], [C.r * 1.25, h - 0.04], [C.r * 1.25, h], [0, h],
    ];
    const unit = mergeGeos([
      boxAt(0, -(C.baseY1 - C.baseY0) / 2 + 0.005, 0, C.baseHalf * 2, C.baseY1 - C.baseY0, C.baseHalf * 2),
      lathe(prof, 20),
      boxAt(0, h + (C.capY1 - C.y1) / 2, 0, C.capHalf * 2, C.capY1 - C.y1, C.capHalf * 2),
      rot(boxAt(0, 0, 0, 0.30, 0.14, 0.06), 'z', 0.5).translate(0.20, h + 0.10, 0),
      rot(boxAt(0, 0, 0, 0.30, 0.14, 0.06), 'z', -0.5).translate(-0.20, h + 0.10, 0),
    ]);
    const mats: THREE.Matrix4[] = [];
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const yaw = Math.abs(sx) > 0 && sx * sz > 0 ? Math.PI / 2 : 0;
      mats.push(new THREE.Matrix4().compose(new THREE.Vector3(sx * C.at, C.y0, sz * C.at),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw), new THREE.Vector3(1, 1, 1)));
    }
    addInst('columns', 'Gilded columns', unit, 'gold', mats);
  }

  /* ---------------------------------------------------------------- the deity
   * A seated four-faced figure: crossed legs as a flattened ellipsoid, a torso tube from hips to
   * neck, a head with the four faces suggested by four nose/brow lobes, a tiered hair spire, a
   * raised right forearm and a left arm holding a trident. Gold, one geometry. */
  {
    const y0 = G.deity.y0;
    const parts: THREE.BufferGeometry[] = [];
    parts.push(sphereAt(0, y0 + 0.15, 0, 0.36, 0.16, 0.30, 20));                        // crossed legs
    parts.push(sphereAt(0.04, y0 + 0.28, 0, 0.30, 0.13, 0.24, 16));                     // lap
    parts.push(sphereAt(0.22, y0 + 0.20, 0.30, 0.13, 0.12, 0.13, 10));                  // knees
    parts.push(sphereAt(0.22, y0 + 0.20, -0.30, 0.13, 0.12, 0.13, 10));
    // tubeAlong runs along z with stations [z, cx, cy, rx, ry]; built upright then stood up
    parts.push(rot(tubeAlong([
      [0.26, 0, 0, 0.21, 0.17], [0.48, 0, 0, 0.18, 0.15], [0.72, 0, 0, 0.22, 0.16],
      [0.86, 0, 0, 0.27, 0.17], [0.93, 0, 0, 0.13, 0.11], [1.02, 0, 0, 0.08, 0.08],
    ], 20), 'x', -Math.PI / 2).translate(0, y0, 0));
    parts.push(sphereAt(0, y0 + 1.18, 0, 0.165, 0.18, 0.165, 18));                      // head
    for (let k = 0; k < 4; k++) {                                                        // four faces
      const a = k * Math.PI / 2;
      parts.push(sphereAt(Math.cos(a) * 0.13, y0 + 1.15, -Math.sin(a) * 0.13, 0.05, 0.07, 0.05, 8));
    }
    parts.push(lathe([[0.13, 0], [0.14, 0.05], [0.10, 0.10], [0.11, 0.15], [0.07, 0.22], [0.075, 0.28], [0.035, 0.36], [0.02, 0.42], [0, 0.46]], 16, y0 + 1.30)); // hair spire
    // shoulders / upper arms
    parts.push(sphereAt(0.0, y0 + 0.90, 0.26, 0.09, 0.09, 0.09, 10));
    parts.push(sphereAt(0.0, y0 + 0.90, -0.26, 0.09, 0.09, 0.09, 10));
    // right arm (viewer's left, +z): upper arm down, forearm raised, open hand
    parts.push(rot(cylAt(0, 0, 0, 0.05, 0.06, 0.34, 10), 'x', -0.35).translate(0.06, y0 + 0.74, 0.32));
    parts.push(rot(cylAt(0, 0, 0, 0.045, 0.055, 0.36, 10), 'x', 0.15).translate(0.14, y0 + 0.80, 0.36));
    parts.push(boxAt(0.16, y0 + 1.03, 0.36, 0.11, 0.15, 0.06));
    // left arm (-z): down to the knee, hand on the trident
    parts.push(rot(cylAt(0, 0, 0, 0.05, 0.06, 0.36, 10), 'x', 0.30).translate(0.06, y0 + 0.72, -0.30));
    parts.push(rot(cylAt(0, 0, 0, 0.045, 0.05, 0.30, 10), 'z', -0.9).translate(0.20, y0 + 0.50, -0.30));
    parts.push(boxAt(0.30, y0 + 0.44, -0.30, 0.10, 0.10, 0.08));
    // trident
    parts.push(cylAt(0.32, y0 + 0.72, -0.30, 0.02, 0.025, 1.20, 8));
    parts.push(boxAt(0.32, y0 + 1.34, -0.30, 0.04, 0.18, 0.04));
    parts.push(boxAt(0.32, y0 + 1.30, -0.22, 0.04, 0.16, 0.04));
    parts.push(boxAt(0.32, y0 + 1.30, -0.38, 0.04, 0.16, 0.04));
    parts.push(boxAt(0.32, y0 + 1.24, -0.30, 0.04, 0.04, 0.20));
    add('deity', 'Four-faced deity figure', mergeGeos(parts), 'gold');
  }

  /* ---------------------------------------------------------------- elephants
   * Eight carved teak elephants as ONE InstancedMesh: body, head, trunk, ears, four legs, tusks. */
  {
    const E = G.elephants;
    const L = E.len, H = E.h;
    const parts: THREE.BufferGeometry[] = [];
    parts.push(sphereAt(0, H * 0.62, 0, L * 0.50, H * 0.36, L * 0.30, 12));            // body
    parts.push(sphereAt(L * 0.48, H * 0.72, 0, L * 0.22, H * 0.26, L * 0.22, 10));     // head
    parts.push(rot(tubeAlong([
      [L * 0.62, 0, H * 0.66, 0.055, 0.055], [L * 0.78, 0, H * 0.50, 0.045, 0.045],
      [L * 0.84, 0, H * 0.28, 0.035, 0.035], [L * 0.80, 0, H * 0.08, 0.028, 0.028],
    ], 8), 'y', Math.PI / 2));                                                        // trunk, z -> x
    for (const s of [-1, 1]) {
      parts.push(rot(boxAt(0, 0, 0, 0.16, 0.16, 0.02), 'y', s * 0.4).translate(L * 0.40, H * 0.72, s * L * 0.24)); // ear
      parts.push(rot(cylAt(0, 0, 0, 0.012, 0.018, 0.12, 6), 'x', s * 0.3).translate(L * 0.66, H * 0.50, s * 0.06)); // tusk
      for (const f of [-1, 1])
        parts.push(cylAt(f * L * 0.28, H * 0.18, s * L * 0.16, 0.048, 0.055, H * 0.38, 8));  // legs
    }
    parts.push(rot(cylAt(0, 0, 0, 0.008, 0.02, 0.14, 6), 'x', 0.9).translate(-L * 0.52, H * 0.60, 0)); // tail
    const unit = mergeGeos(parts);
    const mats: THREE.Matrix4[] = [];
    // two per side, walking along the side, facing anticlockwise round the shrine
    const place = (x: number, z: number, yaw: number) => mats.push(new THREE.Matrix4().compose(
      new THREE.Vector3(x, E.y, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
      new THREE.Vector3(1, 1, 1)));
    for (const o of [-E.off, E.off]) {
      place(E.at, o, Math.PI / 2);  place(-E.at, o, -Math.PI / 2);
      place(o, E.at, 0);            place(o, -E.at, Math.PI);
    }
    addInst('elephants', 'Offered teak elephants', unit, 'teak', mats);
  }

  /* ---------------------------------------------------------------- brass trays
   * Eight offering trays on the lower slab as ONE InstancedMesh lathe (closed bottom). */
  {
    const T = G.trays;
    const unit = lathe([[0, 0], [T.r * 0.75, 0], [T.r * 0.78, 0.012], [T.r, T.h - 0.01], [T.r * 1.04, T.h], [T.r * 0.92, T.h], [T.r * 0.70, 0.02], [0, 0.02]], 20, T.y);
    const mats: THREE.Matrix4[] = [];
    for (const o of [-T.off, T.off]) for (const s of [-1, 1]) {
      mats.push(new THREE.Matrix4().setPosition(s * T.ring, 0, o));
      mats.push(new THREE.Matrix4().setPosition(o, 0, s * T.ring));
    }
    addInst('trays', 'Brass offering trays', unit, 'brass', mats);
  }

  /* ---------------------------------------------------------------- surface canvases
   * Three Canvas 2D tiles bound after construction: marbled granite (dark field with white veins
   * as a multiplier under the vein-toned material), the rail's gold meander on grey, and a light
   * wear mottle on the gilt. Under Node every material keeps its flat colour. */
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
      const ctx = cv.getContext('2d', { willReadFrequently: true });
      if (!ctx) return null;
      const S = size;
      const wrapped = (fn: () => void) => {
        for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
          ctx.save(); ctx.translate(ox * S, oy * S); fn(); ctx.restore();
        }
      };
      draw(ctx, rng(seed), S, wrapped);
      return cv;
    }
    const projUv = (geo: THREE.BufferGeometry, tile: number) => {
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
    };
    const bind = (mat: THREE.MeshStandardMaterial, cv: HTMLCanvasElement | null, bump: number) => {
      if (!cv) return;
      const tex = new THREE.CanvasTexture(cv);
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex; mat.bumpMap = tex; mat.bumpScale = bump; mat.needsUpdate = true;
    };
    projUv(meshes['base'].geometry as THREE.BufferGeometry, W.granite.tile);
    projUv(meshes['gilt'].geometry as THREE.BufferGeometry, W.gold.tile);
    projUv(meshes['columns'].geometry as THREE.BufferGeometry, W.gold.tile);
    projUv(meshes['deity'].geometry as THREE.BufferGeometry, W.gold.tile);
    // rail panels: u along the panel, v across its height, one tile per side
    {
      const R = G.rail, geo = meshes['rail-panels'].geometry as THREE.BufferGeometry;
      const p = geo.getAttribute('position'), n = geo.getAttribute('normal');
      const out = new Float32Array(p.count * 2);
      const h = R.y1 - R.y0 - R.bar * 2 - 0.02, yb = (R.y0 + R.y1) / 2 + 0.01 - h / 2;
      for (let i = 0; i < p.count; i++) {
        const along = Math.abs(n.getX(i)) > 0.5 ? p.getZ(i) : p.getX(i);
        out[i * 2] = (along + R.half) / W.lattice.tile;
        out[i * 2 + 1] = (p.getY(i) - yb) / h * (h / W.lattice.tile) * (W.lattice.tile / h);
      }
      geo.setAttribute('uv', new THREE.BufferAttribute(out, 2));
    }
    {
      const P = W.granite;
      bind(materials.granite, makeTile(31, (ctx, r, S, wrapped) => {
        const f = P.field;
        ctx.fillStyle = css([f * 0.96, f, f * 1.05], 1); ctx.fillRect(0, 0, S, S);
        // cloudy variation of the field
        const cl: number[][] = [];
        for (let i = 0; i < 14; i++) cl.push([r() * S, r() * S, S * (0.08 + 0.16 * r()), r() < 0.5 ? f * 0.72 : f * 1.25]);
        wrapped(() => {
          ctx.filter = 'blur(18px)';
          for (const [x, y, rr, t] of cl) { ctx.fillStyle = css([t * 0.96, t, t * 1.05], 0.5); ctx.beginPath(); ctx.arc(x, y, rr, 0, Math.PI * 2); ctx.fill(); }
          ctx.filter = 'none';
        });
        // veins: jittered polylines, a few bold and many fine
        const veins: { pts: number[][], w: number, a: number }[] = [];
        for (let i = 0; i < 26; i++) {
          const pts: number[][] = []; let x = r() * S, y = r() * S; const ang0 = r() * Math.PI * 2;
          const n = 8 + Math.floor(r() * 10);
          for (let k = 0; k < n; k++) { pts.push([x, y]); const a = ang0 + (r() - 0.5) * 1.6; const l = S * (0.03 + 0.05 * r()); x += Math.cos(a) * l; y += Math.sin(a) * l; }
          veins.push({ pts, w: i < 6 ? 3 + r() * 4 : 1 + r() * 1.6, a: i < 6 ? 0.55 : 0.32 });
        }
        wrapped(() => {
          ctx.lineCap = 'round'; ctx.lineJoin = 'round';
          for (const v of veins) {
            ctx.filter = v.w > 2.5 ? 'blur(2.5px)' : 'blur(0.8px)';
            ctx.strokeStyle = css([P.vein, P.vein, P.vein], v.a); ctx.lineWidth = v.w;
            ctx.beginPath(); ctx.moveTo(v.pts[0][0], v.pts[0][1]);
            for (let k = 1; k < v.pts.length; k++) ctx.lineTo(v.pts[k][0], v.pts[k][1]);
            ctx.stroke();
          }
          ctx.filter = 'none';
        });
        // fine speckle
        const p = new Path2D();
        for (let i = 0; i < 6000; i++) { const x = r() * S, y = r() * S, d = 0.6 + r() * 1.2; p.rect(x, y, d, d); }
        wrapped(() => { ctx.fillStyle = css([0.9, 0.9, 0.92], 0.25); ctx.fill(p); });
      }), P.bump);
    }
    {
      const P = W.lattice;
      bind(materials.lattice, makeTile(77, (ctx, r, S, wrapped) => {
        ctx.fillStyle = css(P.ground, 1); ctx.fillRect(0, 0, S, S);
        // a meander (key-fret) band: repeating square spirals along u, at 1/4 tile height (v spans the panel)
        const cells = 7, cw = S / cells, lw = S * 0.028;
        ctx.strokeStyle = css(P.line, 1); ctx.lineWidth = lw; ctx.lineCap = 'square';
        const vBand = S * 0.5, vh = S * 0.62;   // canvas rows the panel samples: v 0..1 maps to the whole tile height
        for (let c = 0; c < cells; c++) {
          const x0 = c * cw + cw * 0.12, w = cw * 0.76, y0 = vBand - vh / 2, h = vh;
          ctx.beginPath();
          ctx.moveTo(x0, y0 + h); ctx.lineTo(x0, y0); ctx.lineTo(x0 + w, y0); ctx.lineTo(x0 + w, y0 + h * 0.68);
          ctx.lineTo(x0 + w * 0.32, y0 + h * 0.68); ctx.lineTo(x0 + w * 0.32, y0 + h * 0.34); ctx.lineTo(x0 + w * 0.66, y0 + h * 0.34);
          ctx.stroke();
        }
        // top and bottom gold rails inside the panel
        ctx.fillStyle = css(P.line, 1);
        ctx.fillRect(0, S * 0.11, S, lw * 0.8); ctx.fillRect(0, S * 0.89 - lw * 0.8, S, lw * 0.8);
        // a little tarnish grain
        const p = new Path2D();
        for (let i = 0; i < 2500; i++) { const x = r() * S, y = r() * S, d = 0.8 + r() * 1.2; p.rect(x, y, d, d); }
        ctx.fillStyle = 'rgba(30,26,20,0.18)'; ctx.fill(p);
      }), P.bump);
      const t = materials.lattice.map as THREE.Texture; if (t) t.flipY = true;
    }
    {
      const P = W.gold;
      bind(materials.gold, makeTile(5, (ctx, r, S, wrapped) => {
        ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, S, S);
        const cl: number[][] = [];
        for (let i = 0; i < 10; i++) cl.push([r() * S, r() * S, S * (0.06 + 0.14 * r())]);
        wrapped(() => {
          ctx.filter = 'blur(14px)';
          for (const [x, y, rr] of cl) { ctx.fillStyle = css(P.wear, 0.28); ctx.beginPath(); ctx.arc(x, y, rr, 0, Math.PI * 2); ctx.fill(); }
          ctx.filter = 'none';
        });
        const p = new Path2D();
        for (let i = 0; i < 4000; i++) { const x = r() * S, y = r() * S, d = 0.6 + r() * 1.2; p.rect(x, y, d, d); }
        wrapped(() => { ctx.fillStyle = css(P.grain, 0.10); ctx.fill(p); });
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
  const root = createBrahmanStreetShrineModel(options);
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
 * vibe3d's one-argument entry: the same factory under the name a pack consumer installs and
 * calls. `model.ts` beside this file re-exports it as the item's `createModel`.
 */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}
