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

// assets/mosque/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createModel: () => createModel,
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
  const moorishArchPath = (target, w, spring, rise, sill, shoulder) => {
    const hw = w / 2, sw = hw + shoulder;
    const a = 0.22 * sw, R = Math.hypot(sw, a), cy = spring + a;
    const th = Math.asin(Math.min(0.985, Math.max(0.5, (0.72 * rise - a) / R)));
    const px = R * Math.cos(th), py = cy + R * Math.sin(th);
    const tx = -Math.sin(th), ty = Math.cos(th);
    const dx = Math.cos(1.2566), dy = -Math.sin(1.2566);
    const ax = 0, ay = spring + rise;
    const det = tx * -dy - -dx * ty;
    let s = ((ax - px) * -dy - -dx * (ay - py)) / det;
    if (!(s > 0) || !isFinite(s)) s = 0.1 * R;
    const cxp = px + s * tx, cyp = py + s * ty;
    const th0 = -Math.asin(a / R);
    const n = 8;
    target.moveTo(hw, sill);
    target.lineTo(hw, spring);
    if (shoulder > 0) target.lineTo(sw, spring);
    for (let i = 1; i <= n; i++) {
      const t = th0 + (th - th0) * (i / n);
      target.lineTo(R * Math.cos(t), cy + R * Math.sin(t));
    }
    target.quadraticCurveTo(cxp, cyp, ax, ay);
    target.quadraticCurveTo(-cxp, cyp, -px, py);
    for (let i = n - 1; i >= 0; i--) {
      const t = th0 + (th - th0) * (i / n);
      target.lineTo(-R * Math.cos(t), cy + R * Math.sin(t));
    }
    target.lineTo(-hw, spring);
    target.lineTo(-hw, sill);
    target.closePath();
  };
  const moorishArchShape = (w, spring, rise, sill, shoulder, hole) => {
    const shape = new THREE.Shape();
    moorishArchPath(shape, w, spring, rise, sill, shoulder);
    if (hole) {
      const p = new THREE.Path();
      moorishArchPath(p, hole.w, hole.spring, hole.rise, hole.sill, hole.shoulder);
      shape.holes.push(p);
    }
    return shape;
  };
  const crescentShape = (R, ri, off, n) => {
    const xi = (R * R - ri * ri + off * off) / (2 * off);
    const yi = Math.sqrt(Math.max(0, R * R - xi * xi));
    const a0 = Math.atan2(yi, xi), b0 = Math.atan2(yi, xi - off);
    const sh = new THREE.Shape();
    sh.moveTo(xi, yi);
    for (let i = 1; i <= n; i++) {
      const t = a0 + (2 * Math.PI - 2 * a0) * (i / n);
      sh.lineTo(R * Math.cos(t), R * Math.sin(t));
    }
    for (let i = 1; i < n; i++) {
      const t = -b0 - (2 * Math.PI - 2 * b0) * (i / n);
      sh.lineTo(off + ri * Math.cos(t), ri * Math.sin(t));
    }
    sh.closePath();
    return sh;
  };
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
    {
      const GW = (C.gateHalf + C.pylon) * 2, GA = C.gate;
      const block = new THREE.Shape();
      block.moveTo(-GW / 2, 0);
      block.lineTo(GW / 2, 0);
      block.lineTo(GW / 2, C.gateH);
      block.lineTo(-GW / 2, C.gateH);
      block.closePath();
      const hole = new THREE.Path();
      moorishArchPath(hole, GA.w, GA.spring, GA.rise, 0, GA.shoulder);
      block.holes.push(hole);
      const gate = new THREE.ExtrudeGeometry(block, { depth: C.t, bevelEnabled: false, curveSegments: 8 });
      gate.translate(0, 0, dd - C.t / 2);
      gate.computeVertexNormals();
      parts.push(gate);
    }
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
    const b = A.band;
    const shape = moorishArchShape(
      A.w + 2 * b,
      A.spring - 0.4 * b,
      A.rise + 1.25 * b,
      0,
      A.shoulder,
      { w: A.w, spring: A.spring, rise: A.rise, sill: 0, shoulder: A.shoulder }
    );
    const frame = new THREE.ExtrudeGeometry(shape, { depth: A.depth, bevelEnabled: false, curveSegments: 10 });
    frame.translate(0, 0, face - A.depth + 0.2);
    frame.computeVertexNormals();
    const xs = [];
    for (let i = 0; i < A.count; i++) xs.push((i - (A.count - 1) / 2) * A.pitch);
    const at = (idx) => idx.map((i) => new THREE.Matrix4().setPosition(xs[i], 0, 0));
    const open = A.open;
    const all = xs.map((_, i) => i);
    const blind = all.filter((i) => !open.includes(i));
    addInst("arch-frames", "Arcade surrounds", frame, "white", at(all));
    const voidShape = moorishArchShape(A.w, A.spring, A.rise, A.sill, A.shoulder);
    const vg = new THREE.ExtrudeGeometry(voidShape, { depth: 0.05, bevelEnabled: false, curveSegments: 10 });
    vg.translate(0, 0, face + 0.02);
    vg.computeVertexNormals();
    addInst("arch-voids", "Arcade openings", vg, "dark", at(open));
    const fg = new THREE.ExtrudeGeometry(voidShape, { depth: 0.025, bevelEnabled: false, curveSegments: 10 });
    fg.translate(0, 0, face + 0.02);
    fg.computeVertexNormals();
    addInst("blind-fields", "Blind niche fields", fg, "green", at(blind));
    const inset = 0.3;
    const pw = A.w - 2 * inset;
    const panel = moorishArchShape(pw, A.spring - 0.4 * inset, 0.95 * (pw + 1.4 * A.shoulder), 0.45, A.shoulder * 0.7);
    const pg = new THREE.ExtrudeGeometry(panel, { depth: 0.02, bevelEnabled: false, curveSegments: 8 });
    pg.translate(0, 0, face + 0.04);
    pg.computeVertexNormals();
    addInst("blind-panels", "Blind niche panels", pg, "white", at(blind));
  }
  {
    const F = G.finials;
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
    for (const [x, y0, z, s, totalH, R] of G.ornaments) {
      const cap = lathe([[0, 0], [0.46, 0], [0.46, 0.05], [0.32, 0.2], [0.13, 0.33], [0.06, 0.38], [0.06, 0.46]], 16);
      cap.scale(s, s, s);
      cap.translate(x, y0, z);
      parts.push(cap);
      const ball = new THREE.SphereGeometry(0.17 * s, 14, 10);
      ball.translate(x, y0 + 0.6 * s, z);
      parts.push(ball);
      parts.push(cylAt(x, y0 + 0.84 * s, z, 0.045 * s, 0.055 * s, 0.22 * s, 10));
      const bulb = lathe([[0, 0], [0.1, 0.03], [0.12, 0.1], [0.085, 0.19], [0.04, 0.27], [0.03, 0.31]], 12);
      bulb.scale(s, s, s);
      bulb.translate(x, y0 + 0.92 * s, z);
      parts.push(bulb);
      const spikeBase = y0 + 1.2 * s, cBottom = y0 + totalH - 2 * R + 0.03;
      if (cBottom > spikeBase + 0.02) parts.push(cylAt(x, (spikeBase + cBottom) / 2, z, 0.025 * s, 0.032 * s, cBottom - spikeBase, 8));
      const t = Math.max(0.035, 0.16 * R);
      const cg = new THREE.ExtrudeGeometry(crescentShape(R, 0.85 * R, 0.28 * R, 14), { depth: t, bevelEnabled: false });
      cg.translate(0, 0, -t / 2);
      cg.rotateZ(Math.PI * 0.28);
      cg.translate(x, y0 + totalH - R, z);
      cg.computeVertexNormals();
      parts.push(cg);
    }
    add("finials", "Gilt finials and crescents", mergeGeos(parts), "gold");
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
function createModel(options = {}) {
  return createObjectModel(void 0, options);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogTW9zcXVlIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDE0LjAwIHggMTguMDAgeCAxNi4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLlxuICogQnVkZ2V0IChoZXJvNHgpOiA8PTMyMDAwIHRyaWFuZ2xlcywgPD0yNCBkcmF3IGNhbGxzLCA8PTE2IG1hdGVyaWFscywgPD0zMiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgTU9OVU1FTlRBTCBidWlsZGluZ3MsIGFuZCB1bmxpa2UgdGhlIHNoYXJlZCByZXRhaWwgbW9kdWxlIGl0cyBmb3JtIGlzXG4gKiBub3QgYSBib3g6IHRoZSByZWNvZ25pc2FibGUgZmVhdHVyZSBpcyBhIGN1cnZlZCBvciB0aWVyZWQgcHJvZmlsZSB0aGF0IGhhcyB0byBzdXJ2aXZlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tLiBUaGUgc2hhcmVkIHZvY2FidWxhcnkgaGVyZSBpcyB0aGVyZWZvcmUgdGhlIExBVEhFIC0tXG4gKiBhIHByb2ZpbGUgcmV2b2x2ZWQgYWJvdXQgK1kgLS0gYW5kIHRoZSB0aWVyZWQvc3RlcHBlZCBtZXJnZSwgbm90IHRoZSBwYXJhbWV0ZXJpc2VkIHNob3Bmcm9udC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICAvKipcbiAgICogV2hlcmUgdGhpcyBwcm9wJ3Mgc2hpcHBlZCBmaWxlcyBsaXZlLCB3aXRoIGEgdHJhaWxpbmcgc2xhc2guXG4gICAqXG4gICAqIFRoZSBtYXBzIGFyZSByZWNvcmRlZCBhcyBiYXJlIGZpbGVuYW1lcyBiZWNhdXNlIHRoZSBidW5kbGUgaXMgRVZBTFVBVEVEXG4gICAqIHJhdGhlciB0aGFuIGltcG9ydGVkOiBpdCBoYXMgbm8gaW1wb3J0Lm1ldGEgYW5kIG5vIGN1cnJlbnRTY3JpcHQsIHNvIGl0XG4gICAqIGNhbm5vdCBzZWUgaXRzIG93biBVUkwuIEV2ZXJ5IGhvc3QgZGVyaXZlcyB0aGlzIGZyb20gdGhlIG1vZHVsZSBVUkwuXG4gICAqL1xuICBiYXNlVXJsPzogc3RyaW5nO1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcIm1vc3F1ZVwiLFxuICAgIFwibmFtZVwiOiBcIk1vc3F1ZVwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIk1vc3F1ZVwiLFxuICAgIFwiZW52ZWxvcGVcIjogXCJFbnZlbG9wZSAxNC4wMCB4IDE4LjAwIHggMTYuMDAgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cC5cXG4gKiBCdWRnZXQgKGhlcm80eCk6IDw9MzIwMDAgdHJpYW5nbGVzLCA8PTI0IGRyYXcgY2FsbHMsIDw9MTYgbWF0ZXJpYWxzLCA8PTMyIHVuaXF1ZSBnZW9tZXRyaWVzLlwiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcIndoaXRlXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTE3MTExNTAsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTMsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkb21lXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTAxOTkxODEsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNzIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJncmVlblwiLFxuICAgICAgICBcImNvbG9yXCI6IDk0NzU0NTEsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNzIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkZWNrXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTA5ODY2NDcsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkYXJrXCIsXG4gICAgICAgIFwiY29sb3JcIjogNTEzMzg5OCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdvbGRcIixcbiAgICAgICAgXCJjb2xvclwiOiA5ODAwODIyLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjM4LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjMsXG4gICAgICAgIFwiZW52TWFwSW50ZW5zaXR5XCI6IDEuMlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICBcImNvdXJ0XCI6IHtcbiAgICAgICAgXCJoeFwiOiA3LFxuICAgICAgICBcImh6XCI6IDgsXG4gICAgICAgIFwidFwiOiAwLjQ1LFxuICAgICAgICBcImhcIjogMi4zLFxuICAgICAgICBcImdhdGVIYWxmXCI6IDEuNTUsXG4gICAgICAgIFwicHlsb25cIjogMC43NSxcbiAgICAgICAgXCJnYXRlSFwiOiAzLjMsXG4gICAgICAgIFwiZ2F0ZVwiOiB7XG4gICAgICAgICAgXCJ3XCI6IDEuNyxcbiAgICAgICAgICBcInNwcmluZ1wiOiAxLjYsXG4gICAgICAgICAgXCJyaXNlXCI6IDEuMzUsXG4gICAgICAgICAgXCJzaG91bGRlclwiOiAwLjFcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaGFsbFwiOiB7XG4gICAgICAgIFwiaHhcIjogNC42LFxuICAgICAgICBcInpCYWNrXCI6IC01LjQsXG4gICAgICAgIFwiekZyb250XCI6IDQuMixcbiAgICAgICAgXCJ5MFwiOiAwLFxuICAgICAgICBcInkxXCI6IDcuMlxuICAgICAgfSxcbiAgICAgIFwiZGVja1wiOiB7XG4gICAgICAgIFwieTBcIjogNy4yLFxuICAgICAgICBcInkxXCI6IDcuMzRcbiAgICAgIH0sXG4gICAgICBcInBhcmFwZXRcIjoge1xuICAgICAgICBcInkwXCI6IDcuMixcbiAgICAgICAgXCJ5MVwiOiA3Ljk1LFxuICAgICAgICBcImJhbmRcIjogMC4zXG4gICAgICB9LFxuICAgICAgXCJhcmNoXCI6IHtcbiAgICAgICAgXCJjb3VudFwiOiA1LFxuICAgICAgICBcIm9wZW5cIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzXG4gICAgICAgIF0sXG4gICAgICAgIFwid1wiOiAxLjIyLFxuICAgICAgICBcInNwcmluZ1wiOiA0LjY1LFxuICAgICAgICBcInJpc2VcIjogMS4xNSxcbiAgICAgICAgXCJzaG91bGRlclwiOiAwLjA5LFxuICAgICAgICBcImJhbmRcIjogMC4yLFxuICAgICAgICBcInNpbGxcIjogMCxcbiAgICAgICAgXCJkZXB0aFwiOiAwLjQyLFxuICAgICAgICBcInBpdGNoXCI6IDEuODZcbiAgICAgIH0sXG4gICAgICBcImRydW1cIjoge1xuICAgICAgICBcInNxWVwiOiBbXG4gICAgICAgICAgNy4zNCxcbiAgICAgICAgICA4LjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwic3FIYWxmXCI6IDIuODUsXG4gICAgICAgIFwiY3lsWVwiOiBbXG4gICAgICAgICAgOC41NSxcbiAgICAgICAgICA5LjU1XG4gICAgICAgIF0sXG4gICAgICAgIFwiY3lsUlwiOiAyLjRcbiAgICAgIH0sXG4gICAgICBcImRvbWVcIjoge1xuICAgICAgICBcInkwXCI6IDkuNDUsXG4gICAgICAgIFwieTFcIjogMTMuMyxcbiAgICAgICAgXCJyXCI6IDIuNTgsXG4gICAgICAgIFwicmlic1wiOiAyMixcbiAgICAgICAgXCJhbXBcIjogMC4wMyxcbiAgICAgICAgXCJzZWdcIjogODgsXG4gICAgICAgIFwic3RlcHNcIjogMTJcbiAgICAgIH0sXG4gICAgICBcInZhbGxleVwiOiBbXG4gICAgICAgIDAuMzMsXG4gICAgICAgIDAuNDIsXG4gICAgICAgIDAuMzVcbiAgICAgIF0sXG4gICAgICBcInNtYWxsXCI6IHtcbiAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTMuNCxcbiAgICAgICAgICAgIC0yLjlcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuNCxcbiAgICAgICAgICAgIC0yLjlcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0zLjQsXG4gICAgICAgICAgICAyLjlcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuNCxcbiAgICAgICAgICAgIDIuOVxuICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgXCJkcnVtWVwiOiBbXG4gICAgICAgICAgNy4yMSxcbiAgICAgICAgICA4XG4gICAgICAgIF0sXG4gICAgICAgIFwiZHJ1bVJcIjogMS4wMixcbiAgICAgICAgXCJkb21lWVwiOiBbXG4gICAgICAgICAgNy45NSxcbiAgICAgICAgICA5LjM1XG4gICAgICAgIF0sXG4gICAgICAgIFwiZG9tZVJcIjogMS4xLFxuICAgICAgICBcInJpYnNcIjogMTYsXG4gICAgICAgIFwiYW1wXCI6IDAuMDM1LFxuICAgICAgICBcInNlZ1wiOiA2NCxcbiAgICAgICAgXCJzdGVwc1wiOiA4XG4gICAgICB9LFxuICAgICAgXCJtaW5hcmV0XCI6IHtcbiAgICAgICAgXCJ4XCI6IC01Ljc1LFxuICAgICAgICBcInpcIjogLTYuNixcbiAgICAgICAgXCJoYWxmXCI6IDAuNjIsXG4gICAgICAgIFwieTFcIjogMTMuNixcbiAgICAgICAgXCJiYWxjb255WVwiOiBbXG4gICAgICAgICAgMTMuNixcbiAgICAgICAgICAxNC4yNVxuICAgICAgICBdLFxuICAgICAgICBcImJhbGNvbnlIYWxmXCI6IDEuMDIsXG4gICAgICAgIFwidXBwZXJZXCI6IFtcbiAgICAgICAgICAxNC4yNSxcbiAgICAgICAgICAxNS44XG4gICAgICAgIF0sXG4gICAgICAgIFwidXBwZXJSXCI6IDAuNTIsXG4gICAgICAgIFwiZG9tZVlcIjogW1xuICAgICAgICAgIDE1LjcsXG4gICAgICAgICAgMTcuNVxuICAgICAgICBdLFxuICAgICAgICBcImRvbWVSXCI6IDAuNzgsXG4gICAgICAgIFwicmlic1wiOiAxNCxcbiAgICAgICAgXCJhbXBcIjogMC4wNCxcbiAgICAgICAgXCJzZWdcIjogNTYsXG4gICAgICAgIFwic3RlcHNcIjogOFxuICAgICAgfSxcbiAgICAgIFwiZmluaWFsc1wiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAtMy40LFxuICAgICAgICAgIDkuMjUsXG4gICAgICAgICAgLTIuOSxcbiAgICAgICAgICAwLjQ4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjQsXG4gICAgICAgICAgOS4yNSxcbiAgICAgICAgICAtMi45LFxuICAgICAgICAgIDAuNDhcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0zLjQsXG4gICAgICAgICAgOS4yNSxcbiAgICAgICAgICAyLjksXG4gICAgICAgICAgMC40OFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy40LFxuICAgICAgICAgIDkuMjUsXG4gICAgICAgICAgMi45LFxuICAgICAgICAgIDAuNDhcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwib3JuYW1lbnRzXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMuMTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIuMTIsXG4gICAgICAgICAgMC4zXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtNS43NSxcbiAgICAgICAgICAxNy40ODQ5LFxuICAgICAgICAgIC02LjYsXG4gICAgICAgICAgMC4yNSxcbiAgICAgICAgICAwLjUxNTEsXG4gICAgICAgICAgMC4xMVxuICAgICAgICBdXG4gICAgICBdXG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgLy8gQ09MT1IgaGFzIHRvIGJlIGNhcnJpZWQgdG9vLCBhbmQgaXQgaXMgZWFzeSB0byBmb3JnZXQ6IHRoaXMgZnVuY3Rpb24gY29waWVkIHBvc2l0aW9uLCBub3JtYWxcbiAgLy8gYW5kIHV2IG9ubHksIGFuZCB0aGUgbW9zcXVlJ3MgcmliYmVkIGRvbWVzIGxvc3QgdGhlaXIgZ3JlZW4tYW5kLXBhbGUgc3RyaXBpbmcgdGhlIG1vbWVudCB0aGV5XG4gIC8vIHdlcmUgbWVyZ2VkIHdpdGggYW55dGhpbmcuIFRoZSBmYWlsdXJlIGlzIHNpbGVudCAtLSB0aGUgZG9tZSByZW5kZXJzLCBpbiBvbmUgZmxhdCBjb2xvdXIgLS0gYW5kXG4gIC8vIHRvb2sgYSB3cm9uZyB0aGVvcnkgYWJvdXQgc1JHQiBnYW1tYSBiZWZvcmUgdGhlIGF0dHJpYnV0ZSBsaXN0IHdhcyByZWFkLiBBbnkgaW5wdXQgY2FycnlpbmcgYVxuICAvLyBjb2xvdXIgbWVhbnMgZXZlcnkgaW5wdXQgZ2V0cyBvbmUsIHdoaXRlIHdoZXJlIGl0IGhhZCBub25lLlxuICBjb25zdCBhbnlDb2xvciA9IHBhcnRzLnNvbWUoKGcpID0+ICEhZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpO1xuICBjb25zdCBjb2xvciA9IGFueUNvbG9yID8gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpLmZpbGwoMSkgOiBudWxsO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGNvbnN0IGMgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICAgIGlmIChjb2xvciAmJiBjKSB7IGNvbG9yWyh2ICsgaSkgKiAzXSA9IGMuZ2V0WChpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAxXSA9IGMuZ2V0WShpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAyXSA9IGMuZ2V0WihpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sb3IpIG91dC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgMykpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHJUb3A6IG51bWJlciwgckJvdDogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyVG9wLCByQm90LCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogUmV2b2x2ZSBhIHByb2ZpbGUgYWJvdXQgK1kuIGBwdHNgIGFyZSBbcmFkaXVzLCB5XSBpbiBtZXRyZXMsIGJvdHRvbSB0byB0b3AuXG4gKlxuICogVGhpcyBpcyB0aGUgc2hhcGUgdm9jYWJ1bGFyeSB0aGUgd2hvbGUgbW9udW1lbnRhbCBzZXQgaXMgYnVpbHQgZnJvbSAtLSBhIGNoZWRpJ3MgYmVsbCwgYSBwcmFuZydzXG4gKiBjb3JuLWNvYiB0YXBlciwgYSBkb21lLCBhIHJpbmdlZCBzcGlyZSBhcmUgYWxsIG9uZSBwcm9maWxlIGVhY2guIFR3byB0aGluZ3MgYXJlIHdvcnRoIHN0YXRpbmdcbiAqIGJlY2F1c2UgYm90aCBjb3N0IGEgcmVidWlsZCB0byBsZWFybjpcbiAqXG4gKiAtIExhdGhlR2VvbWV0cnkgaXMgT1BFTiBhdCB0b3AgYW5kIGJvdHRvbS4gQSBwcm9maWxlIHRoYXQgZG9lcyBub3QgY2xvc2Ugb24gdGhlIGF4aXMgKHJhZGl1cyAwKVxuICogICBsZWF2ZXMgYSBob2xlIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkcyBhcyBiYWNrZ3JvdW5kIGVuY2xvc2VkIGJ5IHRoZSBzaWxob3VldHRlLiBDbG9zZSBpdCwgb3JcbiAqICAgY2FwIGl0IHdpdGggd2hhdCBzaXRzIGFib3ZlLlxuICogLSBSQURJQUwgU0VHTUVOVCBDT1VOVCBpcyB0aGUgdHJpYW5nbGUgYnVkZ2V0J3MgbWFpbiBsZXZlciBoZXJlIGFuZCBpdCBpcyBwZXItbGF0aGU6IGEgcHJvZmlsZSBvZlxuICogICBuIHBvaW50cyBhdCBzIHNlZ21lbnRzIGlzIDIqKG4tMSkqcyB0cmlhbmdsZXMuIEEgMjQtcmluZyBzcGlyZSBhdCAzMiBzZWdtZW50cyBpcyAxLDQ3MlxuICogICB0cmlhbmdsZXMgb24gaXRzIG93biwgd2hpY2ggaXMgd2h5IHRoZSBsb3ctcmVsaWVmIHJpbmdzIGFyZSBhIHByb2ZpbGUgcmF0aGVyIHRoYW4gMjQgcmluZ3MuXG4gKi9cbmZ1bmN0aW9uIGxhdGhlKHB0czogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIsIHlPZmZzZXQgPSAwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB2ID0gcHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5tYXgocFswXSwgMCksIHBbMV0gKyB5T2Zmc2V0KSk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeSh2LCBzZWcpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBzdGVwcGVkIHRhcGVyIGFzIGEgbGF0aGUgcHJvZmlsZTogYHJpbmdzYCBhbHRlcm5hdGluZyBvdXQvaW4gcmFkaWkgY2xpbWJpbmcgZnJvbSB5MCB0byB5MS5cbiAqICBPbmUgZ2VvbWV0cnksIG9uZSBkcmF3IGNhbGwsIGFuZCB0aGUgc3RlcCBjb3VudCBpcyBhIHByb2ZpbGUtcG9pbnQgY291bnQgcmF0aGVyIHRoYW4gYSBtZXNoXG4gKiAgY291bnQgLS0gd2hpY2ggaXMgd2hhdCBrZWVwcyBhIDIwLXJpbmcgY2hlZGkgc3BpcmUgaW5zaWRlIGEgMzItZ2VvbWV0cnkgY2VpbGluZy4gKi9cbmZ1bmN0aW9uIHJpbmdlZFRhcGVyKHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHIwOiBudW1iZXIsIHIxOiBudW1iZXIsIHJpbmdzOiBudW1iZXIsIGJ1bGdlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHJpbmdzOyBpKyspIHtcbiAgICBjb25zdCB0ID0gaSAvIHJpbmdzO1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgciA9IHIwICsgKHIxIC0gcjApICogdDtcbiAgICBjb25zdCBzdGVwID0gKHkxIC0geTApIC8gcmluZ3M7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeV0pO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHkgKyBzdGVwICogMC40NV0pO1xuICAgIHB0cy5wdXNoKFtyLCB5ICsgc3RlcCAqIDAuNTVdKTtcbiAgfVxuICBwdHMucHVzaChbcjEsIHkxXSk7XG4gIHJldHVybiBwdHM7XG59XG5cblxuLyoqXG4gKiBUaGUgUkVERU5URUQgc3F1YXJlIHBsYW4gLS0gYSBzcXVhcmUgd2hvc2UgZm91ciBjb3JuZXJzIGFyZSBjdXQgYmFjayBpbiB0d28gcmlnaHQtYW5nbGVkIHN0ZXBzLlxuICogSXQgaXMgdGhlIHBsYW4gb2YgYSBUaGFpIGNoZWRpJ3MgdGVycmFjZSBhbmQgb2YgYSBwcmFuZydzIGJhc2UsIGFuZCBidWlsZGluZyBpdCBhcyBhIFNoYXBlIHRoYXRcbiAqIGlzIHRoZW4gZXh0cnVkZWQgaXMgbm90IGEgc3R5bGlzdGljIGNob2ljZTogdGhlIG9idmlvdXMgYWx0ZXJuYXRpdmUsIGEgd2lkZSBib3ggY3Jvc3NlZCBieSBhXG4gKiBkZWVwIGJveCwgcHV0cyB0aGUgdHdvIGJveGVzJyB0b3AgZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSBvdmVyIHRoZWlyIHdob2xlXG4gKiBpbnRlcnNlY3Rpb24sIHdoaWNoIHotZmlnaHRzLiBPbmUgZXh0cnVzaW9uIG9mIG9uZSBjbG9zZWQgcGxhbiBoYXMgbm8gaW50ZXJpb3IgY29pbmNpZGVuY2UgYXRcbiAqIGFsbC5cbiAqXG4gKiBgYWAgaXMgdGhlIGhhbGYtd2lkdGggYWNyb3NzIHRoZSBmbGF0czsgYHJgIGlzIHRoZSBkZXB0aCBvZiBlYWNoIHJlZGVudCBzdGVwLlxuICovXG5mdW5jdGlvbiByZWRlbnRlZFNoYXBlKGE6IG51bWJlciwgcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBxdWFkID0gW1thLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGFdXTtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgZm9yIChjb25zdCBbeCwgel0gb2YgcXVhZCkge1xuICAgICAgLy8gcm90OTBeaywgYXBwbGllZCBrIHRpbWVzOiAoeCwgeikgLT4gKC16LCB4KVxuICAgICAgbGV0IHB4ID0geCwgcHogPSB6O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrOyBpKyspIHsgY29uc3QgdCA9IHB4OyBweCA9IC1wejsgcHogPSB0OyB9XG4gICAgICBwdHMucHVzaChbcHgsIHB6XSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYmV0d2VlbiB0d28gaGVpZ2h0cy4gRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBhbG9uZyArWiwgc28gdGhlIHJlc3VsdCBpc1xuICogIHJvdGF0ZWQgb250byArWTsgYC1NYXRoLlBJIC8gMmAgYWJvdXQgWCBtYXBzICtaIHRvICtZIGFuZCBsZWF2ZXMgdGhlIHBsYW4ncyBvd24geCBhcyB4LiAqL1xuZnVuY3Rpb24gZXh0cnVkZVNsYWIoc2hhcGU6IFRIUkVFLlNoYXBlLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeTEgLSB5MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgLy8gcm90YXRlWCgtUEkvMikgbWFwcyAoeCwgeSwgeikgLT4gKHgsIHosIC15KSwgc28gdGhlIGV4dHJ1c2lvbiBkZXB0aCBiZWNvbWVzIGhlaWdodCBhbmQgdGhlXG4gIC8vIHBsYW4ncyBvd24gc2Vjb25kIGF4aXMgYmVjb21lcyAtei4gRXZlcnkgcGxhbiBoZXJlIGlzIGZvdXItZm9sZCBzeW1tZXRyaWMsIHNvIHRoYXQgc2lnbiBpc1xuICAvLyBpbW1hdGVyaWFsOyB3aGF0IG1hdHRlcnMgaXMgdGhhdCB0aGUgc2xhYiBub3cgcnVucyBVUCBmcm9tIHk9MCBhbmQgbmVlZHMgbGlmdGluZyBieSB5MC5cbiAgZy5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKDAsIHkwLCAwKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIHNxdWFyZSBwbGFuIHdpdGggYSByZWN0YW5ndWxhciBOT1RDSCBjdXQgaW50byBpdHMgK1ggZmFjZSAtLSB0aGUgc3RhaXIgd2VsbCBvZiBhIHRlbXBsZVxuICogdGVycmFjZS4gQ3V0dGluZyB0aGUgc3RhaXIgb3V0IG9mIHRoZSBwbGFuIHJhdGhlciB0aGFuIGhhbmdpbmcgaXQgb2ZmIHRoZSBvdXRzaWRlIGlzIHdoYXQga2VlcHNcbiAqIGFuIGFzeW1tZXRyaWMgZmVhdHVyZSBpbnNpZGUgYSBzeW1tZXRyaWMgZGVjbGFyZWQgZW52ZWxvcGU6IGEgZmxpZ2h0IHByb2plY3RpbmcgcGFzdCBhIDkgbVxuICogdGVycmFjZSB3b3VsZCBwdXQgdGhlIHByb3AncyBib3VuZGluZyBib3ggb2ZmLWNlbnRyZSBhbmQgb3ZlciBpdHMgZGVjbGFyZWQgd2lkdGggb24gb25lIHNpZGUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRTcXVhcmUoYTogbnVtYmVyLCBub3RjaEhhbGZaOiBudW1iZXIsIHhJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2EsIC1hXSwgW2EsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCBub3RjaEhhbGZaXSxcbiAgICAgICAgICAgICAgIFthLCBub3RjaEhhbGZaXSwgW2EsIGFdLCBbLWEsIGFdLCBbLWEsIC1hXV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgUkVDVEFOR1VMQVIgcGxhbiB3aXRoIGEgbm90Y2ggY3V0IGludG8gaXRzICtaIGZhY2UuIFRoZSBzcXVhcmUgdmVyc2lvbiBhYm92ZSBpcyB3aGF0IGEgY2hlZGkgb3JcbiAqIGEgcHJhbmcgdGVycmFjZSBuZWVkczsgYSBoYWxsIHRoYXQgaXMgdHdpY2UgYXMgbG9uZyBhcyBpdCBpcyB3aWRlIG5lZWRzIHRoZSB0d28gaGFsZi1leHRlbnRzIGtlcHRcbiAqIGFwYXJ0LCBhbmQgaXRzIHN0YWlyIGlzIG9uIGEgc2hvcnQgZW5kIHJhdGhlciB0aGFuIGEgbG9uZyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRSZWN0KGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIG54OiBudW1iZXIsIHpJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2h4LCAtaHpdLCBbaHgsIGh6XSwgW254LCBoel0sIFtueCwgeklubmVyXSwgWy1ueCwgeklubmVyXSwgWy1ueCwgaHpdLCBbLWh4LCBoel0sIFstaHgsIC1oel1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBUaGUgY3Jvc3Mtc2VjdGlvbiBvZiBvbmUgcm9vZiB0aWVyLCBhcyBhIGNsb3NlZCB0cmFwZXpvaWQgaW4gWFk6IGVhdmVzIGF0ICgrLWhhbGZCYXNlLCB5MClcbiAqIHJpc2luZyBhdCBgcGl0Y2hgIChhcyBhIHRhbmdlbnQpIHRvIGEgZmxhdCB0b3AgYXQgeTEuXG4gKlxuICogVGhhaSB0ZW1wbGUgcm9vZnMgbmVzdCwgYW5kIHRoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlIFRSVU5DQVRJT04uIFRocmVlIGZ1bGwgZ2FibGVzIGF0IG9uZVxuICogcGl0Y2ggY2Fubm90IG5lc3QgLS0gdGhlIHdpZGVzdCB0aWVyJ3MgcmlkZ2Ugd291bGQgYmUgdGhlIGhpZ2hlc3QsIHdoaWNoIGlzIHVwc2lkZSBkb3duLiBXaGF0XG4gKiBhY3R1YWxseSBoYXBwZW5zIGlzIHRoYXQgZWFjaCBsb3dlciB0aWVyIGlzIGN1dCBvZmYgYXQgdGhlIGhlaWdodCB3aGVyZSB0aGUgbmV4dCB0aWVyJ3MgZWF2ZXNcbiAqIGJlZ2luLCBhbmQgaXRzIHVwcGVyIHBhcnQgaXMgaGlkZGVuIGJlaGluZCB0aGF0IHRpZXI7IG9ubHkgdGhlIHRvcG1vc3QgdGllciBpcyBhIHJlYWwgZ2FibGUsXG4gKiBjbG9zZWQgYnkgcGFzc2luZyB5MSBhdCB0aGUgYXBleC5cbiAqL1xuZnVuY3Rpb24gdGllclByb2ZpbGUoaGFsZkJhc2U6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgaW5zZXQgPSAoeTEgLSB5MCkgLyBwaXRjaDtcbiAgY29uc3QgaGFsZlRvcCA9IGhhbGZCYXNlIC0gaW5zZXQ7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtaGFsZkJhc2UsIHkwKTtcbiAgc2hhcGUubGluZVRvKGhhbGZCYXNlLCB5MCk7XG4gIGlmIChoYWxmVG9wID4gMC4wMikge1xuICAgIHNoYXBlLmxpbmVUbyhoYWxmVG9wLCB5MSk7XG4gICAgc2hhcGUubGluZVRvKC1oYWxmVG9wLCB5MSk7XG4gIH0gZWxzZSB7XG4gICAgc2hhcGUubGluZVRvKDAsIHkwICsgaGFsZkJhc2UgKiBwaXRjaCk7ICAgLy8gYSByZWFsIHJpZGdlOiB0aGUgdG9wbW9zdCB0aWVyIGNsb3NlcyB0byBhIHBvaW50XG4gIH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGFsb25nICtaIGJldHdlZW4gdHdvIGRlcHRocywgd2l0aCBubyByb3RhdGlvbiAtLSB0aGUgbmF0aXZlIGRpcmVjdGlvbiBvZlxuICogIEV4dHJ1ZGVHZW9tZXRyeS4gVXNlZCB3aGVyZSB0aGUgcHJvZmlsZSBnZW51aW5lbHkgbGl2ZXMgaW4gdGhlIFhZIHBsYW5lLCBzdWNoIGFzIHRoZSByYWtpbmdcbiAqICB0cmlhbmdsZSBvZiBhIHN0YWlyIGNoZWVrLiAqL1xuZnVuY3Rpb24gZXh0cnVkZUFsb25nWihzaGFwZTogVEhSRUUuU2hhcGUsIHowOiBudW1iZXIsIHoxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB6MSAtIHowLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICBnLnRyYW5zbGF0ZSgwLCAwLCB6MCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHJlY3Rhbmd1bGFyIHBsYXRlIHdob3NlIGhlYWQgaXMgYSBoYWxmLXJvdW5kIGFyY2gsIG9wdGlvbmFsbHkgY2FycnlpbmcgYW4gYXJjaGVkIGFwZXJ0dXJlIG9mXG4gKiAgdGhlIHNhbWUgZm9ybS4gVGhlIGFwZXJ0dXJlIGFyYyBpcyBBTFdBWVMgc3dlcHQgZnJvbSBhbmdsZSAwIHRvIFBJOiB3cml0dGVuIHRoZSBvdGhlciB3YXkgaXRcbiAqICBydW5zIHVuZGVyIHRoZSBjaXJjbGUgaW5zdGVhZCBvZiBvdmVyIGl0IGFuZCBsZWF2ZXMgdGhlIGFyY2ggaGVhZCBmaWxsZWQgc29saWQsIHdoaWNoIHJlYWRzIGFzXG4gKiAgYSBzcXVhcmUgd2luZG93IHdpdGggYSBnaG9zdCBhcmNoIGRyYXduIGFjcm9zcyBpdC4gKi9cbmZ1bmN0aW9uIGFyY2hlZFBsYXRlKHc6IG51bWJlciwgaDogbnVtYmVyLCBhcmNoUjogbnVtYmVyLCBzcHJpbmc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLXcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5hYnNhcmMoMCwgc3ByaW5nLCBhcmNoUiwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICBzaGFwZS5saW5lVG8oLXcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBwLm1vdmVUbyhob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5saW5lVG8oaG9sZS5yLCBob2xlLnNwcmluZyk7XG4gICAgcC5hYnNhcmMoMCwgaG9sZS5zcHJpbmcsIGhvbGUuciwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAgIHAubGluZVRvKC1ob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5jbG9zZVBhdGgoKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIEhJUCBST09GIHdpdGggYSBjb25jYXZlIHNsb3BlIGFuZCB1cHN3ZXB0IGNvcm5lcnMgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZiwgd2hpY2ggbm9uZSBvZiB0aGVcbiAqIG90aGVyIHNoYXBlIGhlbHBlcnMgaGVyZSBjYW4gZXhwcmVzcy5cbiAqXG4gKiBJdCBpcyBnZW5lcmF0ZWQgYXMgYSByaW5nIG9mIHJlY3RhbmdsZXMgY2xpbWJpbmcgZnJvbSB0aGUgZWF2ZXMgdG8gdGhlIHJpZGdlIHJhdGhlciB0aGFuIGFzIGFuXG4gKiBleHRydWRlZCBwcm9maWxlLCBiZWNhdXNlIGEgaGlwIHNsb3BlcyBvbiBhbGwgZm91ciBzaWRlczogYW4gZXh0cnVzaW9uIGdpdmVzIHZlcnRpY2FsIGdhYmxlIGVuZHMsXG4gKiB3aGljaCBpcyBhIGRpZmZlcmVudCBidWlsZGluZy5cbiAqXG4gKiBUaGUgaG9yaXpvbnRhbCBzaHJpbmsgZm9sbG93cyBgKDEgLSB0KV5jdXJ2ZUV4cGAsIGFuZCB0aGUgZXhwb25lbnQgbXVzdCBiZSBBQk9WRSBvbmUuIFRoZSBzbG9wZVxuICogYXQgYW55IGhlaWdodCBpcyBkeS9keCwgc28gYSBwbGFuIHRoYXQgc2hyaW5rcyBGQVNUIGZvciBhIGdpdmVuIHJpc2UgaXMgYSBzaGFsbG93IHNsb3BlOiB3aXRoXG4gKiBxID4gMSB0aGUgZGVyaXZhdGl2ZSBxKDEtdCleKHEtMSkgaXMgbGFyZ2UgYXQgdGhlIGVhdmVzIGFuZCBzbWFsbCBhdCB0aGUgcmlkZ2UsIHdoaWNoIGlzIHNoYWxsb3dcbiAqIGVhdmVzIGFuZCBhIHN0ZWVwIHJpZGdlIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YuIEJlbG93IG9uZSBpdCBpcyB0aGUgb3RoZXIgd2F5IHJvdW5kIGFuZCBidWlsZHMgYVxuICogZmxhdC10b3BwZWQgdGVudCwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYXR0ZW1wdCBoZXJlIHJlbmRlcmVkLiBBIGxpbmVhciBzaHJpbmsgZ2l2ZXMgdGhlXG4gKiBzdHJhaWdodCBweXJhbWlkIG9mIGEgaGlwIHJvb2YgYW55d2hlcmUgZWxzZSBpbiB0aGUgd29ybGQuXG4gKlxuICogYGNvcm5lckxpZnRgIHJhaXNlcyBhbmQgcHVzaGVzIG91dCB0aGUgZm91ciBlYXZlcyBjb3JuZXJzLCB0YXBlcmluZyBhd2F5IGJ5IGEgdGhpcmQgb2YgdGhlIHdheVxuICogdXAuIFRoYXQgdXBzd2VlcCBpcyB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmcgdGhpbmcgYWJvdXQgdGhlIHJvb2YsIGFuZCBpdCBpcyB3aHkgdGhlIHBsYW5cbiAqIGhhbGYtd2lkdGggcGFzc2VkIGluIG11c3QgbGVhdmUgcm9vbTogdGhlIGNvcm5lcnMgZW5kIHVwIGZ1cnRoZXIgb3V0IHRoYW4gdGhlIGVhdmVzIGxpbmUuXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIGNsb3NlZCBzb2xpZCAtLSBvdXRlciBzdXJmYWNlLCBhIHNvZmZpdCBgZHJvcGAgYmVsb3cgdGhlIGVhdmVzLCBhbmQgYSBmYXNjaWEgYmFuZFxuICogYmV0d2VlbiB0aGVtLiBBbiBvcGVuIHNoZWxsIHdvdWxkIGxldCB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55XG4gKiBsb3cgYW5nbGUuXG4gKi9cbmZ1bmN0aW9uIGhpcFJvb2YoaHg6IG51bWJlciwgaHo6IG51bWJlciwgcmlkZ2VIYWxmWjogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICBjdXJ2ZUV4cDogbnVtYmVyLCBzdGVwczogbnVtYmVyLCBkcm9wOiBudW1iZXIsIGNvcm5lckxpZnQ6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gRUlHSFQgcG9pbnRzIHBlciByaW5nLCBub3QgZm91cjogdGhlIGZvdXIgY29ybmVycyBhbmQgdGhlIGZvdXIgZWRnZSBtaWRwb2ludHMuIFdpdGggZm91ciB0aGVcbiAgLy8gY29ybmVyIGxpZnQgaGFzIG5vd2hlcmUgdG8gZmFsbCBhd2F5IHRvIGFuZCByYWlzZXMgdGhlIEVOVElSRSBlYXZlcyBsaW5lLCB3aGljaCBidWlsdCBhIHNhZGRsZVxuICAvLyBpbnN0ZWFkIG9mIGEgcm9vZi4gVGhlIG1pZHBvaW50cyBhcmUgd2hhdCBob2xkIHRoZSBlYXZlcyBkb3duIGJldHdlZW4gdGhlIGNvcm5lcnMuXG4gIC8vXG4gIC8vIFRoZSBvcmRlciBpcyAoK3gsLXopLCBtaWQsICgteCwteiksIG1pZCwgKC14LCt6KSwgbWlkLCAoK3gsK3opLCBtaWQsIHdoaWNoIGlzIGNvdW50ZXItY2xvY2t3aXNlXG4gIC8vIHNlZW4gZnJvbSBBQk9WRSAtLSB0aGUgd2luZGluZyBhbiB1cHdhcmQtZmFjaW5nIHN1cmZhY2UgbmVlZHMuIFdvdW5kIHRoZSBvdGhlciB3YXkgdGhlIHdob2xlXG4gIC8vIHJvb2YgcmVuZGVycyBpbnNpZGUgb3V0LCB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBibGFjayBtZW1icmFuZSByYXRoZXIgdGhhbiBhIG1pc3Rha2UuXG4gIGNvbnN0IHJpbmcgPSAodDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KDEgLSB0LCBjdXJ2ZUV4cCk7XG4gICAgY29uc3QgZyA9IE1hdGgucG93KE1hdGgubWF4KDAsIDEgLSB0IC8gMC4zNCksIDIpO1xuICAgIGNvbnN0IGxpZnQgPSBjb3JuZXJMaWZ0ICogZywgb3V0ID0gMSArIDAuMDQ1ICogZztcbiAgICBjb25zdCBheCA9IGh4ICogZiAqIG91dCwgYXogPSAocmlkZ2VIYWxmWiArIChoeiAtIHJpZGdlSGFsZlopICogZikgKiBvdXQ7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCBjID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSArIGxpZnQsIHpdO1xuICAgIGNvbnN0IG0gPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5LCB6XTtcbiAgICByZXR1cm4gW2MoYXgsIC1heiksIG0oMCwgLWF6KSwgYygtYXgsIC1heiksIG0oLWF4LCAwKSxcbiAgICAgICAgICAgIGMoLWF4LCBheiksIG0oMCwgYXopLCBjKGF4LCBheiksIG0oYXgsIDApXTtcbiAgfTtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBsZXQgcHJldiA9IHJpbmcoMCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBjdXIgPSByaW5nKGkgLyBzdGVwcyk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgICBwdXNoKHByZXZba10sIHByZXZbazJdLCBjdXJbazJdKTtcbiAgICAgIHB1c2gocHJldltrXSwgY3VyW2syXSwgY3VyW2tdKTtcbiAgICB9XG4gICAgcHJldiA9IGN1cjtcbiAgfVxuICAvLyBGYXNjaWEgYmFuZCBhbmQgc29mZml0LCBzbyB0aGUgcm9vZiBpcyBhIHNvbGlkIHJhdGhlciB0aGFuIGEgc2hlbGwuIEFuIG9wZW4gc2hlbGwgbGV0cyB0aGVcbiAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55IGxvdyBhbmdsZS5cbiAgY29uc3QgZSA9IHJpbmcoMCk7XG4gIGNvbnN0IGxvdyA9IGUubWFwKChwKSA9PiBbcFswXSwgcFsxXSAtIGRyb3AsIHBbMl1dKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgIHB1c2gobG93W2tdLCBlW2tdLCBlW2syXSk7XG4gICAgcHVzaChsb3dba10sIGVbazJdLCBsb3dbazJdKTtcbiAgfVxuICBmb3IgKGxldCBrID0gMTsgayA8IDc7IGsrKykgcHVzaChsb3dbMF0sIGxvd1trICsgMV0sIGxvd1trXSk7ICAgLy8gc29mZml0IGZhbiwgZmFjaW5nIGRvd25cblxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFJJQkJFRCBkb21lIC0tIGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIHdob3NlIHJhZGl1cyBpcyBtb2R1bGF0ZWQgYXJvdW5kIHRoZSBheGlzLCBzbyBpdCByZWFkc1xuICogYXMgdGhlIG1lbG9uLXJpYmJlZCBkb21lIG9mIGEgbW9zcXVlIHJhdGhlciB0aGFuIGEgc21vb3RoIGhlbWlzcGhlcmUuXG4gKlxuICogTGF0aGVHZW9tZXRyeSBjYW5ub3QgZG8gdGhpczogYSBsYXRoZSByZXZvbHZlcyBvbmUgcHJvZmlsZSBhdCBvbmUgcmFkaXVzIHBlciBoZWlnaHQsIGFuZCByaWJzIGFyZVxuICogYSB2YXJpYXRpb24gQVJPVU5EIHRoZSBheGlzLCBub3QgYWxvbmcgaXQuIFNvIHRoZSBzdXJmYWNlIGlzIGdlbmVyYXRlZCBkaXJlY3RseSwgc2FtcGxpbmdcbiAqIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgIHBlciBzZWN0b3IuIFRoZSByaWJzIGFyZSB0aGUgcmVhc29uIHRoZSBkb21lIGlzIHJlY29nbmlzYWJsZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbSAtLSBhIHNtb290aCBncmVlbiBoZW1pc3BoZXJlIHJlYWRzIGFzIGEgd2F0ZXIgdGFuay5cbiAqL1xuZnVuY3Rpb24gcmliYmVkRG9tZShwcm9maWxlOiBudW1iZXJbXVtdLCByaWJzOiBudW1iZXIsIGFtcDogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsbGV5PzogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgY29sOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUaGUgcmlicyBhcmUgbm90IG9ubHkgYSBzaGFwZS4gT24gdGhlIG1vc3F1ZSdzIGRvbWVzIHRoZSBjcmVzdHMgYXJlIHBhbGUgYW5kIHRoZSB2YWxsZXlzIGFyZVxuICAvLyBncmVlbiwgYW5kIHRoYXQgc3RyaXBlIGlzIG1vc3Qgb2Ygd2hhdCB0aGUgZG9tZSByZWFkcyBhcyBhdCBkaXN0YW5jZS4gSXQgaXMgY2FycmllZCBhcyBhXG4gIC8vIHBlci12ZXJ0ZXggTVVMVElQTElFUiBvZmYgdGhlIHNhbWUgY29zaW5lIHRoYXQgc2hhcGVzIHRoZSByaWIgLS0gdHdvIG1lYXN1cmVtZW50cywgdGhlIGNyZXN0XG4gIC8vIGNvbG91ciBvbiB0aGUgbWF0ZXJpYWwgYW5kIHRoZSB2YWxsZXkgYXMgdGhlIHJhdGlvIGJldHdlZW4gdGhlbSAtLSBzbyB0aGUgc3RyaXBpbmcgY29zdHMgYW5cbiAgLy8gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgdGV4dHVyZSBzZXQgb3IgYSBzZWNvbmQgZHJhdyBjYWxsLlxuICBjb25zdCB0aW50ID0gKGo6IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsbGV5KSByZXR1cm4gWzEsIDEsIDFdO1xuICAgIC8vIFJhaXNlZCB0byAwLjU1IHJhdGhlciB0aGFuIGxlZnQgbGluZWFyLiBBIGNvc2luZSBzcGVuZHMgaGFsZiBpdHMgYXJlYSBuZWFyIGVhY2ggZXh0cmVtZSwgYW5kXG4gICAgLy8gdGhhdCByZW5kZXJzIGEgZG9tZSB0aGF0IGlzIHBhbGUgb3ZlcmFsbCB3aGVyZSB0aGUgcGxhdGUncyBpcyBncmVlbiBvdmVyYWxsOiB0aGUgY3Jlc3QgaXMgYVxuICAgIC8vIG5hcnJvdyBoaWdobGlnaHQgb24gYSByZWFsIHJpYiwgbm90IGhhbGYgb2YgaXQuIFRoZSBleHBvbmVudCB3aWRlbnMgdGhlIHZhbGxleS5cbiAgICBjb25zdCBmID0gTWF0aC5wb3coKDEgLSBNYXRoLmNvcyhyaWJzICogKChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnKSkpIC8gMiwgMC41NSk7XG4gICAgcmV0dXJuIFsxICsgKHZhbGxleVswXSAtIDEpICogZiwgMSArICh2YWxsZXlbMV0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzJdIC0gMSkgKiBmXTtcbiAgfTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aCA9IChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgIGNvbnN0IGYgPSAxICsgYW1wICogTWF0aC5jb3MocmlicyAqIHRoKTtcbiAgICBjb25zdCByID0gcHJvZmlsZVtpXVswXSAqIGY7XG4gICAgcmV0dXJuIFtNYXRoLnNpbih0aCkgKiByLCBwcm9maWxlW2ldWzFdLCBNYXRoLmNvcyh0aCkgKiByXTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhdChpLCBqKSwgYiA9IGF0KGksIGogKyAxKSwgYyA9IGF0KGkgKyAxLCBqICsgMSksIGQgPSBhdChpICsgMSwgaik7XG4gICAgICBwdXNoKGEsIGIsIGMpO1xuICAgICAgcHVzaChhLCBjLCBkKTtcbiAgICAgIGNvbnN0IHRhID0gdGludChqKSwgdGIgPSB0aW50KGogKyAxKTtcbiAgICAgIGNvbC5wdXNoKC4uLnRhLCAuLi50YiwgLi4udGIsIC4uLnRhLCAuLi50YiwgLi4udGEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgaWYgKHZhbGxleSkgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbCksIDMpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFBPSU5URUQgYXJjaCBwbGF0ZSAtLSB0aGUgdHdvLWNlbnRyZWQgYXJjaCBvZiBhIG1vc3F1ZSwgbm90IHRoZSBoYWxmLXJvdW5kIG9mIGEgUm9tYW4gb25lLlxuICogYGFyY2hlZFBsYXRlYCBhYm92ZSBzd2VlcHMgYSBzaW5nbGUgc2VtaWNpcmNsZSwgd2hpY2ggaXMgdGhlIHdyb25nIGFyY2ggaGVyZSBhbmQgcmVhZHMgYXMgYVxuICogcmFpbHdheSB2aWFkdWN0OyB0aGlzIG9uZSBydW5zIGVhY2ggc2lkZSB1cCB0byBhIHNoYXJlZCBhcGV4IHRocm91Z2ggYSBxdWFkcmF0aWMsIHdoaWNoIGdpdmVzIHRoZVxuICogb2dlZSBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcG9pbnRlZEFyY2hTaGFwZSh3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBidWlsZCA9ICh0YXJnZXQ6IFRIUkVFLlNoYXBlIHwgVEhSRUUuUGF0aCwgd3c6IG51bWJlciwgc3A6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaHcgPSB3dyAvIDI7XG4gICAgdGFyZ2V0Lm1vdmVUbyhodywgc2wpO1xuICAgIHRhcmdldC5saW5lVG8oaHcsIHNwKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbyhodywgc3AgKyByaXNlICogMC43MiwgMCwgc3AgKyByaXNlKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbygtaHcsIHNwICsgcmlzZSAqIDAuNzIsIC1odywgc3ApO1xuICAgIHRhcmdldC5saW5lVG8oLWh3LCBzbCk7XG4gICAgdGFyZ2V0LmNsb3NlUGF0aCgpO1xuICB9O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBidWlsZChzaGFwZSwgdywgc3ByaW5nLCBhcGV4UmlzZSwgc2lsbCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgYnVpbGQocCwgaG9sZS53LCBob2xlLnNwcmluZywgaG9sZS5hcGV4UmlzZSwgaG9sZS5zaWxsKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFRBUEVSSU5HIFRVQkUgYWxvbmcgK1osIGJ1aWx0IGZyb20gYSBsaXN0IG9mIHN0YXRpb25zLiBFYWNoIHN0YXRpb24gaXNcbiAqIFt6LCBjZW50cmVYLCBjZW50cmVZLCByYWRpdXNYLCByYWRpdXNZXSwgYW5kIGNvbnNlY3V0aXZlIHN0YXRpb25zIGFyZSBqb2luZWQgYnkgYSByaW5nIG9mIGBzZWdgXG4gKiBwb2ludHMsIHNvIHRoZSByYWRpdXMsIHRoZSBjZW50cmUgYW5kIHRoZSBlbGxpcHNlIHJhdGlvIGNhbiBhbGwgdmFyeSBhbG9uZyB0aGUgbGVuZ3RoLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9ubHkgT1JHQU5JQyBmb3JtIGluIHRoZSB3aG9sZSBraXQsIGFuZCBpdCBleGlzdHMgZm9yIG9uZSBwcm9wOiBhIHJlY2xpbmluZyBmaWd1cmUgaXNcbiAqIGEgbG9uZyBzb2Z0IG1hc3Mgd2hvc2Ugc2VjdGlvbiBjaGFuZ2VzIGF0IGV2ZXJ5IHBvaW50IGFsb25nIGl0IC0tIHNob3VsZGVyIHRvIHdhaXN0IHRvIGhpcCB0b1xuICogY2FsZiAtLSBhbmQgbmVpdGhlciBhIGxhdGhlIG5vciBhIHN0YWNrIG9mIGJveGVzIGNhbiBzYXkgdGhhdC4gQSBib3ggZGVjb21wb3NpdGlvbiBvZiBhIGx5aW5nXG4gKiBib2R5IGlzIG5vdCBhIGxvdy1wb2x5IGJvZHksIGl0IGlzIGEgcGlsZSBvZiBsdWdnYWdlLlxuICpcbiAqIEEgc3RhdGlvbiB3aXRoIGEgcmFkaXVzIGF0IG9yIG5lYXIgemVybyBjbG9zZXMgdGhlIHR1YmUsIHNvIHRoZSBlbmRzIGNhbiBiZSBjYXBwZWQgYnkgdGhlXG4gKiBzdGF0aW9uIGxpc3QgaXRzZWxmIHJhdGhlciB0aGFuIGJ5IGEgc2VwYXJhdGUgZmFuLlxuICovXG5mdW5jdGlvbiB0dWJlQWxvbmcoc3RhdGlvbnM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGNvbnN0IGF0ID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgW3osIGN4LCBjeSwgcngsIHJ5XSA9IHN0YXRpb25zW2ldO1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgcmV0dXJuIFtjeCArIE1hdGguc2luKHRoKSAqIHJ4LCBjeSArIE1hdGguY29zKHRoKSAqIHJ5LCB6XTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gYXQoaSwgaiksIGIgPSBhdChpICsgMSwgaiksIGMgPSBhdChpICsgMSwgaiArIDEpLCBkID0gYXQoaSwgaiArIDEpO1xuICAgICAgcHVzaChhLCBiLCBjKTtcbiAgICAgIHB1c2goYSwgYywgZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgY3VybGVkIGhvcm46IGBuYCB0YXBlcmluZyBib3ggc2VnbWVudHMgc2FtcGxlZCBhbG9uZyBhIHNpbmUsIGVhY2ggcm90YXRlZCB0byBpdHMgb3duIHRhbmdlbnQuXG4gKiBTaGFyZWQgYnkgdGhlIHVib3NvdCdzIGNob2ZhLCB0aGUgcHJhbmcncyB0cmlkZW50IHByb25ncyBhbmQgdGhlIENoaW5lc2Ugc2hyaW5lJ3MgZmx5aW5nIGVhdmVzLFxuICogYmVjYXVzZSBhbGwgdGhyZWUgYXJlIHRoZSBzYW1lIHByb2JsZW0gLS0gYSBzdHJhaWdodCBzcGlrZSBhdCBhIHJvb2YgZW5kIHJlYWRzIGFzIGEgbGlnaHRuaW5nIHJvZFxuICogYW5kIHRoZSBjdXJsIGlzIHRoZSB3aG9sZSBmZWF0dXJlLlxuICovXG5mdW5jdGlvbiBjdXJsZWRIb3JuKHJlYWNoOiBudW1iZXIsIHJpc2U6IG51bWJlciwgdGhpY2s6IG51bWJlciwgbiA9IDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYXQgPSAodTogbnVtYmVyKSA9PiBbcmVhY2ggKiBNYXRoLnNpbih1ICogTWF0aC5QSSAqIDAuNDYpLCByaXNlICogdV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IHcgPSB0aGljayAqICgxIC0gaiAvIG4pICsgdGhpY2sgKiAwLjI4O1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgTWF0aC5oeXBvdChkeCwgZHkpICsgdGhpY2sgKiAwLjIsIHcpO1xuICAgIGcucm90YXRlWihNYXRoLmF0YW4yKC1keCwgZHkpKTtcbiAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VHZW9zKHNlZ3MpO1xufVxuXG4vKipcbiAqIFJhbXAgYSBwZXItdmVydGV4IHRpbnQgb3ZlciBhIGhlaWdodCBiYW5kLCBhcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ci5cbiAqXG4gKiBUaGlzIGlzIGhvdyBhIGxvY2FsIG1hdGVyaWFsIG92ZXJyaWRlIGdldHMgZGVsaXZlcmVkIG9uIGEgbWVyZ2VkIGNvbXBvbmVudCB0aGF0IGlzIG9uZSBtZXNoIGFuZFxuICogbXVzdCBzdGF5IG9uZSBkcmF3IGNhbGw6IGEgc2Vjb25kIG1hdGVyaWFsIHdvdWxkIGNvc3QgYSBzdWJtaXNzaW9uIGFuZCBhIHNoYWRlciBzd2l0Y2ggdG8gc2F5XG4gKiB0aGF0IHRoZSBib3R0b20gb2YgYSB3YWxsIGlzIGRpcnRpZXIgdGhhbiB0aGUgdG9wLiBgcmdiMGAgaXMgdGhlIG1lYXN1cmVkIHRpbnQgYXQgeTAgZXhwcmVzc2VkXG4gKiBhcyBhIGZyYWN0aW9uIG9mIHRoZSBtYXRlcmlhbCdzIG93biBtZWFzdXJlZCBhbGJlZG8sIHNvIHRoZSB0b3Agb2YgdGhlIGJhbmQgaXMgdW50aW50ZWQgMS4wIGFuZFxuICogdGhlIG51bWJlcnMgYmVsb3cgc3RheSB0cmFjZWFibGUgdG8gdHdvIGNyb3AgbWVhc3VyZW1lbnRzIHJhdGhlciB0aGFuIHRvIGEgY2hvc2VuIGRhcmtlbmluZy5cbiAqL1xuZnVuY3Rpb24gdGludEJ5SGVpZ2h0KGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHJnYjA6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHAuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSBjb2xbaSAqIDMgKyBjXSA9IHJnYjBbY10gKyAoMSAtIHJnYjBbY10pICogdDtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9zcXVlTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdNb3NxdWUnO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIG1hdGVyaWFsIHdpdGggYHZlcnRleENvbG9yc2AgcmVhZHMgYSBgY29sb3JgIGF0dHJpYnV0ZSBvdXQgb2YgRVZFUlkgZ2VvbWV0cnkgYm91bmQgdG8gaXQsIGFuZFxuICAgKiBhIGdlb21ldHJ5IHRoYXQgaGFzIG5vbmUgaGFuZHMgdGhlIHNoYWRlciBhbiB1bmRlZmluZWQgYXR0cmlidXRlIC0tIHdoaWNoIGNvbWVzIGJhY2sgYXNcbiAgICogKDAsIDAsIDApIGFuZCByZW5kZXJzIHRoZSBtZXNoIEJMQUNLLiBUaGF0IGlzIG5vdCBhIGh5cG90aGV0aWNhbDogdGhlIHVib3NvdCdzIHdhbGwgYm9keSBhbmRcbiAgICogaXRzIGVpZ2h0IGJvdW5kYXJ5IHN0b25lcyBzaGlwcGVkIGFzIGJsYWNrIHNpbGhvdWV0dGVzIGZyb20gb25lIHRpbnRlZCBwbGF0Zm9ybSBzaGFyaW5nIHRoZWlyXG4gICAqIHN0b25lIG1hdGVyaWFsLCBhbmQgdGhlIGZhaWx1cmUgaXMgc2lsZW50IGJlY2F1c2UgdGhlIHRpbnRlZCBjb21wb25lbnQgaXRzZWxmIGxvb2tzIHBlcmZlY3QuXG4gICAqXG4gICAqIEFuIEluc3RhbmNlZE1lc2ggaGlkZXMgaXQgLS0gaXQgZmFsbHMgYmFjayB0byBpbnN0YW5jZUNvbG9yIGFuZCBjb21lcyBvdXQgd2hpdGUgLS0gc28gdGhlIHNhbWVcbiAgICogbWlzdGFrZSBvbiB0aGUgY2hlZGkncyBuaWNoZSBmcmFtZXMgcmVuZGVyZWQgY29ycmVjdGx5IGFuZCB0YXVnaHQgbm90aGluZy4gR3VhcmQgaXQgaGVyZSwgb25jZSxcbiAgICogZm9yIGV2ZXJ5IGdlb21ldHJ5OiBubyBjb2xvciBhdHRyaWJ1dGUgYW5kIGEgdmVydGV4Q29sb3JzIG1hdGVyaWFsIG1lYW5zIGZpbGwgd2l0aCB3aGl0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGd1YXJkVmVydGV4Q29sb3JzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpIHtcbiAgICBpZiAoIW1hdCB8fCAhbWF0LnZlcnRleENvbG9ycyB8fCBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpKSByZXR1cm47XG4gICAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLmZpbGwoMSksIDMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgLy8gc2V0Q29sb3JBdCBNVUxUSVBMSUVTIHdpdGggbWF0ZXJpYWwuY29sb3IsIHNvIGFuIGluc3RhbmNlZCBtYXRlcmlhbCBjYXJyeWluZyBwZXItaW5zdGFuY2VcbiAgICAgIC8vIHRvbmVzIG11c3QgYmUgd2hpdGUgb3IgZXZlcnkgdG9uZSBjb21lcyBvdXQgZGFya2VuZWQgYnkgdGhlIGJhc2UuXG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuICAvKiogRm91ciBpbnN0YW5jZXMgYXQgOTAtZGVncmVlIHlhdyBhYm91dCB0aGUgYXhpcyAtLSB0aGUgY29ybmVyL2ZhY2UgcmVwZXRpdGlvbiB0aGF0IGV2ZXJ5XG4gICAqICBidWlsZGluZyBpbiB0aGlzIHNldCB1c2VzIGZvciBuaWNoZXMsIGZpbmlhbHMsIGJvdW5kYXJ5IHN0b25lcyBhbmQgY29ybmVyIGRvbWVzLiAqL1xuICBmdW5jdGlvbiBxdWFkKHJhZGl1czogbnVtYmVyLCB5OiBudW1iZXIsIHBoYXNlID0gMCk6IFRIUkVFLk1hdHJpeDRbXSB7XG4gICAgcmV0dXJuIFswLCAxLCAyLCAzXS5tYXAoKGkpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBwaGFzZSArIGkgKiBNYXRoLlBJIC8gMjtcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKE1hdGguc2luKGEpICogcmFkaXVzLCB5LCBNYXRoLmNvcyhhKSAqIHJhZGl1cyksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgYSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgTW9vcmlzaCBhcmNoXG4gICAqIFRoZSBhcmNoIHRoZSBwbGF0ZSBhbmQgdGhlIE1lc2h5IHByb3h5J3MgZnJvbnQgZWxldmF0aW9uIGJvdGggc2hvdyBvbiB0aGUgZG9vcndheXMsIHRoZSBibGluZFxuICAgKiBuaWNoZXMgYW5kIHRoZSBnYXRlOiB2ZXJ0aWNhbCBqYW1icywgYSBzaG91bGRlciB0aGF0IHN0ZXBzIE9VVCBhdCB0aGUgc3ByaW5nICh0aGUgaG9yc2VzaG9lXG4gICAqIG92ZXJoYW5nKSwgYSByb3VuZCBsb2JlLCBhbmQgYW4gb2dlZSBwb2ludC4gVGhlIHR3by1jZW50cmVkIGxhbmNldCBpbiB0aGUgc2hhcmVkIHByZWFtYmxlIGhhc1xuICAgKiBub25lIG9mIHRoYXQgYW5kIHJlYWQgYXMgYSBjaGFwZWwgd2luZG93LiBUaGUgbG9iZSBpcyBhIGNpcmNsZSBjZW50cmVkIGEgbGl0dGxlIGFib3ZlIHRoZSBzcHJpbmdcbiAgICogd2hvc2Ugd2lkZXN0IHBvaW50IGlzIHRoZSBzaG91bGRlcjsgdGhlIHBvaW50IGlzIGEgcXVhZHJhdGljIGZyb20gdGhlIGxvYmUncyB0YW5nZW50IHRvIHRoZSBhcGV4LFxuICAgKiBzbyB0aGUgb3V0bGluZSBpcyB0YW5nZW50LWNvbnRpbnVvdXMgYXQgdGhlIGluZmxlY3Rpb24uICovXG4gIGNvbnN0IG1vb3Jpc2hBcmNoUGF0aCA9ICh0YXJnZXQ6IFRIUkVFLlBhdGgsIHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIHJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkZXI6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGh3ID0gdyAvIDIsIHN3ID0gaHcgKyBzaG91bGRlcjtcbiAgICBjb25zdCBhID0gMC4yMiAqIHN3LCBSID0gTWF0aC5oeXBvdChzdywgYSksIGN5ID0gc3ByaW5nICsgYTtcbiAgICBjb25zdCB0aCA9IE1hdGguYXNpbihNYXRoLm1pbigwLjk4NSwgTWF0aC5tYXgoMC41LCAoMC43MiAqIHJpc2UgLSBhKSAvIFIpKSk7XG4gICAgY29uc3QgcHggPSBSICogTWF0aC5jb3ModGgpLCBweSA9IGN5ICsgUiAqIE1hdGguc2luKHRoKTtcbiAgICBjb25zdCB0eCA9IC1NYXRoLnNpbih0aCksIHR5ID0gTWF0aC5jb3ModGgpO1xuICAgIGNvbnN0IGR4ID0gTWF0aC5jb3MoMS4yNTY2KSwgZHkgPSAtTWF0aC5zaW4oMS4yNTY2KTtcbiAgICBjb25zdCBheCA9IDAsIGF5ID0gc3ByaW5nICsgcmlzZTtcbiAgICBjb25zdCBkZXQgPSB0eCAqICgtZHkpIC0gKC1keCkgKiB0eTtcbiAgICBsZXQgcyA9ICgoYXggLSBweCkgKiAoLWR5KSAtICgtZHgpICogKGF5IC0gcHkpKSAvIGRldDtcbiAgICBpZiAoIShzID4gMCkgfHwgIWlzRmluaXRlKHMpKSBzID0gMC4xICogUjtcbiAgICBjb25zdCBjeHAgPSBweCArIHMgKiB0eCwgY3lwID0gcHkgKyBzICogdHk7XG4gICAgY29uc3QgdGgwID0gLU1hdGguYXNpbihhIC8gUik7XG4gICAgY29uc3QgbiA9IDg7XG4gICAgdGFyZ2V0Lm1vdmVUbyhodywgc2lsbCk7XG4gICAgdGFyZ2V0LmxpbmVUbyhodywgc3ByaW5nKTtcbiAgICBpZiAoc2hvdWxkZXIgPiAwKSB0YXJnZXQubGluZVRvKHN3LCBzcHJpbmcpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykgeyBjb25zdCB0ID0gdGgwICsgKHRoIC0gdGgwKSAqIChpIC8gbik7IHRhcmdldC5saW5lVG8oUiAqIE1hdGguY29zKHQpLCBjeSArIFIgKiBNYXRoLnNpbih0KSk7IH1cbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbyhjeHAsIGN5cCwgYXgsIGF5KTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbygtY3hwLCBjeXAsIC1weCwgcHkpO1xuICAgIGZvciAobGV0IGkgPSBuIC0gMTsgaSA+PSAwOyBpLS0pIHsgY29uc3QgdCA9IHRoMCArICh0aCAtIHRoMCkgKiAoaSAvIG4pOyB0YXJnZXQubGluZVRvKC1SICogTWF0aC5jb3ModCksIGN5ICsgUiAqIE1hdGguc2luKHQpKTsgfVxuICAgIHRhcmdldC5saW5lVG8oLWh3LCBzcHJpbmcpO1xuICAgIHRhcmdldC5saW5lVG8oLWh3LCBzaWxsKTtcbiAgICB0YXJnZXQuY2xvc2VQYXRoKCk7XG4gIH07XG4gIGNvbnN0IG1vb3Jpc2hBcmNoU2hhcGUgPSAodzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsIHNob3VsZGVyOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsIHNob3VsZGVyOiBudW1iZXIgfSkgPT4ge1xuICAgIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgbW9vcmlzaEFyY2hQYXRoKHNoYXBlLCB3LCBzcHJpbmcsIHJpc2UsIHNpbGwsIHNob3VsZGVyKTtcbiAgICBpZiAoaG9sZSkgeyBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTsgbW9vcmlzaEFyY2hQYXRoKHAsIGhvbGUudywgaG9sZS5zcHJpbmcsIGhvbGUucmlzZSwgaG9sZS5zaWxsLCBob2xlLnNob3VsZGVyKTsgc2hhcGUuaG9sZXMucHVzaChwKTsgfVxuICAgIHJldHVybiBzaGFwZTtcbiAgfTtcbiAgLyoqIEEgZmxhdCBjcmVzY2VudDogb3V0ZXIgY2lyY2xlIFIgYXQgdGhlIG9yaWdpbiwgaW5uZXIgY2lyY2xlIHJpIG9mZnNldCBieSBvZmYgdG93YXJkcyAreCwgdGhlXG4gICAqICBib2R5IG9uIC14IGFuZCB0aGUgaG9ybnMgYXQgK3guIFNhbXBsZWQgYXMgYSBwb2x5Z29uIHNvIGl0IGNhbiBiZSBleHRydWRlZCBhcyBvbmUgcGxhdGUuICovXG4gIGNvbnN0IGNyZXNjZW50U2hhcGUgPSAoUjogbnVtYmVyLCByaTogbnVtYmVyLCBvZmY6IG51bWJlciwgbjogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeGkgPSAoUiAqIFIgLSByaSAqIHJpICsgb2ZmICogb2ZmKSAvICgyICogb2ZmKTtcbiAgICBjb25zdCB5aSA9IE1hdGguc3FydChNYXRoLm1heCgwLCBSICogUiAtIHhpICogeGkpKTtcbiAgICBjb25zdCBhMCA9IE1hdGguYXRhbjIoeWksIHhpKSwgYjAgPSBNYXRoLmF0YW4yKHlpLCB4aSAtIG9mZik7XG4gICAgY29uc3Qgc2ggPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICBzaC5tb3ZlVG8oeGksIHlpKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpKyspIHsgY29uc3QgdCA9IGEwICsgKDIgKiBNYXRoLlBJIC0gMiAqIGEwKSAqIChpIC8gbik7IHNoLmxpbmVUbyhSICogTWF0aC5jb3ModCksIFIgKiBNYXRoLnNpbih0KSk7IH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG47IGkrKykgeyBjb25zdCB0ID0gLWIwIC0gKDIgKiBNYXRoLlBJIC0gMiAqIGIwKSAqIChpIC8gbik7IHNoLmxpbmVUbyhvZmYgKyByaSAqIE1hdGguY29zKHQpLCByaSAqIE1hdGguc2luKHQpKTsgfVxuICAgIHNoLmNsb3NlUGF0aCgpO1xuICAgIHJldHVybiBzaDtcbiAgfTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvdXJ0eWFyZCB3YWxsXG4gICAqIEZvdXIgcnVucyBhbmQgYSBnYXRlLCBhbGwgdGhlIHNhbWUgcmVuZGVyIGFuZCB0aGVyZWZvcmUgT05FIGNvbXBvbmVudCBhbmQgT05FIGRyYXcgY2FsbC4gVGhlXG4gICAqIHNpZGUgcnVucyBjYXJyeSB0aGUgZnVsbCBkZXB0aCBhbmQgdGhlIGZyb250IGFuZCBiYWNrIHJ1bnMgc3RvcCBiZXR3ZWVuIHRoZW06IHJ1biB0byBmdWxsXG4gICAqIHdpZHRoLCBldmVyeSBjb3JuZXIgd291bGQgcHV0IHR3byBvdXRlciBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5LiAqL1xuICB7XG4gICAgY29uc3QgQyA9IEcuY291cnQ7XG4gICAgY29uc3QgY2MgPSBDLmh4IC0gQy50IC8gMiwgY2kgPSBDLmh4IC0gQy50LCBkZCA9IEMuaHogLSBDLnQgLyAyLCBkaSA9IEMuaHogLSBDLnQ7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXG4gICAgICBib3hBdCgtY2MsIEMuaCAvIDIsIDAsIEMudCwgQy5oLCBDLmh6ICogMiksXG4gICAgICBib3hBdChjYywgQy5oIC8gMiwgMCwgQy50LCBDLmgsIEMuaHogKiAyKSxcbiAgICAgIGJveEF0KDAsIEMuaCAvIDIsIC1kZCwgY2kgKiAyLCBDLmgsIEMudCksXG4gICAgXTtcbiAgICAvLyBUaGUgK1ogcnVuIGlzIGJyb2tlbiBieSB0aGUgZ2F0ZTogdHdvIHNlZ21lbnRzIGZsYW5raW5nIGl0IGFuZCBPTkUgZ2F0ZSBibG9jayBzcGFubmluZyB0aGVcbiAgICAvLyBweWxvbnMgYW5kIHRoZSBoZWFkIHRvZ2V0aGVyLCB3aXRoIHRoZSBkb29yd2F5IGN1dCB0aHJvdWdoIGl0IGFzIGEgaG9sZS4gVGhlIGZpcnN0IGJ1aWxkIHN0b29kXG4gICAgLy8gdHdvIHB5bG9uIGJveGVzIGluc2lkZSBhIHBvaW50ZWQtYXJjaCBwbGF0ZSBvZiB0aGUgc2FtZSBkZXB0aCwgd2hpY2ggcHV0IHRoZSBwbGF0ZSdzIHBvaW50XG4gICAgLy8gYWJvdmUgdGhlIGJsb2NrIGFuZCB0aGUgcHlsb25zJyBmYWNlcyBpbiB0aGUgcGxhdGUncyBwbGFuZTsgdGhlIHBsYXRlJ3MgZ2F0ZSBpcyBhIGZsYXQtdG9wcGVkXG4gICAgLy8gYmxvY2sgd2l0aCBhIE1vb3Jpc2ggYXJjaCB0aHJvdWdoIGl0LCBhbmQgb25lIGV4dHJ1c2lvbiBzYXlzIGV4YWN0bHkgdGhhdC5cbiAgICBjb25zdCBzZWdMZW4gPSBjaSAtIEMuZ2F0ZUhhbGYgLSBDLnB5bG9uO1xuICAgIHBhcnRzLnB1c2goYm94QXQoLShDLmdhdGVIYWxmICsgQy5weWxvbiArIHNlZ0xlbiAvIDIpLCBDLmggLyAyLCBkZCwgc2VnTGVuLCBDLmgsIEMudCkpO1xuICAgIHBhcnRzLnB1c2goYm94QXQoQy5nYXRlSGFsZiArIEMucHlsb24gKyBzZWdMZW4gLyAyLCBDLmggLyAyLCBkZCwgc2VnTGVuLCBDLmgsIEMudCkpO1xuICAgIHtcbiAgICAgIGNvbnN0IEdXID0gKEMuZ2F0ZUhhbGYgKyBDLnB5bG9uKSAqIDIsIEdBID0gQy5nYXRlO1xuICAgICAgY29uc3QgYmxvY2sgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgIGJsb2NrLm1vdmVUbygtR1cgLyAyLCAwKTsgYmxvY2subGluZVRvKEdXIC8gMiwgMCk7IGJsb2NrLmxpbmVUbyhHVyAvIDIsIEMuZ2F0ZUgpO1xuICAgICAgYmxvY2subGluZVRvKC1HVyAvIDIsIEMuZ2F0ZUgpOyBibG9jay5jbG9zZVBhdGgoKTtcbiAgICAgIGNvbnN0IGhvbGUgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgICAgbW9vcmlzaEFyY2hQYXRoKGhvbGUsIEdBLncsIEdBLnNwcmluZywgR0EucmlzZSwgMCwgR0Euc2hvdWxkZXIpO1xuICAgICAgYmxvY2suaG9sZXMucHVzaChob2xlKTtcbiAgICAgIGNvbnN0IGdhdGUgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KGJsb2NrLCB7IGRlcHRoOiBDLnQsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDggfSk7XG4gICAgICBnYXRlLnRyYW5zbGF0ZSgwLCAwLCBkZCAtIEMudCAvIDIpO1xuICAgICAgZ2F0ZS5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICAgICAgcGFydHMucHVzaChnYXRlKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZW8gPSBtZXJnZUdlb3MocGFydHMpO1xuICAgIC8vIFRoZSBwbGF0ZSdzIHdhbGxzIGFyZSBzdHJlYWtlZCBibGFjayB3aXRoIHJhaW4gd2FzaCBmcm9tIHRoZSB0b3AgZG93biAtLSB0aGUgcmV2ZXJzZSBvZiBldmVyeVxuICAgIC8vIG90aGVyIHByb3AgaW4gdGhpcyBiYXRjaCwgd2hlcmUgdGhlIGRpcnQgY29sbGVjdHMgYXQgdGhlIGJvdHRvbS4gVGhlIHRpbnQgdGhlcmVmb3JlIHJ1bnMgdGhlXG4gICAgLy8gb3RoZXIgd2F5OiBjbGVhbiBhdCB0aGUgYmFzZSwgZGFya2VuaW5nIHRvd2FyZHMgdGhlIGNvcGluZy5cbiAgICB0aW50QnlIZWlnaHQoZ2VvLCBDLmgsIDAuMzAsIFswLjcyLCAwLjczLCAwLjcwXSk7XG4gICAgYWRkKCdjb3VydC13YWxsJywgJ0NvdXJ0eWFyZCB3YWxsIGFuZCBnYXRlJywgZ2VvLCAnd2hpdGUnKTtcbiAgICBjb2xsaWRlcnNbJ2NvdXJ0LXdhbGwnXSA9IHtcbiAgICAgIHNoYXBlOiAnYm94JywgbG9jYWxDZW50ZXI6IFswLCA5LjAsIDBdLCBoYWxmRXh0ZW50czogWzcuMCwgOS4wLCA4LjBdLFxuICAgICAgbm90ZXM6ICdBc3NldCBkZWNsYXJlcyBjb2xsaWRlciBcImJveFwiLiBPbmUgY29udmV4IHByb3h5IG92ZXIgdGhlIHdob2xlIGVudmVsb3BlOyBhIGxldmVsICdcbiAgICAgICAgICAgKyAnYnVpbGRlciBjb2xsaWRlcyB3aXRoIHRoZSBjb21wb3VuZCwgbm90IHdpdGggdGhlIG1pbmFyZXQgc2VwYXJhdGVseS4nLFxuICAgIH07XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHByYXllciBoYWxsXG4gICAqIEEgU09MSUQgd2hpdGUgYmxvY2suIFRoZSBtb3NxdWUgaXMgYW4gZXh0ZXJpb3Igc2hlbGwgb25seSBldmVyIHNlZW4gZnJvbSBvdXRzaWRlLCBzbyB0aGVyZSBpc1xuICAgKiBubyBpbnRlcmlvcjogaXQgd291bGQgY29zdCBkcmF3IGNhbGxzLCBnZW9tZXRyaWVzIGFuZCBWUkFNIGZvciBzb21ldGhpbmcgbm9ib2R5IHNlZXMsIGFuZCBhXG4gICAqIHNvbGlkIGJvZHkgYWxzbyBtZWFucyB0aGUgYXJjYWRlIG5lZWRzIG5vIG9wZW5pbmcgY3V0IGluIGl0LiAqL1xuICB7XG4gICAgY29uc3QgSCA9IEcuaGFsbCwgRCA9IEcuZGVjaywgUCA9IEcucGFyYXBldDtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtcbiAgICAgIGJveEF0KDAsIChILnkwICsgSC55MSkgLyAyLCAoSC56QmFjayArIEguekZyb250KSAvIDIsIEguaHggKiAyLCBILnkxIC0gSC55MCwgSC56RnJvbnQgLSBILnpCYWNrKSxcbiAgICAgIGJveEF0KDAsIChELnkwICsgRC55MSkgLyAyLCAoSC56QmFjayArIEguekZyb250KSAvIDIsIEguaHggKiAyIC0gMC4zMCwgRC55MSAtIEQueTAsIEguekZyb250IC0gSC56QmFjayAtIDAuMzApLFxuICAgIF07XG4gICAgLy8gUGFyYXBldCByaW5nLCBzdGFuZGluZyAwLjA4IG0gcHJvdWQgb2YgdGhlIHdhbGxzIC0tIGEgY29waW5nIGRyaXAgZWRnZSwgYW5kIHdoYXQga2VlcHMgdGhlXG4gICAgLy8gcGFyYXBldCBmYWNlcyBvZmYgdGhlIHdhbGwgcGxhbmVzLlxuICAgIGNvbnN0IHB4ID0gSC5oeCArIDAuMDgsIHB6MCA9IEguekJhY2sgLSAwLjA4LCBwejEgPSBILnpGcm9udCArIDAuMDgsIHQgPSAwLjM0O1xuICAgIGNvbnN0IHB5ID0gKFAueTAgKyBQLnkxKSAvIDIsIHBoID0gUC55MSAtIFAueTA7XG4gICAgcGFydHMucHVzaChib3hBdCgtKHB4IC0gdCAvIDIpLCBweSwgKHB6MCArIHB6MSkgLyAyLCB0LCBwaCwgcHoxIC0gcHowKSk7XG4gICAgcGFydHMucHVzaChib3hBdChweCAtIHQgLyAyLCBweSwgKHB6MCArIHB6MSkgLyAyLCB0LCBwaCwgcHoxIC0gcHowKSk7XG4gICAgcGFydHMucHVzaChib3hBdCgwLCBweSwgcHowICsgdCAvIDIsIChweCAtIHQpICogMiwgcGgsIHQpKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KDAsIHB5LCBwejEgLSB0IC8gMiwgKHB4IC0gdCkgKiAyLCBwaCwgdCkpO1xuICAgIGNvbnN0IGdlbyA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgdGludEJ5SGVpZ2h0KGdlbywgSC55MSwgMS4yMCwgWzAuNjYsIDAuNjgsIDAuNjRdKTtcbiAgICBhZGQoJ2hhbGwnLCAnUHJheWVyIGhhbGwgYmxvY2snLCBnZW8sICd3aGl0ZScpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByb29mIGRlY2tcbiAgICogVGhlIGZsYXQgYXJlYSBiZXR3ZWVuIHRoZSBwYXJhcGV0IGFuZCB0aGUgZG9tZXMsIGluIGl0cyBvd24gZ3JleSBtYXRlcmlhbCBiZWNhdXNlIHRoZSBwbGF0ZVxuICAgKiBzaG93cyBpdCBhcyBhIGRpc3RpbmN0bHkgZGlmZmVyZW50IHN1cmZhY2UgZnJvbSB0aGUgcmVuZGVyZWQgd2FsbHMgLS0gYSBzY3JlZWQsIG5vdCBhIHJlbmRlci4gKi9cbiAge1xuICAgIGNvbnN0IEggPSBHLmhhbGwsIEQgPSBHLmRlY2s7XG4gICAgYWRkKCdyb29mLWRlY2snLCAnUm9vZiBkZWNrJywgYm94QXQoMCwgRC55MSAtIDAuMDMsIChILnpCYWNrICsgSC56RnJvbnQpIC8gMixcbiAgICAgIEguaHggKiAyIC0gMC40NCwgMC4wNiwgSC56RnJvbnQgLSBILnpCYWNrIC0gMC40NCksICdkZWNrJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBhcmFwZXQgYmFuZFxuICAgKiBBIGdyZWVuIHN0cmlwZSBhbG9uZyB0aGUgdG9wIG9mIHRoZSBwYXJhcGV0IHJpbmcuIEl0cyBvd24gY29tcG9uZW50IGJlY2F1c2UgaXQgaXMgdGhlIG9ubHlcbiAgICogRkxBVCBncmVlbiBvbiB0aGUgcHJvcDogdGhlIGRvbWVzIGNhcnJ5IGEgc3RyaXBlZCB2ZXJ0ZXggY29sb3VyIGFuZCBjYW5ub3Qgc2hhcmUgYSBtYXRlcmlhbFxuICAgKiB3aXRoIGEgc3VyZmFjZSB0aGF0IGhhcyB0byBzdGF5IG9uZSB2YWx1ZS4gKi9cbiAge1xuICAgIGNvbnN0IEggPSBHLmhhbGwsIFAgPSBHLnBhcmFwZXQ7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICAvLyBQYXJhcGV0IGJhbmQ6IGEgZ3JlZW4gc3RyaXBlIGFsb25nIHRoZSB0b3Agb2YgdGhlIHBhcmFwZXQgcmluZywgc3RhbmRpbmcgMC4wMyBtIHByb3VkIG9mIGl0LlxuICAgIGNvbnN0IHB4ID0gSC5oeCArIDAuMTEsIHB6MCA9IEguekJhY2sgLSAwLjExLCBwejEgPSBILnpGcm9udCArIDAuMTEsIHQgPSAwLjMwO1xuICAgIC8vIFRvcCBvZiB0aGUgYmFuZCBhdCA3Ljk5LCBub3QgbGV2ZWwgd2l0aCB0aGUgcGFyYXBldCdzIG93biA3Ljk1OiBsZXZlbCwgdGhlIGJhbmQncyB0b3AgZmFjZVxuICAgIC8vIGFuZCB0aGUgcGFyYXBldCdzIHRvcCBmYWNlIGFyZSB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgOTEgbTIgLS0gdGhlIGxhcmdlc3RcbiAgICAvLyBzaW5nbGUgY29wbGFuYXIgcGFpciBmb3VuZCBhbnl3aGVyZSBpbiB0aGlzIGJhdGNoLlxuICAgIGNvbnN0IGJ5ID0gUC55MSArIDAuMDQgLSBQLmJhbmQgLyAyO1xuICAgIHBhcnRzLnB1c2goYm94QXQoLShweCAtIHQgLyAyKSwgYnksIChwejAgKyBwejEpIC8gMiwgdCwgUC5iYW5kLCBwejEgLSBwejApKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KHB4IC0gdCAvIDIsIGJ5LCAocHowICsgcHoxKSAvIDIsIHQsIFAuYmFuZCwgcHoxIC0gcHowKSk7XG4gICAgcGFydHMucHVzaChib3hBdCgwLCBieSwgcHowICsgdCAvIDIsIChweCAtIHQpICogMiwgUC5iYW5kLCB0KSk7XG4gICAgcGFydHMucHVzaChib3hBdCgwLCBieSwgcHoxIC0gdCAvIDIsIChweCAtIHQpICogMiwgUC5iYW5kLCB0KSk7XG4gICAgYWRkKCdwYXJhcGV0LWJhbmQnLCAnR3JlZW4gcGFyYXBldCBiYW5kJywgbWVyZ2VHZW9zKHBhcnRzKSwgJ2dyZWVuJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBncmVhdCBkb21lIGFuZCB0aGUgbWluYXJldCdzXG4gICAqIEJvdGggcmliYmVkLCBib3RoIGluIHRoZSBzdHJpcGVkIGRvbWUgbWF0ZXJpYWwsIG1lcmdlZCBpbnRvIE9ORSBjb21wb25lbnQgYW5kIE9ORSBkcmF3IGNhbGwuXG4gICAqXG4gICAqIFRoZSByaWJzIGFyZSBnZW5lcmF0ZWQgZ2VvbWV0cnkgcmF0aGVyIHRoYW4gYSBtYXRlcmlhbDogTGF0aGVHZW9tZXRyeSByZXZvbHZlcyBvbmUgcHJvZmlsZSBhdFxuICAgKiBvbmUgcmFkaXVzIHBlciBoZWlnaHQsIGFuZCBhIHJpYiBpcyBhIHZhcmlhdGlvbiBBUk9VTkQgdGhlIGF4aXMuIEEgc21vb3RoIGdyZWVuIGhlbWlzcGhlcmVcbiAgICogcmVhZHMgYXMgYSB3YXRlciB0YW5rLiAqL1xuICB7XG4gICAgY29uc3QgRCA9IEcuZG9tZSwgTU4gPSBHLm1pbmFyZXQsIFYgPSBHLnZhbGxleSBhcyBudW1iZXJbXTtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIC8vIFRoZSBncmVhdCBkb21lOiBhIHNlZ21lbnRhbCBwcm9maWxlIGEgbGl0dGxlIG1vcmUgdGhhbiBhIGhlbWlzcGhlcmUsIHNvIGl0IHNwcmluZ3MgZnJvbSBhXG4gICAgLy8gc2xpZ2h0IG92ZXJoYW5nIHRoZSB3YXkgdGhlIHBsYXRlJ3MgZG9lcyByYXRoZXIgdGhhbiBzaXR0aW5nIG9uIHRoZSBkcnVtIGxpa2UgYSBsaWQuXG4gICAgY29uc3QgcHJvZjogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IEQuc3RlcHM7IGkrKykge1xuICAgICAgY29uc3QgdDIgPSBpIC8gRC5zdGVwcztcbiAgICAgIHByb2YucHVzaChbRC5yICogTWF0aC5jb3ModDIgKiBNYXRoLlBJICogMC41KSAqICgxIC0gMC4wNiAqIHQyICogdDIpLFxuICAgICAgICAgICAgICAgICBELnkwICsgKEQueTEgLSBELnkwKSAqIE1hdGguc2luKHQyICogTWF0aC5QSSAqIDAuNSldKTtcbiAgICB9XG4gICAgcGFydHMucHVzaChyaWJiZWREb21lKHByb2YsIEQucmlicywgRC5hbXAsIEQuc2VnLCBWKSk7XG5cbiAgICAvLyBUaGUgbWluYXJldCdzIG93biBkb21lLCBzYW1lIGNvbnN0cnVjdGlvbiBhdCBhIHNpeHRoIHRoZSBzaXplLlxuICAgIGNvbnN0IG1wOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gTU4uc3RlcHM7IGkrKykge1xuICAgICAgY29uc3QgdDIgPSBpIC8gTU4uc3RlcHM7XG4gICAgICBtcC5wdXNoKFtNTi5kb21lUiAqIE1hdGguY29zKHQyICogTWF0aC5QSSAqIDAuNSksXG4gICAgICAgICAgICAgICBNTi5kb21lWVswXSArIChNTi5kb21lWVsxXSAtIE1OLmRvbWVZWzBdKSAqIE1hdGguc2luKHQyICogTWF0aC5QSSAqIDAuNSldKTtcbiAgICB9XG4gICAgY29uc3QgbWQgPSByaWJiZWREb21lKG1wLCBNTi5yaWJzLCBNTi5hbXAsIE1OLnNlZywgVik7XG4gICAgbWQudHJhbnNsYXRlKE1OLngsIDAsIE1OLnopO1xuICAgIHBhcnRzLnB1c2gobWQpO1xuICAgIGFkZCgnZG9tZXMnLCAnR3JlYXQgZG9tZSBhbmQgbWluYXJldCBkb21lJywgbWVyZ2VHZW9zKHBhcnRzKSwgJ2RvbWUnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZG9tZSBkcnVtXG4gICAqIEEgc3F1YXJlIHBvZGl1bSBhbmQgYSByb3VuZCBkcnVtIHVuZGVyIHRoZSBncmVhdCBkb21lLiBCb3RoIHdoaXRlLCBvbmUgY29tcG9uZW50LiAqL1xuICB7XG4gICAgY29uc3QgRFIgPSBHLmRydW07XG4gICAgYWRkKCdkcnVtJywgJ0RvbWUgZHJ1bScsIG1lcmdlR2VvcyhbXG4gICAgICBib3hBdCgwLCAoRFIuc3FZWzBdICsgRFIuc3FZWzFdKSAvIDIsIDAsIERSLnNxSGFsZiAqIDIsIERSLnNxWVsxXSAtIERSLnNxWVswXSwgRFIuc3FIYWxmICogMiksXG4gICAgICBjeWxBdCgwLCAoRFIuY3lsWVswXSArIERSLmN5bFlbMV0pIC8gMiwgMCwgRFIuY3lsUiwgRFIuY3lsUiAqIDEuMDQsIERSLmN5bFlbMV0gLSBEUi5jeWxZWzBdLCAzMiksXG4gICAgXSksICd3aGl0ZScpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb3JuZXIgZG9tZXNcbiAgICogRm91ciwgYXMgVFdPIEluc3RhbmNlZE1lc2ggc3lzdGVtcyBvbiBvbmUgcGxhY2VtZW50IHNjaGVkdWxlIC0tIGEgd2hpdGUgZHJ1bSBhbmQgYSBncmVlblxuICAgKiByaWJiZWQgZG9tZS4gVHdvIHN5c3RlbXMgcmF0aGVyIHRoYW4gb25lIGJlY2F1c2UgSW5zdGFuY2VkTWVzaCB0YWtlcyBhIHNpbmdsZSBtYXRlcmlhbC4gKi9cbiAge1xuICAgIGNvbnN0IFMgPSBHLnNtYWxsO1xuICAgIGNvbnN0IGRydW0gPSBjeWxBdCgwLCAwLCAwLCBTLmRydW1SLCBTLmRydW1SICogMS4wNiwgUy5kcnVtWVsxXSAtIFMuZHJ1bVlbMF0sIDIwKTtcbiAgICBhZGRJbnN0KCdzbWFsbC1kcnVtcycsICdDb3JuZXIgZG9tZSBkcnVtcycsIGRydW0sICd3aGl0ZScsXG4gICAgICAoUy5hdCBhcyBudW1iZXJbXVtdKS5tYXAoKFt4LCB6XSkgPT5cbiAgICAgICAgbmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCAoUy5kcnVtWVswXSArIFMuZHJ1bVlbMV0pIC8gMiwgeikpKTtcblxuICAgIGNvbnN0IHByb2Y6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBTLnN0ZXBzOyBpKyspIHtcbiAgICAgIGNvbnN0IHQgPSBpIC8gUy5zdGVwcztcbiAgICAgIHByb2YucHVzaChbUy5kb21lUiAqIE1hdGguY29zKHQgKiBNYXRoLlBJICogMC41KSxcbiAgICAgICAgICAgICAgICAgKFMuZG9tZVlbMV0gLSBTLmRvbWVZWzBdKSAqIE1hdGguc2luKHQgKiBNYXRoLlBJICogMC41KV0pO1xuICAgIH1cbiAgICBhZGRJbnN0KCdzbWFsbC1kb21lcycsICdDb3JuZXIgZG9tZXMnLCByaWJiZWREb21lKHByb2YsIFMucmlicywgUy5hbXAsIFMuc2VnLCBHLnZhbGxleSBhcyBudW1iZXJbXSksICdkb21lJyxcbiAgICAgIChTLmF0IGFzIG51bWJlcltdW10pLm1hcCgoW3gsIHpdKSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIFMuZG9tZVlbMF0sIHopKSk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1pbmFyZXRcbiAgICogVGhlIHJlZ2lzdHJ5IG5vdGVzIHNheSB0aGUgcGFpcmluZyBvZiBvbmUgZ3JlYXQgZG9tZSBhbmQgYSBzaW5nbGUgc2xlbmRlciBtaW5hcmV0IGlzIHdoYXQgcmVhZHNcbiAgICogYXQgZGlzdGFuY2UgYW5kIHRoYXQgbmVpdGhlciBlbGVtZW50IHdvcmtzIGFsb25lLCBzbyB0aGUgbWluYXJldCBpcyBub3QgZHJlc3Npbmc6IGl0IGlzIGhhbGZcbiAgICogdGhlIHNpbGhvdWV0dGUsIGFuZCBpdCBpcyB3aGF0IHNldHMgdGhlIGRlY2xhcmVkIDE4IG0uIFNoYWZ0LCBiYWxjb255IGFuZCB1cHBlciBzdGFnZSBtZXJnZWRcbiAgICogaW50byBvbmUgd2hpdGUgY29tcG9uZW50LiAqL1xuICB7XG4gICAgY29uc3QgTU4gPSBHLm1pbmFyZXQ7XG4gICAgYWRkKCdtaW5hcmV0JywgJ01pbmFyZXQnLCBtZXJnZUdlb3MoW1xuICAgICAgYm94QXQoTU4ueCwgTU4ueTEgLyAyLCBNTi56LCBNTi5oYWxmICogMiwgTU4ueTEsIE1OLmhhbGYgKiAyKSxcbiAgICAgIC8vIFRoZSBiYWxjb255IHNsYWIsIHN0YW5kaW5nIGNsZWFyIG9mIHRoZSBzaGFmdCBvbiBldmVyeSBzaWRlLlxuICAgICAgYm94QXQoTU4ueCwgKE1OLmJhbGNvbnlZWzBdICsgTU4uYmFsY29ueVlbMV0pIC8gMiwgTU4ueixcbiAgICAgICAgTU4uYmFsY29ueUhhbGYgKiAyLCBNTi5iYWxjb255WVsxXSAtIE1OLmJhbGNvbnlZWzBdLCBNTi5iYWxjb255SGFsZiAqIDIpLFxuICAgICAgLy8gQSB0aGlubmVyIHBhcmFwZXQgbGlwIG9uIHRvcCBvZiBpdCwgaW5zZXQgc28gbm8gdHdvIHRvcCBmYWNlcyBzaGFyZSBhIHBsYW5lLlxuICAgICAgYm94QXQoTU4ueCwgTU4uYmFsY29ueVlbMV0gKyAwLjE0LCBNTi56LCBNTi5iYWxjb255SGFsZiAqIDEuODIsIDAuMjgsIE1OLmJhbGNvbnlIYWxmICogMS44MiksXG4gICAgICBjeWxBdChNTi54LCAoTU4udXBwZXJZWzBdICsgTU4udXBwZXJZWzFdKSAvIDIgKyAwLjE2LCBNTi56LFxuICAgICAgICBNTi51cHBlclIsIE1OLnVwcGVyUiAqIDEuMDUsIE1OLnVwcGVyWVsxXSAtIE1OLnVwcGVyWVswXSAtIDAuMzIsIDE2KSxcbiAgICBdKSwgJ3doaXRlJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGFyY2FkZVxuICAgKiBGaXZlIE1vb3Jpc2ggYXJjaGVzIGFjcm9zcyB0aGUgaGFsbCdzIGZyb250IGVsZXZhdGlvbiAtLSB0aHJlZSBkb29yd2F5cyBhbmQgdHdvIGJsaW5kIG5pY2hlcyAtLVxuICAgKiBhcyBpbnN0YW5jZWQgc3lzdGVtczogYSB3aGl0ZSBzdXJyb3VuZCB3aXRoIGEgcmVhbCBhcGVydHVyZSBvbiBldmVyeSBiYXksIGEgZGFyayBwYW5lbCBiZWhpbmRcbiAgICogZWFjaCBvcGVuIGJheSwgYW5kIGEgZ3JlZW4gZmllbGQgd2l0aCBhIHJhaXNlZCB3aGl0ZSBwYW5lbCBpbiBlYWNoIGJsaW5kIG9uZS5cbiAgICpcbiAgICogVGhlIGFyY2ggaXMgdGhlIE1PT1JJU0ggb25lIHRoZSBwbGF0ZSBhbmQgdGhlIHByb3h5J3MgZnJvbnQgZWxldmF0aW9uIGJvdGggc2hvdyAtLSBzaG91bGRlcixcbiAgICogbG9iZSBhbmQgb2dlZSBwb2ludCAtLSBub3QgdGhlIHR3by1jZW50cmVkIGxhbmNldCBvZiB0aGUgZmlyc3QgYnVpbGQsIHdoaWNoIHJlYWQgYXMgYSBjaGFwZWxcbiAgICogd2luZG93IGFuZCBzdG9wcGVkIDIuNCBtIHNob3J0IG9mIHRoZSBwYXJhcGV0IHdoZXJlIHRoZSBwbGF0ZSdzIHN1cnJvdW5kcyBhbGwgYnV0IHRvdWNoIGl0LiAqL1xuICB7XG4gICAgY29uc3QgSCA9IEcuaGFsbCwgQSA9IEcuYXJjaDtcbiAgICBjb25zdCBmYWNlID0gSC56RnJvbnQ7XG4gICAgY29uc3QgYiA9IEEuYmFuZDtcbiAgICBjb25zdCBzaGFwZSA9IG1vb3Jpc2hBcmNoU2hhcGUoQS53ICsgMiAqIGIsIEEuc3ByaW5nIC0gMC40ICogYiwgQS5yaXNlICsgMS4yNSAqIGIsIDAsIEEuc2hvdWxkZXIsXG4gICAgICB7IHc6IEEudywgc3ByaW5nOiBBLnNwcmluZywgcmlzZTogQS5yaXNlLCBzaWxsOiAwLCBzaG91bGRlcjogQS5zaG91bGRlciB9KTtcbiAgICBjb25zdCBmcmFtZSA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IEEuZGVwdGgsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDEwIH0pO1xuICAgIGZyYW1lLnRyYW5zbGF0ZSgwLCAwLCBmYWNlIC0gQS5kZXB0aCArIDAuMjApO1xuICAgIGZyYW1lLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgY29uc3QgeHM6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBLmNvdW50OyBpKyspIHhzLnB1c2goKGkgLSAoQS5jb3VudCAtIDEpIC8gMikgKiBBLnBpdGNoKTtcbiAgICBjb25zdCBhdCA9IChpZHg6IG51bWJlcltdKSA9PiBpZHgubWFwKChpKSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHhzW2ldLCAwLCAwKSk7XG4gICAgY29uc3Qgb3BlbiA9IEEub3BlbiBhcyBudW1iZXJbXTtcbiAgICBjb25zdCBhbGwgPSB4cy5tYXAoKF8sIGkpID0+IGkpO1xuICAgIGNvbnN0IGJsaW5kID0gYWxsLmZpbHRlcigoaSkgPT4gIW9wZW4uaW5jbHVkZXMoaSkpO1xuICAgIGFkZEluc3QoJ2FyY2gtZnJhbWVzJywgJ0FyY2FkZSBzdXJyb3VuZHMnLCBmcmFtZSwgJ3doaXRlJywgYXQoYWxsKSk7XG5cbiAgICAvLyBUaGUgZGFyayBiZWhpbmQgZWFjaCBvcGVuIGJheTogMC4wMiBtIFBST1VEIG9mIHRoZSB3YWxsLCBub3QgcmVjZXNzZWQgaW50byBpdC4gVGhlIGhhbGwgaXMgYVxuICAgIC8vIHNvbGlkIG1hc3MsIHNvIGEgcGFuZWwgc3VuayBpbnRvIGl0IGlzIGluc2lkZSB0aGUgc29saWQgYW5kIGludmlzaWJsZS4gRGVwdGggMC4wNSBhdCBmYWNlKzAuMDJcbiAgICAvLyBrZWVwcyB0aGUgdm9pZCdzIGZyb250IGF0IHo9NC4yNywgY2xlYXIgb2YgdGhlIHBhcmFwZXQncyBvd24gK1ogZmFjZSBhdCA0LjI4LiBBdCAwLjA2IHRoZSB0d29cbiAgICAvLyBzaGFyZWQgdGhhdCBwbGFuZSBvdmVyIDUuMzUgbTIsIGZpdmUgdGltZXMgb3Zlci5cbiAgICBjb25zdCB2b2lkU2hhcGUgPSBtb29yaXNoQXJjaFNoYXBlKEEudywgQS5zcHJpbmcsIEEucmlzZSwgQS5zaWxsLCBBLnNob3VsZGVyKTtcbiAgICBjb25zdCB2ZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkodm9pZFNoYXBlLCB7IGRlcHRoOiAwLjA1LCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiAxMCB9KTtcbiAgICB2Zy50cmFuc2xhdGUoMCwgMCwgZmFjZSArIDAuMDIpO1xuICAgIHZnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgYWRkSW5zdCgnYXJjaC12b2lkcycsICdBcmNhZGUgb3BlbmluZ3MnLCB2ZywgJ2RhcmsnLCBhdChvcGVuKSk7XG5cbiAgICAvLyBUaGUgYmxpbmQgYmF5czogdGhlIHBsYXRlIGZpbGxzIHRoZSBvdXRlciB0d28gc3Vycm91bmRzIHdpdGggdGhlIHBhcmFwZXQncyBncmVlbiBhbmQgc2V0cyBhXG4gICAgLy8gc21hbGxlciB3aGl0ZSBhcmNoIHBhbmVsIGluc2lkZSBlYWNoLCB0aGUgc2FtZSBvdXRsaW5lIGFnYWluLiBGaWVsZCBmcm9udCBhdCA0LjI0NSBhbmQgcGFuZWxcbiAgICAvLyBmcm9udCBhdCA0LjI2LCBib3RoIHVuZGVyIHRoZSB2b2lkcycgNC4yNyBhbmQgdGhlIHBhcmFwZXQncyA0LjI4OyB0aGUgcGFuZWwncyBiYWNrIHNpdHNcbiAgICAvLyBpbnNpZGUgdGhlIGZpZWxkJ3Mgc2xhYi5cbiAgICBjb25zdCBmZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkodm9pZFNoYXBlLCB7IGRlcHRoOiAwLjAyNSwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogMTAgfSk7XG4gICAgZmcudHJhbnNsYXRlKDAsIDAsIGZhY2UgKyAwLjAyKTtcbiAgICBmZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICAgIGFkZEluc3QoJ2JsaW5kLWZpZWxkcycsICdCbGluZCBuaWNoZSBmaWVsZHMnLCBmZywgJ2dyZWVuJywgYXQoYmxpbmQpKTtcbiAgICBjb25zdCBpbnNldCA9IDAuMzA7XG4gICAgY29uc3QgcHcgPSBBLncgLSAyICogaW5zZXQ7XG4gICAgY29uc3QgcGFuZWwgPSBtb29yaXNoQXJjaFNoYXBlKHB3LCBBLnNwcmluZyAtIDAuNCAqIGluc2V0LCAwLjk1ICogKHB3ICsgMS40ICogQS5zaG91bGRlciksIDAuNDUsIEEuc2hvdWxkZXIgKiAwLjcpO1xuICAgIGNvbnN0IHBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShwYW5lbCwgeyBkZXB0aDogMC4wMiwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogOCB9KTtcbiAgICBwZy50cmFuc2xhdGUoMCwgMCwgZmFjZSArIDAuMDQpO1xuICAgIHBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgYWRkSW5zdCgnYmxpbmQtcGFuZWxzJywgJ0JsaW5kIG5pY2hlIHBhbmVscycsIHBnLCAnd2hpdGUnLCBhdChibGluZCkpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmaW5pYWxzIGFuZCBjcmVzY2VudHNcbiAgICogRm91ciBnaWx0IHNwaWtlcyBvbiB0aGUgY29ybmVyIGRvbWVzLCBhbmQgdGhlIGNyZXNjZW50IG9ybmFtZW50IG92ZXIgdGhlIGdyZWF0IGRvbWUgYW5kIHRoZVxuICAgKiBtaW5hcmV0LCBNRVJHRUQgaW50byBvbmUgY29tcG9uZW50IGFuZCBvbmUgZHJhdyBjYWxsLiBUaGUgb3JuYW1lbnQgaXMgdGhlIHBsYXRlJ3MgYXQgNHggem9vbTpcbiAgICogYSBzaGFsbG93IGdpbHQgY2FwIG9uIHRoZSBjcm93biwgYSBiYWxsLCBhIG5lY2ssIGEgc21hbGwgYnVsYiwgYSBzcGlrZSBhbmQgYSBGTEFUIGNyZXNjZW50IHBsYXRlXG4gICAqIHdpdGggaXRzIGhvcm5zIHRvIHRoZSB1cHBlciByaWdodC4gVGhlIGZpcnN0IGJ1aWxkJ3MgY3Jlc2NlbnQgd2FzIGEgc3F1YXJlLXNlY3Rpb24gaG9yc2VzaG9lXG4gICAqIG9mIGVsZXZlbiBib3hlcyBvcGVuaW5nIGRvd253YXJkIG92ZXIgYSBibG9hdGVkIHRlYXJkcm9wLCBhbmQgcmVhZCBhcyBhIGhvb2sgb24gYSBidWxiLiAqL1xuICB7XG4gICAgY29uc3QgRiA9IEcuZmluaWFscyBhcyBudW1iZXJbXVtdO1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBbeCwgeSwgeiwgc10gb2YgRikge1xuICAgICAgY29uc3QgZyA9IGxhdGhlKFtbMCwgMF0sIFswLjE2LCAwLjAzXSwgWzAuMjAsIDAuMTZdLCBbMC4xMCwgMC4zMF0sXG4gICAgICAgICAgICAgICAgICAgICAgIFswLjEzLCAwLjQyXSwgWzAuMDcsIDAuNThdLCBbMCwgMC43OF1dLCAxNCk7XG4gICAgICBnLnNjYWxlKHMsIHMsIHMpO1xuICAgICAgZy50cmFuc2xhdGUoeCwgeSwgeik7XG4gICAgICBwYXJ0cy5wdXNoKGcpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IFt4LCB5MCwgeiwgcywgdG90YWxILCBSXSBvZiBHLm9ybmFtZW50cyBhcyBudW1iZXJbXVtdKSB7XG4gICAgICAvLyBUaGUgY2FwJ3MgcmltIHNpdHMgMC4wNSBtIGludG8gdGhlIGRvbWUgY3Jvd24sIHNvIHRoZSByaWJzIHJ1biB1bmRlciBpdCBhbmQgaXQgbmV2ZXIgZmxvYXRzLlxuICAgICAgY29uc3QgY2FwID0gbGF0aGUoW1swLCAwXSwgWzAuNDYsIDBdLCBbMC40NiwgMC4wNV0sIFswLjMyLCAwLjIwXSwgWzAuMTMsIDAuMzNdLCBbMC4wNiwgMC4zOF0sIFswLjA2LCAwLjQ2XV0sIDE2KTtcbiAgICAgIGNhcC5zY2FsZShzLCBzLCBzKTsgY2FwLnRyYW5zbGF0ZSh4LCB5MCwgeik7IHBhcnRzLnB1c2goY2FwKTtcbiAgICAgIGNvbnN0IGJhbGwgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoMC4xNyAqIHMsIDE0LCAxMCk7XG4gICAgICBiYWxsLnRyYW5zbGF0ZSh4LCB5MCArIDAuNjAgKiBzLCB6KTsgcGFydHMucHVzaChiYWxsKTtcbiAgICAgIHBhcnRzLnB1c2goY3lsQXQoeCwgeTAgKyAwLjg0ICogcywgeiwgMC4wNDUgKiBzLCAwLjA1NSAqIHMsIDAuMjIgKiBzLCAxMCkpO1xuICAgICAgY29uc3QgYnVsYiA9IGxhdGhlKFtbMCwgMF0sIFswLjEwLCAwLjAzXSwgWzAuMTIsIDAuMTBdLCBbMC4wODUsIDAuMTldLCBbMC4wNCwgMC4yN10sIFswLjAzLCAwLjMxXV0sIDEyKTtcbiAgICAgIGJ1bGIuc2NhbGUocywgcywgcyk7IGJ1bGIudHJhbnNsYXRlKHgsIHkwICsgMC45MiAqIHMsIHopOyBwYXJ0cy5wdXNoKGJ1bGIpO1xuICAgICAgLy8gVGhlIHNwaWtlIHJ1bnMgZnJvbSB0aGUgYnVsYiB0byB0aGUgY3Jlc2NlbnQncyB1bmRlcnNpZGUsIGhvd2V2ZXIgdGFsbCB0aGUgc3RhY2sgaXM7IHRoZVxuICAgICAgLy8gY3Jlc2NlbnQncyBjZW50cmUgaXMgc2V0IHNvIGl0cyB0b3AgaXMgZXhhY3RseSB0b3RhbEggYWJvdmUgdGhlIGJhc2UuXG4gICAgICBjb25zdCBzcGlrZUJhc2UgPSB5MCArIDEuMjAgKiBzLCBjQm90dG9tID0geTAgKyB0b3RhbEggLSAyICogUiArIDAuMDM7XG4gICAgICBpZiAoY0JvdHRvbSA+IHNwaWtlQmFzZSArIDAuMDIpIHBhcnRzLnB1c2goY3lsQXQoeCwgKHNwaWtlQmFzZSArIGNCb3R0b20pIC8gMiwgeiwgMC4wMjUgKiBzLCAwLjAzMiAqIHMsIGNCb3R0b20gLSBzcGlrZUJhc2UsIDgpKTtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLm1heCgwLjAzNSwgMC4xNiAqIFIpO1xuICAgICAgY29uc3QgY2cgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KGNyZXNjZW50U2hhcGUoUiwgMC44NSAqIFIsIDAuMjggKiBSLCAxNCksIHsgZGVwdGg6IHQsIGJldmVsRW5hYmxlZDogZmFsc2UgfSk7XG4gICAgICBjZy50cmFuc2xhdGUoMCwgMCwgLXQgLyAyKTtcbiAgICAgIGNnLnJvdGF0ZVooTWF0aC5QSSAqIDAuMjgpO1xuICAgICAgY2cudHJhbnNsYXRlKHgsIHkwICsgdG90YWxIIC0gUiwgeik7XG4gICAgICBjZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICAgICAgcGFydHMucHVzaChjZyk7XG4gICAgfVxuICAgIGFkZCgnZmluaWFscycsICdHaWx0IGZpbmlhbHMgYW5kIGNyZXNjZW50cycsIG1lcmdlR2VvcyhwYXJ0cyksICdnb2xkJyk7XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGFpa2l0IGVudHJ5IHBvaW50ICovXG5cbi8qKlxuICogdGhhaWtpdCBlbnRyeSBwb2ludC4gVGhlIHJlZ2lzdHJ5IHJlY29yZHMgYGNyZWF0ZU9iamVjdE1vZGVsYCBhcyB0aGUgZXhwb3J0IGFuZCBjYWxscyBpdCB3aXRoXG4gKiAoc3BlYywgb3B0aW9ucykuIGBzcGVjYCBpcyBhY2NlcHRlZCBhbmQgYXR0YWNoZWQgZm9yIGhvc3Qtc2lkZSBpbnNwZWN0aW9uIC0tIHRoZSByZWNvbnN0cnVjdGlvblxuICogZGF0YSBhbHJlYWR5IGxpdmVzIGluIHRoaXMgbW9kdWxlLCBzbyBpdCBpcyBkZWxpYmVyYXRlbHkgbm90IGEgc2Vjb25kIHNvdXJjZSBvZiB0cnV0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKHNwZWM/OiB1bmtub3duLCBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVNb3NxdWVNb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IE9ORS4gU3RhdGljIGxhbmRtYXJrIGdlb21ldHJ5IC0tIG5vdGhpbmcgb3BlbnMsIHR1cm5zIG9yIHN3aW5ncy4gQSBuYW1lZCBwaXZvdCBpcyBhXG4gICAgLy8gcHJvbWlzZSB0aGF0IGEgcGFydCB0dXJucyBvbiBpdCwgYW5kIGEgcHJvcCB0aGF0IGRlY2xhcmVzIHBpdm90cyBpdCBoYXMgbm8gbWVjaGFuaXNtcyBmb3JcbiAgICAvLyBoYXMgZGVzY3JpYmVkIGEgbWFjaGluZSB0aGF0IGRvZXMgbm90IGV4aXN0LlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuXG4gICAgLy8gU29ja2V0czogTk9ORS4gTm90aGluZyBhdHRhY2hlcyB0byB0aGlzIHByb3AgYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIFRoZSBvbmUtYXJndW1lbnQgZW50cnkgcG9pbnQ6IHZpYmUzZCdzIGNvbnRyYWN0LCBhbmQgaW1nMnRocmVlanMncyBvd24uXG4gKlxuICogYGNyZWF0ZU9iamVjdE1vZGVsYCBhYm92ZSBrZWVwcyB0aGFpa2l0J3MgaGlzdG9yaWNhbCAoc3BlYywgb3B0aW9ucykgc2hhcGUgc29cbiAqIHRoZSBoYXJuZXNzLCB0aGUgbGV2ZWwgZWRpdG9yIGFuZCB0aGUgTm9kZS1zaWRlIGdhdGVzIGNhcnJ5IG9uIHVuY2hhbmdlZC5cbiAqIGBzcGVjYCBoYXMgbmV2ZXIgYmVlbiBwYXNzZWQgYnkgYW55IGNhbGxlciAtLSBpdCBpcyBpbnNwZWN0aW9uIGRhdGEgdGhhdCBpc1xuICogYWxyZWFkeSBiYWtlZCBpbnRvIHRoaXMgbW9kdWxlIC0tIHNvIHRoaXMgaXMgdGhlIGhvbmVzdCBzaWduYXR1cmUsIGFuZCBpdCBpc1xuICogd2hhdCBhIHZpYmUzZCBjb25zdW1lciBpbnN0YWxscyBhbmQgY2FsbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIHJldHVybiBjcmVhdGVPYmplY3RNb2RlbCh1bmRlZmluZWQsIG9wdGlvbnMpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBNkN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsbUJBQW1CO0FBQUEsSUFDckI7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsUUFDTixLQUFLO0FBQUEsUUFDTCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0w7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLFFBQ0o7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1QsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsZUFBZTtBQUFBLE1BQ2YsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNUO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtB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
