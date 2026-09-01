import * as THREE from 'three';

/**
 * Square Patio Umbrella -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else: the bundle is CommonJS with a bare
 * require("three") and the host injects its own instance.
 *
 * Envelope 4.0 x 2.8 x 4.0 m, origin base-center on the ground at the pole axis, +Y up.
 *
 * This is the ONE module in the outdoor roof set carried on a SINGLE CENTRE POLE rather than four
 * corner posts, so it tiles differently: placed side by side the canopies meet at their edges and
 * leave the corners open, and the pole lands mid-bay rather than on the grid line. Square rather
 * than octagonal so those edges meet cleanly.
 *
 * Budget (thaikit large class): 4 draw calls, 3 materials, 6 unique geometries, 4000 triangles.
 * Canopy and valance are ONE double-sided surface; mast and base merge into the second mesh.
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
  canopy: {
    half: 2.0,          // 4 x 4 m at the eave
    eaveY: 2.30,
    eaveScallop: 0.09,   // how far the eave dips between rib tips
    crownY: 2.80,
    valanceY: 2.10,     // the clear height a player walks under
    crownR: 0.11,
    samples: 48,        // perimeter samples; 12 per side
    ribs: 8,
    sag: 0.085,         // how far the canvas dips between ribs
  },
  mast: { r: 0.035, seg: 10, topY: 2.80 },
  base: { r: 0.28, h: 0.09, seg: 16 },
  colors: {
    canvas: 0xdfd8cb,   // crops/canopy.png measured #dfd8cb, luma 216.8 - no lift needed
    valance: 0xcdc4b4,  // crops/valance.png measured #cdc4b4, luma 197.0, hanging in the canopy's shade
    pole: 0x99978e,     // crops/pole.png measured #99978e, luma 150.5
    base: 0x7b786f,     // crops/base.png measured #7b786f, luma 120.0
  },
  materials: {
    canvas: { id: 'canvas', roughness: 0.90, metalness: 0.0 },
    metal: { id: 'metal', roughness: 0.66, metalness: 0.20 },
  },
};

class Soup {
  pos: number[] = [];
  col: number[] = [];
  private c = new THREE.Color();
  tri(a: THREE.Vector3, b: THREE.Vector3, cc: THREE.Vector3, hex: number): void {
    this.pos.push(a.x, a.y, a.z, b.x, b.y, b.z, cc.x, cc.y, cc.z);
    // Vertex colours multiply in LINEAR space, so the sRGB measurement converts once, here.
    this.c.setHex(hex, THREE.SRGBColorSpace);
    for (let i = 0; i < 3; i += 1) this.col.push(this.c.r, this.c.g, this.c.b);
  }
  quad(a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3, d: THREE.Vector3, hex: number): void {
    this.tri(a, b, c, hex); this.tri(a, c, d, hex);
  }
  /** A cylinder about +Y, used for the mast and the base disc. */
  cylY(cy0: number, cy1: number, r: number, seg: number, hex: number, capTop: boolean, capBot: boolean): void {
    for (let i = 0; i < seg; i += 1) {
      const a0 = (i / seg) * Math.PI * 2, a1 = ((i + 1) / seg) * Math.PI * 2;
      const p0 = v3(r * Math.cos(a0), cy0, r * Math.sin(a0));
      const p1 = v3(r * Math.cos(a1), cy0, r * Math.sin(a1));
      const q0 = v3(p0.x, cy1, p0.z), q1 = v3(p1.x, cy1, p1.z);
      this.quad(p0, q0, q1, p1, hex);
      if (capTop) this.tri(v3(0, cy1, 0), q0, q1, hex);
      if (capBot) this.tri(v3(0, cy0, 0), p1, p0, hex);
    }
  }
  geometry(): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    // Written for EVERY vertex: a vertexColors material renders BLACK where it is missing.
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.computeVertexNormals();
    return g;
  }
}

const v3 = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

/**
 * A point on the SQUARE eave outline at parameter t in [0,1), walking the perimeter.
 *
 * A square, not a circle: the asset notes require a square canopy so that edges meet cleanly when
 * several are placed side by side, and an octagonal or round canopy would leave gaps.
 */
function squarePerimeter(t: number, half: number): { x: number; z: number } {
  const u = ((t % 1) + 1) % 1;
  const s = u * 4;
  const side = Math.floor(s);
  const f = s - side;          // 0..1 along this side
  const a = -half + f * 2 * half;
  if (side === 0) return { x: a, z: half };
  if (side === 1) return { x: half, z: -a };
  if (side === 2) return { x: -a, z: -half };
  return { x: -half, z: a };
}

export function createSquarePatioUmbrellaModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Square Patio Umbrella';

  const canvasMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: CONFIG.materials.canvas.roughness,
    metalness: CONFIG.materials.canvas.metalness,
    vertexColors: true,
    // Fabric has no meaningful thickness, and a player standing under the canopy must see its
    // inside face. Double-sided halves the canopy's triangle count against building an underside.
    side: THREE.DoubleSide,
    wireframe: options.wireframe ?? false,
  });
  canvasMat.name = CONFIG.materials.canvas.id;

  const metalMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: CONFIG.materials.metal.roughness,
    metalness: CONFIG.materials.metal.metalness,
    vertexColors: true,
    wireframe: options.wireframe ?? false,
  });
  metalMat.name = CONFIG.materials.metal.id;

  const K = CONFIG.canopy, C = CONFIG.colors;
  const cs = new Soup();

  // The canvas SAGS between eight radial ribs, so the canopy is scalloped rather than a flat
  // pyramid. The sag is zero at a rib and greatest midway between two, and it fades out at the
  // crown and at the eave where the fabric is pulled tight over hardware.
  const sagAt = (t: number, along: number) => {
    const phase = t * K.ribs;                       // one cycle per rib bay
    const between = 0.5 - 0.5 * Math.cos(phase * Math.PI * 2);
    return K.sag * between * Math.sin(along * Math.PI);
  };

  // The eave is NOT a straight square edge. The fabric is pulled taut at each rib tip and dips
  // between them, so the rim scallops -- which is most of what stops a shallow square canopy
  // reading as a flat slab with a skirt round it.
  const eaveAt = (t: number) => {
    const phase = t * K.ribs;
    const between = 0.5 - 0.5 * Math.cos(phase * Math.PI * 2);
    return K.eaveY - K.eaveScallop * between;
  };

  const ringPoint = (t: number, along: number) => {
    const e = squarePerimeter(t, K.half);
    const scale = K.crownR / K.half + (1 - K.crownR / K.half) * along;
    const y = K.crownY + (eaveAt(t) - K.crownY) * along - sagAt(t, along);
    return v3(e.x * scale, y, e.z * scale);
  };

  const N = K.samples;
  const rings = [0, 0.34, 0.67, 1];
  for (let r = 0; r < rings.length - 1; r += 1) {
    for (let i = 0; i < N; i += 1) {
      const t0 = i / N, t1 = (i + 1) / N;
      const A = ringPoint(t0, rings[r]), B = ringPoint(t1, rings[r]);
      const Cc = ringPoint(t1, rings[r + 1]), D = ringPoint(t0, rings[r + 1]);
      cs.quad(A, B, Cc, D, C.canvas);
    }
  }
  // Crown cap, closing the top of the canopy under the finial.
  for (let i = 0; i < N; i += 1) {
    const A = ringPoint(i / N, 0), B = ringPoint((i + 1) / N, 0);
    cs.tri(v3(0, K.crownY, 0), A, B, C.canvas);
  }
  // The valance: a vertical skirt hanging from the eave, measured 20 luma below the canopy
  // because it hangs in the canopy's own shade.
  for (let i = 0; i < N; i += 1) {
    const A = ringPoint(i / N, 1), B = ringPoint((i + 1) / N, 1);
    cs.quad(A, B, v3(B.x, K.valanceY, B.z), v3(A.x, K.valanceY, A.z), C.valance);
  }

  const canopy = new THREE.Mesh(cs.geometry(), canvasMat);
  canopy.name = 'Square canopy and valance';
  canopy.castShadow = options.castShadow ?? true;
  canopy.receiveShadow = options.receiveShadow ?? true;
  root.add(canopy);

  // Mast and base as one merged geometry. The mast runs THROUGH the disc rather than butting on
  // its top face, so no two co-facing surfaces are coincident.
  const ms = new Soup();
  ms.cylY(0, CONFIG.base.h, CONFIG.base.r, CONFIG.base.seg, C.base, true, true);
  ms.cylY(0.02, CONFIG.mast.topY, CONFIG.mast.r, CONFIG.mast.seg, C.pole, true, false);
  const mast = new THREE.Mesh(ms.geometry(), metalMat);
  mast.name = 'Tube mast and weighted base';
  mast.castShadow = options.castShadow ?? true;
  mast.receiveShadow = options.receiveShadow ?? true;
  root.add(mast);

  const nodes: Record<string, THREE.Object3D> = { root, mast, canopy };
  const colliders: Record<string, unknown> = {
    mast: { shape: 'cylinder', localCenter: [0, 1.4, 0], radius: 0.28, height: 2.8, axis: [0, 1, 0],
      notes: 'Authoring intent only; thaikit derives the shipped compound from the built geometry. The base plate matters: the asset notes call it a trip hazard a player should collide with.' },
  };
  root.userData.sculptRuntime = {
    nodes, meshes: { mast, canopy }, sockets: {}, colliders, destructionGroups: {},
  } satisfies ProceduralModelRuntime;
  return root;
}

/* ------------------------------------------------------------------ thaikit entry point */

export function createObjectModel(spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  const root = createSquarePatioUmbrellaModel(options);
  if (spec && typeof spec === 'object') root.userData.sculptSpec = spec;

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // ONE root pivot and NO sockets. A real umbrella cranks open and tilts, but neither is
    // modelled and the asset declares no mechanism, so one root pivot is the complete inventory.
    // Declaring a crank axis nothing turns would be a contract the kit has to keep for no one.
    const rootPivot = new THREE.Object3D();
    rootPivot.name = 'root';
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'root' },
    };
    root.add(rootPivot);

    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    root.userData.sculptRuntime = {
      ...rt,
      nodes: Object.keys(nodes).length,
      pivots: [rootPivot], sockets: [], colliders, destructionGroups: [],
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: {} },
    };
  }
  return root;
}
