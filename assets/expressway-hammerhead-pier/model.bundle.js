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

// ../repo/scratch/expressway-hammerhead-pier/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createExpresswayHammerheadPierModel: () => createExpresswayHammerheadPierModel,
  createModel: () => createModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "expressway-hammerhead-pier",
  "name": "Expressway Hammerhead Pier",
  "exportName": "ExpresswayHammerheadPier",
  "envelope": "Envelope 12.5 x 12 x 4.4 m, origin base-center at ground, +Y up, the cap running along X; bearing seat at y = 12.\n * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=16 unique geometries.",
  "materials": [
    {
      "id": "concrete",
      "color": 14211026,
      "roughness": 0.94,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "concreteCap",
      "color": 14211026,
      "roughness": 0.94,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "steel",
      "color": 12633030,
      "roughness": 0.55,
      "metalness": 0.3,
      "vertexColors": true
    },
    {
      "id": "paint",
      "color": 14999770,
      "roughness": 0.85,
      "metalness": 0,
      "vertexColors": true
    }
  ],
  "tiles": [
    {
      "material": "concrete",
      "kind": "concrete",
      "size": 1024,
      "seed": 101,
      "base": [
        0.7110531463971306,
        0.7097915074773495,
        0.7080236580738757
      ],
      "cloud": [
        0.8715791761765026,
        0.8710184477677108,
        0.8634304207119742
      ],
      "clouds": 90,
      "cloudR": 0.05,
      "cloudAlpha": 0.2,
      "streaks": 26,
      "streak": [
        0.6651885664601673,
        0.6637266673943891,
        0.6562214038611762
      ],
      "streakLen": 0.3,
      "streakAlpha": 0.16,
      "wash": [
        0.6651885664601673,
        0.6637266673943891,
        0.651512108023658
      ],
      "coverage": 0,
      "washAlpha": 0,
      "pits": 9360,
      "pit": [
        0.6422562764916856,
        0.6406942473529091,
        0.6326749246735857
      ],
      "pitR": 0.8,
      "grain": 57600,
      "grainAlpha": 0.09,
      "bump": 15e-4,
      "ties": [
        14,
        18
      ],
      "tieR": 35e-4,
      "tie": [
        0.5872187805673297,
        0.5854164392533565,
        0.576163374623368
      ],
      "tieDrip": 0.3,
      "pour": 8,
      "pourAt": 0.06,
      "pourTone": [
        0.715639604390827,
        0.7143979914856456,
        0.7080236580738757
      ],
      "pourAlpha": 0.4,
      "soot": [
        0.42210629279426143,
        0.4195830149546992,
        0.41133802031023314
      ],
      "sootCov": 0.4,
      "sootAlpha": 0.55,
      "sootBlots": 40,
      "spalls": 5,
      "spall": [
        0.9999999999999999,
        0.9953935159917039,
        0.9858721124874456
      ]
    },
    {
      "material": "concreteCap",
      "kind": "concrete",
      "size": 512,
      "seed": 102,
      "base": [
        0.7569177263340939,
        0.7558563475603098,
        0.7551166164490571
      ],
      "cloud": [
        0.8715791761765026,
        0.8710184477677108,
        0.8634304207119742
      ],
      "clouds": 54,
      "cloudR": 0.07333333333333333,
      "cloudAlpha": 0.2,
      "streaks": 22,
      "streak": [
        0.5826323225736332,
        0.5808099552450604,
        0.5714540787858498
      ],
      "streakLen": 0.7,
      "streakAlpha": 0.2,
      "wash": [
        0.6651885664601673,
        0.6637266673943891,
        0.651512108023658
      ],
      "coverage": 0,
      "washAlpha": 0,
      "pits": 585,
      "pit": [
        0.6422562764916856,
        0.6406942473529091,
        0.6326749246735857
      ],
      "pitR": 0.8,
      "grain": 3600,
      "grainAlpha": 0.09,
      "bump": 15e-4,
      "ties": [
        4,
        4
      ],
      "tieR": 55e-4,
      "tie": [
        0.5872187805673297,
        0.5854164392533565,
        0.576163374623368
      ],
      "tieDrip": 0.5
    },
    {
      "material": "paint",
      "kind": "hazard",
      "size": 256,
      "seed": 103,
      "a": [
        0.729738663361223,
        0.26423694990022056,
        0.2406637215817261
      ],
      "b": [
        1,
        1,
        1
      ],
      "periods": 2,
      "angle": 0.7853981633974483,
      "scuffs": 50
    }
  ],
  "geometry": {
    "components": [
      {
        "id": "shaft",
        "name": "Round column",
        "material": "concrete",
        "cyls": [
          {
            "rt": 1.4,
            "rb": 1.4,
            "h": 8.77,
            "at": [
              0,
              4.885,
              0
            ],
            "seg": 36,
            "hex": 16777215,
            "uvRep": [
              0.7330382858376184,
              1
            ]
          }
        ]
      },
      {
        "id": "cap",
        "name": "Hammerhead cap and footing",
        "material": "concreteCap",
        "uv": "world",
        "uvScale": 3,
        "extrudes": [
          {
            "poly": [
              [
                -1.75,
                9.15
              ],
              [
                1.75,
                9.15
              ],
              [
                6.25,
                10.65
              ],
              [
                6.25,
                11.77
              ],
              [
                6.17,
                11.85
              ],
              [
                -6.17,
                11.85
              ],
              [
                -6.25,
                11.77
              ],
              [
                -6.25,
                10.65
              ]
            ],
            "z0": -1.3,
            "z1": 1.3,
            "hex": 16777215
          }
        ],
        "boxes": [
          [
            16777215,
            0,
            0.3,
            0,
            4.4,
            0.6,
            4.4
          ]
        ]
      },
      {
        "id": "pads",
        "name": "Bearing pads",
        "material": "steel",
        "uv": "world",
        "uvScale": 1,
        "boxes": [
          [
            10395297,
            -3,
            11.925,
            0,
            0.7,
            0.15,
            0.5
          ],
          [
            10395297,
            3,
            11.925,
            0,
            0.7,
            0.15,
            0.5
          ]
        ]
      },
      {
        "id": "chevrons",
        "name": "Painted chevron band",
        "material": "paint",
        "cyls": [
          {
            "rt": 1.4049999999999998,
            "rb": 1.4049999999999998,
            "h": 0.8,
            "at": [
              0,
              1.01,
              0
            ],
            "seg": 36,
            "open": true,
            "uvRep": [
              8,
              1
            ],
            "hex": 16777215
          }
        ]
      }
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
function splitCorners(pts, minDeg = 70, eps = 8e-4) {
  const out = [];
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i], a = pts[i - 1], b = pts[i + 1];
    let sharp = false;
    if (a && b) {
      const ux = p[0] - a[0], uy = p[1] - a[1], vx = b[0] - p[0], vy = b[1] - p[1];
      const lu = Math.hypot(ux, uy), lv = Math.hypot(vx, vy);
      if (lu > 0 && lv > 0) sharp = Math.acos(Math.max(-1, Math.min(1, (ux * vx + uy * vy) / (lu * lv)))) > minDeg * Math.PI / 180;
      if (sharp && lu > 3 * eps) out.push([p[0] - ux / lu * eps, p[1] - uy / lu * eps]);
      out.push(p);
      if (sharp && lv > 3 * eps) out.push([p[0] + vx / lv * eps, p[1] + vy / lv * eps]);
    } else out.push(p);
  }
  return out;
}
function lathe(pts, seg, yOffset = 0, sharp = true, weldSeam = false) {
  const v = (sharp ? splitCorners(pts) : pts).map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
  const g = new THREE.LatheGeometry(v, seg);
  g.computeVertexNormals();
  if (weldSeam) {
    const n = g.getAttribute("normal");
    const rows = n.count / (seg + 1);
    for (let r = 0; r < rows; r++) {
      const a = r, b = seg * rows + r;
      const x = n.getX(a) + n.getX(b), y = n.getY(a) + n.getY(b), z = n.getZ(a) + n.getZ(b);
      const l = Math.hypot(x, y, z) || 1;
      n.setXYZ(a, x / l, y / l, z / l);
      n.setXYZ(b, x / l, y / l, z / l);
    }
    n.needsUpdate = true;
  }
  return g;
}
function extrudeAlongZ(shape, z0, z1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, z0);
  g.computeVertexNormals();
  return g;
}
function ribbedDome(profile, ribs, amp, seg, valley, smooth = false) {
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
  if (smooth) {
    const pos = g.getAttribute("position"), nrm = g.getAttribute("normal");
    const acc = /* @__PURE__ */ new Map();
    const key = (i) => `${pos.getX(i).toFixed(5)},${pos.getY(i).toFixed(5)},${pos.getZ(i).toFixed(5)}`;
    for (let i = 0; i < pos.count; i++) {
      const k = key(i), a = acc.get(k) ?? [0, 0, 0];
      a[0] += nrm.getX(i);
      a[1] += nrm.getY(i);
      a[2] += nrm.getZ(i);
      acc.set(k, a);
    }
    for (let i = 0; i < pos.count; i++) {
      const a = acc.get(key(i)), l = Math.hypot(a[0], a[1], a[2]) || 1;
      nrm.setXYZ(i, a[0] / l, a[1] / l, a[2] / l);
    }
    nrm.needsUpdate = true;
  }
  return g;
}
function tubeAlong(stations, seg) {
  const pos = [], idx = [];
  for (let i = 0; i < stations.length; i++) {
    const [z, cx, cy, rx, ry, flatY] = stations[i];
    for (let j = 0; j < seg; j++) {
      const th = j * Math.PI * 2 / seg;
      const x = cx + Math.sin(th) * rx;
      let y = cy + Math.cos(th) * ry;
      if (flatY !== void 0 && y < flatY) y = flatY;
      pos.push(x, y, z);
    }
  }
  for (let i = 0; i < stations.length - 1; i++) {
    for (let j = 0; j < seg; j++) {
      const a = i * seg + j, b = (i + 1) * seg + j, c = (i + 1) * seg + (j + 1) % seg, d = i * seg + (j + 1) % seg;
      idx.push(a, b, c, a, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}
function tintGeo(geo, hex) {
  const c = new THREE.Color(hex);
  const n = geo.getAttribute("position").count;
  const col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  return geo;
}
function worldUV(geo, scale) {
  const p = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(nrm.getX(i)), ay = Math.abs(nrm.getY(i)), az = Math.abs(nrm.getZ(i));
    let u, v;
    if (ax >= ay && ax >= az) {
      u = p.getZ(i);
      v = p.getY(i);
    } else if (ay >= az) {
      u = p.getX(i);
      v = p.getZ(i);
    } else {
      u = p.getX(i);
      v = p.getY(i);
    }
    uv[i * 2] = u / scale;
    uv[i * 2 + 1] = v / scale;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return geo;
}
function planUV(geo, scale) {
  const p = geo.getAttribute("position");
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    uv[i * 2] = p.getX(i) / scale + 0.5;
    uv[i * 2 + 1] = p.getZ(i) / scale + 0.5;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return geo;
}
function spokes(rHub, rRim, halfW, n, hex, t = 6e-3, prism = false) {
  const segs = [];
  for (let i = 0; i < n; i++) {
    const a = i * Math.PI * 2 / n;
    const side = (i % 2 === 0 ? 1 : -1) * halfW * 0.35;
    const len = rRim - rHub;
    const g = prism ? new THREE.CylinderGeometry(t * 0.62, t * 0.62, len, 3, 1, true) : new THREE.BoxGeometry(t, len, t);
    g.translate(0, rHub + len / 2, 0);
    g.rotateX(Math.atan2(side, len) * 0.6);
    g.rotateX(0);
    g.translate(0, 0, side * 0.5);
    g.rotateX(a);
    segs.push(g);
  }
  return tintGeo(mergeGeos(segs), hex);
}
function tube(pts, r, seg = 8, hex) {
  const parts = [];
  const rAt = (i) => typeof r === "number" ? r : r[Math.min(i, r.length - 1)];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    const d = b.clone().sub(a);
    const len = d.length();
    if (len < 1e-6) continue;
    const ra = rAt(i), rb = rAt(i + 1);
    const g = new THREE.CylinderGeometry(rb, ra, len + (ra + rb) * 0.6, seg, 1, false);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
    g.applyQuaternion(q);
    const m = a.clone().add(b).multiplyScalar(0.5);
    g.translate(m.x, m.y, m.z);
    parts.push(g);
  }
  const out = mergeGeos(parts);
  return hex === void 0 ? out : tintGeo(out, hex);
}
function strap(pts, w, t, about, hex) {
  const parts = [];
  const c = new THREE.Vector3(about[0], about[1], about[2]);
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    const dir = b.clone().sub(a);
    const len = dir.length();
    if (len < 1e-6) continue;
    dir.normalize();
    const mid = a.clone().add(b).multiplyScalar(0.5);
    let nrm = mid.clone().sub(c);
    nrm.sub(dir.clone().multiplyScalar(nrm.dot(dir)));
    if (nrm.lengthSq() < 1e-12) nrm = new THREE.Vector3(0, 0, 1).sub(dir.clone().multiplyScalar(dir.z));
    nrm.normalize();
    const side = new THREE.Vector3().crossVectors(dir, nrm).normalize();
    const g = new THREE.BoxGeometry(w, len + t, t);
    g.applyMatrix4(new THREE.Matrix4().makeBasis(side, dir, nrm));
    g.translate(mid.x, mid.y, mid.z);
    parts.push(g);
  }
  const out = mergeGeos(parts);
  return hex === void 0 ? out : tintGeo(out, hex);
}
function rbox(b) {
  const g = new THREE.BoxGeometry(b[3], b[4], b[5]);
  if (b[6]) g.rotateX(b[6]);
  if (b[7]) g.rotateY(b[7]);
  if (b[8]) g.rotateZ(b[8]);
  g.translate(b[0], b[1], b[2]);
  return g;
}
function mirrorX(list) {
  return list.flatMap((b) => [b, [b[0], -b[1], b[2], b[3], b[4], b[5], b[6], b[7] ?? 0, -(b[8] ?? 0), -(b[9] ?? 0)]]);
}
function canvasTile(size, draw) {
  if (typeof document === "undefined") return null;
  const cv = document.createElement("canvas");
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;
  draw(ctx, size);
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}
function lcg(seed) {
  let s = seed >>> 0;
  return () => {
    s = s * 1664525 + 1013904223 >>> 0;
    return s / 4294967296;
  };
}
function mudTile(size, base, seed, coverage = 0.33) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const toHex = (v) => "#" + v.map((c) => Math.round(Math.min(1, Math.max(0, c)) * 255).toString(16).padStart(2, "0")).join("");
    ctx.fillStyle = toHex(base);
    ctx.fillRect(0, 0, s, s);
    const grad = ctx.createLinearGradient(0, s, 0, s * (1 - coverage));
    grad.addColorStop(0, "rgba(255,255,255,0.88)");
    grad.addColorStop(0.45, "rgba(255,255,255,0.45)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 90; i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 2.2) * s * coverage * 1.35;
      const r = 3 + rnd() * s * 0.05;
      const a = 0.08 + rnd() * 0.28;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(255,250,240,${a})`);
      g2.addColorStop(1, "rgba(255,250,240,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < 1200; i++) {
      const x = rnd() * s, y = rnd() * s;
      const v = rnd() < 0.5 ? 0 : 255;
      ctx.fillStyle = `rgba(${v},${v},${v},0.035)`;
      ctx.fillRect(x, y, 1.5, 1.5);
    }
  });
}
function dustTile(size, dust, seed, coverage = 0.3) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const c = dust.map((v) => Math.round(255 * Math.min(1, v)));
    const grad = ctx.createLinearGradient(0, s, 0, s * (1 - coverage));
    grad.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},0.9)`);
    grad.addColorStop(0.5, `rgba(${c[0]},${c[1]},${c[2]},0.4)`);
    grad.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 80; i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 2.2) * s * coverage * 1.4, r = 3 + rnd() * s * 0.05, a = 0.08 + rnd() * 0.25;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${a})`);
      g2.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  });
}
function corrugationTile(size, pitch, low, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    for (let x = 0; x < s; x++) {
      const t = (Math.cos(x / s * Math.PI * 2 * pitch) + 1) / 2;
      const v = Math.round(255 * (low + (1 - low) * t));
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(x, 0, 1, s);
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < 60; i++) {
      const x = rnd() * s, y = rnd() * s, r = 4 + rnd() * s * 0.08;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      const a = 0.08 + rnd() * 0.18;
      g2.addColorStop(0, `rgba(120,90,60,${a})`);
      g2.addColorStop(1, "rgba(120,90,60,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function plankTile(size, boards, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const bh = s / boards;
    for (let b = 0; b < boards; b++) {
      const tone = 0.82 + rnd() * 0.18;
      const v = Math.round(255 * tone);
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(0, b * bh, s, bh);
      ctx.fillStyle = "rgba(40,30,20,0.55)";
      ctx.fillRect(0, b * bh, s, Math.max(1, s * 6e-3));
      for (let k = 0; k < 14; k++) {
        const y = b * bh + rnd() * bh, len = s * (0.2 + rnd() * 0.6), x = rnd() * s;
        ctx.strokeStyle = `rgba(60,45,30,${0.05 + rnd() * 0.12})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x - s, y);
        ctx.lineTo(x - s + len, y);
        ctx.moveTo(x, y);
        ctx.lineTo(x + len, y);
        ctx.stroke();
      }
    }
  });
}
function rustTile(size, ratio, seed, density = 90) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < density; i++) {
      const x = rnd() * s, y = rnd() * s, r = 3 + rnd() * s * 0.09;
      const a = 0.15 + rnd() * 0.45;
      const c = ratio.map((v) => Math.round(255 * v));
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${a})`);
      g2.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function furTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const tone = o.tone ?? [0.72, 0.66, 0.58], m = s * 0.06;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.clouds ?? 26); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.08 + rnd() * 0.18), a = 0.04 + rnd() * 0.1;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(tone)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(tone)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < (o.patches ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.04 + rnd() * 0.05), pc = o.patchTone ?? [0.72, 0.56, 0.52];
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(pc)},0.55)`);
      g2.addColorStop(0.6, `rgba(${rgb2(pc)},0.3)`);
      g2.addColorStop(1, `rgba(${rgb2(pc)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r * 1.3, r, rnd() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const strokes = o.strokes ?? 5e3, len = s * (o.length ?? 0.022);
    const drawStroke = (x, y, dx, dy, w) => {
      ctx.lineWidth = w;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + dx, y + dy);
      ctx.stroke();
      if (x < m) {
        ctx.beginPath();
        ctx.moveTo(x + s, y);
        ctx.lineTo(x + s + dx, y + dy);
        ctx.stroke();
      }
      if (x > s - m) {
        ctx.beginPath();
        ctx.moveTo(x - s, y);
        ctx.lineTo(x - s + dx, y + dy);
        ctx.stroke();
      }
      if (y < m) {
        ctx.beginPath();
        ctx.moveTo(x, y + s);
        ctx.lineTo(x + dx, y + s + dy);
        ctx.stroke();
      }
      if (y > s - m) {
        ctx.beginPath();
        ctx.moveTo(x, y - s);
        ctx.lineTo(x + dx, y - s + dy);
        ctx.stroke();
      }
    };
    ctx.lineCap = "round";
    for (let i = 0; i < strokes; i++) {
      const x = rnd() * s, y = rnd() * s, th = (rnd() - 0.5) * 0.78, l = len * (0.6 + rnd() * 0.8);
      const light = rnd() < 0.42;
      ctx.globalCompositeOperation = light ? "screen" : "multiply";
      ctx.strokeStyle = light ? `rgba(255,250,240,${0.05 + rnd() * 0.1})` : `rgba(${rgb2(tone)},${0.06 + rnd() * 0.14})`;
      drawStroke(x, y, Math.sin(th) * l, Math.cos(th) * l, 0.6 + rnd() * 1.2);
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function heightUV(geo, scale) {
  const p = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(nrm.getX(i)), az = Math.abs(nrm.getZ(i));
    const u = ax >= az ? p.getZ(i) : p.getX(i);
    uv[i * 2] = u / scale;
    uv[i * 2 + 1] = p.getY(i) / scale;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return geo;
}
function ribTopTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const cx = s / 2, cy = s / 2;
    const R = (f) => f * s;
    const ring = o.ring ?? 0.44, disc = o.disc ?? 0.147, hole = o.hole ?? 0.0225;
    const N = o.ribs ?? 84, groove = o.groove ?? 0.22, low = o.low ?? 0.74;
    const tone = (r) => {
      const v = Math.round(255 * Math.min(1, Math.max(0, r)));
      return `rgb(${v},${v},${v})`;
    };
    ctx.fillStyle = tone(o.ringTone ?? 0.985);
    ctx.fillRect(0, 0, s, s);
    const img = ctx.getImageData(0, 0, s, s), d = img.data;
    const r0 = R(disc), r1 = R(ring);
    const wash = o.wash ?? 0.06;
    for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
      const dx = x + 0.5 - cx, dy = y + 0.5 - cy, r = Math.hypot(dx, dy);
      if (r < r0 - 1.5 || r > r1 + 1.5) continue;
      const a = Math.atan2(dy, dx);
      const ph = (a / (Math.PI * 2) * N + N) % 1;
      const dist = Math.min(ph, 1 - ph) * 2;
      const crown = 1 - groove;
      let h;
      if (dist < crown) {
        const t = dist / crown;
        h = 1 - 0.1 * t * t;
      } else {
        const t = (dist - crown) / groove;
        h = low + (1 - 0.1 - low) * (1 - Math.sin(t * Math.PI / 2)) * 0.9;
      }
      const g = dist > crown ? 1 - wash : 1;
      const edge = Math.min(1, Math.max(0, (r - (r0 - 1.5)) / 3)) * Math.min(1, Math.max(0, (r1 + 1.5 - r) / 3));
      const v = 255 * (h * g * edge + (o.ringTone ?? 0.985) * (1 - edge));
      const i = (y * s + x) * 4;
      d[i] = d[i + 1] = d[i + 2] = Math.round(v);
      d[i + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    ctx.fillStyle = tone(o.discTone ?? 1);
    ctx.beginPath();
    ctx.arc(cx, cy, r0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = tone(low);
    ctx.lineWidth = Math.max(1, s * 25e-4);
    ctx.beginPath();
    ctx.arc(cx, cy, r0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, r1, 0, Math.PI * 2);
    ctx.stroke();
    ctx.lineWidth = Math.max(1, s * 4e-3);
    for (let k = 0; k < 4; k++) {
      const a = k * Math.PI / 2, ia = R(hole) + s * 0.012, oa = r0 - s * 0.012;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * ia, cy + Math.sin(a) * ia);
      ctx.lineTo(cx + Math.cos(a) * oa, cy + Math.sin(a) * oa);
      ctx.stroke();
    }
    ctx.fillStyle = tone(o.holeTone ?? 0.35);
    ctx.beginPath();
    ctx.arc(cx, cy, R(hole), 0, Math.PI * 2);
    ctx.fill();
    const specks = o.specks ?? 900;
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < specks; i++) {
      const a = rnd() * Math.PI * 2, rr = r0 + (r1 - r0) * Math.pow(rnd(), 0.6);
      const k = Math.round(a / (Math.PI * 2) * N - 0.5) + 0.5, ga = k / N * Math.PI * 2;
      const x = cx + Math.cos(ga) * rr, y = cy + Math.sin(ga) * rr;
      const len = 1 + rnd() * s * 0.012, w = 0.8 + rnd() * s * 15e-4, al = 0.25 + rnd() * 0.45;
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(ga);
      ctx.fillStyle = rnd() < 0.55 ? `rgba(122,84,52,${al})` : `rgba(150,140,125,${al})`;
      ctx.fillRect(-len / 2, -w / 2, len, w);
      ctx.restore();
    }
    for (let i = 0; i < (o.scuffs ?? 40); i++) {
      const a = rnd() * Math.PI * 2, rr = r1 + (R(0.5) - r1) * rnd();
      const x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr, r = 1 + rnd() * s * 4e-3;
      ctx.fillStyle = `rgba(130,120,105,${0.1 + rnd() * 0.25})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function bindTile(mat, tex, bump = 0) {
  if (!tex) return;
  mat.map = tex;
  if (bump > 0) {
    mat.bumpMap = tex;
    mat.bumpScale = bump;
  }
  mat.needsUpdate = true;
}
function sheet(s) {
  const nx = s.nx, nz = s.nz, Hh = s.heights, t = s.t ?? 0.012;
  const X = (i) => s.x0 + (s.x1 - s.x0) * i / nx;
  const ZS = Array.isArray(s.zs) ? s.zs : null;
  const Z = (j) => ZS ? ZS[j] : s.z0 + (s.z1 - s.z0) * j / nz;
  const grid = (yOff, flip) => {
    const pos = [], uv = [], idx = [];
    for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) {
      pos.push(X(i), Hh[j][i] + yOff, Z(j));
      uv.push(i / nx, j / nz);
    }
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
      const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, d = c + 1;
      if (flip) idx.push(a, b, c, b, d, c);
      else idx.push(a, c, b, b, c, d);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  };
  const paint = (g, hex) => {
    const n = g.getAttribute("position").count, c = new THREE.Color(hex), col = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return g;
  };
  const paintGrid = (g, HG) => {
    const n = g.getAttribute("position").count, col = new Float32Array(n * 3), c = new THREE.Color();
    let k = 0;
    for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) {
      c.setHex(HG[j][i]);
      col[k++] = c.r;
      col[k++] = c.g;
      col[k++] = c.b;
    }
    g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return g;
  };
  const top0 = grid(0, false), und0 = grid(-t, true);
  const parts = s.hexGrid !== void 0 ? [paintGrid(top0, s.hexGrid), paint(und0, s.hexUnder ?? 16777215)] : s.hexUnder !== void 0 ? [paint(top0, s.hexTop ?? 16777215), paint(und0, s.hexUnder)] : [top0, und0];
  const strip = (pts, out) => {
    const pos = [], uv = [];
    for (const [p0, p1] of pts) {
      const q0 = p0, q1 = p1, q2 = [p1[0], p1[1] - t, p1[2]], q3 = [p0[0], p0[1] - t, p0[2]];
      const e12 = [q1[0] - q0[0], q1[1] - q0[1], q1[2] - q0[2]], e22 = [q2[0] - q0[0], q2[1] - q0[1], q2[2] - q0[2]];
      const n = [e12[1] * e22[2] - e12[2] * e22[1], e12[2] * e22[0] - e12[0] * e22[2], e12[0] * e22[1] - e12[1] * e22[0]];
      const tri = n[0] * out[0] + n[1] * out[1] + n[2] * out[2] >= 0 ? [q0, q1, q2, q0, q2, q3] : [q0, q2, q1, q0, q3, q2];
      for (const q of tri) {
        pos.push(q[0], q[1], q[2]);
        uv.push(0, 0);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    g.computeVertexNormals();
    return g;
  };
  const top = (i, j) => [X(i), Hh[j][i], Z(j)];
  const e0 = [], e1 = [], e2 = [], e3 = [];
  for (let i = 0; i < nx; i++) {
    e0.push([top(i, 0), top(i + 1, 0)]);
    e1.push([top(i, nz), top(i + 1, nz)]);
  }
  for (let j = 0; j < nz; j++) {
    e2.push([top(0, j), top(0, j + 1)]);
    e3.push([top(nx, j), top(nx, j + 1)]);
  }
  const edges = [strip(e0, [0, 0, -1]), strip(e1, [0, 0, 1]), strip(e2, [-1, 0, 0]), strip(e3, [1, 0, 0])];
  const rimHex = s.hexRim ?? s.hexUnder;
  parts.push(...rimHex !== void 0 ? edges.map((g) => paint(g, rimHex)) : edges);
  return mergeGeos(parts);
}
function paintTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [1, 1, 1], rust = o.rust ?? base, chalk = o.chalk ?? base;
    const run = o.run ?? rust;
    const wrap = (draw) => {
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) draw(dx, dy);
    };
    const blob = (c, x, y, r, a, ry = 1, hard = false) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb2(c)},${a})`);
      g.addColorStop(hard ? 0.72 : 0.55, `rgba(${rgb2(c)},${hard ? a : a * 0.45})`);
      g.addColorStop(1, `rgba(${rgb2(c)},0)`);
      ctx.fillStyle = g;
      wrap((dx, dy) => {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * ry, 0, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    ctx.fillStyle = `rgb(${rgb2(base)})`;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (o.drift ?? 14); i++) {
      const c = rnd() < 0.5 ? rust : chalk;
      blob(c, rnd() * s, rnd() * s, s * (0.18 + rnd() * 0.3) * (o.driftScale ?? 1), 0.05 + rnd() * 0.07, 0.6 + rnd() * 0.8);
    }
    for (let k = 0; k < (o.rustClusters ?? 16); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.04 + rnd() * 0.11) * (o.clusterScale ?? 1);
      blob(rust, cx, cy, cr, (o.rustAlpha ?? 0.3) + rnd() * (o.rustAlphaVar ?? 0.35), 0.7 + rnd() * 0.6, o.hardEdges === true);
      for (let i = 0; i < (o.specksPerCluster ?? 40); i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.8 + rnd() * 2.4;
        ctx.fillStyle = `rgba(${rgb2(o.speckRun ? run : rust)},${(o.speckAlpha ?? 0.25) + rnd() * (o.speckAlphaVar ?? 0.5)})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      if (rnd() < (o.runChance ?? 0.55)) {
        const w = 1 + rnd() * s * 0.01, len = s * (0.1 + rnd() * 0.35);
        const g = ctx.createLinearGradient(0, cy, 0, cy + len);
        const ra = (o.runAlpha ?? 0.16) + rnd() * 0.18;
        g.addColorStop(0, `rgba(${rgb2(run)},${ra})`);
        if (o.hardEdges) g.addColorStop(0.92, `rgba(${rgb2(run)},${ra})`);
        g.addColorStop(1, `rgba(${rgb2(run)},0)`);
        ctx.fillStyle = g;
        wrap((dx) => ctx.fillRect(cx + dx + (rnd() - 0.5) * cr, cy, w, len));
      }
    }
    const cscale = o.chalkScale ?? 1, calpha = o.chalkAlpha ?? 0.35;
    for (let k = 0; k < (o.chalkPatches ?? 9); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.05 + rnd() * 0.1) * cscale;
      blob(chalk, cx, cy, cr, calpha + rnd() * 0.3, 0.5 + rnd() * 0.7);
      for (let i = 0; i < 26; i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr * 1.25;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.7, r = 1 + rnd() * 3;
        ctx.fillStyle = `rgba(${rgb2(chalk)},${0.2 + rnd() * 0.4})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }
    for (let i = 0; i < (o.topStreaks ?? 0); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * (o.streakWidth ?? 0.014), len = s * (0.25 + rnd() * 0.55);
      const a = (o.streakAlpha ?? 0.1) + rnd() * 0.22;
      const g = ctx.createLinearGradient(0, 0, 0, len);
      g.addColorStop(0, `rgba(${rgb2(run)},${a})`);
      g.addColorStop(o.hardEdges ? 0.92 : 0.25, `rgba(${rgb2(rust)},${o.hardEdges ? a : a * 0.8})`);
      g.addColorStop(1, `rgba(${rgb2(rust)},0)`);
      ctx.fillStyle = g;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, 0, w, len);
    }
    for (const hb of o.hbands ?? []) {
      const y0 = s * (1 - hb.v1), y1 = s * (1 - hb.v0), tone = hb.tone ?? rust;
      ctx.fillStyle = `rgba(${rgb2(tone)},${hb.alpha ?? 0.8})`;
      ctx.fillRect(0, y0, s, y1 - y0);
      for (let i = 0; i < (hb.specks ?? 0); i++) {
        const x = rnd() * s, y = y0 + rnd() * (y1 - y0), r = 0.8 + rnd() * 2.2;
        ctx.fillStyle = `rgba(${rgb2(rnd() < 0.5 ? run : base)},${0.2 + rnd() * 0.5})`;
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.arc(x + dx, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    for (const bs of o.bandStreaks ?? []) {
      const y0 = s * (1 - bs.v);
      for (let i = 0; i < (bs.count ?? 12); i++) {
        const x = rnd() * s, w = 1 + rnd() * s * (bs.width ?? 0.012), len = s * ((bs.len ?? 0.12) + rnd() * (bs.lenVar ?? 0.25));
        const a = (bs.alpha ?? 0.14) + rnd() * 0.22;
        const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
        g.addColorStop(0, `rgba(${rgb2(run)},${a})`);
        g.addColorStop(o.hardEdges ? 0.92 : 0.3, `rgba(${rgb2(rust)},${o.hardEdges ? a : a * 0.8})`);
        g.addColorStop(1, `rgba(${rgb2(rust)},0)`);
        ctx.fillStyle = g;
        for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0 - 2, w, len);
      }
    }
    if (o.stencil) {
      const st = o.stencil, px = s * (st.size ?? 0.06);
      ctx.font = `bold ${px}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = `rgba(${rgb2(st.tone ?? chalk)},${st.alpha ?? 0.85})`;
      for (const dx of [-s, 0, s]) ctx.fillText(st.text, s * (st.u ?? 0.5) + dx, s * (1 - (st.v ?? 0.5)));
    }
    if (o.groundBand) {
      const b = o.groundBand, g = ctx.createLinearGradient(0, s, 0, s * (1 - (o.groundHeight ?? 0.22)));
      g.addColorStop(0, `rgba(${rgb2(run)},${b})`);
      g.addColorStop(0.45, `rgba(${rgb2(run)},${b * 0.4})`);
      g.addColorStop(1, `rgba(${rgb2(run)},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, s, s);
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.grain ?? 1800); i++) {
      const x = rnd() * s, y = rnd() * s, r = 0.5 + rnd() * 1.3, a = 0.03 + rnd() * 0.07;
      ctx.fillStyle = `rgba(150,140,130,${a})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function sweepTube(pts, r, seg = 10, hex, cap = true) {
  const P = pts.map((p) => new THREE.Vector3(p[0], p[1], p[2]));
  for (let i = P.length - 1; i > 0; i--) if (P[i].distanceTo(P[i - 1]) < 1e-7) P.splice(i, 1);
  if (P.length < 2) return new THREE.BufferGeometry();
  const n = P.length;
  const segDir = [];
  for (let i = 0; i < n - 1; i++) segDir.push(P[i + 1].clone().sub(P[i]).normalize());
  const T = P.map((_, i) => i === 0 ? segDir[0].clone() : i === n - 1 ? segDir[n - 2].clone() : segDir[i - 1].clone().add(segDir[i]).normalize());
  let N = Math.abs(T[0].y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  N.sub(T[0].clone().multiplyScalar(N.dot(T[0]))).normalize();
  const pos = [], idx = [];
  for (let i = 0; i < n; i++) {
    if (i > 0) {
      const q = new THREE.Quaternion().setFromUnitVectors(T[i - 1], T[i]);
      N.applyQuaternion(q);
      N.sub(T[i].clone().multiplyScalar(N.dot(T[i]))).normalize();
    }
    const B = new THREE.Vector3().crossVectors(T[i], N).normalize();
    const k = i > 0 && i < n - 1 ? 1 / Math.max(0.5, segDir[i - 1].dot(T[i])) : 1;
    for (let j = 0; j < seg; j++) {
      const th = j * Math.PI * 2 / seg;
      const c = Math.cos(th), s = Math.sin(th);
      pos.push(P[i].x + (N.x * c + B.x * s * k) * r, P[i].y + (N.y * c + B.y * s * k) * r, P[i].z + (N.z * c + B.z * s * k) * r);
    }
  }
  for (let i = 0; i < n - 1; i++) for (let j = 0; j < seg; j++) {
    const a = i * seg + j, b = (i + 1) * seg + j, c2 = (i + 1) * seg + (j + 1) % seg, d = i * seg + (j + 1) % seg;
    idx.push(a, c2, b, a, d, c2);
  }
  if (cap) {
    for (const [ring, at, flip] of [[0, P[0], true], [n - 1, P[n - 1], false]]) {
      const base = pos.length / 3;
      for (let j = 0; j < seg; j++) {
        const k = (ring * seg + j) * 3;
        pos.push(pos[k], pos[k + 1], pos[k + 2]);
      }
      const ci = pos.length / 3;
      pos.push(at.x, at.y, at.z);
      for (let j = 0; j < seg; j++) {
        const a = base + j, b = base + (j + 1) % seg;
        if (flip) idx.push(ci, b, a);
        else idx.push(ci, a, b);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return hex === void 0 ? g : tintGeo(g, hex);
}
function frontAtlasUV(geo, a) {
  const p = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
  const uv = new Float32Array(p.count * 2);
  const col = geo.getAttribute("color");
  const base = a.base !== void 0 ? new THREE.Color(a.base) : null;
  const minNz = a.minNz ?? 0.7;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i);
    const E = 1e-4;
    const front = nrm.getZ(i) > minNz && x >= a.x0 - E && x <= a.x1 + E && y >= (a.yMin ?? a.y1) - E && y <= a.y0 + E;
    if (front) {
      uv[i * 2] = (x - a.x0) / (a.x1 - a.x0);
      uv[i * 2 + 1] = (y - a.y1) / (a.y0 - a.y1);
      if (base && col) col.setXYZ(i, base.r, base.g, base.b);
    } else {
      uv[i * 2] = a.pin[0];
      uv[i * 2 + 1] = a.pin[1];
    }
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  if (col) col.needsUpdate = true;
  return geo;
}
function panelUV(geo, scale, rot = false) {
  const p = geo.getAttribute("position");
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const u = rot ? p.getY(i) : p.getX(i), v = rot ? p.getX(i) : p.getY(i);
    uv[i * 2] = u / scale;
    uv[i * 2 + 1] = v / scale;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return geo;
}
function spike(at, w, h) {
  const g = new THREE.ConeGeometry(w / Math.SQRT2, h, 4, 1, false);
  g.rotateY(Math.PI / 4);
  g.translate(at[0], at[1] + h / 2, at[2]);
  g.computeVertexNormals();
  return g;
}
function grimeTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const wash = o.wash ?? [0.62, 0.62, 0.58], washA = o.washAlpha ?? 0.7, cov = o.coverage ?? 0.3;
    const base = o.base ?? [1, 1, 1];
    ctx.fillStyle = `rgb(${rgb2(base)})`;
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.streaks ?? 26); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.012, len = s * (0.15 + rnd() * 0.6), a = 0.05 + rnd() * 0.12;
      const g2 = ctx.createLinearGradient(0, 0, 0, len);
      g2.addColorStop(0, `rgba(${rgb2(wash)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(wash)},0)`);
      ctx.fillStyle = g2;
      ctx.fillRect(x, 0, w, len);
      ctx.fillRect(x - s, 0, w, len);
    }
    if (o.washFlat) {
      ctx.fillStyle = `rgba(${rgb2(wash)},${washA})`;
      ctx.fillRect(0, 0, s, s);
    } else {
      const grad = ctx.createLinearGradient(0, s, 0, s * (1 - cov));
      grad.addColorStop(0, `rgba(${rgb2(wash)},${washA})`);
      grad.addColorStop(0.5, `rgba(${rgb2(wash)},${washA * 0.45})`);
      grad.addColorStop(1, `rgba(${rgb2(wash)},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, s, s);
    }
    for (let i = 0; i < (o.blotches ?? 40); i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 1.6) * s, r = 3 + rnd() * s * 0.06, a = 0.08 + rnd() * 0.3;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(wash)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(wash)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (o.rubs) {
      const rub = o.rub ?? [0.3, 0.28, 0.3];
      for (let i = 0; i < o.rubs; i++) {
        const x = rnd() * s, y = s * (0.6 + rnd() * 0.38);
        const w = s * (0.05 + rnd() * 0.22), h = s * (6e-3 + rnd() * 0.03), a = 0.2 + rnd() * 0.45;
        const g2 = ctx.createLinearGradient(x - w / 2, 0, x + w / 2, 0);
        g2.addColorStop(0, `rgba(${rgb2(rub)},0)`);
        g2.addColorStop(0.5, `rgba(${rgb2(rub)},${a})`);
        g2.addColorStop(1, `rgba(${rgb2(rub)},0)`);
        ctx.fillStyle = g2;
        for (const dx of [-s, 0, s]) ctx.fillRect(x - w / 2 + dx, y - h / 2, w, h);
      }
    }
    if (o.scuffs) {
      ctx.globalCompositeOperation = "source-over";
      for (let i = 0; i < o.scuffs; i++) {
        const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * (o.scuffScale ?? 0.14));
        const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
        g2.addColorStop(0, `rgba(255,255,255,${o.scuffAlpha ?? 0.55})`);
        g2.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g2;
        for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalCompositeOperation = "multiply";
    }
    for (let i = 0; i < (o.clouds ?? 0); i++) {
      const v = o.cloud ?? [0.86, 0.86, 0.84];
      const x = rnd() * s, y = rnd() * s, r = s * (o.cloudR ?? 0.16) * (0.4 + rnd() * 1.4), a = (o.cloudAlpha ?? 0.12) * (0.4 + rnd());
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (o.scuffs) {
      const v = o.scuff ?? [0.62, 0.62, 0.64], band = o.scuffBand ?? [0.3, 0.7];
      for (let i = 0; i < o.scuffs; i++) {
        const cx = rnd() * s, cy = s * (1 - (band[0] + rnd() * (band[1] - band[0])));
        const w = s * (0.05 + rnd() * 0.11), h = w * (0.05 + rnd() * 0.1);
        const a = (o.scuffAlpha ?? 0.34) * (0.5 + rnd());
        for (const dx of [-s, 0, s]) {
          ctx.save();
          ctx.translate(cx + dx, cy);
          ctx.rotate((rnd() - 0.5) * 0.45);
          ctx.scale(1, h / w);
          const g2 = ctx.createRadialGradient(0, 0, 0, 0, 0, w);
          g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
          g2.addColorStop(0.45, `rgba(${rgb2(v)},${a * 0.55})`);
          g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
          ctx.fillStyle = g2;
          ctx.beginPath();
          ctx.arc(0, 0, w, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }
    if (o.seams) {
      const v = o.seam ?? [0.72, 0.71, 0.68];
      for (let i = 0; i < o.seams; i++) {
        const x = Math.round(s * ((o.seamAt ?? 0.42) + i / o.seams)) % s;
        const wpx = Math.max(1, Math.round(s * 4e-3));
        ctx.fillStyle = `rgba(${rgb2(v)},${o.seamAlpha ?? 0.5})`;
        ctx.fillRect(x, 0, wpx, s);
        ctx.fillStyle = `rgba(${rgb2(v)},${(o.seamAlpha ?? 0.5) * 0.3})`;
        ctx.fillRect(x + wpx, 0, wpx, s);
      }
    }
    for (let i = 0; i < (o.pits ?? 0); i++) {
      const v = o.pit ?? [0.42, 0.4, 0.36];
      const x = rnd() * s, y = rnd() * s, r = (o.pitR ?? 1.6) * (0.5 + rnd() * 1.3);
      const a = 0.25 + rnd() * 0.5;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r * 2);
      g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
      g2.addColorStop(0.4, `rgba(${rgb2(v)},${a * 0.45})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (o.moss) {
      const m = o.moss, band = o.mossBand ?? 0.22;
      const mg = ctx.createLinearGradient(0, s, 0, s * (1 - band * 1.3));
      mg.addColorStop(0, `rgba(${rgb2(m)},${o.mossWash ?? 0.35})`);
      mg.addColorStop(1, `rgba(${rgb2(m)},0)`);
      ctx.fillStyle = mg;
      ctx.fillRect(0, 0, s, s);
      for (let k = 0; k < (o.mossClusters ?? 14); k++) {
        const cx = rnd() * s, cy = s - Math.pow(rnd(), 1.6) * s * band, cr = s * (0.015 + rnd() * 0.04);
        const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
        cg.addColorStop(0, `rgba(${rgb2(m)},0.7)`);
        cg.addColorStop(0.6, `rgba(${rgb2(m)},0.35)`);
        cg.addColorStop(1, `rgba(${rgb2(m)},0)`);
        ctx.fillStyle = cg;
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(cx + dx, cy, cr, cr * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 24; i++) {
          const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
          const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.6, r = 1 + rnd() * 3;
          ctx.fillStyle = `rgba(${rgb2(m)},${0.35 + rnd() * 0.5})`;
          for (const dx of [-s, 0, s]) {
            ctx.beginPath();
            ctx.arc(x + dx, y, r, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }
    for (let i = 0; i < (o.grain ?? 1500); i++) {
      const lo = o.grainLo ?? 200;
      const x = rnd() * s, y = rnd() * s, v = lo + Math.round(rnd() * (255 - lo));
      ctx.fillStyle = `rgba(${v},${v},${v},${o.grainAlpha ?? 0.12})`;
      ctx.fillRect(x, y, 1.5, 1.5);
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function chainlinkTile(size, wire, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.clearRect(0, 0, s, s);
    ctx.lineWidth = Math.max(1.5, wire * s);
    ctx.lineCap = "round";
    const v = 150 + Math.round(rnd() * 30);
    ctx.strokeStyle = `rgb(${v},${v + 2},${v + 4})`;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(s, s);
    ctx.moveTo(s, 0);
    ctx.lineTo(0, s);
    ctx.stroke();
    ctx.fillStyle = `rgb(${v - 20},${v - 18},${v - 16})`;
    for (const [x, y] of [[0, 0], [s, 0], [0, s], [s, s], [s / 2, s / 2]]) {
      ctx.beginPath();
      ctx.arc(x, y, ctx.lineWidth * 0.9, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}
function bambooTile(size, strips, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const sw = s / strips;
    for (let b = 0; b < strips; b++) {
      const tone = 0.8 + rnd() * 0.2, v = Math.round(255 * tone);
      ctx.fillStyle = `rgb(${v},${v - 2},${v - 6})`;
      ctx.fillRect(b * sw, 0, sw, s);
      ctx.fillStyle = "rgba(50,42,34,0.6)";
      ctx.fillRect(b * sw, 0, Math.max(1, s * 6e-3), s);
      ctx.fillStyle = "rgba(255,255,255,0.10)";
      ctx.fillRect(b * sw + sw * 0.35, 0, sw * 0.25, s);
      const n = 1 + Math.floor(rnd() * 2);
      for (let k = 0; k < n; k++) {
        const y = rnd() * s;
        ctx.fillStyle = "rgba(70,60,48,0.45)";
        ctx.fillRect(b * sw, y, sw, Math.max(1, s * 8e-3));
      }
      for (let k = 0; k < 6; k++) {
        const x = b * sw + rnd() * sw;
        ctx.fillStyle = `rgba(80,70,58,${0.05 + rnd() * 0.1})`;
        ctx.fillRect(x, 0, 1, s);
      }
    }
    for (let i = 0; i < 300; i++) {
      const x = rnd() * s, y = rnd() * s;
      ctx.fillStyle = "rgba(30,28,24,0.18)";
      ctx.fillRect(x, y, 1 + rnd() * 2, 1 + rnd() * 2);
    }
  });
}
function posterTile(size, seed, lines) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.clearRect(0, 0, s, s);
    for (let k = 0; k < 4; k++) {
      const x = s * (0.02 + rnd() * 0.3), y = s * (0.15 + rnd() * 0.45), w = s * (0.14 + rnd() * 0.16), h = s * (0.18 + rnd() * 0.22);
      ctx.fillStyle = `rgba(${225 + Math.round(rnd() * 20)},${222 + Math.round(rnd() * 18)},${210 + Math.round(rnd() * 20)},0.96)`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      const n = 9;
      for (let i = 1; i <= n; i++) ctx.lineTo(x + w * i / n, y + (rnd() - 0.5) * h * 0.08);
      for (let i = 1; i <= n; i++) ctx.lineTo(x + w + (rnd() - 0.5) * w * 0.08, y + h * i / n);
      for (let i = n - 1; i >= 0; i--) ctx.lineTo(x + w * i / n, y + h + (rnd() - 0.5) * h * 0.12);
      for (let i = n - 1; i >= 0; i--) ctx.lineTo(x + (rnd() - 0.5) * w * 0.08, y + h * i / n);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "rgba(40,40,45,0.55)";
      for (let i = 0; i < 7; i++) ctx.fillRect(x + w * 0.1, y + h * (0.2 + i * 0.1), w * (0.3 + rnd() * 0.5), Math.max(1, s * 6e-3));
    }
    ctx.fillStyle = "rgba(20,20,22,0.88)";
    ctx.font = `bold ${Math.round(s * 0.07)}px sans-serif`;
    ctx.textBaseline = "middle";
    for (let i = 0; i < lines.length; i++) {
      const x = s * 0.4, y = s * (0.44 + i * 0.13);
      for (let k = 0; k < 3; k++) {
        ctx.globalAlpha = 0.6;
        ctx.fillText(lines[i], x + (rnd() - 0.5) * 3, y + (rnd() - 0.5) * 3);
      }
      ctx.globalAlpha = 1;
    }
  });
}
function stripeTile(size, bands, a, b, seed, o = {}) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    const w = s / bands;
    for (let i = 0; i < bands; i++) {
      ctx.fillStyle = rgb2(i % 2 ? b : a);
      ctx.fillRect(Math.floor(i * w), 0, Math.ceil(w) + 1, s);
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.smudges ?? 40); i++) {
      const x = rnd() * s, y = rnd() * s, r = 4 + rnd() * s * 0.08, al = 0.06 + rnd() * 0.18;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(150,140,125,${al})`);
      g2.addColorStop(1, "rgba(150,140,125,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < (o.specks ?? 1200); i++) {
      const v = 200 + Math.round(rnd() * 55);
      ctx.fillStyle = `rgba(${v},${v},${v},0.10)`;
      ctx.fillRect(rnd() * s, rnd() * s, 1.5, 1.5);
    }
    if (o.broad) {
      const lo = o.broadLo ?? 0.8, hi = o.broadHi ?? 1;
      const g3 = ctx.createLinearGradient(0, 0, s, 0);
      for (let i = 0; i <= 64; i++) {
        const t = i / 64;
        const v = lo + (hi - lo) * (0.5 + 0.5 * Math.cos(2 * Math.PI * o.broad * t));
        const c = Math.round(255 * v);
        g3.addColorStop(t, `rgb(${c},${c},${c})`);
      }
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, s, s);
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function latheUV(g, pointCount, seg, scale, vScale = scale, v0 = 0) {
  const p = g.getAttribute("position");
  let rMax = 0;
  for (let i = 0; i < p.count; i++) rMax = Math.max(rMax, Math.hypot(p.getX(i), p.getZ(i)));
  const rep = Math.max(1, Math.round(2 * Math.PI * rMax / scale));
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const s = Math.floor(i / pointCount);
    uv[i * 2] = s / seg * rep;
    uv[i * 2 + 1] = (p.getY(i) - v0) / vScale;
  }
  g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
}
function pebbleTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    ctx.fillStyle = rgb2(o.ground ?? [0.45, 0.42, 0.38]);
    ctx.fillRect(0, 0, s, s);
    const pal = o.palette ?? [[0.85, 0.78, 0.66], [0.72, 0.62, 0.5], [0.6, 0.58, 0.55], [0.9, 0.86, 0.8]];
    const n = o.count ?? 900, rMin = s * (o.rMin ?? 0.012), rMax = s * (o.rMax ?? 0.028);
    for (let i = 0; i < n; i++) {
      const x = rnd() * s, y = rnd() * s, rx = rMin + rnd() * (rMax - rMin), ry = rx * (0.6 + rnd() * 0.5), a = rnd() * Math.PI;
      const c = pal[Math.floor(rnd() * pal.length)], k = 0.85 + rnd() * 0.3;
      if (o.shade) {
        ctx.fillStyle = rgb2((o.ground ?? [0.45, 0.42, 0.38]).map((v) => v * o.shade));
        for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(x + dx + rx * 0.16, y + dy + ry * 0.22, rx * 1.1, ry * 1.1, a, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.fillStyle = rgb2(c.map((v) => Math.min(1, v * k)));
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, rx, ry, a, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = `rgba(255,255,255,${o.gloss ?? 0.18})`;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.ellipse(x + dx - rx * 0.2, y + dy - ry * 0.25, rx * 0.5, ry * 0.4, a, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  });
}
function treadTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const groove = o.groove ?? 0.8, slots = o.slots ?? 2, rings = o.rings ?? 2;
    const base = o.base ?? [1, 1, 1];
    ctx.fillStyle = `rgb(${rgb(base)})`;
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    const gv = Math.round(255 * groove);
    ctx.fillStyle = `rgb(${gv},${gv},${gv})`;
    const pitch = s / slots, w = pitch * (o.slotWidth ?? 0.16);
    for (let i = 0; i < slots; i++) {
      const x = i * pitch + pitch * 0.4 + (rnd() - 0.5) * pitch * 0.1;
      ctx.fillRect(x, s * 0.12, w, s * 0.76);
      ctx.fillRect(x - s, s * 0.12, w, s * 0.76);
    }
    for (let i = 0; i < rings; i++) {
      const y = s * (0.2 + 0.6 * (i + 0.5) / rings);
      ctx.fillRect(0, y - 1.5, s, 3);
    }
    for (let i = 0; i < 24; i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * 0.12), v = 235 + Math.round(rnd() * 20);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${v},${v},${v},0.5)`);
      g2.addColorStop(1, `rgba(${v},${v},${v},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function tyreTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const base = o.base ?? 200, band = o.band ?? [0.24, 0.76], groove = o.groove ?? 0.45;
    const gv = Math.round(base * groove), rv = Math.round(base * 0.7), mv = Math.round(base * 0.9);
    const dust = o.dust ?? [232, 214, 190];
    ctx.fillStyle = `rgb(${base},${base},${base})`;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < s * s / 6; i++) {
      const v = base + Math.round((rnd() - 0.5) * 22);
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(rnd() * s, rnd() * s, 2, 2);
    }
    const strip = (ya, yb, treaded) => {
      const h = yb - ya, b0 = ya + h * (1 - band[1]), b1 = ya + h * (1 - band[0]);
      const ng = o.grooves ?? 3, gw = h * 0.024;
      ctx.fillStyle = `rgb(${gv},${gv},${gv})`;
      for (let i = 0; i < ng; i++) {
        const y = b0 + (b1 - b0) * (i + 1) / (ng + 1);
        ctx.fillRect(0, y - gw / 2, s, gw);
      }
      const ns = o.sipes ?? 2, w = s * (o.sipeWidth ?? 0.05);
      for (let k = 0; k <= ng; k++) {
        const y0 = k === 0 ? b0 : b0 + (b1 - b0) * k / (ng + 1) + gw / 2, y1 = k === ng ? b1 : b0 + (b1 - b0) * (k + 1) / (ng + 1) - gw / 2;
        const outer = k === 0 || k === ng;
        if (!treaded && !outer) continue;
        const ys0 = treaded ? y0 : k === 0 ? y0 : y1 - (y1 - y0) * 0.45, ys1 = treaded ? y1 : k === 0 ? y0 + (y1 - y0) * 0.45 : y1;
        for (let i = 0; i < ns; i++) {
          const x = ((i + 0.5) / ns + k % 2 * 0.5 / ns) * s + (rnd() - 0.5) * s * 0.06, sl = (rnd() - 0.5) * s * 0.08;
          for (const dx of [-s, 0, s]) {
            ctx.beginPath();
            ctx.moveTo(x + dx, ys0);
            ctx.lineTo(x + dx + w, ys0);
            ctx.lineTo(x + dx + w + sl, ys1);
            ctx.lineTo(x + dx + sl, ys1);
            ctx.closePath();
            ctx.fill();
          }
        }
      }
      const sh = ctx.createLinearGradient(0, b0 - h * 0.03, 0, b0 + h * 0.02);
      sh.addColorStop(0, `rgba(${gv},${gv},${gv},0)`);
      sh.addColorStop(1, `rgba(${gv},${gv},${gv},0.45)`);
      ctx.fillStyle = sh;
      ctx.fillRect(0, b0 - h * 0.03, s, h * 0.05);
      ctx.fillStyle = `rgb(${rv},${rv},${rv})`;
      ctx.fillRect(0, ya + h * 0.045, s, h * 0.012);
      ctx.fillRect(0, ya + h * 0.94, s, h * 0.012);
      ctx.fillStyle = `rgb(${mv},${mv},${mv})`;
      ctx.fillRect(0, ya + h * 0.11, s, 2);
      ctx.fillRect(0, ya + h * 0.88, s, 2);
      const dg = ctx.createLinearGradient(0, yb, 0, ya + h * 0.6);
      dg.addColorStop(0, `rgba(${dust[0]},${dust[1]},${dust[2]},${o.dustAlpha ?? 0.35})`);
      dg.addColorStop(1, `rgba(${dust[0]},${dust[1]},${dust[2]},0)`);
      ctx.fillStyle = dg;
      ctx.fillRect(0, ya + h * 0.6, s, h * 0.4);
      for (let i = 0; i < (o.scuffs ?? 14); i++) {
        const x = rnd() * s, y = rnd() < 0.5 ? b0 + (rnd() - 0.3) * h * 0.08 : b1 + (rnd() - 0.7) * h * 0.08, r = s * (0.02 + rnd() * 0.05), v = 225 + Math.round(rnd() * 25);
        const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
        g2.addColorStop(0, `rgba(${v},${v},${v},0.5)`);
        g2.addColorStop(1, `rgba(${v},${v},${v},0)`);
        ctx.fillStyle = g2;
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(x + dx, y, r * 2.2, r * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < 60; i++) {
        const x = rnd() * s, y = b0 + rnd() * (b1 - b0), v = 6 + Math.round(rnd() * 14);
        ctx.fillStyle = `rgb(${v},${Math.round(v * 0.9)},${Math.round(v * 0.75)})`;
        ctx.fillRect(x, y, 2 + rnd() * 6, 2 + rnd() * 3);
      }
      ctx.globalCompositeOperation = "source-over";
    };
    strip(0, s / 2, true);
    strip(s / 2, s, false);
  });
}
function frustum(b) {
  const [cx, y0, cz, w0, d0, w1, d1, h] = b;
  const g = new THREE.BoxGeometry(1, h, 1);
  const p = g.getAttribute("position");
  for (let i = 0; i < p.count; i++) {
    const t = (p.getY(i) + h / 2) / h;
    p.setX(i, p.getX(i) * (w0 + (w1 - w0) * t));
    p.setZ(i, p.getZ(i) * (d0 + (d1 - d0) * t));
  }
  g.computeVertexNormals();
  g.translate(cx, y0 + h / 2, cz);
  return g;
}
function zincTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const mid = o.mid ?? 0.88, lo = o.lo ?? 0.74;
    const g = (v) => {
      const b = Math.round(255 * v);
      return `rgb(${b},${b},${b})`;
    };
    ctx.fillStyle = g(mid);
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (o.clouds ?? 60); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.06 + rnd() * 0.16);
      const up = rnd() < 0.5;
      const v = up ? mid + (1 - mid) * (0.35 + rnd() * 0.5) : lo + (mid - lo) * rnd();
      const gr = ctx.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${o.cloudAlpha ?? 0.28})`);
      gr.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gr;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const cl = Array.from({ length: o.spangleClusters ?? 0 }, () => [rnd() * s, rnd() * s, s * (0.04 + rnd() * 0.1)]);
    for (let i = 0; i < (o.spangle ?? 520); i++) {
      let x = rnd() * s, y = rnd() * s;
      if (cl.length && rnd() > (o.spangleLoose ?? 0.25)) {
        const c = cl[rnd() * cl.length | 0], a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * c[2];
        x = c[0] + Math.cos(a) * d;
        y = c[1] + Math.sin(a) * d;
      }
      const r = s * ((o.spangleMin ?? 4e-3) + Math.pow(rnd(), 2) * (o.spangleMax ?? 0.013));
      const v = mid + (1 - mid) * (0.5 + rnd() * 0.5);
      const k = 4 + Math.floor(rnd() * 3);
      const a0 = rnd() * Math.PI * 2;
      ctx.fillStyle = `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${(o.spangleAlpha ?? 0.2) + rnd() * (o.spangleAlphaVar ?? 0.35)})`;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        for (let j = 0; j < k; j++) {
          const a = a0 + j * Math.PI * 2 / k, rr = r * (0.55 + rnd() * 0.75);
          const px = x + dx + Math.cos(a) * rr, py = y + dy + Math.sin(a) * rr * 0.8;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
      }
    }
    for (let i = 0; i < (o.streaks ?? 30); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.01, y0 = rnd() * s * 0.5, len = s * (0.2 + rnd() * 0.7);
      const v = lo + (mid - lo) * rnd() * 0.6, a = 0.06 + rnd() * 0.14;
      const gr = ctx.createLinearGradient(0, y0, 0, y0 + len);
      gr.addColorStop(0, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},0)`);
      gr.addColorStop(0.25, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${a})`);
      gr.addColorStop(1, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},0)`);
      ctx.fillStyle = gr;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0, w, len);
    }
    for (let i = 0; i < (o.grain ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, w = 1 + rnd() * 2, h = 1 + rnd() * 2;
      const up = rnd() < 0.5;
      const v = up ? mid + (1 - mid) * (0.4 + rnd() * 0.6) : lo + (mid - lo) * rnd();
      ctx.fillStyle = `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${0.1 + rnd() * 0.3})`;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) ctx.fillRect(x + dx, y + dy, w, h);
    }
    ctx.lineCap = "round";
    for (let i = 0; i < (o.scratches ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, len = s * (6e-3 + rnd() * 0.055), a = (rnd() - 0.5) * 0.7 + Math.PI / 2;
      const up = rnd() < 0.45;
      const v = up ? mid + (1 - mid) * (0.5 + rnd() * 0.5) : lo + (mid - lo) * rnd() * 0.8;
      ctx.strokeStyle = `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},${0.1 + rnd() * 0.28})`;
      ctx.lineWidth = 0.7 + rnd() * 1.6;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.moveTo(x + dx, y + dy);
        ctx.lineTo(x + dx + Math.cos(a) * len, y + dy + Math.sin(a) * len);
        ctx.stroke();
      }
    }
    if (o.rust) {
      const c = o.rust, band = o.rustBand ?? 0.16;
      const rgbs = `${Math.round(255 * c[0])},${Math.round(255 * c[1])},${Math.round(255 * c[2])}`;
      for (const [edge, dir, b] of [[0, 1, o.rustBandTop ?? band], [s, -1, band]]) {
        const gr = ctx.createLinearGradient(0, edge, 0, edge + dir * s * b);
        gr.addColorStop(0, `rgba(${rgbs},${o.rustWash ?? 0.3})`);
        gr.addColorStop(1, `rgba(${rgbs},0)`);
        ctx.fillStyle = gr;
        ctx.fillRect(0, 0, s, s);
      }
      for (let i = 0; i < (o.rustRuns ?? 22); i++) {
        const x = rnd() * s, w = 1 + rnd() * s * 0.014;
        const top = rnd() < 0.5;
        const y0 = top ? 0 : s - s * band * (0.3 + rnd());
        const len = s * (0.1 + rnd() * 0.32);
        const gr = ctx.createLinearGradient(0, y0, 0, y0 + len);
        gr.addColorStop(0, `rgba(${rgbs},${0.18 + rnd() * 0.32})`);
        gr.addColorStop(1, `rgba(${rgbs},0)`);
        ctx.fillStyle = gr;
        for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0, w, len);
      }
    }
  });
}
function culmUV(g, r, h, scale, vOff = 0) {
  const uv = g.getAttribute("uv");
  const ku = 2 * Math.PI * r / scale, kv = h / scale;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * ku, uv.getY(i) * kv + vOff);
  return g;
}
function grainLines(ctx, rnd, x0, x1, y0, y1, n, dark, light, aMax) {
  for (let k = 0; k < n; k++) {
    const x = x0 + rnd() * (x1 - x0), a = 0.04 + rnd() * aMax, w = rnd() < 0.75 ? 1 : 1.6;
    ctx.fillStyle = `rgba(${rnd() < 0.72 ? dark : light},${a.toFixed(3)})`;
    ctx.fillRect(x, y0, w, y1 - y0);
  }
}
function weatherPatches(ctx, rnd, s, x0, x1, n, warmA, bleachA) {
  for (let k = 0; k < n; k++) {
    const y = rnd() * s, len = s * (0.12 + rnd() * 0.45), warm = rnd() < 0.5;
    const c = warm ? "112,100,88" : "255,255,255", a = warm ? warmA * (0.4 + rnd() * 0.6) : bleachA * (0.4 + rnd() * 0.6);
    const g2 = ctx.createLinearGradient(0, y, 0, y + len);
    g2.addColorStop(0, `rgba(${c},0)`);
    g2.addColorStop(0.35, `rgba(${c},${a})`);
    g2.addColorStop(0.65, `rgba(${c},${a})`);
    g2.addColorStop(1, `rgba(${c},0)`);
    ctx.fillStyle = g2;
    for (const dy of [-s, 0]) ctx.fillRect(x0, y + dy, x1 - x0, len);
  }
}
function mouldClusters(ctx, rnd, s, spots, rx, ry, n, aMax) {
  for (const [cx, cy] of spots) {
    const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(rx, ry) * 0.8);
    g2.addColorStop(0, `rgba(28,26,22,${(aMax * 0.9).toFixed(3)})`);
    g2.addColorStop(1, "rgba(28,26,22,0)");
    ctx.fillStyle = g2;
    for (const dy of [-s, 0, s]) {
      ctx.beginPath();
      ctx.ellipse(cx, cy + dy, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let i = 0; i < n; i++) {
      const x = cx + (rnd() + rnd() - 1) * rx, y = cy + (rnd() + rnd() - 1) * ry;
      ctx.fillStyle = `rgba(28,26,22,${(0.08 + rnd() * aMax).toFixed(3)})`;
      const w = 1 + rnd() * 2, h = 1 + rnd() * 3;
      for (const dy of [-s, 0, s]) ctx.fillRect(x, y + dy, w, h);
    }
  }
}
function culmTile(size, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const DARK = "92,78,62", LIGHT = "255,255,255";
    ctx.fillStyle = "#f0efec";
    ctx.fillRect(0, 0, s, s);
    const ga = ctx.createLinearGradient(0, 0, s, 0);
    ga.addColorStop(0, "rgba(100,92,84,0.12)");
    ga.addColorStop(0.5, "rgba(255,255,255,0.10)");
    ga.addColorStop(1, "rgba(100,92,84,0.12)");
    ctx.fillStyle = ga;
    ctx.fillRect(0, 0, s, s);
    weatherPatches(ctx, rnd, s, 0, s, 14, 0.12, 0.3);
    const nodes = [s * (0.2 + rnd() * 0.1), s * (0.66 + rnd() * 0.12)];
    const stations = [0, ...nodes, s];
    for (let i = 0; i + 1 < stations.length; i++) grainLines(ctx, rnd, 0, s, stations[i], stations[i + 1], 260, DARK, LIGHT, 0.26);
    for (let k = 0; k < 2; k++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.25 + rnd() * 0.5);
      ctx.fillStyle = "rgba(38,32,26,0.55)";
      for (const dy of [-s, 0]) ctx.fillRect(x, y + dy, 1.4, len);
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      for (const dy of [-s, 0]) ctx.fillRect(x + 1.4, y + dy, 1, len);
    }
    for (const y of nodes) {
      const gs = ctx.createLinearGradient(0, y - s * 0.03, 0, y);
      gs.addColorStop(0, "rgba(60,50,40,0)");
      gs.addColorStop(1, "rgba(60,50,40,0.22)");
      ctx.fillStyle = gs;
      ctx.fillRect(0, y - s * 0.03, s, s * 0.03);
      ctx.fillStyle = "rgba(52,44,36,0.62)";
      ctx.fillRect(0, y, s, 2.5);
      ctx.fillStyle = "rgba(255,255,255,0.34)";
      ctx.fillRect(0, y + 2.5, s, 4);
      ctx.fillStyle = "rgba(60,50,40,0.30)";
      ctx.fillRect(0, y + 6.5, s, 1.5);
      const gd = ctx.createLinearGradient(0, y + 8, 0, y + s * 0.05);
      gd.addColorStop(0, "rgba(60,50,40,0.20)");
      gd.addColorStop(1, "rgba(60,50,40,0)");
      ctx.fillStyle = gd;
      ctx.fillRect(0, y + 8, s, s * 0.05);
    }
    const spots = [];
    for (const y of nodes) for (let i = 0; i < 2; i++) spots.push([rnd() * s, y + s * (0.02 + rnd() * 0.05)]);
    for (let i = 0; i < 3; i++) spots.push([rnd() * s, rnd() * s]);
    mouldClusters(ctx, rnd, s, spots, s * 0.1, s * 0.06, 90, 0.3);
  });
}
function thatchTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const nc = o.courses ?? 4, ch = s / nc;
    const stems = o.stems ?? 260, spread = o.spread ?? 0.12;
    const wMin = o.stemW?.[0] ?? 1, wMax = o.stemW?.[1] ?? 2;
    const ragged = o.ragged ?? 0.06;
    const [sr, sg, sb] = o.stemRgb ?? [120, 106, 84];
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const butts = [];
    for (let c = 0; c <= nc; c++) {
      const row = [];
      let y = 0;
      for (let x = 0; x <= s; x++) {
        if (x % Math.max(2, Math.round(s / 48)) === 0) y = (rnd() * 2 - 1) * ragged * ch;
        row.push(c * ch + y);
      }
      butts.push(row);
    }
    for (let c = 0; c < nc; c++) {
      const y0 = c * ch;
      const t = 1 - spread * rnd();
      const v = Math.round(255 * t);
      ctx.fillStyle = `rgb(${v},${Math.round(v * 0.985)},${Math.round(v * 0.95)})`;
      ctx.fillRect(0, y0 - ragged * ch - 1, s, ch + 2 * ragged * ch + 2);
      for (let k = 0; k < stems; k++) {
        const x = rnd() * s;
        const w = wMin + rnd() * (wMax - wMin);
        const tone = 1 - spread * (0.3 + rnd() * 0.7);
        const a = 0.18 + rnd() * 0.32;
        const dark = rnd() < 0.62;
        ctx.fillStyle = dark ? `rgba(${Math.round(sr * tone)},${Math.round(sg * tone)},${Math.round(sb * tone)},${a.toFixed(3)})` : `rgba(255,253,246,${(a * 0.6).toFixed(3)})`;
        const yTop = y0 - ch * (0.15 + rnd() * 0.25);
        const yBot = butts[c + 1][Math.min(s, Math.round(x))] + ch * (rnd() * 0.1);
        ctx.fillRect(x, yTop, w, Math.max(2, yBot - yTop));
        const tear = o.tear ?? 0;
        if (tear > 0 && rnd() < 0.45) {
          const L = ch * tear * (0.3 + rnd() * 0.7);
          ctx.beginPath();
          ctx.moveTo(x, yBot);
          ctx.lineTo(x + w, yBot);
          ctx.lineTo(x + w / 2, yBot + L);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = `rgba(58,48,36,${(0.1 + rnd() * 0.16).toFixed(3)})`;
          ctx.fillRect(x - 1, yBot, w + 2, L * 0.5);
        }
      }
      for (let k = 0; k < (o.seams ?? 0); k++) {
        const x = rnd() * s;
        ctx.fillStyle = `rgba(70,60,46,${(0.1 + rnd() * 0.18).toFixed(3)})`;
        ctx.fillRect(x, y0 - ch * 0.1, 1, ch * (0.7 + rnd() * 0.5));
      }
      const gaps = o.gaps ?? 0;
      for (let k = 0; k < gaps; k++) {
        const x = rnd() * s, w = s * (0.01 + rnd() * 0.03);
        ctx.fillStyle = `rgba(96,84,66,${(0.2 + rnd() * 0.18).toFixed(3)})`;
        ctx.fillRect(x, y0 + ch * 0.25, w, ch * (0.4 + rnd() * 0.5));
      }
    }
    for (let c = 1; c <= nc; c++) {
      for (let x = 0; x < s; x++) {
        const yb = butts[c][x];
        const gh = ctx.createLinearGradient(0, yb - ch * 0.09, 0, yb);
        gh.addColorStop(0, "rgba(255,252,242,0)");
        gh.addColorStop(1, `rgba(255,252,242,${(o.tip ?? 0.34).toFixed(3)})`);
        ctx.fillStyle = gh;
        for (const dy of [-s, 0]) ctx.fillRect(x, yb - ch * 0.09 + dy, 1, ch * 0.09);
        const g2 = ctx.createLinearGradient(0, yb, 0, yb + ch * 0.22);
        g2.addColorStop(0, `rgba(58,48,36,${(o.shadow ?? 0.42).toFixed(3)})`);
        g2.addColorStop(1, "rgba(58,48,36,0)");
        ctx.fillStyle = g2;
        for (const dy of [-s, 0]) ctx.fillRect(x, yb + dy, 1, ch * 0.22);
      }
    }
    for (let k = 0; k < (o.moss ?? 0); k++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * 0.14);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      const a = 0.14 + rnd() * 0.22;
      g2.addColorStop(0, `rgba(150,190,110,${a.toFixed(3)})`);
      g2.addColorStop(1, "rgba(150,190,110,0)");
      ctx.globalCompositeOperation = "multiply";
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }
    for (let k = 0; k < (o.rot ?? 0); k++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.04 + rnd() * 0.08);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      const a = 0.3 + rnd() * 0.25;
      g2.addColorStop(0, `rgba(96,86,74,${a.toFixed(3)})`);
      g2.addColorStop(0.6, `rgba(96,86,74,${(a * 0.5).toFixed(3)})`);
      g2.addColorStop(1, "rgba(96,86,74,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    weatherPatches(ctx, rnd, s, 0, s, o.weather ?? 10, 0.1, 0.22);
  });
}
function tarpTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const pitch = Math.max(3, Math.round(s / (o.tapes ?? 64)));
    for (let x = 0; x < s; x += pitch) {
      ctx.fillStyle = `rgba(30,34,44,${(0.1 + rnd() * 0.08).toFixed(3)})`;
      ctx.fillRect(x, 0, 1, s);
      ctx.fillStyle = "rgba(255,255,255,0.07)";
      ctx.fillRect(x + 1, 0, Math.max(1, pitch * 0.35), s);
    }
    for (let y = 0; y < s; y += pitch) {
      ctx.fillStyle = `rgba(30,34,44,${(0.1 + rnd() * 0.08).toFixed(3)})`;
      ctx.fillRect(0, y, s, 1);
      ctx.fillStyle = "rgba(255,255,255,0.07)";
      ctx.fillRect(0, y + 1, s, Math.max(1, pitch * 0.35));
    }
    for (let k = 0; k < (o.creases ?? 6); k++) {
      const horiz = rnd() < 0.5, p = rnd() * s, len = s * (0.5 + rnd() * 0.5), q = rnd() * s;
      ctx.fillStyle = "rgba(255,255,255,0.26)";
      ctx.fillStyle = "rgba(255,255,255,0.26)";
      if (horiz) {
        ctx.fillRect(q - len / 2, p, len, 1.6);
        ctx.fillStyle = "rgba(20,26,38,0.18)";
        ctx.fillRect(q - len / 2, p + 1.6, len, 2);
      } else {
        ctx.fillRect(p, q - len / 2, 1.6, len);
        ctx.fillStyle = "rgba(20,26,38,0.18)";
        ctx.fillRect(p + 1.6, q - len / 2, 2, len);
      }
    }
    weatherPatches(ctx, rnd, s, 0, s, o.weather ?? 12, 0.1, 0.34);
  });
}
function sawnTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const DARK = "96,84,68", LIGHT = "255,255,255";
    ctx.fillStyle = "#f4f2ee";
    ctx.fillRect(0, 0, s, s);
    weatherPatches(ctx, rnd, s, 0, s, o.weather ?? 20, 0.14, 0.3);
    grainLines(ctx, rnd, 0, s, 0, s, o.grain ?? 220, DARK, LIGHT, 0.18);
    for (let k = 0; k < (o.knots ?? 4); k++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.012 + rnd() * 0.02);
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.fillStyle = "rgba(74,60,44,0.45)";
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * 1.6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(96,80,60,0.22)";
        ctx.lineWidth = 1;
        for (let q = 1; q <= 3; q++) {
          ctx.beginPath();
          ctx.ellipse(x + dx, y + dy, r * (1 + q * 0.6), r * (1.6 + q * 0.9), 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }
    for (let k = 0; k < (o.splits ?? 3); k++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.2 + rnd() * 0.45);
      ctx.fillStyle = "rgba(58,48,36,0.42)";
      for (const dy of [-s, 0]) ctx.fillRect(x, y + dy, 1.4, len);
      ctx.fillStyle = "rgba(255,255,255,0.16)";
      for (const dy of [-s, 0]) ctx.fillRect(x + 1.4, y + dy, 1, len);
    }
    const spots = [];
    for (let i = 0; i < (o.mould ?? 3); i++) spots.push([rnd() * s, rnd() * s]);
    mouldClusters(ctx, rnd, s, spots, s * 0.09, s * 0.07, 70, 0.24);
  });
}
function galvTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [1, 1, 1], chalk = o.chalk ?? base, rust = o.rust ?? base, dark = o.dark ?? base;
    const wrap = (draw) => {
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) draw(dx, dy);
    };
    const blob = (c, x, y, r, a, ry = 1, rot = 0) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb2(c)},${a})`);
      g.addColorStop(0.55, `rgba(${rgb2(c)},${a * 0.5})`);
      g.addColorStop(1, `rgba(${rgb2(c)},0)`);
      ctx.fillStyle = g;
      wrap((dx, dy) => {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * ry, rot, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    const fl = o.flutes ?? 0, flow = o.fluteLow ?? 0.88;
    if (fl > 0) {
      for (let x = 0; x < s; x++) {
        const t = (1 - Math.cos(x / s * Math.PI * 2 * fl)) / 2;
        const k = flow + (1 - flow) * t;
        ctx.fillStyle = `rgb(${rgb2(base.map((v) => v * k))})`;
        ctx.fillRect(x, 0, 1, s);
      }
    } else {
      ctx.fillStyle = `rgb(${rgb2(base)})`;
      ctx.fillRect(0, 0, s, s);
    }
    for (let i = 0; i < (o.drift ?? 16); i++)
      blob(dark, rnd() * s, rnd() * s, s * (0.16 + rnd() * 0.3) * (o.driftScale ?? 1), 0.1 + rnd() * 0.18, 0.5 + rnd() * 0.9, rnd() * Math.PI);
    for (let k = 0; k < (o.chalkPatches ?? 14); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.08 + rnd() * 0.18) * (o.chalkScale ?? 1);
      blob(chalk, cx, cy, cr, (o.chalkAlpha ?? 0.55) + rnd() * 0.3, 0.5 + rnd() * 0.9, rnd() * Math.PI);
      for (let i = 0; i < 40; i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr * 1.3;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.8 + rnd() * 2.4;
        ctx.fillStyle = `rgba(${rgb2(chalk)},${0.2 + rnd() * 0.45})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }
    for (let k = 0; k < (o.rustClusters ?? 10); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.02 + rnd() * 0.055);
      blob(rust, cx, cy, cr, 0.25 + rnd() * 0.3, 0.7 + rnd() * 0.7, rnd() * Math.PI);
      for (let i = 0; i < (o.specksPerCluster ?? 26); i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.7 + rnd() * 1.8;
        ctx.fillStyle = `rgba(${rgb2(rust)},${0.25 + rnd() * 0.45})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      if (rnd() < 0.6) {
        const w = 1 + rnd() * s * 6e-3, len = s * (0.05 + rnd() * 0.16);
        const g = ctx.createLinearGradient(0, cy, 0, cy + len);
        g.addColorStop(0, `rgba(${rgb2(rust)},${0.14 + rnd() * 0.16})`);
        g.addColorStop(1, `rgba(${rgb2(rust)},0)`);
        ctx.fillStyle = g;
        wrap((dx) => ctx.fillRect(cx + dx + (rnd() - 0.5) * cr, cy, w, len));
      }
    }
    const rolls = o.rolls ?? 40;
    for (let i = 0; i < rolls; i++) {
      const x = (i + 0.35 + rnd() * 0.3) * s / rolls, up = rnd() < 0.45;
      const c = up ? chalk : dark, a = 0.06 + rnd() * 0.12;
      ctx.strokeStyle = `rgba(${rgb2(c)},${a})`;
      ctx.lineWidth = 0.7 + rnd() * 1.3;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.moveTo(x + dx, 0);
        ctx.lineTo(x + dx, s);
        ctx.stroke();
      }
    }
  });
}
function splitTile(size, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const DARK = "88,76,58", LIGHT = "255,255,255";
    ctx.fillStyle = "#f3f0e8";
    ctx.fillRect(0, 0, s, s);
    const ga = ctx.createLinearGradient(0, 0, s, 0);
    ga.addColorStop(0, "rgba(90,84,74,0.14)");
    ga.addColorStop(0.5, "rgba(255,255,255,0.08)");
    ga.addColorStop(1, "rgba(90,84,74,0.14)");
    ctx.fillStyle = ga;
    ctx.fillRect(0, 0, s, s);
    weatherPatches(ctx, rnd, s, 0, s, 10, 0.1, 0.34);
    const node = s * (0.3 + rnd() * 0.4);
    for (const [y0, y1] of [[0, node], [node, s]]) grainLines(ctx, rnd, 0, s, y0, y1, 320, DARK, LIGHT, 0.24);
    for (let k = 0; k < 3; k++) {
      const x = rnd() * s, y = rnd() * s, len = s * (0.3 + rnd() * 0.6);
      ctx.fillStyle = "rgba(40,34,26,0.55)";
      for (const dy of [-s, 0]) ctx.fillRect(x, y + dy, 1.6, len);
      ctx.fillStyle = "rgba(255,255,255,0.20)";
      for (const dy of [-s, 0]) ctx.fillRect(x + 1.6, y + dy, 1.2, len);
    }
    {
      const y = node;
      const gs = ctx.createLinearGradient(0, y - s * 0.03, 0, y);
      gs.addColorStop(0, "rgba(60,50,40,0)");
      gs.addColorStop(1, "rgba(60,50,40,0.24)");
      ctx.fillStyle = gs;
      ctx.fillRect(0, y - s * 0.03, s, s * 0.03);
      ctx.fillStyle = "rgba(52,44,36,0.66)";
      ctx.fillRect(0, y, s, 3);
      ctx.fillStyle = "rgba(255,255,255,0.36)";
      ctx.fillRect(0, y + 3, s, 5);
      ctx.fillStyle = "rgba(60,50,40,0.30)";
      ctx.fillRect(0, y + 8, s, 2);
    }
    for (let k = 0; k < 4; k++) {
      const cx = rnd() * s, cy = rnd() * s, rx = s * (0.012 + rnd() * 0.03), ry = rx * (1.4 + rnd() * 1.6), rot = (rnd() - 0.5) * 0.6;
      for (const dy of [-s, 0, s]) {
        const halo = ctx.createRadialGradient(cx, cy + dy, 0, cx, cy + dy, Math.max(rx, ry) * 2.4);
        halo.addColorStop(0, "rgba(96,74,40,0.42)");
        halo.addColorStop(0.5, "rgba(96,74,40,0.20)");
        halo.addColorStop(1, "rgba(96,74,40,0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.ellipse(cx, cy + dy, rx * 2.6, ry * 2.4, rot, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(36,28,18,0.82)";
        ctx.beginPath();
        ctx.ellipse(cx, cy + dy, rx, ry, rot, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(14,10,6,0.9)";
        ctx.beginPath();
        ctx.ellipse(cx + rx * 0.2, cy + dy - ry * 0.1, rx * 0.5, ry * 0.55, rot, 0, Math.PI * 2);
        ctx.fill();
      }
      for (let i = 0; i < 6; i++) {
        const x = cx + (rnd() - 0.5) * s * 0.12, y = cy + (rnd() - 0.5) * s * 0.2, r = 1 + rnd() * 1.8;
        ctx.fillStyle = "rgba(30,24,16,0.85)";
        for (const dy of [-s, 0, s]) {
          ctx.beginPath();
          ctx.arc(x, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    mouldClusters(ctx, rnd, s, [[rnd() * s, node + s * 0.04], [rnd() * s, rnd() * s]], s * 0.08, s * 0.05, 60, 0.26);
  });
}
function ropeTile(size, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#f4efe4";
    ctx.fillRect(0, 0, s, s);
    const n = 10, pitch = s / n, ang = 0.32;
    const dx = Math.tan(ang) * s;
    ctx.save();
    for (let k = -3; k < n + 3; k++) {
      const x0 = k * pitch;
      for (const oy of [-s, 0, s]) {
        ctx.strokeStyle = "rgba(70,58,40,0.55)";
        ctx.lineWidth = pitch * 0.22;
        ctx.beginPath();
        ctx.moveTo(x0, oy);
        ctx.lineTo(x0 + dx, oy + s);
        ctx.stroke();
        ctx.strokeStyle = "rgba(255,255,255,0.30)";
        ctx.lineWidth = pitch * 0.3;
        ctx.beginPath();
        ctx.moveTo(x0 + pitch * 0.5, oy);
        ctx.lineTo(x0 + pitch * 0.5 + dx, oy + s);
        ctx.stroke();
        ctx.strokeStyle = "rgba(90,76,52,0.28)";
        ctx.lineWidth = 1.2;
        for (let t = 0; t < 12; t++) {
          const yy = oy + (t + rnd()) * s / 12, xx = x0 + pitch * 0.5 + dx * ((yy - oy) / s);
          ctx.beginPath();
          ctx.moveTo(xx - pitch * 0.35, yy - pitch * 0.18);
          ctx.lineTo(xx + pitch * 0.35, yy + pitch * 0.18);
          ctx.stroke();
        }
      }
    }
    ctx.restore();
    for (let i = 0; i < 500; i++) {
      const x = rnd() * s, y = rnd() * s;
      ctx.fillStyle = rnd() < 0.6 ? "rgba(70,58,40,0.18)" : "rgba(255,255,255,0.22)";
      ctx.fillRect(x, y, 1, 1 + rnd() * 2);
    }
    for (let i = 0; i < 3; i++) {
      const y = rnd() * s, h = s * (0.06 + rnd() * 0.1);
      const g2 = ctx.createLinearGradient(0, y, 0, y + h);
      g2.addColorStop(0, "rgba(60,48,32,0)");
      g2.addColorStop(0.5, "rgba(60,48,32,0.22)");
      g2.addColorStop(1, "rgba(60,48,32,0)");
      ctx.fillStyle = g2;
      for (const dy of [-s, 0]) ctx.fillRect(0, y + dy, s, h);
    }
  });
}
function sweepProfile(o) {
  const pts = o.poly, m = pts.length, path = o.path, seg = o.seg ?? (path.kind === "arc" ? 12 : 1);
  const uvS = o.uvScale ?? 1;
  const zEntry = path.zEntry ?? 8;
  const at = (i) => {
    const t = i / seg;
    if (path.kind === "arc") {
      const R = path.radius, th = path.deg * Math.PI / 180 * t;
      const cx = R, cz = -zEntry;
      return { P: (px, py) => [cx - (R - px) * Math.cos(th), py, cz + (R - px) * Math.sin(th)], s: R * th };
    }
    const L = path.len, z = -L / 2 + L * t, sh = path.shear ?? 0;
    return { P: (px, py) => [px, py + sh * z, z], s: z + L / 2 };
  };
  const vAt = [0];
  for (let j = 1; j < m; j++) vAt.push(vAt[j - 1] + Math.hypot(pts[j][0] - pts[j - 1][0], pts[j][1] - pts[j - 1][1]));
  const vEnd = vAt[m - 1] + Math.hypot(pts[0][0] - pts[m - 1][0], pts[0][1] - pts[m - 1][1]);
  const pos = [], uv = [];
  const tri = (a, b, c, ua, ub, uc) => {
    pos.push(...a, ...b, ...c);
    uv.push(...ua, ...ub, ...uc);
  };
  let prev = at(0);
  for (let i = 1; i <= seg; i++) {
    const cur = at(i);
    for (let j = 0; j < m; j++) {
      const k = (j + 1) % m, p0 = pts[j], p1 = pts[k];
      const v0 = vAt[j] / uvS, v1 = (k === 0 ? vEnd : vAt[k]) / uvS;
      const a = prev.P(p0[0], p0[1]), b = prev.P(p1[0], p1[1]), c = cur.P(p1[0], p1[1]), d = cur.P(p0[0], p0[1]);
      const u0 = prev.s / uvS, u1 = cur.s / uvS;
      tri(a, c, d, [u0, v0], [u1, v1], [u1, v0]);
      tri(a, b, c, [u0, v0], [u0, v1], [u1, v1]);
    }
    prev = cur;
  }
  if (o.closed !== false) {
    const idx = THREE.ShapeUtils.triangulateShape(pts.map((p) => new THREE.Vector2(p[0], p[1])), []);
    const s0 = at(0), s1 = at(seg);
    for (const [ia, ib, ic] of idx) {
      const P = (S, q) => S.P(pts[q][0], pts[q][1]);
      const U = (q) => [pts[q][0] / uvS, pts[q][1] / uvS];
      tri(P(s0, ia), P(s0, ic), P(s0, ib), U(ia), U(ic), U(ib));
      tri(P(s1, ia), P(s1, ib), P(s1, ic), U(ia), U(ib), U(ic));
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(uv), 2));
  g.computeVertexNormals();
  return g;
}
function concreteTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [1, 1, 1];
    const wrap = (draw) => {
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) draw(dx, dy);
    };
    ctx.fillStyle = `rgb(${rgb2(base)})`;
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    const wash = o.wash ?? [0.7, 0.7, 0.66];
    for (let i = 0; i < (o.clouds ?? 30); i++) {
      const v = o.cloud ?? [0.9, 0.9, 0.88];
      const x = rnd() * s, y = rnd() * s, r = s * (o.cloudR ?? 0.1) * (0.4 + rnd() * 1.4), a = (o.cloudAlpha ?? 0.18) * (0.4 + rnd());
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      wrap((dx, dy) => {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    for (let i = 0; i < (o.streaks ?? 20); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * (o.streakW ?? 0.01), len = s * (0.15 + rnd() * (o.streakLen ?? 0.6)), a = (o.streakAlpha ?? 0.1) + rnd() * 0.14;
      const v = o.streak ?? wash;
      const g2 = ctx.createLinearGradient(0, 0, 0, len);
      g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, 0, w, len);
    }
    const cov = o.coverage ?? 0.25, washA = o.washAlpha ?? 0.5;
    if (washA > 0) {
      const grad = ctx.createLinearGradient(0, s, 0, s * (1 - cov));
      grad.addColorStop(0, `rgba(${rgb2(wash)},${washA})`);
      grad.addColorStop(0.5, `rgba(${rgb2(wash)},${washA * 0.45})`);
      grad.addColorStop(1, `rgba(${rgb2(wash)},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, s, s);
    }
    if (o.soot) {
      const v = o.soot, cv = o.sootCov ?? 0.3, a = o.sootAlpha ?? 0.5;
      const grad = ctx.createLinearGradient(0, s, 0, s * (1 - cv));
      grad.addColorStop(0, `rgba(${rgb2(v)},${a})`);
      grad.addColorStop(0.7, `rgba(${rgb2(v)},${a * 0.6})`);
      grad.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, s, s);
      for (let i = 0; i < (o.sootBlots ?? 24); i++) {
        const x = rnd() * s, y = s * (1 - cv * (0.2 + rnd() * 1.1)), r = s * (0.03 + rnd() * 0.1);
        const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
        g2.addColorStop(0, `rgba(${rgb2(v)},${a * (0.3 + rnd() * 0.5)})`);
        g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
        ctx.fillStyle = g2;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.ellipse(x + dx, y + dy, r * 1.6, r, 0, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }
    for (const rs of o.rustStreaks ?? []) {
      const v = rs.tone ?? [0.62, 0.42, 0.22], y0 = s * (1 - rs.v);
      for (let i = 0; i < (rs.count ?? 6); i++) {
        const x = rs.u !== void 0 ? s * rs.u + (rnd() - 0.5) * s * (rs.spread ?? 0.02) : rnd() * s;
        const w = 1 + rnd() * s * (rs.width ?? 0.01), len = s * ((rs.len ?? 0.15) + rnd() * (rs.lenVar ?? 0.25)), a = (rs.alpha ?? 0.35) + rnd() * 0.3;
        const g2 = ctx.createLinearGradient(0, y0, 0, y0 + len);
        g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
        g2.addColorStop(0.6, `rgba(${rgb2(v)},${a * 0.6})`);
        g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
        ctx.fillStyle = g2;
        for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0, w, len);
      }
    }
    for (let i = 0; i < (o.pour ?? 0); i++) {
      const y = Math.round(s * ((o.pourAt ?? 0.3) + i / o.pour)) % s, v = o.pourTone ?? [0.72, 0.71, 0.68], h = Math.max(1, Math.round(s * 4e-3));
      ctx.fillStyle = `rgba(${rgb2(v)},${o.pourAlpha ?? 0.45})`;
      ctx.fillRect(0, y, s, h);
      ctx.fillStyle = `rgba(${rgb2(v)},${(o.pourAlpha ?? 0.45) * 0.3})`;
      ctx.fillRect(0, y + h, s, h);
    }
    for (let i = 0; i < (o.seams ?? 0); i++) {
      const x = Math.round(s * ((o.seamAt ?? 0.42) + i / o.seams)) % s, v = o.seam ?? [0.72, 0.71, 0.68], w = Math.max(1, Math.round(s * (o.seamW ?? 4e-3)));
      ctx.fillStyle = `rgba(${rgb2(v)},${o.seamAlpha ?? 0.5})`;
      ctx.fillRect(x, 0, w, s);
      ctx.fillStyle = `rgba(${rgb2(v)},${(o.seamAlpha ?? 0.5) * 0.3})`;
      ctx.fillRect(x + w, 0, w, s);
    }
    if (o.ties) {
      const [nc, nr] = o.ties, r = s * (o.tieR ?? 6e-3), v = o.tie ?? [0.45, 0.44, 0.42];
      const ox = s * (o.tieOff?.[0] ?? 0.5) / nc, oy = s * (o.tieOff?.[1] ?? 0.5) / nr;
      for (let i = 0; i < nc; i++) for (let j = 0; j < nr; j++) {
        const x = ox + i * s / nc + (rnd() - 0.5) * 0.4, y = oy + j * s / nr + (rnd() - 0.5) * 0.4;
        const g2 = ctx.createRadialGradient(x - r * 0.2, y - r * 0.2, 0, x, y, r);
        g2.addColorStop(0, `rgba(${rgb2(v)},${0.85})`);
        g2.addColorStop(0.75, `rgba(${rgb2(v)},${0.7})`);
        g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
        ctx.fillStyle = g2;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
        if (rnd() < (o.tieDrip ?? 0.35)) {
          const g3 = ctx.createLinearGradient(0, y, 0, y + r * 6);
          g3.addColorStop(0, `rgba(${rgb2(wash)},0.35)`);
          g3.addColorStop(1, `rgba(${rgb2(wash)},0)`);
          ctx.fillStyle = g3;
          for (const dx of [-s, 0, s]) ctx.fillRect(x + dx - r * 0.4, y, r * 0.8, r * 6);
        }
      }
    }
    for (let i = 0; i < (o.pits ?? 300); i++) {
      const v = o.pit ?? [0.5, 0.49, 0.46];
      const x = rnd() * s, y = rnd() * s, r = (o.pitR ?? 0.9) * (0.5 + rnd() * 1.3), a = 0.25 + rnd() * 0.5;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r * 2);
      g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
      g2.addColorStop(0.4, `rgba(${rgb2(v)},${a * 0.45})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      wrap((dx, dy) => {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r * 2, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    if (o.moss) {
      const mv = o.moss, band = o.mossBand ?? 0.12;
      const mg = ctx.createLinearGradient(0, s, 0, s * (1 - band * 1.3));
      mg.addColorStop(0, `rgba(${rgb2(mv)},${o.mossWash ?? 0.45})`);
      mg.addColorStop(1, `rgba(${rgb2(mv)},0)`);
      ctx.fillStyle = mg;
      ctx.fillRect(0, 0, s, s);
      for (let k = 0; k < (o.mossClusters ?? 16); k++) {
        const cx = rnd() * s, cy = s - Math.pow(rnd(), 1.5) * s * band, cr = s * (0.01 + rnd() * 0.03);
        const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
        cg.addColorStop(0, `rgba(${rgb2(mv)},0.7)`);
        cg.addColorStop(0.6, `rgba(${rgb2(mv)},0.35)`);
        cg.addColorStop(1, `rgba(${rgb2(mv)},0)`);
        ctx.fillStyle = cg;
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(cx + dx, cy, cr, cr * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    for (let i = 0; i < (o.spalls ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.012 + rnd() * 0.02), v = o.spall ?? [0.8, 0.78, 0.74];
      ctx.fillStyle = `rgba(${rgb2(v)},0.55)`;
      wrap((dx, dy) => {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * (0.6 + rnd() * 0.6), rnd() * 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    for (let i = 0; i < (o.grain ?? 2e3); i++) {
      const lo = o.grainLo ?? 200;
      const x = rnd() * s, y = rnd() * s, v = lo + Math.round(rnd() * (255 - lo));
      ctx.fillStyle = `rgba(${v},${v},${v},${o.grainAlpha ?? 0.1})`;
      ctx.fillRect(x, y, 1.5, 1.5);
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function roadTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [0.4, 0.4, 0.4];
    ctx.fillStyle = `rgb(${rgb2(base)})`;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (o.speckle ?? 5e3); i++) {
      const x = rnd() * s, y = rnd() * s, k = rnd(), a = 0.1 + rnd() * 0.25;
      const v = k < 0.5 ? o.speckDark ?? [0.3, 0.3, 0.3] : o.speckLight ?? [0.62, 0.62, 0.6];
      ctx.fillStyle = `rgba(${rgb2(v)},${a})`;
      ctx.fillRect(x, y, 1 + rnd() * 1.5, 1 + rnd() * 1.5);
    }
    for (let i = 0; i < (o.patches ?? 18); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * 0.16), k = rnd();
      const v = k < 0.5 ? o.patchDark ?? [0.34, 0.34, 0.34] : o.patchLight ?? [0.48, 0.48, 0.47];
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(v)},${0.25 + rnd() * 0.3})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r * 2.2, r, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (const t of o.tracks ?? []) {
      const y = s * t, h = s * (o.trackW ?? 0.035), v = o.track ?? [0.33, 0.33, 0.33];
      const g2 = ctx.createLinearGradient(0, y - h, 0, y + h);
      g2.addColorStop(0, `rgba(${rgb2(v)},0)`);
      g2.addColorStop(0.5, `rgba(${rgb2(v)},${o.trackAlpha ?? 0.35})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      ctx.fillRect(0, y - h, s, 2 * h);
    }
    for (const ln of o.lines ?? []) {
      const y = s * (1 - ln.v), h = Math.max(1.5, s * ln.w), v = ln.tone ?? [1, 1, 1], a = ln.alpha ?? 0.9;
      if (ln.dashes) {
        const per = s / ln.dashes, dl = per * (ln.dashFrac ?? 0.35);
        for (let i = 0; i < ln.dashes; i++) {
          ctx.fillStyle = `rgba(${rgb2(v)},${a})`;
          ctx.fillRect(i * per + per * 0.2, y - h / 2, dl, h);
        }
      } else {
        ctx.fillStyle = `rgba(${rgb2(v)},${a})`;
        ctx.fillRect(0, y - h / 2, s, h);
      }
      for (let i = 0; i < (ln.chips ?? 30); i++) {
        ctx.fillStyle = `rgba(${rgb2(base)},${0.4 + rnd() * 0.5})`;
        ctx.fillRect(rnd() * s, y - h / 2 + rnd() * h, 1 + rnd() * 4, 1 + rnd() * 2);
      }
    }
    for (let i = 0; i < (o.smears ?? 40); i++) {
      const y = rnd() * s, x = rnd() * s, len = s * (0.1 + rnd() * 0.4), v = o.smear ?? [0.36, 0.36, 0.36];
      const g2 = ctx.createLinearGradient(x, 0, x + len, 0);
      g2.addColorStop(0, `rgba(${rgb2(v)},0)`);
      g2.addColorStop(0.5, `rgba(${rgb2(v)},${0.08 + rnd() * 0.15})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y, len, 1 + rnd() * 3);
    }
  });
}
function hazardTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const a = o.a ?? [1, 0.82, 0.1], b = o.b ?? [0.16, 0.15, 0.14], per = o.periods ?? 4, ang = o.angle ?? Math.PI / 4;
    ctx.fillStyle = `rgb(${rgb2(a)})`;
    ctx.fillRect(0, 0, s, s);
    const w = s / per;
    ctx.fillStyle = `rgb(${rgb2(b)})`;
    for (let i = -per * 2; i < per * 3; i++) {
      const c = i * w + w * 0.5;
      ctx.save();
      ctx.translate(s / 2, s / 2);
      ctx.rotate(ang);
      ctx.fillRect(c - s * 1.5 - 0, -s * 2, w * 0.5, s * 4);
      ctx.restore();
    }
    if (o.above !== void 0) {
      const plain = o.plain ?? [1, 1, 1];
      ctx.fillStyle = `rgb(${rgb2(plain)})`;
      ctx.fillRect(0, 0, s, s * (1 - o.above));
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.scuffs ?? 60); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.02 + rnd() * 0.06), v = 0.5 + rnd() * 0.35;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${Math.round(255 * v)},${Math.round(255 * v)},${Math.round(255 * v)},0.5)`);
      g2.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < (o.grain ?? 1500); i++) {
      const v = 170 + Math.round(rnd() * 85);
      ctx.fillStyle = `rgba(${v},${v},${v},0.12)`;
      ctx.fillRect(rnd() * s, rnd() * s, 1.5, 1.5);
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function earthTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [1, 1, 1];
    ctx.fillStyle = `rgb(${rgb2(base)})`;
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    const wrap = (draw) => {
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) draw(dx, dy);
    };
    for (let i = 0; i < (o.clouds ?? 40); i++) {
      const v = rnd() < 0.5 ? o.dark ?? [0.72, 0.66, 0.58] : o.light ?? [0.96, 0.94, 0.9];
      const x = rnd() * s, y = rnd() * s, r = s * (0.06 + rnd() * 0.16);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(v)},${0.25 + rnd() * 0.3})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      wrap((dx, dy) => {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * (0.5 + rnd()), rnd() * 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    for (let i = 0; i < (o.stones ?? 260); i++) {
      const x = rnd() * s, y = rnd() * s, r = 1 + rnd() * s * 8e-3, k = rnd();
      const v = k < 0.4 ? [0.6, 0.58, 0.54] : k < 0.8 ? [0.86, 0.84, 0.8] : [0.5, 0.48, 0.45];
      ctx.fillStyle = `rgba(${rgb2(v)},${0.5 + rnd() * 0.45})`;
      wrap((dx, dy) => {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * (0.6 + rnd() * 0.6), rnd() * 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    ctx.globalCompositeOperation = "source-over";
    for (let k = 0; k < (o.weeds ?? 14); k++) {
      const cx = rnd() * s, cy = rnd() * s, n = 6 + Math.round(rnd() * 10), v = o.weed ?? [0.45, 0.58, 0.28];
      for (let i = 0; i < n; i++) {
        const a = rnd() * Math.PI * 2, d = rnd() * s * 0.02, x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d;
        ctx.strokeStyle = `rgba(${rgb2(v)},${0.55 + rnd() * 0.4})`;
        ctx.lineWidth = 1 + rnd() * 1.5;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.moveTo(x + dx, y + dy);
          ctx.lineTo(x + dx + (rnd() - 0.5) * 8, y + dy - 4 - rnd() * 8);
          ctx.stroke();
        });
      }
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.grain ?? 3e3); i++) {
      const v = 190 + Math.round(rnd() * 65);
      ctx.fillStyle = `rgba(${v},${v},${v},0.12)`;
      ctx.fillRect(rnd() * s, rnd() * s, 1.5, 1.5);
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function chequerTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [0.62, 0.62, 0.62], hi = o.hi ?? [0.9, 0.9, 0.88], lo = o.lo ?? [0.45, 0.45, 0.46];
    ctx.fillStyle = `rgb(${rgb2(base)})`;
    ctx.fillRect(0, 0, s, s);
    const n = o.n ?? 8, cell = s / n;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      const cx = (i + 0.5) * cell, cy = (j + 0.5) * cell, ang = ((i + j) % 2 ? 1 : -1) * Math.PI / 4;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ang);
      ctx.fillStyle = `rgba(${rgb2(lo)},0.7)`;
      ctx.fillRect(-cell * 0.3 + 1, -cell * 0.08 + 1, cell * 0.6, cell * 0.16);
      ctx.fillStyle = `rgba(${rgb2(hi)},0.85)`;
      ctx.fillRect(-cell * 0.3, -cell * 0.08, cell * 0.6, cell * 0.16);
      ctx.restore();
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.grime ?? 30); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.05 + rnd() * 0.15), v = o.grimeTone ?? [0.6, 0.6, 0.58];
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb2(v)},${0.15 + rnd() * 0.3})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < (o.grain ?? 2500); i++) {
      const v = 180 + Math.round(rnd() * 75);
      ctx.fillStyle = `rgba(${v},${v},${v},0.12)`;
      ctx.fillRect(rnd() * s, rnd() * s, 1.5, 1.5);
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function ribPanelTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb2 = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const ribs = o.ribs ?? 24, low = o.low ?? 0.72, base = o.base ?? [1, 1, 1];
    for (let x = 0; x < s; x++) {
      const t = (Math.cos(x / s * Math.PI * 2 * ribs) + 1) / 2;
      const k = low + (1 - low) * t;
      ctx.fillStyle = `rgb(${Math.round(255 * base[0] * k)},${Math.round(255 * base[1] * k)},${Math.round(255 * base[2] * k)})`;
      ctx.fillRect(x, 0, 1, s);
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.streaks ?? 24); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.012, len = s * (0.2 + rnd() * 0.6), a = 0.06 + rnd() * 0.14, v = o.streak ?? [0.7, 0.7, 0.68];
      const g2 = ctx.createLinearGradient(0, 0, 0, len);
      g2.addColorStop(0, `rgba(${rgb2(v)},${a})`);
      g2.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, 0, w, len);
    }
    if (o.soot) {
      const v = o.soot, cv = o.sootCov ?? 0.22, a = o.sootAlpha ?? 0.5;
      const grad = ctx.createLinearGradient(0, s, 0, s * (1 - cv));
      grad.addColorStop(0, `rgba(${rgb2(v)},${a})`);
      grad.addColorStop(1, `rgba(${rgb2(v)},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, s, s);
    }
    for (let i = 0; i < (o.grain ?? 1500); i++) {
      const v = 190 + Math.round(rnd() * 65);
      ctx.fillStyle = `rgba(${v},${v},${v},0.10)`;
      ctx.fillRect(rnd() * s, rnd() * s, 1.5, 1.5);
    }
    ctx.globalCompositeOperation = "source-over";
    for (let i = 0; i < (o.stickers ?? 0); i++) {
      const x = rnd() * s, y = s * (0.3 + rnd() * 0.5), w = s * (0.02 + rnd() * 0.04), h = w * (0.6 + rnd() * 0.8);
      ctx.fillStyle = `rgba(${230 + Math.round(rnd() * 20)},${228 + Math.round(rnd() * 20)},${225 + Math.round(rnd() * 20)},0.85)`;
      ctx.fillRect(x, y, w, h);
      ctx.fillStyle = `rgba(${Math.round(60 + rnd() * 80)},${Math.round(80 + rnd() * 80)},${Math.round(150 + rnd() * 90)},0.7)`;
      ctx.fillRect(x + w * 0.15, y + h * 0.2, w * 0.7, h * 0.3);
    }
  });
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
    if (s.emissive !== void 0) {
      m.emissive = new THREE.Color(s.emissive);
      m.emissiveIntensity = s.emissiveIntensity ?? 1;
    }
    if (s.opacity !== void 0) {
      m.transparent = true;
      m.opacity = s.opacity;
      m.depthWrite = true;
    }
    if (s.alphaTest !== void 0) {
      m.alphaTest = s.alphaTest;
      m.transparent = false;
    }
    m.name = s.id;
    map[s.id] = m;
  }
  return map;
}
function createExpresswayHammerheadPierModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Expressway Hammerhead Pier";
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
  for (const c of G.components) {
    const gs = [];
    for (const b of c.boxes ?? []) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const b of mirrorX(c.boxesMirrored ?? [])) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const t of c.tubes ?? []) gs.push(tube(t.pts, t.r, t.seg ?? 8, t.hex));
    for (const t of c.sweeps ?? []) gs.push(sweepTube(t.pts, t.r, t.seg ?? 10, t.hex, t.cap !== false));
    for (const st of c.straps ?? []) gs.push(strap(st.pts, st.w, st.t, st.about, st.hex));
    for (const cy of c.cyls ?? []) {
      const g2 = new THREE.CylinderGeometry(cy.rt, cy.rb, cy.h, cy.seg ?? 12, 1, cy.open ?? false, cy.th0 ?? 0, cy.thLen ?? Math.PI * 2);
      if (cy.uvRep) {
        const uv = g2.getAttribute("uv");
        for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * cy.uvRep[0], uv.getY(i) * cy.uvRep[1]);
      }
      if (cy.sideUV) {
        const uv = g2.getAttribute("uv"), n = ((cy.seg ?? 12) + 1) * 2;
        for (let i = 0; i < n; i++) uv.setXY(i, cy.sideUV[0], cy.sideUV[1]);
      }
      if (cy.scale) {
        g2.scale(cy.scale[0], cy.scale[1], cy.scale[2]);
        g2.computeVertexNormals();
      }
      if (c.uv === "culm") culmUV(g2, cy.rt, cy.h, c.uvScale ?? 1, cy.vOff ?? 0);
      if (cy.rx) g2.rotateX(cy.rx);
      if (cy.ry) g2.rotateY(cy.ry);
      if (cy.rz) g2.rotateZ(cy.rz);
      g2.translate(cy.at[0], cy.at[1], cy.at[2]);
      gs.push(tintGeo(g2, cy.hex));
    }
    for (const l of c.lathes ?? []) {
      const g2 = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false, l.weldSeam === true);
      if (l.cylUV) {
        const cu = Array.isArray(l.cylUV) ? l.cylUV : [l.cylUV, l.cylUV, 0];
        latheUV(g2, g2.getAttribute("position").count / ((l.seg ?? 12) + 1) | 0, l.seg ?? 12, cu[0], cu[1], cu[2] ?? 0);
      }
      if (l.scale) {
        g2.scale(l.scale[0], l.scale[1], l.scale[2]);
        g2.computeVertexNormals();
      }
      if (l.ry) g2.rotateY(l.ry);
      if (l.rx) g2.rotateX(l.rx);
      if (l.rz) g2.rotateZ(l.rz);
      g2.translate(l.at[0], l.at[1], l.at[2]);
      gs.push(tintGeo(g2, l.hex));
    }
    for (const d of c.domes ?? []) {
      const g2 = ribbedDome(d.pts, d.ribs, d.amp, d.seg ?? 24, d.valley, d.smooth === true);
      if (d.ry) g2.rotateY(d.ry);
      if (d.rx) g2.rotateX(d.rx);
      if (d.rz) g2.rotateZ(d.rz);
      if (d.at) g2.translate(d.at[0], d.at[1], d.at[2]);
      if (d.valley && d.hex !== void 0) {
        const col = g2.getAttribute("color");
        const t = new THREE.Color(d.hex);
        for (let i = 0; i < col.count; i++) col.setXYZ(i, col.getX(i) * t.r, col.getY(i) * t.g, col.getZ(i) * t.b);
        gs.push(g2);
      } else gs.push(d.valley ? g2 : tintGeo(g2, d.hex));
    }
    for (const p of c.planes ?? []) {
      const g2 = new THREE.PlaneGeometry(p.w, p.h, 1, 1);
      g2.translate(p.at[0], p.at[1], p.at[2]);
      const uv = g2.getAttribute("uv");
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (p.rep?.[0] ?? 1), uv.getY(i) * (p.rep?.[1] ?? 1));
      gs.push(tintGeo(g2, p.hex));
    }
    for (const e of c.extrudes ?? []) {
      const shape = new THREE.Shape();
      shape.moveTo(e.poly[0][0], e.poly[0][1]);
      for (let i = 1; i < e.poly.length; i++) shape.lineTo(e.poly[i][0], e.poly[i][1]);
      shape.closePath();
      for (const h of e.holes ?? []) {
        const hp = new THREE.Path();
        hp.moveTo(h[0][0], h[0][1]);
        for (let i = 1; i < h.length; i++) hp.lineTo(h[i][0], h[i][1]);
        hp.closePath();
        shape.holes.push(hp);
      }
      const g2 = extrudeAlongZ(shape, e.z0, e.z1);
      if (e.rx) g2.rotateX(e.rx);
      if (e.ry) g2.rotateY(e.ry);
      if (e.rz) g2.rotateZ(e.rz);
      if (e.at) g2.translate(e.at[0], e.at[1], e.at[2]);
      gs.push(tintGeo(g2, e.hex));
    }
    for (const e of c.ellipsoids ?? []) {
      const g2 = new THREE.SphereGeometry(1, e[10] ?? 16, e[11] ?? 12);
      g2.scale(e[4], e[5], e[6]);
      if (e[7]) g2.rotateX(e[7]);
      if (e[8]) g2.rotateY(e[8]);
      if (e[9]) g2.rotateZ(e[9]);
      g2.translate(e[1], e[2], e[3]);
      gs.push(tintGeo(g2, e[0]));
    }
    for (const f of c.frusta ?? []) gs.push(tintGeo(frustum(f.slice(1)), f[0]));
    for (const s of c.spikes ?? []) gs.push(tintGeo(spike(s.at, s.w, s.h), s.hex));
    for (const sp of c.profiles ?? []) {
      const g2 = sweepProfile(sp);
      if (sp.rx) g2.rotateX(sp.rx);
      if (sp.ry) g2.rotateY(sp.ry);
      if (sp.rz) g2.rotateZ(sp.rz);
      if (sp.at) g2.translate(sp.at[0], sp.at[1], sp.at[2]);
      gs.push(tintGeo(g2, sp.hex));
    }
    for (const s of c.sheets ?? []) {
      const g2 = sheet(s);
      gs.push(s.hexUnder !== void 0 ? g2 : tintGeo(g2, s.hex));
    }
    for (const t of c.tubesAlong ?? []) {
      const g2 = tubeAlong(t.stations, t.seg ?? 12);
      if (t.ry) g2.rotateY(t.ry);
      if (t.at) g2.translate(t.at[0], t.at[1], t.at[2]);
      if (t.hexes) {
        const seg = t.seg ?? 12, n = t.stations.length;
        const col = new Float32Array(seg * n * 3);
        for (let i = 0; i < n; i++) {
          const e = t.hexes[Math.min(t.hexes.length - 1, i)];
          const d = new THREE.Color(Array.isArray(e) ? e[0] : e), v = new THREE.Color(Array.isArray(e) ? e[1] : e);
          for (let j = 0; j < seg; j++) {
            const f = (Math.sin(j * Math.PI * 2 / seg) + 1) / 2;
            const k = (i * seg + j) * 3;
            col[k] = d.r + (v.r - d.r) * f;
            col[k + 1] = d.g + (v.g - d.g) * f;
            col[k + 2] = d.b + (v.b - d.b) * f;
          }
        }
        g2.setAttribute("color", new THREE.BufferAttribute(col, 3));
        gs.push(g2);
      } else gs.push(tintGeo(g2, t.hex ?? 16777215));
    }
    let g = mergeGeos(gs);
    if (c.scale) g.scale(c.scale[0], c.scale[1], c.scale[2]);
    if (c.tint) {
      const a = new THREE.Color(c.tint.c0), b = new THREE.Color(c.tint.c1);
      const p = g.getAttribute("position");
      let col = g.getAttribute("color");
      if (!col) {
        col = new THREE.BufferAttribute(new Float32Array(p.count * 3).fill(1), 3);
        g.setAttribute("color", col);
      }
      const ax = c.tint.axis === "x" ? 0 : c.tint.axis === "y" ? 1 : 2;
      for (let i = 0; i < p.count; i++) {
        const v = ax === 0 ? p.getX(i) : ax === 1 ? p.getY(i) : p.getZ(i);
        const t = Math.min(1, Math.max(0, (v - c.tint.from) / (c.tint.to - c.tint.from)));
        const r = a.r + (b.r - a.r) * t, gg = a.g + (b.g - a.g) * t, bb = a.b + (b.b - a.b) * t;
        if (c.tint.keep) col.setXYZ(i, col.getX(i) * r, col.getY(i) * gg, col.getZ(i) * bb);
        else col.setXYZ(i, r, gg, bb);
      }
      col.needsUpdate = true;
    }
    if (c.uv === "world") g = worldUV(g, c.uvScale ?? 1);
    if (c.uv === "height") g = heightUV(g, c.uvScale ?? 1);
    if (c.uv === "plan") g = planUV(g, c.uvScale ?? 1);
    if (c.uv === "panel") g = panelUV(g, c.uvScale ?? 1);
    if (c.uv === "panel-rot") g = panelUV(g, c.uvScale ?? 1, true);
    if (c.uv === "front") g = frontAtlasUV(g, c.atlas);
    add(c.id, c.name, g, c.material);
    if (c.collider) colliders[c.id] = c.collider;
  }
  for (const r of G.instanced ?? []) {
    const gs = [];
    for (const b of r.boxes ?? []) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const s of r.spikes ?? []) gs.push(tintGeo(spike(s.at, s.w, s.h), s.hex));
    for (const f of r.frusta ?? []) gs.push(tintGeo(frustum(f.slice(1)), f[0]));
    for (const cy of r.cyls ?? []) {
      const g2 = new THREE.CylinderGeometry(
        cy.rt,
        cy.rb,
        cy.h,
        cy.seg ?? 12,
        1,
        cy.open ?? false,
        cy.th0 ?? 0,
        cy.thLen ?? Math.PI * 2
      );
      if (r.uv === "culm") culmUV(g2, cy.rt, cy.h, r.uvScale ?? 1, cy.vOff ?? 0);
      if (cy.rx) g2.rotateX(cy.rx);
      if (cy.ry) g2.rotateY(cy.ry);
      if (cy.rz) g2.rotateZ(cy.rz);
      g2.translate(cy.at[0], cy.at[1], cy.at[2]);
      gs.push(tintGeo(g2, cy.hex));
    }
    for (const l of r.lathes ?? []) {
      const g2 = lathe(l.pts, l.seg ?? 12, 0, l.sharp !== false, l.weldSeam === true);
      if (l.rx) g2.rotateX(l.rx);
      if (l.ry) g2.rotateY(l.ry);
      if (l.rz) g2.rotateZ(l.rz);
      if (l.at) g2.translate(l.at[0], l.at[1], l.at[2]);
      gs.push(tintGeo(g2, l.hex));
    }
    for (const s of r.spokes ?? []) {
      const g2 = spokes(s.rHub, s.rRim, s.halfW, s.n, s.hex, s.t ?? 6e-3, s.prism ?? false);
      if (s.rx) g2.rotateX(s.rx);
      if (s.ry) g2.rotateY(s.ry);
      if (s.rz) g2.rotateZ(s.rz);
      if (s.at) g2.translate(s.at[0], s.at[1], s.at[2]);
      gs.push(g2);
    }
    for (const t of r.tubes ?? []) gs.push(tube(t.pts, t.r, t.seg ?? 8, t.hex));
    for (const sp of r.profiles ?? []) {
      const g2 = sweepProfile(sp);
      if (sp.rx) g2.rotateX(sp.rx);
      if (sp.ry) g2.rotateY(sp.ry);
      if (sp.rz) g2.rotateZ(sp.rz);
      if (sp.at) g2.translate(sp.at[0], sp.at[1], sp.at[2]);
      gs.push(tintGeo(g2, sp.hex));
    }
    for (const e of r.extrudes ?? []) {
      const shape = new THREE.Shape();
      shape.moveTo(e.poly[0][0], e.poly[0][1]);
      for (let i = 1; i < e.poly.length; i++) shape.lineTo(e.poly[i][0], e.poly[i][1]);
      shape.closePath();
      const g2 = extrudeAlongZ(shape, e.z0, e.z1);
      if (e.rx) g2.rotateX(e.rx);
      if (e.ry) g2.rotateY(e.ry);
      if (e.rz) g2.rotateZ(e.rz);
      if (e.at) g2.translate(e.at[0], e.at[1], e.at[2]);
      gs.push(tintGeo(g2, e.hex));
    }
    let g = mergeGeos(gs);
    if (r.uv === "world") g = worldUV(g, r.uvScale ?? 1);
    if (r.uv === "height") g = heightUV(g, r.uvScale ?? 1);
    const mats = [];
    for (const p of r.placements) {
      mats.push(new THREE.Matrix4().compose(
        new THREE.Vector3(p[0], p[1], p[2]),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(p[3] ?? 0, p[4] ?? 0, p[5] ?? 0)),
        new THREE.Vector3(1, 1, 1)
      ));
    }
    addInst(r.id, r.name, g, r.material, mats, r.colors);
  }
  for (const t of CONFIG.tiles ?? []) {
    const mat = materials[t.material];
    if (!mat) continue;
    if (t.kind === "baked") {
      if (typeof document === "undefined") continue;
      const baked = new THREE.TextureLoader().load(t.uri);
      const srgb = THREE.SRGBColorSpace;
      if (srgb) baked.colorSpace = srgb;
      baked.anisotropy = 4;
      mat.map = baked;
      mat.needsUpdate = true;
      continue;
    }
    let tex = null;
    if (t.kind === "mud") tex = mudTile(t.size ?? 512, t.base, t.seed ?? 1, t.coverage ?? 0.33);
    if (t.kind === "dust") tex = dustTile(t.size ?? 512, t.dust, t.seed ?? 1, t.coverage ?? 0.3);
    if (t.kind === "plank") tex = plankTile(t.size ?? 512, t.boards ?? 6, t.seed ?? 5);
    if (t.kind === "rust") tex = rustTile(t.size ?? 512, t.ratio, t.seed ?? 7, t.density ?? 90);
    if (t.kind === "paint") tex = paintTile(t.size ?? 512, t.seed ?? 17, t);
    if (t.kind === "corrugation") tex = corrugationTile(t.size ?? 512, t.pitch ?? 12, t.low ?? 0.7, t.seed ?? 3);
    if (t.kind === "grime") tex = grimeTile(t.size ?? 512, t.seed ?? 11, t);
    if (t.kind === "zinc") tex = zincTile(t.size ?? 512, t.seed ?? 19, t);
    if (t.kind === "fur") tex = furTile(t.size ?? 512, t.seed ?? 13, t);
    if (t.kind === "chainlink") tex = chainlinkTile(t.size ?? 256, t.wire ?? 0.09, t.seed ?? 4);
    if (t.kind === "bamboo") tex = bambooTile(t.size ?? 512, t.strips ?? 10, t.seed ?? 6);
    if (t.kind === "stripes") tex = stripeTile(t.size ?? 256, t.bands ?? 8, t.a, t.b, t.seed ?? 9, t);
    if (t.kind === "poster") tex = posterTile(t.size ?? 512, t.seed ?? 8, t.lines ?? []);
    if (t.kind === "pebble") tex = pebbleTile(t.size ?? 512, t.seed ?? 21, t);
    if (t.kind === "tread") tex = treadTile(t.size ?? 256, t.seed ?? 23, t);
    if (t.kind === "tyre") tex = tyreTile(t.size ?? 256, t.seed ?? 29, t);
    if (t.kind === "culm") tex = culmTile(t.size ?? 512, t.seed ?? 31);
    if (t.kind === "sawn") tex = sawnTile(t.size ?? 512, t.seed ?? 43, t);
    if (t.kind === "thatch") tex = thatchTile(t.size ?? 512, t.seed ?? 37, t);
    if (t.kind === "tarp") tex = tarpTile(t.size ?? 512, t.seed ?? 41, t);
    if (t.kind === "galv") tex = galvTile(t.size ?? 512, t.seed ?? 47, t);
    if (t.kind === "split") tex = splitTile(t.size ?? 512, t.seed ?? 53);
    if (t.kind === "rope") tex = ropeTile(t.size ?? 512, t.seed ?? 59);
    if (t.kind === "ribtop") tex = ribTopTile(t.size ?? 1024, t.seed ?? 61, t);
    if (t.kind === "concrete") tex = concreteTile(t.size ?? 512, t.seed ?? 67, t);
    if (t.kind === "road") tex = roadTile(t.size ?? 512, t.seed ?? 71, t);
    if (t.kind === "hazard") tex = hazardTile(t.size ?? 256, t.seed ?? 73, t);
    if (t.kind === "earth") tex = earthTile(t.size ?? 512, t.seed ?? 79, t);
    if (t.kind === "chequer") tex = chequerTile(t.size ?? 256, t.seed ?? 83, t);
    if (t.kind === "ribpanel") tex = ribPanelTile(t.size ?? 512, t.seed ?? 89, t);
    bindTile(mat, tex, t.bump ?? 0);
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createExpresswayHammerheadPierModel(options);
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
    for (const pv of CONFIG.pivots ?? []) {
      const o = new THREE.Object3D();
      o.name = pv.name;
      o.position.set(pv.position[0], pv.position[1], pv.position[2]);
      o.userData.actionProfile = {
        animationRole: "child",
        pivot: {
          mode: "custom",
          localPosition: pv.position,
          axis: pv.axis,
          name: pv.name,
          component: pv.component,
          instance: pv.instance ?? null,
          notes: pv.note ?? ""
        }
      };
      root.add(o);
      pivots.push(o);
    }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogRXhwcmVzc3dheSBIYW1tZXJoZWFkIFBpZXIgLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcsXG4gKiBpbnN0YW5jaW5nIGFuZCB0aGUgbGF0aGUgaGVscGVycyBiZWxvdyBhcmUgaGFuZC1yb2xsZWQgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzXG4gKiBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgMTIuNSB4IDEyIHggNC40IG0sIG9yaWdpbiBiYXNlLWNlbnRlciBhdCBncm91bmQsICtZIHVwLCB0aGUgY2FwIHJ1bm5pbmcgYWxvbmcgWDsgYmVhcmluZyBzZWF0IGF0IHkgPSAxMi5cbiAqIEJ1ZGdldCAoaGVybzJ4KTogPD0xNjAwMCB0cmlhbmdsZXMsIDw9MTIgZHJhdyBjYWxscywgPD04IG1hdGVyaWFscywgPD0xNiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgU1RSRUVUIEFORCBWRU5ET1IgUFJPUFMgLS0gYSBjb25lLCBhIGJhcnJpZXIsIGEgY2FydCwgYSBzdG9vbC4gVGhlXG4gKiBzaGFyZWQgdm9jYWJ1bGFyeSBpcyB0aGUgVElOVEVEIEJPWCBhbmQgdGhlIHBvbHlsaW5lIFRVQkUgbWVyZ2VkIGludG8gb25lIGdlb21ldHJ5IHBlciBtYXRlcmlhbCxcbiAqIHdpdGggZXZlcnkgY29sb3VyIGRpZmZlcmVuY2UgaW5zaWRlIGEgbWF0ZXJpYWwgY2FycmllZCBhcyBhIHZlcnRleCBjb2xvdXIgb24gYSBXSElURSBtYXRlcmlhbCxcbiAqIGFuZCBzdXJmYWNlIGlkZW50aXR5IChjb3JydWdhdGlvbiwgZ3JpbWUgd2FzaCwgbW9zcywgcGxhbmsgam9pbnRzLCBydXN0KSBkZWxpdmVyZWQgYXMgT05FXG4gKiBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSBwZXIgbWF0ZXJpYWwgcmF0aGVyIHRoYW4gYXMgZ2VvbWV0cnkgb3IgYSBwcm9jZWR1cmFsIHRleHR1cmUgc2V0LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwiZXhwcmVzc3dheS1oYW1tZXJoZWFkLXBpZXJcIixcbiAgICBcIm5hbWVcIjogXCJFeHByZXNzd2F5IEhhbW1lcmhlYWQgUGllclwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIkV4cHJlc3N3YXlIYW1tZXJoZWFkUGllclwiLFxuICAgIFwiZW52ZWxvcGVcIjogXCJFbnZlbG9wZSAxMi41IHggMTIgeCA0LjQgbSwgb3JpZ2luIGJhc2UtY2VudGVyIGF0IGdyb3VuZCwgK1kgdXAsIHRoZSBjYXAgcnVubmluZyBhbG9uZyBYOyBiZWFyaW5nIHNlYXQgYXQgeSA9IDEyLlxcbiAqIEJ1ZGdldCAoaGVybzJ4KTogPD0xNjAwMCB0cmlhbmdsZXMsIDw9MTIgZHJhdyBjYWxscywgPD04IG1hdGVyaWFscywgPD0xNiB1bmlxdWUgZ2VvbWV0cmllcy5cIixcbiAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJjb25jcmV0ZVwiLFxuICAgICAgICBcImNvbG9yXCI6IDE0MjExMDI2LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjk0LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiY29uY3JldGVDYXBcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNDIxMTAyNixcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInN0ZWVsXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTI2MzMwMzAsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNTUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMyxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInBhaW50XCIsXG4gICAgICAgIFwiY29sb3JcIjogMTQ5OTk3NzAsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuODUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIFwidGlsZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiY29uY3JldGVcIixcbiAgICAgICAgXCJraW5kXCI6IFwiY29uY3JldGVcIixcbiAgICAgICAgXCJzaXplXCI6IDEwMjQsXG4gICAgICAgIFwic2VlZFwiOiAxMDEsXG4gICAgICAgIFwiYmFzZVwiOiBbXG4gICAgICAgICAgMC43MTEwNTMxNDYzOTcxMzA2LFxuICAgICAgICAgIDAuNzA5NzkxNTA3NDc3MzQ5NSxcbiAgICAgICAgICAwLjcwODAyMzY1ODA3Mzg3NTdcbiAgICAgICAgXSxcbiAgICAgICAgXCJjbG91ZFwiOiBbXG4gICAgICAgICAgMC44NzE1NzkxNzYxNzY1MDI2LFxuICAgICAgICAgIDAuODcxMDE4NDQ3NzY3NzEwOCxcbiAgICAgICAgICAwLjg2MzQzMDQyMDcxMTk3NDJcbiAgICAgICAgXSxcbiAgICAgICAgXCJjbG91ZHNcIjogOTAsXG4gICAgICAgIFwiY2xvdWRSXCI6IDAuMDUsXG4gICAgICAgIFwiY2xvdWRBbHBoYVwiOiAwLjIsXG4gICAgICAgIFwic3RyZWFrc1wiOiAyNixcbiAgICAgICAgXCJzdHJlYWtcIjogW1xuICAgICAgICAgIDAuNjY1MTg4NTY2NDYwMTY3MyxcbiAgICAgICAgICAwLjY2MzcyNjY2NzM5NDM4OTEsXG4gICAgICAgICAgMC42NTYyMjE0MDM4NjExNzYyXG4gICAgICAgIF0sXG4gICAgICAgIFwic3RyZWFrTGVuXCI6IDAuMyxcbiAgICAgICAgXCJzdHJlYWtBbHBoYVwiOiAwLjE2LFxuICAgICAgICBcIndhc2hcIjogW1xuICAgICAgICAgIDAuNjY1MTg4NTY2NDYwMTY3MyxcbiAgICAgICAgICAwLjY2MzcyNjY2NzM5NDM4OTEsXG4gICAgICAgICAgMC42NTE1MTIxMDgwMjM2NThcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb3ZlcmFnZVwiOiAwLFxuICAgICAgICBcIndhc2hBbHBoYVwiOiAwLFxuICAgICAgICBcInBpdHNcIjogOTM2MCxcbiAgICAgICAgXCJwaXRcIjogW1xuICAgICAgICAgIDAuNjQyMjU2Mjc2NDkxNjg1NixcbiAgICAgICAgICAwLjY0MDY5NDI0NzM1MjkwOTEsXG4gICAgICAgICAgMC42MzI2NzQ5MjQ2NzM1ODU3XG4gICAgICAgIF0sXG4gICAgICAgIFwicGl0UlwiOiAwLjgsXG4gICAgICAgIFwiZ3JhaW5cIjogNTc2MDAsXG4gICAgICAgIFwiZ3JhaW5BbHBoYVwiOiAwLjA5LFxuICAgICAgICBcImJ1bXBcIjogMC4wMDE1LFxuICAgICAgICBcInRpZXNcIjogW1xuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE4XG4gICAgICAgIF0sXG4gICAgICAgIFwidGllUlwiOiAwLjAwMzUsXG4gICAgICAgIFwidGllXCI6IFtcbiAgICAgICAgICAwLjU4NzIxODc4MDU2NzMyOTcsXG4gICAgICAgICAgMC41ODU0MTY0MzkyNTMzNTY1LFxuICAgICAgICAgIDAuNTc2MTYzMzc0NjIzMzY4XG4gICAgICAgIF0sXG4gICAgICAgIFwidGllRHJpcFwiOiAwLjMsXG4gICAgICAgIFwicG91clwiOiA4LFxuICAgICAgICBcInBvdXJBdFwiOiAwLjA2LFxuICAgICAgICBcInBvdXJUb25lXCI6IFtcbiAgICAgICAgICAwLjcxNTYzOTYwNDM5MDgyNyxcbiAgICAgICAgICAwLjcxNDM5Nzk5MTQ4NTY0NTYsXG4gICAgICAgICAgMC43MDgwMjM2NTgwNzM4NzU3XG4gICAgICAgIF0sXG4gICAgICAgIFwicG91ckFscGhhXCI6IDAuNCxcbiAgICAgICAgXCJzb290XCI6IFtcbiAgICAgICAgICAwLjQyMjEwNjI5Mjc5NDI2MTQzLFxuICAgICAgICAgIDAuNDE5NTgzMDE0OTU0Njk5MixcbiAgICAgICAgICAwLjQxMTMzODAyMDMxMDIzMzE0XG4gICAgICAgIF0sXG4gICAgICAgIFwic29vdENvdlwiOiAwLjQsXG4gICAgICAgIFwic29vdEFscGhhXCI6IDAuNTUsXG4gICAgICAgIFwic29vdEJsb3RzXCI6IDQwLFxuICAgICAgICBcInNwYWxsc1wiOiA1LFxuICAgICAgICBcInNwYWxsXCI6IFtcbiAgICAgICAgICAwLjk5OTk5OTk5OTk5OTk5OTksXG4gICAgICAgICAgMC45OTUzOTM1MTU5OTE3MDM5LFxuICAgICAgICAgIDAuOTg1ODcyMTEyNDg3NDQ1NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiY29uY3JldGVDYXBcIixcbiAgICAgICAgXCJraW5kXCI6IFwiY29uY3JldGVcIixcbiAgICAgICAgXCJzaXplXCI6IDUxMixcbiAgICAgICAgXCJzZWVkXCI6IDEwMixcbiAgICAgICAgXCJiYXNlXCI6IFtcbiAgICAgICAgICAwLjc1NjkxNzcyNjMzNDA5MzksXG4gICAgICAgICAgMC43NTU4NTYzNDc1NjAzMDk4LFxuICAgICAgICAgIDAuNzU1MTE2NjE2NDQ5MDU3MVxuICAgICAgICBdLFxuICAgICAgICBcImNsb3VkXCI6IFtcbiAgICAgICAgICAwLjg3MTU3OTE3NjE3NjUwMjYsXG4gICAgICAgICAgMC44NzEwMTg0NDc3Njc3MTA4LFxuICAgICAgICAgIDAuODYzNDMwNDIwNzExOTc0MlxuICAgICAgICBdLFxuICAgICAgICBcImNsb3Vkc1wiOiA1NCxcbiAgICAgICAgXCJjbG91ZFJcIjogMC4wNzMzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgXCJjbG91ZEFscGhhXCI6IDAuMixcbiAgICAgICAgXCJzdHJlYWtzXCI6IDIyLFxuICAgICAgICBcInN0cmVha1wiOiBbXG4gICAgICAgICAgMC41ODI2MzIzMjI1NzM2MzMyLFxuICAgICAgICAgIDAuNTgwODA5OTU1MjQ1MDYwNCxcbiAgICAgICAgICAwLjU3MTQ1NDA3ODc4NTg0OThcbiAgICAgICAgXSxcbiAgICAgICAgXCJzdHJlYWtMZW5cIjogMC43LFxuICAgICAgICBcInN0cmVha0FscGhhXCI6IDAuMixcbiAgICAgICAgXCJ3YXNoXCI6IFtcbiAgICAgICAgICAwLjY2NTE4ODU2NjQ2MDE2NzMsXG4gICAgICAgICAgMC42NjM3MjY2NjczOTQzODkxLFxuICAgICAgICAgIDAuNjUxNTEyMTA4MDIzNjU4XG4gICAgICAgIF0sXG4gICAgICAgIFwiY292ZXJhZ2VcIjogMCxcbiAgICAgICAgXCJ3YXNoQWxwaGFcIjogMCxcbiAgICAgICAgXCJwaXRzXCI6IDU4NSxcbiAgICAgICAgXCJwaXRcIjogW1xuICAgICAgICAgIDAuNjQyMjU2Mjc2NDkxNjg1NixcbiAgICAgICAgICAwLjY0MDY5NDI0NzM1MjkwOTEsXG4gICAgICAgICAgMC42MzI2NzQ5MjQ2NzM1ODU3XG4gICAgICAgIF0sXG4gICAgICAgIFwicGl0UlwiOiAwLjgsXG4gICAgICAgIFwiZ3JhaW5cIjogMzYwMCxcbiAgICAgICAgXCJncmFpbkFscGhhXCI6IDAuMDksXG4gICAgICAgIFwiYnVtcFwiOiAwLjAwMTUsXG4gICAgICAgIFwidGllc1wiOiBbXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0XG4gICAgICAgIF0sXG4gICAgICAgIFwidGllUlwiOiAwLjAwNTUsXG4gICAgICAgIFwidGllXCI6IFtcbiAgICAgICAgICAwLjU4NzIxODc4MDU2NzMyOTcsXG4gICAgICAgICAgMC41ODU0MTY0MzkyNTMzNTY1LFxuICAgICAgICAgIDAuNTc2MTYzMzc0NjIzMzY4XG4gICAgICAgIF0sXG4gICAgICAgIFwidGllRHJpcFwiOiAwLjVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJwYWludFwiLFxuICAgICAgICBcImtpbmRcIjogXCJoYXphcmRcIixcbiAgICAgICAgXCJzaXplXCI6IDI1NixcbiAgICAgICAgXCJzZWVkXCI6IDEwMyxcbiAgICAgICAgXCJhXCI6IFtcbiAgICAgICAgICAwLjcyOTczODY2MzM2MTIyMyxcbiAgICAgICAgICAwLjI2NDIzNjk0OTkwMDIyMDU2LFxuICAgICAgICAgIDAuMjQwNjYzNzIxNTgxNzI2MVxuICAgICAgICBdLFxuICAgICAgICBcImJcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxXG4gICAgICAgIF0sXG4gICAgICAgIFwicGVyaW9kc1wiOiAyLFxuICAgICAgICBcImFuZ2xlXCI6IDAuNzg1Mzk4MTYzMzk3NDQ4MyxcbiAgICAgICAgXCJzY3VmZnNcIjogNTBcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgXCJjb21wb25lbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCJzaGFmdFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIlJvdW5kIGNvbHVtblwiLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJjb25jcmV0ZVwiLFxuICAgICAgICAgIFwiY3lsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicnRcIjogMS40LFxuICAgICAgICAgICAgICBcInJiXCI6IDEuNCxcbiAgICAgICAgICAgICAgXCJoXCI6IDguNzcsXG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgNC44ODUsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInNlZ1wiOiAzNixcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTY3NzcyMTUsXG4gICAgICAgICAgICAgIFwidXZSZXBcIjogW1xuICAgICAgICAgICAgICAgIDAuNzMzMDM4Mjg1ODM3NjE4NCxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwiY2FwXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSGFtbWVyaGVhZCBjYXAgYW5kIGZvb3RpbmdcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiY29uY3JldGVDYXBcIixcbiAgICAgICAgICBcInV2XCI6IFwid29ybGRcIixcbiAgICAgICAgICBcInV2U2NhbGVcIjogMyxcbiAgICAgICAgICBcImV4dHJ1ZGVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMS43NSxcbiAgICAgICAgICAgICAgICAgIDkuMTVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDEuNzUsXG4gICAgICAgICAgICAgICAgICA5LjE1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICA2LjI1LFxuICAgICAgICAgICAgICAgICAgMTAuNjVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDYuMjUsXG4gICAgICAgICAgICAgICAgICAxMS43N1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgNi4xNyxcbiAgICAgICAgICAgICAgICAgIDExLjg1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtNi4xNyxcbiAgICAgICAgICAgICAgICAgIDExLjg1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtNi4yNSxcbiAgICAgICAgICAgICAgICAgIDExLjc3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtNi4yNSxcbiAgICAgICAgICAgICAgICAgIDEwLjY1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInowXCI6IC0xLjMsXG4gICAgICAgICAgICAgIFwiejFcIjogMS4zLFxuICAgICAgICAgICAgICBcImhleFwiOiAxNjc3NzIxNVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDQuNCxcbiAgICAgICAgICAgICAgMC42LFxuICAgICAgICAgICAgICA0LjRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwicGFkc1wiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkJlYXJpbmcgcGFkc1wiLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJzdGVlbFwiLFxuICAgICAgICAgIFwidXZcIjogXCJ3b3JsZFwiLFxuICAgICAgICAgIFwidXZTY2FsZVwiOiAxLFxuICAgICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMDM5NTI5NyxcbiAgICAgICAgICAgICAgLTMsXG4gICAgICAgICAgICAgIDExLjkyNSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC43LFxuICAgICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgICAwLjVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEwMzk1Mjk3LFxuICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAxMS45MjUsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuNyxcbiAgICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgICAgMC41XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcImNoZXZyb25zXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUGFpbnRlZCBjaGV2cm9uIGJhbmRcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwicGFpbnRcIixcbiAgICAgICAgICBcImN5bHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInJ0XCI6IDEuNDA0OTk5OTk5OTk5OTk5OCxcbiAgICAgICAgICAgICAgXCJyYlwiOiAxLjQwNDk5OTk5OTk5OTk5OTgsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjgsXG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMS4wMSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwic2VnXCI6IDM2LFxuICAgICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgXCJ1dlJlcFwiOiBbXG4gICAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE2Nzc3MjE1XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgLy8gQ09MT1IgaGFzIHRvIGJlIGNhcnJpZWQgdG9vLCBhbmQgaXQgaXMgZWFzeSB0byBmb3JnZXQ6IHRoaXMgZnVuY3Rpb24gY29waWVkIHBvc2l0aW9uLCBub3JtYWxcbiAgLy8gYW5kIHV2IG9ubHksIGFuZCB0aGUgbW9zcXVlJ3MgcmliYmVkIGRvbWVzIGxvc3QgdGhlaXIgZ3JlZW4tYW5kLXBhbGUgc3RyaXBpbmcgdGhlIG1vbWVudCB0aGV5XG4gIC8vIHdlcmUgbWVyZ2VkIHdpdGggYW55dGhpbmcuIFRoZSBmYWlsdXJlIGlzIHNpbGVudCAtLSB0aGUgZG9tZSByZW5kZXJzLCBpbiBvbmUgZmxhdCBjb2xvdXIgLS0gYW5kXG4gIC8vIHRvb2sgYSB3cm9uZyB0aGVvcnkgYWJvdXQgc1JHQiBnYW1tYSBiZWZvcmUgdGhlIGF0dHJpYnV0ZSBsaXN0IHdhcyByZWFkLiBBbnkgaW5wdXQgY2FycnlpbmcgYVxuICAvLyBjb2xvdXIgbWVhbnMgZXZlcnkgaW5wdXQgZ2V0cyBvbmUsIHdoaXRlIHdoZXJlIGl0IGhhZCBub25lLlxuICBjb25zdCBhbnlDb2xvciA9IHBhcnRzLnNvbWUoKGcpID0+ICEhZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpO1xuICBjb25zdCBjb2xvciA9IGFueUNvbG9yID8gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpLmZpbGwoMSkgOiBudWxsO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGNvbnN0IGMgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICAgIGlmIChjb2xvciAmJiBjKSB7IGNvbG9yWyh2ICsgaSkgKiAzXSA9IGMuZ2V0WChpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAxXSA9IGMuZ2V0WShpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAyXSA9IGMuZ2V0WihpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sb3IpIG91dC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgMykpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHJUb3A6IG51bWJlciwgckJvdDogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyVG9wLCByQm90LCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogUmV2b2x2ZSBhIHByb2ZpbGUgYWJvdXQgK1kuIGBwdHNgIGFyZSBbcmFkaXVzLCB5XSBpbiBtZXRyZXMsIGJvdHRvbSB0byB0b3AuXG4gKlxuICogVGhpcyBpcyB0aGUgc2hhcGUgdm9jYWJ1bGFyeSB0aGUgd2hvbGUgbW9udW1lbnRhbCBzZXQgaXMgYnVpbHQgZnJvbSAtLSBhIGNoZWRpJ3MgYmVsbCwgYSBwcmFuZydzXG4gKiBjb3JuLWNvYiB0YXBlciwgYSBkb21lLCBhIHJpbmdlZCBzcGlyZSBhcmUgYWxsIG9uZSBwcm9maWxlIGVhY2guIFR3byB0aGluZ3MgYXJlIHdvcnRoIHN0YXRpbmdcbiAqIGJlY2F1c2UgYm90aCBjb3N0IGEgcmVidWlsZCB0byBsZWFybjpcbiAqXG4gKiAtIExhdGhlR2VvbWV0cnkgaXMgT1BFTiBhdCB0b3AgYW5kIGJvdHRvbS4gQSBwcm9maWxlIHRoYXQgZG9lcyBub3QgY2xvc2Ugb24gdGhlIGF4aXMgKHJhZGl1cyAwKVxuICogICBsZWF2ZXMgYSBob2xlIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkcyBhcyBiYWNrZ3JvdW5kIGVuY2xvc2VkIGJ5IHRoZSBzaWxob3VldHRlLiBDbG9zZSBpdCwgb3JcbiAqICAgY2FwIGl0IHdpdGggd2hhdCBzaXRzIGFib3ZlLlxuICogLSBSQURJQUwgU0VHTUVOVCBDT1VOVCBpcyB0aGUgdHJpYW5nbGUgYnVkZ2V0J3MgbWFpbiBsZXZlciBoZXJlIGFuZCBpdCBpcyBwZXItbGF0aGU6IGEgcHJvZmlsZSBvZlxuICogICBuIHBvaW50cyBhdCBzIHNlZ21lbnRzIGlzIDIqKG4tMSkqcyB0cmlhbmdsZXMuIEEgMjQtcmluZyBzcGlyZSBhdCAzMiBzZWdtZW50cyBpcyAxLDQ3MlxuICogICB0cmlhbmdsZXMgb24gaXRzIG93biwgd2hpY2ggaXMgd2h5IHRoZSBsb3ctcmVsaWVmIHJpbmdzIGFyZSBhIHByb2ZpbGUgcmF0aGVyIHRoYW4gMjQgcmluZ3MuXG4gKi9cbi8qKiBMYXRoZUdlb21ldHJ5IHNoYXJlcyB0aGUgY29ybmVyIHZlcnRleCBiZXR3ZWVuIGFuIGVuZCBkaXNjIGFuZCB0aGUgc2lkZSB3YWxsLCBzb1xuICogIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIHRpbHRzIHRoZSB3YWxsJ3MgZmlyc3QgcmluZyA0NSBkZWdyZWVzIHRvd2FyZCB0aGUgZGlzYyBhbmQgdGhlIGhhcm5lc3Mgc2hhZGVzXG4gKiAgYSBkYXJrIGdyYWRpZW50IHRoZXJlIC0tIGEgcmluZyB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBhcyBhIEhPTEUgdW5kZXIgdGhlIHN0YWlubGVzcyBiaW4ncyBjYXAuXG4gKiAgSW5zZXJ0aW5nIGEgcG9pbnQgMC44IG1tIHBhc3QgZXZlcnkgc2hhcnAgY29ybmVyICg+IDcwIGRlZ3JlZXMpIGNvbmZpbmVzIHRoZSBhdmVyYWdlZCBub3JtYWwgdG8gdGhhdFxuICogIHNsaXZlci4gQ29zdHMgb25lIHJpbmcgcGVyIGNvcm5lcjsgcGFzcyBgc2hhcnAgPSBmYWxzZWAgd2hlcmUgdGhlIGJ1ZGdldCBjYW5ub3QgY2FycnkgaXQuICovXG5mdW5jdGlvbiBzcGxpdENvcm5lcnMocHRzOiBudW1iZXJbXVtdLCBtaW5EZWcgPSA3MCwgZXBzID0gMC4wMDA4KTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IG91dDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHAgPSBwdHNbaV0sIGEgPSBwdHNbaSAtIDFdLCBiID0gcHRzW2kgKyAxXTtcbiAgICBsZXQgc2hhcnAgPSBmYWxzZTtcbiAgICBpZiAoYSAmJiBiKSB7XG4gICAgICBjb25zdCB1eCA9IHBbMF0gLSBhWzBdLCB1eSA9IHBbMV0gLSBhWzFdLCB2eCA9IGJbMF0gLSBwWzBdLCB2eSA9IGJbMV0gLSBwWzFdO1xuICAgICAgY29uc3QgbHUgPSBNYXRoLmh5cG90KHV4LCB1eSksIGx2ID0gTWF0aC5oeXBvdCh2eCwgdnkpO1xuICAgICAgaWYgKGx1ID4gMCAmJiBsdiA+IDApIHNoYXJwID0gTWF0aC5hY29zKE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCAodXggKiB2eCArIHV5ICogdnkpIC8gKGx1ICogbHYpKSkpID4gbWluRGVnICogTWF0aC5QSSAvIDE4MDtcbiAgICAgIGlmIChzaGFycCAmJiBsdSA+IDMgKiBlcHMpIG91dC5wdXNoKFtwWzBdIC0gdXggLyBsdSAqIGVwcywgcFsxXSAtIHV5IC8gbHUgKiBlcHNdKTtcbiAgICAgIG91dC5wdXNoKHApO1xuICAgICAgaWYgKHNoYXJwICYmIGx2ID4gMyAqIGVwcykgb3V0LnB1c2goW3BbMF0gKyB2eCAvIGx2ICogZXBzLCBwWzFdICsgdnkgLyBsdiAqIGVwc10pO1xuICAgIH0gZWxzZSBvdXQucHVzaChwKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKiogYHdlbGRTZWFtYCBhdmVyYWdlcyB0aGUgbm9ybWFscyBvZiB0aGUgZmlyc3QgYW5kIGxhc3QgcmFkaWFsIGNvbHVtbiwgd2hpY2ggaXMgd2hhdCBjbG9zZXMgdGhlXG4gKiAgcmV2b2x2ZSdzIFNIQURJTkcgc2VhbS4gTGF0aGVHZW9tZXRyeSBhbHJlYWR5IGRvZXMgdGhpcyBpdHNlbGYgLS0gaXQgZXhwbGljaXRseSBhdmVyYWdlcyB0aGUgdHdvXG4gKiAgZW5kIGNvbHVtbnMgZm9yIGEgZnVsbCAyKlBJIHN3ZWVwIC0tIGFuZCB0aGUgYGNvbXB1dGVWZXJ0ZXhOb3JtYWxzKClgIGJlbG93IHRocm93cyB0aGF0IHdvcmtcbiAqICBhd2F5LCBiZWNhdXNlIGEgcmVjb21wdXRlIHNlZXMgdGhlIHNlYW0gYXMgdHdvIHVuY29ubmVjdGVkIGVkZ2VzIGFuZCBnaXZlcyBlYWNoIHRoZSBub3JtYWwgb2ZcbiAqICB0aGUgZmFjZXMgb24gaXRzIG93biBzaWRlIG9ubHkuIE9uIGEgbWF0dGUgcHJvcCB0aGUgcmVzdWx0aW5nIGNyZWFzZSBpcyBpbnZpc2libGUsIHdoaWNoIGlzIHdoeVxuICogIGl0IHN1cnZpdmVkOyBvbiBhIHNhdGluIG1ldGFsIGl0IGlzIGEgaGFyZCB2ZXJ0aWNhbCBsaW5lIGRvd24gdGhlIHJldm9sdmUuIE1lYXN1cmVkIG9uIHRoZVxuICogIG5vb2RsZS1zaG9wIHRhYmxlJ3MgcmltIGF0IGF6aW11dGggMDogYSAzMS1sZXZlbCBsdW1hIHN0ZXAgYXQgeD01MTIgKDI0NSAtPiAyMTQgYXQgeT0yNTgpLFxuICogIFJFVkVSU0lORyB0byArMjcgYXQgeT0yNjYgLS0gYSBkaXNjb250aW51aXR5LCBub3QgYSBncmFkaWVudC5cbiAqICBEZWZhdWx0IE9GRiBzbyBubyBhbHJlYWR5LWVtaXR0ZWQgcHJvcCBjaGFuZ2VzIHNoYWRpbmcgaWYgaXQgaXMgZXZlciByZS1lbWl0dGVkOyB0aGUgcmVjb21wdXRlXG4gKiAgaXMgc3RpbGwgbmVlZGVkIGZvciB0aGUgc2hhcnAtY29ybmVyIHNwbGl0cywgc28gdGhpcyB3ZWxkcyBhZnRlcndhcmRzIHJhdGhlciB0aGFuIHNraXBwaW5nIGl0LiAqL1xuZnVuY3Rpb24gbGF0aGUocHRzOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlciwgeU9mZnNldCA9IDAsIHNoYXJwID0gdHJ1ZSwgd2VsZFNlYW0gPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdiA9IChzaGFycCA/IHNwbGl0Q29ybmVycyhwdHMpIDogcHRzKS5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKE1hdGgubWF4KHBbMF0sIDApLCBwWzFdICsgeU9mZnNldCkpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkodiwgc2VnKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICBpZiAod2VsZFNlYW0pIHtcbiAgICAvLyBMYXRoZUdlb21ldHJ5IGxheXMgb3V0IChzZWcgKyAxKSBjb2x1bW5zIG9mIGByb3dzYCB2ZXJ0aWNlczsgY29sdW1uIDAgYW5kIGNvbHVtbiBzZWcgYXJlIHRoZVxuICAgIC8vIHNhbWUgcGxhY2UgaW4gc3BhY2UuIEF2ZXJhZ2UgdGhlIHBhaXIgYW5kIHdyaXRlIGl0IGJhY2sgdG8gYm90aC5cbiAgICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICAgIGNvbnN0IHJvd3MgPSBuLmNvdW50IC8gKHNlZyArIDEpO1xuICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93czsgcisrKSB7XG4gICAgICBjb25zdCBhID0gciwgYiA9IHNlZyAqIHJvd3MgKyByO1xuICAgICAgY29uc3QgeCA9IG4uZ2V0WChhKSArIG4uZ2V0WChiKSwgeSA9IG4uZ2V0WShhKSArIG4uZ2V0WShiKSwgeiA9IG4uZ2V0WihhKSArIG4uZ2V0WihiKTtcbiAgICAgIGNvbnN0IGwgPSBNYXRoLmh5cG90KHgsIHksIHopIHx8IDE7XG4gICAgICBuLnNldFhZWihhLCB4IC8gbCwgeSAvIGwsIHogLyBsKTtcbiAgICAgIG4uc2V0WFlaKGIsIHggLyBsLCB5IC8gbCwgeiAvIGwpO1xuICAgIH1cbiAgICBuLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZztcbn1cblxuLyoqIEEgc3RlcHBlZCB0YXBlciBhcyBhIGxhdGhlIHByb2ZpbGU6IGByaW5nc2AgYWx0ZXJuYXRpbmcgb3V0L2luIHJhZGlpIGNsaW1iaW5nIGZyb20geTAgdG8geTEuXG4gKiAgT25lIGdlb21ldHJ5LCBvbmUgZHJhdyBjYWxsLCBhbmQgdGhlIHN0ZXAgY291bnQgaXMgYSBwcm9maWxlLXBvaW50IGNvdW50IHJhdGhlciB0aGFuIGEgbWVzaFxuICogIGNvdW50IC0tIHdoaWNoIGlzIHdoYXQga2VlcHMgYSAyMC1yaW5nIGNoZWRpIHNwaXJlIGluc2lkZSBhIDMyLWdlb21ldHJ5IGNlaWxpbmcuICovXG5mdW5jdGlvbiByaW5nZWRUYXBlcih5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByMDogbnVtYmVyLCByMTogbnVtYmVyLCByaW5nczogbnVtYmVyLCBidWxnZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSByaW5nczsgaSsrKSB7XG4gICAgY29uc3QgdCA9IGkgLyByaW5ncztcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IHIgPSByMCArIChyMSAtIHIwKSAqIHQ7XG4gICAgY29uc3Qgc3RlcCA9ICh5MSAtIHkwKSAvIHJpbmdzO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHldKTtcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5ICsgc3RlcCAqIDAuNDVdKTtcbiAgICBwdHMucHVzaChbciwgeSArIHN0ZXAgKiAwLjU1XSk7XG4gIH1cbiAgcHRzLnB1c2goW3IxLCB5MV0pO1xuICByZXR1cm4gcHRzO1xufVxuXG5cbi8qKlxuICogVGhlIFJFREVOVEVEIHNxdWFyZSBwbGFuIC0tIGEgc3F1YXJlIHdob3NlIGZvdXIgY29ybmVycyBhcmUgY3V0IGJhY2sgaW4gdHdvIHJpZ2h0LWFuZ2xlZCBzdGVwcy5cbiAqIEl0IGlzIHRoZSBwbGFuIG9mIGEgVGhhaSBjaGVkaSdzIHRlcnJhY2UgYW5kIG9mIGEgcHJhbmcncyBiYXNlLCBhbmQgYnVpbGRpbmcgaXQgYXMgYSBTaGFwZSB0aGF0XG4gKiBpcyB0aGVuIGV4dHJ1ZGVkIGlzIG5vdCBhIHN0eWxpc3RpYyBjaG9pY2U6IHRoZSBvYnZpb3VzIGFsdGVybmF0aXZlLCBhIHdpZGUgYm94IGNyb3NzZWQgYnkgYVxuICogZGVlcCBib3gsIHB1dHMgdGhlIHR3byBib3hlcycgdG9wIGZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgb3ZlciB0aGVpciB3aG9sZVxuICogaW50ZXJzZWN0aW9uLCB3aGljaCB6LWZpZ2h0cy4gT25lIGV4dHJ1c2lvbiBvZiBvbmUgY2xvc2VkIHBsYW4gaGFzIG5vIGludGVyaW9yIGNvaW5jaWRlbmNlIGF0XG4gKiBhbGwuXG4gKlxuICogYGFgIGlzIHRoZSBoYWxmLXdpZHRoIGFjcm9zcyB0aGUgZmxhdHM7IGByYCBpcyB0aGUgZGVwdGggb2YgZWFjaCByZWRlbnQgc3RlcC5cbiAqL1xuZnVuY3Rpb24gcmVkZW50ZWRTaGFwZShhOiBudW1iZXIsIHI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcXVhZCA9IFtbYSwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSByXSwgW2EgLSAyICogciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhXV07XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgIGZvciAoY29uc3QgW3gsIHpdIG9mIHF1YWQpIHtcbiAgICAgIC8vIHJvdDkwXmssIGFwcGxpZWQgayB0aW1lczogKHgsIHopIC0+ICgteiwgeClcbiAgICAgIGxldCBweCA9IHgsIHB6ID0gejtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgazsgaSsrKSB7IGNvbnN0IHQgPSBweDsgcHggPSAtcHo7IHB6ID0gdDsgfVxuICAgICAgcHRzLnB1c2goW3B4LCBwel0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGJldHdlZW4gdHdvIGhlaWdodHMuIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgYWxvbmcgK1osIHNvIHRoZSByZXN1bHQgaXNcbiAqICByb3RhdGVkIG9udG8gK1k7IGAtTWF0aC5QSSAvIDJgIGFib3V0IFggbWFwcyArWiB0byArWSBhbmQgbGVhdmVzIHRoZSBwbGFuJ3Mgb3duIHggYXMgeC4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVTbGFiKHNoYXBlOiBUSFJFRS5TaGFwZSwgeTA6IG51bWJlciwgeTE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHkxIC0geTAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIC8vIHJvdGF0ZVgoLVBJLzIpIG1hcHMgKHgsIHksIHopIC0+ICh4LCB6LCAteSksIHNvIHRoZSBleHRydXNpb24gZGVwdGggYmVjb21lcyBoZWlnaHQgYW5kIHRoZVxuICAvLyBwbGFuJ3Mgb3duIHNlY29uZCBheGlzIGJlY29tZXMgLXouIEV2ZXJ5IHBsYW4gaGVyZSBpcyBmb3VyLWZvbGQgc3ltbWV0cmljLCBzbyB0aGF0IHNpZ24gaXNcbiAgLy8gaW1tYXRlcmlhbDsgd2hhdCBtYXR0ZXJzIGlzIHRoYXQgdGhlIHNsYWIgbm93IHJ1bnMgVVAgZnJvbSB5PTAgYW5kIG5lZWRzIGxpZnRpbmcgYnkgeTAuXG4gIGcucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSgwLCB5MCwgMCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBzcXVhcmUgcGxhbiB3aXRoIGEgcmVjdGFuZ3VsYXIgTk9UQ0ggY3V0IGludG8gaXRzICtYIGZhY2UgLS0gdGhlIHN0YWlyIHdlbGwgb2YgYSB0ZW1wbGVcbiAqIHRlcnJhY2UuIEN1dHRpbmcgdGhlIHN0YWlyIG91dCBvZiB0aGUgcGxhbiByYXRoZXIgdGhhbiBoYW5naW5nIGl0IG9mZiB0aGUgb3V0c2lkZSBpcyB3aGF0IGtlZXBzXG4gKiBhbiBhc3ltbWV0cmljIGZlYXR1cmUgaW5zaWRlIGEgc3ltbWV0cmljIGRlY2xhcmVkIGVudmVsb3BlOiBhIGZsaWdodCBwcm9qZWN0aW5nIHBhc3QgYSA5IG1cbiAqIHRlcnJhY2Ugd291bGQgcHV0IHRoZSBwcm9wJ3MgYm91bmRpbmcgYm94IG9mZi1jZW50cmUgYW5kIG92ZXIgaXRzIGRlY2xhcmVkIHdpZHRoIG9uIG9uZSBzaWRlLlxuICovXG5mdW5jdGlvbiBub3RjaGVkU3F1YXJlKGE6IG51bWJlciwgbm90Y2hIYWxmWjogbnVtYmVyLCB4SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1thLCAtYV0sIFthLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgbm90Y2hIYWxmWl0sXG4gICAgICAgICAgICAgICBbYSwgbm90Y2hIYWxmWl0sIFthLCBhXSwgWy1hLCBhXSwgWy1hLCAtYV1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFJFQ1RBTkdVTEFSIHBsYW4gd2l0aCBhIG5vdGNoIGN1dCBpbnRvIGl0cyArWiBmYWNlLiBUaGUgc3F1YXJlIHZlcnNpb24gYWJvdmUgaXMgd2hhdCBhIGNoZWRpIG9yXG4gKiBhIHByYW5nIHRlcnJhY2UgbmVlZHM7IGEgaGFsbCB0aGF0IGlzIHR3aWNlIGFzIGxvbmcgYXMgaXQgaXMgd2lkZSBuZWVkcyB0aGUgdHdvIGhhbGYtZXh0ZW50cyBrZXB0XG4gKiBhcGFydCwgYW5kIGl0cyBzdGFpciBpcyBvbiBhIHNob3J0IGVuZCByYXRoZXIgdGhhbiBhIGxvbmcgb25lLlxuICovXG5mdW5jdGlvbiBub3RjaGVkUmVjdChoeDogbnVtYmVyLCBoejogbnVtYmVyLCBueDogbnVtYmVyLCB6SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1toeCwgLWh6XSwgW2h4LCBoel0sIFtueCwgaHpdLCBbbngsIHpJbm5lcl0sIFstbngsIHpJbm5lcl0sIFstbngsIGh6XSwgWy1oeCwgaHpdLCBbLWh4LCAtaHpdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogVGhlIGNyb3NzLXNlY3Rpb24gb2Ygb25lIHJvb2YgdGllciwgYXMgYSBjbG9zZWQgdHJhcGV6b2lkIGluIFhZOiBlYXZlcyBhdCAoKy1oYWxmQmFzZSwgeTApXG4gKiByaXNpbmcgYXQgYHBpdGNoYCAoYXMgYSB0YW5nZW50KSB0byBhIGZsYXQgdG9wIGF0IHkxLlxuICpcbiAqIFRoYWkgdGVtcGxlIHJvb2ZzIG5lc3QsIGFuZCB0aGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSBUUlVOQ0FUSU9OLiBUaHJlZSBmdWxsIGdhYmxlcyBhdCBvbmVcbiAqIHBpdGNoIGNhbm5vdCBuZXN0IC0tIHRoZSB3aWRlc3QgdGllcidzIHJpZGdlIHdvdWxkIGJlIHRoZSBoaWdoZXN0LCB3aGljaCBpcyB1cHNpZGUgZG93bi4gV2hhdFxuICogYWN0dWFsbHkgaGFwcGVucyBpcyB0aGF0IGVhY2ggbG93ZXIgdGllciBpcyBjdXQgb2ZmIGF0IHRoZSBoZWlnaHQgd2hlcmUgdGhlIG5leHQgdGllcidzIGVhdmVzXG4gKiBiZWdpbiwgYW5kIGl0cyB1cHBlciBwYXJ0IGlzIGhpZGRlbiBiZWhpbmQgdGhhdCB0aWVyOyBvbmx5IHRoZSB0b3Btb3N0IHRpZXIgaXMgYSByZWFsIGdhYmxlLFxuICogY2xvc2VkIGJ5IHBhc3NpbmcgeTEgYXQgdGhlIGFwZXguXG4gKi9cbmZ1bmN0aW9uIHRpZXJQcm9maWxlKGhhbGZCYXNlOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHBpdGNoOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGluc2V0ID0gKHkxIC0geTApIC8gcGl0Y2g7XG4gIGNvbnN0IGhhbGZUb3AgPSBoYWxmQmFzZSAtIGluc2V0O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLWhhbGZCYXNlLCB5MCk7XG4gIHNoYXBlLmxpbmVUbyhoYWxmQmFzZSwgeTApO1xuICBpZiAoaGFsZlRvcCA+IDAuMDIpIHtcbiAgICBzaGFwZS5saW5lVG8oaGFsZlRvcCwgeTEpO1xuICAgIHNoYXBlLmxpbmVUbygtaGFsZlRvcCwgeTEpO1xuICB9IGVsc2Uge1xuICAgIHNoYXBlLmxpbmVUbygwLCB5MCArIGhhbGZCYXNlICogcGl0Y2gpOyAgIC8vIGEgcmVhbCByaWRnZTogdGhlIHRvcG1vc3QgdGllciBjbG9zZXMgdG8gYSBwb2ludFxuICB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBhbG9uZyArWiBiZXR3ZWVuIHR3byBkZXB0aHMsIHdpdGggbm8gcm90YXRpb24gLS0gdGhlIG5hdGl2ZSBkaXJlY3Rpb24gb2ZcbiAqICBFeHRydWRlR2VvbWV0cnkuIFVzZWQgd2hlcmUgdGhlIHByb2ZpbGUgZ2VudWluZWx5IGxpdmVzIGluIHRoZSBYWSBwbGFuZSwgc3VjaCBhcyB0aGUgcmFraW5nXG4gKiAgdHJpYW5nbGUgb2YgYSBzdGFpciBjaGVlay4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVBbG9uZ1ooc2hhcGU6IFRIUkVFLlNoYXBlLCB6MDogbnVtYmVyLCB6MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogejEgLSB6MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgZy50cmFuc2xhdGUoMCwgMCwgejApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSByZWN0YW5ndWxhciBwbGF0ZSB3aG9zZSBoZWFkIGlzIGEgaGFsZi1yb3VuZCBhcmNoLCBvcHRpb25hbGx5IGNhcnJ5aW5nIGFuIGFyY2hlZCBhcGVydHVyZSBvZlxuICogIHRoZSBzYW1lIGZvcm0uIFRoZSBhcGVydHVyZSBhcmMgaXMgQUxXQVlTIHN3ZXB0IGZyb20gYW5nbGUgMCB0byBQSTogd3JpdHRlbiB0aGUgb3RoZXIgd2F5IGl0XG4gKiAgcnVucyB1bmRlciB0aGUgY2lyY2xlIGluc3RlYWQgb2Ygb3ZlciBpdCBhbmQgbGVhdmVzIHRoZSBhcmNoIGhlYWQgZmlsbGVkIHNvbGlkLCB3aGljaCByZWFkcyBhc1xuICogIGEgc3F1YXJlIHdpbmRvdyB3aXRoIGEgZ2hvc3QgYXJjaCBkcmF3biBhY3Jvc3MgaXQuICovXG5mdW5jdGlvbiBhcmNoZWRQbGF0ZSh3OiBudW1iZXIsIGg6IG51bWJlciwgYXJjaFI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBob2xlPzogeyByOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC13IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuYWJzYXJjKDAsIHNwcmluZywgYXJjaFIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgc2hhcGUubGluZVRvKC13IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgcC5tb3ZlVG8oaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAubGluZVRvKGhvbGUuciwgaG9sZS5zcHJpbmcpO1xuICAgIHAuYWJzYXJjKDAsIGhvbGUuc3ByaW5nLCBob2xlLnIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgICBwLmxpbmVUbygtaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAuY2xvc2VQYXRoKCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBISVAgUk9PRiB3aXRoIGEgY29uY2F2ZSBzbG9wZSBhbmQgdXBzd2VwdCBjb3JuZXJzIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YsIHdoaWNoIG5vbmUgb2YgdGhlXG4gKiBvdGhlciBzaGFwZSBoZWxwZXJzIGhlcmUgY2FuIGV4cHJlc3MuXG4gKlxuICogSXQgaXMgZ2VuZXJhdGVkIGFzIGEgcmluZyBvZiByZWN0YW5nbGVzIGNsaW1iaW5nIGZyb20gdGhlIGVhdmVzIHRvIHRoZSByaWRnZSByYXRoZXIgdGhhbiBhcyBhblxuICogZXh0cnVkZWQgcHJvZmlsZSwgYmVjYXVzZSBhIGhpcCBzbG9wZXMgb24gYWxsIGZvdXIgc2lkZXM6IGFuIGV4dHJ1c2lvbiBnaXZlcyB2ZXJ0aWNhbCBnYWJsZSBlbmRzLFxuICogd2hpY2ggaXMgYSBkaWZmZXJlbnQgYnVpbGRpbmcuXG4gKlxuICogVGhlIGhvcml6b250YWwgc2hyaW5rIGZvbGxvd3MgYCgxIC0gdCleY3VydmVFeHBgLCBhbmQgdGhlIGV4cG9uZW50IG11c3QgYmUgQUJPVkUgb25lLiBUaGUgc2xvcGVcbiAqIGF0IGFueSBoZWlnaHQgaXMgZHkvZHgsIHNvIGEgcGxhbiB0aGF0IHNocmlua3MgRkFTVCBmb3IgYSBnaXZlbiByaXNlIGlzIGEgc2hhbGxvdyBzbG9wZTogd2l0aFxuICogcSA+IDEgdGhlIGRlcml2YXRpdmUgcSgxLXQpXihxLTEpIGlzIGxhcmdlIGF0IHRoZSBlYXZlcyBhbmQgc21hbGwgYXQgdGhlIHJpZGdlLCB3aGljaCBpcyBzaGFsbG93XG4gKiBlYXZlcyBhbmQgYSBzdGVlcCByaWRnZSAtLSB0aGUgRWFzdCBBc2lhbiByb29mLiBCZWxvdyBvbmUgaXQgaXMgdGhlIG90aGVyIHdheSByb3VuZCBhbmQgYnVpbGRzIGFcbiAqIGZsYXQtdG9wcGVkIHRlbnQsIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGF0dGVtcHQgaGVyZSByZW5kZXJlZC4gQSBsaW5lYXIgc2hyaW5rIGdpdmVzIHRoZVxuICogc3RyYWlnaHQgcHlyYW1pZCBvZiBhIGhpcCByb29mIGFueXdoZXJlIGVsc2UgaW4gdGhlIHdvcmxkLlxuICpcbiAqIGBjb3JuZXJMaWZ0YCByYWlzZXMgYW5kIHB1c2hlcyBvdXQgdGhlIGZvdXIgZWF2ZXMgY29ybmVycywgdGFwZXJpbmcgYXdheSBieSBhIHRoaXJkIG9mIHRoZSB3YXlcbiAqIHVwLiBUaGF0IHVwc3dlZXAgaXMgdGhlIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nIHRoaW5nIGFib3V0IHRoZSByb29mLCBhbmQgaXQgaXMgd2h5IHRoZSBwbGFuXG4gKiBoYWxmLXdpZHRoIHBhc3NlZCBpbiBtdXN0IGxlYXZlIHJvb206IHRoZSBjb3JuZXJzIGVuZCB1cCBmdXJ0aGVyIG91dCB0aGFuIHRoZSBlYXZlcyBsaW5lLlxuICpcbiAqIFRoZSByZXN1bHQgaXMgYSBjbG9zZWQgc29saWQgLS0gb3V0ZXIgc3VyZmFjZSwgYSBzb2ZmaXQgYGRyb3BgIGJlbG93IHRoZSBlYXZlcywgYW5kIGEgZmFzY2lhIGJhbmRcbiAqIGJldHdlZW4gdGhlbS4gQW4gb3BlbiBzaGVsbCB3b3VsZCBsZXQgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueVxuICogbG93IGFuZ2xlLlxuICovXG5mdW5jdGlvbiBoaXBSb29mKGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIHJpZGdlSGFsZlo6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgY3VydmVFeHA6IG51bWJlciwgc3RlcHM6IG51bWJlciwgZHJvcDogbnVtYmVyLCBjb3JuZXJMaWZ0OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIEVJR0hUIHBvaW50cyBwZXIgcmluZywgbm90IGZvdXI6IHRoZSBmb3VyIGNvcm5lcnMgYW5kIHRoZSBmb3VyIGVkZ2UgbWlkcG9pbnRzLiBXaXRoIGZvdXIgdGhlXG4gIC8vIGNvcm5lciBsaWZ0IGhhcyBub3doZXJlIHRvIGZhbGwgYXdheSB0byBhbmQgcmFpc2VzIHRoZSBFTlRJUkUgZWF2ZXMgbGluZSwgd2hpY2ggYnVpbHQgYSBzYWRkbGVcbiAgLy8gaW5zdGVhZCBvZiBhIHJvb2YuIFRoZSBtaWRwb2ludHMgYXJlIHdoYXQgaG9sZCB0aGUgZWF2ZXMgZG93biBiZXR3ZWVuIHRoZSBjb3JuZXJzLlxuICAvL1xuICAvLyBUaGUgb3JkZXIgaXMgKCt4LC16KSwgbWlkLCAoLXgsLXopLCBtaWQsICgteCwreiksIG1pZCwgKCt4LCt6KSwgbWlkLCB3aGljaCBpcyBjb3VudGVyLWNsb2Nrd2lzZVxuICAvLyBzZWVuIGZyb20gQUJPVkUgLS0gdGhlIHdpbmRpbmcgYW4gdXB3YXJkLWZhY2luZyBzdXJmYWNlIG5lZWRzLiBXb3VuZCB0aGUgb3RoZXIgd2F5IHRoZSB3aG9sZVxuICAvLyByb29mIHJlbmRlcnMgaW5zaWRlIG91dCwgd2hpY2ggbG9va3MgbGlrZSBhIHRoaW4gYmxhY2sgbWVtYnJhbmUgcmF0aGVyIHRoYW4gYSBtaXN0YWtlLlxuICBjb25zdCByaW5nID0gKHQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygxIC0gdCwgY3VydmVFeHApO1xuICAgIGNvbnN0IGcgPSBNYXRoLnBvdyhNYXRoLm1heCgwLCAxIC0gdCAvIDAuMzQpLCAyKTtcbiAgICBjb25zdCBsaWZ0ID0gY29ybmVyTGlmdCAqIGcsIG91dCA9IDEgKyAwLjA0NSAqIGc7XG4gICAgY29uc3QgYXggPSBoeCAqIGYgKiBvdXQsIGF6ID0gKHJpZGdlSGFsZlogKyAoaHogLSByaWRnZUhhbGZaKSAqIGYpICogb3V0O1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgYyA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHkgKyBsaWZ0LCB6XTtcbiAgICBjb25zdCBtID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSwgel07XG4gICAgcmV0dXJuIFtjKGF4LCAtYXopLCBtKDAsIC1heiksIGMoLWF4LCAtYXopLCBtKC1heCwgMCksXG4gICAgICAgICAgICBjKC1heCwgYXopLCBtKDAsIGF6KSwgYyhheCwgYXopLCBtKGF4LCAwKV07XG4gIH07XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgbGV0IHByZXYgPSByaW5nKDApO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgY29uc3QgY3VyID0gcmluZyhpIC8gc3RlcHMpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgICAgcHVzaChwcmV2W2tdLCBwcmV2W2syXSwgY3VyW2syXSk7XG4gICAgICBwdXNoKHByZXZba10sIGN1cltrMl0sIGN1cltrXSk7XG4gICAgfVxuICAgIHByZXYgPSBjdXI7XG4gIH1cbiAgLy8gRmFzY2lhIGJhbmQgYW5kIHNvZmZpdCwgc28gdGhlIHJvb2YgaXMgYSBzb2xpZCByYXRoZXIgdGhhbiBhIHNoZWxsLiBBbiBvcGVuIHNoZWxsIGxldHMgdGhlXG4gIC8vIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueSBsb3cgYW5nbGUuXG4gIGNvbnN0IGUgPSByaW5nKDApO1xuICBjb25zdCBsb3cgPSBlLm1hcCgocCkgPT4gW3BbMF0sIHBbMV0gLSBkcm9wLCBwWzJdXSk7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICBwdXNoKGxvd1trXSwgZVtrXSwgZVtrMl0pO1xuICAgIHB1c2gobG93W2tdLCBlW2syXSwgbG93W2syXSk7XG4gIH1cbiAgZm9yIChsZXQgayA9IDE7IGsgPCA3OyBrKyspIHB1c2gobG93WzBdLCBsb3dbayArIDFdLCBsb3dba10pOyAgIC8vIHNvZmZpdCBmYW4sIGZhY2luZyBkb3duXG5cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBSSUJCRUQgZG9tZSAtLSBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiB3aG9zZSByYWRpdXMgaXMgbW9kdWxhdGVkIGFyb3VuZCB0aGUgYXhpcywgc28gaXQgcmVhZHNcbiAqIGFzIHRoZSBtZWxvbi1yaWJiZWQgZG9tZSBvZiBhIG1vc3F1ZSByYXRoZXIgdGhhbiBhIHNtb290aCBoZW1pc3BoZXJlLlxuICpcbiAqIExhdGhlR2VvbWV0cnkgY2Fubm90IGRvIHRoaXM6IGEgbGF0aGUgcmV2b2x2ZXMgb25lIHByb2ZpbGUgYXQgb25lIHJhZGl1cyBwZXIgaGVpZ2h0LCBhbmQgcmlicyBhcmVcbiAqIGEgdmFyaWF0aW9uIEFST1VORCB0aGUgYXhpcywgbm90IGFsb25nIGl0LiBTbyB0aGUgc3VyZmFjZSBpcyBnZW5lcmF0ZWQgZGlyZWN0bHksIHNhbXBsaW5nXG4gKiBgMSArIGFtcCAqIGNvcyhyaWJzICogdGhldGEpYCBwZXIgc2VjdG9yLiBUaGUgcmlicyBhcmUgdGhlIHJlYXNvbiB0aGUgZG9tZSBpcyByZWNvZ25pc2FibGUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20gLS0gYSBzbW9vdGggZ3JlZW4gaGVtaXNwaGVyZSByZWFkcyBhcyBhIHdhdGVyIHRhbmsuXG4gKi9cbmZ1bmN0aW9uIHJpYmJlZERvbWUocHJvZmlsZTogbnVtYmVyW11bXSwgcmliczogbnVtYmVyLCBhbXA6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHZhbGxleT86IG51bWJlcltdLCBzbW9vdGggPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBjb2w6IG51bWJlcltdID0gW107XG4gIC8vIFRoZSByaWJzIGFyZSBub3Qgb25seSBhIHNoYXBlLiBPbiB0aGUgbW9zcXVlJ3MgZG9tZXMgdGhlIGNyZXN0cyBhcmUgcGFsZSBhbmQgdGhlIHZhbGxleXMgYXJlXG4gIC8vIGdyZWVuLCBhbmQgdGhhdCBzdHJpcGUgaXMgbW9zdCBvZiB3aGF0IHRoZSBkb21lIHJlYWRzIGFzIGF0IGRpc3RhbmNlLiBJdCBpcyBjYXJyaWVkIGFzIGFcbiAgLy8gcGVyLXZlcnRleCBNVUxUSVBMSUVSIG9mZiB0aGUgc2FtZSBjb3NpbmUgdGhhdCBzaGFwZXMgdGhlIHJpYiAtLSB0d28gbWVhc3VyZW1lbnRzLCB0aGUgY3Jlc3RcbiAgLy8gY29sb3VyIG9uIHRoZSBtYXRlcmlhbCBhbmQgdGhlIHZhbGxleSBhcyB0aGUgcmF0aW8gYmV0d2VlbiB0aGVtIC0tIHNvIHRoZSBzdHJpcGluZyBjb3N0cyBhblxuICAvLyBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSB0ZXh0dXJlIHNldCBvciBhIHNlY29uZCBkcmF3IGNhbGwuXG4gIGNvbnN0IHRpbnQgPSAoajogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWxsZXkpIHJldHVybiBbMSwgMSwgMV07XG4gICAgLy8gUmFpc2VkIHRvIDAuNTUgcmF0aGVyIHRoYW4gbGVmdCBsaW5lYXIuIEEgY29zaW5lIHNwZW5kcyBoYWxmIGl0cyBhcmVhIG5lYXIgZWFjaCBleHRyZW1lLCBhbmRcbiAgICAvLyB0aGF0IHJlbmRlcnMgYSBkb21lIHRoYXQgaXMgcGFsZSBvdmVyYWxsIHdoZXJlIHRoZSBwbGF0ZSdzIGlzIGdyZWVuIG92ZXJhbGw6IHRoZSBjcmVzdCBpcyBhXG4gICAgLy8gbmFycm93IGhpZ2hsaWdodCBvbiBhIHJlYWwgcmliLCBub3QgaGFsZiBvZiBpdC4gVGhlIGV4cG9uZW50IHdpZGVucyB0aGUgdmFsbGV5LlxuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygoMSAtIE1hdGguY29zKHJpYnMgKiAoKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWcpKSkgLyAyLCAwLjU1KTtcbiAgICByZXR1cm4gWzEgKyAodmFsbGV5WzBdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsxXSAtIDEpICogZiwgMSArICh2YWxsZXlbMl0gLSAxKSAqIGZdO1xuICB9O1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgY29uc3QgZiA9IDEgKyBhbXAgKiBNYXRoLmNvcyhyaWJzICogdGgpO1xuICAgIGNvbnN0IHIgPSBwcm9maWxlW2ldWzBdICogZjtcbiAgICByZXR1cm4gW01hdGguc2luKHRoKSAqIHIsIHByb2ZpbGVbaV1bMV0sIE1hdGguY29zKHRoKSAqIHJdO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2ZpbGUubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGksIGopLCBiID0gYXQoaSwgaiArIDEpLCBjID0gYXQoaSArIDEsIGogKyAxKSwgZCA9IGF0KGkgKyAxLCBqKTtcbiAgICAgIHB1c2goYSwgYiwgYyk7XG4gICAgICBwdXNoKGEsIGMsIGQpO1xuICAgICAgY29uc3QgdGEgPSB0aW50KGopLCB0YiA9IHRpbnQoaiArIDEpO1xuICAgICAgY29sLnB1c2goLi4udGEsIC4uLnRiLCAuLi50YiwgLi4udGEsIC4uLnRiLCAuLi50YSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBpZiAodmFsbGV5KSBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sKSwgMykpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIC8vIGBzbW9vdGhgIGF2ZXJhZ2VzIHRoZSBub3JtYWxzIG9mIGV2ZXJ5IHZlcnRleCBzaGFyaW5nIGEgcG9zaXRpb24sIHNvIGEgbG93LXNlY3RvciBmbG93ZXIgaGVhZFxuICAvLyBvciBwb21wb20gc2hhZGVzIGFzIGEgcm91bmRlZCBzb2xpZCByYXRoZXIgdGhhbiBhIGN1dCBnZW0uIFRoZSBzb3VwIGlzIG5vbi1pbmRleGVkLCBzbyB0aGVcbiAgLy8gZmFjZXRlZCBkZWZhdWx0IGlzIHdoYXQgY29tcHV0ZVZlcnRleE5vcm1hbHMgZ2l2ZXM7IHRoZSBtb3NxdWUncyBkb21lcyBrZWVwIGl0LlxuICBpZiAoc21vb3RoKSB7XG4gICAgY29uc3QgcG9zID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlLCBucm0gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgIGNvbnN0IGFjYyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXJbXT4oKTtcbiAgICBjb25zdCBrZXkgPSAoaTogbnVtYmVyKSA9PiBgJHtwb3MuZ2V0WChpKS50b0ZpeGVkKDUpfSwke3Bvcy5nZXRZKGkpLnRvRml4ZWQoNSl9LCR7cG9zLmdldFooaSkudG9GaXhlZCg1KX1gO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zLmNvdW50OyBpKyspIHsgY29uc3QgayA9IGtleShpKSwgYSA9IGFjYy5nZXQoaykgPz8gWzAsIDAsIDBdOyBhWzBdICs9IG5ybS5nZXRYKGkpOyBhWzFdICs9IG5ybS5nZXRZKGkpOyBhWzJdICs9IG5ybS5nZXRaKGkpOyBhY2Muc2V0KGssIGEpOyB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MuY291bnQ7IGkrKykgeyBjb25zdCBhID0gYWNjLmdldChrZXkoaSkpISwgbCA9IE1hdGguaHlwb3QoYVswXSwgYVsxXSwgYVsyXSkgfHwgMTsgbnJtLnNldFhZWihpLCBhWzBdIC8gbCwgYVsxXSAvIGwsIGFbMl0gLyBsKTsgfVxuICAgIG5ybS5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBQT0lOVEVEIGFyY2ggcGxhdGUgLS0gdGhlIHR3by1jZW50cmVkIGFyY2ggb2YgYSBtb3NxdWUsIG5vdCB0aGUgaGFsZi1yb3VuZCBvZiBhIFJvbWFuIG9uZS5cbiAqIGBhcmNoZWRQbGF0ZWAgYWJvdmUgc3dlZXBzIGEgc2luZ2xlIHNlbWljaXJjbGUsIHdoaWNoIGlzIHRoZSB3cm9uZyBhcmNoIGhlcmUgYW5kIHJlYWRzIGFzIGFcbiAqIHJhaWx3YXkgdmlhZHVjdDsgdGhpcyBvbmUgcnVucyBlYWNoIHNpZGUgdXAgdG8gYSBzaGFyZWQgYXBleCB0aHJvdWdoIGEgcXVhZHJhdGljLCB3aGljaCBnaXZlcyB0aGVcbiAqIG9nZWUgcG9pbnQuXG4gKi9cbmZ1bmN0aW9uIHBvaW50ZWRBcmNoU2hhcGUodzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob2xlPzogeyB3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgYnVpbGQgPSAodGFyZ2V0OiBUSFJFRS5TaGFwZSB8IFRIUkVFLlBhdGgsIHd3OiBudW1iZXIsIHNwOiBudW1iZXIsIHJpc2U6IG51bWJlciwgc2w6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGh3ID0gd3cgLyAyO1xuICAgIHRhcmdldC5tb3ZlVG8oaHcsIHNsKTtcbiAgICB0YXJnZXQubGluZVRvKGh3LCBzcCk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oaHcsIHNwICsgcmlzZSAqIDAuNzIsIDAsIHNwICsgcmlzZSk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oLWh3LCBzcCArIHJpc2UgKiAwLjcyLCAtaHcsIHNwKTtcbiAgICB0YXJnZXQubGluZVRvKC1odywgc2wpO1xuICAgIHRhcmdldC5jbG9zZVBhdGgoKTtcbiAgfTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgYnVpbGQoc2hhcGUsIHcsIHNwcmluZywgYXBleFJpc2UsIHNpbGwpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIGJ1aWxkKHAsIGhvbGUudywgaG9sZS5zcHJpbmcsIGhvbGUuYXBleFJpc2UsIGhvbGUuc2lsbCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBUQVBFUklORyBUVUJFIGFsb25nICtaLCBidWlsdCBmcm9tIGEgbGlzdCBvZiBzdGF0aW9ucy4gRWFjaCBzdGF0aW9uIGlzXG4gKiBbeiwgY2VudHJlWCwgY2VudHJlWSwgcmFkaXVzWCwgcmFkaXVzWV0sIGFuZCBjb25zZWN1dGl2ZSBzdGF0aW9ucyBhcmUgam9pbmVkIGJ5IGEgcmluZyBvZiBgc2VnYFxuICogcG9pbnRzLCBzbyB0aGUgcmFkaXVzLCB0aGUgY2VudHJlIGFuZCB0aGUgZWxsaXBzZSByYXRpbyBjYW4gYWxsIHZhcnkgYWxvbmcgdGhlIGxlbmd0aC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvbmx5IE9SR0FOSUMgZm9ybSBpbiB0aGUgd2hvbGUga2l0LCBhbmQgaXQgZXhpc3RzIGZvciBvbmUgcHJvcDogYSByZWNsaW5pbmcgZmlndXJlIGlzXG4gKiBhIGxvbmcgc29mdCBtYXNzIHdob3NlIHNlY3Rpb24gY2hhbmdlcyBhdCBldmVyeSBwb2ludCBhbG9uZyBpdCAtLSBzaG91bGRlciB0byB3YWlzdCB0byBoaXAgdG9cbiAqIGNhbGYgLS0gYW5kIG5laXRoZXIgYSBsYXRoZSBub3IgYSBzdGFjayBvZiBib3hlcyBjYW4gc2F5IHRoYXQuIEEgYm94IGRlY29tcG9zaXRpb24gb2YgYSBseWluZ1xuICogYm9keSBpcyBub3QgYSBsb3ctcG9seSBib2R5LCBpdCBpcyBhIHBpbGUgb2YgbHVnZ2FnZS5cbiAqXG4gKiBBIHN0YXRpb24gd2l0aCBhIHJhZGl1cyBhdCBvciBuZWFyIHplcm8gY2xvc2VzIHRoZSB0dWJlLCBzbyB0aGUgZW5kcyBjYW4gYmUgY2FwcGVkIGJ5IHRoZVxuICogc3RhdGlvbiBsaXN0IGl0c2VsZiByYXRoZXIgdGhhbiBieSBhIHNlcGFyYXRlIGZhbi5cbiAqL1xuZnVuY3Rpb24gdHViZUFsb25nKHN0YXRpb25zOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gSU5ERVhFRCwgd2l0aCBzaGFyZWQgcmluZyB2ZXJ0aWNlcywgc28gY29tcHV0ZVZlcnRleE5vcm1hbHMgYXZlcmFnZXMgYWNyb3NzIHRoZSBxdWFkcyBhbmQgdGhlXG4gIC8vIHN1cmZhY2Ugc2hhZGVzIHNtb290aC4gVGhlIGZpcnN0IGJ1aWxkIGVtaXR0ZWQgbG9vc2UgdHJpYW5nbGVzLCBhbmQgYSBmbGF0LXNoYWRlZCBzb2Z0IGJvZHlcbiAgLy8gc2hvd3MgZXZlcnkgc3RhdGlvbiBhcyBhIGNyZWFzZSAtLSBhIHJlY2xpbmluZyBmaWd1cmUgdGhhdCBsb29rZWQgY3J1bXBsZWQgcmF0aGVyIHRoYW4gZHJhcGVkLlxuICAvL1xuICAvLyBBIHNpeHRoIHN0YXRpb24gZWxlbWVudCBgZmxhdFlgIENMQU1QUyB0aGUgcmluZydzIHVuZGVyc2lkZSB0byB0aGF0IGhlaWdodC4gQSBib2R5IHJlc3Rpbmcgb25cbiAgLy8gdGhlIGdyb3VuZCBpcyBub3QgYSBmbG9hdGluZyBlbGxpcHNlOiBpdCBzcHJlYWRzIHdoZXJlIGl0IGJlYXJzLCBhbmQgYW4gdW5jbGFtcGVkIHR1YmUgcmVhZHMgYXNcbiAgLy8gYSBzYXVzYWdlIG9uIGEgdGFibGUuIFRoZSBjbGFtcCBpcyBhIHNvZnQgb25lIC0tIHRoZSByaW5nIGtlZXBzIGl0cyB3aWR0aCBhbmQgbG9zZXMgaXRzIGRyb29wIC0tXG4gIC8vIHNvIHRoZSBjcmVhc2UgaXQgbGVhdmVzIGlzIHRoZSBjb250YWN0IGVkZ2UgcmF0aGVyIHRoYW4gYSBjdXQuXG4gIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgW3osIGN4LCBjeSwgcngsIHJ5LCBmbGF0WV0gPSBzdGF0aW9uc1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCB0aCA9IGogKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguc2luKHRoKSAqIHJ4O1xuICAgICAgbGV0IHkgPSBjeSArIE1hdGguY29zKHRoKSAqIHJ5O1xuICAgICAgaWYgKGZsYXRZICE9PSB1bmRlZmluZWQgJiYgeSA8IGZsYXRZKSB5ID0gZmxhdFk7XG4gICAgICBwb3MucHVzaCh4LCB5LCB6KTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gaSAqIHNlZyArIGosIGIgPSAoaSArIDEpICogc2VnICsgaiwgYyA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgICBpZHgucHVzaChhLCBiLCBjLCBhLCBjLCBkKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIGN1cmxlZCBob3JuOiBgbmAgdGFwZXJpbmcgYm94IHNlZ21lbnRzIHNhbXBsZWQgYWxvbmcgYSBzaW5lLCBlYWNoIHJvdGF0ZWQgdG8gaXRzIG93biB0YW5nZW50LlxuICogU2hhcmVkIGJ5IHRoZSB1Ym9zb3QncyBjaG9mYSwgdGhlIHByYW5nJ3MgdHJpZGVudCBwcm9uZ3MgYW5kIHRoZSBDaGluZXNlIHNocmluZSdzIGZseWluZyBlYXZlcyxcbiAqIGJlY2F1c2UgYWxsIHRocmVlIGFyZSB0aGUgc2FtZSBwcm9ibGVtIC0tIGEgc3RyYWlnaHQgc3Bpa2UgYXQgYSByb29mIGVuZCByZWFkcyBhcyBhIGxpZ2h0bmluZyByb2RcbiAqIGFuZCB0aGUgY3VybCBpcyB0aGUgd2hvbGUgZmVhdHVyZS5cbiAqL1xuZnVuY3Rpb24gY3VybGVkSG9ybihyZWFjaDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHRoaWNrOiBudW1iZXIsIG4gPSA2KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGF0ID0gKHU6IG51bWJlcikgPT4gW3JlYWNoICogTWF0aC5zaW4odSAqIE1hdGguUEkgKiAwLjQ2KSwgcmlzZSAqIHVdO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGNvbnN0IGEgPSBhdChqIC8gbiksIGIgPSBhdCgoaiArIDEpIC8gbik7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCB3ID0gdGhpY2sgKiAoMSAtIGogLyBuKSArIHRoaWNrICogMC4yODtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIE1hdGguaHlwb3QoZHgsIGR5KSArIHRoaWNrICogMC4yLCB3KTtcbiAgICBnLnJvdGF0ZVooTWF0aC5hdGFuMigtZHgsIGR5KSk7XG4gICAgZy50cmFuc2xhdGUoKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyLCAwKTtcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlR2VvcyhzZWdzKTtcbn1cblxuLyoqXG4gKiBSYW1wIGEgcGVyLXZlcnRleCB0aW50IG92ZXIgYSBoZWlnaHQgYmFuZCwgYXMgYSBNVUxUSVBMSUVSIG9uIHRoZSBtYXRlcmlhbCBjb2xvdXIuXG4gKlxuICogVGhpcyBpcyBob3cgYSBsb2NhbCBtYXRlcmlhbCBvdmVycmlkZSBnZXRzIGRlbGl2ZXJlZCBvbiBhIG1lcmdlZCBjb21wb25lbnQgdGhhdCBpcyBvbmUgbWVzaCBhbmRcbiAqIG11c3Qgc3RheSBvbmUgZHJhdyBjYWxsOiBhIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgc3VibWlzc2lvbiBhbmQgYSBzaGFkZXIgc3dpdGNoIHRvIHNheVxuICogdGhhdCB0aGUgYm90dG9tIG9mIGEgd2FsbCBpcyBkaXJ0aWVyIHRoYW4gdGhlIHRvcC4gYHJnYjBgIGlzIHRoZSBtZWFzdXJlZCB0aW50IGF0IHkwIGV4cHJlc3NlZFxuICogYXMgYSBmcmFjdGlvbiBvZiB0aGUgbWF0ZXJpYWwncyBvd24gbWVhc3VyZWQgYWxiZWRvLCBzbyB0aGUgdG9wIG9mIHRoZSBiYW5kIGlzIHVudGludGVkIDEuMCBhbmRcbiAqIHRoZSBudW1iZXJzIGJlbG93IHN0YXkgdHJhY2VhYmxlIHRvIHR3byBjcm9wIG1lYXN1cmVtZW50cyByYXRoZXIgdGhhbiB0byBhIGNob3NlbiBkYXJrZW5pbmcuXG4gKi9cbmZ1bmN0aW9uIHRpbnRCeUhlaWdodChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByZ2IwOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChwLmdldFkoaSkgLSB5MCkgLyAoeTEgLSB5MCkpKTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IDM7IGMrKykgY29sW2kgKiAzICsgY10gPSByZ2IwW2NdICsgKDEgLSByZ2IwW2NdKSAqIHQ7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdmVoaWNsZSBoZWxwZXJzICovXG5cbi8qKiBQYWludCBhIHdob2xlIGdlb21ldHJ5IG9uZSB2ZXJ0ZXggY29sb3VyLiBFdmVyeSB2ZWhpY2xlIG1hdGVyaWFsIGhlcmUgaXMgV0hJVEUgd2l0aFxuICogIHZlcnRleENvbG9ycyBvbiwgc28gYSBjb2xvdXIgZGlmZmVyZW5jZSBjb3N0cyBhbiBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSBtYXRlcmlhbDogdGhlIGJvZHknc1xuICogIHR3by10b25lLCB0aGUgdHlyZSBhZ2FpbnN0IGl0cyByaW0sIGFuIGFtYmVyIGluZGljYXRvciBvbiBhIGJsYWNrIGJ1bXBlciBhbGwgcmlkZSBvbmUgc2hhZGVyLlxuICogIFZlcnRleCBjb2xvdXJzIG11bHRpcGx5IGluIExJTkVBUiBzcGFjZSwgc28gdGhlIGhleCBpcyBjb252ZXJ0ZWQgdGhyb3VnaCBUSFJFRS5Db2xvciwgd2hpY2hcbiAqICBkb2VzIHRoZSBzUkdCLXRvLWxpbmVhciBzdGVwLiAqL1xuZnVuY3Rpb24gdGludEdlbyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBoZXg6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcihoZXgpO1xuICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjsgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBCb3gtcHJvamVjdCB3b3JsZC1tZXRyZSBVVnMgc28gYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSAobXVkLCBydXN0LCBjb3JydWdhdGlvbikgcmVwZWF0c1xuICogIGF0IGEgcmVhbCBzaXplIG9uIGV2ZXJ5IGZhY2UuIGBzY2FsZWAgaXMgbWV0cmVzIHBlciB0aWxlLiBUaGUgZG9taW5hbnQgbm9ybWFsIGF4aXMgcGlja3MgdGhlXG4gKiAgcGFpciBvZiB3b3JsZCBheGVzIHVzZWQsIHNvIGEgcm9vZiByZWFkcyAoeCwgeikgYW5kIGEgc2lkZSByZWFkcyAoeiwgeSkuICovXG5mdW5jdGlvbiB3b3JsZFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXkgPSBNYXRoLmFicyhucm0uZ2V0WShpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGxldCB1OiBudW1iZXIsIHY6IG51bWJlcjtcbiAgICBpZiAoYXggPj0gYXkgJiYgYXggPj0gYXopIHsgdSA9IHAuZ2V0WihpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIGVsc2UgaWYgKGF5ID49IGF6KSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFooaSk7IH1cbiAgICBlbHNlIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIFBMQU4tcHJvamVjdCBVVnM6IGV2ZXJ5IHZlcnRleCwgd2hhdGV2ZXIgaXQgZmFjZXMsIG1hcHMgYnkgaXRzIHdvcmxkICh4LCB6KSB3aXRoIHRoZSB0aWxlJ3NcbiAqICBDRU5UUkUgYXQgdGhlIG9yaWdpbiAtLSB1ID0geC9zY2FsZSArIDAuNSwgdiA9IHovc2NhbGUgKyAwLjUuIFRoaXMgaXMgZm9yIGEgY2FudmFzIHRoYXQgaXMgYVxuICogIFBJQ1RVUkUgT0YgVEhFIFRPUCByYXRoZXIgdGhhbiBhIHJlcGVhdGluZyBncmFpbjogYSByb3VuZCB0YWJsZSB0b3AncyByYWRpYWwgcmliYmluZyBkcmF3biBvbmNlXG4gKiAgaW4gcGxhbiBhdCBgc2NhbGVgID0gdGhlIGRpYW1ldGVyLCBzbyB0aGUgcmltIHNhbXBsZXMgdGhlIHRpbGUncyByID0gMC41IGNpcmNsZSwgdGhlIHVtYnJlbGxhXG4gKiAgaG9sZSBpdHMgY2VudHJlLCBhbmQgYSB2ZXJ0aWNhbCBza2lydCBmYWNlIHRoZSBzYW1lIHJpbmcgdG9uZSBhcyB0aGUgZWRnZSBhYm92ZSBpdC4gTm90aGluZ1xuICogIHJlcGVhdHMgYW5kIG5vIHNlYW0gbGFuZHMgb24gdGhlIHN1cmZhY2UuICovXG5mdW5jdGlvbiBwbGFuVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7IHV2W2kgKiAyXSA9IHAuZ2V0WChpKSAvIHNjYWxlICsgMC41OyB1dltpICogMiArIDFdID0gcC5nZXRaKGkpIC8gc2NhbGUgKyAwLjU7IH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKlxuICogU0lERS1QUk9GSUxFIEVYVFJVU0lPTjogYSBjbG9zZWQgcG9seWdvbiBvZiBbeiwgeV0gcG9pbnRzICh0aGUgdmVoaWNsZSdzIHNpZGUgc2lsaG91ZXR0ZSwgd2hlZWxcbiAqIGFyY2hlcyBpbmNsdWRlZCBhcyBub3RjaGVzKSBzd2VwdCBhY3Jvc3MgdGhlIGZ1bGwgd2lkdGgsIHRoZW4gc2hhcGVkIHBlciB2ZXJ0ZXg6XG4gKlxuICogIC0gYHR1bWJsZWAgIG5hcnJvd3MgdGhlIHNlY3Rpb24gYWJvdmUgdGhlIGJlbHQgbGluZSAtLSB4IGlzIHNjYWxlZCBieSAoMSAtIGsgKiB0KSB3aGVyZSB0IHJ1bnNcbiAqICAgICAgICAgICAgICAwIGF0IGBiZWx0YCB0byAxIGF0IGByb29mYC4gVGhhdCBpcyB0aGUgdHVtYmxlaG9tZSBvZiBhIHJlYWwgY2FyIGJvZHkgYW5kIGlzIHdoYXRcbiAqICAgICAgICAgICAgICBzdG9wcyB0aGUgZ2xhc3Nob3VzZSByZWFkaW5nIGFzIGEgYm94IG9uIGEgYm94LlxuICogIC0gYHBsYW5gICAgIHJvdW5kcyB0aGUgcGxhbiBhdCB0aGUgbm9zZSBhbmQgdGFpbDogYW4gb3B0aW9uYWwgbGlzdCBvZiBbeiwgeFNjYWxlXSBzdGF0aW9uc1xuICogICAgICAgICAgICAgIGludGVycG9sYXRlZCBhbG9uZyB6LCBzbyBhIGJvbm5ldCBjYW4gdGFwZXIgdG8gMC45IG9mIHRoZSB3aWR0aCBhdCB0aGUgYnVtcGVyIGxpbmUuXG4gKlxuICogRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBpbiBpdHMgb3duICh1LCB2LCBkZXB0aCkgZnJhbWU7IHJvdGF0ZVkoLVBJLzIpIG1hcHMgZGVwdGggdG8gLXggYW5kIHUgdG9cbiAqIHdvcmxkIHosIGFuZCB0aGUgdHJhbnNsYXRlIHJlLWNlbnRyZXMgdGhlIHNsYWIgb24geCA9IDAuIEFueSBzaGFwaW5nIGlzIGFwcGxpZWQgQUZURVIgdGhhdCwgYW5kXG4gKiBub3JtYWxzIGFyZSByZWNvbXB1dGVkIGxhc3Qgc28gdGhlIHNoYWRlZCBmYWNlcyBmb2xsb3cgdGhlIHNoYXBlZCBzdXJmYWNlLlxuICovXG5mdW5jdGlvbiBzaWRlRXh0cnVkZShwcm9maWxlOiBudW1iZXJbXVtdLCB3aWR0aDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgb3B0czogeyB0dW1ibGU/OiB7IGJlbHQ6IG51bWJlciwgcm9vZjogbnVtYmVyLCBrOiBudW1iZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbj86IG51bWJlcltdW10sIGN1cnZlU2VnbWVudHM/OiBudW1iZXIgfSA9IHt9KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHJvZmlsZVswXVswXSwgcHJvZmlsZVswXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvZmlsZS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHByb2ZpbGVbaV1bMF0sIHByb2ZpbGVbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHdpZHRoLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmVTZWdtZW50czogb3B0cy5jdXJ2ZVNlZ21lbnRzID8/IDYgfSk7XG4gIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSh3aWR0aCAvIDIsIDAsIDApO1xuICBzaGFwZVdpZHRoKGcsIG9wdHMpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIFRoZSBwZXItdmVydGV4IHggc2hhcGluZyBzaGFyZWQgYnkgdGhlIGJvZHkgYW5kIGl0cyBnbGFzcyBiYW5kLCBzbyBhIHBhbmUgb2Zmc2V0IDUgbW0gcHJvdWQgb2ZcbiAqICB0aGUgYm9keSBzdGF5cyA1IG1tIHByb3VkIGFmdGVyIGJvdGggYXJlIG5hcnJvd2VkIGJ5IHRoZSBzYW1lIGZ1bmN0aW9uLiAqL1xuZnVuY3Rpb24gc2hhcGVXaWR0aChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSxcbiAgICAgICAgICAgICAgICAgICAgb3B0czogeyB0dW1ibGU/OiB7IGJlbHQ6IG51bWJlciwgcm9vZjogbnVtYmVyLCBrOiBudW1iZXIgfSwgcGxhbj86IG51bWJlcltdW10gfSk6IHZvaWQge1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgbGV0IHggPSBwLmdldFgoaSk7IGNvbnN0IHkgPSBwLmdldFkoaSksIHogPSBwLmdldFooaSk7XG4gICAgaWYgKG9wdHMudHVtYmxlKSB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHkgLSBvcHRzLnR1bWJsZS5iZWx0KSAvIChvcHRzLnR1bWJsZS5yb29mIC0gb3B0cy50dW1ibGUuYmVsdCkpKTtcbiAgICAgIHggKj0gMSAtIG9wdHMudHVtYmxlLmsgKiB0O1xuICAgIH1cbiAgICBpZiAob3B0cy5wbGFuICYmIG9wdHMucGxhbi5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBzdCA9IG9wdHMucGxhbjtcbiAgICAgIGxldCBzID0gc3RbMF1bMV07XG4gICAgICBpZiAoeiA8PSBzdFswXVswXSkgcyA9IHN0WzBdWzFdO1xuICAgICAgZWxzZSBpZiAoeiA+PSBzdFtzdC5sZW5ndGggLSAxXVswXSkgcyA9IHN0W3N0Lmxlbmd0aCAtIDFdWzFdO1xuICAgICAgZWxzZSBmb3IgKGxldCBrID0gMDsgayA8IHN0Lmxlbmd0aCAtIDE7IGsrKykge1xuICAgICAgICBpZiAoeiA+PSBzdFtrXVswXSAmJiB6IDw9IHN0W2sgKyAxXVswXSkge1xuICAgICAgICAgIGNvbnN0IHUgPSAoeiAtIHN0W2tdWzBdKSAvIChzdFtrICsgMV1bMF0gLSBzdFtrXVswXSk7XG4gICAgICAgICAgcyA9IHN0W2tdWzFdICsgKHN0W2sgKyAxXVsxXSAtIHN0W2tdWzFdKSAqIHU7IGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB4ICo9IHM7XG4gICAgfVxuICAgIHAuc2V0WChpLCB4KTtcbiAgfVxuICBwLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xufVxuXG4vKiogQSBzZW1pY2lyY3VsYXIgd2hlZWwtYXJjaCBub3RjaCBhcyBwcm9maWxlIHBvaW50cywgdG8gYmUgc3BsaWNlZCBpbnRvIGEgc2lkZSBwcm9maWxlIHRoYXQgcnVuc1xuICogIGFsb25nIHRoZSBzaWxsIGZyb20gK3ogdG8gLXogKGkuZS4geiBERUNSRUFTSU5HKS4gYG5gIHNlZ21lbnRzOyB0aGUgYXJjIGlzIHRoZSBUT1AgaGFsZi4gKi9cbmZ1bmN0aW9uIGFyY2hOb3RjaCh6YzogbnVtYmVyLCB5U2lsbDogbnVtYmVyLCByOiBudW1iZXIsIG4gPSA3KTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgLyBuOyAgICAgICAgICAgICAgIC8vIDAgLi4gUEksIGZyb20gK3ogcm91bmQgdGhlIHRvcCB0byAtelxuICAgIHB0cy5wdXNoKFt6YyArIE1hdGguY29zKGEpICogciwgeVNpbGwgKyBNYXRoLnNpbihhKSAqIHJdKTtcbiAgfVxuICByZXR1cm4gcHRzO1xufVxuXG4vKipcbiAqIEEgV0hFRUw6IG9uZSBsYXRoZSBhYm91dCB0aGUgYXhsZS4gVGhlIHByb2ZpbGUgcnVucyBmcm9tIHRoZSBodWIgZmFjZSBvbiBvbmUgc2lkZSBvdmVyIHRoZSByaW1cbiAqIGxpcCwgdGhlIHR5cmUgc2lkZXdhbGwsIHRoZSB0cmVhZCBhbmQgYmFjayBkb3duIHRoZSBmYXIgc2lkZSwgc28gdGhlIHdoZWVsIGlzIGEgY2xvc2VkIHNvbGlkIHdpdGhcbiAqIG5vIG9wZW4gZW5kIGZvciB0aGUgdHVybnRhYmxlIGdhdGUgdG8gcmVhZCB0aHJvdWdoLiBSZXZvbHZlZCBhYm91dCBZIGFuZCB0aGVuIGxhaWQgb24gWCwgc28gdGhlXG4gKiBheGxlIGlzIHRoZSB4IGF4aXMgYW5kIHRoZSB3aGVlbCByb2xscyBhYm91dCBpdCAtLSB3aGljaCBpcyB0aGUgYXhpcyBpdHMgcGl2b3QgZGVjbGFyZXMuXG4gKlxuICogVHdvIHZlcnRleCBjb2xvdXJzOiBgcmltSGV4YCBvbiB0aGUgaHViIGFuZCByaW0gcG9pbnRzLCBgdHlyZUhleGAgb24gdGhlIHNpZGV3YWxsIGFuZCB0cmVhZC4gVGhlXG4gKiBsYXRoZSBvcmRlcnMgdmVydGljZXMgc2VnbWVudC1tYWpvciAoaW5kZXggPSBzZWcgKiBwb2ludENvdW50ICsgcG9pbnQpLCB3aGljaCBpcyB3aGF0IGxldHMgYVxuICogcGVyLXByb2ZpbGUtcG9pbnQgY29sb3VyIGJlIHdyaXR0ZW4gd2l0aG91dCBhIHNlY29uZCBnZW9tZXRyeS5cbiAqL1xuZnVuY3Rpb24gd2hlZWxHZW8oclR5cmU6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgIHR5cmVIZXg6IG51bWJlciwgcmltSGV4OiBudW1iZXIsIGRpc2ggPSAwLjU1KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBodyA9IGhhbGZXO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXG4gICAgWzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuMzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuNjIsIC1odyAqIDAuODBdLCBbclJpbSwgLWh3ICogMC44Nl0sIFtyUmltLCAtaHcgKiAwLjk4XSxcbiAgICBbclR5cmUgKiAwLjkzLCAtaHddLCBbclR5cmUsIC1odyAqIDAuNzJdLCBbclR5cmUsIGh3ICogMC43Ml0sIFtyVHlyZSAqIDAuOTMsIGh3XSxcbiAgICBbclJpbSwgaHcgKiAwLjk4XSwgW3JSaW0sIGh3ICogMC44Nl0sIFtyUmltICogMC42MiwgaHcgKiAwLjgwXSwgW3JSaW0gKiAwLjMwLCBodyAqIGRpc2hdLCBbMCwgaHcgKiBkaXNoXSxcbiAgXTtcbiAgY29uc3QgcmltUG9pbnQgPSAoajogbnVtYmVyKSA9PiBqIDw9IDQgfHwgaiA+PSA5O1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkocHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIocFswXSwgcFsxXSkpLCBzZWcpO1xuICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBjb25zdCBjdCA9IG5ldyBUSFJFRS5Db2xvcih0eXJlSGV4KSwgY3IgPSBuZXcgVEhSRUUuQ29sb3IocmltSGV4KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBjID0gcmltUG9pbnQoaSAlIHB0cy5sZW5ndGgpID8gY3IgOiBjdDtcbiAgICBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgZy5yb3RhdGVaKE1hdGguUEkgLyAyKTsgICAgLy8gbGF0aGUgYXhpcyBZIC0+IGF4bGUgb24gWFxuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogV2lyZS1zcG9rZWQgd2hlZWwgZHJlc3Npbmc6IGBuYCB0aGluIGJveGVzIHJhZGlhdGluZyBmcm9tIHRoZSBodWIsIGxhY2VkIGFsdGVybmF0ZWx5IHRvIGVhY2hcbiAqICBzaWRlIG9mIHRoZSByaW0gc28gdGhleSBjcm9zcyB0aGUgd2F5IHJlYWwgc3Bva2VzIGRvLiBNZXJnZWQgaW50byB0aGUgd2hlZWwgZ2VvbWV0cnkgc28gdGhlXG4gKiAgd2hlZWwgc3RheXMgT05FIGluc3RhbmNlZCBnZW9tZXRyeS4gKi9cbmZ1bmN0aW9uIHNwb2tlcyhySHViOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgbjogbnVtYmVyLCBoZXg6IG51bWJlciwgdCA9IDAuMDA2LCBwcmlzbSA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGkgKiBNYXRoLlBJICogMiAvIG47XG4gICAgY29uc3Qgc2lkZSA9IChpICUgMiA9PT0gMCA/IDEgOiAtMSkgKiBoYWxmVyAqIDAuMzU7XG4gICAgY29uc3QgbGVuID0gclJpbSAtIHJIdWI7XG4gICAgLy8gYHByaXNtYDogYW4gb3BlbiB0aHJlZS1zaWRlZCBwcmlzbSBhdCBzaXggdHJpYW5nbGVzIHdoZXJlIHRoZSBib3ggY29zdHMgdHdlbHZlIC0tIGEgd2lyZVxuICAgIC8vIHNwb2tlIGhhcyBubyByZXNvbHZhYmxlIHNlY3Rpb24gYXQgcHJvcCBkaXN0YW5jZSwgYW5kIDI4IG9mIHRoZW0gb24gdGhyZWUgd2hlZWxzIGlzIHRoZVxuICAgIC8vIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGxhcmdlIHByb3AgaW5zaWRlIGl0cyB0cmlhbmdsZSBjZWlsaW5nIGFuZCBvbmUgb3ZlciBpdFxuICAgIGNvbnN0IGcgPSBwcmlzbSA/IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHQgKiAwLjYyLCB0ICogMC42MiwgbGVuLCAzLCAxLCB0cnVlKSA6IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh0LCBsZW4sIHQpO1xuICAgIGcudHJhbnNsYXRlKDAsIHJIdWIgKyBsZW4gLyAyLCAwKTtcbiAgICBnLnJvdGF0ZVgoTWF0aC5hdGFuMihzaWRlLCBsZW4pICogMC42KTtcbiAgICBnLnJvdGF0ZVgoMCk7IGcudHJhbnNsYXRlKDAsIDAsIHNpZGUgKiAwLjUpO1xuICAgIGcucm90YXRlWChhKTsgICAgICAgICAgICAvLyByYWRpYXRlIGFyb3VuZCB0aGUgYXhsZSAoeClcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIHRpbnRHZW8obWVyZ2VHZW9zKHNlZ3MpLCBoZXgpO1xufVxuXG4vKiogQSBwb2x5bGluZSBUVUJFOiBvbmUgY3lsaW5kZXIgcGVyIHNlZ21lbnQsIGVhY2ggcm90YXRlZCBvbnRvIGl0cyBjaG9yZCwgd2l0aCBhIHNtYWxsIHNwaGVyZS1sZXNzXG4gKiAgb3ZlcmxhcCBzbyB0aGUgam9pbnRzIGNsb3NlLiBIYW5kbGViYXJzLCBjYW5vcHkgcmFpbHMsIHJvbGwgY2FnZXMgYW5kIGZyYW1lIHR1YmVzLiAqL1xuLyoqXG4gKiBgcmAgbWF5IGJlIGEgc2luZ2xlIHJhZGl1cyAoZXZlcnkgc2VnbWVudCB0aGUgc2FtZSwgdGhlIG9yaWdpbmFsIGJlaGF2aW91cikgb3IgT05FIFJBRElVUyBQRVJcbiAqIFNUQVRJT04sIHdoaWNoIHRhcGVycyB0aGUgdHViZS4gQSBjYXBwZWQgY29uc3RhbnQtcmFkaXVzIHR1YmUgZW5kcyBpbiBhIGZsYXQgZGlzYywgYW5kIG9uIHRoZVxuICogc3Bpcml0IGhvdXNlJ3MgZWF2ZSBob3JucyB0aGF0IHJlYWQgYXMgZm91ciBjdXQtb2ZmIHBvc3RzIHJhdGhlciB0aGFuIHBvaW50czsgYSBob3JuLCBhIHNwaWtlIG9yXG4gKiBhIHdoaXNrZXIgbmVlZHMgaXRzIGxhc3Qgc3RhdGlvbiBhdCB+MC4yNSBvZiB0aGUgZmFzY2lhIHJhZGl1cy4gVGhlIGpvaW50IG92ZXJsYXAgdGhhdCBoaWRlcyB0aGVcbiAqIHNlYW0gYmV0d2VlbiBzZWdtZW50cyBpcyAocmEgKyByYikgKiAwLjYsIHdoaWNoIGlzIGV4YWN0bHkgdGhlIG9sZCBgciAqIDEuMmAgd2hlbiB0aGV5IGFyZSBlcXVhbCxcbiAqIHNvIGEgbnVtYmVyIHN0aWxsIHByb2R1Y2VzIGJ5dGUtaWRlbnRpY2FsIGdlb21ldHJ5LlxuICovXG5mdW5jdGlvbiB0dWJlKHB0czogbnVtYmVyW11bXSwgcjogbnVtYmVyIHwgbnVtYmVyW10sIHNlZyA9IDgsIGhleD86IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgckF0ID0gKGk6IG51bWJlcikgPT4gKHR5cGVvZiByID09PSAnbnVtYmVyJyA/IHIgOiByW01hdGgubWluKGksIHIubGVuZ3RoIC0gMSldKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMl0pO1xuICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaSArIDFdWzBdLCBwdHNbaSArIDFdWzFdLCBwdHNbaSArIDFdWzJdKTtcbiAgICBjb25zdCBkID0gYi5jbG9uZSgpLnN1YihhKTsgY29uc3QgbGVuID0gZC5sZW5ndGgoKTtcbiAgICBpZiAobGVuIDwgMWUtNikgY29udGludWU7XG4gICAgY29uc3QgcmEgPSByQXQoaSksIHJiID0gckF0KGkgKyAxKTtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkocmIsIHJhLCBsZW4gKyAocmEgKyByYikgKiAwLjYsIHNlZywgMSwgZmFsc2UpO1xuICAgIGNvbnN0IHEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgZC5ub3JtYWxpemUoKSk7XG4gICAgZy5hcHBseVF1YXRlcm5pb24ocSk7XG4gICAgY29uc3QgbSA9IGEuY2xvbmUoKS5hZGQoYikubXVsdGlwbHlTY2FsYXIoMC41KTtcbiAgICBnLnRyYW5zbGF0ZShtLngsIG0ueSwgbS56KTtcbiAgICBwYXJ0cy5wdXNoKGcpO1xuICB9XG4gIGNvbnN0IG91dCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IG91dCA6IHRpbnRHZW8ob3V0LCBoZXgpO1xufVxuXG4vKipcbiAqIEEgRkxBVCBTVFJBUCBzd2VwdCBhbG9uZyBhIHBvbHlsaW5lOiBhIGNoYWluIG9mIGJveGVzLCBlYWNoIG9yaWVudGVkIHNvIGl0cyBMRU5HVEggcnVucyBhbG9uZyB0aGVcbiAqIHNlZ21lbnQsIGl0cyBUSElDS05FU1MgYWxvbmcgdGhlIG91dHdhcmQgbm9ybWFsIGZyb20gYGFib3V0YCwgYW5kIGl0cyBXSURUSCB0YW5nZW50IHRvIHRoYXRcbiAqIHN1cmZhY2UuIFRoaXMgaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGd1YXJkIGFuZCBhIHdpcmU6IGEgYnVsa2hlYWQgbGFtcCdzIGNhZ2UgaXMgcHJlc3NlZFxuICogZmxhdCBiYXIsIGFuZCBhIHJvdW5kIHR1YmUgb2YgdGhlIHNhbWUgbWVhc3VyZWQgd2lkdGggc2hhZGVzIHRvIGEgbmFycm93IGhpZ2hsaWdodCBhbmQgcmVhZHMgYXNcbiAqIHdpcmUgLS0gd2hpY2ggaXMgdGhlIHRoaW5nIHRoaXMga2l0J3MgYXNzZXQgbm90ZXMgcnVsZSBvdXQuIEl0IGlzIGFsc28gQ0hFQVBFUiB0aGFuIGB0dWJlYDogYSBib3hcbiAqIGlzIDEyIHRyaWFuZ2xlcyBhZ2FpbnN0IGEgY2FwcGVkIDUtc2lkZWQgY3lsaW5kZXIncyAyMC5cbiAqL1xuZnVuY3Rpb24gc3RyYXAocHRzOiBudW1iZXJbXVtdLCB3OiBudW1iZXIsIHQ6IG51bWJlciwgYWJvdXQ6IG51bWJlcltdLCBoZXg/OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGMgPSBuZXcgVEhSRUUuVmVjdG9yMyhhYm91dFswXSwgYWJvdXRbMV0sIGFib3V0WzJdKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMl0pO1xuICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaSArIDFdWzBdLCBwdHNbaSArIDFdWzFdLCBwdHNbaSArIDFdWzJdKTtcbiAgICBjb25zdCBkaXIgPSBiLmNsb25lKCkuc3ViKGEpOyBjb25zdCBsZW4gPSBkaXIubGVuZ3RoKCk7XG4gICAgaWYgKGxlbiA8IDFlLTYpIGNvbnRpbnVlO1xuICAgIGRpci5ub3JtYWxpemUoKTtcbiAgICBjb25zdCBtaWQgPSBhLmNsb25lKCkuYWRkKGIpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG4gICAgLy8gT3V0d2FyZCBub3JtYWwgYXQgdGhlIG1pZHBvaW50LCByZS1vcnRob2dvbmFsaXNlZCBhZ2FpbnN0IHRoZSBydW4gc28gdGhlIGJhc2lzIHN0YXlzIHNxdWFyZVxuICAgIC8vIHdoZXJlIHRoZSBzdHJhcCBjbGltYnMgc3RlZXBseSBhbmQgdGhlIHR3byB3b3VsZCBvdGhlcndpc2UgYmUgbmVhcmx5IHBhcmFsbGVsLlxuICAgIGxldCBucm0gPSBtaWQuY2xvbmUoKS5zdWIoYyk7XG4gICAgbnJtLnN1YihkaXIuY2xvbmUoKS5tdWx0aXBseVNjYWxhcihucm0uZG90KGRpcikpKTtcbiAgICBpZiAobnJtLmxlbmd0aFNxKCkgPCAxZS0xMikgbnJtID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSkuc3ViKGRpci5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKGRpci56KSk7XG4gICAgbnJtLm5vcm1hbGl6ZSgpO1xuICAgIC8vIGRpciB4IG5ybSwgTk9UIG5ybSB4IGRpci4gVGhlIGJhc2lzIGNvbHVtbnMgYXJlIChzaWRlLCBkaXIsIG5ybSkgYWdhaW5zdCBhIGJveCdzICh3LCBsZW4sIHQpLFxuICAgIC8vIHNvIGEgcmlnaHQtaGFuZGVkIGJhc2lzIG5lZWRzIHNpZGUgeCBkaXIgPSBucm07IG5ybSB4IGRpciBnaXZlcyAtbnJtLCBhIG1pcnJvcmVkIGJhc2lzIHdpdGggYVxuICAgIC8vIG5lZ2F0aXZlIGRldGVybWluYW50LCBhbmQgZXZlcnkgc3RyYXAgcmVuZGVycyBpbnNpZGUgb3V0IC0tIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGRhcmtcbiAgICAvLyBzbGl2ZXIgcmF0aGVyIHRoYW4gYW4gb2J2aW91c2x5IGZsaXBwZWQgZmFjZSwgc28gaXQgcmVhZHMgYXMgYSBnZW9tZXRyeSBidWcsIG5vdCBhIHdpbmRpbmcgb25lLlxuICAgIGNvbnN0IHNpZGUgPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNyb3NzVmVjdG9ycyhkaXIsIG5ybSkubm9ybWFsaXplKCk7XG4gICAgLy8gT3ZlcmxhcCB0aGUgam9pbnRzIGJ5IHRoZSB0aGlja25lc3Mgc28gY29uc2VjdXRpdmUgYm94ZXMgY2xvc2UgdGhlIG1pdHJlIHJhdGhlciB0aGFuXG4gICAgLy8gbGVhdmluZyBhIHdlZGdlIG9mIGRheWxpZ2h0IGF0IGV2ZXJ5IHN0YXRpb24uXG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBsZW4gKyB0LCB0KTtcbiAgICBnLmFwcGx5TWF0cml4NChuZXcgVEhSRUUuTWF0cml4NCgpLm1ha2VCYXNpcyhzaWRlLCBkaXIsIG5ybSkpO1xuICAgIGcudHJhbnNsYXRlKG1pZC54LCBtaWQueSwgbWlkLnopO1xuICAgIHBhcnRzLnB1c2goZyk7XG4gIH1cbiAgY29uc3Qgb3V0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgcmV0dXJuIGhleCA9PT0gdW5kZWZpbmVkID8gb3V0IDogdGludEdlbyhvdXQsIGhleCk7XG59XG5cbi8qKiBBIHJvdGF0ZWQgYm94OiBbY3gsIGN5LCBjeiwgdywgaCwgZCwgcngsIHJ5LCByel0gd2l0aCB0aGUgcm90YXRpb25zIGFwcGxpZWQgaW4geCwgeSwgeiBvcmRlclxuICogIGFib3V0IHRoZSBib3gncyBvd24gY2VudHJlLiBBIGJvbm5ldCBsaXAsIGEgcmFrZWQgbWlycm9yIHN0ZW0sIGEgY2Fub3B5IHN0YXkuICovXG5mdW5jdGlvbiByYm94KGI6IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGJbM10sIGJbNF0sIGJbNV0pO1xuICBpZiAoYls2XSkgZy5yb3RhdGVYKGJbNl0pOyBpZiAoYls3XSkgZy5yb3RhdGVZKGJbN10pOyBpZiAoYls4XSkgZy5yb3RhdGVaKGJbOF0pO1xuICBnLnRyYW5zbGF0ZShiWzBdLCBiWzFdLCBiWzJdKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIGJhdGNoIG9mIGJveGVzLCBlYWNoIHRpbnRlZCwgbWVyZ2VkOiBbW2hleCwgY3gsIGN5LCBjeiwgdywgaCwgZCwgcng/LCByeT8sIHJ6P10sIC4uLl0uIFRoZVxuICogIHRyaW0gY29tcG9uZW50IG9mIGV2ZXJ5IHZlaGljbGUgaXMgb25lIG9mIHRoZXNlIC0tIGJ1bXBlcnMsIGdyaWxsZSwgbGFtcHMsIG1pcnJvcnMsIGhhbmRsZXMsXG4gKiAgc3RlcHMsIGFyY2ggZmxhcmVzIC0tIHNvIGZvcnR5IHBhcnRzIHJpZGUgb25lIHN1Ym1pc3Npb24uICovXG5mdW5jdGlvbiB0aW50ZWRCb3hlcyhsaXN0OiBudW1iZXJbXVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiB0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKSk7XG59XG5cbi8qKiBNaXJyb3IgYSBib3ggbGlzdCBhY3Jvc3MgeCA9IDAgKGxlZnQvcmlnaHQgcGFpcnMpLiBSb3RhdGlvbnMgYWJvdXQgeSBhbmQgeiBmbGlwIHNpZ24uICovXG5mdW5jdGlvbiBtaXJyb3JYKGxpc3Q6IG51bWJlcltdW10pOiBudW1iZXJbXVtdIHtcbiAgcmV0dXJuIGxpc3QuZmxhdE1hcCgoYikgPT4gW2IsIFtiWzBdLCAtYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSwgYls2XSwgYls3XSA/PyAwLCAtKGJbOF0gPz8gMCksIC0oYls5XSA/PyAwKV1dKTtcbn1cblxuLyoqIEEgc2VhbWxlc3MgQ2FudmFzIDJEIHRpbGU6IGBkcmF3KGN0eCwgc2l6ZSlgIHBhaW50cyBpdCwgYW5kIHRoZSByZXN1bHQgaXMgYSByZXBlYXRpbmcgdGV4dHVyZVxuICogIGluIHNSR0IuIFVzZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLCBzbyB0aGUgdGV4dHVyZWxlc3MgZGVjbGFyYXRpb24gc3RhbmRzIGFuZCBub1xuICogIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQuIFJldHVybnMgbnVsbCB3aGVyZSB0aGVyZSBpcyBubyBET00gKHRoZSBoZWFkbGVzcyBoYXJuZXNzXG4gKiAgaGFzIG9uZTsgYSBub2RlLXNpZGUgcHJvYmUgZG9lcyBub3QpLCBhbmQgZXZlcnkgY2FsbGVyIHRvbGVyYXRlcyBudWxsLiAqL1xuZnVuY3Rpb24gY2FudmFzVGlsZShzaXplOiBudW1iZXIsIGRyYXc6IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgczogbnVtYmVyKSA9PiB2b2lkKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGN2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7IGN2LndpZHRoID0gc2l6ZTsgY3YuaGVpZ2h0ID0gc2l6ZTtcbiAgLy8gd2lsbFJlYWRGcmVxdWVudGx5IGtlZXBzIHRoZSB0aWxlIG9uIHRoZSBDUFUgcmFzdGVyIHBhdGg6IGEgR1BVLWJhY2tlZCBjYW52YXMgY29zdHMgc2Vjb25kcyBwZXJcbiAgLy8gdGhvdXNhbmQgcGF0aCBmaWxscyB3aGVyZSB0aGUgc29mdHdhcmUgcGF0aCB0YWtlcyB0ZW5zIG9mIG1pbGxpc2Vjb25kcy5cbiAgY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dCgnMmQnLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsOyBpZiAoIWN0eCkgcmV0dXJuIG51bGw7XG4gIGRyYXcoY3R4LCBzaXplKTtcbiAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY3YpO1xuICB0ZXgud3JhcFMgPSB0ZXgud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgdGV4LmNvbG9yU3BhY2UgPSBUSFJFRS5TUkdCQ29sb3JTcGFjZTtcbiAgdGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgcmV0dXJuIHRleDtcbn1cblxuLyoqIERldGVybWluaXN0aWMgcHNldWRvLXJhbmRvbSBmb3IgY2FudmFzIGRyZXNzaW5nIC0tIGFzc2lnbmVkIGJ5IGluZGV4LCBuZXZlciBNYXRoLnJhbmRvbSwgc28gdGhlXG4gKiAgbW9kZWwgaXMgYnl0ZS1pZGVudGljYWwgb24gZXZlcnkgYnVpbGQuICovXG5mdW5jdGlvbiBsY2coc2VlZDogbnVtYmVyKTogKCkgPT4gbnVtYmVyIHtcbiAgbGV0IHMgPSBzZWVkID4+PiAwO1xuICByZXR1cm4gKCkgPT4geyBzID0gKHMgKiAxNjY0NTI1ICsgMTAxMzkwNDIyMykgPj4+IDA7IHJldHVybiBzIC8gNDI5NDk2NzI5NjsgfTtcbn1cblxuLyoqXG4gKiBNVUQgLyBST0FELUdSSU1FIHRpbGUsIFJFLUJBU0VELiBUaGFpIHJvYWQgbXVkIGlzIHRhbiBhbmQgQlJJR0hURVIgdGhhbiBtb3N0IHBhaW50LCBhbmQgYVxuICogbXVsdGlwbGllciBjYW5ub3QgYnJpZ2h0ZW46IHNvIHRoZSBwYWludCBtYXRlcmlhbCBjYXJyaWVzIHRoZSBNVUQgRU5WRUxPUEUgY29sb3VyIChtZWFzdXJlZCBvblxuICogdGhlIG11ZGR5IHNpbGwpLCB0aGlzIHRpbGUgY2FycmllcyB0aGUgY2xlYW4gcGFpbnQgYXMgYSBSQVRJTyBvZiB0aGF0IGVudmVsb3BlIG92ZXIgbW9zdCBvZiBpdHNcbiAqIGFyZWEgKGBiYXNlYCksIGFuZCB0aGUgbXVkIGlzIHBhaW50ZWQgYXMgd2hpdGUgLS0gaS5lLiB0aGUgZW52ZWxvcGUgaXRzZWxmIC0tIGluIGEgd2FzaCByaXNpbmdcbiAqIGZyb20gdGhlIGJvdHRvbSB0byBgY292ZXJhZ2VgIG9mIHRoZSB0aWxlIGhlaWdodCBwbHVzIHNwbGF0dGVyIGFib3ZlIGl0LiBCb3VuZCB3aXRoIGhlaWdodCBVVnNcbiAqIHNvIHYgPSAwIGlzIHRoZSBncm91bmQgYW5kIHRoZSB3YXNoIHNpdHMgb24gdGhlIHNpbGxzIGFuZCBhcmNoZXMuXG4gKi9cbmZ1bmN0aW9uIG11ZFRpbGUoc2l6ZTogbnVtYmVyLCBiYXNlOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzMpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgdG9IZXggPSAodjogbnVtYmVyW10pID0+ICcjJyArIHYubWFwKChjKSA9PiBNYXRoLnJvdW5kKE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGMpKSAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0b0hleChiYXNlKTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjU1LDI1NSwwLjg4KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNDUsICdyZ2JhKDI1NSwyNTUsMjU1LDAuNDUpJyk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuMzU7XG4gICAgICBjb25zdCByID0gMyArIHJuZCgpICogcyAqIDAuMDU7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4yODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDI1NSwyNTAsMjQwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjUwLDI0MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBhIGxpdHRsZSBncmFpbiBzbyB0aGUgY2xlYW4gcGFpbnQgaXMgbm90IGEgZmxhdCBmaWxsXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7IGNvbnN0IHYgPSBybmQoKSA8IDAuNSA/IDAgOiAyNTU7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4wMzUpYDsgY3R4LmZpbGxSZWN0KHgsIHksIDEuNSwgMS41KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiogRFVTVCB0aWxlIGZvciBwYWludCB0aGF0IGlzIEJSSUdIVEVSIHRoYW4gaXRzIGRpcnQgKGEgd2hpdGUgdmFuKTogYSBwbGFpbiBtdWx0aXBsaWVyLCB3aGl0ZVxuICogIGJhc2UgYW5kIGEgZ3JleS1icm93biB3YXNoIHJpc2luZyBmcm9tIHRoZSBncm91bmQgdG8gYGNvdmVyYWdlYCwgcGx1cyBzb2Z0IGJsb2JzLiAqL1xuZnVuY3Rpb24gZHVzdFRpbGUoc2l6ZTogbnVtYmVyLCBkdXN0OiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGMgPSBkdXN0Lm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiBNYXRoLm1pbigxLCB2KSkpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjkpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjQpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuNCwgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA1LCBhID0gMC4wOCArIHJuZCgpICogMC4yNTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBDT1JSVUdBVEVEIFNIRUVUIHRpbGU6IHZlcnRpY2FsIHJpZGdlcyBhcyBhIHNpbmUtc2hhZGVkIHN0cmlwZSBmaWVsZCwgdXNlZCBhcyBtYXAgQU5EIGJ1bXBNYXAgb25cbiAqICBhIHNvbmd0aGFldyByb29mIHNvIHRoZSByaWRnZXMgY2F0Y2ggbGlnaHQuIGBwaXRjaGAgcmlkZ2VzIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gY29ycnVnYXRpb25UaWxlKHNpemU6IG51bWJlciwgcGl0Y2g6IG51bWJlciwgbG93OiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgY29uc3QgdCA9IChNYXRoLmNvcyh4IC8gcyAqIE1hdGguUEkgKiAyICogcGl0Y2gpICsgMSkgLyAyOyAgIC8vIDEgYXQgY3Jlc3QsIDAgaW4gdHJvdWdoXG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiAobG93ICsgKDEgLSBsb3cpICogdCkpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSA0ICsgcm5kKCkgKiBzICogMC4wODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMDggKyBybmQoKSAqIDAuMTg7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTIwLDkwLDYwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMjAsOTAsNjAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFBMQU5LIHRpbGU6IGJvYXJkcyBydW5uaW5nIGFsb25nIHUgd2l0aCBkYXJrIGpvaW50cyBhbmQgZ3JhaW4gc3RyZWFrcywgYSBtdWx0aXBsaWVyIG9uIGFcbiAqICBtZWFzdXJlZCB0aW1iZXIgYWxiZWRvLiBgYm9hcmRzYCBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIHBsYW5rVGlsZShzaXplOiBudW1iZXIsIGJvYXJkczogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGJoID0gcyAvIGJvYXJkcztcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IGJvYXJkczsgYisrKSB7XG4gICAgICBjb25zdCB0b25lID0gMC44MiArIHJuZCgpICogMC4xODtcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIHRvbmUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgYmgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDMwLDIwLDAuNTUpJzsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDE0OyBrKyspIHtcbiAgICAgICAgY29uc3QgeSA9IGIgKiBiaCArIHJuZCgpICogYmgsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjYpLCB4ID0gcm5kKCkgKiBzO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSg2MCw0NSwzMCwkezAuMDUgKyBybmQoKSAqIDAuMTJ9KWA7IGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCAtIHMsIHkpOyBjdHgubGluZVRvKHggLSBzICsgbGVuLCB5KTsgY3R4Lm1vdmVUbyh4LCB5KTsgY3R4LmxpbmVUbyh4ICsgbGVuLCB5KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBSVVNUIHRpbGU6IGEgbXVsdGlwbGllciBvZiBibG90Y2hlZCBvcmFuZ2UtYnJvd24gb3ZlciBhIGJhc2UsIGRhcmsgY29yZXMgbGlmdGVkIHNvIG5vdGhpbmcgbGFuZHNcbiAqICBvbiB0aGUgbHVtYS01OCBob2xlIGdhdGUuICovXG5mdW5jdGlvbiBydXN0VGlsZShzaXplOiBudW1iZXIsIHJhdGlvOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBkZW5zaXR5ID0gOTApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVuc2l0eTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMyArIHJuZCgpICogcyAqIDAuMDk7XG4gICAgICBjb25zdCBhID0gMC4xNSArIHJuZCgpICogMC40NTtcbiAgICAgIGNvbnN0IGMgPSByYXRpby5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogdikpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBIZWlnaHQta2V5ZWQgVVZzOiB2IGlzIHdvcmxkIEhFSUdIVCBvdmVyIGBzY2FsZWAgbWV0cmVzLCB1IHJ1bnMgYWxvbmcgdGhlIGRvbWluYW50IGhvcml6b250YWxcbiAqICBheGlzLiBBIG11ZCB0aWxlIGJvdW5kIHRoaXMgd2F5IGRhcmtlbnMgdGhlIHNpbGxzIGFuZCBzdGF5cyBjbGVhbiBvbiB0aGUgcm9vZiAtLSBhIHBsYWluIGJveFxuICogIHByb2plY3Rpb24gd291bGQgcmVwZWF0IHRoZSB0aWxlJ3MgZGlydHkgYmFuZCBhY3Jvc3MgdGhlIHJvb2YgYXMgc3RyaXBlcy4gKi9cbi8qKlxuICogU0hPUlQgRlVSOiBhIHNlYW1sZXNzIHRpbGUgb2YgZGVuc2UsIHNob3J0LCBkaXJlY3Rpb25hbCBoYWlyIHN0cm9rZXMgb3ZlciBhIGNsb3VkeSB0b25lIGRyaWZ0LCBhcyBhXG4gKiBtdWx0aXBseSBtYXAgKGFuZCBidW1wKSBvbiBhIHdoaXRlIHZlcnRleC1jb2xvdXJlZCBjb2F0LiBUaGUgc3Ryb2tlcyBydW4gYWxvbmcgdiB3aXRoIGEgaml0dGVyZWRcbiAqIGxlYW4gYW5kIGEgbmFycm93IHRvbmUgc3ByZWFkIC0tIGEgd2lkZSBzcHJlYWQgcmVhZHMgYXMgc2NhbGVzLCBhIHBlcmZlY3QgbGF5IHJlYWRzIGFzIGNvbWJlZFxuICogcGxhc3RpYy4gYHBhdGNoZXNgIGFkZHMgYSBmZXcgc29mdCBwaW5rLWdyZXkgYmFyZSBwYXRjaGVzLCB0aGUgbWFuZ2UgbWFya3Mgb2YgYSBzdHJlZXQgZG9nLlxuICovXG5mdW5jdGlvbiBmdXJUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IHRvbmUgPSBvLnRvbmUgPz8gWzAuNzIsIDAuNjYsIDAuNThdLCBtID0gcyAqIDAuMDY7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGNsb3VkeSBkcmlmdCB1bmRlcm5lYXRoIHNvIHRoZSBjb2F0IGlzIG5vdCBvbmUgZmxhdCB2YWx1ZVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uY2xvdWRzID8/IDI2KTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA4ICsgcm5kKCkgKiAwLjE4KSwgYSA9IDAuMDQgKyBybmQoKSAqIDAuMTA7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih0b25lKX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHRvbmUpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gYmFyZSBwYXRjaGVzOiBzb2Z0LCBzcGFyc2UsIHdhcm0gZ3JleS1waW5rXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5wYXRjaGVzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDQgKyBybmQoKSAqIDAuMDUpLCBwYyA9IG8ucGF0Y2hUb25lID8/IFswLjcyLCAwLjU2LCAwLjUyXTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHBjKX0sMC41NSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNiwgYHJnYmEoJHtyZ2IocGMpfSwwLjMpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihwYyl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByICogMS4zLCByLCBybmQoKSAqIE1hdGguUEksIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBoYWlyIHN0cm9rZXM6IGRhcmsgYW5kIGxpZ2h0LCBzaG9ydCwgbGVhbmluZyB3aXRoaW4gKy0yMiBkZWdyZWVzIG9mIHZcbiAgICBjb25zdCBzdHJva2VzID0gby5zdHJva2VzID8/IDUwMDAsIGxlbiA9IHMgKiAoby5sZW5ndGggPz8gMC4wMjIpO1xuICAgIGNvbnN0IGRyYXdTdHJva2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGR4OiBudW1iZXIsIGR5OiBudW1iZXIsIHc6IG51bWJlcikgPT4ge1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IHc7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5KTsgY3R4LmxpbmVUbyh4ICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTtcbiAgICAgIGlmICh4IDwgbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIHMsIHkpOyBjdHgubGluZVRvKHggKyBzICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHggPiBzIC0gbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCAtIHMsIHkpOyBjdHgubGluZVRvKHggLSBzICsgZHgsIHkgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHkgPCBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5ICsgcyk7IGN0eC5saW5lVG8oeCArIGR4LCB5ICsgcyArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICBpZiAoeSA+IHMgLSBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5IC0gcyk7IGN0eC5saW5lVG8oeCArIGR4LCB5IC0gcyArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgfTtcbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJva2VzOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHRoID0gKHJuZCgpIC0gMC41KSAqIDAuNzgsIGwgPSBsZW4gKiAoMC42ICsgcm5kKCkgKiAwLjgpO1xuICAgICAgY29uc3QgbGlnaHQgPSBybmQoKSA8IDAuNDI7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gbGlnaHQgPyAnc2NyZWVuJyA6ICdtdWx0aXBseSc7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBsaWdodCA/IGByZ2JhKDI1NSwyNTAsMjQwLCR7MC4wNSArIHJuZCgpICogMC4xMH0pYCA6IGByZ2JhKCR7cmdiKHRvbmUpfSwkezAuMDYgKyBybmQoKSAqIDAuMTR9KWA7XG4gICAgICBkcmF3U3Ryb2tlKHgsIHksIE1hdGguc2luKHRoKSAqIGwsIE1hdGguY29zKHRoKSAqIGwsIDAuNiArIHJuZCgpICogMS4yKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoZWlnaHRVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYXggPSBNYXRoLmFicyhucm0uZ2V0WChpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGNvbnN0IHUgPSBheCA+PSBheiA/IHAuZ2V0WihpKSA6IHAuZ2V0WChpKTtcbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSBwLmdldFkoaSkgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIE9mZnNldCBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgb3V0d2FyZCBieSBgZGAgYWxvbmcgdGhlIGF2ZXJhZ2VkIGVkZ2Ugbm9ybWFscy4gVXNlZFxuICogIHRvIHN0YW5kIHRoZSBnbGFzcyBiYW5kIGEgZmV3IG1pbGxpbWV0cmVzIHByb3VkIG9mIHRoZSBib2R5J3MgcmFrZWQgd2luZHNjcmVlbiBhbmQgcmVhciBnbGFzc1xuICogIGZhY2VzLCBzbyB0aGUgcGFuZSBhbmQgdGhlIGJvZHkgbmV2ZXIgc2hhcmUgYSBwbGFuZS4gV2luZGluZzogY291bnRlci1jbG9ja3dpc2UgaW4gKHosIHkpLiAqL1xuZnVuY3Rpb24gb2Zmc2V0UG9seShwdHM6IG51bWJlcltdW10sIGQ6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBuID0gcHRzLmxlbmd0aCwgb3V0OiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IHB0c1soaSArIG4gLSAxKSAlIG5dLCBiID0gcHRzW2ldLCBjID0gcHRzWyhpICsgMSkgJSBuXTtcbiAgICBjb25zdCBlMSA9IFtiWzBdIC0gYVswXSwgYlsxXSAtIGFbMV1dLCBlMiA9IFtjWzBdIC0gYlswXSwgY1sxXSAtIGJbMV1dO1xuICAgIGNvbnN0IGwxID0gTWF0aC5oeXBvdChlMVswXSwgZTFbMV0pIHx8IDEsIGwyID0gTWF0aC5oeXBvdChlMlswXSwgZTJbMV0pIHx8IDE7XG4gICAgLy8gb3V0d2FyZCBub3JtYWwgb2YgYSBDQ1cgZWRnZSAoZHosIGR5KSBpcyAoZHksIC1keilcbiAgICBjb25zdCBuMSA9IFtlMVsxXSAvIGwxLCAtZTFbMF0gLyBsMV0sIG4yID0gW2UyWzFdIC8gbDIsIC1lMlswXSAvIGwyXTtcbiAgICBsZXQgbnggPSBuMVswXSArIG4yWzBdLCBueSA9IG4xWzFdICsgbjJbMV07XG4gICAgY29uc3QgbmwgPSBNYXRoLmh5cG90KG54LCBueSkgfHwgMTsgbnggLz0gbmw7IG55IC89IG5sO1xuICAgIGNvbnN0IGNvc0hhbGYgPSBNYXRoLm1heCgwLjM1LCBueCAqIG4xWzBdICsgbnkgKiBuMVsxXSk7XG4gICAgb3V0LnB1c2goW2JbMF0gKyBueCAqIGQgLyBjb3NIYWxmLCBiWzFdICsgbnkgKiBkIC8gY29zSGFsZl0pO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBBIHdoZWVsLWFyY2ggRkxBUkU6IGEgaGFsZi1hbm51bHVzIGluIHRoZSAoeiwgeSkgcGxhbmUsIGV4dHJ1ZGVkIGFjcm9zcyB4MC4ueDEgb24gYm90aCBzaWRlc1xuICogIGFuZCB0aW50ZWQuIFN0YW5kcyBwcm91ZCBvZiB0aGUgYm9keSBzaWRlIGFuZCBoaWRlcyB0aGUgYXJjaCdzIGN1dCBlZGdlLiAqL1xuZnVuY3Rpb24gZmxhcmUoemM6IG51bWJlciwgeWM6IG51bWJlciwgckluOiBudW1iZXIsIHJPdXQ6IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgaGV4OiBudW1iZXIsIG4gPSA5KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IGNvbnN0IHogPSB6YyArIE1hdGguY29zKGEpICogck91dCwgeSA9IHljICsgTWF0aC5zaW4oYSkgKiByT3V0OyBpZiAoaSA9PT0gMCkgc2hhcGUubW92ZVRvKHosIHkpOyBlbHNlIHNoYXBlLmxpbmVUbyh6LCB5KTsgfVxuICBmb3IgKGxldCBpID0gbjsgaSA+PSAwOyBpLS0pIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IHNoYXBlLmxpbmVUbyh6YyArIE1hdGguY29zKGEpICogckluLCB5YyArIE1hdGguc2luKGEpICogckluKTsgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgbWsgPSAoc3g6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB4MSAtIHgwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlIH0pO1xuICAgIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpOyBnLnRyYW5zbGF0ZSh4MSwgMCwgMCk7IGlmIChzeCA8IDApIGcuc2NhbGUoLTEsIDEsIDEpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIHRpbnRHZW8oZywgaGV4KTtcbiAgfTtcbiAgY29uc3QgbCA9IG1rKC0xKSwgciA9IG1rKDEpO1xuICAvLyBhIG5lZ2F0aXZlIHNjYWxlIGZsaXBzIHRoZSB3aW5kaW5nOyByZXN0b3JlIGl0IHNvIHRoZSBmbGFyZSBpcyBub3QgaW5zaWRlIG91dFxuICBjb25zdCBpZHggPSBsLmdldEluZGV4KCk7IGlmIChpZHgpIHsgY29uc3QgYSA9IGlkeC5hcnJheSBhcyBhbnk7IGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkgKz0gMykgeyBjb25zdCB0ID0gYVtpICsgMV07IGFbaSArIDFdID0gYVtpICsgMl07IGFbaSArIDJdID0gdDsgfSBpZHgubmVlZHNVcGRhdGUgPSB0cnVlOyB9XG4gIGVsc2UgeyBjb25zdCBwID0gbC5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7IGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSArPSAzKSB7IGNvbnN0IHgxXyA9IHAuZ2V0WChpICsgMSksIHkxXyA9IHAuZ2V0WShpICsgMSksIHoxXyA9IHAuZ2V0WihpICsgMSk7IHAuc2V0WFlaKGkgKyAxLCBwLmdldFgoaSArIDIpLCBwLmdldFkoaSArIDIpLCBwLmdldFooaSArIDIpKTsgcC5zZXRYWVooaSArIDIsIHgxXywgeTFfLCB6MV8pOyB9IH1cbiAgbC5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gbWVyZ2VHZW9zKFtsLCByXSk7XG59XG5cbi8qKlxuICogUklCQkVEIFJPVU5EIFRPUCB0aWxlOiB0aGUgd2hvbGUgdG9wIG9mIGEgbW91bGRlZCBnYXJkZW4gdGFibGUgZHJhd24gT05DRSBpbiBwbGFuLCBib3VuZCB3aXRoXG4gKiBgcGxhblVWYCBhdCB0aGUgdGFibGUncyBkaWFtZXRlciwgYXMgbWFwIEFORCBidW1wTWFwIC0tIHNvIHRoZSByYWRpYWwgcmliYmluZyBpcyBhIFBCUiB0ZXh0dXJlIG9uXG4gKiBhIHNvbGlkIGxhdGhlIHJhdGhlciB0aGFuIGVpZ2h0eSBib3hlcy4gUmFkaWkgYXJlIGZyYWN0aW9ucyBvZiB0aGUgdGlsZSAob2YgdGhlIGRpYW1ldGVyKTpcbiAqICBgcmluZ2AgIGlubmVyIGVkZ2Ugb2YgdGhlIGZsYXQgb3V0ZXIgcmluZyAgIGBkaXNjYCB0aGUgcmFpc2VkIGNlbnRyZSBkaXNjICAgYGhvbGVgIHRoZSB1bWJyZWxsYSBob2xlXG4gKiAgYHJpYnNgICByaWRnZSBjb3VudCAgICAgICAgICAgICAgICAgICAgICAgICAgYGdyb292ZWAgc2hhcmUgb2YgYSByaWIgcGl0Y2ggdGhhdCBpcyBncm9vdmUgKDAuLjEpXG4gKiBUb25lcyBhcmUgUkFUSU9TIG9mIHRoZSBjbGVhbiBwbGFzdGljIHRoZSBtYXRlcmlhbCBjYXJyaWVzICgxID0gdGhlIHJpZGdlIGNyb3duKTogYGxvd2AgaXMgdGhlXG4gKiBncm9vdmUgZmxvb3IsIGFuZCBldmVyeSByaWRnZSBoYXMgYSBzb2Z0IHNob3VsZGVyIGludG8gaXQgc28gdGhlIGJ1bXAgcmVhZHMgYXMgYSByb3VuZGVkIHJpYiwgbm90IGFcbiAqIGNvbWIuIEdyaW1lIHNldHRsZXMgaW4gdGhlIGdyb292ZXMgYXMgYnJvd24gc3BlY2tzIChgc3BlY2tzYCkgYW5kIGEgZmFpbnQgd2FzaDsgdGhlIGRpc2MgY2Fycmllc1xuICogZm91ciBtb3VsZGVkIGNyb3NzLW1hcmtzIGFuZCB0aGUgcmluZy9maWVsZC9kaXNjIHN0ZXBzIGNhcnJ5IGEgZGFyayBoYWlybGluZSB3aGVyZSB0aGUgbW91bGRpbmdcbiAqIHR1cm5zIGRvd24uIEV2ZXJ5dGhpbmcgb3V0c2lkZSByID0gMC41IGlzIHRoZSByaW5nIHRvbmUsIHdoaWNoIGlzIHdoYXQgdGhlIHNraXJ0IHNhbXBsZXMuXG4gKi9cbmZ1bmN0aW9uIHJpYlRvcFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBjeCA9IHMgLyAyLCBjeSA9IHMgLyAyO1xuICAgIGNvbnN0IFIgPSAoZjogbnVtYmVyKSA9PiBmICogcztcbiAgICBjb25zdCByaW5nID0gby5yaW5nID8/IDAuNDQsIGRpc2MgPSBvLmRpc2MgPz8gMC4xNDcsIGhvbGUgPSBvLmhvbGUgPz8gMC4wMjI1O1xuICAgIGNvbnN0IE4gPSBvLnJpYnMgPz8gODQsIGdyb292ZSA9IG8uZ3Jvb3ZlID8/IDAuMjIsIGxvdyA9IG8ubG93ID8/IDAuNzQ7XG4gICAgY29uc3QgdG9uZSA9IChyOiBudW1iZXIpID0+IHsgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgcikpKTsgcmV0dXJuIGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgfTtcbiAgICBjdHguZmlsbFN0eWxlID0gdG9uZShvLnJpbmdUb25lID8/IDAuOTg1KTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIHRoZSByaWJiZWQgRklFTEQsIHBlciB0ZXhlbDogdGhlIHJpYiBwcm9maWxlIGlzIGEgZnVuY3Rpb24gb2YgYW5nbGUgYWxvbmUsIHNvIGl0IGlzIHdyaXR0ZW5cbiAgICAvLyBhcyBhbiBhbm51bHVzIG9mIHJhZGlhbCB3ZWRnZXMgLS0gb25lIHBhdGggcGVyIHJpYiB3aXRoIGEgZ3JhZGllbnQgYWNyb3NzIGl0cyBwaXRjaCBpcyBlbm91Z2hcbiAgICAvLyByZXNvbHV0aW9uIGZvciB0aGUgY3Jvd25zLCBhbmQgdGhlIHBlci10ZXhlbCBwYXNzIGJlbG93IHdyaXRlcyB0aGUgc2hvdWxkZXJzLlxuICAgIGNvbnN0IGltZyA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgcywgcyksIGQgPSBpbWcuZGF0YTtcbiAgICBjb25zdCByMCA9IFIoZGlzYyksIHIxID0gUihyaW5nKTtcbiAgICBjb25zdCB3YXNoID0gby53YXNoID8/IDAuMDY7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzOyB5KyspIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICBjb25zdCBkeCA9IHggKyAwLjUgLSBjeCwgZHkgPSB5ICsgMC41IC0gY3ksIHIgPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gICAgICBpZiAociA8IHIwIC0gMS41IHx8IHIgPiByMSArIDEuNSkgY29udGludWU7XG4gICAgICBjb25zdCBhID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuICAgICAgLy8gcGhhc2UgYWNyb3NzIG9uZSByaWIgcGl0Y2gsIDAgYXQgdGhlIHJpZGdlIGNyb3duLCAxIGF0IHRoZSBuZXh0IGNyb3duXG4gICAgICBjb25zdCBwaCA9ICgoYSAvIChNYXRoLlBJICogMikpICogTiArIE4pICUgMTtcbiAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLm1pbihwaCwgMSAtIHBoKSAqIDI7ICAgICAgICAgICAgICAgLy8gMCBjcm93biAuLiAxIGdyb292ZSBjZW50cmVcbiAgICAgIGNvbnN0IGNyb3duID0gMSAtIGdyb292ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hhcmUgb2YgdGhlIHBpdGNoIHRoYXQgaXMgcmlkZ2VcbiAgICAgIGxldCBoOiBudW1iZXI7XG4gICAgICBpZiAoZGlzdCA8IGNyb3duKSB7IGNvbnN0IHQgPSBkaXN0IC8gY3Jvd247IGggPSAxIC0gMC4xMCAqIHQgKiB0OyB9ICAgIC8vIGEgZ2VudGx5IGRvbWVkIGNyb3duXG4gICAgICBlbHNlIHsgY29uc3QgdCA9IChkaXN0IC0gY3Jvd24pIC8gZ3Jvb3ZlOyBoID0gbG93ICsgKDEgLSAwLjEwIC0gbG93KSAqICgxIC0gTWF0aC5zaW4odCAqIE1hdGguUEkgLyAyKSkgKiAwLjk7IH1cbiAgICAgIC8vIHRoZSBncm9vdmUgZmxvb3IgaG9sZHMgYSB3YXNoIG9mIGR1c3QgdGhhdCB0aGUgY3Jvd25zIHNoZWRcbiAgICAgIGNvbnN0IGcgPSBkaXN0ID4gY3Jvd24gPyAxIC0gd2FzaCA6IDE7XG4gICAgICBjb25zdCBlZGdlID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHIgLSAocjAgLSAxLjUpKSAvIDMpKSAqIE1hdGgubWluKDEsIE1hdGgubWF4KDAsICgocjEgKyAxLjUpIC0gcikgLyAzKSk7XG4gICAgICBjb25zdCB2ID0gMjU1ICogKGggKiBnICogZWRnZSArIChvLnJpbmdUb25lID8/IDAuOTg1KSAqICgxIC0gZWRnZSkpO1xuICAgICAgY29uc3QgaSA9ICh5ICogcyArIHgpICogNDtcbiAgICAgIGRbaV0gPSBkW2kgKyAxXSA9IGRbaSArIDJdID0gTWF0aC5yb3VuZCh2KTsgZFtpICsgM10gPSAyNTU7XG4gICAgfVxuICAgIGN0eC5wdXRJbWFnZURhdGEoaW1nLCAwLCAwKTtcbiAgICAvLyB0aGUgcmFpc2VkIGNlbnRyZSBkaXNjOiBhIGhhaXIgYnJpZ2h0ZXIgdGhhbiB0aGUgcmluZyAoaXQgaXMgdGhlIGhpZ2hlc3Qgc3VyZmFjZSkgd2l0aCBhIGRhcmtcbiAgICAvLyBzdGVwIGF0IGl0cyBlZGdlLCBmb3VyIG1vdWxkZWQgY3Jvc3MtbWFya3MsIGFuZCB0aGUgaG9sZSBhcyBhIGRhcmsgd2VsbFxuICAgIGN0eC5maWxsU3R5bGUgPSB0b25lKG8uZGlzY1RvbmUgPz8gMS4wKTsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKGN4LCBjeSwgcjAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0b25lKGxvdyk7IGN0eC5saW5lV2lkdGggPSBNYXRoLm1heCgxLCBzICogMC4wMDI1KTtcbiAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoY3gsIGN5LCByMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKGN4LCBjeSwgcjEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5saW5lV2lkdGggPSBNYXRoLm1heCgxLCBzICogMC4wMDQpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgICBjb25zdCBhID0gayAqIE1hdGguUEkgLyAyLCBpYSA9IFIoaG9sZSkgKyBzICogMC4wMTIsIG9hID0gcjAgLSBzICogMC4wMTI7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oY3ggKyBNYXRoLmNvcyhhKSAqIGlhLCBjeSArIE1hdGguc2luKGEpICogaWEpOyBjdHgubGluZVRvKGN4ICsgTWF0aC5jb3MoYSkgKiBvYSwgY3kgKyBNYXRoLnNpbihhKSAqIG9hKTsgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgICBjdHguZmlsbFN0eWxlID0gdG9uZShvLmhvbGVUb25lID8/IDAuMzUpOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoY3gsIGN5LCBSKGhvbGUpLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgLy8gZ3JpbWU6IHJ1c3QtYnJvd24gc3BlY2tzIGFuZCBzaG9ydCBzdHJlYWtzIGx5aW5nIGluIHRoZSBncm9vdmVzLCBkZW5zZXIgdG93YXJkIHRoZSByaW0gd2hlcmVcbiAgICAvLyB0aGUgcmFpbiBsZWF2ZXMgdGhlbTsgYSBmZXcgcGFsZSBzY3VmZnMgb24gdGhlIHJpbmdcbiAgICBjb25zdCBzcGVja3MgPSBvLnNwZWNrcyA/PyA5MDA7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGVja3M7IGkrKykge1xuICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIHJyID0gcjAgKyAocjEgLSByMCkgKiBNYXRoLnBvdyhybmQoKSwgMC42KTtcbiAgICAgIC8vIHNuYXAgdG8gdGhlIG5lYXJlc3QgZ3Jvb3ZlIGNlbnRyZVxuICAgICAgY29uc3QgayA9IE1hdGgucm91bmQoKGEgLyAoTWF0aC5QSSAqIDIpKSAqIE4gLSAwLjUpICsgMC41LCBnYSA9IGsgLyBOICogTWF0aC5QSSAqIDI7XG4gICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhnYSkgKiByciwgeSA9IGN5ICsgTWF0aC5zaW4oZ2EpICogcnI7XG4gICAgICBjb25zdCBsZW4gPSAxICsgcm5kKCkgKiBzICogMC4wMTIsIHcgPSAwLjggKyBybmQoKSAqIHMgKiAwLjAwMTUsIGFsID0gMC4yNSArIHJuZCgpICogMC40NTtcbiAgICAgIGN0eC5zYXZlKCk7IGN0eC50cmFuc2xhdGUoeCwgeSk7IGN0eC5yb3RhdGUoZ2EpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHJuZCgpIDwgMC41NSA/IGByZ2JhKDEyMiw4NCw1Miwke2FsfSlgIDogYHJnYmEoMTUwLDE0MCwxMjUsJHthbH0pYDtcbiAgICAgIGN0eC5maWxsUmVjdCgtbGVuIC8gMiwgLXcgLyAyLCBsZW4sIHcpOyBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNjdWZmcyA/PyA0MCk7IGkrKykge1xuICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIHJyID0gcjEgKyAoUigwLjUpIC0gcjEpICogcm5kKCk7XG4gICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIHJyLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIHJyLCByID0gMSArIHJuZCgpICogcyAqIDAuMDA0O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDEzMCwxMjAsMTA1LCR7MC4xMCArIHJuZCgpICogMC4yNX0pYDsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogQmluZCBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHRvIGEgbWF0ZXJpYWwgYXMgbWFwIChhbmQgYnVtcCksIGxlYXZpbmcgdGhlIHRleHR1cmVsZXNzXG4gKiAgZGVjbGFyYXRpb24gaW50YWN0OiBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzIHN5bnRoZXNpc2VkLCB0aGUgbWVhc3VyZWQgY29sb3VyIHN0YXlzIHRoZVxuICogIG11bHRpcGxpY2FuZCwgYW5kIHRoZSB3aG9sZSB0aGluZyBjb3N0cyBvbmUgY2FudmFzLiAqL1xuZnVuY3Rpb24gYmluZFRpbGUobWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCwgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCwgYnVtcCA9IDApOiB2b2lkIHtcbiAgaWYgKCF0ZXgpIHJldHVybjtcbiAgbWF0Lm1hcCA9IHRleDtcbiAgaWYgKGJ1bXAgPiAwKSB7IG1hdC5idW1wTWFwID0gdGV4OyBtYXQuYnVtcFNjYWxlID0gYnVtcDsgfVxuICBtYXQubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG5cbi8qKlxuICogQSBEUkFQRUQgU0hFRVQ6IGBoZWlnaHRzW2pdW2ldYCBpcyB0aGUgdG9wIHN1cmZhY2UgYXQgeCA9IHgwLi54MSAoaSBvdmVyIG54KSBhbmQgeiA9IHowLi56MSAoaiBvdmVyXG4gKiBueik7IHRoZSBzaGVldCBpcyBgdGAgdGhpY2suIFRvcCBhbmQgdW5kZXJzaWRlIGFyZSBzbW9vdGgtc2hhZGVkIGdyaWRzLCB0aGUgZm91ciBlZGdlcyBhcmUgZmxhdFxuICogc3RyaXBzIHdvdW5kIG91dHdhcmQuIEEgdGFycCBjYW5vcHkgaXMgYSByaWRnZSBsaW5lIG1pbnVzIHRoZSBzYWcgYmV0d2VlbiBpdHMgcG9sZXMgbWludXMgdGhlXG4gKiBkcm9vcCBvZiBpdHMgZnJlZSBlZGdlcyAtLSBjbG90aCwgd2hlcmUgYSBzbGFiIHJlYWRzIGFzIGEgcGFpbnRlZCBib3guXG4gKi9cbmZ1bmN0aW9uIHNoZWV0KHM6IGFueSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgbng6IG51bWJlciA9IHMubngsIG56OiBudW1iZXIgPSBzLm56LCBIaDogbnVtYmVyW11bXSA9IHMuaGVpZ2h0cywgdDogbnVtYmVyID0gcy50ID8/IDAuMDEyO1xuICBjb25zdCBYID0gKGk6IG51bWJlcikgPT4gcy54MCArIChzLngxIC0gcy54MCkgKiBpIC8gbng7XG4gIC8vIGB6c2AgZ2l2ZXMgdGhlIHogU1RBVElPTlMgZXhwbGljaXRseSBpbnN0ZWFkIG9mIGRpdmlkaW5nIHowLi56MSBldmVubHkuIEEgcm9vZiB3aG9zZSBlYXZlIGFuZFxuICAvLyByYWtlIHdhbnQgYSBuYXJyb3cgcnVzdGVkIGJhbmQgbmVlZHMgcm93cyAwLjEwIG0gaW4gZnJvbSB0aGUgZWRnZSwgYW5kIHJlYWNoaW5nIHRoYXQgYnkgcmFpc2luZ1xuICAvLyBueiBhbG9uZSB3b3VsZCBtdWx0aXBseSB0aGUgd2hvbGUgZ3JpZCAtLSAxMDQgZmx1dGUgY29sdW1ucyBpcyB3aGF0IG1ha2VzIGEgcm93IGV4cGVuc2l2ZS5cbiAgY29uc3QgWlM6IG51bWJlcltdIHwgbnVsbCA9IEFycmF5LmlzQXJyYXkocy56cykgPyBzLnpzIDogbnVsbDtcbiAgY29uc3QgWiA9IChqOiBudW1iZXIpID0+IChaUyA/IFpTW2pdIDogcy56MCArIChzLnoxIC0gcy56MCkgKiBqIC8gbnopO1xuICBjb25zdCBncmlkID0gKHlPZmY6IG51bWJlciwgZmxpcDogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgdXY6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8PSBueDsgaSsrKSB7IHBvcy5wdXNoKFgoaSksIEhoW2pdW2ldICsgeU9mZiwgWihqKSk7IHV2LnB1c2goaSAvIG54LCBqIC8gbnopOyB9XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8IG54OyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSBqICogKG54ICsgMSkgKyBpLCBiID0gYSArIDEsIGMgPSBhICsgbnggKyAxLCBkID0gYyArIDE7XG4gICAgICBpZiAoZmxpcCkgaWR4LnB1c2goYSwgYiwgYywgYiwgZCwgYyk7IGVsc2UgaWR4LnB1c2goYSwgYywgYiwgYiwgYywgZCk7XG4gICAgfVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3MsIDMpKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGcuc2V0SW5kZXgoaWR4KTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gZztcbiAgfTtcbiAgLy8gYGhleFRvcGAgLyBgaGV4VW5kZXJgOiBhIGNvbG91ciBhdHRyaWJ1dGUgd3JpdHRlbiBwZXIgZ3JpZCwgc28gYSB0YXJwIGNhbiBiZSBibHVlIG9uIHRvcCBhbmRcbiAgLy8gb3JhbmdlIHVuZGVybmVhdGggb24gT05FIG1hdGVyaWFsIGFuZCBPTkUgZHJhdyBjYWxsLiBBIGNvbXBvbmVudCB0aW50IGNhbm5vdCBkbyBpdCAtLSB0aGUgdHdvXG4gIC8vIHN1cmZhY2VzIGFyZSBtaWxsaW1ldHJlcyBhcGFydCBpbiB5LCBzbyBubyBheGlzIGJsZW5kIHNlcGFyYXRlcyB0aGVtIC0tIGFuZCBhIHNlY29uZCBzaGVldFxuICAvLyB3b3VsZCBkb3VibGUgdGhlIHJvb2YncyB0cmlhbmdsZXMgZm9yIGEgY29sb3VyLiBPbWl0dGVkLCB0aGUgZ2VvbWV0cnkgaXMgdW50aW50ZWQgYXMgYmVmb3JlLlxuICBjb25zdCBwYWludCA9IChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgaGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQsIGMgPSBuZXcgVEhSRUUuQ29sb3IoaGV4KSwgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iOyB9XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTsgcmV0dXJuIGc7XG4gIH07XG4gIC8vIGBoZXhHcmlkW2pdW2ldYCBpcyBhIGNvbG91ciBQRVIgVE9QLUdSSUQgVkVSVEVYLCBjb21wdXRlZCBhdCBlbWl0IHRpbWUgLS0gd2hpY2ggaXMgdGhlIG9ubHkgd2F5XG4gIC8vIHRvIHB1dCBhIG1hcmsgYXQgYSBrbm93biBwbGFjZSBvbiB0aGUgc2hlZXQuIEEgY2FudmFzIHRpbGUgcmVwZWF0cyBieSB3b3JsZCBwb3NpdGlvbiBhbmQga25vd3NcbiAgLy8gbm90aGluZyBhYm91dCB3aGVyZSB0aGUgZWF2ZSBpczsgYGhleFRvcGAgaXMgb25lIGZsYXQgdG9uZSBmb3IgdGhlIHdob2xlIHN1cmZhY2UuIFRoaXMgaXMgd2hhdFxuICAvLyBjYXJyaWVzIHRoZSBydXN0ZWQgYmFuZCBhbG9uZyB0aGUgZWF2ZSBhbmQgdGhlIHJha2VzLCBhbmQgdGhlIHN0YWluaW5nIGJlc2lkZSBlYWNoIHNoZWV0IGxhcC5cbiAgY29uc3QgcGFpbnRHcmlkID0gKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBIRzogbnVtYmVyW11bXSkgPT4ge1xuICAgIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCwgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyksIGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICBsZXQgayA9IDA7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gbno7IGorKykgZm9yIChsZXQgaSA9IDA7IGkgPD0gbng7IGkrKykgeyBjLnNldEhleChIR1tqXVtpXSk7IGNvbFtrKytdID0gYy5yOyBjb2xbaysrXSA9IGMuZzsgY29sW2srK10gPSBjLmI7IH1cbiAgICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpOyByZXR1cm4gZztcbiAgfTtcbiAgY29uc3QgdG9wMCA9IGdyaWQoMCwgZmFsc2UpLCB1bmQwID0gZ3JpZCgtdCwgdHJ1ZSk7XG4gIGNvbnN0IHBhcnRzID0gcy5oZXhHcmlkICE9PSB1bmRlZmluZWRcbiAgICA/IFtwYWludEdyaWQodG9wMCwgcy5oZXhHcmlkKSwgcGFpbnQodW5kMCwgcy5oZXhVbmRlciA/PyAweGZmZmZmZildXG4gICAgOiBzLmhleFVuZGVyICE9PSB1bmRlZmluZWRcbiAgICAgID8gW3BhaW50KHRvcDAsIHMuaGV4VG9wID8/IDB4ZmZmZmZmKSwgcGFpbnQodW5kMCwgcy5oZXhVbmRlcildXG4gICAgICA6IFt0b3AwLCB1bmQwXTtcbiAgLy8gZWRnZSBzdHJpcHM6IGVhY2ggcXVhZCBmcm9tIHRoZSB0b3AgZWRnZSBkb3duIHRvIHRoZSB1bmRlcnNpZGUsIHdvdW5kIHNvIGl0cyBub3JtYWwgZmFjZXMgYG91dGBcbiAgY29uc3Qgc3RyaXAgPSAocHRzOiBudW1iZXJbXVtdW10sIG91dDogbnVtYmVyW10pID0+IHtcbiAgICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIHV2OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgW3AwLCBwMV0gb2YgcHRzKSB7XG4gICAgICBjb25zdCBxMCA9IHAwLCBxMSA9IHAxLCBxMiA9IFtwMVswXSwgcDFbMV0gLSB0LCBwMVsyXV0sIHEzID0gW3AwWzBdLCBwMFsxXSAtIHQsIHAwWzJdXTtcbiAgICAgIGNvbnN0IGUxID0gW3ExWzBdIC0gcTBbMF0sIHExWzFdIC0gcTBbMV0sIHExWzJdIC0gcTBbMl1dLCBlMiA9IFtxMlswXSAtIHEwWzBdLCBxMlsxXSAtIHEwWzFdLCBxMlsyXSAtIHEwWzJdXTtcbiAgICAgIGNvbnN0IG4gPSBbZTFbMV0gKiBlMlsyXSAtIGUxWzJdICogZTJbMV0sIGUxWzJdICogZTJbMF0gLSBlMVswXSAqIGUyWzJdLCBlMVswXSAqIGUyWzFdIC0gZTFbMV0gKiBlMlswXV07XG4gICAgICBjb25zdCB0cmkgPSBuWzBdICogb3V0WzBdICsgblsxXSAqIG91dFsxXSArIG5bMl0gKiBvdXRbMl0gPj0gMCA/IFtxMCwgcTEsIHEyLCBxMCwgcTIsIHEzXSA6IFtxMCwgcTIsIHExLCBxMCwgcTMsIHEyXTtcbiAgICAgIGZvciAoY29uc3QgcSBvZiB0cmkpIHsgcG9zLnB1c2gocVswXSwgcVsxXSwgcVsyXSk7IHV2LnB1c2goMCwgMCk7IH1cbiAgICB9XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvcywgMykpO1xuICAgIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gICAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gZztcbiAgfTtcbiAgY29uc3QgdG9wID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiBbWChpKSwgSGhbal1baV0sIFooaildO1xuICBjb25zdCBlMDogbnVtYmVyW11bXVtdID0gW10sIGUxOiBudW1iZXJbXVtdW10gPSBbXSwgZTI6IG51bWJlcltdW11bXSA9IFtdLCBlMzogbnVtYmVyW11bXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbng7IGkrKykgeyBlMC5wdXNoKFt0b3AoaSwgMCksIHRvcChpICsgMSwgMCldKTsgZTEucHVzaChbdG9wKGksIG56KSwgdG9wKGkgKyAxLCBueildKTsgfVxuICBmb3IgKGxldCBqID0gMDsgaiA8IG56OyBqKyspIHsgZTIucHVzaChbdG9wKDAsIGopLCB0b3AoMCwgaiArIDEpXSk7IGUzLnB1c2goW3RvcChueCwgaiksIHRvcChueCwgaiArIDEpXSk7IH1cbiAgY29uc3QgZWRnZXMgPSBbc3RyaXAoZTAsIFswLCAwLCAtMV0pLCBzdHJpcChlMSwgWzAsIDAsIDFdKSwgc3RyaXAoZTIsIFstMSwgMCwgMF0pLCBzdHJpcChlMywgWzEsIDAsIDBdKV07XG4gIC8vIFRoZSByaW0gaXMgdGhlIHNlYW0gYmV0d2VlbiB0aGUgdHdvIGZhY2VzLCBzbyBpdCB0YWtlcyB0aGUgVU5ERVIgY29sb3VyOiBvbiBhIGRyYXBlZCB0YXJwIHRoZVxuICAvLyBlZGdlIGlzIHdoYXQgYSB2aWV3ZXIgc3RhbmRpbmcgYmVzaWRlIGl0IGFjdHVhbGx5IHNlZXMsIGFuZCBpdCBpcyB0aGUgbGluaW5nLCBub3QgdGhlIHRvcC4gT24gYVxuICAvLyByb29mIGRlY2sgaXQgaXMgdGhlIGZsdXRlZCBlYXZlLCB3aGljaCBpcyB3aGVyZSB0aGUgcnVzdCBpcywgc28gYGhleFJpbWAgb3ZlcnJpZGVzIGl0LlxuICBjb25zdCByaW1IZXggPSBzLmhleFJpbSA/PyBzLmhleFVuZGVyO1xuICBwYXJ0cy5wdXNoKC4uLihyaW1IZXggIT09IHVuZGVmaW5lZCA/IGVkZ2VzLm1hcCgoZykgPT4gcGFpbnQoZywgcmltSGV4KSkgOiBlZGdlcykpO1xuICByZXR1cm4gbWVyZ2VHZW9zKHBhcnRzKTtcbn1cblxuLyoqXG4gKiBXRUFUSEVSRUQgUEFJTlQgb24gYSBzdGVlbCBjb250YWluZXI6IG9uZSBzZWFtbGVzcyBtdWx0aXBsaWVyIHRpbGUgY2FycnlpbmcgY2xlYW4gcGFpbnQsIHJ1c3RcbiAqIGFuZCBjaGFsa2VkIGJsb29tIHRvZ2V0aGVyLlxuICpcbiAqIFRoZSB0aHJlZSB0b25lcyBjYW5ub3QgcmlkZSBhIHBsYWluIG11bHRpcGx5IG92ZXIgdGhlIGNsZWFuIHBhaW50LCBiZWNhdXNlIGEgY2hhbGsgYmxvb20gaXNcbiAqIEJSSUdIVEVSIHRoYW4gdGhlIHBhaW50IGl0IHNpdHMgb24gaW4gdHdvIGNoYW5uZWxzIC0tIGEgbXVsdGlwbHkgY2FuIG9ubHkgZGFya2VuLiBTbyB0aGUgdmVydGV4XG4gKiBjb2xvdXIgaXMgUkUtQkFTRUQgdG8gYW4gZW52ZWxvcGUgYWJvdmUgZXZlcnkgdG9uZSB0aGUgdGlsZSBoYXMgdG8gcmVhY2ggKGBvLmJhc2VgIGlzIHRoZSBjbGVhblxuICogcGFpbnQncyBvd24gbXVsdGlwbGllciBhZ2FpbnN0IHRoYXQgZW52ZWxvcGUsIGFuZCBpdCBpcyB3aGF0IG1vc3Qgb2YgdGhlIHRpbGUgaXMgZmlsbGVkIHdpdGgpLFxuICogZXhhY3RseSBhcyB0aGUgbGljaGVuLW9uLXN0b25lIHJvdXRlIGRvZXMuIEV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpbGwgaXMgZHJhd24gc291cmNlLW92ZXIgaW5cbiAqIGFic29sdXRlIG11bHRpcGxpZXIgc3BhY2UsIHNvIGEgbWFyayBtYXkgbGFuZCBlaXRoZXIgc2lkZSBvZiBjbGVhbi5cbiAqXG4gKiBPcmRlciBtYXR0ZXJzIGFuZCBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHdlYXRoZXJpbmcgYW5kIGNhbW91ZmxhZ2U6IGEgc29mdCBjbG91ZHkgZHJpZnRcbiAqIGZpcnN0LCB0aGVuIHRoZSBydXN0IGFzIGNsdXN0ZXJlZCBncmFudWxhciBwYXRjaGVzIHJhdGhlciB0aGFuIGhhcmQgYmxvdGNoZXMsIHRoZW4gdGhlIHJ1bnMgaXRcbiAqIGxlYXZlcyBCRUxPVyBpdHNlbGYsIHRoZW4gdGhlIGNoYWxrIGJsb29tcywgdGhlbiBhIGZpbmUgZ3JhaW4gb3ZlciB0aGUgbG90LlxuICovXG5mdW5jdGlvbiBwYWludFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyBbMSwgMSwgMV0sIHJ1c3QgPSBvLnJ1c3QgPz8gYmFzZSwgY2hhbGsgPSBvLmNoYWxrID8/IGJhc2U7XG4gICAgY29uc3QgcnVuID0gby5ydW4gPz8gcnVzdDtcbiAgICAvLyB3cmFwIGV2ZXJ5IG1hcmsgdGhyZWUgd2F5cyBzbyBub3RoaW5nIGlzIGN1dCBieSB0aGUgdGlsZSBlZGdlXG4gICAgY29uc3Qgd3JhcCA9IChkcmF3OiAoZHg6IG51bWJlciwgZHk6IG51bWJlcikgPT4gdm9pZCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIGRyYXcoZHgsIGR5KTtcbiAgICB9O1xuICAgIC8vIGBoYXJkYCBrZWVwcyB0aGUgbWFyayBhdCBmdWxsIGFscGhhIHRvIDAuNzIgb2YgaXRzIHJhZGl1cyBhbmQgZHJvcHMgaXQgb3ZlciB0aGUgbGFzdCBxdWFydGVyOlxuICAgIC8vIGEgcnVzdCBibG9vbSBvdmVyIGl0cyBDT01QTEVNRU5UICh0ZWFsKSBibGVuZHMgdG8gYSBuZXV0cmFsIGdyZXkgYWxvbmcgYSBzb2Z0IGVkZ2UsIGFuZCB0aGVcbiAgICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkcyB0aGF0IHJpbmcgYXMgYmFja2Ryb3AgLS0gYSByZWFsIGJsb29tIGhhcyBhIGdyYW51bGFyLCBub3QgYSBmZWF0aGVyZWQsIGVkZ2UuXG4gICAgY29uc3QgYmxvYiA9IChjOiBudW1iZXJbXSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHI6IG51bWJlciwgYTogbnVtYmVyLCByeSA9IDEsIGhhcmQgPSBmYWxzZSkgPT4ge1xuICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKGMpfSwke2F9KWApOyBnLmFkZENvbG9yU3RvcChoYXJkID8gMC43MiA6IDAuNTUsIGByZ2JhKCR7cmdiKGMpfSwke2hhcmQgPyBhIDogYSAqIDAuNDV9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IoYyl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByLCByICogcnksIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgfTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG5cbiAgICAvLyAxLiBjbG91ZHkgZHJpZnQ6IGJyb2FkLCB2ZXJ5IHNvZnQsIGJhcmVseSBvZmYgY2xlYW4gLS0gd2hhdCBzdG9wcyB0aGUgZmxhdCBhcmVhcyByZWFkaW5nIGFzIHBhaW50IGNoaXBzIG9uIHBsYXN0aWNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmRyaWZ0ID8/IDE0KTsgaSsrKSB7XG4gICAgICBjb25zdCBjID0gcm5kKCkgPCAwLjUgPyBydXN0IDogY2hhbGs7XG4gICAgICBibG9iKGMsIHJuZCgpICogcywgcm5kKCkgKiBzLCBzICogKDAuMTggKyBybmQoKSAqIDAuMzApICogKG8uZHJpZnRTY2FsZSA/PyAxKSwgMC4wNSArIHJuZCgpICogMC4wNywgMC42ICsgcm5kKCkgKiAwLjgpO1xuICAgIH1cblxuICAgIC8vIDIuIHJ1c3Q6IGNsdXN0ZXJzLCBlYWNoIGEgc29mdCBwYXRjaCB3aXRoIGdyYW51bGFyIHNwZWNrcyBvdmVyIGl0LiBCYXJlIHN0ZWVsIGNvcnJvZGVzIGluXG4gICAgLy8gICAgZmllbGRzLCBub3QgaW4gZG90czsgYSBzcGVjayBmaWVsZCB3aXRoIG5vIHBhdGNoIHVuZGVyIGl0IHJlYWRzIGFzIGNvbmZldHRpLlxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ucnVzdENsdXN0ZXJzID8/IDE2KTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIGNyID0gcyAqICgwLjA0ICsgcm5kKCkgKiAwLjExKSAqIChvLmNsdXN0ZXJTY2FsZSA/PyAxKTtcbiAgICAgIC8vIFRoZSBjbHVzdGVyIHBhdGNoJ3MgT1BBQ0lUWS4gVGhlIHRpbGUgaXMgY29tcG9zaXRlZCBzb3VyY2Utb3ZlciBvbiB0aGUgYmFzZSBmaWxsLCBzbyBhXG4gICAgICAvLyBjbHVzdGVyIGF0IGFscGhhIDAuMzAtMC42NSBibGVuZHMgdG8gYW4gaW50ZXJtZWRpYXRlIHRvbmUgYW5kIG9ubHkgdGhlIHNwZWNrcyBvdmVyIGl0IGV2ZXJcbiAgICAgIC8vIHJlYWNoIHRoZSBhdXRob3JlZCBydXN0IC0tIHdoaWNoIGlzIHJpZ2h0IGZvciBhIHJ1c3QgQkxPT00gb24gcGFpbnRlZCBzdGVlbCBhbmQgd3JvbmcgZm9yXG4gICAgICAvLyB0aGUgYm9sZCBjaGlwcGVkIHBhdGNoZXMgYSBwZWVsaW5nIGxpZCBjYXJyaWVzLCB3aGVyZSBiYXJlIG1ldGFsIGlzIHNpbXBseSBleHBvc2VkLlxuICAgICAgLy8gRGVmYXVsdHMgYXJlIHRoZSBwcmV2aW91cyBjb25zdGFudHMgZXhhY3RseSwgc28gbm8gZXhpc3RpbmcgY2FsbGVyIGNoYW5nZXMuXG4gICAgICBibG9iKHJ1c3QsIGN4LCBjeSwgY3IsIChvLnJ1c3RBbHBoYSA/PyAwLjMwKSArIHJuZCgpICogKG8ucnVzdEFscGhhVmFyID8/IDAuMzUpLCAwLjcgKyBybmQoKSAqIDAuNiwgby5oYXJkRWRnZXMgPT09IHRydWUpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zcGVja3NQZXJDbHVzdGVyID8/IDQwKTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyO1xuICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCwgciA9IDAuOCArIHJuZCgpICogMi40O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Ioby5zcGVja1J1biA/IHJ1biA6IHJ1c3QpfSwkeyhvLnNwZWNrQWxwaGEgPz8gMC4yNSkgKyBybmQoKSAqIChvLnNwZWNrQWxwaGFWYXIgPz8gMC41KX0pYDsgICAvLyBzcGVja1J1bjogZGFya2VyIHNwZWNrcyB0aGF0IHRleHR1cmUgYW4gb3BhcXVlIGJsb29tXG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgICAvLyB0aGUgcnVuIGl0IGxlYXZlcyBiZWxvdyBpdHNlbGY6IHJ1c3QgYmxlZWRzIERPV04gYSB2ZXJ0aWNhbCBwYW5lbCBhbmQgbm93aGVyZSBlbHNlXG4gICAgICBpZiAocm5kKCkgPCAoby5ydW5DaGFuY2UgPz8gMC41NSkpIHtcbiAgICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMCwgbGVuID0gcyAqICgwLjEwICsgcm5kKCkgKiAwLjM1KTtcbiAgICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBjeSwgMCwgY3kgKyBsZW4pO1xuICAgICAgICBjb25zdCByYSA9IChvLnJ1bkFscGhhID8/IDAuMTYpICsgcm5kKCkgKiAwLjE4O1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke3JhfSlgKTsgaWYgKG8uaGFyZEVkZ2VzKSBnLmFkZENvbG9yU3RvcCgwLjkyLCBgcmdiYSgke3JnYihydW4pfSwke3JhfSlgKTsgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnVuKX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICAgIHdyYXAoKGR4KSA9PiBjdHguZmlsbFJlY3QoY3ggKyBkeCArIChybmQoKSAtIDAuNSkgKiBjciwgY3ksIHcsIGxlbikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIGNoYWxrIGJsb29tOiBsYXJnZSwgdmVyeSBzb2Z0LCBsb3ctY29udHJhc3QuIEl0IGlzIHRoZSB0b25lIHRoZSB0aWxlIHdhcyByZS1iYXNlZCBmb3IuXG4gICAgY29uc3QgY3NjYWxlID0gby5jaGFsa1NjYWxlID8/IDEsIGNhbHBoYSA9IG8uY2hhbGtBbHBoYSA/PyAwLjM1O1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uY2hhbGtQYXRjaGVzID8/IDkpOyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgY3IgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTApICogY3NjYWxlO1xuICAgICAgYmxvYihjaGFsaywgY3gsIGN5LCBjciwgY2FscGhhICsgcm5kKCkgKiAwLjMwLCAwLjUgKyBybmQoKSAqIDAuNyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI2OyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3IgKiAxLjI1O1xuICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCAqIDAuNywgciA9IDEgKyBybmQoKSAqIDM7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihjaGFsayl9LCR7MC4yICsgcm5kKCkgKiAwLjR9KWA7XG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gNC4gdGhlIHR3byBtYXJrcyB0aGF0IG9ubHkgbWFrZSBzZW5zZSBvbmNlIHRoZSB0aWxlIGlzIEhFSUdIVC1rZXllZDogbG9uZyBydW5zIGJsZWVkaW5nIGRvd25cbiAgICAvLyAgICBmcm9tIHRoZSB0b3AgZWRnZSAodGhlIHRvcCByYWlsIGlzIHdoZXJlIHdhdGVyIHNpdHMgYW5kIHRoZSBwYWludCBnb2VzIGZpcnN0KSBhbmQgYSBkaXJ0XG4gICAgLy8gICAgYmFuZCBhbG9uZyB0aGUgYm90dG9tLiBCb3RoIGFyZSBuby1vcHMgb24gYSB3b3JsZC1zcGFjZSB0aWxlLCB3aGVyZSB0aGVyZSBpcyBubyB1cC5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnRvcFN0cmVha3MgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAoby5zdHJlYWtXaWR0aCA/PyAwLjAxNCksIGxlbiA9IHMgKiAoMC4yNSArIHJuZCgpICogMC41NSk7XG4gICAgICBjb25zdCBhID0gKG8uc3RyZWFrQWxwaGEgPz8gMC4xMCkgKyBybmQoKSAqIDAuMjI7XG4gICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGxlbik7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke2F9KWApOyBnLmFkZENvbG9yU3RvcChvLmhhcmRFZGdlcyA/IDAuOTIgOiAwLjI1LCBgcmdiYSgke3JnYihydXN0KX0sJHtvLmhhcmRFZGdlcyA/IGEgOiBhICogMC44fSlgKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1c3QpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIDAsIHcsIGxlbik7XG4gICAgfVxuICAgIC8vIDRiLiBBVExBUyBtYXJrcyBmb3IgYSB0aWxlIG1hcHBlZCBPTkNFIHVwIGEgcHJvcCAoY3lsVVYgd2l0aCB0aGUgdGlsZSBoZWlnaHQgPSB0aGUgcHJvcCBoZWlnaHQpOlxuICAgIC8vICAgICBgaGJhbmRzYCBwYWludHMgYSB0b25lIGFjcm9zcyBhIGhvcml6b250YWwgYmFuZCBvZiB2IChhIHJ1c3RlZCBjaGltZSwgYSB3b3JuIGhvb3AgY3Jvd24pLFxuICAgIC8vICAgICBgYmFuZFN0cmVha3NgIGhhbmdzIHJ1bnMgZnJvbSBhIGdpdmVuIHYgKHdhdGVyIHNpdHMgb24gYSByb2xsaW5nIGhvb3AgYW5kIGJsZWVkcyBkb3duIGZyb20gaXQsXG4gICAgLy8gICAgIGV4YWN0bHkgYXMgaXQgZG9lcyBmcm9tIHRoZSB0b3AgZWRnZSksIGFuZCBgc3RlbmNpbGAgYSBwYWludGVkIG1hcmsgYXQgKHUsIHYpLiB2IGlzIHVwLlxuICAgIGZvciAoY29uc3QgaGIgb2YgKG8uaGJhbmRzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgeTAgPSBzICogKDEgLSBoYi52MSksIHkxID0gcyAqICgxIC0gaGIudjApLCB0b25lID0gaGIudG9uZSA/PyBydXN0O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHRvbmUpfSwke2hiLmFscGhhID8/IDAuOH0pYDsgY3R4LmZpbGxSZWN0KDAsIHkwLCBzLCB5MSAtIHkwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGhiLnNwZWNrcyA/PyAwKTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSB5MCArIHJuZCgpICogKHkxIC0geTApLCByID0gMC44ICsgcm5kKCkgKiAyLjI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihybmQoKSA8IDAuNSA/IHJ1biA6IGJhc2UpfSwkezAuMiArIHJuZCgpICogMC41fSlgO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgYnMgb2YgKG8uYmFuZFN0cmVha3MgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCB5MCA9IHMgKiAoMSAtIGJzLnYpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYnMuY291bnQgPz8gMTIpOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAoYnMud2lkdGggPz8gMC4wMTIpLCBsZW4gPSBzICogKChicy5sZW4gPz8gMC4xMikgKyBybmQoKSAqIChicy5sZW5WYXIgPz8gMC4yNSkpO1xuICAgICAgICBjb25zdCBhID0gKGJzLmFscGhhID8/IDAuMTQpICsgcm5kKCkgKiAwLjIyO1xuICAgICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkwLCAwLCB5MCArIGxlbik7XG4gICAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHJ1bil9LCR7YX0pYCk7IGcuYWRkQ29sb3JTdG9wKG8uaGFyZEVkZ2VzID8gMC45MiA6IDAuMywgYHJnYmEoJHtyZ2IocnVzdCl9LCR7by5oYXJkRWRnZXMgPyBhIDogYSAqIDAuOH0pYCk7XG4gICAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1c3QpfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5MCAtIDIsIHcsIGxlbik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvLnN0ZW5jaWwpIHtcbiAgICAgIGNvbnN0IHN0ID0gby5zdGVuY2lsLCBweCA9IHMgKiAoc3Quc2l6ZSA/PyAwLjA2KTtcbiAgICAgIGN0eC5mb250ID0gYGJvbGQgJHtweH1weCBzYW5zLXNlcmlmYDsgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInOyBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Ioc3QudG9uZSA/PyBjaGFsayl9LCR7c3QuYWxwaGEgPz8gMC44NX0pYDtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxUZXh0KHN0LnRleHQsIHMgKiAoc3QudSA/PyAwLjUpICsgZHgsIHMgKiAoMSAtIChzdC52ID8/IDAuNSkpKTtcbiAgICB9XG4gICAgaWYgKG8uZ3JvdW5kQmFuZCkge1xuICAgICAgY29uc3QgYiA9IG8uZ3JvdW5kQmFuZCwgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSAoby5ncm91bmRIZWlnaHQgPz8gMC4yMikpKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHJ1bil9LCR7Yn0pYCk7IGcuYWRkQ29sb3JTdG9wKDAuNDUsIGByZ2JhKCR7cmdiKHJ1bil9LCR7YiAqIDAuNH0pYCk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydW4pfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB9XG5cbiAgICAvLyA1LiBmaW5lIGdyYWluOiB0aGUgdG9vdGggb2YgYSBicnVzaC1yb2xsZWQgaW5kdXN0cmlhbCBwYWludC4gTXVsdGlwbHksIHNvIGl0IG9ubHkgZGFya2Vucy5cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmdyYWluID8/IDE4MDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSAwLjUgKyBybmQoKSAqIDEuMywgYSA9IDAuMDMgKyBybmQoKSAqIDAuMDc7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMTUwLDE0MCwxMzAsJHthfSlgO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKipcbiAqIEEgU1dFUFQgcG9seWxpbmUgdHViZTogT05FIHJpbmcgb2YgYHNlZ2AgdmVydGljZXMgcGVyIHBvaW50LCBtaXRyZWQgYXQgZXZlcnkgYmVuZCwgaW5kZXhlZCBhbmRcbiAqIHNtb290aC1zaGFkZWQuIFRoaXMgaXMgbm90IHdoYXQgYHR1YmVgIGRvZXMsIGFuZCB0aGUgZGlmZmVyZW5jZSBpcyBhIHZpc2libGUgZGVmZWN0IHJhdGhlciB0aGFuIGFcbiAqIHJlZmluZW1lbnQuIGB0dWJlYCBjaGFpbnMgYSBzZXBhcmF0ZSBjeWxpbmRlciBwZXIgc2VnbWVudCBhbmQgRVhURU5EUyBlYWNoIG9uZSBieSBgciAqIDEuMmAgc28gdGhlXG4gKiBqb2ludHMgY2xvc2UgLS0gd2hpY2ggaXMgZmluZSB3aGlsZSB0aGUgc2VnbWVudHMgYXJlIGxvbmcsIGFuZCBjYXRhc3Ryb3BoaWMgb24gYSB0aWdodCBjdXJ2ZTogYVxuICogMC4xMiBtIGNvcm5lciByYWRpdXMgc2FtcGxlZCBpbiBmaXZlIHN0ZXBzIGhhcyBhIDAuMDM4IG0gY2hvcmQgYWdhaW5zdCBhIDAuMDI1IG0gb3ZlcmxhcCwgc29cbiAqIGNvbnNlY3V0aXZlIGN5bGluZGVycyBvdmVyc2hvb3QgZWFjaCBvdGhlciBieSB0d28gdGhpcmRzIG9mIHRoZWlyIGxlbmd0aCBhbmQgdGhlIGJlbmQgcmVuZGVycyBhcyBhXG4gKiBjcnVtcGxlZCBhY2NvcmRpb24gb2YgcGxlYXRzLiBUaGUgY3Jvd2QgYmFycmllcidzIHJvdW5kZWQgdG9wIGNvcm5lcnMgc2hpcHBlZCB0aGF0IHdheS5cbiAqXG4gKiBUaGUgZnJhbWUgaXMgcm90YXRpb24tbWluaW1pc2luZyAocGFyYWxsZWwgdHJhbnNwb3J0KSwgbm90IEZyZW5ldDogYSBGcmVuZXQgZnJhbWUgZmxpcHMgaXRzIG5vcm1hbFxuICogdGhyb3VnaCBhbiBpbmZsZWN0aW9uIGFuZCB0d2lzdHMgdGhlIHR1YmUsIHdoaWNoIGEgVVYgb3IgYSB2ZXJ0ZXggY29sb3VyIHRoZW4gc2hvd3MgYXMgYSBzdHJpcGVcbiAqIHNwaXJhbGxpbmcgYWxvbmcgYSByYWlsIHRoYXQgaXMgbWVhbnQgdG8gYmUgc3RyYWlnaHQuIEludGVyaW9yIHBvaW50cyByaW5nIG9uIHRoZSBCSVNFQ1RPUiBvZiB0aGVcbiAqIHR3byBhZGphY2VudCB0YW5nZW50cywgd2hpY2ggaXMgdGhlIG1pdHJlIGEgcmVhbCBiZW50IHR1YmUgaGFzLlxuICovXG5mdW5jdGlvbiBzd2VlcFR1YmUocHRzOiBudW1iZXJbXVtdLCByOiBudW1iZXIsIHNlZyA9IDEwLCBoZXg/OiBudW1iZXIsIGNhcCA9IHRydWUpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IFAgPSBwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMyhwWzBdLCBwWzFdLCBwWzJdKSk7XG4gIC8vIGRyb3AgcmVwZWF0ZWQgcG9pbnRzOiBhIHplcm8tbGVuZ3RoIHNlZ21lbnQgaGFzIG5vIHRhbmdlbnQsIGFuZCBvbmUgZHVwbGljYXRlIGlzIGVub3VnaCB0b1xuICAvLyBwdXQgYSBOYU4gdGhyb3VnaCB0aGUgd2hvbGUgdHJhbnNwb3J0IGNoYWluXG4gIGZvciAobGV0IGkgPSBQLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIGlmIChQW2ldLmRpc3RhbmNlVG8oUFtpIC0gMV0pIDwgMWUtNykgUC5zcGxpY2UoaSwgMSk7XG4gIGlmIChQLmxlbmd0aCA8IDIpIHJldHVybiBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgY29uc3QgbiA9IFAubGVuZ3RoO1xuICBjb25zdCBzZWdEaXI6IFRIUkVFLlZlY3RvcjNbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG4gLSAxOyBpKyspIHNlZ0Rpci5wdXNoKFBbaSArIDFdLmNsb25lKCkuc3ViKFBbaV0pLm5vcm1hbGl6ZSgpKTtcbiAgLy8gcGVyLXBvaW50IHRhbmdlbnQ6IHRoZSBzZWdtZW50IGRpcmVjdGlvbiBhdCB0aGUgZW5kcywgdGhlIGJpc2VjdG9yIGJldHdlZW4gdHdvIHNlZ21lbnRzIGluc2lkZVxuICBjb25zdCBUID0gUC5tYXAoKF8sIGkpID0+IGkgPT09IDAgPyBzZWdEaXJbMF0uY2xvbmUoKVxuICAgIDogaSA9PT0gbiAtIDEgPyBzZWdEaXJbbiAtIDJdLmNsb25lKClcbiAgICA6IHNlZ0RpcltpIC0gMV0uY2xvbmUoKS5hZGQoc2VnRGlyW2ldKS5ub3JtYWxpemUoKSk7XG4gIC8vIHNlZWQgYSBub3JtYWwgdGhhdCBpcyBub3QgcGFyYWxsZWwgdG8gdGhlIGZpcnN0IHRhbmdlbnQsIHRoZW4gdHJhbnNwb3J0IGl0IHBvaW50IHRvIHBvaW50XG4gIGxldCBOID0gTWF0aC5hYnMoVFswXS55KSA+IDAuOSA/IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApIDogbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCk7XG4gIE4uc3ViKFRbMF0uY2xvbmUoKS5tdWx0aXBseVNjYWxhcihOLmRvdChUWzBdKSkpLm5vcm1hbGl6ZSgpO1xuICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBpZiAoaSA+IDApIHtcbiAgICAgIC8vIHJvdGF0ZSB0aGUgY2FycmllZCBub3JtYWwgYnkgdGhlIHNhbWUgcm90YXRpb24gdGhhdCB0YWtlcyB0aGUgcHJldmlvdXMgdGFuZ2VudCB0byB0aGlzIG9uZVxuICAgICAgY29uc3QgcSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKFRbaSAtIDFdLCBUW2ldKTtcbiAgICAgIE4uYXBwbHlRdWF0ZXJuaW9uKHEpO1xuICAgICAgTi5zdWIoVFtpXS5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKE4uZG90KFRbaV0pKSkubm9ybWFsaXplKCk7XG4gICAgfVxuICAgIGNvbnN0IEIgPSBuZXcgVEhSRUUuVmVjdG9yMygpLmNyb3NzVmVjdG9ycyhUW2ldLCBOKS5ub3JtYWxpemUoKTtcbiAgICAvLyBhIG1pdHJlZCByaW5nIGlzIGFuIEVMTElQU0UgaW4gaXRzIG93biBwbGFuZTogd2lkZW4gaXQgYnkgMS9jb3MoaGFsZi1hbmdsZSkgYWxvbmcgdGhlIGJlbmQgc29cbiAgICAvLyB0aGUgc3dlcHQgc2VjdGlvbiBzdGF5cyBjaXJjdWxhciB0aHJvdWdoIHRoZSBjb3JuZXIgcmF0aGVyIHRoYW4gcGluY2hpbmcgdG8gYSB3YWlzdFxuICAgIGNvbnN0IGsgPSBpID4gMCAmJiBpIDwgbiAtIDEgPyAxIC8gTWF0aC5tYXgoMC41LCBzZWdEaXJbaSAtIDFdLmRvdChUW2ldKSkgOiAxO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IHRoID0gaiAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgICAgY29uc3QgYyA9IE1hdGguY29zKHRoKSwgcyA9IE1hdGguc2luKHRoKTtcbiAgICAgIHBvcy5wdXNoKFBbaV0ueCArIChOLnggKiBjICsgQi54ICogcyAqIGspICogciwgUFtpXS55ICsgKE4ueSAqIGMgKyBCLnkgKiBzICogaykgKiByLCBQW2ldLnogKyAoTi56ICogYyArIEIueiAqIHMgKiBrKSAqIHIpO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IG4gLSAxOyBpKyspIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAvLyAoYSwgYzIsIGIpLCBOT1QgKGEsIGIsIGMyKS4gVGhlIHJpbmcgcnVucyBOIC0+IEIgd2l0aCBCID0gVCB4IE4sIHNvIHdpbmRpbmcgYWxvbmcgdGhlIHR1YmVcbiAgICAvLyBmaXJzdCBhbmQgYXJvdW5kIGl0IHNlY29uZCBnaXZlcyBhIGZhY2Ugbm9ybWFsIG9mIFQgeCBCID0gLU46IGV2ZXJ5IHdhbGwgdHJpYW5nbGUgZmFjZXMgSU5XQVJELlxuICAgIC8vIEJhY2tmYWNlIGN1bGxpbmcgdGhlbiBoaWRlcyB0aGUgbmVhciB3YWxsIGFuZCBzaG93cyB0aGUgRkFSIG9uZSwgd2hpY2ggZm9yIGEgbGl0IGdyZXkgdHViZSBsb29rc1xuICAgIC8vIGFsbW9zdCByaWdodCAtLSBhbmQgd3JpdGVzIGl0cyBkZXB0aCBvbiB0aGUgZmFyIHNpZGUsIHNvIGFueXRoaW5nIHBhc3NpbmcgdGhyb3VnaCB0aGUgdHViZSBkcmF3c1xuICAgIC8vIGluIGZyb250IG9mIGl0LiBUaGUgZm9vdCBzdHVicyBzdG9vZCBwcm91ZGx5IHRocm91Z2ggdGhlIGJvdHRvbSByYWlsIGJlY2F1c2Ugb2YgdGhpcywgYW5kIGl0XG4gICAgLy8gcmVhZCBhcyBhIGdlb21ldHJ5IGVycm9yIGluIHRoZSBzdHViIHJhdGhlciB0aGFuIGEgd2luZGluZyBlcnJvciBpbiB0aGUgc3dlZXAuXG4gICAgY29uc3QgYSA9IGkgKiBzZWcgKyBqLCBiID0gKGkgKyAxKSAqIHNlZyArIGosIGMyID0gKGkgKyAxKSAqIHNlZyArIChqICsgMSkgJSBzZWcsIGQgPSBpICogc2VnICsgKGogKyAxKSAlIHNlZztcbiAgICBpZHgucHVzaChhLCBjMiwgYiwgYSwgZCwgYzIpO1xuICB9XG4gIGlmIChjYXApIHtcbiAgICAvLyBGbGF0IGVuZCBkaXNjcywgb24gdGhlaXIgT1dOIENPUFkgb2YgdGhlIHJpbSB2ZXJ0aWNlcy4gRmFubmluZyB0aGVtIG9mZiB0aGUgc2lkZSB3YWxsJ3MgcmluZ1xuICAgIC8vIHNoYXJlcyB0aG9zZSB2ZXJ0aWNlcywgYW5kIGBjb21wdXRlVmVydGV4Tm9ybWFsc2AgdGhlbiBhdmVyYWdlcyB0aGUgZGlzYydzIGF4aWFsIG5vcm1hbCBpbnRvXG4gICAgLy8gdGhlIHdhbGwncyByYWRpYWwgb25lIC0tIHdoaWNoIGRvZXMgbm90IHNoYWRlIGEgc2xpZ2h0bHkgd3JvbmcgcmltLCBpdCB0aWx0cyB0aGUgbm9ybWFsIGF0IEJPVEhcbiAgICAvLyBlbmRzIG9mIGEgdHdvLXBvaW50IHR1YmUgYW5kIHNvIHNoYWRlcyB0aGUgV0hPTEUgdHViZSB3cm9uZy4gVGhlIGZvb3Qgc3R1YnMgcmVuZGVyZWQgYXMgZ2xhc3NcbiAgICAvLyB0ZXN0IHR1YmVzIHdpdGggYSBicmlnaHQgYmFuZCB1bmRlciB0aGUgcmFpbCwgYW5kIHRoZSBiYW5kIHJlYWQgYXMgYSBzZXBhcmF0ZSBvYmplY3Qgc2l0dGluZyBvblxuICAgIC8vIGl0LiBTYW1lIGZhdWx0LCBzYW1lIGZpeCwgYXMgdGhlIHNoYXJwLWNvcm5lciBzcGxpdCBpbiBgbGF0aGVgLlxuICAgIGZvciAoY29uc3QgW3JpbmcsIGF0LCBmbGlwXSBvZiBbWzAsIFBbMF0sIHRydWVdLCBbbiAtIDEsIFBbbiAtIDFdLCBmYWxzZV1dIGFzIFtudW1iZXIsIFRIUkVFLlZlY3RvcjMsIGJvb2xlYW5dW10pIHtcbiAgICAgIGNvbnN0IGJhc2UgPSBwb3MubGVuZ3RoIC8gMztcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHsgY29uc3QgayA9IChyaW5nICogc2VnICsgaikgKiAzOyBwb3MucHVzaChwb3Nba10sIHBvc1trICsgMV0sIHBvc1trICsgMl0pOyB9XG4gICAgICBjb25zdCBjaSA9IHBvcy5sZW5ndGggLyAzOyBwb3MucHVzaChhdC54LCBhdC55LCBhdC56KTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgICAgY29uc3QgYSA9IGJhc2UgKyBqLCBiID0gYmFzZSArIChqICsgMSkgJSBzZWc7XG4gICAgICAgIGlmIChmbGlwKSBpZHgucHVzaChjaSwgYiwgYSk7IGVsc2UgaWR4LnB1c2goY2ksIGEsIGIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwb3MpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgocG9zLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5zZXRJbmRleChpZHgpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IGcgOiB0aW50R2VvKGcsIGhleCk7XG59XG5cbi8qKlxuICogRlJPTlQtQVRMQVMgVVZzOiBldmVyeSB2ZXJ0ZXggd2hvc2Ugbm9ybWFsIGZhY2VzICtaIGFuZCB0aGF0IGxpZXMgaW5zaWRlIHRoZSBhdGxhcydzIHdvcmxkXG4gKiByZWN0YW5nbGUgdGFrZXMgYSBQTEFOQVIgKHgsIHkpIFVWIGludG8gYSBiYWtlZCBmcm9udC1lbGV2YXRpb24gaW1hZ2UsIGFuZCBldmVyeSBvdGhlciB2ZXJ0ZXggaXNcbiAqIHBpbm5lZCB0byBvbmUgY2xlYW4gdGV4ZWwgb2YgaXQuIEEgd2FsbC1tb3VudGVkIGJveCBzZWVuIGZyb20gdGhlIGZyb250IElTIGl0cyBlbGV2YXRpb24sIHNvIHRoZVxuICogcGxhdGUncyBvd24gcHJpbnRlZCBsYWJlbHMsIHNjcmV3IGhlYWRzLCBnYXNrZXQgbGluZSBhbmQgcnVzdCBsYW5kIGV4YWN0bHkgd2hlcmUgdGhlIGdlb21ldHJ5XG4gKiBwdXRzIHRoZW0sIG9uIG9uZSBtYXRlcmlhbC4gYGJhc2VgIG92ZXJyaWRlcyB0aGUgZnJvbnQgdmVydGljZXMnIGNvbG91ciwgYmVjYXVzZSB0aGUgYXRsYXMgaXMgYVxuICogcmF0aW8gb3ZlciBvbmUgcmVmZXJlbmNlIHRvbmUgYW5kIHRoZSBwZXItcGFydCB0aW50cyBvbmx5IGJlbG9uZyBvbiB0aGUgZmFjZXMgdGhlIGF0bGFzIGRvZXMgbm90XG4gKiByZWFjaC4gYHlNaW5gIGtlZXBzIHBhcnRzIGhhbmdpbmcgYmVsb3cgdGhlIGF0bGFzIChhIGNvbmR1aXQgc3R1Yikgb3V0IG9mIGl0LlxuICovXG5mdW5jdGlvbiBmcm9udEF0bGFzVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgYTogYW55KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGNvbnN0IGNvbCA9IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlIHwgbnVsbDtcbiAgY29uc3QgYmFzZSA9IGEuYmFzZSAhPT0gdW5kZWZpbmVkID8gbmV3IFRIUkVFLkNvbG9yKGEuYmFzZSkgOiBudWxsO1xuICBjb25zdCBtaW5OeiA9IGEubWluTnogPz8gMC43O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHggPSBwLmdldFgoaSksIHkgPSBwLmdldFkoaSk7XG4gICAgLy8gMWUtNCB0b2xlcmFuY2U6IGEgY2FwIHZlcnRleCBzaXR0aW5nIGV4YWN0bHkgb24gdGhlIGF0bGFzIGJvdW5kYXJ5ICh0aGUgc3BlZWQgc2lnbidzIGRpc2MgYXQgeCA9IC1hdy8yKVxuICAgIC8vIGZhaWxlZCB0aGUgdGVzdCBieSBmbG9hdCBlcnJvciwgd2FzIHBpbm5lZCwgYW5kIGl0cyB0aHJlZSB0cmlhbmdsZXMgc21lYXJlZCB0aGUgd2hvbGUgYXRsYXMgcm93IGRvd25cbiAgICAvLyB0aGUgZGlzYydzIGVkZ2UgKDIwMjYtMDktMDMpLlxuICAgIGNvbnN0IEUgPSAxZS00O1xuICAgIGNvbnN0IGZyb250ID0gbnJtLmdldFooaSkgPiBtaW5OeiAmJiB4ID49IGEueDAgLSBFICYmIHggPD0gYS54MSArIEUgJiYgeSA+PSAoYS55TWluID8/IGEueTEpIC0gRSAmJiB5IDw9IGEueTAgKyBFO1xuICAgIGlmIChmcm9udCkge1xuICAgICAgdXZbaSAqIDJdID0gKHggLSBhLngwKSAvIChhLngxIC0gYS54MCk7XG4gICAgICB1dltpICogMiArIDFdID0gKHkgLSBhLnkxKSAvIChhLnkwIC0gYS55MSk7XG4gICAgICBpZiAoYmFzZSAmJiBjb2wpIGNvbC5zZXRYWVooaSwgYmFzZS5yLCBiYXNlLmcsIGJhc2UuYik7XG4gICAgfSBlbHNlIHsgdXZbaSAqIDJdID0gYS5waW5bMF07IHV2W2kgKiAyICsgMV0gPSBhLnBpblsxXTsgfVxuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sKSBjb2wubmVlZHNVcGRhdGUgPSB0cnVlO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZmVuY2UgaGVscGVycyAqL1xuXG4vKiogUGFuZWwgVVZzOiB1IGFsb25nIHdvcmxkIFggb3ZlciBgc2NhbGVgIG1ldHJlcywgdiB3b3JsZCBIRUlHSFQgb3ZlciB0aGUgc2FtZSwgcmVnYXJkbGVzcyBvZiB0aGVcbiAqICBmYWNlIG5vcm1hbC4gT24gYSB0aGluIHNsYWIgdGhpcyBtZWFucyB0aGUgZnJvbnQgYW5kIGJhY2sgZmFjZXMgc2hhcmUgdGhlIHNhbWUgdGlsZSBwbGFjZW1lbnRcbiAqICBhbmQgdGhlIGVkZ2VzIHRha2UgYSBzbGl2ZXIgb2YgaXQ7IGEgZ3JpbWUgd2FzaCB0aGF0IGtleXMgb24gdiB0aGVuIGxhbmRzIGF0IHRoZSBzYW1lIGhlaWdodCBvblxuICogIGV2ZXJ5IGZhY2UsIHdoaWNoIGlzIHdoYXQgcmFpbiBhbmQgYWxnYWUgZG8uICovXG5mdW5jdGlvbiBwYW5lbFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIsIHJvdCA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgLy8gYHJvdGAgc3dhcHMgdGhlIGF4ZXMgc28gYSB0aWxlIG9mIFZFUlRJQ0FMIHN0cmlwcyByZWFkcyBob3Jpem9udGFsIC0tIHRoZSB3b3ZlbiBiYW5kcyBvZiBhXG4gIC8vIGJhbWJvbyBwYW5lbCBhZ2FpbnN0IGl0cyB2ZXJ0aWNhbCBtdWxsaW9ucywgb25lIHRpbGUsIG9uZSBtYXRlcmlhbC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB1ID0gcm90ID8gcC5nZXRZKGkpIDogcC5nZXRYKGkpLCB2ID0gcm90ID8gcC5nZXRYKGkpIDogcC5nZXRZKGkpO1xuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIEEgc3F1YXJlIHB5cmFtaWQgU1BJS0U6IGJhc2UgdyB4IHcgYXQgYGF0YCwgYXBleCBoIGFib3ZlLiBBIHBpY2tldCdzIHNwZWFyIHBvaW50LCBhIHBpZXIgY2FwLiAqL1xuZnVuY3Rpb24gc3Bpa2UoYXQ6IG51bWJlcltdLCB3OiBudW1iZXIsIGg6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Db25lR2VvbWV0cnkodyAvIE1hdGguU1FSVDIsIGgsIDQsIDEsIGZhbHNlKTtcbiAgZy5yb3RhdGVZKE1hdGguUEkgLyA0KTtcbiAgZy50cmFuc2xhdGUoYXRbMF0sIGF0WzFdICsgaCAvIDIsIGF0WzJdKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBHUklNRSB0aWxlOiBhIG11bHRpcGxpZXIgb2Ygd2hpdGUgd2l0aCAoYSkgYSBkYXJrIHdhc2ggcmlzaW5nIGZyb20gdGhlIGdyb3VuZCB0byBgY292ZXJhZ2VgLFxuICogKGIpIHZlcnRpY2FsIHJhaW4gc3RyZWFrcyBmcm9tIHRoZSB0b3AsIChjKSBzb2Z0IGRhcmsgYmxvdGNoZXMsIChjMikgYnJvYWQgQ0xPVUQgbW90dGxpbmcsXG4gKiAoZCkgc3dlcHQgdHlyZSBTQ1VGRlMgb3ZlciBhXG4gKiBoZWlnaHQgYmFuZCwgKGUpIHZlcnRpY2FsIGZvcm0gU0VBTVMsIChmKSBQSU5IT0xFUyAtLSB0aGUgYWlyIGJ1YmJsZXMgb2YgYSBwcmVjYXN0IGZhY2UsIChnKVxuICogb3B0aW9uYWwgZ3JlZW4gbW9zcy9hbGdhZSBibG9icyBjb25jZW50cmF0ZWQgaW4gdGhlIGJvdHRvbSBiYW5kLCBhbmQgKGgpIGZpbmUgZ3JhaW4uIChkKSwgKGUpXG4gKiBhbmQgKGYpIGFyZSBvZmYgdW5sZXNzIGFza2VkIGZvciwgc28gbm90aGluZyBhbHJlYWR5IGVtaXR0ZWQgY2hhbmdlcy4gRXZlcnkgY29sb3VyIGlzIGEgZnJhY3Rpb24gb2YgdGhlXG4gKiBtYXRlcmlhbCdzIG1lYXN1cmVkIGFsYmVkbywgYW5kIHRoZSBkYXJrZXN0IGNvcmUgaXMgY2xhbXBlZCBzbyBub3RoaW5nIG9uIGEgd2hpdGUgb3IgY3JlYW1cbiAqIHN1cmZhY2UgZHJvcHMgdG93YXJkIHRoZSBob2xlIGdhdGUncyBsdW1hIDU4LlxuICovXG5mdW5jdGlvbiBncmltZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3Qgd2FzaCA9IG8ud2FzaCA/PyBbMC42MiwgMC42MiwgMC41OF0sIHdhc2hBID0gby53YXNoQWxwaGEgPz8gMC43LCBjb3YgPSBvLmNvdmVyYWdlID8/IDAuMztcbiAgICAvLyBgYmFzZWAgaXMgdGhlIHRvbmUgdGhlIFVOLWdyaW1lZCBwYXJ0IG9mIHRoZSB0aWxlIGNhcnJpZXMsIGRlZmF1bHRpbmcgdG8gd2hpdGUgLS0gaS5lLiB0b1xuICAgIC8vIFwibGVhdmUgdGhlIHZlcnRleCBjb2xvdXIgYWxvbmVcIiwgd2hpY2ggaXMgZXZlcnkgZXhpc3RpbmcgY2FsbGVyLiBJdCBleGlzdHMgZm9yIEVOVkVMT1BFXG4gICAgLy8gUkUtQkFTSU5HOiBhIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbiwgc28gYSBwYXJ0IHRoYXQgbXVzdCByZWFkIGNsZWFuIG9yYW5nZSBpbiBvbmUgcGxhY2UgYW5kXG4gICAgLy8gZ3JleSByb2FkIGdyaW1lIGluIGFub3RoZXIgY2Fubm90IGRvIGl0IGZyb20gYSBzaW5nbGUgdmVydGV4IGNvbG91ciwgYmVjYXVzZSB0aGUgZ3JpbWUgaXNcbiAgICAvLyBISUdIRVIgaW4gYmx1ZSB0aGFuIHRoZSBvcmFuZ2UgaXMuIFRoZSB2ZXJ0ZXggY29sb3VyIGJlY29tZXMgdGhlIHBlci1jaGFubmVsIG1heGltdW0gb2YgYm90aFxuICAgIC8vIGFuZCB0aGlzIGZpbGwgcGFpbnRzIHRoZSBjbGVhbiB0b25lIGJhY2sgb3V0IG9mIGl0LlxuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgLy8gcmFpbiBzdHJlYWtzIGZyb20gdGhlIHRvcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3RyZWFrcyA/PyAyNik7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMiwgbGVuID0gcyAqICgwLjE1ICsgcm5kKCkgKiAwLjYpLCBhID0gMC4wNSArIHJuZCgpICogMC4xMjtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGxlbik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgY3R4LmZpbGxSZWN0KHgsIDAsIHcsIGxlbik7IGN0eC5maWxsUmVjdCh4IC0gcywgMCwgdywgbGVuKTtcbiAgICB9XG4gICAgLy8gZ3JvdW5kIHdhc2guIGB3YXNoRmxhdGAgbWFrZXMgaXQgVU5JRk9STSBpbnN0ZWFkIG9mIGEgYm90dG9tLXVwIGdyYWRpZW50LCB3aGljaCBpcyB3aGF0IGFcbiAgICAvLyBob3Jpem9udGFsIHNsYWIgbmVlZHM6IGEgZ3JhZGllbnQga2V5ZWQgdG8gdGhlIHRpbGUncyB2IG1hcHMgc3RyYWlnaHQgYWNyb3NzIGEgZmxhdCBmYWNlIGFuZFxuICAgIC8vIHNwbGl0cyBpdCBpbnRvIGEgcGFsZSBoYWxmIGFuZCBhIGRhcmsgaGFsZiB3aXRoIGEgaGFyZCBlZGdlIGJldHdlZW4gdGhlbS4gRGVmYXVsdGVkIG9mZiwgc29cbiAgICAvLyBldmVyeSBwcm9wIHRoYXQgZG9lcyBub3QgYXNrIGZvciBpdCBpcyB1bmNoYW5nZWQuXG4gICAgaWYgKG8ud2FzaEZsYXQpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdikpO1xuICAgICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7d2FzaEF9KWApOyBncmFkLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBICogMC40NX0pYCk7IGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB9XG4gICAgLy8gYmxvdGNoZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmJsb3RjaGVzID8/IDQwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAxLjYpICogcywgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA2LCBhID0gMC4wOCArIHJuZCgpICogMC4zO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gUlVCUzogbmVhci1ibGFjayB0eXJlIHNtZWFycyBsb3cgb24gdGhlIHRpbGUuIERpc3RpbmN0IGZyb20gYGJsb3RjaGVzYCwgd2hpY2ggZGFya2VuIHRvd2FyZFxuICAgIC8vIHRoZSBncmltZSB0b25lOiBhIHR5cmUgcnViIGlzIGEgZGlmZmVyZW50IGNvbG91ciBhbmQgYSBkaWZmZXJlbnQgc2hhcGUgLS0gbG9uZywgbG93LCBhbmQgbXVjaFxuICAgIC8vIGRhcmtlciB0aGFuIGFueXRoaW5nIHdlYXRoZXIgZG9lcy4gRGVmYXVsdCAwLCBzbyBubyBleGlzdGluZyBjYWxsZXIgY2hhbmdlcy5cbiAgICBpZiAoby5ydWJzKSB7XG4gICAgICBjb25zdCBydWIgPSBvLnJ1YiA/PyBbMC4zMCwgMC4yOCwgMC4zMF07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8ucnViczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzICogKDAuNjAgKyBybmQoKSAqIDAuMzgpO1xuICAgICAgICBjb25zdCB3ID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjIyKSwgaCA9IHMgKiAoMC4wMDYgKyBybmQoKSAqIDAuMDMwKSwgYSA9IDAuMjAgKyBybmQoKSAqIDAuNDU7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHggLSB3IC8gMiwgMCwgeCArIHcgLyAyLCAwKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHJ1Yil9LDApYCk7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7cmdiKHJ1Yil9LCR7YX0pYCk7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydWIpfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggLSB3IC8gMiArIGR4LCB5IC0gaCAvIDIsIHcsIGgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBTQ1VGRlM6IHNvZnQgcGF0Y2hlcyB3aGVyZSB0aGUgd2FzaCBpcyBlcmFzZWQgYmFjayB0b3dhcmQgd2hpdGUuIFRoZSB0aWxlIGlzIGNvbXBvc2l0ZWRcbiAgICAvLyBtdWx0aXBseS1vbi13aGl0ZSwgc28gcGFpbnRpbmcgd2hpdGUgc291cmNlLW92ZXIgaXMgcGFpbnRpbmcgXCJub3QgZGFya2VuZWRcIiAtLSB3aGljaCBpcyB0aGVcbiAgICAvLyBvbmx5IHdheSBhIG11bHRpcGx5IHRpbGUgY2FuIHB1dCBQQUxFIHdlYXIgb24gYSBkYXJrIGJhc2Ugd2l0aG91dCByZS1iYXNpbmcgdGhlIGVudmVsb3BlXG4gICAgLy8gdHdpY2UuIERlZmF1bHRlZCB0byBub25lLlxuICAgIGlmIChvLnNjdWZmcykge1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8uc2N1ZmZzOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNSArIHJuZCgpICogKG8uc2N1ZmZTY2FsZSA/PyAwLjE0KSk7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMjU1LDI1NSwyNTUsJHtvLnNjdWZmQWxwaGEgPz8gMC41NX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjU1LDI1NSwwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICB9XG5cbiAgICAvLyBDTE9VRFM6IGJyb2FkLCB2ZXJ5IHNvZnQgcGF0Y2hlcyBvdmVyIHRoZSBXSE9MRSB0aWxlLiBBIGNhc3QgZmFjZSBpcyBtb3R0bGVkIGF0IHRoZSBzY2FsZSBvZlxuICAgIC8vIHRlbnMgb2YgY2VudGltZXRyZXMgLS0gcG91ciBsaW5lcywgZGFtcCwgdGhlIG1vdWxkJ3Mgb3duIGhpc3RvcnkgLS0gYW5kIHRoYXQgbG93IGZyZXF1ZW5jeSBpc1xuICAgIC8vIG1vc3Qgb2Ygd2hhdCBzZXBhcmF0ZXMgYSByZW5kZXJlZCBzdGFuZGFyZCBkZXZpYXRpb24gb2YgNiBmcm9tIHRoZSBwbGF0ZSdzIDEyLiBTbWFsbCBtYXJrc1xuICAgIC8vIGNhbm5vdCBzdXBwbHkgaXQ6IGF0IHByb3AgZGlzdGFuY2UgYSB0aG91c2FuZCBvZiB0aGVtIGF2ZXJhZ2UgYmFjayBvdXQgdG8gb25lIGZsYXQgdG9uZS5cbiAgICAvLyBLZWVwIHRoZW0gU01BTEwgcmVsYXRpdmUgdG8gdGhlIHRpbGUsIHRob3VnaC4gQSB0aWxlIHRoYXQgcmVwZWF0cyB0d28gb3IgdGhyZWUgdGltZXMgYWNyb3NzIGFcbiAgICAvLyBwcm9wIHJlcGVhdHMgaXRzIGNsb3VkcyB0b28sIGFuZCBhIGNsb3VkIHRoZSBzaXplIG9mIGEgdGhpcmQgb2YgdGhlIHRpbGUgdGhlbiByZWFkcyBhc1xuICAgIC8vIGNhbW91ZmxhZ2Ugd2l0aCBhIHZpc2libGUgc2VhbSAtLSB0aGUgc2FtZSBmYWlsdXJlIGFzIGhhcmQgYmxvdGNoZXMsIG9uZSBvY3RhdmUgbG93ZXIuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5jbG91ZHMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgdiA9IG8uY2xvdWQgPz8gWzAuODYsIDAuODYsIDAuODRdO1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoby5jbG91ZFIgPz8gMC4xNikgKiAoMC40ICsgcm5kKCkgKiAxLjQpLCBhID0gKG8uY2xvdWRBbHBoYSA/PyAwLjEyKSAqICgwLjQgKyBybmQoKSk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gU0NVRkYgYXJjczogdGhlIHR5cmUgYW5kIGJ1bXBlciBtYXJrcyBhIHJvYWRzaWRlIGJhcnJpZXIgY29sbGVjdHMgb24gdGhlIGJhbmQgdGhlIHRyYWZmaWNcbiAgICAvLyBhY3R1YWxseSByZWFjaGVzLiBCcm9hZCwgc29mdCwgbmVhci1ob3Jpem9udGFsIHNtZWFycyB3aXRoIGEgc3dlcHQgc2hhcGUgLS0gYSBibG90Y2ggcmVhZHMgYXNcbiAgICAvLyBhIHN0YWluLCBhbmQgd2hhdCB0aGUgcGxhdGUgY2FycmllcyBpcyBzb21ldGhpbmcgdGhhdCB3ZW50IHBhc3QuIGBzY3VmZkJhbmRgIGlzIGEgcGFpciBvZlxuICAgIC8vIEhFSUdIVCBmcmFjdGlvbnMgKDAgYXQgdGhlIGdyb3VuZCksIHNvIGl0IGlzIHN0YXRlZCBpbiB0aGUgc2FtZSB0ZXJtcyBhcyBgY292ZXJhZ2VgLlxuICAgIGlmIChvLnNjdWZmcykge1xuICAgICAgY29uc3QgdiA9IG8uc2N1ZmYgPz8gWzAuNjIsIDAuNjIsIDAuNjRdLCBiYW5kID0gby5zY3VmZkJhbmQgPz8gWzAuMzAsIDAuNzBdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvLnNjdWZmczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHMgKiAoMSAtIChiYW5kWzBdICsgcm5kKCkgKiAoYmFuZFsxXSAtIGJhbmRbMF0pKSk7XG4gICAgICAgIGNvbnN0IHcgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTEpLCBoID0gdyAqICgwLjA1ICsgcm5kKCkgKiAwLjEwKTtcbiAgICAgICAgY29uc3QgYSA9IChvLnNjdWZmQWxwaGEgPz8gMC4zNCkgKiAoMC41ICsgcm5kKCkpO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgICBjdHguc2F2ZSgpOyBjdHgudHJhbnNsYXRlKGN4ICsgZHgsIGN5KTsgY3R4LnJvdGF0ZSgocm5kKCkgLSAwLjUpICogMC40NSk7IGN0eC5zY2FsZSgxLCBoIC8gdyk7XG4gICAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoMCwgMCwgMCwgMCwgMCwgdyk7XG4gICAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHYpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMC40NSwgYHJnYmEoJHtyZ2Iodil9LCR7YSAqIDAuNTV9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoMCwgMCwgdywgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRk9STSBTRUFNUzogdGhlIHZlcnRpY2FsIGpvaW50IGxpbmVzIGEgcHJlY2FzdCBtb3VsZCBsZWF2ZXMsIG9uZSBwZXIgdGlsZS4gQSBkYXJrIGhhaXJsaW5lIHdpdGhcbiAgICAvLyBhIHBhbGVyIGxpcCBiZXNpZGUgaXQsIHdoaWNoIGlzIHdoYXQgYSBwcm91ZCBzZWFtIGxvb2tzIGxpa2UgLS0gYSBzaW5nbGUgZGFyayBsaW5lIHJlYWRzIGFzIGFcbiAgICAvLyBzY3JhdGNoLiBgc2VhbUF0YCBwbGFjZXMgaXQgYXMgYSBmcmFjdGlvbiBvZiB0aGUgdGlsZSBzbyBpdCBkb2VzIG5vdCBsYW5kIG9uIHRoZSB3cmFwLlxuICAgIGlmIChvLnNlYW1zKSB7XG4gICAgICBjb25zdCB2ID0gby5zZWFtID8/IFswLjcyLCAwLjcxLCAwLjY4XTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5zZWFtczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnJvdW5kKHMgKiAoKG8uc2VhbUF0ID8/IDAuNDIpICsgaSAvIG8uc2VhbXMpKSAlIHM7XG4gICAgICAgIGNvbnN0IHdweCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQocyAqIDAuMDA0KSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih2KX0sJHtvLnNlYW1BbHBoYSA/PyAwLjV9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCB3cHgsIHMpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iodil9LCR7KG8uc2VhbUFscGhhID8/IDAuNSkgKiAwLjN9KWA7IGN0eC5maWxsUmVjdCh4ICsgd3B4LCAwLCB3cHgsIHMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBQSU5IT0xFUzogdGhlIGFpciBidWJibGVzIGEgcHJlY2FzdCBmYWNlIGlzIGNvdmVyZWQgaW4uIFRoZXkgYXJlIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZ1xuICAgIC8vIG1hcmsgb2YgYmFyZSBjb25jcmV0ZSBhdCBwcm9wIGRpc3RhbmNlIC0tIHdpdGhvdXQgdGhlbSB0aGUgZmFjZSBpcyBhIHBhaW50ZWQgc2xhYiwgd2hpY2ggaXNcbiAgICAvLyBtZWFzdXJhYmxlIGFzIGEgcmVuZGVyZWQgc3RhbmRhcmQgZGV2aWF0aW9uIGEgdGhpcmQgb2YgdGhlIHBsYXRlJ3MuIFNtYWxsLCBkYXJrLCBhbmQgTUFOWS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnBpdHMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgdiA9IG8ucGl0ID8/IFswLjQyLCAwLjQwLCAwLjM2XTtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSAoby5waXRSID8/IDEuNikgKiAoMC41ICsgcm5kKCkgKiAxLjMpO1xuICAgICAgY29uc3QgYSA9IDAuMjUgKyBybmQoKSAqIDAuNTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIgKiAyKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNCwgYHJnYmEoJHtyZ2Iodil9LCR7YSAqIDAuNDV9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciAqIDIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBtb3NzIC8gYWxnYWUgaW4gdGhlIGJvdHRvbSBiYW5kOiBjbHVzdGVyZWQgc3BlY2tzLCBicmlnaHRlci10aGFuLXdhc2ggZ3JlZW5cbiAgICBpZiAoby5tb3NzKSB7XG4gICAgICBjb25zdCBtID0gby5tb3NzLCBiYW5kID0gby5tb3NzQmFuZCA/PyAwLjIyO1xuICAgICAgLy8gYSBmYWludCBncmVlbiB3YXNoIG92ZXIgdGhlIHdob2xlIGJhbmQgZmlyc3QsIHNvIHRoZSBjYXJwZXRzIHNpdCBpbiBkYW1wIGdyb3VuZCByYXRoZXIgdGhhblxuICAgICAgLy8gYXMgaXNvbGF0ZWQgZG90cyBvbiBjbGVhbiBwYWludFxuICAgICAgY29uc3QgbWcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gYmFuZCAqIDEuMykpO1xuICAgICAgbWcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKG0pfSwke28ubW9zc1dhc2ggPz8gMC4zNX0pYCk7IG1nLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihtKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBtZzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5tb3NzQ2x1c3RlcnMgPz8gMTQpOyBrKyspIHtcbiAgICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAxLjYpICogcyAqIGJhbmQsIGNyID0gcyAqICgwLjAxNSArIHJuZCgpICogMC4wNCk7XG4gICAgICAgIC8vIHRoZSBjYXJwZXQ6IGEgc29mdCBibG9iLCB0aGVuIHNwZWNrcyBvdmVyIGl0IGZvciB0aGUgdHVmdGVkIGVkZ2VcbiAgICAgICAgY29uc3QgY2cgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY3gsIGN5LCAwLCBjeCwgY3ksIGNyKTtcbiAgICAgICAgY2cuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKG0pfSwwLjcpYCk7IGNnLmFkZENvbG9yU3RvcCgwLjYsIGByZ2JhKCR7cmdiKG0pfSwwLjM1KWApOyBjZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IobSl9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjZztcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoY3ggKyBkeCwgY3ksIGNyLCBjciAqIDAuNiwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyO1xuICAgICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkICogMC42LCByID0gMSArIHJuZCgpICogMztcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IobSl9LCR7MC4zNSArIHJuZCgpICogMC41fSlgO1xuICAgICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBncmFpbi4gYGdyYWluYC9gZ3JhaW5BbHBoYWAgZGVmYXVsdCB0byB0aGUgb3JpZ2luYWwgMTUwMCBhdCAwLjEyLCBzbyBubyBhbHJlYWR5LWVtaXR0ZWQgcHJvcFxuICAgIC8vIGNoYW5nZXM7IGEgdGlsZSBzdHJldGNoZWQgb3ZlciBhIFdIT0xFIHByb3AgKHV2U2NhbGUgPiBpdHMgaGVpZ2h0KSBzYW1wbGVzIG9ubHkgdGhlIGZyYWN0aW9uXG4gICAgLy8gb2YgdGhlIHRpbGUgd2lkdGggaGVpZ2h0VVYgZm9sZHMgb250byBpdCwgYW5kIG5lZWRzIHRoZSBjb3VudCByYWlzZWQgdG8ga2VlcCB0aGUgc2FtZSBkZW5zaXR5LlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZ3JhaW4gPz8gMTUwMCk7IGkrKykge1xuICAgICAgY29uc3QgbG8gPSBvLmdyYWluTG8gPz8gMjAwOyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCB2ID0gbG8gKyBNYXRoLnJvdW5kKHJuZCgpICogKDI1NSAtIGxvKSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sJHtvLmdyYWluQWxwaGEgPz8gMC4xMn0pYDsgY3R4LmZpbGxSZWN0KHgsIHksIDEuNSwgMS41KTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogQ0hBSU4tTElOSyB0aWxlOiBhIGRpYW1vbmQgd2lyZSBsYXR0aWNlIGRyYXduIG9wYXF1ZSBvdmVyIGEgVFJBTlNQQVJFTlQgZ3JvdW5kLCBib3VuZCBhcyBtYXBcbiAqICBvbiBhbiBhbHBoYS10ZXN0ZWQgbWF0ZXJpYWwgc28gdGhlIGNlbGxzIGFyZSBvcGVuLiBPbmUgdGlsZSBpcyBvbmUgZGlhbW9uZCBjZWxsOyB0aGUgcGFuZSdzXG4gKiAgVVZzIHJlcGVhdCBpdCBhdCB0aGUgcmVhbCBtZXNoIHBpdGNoLiBgd2lyZWAgaXMgdGhlIHdpcmUgd2lkdGggYXMgYSBmcmFjdGlvbiBvZiB0aGUgY2VsbC4gKi9cbmZ1bmN0aW9uIGNoYWlubGlua1RpbGUoc2l6ZTogbnVtYmVyLCB3aXJlOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5saW5lV2lkdGggPSBNYXRoLm1heCgxLjUsIHdpcmUgKiBzKTtcbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgY29uc3QgdiA9IDE1MCArIE1hdGgucm91bmQocm5kKCkgKiAzMCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYigke3Z9LCR7diArIDJ9LCR7diArIDR9KWA7XG4gICAgLy8gdHdvIGRpYWdvbmFscyB0aHJvdWdoIHRoZSB0aWxlLCBvZmZzZXQgc28gdGhlIHdyYXAgbWFrZXMgYSBjb250aW51b3VzIGRpYW1vbmQgbGF0dGljZVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIDApOyBjdHgubGluZVRvKHMsIHMpO1xuICAgIGN0eC5tb3ZlVG8ocywgMCk7IGN0eC5saW5lVG8oMCwgcyk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vIHRoZSBrbnVja2xlIHdoZXJlIHdpcmVzIHR3aXN0IHJvdW5kIGVhY2ggb3RoZXIsIGF0IHRoZSB0d28gY3Jvc3NpbmdzIG9uIHRoZSB0aWxlIGVkZ2VzXG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2IC0gMjB9LCR7diAtIDE4fSwke3YgLSAxNn0pYDtcbiAgICBmb3IgKGNvbnN0IFt4LCB5XSBvZiBbWzAsIDBdLCBbcywgMF0sIFswLCBzXSwgW3MsIHNdLCBbcyAvIDIsIHMgLyAyXV0pIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCBjdHgubGluZVdpZHRoICogMC45LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIEJBTUJPTyBTVFJJUCB0aWxlOiB2ZXJ0aWNhbCBzcGxpdC1iYW1ib28gc3RyaXBzIHdpdGggcGFsZSBjdWxtIGZhY2VzLCBkYXJrIGpvaW50cyBiZXR3ZWVuIHRoZW1cbiAqICBhbmQgYSBub2RlIGxpbmUgb3IgdHdvIC0tIGEgbXVsdGlwbGllciBvbiB0aGUgbWVhc3VyZWQgc2lsdmVyLWdyZXkuICovXG5mdW5jdGlvbiBiYW1ib29UaWxlKHNpemU6IG51bWJlciwgc3RyaXBzOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3Qgc3cgPSBzIC8gc3RyaXBzO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgc3RyaXBzOyBiKyspIHtcbiAgICAgIGNvbnN0IHRvbmUgPSAwLjgwICsgcm5kKCkgKiAwLjIsIHYgPSBNYXRoLnJvdW5kKDI1NSAqIHRvbmUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3YgLSAyfSwke3YgLSA2fSlgOyBjdHguZmlsbFJlY3QoYiAqIHN3LCAwLCBzdywgcyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNTAsNDIsMzQsMC42KSc7IGN0eC5maWxsUmVjdChiICogc3csIDAsIE1hdGgubWF4KDEsIHMgKiAwLjAwNiksIHMpO1xuICAgICAgLy8gYSBoaWdobGlnaHQgZG93biB0aGUgY3VsbSdzIHJvdW5kXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xMCknOyBjdHguZmlsbFJlY3QoYiAqIHN3ICsgc3cgKiAwLjM1LCAwLCBzdyAqIDAuMjUsIHMpO1xuICAgICAgLy8gbm9kZSByaW5nc1xuICAgICAgY29uc3QgbiA9IDEgKyBNYXRoLmZsb29yKHJuZCgpICogMik7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykgeyBjb25zdCB5ID0gcm5kKCkgKiBzOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNzAsNjAsNDgsMC40NSknOyBjdHguZmlsbFJlY3QoYiAqIHN3LCB5LCBzdywgTWF0aC5tYXgoMSwgcyAqIDAuMDA4KSk7IH1cbiAgICAgIC8vIGZpbmUgZ3JhaW4gbGluZXNcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNjsgaysrKSB7IGNvbnN0IHggPSBiICogc3cgKyBybmQoKSAqIHN3OyBjdHguZmlsbFN0eWxlID0gYHJnYmEoODAsNzAsNTgsJHswLjA1ICsgcm5kKCkgKiAwLjF9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTsgfVxuICAgIH1cbiAgICAvLyBtb3VsZCBzcGVja2xlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDA7IGkrKykgeyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzAsMjgsMjQsMC4xOCknOyBjdHguZmlsbFJlY3QoeCwgeSwgMSArIHJuZCgpICogMiwgMSArIHJuZCgpICogMik7IH1cbiAgfSk7XG59XG5cbi8qKiBQT1NURVIgdGlsZSBmb3IgYSBob2FyZGluZzogdG9ybiBwYXN0ZS11cCBzaGVldHMgYW5kIGEgc3ByYXkgc3RlbmNpbCBvdmVyIGEgVFJBTlNQQVJFTlQgZ3JvdW5kLFxuICogIGJvdW5kIG9uIGFuIGFscGhhLXRlc3RlZCBwYW5lIGEgZmV3IG1pbGxpbWV0cmVzIHByb3VkIG9mIHRoZSBzaGVldC4gYGxpbmVzYCBhcmUgdGhlIHN0ZW5jaWxcbiAqICBzdHJpbmdzOyBhIHByaW50ZWQgZ3JhcGhpYyBpcyBleGFjdGx5IHRoZSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgY2FzZS4gKi9cbmZ1bmN0aW9uIHBvc3RlclRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIGxpbmVzOiBzdHJpbmdbXSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIHBhc3RlLXVwczogb3ZlcmxhcHBpbmcgb2ZmLXdoaXRlIHJlY3RhbmdsZXMgd2l0aCB0b3JuIGVkZ2VzIGFuZCBmYWludCBwcmludCBsaW5lc1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcyAqICgwLjAyICsgcm5kKCkgKiAwLjMwKSwgeSA9IHMgKiAoMC4xNSArIHJuZCgpICogMC40NSksIHcgPSBzICogKDAuMTQgKyBybmQoKSAqIDAuMTYpLCBoID0gcyAqICgwLjE4ICsgcm5kKCkgKiAwLjIyKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgkezIyNSArIE1hdGgucm91bmQocm5kKCkgKiAyMCl9LCR7MjIyICsgTWF0aC5yb3VuZChybmQoKSAqIDE4KX0sJHsyMTAgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApfSwwLjk2KWA7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICBjb25zdCBuID0gOTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykgY3R4LmxpbmVUbyh4ICsgdyAqIGkgLyBuLCB5ICsgKHJuZCgpIC0gMC41KSAqIGggKiAwLjA4KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykgY3R4LmxpbmVUbyh4ICsgdyArIChybmQoKSAtIDAuNSkgKiB3ICogMC4wOCwgeSArIGggKiBpIC8gbik7XG4gICAgICBmb3IgKGxldCBpID0gbiAtIDE7IGkgPj0gMDsgaS0tKSBjdHgubGluZVRvKHggKyB3ICogaSAvIG4sIHkgKyBoICsgKHJuZCgpIC0gMC41KSAqIGggKiAwLjEyKTtcbiAgICAgIGZvciAobGV0IGkgPSBuIC0gMTsgaSA+PSAwOyBpLS0pIGN0eC5saW5lVG8oeCArIChybmQoKSAtIDAuNSkgKiB3ICogMC4wOCwgeSArIGggKiBpIC8gbik7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsNDAsNDUsMC41NSknO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIGN0eC5maWxsUmVjdCh4ICsgdyAqIDAuMSwgeSArIGggKiAoMC4yICsgaSAqIDAuMSksIHcgKiAoMC4zICsgcm5kKCkgKiAwLjUpLCBNYXRoLm1heCgxLCBzICogMC4wMDYpKTtcbiAgICB9XG4gICAgLy8gc3ByYXkgc3RlbmNpbCwgc2xpZ2h0bHkgc29mdCBhbmQgdW5ldmVuXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDIwLDIwLDIyLDAuODgpJztcbiAgICBjdHguZm9udCA9IGBib2xkICR7TWF0aC5yb3VuZChzICogMC4wNyl9cHggc2Fucy1zZXJpZmA7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBzICogMC40MCwgeSA9IHMgKiAoMC40NCArIGkgKiAwLjEzKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMzsgaysrKSB7IGN0eC5nbG9iYWxBbHBoYSA9IDAuNjsgY3R4LmZpbGxUZXh0KGxpbmVzW2ldLCB4ICsgKHJuZCgpIC0gMC41KSAqIDMsIHkgKyAocm5kKCkgLSAwLjUpICogMyk7IH1cbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFNUUklQRSB0aWxlOiBhbHRlcm5hdGluZyBjb2xvdXIgYmFuZHMgYWxvbmcgdSAoYW4gYXduaW5nKSwgd2l0aCBhIHNvZnQgZ3JpbWUgbXVsdGlwbHkgc28gdGhlIGNsb3RoXG4gKiAgcmVhZHMgd29ybiByYXRoZXIgdGhhbiBwcmludGVkLiBgYWAvYGJgIGFyZSB0aGUgdHdvIGJhbmQgY29sb3VycyBhcyBbcixnLGJdIDAtMS4gQm91bmQgYXMgbWFwIG9uIGFcbiAqICBXSElURSBtYXRlcmlhbCBzbyB0aGUgYmFuZHMgY2FycnkgdGhlIHdob2xlIGFsYmVkby4gKi9cbi8vIGBvYCBpcyBvcHRpb25hbCBhbmQgZXZlcnkgZmllbGQgZGVmYXVsdHMgdG8gdGhlIHByZXZpb3VzIGhhcmQtY29kZWQgYmVoYXZpb3VyLCBzbyBubyBwcm9wIHRoYXRcbi8vIGRvZXMgbm90IHBhc3MgaXQgY2hhbmdlcy4gYHNtdWRnZXNgIGFuZCBgc3BlY2tzYCBleGlzdCBiZWNhdXNlIGJydXNoZWQgU1RFRUwgd2FudHMgdGhlIGJhbmRpbmdcbi8vIHdpdGhvdXQgdGhlIGRpcnQ6IHRoZSA0MCByYWRpYWwgc211ZGdlcyBhbmQgMTIwMCBsaWdodCBzcGVja3MgcmVhZCBhcyBtb3VsZCBvbiBhIGNsZWFuIHNhdGluXG4vLyBzdXJmYWNlLCB3aGljaCBpcyB0aGUgb3Bwb3NpdGUgb2Ygd2hhdCBhIHN0cmlwZSB0aWxlIGlzIGZvciB0aGVyZS5cbmZ1bmN0aW9uIHN0cmlwZVRpbGUoc2l6ZTogbnVtYmVyLCBiYW5kczogbnVtYmVyLCBhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgbzogYW55ID0ge30pOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgcmdiKCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9KWA7XG4gICAgY29uc3QgdyA9IHMgLyBiYW5kcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhbmRzOyBpKyspIHsgY3R4LmZpbGxTdHlsZSA9IHJnYihpICUgMiA/IGIgOiBhKTsgY3R4LmZpbGxSZWN0KE1hdGguZmxvb3IoaSAqIHcpLCAwLCBNYXRoLmNlaWwodykgKyAxLCBzKTsgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc211ZGdlcyA/PyA0MCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDQgKyBybmQoKSAqIHMgKiAwLjA4LCBhbCA9IDAuMDYgKyBybmQoKSAqIDAuMTg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxNTAsMTQwLDEyNSwke2FsfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDE1MCwxNDAsMTI1LDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BlY2tzID8/IDEyMDApOyBpKyspIHsgY29uc3QgdiA9IDIwMCArIE1hdGgucm91bmQocm5kKCkgKiA1NSk7IGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjEwKWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMS41LCAxLjUpOyB9XG4gICAgLy8gQlJPQUQgcmVmbGVjdGlvbiBiYW5kaW5nOiBgby5icm9hZGAgd2hvbGUgYnJpZ2h0L2RhcmsgY3ljbGVzIGFjcm9zcyB0aGUgdGlsZSwgZHJhd24gYXMgb25lXG4gICAgLy8gd3JhcHBpbmcgY29zaW5lIGdyYWRpZW50LiBCcnVzaGVkIHN0ZWVsIHdpdGggbm8gZW52aXJvbm1lbnQgbWFwIHRvIHJlZmxlY3QgaGFzIG5vdGhpbmcgdG9cbiAgICAvLyBtYWtlIGl0cyBmbGFua3MgYnJpZ2h0IGFuZCBpdHMgbWlkZGxlIGRhcmssIGFuZCB0aGUgZmluZSBncmFpbiBjYW5ub3Qgc3VwcGx5IGl0IC0tIGEgMyBtbVxuICAgIC8vIHBpdGNoIGF2ZXJhZ2VzIHRvIG9uZSBmbGF0IHRvbmUgYXQgcHJvcCBkaXN0YW5jZSwgd2hpY2ggaXMgd2hhdCBhIHJlbmRlcmVkIHN0YWlubGVzcyBiaW5cbiAgICAvLyBsb29rcyBsaWtlIHdoZW4gaXQgcmVhZHMgYXMgcGFpbnRlZCBtZXRhbC4gV2hvbGUgY3ljbGVzLCBzbyB0aGUgdGlsZSBzdGlsbCBtZWV0cyBpdHNlbGYuXG4gICAgLy8gRGVmYXVsdGVkIE9GRiwgc28gZXZlcnkgZXhpc3RpbmcgY2FsbGVyIGlzIGJ5dGUtaWRlbnRpY2FsLlxuICAgIGlmIChvLmJyb2FkKSB7XG4gICAgICBjb25zdCBsbyA9IG8uYnJvYWRMbyA/PyAwLjgwLCBoaSA9IG8uYnJvYWRIaSA/PyAxLjA7XG4gICAgICBjb25zdCBnMyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBzLCAwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDY0OyBpKyspIHtcbiAgICAgICAgY29uc3QgdCA9IGkgLyA2NDtcbiAgICAgICAgY29uc3QgdiA9IGxvICsgKGhpIC0gbG8pICogKDAuNSArIDAuNSAqIE1hdGguY29zKDIgKiBNYXRoLlBJICogby5icm9hZCAqIHQpKTtcbiAgICAgICAgY29uc3QgYyA9IE1hdGgucm91bmQoMjU1ICogdik7XG4gICAgICAgIGczLmFkZENvbG9yU3RvcCh0LCBgcmdiKCR7Y30sJHtjfSwke2N9KWApO1xuICAgICAgfVxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGczOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFNlYW1sZXNzIGFyb3VuZC1ieS11cCBVVnMgZm9yIGEgTGF0aGVHZW9tZXRyeTogdSBmcm9tIHRoZSBTRUdNRU5UIGluZGV4ICh0aGUgbGF0aGUgb3JkZXJzIGl0c1xuICogIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IsIGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSwgc28gdGhlIGR1cGxpY2F0ZWQgc2VhbSBjb2x1bW4gcmVhZHNcbiAqICB1ID0gcmVwZWF0cyBleGFjdGx5IGFuZCBSZXBlYXRXcmFwcGluZyBjbG9zZXMgaXQuIGBzY2FsZWAgaXMgdGhlIHRpbGUgc2l6ZSBpbiBtZXRyZXM7IHRoZVxuICogIGFyb3VuZC1yZXBlYXQgY291bnQgaXMgcm91bmRlZCBzbyB0aGUgdGlsZSBtZWV0cyBpdHNlbGYsIGZyb20gdGhlIHByb2ZpbGUncyB3aWRlc3QgcmFkaXVzLiAqL1xuZnVuY3Rpb24gbGF0aGVVVihnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgcG9pbnRDb3VudDogbnVtYmVyLCBzZWc6IG51bWJlciwgc2NhbGU6IG51bWJlciwgdlNjYWxlID0gc2NhbGUsIHYwID0gMCk6IHZvaWQge1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGxldCByTWF4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHJNYXggPSBNYXRoLm1heChyTWF4LCBNYXRoLmh5cG90KHAuZ2V0WChpKSwgcC5nZXRaKGkpKSk7XG4gIGNvbnN0IHJlcCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoMiAqIE1hdGguUEkgKiByTWF4IC8gc2NhbGUpKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBzID0gTWF0aC5mbG9vcihpIC8gcG9pbnRDb3VudCk7XG4gICAgdXZbaSAqIDJdID0gKHMgLyBzZWcpICogcmVwOyB1dltpICogMiArIDFdID0gKHAuZ2V0WShpKSAtIHYwKSAvIHZTY2FsZTtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG59XG5cbi8qKiBFWFBPU0VELUFHR1JFR0FURSB0aWxlOiBhIGRhcmsgbW9ydGFyIGdyb3VuZCBwYWNrZWQgd2l0aCByb3VuZGVkIHBlYmJsZXMgaW4gYSBtZWFzdXJlZCBwYWxldHRlLFxuICogIGVhY2ggZHJhd24gYXQgbmluZSB3cmFwcGVkIG9mZnNldHMgc28gdGhlIHRpbGUgaXMgc2VhbWxlc3MuIGBvLnBhbGV0dGVgIGlzIGEgbGlzdCBvZiBbcixnLGJdXG4gKiAgcmF0aW9zIGFnYWluc3QgdGhlIG1hdGVyaWFsIGNvbG91ciwgYG8uZ3JvdW5kYCB0aGUgbW9ydGFyIHJhdGlvLCBgby5jb3VudGAgdGhlIHBlYmJsZSBjb3VudC4gKi9cbmZ1bmN0aW9uIHBlYmJsZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGByZ2IoJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX0pYDtcbiAgICBjdHguZmlsbFN0eWxlID0gcmdiKG8uZ3JvdW5kID8/IFswLjQ1LCAwLjQyLCAwLjM4XSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBwYWw6IG51bWJlcltdW10gPSBvLnBhbGV0dGUgPz8gW1swLjg1LCAwLjc4LCAwLjY2XSwgWzAuNzIsIDAuNjIsIDAuNTBdLCBbMC42MCwgMC41OCwgMC41NV0sIFswLjkwLCAwLjg2LCAwLjgwXV07XG4gICAgY29uc3QgbiA9IG8uY291bnQgPz8gOTAwLCByTWluID0gcyAqIChvLnJNaW4gPz8gMC4wMTIpLCByTWF4ID0gcyAqIChvLnJNYXggPz8gMC4wMjgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByeCA9IHJNaW4gKyBybmQoKSAqIChyTWF4IC0gck1pbiksIHJ5ID0gcnggKiAoMC42ICsgcm5kKCkgKiAwLjUpLCBhID0gcm5kKCkgKiBNYXRoLlBJO1xuICAgICAgY29uc3QgYyA9IHBhbFtNYXRoLmZsb29yKHJuZCgpICogcGFsLmxlbmd0aCldLCBrID0gMC44NSArIHJuZCgpICogMC4zO1xuICAgICAgLy8gQ09OVEFDVCBTSEFET1cgZmlyc3QsIG9mZnNldCBkb3duLXJpZ2h0IGFuZCBhIHRvdWNoIGxhcmdlciwgc28gd2hhdCBzdXJ2aXZlcyBhcm91bmQgZWFjaFxuICAgICAgLy8gc3RvbmUgaXMgdGhlIGRhcmsgbW9ydGFyIGNyZXNjZW50IHRoYXQgbWFrZXMgYSBwYWNrZWQgYWdncmVnYXRlIHJlYWQgYXMgc3RvbmVzIHJhdGhlciB0aGFuXG4gICAgICAvLyBhcyBvdmVybGFwcGluZyBmbGF0IGRpc2NzLiBgc2hhZGVgIGlzIGEgcmF0aW8gYWdhaW5zdCB0aGUgbW9ydGFyIGdyb3VuZDsgMCBrZWVwcyB0aGUgb2xkXG4gICAgICAvLyBsb29rIGZvciBldmVyeSB0aWxlIGFscmVhZHkgc2hpcHBlZC5cbiAgICAgIGlmIChvLnNoYWRlKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSByZ2IoKG8uZ3JvdW5kID8/IFswLjQ1LCAwLjQyLCAwLjM4XSkubWFwKCh2KSA9PiB2ICogby5zaGFkZSkpO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCArIHJ4ICogMC4xNiwgeSArIGR5ICsgcnkgKiAwLjIyLCByeCAqIDEuMSwgcnkgKiAxLjEsIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgICAgY3R4LmZpbGxTdHlsZSA9IHJnYihjLm1hcCgodikgPT4gTWF0aC5taW4oMSwgdiAqIGspKSk7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByeCwgcnksIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgLy8gYSBoaWdobGlnaHQgY3Jlc2NlbnQgb24gdGhlIGxpdCBzaWRlIHNvIGVhY2ggc3RvbmUgcmVhZHMgYXMgYSBidW1wXG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMjU1LDI1NSwyNTUsJHtvLmdsb3NzID8/IDAuMTh9KWA7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCAtIHJ4ICogMC4yLCB5ICsgZHkgLSByeSAqIDAuMjUsIHJ4ICogMC41LCByeSAqIDAuNCwgYSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFRZUkUgVFJFQUQgdGlsZSBmb3IgYSBsYXRoZSBjYXJyeWluZyBgY3lsVVZgOiB1IHJ1bnMgQVJPVU5EIHRoZSB0eXJlIGFuZCB2IFVQIGl0LCBzbyB0cmVhZCBzbG90cyBhcmVcbiAqICBiYXJzIGF0IGNvbnN0YW50IHUgYW5kIHRoZSBjaXJjdW1mZXJlbnRpYWwgZ3Jvb3ZlcyBhcmUgbGluZXMgYXQgY29uc3RhbnQgdi4gRHJhd24gYXMgcmF0aW9zIG9uIHdoaXRlXG4gKiAgYW5kIG11bHRpcGxpZWQgaW50byB0aGUgKGxpZnRlZCkgcnViYmVyIGNvbG91cjsgYG8uZ3Jvb3ZlYCBpcyB0aGUgZGFya2VzdCByYXRpbywga2VwdCBhYm92ZSB0aGVcbiAqICBsdW1hLTU4IGhvbGUgYmFuZCBieSB0aGUgY2FsbGVyLiBgby5zbG90c2AgYmFycyBwZXIgdGlsZSwgYG8ucmluZ3NgIGNpcmN1bWZlcmVudGlhbCBsaW5lcy4gKi9cbmZ1bmN0aW9uIHRyZWFkVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IGdyb292ZSA9IG8uZ3Jvb3ZlID8/IDAuODAsIHNsb3RzID0gby5zbG90cyA/PyAyLCByaW5ncyA9IG8ucmluZ3MgPz8gMjtcbiAgICAvLyBgYmFzZWAgaXMgdGhlIHRvbmUgdGhlIFVOLWdyaW1lZCBwYXJ0IG9mIHRoZSB0aWxlIGNhcnJpZXMsIGRlZmF1bHRpbmcgdG8gd2hpdGUgLS0gaS5lLiB0b1xuICAgIC8vIFwibGVhdmUgdGhlIHZlcnRleCBjb2xvdXIgYWxvbmVcIiwgd2hpY2ggaXMgZXZlcnkgZXhpc3RpbmcgY2FsbGVyLiBJdCBleGlzdHMgZm9yIEVOVkVMT1BFXG4gICAgLy8gUkUtQkFTSU5HOiBhIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbiwgc28gYSBwYXJ0IHRoYXQgbXVzdCByZWFkIGNsZWFuIG9yYW5nZSBpbiBvbmUgcGxhY2UgYW5kXG4gICAgLy8gZ3JleSByb2FkIGdyaW1lIGluIGFub3RoZXIgY2Fubm90IGRvIGl0IGZyb20gYSBzaW5nbGUgdmVydGV4IGNvbG91ciwgYmVjYXVzZSB0aGUgZ3JpbWUgaXNcbiAgICAvLyBISUdIRVIgaW4gYmx1ZSB0aGFuIHRoZSBvcmFuZ2UgaXMuIFRoZSB2ZXJ0ZXggY29sb3VyIGJlY29tZXMgdGhlIHBlci1jaGFubmVsIG1heGltdW0gb2YgYm90aFxuICAgIC8vIGFuZCB0aGlzIGZpbGwgcGFpbnRzIHRoZSBjbGVhbiB0b25lIGJhY2sgb3V0IG9mIGl0LlxuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgY29uc3QgZ3YgPSBNYXRoLnJvdW5kKDI1NSAqIGdyb292ZSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtndn0sJHtndn0sJHtndn0pYDtcbiAgICBjb25zdCBwaXRjaCA9IHMgLyBzbG90cywgdyA9IHBpdGNoICogKG8uc2xvdFdpZHRoID8/IDAuMTYpO1xuICAgIC8vIHRyZWFkIHNsb3RzIHNwYW4gdGhlIGJhbmQgYmV0d2VlbiB0aGUgdHdvIGVkZ2Ugc2hvdWxkZXJzICh2IDAuMTIuLjAuODggb2YgdGhlIHRpbGUpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbG90czsgaSsrKSB7IGNvbnN0IHggPSBpICogcGl0Y2ggKyBwaXRjaCAqIDAuNCArIChybmQoKSAtIDAuNSkgKiBwaXRjaCAqIDAuMTsgY3R4LmZpbGxSZWN0KHgsIHMgKiAwLjEyLCB3LCBzICogMC43Nik7IGN0eC5maWxsUmVjdCh4IC0gcywgcyAqIDAuMTIsIHcsIHMgKiAwLjc2KTsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmluZ3M7IGkrKykgeyBjb25zdCB5ID0gcyAqICgwLjIgKyAwLjYgKiAoaSArIDAuNSkgLyByaW5ncyk7IGN0eC5maWxsUmVjdCgwLCB5IC0gMS41LCBzLCAzKTsgfVxuICAgIC8vIHNpZGV3YWxsIHNoZWVuOiBhIHNvZnQgbGlnaHRlciB3YXNoIHNvIHRoZSBydWJiZXIgaXMgbm90IG9uZSBmbGF0IHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTIpLCB2ID0gMjM1ICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpOyBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC41KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0gfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIE9MRCBUWVJFIHRpbGU6IFRXTyB0eXJlIGhlaWdodHMgdGFsbCBieSBgby5waXRjaGAgbWV0cmVzIGFyb3VuZCAoY3lsVVYpLiBUaGUgdXBwZXIgaGFsZiAodiAwLjUtMSlcbiAqICBpcyBhIHRyZWFkZWQgdHlyZSwgdGhlIGxvd2VyIGhhbGYgKHYgMC0wLjUpIGEgd29ybiBTTElDSyB3aXRoIGNpcmN1bWZlcmVudGlhbCBncm9vdmVzIGFuZCBzaG9ydFxuICogIHNob3VsZGVyIHNpcGVzIG9ubHksIHNvIGEgc3RhY2sgbWl4ZXMgYmFsZCBhbmQgdHJlYWRlZCB0eXJlcyBvZmYgb25lIGNhbnZhcyBieSB2MC4gRHJhd24gYXMgUkFUSU9TXG4gKiAgYWdhaW5zdCB0aGUgdmVydGV4LWNvbG91cmVkIHJ1YmJlciBhdCBgYmFzZWAgKDIwMC8yNTUgLT4gdmVydGV4IHRvbmVzIGFyZSBhdXRob3JlZCAxLjI3NXggdGhlXG4gKiAgaW50ZW5kZWQgYWxiZWRvIHNvIGR1c3QgYW5kIHNjdWZmcyBjYW4gZ28gQlJJR0hURVIgdGhhbiB0aGUgcnViYmVyIHVuZGVyIGEgbXVsdGlwbHkgY2FudmFzKS5cbiAqICBSb3dzIGFyZSBoZWlnaHRzOiBsb3dlciBzaWRld2FsbCwgdHJlYWQgYmFuZCAodiBgby5iYW5kWzBdYC4uYG8uYmFuZFsxXWAgb2YgdGhlIHN0cmlwKSwgdXBwZXJcbiAqICBzaWRld2FsbCB3aXRoIGJlYWQgcmluZ3MgYW5kIG1vdWxkIGxpbmVzLiBXZWFyOiBhIHdhcm0gZHVzdCB3YXNoIG9uIHRoZSBsb3dlciBzaG91bGRlciwgZ3JleSBzY3VmZnNcbiAqICBvbiBib3RoIHNob3VsZGVycywgZHVzdCBjYXVnaHQgaW4gdGhlIGN1dHMsIGdyYWluIG92ZXIgZXZlcnl0aGluZy4gKi9cbmZ1bmN0aW9uIHR5cmVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyAyMDAsIGJhbmQgPSBvLmJhbmQgPz8gWzAuMjQsIDAuNzZdLCBncm9vdmUgPSBvLmdyb292ZSA/PyAwLjQ1O1xuICAgIGNvbnN0IGd2ID0gTWF0aC5yb3VuZChiYXNlICogZ3Jvb3ZlKSwgcnYgPSBNYXRoLnJvdW5kKGJhc2UgKiAwLjcpLCBtdiA9IE1hdGgucm91bmQoYmFzZSAqIDAuOSk7XG4gICAgY29uc3QgZHVzdCA9IG8uZHVzdCA/PyBbMjMyLCAyMTQsIDE5MF07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtiYXNlfSwke2Jhc2V9LCR7YmFzZX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcyAqIHMgLyA2OyBpKyspIHsgY29uc3QgdiA9IGJhc2UgKyBNYXRoLnJvdW5kKChybmQoKSAtIDAuNSkgKiAyMik7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMiwgMik7IH1cbiAgICAvLyBvbmUgdHlyZSBzdHJpcCBiZXR3ZWVuIGNhbnZhcyByb3dzIHlhICh0b3ApIGFuZCB5YiAoYm90dG9tKTsgY2FudmFzIHkgZ3Jvd3MgRE9XTiwgdiBncm93cyBVUFxuICAgIGNvbnN0IHN0cmlwID0gKHlhOiBudW1iZXIsIHliOiBudW1iZXIsIHRyZWFkZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGNvbnN0IGggPSB5YiAtIHlhLCBiMCA9IHlhICsgaCAqICgxIC0gYmFuZFsxXSksIGIxID0geWEgKyBoICogKDEgLSBiYW5kWzBdKTtcbiAgICAgIGNvbnN0IG5nID0gby5ncm9vdmVzID8/IDMsIGd3ID0gaCAqIDAuMDI0O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtndn0sJHtndn0sJHtndn0pYDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmc7IGkrKykgeyBjb25zdCB5ID0gYjAgKyAoYjEgLSBiMCkgKiAoaSArIDEpIC8gKG5nICsgMSk7IGN0eC5maWxsUmVjdCgwLCB5IC0gZ3cgLyAyLCBzLCBndyk7IH1cbiAgICAgIGNvbnN0IG5zID0gby5zaXBlcyA/PyAyLCB3ID0gcyAqIChvLnNpcGVXaWR0aCA/PyAwLjA1KTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDw9IG5nOyBrKyspIHtcbiAgICAgICAgY29uc3QgeTAgPSBrID09PSAwID8gYjAgOiBiMCArIChiMSAtIGIwKSAqIGsgLyAobmcgKyAxKSArIGd3IC8gMiwgeTEgPSBrID09PSBuZyA/IGIxIDogYjAgKyAoYjEgLSBiMCkgKiAoayArIDEpIC8gKG5nICsgMSkgLSBndyAvIDI7XG4gICAgICAgIC8vIGEgc2xpY2sga2VlcHMgb25seSBTSE9SVCBzaXBlcyBhdCB0aGUgdHdvIHNob3VsZGVyIHJvd3MsIGN1dCBpbiBmcm9tIHRoZSBiYW5kIGVkZ2VcbiAgICAgICAgY29uc3Qgb3V0ZXIgPSBrID09PSAwIHx8IGsgPT09IG5nO1xuICAgICAgICBpZiAoIXRyZWFkZWQgJiYgIW91dGVyKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgeXMwID0gdHJlYWRlZCA/IHkwIDogKGsgPT09IDAgPyB5MCA6IHkxIC0gKHkxIC0geTApICogMC40NSksIHlzMSA9IHRyZWFkZWQgPyB5MSA6IChrID09PSAwID8geTAgKyAoeTEgLSB5MCkgKiAwLjQ1IDogeTEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5zOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB4ID0gKChpICsgMC41KSAvIG5zICsgKGsgJSAyKSAqIDAuNSAvIG5zKSAqIHMgKyAocm5kKCkgLSAwLjUpICogcyAqIDAuMDYsIHNsID0gKHJuZCgpIC0gMC41KSAqIHMgKiAwLjA4O1xuICAgICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCB5czApOyBjdHgubGluZVRvKHggKyBkeCArIHcsIHlzMCk7IGN0eC5saW5lVG8oeCArIGR4ICsgdyArIHNsLCB5czEpOyBjdHgubGluZVRvKHggKyBkeCArIHNsLCB5czEpOyBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gc2hvdWxkZXIgc3RlcCBhdCB0aGUgdG9wIG9mIHRoZSBiYW5kLCBiZWFkIHJpbmdzIGFuZCBtb3VsZCBsaW5lcyBvbiB0aGUgc2lkZXdhbGxzXG4gICAgICBjb25zdCBzaCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBiMCAtIGggKiAwLjAzLCAwLCBiMCArIGggKiAwLjAyKTsgc2guYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9LDApYCk7IHNoLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2d2fSwke2d2fSwke2d2fSwwLjQ1KWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHNoOyBjdHguZmlsbFJlY3QoMCwgYjAgLSBoICogMC4wMywgcywgaCAqIDAuMDUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtydn0sJHtydn0sJHtydn0pYDsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuMDQ1LCBzLCBoICogMC4wMTIpOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC45NCwgcywgaCAqIDAuMDEyKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7bXZ9LCR7bXZ9LCR7bXZ9KWA7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjExLCBzLCAyKTsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuODgsIHMsIDIpO1xuICAgICAgLy8gd2Vhcjogd2FybSByb2FkIGR1c3Qgb24gdGhlIGxvd2VyIHNob3VsZGVyIGFuZCBzaWRld2FsbCwgZ3JleSBzY3VmZnMgb24gYm90aCBzaG91bGRlcnNcbiAgICAgIGNvbnN0IGRnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliLCAwLCB5YSArIGggKiAwLjYpOyBkZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtkdXN0WzBdfSwke2R1c3RbMV19LCR7ZHVzdFsyXX0sJHtvLmR1c3RBbHBoYSA/PyAwLjM1fSlgKTsgZGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7ZHVzdFswXX0sJHtkdXN0WzFdfSwke2R1c3RbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZGc7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjYsIHMsIGggKiAwLjQpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zY3VmZnMgPz8gMTQpOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpIDwgMC41ID8gYjAgKyAocm5kKCkgLSAwLjMpICogaCAqIDAuMDggOiBiMSArIChybmQoKSAtIDAuNykgKiBoICogMC4wOCwgciA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSksIHYgPSAyMjUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjUpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTsgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuNSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5LCByICogMi4yLCByICogMC42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbGlnaHRlcic7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IGIwICsgcm5kKCkgKiAoYjEgLSBiMCksIHYgPSA2ICsgTWF0aC5yb3VuZChybmQoKSAqIDE0KTsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke01hdGgucm91bmQodiAqIDAuOSl9LCR7TWF0aC5yb3VuZCh2ICogMC43NSl9KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAyICsgcm5kKCkgKiA2LCAyICsgcm5kKCkgKiAzKTsgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfTtcbiAgICBzdHJpcCgwLCBzIC8gMiwgdHJ1ZSk7ICAgICAgLy8gdiAwLjUuLjE6IHRyZWFkZWRcbiAgICBzdHJpcChzIC8gMiwgcywgZmFsc2UpOyAgICAgLy8gdiAwLi4wLjU6IHNsaWNrXG4gIH0pO1xufVxuXG4vKiogQSB0YXBlcmVkIGJveDogQm94R2VvbWV0cnkoMSwgaCwgMSkgd2hvc2UgeC96IGFyZSBzY2FsZWQgcGVyIHZlcnRleCBieSB0aGUgZm9vdHByaW50IGludGVycG9sYXRlZFxuICogIGZyb20gKHcwLCBkMCkgYXQgdGhlIGJvdHRvbSB0byAodzEsIGQxKSBhdCB0aGUgdG9wLiBOb3JtYWxzIHJlY29tcHV0ZWQgc28gdGhlIHNsYW50ZWQgZmFjZXMgc2hhZGVcbiAqICBmbGF0LiBgYmAgPSBbY3gsIHlCb3R0b20sIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0uICovXG5mdW5jdGlvbiBmcnVzdHVtKGI6IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBbY3gsIHkwLCBjeiwgdzAsIGQwLCB3MSwgZDEsIGhdID0gYjtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCBoLCAxKTtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSAocC5nZXRZKGkpICsgaCAvIDIpIC8gaDtcbiAgICBwLnNldFgoaSwgcC5nZXRYKGkpICogKHcwICsgKHcxIC0gdzApICogdCkpOyBwLnNldFooaSwgcC5nZXRaKGkpICogKGQwICsgKGQxIC0gZDApICogdCkpO1xuICB9XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgZy50cmFuc2xhdGUoY3gsIHkwICsgaCAvIDIsIGN6KTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogSE9ULURJUCBHQUxWQU5JU0VEIFpJTkM6IGNsb3VkeSB0b25lIGRyaWZ0LCBjcnlzdGFsbGluZSBTUEFOR0xFLCBhbmQgcnVzdCBibGVlZGluZyBmcm9tIHRoZSB3ZWxkcy5cbiAqXG4gKiBUaGlzIGV4aXN0cyBiZWNhdXNlIGBncmltZVRpbGVgIG1lYXN1cmFibHkgY2Fubm90IHNheSBgZ2FsdmFuaXNlZGAuIE1lYXN1cmVkIG9uIHRoZSBjcm93ZFxuICogYmFycmllcidzIHBsYXRlIGFnYWluc3QgaXRzIGZpcnN0IGJ1aWxkLCBvdmVyIG1hdGNoZWQgZmxhdCBwYW5lbCBjcm9wczogdGhlIHBsYXRlIHJlYWRzIG1lYW4gbHVtYVxuICogMTU3LTE1OSB3aXRoIHNkIDEyLTE2IGFuZCBhIHA1Li5wOTUgc3BhbiBvZiB+NDIsIGFuZCB0aGUgcmVuZGVyIHJlYWQgbWVhbiAxNDIgd2l0aCBzZCA4LTEwIGFuZCBhXG4gKiBzcGFuIG9mIH4yMSAtLSBoYWxmIHRoZSB0b25hbCB2YXJpYXRpb24sIGFuZCBDTElQUEVEIGF0IHRoZSB0b3AgKHA3NSA9IHA5NSA9IDE0NywgdGhlIHRpbGUgZG9pbmdcbiAqIG5vdGhpbmcgYXQgYWxsIG92ZXIgdGhlIHVwcGVyIGhhbGYgb2YgdGhlIHBhbmVsKS4gQSBnYWx2YW5pc2VkIHN1cmZhY2UgaXMgbm90IGRpcnQgb24gZ3JleSBwYWludDpcbiAqIGl0IGlzIGEgZnJvemVuIGNyeXN0YWwgc3RydWN0dXJlLCBicmlnaHQgaXJyZWd1bGFyIHNwYW5nbGUgZmFjZXRzIHN0YW5kaW5nIEFCT1ZFIHRoZSBiYXNlIHRvbmVcbiAqIHdpdGggZHVsbCBncmV5LWJyb3duIGRyaWZ0IGJldHdlZW4gdGhlbSwgYW5kIHRoZSBicmlnaHRlc3QgZmlmdGggb2YgaXQgaXMgdGhlIHBhcnQgdGhhdCByZWFkcy5cbiAqXG4gKiBBIGNhbnZhcyB0aWxlIGlzIGJvdW5kIGFzIGEgTVVMVElQTFkgbWFwLCBzbyBpdCBjYW4gb25seSBldmVyIGRhcmtlbiAtLSB3aGljaCBpcyB3aHkgdGhlIHNwcmVhZFxuICogd2FzIG9uZS1zaWRlZC4gVGhlIHRpbGUgaXMgdGhlcmVmb3JlIGF1dGhvcmVkIGFyb3VuZCBhIGBtaWRgIG11bHRpcGxpZXIgd2VsbCBiZWxvdyAxIGFuZCB0aGVcbiAqIGNhbGxlciByYWlzZXMgdGhlIGJhc2UgYWxiZWRvIGJ5IDEvbWlkOiB0aGUgc3BhbmdsZSB0aGVuIHJlYWNoZXMgYmFjayB1cCB0byB0aGUgYmFzZSB3aGlsZSB0aGVcbiAqIGRyaWZ0IGZhbGxzIGF3YXkgYmVsb3cgaXQsIGFuZCB0aGUgc3VyZmFjZSB2YXJpZXMgaW4gQk9USCBkaXJlY3Rpb25zIGFib3V0IGl0cyBtZWFuLiBBdXRob3IgdGhlXG4gKiBhbGJlZG8gZm9yIHRoYXQsIG9yIHRoZSBwcm9wIHNoaXBzIGFzIGJyaWdodCBhcyB0aGUgc3BhbmdsZSBldmVyeXdoZXJlLlxuICpcbiAqIGBydXN0QmFuZGAgYmxlZWRzIGEgZGVzYXR1cmF0ZWQgYnJvd24gZG93biBmcm9tIHRoZSB0b3AgYW5kIHVwIGZyb20gdGhlIGJvdHRvbSAtLSB0aGUgdHdvIHBsYWNlcyBhXG4gKiBiYXJyaWVyJ3Mgd2VsZHMgYXJlIC0tIGJlY2F1c2UgcnVzdCBvbiBnYWx2YW5pc2VkIHN0ZWVsIHN0YXJ0cyBhdCBhIHdlbGQsIHdoZXJlIHRoZSB6aW5jIHdhc1xuICogYnVybnQgb2ZmLCBhbmQgUlVOUy4gVGhlIHBsYXRlJ3MgcnVzdCBtZWFzdXJlcyAjODI2ZTU4IG92ZXIgMi4yJSBvZiB0aGUgZnJhbWU6IGEgd2FzaCwgbm90IHRoZVxuICogb3JhbmdlIHBvbGthIGRvdHMgYSBibG90Y2ggdGlsZSBnaXZlcy5cbiAqL1xuZnVuY3Rpb24gemluY1RpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBtaWQgPSBvLm1pZCA/PyAwLjg4LCBsbyA9IG8ubG8gPz8gMC43NDtcbiAgICBjb25zdCBnID0gKHY6IG51bWJlcikgPT4geyBjb25zdCBiID0gTWF0aC5yb3VuZCgyNTUgKiB2KTsgcmV0dXJuIGByZ2IoJHtifSwke2J9LCR7Yn0pYDsgfTtcbiAgICBjdHguZmlsbFN0eWxlID0gZyhtaWQpOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gY2xvdWR5IGRyaWZ0OiBicm9hZCBzb2Z0IGJsb2JzIGJvdGggYWJvdmUgYW5kIGJlbG93IHRoZSBtaWQsIHRoZSBtb3R0bGUgYSBkaXAgbGVhdmVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5jbG91ZHMgPz8gNjApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDYgKyBybmQoKSAqIDAuMTYpO1xuICAgICAgY29uc3QgdXAgPSBybmQoKSA8IDAuNTtcbiAgICAgIGNvbnN0IHYgPSB1cCA/IG1pZCArICgxIC0gbWlkKSAqICgwLjM1ICsgcm5kKCkgKiAwLjUpIDogbG8gKyAobWlkIC0gbG8pICogcm5kKCk7XG4gICAgICBjb25zdCBnciA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke28uY2xvdWRBbHBoYSA/PyAwLjI4fSlgKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgwLDAsMCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gU1BBTkdMRTogaXJyZWd1bGFyIGJyaWdodCBjcnlzdGFsIGZhY2V0cywgYW5ndWxhciByYXRoZXIgdGhhbiByb3VuZCwgdXAgdG8gdGhlIGJhc2UgdG9uZS5cbiAgICAvLyBTbWFsbCBhbmQgZGVuc2UgLS0gbGFyZ2Ugb25lcyByZWFkIGFzIHNwbGFzaGVzIG9mIHdoaXRlIHBhaW50LCB3aGljaCBpcyB0aGUgZmFpbHVyZSBtb2RlIGFcbiAgICAvLyBibG90Y2ggdGlsZSBmYWxscyBpbnRvLlxuICAgIC8vIENMVVNURVJFRCwgbm90IHNjYXR0ZXJlZC4gVW5pZm9ybWx5IHNwcmVhZCBmYWNldHMgcmVhZCBhcyBzbm93IG9yIGR1c3Qgc3BlY2tzIC0tIGlzb2xhdGVkXG4gICAgLy8gYnJpZ2h0IGRvdHMgb24gYSBzbW9vdGggZmllbGQsIHdoaWNoIGlzIHdoYXQgdGhlIHNlY29uZCB0dW5pbmcgc2hpcHBlZCBhbmQgd2hhdCB0aGUgcGxhdGUgaGFzXG4gICAgLy8gbm9uZSBvZi4gUmVhbCBzcGFuZ2xlIGJsb29tczogdGhlIGNyeXN0YWxzIG51Y2xlYXRlIHRvZ2V0aGVyLCBzbyB0aGUgc3VyZmFjZSBpcyBwYXRjaGVzIG9mXG4gICAgLy8gZGVuc2UgYnJpZ2h0IGZhY2V0cyB3aXRoIHF1aWV0IGdyZXkgYmV0d2VlbiB0aGVtLiBgc3BhbmdsZUNsdXN0ZXJzYCBjZW50cmVzIGNhcnJ5XG4gICAgLy8gYDEgLSBzcGFuZ2xlTG9vc2VgIG9mIHRoZSBmYWNldHMsIGRpc3RyaWJ1dGVkIHNxcnQtdW5pZm9ybWx5IHNvIGVhY2ggYmxvb20gaXMgZGVuc2UgYXQgaXRzXG4gICAgLy8gbWlkZGxlIGFuZCB0aGlucyBhdCBpdHMgZWRnZTsgdGhlIHJlc3Qgc3RheSBzY2F0dGVyZWQgc28gdGhlIGZpZWxkIGlzIG5ldmVyIGJhbGQuXG4gICAgY29uc3QgY2wgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBvLnNwYW5nbGVDbHVzdGVycyA/PyAwIH0sICgpID0+IFtybmQoKSAqIHMsIHJuZCgpICogcywgcyAqICgwLjA0ICsgcm5kKCkgKiAwLjEwKV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BhbmdsZSA/PyA1MjApOyBpKyspIHtcbiAgICAgIGxldCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzO1xuICAgICAgaWYgKGNsLmxlbmd0aCAmJiBybmQoKSA+IChvLnNwYW5nbGVMb29zZSA/PyAwLjI1KSkge1xuICAgICAgICBjb25zdCBjID0gY2xbKHJuZCgpICogY2wubGVuZ3RoKSB8IDBdLCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjWzJdO1xuICAgICAgICB4ID0gY1swXSArIE1hdGguY29zKGEpICogZDsgeSA9IGNbMV0gKyBNYXRoLnNpbihhKSAqIGQ7XG4gICAgICB9XG4gICAgICBjb25zdCByID0gcyAqICgoby5zcGFuZ2xlTWluID8/IDAuMDA0KSArIE1hdGgucG93KHJuZCgpLCAyKSAqIChvLnNwYW5nbGVNYXggPz8gMC4wMTMpKTtcbiAgICAgIGNvbnN0IHYgPSBtaWQgKyAoMSAtIG1pZCkgKiAoMC41ICsgcm5kKCkgKiAwLjUpO1xuICAgICAgY29uc3QgayA9IDQgKyBNYXRoLmZsb29yKHJuZCgpICogMyk7XG4gICAgICBjb25zdCBhMCA9IHJuZCgpICogTWF0aC5QSSAqIDI7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHsoby5zcGFuZ2xlQWxwaGEgPz8gMC4yKSArIHJuZCgpICogKG8uc3BhbmdsZUFscGhhVmFyID8/IDAuMzUpfSlgO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGs7IGorKykge1xuICAgICAgICAgIGNvbnN0IGEgPSBhMCArIGogKiBNYXRoLlBJICogMiAvIGssIHJyID0gciAqICgwLjU1ICsgcm5kKCkgKiAwLjc1KTtcbiAgICAgICAgICBjb25zdCBweCA9IHggKyBkeCArIE1hdGguY29zKGEpICogcnIsIHB5ID0geSArIGR5ICsgTWF0aC5zaW4oYSkgKiByciAqIDAuODtcbiAgICAgICAgICBpZiAoaiA9PT0gMCkgY3R4Lm1vdmVUbyhweCwgcHkpOyBlbHNlIGN0eC5saW5lVG8ocHgsIHB5KTtcbiAgICAgICAgfVxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGRhcmsgZHJpcCBzdHJlYWtzIHJ1bm5pbmcgZG93bjogd2VhdGhlcmluZywgYW5kIHdoYXQgZ2l2ZXMgYSBmbGF0IHBhbmVsIGEgdmVydGljYWwgcmVhZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3RyZWFrcyA/PyAzMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMCwgeTAgPSBybmQoKSAqIHMgKiAwLjUsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjcpO1xuICAgICAgY29uc3QgdiA9IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpICogMC42LCBhID0gMC4wNiArIHJuZCgpICogMC4xNDtcbiAgICAgIGNvbnN0IGdyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkwLCAwLCB5MCArIGxlbik7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sMClgKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgwLjI1LCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke2F9KWApO1xuICAgICAgZ3IuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3I7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIHkwLCB3LCBsZW4pO1xuICAgIH1cbiAgICAvLyBGSU5FIEdSQUlOIGFuZCBTQ1JBVENIRVMuIE1lYXN1cmVkIGFnYWluc3QgdGhlIHBsYXRlIGF0IG1hdGNoZWQgbWFnbmlmaWNhdGlvbiwgdGhpcyBpcyB0aGVcbiAgICAvLyBsYXllciB0aGUgZmlyc3QgdHVuaW5nIHdhcyBtaXNzaW5nIGVudGlyZWx5OiB0aGUgcGxhdGUncyB6aW5jIGlzIHNjcmF0Y2h5IGF0IDEtMiBweCBldmVyeXdoZXJlXG4gICAgLy8gLS0gZHJhd2luZyBtYXJrcywgaGFuZGxpbmcgc2N1ZmZzLCB0aGUgY3J5c3RhbCBib3VuZGFyaWVzIHRoZW1zZWx2ZXMgLS0gYW5kIHdpdGhvdXQgaXQgdGhlXG4gICAgLy8gZHJpZnQgYW5kIHRoZSBzcGFuZ2xlIHJlYWQgYXMgc29mdCBzbm93IG9uIHNtb290aCBncmV5IGhvd2V2ZXIgd2VsbCB0aGUgSElTVE9HUkFNIG1hdGNoZXMuIFR3b1xuICAgIC8vIGNyb3BzIHdpdGggaWRlbnRpY2FsIG1lYW4sIHNkIGFuZCBwZXJjZW50aWxlcyBjYW4gbG9vayBub3RoaW5nIGFsaWtlOyB0aGUgc3RhdGlzdGljIHRoYXRcbiAgICAvLyBzZXBhcmF0ZXMgdGhlbSBpcyBzcGF0aWFsIGZyZXF1ZW5jeSwgc28gdHVuZSB0aGlzIGJ5IGV5ZSBhZ2FpbnN0IGEgbWF0Y2hlZCBjcm9wLCBub3QgYnkgc2QuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogMiwgaCA9IDEgKyBybmQoKSAqIDI7XG4gICAgICBjb25zdCB1cCA9IHJuZCgpIDwgMC41O1xuICAgICAgY29uc3QgdiA9IHVwID8gbWlkICsgKDEgLSBtaWQpICogKDAuNCArIHJuZCgpICogMC42KSA6IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7MC4xMCArIHJuZCgpICogMC4zMH0pYDtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5ICsgZHksIHcsIGgpO1xuICAgIH1cbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zY3JhdGNoZXMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjAwNiArIHJuZCgpICogMC4wNTUpLCBhID0gKHJuZCgpIC0gMC41KSAqIDAuNyArIE1hdGguUEkgLyAyO1xuICAgICAgY29uc3QgdXAgPSBybmQoKSA8IDAuNDU7XG4gICAgICBjb25zdCB2ID0gdXAgPyBtaWQgKyAoMSAtIG1pZCkgKiAoMC41ICsgcm5kKCkgKiAwLjUpIDogbG8gKyAobWlkIC0gbG8pICogcm5kKCkgKiAwLjg7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwkezAuMTAgKyBybmQoKSAqIDAuMjh9KWA7XG4gICAgICBjdHgubGluZVdpZHRoID0gMC43ICsgcm5kKCkgKiAxLjY7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCB5ICsgZHkpO1xuICAgICAgICBjdHgubGluZVRvKHggKyBkeCArIE1hdGguY29zKGEpICogbGVuLCB5ICsgZHkgKyBNYXRoLnNpbihhKSAqIGxlbik7IGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUlVTVCBmcm9tIHRoZSB3ZWxkczogYSB3YXNoIGluIHRoZSB0b3AgYW5kIGJvdHRvbSBiYW5kcywgcGx1cyBydW5zIHRyYWlsaW5nIG91dCBvZiBpdFxuICAgIGlmIChvLnJ1c3QpIHtcbiAgICAgIGNvbnN0IGMgPSBvLnJ1c3QsIGJhbmQgPSBvLnJ1c3RCYW5kID8/IDAuMTY7XG4gICAgICBjb25zdCByZ2JzID0gYCR7TWF0aC5yb3VuZCgyNTUgKiBjWzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIGNbMV0pfSwke01hdGgucm91bmQoMjU1ICogY1syXSl9YDtcbiAgICAgIC8vIHRoZSB0d28gYmFuZHMgYXJlIFNFUEFSQVRFOiBvbiBhIGJhcnJpZXIgdGhlIGdyb3VuZCBlbmQgY2FycmllcyB0aGUgZmVldCwgdGhlIHN0dWIgd2VsZHMgYW5kXG4gICAgICAvLyBldmVyeSBydW4gb2ZmIHRoZW0sIGFuZCB0aGUgdG9wIGVuZCBjYXJyaWVzIG9ubHkgdGhlIHJhaWwncyBvd24gd2VsZHMuIE9uZSBzeW1tZXRyaWMgYmFuZFxuICAgICAgLy8gd2lkZSBlbm91Z2ggdG8gcmVhY2ggdGhlIHJhaWwgd2VsZHMgYXQgdiA9IDAuMjYgYWxzbyB3YXNoZXMgdGhlIHdob2xlIHVwcGVyIHRoaXJkIG9mIGV2ZXJ5XG4gICAgICAvLyBwYW5lbCwgd2hpY2ggdGhlIHBsYXRlIGRvZXMgbm90IGhhdmUuXG4gICAgICBmb3IgKGNvbnN0IFtlZGdlLCBkaXIsIGJdIG9mIFtbMCwgMSwgby5ydXN0QmFuZFRvcCA/PyBiYW5kXSwgW3MsIC0xLCBiYW5kXV0gYXMgbnVtYmVyW11bXSkge1xuICAgICAgICBjb25zdCBnciA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBlZGdlLCAwLCBlZGdlICsgZGlyICogcyAqIGIpO1xuICAgICAgICBnci5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2JzfSwke28ucnVzdFdhc2ggPz8gMC4zMH0pYCk7IGdyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYnN9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBncjsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ydXN0UnVucyA/PyAyMik7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDE0O1xuICAgICAgICBjb25zdCB0b3AgPSBybmQoKSA8IDAuNTtcbiAgICAgICAgY29uc3QgeTAgPSB0b3AgPyAwIDogcyAtIHMgKiBiYW5kICogKDAuMyArIHJuZCgpKTtcbiAgICAgICAgY29uc3QgbGVuID0gcyAqICgwLjEwICsgcm5kKCkgKiAwLjMyKTtcbiAgICAgICAgY29uc3QgZ3IgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwICsgbGVuKTtcbiAgICAgICAgZ3IuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdic30sJHswLjE4ICsgcm5kKCkgKiAwLjMyfSlgKTsgZ3IuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdic30sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIHkwLCB3LCBsZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY2Fub3B5LW1vZHVsZSBoZWxwZXJzXG4gKiBUaGUgZml2ZSBDQU5PUFkgTU9EVUxFUyAtLSBuaXBhIHRoYXRjaCwgdmV0aXZlciB0aGF0Y2gsIHNwbGl0IGJhbWJvbywgY29ycnVnYXRlZCBtZXRhbCxcbiAqIHRhcnBhdWxpbiAtLSBhcmUgb25lIGZhbWlseTogZm91ciBjb3JuZXIgcG9zdHMgaW5zaWRlIGEgNCB4IDQgbSBtb2R1bGUsIGEgaGVhZCBmcmFtZSwgYW5kIGEgcm9vZlxuICogd2hvc2UgbWF0ZXJpYWwgaXMgdGhlIHdob2xlIGlkZW50aXR5LiBXaGF0IHRoZXkgbmVlZCBiZXlvbmQgdGhlIHN0cmVldC1wcm9wIHZvY2FidWxhcnkgaXMgYVxuICogcm9vZmluZyB0aWxlIHBlciBtYXRlcmlhbCBhbmQgdGhlIGN1bG0gbWFwcGluZyBhIHJvdW5kIGJhbWJvbyBwb2xlIHdhbnRzLlxuICpcbiAqIGBjdWxtVVZgLCBgZ3JhaW5MaW5lc2AsIGB3ZWF0aGVyUGF0Y2hlc2AsIGBtb3VsZENsdXN0ZXJzYCBhbmQgYGN1bG1UaWxlYCBhcmUgcG9ydGVkIFZFUkJBVElNIGZyb21cbiAqIHNjcmF0Y2gvX2ZlbmNlL2ZlbmNlLmhlbHBlcnMudG1wbCwgd2hlcmUgdGhleSB3ZXJlIHdyaXR0ZW4gZm9yIHRoZSBiYW1ib28gZmVuY2UgcGFuZWwgYW5kIHdoZXJlXG4gKiB0aGUgcmVhc29uaW5nIGJlaGluZCBldmVyeSBudW1iZXIgaXMgcmVjb3JkZWQuIFRoZXkgYXJlIGNvcGllZCByYXRoZXIgdGhhbiBzaGFyZWQgYmVjYXVzZSB0aGUgdHdvXG4gKiBmYW1pbGllcyBrZWVwIHNlcGFyYXRlIHRlbXBsYXRlIHNldHM7IGEgdGhpcmQgZmFtaWx5IHdhbnRpbmcgdGhlbSBzaG91bGQgbW92ZSB0aGVtIHVwIGludG9cbiAqIGhlbHBlcnMudG1wbCByYXRoZXIgdGhhbiBjb3B5IHRoZW0gYSBzZWNvbmQgdGltZS5cbiAqL1xuXG4vKiogQ1VMTSBVVnM6IHUgYXJvdW5kIHRoZSBjaXJjdW1mZXJlbmNlIGFuZCB2IGFsb25nIHRoZSBsZW5ndGgsIGJvdGggaW4gbWV0cmVzIG92ZXIgYHNjYWxlYCwgc28gYVxuICogIGN1bG0gdGlsZSdzIG5vZGUgcmluZ3MgY3Jvc3MgdGhlIGN1bG0gYXQgcmVhbCBzcGFjaW5nIHdoaWNoZXZlciB3YXkgdGhlIGN5bGluZGVyIGlzIHRoZW4gcm90YXRlZC5cbiAqICBBcHBseSBCRUZPUkUgcm90YXRlL3RyYW5zbGF0ZS4gYHZPZmZgIHBoYXNlcyB0aGUgdGlsZSBhbG9uZyB0aGUgY3VsbSBzbyBubyB0d28gY3VsbXMgKG9yIGEgY29yZFxuICogIGNvbGxhcikgcmluZyBhdCB0aGUgc2FtZSBzdGF0aW9uLiAqL1xuZnVuY3Rpb24gY3VsbVVWKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCByOiBudW1iZXIsIGg6IG51bWJlciwgc2NhbGU6IG51bWJlciwgdk9mZiA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gIGNvbnN0IGt1ID0gKDIgKiBNYXRoLlBJICogcikgLyBzY2FsZSwga3YgPSBoIC8gc2NhbGU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIGt1LCB1di5nZXRZKGkpICoga3YgKyB2T2ZmKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBGaW5lIGxvbmdpdHVkaW5hbCBncmFpbiBiZXR3ZWVuIHkwIGFuZCB5MSBhY3Jvc3MgYSBiYW5kIHgwLi54MTogbWFueSBoYWlybGluZXMsIG1vc3RseSBhIGRhcmtcbiAqICBmaWJyZSB0b25lLCBhIGZldyBibGVhY2hlZCwgc28gdGhlIHN1cmZhY2UgcmVhZHMgYXMgZmlicm91cyBiYW1ib28gcmF0aGVyIHRoYW4gcGFpbnQuICovXG5mdW5jdGlvbiBncmFpbkxpbmVzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBybmQ6ICgpID0+IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgbjogbnVtYmVyLCBkYXJrOiBzdHJpbmcsIGxpZ2h0OiBzdHJpbmcsIGFNYXg6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykge1xuICAgIGNvbnN0IHggPSB4MCArIHJuZCgpICogKHgxIC0geDApLCBhID0gMC4wNCArIHJuZCgpICogYU1heCwgdyA9IHJuZCgpIDwgMC43NSA/IDEgOiAxLjY7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cm5kKCkgPCAwLjcyID8gZGFyayA6IGxpZ2h0fSwke2EudG9GaXhlZCgzKX0pYDtcbiAgICBjdHguZmlsbFJlY3QoeCwgeTAsIHcsIHkxIC0geTApO1xuICB9XG59XG5cbi8qKiBTb2Z0IGNsb3VkeSB3ZWF0aGVyaW5nIGFsb25nIHRoZSBmaWJyZSBkaXJlY3Rpb246IGxlbmd0aHdpc2UgcGF0Y2hlcyBvZiB3YXJtIGJyb3duLWdyZXkgKG9sZFxuICogIGxpZ25pbiBzaG93aW5nIHRocm91Z2ggdGhlIGJsZWFjaCkgYW5kIG9mIG5lYXItd2hpdGUgKHN1bi1ibGVhY2hlZCBmYWNlcyksIHNvIHRoZSB0b25lIGRyaWZ0c1xuICogIHRoZSB3YXkgd2VhdGhlcmVkIGJhbWJvbyBkb2VzIGluc3RlYWQgb2Ygc2l0dGluZyBhdCBvbmUgZ3JleS4gVmVydGljYWwgPSBhbG9uZyB0aGUgZmlicmUuICovXG5mdW5jdGlvbiB3ZWF0aGVyUGF0Y2hlcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcm5kOiAoKSA9PiBudW1iZXIsIHM6IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgbjogbnVtYmVyLCB3YXJtQTogbnVtYmVyLCBibGVhY2hBOiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICBjb25zdCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMTIgKyBybmQoKSAqIDAuNDUpLCB3YXJtID0gcm5kKCkgPCAwLjU7XG4gICAgY29uc3QgYyA9IHdhcm0gPyAnMTEyLDEwMCw4OCcgOiAnMjU1LDI1NSwyNTUnLCBhID0gd2FybSA/IHdhcm1BICogKDAuNCArIHJuZCgpICogMC42KSA6IGJsZWFjaEEgKiAoMC40ICsgcm5kKCkgKiAwLjYpO1xuICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHksIDAsIHkgKyBsZW4pO1xuICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2N9LDApYCk7IGcyLmFkZENvbG9yU3RvcCgwLjM1LCBgcmdiYSgke2N9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjY1LCBgcmdiYSgke2N9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2N9LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgwLCB5ICsgZHksIHgxIC0geDAsIGxlbik7XG4gIH1cbn1cblxuLyoqIE1vdWxkOiBjbHVzdGVycyBvZiBzbWFsbCBkYXJrIHNwZWNrcyAoYSBmZXcgZG96ZW4gZWFjaCksIHRoZSB3YXkgYmxhY2sgbW91bGQgc2l0cyBvbiBvdXRkb29yXG4gKiAgYmFtYm9vIC0tIGRlbnNlIGF0IGEgZmV3IHNwb3RzLCBhYnNlbnQgZWxzZXdoZXJlLiBBbHBoYSBjYXBwZWQgc28gdGhlIGRhcmtlc3Qgc3BlY2sgb3ZlciB0aGVcbiAqICBtZWFzdXJlZCBhbGJlZG8gc3RheXMgd2VsbCBjbGVhciBvZiB0aGUgaG9sZSBnYXRlJ3MgbHVtYSA1OC4gV3JhcHMgaW4geS4gKi9cbmZ1bmN0aW9uIG1vdWxkQ2x1c3RlcnMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJuZDogKCkgPT4gbnVtYmVyLCBzOiBudW1iZXIsIHNwb3RzOiBudW1iZXJbXVtdLCByeDogbnVtYmVyLCByeTogbnVtYmVyLCBuOiBudW1iZXIsIGFNYXg6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGNvbnN0IFtjeCwgY3ldIG9mIHNwb3RzKSB7XG4gICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY3gsIGN5LCAwLCBjeCwgY3ksIE1hdGgubWF4KHJ4LCByeSkgKiAwLjgpO1xuICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyOCwyNiwyMiwkeyhhTWF4ICogMC45KS50b0ZpeGVkKDMpfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI4LDI2LDIyLDApJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4LCBjeSArIGR5LCByeCwgcnksIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gY3ggKyAocm5kKCkgKyBybmQoKSAtIDEpICogcngsIHkgPSBjeSArIChybmQoKSArIHJuZCgpIC0gMSkgKiByeTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgyOCwyNiwyMiwkeygwLjA4ICsgcm5kKCkgKiBhTWF4KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIDIsIGggPSAxICsgcm5kKCkgKiAzO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCB3LCBoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIENVTE0gdGlsZSBmb3IgdGhlIHdob2xlLWJhbWJvbyBwb3N0IGFuZCByYWlsczogeCBydW5zIEFST1VORCB0aGUgY3VsbSwgeSBBTE9ORyBpdCAoc2VlIGN1bG1VViksXG4gKiAgMC42IG0gb2YgY3VsbSBwZXIgdGlsZS4gVHdvIG5vZGUgcmluZ3MgcGVyIHRpbGUgYXQgaXJyZWd1bGFyIHN0YXRpb25zIC0tIGEgZGFyayBncm9vdmUgdW5kZXIgYVxuICogIHBhbGUgcmFpc2VkIHJpZGdlLCB0aGUgZ3JhaW4gYnJlYWtpbmcgYXQgZWFjaCAtLSB3aXRoIGZpbmUgbG9uZ2l0dWRpbmFsIGdyYWluIGJldHdlZW4gdGhlbSwgYVxuICogIGxvbmcgZHJ5aW5nIHNwbGl0LCBsZW5ndGh3aXNlIHdlYXRoZXJpbmcgcGF0Y2hlcyBhbmQgYmxhY2sgbW91bGQgZ2F0aGVyZWQganVzdCBiZWxvdyBlYWNoIG5vZGUsXG4gKiAgYXMgaW4gdGhlIHBsYXRlJ3MgcG9zdCBhbmQgcmFpbCBjcm9wcy4gQSBtdWx0aXBsaWVyIG9uIHRoZSBtZWFzdXJlZCBjdWxtIGdyZXkuICovXG5mdW5jdGlvbiBjdWxtVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBEQVJLID0gJzkyLDc4LDYyJywgTElHSFQgPSAnMjU1LDI1NSwyNTUnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2YwZWZlYyc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBhIHNvZnQgdG9uZSBkcmlmdCBhcm91bmQgdGhlIGN1bG0sIHNvIHRoZSByb3VuZCBpcyBub3Qgb25lIGZsYXQgdmFsdWVcbiAgICBjb25zdCBnYSA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBzLCAwKTtcbiAgICBnYS5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMTAwLDkyLDg0LDAuMTIpJyk7IGdhLmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTApJyk7IGdhLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMDAsOTIsODQsMC4xMiknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ2E7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgMTQsIDAuMTIsIDAuMzApO1xuICAgIC8vIG5vZGUgc3RhdGlvbnM6IHR3byBwZXIgdGlsZSwgaXJyZWd1bGFyLCBuZXZlciB3aXRoaW4gMC4xOCBvZiBlYWNoIG90aGVyIG9yIHRoZSB3cmFwXG4gICAgY29uc3Qgbm9kZXMgPSBbcyAqICgwLjIwICsgcm5kKCkgKiAwLjEwKSwgcyAqICgwLjY2ICsgcm5kKCkgKiAwLjEyKV07XG4gICAgLy8gZ3JhaW4gaW4gc2VnbWVudHMgYmV0d2VlbiB0aGUgbm9kZXMgc28gaXQgYnJlYWtzIGF0IGVhY2ggcmluZ1xuICAgIGNvbnN0IHN0YXRpb25zID0gWzAsIC4uLm5vZGVzLCBzXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSArIDEgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykgZ3JhaW5MaW5lcyhjdHgsIHJuZCwgMCwgcywgc3RhdGlvbnNbaV0sIHN0YXRpb25zW2kgKyAxXSwgMjYwLCBEQVJLLCBMSUdIVCwgMC4yNik7XG4gICAgLy8gYSBjb3VwbGUgb2YgbG9uZyBkcnlpbmcgc3BsaXRzIGFsb25nIHRoZSBmaWJyZVxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMjsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMjUgKyBybmQoKSAqIDAuNSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzgsMzIsMjYsMC41NSknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCAxLjQsIGxlbik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xOCknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCArIDEuNCwgeSArIGR5LCAxLCBsZW4pO1xuICAgIH1cbiAgICAvLyB0aGUgbm9kZSByaW5nc1xuICAgIGZvciAoY29uc3QgeSBvZiBub2Rlcykge1xuICAgICAgY29uc3QgZ3MgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSAtIHMgKiAwLjAzLCAwLCB5KTtcbiAgICAgIGdzLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw1MCw0MCwwKScpOyBncy5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNTAsNDAsMC4yMiknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnczsgY3R4LmZpbGxSZWN0KDAsIHkgLSBzICogMC4wMywgcywgcyAqIDAuMDMpOyAgICAgICAgICAvLyBzaGFkZSB1cCB0byB0aGUgcmluZ1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDUyLDQ0LDM2LDAuNjIpJzsgY3R4LmZpbGxSZWN0KDAsIHksIHMsIDIuNSk7ICAgICAgICAvLyB0aGUgZ3Jvb3ZlXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4zNCknOyBjdHguZmlsbFJlY3QoMCwgeSArIDIuNSwgcywgNCk7IC8vIHRoZSByYWlzZWQgc2hlYXRoIHJpZGdlXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNjAsNTAsNDAsMC4zMCknOyBjdHguZmlsbFJlY3QoMCwgeSArIDYuNSwgcywgMS41KTsgIC8vIGl0cyBsb3dlciBlZGdlXG4gICAgICBjb25zdCBnZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5ICsgOCwgMCwgeSArIHMgKiAwLjA1KTtcbiAgICAgIGdkLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw1MCw0MCwwLjIwKScpOyBnZC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNTAsNDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnZDsgY3R4LmZpbGxSZWN0KDAsIHkgKyA4LCBzLCBzICogMC4wNSk7XG4gICAgfVxuICAgIC8vIG1vdWxkIGdhdGhlcnMganVzdCBiZWxvdyB0aGUgbm9kZXMgYW5kIGluIGEgY291cGxlIG9mIGxvb3NlIHBhdGNoZXNcbiAgICBjb25zdCBzcG90czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAoY29uc3QgeSBvZiBub2RlcykgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHNwb3RzLnB1c2goW3JuZCgpICogcywgeSArIHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSldKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykgc3BvdHMucHVzaChbcm5kKCkgKiBzLCBybmQoKSAqIHNdKTtcbiAgICBtb3VsZENsdXN0ZXJzKGN0eCwgcm5kLCBzLCBzcG90cywgcyAqIDAuMTAsIHMgKiAwLjA2LCA5MCwgMC4zMCk7XG4gIH0pO1xufVxuXG5cbi8qKlxuICogVEhBVENIIHRpbGUsIGZvciBhIHJvb2YgbWFwcGVkIHdpdGggV09STEQgVVZzIHNvIHUgcnVucyBhbG9uZyB0aGUgcmlkZ2UgYW5kIHYgdXAgdGhlIHNsb3BlLlxuICpcbiAqIFRoYXRjaCBpcyBsYWlkIGluIENPVVJTRVM6IGVhY2ggY291cnNlIGlzIGEgYnVuZGxlIG9mIHN0ZW1zIHBlZ2dlZCB0byBhIHB1cmxpbiB3aXRoIGl0cyBidXR0c1xuICogaGFuZ2luZyBvdmVyIHRoZSBjb3Vyc2UgYmVsb3csIHNvIHdoYXQgYSB2aWV3ZXIgYWN0dWFsbHkgcmVzb2x2ZXMgYXQgcHJvcCBkaXN0YW5jZSBpcyBhIHN0YWNrIG9mXG4gKiBob3Jpem9udGFsIGJhbmRzIHdpdGggYSBzaGFkb3cgbGluZSB1bmRlciBlYWNoIGJ1dHQsIGFuZCBhIGZpYnJlIHRleHR1cmUgcnVubmluZyBkb3duIHRoZSBzbG9wZVxuICogaW5zaWRlIHRoZW0uIE1vZGVsbGluZyB0aGUgc3RlbXMgaXMgd2hhdCB0aGUgcmVnaXN0cnkgbm90ZXMgZm9yYmlkOyB0aGlzIGlzIHdoZXJlIHRoYXQgZGV0YWlsXG4gKiBnb2VzIGluc3RlYWQuXG4gKlxuICogT25lIHRpbGUgaXMgYGNvdXJzZXNgIGNvdXJzZXMgdGFsbC4gVGhlIGtub2JzIGFyZSB3aGF0IHNlcGFyYXRlcyB0aGUgdHdvIHRoYXRjaGVzIG9uIHRoZSBwbGF0ZXM6XG4gKiAgIG5pcGEgICAgIGJyb2FkIGZsYXQgcGFsbSBibGFkZXMgLS0gZmV3IHdpZGUgc3Ryb2tlcyAoYHN0ZW1XYCAzLTcgcHgpLCBhIHdpZGUgdG9uYWwgYHNwcmVhZGAsXG4gKiAgICAgICAgICAgIGEgZGVlcGx5IFJBR0dFRCBidXR0IGxpbmUgYW5kIG9jY2FzaW9uYWwgbWlzc2luZyBibGFkZXMuXG4gKiAgIHZldGl2ZXIgIGNvbWJlZCBncmFzcyAtLSBodW5kcmVkcyBvZiBoYWlybGluZXMsIGEgbmFycm93IHNwcmVhZCwgYW4gYWxtb3N0IHN0cmFpZ2h0IGJ1dHQuXG4gKiBgbW9zc2AgbXVsdGlwbGllcyBhIGdyZWVuIGNhc3QgaW50byBzY2F0dGVyZWQgcGF0Y2hlczogdGhlIHRpbGUgaXMgYSBNVUxUSVBMSUVSIG9uIGEgcGFsZSBzdHJhd1xuICogYWxiZWRvLCBhbmQgYSBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4sIHNvIGdyZWVuIGhhcyB0byBhcnJpdmUgYXMgXCJsZXNzIHJlZCBhbmQgYmx1ZVwiIGFuZCBuZXZlclxuICogYXMgYSBwYWludGVkIGdyZWVuLiBOb3RoaW5nIGhlcmUgZ29lcyBiZWxvdyAwLjQyIG9mIHRoZSBhbGJlZG8sIHdoaWNoIGtlZXBzIHRoZSBkYXJrZXN0IHRleGVsIG9mXG4gKiBhIHN0cmF3IGF0IGx1bWEgfjE1MCB3ZWxsIGNsZWFyIG9mIHRoZSBzaWxob3VldHRlIGdhdGUncyBiYWNrZHJvcCBiYW5kLlxuICovXG5mdW5jdGlvbiB0aGF0Y2hUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgbmM6IG51bWJlciA9IG8uY291cnNlcyA/PyA0LCBjaCA9IHMgLyBuYztcbiAgICBjb25zdCBzdGVtczogbnVtYmVyID0gby5zdGVtcyA/PyAyNjAsIHNwcmVhZDogbnVtYmVyID0gby5zcHJlYWQgPz8gMC4xMjtcbiAgICBjb25zdCB3TWluOiBudW1iZXIgPSBvLnN0ZW1XPy5bMF0gPz8gMSwgd01heDogbnVtYmVyID0gby5zdGVtVz8uWzFdID8/IDI7XG4gICAgY29uc3QgcmFnZ2VkOiBudW1iZXIgPSBvLnJhZ2dlZCA/PyAwLjA2OyAgICAgICAgICAgICAgICAgLy8gYnV0dC1saW5lIHdhdmluZXNzLCBhcyBhIHNoYXJlIG9mIGNoXG4gICAgY29uc3QgW3NyLCBzZywgc2JdOiBudW1iZXJbXSA9IG8uc3RlbVJnYiA/PyBbMTIwLCAxMDYsIDg0XTsgICAvLyB0aGUgZGFyayBibGFkZSB0aW50OyBuaXBhIGlzIGdyZXllciB0aGFuIGdyYXNzXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuXG4gICAgLy8gdGhlIGJ1dHQgbGluZSBvZiBlYWNoIGNvdXJzZSwgaml0dGVyZWQgcGVyIGNvbHVtbiBhbmQgU0hBUkVEIHdpdGggdGhlIGNvdXJzZSBhYm92ZSBzbyB0aGVcbiAgICAvLyBzaGFkb3cgYW5kIHRoZSBibGFkZXMgYWdyZWUgb24gd2hlcmUgdGhlIGVkZ2UgaXNcbiAgICBjb25zdCBidXR0czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDw9IG5jOyBjKyspIHtcbiAgICAgIGNvbnN0IHJvdzogbnVtYmVyW10gPSBbXTtcbiAgICAgIGxldCB5ID0gMDtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDw9IHM7IHgrKykge1xuICAgICAgICBpZiAoeCAlIE1hdGgubWF4KDIsIE1hdGgucm91bmQocyAvIDQ4KSkgPT09IDApIHkgPSAocm5kKCkgKiAyIC0gMSkgKiByYWdnZWQgKiBjaDtcbiAgICAgICAgcm93LnB1c2goYyAqIGNoICsgeSk7XG4gICAgICB9XG4gICAgICBidXR0cy5wdXNoKHJvdyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBuYzsgYysrKSB7XG4gICAgICBjb25zdCB5MCA9IGMgKiBjaDtcbiAgICAgIC8vIHRoZSBjb3Vyc2UncyBvd24gdG9uZTogdGhhdGNoIHdlYXRoZXJzIGNvdXJzZSBieSBjb3Vyc2UsIHRoZSBsb3dlciBvbmVzIGdyZXllclxuICAgICAgY29uc3QgdCA9IDEgLSBzcHJlYWQgKiBybmQoKTtcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIHQpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke01hdGgucm91bmQodiAqIDAuOTg1KX0sJHtNYXRoLnJvdW5kKHYgKiAwLjk1KX0pYDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCB5MCAtIHJhZ2dlZCAqIGNoIC0gMSwgcywgY2ggKyAyICogcmFnZ2VkICogY2ggKyAyKTtcbiAgICAgIC8vIHN0ZW1zIHJ1bm5pbmcgRE9XTiB0aGUgc2xvcGUgaW5zaWRlIHRoZSBjb3Vyc2UsIGVhY2ggYSBsaXR0bGUgcGFzdCBpdHMgYnV0dCBsaW5lXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IHN0ZW1zOyBrKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcztcbiAgICAgICAgY29uc3QgdyA9IHdNaW4gKyBybmQoKSAqICh3TWF4IC0gd01pbik7XG4gICAgICAgIGNvbnN0IHRvbmUgPSAxIC0gc3ByZWFkICogKDAuMyArIHJuZCgpICogMC43KTtcbiAgICAgICAgY29uc3QgYSA9IDAuMTggKyBybmQoKSAqIDAuMzI7XG4gICAgICAgIGNvbnN0IGRhcmsgPSBybmQoKSA8IDAuNjI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBkYXJrID8gYHJnYmEoJHtNYXRoLnJvdW5kKHNyICogdG9uZSl9LCR7TWF0aC5yb3VuZChzZyAqIHRvbmUpfSwke01hdGgucm91bmQoc2IgKiB0b25lKX0sJHthLnRvRml4ZWQoMyl9KWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgcmdiYSgyNTUsMjUzLDI0NiwkeyhhICogMC42KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgICBjb25zdCB5VG9wID0geTAgLSBjaCAqICgwLjE1ICsgcm5kKCkgKiAwLjI1KTtcbiAgICAgICAgY29uc3QgeUJvdCA9IGJ1dHRzW2MgKyAxXVtNYXRoLm1pbihzLCBNYXRoLnJvdW5kKHgpKV0gKyBjaCAqIChybmQoKSAqIDAuMTApO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeVRvcCwgdywgTWF0aC5tYXgoMiwgeUJvdCAtIHlUb3ApKTtcbiAgICAgICAgLy8gVE9STiBUSVA6IHNvbWUgYmxhZGVzIHJ1biBvbiBwYXN0IHRoZSBidXR0IGxpbmUgYW5kIGVuZCBpbiBhIHBvaW50LCBzbyB0aGUgY291cnNlIGVkZ2UgaXNcbiAgICAgICAgLy8gYSBmcmluZ2Ugb2YgaW5kaXZpZHVhbCBibGFkZXMgcmF0aGVyIHRoYW4gYSB3YXZ5IGN1dCAodGhlIG5pcGEgcGxhdGUncyB3aG9sZSBjaGFyYWN0ZXIpXG4gICAgICAgIGNvbnN0IHRlYXI6IG51bWJlciA9IG8udGVhciA/PyAwO1xuICAgICAgICBpZiAodGVhciA+IDAgJiYgcm5kKCkgPCAwLjQ1KSB7XG4gICAgICAgICAgY29uc3QgTCA9IGNoICogdGVhciAqICgwLjMgKyBybmQoKSAqIDAuNyk7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHlCb3QpOyBjdHgubGluZVRvKHggKyB3LCB5Qm90KTsgY3R4LmxpbmVUbyh4ICsgdyAvIDIsIHlCb3QgKyBMKTsgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSg1OCw0OCwzNiwkeygwLjEwICsgcm5kKCkgKiAwLjE2KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgICAgIGN0eC5maWxsUmVjdCh4IC0gMSwgeUJvdCwgdyArIDIsIEwgKiAwLjUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBCTEFERSBTRUFNUzogYSB0aGluIGRhcmsgbGluZSBiZXR3ZWVuIG5laWdoYm91cmluZyBibGFkZXMsIHdoaWNoIGlzIHdoYXQgc2VwYXJhdGVzIGEgbmlwYVxuICAgICAgLy8gcm9vZiAoYnJvYWQgbGVhZmxldHMgbGFpZCBzaWRlIGJ5IHNpZGUpIGZyb20gY29tYmVkIGdyYXNzIHRoYXRjaFxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5zZWFtcyA/PyAwKTsgaysrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHM7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSg3MCw2MCw0NiwkeygwLjEwICsgcm5kKCkgKiAwLjE4KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeTAgLSBjaCAqIDAuMSwgMSwgY2ggKiAoMC43ICsgcm5kKCkgKiAwLjUpKTtcbiAgICAgIH1cbiAgICAgIC8vIE1JU1NJTkcgYmxhZGVzOiBhIGZldyBnYXBzIHdoZXJlIHRoZSBjb3Vyc2UgaGFzIHRoaW5uZWQsIGRhcmsgYnV0IG5ldmVyIGJsYWNrXG4gICAgICBjb25zdCBnYXBzID0gby5nYXBzID8/IDA7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGdhcHM7IGsrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gcyAqICgwLjAxICsgcm5kKCkgKiAwLjAzKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDk2LDg0LDY2LCR7KDAuMjAgKyBybmQoKSAqIDAuMTgpLnRvRml4ZWQoMyl9KWA7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5MCArIGNoICogMC4yNSwgdywgY2ggKiAoMC40ICsgcm5kKCkgKiAwLjUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGUgc2hhZG93IGVhY2ggY291cnNlJ3MgYnV0dCBjYXN0cyBvbiB0aGUgb25lIGJlbG93OiBhIGdyYWRpZW50IGZhbGxpbmcgQVdBWSBmcm9tIHRoZSBsaW5lLFxuICAgIC8vIGRyYXduIGFsb25nIHRoZSBqaXR0ZXJlZCBidXR0IHNvIHRoZSBzaGFkb3cgaXMgYXMgcmFnZ2VkIGFzIHRoZSBlZGdlIHRoYXQgY2FzdHMgaXQsIHdpdGggdGhlXG4gICAgLy8gTElUIFRJUFMgb2YgdGhlIGNvdXJzZSBhYm92ZSBpdCBhcyBhIHBhbGUgbGluZS4gVGhlIHBhaXIgaXMgd2hhdCBtYWtlcyB0aGUgcm9vZiByZWFkIGFzXG4gICAgLy8gc3RhY2tlZCBsYXllcnM7IHRoZSBzaGFkb3cgYWxvbmUgcmVhZHMgYXMgZ3JhaW4sIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGJ1aWxkIGxvb2tlZCBsaWtlLlxuICAgIGZvciAobGV0IGMgPSAxOyBjIDw9IG5jOyBjKyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICAgIGNvbnN0IHliID0gYnV0dHNbY11beF07XG4gICAgICAgIGNvbnN0IGdoID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliIC0gY2ggKiAwLjA5LCAwLCB5Yik7XG4gICAgICAgIGdoLmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjUyLDI0MiwwKScpOyBnaC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoMjU1LDI1MiwyNDIsJHsoby50aXAgPz8gMC4zNCkudG9GaXhlZCgzKX0pYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnaDtcbiAgICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeWIgLSBjaCAqIDAuMDkgKyBkeSwgMSwgY2ggKiAwLjA5KTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeWIsIDAsIHliICsgY2ggKiAwLjIyKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDU4LDQ4LDM2LCR7KG8uc2hhZG93ID8/IDAuNDIpLnRvRml4ZWQoMyl9KWApO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNTgsNDgsMzYsMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5YiArIGR5LCAxLCBjaCAqIDAuMjIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1PU1MgLyBNT1VMRDogbGVzcyByZWQgYW5kIGJsdWUgb3ZlciBzb2Z0IHBhdGNoZXMsIG5ldmVyIGEgcGFpbnRlZCBncmVlblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ubW9zcyA/PyAwKTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjE0KTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMTQgKyBybmQoKSAqIDAuMjI7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTUwLDE5MCwxMTAsJHthLnRvRml4ZWQoMyl9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTUwLDE5MCwxMTAsMCknKTtcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknOyBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfVxuICAgIC8vIFJPVDogZGFyayBncmV5LWJyb3duIHBhdGNoZXMgd2hlcmUgdGhlIHRoYXRjaCBoYXMgZGVjYXllZCwgbmV1dHJhbCByYXRoZXIgdGhhbiBncmVlblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ucm90ID8/IDApOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDQgKyBybmQoKSAqIDAuMDgpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBjb25zdCBhID0gMC4zMCArIHJuZCgpICogMC4yNTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSg5Niw4Niw3NCwke2EudG9GaXhlZCgzKX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjYsIGByZ2JhKDk2LDg2LDc0LCR7KGEgKiAwLjUpLnRvRml4ZWQoMyl9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoOTYsODYsNzQsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIHNvZnQgdG9uYWwgZHJpZnQgc28gdGhlIGNvdXJzZXMgZG8gbm90IHJlYWQgYXMgYSBwcmludGVkIHN0cmlwZVxuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCBvLndlYXRoZXIgPz8gMTAsIDAuMTAsIDAuMjIpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBXT1ZFTiBUQVJQQVVMSU4gdGlsZTogdGhlIGNvYXJzZSBjcm9zcy13b3ZlbiBwb2x5cHJvcHlsZW5lIHRhcGUgb2YgYSBUaGFpIGJ1aWxkZXIncyB0YXJwLCBwbHVzXG4gKiB0aGUgY3JlYXNlcyBhIGZvbGRlZCBzaGVldCBrZWVwcyBmb3IgbGlmZSBhbmQgdGhlIHN1bi1ibGVhY2hpbmcgYWxvbmcgdGhlIHJpZGdlcy4gQSBtdWx0aXBsaWVyIG9uXG4gKiB0aGUgbWVhc3VyZWQgYmx1ZSwgc28gdGhlIHdlYXZlIGRhcmtlbnMgYW5kIHRoZSBibGVhY2ggbGlmdHMgdG93YXJkIHdoaXRlLlxuICovXG5mdW5jdGlvbiB0YXJwVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBwaXRjaCA9IE1hdGgubWF4KDMsIE1hdGgucm91bmQocyAvIChvLnRhcGVzID8/IDY0KSkpO1xuICAgIC8vIHRoZSB3ZWF2ZTogd2FycCBhbmQgd2VmdCB0YXBlcywgZWFjaCBwYWlyIHdpdGggYSBzaGFkb3cgYXQgaXRzIGpvaW4sIGFsdGVybmF0aW5nIG92ZXIvdW5kZXJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHggKz0gcGl0Y2gpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgzMCwzNCw0NCwkeygwLjEwICsgcm5kKCkgKiAwLjA4KS50b0ZpeGVkKDMpfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4wNyknOyBjdHguZmlsbFJlY3QoeCArIDEsIDAsIE1hdGgubWF4KDEsIHBpdGNoICogMC4zNSksIHMpO1xuICAgIH1cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHM7IHkgKz0gcGl0Y2gpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgzMCwzNCw0NCwkeygwLjEwICsgcm5kKCkgKiAwLjA4KS50b0ZpeGVkKDMpfSlgOyBjdHguZmlsbFJlY3QoMCwgeSwgcywgMSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4wNyknOyBjdHguZmlsbFJlY3QoMCwgeSArIDEsIHMsIE1hdGgubWF4KDEsIHBpdGNoICogMC4zNSkpO1xuICAgIH1cbiAgICAvLyBmb2xkIGNyZWFzZXM6IGxvbmcgcGFsZSBsaW5lcyB3aXRoIGEgc2hhZG93IG9uIG9uZSBzaWRlLCBhdCB0aGUgdHdvIGF4ZXMgYSB0YXJwIGlzIGZvbGRlZCBvblxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uY3JlYXNlcyA/PyA2KTsgaysrKSB7XG4gICAgICBjb25zdCBob3JpeiA9IHJuZCgpIDwgMC41LCBwID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuNSArIHJuZCgpICogMC41KSwgcSA9IHJuZCgpICogcztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjI2KSc7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yNiknO1xuICAgICAgaWYgKGhvcml6KSB7IGN0eC5maWxsUmVjdChxIC0gbGVuIC8gMiwgcCwgbGVuLCAxLjYpOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjAsMjYsMzgsMC4xOCknOyBjdHguZmlsbFJlY3QocSAtIGxlbiAvIDIsIHAgKyAxLjYsIGxlbiwgMik7IH1cbiAgICAgIGVsc2UgeyBjdHguZmlsbFJlY3QocCwgcSAtIGxlbiAvIDIsIDEuNiwgbGVuKTsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDIwLDI2LDM4LDAuMTgpJzsgY3R4LmZpbGxSZWN0KHAgKyAxLjYsIHEgLSBsZW4gLyAyLCAyLCBsZW4pOyB9XG4gICAgfVxuICAgIC8vIHN1bi1ibGVhY2hlZCBzdHJlYWtzIGFuZCBhIGxpdHRsZSBncmltZVxuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCBvLndlYXRoZXIgPz8gMTIsIDAuMTAsIDAuMzQpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTQVdOIFRJTUJFUiB0aWxlIGZvciBhIHdlYXRoZXJlZCBwb3N0LWFuZC1wbGF0ZSBmcmFtZTogZmluZSBsb25naXR1ZGluYWwgZ3JhaW4sIGEgZmV3IGtub3RzLCB0aGVcbiAqIG9kZCBkcnlpbmcgc3BsaXQsIGFuZCBjbG91ZHkgc2lsdmVyIHdlYXRoZXJpbmcuIERlbGliZXJhdGVseSBXRUFLTFkgZGlyZWN0aW9uYWwgLS0gdGhlIGZyYW1lIGlzXG4gKiBtYXBwZWQgd2l0aCB3b3JsZCBVVnMsIHdoaWNoIHB1dCB2IGFsb25nIHRoZSBwb3N0IGJ1dCBBQ1JPU1MgYSBiZWFtLCBhbmQgYSBzdHJvbmdseSBzdHJpcGVkIHRpbGVcbiAqIHdvdWxkIHRoZW4gcmVhZCBhcyBhIHBsYW5rIGpvaW50IHJ1bm5pbmcgdGhlIHdyb25nIHdheSBvbiBoYWxmIHRoZSBmcmFtZS4gVGhlIHdlYXRoZXJpbmcgY2Fycmllc1xuICogbW9zdCBvZiB0aGUgcmVhZCBhbmQgdGhlIGdyYWluIG9ubHkgc2hhcnBlbnMgaXQsIHdoaWNoIHN1cnZpdmVzIGJvdGggb3JpZW50YXRpb25zLlxuICovXG5mdW5jdGlvbiBzYXduVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IERBUksgPSAnOTYsODQsNjgnLCBMSUdIVCA9ICcyNTUsMjU1LDI1NSc7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZjRmMmVlJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCBvLndlYXRoZXIgPz8gMjAsIDAuMTQsIDAuMzApO1xuICAgIGdyYWluTGluZXMoY3R4LCBybmQsIDAsIHMsIDAsIHMsIG8uZ3JhaW4gPz8gMjIwLCBEQVJLLCBMSUdIVCwgMC4xOCk7XG4gICAgLy8ga25vdHM6IGEgZGFyayBlbGxpcHNlIHdpdGggdGhlIGdyYWluIHN3ZWVwaW5nIHJvdW5kIGl0XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5rbm90cyA/PyA0KTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjAxMiArIHJuZCgpICogMC4wMik7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNzQsNjAsNDQsMC40NSknO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByLCByICogMS42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDk2LDgwLDYwLDAuMjIpJzsgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGZvciAobGV0IHEgPSAxOyBxIDw9IDM7IHErKykgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByICogKDEgKyBxICogMC42KSwgciAqICgxLjYgKyBxICogMC45KSwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZHJ5aW5nIHNwbGl0cyBhbG9uZyB0aGUgZmlicmVcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLnNwbGl0cyA/PyAzKTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMiArIHJuZCgpICogMC40NSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNTgsNDgsMzYsMC40MiknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCAxLjQsIGxlbik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xNiknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCArIDEuNCwgeSArIGR5LCAxLCBsZW4pO1xuICAgIH1cbiAgICBjb25zdCBzcG90czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ubW91bGQgPz8gMyk7IGkrKykgc3BvdHMucHVzaChbcm5kKCkgKiBzLCBybmQoKSAqIHNdKTtcbiAgICBtb3VsZENsdXN0ZXJzKGN0eCwgcm5kLCBzLCBzcG90cywgcyAqIDAuMDksIHMgKiAwLjA3LCA3MCwgMC4yNCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdBTFZBTklTRUQgU0hFRVQgd2VhdGhlcmluZzogb25lIHNlYW1sZXNzIG11bHRpcGxpZXIgdGlsZSBjYXJyeWluZyB0aGUgdGhyZWUgdGhpbmdzIGEgemluYyByb29mXG4gKiBhY3R1YWxseSBzaG93cyAtLSB0aGUgY2hhbGt5IHdoaXRlIG94aWRhdGlvbiB0aGF0IGVhdHMgdGhlIHNwYW5nbGUsIHRoZSBkYXJrZXIgZ3JleSBkcmlmdCB3aGVyZVxuICogaXQgaGFzIG5vdCwgYW5kIHRoZSB3YXJtIHJ1c3QgZnJlY2tsZXMgdGhhdCBzdGFydCBhdCBldmVyeSBmaXhpbmcgYW5kIGxhcC5cbiAqXG4gKiBMaWtlIGBwYWludFRpbGVgIGl0IGlzIGRyYXduIGluIEFCU09MVVRFIG11bHRpcGxpZXIgc3BhY2Ugb3ZlciBhIFJFLUJBU0VEIGVudmVsb3BlLCBiZWNhdXNlXG4gKiBjaGFsa2luZyBpcyBCUklHSFRFUiB0aGFuIHRoZSBjbGVhbiBzaGVldCBpdCBzaXRzIG9uIGFuZCBhIHBsYWluIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbi4gYG8uYmFzZWBcbiAqIGlzIHRoZSBjbGVhbiB6aW5jJ3Mgb3duIG11bHRpcGxpZXIgYWdhaW5zdCB0aGF0IGVudmVsb3BlIGFuZCBpcyB3aGF0IG1vc3Qgb2YgdGhlIHRpbGUgaXMgZmlsbGVkXG4gKiB3aXRoOyBgby5jaGFsa2AgcmVhY2hlcyBiYWNrIHVwIHRvIHRoZSBlbnZlbG9wZS4gTWVhc3VyZWQgb2ZmIHRoZSBwbGF0ZSwgdGhlIGRlY2sgcnVucyAxNzIgdG8gMTk3XG4gKiBsdW1hIGFjcm9zcyBpdHMgb3duIHN1cmZhY2UgYXQgYSBzYXR1cmF0aW9uIG9mIDAuMDQgLS0gYSAyNS1sdW1hIHNwcmVhZCBvbiBhIG5vbWluYWxseSBmbGF0IGdyZXksXG4gKiB3aGljaCBpcyB0aGUgd2hvbGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgcm9vZiBhbmQgYSBzaGVldCBvZiBwbGFzdGljLlxuICpcbiAqIGBjaGFsa1NjYWxlYCAvIGBkcmlmdFNjYWxlYCBleGlzdCBiZWNhdXNlIG9uIGEgcm9vZiB0aGUgdGlsZSBpcyBzbWFsbCBhZ2FpbnN0IHRoZSBzdXJmYWNlOiB0aGVcbiAqIGRlY2sgcmVwZWF0cyBpdCBmb3VyIHRpbWVzIGFjcm9zcywgc28gYW55IG1hcmsgd2lkZXIgdGhhbiBhIHRlbnRoIG9mIGl0IGRyYXdzIGEgdmlzaWJsZSBsYXR0aWNlLlxuICogVGhlIEJST0FEIGNoYWxrIHpvbmVzIGJlbG9uZyBvbiB0aGUgc2hlZXQncyBvd24gdmVydGV4IGdyaWQsIHdoaWNoIGRvZXMgbm90IHJlcGVhdDsgd2hhdCB0aGUgdGlsZVxuICogb3dlcyBpcyB0aGUgZmluZSBzcGVja2xlIGluc2lkZSB0aGVtLlxuICpcbiAqIFRoZSByb2xsIG1hcmtzIGFyZSBkcmF3biBMQVNUIGFuZCBhbG9uZyB1LCB3aGljaCBvbiB0aGUgZGVjaydzIHdvcmxkIFVWcyBpcyB0aGUgYXhpcyB0aGUgbW9kZWxsZWRcbiAqIGZsdXRlcyBydW4gYWNyb3NzLiBUaGV5IGFyZSB3aGF0IHRoZSB0aWxlIHN0aWxsIG93ZXMgdGhlIGdlb21ldHJ5IG9uY2UgdGhlIGNvcnJ1Z2F0aW9uIGl0c2VsZiBpc1xuICogcmVhbDogYSByb2xsIGZvcm1lciBsZWF2ZXMgZmluZSBsZW5ndGh3aXNlIHN0cmlhdGlvbiBiZXR3ZWVuIHRoZSBmbHV0ZXMsIGFuZCBgYnVtcGAgcGlja3MgaXQgdXAuXG4gKi9cbmZ1bmN0aW9uIGdhbHZUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdLCBjaGFsayA9IG8uY2hhbGsgPz8gYmFzZSwgcnVzdCA9IG8ucnVzdCA/PyBiYXNlLCBkYXJrID0gby5kYXJrID8/IGJhc2U7XG4gICAgY29uc3Qgd3JhcCA9IChkcmF3OiAoZHg6IG51bWJlciwgZHk6IG51bWJlcikgPT4gdm9pZCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIGRyYXcoZHgsIGR5KTtcbiAgICB9O1xuICAgIGNvbnN0IGJsb2IgPSAoYzogbnVtYmVyW10sIHg6IG51bWJlciwgeTogbnVtYmVyLCByOiBudW1iZXIsIGE6IG51bWJlciwgcnkgPSAxLCByb3QgPSAwKSA9PiB7XG4gICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IoYyl9LCR7YX0pYCk7IGcuYWRkQ29sb3JTdG9wKDAuNTUsIGByZ2JhKCR7cmdiKGMpfSwke2EgKiAwLjV9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IoYyl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByLCByICogcnksIHJvdCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIGJhc2UgZmlsbCBjYXJyaWVzIHRoZSBGTFVURSBzaGFkaW5nIHdoZW4gYGZsdXRlc2AgaXMgc2V0OiBgZmx1dGVzYCByaXBwbGVzIHBlciB0aWxlLCBpblxuICAgIC8vIHBoYXNlIHdpdGggdGhlIG1vZGVsbGVkIGNvcnJ1Z2F0aW9uIChhIHRyb3VnaCBhdCB1ID0gMCwgd2hpY2ggaXMgd2hlcmUgdGhlIGRlY2sncyB3b3JsZCBVVnMgcHV0XG4gICAgLy8gb25lKS4gVGhlIGdlb21ldHJ5IGFscmVhZHkgdHVybnMgdGhlIGZsdXRlcyB0byB0aGUgbGlnaHQgLS0gdGhpcyBpcyB0aGUgYW1iaWVudCBkYXJrZW5pbmcgaW5cbiAgICAvLyB0aGUgdmFsbGV5cyBhbmQgdGhlIHJvbGwtZm9ybWVyJ3Mgb3duIHBvbGlzaCBvbiB0aGUgY3Jlc3RzLCB3aGljaCBmbGF0IHN0dWRpbyBsaWdodGluZyBvbiBhXG4gICAgLy8gc21vb3RoLXNoYWRlZCB0cmlhbmdsZSB3YXZlIGdpdmVzIG5vbmUgb2YuIE91dCBvZiBwaGFzZSBpdCB3b3VsZCBCRUFUIHdpdGggdGhlIGdlb21ldHJ5LCB3aGljaFxuICAgIC8vIGlzIHdoeSB0aGUgcGl0Y2ggaXMgbG9ja2VkIHRvIHRoZSBkZWNrJ3Mgb3duIDEzIGZsdXRlcyBwZXIgbWV0cmUgcmF0aGVyIHRoYW4gY2hvc2VuLlxuICAgIGNvbnN0IGZsID0gby5mbHV0ZXMgPz8gMCwgZmxvdyA9IG8uZmx1dGVMb3cgPz8gMC44ODtcbiAgICBpZiAoZmwgPiAwKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgICBjb25zdCB0ID0gKDEgLSBNYXRoLmNvcyh4IC8gcyAqIE1hdGguUEkgKiAyICogZmwpKSAvIDI7ICAgLy8gMCBpbiB0aGUgdHJvdWdoLCAxIGF0IHRoZSBjcmVzdFxuICAgICAgICBjb25zdCBrID0gZmxvdyArICgxIC0gZmxvdykgKiB0O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlLm1hcCgodjogbnVtYmVyKSA9PiB2ICogaykpfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTsgfVxuXG4gICAgLy8gMS4gdGhlIGdyZXkgZHJpZnQ6IGJyb2FkLCB2ZXJ5IHNvZnQsIHRoZSBhcmVhcyB0aGUgY2hhbGsgaGFzIG5vdCByZWFjaGVkXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5kcmlmdCA/PyAxNik7IGkrKylcbiAgICAgIGJsb2IoZGFyaywgcm5kKCkgKiBzLCBybmQoKSAqIHMsIHMgKiAoMC4xNiArIHJuZCgpICogMC4zMCkgKiAoby5kcmlmdFNjYWxlID8/IDEpLCAwLjEwICsgcm5kKCkgKiAwLjE4LCAwLjUgKyBybmQoKSAqIDAuOSwgcm5kKCkgKiBNYXRoLlBJKTtcblxuICAgIC8vIDIuIHRoZSBjaGFsayBibG9vbTogTEFSR0UsIHNvZnQgYW5kIGlycmVndWxhciwgd2l0aCBhIGdyYW51bGFyIGZyaW5nZS4gT24gYSByb29mIGl0IGlzIHRoZVxuICAgIC8vICAgIGRvbWluYW50IG1hcmsgLS0gdGhlIHBsYXRlJ3MgZGVjayBpcyBtb3JlIGNoYWxrIHRoYW4gY2xlYW4gc2hlZXQgLS0gc28gaXQgaXMgZHJhd24gd2lkZSBhbmRcbiAgICAvLyAgICBhdCBoaWdoIGFscGhhLCB1bmxpa2UgdGhlIHNwYXJzZSBibG9vbXMgb2YgYSBwYWludGVkIHBhbmVsLlxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uY2hhbGtQYXRjaGVzID8/IDE0KTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIGNyID0gcyAqICgwLjA4ICsgcm5kKCkgKiAwLjE4KSAqIChvLmNoYWxrU2NhbGUgPz8gMSk7XG4gICAgICBibG9iKGNoYWxrLCBjeCwgY3ksIGNyLCAoby5jaGFsa0FscGhhID8/IDAuNTUpICsgcm5kKCkgKiAwLjMwLCAwLjUgKyBybmQoKSAqIDAuOSwgcm5kKCkgKiBNYXRoLlBJKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjciAqIDEuMztcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQsIHIgPSAwLjggKyBybmQoKSAqIDIuNDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKGNoYWxrKX0sJHswLjIgKyBybmQoKSAqIDAuNDV9KWA7XG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gcnVzdDogc21hbGwgd2FybSBmcmVja2xlIGNsdXN0ZXJzLCBlYWNoIGEgc29mdCBwYXRjaCB1bmRlciBhIGZpZWxkIG9mIHNwZWNrcywgd2l0aCBhIHNob3J0XG4gICAgLy8gICAgcnVuIGJlbG93IGl0LiBaaW5jIGRvZXMgbm90IHNoZWV0LXJ1c3QgdGhlIHdheSBiYXJlIHN0ZWVsIGRvZXMgLS0gaXQgZnJlY2tsZXMgZmlyc3QuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5ydXN0Q2x1c3RlcnMgPz8gMTApOyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgY3IgPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMDU1KTtcbiAgICAgIGJsb2IocnVzdCwgY3gsIGN5LCBjciwgMC4yNSArIHJuZCgpICogMC4zMCwgMC43ICsgcm5kKCkgKiAwLjcsIHJuZCgpICogTWF0aC5QSSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwZWNrc1BlckNsdXN0ZXIgPz8gMjYpOyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3I7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkLCByID0gMC43ICsgcm5kKCkgKiAxLjg7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihydXN0KX0sJHswLjI1ICsgcm5kKCkgKiAwLjQ1fSlgO1xuICAgICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgfVxuICAgICAgaWYgKHJuZCgpIDwgMC42KSB7XG4gICAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiBzICogMC4wMDYsIGxlbiA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xNik7XG4gICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgY3ksIDAsIGN5ICsgbGVuKTtcbiAgICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnVzdCl9LCR7MC4xNCArIHJuZCgpICogMC4xNn0pYCk7IGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1c3QpfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgICAgd3JhcCgoZHgpID0+IGN0eC5maWxsUmVjdChjeCArIGR4ICsgKHJuZCgpIC0gMC41KSAqIGNyLCBjeSwgdywgbGVuKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gNC4gcm9sbCBtYXJrczogZmluZSBsaW5lcyBvZiBjb25zdGFudCB1LCBhdCBgcm9sbHNgIHBlciB0aWxlLCBhbHRlcm5hdGVseSBhIHNoYWRlIHVuZGVyIGFuZCBhXG4gICAgLy8gICAgc2hhZGUgb3ZlciB0aGUgdG9uZSB0aGV5IGNyb3NzLiBCb3VuZCBhcyBhIGJ1bXAgbWFwIHRoZXkgYXJlIHRoZSBzdHJpYXRpb24gYmV0d2VlbiBmbHV0ZXMuXG4gICAgY29uc3Qgcm9sbHMgPSBvLnJvbGxzID8/IDQwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9sbHM7IGkrKykge1xuICAgICAgY29uc3QgeCA9IChpICsgMC4zNSArIHJuZCgpICogMC4zKSAqIHMgLyByb2xscywgdXAgPSBybmQoKSA8IDAuNDU7XG4gICAgICBjb25zdCBjID0gdXAgPyBjaGFsayA6IGRhcmssIGEgPSAwLjA2ICsgcm5kKCkgKiAwLjEyO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoJHtyZ2IoYyl9LCR7YX0pYDsgY3R4LmxpbmVXaWR0aCA9IDAuNyArIHJuZCgpICogMS4zO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgZHgsIDApOyBjdHgubGluZVRvKHggKyBkeCwgcyk7IGN0eC5zdHJva2UoKTsgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBTUExJVC1DVUxNIHRpbGUgZm9yIHRoZSBoYWxmLXBpcGUgcm9vZmluZzogeCBBUk9VTkQgdGhlIGhhbGYgY3VsbSAoY3VsbVVWIG92ZXIgMC43MCBtLCBzbyB0aGVcbiAqICBzZWFtIGxhbmRzIG9uIHRoZSBoaWRkZW4gdW5kZXJzaWRlKSwgeSBBTE9ORyBpdC4gV2hhdCB0aGUgcGxhdGUgc2hvd3Mgb24gYSByb29maW5nIGN1bG0gdGhhdCBhXG4gKiAgd2hvbGUgcG9sZSBkb2VzIG5vdDogT05FIG5vZGUgcmluZyBwZXIgMC43MCBtICh0aGUgcm9vZiBjdWxtcyBhcmUgbG9uZ2VyIGludGVybm9kZXMgdGhhbiB0aGVcbiAqICBwb3N0cyksIGRlbnNlIGxvbmdpdHVkaW5hbCBmaWJyZSwgYSBsb25nIGRyeWluZyBzcGxpdCwgYmxlYWNoZWQgZmFjZXMsIGFuZCBST1QgLS0gZGFya1xuICogIGlycmVndWxhciBob2xlcyB3aXRoIGEgc3RhaW5lZCBoYWxvIGFuZCBhIHNjYXR0ZXIgb2YgaW5zZWN0IHBpbmhvbGVzLCB0aHJlZSBvciBmb3VyIHBlciB0aWxlLlxuICogIEEgbXVsdGlwbGllciBvbiB0aGUgcGVyLWluc3RhbmNlIHRvbmU7IHRoZSByb3QgY29yZXMgYXJlIHNtYWxsIGVub3VnaCAoMTAtMjAgcHggb2YgNTEyLCBvbiBhXG4gKiAgMC43MCBtIHRpbGUsIHNvIDE1LTMwIG1tKSB0aGF0IG5vIGVuY2xvc2VkIGRhcmsgcGF0Y2ggcmVhY2hlcyB0aGUgc2lsaG91ZXR0ZSBnYXRlLiAqL1xuZnVuY3Rpb24gc3BsaXRUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IERBUksgPSAnODgsNzYsNTgnLCBMSUdIVCA9ICcyNTUsMjU1LDI1NSc7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZjNmMGU4JzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGEgc29mdCByb3VuZC1vZmYgYWNyb3NzIHRoZSBhcmM6IHRoZSByaW1zIGEgdG91Y2ggZGFya2VyIHRoYW4gdGhlIGNyb3duXG4gICAgY29uc3QgZ2EgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgcywgMCk7XG4gICAgZ2EuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDkwLDg0LDc0LDAuMTQpJyk7IGdhLmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpJyk7IGdhLmFkZENvbG9yU3RvcCgxLCAncmdiYSg5MCw4NCw3NCwwLjE0KScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnYTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIHdlYXRoZXJQYXRjaGVzKGN0eCwgcm5kLCBzLCAwLCBzLCAxMCwgMC4xMCwgMC4zNCk7XG4gICAgY29uc3Qgbm9kZSA9IHMgKiAoMC4zMCArIHJuZCgpICogMC40MCk7XG4gICAgZm9yIChjb25zdCBbeTAsIHkxXSBvZiBbWzAsIG5vZGVdLCBbbm9kZSwgc11dKSBncmFpbkxpbmVzKGN0eCwgcm5kLCAwLCBzLCB5MCwgeTEsIDMyMCwgREFSSywgTElHSFQsIDAuMjQpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMzsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMyArIHJuZCgpICogMC42KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCwzNCwyNiwwLjU1KSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5ICsgZHksIDEuNiwgbGVuKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjIwKSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4ICsgMS42LCB5ICsgZHksIDEuMiwgbGVuKTtcbiAgICB9XG4gICAgLy8gdGhlIG5vZGUgcmluZ1xuICAgIHtcbiAgICAgIGNvbnN0IHkgPSBub2RlO1xuICAgICAgY29uc3QgZ3MgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSAtIHMgKiAwLjAzLCAwLCB5KTtcbiAgICAgIGdzLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw1MCw0MCwwKScpOyBncy5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNTAsNDAsMC4yNCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnczsgY3R4LmZpbGxSZWN0KDAsIHkgLSBzICogMC4wMywgcywgcyAqIDAuMDMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDUyLDQ0LDM2LDAuNjYpJzsgY3R4LmZpbGxSZWN0KDAsIHksIHMsIDMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMzYpJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyAzLCBzLCA1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg2MCw1MCw0MCwwLjMwKSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgOCwgcywgMik7XG4gICAgfVxuICAgIC8vIFJPVDogYW4gaXJyZWd1bGFyIGRhcmsgY29yZSB3aXRoIGEgd2FybSBzdGFpbmVkIGhhbG8sIGFuZCBwaW5ob2xlcyBhcm91bmQgaXRcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCByeCA9IHMgKiAoMC4wMTIgKyBybmQoKSAqIDAuMDMpLCByeSA9IHJ4ICogKDEuNCArIHJuZCgpICogMS42KSwgcm90ID0gKHJuZCgpIC0gMC41KSAqIDAuNjtcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjb25zdCBoYWxvID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGN4LCBjeSArIGR5LCAwLCBjeCwgY3kgKyBkeSwgTWF0aC5tYXgocngsIHJ5KSAqIDIuNCk7XG4gICAgICAgIGhhbG8uYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDk2LDc0LDQwLDAuNDIpJyk7IGhhbG8uYWRkQ29sb3JTdG9wKDAuNSwgJ3JnYmEoOTYsNzQsNDAsMC4yMCknKTsgaGFsby5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoOTYsNzQsNDAsMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGhhbG87IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoY3gsIGN5ICsgZHksIHJ4ICogMi42LCByeSAqIDIuNCwgcm90LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgzNiwyOCwxOCwwLjgyKSc7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoY3gsIGN5ICsgZHksIHJ4LCByeSwgcm90LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgxNCwxMCw2LDAuOSknOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4ICsgcnggKiAwLjIsIGN5ICsgZHkgLSByeSAqIDAuMSwgcnggKiAwLjUsIHJ5ICogMC41NSwgcm90LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gY3ggKyAocm5kKCkgLSAwLjUpICogcyAqIDAuMTIsIHkgPSBjeSArIChybmQoKSAtIDAuNSkgKiBzICogMC4yLCByID0gMSArIHJuZCgpICogMS44O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzAsMjQsMTYsMC44NSknO1xuICAgICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGxvb3NlIG1vdWxkIGJlbG93IHRoZSBub2RlXG4gICAgbW91bGRDbHVzdGVycyhjdHgsIHJuZCwgcywgW1tybmQoKSAqIHMsIG5vZGUgKyBzICogMC4wNF0sIFtybmQoKSAqIHMsIHJuZCgpICogc11dLCBzICogMC4wOCwgcyAqIDAuMDUsIDYwLCAwLjI2KTtcbiAgfSk7XG59XG5cbi8qKiBST1BFIHRpbGUgZm9yIHRoZSBsYXNoaW5nczogeCBBUk9VTkQgdGhlIGNvbGxhciwgeSBBTE9ORyB0aGUgcG9sZSBpdCB3cmFwcy4gQSBsYXNoaW5nIGlzIHR1cm5zXG4gKiAgb2YgbGFpZCByb3BlLCBzbyB0aGUgc3VyZmFjZSBpcyBkaWFnb25hbCBTVFJBTkRTIC0tIGEgZ3Jvb3ZlIGFuZCBhIGxpdCByaWRnZSBwZXIgc3RyYW5kIGF0IGFcbiAqICBzaGFsbG93IHdyYXAgYW5nbGUgLS0gd2l0aCBmaWJyZSBmdXp6IGFuZCBhIGZldyBkYXJrZXIgc29pbGVkIHR1cm5zLiBPdmVyIDAuMTIgbSBwZXIgdGlsZSB0aGVcbiAqICBzdHJhbmQgcGl0Y2ggaXMgfjEyIG1tLCB3aGljaCBpcyB0aGUgcGxhdGUncyByb3BlLiBTZWFtbGVzczogZXZlcnkgc3Ryb2tlIGlzIGRyYXduIGF0IHRocmVlXG4gKiAgeSBvZmZzZXRzIGFuZCB0aGUgc3RyYW5kIHJ1bnMgYWNyb3NzIHRoZSB3cmFwLiAqL1xuZnVuY3Rpb24gcm9wZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZjRlZmU0JzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IG4gPSAxMCwgcGl0Y2ggPSBzIC8gbiwgYW5nID0gMC4zMjsgICAgICAgICAgICAgICAgLy8gd3JhcCBhbmdsZSwgcmFkaWFuc1xuICAgIGNvbnN0IGR4ID0gTWF0aC50YW4oYW5nKSAqIHM7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhvdyBmYXIgYSBzdHJhbmQgZHJpZnRzIGluIHggb3ZlciBvbmUgdGlsZSBoZWlnaHRcbiAgICBjdHguc2F2ZSgpO1xuICAgIGZvciAobGV0IGsgPSAtMzsgayA8IG4gKyAzOyBrKyspIHtcbiAgICAgIGNvbnN0IHgwID0gayAqIHBpdGNoO1xuICAgICAgZm9yIChjb25zdCBveSBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgIC8vIGdyb292ZSBiZXR3ZWVuIHR1cm5zXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDcwLDU4LDQwLDAuNTUpJzsgY3R4LmxpbmVXaWR0aCA9IHBpdGNoICogMC4yMjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgwLCBveSk7IGN0eC5saW5lVG8oeDAgKyBkeCwgb3kgKyBzKTsgY3R4LnN0cm9rZSgpO1xuICAgICAgICAvLyB0aGUgbGl0IGNyb3duIG9mIHRoZSB0dXJuXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMzApJzsgY3R4LmxpbmVXaWR0aCA9IHBpdGNoICogMC4zMDtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgwICsgcGl0Y2ggKiAwLjUsIG95KTsgY3R4LmxpbmVUbyh4MCArIHBpdGNoICogMC41ICsgZHgsIG95ICsgcyk7IGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gdHdpc3QgbWFya3MgYWNyb3NzIGVhY2ggdHVyblxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSg5MCw3Niw1MiwwLjI4KSc7IGN0eC5saW5lV2lkdGggPSAxLjI7XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgMTI7IHQrKykge1xuICAgICAgICAgIGNvbnN0IHl5ID0gb3kgKyAodCArIHJuZCgpKSAqIHMgLyAxMiwgeHggPSB4MCArIHBpdGNoICogMC41ICsgZHggKiAoKHl5IC0gb3kpIC8gcyk7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHh4IC0gcGl0Y2ggKiAwLjM1LCB5eSAtIHBpdGNoICogMC4xOCk7IGN0eC5saW5lVG8oeHggKyBwaXRjaCAqIDAuMzUsIHl5ICsgcGl0Y2ggKiAwLjE4KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgLy8gZnV6eiBhbmQgc29pbGluZ1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7XG4gICAgICBjdHguZmlsbFN0eWxlID0gcm5kKCkgPCAwLjYgPyAncmdiYSg3MCw1OCw0MCwwLjE4KScgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjIyKSc7XG4gICAgICBjdHguZmlsbFJlY3QoeCwgeSwgMSwgMSArIHJuZCgpICogMik7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBjb25zdCB5ID0gcm5kKCkgKiBzLCBoID0gcyAqICgwLjA2ICsgcm5kKCkgKiAwLjEwKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHksIDAsIHkgKyBoKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw0OCwzMiwwKScpOyBnMi5hZGRDb2xvclN0b3AoMC41LCAncmdiYSg2MCw0OCwzMiwwLjIyKScpOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNDgsMzIsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoMCwgeSArIGR5LCBzLCBoKTtcbiAgICB9XG4gIH0pO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhpZ2h3YXkgLyBicmlkZ2UgaGVscGVycyAqL1xuXG4vKipcbiAqIEEgY2xvc2VkICh4LCB5KSBQUk9GSUxFIHN3ZXB0IGFsb25nIGEgcGF0aCAtLSB0aGUgb25lIHNoYXBlIGEgbW9kdWxhciBkZWNrIG5lZWRzIGFuZCBub3RoaW5nIGluXG4gKiB0aGUgYm94L3R1YmUvbGF0aGUgdm9jYWJ1bGFyeSBjYW4gZ2l2ZS4gVGhyZWUgcGF0aHM6XG4gKlxuICogICB7IGtpbmQ6ICdzdHJhaWdodCcsIGxlbiwgc2hlYXI/IH0gICBhbG9uZyArWiBmcm9tIC1sZW4vMiB0byArbGVuLzI7IGBzaGVhcmAgYWRkcyBzaGVhciAqIHogdG9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZXJ5IHksIHdoaWNoIGlzIGhvdyBhIFJBTVAga2VlcHMgaXRzIGVuZCBmYWNlcyBWRVJUSUNBTFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoZSBzZWN0aW9uIHN0YXlzIGEgdmVydGljYWwgY3V0LCB0aGUgd2F5IGEgcHJlY2FzdFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudCBpcyBhY3R1YWxseSBjdXQpIHdoaWxlIHRoZSB3aG9sZSBwaWVjZSBjbGltYnMuXG4gKiAgIHsga2luZDogJ2FyYycsIHJhZGl1cywgZGVnIH0gICAgICAgICBlbnRlcmluZyBhbG9uZyArWiBhdCB6ID0gLXpFbnRyeSAoZGVmYXVsdCA4OiB3aGVyZSBhXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJhaWdodCAxNiBtIG1vZHVsZSdzIGVuZCBmYWNlIGlzKSBhbmQgdHVybmluZyB0b3dhcmQgK1hcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFib3V0IGEgdmVydGljYWwgYXhpcyB0aHJvdWdoIChyYWRpdXMsIDAsIC16RW50cnkpLiBUaGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQgZmFjZSdzIGNlbnRyZSBhbmQgeWF3IGFyZSB3aGF0IHRoZSBsZXZlbCBlZGl0b3JcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWlucyB0aGUgbmV4dCBwaWVjZSB0bzsgYGFyY0V4aXQoKWAgcHJpbnRzIHRoZW0uXG4gKlxuICogRmFjZXMgYXJlIEZMQVQtc2hhZGVkIChub24taW5kZXhlZCwgb25lIG5vcm1hbCBwZXIgdHJpYW5nbGUpOiBhIGJveCBnaXJkZXIgaXMgYSBmYWNldGVkIHNvbGlkIGFuZFxuICogYSBzaGFyZWQtdmVydGV4IG5vcm1hbCBhY3Jvc3MgaXRzIDkwLWRlZ3JlZSBhcnJpc2VzIHNoYWRlcyB0aGUgZGFyayBjb3JuZXIgYmFuZCB0aGUgbGF0aGUgaGVscGVyXG4gKiBoYXMgdG8gc3BsaXQgY29ybmVycyB0byBhdm9pZC4gQWxvbmcgYW4gYXJjIHRoYXQgY29zdHMgbm90aGluZyB2aXNpYmxlIGF0IDEuOSBkZWdyZWVzIHBlciBzdGF0aW9uLlxuICpcbiAqIFVWcyBhcmUgTUVUUkVTIGRpdmlkZWQgYnkgYHV2U2NhbGVgOiB1IGFsb25nIHRoZSBwYXRoLCB2IHRoZSBwcm9maWxlJ3Mgb3duIGFyYyBsZW5ndGggZnJvbSBpdHNcbiAqIGZpcnN0IHBvaW50LiBTbyBhIHRpbGUgYm91bmQgb24gdGhlIHN3ZWVwIHJ1bnMgaXRzIHYgVVAgYSB3ZWIgd2hlbiB0aGUgcHJvZmlsZSBzdGFydHMgYXQgdGhlXG4gKiBzb2ZmaXQsIGFuZCBhIHZlcnRpY2FsIG1hcmsgYXQgYSBmaXhlZCB1IGlzIGEgam9pbnQgbGluZSBydW5uaW5nIHJpZ2h0IHJvdW5kIHRoZSBzZWN0aW9uIC0tXG4gKiB3aGljaCBpcyB3aGF0IGEgc2VnbWVudGFsIGRlY2sncyBqb2ludCBsaW5lcyBhcmUuIFRoZSBhc3BoYWx0IHByb2ZpbGUgc3RhcnRzIGF0IGl0cyB0b3AtbGVmdFxuICogY29ybmVyLCBzbyB2IGFjcm9zcyB0aGUgcm9hZCBpcyAwLi4ocm9hZCB3aWR0aCkgYW5kIGEgbGFuZSBsaW5lIGlzIGEgbWFyayBhdCBhIGZpeGVkIHYuXG4gKlxuICogYGNsb3NlZGAgKGRlZmF1bHQgdHJ1ZSkgY2FwcyBib3RoIGVuZHMgd2l0aCB0aGUgdHJpYW5ndWxhdGVkIHByb2ZpbGUuIEVuZCBmYWNlcyBhcmUgZmxhdCBhbmRcbiAqIHNxdWFyZSB3aXRoIG5vIG92ZXJoYW5nLCB3aGljaCBpcyB0aGUgd2hvbGUgbW9kdWxhciBjb250cmFjdCBhdCBhIGpvaW50LlxuICovXG5mdW5jdGlvbiBzd2VlcFByb2ZpbGUobzogYW55KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBvLnBvbHksIG0gPSBwdHMubGVuZ3RoLCBwYXRoID0gby5wYXRoLCBzZWcgPSBvLnNlZyA/PyAocGF0aC5raW5kID09PSAnYXJjJyA/IDEyIDogMSk7XG4gIGNvbnN0IHV2UyA9IG8udXZTY2FsZSA/PyAxO1xuICBjb25zdCB6RW50cnkgPSBwYXRoLnpFbnRyeSA/PyA4O1xuICAvLyBzdGF0aW9uIHRyYW5zZm9ybTogcHJvZmlsZSAocHgsIHB5KSAtPiB3b3JsZCwgcGx1cyB0aGUgYWxvbmctcGF0aCBkaXN0YW5jZSBpbiBtZXRyZXNcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyKTogeyBQOiAocHg6IG51bWJlciwgcHk6IG51bWJlcikgPT4gbnVtYmVyW10sIHM6IG51bWJlciB9ID0+IHtcbiAgICBjb25zdCB0ID0gaSAvIHNlZztcbiAgICBpZiAocGF0aC5raW5kID09PSAnYXJjJykge1xuICAgICAgY29uc3QgUiA9IHBhdGgucmFkaXVzLCB0aCA9IChwYXRoLmRlZyAqIE1hdGguUEkgLyAxODApICogdDtcbiAgICAgIGNvbnN0IGN4ID0gUiwgY3ogPSAtekVudHJ5O1xuICAgICAgcmV0dXJuIHsgUDogKHB4LCBweSkgPT4gW2N4IC0gKFIgLSBweCkgKiBNYXRoLmNvcyh0aCksIHB5LCBjeiArIChSIC0gcHgpICogTWF0aC5zaW4odGgpXSwgczogUiAqIHRoIH07XG4gICAgfVxuICAgIGNvbnN0IEwgPSBwYXRoLmxlbiwgeiA9IC1MIC8gMiArIEwgKiB0LCBzaCA9IHBhdGguc2hlYXIgPz8gMDtcbiAgICByZXR1cm4geyBQOiAocHgsIHB5KSA9PiBbcHgsIHB5ICsgc2ggKiB6LCB6XSwgczogeiArIEwgLyAyIH07XG4gIH07XG4gIC8vIHByb2ZpbGUgYXJjIGxlbmd0aCBwZXIgcG9pbnQsIGZvciB2XG4gIGNvbnN0IHZBdDogbnVtYmVyW10gPSBbMF07XG4gIGZvciAobGV0IGogPSAxOyBqIDwgbTsgaisrKSB2QXQucHVzaCh2QXRbaiAtIDFdICsgTWF0aC5oeXBvdChwdHNbal1bMF0gLSBwdHNbaiAtIDFdWzBdLCBwdHNbal1bMV0gLSBwdHNbaiAtIDFdWzFdKSk7XG4gIGNvbnN0IHZFbmQgPSB2QXRbbSAtIDFdICsgTWF0aC5oeXBvdChwdHNbMF1bMF0gLSBwdHNbbSAtIDFdWzBdLCBwdHNbMF1bMV0gLSBwdHNbbSAtIDFdWzFdKTtcbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCB1djogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgdHJpID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10sIHVhOiBudW1iZXJbXSwgdWI6IG51bWJlcltdLCB1YzogbnVtYmVyW10pID0+IHtcbiAgICBwb3MucHVzaCguLi5hLCAuLi5iLCAuLi5jKTsgdXYucHVzaCguLi51YSwgLi4udWIsIC4uLnVjKTtcbiAgfTtcbiAgbGV0IHByZXYgPSBhdCgwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2VnOyBpKyspIHtcbiAgICBjb25zdCBjdXIgPSBhdChpKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG07IGorKykge1xuICAgICAgY29uc3QgayA9IChqICsgMSkgJSBtLCBwMCA9IHB0c1tqXSwgcDEgPSBwdHNba107XG4gICAgICBjb25zdCB2MCA9IHZBdFtqXSAvIHV2UywgdjEgPSAoayA9PT0gMCA/IHZFbmQgOiB2QXRba10pIC8gdXZTO1xuICAgICAgY29uc3QgYSA9IHByZXYuUChwMFswXSwgcDBbMV0pLCBiID0gcHJldi5QKHAxWzBdLCBwMVsxXSksIGMgPSBjdXIuUChwMVswXSwgcDFbMV0pLCBkID0gY3VyLlAocDBbMF0sIHAwWzFdKTtcbiAgICAgIGNvbnN0IHUwID0gcHJldi5zIC8gdXZTLCB1MSA9IGN1ci5zIC8gdXZTO1xuICAgICAgLy8gKGEsIGMsIGQpIGFuZCAoYSwgYiwgYyk6IG91dHdhcmQgZm9yIGEgY291bnRlci1jbG9ja3dpc2UgcHJvZmlsZSwgc2VlIHRoZSBub3RlIGluIGh3LmNvbW1vblxuICAgICAgdHJpKGEsIGMsIGQsIFt1MCwgdjBdLCBbdTEsIHYxXSwgW3UxLCB2MF0pO1xuICAgICAgdHJpKGEsIGIsIGMsIFt1MCwgdjBdLCBbdTAsIHYxXSwgW3UxLCB2MV0pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIGlmIChvLmNsb3NlZCAhPT0gZmFsc2UpIHtcbiAgICBjb25zdCBpZHggPSBUSFJFRS5TaGFwZVV0aWxzLnRyaWFuZ3VsYXRlU2hhcGUocHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIocFswXSwgcFsxXSkpLCBbXSk7XG4gICAgY29uc3QgczAgPSBhdCgwKSwgczEgPSBhdChzZWcpO1xuICAgIGZvciAoY29uc3QgW2lhLCBpYiwgaWNdIG9mIGlkeCkge1xuICAgICAgY29uc3QgUCA9IChTOiBhbnksIHE6IG51bWJlcikgPT4gUy5QKHB0c1txXVswXSwgcHRzW3FdWzFdKTtcbiAgICAgIGNvbnN0IFUgPSAocTogbnVtYmVyKSA9PiBbcHRzW3FdWzBdIC8gdXZTLCBwdHNbcV1bMV0gLyB1dlNdO1xuICAgICAgLy8gdGhlIHN0YXJ0IGNhcCBmYWNlcyBCQUNLIGFsb25nIHRoZSBwYXRoOiByZXZlcnNlZCB3aW5kaW5nOyB0aGUgZW5kIGNhcCBmYWNlcyBmb3J3YXJkXG4gICAgICB0cmkoUChzMCwgaWEpLCBQKHMwLCBpYyksIFAoczAsIGliKSwgVShpYSksIFUoaWMpLCBVKGliKSk7XG4gICAgICB0cmkoUChzMSwgaWEpLCBQKHMxLCBpYiksIFAoczEsIGljKSwgVShpYSksIFUoaWIpLCBVKGljKSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHBvcyksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHV2KSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7ICAgLy8gbm9uLWluZGV4ZWQ6IG9uZSBmbGF0IG5vcm1hbCBwZXIgZmFjZVxuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBDQVNUIENPTkNSRVRFIHRpbGUsIGFzIGEgbXVsdGlwbGllciBvbiBhbiBlbnZlbG9wZS10b25lZCBtYXRlcmlhbC4gV2hhdCBhIHByZWNhc3Qgb3IgaW4tc2l0dSBmYWNlXG4gKiBjYXJyaWVzIGF0IHByb3AgZGlzdGFuY2UsIGluIHRoZSBvcmRlciBpdCBpcyBsYWlkIGRvd246XG4gKiAgIC0gYHRpZXNgICAgICBhIFJFR1VMQVIgZ3JpZCBvZiBmb3JtLXRpZSBob2xlczogZGFyayBjb25lcyB3aXRoIGEgcGFsZXIgbGlwLCBgdGllc2AgPSBbY29scywgcm93c11cbiAqICAgICAgICAgICAgICAgIHBlciB0aWxlLiBSYW5kb20gcGl0cyBjYW5ub3Qgc2F5IGBjYXN0IGNvbmNyZXRlYDsgdGhlIGdyaWQgY2FuLlxuICogICAtIGBwb3VyYCAgICAgaG9yaXpvbnRhbCBsaWZ0L3BvdXIgbGluZXMsIGBwb3VyYCBwZXIgdGlsZSwgYSBkYXJrIGhhaXJsaW5lIHdpdGggYSBwYWxlIGxpcC5cbiAqICAgLSBgc2VhbXNgICAgIHZlcnRpY2FsIGpvaW50IGxpbmVzIChzZWdtZW50IGpvaW50cyBvbiBhIGRlY2ssIHBhbmVsIGpvaW50cyBvbiBhIHdhbGwpLlxuICogICAtIHN0cmVha3MgZnJvbSB0aGUgdG9wIChyYWluKSwgYSB3YXNoIHJpc2luZyBmcm9tIHRoZSBib3R0b20gKGBjb3ZlcmFnZWAsIGB3YXNoQWxwaGFgKSxcbiAqICAgICBgY2xvdWRzYCwgYHBpdHNgIChyYW5kb20gcGluaG9sZXMpLCBhIGBtb3NzYCBiYW5kLCBgcnVzdFN0cmVha3NgIGhhbmdpbmcgZnJvbSBgcnVzdFZgLFxuICogICAgIGBzb290YCAoYSBuZWFyLWJsYWNrIGZsYXQgd2FzaCBvdmVyIHRoZSBib3R0b20gYHNvb3RDb3ZgIC0tIGV4aGF1c3QgdW5kZXIgYSBkZWNrKSwgZ3JhaW4uXG4gKiBFdmVyeSBjb2xvdXIgaXMgYSByYXRpbyBhZ2FpbnN0IHRoZSBtYXRlcmlhbCdzIGVudmVsb3BlLCBzbyB0aGUgdGlsZSBvbmx5IGV2ZXIgZGFya2VucyB0b3dhcmRcbiAqIG1lYXN1cmVkIHRvbmVzLiBEYXJrIGNvcmVzIGFyZSBjbGFtcGVkIGJ5IHRoZSBjYWxsZXIncyByYXRpb3M7IG5vdGhpbmcgaGVyZSBnb2VzIGJlbG93IHRoZW0uXG4gKi9cbmZ1bmN0aW9uIGNvbmNyZXRlVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IFsxLCAxLCAxXTtcbiAgICBjb25zdCB3cmFwID0gKGRyYXc6IChkeDogbnVtYmVyLCBkeTogbnVtYmVyKSA9PiB2b2lkKSA9PiB7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBkcmF3KGR4LCBkeSk7IH07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBjb25zdCB3YXNoID0gby53YXNoID8/IFswLjcwLCAwLjcwLCAwLjY2XTtcbiAgICAvLyBjbG91ZHMgZmlyc3Q6IHRoZSBicm9hZCBtb3R0bGluZyBvZiBhIGNhc3QgZmFjZSwgdGVucyBvZiBjZW50aW1ldHJlcyBhY3Jvc3NcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmNsb3VkcyA/PyAzMCk7IGkrKykge1xuICAgICAgY29uc3QgdiA9IG8uY2xvdWQgPz8gWzAuOTAsIDAuOTAsIDAuODhdO1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoby5jbG91ZFIgPz8gMC4xMCkgKiAoMC40ICsgcm5kKCkgKiAxLjQpLCBhID0gKG8uY2xvdWRBbHBoYSA/PyAwLjE4KSAqICgwLjQgKyBybmQoKSk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICB9XG4gICAgLy8gcmFpbiBzdHJlYWtzIGZyb20gdGhlIHRvcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3RyZWFrcyA/PyAyMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAoby5zdHJlYWtXID8/IDAuMDEwKSwgbGVuID0gcyAqICgwLjE1ICsgcm5kKCkgKiAoby5zdHJlYWtMZW4gPz8gMC42KSksIGEgPSAoby5zdHJlYWtBbHBoYSA/PyAwLjEwKSArIHJuZCgpICogMC4xNDtcbiAgICAgIGNvbnN0IHYgPSBvLnN0cmVhayA/PyB3YXNoO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgbGVuKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIDAsIHcsIGxlbik7XG4gICAgfVxuICAgIC8vIHdhc2ggZnJvbSB0aGUgYm90dG9tXG4gICAgY29uc3QgY292ID0gby5jb3ZlcmFnZSA/PyAwLjI1LCB3YXNoQSA9IG8ud2FzaEFscGhhID8/IDAuNTtcbiAgICBpZiAod2FzaEEgPiAwKSB7XG4gICAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdikpO1xuICAgICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7d2FzaEF9KWApOyBncmFkLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBICogMC40NX0pYCk7IGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB9XG4gICAgLy8gc29vdDogZXhoYXVzdCB1bmRlciBhIGRlY2ssIGEgZmxhdCBkYXJrIGJhbmQgb3ZlciB0aGUgYm90dG9tIG9mIHRoZSB0aWxlIHdpdGggYSByYWdnZWQgdG9wXG4gICAgaWYgKG8uc29vdCkge1xuICAgICAgY29uc3QgdiA9IG8uc29vdCwgY3YgPSBvLnNvb3RDb3YgPz8gMC4zLCBhID0gby5zb290QWxwaGEgPz8gMC41O1xuICAgICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjdikpO1xuICAgICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGdyYWQuYWRkQ29sb3JTdG9wKDAuNywgYHJnYmEoJHtyZ2Iodil9LCR7YSAqIDAuNn0pYCk7IGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc29vdEJsb3RzID8/IDI0KTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzICogKDEgLSBjdiAqICgwLjIgKyBybmQoKSAqIDEuMSkpLCByID0gcyAqICgwLjAzICsgcm5kKCkgKiAwLjEwKTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHthICogKDAuMyArIHJuZCgpICogMC41KX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciAqIDEuNiwgciwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcnVzdCBzdHJlYWtzIGhhbmdpbmcgZnJvbSBhIHYgbGluZSAoYSBkcmFpbiBvdXRsZXQsIGEgYmVhcmluZyBzaGVsZiwgYSBwYXJhcGV0IGpvaW50KVxuICAgIGZvciAoY29uc3QgcnMgb2YgKG8ucnVzdFN0cmVha3MgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCB2ID0gcnMudG9uZSA/PyBbMC42MiwgMC40MiwgMC4yMl0sIHkwID0gcyAqICgxIC0gcnMudik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChycy5jb3VudCA/PyA2KTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBycy51ICE9PSB1bmRlZmluZWQgPyBzICogcnMudSArIChybmQoKSAtIDAuNSkgKiBzICogKHJzLnNwcmVhZCA/PyAwLjAyKSA6IHJuZCgpICogcztcbiAgICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIHMgKiAocnMud2lkdGggPz8gMC4wMTApLCBsZW4gPSBzICogKChycy5sZW4gPz8gMC4xNSkgKyBybmQoKSAqIChycy5sZW5WYXIgPz8gMC4yNSkpLCBhID0gKHJzLmFscGhhID8/IDAuMzUpICsgcm5kKCkgKiAwLjM7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkwLCAwLCB5MCArIGxlbik7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNiwgYHJnYmEoJHtyZ2Iodil9LCR7YSAqIDAuNn0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIHkwLCB3LCBsZW4pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBwb3VyIC8gbGlmdCBsaW5lczogaG9yaXpvbnRhbCwgb25lIGRhcmsgaGFpcmxpbmUgd2l0aCBhIHBhbGUgbGlwIHVuZGVyIGl0XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5wb3VyID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHkgPSBNYXRoLnJvdW5kKHMgKiAoKG8ucG91ckF0ID8/IDAuMzApICsgaSAvIG8ucG91cikpICUgcywgdiA9IG8ucG91clRvbmUgPz8gWzAuNzIsIDAuNzEsIDAuNjhdLCBoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChzICogMC4wMDQpKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih2KX0sJHtvLnBvdXJBbHBoYSA/PyAwLjQ1fSlgOyBjdHguZmlsbFJlY3QoMCwgeSwgcywgaCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iodil9LCR7KG8ucG91ckFscGhhID8/IDAuNDUpICogMC4zfSlgOyBjdHguZmlsbFJlY3QoMCwgeSArIGgsIHMsIGgpO1xuICAgIH1cbiAgICAvLyB2ZXJ0aWNhbCBqb2ludCBsaW5lc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc2VhbXMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IE1hdGgucm91bmQocyAqICgoby5zZWFtQXQgPz8gMC40MikgKyBpIC8gby5zZWFtcykpICUgcywgdiA9IG8uc2VhbSA/PyBbMC43MiwgMC43MSwgMC42OF0sIHcgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHMgKiAoby5zZWFtVyA/PyAwLjAwNCkpKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih2KX0sJHtvLnNlYW1BbHBoYSA/PyAwLjV9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCB3LCBzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih2KX0sJHsoby5zZWFtQWxwaGEgPz8gMC41KSAqIDAuM30pYDsgY3R4LmZpbGxSZWN0KHggKyB3LCAwLCB3LCBzKTtcbiAgICB9XG4gICAgLy8gZm9ybS10aWUgaG9sZXMgb24gYSBncmlkXG4gICAgaWYgKG8udGllcykge1xuICAgICAgY29uc3QgW25jLCBucl0gPSBvLnRpZXMsIHIgPSBzICogKG8udGllUiA/PyAwLjAwNiksIHYgPSBvLnRpZSA/PyBbMC40NSwgMC40NCwgMC40Ml07XG4gICAgICBjb25zdCBveCA9IHMgKiAoby50aWVPZmY/LlswXSA/PyAwLjUpIC8gbmMsIG95ID0gcyAqIChvLnRpZU9mZj8uWzFdID8/IDAuNSkgLyBucjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmM7IGkrKykgZm9yIChsZXQgaiA9IDA7IGogPCBucjsgaisrKSB7XG4gICAgICAgIGNvbnN0IHggPSBveCArIGkgKiBzIC8gbmMgKyAocm5kKCkgLSAwLjUpICogMC40LCB5ID0gb3kgKyBqICogcyAvIG5yICsgKHJuZCgpIC0gMC41KSAqIDAuNDtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCAtIHIgKiAwLjIsIHkgLSByICogMC4yLCAwLCB4LCB5LCByKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHYpfSwkezAuODV9KWApOyBnMi5hZGRDb2xvclN0b3AoMC43NSwgYHJnYmEoJHtyZ2Iodil9LCR7MC43fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7IHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICAgIC8vIGEgZmFpbnQgZHJpcCBiZWxvdyB0aGUgaG9sZSwgdGhlIHdheSBhIHRpZSBob2xlIHdlZXBzXG4gICAgICAgIGlmIChybmQoKSA8IChvLnRpZURyaXAgPz8gMC4zNSkpIHtcbiAgICAgICAgICBjb25zdCBnMyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5LCAwLCB5ICsgciAqIDYpO1xuICAgICAgICAgIGczLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih3YXNoKX0sMC4zNSlgKTsgZzMuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMzsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4IC0gciAqIDAuNCwgeSwgciAqIDAuOCwgciAqIDYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJhbmRvbSBwaW5ob2xlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ucGl0cyA/PyAzMDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHYgPSBvLnBpdCA/PyBbMC41MCwgMC40OSwgMC40Nl07XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gKG8ucGl0UiA/PyAwLjkpICogKDAuNSArIHJuZCgpICogMS4zKSwgYSA9IDAuMjUgKyBybmQoKSAqIDAuNTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIgKiAyKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNCwgYHJnYmEoJHtyZ2Iodil9LCR7YSAqIDAuNDV9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIgKiAyLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgIH1cbiAgICAvLyBtb3NzIC8gYWxnYWU6IGEgZ3JlZW4gd2FzaCBvdmVyIHRoZSBib3R0b20gYmFuZCBwbHVzIGNsdXN0ZXJlZCBjYXJwZXRzXG4gICAgaWYgKG8ubW9zcykge1xuICAgICAgY29uc3QgbXYgPSBvLm1vc3MsIGJhbmQgPSBvLm1vc3NCYW5kID8/IDAuMTI7XG4gICAgICBjb25zdCBtZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBiYW5kICogMS4zKSk7XG4gICAgICBtZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IobXYpfSwke28ubW9zc1dhc2ggPz8gMC40NX0pYCk7IG1nLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihtdil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbWc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ubW9zc0NsdXN0ZXJzID8/IDE2KTsgaysrKSB7XG4gICAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMS41KSAqIHMgKiBiYW5kLCBjciA9IHMgKiAoMC4wMSArIHJuZCgpICogMC4wMyk7XG4gICAgICAgIGNvbnN0IGNnID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGN4LCBjeSwgMCwgY3gsIGN5LCBjcik7XG4gICAgICAgIGNnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihtdil9LDAuNylgKTsgY2cuYWRkQ29sb3JTdG9wKDAuNiwgYHJnYmEoJHtyZ2IobXYpfSwwLjM1KWApOyBjZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IobXYpfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY2c7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4ICsgZHgsIGN5LCBjciwgY3IgKiAwLjYsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBzcGFsbHM6IGEgZmV3IHBhbGUgcGF0Y2hlcyB3aXRoIGEgZGFyayByaW0sIHdoZXJlIHRoZSBjb3ZlciBoYXMgYnJva2VuIG9mZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BhbGxzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDEyICsgcm5kKCkgKiAwLjAyKSwgdiA9IG8uc3BhbGwgPz8gWzAuODAsIDAuNzgsIDAuNzRdO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHYpfSwwLjU1KWA7XG4gICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciwgciAqICgwLjYgKyBybmQoKSAqIDAuNiksIHJuZCgpICogMywgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICB9XG4gICAgLy8gZ3JhaW5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmdyYWluID8/IDIwMDApOyBpKyspIHtcbiAgICAgIGNvbnN0IGxvID0gby5ncmFpbkxvID8/IDIwMDsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgdiA9IGxvICsgTWF0aC5yb3VuZChybmQoKSAqICgyNTUgLSBsbykpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LCR7by5ncmFpbkFscGhhID8/IDAuMTB9KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAxLjUsIDEuNSk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqXG4gKiBST0FEIFNVUkZBQ0UgdGlsZTogYXNwaGFsdCBhcyBhIHJhdGlvIGZpbGwgb3ZlciBhIHBhbGUgTUFSSyBlbnZlbG9wZSwgc28gdGhlIGxhbmUgbGluZXMgY2FuIGJlXG4gKiBicmlnaHRlciB0aGFuIHRoZSBzdXJmYWNlIGEgbXVsdGlwbHkgY291bGQgb25seSBkYXJrZW4uIHYgcnVucyBBQ1JPU1MgdGhlIGNhcnJpYWdld2F5ICgwIGF0IG9uZVxuICoga2VyYiwgMSBhdCB0aGUgb3RoZXIgLS0gdGhlIGFzcGhhbHQgcHJvZmlsZSBzdGFydHMgYXQgaXRzIHRvcC1sZWZ0IGNvcm5lciBhbmQgYHV2U2NhbGVgIGlzIHRoZVxuICogcm9hZCB3aWR0aCksIHUgcnVucyBBTE9ORyBpdC4gYGxpbmVzYCBhcmUgbWFya3MgYXQgYSBmaXhlZCB2OiBgeyB2LCB3LCB0b25lLCBkYXNoZXM/LCBkYXNoRnJhYz8gfWAuXG4gKiBgZGFzaGVzYCB3aG9sZSBwZXJpb2RzIHBlciB0aWxlIHNvIHRoZSBwYXR0ZXJuIHdyYXBzLiBXaGVlbCB0cmFja3MgZGFya2VuIHR3byBiYW5kcyBwZXIgbGFuZS5cbiAqL1xuZnVuY3Rpb24gcm9hZFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyBbMC40LCAwLjQsIDAuNF07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBhZ2dyZWdhdGUgc3BlY2tsZSBvdmVyIHRoZSBhc3BoYWx0LCBib3RoIHdheXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwZWNrbGUgPz8gNTAwMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgayA9IHJuZCgpLCBhID0gMC4xMCArIHJuZCgpICogMC4yNTtcbiAgICAgIGNvbnN0IHYgPSBrIDwgMC41ID8gby5zcGVja0RhcmsgPz8gWzAuMzAsIDAuMzAsIDAuMzBdIDogby5zcGVja0xpZ2h0ID8/IFswLjYyLCAwLjYyLCAwLjYwXTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih2KX0sJHthfSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMSArIHJuZCgpICogMS41LCAxICsgcm5kKCkgKiAxLjUpO1xuICAgIH1cbiAgICAvLyBwYXRjaGVzOiBicm9hZCBzb2Z0IHRvbmUgZHJpZnQgc28gYSAxNiBtIHNwYW4gaXMgbm90IG9uZSBmbGF0IHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5wYXRjaGVzID8/IDE4KTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjE2KSwgayA9IHJuZCgpO1xuICAgICAgY29uc3QgdiA9IGsgPCAwLjUgPyBvLnBhdGNoRGFyayA/PyBbMC4zNCwgMC4zNCwgMC4zNF0gOiBvLnBhdGNoTGlnaHQgPz8gWzAuNDgsIDAuNDgsIDAuNDddO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7MC4yNSArIHJuZCgpICogMC4zfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciAqIDIuMiwgciwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIHdoZWVsIHRyYWNrczogdHdvIGRhcmtlciBiYW5kcyBwZXIgbGFuZSwgYWxvbmcgdVxuICAgIGZvciAoY29uc3QgdCBvZiAoby50cmFja3MgPz8gW10pIGFzIG51bWJlcltdKSB7XG4gICAgICBjb25zdCB5ID0gcyAqIHQsIGggPSBzICogKG8udHJhY2tXID8/IDAuMDM1KSwgdiA9IG8udHJhY2sgPz8gWzAuMzMsIDAuMzMsIDAuMzNdO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSAtIGgsIDAsIHkgKyBoKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sMClgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtyZ2Iodil9LCR7by50cmFja0FscGhhID8/IDAuMzV9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGN0eC5maWxsUmVjdCgwLCB5IC0gaCwgcywgMiAqIGgpO1xuICAgIH1cbiAgICAvLyB0aGUgbWFya3MsIHdvcm46IGRyYXduIGF0IGFscGhhIHdpdGggYSBmZXcgY2hpcHMga25vY2tlZCBvdXRcbiAgICBmb3IgKGNvbnN0IGxuIG9mIChvLmxpbmVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgeSA9IHMgKiAoMSAtIGxuLnYpLCBoID0gTWF0aC5tYXgoMS41LCBzICogbG4udyksIHYgPSBsbi50b25lID8/IFsxLCAxLCAxXSwgYSA9IGxuLmFscGhhID8/IDAuOTtcbiAgICAgIGlmIChsbi5kYXNoZXMpIHtcbiAgICAgICAgY29uc3QgcGVyID0gcyAvIGxuLmRhc2hlcywgZGwgPSBwZXIgKiAobG4uZGFzaEZyYWMgPz8gMC4zNSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG4uZGFzaGVzOyBpKyspIHsgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHYpfSwke2F9KWA7IGN0eC5maWxsUmVjdChpICogcGVyICsgcGVyICogMC4yLCB5IC0gaCAvIDIsIGRsLCBoKTsgfVxuICAgICAgfSBlbHNlIHsgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHYpfSwke2F9KWA7IGN0eC5maWxsUmVjdCgwLCB5IC0gaCAvIDIsIHMsIGgpOyB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChsbi5jaGlwcyA/PyAzMCk7IGkrKykge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IoYmFzZSl9LCR7MC40ICsgcm5kKCkgKiAwLjV9KWA7XG4gICAgICAgIGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHkgLSBoIC8gMiArIHJuZCgpICogaCwgMSArIHJuZCgpICogNCwgMSArIHJuZCgpICogMik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGZhaW50IGdyaW1lIHN0cmVha3MgYWxvbmcgdGhlIHRyYXZlbCBkaXJlY3Rpb25cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNtZWFycyA/PyA0MCk7IGkrKykge1xuICAgICAgY29uc3QgeSA9IHJuZCgpICogcywgeCA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjEgKyBybmQoKSAqIDAuNCksIHYgPSBvLnNtZWFyID8/IFswLjM2LCAwLjM2LCAwLjM2XTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHgsIDAsIHggKyBsZW4sIDApO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHYpfSwwKWApOyBnMi5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke3JnYih2KX0sJHswLjA4ICsgcm5kKCkgKiAwLjE1fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIHksIGxlbiwgMSArIHJuZCgpICogMyk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBIQVpBUkQgdGlsZTogZGlhZ29uYWwgeWVsbG93LWFuZC1ibGFjayAob3IgcmVkLWFuZC13aGl0ZSkgY2hldnJvbiBiYW5kcywgYW4gaW50ZWdlciBudW1iZXIgb2ZcbiAqIHBlcmlvZHMgYWNyb3NzIHRoZSB0aWxlIHNvIGl0IHdyYXBzLCBvdmVyIGEgc2N1ZmZlZCBtdWx0aXBseSBzbyB0aGUgcGFpbnQgcmVhZHMgd29ybi4gQm91bmQgb25cbiAqIGEgV0hJVEUtaXNoIGVudmVsb3BlIG1hdGVyaWFsIHdpdGggYHBhbmVsYCBvciBgaGVpZ2h0YCBVVnMgc28gdGhlIGJhbmQgbGFuZHMgd2hlcmUgaXQgaXMgcGFpbnRlZC5cbiAqIGBwZXJpb2RzYCBkaWFnb25hbCBzdHJpcGUgcGFpcnMgcGVyIHRpbGUsIGBhbmdsZWAgaW4gcmFkaWFucy4gYGFib3ZlYCAoMC4uMSBvZiB2KSBsZWF2ZXMgdGhlIHRpbGVcbiAqIGFib3ZlIHRoYXQgaGVpZ2h0IGF0IGBwbGFpbmAgc28gT05FIGNvbXBvbmVudCBjYW4gY2FycnkgYSBzdHJpcGVkIGZvb3QgYW5kIGEgcGxhaW4gc2hhZnQuXG4gKi9cbmZ1bmN0aW9uIGhhemFyZFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgYSA9IG8uYSA/PyBbMSwgMC44MiwgMC4xXSwgYiA9IG8uYiA/PyBbMC4xNiwgMC4xNSwgMC4xNF0sIHBlciA9IG8ucGVyaW9kcyA/PyA0LCBhbmcgPSBvLmFuZ2xlID8/IE1hdGguUEkgLyA0O1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGEpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgdyA9IHMgLyBwZXI7ICAgLy8gb25lIHBhaXIgcGVyIHcgYWxvbmcgdGhlIHBlcnBlbmRpY3VsYXJcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiKX0pYDtcbiAgICAvLyBkcmF3IHRoZSBkYXJrIHN0cmlwZXMgYXMgbG9uZyByb3RhdGVkIHJlY3RhbmdsZXMsIHdyYXBwZWQgb24gYWxsIHNpZGVzXG4gICAgZm9yIChsZXQgaSA9IC1wZXIgKiAyOyBpIDwgcGVyICogMzsgaSsrKSB7XG4gICAgICBjb25zdCBjID0gaSAqIHcgKyB3ICogMC41O1xuICAgICAgY3R4LnNhdmUoKTsgY3R4LnRyYW5zbGF0ZShzIC8gMiwgcyAvIDIpOyBjdHgucm90YXRlKGFuZyk7XG4gICAgICBjdHguZmlsbFJlY3QoYyAtIHMgKiAxLjUgLSAwLCAtcyAqIDIsIHcgKiAwLjUsIHMgKiA0KTtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICAgIC8vIHRoZSBiYW5kIHN0b3BzIGF0IGBhYm92ZWA6IGV2ZXJ5dGhpbmcgaGlnaGVyIGlzIHRoZSBwbGFpbiB0b25lXG4gICAgaWYgKG8uYWJvdmUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcGxhaW4gPSBvLnBsYWluID8/IFsxLCAxLCAxXTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKHBsYWluKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMgKiAoMSAtIG8uYWJvdmUpKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zY3VmZnMgPz8gNjApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMDYpLCB2ID0gMC41ICsgcm5kKCkgKiAwLjM1O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sMC41KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAxNTAwKTsgaSsrKSB7IGNvbnN0IHYgPSAxNzAgKyBNYXRoLnJvdW5kKHJuZCgpICogODUpOyBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4xMilgOyBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCBybmQoKSAqIHMsIDEuNSwgMS41KTsgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqXG4gKiBFQVJUSCB0aWxlOiBkcnkgY29tcGFjdGVkIGZpbGwgLS0gYSB3YXJtIHRhbiBkcmlmdCB3aXRoIHN0b25lcywgZGFya2VyIGRhbXAgcGF0Y2hlcyBhbmQgc3BhcnNlXG4gKiBncmVlbiB3ZWVkIHR1ZnRzLCBhcyBhIG11bHRpcGxpZXIgb24gYW4gZW52ZWxvcGUtdG9uZWQgbWF0ZXJpYWwuIFBsYW4tcHJvamVjdGVkIG9uIHRoZSBiYW5rLlxuICovXG5mdW5jdGlvbiBlYXJ0aFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyBbMSwgMSwgMV07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBjb25zdCB3cmFwID0gKGRyYXc6IChkeDogbnVtYmVyLCBkeTogbnVtYmVyKSA9PiB2b2lkKSA9PiB7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBkcmF3KGR4LCBkeSk7IH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5jbG91ZHMgPz8gNDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHYgPSBybmQoKSA8IDAuNSA/IG8uZGFyayA/PyBbMC43MiwgMC42NiwgMC41OF0gOiBvLmxpZ2h0ID8/IFswLjk2LCAwLjk0LCAwLjkwXTtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDYgKyBybmQoKSAqIDAuMTYpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7MC4yNSArIHJuZCgpICogMC4zfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciwgciAqICgwLjUgKyBybmQoKSksIHJuZCgpICogMywgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zdG9uZXMgPz8gMjYwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMSArIHJuZCgpICogcyAqIDAuMDA4LCBrID0gcm5kKCk7XG4gICAgICBjb25zdCB2ID0gayA8IDAuNCA/IFswLjYsIDAuNTgsIDAuNTRdIDogayA8IDAuOCA/IFswLjg2LCAwLjg0LCAwLjgwXSA6IFswLjUsIDAuNDgsIDAuNDVdO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHYpfSwkezAuNSArIHJuZCgpICogMC40NX0pYDtcbiAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByLCByICogKDAuNiArIHJuZCgpICogMC42KSwgcm5kKCkgKiAzLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICAvLyB3ZWVkczogc3BhcnNlIGdyZWVuIHR1ZnRzLCBkcmF3biBvdmVyICh0aGV5IGFyZSBCUklHSFRFUiB0aGFuIGRyeSBlYXJ0aCBpbiBncmVlbilcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLndlZWRzID8/IDE0KTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIG4gPSA2ICsgTWF0aC5yb3VuZChybmQoKSAqIDEwKSwgdiA9IG8ud2VlZCA/PyBbMC40NSwgMC41OCwgMC4yOF07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IHJuZCgpICogcyAqIDAuMDIsIHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSgke3JnYih2KX0sJHswLjU1ICsgcm5kKCkgKiAwLjR9KWA7IGN0eC5saW5lV2lkdGggPSAxICsgcm5kKCkgKiAxLjU7XG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCB5ICsgZHkpOyBjdHgubGluZVRvKHggKyBkeCArIChybmQoKSAtIDAuNSkgKiA4LCB5ICsgZHkgLSA0IC0gcm5kKCkgKiA4KTsgY3R4LnN0cm9rZSgpOyB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAzMDAwKTsgaSsrKSB7IGNvbnN0IHYgPSAxOTAgKyBNYXRoLnJvdW5kKHJuZCgpICogNjUpOyBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4xMilgOyBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCBybmQoKSAqIHMsIDEuNSwgMS41KTsgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDSEVRVUVSIFBMQVRFIHRpbGU6IHRoZSByYWlzZWQgbG96ZW5nZXMgb2YgYSBzdGVlbCB3YWxrd2F5IGZsb29yIGluIHR3byBhbHRlcm5hdGluZyBvcmllbnRhdGlvbnMsXG4gKiBhcyBtYXAgQU5EIGJ1bXAsIG9uIGEgd29ybiBwYWludGVkIGVudmVsb3BlLiBgbmAgbG96ZW5nZXMgcGVyIHRpbGUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gY2hlcXVlclRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyBbMC42MiwgMC42MiwgMC42Ml0sIGhpID0gby5oaSA/PyBbMC45MCwgMC45MCwgMC44OF0sIGxvID0gby5sbyA/PyBbMC40NSwgMC40NSwgMC40Nl07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBuID0gby5uID8/IDgsIGNlbGwgPSBzIC8gbjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gKGkgKyAwLjUpICogY2VsbCwgY3kgPSAoaiArIDAuNSkgKiBjZWxsLCBhbmcgPSAoKGkgKyBqKSAlIDIgPyAxIDogLTEpICogTWF0aC5QSSAvIDQ7XG4gICAgICBjdHguc2F2ZSgpOyBjdHgudHJhbnNsYXRlKGN4LCBjeSk7IGN0eC5yb3RhdGUoYW5nKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihsbyl9LDAuNylgOyBjdHguZmlsbFJlY3QoLWNlbGwgKiAwLjMwICsgMSwgLWNlbGwgKiAwLjA4ICsgMSwgY2VsbCAqIDAuNjAsIGNlbGwgKiAwLjE2KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihoaSl9LDAuODUpYDsgY3R4LmZpbGxSZWN0KC1jZWxsICogMC4zMCwgLWNlbGwgKiAwLjA4LCBjZWxsICogMC42MCwgY2VsbCAqIDAuMTYpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmltZSA/PyAzMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xNSksIHYgPSBvLmdyaW1lVG9uZSA/PyBbMC42LCAwLjYsIDAuNThdO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7MC4xNSArIHJuZCgpICogMC4zfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmdyYWluID8/IDI1MDApOyBpKyspIHsgY29uc3QgdiA9IDE4MCArIE1hdGgucm91bmQocm5kKCkgKiA3NSk7IGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjEyKWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMS41LCAxLjUpOyB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKipcbiAqIFJJQkJFRCBQQU5FTCB0aWxlOiB0aGUgdmVydGljYWwgcmlicyBvZiBhIHByZXNzZWQgYWJzb3JiaW5nIHBhbmVsIChhIG5vaXNlIGJhcnJpZXIncyBsb3dlciBiYXksXG4gKiBhIHJpYmJlZCBzdGVlbCBjbGFkZGluZyksIGByaWJzYCBwZXIgdGlsZSBhcyBhIGNvc2luZS1zaGFkZWQgc3RyaXBlIGZpZWxkLCBkdXN0IHN0cmVha3MgYW5kIGFcbiAqIHNvb3QgYmFuZCBvdmVyIHRoZSBib3R0b20sIGFzIG1hcCBhbmQgYnVtcC5cbiAqL1xuZnVuY3Rpb24gcmliUGFuZWxUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IHJpYnMgPSBvLnJpYnMgPz8gMjQsIGxvdyA9IG8ubG93ID8/IDAuNzIsIGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICBjb25zdCB0ID0gKE1hdGguY29zKHggLyBzICogTWF0aC5QSSAqIDIgKiByaWJzKSArIDEpIC8gMjtcbiAgICAgIGNvbnN0IGsgPSBsb3cgKyAoMSAtIGxvdykgKiB0O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtNYXRoLnJvdW5kKDI1NSAqIGJhc2VbMF0gKiBrKX0sJHtNYXRoLnJvdW5kKDI1NSAqIGJhc2VbMV0gKiBrKX0sJHtNYXRoLnJvdW5kKDI1NSAqIGJhc2VbMl0gKiBrKX0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnN0cmVha3MgPz8gMjQpOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTIsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjYpLCBhID0gMC4wNiArIHJuZCgpICogMC4xNCwgdiA9IG8uc3RyZWFrID8/IFswLjcsIDAuNywgMC42OF07XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBsZW4pO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHYpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggKyBkeCwgMCwgdywgbGVuKTtcbiAgICB9XG4gICAgaWYgKG8uc29vdCkge1xuICAgICAgY29uc3QgdiA9IG8uc29vdCwgY3YgPSBvLnNvb3RDb3YgPz8gMC4yMiwgYSA9IG8uc29vdEFscGhhID8/IDAuNTtcbiAgICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY3YpKTtcbiAgICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHYpfSwke2F9KWApOyBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZ3JhaW4gPz8gMTUwMCk7IGkrKykgeyBjb25zdCB2ID0gMTkwICsgTWF0aC5yb3VuZChybmQoKSAqIDY1KTsgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMTApYDsgY3R4LmZpbGxSZWN0KHJuZCgpICogcywgcm5kKCkgKiBzLCAxLjUsIDEuNSk7IH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICAvLyBzdGlja2VyczogYSBmZXcgdG9ybiBwYWxlIHJlY3RhbmdsZXMsIGRyYXduIG92ZXJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnN0aWNrZXJzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzICogKDAuMyArIHJuZCgpICogMC41KSwgdyA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNCksIGggPSB3ICogKDAuNiArIHJuZCgpICogMC44KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgkezIzMCArIE1hdGgucm91bmQocm5kKCkgKiAyMCl9LCR7MjI4ICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKX0sJHsyMjUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApfSwwLjg1KWA7XG4gICAgICBjdHguZmlsbFJlY3QoeCwgeSwgdywgaCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtNYXRoLnJvdW5kKDYwICsgcm5kKCkgKiA4MCl9LCR7TWF0aC5yb3VuZCg4MCArIHJuZCgpICogODApfSwke01hdGgucm91bmQoMTUwICsgcm5kKCkgKiA5MCl9LDAuNylgO1xuICAgICAgY3R4LmZpbGxSZWN0KHggKyB3ICogMC4xNSwgeSArIGggKiAwLjIsIHcgKiAwLjcsIGggKiAwLjMpO1xuICAgIH1cbiAgfSk7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvLlxuICpcbiAqIE1ldGFsbmVzcyBpcyBjYXBwZWQgd2VsbCBiZWxvdyBwaHlzaWNhbCBmb3IgdGhlIGdpbGRlZCBzdXJmYWNlcy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhXG4gKiBoZW1pc3BoZXJlIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvXG4gKiByZWZsZWN0IHJlbmRlcnMgYmxhY2sgLS0gd2hpY2ggb24gYSBnb2xkIGZpbmlhbCBpcyB0aGUgd2hvbGUgZmVhdHVyZSBsb3N0LiBUaGUgYWxiZWRvIHN0YXlzXG4gKiBtZWFzdXJlZDsgdGhlIG1ldGFsbmVzcyBpcyB3aGF0IGlzIHdyb25nIGZvciB0aGlzIHJpZy5cbiAqL1xuZnVuY3Rpb24gYnVpbGRNYXRlcmlhbHMob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyk6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+ID0ge307XG4gIGZvciAoY29uc3QgcyBvZiBDT05GSUcubWF0ZXJpYWxzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbSA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKHMuY29sb3IpLFxuICAgICAgcm91Z2huZXNzOiBzLnJvdWdobmVzcyxcbiAgICAgIG1ldGFsbmVzczogcy5tZXRhbG5lc3MsXG4gICAgICB3aXJlZnJhbWU6IG9wdGlvbnMud2lyZWZyYW1lID8/IGZhbHNlLFxuICAgICAgc2lkZTogcy5kb3VibGVTaWRlZCA/IFRIUkVFLkRvdWJsZVNpZGUgOiBUSFJFRS5Gcm9udFNpZGUsXG4gICAgICB2ZXJ0ZXhDb2xvcnM6IHMudmVydGV4Q29sb3JzID09PSB0cnVlLFxuICAgIH0pO1xuICAgIGlmIChzLmVudk1hcEludGVuc2l0eSAhPT0gdW5kZWZpbmVkKSBtLmVudk1hcEludGVuc2l0eSA9IHMuZW52TWFwSW50ZW5zaXR5O1xuICAgIC8vIEEgTElUIHN1cmZhY2UgKGEgZmx1b3Jlc2NlbnQgdHViZSwgYSBjaGFyY29hbCBlbWJlciBiZWQpOiBlbWlzc2l2ZSBjYXJyaWVzIHRoZSBnbG93IHdpdGhvdXQgYVxuICAgIC8vIGxpZ2h0IHNvdXJjZSwgd2hpY2ggdGhlIGtpdCdzIHByb3BzIG5ldmVyIG93biAtLSB0aGUgaG9zdCBzY2VuZSBvd25zIGxpZ2h0aW5nLlxuICAgIGlmIChzLmVtaXNzaXZlICE9PSB1bmRlZmluZWQpIHsgbS5lbWlzc2l2ZSA9IG5ldyBUSFJFRS5Db2xvcihzLmVtaXNzaXZlKTsgbS5lbWlzc2l2ZUludGVuc2l0eSA9IHMuZW1pc3NpdmVJbnRlbnNpdHkgPz8gMTsgfVxuICAgIGlmIChzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkgeyBtLnRyYW5zcGFyZW50ID0gdHJ1ZTsgbS5vcGFjaXR5ID0gcy5vcGFjaXR5OyBtLmRlcHRoV3JpdGUgPSB0cnVlOyB9XG4gICAgLy8gQW4gQUxQSEEtQ1VUIHBhbmUgKGNoYWluLWxpbmsgbWVzaCk6IHRoZSBjYW52YXMgdGlsZSBjYXJyaWVzIHRoZSBjdXQtb3V0IGluIGl0cyBhbHBoYSBjaGFubmVsIGFuZFxuICAgIC8vIGFscGhhVGVzdCBkaXNjYXJkcyB0aGUgb3BlbiBjZWxscywgc28gdGhlIHdpcmUgc3RheXMgb3BhcXVlIGFuZCBzb3J0cyBsaWtlIGEgc29saWQuXG4gICAgaWYgKHMuYWxwaGFUZXN0ICE9PSB1bmRlZmluZWQpIHsgbS5hbHBoYVRlc3QgPSBzLmFscGhhVGVzdDsgbS50cmFuc3BhcmVudCA9IGZhbHNlOyB9XG4gICAgbS5uYW1lID0gcy5pZDtcbiAgICBtYXBbcy5pZF0gPSBtO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbW9kZWwgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV4cHJlc3N3YXlIYW1tZXJoZWFkUGllck1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnRXhwcmVzc3dheSBIYW1tZXJoZWFkIFBpZXInO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIG1hdGVyaWFsIHdpdGggYHZlcnRleENvbG9yc2AgcmVhZHMgYSBgY29sb3JgIGF0dHJpYnV0ZSBvdXQgb2YgRVZFUlkgZ2VvbWV0cnkgYm91bmQgdG8gaXQsIGFuZFxuICAgKiBhIGdlb21ldHJ5IHRoYXQgaGFzIG5vbmUgaGFuZHMgdGhlIHNoYWRlciBhbiB1bmRlZmluZWQgYXR0cmlidXRlIC0tIHdoaWNoIGNvbWVzIGJhY2sgYXNcbiAgICogKDAsIDAsIDApIGFuZCByZW5kZXJzIHRoZSBtZXNoIEJMQUNLLiBUaGF0IGlzIG5vdCBhIGh5cG90aGV0aWNhbDogdGhlIHVib3NvdCdzIHdhbGwgYm9keSBhbmRcbiAgICogaXRzIGVpZ2h0IGJvdW5kYXJ5IHN0b25lcyBzaGlwcGVkIGFzIGJsYWNrIHNpbGhvdWV0dGVzIGZyb20gb25lIHRpbnRlZCBwbGF0Zm9ybSBzaGFyaW5nIHRoZWlyXG4gICAqIHN0b25lIG1hdGVyaWFsLCBhbmQgdGhlIGZhaWx1cmUgaXMgc2lsZW50IGJlY2F1c2UgdGhlIHRpbnRlZCBjb21wb25lbnQgaXRzZWxmIGxvb2tzIHBlcmZlY3QuXG4gICAqXG4gICAqIEFuIEluc3RhbmNlZE1lc2ggaGlkZXMgaXQgLS0gaXQgZmFsbHMgYmFjayB0byBpbnN0YW5jZUNvbG9yIGFuZCBjb21lcyBvdXQgd2hpdGUgLS0gc28gdGhlIHNhbWVcbiAgICogbWlzdGFrZSBvbiB0aGUgY2hlZGkncyBuaWNoZSBmcmFtZXMgcmVuZGVyZWQgY29ycmVjdGx5IGFuZCB0YXVnaHQgbm90aGluZy4gR3VhcmQgaXQgaGVyZSwgb25jZSxcbiAgICogZm9yIGV2ZXJ5IGdlb21ldHJ5OiBubyBjb2xvciBhdHRyaWJ1dGUgYW5kIGEgdmVydGV4Q29sb3JzIG1hdGVyaWFsIG1lYW5zIGZpbGwgd2l0aCB3aGl0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGd1YXJkVmVydGV4Q29sb3JzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpIHtcbiAgICBpZiAoIW1hdCB8fCAhbWF0LnZlcnRleENvbG9ycyB8fCBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpKSByZXR1cm47XG4gICAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLmZpbGwoMSksIDMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgLy8gc2V0Q29sb3JBdCBNVUxUSVBMSUVTIHdpdGggbWF0ZXJpYWwuY29sb3IsIHNvIGFuIGluc3RhbmNlZCBtYXRlcmlhbCBjYXJyeWluZyBwZXItaW5zdGFuY2VcbiAgICAgIC8vIHRvbmVzIG11c3QgYmUgd2hpdGUgb3IgZXZlcnkgdG9uZSBjb21lcyBvdXQgZGFya2VuZWQgYnkgdGhlIGJhc2UuXG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuICAvKiogRm91ciBpbnN0YW5jZXMgYXQgOTAtZGVncmVlIHlhdyBhYm91dCB0aGUgYXhpcyAtLSB0aGUgY29ybmVyL2ZhY2UgcmVwZXRpdGlvbiB0aGF0IGV2ZXJ5XG4gICAqICBidWlsZGluZyBpbiB0aGlzIHNldCB1c2VzIGZvciBuaWNoZXMsIGZpbmlhbHMsIGJvdW5kYXJ5IHN0b25lcyBhbmQgY29ybmVyIGRvbWVzLiAqL1xuICBmdW5jdGlvbiBxdWFkKHJhZGl1czogbnVtYmVyLCB5OiBudW1iZXIsIHBoYXNlID0gMCk6IFRIUkVFLk1hdHJpeDRbXSB7XG4gICAgcmV0dXJuIFswLCAxLCAyLCAzXS5tYXAoKGkpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBwaGFzZSArIGkgKiBNYXRoLlBJIC8gMjtcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKE1hdGguc2luKGEpICogcmFkaXVzLCB5LCBNYXRoLmNvcyhhKSAqIHJhZGl1cyksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgYSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb21wb25lbnRzXG4gICAqIEVhY2ggZW50cnkgb2YgQ09ORklHLmdlb21ldHJ5LmNvbXBvbmVudHMgaXMgT05FIG1lcmdlZCBnZW9tZXRyeSBvbiBPTkUgbWF0ZXJpYWwgLS0gb25lIGRyYXdcbiAgICogY2FsbC4gRXZlcnkgcGFydCBpbnNpZGUgaXQgaXMgYSB0aW50ZWQgYm94LCB0dWJlLCBjeWxpbmRlciwgbGF0aGUgb3IgcGxhbmU7IGNvbG91ciBkaWZmZXJlbmNlc1xuICAgKiBhcmUgdmVydGV4IGNvbG91cnMuIGB1dmAgcGlja3MgaG93IGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgcmVwZWF0cyBvdmVyIGl0LiAqL1xuICBmb3IgKGNvbnN0IGMgb2YgRy5jb21wb25lbnRzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgKGMuYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCBiIG9mIG1pcnJvclgoKGMuYm94ZXNNaXJyb3JlZCA/PyBbXSkgYXMgbnVtYmVyW11bXSkpIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCB0IG9mIChjLnR1YmVzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0dWJlKHQucHRzLCB0LnIsIHQuc2VnID8/IDgsIHQuaGV4KSk7XG4gICAgLy8gU1dFUFQgdHViZXM6IG9uZSBtaXRyZWQgcmluZyBwZXIgcG9pbnQgaW5zdGVhZCBvZiBhIGN5bGluZGVyIHBlciBzZWdtZW50IC0tIHRoZSBvbmx5IHRoaW5nIHRoYXRcbiAgICAvLyBzdXJ2aXZlcyBhIHRpZ2h0IGJlbmQuIFNlZSBzd2VlcFR1YmUuXG4gICAgZm9yIChjb25zdCB0IG9mIChjLnN3ZWVwcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2goc3dlZXBUdWJlKHQucHRzLCB0LnIsIHQuc2VnID8/IDEwLCB0LmhleCwgdC5jYXAgIT09IGZhbHNlKSk7XG4gICAgZm9yIChjb25zdCBzdCBvZiAoYy5zdHJhcHMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHN0cmFwKHN0LnB0cywgc3Qudywgc3QudCwgc3QuYWJvdXQsIHN0LmhleCkpO1xuICAgIGZvciAoY29uc3QgY3kgb2YgKGMuY3lscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIGB0aDBgL2B0aExlbmAgbWFrZSBhIFBBUlRJQUwgY3lsaW5kZXIgKGEgY3VydmVkIHN0aWNrZXIgcGF0Y2ggd3JhcHBlZCBvbiBhIHJvdW5kIGJvZHkpIGFuZFxuICAgICAgLy8gYG9wZW5gIGRyb3BzIHRoZSBjYXBzOyB0aGUgc2lkZSBVVnMgdGhlbiBydW4gMC4uMSBhY3Jvc3MgdGhlIGFyYyBhbmQgdXAgdGhlIGhlaWdodCwgd2hpY2ggaXNcbiAgICAgIC8vIHdoYXQgYSBiYWtlZCBncmFwaGljIHdhbnRzLiBgdXZSZXBgIG11bHRpcGxpZXMgdGhlbSBmb3IgYSByZXBlYXRpbmcgdGlsZS5cbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjeS5ydCwgY3kucmIsIGN5LmgsIGN5LnNlZyA/PyAxMiwgMSwgY3kub3BlbiA/PyBmYWxzZSwgY3kudGgwID8/IDAsIGN5LnRoTGVuID8/IE1hdGguUEkgKiAyKTtcbiAgICAgIGlmIChjeS51dlJlcCkgeyBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpOyBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHV2LnNldFhZKGksIHV2LmdldFgoaSkgKiBjeS51dlJlcFswXSwgdXYuZ2V0WShpKSAqIGN5LnV2UmVwWzFdKTsgfVxuICAgICAgLy8gYHNpZGVVVmAgcGlucyB0aGUgU0lERSB3YWxsJ3MgVVZzIHRvIG9uZSB0ZXhlbCBzbyBhIGRpc2MgY2FycnlpbmcgYSBiYWtlZCB0b3AtZG93biBpbWFnZSBzaG93c1xuICAgICAgLy8gdGhhdCBpbWFnZSBvbiBpdHMgY2FwIGFsb25lLCB3aXRoIGl0cyByaW0gaW4gd2hhdGV2ZXIgdGhlIHBpbm5lZCB0ZXhlbCBob2xkcyAoYSBiYWcgdG9uZSkuXG4gICAgICBpZiAoY3kuc2lkZVVWKSB7IGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2JyksIG4gPSAoKGN5LnNlZyA/PyAxMikgKyAxKSAqIDI7IGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB1di5zZXRYWShpLCBjeS5zaWRlVVZbMF0sIGN5LnNpZGVVVlsxXSk7IH1cbiAgICAgIC8vIGBzY2FsZWAgYmVmb3JlIHRoZSByb3RhdGlvbnM6IGFuIE9WQUwgYmFzaW4gb3IgZGlzYywgd2hpY2ggYSBsYXRoZSBvciBhIGN5bGluZGVyIGNhbm5vdFxuICAgICAgLy8gcmV2b2x2ZSBvbiBpdHMgb3duLiBOb3JtYWxzIGFyZSByZWNvbXB1dGVkIGJlY2F1c2UgYSBub24tdW5pZm9ybSBzY2FsZSBza2V3cyB0aGVtLlxuICAgICAgaWYgKGN5LnNjYWxlKSB7IGcuc2NhbGUoY3kuc2NhbGVbMF0sIGN5LnNjYWxlWzFdLCBjeS5zY2FsZVsyXSk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgfVxuICAgICAgLy8gQ1VMTSBVVnM6IHUgYXJvdW5kIHRoZSBjaXJjdW1mZXJlbmNlLCB2IGFsb25nIHRoZSBsZW5ndGgsIGJvdGggaW4gbWV0cmVzIC0tIHNvIHRoZSBub2RlXG4gICAgICAvLyByaW5ncyBvZiBhIGN1bG0gdGlsZSBjcm9zcyBhIGJhbWJvbyBwb2xlIGF0IHJlYWwgc3BhY2luZyBob3dldmVyIHRoZSBwb2xlIGlzIHRoZW4gdHVybmVkLlxuICAgICAgLy8gSXQgaGFzIHRvIGhhcHBlbiBCRUZPUkUgdGhlIHJvdGF0aW9ucywgd2hpbGUgdGhlIGN5bGluZGVyIHN0aWxsIHJ1bnMgYWxvbmcgaXRzIG93biBZLlxuICAgICAgaWYgKGMudXYgPT09ICdjdWxtJykgY3VsbVVWKGcsIGN5LnJ0LCBjeS5oLCBjLnV2U2NhbGUgPz8gMSwgY3kudk9mZiA/PyAwKTtcbiAgICAgIGlmIChjeS5yeCkgZy5yb3RhdGVYKGN5LnJ4KTsgaWYgKGN5LnJ5KSBnLnJvdGF0ZVkoY3kucnkpOyBpZiAoY3kucnopIGcucm90YXRlWihjeS5yeik7XG4gICAgICBnLnRyYW5zbGF0ZShjeS5hdFswXSwgY3kuYXRbMV0sIGN5LmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGN5LmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGwgb2YgKGMubGF0aGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gYHJ5YCB5YXdzIHRoZSByZXZvbHV0aW9uOiBhIDQtc2VnbWVudCBsYXRoZSB0dXJuZWQgNDUgZGVncmVlcyBpcyBhIGNoYW1mZXJlZCBTUVVBUkUgc2xhYiBpbiBvbmVcbiAgICAgIC8vIGdlb21ldHJ5IChhIGNvbmUncyBydWJiZXIgYmFzZSksIHdoZXJlIHR3byBzdGFja2VkIGJveGVzIHdvdWxkIGNvc3QgdHdvIGFuZCBhIGNvcGxhbmFyIHBhaXIuXG4gICAgICAvLyBgY3lsVVZgIChhIHRpbGUgc2l6ZSBpbiBtZXRyZXMpIHdyaXRlcyBhIHNlYW1sZXNzIGFyb3VuZC1ieS11cCBVViBmcm9tIHRoZSBsYXRoZSdzIG93biBzZWdtZW50XG4gICAgICAvLyBpbmRleCAtLSBhdGFuMiB3b3VsZCBmb2xkIGEgd2hvbGUgdGlsZSBpbnRvIHRoZSBzZWFtIGNvbHVtbiAtLSBmb3IgdHJlYWQsIGZsdXRpbmcgYW5kIGdyYWluLlxuICAgICAgY29uc3QgZyA9IGxhdGhlKGwucHRzLCBsLnNlZyA/PyAxMiwgMCwgbC5zaGFycCAhPT0gZmFsc2UsIGwud2VsZFNlYW0gPT09IHRydWUpO1xuICAgICAgaWYgKGwuY3lsVVYpIHsgY29uc3QgY3UgPSBBcnJheS5pc0FycmF5KGwuY3lsVVYpID8gbC5jeWxVViA6IFtsLmN5bFVWLCBsLmN5bFVWLCAwXTsgbGF0aGVVVihnLCAoZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQgLyAoKGwuc2VnID8/IDEyKSArIDEpKSB8IDAsIGwuc2VnID8/IDEyLCBjdVswXSwgY3VbMV0sIGN1WzJdID8/IDApOyB9XG4gICAgICBpZiAobC5zY2FsZSkgeyBnLnNjYWxlKGwuc2NhbGVbMF0sIGwuc2NhbGVbMV0sIGwuc2NhbGVbMl0pOyBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IH1cbiAgICAgIC8vIGByeWAgeWF3cyB0aGUgcmV2b2x1dGlvbiAoYWJvdmUpLiBgcnhgL2ByemAgVElMVCB0aGUgYXhpcyBpdHNlbGYsIHdoaWNoIGlzIHdoYXQgYSBXQUxMIG9yXG4gICAgICAvLyBjZWlsaW5nIGZpdHRpbmcgbmVlZHM6IGEgbGF0aGUgcmV2b2x2ZXMgYWJvdXQgK1ksIGFuZCBhIGJ1bGtoZWFkIGxhbXAncyBheGlzIGlzIHRoZSB3YWxsXG4gICAgICAvLyBub3JtYWwsIHNvIGl0cyBiYWNrcGxhdGUgYW5kIGRvbWUgYXJlIGF1dGhvcmVkIGFib3V0IFkgYW5kIGxhaWQgZG93biB3aXRoIHJ4ID0gUEkvMi5cbiAgICAgIGlmIChsLnJ5KSBnLnJvdGF0ZVkobC5yeSk7IGlmIChsLnJ4KSBnLnJvdGF0ZVgobC5yeCk7IGlmIChsLnJ6KSBnLnJvdGF0ZVoobC5yeik7XG4gICAgICBnLnRyYW5zbGF0ZShsLmF0WzBdLCBsLmF0WzFdLCBsLmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGwuaGV4KSk7XG4gICAgfVxuICAgIC8vIFJJQkJFRCBET01FUzogYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gY2FycnlpbmcgdmVydGljYWwgRkxVVEVTLCBhcyBgMSArIGFtcCAqIGNvcyhyaWJzICogdGhldGEpYFxuICAgIC8vIHNhbXBsZWQgcGVyIHNlY3RvciByYXRoZXIgdGhhbiBhIGxhdGhlLiBBIHByZXNzZWQtZ2xhc3MgbGFtcCBkb21lIGlzIGZsdXRlZCwgYW5kIGEgc21vb3RoIG9uZVxuICAgIC8vIHJlYWRzIGFzIGEgcGxhc3RpYyBidWJibGUgLS0gdGhlIHJpYnMgYXJlIG1vc3Qgb2Ygd2hhdCBzYXlzIGBnbGFzc2AgYXQgcHJvcCBkaXN0YW5jZS4gQXV0aG9yZWRcbiAgICAvLyBhYm91dCArWSBsaWtlIGEgbGF0aGUsIHNvIGEgd2FsbCBmaXR0aW5nIGxheXMgaXQgZG93biB3aXRoIHJ4LlxuICAgIGZvciAoY29uc3QgZCBvZiAoYy5kb21lcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSByaWJiZWREb21lKGQucHRzLCBkLnJpYnMsIGQuYW1wLCBkLnNlZyA/PyAyNCwgZC52YWxsZXksIGQuc21vb3RoID09PSB0cnVlKTtcbiAgICAgIGlmIChkLnJ5KSBnLnJvdGF0ZVkoZC5yeSk7IGlmIChkLnJ4KSBnLnJvdGF0ZVgoZC5yeCk7IGlmIChkLnJ6KSBnLnJvdGF0ZVooZC5yeik7XG4gICAgICBpZiAoZC5hdCkgZy50cmFuc2xhdGUoZC5hdFswXSwgZC5hdFsxXSwgZC5hdFsyXSk7XG4gICAgICAvLyBBIGZsdXRlZCBkb21lIHdyaXRlcyBpdHMgT1dOIGNvbG91ciBhdHRyaWJ1dGUgKHRoZSBjcmVzdC10by12YWxsZXkgbXVsdGlwbGllciksIHNvIHRpbnRHZW9cbiAgICAgIC8vIHdvdWxkIG92ZXJ3cml0ZSB0aGUgZmx1dGUgc3RyaXBpbmcgd2l0aCBvbmUgZmxhdCBoZXggLS0gdGhlIHNhbWUgdHJhcCBgc2hlZXRgJ3MgaGV4VW5kZXJcbiAgICAgIC8vIGZlbGwgaW50by4gTXVsdGlwbHkgdGhlIHRvbmUgSU5UTyB0aGUgbXVsdGlwbGllciBpbnN0ZWFkLCBzbyB0aGUgZG9tZSBjYXJyaWVzIGJvdGguXG4gICAgICBpZiAoZC52YWxsZXkgJiYgZC5oZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjb2wgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgICAgIGNvbnN0IHQgPSBuZXcgVEhSRUUuQ29sb3IoZC5oZXgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbC5jb3VudDsgaSsrKSBjb2wuc2V0WFlaKGksIGNvbC5nZXRYKGkpICogdC5yLCBjb2wuZ2V0WShpKSAqIHQuZywgY29sLmdldFooaSkgKiB0LmIpO1xuICAgICAgICBncy5wdXNoKGcpO1xuICAgICAgfSBlbHNlIGdzLnB1c2goZC52YWxsZXkgPyBnIDogdGludEdlbyhnLCBkLmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHAgb2YgKGMucGxhbmVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBQQU5FOiBhIHNpbmdsZSBxdWFkIGluIHRoZSBYWSBwbGFuZSBhdCBkZXB0aCB6LCBkb3VibGUtc2lkZWQgYnkgaXRzIG1hdGVyaWFsLiBJdHMgVVZzIHJ1blxuICAgICAgLy8gMC4uMSBhY3Jvc3MgdGhlIHBhbmUgc28gYW4gYWxwaGEtY3V0IHRpbGUgcmVwZWF0cyBgcmVwYCB0aW1lcyBhY3Jvc3MgYW5kIGRvd24uXG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkocC53LCBwLmgsIDEsIDEpO1xuICAgICAgZy50cmFuc2xhdGUocC5hdFswXSwgcC5hdFsxXSwgcC5hdFsyXSk7XG4gICAgICBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB1di5zZXRYWShpLCB1di5nZXRYKGkpICogKHAucmVwPy5bMF0gPz8gMSksIHV2LmdldFkoaSkgKiAocC5yZXA/LlsxXSA/PyAxKSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgcC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBlIG9mIChjLmV4dHJ1ZGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBwcm9maWxlIGluIHRoZSBYWSBwbGFuZSBleHRydWRlZCBhbG9uZyBaIGJldHdlZW4gejAgYW5kIHoxIC0tIGEgc2xhYiB3aXRoIGEgbW91bGRlZCBlZGdlLFxuICAgICAgLy8gYSBweXJhbWlkIGNhcCBhcyBhIHN0ZXBwZWQgcHJvZmlsZSwgYSBzcGVhciBmaW5pYWwuXG4gICAgICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgc2hhcGUubW92ZVRvKGUucG9seVswXVswXSwgZS5wb2x5WzBdWzFdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZS5wb2x5Lmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8oZS5wb2x5W2ldWzBdLCBlLnBvbHlbaV1bMV0pO1xuICAgICAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gICAgICBmb3IgKGNvbnN0IGggb2YgKGUuaG9sZXMgPz8gW10pIGFzIG51bWJlcltdW11bXSkge1xuICAgICAgICBjb25zdCBocCA9IG5ldyBUSFJFRS5QYXRoKCk7IGhwLm1vdmVUbyhoWzBdWzBdLCBoWzBdWzFdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBoLmxlbmd0aDsgaSsrKSBocC5saW5lVG8oaFtpXVswXSwgaFtpXVsxXSk7XG4gICAgICAgIGhwLmNsb3NlUGF0aCgpOyBzaGFwZS5ob2xlcy5wdXNoKGhwKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGcgPSBleHRydWRlQWxvbmdaKHNoYXBlLCBlLnowLCBlLnoxKTtcbiAgICAgIGlmIChlLnJ4KSBnLnJvdGF0ZVgoZS5yeCk7XG4gICAgICBpZiAoZS5yeSkgZy5yb3RhdGVZKGUucnkpO1xuICAgICAgaWYgKGUucnopIGcucm90YXRlWihlLnJ6KTtcbiAgICAgIGlmIChlLmF0KSBnLnRyYW5zbGF0ZShlLmF0WzBdLCBlLmF0WzFdLCBlLmF0WzJdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBlLmhleCkpO1xuICAgIH1cbiAgICAvLyBFTExJUFNPSURTOiBbaGV4LCBjeCwgY3ksIGN6LCByeCwgcnksIHJ6LCByb3RYPywgcm90WT8sIHJvdFo/XSAtLSBhIHVuaXQgc3BoZXJlIHNjYWxlZCBwZXIgYXhpc1xuICAgIC8vIGFuZCB0dXJuZWQgYWJvdXQgaXRzIG93biBjZW50cmUuIEEgc2t1bGwgZG9tZSwgYSBwYXcsIGEgbm9zZSBwYWQ6IHRoZSByb3VuZGVkIHNvbGlkcyBvZiBhblxuICAgIC8vIGFuaW1hbCB0aGF0IGEgYm94IG9yIGEgc3RhdGlvbiB0dWJlIGNhbm5vdCBnaXZlLCBzaGFyaW5nIHNtb290aCBub3JtYWxzIHRocm91Z2ggdGhlIG1lcmdlLlxuICAgIGZvciAoY29uc3QgZSBvZiAoYy5lbGxpcHNvaWRzID8/IFtdKSBhcyBudW1iZXJbXVtdKSB7XG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEsIGVbMTBdID8/IDE2LCBlWzExXSA/PyAxMik7XG4gICAgICBnLnNjYWxlKGVbNF0sIGVbNV0sIGVbNl0pO1xuICAgICAgaWYgKGVbN10pIGcucm90YXRlWChlWzddKTsgaWYgKGVbOF0pIGcucm90YXRlWShlWzhdKTsgaWYgKGVbOV0pIGcucm90YXRlWihlWzldKTtcbiAgICAgIGcudHJhbnNsYXRlKGVbMV0sIGVbMl0sIGVbM10pO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIGVbMF0pKTtcbiAgICB9XG4gICAgLy8gRlJVU1RBOiBbaGV4LCBjeCwgeUJvdHRvbSwgY3osIHcwLCBkMCwgdzEsIGQxLCBoXSAtLSBhIGJveCB3aG9zZSBmb290cHJpbnQgY2hhbmdlcyBmcm9tICh3MCwgZDApIGF0XG4gICAgLy8gdGhlIGJvdHRvbSB0byAodzEsIGQxKSBhdCB0aGUgdG9wOiB0aGUgdGFwZXJlZCBib2R5IG9mIGEgd2hlZWxpZSBiaW4gb3IgYSBzdGVlbCBjb250YWluZXIuXG4gICAgZm9yIChjb25zdCBmIG9mIChjLmZydXN0YSA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKGZydXN0dW0oZi5zbGljZSgxKSksIGZbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgKGMuc3Bpa2VzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNwaWtlKHMuYXQsIHMudywgcy5oKSwgcy5oZXgpKTtcbiAgICAvLyBTV0VQVCBQUk9GSUxFUzogYSBjbG9zZWQgKHgsIHkpIHNlY3Rpb24gYWxvbmcgYSBzdHJhaWdodCwgc2hlYXJlZCBvciBhcmNlZCBwYXRoIC0tIGEgZGVja1xuICAgIC8vIG1vZHVsZSwgYSBwYXJhcGV0LCBhIGdpcmRlci4gQ2FycmllcyBpdHMgT1dOIG1ldHJlIFVWcyAodSBhbG9uZywgdiByb3VuZCB0aGUgcHJvZmlsZSksIHNvIGFcbiAgICAvLyBjb21wb25lbnQgaG9sZGluZyBvbmUgbXVzdCBub3Qgc2V0IGB1dmAsIG9yIHRoZSBzd2VlcCdzIGpvaW50IGxpbmVzIGxhbmQgYW55d2hlcmUuXG4gICAgZm9yIChjb25zdCBzcCBvZiAoYy5wcm9maWxlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSBzd2VlcFByb2ZpbGUoc3ApO1xuICAgICAgaWYgKHNwLnJ4KSBnLnJvdGF0ZVgoc3AucngpOyBpZiAoc3AucnkpIGcucm90YXRlWShzcC5yeSk7IGlmIChzcC5yeikgZy5yb3RhdGVaKHNwLnJ6KTtcbiAgICAgIGlmIChzcC5hdCkgZy50cmFuc2xhdGUoc3AuYXRbMF0sIHNwLmF0WzFdLCBzcC5hdFsyXSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgc3AuaGV4KSk7XG4gICAgfVxuICAgIC8vIERSQVBFRCBTSEVFVFM6IGEgdGFycCBvciBhd25pbmcgYXMgYSBoZWlnaHQgZ3JpZCB3aXRoIHRoaWNrbmVzcyAtLSBhIHJpZGdlLCB0aGUgc2FnIGJldHdlZW5cbiAgICAvLyBpdHMgcG9sZXMgYW5kIHRoZSBkcm9vcCBvZiBpdHMgZnJlZSBlZGdlcyBhcmUgbnVtYmVycyBpbiB0aGUgZ3JpZCwgY29tcHV0ZWQgYXQgZW1pdCB0aW1lLlxuICAgIGZvciAoY29uc3QgcyBvZiAoYy5zaGVldHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBBIHNoZWV0IGdpdmVuIGBoZXhVbmRlcmAgaGFzIGFscmVhZHkgd3JpdHRlbiBpdHMgT1dOIGNvbG91ciBhdHRyaWJ1dGUsIG9uZSB0b25lIGZvciB0aGUgdG9wXG4gICAgICAvLyBncmlkIGFuZCBhbm90aGVyIGZvciB0aGUgdW5kZXJzaWRlIGFuZCByaW0uIHRpbnRHZW8gd291bGQgb3ZlcndyaXRlIHRoZSBsb3Qgd2l0aCBhIHNpbmdsZVxuICAgICAgLy8gaGV4IC0tIHdoaWNoIGlzIHdoYXQgc2hpcHBlZCB0aGUgdGFycGF1bGluIGJheSdzIGJsdWUtb3Zlci1vcmFuZ2UgdGFycCBhcyBhIHdoaXRlIHNhaWwuXG4gICAgICBjb25zdCBnID0gc2hlZXQocyk7XG4gICAgICBncy5wdXNoKHMuaGV4VW5kZXIgIT09IHVuZGVmaW5lZCA/IGcgOiB0aW50R2VvKGcsIHMuaGV4KSk7XG4gICAgfVxuICAgIC8vIE9SR0FOSUMgc3RhdGlvbiB0dWJlczogW3osIGN4LCBjeSwgcngsIHJ5XSBzdGF0aW9ucyBzd2VwdCBhbG9uZyBaIC0tIHRoZSBvbmx5IHNvZnQgZm9ybSBpbiB0aGVcbiAgICAvLyBraXQsIGEgbHlpbmcgYW5pbWFsLiBMaXQgc21vb3RoIGJ5IHRoZSBoZWxwZXIncyBzaGFyZWQgcmluZyB2ZXJ0aWNlcy5cbiAgICBmb3IgKGNvbnN0IHQgb2YgKGMudHViZXNBbG9uZyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSB0dWJlQWxvbmcodC5zdGF0aW9ucywgdC5zZWcgPz8gMTIpO1xuICAgICAgaWYgKHQucnkpIGcucm90YXRlWSh0LnJ5KTsgaWYgKHQuYXQpIGcudHJhbnNsYXRlKHQuYXRbMF0sIHQuYXRbMV0sIHQuYXRbMl0pO1xuICAgICAgLy8gYGhleGVzYCAtLSBvbmUgY29sb3VyIHBlciBTVEFUSU9OLCBibGVuZGVkIGFsb25nIHRoZSBzd2VlcCAtLSBpcyBob3cgYSBjb2F0IHBhdHRlcm4gdGhhdCBydW5zXG4gICAgICAvLyBhbG9uZyB0aGUgYm9keSAoYSB3aGl0ZSBjb2xsYXIgYmV0d2VlbiBhIHRhbiBza3VsbCBhbmQgYSB0YW4gc2FkZGxlKSBpcyBjYXJyaWVkIG9uIGEgc2luZ2xlXG4gICAgICAvLyBtZXJnZWQgbWVzaC4gVGhlIGNvbXBvbmVudCdzIGF4aXMgdGludCB0aGVuIG11bHRpcGxpZXMgdGhlIGRvcnNhbC10by12ZW50cmFsIGZhZGUgaW50byBpdCxcbiAgICAgIC8vIGFuZCBuZWl0aGVyIGNvc3RzIGEgbWF0ZXJpYWwuIEEgc2luZ2xlIGBoZXhgIHN0YXlzIHRoZSBkZWZhdWx0LlxuICAgICAgaWYgKHQuaGV4ZXMpIHtcbiAgICAgICAgLy8gQSBzdGF0aW9uIGVudHJ5IG1heSBiZSBvbmUgaGV4LCBvciBhIFBBSVIgW2RvcnNhbCwgdmVudHJhbF0gYmxlbmRlZCBhcm91bmQgdGhlIHJpbmcgYnkgdGhlXG4gICAgICAgIC8vIHNhbWUgc2luKHRoZXRhKSB0dWJlQWxvbmcgc3dlcHQgdGhlIHNlY3Rpb24gd2l0aCAtLSBzbyB0aGUgY29hdCBydW5zIGJvdGggQUxPTkcgdGhlIGJvZHlcbiAgICAgICAgLy8gKGEgd2hpdGUgY29sbGFyIGJldHdlZW4gYSB0YW4gc2t1bGwgYW5kIGEgdGFuIHNhZGRsZSkgYW5kIEFDUk9TUyBpdCAodGhlIHNhZGRsZSBnaXZpbmcgd2F5XG4gICAgICAgIC8vIHRvIGEgZHVzdHkgZmxhbmsgYW5kIGEgcGFsZSBiZWxseSkuIEFuIGF4aXMgdGludCBjYW5ub3QgZG8gdGhlIHNlY29uZCBoYWxmOiBvbiBhbiBhbmltYWxcbiAgICAgICAgLy8gbHlpbmcgb24gaXRzIHNpZGUgdGhlIGRvcnNhbC10by12ZW50cmFsIGF4aXMgaXMgaG9yaXpvbnRhbCwgc28gYSBiYW5kIGluIHggY3V0cyB0aGUgY3Jvd25cbiAgICAgICAgLy8gb2YgdGhlIHN3ZWVwIGluIGhhbGYsIGFuZCBhIE1VTFRJUExZIGNhbiBvbmx5IGV2ZXIgZGFya2VuIC0tIGl0IGNhbm5vdCB0YWtlIGEgd2FybSB0YW4gdG9cbiAgICAgICAgLy8gYSBjb29sZXIgZ3JleS4gVHdvIGNvbG91cnMgcGVyIHN0YXRpb24sIG9uZSBhdHRyaWJ1dGUsIHN0aWxsIG9uZSBkcmF3IGNhbGwuXG4gICAgICAgIGNvbnN0IHNlZyA9IHQuc2VnID8/IDEyLCBuID0gdC5zdGF0aW9ucy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkoc2VnICogbiAqIDMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIGNvbnN0IGUgPSB0LmhleGVzW01hdGgubWluKHQuaGV4ZXMubGVuZ3RoIC0gMSwgaSldO1xuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgVEhSRUUuQ29sb3IoQXJyYXkuaXNBcnJheShlKSA/IGVbMF0gOiBlKSwgdiA9IG5ldyBUSFJFRS5Db2xvcihBcnJheS5pc0FycmF5KGUpID8gZVsxXSA6IGUpO1xuICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGYgPSAoTWF0aC5zaW4oaiAqIE1hdGguUEkgKiAyIC8gc2VnKSArIDEpIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGsgPSAoaSAqIHNlZyArIGopICogMztcbiAgICAgICAgICAgIGNvbFtrXSA9IGQuciArICh2LnIgLSBkLnIpICogZjsgY29sW2sgKyAxXSA9IGQuZyArICh2LmcgLSBkLmcpICogZjsgY29sW2sgKyAyXSA9IGQuYiArICh2LmIgLSBkLmIpICogZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgICAgICAgZ3MucHVzaChnKTtcbiAgICAgIH0gZWxzZSBncy5wdXNoKHRpbnRHZW8oZywgdC5oZXggPz8gMHhmZmZmZmYpKTtcbiAgICB9XG4gICAgbGV0IGcgPSBtZXJnZUdlb3MoZ3MpO1xuICAgIC8vIGEgcGVyLWNvbXBvbmVudCBzY2FsZSwgYXBwbGllZCB0byB0aGUgbWVyZ2UgYmVmb3JlIHRpbnRpbmc6IGhvdyBhIGx5aW5nIGFuaW1hbCBhdXRob3JlZCBhdFxuICAgIC8vIGl0cyBvd24gcHJvcG9ydGlvbnMgaXMgZml0dGVkIGludG8gdGhlIGRlY2xhcmVkIGVudmVsb3BlIHdpdGhvdXQgcmUtcmVhZGluZyBldmVyeSBzdGF0aW9uXG4gICAgaWYgKGMuc2NhbGUpIGcuc2NhbGUoYy5zY2FsZVswXSwgYy5zY2FsZVsxXSwgYy5zY2FsZVsyXSk7XG4gICAgLy8gQVhJUyBUSU5UOiBhIHBlci12ZXJ0ZXggYmxlbmQgZnJvbSBjMCBhdCBgZnJvbWAgdG8gYzEgYXQgYHRvYCBhbG9uZyBvbmUgYXhpcywgb3ZlciB0aGUgd2hvbGVcbiAgICAvLyBtZXJnZSAtLSBhIHRhbiBiYWNrIGZhZGluZyB0byBhIHdoaXRlIGJlbGx5IGNvc3RzIGFuIGF0dHJpYnV0ZSwgbm90IGEgc2Vjb25kIG1hdGVyaWFsLiBBcHBsaWVkXG4gICAgLy8gaW4gTElORUFSIHNwYWNlIHRocm91Z2ggVEhSRUUuQ29sb3IuIGBrZWVwYCBtdWx0aXBsaWVzIHRoZSBibGVuZCBpbnRvIHRoZSBleGlzdGluZyB0aW50IGluc3RlYWRcbiAgICAvLyBvZiByZXBsYWNpbmcgaXQsIHNvIGEgZGFyayBub3NlIHN0YXlzIGRhcmsuXG4gICAgaWYgKGMudGludCkge1xuICAgICAgY29uc3QgYSA9IG5ldyBUSFJFRS5Db2xvcihjLnRpbnQuYzApLCBiID0gbmV3IFRIUkVFLkNvbG9yKGMudGludC5jMSk7XG4gICAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7IGxldCBjb2wgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUgfCBudWxsO1xuICAgICAgaWYgKCFjb2wpIHsgY29sID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKS5maWxsKDEpLCAzKTsgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgY29sKTsgfVxuICAgICAgY29uc3QgYXggPSBjLnRpbnQuYXhpcyA9PT0gJ3gnID8gMCA6IGMudGludC5heGlzID09PSAneScgPyAxIDogMjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHYgPSBheCA9PT0gMCA/IHAuZ2V0WChpKSA6IGF4ID09PSAxID8gcC5nZXRZKGkpIDogcC5nZXRaKGkpO1xuICAgICAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHYgLSBjLnRpbnQuZnJvbSkgLyAoYy50aW50LnRvIC0gYy50aW50LmZyb20pKSk7XG4gICAgICAgIGNvbnN0IHIgPSBhLnIgKyAoYi5yIC0gYS5yKSAqIHQsIGdnID0gYS5nICsgKGIuZyAtIGEuZykgKiB0LCBiYiA9IGEuYiArIChiLmIgLSBhLmIpICogdDtcbiAgICAgICAgaWYgKGMudGludC5rZWVwKSBjb2wuc2V0WFlaKGksIGNvbC5nZXRYKGkpICogciwgY29sLmdldFkoaSkgKiBnZywgY29sLmdldFooaSkgKiBiYik7IGVsc2UgY29sLnNldFhZWihpLCByLCBnZywgYmIpO1xuICAgICAgfVxuICAgICAgY29sLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGMudXYgPT09ICd3b3JsZCcpIGcgPSB3b3JsZFVWKGcsIGMudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoYy51diA9PT0gJ2hlaWdodCcpIGcgPSBoZWlnaHRVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgLy8gJ3BsYW4nOiBvbmUgcGljdHVyZSBvZiB0aGUgdG9wLCBjZW50cmVkLCBhdCB1dlNjYWxlID0gdGhlIGRpYW1ldGVyIChhIHJpYmJlZCB0YWJsZSB0b3ApLlxuICAgIGlmIChjLnV2ID09PSAncGxhbicpIGcgPSBwbGFuVVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAncGFuZWwnKSBnID0gcGFuZWxVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdwYW5lbC1yb3QnKSBnID0gcGFuZWxVVihnLCBjLnV2U2NhbGUgPz8gMSwgdHJ1ZSk7XG4gICAgLy8gJ2Zyb250JzogcGxhbmFyIFVWcyBpbnRvIGEgYmFrZWQgZnJvbnQtZWxldmF0aW9uIGF0bGFzIG9uICtaIGZhY2VzLCBvbmUgcGlubmVkIHRleGVsIGVsc2V3aGVyZS5cbiAgICBpZiAoYy51diA9PT0gJ2Zyb250JykgZyA9IGZyb250QXRsYXNVVihnLCBjLmF0bGFzKTtcbiAgICAvLyAnY3VsbScgaXMgZGVsaWJlcmF0ZWx5IGFic2VudCBoZXJlOiBpdCBpcyB3cml0dGVuIHBlciBjeWxpbmRlciBhYm92ZSwgYmVmb3JlIHRoZSByb3RhdGlvbnMsXG4gICAgLy8gYW5kIGEgd2hvbGUtbWVyZ2UgcGFzcyB3b3VsZCBmbGF0dGVuIGl0IGJhY2sgdG8gdGhlIGN5bGluZGVyJ3MgZGVmYXVsdCAwLi4xIHdyYXAuXG4gICAgYWRkKGMuaWQsIGMubmFtZSwgZywgYy5tYXRlcmlhbCk7XG4gICAgaWYgKGMuY29sbGlkZXIpIGNvbGxpZGVyc1tjLmlkXSA9IGMuY29sbGlkZXI7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlcGV0aXRpb24gc3lzdGVtc1xuICAgKiBQaWNrZXRzLCBzbGF0cywgbGF0dGljZSBzdHJpcHM6IG9uZSBnZW9tZXRyeSwgb25lIEluc3RhbmNlZE1lc2gsIG9uZSBkcmF3IGNhbGwuICovXG4gIGZvciAoY29uc3QgciBvZiAoRy5pbnN0YW5jZWQgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgKHIuYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCBzIG9mIChyLnNwaWtlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godGludEdlbyhzcGlrZShzLmF0LCBzLncsIHMuaCksIHMuaGV4KSk7XG4gICAgZm9yIChjb25zdCBmIG9mIChyLmZydXN0YSA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKGZydXN0dW0oZi5zbGljZSgxKSksIGZbMF0pKTtcbiAgICBmb3IgKGNvbnN0IGN5IG9mIChyLmN5bHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgdGgwYC9gdGhMZW5gIGN1dCBhIFBBUlRJQUwgY3lsaW5kZXIgdGhlIHNhbWUgd2F5IHRoZSBjb21wb25lbnQgYnJhbmNoIGRvZXM6IGEgc3BsaXQgYmFtYm9vXG4gICAgICAvLyBjdWxtIGlzIGEgaGFsZiBwaXBlLCB0aExlbiA9IFBJLCBgb3BlbmAgc28gaXQgaXMgYSBzaGVsbCB3aXRoIG5vIGRpc2NzIGF0IGl0cyBlbmRzLiBUaGVcbiAgICAgIC8vIG1hdGVyaWFsIGNhcnJpZXMgZG91YmxlU2lkZWQsIGJlY2F1c2UgYSBob2xsb3ctdXAgY3VsbSBpcyBzZWVuIGZyb20gdGhlIGluc2lkZS5cbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjeS5ydCwgY3kucmIsIGN5LmgsIGN5LnNlZyA/PyAxMiwgMSwgY3kub3BlbiA/PyBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeS50aDAgPz8gMCwgY3kudGhMZW4gPz8gTWF0aC5QSSAqIDIpO1xuICAgICAgaWYgKHIudXYgPT09ICdjdWxtJykgY3VsbVVWKGcsIGN5LnJ0LCBjeS5oLCByLnV2U2NhbGUgPz8gMSwgY3kudk9mZiA/PyAwKTtcbiAgICAgIGlmIChjeS5yeCkgZy5yb3RhdGVYKGN5LnJ4KTsgaWYgKGN5LnJ5KSBnLnJvdGF0ZVkoY3kucnkpOyBpZiAoY3kucnopIGcucm90YXRlWihjeS5yeik7XG4gICAgICBnLnRyYW5zbGF0ZShjeS5hdFswXSwgY3kuYXRbMV0sIGN5LmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGN5LmhleCkpO1xuICAgIH1cbiAgICAvLyBBbiBPUEVOIHdoZWVsIC0tIHR5cmUgYW5kIHJpbSBhcyBjbG9zZWQgcmluZyBsYXRoZXMsIGEgaHViLCBhbmQgd2lyZSBzcG9rZXMgLS0gZm9yIGEgYmljeWNsZVxuICAgIC8vIHdob3NlIHdoZWVscyByZWFkIGFzIGJpY3ljbGUgd2hlZWxzIHJhdGhlciB0aGFuIGRpc2NzLiBMYXRoZXMgcmV2b2x2ZSBhYm91dCBZIChgcnhgIGxheXMgdGhlXG4gICAgLy8gYXhsZSB3aGVyZSB0aGUgcGxhY2VtZW50IHdhbnRzIGl0KTsgYHNwb2tlc2AgcmFkaWF0ZSBhYm91dCBYIGJ5IHRoZSBoZWxwZXIncyBjb252ZW50aW9uLCBzbyBhblxuICAgIC8vIGF4bGUgb24gWiB0YWtlcyBgcnk6IFBJLzJgLlxuICAgIGZvciAoY29uc3QgbCBvZiAoci5sYXRoZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gbGF0aGUobC5wdHMsIGwuc2VnID8/IDEyLCAwLCBsLnNoYXJwICE9PSBmYWxzZSwgbC53ZWxkU2VhbSA9PT0gdHJ1ZSk7XG4gICAgICBpZiAobC5yeCkgZy5yb3RhdGVYKGwucngpOyBpZiAobC5yeSkgZy5yb3RhdGVZKGwucnkpOyBpZiAobC5yeikgZy5yb3RhdGVaKGwucnopO1xuICAgICAgaWYgKGwuYXQpIGcudHJhbnNsYXRlKGwuYXRbMF0sIGwuYXRbMV0sIGwuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgbC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBzIG9mIChyLnNwb2tlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSBzcG9rZXMocy5ySHViLCBzLnJSaW0sIHMuaGFsZlcsIHMubiwgcy5oZXgsIHMudCA/PyAwLjAwNiwgcy5wcmlzbSA/PyBmYWxzZSk7XG4gICAgICBpZiAocy5yeCkgZy5yb3RhdGVYKHMucngpOyBpZiAocy5yeSkgZy5yb3RhdGVZKHMucnkpOyBpZiAocy5yeikgZy5yb3RhdGVaKHMucnopO1xuICAgICAgaWYgKHMuYXQpIGcudHJhbnNsYXRlKHMuYXRbMF0sIHMuYXRbMV0sIHMuYXRbMl0pOyBncy5wdXNoKGcpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHQgb2YgKHIudHViZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gOCwgdC5oZXgpKTtcbiAgICBmb3IgKGNvbnN0IHNwIG9mIChyLnByb2ZpbGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHN3ZWVwUHJvZmlsZShzcCk7XG4gICAgICBpZiAoc3AucngpIGcucm90YXRlWChzcC5yeCk7IGlmIChzcC5yeSkgZy5yb3RhdGVZKHNwLnJ5KTsgaWYgKHNwLnJ6KSBnLnJvdGF0ZVooc3AucnopO1xuICAgICAgaWYgKHNwLmF0KSBnLnRyYW5zbGF0ZShzcC5hdFswXSwgc3AuYXRbMV0sIHNwLmF0WzJdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBzcC5oZXgpKTtcbiAgICB9XG4gICAgLy8gRVhUUlVERVMgb24gYW4gaW5zdGFuY2VkIHNldCwgdGhlIHNhbWUgcHJvZmlsZS1pbi1YWS1hbG9uZy1aIGZvcm0gYXMgYSBjb21wb25lbnQnczogYSBjaGFtZmVyZWRcbiAgICAvLyBsaWQgcGxhdGUgdGhhdCB0d28gaW5zdGFuY2VzIHNoYXJlICh0aGUgZHVtcHN0ZXIncyBsaWRzLCB0aGUgcmlnaHQgb25lIHlhd2VkIGEgaGFsZiB0dXJuKS5cbiAgICBmb3IgKGNvbnN0IGUgb2YgKHIuZXh0cnVkZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgc2hhcGUubW92ZVRvKGUucG9seVswXVswXSwgZS5wb2x5WzBdWzFdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZS5wb2x5Lmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8oZS5wb2x5W2ldWzBdLCBlLnBvbHlbaV1bMV0pO1xuICAgICAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gICAgICBjb25zdCBnID0gZXh0cnVkZUFsb25nWihzaGFwZSwgZS56MCwgZS56MSk7XG4gICAgICBpZiAoZS5yeCkgZy5yb3RhdGVYKGUucngpOyBpZiAoZS5yeSkgZy5yb3RhdGVZKGUucnkpOyBpZiAoZS5yeikgZy5yb3RhdGVaKGUucnopO1xuICAgICAgaWYgKGUuYXQpIGcudHJhbnNsYXRlKGUuYXRbMF0sIGUuYXRbMV0sIGUuYXRbMl0pO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIGUuaGV4KSk7XG4gICAgfVxuICAgIGxldCBnID0gbWVyZ2VHZW9zKGdzKTtcbiAgICBpZiAoci51diA9PT0gJ3dvcmxkJykgZyA9IHdvcmxkVVYoZywgci51dlNjYWxlID8/IDEpO1xuICAgIGlmIChyLnV2ID09PSAnaGVpZ2h0JykgZyA9IGhlaWdodFVWKGcsIHIudXZTY2FsZSA/PyAxKTtcbiAgICAvLyAnY3VsbScgYWdhaW4gd3JpdHRlbiBwZXIgY3lsaW5kZXIgYWJvdmUsIGJlZm9yZSB0aGUgcm90YXRpb25zLlxuICAgIGNvbnN0IG1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgcCBvZiByLnBsYWNlbWVudHMgYXMgbnVtYmVyW11bXSkge1xuICAgICAgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMocFswXSwgcFsxXSwgcFsyXSksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUV1bGVyKG5ldyBUSFJFRS5FdWxlcihwWzNdID8/IDAsIHBbNF0gPz8gMCwgcFs1XSA/PyAwKSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKSk7XG4gICAgfVxuICAgIGFkZEluc3Qoci5pZCwgci5uYW1lLCBnLCByLm1hdGVyaWFsLCBtYXRzLCByLmNvbG9ycyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhc2VzICovXG4gIGZvciAoY29uc3QgdCBvZiAoQ09ORklHLnRpbGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG1hdCA9IG1hdGVyaWFsc1t0Lm1hdGVyaWFsXTtcbiAgICBpZiAoIW1hdCkgY29udGludWU7XG4gICAgLy8gQSBCQUtFRCBncmFwaGljIChhIHByaW50ZWQgc2lnbiBmYWNlKTogb25lIFdlYlAgZGF0YSBVUkkgY29tcG9zZWQgb2ZmbGluZSBmcm9tIHRoZSBwbGF0ZSdzIG93blxuICAgIC8vIHByaW50ZWQgcmVnaW9uIGFuZCB2ZWN0b3IgbWFya3MsIGxvYWRlZCB0aHJvdWdoIFRleHR1cmVMb2FkZXIuIEFzc2lnbmVkIHN5bmNocm9ub3VzbHkgc28gdGhlXG4gICAgLy8gaGFybmVzcyB3YWl0cyBvbiB0aGUgZGVjb2RlLiBJdCBiZWF0cyBmaWxsVGV4dCwgd2hpY2ggZHJhd3MgYSBkaWZmZXJlbnQgd29yZG1hcmsgcGVyIG1hY2hpbmUuXG4gICAgaWYgKHQua2luZCA9PT0gJ2Jha2VkJykge1xuICAgICAgLy8gVW5kZXIgcGxhaW4gTm9kZSAodGhlIGNvcGxhbmFyIGNoZWNrLCB0aGUgcnVudGltZSBwcm9iZSkgdGhlcmUgaXMgbm8gZG9jdW1lbnQgZm9yIEltYWdlTG9hZGVyOlxuICAgICAgLy8ga2VlcCB0aGUgd2hpdGUgZmFsbGJhY2sgcmF0aGVyIHRoYW4gdGhyb3csIGV4YWN0bHkgYXMgdGhlIHJldGFpbCBnbGF6aW5nIGRvZXMuXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgY29udGludWU7XG4gICAgICBjb25zdCBiYWtlZCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCh0LnVyaSk7XG4gICAgICBjb25zdCBzcmdiID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2U7XG4gICAgICBpZiAoc3JnYikgYmFrZWQuY29sb3JTcGFjZSA9IHNyZ2I7XG4gICAgICBiYWtlZC5hbmlzb3Ryb3B5ID0gNDtcbiAgICAgIG1hdC5tYXAgPSBiYWtlZDsgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBsZXQgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKHQua2luZCA9PT0gJ211ZCcpIHRleCA9IG11ZFRpbGUodC5zaXplID8/IDUxMiwgdC5iYXNlLCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMzKTtcbiAgICBpZiAodC5raW5kID09PSAnZHVzdCcpIHRleCA9IGR1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuZHVzdCwgdC5zZWVkID8/IDEsIHQuY292ZXJhZ2UgPz8gMC4zMCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BsYW5rJykgdGV4ID0gcGxhbmtUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuYm9hcmRzID8/IDYsIHQuc2VlZCA/PyA1KTtcbiAgICBpZiAodC5raW5kID09PSAncnVzdCcpIHRleCA9IHJ1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQucmF0aW8sIHQuc2VlZCA/PyA3LCB0LmRlbnNpdHkgPz8gOTApO1xuICAgIGlmICh0LmtpbmQgPT09ICdwYWludCcpIHRleCA9IHBhaW50VGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTcsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdjb3JydWdhdGlvbicpIHRleCA9IGNvcnJ1Z2F0aW9uVGlsZSh0LnNpemUgPz8gNTEyLCB0LnBpdGNoID8/IDEyLCB0LmxvdyA/PyAwLjcsIHQuc2VlZCA/PyAzKTtcbiAgICBpZiAodC5raW5kID09PSAnZ3JpbWUnKSB0ZXggPSBncmltZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDExLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnemluYycpIHRleCA9IHppbmNUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAxOSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2Z1cicpIHRleCA9IGZ1clRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDEzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY2hhaW5saW5rJykgdGV4ID0gY2hhaW5saW5rVGlsZSh0LnNpemUgPz8gMjU2LCB0LndpcmUgPz8gMC4wOSwgdC5zZWVkID8/IDQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdiYW1ib28nKSB0ZXggPSBiYW1ib29UaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc3RyaXBzID8/IDEwLCB0LnNlZWQgPz8gNik7XG4gICAgaWYgKHQua2luZCA9PT0gJ3N0cmlwZXMnKSB0ZXggPSBzdHJpcGVUaWxlKHQuc2l6ZSA/PyAyNTYsIHQuYmFuZHMgPz8gOCwgdC5hLCB0LmIsIHQuc2VlZCA/PyA5LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAncG9zdGVyJykgdGV4ID0gcG9zdGVyVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gOCwgdC5saW5lcyA/PyBbXSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BlYmJsZScpIHRleCA9IHBlYmJsZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDIxLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndHJlYWQnKSB0ZXggPSB0cmVhZFRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDIzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndHlyZScpIHRleCA9IHR5cmVUaWxlKHQuc2l6ZSA/PyAyNTYsIHQuc2VlZCA/PyAyOSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2N1bG0nKSB0ZXggPSBjdWxtVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMzEpO1xuICAgIGlmICh0LmtpbmQgPT09ICdzYXduJykgdGV4ID0gc2F3blRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDQzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndGhhdGNoJykgdGV4ID0gdGhhdGNoVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMzcsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0YXJwJykgdGV4ID0gdGFycFRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDQxLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnZ2FsdicpIHRleCA9IGdhbHZUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA0NywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3NwbGl0JykgdGV4ID0gc3BsaXRUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA1Myk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3JvcGUnKSB0ZXggPSByb3BlVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNTkpO1xuICAgIGlmICh0LmtpbmQgPT09ICdyaWJ0b3AnKSB0ZXggPSByaWJUb3BUaWxlKHQuc2l6ZSA/PyAxMDI0LCB0LnNlZWQgPz8gNjEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdjb25jcmV0ZScpIHRleCA9IGNvbmNyZXRlVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNjcsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdyb2FkJykgdGV4ID0gcm9hZFRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDcxLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnaGF6YXJkJykgdGV4ID0gaGF6YXJkVGlsZSh0LnNpemUgPz8gMjU2LCB0LnNlZWQgPz8gNzMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdlYXJ0aCcpIHRleCA9IGVhcnRoVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNzksIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdjaGVxdWVyJykgdGV4ID0gY2hlcXVlclRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDgzLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAncmlicGFuZWwnKSB0ZXggPSByaWJQYW5lbFRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDg5LCB0KTtcbiAgICBiaW5kVGlsZShtYXQsIHRleCwgdC5idW1wID8/IDApO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlRXhwcmVzc3dheUhhbW1lcmhlYWRQaWVyTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiB0aGUgcm9vdCwgcGx1cyBPTkUgUEVSIFdIRUVMIChhbmQgYW55IG90aGVyIG1lY2hhbmlzbSBDT05GSUcucGl2b3RzIG5hbWVzIC0tIGFcbiAgICAvLyBzdGVlcmluZyBoZWFkLCBhIGNhbm9weSBzdGF5KS4gQSB2ZWhpY2xlJ3Mgd2hlZWxzIGdlbnVpbmVseSB0dXJuLCBzbyBlYWNoIG9uZSBpcyBhIHByb21pc2VcbiAgICAvLyBrZXB0OiB0aGUgcGl2b3Qgc2l0cyBhdCB0aGUgaHViLCBpdHMgYXhpcyBpcyB0aGUgYXhsZSwgYW5kIGBpbnN0YW5jZWAgbmFtZXMgd2hpY2ggaW5zdGFuY2VcbiAgICAvLyBvZiB0aGUgd2hlZWwgSW5zdGFuY2VkTWVzaCBpdCBkcml2ZXMuIE5vdGhpbmcgZWxzZSBvbiB0aGUgcHJvcCBtb3ZlcyAtLSB0aGUgZG9vcnMgYXJlIHBhcnRcbiAgICAvLyBvZiB0aGUgYm9keSBzaGVsbCAtLSBzbyBub3RoaW5nIGVsc2UgZ2V0cyBhbiBheGlzLlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuICAgIGZvciAoY29uc3QgcHYgb2YgKENPTkZJRy5waXZvdHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBvID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICBvLm5hbWUgPSBwdi5uYW1lO1xuICAgICAgby5wb3NpdGlvbi5zZXQocHYucG9zaXRpb25bMF0sIHB2LnBvc2l0aW9uWzFdLCBwdi5wb3NpdGlvblsyXSk7XG4gICAgICBvLnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICAgIGFuaW1hdGlvblJvbGU6ICdjaGlsZCcsXG4gICAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBwdi5wb3NpdGlvbiwgYXhpczogcHYuYXhpcywgbmFtZTogcHYubmFtZSxcbiAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBwdi5jb21wb25lbnQsIGluc3RhbmNlOiBwdi5pbnN0YW5jZSA/PyBudWxsLCBub3RlczogcHYubm90ZSA/PyAnJyB9LFxuICAgICAgfTtcbiAgICAgIHJvb3QuYWRkKG8pO1xuICAgICAgcGl2b3RzLnB1c2gobyk7XG4gICAgfVxuXG4gICAgLy8gU29ja2V0czogTk9ORSB1bmxlc3MgQ09ORklHLnNvY2tldHMgbmFtZXMgb25lLiBOb3RoaW5nIGF0dGFjaGVzIHRvIGEgdmVoaWNsZSBpbiB0aGlzIGtpdFxuICAgIC8vIGFuZCBub3RoaW5nIGlzIGVtaXR0ZWQgZnJvbSBpdC5cblxuICAgIC8vIENvbGxpZGVycyBhcmUgcGxhaW4gREFUQSwgbm90IE9iamVjdDNELCBzbyB0aGV5IGNhcnJ5IG5vIC5uYW1lIG9mIHRoZWlyIG93bi4gR2l2ZSBlYWNoIHRoZVxuICAgIC8vIGlkIG9mIHRoZSBjb21wb25lbnQgaXQgb3ducyBhbmQgZHJvcCB0aGUgZW1wdHkgb25lcyAtLSBhIG5hbWVsZXNzIGVtcHR5IHByb3h5IGluIHRoZVxuICAgIC8vIHJ1bnRpbWUgbGlzdCByZWFkcyBhcyBhIHBoeXNpY3Mgc2hhcGUgdGhhdCBleGlzdHMgYW5kIGRvZXMgbm90aGluZy5cbiAgICBjb25zdCBjb2xsaWRlcnMgPSBPYmplY3QuZW50cmllcygocnQuY29sbGlkZXJzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVxuICAgICAgLmZpbHRlcigoWywgY10pID0+IGMgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGMpLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChbaWQsIGNdKSA9PiAoeyBuYW1lOiBpZCwgLi4uKGMgYXMgb2JqZWN0KSB9KSk7XG5cbiAgICAvLyBEZXN0cnVjdGlvbiBncm91cHM6IHRoaXMgcHJvcCBkZWNsYXJlcyBOT05FLCBhbmQgcHJvbW90aW9uIGNoZWNrcyBidWlsdCBhZ2FpbnN0IGRlY2xhcmVkIGFzXG4gICAgLy8gYW4gZXF1YWxpdHkgaW4gQk9USCBkaXJlY3Rpb25zLiBEZXJpdmVkIHJhdGhlciB0aGFuIGFzc3VtZWQgZW1wdHksIHNvIGEgY29tcG9uZW50IHRoYXRcbiAgICAvLyBzb21laG93IGNhcnJpZWQgYSBmcmFjdHVyZUdyb3VwIGZhaWxzIHRoZSBnYXRlIGxvdWRseSBpbnN0ZWFkIG9mIGJlaW5nIGRyb3BwZWQgaGVyZS5cbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbWVtYmVyc10gb2YgT2JqZWN0LmVudHJpZXMoKHJ0LmRlc3RydWN0aW9uR3JvdXBzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPikpIHtcbiAgICAgIGdyb3VwZWQuc2V0KG5hbWUsIFsuLi5tZW1iZXJzXSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgY29uc3QgZ3JvdXAgPSAobm9kZSBhcyBhbnkpPy51c2VyRGF0YT8uYWN0aW9uUHJvZmlsZT8uZGVzdHJ1Y3Rpb24/LmZyYWN0dXJlR3JvdXA7XG4gICAgICBpZiAodHlwZW9mIGdyb3VwICE9PSAnc3RyaW5nJyB8fCAhZ3JvdXApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFncm91cGVkLmhhcyhncm91cCkpIGdyb3VwZWQuc2V0KGdyb3VwLCBbXSk7XG4gICAgICBncm91cGVkLmdldChncm91cCkhLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZC4gdGhhaWtpdCdzIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGVcbiAgICAgIC8vIHB1cHBldGVlciBicmlkZ2UgYW5kIGl0cyByZWdpc3RyeSBmaWVsZCBpcyBhIG51bWJlcjsgYSBSZWNvcmQgb2YgT2JqZWN0M0QgaXMgY2lyY3VsYXIgYW5kXG4gICAgICAvLyBmYWlscyB0byBzZXJpYWxpc2UsIHdoaWNoIHN1cmZhY2VzIGFzIHRoZSB3aG9sZSBzdGF0cyBvYmplY3QgYXJyaXZpbmcgdW5kZWZpbmVkLiBUaGVcbiAgICAgIC8vIFJlY29yZCBzdGF5cyByZWFjaGFibGUgdW5kZXIgYnlJZC5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzLFxuICAgICAgc29ja2V0czogT2JqZWN0LnZhbHVlcygocnQuc29ja2V0cyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+KSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbLi4uZ3JvdXBlZC5lbnRyaWVzKCldLm1hcCgoW25hbWUsIG1lbWJlcnNdKSA9PiAoeyBuYW1lLCBtZW1iZXJzIH0pKSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiBydC5zb2NrZXRzID8/IHt9IH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cblxuLyoqXG4gKiBUaGUgb25lLWFyZ3VtZW50IGVudHJ5IHBvaW50OiB2aWJlM2QncyBjb250cmFjdCwgYW5kIGltZzJ0aHJlZWpzJ3Mgb3duLlxuICpcbiAqIGBjcmVhdGVPYmplY3RNb2RlbGAgYWJvdmUga2VlcHMgdGhhaWtpdCdzIGhpc3RvcmljYWwgKHNwZWMsIG9wdGlvbnMpIHNoYXBlIHNvXG4gKiB0aGUgaGFybmVzcywgdGhlIGxldmVsIGVkaXRvciBhbmQgdGhlIE5vZGUtc2lkZSBnYXRlcyBjYXJyeSBvbiB1bmNoYW5nZWQuXG4gKiBgc3BlY2AgaGFzIG5ldmVyIGJlZW4gcGFzc2VkIGJ5IGFueSBjYWxsZXIgLS0gaXQgaXMgaW5zcGVjdGlvbiBkYXRhIHRoYXQgaXNcbiAqIGFscmVhZHkgYmFrZWQgaW50byB0aGlzIG1vZHVsZSAtLSBzbyB0aGlzIGlzIHRoZSBob25lc3Qgc2lnbmF0dXJlLCBhbmQgaXQgaXNcbiAqIHdoYXQgYSB2aWJlM2QgY29uc3VtZXIgaW5zdGFsbHMgYW5kIGNhbGxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICByZXR1cm4gY3JlYXRlT2JqZWN0TW9kZWwodW5kZWZpbmVkLCBvcHRpb25zKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQXNDdkIsSUFBTSxTQUFTO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixh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LFFBQ1gsWUFBWTtBQUFBLFVBQ1Y7QUFBQSxZQUNFLFFBQVE7QUFBQSxjQUNOO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFB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QUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFBRyxTQUFHLEtBQUssUUFBUUEsSUFBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ3ZFO0FBS0EsZUFBVyxLQUFNLEVBQUUsVUFBVSxDQUFDLEdBQWE7QUFDekMsWUFBTUEsS0FBSSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sSUFBSSxHQUFHLEVBQUUsVUFBVSxPQUFPLEVBQUUsYUFBYSxJQUFJO0FBQzdFLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQUcsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUM5RSxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFBRyxTQUFHLEtBQUssUUFBUUEsSUFBRyxFQUFFLEdBQUcsQ0FBQztBQUFBLElBQzdFO0FBQ0EsZUFBVyxLQUFNLEVBQUUsVUFBVSxDQUFDLEdBQWE7QUFDekMsWUFBTUEsS0FBSSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLE1BQU8sRUFBRSxTQUFTLEtBQUs7QUFDcEYsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUFHLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQzlFLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUFHLFNBQUcsS0FBS0EsRUFBQztBQUFBLElBQzdE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Q0FBQztBQUMxRixRQUFJLEVBQUUsU0FBUyxTQUFVLE9BQU0sV0FBVyxFQUFFLFFBQVEsS0FBSyxFQUFFLFVBQVUsSUFBSSxFQUFFLFFBQVEsQ0FBQztBQUNwRixRQUFJLEVBQUUsU0FBUyxVQUFXLE9BQU0sV0FBVyxFQUFFLFFBQVEsS0FBSyxFQUFFLFNBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxHQUFHLENBQUM7QUFDaEcsUUFBSSxFQUFFLFNBQVMsU0FBVSxPQUFNLFdBQVcsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNuRixRQUFJLEVBQUUsU0FBUyxTQUFVLE9BQU0sV0FBVyxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsSUFBSSxDQUFDO0FBQ3hFLFFBQUksRUFBRSxTQUFTLFFBQVMsT0FBTSxVQUFVLEVBQUUsUUFBUSxLQUFLLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFDdEUsUUFBSSxFQUFFLFNBQVMsT0FBUSxPQUFNLFNBQVMsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLElBQUksQ0FBQztBQUNwRSxRQUFJLEVBQUUsU0FBUyxPQUFRLE9BQU0sU0FBUyxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsRUFBRTtBQUNqRSxRQUFJLEVBQUUsU0FBUyxPQUFRLE9BQU0sU0FBUyxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsSUFBSSxDQUFDO0FBQ3BFLFFBQUksRUFBRSxTQUFTLFNBQVUsT0FBTSxXQUFXLEVBQUUsUUFBUSxLQUFLLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFDeEUsUUFBSSxFQUFFLFNBQVMsT0FBUSxPQUFNLFNBQVMsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLElBQUksQ0FBQztBQUNwRSxRQUFJLEVBQUUsU0FBUyxPQUFRLE9BQU0sU0FBUyxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsSUFBSSxDQUFDO0FBQ3BFLFFBQUksRUFBRSxTQUFTLFFBQVMsT0FBTSxVQUFVLEVBQUUsUUFBUSxLQUFLLEVBQUUsUUFB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
