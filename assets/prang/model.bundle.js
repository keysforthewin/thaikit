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

// scratch/prang/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createPrangModel: () => createPrangModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "prang",
  "name": "Prang",
  "exportName": "Prang",
  "envelope": "Envelope 9.00 x 18.00 x 9.00 m, origin base-center, +Y up.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
  "materials": [
    {
      "id": "stone",
      "color": 14008472,
      "roughness": 0.94,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "porcelain",
      "color": 14142907,
      "roughness": 0.7,
      "metalness": 0
    },
    {
      "id": "red",
      "color": 8607821,
      "roughness": 0.82,
      "metalness": 0
    },
    {
      "id": "shadow",
      "color": 13286057,
      "roughness": 0.92,
      "metalness": 0
    },
    {
      "id": "gold",
      "color": 11837554,
      "roughness": 0.34,
      "metalness": 0.32,
      "envMapIntensity": 1.2
    }
  ],
  "geometry": {
    "terrace": [
      [
        0,
        0.8,
        4.5
      ],
      [
        0.8,
        1.6,
        4.15
      ],
      [
        1.6,
        2.45,
        3.75
      ]
    ],
    "notch": {
      "halfZ": 1.3,
      "xInner": 2.45
    },
    "stair": {
      "steps": 12,
      "x0": 2.45,
      "x1": 4.5,
      "top": 2.45,
      "treadHalfZ": 1,
      "cheek": [
        1,
        1.3
      ]
    },
    "balustrade": {
      "y0": 2.45,
      "y1": 3.15,
      "outer": 3.75,
      "thick": 0.3
    },
    "tower": {
      "y0": 2.45,
      "y1": 10.2,
      "a": 2.2,
      "r": 0.3
    },
    "pilaster": {
      "w": 0.18,
      "proud": 0.07,
      "y0": 2.65,
      "y1": 10
    },
    "door": {
      "w": 1.35,
      "h": 3.4,
      "depth": 0.34,
      "y": 2.75,
      "sill": 0.2
    },
    "pediment": {
      "w": 3,
      "h": 2.2,
      "depth": 0.16,
      "y": 6.45
    },
    "tiers": {
      "y0": 10.2,
      "y1": 16.2,
      "count": 8,
      "a0": 2.05,
      "a1": 0.5,
      "curve": 1.5,
      "redent": 0.13,
      "lip": 0.1
    },
    "cap": {
      "y0": 16,
      "y1": 17.1,
      "r": 0.6,
      "seg": 24
    },
    "finial": {
      "y0": 16.9,
      "y1": 18
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
function cylAt(cx, cy, cz, rTop, rBot, h, seg = 16) {
  const g = new THREE.CylinderGeometry(rTop, rBot, h, seg);
  g.translate(cx, cy, cz);
  return g;
}
function lathe(pts, seg, yOffset = 0) {
  const v = pts.map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
  const g = new THREE.LatheGeometry(v, seg);
  g.computeVertexNormals();
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
function extrudeAlongZ(shape, z0, z1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, z0);
  g.computeVertexNormals();
  return g;
}
function archedPlate(w, h, archR, spring, hole) {
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
function createPrangModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Prang";
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
    const N = G.notch, ST = G.stair, B = G.balustrade;
    const parts = G.terrace.map(
      ([y0, y1, a]) => extrudeSlab(notchedSquare(a, N.halfZ, N.xInner), y0, y1)
    );
    const bi = B.outer - B.thick, bc = B.outer - B.thick / 2, bh = B.y1 - B.y0, by = (B.y0 + B.y1) / 2;
    parts.push(boxAt(-bc, by, 0, B.thick, bh, B.outer * 2));
    parts.push(boxAt(0, by, bc, bi * 2, bh, B.thick));
    parts.push(boxAt(0, by, -bc, bi * 2, bh, B.thick));
    const segLen = B.outer - N.halfZ;
    parts.push(boxAt(bc, by, (N.halfZ + B.outer) / 2, B.thick, bh, segLen));
    parts.push(boxAt(bc, by, -(N.halfZ + B.outer) / 2, B.thick, bh, segLen));
    const run = (ST.x1 - ST.x0) / ST.steps, rise = ST.top / ST.steps;
    for (let i = 0; i < ST.steps; i++) {
      const x1 = ST.x1 - i * run, h = (i + 1) * rise;
      parts.push(boxAt(x1 - run / 2, h / 2, 0, run, h, ST.treadHalfZ * 2));
    }
    const cheek = new THREE.Shape();
    cheek.moveTo(ST.x1, 0);
    cheek.lineTo(ST.x0, 0);
    cheek.lineTo(ST.x0, ST.top);
    cheek.closePath();
    parts.push(extrudeAlongZ(cheek, ST.cheek[0], ST.cheek[1]));
    parts.push(extrudeAlongZ(cheek, -ST.cheek[1], -ST.cheek[0]));
    const geo = mergeGeos(parts);
    tintByHeight(geo, 0, 2.45, [0.82, 0.83, 0.8]);
    add("terrace", "Terrace, balustrade and stair", geo, "stone");
    colliders["terrace"] = {
      shape: "box",
      localCenter: [0, 9, 0],
      halfExtents: [4.5, 9, 4.5],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level builder collides with the tower, not with its stair treads.'
    };
  }
  {
    const T = G.tower;
    add("tower", "Tower body", extrudeSlab(redentedShape(T.a, T.r), T.y0, T.y1), "porcelain");
  }
  {
    const T = G.tower, P = G.pilaster;
    const py = (P.y0 + P.y1) / 2, ph = P.y1 - P.y0;
    const xf = T.a - T.r, zf = T.a - T.r, near = T.a - 2 * T.r;
    const unit = mergeGeos([
      boxAt(xf + P.proud / 2, py, (near + zf) / 2, P.proud, ph, P.w),
      boxAt((near + xf) / 2, py, zf + P.proud / 2, P.w, ph, P.proud)
    ]);
    addInst("pilasters", "Redent pilaster strips", unit, "red", quad(0, 0));
  }
  {
    const T = G.tower, D = G.door, PD = G.pediment;
    const face = T.a;
    const doorShape = archedPlate(
      D.w,
      D.h,
      D.w / 2,
      D.h - D.w / 2,
      { r: D.w / 2 - 0.22, spring: D.h - D.w / 2, sill: D.sill }
    );
    const doorFrame = new THREE.ExtrudeGeometry(
      doorShape,
      { depth: D.depth, bevelEnabled: false, curveSegments: 10 }
    );
    doorFrame.translate(0, D.y, face - D.depth + 0.16);
    doorFrame.computeVertexNormals();
    const pedShape = archedPlate(PD.w, PD.h, PD.w / 2, PD.h - PD.w / 2);
    const ped = new THREE.ExtrudeGeometry(
      pedShape,
      { depth: PD.depth, bevelEnabled: false, curveSegments: 10 }
    );
    ped.translate(0, PD.y, face - PD.depth + 0.09);
    ped.computeVertexNormals();
    addInst(
      "door-frames",
      "False doors and pediments",
      mergeGeos([doorFrame, ped]),
      "porcelain",
      quad(0, 0)
    );
    const panel = boxAt(0, D.y + D.h / 2 - 0.1, face + 0.015, D.w - 0.48, D.h - 0.46, 0.05);
    addInst("door-panels", "Blind door panels", panel, "shadow", quad(0, 0));
  }
  {
    const T = G.tiers;
    const step = (T.y1 - T.y0) / T.count;
    const parts = [];
    for (let i = 0; i < T.count; i++) {
      const t = i / T.count;
      const a = T.a1 + (T.a0 - T.a1) * Math.pow(Math.cos(t * Math.PI / 2), T.curve);
      const y0 = T.y0 + i * step;
      parts.push(extrudeSlab(redentedShape(a, a * T.redent), y0, T.y0 + (i + 1) * step));
      const la = a + T.lip;
      parts.push(extrudeSlab(redentedShape(la, la * T.redent), y0 + 0.02, y0 + 0.16));
    }
    add("tiers", "Corn-cob tiers", mergeGeos(parts), "porcelain");
  }
  {
    const C = G.cap;
    const pts = [];
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      pts.push([C.r * Math.cos(t * Math.PI / 2), C.y0 + (C.y1 - C.y0) * t]);
    }
    pts.unshift([C.r, C.y0 - 0]);
    add("cap", "Domed cap", lathe(pts, C.seg), "porcelain");
  }
  {
    const F = G.finial;
    const shaft = F.y0;
    const parts = [
      cylAt(0, shaft + 0.1, 0, 0.11, 0.14, 0.2, 12),
      // collar
      cylAt(0, shaft + 0.34, 0, 0.05, 0.07, 0.3, 12),
      // stem
      boxAt(0, shaft + 0.5, 0, 0.4, 0.07, 0.07),
      // cross bar the outer prongs spring from
      cylAt(0, shaft + 0.9, 0, 8e-3, 0.055, 0.82, 10)
      // tapered centre spike
    ];
    for (const sign of [-1, 1]) {
      const n = 5;
      const at = (u) => [sign * (0.17 + 0.15 * Math.sin(u * Math.PI * 0.72)), shaft + 0.52 + 0.6 * u];
      for (let j = 0; j < n; j++) {
        const a = at(j / n), b = at((j + 1) / n);
        const dx = b[0] - a[0], dy = b[1] - a[1];
        const len = Math.hypot(dx, dy);
        const g = new THREE.BoxGeometry(0.05, len + 0.03, 0.05);
        g.rotateZ(Math.atan2(-dx, dy));
        g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, 0);
        parts.push(g);
      }
    }
    add("finial", "Gilt trident finial", mergeGeos(parts), "gold");
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createPrangModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogUHJhbmcgLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcsXG4gKiBpbnN0YW5jaW5nIGFuZCB0aGUgbGF0aGUgaGVscGVycyBiZWxvdyBhcmUgaGFuZC1yb2xsZWQgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzXG4gKiBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgOS4wMCB4IDE4LjAwIHggOS4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLlxuICogQnVkZ2V0IChoZXJvNHgpOiA8PTMyMDAwIHRyaWFuZ2xlcywgPD0yNCBkcmF3IGNhbGxzLCA8PTE2IG1hdGVyaWFscywgPD0zMiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgTU9OVU1FTlRBTCBidWlsZGluZ3MsIGFuZCB1bmxpa2UgdGhlIHNoYXJlZCByZXRhaWwgbW9kdWxlIGl0cyBmb3JtIGlzXG4gKiBub3QgYSBib3g6IHRoZSByZWNvZ25pc2FibGUgZmVhdHVyZSBpcyBhIGN1cnZlZCBvciB0aWVyZWQgcHJvZmlsZSB0aGF0IGhhcyB0byBzdXJ2aXZlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tLiBUaGUgc2hhcmVkIHZvY2FidWxhcnkgaGVyZSBpcyB0aGVyZWZvcmUgdGhlIExBVEhFIC0tXG4gKiBhIHByb2ZpbGUgcmV2b2x2ZWQgYWJvdXQgK1kgLS0gYW5kIHRoZSB0aWVyZWQvc3RlcHBlZCBtZXJnZSwgbm90IHRoZSBwYXJhbWV0ZXJpc2VkIHNob3Bmcm9udC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcInByYW5nXCIsXG4gICAgXCJuYW1lXCI6IFwiUHJhbmdcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJQcmFuZ1wiLFxuICAgIFwiZW52ZWxvcGVcIjogXCJFbnZlbG9wZSA5LjAwIHggMTguMDAgeCA5LjAwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAuXFxuICogQnVkZ2V0IChoZXJvNHgpOiA8PTMyMDAwIHRyaWFuZ2xlcywgPD0yNCBkcmF3IGNhbGxzLCA8PTE2IG1hdGVyaWFscywgPD0zMiB1bmlxdWUgZ2VvbWV0cmllcy5cIixcbiAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzdG9uZVwiLFxuICAgICAgICBcImNvbG9yXCI6IDE0MDA4NDcyLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjk0LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwicG9yY2VsYWluXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTQxNDI5MDcsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNyxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInJlZFwiLFxuICAgICAgICBcImNvbG9yXCI6IDg2MDc4MjEsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuODIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzaGFkb3dcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMzI4NjA1NyxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdvbGRcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMTgzNzU1NCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4zNCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zMixcbiAgICAgICAgXCJlbnZNYXBJbnRlbnNpdHlcIjogMS4yXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwidGVycmFjZVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuOCxcbiAgICAgICAgICA0LjVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAuOCxcbiAgICAgICAgICAxLjYsXG4gICAgICAgICAgNC4xNVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMS42LFxuICAgICAgICAgIDIuNDUsXG4gICAgICAgICAgMy43NVxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJub3RjaFwiOiB7XG4gICAgICAgIFwiaGFsZlpcIjogMS4zLFxuICAgICAgICBcInhJbm5lclwiOiAyLjQ1XG4gICAgICB9LFxuICAgICAgXCJzdGFpclwiOiB7XG4gICAgICAgIFwic3RlcHNcIjogMTIsXG4gICAgICAgIFwieDBcIjogMi40NSxcbiAgICAgICAgXCJ4MVwiOiA0LjUsXG4gICAgICAgIFwidG9wXCI6IDIuNDUsXG4gICAgICAgIFwidHJlYWRIYWxmWlwiOiAxLFxuICAgICAgICBcImNoZWVrXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEuM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYWx1c3RyYWRlXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAyLjQ1LFxuICAgICAgICBcInkxXCI6IDMuMTUsXG4gICAgICAgIFwib3V0ZXJcIjogMy43NSxcbiAgICAgICAgXCJ0aGlja1wiOiAwLjNcbiAgICAgIH0sXG4gICAgICBcInRvd2VyXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAyLjQ1LFxuICAgICAgICBcInkxXCI6IDEwLjIsXG4gICAgICAgIFwiYVwiOiAyLjIsXG4gICAgICAgIFwiclwiOiAwLjNcbiAgICAgIH0sXG4gICAgICBcInBpbGFzdGVyXCI6IHtcbiAgICAgICAgXCJ3XCI6IDAuMTgsXG4gICAgICAgIFwicHJvdWRcIjogMC4wNyxcbiAgICAgICAgXCJ5MFwiOiAyLjY1LFxuICAgICAgICBcInkxXCI6IDEwXG4gICAgICB9LFxuICAgICAgXCJkb29yXCI6IHtcbiAgICAgICAgXCJ3XCI6IDEuMzUsXG4gICAgICAgIFwiaFwiOiAzLjQsXG4gICAgICAgIFwiZGVwdGhcIjogMC4zNCxcbiAgICAgICAgXCJ5XCI6IDIuNzUsXG4gICAgICAgIFwic2lsbFwiOiAwLjJcbiAgICAgIH0sXG4gICAgICBcInBlZGltZW50XCI6IHtcbiAgICAgICAgXCJ3XCI6IDMsXG4gICAgICAgIFwiaFwiOiAyLjIsXG4gICAgICAgIFwiZGVwdGhcIjogMC4xNixcbiAgICAgICAgXCJ5XCI6IDYuNDVcbiAgICAgIH0sXG4gICAgICBcInRpZXJzXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAxMC4yLFxuICAgICAgICBcInkxXCI6IDE2LjIsXG4gICAgICAgIFwiY291bnRcIjogOCxcbiAgICAgICAgXCJhMFwiOiAyLjA1LFxuICAgICAgICBcImExXCI6IDAuNSxcbiAgICAgICAgXCJjdXJ2ZVwiOiAxLjUsXG4gICAgICAgIFwicmVkZW50XCI6IDAuMTMsXG4gICAgICAgIFwibGlwXCI6IDAuMVxuICAgICAgfSxcbiAgICAgIFwiY2FwXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAxNixcbiAgICAgICAgXCJ5MVwiOiAxNy4xLFxuICAgICAgICBcInJcIjogMC42LFxuICAgICAgICBcInNlZ1wiOiAyNFxuICAgICAgfSxcbiAgICAgIFwiZmluaWFsXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAxNi45LFxuICAgICAgICBcInkxXCI6IDE4XG4gICAgICB9XG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gYm94ZXMobGlzdDogbnVtYmVyW11bXSkgeyByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSkpOyB9XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByVG9wOiBudW1iZXIsIHJCb3Q6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoclRvcCwgckJvdCwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuXG4vKipcbiAqIFJldm9sdmUgYSBwcm9maWxlIGFib3V0ICtZLiBgcHRzYCBhcmUgW3JhZGl1cywgeV0gaW4gbWV0cmVzLCBib3R0b20gdG8gdG9wLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNoYXBlIHZvY2FidWxhcnkgdGhlIHdob2xlIG1vbnVtZW50YWwgc2V0IGlzIGJ1aWx0IGZyb20gLS0gYSBjaGVkaSdzIGJlbGwsIGEgcHJhbmcnc1xuICogY29ybi1jb2IgdGFwZXIsIGEgZG9tZSwgYSByaW5nZWQgc3BpcmUgYXJlIGFsbCBvbmUgcHJvZmlsZSBlYWNoLiBUd28gdGhpbmdzIGFyZSB3b3J0aCBzdGF0aW5nXG4gKiBiZWNhdXNlIGJvdGggY29zdCBhIHJlYnVpbGQgdG8gbGVhcm46XG4gKlxuICogLSBMYXRoZUdlb21ldHJ5IGlzIE9QRU4gYXQgdG9wIGFuZCBib3R0b20uIEEgcHJvZmlsZSB0aGF0IGRvZXMgbm90IGNsb3NlIG9uIHRoZSBheGlzIChyYWRpdXMgMClcbiAqICAgbGVhdmVzIGEgaG9sZSB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZHMgYXMgYmFja2dyb3VuZCBlbmNsb3NlZCBieSB0aGUgc2lsaG91ZXR0ZS4gQ2xvc2UgaXQsIG9yXG4gKiAgIGNhcCBpdCB3aXRoIHdoYXQgc2l0cyBhYm92ZS5cbiAqIC0gUkFESUFMIFNFR01FTlQgQ09VTlQgaXMgdGhlIHRyaWFuZ2xlIGJ1ZGdldCdzIG1haW4gbGV2ZXIgaGVyZSBhbmQgaXQgaXMgcGVyLWxhdGhlOiBhIHByb2ZpbGUgb2ZcbiAqICAgbiBwb2ludHMgYXQgcyBzZWdtZW50cyBpcyAyKihuLTEpKnMgdHJpYW5nbGVzLiBBIDI0LXJpbmcgc3BpcmUgYXQgMzIgc2VnbWVudHMgaXMgMSw0NzJcbiAqICAgdHJpYW5nbGVzIG9uIGl0cyBvd24sIHdoaWNoIGlzIHdoeSB0aGUgbG93LXJlbGllZiByaW5ncyBhcmUgYSBwcm9maWxlIHJhdGhlciB0aGFuIDI0IHJpbmdzLlxuICovXG5mdW5jdGlvbiBsYXRoZShwdHM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyLCB5T2Zmc2V0ID0gMCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdiA9IHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKE1hdGgubWF4KHBbMF0sIDApLCBwWzFdICsgeU9mZnNldCkpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkodiwgc2VnKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgc3RlcHBlZCB0YXBlciBhcyBhIGxhdGhlIHByb2ZpbGU6IGByaW5nc2AgYWx0ZXJuYXRpbmcgb3V0L2luIHJhZGlpIGNsaW1iaW5nIGZyb20geTAgdG8geTEuXG4gKiAgT25lIGdlb21ldHJ5LCBvbmUgZHJhdyBjYWxsLCBhbmQgdGhlIHN0ZXAgY291bnQgaXMgYSBwcm9maWxlLXBvaW50IGNvdW50IHJhdGhlciB0aGFuIGEgbWVzaFxuICogIGNvdW50IC0tIHdoaWNoIGlzIHdoYXQga2VlcHMgYSAyMC1yaW5nIGNoZWRpIHNwaXJlIGluc2lkZSBhIDMyLWdlb21ldHJ5IGNlaWxpbmcuICovXG5mdW5jdGlvbiByaW5nZWRUYXBlcih5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByMDogbnVtYmVyLCByMTogbnVtYmVyLCByaW5nczogbnVtYmVyLCBidWxnZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSByaW5nczsgaSsrKSB7XG4gICAgY29uc3QgdCA9IGkgLyByaW5ncztcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IHIgPSByMCArIChyMSAtIHIwKSAqIHQ7XG4gICAgY29uc3Qgc3RlcCA9ICh5MSAtIHkwKSAvIHJpbmdzO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHldKTtcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5ICsgc3RlcCAqIDAuNDVdKTtcbiAgICBwdHMucHVzaChbciwgeSArIHN0ZXAgKiAwLjU1XSk7XG4gIH1cbiAgcHRzLnB1c2goW3IxLCB5MV0pO1xuICByZXR1cm4gcHRzO1xufVxuXG5cbi8qKlxuICogVGhlIFJFREVOVEVEIHNxdWFyZSBwbGFuIC0tIGEgc3F1YXJlIHdob3NlIGZvdXIgY29ybmVycyBhcmUgY3V0IGJhY2sgaW4gdHdvIHJpZ2h0LWFuZ2xlZCBzdGVwcy5cbiAqIEl0IGlzIHRoZSBwbGFuIG9mIGEgVGhhaSBjaGVkaSdzIHRlcnJhY2UgYW5kIG9mIGEgcHJhbmcncyBiYXNlLCBhbmQgYnVpbGRpbmcgaXQgYXMgYSBTaGFwZSB0aGF0XG4gKiBpcyB0aGVuIGV4dHJ1ZGVkIGlzIG5vdCBhIHN0eWxpc3RpYyBjaG9pY2U6IHRoZSBvYnZpb3VzIGFsdGVybmF0aXZlLCBhIHdpZGUgYm94IGNyb3NzZWQgYnkgYVxuICogZGVlcCBib3gsIHB1dHMgdGhlIHR3byBib3hlcycgdG9wIGZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgb3ZlciB0aGVpciB3aG9sZVxuICogaW50ZXJzZWN0aW9uLCB3aGljaCB6LWZpZ2h0cy4gT25lIGV4dHJ1c2lvbiBvZiBvbmUgY2xvc2VkIHBsYW4gaGFzIG5vIGludGVyaW9yIGNvaW5jaWRlbmNlIGF0XG4gKiBhbGwuXG4gKlxuICogYGFgIGlzIHRoZSBoYWxmLXdpZHRoIGFjcm9zcyB0aGUgZmxhdHM7IGByYCBpcyB0aGUgZGVwdGggb2YgZWFjaCByZWRlbnQgc3RlcC5cbiAqL1xuZnVuY3Rpb24gcmVkZW50ZWRTaGFwZShhOiBudW1iZXIsIHI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcXVhZCA9IFtbYSwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSByXSwgW2EgLSAyICogciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhXV07XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgIGZvciAoY29uc3QgW3gsIHpdIG9mIHF1YWQpIHtcbiAgICAgIC8vIHJvdDkwXmssIGFwcGxpZWQgayB0aW1lczogKHgsIHopIC0+ICgteiwgeClcbiAgICAgIGxldCBweCA9IHgsIHB6ID0gejtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgazsgaSsrKSB7IGNvbnN0IHQgPSBweDsgcHggPSAtcHo7IHB6ID0gdDsgfVxuICAgICAgcHRzLnB1c2goW3B4LCBwel0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGJldHdlZW4gdHdvIGhlaWdodHMuIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgYWxvbmcgK1osIHNvIHRoZSByZXN1bHQgaXNcbiAqICByb3RhdGVkIG9udG8gK1k7IGAtTWF0aC5QSSAvIDJgIGFib3V0IFggbWFwcyArWiB0byArWSBhbmQgbGVhdmVzIHRoZSBwbGFuJ3Mgb3duIHggYXMgeC4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVTbGFiKHNoYXBlOiBUSFJFRS5TaGFwZSwgeTA6IG51bWJlciwgeTE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHkxIC0geTAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIC8vIHJvdGF0ZVgoLVBJLzIpIG1hcHMgKHgsIHksIHopIC0+ICh4LCB6LCAteSksIHNvIHRoZSBleHRydXNpb24gZGVwdGggYmVjb21lcyBoZWlnaHQgYW5kIHRoZVxuICAvLyBwbGFuJ3Mgb3duIHNlY29uZCBheGlzIGJlY29tZXMgLXouIEV2ZXJ5IHBsYW4gaGVyZSBpcyBmb3VyLWZvbGQgc3ltbWV0cmljLCBzbyB0aGF0IHNpZ24gaXNcbiAgLy8gaW1tYXRlcmlhbDsgd2hhdCBtYXR0ZXJzIGlzIHRoYXQgdGhlIHNsYWIgbm93IHJ1bnMgVVAgZnJvbSB5PTAgYW5kIG5lZWRzIGxpZnRpbmcgYnkgeTAuXG4gIGcucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSgwLCB5MCwgMCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBzcXVhcmUgcGxhbiB3aXRoIGEgcmVjdGFuZ3VsYXIgTk9UQ0ggY3V0IGludG8gaXRzICtYIGZhY2UgLS0gdGhlIHN0YWlyIHdlbGwgb2YgYSB0ZW1wbGVcbiAqIHRlcnJhY2UuIEN1dHRpbmcgdGhlIHN0YWlyIG91dCBvZiB0aGUgcGxhbiByYXRoZXIgdGhhbiBoYW5naW5nIGl0IG9mZiB0aGUgb3V0c2lkZSBpcyB3aGF0IGtlZXBzXG4gKiBhbiBhc3ltbWV0cmljIGZlYXR1cmUgaW5zaWRlIGEgc3ltbWV0cmljIGRlY2xhcmVkIGVudmVsb3BlOiBhIGZsaWdodCBwcm9qZWN0aW5nIHBhc3QgYSA5IG1cbiAqIHRlcnJhY2Ugd291bGQgcHV0IHRoZSBwcm9wJ3MgYm91bmRpbmcgYm94IG9mZi1jZW50cmUgYW5kIG92ZXIgaXRzIGRlY2xhcmVkIHdpZHRoIG9uIG9uZSBzaWRlLlxuICovXG5mdW5jdGlvbiBub3RjaGVkU3F1YXJlKGE6IG51bWJlciwgbm90Y2hIYWxmWjogbnVtYmVyLCB4SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1thLCAtYV0sIFthLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgbm90Y2hIYWxmWl0sXG4gICAgICAgICAgICAgICBbYSwgbm90Y2hIYWxmWl0sIFthLCBhXSwgWy1hLCBhXSwgWy1hLCAtYV1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGFsb25nICtaIGJldHdlZW4gdHdvIGRlcHRocywgd2l0aCBubyByb3RhdGlvbiAtLSB0aGUgbmF0aXZlIGRpcmVjdGlvbiBvZlxuICogIEV4dHJ1ZGVHZW9tZXRyeS4gVXNlZCB3aGVyZSB0aGUgcHJvZmlsZSBnZW51aW5lbHkgbGl2ZXMgaW4gdGhlIFhZIHBsYW5lLCBzdWNoIGFzIHRoZSByYWtpbmdcbiAqICB0cmlhbmdsZSBvZiBhIHN0YWlyIGNoZWVrLiAqL1xuZnVuY3Rpb24gZXh0cnVkZUFsb25nWihzaGFwZTogVEhSRUUuU2hhcGUsIHowOiBudW1iZXIsIHoxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB6MSAtIHowLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICBnLnRyYW5zbGF0ZSgwLCAwLCB6MCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHJlY3Rhbmd1bGFyIHBsYXRlIHdob3NlIGhlYWQgaXMgYSBoYWxmLXJvdW5kIGFyY2gsIG9wdGlvbmFsbHkgY2FycnlpbmcgYW4gYXJjaGVkIGFwZXJ0dXJlIG9mXG4gKiAgdGhlIHNhbWUgZm9ybS4gVGhlIGFwZXJ0dXJlIGFyYyBpcyBBTFdBWVMgc3dlcHQgZnJvbSBhbmdsZSAwIHRvIFBJOiB3cml0dGVuIHRoZSBvdGhlciB3YXkgaXRcbiAqICBydW5zIHVuZGVyIHRoZSBjaXJjbGUgaW5zdGVhZCBvZiBvdmVyIGl0IGFuZCBsZWF2ZXMgdGhlIGFyY2ggaGVhZCBmaWxsZWQgc29saWQsIHdoaWNoIHJlYWRzIGFzXG4gKiAgYSBzcXVhcmUgd2luZG93IHdpdGggYSBnaG9zdCBhcmNoIGRyYXduIGFjcm9zcyBpdC4gKi9cbmZ1bmN0aW9uIGFyY2hlZFBsYXRlKHc6IG51bWJlciwgaDogbnVtYmVyLCBhcmNoUjogbnVtYmVyLCBzcHJpbmc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLXcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5hYnNhcmMoMCwgc3ByaW5nLCBhcmNoUiwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICBzaGFwZS5saW5lVG8oLXcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBwLm1vdmVUbyhob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5saW5lVG8oaG9sZS5yLCBob2xlLnNwcmluZyk7XG4gICAgcC5hYnNhcmMoMCwgaG9sZS5zcHJpbmcsIGhvbGUuciwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAgIHAubGluZVRvKC1ob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5jbG9zZVBhdGgoKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBSYW1wIGEgcGVyLXZlcnRleCB0aW50IG92ZXIgYSBoZWlnaHQgYmFuZCwgYXMgYSBNVUxUSVBMSUVSIG9uIHRoZSBtYXRlcmlhbCBjb2xvdXIuXG4gKlxuICogVGhpcyBpcyBob3cgYSBsb2NhbCBtYXRlcmlhbCBvdmVycmlkZSBnZXRzIGRlbGl2ZXJlZCBvbiBhIG1lcmdlZCBjb21wb25lbnQgdGhhdCBpcyBvbmUgbWVzaCBhbmRcbiAqIG11c3Qgc3RheSBvbmUgZHJhdyBjYWxsOiBhIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgc3VibWlzc2lvbiBhbmQgYSBzaGFkZXIgc3dpdGNoIHRvIHNheVxuICogdGhhdCB0aGUgYm90dG9tIG9mIGEgd2FsbCBpcyBkaXJ0aWVyIHRoYW4gdGhlIHRvcC4gYHJnYjBgIGlzIHRoZSBtZWFzdXJlZCB0aW50IGF0IHkwIGV4cHJlc3NlZFxuICogYXMgYSBmcmFjdGlvbiBvZiB0aGUgbWF0ZXJpYWwncyBvd24gbWVhc3VyZWQgYWxiZWRvLCBzbyB0aGUgdG9wIG9mIHRoZSBiYW5kIGlzIHVudGludGVkIDEuMCBhbmRcbiAqIHRoZSBudW1iZXJzIGJlbG93IHN0YXkgdHJhY2VhYmxlIHRvIHR3byBjcm9wIG1lYXN1cmVtZW50cyByYXRoZXIgdGhhbiB0byBhIGNob3NlbiBkYXJrZW5pbmcuXG4gKi9cbmZ1bmN0aW9uIHRpbnRCeUhlaWdodChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByZ2IwOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChwLmdldFkoaSkgLSB5MCkgLyAoeTEgLSB5MCkpKTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IDM7IGMrKykgY29sW2kgKiAzICsgY10gPSByZ2IwW2NdICsgKDEgLSByZ2IwW2NdKSAqIHQ7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvLlxuICpcbiAqIE1ldGFsbmVzcyBpcyBjYXBwZWQgd2VsbCBiZWxvdyBwaHlzaWNhbCBmb3IgdGhlIGdpbGRlZCBzdXJmYWNlcy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhXG4gKiBoZW1pc3BoZXJlIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvXG4gKiByZWZsZWN0IHJlbmRlcnMgYmxhY2sgLS0gd2hpY2ggb24gYSBnb2xkIGZpbmlhbCBpcyB0aGUgd2hvbGUgZmVhdHVyZSBsb3N0LiBUaGUgYWxiZWRvIHN0YXlzXG4gKiBtZWFzdXJlZDsgdGhlIG1ldGFsbmVzcyBpcyB3aGF0IGlzIHdyb25nIGZvciB0aGlzIHJpZy5cbiAqL1xuZnVuY3Rpb24gYnVpbGRNYXRlcmlhbHMob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyk6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+ID0ge307XG4gIGZvciAoY29uc3QgcyBvZiBDT05GSUcubWF0ZXJpYWxzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbSA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKHMuY29sb3IpLFxuICAgICAgcm91Z2huZXNzOiBzLnJvdWdobmVzcyxcbiAgICAgIG1ldGFsbmVzczogcy5tZXRhbG5lc3MsXG4gICAgICB3aXJlZnJhbWU6IG9wdGlvbnMud2lyZWZyYW1lID8/IGZhbHNlLFxuICAgICAgc2lkZTogcy5kb3VibGVTaWRlZCA/IFRIUkVFLkRvdWJsZVNpZGUgOiBUSFJFRS5Gcm9udFNpZGUsXG4gICAgICB2ZXJ0ZXhDb2xvcnM6IHMudmVydGV4Q29sb3JzID09PSB0cnVlLFxuICAgIH0pO1xuICAgIGlmIChzLmVudk1hcEludGVuc2l0eSAhPT0gdW5kZWZpbmVkKSBtLmVudk1hcEludGVuc2l0eSA9IHMuZW52TWFwSW50ZW5zaXR5O1xuICAgIGlmIChzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkgeyBtLnRyYW5zcGFyZW50ID0gdHJ1ZTsgbS5vcGFjaXR5ID0gcy5vcGFjaXR5OyBtLmRlcHRoV3JpdGUgPSB0cnVlOyB9XG4gICAgbS5uYW1lID0gcy5pZDtcbiAgICBtYXBbcy5pZF0gPSBtO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbW9kZWwgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByYW5nTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdQcmFuZyc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIC8vIHNldENvbG9yQXQgTVVMVElQTElFUyB3aXRoIG1hdGVyaWFsLmNvbG9yLCBzbyBhbiBpbnN0YW5jZWQgbWF0ZXJpYWwgY2FycnlpbmcgcGVyLWluc3RhbmNlXG4gICAgICAvLyB0b25lcyBtdXN0IGJlIHdoaXRlIG9yIGV2ZXJ5IHRvbmUgY29tZXMgb3V0IGRhcmtlbmVkIGJ5IHRoZSBiYXNlLlxuICAgICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzLmxlbmd0aDsgaSsrKSBpbnN0LnNldENvbG9yQXQoaSwgYy5zZXRIZXgoY29sc1tpXSkpO1xuICAgICAgaWYgKGluc3QuaW5zdGFuY2VDb2xvcikgaW5zdC5pbnN0YW5jZUNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5zdC5pbnN0YW5jZU1hdHJpeC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgbm9kZS5hZGQoaW5zdCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBpbnN0IGFzIHVua25vd24gYXMgVEhSRUUuTWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cbiAgLyoqIEZvdXIgaW5zdGFuY2VzIGF0IDkwLWRlZ3JlZSB5YXcgYWJvdXQgdGhlIGF4aXMgLS0gdGhlIGNvcm5lci9mYWNlIHJlcGV0aXRpb24gdGhhdCBldmVyeVxuICAgKiAgYnVpbGRpbmcgaW4gdGhpcyBzZXQgdXNlcyBmb3IgbmljaGVzLCBmaW5pYWxzLCBib3VuZGFyeSBzdG9uZXMgYW5kIGNvcm5lciBkb21lcy4gKi9cbiAgZnVuY3Rpb24gcXVhZChyYWRpdXM6IG51bWJlciwgeTogbnVtYmVyLCBwaGFzZSA9IDApOiBUSFJFRS5NYXRyaXg0W10ge1xuICAgIHJldHVybiBbMCwgMSwgMiwgM10ubWFwKChpKSA9PiB7XG4gICAgICBjb25zdCBhID0gcGhhc2UgKyBpICogTWF0aC5QSSAvIDI7XG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnNpbihhKSAqIHJhZGl1cywgeSwgTWF0aC5jb3MoYSkgKiByYWRpdXMpLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGEpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBHID0gQ09ORklHLmdlb21ldHJ5IGFzIGFueTtcblxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGVycmFjZSwgYmFsdXN0cmFkZSwgc3RhaXJcbiAgICogQWxsIHRocmVlIGFyZSB0aGUgc2FtZSB3ZWF0aGVyZWQgc3RvbmUsIHNvIGFsbCB0aHJlZSByaWRlIE9ORSBjb21wb25lbnQgYW5kIE9ORSBkcmF3IGNhbGwuXG4gICAqIEdyb3VwaW5nIGJ5IE1BVEVSSUFMIHJhdGhlciB0aGFuIGJ5IGxvY2F0aW9uIGlzIHRoZSBkcmF3LWNhbGwgbGV2ZXIsIGFuZCBoZXJlIGl0IGNvbGxhcHNlc1xuICAgKiB0aHJlZSBzbGFicywgc2l4IGJhbHVzdHJhZGUgcnVucywgdGVuIHRyZWFkcyBhbmQgdHdvIHJha2luZyBjaGVla3MgaW50byBhIHNpbmdsZSBzdWJtaXNzaW9uLlxuICAgKlxuICAgKiBUaGUgc3RhaXIgaXMgY3V0IG91dCBvZiB0aGUgdGVycmFjZSBQTEFOLiBIdW5nIG9mZiB0aGUgb3V0c2lkZSBpbnN0ZWFkLCBhIGZsaWdodCBwcm9qZWN0aW5nXG4gICAqIHBhc3QgYSA5LjAwIG0gdGVycmFjZSB3b3VsZCBwdXNoIHRoZSBwcm9wJ3MgYm91bmRpbmcgYm94IG9mZi1jZW50cmUgYW5kIG92ZXIgaXRzIGRlY2xhcmVkXG4gICAqIHdpZHRoIG9uIG9uZSBzaWRlOyBjdXQgaW50byBpdCwgdGhlIGFzeW1tZXRyeSBjb3N0cyBub3RoaW5nLiAqL1xuICB7XG4gICAgY29uc3QgTiA9IEcubm90Y2gsIFNUID0gRy5zdGFpciwgQiA9IEcuYmFsdXN0cmFkZTtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IChHLnRlcnJhY2UgYXMgbnVtYmVyW11bXSkubWFwKFxuICAgICAgKFt5MCwgeTEsIGFdKSA9PiBleHRydWRlU2xhYihub3RjaGVkU3F1YXJlKGEsIE4uaGFsZlosIE4ueElubmVyKSwgeTAsIHkxKSk7XG5cbiAgICAvLyBCYWx1c3RyYWRlOiB0aGUgc2lkZSBydW5zIGNhcnJ5IHRoZSBmdWxsIGRlcHRoIGFuZCB0aGUgZnJvbnQgYW5kIGJhY2sgcnVucyBzdG9wIGJldHdlZW5cbiAgICAvLyB0aGVtLiBSdW4gdG8gZnVsbCB3aWR0aCBpbnN0ZWFkLCBlYWNoIGNvcm5lciB3b3VsZCBwdXQgdHdvIG91dGVyIGZhY2VzIGluIHRoZSBzYW1lIHBsYW5lXG4gICAgLy8gZmFjaW5nIHRoZSBzYW1lIHdheSAtLSAwLjIwIG0yIG9mIGNvcGxhbmFyIGNvLWZhY2luZyBzdXJmYWNlIGF0IGV2ZXJ5IGNvcm5lciBvZiB0aGUgdGVycmFjZS5cbiAgICBjb25zdCBiaSA9IEIub3V0ZXIgLSBCLnRoaWNrLCBiYyA9IEIub3V0ZXIgLSBCLnRoaWNrIC8gMiwgYmggPSBCLnkxIC0gQi55MCwgYnkgPSAoQi55MCArIEIueTEpIC8gMjtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KC1iYywgYnksIDAsIEIudGhpY2ssIGJoLCBCLm91dGVyICogMikpO1xuICAgIHBhcnRzLnB1c2goYm94QXQoMCwgYnksIGJjLCBiaSAqIDIsIGJoLCBCLnRoaWNrKSk7XG4gICAgcGFydHMucHVzaChib3hBdCgwLCBieSwgLWJjLCBiaSAqIDIsIGJoLCBCLnRoaWNrKSk7XG4gICAgLy8gVGhlICtYIHJ1biBpcyBicm9rZW4gYnkgdGhlIHN0YWlyIHdlbGwsIHNvIGl0IGlzIHR3byBzZWdtZW50cyBmbGFua2luZyB0aGUgbm90Y2guXG4gICAgY29uc3Qgc2VnTGVuID0gQi5vdXRlciAtIE4uaGFsZlo7XG4gICAgcGFydHMucHVzaChib3hBdChiYywgYnksIChOLmhhbGZaICsgQi5vdXRlcikgLyAyLCBCLnRoaWNrLCBiaCwgc2VnTGVuKSk7XG4gICAgcGFydHMucHVzaChib3hBdChiYywgYnksIC0oTi5oYWxmWiArIEIub3V0ZXIpIC8gMiwgQi50aGljaywgYmgsIHNlZ0xlbikpO1xuXG4gICAgLy8gVGVuIHRyZWFkcy4gRWFjaCBvY2N1cGllcyBvbmx5IGl0cyBPV04gZ29pbmcgcmF0aGVyIHRoYW4gcnVubmluZyBiYWNrIHRvIHRoZSBvdXRlciBlZGdlOlxuICAgIC8vIHN0YWNrZWQgd2VkZ2VzIGFsbCByZWFjaGluZyB4PTQuNTAgd291bGQgcHV0IHRlbiBvdXRlciBmYWNlcyBpbiBvbmUgcGxhbmUgZmFjaW5nIG9uZSB3YXkuXG4gICAgLy8gQ3V0IHRoaXMgd2F5LCBuZWlnaGJvdXJzIG1lZXQgYXMgb3Bwb3NlZCBmYWNlcywgd2hpY2ggaXMgaG93IHNvbGlkcyBhcmUgbWVhbnQgdG8gbWVldC5cbiAgICBjb25zdCBydW4gPSAoU1QueDEgLSBTVC54MCkgLyBTVC5zdGVwcywgcmlzZSA9IFNULnRvcCAvIFNULnN0ZXBzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU1Quc3RlcHM7IGkrKykge1xuICAgICAgY29uc3QgeDEgPSBTVC54MSAtIGkgKiBydW4sIGggPSAoaSArIDEpICogcmlzZTtcbiAgICAgIHBhcnRzLnB1c2goYm94QXQoeDEgLSBydW4gLyAyLCBoIC8gMiwgMCwgcnVuLCBoLCBTVC50cmVhZEhhbGZaICogMikpO1xuICAgIH1cbiAgICAvLyBSYWtpbmcgY2hlZWtzLCBhcyBhIHRyaWFuZ2xlIGV4dHJ1ZGVkIGFsb25nICtaIC0tIHRoZSBvbmUgcHJvZmlsZSBvbiB0aGlzIHByb3AgdGhhdFxuICAgIC8vIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUuXG4gICAgY29uc3QgY2hlZWsgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICBjaGVlay5tb3ZlVG8oU1QueDEsIDApOyBjaGVlay5saW5lVG8oU1QueDAsIDApOyBjaGVlay5saW5lVG8oU1QueDAsIFNULnRvcCk7IGNoZWVrLmNsb3NlUGF0aCgpO1xuICAgIHBhcnRzLnB1c2goZXh0cnVkZUFsb25nWihjaGVlaywgU1QuY2hlZWtbMF0sIFNULmNoZWVrWzFdKSk7XG4gICAgcGFydHMucHVzaChleHRydWRlQWxvbmdaKGNoZWVrLCAtU1QuY2hlZWtbMV0sIC1TVC5jaGVla1swXSkpO1xuXG4gICAgY29uc3QgZ2VvID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgICAvLyBHcm91bmQgZGlydCBhbmQgbGljaGVuIG9uIHRoZSBsb3dlciB0ZXJyYWNlLCBkZWxpdmVyZWQgYXMgYSBwZXItdmVydGV4IHRpbnQgcmF0aGVyIHRoYW4gYVxuICAgIC8vIHNlY29uZCBtYXRlcmlhbDogdGhlIHBsYXRlIG1lYXN1cmVzIHRoZSBib3R0b20gcGxpbnRoIGRpc3RpbmN0bHkgZGFya2VyIGFuZCBncmVlbmVyIHRoYW4gdGhlXG4gICAgLy8gdXBwZXIgcGxhdGZvcm0sIGFuZCBhIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgZHJhdyBjYWxsIHRvIHNheSBzby5cbiAgICB0aW50QnlIZWlnaHQoZ2VvLCAwLCAyLjQ1LCBbMC44MiwgMC44MywgMC44MF0pO1xuICAgIGFkZCgndGVycmFjZScsICdUZXJyYWNlLCBiYWx1c3RyYWRlIGFuZCBzdGFpcicsIGdlbywgJ3N0b25lJyk7XG4gICAgY29sbGlkZXJzWyd0ZXJyYWNlJ10gPSB7XG4gICAgICBzaGFwZTogJ2JveCcsIGxvY2FsQ2VudGVyOiBbMCwgOS4wLCAwXSwgaGFsZkV4dGVudHM6IFs0LjUsIDkuMCwgNC41XSxcbiAgICAgIG5vdGVzOiAnQXNzZXQgZGVjbGFyZXMgY29sbGlkZXIgXCJib3hcIi4gT25lIGNvbnZleCBwcm94eSBvdmVyIHRoZSB3aG9sZSBlbnZlbG9wZTsgYSBsZXZlbCAnXG4gICAgICAgICAgICsgJ2J1aWxkZXIgY29sbGlkZXMgd2l0aCB0aGUgdG93ZXIsIG5vdCB3aXRoIGl0cyBzdGFpciB0cmVhZHMuJyxcbiAgICB9O1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0b3dlciBib2R5XG4gICAqIEEgcmVkZW50ZWQgc3F1YXJlLCBleHRydWRlZCBhcyBPTkUgY2xvc2VkIHBsYW4uIFRoZSByZWRlbnRzIGFyZSB3aGF0IGEgcHJhbmcgaGFzIGluc3RlYWQgb2ZcbiAgICogY29ybmVycywgYW5kIHRoZXkgYXJlIHRoZSByZWFzb24gYSBjcm9zc2VkLWJveCBjb25zdHJ1Y3Rpb24gaXMgd3JvbmcgaGVyZSBhcyB3ZWxsIGFzXG4gICAqIHotZmlnaHRpbmc6IHRoZSBwbGFuIGlzIGEgdHdlbnR5LXBvaW50IHBvbHlnb24sIG5vdCB0d28gcmVjdGFuZ2xlcy4gKi9cbiAge1xuICAgIGNvbnN0IFQgPSBHLnRvd2VyO1xuICAgIGFkZCgndG93ZXInLCAnVG93ZXIgYm9keScsIGV4dHJ1ZGVTbGFiKHJlZGVudGVkU2hhcGUoVC5hLCBULnIpLCBULnkwLCBULnkxKSwgJ3BvcmNlbGFpbicpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwaWxhc3RlciBzdHJpcHNcbiAgICogRWlnaHQgcmVkIHN0cmlwcyBzdGFuZGluZyBpbiB0aGUgcmUtZW50cmFudCBmYWNlcyBvZiB0aGUgZm91ciByZWRlbnRlZCBjb3JuZXJzLCBhcyBPTkVcbiAgICogSW5zdGFuY2VkTWVzaCBvZiBmb3VyIHJvdGF0aW9ucy4gVGhlIHVuaXQgZ2VvbWV0cnkgaG9sZHMgQk9USCBzdHJpcHMgb2YgYSBzaW5nbGUgY29ybmVyIGFuZCBpc1xuICAgKiBwbGFjZWQgYXQgcmFkaXVzIHplcm8sIHNvIHF1YWQoKSBzdXBwbGllcyB0aGUgZm91ciA5MC1kZWdyZWUgcm90YXRpb25zIGFuZCB0aGUgY29ybmVyIG9mZnNldHNcbiAgICogYXJlIGJha2VkIGludG8gdGhlIGdlb21ldHJ5IC0tIHdoaWNoIGlzIGhvdyBhbiBlaWdodC1wYXJ0IHN5c3RlbSBjb3N0cyBvbmUgZ2VvbWV0cnkuICovXG4gIHtcbiAgICBjb25zdCBUID0gRy50b3dlciwgUCA9IEcucGlsYXN0ZXI7XG4gICAgY29uc3QgcHkgPSAoUC55MCArIFAueTEpIC8gMiwgcGggPSBQLnkxIC0gUC55MDtcbiAgICAvLyBUaGUgcmUtZW50cmFudCBmYWNlcyBvZiB0aGUgK1grWiBjb3JuZXI6IG9uZSBhdCB4ID0gYS1yIGxvb2tpbmcgK1gsIG9uZSBhdCB6ID0gYS1yIGxvb2tpbmcgK1ouXG4gICAgY29uc3QgeGYgPSBULmEgLSBULnIsIHpmID0gVC5hIC0gVC5yLCBuZWFyID0gVC5hIC0gMiAqIFQucjtcbiAgICBjb25zdCB1bml0ID0gbWVyZ2VHZW9zKFtcbiAgICAgIGJveEF0KHhmICsgUC5wcm91ZCAvIDIsIHB5LCAobmVhciArIHpmKSAvIDIsIFAucHJvdWQsIHBoLCBQLncpLFxuICAgICAgYm94QXQoKG5lYXIgKyB4ZikgLyAyLCBweSwgemYgKyBQLnByb3VkIC8gMiwgUC53LCBwaCwgUC5wcm91ZCksXG4gICAgXSk7XG4gICAgYWRkSW5zdCgncGlsYXN0ZXJzJywgJ1JlZGVudCBwaWxhc3RlciBzdHJpcHMnLCB1bml0LCAncmVkJywgcXVhZCgwLCAwKSk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZhbHNlIGRvb3JzIGFuZCBwZWRpbWVudHNcbiAgICogRm91ciBmYWNlcywgZWFjaCBjYXJyeWluZyBhIGJsaW5kIGFyY2hlZCBkb29yIGxvdyBkb3duIGFuZCBhIHJhaXNlZCBhcmNoZWQgcGVkaW1lbnQgZmllbGRcbiAgICogYWJvdmUgaXQuIEJvdGggYXJlIHRoZSBzYW1lIHBvcmNlbGFpbiBhbmQgYm90aCByZXBlYXQgZm91ci1mb2xkLCBzbyB0aGV5IHJpZGUgT05FIGluc3RhbmNlZFxuICAgKiB1bml0OiB0d28gZmVhdHVyZXMsIGZvdXIgZmFjZXMsIG9uZSBnZW9tZXRyeSBhbmQgb25lIGRyYXcgY2FsbC5cbiAgICpcbiAgICogVGhlIGZhbHNlIGRvb3Igb24gdGhyZWUgb3IgZm91ciBmYWNlcyBpcyBhIGdlbnVpbmUgS2htZXItZGVyaXZlZCBmZWF0dXJlLCBub3QgYW4gb21pc3Npb24gLS1cbiAgICogYSBwcmFuZyBoYXMgb25lIHJlYWwgY2VsbCBhbmQgdGhlIHJlc3QgYXJlIGJsaW5kLiAqL1xuICB7XG4gICAgY29uc3QgVCA9IEcudG93ZXIsIEQgPSBHLmRvb3IsIFBEID0gRy5wZWRpbWVudDtcbiAgICBjb25zdCBmYWNlID0gVC5hO1xuICAgIGNvbnN0IGRvb3JTaGFwZSA9IGFyY2hlZFBsYXRlKEQudywgRC5oLCBELncgLyAyLCBELmggLSBELncgLyAyLFxuICAgICAgeyByOiBELncgLyAyIC0gMC4yMiwgc3ByaW5nOiBELmggLSBELncgLyAyLCBzaWxsOiBELnNpbGwgfSk7XG4gICAgY29uc3QgZG9vckZyYW1lID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShkb29yU2hhcGUsXG4gICAgICB7IGRlcHRoOiBELmRlcHRoLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiAxMCB9KTtcbiAgICBkb29yRnJhbWUudHJhbnNsYXRlKDAsIEQueSwgZmFjZSAtIEQuZGVwdGggKyAwLjE2KTtcbiAgICBkb29yRnJhbWUuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcblxuICAgIGNvbnN0IHBlZFNoYXBlID0gYXJjaGVkUGxhdGUoUEQudywgUEQuaCwgUEQudyAvIDIsIFBELmggLSBQRC53IC8gMik7XG4gICAgY29uc3QgcGVkID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShwZWRTaGFwZSxcbiAgICAgIHsgZGVwdGg6IFBELmRlcHRoLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiAxMCB9KTtcbiAgICBwZWQudHJhbnNsYXRlKDAsIFBELnksIGZhY2UgLSBQRC5kZXB0aCArIDAuMDkpO1xuICAgIHBlZC5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuXG4gICAgYWRkSW5zdCgnZG9vci1mcmFtZXMnLCAnRmFsc2UgZG9vcnMgYW5kIHBlZGltZW50cycsIG1lcmdlR2VvcyhbZG9vckZyYW1lLCBwZWRdKSwgJ3BvcmNlbGFpbicsXG4gICAgICBxdWFkKDAsIDApKTtcblxuICAgIC8vIFRoZSBibGluZCBkb29yJ3MgYmFjayBwYW5lbDogYSByZWFsIGNvbmNhdml0eSAwLjE2IG0gYmVoaW5kIHRoZSBmcmFtZSdzIGZyb250IHBsYW5lLCBhbmRcbiAgICAvLyAwLjAzIG0gUFJPVUQgb2YgdGhlIHdhbGwgaXQgc2l0cyBhZ2FpbnN0IHJhdGhlciB0aGFuIGZsdXNoIHdpdGggaXQuXG4gICAgY29uc3QgcGFuZWwgPSBib3hBdCgwLCBELnkgKyBELmggLyAyIC0gMC4xMCwgZmFjZSArIDAuMDE1LCBELncgLSAwLjQ4LCBELmggLSAwLjQ2LCAwLjA1KTtcbiAgICBhZGRJbnN0KCdkb29yLXBhbmVscycsICdCbGluZCBkb29yIHBhbmVscycsIHBhbmVsLCAnc2hhZG93JywgcXVhZCgwLCAwKSk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvcm4tY29iIHRpZXJzXG4gICAqIFNldmVuIHJlY2VkaW5nIHJlZGVudGVkIHNsYWJzLCBNRVJHRUQgaW50byBvbmUgY29tcG9uZW50LiBUaGUgaGFsZi13aWR0aCBmb2xsb3dzIGEgY29zaW5lXG4gICAqIHJhaXNlZCB0byBhIHBvd2VyIGp1c3QgYWJvdmUgb25lLCB3aGljaCBpcyB3aGF0IG1ha2VzIHRoZSB0YXBlciBDT05WRVggLS0gdGhlIGNvcm4tY29iIGJ1bGdlXG4gICAqIHRoZSByZWdpc3RyeSBub3RlcyBuYW1lIGFzIHRoaXMgcHJvcCdzIGlkZW50aXR5LiBBIGxpbmVhciBpbnRlcnBvbGF0aW9uIGdpdmVzIGEgc3RyYWlnaHQgY29uZSxcbiAgICogYW5kIGEgc3RyYWlnaHQgY29uZSBpcyBhIGRpZmZlcmVudCBidWlsZGluZy4gKi9cbiAge1xuICAgIGNvbnN0IFQgPSBHLnRpZXJzO1xuICAgIGNvbnN0IHN0ZXAgPSAoVC55MSAtIFQueTApIC8gVC5jb3VudDtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVC5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB0ID0gaSAvIFQuY291bnQ7XG4gICAgICBjb25zdCBhID0gVC5hMSArIChULmEwIC0gVC5hMSkgKiBNYXRoLnBvdyhNYXRoLmNvcyh0ICogTWF0aC5QSSAvIDIpLCBULmN1cnZlKTtcbiAgICAgIGNvbnN0IHkwID0gVC55MCArIGkgKiBzdGVwO1xuICAgICAgcGFydHMucHVzaChleHRydWRlU2xhYihyZWRlbnRlZFNoYXBlKGEsIGEgKiBULnJlZGVudCksIHkwLCBULnkwICsgKGkgKyAxKSAqIHN0ZXApKTtcbiAgICAgIC8vIEEgcHJvamVjdGluZyBsaXAgYXQgdGhlIGZvb3Qgb2YgZWFjaCB0aWVyIC0tIHRoZSByaW5nIGJhbmQgdGhlIHBsYXRlIHNob3dzIGF0IGV2ZXJ5IHN0ZXAuXG4gICAgICAvLyBJdCBzdGFydHMgMC4wMiBtIEFCT1ZFIHRoZSB0aWVyJ3Mgb3duIGJhc2UgcmF0aGVyIHRoYW4gbGV2ZWwgd2l0aCBpdDogbGV2ZWwsIHRoZSBsaXAnc1xuICAgICAgLy8gdW5kZXJzaWRlIGFuZCB0aGUgdGllcidzIHVuZGVyc2lkZSB3b3VsZCBiZSB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5LlxuICAgICAgY29uc3QgbGEgPSBhICsgVC5saXA7XG4gICAgICBwYXJ0cy5wdXNoKGV4dHJ1ZGVTbGFiKHJlZGVudGVkU2hhcGUobGEsIGxhICogVC5yZWRlbnQpLCB5MCArIDAuMDIsIHkwICsgMC4xNikpO1xuICAgIH1cbiAgICBhZGQoJ3RpZXJzJywgJ0Nvcm4tY29iIHRpZXJzJywgbWVyZ2VHZW9zKHBhcnRzKSwgJ3BvcmNlbGFpbicpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjYXBcbiAgICogVGhlIHJvdW5kZWQgaGVhZCBhYm92ZSB0aGUgdG9wIHRpZXIsIGFzIGEgY2xvc2VkIGxhdGhlLiBJdHMgYmFzZSBpcyBzdW5rIHRvIDE1LjQwLCBpbnNpZGUgdGhlXG4gICAqIHRvcCB0aWVyLCByYXRoZXIgdGhhbiByZXN0aW5nIG9uIGl0cyAxNS42MCB0b3AgZmFjZTogTGF0aGVHZW9tZXRyeSBpcyBvcGVuIGF0IHRoZSBib3R0b20gYW5kXG4gICAqIGFuIG9wZW4gcmltIHNpdHRpbmcgZXhhY3RseSBvbiBhIHN1cmZhY2UgaXMgYSBzZWFtIHRoZSB0dXJudGFibGUgZ2F0ZSBjYW4gcmVhZCB0aHJvdWdoLiAqL1xuICB7XG4gICAgY29uc3QgQyA9IEcuY2FwO1xuICAgIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgIGNvbnN0IHQgPSBpIC8gMTA7XG4gICAgICBwdHMucHVzaChbQy5yICogTWF0aC5jb3ModCAqIE1hdGguUEkgLyAyKSwgQy55MCArIChDLnkxIC0gQy55MCkgKiB0XSk7XG4gICAgfVxuICAgIHB0cy51bnNoaWZ0KFtDLnIsIEMueTAgLSAwLjBdKTtcbiAgICBhZGQoJ2NhcCcsICdEb21lZCBjYXAnLCBsYXRoZShwdHMsIEMuc2VnKSwgJ3BvcmNlbGFpbicpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0cmlkZW50IGZpbmlhbFxuICAgKiBUaGUgdHJpZGVudCBpcyB3aGF0IG1hcmtzIHRoaXMgYXMgYSBUaGFpIHByYW5nIHJhdGhlciB0aGFuIGFueSBvdGhlciB0b3dlciwgc28gaXQgaXMgYXV0aG9yZWRcbiAgICogYXMgdGhyZWUgcmVhbCBwcm9uZ3Mgb24gYSBzaGFmdCBhbmQgbm90IGFzIGEgc3Bpa2UuIE1lcmdlZCBib3hlcyBhbmQgb25lIGxhdGhlIGNvbGxhciwgaW4gdGhlXG4gICAqIG9ubHkgZ29sZCBtYXRlcmlhbCBvbiB0aGUgcHJvcC4gKi9cbiAge1xuICAgIGNvbnN0IEYgPSBHLmZpbmlhbDtcbiAgICBjb25zdCBzaGFmdCA9IEYueTA7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXG4gICAgICBjeWxBdCgwLCBzaGFmdCArIDAuMTAsIDAsIDAuMTEsIDAuMTQsIDAuMjAsIDEyKSwgICAvLyBjb2xsYXJcbiAgICAgIGN5bEF0KDAsIHNoYWZ0ICsgMC4zNCwgMCwgMC4wNSwgMC4wNywgMC4zMCwgMTIpLCAgIC8vIHN0ZW1cbiAgICAgIGJveEF0KDAsIHNoYWZ0ICsgMC41MCwgMCwgMC40MCwgMC4wNywgMC4wNyksICAgICAgIC8vIGNyb3NzIGJhciB0aGUgb3V0ZXIgcHJvbmdzIHNwcmluZyBmcm9tXG4gICAgICBjeWxBdCgwLCBzaGFmdCArIDAuOTAsIDAsIDAuMDA4LCAwLjA1NSwgMC44MiwgMTApLCAvLyB0YXBlcmVkIGNlbnRyZSBzcGlrZVxuICAgIF07XG4gICAgLy8gVGhlIHR3byBvdXRlciBwcm9uZ3MgQ1VSTC4gSW4gdGhlIHBsYXRlIHRoZXkgc3ByaW5nIG91dHdhcmQgZnJvbSB0aGUgYmFyIGFuZCBob29rIGJhY2sgaW4gYXRcbiAgICAvLyB0aGUgdGlwLCBhbmQgdGhhdCBjdXJsIGlzIG1vc3Qgb2Ygd2hhdCBpZGVudGlmaWVzIHRoZSBtYXJrIGFzIGEgdHJpZGVudCBhdCBhbGwgLS0gdHdvXG4gICAgLy8gc3RyYWlnaHQgc3RpY2tzIGVpdGhlciBzaWRlIG9mIGEgc3Bpa2UgcmVhZCBhcyBhIGNhbmRlbGFicnVtLiBGaXZlIHNob3J0IHNlZ21lbnRzIGVhY2gsXG4gICAgLy8gc2FtcGxlZCBhbG9uZyBhIHNpbmUsIGlzIHRoZSBjaGVhcGVzdCB0aGluZyB0aGF0IGtlZXBzIHRoZSBob29rLlxuICAgIGZvciAoY29uc3Qgc2lnbiBvZiBbLTEsIDFdKSB7XG4gICAgICBjb25zdCBuID0gNTtcbiAgICAgIGNvbnN0IGF0ID0gKHU6IG51bWJlcikgPT4gW3NpZ24gKiAoMC4xNyArIDAuMTUgKiBNYXRoLnNpbih1ICogTWF0aC5QSSAqIDAuNzIpKSwgc2hhZnQgKyAwLjUyICsgMC42MCAqIHVdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICAgICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICAgICAgY29uc3QgbGVuID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuICAgICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDAuMDUsIGxlbiArIDAuMDMsIDAuMDUpO1xuICAgICAgICAvLyBSb3RhdGlvbiBhYm91dCBaIGJ5IHRoZXRhIG1hcHMgdGhlIGJveCdzIGxvY2FsICtZIHRvICgtc2luLCBjb3MpLCBzbyB0aGV0YSA9IGF0YW4yKC1keCwgZHkpXG4gICAgICAgIC8vIGlzIHdoYXQgYWltcyB0aGUgc2VnbWVudCBhbG9uZyB0aGUgc2FtcGxlZCB0YW5nZW50LlxuICAgICAgICBnLnJvdGF0ZVooTWF0aC5hdGFuMigtZHgsIGR5KSk7XG4gICAgICAgIGcudHJhbnNsYXRlKChhWzBdICsgYlswXSkgLyAyLCAoYVsxXSArIGJbMV0pIC8gMiwgMCk7XG4gICAgICAgIHBhcnRzLnB1c2goZyk7XG4gICAgICB9XG4gICAgfVxuICAgIGFkZCgnZmluaWFsJywgJ0dpbHQgdHJpZGVudCBmaW5pYWwnLCBtZXJnZUdlb3MocGFydHMpLCAnZ29sZCcpO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlUHJhbmdNb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IE9ORS4gU3RhdGljIGxhbmRtYXJrIGdlb21ldHJ5IC0tIG5vdGhpbmcgb3BlbnMsIHR1cm5zIG9yIHN3aW5ncy4gQSBuYW1lZCBwaXZvdCBpcyBhXG4gICAgLy8gcHJvbWlzZSB0aGF0IGEgcGFydCB0dXJucyBvbiBpdCwgYW5kIGEgcHJvcCB0aGF0IGRlY2xhcmVzIHBpdm90cyBpdCBoYXMgbm8gbWVjaGFuaXNtcyBmb3JcbiAgICAvLyBoYXMgZGVzY3JpYmVkIGEgbWFjaGluZSB0aGF0IGRvZXMgbm90IGV4aXN0LlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuXG4gICAgLy8gU29ja2V0czogTk9ORS4gTm90aGluZyBhdHRhY2hlcyB0byB0aGlzIHByb3AgYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQXFDdkIsSUFBTSxTQUFTO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsSUFDWDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixtQkFBbUI7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
