import * as THREE from 'three';

/**
 * Four-Wheel Plastic Refuse Bin -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else. The bundle is CommonJS with a bare
 * require("three") and the host page injects its OWN three instance; a second copy means this
 * file's Mesh is not the renderer's Mesh and nothing draws.
 *
 * Envelope 0.94 x 1.22 x 0.78 m, origin base-center (the castors' contact point is y=0), +Y up,
 * +Z the front wall.
 *
 * The body is RECTANGULAR and FLAT-SIDED and tapers INWARD toward the base -- the opposite of the
 * open-top skip bin in this kit, and the thing that most separates the two silhouettes. The plate
 * was regenerated specifically to kill a round domed reading, so a cylindrical body is the one
 * failure this prop must not have.
 *
 * Budget (thaikit medium class): 2 draw calls, 2 materials, 4 unique geometries, 2000 triangles.
 * The tub, rib pilasters, rim lip and all four castors merge into ONE geometry. The lid is the
 * second draw call and is separate ONLY because it hinges and so needs its own node.
 */

export type ProceduralModelOptions = {
  wireframe?: boolean;
  castShadow?: boolean;
  receiveShadow?: boolean;
  baseUrl?: string;
};

export type ProceduralModelRuntime = {
  nodes: Record<string, THREE.Object3D>;
  meshes: Record<string, THREE.Mesh>;
  sockets: Record<string, THREE.Object3D>;
  colliders: Record<string, unknown>;
  destructionGroups: Record<string, THREE.Object3D[]>;
};

const CONFIG = {
  colors: {
    // crops/body.png measured #46624c at luma 90.4, saturation 0.281. LIFTED to luma 118: a
    // side-lit face renders at ~0.56 of its painted luma, so the measurement would land at 51,
    // below the harness backdrop's 58, and the gate reads that as a hole. Saturation is kept
    // above 0.26 so the prop clears on chroma as well as value.
    green: 0x5c7d62,
    tyre: 0x3b3b3b,
    fork: 0x8d8f92,
  },
  material: { id: 'moulded-plastic', roughness: 0.62, metalness: 0.0 },
  /* WIDTH CORRECTED 2026-08-31, from 1.37 m to 0.94 m. The declared 1.37 was a list-time estimate
   * and it made this bin half again as wide as it should be relative to its own depth. Two
   * independent readings agree and neither is the declaration:
   *
   *   - The Meshy proxy's band table read width/height 0.65-0.76 across bands 2-9 against this
   *     build's 0.94-1.09 -- eight of ten bands over the 0.12 flag, mean |delta width| 0.34 -- and
   *     it read DEPTH at 0.50-0.62 against the build's 0.55-0.64, which is already right. So the
   *     error is in ONE axis, which is what makes it a declaration error rather than a scale one.
   *   - The plate, read as a 3/4 view at roughly 30 degrees yaw: the front face spans ~620 px and
   *     the side ~300, so the true width/depth is (620/cos30)/(300/sin30) = 1.19. The proxy says
   *     1.23. The build said 1.76.
   *
   * Depth and height are untouched at 0.78 and 1.22; width follows the agreed width/depth of 1.20.
   * Everything below is scaled on X by 0.678 and nothing else moves. */
  body: {
    footY: 0.15, rimY: 1.00, lipY: 1.05,
    footHW: 0.390, footHD: 0.300,   // base 0.78 x 0.60
    rimHW: 0.452, rimHD: 0.372,     // wall head; the proud lip above it reaches the declared 0.94 x 0.78
    corner: 0.06, seg: 4,           // 4 quadrants x 5 points = 20 points per ring
    lipProud: 0.018,
    floorY: 0.30,                   // interior floor, seen only when the lid is open
  },
  /* The ribs were 12 mm proud and 75 mm wide and read as scratches rather than as the deep moulded
   * channels the plate shows running the full height of the wall. Doubled in relief and widened;
   * the spread tightens with the narrower body so five still fit across the front without
   * touching. They stay PROUD pilasters rather than cut channels -- at prop distance the two read
   * the same, and cutting them would mean booleaning the tapered loft for no visible gain. */
  // y1 stops at 0.88, below the rim, so the two front lugs sit clear above the channels
  // instead of growing out of the top of whichever rib they land in front of.
  ribs: { count: 5, w: 0.070, proud: 0.026, y0: 0.22, y1: 0.88, spread: 0.09 },
  castor: { r: 0.085, tyreW: 0.05, seg: 8, forkH: 0.075, insetX: 0.13, insetZ: 0.10 },
  /* The lid was a plain slab with one thin proud strip. The plate has a stepped lid that
   * OVERHANGS the body all round, a large recessed centre panel inside a raised border, and
   * diagonal grip ribbing at the corners -- which is most of what anyone recognises about a bin
   * lid seen from above, and this prop is nearly always seen from above. */
  lid: { y0: 1.05, y1: 1.204, hw: 0.487, hd: 0.408, recess: 0.02,
         overhang: 0.035, grip: { n: 5, w: 0.026, len: 0.100, gap: 0.020, h: 0.012 } },
};

