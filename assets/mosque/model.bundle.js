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

// scratch/mosque/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createMosqueModel: () => createMosqueModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
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
      "gateH": 3.3
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
      "w": 1.62,
      "spring": 2.3,
      "rise": 1.35,
      "sill": 0.35,
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
        0,
        13.15,
        0,
        1.55
      ],
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
      ],
      [
        -5.75,
        17.4849,
        -6.6,
        0.66
      ]
    ],
    "crescent": {
      "x": 0,
      "y": 14.86,
      "z": 0,
      "r": 0.46,
      "t": 0.12
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
  const anyColor = parts.some((g) => !!g.getAttribute("color"));
  const color = anyColor ? new Float32Array(total * 3).fill(1) : null;
  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute("position"), n = g.getAttribute("normal"), t = g.getAttribute("uv");
    const c = g.getAttribute("color");
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
      if (color && c) {
        color[(v + i) * 3] = c.getX(i);
        color[(v + i) * 3 + 1] = c.getY(i);
        color[(v + i) * 3 + 2] = c.getZ(i);
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
  if (color) out.setAttribute("color", new THREE.BufferAttribute(color, 3));
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
function ribbedDome(profile, ribs, amp, seg, valley) {
  const tri = [];
  const col = [];
  const tint = (j) => {
    if (!valley) return [1, 1, 1];
    const f = Math.pow((1 - Math.cos(ribs * (j % seg * Math.PI * 2 / seg))) / 2, 0.55);
    return [1 + (valley[0] - 1) * f, 1 + (valley[1] - 1) * f, 1 + (valley[2] - 1) * f];
  };
  const push = (a, b, c) => tri.push(...a, ...b, ...c);
  const at = (i, j) => {
    const th = j % seg * Math.PI * 2 / seg;
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
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(tri), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(tri.length / 3 * 2), 2));
  if (valley) g.setAttribute("color", new THREE.BufferAttribute(new Float32Array(col), 3));
  g.computeVertexNormals();
  return g;
}
function pointedArchShape(w, spring, apexRise, sill, hole) {
  const build = (target, ww, sp, rise, sl) => {
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
function createMosqueModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Mosque";
  const materials = buildMaterials(options);
  const nodes = {};
  const meshes = {};
  const sockets = {};
  const colliders = {};
  const destructionGroups = {};
  const castShadow = options.castShadow ?? true;
  const receiveShadow = options.receiveShadow ?? true;
  function guardVertexColors(geo, mat) {
    if (!mat || !mat.vertexColors || geo.getAttribute("color")) return;
    const n = geo.getAttribute("position").count;
    geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(n * 3).fill(1), 3));
  }
  function add(id, name, geo, matId) {
    const node = new THREE.Group();
    node.name = name + "__node";
    guardVertexColors(geo, materials[matId]);
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
    guardVertexColors(geo, materials[matId]);
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
    const C = G.court;
    const cc = C.hx - C.t / 2, ci = C.hx - C.t, dd = C.hz - C.t / 2, di = C.hz - C.t;
    const parts = [
      boxAt(-cc, C.h / 2, 0, C.t, C.h, C.hz * 2),
      boxAt(cc, C.h / 2, 0, C.t, C.h, C.hz * 2),
      boxAt(0, C.h / 2, -dd, ci * 2, C.h, C.t)
    ];
    const segLen = ci - C.gateHalf - C.pylon;
    parts.push(boxAt(-(C.gateHalf + C.pylon + segLen / 2), C.h / 2, dd, segLen, C.h, C.t));
    parts.push(boxAt(C.gateHalf + C.pylon + segLen / 2, C.h / 2, dd, segLen, C.h, C.t));
    for (const xs of [-1, 1]) {
      parts.push(boxAt(xs * (C.gateHalf + C.pylon / 2), C.gateH / 2, dd, C.pylon, C.gateH, C.t));
    }
    const head = new THREE.ExtrudeGeometry(
      pointedArchShape(
        C.gateHalf * 2 + C.pylon * 2,
        1.7,
        1,
        0,
        { w: C.gateHalf * 2, spring: 1.7, apexRise: 0.86, sill: 0 }
      ),
      { depth: C.t, bevelEnabled: false, curveSegments: 8 }
    );
    head.translate(0, 0, dd - C.t / 2);
    head.computeVertexNormals();
    parts.push(head);
    const geo = mergeGeos(parts);
    tintByHeight(geo, C.h, 0.3, [0.72, 0.73, 0.7]);
    add("court-wall", "Courtyard wall and gate", geo, "white");
    colliders["court-wall"] = {
      shape: "box",
      localCenter: [0, 9, 0],
      halfExtents: [7, 9, 8],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level builder collides with the compound, not with the minaret separately.'
    };
  }
  {
    const H = G.hall, D = G.deck, P = G.parapet;
    const parts = [
      boxAt(0, (H.y0 + H.y1) / 2, (H.zBack + H.zFront) / 2, H.hx * 2, H.y1 - H.y0, H.zFront - H.zBack),
      boxAt(0, (D.y0 + D.y1) / 2, (H.zBack + H.zFront) / 2, H.hx * 2 - 0.3, D.y1 - D.y0, H.zFront - H.zBack - 0.3)
    ];
    const px = H.hx + 0.08, pz0 = H.zBack - 0.08, pz1 = H.zFront + 0.08, t = 0.34;
    const py = (P.y0 + P.y1) / 2, ph = P.y1 - P.y0;
    parts.push(boxAt(-(px - t / 2), py, (pz0 + pz1) / 2, t, ph, pz1 - pz0));
    parts.push(boxAt(px - t / 2, py, (pz0 + pz1) / 2, t, ph, pz1 - pz0));
    parts.push(boxAt(0, py, pz0 + t / 2, (px - t) * 2, ph, t));
    parts.push(boxAt(0, py, pz1 - t / 2, (px - t) * 2, ph, t));
    const geo = mergeGeos(parts);
    tintByHeight(geo, H.y1, 1.2, [0.66, 0.68, 0.64]);
    add("hall", "Prayer hall block", geo, "white");
  }
  {
    const H = G.hall, D = G.deck;
    add("roof-deck", "Roof deck", boxAt(
      0,
      D.y1 - 0.03,
      (H.zBack + H.zFront) / 2,
      H.hx * 2 - 0.44,
      0.06,
      H.zFront - H.zBack - 0.44
    ), "deck");
  }
  {
    const H = G.hall, P = G.parapet;
    const parts = [];
    const px = H.hx + 0.11, pz0 = H.zBack - 0.11, pz1 = H.zFront + 0.11, t = 0.3;
    const by = P.y1 + 0.04 - P.band / 2;
    parts.push(boxAt(-(px - t / 2), by, (pz0 + pz1) / 2, t, P.band, pz1 - pz0));
    parts.push(boxAt(px - t / 2, by, (pz0 + pz1) / 2, t, P.band, pz1 - pz0));
    parts.push(boxAt(0, by, pz0 + t / 2, (px - t) * 2, P.band, t));
    parts.push(boxAt(0, by, pz1 - t / 2, (px - t) * 2, P.band, t));
    add("parapet-band", "Green parapet band", mergeGeos(parts), "green");
  }
  {
    const D = G.dome, MN = G.minaret, V = G.valley;
    const parts = [];
    const prof = [];
    for (let i = 0; i <= D.steps; i++) {
      const t2 = i / D.steps;
      prof.push([
        D.r * Math.cos(t2 * Math.PI * 0.5) * (1 - 0.06 * t2 * t2),
        D.y0 + (D.y1 - D.y0) * Math.sin(t2 * Math.PI * 0.5)
      ]);
    }
    parts.push(ribbedDome(prof, D.ribs, D.amp, D.seg, V));
    const mp = [];
    for (let i = 0; i <= MN.steps; i++) {
      const t2 = i / MN.steps;
      mp.push([
        MN.domeR * Math.cos(t2 * Math.PI * 0.5),
        MN.domeY[0] + (MN.domeY[1] - MN.domeY[0]) * Math.sin(t2 * Math.PI * 0.5)
      ]);
    }
    const md = ribbedDome(mp, MN.ribs, MN.amp, MN.seg, V);
    md.translate(MN.x, 0, MN.z);
    parts.push(md);
    add("domes", "Great dome and minaret dome", mergeGeos(parts), "dome");
  }
  {
    const DR = G.drum;
    add("drum", "Dome drum", mergeGeos([
      boxAt(0, (DR.sqY[0] + DR.sqY[1]) / 2, 0, DR.sqHalf * 2, DR.sqY[1] - DR.sqY[0], DR.sqHalf * 2),
      cylAt(0, (DR.cylY[0] + DR.cylY[1]) / 2, 0, DR.cylR, DR.cylR * 1.04, DR.cylY[1] - DR.cylY[0], 32)
    ]), "white");
  }
  {
    const S = G.small;
    const drum = cylAt(0, 0, 0, S.drumR, S.drumR * 1.06, S.drumY[1] - S.drumY[0], 20);
    addInst(
      "small-drums",
      "Corner dome drums",
      drum,
      "white",
      S.at.map(([x, z]) => new THREE.Matrix4().setPosition(x, (S.drumY[0] + S.drumY[1]) / 2, z))
    );
    const prof = [];
    for (let i = 0; i <= S.steps; i++) {
      const t = i / S.steps;
      prof.push([
        S.domeR * Math.cos(t * Math.PI * 0.5),
        (S.domeY[1] - S.domeY[0]) * Math.sin(t * Math.PI * 0.5)
      ]);
    }
    addInst(
      "small-domes",
      "Corner domes",
      ribbedDome(prof, S.ribs, S.amp, S.seg, G.valley),
      "dome",
      S.at.map(([x, z]) => new THREE.Matrix4().setPosition(x, S.domeY[0], z))
    );
  }
  {
    const MN = G.minaret;
    add("minaret", "Minaret", mergeGeos([
      boxAt(MN.x, MN.y1 / 2, MN.z, MN.half * 2, MN.y1, MN.half * 2),
      // The balcony slab, standing clear of the shaft on every side.
      boxAt(
        MN.x,
        (MN.balconyY[0] + MN.balconyY[1]) / 2,
        MN.z,
        MN.balconyHalf * 2,
        MN.balconyY[1] - MN.balconyY[0],
        MN.balconyHalf * 2
      ),
      // A thinner parapet lip on top of it, inset so no two top faces share a plane.
      boxAt(MN.x, MN.balconyY[1] + 0.14, MN.z, MN.balconyHalf * 1.82, 0.28, MN.balconyHalf * 1.82),
      cylAt(
        MN.x,
        (MN.upperY[0] + MN.upperY[1]) / 2 + 0.16,
        MN.z,
        MN.upperR,
        MN.upperR * 1.05,
        MN.upperY[1] - MN.upperY[0] - 0.32,
        16
      )
    ]), "white");
  }
  {
    const H = G.hall, A = G.arch;
    const face = H.zFront;
    const shape = pointedArchShape(
      A.pitch,
      A.spring + 0.3,
      A.rise + 0.3,
      0,
      { w: A.w, spring: A.spring, apexRise: A.rise, sill: A.sill }
    );
    const frame = new THREE.ExtrudeGeometry(shape, { depth: A.depth, bevelEnabled: false, curveSegments: 10 });
    frame.translate(0, 0.55, face - A.depth + 0.2);
    frame.computeVertexNormals();
    const xs = [];
    for (let i = 0; i < A.count; i++) xs.push((i - (A.count - 1) / 2) * A.pitch);
    addInst(
      "arch-frames",
      "Arcade surrounds",
      frame,
      "white",
      xs.map((x) => new THREE.Matrix4().setPosition(x, 0, 0))
    );
    const voidShape = pointedArchShape(A.w, A.spring, A.rise, A.sill);
    const vg = new THREE.ExtrudeGeometry(voidShape, { depth: 0.05, bevelEnabled: false, curveSegments: 10 });
    vg.translate(0, 0.55, face + 0.02);
    vg.computeVertexNormals();
    addInst(
      "arch-voids",
      "Arcade openings",
      vg,
      "dark",
      xs.map((x) => new THREE.Matrix4().setPosition(x, 0, 0))
    );
  }
  {
    const F = G.finials, C = G.crescent;
    const parts = [];
    for (const [x, y, z, s] of F) {
      const g = lathe([
        [0, 0],
        [0.16, 0.03],
        [0.2, 0.16],
        [0.1, 0.3],
        [0.13, 0.42],
        [0.07, 0.58],
        [0, 0.78]
      ], 14);
      g.scale(s, s, s);
      g.translate(x, y, z);
      parts.push(g);
    }
    parts.push(cylAt(C.x, C.y - C.r - 0.26, C.z, 0.05, 0.07, 0.52, 10));
    const n = 11;
    for (let i = 0; i < n; i++) {
      const a0 = -Math.PI * 0.62 + i / n * Math.PI * 1.24;
      const a1 = -Math.PI * 0.62 + (i + 1) / n * Math.PI * 1.24;
      const p0 = [Math.sin(a0) * C.r, Math.cos(a0) * C.r];
      const p1 = [Math.sin(a1) * C.r, Math.cos(a1) * C.r];
      const dx = p1[0] - p0[0], dy = p1[1] - p0[1];
      const g = new THREE.BoxGeometry(C.t, Math.hypot(dx, dy) + 0.02, C.t);
      g.rotateZ(Math.atan2(-dx, dy));
      g.translate(C.x + (p0[0] + p1[0]) / 2, C.y + (p0[1] + p1[1]) / 2, C.z);
      parts.push(g);
    }
    add("finials", "Gilt finials and crescent", mergeGeos(parts), "gold");
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createMosqueModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogTW9zcXVlIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDE0LjAwIHggMTguMDAgeCAxNi4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLlxuICogQnVkZ2V0IChoZXJvNHgpOiA8PTMyMDAwIHRyaWFuZ2xlcywgPD0yNCBkcmF3IGNhbGxzLCA8PTE2IG1hdGVyaWFscywgPD0zMiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgTU9OVU1FTlRBTCBidWlsZGluZ3MsIGFuZCB1bmxpa2UgdGhlIHNoYXJlZCByZXRhaWwgbW9kdWxlIGl0cyBmb3JtIGlzXG4gKiBub3QgYSBib3g6IHRoZSByZWNvZ25pc2FibGUgZmVhdHVyZSBpcyBhIGN1cnZlZCBvciB0aWVyZWQgcHJvZmlsZSB0aGF0IGhhcyB0byBzdXJ2aXZlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tLiBUaGUgc2hhcmVkIHZvY2FidWxhcnkgaGVyZSBpcyB0aGVyZWZvcmUgdGhlIExBVEhFIC0tXG4gKiBhIHByb2ZpbGUgcmV2b2x2ZWQgYWJvdXQgK1kgLS0gYW5kIHRoZSB0aWVyZWQvc3RlcHBlZCBtZXJnZSwgbm90IHRoZSBwYXJhbWV0ZXJpc2VkIHNob3Bmcm9udC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcIm1vc3F1ZVwiLFxuICAgIFwibmFtZVwiOiBcIk1vc3F1ZVwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIk1vc3F1ZVwiLFxuICAgIFwiZW52ZWxvcGVcIjogXCJFbnZlbG9wZSAxNC4wMCB4IDE4LjAwIHggMTYuMDAgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cC5cXG4gKiBCdWRnZXQgKGhlcm80eCk6IDw9MzIwMDAgdHJpYW5nbGVzLCA8PTI0IGRyYXcgY2FsbHMsIDw9MTYgbWF0ZXJpYWxzLCA8PTMyIHVuaXF1ZSBnZW9tZXRyaWVzLlwiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcIndoaXRlXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTE3MTExNTAsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTMsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkb21lXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTAxOTkxODEsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNzIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJncmVlblwiLFxuICAgICAgICBcImNvbG9yXCI6IDk0NzU0NTEsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNzIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkZWNrXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTA5ODY2NDcsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkYXJrXCIsXG4gICAgICAgIFwiY29sb3JcIjogNTEzMzg5OCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdvbGRcIixcbiAgICAgICAgXCJjb2xvclwiOiA5ODAwODIyLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjM4LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjMsXG4gICAgICAgIFwiZW52TWFwSW50ZW5zaXR5XCI6IDEuMlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICBcImNvdXJ0XCI6IHtcbiAgICAgICAgXCJoeFwiOiA3LFxuICAgICAgICBcImh6XCI6IDgsXG4gICAgICAgIFwidFwiOiAwLjQ1LFxuICAgICAgICBcImhcIjogMi4zLFxuICAgICAgICBcImdhdGVIYWxmXCI6IDEuNTUsXG4gICAgICAgIFwicHlsb25cIjogMC43NSxcbiAgICAgICAgXCJnYXRlSFwiOiAzLjNcbiAgICAgIH0sXG4gICAgICBcImhhbGxcIjoge1xuICAgICAgICBcImh4XCI6IDQuNixcbiAgICAgICAgXCJ6QmFja1wiOiAtNS40LFxuICAgICAgICBcInpGcm9udFwiOiA0LjIsXG4gICAgICAgIFwieTBcIjogMCxcbiAgICAgICAgXCJ5MVwiOiA3LjJcbiAgICAgIH0sXG4gICAgICBcImRlY2tcIjoge1xuICAgICAgICBcInkwXCI6IDcuMixcbiAgICAgICAgXCJ5MVwiOiA3LjM0XG4gICAgICB9LFxuICAgICAgXCJwYXJhcGV0XCI6IHtcbiAgICAgICAgXCJ5MFwiOiA3LjIsXG4gICAgICAgIFwieTFcIjogNy45NSxcbiAgICAgICAgXCJiYW5kXCI6IDAuM1xuICAgICAgfSxcbiAgICAgIFwiYXJjaFwiOiB7XG4gICAgICAgIFwiY291bnRcIjogNSxcbiAgICAgICAgXCJ3XCI6IDEuNjIsXG4gICAgICAgIFwic3ByaW5nXCI6IDIuMyxcbiAgICAgICAgXCJyaXNlXCI6IDEuMzUsXG4gICAgICAgIFwic2lsbFwiOiAwLjM1LFxuICAgICAgICBcImRlcHRoXCI6IDAuNDIsXG4gICAgICAgIFwicGl0Y2hcIjogMS44NlxuICAgICAgfSxcbiAgICAgIFwiZHJ1bVwiOiB7XG4gICAgICAgIFwic3FZXCI6IFtcbiAgICAgICAgICA3LjM0LFxuICAgICAgICAgIDguNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJzcUhhbGZcIjogMi44NSxcbiAgICAgICAgXCJjeWxZXCI6IFtcbiAgICAgICAgICA4LjU1LFxuICAgICAgICAgIDkuNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjeWxSXCI6IDIuNFxuICAgICAgfSxcbiAgICAgIFwiZG9tZVwiOiB7XG4gICAgICAgIFwieTBcIjogOS40NSxcbiAgICAgICAgXCJ5MVwiOiAxMy4zLFxuICAgICAgICBcInJcIjogMi41OCxcbiAgICAgICAgXCJyaWJzXCI6IDIyLFxuICAgICAgICBcImFtcFwiOiAwLjAzLFxuICAgICAgICBcInNlZ1wiOiA4OCxcbiAgICAgICAgXCJzdGVwc1wiOiAxMlxuICAgICAgfSxcbiAgICAgIFwidmFsbGV5XCI6IFtcbiAgICAgICAgMC4zMyxcbiAgICAgICAgMC40MixcbiAgICAgICAgMC4zNVxuICAgICAgXSxcbiAgICAgIFwic21hbGxcIjoge1xuICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy40LFxuICAgICAgICAgICAgLTIuOVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy40LFxuICAgICAgICAgICAgLTIuOVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTMuNCxcbiAgICAgICAgICAgIDIuOVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy40LFxuICAgICAgICAgICAgMi45XG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBcImRydW1ZXCI6IFtcbiAgICAgICAgICA3LjIxLFxuICAgICAgICAgIDhcbiAgICAgICAgXSxcbiAgICAgICAgXCJkcnVtUlwiOiAxLjAyLFxuICAgICAgICBcImRvbWVZXCI6IFtcbiAgICAgICAgICA3Ljk1LFxuICAgICAgICAgIDkuMzVcbiAgICAgICAgXSxcbiAgICAgICAgXCJkb21lUlwiOiAxLjEsXG4gICAgICAgIFwicmlic1wiOiAxNixcbiAgICAgICAgXCJhbXBcIjogMC4wMzUsXG4gICAgICAgIFwic2VnXCI6IDY0LFxuICAgICAgICBcInN0ZXBzXCI6IDhcbiAgICAgIH0sXG4gICAgICBcIm1pbmFyZXRcIjoge1xuICAgICAgICBcInhcIjogLTUuNzUsXG4gICAgICAgIFwielwiOiAtNi42LFxuICAgICAgICBcImhhbGZcIjogMC42MixcbiAgICAgICAgXCJ5MVwiOiAxMy42LFxuICAgICAgICBcImJhbGNvbnlZXCI6IFtcbiAgICAgICAgICAxMy42LFxuICAgICAgICAgIDE0LjI1XG4gICAgICAgIF0sXG4gICAgICAgIFwiYmFsY29ueUhhbGZcIjogMS4wMixcbiAgICAgICAgXCJ1cHBlcllcIjogW1xuICAgICAgICAgIDE0LjI1LFxuICAgICAgICAgIDE1LjhcbiAgICAgICAgXSxcbiAgICAgICAgXCJ1cHBlclJcIjogMC41MixcbiAgICAgICAgXCJkb21lWVwiOiBbXG4gICAgICAgICAgMTUuNyxcbiAgICAgICAgICAxNy41XG4gICAgICAgIF0sXG4gICAgICAgIFwiZG9tZVJcIjogMC43OCxcbiAgICAgICAgXCJyaWJzXCI6IDE0LFxuICAgICAgICBcImFtcFwiOiAwLjA0LFxuICAgICAgICBcInNlZ1wiOiA1NixcbiAgICAgICAgXCJzdGVwc1wiOiA4XG4gICAgICB9LFxuICAgICAgXCJmaW5pYWxzXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMuMTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLjU1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMy40LFxuICAgICAgICAgIDkuMjUsXG4gICAgICAgICAgLTIuOSxcbiAgICAgICAgICAwLjQ4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjQsXG4gICAgICAgICAgOS4yNSxcbiAgICAgICAgICAtMi45LFxuICAgICAgICAgIDAuNDhcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0zLjQsXG4gICAgICAgICAgOS4yNSxcbiAgICAgICAgICAyLjksXG4gICAgICAgICAgMC40OFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy40LFxuICAgICAgICAgIDkuMjUsXG4gICAgICAgICAgMi45LFxuICAgICAgICAgIDAuNDhcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC01Ljc1LFxuICAgICAgICAgIDE3LjQ4NDksXG4gICAgICAgICAgLTYuNixcbiAgICAgICAgICAwLjY2XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcImNyZXNjZW50XCI6IHtcbiAgICAgICAgXCJ4XCI6IDAsXG4gICAgICAgIFwieVwiOiAxNC44NixcbiAgICAgICAgXCJ6XCI6IDAsXG4gICAgICAgIFwiclwiOiAwLjQ2LFxuICAgICAgICBcInRcIjogMC4xMlxuICAgICAgfVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIC8vIENPTE9SIGhhcyB0byBiZSBjYXJyaWVkIHRvbywgYW5kIGl0IGlzIGVhc3kgdG8gZm9yZ2V0OiB0aGlzIGZ1bmN0aW9uIGNvcGllZCBwb3NpdGlvbiwgbm9ybWFsXG4gIC8vIGFuZCB1diBvbmx5LCBhbmQgdGhlIG1vc3F1ZSdzIHJpYmJlZCBkb21lcyBsb3N0IHRoZWlyIGdyZWVuLWFuZC1wYWxlIHN0cmlwaW5nIHRoZSBtb21lbnQgdGhleVxuICAvLyB3ZXJlIG1lcmdlZCB3aXRoIGFueXRoaW5nLiBUaGUgZmFpbHVyZSBpcyBzaWxlbnQgLS0gdGhlIGRvbWUgcmVuZGVycywgaW4gb25lIGZsYXQgY29sb3VyIC0tIGFuZFxuICAvLyB0b29rIGEgd3JvbmcgdGhlb3J5IGFib3V0IHNSR0IgZ2FtbWEgYmVmb3JlIHRoZSBhdHRyaWJ1dGUgbGlzdCB3YXMgcmVhZC4gQW55IGlucHV0IGNhcnJ5aW5nIGFcbiAgLy8gY29sb3VyIG1lYW5zIGV2ZXJ5IGlucHV0IGdldHMgb25lLCB3aGl0ZSB3aGVyZSBpdCBoYWQgbm9uZS5cbiAgY29uc3QgYW55Q29sb3IgPSBwYXJ0cy5zb21lKChnKSA9PiAhIWcuZ2V0QXR0cmlidXRlKCdjb2xvcicpKTtcbiAgY29uc3QgY29sb3IgPSBhbnlDb2xvciA/IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKS5maWxsKDEpIDogbnVsbDtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBjb25zdCBjID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgICBpZiAoY29sb3IgJiYgYykgeyBjb2xvclsodiArIGkpICogM10gPSBjLmdldFgoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMV0gPSBjLmdldFkoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMl0gPSBjLmdldFooaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgaWYgKGNvbG9yKSBvdXQuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sb3IsIDMpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gYm94ZXMobGlzdDogbnVtYmVyW11bXSkgeyByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSkpOyB9XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByVG9wOiBudW1iZXIsIHJCb3Q6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoclRvcCwgckJvdCwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuXG4vKipcbiAqIFJldm9sdmUgYSBwcm9maWxlIGFib3V0ICtZLiBgcHRzYCBhcmUgW3JhZGl1cywgeV0gaW4gbWV0cmVzLCBib3R0b20gdG8gdG9wLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNoYXBlIHZvY2FidWxhcnkgdGhlIHdob2xlIG1vbnVtZW50YWwgc2V0IGlzIGJ1aWx0IGZyb20gLS0gYSBjaGVkaSdzIGJlbGwsIGEgcHJhbmcnc1xuICogY29ybi1jb2IgdGFwZXIsIGEgZG9tZSwgYSByaW5nZWQgc3BpcmUgYXJlIGFsbCBvbmUgcHJvZmlsZSBlYWNoLiBUd28gdGhpbmdzIGFyZSB3b3J0aCBzdGF0aW5nXG4gKiBiZWNhdXNlIGJvdGggY29zdCBhIHJlYnVpbGQgdG8gbGVhcm46XG4gKlxuICogLSBMYXRoZUdlb21ldHJ5IGlzIE9QRU4gYXQgdG9wIGFuZCBib3R0b20uIEEgcHJvZmlsZSB0aGF0IGRvZXMgbm90IGNsb3NlIG9uIHRoZSBheGlzIChyYWRpdXMgMClcbiAqICAgbGVhdmVzIGEgaG9sZSB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZHMgYXMgYmFja2dyb3VuZCBlbmNsb3NlZCBieSB0aGUgc2lsaG91ZXR0ZS4gQ2xvc2UgaXQsIG9yXG4gKiAgIGNhcCBpdCB3aXRoIHdoYXQgc2l0cyBhYm92ZS5cbiAqIC0gUkFESUFMIFNFR01FTlQgQ09VTlQgaXMgdGhlIHRyaWFuZ2xlIGJ1ZGdldCdzIG1haW4gbGV2ZXIgaGVyZSBhbmQgaXQgaXMgcGVyLWxhdGhlOiBhIHByb2ZpbGUgb2ZcbiAqICAgbiBwb2ludHMgYXQgcyBzZWdtZW50cyBpcyAyKihuLTEpKnMgdHJpYW5nbGVzLiBBIDI0LXJpbmcgc3BpcmUgYXQgMzIgc2VnbWVudHMgaXMgMSw0NzJcbiAqICAgdHJpYW5nbGVzIG9uIGl0cyBvd24sIHdoaWNoIGlzIHdoeSB0aGUgbG93LXJlbGllZiByaW5ncyBhcmUgYSBwcm9maWxlIHJhdGhlciB0aGFuIDI0IHJpbmdzLlxuICovXG5mdW5jdGlvbiBsYXRoZShwdHM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyLCB5T2Zmc2V0ID0gMCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdiA9IHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKE1hdGgubWF4KHBbMF0sIDApLCBwWzFdICsgeU9mZnNldCkpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkodiwgc2VnKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgc3RlcHBlZCB0YXBlciBhcyBhIGxhdGhlIHByb2ZpbGU6IGByaW5nc2AgYWx0ZXJuYXRpbmcgb3V0L2luIHJhZGlpIGNsaW1iaW5nIGZyb20geTAgdG8geTEuXG4gKiAgT25lIGdlb21ldHJ5LCBvbmUgZHJhdyBjYWxsLCBhbmQgdGhlIHN0ZXAgY291bnQgaXMgYSBwcm9maWxlLXBvaW50IGNvdW50IHJhdGhlciB0aGFuIGEgbWVzaFxuICogIGNvdW50IC0tIHdoaWNoIGlzIHdoYXQga2VlcHMgYSAyMC1yaW5nIGNoZWRpIHNwaXJlIGluc2lkZSBhIDMyLWdlb21ldHJ5IGNlaWxpbmcuICovXG5mdW5jdGlvbiByaW5nZWRUYXBlcih5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByMDogbnVtYmVyLCByMTogbnVtYmVyLCByaW5nczogbnVtYmVyLCBidWxnZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSByaW5nczsgaSsrKSB7XG4gICAgY29uc3QgdCA9IGkgLyByaW5ncztcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IHIgPSByMCArIChyMSAtIHIwKSAqIHQ7XG4gICAgY29uc3Qgc3RlcCA9ICh5MSAtIHkwKSAvIHJpbmdzO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHldKTtcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5ICsgc3RlcCAqIDAuNDVdKTtcbiAgICBwdHMucHVzaChbciwgeSArIHN0ZXAgKiAwLjU1XSk7XG4gIH1cbiAgcHRzLnB1c2goW3IxLCB5MV0pO1xuICByZXR1cm4gcHRzO1xufVxuXG5cbi8qKlxuICogVGhlIFJFREVOVEVEIHNxdWFyZSBwbGFuIC0tIGEgc3F1YXJlIHdob3NlIGZvdXIgY29ybmVycyBhcmUgY3V0IGJhY2sgaW4gdHdvIHJpZ2h0LWFuZ2xlZCBzdGVwcy5cbiAqIEl0IGlzIHRoZSBwbGFuIG9mIGEgVGhhaSBjaGVkaSdzIHRlcnJhY2UgYW5kIG9mIGEgcHJhbmcncyBiYXNlLCBhbmQgYnVpbGRpbmcgaXQgYXMgYSBTaGFwZSB0aGF0XG4gKiBpcyB0aGVuIGV4dHJ1ZGVkIGlzIG5vdCBhIHN0eWxpc3RpYyBjaG9pY2U6IHRoZSBvYnZpb3VzIGFsdGVybmF0aXZlLCBhIHdpZGUgYm94IGNyb3NzZWQgYnkgYVxuICogZGVlcCBib3gsIHB1dHMgdGhlIHR3byBib3hlcycgdG9wIGZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgb3ZlciB0aGVpciB3aG9sZVxuICogaW50ZXJzZWN0aW9uLCB3aGljaCB6LWZpZ2h0cy4gT25lIGV4dHJ1c2lvbiBvZiBvbmUgY2xvc2VkIHBsYW4gaGFzIG5vIGludGVyaW9yIGNvaW5jaWRlbmNlIGF0XG4gKiBhbGwuXG4gKlxuICogYGFgIGlzIHRoZSBoYWxmLXdpZHRoIGFjcm9zcyB0aGUgZmxhdHM7IGByYCBpcyB0aGUgZGVwdGggb2YgZWFjaCByZWRlbnQgc3RlcC5cbiAqL1xuZnVuY3Rpb24gcmVkZW50ZWRTaGFwZShhOiBudW1iZXIsIHI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcXVhZCA9IFtbYSwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSByXSwgW2EgLSAyICogciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhXV07XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgIGZvciAoY29uc3QgW3gsIHpdIG9mIHF1YWQpIHtcbiAgICAgIC8vIHJvdDkwXmssIGFwcGxpZWQgayB0aW1lczogKHgsIHopIC0+ICgteiwgeClcbiAgICAgIGxldCBweCA9IHgsIHB6ID0gejtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgazsgaSsrKSB7IGNvbnN0IHQgPSBweDsgcHggPSAtcHo7IHB6ID0gdDsgfVxuICAgICAgcHRzLnB1c2goW3B4LCBwel0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGJldHdlZW4gdHdvIGhlaWdodHMuIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgYWxvbmcgK1osIHNvIHRoZSByZXN1bHQgaXNcbiAqICByb3RhdGVkIG9udG8gK1k7IGAtTWF0aC5QSSAvIDJgIGFib3V0IFggbWFwcyArWiB0byArWSBhbmQgbGVhdmVzIHRoZSBwbGFuJ3Mgb3duIHggYXMgeC4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVTbGFiKHNoYXBlOiBUSFJFRS5TaGFwZSwgeTA6IG51bWJlciwgeTE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHkxIC0geTAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIC8vIHJvdGF0ZVgoLVBJLzIpIG1hcHMgKHgsIHksIHopIC0+ICh4LCB6LCAteSksIHNvIHRoZSBleHRydXNpb24gZGVwdGggYmVjb21lcyBoZWlnaHQgYW5kIHRoZVxuICAvLyBwbGFuJ3Mgb3duIHNlY29uZCBheGlzIGJlY29tZXMgLXouIEV2ZXJ5IHBsYW4gaGVyZSBpcyBmb3VyLWZvbGQgc3ltbWV0cmljLCBzbyB0aGF0IHNpZ24gaXNcbiAgLy8gaW1tYXRlcmlhbDsgd2hhdCBtYXR0ZXJzIGlzIHRoYXQgdGhlIHNsYWIgbm93IHJ1bnMgVVAgZnJvbSB5PTAgYW5kIG5lZWRzIGxpZnRpbmcgYnkgeTAuXG4gIGcucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSgwLCB5MCwgMCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBzcXVhcmUgcGxhbiB3aXRoIGEgcmVjdGFuZ3VsYXIgTk9UQ0ggY3V0IGludG8gaXRzICtYIGZhY2UgLS0gdGhlIHN0YWlyIHdlbGwgb2YgYSB0ZW1wbGVcbiAqIHRlcnJhY2UuIEN1dHRpbmcgdGhlIHN0YWlyIG91dCBvZiB0aGUgcGxhbiByYXRoZXIgdGhhbiBoYW5naW5nIGl0IG9mZiB0aGUgb3V0c2lkZSBpcyB3aGF0IGtlZXBzXG4gKiBhbiBhc3ltbWV0cmljIGZlYXR1cmUgaW5zaWRlIGEgc3ltbWV0cmljIGRlY2xhcmVkIGVudmVsb3BlOiBhIGZsaWdodCBwcm9qZWN0aW5nIHBhc3QgYSA5IG1cbiAqIHRlcnJhY2Ugd291bGQgcHV0IHRoZSBwcm9wJ3MgYm91bmRpbmcgYm94IG9mZi1jZW50cmUgYW5kIG92ZXIgaXRzIGRlY2xhcmVkIHdpZHRoIG9uIG9uZSBzaWRlLlxuICovXG5mdW5jdGlvbiBub3RjaGVkU3F1YXJlKGE6IG51bWJlciwgbm90Y2hIYWxmWjogbnVtYmVyLCB4SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1thLCAtYV0sIFthLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgbm90Y2hIYWxmWl0sXG4gICAgICAgICAgICAgICBbYSwgbm90Y2hIYWxmWl0sIFthLCBhXSwgWy1hLCBhXSwgWy1hLCAtYV1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFJFQ1RBTkdVTEFSIHBsYW4gd2l0aCBhIG5vdGNoIGN1dCBpbnRvIGl0cyArWiBmYWNlLiBUaGUgc3F1YXJlIHZlcnNpb24gYWJvdmUgaXMgd2hhdCBhIGNoZWRpIG9yXG4gKiBhIHByYW5nIHRlcnJhY2UgbmVlZHM7IGEgaGFsbCB0aGF0IGlzIHR3aWNlIGFzIGxvbmcgYXMgaXQgaXMgd2lkZSBuZWVkcyB0aGUgdHdvIGhhbGYtZXh0ZW50cyBrZXB0XG4gKiBhcGFydCwgYW5kIGl0cyBzdGFpciBpcyBvbiBhIHNob3J0IGVuZCByYXRoZXIgdGhhbiBhIGxvbmcgb25lLlxuICovXG5mdW5jdGlvbiBub3RjaGVkUmVjdChoeDogbnVtYmVyLCBoejogbnVtYmVyLCBueDogbnVtYmVyLCB6SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1toeCwgLWh6XSwgW2h4LCBoel0sIFtueCwgaHpdLCBbbngsIHpJbm5lcl0sIFstbngsIHpJbm5lcl0sIFstbngsIGh6XSwgWy1oeCwgaHpdLCBbLWh4LCAtaHpdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogVGhlIGNyb3NzLXNlY3Rpb24gb2Ygb25lIHJvb2YgdGllciwgYXMgYSBjbG9zZWQgdHJhcGV6b2lkIGluIFhZOiBlYXZlcyBhdCAoKy1oYWxmQmFzZSwgeTApXG4gKiByaXNpbmcgYXQgYHBpdGNoYCAoYXMgYSB0YW5nZW50KSB0byBhIGZsYXQgdG9wIGF0IHkxLlxuICpcbiAqIFRoYWkgdGVtcGxlIHJvb2ZzIG5lc3QsIGFuZCB0aGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSBUUlVOQ0FUSU9OLiBUaHJlZSBmdWxsIGdhYmxlcyBhdCBvbmVcbiAqIHBpdGNoIGNhbm5vdCBuZXN0IC0tIHRoZSB3aWRlc3QgdGllcidzIHJpZGdlIHdvdWxkIGJlIHRoZSBoaWdoZXN0LCB3aGljaCBpcyB1cHNpZGUgZG93bi4gV2hhdFxuICogYWN0dWFsbHkgaGFwcGVucyBpcyB0aGF0IGVhY2ggbG93ZXIgdGllciBpcyBjdXQgb2ZmIGF0IHRoZSBoZWlnaHQgd2hlcmUgdGhlIG5leHQgdGllcidzIGVhdmVzXG4gKiBiZWdpbiwgYW5kIGl0cyB1cHBlciBwYXJ0IGlzIGhpZGRlbiBiZWhpbmQgdGhhdCB0aWVyOyBvbmx5IHRoZSB0b3Btb3N0IHRpZXIgaXMgYSByZWFsIGdhYmxlLFxuICogY2xvc2VkIGJ5IHBhc3NpbmcgeTEgYXQgdGhlIGFwZXguXG4gKi9cbmZ1bmN0aW9uIHRpZXJQcm9maWxlKGhhbGZCYXNlOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHBpdGNoOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGluc2V0ID0gKHkxIC0geTApIC8gcGl0Y2g7XG4gIGNvbnN0IGhhbGZUb3AgPSBoYWxmQmFzZSAtIGluc2V0O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLWhhbGZCYXNlLCB5MCk7XG4gIHNoYXBlLmxpbmVUbyhoYWxmQmFzZSwgeTApO1xuICBpZiAoaGFsZlRvcCA+IDAuMDIpIHtcbiAgICBzaGFwZS5saW5lVG8oaGFsZlRvcCwgeTEpO1xuICAgIHNoYXBlLmxpbmVUbygtaGFsZlRvcCwgeTEpO1xuICB9IGVsc2Uge1xuICAgIHNoYXBlLmxpbmVUbygwLCB5MCArIGhhbGZCYXNlICogcGl0Y2gpOyAgIC8vIGEgcmVhbCByaWRnZTogdGhlIHRvcG1vc3QgdGllciBjbG9zZXMgdG8gYSBwb2ludFxuICB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBhbG9uZyArWiBiZXR3ZWVuIHR3byBkZXB0aHMsIHdpdGggbm8gcm90YXRpb24gLS0gdGhlIG5hdGl2ZSBkaXJlY3Rpb24gb2ZcbiAqICBFeHRydWRlR2VvbWV0cnkuIFVzZWQgd2hlcmUgdGhlIHByb2ZpbGUgZ2VudWluZWx5IGxpdmVzIGluIHRoZSBYWSBwbGFuZSwgc3VjaCBhcyB0aGUgcmFraW5nXG4gKiAgdHJpYW5nbGUgb2YgYSBzdGFpciBjaGVlay4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVBbG9uZ1ooc2hhcGU6IFRIUkVFLlNoYXBlLCB6MDogbnVtYmVyLCB6MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogejEgLSB6MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgZy50cmFuc2xhdGUoMCwgMCwgejApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSByZWN0YW5ndWxhciBwbGF0ZSB3aG9zZSBoZWFkIGlzIGEgaGFsZi1yb3VuZCBhcmNoLCBvcHRpb25hbGx5IGNhcnJ5aW5nIGFuIGFyY2hlZCBhcGVydHVyZSBvZlxuICogIHRoZSBzYW1lIGZvcm0uIFRoZSBhcGVydHVyZSBhcmMgaXMgQUxXQVlTIHN3ZXB0IGZyb20gYW5nbGUgMCB0byBQSTogd3JpdHRlbiB0aGUgb3RoZXIgd2F5IGl0XG4gKiAgcnVucyB1bmRlciB0aGUgY2lyY2xlIGluc3RlYWQgb2Ygb3ZlciBpdCBhbmQgbGVhdmVzIHRoZSBhcmNoIGhlYWQgZmlsbGVkIHNvbGlkLCB3aGljaCByZWFkcyBhc1xuICogIGEgc3F1YXJlIHdpbmRvdyB3aXRoIGEgZ2hvc3QgYXJjaCBkcmF3biBhY3Jvc3MgaXQuICovXG5mdW5jdGlvbiBhcmNoZWRQbGF0ZSh3OiBudW1iZXIsIGg6IG51bWJlciwgYXJjaFI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBob2xlPzogeyByOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC13IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuYWJzYXJjKDAsIHNwcmluZywgYXJjaFIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgc2hhcGUubGluZVRvKC13IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgcC5tb3ZlVG8oaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAubGluZVRvKGhvbGUuciwgaG9sZS5zcHJpbmcpO1xuICAgIHAuYWJzYXJjKDAsIGhvbGUuc3ByaW5nLCBob2xlLnIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgICBwLmxpbmVUbygtaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAuY2xvc2VQYXRoKCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBISVAgUk9PRiB3aXRoIGEgY29uY2F2ZSBzbG9wZSBhbmQgdXBzd2VwdCBjb3JuZXJzIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YsIHdoaWNoIG5vbmUgb2YgdGhlXG4gKiBvdGhlciBzaGFwZSBoZWxwZXJzIGhlcmUgY2FuIGV4cHJlc3MuXG4gKlxuICogSXQgaXMgZ2VuZXJhdGVkIGFzIGEgcmluZyBvZiByZWN0YW5nbGVzIGNsaW1iaW5nIGZyb20gdGhlIGVhdmVzIHRvIHRoZSByaWRnZSByYXRoZXIgdGhhbiBhcyBhblxuICogZXh0cnVkZWQgcHJvZmlsZSwgYmVjYXVzZSBhIGhpcCBzbG9wZXMgb24gYWxsIGZvdXIgc2lkZXM6IGFuIGV4dHJ1c2lvbiBnaXZlcyB2ZXJ0aWNhbCBnYWJsZSBlbmRzLFxuICogd2hpY2ggaXMgYSBkaWZmZXJlbnQgYnVpbGRpbmcuXG4gKlxuICogVGhlIGhvcml6b250YWwgc2hyaW5rIGZvbGxvd3MgYCgxIC0gdCleY3VydmVFeHBgLCBhbmQgdGhlIGV4cG9uZW50IG11c3QgYmUgQUJPVkUgb25lLiBUaGUgc2xvcGVcbiAqIGF0IGFueSBoZWlnaHQgaXMgZHkvZHgsIHNvIGEgcGxhbiB0aGF0IHNocmlua3MgRkFTVCBmb3IgYSBnaXZlbiByaXNlIGlzIGEgc2hhbGxvdyBzbG9wZTogd2l0aFxuICogcSA+IDEgdGhlIGRlcml2YXRpdmUgcSgxLXQpXihxLTEpIGlzIGxhcmdlIGF0IHRoZSBlYXZlcyBhbmQgc21hbGwgYXQgdGhlIHJpZGdlLCB3aGljaCBpcyBzaGFsbG93XG4gKiBlYXZlcyBhbmQgYSBzdGVlcCByaWRnZSAtLSB0aGUgRWFzdCBBc2lhbiByb29mLiBCZWxvdyBvbmUgaXQgaXMgdGhlIG90aGVyIHdheSByb3VuZCBhbmQgYnVpbGRzIGFcbiAqIGZsYXQtdG9wcGVkIHRlbnQsIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGF0dGVtcHQgaGVyZSByZW5kZXJlZC4gQSBsaW5lYXIgc2hyaW5rIGdpdmVzIHRoZVxuICogc3RyYWlnaHQgcHlyYW1pZCBvZiBhIGhpcCByb29mIGFueXdoZXJlIGVsc2UgaW4gdGhlIHdvcmxkLlxuICpcbiAqIGBjb3JuZXJMaWZ0YCByYWlzZXMgYW5kIHB1c2hlcyBvdXQgdGhlIGZvdXIgZWF2ZXMgY29ybmVycywgdGFwZXJpbmcgYXdheSBieSBhIHRoaXJkIG9mIHRoZSB3YXlcbiAqIHVwLiBUaGF0IHVwc3dlZXAgaXMgdGhlIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nIHRoaW5nIGFib3V0IHRoZSByb29mLCBhbmQgaXQgaXMgd2h5IHRoZSBwbGFuXG4gKiBoYWxmLXdpZHRoIHBhc3NlZCBpbiBtdXN0IGxlYXZlIHJvb206IHRoZSBjb3JuZXJzIGVuZCB1cCBmdXJ0aGVyIG91dCB0aGFuIHRoZSBlYXZlcyBsaW5lLlxuICpcbiAqIFRoZSByZXN1bHQgaXMgYSBjbG9zZWQgc29saWQgLS0gb3V0ZXIgc3VyZmFjZSwgYSBzb2ZmaXQgYGRyb3BgIGJlbG93IHRoZSBlYXZlcywgYW5kIGEgZmFzY2lhIGJhbmRcbiAqIGJldHdlZW4gdGhlbS4gQW4gb3BlbiBzaGVsbCB3b3VsZCBsZXQgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueVxuICogbG93IGFuZ2xlLlxuICovXG5mdW5jdGlvbiBoaXBSb29mKGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIHJpZGdlSGFsZlo6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgY3VydmVFeHA6IG51bWJlciwgc3RlcHM6IG51bWJlciwgZHJvcDogbnVtYmVyLCBjb3JuZXJMaWZ0OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIEVJR0hUIHBvaW50cyBwZXIgcmluZywgbm90IGZvdXI6IHRoZSBmb3VyIGNvcm5lcnMgYW5kIHRoZSBmb3VyIGVkZ2UgbWlkcG9pbnRzLiBXaXRoIGZvdXIgdGhlXG4gIC8vIGNvcm5lciBsaWZ0IGhhcyBub3doZXJlIHRvIGZhbGwgYXdheSB0byBhbmQgcmFpc2VzIHRoZSBFTlRJUkUgZWF2ZXMgbGluZSwgd2hpY2ggYnVpbHQgYSBzYWRkbGVcbiAgLy8gaW5zdGVhZCBvZiBhIHJvb2YuIFRoZSBtaWRwb2ludHMgYXJlIHdoYXQgaG9sZCB0aGUgZWF2ZXMgZG93biBiZXR3ZWVuIHRoZSBjb3JuZXJzLlxuICAvL1xuICAvLyBUaGUgb3JkZXIgaXMgKCt4LC16KSwgbWlkLCAoLXgsLXopLCBtaWQsICgteCwreiksIG1pZCwgKCt4LCt6KSwgbWlkLCB3aGljaCBpcyBjb3VudGVyLWNsb2Nrd2lzZVxuICAvLyBzZWVuIGZyb20gQUJPVkUgLS0gdGhlIHdpbmRpbmcgYW4gdXB3YXJkLWZhY2luZyBzdXJmYWNlIG5lZWRzLiBXb3VuZCB0aGUgb3RoZXIgd2F5IHRoZSB3aG9sZVxuICAvLyByb29mIHJlbmRlcnMgaW5zaWRlIG91dCwgd2hpY2ggbG9va3MgbGlrZSBhIHRoaW4gYmxhY2sgbWVtYnJhbmUgcmF0aGVyIHRoYW4gYSBtaXN0YWtlLlxuICBjb25zdCByaW5nID0gKHQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygxIC0gdCwgY3VydmVFeHApO1xuICAgIGNvbnN0IGcgPSBNYXRoLnBvdyhNYXRoLm1heCgwLCAxIC0gdCAvIDAuMzQpLCAyKTtcbiAgICBjb25zdCBsaWZ0ID0gY29ybmVyTGlmdCAqIGcsIG91dCA9IDEgKyAwLjA0NSAqIGc7XG4gICAgY29uc3QgYXggPSBoeCAqIGYgKiBvdXQsIGF6ID0gKHJpZGdlSGFsZlogKyAoaHogLSByaWRnZUhhbGZaKSAqIGYpICogb3V0O1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgYyA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHkgKyBsaWZ0LCB6XTtcbiAgICBjb25zdCBtID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSwgel07XG4gICAgcmV0dXJuIFtjKGF4LCAtYXopLCBtKDAsIC1heiksIGMoLWF4LCAtYXopLCBtKC1heCwgMCksXG4gICAgICAgICAgICBjKC1heCwgYXopLCBtKDAsIGF6KSwgYyhheCwgYXopLCBtKGF4LCAwKV07XG4gIH07XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgbGV0IHByZXYgPSByaW5nKDApO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgY29uc3QgY3VyID0gcmluZyhpIC8gc3RlcHMpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgICAgcHVzaChwcmV2W2tdLCBwcmV2W2syXSwgY3VyW2syXSk7XG4gICAgICBwdXNoKHByZXZba10sIGN1cltrMl0sIGN1cltrXSk7XG4gICAgfVxuICAgIHByZXYgPSBjdXI7XG4gIH1cbiAgLy8gRmFzY2lhIGJhbmQgYW5kIHNvZmZpdCwgc28gdGhlIHJvb2YgaXMgYSBzb2xpZCByYXRoZXIgdGhhbiBhIHNoZWxsLiBBbiBvcGVuIHNoZWxsIGxldHMgdGhlXG4gIC8vIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueSBsb3cgYW5nbGUuXG4gIGNvbnN0IGUgPSByaW5nKDApO1xuICBjb25zdCBsb3cgPSBlLm1hcCgocCkgPT4gW3BbMF0sIHBbMV0gLSBkcm9wLCBwWzJdXSk7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICBwdXNoKGxvd1trXSwgZVtrXSwgZVtrMl0pO1xuICAgIHB1c2gobG93W2tdLCBlW2syXSwgbG93W2syXSk7XG4gIH1cbiAgZm9yIChsZXQgayA9IDE7IGsgPCA3OyBrKyspIHB1c2gobG93WzBdLCBsb3dbayArIDFdLCBsb3dba10pOyAgIC8vIHNvZmZpdCBmYW4sIGZhY2luZyBkb3duXG5cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBSSUJCRUQgZG9tZSAtLSBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiB3aG9zZSByYWRpdXMgaXMgbW9kdWxhdGVkIGFyb3VuZCB0aGUgYXhpcywgc28gaXQgcmVhZHNcbiAqIGFzIHRoZSBtZWxvbi1yaWJiZWQgZG9tZSBvZiBhIG1vc3F1ZSByYXRoZXIgdGhhbiBhIHNtb290aCBoZW1pc3BoZXJlLlxuICpcbiAqIExhdGhlR2VvbWV0cnkgY2Fubm90IGRvIHRoaXM6IGEgbGF0aGUgcmV2b2x2ZXMgb25lIHByb2ZpbGUgYXQgb25lIHJhZGl1cyBwZXIgaGVpZ2h0LCBhbmQgcmlicyBhcmVcbiAqIGEgdmFyaWF0aW9uIEFST1VORCB0aGUgYXhpcywgbm90IGFsb25nIGl0LiBTbyB0aGUgc3VyZmFjZSBpcyBnZW5lcmF0ZWQgZGlyZWN0bHksIHNhbXBsaW5nXG4gKiBgMSArIGFtcCAqIGNvcyhyaWJzICogdGhldGEpYCBwZXIgc2VjdG9yLiBUaGUgcmlicyBhcmUgdGhlIHJlYXNvbiB0aGUgZG9tZSBpcyByZWNvZ25pc2FibGUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20gLS0gYSBzbW9vdGggZ3JlZW4gaGVtaXNwaGVyZSByZWFkcyBhcyBhIHdhdGVyIHRhbmsuXG4gKi9cbmZ1bmN0aW9uIHJpYmJlZERvbWUocHJvZmlsZTogbnVtYmVyW11bXSwgcmliczogbnVtYmVyLCBhbXA6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHZhbGxleT86IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IGNvbDogbnVtYmVyW10gPSBbXTtcbiAgLy8gVGhlIHJpYnMgYXJlIG5vdCBvbmx5IGEgc2hhcGUuIE9uIHRoZSBtb3NxdWUncyBkb21lcyB0aGUgY3Jlc3RzIGFyZSBwYWxlIGFuZCB0aGUgdmFsbGV5cyBhcmVcbiAgLy8gZ3JlZW4sIGFuZCB0aGF0IHN0cmlwZSBpcyBtb3N0IG9mIHdoYXQgdGhlIGRvbWUgcmVhZHMgYXMgYXQgZGlzdGFuY2UuIEl0IGlzIGNhcnJpZWQgYXMgYVxuICAvLyBwZXItdmVydGV4IE1VTFRJUExJRVIgb2ZmIHRoZSBzYW1lIGNvc2luZSB0aGF0IHNoYXBlcyB0aGUgcmliIC0tIHR3byBtZWFzdXJlbWVudHMsIHRoZSBjcmVzdFxuICAvLyBjb2xvdXIgb24gdGhlIG1hdGVyaWFsIGFuZCB0aGUgdmFsbGV5IGFzIHRoZSByYXRpbyBiZXR3ZWVuIHRoZW0gLS0gc28gdGhlIHN0cmlwaW5nIGNvc3RzIGFuXG4gIC8vIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIHRleHR1cmUgc2V0IG9yIGEgc2Vjb25kIGRyYXcgY2FsbC5cbiAgY29uc3QgdGludCA9IChqOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIXZhbGxleSkgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICAvLyBSYWlzZWQgdG8gMC41NSByYXRoZXIgdGhhbiBsZWZ0IGxpbmVhci4gQSBjb3NpbmUgc3BlbmRzIGhhbGYgaXRzIGFyZWEgbmVhciBlYWNoIGV4dHJlbWUsIGFuZFxuICAgIC8vIHRoYXQgcmVuZGVycyBhIGRvbWUgdGhhdCBpcyBwYWxlIG92ZXJhbGwgd2hlcmUgdGhlIHBsYXRlJ3MgaXMgZ3JlZW4gb3ZlcmFsbDogdGhlIGNyZXN0IGlzIGFcbiAgICAvLyBuYXJyb3cgaGlnaGxpZ2h0IG9uIGEgcmVhbCByaWIsIG5vdCBoYWxmIG9mIGl0LiBUaGUgZXhwb25lbnQgd2lkZW5zIHRoZSB2YWxsZXkuXG4gICAgY29uc3QgZiA9IE1hdGgucG93KCgxIC0gTWF0aC5jb3MocmlicyAqICgoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZykpKSAvIDIsIDAuNTUpO1xuICAgIHJldHVybiBbMSArICh2YWxsZXlbMF0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzFdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsyXSAtIDEpICogZl07XG4gIH07XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGNvbnN0IGF0ID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdGggPSAoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICBjb25zdCBmID0gMSArIGFtcCAqIE1hdGguY29zKHJpYnMgKiB0aCk7XG4gICAgY29uc3QgciA9IHByb2ZpbGVbaV1bMF0gKiBmO1xuICAgIHJldHVybiBbTWF0aC5zaW4odGgpICogciwgcHJvZmlsZVtpXVsxXSwgTWF0aC5jb3ModGgpICogcl07XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZmlsZS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gYXQoaSwgaiksIGIgPSBhdChpLCBqICsgMSksIGMgPSBhdChpICsgMSwgaiArIDEpLCBkID0gYXQoaSArIDEsIGopO1xuICAgICAgcHVzaChhLCBiLCBjKTtcbiAgICAgIHB1c2goYSwgYywgZCk7XG4gICAgICBjb25zdCB0YSA9IHRpbnQoaiksIHRiID0gdGludChqICsgMSk7XG4gICAgICBjb2wucHVzaCguLi50YSwgLi4udGIsIC4uLnRiLCAuLi50YSwgLi4udGIsIC4uLnRhKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGlmICh2YWxsZXkpIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2wpLCAzKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBQT0lOVEVEIGFyY2ggcGxhdGUgLS0gdGhlIHR3by1jZW50cmVkIGFyY2ggb2YgYSBtb3NxdWUsIG5vdCB0aGUgaGFsZi1yb3VuZCBvZiBhIFJvbWFuIG9uZS5cbiAqIGBhcmNoZWRQbGF0ZWAgYWJvdmUgc3dlZXBzIGEgc2luZ2xlIHNlbWljaXJjbGUsIHdoaWNoIGlzIHRoZSB3cm9uZyBhcmNoIGhlcmUgYW5kIHJlYWRzIGFzIGFcbiAqIHJhaWx3YXkgdmlhZHVjdDsgdGhpcyBvbmUgcnVucyBlYWNoIHNpZGUgdXAgdG8gYSBzaGFyZWQgYXBleCB0aHJvdWdoIGEgcXVhZHJhdGljLCB3aGljaCBnaXZlcyB0aGVcbiAqIG9nZWUgcG9pbnQuXG4gKi9cbmZ1bmN0aW9uIHBvaW50ZWRBcmNoU2hhcGUodzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob2xlPzogeyB3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgYnVpbGQgPSAodGFyZ2V0OiBUSFJFRS5TaGFwZSB8IFRIUkVFLlBhdGgsIHd3OiBudW1iZXIsIHNwOiBudW1iZXIsIHJpc2U6IG51bWJlciwgc2w6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGh3ID0gd3cgLyAyO1xuICAgIHRhcmdldC5tb3ZlVG8oaHcsIHNsKTtcbiAgICB0YXJnZXQubGluZVRvKGh3LCBzcCk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oaHcsIHNwICsgcmlzZSAqIDAuNzIsIDAsIHNwICsgcmlzZSk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oLWh3LCBzcCArIHJpc2UgKiAwLjcyLCAtaHcsIHNwKTtcbiAgICB0YXJnZXQubGluZVRvKC1odywgc2wpO1xuICAgIHRhcmdldC5jbG9zZVBhdGgoKTtcbiAgfTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgYnVpbGQoc2hhcGUsIHcsIHNwcmluZywgYXBleFJpc2UsIHNpbGwpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIGJ1aWxkKHAsIGhvbGUudywgaG9sZS5zcHJpbmcsIGhvbGUuYXBleFJpc2UsIGhvbGUuc2lsbCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBjdXJsZWQgaG9ybjogYG5gIHRhcGVyaW5nIGJveCBzZWdtZW50cyBzYW1wbGVkIGFsb25nIGEgc2luZSwgZWFjaCByb3RhdGVkIHRvIGl0cyBvd24gdGFuZ2VudC5cbiAqIFNoYXJlZCBieSB0aGUgdWJvc290J3MgY2hvZmEsIHRoZSBwcmFuZydzIHRyaWRlbnQgcHJvbmdzIGFuZCB0aGUgQ2hpbmVzZSBzaHJpbmUncyBmbHlpbmcgZWF2ZXMsXG4gKiBiZWNhdXNlIGFsbCB0aHJlZSBhcmUgdGhlIHNhbWUgcHJvYmxlbSAtLSBhIHN0cmFpZ2h0IHNwaWtlIGF0IGEgcm9vZiBlbmQgcmVhZHMgYXMgYSBsaWdodG5pbmcgcm9kXG4gKiBhbmQgdGhlIGN1cmwgaXMgdGhlIHdob2xlIGZlYXR1cmUuXG4gKi9cbmZ1bmN0aW9uIGN1cmxlZEhvcm4ocmVhY2g6IG51bWJlciwgcmlzZTogbnVtYmVyLCB0aGljazogbnVtYmVyLCBuID0gNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBhdCA9ICh1OiBudW1iZXIpID0+IFtyZWFjaCAqIE1hdGguc2luKHUgKiBNYXRoLlBJICogMC40NiksIHJpc2UgKiB1XTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBjb25zdCBhID0gYXQoaiAvIG4pLCBiID0gYXQoKGogKyAxKSAvIG4pO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgdyA9IHRoaWNrICogKDEgLSBqIC8gbikgKyB0aGljayAqIDAuMjg7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBNYXRoLmh5cG90KGR4LCBkeSkgKyB0aGljayAqIDAuMiwgdyk7XG4gICAgZy5yb3RhdGVaKE1hdGguYXRhbjIoLWR4LCBkeSkpO1xuICAgIGcudHJhbnNsYXRlKChhWzBdICsgYlswXSkgLyAyLCAoYVsxXSArIGJbMV0pIC8gMiwgMCk7XG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiBtZXJnZUdlb3Moc2Vncyk7XG59XG5cbi8qKlxuICogUmFtcCBhIHBlci12ZXJ0ZXggdGludCBvdmVyIGEgaGVpZ2h0IGJhbmQsIGFzIGEgTVVMVElQTElFUiBvbiB0aGUgbWF0ZXJpYWwgY29sb3VyLlxuICpcbiAqIFRoaXMgaXMgaG93IGEgbG9jYWwgbWF0ZXJpYWwgb3ZlcnJpZGUgZ2V0cyBkZWxpdmVyZWQgb24gYSBtZXJnZWQgY29tcG9uZW50IHRoYXQgaXMgb25lIG1lc2ggYW5kXG4gKiBtdXN0IHN0YXkgb25lIGRyYXcgY2FsbDogYSBzZWNvbmQgbWF0ZXJpYWwgd291bGQgY29zdCBhIHN1Ym1pc3Npb24gYW5kIGEgc2hhZGVyIHN3aXRjaCB0byBzYXlcbiAqIHRoYXQgdGhlIGJvdHRvbSBvZiBhIHdhbGwgaXMgZGlydGllciB0aGFuIHRoZSB0b3AuIGByZ2IwYCBpcyB0aGUgbWVhc3VyZWQgdGludCBhdCB5MCBleHByZXNzZWRcbiAqIGFzIGEgZnJhY3Rpb24gb2YgdGhlIG1hdGVyaWFsJ3Mgb3duIG1lYXN1cmVkIGFsYmVkbywgc28gdGhlIHRvcCBvZiB0aGUgYmFuZCBpcyB1bnRpbnRlZCAxLjAgYW5kXG4gKiB0aGUgbnVtYmVycyBiZWxvdyBzdGF5IHRyYWNlYWJsZSB0byB0d28gY3JvcCBtZWFzdXJlbWVudHMgcmF0aGVyIHRoYW4gdG8gYSBjaG9zZW4gZGFya2VuaW5nLlxuICovXG5mdW5jdGlvbiB0aW50QnlIZWlnaHQoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcmdiMDogbnVtYmVyW10pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAocC5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApKSk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIGNvbFtpICogMyArIGNdID0gcmdiMFtjXSArICgxIC0gcmdiMFtjXSkgKiB0O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb3NxdWVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ01vc3F1ZSc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvdXJ0eWFyZCB3YWxsXG4gICAqIEZvdXIgcnVucyBhbmQgYSBnYXRlLCBhbGwgdGhlIHNhbWUgcmVuZGVyIGFuZCB0aGVyZWZvcmUgT05FIGNvbXBvbmVudCBhbmQgT05FIGRyYXcgY2FsbC4gVGhlXG4gICAqIHNpZGUgcnVucyBjYXJyeSB0aGUgZnVsbCBkZXB0aCBhbmQgdGhlIGZyb250IGFuZCBiYWNrIHJ1bnMgc3RvcCBiZXR3ZWVuIHRoZW06IHJ1biB0byBmdWxsXG4gICAqIHdpZHRoLCBldmVyeSBjb3JuZXIgd291bGQgcHV0IHR3byBvdXRlciBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5LiAqL1xuICB7XG4gICAgY29uc3QgQyA9IEcuY291cnQ7XG4gICAgY29uc3QgY2MgPSBDLmh4IC0gQy50IC8gMiwgY2kgPSBDLmh4IC0gQy50LCBkZCA9IEMuaHogLSBDLnQgLyAyLCBkaSA9IEMuaHogLSBDLnQ7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXG4gICAgICBib3hBdCgtY2MsIEMuaCAvIDIsIDAsIEMudCwgQy5oLCBDLmh6ICogMiksXG4gICAgICBib3hBdChjYywgQy5oIC8gMiwgMCwgQy50LCBDLmgsIEMuaHogKiAyKSxcbiAgICAgIGJveEF0KDAsIEMuaCAvIDIsIC1kZCwgY2kgKiAyLCBDLmgsIEMudCksXG4gICAgXTtcbiAgICAvLyBUaGUgK1ogcnVuIGlzIGJyb2tlbiBieSB0aGUgZ2F0ZTogdHdvIHNlZ21lbnRzIGZsYW5raW5nIGl0LCB0d28gcHlsb25zIGFuZCBhIHBvaW50ZWQgYXJjaFxuICAgIC8vIGhlYWQgc3Bhbm5pbmcgYmV0d2VlbiB0aGVtLlxuICAgIGNvbnN0IHNlZ0xlbiA9IGNpIC0gQy5nYXRlSGFsZiAtIEMucHlsb247XG4gICAgcGFydHMucHVzaChib3hBdCgtKEMuZ2F0ZUhhbGYgKyBDLnB5bG9uICsgc2VnTGVuIC8gMiksIEMuaCAvIDIsIGRkLCBzZWdMZW4sIEMuaCwgQy50KSk7XG4gICAgcGFydHMucHVzaChib3hBdChDLmdhdGVIYWxmICsgQy5weWxvbiArIHNlZ0xlbiAvIDIsIEMuaCAvIDIsIGRkLCBzZWdMZW4sIEMuaCwgQy50KSk7XG4gICAgZm9yIChjb25zdCB4cyBvZiBbLTEsIDFdKSB7XG4gICAgICAvLyBQeWxvbiBhbmQgYXJjaCBoZWFkIGFyZSB0aGUgc2FtZSBkZXB0aCBhcyB0aGUgd2FsbCwgbm90IDEuNXggaXQ6IGRlZXBlciwgdGhleSByZWFjaGVkXG4gICAgICAvLyB6PTguMTEgYWdhaW5zdCBhIGRlY2xhcmVkIDguMDAgYW5kIHRoZSBnYXRlIGFsb25lIHB1dCB0aGUgcHJvcCBvdmVyIGl0cyBlbnZlbG9wZS5cbiAgICAgIHBhcnRzLnB1c2goYm94QXQoeHMgKiAoQy5nYXRlSGFsZiArIEMucHlsb24gLyAyKSwgQy5nYXRlSCAvIDIsIGRkLCBDLnB5bG9uLCBDLmdhdGVILCBDLnQpKTtcbiAgICB9XG4gICAgY29uc3QgaGVhZCA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoXG4gICAgICBwb2ludGVkQXJjaFNoYXBlKEMuZ2F0ZUhhbGYgKiAyICsgQy5weWxvbiAqIDIsIDEuNzAsIDEuMDAsIDAsXG4gICAgICAgIHsgdzogQy5nYXRlSGFsZiAqIDIsIHNwcmluZzogMS43MCwgYXBleFJpc2U6IDAuODYsIHNpbGw6IDAgfSksXG4gICAgICB7IGRlcHRoOiBDLnQsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDggfSk7XG4gICAgaGVhZC50cmFuc2xhdGUoMCwgMCwgZGQgLSBDLnQgLyAyKTtcbiAgICBoZWFkLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgcGFydHMucHVzaChoZWFkKTtcblxuICAgIGNvbnN0IGdlbyA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgLy8gVGhlIHBsYXRlJ3Mgd2FsbHMgYXJlIHN0cmVha2VkIGJsYWNrIHdpdGggcmFpbiB3YXNoIGZyb20gdGhlIHRvcCBkb3duIC0tIHRoZSByZXZlcnNlIG9mIGV2ZXJ5XG4gICAgLy8gb3RoZXIgcHJvcCBpbiB0aGlzIGJhdGNoLCB3aGVyZSB0aGUgZGlydCBjb2xsZWN0cyBhdCB0aGUgYm90dG9tLiBUaGUgdGludCB0aGVyZWZvcmUgcnVucyB0aGVcbiAgICAvLyBvdGhlciB3YXk6IGNsZWFuIGF0IHRoZSBiYXNlLCBkYXJrZW5pbmcgdG93YXJkcyB0aGUgY29waW5nLlxuICAgIHRpbnRCeUhlaWdodChnZW8sIEMuaCwgMC4zMCwgWzAuNzIsIDAuNzMsIDAuNzBdKTtcbiAgICBhZGQoJ2NvdXJ0LXdhbGwnLCAnQ291cnR5YXJkIHdhbGwgYW5kIGdhdGUnLCBnZW8sICd3aGl0ZScpO1xuICAgIGNvbGxpZGVyc1snY291cnQtd2FsbCddID0ge1xuICAgICAgc2hhcGU6ICdib3gnLCBsb2NhbENlbnRlcjogWzAsIDkuMCwgMF0sIGhhbGZFeHRlbnRzOiBbNy4wLCA5LjAsIDguMF0sXG4gICAgICBub3RlczogJ0Fzc2V0IGRlY2xhcmVzIGNvbGxpZGVyIFwiYm94XCIuIE9uZSBjb252ZXggcHJveHkgb3ZlciB0aGUgd2hvbGUgZW52ZWxvcGU7IGEgbGV2ZWwgJ1xuICAgICAgICAgICArICdidWlsZGVyIGNvbGxpZGVzIHdpdGggdGhlIGNvbXBvdW5kLCBub3Qgd2l0aCB0aGUgbWluYXJldCBzZXBhcmF0ZWx5LicsXG4gICAgfTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcHJheWVyIGhhbGxcbiAgICogQSBTT0xJRCB3aGl0ZSBibG9jay4gVGhlIG1vc3F1ZSBpcyBhbiBleHRlcmlvciBzaGVsbCBvbmx5IGV2ZXIgc2VlbiBmcm9tIG91dHNpZGUsIHNvIHRoZXJlIGlzXG4gICAqIG5vIGludGVyaW9yOiBpdCB3b3VsZCBjb3N0IGRyYXcgY2FsbHMsIGdlb21ldHJpZXMgYW5kIFZSQU0gZm9yIHNvbWV0aGluZyBub2JvZHkgc2VlcywgYW5kIGFcbiAgICogc29saWQgYm9keSBhbHNvIG1lYW5zIHRoZSBhcmNhZGUgbmVlZHMgbm8gb3BlbmluZyBjdXQgaW4gaXQuICovXG4gIHtcbiAgICBjb25zdCBIID0gRy5oYWxsLCBEID0gRy5kZWNrLCBQID0gRy5wYXJhcGV0O1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW1xuICAgICAgYm94QXQoMCwgKEgueTAgKyBILnkxKSAvIDIsIChILnpCYWNrICsgSC56RnJvbnQpIC8gMiwgSC5oeCAqIDIsIEgueTEgLSBILnkwLCBILnpGcm9udCAtIEguekJhY2spLFxuICAgICAgYm94QXQoMCwgKEQueTAgKyBELnkxKSAvIDIsIChILnpCYWNrICsgSC56RnJvbnQpIC8gMiwgSC5oeCAqIDIgLSAwLjMwLCBELnkxIC0gRC55MCwgSC56RnJvbnQgLSBILnpCYWNrIC0gMC4zMCksXG4gICAgXTtcbiAgICAvLyBQYXJhcGV0IHJpbmcsIHN0YW5kaW5nIDAuMDggbSBwcm91ZCBvZiB0aGUgd2FsbHMgLS0gYSBjb3BpbmcgZHJpcCBlZGdlLCBhbmQgd2hhdCBrZWVwcyB0aGVcbiAgICAvLyBwYXJhcGV0IGZhY2VzIG9mZiB0aGUgd2FsbCBwbGFuZXMuXG4gICAgY29uc3QgcHggPSBILmh4ICsgMC4wOCwgcHowID0gSC56QmFjayAtIDAuMDgsIHB6MSA9IEguekZyb250ICsgMC4wOCwgdCA9IDAuMzQ7XG4gICAgY29uc3QgcHkgPSAoUC55MCArIFAueTEpIC8gMiwgcGggPSBQLnkxIC0gUC55MDtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KC0ocHggLSB0IC8gMiksIHB5LCAocHowICsgcHoxKSAvIDIsIHQsIHBoLCBwejEgLSBwejApKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KHB4IC0gdCAvIDIsIHB5LCAocHowICsgcHoxKSAvIDIsIHQsIHBoLCBwejEgLSBwejApKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KDAsIHB5LCBwejAgKyB0IC8gMiwgKHB4IC0gdCkgKiAyLCBwaCwgdCkpO1xuICAgIHBhcnRzLnB1c2goYm94QXQoMCwgcHksIHB6MSAtIHQgLyAyLCAocHggLSB0KSAqIDIsIHBoLCB0KSk7XG4gICAgY29uc3QgZ2VvID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgICB0aW50QnlIZWlnaHQoZ2VvLCBILnkxLCAxLjIwLCBbMC42NiwgMC42OCwgMC42NF0pO1xuICAgIGFkZCgnaGFsbCcsICdQcmF5ZXIgaGFsbCBibG9jaycsIGdlbywgJ3doaXRlJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJvb2YgZGVja1xuICAgKiBUaGUgZmxhdCBhcmVhIGJldHdlZW4gdGhlIHBhcmFwZXQgYW5kIHRoZSBkb21lcywgaW4gaXRzIG93biBncmV5IG1hdGVyaWFsIGJlY2F1c2UgdGhlIHBsYXRlXG4gICAqIHNob3dzIGl0IGFzIGEgZGlzdGluY3RseSBkaWZmZXJlbnQgc3VyZmFjZSBmcm9tIHRoZSByZW5kZXJlZCB3YWxscyAtLSBhIHNjcmVlZCwgbm90IGEgcmVuZGVyLiAqL1xuICB7XG4gICAgY29uc3QgSCA9IEcuaGFsbCwgRCA9IEcuZGVjaztcbiAgICBhZGQoJ3Jvb2YtZGVjaycsICdSb29mIGRlY2snLCBib3hBdCgwLCBELnkxIC0gMC4wMywgKEguekJhY2sgKyBILnpGcm9udCkgLyAyLFxuICAgICAgSC5oeCAqIDIgLSAwLjQ0LCAwLjA2LCBILnpGcm9udCAtIEguekJhY2sgLSAwLjQ0KSwgJ2RlY2snKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGFyYXBldCBiYW5kXG4gICAqIEEgZ3JlZW4gc3RyaXBlIGFsb25nIHRoZSB0b3Agb2YgdGhlIHBhcmFwZXQgcmluZy4gSXRzIG93biBjb21wb25lbnQgYmVjYXVzZSBpdCBpcyB0aGUgb25seVxuICAgKiBGTEFUIGdyZWVuIG9uIHRoZSBwcm9wOiB0aGUgZG9tZXMgY2FycnkgYSBzdHJpcGVkIHZlcnRleCBjb2xvdXIgYW5kIGNhbm5vdCBzaGFyZSBhIG1hdGVyaWFsXG4gICAqIHdpdGggYSBzdXJmYWNlIHRoYXQgaGFzIHRvIHN0YXkgb25lIHZhbHVlLiAqL1xuICB7XG4gICAgY29uc3QgSCA9IEcuaGFsbCwgUCA9IEcucGFyYXBldDtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIC8vIFBhcmFwZXQgYmFuZDogYSBncmVlbiBzdHJpcGUgYWxvbmcgdGhlIHRvcCBvZiB0aGUgcGFyYXBldCByaW5nLCBzdGFuZGluZyAwLjAzIG0gcHJvdWQgb2YgaXQuXG4gICAgY29uc3QgcHggPSBILmh4ICsgMC4xMSwgcHowID0gSC56QmFjayAtIDAuMTEsIHB6MSA9IEguekZyb250ICsgMC4xMSwgdCA9IDAuMzA7XG4gICAgLy8gVG9wIG9mIHRoZSBiYW5kIGF0IDcuOTksIG5vdCBsZXZlbCB3aXRoIHRoZSBwYXJhcGV0J3Mgb3duIDcuOTU6IGxldmVsLCB0aGUgYmFuZCdzIHRvcCBmYWNlXG4gICAgLy8gYW5kIHRoZSBwYXJhcGV0J3MgdG9wIGZhY2UgYXJlIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgb3ZlciA5MSBtMiAtLSB0aGUgbGFyZ2VzdFxuICAgIC8vIHNpbmdsZSBjb3BsYW5hciBwYWlyIGZvdW5kIGFueXdoZXJlIGluIHRoaXMgYmF0Y2guXG4gICAgY29uc3QgYnkgPSBQLnkxICsgMC4wNCAtIFAuYmFuZCAvIDI7XG4gICAgcGFydHMucHVzaChib3hBdCgtKHB4IC0gdCAvIDIpLCBieSwgKHB6MCArIHB6MSkgLyAyLCB0LCBQLmJhbmQsIHB6MSAtIHB6MCkpO1xuICAgIHBhcnRzLnB1c2goYm94QXQocHggLSB0IC8gMiwgYnksIChwejAgKyBwejEpIC8gMiwgdCwgUC5iYW5kLCBwejEgLSBwejApKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KDAsIGJ5LCBwejAgKyB0IC8gMiwgKHB4IC0gdCkgKiAyLCBQLmJhbmQsIHQpKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KDAsIGJ5LCBwejEgLSB0IC8gMiwgKHB4IC0gdCkgKiAyLCBQLmJhbmQsIHQpKTtcbiAgICBhZGQoJ3BhcmFwZXQtYmFuZCcsICdHcmVlbiBwYXJhcGV0IGJhbmQnLCBtZXJnZUdlb3MocGFydHMpLCAnZ3JlZW4nKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIGdyZWF0IGRvbWUgYW5kIHRoZSBtaW5hcmV0J3NcbiAgICogQm90aCByaWJiZWQsIGJvdGggaW4gdGhlIHN0cmlwZWQgZG9tZSBtYXRlcmlhbCwgbWVyZ2VkIGludG8gT05FIGNvbXBvbmVudCBhbmQgT05FIGRyYXcgY2FsbC5cbiAgICpcbiAgICogVGhlIHJpYnMgYXJlIGdlbmVyYXRlZCBnZW9tZXRyeSByYXRoZXIgdGhhbiBhIG1hdGVyaWFsOiBMYXRoZUdlb21ldHJ5IHJldm9sdmVzIG9uZSBwcm9maWxlIGF0XG4gICAqIG9uZSByYWRpdXMgcGVyIGhlaWdodCwgYW5kIGEgcmliIGlzIGEgdmFyaWF0aW9uIEFST1VORCB0aGUgYXhpcy4gQSBzbW9vdGggZ3JlZW4gaGVtaXNwaGVyZVxuICAgKiByZWFkcyBhcyBhIHdhdGVyIHRhbmsuICovXG4gIHtcbiAgICBjb25zdCBEID0gRy5kb21lLCBNTiA9IEcubWluYXJldCwgViA9IEcudmFsbGV5IGFzIG51bWJlcltdO1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgLy8gVGhlIGdyZWF0IGRvbWU6IGEgc2VnbWVudGFsIHByb2ZpbGUgYSBsaXR0bGUgbW9yZSB0aGFuIGEgaGVtaXNwaGVyZSwgc28gaXQgc3ByaW5ncyBmcm9tIGFcbiAgICAvLyBzbGlnaHQgb3ZlcmhhbmcgdGhlIHdheSB0aGUgcGxhdGUncyBkb2VzIHJhdGhlciB0aGFuIHNpdHRpbmcgb24gdGhlIGRydW0gbGlrZSBhIGxpZC5cbiAgICBjb25zdCBwcm9mOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gRC5zdGVwczsgaSsrKSB7XG4gICAgICBjb25zdCB0MiA9IGkgLyBELnN0ZXBzO1xuICAgICAgcHJvZi5wdXNoKFtELnIgKiBNYXRoLmNvcyh0MiAqIE1hdGguUEkgKiAwLjUpICogKDEgLSAwLjA2ICogdDIgKiB0MiksXG4gICAgICAgICAgICAgICAgIEQueTAgKyAoRC55MSAtIEQueTApICogTWF0aC5zaW4odDIgKiBNYXRoLlBJICogMC41KV0pO1xuICAgIH1cbiAgICBwYXJ0cy5wdXNoKHJpYmJlZERvbWUocHJvZiwgRC5yaWJzLCBELmFtcCwgRC5zZWcsIFYpKTtcblxuICAgIC8vIFRoZSBtaW5hcmV0J3Mgb3duIGRvbWUsIHNhbWUgY29uc3RydWN0aW9uIGF0IGEgc2l4dGggdGhlIHNpemUuXG4gICAgY29uc3QgbXA6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBNTi5zdGVwczsgaSsrKSB7XG4gICAgICBjb25zdCB0MiA9IGkgLyBNTi5zdGVwcztcbiAgICAgIG1wLnB1c2goW01OLmRvbWVSICogTWF0aC5jb3ModDIgKiBNYXRoLlBJICogMC41KSxcbiAgICAgICAgICAgICAgIE1OLmRvbWVZWzBdICsgKE1OLmRvbWVZWzFdIC0gTU4uZG9tZVlbMF0pICogTWF0aC5zaW4odDIgKiBNYXRoLlBJICogMC41KV0pO1xuICAgIH1cbiAgICBjb25zdCBtZCA9IHJpYmJlZERvbWUobXAsIE1OLnJpYnMsIE1OLmFtcCwgTU4uc2VnLCBWKTtcbiAgICBtZC50cmFuc2xhdGUoTU4ueCwgMCwgTU4ueik7XG4gICAgcGFydHMucHVzaChtZCk7XG4gICAgYWRkKCdkb21lcycsICdHcmVhdCBkb21lIGFuZCBtaW5hcmV0IGRvbWUnLCBtZXJnZUdlb3MocGFydHMpLCAnZG9tZScpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkb21lIGRydW1cbiAgICogQSBzcXVhcmUgcG9kaXVtIGFuZCBhIHJvdW5kIGRydW0gdW5kZXIgdGhlIGdyZWF0IGRvbWUuIEJvdGggd2hpdGUsIG9uZSBjb21wb25lbnQuICovXG4gIHtcbiAgICBjb25zdCBEUiA9IEcuZHJ1bTtcbiAgICBhZGQoJ2RydW0nLCAnRG9tZSBkcnVtJywgbWVyZ2VHZW9zKFtcbiAgICAgIGJveEF0KDAsIChEUi5zcVlbMF0gKyBEUi5zcVlbMV0pIC8gMiwgMCwgRFIuc3FIYWxmICogMiwgRFIuc3FZWzFdIC0gRFIuc3FZWzBdLCBEUi5zcUhhbGYgKiAyKSxcbiAgICAgIGN5bEF0KDAsIChEUi5jeWxZWzBdICsgRFIuY3lsWVsxXSkgLyAyLCAwLCBEUi5jeWxSLCBEUi5jeWxSICogMS4wNCwgRFIuY3lsWVsxXSAtIERSLmN5bFlbMF0sIDMyKSxcbiAgICBdKSwgJ3doaXRlJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvcm5lciBkb21lc1xuICAgKiBGb3VyLCBhcyBUV08gSW5zdGFuY2VkTWVzaCBzeXN0ZW1zIG9uIG9uZSBwbGFjZW1lbnQgc2NoZWR1bGUgLS0gYSB3aGl0ZSBkcnVtIGFuZCBhIGdyZWVuXG4gICAqIHJpYmJlZCBkb21lLiBUd28gc3lzdGVtcyByYXRoZXIgdGhhbiBvbmUgYmVjYXVzZSBJbnN0YW5jZWRNZXNoIHRha2VzIGEgc2luZ2xlIG1hdGVyaWFsLiAqL1xuICB7XG4gICAgY29uc3QgUyA9IEcuc21hbGw7XG4gICAgY29uc3QgZHJ1bSA9IGN5bEF0KDAsIDAsIDAsIFMuZHJ1bVIsIFMuZHJ1bVIgKiAxLjA2LCBTLmRydW1ZWzFdIC0gUy5kcnVtWVswXSwgMjApO1xuICAgIGFkZEluc3QoJ3NtYWxsLWRydW1zJywgJ0Nvcm5lciBkb21lIGRydW1zJywgZHJ1bSwgJ3doaXRlJyxcbiAgICAgIChTLmF0IGFzIG51bWJlcltdW10pLm1hcCgoW3gsIHpdKSA9PlxuICAgICAgICBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIChTLmRydW1ZWzBdICsgUy5kcnVtWVsxXSkgLyAyLCB6KSkpO1xuXG4gICAgY29uc3QgcHJvZjogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IFMuc3RlcHM7IGkrKykge1xuICAgICAgY29uc3QgdCA9IGkgLyBTLnN0ZXBzO1xuICAgICAgcHJvZi5wdXNoKFtTLmRvbWVSICogTWF0aC5jb3ModCAqIE1hdGguUEkgKiAwLjUpLFxuICAgICAgICAgICAgICAgICAoUy5kb21lWVsxXSAtIFMuZG9tZVlbMF0pICogTWF0aC5zaW4odCAqIE1hdGguUEkgKiAwLjUpXSk7XG4gICAgfVxuICAgIGFkZEluc3QoJ3NtYWxsLWRvbWVzJywgJ0Nvcm5lciBkb21lcycsIHJpYmJlZERvbWUocHJvZiwgUy5yaWJzLCBTLmFtcCwgUy5zZWcsIEcudmFsbGV5IGFzIG51bWJlcltdKSwgJ2RvbWUnLFxuICAgICAgKFMuYXQgYXMgbnVtYmVyW11bXSkubWFwKChbeCwgel0pID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgUy5kb21lWVswXSwgeikpKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWluYXJldFxuICAgKiBUaGUgcmVnaXN0cnkgbm90ZXMgc2F5IHRoZSBwYWlyaW5nIG9mIG9uZSBncmVhdCBkb21lIGFuZCBhIHNpbmdsZSBzbGVuZGVyIG1pbmFyZXQgaXMgd2hhdCByZWFkc1xuICAgKiBhdCBkaXN0YW5jZSBhbmQgdGhhdCBuZWl0aGVyIGVsZW1lbnQgd29ya3MgYWxvbmUsIHNvIHRoZSBtaW5hcmV0IGlzIG5vdCBkcmVzc2luZzogaXQgaXMgaGFsZlxuICAgKiB0aGUgc2lsaG91ZXR0ZSwgYW5kIGl0IGlzIHdoYXQgc2V0cyB0aGUgZGVjbGFyZWQgMTggbS4gU2hhZnQsIGJhbGNvbnkgYW5kIHVwcGVyIHN0YWdlIG1lcmdlZFxuICAgKiBpbnRvIG9uZSB3aGl0ZSBjb21wb25lbnQuICovXG4gIHtcbiAgICBjb25zdCBNTiA9IEcubWluYXJldDtcbiAgICBhZGQoJ21pbmFyZXQnLCAnTWluYXJldCcsIG1lcmdlR2VvcyhbXG4gICAgICBib3hBdChNTi54LCBNTi55MSAvIDIsIE1OLnosIE1OLmhhbGYgKiAyLCBNTi55MSwgTU4uaGFsZiAqIDIpLFxuICAgICAgLy8gVGhlIGJhbGNvbnkgc2xhYiwgc3RhbmRpbmcgY2xlYXIgb2YgdGhlIHNoYWZ0IG9uIGV2ZXJ5IHNpZGUuXG4gICAgICBib3hBdChNTi54LCAoTU4uYmFsY29ueVlbMF0gKyBNTi5iYWxjb255WVsxXSkgLyAyLCBNTi56LFxuICAgICAgICBNTi5iYWxjb255SGFsZiAqIDIsIE1OLmJhbGNvbnlZWzFdIC0gTU4uYmFsY29ueVlbMF0sIE1OLmJhbGNvbnlIYWxmICogMiksXG4gICAgICAvLyBBIHRoaW5uZXIgcGFyYXBldCBsaXAgb24gdG9wIG9mIGl0LCBpbnNldCBzbyBubyB0d28gdG9wIGZhY2VzIHNoYXJlIGEgcGxhbmUuXG4gICAgICBib3hBdChNTi54LCBNTi5iYWxjb255WVsxXSArIDAuMTQsIE1OLnosIE1OLmJhbGNvbnlIYWxmICogMS44MiwgMC4yOCwgTU4uYmFsY29ueUhhbGYgKiAxLjgyKSxcbiAgICAgIGN5bEF0KE1OLngsIChNTi51cHBlcllbMF0gKyBNTi51cHBlcllbMV0pIC8gMiArIDAuMTYsIE1OLnosXG4gICAgICAgIE1OLnVwcGVyUiwgTU4udXBwZXJSICogMS4wNSwgTU4udXBwZXJZWzFdIC0gTU4udXBwZXJZWzBdIC0gMC4zMiwgMTYpLFxuICAgIF0pLCAnd2hpdGUnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYXJjYWRlXG4gICAqIEZpdmUgcG9pbnRlZCBhcmNoZXMgYWNyb3NzIHRoZSBoYWxsJ3MgZnJvbnQgZWxldmF0aW9uLCBhcyBUV08gaW5zdGFuY2VkIHN5c3RlbXM6IGEgd2hpdGVcbiAgICogc3Vycm91bmQgd2l0aCBhIHJlYWwgYXBlcnR1cmUsIGFuZCBhIGRhcmsgcGFuZWwgYmVoaW5kIGl0LlxuICAgKlxuICAgKiBUaGUgYXJjaCBpcyBQT0lOVEVELCBub3QgaGFsZi1yb3VuZC4gQSBzZW1pY2lyY3VsYXIgc3dlZXAgaGVyZSByZWFkcyBhcyBhIHJhaWx3YXkgdmlhZHVjdCwgYW5kXG4gICAqIHRoZSB0d28tY2VudHJlZCBhcmNoIGlzIG9uZSBvZiB0aGUgZmV3IHRoaW5ncyBvbiBhIHdoaXRld2FzaGVkIGJveCB0aGF0IHNheXMgbW9zcXVlIGF0IGFsbC4gKi9cbiAge1xuICAgIGNvbnN0IEggPSBHLmhhbGwsIEEgPSBHLmFyY2g7XG4gICAgY29uc3QgZmFjZSA9IEguekZyb250O1xuICAgIGNvbnN0IHNoYXBlID0gcG9pbnRlZEFyY2hTaGFwZShBLnBpdGNoLCBBLnNwcmluZyArIDAuMzAsIEEucmlzZSArIDAuMzAsIDAsXG4gICAgICB7IHc6IEEudywgc3ByaW5nOiBBLnNwcmluZywgYXBleFJpc2U6IEEucmlzZSwgc2lsbDogQS5zaWxsIH0pO1xuICAgIGNvbnN0IGZyYW1lID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogQS5kZXB0aCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogMTAgfSk7XG4gICAgZnJhbWUudHJhbnNsYXRlKDAsIDAuNTUsIGZhY2UgLSBBLmRlcHRoICsgMC4yMCk7XG4gICAgZnJhbWUuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICBjb25zdCB4czogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEEuY291bnQ7IGkrKykgeHMucHVzaCgoaSAtIChBLmNvdW50IC0gMSkgLyAyKSAqIEEucGl0Y2gpO1xuICAgIGFkZEluc3QoJ2FyY2gtZnJhbWVzJywgJ0FyY2FkZSBzdXJyb3VuZHMnLCBmcmFtZSwgJ3doaXRlJyxcbiAgICAgIHhzLm1hcCgoeCkgPT4gbmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCAwLCAwKSkpO1xuXG4gICAgLy8gVGhlIGRhcmsgYmVoaW5kIGVhY2ggb3BlbmluZzogMC4wMiBtIFBST1VEIG9mIHRoZSB3YWxsLCBub3QgcmVjZXNzZWQgaW50byBpdC4gVGhlIGhhbGwgaXMgYVxuICAgIC8vIHNvbGlkIG1hc3MsIHNvIGEgcGFuZWwgc3VuayBpbnRvIGl0IGlzIGluc2lkZSB0aGUgc29saWQgYW5kIGludmlzaWJsZS5cbiAgICBjb25zdCB2b2lkU2hhcGUgPSBwb2ludGVkQXJjaFNoYXBlKEEudywgQS5zcHJpbmcsIEEucmlzZSwgQS5zaWxsKTtcbiAgICAvLyBEZXB0aCAwLjA1IGF0IGZhY2UrMC4wMiBrZWVwcyB0aGUgdm9pZCdzIGZyb250IGF0IHo9NC4yNywgY2xlYXIgb2YgdGhlIHBhcmFwZXQncyBvd24gK1ogZmFjZVxuICAgIC8vIGF0IDQuMjguIEF0IDAuMDYgdGhlIHR3byBzaGFyZWQgdGhhdCBwbGFuZSBvdmVyIDUuMzUgbTIsIGZpdmUgdGltZXMgb3Zlci5cbiAgICBjb25zdCB2ZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkodm9pZFNoYXBlLCB7IGRlcHRoOiAwLjA1LCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiAxMCB9KTtcbiAgICB2Zy50cmFuc2xhdGUoMCwgMC41NSwgZmFjZSArIDAuMDIpO1xuICAgIHZnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgYWRkSW5zdCgnYXJjaC12b2lkcycsICdBcmNhZGUgb3BlbmluZ3MnLCB2ZywgJ2RhcmsnLFxuICAgICAgeHMubWFwKCh4KSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIDAsIDApKSk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZpbmlhbHMgYW5kIGNyZXNjZW50XG4gICAqIFNpeCBnaWx0IGZpbmlhbHMgYW5kIHRoZSBjcmVzY2VudCBvdmVyIHRoZSBncmVhdCBkb21lLCBNRVJHRUQgaW50byBvbmUgY29tcG9uZW50LiBJbnN0YW5jaW5nXG4gICAqIHdvdWxkIGhhdmUgYmVlbiB0aGUgb3RoZXIgcm91dGUsIGJ1dCB0aGUgY3Jlc2NlbnQgaXMgYSBvbmUtb2ZmIGFuZCB3b3VsZCBoYXZlIG5lZWRlZCBpdHMgb3duXG4gICAqIHN1Ym1pc3Npb24gYW55d2F5OyBtZXJnaW5nIGNvc3RzIG9uZSBkcmF3IGNhbGwgZm9yIGFsbCBzZXZlbi4gKi9cbiAge1xuICAgIGNvbnN0IEYgPSBHLmZpbmlhbHMgYXMgbnVtYmVyW11bXSwgQyA9IEcuY3Jlc2NlbnQ7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFt4LCB5LCB6LCBzXSBvZiBGKSB7XG4gICAgICBjb25zdCBnID0gbGF0aGUoW1swLCAwXSwgWzAuMTYsIDAuMDNdLCBbMC4yMCwgMC4xNl0sIFswLjEwLCAwLjMwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgWzAuMTMsIDAuNDJdLCBbMC4wNywgMC41OF0sIFswLCAwLjc4XV0sIDE0KTtcbiAgICAgIGcuc2NhbGUocywgcywgcyk7XG4gICAgICBnLnRyYW5zbGF0ZSh4LCB5LCB6KTtcbiAgICAgIHBhcnRzLnB1c2goZyk7XG4gICAgfVxuICAgIC8vIEEgc2hvcnQgc3RlbSBmcm9tIHRoZSBmaW5pYWwncyB0aXAgdXAgdG8gdGhlIGNyZXNjZW50LiBXaXRob3V0IGl0IHRoZSBjcmVzY2VudCBmbG9hdHM6IGl0XG4gICAgLy8gc2l0cyBvbiB0aGUgYXhpcyBhdCB4PXo9MCBhbmQgZXZlcnkgcmV2aWV3IHZpZXdwb2ludCBpcyBvZmYtYXhpcywgc28gdGhlIGdhcCByZWFkcyBhcyBhXG4gICAgLy8gZGV0YWNoZWQgb3JuYW1lbnQgcmF0aGVyIHRoYW4gYXMgdGhlIHRvcCBvZiB0aGUgZmluaWFsLlxuICAgIHBhcnRzLnB1c2goY3lsQXQoQy54LCBDLnkgLSBDLnIgLSAwLjI2LCBDLnosIDAuMDUsIDAuMDcsIDAuNTIsIDEwKSk7XG4gICAgLy8gVGhlIGNyZXNjZW50OiBhIHJpbmcgd2l0aCBhIGJpdGUgdGFrZW4gb3V0IG9mIGl0LCBidWlsdCBhcyBhbiBhcmMgb2Ygc2hvcnQgc2VnbWVudHMgcmF0aGVyXG4gICAgLy8gdGhhbiBhcyBhIHRvcnVzLCBiZWNhdXNlIGEgdG9ydXMgY2Fubm90IGJlIG9wZW5lZC5cbiAgICBjb25zdCBuID0gMTE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGNvbnN0IGEwID0gLU1hdGguUEkgKiAwLjYyICsgKGkgLyBuKSAqIE1hdGguUEkgKiAxLjI0O1xuICAgICAgY29uc3QgYTEgPSAtTWF0aC5QSSAqIDAuNjIgKyAoKGkgKyAxKSAvIG4pICogTWF0aC5QSSAqIDEuMjQ7XG4gICAgICBjb25zdCBwMCA9IFtNYXRoLnNpbihhMCkgKiBDLnIsIE1hdGguY29zKGEwKSAqIEMucl07XG4gICAgICBjb25zdCBwMSA9IFtNYXRoLnNpbihhMSkgKiBDLnIsIE1hdGguY29zKGExKSAqIEMucl07XG4gICAgICBjb25zdCBkeCA9IHAxWzBdIC0gcDBbMF0sIGR5ID0gcDFbMV0gLSBwMFsxXTtcbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoQy50LCBNYXRoLmh5cG90KGR4LCBkeSkgKyAwLjAyLCBDLnQpO1xuICAgICAgZy5yb3RhdGVaKE1hdGguYXRhbjIoLWR4LCBkeSkpO1xuICAgICAgZy50cmFuc2xhdGUoQy54ICsgKHAwWzBdICsgcDFbMF0pIC8gMiwgQy55ICsgKHAwWzFdICsgcDFbMV0pIC8gMiwgQy56KTtcbiAgICAgIHBhcnRzLnB1c2goZyk7XG4gICAgfVxuICAgIGFkZCgnZmluaWFscycsICdHaWx0IGZpbmlhbHMgYW5kIGNyZXNjZW50JywgbWVyZ2VHZW9zKHBhcnRzKSwgJ2dvbGQnKTtcbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZU1vc3F1ZU1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogT05FLiBTdGF0aWMgbGFuZG1hcmsgZ2VvbWV0cnkgLS0gbm90aGluZyBvcGVucywgdHVybnMgb3Igc3dpbmdzLiBBIG5hbWVkIHBpdm90IGlzIGFcbiAgICAvLyBwcm9taXNlIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wIHRoYXQgZGVjbGFyZXMgcGl2b3RzIGl0IGhhcyBubyBtZWNoYW5pc21zIGZvclxuICAgIC8vIGhhcyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FLiBOb3RoaW5nIGF0dGFjaGVzIHRvIHRoaXMgcHJvcCBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBcUN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsbUJBQW1CO0FBQUEsSUFDckI7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxRQUNKO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGVBQWU7QUFBQSxNQUNmLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxNQUNWLFNBQVM7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
