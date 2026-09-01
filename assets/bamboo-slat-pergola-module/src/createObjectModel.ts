import * as THREE from 'three';

/**
 * Bamboo Slat Pergola Module -- procedural Three.js factory.
 *
 * `three` is imported as a bare specifier and NOTHING else: the bundle is CommonJS with a bare
 * require("three") and the host injects its own instance.
 *
 * Envelope 4.0 x 2.6 x 4.0 m, origin base-center on the ground at the centre of the bay, +Y up.
 * The culms run along X.
 *
 * This is the ONE module in the outdoor roof set that does NOT close its roof. The culms are
 * SPACED, so the sky shows through and the shade is striped -- which is why the roof is thirty-six
 * real round solids rather than a textured deck with an alpha cutout. An alpha roof seen from
 * underneath at a grazing angle is a row of hard edges, and these culms have depth a player sees.
 *
 * Budget (thaikit large class): 4 draw calls, 3 materials, 6 unique geometries, 4000 triangles.
 * Frame merged into ONE geometry, roof as ONE InstancedMesh: 2 draw calls.
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
  half: 2.0,                       // the 4 m module half-extent
  post: { s: 0.12, top: 2.305 },
  beam: { w: 0.10, bot: 2.305, top: 2.525 },
  culm: {
    count: 36, r: 0.0375, seg: 6, y: 2.5625, span: 1.85,
    // Measured #bf9773 (luma 156.8, saturation 0.396). Three tones about it, applied PER
    // INSTANCE: it costs nothing, because the instance colour attribute already exists, and it
    // is what stops thirty-six identical cylinders reading as a printed stripe.
    tones: [0xb08d68, 0xc69e79, 0xd4b48f],
  },
  // Timber measured at #564a41 (luma 75.9) on the beam and #372c22 (luma 45.5) on the post. Both
  // are unshippable: a side-lit face renders at ~0.56 of painted luma, so they would land at 42
  // and 25, BELOW the harness backdrop's 58, and the gate reads a face at the backdrop's luma as
  // a hole. On a prop that is mostly open space already, a dark frame is the worst case. Lifted
  // to luma 115 at saturation 0.308, so it clears on chroma as well as value.
  timber: 0x85705c,
  materials: {
    timber: { id: 'weathered-timber', roughness: 0.88, metalness: 0.0 },
    bamboo: { id: 'bamboo', roughness: 0.72, metalness: 0.0 },
  },
};

class Soup {
  pos: number[] = [];
  tri(a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3): void {
    this.pos.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
  }
  quad(a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3, d: THREE.Vector3): void {
    this.tri(a, b, c); this.tri(a, c, d);
  }
  box(x0: number, y0: number, z0: number, x1: number, y1: number, z1: number): void {
    const p = [v3(x0, y0, z0), v3(x1, y0, z0), v3(x1, y1, z0), v3(x0, y1, z0),
               v3(x0, y0, z1), v3(x1, y0, z1), v3(x1, y1, z1), v3(x0, y1, z1)];
    this.quad(p[4], p[5], p[6], p[7]); this.quad(p[1], p[0], p[3], p[2]);
    this.quad(p[5], p[1], p[2], p[6]); this.quad(p[0], p[4], p[7], p[3]);
    this.quad(p[3], p[7], p[6], p[2]); this.quad(p[0], p[1], p[5], p[4]);
  }
  geometry(): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.computeVertexNormals();
    return g;
  }
}

const v3 = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);

export function createBambooSlatPergolaModuleModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = 'Bamboo Slat Pergola Module';

  const timberMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(CONFIG.timber),
    roughness: CONFIG.materials.timber.roughness,
    metalness: CONFIG.materials.timber.metalness,
    wireframe: options.wireframe ?? false,
  });
  timberMat.name = CONFIG.materials.timber.id;

  // WHITE base, deliberately: InstancedMesh.setColorAt MULTIPLIES with material.color, so a
  // tinted base would ship every culm darkened by it.
  const bambooMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: CONFIG.materials.bamboo.roughness,
    metalness: CONFIG.materials.bamboo.metalness,
    wireframe: options.wireframe ?? false,
  });
  bambooMat.name = CONFIG.materials.bamboo.id;

  const H = CONFIG.half, P = CONFIG.post, B = CONFIG.beam;
  const CULM_TOP = CONFIG.culm.y + CONFIG.culm.r;
  const s = new Soup();

  // Four corner posts, outer faces ON the module lines so that bays placed side by side pair
  // their posts at the shared edge -- which the asset notes call the right look for a market row.
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const x1 = sx * H, x0 = sx * (H - P.s);
    const z1 = sz * H, z0 = sz * (H - P.s);
    s.box(Math.min(x0, x1), 0, Math.min(z0, z1), Math.max(x0, x1), P.top, Math.max(z0, z1));
  }

  // Perimeter beams at the post heads. The two running along Z are what the culms rest on.
  for (const sz of [-1, 1]) {
    const z1 = sz * H, z0 = sz * (H - B.w);
    s.box(-H, B.bot, Math.min(z0, z1), H, B.top, Math.max(z0, z1));
  }
  // The two beams that run along Z are CAPPING beams: their top is flush with the culm tops, so
  // they close the ends of the culm run. Left at the same height as the other pair they leave an
  // open slot the full width of the bay above the beam and behind the outermost culm -- which the
  // turntable gate found as a 468 x 2 px see-through sliver at azimuth 0 and 180.
  for (const sx of [-1, 1]) {
    const x1 = sx * H, x0 = sx * (H - B.w);
    s.box(Math.min(x0, x1), B.bot, -H, Math.max(x0, x1), CULM_TOP, H);
  }
  // ...and the pair running along X is capped to the same line, closing the same slot on the
  // other two sides, where the outermost culm stops short of the module edge.
  for (const sz of [-1, 1]) {
    const z1 = sz * H, z0 = sz * (H - B.w);
    s.box(-H, B.top, Math.min(z0, z1), H, CULM_TOP, Math.max(z0, z1));
  }

  const frame = new THREE.Mesh(s.geometry(), timberMat);
  frame.name = 'Four posts and perimeter beams';
  frame.castShadow = options.castShadow ?? true;
  frame.receiveShadow = options.receiveShadow ?? true;
  root.add(frame);

  // The roof: ONE InstancedMesh for all thirty-six culms, so the whole roof is one draw call and
  // one unique geometry. Six radial segments is enough for a 75 mm culm at prop distance.
  const K = CONFIG.culm;
  const culmGeo = new THREE.CylinderGeometry(K.r, K.r, H * 2, K.seg, 1, false);
  culmGeo.rotateZ(Math.PI / 2);          // the culms run along X
  const culms = new THREE.InstancedMesh(culmGeo, bambooMat, K.count);
  culms.name = 'Spaced bamboo culm roof';
  culms.castShadow = options.castShadow ?? true;
  culms.receiveShadow = options.receiveShadow ?? true;
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const one = v3(1, 1, 1);
  const col = new THREE.Color();
  for (let i = 0; i < K.count; i += 1) {
    const t = K.count === 1 ? 0.5 : i / (K.count - 1);
    const z = -K.span + t * (K.span * 2);
    m4.compose(v3(0, K.y, z), q, one);
    culms.setMatrixAt(i, m4);
    // A seeded walk through the three measured tones, so the run varies without a texture.
    col.setHex(K.tones[(i * 7 + (i % 3)) % K.tones.length], THREE.SRGBColorSpace);
    culms.setColorAt(i, col);
  }
  culms.instanceMatrix.needsUpdate = true;
  if (culms.instanceColor) culms.instanceColor.needsUpdate = true;
  root.add(culms);

  const nodes: Record<string, THREE.Object3D> = { root, frame, culms };
  const colliders: Record<string, unknown> = {
    frame: { shape: 'box', localCenter: [0, 1.3, 0], size: [4.0, 2.6, 4.0], axis: [0, 1, 0],
      notes: 'Authoring intent only; thaikit derives the shipped compound from the built geometry. A pergola is walked UNDER, so the derived compound matters more here than on a solid prop.' },
  };
  root.userData.sculptRuntime = {
    nodes, meshes: { frame, culms: culms as unknown as THREE.Mesh }, sockets: {}, colliders,
    destructionGroups: {},
  } satisfies ProceduralModelRuntime;
  return root;
}

/* ------------------------------------------------------------------ thaikit entry point */

export function createObjectModel(spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  const root = createBambooSlatPergolaModuleModel(options);
  if (spec && typeof spec === 'object') root.userData.sculptSpec = spec;

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // ONE root pivot and NO sockets. A pergola has no moving parts at all, so this is the
    // complete mechanism inventory -- the correct answer, not a gap.
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