type Pt = { x: number; z: number };

function roundedRectRing(hw: number, hd: number, r: number, seg: number): Pt[] {
  const rad = Math.min(r, Math.min(hw, hd) * 0.98);
  const cx = hw - rad, cz = hd - rad;
  const centres = [{ x: +cx, z: +cz }, { x: -cx, z: +cz }, { x: -cx, z: -cz }, { x: +cx, z: -cz }];
  const pts: Pt[] = [];
  for (let q = 0; q < 4; q += 1) {
    const c = centres[q];
    for (let i = 0; i <= seg; i += 1) {
      const a = ((q * 90 + (i * 90) / seg) * Math.PI) / 180;
      pts.push({ x: c.x + rad * Math.cos(a), z: c.z + rad * Math.sin(a) });
    }
  }
  return pts;
}

class Soup {
  pos: number[] = [];
  col: number[] = [];
  private c = new THREE.Color();
  tri(a: THREE.Vector3, b: THREE.Vector3, cc: THREE.Vector3, hex: number): void {
    this.pos.push(a.x, a.y, a.z, b.x, b.y, b.z, cc.x, cc.y, cc.z);
    // Vertex colours multiply in LINEAR space, so the sRGB measurement is converted once here.
    this.c.setHex(hex, THREE.SRGBColorSpace);
    for (let i = 0; i < 3; i += 1) this.col.push(this.c.r, this.c.g, this.c.b);
  }
  quad(a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3, d: THREE.Vector3, hex: number): void {
    this.tri(a, b, c, hex); this.tri(a, c, d, hex);
  }
  box(cx: number, cy: number, cz: number, w: number, h: number, d: number, hex: number): void {
    const x0 = cx - w / 2, x1 = cx + w / 2, y0 = cy - h / 2, y1 = cy + h / 2, z0 = cz - d / 2, z1 = cz + d / 2;
    const p = [v3(x0, y0, z0), v3(x1, y0, z0), v3(x1, y1, z0), v3(x0, y1, z0),
               v3(x0, y0, z1), v3(x1, y0, z1), v3(x1, y1, z1), v3(x0, y1, z1)];
    this.quad(p[4], p[5], p[6], p[7], hex); this.quad(p[1], p[0], p[3], p[2], hex);
    this.quad(p[5], p[1], p[2], p[6], hex); this.quad(p[0], p[4], p[7], p[3], hex);
    this.quad(p[3], p[7], p[6], p[2], hex); this.quad(p[0], p[1], p[5], p[4], hex);
  }
  /* A rib lying on a LEANING wall: a bar of constant width and thickness whose two ends sit at
   * different depths, so its outer face stays parallel to the wall it is applied to. The wall of
   * this bin leans outward as it rises, and a rib is a moulding ON that wall, not a box near it.
   *
   * This exists because the two obvious alternatives both fail visibly. One straight box set at
   * the wall depth of its own midpoint is buried over half its length and floating over the other
   * half. A STACK of short straight boxes -- which was tried -- steps by the full taper over each
   * segment: 18 mm a step at four segments here, which renders as an unmistakable staircase, and
   * more segments only makes the staircase finer rather than removing it.
   */
  wallRib(cx: number, w: number, yA: number, zA: number, yB: number, zB: number,
          thick: number, sz: number, hex: number): void {
    const x0 = cx - w / 2, x1 = cx + w / 2;
    const a0 = sz * zA, a1 = sz * (zA + thick), b0 = sz * zB, b1 = sz * (zB + thick);
    const p = [v3(x0, yA, a0), v3(x1, yA, a0), v3(x1, yB, b0), v3(x0, yB, b0),
               v3(x0, yA, a1), v3(x1, yA, a1), v3(x1, yB, b1), v3(x0, yB, b1)];
    // Wound so the OUTER face (the 4-5-6-7 ring) faces away from the wall on either side.
    if (sz > 0) {
      this.quad(p[4], p[5], p[6], p[7], hex); this.quad(p[1], p[0], p[3], p[2], hex);
      this.quad(p[5], p[1], p[2], p[6], hex); this.quad(p[0], p[4], p[7], p[3], hex);
      this.quad(p[3], p[7], p[6], p[2], hex); this.quad(p[0], p[1], p[5], p[4], hex);
    } else {
      this.quad(p[7], p[6], p[5], p[4], hex); this.quad(p[2], p[3], p[0], p[1], hex);
      this.quad(p[6], p[2], p[1], p[5], hex); this.quad(p[3], p[7], p[4], p[0], hex);
      this.quad(p[2], p[6], p[7], p[3], hex); this.quad(p[4], p[5], p[1], p[0], hex);
    }
  }
  /* A box turned about Y, for the lid's diagonal grip ribbing. Built at the origin and rotated
   * before translating, so the rotation is about the bar's OWN centre rather than about the lid's
   * -- rotating after translating swings the bar away from the corner it belongs to. */
  boxRotY(cx: number, cy: number, cz: number, w: number, h: number, d: number, ang: number, hex: number): void {
    const co = Math.cos(ang), si = Math.sin(ang);
    const x0 = -w / 2, x1 = w / 2, y0 = cy - h / 2, y1 = cy + h / 2, z0 = -d / 2, z1 = d / 2;
    const m = (x: number, y: number, z: number) => v3(cx + x * co + z * si, y, cz - x * si + z * co);
    const p = [m(x0, y0, z0), m(x1, y0, z0), m(x1, y1, z0), m(x0, y1, z0),
               m(x0, y0, z1), m(x1, y0, z1), m(x1, y1, z1), m(x0, y1, z1)];
    this.quad(p[4], p[5], p[6], p[7], hex); this.quad(p[1], p[0], p[3], p[2], hex);
    this.quad(p[5], p[1], p[2], p[6], hex); this.quad(p[0], p[4], p[7], p[3], hex);
    this.quad(p[3], p[7], p[6], p[2], hex); this.quad(p[0], p[1], p[5], p[4], hex);
  }
  geometry(): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    // Written for EVERY vertex: a vertexColors material renders BLACK where the attribute is absent.
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.computeVertexNormals();
    return g;
  }
}

