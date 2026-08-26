var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// scratch/khmer-stone-sanctuary/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createKhmerStoneSanctuaryModel: () => createKhmerStoneSanctuaryModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "khmer-stone-sanctuary",
  "name": "Khmer Stone Sanctuary",
  "exportName": "KhmerStoneSanctuary",
  "envelope": "Envelope 12.00 x 9.00 x 12.00 m, origin base-center, +Y up.\n * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=16 unique geometries.",
  "materials": [
    {
      "id": "laterite",
      "color": 7560014,
      "roughness": 0.95,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "sandstone",
      "color": 7561291,
      "roughness": 0.93,
      "metalness": 0
    },
    {
      "id": "pale",
      "color": 16777215,
      "roughness": 0.92,
      "metalness": 0
    },
    {
      "id": "void",
      "color": 5130048,
      "roughness": 0.98,
      "metalness": 0
    }
  ],
  "geometry": {
    "platform": [
      [
        0,
        0.45,
        6
      ],
      [
        0.45,
        0.95,
        5.6
      ]
    ],
    "notch": {
      "halfZ": 1.6,
      "xInner": 4.1
    },
    "stair": {
      "steps": 6,
      "x0": 4.1,
      "x1": 6,
      "top": 0.95,
      "treadHalfZ": 1.45
    },
    "parapet": {
      "y0": 0.95,
      "y1": 2.2,
      "outer": 4.9,
      "thick": 0.55
    },
    "tower": {
      "y0": 0.95,
      "y1": 5,
      "a": 3,
      "r": 0.48
    },
    "cornice": [
      [
        5,
        5.45,
        3.38
      ],
      [
        5.45,
        5.65,
        3.18
      ]
    ],
    "roof": [
      [
        5.65,
        6.5,
        2.95
      ],
      [
        6.5,
        7.3,
        2.72
      ]
    ],
    "brokenTier": {
      "y0": 7.3,
      "y1": 8.05,
      "a": 2.45
    },
    "door": {
      "w": 1.9,
      "head": 3.7,
      "depth": 0.46,
      "jamb": 0.34,
      "lintel": 0.36,
      "sinkFrame": 0.75,
      "sinkBlind": 0.82,
      "sinkVoid": 0.88
    },
    "blocks": {
      "unit": [
        0.92,
        0.34,
        0.56
      ]
    }
  }
};
function mergeGeos(geos) {
  const parts = [];
  const temp = [];
  for (const g of geos) {
    if (g.index) {
      parts.push(g.toNonIndexed());
      temp.push(true);
    } else {
      parts.push(g);
      temp.push(false);
    }
  }
  let total = 0;
  for (const g of parts) total += g.getAttribute("position").count;
  const position = new Float32Array(total * 3);
  const normal = new Float32Array(total * 3);
  const uv = new Float32Array(total * 2);
  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute("position"), n = g.getAttribute("normal"), t = g.getAttribute("uv");
    for (let i = 0; i < p.count; i++) {
      position[(v + i) * 3] = p.getX(i);
      position[(v + i) * 3 + 1] = p.getY(i);
      position[(v + i) * 3 + 2] = p.getZ(i);
      if (n) {
        normal[(v + i) * 3] = n.getX(i);
        normal[(v + i) * 3 + 1] = n.getY(i);
        normal[(v + i) * 3 + 2] = n.getZ(i);
      }
      if (t) {
        uv[(v + i) * 2] = t.getX(i);
        uv[(v + i) * 2 + 1] = t.getY(i);
      }
    }
    v += p.count;
  }
  for (let i = 0; i < parts.length; i++) {
    if (temp[i]) parts[i].dispose();
    geos[i].dispose();
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute("position", new THREE.BufferAttribute(position, 3));
  out.setAttribute("normal", new THREE.BufferAttribute(normal, 3));
  out.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  out.computeBoundingBox();
  out.computeBoundingSphere();
  return out;
}
function boxAt(cx, cy, cz, w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(cx, cy, cz);
  return g;
}
function redentedShape(a, r) {
  const quad = [[a, a - 2 * r], [a - r, a - 2 * r], [a - r, a - r], [a - 2 * r, a - r], [a - 2 * r, a]];
  const pts = [];
  for (let k = 0; k < 4; k++) {
    for (const [x, z] of quad) {
      let px = x, pz = z;
      for (let i = 0; i < k; i++) {
        const t = px;
        px = -pz;
        pz = t;
      }
      pts.push([px, pz]);
    }
  }
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.closePath();
  return shape;
}
function extrudeSlab(shape, y0, y1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: y1 - y0, bevelEnabled: false, curveSegments: 4 });
  g.rotateX(-Math.PI / 2);
  g.translate(0, y0, 0);
  g.computeVertexNormals();
  return g;
}
function notchedSquare(a, notchHalfZ, xInner) {
  const pts = [
    [a, -a],
    [a, -notchHalfZ],
    [xInner, -notchHalfZ],
    [xInner, notchHalfZ],
    [a, notchHalfZ],
    [a, a],
    [-a, a],
    [-a, -a]
  ];
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.closePath();
  return shape;
}
function tintByHeight(geo, y0, y1, rgb0) {
  const p = geo.getAttribute("position");
  const col = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) {
    const t = Math.min(1, Math.max(0, (p.getY(i) - y0) / (y1 - y0)));
    for (let c = 0; c < 3; c++) col[i * 3 + c] = rgb0[c] + (1 - rgb0[c]) * t;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
}
function buildMaterials(options) {
  const map = {};
  for (const s of CONFIG.materials) {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(s.color),
      roughness: s.roughness,
      metalness: s.metalness,
      wireframe: options.wireframe ?? false,
      side: s.doubleSided ? THREE.DoubleSide : THREE.FrontSide,
      vertexColors: s.vertexColors === true
    });
    if (s.envMapIntensity !== void 0) m.envMapIntensity = s.envMapIntensity;
    if (s.opacity !== void 0) {
      m.transparent = true;
      m.opacity = s.opacity;
      m.depthWrite = true;
    }
    m.name = s.id;
    map[s.id] = m;
  }
  return map;
}
function createKhmerStoneSanctuaryModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Khmer Stone Sanctuary";
  const materials = buildMaterials(options);
  const nodes = {};
  const meshes = {};
  const sockets = {};
  const colliders = {};
  const destructionGroups = {};
  const castShadow = options.castShadow ?? true;
  const receiveShadow = options.receiveShadow ?? true;
  function add(id, name, geo, matId) {
    const node = new THREE.Group();
    node.name = name + "__node";
    const mesh = new THREE.Mesh(geo, materials[matId]);
    mesh.name = name;
    mesh.castShadow = castShadow;
    mesh.receiveShadow = receiveShadow;
    node.add(mesh);
    root.add(node);
    nodes[id] = node;
    meshes[id] = mesh;
    colliders[id] = null;
    return mesh;
  }
  function addInst(id, name, geo, matId, mats, cols) {
    const node = new THREE.Group();
    node.name = name + "__node";
    const inst = new THREE.InstancedMesh(geo, materials[matId], mats.length);
    inst.name = name;
    inst.castShadow = castShadow;
    inst.receiveShadow = receiveShadow;
    for (let i = 0; i < mats.length; i++) inst.setMatrixAt(i, mats[i]);
    if (cols) {
      const c = new THREE.Color();
      for (let i = 0; i < cols.length; i++) inst.setColorAt(i, c.setHex(cols[i]));
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    }
    inst.instanceMatrix.needsUpdate = true;
    node.add(inst);
    root.add(node);
    nodes[id] = node;
    meshes[id] = inst;
    colliders[id] = null;
    return inst;
  }
  function quad(radius, y, phase = 0) {
    return [0, 1, 2, 3].map((i) => {
      const a = phase + i * Math.PI / 2;
      return new THREE.Matrix4().compose(
        new THREE.Vector3(Math.sin(a) * radius, y, Math.cos(a) * radius),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), a),
        new THREE.Vector3(1, 1, 1)
      );
    });
  }
  const G = CONFIG.geometry;
  {
    const N = G.notch, ST = G.stair, P = G.parapet;
    const parts = G.platform.map(
      ([y0, y1, a]) => extrudeSlab(notchedSquare(a, N.halfZ, N.xInner), y0, y1)
    );
    const bi = P.outer - P.thick, bc = P.outer - P.thick / 2, bh = P.y1 - P.y0, by = (P.y0 + P.y1) / 2;
    parts.push(boxAt(-bc, by, 0, P.thick, bh, P.outer * 2));
    parts.push(boxAt(0, by, bc, bi * 2, bh, P.thick));
    parts.push(boxAt(0, by, -bc, bi * 2, bh, P.thick));
    const segLen = P.outer - N.halfZ;
    parts.push(boxAt(bc, by, (N.halfZ + P.outer) / 2, P.thick, bh, segLen));
    parts.push(boxAt(bc, by, -(N.halfZ + P.outer) / 2, P.thick, bh, segLen));
    const run = (ST.x1 - ST.x0) / ST.steps, rise = ST.top / ST.steps;
    for (let i = 0; i < ST.steps; i++) {
      const x1 = ST.x1 - i * run, h = (i + 1) * rise;
      parts.push(boxAt(x1 - run / 2, h / 2, 0, run, h, ST.treadHalfZ * 2));
    }
    const geo = mergeGeos(parts);
    geo.rotateY(-Math.PI / 2);
    tintByHeight(geo, 0, 0.95, [0.78, 0.79, 0.8]);
    add("platform", "Laterite platform, enclosure and stair", geo, "laterite");
    colliders["platform"] = {
      shape: "box",
      localCenter: [0, 4.5, 0],
      halfExtents: [6, 4.5, 6],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level builder collides with the sanctuary, not with its fallen blocks.'
    };
  }
  {
    const T = G.tower;
    const parts = [extrudeSlab(redentedShape(T.a, T.r), T.y0, T.y1)];
    for (const [y0, y1, a] of G.cornice) {
      parts.push(extrudeSlab(redentedShape(a, a * 0.16), y0, y1));
    }
    for (const [y0, y1, a] of G.roof) {
      parts.push(extrudeSlab(redentedShape(a, a * 0.16), y0, y1));
    }
    add("tower", "Sanctuary tower and roof tiers", mergeGeos(parts), "sandstone");
  }
  {
    const B = G.brokenTier;
    const h = B.y1 - B.y0, cy = (B.y0 + B.y1) / 2, t = 0.62;
    add("broken-tier", "Collapsed top tier", mergeGeos([
      boxAt(-(B.a - t / 2), cy, 0, t, h, B.a * 2),
      boxAt(0, cy, -(B.a - t / 2), (B.a - t) * 2, h, t),
      // The +X run stops short: the corner it would have turned is the one that has fallen, and
      // the blocks that made it are lying on the roof and the platform below.
      boxAt(B.a - t / 2, cy, -B.a * 0.42, t, h * 0.72, B.a * 1.16)
    ]), "sandstone");
  }
  {
    const T = G.tower, D = G.door;
    const face = T.a;
    const hw = D.w / 2 + D.jamb;
    const hF = D.head - D.sinkFrame;
    const unit = mergeGeos([
      boxAt(-(D.w / 2 + D.jamb / 2), D.sinkFrame + hF / 2, face + D.depth / 2 - 0.14, D.jamb, hF, D.depth),
      boxAt(D.w / 2 + D.jamb / 2, D.sinkFrame + hF / 2, face + D.depth / 2 - 0.14, D.jamb, hF, D.depth),
      boxAt(0, D.head + D.lintel / 2, face + D.depth / 2 - 0.14, hw * 2, D.lintel, D.depth),
      // The pediment slab over the lintel -- in the plate it is the carved panel, and here it is
      // the block that carries the door's silhouette above the opening.
      boxAt(0, D.head + D.lintel + 0.22, face + D.depth / 2 - 0.2, hw * 1.86, 0.44, D.depth - 0.12)
    ]);
    addInst("door-frames", "Door aedicules", unit, "sandstone", quad(0, 0));
    const hB = D.head - D.sinkBlind;
    const blind = boxAt(0, D.sinkBlind + hB / 2, face + 0.05, D.w, hB, 0.1);
    addInst("blind-doors", "Blind door panels", blind, "sandstone", quad(0, 0).slice(1));
    const hV = D.head - D.sinkVoid;
    add("doorway", "Open doorway", boxAt(0, D.sinkVoid + hV / 2, face + 0.02, D.w, hV, 0.05), "void");
  }
  {
    const U = G.blocks.unit;
    const unit = boxAt(0, 0, 0, U[0], U[1], U[2]);
    const spots = [
      [-2, 8.19, 1.3],
      [1.9, 8.23, -1.6],
      [2.3, 8.11, 1.7],
      [-2.2, 8.31, -1.9],
      [0.2, 8.53, 0.1],
      [1.3, 8.5656, -0.4],
      [-0.6, 8.7212, -0.8],
      [0.7, 8.7, 0.9],
      [3.6, 1.14, 3.1],
      [4.4, 1.12, -2.2],
      [-3.9, 1.16, 2.6],
      [-4.6, 1.1, -3.3],
      [3.1, 1.13, -4.2],
      [-2.9, 1.15, -4.6],
      [4.4, 2.43, 1.2],
      [-4.6, 2.41, -1.6],
      [0.4, 1.12, 4.6],
      [-1.8, 1.14, 4.9],
      [5, 1.11, 4.4],
      [-4.4, 1.13, 4.3]
    ];
    let h = 2166136261;
    const rnd = () => {
      h = Math.imul(h ^ h >>> 15, 2246822507);
      h = Math.imul(h ^ h >>> 13, 3266489909);
      return (h >>> 0) % 1e4 / 1e4;
    };
    const mats = spots.map(([x, y, z]) => new THREE.Matrix4().compose(
      new THREE.Vector3(x, y, z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(
        (rnd() - 0.5) * 0.7,
        rnd() * Math.PI * 2,
        (rnd() - 0.5) * 0.7
      )),
      new THREE.Vector3(0.7 + rnd() * 0.7, 0.8 + rnd() * 0.5, 0.7 + rnd() * 0.6)
    ));
    const tones = [10325371, 7036238, 11699813, 7100483];
    addInst(
      "fallen-blocks",
      "Fallen blocks",
      unit,
      "pale",
      mats,
      mats.map((_, i) => tones[(i * 3 + (i >> 2)) % tones.length])
    );
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createKhmerStoneSanctuaryModel(options);
  if (spec !== void 0 && spec !== null) root.userData.sculptSpec = spec;
  const rt = root.userData.sculptRuntime;
  if (rt) {
    const nodes = rt.nodes ?? {};
    const pivots = [];
    const rootPivot = new THREE.Object3D();
    rootPivot.name = "root";
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: "root",
      pivot: { mode: "custom", localPosition: [0, 0, 0], axis: [0, 1, 0], name: "root" }
    };
    root.add(rootPivot);
    pivots.push(rootPivot);
    const colliders = Object.entries(rt.colliders ?? {}).filter(([, c]) => c && typeof c === "object" && Object.keys(c).length > 0).map(([id, c]) => ({ name: id, ...c }));
    const grouped = /* @__PURE__ */ new Map();
    for (const [name, members] of Object.entries(rt.destructionGroups ?? {})) {
      grouped.set(name, [...members]);
    }
    for (const node of Object.values(nodes)) {
      const group = node?.userData?.actionProfile?.destruction?.fractureGroup;
      if (typeof group !== "string" || !group) continue;
      if (!grouped.has(group)) grouped.set(group, []);
      grouped.get(group).push(node);
    }
    root.userData.sculptRuntime = {
      ...rt,
      // A COUNT, not the Record. thaikit's harness returns this field straight across the
      // puppeteer bridge and its registry field is a number; a Record of Object3D is circular and
      // fails to serialise, which surfaces as the whole stats object arriving undefined. The
      // Record stays reachable under byId.
      nodes: Object.keys(nodes).length,
      pivots,
      sockets: Object.values(rt.sockets ?? {}),
      colliders,
      destructionGroups: [...grouped.entries()].map(([name, members]) => ({ name, members })),
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: rt.sockets ?? {} }
    };
  }
  return root;
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogS2htZXIgU3RvbmUgU2FuY3R1YXJ5IC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDEyLjAwIHggOS4wMCB4IDEyLjAwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAuXG4gKiBCdWRnZXQgKGhlcm8yeCk6IDw9MTYwMDAgdHJpYW5nbGVzLCA8PTEyIGRyYXcgY2FsbHMsIDw9OCBtYXRlcmlhbHMsIDw9MTYgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhhaWtpdCdzIE1PTlVNRU5UQUwgYnVpbGRpbmdzLCBhbmQgdW5saWtlIHRoZSBzaGFyZWQgcmV0YWlsIG1vZHVsZSBpdHMgZm9ybSBpc1xuICogbm90IGEgYm94OiB0aGUgcmVjb2duaXNhYmxlIGZlYXR1cmUgaXMgYSBjdXJ2ZWQgb3IgdGllcmVkIHByb2ZpbGUgdGhhdCBoYXMgdG8gc3Vydml2ZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbS4gVGhlIHNoYXJlZCB2b2NhYnVsYXJ5IGhlcmUgaXMgdGhlcmVmb3JlIHRoZSBMQVRIRSAtLVxuICogYSBwcm9maWxlIHJldm9sdmVkIGFib3V0ICtZIC0tIGFuZCB0aGUgdGllcmVkL3N0ZXBwZWQgbWVyZ2UsIG5vdCB0aGUgcGFyYW1ldGVyaXNlZCBzaG9wZnJvbnQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJraG1lci1zdG9uZS1zYW5jdHVhcnlcIixcbiAgICBcIm5hbWVcIjogXCJLaG1lciBTdG9uZSBTYW5jdHVhcnlcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJLaG1lclN0b25lU2FuY3R1YXJ5XCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDEyLjAwIHggOS4wMCB4IDEyLjAwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAuXFxuICogQnVkZ2V0IChoZXJvMngpOiA8PTE2MDAwIHRyaWFuZ2xlcywgPD0xMiBkcmF3IGNhbGxzLCA8PTggbWF0ZXJpYWxzLCA8PTE2IHVuaXF1ZSBnZW9tZXRyaWVzLlwiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImxhdGVyaXRlXCIsXG4gICAgICAgIFwiY29sb3JcIjogNzU2MDAxNCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInNhbmRzdG9uZVwiLFxuICAgICAgICBcImNvbG9yXCI6IDc1NjEyOTEsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTMsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJwYWxlXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJ2b2lkXCIsXG4gICAgICAgIFwiY29sb3JcIjogNTEzMDA0OCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45OCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfVxuICAgIF0sXG4gICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICBcInBsYXRmb3JtXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMC40NSxcbiAgICAgICAgICA2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLjQ1LFxuICAgICAgICAgIDAuOTUsXG4gICAgICAgICAgNS42XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcIm5vdGNoXCI6IHtcbiAgICAgICAgXCJoYWxmWlwiOiAxLjYsXG4gICAgICAgIFwieElubmVyXCI6IDQuMVxuICAgICAgfSxcbiAgICAgIFwic3RhaXJcIjoge1xuICAgICAgICBcInN0ZXBzXCI6IDYsXG4gICAgICAgIFwieDBcIjogNC4xLFxuICAgICAgICBcIngxXCI6IDYsXG4gICAgICAgIFwidG9wXCI6IDAuOTUsXG4gICAgICAgIFwidHJlYWRIYWxmWlwiOiAxLjQ1XG4gICAgICB9LFxuICAgICAgXCJwYXJhcGV0XCI6IHtcbiAgICAgICAgXCJ5MFwiOiAwLjk1LFxuICAgICAgICBcInkxXCI6IDIuMixcbiAgICAgICAgXCJvdXRlclwiOiA0LjksXG4gICAgICAgIFwidGhpY2tcIjogMC41NVxuICAgICAgfSxcbiAgICAgIFwidG93ZXJcIjoge1xuICAgICAgICBcInkwXCI6IDAuOTUsXG4gICAgICAgIFwieTFcIjogNSxcbiAgICAgICAgXCJhXCI6IDMsXG4gICAgICAgIFwiclwiOiAwLjQ4XG4gICAgICB9LFxuICAgICAgXCJjb3JuaWNlXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNS40NSxcbiAgICAgICAgICAzLjM4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA1LjQ1LFxuICAgICAgICAgIDUuNjUsXG4gICAgICAgICAgMy4xOFxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJyb29mXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDUuNjUsXG4gICAgICAgICAgNi41LFxuICAgICAgICAgIDIuOTVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDYuNSxcbiAgICAgICAgICA3LjMsXG4gICAgICAgICAgMi43MlxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJicm9rZW5UaWVyXCI6IHtcbiAgICAgICAgXCJ5MFwiOiA3LjMsXG4gICAgICAgIFwieTFcIjogOC4wNSxcbiAgICAgICAgXCJhXCI6IDIuNDVcbiAgICAgIH0sXG4gICAgICBcImRvb3JcIjoge1xuICAgICAgICBcIndcIjogMS45LFxuICAgICAgICBcImhlYWRcIjogMy43LFxuICAgICAgICBcImRlcHRoXCI6IDAuNDYsXG4gICAgICAgIFwiamFtYlwiOiAwLjM0LFxuICAgICAgICBcImxpbnRlbFwiOiAwLjM2LFxuICAgICAgICBcInNpbmtGcmFtZVwiOiAwLjc1LFxuICAgICAgICBcInNpbmtCbGluZFwiOiAwLjgyLFxuICAgICAgICBcInNpbmtWb2lkXCI6IDAuODhcbiAgICAgIH0sXG4gICAgICBcImJsb2Nrc1wiOiB7XG4gICAgICAgIFwidW5pdFwiOiBbXG4gICAgICAgICAgMC45MixcbiAgICAgICAgICAwLjM0LFxuICAgICAgICAgIDAuNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgclRvcDogbnVtYmVyLCByQm90OiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJUb3AsIHJCb3QsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBSZXZvbHZlIGEgcHJvZmlsZSBhYm91dCArWS4gYHB0c2AgYXJlIFtyYWRpdXMsIHldIGluIG1ldHJlcywgYm90dG9tIHRvIHRvcC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzaGFwZSB2b2NhYnVsYXJ5IHRoZSB3aG9sZSBtb251bWVudGFsIHNldCBpcyBidWlsdCBmcm9tIC0tIGEgY2hlZGkncyBiZWxsLCBhIHByYW5nJ3NcbiAqIGNvcm4tY29iIHRhcGVyLCBhIGRvbWUsIGEgcmluZ2VkIHNwaXJlIGFyZSBhbGwgb25lIHByb2ZpbGUgZWFjaC4gVHdvIHRoaW5ncyBhcmUgd29ydGggc3RhdGluZ1xuICogYmVjYXVzZSBib3RoIGNvc3QgYSByZWJ1aWxkIHRvIGxlYXJuOlxuICpcbiAqIC0gTGF0aGVHZW9tZXRyeSBpcyBPUEVOIGF0IHRvcCBhbmQgYm90dG9tLiBBIHByb2ZpbGUgdGhhdCBkb2VzIG5vdCBjbG9zZSBvbiB0aGUgYXhpcyAocmFkaXVzIDApXG4gKiAgIGxlYXZlcyBhIGhvbGUgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWRzIGFzIGJhY2tncm91bmQgZW5jbG9zZWQgYnkgdGhlIHNpbGhvdWV0dGUuIENsb3NlIGl0LCBvclxuICogICBjYXAgaXQgd2l0aCB3aGF0IHNpdHMgYWJvdmUuXG4gKiAtIFJBRElBTCBTRUdNRU5UIENPVU5UIGlzIHRoZSB0cmlhbmdsZSBidWRnZXQncyBtYWluIGxldmVyIGhlcmUgYW5kIGl0IGlzIHBlci1sYXRoZTogYSBwcm9maWxlIG9mXG4gKiAgIG4gcG9pbnRzIGF0IHMgc2VnbWVudHMgaXMgMioobi0xKSpzIHRyaWFuZ2xlcy4gQSAyNC1yaW5nIHNwaXJlIGF0IDMyIHNlZ21lbnRzIGlzIDEsNDcyXG4gKiAgIHRyaWFuZ2xlcyBvbiBpdHMgb3duLCB3aGljaCBpcyB3aHkgdGhlIGxvdy1yZWxpZWYgcmluZ3MgYXJlIGEgcHJvZmlsZSByYXRoZXIgdGhhbiAyNCByaW5ncy5cbiAqL1xuZnVuY3Rpb24gbGF0aGUocHRzOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlciwgeU9mZnNldCA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSBwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBhbG9uZyArWiBiZXR3ZWVuIHR3byBkZXB0aHMsIHdpdGggbm8gcm90YXRpb24gLS0gdGhlIG5hdGl2ZSBkaXJlY3Rpb24gb2ZcbiAqICBFeHRydWRlR2VvbWV0cnkuIFVzZWQgd2hlcmUgdGhlIHByb2ZpbGUgZ2VudWluZWx5IGxpdmVzIGluIHRoZSBYWSBwbGFuZSwgc3VjaCBhcyB0aGUgcmFraW5nXG4gKiAgdHJpYW5nbGUgb2YgYSBzdGFpciBjaGVlay4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVBbG9uZ1ooc2hhcGU6IFRIUkVFLlNoYXBlLCB6MDogbnVtYmVyLCB6MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogejEgLSB6MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgZy50cmFuc2xhdGUoMCwgMCwgejApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSByZWN0YW5ndWxhciBwbGF0ZSB3aG9zZSBoZWFkIGlzIGEgaGFsZi1yb3VuZCBhcmNoLCBvcHRpb25hbGx5IGNhcnJ5aW5nIGFuIGFyY2hlZCBhcGVydHVyZSBvZlxuICogIHRoZSBzYW1lIGZvcm0uIFRoZSBhcGVydHVyZSBhcmMgaXMgQUxXQVlTIHN3ZXB0IGZyb20gYW5nbGUgMCB0byBQSTogd3JpdHRlbiB0aGUgb3RoZXIgd2F5IGl0XG4gKiAgcnVucyB1bmRlciB0aGUgY2lyY2xlIGluc3RlYWQgb2Ygb3ZlciBpdCBhbmQgbGVhdmVzIHRoZSBhcmNoIGhlYWQgZmlsbGVkIHNvbGlkLCB3aGljaCByZWFkcyBhc1xuICogIGEgc3F1YXJlIHdpbmRvdyB3aXRoIGEgZ2hvc3QgYXJjaCBkcmF3biBhY3Jvc3MgaXQuICovXG5mdW5jdGlvbiBhcmNoZWRQbGF0ZSh3OiBudW1iZXIsIGg6IG51bWJlciwgYXJjaFI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBob2xlPzogeyByOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC13IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuYWJzYXJjKDAsIHNwcmluZywgYXJjaFIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgc2hhcGUubGluZVRvKC13IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgcC5tb3ZlVG8oaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAubGluZVRvKGhvbGUuciwgaG9sZS5zcHJpbmcpO1xuICAgIHAuYWJzYXJjKDAsIGhvbGUuc3ByaW5nLCBob2xlLnIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgICBwLmxpbmVUbygtaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAuY2xvc2VQYXRoKCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogUmFtcCBhIHBlci12ZXJ0ZXggdGludCBvdmVyIGEgaGVpZ2h0IGJhbmQsIGFzIGEgTVVMVElQTElFUiBvbiB0aGUgbWF0ZXJpYWwgY29sb3VyLlxuICpcbiAqIFRoaXMgaXMgaG93IGEgbG9jYWwgbWF0ZXJpYWwgb3ZlcnJpZGUgZ2V0cyBkZWxpdmVyZWQgb24gYSBtZXJnZWQgY29tcG9uZW50IHRoYXQgaXMgb25lIG1lc2ggYW5kXG4gKiBtdXN0IHN0YXkgb25lIGRyYXcgY2FsbDogYSBzZWNvbmQgbWF0ZXJpYWwgd291bGQgY29zdCBhIHN1Ym1pc3Npb24gYW5kIGEgc2hhZGVyIHN3aXRjaCB0byBzYXlcbiAqIHRoYXQgdGhlIGJvdHRvbSBvZiBhIHdhbGwgaXMgZGlydGllciB0aGFuIHRoZSB0b3AuIGByZ2IwYCBpcyB0aGUgbWVhc3VyZWQgdGludCBhdCB5MCBleHByZXNzZWRcbiAqIGFzIGEgZnJhY3Rpb24gb2YgdGhlIG1hdGVyaWFsJ3Mgb3duIG1lYXN1cmVkIGFsYmVkbywgc28gdGhlIHRvcCBvZiB0aGUgYmFuZCBpcyB1bnRpbnRlZCAxLjAgYW5kXG4gKiB0aGUgbnVtYmVycyBiZWxvdyBzdGF5IHRyYWNlYWJsZSB0byB0d28gY3JvcCBtZWFzdXJlbWVudHMgcmF0aGVyIHRoYW4gdG8gYSBjaG9zZW4gZGFya2VuaW5nLlxuICovXG5mdW5jdGlvbiB0aW50QnlIZWlnaHQoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcmdiMDogbnVtYmVyW10pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAocC5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApKSk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIGNvbFtpICogMyArIGNdID0gcmdiMFtjXSArICgxIC0gcmdiMFtjXSkgKiB0O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVLaG1lclN0b25lU2FuY3R1YXJ5TW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdLaG1lciBTdG9uZSBTYW5jdHVhcnknO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGxhdGVyaXRlIHBsYXRmb3JtXG4gICAqIFR3byBzbGFicywgYSBwYXJhcGV0IGVuY2xvc3VyZSBhbmQgYSBzaXgtdHJlYWQgc3RhaXIsIGFsbCB0aGUgc2FtZSByZWQgbGF0ZXJpdGUgYW5kIHRoZXJlZm9yZVxuICAgKiBPTkUgY29tcG9uZW50IGFuZCBPTkUgZHJhdyBjYWxsLlxuICAgKlxuICAgKiBUaGUgc3RhaXIgaXMgY3V0IG91dCBvZiB0aGUgcGxhdGZvcm0gUExBTiBhcyBhIG5vdGNoLiBFdmVyeXRoaW5nIGhlcmUgaXMgYnVpbHQgd2l0aCB0aGF0IG5vdGNoXG4gICAqIG9uICtYIGFuZCB0aGUgd2hvbGUgbWVyZ2VkIGdlb21ldHJ5IGlzIHRoZW4gcm90YXRlZCBhIHF1YXJ0ZXIgdHVybiBvbnRvICtaLCBzbyB0aGUgc3RhaXIgYW5kXG4gICAqIHRoZSBzYW5jdHVhcnkncyBvbmUgcmVhbCBkb29yd2F5IGVuZCB1cCBvbiB0aGUgc2FtZSBlbGV2YXRpb24gLS0gd2hpY2ggaXMgd2hhdCB0aGUgcGxhdGUgc2hvd3NcbiAgICogYW5kIGlzIHRoZSBvbmx5IHJlYXNvbiBlaXRoZXIgb2YgdGhlbSBpcyB3aGVyZSBpdCBpcy4gKi9cbiAge1xuICAgIGNvbnN0IE4gPSBHLm5vdGNoLCBTVCA9IEcuc3RhaXIsIFAgPSBHLnBhcmFwZXQ7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSAoRy5wbGF0Zm9ybSBhcyBudW1iZXJbXVtdKS5tYXAoXG4gICAgICAoW3kwLCB5MSwgYV0pID0+IGV4dHJ1ZGVTbGFiKG5vdGNoZWRTcXVhcmUoYSwgTi5oYWxmWiwgTi54SW5uZXIpLCB5MCwgeTEpKTtcblxuICAgIC8vIFBhcmFwZXQgZW5jbG9zdXJlLiBTaWRlIHJ1bnMgY2FycnkgdGhlIGZ1bGwgZGVwdGgsIGZyb250IGFuZCBiYWNrIHJ1bnMgc3RvcCBiZXR3ZWVuIHRoZW06XG4gICAgLy8gcnVuIHRvIGZ1bGwgd2lkdGgsIGV2ZXJ5IGNvcm5lciB3b3VsZCBwdXQgdHdvIG91dGVyIGZhY2VzIGluIG9uZSBwbGFuZSBmYWNpbmcgb25lIHdheS5cbiAgICBjb25zdCBiaSA9IFAub3V0ZXIgLSBQLnRoaWNrLCBiYyA9IFAub3V0ZXIgLSBQLnRoaWNrIC8gMiwgYmggPSBQLnkxIC0gUC55MCwgYnkgPSAoUC55MCArIFAueTEpIC8gMjtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KC1iYywgYnksIDAsIFAudGhpY2ssIGJoLCBQLm91dGVyICogMikpO1xuICAgIHBhcnRzLnB1c2goYm94QXQoMCwgYnksIGJjLCBiaSAqIDIsIGJoLCBQLnRoaWNrKSk7XG4gICAgcGFydHMucHVzaChib3hBdCgwLCBieSwgLWJjLCBiaSAqIDIsIGJoLCBQLnRoaWNrKSk7XG4gICAgY29uc3Qgc2VnTGVuID0gUC5vdXRlciAtIE4uaGFsZlo7XG4gICAgcGFydHMucHVzaChib3hBdChiYywgYnksIChOLmhhbGZaICsgUC5vdXRlcikgLyAyLCBQLnRoaWNrLCBiaCwgc2VnTGVuKSk7XG4gICAgcGFydHMucHVzaChib3hBdChiYywgYnksIC0oTi5oYWxmWiArIFAub3V0ZXIpIC8gMiwgUC50aGljaywgYmgsIHNlZ0xlbikpO1xuXG4gICAgLy8gU2l4IHNoYWxsb3cgdHJlYWRzLCBlYWNoIG9jY3VweWluZyBvbmx5IGl0cyBvd24gZ29pbmcuIFN0YWNrZWQgd2VkZ2VzIGFsbCByZWFjaGluZyB4PTYuMDBcbiAgICAvLyB3b3VsZCBwdXQgc2l4IG91dGVyIGZhY2VzIGluIG9uZSBwbGFuZSBmYWNpbmcgb25lIHdheS5cbiAgICBjb25zdCBydW4gPSAoU1QueDEgLSBTVC54MCkgLyBTVC5zdGVwcywgcmlzZSA9IFNULnRvcCAvIFNULnN0ZXBzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU1Quc3RlcHM7IGkrKykge1xuICAgICAgY29uc3QgeDEgPSBTVC54MSAtIGkgKiBydW4sIGggPSAoaSArIDEpICogcmlzZTtcbiAgICAgIHBhcnRzLnB1c2goYm94QXQoeDEgLSBydW4gLyAyLCBoIC8gMiwgMCwgcnVuLCBoLCBTVC50cmVhZEhhbGZaICogMikpO1xuICAgIH1cblxuICAgIGNvbnN0IGdlbyA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgZ2VvLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTsgICAvLyArWCBub3RjaCAtPiArWiwgam9pbmluZyB0aGUgc3RhaXIgdG8gdGhlIGRvb3J3YXkgZWxldmF0aW9uXG4gICAgLy8gR3JvdW5kIGRpcnQgYW5kIHRoZSBkYXJrZXIgd2VhdGhlcmluZyBvZiB0aGUgbG93ZXIgY291cnNlcywgYXMgYSBwZXItdmVydGV4IHRpbnQgcmF0aGVyIHRoYW5cbiAgICAvLyBhIHNlY29uZCBtYXRlcmlhbDogdGhlIHBsYXRlJ3MgYm90dG9tIGNvdXJzZXMgbWVhc3VyZSBkaXN0aW5jdGx5IGRhcmtlciB0aGFuIHRoZSBwYXJhcGV0LlxuICAgIHRpbnRCeUhlaWdodChnZW8sIDAsIDAuOTUsIFswLjc4LCAwLjc5LCAwLjgwXSk7XG4gICAgYWRkKCdwbGF0Zm9ybScsICdMYXRlcml0ZSBwbGF0Zm9ybSwgZW5jbG9zdXJlIGFuZCBzdGFpcicsIGdlbywgJ2xhdGVyaXRlJyk7XG4gICAgY29sbGlkZXJzWydwbGF0Zm9ybSddID0ge1xuICAgICAgc2hhcGU6ICdib3gnLCBsb2NhbENlbnRlcjogWzAsIDQuNSwgMF0sIGhhbGZFeHRlbnRzOiBbNi4wLCA0LjUsIDYuMF0sXG4gICAgICBub3RlczogJ0Fzc2V0IGRlY2xhcmVzIGNvbGxpZGVyIFwiYm94XCIuIE9uZSBjb252ZXggcHJveHkgb3ZlciB0aGUgd2hvbGUgZW52ZWxvcGU7IGEgbGV2ZWwgJ1xuICAgICAgICAgICArICdidWlsZGVyIGNvbGxpZGVzIHdpdGggdGhlIHNhbmN0dWFyeSwgbm90IHdpdGggaXRzIGZhbGxlbiBibG9ja3MuJyxcbiAgICB9O1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzYW5jdHVhcnkgdG93ZXJcbiAgICogQm9keSwgdHdvIGNvcm5pY2UgYmFuZHMgYW5kIHR3byBpbnRhY3Qgcm9vZiB0aWVycywgYWxsIHNhbmRzdG9uZSBhbmQgYWxsIE9ORSBjb21wb25lbnQuIFRoZVxuICAgKiBwbGFuIGlzIHJlZGVudGVkLCBhcyBhIEtobWVyIHRvd2VyJ3MgaXMsIGFuZCBpcyBvbmUgY2xvc2VkIHR3ZW50eS1wb2ludCBwb2x5Z29uIHJhdGhlciB0aGFuXG4gICAqIGNyb3NzZWQgYm94ZXMgLS0gY29ycmVjdCBzaGFwZSwgYW5kIG5vIGludGVyaW9yIGNvaW5jaWRlbmNlLiAqL1xuICB7XG4gICAgY29uc3QgVCA9IEcudG93ZXI7XG4gICAgY29uc3QgcGFydHMgPSBbZXh0cnVkZVNsYWIocmVkZW50ZWRTaGFwZShULmEsIFQuciksIFQueTAsIFQueTEpXTtcbiAgICBmb3IgKGNvbnN0IFt5MCwgeTEsIGFdIG9mIEcuY29ybmljZSBhcyBudW1iZXJbXVtdKSB7XG4gICAgICBwYXJ0cy5wdXNoKGV4dHJ1ZGVTbGFiKHJlZGVudGVkU2hhcGUoYSwgYSAqIDAuMTYpLCB5MCwgeTEpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbeTAsIHkxLCBhXSBvZiBHLnJvb2YgYXMgbnVtYmVyW11bXSkge1xuICAgICAgcGFydHMucHVzaChleHRydWRlU2xhYihyZWRlbnRlZFNoYXBlKGEsIGEgKiAwLjE2KSwgeTAsIHkxKSk7XG4gICAgfVxuICAgIGFkZCgndG93ZXInLCAnU2FuY3R1YXJ5IHRvd2VyIGFuZCByb29mIHRpZXJzJywgbWVyZ2VHZW9zKHBhcnRzKSwgJ3NhbmRzdG9uZScpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb2xsYXBzZWQgdG9wIHRpZXJcbiAgICogVGhlIHRvcCB0aWVyIGlzIGF1dGhvcmVkIGFzIGEgUEFSVElBTCByaW5nIHdpdGggb25lIGNvcm5lciBnb25lLiBUaGF0IGlzIHRoZSB3aG9sZSBkaWZmZXJlbmNlXG4gICAqIGJldHdlZW4gdGhpcyBhc3NldCBhbmQgYW4gaW50YWN0IHRvd2VyLCBhbmQgdGhlIHJlZ2lzdHJ5IG5vdGVzIGFzayBmb3IgaXQgZXhwbGljaXRseTogYSBydWluXG4gICAqIGlzIHdoYXQgYW4gSXNhbiBzYW5jdHVhcnkgaXMgYWN0dWFsbHkgZm91bmQgYXMuIFRocmVlIHN0cmFpZ2h0IHJ1bnMsIGRlbGliZXJhdGVseSBub3QgZm91ci4gKi9cbiAge1xuICAgIGNvbnN0IEIgPSBHLmJyb2tlblRpZXI7XG4gICAgY29uc3QgaCA9IEIueTEgLSBCLnkwLCBjeSA9IChCLnkwICsgQi55MSkgLyAyLCB0ID0gMC42MjtcbiAgICBhZGQoJ2Jyb2tlbi10aWVyJywgJ0NvbGxhcHNlZCB0b3AgdGllcicsIG1lcmdlR2VvcyhbXG4gICAgICBib3hBdCgtKEIuYSAtIHQgLyAyKSwgY3ksIDAsIHQsIGgsIEIuYSAqIDIpLFxuICAgICAgYm94QXQoMCwgY3ksIC0oQi5hIC0gdCAvIDIpLCAoQi5hIC0gdCkgKiAyLCBoLCB0KSxcbiAgICAgIC8vIFRoZSArWCBydW4gc3RvcHMgc2hvcnQ6IHRoZSBjb3JuZXIgaXQgd291bGQgaGF2ZSB0dXJuZWQgaXMgdGhlIG9uZSB0aGF0IGhhcyBmYWxsZW4sIGFuZFxuICAgICAgLy8gdGhlIGJsb2NrcyB0aGF0IG1hZGUgaXQgYXJlIGx5aW5nIG9uIHRoZSByb29mIGFuZCB0aGUgcGxhdGZvcm0gYmVsb3cuXG4gICAgICBib3hBdChCLmEgLSB0IC8gMiwgY3ksIC1CLmEgKiAwLjQyLCB0LCBoICogMC43MiwgQi5hICogMS4xNiksXG4gICAgXSksICdzYW5kc3RvbmUnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZG9vciBhZWRpY3VsZXNcbiAgICogRm91ciBmYWNlcywgZWFjaCB3aXRoIGEgcHJvdWQgcmVjdGFuZ3VsYXIgc3Vycm91bmQgLS0gamFtYnMgYW5kIGEgbGludGVsLCBhcyBhIEtobWVyIGRvb3IgaGFzO1xuICAgKiB0aGVzZSBhcmUgbm90IGFyY2hlZCwgd2hpY2ggaXMgb25lIG9mIHRoZSB0aGluZ3MgdGhhdCBzZXBhcmF0ZXMgdGhpcyBhc3NldCBmcm9tIHRoZSBwcmFuZy5cbiAgICogT25lIGluc3RhbmNlZCB1bml0LCBmb3VyIHJvdGF0aW9ucywgb25lIGdlb21ldHJ5LiAqL1xuICB7XG4gICAgY29uc3QgVCA9IEcudG93ZXIsIEQgPSBHLmRvb3I7XG4gICAgY29uc3QgZmFjZSA9IFQuYTtcbiAgICBjb25zdCBodyA9IEQudyAvIDIgKyBELmphbWI7XG4gICAgY29uc3QgaEYgPSBELmhlYWQgLSBELnNpbmtGcmFtZTtcbiAgICBjb25zdCB1bml0ID0gbWVyZ2VHZW9zKFtcbiAgICAgIGJveEF0KC0oRC53IC8gMiArIEQuamFtYiAvIDIpLCBELnNpbmtGcmFtZSArIGhGIC8gMiwgZmFjZSArIEQuZGVwdGggLyAyIC0gMC4xNCwgRC5qYW1iLCBoRiwgRC5kZXB0aCksXG4gICAgICBib3hBdChELncgLyAyICsgRC5qYW1iIC8gMiwgRC5zaW5rRnJhbWUgKyBoRiAvIDIsIGZhY2UgKyBELmRlcHRoIC8gMiAtIDAuMTQsIEQuamFtYiwgaEYsIEQuZGVwdGgpLFxuICAgICAgYm94QXQoMCwgRC5oZWFkICsgRC5saW50ZWwgLyAyLCBmYWNlICsgRC5kZXB0aCAvIDIgLSAwLjE0LCBodyAqIDIsIEQubGludGVsLCBELmRlcHRoKSxcbiAgICAgIC8vIFRoZSBwZWRpbWVudCBzbGFiIG92ZXIgdGhlIGxpbnRlbCAtLSBpbiB0aGUgcGxhdGUgaXQgaXMgdGhlIGNhcnZlZCBwYW5lbCwgYW5kIGhlcmUgaXQgaXNcbiAgICAgIC8vIHRoZSBibG9jayB0aGF0IGNhcnJpZXMgdGhlIGRvb3IncyBzaWxob3VldHRlIGFib3ZlIHRoZSBvcGVuaW5nLlxuICAgICAgYm94QXQoMCwgRC5oZWFkICsgRC5saW50ZWwgKyAwLjIyLCBmYWNlICsgRC5kZXB0aCAvIDIgLSAwLjIwLCBodyAqIDEuODYsIDAuNDQsIEQuZGVwdGggLSAwLjEyKSxcbiAgICBdKTtcbiAgICBhZGRJbnN0KCdkb29yLWZyYW1lcycsICdEb29yIGFlZGljdWxlcycsIHVuaXQsICdzYW5kc3RvbmUnLCBxdWFkKDAsIDApKTtcblxuICAgIC8vIFRIUkVFIGJsaW5kIGRvb3JzIGFuZCBPTkUgcmVhbCBvcGVuaW5nLiBBIEtobWVyIHNhbmN0dWFyeSBoYXMgYSBzaW5nbGUgY2VsbCBhbmQgZmFsc2UgZG9vcnNcbiAgICAvLyBvbiB0aGUgb3RoZXIgdGhyZWUgZmFjZXMsIHNvIHRoZSBzZXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBmb3VyIGlkZW50aWNhbCB0aGluZ3M6IHF1YWQoKSdzXG4gICAgLy8gZmlyc3Qgcm90YXRpb24gaXMgdGhlIGlkZW50aXR5LCB3aGljaCBwdXRzIGluZGV4IDAgb24gK1osIGFuZCB0aGF0IGlzIHRoZSBmYWNlIGxlZnQgb3Blbi5cbiAgICAvLyBUaGUgYmxpbmQgcGFuZWxzIHN0YW5kIDAuMDggbSBQUk9VRCBvZiB0aGUgd2FsbCBiZXR3ZWVuIHRoZSBqYW1icyByYXRoZXIgdGhhbiBzaXR0aW5nIGZsdXNoXG4gICAgLy8gaW4gaXQuIEZsdXNoLCB0aGV5IHdlcmUgdGhlIHNhbWUgc3RvbmUgYXQgdGhlIHNhbWUgZGVwdGggYXMgdGhlIHdhbGwgYmVoaW5kIHRoZW0gYW5kIHdlcmVcbiAgICAvLyBzaW1wbHkgaW52aXNpYmxlIC0tIGEgZmFsc2UgZG9vciBoYXMgdG8gcmVhZCBhcyBhIGRvb3IsIGFuZCB3aXRoIG5vIGNvbG91ciBkaWZmZXJlbmNlIHRvXG4gICAgLy8gc3BlbmQsIHRoZSBvbmx5IHRoaW5nIGxlZnQgdG8gc2F5IGl0IHdpdGggaXMgZGVwdGguXG4gICAgY29uc3QgaEIgPSBELmhlYWQgLSBELnNpbmtCbGluZDtcbiAgICBjb25zdCBibGluZCA9IGJveEF0KDAsIEQuc2lua0JsaW5kICsgaEIgLyAyLCBmYWNlICsgMC4wNSwgRC53LCBoQiwgMC4xMCk7XG4gICAgYWRkSW5zdCgnYmxpbmQtZG9vcnMnLCAnQmxpbmQgZG9vciBwYW5lbHMnLCBibGluZCwgJ3NhbmRzdG9uZScsIHF1YWQoMCwgMCkuc2xpY2UoMSkpO1xuXG4gICAgLy8gVGhlIG9uZSByZWFsIGRvb3J3YXkuIEl0IHNpdHMgMC4wMiBtIFBST1VEIG9mIHRoZSB3YWxsIGZhY2UsIG5vdCBiZWhpbmQgaXQ6IHRoZSB0b3dlciBpcyBhXG4gICAgLy8gU09MSUQgbWFzcywgc28gYSBwYW5lbCByZWNlc3NlZCBpbnRvIGl0IGlzIGluc2lkZSB0aGUgc29saWQgYW5kIGludmlzaWJsZSwgd2hpY2ggaXMgZXhhY3RseVxuICAgIC8vIHdoYXQgdGhlIGZpcnN0IGJ1aWxkIHNoaXBwZWQuIFRoZSBvcGVuaW5nIHJlYWRzIGFzIGFuIG9wZW5pbmcgYmVjYXVzZSB0aGUgYWVkaWN1bGUncyBqYW1ic1xuICAgIC8vIGFuZCBsaW50ZWwgc3RhbmQgMC4zMiBtIGluIGZyb250IG9mIGl0LCBub3QgYmVjYXVzZSB0aGUgcGFuZWwgaXMgc3Vuay5cbiAgICBjb25zdCBoViA9IEQuaGVhZCAtIEQuc2lua1ZvaWQ7XG4gICAgYWRkKCdkb29yd2F5JywgJ09wZW4gZG9vcndheScsIGJveEF0KDAsIEQuc2lua1ZvaWQgKyBoViAvIDIsIGZhY2UgKyAwLjAyLCBELncsIGhWLCAwLjA1KSwgJ3ZvaWQnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZmFsbGVuIGJsb2Nrc1xuICAgKiBUd2VudHkgYmxvY2tzIHNjYXR0ZXJlZCBvdmVyIHRoZSByb29mIGFuZCB0aGUgcGxhdGZvcm0sIGFzIE9ORSBJbnN0YW5jZWRNZXNoLiBFYWNoIGluc3RhbmNlXG4gICAqIGNhcnJpZXMgaXRzIG93biByb3RhdGlvbiBhbmQgaXRzIG93biBub24tdW5pZm9ybSBzY2FsZSwgYWxsIGRlcml2ZWQgZnJvbSBpdHMgSU5ERVggdGhyb3VnaCBhXG4gICAqIHNtYWxsIGludGVnZXIgaGFzaCAtLSBuZXZlciBmcm9tIGEgcmFuZG9tIHNvdXJjZSwgc28gdGhlIG1vZGVsIGlzIGJ5dGUtaWRlbnRpY2FsIG9uIGV2ZXJ5XG4gICAqIGJ1aWxkLiBUaGlzIGlzIHRoZSBjb21wb25lbnQgdGhhdCBtYWtlcyB0aGUgcHJvcCBhIHJ1aW4gcmF0aGVyIHRoYW4gYSBidWlsZGluZy4gKi9cbiAge1xuICAgIGNvbnN0IFUgPSBHLmJsb2Nrcy51bml0IGFzIG51bWJlcltdO1xuICAgIGNvbnN0IHVuaXQgPSBib3hBdCgwLCAwLCAwLCBVWzBdLCBVWzFdLCBVWzJdKTtcbiAgICAvLyBFeHBsaWNpdCBwbGFjZW1lbnRzOiBlaWdodCB0dW1ibGVkIGFjcm9zcyB0aGUgcm9vZiB0aWVycywgdHdlbHZlIG9uIHRoZSBwbGF0Zm9ybSBhbmQgaXRzXG4gICAgLy8gZW5jbG9zdXJlLiBUaGUgaGlnaGVzdCBibG9jayBpcyB3aGF0IHNldHMgdGhlIGRlY2xhcmVkIDkuMDAgbSwgc28gaXQgaXMgcGxhY2VkIG9uIHB1cnBvc2UuXG4gICAgY29uc3Qgc3BvdHM6IG51bWJlcltdW10gPSBbXG4gICAgICBbLTIuMCwgOC4xOSwgMS4zXSwgWzEuOSwgOC4yMywgLTEuNl0sIFsyLjMsIDguMTEsIDEuN10sIFstMi4yLCA4LjMxLCAtMS45XSxcbiAgICAgIFswLjIsIDguNTMsIDAuMV0sIFsxLjMsIDguNTY1NiwgLTAuNF0sIFstMC42LCA4LjcyMTIsIC0wLjhdLCBbMC43LCA4LjcwLCAwLjldLFxuICAgICAgWzMuNiwgMS4xNCwgMy4xXSwgWzQuNCwgMS4xMiwgLTIuMl0sIFstMy45LCAxLjE2LCAyLjZdLCBbLTQuNiwgMS4xMCwgLTMuM10sXG4gICAgICBbMy4xLCAxLjEzLCAtNC4yXSwgWy0yLjksIDEuMTUsIC00LjZdLCBbNC40LCAyLjQzLCAxLjJdLCBbLTQuNiwgMi40MSwgLTEuNl0sXG4gICAgICBbMC40LCAxLjEyLCA0LjZdLCBbLTEuOCwgMS4xNCwgNC45XSwgWzUuMCwgMS4xMSwgNC40XSwgWy00LjQsIDEuMTMsIDQuM10sXG4gICAgXTtcbiAgICBsZXQgaCA9IDIxNjYxMzYyNjE7XG4gICAgY29uc3Qgcm5kID0gKCkgPT4geyBoID0gTWF0aC5pbXVsKGggXiAoaCA+Pj4gMTUpLCAyMjQ2ODIyNTA3KTsgaCA9IE1hdGguaW11bChoIF4gKGggPj4+IDEzKSwgMzI2NjQ4OTkwOSk7IHJldHVybiAoKGggPj4+IDApICUgMTAwMDApIC8gMTAwMDA7IH07XG4gICAgY29uc3QgbWF0cyA9IHNwb3RzLm1hcCgoW3gsIHksIHpdKSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMyh4LCB5LCB6KSxcbiAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUV1bGVyKG5ldyBUSFJFRS5FdWxlcihcbiAgICAgICAgKHJuZCgpIC0gMC41KSAqIDAuNywgcm5kKCkgKiBNYXRoLlBJICogMiwgKHJuZCgpIC0gMC41KSAqIDAuNykpLFxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMC43ICsgcm5kKCkgKiAwLjcsIDAuOCArIHJuZCgpICogMC41LCAwLjcgKyBybmQoKSAqIDAuNikpKTtcbiAgICAvLyBQZXItaW5zdGFuY2UgdG9uZXMsIGFsbCBtZWFzdXJlZCBvZmYgYmxvY2tzIGluIHRoZSBwbGF0ZTogcGFsZSBzYW5kc3RvbmUsIHdlYXRoZXJlZCBncmV5LFxuICAgIC8vIG9jaHJlIGFuZCBhIGRhcmsgYnJvd24uIE9uZSBtYXRlcmlhbCwgb25lIGdlb21ldHJ5LCBmb3VyIHN0b25lcyAtLSBhbmQgdGhlIG1hdGVyaWFsIGlzIHdoaXRlXG4gICAgLy8gYmVjYXVzZSBzZXRDb2xvckF0IG11bHRpcGxpZXMgcmF0aGVyIHRoYW4gcmVwbGFjZXMuXG4gICAgY29uc3QgdG9uZXMgPSBbMHg5ZDhkN2IsIDB4NmI1ZDRlLCAweGIyODY2NSwgMHg2YzU4NDNdO1xuICAgIGFkZEluc3QoJ2ZhbGxlbi1ibG9ja3MnLCAnRmFsbGVuIGJsb2NrcycsIHVuaXQsICdwYWxlJywgbWF0cyxcbiAgICAgIG1hdHMubWFwKChfLCBpKSA9PiB0b25lc1soaSAqIDMgKyAoaSA+PiAyKSkgJSB0b25lcy5sZW5ndGhdKSk7XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGFpa2l0IGVudHJ5IHBvaW50ICovXG5cbi8qKlxuICogdGhhaWtpdCBlbnRyeSBwb2ludC4gVGhlIHJlZ2lzdHJ5IHJlY29yZHMgYGNyZWF0ZU9iamVjdE1vZGVsYCBhcyB0aGUgZXhwb3J0IGFuZCBjYWxscyBpdCB3aXRoXG4gKiAoc3BlYywgb3B0aW9ucykuIGBzcGVjYCBpcyBhY2NlcHRlZCBhbmQgYXR0YWNoZWQgZm9yIGhvc3Qtc2lkZSBpbnNwZWN0aW9uIC0tIHRoZSByZWNvbnN0cnVjdGlvblxuICogZGF0YSBhbHJlYWR5IGxpdmVzIGluIHRoaXMgbW9kdWxlLCBzbyBpdCBpcyBkZWxpYmVyYXRlbHkgbm90IGEgc2Vjb25kIHNvdXJjZSBvZiB0cnV0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKHNwZWM/OiB1bmtub3duLCBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVLaG1lclN0b25lU2FuY3R1YXJ5TW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiBPTkUuIFN0YXRpYyBsYW5kbWFyayBnZW9tZXRyeSAtLSBub3RoaW5nIG9wZW5zLCB0dXJucyBvciBzd2luZ3MuIEEgbmFtZWQgcGl2b3QgaXMgYVxuICAgIC8vIHByb21pc2UgdGhhdCBhIHBhcnQgdHVybnMgb24gaXQsIGFuZCBhIHByb3AgdGhhdCBkZWNsYXJlcyBwaXZvdHMgaXQgaGFzIG5vIG1lY2hhbmlzbXMgZm9yXG4gICAgLy8gaGFzIGRlc2NyaWJlZCBhIG1hY2hpbmUgdGhhdCBkb2VzIG5vdCBleGlzdC5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcblxuICAgIC8vIFNvY2tldHM6IE5PTkUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gdGhpcyBwcm9wIGFuZCBub3RoaW5nIGlzIGVtaXR0ZWQgZnJvbSBpdC5cblxuICAgIC8vIENvbGxpZGVycyBhcmUgcGxhaW4gREFUQSwgbm90IE9iamVjdDNELCBzbyB0aGV5IGNhcnJ5IG5vIC5uYW1lIG9mIHRoZWlyIG93bi4gR2l2ZSBlYWNoIHRoZVxuICAgIC8vIGlkIG9mIHRoZSBjb21wb25lbnQgaXQgb3ducyBhbmQgZHJvcCB0aGUgZW1wdHkgb25lcyAtLSBhIG5hbWVsZXNzIGVtcHR5IHByb3h5IGluIHRoZVxuICAgIC8vIHJ1bnRpbWUgbGlzdCByZWFkcyBhcyBhIHBoeXNpY3Mgc2hhcGUgdGhhdCBleGlzdHMgYW5kIGRvZXMgbm90aGluZy5cbiAgICBjb25zdCBjb2xsaWRlcnMgPSBPYmplY3QuZW50cmllcygocnQuY29sbGlkZXJzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVxuICAgICAgLmZpbHRlcigoWywgY10pID0+IGMgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGMpLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChbaWQsIGNdKSA9PiAoeyBuYW1lOiBpZCwgLi4uKGMgYXMgb2JqZWN0KSB9KSk7XG5cbiAgICAvLyBEZXN0cnVjdGlvbiBncm91cHM6IHRoaXMgcHJvcCBkZWNsYXJlcyBOT05FLCBhbmQgcHJvbW90aW9uIGNoZWNrcyBidWlsdCBhZ2FpbnN0IGRlY2xhcmVkIGFzXG4gICAgLy8gYW4gZXF1YWxpdHkgaW4gQk9USCBkaXJlY3Rpb25zLiBEZXJpdmVkIHJhdGhlciB0aGFuIGFzc3VtZWQgZW1wdHksIHNvIGEgY29tcG9uZW50IHRoYXRcbiAgICAvLyBzb21laG93IGNhcnJpZWQgYSBmcmFjdHVyZUdyb3VwIGZhaWxzIHRoZSBnYXRlIGxvdWRseSBpbnN0ZWFkIG9mIGJlaW5nIGRyb3BwZWQgaGVyZS5cbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbWVtYmVyc10gb2YgT2JqZWN0LmVudHJpZXMoKHJ0LmRlc3RydWN0aW9uR3JvdXBzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPikpIHtcbiAgICAgIGdyb3VwZWQuc2V0KG5hbWUsIFsuLi5tZW1iZXJzXSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgY29uc3QgZ3JvdXAgPSAobm9kZSBhcyBhbnkpPy51c2VyRGF0YT8uYWN0aW9uUHJvZmlsZT8uZGVzdHJ1Y3Rpb24/LmZyYWN0dXJlR3JvdXA7XG4gICAgICBpZiAodHlwZW9mIGdyb3VwICE9PSAnc3RyaW5nJyB8fCAhZ3JvdXApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFncm91cGVkLmhhcyhncm91cCkpIGdyb3VwZWQuc2V0KGdyb3VwLCBbXSk7XG4gICAgICBncm91cGVkLmdldChncm91cCkhLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZC4gdGhhaWtpdCdzIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGVcbiAgICAgIC8vIHB1cHBldGVlciBicmlkZ2UgYW5kIGl0cyByZWdpc3RyeSBmaWVsZCBpcyBhIG51bWJlcjsgYSBSZWNvcmQgb2YgT2JqZWN0M0QgaXMgY2lyY3VsYXIgYW5kXG4gICAgICAvLyBmYWlscyB0byBzZXJpYWxpc2UsIHdoaWNoIHN1cmZhY2VzIGFzIHRoZSB3aG9sZSBzdGF0cyBvYmplY3QgYXJyaXZpbmcgdW5kZWZpbmVkLiBUaGVcbiAgICAgIC8vIFJlY29yZCBzdGF5cyByZWFjaGFibGUgdW5kZXIgYnlJZC5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzLFxuICAgICAgc29ja2V0czogT2JqZWN0LnZhbHVlcygocnQuc29ja2V0cyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+KSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbLi4uZ3JvdXBlZC5lbnRyaWVzKCldLm1hcCgoW25hbWUsIG1lbWJlcnNdKSA9PiAoeyBuYW1lLCBtZW1iZXJzIH0pKSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiBydC5zb2NrZXRzID8/IHt9IH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFxQ3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNUO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ047QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxjQUFjO0FBQUEsTUFDWixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEs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
