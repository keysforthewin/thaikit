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

// ../repo/scratch/expressway-twin-column-portal-pier/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createExpresswayTwinColumnPortalPierModel: () => createExpresswayTwinColumnPortalPierModel,
  createModel: () => createModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "expressway-twin-column-portal-pier",
  "name": "Expressway Twin-Column Portal Pier",
  "exportName": "ExpresswayTwinColumnPortalPier",
  "envelope": "Envelope 12.5 x 12 x 3 m, origin base-center at ground, +Y up, the beam running along X; bearing seat at y = 12.\n * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=16 unique geometries.",
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
    }
  ],
  "tiles": [
    {
      "material": "concrete",
      "kind": "concrete",
      "size": 1024,
      "seed": 121,
      "base": [
        0.8165416802521465,
        0.8157406396681584,
        0.8163374623367927
      ],
      "cloud": [
        0.8715791761765026,
        0.8710184477677108,
        0.8634304207119742
      ],
      "clouds": 90,
      "cloudR": 0.05,
      "cloudAlpha": 0.25,
      "streaks": 24,
      "streak": [
        0.591805238561026,
        0.5900229232616526,
        0.580872670460886
      ],
      "streakLen": 0.35,
      "streakAlpha": 0.18,
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
      "seams": 48,
      "seamAt": 0.01,
      "seam": [
        0.6651885664601673,
        0.6637266673943891,
        0.6609306996986942
      ],
      "seamAlpha": 0.22,
      "seamW": 15e-4,
      "efflor": 16,
      "efflorLen": 0.5,
      "efflorAlpha": 0.75,
      "ties": [
        10,
        14
      ],
      "tieR": 3e-3,
      "tie": [
        0.5872187805673297,
        0.5854164392533565,
        0.576163374623368
      ],
      "tieDrip": 0.25,
      "pour": 4,
      "pourAt": 0.2,
      "pourTone": [
        0.6514291924790784,
        0.649907215369501,
        0.6420935163486218
      ],
      "pourAlpha": 0.45,
      "soot": [
        0.6422562764916856,
        0.6360877633446129,
        0.6326749246735857
      ],
      "sootCov": 0.3,
      "sootAlpha": 0.35,
      "sootBlots": 30,
      "spalls": 6,
      "spall": [
        0.9633083360504292,
        0.9539351599170395,
        0.9434884499497824
      ]
    },
    {
      "material": "concreteCap",
      "kind": "concrete",
      "size": 512,
      "seed": 122,
      "base": [
        0.7248125203782197,
        0.7236109595022377,
        0.72215154558643
      ],
      "cloud": [
        0.8715791761765026,
        0.8710184477677108,
        0.8634304207119742
      ],
      "clouds": 54,
      "cloudR": 0.07333333333333333,
      "cloudAlpha": 0.2,
      "streaks": 20,
      "streak": [
        0.591805238561026,
        0.5900229232616526,
        0.580872670460886
      ],
      "streakLen": 0.6,
      "streakAlpha": 0.2,
      "wash": [
        0.6651885664601673,
        0.6637266673943891,
        0.651512108023658
      ],
      "coverage": 0,
      "washAlpha": 0,
      "pits": 300,
      "pit": [
        0.6422562764916856,
        0.6406942473529091,
        0.6326749246735857
      ],
      "pitR": 0.8,
      "grain": 3600,
      "grainAlpha": 0.09,
      "bump": 15e-4,
      "seams": 12,
      "seamAt": 0.02,
      "seam": [
        0.6651885664601673,
        0.6637266673943891,
        0.6609306996986942
      ],
      "seamAlpha": 0.22,
      "seamW": 3e-3,
      "ties": [
        3,
        3
      ],
      "tieR": 4e-3,
      "tie": [
        0.5872187805673297,
        0.5854164392533565,
        0.576163374623368
      ],
      "tieDrip": 0.3
    }
  ],
  "geometry": {
    "components": [
      {
        "id": "body",
        "name": "Footing and columns",
        "material": "concrete",
        "uv": "world",
        "uvScale": 12,
        "faceTint": {
          "down": 1.6
        },
        "boxes": [
          [
            16777215,
            0,
            0.3,
            0,
            12.5,
            0.6,
            3
          ]
        ],
        "extrudes": [
          {
            "poly": [
              [
                -5.08,
                -1
              ],
              [
                -3.7200000000000006,
                -1
              ],
              [
                -3.6000000000000005,
                -0.88
              ],
              [
                -3.6000000000000005,
                0.88
              ],
              [
                -3.7200000000000006,
                1
              ],
              [
                -5.08,
                1
              ],
              [
                -5.2,
                0.88
              ],
              [
                -5.2,
                -0.88
              ]
            ],
            "z0": 0.5,
            "z1": 10.45,
            "rx": -1.5707963267948966,
            "hex": 16777215
          },
          {
            "poly": [
              [
                3.7200000000000006,
                -1
              ],
              [
                5.08,
                -1
              ],
              [
                5.2,
                -0.88
              ],
              [
                5.2,
                0.88
              ],
              [
                5.08,
                1
              ],
              [
                3.7200000000000006,
                1
              ],
              [
                3.6000000000000005,
                0.88
              ],
              [
                3.6000000000000005,
                -0.88
              ]
            ],
            "z0": 0.5,
            "z1": 10.45,
            "rx": -1.5707963267948966,
            "hex": 16777215
          }
        ]
      },
      {
        "id": "beam",
        "name": "Cross-beam",
        "material": "concreteCap",
        "uv": "world",
        "uvScale": 3,
        "faceTint": {
          "down": 1.6
        },
        "extrudes": [
          {
            "poly": [
              [
                -6.13,
                10.35
              ],
              [
                6.13,
                10.35
              ],
              [
                6.25,
                10.469999999999999
              ],
              [
                6.25,
                11.73
              ],
              [
                6.13,
                11.85
              ],
              [
                -6.13,
                11.85
              ],
              [
                -6.25,
                11.73
              ],
              [
                -6.25,
                10.469999999999999
              ]
            ],
            "z0": -1,
            "z1": 1,
            "hex": 16777215
          }
        ],
        "boxes": [
          [
            16777215,
            -4.4,
            11.9,
            0,
            1.1,
            0.1,
            0.9
          ],
          [
            16777215,
            4.4,
            11.9,
            0,
            1.1,
            0.1,
            0.9
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
            -4.4,
            11.975,
            0,
            0.7,
            0.05,
            0.5
          ],
          [
            10395297,
            4.4,
            11.975,
            0,
            0.7,
            0.05,
            0.5
          ]
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
  const uvS = o.uvScale ?? 1, uvSV = o.uvScaleV ?? uvS;
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
      const v0 = vAt[j] / uvSV, v1 = (k === 0 ? vEnd : vAt[k]) / uvSV;
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
    for (const b of o.bands ?? []) {
      const y1 = s * (1 - b.v1), y0 = s * (1 - b.v0), v = b.tone ?? [0.7, 0.7, 0.68];
      ctx.fillStyle = `rgba(${rgb2(v)},${b.alpha ?? 0.5})`;
      ctx.fillRect(0, y1, s, y0 - y1);
    }
    for (let i = 0; i < (o.efflor ?? 0); i++) {
      const x = rnd() * s, y0 = rnd() * s * 0.6, len = s * ((o.efflorLen ?? 0.3) * (0.5 + rnd())), w = 2 + rnd() * s * 0.012;
      const g2 = ctx.createLinearGradient(0, y0, 0, y0 + len), a = (o.efflorAlpha ?? 0.5) * (0.5 + rnd() * 0.5);
      g2.addColorStop(0, `rgba(255,255,250,${a})`);
      g2.addColorStop(1, `rgba(255,255,250,0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, y0, w, len);
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
    const w = s / per * Math.cos(ang);
    ctx.fillStyle = `rgb(${rgb2(b)})`;
    for (let i = -per * 4; i < per * 5; i++) {
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
function createExpresswayTwinColumnPortalPierModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Expressway Twin-Column Portal Pier";
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
    if (c.faceTint) {
      const p = g.getAttribute("position"), nrm = g.getAttribute("normal");
      let col = g.getAttribute("color");
      if (!col) {
        col = new THREE.BufferAttribute(new Float32Array(p.count * 3).fill(1), 3);
        g.setAttribute("color", col);
      }
      for (let i = 0; i < p.count; i++) {
        const ny = nrm.getY(i);
        const k = ny < -0.35 ? c.faceTint.down ?? 1 : ny > 0.35 ? c.faceTint.up ?? 1 : c.faceTint.side ?? 1;
        if (k !== 1) col.setXYZ(i, col.getX(i) * k, col.getY(i) * k, col.getZ(i) * k);
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
  const root = createExpresswayTwinColumnPortalPierModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogRXhwcmVzc3dheSBUd2luLUNvbHVtbiBQb3J0YWwgUGllciAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyxcbiAqIGluc3RhbmNpbmcgYW5kIHRoZSBsYXRoZSBoZWxwZXJzIGJlbG93IGFyZSBoYW5kLXJvbGxlZCAtLSBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXNcbiAqIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSAxMi41IHggMTIgeCAzIG0sIG9yaWdpbiBiYXNlLWNlbnRlciBhdCBncm91bmQsICtZIHVwLCB0aGUgYmVhbSBydW5uaW5nIGFsb25nIFg7IGJlYXJpbmcgc2VhdCBhdCB5ID0gMTIuXG4gKiBCdWRnZXQgKGhlcm8yeCk6IDw9MTYwMDAgdHJpYW5nbGVzLCA8PTEyIGRyYXcgY2FsbHMsIDw9OCBtYXRlcmlhbHMsIDw9MTYgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhhaWtpdCdzIFNUUkVFVCBBTkQgVkVORE9SIFBST1BTIC0tIGEgY29uZSwgYSBiYXJyaWVyLCBhIGNhcnQsIGEgc3Rvb2wuIFRoZVxuICogc2hhcmVkIHZvY2FidWxhcnkgaXMgdGhlIFRJTlRFRCBCT1ggYW5kIHRoZSBwb2x5bGluZSBUVUJFIG1lcmdlZCBpbnRvIG9uZSBnZW9tZXRyeSBwZXIgbWF0ZXJpYWwsXG4gKiB3aXRoIGV2ZXJ5IGNvbG91ciBkaWZmZXJlbmNlIGluc2lkZSBhIG1hdGVyaWFsIGNhcnJpZWQgYXMgYSB2ZXJ0ZXggY29sb3VyIG9uIGEgV0hJVEUgbWF0ZXJpYWwsXG4gKiBhbmQgc3VyZmFjZSBpZGVudGl0eSAoY29ycnVnYXRpb24sIGdyaW1lIHdhc2gsIG1vc3MsIHBsYW5rIGpvaW50cywgcnVzdCkgZGVsaXZlcmVkIGFzIE9ORVxuICogcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgcGVyIG1hdGVyaWFsIHJhdGhlciB0aGFuIGFzIGdlb21ldHJ5IG9yIGEgcHJvY2VkdXJhbCB0ZXh0dXJlIHNldC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcImV4cHJlc3N3YXktdHdpbi1jb2x1bW4tcG9ydGFsLXBpZXJcIixcbiAgICBcIm5hbWVcIjogXCJFeHByZXNzd2F5IFR3aW4tQ29sdW1uIFBvcnRhbCBQaWVyXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiRXhwcmVzc3dheVR3aW5Db2x1bW5Qb3J0YWxQaWVyXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDEyLjUgeCAxMiB4IDMgbSwgb3JpZ2luIGJhc2UtY2VudGVyIGF0IGdyb3VuZCwgK1kgdXAsIHRoZSBiZWFtIHJ1bm5pbmcgYWxvbmcgWDsgYmVhcmluZyBzZWF0IGF0IHkgPSAxMi5cXG4gKiBCdWRnZXQgKGhlcm8yeCk6IDw9MTYwMDAgdHJpYW5nbGVzLCA8PTEyIGRyYXcgY2FsbHMsIDw9OCBtYXRlcmlhbHMsIDw9MTYgdW5pcXVlIGdlb21ldHJpZXMuXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiY29uY3JldGVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNDIxMTAyNixcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImNvbmNyZXRlQ2FwXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTQyMTEwMjYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTQsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzdGVlbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDEyNjMzMDMwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjU1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjMsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIFwidGlsZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiY29uY3JldGVcIixcbiAgICAgICAgXCJraW5kXCI6IFwiY29uY3JldGVcIixcbiAgICAgICAgXCJzaXplXCI6IDEwMjQsXG4gICAgICAgIFwic2VlZFwiOiAxMjEsXG4gICAgICAgIFwiYmFzZVwiOiBbXG4gICAgICAgICAgMC44MTY1NDE2ODAyNTIxNDY1LFxuICAgICAgICAgIDAuODE1NzQwNjM5NjY4MTU4NCxcbiAgICAgICAgICAwLjgxNjMzNzQ2MjMzNjc5MjdcbiAgICAgICAgXSxcbiAgICAgICAgXCJjbG91ZFwiOiBbXG4gICAgICAgICAgMC44NzE1NzkxNzYxNzY1MDI2LFxuICAgICAgICAgIDAuODcxMDE4NDQ3NzY3NzEwOCxcbiAgICAgICAgICAwLjg2MzQzMDQyMDcxMTk3NDJcbiAgICAgICAgXSxcbiAgICAgICAgXCJjbG91ZHNcIjogOTAsXG4gICAgICAgIFwiY2xvdWRSXCI6IDAuMDUsXG4gICAgICAgIFwiY2xvdWRBbHBoYVwiOiAwLjI1LFxuICAgICAgICBcInN0cmVha3NcIjogMjQsXG4gICAgICAgIFwic3RyZWFrXCI6IFtcbiAgICAgICAgICAwLjU5MTgwNTIzODU2MTAyNixcbiAgICAgICAgICAwLjU5MDAyMjkyMzI2MTY1MjYsXG4gICAgICAgICAgMC41ODA4NzI2NzA0NjA4ODZcbiAgICAgICAgXSxcbiAgICAgICAgXCJzdHJlYWtMZW5cIjogMC4zNSxcbiAgICAgICAgXCJzdHJlYWtBbHBoYVwiOiAwLjE4LFxuICAgICAgICBcIndhc2hcIjogW1xuICAgICAgICAgIDAuNjY1MTg4NTY2NDYwMTY3MyxcbiAgICAgICAgICAwLjY2MzcyNjY2NzM5NDM4OTEsXG4gICAgICAgICAgMC42NTE1MTIxMDgwMjM2NThcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb3ZlcmFnZVwiOiAwLFxuICAgICAgICBcIndhc2hBbHBoYVwiOiAwLFxuICAgICAgICBcInBpdHNcIjogOTM2MCxcbiAgICAgICAgXCJwaXRcIjogW1xuICAgICAgICAgIDAuNjQyMjU2Mjc2NDkxNjg1NixcbiAgICAgICAgICAwLjY0MDY5NDI0NzM1MjkwOTEsXG4gICAgICAgICAgMC42MzI2NzQ5MjQ2NzM1ODU3XG4gICAgICAgIF0sXG4gICAgICAgIFwicGl0UlwiOiAwLjgsXG4gICAgICAgIFwiZ3JhaW5cIjogNTc2MDAsXG4gICAgICAgIFwiZ3JhaW5BbHBoYVwiOiAwLjA5LFxuICAgICAgICBcImJ1bXBcIjogMC4wMDE1LFxuICAgICAgICBcInNlYW1zXCI6IDQ4LFxuICAgICAgICBcInNlYW1BdFwiOiAwLjAxLFxuICAgICAgICBcInNlYW1cIjogW1xuICAgICAgICAgIDAuNjY1MTg4NTY2NDYwMTY3MyxcbiAgICAgICAgICAwLjY2MzcyNjY2NzM5NDM4OTEsXG4gICAgICAgICAgMC42NjA5MzA2OTk2OTg2OTQyXG4gICAgICAgIF0sXG4gICAgICAgIFwic2VhbUFscGhhXCI6IDAuMjIsXG4gICAgICAgIFwic2VhbVdcIjogMC4wMDE1LFxuICAgICAgICBcImVmZmxvclwiOiAxNixcbiAgICAgICAgXCJlZmZsb3JMZW5cIjogMC41LFxuICAgICAgICBcImVmZmxvckFscGhhXCI6IDAuNzUsXG4gICAgICAgIFwidGllc1wiOiBbXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTRcbiAgICAgICAgXSxcbiAgICAgICAgXCJ0aWVSXCI6IDAuMDAzLFxuICAgICAgICBcInRpZVwiOiBbXG4gICAgICAgICAgMC41ODcyMTg3ODA1NjczMjk3LFxuICAgICAgICAgIDAuNTg1NDE2NDM5MjUzMzU2NSxcbiAgICAgICAgICAwLjU3NjE2MzM3NDYyMzM2OFxuICAgICAgICBdLFxuICAgICAgICBcInRpZURyaXBcIjogMC4yNSxcbiAgICAgICAgXCJwb3VyXCI6IDQsXG4gICAgICAgIFwicG91ckF0XCI6IDAuMixcbiAgICAgICAgXCJwb3VyVG9uZVwiOiBbXG4gICAgICAgICAgMC42NTE0MjkxOTI0NzkwNzg0LFxuICAgICAgICAgIDAuNjQ5OTA3MjE1MzY5NTAxLFxuICAgICAgICAgIDAuNjQyMDkzNTE2MzQ4NjIxOFxuICAgICAgICBdLFxuICAgICAgICBcInBvdXJBbHBoYVwiOiAwLjQ1LFxuICAgICAgICBcInNvb3RcIjogW1xuICAgICAgICAgIDAuNjQyMjU2Mjc2NDkxNjg1NixcbiAgICAgICAgICAwLjYzNjA4Nzc2MzM0NDYxMjksXG4gICAgICAgICAgMC42MzI2NzQ5MjQ2NzM1ODU3XG4gICAgICAgIF0sXG4gICAgICAgIFwic29vdENvdlwiOiAwLjMsXG4gICAgICAgIFwic29vdEFscGhhXCI6IDAuMzUsXG4gICAgICAgIFwic29vdEJsb3RzXCI6IDMwLFxuICAgICAgICBcInNwYWxsc1wiOiA2LFxuICAgICAgICBcInNwYWxsXCI6IFtcbiAgICAgICAgICAwLjk2MzMwODMzNjA1MDQyOTIsXG4gICAgICAgICAgMC45NTM5MzUxNTk5MTcwMzk1LFxuICAgICAgICAgIDAuOTQzNDg4NDQ5OTQ5NzgyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiY29uY3JldGVDYXBcIixcbiAgICAgICAgXCJraW5kXCI6IFwiY29uY3JldGVcIixcbiAgICAgICAgXCJzaXplXCI6IDUxMixcbiAgICAgICAgXCJzZWVkXCI6IDEyMixcbiAgICAgICAgXCJiYXNlXCI6IFtcbiAgICAgICAgICAwLjcyNDgxMjUyMDM3ODIxOTcsXG4gICAgICAgICAgMC43MjM2MTA5NTk1MDIyMzc3LFxuICAgICAgICAgIDAuNzIyMTUxNTQ1NTg2NDNcbiAgICAgICAgXSxcbiAgICAgICAgXCJjbG91ZFwiOiBbXG4gICAgICAgICAgMC44NzE1NzkxNzYxNzY1MDI2LFxuICAgICAgICAgIDAuODcxMDE4NDQ3NzY3NzEwOCxcbiAgICAgICAgICAwLjg2MzQzMDQyMDcxMTk3NDJcbiAgICAgICAgXSxcbiAgICAgICAgXCJjbG91ZHNcIjogNTQsXG4gICAgICAgIFwiY2xvdWRSXCI6IDAuMDczMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgIFwiY2xvdWRBbHBoYVwiOiAwLjIsXG4gICAgICAgIFwic3RyZWFrc1wiOiAyMCxcbiAgICAgICAgXCJzdHJlYWtcIjogW1xuICAgICAgICAgIDAuNTkxODA1MjM4NTYxMDI2LFxuICAgICAgICAgIDAuNTkwMDIyOTIzMjYxNjUyNixcbiAgICAgICAgICAwLjU4MDg3MjY3MDQ2MDg4NlxuICAgICAgICBdLFxuICAgICAgICBcInN0cmVha0xlblwiOiAwLjYsXG4gICAgICAgIFwic3RyZWFrQWxwaGFcIjogMC4yLFxuICAgICAgICBcIndhc2hcIjogW1xuICAgICAgICAgIDAuNjY1MTg4NTY2NDYwMTY3MyxcbiAgICAgICAgICAwLjY2MzcyNjY2NzM5NDM4OTEsXG4gICAgICAgICAgMC42NTE1MTIxMDgwMjM2NThcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb3ZlcmFnZVwiOiAwLFxuICAgICAgICBcIndhc2hBbHBoYVwiOiAwLFxuICAgICAgICBcInBpdHNcIjogMzAwLFxuICAgICAgICBcInBpdFwiOiBbXG4gICAgICAgICAgMC42NDIyNTYyNzY0OTE2ODU2LFxuICAgICAgICAgIDAuNjQwNjk0MjQ3MzUyOTA5MSxcbiAgICAgICAgICAwLjYzMjY3NDkyNDY3MzU4NTdcbiAgICAgICAgXSxcbiAgICAgICAgXCJwaXRSXCI6IDAuOCxcbiAgICAgICAgXCJncmFpblwiOiAzNjAwLFxuICAgICAgICBcImdyYWluQWxwaGFcIjogMC4wOSxcbiAgICAgICAgXCJidW1wXCI6IDAuMDAxNSxcbiAgICAgICAgXCJzZWFtc1wiOiAxMixcbiAgICAgICAgXCJzZWFtQXRcIjogMC4wMixcbiAgICAgICAgXCJzZWFtXCI6IFtcbiAgICAgICAgICAwLjY2NTE4ODU2NjQ2MDE2NzMsXG4gICAgICAgICAgMC42NjM3MjY2NjczOTQzODkxLFxuICAgICAgICAgIDAuNjYwOTMwNjk5Njk4Njk0MlxuICAgICAgICBdLFxuICAgICAgICBcInNlYW1BbHBoYVwiOiAwLjIyLFxuICAgICAgICBcInNlYW1XXCI6IDAuMDAzLFxuICAgICAgICBcInRpZXNcIjogW1xuICAgICAgICAgIDMsXG4gICAgICAgICAgM1xuICAgICAgICBdLFxuICAgICAgICBcInRpZVJcIjogMC4wMDQsXG4gICAgICAgIFwidGllXCI6IFtcbiAgICAgICAgICAwLjU4NzIxODc4MDU2NzMyOTcsXG4gICAgICAgICAgMC41ODU0MTY0MzkyNTMzNTY1LFxuICAgICAgICAgIDAuNTc2MTYzMzc0NjIzMzY4XG4gICAgICAgIF0sXG4gICAgICAgIFwidGllRHJpcFwiOiAwLjNcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgXCJjb21wb25lbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCJib2R5XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiRm9vdGluZyBhbmQgY29sdW1uc1wiLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJjb25jcmV0ZVwiLFxuICAgICAgICAgIFwidXZcIjogXCJ3b3JsZFwiLFxuICAgICAgICAgIFwidXZTY2FsZVwiOiAxMixcbiAgICAgICAgICBcImZhY2VUaW50XCI6IHtcbiAgICAgICAgICAgIFwiZG93blwiOiAxLjZcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxNjc3NzIxNSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxMi41LFxuICAgICAgICAgICAgICAwLjYsXG4gICAgICAgICAgICAgIDNcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXh0cnVkZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC01LjA4LFxuICAgICAgICAgICAgICAgICAgLTFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0zLjcyMDAwMDAwMDAwMDAwMDYsXG4gICAgICAgICAgICAgICAgICAtMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTMuNjAwMDAwMDAwMDAwMDAwNSxcbiAgICAgICAgICAgICAgICAgIC0wLjg4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMy42MDAwMDAwMDAwMDAwMDA1LFxuICAgICAgICAgICAgICAgICAgMC44OFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTMuNzIwMDAwMDAwMDAwMDAwNixcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC01LjA4LFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTUuMixcbiAgICAgICAgICAgICAgICAgIDAuODhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC01LjIsXG4gICAgICAgICAgICAgICAgICAtMC44OFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJ6MFwiOiAwLjUsXG4gICAgICAgICAgICAgIFwiejFcIjogMTAuNDUsXG4gICAgICAgICAgICAgIFwicnhcIjogLTEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTY3NzcyMTVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicG9seVwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMy43MjAwMDAwMDAwMDAwMDA2LFxuICAgICAgICAgICAgICAgICAgLTFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDUuMDgsXG4gICAgICAgICAgICAgICAgICAtMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgNS4yLFxuICAgICAgICAgICAgICAgICAgLTAuODhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDUuMixcbiAgICAgICAgICAgICAgICAgIDAuODhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDUuMDgsXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAzLjcyMDAwMDAwMDAwMDAwMDYsXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAzLjYwMDAwMDAwMDAwMDAwMDUsXG4gICAgICAgICAgICAgICAgICAwLjg4XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAzLjYwMDAwMDAwMDAwMDAwMDUsXG4gICAgICAgICAgICAgICAgICAtMC44OFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJ6MFwiOiAwLjUsXG4gICAgICAgICAgICAgIFwiejFcIjogMTAuNDUsXG4gICAgICAgICAgICAgIFwicnhcIjogLTEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTY3NzcyMTVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwiYmVhbVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkNyb3NzLWJlYW1cIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiY29uY3JldGVDYXBcIixcbiAgICAgICAgICBcInV2XCI6IFwid29ybGRcIixcbiAgICAgICAgICBcInV2U2NhbGVcIjogMyxcbiAgICAgICAgICBcImZhY2VUaW50XCI6IHtcbiAgICAgICAgICAgIFwiZG93blwiOiAxLjZcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXh0cnVkZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC02LjEzLFxuICAgICAgICAgICAgICAgICAgMTAuMzVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDYuMTMsXG4gICAgICAgICAgICAgICAgICAxMC4zNVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgNi4yNSxcbiAgICAgICAgICAgICAgICAgIDEwLjQ2OTk5OTk5OTk5OTk5OVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgNi4yNSxcbiAgICAgICAgICAgICAgICAgIDExLjczXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICA2LjEzLFxuICAgICAgICAgICAgICAgICAgMTEuODVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC02LjEzLFxuICAgICAgICAgICAgICAgICAgMTEuODVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC02LjI1LFxuICAgICAgICAgICAgICAgICAgMTEuNzNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC02LjI1LFxuICAgICAgICAgICAgICAgICAgMTAuNDY5OTk5OTk5OTk5OTk5XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInowXCI6IC0xLFxuICAgICAgICAgICAgICBcInoxXCI6IDEsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE2Nzc3MjE1XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTY3NzcyMTUsXG4gICAgICAgICAgICAgIC00LjQsXG4gICAgICAgICAgICAgIDExLjksXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDEuMSxcbiAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAwLjlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgICAgICA0LjQsXG4gICAgICAgICAgICAgIDExLjksXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDEuMSxcbiAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAwLjlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwicGFkc1wiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkJlYXJpbmcgcGFkc1wiLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJzdGVlbFwiLFxuICAgICAgICAgIFwidXZcIjogXCJ3b3JsZFwiLFxuICAgICAgICAgIFwidXZTY2FsZVwiOiAxLFxuICAgICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMDM5NTI5NyxcbiAgICAgICAgICAgICAgLTQuNCxcbiAgICAgICAgICAgICAgMTEuOTc1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjcsXG4gICAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAgIDAuNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTAzOTUyOTcsXG4gICAgICAgICAgICAgIDQuNCxcbiAgICAgICAgICAgICAgMTEuOTc1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjcsXG4gICAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAgIDAuNVxuICAgICAgICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIC8vIENPTE9SIGhhcyB0byBiZSBjYXJyaWVkIHRvbywgYW5kIGl0IGlzIGVhc3kgdG8gZm9yZ2V0OiB0aGlzIGZ1bmN0aW9uIGNvcGllZCBwb3NpdGlvbiwgbm9ybWFsXG4gIC8vIGFuZCB1diBvbmx5LCBhbmQgdGhlIG1vc3F1ZSdzIHJpYmJlZCBkb21lcyBsb3N0IHRoZWlyIGdyZWVuLWFuZC1wYWxlIHN0cmlwaW5nIHRoZSBtb21lbnQgdGhleVxuICAvLyB3ZXJlIG1lcmdlZCB3aXRoIGFueXRoaW5nLiBUaGUgZmFpbHVyZSBpcyBzaWxlbnQgLS0gdGhlIGRvbWUgcmVuZGVycywgaW4gb25lIGZsYXQgY29sb3VyIC0tIGFuZFxuICAvLyB0b29rIGEgd3JvbmcgdGhlb3J5IGFib3V0IHNSR0IgZ2FtbWEgYmVmb3JlIHRoZSBhdHRyaWJ1dGUgbGlzdCB3YXMgcmVhZC4gQW55IGlucHV0IGNhcnJ5aW5nIGFcbiAgLy8gY29sb3VyIG1lYW5zIGV2ZXJ5IGlucHV0IGdldHMgb25lLCB3aGl0ZSB3aGVyZSBpdCBoYWQgbm9uZS5cbiAgY29uc3QgYW55Q29sb3IgPSBwYXJ0cy5zb21lKChnKSA9PiAhIWcuZ2V0QXR0cmlidXRlKCdjb2xvcicpKTtcbiAgY29uc3QgY29sb3IgPSBhbnlDb2xvciA/IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKS5maWxsKDEpIDogbnVsbDtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBjb25zdCBjID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgICBpZiAoY29sb3IgJiYgYykgeyBjb2xvclsodiArIGkpICogM10gPSBjLmdldFgoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMV0gPSBjLmdldFkoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMl0gPSBjLmdldFooaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgaWYgKGNvbG9yKSBvdXQuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sb3IsIDMpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gYm94ZXMobGlzdDogbnVtYmVyW11bXSkgeyByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSkpOyB9XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByVG9wOiBudW1iZXIsIHJCb3Q6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoclRvcCwgckJvdCwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuXG4vKipcbiAqIFJldm9sdmUgYSBwcm9maWxlIGFib3V0ICtZLiBgcHRzYCBhcmUgW3JhZGl1cywgeV0gaW4gbWV0cmVzLCBib3R0b20gdG8gdG9wLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNoYXBlIHZvY2FidWxhcnkgdGhlIHdob2xlIG1vbnVtZW50YWwgc2V0IGlzIGJ1aWx0IGZyb20gLS0gYSBjaGVkaSdzIGJlbGwsIGEgcHJhbmcnc1xuICogY29ybi1jb2IgdGFwZXIsIGEgZG9tZSwgYSByaW5nZWQgc3BpcmUgYXJlIGFsbCBvbmUgcHJvZmlsZSBlYWNoLiBUd28gdGhpbmdzIGFyZSB3b3J0aCBzdGF0aW5nXG4gKiBiZWNhdXNlIGJvdGggY29zdCBhIHJlYnVpbGQgdG8gbGVhcm46XG4gKlxuICogLSBMYXRoZUdlb21ldHJ5IGlzIE9QRU4gYXQgdG9wIGFuZCBib3R0b20uIEEgcHJvZmlsZSB0aGF0IGRvZXMgbm90IGNsb3NlIG9uIHRoZSBheGlzIChyYWRpdXMgMClcbiAqICAgbGVhdmVzIGEgaG9sZSB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZHMgYXMgYmFja2dyb3VuZCBlbmNsb3NlZCBieSB0aGUgc2lsaG91ZXR0ZS4gQ2xvc2UgaXQsIG9yXG4gKiAgIGNhcCBpdCB3aXRoIHdoYXQgc2l0cyBhYm92ZS5cbiAqIC0gUkFESUFMIFNFR01FTlQgQ09VTlQgaXMgdGhlIHRyaWFuZ2xlIGJ1ZGdldCdzIG1haW4gbGV2ZXIgaGVyZSBhbmQgaXQgaXMgcGVyLWxhdGhlOiBhIHByb2ZpbGUgb2ZcbiAqICAgbiBwb2ludHMgYXQgcyBzZWdtZW50cyBpcyAyKihuLTEpKnMgdHJpYW5nbGVzLiBBIDI0LXJpbmcgc3BpcmUgYXQgMzIgc2VnbWVudHMgaXMgMSw0NzJcbiAqICAgdHJpYW5nbGVzIG9uIGl0cyBvd24sIHdoaWNoIGlzIHdoeSB0aGUgbG93LXJlbGllZiByaW5ncyBhcmUgYSBwcm9maWxlIHJhdGhlciB0aGFuIDI0IHJpbmdzLlxuICovXG4vKiogTGF0aGVHZW9tZXRyeSBzaGFyZXMgdGhlIGNvcm5lciB2ZXJ0ZXggYmV0d2VlbiBhbiBlbmQgZGlzYyBhbmQgdGhlIHNpZGUgd2FsbCwgc29cbiAqICBjb21wdXRlVmVydGV4Tm9ybWFscyB0aWx0cyB0aGUgd2FsbCdzIGZpcnN0IHJpbmcgNDUgZGVncmVlcyB0b3dhcmQgdGhlIGRpc2MgYW5kIHRoZSBoYXJuZXNzIHNoYWRlc1xuICogIGEgZGFyayBncmFkaWVudCB0aGVyZSAtLSBhIHJpbmcgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgYXMgYSBIT0xFIHVuZGVyIHRoZSBzdGFpbmxlc3MgYmluJ3MgY2FwLlxuICogIEluc2VydGluZyBhIHBvaW50IDAuOCBtbSBwYXN0IGV2ZXJ5IHNoYXJwIGNvcm5lciAoPiA3MCBkZWdyZWVzKSBjb25maW5lcyB0aGUgYXZlcmFnZWQgbm9ybWFsIHRvIHRoYXRcbiAqICBzbGl2ZXIuIENvc3RzIG9uZSByaW5nIHBlciBjb3JuZXI7IHBhc3MgYHNoYXJwID0gZmFsc2VgIHdoZXJlIHRoZSBidWRnZXQgY2Fubm90IGNhcnJ5IGl0LiAqL1xuZnVuY3Rpb24gc3BsaXRDb3JuZXJzKHB0czogbnVtYmVyW11bXSwgbWluRGVnID0gNzAsIGVwcyA9IDAuMDAwOCk6IG51bWJlcltdW10ge1xuICBjb25zdCBvdXQ6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwID0gcHRzW2ldLCBhID0gcHRzW2kgLSAxXSwgYiA9IHB0c1tpICsgMV07XG4gICAgbGV0IHNoYXJwID0gZmFsc2U7XG4gICAgaWYgKGEgJiYgYikge1xuICAgICAgY29uc3QgdXggPSBwWzBdIC0gYVswXSwgdXkgPSBwWzFdIC0gYVsxXSwgdnggPSBiWzBdIC0gcFswXSwgdnkgPSBiWzFdIC0gcFsxXTtcbiAgICAgIGNvbnN0IGx1ID0gTWF0aC5oeXBvdCh1eCwgdXkpLCBsdiA9IE1hdGguaHlwb3QodngsIHZ5KTtcbiAgICAgIGlmIChsdSA+IDAgJiYgbHYgPiAwKSBzaGFycCA9IE1hdGguYWNvcyhNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgKHV4ICogdnggKyB1eSAqIHZ5KSAvIChsdSAqIGx2KSkpKSA+IG1pbkRlZyAqIE1hdGguUEkgLyAxODA7XG4gICAgICBpZiAoc2hhcnAgJiYgbHUgPiAzICogZXBzKSBvdXQucHVzaChbcFswXSAtIHV4IC8gbHUgKiBlcHMsIHBbMV0gLSB1eSAvIGx1ICogZXBzXSk7XG4gICAgICBvdXQucHVzaChwKTtcbiAgICAgIGlmIChzaGFycCAmJiBsdiA+IDMgKiBlcHMpIG91dC5wdXNoKFtwWzBdICsgdnggLyBsdiAqIGVwcywgcFsxXSArIHZ5IC8gbHYgKiBlcHNdKTtcbiAgICB9IGVsc2Ugb3V0LnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqIGB3ZWxkU2VhbWAgYXZlcmFnZXMgdGhlIG5vcm1hbHMgb2YgdGhlIGZpcnN0IGFuZCBsYXN0IHJhZGlhbCBjb2x1bW4sIHdoaWNoIGlzIHdoYXQgY2xvc2VzIHRoZVxuICogIHJldm9sdmUncyBTSEFESU5HIHNlYW0uIExhdGhlR2VvbWV0cnkgYWxyZWFkeSBkb2VzIHRoaXMgaXRzZWxmIC0tIGl0IGV4cGxpY2l0bHkgYXZlcmFnZXMgdGhlIHR3b1xuICogIGVuZCBjb2x1bW5zIGZvciBhIGZ1bGwgMipQSSBzd2VlcCAtLSBhbmQgdGhlIGBjb21wdXRlVmVydGV4Tm9ybWFscygpYCBiZWxvdyB0aHJvd3MgdGhhdCB3b3JrXG4gKiAgYXdheSwgYmVjYXVzZSBhIHJlY29tcHV0ZSBzZWVzIHRoZSBzZWFtIGFzIHR3byB1bmNvbm5lY3RlZCBlZGdlcyBhbmQgZ2l2ZXMgZWFjaCB0aGUgbm9ybWFsIG9mXG4gKiAgdGhlIGZhY2VzIG9uIGl0cyBvd24gc2lkZSBvbmx5LiBPbiBhIG1hdHRlIHByb3AgdGhlIHJlc3VsdGluZyBjcmVhc2UgaXMgaW52aXNpYmxlLCB3aGljaCBpcyB3aHlcbiAqICBpdCBzdXJ2aXZlZDsgb24gYSBzYXRpbiBtZXRhbCBpdCBpcyBhIGhhcmQgdmVydGljYWwgbGluZSBkb3duIHRoZSByZXZvbHZlLiBNZWFzdXJlZCBvbiB0aGVcbiAqICBub29kbGUtc2hvcCB0YWJsZSdzIHJpbSBhdCBhemltdXRoIDA6IGEgMzEtbGV2ZWwgbHVtYSBzdGVwIGF0IHg9NTEyICgyNDUgLT4gMjE0IGF0IHk9MjU4KSxcbiAqICBSRVZFUlNJTkcgdG8gKzI3IGF0IHk9MjY2IC0tIGEgZGlzY29udGludWl0eSwgbm90IGEgZ3JhZGllbnQuXG4gKiAgRGVmYXVsdCBPRkYgc28gbm8gYWxyZWFkeS1lbWl0dGVkIHByb3AgY2hhbmdlcyBzaGFkaW5nIGlmIGl0IGlzIGV2ZXIgcmUtZW1pdHRlZDsgdGhlIHJlY29tcHV0ZVxuICogIGlzIHN0aWxsIG5lZWRlZCBmb3IgdGhlIHNoYXJwLWNvcm5lciBzcGxpdHMsIHNvIHRoaXMgd2VsZHMgYWZ0ZXJ3YXJkcyByYXRoZXIgdGhhbiBza2lwcGluZyBpdC4gKi9cbmZ1bmN0aW9uIGxhdGhlKHB0czogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIsIHlPZmZzZXQgPSAwLCBzaGFycCA9IHRydWUsIHdlbGRTZWFtID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSAoc2hhcnAgPyBzcGxpdENvcm5lcnMocHRzKSA6IHB0cykubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgaWYgKHdlbGRTZWFtKSB7XG4gICAgLy8gTGF0aGVHZW9tZXRyeSBsYXlzIG91dCAoc2VnICsgMSkgY29sdW1ucyBvZiBgcm93c2AgdmVydGljZXM7IGNvbHVtbiAwIGFuZCBjb2x1bW4gc2VnIGFyZSB0aGVcbiAgICAvLyBzYW1lIHBsYWNlIGluIHNwYWNlLiBBdmVyYWdlIHRoZSBwYWlyIGFuZCB3cml0ZSBpdCBiYWNrIHRvIGJvdGguXG4gICAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgICBjb25zdCByb3dzID0gbi5jb3VudCAvIChzZWcgKyAxKTtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IHJvd3M7IHIrKykge1xuICAgICAgY29uc3QgYSA9IHIsIGIgPSBzZWcgKiByb3dzICsgcjtcbiAgICAgIGNvbnN0IHggPSBuLmdldFgoYSkgKyBuLmdldFgoYiksIHkgPSBuLmdldFkoYSkgKyBuLmdldFkoYiksIHogPSBuLmdldFooYSkgKyBuLmdldFooYik7XG4gICAgICBjb25zdCBsID0gTWF0aC5oeXBvdCh4LCB5LCB6KSB8fCAxO1xuICAgICAgbi5zZXRYWVooYSwgeCAvIGwsIHkgLyBsLCB6IC8gbCk7XG4gICAgICBuLnNldFhZWihiLCB4IC8gbCwgeSAvIGwsIHogLyBsKTtcbiAgICB9XG4gICAgbi5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBSRUNUQU5HVUxBUiBwbGFuIHdpdGggYSBub3RjaCBjdXQgaW50byBpdHMgK1ogZmFjZS4gVGhlIHNxdWFyZSB2ZXJzaW9uIGFib3ZlIGlzIHdoYXQgYSBjaGVkaSBvclxuICogYSBwcmFuZyB0ZXJyYWNlIG5lZWRzOyBhIGhhbGwgdGhhdCBpcyB0d2ljZSBhcyBsb25nIGFzIGl0IGlzIHdpZGUgbmVlZHMgdGhlIHR3byBoYWxmLWV4dGVudHMga2VwdFxuICogYXBhcnQsIGFuZCBpdHMgc3RhaXIgaXMgb24gYSBzaG9ydCBlbmQgcmF0aGVyIHRoYW4gYSBsb25nIG9uZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFJlY3QoaHg6IG51bWJlciwgaHo6IG51bWJlciwgbng6IG51bWJlciwgeklubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSwgWy1oeCwgLWh6XV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIFRoZSBjcm9zcy1zZWN0aW9uIG9mIG9uZSByb29mIHRpZXIsIGFzIGEgY2xvc2VkIHRyYXBlem9pZCBpbiBYWTogZWF2ZXMgYXQgKCstaGFsZkJhc2UsIHkwKVxuICogcmlzaW5nIGF0IGBwaXRjaGAgKGFzIGEgdGFuZ2VudCkgdG8gYSBmbGF0IHRvcCBhdCB5MS5cbiAqXG4gKiBUaGFpIHRlbXBsZSByb29mcyBuZXN0LCBhbmQgdGhhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgVFJVTkNBVElPTi4gVGhyZWUgZnVsbCBnYWJsZXMgYXQgb25lXG4gKiBwaXRjaCBjYW5ub3QgbmVzdCAtLSB0aGUgd2lkZXN0IHRpZXIncyByaWRnZSB3b3VsZCBiZSB0aGUgaGlnaGVzdCwgd2hpY2ggaXMgdXBzaWRlIGRvd24uIFdoYXRcbiAqIGFjdHVhbGx5IGhhcHBlbnMgaXMgdGhhdCBlYWNoIGxvd2VyIHRpZXIgaXMgY3V0IG9mZiBhdCB0aGUgaGVpZ2h0IHdoZXJlIHRoZSBuZXh0IHRpZXIncyBlYXZlc1xuICogYmVnaW4sIGFuZCBpdHMgdXBwZXIgcGFydCBpcyBoaWRkZW4gYmVoaW5kIHRoYXQgdGllcjsgb25seSB0aGUgdG9wbW9zdCB0aWVyIGlzIGEgcmVhbCBnYWJsZSxcbiAqIGNsb3NlZCBieSBwYXNzaW5nIHkxIGF0IHRoZSBhcGV4LlxuICovXG5mdW5jdGlvbiB0aWVyUHJvZmlsZShoYWxmQmFzZTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIHBpdGNoO1xuICBjb25zdCBoYWxmVG9wID0gaGFsZkJhc2UgLSBpbnNldDtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC1oYWxmQmFzZSwgeTApO1xuICBzaGFwZS5saW5lVG8oaGFsZkJhc2UsIHkwKTtcbiAgaWYgKGhhbGZUb3AgPiAwLjAyKSB7XG4gICAgc2hhcGUubGluZVRvKGhhbGZUb3AsIHkxKTtcbiAgICBzaGFwZS5saW5lVG8oLWhhbGZUb3AsIHkxKTtcbiAgfSBlbHNlIHtcbiAgICBzaGFwZS5saW5lVG8oMCwgeTAgKyBoYWxmQmFzZSAqIHBpdGNoKTsgICAvLyBhIHJlYWwgcmlkZ2U6IHRoZSB0b3Btb3N0IHRpZXIgY2xvc2VzIHRvIGEgcG9pbnRcbiAgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYWxvbmcgK1ogYmV0d2VlbiB0d28gZGVwdGhzLCB3aXRoIG5vIHJvdGF0aW9uIC0tIHRoZSBuYXRpdmUgZGlyZWN0aW9uIG9mXG4gKiAgRXh0cnVkZUdlb21ldHJ5LiBVc2VkIHdoZXJlIHRoZSBwcm9maWxlIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUsIHN1Y2ggYXMgdGhlIHJha2luZ1xuICogIHRyaWFuZ2xlIG9mIGEgc3RhaXIgY2hlZWsuICovXG5mdW5jdGlvbiBleHRydWRlQWxvbmdaKHNoYXBlOiBUSFJFRS5TaGFwZSwgejA6IG51bWJlciwgejE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIGcudHJhbnNsYXRlKDAsIDAsIHowKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgcmVjdGFuZ3VsYXIgcGxhdGUgd2hvc2UgaGVhZCBpcyBhIGhhbGYtcm91bmQgYXJjaCwgb3B0aW9uYWxseSBjYXJyeWluZyBhbiBhcmNoZWQgYXBlcnR1cmUgb2ZcbiAqICB0aGUgc2FtZSBmb3JtLiBUaGUgYXBlcnR1cmUgYXJjIGlzIEFMV0FZUyBzd2VwdCBmcm9tIGFuZ2xlIDAgdG8gUEk6IHdyaXR0ZW4gdGhlIG90aGVyIHdheSBpdFxuICogIHJ1bnMgdW5kZXIgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgaXQgYW5kIGxlYXZlcyB0aGUgYXJjaCBoZWFkIGZpbGxlZCBzb2xpZCwgd2hpY2ggcmVhZHMgYXNcbiAqICBhIHNxdWFyZSB3aW5kb3cgd2l0aCBhIGdob3N0IGFyY2ggZHJhd24gYWNyb3NzIGl0LiAqL1xuZnVuY3Rpb24gYXJjaGVkUGxhdGUodzogbnVtYmVyLCBoOiBudW1iZXIsIGFyY2hSOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgcjogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtdyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmFic2FyYygwLCBzcHJpbmcsIGFyY2hSLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIHNoYXBlLmxpbmVUbygtdyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKGhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmxpbmVUbyhob2xlLnIsIGhvbGUuc3ByaW5nKTtcbiAgICBwLmFic2FyYygwLCBob2xlLnNwcmluZywgaG9sZS5yLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gICAgcC5saW5lVG8oLWhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmNsb3NlUGF0aCgpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgSElQIFJPT0Ygd2l0aCBhIGNvbmNhdmUgc2xvcGUgYW5kIHVwc3dlcHQgY29ybmVycyAtLSB0aGUgRWFzdCBBc2lhbiByb29mLCB3aGljaCBub25lIG9mIHRoZVxuICogb3RoZXIgc2hhcGUgaGVscGVycyBoZXJlIGNhbiBleHByZXNzLlxuICpcbiAqIEl0IGlzIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UgcmF0aGVyIHRoYW4gYXMgYW5cbiAqIGV4dHJ1ZGVkIHByb2ZpbGUsIGJlY2F1c2UgYSBoaXAgc2xvcGVzIG9uIGFsbCBmb3VyIHNpZGVzOiBhbiBleHRydXNpb24gZ2l2ZXMgdmVydGljYWwgZ2FibGUgZW5kcyxcbiAqIHdoaWNoIGlzIGEgZGlmZmVyZW50IGJ1aWxkaW5nLlxuICpcbiAqIFRoZSBob3Jpem9udGFsIHNocmluayBmb2xsb3dzIGAoMSAtIHQpXmN1cnZlRXhwYCwgYW5kIHRoZSBleHBvbmVudCBtdXN0IGJlIEFCT1ZFIG9uZS4gVGhlIHNsb3BlXG4gKiBhdCBhbnkgaGVpZ2h0IGlzIGR5L2R4LCBzbyBhIHBsYW4gdGhhdCBzaHJpbmtzIEZBU1QgZm9yIGEgZ2l2ZW4gcmlzZSBpcyBhIHNoYWxsb3cgc2xvcGU6IHdpdGhcbiAqIHEgPiAxIHRoZSBkZXJpdmF0aXZlIHEoMS10KV4ocS0xKSBpcyBsYXJnZSBhdCB0aGUgZWF2ZXMgYW5kIHNtYWxsIGF0IHRoZSByaWRnZSwgd2hpY2ggaXMgc2hhbGxvd1xuICogZWF2ZXMgYW5kIGEgc3RlZXAgcmlkZ2UgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZi4gQmVsb3cgb25lIGl0IGlzIHRoZSBvdGhlciB3YXkgcm91bmQgYW5kIGJ1aWxkcyBhXG4gKiBmbGF0LXRvcHBlZCB0ZW50LCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBhdHRlbXB0IGhlcmUgcmVuZGVyZWQuIEEgbGluZWFyIHNocmluayBnaXZlcyB0aGVcbiAqIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC5cbiAqXG4gKiBgY29ybmVyTGlmdGAgcmFpc2VzIGFuZCBwdXNoZXMgb3V0IHRoZSBmb3VyIGVhdmVzIGNvcm5lcnMsIHRhcGVyaW5nIGF3YXkgYnkgYSB0aGlyZCBvZiB0aGUgd2F5XG4gKiB1cC4gVGhhdCB1cHN3ZWVwIGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyB0aGluZyBhYm91dCB0aGUgcm9vZiwgYW5kIGl0IGlzIHdoeSB0aGUgcGxhblxuICogaGFsZi13aWR0aCBwYXNzZWQgaW4gbXVzdCBsZWF2ZSByb29tOiB0aGUgY29ybmVycyBlbmQgdXAgZnVydGhlciBvdXQgdGhhbiB0aGUgZWF2ZXMgbGluZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIGEgY2xvc2VkIHNvbGlkIC0tIG91dGVyIHN1cmZhY2UsIGEgc29mZml0IGBkcm9wYCBiZWxvdyB0aGUgZWF2ZXMsIGFuZCBhIGZhc2NpYSBiYW5kXG4gKiBiZXR3ZWVuIHRoZW0uIEFuIG9wZW4gc2hlbGwgd291bGQgbGV0IHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnlcbiAqIGxvdyBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gaGlwUm9vZihoeDogbnVtYmVyLCBoejogbnVtYmVyLCByaWRnZUhhbGZaOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgIGN1cnZlRXhwOiBudW1iZXIsIHN0ZXBzOiBudW1iZXIsIGRyb3A6IG51bWJlciwgY29ybmVyTGlmdDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBFSUdIVCBwb2ludHMgcGVyIHJpbmcsIG5vdCBmb3VyOiB0aGUgZm91ciBjb3JuZXJzIGFuZCB0aGUgZm91ciBlZGdlIG1pZHBvaW50cy4gV2l0aCBmb3VyIHRoZVxuICAvLyBjb3JuZXIgbGlmdCBoYXMgbm93aGVyZSB0byBmYWxsIGF3YXkgdG8gYW5kIHJhaXNlcyB0aGUgRU5USVJFIGVhdmVzIGxpbmUsIHdoaWNoIGJ1aWx0IGEgc2FkZGxlXG4gIC8vIGluc3RlYWQgb2YgYSByb29mLiBUaGUgbWlkcG9pbnRzIGFyZSB3aGF0IGhvbGQgdGhlIGVhdmVzIGRvd24gYmV0d2VlbiB0aGUgY29ybmVycy5cbiAgLy9cbiAgLy8gVGhlIG9yZGVyIGlzICgreCwteiksIG1pZCwgKC14LC16KSwgbWlkLCAoLXgsK3opLCBtaWQsICgreCwreiksIG1pZCwgd2hpY2ggaXMgY291bnRlci1jbG9ja3dpc2VcbiAgLy8gc2VlbiBmcm9tIEFCT1ZFIC0tIHRoZSB3aW5kaW5nIGFuIHVwd2FyZC1mYWNpbmcgc3VyZmFjZSBuZWVkcy4gV291bmQgdGhlIG90aGVyIHdheSB0aGUgd2hvbGVcbiAgLy8gcm9vZiByZW5kZXJzIGluc2lkZSBvdXQsIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGJsYWNrIG1lbWJyYW5lIHJhdGhlciB0aGFuIGEgbWlzdGFrZS5cbiAgY29uc3QgcmluZyA9ICh0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMSAtIHQsIGN1cnZlRXhwKTtcbiAgICBjb25zdCBnID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyAwLjM0KSwgMik7XG4gICAgY29uc3QgbGlmdCA9IGNvcm5lckxpZnQgKiBnLCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgIGNvbnN0IGF4ID0gaHggKiBmICogb3V0LCBheiA9IChyaWRnZUhhbGZaICsgKGh6IC0gcmlkZ2VIYWxmWikgKiBmKSAqIG91dDtcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5ICsgbGlmdCwgel07XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHksIHpdO1xuICAgIHJldHVybiBbYyhheCwgLWF6KSwgbSgwLCAtYXopLCBjKC1heCwgLWF6KSwgbSgtYXgsIDApLFxuICAgICAgICAgICAgYygtYXgsIGF6KSwgbSgwLCBheiksIGMoYXgsIGF6KSwgbShheCwgMCldO1xuICB9O1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGxldCBwcmV2ID0gcmluZygwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IHJpbmcoaSAvIHN0ZXBzKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICAgIHB1c2gocHJldltrXSwgcHJldltrMl0sIGN1cltrMl0pO1xuICAgICAgcHVzaChwcmV2W2tdLCBjdXJbazJdLCBjdXJba10pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIC8vIEZhc2NpYSBiYW5kIGFuZCBzb2ZmaXQsIHNvIHRoZSByb29mIGlzIGEgc29saWQgcmF0aGVyIHRoYW4gYSBzaGVsbC4gQW4gb3BlbiBzaGVsbCBsZXRzIHRoZVxuICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnkgbG93IGFuZ2xlLlxuICBjb25zdCBlID0gcmluZygwKTtcbiAgY29uc3QgbG93ID0gZS5tYXAoKHApID0+IFtwWzBdLCBwWzFdIC0gZHJvcCwgcFsyXV0pO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgcHVzaChsb3dba10sIGVba10sIGVbazJdKTtcbiAgICBwdXNoKGxvd1trXSwgZVtrMl0sIGxvd1trMl0pO1xuICB9XG4gIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSBwdXNoKGxvd1swXSwgbG93W2sgKyAxXSwgbG93W2tdKTsgICAvLyBzb2ZmaXQgZmFuLCBmYWNpbmcgZG93blxuXG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUklCQkVEIGRvbWUgLS0gYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gd2hvc2UgcmFkaXVzIGlzIG1vZHVsYXRlZCBhcm91bmQgdGhlIGF4aXMsIHNvIGl0IHJlYWRzXG4gKiBhcyB0aGUgbWVsb24tcmliYmVkIGRvbWUgb2YgYSBtb3NxdWUgcmF0aGVyIHRoYW4gYSBzbW9vdGggaGVtaXNwaGVyZS5cbiAqXG4gKiBMYXRoZUdlb21ldHJ5IGNhbm5vdCBkbyB0aGlzOiBhIGxhdGhlIHJldm9sdmVzIG9uZSBwcm9maWxlIGF0IG9uZSByYWRpdXMgcGVyIGhlaWdodCwgYW5kIHJpYnMgYXJlXG4gKiBhIHZhcmlhdGlvbiBBUk9VTkQgdGhlIGF4aXMsIG5vdCBhbG9uZyBpdC4gU28gdGhlIHN1cmZhY2UgaXMgZ2VuZXJhdGVkIGRpcmVjdGx5LCBzYW1wbGluZ1xuICogYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWAgcGVyIHNlY3Rvci4gVGhlIHJpYnMgYXJlIHRoZSByZWFzb24gdGhlIGRvbWUgaXMgcmVjb2duaXNhYmxlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tIC0tIGEgc21vb3RoIGdyZWVuIGhlbWlzcGhlcmUgcmVhZHMgYXMgYSB3YXRlciB0YW5rLlxuICovXG5mdW5jdGlvbiByaWJiZWREb21lKHByb2ZpbGU6IG51bWJlcltdW10sIHJpYnM6IG51bWJlciwgYW1wOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICB2YWxsZXk/OiBudW1iZXJbXSwgc21vb3RoID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgY29sOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUaGUgcmlicyBhcmUgbm90IG9ubHkgYSBzaGFwZS4gT24gdGhlIG1vc3F1ZSdzIGRvbWVzIHRoZSBjcmVzdHMgYXJlIHBhbGUgYW5kIHRoZSB2YWxsZXlzIGFyZVxuICAvLyBncmVlbiwgYW5kIHRoYXQgc3RyaXBlIGlzIG1vc3Qgb2Ygd2hhdCB0aGUgZG9tZSByZWFkcyBhcyBhdCBkaXN0YW5jZS4gSXQgaXMgY2FycmllZCBhcyBhXG4gIC8vIHBlci12ZXJ0ZXggTVVMVElQTElFUiBvZmYgdGhlIHNhbWUgY29zaW5lIHRoYXQgc2hhcGVzIHRoZSByaWIgLS0gdHdvIG1lYXN1cmVtZW50cywgdGhlIGNyZXN0XG4gIC8vIGNvbG91ciBvbiB0aGUgbWF0ZXJpYWwgYW5kIHRoZSB2YWxsZXkgYXMgdGhlIHJhdGlvIGJldHdlZW4gdGhlbSAtLSBzbyB0aGUgc3RyaXBpbmcgY29zdHMgYW5cbiAgLy8gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgdGV4dHVyZSBzZXQgb3IgYSBzZWNvbmQgZHJhdyBjYWxsLlxuICBjb25zdCB0aW50ID0gKGo6IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsbGV5KSByZXR1cm4gWzEsIDEsIDFdO1xuICAgIC8vIFJhaXNlZCB0byAwLjU1IHJhdGhlciB0aGFuIGxlZnQgbGluZWFyLiBBIGNvc2luZSBzcGVuZHMgaGFsZiBpdHMgYXJlYSBuZWFyIGVhY2ggZXh0cmVtZSwgYW5kXG4gICAgLy8gdGhhdCByZW5kZXJzIGEgZG9tZSB0aGF0IGlzIHBhbGUgb3ZlcmFsbCB3aGVyZSB0aGUgcGxhdGUncyBpcyBncmVlbiBvdmVyYWxsOiB0aGUgY3Jlc3QgaXMgYVxuICAgIC8vIG5hcnJvdyBoaWdobGlnaHQgb24gYSByZWFsIHJpYiwgbm90IGhhbGYgb2YgaXQuIFRoZSBleHBvbmVudCB3aWRlbnMgdGhlIHZhbGxleS5cbiAgICBjb25zdCBmID0gTWF0aC5wb3coKDEgLSBNYXRoLmNvcyhyaWJzICogKChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnKSkpIC8gMiwgMC41NSk7XG4gICAgcmV0dXJuIFsxICsgKHZhbGxleVswXSAtIDEpICogZiwgMSArICh2YWxsZXlbMV0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzJdIC0gMSkgKiBmXTtcbiAgfTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aCA9IChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgIGNvbnN0IGYgPSAxICsgYW1wICogTWF0aC5jb3MocmlicyAqIHRoKTtcbiAgICBjb25zdCByID0gcHJvZmlsZVtpXVswXSAqIGY7XG4gICAgcmV0dXJuIFtNYXRoLnNpbih0aCkgKiByLCBwcm9maWxlW2ldWzFdLCBNYXRoLmNvcyh0aCkgKiByXTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhdChpLCBqKSwgYiA9IGF0KGksIGogKyAxKSwgYyA9IGF0KGkgKyAxLCBqICsgMSksIGQgPSBhdChpICsgMSwgaik7XG4gICAgICBwdXNoKGEsIGIsIGMpO1xuICAgICAgcHVzaChhLCBjLCBkKTtcbiAgICAgIGNvbnN0IHRhID0gdGludChqKSwgdGIgPSB0aW50KGogKyAxKTtcbiAgICAgIGNvbC5wdXNoKC4uLnRhLCAuLi50YiwgLi4udGIsIC4uLnRhLCAuLi50YiwgLi4udGEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgaWYgKHZhbGxleSkgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbCksIDMpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICAvLyBgc21vb3RoYCBhdmVyYWdlcyB0aGUgbm9ybWFscyBvZiBldmVyeSB2ZXJ0ZXggc2hhcmluZyBhIHBvc2l0aW9uLCBzbyBhIGxvdy1zZWN0b3IgZmxvd2VyIGhlYWRcbiAgLy8gb3IgcG9tcG9tIHNoYWRlcyBhcyBhIHJvdW5kZWQgc29saWQgcmF0aGVyIHRoYW4gYSBjdXQgZ2VtLiBUaGUgc291cCBpcyBub24taW5kZXhlZCwgc28gdGhlXG4gIC8vIGZhY2V0ZWQgZGVmYXVsdCBpcyB3aGF0IGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIGdpdmVzOyB0aGUgbW9zcXVlJ3MgZG9tZXMga2VlcCBpdC5cbiAgaWYgKHNtb290aCkge1xuICAgIGNvbnN0IHBvcyA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSwgbnJtID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICBjb25zdCBhY2MgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyW10+KCk7XG4gICAgY29uc3Qga2V5ID0gKGk6IG51bWJlcikgPT4gYCR7cG9zLmdldFgoaSkudG9GaXhlZCg1KX0sJHtwb3MuZ2V0WShpKS50b0ZpeGVkKDUpfSwke3Bvcy5nZXRaKGkpLnRvRml4ZWQoNSl9YDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcy5jb3VudDsgaSsrKSB7IGNvbnN0IGsgPSBrZXkoaSksIGEgPSBhY2MuZ2V0KGspID8/IFswLCAwLCAwXTsgYVswXSArPSBucm0uZ2V0WChpKTsgYVsxXSArPSBucm0uZ2V0WShpKTsgYVsyXSArPSBucm0uZ2V0WihpKTsgYWNjLnNldChrLCBhKTsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zLmNvdW50OyBpKyspIHsgY29uc3QgYSA9IGFjYy5nZXQoa2V5KGkpKSEsIGwgPSBNYXRoLmh5cG90KGFbMF0sIGFbMV0sIGFbMl0pIHx8IDE7IG5ybS5zZXRYWVooaSwgYVswXSAvIGwsIGFbMV0gLyBsLCBhWzJdIC8gbCk7IH1cbiAgICBucm0ubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUE9JTlRFRCBhcmNoIHBsYXRlIC0tIHRoZSB0d28tY2VudHJlZCBhcmNoIG9mIGEgbW9zcXVlLCBub3QgdGhlIGhhbGYtcm91bmQgb2YgYSBSb21hbiBvbmUuXG4gKiBgYXJjaGVkUGxhdGVgIGFib3ZlIHN3ZWVwcyBhIHNpbmdsZSBzZW1pY2lyY2xlLCB3aGljaCBpcyB0aGUgd3JvbmcgYXJjaCBoZXJlIGFuZCByZWFkcyBhcyBhXG4gKiByYWlsd2F5IHZpYWR1Y3Q7IHRoaXMgb25lIHJ1bnMgZWFjaCBzaWRlIHVwIHRvIGEgc2hhcmVkIGFwZXggdGhyb3VnaCBhIHF1YWRyYXRpYywgd2hpY2ggZ2l2ZXMgdGhlXG4gKiBvZ2VlIHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludGVkQXJjaFNoYXBlKHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGJ1aWxkID0gKHRhcmdldDogVEhSRUUuU2hhcGUgfCBUSFJFRS5QYXRoLCB3dzogbnVtYmVyLCBzcDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHNsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBodyA9IHd3IC8gMjtcbiAgICB0YXJnZXQubW92ZVRvKGh3LCBzbCk7XG4gICAgdGFyZ2V0LmxpbmVUbyhodywgc3ApO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKGh3LCBzcCArIHJpc2UgKiAwLjcyLCAwLCBzcCArIHJpc2UpO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKC1odywgc3AgKyByaXNlICogMC43MiwgLWh3LCBzcCk7XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNsKTtcbiAgICB0YXJnZXQuY2xvc2VQYXRoKCk7XG4gIH07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGJ1aWxkKHNoYXBlLCB3LCBzcHJpbmcsIGFwZXhSaXNlLCBzaWxsKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBidWlsZChwLCBob2xlLncsIGhvbGUuc3ByaW5nLCBob2xlLmFwZXhSaXNlLCBob2xlLnNpbGwpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgVEFQRVJJTkcgVFVCRSBhbG9uZyArWiwgYnVpbHQgZnJvbSBhIGxpc3Qgb2Ygc3RhdGlvbnMuIEVhY2ggc3RhdGlvbiBpc1xuICogW3osIGNlbnRyZVgsIGNlbnRyZVksIHJhZGl1c1gsIHJhZGl1c1ldLCBhbmQgY29uc2VjdXRpdmUgc3RhdGlvbnMgYXJlIGpvaW5lZCBieSBhIHJpbmcgb2YgYHNlZ2BcbiAqIHBvaW50cywgc28gdGhlIHJhZGl1cywgdGhlIGNlbnRyZSBhbmQgdGhlIGVsbGlwc2UgcmF0aW8gY2FuIGFsbCB2YXJ5IGFsb25nIHRoZSBsZW5ndGguXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBPUkdBTklDIGZvcm0gaW4gdGhlIHdob2xlIGtpdCwgYW5kIGl0IGV4aXN0cyBmb3Igb25lIHByb3A6IGEgcmVjbGluaW5nIGZpZ3VyZSBpc1xuICogYSBsb25nIHNvZnQgbWFzcyB3aG9zZSBzZWN0aW9uIGNoYW5nZXMgYXQgZXZlcnkgcG9pbnQgYWxvbmcgaXQgLS0gc2hvdWxkZXIgdG8gd2Fpc3QgdG8gaGlwIHRvXG4gKiBjYWxmIC0tIGFuZCBuZWl0aGVyIGEgbGF0aGUgbm9yIGEgc3RhY2sgb2YgYm94ZXMgY2FuIHNheSB0aGF0LiBBIGJveCBkZWNvbXBvc2l0aW9uIG9mIGEgbHlpbmdcbiAqIGJvZHkgaXMgbm90IGEgbG93LXBvbHkgYm9keSwgaXQgaXMgYSBwaWxlIG9mIGx1Z2dhZ2UuXG4gKlxuICogQSBzdGF0aW9uIHdpdGggYSByYWRpdXMgYXQgb3IgbmVhciB6ZXJvIGNsb3NlcyB0aGUgdHViZSwgc28gdGhlIGVuZHMgY2FuIGJlIGNhcHBlZCBieSB0aGVcbiAqIHN0YXRpb24gbGlzdCBpdHNlbGYgcmF0aGVyIHRoYW4gYnkgYSBzZXBhcmF0ZSBmYW4uXG4gKi9cbmZ1bmN0aW9uIHR1YmVBbG9uZyhzdGF0aW9uczogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIElOREVYRUQsIHdpdGggc2hhcmVkIHJpbmcgdmVydGljZXMsIHNvIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIGF2ZXJhZ2VzIGFjcm9zcyB0aGUgcXVhZHMgYW5kIHRoZVxuICAvLyBzdXJmYWNlIHNoYWRlcyBzbW9vdGguIFRoZSBmaXJzdCBidWlsZCBlbWl0dGVkIGxvb3NlIHRyaWFuZ2xlcywgYW5kIGEgZmxhdC1zaGFkZWQgc29mdCBib2R5XG4gIC8vIHNob3dzIGV2ZXJ5IHN0YXRpb24gYXMgYSBjcmVhc2UgLS0gYSByZWNsaW5pbmcgZmlndXJlIHRoYXQgbG9va2VkIGNydW1wbGVkIHJhdGhlciB0aGFuIGRyYXBlZC5cbiAgLy9cbiAgLy8gQSBzaXh0aCBzdGF0aW9uIGVsZW1lbnQgYGZsYXRZYCBDTEFNUFMgdGhlIHJpbmcncyB1bmRlcnNpZGUgdG8gdGhhdCBoZWlnaHQuIEEgYm9keSByZXN0aW5nIG9uXG4gIC8vIHRoZSBncm91bmQgaXMgbm90IGEgZmxvYXRpbmcgZWxsaXBzZTogaXQgc3ByZWFkcyB3aGVyZSBpdCBiZWFycywgYW5kIGFuIHVuY2xhbXBlZCB0dWJlIHJlYWRzIGFzXG4gIC8vIGEgc2F1c2FnZSBvbiBhIHRhYmxlLiBUaGUgY2xhbXAgaXMgYSBzb2Z0IG9uZSAtLSB0aGUgcmluZyBrZWVwcyBpdHMgd2lkdGggYW5kIGxvc2VzIGl0cyBkcm9vcCAtLVxuICAvLyBzbyB0aGUgY3JlYXNlIGl0IGxlYXZlcyBpcyB0aGUgY29udGFjdCBlZGdlIHJhdGhlciB0aGFuIGEgY3V0LlxuICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IFt6LCBjeCwgY3ksIHJ4LCByeSwgZmxhdFldID0gc3RhdGlvbnNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLnNpbih0aCkgKiByeDtcbiAgICAgIGxldCB5ID0gY3kgKyBNYXRoLmNvcyh0aCkgKiByeTtcbiAgICAgIGlmIChmbGF0WSAhPT0gdW5kZWZpbmVkICYmIHkgPCBmbGF0WSkgeSA9IGZsYXRZO1xuICAgICAgcG9zLnB1c2goeCwgeSwgeik7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGkgKiBzZWcgKyBqLCBiID0gKGkgKyAxKSAqIHNlZyArIGosIGMgPSAoaSArIDEpICogc2VnICsgKGogKyAxKSAlIHNlZywgZCA9IGkgKiBzZWcgKyAoaiArIDEpICUgc2VnO1xuICAgICAgaWR4LnB1c2goYSwgYiwgYywgYSwgYywgZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHBvcyksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KChwb3MubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLnNldEluZGV4KGlkeCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBjdXJsZWQgaG9ybjogYG5gIHRhcGVyaW5nIGJveCBzZWdtZW50cyBzYW1wbGVkIGFsb25nIGEgc2luZSwgZWFjaCByb3RhdGVkIHRvIGl0cyBvd24gdGFuZ2VudC5cbiAqIFNoYXJlZCBieSB0aGUgdWJvc290J3MgY2hvZmEsIHRoZSBwcmFuZydzIHRyaWRlbnQgcHJvbmdzIGFuZCB0aGUgQ2hpbmVzZSBzaHJpbmUncyBmbHlpbmcgZWF2ZXMsXG4gKiBiZWNhdXNlIGFsbCB0aHJlZSBhcmUgdGhlIHNhbWUgcHJvYmxlbSAtLSBhIHN0cmFpZ2h0IHNwaWtlIGF0IGEgcm9vZiBlbmQgcmVhZHMgYXMgYSBsaWdodG5pbmcgcm9kXG4gKiBhbmQgdGhlIGN1cmwgaXMgdGhlIHdob2xlIGZlYXR1cmUuXG4gKi9cbmZ1bmN0aW9uIGN1cmxlZEhvcm4ocmVhY2g6IG51bWJlciwgcmlzZTogbnVtYmVyLCB0aGljazogbnVtYmVyLCBuID0gNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBhdCA9ICh1OiBudW1iZXIpID0+IFtyZWFjaCAqIE1hdGguc2luKHUgKiBNYXRoLlBJICogMC40NiksIHJpc2UgKiB1XTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBjb25zdCBhID0gYXQoaiAvIG4pLCBiID0gYXQoKGogKyAxKSAvIG4pO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgdyA9IHRoaWNrICogKDEgLSBqIC8gbikgKyB0aGljayAqIDAuMjg7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBNYXRoLmh5cG90KGR4LCBkeSkgKyB0aGljayAqIDAuMiwgdyk7XG4gICAgZy5yb3RhdGVaKE1hdGguYXRhbjIoLWR4LCBkeSkpO1xuICAgIGcudHJhbnNsYXRlKChhWzBdICsgYlswXSkgLyAyLCAoYVsxXSArIGJbMV0pIC8gMiwgMCk7XG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiBtZXJnZUdlb3Moc2Vncyk7XG59XG5cbi8qKlxuICogUmFtcCBhIHBlci12ZXJ0ZXggdGludCBvdmVyIGEgaGVpZ2h0IGJhbmQsIGFzIGEgTVVMVElQTElFUiBvbiB0aGUgbWF0ZXJpYWwgY29sb3VyLlxuICpcbiAqIFRoaXMgaXMgaG93IGEgbG9jYWwgbWF0ZXJpYWwgb3ZlcnJpZGUgZ2V0cyBkZWxpdmVyZWQgb24gYSBtZXJnZWQgY29tcG9uZW50IHRoYXQgaXMgb25lIG1lc2ggYW5kXG4gKiBtdXN0IHN0YXkgb25lIGRyYXcgY2FsbDogYSBzZWNvbmQgbWF0ZXJpYWwgd291bGQgY29zdCBhIHN1Ym1pc3Npb24gYW5kIGEgc2hhZGVyIHN3aXRjaCB0byBzYXlcbiAqIHRoYXQgdGhlIGJvdHRvbSBvZiBhIHdhbGwgaXMgZGlydGllciB0aGFuIHRoZSB0b3AuIGByZ2IwYCBpcyB0aGUgbWVhc3VyZWQgdGludCBhdCB5MCBleHByZXNzZWRcbiAqIGFzIGEgZnJhY3Rpb24gb2YgdGhlIG1hdGVyaWFsJ3Mgb3duIG1lYXN1cmVkIGFsYmVkbywgc28gdGhlIHRvcCBvZiB0aGUgYmFuZCBpcyB1bnRpbnRlZCAxLjAgYW5kXG4gKiB0aGUgbnVtYmVycyBiZWxvdyBzdGF5IHRyYWNlYWJsZSB0byB0d28gY3JvcCBtZWFzdXJlbWVudHMgcmF0aGVyIHRoYW4gdG8gYSBjaG9zZW4gZGFya2VuaW5nLlxuICovXG5mdW5jdGlvbiB0aW50QnlIZWlnaHQoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcmdiMDogbnVtYmVyW10pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAocC5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApKSk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIGNvbFtpICogMyArIGNdID0gcmdiMFtjXSArICgxIC0gcmdiMFtjXSkgKiB0O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHZlaGljbGUgaGVscGVycyAqL1xuXG4vKiogUGFpbnQgYSB3aG9sZSBnZW9tZXRyeSBvbmUgdmVydGV4IGNvbG91ci4gRXZlcnkgdmVoaWNsZSBtYXRlcmlhbCBoZXJlIGlzIFdISVRFIHdpdGhcbiAqICB2ZXJ0ZXhDb2xvcnMgb24sIHNvIGEgY29sb3VyIGRpZmZlcmVuY2UgY29zdHMgYW4gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgbWF0ZXJpYWw6IHRoZSBib2R5J3NcbiAqICB0d28tdG9uZSwgdGhlIHR5cmUgYWdhaW5zdCBpdHMgcmltLCBhbiBhbWJlciBpbmRpY2F0b3Igb24gYSBibGFjayBidW1wZXIgYWxsIHJpZGUgb25lIHNoYWRlci5cbiAqICBWZXJ0ZXggY29sb3VycyBtdWx0aXBseSBpbiBMSU5FQVIgc3BhY2UsIHNvIHRoZSBoZXggaXMgY29udmVydGVkIHRocm91Z2ggVEhSRUUuQ29sb3IsIHdoaWNoXG4gKiAgZG9lcyB0aGUgc1JHQi10by1saW5lYXIgc3RlcC4gKi9cbmZ1bmN0aW9uIHRpbnRHZW8oZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgaGV4OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoaGV4KTtcbiAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7IH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQm94LXByb2plY3Qgd29ybGQtbWV0cmUgVVZzIHNvIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgKG11ZCwgcnVzdCwgY29ycnVnYXRpb24pIHJlcGVhdHNcbiAqICBhdCBhIHJlYWwgc2l6ZSBvbiBldmVyeSBmYWNlLiBgc2NhbGVgIGlzIG1ldHJlcyBwZXIgdGlsZS4gVGhlIGRvbWluYW50IG5vcm1hbCBheGlzIHBpY2tzIHRoZVxuICogIHBhaXIgb2Ygd29ybGQgYXhlcyB1c2VkLCBzbyBhIHJvb2YgcmVhZHMgKHgsIHopIGFuZCBhIHNpZGUgcmVhZHMgKHosIHkpLiAqL1xuZnVuY3Rpb24gd29ybGRVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYXggPSBNYXRoLmFicyhucm0uZ2V0WChpKSksIGF5ID0gTWF0aC5hYnMobnJtLmdldFkoaSkpLCBheiA9IE1hdGguYWJzKG5ybS5nZXRaKGkpKTtcbiAgICBsZXQgdTogbnVtYmVyLCB2OiBudW1iZXI7XG4gICAgaWYgKGF4ID49IGF5ICYmIGF4ID49IGF6KSB7IHUgPSBwLmdldFooaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICBlbHNlIGlmIChheSA+PSBheikgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRaKGkpOyB9XG4gICAgZWxzZSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSB2IC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBQTEFOLXByb2plY3QgVVZzOiBldmVyeSB2ZXJ0ZXgsIHdoYXRldmVyIGl0IGZhY2VzLCBtYXBzIGJ5IGl0cyB3b3JsZCAoeCwgeikgd2l0aCB0aGUgdGlsZSdzXG4gKiAgQ0VOVFJFIGF0IHRoZSBvcmlnaW4gLS0gdSA9IHgvc2NhbGUgKyAwLjUsIHYgPSB6L3NjYWxlICsgMC41LiBUaGlzIGlzIGZvciBhIGNhbnZhcyB0aGF0IGlzIGFcbiAqICBQSUNUVVJFIE9GIFRIRSBUT1AgcmF0aGVyIHRoYW4gYSByZXBlYXRpbmcgZ3JhaW46IGEgcm91bmQgdGFibGUgdG9wJ3MgcmFkaWFsIHJpYmJpbmcgZHJhd24gb25jZVxuICogIGluIHBsYW4gYXQgYHNjYWxlYCA9IHRoZSBkaWFtZXRlciwgc28gdGhlIHJpbSBzYW1wbGVzIHRoZSB0aWxlJ3MgciA9IDAuNSBjaXJjbGUsIHRoZSB1bWJyZWxsYVxuICogIGhvbGUgaXRzIGNlbnRyZSwgYW5kIGEgdmVydGljYWwgc2tpcnQgZmFjZSB0aGUgc2FtZSByaW5nIHRvbmUgYXMgdGhlIGVkZ2UgYWJvdmUgaXQuIE5vdGhpbmdcbiAqICByZXBlYXRzIGFuZCBubyBzZWFtIGxhbmRzIG9uIHRoZSBzdXJmYWNlLiAqL1xuZnVuY3Rpb24gcGxhblVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykgeyB1dltpICogMl0gPSBwLmdldFgoaSkgLyBzY2FsZSArIDAuNTsgdXZbaSAqIDIgKyAxXSA9IHAuZ2V0WihpKSAvIHNjYWxlICsgMC41OyB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKipcbiAqIFNJREUtUFJPRklMRSBFWFRSVVNJT046IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyAodGhlIHZlaGljbGUncyBzaWRlIHNpbGhvdWV0dGUsIHdoZWVsXG4gKiBhcmNoZXMgaW5jbHVkZWQgYXMgbm90Y2hlcykgc3dlcHQgYWNyb3NzIHRoZSBmdWxsIHdpZHRoLCB0aGVuIHNoYXBlZCBwZXIgdmVydGV4OlxuICpcbiAqICAtIGB0dW1ibGVgICBuYXJyb3dzIHRoZSBzZWN0aW9uIGFib3ZlIHRoZSBiZWx0IGxpbmUgLS0geCBpcyBzY2FsZWQgYnkgKDEgLSBrICogdCkgd2hlcmUgdCBydW5zXG4gKiAgICAgICAgICAgICAgMCBhdCBgYmVsdGAgdG8gMSBhdCBgcm9vZmAuIFRoYXQgaXMgdGhlIHR1bWJsZWhvbWUgb2YgYSByZWFsIGNhciBib2R5IGFuZCBpcyB3aGF0XG4gKiAgICAgICAgICAgICAgc3RvcHMgdGhlIGdsYXNzaG91c2UgcmVhZGluZyBhcyBhIGJveCBvbiBhIGJveC5cbiAqICAtIGBwbGFuYCAgICByb3VuZHMgdGhlIHBsYW4gYXQgdGhlIG5vc2UgYW5kIHRhaWw6IGFuIG9wdGlvbmFsIGxpc3Qgb2YgW3osIHhTY2FsZV0gc3RhdGlvbnNcbiAqICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWQgYWxvbmcgeiwgc28gYSBib25uZXQgY2FuIHRhcGVyIHRvIDAuOSBvZiB0aGUgd2lkdGggYXQgdGhlIGJ1bXBlciBsaW5lLlxuICpcbiAqIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgaW4gaXRzIG93biAodSwgdiwgZGVwdGgpIGZyYW1lOyByb3RhdGVZKC1QSS8yKSBtYXBzIGRlcHRoIHRvIC14IGFuZCB1IHRvXG4gKiB3b3JsZCB6LCBhbmQgdGhlIHRyYW5zbGF0ZSByZS1jZW50cmVzIHRoZSBzbGFiIG9uIHggPSAwLiBBbnkgc2hhcGluZyBpcyBhcHBsaWVkIEFGVEVSIHRoYXQsIGFuZFxuICogbm9ybWFscyBhcmUgcmVjb21wdXRlZCBsYXN0IHNvIHRoZSBzaGFkZWQgZmFjZXMgZm9sbG93IHRoZSBzaGFwZWQgc3VyZmFjZS5cbiAqL1xuZnVuY3Rpb24gc2lkZUV4dHJ1ZGUocHJvZmlsZTogbnVtYmVyW11bXSwgd2lkdGg6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW4/OiBudW1iZXJbXVtdLCBjdXJ2ZVNlZ21lbnRzPzogbnVtYmVyIH0gPSB7fSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHByb2ZpbGVbMF1bMF0sIHByb2ZpbGVbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2ZpbGUubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwcm9maWxlW2ldWzBdLCBwcm9maWxlW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB3aWR0aCwgYmV2ZWxFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlU2VnbWVudHM6IG9wdHMuY3VydmVTZWdtZW50cyA/PyA2IH0pO1xuICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUod2lkdGggLyAyLCAwLCAwKTtcbiAgc2hhcGVXaWR0aChnLCBvcHRzKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBUaGUgcGVyLXZlcnRleCB4IHNoYXBpbmcgc2hhcmVkIGJ5IHRoZSBib2R5IGFuZCBpdHMgZ2xhc3MgYmFuZCwgc28gYSBwYW5lIG9mZnNldCA1IG1tIHByb3VkIG9mXG4gKiAgdGhlIGJvZHkgc3RheXMgNSBtbSBwcm91ZCBhZnRlciBib3RoIGFyZSBuYXJyb3dlZCBieSB0aGUgc2FtZSBmdW5jdGlvbi4gKi9cbmZ1bmN0aW9uIHNoYXBlV2lkdGgoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksXG4gICAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sIHBsYW4/OiBudW1iZXJbXVtdIH0pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGxldCB4ID0gcC5nZXRYKGkpOyBjb25zdCB5ID0gcC5nZXRZKGkpLCB6ID0gcC5nZXRaKGkpO1xuICAgIGlmIChvcHRzLnR1bWJsZSkge1xuICAgICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh5IC0gb3B0cy50dW1ibGUuYmVsdCkgLyAob3B0cy50dW1ibGUucm9vZiAtIG9wdHMudHVtYmxlLmJlbHQpKSk7XG4gICAgICB4ICo9IDEgLSBvcHRzLnR1bWJsZS5rICogdDtcbiAgICB9XG4gICAgaWYgKG9wdHMucGxhbiAmJiBvcHRzLnBsYW4ubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgc3QgPSBvcHRzLnBsYW47XG4gICAgICBsZXQgcyA9IHN0WzBdWzFdO1xuICAgICAgaWYgKHogPD0gc3RbMF1bMF0pIHMgPSBzdFswXVsxXTtcbiAgICAgIGVsc2UgaWYgKHogPj0gc3Rbc3QubGVuZ3RoIC0gMV1bMF0pIHMgPSBzdFtzdC5sZW5ndGggLSAxXVsxXTtcbiAgICAgIGVsc2UgZm9yIChsZXQgayA9IDA7IGsgPCBzdC5sZW5ndGggLSAxOyBrKyspIHtcbiAgICAgICAgaWYgKHogPj0gc3Rba11bMF0gJiYgeiA8PSBzdFtrICsgMV1bMF0pIHtcbiAgICAgICAgICBjb25zdCB1ID0gKHogLSBzdFtrXVswXSkgLyAoc3RbayArIDFdWzBdIC0gc3Rba11bMF0pO1xuICAgICAgICAgIHMgPSBzdFtrXVsxXSArIChzdFtrICsgMV1bMV0gLSBzdFtrXVsxXSkgKiB1OyBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgeCAqPSBzO1xuICAgIH1cbiAgICBwLnNldFgoaSwgeCk7XG4gIH1cbiAgcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbn1cblxuLyoqIEEgc2VtaWNpcmN1bGFyIHdoZWVsLWFyY2ggbm90Y2ggYXMgcHJvZmlsZSBwb2ludHMsIHRvIGJlIHNwbGljZWQgaW50byBhIHNpZGUgcHJvZmlsZSB0aGF0IHJ1bnNcbiAqICBhbG9uZyB0aGUgc2lsbCBmcm9tICt6IHRvIC16IChpLmUuIHogREVDUkVBU0lORykuIGBuYCBzZWdtZW50czsgdGhlIGFyYyBpcyB0aGUgVE9QIGhhbGYuICovXG5mdW5jdGlvbiBhcmNoTm90Y2goemM6IG51bWJlciwgeVNpbGw6IG51bWJlciwgcjogbnVtYmVyLCBuID0gNyk6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGkgKiBNYXRoLlBJIC8gbjsgICAgICAgICAgICAgICAvLyAwIC4uIFBJLCBmcm9tICt6IHJvdW5kIHRoZSB0b3AgdG8gLXpcbiAgICBwdHMucHVzaChbemMgKyBNYXRoLmNvcyhhKSAqIHIsIHlTaWxsICsgTWF0aC5zaW4oYSkgKiByXSk7XG4gIH1cbiAgcmV0dXJuIHB0cztcbn1cblxuLyoqXG4gKiBBIFdIRUVMOiBvbmUgbGF0aGUgYWJvdXQgdGhlIGF4bGUuIFRoZSBwcm9maWxlIHJ1bnMgZnJvbSB0aGUgaHViIGZhY2Ugb24gb25lIHNpZGUgb3ZlciB0aGUgcmltXG4gKiBsaXAsIHRoZSB0eXJlIHNpZGV3YWxsLCB0aGUgdHJlYWQgYW5kIGJhY2sgZG93biB0aGUgZmFyIHNpZGUsIHNvIHRoZSB3aGVlbCBpcyBhIGNsb3NlZCBzb2xpZCB3aXRoXG4gKiBubyBvcGVuIGVuZCBmb3IgdGhlIHR1cm50YWJsZSBnYXRlIHRvIHJlYWQgdGhyb3VnaC4gUmV2b2x2ZWQgYWJvdXQgWSBhbmQgdGhlbiBsYWlkIG9uIFgsIHNvIHRoZVxuICogYXhsZSBpcyB0aGUgeCBheGlzIGFuZCB0aGUgd2hlZWwgcm9sbHMgYWJvdXQgaXQgLS0gd2hpY2ggaXMgdGhlIGF4aXMgaXRzIHBpdm90IGRlY2xhcmVzLlxuICpcbiAqIFR3byB2ZXJ0ZXggY29sb3VyczogYHJpbUhleGAgb24gdGhlIGh1YiBhbmQgcmltIHBvaW50cywgYHR5cmVIZXhgIG9uIHRoZSBzaWRld2FsbCBhbmQgdHJlYWQuIFRoZVxuICogbGF0aGUgb3JkZXJzIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IgKGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSwgd2hpY2ggaXMgd2hhdCBsZXRzIGFcbiAqIHBlci1wcm9maWxlLXBvaW50IGNvbG91ciBiZSB3cml0dGVuIHdpdGhvdXQgYSBzZWNvbmQgZ2VvbWV0cnkuXG4gKi9cbmZ1bmN0aW9uIHdoZWVsR2VvKHJUeXJlOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICB0eXJlSGV4OiBudW1iZXIsIHJpbUhleDogbnVtYmVyLCBkaXNoID0gMC41NSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgaHcgPSBoYWxmVztcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW1xuICAgIFswLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjMwLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjYyLCAtaHcgKiAwLjgwXSwgW3JSaW0sIC1odyAqIDAuODZdLCBbclJpbSwgLWh3ICogMC45OF0sXG4gICAgW3JUeXJlICogMC45MywgLWh3XSwgW3JUeXJlLCAtaHcgKiAwLjcyXSwgW3JUeXJlLCBodyAqIDAuNzJdLCBbclR5cmUgKiAwLjkzLCBod10sXG4gICAgW3JSaW0sIGh3ICogMC45OF0sIFtyUmltLCBodyAqIDAuODZdLCBbclJpbSAqIDAuNjIsIGh3ICogMC44MF0sIFtyUmltICogMC4zMCwgaHcgKiBkaXNoXSwgWzAsIGh3ICogZGlzaF0sXG4gIF07XG4gIGNvbnN0IHJpbVBvaW50ID0gKGo6IG51bWJlcikgPT4gaiA8PSA0IHx8IGogPj0gOTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKHBbMF0sIHBbMV0pKSwgc2VnKTtcbiAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgY29uc3QgY3QgPSBuZXcgVEhSRUUuQ29sb3IodHlyZUhleCksIGNyID0gbmV3IFRIUkVFLkNvbG9yKHJpbUhleCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYyA9IHJpbVBvaW50KGkgJSBwdHMubGVuZ3RoKSA/IGNyIDogY3Q7XG4gICAgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iO1xuICB9XG4gIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIGcucm90YXRlWihNYXRoLlBJIC8gMik7ICAgIC8vIGxhdGhlIGF4aXMgWSAtPiBheGxlIG9uIFhcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIFdpcmUtc3Bva2VkIHdoZWVsIGRyZXNzaW5nOiBgbmAgdGhpbiBib3hlcyByYWRpYXRpbmcgZnJvbSB0aGUgaHViLCBsYWNlZCBhbHRlcm5hdGVseSB0byBlYWNoXG4gKiAgc2lkZSBvZiB0aGUgcmltIHNvIHRoZXkgY3Jvc3MgdGhlIHdheSByZWFsIHNwb2tlcyBkby4gTWVyZ2VkIGludG8gdGhlIHdoZWVsIGdlb21ldHJ5IHNvIHRoZVxuICogIHdoZWVsIHN0YXlzIE9ORSBpbnN0YW5jZWQgZ2VvbWV0cnkuICovXG5mdW5jdGlvbiBzcG9rZXMockh1YjogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIG46IG51bWJlciwgaGV4OiBudW1iZXIsIHQgPSAwLjAwNiwgcHJpc20gPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBpICogTWF0aC5QSSAqIDIgLyBuO1xuICAgIGNvbnN0IHNpZGUgPSAoaSAlIDIgPT09IDAgPyAxIDogLTEpICogaGFsZlcgKiAwLjM1O1xuICAgIGNvbnN0IGxlbiA9IHJSaW0gLSBySHViO1xuICAgIC8vIGBwcmlzbWA6IGFuIG9wZW4gdGhyZWUtc2lkZWQgcHJpc20gYXQgc2l4IHRyaWFuZ2xlcyB3aGVyZSB0aGUgYm94IGNvc3RzIHR3ZWx2ZSAtLSBhIHdpcmVcbiAgICAvLyBzcG9rZSBoYXMgbm8gcmVzb2x2YWJsZSBzZWN0aW9uIGF0IHByb3AgZGlzdGFuY2UsIGFuZCAyOCBvZiB0aGVtIG9uIHRocmVlIHdoZWVscyBpcyB0aGVcbiAgICAvLyBkaWZmZXJlbmNlIGJldHdlZW4gYSBsYXJnZSBwcm9wIGluc2lkZSBpdHMgdHJpYW5nbGUgY2VpbGluZyBhbmQgb25lIG92ZXIgaXRcbiAgICBjb25zdCBnID0gcHJpc20gPyBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSh0ICogMC42MiwgdCAqIDAuNjIsIGxlbiwgMywgMSwgdHJ1ZSkgOiBuZXcgVEhSRUUuQm94R2VvbWV0cnkodCwgbGVuLCB0KTtcbiAgICBnLnRyYW5zbGF0ZSgwLCBySHViICsgbGVuIC8gMiwgMCk7XG4gICAgZy5yb3RhdGVYKE1hdGguYXRhbjIoc2lkZSwgbGVuKSAqIDAuNik7XG4gICAgZy5yb3RhdGVYKDApOyBnLnRyYW5zbGF0ZSgwLCAwLCBzaWRlICogMC41KTtcbiAgICBnLnJvdGF0ZVgoYSk7ICAgICAgICAgICAgLy8gcmFkaWF0ZSBhcm91bmQgdGhlIGF4bGUgKHgpXG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiB0aW50R2VvKG1lcmdlR2VvcyhzZWdzKSwgaGV4KTtcbn1cblxuLyoqIEEgcG9seWxpbmUgVFVCRTogb25lIGN5bGluZGVyIHBlciBzZWdtZW50LCBlYWNoIHJvdGF0ZWQgb250byBpdHMgY2hvcmQsIHdpdGggYSBzbWFsbCBzcGhlcmUtbGVzc1xuICogIG92ZXJsYXAgc28gdGhlIGpvaW50cyBjbG9zZS4gSGFuZGxlYmFycywgY2Fub3B5IHJhaWxzLCByb2xsIGNhZ2VzIGFuZCBmcmFtZSB0dWJlcy4gKi9cbi8qKlxuICogYHJgIG1heSBiZSBhIHNpbmdsZSByYWRpdXMgKGV2ZXJ5IHNlZ21lbnQgdGhlIHNhbWUsIHRoZSBvcmlnaW5hbCBiZWhhdmlvdXIpIG9yIE9ORSBSQURJVVMgUEVSXG4gKiBTVEFUSU9OLCB3aGljaCB0YXBlcnMgdGhlIHR1YmUuIEEgY2FwcGVkIGNvbnN0YW50LXJhZGl1cyB0dWJlIGVuZHMgaW4gYSBmbGF0IGRpc2MsIGFuZCBvbiB0aGVcbiAqIHNwaXJpdCBob3VzZSdzIGVhdmUgaG9ybnMgdGhhdCByZWFkIGFzIGZvdXIgY3V0LW9mZiBwb3N0cyByYXRoZXIgdGhhbiBwb2ludHM7IGEgaG9ybiwgYSBzcGlrZSBvclxuICogYSB3aGlza2VyIG5lZWRzIGl0cyBsYXN0IHN0YXRpb24gYXQgfjAuMjUgb2YgdGhlIGZhc2NpYSByYWRpdXMuIFRoZSBqb2ludCBvdmVybGFwIHRoYXQgaGlkZXMgdGhlXG4gKiBzZWFtIGJldHdlZW4gc2VnbWVudHMgaXMgKHJhICsgcmIpICogMC42LCB3aGljaCBpcyBleGFjdGx5IHRoZSBvbGQgYHIgKiAxLjJgIHdoZW4gdGhleSBhcmUgZXF1YWwsXG4gKiBzbyBhIG51bWJlciBzdGlsbCBwcm9kdWNlcyBieXRlLWlkZW50aWNhbCBnZW9tZXRyeS5cbiAqL1xuZnVuY3Rpb24gdHViZShwdHM6IG51bWJlcltdW10sIHI6IG51bWJlciB8IG51bWJlcltdLCBzZWcgPSA4LCBoZXg/OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHJBdCA9IChpOiBudW1iZXIpID0+ICh0eXBlb2YgciA9PT0gJ251bWJlcicgPyByIDogcltNYXRoLm1pbihpLCByLmxlbmd0aCAtIDEpXSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaV1bMF0sIHB0c1tpXVsxXSwgcHRzW2ldWzJdKTtcbiAgICBjb25zdCBiID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2kgKyAxXVswXSwgcHRzW2kgKyAxXVsxXSwgcHRzW2kgKyAxXVsyXSk7XG4gICAgY29uc3QgZCA9IGIuY2xvbmUoKS5zdWIoYSk7IGNvbnN0IGxlbiA9IGQubGVuZ3RoKCk7XG4gICAgaWYgKGxlbiA8IDFlLTYpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHJhID0gckF0KGkpLCByYiA9IHJBdChpICsgMSk7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJiLCByYSwgbGVuICsgKHJhICsgcmIpICogMC42LCBzZWcsIDEsIGZhbHNlKTtcbiAgICBjb25zdCBxID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGQubm9ybWFsaXplKCkpO1xuICAgIGcuYXBwbHlRdWF0ZXJuaW9uKHEpO1xuICAgIGNvbnN0IG0gPSBhLmNsb25lKCkuYWRkKGIpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG4gICAgZy50cmFuc2xhdGUobS54LCBtLnksIG0ueik7XG4gICAgcGFydHMucHVzaChnKTtcbiAgfVxuICBjb25zdCBvdXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBvdXQgOiB0aW50R2VvKG91dCwgaGV4KTtcbn1cblxuLyoqXG4gKiBBIEZMQVQgU1RSQVAgc3dlcHQgYWxvbmcgYSBwb2x5bGluZTogYSBjaGFpbiBvZiBib3hlcywgZWFjaCBvcmllbnRlZCBzbyBpdHMgTEVOR1RIIHJ1bnMgYWxvbmcgdGhlXG4gKiBzZWdtZW50LCBpdHMgVEhJQ0tORVNTIGFsb25nIHRoZSBvdXR3YXJkIG5vcm1hbCBmcm9tIGBhYm91dGAsIGFuZCBpdHMgV0lEVEggdGFuZ2VudCB0byB0aGF0XG4gKiBzdXJmYWNlLiBUaGlzIGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYSBndWFyZCBhbmQgYSB3aXJlOiBhIGJ1bGtoZWFkIGxhbXAncyBjYWdlIGlzIHByZXNzZWRcbiAqIGZsYXQgYmFyLCBhbmQgYSByb3VuZCB0dWJlIG9mIHRoZSBzYW1lIG1lYXN1cmVkIHdpZHRoIHNoYWRlcyB0byBhIG5hcnJvdyBoaWdobGlnaHQgYW5kIHJlYWRzIGFzXG4gKiB3aXJlIC0tIHdoaWNoIGlzIHRoZSB0aGluZyB0aGlzIGtpdCdzIGFzc2V0IG5vdGVzIHJ1bGUgb3V0LiBJdCBpcyBhbHNvIENIRUFQRVIgdGhhbiBgdHViZWA6IGEgYm94XG4gKiBpcyAxMiB0cmlhbmdsZXMgYWdhaW5zdCBhIGNhcHBlZCA1LXNpZGVkIGN5bGluZGVyJ3MgMjAuXG4gKi9cbmZ1bmN0aW9uIHN0cmFwKHB0czogbnVtYmVyW11bXSwgdzogbnVtYmVyLCB0OiBudW1iZXIsIGFib3V0OiBudW1iZXJbXSwgaGV4PzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBjID0gbmV3IFRIUkVFLlZlY3RvcjMoYWJvdXRbMF0sIGFib3V0WzFdLCBhYm91dFsyXSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaV1bMF0sIHB0c1tpXVsxXSwgcHRzW2ldWzJdKTtcbiAgICBjb25zdCBiID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2kgKyAxXVswXSwgcHRzW2kgKyAxXVsxXSwgcHRzW2kgKyAxXVsyXSk7XG4gICAgY29uc3QgZGlyID0gYi5jbG9uZSgpLnN1YihhKTsgY29uc3QgbGVuID0gZGlyLmxlbmd0aCgpO1xuICAgIGlmIChsZW4gPCAxZS02KSBjb250aW51ZTtcbiAgICBkaXIubm9ybWFsaXplKCk7XG4gICAgY29uc3QgbWlkID0gYS5jbG9uZSgpLmFkZChiKS5tdWx0aXBseVNjYWxhcigwLjUpO1xuICAgIC8vIE91dHdhcmQgbm9ybWFsIGF0IHRoZSBtaWRwb2ludCwgcmUtb3J0aG9nb25hbGlzZWQgYWdhaW5zdCB0aGUgcnVuIHNvIHRoZSBiYXNpcyBzdGF5cyBzcXVhcmVcbiAgICAvLyB3aGVyZSB0aGUgc3RyYXAgY2xpbWJzIHN0ZWVwbHkgYW5kIHRoZSB0d28gd291bGQgb3RoZXJ3aXNlIGJlIG5lYXJseSBwYXJhbGxlbC5cbiAgICBsZXQgbnJtID0gbWlkLmNsb25lKCkuc3ViKGMpO1xuICAgIG5ybS5zdWIoZGlyLmNsb25lKCkubXVsdGlwbHlTY2FsYXIobnJtLmRvdChkaXIpKSk7XG4gICAgaWYgKG5ybS5sZW5ndGhTcSgpIDwgMWUtMTIpIG5ybSA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpLnN1YihkaXIuY2xvbmUoKS5tdWx0aXBseVNjYWxhcihkaXIueikpO1xuICAgIG5ybS5ub3JtYWxpemUoKTtcbiAgICAvLyBkaXIgeCBucm0sIE5PVCBucm0geCBkaXIuIFRoZSBiYXNpcyBjb2x1bW5zIGFyZSAoc2lkZSwgZGlyLCBucm0pIGFnYWluc3QgYSBib3gncyAodywgbGVuLCB0KSxcbiAgICAvLyBzbyBhIHJpZ2h0LWhhbmRlZCBiYXNpcyBuZWVkcyBzaWRlIHggZGlyID0gbnJtOyBucm0geCBkaXIgZ2l2ZXMgLW5ybSwgYSBtaXJyb3JlZCBiYXNpcyB3aXRoIGFcbiAgICAvLyBuZWdhdGl2ZSBkZXRlcm1pbmFudCwgYW5kIGV2ZXJ5IHN0cmFwIHJlbmRlcnMgaW5zaWRlIG91dCAtLSB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBkYXJrXG4gICAgLy8gc2xpdmVyIHJhdGhlciB0aGFuIGFuIG9idmlvdXNseSBmbGlwcGVkIGZhY2UsIHNvIGl0IHJlYWRzIGFzIGEgZ2VvbWV0cnkgYnVnLCBub3QgYSB3aW5kaW5nIG9uZS5cbiAgICBjb25zdCBzaWRlID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jcm9zc1ZlY3RvcnMoZGlyLCBucm0pLm5vcm1hbGl6ZSgpO1xuICAgIC8vIE92ZXJsYXAgdGhlIGpvaW50cyBieSB0aGUgdGhpY2tuZXNzIHNvIGNvbnNlY3V0aXZlIGJveGVzIGNsb3NlIHRoZSBtaXRyZSByYXRoZXIgdGhhblxuICAgIC8vIGxlYXZpbmcgYSB3ZWRnZSBvZiBkYXlsaWdodCBhdCBldmVyeSBzdGF0aW9uLlxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgbGVuICsgdCwgdCk7XG4gICAgZy5hcHBseU1hdHJpeDQobmV3IFRIUkVFLk1hdHJpeDQoKS5tYWtlQmFzaXMoc2lkZSwgZGlyLCBucm0pKTtcbiAgICBnLnRyYW5zbGF0ZShtaWQueCwgbWlkLnksIG1pZC56KTtcbiAgICBwYXJ0cy5wdXNoKGcpO1xuICB9XG4gIGNvbnN0IG91dCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IG91dCA6IHRpbnRHZW8ob3V0LCBoZXgpO1xufVxuXG4vKiogQSByb3RhdGVkIGJveDogW2N4LCBjeSwgY3osIHcsIGgsIGQsIHJ4LCByeSwgcnpdIHdpdGggdGhlIHJvdGF0aW9ucyBhcHBsaWVkIGluIHgsIHksIHogb3JkZXJcbiAqICBhYm91dCB0aGUgYm94J3Mgb3duIGNlbnRyZS4gQSBib25uZXQgbGlwLCBhIHJha2VkIG1pcnJvciBzdGVtLCBhIGNhbm9weSBzdGF5LiAqL1xuZnVuY3Rpb24gcmJveChiOiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShiWzNdLCBiWzRdLCBiWzVdKTtcbiAgaWYgKGJbNl0pIGcucm90YXRlWChiWzZdKTsgaWYgKGJbN10pIGcucm90YXRlWShiWzddKTsgaWYgKGJbOF0pIGcucm90YXRlWihiWzhdKTtcbiAgZy50cmFuc2xhdGUoYlswXSwgYlsxXSwgYlsyXSk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBiYXRjaCBvZiBib3hlcywgZWFjaCB0aW50ZWQsIG1lcmdlZDogW1toZXgsIGN4LCBjeSwgY3osIHcsIGgsIGQsIHJ4Pywgcnk/LCByej9dLCAuLi5dLiBUaGVcbiAqICB0cmltIGNvbXBvbmVudCBvZiBldmVyeSB2ZWhpY2xlIGlzIG9uZSBvZiB0aGVzZSAtLSBidW1wZXJzLCBncmlsbGUsIGxhbXBzLCBtaXJyb3JzLCBoYW5kbGVzLFxuICogIHN0ZXBzLCBhcmNoIGZsYXJlcyAtLSBzbyBmb3J0eSBwYXJ0cyByaWRlIG9uZSBzdWJtaXNzaW9uLiAqL1xuZnVuY3Rpb24gdGludGVkQm94ZXMobGlzdDogbnVtYmVyW11bXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gdGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSkpO1xufVxuXG4vKiogTWlycm9yIGEgYm94IGxpc3QgYWNyb3NzIHggPSAwIChsZWZ0L3JpZ2h0IHBhaXJzKS4gUm90YXRpb25zIGFib3V0IHkgYW5kIHogZmxpcCBzaWduLiAqL1xuZnVuY3Rpb24gbWlycm9yWChsaXN0OiBudW1iZXJbXVtdKTogbnVtYmVyW11bXSB7XG4gIHJldHVybiBsaXN0LmZsYXRNYXAoKGIpID0+IFtiLCBbYlswXSwgLWJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0sIGJbNl0sIGJbN10gPz8gMCwgLShiWzhdID8/IDApLCAtKGJbOV0gPz8gMCldXSk7XG59XG5cbi8qKiBBIHNlYW1sZXNzIENhbnZhcyAyRCB0aWxlOiBgZHJhdyhjdHgsIHNpemUpYCBwYWludHMgaXQsIGFuZCB0aGUgcmVzdWx0IGlzIGEgcmVwZWF0aW5nIHRleHR1cmVcbiAqICBpbiBzUkdCLiBVc2VkIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbiwgc28gdGhlIHRleHR1cmVsZXNzIGRlY2xhcmF0aW9uIHN0YW5kcyBhbmQgbm9cbiAqICBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzIHN5bnRoZXNpc2VkLiBSZXR1cm5zIG51bGwgd2hlcmUgdGhlcmUgaXMgbm8gRE9NICh0aGUgaGVhZGxlc3MgaGFybmVzc1xuICogIGhhcyBvbmU7IGEgbm9kZS1zaWRlIHByb2JlIGRvZXMgbm90KSwgYW5kIGV2ZXJ5IGNhbGxlciB0b2xlcmF0ZXMgbnVsbC4gKi9cbmZ1bmN0aW9uIGNhbnZhc1RpbGUoc2l6ZTogbnVtYmVyLCBkcmF3OiAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHM6IG51bWJlcikgPT4gdm9pZCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsO1xuICBjb25zdCBjdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpOyBjdi53aWR0aCA9IHNpemU7IGN2LmhlaWdodCA9IHNpemU7XG4gIC8vIHdpbGxSZWFkRnJlcXVlbnRseSBrZWVwcyB0aGUgdGlsZSBvbiB0aGUgQ1BVIHJhc3RlciBwYXRoOiBhIEdQVS1iYWNrZWQgY2FudmFzIGNvc3RzIHNlY29uZHMgcGVyXG4gIC8vIHRob3VzYW5kIHBhdGggZmlsbHMgd2hlcmUgdGhlIHNvZnR3YXJlIHBhdGggdGFrZXMgdGVucyBvZiBtaWxsaXNlY29uZHMuXG4gIGNvbnN0IGN0eCA9IGN2LmdldENvbnRleHQoJzJkJywgeyB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWUgfSkgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbDsgaWYgKCFjdHgpIHJldHVybiBudWxsO1xuICBkcmF3KGN0eCwgc2l6ZSk7XG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGN2KTtcbiAgdGV4LndyYXBTID0gdGV4LndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gIHRleC5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gIHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIHJldHVybiB0ZXg7XG59XG5cbi8qKiBEZXRlcm1pbmlzdGljIHBzZXVkby1yYW5kb20gZm9yIGNhbnZhcyBkcmVzc2luZyAtLSBhc3NpZ25lZCBieSBpbmRleCwgbmV2ZXIgTWF0aC5yYW5kb20sIHNvIHRoZVxuICogIG1vZGVsIGlzIGJ5dGUtaWRlbnRpY2FsIG9uIGV2ZXJ5IGJ1aWxkLiAqL1xuZnVuY3Rpb24gbGNnKHNlZWQ6IG51bWJlcik6ICgpID0+IG51bWJlciB7XG4gIGxldCBzID0gc2VlZCA+Pj4gMDtcbiAgcmV0dXJuICgpID0+IHsgcyA9IChzICogMTY2NDUyNSArIDEwMTM5MDQyMjMpID4+PiAwOyByZXR1cm4gcyAvIDQyOTQ5NjcyOTY7IH07XG59XG5cbi8qKlxuICogTVVEIC8gUk9BRC1HUklNRSB0aWxlLCBSRS1CQVNFRC4gVGhhaSByb2FkIG11ZCBpcyB0YW4gYW5kIEJSSUdIVEVSIHRoYW4gbW9zdCBwYWludCwgYW5kIGFcbiAqIG11bHRpcGxpZXIgY2Fubm90IGJyaWdodGVuOiBzbyB0aGUgcGFpbnQgbWF0ZXJpYWwgY2FycmllcyB0aGUgTVVEIEVOVkVMT1BFIGNvbG91ciAobWVhc3VyZWQgb25cbiAqIHRoZSBtdWRkeSBzaWxsKSwgdGhpcyB0aWxlIGNhcnJpZXMgdGhlIGNsZWFuIHBhaW50IGFzIGEgUkFUSU8gb2YgdGhhdCBlbnZlbG9wZSBvdmVyIG1vc3Qgb2YgaXRzXG4gKiBhcmVhIChgYmFzZWApLCBhbmQgdGhlIG11ZCBpcyBwYWludGVkIGFzIHdoaXRlIC0tIGkuZS4gdGhlIGVudmVsb3BlIGl0c2VsZiAtLSBpbiBhIHdhc2ggcmlzaW5nXG4gKiBmcm9tIHRoZSBib3R0b20gdG8gYGNvdmVyYWdlYCBvZiB0aGUgdGlsZSBoZWlnaHQgcGx1cyBzcGxhdHRlciBhYm92ZSBpdC4gQm91bmQgd2l0aCBoZWlnaHQgVVZzXG4gKiBzbyB2ID0gMCBpcyB0aGUgZ3JvdW5kIGFuZCB0aGUgd2FzaCBzaXRzIG9uIHRoZSBzaWxscyBhbmQgYXJjaGVzLlxuICovXG5mdW5jdGlvbiBtdWRUaWxlKHNpemU6IG51bWJlciwgYmFzZTogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMzKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHRvSGV4ID0gKHY6IG51bWJlcltdKSA9PiAnIycgKyB2Lm1hcCgoYykgPT4gTWF0aC5yb3VuZChNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBjKSkgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gdG9IZXgoYmFzZSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdmVyYWdlKSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LDI1NSwyNTUsMC44OCknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjQ1LCAncmdiYSgyNTUsMjU1LDI1NSwwLjQ1KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwyNTUsMjU1LDApJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDkwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDIuMikgKiBzICogY292ZXJhZ2UgKiAxLjM1O1xuICAgICAgY29uc3QgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA1O1xuICAgICAgY29uc3QgYSA9IDAuMDggKyBybmQoKSAqIDAuMjg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyNTUsMjUwLDI0MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1MCwyNDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gYSBsaXR0bGUgZ3JhaW4gc28gdGhlIGNsZWFuIHBhaW50IGlzIG5vdCBhIGZsYXQgZmlsbFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTIwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzOyBjb25zdCB2ID0gcm5kKCkgPCAwLjUgPyAwIDogMjU1O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMDM1KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAxLjUsIDEuNSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIERVU1QgdGlsZSBmb3IgcGFpbnQgdGhhdCBpcyBCUklHSFRFUiB0aGFuIGl0cyBkaXJ0IChhIHdoaXRlIHZhbik6IGEgcGxhaW4gbXVsdGlwbGllciwgd2hpdGVcbiAqICBiYXNlIGFuZCBhIGdyZXktYnJvd24gd2FzaCByaXNpbmcgZnJvbSB0aGUgZ3JvdW5kIHRvIGBjb3ZlcmFnZWAsIHBsdXMgc29mdCBibG9icy4gKi9cbmZ1bmN0aW9uIGR1c3RUaWxlKHNpemU6IG51bWJlciwgZHVzdDogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMwKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBjID0gZHVzdC5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogTWF0aC5taW4oMSwgdikpKTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdmVyYWdlKSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC45KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC40KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDIuMikgKiBzICogY292ZXJhZ2UgKiAxLjQsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wNSwgYSA9IDAuMDggKyBybmQoKSAqIDAuMjU7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogQ09SUlVHQVRFRCBTSEVFVCB0aWxlOiB2ZXJ0aWNhbCByaWRnZXMgYXMgYSBzaW5lLXNoYWRlZCBzdHJpcGUgZmllbGQsIHVzZWQgYXMgbWFwIEFORCBidW1wTWFwIG9uXG4gKiAgYSBzb25ndGhhZXcgcm9vZiBzbyB0aGUgcmlkZ2VzIGNhdGNoIGxpZ2h0LiBgcGl0Y2hgIHJpZGdlcyBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIGNvcnJ1Z2F0aW9uVGlsZShzaXplOiBudW1iZXIsIHBpdGNoOiBudW1iZXIsIGxvdzogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4KyspIHtcbiAgICAgIGNvbnN0IHQgPSAoTWF0aC5jb3MoeCAvIHMgKiBNYXRoLlBJICogMiAqIHBpdGNoKSArIDEpIC8gMjsgICAvLyAxIGF0IGNyZXN0LCAwIGluIHRyb3VnaFxuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogKGxvdyArICgxIC0gbG93KSAqIHQpKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gNCArIHJuZCgpICogcyAqIDAuMDg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGNvbnN0IGEgPSAwLjA4ICsgcm5kKCkgKiAwLjE4O1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDEyMCw5MCw2MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTIwLDkwLDYwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBQTEFOSyB0aWxlOiBib2FyZHMgcnVubmluZyBhbG9uZyB1IHdpdGggZGFyayBqb2ludHMgYW5kIGdyYWluIHN0cmVha3MsIGEgbXVsdGlwbGllciBvbiBhXG4gKiAgbWVhc3VyZWQgdGltYmVyIGFsYmVkby4gYGJvYXJkc2AgcGVyIHRpbGUuICovXG5mdW5jdGlvbiBwbGFua1RpbGUoc2l6ZTogbnVtYmVyLCBib2FyZHM6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBiaCA9IHMgLyBib2FyZHM7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBib2FyZHM7IGIrKykge1xuICAgICAgY29uc3QgdG9uZSA9IDAuODIgKyBybmQoKSAqIDAuMTg7XG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0b25lKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdCgwLCBiICogYmgsIHMsIGJoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCwzMCwyMCwwLjU1KSc7IGN0eC5maWxsUmVjdCgwLCBiICogYmgsIHMsIE1hdGgubWF4KDEsIHMgKiAwLjAwNikpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAxNDsgaysrKSB7XG4gICAgICAgIGNvbnN0IHkgPSBiICogYmggKyBybmQoKSAqIGJoLCBsZW4gPSBzICogKDAuMiArIHJuZCgpICogMC42KSwgeCA9IHJuZCgpICogcztcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoNjAsNDUsMzAsJHswLjA1ICsgcm5kKCkgKiAwLjEyfSlgOyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggLSBzLCB5KTsgY3R4LmxpbmVUbyh4IC0gcyArIGxlbiwgeSk7IGN0eC5tb3ZlVG8oeCwgeSk7IGN0eC5saW5lVG8oeCArIGxlbiwgeSk7IGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogUlVTVCB0aWxlOiBhIG11bHRpcGxpZXIgb2YgYmxvdGNoZWQgb3JhbmdlLWJyb3duIG92ZXIgYSBiYXNlLCBkYXJrIGNvcmVzIGxpZnRlZCBzbyBub3RoaW5nIGxhbmRzXG4gKiAgb24gdGhlIGx1bWEtNTggaG9sZSBnYXRlLiAqL1xuZnVuY3Rpb24gcnVzdFRpbGUoc2l6ZTogbnVtYmVyLCByYXRpbzogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgZGVuc2l0eSA9IDkwKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbnNpdHk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA5O1xuICAgICAgY29uc3QgYSA9IDAuMTUgKyBybmQoKSAqIDAuNDU7XG4gICAgICBjb25zdCBjID0gcmF0aW8ubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIHYpKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogSGVpZ2h0LWtleWVkIFVWczogdiBpcyB3b3JsZCBIRUlHSFQgb3ZlciBgc2NhbGVgIG1ldHJlcywgdSBydW5zIGFsb25nIHRoZSBkb21pbmFudCBob3Jpem9udGFsXG4gKiAgYXhpcy4gQSBtdWQgdGlsZSBib3VuZCB0aGlzIHdheSBkYXJrZW5zIHRoZSBzaWxscyBhbmQgc3RheXMgY2xlYW4gb24gdGhlIHJvb2YgLS0gYSBwbGFpbiBib3hcbiAqICBwcm9qZWN0aW9uIHdvdWxkIHJlcGVhdCB0aGUgdGlsZSdzIGRpcnR5IGJhbmQgYWNyb3NzIHRoZSByb29mIGFzIHN0cmlwZXMuICovXG4vKipcbiAqIFNIT1JUIEZVUjogYSBzZWFtbGVzcyB0aWxlIG9mIGRlbnNlLCBzaG9ydCwgZGlyZWN0aW9uYWwgaGFpciBzdHJva2VzIG92ZXIgYSBjbG91ZHkgdG9uZSBkcmlmdCwgYXMgYVxuICogbXVsdGlwbHkgbWFwIChhbmQgYnVtcCkgb24gYSB3aGl0ZSB2ZXJ0ZXgtY29sb3VyZWQgY29hdC4gVGhlIHN0cm9rZXMgcnVuIGFsb25nIHYgd2l0aCBhIGppdHRlcmVkXG4gKiBsZWFuIGFuZCBhIG5hcnJvdyB0b25lIHNwcmVhZCAtLSBhIHdpZGUgc3ByZWFkIHJlYWRzIGFzIHNjYWxlcywgYSBwZXJmZWN0IGxheSByZWFkcyBhcyBjb21iZWRcbiAqIHBsYXN0aWMuIGBwYXRjaGVzYCBhZGRzIGEgZmV3IHNvZnQgcGluay1ncmV5IGJhcmUgcGF0Y2hlcywgdGhlIG1hbmdlIG1hcmtzIG9mIGEgc3RyZWV0IGRvZy5cbiAqL1xuZnVuY3Rpb24gZnVyVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCB0b25lID0gby50b25lID8/IFswLjcyLCAwLjY2LCAwLjU4XSwgbSA9IHMgKiAwLjA2O1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBjbG91ZHkgZHJpZnQgdW5kZXJuZWF0aCBzbyB0aGUgY29hdCBpcyBub3Qgb25lIGZsYXQgdmFsdWVcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmNsb3VkcyA/PyAyNik7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wOCArIHJuZCgpICogMC4xOCksIGEgPSAwLjA0ICsgcm5kKCkgKiAwLjEwO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IodG9uZSl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih0b25lKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGJhcmUgcGF0Y2hlczogc29mdCwgc3BhcnNlLCB3YXJtIGdyZXktcGlua1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ucGF0Y2hlcyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA0ICsgcm5kKCkgKiAwLjA1KSwgcGMgPSBvLnBhdGNoVG9uZSA/PyBbMC43MiwgMC41NiwgMC41Ml07XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihwYyl9LDAuNTUpYCk7IGcyLmFkZENvbG9yU3RvcCgwLjYsIGByZ2JhKCR7cmdiKHBjKX0sMC4zKWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocGMpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciAqIDEuMywgciwgcm5kKCkgKiBNYXRoLlBJLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gaGFpciBzdHJva2VzOiBkYXJrIGFuZCBsaWdodCwgc2hvcnQsIGxlYW5pbmcgd2l0aGluICstMjIgZGVncmVlcyBvZiB2XG4gICAgY29uc3Qgc3Ryb2tlcyA9IG8uc3Ryb2tlcyA/PyA1MDAwLCBsZW4gPSBzICogKG8ubGVuZ3RoID8/IDAuMDIyKTtcbiAgICBjb25zdCBkcmF3U3Ryb2tlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCBkeDogbnVtYmVyLCBkeTogbnVtYmVyLCB3OiBudW1iZXIpID0+IHtcbiAgICAgIGN0eC5saW5lV2lkdGggPSB3OyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSk7IGN0eC5saW5lVG8oeCArIGR4LCB5ICsgZHkpOyBjdHguc3Ryb2tlKCk7XG4gICAgICBpZiAoeCA8IG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBzLCB5KTsgY3R4LmxpbmVUbyh4ICsgcyArIGR4LCB5ICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIGlmICh4ID4gcyAtIG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggLSBzLCB5KTsgY3R4LmxpbmVUbyh4IC0gcyArIGR4LCB5ICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIGlmICh5IDwgbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSArIHMpOyBjdHgubGluZVRvKHggKyBkeCwgeSArIHMgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHkgPiBzIC0gbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSAtIHMpOyBjdHgubGluZVRvKHggKyBkeCwgeSAtIHMgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgIH07XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Ryb2tlczsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCB0aCA9IChybmQoKSAtIDAuNSkgKiAwLjc4LCBsID0gbGVuICogKDAuNiArIHJuZCgpICogMC44KTtcbiAgICAgIGNvbnN0IGxpZ2h0ID0gcm5kKCkgPCAwLjQyO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IGxpZ2h0ID8gJ3NjcmVlbicgOiAnbXVsdGlwbHknO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gbGlnaHQgPyBgcmdiYSgyNTUsMjUwLDI0MCwkezAuMDUgKyBybmQoKSAqIDAuMTB9KWAgOiBgcmdiYSgke3JnYih0b25lKX0sJHswLjA2ICsgcm5kKCkgKiAwLjE0fSlgO1xuICAgICAgZHJhd1N0cm9rZSh4LCB5LCBNYXRoLnNpbih0aCkgKiBsLCBNYXRoLmNvcyh0aCkgKiBsLCAwLjYgKyBybmQoKSAqIDEuMik7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0VVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheiA9IE1hdGguYWJzKG5ybS5nZXRaKGkpKTtcbiAgICBjb25zdCB1ID0gYXggPj0gYXogPyBwLmdldFooaSkgOiBwLmdldFgoaSk7XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gcC5nZXRZKGkpIC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBPZmZzZXQgYSBjbG9zZWQgcG9seWdvbiBvZiBbeiwgeV0gcG9pbnRzIG91dHdhcmQgYnkgYGRgIGFsb25nIHRoZSBhdmVyYWdlZCBlZGdlIG5vcm1hbHMuIFVzZWRcbiAqICB0byBzdGFuZCB0aGUgZ2xhc3MgYmFuZCBhIGZldyBtaWxsaW1ldHJlcyBwcm91ZCBvZiB0aGUgYm9keSdzIHJha2VkIHdpbmRzY3JlZW4gYW5kIHJlYXIgZ2xhc3NcbiAqICBmYWNlcywgc28gdGhlIHBhbmUgYW5kIHRoZSBib2R5IG5ldmVyIHNoYXJlIGEgcGxhbmUuIFdpbmRpbmc6IGNvdW50ZXItY2xvY2t3aXNlIGluICh6LCB5KS4gKi9cbmZ1bmN0aW9uIG9mZnNldFBvbHkocHRzOiBudW1iZXJbXVtdLCBkOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgbiA9IHB0cy5sZW5ndGgsIG91dDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBwdHNbKGkgKyBuIC0gMSkgJSBuXSwgYiA9IHB0c1tpXSwgYyA9IHB0c1soaSArIDEpICUgbl07XG4gICAgY29uc3QgZTEgPSBbYlswXSAtIGFbMF0sIGJbMV0gLSBhWzFdXSwgZTIgPSBbY1swXSAtIGJbMF0sIGNbMV0gLSBiWzFdXTtcbiAgICBjb25zdCBsMSA9IE1hdGguaHlwb3QoZTFbMF0sIGUxWzFdKSB8fCAxLCBsMiA9IE1hdGguaHlwb3QoZTJbMF0sIGUyWzFdKSB8fCAxO1xuICAgIC8vIG91dHdhcmQgbm9ybWFsIG9mIGEgQ0NXIGVkZ2UgKGR6LCBkeSkgaXMgKGR5LCAtZHopXG4gICAgY29uc3QgbjEgPSBbZTFbMV0gLyBsMSwgLWUxWzBdIC8gbDFdLCBuMiA9IFtlMlsxXSAvIGwyLCAtZTJbMF0gLyBsMl07XG4gICAgbGV0IG54ID0gbjFbMF0gKyBuMlswXSwgbnkgPSBuMVsxXSArIG4yWzFdO1xuICAgIGNvbnN0IG5sID0gTWF0aC5oeXBvdChueCwgbnkpIHx8IDE7IG54IC89IG5sOyBueSAvPSBubDtcbiAgICBjb25zdCBjb3NIYWxmID0gTWF0aC5tYXgoMC4zNSwgbnggKiBuMVswXSArIG55ICogbjFbMV0pO1xuICAgIG91dC5wdXNoKFtiWzBdICsgbnggKiBkIC8gY29zSGFsZiwgYlsxXSArIG55ICogZCAvIGNvc0hhbGZdKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKiogQSB3aGVlbC1hcmNoIEZMQVJFOiBhIGhhbGYtYW5udWx1cyBpbiB0aGUgKHosIHkpIHBsYW5lLCBleHRydWRlZCBhY3Jvc3MgeDAuLngxIG9uIGJvdGggc2lkZXNcbiAqICBhbmQgdGludGVkLiBTdGFuZHMgcHJvdWQgb2YgdGhlIGJvZHkgc2lkZSBhbmQgaGlkZXMgdGhlIGFyY2gncyBjdXQgZWRnZS4gKi9cbmZ1bmN0aW9uIGZsYXJlKHpjOiBudW1iZXIsIHljOiBudW1iZXIsIHJJbjogbnVtYmVyLCByT3V0OiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIGhleDogbnVtYmVyLCBuID0gOSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBjb25zdCB6ID0gemMgKyBNYXRoLmNvcyhhKSAqIHJPdXQsIHkgPSB5YyArIE1hdGguc2luKGEpICogck91dDsgaWYgKGkgPT09IDApIHNoYXBlLm1vdmVUbyh6LCB5KTsgZWxzZSBzaGFwZS5saW5lVG8oeiwgeSk7IH1cbiAgZm9yIChsZXQgaSA9IG47IGkgPj0gMDsgaS0tKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBzaGFwZS5saW5lVG8oemMgKyBNYXRoLmNvcyhhKSAqIHJJbiwgeWMgKyBNYXRoLnNpbihhKSAqIHJJbik7IH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IG1rID0gKHN4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeDEgLSB4MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSB9KTtcbiAgICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTsgZy50cmFuc2xhdGUoeDEsIDAsIDApOyBpZiAoc3ggPCAwKSBnLnNjYWxlKC0xLCAxLCAxKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiB0aW50R2VvKGcsIGhleCk7XG4gIH07XG4gIGNvbnN0IGwgPSBtaygtMSksIHIgPSBtaygxKTtcbiAgLy8gYSBuZWdhdGl2ZSBzY2FsZSBmbGlwcyB0aGUgd2luZGluZzsgcmVzdG9yZSBpdCBzbyB0aGUgZmxhcmUgaXMgbm90IGluc2lkZSBvdXRcbiAgY29uc3QgaWR4ID0gbC5nZXRJbmRleCgpOyBpZiAoaWR4KSB7IGNvbnN0IGEgPSBpZHguYXJyYXkgYXMgYW55OyBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpICs9IDMpIHsgY29uc3QgdCA9IGFbaSArIDFdOyBhW2kgKyAxXSA9IGFbaSArIDJdOyBhW2kgKyAyXSA9IHQ7IH0gaWR4Lm5lZWRzVXBkYXRlID0gdHJ1ZTsgfVxuICBlbHNlIHsgY29uc3QgcCA9IGwuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpOyBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkgKz0gMykgeyBjb25zdCB4MV8gPSBwLmdldFgoaSArIDEpLCB5MV8gPSBwLmdldFkoaSArIDEpLCB6MV8gPSBwLmdldFooaSArIDEpOyBwLnNldFhZWihpICsgMSwgcC5nZXRYKGkgKyAyKSwgcC5nZXRZKGkgKyAyKSwgcC5nZXRaKGkgKyAyKSk7IHAuc2V0WFlaKGkgKyAyLCB4MV8sIHkxXywgejFfKTsgfSB9XG4gIGwuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhbbCwgcl0pO1xufVxuXG4vKipcbiAqIFJJQkJFRCBST1VORCBUT1AgdGlsZTogdGhlIHdob2xlIHRvcCBvZiBhIG1vdWxkZWQgZ2FyZGVuIHRhYmxlIGRyYXduIE9OQ0UgaW4gcGxhbiwgYm91bmQgd2l0aFxuICogYHBsYW5VVmAgYXQgdGhlIHRhYmxlJ3MgZGlhbWV0ZXIsIGFzIG1hcCBBTkQgYnVtcE1hcCAtLSBzbyB0aGUgcmFkaWFsIHJpYmJpbmcgaXMgYSBQQlIgdGV4dHVyZSBvblxuICogYSBzb2xpZCBsYXRoZSByYXRoZXIgdGhhbiBlaWdodHkgYm94ZXMuIFJhZGlpIGFyZSBmcmFjdGlvbnMgb2YgdGhlIHRpbGUgKG9mIHRoZSBkaWFtZXRlcik6XG4gKiAgYHJpbmdgICBpbm5lciBlZGdlIG9mIHRoZSBmbGF0IG91dGVyIHJpbmcgICBgZGlzY2AgdGhlIHJhaXNlZCBjZW50cmUgZGlzYyAgIGBob2xlYCB0aGUgdW1icmVsbGEgaG9sZVxuICogIGByaWJzYCAgcmlkZ2UgY291bnQgICAgICAgICAgICAgICAgICAgICAgICAgIGBncm9vdmVgIHNoYXJlIG9mIGEgcmliIHBpdGNoIHRoYXQgaXMgZ3Jvb3ZlICgwLi4xKVxuICogVG9uZXMgYXJlIFJBVElPUyBvZiB0aGUgY2xlYW4gcGxhc3RpYyB0aGUgbWF0ZXJpYWwgY2FycmllcyAoMSA9IHRoZSByaWRnZSBjcm93bik6IGBsb3dgIGlzIHRoZVxuICogZ3Jvb3ZlIGZsb29yLCBhbmQgZXZlcnkgcmlkZ2UgaGFzIGEgc29mdCBzaG91bGRlciBpbnRvIGl0IHNvIHRoZSBidW1wIHJlYWRzIGFzIGEgcm91bmRlZCByaWIsIG5vdCBhXG4gKiBjb21iLiBHcmltZSBzZXR0bGVzIGluIHRoZSBncm9vdmVzIGFzIGJyb3duIHNwZWNrcyAoYHNwZWNrc2ApIGFuZCBhIGZhaW50IHdhc2g7IHRoZSBkaXNjIGNhcnJpZXNcbiAqIGZvdXIgbW91bGRlZCBjcm9zcy1tYXJrcyBhbmQgdGhlIHJpbmcvZmllbGQvZGlzYyBzdGVwcyBjYXJyeSBhIGRhcmsgaGFpcmxpbmUgd2hlcmUgdGhlIG1vdWxkaW5nXG4gKiB0dXJucyBkb3duLiBFdmVyeXRoaW5nIG91dHNpZGUgciA9IDAuNSBpcyB0aGUgcmluZyB0b25lLCB3aGljaCBpcyB3aGF0IHRoZSBza2lydCBzYW1wbGVzLlxuICovXG5mdW5jdGlvbiByaWJUb3BUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgY3ggPSBzIC8gMiwgY3kgPSBzIC8gMjtcbiAgICBjb25zdCBSID0gKGY6IG51bWJlcikgPT4gZiAqIHM7XG4gICAgY29uc3QgcmluZyA9IG8ucmluZyA/PyAwLjQ0LCBkaXNjID0gby5kaXNjID8/IDAuMTQ3LCBob2xlID0gby5ob2xlID8/IDAuMDIyNTtcbiAgICBjb25zdCBOID0gby5yaWJzID8/IDg0LCBncm9vdmUgPSBvLmdyb292ZSA/PyAwLjIyLCBsb3cgPSBvLmxvdyA/PyAwLjc0O1xuICAgIGNvbnN0IHRvbmUgPSAocjogbnVtYmVyKSA9PiB7IGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIE1hdGgubWluKDEsIE1hdGgubWF4KDAsIHIpKSk7IHJldHVybiBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IH07XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRvbmUoby5yaW5nVG9uZSA/PyAwLjk4NSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyB0aGUgcmliYmVkIEZJRUxELCBwZXIgdGV4ZWw6IHRoZSByaWIgcHJvZmlsZSBpcyBhIGZ1bmN0aW9uIG9mIGFuZ2xlIGFsb25lLCBzbyBpdCBpcyB3cml0dGVuXG4gICAgLy8gYXMgYW4gYW5udWx1cyBvZiByYWRpYWwgd2VkZ2VzIC0tIG9uZSBwYXRoIHBlciByaWIgd2l0aCBhIGdyYWRpZW50IGFjcm9zcyBpdHMgcGl0Y2ggaXMgZW5vdWdoXG4gICAgLy8gcmVzb2x1dGlvbiBmb3IgdGhlIGNyb3ducywgYW5kIHRoZSBwZXItdGV4ZWwgcGFzcyBiZWxvdyB3cml0ZXMgdGhlIHNob3VsZGVycy5cbiAgICBjb25zdCBpbWcgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHMsIHMpLCBkID0gaW1nLmRhdGE7XG4gICAgY29uc3QgcjAgPSBSKGRpc2MpLCByMSA9IFIocmluZyk7XG4gICAgY29uc3Qgd2FzaCA9IG8ud2FzaCA/PyAwLjA2O1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgczsgeSsrKSBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgY29uc3QgZHggPSB4ICsgMC41IC0gY3gsIGR5ID0geSArIDAuNSAtIGN5LCByID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuICAgICAgaWYgKHIgPCByMCAtIDEuNSB8fCByID4gcjEgKyAxLjUpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgYSA9IE1hdGguYXRhbjIoZHksIGR4KTtcbiAgICAgIC8vIHBoYXNlIGFjcm9zcyBvbmUgcmliIHBpdGNoLCAwIGF0IHRoZSByaWRnZSBjcm93biwgMSBhdCB0aGUgbmV4dCBjcm93blxuICAgICAgY29uc3QgcGggPSAoKGEgLyAoTWF0aC5QSSAqIDIpKSAqIE4gKyBOKSAlIDE7XG4gICAgICBjb25zdCBkaXN0ID0gTWF0aC5taW4ocGgsIDEgLSBwaCkgKiAyOyAgICAgICAgICAgICAgIC8vIDAgY3Jvd24gLi4gMSBncm9vdmUgY2VudHJlXG4gICAgICBjb25zdCBjcm93biA9IDEgLSBncm9vdmU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNoYXJlIG9mIHRoZSBwaXRjaCB0aGF0IGlzIHJpZGdlXG4gICAgICBsZXQgaDogbnVtYmVyO1xuICAgICAgaWYgKGRpc3QgPCBjcm93bikgeyBjb25zdCB0ID0gZGlzdCAvIGNyb3duOyBoID0gMSAtIDAuMTAgKiB0ICogdDsgfSAgICAvLyBhIGdlbnRseSBkb21lZCBjcm93blxuICAgICAgZWxzZSB7IGNvbnN0IHQgPSAoZGlzdCAtIGNyb3duKSAvIGdyb292ZTsgaCA9IGxvdyArICgxIC0gMC4xMCAtIGxvdykgKiAoMSAtIE1hdGguc2luKHQgKiBNYXRoLlBJIC8gMikpICogMC45OyB9XG4gICAgICAvLyB0aGUgZ3Jvb3ZlIGZsb29yIGhvbGRzIGEgd2FzaCBvZiBkdXN0IHRoYXQgdGhlIGNyb3ducyBzaGVkXG4gICAgICBjb25zdCBnID0gZGlzdCA+IGNyb3duID8gMSAtIHdhc2ggOiAxO1xuICAgICAgY29uc3QgZWRnZSA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChyIC0gKHIwIC0gMS41KSkgLyAzKSkgKiBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAoKHIxICsgMS41KSAtIHIpIC8gMykpO1xuICAgICAgY29uc3QgdiA9IDI1NSAqIChoICogZyAqIGVkZ2UgKyAoby5yaW5nVG9uZSA/PyAwLjk4NSkgKiAoMSAtIGVkZ2UpKTtcbiAgICAgIGNvbnN0IGkgPSAoeSAqIHMgKyB4KSAqIDQ7XG4gICAgICBkW2ldID0gZFtpICsgMV0gPSBkW2kgKyAyXSA9IE1hdGgucm91bmQodik7IGRbaSArIDNdID0gMjU1O1xuICAgIH1cbiAgICBjdHgucHV0SW1hZ2VEYXRhKGltZywgMCwgMCk7XG4gICAgLy8gdGhlIHJhaXNlZCBjZW50cmUgZGlzYzogYSBoYWlyIGJyaWdodGVyIHRoYW4gdGhlIHJpbmcgKGl0IGlzIHRoZSBoaWdoZXN0IHN1cmZhY2UpIHdpdGggYSBkYXJrXG4gICAgLy8gc3RlcCBhdCBpdHMgZWRnZSwgZm91ciBtb3VsZGVkIGNyb3NzLW1hcmtzLCBhbmQgdGhlIGhvbGUgYXMgYSBkYXJrIHdlbGxcbiAgICBjdHguZmlsbFN0eWxlID0gdG9uZShvLmRpc2NUb25lID8/IDEuMCk7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyhjeCwgY3ksIHIwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdG9uZShsb3cpOyBjdHgubGluZVdpZHRoID0gTWF0aC5tYXgoMSwgcyAqIDAuMDAyNSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKGN4LCBjeSwgcjAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyhjeCwgY3ksIHIxLCAwLCBNYXRoLlBJICogMik7IGN0eC5zdHJva2UoKTtcbiAgICBjdHgubGluZVdpZHRoID0gTWF0aC5tYXgoMSwgcyAqIDAuMDA0KTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgICAgY29uc3QgYSA9IGsgKiBNYXRoLlBJIC8gMiwgaWEgPSBSKGhvbGUpICsgcyAqIDAuMDEyLCBvYSA9IHIwIC0gcyAqIDAuMDEyO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKGN4ICsgTWF0aC5jb3MoYSkgKiBpYSwgY3kgKyBNYXRoLnNpbihhKSAqIGlhKTsgY3R4LmxpbmVUbyhjeCArIE1hdGguY29zKGEpICogb2EsIGN5ICsgTWF0aC5zaW4oYSkgKiBvYSk7IGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRvbmUoby5ob2xlVG9uZSA/PyAwLjM1KTsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKGN4LCBjeSwgUihob2xlKSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgIC8vIGdyaW1lOiBydXN0LWJyb3duIHNwZWNrcyBhbmQgc2hvcnQgc3RyZWFrcyBseWluZyBpbiB0aGUgZ3Jvb3ZlcywgZGVuc2VyIHRvd2FyZCB0aGUgcmltIHdoZXJlXG4gICAgLy8gdGhlIHJhaW4gbGVhdmVzIHRoZW07IGEgZmV3IHBhbGUgc2N1ZmZzIG9uIHRoZSByaW5nXG4gICAgY29uc3Qgc3BlY2tzID0gby5zcGVja3MgPz8gOTAwO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BlY2tzOyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCByciA9IHIwICsgKHIxIC0gcjApICogTWF0aC5wb3cocm5kKCksIDAuNik7XG4gICAgICAvLyBzbmFwIHRvIHRoZSBuZWFyZXN0IGdyb292ZSBjZW50cmVcbiAgICAgIGNvbnN0IGsgPSBNYXRoLnJvdW5kKChhIC8gKE1hdGguUEkgKiAyKSkgKiBOIC0gMC41KSArIDAuNSwgZ2EgPSBrIC8gTiAqIE1hdGguUEkgKiAyO1xuICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoZ2EpICogcnIsIHkgPSBjeSArIE1hdGguc2luKGdhKSAqIHJyO1xuICAgICAgY29uc3QgbGVuID0gMSArIHJuZCgpICogcyAqIDAuMDEyLCB3ID0gMC44ICsgcm5kKCkgKiBzICogMC4wMDE1LCBhbCA9IDAuMjUgKyBybmQoKSAqIDAuNDU7XG4gICAgICBjdHguc2F2ZSgpOyBjdHgudHJhbnNsYXRlKHgsIHkpOyBjdHgucm90YXRlKGdhKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBybmQoKSA8IDAuNTUgPyBgcmdiYSgxMjIsODQsNTIsJHthbH0pYCA6IGByZ2JhKDE1MCwxNDAsMTI1LCR7YWx9KWA7XG4gICAgICBjdHguZmlsbFJlY3QoLWxlbiAvIDIsIC13IC8gMiwgbGVuLCB3KTsgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zY3VmZnMgPz8gNDApOyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCByciA9IHIxICsgKFIoMC41KSAtIHIxKSAqIHJuZCgpO1xuICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiByciwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiByciwgciA9IDEgKyBybmQoKSAqIHMgKiAwLjAwNDtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgxMzAsMTIwLDEwNSwkezAuMTAgKyBybmQoKSAqIDAuMjV9KWA7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIEJpbmQgYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSB0byBhIG1hdGVyaWFsIGFzIG1hcCAoYW5kIGJ1bXApLCBsZWF2aW5nIHRoZSB0ZXh0dXJlbGVzc1xuICogIGRlY2xhcmF0aW9uIGludGFjdDogbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpcyBzeW50aGVzaXNlZCwgdGhlIG1lYXN1cmVkIGNvbG91ciBzdGF5cyB0aGVcbiAqICBtdWx0aXBsaWNhbmQsIGFuZCB0aGUgd2hvbGUgdGhpbmcgY29zdHMgb25lIGNhbnZhcy4gKi9cbmZ1bmN0aW9uIGJpbmRUaWxlKG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwsIHRleDogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwsIGJ1bXAgPSAwKTogdm9pZCB7XG4gIGlmICghdGV4KSByZXR1cm47XG4gIG1hdC5tYXAgPSB0ZXg7XG4gIGlmIChidW1wID4gMCkgeyBtYXQuYnVtcE1hcCA9IHRleDsgbWF0LmJ1bXBTY2FsZSA9IGJ1bXA7IH1cbiAgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbn1cblxuXG4vKipcbiAqIEEgRFJBUEVEIFNIRUVUOiBgaGVpZ2h0c1tqXVtpXWAgaXMgdGhlIHRvcCBzdXJmYWNlIGF0IHggPSB4MC4ueDEgKGkgb3ZlciBueCkgYW5kIHogPSB6MC4uejEgKGogb3ZlclxuICogbnopOyB0aGUgc2hlZXQgaXMgYHRgIHRoaWNrLiBUb3AgYW5kIHVuZGVyc2lkZSBhcmUgc21vb3RoLXNoYWRlZCBncmlkcywgdGhlIGZvdXIgZWRnZXMgYXJlIGZsYXRcbiAqIHN0cmlwcyB3b3VuZCBvdXR3YXJkLiBBIHRhcnAgY2Fub3B5IGlzIGEgcmlkZ2UgbGluZSBtaW51cyB0aGUgc2FnIGJldHdlZW4gaXRzIHBvbGVzIG1pbnVzIHRoZVxuICogZHJvb3Agb2YgaXRzIGZyZWUgZWRnZXMgLS0gY2xvdGgsIHdoZXJlIGEgc2xhYiByZWFkcyBhcyBhIHBhaW50ZWQgYm94LlxuICovXG5mdW5jdGlvbiBzaGVldChzOiBhbnkpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IG54OiBudW1iZXIgPSBzLm54LCBuejogbnVtYmVyID0gcy5ueiwgSGg6IG51bWJlcltdW10gPSBzLmhlaWdodHMsIHQ6IG51bWJlciA9IHMudCA/PyAwLjAxMjtcbiAgY29uc3QgWCA9IChpOiBudW1iZXIpID0+IHMueDAgKyAocy54MSAtIHMueDApICogaSAvIG54O1xuICAvLyBgenNgIGdpdmVzIHRoZSB6IFNUQVRJT05TIGV4cGxpY2l0bHkgaW5zdGVhZCBvZiBkaXZpZGluZyB6MC4uejEgZXZlbmx5LiBBIHJvb2Ygd2hvc2UgZWF2ZSBhbmRcbiAgLy8gcmFrZSB3YW50IGEgbmFycm93IHJ1c3RlZCBiYW5kIG5lZWRzIHJvd3MgMC4xMCBtIGluIGZyb20gdGhlIGVkZ2UsIGFuZCByZWFjaGluZyB0aGF0IGJ5IHJhaXNpbmdcbiAgLy8gbnogYWxvbmUgd291bGQgbXVsdGlwbHkgdGhlIHdob2xlIGdyaWQgLS0gMTA0IGZsdXRlIGNvbHVtbnMgaXMgd2hhdCBtYWtlcyBhIHJvdyBleHBlbnNpdmUuXG4gIGNvbnN0IFpTOiBudW1iZXJbXSB8IG51bGwgPSBBcnJheS5pc0FycmF5KHMuenMpID8gcy56cyA6IG51bGw7XG4gIGNvbnN0IFogPSAoajogbnVtYmVyKSA9PiAoWlMgPyBaU1tqXSA6IHMuejAgKyAocy56MSAtIHMuejApICogaiAvIG56KTtcbiAgY29uc3QgZ3JpZCA9ICh5T2ZmOiBudW1iZXIsIGZsaXA6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIHV2OiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gbno7IGorKykgZm9yIChsZXQgaSA9IDA7IGkgPD0gbng7IGkrKykgeyBwb3MucHVzaChYKGkpLCBIaFtqXVtpXSArIHlPZmYsIFooaikpOyB1di5wdXNoKGkgLyBueCwgaiAvIG56KTsgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbno7IGorKykgZm9yIChsZXQgaSA9IDA7IGkgPCBueDsgaSsrKSB7XG4gICAgICBjb25zdCBhID0gaiAqIChueCArIDEpICsgaSwgYiA9IGEgKyAxLCBjID0gYSArIG54ICsgMSwgZCA9IGMgKyAxO1xuICAgICAgaWYgKGZsaXApIGlkeC5wdXNoKGEsIGIsIGMsIGIsIGQsIGMpOyBlbHNlIGlkeC5wdXNoKGEsIGMsIGIsIGIsIGMsIGQpO1xuICAgIH1cbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zLCAzKSk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICBnLnNldEluZGV4KGlkeCk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIGc7XG4gIH07XG4gIC8vIGBoZXhUb3BgIC8gYGhleFVuZGVyYDogYSBjb2xvdXIgYXR0cmlidXRlIHdyaXR0ZW4gcGVyIGdyaWQsIHNvIGEgdGFycCBjYW4gYmUgYmx1ZSBvbiB0b3AgYW5kXG4gIC8vIG9yYW5nZSB1bmRlcm5lYXRoIG9uIE9ORSBtYXRlcmlhbCBhbmQgT05FIGRyYXcgY2FsbC4gQSBjb21wb25lbnQgdGludCBjYW5ub3QgZG8gaXQgLS0gdGhlIHR3b1xuICAvLyBzdXJmYWNlcyBhcmUgbWlsbGltZXRyZXMgYXBhcnQgaW4geSwgc28gbm8gYXhpcyBibGVuZCBzZXBhcmF0ZXMgdGhlbSAtLSBhbmQgYSBzZWNvbmQgc2hlZXRcbiAgLy8gd291bGQgZG91YmxlIHRoZSByb29mJ3MgdHJpYW5nbGVzIGZvciBhIGNvbG91ci4gT21pdHRlZCwgdGhlIGdlb21ldHJ5IGlzIHVudGludGVkIGFzIGJlZm9yZS5cbiAgY29uc3QgcGFpbnQgPSAoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGhleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50LCBjID0gbmV3IFRIUkVFLkNvbG9yKGhleCksIGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjsgfVxuICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7IHJldHVybiBnO1xuICB9O1xuICAvLyBgaGV4R3JpZFtqXVtpXWAgaXMgYSBjb2xvdXIgUEVSIFRPUC1HUklEIFZFUlRFWCwgY29tcHV0ZWQgYXQgZW1pdCB0aW1lIC0tIHdoaWNoIGlzIHRoZSBvbmx5IHdheVxuICAvLyB0byBwdXQgYSBtYXJrIGF0IGEga25vd24gcGxhY2Ugb24gdGhlIHNoZWV0LiBBIGNhbnZhcyB0aWxlIHJlcGVhdHMgYnkgd29ybGQgcG9zaXRpb24gYW5kIGtub3dzXG4gIC8vIG5vdGhpbmcgYWJvdXQgd2hlcmUgdGhlIGVhdmUgaXM7IGBoZXhUb3BgIGlzIG9uZSBmbGF0IHRvbmUgZm9yIHRoZSB3aG9sZSBzdXJmYWNlLiBUaGlzIGlzIHdoYXRcbiAgLy8gY2FycmllcyB0aGUgcnVzdGVkIGJhbmQgYWxvbmcgdGhlIGVhdmUgYW5kIHRoZSByYWtlcywgYW5kIHRoZSBzdGFpbmluZyBiZXNpZGUgZWFjaCBzaGVldCBsYXAuXG4gIGNvbnN0IHBhaW50R3JpZCA9IChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgSEc6IG51bWJlcltdW10pID0+IHtcbiAgICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQsIGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgbGV0IGsgPSAwO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IG56OyBqKyspIGZvciAobGV0IGkgPSAwOyBpIDw9IG54OyBpKyspIHsgYy5zZXRIZXgoSEdbal1baV0pOyBjb2xbaysrXSA9IGMucjsgY29sW2srK10gPSBjLmc7IGNvbFtrKytdID0gYy5iOyB9XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTsgcmV0dXJuIGc7XG4gIH07XG4gIGNvbnN0IHRvcDAgPSBncmlkKDAsIGZhbHNlKSwgdW5kMCA9IGdyaWQoLXQsIHRydWUpO1xuICBjb25zdCBwYXJ0cyA9IHMuaGV4R3JpZCAhPT0gdW5kZWZpbmVkXG4gICAgPyBbcGFpbnRHcmlkKHRvcDAsIHMuaGV4R3JpZCksIHBhaW50KHVuZDAsIHMuaGV4VW5kZXIgPz8gMHhmZmZmZmYpXVxuICAgIDogcy5oZXhVbmRlciAhPT0gdW5kZWZpbmVkXG4gICAgICA/IFtwYWludCh0b3AwLCBzLmhleFRvcCA/PyAweGZmZmZmZiksIHBhaW50KHVuZDAsIHMuaGV4VW5kZXIpXVxuICAgICAgOiBbdG9wMCwgdW5kMF07XG4gIC8vIGVkZ2Ugc3RyaXBzOiBlYWNoIHF1YWQgZnJvbSB0aGUgdG9wIGVkZ2UgZG93biB0byB0aGUgdW5kZXJzaWRlLCB3b3VuZCBzbyBpdHMgbm9ybWFsIGZhY2VzIGBvdXRgXG4gIGNvbnN0IHN0cmlwID0gKHB0czogbnVtYmVyW11bXVtdLCBvdXQ6IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCB1djogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtwMCwgcDFdIG9mIHB0cykge1xuICAgICAgY29uc3QgcTAgPSBwMCwgcTEgPSBwMSwgcTIgPSBbcDFbMF0sIHAxWzFdIC0gdCwgcDFbMl1dLCBxMyA9IFtwMFswXSwgcDBbMV0gLSB0LCBwMFsyXV07XG4gICAgICBjb25zdCBlMSA9IFtxMVswXSAtIHEwWzBdLCBxMVsxXSAtIHEwWzFdLCBxMVsyXSAtIHEwWzJdXSwgZTIgPSBbcTJbMF0gLSBxMFswXSwgcTJbMV0gLSBxMFsxXSwgcTJbMl0gLSBxMFsyXV07XG4gICAgICBjb25zdCBuID0gW2UxWzFdICogZTJbMl0gLSBlMVsyXSAqIGUyWzFdLCBlMVsyXSAqIGUyWzBdIC0gZTFbMF0gKiBlMlsyXSwgZTFbMF0gKiBlMlsxXSAtIGUxWzFdICogZTJbMF1dO1xuICAgICAgY29uc3QgdHJpID0gblswXSAqIG91dFswXSArIG5bMV0gKiBvdXRbMV0gKyBuWzJdICogb3V0WzJdID49IDAgPyBbcTAsIHExLCBxMiwgcTAsIHEyLCBxM10gOiBbcTAsIHEyLCBxMSwgcTAsIHEzLCBxMl07XG4gICAgICBmb3IgKGNvbnN0IHEgb2YgdHJpKSB7IHBvcy5wdXNoKHFbMF0sIHFbMV0sIHFbMl0pOyB1di5wdXNoKDAsIDApOyB9XG4gICAgfVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3MsIDMpKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIGc7XG4gIH07XG4gIGNvbnN0IHRvcCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4gW1goaSksIEhoW2pdW2ldLCBaKGopXTtcbiAgY29uc3QgZTA6IG51bWJlcltdW11bXSA9IFtdLCBlMTogbnVtYmVyW11bXVtdID0gW10sIGUyOiBudW1iZXJbXVtdW10gPSBbXSwgZTM6IG51bWJlcltdW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG54OyBpKyspIHsgZTAucHVzaChbdG9wKGksIDApLCB0b3AoaSArIDEsIDApXSk7IGUxLnB1c2goW3RvcChpLCBueiksIHRvcChpICsgMSwgbnopXSk7IH1cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuejsgaisrKSB7IGUyLnB1c2goW3RvcCgwLCBqKSwgdG9wKDAsIGogKyAxKV0pOyBlMy5wdXNoKFt0b3AobngsIGopLCB0b3AobngsIGogKyAxKV0pOyB9XG4gIGNvbnN0IGVkZ2VzID0gW3N0cmlwKGUwLCBbMCwgMCwgLTFdKSwgc3RyaXAoZTEsIFswLCAwLCAxXSksIHN0cmlwKGUyLCBbLTEsIDAsIDBdKSwgc3RyaXAoZTMsIFsxLCAwLCAwXSldO1xuICAvLyBUaGUgcmltIGlzIHRoZSBzZWFtIGJldHdlZW4gdGhlIHR3byBmYWNlcywgc28gaXQgdGFrZXMgdGhlIFVOREVSIGNvbG91cjogb24gYSBkcmFwZWQgdGFycCB0aGVcbiAgLy8gZWRnZSBpcyB3aGF0IGEgdmlld2VyIHN0YW5kaW5nIGJlc2lkZSBpdCBhY3R1YWxseSBzZWVzLCBhbmQgaXQgaXMgdGhlIGxpbmluZywgbm90IHRoZSB0b3AuIE9uIGFcbiAgLy8gcm9vZiBkZWNrIGl0IGlzIHRoZSBmbHV0ZWQgZWF2ZSwgd2hpY2ggaXMgd2hlcmUgdGhlIHJ1c3QgaXMsIHNvIGBoZXhSaW1gIG92ZXJyaWRlcyBpdC5cbiAgY29uc3QgcmltSGV4ID0gcy5oZXhSaW0gPz8gcy5oZXhVbmRlcjtcbiAgcGFydHMucHVzaCguLi4ocmltSGV4ICE9PSB1bmRlZmluZWQgPyBlZGdlcy5tYXAoKGcpID0+IHBhaW50KGcsIHJpbUhleCkpIDogZWRnZXMpKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhwYXJ0cyk7XG59XG5cbi8qKlxuICogV0VBVEhFUkVEIFBBSU5UIG9uIGEgc3RlZWwgY29udGFpbmVyOiBvbmUgc2VhbWxlc3MgbXVsdGlwbGllciB0aWxlIGNhcnJ5aW5nIGNsZWFuIHBhaW50LCBydXN0XG4gKiBhbmQgY2hhbGtlZCBibG9vbSB0b2dldGhlci5cbiAqXG4gKiBUaGUgdGhyZWUgdG9uZXMgY2Fubm90IHJpZGUgYSBwbGFpbiBtdWx0aXBseSBvdmVyIHRoZSBjbGVhbiBwYWludCwgYmVjYXVzZSBhIGNoYWxrIGJsb29tIGlzXG4gKiBCUklHSFRFUiB0aGFuIHRoZSBwYWludCBpdCBzaXRzIG9uIGluIHR3byBjaGFubmVscyAtLSBhIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbi4gU28gdGhlIHZlcnRleFxuICogY29sb3VyIGlzIFJFLUJBU0VEIHRvIGFuIGVudmVsb3BlIGFib3ZlIGV2ZXJ5IHRvbmUgdGhlIHRpbGUgaGFzIHRvIHJlYWNoIChgby5iYXNlYCBpcyB0aGUgY2xlYW5cbiAqIHBhaW50J3Mgb3duIG11bHRpcGxpZXIgYWdhaW5zdCB0aGF0IGVudmVsb3BlLCBhbmQgaXQgaXMgd2hhdCBtb3N0IG9mIHRoZSB0aWxlIGlzIGZpbGxlZCB3aXRoKSxcbiAqIGV4YWN0bHkgYXMgdGhlIGxpY2hlbi1vbi1zdG9uZSByb3V0ZSBkb2VzLiBFdmVyeXRoaW5nIGFmdGVyIHRoZSBmaWxsIGlzIGRyYXduIHNvdXJjZS1vdmVyIGluXG4gKiBhYnNvbHV0ZSBtdWx0aXBsaWVyIHNwYWNlLCBzbyBhIG1hcmsgbWF5IGxhbmQgZWl0aGVyIHNpZGUgb2YgY2xlYW4uXG4gKlxuICogT3JkZXIgbWF0dGVycyBhbmQgaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB3ZWF0aGVyaW5nIGFuZCBjYW1vdWZsYWdlOiBhIHNvZnQgY2xvdWR5IGRyaWZ0XG4gKiBmaXJzdCwgdGhlbiB0aGUgcnVzdCBhcyBjbHVzdGVyZWQgZ3JhbnVsYXIgcGF0Y2hlcyByYXRoZXIgdGhhbiBoYXJkIGJsb3RjaGVzLCB0aGVuIHRoZSBydW5zIGl0XG4gKiBsZWF2ZXMgQkVMT1cgaXRzZWxmLCB0aGVuIHRoZSBjaGFsayBibG9vbXMsIHRoZW4gYSBmaW5lIGdyYWluIG92ZXIgdGhlIGxvdC5cbiAqL1xuZnVuY3Rpb24gcGFpbnRUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdLCBydXN0ID0gby5ydXN0ID8/IGJhc2UsIGNoYWxrID0gby5jaGFsayA/PyBiYXNlO1xuICAgIGNvbnN0IHJ1biA9IG8ucnVuID8/IHJ1c3Q7XG4gICAgLy8gd3JhcCBldmVyeSBtYXJrIHRocmVlIHdheXMgc28gbm90aGluZyBpcyBjdXQgYnkgdGhlIHRpbGUgZWRnZVxuICAgIGNvbnN0IHdyYXAgPSAoZHJhdzogKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpID0+IHZvaWQpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBkcmF3KGR4LCBkeSk7XG4gICAgfTtcbiAgICAvLyBgaGFyZGAga2VlcHMgdGhlIG1hcmsgYXQgZnVsbCBhbHBoYSB0byAwLjcyIG9mIGl0cyByYWRpdXMgYW5kIGRyb3BzIGl0IG92ZXIgdGhlIGxhc3QgcXVhcnRlcjpcbiAgICAvLyBhIHJ1c3QgYmxvb20gb3ZlciBpdHMgQ09NUExFTUVOVCAodGVhbCkgYmxlbmRzIHRvIGEgbmV1dHJhbCBncmV5IGFsb25nIGEgc29mdCBlZGdlLCBhbmQgdGhlXG4gICAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZHMgdGhhdCByaW5nIGFzIGJhY2tkcm9wIC0tIGEgcmVhbCBibG9vbSBoYXMgYSBncmFudWxhciwgbm90IGEgZmVhdGhlcmVkLCBlZGdlLlxuICAgIGNvbnN0IGJsb2IgPSAoYzogbnVtYmVyW10sIHg6IG51bWJlciwgeTogbnVtYmVyLCByOiBudW1iZXIsIGE6IG51bWJlciwgcnkgPSAxLCBoYXJkID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihjKX0sJHthfSlgKTsgZy5hZGRDb2xvclN0b3AoaGFyZCA/IDAuNzIgOiAwLjU1LCBgcmdiYSgke3JnYihjKX0sJHtoYXJkID8gYSA6IGEgKiAwLjQ1fSlgKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKGMpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciwgciAqIHJ5LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgIH07XG5cbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuXG4gICAgLy8gMS4gY2xvdWR5IGRyaWZ0OiBicm9hZCwgdmVyeSBzb2Z0LCBiYXJlbHkgb2ZmIGNsZWFuIC0tIHdoYXQgc3RvcHMgdGhlIGZsYXQgYXJlYXMgcmVhZGluZyBhcyBwYWludCBjaGlwcyBvbiBwbGFzdGljXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5kcmlmdCA/PyAxNCk7IGkrKykge1xuICAgICAgY29uc3QgYyA9IHJuZCgpIDwgMC41ID8gcnVzdCA6IGNoYWxrO1xuICAgICAgYmxvYihjLCBybmQoKSAqIHMsIHJuZCgpICogcywgcyAqICgwLjE4ICsgcm5kKCkgKiAwLjMwKSAqIChvLmRyaWZ0U2NhbGUgPz8gMSksIDAuMDUgKyBybmQoKSAqIDAuMDcsIDAuNiArIHJuZCgpICogMC44KTtcbiAgICB9XG5cbiAgICAvLyAyLiBydXN0OiBjbHVzdGVycywgZWFjaCBhIHNvZnQgcGF0Y2ggd2l0aCBncmFudWxhciBzcGVja3Mgb3ZlciBpdC4gQmFyZSBzdGVlbCBjb3Jyb2RlcyBpblxuICAgIC8vICAgIGZpZWxkcywgbm90IGluIGRvdHM7IGEgc3BlY2sgZmllbGQgd2l0aCBubyBwYXRjaCB1bmRlciBpdCByZWFkcyBhcyBjb25mZXR0aS5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLnJ1c3RDbHVzdGVycyA/PyAxNik7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCBjciA9IHMgKiAoMC4wNCArIHJuZCgpICogMC4xMSkgKiAoby5jbHVzdGVyU2NhbGUgPz8gMSk7XG4gICAgICAvLyBUaGUgY2x1c3RlciBwYXRjaCdzIE9QQUNJVFkuIFRoZSB0aWxlIGlzIGNvbXBvc2l0ZWQgc291cmNlLW92ZXIgb24gdGhlIGJhc2UgZmlsbCwgc28gYVxuICAgICAgLy8gY2x1c3RlciBhdCBhbHBoYSAwLjMwLTAuNjUgYmxlbmRzIHRvIGFuIGludGVybWVkaWF0ZSB0b25lIGFuZCBvbmx5IHRoZSBzcGVja3Mgb3ZlciBpdCBldmVyXG4gICAgICAvLyByZWFjaCB0aGUgYXV0aG9yZWQgcnVzdCAtLSB3aGljaCBpcyByaWdodCBmb3IgYSBydXN0IEJMT09NIG9uIHBhaW50ZWQgc3RlZWwgYW5kIHdyb25nIGZvclxuICAgICAgLy8gdGhlIGJvbGQgY2hpcHBlZCBwYXRjaGVzIGEgcGVlbGluZyBsaWQgY2Fycmllcywgd2hlcmUgYmFyZSBtZXRhbCBpcyBzaW1wbHkgZXhwb3NlZC5cbiAgICAgIC8vIERlZmF1bHRzIGFyZSB0aGUgcHJldmlvdXMgY29uc3RhbnRzIGV4YWN0bHksIHNvIG5vIGV4aXN0aW5nIGNhbGxlciBjaGFuZ2VzLlxuICAgICAgYmxvYihydXN0LCBjeCwgY3ksIGNyLCAoby5ydXN0QWxwaGEgPz8gMC4zMCkgKyBybmQoKSAqIChvLnJ1c3RBbHBoYVZhciA/PyAwLjM1KSwgMC43ICsgcm5kKCkgKiAwLjYsIG8uaGFyZEVkZ2VzID09PSB0cnVlKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BlY2tzUGVyQ2x1c3RlciA/PyA0MCk7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjcjtcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQsIHIgPSAwLjggKyBybmQoKSAqIDIuNDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKG8uc3BlY2tSdW4gPyBydW4gOiBydXN0KX0sJHsoby5zcGVja0FscGhhID8/IDAuMjUpICsgcm5kKCkgKiAoby5zcGVja0FscGhhVmFyID8/IDAuNSl9KWA7ICAgLy8gc3BlY2tSdW46IGRhcmtlciBzcGVja3MgdGhhdCB0ZXh0dXJlIGFuIG9wYXF1ZSBibG9vbVxuICAgICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgfVxuICAgICAgLy8gdGhlIHJ1biBpdCBsZWF2ZXMgYmVsb3cgaXRzZWxmOiBydXN0IGJsZWVkcyBET1dOIGEgdmVydGljYWwgcGFuZWwgYW5kIG5vd2hlcmUgZWxzZVxuICAgICAgaWYgKHJuZCgpIDwgKG8ucnVuQ2hhbmNlID8/IDAuNTUpKSB7XG4gICAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTAsIGxlbiA9IHMgKiAoMC4xMCArIHJuZCgpICogMC4zNSk7XG4gICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgY3ksIDAsIGN5ICsgbGVuKTtcbiAgICAgICAgY29uc3QgcmEgPSAoby5ydW5BbHBoYSA/PyAwLjE2KSArIHJuZCgpICogMC4xODtcbiAgICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnVuKX0sJHtyYX0pYCk7IGlmIChvLmhhcmRFZGdlcykgZy5hZGRDb2xvclN0b3AoMC45MiwgYHJnYmEoJHtyZ2IocnVuKX0sJHtyYX0pYCk7IGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1bil9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgICB3cmFwKChkeCkgPT4gY3R4LmZpbGxSZWN0KGN4ICsgZHggKyAocm5kKCkgLSAwLjUpICogY3IsIGN5LCB3LCBsZW4pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBjaGFsayBibG9vbTogbGFyZ2UsIHZlcnkgc29mdCwgbG93LWNvbnRyYXN0LiBJdCBpcyB0aGUgdG9uZSB0aGUgdGlsZSB3YXMgcmUtYmFzZWQgZm9yLlxuICAgIGNvbnN0IGNzY2FsZSA9IG8uY2hhbGtTY2FsZSA/PyAxLCBjYWxwaGEgPSBvLmNoYWxrQWxwaGEgPz8gMC4zNTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLmNoYWxrUGF0Y2hlcyA/PyA5KTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIGNyID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjEwKSAqIGNzY2FsZTtcbiAgICAgIGJsb2IoY2hhbGssIGN4LCBjeSwgY3IsIGNhbHBoYSArIHJuZCgpICogMC4zMCwgMC41ICsgcm5kKCkgKiAwLjcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyICogMS4yNTtcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQgKiAwLjcsIHIgPSAxICsgcm5kKCkgKiAzO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IoY2hhbGspfSwkezAuMiArIHJuZCgpICogMC40fSlgO1xuICAgICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDQuIHRoZSB0d28gbWFya3MgdGhhdCBvbmx5IG1ha2Ugc2Vuc2Ugb25jZSB0aGUgdGlsZSBpcyBIRUlHSFQta2V5ZWQ6IGxvbmcgcnVucyBibGVlZGluZyBkb3duXG4gICAgLy8gICAgZnJvbSB0aGUgdG9wIGVkZ2UgKHRoZSB0b3AgcmFpbCBpcyB3aGVyZSB3YXRlciBzaXRzIGFuZCB0aGUgcGFpbnQgZ29lcyBmaXJzdCkgYW5kIGEgZGlydFxuICAgIC8vICAgIGJhbmQgYWxvbmcgdGhlIGJvdHRvbS4gQm90aCBhcmUgbm8tb3BzIG9uIGEgd29ybGQtc3BhY2UgdGlsZSwgd2hlcmUgdGhlcmUgaXMgbm8gdXAuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby50b3BTdHJlYWtzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogKG8uc3RyZWFrV2lkdGggPz8gMC4wMTQpLCBsZW4gPSBzICogKDAuMjUgKyBybmQoKSAqIDAuNTUpO1xuICAgICAgY29uc3QgYSA9IChvLnN0cmVha0FscGhhID8/IDAuMTApICsgcm5kKCkgKiAwLjIyO1xuICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBsZW4pO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnVuKX0sJHthfSlgKTsgZy5hZGRDb2xvclN0b3Aoby5oYXJkRWRnZXMgPyAwLjkyIDogMC4yNSwgYHJnYmEoJHtyZ2IocnVzdCl9LCR7by5oYXJkRWRnZXMgPyBhIDogYSAqIDAuOH0pYCk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydXN0KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCAwLCB3LCBsZW4pO1xuICAgIH1cbiAgICAvLyA0Yi4gQVRMQVMgbWFya3MgZm9yIGEgdGlsZSBtYXBwZWQgT05DRSB1cCBhIHByb3AgKGN5bFVWIHdpdGggdGhlIHRpbGUgaGVpZ2h0ID0gdGhlIHByb3AgaGVpZ2h0KTpcbiAgICAvLyAgICAgYGhiYW5kc2AgcGFpbnRzIGEgdG9uZSBhY3Jvc3MgYSBob3Jpem9udGFsIGJhbmQgb2YgdiAoYSBydXN0ZWQgY2hpbWUsIGEgd29ybiBob29wIGNyb3duKSxcbiAgICAvLyAgICAgYGJhbmRTdHJlYWtzYCBoYW5ncyBydW5zIGZyb20gYSBnaXZlbiB2ICh3YXRlciBzaXRzIG9uIGEgcm9sbGluZyBob29wIGFuZCBibGVlZHMgZG93biBmcm9tIGl0LFxuICAgIC8vICAgICBleGFjdGx5IGFzIGl0IGRvZXMgZnJvbSB0aGUgdG9wIGVkZ2UpLCBhbmQgYHN0ZW5jaWxgIGEgcGFpbnRlZCBtYXJrIGF0ICh1LCB2KS4gdiBpcyB1cC5cbiAgICBmb3IgKGNvbnN0IGhiIG9mIChvLmhiYW5kcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IHkwID0gcyAqICgxIC0gaGIudjEpLCB5MSA9IHMgKiAoMSAtIGhiLnYwKSwgdG9uZSA9IGhiLnRvbmUgPz8gcnVzdDtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih0b25lKX0sJHtoYi5hbHBoYSA/PyAwLjh9KWA7IGN0eC5maWxsUmVjdCgwLCB5MCwgcywgeTEgLSB5MCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChoYi5zcGVja3MgPz8gMCk7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0geTAgKyBybmQoKSAqICh5MSAtIHkwKSwgciA9IDAuOCArIHJuZCgpICogMi4yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iocm5kKCkgPCAwLjUgPyBydW4gOiBiYXNlKX0sJHswLjIgKyBybmQoKSAqIDAuNX0pYDtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGJzIG9mIChvLmJhbmRTdHJlYWtzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgeTAgPSBzICogKDEgLSBicy52KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGJzLmNvdW50ID8/IDEyKTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogKGJzLndpZHRoID8/IDAuMDEyKSwgbGVuID0gcyAqICgoYnMubGVuID8/IDAuMTIpICsgcm5kKCkgKiAoYnMubGVuVmFyID8/IDAuMjUpKTtcbiAgICAgICAgY29uc3QgYSA9IChicy5hbHBoYSA/PyAwLjE0KSArIHJuZCgpICogMC4yMjtcbiAgICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5MCwgMCwgeTAgKyBsZW4pO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke2F9KWApOyBnLmFkZENvbG9yU3RvcChvLmhhcmRFZGdlcyA/IDAuOTIgOiAwLjMsIGByZ2JhKCR7cmdiKHJ1c3QpfSwke28uaGFyZEVkZ2VzID8gYSA6IGEgKiAwLjh9KWApO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydXN0KX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggKyBkeCwgeTAgLSAyLCB3LCBsZW4pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoby5zdGVuY2lsKSB7XG4gICAgICBjb25zdCBzdCA9IG8uc3RlbmNpbCwgcHggPSBzICogKHN0LnNpemUgPz8gMC4wNik7XG4gICAgICBjdHguZm9udCA9IGBib2xkICR7cHh9cHggc2Fucy1zZXJpZmA7IGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJzsgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHN0LnRvbmUgPz8gY2hhbGspfSwke3N0LmFscGhhID8/IDAuODV9KWA7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsVGV4dChzdC50ZXh0LCBzICogKHN0LnUgPz8gMC41KSArIGR4LCBzICogKDEgLSAoc3QudiA/PyAwLjUpKSk7XG4gICAgfVxuICAgIGlmIChvLmdyb3VuZEJhbmQpIHtcbiAgICAgIGNvbnN0IGIgPSBvLmdyb3VuZEJhbmQsIGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gKG8uZ3JvdW5kSGVpZ2h0ID8/IDAuMjIpKSk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke2J9KWApOyBnLmFkZENvbG9yU3RvcCgwLjQ1LCBgcmdiYSgke3JnYihydW4pfSwke2IgKiAwLjR9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnVuKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfVxuXG4gICAgLy8gNS4gZmluZSBncmFpbjogdGhlIHRvb3RoIG9mIGEgYnJ1c2gtcm9sbGVkIGluZHVzdHJpYWwgcGFpbnQuIE11bHRpcGx5LCBzbyBpdCBvbmx5IGRhcmtlbnMuXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAxODAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMC41ICsgcm5kKCkgKiAxLjMsIGEgPSAwLjAzICsgcm5kKCkgKiAwLjA3O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDE1MCwxNDAsMTMwLCR7YX0pYDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBIFNXRVBUIHBvbHlsaW5lIHR1YmU6IE9ORSByaW5nIG9mIGBzZWdgIHZlcnRpY2VzIHBlciBwb2ludCwgbWl0cmVkIGF0IGV2ZXJ5IGJlbmQsIGluZGV4ZWQgYW5kXG4gKiBzbW9vdGgtc2hhZGVkLiBUaGlzIGlzIG5vdCB3aGF0IGB0dWJlYCBkb2VzLCBhbmQgdGhlIGRpZmZlcmVuY2UgaXMgYSB2aXNpYmxlIGRlZmVjdCByYXRoZXIgdGhhbiBhXG4gKiByZWZpbmVtZW50LiBgdHViZWAgY2hhaW5zIGEgc2VwYXJhdGUgY3lsaW5kZXIgcGVyIHNlZ21lbnQgYW5kIEVYVEVORFMgZWFjaCBvbmUgYnkgYHIgKiAxLjJgIHNvIHRoZVxuICogam9pbnRzIGNsb3NlIC0tIHdoaWNoIGlzIGZpbmUgd2hpbGUgdGhlIHNlZ21lbnRzIGFyZSBsb25nLCBhbmQgY2F0YXN0cm9waGljIG9uIGEgdGlnaHQgY3VydmU6IGFcbiAqIDAuMTIgbSBjb3JuZXIgcmFkaXVzIHNhbXBsZWQgaW4gZml2ZSBzdGVwcyBoYXMgYSAwLjAzOCBtIGNob3JkIGFnYWluc3QgYSAwLjAyNSBtIG92ZXJsYXAsIHNvXG4gKiBjb25zZWN1dGl2ZSBjeWxpbmRlcnMgb3ZlcnNob290IGVhY2ggb3RoZXIgYnkgdHdvIHRoaXJkcyBvZiB0aGVpciBsZW5ndGggYW5kIHRoZSBiZW5kIHJlbmRlcnMgYXMgYVxuICogY3J1bXBsZWQgYWNjb3JkaW9uIG9mIHBsZWF0cy4gVGhlIGNyb3dkIGJhcnJpZXIncyByb3VuZGVkIHRvcCBjb3JuZXJzIHNoaXBwZWQgdGhhdCB3YXkuXG4gKlxuICogVGhlIGZyYW1lIGlzIHJvdGF0aW9uLW1pbmltaXNpbmcgKHBhcmFsbGVsIHRyYW5zcG9ydCksIG5vdCBGcmVuZXQ6IGEgRnJlbmV0IGZyYW1lIGZsaXBzIGl0cyBub3JtYWxcbiAqIHRocm91Z2ggYW4gaW5mbGVjdGlvbiBhbmQgdHdpc3RzIHRoZSB0dWJlLCB3aGljaCBhIFVWIG9yIGEgdmVydGV4IGNvbG91ciB0aGVuIHNob3dzIGFzIGEgc3RyaXBlXG4gKiBzcGlyYWxsaW5nIGFsb25nIGEgcmFpbCB0aGF0IGlzIG1lYW50IHRvIGJlIHN0cmFpZ2h0LiBJbnRlcmlvciBwb2ludHMgcmluZyBvbiB0aGUgQklTRUNUT1Igb2YgdGhlXG4gKiB0d28gYWRqYWNlbnQgdGFuZ2VudHMsIHdoaWNoIGlzIHRoZSBtaXRyZSBhIHJlYWwgYmVudCB0dWJlIGhhcy5cbiAqL1xuZnVuY3Rpb24gc3dlZXBUdWJlKHB0czogbnVtYmVyW11bXSwgcjogbnVtYmVyLCBzZWcgPSAxMCwgaGV4PzogbnVtYmVyLCBjYXAgPSB0cnVlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBQID0gcHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjMocFswXSwgcFsxXSwgcFsyXSkpO1xuICAvLyBkcm9wIHJlcGVhdGVkIHBvaW50czogYSB6ZXJvLWxlbmd0aCBzZWdtZW50IGhhcyBubyB0YW5nZW50LCBhbmQgb25lIGR1cGxpY2F0ZSBpcyBlbm91Z2ggdG9cbiAgLy8gcHV0IGEgTmFOIHRocm91Z2ggdGhlIHdob2xlIHRyYW5zcG9ydCBjaGFpblxuICBmb3IgKGxldCBpID0gUC5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSBpZiAoUFtpXS5kaXN0YW5jZVRvKFBbaSAtIDFdKSA8IDFlLTcpIFAuc3BsaWNlKGksIDEpO1xuICBpZiAoUC5sZW5ndGggPCAyKSByZXR1cm4gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGNvbnN0IG4gPSBQLmxlbmd0aDtcbiAgY29uc3Qgc2VnRGlyOiBUSFJFRS5WZWN0b3IzW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSBzZWdEaXIucHVzaChQW2kgKyAxXS5jbG9uZSgpLnN1YihQW2ldKS5ub3JtYWxpemUoKSk7XG4gIC8vIHBlci1wb2ludCB0YW5nZW50OiB0aGUgc2VnbWVudCBkaXJlY3Rpb24gYXQgdGhlIGVuZHMsIHRoZSBiaXNlY3RvciBiZXR3ZWVuIHR3byBzZWdtZW50cyBpbnNpZGVcbiAgY29uc3QgVCA9IFAubWFwKChfLCBpKSA9PiBpID09PSAwID8gc2VnRGlyWzBdLmNsb25lKClcbiAgICA6IGkgPT09IG4gLSAxID8gc2VnRGlyW24gLSAyXS5jbG9uZSgpXG4gICAgOiBzZWdEaXJbaSAtIDFdLmNsb25lKCkuYWRkKHNlZ0RpcltpXSkubm9ybWFsaXplKCkpO1xuICAvLyBzZWVkIGEgbm9ybWFsIHRoYXQgaXMgbm90IHBhcmFsbGVsIHRvIHRoZSBmaXJzdCB0YW5nZW50LCB0aGVuIHRyYW5zcG9ydCBpdCBwb2ludCB0byBwb2ludFxuICBsZXQgTiA9IE1hdGguYWJzKFRbMF0ueSkgPiAwLjkgPyBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKSA6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApO1xuICBOLnN1YihUWzBdLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoTi5kb3QoVFswXSkpKS5ub3JtYWxpemUoKTtcbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgaWYgKGkgPiAwKSB7XG4gICAgICAvLyByb3RhdGUgdGhlIGNhcnJpZWQgbm9ybWFsIGJ5IHRoZSBzYW1lIHJvdGF0aW9uIHRoYXQgdGFrZXMgdGhlIHByZXZpb3VzIHRhbmdlbnQgdG8gdGhpcyBvbmVcbiAgICAgIGNvbnN0IHEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhUW2kgLSAxXSwgVFtpXSk7XG4gICAgICBOLmFwcGx5UXVhdGVybmlvbihxKTtcbiAgICAgIE4uc3ViKFRbaV0uY2xvbmUoKS5tdWx0aXBseVNjYWxhcihOLmRvdChUW2ldKSkpLm5vcm1hbGl6ZSgpO1xuICAgIH1cbiAgICBjb25zdCBCID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jcm9zc1ZlY3RvcnMoVFtpXSwgTikubm9ybWFsaXplKCk7XG4gICAgLy8gYSBtaXRyZWQgcmluZyBpcyBhbiBFTExJUFNFIGluIGl0cyBvd24gcGxhbmU6IHdpZGVuIGl0IGJ5IDEvY29zKGhhbGYtYW5nbGUpIGFsb25nIHRoZSBiZW5kIHNvXG4gICAgLy8gdGhlIHN3ZXB0IHNlY3Rpb24gc3RheXMgY2lyY3VsYXIgdGhyb3VnaCB0aGUgY29ybmVyIHJhdGhlciB0aGFuIHBpbmNoaW5nIHRvIGEgd2Fpc3RcbiAgICBjb25zdCBrID0gaSA+IDAgJiYgaSA8IG4gLSAxID8gMSAvIE1hdGgubWF4KDAuNSwgc2VnRGlyW2kgLSAxXS5kb3QoVFtpXSkpIDogMTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCB0aCA9IGogKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyh0aCksIHMgPSBNYXRoLnNpbih0aCk7XG4gICAgICBwb3MucHVzaChQW2ldLnggKyAoTi54ICogYyArIEIueCAqIHMgKiBrKSAqIHIsIFBbaV0ueSArIChOLnkgKiBjICsgQi55ICogcyAqIGspICogciwgUFtpXS56ICsgKE4ueiAqIGMgKyBCLnogKiBzICogaykgKiByKTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgLy8gKGEsIGMyLCBiKSwgTk9UIChhLCBiLCBjMikuIFRoZSByaW5nIHJ1bnMgTiAtPiBCIHdpdGggQiA9IFQgeCBOLCBzbyB3aW5kaW5nIGFsb25nIHRoZSB0dWJlXG4gICAgLy8gZmlyc3QgYW5kIGFyb3VuZCBpdCBzZWNvbmQgZ2l2ZXMgYSBmYWNlIG5vcm1hbCBvZiBUIHggQiA9IC1OOiBldmVyeSB3YWxsIHRyaWFuZ2xlIGZhY2VzIElOV0FSRC5cbiAgICAvLyBCYWNrZmFjZSBjdWxsaW5nIHRoZW4gaGlkZXMgdGhlIG5lYXIgd2FsbCBhbmQgc2hvd3MgdGhlIEZBUiBvbmUsIHdoaWNoIGZvciBhIGxpdCBncmV5IHR1YmUgbG9va3NcbiAgICAvLyBhbG1vc3QgcmlnaHQgLS0gYW5kIHdyaXRlcyBpdHMgZGVwdGggb24gdGhlIGZhciBzaWRlLCBzbyBhbnl0aGluZyBwYXNzaW5nIHRocm91Z2ggdGhlIHR1YmUgZHJhd3NcbiAgICAvLyBpbiBmcm9udCBvZiBpdC4gVGhlIGZvb3Qgc3R1YnMgc3Rvb2QgcHJvdWRseSB0aHJvdWdoIHRoZSBib3R0b20gcmFpbCBiZWNhdXNlIG9mIHRoaXMsIGFuZCBpdFxuICAgIC8vIHJlYWQgYXMgYSBnZW9tZXRyeSBlcnJvciBpbiB0aGUgc3R1YiByYXRoZXIgdGhhbiBhIHdpbmRpbmcgZXJyb3IgaW4gdGhlIHN3ZWVwLlxuICAgIGNvbnN0IGEgPSBpICogc2VnICsgaiwgYiA9IChpICsgMSkgKiBzZWcgKyBqLCBjMiA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgaWR4LnB1c2goYSwgYzIsIGIsIGEsIGQsIGMyKTtcbiAgfVxuICBpZiAoY2FwKSB7XG4gICAgLy8gRmxhdCBlbmQgZGlzY3MsIG9uIHRoZWlyIE9XTiBDT1BZIG9mIHRoZSByaW0gdmVydGljZXMuIEZhbm5pbmcgdGhlbSBvZmYgdGhlIHNpZGUgd2FsbCdzIHJpbmdcbiAgICAvLyBzaGFyZXMgdGhvc2UgdmVydGljZXMsIGFuZCBgY29tcHV0ZVZlcnRleE5vcm1hbHNgIHRoZW4gYXZlcmFnZXMgdGhlIGRpc2MncyBheGlhbCBub3JtYWwgaW50b1xuICAgIC8vIHRoZSB3YWxsJ3MgcmFkaWFsIG9uZSAtLSB3aGljaCBkb2VzIG5vdCBzaGFkZSBhIHNsaWdodGx5IHdyb25nIHJpbSwgaXQgdGlsdHMgdGhlIG5vcm1hbCBhdCBCT1RIXG4gICAgLy8gZW5kcyBvZiBhIHR3by1wb2ludCB0dWJlIGFuZCBzbyBzaGFkZXMgdGhlIFdIT0xFIHR1YmUgd3JvbmcuIFRoZSBmb290IHN0dWJzIHJlbmRlcmVkIGFzIGdsYXNzXG4gICAgLy8gdGVzdCB0dWJlcyB3aXRoIGEgYnJpZ2h0IGJhbmQgdW5kZXIgdGhlIHJhaWwsIGFuZCB0aGUgYmFuZCByZWFkIGFzIGEgc2VwYXJhdGUgb2JqZWN0IHNpdHRpbmcgb25cbiAgICAvLyBpdC4gU2FtZSBmYXVsdCwgc2FtZSBmaXgsIGFzIHRoZSBzaGFycC1jb3JuZXIgc3BsaXQgaW4gYGxhdGhlYC5cbiAgICBmb3IgKGNvbnN0IFtyaW5nLCBhdCwgZmxpcF0gb2YgW1swLCBQWzBdLCB0cnVlXSwgW24gLSAxLCBQW24gLSAxXSwgZmFsc2VdXSBhcyBbbnVtYmVyLCBUSFJFRS5WZWN0b3IzLCBib29sZWFuXVtdKSB7XG4gICAgICBjb25zdCBiYXNlID0gcG9zLmxlbmd0aCAvIDM7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7IGNvbnN0IGsgPSAocmluZyAqIHNlZyArIGopICogMzsgcG9zLnB1c2gocG9zW2tdLCBwb3NbayArIDFdLCBwb3NbayArIDJdKTsgfVxuICAgICAgY29uc3QgY2kgPSBwb3MubGVuZ3RoIC8gMzsgcG9zLnB1c2goYXQueCwgYXQueSwgYXQueik7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBiYXNlICsgaiwgYiA9IGJhc2UgKyAoaiArIDEpICUgc2VnO1xuICAgICAgICBpZiAoZmxpcCkgaWR4LnB1c2goY2ksIGIsIGEpOyBlbHNlIGlkeC5wdXNoKGNpLCBhLCBiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBnIDogdGludEdlbyhnLCBoZXgpO1xufVxuXG4vKipcbiAqIEZST05ULUFUTEFTIFVWczogZXZlcnkgdmVydGV4IHdob3NlIG5vcm1hbCBmYWNlcyArWiBhbmQgdGhhdCBsaWVzIGluc2lkZSB0aGUgYXRsYXMncyB3b3JsZFxuICogcmVjdGFuZ2xlIHRha2VzIGEgUExBTkFSICh4LCB5KSBVViBpbnRvIGEgYmFrZWQgZnJvbnQtZWxldmF0aW9uIGltYWdlLCBhbmQgZXZlcnkgb3RoZXIgdmVydGV4IGlzXG4gKiBwaW5uZWQgdG8gb25lIGNsZWFuIHRleGVsIG9mIGl0LiBBIHdhbGwtbW91bnRlZCBib3ggc2VlbiBmcm9tIHRoZSBmcm9udCBJUyBpdHMgZWxldmF0aW9uLCBzbyB0aGVcbiAqIHBsYXRlJ3Mgb3duIHByaW50ZWQgbGFiZWxzLCBzY3JldyBoZWFkcywgZ2Fza2V0IGxpbmUgYW5kIHJ1c3QgbGFuZCBleGFjdGx5IHdoZXJlIHRoZSBnZW9tZXRyeVxuICogcHV0cyB0aGVtLCBvbiBvbmUgbWF0ZXJpYWwuIGBiYXNlYCBvdmVycmlkZXMgdGhlIGZyb250IHZlcnRpY2VzJyBjb2xvdXIsIGJlY2F1c2UgdGhlIGF0bGFzIGlzIGFcbiAqIHJhdGlvIG92ZXIgb25lIHJlZmVyZW5jZSB0b25lIGFuZCB0aGUgcGVyLXBhcnQgdGludHMgb25seSBiZWxvbmcgb24gdGhlIGZhY2VzIHRoZSBhdGxhcyBkb2VzIG5vdFxuICogcmVhY2guIGB5TWluYCBrZWVwcyBwYXJ0cyBoYW5naW5nIGJlbG93IHRoZSBhdGxhcyAoYSBjb25kdWl0IHN0dWIpIG91dCBvZiBpdC5cbiAqL1xuZnVuY3Rpb24gZnJvbnRBdGxhc1VWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGE6IGFueSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBjb25zdCBjb2wgPSBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSB8IG51bGw7XG4gIGNvbnN0IGJhc2UgPSBhLmJhc2UgIT09IHVuZGVmaW5lZCA/IG5ldyBUSFJFRS5Db2xvcihhLmJhc2UpIDogbnVsbDtcbiAgY29uc3QgbWluTnogPSBhLm1pbk56ID8/IDAuNztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB4ID0gcC5nZXRYKGkpLCB5ID0gcC5nZXRZKGkpO1xuICAgIC8vIDFlLTQgdG9sZXJhbmNlOiBhIGNhcCB2ZXJ0ZXggc2l0dGluZyBleGFjdGx5IG9uIHRoZSBhdGxhcyBib3VuZGFyeSAodGhlIHNwZWVkIHNpZ24ncyBkaXNjIGF0IHggPSAtYXcvMilcbiAgICAvLyBmYWlsZWQgdGhlIHRlc3QgYnkgZmxvYXQgZXJyb3IsIHdhcyBwaW5uZWQsIGFuZCBpdHMgdGhyZWUgdHJpYW5nbGVzIHNtZWFyZWQgdGhlIHdob2xlIGF0bGFzIHJvdyBkb3duXG4gICAgLy8gdGhlIGRpc2MncyBlZGdlICgyMDI2LTA5LTAzKS5cbiAgICBjb25zdCBFID0gMWUtNDtcbiAgICBjb25zdCBmcm9udCA9IG5ybS5nZXRaKGkpID4gbWluTnogJiYgeCA+PSBhLngwIC0gRSAmJiB4IDw9IGEueDEgKyBFICYmIHkgPj0gKGEueU1pbiA/PyBhLnkxKSAtIEUgJiYgeSA8PSBhLnkwICsgRTtcbiAgICBpZiAoZnJvbnQpIHtcbiAgICAgIHV2W2kgKiAyXSA9ICh4IC0gYS54MCkgLyAoYS54MSAtIGEueDApO1xuICAgICAgdXZbaSAqIDIgKyAxXSA9ICh5IC0gYS55MSkgLyAoYS55MCAtIGEueTEpO1xuICAgICAgaWYgKGJhc2UgJiYgY29sKSBjb2wuc2V0WFlaKGksIGJhc2UuciwgYmFzZS5nLCBiYXNlLmIpO1xuICAgIH0gZWxzZSB7IHV2W2kgKiAyXSA9IGEucGluWzBdOyB1dltpICogMiArIDFdID0gYS5waW5bMV07IH1cbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgaWYgKGNvbCkgY29sLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZlbmNlIGhlbHBlcnMgKi9cblxuLyoqIFBhbmVsIFVWczogdSBhbG9uZyB3b3JsZCBYIG92ZXIgYHNjYWxlYCBtZXRyZXMsIHYgd29ybGQgSEVJR0hUIG92ZXIgdGhlIHNhbWUsIHJlZ2FyZGxlc3Mgb2YgdGhlXG4gKiAgZmFjZSBub3JtYWwuIE9uIGEgdGhpbiBzbGFiIHRoaXMgbWVhbnMgdGhlIGZyb250IGFuZCBiYWNrIGZhY2VzIHNoYXJlIHRoZSBzYW1lIHRpbGUgcGxhY2VtZW50XG4gKiAgYW5kIHRoZSBlZGdlcyB0YWtlIGEgc2xpdmVyIG9mIGl0OyBhIGdyaW1lIHdhc2ggdGhhdCBrZXlzIG9uIHYgdGhlbiBsYW5kcyBhdCB0aGUgc2FtZSBoZWlnaHQgb25cbiAqICBldmVyeSBmYWNlLCB3aGljaCBpcyB3aGF0IHJhaW4gYW5kIGFsZ2FlIGRvLiAqL1xuZnVuY3Rpb24gcGFuZWxVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyLCByb3QgPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIC8vIGByb3RgIHN3YXBzIHRoZSBheGVzIHNvIGEgdGlsZSBvZiBWRVJUSUNBTCBzdHJpcHMgcmVhZHMgaG9yaXpvbnRhbCAtLSB0aGUgd292ZW4gYmFuZHMgb2YgYVxuICAvLyBiYW1ib28gcGFuZWwgYWdhaW5zdCBpdHMgdmVydGljYWwgbXVsbGlvbnMsIG9uZSB0aWxlLCBvbmUgbWF0ZXJpYWwuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdSA9IHJvdCA/IHAuZ2V0WShpKSA6IHAuZ2V0WChpKSwgdiA9IHJvdCA/IHAuZ2V0WChpKSA6IHAuZ2V0WShpKTtcbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSB2IC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBBIHNxdWFyZSBweXJhbWlkIFNQSUtFOiBiYXNlIHcgeCB3IGF0IGBhdGAsIGFwZXggaCBhYm92ZS4gQSBwaWNrZXQncyBzcGVhciBwb2ludCwgYSBwaWVyIGNhcC4gKi9cbmZ1bmN0aW9uIHNwaWtlKGF0OiBudW1iZXJbXSwgdzogbnVtYmVyLCBoOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ29uZUdlb21ldHJ5KHcgLyBNYXRoLlNRUlQyLCBoLCA0LCAxLCBmYWxzZSk7XG4gIGcucm90YXRlWShNYXRoLlBJIC8gNCk7XG4gIGcudHJhbnNsYXRlKGF0WzBdLCBhdFsxXSArIGggLyAyLCBhdFsyXSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogR1JJTUUgdGlsZTogYSBtdWx0aXBsaWVyIG9mIHdoaXRlIHdpdGggKGEpIGEgZGFyayB3YXNoIHJpc2luZyBmcm9tIHRoZSBncm91bmQgdG8gYGNvdmVyYWdlYCxcbiAqIChiKSB2ZXJ0aWNhbCByYWluIHN0cmVha3MgZnJvbSB0aGUgdG9wLCAoYykgc29mdCBkYXJrIGJsb3RjaGVzLCAoYzIpIGJyb2FkIENMT1VEIG1vdHRsaW5nLFxuICogKGQpIHN3ZXB0IHR5cmUgU0NVRkZTIG92ZXIgYVxuICogaGVpZ2h0IGJhbmQsIChlKSB2ZXJ0aWNhbCBmb3JtIFNFQU1TLCAoZikgUElOSE9MRVMgLS0gdGhlIGFpciBidWJibGVzIG9mIGEgcHJlY2FzdCBmYWNlLCAoZylcbiAqIG9wdGlvbmFsIGdyZWVuIG1vc3MvYWxnYWUgYmxvYnMgY29uY2VudHJhdGVkIGluIHRoZSBib3R0b20gYmFuZCwgYW5kIChoKSBmaW5lIGdyYWluLiAoZCksIChlKVxuICogYW5kIChmKSBhcmUgb2ZmIHVubGVzcyBhc2tlZCBmb3IsIHNvIG5vdGhpbmcgYWxyZWFkeSBlbWl0dGVkIGNoYW5nZXMuIEV2ZXJ5IGNvbG91ciBpcyBhIGZyYWN0aW9uIG9mIHRoZVxuICogbWF0ZXJpYWwncyBtZWFzdXJlZCBhbGJlZG8sIGFuZCB0aGUgZGFya2VzdCBjb3JlIGlzIGNsYW1wZWQgc28gbm90aGluZyBvbiBhIHdoaXRlIG9yIGNyZWFtXG4gKiBzdXJmYWNlIGRyb3BzIHRvd2FyZCB0aGUgaG9sZSBnYXRlJ3MgbHVtYSA1OC5cbiAqL1xuZnVuY3Rpb24gZ3JpbWVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IHdhc2ggPSBvLndhc2ggPz8gWzAuNjIsIDAuNjIsIDAuNThdLCB3YXNoQSA9IG8ud2FzaEFscGhhID8/IDAuNywgY292ID0gby5jb3ZlcmFnZSA/PyAwLjM7XG4gICAgLy8gYGJhc2VgIGlzIHRoZSB0b25lIHRoZSBVTi1ncmltZWQgcGFydCBvZiB0aGUgdGlsZSBjYXJyaWVzLCBkZWZhdWx0aW5nIHRvIHdoaXRlIC0tIGkuZS4gdG9cbiAgICAvLyBcImxlYXZlIHRoZSB2ZXJ0ZXggY29sb3VyIGFsb25lXCIsIHdoaWNoIGlzIGV2ZXJ5IGV4aXN0aW5nIGNhbGxlci4gSXQgZXhpc3RzIGZvciBFTlZFTE9QRVxuICAgIC8vIFJFLUJBU0lORzogYSBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4sIHNvIGEgcGFydCB0aGF0IG11c3QgcmVhZCBjbGVhbiBvcmFuZ2UgaW4gb25lIHBsYWNlIGFuZFxuICAgIC8vIGdyZXkgcm9hZCBncmltZSBpbiBhbm90aGVyIGNhbm5vdCBkbyBpdCBmcm9tIGEgc2luZ2xlIHZlcnRleCBjb2xvdXIsIGJlY2F1c2UgdGhlIGdyaW1lIGlzXG4gICAgLy8gSElHSEVSIGluIGJsdWUgdGhhbiB0aGUgb3JhbmdlIGlzLiBUaGUgdmVydGV4IGNvbG91ciBiZWNvbWVzIHRoZSBwZXItY2hhbm5lbCBtYXhpbXVtIG9mIGJvdGhcbiAgICAvLyBhbmQgdGhpcyBmaWxsIHBhaW50cyB0aGUgY2xlYW4gdG9uZSBiYWNrIG91dCBvZiBpdC5cbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IFsxLCAxLCAxXTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIC8vIHJhaW4gc3RyZWFrcyBmcm9tIHRoZSB0b3BcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnN0cmVha3MgPz8gMjYpOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTIsIGxlbiA9IHMgKiAoMC4xNSArIHJuZCgpICogMC42KSwgYSA9IDAuMDUgKyBybmQoKSAqIDAuMTI7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBsZW4pO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGN0eC5maWxsUmVjdCh4LCAwLCB3LCBsZW4pOyBjdHguZmlsbFJlY3QoeCAtIHMsIDAsIHcsIGxlbik7XG4gICAgfVxuICAgIC8vIGdyb3VuZCB3YXNoLiBgd2FzaEZsYXRgIG1ha2VzIGl0IFVOSUZPUk0gaW5zdGVhZCBvZiBhIGJvdHRvbS11cCBncmFkaWVudCwgd2hpY2ggaXMgd2hhdCBhXG4gICAgLy8gaG9yaXpvbnRhbCBzbGFiIG5lZWRzOiBhIGdyYWRpZW50IGtleWVkIHRvIHRoZSB0aWxlJ3MgdiBtYXBzIHN0cmFpZ2h0IGFjcm9zcyBhIGZsYXQgZmFjZSBhbmRcbiAgICAvLyBzcGxpdHMgaXQgaW50byBhIHBhbGUgaGFsZiBhbmQgYSBkYXJrIGhhbGYgd2l0aCBhIGhhcmQgZWRnZSBiZXR3ZWVuIHRoZW0uIERlZmF1bHRlZCBvZmYsIHNvXG4gICAgLy8gZXZlcnkgcHJvcCB0aGF0IGRvZXMgbm90IGFzayBmb3IgaXQgaXMgdW5jaGFuZ2VkLlxuICAgIGlmIChvLndhc2hGbGF0KSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iod2FzaCl9LCR7d2FzaEF9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3YpKTtcbiAgICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBfSlgKTsgZ3JhZC5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQSAqIDAuNDV9KWApOyBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfVxuICAgIC8vIGJsb3RjaGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ibG90Y2hlcyA/PyA0MCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMS42KSAqIHMsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wNiwgYSA9IDAuMDggKyBybmQoKSAqIDAuMztcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIFJVQlM6IG5lYXItYmxhY2sgdHlyZSBzbWVhcnMgbG93IG9uIHRoZSB0aWxlLiBEaXN0aW5jdCBmcm9tIGBibG90Y2hlc2AsIHdoaWNoIGRhcmtlbiB0b3dhcmRcbiAgICAvLyB0aGUgZ3JpbWUgdG9uZTogYSB0eXJlIHJ1YiBpcyBhIGRpZmZlcmVudCBjb2xvdXIgYW5kIGEgZGlmZmVyZW50IHNoYXBlIC0tIGxvbmcsIGxvdywgYW5kIG11Y2hcbiAgICAvLyBkYXJrZXIgdGhhbiBhbnl0aGluZyB3ZWF0aGVyIGRvZXMuIERlZmF1bHQgMCwgc28gbm8gZXhpc3RpbmcgY2FsbGVyIGNoYW5nZXMuXG4gICAgaWYgKG8ucnVicykge1xuICAgICAgY29uc3QgcnViID0gby5ydWIgPz8gWzAuMzAsIDAuMjgsIDAuMzBdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvLnJ1YnM7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAqICgwLjYwICsgcm5kKCkgKiAwLjM4KTtcbiAgICAgICAgY29uc3QgdyA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4yMiksIGggPSBzICogKDAuMDA2ICsgcm5kKCkgKiAwLjAzMCksIGEgPSAwLjIwICsgcm5kKCkgKiAwLjQ1O1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCh4IC0gdyAvIDIsIDAsIHggKyB3IC8gMiwgMCk7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydWIpfSwwKWApO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke3JnYihydWIpfSwke2F9KWApO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnViKX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4IC0gdyAvIDIgKyBkeCwgeSAtIGggLyAyLCB3LCBoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gU0NVRkZTOiBzb2Z0IHBhdGNoZXMgd2hlcmUgdGhlIHdhc2ggaXMgZXJhc2VkIGJhY2sgdG93YXJkIHdoaXRlLiBUaGUgdGlsZSBpcyBjb21wb3NpdGVkXG4gICAgLy8gbXVsdGlwbHktb24td2hpdGUsIHNvIHBhaW50aW5nIHdoaXRlIHNvdXJjZS1vdmVyIGlzIHBhaW50aW5nIFwibm90IGRhcmtlbmVkXCIgLS0gd2hpY2ggaXMgdGhlXG4gICAgLy8gb25seSB3YXkgYSBtdWx0aXBseSB0aWxlIGNhbiBwdXQgUEFMRSB3ZWFyIG9uIGEgZGFyayBiYXNlIHdpdGhvdXQgcmUtYmFzaW5nIHRoZSBlbnZlbG9wZVxuICAgIC8vIHR3aWNlLiBEZWZhdWx0ZWQgdG8gbm9uZS5cbiAgICBpZiAoby5zY3VmZnMpIHtcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvLnNjdWZmczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDUgKyBybmQoKSAqIChvLnNjdWZmU2NhbGUgPz8gMC4xNCkpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDI1NSwyNTUsMjU1LCR7by5zY3VmZkFscGhhID8/IDAuNTV9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgfVxuXG4gICAgLy8gQ0xPVURTOiBicm9hZCwgdmVyeSBzb2Z0IHBhdGNoZXMgb3ZlciB0aGUgV0hPTEUgdGlsZS4gQSBjYXN0IGZhY2UgaXMgbW90dGxlZCBhdCB0aGUgc2NhbGUgb2ZcbiAgICAvLyB0ZW5zIG9mIGNlbnRpbWV0cmVzIC0tIHBvdXIgbGluZXMsIGRhbXAsIHRoZSBtb3VsZCdzIG93biBoaXN0b3J5IC0tIGFuZCB0aGF0IGxvdyBmcmVxdWVuY3kgaXNcbiAgICAvLyBtb3N0IG9mIHdoYXQgc2VwYXJhdGVzIGEgcmVuZGVyZWQgc3RhbmRhcmQgZGV2aWF0aW9uIG9mIDYgZnJvbSB0aGUgcGxhdGUncyAxMi4gU21hbGwgbWFya3NcbiAgICAvLyBjYW5ub3Qgc3VwcGx5IGl0OiBhdCBwcm9wIGRpc3RhbmNlIGEgdGhvdXNhbmQgb2YgdGhlbSBhdmVyYWdlIGJhY2sgb3V0IHRvIG9uZSBmbGF0IHRvbmUuXG4gICAgLy8gS2VlcCB0aGVtIFNNQUxMIHJlbGF0aXZlIHRvIHRoZSB0aWxlLCB0aG91Z2guIEEgdGlsZSB0aGF0IHJlcGVhdHMgdHdvIG9yIHRocmVlIHRpbWVzIGFjcm9zcyBhXG4gICAgLy8gcHJvcCByZXBlYXRzIGl0cyBjbG91ZHMgdG9vLCBhbmQgYSBjbG91ZCB0aGUgc2l6ZSBvZiBhIHRoaXJkIG9mIHRoZSB0aWxlIHRoZW4gcmVhZHMgYXNcbiAgICAvLyBjYW1vdWZsYWdlIHdpdGggYSB2aXNpYmxlIHNlYW0gLS0gdGhlIHNhbWUgZmFpbHVyZSBhcyBoYXJkIGJsb3RjaGVzLCBvbmUgb2N0YXZlIGxvd2VyLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uY2xvdWRzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHYgPSBvLmNsb3VkID8/IFswLjg2LCAwLjg2LCAwLjg0XTtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKG8uY2xvdWRSID8/IDAuMTYpICogKDAuNCArIHJuZCgpICogMS40KSwgYSA9IChvLmNsb3VkQWxwaGEgPz8gMC4xMikgKiAoMC40ICsgcm5kKCkpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIFNDVUZGIGFyY3M6IHRoZSB0eXJlIGFuZCBidW1wZXIgbWFya3MgYSByb2Fkc2lkZSBiYXJyaWVyIGNvbGxlY3RzIG9uIHRoZSBiYW5kIHRoZSB0cmFmZmljXG4gICAgLy8gYWN0dWFsbHkgcmVhY2hlcy4gQnJvYWQsIHNvZnQsIG5lYXItaG9yaXpvbnRhbCBzbWVhcnMgd2l0aCBhIHN3ZXB0IHNoYXBlIC0tIGEgYmxvdGNoIHJlYWRzIGFzXG4gICAgLy8gYSBzdGFpbiwgYW5kIHdoYXQgdGhlIHBsYXRlIGNhcnJpZXMgaXMgc29tZXRoaW5nIHRoYXQgd2VudCBwYXN0LiBgc2N1ZmZCYW5kYCBpcyBhIHBhaXIgb2ZcbiAgICAvLyBIRUlHSFQgZnJhY3Rpb25zICgwIGF0IHRoZSBncm91bmQpLCBzbyBpdCBpcyBzdGF0ZWQgaW4gdGhlIHNhbWUgdGVybXMgYXMgYGNvdmVyYWdlYC5cbiAgICBpZiAoby5zY3VmZnMpIHtcbiAgICAgIGNvbnN0IHYgPSBvLnNjdWZmID8/IFswLjYyLCAwLjYyLCAwLjY0XSwgYmFuZCA9IG8uc2N1ZmZCYW5kID8/IFswLjMwLCAwLjcwXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5zY3VmZnM7IGkrKykge1xuICAgICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBzICogKDEgLSAoYmFuZFswXSArIHJuZCgpICogKGJhbmRbMV0gLSBiYW5kWzBdKSkpO1xuICAgICAgICBjb25zdCB3ID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjExKSwgaCA9IHcgKiAoMC4wNSArIHJuZCgpICogMC4xMCk7XG4gICAgICAgIGNvbnN0IGEgPSAoby5zY3VmZkFscGhhID8/IDAuMzQpICogKDAuNSArIHJuZCgpKTtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgICAgY3R4LnNhdmUoKTsgY3R4LnRyYW5zbGF0ZShjeCArIGR4LCBjeSk7IGN0eC5yb3RhdGUoKHJuZCgpIC0gMC41KSAqIDAuNDUpOyBjdHguc2NhbGUoMSwgaCAvIHcpO1xuICAgICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KDAsIDAsIDAsIDAsIDAsIHcpO1xuICAgICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNDUsIGByZ2JhKCR7cmdiKHYpfSwke2EgKiAwLjU1fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKDAsIDAsIHcsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEZPUk0gU0VBTVM6IHRoZSB2ZXJ0aWNhbCBqb2ludCBsaW5lcyBhIHByZWNhc3QgbW91bGQgbGVhdmVzLCBvbmUgcGVyIHRpbGUuIEEgZGFyayBoYWlybGluZSB3aXRoXG4gICAgLy8gYSBwYWxlciBsaXAgYmVzaWRlIGl0LCB3aGljaCBpcyB3aGF0IGEgcHJvdWQgc2VhbSBsb29rcyBsaWtlIC0tIGEgc2luZ2xlIGRhcmsgbGluZSByZWFkcyBhcyBhXG4gICAgLy8gc2NyYXRjaC4gYHNlYW1BdGAgcGxhY2VzIGl0IGFzIGEgZnJhY3Rpb24gb2YgdGhlIHRpbGUgc28gaXQgZG9lcyBub3QgbGFuZCBvbiB0aGUgd3JhcC5cbiAgICBpZiAoby5zZWFtcykge1xuICAgICAgY29uc3QgdiA9IG8uc2VhbSA/PyBbMC43MiwgMC43MSwgMC42OF07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8uc2VhbXM7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZChzICogKChvLnNlYW1BdCA/PyAwLjQyKSArIGkgLyBvLnNlYW1zKSkgJSBzO1xuICAgICAgICBjb25zdCB3cHggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHMgKiAwLjAwNCkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iodil9LCR7by5zZWFtQWxwaGEgPz8gMC41fSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgd3B4LCBzKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHYpfSwkeyhvLnNlYW1BbHBoYSA/PyAwLjUpICogMC4zfSlgOyBjdHguZmlsbFJlY3QoeCArIHdweCwgMCwgd3B4LCBzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUElOSE9MRVM6IHRoZSBhaXIgYnViYmxlcyBhIHByZWNhc3QgZmFjZSBpcyBjb3ZlcmVkIGluLiBUaGV5IGFyZSB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmdcbiAgICAvLyBtYXJrIG9mIGJhcmUgY29uY3JldGUgYXQgcHJvcCBkaXN0YW5jZSAtLSB3aXRob3V0IHRoZW0gdGhlIGZhY2UgaXMgYSBwYWludGVkIHNsYWIsIHdoaWNoIGlzXG4gICAgLy8gbWVhc3VyYWJsZSBhcyBhIHJlbmRlcmVkIHN0YW5kYXJkIGRldmlhdGlvbiBhIHRoaXJkIG9mIHRoZSBwbGF0ZSdzLiBTbWFsbCwgZGFyaywgYW5kIE1BTlkuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5waXRzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHYgPSBvLnBpdCA/PyBbMC40MiwgMC40MCwgMC4zNl07XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gKG8ucGl0UiA/PyAxLjYpICogKDAuNSArIHJuZCgpICogMS4zKTtcbiAgICAgIGNvbnN0IGEgPSAwLjI1ICsgcm5kKCkgKiAwLjU7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByICogMik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjQsIGByZ2JhKCR7cmdiKHYpfSwke2EgKiAwLjQ1fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIgKiAyLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gbW9zcyAvIGFsZ2FlIGluIHRoZSBib3R0b20gYmFuZDogY2x1c3RlcmVkIHNwZWNrcywgYnJpZ2h0ZXItdGhhbi13YXNoIGdyZWVuXG4gICAgaWYgKG8ubW9zcykge1xuICAgICAgY29uc3QgbSA9IG8ubW9zcywgYmFuZCA9IG8ubW9zc0JhbmQgPz8gMC4yMjtcbiAgICAgIC8vIGEgZmFpbnQgZ3JlZW4gd2FzaCBvdmVyIHRoZSB3aG9sZSBiYW5kIGZpcnN0LCBzbyB0aGUgY2FycGV0cyBzaXQgaW4gZGFtcCBncm91bmQgcmF0aGVyIHRoYW5cbiAgICAgIC8vIGFzIGlzb2xhdGVkIGRvdHMgb24gY2xlYW4gcGFpbnRcbiAgICAgIGNvbnN0IG1nID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGJhbmQgKiAxLjMpKTtcbiAgICAgIG1nLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihtKX0sJHtvLm1vc3NXYXNoID8/IDAuMzV9KWApOyBtZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IobSl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbWc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ubW9zc0NsdXN0ZXJzID8/IDE0KTsgaysrKSB7XG4gICAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMS42KSAqIHMgKiBiYW5kLCBjciA9IHMgKiAoMC4wMTUgKyBybmQoKSAqIDAuMDQpO1xuICAgICAgICAvLyB0aGUgY2FycGV0OiBhIHNvZnQgYmxvYiwgdGhlbiBzcGVja3Mgb3ZlciBpdCBmb3IgdGhlIHR1ZnRlZCBlZGdlXG4gICAgICAgIGNvbnN0IGNnID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGN4LCBjeSwgMCwgY3gsIGN5LCBjcik7XG4gICAgICAgIGNnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihtKX0sMC43KWApOyBjZy5hZGRDb2xvclN0b3AoMC42LCBgcmdiYSgke3JnYihtKX0sMC4zNSlgKTsgY2cuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKG0pfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY2c7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4ICsgZHgsIGN5LCBjciwgY3IgKiAwLjYsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjcjtcbiAgICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCAqIDAuNiwgciA9IDEgKyBybmQoKSAqIDM7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKG0pfSwkezAuMzUgKyBybmQoKSAqIDAuNX0pYDtcbiAgICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZ3JhaW4uIGBncmFpbmAvYGdyYWluQWxwaGFgIGRlZmF1bHQgdG8gdGhlIG9yaWdpbmFsIDE1MDAgYXQgMC4xMiwgc28gbm8gYWxyZWFkeS1lbWl0dGVkIHByb3BcbiAgICAvLyBjaGFuZ2VzOyBhIHRpbGUgc3RyZXRjaGVkIG92ZXIgYSBXSE9MRSBwcm9wICh1dlNjYWxlID4gaXRzIGhlaWdodCkgc2FtcGxlcyBvbmx5IHRoZSBmcmFjdGlvblxuICAgIC8vIG9mIHRoZSB0aWxlIHdpZHRoIGhlaWdodFVWIGZvbGRzIG9udG8gaXQsIGFuZCBuZWVkcyB0aGUgY291bnQgcmFpc2VkIHRvIGtlZXAgdGhlIHNhbWUgZGVuc2l0eS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmdyYWluID8/IDE1MDApOyBpKyspIHtcbiAgICAgIGNvbnN0IGxvID0gby5ncmFpbkxvID8/IDIwMDsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgdiA9IGxvICsgTWF0aC5yb3VuZChybmQoKSAqICgyNTUgLSBsbykpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LCR7by5ncmFpbkFscGhhID8/IDAuMTJ9KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAxLjUsIDEuNSk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIENIQUlOLUxJTksgdGlsZTogYSBkaWFtb25kIHdpcmUgbGF0dGljZSBkcmF3biBvcGFxdWUgb3ZlciBhIFRSQU5TUEFSRU5UIGdyb3VuZCwgYm91bmQgYXMgbWFwXG4gKiAgb24gYW4gYWxwaGEtdGVzdGVkIG1hdGVyaWFsIHNvIHRoZSBjZWxscyBhcmUgb3Blbi4gT25lIHRpbGUgaXMgb25lIGRpYW1vbmQgY2VsbDsgdGhlIHBhbmUnc1xuICogIFVWcyByZXBlYXQgaXQgYXQgdGhlIHJlYWwgbWVzaCBwaXRjaC4gYHdpcmVgIGlzIHRoZSB3aXJlIHdpZHRoIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGNlbGwuICovXG5mdW5jdGlvbiBjaGFpbmxpbmtUaWxlKHNpemU6IG51bWJlciwgd2lyZTogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHgubGluZVdpZHRoID0gTWF0aC5tYXgoMS41LCB3aXJlICogcyk7XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGNvbnN0IHYgPSAxNTAgKyBNYXRoLnJvdW5kKHJuZCgpICogMzApO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2IoJHt2fSwke3YgKyAyfSwke3YgKyA0fSlgO1xuICAgIC8vIHR3byBkaWFnb25hbHMgdGhyb3VnaCB0aGUgdGlsZSwgb2Zmc2V0IHNvIHRoZSB3cmFwIG1ha2VzIGEgY29udGludW91cyBkaWFtb25kIGxhdHRpY2VcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCAwKTsgY3R4LmxpbmVUbyhzLCBzKTtcbiAgICBjdHgubW92ZVRvKHMsIDApOyBjdHgubGluZVRvKDAsIHMpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICAvLyB0aGUga251Y2tsZSB3aGVyZSB3aXJlcyB0d2lzdCByb3VuZCBlYWNoIG90aGVyLCBhdCB0aGUgdHdvIGNyb3NzaW5ncyBvbiB0aGUgdGlsZSBlZGdlc1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7diAtIDIwfSwke3YgLSAxOH0sJHt2IC0gMTZ9KWA7XG4gICAgZm9yIChjb25zdCBbeCwgeV0gb2YgW1swLCAwXSwgW3MsIDBdLCBbMCwgc10sIFtzLCBzXSwgW3MgLyAyLCBzIC8gMl1dKSB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCwgeSwgY3R4LmxpbmVXaWR0aCAqIDAuOSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBCQU1CT08gU1RSSVAgdGlsZTogdmVydGljYWwgc3BsaXQtYmFtYm9vIHN0cmlwcyB3aXRoIHBhbGUgY3VsbSBmYWNlcywgZGFyayBqb2ludHMgYmV0d2VlbiB0aGVtXG4gKiAgYW5kIGEgbm9kZSBsaW5lIG9yIHR3byAtLSBhIG11bHRpcGxpZXIgb24gdGhlIG1lYXN1cmVkIHNpbHZlci1ncmV5LiAqL1xuZnVuY3Rpb24gYmFtYm9vVGlsZShzaXplOiBudW1iZXIsIHN0cmlwczogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IHN3ID0gcyAvIHN0cmlwcztcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IHN0cmlwczsgYisrKSB7XG4gICAgICBjb25zdCB0b25lID0gMC44MCArIHJuZCgpICogMC4yLCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0b25lKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2IC0gMn0sJHt2IC0gNn0pYDsgY3R4LmZpbGxSZWN0KGIgKiBzdywgMCwgc3csIHMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDUwLDQyLDM0LDAuNiknOyBjdHguZmlsbFJlY3QoYiAqIHN3LCAwLCBNYXRoLm1heCgxLCBzICogMC4wMDYpLCBzKTtcbiAgICAgIC8vIGEgaGlnaGxpZ2h0IGRvd24gdGhlIGN1bG0ncyByb3VuZFxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTApJzsgY3R4LmZpbGxSZWN0KGIgKiBzdyArIHN3ICogMC4zNSwgMCwgc3cgKiAwLjI1LCBzKTtcbiAgICAgIC8vIG5vZGUgcmluZ3NcbiAgICAgIGNvbnN0IG4gPSAxICsgTWF0aC5mbG9vcihybmQoKSAqIDIpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHsgY29uc3QgeSA9IHJuZCgpICogczsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDcwLDYwLDQ4LDAuNDUpJzsgY3R4LmZpbGxSZWN0KGIgKiBzdywgeSwgc3csIE1hdGgubWF4KDEsIHMgKiAwLjAwOCkpOyB9XG4gICAgICAvLyBmaW5lIGdyYWluIGxpbmVzXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDY7IGsrKykgeyBjb25zdCB4ID0gYiAqIHN3ICsgcm5kKCkgKiBzdzsgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDgwLDcwLDU4LCR7MC4wNSArIHJuZCgpICogMC4xfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7IH1cbiAgICB9XG4gICAgLy8gbW91bGQgc3BlY2tsZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzAwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogczsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDMwLDI4LDI0LDAuMTgpJzsgY3R4LmZpbGxSZWN0KHgsIHksIDEgKyBybmQoKSAqIDIsIDEgKyBybmQoKSAqIDIpOyB9XG4gIH0pO1xufVxuXG4vKiogUE9TVEVSIHRpbGUgZm9yIGEgaG9hcmRpbmc6IHRvcm4gcGFzdGUtdXAgc2hlZXRzIGFuZCBhIHNwcmF5IHN0ZW5jaWwgb3ZlciBhIFRSQU5TUEFSRU5UIGdyb3VuZCxcbiAqICBib3VuZCBvbiBhbiBhbHBoYS10ZXN0ZWQgcGFuZSBhIGZldyBtaWxsaW1ldHJlcyBwcm91ZCBvZiB0aGUgc2hlZXQuIGBsaW5lc2AgYXJlIHRoZSBzdGVuY2lsXG4gKiAgc3RyaW5nczsgYSBwcmludGVkIGdyYXBoaWMgaXMgZXhhY3RseSB0aGUgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIGNhc2UuICovXG5mdW5jdGlvbiBwb3N0ZXJUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBsaW5lczogc3RyaW5nW10pOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBwYXN0ZS11cHM6IG92ZXJsYXBwaW5nIG9mZi13aGl0ZSByZWN0YW5nbGVzIHdpdGggdG9ybiBlZGdlcyBhbmQgZmFpbnQgcHJpbnQgbGluZXNcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4zMCksIHkgPSBzICogKDAuMTUgKyBybmQoKSAqIDAuNDUpLCB3ID0gcyAqICgwLjE0ICsgcm5kKCkgKiAwLjE2KSwgaCA9IHMgKiAoMC4xOCArIHJuZCgpICogMC4yMik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHsyMjUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApfSwkezIyMiArIE1hdGgucm91bmQocm5kKCkgKiAxOCl9LCR7MjEwICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKX0sMC45NilgO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgY29uc3QgbiA9IDk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpKyspIGN0eC5saW5lVG8oeCArIHcgKiBpIC8gbiwgeSArIChybmQoKSAtIDAuNSkgKiBoICogMC4wOCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpKyspIGN0eC5saW5lVG8oeCArIHcgKyAocm5kKCkgLSAwLjUpICogdyAqIDAuMDgsIHkgKyBoICogaSAvIG4pO1xuICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGktLSkgY3R4LmxpbmVUbyh4ICsgdyAqIGkgLyBuLCB5ICsgaCArIChybmQoKSAtIDAuNSkgKiBoICogMC4xMik7XG4gICAgICBmb3IgKGxldCBpID0gbiAtIDE7IGkgPj0gMDsgaS0tKSBjdHgubGluZVRvKHggKyAocm5kKCkgLSAwLjUpICogdyAqIDAuMDgsIHkgKyBoICogaSAvIG4pO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDQwLDQ1LDAuNTUpJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSBjdHguZmlsbFJlY3QoeCArIHcgKiAwLjEsIHkgKyBoICogKDAuMiArIGkgKiAwLjEpLCB3ICogKDAuMyArIHJuZCgpICogMC41KSwgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSk7XG4gICAgfVxuICAgIC8vIHNwcmF5IHN0ZW5jaWwsIHNsaWdodGx5IHNvZnQgYW5kIHVuZXZlblxuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyMCwyMCwyMiwwLjg4KSc7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAke01hdGgucm91bmQocyAqIDAuMDcpfXB4IHNhbnMtc2VyaWZgO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcyAqIDAuNDAsIHkgPSBzICogKDAuNDQgKyBpICogMC4xMyk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDM7IGsrKykgeyBjdHguZ2xvYmFsQWxwaGEgPSAwLjY7IGN0eC5maWxsVGV4dChsaW5lc1tpXSwgeCArIChybmQoKSAtIDAuNSkgKiAzLCB5ICsgKHJuZCgpIC0gMC41KSAqIDMpOyB9XG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBTVFJJUEUgdGlsZTogYWx0ZXJuYXRpbmcgY29sb3VyIGJhbmRzIGFsb25nIHUgKGFuIGF3bmluZyksIHdpdGggYSBzb2Z0IGdyaW1lIG11bHRpcGx5IHNvIHRoZSBjbG90aFxuICogIHJlYWRzIHdvcm4gcmF0aGVyIHRoYW4gcHJpbnRlZC4gYGFgL2BiYCBhcmUgdGhlIHR3byBiYW5kIGNvbG91cnMgYXMgW3IsZyxiXSAwLTEuIEJvdW5kIGFzIG1hcCBvbiBhXG4gKiAgV0hJVEUgbWF0ZXJpYWwgc28gdGhlIGJhbmRzIGNhcnJ5IHRoZSB3aG9sZSBhbGJlZG8uICovXG4vLyBgb2AgaXMgb3B0aW9uYWwgYW5kIGV2ZXJ5IGZpZWxkIGRlZmF1bHRzIHRvIHRoZSBwcmV2aW91cyBoYXJkLWNvZGVkIGJlaGF2aW91ciwgc28gbm8gcHJvcCB0aGF0XG4vLyBkb2VzIG5vdCBwYXNzIGl0IGNoYW5nZXMuIGBzbXVkZ2VzYCBhbmQgYHNwZWNrc2AgZXhpc3QgYmVjYXVzZSBicnVzaGVkIFNURUVMIHdhbnRzIHRoZSBiYW5kaW5nXG4vLyB3aXRob3V0IHRoZSBkaXJ0OiB0aGUgNDAgcmFkaWFsIHNtdWRnZXMgYW5kIDEyMDAgbGlnaHQgc3BlY2tzIHJlYWQgYXMgbW91bGQgb24gYSBjbGVhbiBzYXRpblxuLy8gc3VyZmFjZSwgd2hpY2ggaXMgdGhlIG9wcG9zaXRlIG9mIHdoYXQgYSBzdHJpcGUgdGlsZSBpcyBmb3IgdGhlcmUuXG5mdW5jdGlvbiBzdHJpcGVUaWxlKHNpemU6IG51bWJlciwgYmFuZHM6IG51bWJlciwgYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIG86IGFueSA9IHt9KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYHJnYigke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfSlgO1xuICAgIGNvbnN0IHcgPSBzIC8gYmFuZHM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYW5kczsgaSsrKSB7IGN0eC5maWxsU3R5bGUgPSByZ2IoaSAlIDIgPyBiIDogYSk7IGN0eC5maWxsUmVjdChNYXRoLmZsb29yKGkgKiB3KSwgMCwgTWF0aC5jZWlsKHcpICsgMSwgcyk7IH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNtdWRnZXMgPz8gNDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSA0ICsgcm5kKCkgKiBzICogMC4wOCwgYWwgPSAwLjA2ICsgcm5kKCkgKiAwLjE4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTUwLDE0MCwxMjUsJHthbH0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxNTAsMTQwLDEyNSwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwZWNrcyA/PyAxMjAwKTsgaSsrKSB7IGNvbnN0IHYgPSAyMDAgKyBNYXRoLnJvdW5kKHJuZCgpICogNTUpOyBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4xMClgOyBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCBybmQoKSAqIHMsIDEuNSwgMS41KTsgfVxuICAgIC8vIEJST0FEIHJlZmxlY3Rpb24gYmFuZGluZzogYG8uYnJvYWRgIHdob2xlIGJyaWdodC9kYXJrIGN5Y2xlcyBhY3Jvc3MgdGhlIHRpbGUsIGRyYXduIGFzIG9uZVxuICAgIC8vIHdyYXBwaW5nIGNvc2luZSBncmFkaWVudC4gQnJ1c2hlZCBzdGVlbCB3aXRoIG5vIGVudmlyb25tZW50IG1hcCB0byByZWZsZWN0IGhhcyBub3RoaW5nIHRvXG4gICAgLy8gbWFrZSBpdHMgZmxhbmtzIGJyaWdodCBhbmQgaXRzIG1pZGRsZSBkYXJrLCBhbmQgdGhlIGZpbmUgZ3JhaW4gY2Fubm90IHN1cHBseSBpdCAtLSBhIDMgbW1cbiAgICAvLyBwaXRjaCBhdmVyYWdlcyB0byBvbmUgZmxhdCB0b25lIGF0IHByb3AgZGlzdGFuY2UsIHdoaWNoIGlzIHdoYXQgYSByZW5kZXJlZCBzdGFpbmxlc3MgYmluXG4gICAgLy8gbG9va3MgbGlrZSB3aGVuIGl0IHJlYWRzIGFzIHBhaW50ZWQgbWV0YWwuIFdob2xlIGN5Y2xlcywgc28gdGhlIHRpbGUgc3RpbGwgbWVldHMgaXRzZWxmLlxuICAgIC8vIERlZmF1bHRlZCBPRkYsIHNvIGV2ZXJ5IGV4aXN0aW5nIGNhbGxlciBpcyBieXRlLWlkZW50aWNhbC5cbiAgICBpZiAoby5icm9hZCkge1xuICAgICAgY29uc3QgbG8gPSBvLmJyb2FkTG8gPz8gMC44MCwgaGkgPSBvLmJyb2FkSGkgPz8gMS4wO1xuICAgICAgY29uc3QgZzMgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgcywgMCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA2NDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHQgPSBpIC8gNjQ7XG4gICAgICAgIGNvbnN0IHYgPSBsbyArIChoaSAtIGxvKSAqICgwLjUgKyAwLjUgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIG8uYnJvYWQgKiB0KSk7XG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLnJvdW5kKDI1NSAqIHYpO1xuICAgICAgICBnMy5hZGRDb2xvclN0b3AodCwgYHJnYigke2N9LCR7Y30sJHtjfSlgKTtcbiAgICAgIH1cbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBTZWFtbGVzcyBhcm91bmQtYnktdXAgVVZzIGZvciBhIExhdGhlR2VvbWV0cnk6IHUgZnJvbSB0aGUgU0VHTUVOVCBpbmRleCAodGhlIGxhdGhlIG9yZGVycyBpdHNcbiAqICB2ZXJ0aWNlcyBzZWdtZW50LW1ham9yLCBpbmRleCA9IHNlZyAqIHBvaW50Q291bnQgKyBwb2ludCksIHNvIHRoZSBkdXBsaWNhdGVkIHNlYW0gY29sdW1uIHJlYWRzXG4gKiAgdSA9IHJlcGVhdHMgZXhhY3RseSBhbmQgUmVwZWF0V3JhcHBpbmcgY2xvc2VzIGl0LiBgc2NhbGVgIGlzIHRoZSB0aWxlIHNpemUgaW4gbWV0cmVzOyB0aGVcbiAqICBhcm91bmQtcmVwZWF0IGNvdW50IGlzIHJvdW5kZWQgc28gdGhlIHRpbGUgbWVldHMgaXRzZWxmLCBmcm9tIHRoZSBwcm9maWxlJ3Mgd2lkZXN0IHJhZGl1cy4gKi9cbmZ1bmN0aW9uIGxhdGhlVVYoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHBvaW50Q291bnQ6IG51bWJlciwgc2VnOiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIHZTY2FsZSA9IHNjYWxlLCB2MCA9IDApOiB2b2lkIHtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBsZXQgck1heCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSByTWF4ID0gTWF0aC5tYXgock1heCwgTWF0aC5oeXBvdChwLmdldFgoaSksIHAuZ2V0WihpKSkpO1xuICBjb25zdCByZXAgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKDIgKiBNYXRoLlBJICogck1heCAvIHNjYWxlKSk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgcyA9IE1hdGguZmxvb3IoaSAvIHBvaW50Q291bnQpO1xuICAgIHV2W2kgKiAyXSA9IChzIC8gc2VnKSAqIHJlcDsgdXZbaSAqIDIgKyAxXSA9IChwLmdldFkoaSkgLSB2MCkgLyB2U2NhbGU7XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xufVxuXG4vKiogRVhQT1NFRC1BR0dSRUdBVEUgdGlsZTogYSBkYXJrIG1vcnRhciBncm91bmQgcGFja2VkIHdpdGggcm91bmRlZCBwZWJibGVzIGluIGEgbWVhc3VyZWQgcGFsZXR0ZSxcbiAqICBlYWNoIGRyYXduIGF0IG5pbmUgd3JhcHBlZCBvZmZzZXRzIHNvIHRoZSB0aWxlIGlzIHNlYW1sZXNzLiBgby5wYWxldHRlYCBpcyBhIGxpc3Qgb2YgW3IsZyxiXVxuICogIHJhdGlvcyBhZ2FpbnN0IHRoZSBtYXRlcmlhbCBjb2xvdXIsIGBvLmdyb3VuZGAgdGhlIG1vcnRhciByYXRpbywgYG8uY291bnRgIHRoZSBwZWJibGUgY291bnQuICovXG5mdW5jdGlvbiBwZWJibGVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgcmdiKCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9KWA7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHJnYihvLmdyb3VuZCA/PyBbMC40NSwgMC40MiwgMC4zOF0pOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgcGFsOiBudW1iZXJbXVtdID0gby5wYWxldHRlID8/IFtbMC44NSwgMC43OCwgMC42Nl0sIFswLjcyLCAwLjYyLCAwLjUwXSwgWzAuNjAsIDAuNTgsIDAuNTVdLCBbMC45MCwgMC44NiwgMC44MF1dO1xuICAgIGNvbnN0IG4gPSBvLmNvdW50ID8/IDkwMCwgck1pbiA9IHMgKiAoby5yTWluID8/IDAuMDEyKSwgck1heCA9IHMgKiAoby5yTWF4ID8/IDAuMDI4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgcnggPSByTWluICsgcm5kKCkgKiAock1heCAtIHJNaW4pLCByeSA9IHJ4ICogKDAuNiArIHJuZCgpICogMC41KSwgYSA9IHJuZCgpICogTWF0aC5QSTtcbiAgICAgIGNvbnN0IGMgPSBwYWxbTWF0aC5mbG9vcihybmQoKSAqIHBhbC5sZW5ndGgpXSwgayA9IDAuODUgKyBybmQoKSAqIDAuMztcbiAgICAgIC8vIENPTlRBQ1QgU0hBRE9XIGZpcnN0LCBvZmZzZXQgZG93bi1yaWdodCBhbmQgYSB0b3VjaCBsYXJnZXIsIHNvIHdoYXQgc3Vydml2ZXMgYXJvdW5kIGVhY2hcbiAgICAgIC8vIHN0b25lIGlzIHRoZSBkYXJrIG1vcnRhciBjcmVzY2VudCB0aGF0IG1ha2VzIGEgcGFja2VkIGFnZ3JlZ2F0ZSByZWFkIGFzIHN0b25lcyByYXRoZXIgdGhhblxuICAgICAgLy8gYXMgb3ZlcmxhcHBpbmcgZmxhdCBkaXNjcy4gYHNoYWRlYCBpcyBhIHJhdGlvIGFnYWluc3QgdGhlIG1vcnRhciBncm91bmQ7IDAga2VlcHMgdGhlIG9sZFxuICAgICAgLy8gbG9vayBmb3IgZXZlcnkgdGlsZSBhbHJlYWR5IHNoaXBwZWQuXG4gICAgICBpZiAoby5zaGFkZSkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gcmdiKChvLmdyb3VuZCA/PyBbMC40NSwgMC40MiwgMC4zOF0pLm1hcCgodikgPT4gdiAqIG8uc2hhZGUpKTtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHggKyByeCAqIDAuMTYsIHkgKyBkeSArIHJ5ICogMC4yMiwgcnggKiAxLjEsIHJ5ICogMS4xLCBhLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICAgIGN0eC5maWxsU3R5bGUgPSByZ2IoYy5tYXAoKHYpID0+IE1hdGgubWluKDEsIHYgKiBrKSkpO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgcngsIHJ5LCBhLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIC8vIGEgaGlnaGxpZ2h0IGNyZXNjZW50IG9uIHRoZSBsaXQgc2lkZSBzbyBlYWNoIHN0b25lIHJlYWRzIGFzIGEgYnVtcFxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDI1NSwyNTUsMjU1LCR7by5nbG9zcyA/PyAwLjE4fSlgO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHggLSByeCAqIDAuMiwgeSArIGR5IC0gcnkgKiAwLjI1LCByeCAqIDAuNSwgcnkgKiAwLjQsIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBUWVJFIFRSRUFEIHRpbGUgZm9yIGEgbGF0aGUgY2FycnlpbmcgYGN5bFVWYDogdSBydW5zIEFST1VORCB0aGUgdHlyZSBhbmQgdiBVUCBpdCwgc28gdHJlYWQgc2xvdHMgYXJlXG4gKiAgYmFycyBhdCBjb25zdGFudCB1IGFuZCB0aGUgY2lyY3VtZmVyZW50aWFsIGdyb292ZXMgYXJlIGxpbmVzIGF0IGNvbnN0YW50IHYuIERyYXduIGFzIHJhdGlvcyBvbiB3aGl0ZVxuICogIGFuZCBtdWx0aXBsaWVkIGludG8gdGhlIChsaWZ0ZWQpIHJ1YmJlciBjb2xvdXI7IGBvLmdyb292ZWAgaXMgdGhlIGRhcmtlc3QgcmF0aW8sIGtlcHQgYWJvdmUgdGhlXG4gKiAgbHVtYS01OCBob2xlIGJhbmQgYnkgdGhlIGNhbGxlci4gYG8uc2xvdHNgIGJhcnMgcGVyIHRpbGUsIGBvLnJpbmdzYCBjaXJjdW1mZXJlbnRpYWwgbGluZXMuICovXG5mdW5jdGlvbiB0cmVhZFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBncm9vdmUgPSBvLmdyb292ZSA/PyAwLjgwLCBzbG90cyA9IG8uc2xvdHMgPz8gMiwgcmluZ3MgPSBvLnJpbmdzID8/IDI7XG4gICAgLy8gYGJhc2VgIGlzIHRoZSB0b25lIHRoZSBVTi1ncmltZWQgcGFydCBvZiB0aGUgdGlsZSBjYXJyaWVzLCBkZWZhdWx0aW5nIHRvIHdoaXRlIC0tIGkuZS4gdG9cbiAgICAvLyBcImxlYXZlIHRoZSB2ZXJ0ZXggY29sb3VyIGFsb25lXCIsIHdoaWNoIGlzIGV2ZXJ5IGV4aXN0aW5nIGNhbGxlci4gSXQgZXhpc3RzIGZvciBFTlZFTE9QRVxuICAgIC8vIFJFLUJBU0lORzogYSBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4sIHNvIGEgcGFydCB0aGF0IG11c3QgcmVhZCBjbGVhbiBvcmFuZ2UgaW4gb25lIHBsYWNlIGFuZFxuICAgIC8vIGdyZXkgcm9hZCBncmltZSBpbiBhbm90aGVyIGNhbm5vdCBkbyBpdCBmcm9tIGEgc2luZ2xlIHZlcnRleCBjb2xvdXIsIGJlY2F1c2UgdGhlIGdyaW1lIGlzXG4gICAgLy8gSElHSEVSIGluIGJsdWUgdGhhbiB0aGUgb3JhbmdlIGlzLiBUaGUgdmVydGV4IGNvbG91ciBiZWNvbWVzIHRoZSBwZXItY2hhbm5lbCBtYXhpbXVtIG9mIGJvdGhcbiAgICAvLyBhbmQgdGhpcyBmaWxsIHBhaW50cyB0aGUgY2xlYW4gdG9uZSBiYWNrIG91dCBvZiBpdC5cbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IFsxLCAxLCAxXTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGNvbnN0IGd2ID0gTWF0aC5yb3VuZCgyNTUgKiBncm9vdmUpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9KWA7XG4gICAgY29uc3QgcGl0Y2ggPSBzIC8gc2xvdHMsIHcgPSBwaXRjaCAqIChvLnNsb3RXaWR0aCA/PyAwLjE2KTtcbiAgICAvLyB0cmVhZCBzbG90cyBzcGFuIHRoZSBiYW5kIGJldHdlZW4gdGhlIHR3byBlZGdlIHNob3VsZGVycyAodiAwLjEyLi4wLjg4IG9mIHRoZSB0aWxlKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xvdHM7IGkrKykgeyBjb25zdCB4ID0gaSAqIHBpdGNoICsgcGl0Y2ggKiAwLjQgKyAocm5kKCkgLSAwLjUpICogcGl0Y2ggKiAwLjE7IGN0eC5maWxsUmVjdCh4LCBzICogMC4xMiwgdywgcyAqIDAuNzYpOyBjdHguZmlsbFJlY3QoeCAtIHMsIHMgKiAwLjEyLCB3LCBzICogMC43Nik7IH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpbmdzOyBpKyspIHsgY29uc3QgeSA9IHMgKiAoMC4yICsgMC42ICogKGkgKyAwLjUpIC8gcmluZ3MpOyBjdHguZmlsbFJlY3QoMCwgeSAtIDEuNSwgcywgMyk7IH1cbiAgICAvLyBzaWRld2FsbCBzaGVlbjogYSBzb2Z0IGxpZ2h0ZXIgd2FzaCBzbyB0aGUgcnViYmVyIGlzIG5vdCBvbmUgZmxhdCB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykgeyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjEyKSwgdiA9IDIzNSArIE1hdGgucm91bmQocm5kKCkgKiAyMCk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTsgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuNSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9IH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBPTEQgVFlSRSB0aWxlOiBUV08gdHlyZSBoZWlnaHRzIHRhbGwgYnkgYG8ucGl0Y2hgIG1ldHJlcyBhcm91bmQgKGN5bFVWKS4gVGhlIHVwcGVyIGhhbGYgKHYgMC41LTEpXG4gKiAgaXMgYSB0cmVhZGVkIHR5cmUsIHRoZSBsb3dlciBoYWxmICh2IDAtMC41KSBhIHdvcm4gU0xJQ0sgd2l0aCBjaXJjdW1mZXJlbnRpYWwgZ3Jvb3ZlcyBhbmQgc2hvcnRcbiAqICBzaG91bGRlciBzaXBlcyBvbmx5LCBzbyBhIHN0YWNrIG1peGVzIGJhbGQgYW5kIHRyZWFkZWQgdHlyZXMgb2ZmIG9uZSBjYW52YXMgYnkgdjAuIERyYXduIGFzIFJBVElPU1xuICogIGFnYWluc3QgdGhlIHZlcnRleC1jb2xvdXJlZCBydWJiZXIgYXQgYGJhc2VgICgyMDAvMjU1IC0+IHZlcnRleCB0b25lcyBhcmUgYXV0aG9yZWQgMS4yNzV4IHRoZVxuICogIGludGVuZGVkIGFsYmVkbyBzbyBkdXN0IGFuZCBzY3VmZnMgY2FuIGdvIEJSSUdIVEVSIHRoYW4gdGhlIHJ1YmJlciB1bmRlciBhIG11bHRpcGx5IGNhbnZhcykuXG4gKiAgUm93cyBhcmUgaGVpZ2h0czogbG93ZXIgc2lkZXdhbGwsIHRyZWFkIGJhbmQgKHYgYG8uYmFuZFswXWAuLmBvLmJhbmRbMV1gIG9mIHRoZSBzdHJpcCksIHVwcGVyXG4gKiAgc2lkZXdhbGwgd2l0aCBiZWFkIHJpbmdzIGFuZCBtb3VsZCBsaW5lcy4gV2VhcjogYSB3YXJtIGR1c3Qgd2FzaCBvbiB0aGUgbG93ZXIgc2hvdWxkZXIsIGdyZXkgc2N1ZmZzXG4gKiAgb24gYm90aCBzaG91bGRlcnMsIGR1c3QgY2F1Z2h0IGluIHRoZSBjdXRzLCBncmFpbiBvdmVyIGV2ZXJ5dGhpbmcuICovXG5mdW5jdGlvbiB0eXJlVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gMjAwLCBiYW5kID0gby5iYW5kID8/IFswLjI0LCAwLjc2XSwgZ3Jvb3ZlID0gby5ncm9vdmUgPz8gMC40NTtcbiAgICBjb25zdCBndiA9IE1hdGgucm91bmQoYmFzZSAqIGdyb292ZSksIHJ2ID0gTWF0aC5yb3VuZChiYXNlICogMC43KSwgbXYgPSBNYXRoLnJvdW5kKGJhc2UgKiAwLjkpO1xuICAgIGNvbnN0IGR1c3QgPSBvLmR1c3QgPz8gWzIzMiwgMjE0LCAxOTBdO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7YmFzZX0sJHtiYXNlfSwke2Jhc2V9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMgKiBzIC8gNjsgaSsrKSB7IGNvbnN0IHYgPSBiYXNlICsgTWF0aC5yb3VuZCgocm5kKCkgLSAwLjUpICogMjIpOyBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCBybmQoKSAqIHMsIDIsIDIpOyB9XG4gICAgLy8gb25lIHR5cmUgc3RyaXAgYmV0d2VlbiBjYW52YXMgcm93cyB5YSAodG9wKSBhbmQgeWIgKGJvdHRvbSk7IGNhbnZhcyB5IGdyb3dzIERPV04sIHYgZ3Jvd3MgVVBcbiAgICBjb25zdCBzdHJpcCA9ICh5YTogbnVtYmVyLCB5YjogbnVtYmVyLCB0cmVhZGVkOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCBoID0geWIgLSB5YSwgYjAgPSB5YSArIGggKiAoMSAtIGJhbmRbMV0pLCBiMSA9IHlhICsgaCAqICgxIC0gYmFuZFswXSk7XG4gICAgICBjb25zdCBuZyA9IG8uZ3Jvb3ZlcyA/PyAzLCBndyA9IGggKiAwLjAyNDtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9KWA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5nOyBpKyspIHsgY29uc3QgeSA9IGIwICsgKGIxIC0gYjApICogKGkgKyAxKSAvIChuZyArIDEpOyBjdHguZmlsbFJlY3QoMCwgeSAtIGd3IC8gMiwgcywgZ3cpOyB9XG4gICAgICBjb25zdCBucyA9IG8uc2lwZXMgPz8gMiwgdyA9IHMgKiAoby5zaXBlV2lkdGggPz8gMC4wNSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8PSBuZzsgaysrKSB7XG4gICAgICAgIGNvbnN0IHkwID0gayA9PT0gMCA/IGIwIDogYjAgKyAoYjEgLSBiMCkgKiBrIC8gKG5nICsgMSkgKyBndyAvIDIsIHkxID0gayA9PT0gbmcgPyBiMSA6IGIwICsgKGIxIC0gYjApICogKGsgKyAxKSAvIChuZyArIDEpIC0gZ3cgLyAyO1xuICAgICAgICAvLyBhIHNsaWNrIGtlZXBzIG9ubHkgU0hPUlQgc2lwZXMgYXQgdGhlIHR3byBzaG91bGRlciByb3dzLCBjdXQgaW4gZnJvbSB0aGUgYmFuZCBlZGdlXG4gICAgICAgIGNvbnN0IG91dGVyID0gayA9PT0gMCB8fCBrID09PSBuZztcbiAgICAgICAgaWYgKCF0cmVhZGVkICYmICFvdXRlcikgY29udGludWU7XG4gICAgICAgIGNvbnN0IHlzMCA9IHRyZWFkZWQgPyB5MCA6IChrID09PSAwID8geTAgOiB5MSAtICh5MSAtIHkwKSAqIDAuNDUpLCB5czEgPSB0cmVhZGVkID8geTEgOiAoayA9PT0gMCA/IHkwICsgKHkxIC0geTApICogMC40NSA6IHkxKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuczsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgeCA9ICgoaSArIDAuNSkgLyBucyArIChrICUgMikgKiAwLjUgLyBucykgKiBzICsgKHJuZCgpIC0gMC41KSAqIHMgKiAwLjA2LCBzbCA9IChybmQoKSAtIDAuNSkgKiBzICogMC4wODtcbiAgICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBkeCwgeXMwKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB3LCB5czApOyBjdHgubGluZVRvKHggKyBkeCArIHcgKyBzbCwgeXMxKTsgY3R4LmxpbmVUbyh4ICsgZHggKyBzbCwgeXMxKTsgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHNob3VsZGVyIHN0ZXAgYXQgdGhlIHRvcCBvZiB0aGUgYmFuZCwgYmVhZCByaW5ncyBhbmQgbW91bGQgbGluZXMgb24gdGhlIHNpZGV3YWxsc1xuICAgICAgY29uc3Qgc2ggPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgYjAgLSBoICogMC4wMywgMCwgYjAgKyBoICogMC4wMik7IHNoLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2d2fSwke2d2fSwke2d2fSwwKWApOyBzaC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtndn0sJHtndn0sJHtndn0sMC40NSlgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBzaDsgY3R4LmZpbGxSZWN0KDAsIGIwIC0gaCAqIDAuMDMsIHMsIGggKiAwLjA1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cnZ9LCR7cnZ9LCR7cnZ9KWA7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjA0NSwgcywgaCAqIDAuMDEyKTsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuOTQsIHMsIGggKiAwLjAxMik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke212fSwke212fSwke212fSlgOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC4xMSwgcywgMik7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjg4LCBzLCAyKTtcbiAgICAgIC8vIHdlYXI6IHdhcm0gcm9hZCBkdXN0IG9uIHRoZSBsb3dlciBzaG91bGRlciBhbmQgc2lkZXdhbGwsIGdyZXkgc2N1ZmZzIG9uIGJvdGggc2hvdWxkZXJzXG4gICAgICBjb25zdCBkZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5YiwgMCwgeWEgKyBoICogMC42KTsgZGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7ZHVzdFswXX0sJHtkdXN0WzFdfSwke2R1c3RbMl19LCR7by5kdXN0QWxwaGEgPz8gMC4zNX0pYCk7IGRnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2R1c3RbMF19LCR7ZHVzdFsxXX0sJHtkdXN0WzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGRnOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC42LCBzLCBoICogMC40KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc2N1ZmZzID8/IDE0KTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSA8IDAuNSA/IGIwICsgKHJuZCgpIC0gMC4zKSAqIGggKiAwLjA4IDogYjEgKyAocm5kKCkgLSAwLjcpICogaCAqIDAuMDgsIHIgPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMDUpLCB2ID0gMjI1ICsgTWF0aC5yb3VuZChybmQoKSAqIDI1KTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7IGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjUpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSwgciAqIDIuMiwgciAqIDAuNiwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2xpZ2h0ZXInO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBiMCArIHJuZCgpICogKGIxIC0gYjApLCB2ID0gNiArIE1hdGgucm91bmQocm5kKCkgKiAxNCk7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHtNYXRoLnJvdW5kKHYgKiAwLjkpfSwke01hdGgucm91bmQodiAqIDAuNzUpfSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMiArIHJuZCgpICogNiwgMiArIHJuZCgpICogMyk7IH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH07XG4gICAgc3RyaXAoMCwgcyAvIDIsIHRydWUpOyAgICAgIC8vIHYgMC41Li4xOiB0cmVhZGVkXG4gICAgc3RyaXAocyAvIDIsIHMsIGZhbHNlKTsgICAgIC8vIHYgMC4uMC41OiBzbGlja1xuICB9KTtcbn1cblxuLyoqIEEgdGFwZXJlZCBib3g6IEJveEdlb21ldHJ5KDEsIGgsIDEpIHdob3NlIHgveiBhcmUgc2NhbGVkIHBlciB2ZXJ0ZXggYnkgdGhlIGZvb3RwcmludCBpbnRlcnBvbGF0ZWRcbiAqICBmcm9tICh3MCwgZDApIGF0IHRoZSBib3R0b20gdG8gKHcxLCBkMSkgYXQgdGhlIHRvcC4gTm9ybWFscyByZWNvbXB1dGVkIHNvIHRoZSBzbGFudGVkIGZhY2VzIHNoYWRlXG4gKiAgZmxhdC4gYGJgID0gW2N4LCB5Qm90dG9tLCBjeiwgdzAsIGQwLCB3MSwgZDEsIGhdLiAqL1xuZnVuY3Rpb24gZnJ1c3R1bShiOiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgW2N4LCB5MCwgY3osIHcwLCBkMCwgdzEsIGQxLCBoXSA9IGI7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgaCwgMSk7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gKHAuZ2V0WShpKSArIGggLyAyKSAvIGg7XG4gICAgcC5zZXRYKGksIHAuZ2V0WChpKSAqICh3MCArICh3MSAtIHcwKSAqIHQpKTsgcC5zZXRaKGksIHAuZ2V0WihpKSAqIChkMCArIChkMSAtIGQwKSAqIHQpKTtcbiAgfVxuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIGcudHJhbnNsYXRlKGN4LCB5MCArIGggLyAyLCBjeik7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEhPVC1ESVAgR0FMVkFOSVNFRCBaSU5DOiBjbG91ZHkgdG9uZSBkcmlmdCwgY3J5c3RhbGxpbmUgU1BBTkdMRSwgYW5kIHJ1c3QgYmxlZWRpbmcgZnJvbSB0aGUgd2VsZHMuXG4gKlxuICogVGhpcyBleGlzdHMgYmVjYXVzZSBgZ3JpbWVUaWxlYCBtZWFzdXJhYmx5IGNhbm5vdCBzYXkgYGdhbHZhbmlzZWRgLiBNZWFzdXJlZCBvbiB0aGUgY3Jvd2RcbiAqIGJhcnJpZXIncyBwbGF0ZSBhZ2FpbnN0IGl0cyBmaXJzdCBidWlsZCwgb3ZlciBtYXRjaGVkIGZsYXQgcGFuZWwgY3JvcHM6IHRoZSBwbGF0ZSByZWFkcyBtZWFuIGx1bWFcbiAqIDE1Ny0xNTkgd2l0aCBzZCAxMi0xNiBhbmQgYSBwNS4ucDk1IHNwYW4gb2YgfjQyLCBhbmQgdGhlIHJlbmRlciByZWFkIG1lYW4gMTQyIHdpdGggc2QgOC0xMCBhbmQgYVxuICogc3BhbiBvZiB+MjEgLS0gaGFsZiB0aGUgdG9uYWwgdmFyaWF0aW9uLCBhbmQgQ0xJUFBFRCBhdCB0aGUgdG9wIChwNzUgPSBwOTUgPSAxNDcsIHRoZSB0aWxlIGRvaW5nXG4gKiBub3RoaW5nIGF0IGFsbCBvdmVyIHRoZSB1cHBlciBoYWxmIG9mIHRoZSBwYW5lbCkuIEEgZ2FsdmFuaXNlZCBzdXJmYWNlIGlzIG5vdCBkaXJ0IG9uIGdyZXkgcGFpbnQ6XG4gKiBpdCBpcyBhIGZyb3plbiBjcnlzdGFsIHN0cnVjdHVyZSwgYnJpZ2h0IGlycmVndWxhciBzcGFuZ2xlIGZhY2V0cyBzdGFuZGluZyBBQk9WRSB0aGUgYmFzZSB0b25lXG4gKiB3aXRoIGR1bGwgZ3JleS1icm93biBkcmlmdCBiZXR3ZWVuIHRoZW0sIGFuZCB0aGUgYnJpZ2h0ZXN0IGZpZnRoIG9mIGl0IGlzIHRoZSBwYXJ0IHRoYXQgcmVhZHMuXG4gKlxuICogQSBjYW52YXMgdGlsZSBpcyBib3VuZCBhcyBhIE1VTFRJUExZIG1hcCwgc28gaXQgY2FuIG9ubHkgZXZlciBkYXJrZW4gLS0gd2hpY2ggaXMgd2h5IHRoZSBzcHJlYWRcbiAqIHdhcyBvbmUtc2lkZWQuIFRoZSB0aWxlIGlzIHRoZXJlZm9yZSBhdXRob3JlZCBhcm91bmQgYSBgbWlkYCBtdWx0aXBsaWVyIHdlbGwgYmVsb3cgMSBhbmQgdGhlXG4gKiBjYWxsZXIgcmFpc2VzIHRoZSBiYXNlIGFsYmVkbyBieSAxL21pZDogdGhlIHNwYW5nbGUgdGhlbiByZWFjaGVzIGJhY2sgdXAgdG8gdGhlIGJhc2Ugd2hpbGUgdGhlXG4gKiBkcmlmdCBmYWxscyBhd2F5IGJlbG93IGl0LCBhbmQgdGhlIHN1cmZhY2UgdmFyaWVzIGluIEJPVEggZGlyZWN0aW9ucyBhYm91dCBpdHMgbWVhbi4gQXV0aG9yIHRoZVxuICogYWxiZWRvIGZvciB0aGF0LCBvciB0aGUgcHJvcCBzaGlwcyBhcyBicmlnaHQgYXMgdGhlIHNwYW5nbGUgZXZlcnl3aGVyZS5cbiAqXG4gKiBgcnVzdEJhbmRgIGJsZWVkcyBhIGRlc2F0dXJhdGVkIGJyb3duIGRvd24gZnJvbSB0aGUgdG9wIGFuZCB1cCBmcm9tIHRoZSBib3R0b20gLS0gdGhlIHR3byBwbGFjZXMgYVxuICogYmFycmllcidzIHdlbGRzIGFyZSAtLSBiZWNhdXNlIHJ1c3Qgb24gZ2FsdmFuaXNlZCBzdGVlbCBzdGFydHMgYXQgYSB3ZWxkLCB3aGVyZSB0aGUgemluYyB3YXNcbiAqIGJ1cm50IG9mZiwgYW5kIFJVTlMuIFRoZSBwbGF0ZSdzIHJ1c3QgbWVhc3VyZXMgIzgyNmU1OCBvdmVyIDIuMiUgb2YgdGhlIGZyYW1lOiBhIHdhc2gsIG5vdCB0aGVcbiAqIG9yYW5nZSBwb2xrYSBkb3RzIGEgYmxvdGNoIHRpbGUgZ2l2ZXMuXG4gKi9cbmZ1bmN0aW9uIHppbmNUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgbWlkID0gby5taWQgPz8gMC44OCwgbG8gPSBvLmxvID8/IDAuNzQ7XG4gICAgY29uc3QgZyA9ICh2OiBudW1iZXIpID0+IHsgY29uc3QgYiA9IE1hdGgucm91bmQoMjU1ICogdik7IHJldHVybiBgcmdiKCR7Yn0sJHtifSwke2J9KWA7IH07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGcobWlkKTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGNsb3VkeSBkcmlmdDogYnJvYWQgc29mdCBibG9icyBib3RoIGFib3ZlIGFuZCBiZWxvdyB0aGUgbWlkLCB0aGUgbW90dGxlIGEgZGlwIGxlYXZlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uY2xvdWRzID8/IDYwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA2ICsgcm5kKCkgKiAwLjE2KTtcbiAgICAgIGNvbnN0IHVwID0gcm5kKCkgPCAwLjU7XG4gICAgICBjb25zdCB2ID0gdXAgPyBtaWQgKyAoMSAtIG1pZCkgKiAoMC4zNSArIHJuZCgpICogMC41KSA6IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpO1xuICAgICAgY29uc3QgZ3IgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtvLmNsb3VkQWxwaGEgPz8gMC4yOH0pYCk7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMCwwLDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIFNQQU5HTEU6IGlycmVndWxhciBicmlnaHQgY3J5c3RhbCBmYWNldHMsIGFuZ3VsYXIgcmF0aGVyIHRoYW4gcm91bmQsIHVwIHRvIHRoZSBiYXNlIHRvbmUuXG4gICAgLy8gU21hbGwgYW5kIGRlbnNlIC0tIGxhcmdlIG9uZXMgcmVhZCBhcyBzcGxhc2hlcyBvZiB3aGl0ZSBwYWludCwgd2hpY2ggaXMgdGhlIGZhaWx1cmUgbW9kZSBhXG4gICAgLy8gYmxvdGNoIHRpbGUgZmFsbHMgaW50by5cbiAgICAvLyBDTFVTVEVSRUQsIG5vdCBzY2F0dGVyZWQuIFVuaWZvcm1seSBzcHJlYWQgZmFjZXRzIHJlYWQgYXMgc25vdyBvciBkdXN0IHNwZWNrcyAtLSBpc29sYXRlZFxuICAgIC8vIGJyaWdodCBkb3RzIG9uIGEgc21vb3RoIGZpZWxkLCB3aGljaCBpcyB3aGF0IHRoZSBzZWNvbmQgdHVuaW5nIHNoaXBwZWQgYW5kIHdoYXQgdGhlIHBsYXRlIGhhc1xuICAgIC8vIG5vbmUgb2YuIFJlYWwgc3BhbmdsZSBibG9vbXM6IHRoZSBjcnlzdGFscyBudWNsZWF0ZSB0b2dldGhlciwgc28gdGhlIHN1cmZhY2UgaXMgcGF0Y2hlcyBvZlxuICAgIC8vIGRlbnNlIGJyaWdodCBmYWNldHMgd2l0aCBxdWlldCBncmV5IGJldHdlZW4gdGhlbS4gYHNwYW5nbGVDbHVzdGVyc2AgY2VudHJlcyBjYXJyeVxuICAgIC8vIGAxIC0gc3BhbmdsZUxvb3NlYCBvZiB0aGUgZmFjZXRzLCBkaXN0cmlidXRlZCBzcXJ0LXVuaWZvcm1seSBzbyBlYWNoIGJsb29tIGlzIGRlbnNlIGF0IGl0c1xuICAgIC8vIG1pZGRsZSBhbmQgdGhpbnMgYXQgaXRzIGVkZ2U7IHRoZSByZXN0IHN0YXkgc2NhdHRlcmVkIHNvIHRoZSBmaWVsZCBpcyBuZXZlciBiYWxkLlxuICAgIGNvbnN0IGNsID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogby5zcGFuZ2xlQ2x1c3RlcnMgPz8gMCB9LCAoKSA9PiBbcm5kKCkgKiBzLCBybmQoKSAqIHMsIHMgKiAoMC4wNCArIHJuZCgpICogMC4xMCldKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwYW5nbGUgPz8gNTIwKTsgaSsrKSB7XG4gICAgICBsZXQgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcztcbiAgICAgIGlmIChjbC5sZW5ndGggJiYgcm5kKCkgPiAoby5zcGFuZ2xlTG9vc2UgPz8gMC4yNSkpIHtcbiAgICAgICAgY29uc3QgYyA9IGNsWyhybmQoKSAqIGNsLmxlbmd0aCkgfCAwXSwgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY1syXTtcbiAgICAgICAgeCA9IGNbMF0gKyBNYXRoLmNvcyhhKSAqIGQ7IHkgPSBjWzFdICsgTWF0aC5zaW4oYSkgKiBkO1xuICAgICAgfVxuICAgICAgY29uc3QgciA9IHMgKiAoKG8uc3BhbmdsZU1pbiA/PyAwLjAwNCkgKyBNYXRoLnBvdyhybmQoKSwgMikgKiAoby5zcGFuZ2xlTWF4ID8/IDAuMDEzKSk7XG4gICAgICBjb25zdCB2ID0gbWlkICsgKDEgLSBtaWQpICogKDAuNSArIHJuZCgpICogMC41KTtcbiAgICAgIGNvbnN0IGsgPSA0ICsgTWF0aC5mbG9vcihybmQoKSAqIDMpO1xuICAgICAgY29uc3QgYTAgPSBybmQoKSAqIE1hdGguUEkgKiAyO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7KG8uc3BhbmdsZUFscGhhID8/IDAuMikgKyBybmQoKSAqIChvLnNwYW5nbGVBbHBoYVZhciA/PyAwLjM1KX0pYDtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBhID0gYTAgKyBqICogTWF0aC5QSSAqIDIgLyBrLCByciA9IHIgKiAoMC41NSArIHJuZCgpICogMC43NSk7XG4gICAgICAgICAgY29uc3QgcHggPSB4ICsgZHggKyBNYXRoLmNvcyhhKSAqIHJyLCBweSA9IHkgKyBkeSArIE1hdGguc2luKGEpICogcnIgKiAwLjg7XG4gICAgICAgICAgaWYgKGogPT09IDApIGN0eC5tb3ZlVG8ocHgsIHB5KTsgZWxzZSBjdHgubGluZVRvKHB4LCBweSk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBkYXJrIGRyaXAgc3RyZWFrcyBydW5uaW5nIGRvd246IHdlYXRoZXJpbmcsIGFuZCB3aGF0IGdpdmVzIGEgZmxhdCBwYW5lbCBhIHZlcnRpY2FsIHJlYWRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnN0cmVha3MgPz8gMzApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTAsIHkwID0gcm5kKCkgKiBzICogMC41LCBsZW4gPSBzICogKDAuMiArIHJuZCgpICogMC43KTtcbiAgICAgIGNvbnN0IHYgPSBsbyArIChtaWQgLSBsbykgKiBybmQoKSAqIDAuNiwgYSA9IDAuMDYgKyBybmQoKSAqIDAuMTQ7XG4gICAgICBjb25zdCBnciA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5MCwgMCwgeTAgKyBsZW4pO1xuICAgICAgZ3IuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LDApYCk7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMC4yNSwgYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHthfSlgKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5MCwgdywgbGVuKTtcbiAgICB9XG4gICAgLy8gRklORSBHUkFJTiBhbmQgU0NSQVRDSEVTLiBNZWFzdXJlZCBhZ2FpbnN0IHRoZSBwbGF0ZSBhdCBtYXRjaGVkIG1hZ25pZmljYXRpb24sIHRoaXMgaXMgdGhlXG4gICAgLy8gbGF5ZXIgdGhlIGZpcnN0IHR1bmluZyB3YXMgbWlzc2luZyBlbnRpcmVseTogdGhlIHBsYXRlJ3MgemluYyBpcyBzY3JhdGNoeSBhdCAxLTIgcHggZXZlcnl3aGVyZVxuICAgIC8vIC0tIGRyYXdpbmcgbWFya3MsIGhhbmRsaW5nIHNjdWZmcywgdGhlIGNyeXN0YWwgYm91bmRhcmllcyB0aGVtc2VsdmVzIC0tIGFuZCB3aXRob3V0IGl0IHRoZVxuICAgIC8vIGRyaWZ0IGFuZCB0aGUgc3BhbmdsZSByZWFkIGFzIHNvZnQgc25vdyBvbiBzbW9vdGggZ3JleSBob3dldmVyIHdlbGwgdGhlIEhJU1RPR1JBTSBtYXRjaGVzLiBUd29cbiAgICAvLyBjcm9wcyB3aXRoIGlkZW50aWNhbCBtZWFuLCBzZCBhbmQgcGVyY2VudGlsZXMgY2FuIGxvb2sgbm90aGluZyBhbGlrZTsgdGhlIHN0YXRpc3RpYyB0aGF0XG4gICAgLy8gc2VwYXJhdGVzIHRoZW0gaXMgc3BhdGlhbCBmcmVxdWVuY3ksIHNvIHR1bmUgdGhpcyBieSBleWUgYWdhaW5zdCBhIG1hdGNoZWQgY3JvcCwgbm90IGJ5IHNkLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZ3JhaW4gPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIDIsIGggPSAxICsgcm5kKCkgKiAyO1xuICAgICAgY29uc3QgdXAgPSBybmQoKSA8IDAuNTtcbiAgICAgIGNvbnN0IHYgPSB1cCA/IG1pZCArICgxIC0gbWlkKSAqICgwLjQgKyBybmQoKSAqIDAuNikgOiBsbyArIChtaWQgLSBsbykgKiBybmQoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwkezAuMTAgKyBybmQoKSAqIDAuMzB9KWA7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggKyBkeCwgeSArIGR5LCB3LCBoKTtcbiAgICB9XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc2NyYXRjaGVzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC4wMDYgKyBybmQoKSAqIDAuMDU1KSwgYSA9IChybmQoKSAtIDAuNSkgKiAwLjcgKyBNYXRoLlBJIC8gMjtcbiAgICAgIGNvbnN0IHVwID0gcm5kKCkgPCAwLjQ1O1xuICAgICAgY29uc3QgdiA9IHVwID8gbWlkICsgKDEgLSBtaWQpICogKDAuNSArIHJuZCgpICogMC41KSA6IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpICogMC44O1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHswLjEwICsgcm5kKCkgKiAwLjI4fSlgO1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNyArIHJuZCgpICogMS42O1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBkeCwgeSArIGR5KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgZHggKyBNYXRoLmNvcyhhKSAqIGxlbiwgeSArIGR5ICsgTWF0aC5zaW4oYSkgKiBsZW4pOyBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJVU1QgZnJvbSB0aGUgd2VsZHM6IGEgd2FzaCBpbiB0aGUgdG9wIGFuZCBib3R0b20gYmFuZHMsIHBsdXMgcnVucyB0cmFpbGluZyBvdXQgb2YgaXRcbiAgICBpZiAoby5ydXN0KSB7XG4gICAgICBjb25zdCBjID0gby5ydXN0LCBiYW5kID0gby5ydXN0QmFuZCA/PyAwLjE2O1xuICAgICAgY29uc3QgcmdicyA9IGAke01hdGgucm91bmQoMjU1ICogY1swXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiBjWzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIGNbMl0pfWA7XG4gICAgICAvLyB0aGUgdHdvIGJhbmRzIGFyZSBTRVBBUkFURTogb24gYSBiYXJyaWVyIHRoZSBncm91bmQgZW5kIGNhcnJpZXMgdGhlIGZlZXQsIHRoZSBzdHViIHdlbGRzIGFuZFxuICAgICAgLy8gZXZlcnkgcnVuIG9mZiB0aGVtLCBhbmQgdGhlIHRvcCBlbmQgY2FycmllcyBvbmx5IHRoZSByYWlsJ3Mgb3duIHdlbGRzLiBPbmUgc3ltbWV0cmljIGJhbmRcbiAgICAgIC8vIHdpZGUgZW5vdWdoIHRvIHJlYWNoIHRoZSByYWlsIHdlbGRzIGF0IHYgPSAwLjI2IGFsc28gd2FzaGVzIHRoZSB3aG9sZSB1cHBlciB0aGlyZCBvZiBldmVyeVxuICAgICAgLy8gcGFuZWwsIHdoaWNoIHRoZSBwbGF0ZSBkb2VzIG5vdCBoYXZlLlxuICAgICAgZm9yIChjb25zdCBbZWRnZSwgZGlyLCBiXSBvZiBbWzAsIDEsIG8ucnVzdEJhbmRUb3AgPz8gYmFuZF0sIFtzLCAtMSwgYmFuZF1dIGFzIG51bWJlcltdW10pIHtcbiAgICAgICAgY29uc3QgZ3IgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgZWRnZSwgMCwgZWRnZSArIGRpciAqIHMgKiBiKTtcbiAgICAgICAgZ3IuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdic30sJHtvLnJ1c3RXYXNoID8/IDAuMzB9KWApOyBnci5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2JzfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3I7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ucnVzdFJ1bnMgPz8gMjIpOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxNDtcbiAgICAgICAgY29uc3QgdG9wID0gcm5kKCkgPCAwLjU7XG4gICAgICAgIGNvbnN0IHkwID0gdG9wID8gMCA6IHMgLSBzICogYmFuZCAqICgwLjMgKyBybmQoKSk7XG4gICAgICAgIGNvbnN0IGxlbiA9IHMgKiAoMC4xMCArIHJuZCgpICogMC4zMik7XG4gICAgICAgIGNvbnN0IGdyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkwLCAwLCB5MCArIGxlbik7XG4gICAgICAgIGdyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYnN9LCR7MC4xOCArIHJuZCgpICogMC4zMn0pYCk7IGdyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYnN9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBncjtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5MCwgdywgbGVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNhbm9weS1tb2R1bGUgaGVscGVyc1xuICogVGhlIGZpdmUgQ0FOT1BZIE1PRFVMRVMgLS0gbmlwYSB0aGF0Y2gsIHZldGl2ZXIgdGhhdGNoLCBzcGxpdCBiYW1ib28sIGNvcnJ1Z2F0ZWQgbWV0YWwsXG4gKiB0YXJwYXVsaW4gLS0gYXJlIG9uZSBmYW1pbHk6IGZvdXIgY29ybmVyIHBvc3RzIGluc2lkZSBhIDQgeCA0IG0gbW9kdWxlLCBhIGhlYWQgZnJhbWUsIGFuZCBhIHJvb2ZcbiAqIHdob3NlIG1hdGVyaWFsIGlzIHRoZSB3aG9sZSBpZGVudGl0eS4gV2hhdCB0aGV5IG5lZWQgYmV5b25kIHRoZSBzdHJlZXQtcHJvcCB2b2NhYnVsYXJ5IGlzIGFcbiAqIHJvb2ZpbmcgdGlsZSBwZXIgbWF0ZXJpYWwgYW5kIHRoZSBjdWxtIG1hcHBpbmcgYSByb3VuZCBiYW1ib28gcG9sZSB3YW50cy5cbiAqXG4gKiBgY3VsbVVWYCwgYGdyYWluTGluZXNgLCBgd2VhdGhlclBhdGNoZXNgLCBgbW91bGRDbHVzdGVyc2AgYW5kIGBjdWxtVGlsZWAgYXJlIHBvcnRlZCBWRVJCQVRJTSBmcm9tXG4gKiBzY3JhdGNoL19mZW5jZS9mZW5jZS5oZWxwZXJzLnRtcGwsIHdoZXJlIHRoZXkgd2VyZSB3cml0dGVuIGZvciB0aGUgYmFtYm9vIGZlbmNlIHBhbmVsIGFuZCB3aGVyZVxuICogdGhlIHJlYXNvbmluZyBiZWhpbmQgZXZlcnkgbnVtYmVyIGlzIHJlY29yZGVkLiBUaGV5IGFyZSBjb3BpZWQgcmF0aGVyIHRoYW4gc2hhcmVkIGJlY2F1c2UgdGhlIHR3b1xuICogZmFtaWxpZXMga2VlcCBzZXBhcmF0ZSB0ZW1wbGF0ZSBzZXRzOyBhIHRoaXJkIGZhbWlseSB3YW50aW5nIHRoZW0gc2hvdWxkIG1vdmUgdGhlbSB1cCBpbnRvXG4gKiBoZWxwZXJzLnRtcGwgcmF0aGVyIHRoYW4gY29weSB0aGVtIGEgc2Vjb25kIHRpbWUuXG4gKi9cblxuLyoqIENVTE0gVVZzOiB1IGFyb3VuZCB0aGUgY2lyY3VtZmVyZW5jZSBhbmQgdiBhbG9uZyB0aGUgbGVuZ3RoLCBib3RoIGluIG1ldHJlcyBvdmVyIGBzY2FsZWAsIHNvIGFcbiAqICBjdWxtIHRpbGUncyBub2RlIHJpbmdzIGNyb3NzIHRoZSBjdWxtIGF0IHJlYWwgc3BhY2luZyB3aGljaGV2ZXIgd2F5IHRoZSBjeWxpbmRlciBpcyB0aGVuIHJvdGF0ZWQuXG4gKiAgQXBwbHkgQkVGT1JFIHJvdGF0ZS90cmFuc2xhdGUuIGB2T2ZmYCBwaGFzZXMgdGhlIHRpbGUgYWxvbmcgdGhlIGN1bG0gc28gbm8gdHdvIGN1bG1zIChvciBhIGNvcmRcbiAqICBjb2xsYXIpIHJpbmcgYXQgdGhlIHNhbWUgc3RhdGlvbi4gKi9cbmZ1bmN0aW9uIGN1bG1VVihnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgcjogbnVtYmVyLCBoOiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIHZPZmYgPSAwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICBjb25zdCBrdSA9ICgyICogTWF0aC5QSSAqIHIpIC8gc2NhbGUsIGt2ID0gaCAvIHNjYWxlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHV2LnNldFhZKGksIHV2LmdldFgoaSkgKiBrdSwgdXYuZ2V0WShpKSAqIGt2ICsgdk9mZik7XG4gIHJldHVybiBnO1xufVxuXG4vKiogRmluZSBsb25naXR1ZGluYWwgZ3JhaW4gYmV0d2VlbiB5MCBhbmQgeTEgYWNyb3NzIGEgYmFuZCB4MC4ueDE6IG1hbnkgaGFpcmxpbmVzLCBtb3N0bHkgYSBkYXJrXG4gKiAgZmlicmUgdG9uZSwgYSBmZXcgYmxlYWNoZWQsIHNvIHRoZSBzdXJmYWNlIHJlYWRzIGFzIGZpYnJvdXMgYmFtYm9vIHJhdGhlciB0aGFuIHBhaW50LiAqL1xuZnVuY3Rpb24gZ3JhaW5MaW5lcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcm5kOiAoKSA9PiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIG46IG51bWJlciwgZGFyazogc3RyaW5nLCBsaWdodDogc3RyaW5nLCBhTWF4OiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICBjb25zdCB4ID0geDAgKyBybmQoKSAqICh4MSAtIHgwKSwgYSA9IDAuMDQgKyBybmQoKSAqIGFNYXgsIHcgPSBybmQoKSA8IDAuNzUgPyAxIDogMS42O1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JuZCgpIDwgMC43MiA/IGRhcmsgOiBsaWdodH0sJHthLnRvRml4ZWQoMyl9KWA7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHkwLCB3LCB5MSAtIHkwKTtcbiAgfVxufVxuXG4vKiogU29mdCBjbG91ZHkgd2VhdGhlcmluZyBhbG9uZyB0aGUgZmlicmUgZGlyZWN0aW9uOiBsZW5ndGh3aXNlIHBhdGNoZXMgb2Ygd2FybSBicm93bi1ncmV5IChvbGRcbiAqICBsaWduaW4gc2hvd2luZyB0aHJvdWdoIHRoZSBibGVhY2gpIGFuZCBvZiBuZWFyLXdoaXRlIChzdW4tYmxlYWNoZWQgZmFjZXMpLCBzbyB0aGUgdG9uZSBkcmlmdHNcbiAqICB0aGUgd2F5IHdlYXRoZXJlZCBiYW1ib28gZG9lcyBpbnN0ZWFkIG9mIHNpdHRpbmcgYXQgb25lIGdyZXkuIFZlcnRpY2FsID0gYWxvbmcgdGhlIGZpYnJlLiAqL1xuZnVuY3Rpb24gd2VhdGhlclBhdGNoZXMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJuZDogKCkgPT4gbnVtYmVyLCBzOiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIG46IG51bWJlciwgd2FybUE6IG51bWJlciwgYmxlYWNoQTogbnVtYmVyKTogdm9pZCB7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgY29uc3QgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjEyICsgcm5kKCkgKiAwLjQ1KSwgd2FybSA9IHJuZCgpIDwgMC41O1xuICAgIGNvbnN0IGMgPSB3YXJtID8gJzExMiwxMDAsODgnIDogJzI1NSwyNTUsMjU1JywgYSA9IHdhcm0gPyB3YXJtQSAqICgwLjQgKyBybmQoKSAqIDAuNikgOiBibGVhY2hBICogKDAuNCArIHJuZCgpICogMC42KTtcbiAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5LCAwLCB5ICsgbGVuKTtcbiAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjfSwwKWApOyBnMi5hZGRDb2xvclN0b3AoMC4zNSwgYHJnYmEoJHtjfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMC42NSwgYHJnYmEoJHtjfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4MCwgeSArIGR5LCB4MSAtIHgwLCBsZW4pO1xuICB9XG59XG5cbi8qKiBNb3VsZDogY2x1c3RlcnMgb2Ygc21hbGwgZGFyayBzcGVja3MgKGEgZmV3IGRvemVuIGVhY2gpLCB0aGUgd2F5IGJsYWNrIG1vdWxkIHNpdHMgb24gb3V0ZG9vclxuICogIGJhbWJvbyAtLSBkZW5zZSBhdCBhIGZldyBzcG90cywgYWJzZW50IGVsc2V3aGVyZS4gQWxwaGEgY2FwcGVkIHNvIHRoZSBkYXJrZXN0IHNwZWNrIG92ZXIgdGhlXG4gKiAgbWVhc3VyZWQgYWxiZWRvIHN0YXlzIHdlbGwgY2xlYXIgb2YgdGhlIGhvbGUgZ2F0ZSdzIGx1bWEgNTguIFdyYXBzIGluIHkuICovXG5mdW5jdGlvbiBtb3VsZENsdXN0ZXJzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBybmQ6ICgpID0+IG51bWJlciwgczogbnVtYmVyLCBzcG90czogbnVtYmVyW11bXSwgcng6IG51bWJlciwgcnk6IG51bWJlciwgbjogbnVtYmVyLCBhTWF4OiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChjb25zdCBbY3gsIGN5XSBvZiBzcG90cykge1xuICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGN4LCBjeSwgMCwgY3gsIGN5LCBNYXRoLm1heChyeCwgcnkpICogMC44KTtcbiAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMjgsMjYsMjIsJHsoYU1heCAqIDAuOSkudG9GaXhlZCgzKX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyOCwyNiwyMiwwKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCwgY3kgKyBkeSwgcngsIHJ5LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgY29uc3QgeCA9IGN4ICsgKHJuZCgpICsgcm5kKCkgLSAxKSAqIHJ4LCB5ID0gY3kgKyAocm5kKCkgKyBybmQoKSAtIDEpICogcnk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMjgsMjYsMjIsJHsoMC4wOCArIHJuZCgpICogYU1heCkudG9GaXhlZCgzKX0pYDtcbiAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiAyLCBoID0gMSArIHJuZCgpICogMztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHgsIHkgKyBkeSwgdywgaCk7XG4gICAgfVxuICB9XG59XG5cbi8qKiBDVUxNIHRpbGUgZm9yIHRoZSB3aG9sZS1iYW1ib28gcG9zdCBhbmQgcmFpbHM6IHggcnVucyBBUk9VTkQgdGhlIGN1bG0sIHkgQUxPTkcgaXQgKHNlZSBjdWxtVVYpLFxuICogIDAuNiBtIG9mIGN1bG0gcGVyIHRpbGUuIFR3byBub2RlIHJpbmdzIHBlciB0aWxlIGF0IGlycmVndWxhciBzdGF0aW9ucyAtLSBhIGRhcmsgZ3Jvb3ZlIHVuZGVyIGFcbiAqICBwYWxlIHJhaXNlZCByaWRnZSwgdGhlIGdyYWluIGJyZWFraW5nIGF0IGVhY2ggLS0gd2l0aCBmaW5lIGxvbmdpdHVkaW5hbCBncmFpbiBiZXR3ZWVuIHRoZW0sIGFcbiAqICBsb25nIGRyeWluZyBzcGxpdCwgbGVuZ3Rod2lzZSB3ZWF0aGVyaW5nIHBhdGNoZXMgYW5kIGJsYWNrIG1vdWxkIGdhdGhlcmVkIGp1c3QgYmVsb3cgZWFjaCBub2RlLFxuICogIGFzIGluIHRoZSBwbGF0ZSdzIHBvc3QgYW5kIHJhaWwgY3JvcHMuIEEgbXVsdGlwbGllciBvbiB0aGUgbWVhc3VyZWQgY3VsbSBncmV5LiAqL1xuZnVuY3Rpb24gY3VsbVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgREFSSyA9ICc5Miw3OCw2MicsIExJR0hUID0gJzI1NSwyNTUsMjU1JztcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmMGVmZWMnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gYSBzb2Z0IHRvbmUgZHJpZnQgYXJvdW5kIHRoZSBjdWxtLCBzbyB0aGUgcm91bmQgaXMgbm90IG9uZSBmbGF0IHZhbHVlXG4gICAgY29uc3QgZ2EgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgcywgMCk7XG4gICAgZ2EuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDEwMCw5Miw4NCwwLjEyKScpOyBnYS5hZGRDb2xvclN0b3AoMC41LCAncmdiYSgyNTUsMjU1LDI1NSwwLjEwKScpOyBnYS5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTAwLDkyLDg0LDAuMTIpJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdhOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIDE0LCAwLjEyLCAwLjMwKTtcbiAgICAvLyBub2RlIHN0YXRpb25zOiB0d28gcGVyIHRpbGUsIGlycmVndWxhciwgbmV2ZXIgd2l0aGluIDAuMTggb2YgZWFjaCBvdGhlciBvciB0aGUgd3JhcFxuICAgIGNvbnN0IG5vZGVzID0gW3MgKiAoMC4yMCArIHJuZCgpICogMC4xMCksIHMgKiAoMC42NiArIHJuZCgpICogMC4xMildO1xuICAgIC8vIGdyYWluIGluIHNlZ21lbnRzIGJldHdlZW4gdGhlIG5vZGVzIHNvIGl0IGJyZWFrcyBhdCBlYWNoIHJpbmdcbiAgICBjb25zdCBzdGF0aW9ucyA9IFswLCAuLi5ub2Rlcywgc107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgKyAxIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIGdyYWluTGluZXMoY3R4LCBybmQsIDAsIHMsIHN0YXRpb25zW2ldLCBzdGF0aW9uc1tpICsgMV0sIDI2MCwgREFSSywgTElHSFQsIDAuMjYpO1xuICAgIC8vIGEgY291cGxlIG9mIGxvbmcgZHJ5aW5nIHNwbGl0cyBhbG9uZyB0aGUgZmlicmVcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDI7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjI1ICsgcm5kKCkgKiAwLjUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDM4LDMyLDI2LDAuNTUpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHkgKyBkeSwgMS40LCBsZW4pO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHggKyAxLjQsIHkgKyBkeSwgMSwgbGVuKTtcbiAgICB9XG4gICAgLy8gdGhlIG5vZGUgcmluZ3NcbiAgICBmb3IgKGNvbnN0IHkgb2Ygbm9kZXMpIHtcbiAgICAgIGNvbnN0IGdzID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkgLSBzICogMC4wMywgMCwgeSk7XG4gICAgICBncy5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoNjAsNTAsNDAsMCknKTsgZ3MuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDYwLDUwLDQwLDAuMjIpJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3M7IGN0eC5maWxsUmVjdCgwLCB5IC0gcyAqIDAuMDMsIHMsIHMgKiAwLjAzKTsgICAgICAgICAgLy8gc2hhZGUgdXAgdG8gdGhlIHJpbmdcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg1Miw0NCwzNiwwLjYyKSc7IGN0eC5maWxsUmVjdCgwLCB5LCBzLCAyLjUpOyAgICAgICAgLy8gdGhlIGdyb292ZVxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMzQpJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyAyLjUsIHMsIDQpOyAvLyB0aGUgcmFpc2VkIHNoZWF0aCByaWRnZVxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDYwLDUwLDQwLDAuMzApJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyA2LjUsIHMsIDEuNSk7ICAvLyBpdHMgbG93ZXIgZWRnZVxuICAgICAgY29uc3QgZ2QgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSArIDgsIDAsIHkgKyBzICogMC4wNSk7XG4gICAgICBnZC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoNjAsNTAsNDAsMC4yMCknKTsgZ2QuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDYwLDUwLDQwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ2Q7IGN0eC5maWxsUmVjdCgwLCB5ICsgOCwgcywgcyAqIDAuMDUpO1xuICAgIH1cbiAgICAvLyBtb3VsZCBnYXRoZXJzIGp1c3QgYmVsb3cgdGhlIG5vZGVzIGFuZCBpbiBhIGNvdXBsZSBvZiBsb29zZSBwYXRjaGVzXG4gICAgY29uc3Qgc3BvdHM6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHkgb2Ygbm9kZXMpIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSBzcG90cy5wdXNoKFtybmQoKSAqIHMsIHkgKyBzICogKDAuMDIgKyBybmQoKSAqIDAuMDUpXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHNwb3RzLnB1c2goW3JuZCgpICogcywgcm5kKCkgKiBzXSk7XG4gICAgbW91bGRDbHVzdGVycyhjdHgsIHJuZCwgcywgc3BvdHMsIHMgKiAwLjEwLCBzICogMC4wNiwgOTAsIDAuMzApO1xuICB9KTtcbn1cblxuXG4vKipcbiAqIFRIQVRDSCB0aWxlLCBmb3IgYSByb29mIG1hcHBlZCB3aXRoIFdPUkxEIFVWcyBzbyB1IHJ1bnMgYWxvbmcgdGhlIHJpZGdlIGFuZCB2IHVwIHRoZSBzbG9wZS5cbiAqXG4gKiBUaGF0Y2ggaXMgbGFpZCBpbiBDT1VSU0VTOiBlYWNoIGNvdXJzZSBpcyBhIGJ1bmRsZSBvZiBzdGVtcyBwZWdnZWQgdG8gYSBwdXJsaW4gd2l0aCBpdHMgYnV0dHNcbiAqIGhhbmdpbmcgb3ZlciB0aGUgY291cnNlIGJlbG93LCBzbyB3aGF0IGEgdmlld2VyIGFjdHVhbGx5IHJlc29sdmVzIGF0IHByb3AgZGlzdGFuY2UgaXMgYSBzdGFjayBvZlxuICogaG9yaXpvbnRhbCBiYW5kcyB3aXRoIGEgc2hhZG93IGxpbmUgdW5kZXIgZWFjaCBidXR0LCBhbmQgYSBmaWJyZSB0ZXh0dXJlIHJ1bm5pbmcgZG93biB0aGUgc2xvcGVcbiAqIGluc2lkZSB0aGVtLiBNb2RlbGxpbmcgdGhlIHN0ZW1zIGlzIHdoYXQgdGhlIHJlZ2lzdHJ5IG5vdGVzIGZvcmJpZDsgdGhpcyBpcyB3aGVyZSB0aGF0IGRldGFpbFxuICogZ29lcyBpbnN0ZWFkLlxuICpcbiAqIE9uZSB0aWxlIGlzIGBjb3Vyc2VzYCBjb3Vyc2VzIHRhbGwuIFRoZSBrbm9icyBhcmUgd2hhdCBzZXBhcmF0ZXMgdGhlIHR3byB0aGF0Y2hlcyBvbiB0aGUgcGxhdGVzOlxuICogICBuaXBhICAgICBicm9hZCBmbGF0IHBhbG0gYmxhZGVzIC0tIGZldyB3aWRlIHN0cm9rZXMgKGBzdGVtV2AgMy03IHB4KSwgYSB3aWRlIHRvbmFsIGBzcHJlYWRgLFxuICogICAgICAgICAgICBhIGRlZXBseSBSQUdHRUQgYnV0dCBsaW5lIGFuZCBvY2Nhc2lvbmFsIG1pc3NpbmcgYmxhZGVzLlxuICogICB2ZXRpdmVyICBjb21iZWQgZ3Jhc3MgLS0gaHVuZHJlZHMgb2YgaGFpcmxpbmVzLCBhIG5hcnJvdyBzcHJlYWQsIGFuIGFsbW9zdCBzdHJhaWdodCBidXR0LlxuICogYG1vc3NgIG11bHRpcGxpZXMgYSBncmVlbiBjYXN0IGludG8gc2NhdHRlcmVkIHBhdGNoZXM6IHRoZSB0aWxlIGlzIGEgTVVMVElQTElFUiBvbiBhIHBhbGUgc3RyYXdcbiAqIGFsYmVkbywgYW5kIGEgbXVsdGlwbHkgY2FuIG9ubHkgZGFya2VuLCBzbyBncmVlbiBoYXMgdG8gYXJyaXZlIGFzIFwibGVzcyByZWQgYW5kIGJsdWVcIiBhbmQgbmV2ZXJcbiAqIGFzIGEgcGFpbnRlZCBncmVlbi4gTm90aGluZyBoZXJlIGdvZXMgYmVsb3cgMC40MiBvZiB0aGUgYWxiZWRvLCB3aGljaCBrZWVwcyB0aGUgZGFya2VzdCB0ZXhlbCBvZlxuICogYSBzdHJhdyBhdCBsdW1hIH4xNTAgd2VsbCBjbGVhciBvZiB0aGUgc2lsaG91ZXR0ZSBnYXRlJ3MgYmFja2Ryb3AgYmFuZC5cbiAqL1xuZnVuY3Rpb24gdGhhdGNoVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IG5jOiBudW1iZXIgPSBvLmNvdXJzZXMgPz8gNCwgY2ggPSBzIC8gbmM7XG4gICAgY29uc3Qgc3RlbXM6IG51bWJlciA9IG8uc3RlbXMgPz8gMjYwLCBzcHJlYWQ6IG51bWJlciA9IG8uc3ByZWFkID8/IDAuMTI7XG4gICAgY29uc3Qgd01pbjogbnVtYmVyID0gby5zdGVtVz8uWzBdID8/IDEsIHdNYXg6IG51bWJlciA9IG8uc3RlbVc/LlsxXSA/PyAyO1xuICAgIGNvbnN0IHJhZ2dlZDogbnVtYmVyID0gby5yYWdnZWQgPz8gMC4wNjsgICAgICAgICAgICAgICAgIC8vIGJ1dHQtbGluZSB3YXZpbmVzcywgYXMgYSBzaGFyZSBvZiBjaFxuICAgIGNvbnN0IFtzciwgc2csIHNiXTogbnVtYmVyW10gPSBvLnN0ZW1SZ2IgPz8gWzEyMCwgMTA2LCA4NF07ICAgLy8gdGhlIGRhcmsgYmxhZGUgdGludDsgbmlwYSBpcyBncmV5ZXIgdGhhbiBncmFzc1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcblxuICAgIC8vIHRoZSBidXR0IGxpbmUgb2YgZWFjaCBjb3Vyc2UsIGppdHRlcmVkIHBlciBjb2x1bW4gYW5kIFNIQVJFRCB3aXRoIHRoZSBjb3Vyc2UgYWJvdmUgc28gdGhlXG4gICAgLy8gc2hhZG93IGFuZCB0aGUgYmxhZGVzIGFncmVlIG9uIHdoZXJlIHRoZSBlZGdlIGlzXG4gICAgY29uc3QgYnV0dHM6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8PSBuYzsgYysrKSB7XG4gICAgICBjb25zdCByb3c6IG51bWJlcltdID0gW107XG4gICAgICBsZXQgeSA9IDA7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSBzOyB4KyspIHtcbiAgICAgICAgaWYgKHggJSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKHMgLyA0OCkpID09PSAwKSB5ID0gKHJuZCgpICogMiAtIDEpICogcmFnZ2VkICogY2g7XG4gICAgICAgIHJvdy5wdXNoKGMgKiBjaCArIHkpO1xuICAgICAgfVxuICAgICAgYnV0dHMucHVzaChyb3cpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgbmM7IGMrKykge1xuICAgICAgY29uc3QgeTAgPSBjICogY2g7XG4gICAgICAvLyB0aGUgY291cnNlJ3Mgb3duIHRvbmU6IHRoYXRjaCB3ZWF0aGVycyBjb3Vyc2UgYnkgY291cnNlLCB0aGUgbG93ZXIgb25lcyBncmV5ZXJcbiAgICAgIGNvbnN0IHQgPSAxIC0gc3ByZWFkICogcm5kKCk7XG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHtNYXRoLnJvdW5kKHYgKiAwLjk4NSl9LCR7TWF0aC5yb3VuZCh2ICogMC45NSl9KWA7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgeTAgLSByYWdnZWQgKiBjaCAtIDEsIHMsIGNoICsgMiAqIHJhZ2dlZCAqIGNoICsgMik7XG4gICAgICAvLyBzdGVtcyBydW5uaW5nIERPV04gdGhlIHNsb3BlIGluc2lkZSB0aGUgY291cnNlLCBlYWNoIGEgbGl0dGxlIHBhc3QgaXRzIGJ1dHQgbGluZVxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzdGVtczsgaysrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHM7XG4gICAgICAgIGNvbnN0IHcgPSB3TWluICsgcm5kKCkgKiAod01heCAtIHdNaW4pO1xuICAgICAgICBjb25zdCB0b25lID0gMSAtIHNwcmVhZCAqICgwLjMgKyBybmQoKSAqIDAuNyk7XG4gICAgICAgIGNvbnN0IGEgPSAwLjE4ICsgcm5kKCkgKiAwLjMyO1xuICAgICAgICBjb25zdCBkYXJrID0gcm5kKCkgPCAwLjYyO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZGFyayA/IGByZ2JhKCR7TWF0aC5yb3VuZChzciAqIHRvbmUpfSwke01hdGgucm91bmQoc2cgKiB0b25lKX0sJHtNYXRoLnJvdW5kKHNiICogdG9uZSl9LCR7YS50b0ZpeGVkKDMpfSlgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYHJnYmEoMjU1LDI1MywyNDYsJHsoYSAqIDAuNikudG9GaXhlZCgzKX0pYDtcbiAgICAgICAgY29uc3QgeVRvcCA9IHkwIC0gY2ggKiAoMC4xNSArIHJuZCgpICogMC4yNSk7XG4gICAgICAgIGNvbnN0IHlCb3QgPSBidXR0c1tjICsgMV1bTWF0aC5taW4ocywgTWF0aC5yb3VuZCh4KSldICsgY2ggKiAocm5kKCkgKiAwLjEwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHlUb3AsIHcsIE1hdGgubWF4KDIsIHlCb3QgLSB5VG9wKSk7XG4gICAgICAgIC8vIFRPUk4gVElQOiBzb21lIGJsYWRlcyBydW4gb24gcGFzdCB0aGUgYnV0dCBsaW5lIGFuZCBlbmQgaW4gYSBwb2ludCwgc28gdGhlIGNvdXJzZSBlZGdlIGlzXG4gICAgICAgIC8vIGEgZnJpbmdlIG9mIGluZGl2aWR1YWwgYmxhZGVzIHJhdGhlciB0aGFuIGEgd2F2eSBjdXQgKHRoZSBuaXBhIHBsYXRlJ3Mgd2hvbGUgY2hhcmFjdGVyKVxuICAgICAgICBjb25zdCB0ZWFyOiBudW1iZXIgPSBvLnRlYXIgPz8gMDtcbiAgICAgICAgaWYgKHRlYXIgPiAwICYmIHJuZCgpIDwgMC40NSkge1xuICAgICAgICAgIGNvbnN0IEwgPSBjaCAqIHRlYXIgKiAoMC4zICsgcm5kKCkgKiAwLjcpO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5Qm90KTsgY3R4LmxpbmVUbyh4ICsgdywgeUJvdCk7IGN0eC5saW5lVG8oeCArIHcgLyAyLCB5Qm90ICsgTCk7IGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoNTgsNDgsMzYsJHsoMC4xMCArIHJuZCgpICogMC4xNikudG9GaXhlZCgzKX0pYDtcbiAgICAgICAgICBjdHguZmlsbFJlY3QoeCAtIDEsIHlCb3QsIHcgKyAyLCBMICogMC41KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gQkxBREUgU0VBTVM6IGEgdGhpbiBkYXJrIGxpbmUgYmV0d2VlbiBuZWlnaGJvdXJpbmcgYmxhZGVzLCB3aGljaCBpcyB3aGF0IHNlcGFyYXRlcyBhIG5pcGFcbiAgICAgIC8vIHJvb2YgKGJyb2FkIGxlYWZsZXRzIGxhaWQgc2lkZSBieSBzaWRlKSBmcm9tIGNvbWJlZCBncmFzcyB0aGF0Y2hcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uc2VhbXMgPz8gMCk7IGsrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoNzAsNjAsNDYsJHsoMC4xMCArIHJuZCgpICogMC4xOCkudG9GaXhlZCgzKX0pYDtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHkwIC0gY2ggKiAwLjEsIDEsIGNoICogKDAuNyArIHJuZCgpICogMC41KSk7XG4gICAgICB9XG4gICAgICAvLyBNSVNTSU5HIGJsYWRlczogYSBmZXcgZ2FwcyB3aGVyZSB0aGUgY291cnNlIGhhcyB0aGlubmVkLCBkYXJrIGJ1dCBuZXZlciBibGFja1xuICAgICAgY29uc3QgZ2FwcyA9IG8uZ2FwcyA/PyAwO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBnYXBzOyBrKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IHMgKiAoMC4wMSArIHJuZCgpICogMC4wMyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSg5Niw4NCw2NiwkeygwLjIwICsgcm5kKCkgKiAwLjE4KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeTAgKyBjaCAqIDAuMjUsIHcsIGNoICogKDAuNCArIHJuZCgpICogMC41KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhlIHNoYWRvdyBlYWNoIGNvdXJzZSdzIGJ1dHQgY2FzdHMgb24gdGhlIG9uZSBiZWxvdzogYSBncmFkaWVudCBmYWxsaW5nIEFXQVkgZnJvbSB0aGUgbGluZSxcbiAgICAvLyBkcmF3biBhbG9uZyB0aGUgaml0dGVyZWQgYnV0dCBzbyB0aGUgc2hhZG93IGlzIGFzIHJhZ2dlZCBhcyB0aGUgZWRnZSB0aGF0IGNhc3RzIGl0LCB3aXRoIHRoZVxuICAgIC8vIExJVCBUSVBTIG9mIHRoZSBjb3Vyc2UgYWJvdmUgaXQgYXMgYSBwYWxlIGxpbmUuIFRoZSBwYWlyIGlzIHdoYXQgbWFrZXMgdGhlIHJvb2YgcmVhZCBhc1xuICAgIC8vIHN0YWNrZWQgbGF5ZXJzOyB0aGUgc2hhZG93IGFsb25lIHJlYWRzIGFzIGdyYWluLCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBidWlsZCBsb29rZWQgbGlrZS5cbiAgICBmb3IgKGxldCBjID0gMTsgYyA8PSBuYzsgYysrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgICBjb25zdCB5YiA9IGJ1dHRzW2NdW3hdO1xuICAgICAgICBjb25zdCBnaCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5YiAtIGNoICogMC4wOSwgMCwgeWIpO1xuICAgICAgICBnaC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LDI1MiwyNDIsMCknKTsgZ2guYWRkQ29sb3JTdG9wKDEsIGByZ2JhKDI1NSwyNTIsMjQyLCR7KG8udGlwID8/IDAuMzQpLnRvRml4ZWQoMyl9KWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ2g7XG4gICAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHliIC0gY2ggKiAwLjA5ICsgZHksIDEsIGNoICogMC4wOSk7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliLCAwLCB5YiArIGNoICogMC4yMik7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSg1OCw0OCwzNiwkeyhvLnNoYWRvdyA/PyAwLjQyKS50b0ZpeGVkKDMpfSlgKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDU4LDQ4LDM2LDApJyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeWIgKyBkeSwgMSwgY2ggKiAwLjIyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNT1NTIC8gTU9VTEQ6IGxlc3MgcmVkIGFuZCBibHVlIG92ZXIgc29mdCBwYXRjaGVzLCBuZXZlciBhIHBhaW50ZWQgZ3JlZW5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLm1vc3MgPz8gMCk7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xNCk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGNvbnN0IGEgPSAwLjE0ICsgcm5kKCkgKiAwLjIyO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDE1MCwxOTAsMTEwLCR7YS50b0ZpeGVkKDMpfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDE1MCwxOTAsMTEwLDApJyk7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JzsgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH1cbiAgICAvLyBST1Q6IGRhcmsgZ3JleS1icm93biBwYXRjaGVzIHdoZXJlIHRoZSB0aGF0Y2ggaGFzIGRlY2F5ZWQsIG5ldXRyYWwgcmF0aGVyIHRoYW4gZ3JlZW5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLnJvdCA/PyAwKTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA0ICsgcm5kKCkgKiAwLjA4KTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMzAgKyBybmQoKSAqIDAuMjU7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoOTYsODYsNzQsJHthLnRvRml4ZWQoMyl9KWApOyBnMi5hZGRDb2xvclN0b3AoMC42LCBgcmdiYSg5Niw4Niw3NCwkeyhhICogMC41KS50b0ZpeGVkKDMpfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDk2LDg2LDc0LDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBzb2Z0IHRvbmFsIGRyaWZ0IHNvIHRoZSBjb3Vyc2VzIGRvIG5vdCByZWFkIGFzIGEgcHJpbnRlZCBzdHJpcGVcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgby53ZWF0aGVyID8/IDEwLCAwLjEwLCAwLjIyKTtcbiAgfSk7XG59XG5cbi8qKlxuICogV09WRU4gVEFSUEFVTElOIHRpbGU6IHRoZSBjb2Fyc2UgY3Jvc3Mtd292ZW4gcG9seXByb3B5bGVuZSB0YXBlIG9mIGEgVGhhaSBidWlsZGVyJ3MgdGFycCwgcGx1c1xuICogdGhlIGNyZWFzZXMgYSBmb2xkZWQgc2hlZXQga2VlcHMgZm9yIGxpZmUgYW5kIHRoZSBzdW4tYmxlYWNoaW5nIGFsb25nIHRoZSByaWRnZXMuIEEgbXVsdGlwbGllciBvblxuICogdGhlIG1lYXN1cmVkIGJsdWUsIHNvIHRoZSB3ZWF2ZSBkYXJrZW5zIGFuZCB0aGUgYmxlYWNoIGxpZnRzIHRvd2FyZCB3aGl0ZS5cbiAqL1xuZnVuY3Rpb24gdGFycFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgcGl0Y2ggPSBNYXRoLm1heCgzLCBNYXRoLnJvdW5kKHMgLyAoby50YXBlcyA/PyA2NCkpKTtcbiAgICAvLyB0aGUgd2VhdmU6IHdhcnAgYW5kIHdlZnQgdGFwZXMsIGVhY2ggcGFpciB3aXRoIGEgc2hhZG93IGF0IGl0cyBqb2luLCBhbHRlcm5hdGluZyBvdmVyL3VuZGVyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4ICs9IHBpdGNoKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMzAsMzQsNDQsJHsoMC4xMCArIHJuZCgpICogMC4wOCkudG9GaXhlZCgzKX0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDcpJzsgY3R4LmZpbGxSZWN0KHggKyAxLCAwLCBNYXRoLm1heCgxLCBwaXRjaCAqIDAuMzUpLCBzKTtcbiAgICB9XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzOyB5ICs9IHBpdGNoKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMzAsMzQsNDQsJHsoMC4xMCArIHJuZCgpICogMC4wOCkudG9GaXhlZCgzKX0pYDsgY3R4LmZpbGxSZWN0KDAsIHksIHMsIDEpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDcpJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyAxLCBzLCBNYXRoLm1heCgxLCBwaXRjaCAqIDAuMzUpKTtcbiAgICB9XG4gICAgLy8gZm9sZCBjcmVhc2VzOiBsb25nIHBhbGUgbGluZXMgd2l0aCBhIHNoYWRvdyBvbiBvbmUgc2lkZSwgYXQgdGhlIHR3byBheGVzIGEgdGFycCBpcyBmb2xkZWQgb25cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLmNyZWFzZXMgPz8gNik7IGsrKykge1xuICAgICAgY29uc3QgaG9yaXogPSBybmQoKSA8IDAuNSwgcCA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjUgKyBybmQoKSAqIDAuNSksIHEgPSBybmQoKSAqIHM7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yNiknO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMjYpJztcbiAgICAgIGlmIChob3JpeikgeyBjdHguZmlsbFJlY3QocSAtIGxlbiAvIDIsIHAsIGxlbiwgMS42KTsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDIwLDI2LDM4LDAuMTgpJzsgY3R4LmZpbGxSZWN0KHEgLSBsZW4gLyAyLCBwICsgMS42LCBsZW4sIDIpOyB9XG4gICAgICBlbHNlIHsgY3R4LmZpbGxSZWN0KHAsIHEgLSBsZW4gLyAyLCAxLjYsIGxlbik7IGN0eC5maWxsU3R5bGUgPSAncmdiYSgyMCwyNiwzOCwwLjE4KSc7IGN0eC5maWxsUmVjdChwICsgMS42LCBxIC0gbGVuIC8gMiwgMiwgbGVuKTsgfVxuICAgIH1cbiAgICAvLyBzdW4tYmxlYWNoZWQgc3RyZWFrcyBhbmQgYSBsaXR0bGUgZ3JpbWVcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgby53ZWF0aGVyID8/IDEyLCAwLjEwLCAwLjM0KTtcbiAgfSk7XG59XG5cbi8qKlxuICogU0FXTiBUSU1CRVIgdGlsZSBmb3IgYSB3ZWF0aGVyZWQgcG9zdC1hbmQtcGxhdGUgZnJhbWU6IGZpbmUgbG9uZ2l0dWRpbmFsIGdyYWluLCBhIGZldyBrbm90cywgdGhlXG4gKiBvZGQgZHJ5aW5nIHNwbGl0LCBhbmQgY2xvdWR5IHNpbHZlciB3ZWF0aGVyaW5nLiBEZWxpYmVyYXRlbHkgV0VBS0xZIGRpcmVjdGlvbmFsIC0tIHRoZSBmcmFtZSBpc1xuICogbWFwcGVkIHdpdGggd29ybGQgVVZzLCB3aGljaCBwdXQgdiBhbG9uZyB0aGUgcG9zdCBidXQgQUNST1NTIGEgYmVhbSwgYW5kIGEgc3Ryb25nbHkgc3RyaXBlZCB0aWxlXG4gKiB3b3VsZCB0aGVuIHJlYWQgYXMgYSBwbGFuayBqb2ludCBydW5uaW5nIHRoZSB3cm9uZyB3YXkgb24gaGFsZiB0aGUgZnJhbWUuIFRoZSB3ZWF0aGVyaW5nIGNhcnJpZXNcbiAqIG1vc3Qgb2YgdGhlIHJlYWQgYW5kIHRoZSBncmFpbiBvbmx5IHNoYXJwZW5zIGl0LCB3aGljaCBzdXJ2aXZlcyBib3RoIG9yaWVudGF0aW9ucy5cbiAqL1xuZnVuY3Rpb24gc2F3blRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBEQVJLID0gJzk2LDg0LDY4JywgTElHSFQgPSAnMjU1LDI1NSwyNTUnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2Y0ZjJlZSc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgby53ZWF0aGVyID8/IDIwLCAwLjE0LCAwLjMwKTtcbiAgICBncmFpbkxpbmVzKGN0eCwgcm5kLCAwLCBzLCAwLCBzLCBvLmdyYWluID8/IDIyMCwgREFSSywgTElHSFQsIDAuMTgpO1xuICAgIC8vIGtub3RzOiBhIGRhcmsgZWxsaXBzZSB3aXRoIHRoZSBncmFpbiBzd2VlcGluZyByb3VuZCBpdFxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ua25vdHMgPz8gNCk7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wMTIgKyBybmQoKSAqIDAuMDIpO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDc0LDYwLDQ0LDAuNDUpJztcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciwgciAqIDEuNiwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSg5Niw4MCw2MCwwLjIyKSc7IGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBmb3IgKGxldCBxID0gMTsgcSA8PSAzOyBxKyspIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciAqICgxICsgcSAqIDAuNiksIHIgKiAoMS42ICsgcSAqIDAuOSksIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGRyeWluZyBzcGxpdHMgYWxvbmcgdGhlIGZpYnJlXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5zcGxpdHMgPz8gMyk7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjIgKyBybmQoKSAqIDAuNDUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDU4LDQ4LDM2LDAuNDIpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHkgKyBkeSwgMS40LCBsZW4pO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTYpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHggKyAxLjQsIHkgKyBkeSwgMSwgbGVuKTtcbiAgICB9XG4gICAgY29uc3Qgc3BvdHM6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLm1vdWxkID8/IDMpOyBpKyspIHNwb3RzLnB1c2goW3JuZCgpICogcywgcm5kKCkgKiBzXSk7XG4gICAgbW91bGRDbHVzdGVycyhjdHgsIHJuZCwgcywgc3BvdHMsIHMgKiAwLjA5LCBzICogMC4wNywgNzAsIDAuMjQpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHQUxWQU5JU0VEIFNIRUVUIHdlYXRoZXJpbmc6IG9uZSBzZWFtbGVzcyBtdWx0aXBsaWVyIHRpbGUgY2FycnlpbmcgdGhlIHRocmVlIHRoaW5ncyBhIHppbmMgcm9vZlxuICogYWN0dWFsbHkgc2hvd3MgLS0gdGhlIGNoYWxreSB3aGl0ZSBveGlkYXRpb24gdGhhdCBlYXRzIHRoZSBzcGFuZ2xlLCB0aGUgZGFya2VyIGdyZXkgZHJpZnQgd2hlcmVcbiAqIGl0IGhhcyBub3QsIGFuZCB0aGUgd2FybSBydXN0IGZyZWNrbGVzIHRoYXQgc3RhcnQgYXQgZXZlcnkgZml4aW5nIGFuZCBsYXAuXG4gKlxuICogTGlrZSBgcGFpbnRUaWxlYCBpdCBpcyBkcmF3biBpbiBBQlNPTFVURSBtdWx0aXBsaWVyIHNwYWNlIG92ZXIgYSBSRS1CQVNFRCBlbnZlbG9wZSwgYmVjYXVzZVxuICogY2hhbGtpbmcgaXMgQlJJR0hURVIgdGhhbiB0aGUgY2xlYW4gc2hlZXQgaXQgc2l0cyBvbiBhbmQgYSBwbGFpbiBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4uIGBvLmJhc2VgXG4gKiBpcyB0aGUgY2xlYW4gemluYydzIG93biBtdWx0aXBsaWVyIGFnYWluc3QgdGhhdCBlbnZlbG9wZSBhbmQgaXMgd2hhdCBtb3N0IG9mIHRoZSB0aWxlIGlzIGZpbGxlZFxuICogd2l0aDsgYG8uY2hhbGtgIHJlYWNoZXMgYmFjayB1cCB0byB0aGUgZW52ZWxvcGUuIE1lYXN1cmVkIG9mZiB0aGUgcGxhdGUsIHRoZSBkZWNrIHJ1bnMgMTcyIHRvIDE5N1xuICogbHVtYSBhY3Jvc3MgaXRzIG93biBzdXJmYWNlIGF0IGEgc2F0dXJhdGlvbiBvZiAwLjA0IC0tIGEgMjUtbHVtYSBzcHJlYWQgb24gYSBub21pbmFsbHkgZmxhdCBncmV5LFxuICogd2hpY2ggaXMgdGhlIHdob2xlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIHJvb2YgYW5kIGEgc2hlZXQgb2YgcGxhc3RpYy5cbiAqXG4gKiBgY2hhbGtTY2FsZWAgLyBgZHJpZnRTY2FsZWAgZXhpc3QgYmVjYXVzZSBvbiBhIHJvb2YgdGhlIHRpbGUgaXMgc21hbGwgYWdhaW5zdCB0aGUgc3VyZmFjZTogdGhlXG4gKiBkZWNrIHJlcGVhdHMgaXQgZm91ciB0aW1lcyBhY3Jvc3MsIHNvIGFueSBtYXJrIHdpZGVyIHRoYW4gYSB0ZW50aCBvZiBpdCBkcmF3cyBhIHZpc2libGUgbGF0dGljZS5cbiAqIFRoZSBCUk9BRCBjaGFsayB6b25lcyBiZWxvbmcgb24gdGhlIHNoZWV0J3Mgb3duIHZlcnRleCBncmlkLCB3aGljaCBkb2VzIG5vdCByZXBlYXQ7IHdoYXQgdGhlIHRpbGVcbiAqIG93ZXMgaXMgdGhlIGZpbmUgc3BlY2tsZSBpbnNpZGUgdGhlbS5cbiAqXG4gKiBUaGUgcm9sbCBtYXJrcyBhcmUgZHJhd24gTEFTVCBhbmQgYWxvbmcgdSwgd2hpY2ggb24gdGhlIGRlY2sncyB3b3JsZCBVVnMgaXMgdGhlIGF4aXMgdGhlIG1vZGVsbGVkXG4gKiBmbHV0ZXMgcnVuIGFjcm9zcy4gVGhleSBhcmUgd2hhdCB0aGUgdGlsZSBzdGlsbCBvd2VzIHRoZSBnZW9tZXRyeSBvbmNlIHRoZSBjb3JydWdhdGlvbiBpdHNlbGYgaXNcbiAqIHJlYWw6IGEgcm9sbCBmb3JtZXIgbGVhdmVzIGZpbmUgbGVuZ3Rod2lzZSBzdHJpYXRpb24gYmV0d2VlbiB0aGUgZmx1dGVzLCBhbmQgYGJ1bXBgIHBpY2tzIGl0IHVwLlxuICovXG5mdW5jdGlvbiBnYWx2VGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IFsxLCAxLCAxXSwgY2hhbGsgPSBvLmNoYWxrID8/IGJhc2UsIHJ1c3QgPSBvLnJ1c3QgPz8gYmFzZSwgZGFyayA9IG8uZGFyayA/PyBiYXNlO1xuICAgIGNvbnN0IHdyYXAgPSAoZHJhdzogKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpID0+IHZvaWQpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBkcmF3KGR4LCBkeSk7XG4gICAgfTtcbiAgICBjb25zdCBibG9iID0gKGM6IG51bWJlcltdLCB4OiBudW1iZXIsIHk6IG51bWJlciwgcjogbnVtYmVyLCBhOiBudW1iZXIsIHJ5ID0gMSwgcm90ID0gMCkgPT4ge1xuICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKGMpfSwke2F9KWApOyBnLmFkZENvbG9yU3RvcCgwLjU1LCBgcmdiYSgke3JnYihjKX0sJHthICogMC41fSlgKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKGMpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciwgciAqIHJ5LCByb3QsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgfTtcblxuICAgIC8vIFRoZSBiYXNlIGZpbGwgY2FycmllcyB0aGUgRkxVVEUgc2hhZGluZyB3aGVuIGBmbHV0ZXNgIGlzIHNldDogYGZsdXRlc2AgcmlwcGxlcyBwZXIgdGlsZSwgaW5cbiAgICAvLyBwaGFzZSB3aXRoIHRoZSBtb2RlbGxlZCBjb3JydWdhdGlvbiAoYSB0cm91Z2ggYXQgdSA9IDAsIHdoaWNoIGlzIHdoZXJlIHRoZSBkZWNrJ3Mgd29ybGQgVVZzIHB1dFxuICAgIC8vIG9uZSkuIFRoZSBnZW9tZXRyeSBhbHJlYWR5IHR1cm5zIHRoZSBmbHV0ZXMgdG8gdGhlIGxpZ2h0IC0tIHRoaXMgaXMgdGhlIGFtYmllbnQgZGFya2VuaW5nIGluXG4gICAgLy8gdGhlIHZhbGxleXMgYW5kIHRoZSByb2xsLWZvcm1lcidzIG93biBwb2xpc2ggb24gdGhlIGNyZXN0cywgd2hpY2ggZmxhdCBzdHVkaW8gbGlnaHRpbmcgb24gYVxuICAgIC8vIHNtb290aC1zaGFkZWQgdHJpYW5nbGUgd2F2ZSBnaXZlcyBub25lIG9mLiBPdXQgb2YgcGhhc2UgaXQgd291bGQgQkVBVCB3aXRoIHRoZSBnZW9tZXRyeSwgd2hpY2hcbiAgICAvLyBpcyB3aHkgdGhlIHBpdGNoIGlzIGxvY2tlZCB0byB0aGUgZGVjaydzIG93biAxMyBmbHV0ZXMgcGVyIG1ldHJlIHJhdGhlciB0aGFuIGNob3Nlbi5cbiAgICBjb25zdCBmbCA9IG8uZmx1dGVzID8/IDAsIGZsb3cgPSBvLmZsdXRlTG93ID8/IDAuODg7XG4gICAgaWYgKGZsID4gMCkge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4KyspIHtcbiAgICAgICAgY29uc3QgdCA9ICgxIC0gTWF0aC5jb3MoeCAvIHMgKiBNYXRoLlBJICogMiAqIGZsKSkgLyAyOyAgIC8vIDAgaW4gdGhlIHRyb3VnaCwgMSBhdCB0aGUgY3Jlc3RcbiAgICAgICAgY29uc3QgayA9IGZsb3cgKyAoMSAtIGZsb3cpICogdDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZS5tYXAoKHY6IG51bWJlcikgPT4gdiAqIGspKX0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7IH1cblxuICAgIC8vIDEuIHRoZSBncmV5IGRyaWZ0OiBicm9hZCwgdmVyeSBzb2Z0LCB0aGUgYXJlYXMgdGhlIGNoYWxrIGhhcyBub3QgcmVhY2hlZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZHJpZnQgPz8gMTYpOyBpKyspXG4gICAgICBibG9iKGRhcmssIHJuZCgpICogcywgcm5kKCkgKiBzLCBzICogKDAuMTYgKyBybmQoKSAqIDAuMzApICogKG8uZHJpZnRTY2FsZSA/PyAxKSwgMC4xMCArIHJuZCgpICogMC4xOCwgMC41ICsgcm5kKCkgKiAwLjksIHJuZCgpICogTWF0aC5QSSk7XG5cbiAgICAvLyAyLiB0aGUgY2hhbGsgYmxvb206IExBUkdFLCBzb2Z0IGFuZCBpcnJlZ3VsYXIsIHdpdGggYSBncmFudWxhciBmcmluZ2UuIE9uIGEgcm9vZiBpdCBpcyB0aGVcbiAgICAvLyAgICBkb21pbmFudCBtYXJrIC0tIHRoZSBwbGF0ZSdzIGRlY2sgaXMgbW9yZSBjaGFsayB0aGFuIGNsZWFuIHNoZWV0IC0tIHNvIGl0IGlzIGRyYXduIHdpZGUgYW5kXG4gICAgLy8gICAgYXQgaGlnaCBhbHBoYSwgdW5saWtlIHRoZSBzcGFyc2UgYmxvb21zIG9mIGEgcGFpbnRlZCBwYW5lbC5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLmNoYWxrUGF0Y2hlcyA/PyAxNCk7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCBjciA9IHMgKiAoMC4wOCArIHJuZCgpICogMC4xOCkgKiAoby5jaGFsa1NjYWxlID8/IDEpO1xuICAgICAgYmxvYihjaGFsaywgY3gsIGN5LCBjciwgKG8uY2hhbGtBbHBoYSA/PyAwLjU1KSArIHJuZCgpICogMC4zMCwgMC41ICsgcm5kKCkgKiAwLjksIHJuZCgpICogTWF0aC5QSSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQwOyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3IgKiAxLjM7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkLCByID0gMC44ICsgcm5kKCkgKiAyLjQ7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihjaGFsayl9LCR7MC4yICsgcm5kKCkgKiAwLjQ1fSlgO1xuICAgICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIHJ1c3Q6IHNtYWxsIHdhcm0gZnJlY2tsZSBjbHVzdGVycywgZWFjaCBhIHNvZnQgcGF0Y2ggdW5kZXIgYSBmaWVsZCBvZiBzcGVja3MsIHdpdGggYSBzaG9ydFxuICAgIC8vICAgIHJ1biBiZWxvdyBpdC4gWmluYyBkb2VzIG5vdCBzaGVldC1ydXN0IHRoZSB3YXkgYmFyZSBzdGVlbCBkb2VzIC0tIGl0IGZyZWNrbGVzIGZpcnN0LlxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ucnVzdENsdXN0ZXJzID8/IDEwKTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIGNyID0gcyAqICgwLjAyICsgcm5kKCkgKiAwLjA1NSk7XG4gICAgICBibG9iKHJ1c3QsIGN4LCBjeSwgY3IsIDAuMjUgKyBybmQoKSAqIDAuMzAsIDAuNyArIHJuZCgpICogMC43LCBybmQoKSAqIE1hdGguUEkpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zcGVja3NQZXJDbHVzdGVyID8/IDI2KTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyO1xuICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCwgciA9IDAuNyArIHJuZCgpICogMS44O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IocnVzdCl9LCR7MC4yNSArIHJuZCgpICogMC40NX0pYDtcbiAgICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChybmQoKSA8IDAuNikge1xuICAgICAgICBjb25zdCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDA2LCBsZW4gPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTYpO1xuICAgICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGN5LCAwLCBjeSArIGxlbik7XG4gICAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHJ1c3QpfSwkezAuMTQgKyBybmQoKSAqIDAuMTZ9KWApOyBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydXN0KX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICAgIHdyYXAoKGR4KSA9PiBjdHguZmlsbFJlY3QoY3ggKyBkeCArIChybmQoKSAtIDAuNSkgKiBjciwgY3ksIHcsIGxlbikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDQuIHJvbGwgbWFya3M6IGZpbmUgbGluZXMgb2YgY29uc3RhbnQgdSwgYXQgYHJvbGxzYCBwZXIgdGlsZSwgYWx0ZXJuYXRlbHkgYSBzaGFkZSB1bmRlciBhbmQgYVxuICAgIC8vICAgIHNoYWRlIG92ZXIgdGhlIHRvbmUgdGhleSBjcm9zcy4gQm91bmQgYXMgYSBidW1wIG1hcCB0aGV5IGFyZSB0aGUgc3RyaWF0aW9uIGJldHdlZW4gZmx1dGVzLlxuICAgIGNvbnN0IHJvbGxzID0gby5yb2xscyA/PyA0MDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvbGxzOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSAoaSArIDAuMzUgKyBybmQoKSAqIDAuMykgKiBzIC8gcm9sbHMsIHVwID0gcm5kKCkgPCAwLjQ1O1xuICAgICAgY29uc3QgYyA9IHVwID8gY2hhbGsgOiBkYXJrLCBhID0gMC4wNiArIHJuZCgpICogMC4xMjtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKCR7cmdiKGMpfSwke2F9KWA7IGN0eC5saW5lV2lkdGggPSAwLjcgKyBybmQoKSAqIDEuMztcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCAwKTsgY3R4LmxpbmVUbyh4ICsgZHgsIHMpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogU1BMSVQtQ1VMTSB0aWxlIGZvciB0aGUgaGFsZi1waXBlIHJvb2Zpbmc6IHggQVJPVU5EIHRoZSBoYWxmIGN1bG0gKGN1bG1VViBvdmVyIDAuNzAgbSwgc28gdGhlXG4gKiAgc2VhbSBsYW5kcyBvbiB0aGUgaGlkZGVuIHVuZGVyc2lkZSksIHkgQUxPTkcgaXQuIFdoYXQgdGhlIHBsYXRlIHNob3dzIG9uIGEgcm9vZmluZyBjdWxtIHRoYXQgYVxuICogIHdob2xlIHBvbGUgZG9lcyBub3Q6IE9ORSBub2RlIHJpbmcgcGVyIDAuNzAgbSAodGhlIHJvb2YgY3VsbXMgYXJlIGxvbmdlciBpbnRlcm5vZGVzIHRoYW4gdGhlXG4gKiAgcG9zdHMpLCBkZW5zZSBsb25naXR1ZGluYWwgZmlicmUsIGEgbG9uZyBkcnlpbmcgc3BsaXQsIGJsZWFjaGVkIGZhY2VzLCBhbmQgUk9UIC0tIGRhcmtcbiAqICBpcnJlZ3VsYXIgaG9sZXMgd2l0aCBhIHN0YWluZWQgaGFsbyBhbmQgYSBzY2F0dGVyIG9mIGluc2VjdCBwaW5ob2xlcywgdGhyZWUgb3IgZm91ciBwZXIgdGlsZS5cbiAqICBBIG11bHRpcGxpZXIgb24gdGhlIHBlci1pbnN0YW5jZSB0b25lOyB0aGUgcm90IGNvcmVzIGFyZSBzbWFsbCBlbm91Z2ggKDEwLTIwIHB4IG9mIDUxMiwgb24gYVxuICogIDAuNzAgbSB0aWxlLCBzbyAxNS0zMCBtbSkgdGhhdCBubyBlbmNsb3NlZCBkYXJrIHBhdGNoIHJlYWNoZXMgdGhlIHNpbGhvdWV0dGUgZ2F0ZS4gKi9cbmZ1bmN0aW9uIHNwbGl0VGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBEQVJLID0gJzg4LDc2LDU4JywgTElHSFQgPSAnMjU1LDI1NSwyNTUnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2YzZjBlOCc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBhIHNvZnQgcm91bmQtb2ZmIGFjcm9zcyB0aGUgYXJjOiB0aGUgcmltcyBhIHRvdWNoIGRhcmtlciB0aGFuIHRoZSBjcm93blxuICAgIGNvbnN0IGdhID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHMsIDApO1xuICAgIGdhLmFkZENvbG9yU3RvcCgwLCAncmdiYSg5MCw4NCw3NCwwLjE0KScpOyBnYS5hZGRDb2xvclN0b3AoMC41LCAncmdiYSgyNTUsMjU1LDI1NSwwLjA4KScpOyBnYS5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoOTAsODQsNzQsMC4xNCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ2E7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgMTAsIDAuMTAsIDAuMzQpO1xuICAgIGNvbnN0IG5vZGUgPSBzICogKDAuMzAgKyBybmQoKSAqIDAuNDApO1xuICAgIGZvciAoY29uc3QgW3kwLCB5MV0gb2YgW1swLCBub2RlXSwgW25vZGUsIHNdXSkgZ3JhaW5MaW5lcyhjdHgsIHJuZCwgMCwgcywgeTAsIHkxLCAzMjAsIERBUkssIExJR0hULCAwLjI0KTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDM7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjMgKyBybmQoKSAqIDAuNik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsMzQsMjYsMC41NSknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCAxLjYsIGxlbik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yMCknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCArIDEuNiwgeSArIGR5LCAxLjIsIGxlbik7XG4gICAgfVxuICAgIC8vIHRoZSBub2RlIHJpbmdcbiAgICB7XG4gICAgICBjb25zdCB5ID0gbm9kZTtcbiAgICAgIGNvbnN0IGdzID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkgLSBzICogMC4wMywgMCwgeSk7XG4gICAgICBncy5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoNjAsNTAsNDAsMCknKTsgZ3MuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDYwLDUwLDQwLDAuMjQpJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3M7IGN0eC5maWxsUmVjdCgwLCB5IC0gcyAqIDAuMDMsIHMsIHMgKiAwLjAzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg1Miw0NCwzNiwwLjY2KSc7IGN0eC5maWxsUmVjdCgwLCB5LCBzLCAzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjM2KSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgMywgcywgNSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNjAsNTAsNDAsMC4zMCknOyBjdHguZmlsbFJlY3QoMCwgeSArIDgsIHMsIDIpO1xuICAgIH1cbiAgICAvLyBST1Q6IGFuIGlycmVndWxhciBkYXJrIGNvcmUgd2l0aCBhIHdhcm0gc3RhaW5lZCBoYWxvLCBhbmQgcGluaG9sZXMgYXJvdW5kIGl0XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgcnggPSBzICogKDAuMDEyICsgcm5kKCkgKiAwLjAzKSwgcnkgPSByeCAqICgxLjQgKyBybmQoKSAqIDEuNiksIHJvdCA9IChybmQoKSAtIDAuNSkgKiAwLjY7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY29uc3QgaGFsbyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjeCwgY3kgKyBkeSwgMCwgY3gsIGN5ICsgZHksIE1hdGgubWF4KHJ4LCByeSkgKiAyLjQpO1xuICAgICAgICBoYWxvLmFkZENvbG9yU3RvcCgwLCAncmdiYSg5Niw3NCw0MCwwLjQyKScpOyBoYWxvLmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDk2LDc0LDQwLDAuMjApJyk7IGhhbG8uYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDk2LDc0LDQwLDApJyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBoYWxvOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4LCBjeSArIGR5LCByeCAqIDIuNiwgcnkgKiAyLjQsIHJvdCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzYsMjgsMTgsMC44MiknOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4LCBjeSArIGR5LCByeCwgcnksIHJvdCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMTQsMTAsNiwwLjkpJzsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCArIHJ4ICogMC4yLCBjeSArIGR5IC0gcnkgKiAwLjEsIHJ4ICogMC41LCByeSAqIDAuNTUsIHJvdCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgKHJuZCgpIC0gMC41KSAqIHMgKiAwLjEyLCB5ID0gY3kgKyAocm5kKCkgLSAwLjUpICogcyAqIDAuMiwgciA9IDEgKyBybmQoKSAqIDEuODtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDMwLDI0LDE2LDAuODUpJztcbiAgICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBsb29zZSBtb3VsZCBiZWxvdyB0aGUgbm9kZVxuICAgIG1vdWxkQ2x1c3RlcnMoY3R4LCBybmQsIHMsIFtbcm5kKCkgKiBzLCBub2RlICsgcyAqIDAuMDRdLCBbcm5kKCkgKiBzLCBybmQoKSAqIHNdXSwgcyAqIDAuMDgsIHMgKiAwLjA1LCA2MCwgMC4yNik7XG4gIH0pO1xufVxuXG4vKiogUk9QRSB0aWxlIGZvciB0aGUgbGFzaGluZ3M6IHggQVJPVU5EIHRoZSBjb2xsYXIsIHkgQUxPTkcgdGhlIHBvbGUgaXQgd3JhcHMuIEEgbGFzaGluZyBpcyB0dXJuc1xuICogIG9mIGxhaWQgcm9wZSwgc28gdGhlIHN1cmZhY2UgaXMgZGlhZ29uYWwgU1RSQU5EUyAtLSBhIGdyb292ZSBhbmQgYSBsaXQgcmlkZ2UgcGVyIHN0cmFuZCBhdCBhXG4gKiAgc2hhbGxvdyB3cmFwIGFuZ2xlIC0tIHdpdGggZmlicmUgZnV6eiBhbmQgYSBmZXcgZGFya2VyIHNvaWxlZCB0dXJucy4gT3ZlciAwLjEyIG0gcGVyIHRpbGUgdGhlXG4gKiAgc3RyYW5kIHBpdGNoIGlzIH4xMiBtbSwgd2hpY2ggaXMgdGhlIHBsYXRlJ3Mgcm9wZS4gU2VhbWxlc3M6IGV2ZXJ5IHN0cm9rZSBpcyBkcmF3biBhdCB0aHJlZVxuICogIHkgb2Zmc2V0cyBhbmQgdGhlIHN0cmFuZCBydW5zIGFjcm9zcyB0aGUgd3JhcC4gKi9cbmZ1bmN0aW9uIHJvcGVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2Y0ZWZlNCc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBuID0gMTAsIHBpdGNoID0gcyAvIG4sIGFuZyA9IDAuMzI7ICAgICAgICAgICAgICAgIC8vIHdyYXAgYW5nbGUsIHJhZGlhbnNcbiAgICBjb25zdCBkeCA9IE1hdGgudGFuKGFuZykgKiBzOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBob3cgZmFyIGEgc3RyYW5kIGRyaWZ0cyBpbiB4IG92ZXIgb25lIHRpbGUgaGVpZ2h0XG4gICAgY3R4LnNhdmUoKTtcbiAgICBmb3IgKGxldCBrID0gLTM7IGsgPCBuICsgMzsgaysrKSB7XG4gICAgICBjb25zdCB4MCA9IGsgKiBwaXRjaDtcbiAgICAgIGZvciAoY29uc3Qgb3kgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICAvLyBncm9vdmUgYmV0d2VlbiB0dXJuc1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSg3MCw1OCw0MCwwLjU1KSc7IGN0eC5saW5lV2lkdGggPSBwaXRjaCAqIDAuMjI7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4MCwgb3kpOyBjdHgubGluZVRvKHgwICsgZHgsIG95ICsgcyk7IGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gdGhlIGxpdCBjcm93biBvZiB0aGUgdHVyblxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjMwKSc7IGN0eC5saW5lV2lkdGggPSBwaXRjaCAqIDAuMzA7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4MCArIHBpdGNoICogMC41LCBveSk7IGN0eC5saW5lVG8oeDAgKyBwaXRjaCAqIDAuNSArIGR4LCBveSArIHMpOyBjdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIHR3aXN0IG1hcmtzIGFjcm9zcyBlYWNoIHR1cm5cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoOTAsNzYsNTIsMC4yOCknOyBjdHgubGluZVdpZHRoID0gMS4yO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDEyOyB0KyspIHtcbiAgICAgICAgICBjb25zdCB5eSA9IG95ICsgKHQgKyBybmQoKSkgKiBzIC8gMTIsIHh4ID0geDAgKyBwaXRjaCAqIDAuNSArIGR4ICogKCh5eSAtIG95KSAvIHMpO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4eCAtIHBpdGNoICogMC4zNSwgeXkgLSBwaXRjaCAqIDAuMTgpOyBjdHgubGluZVRvKHh4ICsgcGl0Y2ggKiAwLjM1LCB5eSArIHBpdGNoICogMC4xOCk7IGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjdHgucmVzdG9yZSgpO1xuICAgIC8vIGZ1enogYW5kIHNvaWxpbmdcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHJuZCgpIDwgMC42ID8gJ3JnYmEoNzAsNTgsNDAsMC4xOCknIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC4yMiknO1xuICAgICAgY3R4LmZpbGxSZWN0KHgsIHksIDEsIDEgKyBybmQoKSAqIDIpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgY29uc3QgeSA9IHJuZCgpICogcywgaCA9IHMgKiAoMC4wNiArIHJuZCgpICogMC4xMCk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5LCAwLCB5ICsgaCk7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoNjAsNDgsMzIsMCknKTsgZzIuYWRkQ29sb3JTdG9wKDAuNSwgJ3JnYmEoNjAsNDgsMzIsMC4yMiknKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDYwLDQ4LDMyLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KDAsIHkgKyBkeSwgcywgaCk7XG4gICAgfVxuICB9KTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoaWdod2F5IC8gYnJpZGdlIGhlbHBlcnMgKi9cblxuLyoqXG4gKiBBIGNsb3NlZCAoeCwgeSkgUFJPRklMRSBzd2VwdCBhbG9uZyBhIHBhdGggLS0gdGhlIG9uZSBzaGFwZSBhIG1vZHVsYXIgZGVjayBuZWVkcyBhbmQgbm90aGluZyBpblxuICogdGhlIGJveC90dWJlL2xhdGhlIHZvY2FidWxhcnkgY2FuIGdpdmUuIFRocmVlIHBhdGhzOlxuICpcbiAqICAgeyBraW5kOiAnc3RyYWlnaHQnLCBsZW4sIHNoZWFyPyB9ICAgYWxvbmcgK1ogZnJvbSAtbGVuLzIgdG8gK2xlbi8yOyBgc2hlYXJgIGFkZHMgc2hlYXIgKiB6IHRvXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVyeSB5LCB3aGljaCBpcyBob3cgYSBSQU1QIGtlZXBzIGl0cyBlbmQgZmFjZXMgVkVSVElDQUxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGUgc2VjdGlvbiBzdGF5cyBhIHZlcnRpY2FsIGN1dCwgdGhlIHdheSBhIHByZWNhc3RcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnQgaXMgYWN0dWFsbHkgY3V0KSB3aGlsZSB0aGUgd2hvbGUgcGllY2UgY2xpbWJzLlxuICogICB7IGtpbmQ6ICdhcmMnLCByYWRpdXMsIGRlZyB9ICAgICAgICAgZW50ZXJpbmcgYWxvbmcgK1ogYXQgeiA9IC16RW50cnkgKGRlZmF1bHQgODogd2hlcmUgYVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyYWlnaHQgMTYgbSBtb2R1bGUncyBlbmQgZmFjZSBpcykgYW5kIHR1cm5pbmcgdG93YXJkICtYXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhYm91dCBhIHZlcnRpY2FsIGF4aXMgdGhyb3VnaCAocmFkaXVzLCAwLCAtekVudHJ5KS4gVGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0IGZhY2UncyBjZW50cmUgYW5kIHlhdyBhcmUgd2hhdCB0aGUgbGV2ZWwgZWRpdG9yXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbnMgdGhlIG5leHQgcGllY2UgdG87IGBhcmNFeGl0KClgIHByaW50cyB0aGVtLlxuICpcbiAqIEZhY2VzIGFyZSBGTEFULXNoYWRlZCAobm9uLWluZGV4ZWQsIG9uZSBub3JtYWwgcGVyIHRyaWFuZ2xlKTogYSBib3ggZ2lyZGVyIGlzIGEgZmFjZXRlZCBzb2xpZCBhbmRcbiAqIGEgc2hhcmVkLXZlcnRleCBub3JtYWwgYWNyb3NzIGl0cyA5MC1kZWdyZWUgYXJyaXNlcyBzaGFkZXMgdGhlIGRhcmsgY29ybmVyIGJhbmQgdGhlIGxhdGhlIGhlbHBlclxuICogaGFzIHRvIHNwbGl0IGNvcm5lcnMgdG8gYXZvaWQuIEFsb25nIGFuIGFyYyB0aGF0IGNvc3RzIG5vdGhpbmcgdmlzaWJsZSBhdCAxLjkgZGVncmVlcyBwZXIgc3RhdGlvbi5cbiAqXG4gKiBVVnMgYXJlIE1FVFJFUyBkaXZpZGVkIGJ5IGB1dlNjYWxlYDogdSBhbG9uZyB0aGUgcGF0aCwgdiB0aGUgcHJvZmlsZSdzIG93biBhcmMgbGVuZ3RoIGZyb20gaXRzXG4gKiBmaXJzdCBwb2ludC4gU28gYSB0aWxlIGJvdW5kIG9uIHRoZSBzd2VlcCBydW5zIGl0cyB2IFVQIGEgd2ViIHdoZW4gdGhlIHByb2ZpbGUgc3RhcnRzIGF0IHRoZVxuICogc29mZml0LCBhbmQgYSB2ZXJ0aWNhbCBtYXJrIGF0IGEgZml4ZWQgdSBpcyBhIGpvaW50IGxpbmUgcnVubmluZyByaWdodCByb3VuZCB0aGUgc2VjdGlvbiAtLVxuICogd2hpY2ggaXMgd2hhdCBhIHNlZ21lbnRhbCBkZWNrJ3Mgam9pbnQgbGluZXMgYXJlLiBUaGUgYXNwaGFsdCBwcm9maWxlIHN0YXJ0cyBhdCBpdHMgdG9wLWxlZnRcbiAqIGNvcm5lciwgc28gdiBhY3Jvc3MgdGhlIHJvYWQgaXMgMC4uKHJvYWQgd2lkdGgpIGFuZCBhIGxhbmUgbGluZSBpcyBhIG1hcmsgYXQgYSBmaXhlZCB2LlxuICpcbiAqIGBjbG9zZWRgIChkZWZhdWx0IHRydWUpIGNhcHMgYm90aCBlbmRzIHdpdGggdGhlIHRyaWFuZ3VsYXRlZCBwcm9maWxlLiBFbmQgZmFjZXMgYXJlIGZsYXQgYW5kXG4gKiBzcXVhcmUgd2l0aCBubyBvdmVyaGFuZywgd2hpY2ggaXMgdGhlIHdob2xlIG1vZHVsYXIgY29udHJhY3QgYXQgYSBqb2ludC5cbiAqL1xuZnVuY3Rpb24gc3dlZXBQcm9maWxlKG86IGFueSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gby5wb2x5LCBtID0gcHRzLmxlbmd0aCwgcGF0aCA9IG8ucGF0aCwgc2VnID0gby5zZWcgPz8gKHBhdGgua2luZCA9PT0gJ2FyYycgPyAxMiA6IDEpO1xuICBjb25zdCB1dlMgPSBvLnV2U2NhbGUgPz8gMSwgdXZTViA9IG8udXZTY2FsZVYgPz8gdXZTOyAgIC8vIHYgKHJvdW5kIHRoZSBwcm9maWxlKSBtYXkgdGFrZSBpdHMgb3duIHNjYWxlXG4gIGNvbnN0IHpFbnRyeSA9IHBhdGguekVudHJ5ID8/IDg7XG4gIC8vIHN0YXRpb24gdHJhbnNmb3JtOiBwcm9maWxlIChweCwgcHkpIC0+IHdvcmxkLCBwbHVzIHRoZSBhbG9uZy1wYXRoIGRpc3RhbmNlIGluIG1ldHJlc1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIpOiB7IFA6IChweDogbnVtYmVyLCBweTogbnVtYmVyKSA9PiBudW1iZXJbXSwgczogbnVtYmVyIH0gPT4ge1xuICAgIGNvbnN0IHQgPSBpIC8gc2VnO1xuICAgIGlmIChwYXRoLmtpbmQgPT09ICdhcmMnKSB7XG4gICAgICBjb25zdCBSID0gcGF0aC5yYWRpdXMsIHRoID0gKHBhdGguZGVnICogTWF0aC5QSSAvIDE4MCkgKiB0O1xuICAgICAgY29uc3QgY3ggPSBSLCBjeiA9IC16RW50cnk7XG4gICAgICByZXR1cm4geyBQOiAocHgsIHB5KSA9PiBbY3ggLSAoUiAtIHB4KSAqIE1hdGguY29zKHRoKSwgcHksIGN6ICsgKFIgLSBweCkgKiBNYXRoLnNpbih0aCldLCBzOiBSICogdGggfTtcbiAgICB9XG4gICAgY29uc3QgTCA9IHBhdGgubGVuLCB6ID0gLUwgLyAyICsgTCAqIHQsIHNoID0gcGF0aC5zaGVhciA/PyAwO1xuICAgIHJldHVybiB7IFA6IChweCwgcHkpID0+IFtweCwgcHkgKyBzaCAqIHosIHpdLCBzOiB6ICsgTCAvIDIgfTtcbiAgfTtcbiAgLy8gcHJvZmlsZSBhcmMgbGVuZ3RoIHBlciBwb2ludCwgZm9yIHZcbiAgY29uc3QgdkF0OiBudW1iZXJbXSA9IFswXTtcbiAgZm9yIChsZXQgaiA9IDE7IGogPCBtOyBqKyspIHZBdC5wdXNoKHZBdFtqIC0gMV0gKyBNYXRoLmh5cG90KHB0c1tqXVswXSAtIHB0c1tqIC0gMV1bMF0sIHB0c1tqXVsxXSAtIHB0c1tqIC0gMV1bMV0pKTtcbiAgY29uc3QgdkVuZCA9IHZBdFttIC0gMV0gKyBNYXRoLmh5cG90KHB0c1swXVswXSAtIHB0c1ttIC0gMV1bMF0sIHB0c1swXVsxXSAtIHB0c1ttIC0gMV1bMV0pO1xuICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIHV2OiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCB0cmkgPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSwgdWE6IG51bWJlcltdLCB1YjogbnVtYmVyW10sIHVjOiBudW1iZXJbXSkgPT4ge1xuICAgIHBvcy5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpOyB1di5wdXNoKC4uLnVhLCAuLi51YiwgLi4udWMpO1xuICB9O1xuICBsZXQgcHJldiA9IGF0KDApO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzZWc7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IGF0KGkpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbTsgaisrKSB7XG4gICAgICBjb25zdCBrID0gKGogKyAxKSAlIG0sIHAwID0gcHRzW2pdLCBwMSA9IHB0c1trXTtcbiAgICAgIGNvbnN0IHYwID0gdkF0W2pdIC8gdXZTViwgdjEgPSAoayA9PT0gMCA/IHZFbmQgOiB2QXRba10pIC8gdXZTVjtcbiAgICAgIGNvbnN0IGEgPSBwcmV2LlAocDBbMF0sIHAwWzFdKSwgYiA9IHByZXYuUChwMVswXSwgcDFbMV0pLCBjID0gY3VyLlAocDFbMF0sIHAxWzFdKSwgZCA9IGN1ci5QKHAwWzBdLCBwMFsxXSk7XG4gICAgICBjb25zdCB1MCA9IHByZXYucyAvIHV2UywgdTEgPSBjdXIucyAvIHV2UztcbiAgICAgIC8vIChhLCBjLCBkKSBhbmQgKGEsIGIsIGMpOiBvdXR3YXJkIGZvciBhIGNvdW50ZXItY2xvY2t3aXNlIHByb2ZpbGUsIHNlZSB0aGUgbm90ZSBpbiBody5jb21tb25cbiAgICAgIHRyaShhLCBjLCBkLCBbdTAsIHYwXSwgW3UxLCB2MV0sIFt1MSwgdjBdKTtcbiAgICAgIHRyaShhLCBiLCBjLCBbdTAsIHYwXSwgW3UwLCB2MV0sIFt1MSwgdjFdKTtcbiAgICB9XG4gICAgcHJldiA9IGN1cjtcbiAgfVxuICBpZiAoby5jbG9zZWQgIT09IGZhbHNlKSB7XG4gICAgY29uc3QgaWR4ID0gVEhSRUUuU2hhcGVVdGlscy50cmlhbmd1bGF0ZVNoYXBlKHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKHBbMF0sIHBbMV0pKSwgW10pO1xuICAgIGNvbnN0IHMwID0gYXQoMCksIHMxID0gYXQoc2VnKTtcbiAgICBmb3IgKGNvbnN0IFtpYSwgaWIsIGljXSBvZiBpZHgpIHtcbiAgICAgIGNvbnN0IFAgPSAoUzogYW55LCBxOiBudW1iZXIpID0+IFMuUChwdHNbcV1bMF0sIHB0c1txXVsxXSk7XG4gICAgICBjb25zdCBVID0gKHE6IG51bWJlcikgPT4gW3B0c1txXVswXSAvIHV2UywgcHRzW3FdWzFdIC8gdXZTXTtcbiAgICAgIC8vIHRoZSBzdGFydCBjYXAgZmFjZXMgQkFDSyBhbG9uZyB0aGUgcGF0aDogcmV2ZXJzZWQgd2luZGluZzsgdGhlIGVuZCBjYXAgZmFjZXMgZm9yd2FyZFxuICAgICAgdHJpKFAoczAsIGlhKSwgUChzMCwgaWMpLCBQKHMwLCBpYiksIFUoaWEpLCBVKGljKSwgVShpYikpO1xuICAgICAgdHJpKFAoczEsIGlhKSwgUChzMSwgaWIpLCBQKHMxLCBpYyksIFUoaWEpLCBVKGliKSwgVShpYykpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwb3MpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh1diksIDIpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyAgIC8vIG5vbi1pbmRleGVkOiBvbmUgZmxhdCBub3JtYWwgcGVyIGZhY2VcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQ0FTVCBDT05DUkVURSB0aWxlLCBhcyBhIG11bHRpcGxpZXIgb24gYW4gZW52ZWxvcGUtdG9uZWQgbWF0ZXJpYWwuIFdoYXQgYSBwcmVjYXN0IG9yIGluLXNpdHUgZmFjZVxuICogY2FycmllcyBhdCBwcm9wIGRpc3RhbmNlLCBpbiB0aGUgb3JkZXIgaXQgaXMgbGFpZCBkb3duOlxuICogICAtIGB0aWVzYCAgICAgYSBSRUdVTEFSIGdyaWQgb2YgZm9ybS10aWUgaG9sZXM6IGRhcmsgY29uZXMgd2l0aCBhIHBhbGVyIGxpcCwgYHRpZXNgID0gW2NvbHMsIHJvd3NdXG4gKiAgICAgICAgICAgICAgICBwZXIgdGlsZS4gUmFuZG9tIHBpdHMgY2Fubm90IHNheSBgY2FzdCBjb25jcmV0ZWA7IHRoZSBncmlkIGNhbi5cbiAqICAgLSBgcG91cmAgICAgIGhvcml6b250YWwgbGlmdC9wb3VyIGxpbmVzLCBgcG91cmAgcGVyIHRpbGUsIGEgZGFyayBoYWlybGluZSB3aXRoIGEgcGFsZSBsaXAuXG4gKiAgIC0gYHNlYW1zYCAgICB2ZXJ0aWNhbCBqb2ludCBsaW5lcyAoc2VnbWVudCBqb2ludHMgb24gYSBkZWNrLCBwYW5lbCBqb2ludHMgb24gYSB3YWxsKS5cbiAqICAgLSBzdHJlYWtzIGZyb20gdGhlIHRvcCAocmFpbiksIGEgd2FzaCByaXNpbmcgZnJvbSB0aGUgYm90dG9tIChgY292ZXJhZ2VgLCBgd2FzaEFscGhhYCksXG4gKiAgICAgYGNsb3Vkc2AsIGBwaXRzYCAocmFuZG9tIHBpbmhvbGVzKSwgYSBgbW9zc2AgYmFuZCwgYHJ1c3RTdHJlYWtzYCBoYW5naW5nIGZyb20gYHJ1c3RWYCxcbiAqICAgICBgc29vdGAgKGEgbmVhci1ibGFjayBmbGF0IHdhc2ggb3ZlciB0aGUgYm90dG9tIGBzb290Q292YCAtLSBleGhhdXN0IHVuZGVyIGEgZGVjayksIGdyYWluLlxuICogRXZlcnkgY29sb3VyIGlzIGEgcmF0aW8gYWdhaW5zdCB0aGUgbWF0ZXJpYWwncyBlbnZlbG9wZSwgc28gdGhlIHRpbGUgb25seSBldmVyIGRhcmtlbnMgdG93YXJkXG4gKiBtZWFzdXJlZCB0b25lcy4gRGFyayBjb3JlcyBhcmUgY2xhbXBlZCBieSB0aGUgY2FsbGVyJ3MgcmF0aW9zOyBub3RoaW5nIGhlcmUgZ29lcyBiZWxvdyB0aGVtLlxuICovXG5mdW5jdGlvbiBjb25jcmV0ZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyBbMSwgMSwgMV07XG4gICAgY29uc3Qgd3JhcCA9IChkcmF3OiAoZHg6IG51bWJlciwgZHk6IG51bWJlcikgPT4gdm9pZCkgPT4geyBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgZHJhdyhkeCwgZHkpOyB9O1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgY29uc3Qgd2FzaCA9IG8ud2FzaCA/PyBbMC43MCwgMC43MCwgMC42Nl07XG4gICAgLy8gY2xvdWRzIGZpcnN0OiB0aGUgYnJvYWQgbW90dGxpbmcgb2YgYSBjYXN0IGZhY2UsIHRlbnMgb2YgY2VudGltZXRyZXMgYWNyb3NzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5jbG91ZHMgPz8gMzApOyBpKyspIHtcbiAgICAgIGNvbnN0IHYgPSBvLmNsb3VkID8/IFswLjkwLCAwLjkwLCAwLjg4XTtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKG8uY2xvdWRSID8/IDAuMTApICogKDAuNCArIHJuZCgpICogMS40KSwgYSA9IChvLmNsb3VkQWxwaGEgPz8gMC4xOCkgKiAoMC40ICsgcm5kKCkpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgfVxuICAgIC8vIHJhaW4gc3RyZWFrcyBmcm9tIHRoZSB0b3BcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnN0cmVha3MgPz8gMjApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogKG8uc3RyZWFrVyA/PyAwLjAxMCksIGxlbiA9IHMgKiAoMC4xNSArIHJuZCgpICogKG8uc3RyZWFrTGVuID8/IDAuNikpLCBhID0gKG8uc3RyZWFrQWxwaGEgPz8gMC4xMCkgKyBybmQoKSAqIDAuMTQ7XG4gICAgICBjb25zdCB2ID0gby5zdHJlYWsgPz8gd2FzaDtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGxlbik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCAwLCB3LCBsZW4pO1xuICAgIH1cbiAgICAvLyB3YXNoIGZyb20gdGhlIGJvdHRvbVxuICAgIGNvbnN0IGNvdiA9IG8uY292ZXJhZ2UgPz8gMC4yNSwgd2FzaEEgPSBvLndhc2hBbHBoYSA/PyAwLjU7XG4gICAgaWYgKHdhc2hBID4gMCkge1xuICAgICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3YpKTtcbiAgICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBfSlgKTsgZ3JhZC5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQSAqIDAuNDV9KWApOyBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfVxuICAgIC8vIHNvb3Q6IGV4aGF1c3QgdW5kZXIgYSBkZWNrLCBhIGZsYXQgZGFyayBiYW5kIG92ZXIgdGhlIGJvdHRvbSBvZiB0aGUgdGlsZSB3aXRoIGEgcmFnZ2VkIHRvcFxuICAgIGlmIChvLnNvb3QpIHtcbiAgICAgIGNvbnN0IHYgPSBvLnNvb3QsIGN2ID0gby5zb290Q292ID8/IDAuMywgYSA9IG8uc29vdEFscGhhID8/IDAuNTtcbiAgICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY3YpKTtcbiAgICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHYpfSwke2F9KWApOyBncmFkLmFkZENvbG9yU3RvcCgwLjcsIGByZ2JhKCR7cmdiKHYpfSwke2EgKiAwLjZ9KWApOyBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNvb3RCbG90cyA/PyAyNCk7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAqICgxIC0gY3YgKiAoMC4yICsgcm5kKCkgKiAxLjEpKSwgciA9IHMgKiAoMC4wMyArIHJuZCgpICogMC4xMCk7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YSAqICgwLjMgKyBybmQoKSAqIDAuNSl9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIgKiAxLjYsIHIsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHJ1c3Qgc3RyZWFrcyBoYW5naW5nIGZyb20gYSB2IGxpbmUgKGEgZHJhaW4gb3V0bGV0LCBhIGJlYXJpbmcgc2hlbGYsIGEgcGFyYXBldCBqb2ludClcbiAgICBmb3IgKGNvbnN0IHJzIG9mIChvLnJ1c3RTdHJlYWtzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgdiA9IHJzLnRvbmUgPz8gWzAuNjIsIDAuNDIsIDAuMjJdLCB5MCA9IHMgKiAoMSAtIHJzLnYpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAocnMuY291bnQgPz8gNik7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcnMudSAhPT0gdW5kZWZpbmVkID8gcyAqIHJzLnUgKyAocm5kKCkgLSAwLjUpICogcyAqIChycy5zcHJlYWQgPz8gMC4wMikgOiBybmQoKSAqIHM7XG4gICAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiBzICogKHJzLndpZHRoID8/IDAuMDEwKSwgbGVuID0gcyAqICgocnMubGVuID8/IDAuMTUpICsgcm5kKCkgKiAocnMubGVuVmFyID8/IDAuMjUpKSwgYSA9IChycy5hbHBoYSA/PyAwLjM1KSArIHJuZCgpICogMC4zO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5MCwgMCwgeTAgKyBsZW4pO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjYsIGByZ2JhKCR7cmdiKHYpfSwke2EgKiAwLjZ9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5MCwgdywgbGVuKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gaG9yaXpvbnRhbCB0b25lIGJhbmRzIChhIGNvbnN0cnVjdGlvbiBqb2ludCwgYSB0aWRlIGxpbmUpOiB2IG1lYXN1cmVkIGZyb20gdGhlIHRpbGUncyBib3R0b21cbiAgICBmb3IgKGNvbnN0IGIgb2YgKG8uYmFuZHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCB5MSA9IHMgKiAoMSAtIGIudjEpLCB5MCA9IHMgKiAoMSAtIGIudjApLCB2ID0gYi50b25lID8/IFswLjcsIDAuNywgMC42OF07XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iodil9LCR7Yi5hbHBoYSA/PyAwLjV9KWA7IGN0eC5maWxsUmVjdCgwLCB5MSwgcywgeTAgLSB5MSk7XG4gICAgfVxuICAgIC8vIGVmZmxvcmVzY2VuY2U6IHBhbGUgY2FsY2l0ZSBydW5zIGhhbmdpbmcgZnJvbSB0aGUgdG9wIGVkZ2UgLyByYW5kb20gc3RhcnRzLCBicmlnaHRlciB0aGFuIHRoZSBiYXNlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5lZmZsb3IgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeTAgPSBybmQoKSAqIHMgKiAwLjYsIGxlbiA9IHMgKiAoKG8uZWZmbG9yTGVuID8/IDAuMykgKiAoMC41ICsgcm5kKCkpKSwgdyA9IDIgKyBybmQoKSAqIHMgKiAwLjAxMjtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkwLCAwLCB5MCArIGxlbiksIGEgPSAoby5lZmZsb3JBbHBoYSA/PyAwLjUpICogKDAuNSArIHJuZCgpICogMC41KTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyNTUsMjU1LDI1MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoMjU1LDI1NSwyNTAsMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5MCwgdywgbGVuKTtcbiAgICB9XG4gICAgLy8gcG91ciAvIGxpZnQgbGluZXM6IGhvcml6b250YWwsIG9uZSBkYXJrIGhhaXJsaW5lIHdpdGggYSBwYWxlIGxpcCB1bmRlciBpdFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ucG91ciA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB5ID0gTWF0aC5yb3VuZChzICogKChvLnBvdXJBdCA/PyAwLjMwKSArIGkgLyBvLnBvdXIpKSAlIHMsIHYgPSBvLnBvdXJUb25lID8/IFswLjcyLCAwLjcxLCAwLjY4XSwgaCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQocyAqIDAuMDA0KSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iodil9LCR7by5wb3VyQWxwaGEgPz8gMC40NX0pYDsgY3R4LmZpbGxSZWN0KDAsIHksIHMsIGgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHYpfSwkeyhvLnBvdXJBbHBoYSA/PyAwLjQ1KSAqIDAuM30pYDsgY3R4LmZpbGxSZWN0KDAsIHkgKyBoLCBzLCBoKTtcbiAgICB9XG4gICAgLy8gdmVydGljYWwgam9pbnQgbGluZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNlYW1zID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBNYXRoLnJvdW5kKHMgKiAoKG8uc2VhbUF0ID8/IDAuNDIpICsgaSAvIG8uc2VhbXMpKSAlIHMsIHYgPSBvLnNlYW0gPz8gWzAuNzIsIDAuNzEsIDAuNjhdLCB3ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChzICogKG8uc2VhbVcgPz8gMC4wMDQpKSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iodil9LCR7by5zZWFtQWxwaGEgPz8gMC41fSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgdywgcyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iodil9LCR7KG8uc2VhbUFscGhhID8/IDAuNSkgKiAwLjN9KWA7IGN0eC5maWxsUmVjdCh4ICsgdywgMCwgdywgcyk7XG4gICAgfVxuICAgIC8vIGZvcm0tdGllIGhvbGVzIG9uIGEgZ3JpZFxuICAgIGlmIChvLnRpZXMpIHtcbiAgICAgIGNvbnN0IFtuYywgbnJdID0gby50aWVzLCByID0gcyAqIChvLnRpZVIgPz8gMC4wMDYpLCB2ID0gby50aWUgPz8gWzAuNDUsIDAuNDQsIDAuNDJdO1xuICAgICAgY29uc3Qgb3ggPSBzICogKG8udGllT2ZmPy5bMF0gPz8gMC41KSAvIG5jLCBveSA9IHMgKiAoby50aWVPZmY/LlsxXSA/PyAwLjUpIC8gbnI7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5jOyBpKyspIGZvciAobGV0IGogPSAwOyBqIDwgbnI7IGorKykge1xuICAgICAgICBjb25zdCB4ID0gb3ggKyBpICogcyAvIG5jICsgKHJuZCgpIC0gMC41KSAqIDAuNCwgeSA9IG95ICsgaiAqIHMgLyBuciArIChybmQoKSAtIDAuNSkgKiAwLjQ7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHggLSByICogMC4yLCB5IC0gciAqIDAuMiwgMCwgeCwgeSwgcik7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHswLjg1fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNzUsIGByZ2JhKCR7cmdiKHYpfSwkezAuN30pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgICAvLyBhIGZhaW50IGRyaXAgYmVsb3cgdGhlIGhvbGUsIHRoZSB3YXkgYSB0aWUgaG9sZSB3ZWVwc1xuICAgICAgICBpZiAocm5kKCkgPCAoby50aWVEcmlwID8/IDAuMzUpKSB7XG4gICAgICAgICAgY29uc3QgZzMgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSwgMCwgeSArIHIgKiA2KTtcbiAgICAgICAgICBnMy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LDAuMzUpYCk7IGczLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZzM7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggKyBkeCAtIHIgKiAwLjQsIHksIHIgKiAwLjgsIHIgKiA2KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyByYW5kb20gcGluaG9sZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnBpdHMgPz8gMzAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB2ID0gby5waXQgPz8gWzAuNTAsIDAuNDksIDAuNDZdO1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IChvLnBpdFIgPz8gMC45KSAqICgwLjUgKyBybmQoKSAqIDEuMyksIGEgPSAwLjI1ICsgcm5kKCkgKiAwLjU7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByICogMik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjQsIGByZ2JhKCR7cmdiKHYpfSwke2EgKiAwLjQ1fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByICogMiwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICB9XG4gICAgLy8gbW9zcyAvIGFsZ2FlOiBhIGdyZWVuIHdhc2ggb3ZlciB0aGUgYm90dG9tIGJhbmQgcGx1cyBjbHVzdGVyZWQgY2FycGV0c1xuICAgIGlmIChvLm1vc3MpIHtcbiAgICAgIGNvbnN0IG12ID0gby5tb3NzLCBiYW5kID0gby5tb3NzQmFuZCA/PyAwLjEyO1xuICAgICAgY29uc3QgbWcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gYmFuZCAqIDEuMykpO1xuICAgICAgbWcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKG12KX0sJHtvLm1vc3NXYXNoID8/IDAuNDV9KWApOyBtZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IobXYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG1nOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLm1vc3NDbHVzdGVycyA/PyAxNik7IGsrKykge1xuICAgICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBzIC0gTWF0aC5wb3cocm5kKCksIDEuNSkgKiBzICogYmFuZCwgY3IgPSBzICogKDAuMDEgKyBybmQoKSAqIDAuMDMpO1xuICAgICAgICBjb25zdCBjZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjeCwgY3ksIDAsIGN4LCBjeSwgY3IpO1xuICAgICAgICBjZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IobXYpfSwwLjcpYCk7IGNnLmFkZENvbG9yU3RvcCgwLjYsIGByZ2JhKCR7cmdiKG12KX0sMC4zNSlgKTsgY2cuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKG12KX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNnOyBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCArIGR4LCBjeSwgY3IsIGNyICogMC42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gc3BhbGxzOiBhIGZldyBwYWxlIHBhdGNoZXMgd2l0aCBhIGRhcmsgcmltLCB3aGVyZSB0aGUgY292ZXIgaGFzIGJyb2tlbiBvZmZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwYWxscyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjAxMiArIHJuZCgpICogMC4wMiksIHYgPSBvLnNwYWxsID8/IFswLjgwLCAwLjc4LCAwLjc0XTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih2KX0sMC41NSlgO1xuICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIsIHIgKiAoMC42ICsgcm5kKCkgKiAwLjYpLCBybmQoKSAqIDMsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgfVxuICAgIC8vIGdyYWluXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAyMDAwKTsgaSsrKSB7XG4gICAgICBjb25zdCBsbyA9IG8uZ3JhaW5MbyA/PyAyMDA7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHYgPSBsbyArIE1hdGgucm91bmQocm5kKCkgKiAoMjU1IC0gbG8pKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwke28uZ3JhaW5BbHBoYSA/PyAwLjEwfSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMS41LCAxLjUpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKlxuICogUk9BRCBTVVJGQUNFIHRpbGU6IGFzcGhhbHQgYXMgYSByYXRpbyBmaWxsIG92ZXIgYSBwYWxlIE1BUksgZW52ZWxvcGUsIHNvIHRoZSBsYW5lIGxpbmVzIGNhbiBiZVxuICogYnJpZ2h0ZXIgdGhhbiB0aGUgc3VyZmFjZSBhIG11bHRpcGx5IGNvdWxkIG9ubHkgZGFya2VuLiB2IHJ1bnMgQUNST1NTIHRoZSBjYXJyaWFnZXdheSAoMCBhdCBvbmVcbiAqIGtlcmIsIDEgYXQgdGhlIG90aGVyIC0tIHRoZSBhc3BoYWx0IHByb2ZpbGUgc3RhcnRzIGF0IGl0cyB0b3AtbGVmdCBjb3JuZXIgYW5kIGB1dlNjYWxlYCBpcyB0aGVcbiAqIHJvYWQgd2lkdGgpLCB1IHJ1bnMgQUxPTkcgaXQuIGBsaW5lc2AgYXJlIG1hcmtzIGF0IGEgZml4ZWQgdjogYHsgdiwgdywgdG9uZSwgZGFzaGVzPywgZGFzaEZyYWM/IH1gLlxuICogYGRhc2hlc2Agd2hvbGUgcGVyaW9kcyBwZXIgdGlsZSBzbyB0aGUgcGF0dGVybiB3cmFwcy4gV2hlZWwgdHJhY2tzIGRhcmtlbiB0d28gYmFuZHMgcGVyIGxhbmUuXG4gKi9cbmZ1bmN0aW9uIHJvYWRUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzAuNCwgMC40LCAwLjRdO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gYWdncmVnYXRlIHNwZWNrbGUgb3ZlciB0aGUgYXNwaGFsdCwgYm90aCB3YXlzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zcGVja2xlID8/IDUwMDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIGsgPSBybmQoKSwgYSA9IDAuMTAgKyBybmQoKSAqIDAuMjU7XG4gICAgICBjb25zdCB2ID0gayA8IDAuNSA/IG8uc3BlY2tEYXJrID8/IFswLjMwLCAwLjMwLCAwLjMwXSA6IG8uc3BlY2tMaWdodCA/PyBbMC42MiwgMC42MiwgMC42MF07XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iodil9LCR7YX0pYDsgY3R4LmZpbGxSZWN0KHgsIHksIDEgKyBybmQoKSAqIDEuNSwgMSArIHJuZCgpICogMS41KTtcbiAgICB9XG4gICAgLy8gcGF0Y2hlczogYnJvYWQgc29mdCB0b25lIGRyaWZ0IHNvIGEgMTYgbSBzcGFuIGlzIG5vdCBvbmUgZmxhdCB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ucGF0Y2hlcyA/PyAxOCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xNiksIGsgPSBybmQoKTtcbiAgICAgIGNvbnN0IHYgPSBrIDwgMC41ID8gby5wYXRjaERhcmsgPz8gWzAuMzQsIDAuMzQsIDAuMzRdIDogby5wYXRjaExpZ2h0ID8/IFswLjQ4LCAwLjQ4LCAwLjQ3XTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHYpfSwkezAuMjUgKyBybmQoKSAqIDAuM30pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIgKiAyLjIsIHIsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyB3aGVlbCB0cmFja3M6IHR3byBkYXJrZXIgYmFuZHMgcGVyIGxhbmUsIGFsb25nIHVcbiAgICBmb3IgKGNvbnN0IHQgb2YgKG8udHJhY2tzID8/IFtdKSBhcyBudW1iZXJbXSkge1xuICAgICAgY29uc3QgeSA9IHMgKiB0LCBoID0gcyAqIChvLnRyYWNrVyA/PyAwLjAzNSksIHYgPSBvLnRyYWNrID8/IFswLjMzLCAwLjMzLCAwLjMzXTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkgLSBoLCAwLCB5ICsgaCk7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LDApYCk7IGcyLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7cmdiKHYpfSwke28udHJhY2tBbHBoYSA/PyAwLjM1fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBjdHguZmlsbFJlY3QoMCwgeSAtIGgsIHMsIDIgKiBoKTtcbiAgICB9XG4gICAgLy8gdGhlIG1hcmtzLCB3b3JuOiBkcmF3biBhdCBhbHBoYSB3aXRoIGEgZmV3IGNoaXBzIGtub2NrZWQgb3V0XG4gICAgZm9yIChjb25zdCBsbiBvZiAoby5saW5lcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IHkgPSBzICogKDEgLSBsbi52KSwgaCA9IE1hdGgubWF4KDEuNSwgcyAqIGxuLncpLCB2ID0gbG4udG9uZSA/PyBbMSwgMSwgMV0sIGEgPSBsbi5hbHBoYSA/PyAwLjk7XG4gICAgICBpZiAobG4uZGFzaGVzKSB7XG4gICAgICAgIGNvbnN0IHBlciA9IHMgLyBsbi5kYXNoZXMsIGRsID0gcGVyICogKGxuLmRhc2hGcmFjID8/IDAuMzUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxuLmRhc2hlczsgaSsrKSB7IGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih2KX0sJHthfSlgOyBjdHguZmlsbFJlY3QoaSAqIHBlciArIHBlciAqIDAuMiwgeSAtIGggLyAyLCBkbCwgaCk7IH1cbiAgICAgIH0gZWxzZSB7IGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih2KX0sJHthfSlgOyBjdHguZmlsbFJlY3QoMCwgeSAtIGggLyAyLCBzLCBoKTsgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAobG4uY2hpcHMgPz8gMzApOyBpKyspIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKGJhc2UpfSwkezAuNCArIHJuZCgpICogMC41fSlgO1xuICAgICAgICBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCB5IC0gaCAvIDIgKyBybmQoKSAqIGgsIDEgKyBybmQoKSAqIDQsIDEgKyBybmQoKSAqIDIpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBmYWludCBncmltZSBzdHJlYWtzIGFsb25nIHRoZSB0cmF2ZWwgZGlyZWN0aW9uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zbWVhcnMgPz8gNDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHkgPSBybmQoKSAqIHMsIHggPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC4xICsgcm5kKCkgKiAwLjQpLCB2ID0gby5zbWVhciA/PyBbMC4zNiwgMC4zNiwgMC4zNl07XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCh4LCAwLCB4ICsgbGVuLCAwKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sMClgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtyZ2Iodil9LCR7MC4wOCArIHJuZCgpICogMC4xNX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5LCBsZW4sIDEgKyBybmQoKSAqIDMpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogSEFaQVJEIHRpbGU6IGRpYWdvbmFsIHllbGxvdy1hbmQtYmxhY2sgKG9yIHJlZC1hbmQtd2hpdGUpIGNoZXZyb24gYmFuZHMsIGFuIGludGVnZXIgbnVtYmVyIG9mXG4gKiBwZXJpb2RzIGFjcm9zcyB0aGUgdGlsZSBzbyBpdCB3cmFwcywgb3ZlciBhIHNjdWZmZWQgbXVsdGlwbHkgc28gdGhlIHBhaW50IHJlYWRzIHdvcm4uIEJvdW5kIG9uXG4gKiBhIFdISVRFLWlzaCBlbnZlbG9wZSBtYXRlcmlhbCB3aXRoIGBwYW5lbGAgb3IgYGhlaWdodGAgVVZzIHNvIHRoZSBiYW5kIGxhbmRzIHdoZXJlIGl0IGlzIHBhaW50ZWQuXG4gKiBgcGVyaW9kc2AgZGlhZ29uYWwgc3RyaXBlIHBhaXJzIHBlciB0aWxlLCBgYW5nbGVgIGluIHJhZGlhbnMuIGBhYm92ZWAgKDAuLjEgb2YgdikgbGVhdmVzIHRoZSB0aWxlXG4gKiBhYm92ZSB0aGF0IGhlaWdodCBhdCBgcGxhaW5gIHNvIE9ORSBjb21wb25lbnQgY2FuIGNhcnJ5IGEgc3RyaXBlZCBmb290IGFuZCBhIHBsYWluIHNoYWZ0LlxuICovXG5mdW5jdGlvbiBoYXphcmRUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IGEgPSBvLmEgPz8gWzEsIDAuODIsIDAuMV0sIGIgPSBvLmIgPz8gWzAuMTYsIDAuMTUsIDAuMTRdLCBwZXIgPSBvLnBlcmlvZHMgPz8gNCwgYW5nID0gby5hbmdsZSA/PyBNYXRoLlBJIC8gNDtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihhKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIG9uZSBwYWlyIHBlciBzL3BlciBBTE9ORyBYLCBzbyB0aGUgZGlhZ29uYWxzIHdyYXAgc2VhbWxlc3NseTogdGhlIHBlcnBlbmRpY3VsYXIgd2lkdGggaXMgdGhhdCB0aW1lcyBjb3MoYW5nKVxuICAgIGNvbnN0IHcgPSAocyAvIHBlcikgKiBNYXRoLmNvcyhhbmcpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGIpfSlgO1xuICAgIC8vIGRyYXcgdGhlIGRhcmsgc3RyaXBlcyBhcyBsb25nIHJvdGF0ZWQgcmVjdGFuZ2xlcywgd3JhcHBlZCBvbiBhbGwgc2lkZXNcbiAgICBmb3IgKGxldCBpID0gLXBlciAqIDQ7IGkgPCBwZXIgKiA1OyBpKyspIHtcbiAgICAgIGNvbnN0IGMgPSBpICogdyArIHcgKiAwLjU7XG4gICAgICBjdHguc2F2ZSgpOyBjdHgudHJhbnNsYXRlKHMgLyAyLCBzIC8gMik7IGN0eC5yb3RhdGUoYW5nKTtcbiAgICAgIGN0eC5maWxsUmVjdChjIC0gcyAqIDEuNSAtIDAsIC1zICogMiwgdyAqIDAuNSwgcyAqIDQpO1xuICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gICAgLy8gdGhlIGJhbmQgc3RvcHMgYXQgYGFib3ZlYDogZXZlcnl0aGluZyBoaWdoZXIgaXMgdGhlIHBsYWluIHRvbmVcbiAgICBpZiAoby5hYm92ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBwbGFpbiA9IG8ucGxhaW4gPz8gWzEsIDEsIDFdO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IocGxhaW4pfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyAqICgxIC0gby5hYm92ZSkpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNjdWZmcyA/PyA2MCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNiksIHYgPSAwLjUgKyBybmQoKSAqIDAuMzU7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwwLjUpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjU1LDI1NSwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmdyYWluID8/IDE1MDApOyBpKyspIHsgY29uc3QgdiA9IDE3MCArIE1hdGgucm91bmQocm5kKCkgKiA4NSk7IGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjEyKWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMS41LCAxLjUpOyB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKipcbiAqIEVBUlRIIHRpbGU6IGRyeSBjb21wYWN0ZWQgZmlsbCAtLSBhIHdhcm0gdGFuIGRyaWZ0IHdpdGggc3RvbmVzLCBkYXJrZXIgZGFtcCBwYXRjaGVzIGFuZCBzcGFyc2VcbiAqIGdyZWVuIHdlZWQgdHVmdHMsIGFzIGEgbXVsdGlwbGllciBvbiBhbiBlbnZlbG9wZS10b25lZCBtYXRlcmlhbC4gUGxhbi1wcm9qZWN0ZWQgb24gdGhlIGJhbmsuXG4gKi9cbmZ1bmN0aW9uIGVhcnRoVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IFsxLCAxLCAxXTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGNvbnN0IHdyYXAgPSAoZHJhdzogKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpID0+IHZvaWQpID0+IHsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIGRyYXcoZHgsIGR5KTsgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmNsb3VkcyA/PyA0MCk7IGkrKykge1xuICAgICAgY29uc3QgdiA9IHJuZCgpIDwgMC41ID8gby5kYXJrID8/IFswLjcyLCAwLjY2LCAwLjU4XSA6IG8ubGlnaHQgPz8gWzAuOTYsIDAuOTQsIDAuOTBdO1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNiArIHJuZCgpICogMC4xNik7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHswLjI1ICsgcm5kKCkgKiAwLjN9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByLCByICogKDAuNSArIHJuZCgpKSwgcm5kKCkgKiAzLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnN0b25lcyA/PyAyNjApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSAxICsgcm5kKCkgKiBzICogMC4wMDgsIGsgPSBybmQoKTtcbiAgICAgIGNvbnN0IHYgPSBrIDwgMC40ID8gWzAuNiwgMC41OCwgMC41NF0gOiBrIDwgMC44ID8gWzAuODYsIDAuODQsIDAuODBdIDogWzAuNSwgMC40OCwgMC40NV07XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iodil9LCR7MC41ICsgcm5kKCkgKiAwLjQ1fSlgO1xuICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIsIHIgKiAoMC42ICsgcm5kKCkgKiAwLjYpLCBybmQoKSAqIDMsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIC8vIHdlZWRzOiBzcGFyc2UgZ3JlZW4gdHVmdHMsIGRyYXduIG92ZXIgKHRoZXkgYXJlIEJSSUdIVEVSIHRoYW4gZHJ5IGVhcnRoIGluIGdyZWVuKVxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ud2VlZHMgPz8gMTQpOyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgbiA9IDYgKyBNYXRoLnJvdW5kKHJuZCgpICogMTApLCB2ID0gby53ZWVkID8/IFswLjQ1LCAwLjU4LCAwLjI4XTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gcm5kKCkgKiBzICogMC4wMiwgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQ7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKCR7cmdiKHYpfSwkezAuNTUgKyBybmQoKSAqIDAuNH0pYDsgY3R4LmxpbmVXaWR0aCA9IDEgKyBybmQoKSAqIDEuNTtcbiAgICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgZHgsIHkgKyBkeSk7IGN0eC5saW5lVG8oeCArIGR4ICsgKHJuZCgpIC0gMC41KSAqIDgsIHkgKyBkeSAtIDQgLSBybmQoKSAqIDgpOyBjdHguc3Ryb2tlKCk7IH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmdyYWluID8/IDMwMDApOyBpKyspIHsgY29uc3QgdiA9IDE5MCArIE1hdGgucm91bmQocm5kKCkgKiA2NSk7IGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjEyKWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMS41LCAxLjUpOyB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKipcbiAqIENIRVFVRVIgUExBVEUgdGlsZTogdGhlIHJhaXNlZCBsb3plbmdlcyBvZiBhIHN0ZWVsIHdhbGt3YXkgZmxvb3IgaW4gdHdvIGFsdGVybmF0aW5nIG9yaWVudGF0aW9ucyxcbiAqIGFzIG1hcCBBTkQgYnVtcCwgb24gYSB3b3JuIHBhaW50ZWQgZW52ZWxvcGUuIGBuYCBsb3plbmdlcyBwZXIgdGlsZSBzaWRlLlxuICovXG5mdW5jdGlvbiBjaGVxdWVyVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IFswLjYyLCAwLjYyLCAwLjYyXSwgaGkgPSBvLmhpID8/IFswLjkwLCAwLjkwLCAwLjg4XSwgbG8gPSBvLmxvID8/IFswLjQ1LCAwLjQ1LCAwLjQ2XTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IG4gPSBvLm4gPz8gOCwgY2VsbCA9IHMgLyBuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgY29uc3QgY3ggPSAoaSArIDAuNSkgKiBjZWxsLCBjeSA9IChqICsgMC41KSAqIGNlbGwsIGFuZyA9ICgoaSArIGopICUgMiA/IDEgOiAtMSkgKiBNYXRoLlBJIC8gNDtcbiAgICAgIGN0eC5zYXZlKCk7IGN0eC50cmFuc2xhdGUoY3gsIGN5KTsgY3R4LnJvdGF0ZShhbmcpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKGxvKX0sMC43KWA7IGN0eC5maWxsUmVjdCgtY2VsbCAqIDAuMzAgKyAxLCAtY2VsbCAqIDAuMDggKyAxLCBjZWxsICogMC42MCwgY2VsbCAqIDAuMTYpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKGhpKX0sMC44NSlgOyBjdHguZmlsbFJlY3QoLWNlbGwgKiAwLjMwLCAtY2VsbCAqIDAuMDgsIGNlbGwgKiAwLjYwLCBjZWxsICogMC4xNik7XG4gICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmdyaW1lID8/IDMwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjE1KSwgdiA9IG8uZ3JpbWVUb25lID8/IFswLjYsIDAuNiwgMC41OF07XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHswLjE1ICsgcm5kKCkgKiAwLjN9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iodil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZ3JhaW4gPz8gMjUwMCk7IGkrKykgeyBjb25zdCB2ID0gMTgwICsgTWF0aC5yb3VuZChybmQoKSAqIDc1KTsgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMTIpYDsgY3R4LmZpbGxSZWN0KHJuZCgpICogcywgcm5kKCkgKiBzLCAxLjUsIDEuNSk7IH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKlxuICogUklCQkVEIFBBTkVMIHRpbGU6IHRoZSB2ZXJ0aWNhbCByaWJzIG9mIGEgcHJlc3NlZCBhYnNvcmJpbmcgcGFuZWwgKGEgbm9pc2UgYmFycmllcidzIGxvd2VyIGJheSxcbiAqIGEgcmliYmVkIHN0ZWVsIGNsYWRkaW5nKSwgYHJpYnNgIHBlciB0aWxlIGFzIGEgY29zaW5lLXNoYWRlZCBzdHJpcGUgZmllbGQsIGR1c3Qgc3RyZWFrcyBhbmQgYVxuICogc29vdCBiYW5kIG92ZXIgdGhlIGJvdHRvbSwgYXMgbWFwIGFuZCBidW1wLlxuICovXG5mdW5jdGlvbiByaWJQYW5lbFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgcmlicyA9IG8ucmlicyA/PyAyNCwgbG93ID0gby5sb3cgPz8gMC43MiwgYmFzZSA9IG8uYmFzZSA/PyBbMSwgMSwgMV07XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4KyspIHtcbiAgICAgIGNvbnN0IHQgPSAoTWF0aC5jb3MoeCAvIHMgKiBNYXRoLlBJICogMiAqIHJpYnMpICsgMSkgLyAyO1xuICAgICAgY29uc3QgayA9IGxvdyArICgxIC0gbG93KSAqIHQ7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke01hdGgucm91bmQoMjU1ICogYmFzZVswXSAqIGspfSwke01hdGgucm91bmQoMjU1ICogYmFzZVsxXSAqIGspfSwke01hdGgucm91bmQoMjU1ICogYmFzZVsyXSAqIGspfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3RyZWFrcyA/PyAyNCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMiwgbGVuID0gcyAqICgwLjIgKyBybmQoKSAqIDAuNiksIGEgPSAwLjA2ICsgcm5kKCkgKiAwLjE0LCB2ID0gby5zdHJlYWsgPz8gWzAuNywgMC43LCAwLjY4XTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGxlbik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCAwLCB3LCBsZW4pO1xuICAgIH1cbiAgICBpZiAoby5zb290KSB7XG4gICAgICBjb25zdCB2ID0gby5zb290LCBjdiA9IG8uc29vdENvdiA/PyAwLjIyLCBhID0gby5zb290QWxwaGEgPz8gMC41O1xuICAgICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjdikpO1xuICAgICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAxNTAwKTsgaSsrKSB7IGNvbnN0IHYgPSAxOTAgKyBNYXRoLnJvdW5kKHJuZCgpICogNjUpOyBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4xMClgOyBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCBybmQoKSAqIHMsIDEuNSwgMS41KTsgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIC8vIHN0aWNrZXJzOiBhIGZldyB0b3JuIHBhbGUgcmVjdGFuZ2xlcywgZHJhd24gb3ZlclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3RpY2tlcnMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgKiAoMC4zICsgcm5kKCkgKiAwLjUpLCB3ID0gcyAqICgwLjAyICsgcm5kKCkgKiAwLjA0KSwgaCA9IHcgKiAoMC42ICsgcm5kKCkgKiAwLjgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7MjMwICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKX0sJHsyMjggKyBNYXRoLnJvdW5kKHJuZCgpICogMjApfSwkezIyNSArIE1hdGgucm91bmQocm5kKCkgKiAyMCl9LDAuODUpYDtcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke01hdGgucm91bmQoNjAgKyBybmQoKSAqIDgwKX0sJHtNYXRoLnJvdW5kKDgwICsgcm5kKCkgKiA4MCl9LCR7TWF0aC5yb3VuZCgxNTAgKyBybmQoKSAqIDkwKX0sMC43KWA7XG4gICAgICBjdHguZmlsbFJlY3QoeCArIHcgKiAwLjE1LCB5ICsgaCAqIDAuMiwgdyAqIDAuNywgaCAqIDAuMyk7XG4gICAgfVxuICB9KTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgLy8gQSBMSVQgc3VyZmFjZSAoYSBmbHVvcmVzY2VudCB0dWJlLCBhIGNoYXJjb2FsIGVtYmVyIGJlZCk6IGVtaXNzaXZlIGNhcnJpZXMgdGhlIGdsb3cgd2l0aG91dCBhXG4gICAgLy8gbGlnaHQgc291cmNlLCB3aGljaCB0aGUga2l0J3MgcHJvcHMgbmV2ZXIgb3duIC0tIHRoZSBob3N0IHNjZW5lIG93bnMgbGlnaHRpbmcuXG4gICAgaWYgKHMuZW1pc3NpdmUgIT09IHVuZGVmaW5lZCkgeyBtLmVtaXNzaXZlID0gbmV3IFRIUkVFLkNvbG9yKHMuZW1pc3NpdmUpOyBtLmVtaXNzaXZlSW50ZW5zaXR5ID0gcy5lbWlzc2l2ZUludGVuc2l0eSA/PyAxOyB9XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICAvLyBBbiBBTFBIQS1DVVQgcGFuZSAoY2hhaW4tbGluayBtZXNoKTogdGhlIGNhbnZhcyB0aWxlIGNhcnJpZXMgdGhlIGN1dC1vdXQgaW4gaXRzIGFscGhhIGNoYW5uZWwgYW5kXG4gICAgLy8gYWxwaGFUZXN0IGRpc2NhcmRzIHRoZSBvcGVuIGNlbGxzLCBzbyB0aGUgd2lyZSBzdGF5cyBvcGFxdWUgYW5kIHNvcnRzIGxpa2UgYSBzb2xpZC5cbiAgICBpZiAocy5hbHBoYVRlc3QgIT09IHVuZGVmaW5lZCkgeyBtLmFscGhhVGVzdCA9IHMuYWxwaGFUZXN0OyBtLnRyYW5zcGFyZW50ID0gZmFsc2U7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXhwcmVzc3dheVR3aW5Db2x1bW5Qb3J0YWxQaWVyTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdFeHByZXNzd2F5IFR3aW4tQ29sdW1uIFBvcnRhbCBQaWVyJztcblxuICBjb25zdCBtYXRlcmlhbHMgPSBidWlsZE1hdGVyaWFscyhvcHRpb25zKTtcbiAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+ID0ge307XG4gIGNvbnN0IHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gIGNvbnN0IGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPiA9IHt9O1xuICBjb25zdCBjYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGNvbnN0IHJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcblxuICAvKipcbiAgICogQSBtYXRlcmlhbCB3aXRoIGB2ZXJ0ZXhDb2xvcnNgIHJlYWRzIGEgYGNvbG9yYCBhdHRyaWJ1dGUgb3V0IG9mIEVWRVJZIGdlb21ldHJ5IGJvdW5kIHRvIGl0LCBhbmRcbiAgICogYSBnZW9tZXRyeSB0aGF0IGhhcyBub25lIGhhbmRzIHRoZSBzaGFkZXIgYW4gdW5kZWZpbmVkIGF0dHJpYnV0ZSAtLSB3aGljaCBjb21lcyBiYWNrIGFzXG4gICAqICgwLCAwLCAwKSBhbmQgcmVuZGVycyB0aGUgbWVzaCBCTEFDSy4gVGhhdCBpcyBub3QgYSBoeXBvdGhldGljYWw6IHRoZSB1Ym9zb3QncyB3YWxsIGJvZHkgYW5kXG4gICAqIGl0cyBlaWdodCBib3VuZGFyeSBzdG9uZXMgc2hpcHBlZCBhcyBibGFjayBzaWxob3VldHRlcyBmcm9tIG9uZSB0aW50ZWQgcGxhdGZvcm0gc2hhcmluZyB0aGVpclxuICAgKiBzdG9uZSBtYXRlcmlhbCwgYW5kIHRoZSBmYWlsdXJlIGlzIHNpbGVudCBiZWNhdXNlIHRoZSB0aW50ZWQgY29tcG9uZW50IGl0c2VsZiBsb29rcyBwZXJmZWN0LlxuICAgKlxuICAgKiBBbiBJbnN0YW5jZWRNZXNoIGhpZGVzIGl0IC0tIGl0IGZhbGxzIGJhY2sgdG8gaW5zdGFuY2VDb2xvciBhbmQgY29tZXMgb3V0IHdoaXRlIC0tIHNvIHRoZSBzYW1lXG4gICAqIG1pc3Rha2Ugb24gdGhlIGNoZWRpJ3MgbmljaGUgZnJhbWVzIHJlbmRlcmVkIGNvcnJlY3RseSBhbmQgdGF1Z2h0IG5vdGhpbmcuIEd1YXJkIGl0IGhlcmUsIG9uY2UsXG4gICAqIGZvciBldmVyeSBnZW9tZXRyeTogbm8gY29sb3IgYXR0cmlidXRlIGFuZCBhIHZlcnRleENvbG9ycyBtYXRlcmlhbCBtZWFucyBmaWxsIHdpdGggd2hpdGUuXG4gICAqL1xuICBmdW5jdGlvbiBndWFyZFZlcnRleENvbG9ycyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKSB7XG4gICAgaWYgKCFtYXQgfHwgIW1hdC52ZXJ0ZXhDb2xvcnMgfHwgZ2VvLmdldEF0dHJpYnV0ZSgnY29sb3InKSkgcmV0dXJuO1xuICAgIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KG4gKiAzKS5maWxsKDEpLCAzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGQoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIC8vIHNldENvbG9yQXQgTVVMVElQTElFUyB3aXRoIG1hdGVyaWFsLmNvbG9yLCBzbyBhbiBpbnN0YW5jZWQgbWF0ZXJpYWwgY2FycnlpbmcgcGVyLWluc3RhbmNlXG4gICAgICAvLyB0b25lcyBtdXN0IGJlIHdoaXRlIG9yIGV2ZXJ5IHRvbmUgY29tZXMgb3V0IGRhcmtlbmVkIGJ5IHRoZSBiYXNlLlxuICAgICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzLmxlbmd0aDsgaSsrKSBpbnN0LnNldENvbG9yQXQoaSwgYy5zZXRIZXgoY29sc1tpXSkpO1xuICAgICAgaWYgKGluc3QuaW5zdGFuY2VDb2xvcikgaW5zdC5pbnN0YW5jZUNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5zdC5pbnN0YW5jZU1hdHJpeC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgbm9kZS5hZGQoaW5zdCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBpbnN0IGFzIHVua25vd24gYXMgVEhSRUUuTWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cbiAgLyoqIEZvdXIgaW5zdGFuY2VzIGF0IDkwLWRlZ3JlZSB5YXcgYWJvdXQgdGhlIGF4aXMgLS0gdGhlIGNvcm5lci9mYWNlIHJlcGV0aXRpb24gdGhhdCBldmVyeVxuICAgKiAgYnVpbGRpbmcgaW4gdGhpcyBzZXQgdXNlcyBmb3IgbmljaGVzLCBmaW5pYWxzLCBib3VuZGFyeSBzdG9uZXMgYW5kIGNvcm5lciBkb21lcy4gKi9cbiAgZnVuY3Rpb24gcXVhZChyYWRpdXM6IG51bWJlciwgeTogbnVtYmVyLCBwaGFzZSA9IDApOiBUSFJFRS5NYXRyaXg0W10ge1xuICAgIHJldHVybiBbMCwgMSwgMiwgM10ubWFwKChpKSA9PiB7XG4gICAgICBjb25zdCBhID0gcGhhc2UgKyBpICogTWF0aC5QSSAvIDI7XG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnNpbihhKSAqIHJhZGl1cywgeSwgTWF0aC5jb3MoYSkgKiByYWRpdXMpLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGEpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBHID0gQ09ORklHLmdlb21ldHJ5IGFzIGFueTtcblxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29tcG9uZW50c1xuICAgKiBFYWNoIGVudHJ5IG9mIENPTkZJRy5nZW9tZXRyeS5jb21wb25lbnRzIGlzIE9ORSBtZXJnZWQgZ2VvbWV0cnkgb24gT05FIG1hdGVyaWFsIC0tIG9uZSBkcmF3XG4gICAqIGNhbGwuIEV2ZXJ5IHBhcnQgaW5zaWRlIGl0IGlzIGEgdGludGVkIGJveCwgdHViZSwgY3lsaW5kZXIsIGxhdGhlIG9yIHBsYW5lOyBjb2xvdXIgZGlmZmVyZW5jZXNcbiAgICogYXJlIHZlcnRleCBjb2xvdXJzLiBgdXZgIHBpY2tzIGhvdyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHJlcGVhdHMgb3ZlciBpdC4gKi9cbiAgZm9yIChjb25zdCBjIG9mIEcuY29tcG9uZW50cyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBiIG9mIChjLmJveGVzID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgYiBvZiBtaXJyb3JYKChjLmJveGVzTWlycm9yZWQgPz8gW10pIGFzIG51bWJlcltdW10pKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgdCBvZiAoYy50dWJlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICAgIC8vIFNXRVBUIHR1YmVzOiBvbmUgbWl0cmVkIHJpbmcgcGVyIHBvaW50IGluc3RlYWQgb2YgYSBjeWxpbmRlciBwZXIgc2VnbWVudCAtLSB0aGUgb25seSB0aGluZyB0aGF0XG4gICAgLy8gc3Vydml2ZXMgYSB0aWdodCBiZW5kLiBTZWUgc3dlZXBUdWJlLlxuICAgIGZvciAoY29uc3QgdCBvZiAoYy5zd2VlcHMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHN3ZWVwVHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyAxMCwgdC5oZXgsIHQuY2FwICE9PSBmYWxzZSkpO1xuICAgIGZvciAoY29uc3Qgc3Qgb2YgKGMuc3RyYXBzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaChzdHJhcChzdC5wdHMsIHN0LncsIHN0LnQsIHN0LmFib3V0LCBzdC5oZXgpKTtcbiAgICBmb3IgKGNvbnN0IGN5IG9mIChjLmN5bHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgdGgwYC9gdGhMZW5gIG1ha2UgYSBQQVJUSUFMIGN5bGluZGVyIChhIGN1cnZlZCBzdGlja2VyIHBhdGNoIHdyYXBwZWQgb24gYSByb3VuZCBib2R5KSBhbmRcbiAgICAgIC8vIGBvcGVuYCBkcm9wcyB0aGUgY2FwczsgdGhlIHNpZGUgVVZzIHRoZW4gcnVuIDAuLjEgYWNyb3NzIHRoZSBhcmMgYW5kIHVwIHRoZSBoZWlnaHQsIHdoaWNoIGlzXG4gICAgICAvLyB3aGF0IGEgYmFrZWQgZ3JhcGhpYyB3YW50cy4gYHV2UmVwYCBtdWx0aXBsaWVzIHRoZW0gZm9yIGEgcmVwZWF0aW5nIHRpbGUuXG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoY3kucnQsIGN5LnJiLCBjeS5oLCBjeS5zZWcgPz8gMTIsIDEsIGN5Lm9wZW4gPz8gZmFsc2UsIGN5LnRoMCA/PyAwLCBjeS50aExlbiA/PyBNYXRoLlBJICogMik7XG4gICAgICBpZiAoY3kudXZSZXApIHsgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTsgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB1di5zZXRYWShpLCB1di5nZXRYKGkpICogY3kudXZSZXBbMF0sIHV2LmdldFkoaSkgKiBjeS51dlJlcFsxXSk7IH1cbiAgICAgIC8vIGBzaWRlVVZgIHBpbnMgdGhlIFNJREUgd2FsbCdzIFVWcyB0byBvbmUgdGV4ZWwgc28gYSBkaXNjIGNhcnJ5aW5nIGEgYmFrZWQgdG9wLWRvd24gaW1hZ2Ugc2hvd3NcbiAgICAgIC8vIHRoYXQgaW1hZ2Ugb24gaXRzIGNhcCBhbG9uZSwgd2l0aCBpdHMgcmltIGluIHdoYXRldmVyIHRoZSBwaW5uZWQgdGV4ZWwgaG9sZHMgKGEgYmFnIHRvbmUpLlxuICAgICAgaWYgKGN5LnNpZGVVVikgeyBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpLCBuID0gKChjeS5zZWcgPz8gMTIpICsgMSkgKiAyOyBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgdXYuc2V0WFkoaSwgY3kuc2lkZVVWWzBdLCBjeS5zaWRlVVZbMV0pOyB9XG4gICAgICAvLyBgc2NhbGVgIGJlZm9yZSB0aGUgcm90YXRpb25zOiBhbiBPVkFMIGJhc2luIG9yIGRpc2MsIHdoaWNoIGEgbGF0aGUgb3IgYSBjeWxpbmRlciBjYW5ub3RcbiAgICAgIC8vIHJldm9sdmUgb24gaXRzIG93bi4gTm9ybWFscyBhcmUgcmVjb21wdXRlZCBiZWNhdXNlIGEgbm9uLXVuaWZvcm0gc2NhbGUgc2tld3MgdGhlbS5cbiAgICAgIGlmIChjeS5zY2FsZSkgeyBnLnNjYWxlKGN5LnNjYWxlWzBdLCBjeS5zY2FsZVsxXSwgY3kuc2NhbGVbMl0pOyBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IH1cbiAgICAgIC8vIENVTE0gVVZzOiB1IGFyb3VuZCB0aGUgY2lyY3VtZmVyZW5jZSwgdiBhbG9uZyB0aGUgbGVuZ3RoLCBib3RoIGluIG1ldHJlcyAtLSBzbyB0aGUgbm9kZVxuICAgICAgLy8gcmluZ3Mgb2YgYSBjdWxtIHRpbGUgY3Jvc3MgYSBiYW1ib28gcG9sZSBhdCByZWFsIHNwYWNpbmcgaG93ZXZlciB0aGUgcG9sZSBpcyB0aGVuIHR1cm5lZC5cbiAgICAgIC8vIEl0IGhhcyB0byBoYXBwZW4gQkVGT1JFIHRoZSByb3RhdGlvbnMsIHdoaWxlIHRoZSBjeWxpbmRlciBzdGlsbCBydW5zIGFsb25nIGl0cyBvd24gWS5cbiAgICAgIGlmIChjLnV2ID09PSAnY3VsbScpIGN1bG1VVihnLCBjeS5ydCwgY3kuaCwgYy51dlNjYWxlID8/IDEsIGN5LnZPZmYgPz8gMCk7XG4gICAgICBpZiAoY3kucngpIGcucm90YXRlWChjeS5yeCk7IGlmIChjeS5yeSkgZy5yb3RhdGVZKGN5LnJ5KTsgaWYgKGN5LnJ6KSBnLnJvdGF0ZVooY3kucnopO1xuICAgICAgZy50cmFuc2xhdGUoY3kuYXRbMF0sIGN5LmF0WzFdLCBjeS5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBjeS5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBsIG9mIChjLmxhdGhlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIGByeWAgeWF3cyB0aGUgcmV2b2x1dGlvbjogYSA0LXNlZ21lbnQgbGF0aGUgdHVybmVkIDQ1IGRlZ3JlZXMgaXMgYSBjaGFtZmVyZWQgU1FVQVJFIHNsYWIgaW4gb25lXG4gICAgICAvLyBnZW9tZXRyeSAoYSBjb25lJ3MgcnViYmVyIGJhc2UpLCB3aGVyZSB0d28gc3RhY2tlZCBib3hlcyB3b3VsZCBjb3N0IHR3byBhbmQgYSBjb3BsYW5hciBwYWlyLlxuICAgICAgLy8gYGN5bFVWYCAoYSB0aWxlIHNpemUgaW4gbWV0cmVzKSB3cml0ZXMgYSBzZWFtbGVzcyBhcm91bmQtYnktdXAgVVYgZnJvbSB0aGUgbGF0aGUncyBvd24gc2VnbWVudFxuICAgICAgLy8gaW5kZXggLS0gYXRhbjIgd291bGQgZm9sZCBhIHdob2xlIHRpbGUgaW50byB0aGUgc2VhbSBjb2x1bW4gLS0gZm9yIHRyZWFkLCBmbHV0aW5nIGFuZCBncmFpbi5cbiAgICAgIGNvbnN0IGcgPSBsYXRoZShsLnB0cywgbC5zZWcgPz8gMTIsIDAsIGwuc2hhcnAgIT09IGZhbHNlLCBsLndlbGRTZWFtID09PSB0cnVlKTtcbiAgICAgIGlmIChsLmN5bFVWKSB7IGNvbnN0IGN1ID0gQXJyYXkuaXNBcnJheShsLmN5bFVWKSA/IGwuY3lsVVYgOiBbbC5jeWxVViwgbC5jeWxVViwgMF07IGxhdGhlVVYoZywgKGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50IC8gKChsLnNlZyA/PyAxMikgKyAxKSkgfCAwLCBsLnNlZyA/PyAxMiwgY3VbMF0sIGN1WzFdLCBjdVsyXSA/PyAwKTsgfVxuICAgICAgaWYgKGwuc2NhbGUpIHsgZy5zY2FsZShsLnNjYWxlWzBdLCBsLnNjYWxlWzFdLCBsLnNjYWxlWzJdKTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyB9XG4gICAgICAvLyBgcnlgIHlhd3MgdGhlIHJldm9sdXRpb24gKGFib3ZlKS4gYHJ4YC9gcnpgIFRJTFQgdGhlIGF4aXMgaXRzZWxmLCB3aGljaCBpcyB3aGF0IGEgV0FMTCBvclxuICAgICAgLy8gY2VpbGluZyBmaXR0aW5nIG5lZWRzOiBhIGxhdGhlIHJldm9sdmVzIGFib3V0ICtZLCBhbmQgYSBidWxraGVhZCBsYW1wJ3MgYXhpcyBpcyB0aGUgd2FsbFxuICAgICAgLy8gbm9ybWFsLCBzbyBpdHMgYmFja3BsYXRlIGFuZCBkb21lIGFyZSBhdXRob3JlZCBhYm91dCBZIGFuZCBsYWlkIGRvd24gd2l0aCByeCA9IFBJLzIuXG4gICAgICBpZiAobC5yeSkgZy5yb3RhdGVZKGwucnkpOyBpZiAobC5yeCkgZy5yb3RhdGVYKGwucngpOyBpZiAobC5yeikgZy5yb3RhdGVaKGwucnopO1xuICAgICAgZy50cmFuc2xhdGUobC5hdFswXSwgbC5hdFsxXSwgbC5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBsLmhleCkpO1xuICAgIH1cbiAgICAvLyBSSUJCRUQgRE9NRVM6IGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIGNhcnJ5aW5nIHZlcnRpY2FsIEZMVVRFUywgYXMgYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWBcbiAgICAvLyBzYW1wbGVkIHBlciBzZWN0b3IgcmF0aGVyIHRoYW4gYSBsYXRoZS4gQSBwcmVzc2VkLWdsYXNzIGxhbXAgZG9tZSBpcyBmbHV0ZWQsIGFuZCBhIHNtb290aCBvbmVcbiAgICAvLyByZWFkcyBhcyBhIHBsYXN0aWMgYnViYmxlIC0tIHRoZSByaWJzIGFyZSBtb3N0IG9mIHdoYXQgc2F5cyBgZ2xhc3NgIGF0IHByb3AgZGlzdGFuY2UuIEF1dGhvcmVkXG4gICAgLy8gYWJvdXQgK1kgbGlrZSBhIGxhdGhlLCBzbyBhIHdhbGwgZml0dGluZyBsYXlzIGl0IGRvd24gd2l0aCByeC5cbiAgICBmb3IgKGNvbnN0IGQgb2YgKGMuZG9tZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gcmliYmVkRG9tZShkLnB0cywgZC5yaWJzLCBkLmFtcCwgZC5zZWcgPz8gMjQsIGQudmFsbGV5LCBkLnNtb290aCA9PT0gdHJ1ZSk7XG4gICAgICBpZiAoZC5yeSkgZy5yb3RhdGVZKGQucnkpOyBpZiAoZC5yeCkgZy5yb3RhdGVYKGQucngpOyBpZiAoZC5yeikgZy5yb3RhdGVaKGQucnopO1xuICAgICAgaWYgKGQuYXQpIGcudHJhbnNsYXRlKGQuYXRbMF0sIGQuYXRbMV0sIGQuYXRbMl0pO1xuICAgICAgLy8gQSBmbHV0ZWQgZG9tZSB3cml0ZXMgaXRzIE9XTiBjb2xvdXIgYXR0cmlidXRlICh0aGUgY3Jlc3QtdG8tdmFsbGV5IG11bHRpcGxpZXIpLCBzbyB0aW50R2VvXG4gICAgICAvLyB3b3VsZCBvdmVyd3JpdGUgdGhlIGZsdXRlIHN0cmlwaW5nIHdpdGggb25lIGZsYXQgaGV4IC0tIHRoZSBzYW1lIHRyYXAgYHNoZWV0YCdzIGhleFVuZGVyXG4gICAgICAvLyBmZWxsIGludG8uIE11bHRpcGx5IHRoZSB0b25lIElOVE8gdGhlIG11bHRpcGxpZXIgaW5zdGVhZCwgc28gdGhlIGRvbWUgY2FycmllcyBib3RoLlxuICAgICAgaWYgKGQudmFsbGV5ICYmIGQuaGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgY29sID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgICBjb25zdCB0ID0gbmV3IFRIUkVFLkNvbG9yKGQuaGV4KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2wuY291bnQ7IGkrKykgY29sLnNldFhZWihpLCBjb2wuZ2V0WChpKSAqIHQuciwgY29sLmdldFkoaSkgKiB0LmcsIGNvbC5nZXRaKGkpICogdC5iKTtcbiAgICAgICAgZ3MucHVzaChnKTtcbiAgICAgIH0gZWxzZSBncy5wdXNoKGQudmFsbGV5ID8gZyA6IHRpbnRHZW8oZywgZC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBwIG9mIChjLnBsYW5lcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgUEFORTogYSBzaW5nbGUgcXVhZCBpbiB0aGUgWFkgcGxhbmUgYXQgZGVwdGggeiwgZG91YmxlLXNpZGVkIGJ5IGl0cyBtYXRlcmlhbC4gSXRzIFVWcyBydW5cbiAgICAgIC8vIDAuLjEgYWNyb3NzIHRoZSBwYW5lIHNvIGFuIGFscGhhLWN1dCB0aWxlIHJlcGVhdHMgYHJlcGAgdGltZXMgYWNyb3NzIGFuZCBkb3duLlxuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHAudywgcC5oLCAxLCAxKTtcbiAgICAgIGcudHJhbnNsYXRlKHAuYXRbMF0sIHAuYXRbMV0sIHAuYXRbMl0pO1xuICAgICAgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIChwLnJlcD8uWzBdID8/IDEpLCB1di5nZXRZKGkpICogKHAucmVwPy5bMV0gPz8gMSkpO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIHAuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgZSBvZiAoYy5leHRydWRlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIEEgcHJvZmlsZSBpbiB0aGUgWFkgcGxhbmUgZXh0cnVkZWQgYWxvbmcgWiBiZXR3ZWVuIHowIGFuZCB6MSAtLSBhIHNsYWIgd2l0aCBhIG1vdWxkZWQgZWRnZSxcbiAgICAgIC8vIGEgcHlyYW1pZCBjYXAgYXMgYSBzdGVwcGVkIHByb2ZpbGUsIGEgc3BlYXIgZmluaWFsLlxuICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgIHNoYXBlLm1vdmVUbyhlLnBvbHlbMF1bMF0sIGUucG9seVswXVsxXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGUucG9seS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKGUucG9seVtpXVswXSwgZS5wb2x5W2ldWzFdKTtcbiAgICAgIHNoYXBlLmNsb3NlUGF0aCgpO1xuICAgICAgZm9yIChjb25zdCBoIG9mIChlLmhvbGVzID8/IFtdKSBhcyBudW1iZXJbXVtdW10pIHtcbiAgICAgICAgY29uc3QgaHAgPSBuZXcgVEhSRUUuUGF0aCgpOyBocC5tb3ZlVG8oaFswXVswXSwgaFswXVsxXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaC5sZW5ndGg7IGkrKykgaHAubGluZVRvKGhbaV1bMF0sIGhbaV1bMV0pO1xuICAgICAgICBocC5jbG9zZVBhdGgoKTsgc2hhcGUuaG9sZXMucHVzaChocCk7XG4gICAgICB9XG4gICAgICBjb25zdCBnID0gZXh0cnVkZUFsb25nWihzaGFwZSwgZS56MCwgZS56MSk7XG4gICAgICBpZiAoZS5yeCkgZy5yb3RhdGVYKGUucngpO1xuICAgICAgaWYgKGUucnkpIGcucm90YXRlWShlLnJ5KTtcbiAgICAgIGlmIChlLnJ6KSBnLnJvdGF0ZVooZS5yeik7XG4gICAgICBpZiAoZS5hdCkgZy50cmFuc2xhdGUoZS5hdFswXSwgZS5hdFsxXSwgZS5hdFsyXSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgZS5oZXgpKTtcbiAgICB9XG4gICAgLy8gRUxMSVBTT0lEUzogW2hleCwgY3gsIGN5LCBjeiwgcngsIHJ5LCByeiwgcm90WD8sIHJvdFk/LCByb3RaP10gLS0gYSB1bml0IHNwaGVyZSBzY2FsZWQgcGVyIGF4aXNcbiAgICAvLyBhbmQgdHVybmVkIGFib3V0IGl0cyBvd24gY2VudHJlLiBBIHNrdWxsIGRvbWUsIGEgcGF3LCBhIG5vc2UgcGFkOiB0aGUgcm91bmRlZCBzb2xpZHMgb2YgYW5cbiAgICAvLyBhbmltYWwgdGhhdCBhIGJveCBvciBhIHN0YXRpb24gdHViZSBjYW5ub3QgZ2l2ZSwgc2hhcmluZyBzbW9vdGggbm9ybWFscyB0aHJvdWdoIHRoZSBtZXJnZS5cbiAgICBmb3IgKGNvbnN0IGUgb2YgKGMuZWxsaXBzb2lkcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkge1xuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLCBlWzEwXSA/PyAxNiwgZVsxMV0gPz8gMTIpO1xuICAgICAgZy5zY2FsZShlWzRdLCBlWzVdLCBlWzZdKTtcbiAgICAgIGlmIChlWzddKSBnLnJvdGF0ZVgoZVs3XSk7IGlmIChlWzhdKSBnLnJvdGF0ZVkoZVs4XSk7IGlmIChlWzldKSBnLnJvdGF0ZVooZVs5XSk7XG4gICAgICBnLnRyYW5zbGF0ZShlWzFdLCBlWzJdLCBlWzNdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBlWzBdKSk7XG4gICAgfVxuICAgIC8vIEZSVVNUQTogW2hleCwgY3gsIHlCb3R0b20sIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0gLS0gYSBib3ggd2hvc2UgZm9vdHByaW50IGNoYW5nZXMgZnJvbSAodzAsIGQwKSBhdFxuICAgIC8vIHRoZSBib3R0b20gdG8gKHcxLCBkMSkgYXQgdGhlIHRvcDogdGhlIHRhcGVyZWQgYm9keSBvZiBhIHdoZWVsaWUgYmluIG9yIGEgc3RlZWwgY29udGFpbmVyLlxuICAgIGZvciAoY29uc3QgZiBvZiAoYy5mcnVzdGEgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhmcnVzdHVtKGYuc2xpY2UoMSkpLCBmWzBdKSk7XG4gICAgZm9yIChjb25zdCBzIG9mIChjLnNwaWtlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godGludEdlbyhzcGlrZShzLmF0LCBzLncsIHMuaCksIHMuaGV4KSk7XG4gICAgLy8gU1dFUFQgUFJPRklMRVM6IGEgY2xvc2VkICh4LCB5KSBzZWN0aW9uIGFsb25nIGEgc3RyYWlnaHQsIHNoZWFyZWQgb3IgYXJjZWQgcGF0aCAtLSBhIGRlY2tcbiAgICAvLyBtb2R1bGUsIGEgcGFyYXBldCwgYSBnaXJkZXIuIENhcnJpZXMgaXRzIE9XTiBtZXRyZSBVVnMgKHUgYWxvbmcsIHYgcm91bmQgdGhlIHByb2ZpbGUpLCBzbyBhXG4gICAgLy8gY29tcG9uZW50IGhvbGRpbmcgb25lIG11c3Qgbm90IHNldCBgdXZgLCBvciB0aGUgc3dlZXAncyBqb2ludCBsaW5lcyBsYW5kIGFueXdoZXJlLlxuICAgIGZvciAoY29uc3Qgc3Agb2YgKGMucHJvZmlsZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gc3dlZXBQcm9maWxlKHNwKTtcbiAgICAgIGlmIChzcC5yeCkgZy5yb3RhdGVYKHNwLnJ4KTsgaWYgKHNwLnJ5KSBnLnJvdGF0ZVkoc3AucnkpOyBpZiAoc3AucnopIGcucm90YXRlWihzcC5yeik7XG4gICAgICBpZiAoc3AuYXQpIGcudHJhbnNsYXRlKHNwLmF0WzBdLCBzcC5hdFsxXSwgc3AuYXRbMl0pO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIHNwLmhleCkpO1xuICAgIH1cbiAgICAvLyBEUkFQRUQgU0hFRVRTOiBhIHRhcnAgb3IgYXduaW5nIGFzIGEgaGVpZ2h0IGdyaWQgd2l0aCB0aGlja25lc3MgLS0gYSByaWRnZSwgdGhlIHNhZyBiZXR3ZWVuXG4gICAgLy8gaXRzIHBvbGVzIGFuZCB0aGUgZHJvb3Agb2YgaXRzIGZyZWUgZWRnZXMgYXJlIG51bWJlcnMgaW4gdGhlIGdyaWQsIGNvbXB1dGVkIGF0IGVtaXQgdGltZS5cbiAgICBmb3IgKGNvbnN0IHMgb2YgKGMuc2hlZXRzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBzaGVldCBnaXZlbiBgaGV4VW5kZXJgIGhhcyBhbHJlYWR5IHdyaXR0ZW4gaXRzIE9XTiBjb2xvdXIgYXR0cmlidXRlLCBvbmUgdG9uZSBmb3IgdGhlIHRvcFxuICAgICAgLy8gZ3JpZCBhbmQgYW5vdGhlciBmb3IgdGhlIHVuZGVyc2lkZSBhbmQgcmltLiB0aW50R2VvIHdvdWxkIG92ZXJ3cml0ZSB0aGUgbG90IHdpdGggYSBzaW5nbGVcbiAgICAgIC8vIGhleCAtLSB3aGljaCBpcyB3aGF0IHNoaXBwZWQgdGhlIHRhcnBhdWxpbiBiYXkncyBibHVlLW92ZXItb3JhbmdlIHRhcnAgYXMgYSB3aGl0ZSBzYWlsLlxuICAgICAgY29uc3QgZyA9IHNoZWV0KHMpO1xuICAgICAgZ3MucHVzaChzLmhleFVuZGVyICE9PSB1bmRlZmluZWQgPyBnIDogdGludEdlbyhnLCBzLmhleCkpO1xuICAgIH1cbiAgICAvLyBPUkdBTklDIHN0YXRpb24gdHViZXM6IFt6LCBjeCwgY3ksIHJ4LCByeV0gc3RhdGlvbnMgc3dlcHQgYWxvbmcgWiAtLSB0aGUgb25seSBzb2Z0IGZvcm0gaW4gdGhlXG4gICAgLy8ga2l0LCBhIGx5aW5nIGFuaW1hbC4gTGl0IHNtb290aCBieSB0aGUgaGVscGVyJ3Mgc2hhcmVkIHJpbmcgdmVydGljZXMuXG4gICAgZm9yIChjb25zdCB0IG9mIChjLnR1YmVzQWxvbmcgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gdHViZUFsb25nKHQuc3RhdGlvbnMsIHQuc2VnID8/IDEyKTtcbiAgICAgIGlmICh0LnJ5KSBnLnJvdGF0ZVkodC5yeSk7IGlmICh0LmF0KSBnLnRyYW5zbGF0ZSh0LmF0WzBdLCB0LmF0WzFdLCB0LmF0WzJdKTtcbiAgICAgIC8vIGBoZXhlc2AgLS0gb25lIGNvbG91ciBwZXIgU1RBVElPTiwgYmxlbmRlZCBhbG9uZyB0aGUgc3dlZXAgLS0gaXMgaG93IGEgY29hdCBwYXR0ZXJuIHRoYXQgcnVuc1xuICAgICAgLy8gYWxvbmcgdGhlIGJvZHkgKGEgd2hpdGUgY29sbGFyIGJldHdlZW4gYSB0YW4gc2t1bGwgYW5kIGEgdGFuIHNhZGRsZSkgaXMgY2FycmllZCBvbiBhIHNpbmdsZVxuICAgICAgLy8gbWVyZ2VkIG1lc2guIFRoZSBjb21wb25lbnQncyBheGlzIHRpbnQgdGhlbiBtdWx0aXBsaWVzIHRoZSBkb3JzYWwtdG8tdmVudHJhbCBmYWRlIGludG8gaXQsXG4gICAgICAvLyBhbmQgbmVpdGhlciBjb3N0cyBhIG1hdGVyaWFsLiBBIHNpbmdsZSBgaGV4YCBzdGF5cyB0aGUgZGVmYXVsdC5cbiAgICAgIGlmICh0LmhleGVzKSB7XG4gICAgICAgIC8vIEEgc3RhdGlvbiBlbnRyeSBtYXkgYmUgb25lIGhleCwgb3IgYSBQQUlSIFtkb3JzYWwsIHZlbnRyYWxdIGJsZW5kZWQgYXJvdW5kIHRoZSByaW5nIGJ5IHRoZVxuICAgICAgICAvLyBzYW1lIHNpbih0aGV0YSkgdHViZUFsb25nIHN3ZXB0IHRoZSBzZWN0aW9uIHdpdGggLS0gc28gdGhlIGNvYXQgcnVucyBib3RoIEFMT05HIHRoZSBib2R5XG4gICAgICAgIC8vIChhIHdoaXRlIGNvbGxhciBiZXR3ZWVuIGEgdGFuIHNrdWxsIGFuZCBhIHRhbiBzYWRkbGUpIGFuZCBBQ1JPU1MgaXQgKHRoZSBzYWRkbGUgZ2l2aW5nIHdheVxuICAgICAgICAvLyB0byBhIGR1c3R5IGZsYW5rIGFuZCBhIHBhbGUgYmVsbHkpLiBBbiBheGlzIHRpbnQgY2Fubm90IGRvIHRoZSBzZWNvbmQgaGFsZjogb24gYW4gYW5pbWFsXG4gICAgICAgIC8vIGx5aW5nIG9uIGl0cyBzaWRlIHRoZSBkb3JzYWwtdG8tdmVudHJhbCBheGlzIGlzIGhvcml6b250YWwsIHNvIGEgYmFuZCBpbiB4IGN1dHMgdGhlIGNyb3duXG4gICAgICAgIC8vIG9mIHRoZSBzd2VlcCBpbiBoYWxmLCBhbmQgYSBNVUxUSVBMWSBjYW4gb25seSBldmVyIGRhcmtlbiAtLSBpdCBjYW5ub3QgdGFrZSBhIHdhcm0gdGFuIHRvXG4gICAgICAgIC8vIGEgY29vbGVyIGdyZXkuIFR3byBjb2xvdXJzIHBlciBzdGF0aW9uLCBvbmUgYXR0cmlidXRlLCBzdGlsbCBvbmUgZHJhdyBjYWxsLlxuICAgICAgICBjb25zdCBzZWcgPSB0LnNlZyA/PyAxMiwgbiA9IHQuc3RhdGlvbnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHNlZyAqIG4gKiAzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBlID0gdC5oZXhlc1tNYXRoLm1pbih0LmhleGVzLmxlbmd0aCAtIDEsIGkpXTtcbiAgICAgICAgICBjb25zdCBkID0gbmV3IFRIUkVFLkNvbG9yKEFycmF5LmlzQXJyYXkoZSkgPyBlWzBdIDogZSksIHYgPSBuZXcgVEhSRUUuQ29sb3IoQXJyYXkuaXNBcnJheShlKSA/IGVbMV0gOiBlKTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBmID0gKE1hdGguc2luKGogKiBNYXRoLlBJICogMiAvIHNlZykgKyAxKSAvIDI7XG4gICAgICAgICAgICBjb25zdCBrID0gKGkgKiBzZWcgKyBqKSAqIDM7XG4gICAgICAgICAgICBjb2xba10gPSBkLnIgKyAodi5yIC0gZC5yKSAqIGY7IGNvbFtrICsgMV0gPSBkLmcgKyAodi5nIC0gZC5nKSAqIGY7IGNvbFtrICsgMl0gPSBkLmIgKyAodi5iIC0gZC5iKSAqIGY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gICAgICAgIGdzLnB1c2goZyk7XG4gICAgICB9IGVsc2UgZ3MucHVzaCh0aW50R2VvKGcsIHQuaGV4ID8/IDB4ZmZmZmZmKSk7XG4gICAgfVxuICAgIGxldCBnID0gbWVyZ2VHZW9zKGdzKTtcbiAgICAvLyBhIHBlci1jb21wb25lbnQgc2NhbGUsIGFwcGxpZWQgdG8gdGhlIG1lcmdlIGJlZm9yZSB0aW50aW5nOiBob3cgYSBseWluZyBhbmltYWwgYXV0aG9yZWQgYXRcbiAgICAvLyBpdHMgb3duIHByb3BvcnRpb25zIGlzIGZpdHRlZCBpbnRvIHRoZSBkZWNsYXJlZCBlbnZlbG9wZSB3aXRob3V0IHJlLXJlYWRpbmcgZXZlcnkgc3RhdGlvblxuICAgIGlmIChjLnNjYWxlKSBnLnNjYWxlKGMuc2NhbGVbMF0sIGMuc2NhbGVbMV0sIGMuc2NhbGVbMl0pO1xuICAgIC8vIEFYSVMgVElOVDogYSBwZXItdmVydGV4IGJsZW5kIGZyb20gYzAgYXQgYGZyb21gIHRvIGMxIGF0IGB0b2AgYWxvbmcgb25lIGF4aXMsIG92ZXIgdGhlIHdob2xlXG4gICAgLy8gbWVyZ2UgLS0gYSB0YW4gYmFjayBmYWRpbmcgdG8gYSB3aGl0ZSBiZWxseSBjb3N0cyBhbiBhdHRyaWJ1dGUsIG5vdCBhIHNlY29uZCBtYXRlcmlhbC4gQXBwbGllZFxuICAgIC8vIGluIExJTkVBUiBzcGFjZSB0aHJvdWdoIFRIUkVFLkNvbG9yLiBga2VlcGAgbXVsdGlwbGllcyB0aGUgYmxlbmQgaW50byB0aGUgZXhpc3RpbmcgdGludCBpbnN0ZWFkXG4gICAgLy8gb2YgcmVwbGFjaW5nIGl0LCBzbyBhIGRhcmsgbm9zZSBzdGF5cyBkYXJrLlxuICAgIGlmIChjLnRpbnQpIHtcbiAgICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuQ29sb3IoYy50aW50LmMwKSwgYiA9IG5ldyBUSFJFRS5Db2xvcihjLnRpbnQuYzEpO1xuICAgICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpOyBsZXQgY29sID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlIHwgbnVsbDtcbiAgICAgIGlmICghY29sKSB7IGNvbCA9IG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMykuZmlsbCgxKSwgMyk7IGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIGNvbCk7IH1cbiAgICAgIGNvbnN0IGF4ID0gYy50aW50LmF4aXMgPT09ICd4JyA/IDAgOiBjLnRpbnQuYXhpcyA9PT0gJ3knID8gMSA6IDI7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCB2ID0gYXggPT09IDAgPyBwLmdldFgoaSkgOiBheCA9PT0gMSA/IHAuZ2V0WShpKSA6IHAuZ2V0WihpKTtcbiAgICAgICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh2IC0gYy50aW50LmZyb20pIC8gKGMudGludC50byAtIGMudGludC5mcm9tKSkpO1xuICAgICAgICBjb25zdCByID0gYS5yICsgKGIuciAtIGEucikgKiB0LCBnZyA9IGEuZyArIChiLmcgLSBhLmcpICogdCwgYmIgPSBhLmIgKyAoYi5iIC0gYS5iKSAqIHQ7XG4gICAgICAgIGlmIChjLnRpbnQua2VlcCkgY29sLnNldFhZWihpLCBjb2wuZ2V0WChpKSAqIHIsIGNvbC5nZXRZKGkpICogZ2csIGNvbC5nZXRaKGkpICogYmIpOyBlbHNlIGNvbC5zZXRYWVooaSwgciwgZ2csIGJiKTtcbiAgICAgIH1cbiAgICAgIGNvbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIC8vIEZBQ0UgVElOVDogYSBtdWx0aXBsaWVyIGJ5IHRoZSB2ZXJ0ZXggbm9ybWFsJ3MgcGl0Y2ggLS0gYGRvd25gIGZvciBmYWNlcyBsb29raW5nIGJlbG93IC0wLjM1LFxuICAgIC8vIGB1cGAgYWJvdmUgKzAuMzUsIGBzaWRlYCBiZXR3ZWVuLiBUaGUgaGFybmVzcyBsaWdodHMgZnJvbSBhYm92ZSBhbmQgYSBib3gncyB1bmRlcnNpZGUgcmVuZGVyc1xuICAgIC8vIG5lYXIgdGhlIGJhY2tkcm9wJ3MgbHVtYSB3aGF0ZXZlciBpdHMgYWxiZWRvOyB0aGUgdHVybnRhYmxlIGdhdGUgdGhlbiByZWFkcyBhIGxlYW5pbmcgcGllciBhcm0nc1xuICAgIC8vIHNvZmZpdCBhcyBhIEhPTEUuIFZlcnRleCBjb2xvdXJzIGFyZSBub3QgY2xhbXBlZCBpbiB0aGUgc2hhZGVyLCBzbyBgZG93bmAgbWF5IGV4Y2VlZCAxLlxuICAgIGlmIChjLmZhY2VUaW50KSB7XG4gICAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgICAgIGxldCBjb2wgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUgfCBudWxsO1xuICAgICAgaWYgKCFjb2wpIHsgY29sID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKS5maWxsKDEpLCAzKTsgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgY29sKTsgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgbnkgPSBucm0uZ2V0WShpKTtcbiAgICAgICAgY29uc3QgayA9IG55IDwgLTAuMzUgPyAoYy5mYWNlVGludC5kb3duID8/IDEpIDogbnkgPiAwLjM1ID8gKGMuZmFjZVRpbnQudXAgPz8gMSkgOiAoYy5mYWNlVGludC5zaWRlID8/IDEpO1xuICAgICAgICBpZiAoayAhPT0gMSkgY29sLnNldFhZWihpLCBjb2wuZ2V0WChpKSAqIGssIGNvbC5nZXRZKGkpICogaywgY29sLmdldFooaSkgKiBrKTtcbiAgICAgIH1cbiAgICAgIGNvbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjLnV2ID09PSAnd29ybGQnKSBnID0gd29ybGRVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdoZWlnaHQnKSBnID0gaGVpZ2h0VVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIC8vICdwbGFuJzogb25lIHBpY3R1cmUgb2YgdGhlIHRvcCwgY2VudHJlZCwgYXQgdXZTY2FsZSA9IHRoZSBkaWFtZXRlciAoYSByaWJiZWQgdGFibGUgdG9wKS5cbiAgICBpZiAoYy51diA9PT0gJ3BsYW4nKSBnID0gcGxhblVWKGcsIGMudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoYy51diA9PT0gJ3BhbmVsJykgZyA9IHBhbmVsVVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAncGFuZWwtcm90JykgZyA9IHBhbmVsVVYoZywgYy51dlNjYWxlID8/IDEsIHRydWUpO1xuICAgIC8vICdmcm9udCc6IHBsYW5hciBVVnMgaW50byBhIGJha2VkIGZyb250LWVsZXZhdGlvbiBhdGxhcyBvbiArWiBmYWNlcywgb25lIHBpbm5lZCB0ZXhlbCBlbHNld2hlcmUuXG4gICAgaWYgKGMudXYgPT09ICdmcm9udCcpIGcgPSBmcm9udEF0bGFzVVYoZywgYy5hdGxhcyk7XG4gICAgLy8gJ2N1bG0nIGlzIGRlbGliZXJhdGVseSBhYnNlbnQgaGVyZTogaXQgaXMgd3JpdHRlbiBwZXIgY3lsaW5kZXIgYWJvdmUsIGJlZm9yZSB0aGUgcm90YXRpb25zLFxuICAgIC8vIGFuZCBhIHdob2xlLW1lcmdlIHBhc3Mgd291bGQgZmxhdHRlbiBpdCBiYWNrIHRvIHRoZSBjeWxpbmRlcidzIGRlZmF1bHQgMC4uMSB3cmFwLlxuICAgIGFkZChjLmlkLCBjLm5hbWUsIGcsIGMubWF0ZXJpYWwpO1xuICAgIGlmIChjLmNvbGxpZGVyKSBjb2xsaWRlcnNbYy5pZF0gPSBjLmNvbGxpZGVyO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByZXBldGl0aW9uIHN5c3RlbXNcbiAgICogUGlja2V0cywgc2xhdHMsIGxhdHRpY2Ugc3RyaXBzOiBvbmUgZ2VvbWV0cnksIG9uZSBJbnN0YW5jZWRNZXNoLCBvbmUgZHJhdyBjYWxsLiAqL1xuICBmb3IgKGNvbnN0IHIgb2YgKEcuaW5zdGFuY2VkID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBiIG9mIChyLmJveGVzID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgcyBvZiAoci5zcGlrZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHRpbnRHZW8oc3Bpa2Uocy5hdCwgcy53LCBzLmgpLCBzLmhleCkpO1xuICAgIGZvciAoY29uc3QgZiBvZiAoci5mcnVzdGEgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhmcnVzdHVtKGYuc2xpY2UoMSkpLCBmWzBdKSk7XG4gICAgZm9yIChjb25zdCBjeSBvZiAoci5jeWxzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gYHRoMGAvYHRoTGVuYCBjdXQgYSBQQVJUSUFMIGN5bGluZGVyIHRoZSBzYW1lIHdheSB0aGUgY29tcG9uZW50IGJyYW5jaCBkb2VzOiBhIHNwbGl0IGJhbWJvb1xuICAgICAgLy8gY3VsbSBpcyBhIGhhbGYgcGlwZSwgdGhMZW4gPSBQSSwgYG9wZW5gIHNvIGl0IGlzIGEgc2hlbGwgd2l0aCBubyBkaXNjcyBhdCBpdHMgZW5kcy4gVGhlXG4gICAgICAvLyBtYXRlcmlhbCBjYXJyaWVzIGRvdWJsZVNpZGVkLCBiZWNhdXNlIGEgaG9sbG93LXVwIGN1bG0gaXMgc2VlbiBmcm9tIHRoZSBpbnNpZGUuXG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoY3kucnQsIGN5LnJiLCBjeS5oLCBjeS5zZWcgPz8gMTIsIDEsIGN5Lm9wZW4gPz8gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3kudGgwID8/IDAsIGN5LnRoTGVuID8/IE1hdGguUEkgKiAyKTtcbiAgICAgIGlmIChyLnV2ID09PSAnY3VsbScpIGN1bG1VVihnLCBjeS5ydCwgY3kuaCwgci51dlNjYWxlID8/IDEsIGN5LnZPZmYgPz8gMCk7XG4gICAgICBpZiAoY3kucngpIGcucm90YXRlWChjeS5yeCk7IGlmIChjeS5yeSkgZy5yb3RhdGVZKGN5LnJ5KTsgaWYgKGN5LnJ6KSBnLnJvdGF0ZVooY3kucnopO1xuICAgICAgZy50cmFuc2xhdGUoY3kuYXRbMF0sIGN5LmF0WzFdLCBjeS5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBjeS5oZXgpKTtcbiAgICB9XG4gICAgLy8gQW4gT1BFTiB3aGVlbCAtLSB0eXJlIGFuZCByaW0gYXMgY2xvc2VkIHJpbmcgbGF0aGVzLCBhIGh1YiwgYW5kIHdpcmUgc3Bva2VzIC0tIGZvciBhIGJpY3ljbGVcbiAgICAvLyB3aG9zZSB3aGVlbHMgcmVhZCBhcyBiaWN5Y2xlIHdoZWVscyByYXRoZXIgdGhhbiBkaXNjcy4gTGF0aGVzIHJldm9sdmUgYWJvdXQgWSAoYHJ4YCBsYXlzIHRoZVxuICAgIC8vIGF4bGUgd2hlcmUgdGhlIHBsYWNlbWVudCB3YW50cyBpdCk7IGBzcG9rZXNgIHJhZGlhdGUgYWJvdXQgWCBieSB0aGUgaGVscGVyJ3MgY29udmVudGlvbiwgc28gYW5cbiAgICAvLyBheGxlIG9uIFogdGFrZXMgYHJ5OiBQSS8yYC5cbiAgICBmb3IgKGNvbnN0IGwgb2YgKHIubGF0aGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IGxhdGhlKGwucHRzLCBsLnNlZyA/PyAxMiwgMCwgbC5zaGFycCAhPT0gZmFsc2UsIGwud2VsZFNlYW0gPT09IHRydWUpO1xuICAgICAgaWYgKGwucngpIGcucm90YXRlWChsLnJ4KTsgaWYgKGwucnkpIGcucm90YXRlWShsLnJ5KTsgaWYgKGwucnopIGcucm90YXRlWihsLnJ6KTtcbiAgICAgIGlmIChsLmF0KSBnLnRyYW5zbGF0ZShsLmF0WzBdLCBsLmF0WzFdLCBsLmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGwuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcyBvZiAoci5zcG9rZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gc3Bva2VzKHMuckh1Yiwgcy5yUmltLCBzLmhhbGZXLCBzLm4sIHMuaGV4LCBzLnQgPz8gMC4wMDYsIHMucHJpc20gPz8gZmFsc2UpO1xuICAgICAgaWYgKHMucngpIGcucm90YXRlWChzLnJ4KTsgaWYgKHMucnkpIGcucm90YXRlWShzLnJ5KTsgaWYgKHMucnopIGcucm90YXRlWihzLnJ6KTtcbiAgICAgIGlmIChzLmF0KSBnLnRyYW5zbGF0ZShzLmF0WzBdLCBzLmF0WzFdLCBzLmF0WzJdKTsgZ3MucHVzaChnKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB0IG9mIChyLnR1YmVzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0dWJlKHQucHRzLCB0LnIsIHQuc2VnID8/IDgsIHQuaGV4KSk7XG4gICAgZm9yIChjb25zdCBzcCBvZiAoci5wcm9maWxlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSBzd2VlcFByb2ZpbGUoc3ApO1xuICAgICAgaWYgKHNwLnJ4KSBnLnJvdGF0ZVgoc3AucngpOyBpZiAoc3AucnkpIGcucm90YXRlWShzcC5yeSk7IGlmIChzcC5yeikgZy5yb3RhdGVaKHNwLnJ6KTtcbiAgICAgIGlmIChzcC5hdCkgZy50cmFuc2xhdGUoc3AuYXRbMF0sIHNwLmF0WzFdLCBzcC5hdFsyXSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgc3AuaGV4KSk7XG4gICAgfVxuICAgIC8vIEVYVFJVREVTIG9uIGFuIGluc3RhbmNlZCBzZXQsIHRoZSBzYW1lIHByb2ZpbGUtaW4tWFktYWxvbmctWiBmb3JtIGFzIGEgY29tcG9uZW50J3M6IGEgY2hhbWZlcmVkXG4gICAgLy8gbGlkIHBsYXRlIHRoYXQgdHdvIGluc3RhbmNlcyBzaGFyZSAodGhlIGR1bXBzdGVyJ3MgbGlkcywgdGhlIHJpZ2h0IG9uZSB5YXdlZCBhIGhhbGYgdHVybikuXG4gICAgZm9yIChjb25zdCBlIG9mIChyLmV4dHJ1ZGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgIHNoYXBlLm1vdmVUbyhlLnBvbHlbMF1bMF0sIGUucG9seVswXVsxXSk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGUucG9seS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKGUucG9seVtpXVswXSwgZS5wb2x5W2ldWzFdKTtcbiAgICAgIHNoYXBlLmNsb3NlUGF0aCgpO1xuICAgICAgY29uc3QgZyA9IGV4dHJ1ZGVBbG9uZ1ooc2hhcGUsIGUuejAsIGUuejEpO1xuICAgICAgaWYgKGUucngpIGcucm90YXRlWChlLnJ4KTsgaWYgKGUucnkpIGcucm90YXRlWShlLnJ5KTsgaWYgKGUucnopIGcucm90YXRlWihlLnJ6KTtcbiAgICAgIGlmIChlLmF0KSBnLnRyYW5zbGF0ZShlLmF0WzBdLCBlLmF0WzFdLCBlLmF0WzJdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBlLmhleCkpO1xuICAgIH1cbiAgICBsZXQgZyA9IG1lcmdlR2Vvcyhncyk7XG4gICAgaWYgKHIudXYgPT09ICd3b3JsZCcpIGcgPSB3b3JsZFVWKGcsIHIudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoci51diA9PT0gJ2hlaWdodCcpIGcgPSBoZWlnaHRVVihnLCByLnV2U2NhbGUgPz8gMSk7XG4gICAgLy8gJ2N1bG0nIGFnYWluIHdyaXR0ZW4gcGVyIGN5bGluZGVyIGFib3ZlLCBiZWZvcmUgdGhlIHJvdGF0aW9ucy5cbiAgICBjb25zdCBtYXRzOiBUSFJFRS5NYXRyaXg0W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHAgb2Ygci5wbGFjZW1lbnRzIGFzIG51bWJlcltdW10pIHtcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKHBbMF0sIHBbMV0sIHBbMl0pLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21FdWxlcihuZXcgVEhSRUUuRXVsZXIocFszXSA/PyAwLCBwWzRdID8/IDAsIHBbNV0gPz8gMCkpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSkpO1xuICAgIH1cbiAgICBhZGRJbnN0KHIuaWQsIHIubmFtZSwgZywgci5tYXRlcmlhbCwgbWF0cywgci5jb2xvcnMpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXNlcyAqL1xuICBmb3IgKGNvbnN0IHQgb2YgKENPTkZJRy50aWxlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBtYXQgPSBtYXRlcmlhbHNbdC5tYXRlcmlhbF07XG4gICAgaWYgKCFtYXQpIGNvbnRpbnVlO1xuICAgIC8vIEEgQkFLRUQgZ3JhcGhpYyAoYSBwcmludGVkIHNpZ24gZmFjZSk6IG9uZSBXZWJQIGRhdGEgVVJJIGNvbXBvc2VkIG9mZmxpbmUgZnJvbSB0aGUgcGxhdGUncyBvd25cbiAgICAvLyBwcmludGVkIHJlZ2lvbiBhbmQgdmVjdG9yIG1hcmtzLCBsb2FkZWQgdGhyb3VnaCBUZXh0dXJlTG9hZGVyLiBBc3NpZ25lZCBzeW5jaHJvbm91c2x5IHNvIHRoZVxuICAgIC8vIGhhcm5lc3Mgd2FpdHMgb24gdGhlIGRlY29kZS4gSXQgYmVhdHMgZmlsbFRleHQsIHdoaWNoIGRyYXdzIGEgZGlmZmVyZW50IHdvcmRtYXJrIHBlciBtYWNoaW5lLlxuICAgIGlmICh0LmtpbmQgPT09ICdiYWtlZCcpIHtcbiAgICAgIC8vIFVuZGVyIHBsYWluIE5vZGUgKHRoZSBjb3BsYW5hciBjaGVjaywgdGhlIHJ1bnRpbWUgcHJvYmUpIHRoZXJlIGlzIG5vIGRvY3VtZW50IGZvciBJbWFnZUxvYWRlcjpcbiAgICAgIC8vIGtlZXAgdGhlIHdoaXRlIGZhbGxiYWNrIHJhdGhlciB0aGFuIHRocm93LCBleGFjdGx5IGFzIHRoZSByZXRhaWwgZ2xhemluZyBkb2VzLlxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgYmFrZWQgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQodC51cmkpO1xuICAgICAgY29uc3Qgc3JnYiA9IChUSFJFRSBhcyBhbnkpLlNSR0JDb2xvclNwYWNlO1xuICAgICAgaWYgKHNyZ2IpIGJha2VkLmNvbG9yU3BhY2UgPSBzcmdiO1xuICAgICAgYmFrZWQuYW5pc290cm9weSA9IDQ7XG4gICAgICBtYXQubWFwID0gYmFrZWQ7IG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbGV0IHRleDogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwgPSBudWxsO1xuICAgIGlmICh0LmtpbmQgPT09ICdtdWQnKSB0ZXggPSBtdWRUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuYmFzZSwgdC5zZWVkID8/IDEsIHQuY292ZXJhZ2UgPz8gMC4zMyk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2R1c3QnKSB0ZXggPSBkdXN0VGlsZSh0LnNpemUgPz8gNTEyLCB0LmR1c3QsIHQuc2VlZCA/PyAxLCB0LmNvdmVyYWdlID8/IDAuMzApO1xuICAgIGlmICh0LmtpbmQgPT09ICdwbGFuaycpIHRleCA9IHBsYW5rVGlsZSh0LnNpemUgPz8gNTEyLCB0LmJvYXJkcyA/PyA2LCB0LnNlZWQgPz8gNSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3J1c3QnKSB0ZXggPSBydXN0VGlsZSh0LnNpemUgPz8gNTEyLCB0LnJhdGlvLCB0LnNlZWQgPz8gNywgdC5kZW5zaXR5ID8/IDkwKTtcbiAgICBpZiAodC5raW5kID09PSAncGFpbnQnKSB0ZXggPSBwYWludFRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDE3LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY29ycnVnYXRpb24nKSB0ZXggPSBjb3JydWdhdGlvblRpbGUodC5zaXplID8/IDUxMiwgdC5waXRjaCA/PyAxMiwgdC5sb3cgPz8gMC43LCB0LnNlZWQgPz8gMyk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2dyaW1lJykgdGV4ID0gZ3JpbWVUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAxMSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3ppbmMnKSB0ZXggPSB6aW5jVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTksIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdmdXInKSB0ZXggPSBmdXJUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAxMywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2NoYWlubGluaycpIHRleCA9IGNoYWlubGlua1RpbGUodC5zaXplID8/IDI1NiwgdC53aXJlID8/IDAuMDksIHQuc2VlZCA/PyA0KTtcbiAgICBpZiAodC5raW5kID09PSAnYmFtYm9vJykgdGV4ID0gYmFtYm9vVGlsZSh0LnNpemUgPz8gNTEyLCB0LnN0cmlwcyA/PyAxMCwgdC5zZWVkID8/IDYpO1xuICAgIGlmICh0LmtpbmQgPT09ICdzdHJpcGVzJykgdGV4ID0gc3RyaXBlVGlsZSh0LnNpemUgPz8gMjU2LCB0LmJhbmRzID8/IDgsIHQuYSwgdC5iLCB0LnNlZWQgPz8gOSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3Bvc3RlcicpIHRleCA9IHBvc3RlclRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDgsIHQubGluZXMgPz8gW10pO1xuICAgIGlmICh0LmtpbmQgPT09ICdwZWJibGUnKSB0ZXggPSBwZWJibGVUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAyMSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3RyZWFkJykgdGV4ID0gdHJlYWRUaWxlKHQuc2l6ZSA/PyAyNTYsIHQuc2VlZCA/PyAyMywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3R5cmUnKSB0ZXggPSB0eXJlVGlsZSh0LnNpemUgPz8gMjU2LCB0LnNlZWQgPz8gMjksIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdjdWxtJykgdGV4ID0gY3VsbVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDMxKTtcbiAgICBpZiAodC5raW5kID09PSAnc2F3bicpIHRleCA9IHNhd25UaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA0MywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3RoYXRjaCcpIHRleCA9IHRoYXRjaFRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDM3LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAndGFycCcpIHRleCA9IHRhcnBUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA0MSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2dhbHYnKSB0ZXggPSBnYWx2VGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNDcsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdzcGxpdCcpIHRleCA9IHNwbGl0VGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNTMpO1xuICAgIGlmICh0LmtpbmQgPT09ICdyb3BlJykgdGV4ID0gcm9wZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDU5KTtcbiAgICBpZiAodC5raW5kID09PSAncmlidG9wJykgdGV4ID0gcmliVG9wVGlsZSh0LnNpemUgPz8gMTAyNCwgdC5zZWVkID8/IDYxLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY29uY3JldGUnKSB0ZXggPSBjb25jcmV0ZVRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDY3LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAncm9hZCcpIHRleCA9IHJvYWRUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA3MSwgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2hhemFyZCcpIHRleCA9IGhhemFyZFRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDczLCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnZWFydGgnKSB0ZXggPSBlYXJ0aFRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDc5LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY2hlcXVlcicpIHRleCA9IGNoZXF1ZXJUaWxlKHQuc2l6ZSA/PyAyNTYsIHQuc2VlZCA/PyA4MywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3JpYnBhbmVsJykgdGV4ID0gcmliUGFuZWxUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA4OSwgdCk7XG4gICAgYmluZFRpbGUobWF0LCB0ZXgsIHQuYnVtcCA/PyAwKTtcbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZUV4cHJlc3N3YXlUd2luQ29sdW1uUG9ydGFsUGllck1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogdGhlIHJvb3QsIHBsdXMgT05FIFBFUiBXSEVFTCAoYW5kIGFueSBvdGhlciBtZWNoYW5pc20gQ09ORklHLnBpdm90cyBuYW1lcyAtLSBhXG4gICAgLy8gc3RlZXJpbmcgaGVhZCwgYSBjYW5vcHkgc3RheSkuIEEgdmVoaWNsZSdzIHdoZWVscyBnZW51aW5lbHkgdHVybiwgc28gZWFjaCBvbmUgaXMgYSBwcm9taXNlXG4gICAgLy8ga2VwdDogdGhlIHBpdm90IHNpdHMgYXQgdGhlIGh1YiwgaXRzIGF4aXMgaXMgdGhlIGF4bGUsIGFuZCBgaW5zdGFuY2VgIG5hbWVzIHdoaWNoIGluc3RhbmNlXG4gICAgLy8gb2YgdGhlIHdoZWVsIEluc3RhbmNlZE1lc2ggaXQgZHJpdmVzLiBOb3RoaW5nIGVsc2Ugb24gdGhlIHByb3AgbW92ZXMgLS0gdGhlIGRvb3JzIGFyZSBwYXJ0XG4gICAgLy8gb2YgdGhlIGJvZHkgc2hlbGwgLS0gc28gbm90aGluZyBlbHNlIGdldHMgYW4gYXhpcy5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcbiAgICBmb3IgKGNvbnN0IHB2IG9mIChDT05GSUcucGl2b3RzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgbyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgICAgby5uYW1lID0gcHYubmFtZTtcbiAgICAgIG8ucG9zaXRpb24uc2V0KHB2LnBvc2l0aW9uWzBdLCBwdi5wb3NpdGlvblsxXSwgcHYucG9zaXRpb25bMl0pO1xuICAgICAgby51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgICBhbmltYXRpb25Sb2xlOiAnY2hpbGQnLFxuICAgICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogcHYucG9zaXRpb24sIGF4aXM6IHB2LmF4aXMsIG5hbWU6IHB2Lm5hbWUsXG4gICAgICAgICAgICAgICAgIGNvbXBvbmVudDogcHYuY29tcG9uZW50LCBpbnN0YW5jZTogcHYuaW5zdGFuY2UgPz8gbnVsbCwgbm90ZXM6IHB2Lm5vdGUgPz8gJycgfSxcbiAgICAgIH07XG4gICAgICByb290LmFkZChvKTtcbiAgICAgIHBpdm90cy5wdXNoKG8pO1xuICAgIH1cblxuICAgIC8vIFNvY2tldHM6IE5PTkUgdW5sZXNzIENPTkZJRy5zb2NrZXRzIG5hbWVzIG9uZS4gTm90aGluZyBhdHRhY2hlcyB0byBhIHZlaGljbGUgaW4gdGhpcyBraXRcbiAgICAvLyBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qKlxuICogVGhlIG9uZS1hcmd1bWVudCBlbnRyeSBwb2ludDogdmliZTNkJ3MgY29udHJhY3QsIGFuZCBpbWcydGhyZWVqcydzIG93bi5cbiAqXG4gKiBgY3JlYXRlT2JqZWN0TW9kZWxgIGFib3ZlIGtlZXBzIHRoYWlraXQncyBoaXN0b3JpY2FsIChzcGVjLCBvcHRpb25zKSBzaGFwZSBzb1xuICogdGhlIGhhcm5lc3MsIHRoZSBsZXZlbCBlZGl0b3IgYW5kIHRoZSBOb2RlLXNpZGUgZ2F0ZXMgY2Fycnkgb24gdW5jaGFuZ2VkLlxuICogYHNwZWNgIGhhcyBuZXZlciBiZWVuIHBhc3NlZCBieSBhbnkgY2FsbGVyIC0tIGl0IGlzIGluc3BlY3Rpb24gZGF0YSB0aGF0IGlzXG4gKiBhbHJlYWR5IGJha2VkIGludG8gdGhpcyBtb2R1bGUgLS0gc28gdGhpcyBpcyB0aGUgaG9uZXN0IHNpZ25hdHVyZSwgYW5kIGl0IGlzXG4gKiB3aGF0IGEgdmliZTNkIGNvbnN1bWVyIGluc3RhbGxzIGFuZCBjYWxscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgcmV0dXJuIGNyZWF0ZU9iamVjdE1vZGVsKHVuZGVmaW5lZCwgb3B0aW9ucyk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFzQ3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxNQUNkLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLE1BQ2IsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLFFBQ0w7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsUUFDTDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxXQUFXO0FBQUEsTUFDWCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxNQUNkLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixlQUFlO0FBQUEsTUFDZixRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLE1BQ2IsUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLFFBQ0w7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsUUFDTDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixjQUFjO0FBQUEsTUFDWjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsWUFBWTtBQUFBLFVBQ1YsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxZQUFZO0FBQUEsVUFDVjtBQUFBLFlBQ0UsUUFBUTtBQUFBLGNBQ047QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsUUFBUTtBQUFBLGNBQ047QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxZQUFZO0FBQUEsVUFDVixRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0EsWUFBWTtBQUFBLFVBQ1Y7QUFBQSxZQUNFLFFBQVE7QUFBQSxjQUNOO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxV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LEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDcks7QUFFQSxVQUFNLFVBQVUsRUFBRSxXQUFXLEtBQU0sTUFBTSxLQUFLLEVBQUUsVUFBVTtBQUMxRCxVQUFNLGFBQWEsQ0FBQyxHQUFXLEdBQVcsSUFBWSxJQUFZLE1BQWM7QUFDOUUsVUFBSSxZQUFZO0FBQUcsVUFBSSxVQUFVO0FBQUcsVUFBSSxPQUFPLEdBQUcsQ0FBQztBQUFHLFVBQUksT0FBTyxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUcsVUFBSSxPQUFPO0FBQzdGLFVBQUksSUFBSSxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLElBQUksR0FBRyxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUFHLFlBQUksT0FBTztBQUFBLE1BQUc7QUFDbEcsVUFBSSxJQUFJLElBQUksR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksT0FBTyxJQUFJLEdBQUcsQ0FBQztBQUFHLFlBQUksT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBRyxZQUFJLE9BQU87QUFBQSxNQUFHO0FBQ3RHLFVBQUksSUFBSSxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUFHLFlBQUksT0FBTztBQUFBLE1BQUc7QUFDbEcsVUFBSSxJQUFJLElBQUksR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksT0FBTyxHQUFHLElBQUksQ0FBQztBQUFHLFlBQUksT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBRyxZQUFJLE9BQU87QUFBQSxNQUFHO0FBQUEsSUFDeEc7QUFDQSxRQUFJLFVBQVU7QUFDZCxhQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsS0FBSztBQUNoQyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxNQUFNLElBQUksSUFBSSxPQUFPLE1BQU0sSUFBSSxPQUFPLE1BQU0sSUFBSSxJQUFJO0FBQ3hGLFlBQU0sUUFBUSxJQUFJLElBQUk7QUFDdEIsVUFBSSwyQkFBMkIsUUFBUSxXQUFXO0FBQ2xELFVBQUksY0FBYyxRQUFRLG9CQUFvQixPQUFPLElBQUksSUFBSSxHQUFJLE1BQU0sUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJO0FBQy9HLGlCQUFXLEdBQUcsR0FBRyxLQUFLLElBQUksRUFBRSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUUsSUFBSSxHQUFHLE1BQU0sSUFBSSxJQUFJLEdBQUc7QUFBQSxJQUN4RTtBQUNBLFFBQUksMkJBQTJCO0FBQUEsRUFDakMsQ0FBQztBQUNIO0FBRUEsU0FBUyxTQUFTLEtBQTJCLE9BQXFDO0FBQ2hGLFFBQU0sSUFBSSxJQUFJLGFBQWEsVUFBVSxHQUFHLE1BQU0sSUFBSSxhQUFhLFFBQVE7QUFDdkUsUUFBTSxLQUFLLElBQUksYUFBYSxFQUFFLFFBQVEsQ0FBQztBQUN2QyxXQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsT0FBTyxLQUFLO0FBQ2hDLFVBQU0sS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUM7QUFDM0QsVUFBTSxJQUFJLE1BQU0sS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQ3pDLE9BQUcsSUFBSSxDQUFDLElBQUksSUFBSTtBQUFPLE9BQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO0FBQUEsRUFDckQ7QUFDQSxNQUFJLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLENBQUMsQ0FBQztBQUN2RCxTQUFPO0FBQ1Q7QUFxREEsU0FBUyxXQUFXLE1BQWMsTUFBYyxHQUFvQztBQUNsRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU0sS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJO0FBQzNCLFVBQU0sSUFBSSxDQUFDLE1BQWMsSUFBSTtBQUM3QixVQUFNLE9BQU8sRUFBRSxRQUFRLE1BQU0sT0FBTyxFQUFFLFFBQVEsT0FBTyxPQUFPLEVBQUUsUUFBUTtBQUN0RSxVQUFNLElBQUksRUFBRSxRQUFRLElBQUksU0FBUyxFQUFFLFVBQVUsTUFBTSxNQUFNLEVBQUUsT0FBTztBQUNsRSxVQUFNLE9BQU8sQ0FBQyxNQUFjO0FBQUUsWUFBTSxJQUFJLEtBQUssTUFBTSxNQUFNLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQUcsYUFBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUFBLElBQUs7QUFDckgsUUFBSSxZQUFZLEtBQUssRUFBRSxZQUFZLEtBQUs7QUFBRyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUlsRSxVQUFNLE1BQU0sSUFBSSxhQUFhLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUk7QUFDbEQsVUFBTSxLQUFLLEVBQUUsSUFBSSxHQUFHLEtBQUssRUFBRSxJQUFJO0FBQy9CLFVBQU0sT0FBTyxFQUFFLFFBQVE7QUFDdkIsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUssVUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDdEQsWUFBTSxLQUFLLElBQUksTUFBTSxJQUFJLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSSxFQUFFO0FBQ2pFLFVBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLElBQUs7QUFDbEMsWUFBTSxJQUFJLEtBQUssTUFBTSxJQUFJLEVBQUU7QUFFM0IsWUFBTSxNQUFPLEtBQUssS0FBSyxLQUFLLEtBQU0sSUFBSSxLQUFLO0FBQzNDLFlBQU0sT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSTtBQUNwQyxZQUFNLFFBQVEsSUFBSTtBQUNsQixVQUFJO0FBQ0osVUFBSSxPQUFPLE9BQU87QUFBRSxjQUFNLElBQUksT0FBTztBQUFPLFlBQUksSUFBSSxNQUFPLElBQUk7QUFBQSxNQUFHLE9BQzdEO0FBQUUsY0FBTSxLQUFLLE9BQU8sU0FBUztBQUFRLFlBQUksT0FBTyxJQUFJLE1BQU8sUUFBUSxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLEtBQUs7QUFBQSxNQUFLO0FBRTlHLFlBQU0sSUFBSSxPQUFPLFFBQVEsSUFBSSxPQUFPO0FBQ3BDLFlBQU0sT0FBTyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksSUFBSyxLQUFLLE1BQU8sS0FBSyxDQUFDLENBQUM7QUFDM0csWUFBTSxJQUFJLE9BQU8sSUFBSSxJQUFJLFFBQVEsRUFBRSxZQUFZLFVBQVUsSUFBSTtBQUM3RCxZQUFNLEtBQUssSUFBSSxJQUFJLEtBQUs7QUFDeEIsUUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDO0FBQUcsUUFBRSxJQUFJLENBQUMsSUFBSTtBQUFBLElBQ3pEO0FBQ0EsUUFBSSxhQUFhLEtBQUssR0FBRyxDQUFDO0FBRzFCLFFBQUksWUFBWSxLQUFLLEVBQUUsWUFBWSxDQUFHO0FBQUcsUUFBSSxVQUFVO0FBQUcsUUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxRQUFJLEtBQUs7QUFDeEcsUUFBSSxjQUFjLEtBQUssR0FBRztBQUFHLFFBQUksWUFBWSxLQUFLLElBQUksR0FBRyxJQUFJLEtBQU07QUFDbkUsUUFBSSxVQUFVO0FBQUcsUUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxRQUFJLE9BQU87QUFDakUsUUFBSSxVQUFVO0FBQUcsUUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxRQUFJLE9BQU87QUFDakUsUUFBSSxZQUFZLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSztBQUNyQyxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixZQUFNLElBQUksSUFBSSxLQUFLLEtBQUssR0FBRyxLQUFLLEVBQUUsSUFBSSxJQUFJLElBQUksT0FBTyxLQUFLLEtBQUssSUFBSTtBQUNuRSxVQUFJLFVBQVU7QUFBRyxVQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFBRyxVQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFBRyxVQUFJLE9BQU87QUFBQSxJQUNsSjtBQUNBLFFBQUksWUFBWSxLQUFLLEVBQUUsWUFBWSxJQUFJO0FBQUcsUUFBSSxVQUFVO0FBQUcsUUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsUUFBSSxLQUFLO0FBRzlHLFVBQU0sU0FBUyxFQUFFLFVBQVU7QUFDM0IsUUFBSSwyQkFBMkI7QUFDL0IsYUFBUyxJQUFJLEdBQUcsSUFBSSxRQUFRLEtBQUs7QUFDL0IsWUFBTSxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssR0FBRyxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLEdBQUcsR0FBRztBQUV4RSxZQUFNLElBQUksS0FBSyxNQUFPLEtBQUssS0FBSyxLQUFLLEtBQU0sSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUs7QUFDbEYsWUFBTSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLElBQUksRUFBRSxJQUFJO0FBQzFELFlBQU0sTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE9BQVEsS0FBSyxPQUFPLElBQUksSUFBSTtBQUNyRixVQUFJLEtBQUs7QUFBRyxVQUFJLFVBQVUsR0FBRyxDQUFDO0FBQUcsVUFBSSxPQUFPLEVBQUU7QUFDOUMsVUFBSSxZQUFZLElBQUksSUFBSSxPQUFPLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLEVBQUU7QUFDL0UsVUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUFHLFVBQUksUUFBUTtBQUFBLElBQ3REO0FBQ0EsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFVBQVUsS0FBSyxLQUFLO0FBQ3pDLFlBQU0sSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEdBQUcsS0FBSyxNQUFNLEVBQUUsR0FBRyxJQUFJLE1BQU0sSUFBSTtBQUM3RCxZQUFNLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFDaEYsVUFBSSxZQUFZLG9CQUFvQixNQUFPLElBQUksSUFBSSxJQUFJO0FBQUssVUFBSSxVQUFVO0FBQUcsVUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxVQUFJLEtBQUs7QUFBQSxJQUMxSDtBQUNBLFFBQUksMkJBQTJCO0FBQUEsRUFDakMsQ0FBQztBQUNIO0FBS0EsU0FBUyxTQUFTLEtBQWlDLEtBQWlDLE9BQU8sR0FBUztBQUNsRyxNQUFJLENBQUMsSUFBSztBQUNWLE1BQUksTUFBTTtBQUNWLE1BQUksT0FBTyxHQUFHO0FBQUUsUUFBSSxVQUFVO0FBQUssUUFBSSxZQUFZO0FBQUEsRUFBTTtBQUN6RCxNQUFJLGNBQWM7QUFDcEI7QUFTQSxTQUFTLE1BQU0sR0FBOEI7QUFDM0MsUUFBTSxLQUFhLEVBQUUsSUFBSSxLQUFhLEVBQUUsSUFBSSxLQUFpQixFQUFFLFNBQVMsSUFBWSxFQUFFLEtBQUs7QUFDM0YsUUFBTSxJQUFJLENBQUMsTUFBYyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxJQUFJO0FBSXBELFFBQU0sS0FBc0IsTUFBTSxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSztBQUN6RCxRQUFNLElBQUksQ0FBQyxNQUFlLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sSUFBSTtBQUNsRSxRQUFNLE9BQU8sQ0FBQyxNQUFjLFNBQWtCO0FBQzVDLFVBQU0sTUFBZ0IsQ0FBQyxHQUFHLEtBQWUsQ0FBQyxHQUFHLE1BQWdCLENBQUM7QUFDOUQsYUFBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUssVUFBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLEtBQUs7QUFBRSxVQUFJLEtBQUssRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFBRyxTQUFHLEtBQUssSUFBSSxJQUFJLElBQUksRUFBRTtBQUFBLElBQUc7QUFDOUgsYUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUssVUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDeEQsWUFBTSxJQUFJLEtBQUssS0FBSyxLQUFLLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUk7QUFDL0QsVUFBSSxLQUFNLEtBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLFVBQVEsS0FBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFDdEU7QUFDQSxVQUFNLElBQUksSUFBVSxxQkFBZTtBQUNuQyxNQUFFLGFBQWEsWUFBWSxJQUFVLDZCQUF1QixLQUFLLENBQUMsQ0FBQztBQUNuRSxNQUFFLGFBQWEsTUFBTSxJQUFVLDZCQUF1QixJQUFJLENBQUMsQ0FBQztBQUM1RCxNQUFFLFNBQVMsR0FBRztBQUFHLE1BQUUscUJBQXFCO0FBQUcsV0FBTztBQUFBLEVBQ3BEO0FBS0EsUUFBTSxRQUFRLENBQUMsR0FBeUIsUUFBZ0I7QUFDdEQsVUFBTSxJQUFJLEVBQUUsYUFBYSxVQUFVLEVBQUUsT0FBTyxJQUFJLElBQVUsWUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLGFBQWEsSUFBSSxDQUFDO0FBQ2xHLGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQUUsVUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQUcsVUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFBRyxVQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUFBLElBQUc7QUFDNUYsTUFBRSxhQUFhLFNBQVMsSUFBVSxzQkFBZ0IsS0FBSyxDQUFDLENBQUM7QUFBRyxXQUFPO0FBQUEsRUFDckU7QUFLQSxRQUFNLFlBQVksQ0FBQyxHQUF5QixPQUFtQjtBQUM3RCxVQUFNLElBQUksRUFBRSxhQUFhLFVBQVUsRUFBRSxPQUFPLE1BQU0sSUFBSSxhQUFhLElBQUksQ0FBQyxHQUFHLElBQUksSUFBVSxZQUFNO0FBQy9GLFFBQUksSUFBSTtBQUNSLGFBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFLLFVBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxLQUFLO0FBQUUsUUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUFHLFVBQUksR0FBRyxJQUFJLEVBQUU7QUFBRyxVQUFJLEdBQUcsSUFBSSxFQUFFO0FBQUcsVUFBSSxHQUFHLElBQUksRUFBRTtBQUFBLElBQUc7QUFDbEksTUFBRSxhQUFhLFNBQVMsSUFBVSxzQkFBZ0IsS0FBSyxDQUFDLENBQUM7QUFBRyxXQUFPO0FBQUEsRUFDckU7QUFDQSxRQUFNLE9BQU8sS0FBSyxHQUFHLEtBQUssR0FBRyxPQUFPLEtBQUssQ0FBQyxHQUFHLElBQUk7QUFDakQsUUFBTSxRQUFRLEVBQUUsWUFBWSxTQUN4QixDQUFDLFVBQVUsTUFBTSxFQUFFLE9BQU8sR0FBRyxNQUFNLE1BQU0sRUFBRSxZQUFZLFFBQVEsQ0FBQyxJQUNoRSxFQUFFLGFBQWEsU0FDYixDQUFDLE1BQU0sTUFBTSxFQUFFLFVBQVUsUUFBUSxHQUFHLE1BQU0sTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUMzRCxDQUFDLE1BQU0sSUFBSTtBQUVqQixRQUFNLFFBQVEsQ0FBQyxLQUFtQixRQUFrQjtBQUNsRCxVQUFNLE1BQWdCLENBQUMsR0FBRyxLQUFlLENBQUM7QUFDMUMsZUFBVyxDQUFDLElBQUksRUFBRSxLQUFLLEtBQUs7QUFDMUIsWUFBTSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDckYsWUFBTUMsTUFBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUdDLE1BQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUMzRyxZQUFNLElBQUksQ0FBQ0QsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxJQUFJRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLEdBQUdELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsSUFBSUQsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxHQUFHRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLElBQUlELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsQ0FBQztBQUN0RyxZQUFNLE1BQU0sRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUNuSCxpQkFBVyxLQUFLLEtBQUs7QUFBRSxZQUFJLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFBRyxXQUFHLEtBQUssR0FBRyxDQUFDO0FBQUEsTUFBRztBQUFBLElBQ3BFO0FBQ0EsVUFBTSxJQUFJLElBQVUscUJBQWU7QUFDbkMsTUFBRSxhQUFhLFlBQVksSUFBVSw2QkFBdUIsS0FBSyxDQUFDLENBQUM7QUFDbkUsTUFBRSxhQUFhLE1BQU0sSUFBVSw2QkFBdUIsSUFBSSxDQUFDLENBQUM7QUFDNUQsTUFBRSxxQkFBcUI7QUFBRyxXQUFPO0FBQUEsRUFDbkM7QUFDQSxRQUFNLE1BQU0sQ0FBQyxHQUFXLE1BQWMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDM0QsUUFBTSxLQUFtQixDQUFDLEdBQUcsS0FBbUIsQ0FBQyxHQUFHLEtBQW1CLENBQUMsR0FBRyxLQUFtQixDQUFDO0FBQy9GLFdBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQUUsT0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUFHLE9BQUcsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFBQSxFQUFHO0FBQzNHLFdBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQUUsT0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUFHLE9BQUcsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUFHO0FBQzNHLFFBQU0sUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUl2RyxRQUFNLFNBQVMsRUFBRSxVQUFVLEVBQUU7QUFDN0IsUUFBTSxLQUFLLEdBQUksV0FBVyxTQUFZLE1BQU0sSUFBSSxDQUFDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQU07QUFDakYsU0FBTyxVQUFVLEtBQUs7QUFDeEI7QUFpQkEsU0FBUyxVQUFVLE1BQWMsTUFBYyxHQUFvQztBQUNqRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU1DLE9BQU0sQ0FBQyxNQUFnQixHQUFHLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRyxVQUFNLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxPQUFPLEVBQUUsUUFBUSxNQUFNLFFBQVEsRUFBRSxTQUFTO0FBQzVFLFVBQU0sTUFBTSxFQUFFLE9BQU87QUFFckIsVUFBTSxPQUFPLENBQUMsU0FBMkM7QUFDdkQsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsTUFBSyxJQUFJLEVBQUU7QUFBQSxJQUN2RTtBQUlBLFVBQU0sT0FBTyxDQUFDLEdBQWEsR0FBVyxHQUFXLEdBQVcsR0FBVyxLQUFLLEdBQUcsT0FBTyxVQUFVO0FBQzlGLFlBQU0sSUFBSSxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNuRCxRQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFFBQUUsYUFBYSxPQUFPLE9BQU8sTUFBTSxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksR0FBRztBQUN0SCxRQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxLQUFLO0FBQ3JDLFVBQUksWUFBWTtBQUNoQixXQUFLLENBQUMsSUFBSSxPQUFPO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRyxDQUFDO0FBQUEsSUFDOUc7QUFFQSxRQUFJLFlBQVksT0FBT0EsS0FBSSxJQUFJLENBQUM7QUFBSyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUc1RCxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsU0FBUyxLQUFLLEtBQUs7QUFDeEMsWUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLE9BQU87QUFDL0IsV0FBSyxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEtBQUssT0FBTyxJQUFJLElBQUksUUFBUyxFQUFFLGNBQWMsSUFBSSxPQUFPLElBQUksSUFBSSxNQUFNLE1BQU0sSUFBSSxJQUFJLEdBQUc7QUFBQSxJQUN2SDtBQUlBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxnQkFBZ0IsS0FBSyxLQUFLO0FBQy9DLFlBQU0sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssS0FBSyxPQUFPLElBQUksSUFBSSxTQUFTLEVBQUUsZ0JBQWdCO0FBTTFGLFdBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLGFBQWEsT0FBUSxJQUFJLEtBQUssRUFBRSxnQkFBZ0IsT0FBTyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsY0FBYyxJQUFJO0FBQ3hILGVBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxvQkFBb0IsS0FBSyxLQUFLO0FBQ25ELGNBQU0sSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUk7QUFDdEQsY0FBTSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLElBQUksSUFBSTtBQUM1RSxZQUFJLFlBQVksUUFBUUEsS0FBSSxFQUFFLFdBQVcsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLGNBQWMsUUFBUSxJQUFJLEtBQUssRUFBRSxpQkFBaUIsSUFBSTtBQUNqSCxhQUFLLENBQUMsSUFBSSxPQUFPO0FBQUUsY0FBSSxVQUFVO0FBQUcsY0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxLQUFLO0FBQUEsUUFBRyxDQUFDO0FBQUEsTUFDL0Y7QUFFQSxVQUFJLElBQUksS0FBSyxFQUFFLGFBQWEsT0FBTztBQUNqQyxjQUFNLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxNQUFPLE1BQU0sS0FBSyxNQUFPLElBQUksSUFBSTtBQUMzRCxjQUFNLElBQUksSUFBSSxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHO0FBQ3JELGNBQU0sTUFBTSxFQUFFLFlBQVksUUFBUSxJQUFJLElBQUk7QUFDMUMsVUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUc7QUFBRyxZQUFJLEVBQUUsVUFBVyxHQUFFLGFBQWEsTUFBTSxRQUFRQSxLQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRztBQUFHLFVBQUUsYUFBYSxHQUFHLFFBQVFBLEtBQUksR0FBRyxDQUFDLEtBQUs7QUFDdkosWUFBSSxZQUFZO0FBQ2hCLGFBQUssQ0FBQyxPQUFPLElBQUksU0FBUyxLQUFLLE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQUEsTUFDckU7QUFBQSxJQUNGO0FBR0EsVUFBTSxTQUFTLEVBQUUsY0FBYyxHQUFHLFNBQVMsRUFBRSxjQUFjO0FBQzNELGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxnQkFBZ0IsSUFBSSxLQUFLO0FBQzlDLFlBQU0sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssS0FBSyxPQUFPLElBQUksSUFBSSxPQUFRO0FBQ3ZFLFdBQUssT0FBTyxJQUFJLElBQUksSUFBSSxTQUFTLElBQUksSUFBSSxLQUFNLE1BQU0sSUFBSSxJQUFJLEdBQUc7QUFDaEUsZUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsY0FBTSxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLO0FBQzNELGNBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSTtBQUNoRixZQUFJLFlBQVksUUFBUUEsS0FBSSxLQUFLLENBQUMsSUFBSSxNQUFNLElBQUksSUFBSSxHQUFHO0FBQ3ZELGFBQUssQ0FBQyxJQUFJLE9BQU87QUFBRSxjQUFJLFVBQVU7QUFBRyxjQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLEtBQUs7QUFBQSxRQUFHLENBQUM7QUFBQSxNQUMvRjtBQUFBLElBQ0Y7QUFLQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsY0FBYyxJQUFJLEtBQUs7QUFDNUMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFLGVBQWUsUUFBUSxNQUFNLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDN0YsWUFBTSxLQUFLLEVBQUUsZUFBZSxPQUFRLElBQUksSUFBSTtBQUM1QyxZQUFNLElBQUksSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUMvQyxRQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFFBQUUsYUFBYSxFQUFFLFlBQVksT0FBTyxNQUFNLFFBQVFBLEtBQUksSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLElBQUksSUFBSSxHQUFHLEdBQUc7QUFDeEksUUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxJQUFJLENBQUMsS0FBSztBQUN4QyxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHO0FBQUEsSUFDN0Q7QUFLQSxlQUFXLE1BQU8sRUFBRSxVQUFVLENBQUMsR0FBYTtBQUMxQyxZQUFNLEtBQUssS0FBSyxJQUFJLEdBQUcsS0FBSyxLQUFLLEtBQUssSUFBSSxHQUFHLEtBQUssT0FBTyxHQUFHLFFBQVE7QUFDcEUsVUFBSSxZQUFZLFFBQVFBLEtBQUksSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUc7QUFBSyxVQUFJLFNBQVMsR0FBRyxJQUFJLEdBQUcsS0FBSyxFQUFFO0FBQ3ZGLGVBQVMsSUFBSSxHQUFHLEtBQUssR0FBRyxVQUFVLElBQUksS0FBSztBQUN6QyxjQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSTtBQUNuRSxZQUFJLFlBQVksUUFBUUEsS0FBSSxJQUFJLElBQUksTUFBTSxNQUFNLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxJQUFJLEdBQUc7QUFDMUUsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLEtBQUs7QUFBQSxRQUFHO0FBQUEsTUFDckc7QUFBQSxJQUNGO0FBQ0EsZUFBVyxNQUFPLEVBQUUsZUFBZSxDQUFDLEdBQWE7QUFDL0MsWUFBTSxLQUFLLEtBQUssSUFBSSxHQUFHO0FBQ3ZCLGVBQVMsSUFBSSxHQUFHLEtBQUssR0FBRyxTQUFTLEtBQUssS0FBSztBQUN6QyxjQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLEdBQUcsU0FBUyxRQUFRLE1BQU0sTUFBTSxHQUFHLE9BQU8sUUFBUSxJQUFJLEtBQUssR0FBRyxVQUFVO0FBQ2xILGNBQU0sS0FBSyxHQUFHLFNBQVMsUUFBUSxJQUFJLElBQUk7QUFDdkMsY0FBTSxJQUFJLElBQUkscUJBQXFCLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRztBQUNyRCxVQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFVBQUUsYUFBYSxFQUFFLFlBQVksT0FBTyxLQUFLLFFBQVFBLEtBQUksSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLElBQUksSUFBSSxHQUFHLEdBQUc7QUFDdkksVUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxJQUFJLENBQUMsS0FBSztBQUN4QyxZQUFJLFlBQVk7QUFDaEIsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsSUFBSSxJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUc7QUFBQSxNQUNsRTtBQUFBLElBQ0Y7QUFDQSxRQUFJLEVBQUUsU0FBUztBQUNiLFlBQU0sS0FBSyxFQUFFLFNBQVMsS0FBSyxLQUFLLEdBQUcsUUFBUTtBQUMzQyxVQUFJLE9BQU8sUUFBUSxFQUFFO0FBQWlCLFVBQUksWUFBWTtBQUFVLFVBQUksZUFBZTtBQUNuRixVQUFJLFlBQVksUUFBUUEsS0FBSSxHQUFHLFFBQVEsS0FBSyxDQUFDLElBQUksR0FBRyxTQUFTLElBQUk7QUFDakUsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsR0FBRyxNQUFNLEtBQUssR0FBRyxLQUFLLE9BQU8sSUFBSSxLQUFLLEtBQUssR0FBRyxLQUFLLEtBQUs7QUFBQSxJQUNwRztBQUNBLFFBQUksRUFBRSxZQUFZO0FBQ2hCLFlBQU0sSUFBSSxFQUFFLFlBQVksSUFBSSxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssRUFBRSxnQkFBZ0IsTUFBTTtBQUNoRyxRQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFFBQUUsYUFBYSxNQUFNLFFBQVFBLEtBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUc7QUFDaEcsUUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxHQUFHLENBQUMsS0FBSztBQUN2QyxVQUFJLFlBQVk7QUFBRyxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQzVDO0FBR0EsUUFBSSwyQkFBMkI7QUFDL0IsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFNBQVMsT0FBTyxLQUFLO0FBQzFDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQzlFLFVBQUksWUFBWSxvQkFBb0IsQ0FBQztBQUNyQyxVQUFJLFVBQVU7QUFBRyxVQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFVBQUksS0FBSztBQUFBLElBQzlEO0FBQ0EsUUFBSSwyQkFBMkI7QUFBQSxFQUNqQyxDQUFDO0FBQ0g7QUFnQkEsU0FBUyxVQUFVLEtBQWlCLEdBQVcsTUFBTSxJQUFJLEtBQWMsTUFBTSxNQUE0QjtBQUN2RyxRQUFNLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFVLGNBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUc1RCxXQUFTLElBQUksRUFBRSxTQUFTLEdBQUcsSUFBSSxHQUFHLElBQUssS0FBSSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFNLEdBQUUsT0FBTyxHQUFHLENBQUM7QUFDMUYsTUFBSSxFQUFFLFNBQVMsRUFBRyxRQUFPLElBQVUscUJBQWU7QUFDbEQsUUFBTSxJQUFJLEVBQUU7QUFDWixRQUFNLFNBQTBCLENBQUM7QUFDakMsV0FBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSyxRQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztBQUVsRixRQUFNLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxNQUFNLE1BQU0sSUFBSSxPQUFPLENBQUMsRUFBRSxNQUFNLElBQ2hELE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUNsQyxPQUFPLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDO0FBRXBELE1BQUksSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sSUFBVSxjQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBVSxjQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ3ZGLElBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVTtBQUMxRCxRQUFNLE1BQWdCLENBQUMsR0FBRyxNQUFnQixDQUFDO0FBQzNDLFdBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFFBQUksSUFBSSxHQUFHO0FBRVQsWUFBTSxJQUFJLElBQVUsaUJBQVcsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNsRSxRQUFFLGdCQUFnQixDQUFDO0FBQ25CLFFBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVTtBQUFBLElBQzVEO0FBQ0EsVUFBTSxJQUFJLElBQVUsY0FBUSxFQUFFLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVU7QUFHOUQsVUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7QUFDNUUsYUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsWUFBTSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUk7QUFDN0IsWUFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxLQUFLLElBQUksRUFBRTtBQUN2QyxVQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLENBQUM7QUFBQSxJQUMzSDtBQUFBLEVBQ0Y7QUFDQSxXQUFTLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxJQUFLLFVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLO0FBTzVELFVBQU0sSUFBSSxJQUFJLE1BQU0sR0FBRyxLQUFLLElBQUksS0FBSyxNQUFNLEdBQUcsTUFBTSxJQUFJLEtBQUssT0FBTyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUs7QUFDMUcsUUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDN0I7QUFDQSxNQUFJLEtBQUs7QUFPUCxlQUFXLENBQUMsTUFBTSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBeUM7QUFDaEgsWUFBTSxPQUFPLElBQUksU0FBUztBQUMxQixlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQUFFLGNBQU0sS0FBSyxPQUFPLE1BQU0sS0FBSztBQUFHLFlBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7QUFBQSxNQUFHO0FBQzFHLFlBQU0sS0FBSyxJQUFJLFNBQVM7QUFBRyxVQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsY0FBTSxJQUFJLE9BQU8sR0FBRyxJQUFJLFFBQVEsSUFBSSxLQUFLO0FBQ3pDLFlBQUksS0FBTSxLQUFJLEtBQUssSUFBSSxHQUFHLENBQUM7QUFBQSxZQUFRLEtBQUksS0FBSyxJQUFJLEdBQUcsQ0FBQztBQUFBLE1BQ3REO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLElBQUksSUFBVSxxQkFBZTtBQUNuQyxJQUFFLGFBQWEsWUFBWSxJQUFVLHNCQUFnQixJQUFJLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM5RSxJQUFFLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLGFBQWMsSUFBSSxTQUFTLElBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6RixJQUFFLFNBQVMsR0FBRztBQUNkLElBQUUscUJBQXFCO0FBQ3ZCLFNBQU8sUUFBUSxTQUFZLElBQUksUUFBUSxHQUFHLEdBQUc7QUFDL0M7QUFXQSxTQUFTLGFBQWEsS0FBMkIsR0FBOEI7QUFDN0UsUUFBTSxJQUFJLElBQUksYUFBYSxVQUFVLEdBQUcsTUFBTSxJQUFJLGFBQWEsUUFBUTtBQUN2RSxRQUFNLEtBQUssSUFBSSxhQUFhLEVBQUUsUUFBUSxDQUFDO0FBQ3ZDLFFBQU0sTUFBTSxJQUFJLGFBQWEsT0FBTztBQUNwQyxRQUFNLE9BQU8sRUFBRSxTQUFTLFNBQVksSUFBVSxZQUFNLEVBQUUsSUFBSSxJQUFJO0FBQzlELFFBQU0sUUFBUSxFQUFFLFNBQVM7QUFDekIsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxVQUFNLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBSWpDLFVBQU0sSUFBSTtBQUNWLFVBQU0sUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLFNBQVMsS0FBSyxFQUFFLEtBQUssS0FBSyxLQUFLLEVBQUUsS0FBSyxLQUFLLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxLQUFLLEtBQUssRUFBRSxLQUFLO0FBQ2hILFFBQUksT0FBTztBQUNULFNBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDbkMsU0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3ZDLFVBQUksUUFBUSxJQUFLLEtBQUksT0FBTyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQUEsSUFDdkQsT0FBTztBQUFFLFNBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7QUFBRyxTQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7QUFBQSxJQUFHO0FBQUEsRUFDM0Q7QUFDQSxNQUFJLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLENBQUMsQ0FBQztBQUN2RCxNQUFJLElBQUssS0FBSSxjQUFjO0FBQzNCLFNBQU87QUFDVDtBQVFBLFNBQVMsUUFBUSxLQUEyQixPQUFlLE1BQU0sT0FBNkI7QUFDNUYsUUFBTSxJQUFJLElBQUksYUFBYSxVQUFVO0FBQ3JDLFFBQU0sS0FBSyxJQUFJLGFBQWEsRUFBRSxRQUFRLENBQUM7QUFHdkMsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxVQUFNLElBQUksTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFDckUsT0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJO0FBQU8sT0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUk7QUFBQSxFQUM3QztBQUNBLE1BQUksYUFBYSxNQUFNLElBQVUsc0JBQWdCLElBQUksQ0FBQyxDQUFDO0FBQ3ZELFNBQU87QUFDVDtBQUdBLFNBQVMsTUFBTSxJQUFjLEdBQVcsR0FBaUM7QUFDdkUsUUFBTSxJQUFJLElBQVUsbUJBQWEsSUFBSSxLQUFLLE9BQU8sR0FBRyxHQUFHLEdBQUcsS0FBSztBQUMvRCxJQUFFLFFBQVEsS0FBSyxLQUFLLENBQUM7QUFDckIsSUFBRSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUN2QyxJQUFFLHFCQUFxQjtBQUN2QixTQUFPO0FBQ1Q7QUFZQSxTQUFTLFVBQVUsTUFBYyxNQUFjLEdBQW9DO0FBQ2pGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTUEsT0FBTSxDQUFDLE1BQWdCLEdBQUcsS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFHLFVBQU0sT0FBTyxFQUFFLFFBQVEsQ0FBQyxNQUFNLE1BQU0sSUFBSSxHQUFHLFFBQVEsRUFBRSxhQUFhLEtBQUssTUFBTSxFQUFFLFlBQVk7QUFPM0YsVUFBTSxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQy9CLFFBQUksWUFBWSxPQUFPQSxLQUFJLElBQUksQ0FBQztBQUFLLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzVELFFBQUksMkJBQTJCO0FBRS9CLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxXQUFXLEtBQUssS0FBSztBQUMxQyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sTUFBTSxLQUFLLE9BQU8sSUFBSSxJQUFJLE1BQU0sSUFBSSxPQUFPLElBQUksSUFBSTtBQUNuRyxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUNoRCxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksSUFBSSxDQUFDLEtBQUs7QUFDeEYsVUFBSSxZQUFZO0FBQUksVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFBRyxVQUFJLFNBQVMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQUEsSUFDL0U7QUFLQSxRQUFJLEVBQUUsVUFBVTtBQUNkLFVBQUksWUFBWSxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLEtBQUs7QUFBSyxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ3hFLE9BQU87QUFDTCxZQUFNLE9BQU8sSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsS0FBSyxJQUFJLElBQUk7QUFDNUQsV0FBSyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUc7QUFBRyxXQUFLLGFBQWEsS0FBSyxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLFFBQVEsSUFBSSxHQUFHO0FBQUcsV0FBSyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxJQUFJLENBQUMsS0FBSztBQUM5SixVQUFJLFlBQVk7QUFBTSxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQy9DO0FBRUEsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFlBQVksS0FBSyxLQUFLO0FBQzNDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQ3BHLFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksSUFBSSxDQUFDLEtBQUs7QUFDeEYsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3JHO0FBSUEsUUFBSSxFQUFFLE1BQU07QUFDVixZQUFNLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBTSxNQUFNLEdBQUk7QUFDdEMsZUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE1BQU0sS0FBSztBQUMvQixjQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE1BQU8sSUFBSSxJQUFJO0FBQzdDLGNBQU0sSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLE9BQVEsSUFBSSxJQUFJLE9BQVEsSUFBSSxNQUFPLElBQUksSUFBSTtBQUN6RixjQUFNLEtBQUssSUFBSSxxQkFBcUIsSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksR0FBRyxDQUFDO0FBQzlELFdBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksR0FBRyxDQUFDLEtBQUs7QUFDeEMsV0FBRyxhQUFhLEtBQUssUUFBUUEsS0FBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFDN0MsV0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxHQUFHLENBQUMsS0FBSztBQUN4QyxZQUFJLFlBQVk7QUFDaEIsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7QUFBQSxNQUMzRTtBQUFBLElBQ0Y7QUFLQSxRQUFJLEVBQUUsUUFBUTtBQUNaLFVBQUksMkJBQTJCO0FBQy9CLGVBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsY0FBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLEVBQUUsY0FBYztBQUM3RSxjQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsV0FBRyxhQUFhLEdBQUcsb0JBQW9CLEVBQUUsY0FBYyxJQUFJLEdBQUc7QUFBRyxXQUFHLGFBQWEsR0FBRyxxQkFBcUI7QUFDekcsWUFBSSxZQUFZO0FBQ2hCLG1CQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsY0FBSSxVQUFVO0FBQUcsY0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxLQUFLO0FBQUEsUUFBRztBQUFBLE1BQ3ZJO0FBQ0EsVUFBSSwyQkFBMkI7QUFBQSxJQUNqQztBQVNBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxVQUFVLElBQUksS0FBSztBQUN4QyxZQUFNLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxNQUFNLElBQUk7QUFDdEMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsVUFBVSxTQUFTLE1BQU0sSUFBSSxJQUFJLE1BQU0sS0FBSyxFQUFFLGNBQWMsU0FBUyxNQUFNLElBQUk7QUFDOUgsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFNBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsS0FBSztBQUNsRixVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDdkk7QUFLQSxRQUFJLEVBQUUsUUFBUTtBQUNaLFlBQU0sSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLE1BQU0sSUFBSSxHQUFHLE9BQU8sRUFBRSxhQUFhLENBQUMsS0FBTSxHQUFJO0FBQzFFLGVBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsY0FBTSxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUM7QUFDeEUsY0FBTSxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDN0QsY0FBTSxLQUFLLEVBQUUsY0FBYyxTQUFTLE1BQU0sSUFBSTtBQUM5QyxtQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQzNCLGNBQUksS0FBSztBQUFHLGNBQUksVUFBVSxLQUFLLElBQUksRUFBRTtBQUFHLGNBQUksUUFBUSxJQUFJLElBQUksT0FBTyxJQUFJO0FBQUcsY0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQzVGLGdCQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsYUFBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxhQUFHLGFBQWEsTUFBTSxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHO0FBQUcsYUFBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsS0FBSztBQUN4SSxjQUFJLFlBQVk7QUFBSSxjQUFJLFVBQVU7QUFBRyxjQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLGNBQUksS0FBSztBQUNoRixjQUFJLFFBQVE7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFJQSxRQUFJLEVBQUUsT0FBTztBQUNYLFlBQU0sSUFBSSxFQUFFLFFBQVEsQ0FBQyxNQUFNLE1BQU0sSUFBSTtBQUNyQyxlQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsT0FBTyxLQUFLO0FBQ2hDLGNBQU0sSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLFVBQVUsUUFBUSxJQUFJLEVBQUUsTUFBTSxJQUFJO0FBQy9ELGNBQU0sTUFBTSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sSUFBSSxJQUFLLENBQUM7QUFDN0MsWUFBSSxZQUFZLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxhQUFhLEdBQUc7QUFBSyxZQUFJLFNBQVMsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUNsRixZQUFJLFlBQVksUUFBUUEsS0FBSSxDQUFDLENBQUMsS0FBSyxFQUFFLGFBQWEsT0FBTyxHQUFHO0FBQUssWUFBSSxTQUFTLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztBQUFBLE1BQ2xHO0FBQUEsSUFDRjtBQUlBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxRQUFRLElBQUksS0FBSztBQUN0QyxZQUFNLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxLQUFNLElBQUk7QUFDcEMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLFFBQVEsUUFBUSxNQUFNLElBQUksSUFBSTtBQUN6RSxZQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDekIsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDeEQsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsS0FBSyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHO0FBQUcsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsS0FBSztBQUN2SSxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFBQSxJQUN6RztBQUVBLFFBQUksRUFBRSxNQUFNO0FBQ1YsWUFBTSxJQUFJLEVBQUUsTUFBTSxPQUFPLEVBQUUsWUFBWTtBQUd2QyxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsS0FBSyxJQUFJLE9BQU8sSUFBSTtBQUNqRSxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxJQUFJLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxLQUFLO0FBQ25HLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzNDLGVBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxnQkFBZ0IsS0FBSyxLQUFLO0FBQy9DLGNBQU0sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxNQUFNLEtBQUssS0FBSyxRQUFRLElBQUksSUFBSTtBQUUxRixjQUFNLEtBQUssSUFBSSxxQkFBcUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFDekQsV0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsT0FBTztBQUFHLFdBQUcsYUFBYSxLQUFLLFFBQVFBLEtBQUksQ0FBQyxDQUFDLFFBQVE7QUFBRyxXQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxLQUFLO0FBQy9ILFlBQUksWUFBWTtBQUNoQixtQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsY0FBSSxVQUFVO0FBQUcsY0FBSSxRQUFRLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLGNBQUksS0FBSztBQUFBLFFBQUc7QUFDdkgsaUJBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzNCLGdCQUFNLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxHQUFHLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJO0FBQ3RELGdCQUFNLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLElBQUk7QUFDaEYsY0FBSSxZQUFZLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLElBQUksR0FBRztBQUNwRCxxQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsZ0JBQUksVUFBVTtBQUFHLGdCQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsZ0JBQUksS0FBSztBQUFBLFVBQUc7QUFBQSxRQUNyRztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBSUEsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFNBQVMsT0FBTyxLQUFLO0FBQzFDLFlBQU0sS0FBSyxFQUFFLFdBQVc7QUFBSyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSyxNQUFNLElBQUksS0FBSyxNQUFNLEdBQUc7QUFDdkcsVUFBSSxZQUFZLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxjQUFjLElBQUk7QUFBSyxVQUFJLFNBQVMsR0FBRyxHQUFHLEtBQUssR0FBRztBQUFBLElBQzdGO0FBQ0EsUUFBSSwyQkFBMkI7QUFBQSxFQUNqQyxDQUFDO0FBQ0g7QUFLQSxTQUFTLGNBQWMsTUFBYyxNQUFjLE1BQTBDO0FBQzNGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsUUFBSSxVQUFVLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDeEIsUUFBSSxZQUFZLEtBQUssSUFBSSxLQUFLLE9BQU8sQ0FBQztBQUN0QyxRQUFJLFVBQVU7QUFDZCxVQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFDckMsUUFBSSxjQUFjLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztBQUU1QyxRQUFJLFVBQVU7QUFDZCxRQUFJLE9BQU8sR0FBRyxDQUFDO0FBQUcsUUFBSSxPQUFPLEdBQUcsQ0FBQztBQUNqQyxRQUFJLE9BQU8sR0FBRyxDQUFDO0FBQUcsUUFBSSxPQUFPLEdBQUcsQ0FBQztBQUNqQyxRQUFJLE9BQU87QUFFWCxRQUFJLFlBQVksT0FBTyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDakQsZUFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHO0FBQ3JFLFVBQUksVUFBVTtBQUFHLFVBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxZQUFZLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFVBQUksS0FBSztBQUFBLElBQ2hGO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFJQSxTQUFTLFdBQVcsTUFBYyxRQUFnQixNQUEwQztBQUMxRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFFBQUksWUFBWTtBQUFXLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2xELFVBQU0sS0FBSyxJQUFJO0FBQ2YsYUFBUyxJQUFJLEdBQUcsSUFBSSxRQUFRLEtBQUs7QUFDL0IsWUFBTSxPQUFPLE1BQU8sSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLE1BQU0sTUFBTSxJQUFJO0FBQzFELFVBQUksWUFBWSxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7QUFBSyxVQUFJLFNBQVMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQzVFLFVBQUksWUFBWTtBQUFzQixVQUFJLFNBQVMsSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFLLEdBQUcsQ0FBQztBQUV2RixVQUFJLFlBQVk7QUFBMEIsVUFBSSxTQUFTLElBQUksS0FBSyxLQUFLLE1BQU0sR0FBRyxLQUFLLE1BQU0sQ0FBQztBQUUxRixZQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUM7QUFDbEMsZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFBRSxjQUFNLElBQUksSUFBSSxJQUFJO0FBQUcsWUFBSSxZQUFZO0FBQXVCLFlBQUksU0FBUyxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSyxDQUFDO0FBQUEsTUFBRztBQUUvSSxlQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUFFLGNBQU0sSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJO0FBQUksWUFBSSxZQUFZLGlCQUFpQixPQUFPLElBQUksSUFBSSxHQUFHO0FBQUssWUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxNQUFHO0FBQUEsSUFDako7QUFFQSxhQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQUFFLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSTtBQUFHLFVBQUksWUFBWTtBQUF1QixVQUFJLFNBQVMsR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQztBQUFBLElBQUc7QUFBQSxFQUMvSixDQUFDO0FBQ0g7QUFLQSxTQUFTLFdBQVcsTUFBYyxNQUFjLE9BQTZDO0FBQzNGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsUUFBSSxVQUFVLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFFeEIsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsWUFBTSxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksTUFBTyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDM0gsVUFBSSxZQUFZLFFBQVEsTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3BILFVBQUksVUFBVTtBQUFHLFVBQUksT0FBTyxHQUFHLENBQUM7QUFDaEMsWUFBTSxJQUFJO0FBQ1YsZUFBUyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUssS0FBSSxPQUFPLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksT0FBTyxJQUFJLElBQUk7QUFDbkYsZUFBUyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUssS0FBSSxPQUFPLElBQUksS0FBSyxJQUFJLElBQUksT0FBTyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQztBQUN2RixlQUFTLElBQUksSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFLLEtBQUksT0FBTyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLElBQUksT0FBTyxJQUFJLElBQUk7QUFDM0YsZUFBUyxJQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSyxLQUFJLE9BQU8sS0FBSyxJQUFJLElBQUksT0FBTyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQztBQUN2RixVQUFJLFVBQVU7QUFBRyxVQUFJLEtBQUs7QUFDMUIsVUFBSSxZQUFZO0FBQ2hCLGVBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFLLEtBQUksU0FBUyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssTUFBTSxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSyxDQUFDO0FBQUEsSUFDaEk7QUFFQSxRQUFJLFlBQVk7QUFDaEIsUUFBSSxPQUFPLFFBQVEsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDO0FBQ3ZDLFFBQUksZUFBZTtBQUNuQixhQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLO0FBQ3JDLFlBQU0sSUFBSSxJQUFJLEtBQU0sSUFBSSxLQUFLLE9BQU8sSUFBSTtBQUN4QyxlQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUFFLFlBQUksY0FBYztBQUFLLFlBQUksU0FBUyxNQUFNLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxPQUFPLEdBQUcsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDO0FBQUEsTUFBRztBQUMzSCxVQUFJLGNBQWM7QUFBQSxJQUNwQjtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBU0EsU0FBUyxXQUFXLE1BQWMsT0FBZSxHQUFhLEdBQWEsTUFBYyxJQUFTLENBQUMsR0FBK0I7QUFDaEksU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNQSxPQUFNLENBQUMsTUFBZ0IsT0FBTyxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUcsVUFBTSxJQUFJLElBQUk7QUFDZCxhQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sS0FBSztBQUFFLFVBQUksWUFBWUEsS0FBSSxJQUFJLElBQUksSUFBSSxDQUFDO0FBQUcsVUFBSSxTQUFTLEtBQUssTUFBTSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDO0FBQUEsSUFBRztBQUMvSCxRQUFJLDJCQUEyQjtBQUMvQixhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsV0FBVyxLQUFLLEtBQUs7QUFDMUMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLE1BQU0sS0FBSyxPQUFPLElBQUksSUFBSTtBQUNsRixZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsb0JBQW9CLEVBQUUsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLHFCQUFxQjtBQUN2RixVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDckc7QUFDQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsVUFBVSxPQUFPLEtBQUs7QUFBRSxZQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFBRyxVQUFJLFlBQVksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFBVSxVQUFJLFNBQVMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHO0FBQUEsSUFBRztBQU9sTCxRQUFJLEVBQUUsT0FBTztBQUNYLFlBQU0sS0FBSyxFQUFFLFdBQVcsS0FBTSxLQUFLLEVBQUUsV0FBVztBQUNoRCxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM5QyxlQUFTLElBQUksR0FBRyxLQUFLLElBQUksS0FBSztBQUM1QixjQUFNLElBQUksSUFBSTtBQUNkLGNBQU0sSUFBSSxNQUFNLEtBQUssT0FBTyxNQUFNLE1BQU0sS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsUUFBUSxDQUFDO0FBQzFFLGNBQU0sSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDO0FBQzVCLFdBQUcsYUFBYSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBQSxNQUMxQztBQUNBLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFDN0M7QUFDQSxRQUFJLDJCQUEyQjtBQUFBLEVBQ2pDLENBQUM7QUFDSDtBQU1BLFNBQVMsUUFBUSxHQUF5QixZQUFvQixLQUFhLE9BQWUsU0FBUyxPQUFPLEtBQUssR0FBUztBQUN0SCxRQUFNLElBQUksRUFBRSxhQUFhLFVBQVU7QUFDbkMsTUFBSSxPQUFPO0FBQ1gsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sSUFBSyxRQUFPLEtBQUssSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN4RixRQUFNLE1BQU0sS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLElBQUksS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDO0FBQzlELFFBQU0sS0FBSyxJQUFJLGFBQWEsRUFBRSxRQUFRLENBQUM7QUFDdkMsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxVQUFNLElBQUksS0FBSyxNQUFNLElBQUksVUFBVTtBQUNuQyxPQUFHLElBQUksQ0FBQyxJQUFLLElBQUksTUFBTztBQUFLLE9BQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU07QUFBQSxFQUNsRTtBQUNBLElBQUUsYUFBYSxNQUFNLElBQVUsc0JBQWdCLElBQUksQ0FBQyxDQUFDO0FBQ3ZEO0FBS0EsU0FBUyxXQUFXLE1BQWMsTUFBYyxHQUFvQztBQUNsRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU1BLE9BQU0sQ0FBQyxNQUFnQixPQUFPLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5RyxRQUFJLFlBQVlBLEtBQUksRUFBRSxVQUFVLENBQUMsTUFBTSxNQUFNLElBQUksQ0FBQztBQUFHLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzVFLFVBQU0sTUFBa0IsRUFBRSxXQUFXLENBQUMsQ0FBQyxNQUFNLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxNQUFNLEdBQUksR0FBRyxDQUFDLEtBQU0sTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFNLE1BQU0sR0FBSSxDQUFDO0FBQ3BILFVBQU0sSUFBSSxFQUFFLFNBQVMsS0FBSyxPQUFPLEtBQUssRUFBRSxRQUFRLFFBQVEsT0FBTyxLQUFLLEVBQUUsUUFBUTtBQUM5RSxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLE9BQU8sSUFBSSxLQUFLLE9BQU8sT0FBTyxLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxLQUFLO0FBQ3ZILFlBQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBS2xFLFVBQUksRUFBRSxPQUFPO0FBQ1gsWUFBSSxZQUFZQSxNQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU0sTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLEtBQUssQ0FBQztBQUM1RSxtQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksUUFBUSxJQUFJLEtBQUssS0FBSyxNQUFNLElBQUksS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLEtBQUs7QUFBQSxRQUFHO0FBQUEsTUFDdkw7QUFDQSxVQUFJLFlBQVlBLEtBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3BELGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFFakosVUFBSSxZQUFZLG9CQUFvQixFQUFFLFNBQVMsSUFBSTtBQUNuRCxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksUUFBUSxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDdEw7QUFBQSxFQUNGLENBQUM7QUFDSDtBQU1BLFNBQVMsVUFBVSxNQUFjLE1BQWMsR0FBb0M7QUFDakYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNLFNBQVMsRUFBRSxVQUFVLEtBQU0sUUFBUSxFQUFFLFNBQVMsR0FBRyxRQUFRLEVBQUUsU0FBUztBQU8xRSxVQUFNLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDL0IsUUFBSSxZQUFZLE9BQU8sSUFBSSxJQUFJLENBQUM7QUFBSyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM1RCxRQUFJLDJCQUEyQjtBQUMvQixVQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sTUFBTTtBQUNsQyxRQUFJLFlBQVksT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDckMsVUFBTSxRQUFRLElBQUksT0FBTyxJQUFJLFNBQVMsRUFBRSxhQUFhO0FBRXJELGFBQVMsSUFBSSxHQUFHLElBQUksT0FBTyxLQUFLO0FBQUUsWUFBTSxJQUFJLElBQUksUUFBUSxRQUFRLE9BQU8sSUFBSSxJQUFJLE9BQU8sUUFBUTtBQUFLLFVBQUksU0FBUyxHQUFHLElBQUksTUFBTSxHQUFHLElBQUksSUFBSTtBQUFHLFVBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJO0FBQUEsSUFBRztBQUN2TCxhQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sS0FBSztBQUFFLFlBQU0sSUFBSSxLQUFLLE1BQU0sT0FBTyxJQUFJLE9BQU87QUFBUSxVQUFJLFNBQVMsR0FBRyxJQUFJLEtBQUssR0FBRyxDQUFDO0FBQUEsSUFBRztBQUVqSCxhQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUFFLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxPQUFPLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFDL0gsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUcsU0FBRyxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7QUFDbEosVUFBSSxZQUFZO0FBQUksaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFBRTtBQUM3SixRQUFJLDJCQUEyQjtBQUFBLEVBQ2pDLENBQUM7QUFDSDtBQVVBLFNBQVMsU0FBUyxNQUFjLE1BQWMsR0FBb0M7QUFDaEYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNLE9BQU8sRUFBRSxRQUFRLEtBQUssT0FBTyxFQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxTQUFTLEVBQUUsVUFBVTtBQUNoRixVQUFNLEtBQUssS0FBSyxNQUFNLE9BQU8sTUFBTSxHQUFHLEtBQUssS0FBSyxNQUFNLE9BQU8sR0FBRyxHQUFHLEtBQUssS0FBSyxNQUFNLE9BQU8sR0FBRztBQUM3RixVQUFNLE9BQU8sRUFBRSxRQUFRLENBQUMsS0FBSyxLQUFLLEdBQUc7QUFDckMsUUFBSSxZQUFZLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQUssUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDdkUsYUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLO0FBQUUsWUFBTSxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksSUFBSSxPQUFPLEVBQUU7QUFBRyxVQUFJLFlBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFBSyxVQUFJLFNBQVMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFBRztBQUV4SyxVQUFNLFFBQVEsQ0FBQyxJQUFZLElBQVksWUFBcUI7QUFDMUQsWUFBTSxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxDQUFDO0FBQ3pFLFlBQU0sS0FBSyxFQUFFLFdBQVcsR0FBRyxLQUFLLElBQUk7QUFDcEMsVUFBSSxZQUFZLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3JDLGVBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQUUsY0FBTSxJQUFJLE1BQU0sS0FBSyxPQUFPLElBQUksTUFBTSxLQUFLO0FBQUksWUFBSSxTQUFTLEdBQUcsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO0FBQUEsTUFBRztBQUNsSCxZQUFNLEtBQUssRUFBRSxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsYUFBYTtBQUNqRCxlQUFTLElBQUksR0FBRyxLQUFLLElBQUksS0FBSztBQUM1QixjQUFNLEtBQUssTUFBTSxJQUFJLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sSUFBSSxNQUFNLEtBQUssS0FBSyxLQUFLO0FBRWxJLGNBQU0sUUFBUSxNQUFNLEtBQUssTUFBTTtBQUMvQixZQUFJLENBQUMsV0FBVyxDQUFDLE1BQU87QUFDeEIsY0FBTSxNQUFNLFVBQVUsS0FBTSxNQUFNLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxNQUFPLE1BQU0sVUFBVSxLQUFNLE1BQU0sSUFBSSxNQUFNLEtBQUssTUFBTSxPQUFPO0FBQzNILGlCQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQixnQkFBTSxNQUFNLElBQUksT0FBTyxLQUFNLElBQUksSUFBSyxNQUFNLE1BQU0sS0FBSyxJQUFJLElBQUksT0FBTyxJQUFJLE1BQU0sTUFBTSxJQUFJLElBQUksT0FBTyxJQUFJO0FBQ3pHLHFCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxnQkFBSSxVQUFVO0FBQUcsZ0JBQUksT0FBTyxJQUFJLElBQUksR0FBRztBQUFHLGdCQUFJLE9BQU8sSUFBSSxLQUFLLEdBQUcsR0FBRztBQUFHLGdCQUFJLE9BQU8sSUFBSSxLQUFLLElBQUksSUFBSSxHQUFHO0FBQUcsZ0JBQUksT0FBTyxJQUFJLEtBQUssSUFBSSxHQUFHO0FBQUcsZ0JBQUksVUFBVTtBQUFHLGdCQUFJLEtBQUs7QUFBQSxVQUFHO0FBQUEsUUFDck07QUFBQSxNQUNGO0FBRUEsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsS0FBSyxJQUFJLE1BQU0sR0FBRyxLQUFLLElBQUksSUFBSTtBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUs7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRO0FBQzNLLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJO0FBQzlELFVBQUksWUFBWSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUFLLFVBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLO0FBQUcsVUFBSSxTQUFTLEdBQUcsS0FBSyxJQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUs7QUFDcEksVUFBSSxZQUFZLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQUssVUFBSSxTQUFTLEdBQUcsS0FBSyxJQUFJLE1BQU0sR0FBRyxDQUFDO0FBQUcsVUFBSSxTQUFTLEdBQUcsS0FBSyxJQUFJLE1BQU0sR0FBRyxDQUFDO0FBRW5ILFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLElBQUksR0FBRyxLQUFLLElBQUksR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVEsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxhQUFhLElBQUksR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVEsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEtBQUs7QUFDL00sVUFBSSxZQUFZO0FBQUksVUFBSSxTQUFTLEdBQUcsS0FBSyxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUc7QUFDNUQsZUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFVBQVUsS0FBSyxLQUFLO0FBQ3pDLGNBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxNQUFNLE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSSxPQUFPLE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSSxNQUFNLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxPQUFPLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFDcEssY0FBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUcsV0FBRyxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztBQUFHLFdBQUcsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7QUFDbEosWUFBSSxZQUFZO0FBQUksbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksUUFBUSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLGNBQUksS0FBSztBQUFBLFFBQUc7QUFBQSxNQUMvSTtBQUNBLFVBQUksMkJBQTJCO0FBQy9CLGVBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQUUsY0FBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFBRyxZQUFJLFlBQVksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDO0FBQUssWUFBSSxTQUFTLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUM7QUFBQSxNQUFHO0FBQzlPLFVBQUksMkJBQTJCO0FBQUEsSUFDakM7QUFDQSxVQUFNLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDcEIsVUFBTSxJQUFJLEdBQUcsR0FBRyxLQUFLO0FBQUEsRUFDdkIsQ0FBQztBQUNIO0FBS0EsU0FBUyxRQUFRLEdBQW1DO0FBQ2xELFFBQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSTtBQUN4QyxRQUFNLElBQUksSUFBVSxrQkFBWSxHQUFHLEdBQUcsQ0FBQztBQUN2QyxRQUFNLElBQUksRUFBRSxhQUFhLFVBQVU7QUFDbkMsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxVQUFNLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUs7QUFDaEMsTUFBRSxLQUFLLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxNQUFNLEtBQUssTUFBTSxFQUFFO0FBQUcsTUFBRSxLQUFLLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxNQUFNLEtBQUssTUFBTSxFQUFFO0FBQUEsRUFDekY7QUFDQSxJQUFFLHFCQUFxQjtBQUN2QixJQUFFLFVBQVUsSUFBSSxLQUFLLElBQUksR0FBRyxFQUFFO0FBQzlCLFNBQU87QUFDVDtBQXdCQSxTQUFTLFNBQVMsTUFBYyxNQUFjLEdBQW9DO0FBQ2hGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTSxNQUFNLEVBQUUsT0FBTyxNQUFNLEtBQUssRUFBRSxNQUFNO0FBQ3hDLFVBQU0sSUFBSSxDQUFDLE1BQWM7QUFBRSxZQUFNLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQztBQUFHLGFBQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFBQSxJQUFLO0FBQ3hGLFFBQUksWUFBWSxFQUFFLEdBQUc7QUFBRyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUUvQyxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsVUFBVSxLQUFLLEtBQUs7QUFDekMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQzVELFlBQU0sS0FBSyxJQUFJLElBQUk7QUFDbkIsWUFBTSxJQUFJLEtBQUssT0FBTyxJQUFJLFFBQVEsT0FBTyxJQUFJLElBQUksT0FBTyxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQzlFLFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxTQUFHLGFBQWEsR0FBRyxRQUFRLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxJQUFJLEdBQUc7QUFDdkgsU0FBRyxhQUFhLEdBQUcsZUFBZTtBQUNsQyxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDdkk7QUFVQSxVQUFNLEtBQUssTUFBTSxLQUFLLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEtBQUssT0FBTyxJQUFJLElBQUksSUFBSyxDQUFDO0FBQ2pILGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxXQUFXLE1BQU0sS0FBSztBQUMzQyxVQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUk7QUFDL0IsVUFBSSxHQUFHLFVBQVUsSUFBSSxLQUFLLEVBQUUsZ0JBQWdCLE9BQU87QUFDakQsY0FBTSxJQUFJLEdBQUksSUFBSSxJQUFJLEdBQUcsU0FBVSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzFGLFlBQUksRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSTtBQUFHLFlBQUksRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSTtBQUFBLE1BQ3ZEO0FBQ0EsWUFBTSxJQUFJLE1BQU0sRUFBRSxjQUFjLFFBQVMsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRSxjQUFjO0FBQy9FLFlBQU0sSUFBSSxPQUFPLElBQUksUUFBUSxNQUFNLElBQUksSUFBSTtBQUMzQyxZQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUM7QUFDbEMsWUFBTSxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUs7QUFDN0IsVUFBSSxZQUFZLFFBQVEsS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsT0FBTyxJQUFJLEtBQUssRUFBRSxtQkFBbUIsS0FBSztBQUMxSixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUN4RCxZQUFJLFVBQVU7QUFDZCxpQkFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsZ0JBQU0sSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksR0FBRyxLQUFLLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDN0QsZ0JBQU0sS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSztBQUN2RSxjQUFJLE1BQU0sRUFBRyxLQUFJLE9BQU8sSUFBSSxFQUFFO0FBQUEsY0FBUSxLQUFJLE9BQU8sSUFBSSxFQUFFO0FBQUEsUUFDekQ7QUFDQSxZQUFJLFVBQVU7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUM1QjtBQUFBLElBQ0Y7QUFFQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsV0FBVyxLQUFLLEtBQUs7QUFDMUMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxNQUFPLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUk7QUFDL0YsWUFBTSxJQUFJLE1BQU0sTUFBTSxNQUFNLElBQUksSUFBSSxLQUFLLElBQUksT0FBTyxJQUFJLElBQUk7QUFDNUQsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRztBQUN0RCxTQUFHLGFBQWEsR0FBRyxRQUFRLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxLQUFLO0FBQ2pHLFNBQUcsYUFBYSxNQUFNLFFBQVEsS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQ3ZHLFNBQUcsYUFBYSxHQUFHLFFBQVEsS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLEtBQUs7QUFDakcsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRztBQUFBLElBQzlEO0FBT0EsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFNBQVMsSUFBSSxLQUFLO0FBQ3ZDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ3ZFLFlBQU0sS0FBSyxJQUFJLElBQUk7QUFDbkIsWUFBTSxJQUFJLEtBQUssT0FBTyxJQUFJLFFBQVEsTUFBTSxJQUFJLElBQUksT0FBTyxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQzdFLFVBQUksWUFBWSxRQUFRLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU8sSUFBSSxJQUFJLEdBQUk7QUFDaEgsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDO0FBQUEsSUFDN0Y7QUFDQSxRQUFJLFVBQVU7QUFDZCxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsYUFBYSxJQUFJLEtBQUs7QUFDM0MsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsTUFBTSxLQUFLLE9BQVEsSUFBSSxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksT0FBTyxNQUFNLEtBQUssS0FBSztBQUMzRyxZQUFNLEtBQUssSUFBSSxJQUFJO0FBQ25CLFlBQU0sSUFBSSxLQUFLLE9BQU8sSUFBSSxRQUFRLE1BQU0sSUFBSSxJQUFJLE9BQU8sTUFBTSxNQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ2pGLFVBQUksY0FBYyxRQUFRLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU8sSUFBSSxJQUFJLElBQUk7QUFDbEgsVUFBSSxZQUFZLE1BQU0sSUFBSSxJQUFJO0FBQzlCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQ3hELFlBQUksVUFBVTtBQUFHLFlBQUksT0FBTyxJQUFJLElBQUksSUFBSSxFQUFFO0FBQzFDLFlBQUksT0FBTyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUc7QUFBRyxZQUFJLE9BQU87QUFBQSxNQUNqRjtBQUFBLElBQ0Y7QUFFQSxRQUFJLEVBQUUsTUFBTTtBQUNWLFlBQU0sSUFBSSxFQUFFLE1BQU0sT0FBTyxFQUFFLFlBQVk7QUFDdkMsWUFBTSxPQUFPLEdBQUcsS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBSzFGLGlCQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsZUFBZSxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQWlCO0FBQ3pGLGNBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLE1BQU0sR0FBRyxPQUFPLE1BQU0sSUFBSSxDQUFDO0FBQ2xFLFdBQUcsYUFBYSxHQUFHLFFBQVEsSUFBSSxJQUFJLEVBQUUsWUFBWSxHQUFJLEdBQUc7QUFBRyxXQUFHLGFBQWEsR0FBRyxRQUFRLElBQUksS0FBSztBQUMvRixZQUFJLFlBQVk7QUFBSSxZQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLE1BQzdDO0FBQ0EsZUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFlBQVksS0FBSyxLQUFLO0FBQzNDLGNBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFDekMsY0FBTSxNQUFNLElBQUksSUFBSTtBQUNwQixjQUFNLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxRQUFRLE1BQU0sSUFBSTtBQUMvQyxjQUFNLE1BQU0sS0FBSyxNQUFPLElBQUksSUFBSTtBQUNoQyxjQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHO0FBQ3RELFdBQUcsYUFBYSxHQUFHLFFBQVEsSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksR0FBRztBQUFHLFdBQUcsYUFBYSxHQUFHLFFBQVEsSUFBSSxLQUFLO0FBQ2hHLFlBQUksWUFBWTtBQUNoQixtQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUc7QUFBQSxNQUM5RDtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSDtBQWtCQSxTQUFTLE9BQU8sR0FBeUIsR0FBVyxHQUFXLE9BQWUsT0FBTyxHQUF5QjtBQUM1RyxRQUFNLEtBQUssRUFBRSxhQUFhLElBQUk7QUFDOUIsUUFBTSxLQUFNLElBQUksS0FBSyxLQUFLLElBQUssT0FBTyxLQUFLLElBQUk7QUFDL0MsV0FBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLE9BQU8sSUFBSyxJQUFHLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUk7QUFDdEYsU0FBTztBQUNUO0FBSUEsU0FBUyxXQUFXLEtBQStCLEtBQW1CLElBQVksSUFBWSxJQUFZLElBQVksR0FBVyxNQUFjLE9BQWUsTUFBb0I7QUFDaEwsV0FBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsVUFBTSxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJO0FBQ2xGLFFBQUksWUFBWSxRQUFRLElBQUksSUFBSSxPQUFPLE9BQU8sS0FBSyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDbkUsUUFBSSxTQUFTLEdBQUcsSUFBSSxHQUFHLEtBQUssRUFBRTtBQUFBLEVBQ2hDO0FBQ0Y7QUFLQSxTQUFTLGVBQWUsS0FBK0IsS0FBbUIsR0FBVyxJQUFZLElBQVksR0FBVyxPQUFlLFNBQXVCO0FBQzVKLFdBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFVBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxNQUFNLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxPQUFPLElBQUksSUFBSTtBQUNyRSxVQUFNLElBQUksT0FBTyxlQUFlLGVBQWUsSUFBSSxPQUFPLFNBQVMsTUFBTSxJQUFJLElBQUksT0FBTyxXQUFXLE1BQU0sSUFBSSxJQUFJO0FBQ2pILFVBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUc7QUFDcEQsT0FBRyxhQUFhLEdBQUcsUUFBUSxDQUFDLEtBQUs7QUFBRyxPQUFHLGFBQWEsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxPQUFHLGFBQWEsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxPQUFHLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSztBQUN6SixRQUFJLFlBQVk7QUFDaEIsZUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUc7QUFBQSxFQUNqRTtBQUNGO0FBS0EsU0FBUyxjQUFjLEtBQStCLEtBQW1CLEdBQVcsT0FBbUIsSUFBWSxJQUFZLEdBQVcsTUFBb0I7QUFDNUosYUFBVyxDQUFDLElBQUksRUFBRSxLQUFLLE9BQU87QUFDNUIsVUFBTSxLQUFLLElBQUkscUJBQXFCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFLElBQUksR0FBRztBQUM3RSxPQUFHLGFBQWEsR0FBRyxrQkFBa0IsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLEdBQUc7QUFBRyxPQUFHLGFBQWEsR0FBRyxrQkFBa0I7QUFDdEcsUUFBSSxZQUFZO0FBQ2hCLGVBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFVBQUksVUFBVTtBQUFHLFVBQUksUUFBUSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsVUFBSSxLQUFLO0FBQUEsSUFBRztBQUNqSCxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixZQUFNLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLO0FBQ3hFLFVBQUksWUFBWSxrQkFBa0IsT0FBTyxJQUFJLElBQUksTUFBTSxRQUFRLENBQUMsQ0FBQztBQUNqRSxZQUFNLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ3pDLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUFBLElBQzNEO0FBQUEsRUFDRjtBQUNGO0FBT0EsU0FBUyxTQUFTLE1BQWMsTUFBMEM7QUFDeEUsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNLE9BQU8sWUFBWSxRQUFRO0FBQ2pDLFFBQUksWUFBWTtBQUFXLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBRWxELFVBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzlDLE9BQUcsYUFBYSxHQUFHLHNCQUFzQjtBQUFHLE9BQUcsYUFBYSxLQUFLLHdCQUF3QjtBQUFHLE9BQUcsYUFBYSxHQUFHLHNCQUFzQjtBQUNySSxRQUFJLFlBQVk7QUFBSSxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUMzQyxtQkFBZSxLQUFLLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxNQUFNLEdBQUk7QUFFaEQsVUFBTSxRQUFRLENBQUMsS0FBSyxNQUFPLElBQUksSUFBSSxNQUFPLEtBQUssT0FBTyxJQUFJLElBQUksS0FBSztBQUVuRSxVQUFNLFdBQVcsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO0FBQ2hDLGFBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxTQUFTLFFBQVEsSUFBSyxZQUFXLEtBQUssS0FBSyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxJQUFJLENBQUMsR0FBRyxLQUFLLE1BQU0sT0FBTyxJQUFJO0FBRTdILGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLE1BQU0sS0FBSyxPQUFPLElBQUksSUFBSTtBQUM5RCxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLEtBQUssR0FBRztBQUMxRCxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLElBQUksS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHO0FBQUEsSUFDaEU7QUFFQSxlQUFXLEtBQUssT0FBTztBQUNyQixZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxJQUFJLElBQUksTUFBTSxHQUFHLENBQUM7QUFDekQsU0FBRyxhQUFhLEdBQUcsa0JBQWtCO0FBQUcsU0FBRyxhQUFhLEdBQUcscUJBQXFCO0FBQ2hGLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJO0FBQzdELFVBQUksWUFBWTtBQUF1QixVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUNoRSxVQUFJLFlBQVk7QUFBMEIsVUFBSSxTQUFTLEdBQUcsSUFBSSxLQUFLLEdBQUcsQ0FBQztBQUN2RSxVQUFJLFlBQVk7QUFBdUIsVUFBSSxTQUFTLEdBQUcsSUFBSSxLQUFLLEdBQUcsR0FBRztBQUN0RSxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSTtBQUM3RCxTQUFHLGFBQWEsR0FBRyxxQkFBcUI7QUFBRyxTQUFHLGFBQWEsR0FBRyxrQkFBa0I7QUFDaEYsVUFBSSxZQUFZO0FBQUksVUFBSSxTQUFTLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJO0FBQUEsSUFDeEQ7QUFFQSxVQUFNLFFBQW9CLENBQUM7QUFDM0IsZUFBVyxLQUFLLE1BQU8sVUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUssT0FBTSxLQUFLLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssQ0FBQztBQUN4RyxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSyxPQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQzdELGtCQUFjLEtBQUssS0FBSyxHQUFHLE9BQU8sSUFBSSxLQUFNLElBQUksTUFBTSxJQUFJLEdBQUk7QUFBQSxFQUNoRSxDQUFDO0FBQ0g7QUFxQkEsU0FBUyxXQUFXLE1BQWMsTUFBYyxHQUFvQztBQUNsRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU0sS0FBYSxFQUFFLFdBQVcsR0FBRyxLQUFLLElBQUk7QUFDNUMsVUFBTSxRQUFnQixFQUFFLFNBQVMsS0FBSyxTQUFpQixFQUFFLFVBQVU7QUFDbkUsVUFBTSxPQUFlLEVBQUUsUUFBUSxDQUFDLEtBQUssR0FBRyxPQUFlLEVBQUUsUUFBUSxDQUFDLEtBQUs7QUFDdkUsVUFBTSxTQUFpQixFQUFFLFVBQVU7QUFDbkMsVUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQWMsRUFBRSxXQUFXLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDekQsUUFBSSxZQUFZO0FBQVcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFJbEQsVUFBTSxRQUFvQixDQUFDO0FBQzNCLGFBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxLQUFLO0FBQzVCLFlBQU0sTUFBZ0IsQ0FBQztBQUN2QixVQUFJLElBQUk7QUFDUixlQUFTLElBQUksR0FBRyxLQUFLLEdBQUcsS0FBSztBQUMzQixZQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRyxNQUFLLElBQUksSUFBSSxJQUFJLEtBQUssU0FBUztBQUM5RSxZQUFJLEtBQUssSUFBSSxLQUFLLENBQUM7QUFBQSxNQUNyQjtBQUNBLFlBQU0sS0FBSyxHQUFHO0FBQUEsSUFDaEI7QUFFQSxhQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQixZQUFNLEtBQUssSUFBSTtBQUVmLFlBQU0sSUFBSSxJQUFJLFNBQVMsSUFBSTtBQUMzQixZQUFNLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQztBQUM1QixVQUFJLFlBQVksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDO0FBQ3pFLFVBQUksU0FBUyxHQUFHLEtBQUssU0FBUyxLQUFLLEdBQUcsR0FBRyxLQUFLLElBQUksU0FBUyxLQUFLLENBQUM7QUFFakUsZUFBUyxJQUFJLEdBQUcsSUFBSSxPQUFPLEtBQUs7QUFDOUIsY0FBTSxJQUFJLElBQUksSUFBSTtBQUNsQixjQUFNLElBQUksT0FBTyxJQUFJLEtBQUssT0FBTztBQUNqQyxjQUFNLE9BQU8sSUFBSSxVQUFVLE1BQU0sSUFBSSxJQUFJO0FBQ3pDLGNBQU0sSUFBSSxPQUFPLElBQUksSUFBSTtBQUN6QixjQUFNLE9BQU8sSUFBSSxJQUFJO0FBQ3JCLFlBQUksWUFBWSxPQUFPLFFBQVEsS0FBSyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxNQUMvRixxQkFBcUIsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDO0FBQy9ELGNBQU0sT0FBTyxLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUk7QUFDdkMsY0FBTSxPQUFPLE1BQU0sSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLElBQUk7QUFDdEUsWUFBSSxTQUFTLEdBQUcsTUFBTSxHQUFHLEtBQUssSUFBSSxHQUFHLE9BQU8sSUFBSSxDQUFDO0FBR2pELGNBQU0sT0FBZSxFQUFFLFFBQVE7QUFDL0IsWUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE1BQU07QUFDNUIsZ0JBQU0sSUFBSSxLQUFLLFFBQVEsTUFBTSxJQUFJLElBQUk7QUFDckMsY0FBSSxVQUFVO0FBQUcsY0FBSSxPQUFPLEdBQUcsSUFBSTtBQUFHLGNBQUksT0FBTyxJQUFJLEdBQUcsSUFBSTtBQUFHLGNBQUksT0FBTyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUM7QUFBRyxjQUFJLFVBQVU7QUFBRyxjQUFJLEtBQUs7QUFDMUgsY0FBSSxZQUFZLGtCQUFrQixNQUFPLElBQUksSUFBSSxNQUFNLFFBQVEsQ0FBQyxDQUFDO0FBQ2pFLGNBQUksU0FBUyxJQUFJLEdBQUcsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHO0FBQUEsUUFDMUM7QUFBQSxNQUNGO0FBR0EsZUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFNBQVMsSUFBSSxLQUFLO0FBQ3ZDLGNBQU0sSUFBSSxJQUFJLElBQUk7QUFDbEIsWUFBSSxZQUFZLGtCQUFrQixNQUFPLElBQUksSUFBSSxNQUFNLFFBQVEsQ0FBQyxDQUFDO0FBQ2pFLFlBQUksU0FBUyxHQUFHLEtBQUssS0FBSyxLQUFLLEdBQUcsTUFBTSxNQUFNLElBQUksSUFBSSxJQUFJO0FBQUEsTUFDNUQ7QUFFQSxZQUFNLE9BQU8sRUFBRSxRQUFRO0FBQ3ZCLGVBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxLQUFLO0FBQzdCLGNBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDN0MsWUFBSSxZQUFZLGtCQUFrQixNQUFPLElBQUksSUFBSSxNQUFNLFFBQVEsQ0FBQyxDQUFDO0FBQ2pFLFlBQUksU0FBUyxHQUFHLEtBQUssS0FBSyxNQUFNLEdBQUcsTUFBTSxNQUFNLElBQUksSUFBSSxJQUFJO0FBQUEsTUFDN0Q7QUFBQSxJQUNGO0FBTUEsYUFBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLEtBQUs7QUFDNUIsZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsY0FBTSxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUM7QUFDckIsY0FBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsS0FBSyxLQUFLLE1BQU0sR0FBRyxFQUFFO0FBQzVELFdBQUcsYUFBYSxHQUFHLHFCQUFxQjtBQUFHLFdBQUcsYUFBYSxHQUFHLHFCQUFxQixFQUFFLE9BQU8sTUFBTSxRQUFRLENBQUMsQ0FBQyxHQUFHO0FBQy9HLFlBQUksWUFBWTtBQUNoQixtQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsR0FBRyxLQUFLLEtBQUssT0FBTyxJQUFJLEdBQUcsS0FBSyxJQUFJO0FBQzNFLGNBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLElBQUksR0FBRyxLQUFLLEtBQUssSUFBSTtBQUM1RCxXQUFHLGFBQWEsR0FBRyxrQkFBa0IsRUFBRSxVQUFVLE1BQU0sUUFBUSxDQUFDLENBQUMsR0FBRztBQUNwRSxXQUFHLGFBQWEsR0FBRyxrQkFBa0I7QUFDckMsWUFBSSxZQUFZO0FBQ2hCLG1CQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSTtBQUFBLE1BQ2pFO0FBQUEsSUFDRjtBQUdBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxRQUFRLElBQUksS0FBSztBQUN0QyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDNUQsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFlBQU0sSUFBSSxPQUFPLElBQUksSUFBSTtBQUN6QixTQUFHLGFBQWEsR0FBRyxvQkFBb0IsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHO0FBQUcsU0FBRyxhQUFhLEdBQUcscUJBQXFCO0FBQ2pHLFVBQUksMkJBQTJCO0FBQVksVUFBSSxZQUFZO0FBQzNELGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUNySSxVQUFJLDJCQUEyQjtBQUFBLElBQ2pDO0FBRUEsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLE9BQU8sSUFBSSxLQUFLO0FBQ3JDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLElBQUksSUFBSTtBQUM1RCxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsWUFBTSxJQUFJLE1BQU8sSUFBSSxJQUFJO0FBQ3pCLFNBQUcsYUFBYSxHQUFHLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsS0FBSyxrQkFBa0IsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxrQkFBa0I7QUFDM0osVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3ZJO0FBRUEsbUJBQWUsS0FBSyxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsV0FBVyxJQUFJLEtBQU0sSUFBSTtBQUFBLEVBQy9ELENBQUM7QUFDSDtBQU9BLFNBQVMsU0FBUyxNQUFjLE1BQWMsR0FBb0M7QUFDaEYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNsRCxVQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLEtBQUssRUFBRSxTQUFTLEdBQUcsQ0FBQztBQUV6RCxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxPQUFPO0FBQ2pDLFVBQUksWUFBWSxrQkFBa0IsTUFBTyxJQUFJLElBQUksTUFBTSxRQUFRLENBQUMsQ0FBQztBQUFLLFVBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzdGLFVBQUksWUFBWTtBQUEwQixVQUFJLFNBQVMsSUFBSSxHQUFHLEdBQUcsS0FBSyxJQUFJLEdBQUcsUUFBUSxJQUFJLEdBQUcsQ0FBQztBQUFBLElBQy9GO0FBQ0EsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssT0FBTztBQUNqQyxVQUFJLFlBQVksa0JBQWtCLE1BQU8sSUFBSSxJQUFJLE1BQU0sUUFBUSxDQUFDLENBQUM7QUFBSyxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM3RixVQUFJLFlBQVk7QUFBMEIsVUFBSSxTQUFTLEdBQUcsSUFBSSxHQUFHLEdBQUcsS0FBSyxJQUFJLEdBQUcsUUFBUSxJQUFJLENBQUM7QUFBQSxJQUMvRjtBQUVBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxXQUFXLElBQUksS0FBSztBQUN6QyxZQUFNLFFBQVEsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksSUFBSTtBQUNyRixVQUFJLFlBQVk7QUFDaEIsVUFBSSxZQUFZO0FBQ2hCLFVBQUksT0FBTztBQUFFLFlBQUksU0FBUyxJQUFJLE1BQU0sR0FBRyxHQUFHLEtBQUssR0FBRztBQUFHLFlBQUksWUFBWTtBQUF1QixZQUFJLFNBQVMsSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLEtBQUssQ0FBQztBQUFBLE1BQUcsT0FDbkk7QUFBRSxZQUFJLFNBQVMsR0FBRyxJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUc7QUFBRyxZQUFJLFlBQVk7QUFBdUIsWUFBSSxTQUFTLElBQUksS0FBSyxJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUc7QUFBQSxNQUFHO0FBQUEsSUFDcEk7QUFFQSxtQkFBZSxLQUFLLEtBQUssR0FBRyxHQUFHLEdBQUcsRUFBRSxXQUFXLElBQUksS0FBTSxJQUFJO0FBQUEsRUFDL0QsQ0FBQztBQUNIO0FBU0EsU0FBUyxTQUFTLE1BQWMsTUFBYyxHQUFvQztBQUNoRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU0sT0FBTyxZQUFZLFFBQVE7QUFDakMsUUFBSSxZQUFZO0FBQVcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbEQsbUJBQWUsS0FBSyxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsV0FBVyxJQUFJLE1BQU0sR0FBSTtBQUM3RCxlQUFXLEtBQUssS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsU0FBUyxLQUFLLE1BQU0sT0FBTyxJQUFJO0FBRWxFLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxTQUFTLElBQUksS0FBSztBQUN2QyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUk7QUFDN0QsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFDeEQsWUFBSSxZQUFZO0FBQ2hCLFlBQUksVUFBVTtBQUFHLFlBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUN0RixZQUFJLGNBQWM7QUFBdUIsWUFBSSxZQUFZO0FBQ3pELGlCQUFTLElBQUksR0FBRyxLQUFLLEdBQUcsS0FBSztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksTUFBTSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLE9BQU87QUFBQSxRQUFHO0FBQUEsTUFDeEo7QUFBQSxJQUNGO0FBRUEsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFVBQVUsSUFBSSxLQUFLO0FBQ3hDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSTtBQUM3RCxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLEtBQUssR0FBRztBQUMxRCxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLElBQUksS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHO0FBQUEsSUFDaEU7QUFDQSxVQUFNLFFBQW9CLENBQUM7QUFDM0IsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFNBQVMsSUFBSSxJQUFLLE9BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7QUFDMUUsa0JBQWMsS0FBSyxLQUFLLEdBQUcsT0FBTyxJQUFJLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSTtBQUFBLEVBQ2hFLENBQUM7QUFDSDtBQXVCQSxTQUFTLFNBQVMsTUFBYyxNQUFjLEdBQW9DO0FBQ2hGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTUEsT0FBTSxDQUFDLE1BQWdCLEdBQUcsS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFHLFVBQU0sT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLFFBQVEsRUFBRSxTQUFTLE1BQU0sT0FBTyxFQUFFLFFBQVEsTUFBTSxPQUFPLEVBQUUsUUFBUTtBQUNuRyxVQUFNLE9BQU8sQ0FBQyxTQUEyQztBQUN2RCxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxNQUFLLElBQUksRUFBRTtBQUFBLElBQ3ZFO0FBQ0EsVUFBTSxPQUFPLENBQUMsR0FBYSxHQUFXLEdBQVcsR0FBVyxHQUFXLEtBQUssR0FBRyxNQUFNLE1BQU07QUFDekYsWUFBTSxJQUFJLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ25ELFFBQUUsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsUUFBRSxhQUFhLE1BQU0sUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRztBQUM1RixRQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxLQUFLO0FBQ3JDLFVBQUksWUFBWTtBQUNoQixXQUFLLENBQUMsSUFBSSxPQUFPO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRyxDQUFDO0FBQUEsSUFDaEg7QUFRQSxVQUFNLEtBQUssRUFBRSxVQUFVLEdBQUcsT0FBTyxFQUFFLFlBQVk7QUFDL0MsUUFBSSxLQUFLLEdBQUc7QUFDVixlQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixjQUFNLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsS0FBSztBQUNyRCxjQUFNLElBQUksUUFBUSxJQUFJLFFBQVE7QUFDOUIsWUFBSSxZQUFZLE9BQU9BLEtBQUksS0FBSyxJQUFJLENBQUMsTUFBYyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQUssWUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxNQUN4RjtBQUFBLElBQ0YsT0FBTztBQUFFLFVBQUksWUFBWSxPQUFPQSxLQUFJLElBQUksQ0FBQztBQUFLLFVBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFBRztBQUd4RSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsU0FBUyxLQUFLO0FBQ25DLFdBQUssTUFBTSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxLQUFLLE9BQU8sSUFBSSxJQUFJLFFBQVMsRUFBRSxjQUFjLElBQUksTUFBTyxJQUFJLElBQUksTUFBTSxNQUFNLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLEVBQUU7QUFLM0ksYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLGdCQUFnQixLQUFLLEtBQUs7QUFDL0MsWUFBTSxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxLQUFLLE9BQU8sSUFBSSxJQUFJLFNBQVMsRUFBRSxjQUFjO0FBQ3hGLFdBQUssT0FBTyxJQUFJLElBQUksS0FBSyxFQUFFLGNBQWMsUUFBUSxJQUFJLElBQUksS0FBTSxNQUFNLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLEVBQUU7QUFDakcsZUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsY0FBTSxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLO0FBQzNELGNBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLElBQUk7QUFDNUUsWUFBSSxZQUFZLFFBQVFBLEtBQUksS0FBSyxDQUFDLElBQUksTUFBTSxJQUFJLElBQUksSUFBSTtBQUN4RCxhQUFLLENBQUMsSUFBSSxPQUFPO0FBQUUsY0FBSSxVQUFVO0FBQUcsY0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxLQUFLO0FBQUEsUUFBRyxDQUFDO0FBQUEsTUFDL0Y7QUFBQSxJQUNGO0FBSUEsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLGdCQUFnQixLQUFLLEtBQUs7QUFDL0MsWUFBTSxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQy9ELFdBQUssTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxLQUFNLE1BQU0sSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssRUFBRTtBQUM5RSxlQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsb0JBQW9CLEtBQUssS0FBSztBQUNuRCxjQUFNLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxHQUFHLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJO0FBQ3RELGNBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLElBQUk7QUFDNUUsWUFBSSxZQUFZLFFBQVFBLEtBQUksSUFBSSxDQUFDLElBQUksT0FBTyxJQUFJLElBQUksSUFBSTtBQUN4RCxhQUFLLENBQUMsSUFBSSxPQUFPO0FBQUUsY0FBSSxVQUFVO0FBQUcsY0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxLQUFLO0FBQUEsUUFBRyxDQUFDO0FBQUEsTUFDL0Y7QUFDQSxVQUFJLElBQUksSUFBSSxLQUFLO0FBQ2YsY0FBTSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksTUFBTyxNQUFNLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDM0QsY0FBTSxJQUFJLElBQUkscUJBQXFCLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRztBQUNyRCxVQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksR0FBRztBQUFHLFVBQUUsYUFBYSxHQUFHLFFBQVFBLEtBQUksSUFBSSxDQUFDLEtBQUs7QUFDeEcsWUFBSSxZQUFZO0FBQ2hCLGFBQUssQ0FBQyxPQUFPLElBQUksU0FBUyxLQUFLLE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQUEsTUFDckU7QUFBQSxJQUNGO0FBSUEsVUFBTSxRQUFRLEVBQUUsU0FBUztBQUN6QixhQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sS0FBSztBQUM5QixZQUFNLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxPQUFPLElBQUksT0FBTyxLQUFLLElBQUksSUFBSTtBQUM3RCxZQUFNLElBQUksS0FBSyxRQUFRLE1BQU0sSUFBSSxPQUFPLElBQUksSUFBSTtBQUNoRCxVQUFJLGNBQWMsUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQUssVUFBSSxZQUFZLE1BQU0sSUFBSSxJQUFJO0FBQ3hFLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLE9BQU8sSUFBSSxJQUFJLENBQUM7QUFBRyxZQUFJLE9BQU8sSUFBSSxJQUFJLENBQUM7QUFBRyxZQUFJLE9BQU87QUFBQSxNQUFHO0FBQUEsSUFDOUc7QUFBQSxFQUNGLENBQUM7QUFDSDtBQVNBLFNBQVMsVUFBVSxNQUFjLE1BQTBDO0FBQ3pFLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTSxPQUFPLFlBQVksUUFBUTtBQUNqQyxRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUVsRCxVQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM5QyxPQUFHLGFBQWEsR0FBRyxxQkFBcUI7QUFBRyxPQUFHLGFBQWEsS0FBSyx3QkFBd0I7QUFBRyxPQUFHLGFBQWEsR0FBRyxxQkFBcUI7QUFDbkksUUFBSSxZQUFZO0FBQUksUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDM0MsbUJBQWUsS0FBSyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksS0FBTSxJQUFJO0FBQ2hELFVBQU0sT0FBTyxLQUFLLE1BQU8sSUFBSSxJQUFJO0FBQ2pDLGVBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFHLFlBQVcsS0FBSyxLQUFLLEdBQUcsR0FBRyxJQUFJLElBQUksS0FBSyxNQUFNLE9BQU8sSUFBSTtBQUN4RyxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUk7QUFDN0QsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUc7QUFDMUQsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssR0FBRztBQUFBLElBQ2xFO0FBRUE7QUFDRSxZQUFNLElBQUk7QUFDVixZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxJQUFJLElBQUksTUFBTSxHQUFHLENBQUM7QUFDekQsU0FBRyxhQUFhLEdBQUcsa0JBQWtCO0FBQUcsU0FBRyxhQUFhLEdBQUcscUJBQXFCO0FBQ2hGLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJO0FBQzdELFVBQUksWUFBWTtBQUF1QixVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM5RCxVQUFJLFlBQVk7QUFBMEIsVUFBSSxTQUFTLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNyRSxVQUFJLFlBQVk7QUFBdUIsVUFBSSxTQUFTLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ3BFO0FBRUEsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsWUFBTSxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxLQUFLLFFBQVEsSUFBSSxJQUFJLE9BQU8sS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLE1BQU0sT0FBTyxJQUFJLElBQUksT0FBTztBQUM1SCxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQzNCLGNBQU0sT0FBTyxJQUFJLHFCQUFxQixJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUUsSUFBSSxHQUFHO0FBQ3pGLGFBQUssYUFBYSxHQUFHLHFCQUFxQjtBQUFHLGFBQUssYUFBYSxLQUFLLHFCQUFxQjtBQUFHLGFBQUssYUFBYSxHQUFHLGtCQUFrQjtBQUNuSSxZQUFJLFlBQVk7QUFBTSxZQUFJLFVBQVU7QUFBRyxZQUFJLFFBQVEsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFDbkgsWUFBSSxZQUFZO0FBQXVCLFlBQUksVUFBVTtBQUFHLFlBQUksUUFBUSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQ3hILFlBQUksWUFBWTtBQUFxQixZQUFJLFVBQVU7QUFBRyxZQUFJLFFBQVEsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQzNKO0FBQ0EsZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsY0FBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSSxNQUFNLElBQUksTUFBTSxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSTtBQUMzRixZQUFJLFlBQVk7QUFDaEIsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLEtBQUs7QUFBQSxRQUFHO0FBQUEsTUFDckc7QUFBQSxJQUNGO0FBRUEsa0JBQWMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLE9BQU8sSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxNQUFNLElBQUksTUFBTSxJQUFJLElBQUk7QUFBQSxFQUNqSCxDQUFDO0FBQ0g7QUFPQSxTQUFTLFNBQVMsTUFBYyxNQUEwQztBQUN4RSxTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFFBQUksWUFBWTtBQUFXLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2xELFVBQU0sSUFBSSxJQUFJLFFBQVEsSUFBSSxHQUFHLE1BQU07QUFDbkMsVUFBTSxLQUFLLEtBQUssSUFBSSxHQUFHLElBQUk7QUFDM0IsUUFBSSxLQUFLO0FBQ1QsYUFBUyxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSztBQUMvQixZQUFNLEtBQUssSUFBSTtBQUNmLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFFM0IsWUFBSSxjQUFjO0FBQXVCLFlBQUksWUFBWSxRQUFRO0FBQ2pFLFlBQUksVUFBVTtBQUFHLFlBQUksT0FBTyxJQUFJLEVBQUU7QUFBRyxZQUFJLE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQztBQUFHLFlBQUksT0FBTztBQUU3RSxZQUFJLGNBQWM7QUFBMEIsWUFBSSxZQUFZLFFBQVE7QUFDcEUsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLEtBQUssUUFBUSxLQUFLLEVBQUU7QUFBRyxZQUFJLE9BQU8sS0FBSyxRQUFRLE1BQU0sSUFBSSxLQUFLLENBQUM7QUFBRyxZQUFJLE9BQU87QUFFekcsWUFBSSxjQUFjO0FBQXVCLFlBQUksWUFBWTtBQUN6RCxpQkFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsZ0JBQU0sS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssUUFBUSxNQUFNLE9BQU8sS0FBSyxNQUFNO0FBQ2hGLGNBQUksVUFBVTtBQUFHLGNBQUksT0FBTyxLQUFLLFFBQVEsTUFBTSxLQUFLLFFBQVEsSUFBSTtBQUFHLGNBQUksT0FBTyxLQUFLLFFBQVEsTUFBTSxLQUFLLFFBQVEsSUFBSTtBQUFHLGNBQUksT0FBTztBQUFBLFFBQ2xJO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFDQSxRQUFJLFFBQVE7QUFFWixhQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQUM1QixZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUk7QUFDakMsVUFBSSxZQUFZLElBQUksSUFBSSxNQUFNLHdCQUF3QjtBQUN0RCxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQztBQUFBLElBQ3JDO0FBQ0EsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLElBQUksSUFBSTtBQUM3QyxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ2xELFNBQUcsYUFBYSxHQUFHLGtCQUFrQjtBQUFHLFNBQUcsYUFBYSxLQUFLLHFCQUFxQjtBQUFHLFNBQUcsYUFBYSxHQUFHLGtCQUFrQjtBQUMxSCxVQUFJLFlBQVk7QUFBSSxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksR0FBRyxDQUFDO0FBQUEsSUFDNUU7QUFBQSxFQUNGLENBQUM7QUFDSDtBQThCQSxTQUFTLGFBQWEsR0FBOEI7QUFDbEQsUUFBTSxNQUFrQixFQUFFLE1BQU0sSUFBSSxJQUFJLFFBQVEsT0FBTyxFQUFFLE1BQU0sTUFBTSxFQUFFLFFBQVEsS0FBSyxTQUFTLFFBQVEsS0FBSztBQUMxRyxRQUFNLE1BQU0sRUFBRSxXQUFXLEdBQUcsT0FBTyxFQUFFLFlBQVk7QUFDakQsUUFBTSxTQUFTLEtBQUssVUFBVTtBQUU5QixRQUFNLEtBQUssQ0FBQyxNQUFzRTtBQUNoRixVQUFNLElBQUksSUFBSTtBQUNkLFFBQUksS0FBSyxTQUFTLE9BQU87QUFDdkIsWUFBTSxJQUFJLEtBQUssUUFBUSxLQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTztBQUN6RCxZQUFNLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDcEIsYUFBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxLQUFLLElBQUksRUFBRSxHQUFHLElBQUksTUFBTSxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHO0FBQUEsSUFDdEc7QUFDQSxVQUFNLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssS0FBSyxTQUFTO0FBQzNELFdBQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRTtBQUFBLEVBQzdEO0FBRUEsUUFBTSxNQUFnQixDQUFDLENBQUM7QUFDeEIsV0FBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUssS0FBSSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsSCxRQUFNLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN6RixRQUFNLE1BQWdCLENBQUMsR0FBRyxLQUFlLENBQUM7QUFDMUMsUUFBTSxNQUFNLENBQUMsR0FBYSxHQUFhLEdBQWEsSUFBYyxJQUFjLE9BQWlCO0FBQy9GLFFBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFHLE9BQUcsS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRTtBQUFBLEVBQ3pEO0FBQ0EsTUFBSSxPQUFPLEdBQUcsQ0FBQztBQUNmLFdBQVMsSUFBSSxHQUFHLEtBQUssS0FBSyxLQUFLO0FBQzdCLFVBQU0sTUFBTSxHQUFHLENBQUM7QUFDaEIsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsWUFBTSxLQUFLLElBQUksS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUM7QUFDOUMsWUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLE1BQU0sTUFBTSxNQUFNLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSztBQUMzRCxZQUFNLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ3pHLFlBQU0sS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksSUFBSTtBQUV0QyxVQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pDLFVBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFBQSxJQUMzQztBQUNBLFdBQU87QUFBQSxFQUNUO0FBQ0EsTUFBSSxFQUFFLFdBQVcsT0FBTztBQUN0QixVQUFNLE1BQVksaUJBQVcsaUJBQWlCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBVSxjQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0YsVUFBTSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHO0FBQzdCLGVBQVcsQ0FBQyxJQUFJLElBQUksRUFBRSxLQUFLLEtBQUs7QUFDOUIsWUFBTSxJQUFJLENBQUMsR0FBUSxNQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pELFlBQU0sSUFBSSxDQUFDLE1BQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRztBQUUxRCxVQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUs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