const v3 = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
const at = (p: Pt, y: number) => v3(p.x, y, p.z);

function loft(s: Soup, lo: Pt[], ly: number, up: Pt[], uy: number, hex: number, outward: boolean): void {
  const n = lo.length;
  for (let i = 0; i < n; i += 1) {
    const j = (i + 1) % n;
    const L0 = at(lo[i], ly), L1 = at(lo[j], ly), U0 = at(up[i], uy), U1 = at(up[j], uy);
    if (outward) s.quad(L0, U0, U1, L1, hex); else s.quad(L0, L1, U1, U0, hex);
  }
}

function annulus(s: Soup, outer: Pt[], inner: Pt[], y: number, hex: number, up: boolean): void {
  const n = outer.length;
  for (let i = 0; i < n; i += 1) {
    const j = (i + 1) % n;
    const O0 = at(outer[i], y), O1 = at(outer[j], y), I0 = at(inner[i], y), I1 = at(inner[j], y);
    if (up) s.quad(O0, I0, I1, O1, hex); else s.quad(O0, O1, I1, I0, hex);
  }
}

function cap(s: Soup, ring: Pt[], y: number, hex: number, up: boolean): void {
  const c = v3(0, y, 0), n = ring.length;
  for (let i = 0; i < n; i += 1) {
    const j = (i + 1) % n, A = at(ring[i], y), B = at(ring[j], y);
    if (up) s.tri(c, B, A, hex); else s.tri(c, A, B, hex);
  }
}

/** A castor: a tyre disc on a swivel fork, both merged into the body geometry. */
function castor(s: Soup, cx: number, cz: number, C: typeof CONFIG): void {
  const { r, tyreW, seg, forkH } = C.castor;
  const cy = r;
  for (let i = 0; i < seg; i += 1) {
    const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
    const p0 = v3(cx + r * Math.cos(a0), cy + r * Math.sin(a0), cz - tyreW / 2);
    const p1 = v3(cx + r * Math.cos(a1), cy + r * Math.sin(a1), cz - tyreW / 2);
    const q0 = v3(p0.x, p0.y, cz + tyreW / 2), q1 = v3(p1.x, p1.y, cz + tyreW / 2);
    s.quad(p0, p1, q1, q0, C.colors.tyre);                       // tread
    s.tri(v3(cx, cy, cz + tyreW / 2), q0, q1, C.colors.tyre);    // +Z cheek
    s.tri(v3(cx, cy, cz - tyreW / 2), p1, p0, C.colors.tyre);    // -Z cheek
  }
  s.box(cx, cy + r + forkH / 2, cz, 0.055, forkH, tyreW + 0.03, C.colors.fork);
}

export function createFourWheelPlasticRefuseBinModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Four-Wheel Plastic Refuse Bin';

  const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: CONFIG.material.roughness,
    metalness: CONFIG.material.metalness,
    vertexColors: true,
    wireframe: options.wireframe ?? false,
  });
  mat.name = CONFIG.material.id;

  const B = CONFIG.body, C = CONFIG.colors;
  const foot = roundedRectRing(B.footHW, B.footHD, B.corner, B.seg);
  const rim = roundedRectRing(B.rimHW, B.rimHD, B.corner, B.seg);
  const lipOut = roundedRectRing(B.rimHW + B.lipProud, B.rimHD + B.lipProud, B.corner, B.seg);
  const inner = roundedRectRing(B.rimHW - 0.03, B.rimHD - 0.03, B.corner, B.seg);
  const innerFoot = roundedRectRing(B.footHW - 0.03, B.footHD - 0.03, B.corner, B.seg);

  const s = new Soup();
  // Tub: base ring up to the rim, tapering OUTWARD as it rises (so the base is narrowest).
  loft(s, foot, B.footY, rim, B.rimY, C.green, true);
  cap(s, foot, B.footY, C.green, false);                          // underside
  // Rim lip standing proud of the wall head, then the flat top the lid seats on.
  loft(s, rim, B.rimY, lipOut, B.lipY, C.green, true);
  annulus(s, lipOut, inner, B.lipY, C.green, true);
  // A shallow interior, seen only when the lid is open.
  loft(s, innerFoot, B.floorY, inner, B.lipY, C.green, false);
  cap(s, innerFoot, B.floorY, C.green, true);

  /* Rib pilasters up both long walls.
   *
   * THE WALL TAPERS, SO A STRAIGHT BOX CANNOT SIT ON IT. The previous build placed one box per rib
   * at the wall depth computed for the rib's MIDPOINT, which is correct at exactly one height and
   * wrong everywhere else: the wall leans outward as it rises, so the rib was buried in the wall
   * over its top half and standing off it over the bottom half. It rendered as a fin with a step
   * in it that stopped short of both ends -- which is what "the ribs look like scratches" actually
   * was, and no amount of extra relief would have fixed it.
   *
   * So each rib is a STACK of short boxes, each set at the wall depth for its own segment. Four
   * segments is enough that the staircase is under a millimetre per step at this taper and reads
   * as a continuous moulding. */
  const R = CONFIG.ribs;
  const depthAt = (y: number) =>
    B.footHD + (B.rimHD - B.footHD) * ((y - B.footY) / (B.rimY - B.footY));
  for (let i = 0; i < R.count; i += 1) {
    const t = (i + 0.5) / R.count;
    const x = (t - 0.5) * 2 * (B.rimHW - R.spread);
    for (const sz of [-1, 1]) {
      s.wallRib(x, R.w, R.y0, depthAt(R.y0), R.y1, depthAt(R.y1), R.proud, sz, C.green);
    }
  }

  /* The two moulded lugs on the front wall just under the rim. They are small, and they are the
   * only thing that tells the front of this bin from its back at any distance -- the plate has
   * them and the previous build had a bin with no front. */
  for (const sx of [-1, 1]) {
    s.box(sx * B.rimHW * 0.45, B.rimY - 0.075, B.rimHD + 0.015, 0.075, 0.105, 0.030, C.green);
  }

  // Four castors, one per corner, carrying the tub clear of the ground.
  const K = CONFIG.castor;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    castor(s, sx * (B.footHW - K.insetX), sz * (B.footHD - K.insetZ), CONFIG);
  }

  const bodyMesh = new THREE.Mesh(s.geometry(), mat);
  bodyMesh.name = 'Tub, rib pilasters, rim lip and castors';
  bodyMesh.castShadow = options.castShadow ?? true;
  bodyMesh.receiveShadow = options.receiveShadow ?? true;
  root.add(bodyMesh);

  // The LID gets its own node because it genuinely hinges, along the rear top edge. The hinge
  // group sits AT the hinge line so a game can rotate it directly on +X.
  const L = CONFIG.lid;
  const hinge = new THREE.Group();
  hinge.name = 'lid-hinge';
  hinge.position.set(0, L.y0, -L.hd);
  root.add(hinge);

  const ls = new Soup();
  const skirt = L.y1 - L.y0;
  /* The lid is TWO steps, not a slab. The lower step is a thin apron that OVERHANGS the body all
   * round -- the plate shows a clear shadow gap under the lid edge on every side, and a lid flush
   * with the wall below it reads as a closed box rather than as a lid. The upper step is inset
   * from it, which is the moulded shoulder that runs round a real bin lid.
   *
   * Authored in the hinge's frame: +Z runs forward from the hinge line, so the lid's centre is at
   * z = L.hd and its far edge at 2 * L.hd. */
  const oh = L.overhang;
  ls.box(0, skirt * 0.3, L.hd, (L.hw + oh) * 2, skirt * 0.6, (L.hd + oh) * 2, C.green);
  ls.box(0, skirt * 0.8, L.hd, L.hw * 2, skirt * 0.4, L.hd * 2, C.green);
  /* The moulded centre panel stands PROUD of the lid's top rather than being sunk into it. That is
   * the z-fighting rule, not a stylistic choice: sunk, its top face would sit in the same plane as
   * the lid top facing the same way, and the pair tears into interleaved triangles as the camera
   * moves. Proud, it also reads correctly -- the plate's panel is bordered by a raised rim. */
  ls.box(0, skirt + 0.010, L.hd, L.hw * 1.20, 0.020, L.hd * 1.15, C.green);

  /* Diagonal grip ribbing at the two front corners, as the plate has it. Three bars per corner,
   * each rotated 45 degrees about Y so they run corner-to-corner, and each standing proud of the
   * lid top by the same 20 mm as the centre panel so no face is ever coincident with it. This is
   * the detail that most says "bin lid" from directly above, which is the angle this prop is
   * nearly always seen from in a level. */
  const GR = L.grip;
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      for (let i = 0; i < GR.n; i += 1) {
        const off = (i - (GR.n - 1) / 2) * GR.gap;
        ls.boxRotY(
          sx * (L.hw - GR.len * 0.60) + sx * off,
          skirt + 0.020 - GR.h / 2 + 0.004,
          L.hd + sz * (L.hd - GR.len * 0.55) - sz * off,
          GR.len, GR.h, GR.w, -sx * sz * Math.PI / 4, C.green);
      }
    }
  }
  const lidMesh = new THREE.Mesh(ls.geometry(), mat);
  lidMesh.name = 'Hinged lid';
  lidMesh.castShadow = options.castShadow ?? true;
  lidMesh.receiveShadow = options.receiveShadow ?? true;
  hinge.add(lidMesh);

  const nodes: Record<string, THREE.Object3D> = { root, body: bodyMesh, 'lid-hinge': hinge, lid: lidMesh };
  const colliders: Record<string, unknown> = {
    body: { shape: 'box', localCenter: [0, 0.61, 0], size: [0.94, 1.22, 0.78], axis: [0, 1, 0],
      notes: 'Authoring intent only; thaikit derives the shipped compound from the built geometry.' },
  };
  root.userData.sculptRuntime = {
    nodes, meshes: { body: bodyMesh, lid: lidMesh }, sockets: {}, colliders, destructionGroups: {},
  } satisfies ProceduralModelRuntime;
  return root;
}

/* ------------------------------------------------------------------ thaikit entry point */

export function createObjectModel(spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  const root = createFourWheelPlasticRefuseBinModel(options);
  if (spec && typeof spec === 'object') root.userData.sculptSpec = spec;

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // TWO pivots and no sockets. The root, plus `lid-hinge` -- a promise kept, because the lid
    // really does open on that axis and the hinge node sits on the real hinge line at the rear
    // top edge. The castors swivel in life but are NOT given pivots: the kit places these as
    // static scenery, and a pivot nothing will ever turn is a contract the kit has to keep for
    // no one.
    const rootPivot = new THREE.Object3D();
    rootPivot.name = 'root';
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'root' },
    };
    root.add(rootPivot);

    const lidHinge = nodes['lid-hinge'];
    if (lidHinge) {
      lidHinge.userData.actionProfile = {
        animationRole: 'child',
        pivot: {
          mode: 'custom',
          localPosition: [lidHinge.position.x, lidHinge.position.y, lidHinge.position.z],
          axis: [1, 0, 0], name: 'lid-hinge', component: 'lid',
          notes: 'The rear top edge. Rotating this node on +X opens the lid.',
        },
      };
    }

    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    root.userData.sculptRuntime = {
      ...rt,
      // A COUNT, not the Record: a Record of Object3D is circular across the puppeteer bridge.
      nodes: Object.keys(nodes).length,
      pivots: lidHinge ? [rootPivot, lidHinge] : [rootPivot],
      sockets: [],
      colliders,
      destructionGroups: [],
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: {} },
    };
  }
  return root;
}
