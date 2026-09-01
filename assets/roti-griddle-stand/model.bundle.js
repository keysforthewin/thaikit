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

// assets/roti-griddle-stand/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createModel: () => createModel,
  createObjectModel: () => createObjectModel,
  createRotiGriddleStandModel: () => createRotiGriddleStandModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "roti-griddle-stand",
  "name": "Roti Griddle Stand",
  "exportName": "RotiGriddleStand",
  "envelope": "Envelope 1.08 x 1.4 x 0.7 m, origin base-center, +Y up, +Z the open front.\n * Budget (medium): <=2000 triangles, <=2 draw calls, <=2 materials, <=4 unique geometries.",
  "materials": [
    {
      "id": "steel",
      "color": 16777215,
      "roughness": 0.4,
      "metalness": 0.3,
      "vertexColors": true
    },
    {
      "id": "iron",
      "color": 16777215,
      "roughness": 0.85,
      "metalness": 0.1,
      "vertexColors": true
    }
  ],
  "tiles": [
    {
      "material": "steel",
      "kind": "grime",
      "size": 256,
      "seed": 181,
      "wash": [
        0.58,
        0.55,
        0.52
      ],
      "washAlpha": 0.52,
      "coverage": 0.52,
      "streaks": 30,
      "blotches": 64
    },
    {
      "material": "iron",
      "kind": "rust",
      "size": 256,
      "seed": 182,
      "ratio": [
        0.85,
        0.62,
        0.42
      ],
      "density": 30
    }
  ],
  "geometry": {
    "components": [
      {
        "id": "cart",
        "name": "Stainless cabinet, counter, tray, bottles, gas bottle and casters",
        "material": "steel",
        "uv": "height",
        "uvScale": 0.7,
        "collider": {
          "shape": "box",
          "localCenter": [
            0,
            0.7,
            0
          ],
          "halfExtents": [
            0.54,
            0.7,
            0.35
          ],
          "notes": "Declared on the asset as box: the whole cart envelope."
        },
        "boxes": [
          [
            6841440,
            0,
            0.5800000000000001,
            -0.33999999999999997,
            1.06,
            0.9600000000000001,
            0.02
          ],
          [
            9868945,
            -0.53,
            0.5800000000000001,
            0,
            0.02,
            0.9600000000000001,
            0.7
          ],
          [
            9868945,
            0.53,
            0.5800000000000001,
            0,
            0.02,
            0.9600000000000001,
            0.7
          ],
          [
            6841440,
            0,
            0.11,
            0,
            1.04,
            0.02,
            0.6799999999999999
          ],
          [
            11052962,
            0,
            1.072,
            0,
            1.1,
            0.024,
            0.72
          ],
          [
            6841440,
            0,
            0.9800000000000001,
            0.344,
            1.04,
            0.12,
            0.012
          ],
          [
            6841440,
            0.3,
            0.9800000000000001,
            0.354,
            0.1,
            0.012,
            0.012
          ],
          [
            5130822,
            0,
            0.5800000000000001,
            -0.31499999999999995,
            1.02,
            0.92,
            0.012
          ],
          [
            5130822,
            -0.505,
            0.5800000000000001,
            0.01,
            0.012,
            0.92,
            0.6299999999999999
          ],
          [
            5130822,
            0.505,
            0.5800000000000001,
            0.01,
            0.012,
            0.92,
            0.6299999999999999
          ],
          [
            5130822,
            0,
            0.132,
            0.01,
            1.01,
            0.012,
            0.6299999999999999
          ],
          [
            5130822,
            0,
            1.04,
            0.01,
            1.01,
            0.012,
            0.6299999999999999
          ],
          [
            9868945,
            0,
            1.22,
            -0.32999999999999996,
            1.02,
            0.016,
            0.016
          ],
          [
            9868945,
            -0.49000000000000005,
            1.1500000000000001,
            -0.32999999999999996,
            0.016,
            0.16,
            0.016
          ],
          [
            9868945,
            0.49000000000000005,
            1.1500000000000001,
            -0.32999999999999996,
            0.016,
            0.16,
            0.016
          ],
          [
            12105908,
            0.36,
            1.095,
            -0.08,
            0.4,
            0.022,
            0.3
          ],
          [
            10132117,
            0.36,
            1.11,
            -0.08,
            0.36,
            0.01,
            0.26
          ],
          [
            3026219,
            -0.46,
            0.05,
            -0.26999999999999996,
            0.05,
            0.1,
            0.05
          ],
          [
            3026219,
            0.46,
            0.05,
            -0.26999999999999996,
            0.05,
            0.1,
            0.05
          ],
          [
            3026219,
            -0.46,
            0.05,
            0.26999999999999996,
            0.05,
            0.1,
            0.05
          ],
          [
            3026219,
            0.46,
            0.05,
            0.26999999999999996,
            0.05,
            0.1,
            0.05
          ]
        ],
        "cyls": [
          {
            "at": [
              0.05,
              0.42,
              0.05
            ],
            "rt": 0.15,
            "rb": 0.15,
            "h": 0.6,
            "seg": 14,
            "hex": 12073006
          },
          {
            "at": [
              0.05,
              0.75,
              0.05
            ],
            "rt": 0.06,
            "rb": 0.1,
            "h": 0.06,
            "seg": 12,
            "hex": 12073006
          },
          {
            "at": [
              0.05,
              0.82,
              0.05
            ],
            "rt": 0.03,
            "rb": 0.03,
            "h": 0.08,
            "seg": 8,
            "hex": 9079430
          },
          {
            "at": [
              0.14,
              1.214,
              -0.22
            ],
            "rt": 0.03,
            "rb": 0.03,
            "h": 0.26,
            "seg": 10,
            "hex": 14191162
          },
          {
            "at": [
              0.22,
              1.229,
              -0.24
            ],
            "rt": 0.03,
            "rb": 0.03,
            "h": 0.29,
            "seg": 10,
            "hex": 15262940
          },
          {
            "at": [
              0.3,
              1.239,
              -0.22
            ],
            "rt": 0.03,
            "rb": 0.03,
            "h": 0.31,
            "seg": 10,
            "hex": 15262940
          },
          {
            "at": [
              0.42,
              1.1840000000000002,
              -0.22
            ],
            "rt": 0.04,
            "rb": 0.04,
            "h": 0.2,
            "seg": 10,
            "hex": 11842736
          },
          {
            "at": [
              0.24,
              1.135,
              -0.16
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 0.05,
            "seg": 10,
            "hex": 14207144
          },
          {
            "at": [
              0.36,
              1.135,
              -0.16
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 0.05,
            "seg": 10,
            "hex": 14207144
          },
          {
            "at": [
              0.3,
              1.135,
              -0.06
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 0.05,
            "seg": 10,
            "hex": 14207144
          },
          {
            "at": [
              0.42,
              1.135,
              -0.06
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 0.05,
            "seg": 10,
            "hex": 14207144
          },
          {
            "at": [
              0.21,
              1.135,
              -0.2
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 0.05,
            "seg": 10,
            "hex": 14207144
          },
          {
            "at": [
              0.32999999999999996,
              1.135,
              -0.2
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 0.05,
            "seg": 10,
            "hex": 14207144
          },
          {
            "at": [
              0.27,
              1.135,
              -0.1
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 0.05,
            "seg": 10,
            "hex": 14207144
          },
          {
            "at": [
              0.38999999999999996,
              1.135,
              -0.1
            ],
            "rt": 0.045,
            "rb": 0.045,
            "h": 0.05,
            "seg": 10,
            "hex": 14207144
          }
        ]
      },
      {
        "id": "griddle",
        "name": "Cast griddle plate and spatula",
        "material": "iron",
        "parent": "cart",
        "lathes": [
          {
            "pts": [
              [
                0,
                1.084
              ],
              [
                0.3,
                1.084
              ],
              [
                0.3,
                1.116
              ],
              [
                0.286,
                1.122
              ],
              [
                0.27,
                1.11
              ],
              [
                0.255,
                1.103
              ],
              [
                0,
                1.1
              ]
            ],
            "seg": 32,
            "at": [
              -0.22,
              0,
              0.03
            ],
            "hex": 4861466
          },
          {
            "pts": [
              [
                0.18,
                1.1016000000000001
              ],
              [
                0.24599999999999997,
                1.1025
              ],
              [
                0.24599999999999997,
                1.1035000000000001
              ],
              [
                0.18,
                1.1026
              ]
            ],
            "seg": 32,
            "at": [
              -0.22,
              0,
              0.03
            ],
            "hex": 7160867
          }
        ],
        "boxes": [
          [
            10132118,
            0.07999999999999999,
            1.112,
            0.13,
            0.1,
            4e-3,
            0.08,
            0,
            0.5,
            0
          ],
          [
            3811866,
            0.19999999999999998,
            1.12,
            0.21,
            0.12,
            0.02,
            0.02,
            0,
            0.5,
            0
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
    const rgb = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const tone = o.tone ?? [0.72, 0.66, 0.58], m = s * 0.06;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.clouds ?? 26); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.08 + rnd() * 0.18), a = 0.04 + rnd() * 0.1;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb(tone)},${a})`);
      g2.addColorStop(1, `rgba(${rgb(tone)},0)`);
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
      g2.addColorStop(0, `rgba(${rgb(pc)},0.55)`);
      g2.addColorStop(0.6, `rgba(${rgb(pc)},0.3)`);
      g2.addColorStop(1, `rgba(${rgb(pc)},0)`);
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
      ctx.strokeStyle = light ? `rgba(255,250,240,${0.05 + rnd() * 0.1})` : `rgba(${rgb(tone)},${0.06 + rnd() * 0.14})`;
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
    const rgb = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [1, 1, 1], rust = o.rust ?? base, chalk = o.chalk ?? base;
    const run = o.run ?? rust;
    const wrap = (draw) => {
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) draw(dx, dy);
    };
    const blob = (c, x, y, r, a, ry = 1) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb(c)},${a})`);
      g.addColorStop(0.55, `rgba(${rgb(c)},${a * 0.45})`);
      g.addColorStop(1, `rgba(${rgb(c)},0)`);
      ctx.fillStyle = g;
      wrap((dx, dy) => {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r, r * ry, 0, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    ctx.fillStyle = `rgb(${rgb(base)})`;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (o.drift ?? 14); i++) {
      const c = rnd() < 0.5 ? rust : chalk;
      blob(c, rnd() * s, rnd() * s, s * (0.18 + rnd() * 0.3) * (o.driftScale ?? 1), 0.05 + rnd() * 0.07, 0.6 + rnd() * 0.8);
    }
    for (let k = 0; k < (o.rustClusters ?? 16); k++) {
      const cx = rnd() * s, cy = rnd() * s, cr = s * (0.04 + rnd() * 0.11) * (o.clusterScale ?? 1);
      blob(rust, cx, cy, cr, 0.3 + rnd() * 0.35, 0.7 + rnd() * 0.6);
      for (let i = 0; i < (o.specksPerCluster ?? 40); i++) {
        const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
        const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d, r = 0.8 + rnd() * 2.4;
        ctx.fillStyle = `rgba(${rgb(rust)},${0.25 + rnd() * 0.5})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      if (rnd() < (o.runChance ?? 0.55)) {
        const w = 1 + rnd() * s * 0.01, len = s * (0.1 + rnd() * 0.35);
        const g = ctx.createLinearGradient(0, cy, 0, cy + len);
        g.addColorStop(0, `rgba(${rgb(run)},${0.16 + rnd() * 0.18})`);
        g.addColorStop(1, `rgba(${rgb(run)},0)`);
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
        ctx.fillStyle = `rgba(${rgb(chalk)},${0.2 + rnd() * 0.4})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }
    for (let i = 0; i < (o.topStreaks ?? 0); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.014, len = s * (0.25 + rnd() * 0.55);
      const a = 0.1 + rnd() * 0.22;
      const g = ctx.createLinearGradient(0, 0, 0, len);
      g.addColorStop(0, `rgba(${rgb(run)},${a})`);
      g.addColorStop(0.25, `rgba(${rgb(rust)},${a * 0.8})`);
      g.addColorStop(1, `rgba(${rgb(rust)},0)`);
      ctx.fillStyle = g;
      for (const dx of [-s, 0, s]) ctx.fillRect(x + dx, 0, w, len);
    }
    if (o.groundBand) {
      const b = o.groundBand, g = ctx.createLinearGradient(0, s, 0, s * (1 - (o.groundHeight ?? 0.22)));
      g.addColorStop(0, `rgba(${rgb(run)},${b})`);
      g.addColorStop(0.45, `rgba(${rgb(run)},${b * 0.4})`);
      g.addColorStop(1, `rgba(${rgb(run)},0)`);
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
    const rgb = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const wash = o.wash ?? [0.62, 0.62, 0.58], washA = o.washAlpha ?? 0.7, cov = o.coverage ?? 0.3;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.streaks ?? 26); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.012, len = s * (0.15 + rnd() * 0.6), a = 0.05 + rnd() * 0.12;
      const g2 = ctx.createLinearGradient(0, 0, 0, len);
      g2.addColorStop(0, `rgba(${rgb(wash)},${a})`);
      g2.addColorStop(1, `rgba(${rgb(wash)},0)`);
      ctx.fillStyle = g2;
      ctx.fillRect(x, 0, w, len);
      ctx.fillRect(x - s, 0, w, len);
    }
    if (o.washFlat) {
      ctx.fillStyle = `rgba(${rgb(wash)},${washA})`;
      ctx.fillRect(0, 0, s, s);
    } else {
      const grad = ctx.createLinearGradient(0, s, 0, s * (1 - cov));
      grad.addColorStop(0, `rgba(${rgb(wash)},${washA})`);
      grad.addColorStop(0.5, `rgba(${rgb(wash)},${washA * 0.45})`);
      grad.addColorStop(1, `rgba(${rgb(wash)},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, s, s);
    }
    for (let i = 0; i < (o.blotches ?? 40); i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 1.6) * s, r = 3 + rnd() * s * 0.06, a = 0.08 + rnd() * 0.3;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb(wash)},${a})`);
      g2.addColorStop(1, `rgba(${rgb(wash)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
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
      g2.addColorStop(0, `rgba(${rgb(v)},${a})`);
      g2.addColorStop(1, `rgba(${rgb(v)},0)`);
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
          g2.addColorStop(0, `rgba(${rgb(v)},${a})`);
          g2.addColorStop(0.45, `rgba(${rgb(v)},${a * 0.55})`);
          g2.addColorStop(1, `rgba(${rgb(v)},0)`);
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
        ctx.fillStyle = `rgba(${rgb(v)},${o.seamAlpha ?? 0.5})`;
        ctx.fillRect(x, 0, wpx, s);
        ctx.fillStyle = `rgba(${rgb(v)},${(o.seamAlpha ?? 0.5) * 0.3})`;
        ctx.fillRect(x + wpx, 0, wpx, s);
      }
    }
    for (let i = 0; i < (o.pits ?? 0); i++) {
      const v = o.pit ?? [0.42, 0.4, 0.36];
      const x = rnd() * s, y = rnd() * s, r = (o.pitR ?? 1.6) * (0.5 + rnd() * 1.3);
      const a = 0.25 + rnd() * 0.5;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r * 2);
      g2.addColorStop(0, `rgba(${rgb(v)},${a})`);
      g2.addColorStop(0.4, `rgba(${rgb(v)},${a * 0.45})`);
      g2.addColorStop(1, `rgba(${rgb(v)},0)`);
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
      mg.addColorStop(0, `rgba(${rgb(m)},${o.mossWash ?? 0.35})`);
      mg.addColorStop(1, `rgba(${rgb(m)},0)`);
      ctx.fillStyle = mg;
      ctx.fillRect(0, 0, s, s);
      for (let k = 0; k < (o.mossClusters ?? 14); k++) {
        const cx = rnd() * s, cy = s - Math.pow(rnd(), 1.6) * s * band, cr = s * (0.015 + rnd() * 0.04);
        const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
        cg.addColorStop(0, `rgba(${rgb(m)},0.7)`);
        cg.addColorStop(0.6, `rgba(${rgb(m)},0.35)`);
        cg.addColorStop(1, `rgba(${rgb(m)},0)`);
        ctx.fillStyle = cg;
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(cx + dx, cy, cr, cr * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 24; i++) {
          const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
          const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.6, r = 1 + rnd() * 3;
          ctx.fillStyle = `rgba(${rgb(m)},${0.35 + rnd() * 0.5})`;
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
    const rgb = (v) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    const w = s / bands;
    for (let i = 0; i < bands; i++) {
      ctx.fillStyle = rgb(i % 2 ? b : a);
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
    const rgb = (v) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    ctx.fillStyle = rgb(o.ground ?? [0.45, 0.42, 0.38]);
    ctx.fillRect(0, 0, s, s);
    const pal = o.palette ?? [[0.85, 0.78, 0.66], [0.72, 0.62, 0.5], [0.6, 0.58, 0.55], [0.9, 0.86, 0.8]];
    const n = o.count ?? 900, rMin = s * (o.rMin ?? 0.012), rMax = s * (o.rMax ?? 0.028);
    for (let i = 0; i < n; i++) {
      const x = rnd() * s, y = rnd() * s, rx = rMin + rnd() * (rMax - rMin), ry = rx * (0.6 + rnd() * 0.5), a = rnd() * Math.PI;
      const c = pal[Math.floor(rnd() * pal.length)], k = 0.85 + rnd() * 0.3;
      if (o.shade) {
        ctx.fillStyle = rgb((o.ground ?? [0.45, 0.42, 0.38]).map((v) => v * o.shade));
        for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(x + dx + rx * 0.16, y + dy + ry * 0.22, rx * 1.1, ry * 1.1, a, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.fillStyle = rgb(c.map((v) => Math.min(1, v * k)));
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
    ctx.fillStyle = "#ffffff";
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
        ctx.fillStyle = dark ? `rgba(${Math.round(120 * tone)},${Math.round(106 * tone)},${Math.round(84 * tone)},${a.toFixed(3)})` : `rgba(255,253,246,${(a * 0.6).toFixed(3)})`;
        const yTop = y0 - ch * (0.15 + rnd() * 0.25);
        const yBot = butts[c + 1][Math.min(s, Math.round(x))] + ch * (rnd() * 0.1);
        ctx.fillRect(x, yTop, w, Math.max(2, yBot - yTop));
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
    const rgb = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const base = o.base ?? [1, 1, 1], chalk = o.chalk ?? base, rust = o.rust ?? base, dark = o.dark ?? base;
    const wrap = (draw) => {
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) draw(dx, dy);
    };
    const blob = (c, x, y, r, a, ry = 1, rot = 0) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(${rgb(c)},${a})`);
      g.addColorStop(0.55, `rgba(${rgb(c)},${a * 0.5})`);
      g.addColorStop(1, `rgba(${rgb(c)},0)`);
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
        ctx.fillStyle = `rgb(${rgb(base.map((v) => v * k))})`;
        ctx.fillRect(x, 0, 1, s);
      }
    } else {
      ctx.fillStyle = `rgb(${rgb(base)})`;
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
        ctx.fillStyle = `rgba(${rgb(chalk)},${0.2 + rnd() * 0.45})`;
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
        ctx.fillStyle = `rgba(${rgb(rust)},${0.25 + rnd() * 0.45})`;
        wrap((dx, dy) => {
          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      if (rnd() < 0.6) {
        const w = 1 + rnd() * s * 6e-3, len = s * (0.05 + rnd() * 0.16);
        const g = ctx.createLinearGradient(0, cy, 0, cy + len);
        g.addColorStop(0, `rgba(${rgb(rust)},${0.14 + rnd() * 0.16})`);
        g.addColorStop(1, `rgba(${rgb(rust)},0)`);
        ctx.fillStyle = g;
        wrap((dx) => ctx.fillRect(cx + dx + (rnd() - 0.5) * cr, cy, w, len));
      }
    }
    const rolls = o.rolls ?? 40;
    for (let i = 0; i < rolls; i++) {
      const x = (i + 0.35 + rnd() * 0.3) * s / rolls, up = rnd() < 0.45;
      const c = up ? chalk : dark, a = 0.06 + rnd() * 0.12;
      ctx.strokeStyle = `rgba(${rgb(c)},${a})`;
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
function createRotiGriddleStandModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Roti Griddle Stand";
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
      const g2 = ribbedDome(d.pts, d.ribs, d.amp, d.seg ?? 24, d.valley);
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
    if (c.uv === "panel") g = panelUV(g, c.uvScale ?? 1);
    if (c.uv === "panel-rot") g = panelUV(g, c.uvScale ?? 1, true);
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
    bindTile(mat, tex, t.bump ?? 0);
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createRotiGriddleStandModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogUm90aSBHcmlkZGxlIFN0YW5kIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDEuMDggeCAxLjQgeCAwLjcgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgK1ogdGhlIG9wZW4gZnJvbnQuXG4gKiBCdWRnZXQgKG1lZGl1bSk6IDw9MjAwMCB0cmlhbmdsZXMsIDw9MiBkcmF3IGNhbGxzLCA8PTIgbWF0ZXJpYWxzLCA8PTQgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhhaWtpdCdzIFNUUkVFVCBBTkQgVkVORE9SIFBST1BTIC0tIGEgY29uZSwgYSBiYXJyaWVyLCBhIGNhcnQsIGEgc3Rvb2wuIFRoZVxuICogc2hhcmVkIHZvY2FidWxhcnkgaXMgdGhlIFRJTlRFRCBCT1ggYW5kIHRoZSBwb2x5bGluZSBUVUJFIG1lcmdlZCBpbnRvIG9uZSBnZW9tZXRyeSBwZXIgbWF0ZXJpYWwsXG4gKiB3aXRoIGV2ZXJ5IGNvbG91ciBkaWZmZXJlbmNlIGluc2lkZSBhIG1hdGVyaWFsIGNhcnJpZWQgYXMgYSB2ZXJ0ZXggY29sb3VyIG9uIGEgV0hJVEUgbWF0ZXJpYWwsXG4gKiBhbmQgc3VyZmFjZSBpZGVudGl0eSAoY29ycnVnYXRpb24sIGdyaW1lIHdhc2gsIG1vc3MsIHBsYW5rIGpvaW50cywgcnVzdCkgZGVsaXZlcmVkIGFzIE9ORVxuICogcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgcGVyIG1hdGVyaWFsIHJhdGhlciB0aGFuIGFzIGdlb21ldHJ5IG9yIGEgcHJvY2VkdXJhbCB0ZXh0dXJlIHNldC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICAvKipcbiAgICogV2hlcmUgdGhpcyBwcm9wJ3Mgc2hpcHBlZCBmaWxlcyBsaXZlLCB3aXRoIGEgdHJhaWxpbmcgc2xhc2guXG4gICAqXG4gICAqIFRoZSBtYXBzIGFyZSByZWNvcmRlZCBhcyBiYXJlIGZpbGVuYW1lcyBiZWNhdXNlIHRoZSBidW5kbGUgaXMgRVZBTFVBVEVEXG4gICAqIHJhdGhlciB0aGFuIGltcG9ydGVkOiBpdCBoYXMgbm8gaW1wb3J0Lm1ldGEgYW5kIG5vIGN1cnJlbnRTY3JpcHQsIHNvIGl0XG4gICAqIGNhbm5vdCBzZWUgaXRzIG93biBVUkwuIEV2ZXJ5IGhvc3QgZGVyaXZlcyB0aGlzIGZyb20gdGhlIG1vZHVsZSBVUkwuXG4gICAqL1xuICBiYXNlVXJsPzogc3RyaW5nO1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcInJvdGktZ3JpZGRsZS1zdGFuZFwiLFxuICAgIFwibmFtZVwiOiBcIlJvdGkgR3JpZGRsZSBTdGFuZFwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIlJvdGlHcmlkZGxlU3RhbmRcIixcbiAgICBcImVudmVsb3BlXCI6IFwiRW52ZWxvcGUgMS4wOCB4IDEuNCB4IDAuNyBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCArWiB0aGUgb3BlbiBmcm9udC5cXG4gKiBCdWRnZXQgKG1lZGl1bSk6IDw9MjAwMCB0cmlhbmdsZXMsIDw9MiBkcmF3IGNhbGxzLCA8PTIgbWF0ZXJpYWxzLCA8PTQgdW5pcXVlIGdlb21ldHJpZXMuXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwic3RlZWxcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC40LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjMsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJpcm9uXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuODUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMSxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJ0aWxlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJzdGVlbFwiLFxuICAgICAgICBcImtpbmRcIjogXCJncmltZVwiLFxuICAgICAgICBcInNpemVcIjogMjU2LFxuICAgICAgICBcInNlZWRcIjogMTgxLFxuICAgICAgICBcIndhc2hcIjogW1xuICAgICAgICAgIDAuNTgsXG4gICAgICAgICAgMC41NSxcbiAgICAgICAgICAwLjUyXG4gICAgICAgIF0sXG4gICAgICAgIFwid2FzaEFscGhhXCI6IDAuNTIsXG4gICAgICAgIFwiY292ZXJhZ2VcIjogMC41MixcbiAgICAgICAgXCJzdHJlYWtzXCI6IDMwLFxuICAgICAgICBcImJsb3RjaGVzXCI6IDY0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiaXJvblwiLFxuICAgICAgICBcImtpbmRcIjogXCJydXN0XCIsXG4gICAgICAgIFwic2l6ZVwiOiAyNTYsXG4gICAgICAgIFwic2VlZFwiOiAxODIsXG4gICAgICAgIFwicmF0aW9cIjogW1xuICAgICAgICAgIDAuODUsXG4gICAgICAgICAgMC42MixcbiAgICAgICAgICAwLjQyXG4gICAgICAgIF0sXG4gICAgICAgIFwiZGVuc2l0eVwiOiAzMFxuICAgICAgfVxuICAgIF0sXG4gICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICBcImNvbXBvbmVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcImNhcnRcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJTdGFpbmxlc3MgY2FiaW5ldCwgY291bnRlciwgdHJheSwgYm90dGxlcywgZ2FzIGJvdHRsZSBhbmQgY2FzdGVyc1wiLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJzdGVlbFwiLFxuICAgICAgICAgIFwidXZcIjogXCJoZWlnaHRcIixcbiAgICAgICAgICBcInV2U2NhbGVcIjogMC43LFxuICAgICAgICAgIFwiY29sbGlkZXJcIjoge1xuICAgICAgICAgICAgXCJzaGFwZVwiOiBcImJveFwiLFxuICAgICAgICAgICAgXCJsb2NhbENlbnRlclwiOiBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuNyxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiaGFsZkV4dGVudHNcIjogW1xuICAgICAgICAgICAgICAwLjU0LFxuICAgICAgICAgICAgICAwLjcsXG4gICAgICAgICAgICAgIDAuMzVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IFwiRGVjbGFyZWQgb24gdGhlIGFzc2V0IGFzIGJveDogdGhlIHdob2xlIGNhcnQgZW52ZWxvcGUuXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICA2ODQxNDQwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjU4MDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgIC0wLjMzOTk5OTk5OTk5OTk5OTk3LFxuICAgICAgICAgICAgICAxLjA2LFxuICAgICAgICAgICAgICAwLjk2MDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgIDAuMDJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDk4Njg5NDUsXG4gICAgICAgICAgICAgIC0wLjUzLFxuICAgICAgICAgICAgICAwLjU4MDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuMDIsXG4gICAgICAgICAgICAgIDAuOTYwMDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgMC43XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICA5ODY4OTQ1LFxuICAgICAgICAgICAgICAwLjUzLFxuICAgICAgICAgICAgICAwLjU4MDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuMDIsXG4gICAgICAgICAgICAgIDAuOTYwMDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgMC43XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICA2ODQxNDQwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjExLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxLjA0LFxuICAgICAgICAgICAgICAwLjAyLFxuICAgICAgICAgICAgICAwLjY3OTk5OTk5OTk5OTk5OTlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDExMDUyOTYyLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxLjA3MixcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMS4xLFxuICAgICAgICAgICAgICAwLjAyNCxcbiAgICAgICAgICAgICAgMC43MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgNjg0MTQ0MCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC45ODAwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgICAwLjM0NCxcbiAgICAgICAgICAgICAgMS4wNCxcbiAgICAgICAgICAgICAgMC4xMixcbiAgICAgICAgICAgICAgMC4wMTJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDY4NDE0NDAsXG4gICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgMC45ODAwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgICAwLjM1NCxcbiAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAwLjAxMixcbiAgICAgICAgICAgICAgMC4wMTJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDUxMzA4MjIsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuNTgwMDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgLTAuMzE0OTk5OTk5OTk5OTk5OTUsXG4gICAgICAgICAgICAgIDEuMDIsXG4gICAgICAgICAgICAgIDAuOTIsXG4gICAgICAgICAgICAgIDAuMDEyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICA1MTMwODIyLFxuICAgICAgICAgICAgICAtMC41MDUsXG4gICAgICAgICAgICAgIDAuNTgwMDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgMC4wMSxcbiAgICAgICAgICAgICAgMC4wMTIsXG4gICAgICAgICAgICAgIDAuOTIsXG4gICAgICAgICAgICAgIDAuNjI5OTk5OTk5OTk5OTk5OVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgNTEzMDgyMixcbiAgICAgICAgICAgICAgMC41MDUsXG4gICAgICAgICAgICAgIDAuNTgwMDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgMC4wMSxcbiAgICAgICAgICAgICAgMC4wMTIsXG4gICAgICAgICAgICAgIDAuOTIsXG4gICAgICAgICAgICAgIDAuNjI5OTk5OTk5OTk5OTk5OVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgNTEzMDgyMixcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4xMzIsXG4gICAgICAgICAgICAgIDAuMDEsXG4gICAgICAgICAgICAgIDEuMDEsXG4gICAgICAgICAgICAgIDAuMDEyLFxuICAgICAgICAgICAgICAwLjYyOTk5OTk5OTk5OTk5OTlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDUxMzA4MjIsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDEuMDQsXG4gICAgICAgICAgICAgIDAuMDEsXG4gICAgICAgICAgICAgIDEuMDEsXG4gICAgICAgICAgICAgIDAuMDEyLFxuICAgICAgICAgICAgICAwLjYyOTk5OTk5OTk5OTk5OTlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDk4Njg5NDUsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDEuMjIsXG4gICAgICAgICAgICAgIC0wLjMyOTk5OTk5OTk5OTk5OTk2LFxuICAgICAgICAgICAgICAxLjAyLFxuICAgICAgICAgICAgICAwLjAxNixcbiAgICAgICAgICAgICAgMC4wMTZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDk4Njg5NDUsXG4gICAgICAgICAgICAgIC0wLjQ5MDAwMDAwMDAwMDAwMDA1LFxuICAgICAgICAgICAgICAxLjE1MDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgIC0wLjMyOTk5OTk5OTk5OTk5OTk2LFxuICAgICAgICAgICAgICAwLjAxNixcbiAgICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgICAgMC4wMTZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDk4Njg5NDUsXG4gICAgICAgICAgICAgIDAuNDkwMDAwMDAwMDAwMDAwMDUsXG4gICAgICAgICAgICAgIDEuMTUwMDAwMDAwMDAwMDAwMSxcbiAgICAgICAgICAgICAgLTAuMzI5OTk5OTk5OTk5OTk5OTYsXG4gICAgICAgICAgICAgIDAuMDE2LFxuICAgICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgICAwLjAxNlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTIxMDU5MDgsXG4gICAgICAgICAgICAgIDAuMzYsXG4gICAgICAgICAgICAgIDEuMDk1LFxuICAgICAgICAgICAgICAtMC4wOCxcbiAgICAgICAgICAgICAgMC40LFxuICAgICAgICAgICAgICAwLjAyMixcbiAgICAgICAgICAgICAgMC4zXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMDEzMjExNyxcbiAgICAgICAgICAgICAgMC4zNixcbiAgICAgICAgICAgICAgMS4xMSxcbiAgICAgICAgICAgICAgLTAuMDgsXG4gICAgICAgICAgICAgIDAuMzYsXG4gICAgICAgICAgICAgIDAuMDEsXG4gICAgICAgICAgICAgIDAuMjZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDMwMjYyMTksXG4gICAgICAgICAgICAgIC0wLjQ2LFxuICAgICAgICAgICAgICAwLjA1LFxuICAgICAgICAgICAgICAtMC4yNjk5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAgICAgMC4wNSxcbiAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAwLjA1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAzMDI2MjE5LFxuICAgICAgICAgICAgICAwLjQ2LFxuICAgICAgICAgICAgICAwLjA1LFxuICAgICAgICAgICAgICAtMC4yNjk5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAgICAgMC4wNSxcbiAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAwLjA1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAzMDI2MjE5LFxuICAgICAgICAgICAgICAtMC40NixcbiAgICAgICAgICAgICAgMC4wNSxcbiAgICAgICAgICAgICAgMC4yNjk5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAgICAgMC4wNSxcbiAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAwLjA1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAzMDI2MjE5LFxuICAgICAgICAgICAgICAwLjQ2LFxuICAgICAgICAgICAgICAwLjA1LFxuICAgICAgICAgICAgICAwLjI2OTk5OTk5OTk5OTk5OTk2LFxuICAgICAgICAgICAgICAwLjA1LFxuICAgICAgICAgICAgICAwLjEsXG4gICAgICAgICAgICAgIDAuMDVcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY3lsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAgICAgMC40MixcbiAgICAgICAgICAgICAgICAwLjA1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4xNSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjE1LFxuICAgICAgICAgICAgICBcImhcIjogMC42LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxNCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTIwNzMwMDZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAgICAgMC43NSxcbiAgICAgICAgICAgICAgICAwLjA1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wNixcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjEsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjA2LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMixcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTIwNzMwMDZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAgICAgMC44MixcbiAgICAgICAgICAgICAgICAwLjA1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMyxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAzLFxuICAgICAgICAgICAgICBcImhcIjogMC4wOCxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogOTA3OTQzMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgICAgICAxLjIxNCxcbiAgICAgICAgICAgICAgICAtMC4yMlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDMsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMyxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMjYsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgICBcImhleFwiOiAxNDE5MTE2MlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMC4yMixcbiAgICAgICAgICAgICAgICAxLjIyOSxcbiAgICAgICAgICAgICAgICAtMC4yNFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDMsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMyxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMjksXG4gICAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgICBcImhleFwiOiAxNTI2Mjk0MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgICAgIDEuMjM5LFxuICAgICAgICAgICAgICAgIC0wLjIyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMyxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAzLFxuICAgICAgICAgICAgICBcImhcIjogMC4zMSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTAsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE1MjYyOTQwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLjQyLFxuICAgICAgICAgICAgICAgIDEuMTg0MDAwMDAwMDAwMDAwMixcbiAgICAgICAgICAgICAgICAtMC4yMlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDQsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wNCxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMixcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTAsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExODQyNzM2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLjI0LFxuICAgICAgICAgICAgICAgIDEuMTM1LFxuICAgICAgICAgICAgICAgIC0wLjE2XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjA1LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTQyMDcxNDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAuMzYsXG4gICAgICAgICAgICAgICAgMS4xMzUsXG4gICAgICAgICAgICAgICAgLTAuMTZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDUsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgICBcImhleFwiOiAxNDIwNzE0NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgICAgIDEuMTM1LFxuICAgICAgICAgICAgICAgIC0wLjA2XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjA1LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTQyMDcxNDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAuNDIsXG4gICAgICAgICAgICAgICAgMS4xMzUsXG4gICAgICAgICAgICAgICAgLTAuMDZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDUsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgICBcImhleFwiOiAxNDIwNzE0NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMC4yMSxcbiAgICAgICAgICAgICAgICAxLjEzNSxcbiAgICAgICAgICAgICAgICAtMC4yXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjA1LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTQyMDcxNDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAuMzI5OTk5OTk5OTk5OTk5OTYsXG4gICAgICAgICAgICAgICAgMS4xMzUsXG4gICAgICAgICAgICAgICAgLTAuMlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDQ1LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDQ1LFxuICAgICAgICAgICAgICBcImhcIjogMC4wNSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTAsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE0MjA3MTQ0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLjI3LFxuICAgICAgICAgICAgICAgIDEuMTM1LFxuICAgICAgICAgICAgICAgIC0wLjFcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA0NSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDUsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgICBcImhleFwiOiAxNDIwNzE0NFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMC4zODk5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAgICAgICAxLjEzNSxcbiAgICAgICAgICAgICAgICAtMC4xXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwicnRcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wNDUsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjA1LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTQyMDcxNDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwiZ3JpZGRsZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkNhc3QgZ3JpZGRsZSBwbGF0ZSBhbmQgc3BhdHVsYVwiLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJpcm9uXCIsXG4gICAgICAgICAgXCJwYXJlbnRcIjogXCJjYXJ0XCIsXG4gICAgICAgICAgXCJsYXRoZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgIDEuMDg0XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAgICAgICAxLjA4NFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgICAgICAgMS4xMTZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMjg2LFxuICAgICAgICAgICAgICAgICAgMS4xMjJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMjcsXG4gICAgICAgICAgICAgICAgICAxLjExXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI1NSxcbiAgICAgICAgICAgICAgICAgIDEuMTAzXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgMS4xXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInNlZ1wiOiAzMixcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTAuMjIsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLjAzXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDQ4NjE0NjZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjE4LFxuICAgICAgICAgICAgICAgICAgMS4xMDE2MDAwMDAwMDAwMDAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI0NTk5OTk5OTk5OTk5OTk3LFxuICAgICAgICAgICAgICAgICAgMS4xMDI1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI0NTk5OTk5OTk5OTk5OTk3LFxuICAgICAgICAgICAgICAgICAgMS4xMDM1MDAwMDAwMDAwMDAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjE4LFxuICAgICAgICAgICAgICAgICAgMS4xMDI2XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInNlZ1wiOiAzMixcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTAuMjIsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLjAzXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDcxNjA4NjdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMDEzMjExOCxcbiAgICAgICAgICAgICAgMC4wNzk5OTk5OTk5OTk5OTk5OSxcbiAgICAgICAgICAgICAgMS4xMTIsXG4gICAgICAgICAgICAgIDAuMTMsXG4gICAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgICAgMC4wMDQsXG4gICAgICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMzgxMTg2NixcbiAgICAgICAgICAgICAgMC4xOTk5OTk5OTk5OTk5OTk5OCxcbiAgICAgICAgICAgICAgMS4xMixcbiAgICAgICAgICAgICAgMC4yMSxcbiAgICAgICAgICAgICAgMC4xMixcbiAgICAgICAgICAgICAgMC4wMixcbiAgICAgICAgICAgICAgMC4wMixcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC41LFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgLy8gQ09MT1IgaGFzIHRvIGJlIGNhcnJpZWQgdG9vLCBhbmQgaXQgaXMgZWFzeSB0byBmb3JnZXQ6IHRoaXMgZnVuY3Rpb24gY29waWVkIHBvc2l0aW9uLCBub3JtYWxcbiAgLy8gYW5kIHV2IG9ubHksIGFuZCB0aGUgbW9zcXVlJ3MgcmliYmVkIGRvbWVzIGxvc3QgdGhlaXIgZ3JlZW4tYW5kLXBhbGUgc3RyaXBpbmcgdGhlIG1vbWVudCB0aGV5XG4gIC8vIHdlcmUgbWVyZ2VkIHdpdGggYW55dGhpbmcuIFRoZSBmYWlsdXJlIGlzIHNpbGVudCAtLSB0aGUgZG9tZSByZW5kZXJzLCBpbiBvbmUgZmxhdCBjb2xvdXIgLS0gYW5kXG4gIC8vIHRvb2sgYSB3cm9uZyB0aGVvcnkgYWJvdXQgc1JHQiBnYW1tYSBiZWZvcmUgdGhlIGF0dHJpYnV0ZSBsaXN0IHdhcyByZWFkLiBBbnkgaW5wdXQgY2FycnlpbmcgYVxuICAvLyBjb2xvdXIgbWVhbnMgZXZlcnkgaW5wdXQgZ2V0cyBvbmUsIHdoaXRlIHdoZXJlIGl0IGhhZCBub25lLlxuICBjb25zdCBhbnlDb2xvciA9IHBhcnRzLnNvbWUoKGcpID0+ICEhZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpO1xuICBjb25zdCBjb2xvciA9IGFueUNvbG9yID8gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpLmZpbGwoMSkgOiBudWxsO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGNvbnN0IGMgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICAgIGlmIChjb2xvciAmJiBjKSB7IGNvbG9yWyh2ICsgaSkgKiAzXSA9IGMuZ2V0WChpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAxXSA9IGMuZ2V0WShpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAyXSA9IGMuZ2V0WihpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sb3IpIG91dC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgMykpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHJUb3A6IG51bWJlciwgckJvdDogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyVG9wLCByQm90LCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogUmV2b2x2ZSBhIHByb2ZpbGUgYWJvdXQgK1kuIGBwdHNgIGFyZSBbcmFkaXVzLCB5XSBpbiBtZXRyZXMsIGJvdHRvbSB0byB0b3AuXG4gKlxuICogVGhpcyBpcyB0aGUgc2hhcGUgdm9jYWJ1bGFyeSB0aGUgd2hvbGUgbW9udW1lbnRhbCBzZXQgaXMgYnVpbHQgZnJvbSAtLSBhIGNoZWRpJ3MgYmVsbCwgYSBwcmFuZydzXG4gKiBjb3JuLWNvYiB0YXBlciwgYSBkb21lLCBhIHJpbmdlZCBzcGlyZSBhcmUgYWxsIG9uZSBwcm9maWxlIGVhY2guIFR3byB0aGluZ3MgYXJlIHdvcnRoIHN0YXRpbmdcbiAqIGJlY2F1c2UgYm90aCBjb3N0IGEgcmVidWlsZCB0byBsZWFybjpcbiAqXG4gKiAtIExhdGhlR2VvbWV0cnkgaXMgT1BFTiBhdCB0b3AgYW5kIGJvdHRvbS4gQSBwcm9maWxlIHRoYXQgZG9lcyBub3QgY2xvc2Ugb24gdGhlIGF4aXMgKHJhZGl1cyAwKVxuICogICBsZWF2ZXMgYSBob2xlIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkcyBhcyBiYWNrZ3JvdW5kIGVuY2xvc2VkIGJ5IHRoZSBzaWxob3VldHRlLiBDbG9zZSBpdCwgb3JcbiAqICAgY2FwIGl0IHdpdGggd2hhdCBzaXRzIGFib3ZlLlxuICogLSBSQURJQUwgU0VHTUVOVCBDT1VOVCBpcyB0aGUgdHJpYW5nbGUgYnVkZ2V0J3MgbWFpbiBsZXZlciBoZXJlIGFuZCBpdCBpcyBwZXItbGF0aGU6IGEgcHJvZmlsZSBvZlxuICogICBuIHBvaW50cyBhdCBzIHNlZ21lbnRzIGlzIDIqKG4tMSkqcyB0cmlhbmdsZXMuIEEgMjQtcmluZyBzcGlyZSBhdCAzMiBzZWdtZW50cyBpcyAxLDQ3MlxuICogICB0cmlhbmdsZXMgb24gaXRzIG93biwgd2hpY2ggaXMgd2h5IHRoZSBsb3ctcmVsaWVmIHJpbmdzIGFyZSBhIHByb2ZpbGUgcmF0aGVyIHRoYW4gMjQgcmluZ3MuXG4gKi9cbi8qKiBMYXRoZUdlb21ldHJ5IHNoYXJlcyB0aGUgY29ybmVyIHZlcnRleCBiZXR3ZWVuIGFuIGVuZCBkaXNjIGFuZCB0aGUgc2lkZSB3YWxsLCBzb1xuICogIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIHRpbHRzIHRoZSB3YWxsJ3MgZmlyc3QgcmluZyA0NSBkZWdyZWVzIHRvd2FyZCB0aGUgZGlzYyBhbmQgdGhlIGhhcm5lc3Mgc2hhZGVzXG4gKiAgYSBkYXJrIGdyYWRpZW50IHRoZXJlIC0tIGEgcmluZyB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBhcyBhIEhPTEUgdW5kZXIgdGhlIHN0YWlubGVzcyBiaW4ncyBjYXAuXG4gKiAgSW5zZXJ0aW5nIGEgcG9pbnQgMC44IG1tIHBhc3QgZXZlcnkgc2hhcnAgY29ybmVyICg+IDcwIGRlZ3JlZXMpIGNvbmZpbmVzIHRoZSBhdmVyYWdlZCBub3JtYWwgdG8gdGhhdFxuICogIHNsaXZlci4gQ29zdHMgb25lIHJpbmcgcGVyIGNvcm5lcjsgcGFzcyBgc2hhcnAgPSBmYWxzZWAgd2hlcmUgdGhlIGJ1ZGdldCBjYW5ub3QgY2FycnkgaXQuICovXG5mdW5jdGlvbiBzcGxpdENvcm5lcnMocHRzOiBudW1iZXJbXVtdLCBtaW5EZWcgPSA3MCwgZXBzID0gMC4wMDA4KTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IG91dDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHAgPSBwdHNbaV0sIGEgPSBwdHNbaSAtIDFdLCBiID0gcHRzW2kgKyAxXTtcbiAgICBsZXQgc2hhcnAgPSBmYWxzZTtcbiAgICBpZiAoYSAmJiBiKSB7XG4gICAgICBjb25zdCB1eCA9IHBbMF0gLSBhWzBdLCB1eSA9IHBbMV0gLSBhWzFdLCB2eCA9IGJbMF0gLSBwWzBdLCB2eSA9IGJbMV0gLSBwWzFdO1xuICAgICAgY29uc3QgbHUgPSBNYXRoLmh5cG90KHV4LCB1eSksIGx2ID0gTWF0aC5oeXBvdCh2eCwgdnkpO1xuICAgICAgaWYgKGx1ID4gMCAmJiBsdiA+IDApIHNoYXJwID0gTWF0aC5hY29zKE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCAodXggKiB2eCArIHV5ICogdnkpIC8gKGx1ICogbHYpKSkpID4gbWluRGVnICogTWF0aC5QSSAvIDE4MDtcbiAgICAgIGlmIChzaGFycCAmJiBsdSA+IDMgKiBlcHMpIG91dC5wdXNoKFtwWzBdIC0gdXggLyBsdSAqIGVwcywgcFsxXSAtIHV5IC8gbHUgKiBlcHNdKTtcbiAgICAgIG91dC5wdXNoKHApO1xuICAgICAgaWYgKHNoYXJwICYmIGx2ID4gMyAqIGVwcykgb3V0LnB1c2goW3BbMF0gKyB2eCAvIGx2ICogZXBzLCBwWzFdICsgdnkgLyBsdiAqIGVwc10pO1xuICAgIH0gZWxzZSBvdXQucHVzaChwKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKiogYHdlbGRTZWFtYCBhdmVyYWdlcyB0aGUgbm9ybWFscyBvZiB0aGUgZmlyc3QgYW5kIGxhc3QgcmFkaWFsIGNvbHVtbiwgd2hpY2ggaXMgd2hhdCBjbG9zZXMgdGhlXG4gKiAgcmV2b2x2ZSdzIFNIQURJTkcgc2VhbS4gTGF0aGVHZW9tZXRyeSBhbHJlYWR5IGRvZXMgdGhpcyBpdHNlbGYgLS0gaXQgZXhwbGljaXRseSBhdmVyYWdlcyB0aGUgdHdvXG4gKiAgZW5kIGNvbHVtbnMgZm9yIGEgZnVsbCAyKlBJIHN3ZWVwIC0tIGFuZCB0aGUgYGNvbXB1dGVWZXJ0ZXhOb3JtYWxzKClgIGJlbG93IHRocm93cyB0aGF0IHdvcmtcbiAqICBhd2F5LCBiZWNhdXNlIGEgcmVjb21wdXRlIHNlZXMgdGhlIHNlYW0gYXMgdHdvIHVuY29ubmVjdGVkIGVkZ2VzIGFuZCBnaXZlcyBlYWNoIHRoZSBub3JtYWwgb2ZcbiAqICB0aGUgZmFjZXMgb24gaXRzIG93biBzaWRlIG9ubHkuIE9uIGEgbWF0dGUgcHJvcCB0aGUgcmVzdWx0aW5nIGNyZWFzZSBpcyBpbnZpc2libGUsIHdoaWNoIGlzIHdoeVxuICogIGl0IHN1cnZpdmVkOyBvbiBhIHNhdGluIG1ldGFsIGl0IGlzIGEgaGFyZCB2ZXJ0aWNhbCBsaW5lIGRvd24gdGhlIHJldm9sdmUuIE1lYXN1cmVkIG9uIHRoZVxuICogIG5vb2RsZS1zaG9wIHRhYmxlJ3MgcmltIGF0IGF6aW11dGggMDogYSAzMS1sZXZlbCBsdW1hIHN0ZXAgYXQgeD01MTIgKDI0NSAtPiAyMTQgYXQgeT0yNTgpLFxuICogIFJFVkVSU0lORyB0byArMjcgYXQgeT0yNjYgLS0gYSBkaXNjb250aW51aXR5LCBub3QgYSBncmFkaWVudC5cbiAqICBEZWZhdWx0IE9GRiBzbyBubyBhbHJlYWR5LWVtaXR0ZWQgcHJvcCBjaGFuZ2VzIHNoYWRpbmcgaWYgaXQgaXMgZXZlciByZS1lbWl0dGVkOyB0aGUgcmVjb21wdXRlXG4gKiAgaXMgc3RpbGwgbmVlZGVkIGZvciB0aGUgc2hhcnAtY29ybmVyIHNwbGl0cywgc28gdGhpcyB3ZWxkcyBhZnRlcndhcmRzIHJhdGhlciB0aGFuIHNraXBwaW5nIGl0LiAqL1xuZnVuY3Rpb24gbGF0aGUocHRzOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlciwgeU9mZnNldCA9IDAsIHNoYXJwID0gdHJ1ZSwgd2VsZFNlYW0gPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdiA9IChzaGFycCA/IHNwbGl0Q29ybmVycyhwdHMpIDogcHRzKS5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKE1hdGgubWF4KHBbMF0sIDApLCBwWzFdICsgeU9mZnNldCkpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkodiwgc2VnKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICBpZiAod2VsZFNlYW0pIHtcbiAgICAvLyBMYXRoZUdlb21ldHJ5IGxheXMgb3V0IChzZWcgKyAxKSBjb2x1bW5zIG9mIGByb3dzYCB2ZXJ0aWNlczsgY29sdW1uIDAgYW5kIGNvbHVtbiBzZWcgYXJlIHRoZVxuICAgIC8vIHNhbWUgcGxhY2UgaW4gc3BhY2UuIEF2ZXJhZ2UgdGhlIHBhaXIgYW5kIHdyaXRlIGl0IGJhY2sgdG8gYm90aC5cbiAgICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICAgIGNvbnN0IHJvd3MgPSBuLmNvdW50IC8gKHNlZyArIDEpO1xuICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93czsgcisrKSB7XG4gICAgICBjb25zdCBhID0gciwgYiA9IHNlZyAqIHJvd3MgKyByO1xuICAgICAgY29uc3QgeCA9IG4uZ2V0WChhKSArIG4uZ2V0WChiKSwgeSA9IG4uZ2V0WShhKSArIG4uZ2V0WShiKSwgeiA9IG4uZ2V0WihhKSArIG4uZ2V0WihiKTtcbiAgICAgIGNvbnN0IGwgPSBNYXRoLmh5cG90KHgsIHksIHopIHx8IDE7XG4gICAgICBuLnNldFhZWihhLCB4IC8gbCwgeSAvIGwsIHogLyBsKTtcbiAgICAgIG4uc2V0WFlaKGIsIHggLyBsLCB5IC8gbCwgeiAvIGwpO1xuICAgIH1cbiAgICBuLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZztcbn1cblxuLyoqIEEgc3RlcHBlZCB0YXBlciBhcyBhIGxhdGhlIHByb2ZpbGU6IGByaW5nc2AgYWx0ZXJuYXRpbmcgb3V0L2luIHJhZGlpIGNsaW1iaW5nIGZyb20geTAgdG8geTEuXG4gKiAgT25lIGdlb21ldHJ5LCBvbmUgZHJhdyBjYWxsLCBhbmQgdGhlIHN0ZXAgY291bnQgaXMgYSBwcm9maWxlLXBvaW50IGNvdW50IHJhdGhlciB0aGFuIGEgbWVzaFxuICogIGNvdW50IC0tIHdoaWNoIGlzIHdoYXQga2VlcHMgYSAyMC1yaW5nIGNoZWRpIHNwaXJlIGluc2lkZSBhIDMyLWdlb21ldHJ5IGNlaWxpbmcuICovXG5mdW5jdGlvbiByaW5nZWRUYXBlcih5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByMDogbnVtYmVyLCByMTogbnVtYmVyLCByaW5nczogbnVtYmVyLCBidWxnZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSByaW5nczsgaSsrKSB7XG4gICAgY29uc3QgdCA9IGkgLyByaW5ncztcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IHIgPSByMCArIChyMSAtIHIwKSAqIHQ7XG4gICAgY29uc3Qgc3RlcCA9ICh5MSAtIHkwKSAvIHJpbmdzO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHldKTtcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5ICsgc3RlcCAqIDAuNDVdKTtcbiAgICBwdHMucHVzaChbciwgeSArIHN0ZXAgKiAwLjU1XSk7XG4gIH1cbiAgcHRzLnB1c2goW3IxLCB5MV0pO1xuICByZXR1cm4gcHRzO1xufVxuXG5cbi8qKlxuICogVGhlIFJFREVOVEVEIHNxdWFyZSBwbGFuIC0tIGEgc3F1YXJlIHdob3NlIGZvdXIgY29ybmVycyBhcmUgY3V0IGJhY2sgaW4gdHdvIHJpZ2h0LWFuZ2xlZCBzdGVwcy5cbiAqIEl0IGlzIHRoZSBwbGFuIG9mIGEgVGhhaSBjaGVkaSdzIHRlcnJhY2UgYW5kIG9mIGEgcHJhbmcncyBiYXNlLCBhbmQgYnVpbGRpbmcgaXQgYXMgYSBTaGFwZSB0aGF0XG4gKiBpcyB0aGVuIGV4dHJ1ZGVkIGlzIG5vdCBhIHN0eWxpc3RpYyBjaG9pY2U6IHRoZSBvYnZpb3VzIGFsdGVybmF0aXZlLCBhIHdpZGUgYm94IGNyb3NzZWQgYnkgYVxuICogZGVlcCBib3gsIHB1dHMgdGhlIHR3byBib3hlcycgdG9wIGZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgb3ZlciB0aGVpciB3aG9sZVxuICogaW50ZXJzZWN0aW9uLCB3aGljaCB6LWZpZ2h0cy4gT25lIGV4dHJ1c2lvbiBvZiBvbmUgY2xvc2VkIHBsYW4gaGFzIG5vIGludGVyaW9yIGNvaW5jaWRlbmNlIGF0XG4gKiBhbGwuXG4gKlxuICogYGFgIGlzIHRoZSBoYWxmLXdpZHRoIGFjcm9zcyB0aGUgZmxhdHM7IGByYCBpcyB0aGUgZGVwdGggb2YgZWFjaCByZWRlbnQgc3RlcC5cbiAqL1xuZnVuY3Rpb24gcmVkZW50ZWRTaGFwZShhOiBudW1iZXIsIHI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcXVhZCA9IFtbYSwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSByXSwgW2EgLSAyICogciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhXV07XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgIGZvciAoY29uc3QgW3gsIHpdIG9mIHF1YWQpIHtcbiAgICAgIC8vIHJvdDkwXmssIGFwcGxpZWQgayB0aW1lczogKHgsIHopIC0+ICgteiwgeClcbiAgICAgIGxldCBweCA9IHgsIHB6ID0gejtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgazsgaSsrKSB7IGNvbnN0IHQgPSBweDsgcHggPSAtcHo7IHB6ID0gdDsgfVxuICAgICAgcHRzLnB1c2goW3B4LCBwel0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGJldHdlZW4gdHdvIGhlaWdodHMuIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgYWxvbmcgK1osIHNvIHRoZSByZXN1bHQgaXNcbiAqICByb3RhdGVkIG9udG8gK1k7IGAtTWF0aC5QSSAvIDJgIGFib3V0IFggbWFwcyArWiB0byArWSBhbmQgbGVhdmVzIHRoZSBwbGFuJ3Mgb3duIHggYXMgeC4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVTbGFiKHNoYXBlOiBUSFJFRS5TaGFwZSwgeTA6IG51bWJlciwgeTE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHkxIC0geTAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIC8vIHJvdGF0ZVgoLVBJLzIpIG1hcHMgKHgsIHksIHopIC0+ICh4LCB6LCAteSksIHNvIHRoZSBleHRydXNpb24gZGVwdGggYmVjb21lcyBoZWlnaHQgYW5kIHRoZVxuICAvLyBwbGFuJ3Mgb3duIHNlY29uZCBheGlzIGJlY29tZXMgLXouIEV2ZXJ5IHBsYW4gaGVyZSBpcyBmb3VyLWZvbGQgc3ltbWV0cmljLCBzbyB0aGF0IHNpZ24gaXNcbiAgLy8gaW1tYXRlcmlhbDsgd2hhdCBtYXR0ZXJzIGlzIHRoYXQgdGhlIHNsYWIgbm93IHJ1bnMgVVAgZnJvbSB5PTAgYW5kIG5lZWRzIGxpZnRpbmcgYnkgeTAuXG4gIGcucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSgwLCB5MCwgMCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBzcXVhcmUgcGxhbiB3aXRoIGEgcmVjdGFuZ3VsYXIgTk9UQ0ggY3V0IGludG8gaXRzICtYIGZhY2UgLS0gdGhlIHN0YWlyIHdlbGwgb2YgYSB0ZW1wbGVcbiAqIHRlcnJhY2UuIEN1dHRpbmcgdGhlIHN0YWlyIG91dCBvZiB0aGUgcGxhbiByYXRoZXIgdGhhbiBoYW5naW5nIGl0IG9mZiB0aGUgb3V0c2lkZSBpcyB3aGF0IGtlZXBzXG4gKiBhbiBhc3ltbWV0cmljIGZlYXR1cmUgaW5zaWRlIGEgc3ltbWV0cmljIGRlY2xhcmVkIGVudmVsb3BlOiBhIGZsaWdodCBwcm9qZWN0aW5nIHBhc3QgYSA5IG1cbiAqIHRlcnJhY2Ugd291bGQgcHV0IHRoZSBwcm9wJ3MgYm91bmRpbmcgYm94IG9mZi1jZW50cmUgYW5kIG92ZXIgaXRzIGRlY2xhcmVkIHdpZHRoIG9uIG9uZSBzaWRlLlxuICovXG5mdW5jdGlvbiBub3RjaGVkU3F1YXJlKGE6IG51bWJlciwgbm90Y2hIYWxmWjogbnVtYmVyLCB4SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1thLCAtYV0sIFthLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgbm90Y2hIYWxmWl0sXG4gICAgICAgICAgICAgICBbYSwgbm90Y2hIYWxmWl0sIFthLCBhXSwgWy1hLCBhXSwgWy1hLCAtYV1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFJFQ1RBTkdVTEFSIHBsYW4gd2l0aCBhIG5vdGNoIGN1dCBpbnRvIGl0cyArWiBmYWNlLiBUaGUgc3F1YXJlIHZlcnNpb24gYWJvdmUgaXMgd2hhdCBhIGNoZWRpIG9yXG4gKiBhIHByYW5nIHRlcnJhY2UgbmVlZHM7IGEgaGFsbCB0aGF0IGlzIHR3aWNlIGFzIGxvbmcgYXMgaXQgaXMgd2lkZSBuZWVkcyB0aGUgdHdvIGhhbGYtZXh0ZW50cyBrZXB0XG4gKiBhcGFydCwgYW5kIGl0cyBzdGFpciBpcyBvbiBhIHNob3J0IGVuZCByYXRoZXIgdGhhbiBhIGxvbmcgb25lLlxuICovXG5mdW5jdGlvbiBub3RjaGVkUmVjdChoeDogbnVtYmVyLCBoejogbnVtYmVyLCBueDogbnVtYmVyLCB6SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1toeCwgLWh6XSwgW2h4LCBoel0sIFtueCwgaHpdLCBbbngsIHpJbm5lcl0sIFstbngsIHpJbm5lcl0sIFstbngsIGh6XSwgWy1oeCwgaHpdLCBbLWh4LCAtaHpdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogVGhlIGNyb3NzLXNlY3Rpb24gb2Ygb25lIHJvb2YgdGllciwgYXMgYSBjbG9zZWQgdHJhcGV6b2lkIGluIFhZOiBlYXZlcyBhdCAoKy1oYWxmQmFzZSwgeTApXG4gKiByaXNpbmcgYXQgYHBpdGNoYCAoYXMgYSB0YW5nZW50KSB0byBhIGZsYXQgdG9wIGF0IHkxLlxuICpcbiAqIFRoYWkgdGVtcGxlIHJvb2ZzIG5lc3QsIGFuZCB0aGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSBUUlVOQ0FUSU9OLiBUaHJlZSBmdWxsIGdhYmxlcyBhdCBvbmVcbiAqIHBpdGNoIGNhbm5vdCBuZXN0IC0tIHRoZSB3aWRlc3QgdGllcidzIHJpZGdlIHdvdWxkIGJlIHRoZSBoaWdoZXN0LCB3aGljaCBpcyB1cHNpZGUgZG93bi4gV2hhdFxuICogYWN0dWFsbHkgaGFwcGVucyBpcyB0aGF0IGVhY2ggbG93ZXIgdGllciBpcyBjdXQgb2ZmIGF0IHRoZSBoZWlnaHQgd2hlcmUgdGhlIG5leHQgdGllcidzIGVhdmVzXG4gKiBiZWdpbiwgYW5kIGl0cyB1cHBlciBwYXJ0IGlzIGhpZGRlbiBiZWhpbmQgdGhhdCB0aWVyOyBvbmx5IHRoZSB0b3Btb3N0IHRpZXIgaXMgYSByZWFsIGdhYmxlLFxuICogY2xvc2VkIGJ5IHBhc3NpbmcgeTEgYXQgdGhlIGFwZXguXG4gKi9cbmZ1bmN0aW9uIHRpZXJQcm9maWxlKGhhbGZCYXNlOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHBpdGNoOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGluc2V0ID0gKHkxIC0geTApIC8gcGl0Y2g7XG4gIGNvbnN0IGhhbGZUb3AgPSBoYWxmQmFzZSAtIGluc2V0O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLWhhbGZCYXNlLCB5MCk7XG4gIHNoYXBlLmxpbmVUbyhoYWxmQmFzZSwgeTApO1xuICBpZiAoaGFsZlRvcCA+IDAuMDIpIHtcbiAgICBzaGFwZS5saW5lVG8oaGFsZlRvcCwgeTEpO1xuICAgIHNoYXBlLmxpbmVUbygtaGFsZlRvcCwgeTEpO1xuICB9IGVsc2Uge1xuICAgIHNoYXBlLmxpbmVUbygwLCB5MCArIGhhbGZCYXNlICogcGl0Y2gpOyAgIC8vIGEgcmVhbCByaWRnZTogdGhlIHRvcG1vc3QgdGllciBjbG9zZXMgdG8gYSBwb2ludFxuICB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBhbG9uZyArWiBiZXR3ZWVuIHR3byBkZXB0aHMsIHdpdGggbm8gcm90YXRpb24gLS0gdGhlIG5hdGl2ZSBkaXJlY3Rpb24gb2ZcbiAqICBFeHRydWRlR2VvbWV0cnkuIFVzZWQgd2hlcmUgdGhlIHByb2ZpbGUgZ2VudWluZWx5IGxpdmVzIGluIHRoZSBYWSBwbGFuZSwgc3VjaCBhcyB0aGUgcmFraW5nXG4gKiAgdHJpYW5nbGUgb2YgYSBzdGFpciBjaGVlay4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVBbG9uZ1ooc2hhcGU6IFRIUkVFLlNoYXBlLCB6MDogbnVtYmVyLCB6MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogejEgLSB6MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgZy50cmFuc2xhdGUoMCwgMCwgejApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSByZWN0YW5ndWxhciBwbGF0ZSB3aG9zZSBoZWFkIGlzIGEgaGFsZi1yb3VuZCBhcmNoLCBvcHRpb25hbGx5IGNhcnJ5aW5nIGFuIGFyY2hlZCBhcGVydHVyZSBvZlxuICogIHRoZSBzYW1lIGZvcm0uIFRoZSBhcGVydHVyZSBhcmMgaXMgQUxXQVlTIHN3ZXB0IGZyb20gYW5nbGUgMCB0byBQSTogd3JpdHRlbiB0aGUgb3RoZXIgd2F5IGl0XG4gKiAgcnVucyB1bmRlciB0aGUgY2lyY2xlIGluc3RlYWQgb2Ygb3ZlciBpdCBhbmQgbGVhdmVzIHRoZSBhcmNoIGhlYWQgZmlsbGVkIHNvbGlkLCB3aGljaCByZWFkcyBhc1xuICogIGEgc3F1YXJlIHdpbmRvdyB3aXRoIGEgZ2hvc3QgYXJjaCBkcmF3biBhY3Jvc3MgaXQuICovXG5mdW5jdGlvbiBhcmNoZWRQbGF0ZSh3OiBudW1iZXIsIGg6IG51bWJlciwgYXJjaFI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBob2xlPzogeyByOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC13IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuYWJzYXJjKDAsIHNwcmluZywgYXJjaFIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgc2hhcGUubGluZVRvKC13IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgcC5tb3ZlVG8oaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAubGluZVRvKGhvbGUuciwgaG9sZS5zcHJpbmcpO1xuICAgIHAuYWJzYXJjKDAsIGhvbGUuc3ByaW5nLCBob2xlLnIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgICBwLmxpbmVUbygtaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAuY2xvc2VQYXRoKCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBISVAgUk9PRiB3aXRoIGEgY29uY2F2ZSBzbG9wZSBhbmQgdXBzd2VwdCBjb3JuZXJzIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YsIHdoaWNoIG5vbmUgb2YgdGhlXG4gKiBvdGhlciBzaGFwZSBoZWxwZXJzIGhlcmUgY2FuIGV4cHJlc3MuXG4gKlxuICogSXQgaXMgZ2VuZXJhdGVkIGFzIGEgcmluZyBvZiByZWN0YW5nbGVzIGNsaW1iaW5nIGZyb20gdGhlIGVhdmVzIHRvIHRoZSByaWRnZSByYXRoZXIgdGhhbiBhcyBhblxuICogZXh0cnVkZWQgcHJvZmlsZSwgYmVjYXVzZSBhIGhpcCBzbG9wZXMgb24gYWxsIGZvdXIgc2lkZXM6IGFuIGV4dHJ1c2lvbiBnaXZlcyB2ZXJ0aWNhbCBnYWJsZSBlbmRzLFxuICogd2hpY2ggaXMgYSBkaWZmZXJlbnQgYnVpbGRpbmcuXG4gKlxuICogVGhlIGhvcml6b250YWwgc2hyaW5rIGZvbGxvd3MgYCgxIC0gdCleY3VydmVFeHBgLCBhbmQgdGhlIGV4cG9uZW50IG11c3QgYmUgQUJPVkUgb25lLiBUaGUgc2xvcGVcbiAqIGF0IGFueSBoZWlnaHQgaXMgZHkvZHgsIHNvIGEgcGxhbiB0aGF0IHNocmlua3MgRkFTVCBmb3IgYSBnaXZlbiByaXNlIGlzIGEgc2hhbGxvdyBzbG9wZTogd2l0aFxuICogcSA+IDEgdGhlIGRlcml2YXRpdmUgcSgxLXQpXihxLTEpIGlzIGxhcmdlIGF0IHRoZSBlYXZlcyBhbmQgc21hbGwgYXQgdGhlIHJpZGdlLCB3aGljaCBpcyBzaGFsbG93XG4gKiBlYXZlcyBhbmQgYSBzdGVlcCByaWRnZSAtLSB0aGUgRWFzdCBBc2lhbiByb29mLiBCZWxvdyBvbmUgaXQgaXMgdGhlIG90aGVyIHdheSByb3VuZCBhbmQgYnVpbGRzIGFcbiAqIGZsYXQtdG9wcGVkIHRlbnQsIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGF0dGVtcHQgaGVyZSByZW5kZXJlZC4gQSBsaW5lYXIgc2hyaW5rIGdpdmVzIHRoZVxuICogc3RyYWlnaHQgcHlyYW1pZCBvZiBhIGhpcCByb29mIGFueXdoZXJlIGVsc2UgaW4gdGhlIHdvcmxkLlxuICpcbiAqIGBjb3JuZXJMaWZ0YCByYWlzZXMgYW5kIHB1c2hlcyBvdXQgdGhlIGZvdXIgZWF2ZXMgY29ybmVycywgdGFwZXJpbmcgYXdheSBieSBhIHRoaXJkIG9mIHRoZSB3YXlcbiAqIHVwLiBUaGF0IHVwc3dlZXAgaXMgdGhlIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nIHRoaW5nIGFib3V0IHRoZSByb29mLCBhbmQgaXQgaXMgd2h5IHRoZSBwbGFuXG4gKiBoYWxmLXdpZHRoIHBhc3NlZCBpbiBtdXN0IGxlYXZlIHJvb206IHRoZSBjb3JuZXJzIGVuZCB1cCBmdXJ0aGVyIG91dCB0aGFuIHRoZSBlYXZlcyBsaW5lLlxuICpcbiAqIFRoZSByZXN1bHQgaXMgYSBjbG9zZWQgc29saWQgLS0gb3V0ZXIgc3VyZmFjZSwgYSBzb2ZmaXQgYGRyb3BgIGJlbG93IHRoZSBlYXZlcywgYW5kIGEgZmFzY2lhIGJhbmRcbiAqIGJldHdlZW4gdGhlbS4gQW4gb3BlbiBzaGVsbCB3b3VsZCBsZXQgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueVxuICogbG93IGFuZ2xlLlxuICovXG5mdW5jdGlvbiBoaXBSb29mKGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIHJpZGdlSGFsZlo6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgY3VydmVFeHA6IG51bWJlciwgc3RlcHM6IG51bWJlciwgZHJvcDogbnVtYmVyLCBjb3JuZXJMaWZ0OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIEVJR0hUIHBvaW50cyBwZXIgcmluZywgbm90IGZvdXI6IHRoZSBmb3VyIGNvcm5lcnMgYW5kIHRoZSBmb3VyIGVkZ2UgbWlkcG9pbnRzLiBXaXRoIGZvdXIgdGhlXG4gIC8vIGNvcm5lciBsaWZ0IGhhcyBub3doZXJlIHRvIGZhbGwgYXdheSB0byBhbmQgcmFpc2VzIHRoZSBFTlRJUkUgZWF2ZXMgbGluZSwgd2hpY2ggYnVpbHQgYSBzYWRkbGVcbiAgLy8gaW5zdGVhZCBvZiBhIHJvb2YuIFRoZSBtaWRwb2ludHMgYXJlIHdoYXQgaG9sZCB0aGUgZWF2ZXMgZG93biBiZXR3ZWVuIHRoZSBjb3JuZXJzLlxuICAvL1xuICAvLyBUaGUgb3JkZXIgaXMgKCt4LC16KSwgbWlkLCAoLXgsLXopLCBtaWQsICgteCwreiksIG1pZCwgKCt4LCt6KSwgbWlkLCB3aGljaCBpcyBjb3VudGVyLWNsb2Nrd2lzZVxuICAvLyBzZWVuIGZyb20gQUJPVkUgLS0gdGhlIHdpbmRpbmcgYW4gdXB3YXJkLWZhY2luZyBzdXJmYWNlIG5lZWRzLiBXb3VuZCB0aGUgb3RoZXIgd2F5IHRoZSB3aG9sZVxuICAvLyByb29mIHJlbmRlcnMgaW5zaWRlIG91dCwgd2hpY2ggbG9va3MgbGlrZSBhIHRoaW4gYmxhY2sgbWVtYnJhbmUgcmF0aGVyIHRoYW4gYSBtaXN0YWtlLlxuICBjb25zdCByaW5nID0gKHQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygxIC0gdCwgY3VydmVFeHApO1xuICAgIGNvbnN0IGcgPSBNYXRoLnBvdyhNYXRoLm1heCgwLCAxIC0gdCAvIDAuMzQpLCAyKTtcbiAgICBjb25zdCBsaWZ0ID0gY29ybmVyTGlmdCAqIGcsIG91dCA9IDEgKyAwLjA0NSAqIGc7XG4gICAgY29uc3QgYXggPSBoeCAqIGYgKiBvdXQsIGF6ID0gKHJpZGdlSGFsZlogKyAoaHogLSByaWRnZUhhbGZaKSAqIGYpICogb3V0O1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgYyA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHkgKyBsaWZ0LCB6XTtcbiAgICBjb25zdCBtID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSwgel07XG4gICAgcmV0dXJuIFtjKGF4LCAtYXopLCBtKDAsIC1heiksIGMoLWF4LCAtYXopLCBtKC1heCwgMCksXG4gICAgICAgICAgICBjKC1heCwgYXopLCBtKDAsIGF6KSwgYyhheCwgYXopLCBtKGF4LCAwKV07XG4gIH07XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgbGV0IHByZXYgPSByaW5nKDApO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgY29uc3QgY3VyID0gcmluZyhpIC8gc3RlcHMpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgICAgcHVzaChwcmV2W2tdLCBwcmV2W2syXSwgY3VyW2syXSk7XG4gICAgICBwdXNoKHByZXZba10sIGN1cltrMl0sIGN1cltrXSk7XG4gICAgfVxuICAgIHByZXYgPSBjdXI7XG4gIH1cbiAgLy8gRmFzY2lhIGJhbmQgYW5kIHNvZmZpdCwgc28gdGhlIHJvb2YgaXMgYSBzb2xpZCByYXRoZXIgdGhhbiBhIHNoZWxsLiBBbiBvcGVuIHNoZWxsIGxldHMgdGhlXG4gIC8vIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueSBsb3cgYW5nbGUuXG4gIGNvbnN0IGUgPSByaW5nKDApO1xuICBjb25zdCBsb3cgPSBlLm1hcCgocCkgPT4gW3BbMF0sIHBbMV0gLSBkcm9wLCBwWzJdXSk7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICBwdXNoKGxvd1trXSwgZVtrXSwgZVtrMl0pO1xuICAgIHB1c2gobG93W2tdLCBlW2syXSwgbG93W2syXSk7XG4gIH1cbiAgZm9yIChsZXQgayA9IDE7IGsgPCA3OyBrKyspIHB1c2gobG93WzBdLCBsb3dbayArIDFdLCBsb3dba10pOyAgIC8vIHNvZmZpdCBmYW4sIGZhY2luZyBkb3duXG5cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBSSUJCRUQgZG9tZSAtLSBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiB3aG9zZSByYWRpdXMgaXMgbW9kdWxhdGVkIGFyb3VuZCB0aGUgYXhpcywgc28gaXQgcmVhZHNcbiAqIGFzIHRoZSBtZWxvbi1yaWJiZWQgZG9tZSBvZiBhIG1vc3F1ZSByYXRoZXIgdGhhbiBhIHNtb290aCBoZW1pc3BoZXJlLlxuICpcbiAqIExhdGhlR2VvbWV0cnkgY2Fubm90IGRvIHRoaXM6IGEgbGF0aGUgcmV2b2x2ZXMgb25lIHByb2ZpbGUgYXQgb25lIHJhZGl1cyBwZXIgaGVpZ2h0LCBhbmQgcmlicyBhcmVcbiAqIGEgdmFyaWF0aW9uIEFST1VORCB0aGUgYXhpcywgbm90IGFsb25nIGl0LiBTbyB0aGUgc3VyZmFjZSBpcyBnZW5lcmF0ZWQgZGlyZWN0bHksIHNhbXBsaW5nXG4gKiBgMSArIGFtcCAqIGNvcyhyaWJzICogdGhldGEpYCBwZXIgc2VjdG9yLiBUaGUgcmlicyBhcmUgdGhlIHJlYXNvbiB0aGUgZG9tZSBpcyByZWNvZ25pc2FibGUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20gLS0gYSBzbW9vdGggZ3JlZW4gaGVtaXNwaGVyZSByZWFkcyBhcyBhIHdhdGVyIHRhbmsuXG4gKi9cbmZ1bmN0aW9uIHJpYmJlZERvbWUocHJvZmlsZTogbnVtYmVyW11bXSwgcmliczogbnVtYmVyLCBhbXA6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHZhbGxleT86IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IGNvbDogbnVtYmVyW10gPSBbXTtcbiAgLy8gVGhlIHJpYnMgYXJlIG5vdCBvbmx5IGEgc2hhcGUuIE9uIHRoZSBtb3NxdWUncyBkb21lcyB0aGUgY3Jlc3RzIGFyZSBwYWxlIGFuZCB0aGUgdmFsbGV5cyBhcmVcbiAgLy8gZ3JlZW4sIGFuZCB0aGF0IHN0cmlwZSBpcyBtb3N0IG9mIHdoYXQgdGhlIGRvbWUgcmVhZHMgYXMgYXQgZGlzdGFuY2UuIEl0IGlzIGNhcnJpZWQgYXMgYVxuICAvLyBwZXItdmVydGV4IE1VTFRJUExJRVIgb2ZmIHRoZSBzYW1lIGNvc2luZSB0aGF0IHNoYXBlcyB0aGUgcmliIC0tIHR3byBtZWFzdXJlbWVudHMsIHRoZSBjcmVzdFxuICAvLyBjb2xvdXIgb24gdGhlIG1hdGVyaWFsIGFuZCB0aGUgdmFsbGV5IGFzIHRoZSByYXRpbyBiZXR3ZWVuIHRoZW0gLS0gc28gdGhlIHN0cmlwaW5nIGNvc3RzIGFuXG4gIC8vIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIHRleHR1cmUgc2V0IG9yIGEgc2Vjb25kIGRyYXcgY2FsbC5cbiAgY29uc3QgdGludCA9IChqOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIXZhbGxleSkgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICAvLyBSYWlzZWQgdG8gMC41NSByYXRoZXIgdGhhbiBsZWZ0IGxpbmVhci4gQSBjb3NpbmUgc3BlbmRzIGhhbGYgaXRzIGFyZWEgbmVhciBlYWNoIGV4dHJlbWUsIGFuZFxuICAgIC8vIHRoYXQgcmVuZGVycyBhIGRvbWUgdGhhdCBpcyBwYWxlIG92ZXJhbGwgd2hlcmUgdGhlIHBsYXRlJ3MgaXMgZ3JlZW4gb3ZlcmFsbDogdGhlIGNyZXN0IGlzIGFcbiAgICAvLyBuYXJyb3cgaGlnaGxpZ2h0IG9uIGEgcmVhbCByaWIsIG5vdCBoYWxmIG9mIGl0LiBUaGUgZXhwb25lbnQgd2lkZW5zIHRoZSB2YWxsZXkuXG4gICAgY29uc3QgZiA9IE1hdGgucG93KCgxIC0gTWF0aC5jb3MocmlicyAqICgoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZykpKSAvIDIsIDAuNTUpO1xuICAgIHJldHVybiBbMSArICh2YWxsZXlbMF0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzFdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsyXSAtIDEpICogZl07XG4gIH07XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGNvbnN0IGF0ID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdGggPSAoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICBjb25zdCBmID0gMSArIGFtcCAqIE1hdGguY29zKHJpYnMgKiB0aCk7XG4gICAgY29uc3QgciA9IHByb2ZpbGVbaV1bMF0gKiBmO1xuICAgIHJldHVybiBbTWF0aC5zaW4odGgpICogciwgcHJvZmlsZVtpXVsxXSwgTWF0aC5jb3ModGgpICogcl07XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZmlsZS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gYXQoaSwgaiksIGIgPSBhdChpLCBqICsgMSksIGMgPSBhdChpICsgMSwgaiArIDEpLCBkID0gYXQoaSArIDEsIGopO1xuICAgICAgcHVzaChhLCBiLCBjKTtcbiAgICAgIHB1c2goYSwgYywgZCk7XG4gICAgICBjb25zdCB0YSA9IHRpbnQoaiksIHRiID0gdGludChqICsgMSk7XG4gICAgICBjb2wucHVzaCguLi50YSwgLi4udGIsIC4uLnRiLCAuLi50YSwgLi4udGIsIC4uLnRhKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGlmICh2YWxsZXkpIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2wpLCAzKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBQT0lOVEVEIGFyY2ggcGxhdGUgLS0gdGhlIHR3by1jZW50cmVkIGFyY2ggb2YgYSBtb3NxdWUsIG5vdCB0aGUgaGFsZi1yb3VuZCBvZiBhIFJvbWFuIG9uZS5cbiAqIGBhcmNoZWRQbGF0ZWAgYWJvdmUgc3dlZXBzIGEgc2luZ2xlIHNlbWljaXJjbGUsIHdoaWNoIGlzIHRoZSB3cm9uZyBhcmNoIGhlcmUgYW5kIHJlYWRzIGFzIGFcbiAqIHJhaWx3YXkgdmlhZHVjdDsgdGhpcyBvbmUgcnVucyBlYWNoIHNpZGUgdXAgdG8gYSBzaGFyZWQgYXBleCB0aHJvdWdoIGEgcXVhZHJhdGljLCB3aGljaCBnaXZlcyB0aGVcbiAqIG9nZWUgcG9pbnQuXG4gKi9cbmZ1bmN0aW9uIHBvaW50ZWRBcmNoU2hhcGUodzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob2xlPzogeyB3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgYnVpbGQgPSAodGFyZ2V0OiBUSFJFRS5TaGFwZSB8IFRIUkVFLlBhdGgsIHd3OiBudW1iZXIsIHNwOiBudW1iZXIsIHJpc2U6IG51bWJlciwgc2w6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGh3ID0gd3cgLyAyO1xuICAgIHRhcmdldC5tb3ZlVG8oaHcsIHNsKTtcbiAgICB0YXJnZXQubGluZVRvKGh3LCBzcCk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oaHcsIHNwICsgcmlzZSAqIDAuNzIsIDAsIHNwICsgcmlzZSk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oLWh3LCBzcCArIHJpc2UgKiAwLjcyLCAtaHcsIHNwKTtcbiAgICB0YXJnZXQubGluZVRvKC1odywgc2wpO1xuICAgIHRhcmdldC5jbG9zZVBhdGgoKTtcbiAgfTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgYnVpbGQoc2hhcGUsIHcsIHNwcmluZywgYXBleFJpc2UsIHNpbGwpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIGJ1aWxkKHAsIGhvbGUudywgaG9sZS5zcHJpbmcsIGhvbGUuYXBleFJpc2UsIGhvbGUuc2lsbCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBUQVBFUklORyBUVUJFIGFsb25nICtaLCBidWlsdCBmcm9tIGEgbGlzdCBvZiBzdGF0aW9ucy4gRWFjaCBzdGF0aW9uIGlzXG4gKiBbeiwgY2VudHJlWCwgY2VudHJlWSwgcmFkaXVzWCwgcmFkaXVzWV0sIGFuZCBjb25zZWN1dGl2ZSBzdGF0aW9ucyBhcmUgam9pbmVkIGJ5IGEgcmluZyBvZiBgc2VnYFxuICogcG9pbnRzLCBzbyB0aGUgcmFkaXVzLCB0aGUgY2VudHJlIGFuZCB0aGUgZWxsaXBzZSByYXRpbyBjYW4gYWxsIHZhcnkgYWxvbmcgdGhlIGxlbmd0aC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvbmx5IE9SR0FOSUMgZm9ybSBpbiB0aGUgd2hvbGUga2l0LCBhbmQgaXQgZXhpc3RzIGZvciBvbmUgcHJvcDogYSByZWNsaW5pbmcgZmlndXJlIGlzXG4gKiBhIGxvbmcgc29mdCBtYXNzIHdob3NlIHNlY3Rpb24gY2hhbmdlcyBhdCBldmVyeSBwb2ludCBhbG9uZyBpdCAtLSBzaG91bGRlciB0byB3YWlzdCB0byBoaXAgdG9cbiAqIGNhbGYgLS0gYW5kIG5laXRoZXIgYSBsYXRoZSBub3IgYSBzdGFjayBvZiBib3hlcyBjYW4gc2F5IHRoYXQuIEEgYm94IGRlY29tcG9zaXRpb24gb2YgYSBseWluZ1xuICogYm9keSBpcyBub3QgYSBsb3ctcG9seSBib2R5LCBpdCBpcyBhIHBpbGUgb2YgbHVnZ2FnZS5cbiAqXG4gKiBBIHN0YXRpb24gd2l0aCBhIHJhZGl1cyBhdCBvciBuZWFyIHplcm8gY2xvc2VzIHRoZSB0dWJlLCBzbyB0aGUgZW5kcyBjYW4gYmUgY2FwcGVkIGJ5IHRoZVxuICogc3RhdGlvbiBsaXN0IGl0c2VsZiByYXRoZXIgdGhhbiBieSBhIHNlcGFyYXRlIGZhbi5cbiAqL1xuZnVuY3Rpb24gdHViZUFsb25nKHN0YXRpb25zOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gSU5ERVhFRCwgd2l0aCBzaGFyZWQgcmluZyB2ZXJ0aWNlcywgc28gY29tcHV0ZVZlcnRleE5vcm1hbHMgYXZlcmFnZXMgYWNyb3NzIHRoZSBxdWFkcyBhbmQgdGhlXG4gIC8vIHN1cmZhY2Ugc2hhZGVzIHNtb290aC4gVGhlIGZpcnN0IGJ1aWxkIGVtaXR0ZWQgbG9vc2UgdHJpYW5nbGVzLCBhbmQgYSBmbGF0LXNoYWRlZCBzb2Z0IGJvZHlcbiAgLy8gc2hvd3MgZXZlcnkgc3RhdGlvbiBhcyBhIGNyZWFzZSAtLSBhIHJlY2xpbmluZyBmaWd1cmUgdGhhdCBsb29rZWQgY3J1bXBsZWQgcmF0aGVyIHRoYW4gZHJhcGVkLlxuICAvL1xuICAvLyBBIHNpeHRoIHN0YXRpb24gZWxlbWVudCBgZmxhdFlgIENMQU1QUyB0aGUgcmluZydzIHVuZGVyc2lkZSB0byB0aGF0IGhlaWdodC4gQSBib2R5IHJlc3Rpbmcgb25cbiAgLy8gdGhlIGdyb3VuZCBpcyBub3QgYSBmbG9hdGluZyBlbGxpcHNlOiBpdCBzcHJlYWRzIHdoZXJlIGl0IGJlYXJzLCBhbmQgYW4gdW5jbGFtcGVkIHR1YmUgcmVhZHMgYXNcbiAgLy8gYSBzYXVzYWdlIG9uIGEgdGFibGUuIFRoZSBjbGFtcCBpcyBhIHNvZnQgb25lIC0tIHRoZSByaW5nIGtlZXBzIGl0cyB3aWR0aCBhbmQgbG9zZXMgaXRzIGRyb29wIC0tXG4gIC8vIHNvIHRoZSBjcmVhc2UgaXQgbGVhdmVzIGlzIHRoZSBjb250YWN0IGVkZ2UgcmF0aGVyIHRoYW4gYSBjdXQuXG4gIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgW3osIGN4LCBjeSwgcngsIHJ5LCBmbGF0WV0gPSBzdGF0aW9uc1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCB0aCA9IGogKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguc2luKHRoKSAqIHJ4O1xuICAgICAgbGV0IHkgPSBjeSArIE1hdGguY29zKHRoKSAqIHJ5O1xuICAgICAgaWYgKGZsYXRZICE9PSB1bmRlZmluZWQgJiYgeSA8IGZsYXRZKSB5ID0gZmxhdFk7XG4gICAgICBwb3MucHVzaCh4LCB5LCB6KTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gaSAqIHNlZyArIGosIGIgPSAoaSArIDEpICogc2VnICsgaiwgYyA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgICBpZHgucHVzaChhLCBiLCBjLCBhLCBjLCBkKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIGN1cmxlZCBob3JuOiBgbmAgdGFwZXJpbmcgYm94IHNlZ21lbnRzIHNhbXBsZWQgYWxvbmcgYSBzaW5lLCBlYWNoIHJvdGF0ZWQgdG8gaXRzIG93biB0YW5nZW50LlxuICogU2hhcmVkIGJ5IHRoZSB1Ym9zb3QncyBjaG9mYSwgdGhlIHByYW5nJ3MgdHJpZGVudCBwcm9uZ3MgYW5kIHRoZSBDaGluZXNlIHNocmluZSdzIGZseWluZyBlYXZlcyxcbiAqIGJlY2F1c2UgYWxsIHRocmVlIGFyZSB0aGUgc2FtZSBwcm9ibGVtIC0tIGEgc3RyYWlnaHQgc3Bpa2UgYXQgYSByb29mIGVuZCByZWFkcyBhcyBhIGxpZ2h0bmluZyByb2RcbiAqIGFuZCB0aGUgY3VybCBpcyB0aGUgd2hvbGUgZmVhdHVyZS5cbiAqL1xuZnVuY3Rpb24gY3VybGVkSG9ybihyZWFjaDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHRoaWNrOiBudW1iZXIsIG4gPSA2KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGF0ID0gKHU6IG51bWJlcikgPT4gW3JlYWNoICogTWF0aC5zaW4odSAqIE1hdGguUEkgKiAwLjQ2KSwgcmlzZSAqIHVdO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGNvbnN0IGEgPSBhdChqIC8gbiksIGIgPSBhdCgoaiArIDEpIC8gbik7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCB3ID0gdGhpY2sgKiAoMSAtIGogLyBuKSArIHRoaWNrICogMC4yODtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIE1hdGguaHlwb3QoZHgsIGR5KSArIHRoaWNrICogMC4yLCB3KTtcbiAgICBnLnJvdGF0ZVooTWF0aC5hdGFuMigtZHgsIGR5KSk7XG4gICAgZy50cmFuc2xhdGUoKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyLCAwKTtcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlR2VvcyhzZWdzKTtcbn1cblxuLyoqXG4gKiBSYW1wIGEgcGVyLXZlcnRleCB0aW50IG92ZXIgYSBoZWlnaHQgYmFuZCwgYXMgYSBNVUxUSVBMSUVSIG9uIHRoZSBtYXRlcmlhbCBjb2xvdXIuXG4gKlxuICogVGhpcyBpcyBob3cgYSBsb2NhbCBtYXRlcmlhbCBvdmVycmlkZSBnZXRzIGRlbGl2ZXJlZCBvbiBhIG1lcmdlZCBjb21wb25lbnQgdGhhdCBpcyBvbmUgbWVzaCBhbmRcbiAqIG11c3Qgc3RheSBvbmUgZHJhdyBjYWxsOiBhIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgc3VibWlzc2lvbiBhbmQgYSBzaGFkZXIgc3dpdGNoIHRvIHNheVxuICogdGhhdCB0aGUgYm90dG9tIG9mIGEgd2FsbCBpcyBkaXJ0aWVyIHRoYW4gdGhlIHRvcC4gYHJnYjBgIGlzIHRoZSBtZWFzdXJlZCB0aW50IGF0IHkwIGV4cHJlc3NlZFxuICogYXMgYSBmcmFjdGlvbiBvZiB0aGUgbWF0ZXJpYWwncyBvd24gbWVhc3VyZWQgYWxiZWRvLCBzbyB0aGUgdG9wIG9mIHRoZSBiYW5kIGlzIHVudGludGVkIDEuMCBhbmRcbiAqIHRoZSBudW1iZXJzIGJlbG93IHN0YXkgdHJhY2VhYmxlIHRvIHR3byBjcm9wIG1lYXN1cmVtZW50cyByYXRoZXIgdGhhbiB0byBhIGNob3NlbiBkYXJrZW5pbmcuXG4gKi9cbmZ1bmN0aW9uIHRpbnRCeUhlaWdodChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByZ2IwOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChwLmdldFkoaSkgLSB5MCkgLyAoeTEgLSB5MCkpKTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IDM7IGMrKykgY29sW2kgKiAzICsgY10gPSByZ2IwW2NdICsgKDEgLSByZ2IwW2NdKSAqIHQ7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdmVoaWNsZSBoZWxwZXJzICovXG5cbi8qKiBQYWludCBhIHdob2xlIGdlb21ldHJ5IG9uZSB2ZXJ0ZXggY29sb3VyLiBFdmVyeSB2ZWhpY2xlIG1hdGVyaWFsIGhlcmUgaXMgV0hJVEUgd2l0aFxuICogIHZlcnRleENvbG9ycyBvbiwgc28gYSBjb2xvdXIgZGlmZmVyZW5jZSBjb3N0cyBhbiBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSBtYXRlcmlhbDogdGhlIGJvZHknc1xuICogIHR3by10b25lLCB0aGUgdHlyZSBhZ2FpbnN0IGl0cyByaW0sIGFuIGFtYmVyIGluZGljYXRvciBvbiBhIGJsYWNrIGJ1bXBlciBhbGwgcmlkZSBvbmUgc2hhZGVyLlxuICogIFZlcnRleCBjb2xvdXJzIG11bHRpcGx5IGluIExJTkVBUiBzcGFjZSwgc28gdGhlIGhleCBpcyBjb252ZXJ0ZWQgdGhyb3VnaCBUSFJFRS5Db2xvciwgd2hpY2hcbiAqICBkb2VzIHRoZSBzUkdCLXRvLWxpbmVhciBzdGVwLiAqL1xuZnVuY3Rpb24gdGludEdlbyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBoZXg6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcihoZXgpO1xuICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjsgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBCb3gtcHJvamVjdCB3b3JsZC1tZXRyZSBVVnMgc28gYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSAobXVkLCBydXN0LCBjb3JydWdhdGlvbikgcmVwZWF0c1xuICogIGF0IGEgcmVhbCBzaXplIG9uIGV2ZXJ5IGZhY2UuIGBzY2FsZWAgaXMgbWV0cmVzIHBlciB0aWxlLiBUaGUgZG9taW5hbnQgbm9ybWFsIGF4aXMgcGlja3MgdGhlXG4gKiAgcGFpciBvZiB3b3JsZCBheGVzIHVzZWQsIHNvIGEgcm9vZiByZWFkcyAoeCwgeikgYW5kIGEgc2lkZSByZWFkcyAoeiwgeSkuICovXG5mdW5jdGlvbiB3b3JsZFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXkgPSBNYXRoLmFicyhucm0uZ2V0WShpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGxldCB1OiBudW1iZXIsIHY6IG51bWJlcjtcbiAgICBpZiAoYXggPj0gYXkgJiYgYXggPj0gYXopIHsgdSA9IHAuZ2V0WihpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIGVsc2UgaWYgKGF5ID49IGF6KSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFooaSk7IH1cbiAgICBlbHNlIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqXG4gKiBTSURFLVBST0ZJTEUgRVhUUlVTSU9OOiBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgKHRoZSB2ZWhpY2xlJ3Mgc2lkZSBzaWxob3VldHRlLCB3aGVlbFxuICogYXJjaGVzIGluY2x1ZGVkIGFzIG5vdGNoZXMpIHN3ZXB0IGFjcm9zcyB0aGUgZnVsbCB3aWR0aCwgdGhlbiBzaGFwZWQgcGVyIHZlcnRleDpcbiAqXG4gKiAgLSBgdHVtYmxlYCAgbmFycm93cyB0aGUgc2VjdGlvbiBhYm92ZSB0aGUgYmVsdCBsaW5lIC0tIHggaXMgc2NhbGVkIGJ5ICgxIC0gayAqIHQpIHdoZXJlIHQgcnVuc1xuICogICAgICAgICAgICAgIDAgYXQgYGJlbHRgIHRvIDEgYXQgYHJvb2ZgLiBUaGF0IGlzIHRoZSB0dW1ibGVob21lIG9mIGEgcmVhbCBjYXIgYm9keSBhbmQgaXMgd2hhdFxuICogICAgICAgICAgICAgIHN0b3BzIHRoZSBnbGFzc2hvdXNlIHJlYWRpbmcgYXMgYSBib3ggb24gYSBib3guXG4gKiAgLSBgcGxhbmAgICAgcm91bmRzIHRoZSBwbGFuIGF0IHRoZSBub3NlIGFuZCB0YWlsOiBhbiBvcHRpb25hbCBsaXN0IG9mIFt6LCB4U2NhbGVdIHN0YXRpb25zXG4gKiAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkIGFsb25nIHosIHNvIGEgYm9ubmV0IGNhbiB0YXBlciB0byAwLjkgb2YgdGhlIHdpZHRoIGF0IHRoZSBidW1wZXIgbGluZS5cbiAqXG4gKiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGluIGl0cyBvd24gKHUsIHYsIGRlcHRoKSBmcmFtZTsgcm90YXRlWSgtUEkvMikgbWFwcyBkZXB0aCB0byAteCBhbmQgdSB0b1xuICogd29ybGQgeiwgYW5kIHRoZSB0cmFuc2xhdGUgcmUtY2VudHJlcyB0aGUgc2xhYiBvbiB4ID0gMC4gQW55IHNoYXBpbmcgaXMgYXBwbGllZCBBRlRFUiB0aGF0LCBhbmRcbiAqIG5vcm1hbHMgYXJlIHJlY29tcHV0ZWQgbGFzdCBzbyB0aGUgc2hhZGVkIGZhY2VzIGZvbGxvdyB0aGUgc2hhcGVkIHN1cmZhY2UuXG4gKi9cbmZ1bmN0aW9uIHNpZGVFeHRydWRlKHByb2ZpbGU6IG51bWJlcltdW10sIHdpZHRoOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBvcHRzOiB7IHR1bWJsZT86IHsgYmVsdDogbnVtYmVyLCByb29mOiBudW1iZXIsIGs6IG51bWJlciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFuPzogbnVtYmVyW11bXSwgY3VydmVTZWdtZW50cz86IG51bWJlciB9ID0ge30pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwcm9maWxlWzBdWzBdLCBwcm9maWxlWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9maWxlLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHJvZmlsZVtpXVswXSwgcHJvZmlsZVtpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogd2lkdGgsIGJldmVsRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZVNlZ21lbnRzOiBvcHRzLmN1cnZlU2VnbWVudHMgPz8gNiB9KTtcbiAgZy5yb3RhdGVZKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKHdpZHRoIC8gMiwgMCwgMCk7XG4gIHNoYXBlV2lkdGgoZywgb3B0cyk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogVGhlIHBlci12ZXJ0ZXggeCBzaGFwaW5nIHNoYXJlZCBieSB0aGUgYm9keSBhbmQgaXRzIGdsYXNzIGJhbmQsIHNvIGEgcGFuZSBvZmZzZXQgNSBtbSBwcm91ZCBvZlxuICogIHRoZSBib2R5IHN0YXlzIDUgbW0gcHJvdWQgYWZ0ZXIgYm90aCBhcmUgbmFycm93ZWQgYnkgdGhlIHNhbWUgZnVuY3Rpb24uICovXG5mdW5jdGlvbiBzaGFwZVdpZHRoKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LFxuICAgICAgICAgICAgICAgICAgICBvcHRzOiB7IHR1bWJsZT86IHsgYmVsdDogbnVtYmVyLCByb29mOiBudW1iZXIsIGs6IG51bWJlciB9LCBwbGFuPzogbnVtYmVyW11bXSB9KTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBsZXQgeCA9IHAuZ2V0WChpKTsgY29uc3QgeSA9IHAuZ2V0WShpKSwgeiA9IHAuZ2V0WihpKTtcbiAgICBpZiAob3B0cy50dW1ibGUpIHtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAoeSAtIG9wdHMudHVtYmxlLmJlbHQpIC8gKG9wdHMudHVtYmxlLnJvb2YgLSBvcHRzLnR1bWJsZS5iZWx0KSkpO1xuICAgICAgeCAqPSAxIC0gb3B0cy50dW1ibGUuayAqIHQ7XG4gICAgfVxuICAgIGlmIChvcHRzLnBsYW4gJiYgb3B0cy5wbGFuLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHN0ID0gb3B0cy5wbGFuO1xuICAgICAgbGV0IHMgPSBzdFswXVsxXTtcbiAgICAgIGlmICh6IDw9IHN0WzBdWzBdKSBzID0gc3RbMF1bMV07XG4gICAgICBlbHNlIGlmICh6ID49IHN0W3N0Lmxlbmd0aCAtIDFdWzBdKSBzID0gc3Rbc3QubGVuZ3RoIC0gMV1bMV07XG4gICAgICBlbHNlIGZvciAobGV0IGsgPSAwOyBrIDwgc3QubGVuZ3RoIC0gMTsgaysrKSB7XG4gICAgICAgIGlmICh6ID49IHN0W2tdWzBdICYmIHogPD0gc3RbayArIDFdWzBdKSB7XG4gICAgICAgICAgY29uc3QgdSA9ICh6IC0gc3Rba11bMF0pIC8gKHN0W2sgKyAxXVswXSAtIHN0W2tdWzBdKTtcbiAgICAgICAgICBzID0gc3Rba11bMV0gKyAoc3RbayArIDFdWzFdIC0gc3Rba11bMV0pICogdTsgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHggKj0gcztcbiAgICB9XG4gICAgcC5zZXRYKGksIHgpO1xuICB9XG4gIHAubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG59XG5cbi8qKiBBIHNlbWljaXJjdWxhciB3aGVlbC1hcmNoIG5vdGNoIGFzIHByb2ZpbGUgcG9pbnRzLCB0byBiZSBzcGxpY2VkIGludG8gYSBzaWRlIHByb2ZpbGUgdGhhdCBydW5zXG4gKiAgYWxvbmcgdGhlIHNpbGwgZnJvbSAreiB0byAteiAoaS5lLiB6IERFQ1JFQVNJTkcpLiBgbmAgc2VnbWVudHM7IHRoZSBhcmMgaXMgdGhlIFRPUCBoYWxmLiAqL1xuZnVuY3Rpb24gYXJjaE5vdGNoKHpjOiBudW1iZXIsIHlTaWxsOiBudW1iZXIsIHI6IG51bWJlciwgbiA9IDcpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBpICogTWF0aC5QSSAvIG47ICAgICAgICAgICAgICAgLy8gMCAuLiBQSSwgZnJvbSAreiByb3VuZCB0aGUgdG9wIHRvIC16XG4gICAgcHRzLnB1c2goW3pjICsgTWF0aC5jb3MoYSkgKiByLCB5U2lsbCArIE1hdGguc2luKGEpICogcl0pO1xuICB9XG4gIHJldHVybiBwdHM7XG59XG5cbi8qKlxuICogQSBXSEVFTDogb25lIGxhdGhlIGFib3V0IHRoZSBheGxlLiBUaGUgcHJvZmlsZSBydW5zIGZyb20gdGhlIGh1YiBmYWNlIG9uIG9uZSBzaWRlIG92ZXIgdGhlIHJpbVxuICogbGlwLCB0aGUgdHlyZSBzaWRld2FsbCwgdGhlIHRyZWFkIGFuZCBiYWNrIGRvd24gdGhlIGZhciBzaWRlLCBzbyB0aGUgd2hlZWwgaXMgYSBjbG9zZWQgc29saWQgd2l0aFxuICogbm8gb3BlbiBlbmQgZm9yIHRoZSB0dXJudGFibGUgZ2F0ZSB0byByZWFkIHRocm91Z2guIFJldm9sdmVkIGFib3V0IFkgYW5kIHRoZW4gbGFpZCBvbiBYLCBzbyB0aGVcbiAqIGF4bGUgaXMgdGhlIHggYXhpcyBhbmQgdGhlIHdoZWVsIHJvbGxzIGFib3V0IGl0IC0tIHdoaWNoIGlzIHRoZSBheGlzIGl0cyBwaXZvdCBkZWNsYXJlcy5cbiAqXG4gKiBUd28gdmVydGV4IGNvbG91cnM6IGByaW1IZXhgIG9uIHRoZSBodWIgYW5kIHJpbSBwb2ludHMsIGB0eXJlSGV4YCBvbiB0aGUgc2lkZXdhbGwgYW5kIHRyZWFkLiBUaGVcbiAqIGxhdGhlIG9yZGVycyB2ZXJ0aWNlcyBzZWdtZW50LW1ham9yIChpbmRleCA9IHNlZyAqIHBvaW50Q291bnQgKyBwb2ludCksIHdoaWNoIGlzIHdoYXQgbGV0cyBhXG4gKiBwZXItcHJvZmlsZS1wb2ludCBjb2xvdXIgYmUgd3JpdHRlbiB3aXRob3V0IGEgc2Vjb25kIGdlb21ldHJ5LlxuICovXG5mdW5jdGlvbiB3aGVlbEdlbyhyVHlyZTogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgdHlyZUhleDogbnVtYmVyLCByaW1IZXg6IG51bWJlciwgZGlzaCA9IDAuNTUpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGh3ID0gaGFsZlc7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtcbiAgICBbMCwgLWh3ICogZGlzaF0sIFtyUmltICogMC4zMCwgLWh3ICogZGlzaF0sIFtyUmltICogMC42MiwgLWh3ICogMC44MF0sIFtyUmltLCAtaHcgKiAwLjg2XSwgW3JSaW0sIC1odyAqIDAuOThdLFxuICAgIFtyVHlyZSAqIDAuOTMsIC1od10sIFtyVHlyZSwgLWh3ICogMC43Ml0sIFtyVHlyZSwgaHcgKiAwLjcyXSwgW3JUeXJlICogMC45MywgaHddLFxuICAgIFtyUmltLCBodyAqIDAuOThdLCBbclJpbSwgaHcgKiAwLjg2XSwgW3JSaW0gKiAwLjYyLCBodyAqIDAuODBdLCBbclJpbSAqIDAuMzAsIGh3ICogZGlzaF0sIFswLCBodyAqIGRpc2hdLFxuICBdO1xuICBjb25zdCByaW1Qb2ludCA9IChqOiBudW1iZXIpID0+IGogPD0gNCB8fCBqID49IDk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihwWzBdLCBwWzFdKSksIHNlZyk7XG4gIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGNvbnN0IGN0ID0gbmV3IFRIUkVFLkNvbG9yKHR5cmVIZXgpLCBjciA9IG5ldyBUSFJFRS5Db2xvcihyaW1IZXgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGMgPSByaW1Qb2ludChpICUgcHRzLmxlbmd0aCkgPyBjciA6IGN0O1xuICAgIGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICBnLnJvdGF0ZVooTWF0aC5QSSAvIDIpOyAgICAvLyBsYXRoZSBheGlzIFkgLT4gYXhsZSBvbiBYXG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBXaXJlLXNwb2tlZCB3aGVlbCBkcmVzc2luZzogYG5gIHRoaW4gYm94ZXMgcmFkaWF0aW5nIGZyb20gdGhlIGh1YiwgbGFjZWQgYWx0ZXJuYXRlbHkgdG8gZWFjaFxuICogIHNpZGUgb2YgdGhlIHJpbSBzbyB0aGV5IGNyb3NzIHRoZSB3YXkgcmVhbCBzcG9rZXMgZG8uIE1lcmdlZCBpbnRvIHRoZSB3aGVlbCBnZW9tZXRyeSBzbyB0aGVcbiAqICB3aGVlbCBzdGF5cyBPTkUgaW5zdGFuY2VkIGdlb21ldHJ5LiAqL1xuZnVuY3Rpb24gc3Bva2VzKHJIdWI6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBuOiBudW1iZXIsIGhleDogbnVtYmVyLCB0ID0gMC4wMDYsIHByaXNtID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgKiAyIC8gbjtcbiAgICBjb25zdCBzaWRlID0gKGkgJSAyID09PSAwID8gMSA6IC0xKSAqIGhhbGZXICogMC4zNTtcbiAgICBjb25zdCBsZW4gPSByUmltIC0gckh1YjtcbiAgICAvLyBgcHJpc21gOiBhbiBvcGVuIHRocmVlLXNpZGVkIHByaXNtIGF0IHNpeCB0cmlhbmdsZXMgd2hlcmUgdGhlIGJveCBjb3N0cyB0d2VsdmUgLS0gYSB3aXJlXG4gICAgLy8gc3Bva2UgaGFzIG5vIHJlc29sdmFibGUgc2VjdGlvbiBhdCBwcm9wIGRpc3RhbmNlLCBhbmQgMjggb2YgdGhlbSBvbiB0aHJlZSB3aGVlbHMgaXMgdGhlXG4gICAgLy8gZGlmZmVyZW5jZSBiZXR3ZWVuIGEgbGFyZ2UgcHJvcCBpbnNpZGUgaXRzIHRyaWFuZ2xlIGNlaWxpbmcgYW5kIG9uZSBvdmVyIGl0XG4gICAgY29uc3QgZyA9IHByaXNtID8gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkodCAqIDAuNjIsIHQgKiAwLjYyLCBsZW4sIDMsIDEsIHRydWUpIDogbmV3IFRIUkVFLkJveEdlb21ldHJ5KHQsIGxlbiwgdCk7XG4gICAgZy50cmFuc2xhdGUoMCwgckh1YiArIGxlbiAvIDIsIDApO1xuICAgIGcucm90YXRlWChNYXRoLmF0YW4yKHNpZGUsIGxlbikgKiAwLjYpO1xuICAgIGcucm90YXRlWCgwKTsgZy50cmFuc2xhdGUoMCwgMCwgc2lkZSAqIDAuNSk7XG4gICAgZy5yb3RhdGVYKGEpOyAgICAgICAgICAgIC8vIHJhZGlhdGUgYXJvdW5kIHRoZSBheGxlICh4KVxuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gdGludEdlbyhtZXJnZUdlb3Moc2VncyksIGhleCk7XG59XG5cbi8qKiBBIHBvbHlsaW5lIFRVQkU6IG9uZSBjeWxpbmRlciBwZXIgc2VnbWVudCwgZWFjaCByb3RhdGVkIG9udG8gaXRzIGNob3JkLCB3aXRoIGEgc21hbGwgc3BoZXJlLWxlc3NcbiAqICBvdmVybGFwIHNvIHRoZSBqb2ludHMgY2xvc2UuIEhhbmRsZWJhcnMsIGNhbm9weSByYWlscywgcm9sbCBjYWdlcyBhbmQgZnJhbWUgdHViZXMuICovXG4vKipcbiAqIGByYCBtYXkgYmUgYSBzaW5nbGUgcmFkaXVzIChldmVyeSBzZWdtZW50IHRoZSBzYW1lLCB0aGUgb3JpZ2luYWwgYmVoYXZpb3VyKSBvciBPTkUgUkFESVVTIFBFUlxuICogU1RBVElPTiwgd2hpY2ggdGFwZXJzIHRoZSB0dWJlLiBBIGNhcHBlZCBjb25zdGFudC1yYWRpdXMgdHViZSBlbmRzIGluIGEgZmxhdCBkaXNjLCBhbmQgb24gdGhlXG4gKiBzcGlyaXQgaG91c2UncyBlYXZlIGhvcm5zIHRoYXQgcmVhZCBhcyBmb3VyIGN1dC1vZmYgcG9zdHMgcmF0aGVyIHRoYW4gcG9pbnRzOyBhIGhvcm4sIGEgc3Bpa2Ugb3JcbiAqIGEgd2hpc2tlciBuZWVkcyBpdHMgbGFzdCBzdGF0aW9uIGF0IH4wLjI1IG9mIHRoZSBmYXNjaWEgcmFkaXVzLiBUaGUgam9pbnQgb3ZlcmxhcCB0aGF0IGhpZGVzIHRoZVxuICogc2VhbSBiZXR3ZWVuIHNlZ21lbnRzIGlzIChyYSArIHJiKSAqIDAuNiwgd2hpY2ggaXMgZXhhY3RseSB0aGUgb2xkIGByICogMS4yYCB3aGVuIHRoZXkgYXJlIGVxdWFsLFxuICogc28gYSBudW1iZXIgc3RpbGwgcHJvZHVjZXMgYnl0ZS1pZGVudGljYWwgZ2VvbWV0cnkuXG4gKi9cbmZ1bmN0aW9uIHR1YmUocHRzOiBudW1iZXJbXVtdLCByOiBudW1iZXIgfCBudW1iZXJbXSwgc2VnID0gOCwgaGV4PzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCByQXQgPSAoaTogbnVtYmVyKSA9PiAodHlwZW9mIHIgPT09ICdudW1iZXInID8gciA6IHJbTWF0aC5taW4oaSwgci5sZW5ndGggLSAxKV0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBhID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2ldWzBdLCBwdHNbaV1bMV0sIHB0c1tpXVsyXSk7XG4gICAgY29uc3QgYiA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpICsgMV1bMF0sIHB0c1tpICsgMV1bMV0sIHB0c1tpICsgMV1bMl0pO1xuICAgIGNvbnN0IGQgPSBiLmNsb25lKCkuc3ViKGEpOyBjb25zdCBsZW4gPSBkLmxlbmd0aCgpO1xuICAgIGlmIChsZW4gPCAxZS02KSBjb250aW51ZTtcbiAgICBjb25zdCByYSA9IHJBdChpKSwgcmIgPSByQXQoaSArIDEpO1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyYiwgcmEsIGxlbiArIChyYSArIHJiKSAqIDAuNiwgc2VnLCAxLCBmYWxzZSk7XG4gICAgY29uc3QgcSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBkLm5vcm1hbGl6ZSgpKTtcbiAgICBnLmFwcGx5UXVhdGVybmlvbihxKTtcbiAgICBjb25zdCBtID0gYS5jbG9uZSgpLmFkZChiKS5tdWx0aXBseVNjYWxhcigwLjUpO1xuICAgIGcudHJhbnNsYXRlKG0ueCwgbS55LCBtLnopO1xuICAgIHBhcnRzLnB1c2goZyk7XG4gIH1cbiAgY29uc3Qgb3V0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgcmV0dXJuIGhleCA9PT0gdW5kZWZpbmVkID8gb3V0IDogdGludEdlbyhvdXQsIGhleCk7XG59XG5cbi8qKlxuICogQSBGTEFUIFNUUkFQIHN3ZXB0IGFsb25nIGEgcG9seWxpbmU6IGEgY2hhaW4gb2YgYm94ZXMsIGVhY2ggb3JpZW50ZWQgc28gaXRzIExFTkdUSCBydW5zIGFsb25nIHRoZVxuICogc2VnbWVudCwgaXRzIFRISUNLTkVTUyBhbG9uZyB0aGUgb3V0d2FyZCBub3JtYWwgZnJvbSBgYWJvdXRgLCBhbmQgaXRzIFdJRFRIIHRhbmdlbnQgdG8gdGhhdFxuICogc3VyZmFjZS4gVGhpcyBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgZ3VhcmQgYW5kIGEgd2lyZTogYSBidWxraGVhZCBsYW1wJ3MgY2FnZSBpcyBwcmVzc2VkXG4gKiBmbGF0IGJhciwgYW5kIGEgcm91bmQgdHViZSBvZiB0aGUgc2FtZSBtZWFzdXJlZCB3aWR0aCBzaGFkZXMgdG8gYSBuYXJyb3cgaGlnaGxpZ2h0IGFuZCByZWFkcyBhc1xuICogd2lyZSAtLSB3aGljaCBpcyB0aGUgdGhpbmcgdGhpcyBraXQncyBhc3NldCBub3RlcyBydWxlIG91dC4gSXQgaXMgYWxzbyBDSEVBUEVSIHRoYW4gYHR1YmVgOiBhIGJveFxuICogaXMgMTIgdHJpYW5nbGVzIGFnYWluc3QgYSBjYXBwZWQgNS1zaWRlZCBjeWxpbmRlcidzIDIwLlxuICovXG5mdW5jdGlvbiBzdHJhcChwdHM6IG51bWJlcltdW10sIHc6IG51bWJlciwgdDogbnVtYmVyLCBhYm91dDogbnVtYmVyW10sIGhleD86IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYyA9IG5ldyBUSFJFRS5WZWN0b3IzKGFib3V0WzBdLCBhYm91dFsxXSwgYWJvdXRbMl0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBhID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2ldWzBdLCBwdHNbaV1bMV0sIHB0c1tpXVsyXSk7XG4gICAgY29uc3QgYiA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpICsgMV1bMF0sIHB0c1tpICsgMV1bMV0sIHB0c1tpICsgMV1bMl0pO1xuICAgIGNvbnN0IGRpciA9IGIuY2xvbmUoKS5zdWIoYSk7IGNvbnN0IGxlbiA9IGRpci5sZW5ndGgoKTtcbiAgICBpZiAobGVuIDwgMWUtNikgY29udGludWU7XG4gICAgZGlyLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IG1pZCA9IGEuY2xvbmUoKS5hZGQoYikubXVsdGlwbHlTY2FsYXIoMC41KTtcbiAgICAvLyBPdXR3YXJkIG5vcm1hbCBhdCB0aGUgbWlkcG9pbnQsIHJlLW9ydGhvZ29uYWxpc2VkIGFnYWluc3QgdGhlIHJ1biBzbyB0aGUgYmFzaXMgc3RheXMgc3F1YXJlXG4gICAgLy8gd2hlcmUgdGhlIHN0cmFwIGNsaW1icyBzdGVlcGx5IGFuZCB0aGUgdHdvIHdvdWxkIG90aGVyd2lzZSBiZSBuZWFybHkgcGFyYWxsZWwuXG4gICAgbGV0IG5ybSA9IG1pZC5jbG9uZSgpLnN1YihjKTtcbiAgICBucm0uc3ViKGRpci5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKG5ybS5kb3QoZGlyKSkpO1xuICAgIGlmIChucm0ubGVuZ3RoU3EoKSA8IDFlLTEyKSBucm0gPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKS5zdWIoZGlyLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoZGlyLnopKTtcbiAgICBucm0ubm9ybWFsaXplKCk7XG4gICAgLy8gZGlyIHggbnJtLCBOT1QgbnJtIHggZGlyLiBUaGUgYmFzaXMgY29sdW1ucyBhcmUgKHNpZGUsIGRpciwgbnJtKSBhZ2FpbnN0IGEgYm94J3MgKHcsIGxlbiwgdCksXG4gICAgLy8gc28gYSByaWdodC1oYW5kZWQgYmFzaXMgbmVlZHMgc2lkZSB4IGRpciA9IG5ybTsgbnJtIHggZGlyIGdpdmVzIC1ucm0sIGEgbWlycm9yZWQgYmFzaXMgd2l0aCBhXG4gICAgLy8gbmVnYXRpdmUgZGV0ZXJtaW5hbnQsIGFuZCBldmVyeSBzdHJhcCByZW5kZXJzIGluc2lkZSBvdXQgLS0gd2hpY2ggbG9va3MgbGlrZSBhIHRoaW4gZGFya1xuICAgIC8vIHNsaXZlciByYXRoZXIgdGhhbiBhbiBvYnZpb3VzbHkgZmxpcHBlZCBmYWNlLCBzbyBpdCByZWFkcyBhcyBhIGdlb21ldHJ5IGJ1Zywgbm90IGEgd2luZGluZyBvbmUuXG4gICAgY29uc3Qgc2lkZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY3Jvc3NWZWN0b3JzKGRpciwgbnJtKS5ub3JtYWxpemUoKTtcbiAgICAvLyBPdmVybGFwIHRoZSBqb2ludHMgYnkgdGhlIHRoaWNrbmVzcyBzbyBjb25zZWN1dGl2ZSBib3hlcyBjbG9zZSB0aGUgbWl0cmUgcmF0aGVyIHRoYW5cbiAgICAvLyBsZWF2aW5nIGEgd2VkZ2Ugb2YgZGF5bGlnaHQgYXQgZXZlcnkgc3RhdGlvbi5cbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGxlbiArIHQsIHQpO1xuICAgIGcuYXBwbHlNYXRyaXg0KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZUJhc2lzKHNpZGUsIGRpciwgbnJtKSk7XG4gICAgZy50cmFuc2xhdGUobWlkLngsIG1pZC55LCBtaWQueik7XG4gICAgcGFydHMucHVzaChnKTtcbiAgfVxuICBjb25zdCBvdXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBvdXQgOiB0aW50R2VvKG91dCwgaGV4KTtcbn1cblxuLyoqIEEgcm90YXRlZCBib3g6IFtjeCwgY3ksIGN6LCB3LCBoLCBkLCByeCwgcnksIHJ6XSB3aXRoIHRoZSByb3RhdGlvbnMgYXBwbGllZCBpbiB4LCB5LCB6IG9yZGVyXG4gKiAgYWJvdXQgdGhlIGJveCdzIG93biBjZW50cmUuIEEgYm9ubmV0IGxpcCwgYSByYWtlZCBtaXJyb3Igc3RlbSwgYSBjYW5vcHkgc3RheS4gKi9cbmZ1bmN0aW9uIHJib3goYjogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoYlszXSwgYls0XSwgYls1XSk7XG4gIGlmIChiWzZdKSBnLnJvdGF0ZVgoYls2XSk7IGlmIChiWzddKSBnLnJvdGF0ZVkoYls3XSk7IGlmIChiWzhdKSBnLnJvdGF0ZVooYls4XSk7XG4gIGcudHJhbnNsYXRlKGJbMF0sIGJbMV0sIGJbMl0pO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgYmF0Y2ggb2YgYm94ZXMsIGVhY2ggdGludGVkLCBtZXJnZWQ6IFtbaGV4LCBjeCwgY3ksIGN6LCB3LCBoLCBkLCByeD8sIHJ5Pywgcno/XSwgLi4uXS4gVGhlXG4gKiAgdHJpbSBjb21wb25lbnQgb2YgZXZlcnkgdmVoaWNsZSBpcyBvbmUgb2YgdGhlc2UgLS0gYnVtcGVycywgZ3JpbGxlLCBsYW1wcywgbWlycm9ycywgaGFuZGxlcyxcbiAqICBzdGVwcywgYXJjaCBmbGFyZXMgLS0gc28gZm9ydHkgcGFydHMgcmlkZSBvbmUgc3VibWlzc2lvbi4gKi9cbmZ1bmN0aW9uIHRpbnRlZEJveGVzKGxpc3Q6IG51bWJlcltdW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpKTtcbn1cblxuLyoqIE1pcnJvciBhIGJveCBsaXN0IGFjcm9zcyB4ID0gMCAobGVmdC9yaWdodCBwYWlycykuIFJvdGF0aW9ucyBhYm91dCB5IGFuZCB6IGZsaXAgc2lnbi4gKi9cbmZ1bmN0aW9uIG1pcnJvclgobGlzdDogbnVtYmVyW11bXSk6IG51bWJlcltdW10ge1xuICByZXR1cm4gbGlzdC5mbGF0TWFwKChiKSA9PiBbYiwgW2JbMF0sIC1iWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdLCBiWzZdLCBiWzddID8/IDAsIC0oYls4XSA/PyAwKSwgLShiWzldID8/IDApXV0pO1xufVxuXG4vKiogQSBzZWFtbGVzcyBDYW52YXMgMkQgdGlsZTogYGRyYXcoY3R4LCBzaXplKWAgcGFpbnRzIGl0LCBhbmQgdGhlIHJlc3VsdCBpcyBhIHJlcGVhdGluZyB0ZXh0dXJlXG4gKiAgaW4gc1JHQi4gVXNlZCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24sIHNvIHRoZSB0ZXh0dXJlbGVzcyBkZWNsYXJhdGlvbiBzdGFuZHMgYW5kIG5vXG4gKiAgcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpcyBzeW50aGVzaXNlZC4gUmV0dXJucyBudWxsIHdoZXJlIHRoZXJlIGlzIG5vIERPTSAodGhlIGhlYWRsZXNzIGhhcm5lc3NcbiAqICBoYXMgb25lOyBhIG5vZGUtc2lkZSBwcm9iZSBkb2VzIG5vdCksIGFuZCBldmVyeSBjYWxsZXIgdG9sZXJhdGVzIG51bGwuICovXG5mdW5jdGlvbiBjYW52YXNUaWxlKHNpemU6IG51bWJlciwgZHJhdzogKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzOiBudW1iZXIpID0+IHZvaWQpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgY3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsgY3Yud2lkdGggPSBzaXplOyBjdi5oZWlnaHQgPSBzaXplO1xuICAvLyB3aWxsUmVhZEZyZXF1ZW50bHkga2VlcHMgdGhlIHRpbGUgb24gdGhlIENQVSByYXN0ZXIgcGF0aDogYSBHUFUtYmFja2VkIGNhbnZhcyBjb3N0cyBzZWNvbmRzIHBlclxuICAvLyB0aG91c2FuZCBwYXRoIGZpbGxzIHdoZXJlIHRoZSBzb2Z0d2FyZSBwYXRoIHRha2VzIHRlbnMgb2YgbWlsbGlzZWNvbmRzLlxuICBjb25zdCBjdHggPSBjdi5nZXRDb250ZXh0KCcyZCcsIHsgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlIH0pIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw7IGlmICghY3R4KSByZXR1cm4gbnVsbDtcbiAgZHJhdyhjdHgsIHNpemUpO1xuICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjdik7XG4gIHRleC53cmFwUyA9IHRleC53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xuICB0ZXguY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICB0ZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICByZXR1cm4gdGV4O1xufVxuXG4vKiogRGV0ZXJtaW5pc3RpYyBwc2V1ZG8tcmFuZG9tIGZvciBjYW52YXMgZHJlc3NpbmcgLS0gYXNzaWduZWQgYnkgaW5kZXgsIG5ldmVyIE1hdGgucmFuZG9tLCBzbyB0aGVcbiAqICBtb2RlbCBpcyBieXRlLWlkZW50aWNhbCBvbiBldmVyeSBidWlsZC4gKi9cbmZ1bmN0aW9uIGxjZyhzZWVkOiBudW1iZXIpOiAoKSA9PiBudW1iZXIge1xuICBsZXQgcyA9IHNlZWQgPj4+IDA7XG4gIHJldHVybiAoKSA9PiB7IHMgPSAocyAqIDE2NjQ1MjUgKyAxMDEzOTA0MjIzKSA+Pj4gMDsgcmV0dXJuIHMgLyA0Mjk0OTY3Mjk2OyB9O1xufVxuXG4vKipcbiAqIE1VRCAvIFJPQUQtR1JJTUUgdGlsZSwgUkUtQkFTRUQuIFRoYWkgcm9hZCBtdWQgaXMgdGFuIGFuZCBCUklHSFRFUiB0aGFuIG1vc3QgcGFpbnQsIGFuZCBhXG4gKiBtdWx0aXBsaWVyIGNhbm5vdCBicmlnaHRlbjogc28gdGhlIHBhaW50IG1hdGVyaWFsIGNhcnJpZXMgdGhlIE1VRCBFTlZFTE9QRSBjb2xvdXIgKG1lYXN1cmVkIG9uXG4gKiB0aGUgbXVkZHkgc2lsbCksIHRoaXMgdGlsZSBjYXJyaWVzIHRoZSBjbGVhbiBwYWludCBhcyBhIFJBVElPIG9mIHRoYXQgZW52ZWxvcGUgb3ZlciBtb3N0IG9mIGl0c1xuICogYXJlYSAoYGJhc2VgKSwgYW5kIHRoZSBtdWQgaXMgcGFpbnRlZCBhcyB3aGl0ZSAtLSBpLmUuIHRoZSBlbnZlbG9wZSBpdHNlbGYgLS0gaW4gYSB3YXNoIHJpc2luZ1xuICogZnJvbSB0aGUgYm90dG9tIHRvIGBjb3ZlcmFnZWAgb2YgdGhlIHRpbGUgaGVpZ2h0IHBsdXMgc3BsYXR0ZXIgYWJvdmUgaXQuIEJvdW5kIHdpdGggaGVpZ2h0IFVWc1xuICogc28gdiA9IDAgaXMgdGhlIGdyb3VuZCBhbmQgdGhlIHdhc2ggc2l0cyBvbiB0aGUgc2lsbHMgYW5kIGFyY2hlcy5cbiAqL1xuZnVuY3Rpb24gbXVkVGlsZShzaXplOiBudW1iZXIsIGJhc2U6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGNvdmVyYWdlID0gMC4zMyk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCB0b0hleCA9ICh2OiBudW1iZXJbXSkgPT4gJyMnICsgdi5tYXAoKGMpID0+IE1hdGgucm91bmQoTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYykpICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSkuam9pbignJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRvSGV4KGJhc2UpOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwyNTUsMjU1LDAuODgpJyk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC40NSwgJ3JnYmEoMjU1LDI1NSwyNTUsMC40NSknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjU1LDI1NSwwKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS4zNTtcbiAgICAgIGNvbnN0IHIgPSAzICsgcm5kKCkgKiBzICogMC4wNTtcbiAgICAgIGNvbnN0IGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMjU1LDI1MCwyNDAsJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwyNTAsMjQwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGEgbGl0dGxlIGdyYWluIHNvIHRoZSBjbGVhbiBwYWludCBpcyBub3QgYSBmbGF0IGZpbGxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyMDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogczsgY29uc3QgdiA9IHJuZCgpIDwgMC41ID8gMCA6IDI1NTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjAzNSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMS41LCAxLjUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBEVVNUIHRpbGUgZm9yIHBhaW50IHRoYXQgaXMgQlJJR0hURVIgdGhhbiBpdHMgZGlydCAoYSB3aGl0ZSB2YW4pOiBhIHBsYWluIG11bHRpcGxpZXIsIHdoaXRlXG4gKiAgYmFzZSBhbmQgYSBncmV5LWJyb3duIHdhc2ggcmlzaW5nIGZyb20gdGhlIGdyb3VuZCB0byBgY292ZXJhZ2VgLCBwbHVzIHNvZnQgYmxvYnMuICovXG5mdW5jdGlvbiBkdXN0VGlsZShzaXplOiBudW1iZXIsIGR1c3Q6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGNvdmVyYWdlID0gMC4zMCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgYyA9IGR1c3QubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIE1hdGgubWluKDEsIHYpKSk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuOSlgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuNClgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS40LCByID0gMyArIHJuZCgpICogcyAqIDAuMDUsIGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI1O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIENPUlJVR0FURUQgU0hFRVQgdGlsZTogdmVydGljYWwgcmlkZ2VzIGFzIGEgc2luZS1zaGFkZWQgc3RyaXBlIGZpZWxkLCB1c2VkIGFzIG1hcCBBTkQgYnVtcE1hcCBvblxuICogIGEgc29uZ3RoYWV3IHJvb2Ygc28gdGhlIHJpZGdlcyBjYXRjaCBsaWdodC4gYHBpdGNoYCByaWRnZXMgcGVyIHRpbGUuICovXG5mdW5jdGlvbiBjb3JydWdhdGlvblRpbGUoc2l6ZTogbnVtYmVyLCBwaXRjaDogbnVtYmVyLCBsb3c6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICBjb25zdCB0ID0gKE1hdGguY29zKHggLyBzICogTWF0aC5QSSAqIDIgKiBwaXRjaCkgKyAxKSAvIDI7ICAgLy8gMSBhdCBjcmVzdCwgMCBpbiB0cm91Z2hcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIChsb3cgKyAoMSAtIGxvdykgKiB0KSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDQgKyBybmQoKSAqIHMgKiAwLjA4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4xODtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxMjAsOTAsNjAsJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDEyMCw5MCw2MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogUExBTksgdGlsZTogYm9hcmRzIHJ1bm5pbmcgYWxvbmcgdSB3aXRoIGRhcmsgam9pbnRzIGFuZCBncmFpbiBzdHJlYWtzLCBhIG11bHRpcGxpZXIgb24gYVxuICogIG1lYXN1cmVkIHRpbWJlciBhbGJlZG8uIGBib2FyZHNgIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gcGxhbmtUaWxlKHNpemU6IG51bWJlciwgYm9hcmRzOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgYmggPSBzIC8gYm9hcmRzO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgYm9hcmRzOyBiKyspIHtcbiAgICAgIGNvbnN0IHRvbmUgPSAwLjgyICsgcm5kKCkgKiAwLjE4O1xuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogdG9uZSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3QoMCwgYiAqIGJoLCBzLCBiaCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsMzAsMjAsMC41NSknOyBjdHguZmlsbFJlY3QoMCwgYiAqIGJoLCBzLCBNYXRoLm1heCgxLCBzICogMC4wMDYpKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMTQ7IGsrKykge1xuICAgICAgICBjb25zdCB5ID0gYiAqIGJoICsgcm5kKCkgKiBiaCwgbGVuID0gcyAqICgwLjIgKyBybmQoKSAqIDAuNiksIHggPSBybmQoKSAqIHM7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKDYwLDQ1LDMwLCR7MC4wNSArIHJuZCgpICogMC4xMn0pYDsgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4IC0gcywgeSk7IGN0eC5saW5lVG8oeCAtIHMgKyBsZW4sIHkpOyBjdHgubW92ZVRvKHgsIHkpOyBjdHgubGluZVRvKHggKyBsZW4sIHkpOyBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFJVU1QgdGlsZTogYSBtdWx0aXBsaWVyIG9mIGJsb3RjaGVkIG9yYW5nZS1icm93biBvdmVyIGEgYmFzZSwgZGFyayBjb3JlcyBsaWZ0ZWQgc28gbm90aGluZyBsYW5kc1xuICogIG9uIHRoZSBsdW1hLTU4IGhvbGUgZ2F0ZS4gKi9cbmZ1bmN0aW9uIHJ1c3RUaWxlKHNpemU6IG51bWJlciwgcmF0aW86IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGRlbnNpdHkgPSA5MCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZW5zaXR5OyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wOTtcbiAgICAgIGNvbnN0IGEgPSAwLjE1ICsgcm5kKCkgKiAwLjQ1O1xuICAgICAgY29uc3QgYyA9IHJhdGlvLm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiB2KSk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIEhlaWdodC1rZXllZCBVVnM6IHYgaXMgd29ybGQgSEVJR0hUIG92ZXIgYHNjYWxlYCBtZXRyZXMsIHUgcnVucyBhbG9uZyB0aGUgZG9taW5hbnQgaG9yaXpvbnRhbFxuICogIGF4aXMuIEEgbXVkIHRpbGUgYm91bmQgdGhpcyB3YXkgZGFya2VucyB0aGUgc2lsbHMgYW5kIHN0YXlzIGNsZWFuIG9uIHRoZSByb29mIC0tIGEgcGxhaW4gYm94XG4gKiAgcHJvamVjdGlvbiB3b3VsZCByZXBlYXQgdGhlIHRpbGUncyBkaXJ0eSBiYW5kIGFjcm9zcyB0aGUgcm9vZiBhcyBzdHJpcGVzLiAqL1xuLyoqXG4gKiBTSE9SVCBGVVI6IGEgc2VhbWxlc3MgdGlsZSBvZiBkZW5zZSwgc2hvcnQsIGRpcmVjdGlvbmFsIGhhaXIgc3Ryb2tlcyBvdmVyIGEgY2xvdWR5IHRvbmUgZHJpZnQsIGFzIGFcbiAqIG11bHRpcGx5IG1hcCAoYW5kIGJ1bXApIG9uIGEgd2hpdGUgdmVydGV4LWNvbG91cmVkIGNvYXQuIFRoZSBzdHJva2VzIHJ1biBhbG9uZyB2IHdpdGggYSBqaXR0ZXJlZFxuICogbGVhbiBhbmQgYSBuYXJyb3cgdG9uZSBzcHJlYWQgLS0gYSB3aWRlIHNwcmVhZCByZWFkcyBhcyBzY2FsZXMsIGEgcGVyZmVjdCBsYXkgcmVhZHMgYXMgY29tYmVkXG4gKiBwbGFzdGljLiBgcGF0Y2hlc2AgYWRkcyBhIGZldyBzb2Z0IHBpbmstZ3JleSBiYXJlIHBhdGNoZXMsIHRoZSBtYW5nZSBtYXJrcyBvZiBhIHN0cmVldCBkb2cuXG4gKi9cbmZ1bmN0aW9uIGZ1clRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgdG9uZSA9IG8udG9uZSA/PyBbMC43MiwgMC42NiwgMC41OF0sIG0gPSBzICogMC4wNjtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gY2xvdWR5IGRyaWZ0IHVuZGVybmVhdGggc28gdGhlIGNvYXQgaXMgbm90IG9uZSBmbGF0IHZhbHVlXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5jbG91ZHMgPz8gMjYpOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDggKyBybmQoKSAqIDAuMTgpLCBhID0gMC4wNCArIHJuZCgpICogMC4xMDtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHRvbmUpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IodG9uZSl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBiYXJlIHBhdGNoZXM6IHNvZnQsIHNwYXJzZSwgd2FybSBncmV5LXBpbmtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnBhdGNoZXMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNCArIHJuZCgpICogMC4wNSksIHBjID0gby5wYXRjaFRvbmUgPz8gWzAuNzIsIDAuNTYsIDAuNTJdO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocGMpfSwwLjU1KWApOyBnMi5hZGRDb2xvclN0b3AoMC42LCBgcmdiYSgke3JnYihwYyl9LDAuMylgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHBjKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIgKiAxLjMsIHIsIHJuZCgpICogTWF0aC5QSSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGhhaXIgc3Ryb2tlczogZGFyayBhbmQgbGlnaHQsIHNob3J0LCBsZWFuaW5nIHdpdGhpbiArLTIyIGRlZ3JlZXMgb2YgdlxuICAgIGNvbnN0IHN0cm9rZXMgPSBvLnN0cm9rZXMgPz8gNTAwMCwgbGVuID0gcyAqIChvLmxlbmd0aCA/PyAwLjAyMik7XG4gICAgY29uc3QgZHJhd1N0cm9rZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgZHg6IG51bWJlciwgZHk6IG51bWJlciwgdzogbnVtYmVyKSA9PiB7XG4gICAgICBjdHgubGluZVdpZHRoID0gdzsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkpOyBjdHgubGluZVRvKHggKyBkeCwgeSArIGR5KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgaWYgKHggPCBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgcywgeSk7IGN0eC5saW5lVG8oeCArIHMgKyBkeCwgeSArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICBpZiAoeCA+IHMgLSBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4IC0gcywgeSk7IGN0eC5saW5lVG8oeCAtIHMgKyBkeCwgeSArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICBpZiAoeSA8IG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkgKyBzKTsgY3R4LmxpbmVUbyh4ICsgZHgsIHkgKyBzICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIGlmICh5ID4gcyAtIG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkgLSBzKTsgY3R4LmxpbmVUbyh4ICsgZHgsIHkgLSBzICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICB9O1xuICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cm9rZXM7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgdGggPSAocm5kKCkgLSAwLjUpICogMC43OCwgbCA9IGxlbiAqICgwLjYgKyBybmQoKSAqIDAuOCk7XG4gICAgICBjb25zdCBsaWdodCA9IHJuZCgpIDwgMC40MjtcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBsaWdodCA/ICdzY3JlZW4nIDogJ211bHRpcGx5JztcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGxpZ2h0ID8gYHJnYmEoMjU1LDI1MCwyNDAsJHswLjA1ICsgcm5kKCkgKiAwLjEwfSlgIDogYHJnYmEoJHtyZ2IodG9uZSl9LCR7MC4wNiArIHJuZCgpICogMC4xNH0pYDtcbiAgICAgIGRyYXdTdHJva2UoeCwgeSwgTWF0aC5zaW4odGgpICogbCwgTWF0aC5jb3ModGgpICogbCwgMC42ICsgcm5kKCkgKiAxLjIpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlaWdodFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgY29uc3QgdSA9IGF4ID49IGF6ID8gcC5nZXRaKGkpIDogcC5nZXRYKGkpO1xuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHAuZ2V0WShpKSAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogT2Zmc2V0IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyBvdXR3YXJkIGJ5IGBkYCBhbG9uZyB0aGUgYXZlcmFnZWQgZWRnZSBub3JtYWxzLiBVc2VkXG4gKiAgdG8gc3RhbmQgdGhlIGdsYXNzIGJhbmQgYSBmZXcgbWlsbGltZXRyZXMgcHJvdWQgb2YgdGhlIGJvZHkncyByYWtlZCB3aW5kc2NyZWVuIGFuZCByZWFyIGdsYXNzXG4gKiAgZmFjZXMsIHNvIHRoZSBwYW5lIGFuZCB0aGUgYm9keSBuZXZlciBzaGFyZSBhIHBsYW5lLiBXaW5kaW5nOiBjb3VudGVyLWNsb2Nrd2lzZSBpbiAoeiwgeSkuICovXG5mdW5jdGlvbiBvZmZzZXRQb2x5KHB0czogbnVtYmVyW11bXSwgZDogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IG4gPSBwdHMubGVuZ3RoLCBvdXQ6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gcHRzWyhpICsgbiAtIDEpICUgbl0sIGIgPSBwdHNbaV0sIGMgPSBwdHNbKGkgKyAxKSAlIG5dO1xuICAgIGNvbnN0IGUxID0gW2JbMF0gLSBhWzBdLCBiWzFdIC0gYVsxXV0sIGUyID0gW2NbMF0gLSBiWzBdLCBjWzFdIC0gYlsxXV07XG4gICAgY29uc3QgbDEgPSBNYXRoLmh5cG90KGUxWzBdLCBlMVsxXSkgfHwgMSwgbDIgPSBNYXRoLmh5cG90KGUyWzBdLCBlMlsxXSkgfHwgMTtcbiAgICAvLyBvdXR3YXJkIG5vcm1hbCBvZiBhIENDVyBlZGdlIChkeiwgZHkpIGlzIChkeSwgLWR6KVxuICAgIGNvbnN0IG4xID0gW2UxWzFdIC8gbDEsIC1lMVswXSAvIGwxXSwgbjIgPSBbZTJbMV0gLyBsMiwgLWUyWzBdIC8gbDJdO1xuICAgIGxldCBueCA9IG4xWzBdICsgbjJbMF0sIG55ID0gbjFbMV0gKyBuMlsxXTtcbiAgICBjb25zdCBubCA9IE1hdGguaHlwb3QobngsIG55KSB8fCAxOyBueCAvPSBubDsgbnkgLz0gbmw7XG4gICAgY29uc3QgY29zSGFsZiA9IE1hdGgubWF4KDAuMzUsIG54ICogbjFbMF0gKyBueSAqIG4xWzFdKTtcbiAgICBvdXQucHVzaChbYlswXSArIG54ICogZCAvIGNvc0hhbGYsIGJbMV0gKyBueSAqIGQgLyBjb3NIYWxmXSk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqIEEgd2hlZWwtYXJjaCBGTEFSRTogYSBoYWxmLWFubnVsdXMgaW4gdGhlICh6LCB5KSBwbGFuZSwgZXh0cnVkZWQgYWNyb3NzIHgwLi54MSBvbiBib3RoIHNpZGVzXG4gKiAgYW5kIHRpbnRlZC4gU3RhbmRzIHByb3VkIG9mIHRoZSBib2R5IHNpZGUgYW5kIGhpZGVzIHRoZSBhcmNoJ3MgY3V0IGVkZ2UuICovXG5mdW5jdGlvbiBmbGFyZSh6YzogbnVtYmVyLCB5YzogbnVtYmVyLCBySW46IG51bWJlciwgck91dDogbnVtYmVyLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCBoZXg6IG51bWJlciwgbiA9IDkpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gbjsgY29uc3QgeiA9IHpjICsgTWF0aC5jb3MoYSkgKiByT3V0LCB5ID0geWMgKyBNYXRoLnNpbihhKSAqIHJPdXQ7IGlmIChpID09PSAwKSBzaGFwZS5tb3ZlVG8oeiwgeSk7IGVsc2Ugc2hhcGUubGluZVRvKHosIHkpOyB9XG4gIGZvciAobGV0IGkgPSBuOyBpID49IDA7IGktLSkgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gbjsgc2hhcGUubGluZVRvKHpjICsgTWF0aC5jb3MoYSkgKiBySW4sIHljICsgTWF0aC5zaW4oYSkgKiBySW4pOyB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBjb25zdCBtayA9IChzeDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHgxIC0geDAsIGJldmVsRW5hYmxlZDogZmFsc2UgfSk7XG4gICAgZy5yb3RhdGVZKC1NYXRoLlBJIC8gMik7IGcudHJhbnNsYXRlKHgxLCAwLCAwKTsgaWYgKHN4IDwgMCkgZy5zY2FsZSgtMSwgMSwgMSk7XG4gICAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gdGludEdlbyhnLCBoZXgpO1xuICB9O1xuICBjb25zdCBsID0gbWsoLTEpLCByID0gbWsoMSk7XG4gIC8vIGEgbmVnYXRpdmUgc2NhbGUgZmxpcHMgdGhlIHdpbmRpbmc7IHJlc3RvcmUgaXQgc28gdGhlIGZsYXJlIGlzIG5vdCBpbnNpZGUgb3V0XG4gIGNvbnN0IGlkeCA9IGwuZ2V0SW5kZXgoKTsgaWYgKGlkeCkgeyBjb25zdCBhID0gaWR4LmFycmF5IGFzIGFueTsgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSArPSAzKSB7IGNvbnN0IHQgPSBhW2kgKyAxXTsgYVtpICsgMV0gPSBhW2kgKyAyXTsgYVtpICsgMl0gPSB0OyB9IGlkeC5uZWVkc1VwZGF0ZSA9IHRydWU7IH1cbiAgZWxzZSB7IGNvbnN0IHAgPSBsLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTsgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpICs9IDMpIHsgY29uc3QgeDFfID0gcC5nZXRYKGkgKyAxKSwgeTFfID0gcC5nZXRZKGkgKyAxKSwgejFfID0gcC5nZXRaKGkgKyAxKTsgcC5zZXRYWVooaSArIDEsIHAuZ2V0WChpICsgMiksIHAuZ2V0WShpICsgMiksIHAuZ2V0WihpICsgMikpOyBwLnNldFhZWihpICsgMiwgeDFfLCB5MV8sIHoxXyk7IH0gfVxuICBsLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBtZXJnZUdlb3MoW2wsIHJdKTtcbn1cblxuLyoqIEJpbmQgYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSB0byBhIG1hdGVyaWFsIGFzIG1hcCAoYW5kIGJ1bXApLCBsZWF2aW5nIHRoZSB0ZXh0dXJlbGVzc1xuICogIGRlY2xhcmF0aW9uIGludGFjdDogbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpcyBzeW50aGVzaXNlZCwgdGhlIG1lYXN1cmVkIGNvbG91ciBzdGF5cyB0aGVcbiAqICBtdWx0aXBsaWNhbmQsIGFuZCB0aGUgd2hvbGUgdGhpbmcgY29zdHMgb25lIGNhbnZhcy4gKi9cbmZ1bmN0aW9uIGJpbmRUaWxlKG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwsIHRleDogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwsIGJ1bXAgPSAwKTogdm9pZCB7XG4gIGlmICghdGV4KSByZXR1cm47XG4gIG1hdC5tYXAgPSB0ZXg7XG4gIGlmIChidW1wID4gMCkgeyBtYXQuYnVtcE1hcCA9IHRleDsgbWF0LmJ1bXBTY2FsZSA9IGJ1bXA7IH1cbiAgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbn1cblxuXG4vKipcbiAqIEEgRFJBUEVEIFNIRUVUOiBgaGVpZ2h0c1tqXVtpXWAgaXMgdGhlIHRvcCBzdXJmYWNlIGF0IHggPSB4MC4ueDEgKGkgb3ZlciBueCkgYW5kIHogPSB6MC4uejEgKGogb3ZlclxuICogbnopOyB0aGUgc2hlZXQgaXMgYHRgIHRoaWNrLiBUb3AgYW5kIHVuZGVyc2lkZSBhcmUgc21vb3RoLXNoYWRlZCBncmlkcywgdGhlIGZvdXIgZWRnZXMgYXJlIGZsYXRcbiAqIHN0cmlwcyB3b3VuZCBvdXR3YXJkLiBBIHRhcnAgY2Fub3B5IGlzIGEgcmlkZ2UgbGluZSBtaW51cyB0aGUgc2FnIGJldHdlZW4gaXRzIHBvbGVzIG1pbnVzIHRoZVxuICogZHJvb3Agb2YgaXRzIGZyZWUgZWRnZXMgLS0gY2xvdGgsIHdoZXJlIGEgc2xhYiByZWFkcyBhcyBhIHBhaW50ZWQgYm94LlxuICovXG5mdW5jdGlvbiBzaGVldChzOiBhbnkpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IG54OiBudW1iZXIgPSBzLm54LCBuejogbnVtYmVyID0gcy5ueiwgSGg6IG51bWJlcltdW10gPSBzLmhlaWdodHMsIHQ6IG51bWJlciA9IHMudCA/PyAwLjAxMjtcbiAgY29uc3QgWCA9IChpOiBudW1iZXIpID0+IHMueDAgKyAocy54MSAtIHMueDApICogaSAvIG54O1xuICAvLyBgenNgIGdpdmVzIHRoZSB6IFNUQVRJT05TIGV4cGxpY2l0bHkgaW5zdGVhZCBvZiBkaXZpZGluZyB6MC4uejEgZXZlbmx5LiBBIHJvb2Ygd2hvc2UgZWF2ZSBhbmRcbiAgLy8gcmFrZSB3YW50IGEgbmFycm93IHJ1c3RlZCBiYW5kIG5lZWRzIHJvd3MgMC4xMCBtIGluIGZyb20gdGhlIGVkZ2UsIGFuZCByZWFjaGluZyB0aGF0IGJ5IHJhaXNpbmdcbiAgLy8gbnogYWxvbmUgd291bGQgbXVsdGlwbHkgdGhlIHdob2xlIGdyaWQgLS0gMTA0IGZsdXRlIGNvbHVtbnMgaXMgd2hhdCBtYWtlcyBhIHJvdyBleHBlbnNpdmUuXG4gIGNvbnN0IFpTOiBudW1iZXJbXSB8IG51bGwgPSBBcnJheS5pc0FycmF5KHMuenMpID8gcy56cyA6IG51bGw7XG4gIGNvbnN0IFogPSAoajogbnVtYmVyKSA9PiAoWlMgPyBaU1tqXSA6IHMuejAgKyAocy56MSAtIHMuejApICogaiAvIG56KTtcbiAgY29uc3QgZ3JpZCA9ICh5T2ZmOiBudW1iZXIsIGZsaXA6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIHV2OiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gbno7IGorKykgZm9yIChsZXQgaSA9IDA7IGkgPD0gbng7IGkrKykgeyBwb3MucHVzaChYKGkpLCBIaFtqXVtpXSArIHlPZmYsIFooaikpOyB1di5wdXNoKGkgLyBueCwgaiAvIG56KTsgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbno7IGorKykgZm9yIChsZXQgaSA9IDA7IGkgPCBueDsgaSsrKSB7XG4gICAgICBjb25zdCBhID0gaiAqIChueCArIDEpICsgaSwgYiA9IGEgKyAxLCBjID0gYSArIG54ICsgMSwgZCA9IGMgKyAxO1xuICAgICAgaWYgKGZsaXApIGlkeC5wdXNoKGEsIGIsIGMsIGIsIGQsIGMpOyBlbHNlIGlkeC5wdXNoKGEsIGMsIGIsIGIsIGMsIGQpO1xuICAgIH1cbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zLCAzKSk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICBnLnNldEluZGV4KGlkeCk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIGc7XG4gIH07XG4gIC8vIGBoZXhUb3BgIC8gYGhleFVuZGVyYDogYSBjb2xvdXIgYXR0cmlidXRlIHdyaXR0ZW4gcGVyIGdyaWQsIHNvIGEgdGFycCBjYW4gYmUgYmx1ZSBvbiB0b3AgYW5kXG4gIC8vIG9yYW5nZSB1bmRlcm5lYXRoIG9uIE9ORSBtYXRlcmlhbCBhbmQgT05FIGRyYXcgY2FsbC4gQSBjb21wb25lbnQgdGludCBjYW5ub3QgZG8gaXQgLS0gdGhlIHR3b1xuICAvLyBzdXJmYWNlcyBhcmUgbWlsbGltZXRyZXMgYXBhcnQgaW4geSwgc28gbm8gYXhpcyBibGVuZCBzZXBhcmF0ZXMgdGhlbSAtLSBhbmQgYSBzZWNvbmQgc2hlZXRcbiAgLy8gd291bGQgZG91YmxlIHRoZSByb29mJ3MgdHJpYW5nbGVzIGZvciBhIGNvbG91ci4gT21pdHRlZCwgdGhlIGdlb21ldHJ5IGlzIHVudGludGVkIGFzIGJlZm9yZS5cbiAgY29uc3QgcGFpbnQgPSAoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGhleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50LCBjID0gbmV3IFRIUkVFLkNvbG9yKGhleCksIGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjsgfVxuICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7IHJldHVybiBnO1xuICB9O1xuICAvLyBgaGV4R3JpZFtqXVtpXWAgaXMgYSBjb2xvdXIgUEVSIFRPUC1HUklEIFZFUlRFWCwgY29tcHV0ZWQgYXQgZW1pdCB0aW1lIC0tIHdoaWNoIGlzIHRoZSBvbmx5IHdheVxuICAvLyB0byBwdXQgYSBtYXJrIGF0IGEga25vd24gcGxhY2Ugb24gdGhlIHNoZWV0LiBBIGNhbnZhcyB0aWxlIHJlcGVhdHMgYnkgd29ybGQgcG9zaXRpb24gYW5kIGtub3dzXG4gIC8vIG5vdGhpbmcgYWJvdXQgd2hlcmUgdGhlIGVhdmUgaXM7IGBoZXhUb3BgIGlzIG9uZSBmbGF0IHRvbmUgZm9yIHRoZSB3aG9sZSBzdXJmYWNlLiBUaGlzIGlzIHdoYXRcbiAgLy8gY2FycmllcyB0aGUgcnVzdGVkIGJhbmQgYWxvbmcgdGhlIGVhdmUgYW5kIHRoZSByYWtlcywgYW5kIHRoZSBzdGFpbmluZyBiZXNpZGUgZWFjaCBzaGVldCBsYXAuXG4gIGNvbnN0IHBhaW50R3JpZCA9IChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgSEc6IG51bWJlcltdW10pID0+IHtcbiAgICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQsIGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgbGV0IGsgPSAwO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IG56OyBqKyspIGZvciAobGV0IGkgPSAwOyBpIDw9IG54OyBpKyspIHsgYy5zZXRIZXgoSEdbal1baV0pOyBjb2xbaysrXSA9IGMucjsgY29sW2srK10gPSBjLmc7IGNvbFtrKytdID0gYy5iOyB9XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTsgcmV0dXJuIGc7XG4gIH07XG4gIGNvbnN0IHRvcDAgPSBncmlkKDAsIGZhbHNlKSwgdW5kMCA9IGdyaWQoLXQsIHRydWUpO1xuICBjb25zdCBwYXJ0cyA9IHMuaGV4R3JpZCAhPT0gdW5kZWZpbmVkXG4gICAgPyBbcGFpbnRHcmlkKHRvcDAsIHMuaGV4R3JpZCksIHBhaW50KHVuZDAsIHMuaGV4VW5kZXIgPz8gMHhmZmZmZmYpXVxuICAgIDogcy5oZXhVbmRlciAhPT0gdW5kZWZpbmVkXG4gICAgICA/IFtwYWludCh0b3AwLCBzLmhleFRvcCA/PyAweGZmZmZmZiksIHBhaW50KHVuZDAsIHMuaGV4VW5kZXIpXVxuICAgICAgOiBbdG9wMCwgdW5kMF07XG4gIC8vIGVkZ2Ugc3RyaXBzOiBlYWNoIHF1YWQgZnJvbSB0aGUgdG9wIGVkZ2UgZG93biB0byB0aGUgdW5kZXJzaWRlLCB3b3VuZCBzbyBpdHMgbm9ybWFsIGZhY2VzIGBvdXRgXG4gIGNvbnN0IHN0cmlwID0gKHB0czogbnVtYmVyW11bXVtdLCBvdXQ6IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCB1djogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtwMCwgcDFdIG9mIHB0cykge1xuICAgICAgY29uc3QgcTAgPSBwMCwgcTEgPSBwMSwgcTIgPSBbcDFbMF0sIHAxWzFdIC0gdCwgcDFbMl1dLCBxMyA9IFtwMFswXSwgcDBbMV0gLSB0LCBwMFsyXV07XG4gICAgICBjb25zdCBlMSA9IFtxMVswXSAtIHEwWzBdLCBxMVsxXSAtIHEwWzFdLCBxMVsyXSAtIHEwWzJdXSwgZTIgPSBbcTJbMF0gLSBxMFswXSwgcTJbMV0gLSBxMFsxXSwgcTJbMl0gLSBxMFsyXV07XG4gICAgICBjb25zdCBuID0gW2UxWzFdICogZTJbMl0gLSBlMVsyXSAqIGUyWzFdLCBlMVsyXSAqIGUyWzBdIC0gZTFbMF0gKiBlMlsyXSwgZTFbMF0gKiBlMlsxXSAtIGUxWzFdICogZTJbMF1dO1xuICAgICAgY29uc3QgdHJpID0gblswXSAqIG91dFswXSArIG5bMV0gKiBvdXRbMV0gKyBuWzJdICogb3V0WzJdID49IDAgPyBbcTAsIHExLCBxMiwgcTAsIHEyLCBxM10gOiBbcTAsIHEyLCBxMSwgcTAsIHEzLCBxMl07XG4gICAgICBmb3IgKGNvbnN0IHEgb2YgdHJpKSB7IHBvcy5wdXNoKHFbMF0sIHFbMV0sIHFbMl0pOyB1di5wdXNoKDAsIDApOyB9XG4gICAgfVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3MsIDMpKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIGc7XG4gIH07XG4gIGNvbnN0IHRvcCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4gW1goaSksIEhoW2pdW2ldLCBaKGopXTtcbiAgY29uc3QgZTA6IG51bWJlcltdW11bXSA9IFtdLCBlMTogbnVtYmVyW11bXVtdID0gW10sIGUyOiBudW1iZXJbXVtdW10gPSBbXSwgZTM6IG51bWJlcltdW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG54OyBpKyspIHsgZTAucHVzaChbdG9wKGksIDApLCB0b3AoaSArIDEsIDApXSk7IGUxLnB1c2goW3RvcChpLCBueiksIHRvcChpICsgMSwgbnopXSk7IH1cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuejsgaisrKSB7IGUyLnB1c2goW3RvcCgwLCBqKSwgdG9wKDAsIGogKyAxKV0pOyBlMy5wdXNoKFt0b3AobngsIGopLCB0b3AobngsIGogKyAxKV0pOyB9XG4gIGNvbnN0IGVkZ2VzID0gW3N0cmlwKGUwLCBbMCwgMCwgLTFdKSwgc3RyaXAoZTEsIFswLCAwLCAxXSksIHN0cmlwKGUyLCBbLTEsIDAsIDBdKSwgc3RyaXAoZTMsIFsxLCAwLCAwXSldO1xuICAvLyBUaGUgcmltIGlzIHRoZSBzZWFtIGJldHdlZW4gdGhlIHR3byBmYWNlcywgc28gaXQgdGFrZXMgdGhlIFVOREVSIGNvbG91cjogb24gYSBkcmFwZWQgdGFycCB0aGVcbiAgLy8gZWRnZSBpcyB3aGF0IGEgdmlld2VyIHN0YW5kaW5nIGJlc2lkZSBpdCBhY3R1YWxseSBzZWVzLCBhbmQgaXQgaXMgdGhlIGxpbmluZywgbm90IHRoZSB0b3AuIE9uIGFcbiAgLy8gcm9vZiBkZWNrIGl0IGlzIHRoZSBmbHV0ZWQgZWF2ZSwgd2hpY2ggaXMgd2hlcmUgdGhlIHJ1c3QgaXMsIHNvIGBoZXhSaW1gIG92ZXJyaWRlcyBpdC5cbiAgY29uc3QgcmltSGV4ID0gcy5oZXhSaW0gPz8gcy5oZXhVbmRlcjtcbiAgcGFydHMucHVzaCguLi4ocmltSGV4ICE9PSB1bmRlZmluZWQgPyBlZGdlcy5tYXAoKGcpID0+IHBhaW50KGcsIHJpbUhleCkpIDogZWRnZXMpKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhwYXJ0cyk7XG59XG5cbi8qKlxuICogV0VBVEhFUkVEIFBBSU5UIG9uIGEgc3RlZWwgY29udGFpbmVyOiBvbmUgc2VhbWxlc3MgbXVsdGlwbGllciB0aWxlIGNhcnJ5aW5nIGNsZWFuIHBhaW50LCBydXN0XG4gKiBhbmQgY2hhbGtlZCBibG9vbSB0b2dldGhlci5cbiAqXG4gKiBUaGUgdGhyZWUgdG9uZXMgY2Fubm90IHJpZGUgYSBwbGFpbiBtdWx0aXBseSBvdmVyIHRoZSBjbGVhbiBwYWludCwgYmVjYXVzZSBhIGNoYWxrIGJsb29tIGlzXG4gKiBCUklHSFRFUiB0aGFuIHRoZSBwYWludCBpdCBzaXRzIG9uIGluIHR3byBjaGFubmVscyAtLSBhIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbi4gU28gdGhlIHZlcnRleFxuICogY29sb3VyIGlzIFJFLUJBU0VEIHRvIGFuIGVudmVsb3BlIGFib3ZlIGV2ZXJ5IHRvbmUgdGhlIHRpbGUgaGFzIHRvIHJlYWNoIChgby5iYXNlYCBpcyB0aGUgY2xlYW5cbiAqIHBhaW50J3Mgb3duIG11bHRpcGxpZXIgYWdhaW5zdCB0aGF0IGVudmVsb3BlLCBhbmQgaXQgaXMgd2hhdCBtb3N0IG9mIHRoZSB0aWxlIGlzIGZpbGxlZCB3aXRoKSxcbiAqIGV4YWN0bHkgYXMgdGhlIGxpY2hlbi1vbi1zdG9uZSByb3V0ZSBkb2VzLiBFdmVyeXRoaW5nIGFmdGVyIHRoZSBmaWxsIGlzIGRyYXduIHNvdXJjZS1vdmVyIGluXG4gKiBhYnNvbHV0ZSBtdWx0aXBsaWVyIHNwYWNlLCBzbyBhIG1hcmsgbWF5IGxhbmQgZWl0aGVyIHNpZGUgb2YgY2xlYW4uXG4gKlxuICogT3JkZXIgbWF0dGVycyBhbmQgaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB3ZWF0aGVyaW5nIGFuZCBjYW1vdWZsYWdlOiBhIHNvZnQgY2xvdWR5IGRyaWZ0XG4gKiBmaXJzdCwgdGhlbiB0aGUgcnVzdCBhcyBjbHVzdGVyZWQgZ3JhbnVsYXIgcGF0Y2hlcyByYXRoZXIgdGhhbiBoYXJkIGJsb3RjaGVzLCB0aGVuIHRoZSBydW5zIGl0XG4gKiBsZWF2ZXMgQkVMT1cgaXRzZWxmLCB0aGVuIHRoZSBjaGFsayBibG9vbXMsIHRoZW4gYSBmaW5lIGdyYWluIG92ZXIgdGhlIGxvdC5cbiAqL1xuZnVuY3Rpb24gcGFpbnRUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdLCBydXN0ID0gby5ydXN0ID8/IGJhc2UsIGNoYWxrID0gby5jaGFsayA/PyBiYXNlO1xuICAgIGNvbnN0IHJ1biA9IG8ucnVuID8/IHJ1c3Q7XG4gICAgLy8gd3JhcCBldmVyeSBtYXJrIHRocmVlIHdheXMgc28gbm90aGluZyBpcyBjdXQgYnkgdGhlIHRpbGUgZWRnZVxuICAgIGNvbnN0IHdyYXAgPSAoZHJhdzogKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpID0+IHZvaWQpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBkcmF3KGR4LCBkeSk7XG4gICAgfTtcbiAgICBjb25zdCBibG9iID0gKGM6IG51bWJlcltdLCB4OiBudW1iZXIsIHk6IG51bWJlciwgcjogbnVtYmVyLCBhOiBudW1iZXIsIHJ5ID0gMSkgPT4ge1xuICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKGMpfSwke2F9KWApOyBnLmFkZENvbG9yU3RvcCgwLjU1LCBgcmdiYSgke3JnYihjKX0sJHthICogMC40NX0pYCk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihjKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIsIHIgKiByeSwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICB9O1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZSl9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcblxuICAgIC8vIDEuIGNsb3VkeSBkcmlmdDogYnJvYWQsIHZlcnkgc29mdCwgYmFyZWx5IG9mZiBjbGVhbiAtLSB3aGF0IHN0b3BzIHRoZSBmbGF0IGFyZWFzIHJlYWRpbmcgYXMgcGFpbnQgY2hpcHMgb24gcGxhc3RpY1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZHJpZnQgPz8gMTQpOyBpKyspIHtcbiAgICAgIGNvbnN0IGMgPSBybmQoKSA8IDAuNSA/IHJ1c3QgOiBjaGFsaztcbiAgICAgIGJsb2IoYywgcm5kKCkgKiBzLCBybmQoKSAqIHMsIHMgKiAoMC4xOCArIHJuZCgpICogMC4zMCkgKiAoby5kcmlmdFNjYWxlID8/IDEpLCAwLjA1ICsgcm5kKCkgKiAwLjA3LCAwLjYgKyBybmQoKSAqIDAuOCk7XG4gICAgfVxuXG4gICAgLy8gMi4gcnVzdDogY2x1c3RlcnMsIGVhY2ggYSBzb2Z0IHBhdGNoIHdpdGggZ3JhbnVsYXIgc3BlY2tzIG92ZXIgaXQuIEJhcmUgc3RlZWwgY29ycm9kZXMgaW5cbiAgICAvLyAgICBmaWVsZHMsIG5vdCBpbiBkb3RzOyBhIHNwZWNrIGZpZWxkIHdpdGggbm8gcGF0Y2ggdW5kZXIgaXQgcmVhZHMgYXMgY29uZmV0dGkuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5ydXN0Q2x1c3RlcnMgPz8gMTYpOyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgY3IgPSBzICogKDAuMDQgKyBybmQoKSAqIDAuMTEpICogKG8uY2x1c3RlclNjYWxlID8/IDEpO1xuICAgICAgYmxvYihydXN0LCBjeCwgY3ksIGNyLCAwLjMwICsgcm5kKCkgKiAwLjM1LCAwLjcgKyBybmQoKSAqIDAuNik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwZWNrc1BlckNsdXN0ZXIgPz8gNDApOyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3I7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkLCByID0gMC44ICsgcm5kKCkgKiAyLjQ7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihydXN0KX0sJHswLjI1ICsgcm5kKCkgKiAwLjV9KWA7XG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgICAvLyB0aGUgcnVuIGl0IGxlYXZlcyBiZWxvdyBpdHNlbGY6IHJ1c3QgYmxlZWRzIERPV04gYSB2ZXJ0aWNhbCBwYW5lbCBhbmQgbm93aGVyZSBlbHNlXG4gICAgICBpZiAocm5kKCkgPCAoby5ydW5DaGFuY2UgPz8gMC41NSkpIHtcbiAgICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMCwgbGVuID0gcyAqICgwLjEwICsgcm5kKCkgKiAwLjM1KTtcbiAgICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBjeSwgMCwgY3kgKyBsZW4pO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwkezAuMTYgKyBybmQoKSAqIDAuMTh9KWApOyBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydW4pfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZztcbiAgICAgICAgd3JhcCgoZHgpID0+IGN0eC5maWxsUmVjdChjeCArIGR4ICsgKHJuZCgpIC0gMC41KSAqIGNyLCBjeSwgdywgbGVuKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gY2hhbGsgYmxvb206IGxhcmdlLCB2ZXJ5IHNvZnQsIGxvdy1jb250cmFzdC4gSXQgaXMgdGhlIHRvbmUgdGhlIHRpbGUgd2FzIHJlLWJhc2VkIGZvci5cbiAgICBjb25zdCBjc2NhbGUgPSBvLmNoYWxrU2NhbGUgPz8gMSwgY2FscGhhID0gby5jaGFsa0FscGhhID8/IDAuMzU7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5jaGFsa1BhdGNoZXMgPz8gOSk7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCBjciA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xMCkgKiBjc2NhbGU7XG4gICAgICBibG9iKGNoYWxrLCBjeCwgY3ksIGNyLCBjYWxwaGEgKyBybmQoKSAqIDAuMzAsIDAuNSArIHJuZCgpICogMC43KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjY7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjciAqIDEuMjU7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkICogMC43LCByID0gMSArIHJuZCgpICogMztcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKGNoYWxrKX0sJHswLjIgKyBybmQoKSAqIDAuNH0pYDtcbiAgICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA0LiB0aGUgdHdvIG1hcmtzIHRoYXQgb25seSBtYWtlIHNlbnNlIG9uY2UgdGhlIHRpbGUgaXMgSEVJR0hULWtleWVkOiBsb25nIHJ1bnMgYmxlZWRpbmcgZG93blxuICAgIC8vICAgIGZyb20gdGhlIHRvcCBlZGdlICh0aGUgdG9wIHJhaWwgaXMgd2hlcmUgd2F0ZXIgc2l0cyBhbmQgdGhlIHBhaW50IGdvZXMgZmlyc3QpIGFuZCBhIGRpcnRcbiAgICAvLyAgICBiYW5kIGFsb25nIHRoZSBib3R0b20uIEJvdGggYXJlIG5vLW9wcyBvbiBhIHdvcmxkLXNwYWNlIHRpbGUsIHdoZXJlIHRoZXJlIGlzIG5vIHVwLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8udG9wU3RyZWFrcyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDE0LCBsZW4gPSBzICogKDAuMjUgKyBybmQoKSAqIDAuNTUpO1xuICAgICAgY29uc3QgYSA9IDAuMTAgKyBybmQoKSAqIDAuMjI7XG4gICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGxlbik7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke2F9KWApOyBnLmFkZENvbG9yU3RvcCgwLjI1LCBgcmdiYSgke3JnYihydXN0KX0sJHthICogMC44fSlgKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1c3QpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIDAsIHcsIGxlbik7XG4gICAgfVxuICAgIGlmIChvLmdyb3VuZEJhbmQpIHtcbiAgICAgIGNvbnN0IGIgPSBvLmdyb3VuZEJhbmQsIGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gKG8uZ3JvdW5kSGVpZ2h0ID8/IDAuMjIpKSk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke2J9KWApOyBnLmFkZENvbG9yU3RvcCgwLjQ1LCBgcmdiYSgke3JnYihydW4pfSwke2IgKiAwLjR9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnVuKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfVxuXG4gICAgLy8gNS4gZmluZSBncmFpbjogdGhlIHRvb3RoIG9mIGEgYnJ1c2gtcm9sbGVkIGluZHVzdHJpYWwgcGFpbnQuIE11bHRpcGx5LCBzbyBpdCBvbmx5IGRhcmtlbnMuXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAxODAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMC41ICsgcm5kKCkgKiAxLjMsIGEgPSAwLjAzICsgcm5kKCkgKiAwLjA3O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDE1MCwxNDAsMTMwLCR7YX0pYDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBIFNXRVBUIHBvbHlsaW5lIHR1YmU6IE9ORSByaW5nIG9mIGBzZWdgIHZlcnRpY2VzIHBlciBwb2ludCwgbWl0cmVkIGF0IGV2ZXJ5IGJlbmQsIGluZGV4ZWQgYW5kXG4gKiBzbW9vdGgtc2hhZGVkLiBUaGlzIGlzIG5vdCB3aGF0IGB0dWJlYCBkb2VzLCBhbmQgdGhlIGRpZmZlcmVuY2UgaXMgYSB2aXNpYmxlIGRlZmVjdCByYXRoZXIgdGhhbiBhXG4gKiByZWZpbmVtZW50LiBgdHViZWAgY2hhaW5zIGEgc2VwYXJhdGUgY3lsaW5kZXIgcGVyIHNlZ21lbnQgYW5kIEVYVEVORFMgZWFjaCBvbmUgYnkgYHIgKiAxLjJgIHNvIHRoZVxuICogam9pbnRzIGNsb3NlIC0tIHdoaWNoIGlzIGZpbmUgd2hpbGUgdGhlIHNlZ21lbnRzIGFyZSBsb25nLCBhbmQgY2F0YXN0cm9waGljIG9uIGEgdGlnaHQgY3VydmU6IGFcbiAqIDAuMTIgbSBjb3JuZXIgcmFkaXVzIHNhbXBsZWQgaW4gZml2ZSBzdGVwcyBoYXMgYSAwLjAzOCBtIGNob3JkIGFnYWluc3QgYSAwLjAyNSBtIG92ZXJsYXAsIHNvXG4gKiBjb25zZWN1dGl2ZSBjeWxpbmRlcnMgb3ZlcnNob290IGVhY2ggb3RoZXIgYnkgdHdvIHRoaXJkcyBvZiB0aGVpciBsZW5ndGggYW5kIHRoZSBiZW5kIHJlbmRlcnMgYXMgYVxuICogY3J1bXBsZWQgYWNjb3JkaW9uIG9mIHBsZWF0cy4gVGhlIGNyb3dkIGJhcnJpZXIncyByb3VuZGVkIHRvcCBjb3JuZXJzIHNoaXBwZWQgdGhhdCB3YXkuXG4gKlxuICogVGhlIGZyYW1lIGlzIHJvdGF0aW9uLW1pbmltaXNpbmcgKHBhcmFsbGVsIHRyYW5zcG9ydCksIG5vdCBGcmVuZXQ6IGEgRnJlbmV0IGZyYW1lIGZsaXBzIGl0cyBub3JtYWxcbiAqIHRocm91Z2ggYW4gaW5mbGVjdGlvbiBhbmQgdHdpc3RzIHRoZSB0dWJlLCB3aGljaCBhIFVWIG9yIGEgdmVydGV4IGNvbG91ciB0aGVuIHNob3dzIGFzIGEgc3RyaXBlXG4gKiBzcGlyYWxsaW5nIGFsb25nIGEgcmFpbCB0aGF0IGlzIG1lYW50IHRvIGJlIHN0cmFpZ2h0LiBJbnRlcmlvciBwb2ludHMgcmluZyBvbiB0aGUgQklTRUNUT1Igb2YgdGhlXG4gKiB0d28gYWRqYWNlbnQgdGFuZ2VudHMsIHdoaWNoIGlzIHRoZSBtaXRyZSBhIHJlYWwgYmVudCB0dWJlIGhhcy5cbiAqL1xuZnVuY3Rpb24gc3dlZXBUdWJlKHB0czogbnVtYmVyW11bXSwgcjogbnVtYmVyLCBzZWcgPSAxMCwgaGV4PzogbnVtYmVyLCBjYXAgPSB0cnVlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBQID0gcHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjMocFswXSwgcFsxXSwgcFsyXSkpO1xuICAvLyBkcm9wIHJlcGVhdGVkIHBvaW50czogYSB6ZXJvLWxlbmd0aCBzZWdtZW50IGhhcyBubyB0YW5nZW50LCBhbmQgb25lIGR1cGxpY2F0ZSBpcyBlbm91Z2ggdG9cbiAgLy8gcHV0IGEgTmFOIHRocm91Z2ggdGhlIHdob2xlIHRyYW5zcG9ydCBjaGFpblxuICBmb3IgKGxldCBpID0gUC5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSBpZiAoUFtpXS5kaXN0YW5jZVRvKFBbaSAtIDFdKSA8IDFlLTcpIFAuc3BsaWNlKGksIDEpO1xuICBpZiAoUC5sZW5ndGggPCAyKSByZXR1cm4gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGNvbnN0IG4gPSBQLmxlbmd0aDtcbiAgY29uc3Qgc2VnRGlyOiBUSFJFRS5WZWN0b3IzW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSBzZWdEaXIucHVzaChQW2kgKyAxXS5jbG9uZSgpLnN1YihQW2ldKS5ub3JtYWxpemUoKSk7XG4gIC8vIHBlci1wb2ludCB0YW5nZW50OiB0aGUgc2VnbWVudCBkaXJlY3Rpb24gYXQgdGhlIGVuZHMsIHRoZSBiaXNlY3RvciBiZXR3ZWVuIHR3byBzZWdtZW50cyBpbnNpZGVcbiAgY29uc3QgVCA9IFAubWFwKChfLCBpKSA9PiBpID09PSAwID8gc2VnRGlyWzBdLmNsb25lKClcbiAgICA6IGkgPT09IG4gLSAxID8gc2VnRGlyW24gLSAyXS5jbG9uZSgpXG4gICAgOiBzZWdEaXJbaSAtIDFdLmNsb25lKCkuYWRkKHNlZ0RpcltpXSkubm9ybWFsaXplKCkpO1xuICAvLyBzZWVkIGEgbm9ybWFsIHRoYXQgaXMgbm90IHBhcmFsbGVsIHRvIHRoZSBmaXJzdCB0YW5nZW50LCB0aGVuIHRyYW5zcG9ydCBpdCBwb2ludCB0byBwb2ludFxuICBsZXQgTiA9IE1hdGguYWJzKFRbMF0ueSkgPiAwLjkgPyBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKSA6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApO1xuICBOLnN1YihUWzBdLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoTi5kb3QoVFswXSkpKS5ub3JtYWxpemUoKTtcbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgaWYgKGkgPiAwKSB7XG4gICAgICAvLyByb3RhdGUgdGhlIGNhcnJpZWQgbm9ybWFsIGJ5IHRoZSBzYW1lIHJvdGF0aW9uIHRoYXQgdGFrZXMgdGhlIHByZXZpb3VzIHRhbmdlbnQgdG8gdGhpcyBvbmVcbiAgICAgIGNvbnN0IHEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhUW2kgLSAxXSwgVFtpXSk7XG4gICAgICBOLmFwcGx5UXVhdGVybmlvbihxKTtcbiAgICAgIE4uc3ViKFRbaV0uY2xvbmUoKS5tdWx0aXBseVNjYWxhcihOLmRvdChUW2ldKSkpLm5vcm1hbGl6ZSgpO1xuICAgIH1cbiAgICBjb25zdCBCID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jcm9zc1ZlY3RvcnMoVFtpXSwgTikubm9ybWFsaXplKCk7XG4gICAgLy8gYSBtaXRyZWQgcmluZyBpcyBhbiBFTExJUFNFIGluIGl0cyBvd24gcGxhbmU6IHdpZGVuIGl0IGJ5IDEvY29zKGhhbGYtYW5nbGUpIGFsb25nIHRoZSBiZW5kIHNvXG4gICAgLy8gdGhlIHN3ZXB0IHNlY3Rpb24gc3RheXMgY2lyY3VsYXIgdGhyb3VnaCB0aGUgY29ybmVyIHJhdGhlciB0aGFuIHBpbmNoaW5nIHRvIGEgd2Fpc3RcbiAgICBjb25zdCBrID0gaSA+IDAgJiYgaSA8IG4gLSAxID8gMSAvIE1hdGgubWF4KDAuNSwgc2VnRGlyW2kgLSAxXS5kb3QoVFtpXSkpIDogMTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCB0aCA9IGogKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyh0aCksIHMgPSBNYXRoLnNpbih0aCk7XG4gICAgICBwb3MucHVzaChQW2ldLnggKyAoTi54ICogYyArIEIueCAqIHMgKiBrKSAqIHIsIFBbaV0ueSArIChOLnkgKiBjICsgQi55ICogcyAqIGspICogciwgUFtpXS56ICsgKE4ueiAqIGMgKyBCLnogKiBzICogaykgKiByKTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgLy8gKGEsIGMyLCBiKSwgTk9UIChhLCBiLCBjMikuIFRoZSByaW5nIHJ1bnMgTiAtPiBCIHdpdGggQiA9IFQgeCBOLCBzbyB3aW5kaW5nIGFsb25nIHRoZSB0dWJlXG4gICAgLy8gZmlyc3QgYW5kIGFyb3VuZCBpdCBzZWNvbmQgZ2l2ZXMgYSBmYWNlIG5vcm1hbCBvZiBUIHggQiA9IC1OOiBldmVyeSB3YWxsIHRyaWFuZ2xlIGZhY2VzIElOV0FSRC5cbiAgICAvLyBCYWNrZmFjZSBjdWxsaW5nIHRoZW4gaGlkZXMgdGhlIG5lYXIgd2FsbCBhbmQgc2hvd3MgdGhlIEZBUiBvbmUsIHdoaWNoIGZvciBhIGxpdCBncmV5IHR1YmUgbG9va3NcbiAgICAvLyBhbG1vc3QgcmlnaHQgLS0gYW5kIHdyaXRlcyBpdHMgZGVwdGggb24gdGhlIGZhciBzaWRlLCBzbyBhbnl0aGluZyBwYXNzaW5nIHRocm91Z2ggdGhlIHR1YmUgZHJhd3NcbiAgICAvLyBpbiBmcm9udCBvZiBpdC4gVGhlIGZvb3Qgc3R1YnMgc3Rvb2QgcHJvdWRseSB0aHJvdWdoIHRoZSBib3R0b20gcmFpbCBiZWNhdXNlIG9mIHRoaXMsIGFuZCBpdFxuICAgIC8vIHJlYWQgYXMgYSBnZW9tZXRyeSBlcnJvciBpbiB0aGUgc3R1YiByYXRoZXIgdGhhbiBhIHdpbmRpbmcgZXJyb3IgaW4gdGhlIHN3ZWVwLlxuICAgIGNvbnN0IGEgPSBpICogc2VnICsgaiwgYiA9IChpICsgMSkgKiBzZWcgKyBqLCBjMiA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgaWR4LnB1c2goYSwgYzIsIGIsIGEsIGQsIGMyKTtcbiAgfVxuICBpZiAoY2FwKSB7XG4gICAgLy8gRmxhdCBlbmQgZGlzY3MsIG9uIHRoZWlyIE9XTiBDT1BZIG9mIHRoZSByaW0gdmVydGljZXMuIEZhbm5pbmcgdGhlbSBvZmYgdGhlIHNpZGUgd2FsbCdzIHJpbmdcbiAgICAvLyBzaGFyZXMgdGhvc2UgdmVydGljZXMsIGFuZCBgY29tcHV0ZVZlcnRleE5vcm1hbHNgIHRoZW4gYXZlcmFnZXMgdGhlIGRpc2MncyBheGlhbCBub3JtYWwgaW50b1xuICAgIC8vIHRoZSB3YWxsJ3MgcmFkaWFsIG9uZSAtLSB3aGljaCBkb2VzIG5vdCBzaGFkZSBhIHNsaWdodGx5IHdyb25nIHJpbSwgaXQgdGlsdHMgdGhlIG5vcm1hbCBhdCBCT1RIXG4gICAgLy8gZW5kcyBvZiBhIHR3by1wb2ludCB0dWJlIGFuZCBzbyBzaGFkZXMgdGhlIFdIT0xFIHR1YmUgd3JvbmcuIFRoZSBmb290IHN0dWJzIHJlbmRlcmVkIGFzIGdsYXNzXG4gICAgLy8gdGVzdCB0dWJlcyB3aXRoIGEgYnJpZ2h0IGJhbmQgdW5kZXIgdGhlIHJhaWwsIGFuZCB0aGUgYmFuZCByZWFkIGFzIGEgc2VwYXJhdGUgb2JqZWN0IHNpdHRpbmcgb25cbiAgICAvLyBpdC4gU2FtZSBmYXVsdCwgc2FtZSBmaXgsIGFzIHRoZSBzaGFycC1jb3JuZXIgc3BsaXQgaW4gYGxhdGhlYC5cbiAgICBmb3IgKGNvbnN0IFtyaW5nLCBhdCwgZmxpcF0gb2YgW1swLCBQWzBdLCB0cnVlXSwgW24gLSAxLCBQW24gLSAxXSwgZmFsc2VdXSBhcyBbbnVtYmVyLCBUSFJFRS5WZWN0b3IzLCBib29sZWFuXVtdKSB7XG4gICAgICBjb25zdCBiYXNlID0gcG9zLmxlbmd0aCAvIDM7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7IGNvbnN0IGsgPSAocmluZyAqIHNlZyArIGopICogMzsgcG9zLnB1c2gocG9zW2tdLCBwb3NbayArIDFdLCBwb3NbayArIDJdKTsgfVxuICAgICAgY29uc3QgY2kgPSBwb3MubGVuZ3RoIC8gMzsgcG9zLnB1c2goYXQueCwgYXQueSwgYXQueik7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBiYXNlICsgaiwgYiA9IGJhc2UgKyAoaiArIDEpICUgc2VnO1xuICAgICAgICBpZiAoZmxpcCkgaWR4LnB1c2goY2ksIGIsIGEpOyBlbHNlIGlkeC5wdXNoKGNpLCBhLCBiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBnIDogdGludEdlbyhnLCBoZXgpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZmVuY2UgaGVscGVycyAqL1xuXG4vKiogUGFuZWwgVVZzOiB1IGFsb25nIHdvcmxkIFggb3ZlciBgc2NhbGVgIG1ldHJlcywgdiB3b3JsZCBIRUlHSFQgb3ZlciB0aGUgc2FtZSwgcmVnYXJkbGVzcyBvZiB0aGVcbiAqICBmYWNlIG5vcm1hbC4gT24gYSB0aGluIHNsYWIgdGhpcyBtZWFucyB0aGUgZnJvbnQgYW5kIGJhY2sgZmFjZXMgc2hhcmUgdGhlIHNhbWUgdGlsZSBwbGFjZW1lbnRcbiAqICBhbmQgdGhlIGVkZ2VzIHRha2UgYSBzbGl2ZXIgb2YgaXQ7IGEgZ3JpbWUgd2FzaCB0aGF0IGtleXMgb24gdiB0aGVuIGxhbmRzIGF0IHRoZSBzYW1lIGhlaWdodCBvblxuICogIGV2ZXJ5IGZhY2UsIHdoaWNoIGlzIHdoYXQgcmFpbiBhbmQgYWxnYWUgZG8uICovXG5mdW5jdGlvbiBwYW5lbFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIsIHJvdCA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgLy8gYHJvdGAgc3dhcHMgdGhlIGF4ZXMgc28gYSB0aWxlIG9mIFZFUlRJQ0FMIHN0cmlwcyByZWFkcyBob3Jpem9udGFsIC0tIHRoZSB3b3ZlbiBiYW5kcyBvZiBhXG4gIC8vIGJhbWJvbyBwYW5lbCBhZ2FpbnN0IGl0cyB2ZXJ0aWNhbCBtdWxsaW9ucywgb25lIHRpbGUsIG9uZSBtYXRlcmlhbC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB1ID0gcm90ID8gcC5nZXRZKGkpIDogcC5nZXRYKGkpLCB2ID0gcm90ID8gcC5nZXRYKGkpIDogcC5nZXRZKGkpO1xuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIEEgc3F1YXJlIHB5cmFtaWQgU1BJS0U6IGJhc2UgdyB4IHcgYXQgYGF0YCwgYXBleCBoIGFib3ZlLiBBIHBpY2tldCdzIHNwZWFyIHBvaW50LCBhIHBpZXIgY2FwLiAqL1xuZnVuY3Rpb24gc3Bpa2UoYXQ6IG51bWJlcltdLCB3OiBudW1iZXIsIGg6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Db25lR2VvbWV0cnkodyAvIE1hdGguU1FSVDIsIGgsIDQsIDEsIGZhbHNlKTtcbiAgZy5yb3RhdGVZKE1hdGguUEkgLyA0KTtcbiAgZy50cmFuc2xhdGUoYXRbMF0sIGF0WzFdICsgaCAvIDIsIGF0WzJdKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBHUklNRSB0aWxlOiBhIG11bHRpcGxpZXIgb2Ygd2hpdGUgd2l0aCAoYSkgYSBkYXJrIHdhc2ggcmlzaW5nIGZyb20gdGhlIGdyb3VuZCB0byBgY292ZXJhZ2VgLFxuICogKGIpIHZlcnRpY2FsIHJhaW4gc3RyZWFrcyBmcm9tIHRoZSB0b3AsIChjKSBzb2Z0IGRhcmsgYmxvdGNoZXMsIChjMikgYnJvYWQgQ0xPVUQgbW90dGxpbmcsXG4gKiAoZCkgc3dlcHQgdHlyZSBTQ1VGRlMgb3ZlciBhXG4gKiBoZWlnaHQgYmFuZCwgKGUpIHZlcnRpY2FsIGZvcm0gU0VBTVMsIChmKSBQSU5IT0xFUyAtLSB0aGUgYWlyIGJ1YmJsZXMgb2YgYSBwcmVjYXN0IGZhY2UsIChnKVxuICogb3B0aW9uYWwgZ3JlZW4gbW9zcy9hbGdhZSBibG9icyBjb25jZW50cmF0ZWQgaW4gdGhlIGJvdHRvbSBiYW5kLCBhbmQgKGgpIGZpbmUgZ3JhaW4uIChkKSwgKGUpXG4gKiBhbmQgKGYpIGFyZSBvZmYgdW5sZXNzIGFza2VkIGZvciwgc28gbm90aGluZyBhbHJlYWR5IGVtaXR0ZWQgY2hhbmdlcy4gRXZlcnkgY29sb3VyIGlzIGEgZnJhY3Rpb24gb2YgdGhlXG4gKiBtYXRlcmlhbCdzIG1lYXN1cmVkIGFsYmVkbywgYW5kIHRoZSBkYXJrZXN0IGNvcmUgaXMgY2xhbXBlZCBzbyBub3RoaW5nIG9uIGEgd2hpdGUgb3IgY3JlYW1cbiAqIHN1cmZhY2UgZHJvcHMgdG93YXJkIHRoZSBob2xlIGdhdGUncyBsdW1hIDU4LlxuICovXG5mdW5jdGlvbiBncmltZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3Qgd2FzaCA9IG8ud2FzaCA/PyBbMC42MiwgMC42MiwgMC41OF0sIHdhc2hBID0gby53YXNoQWxwaGEgPz8gMC43LCBjb3YgPSBvLmNvdmVyYWdlID8/IDAuMztcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgLy8gcmFpbiBzdHJlYWtzIGZyb20gdGhlIHRvcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3RyZWFrcyA/PyAyNik7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMiwgbGVuID0gcyAqICgwLjE1ICsgcm5kKCkgKiAwLjYpLCBhID0gMC4wNSArIHJuZCgpICogMC4xMjtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGxlbik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgY3R4LmZpbGxSZWN0KHgsIDAsIHcsIGxlbik7IGN0eC5maWxsUmVjdCh4IC0gcywgMCwgdywgbGVuKTtcbiAgICB9XG4gICAgLy8gZ3JvdW5kIHdhc2guIGB3YXNoRmxhdGAgbWFrZXMgaXQgVU5JRk9STSBpbnN0ZWFkIG9mIGEgYm90dG9tLXVwIGdyYWRpZW50LCB3aGljaCBpcyB3aGF0IGFcbiAgICAvLyBob3Jpem9udGFsIHNsYWIgbmVlZHM6IGEgZ3JhZGllbnQga2V5ZWQgdG8gdGhlIHRpbGUncyB2IG1hcHMgc3RyYWlnaHQgYWNyb3NzIGEgZmxhdCBmYWNlIGFuZFxuICAgIC8vIHNwbGl0cyBpdCBpbnRvIGEgcGFsZSBoYWxmIGFuZCBhIGRhcmsgaGFsZiB3aXRoIGEgaGFyZCBlZGdlIGJldHdlZW4gdGhlbS4gRGVmYXVsdGVkIG9mZiwgc29cbiAgICAvLyBldmVyeSBwcm9wIHRoYXQgZG9lcyBub3QgYXNrIGZvciBpdCBpcyB1bmNoYW5nZWQuXG4gICAgaWYgKG8ud2FzaEZsYXQpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdikpO1xuICAgICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7d2FzaEF9KWApOyBncmFkLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBICogMC40NX0pYCk7IGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHdhc2gpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB9XG4gICAgLy8gYmxvdGNoZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmJsb3RjaGVzID8/IDQwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAxLjYpICogcywgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA2LCBhID0gMC4wOCArIHJuZCgpICogMC4zO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gU0NVRkZTOiBzb2Z0IHBhdGNoZXMgd2hlcmUgdGhlIHdhc2ggaXMgZXJhc2VkIGJhY2sgdG93YXJkIHdoaXRlLiBUaGUgdGlsZSBpcyBjb21wb3NpdGVkXG4gICAgLy8gbXVsdGlwbHktb24td2hpdGUsIHNvIHBhaW50aW5nIHdoaXRlIHNvdXJjZS1vdmVyIGlzIHBhaW50aW5nIFwibm90IGRhcmtlbmVkXCIgLS0gd2hpY2ggaXMgdGhlXG4gICAgLy8gb25seSB3YXkgYSBtdWx0aXBseSB0aWxlIGNhbiBwdXQgUEFMRSB3ZWFyIG9uIGEgZGFyayBiYXNlIHdpdGhvdXQgcmUtYmFzaW5nIHRoZSBlbnZlbG9wZVxuICAgIC8vIHR3aWNlLiBEZWZhdWx0ZWQgdG8gbm9uZS5cbiAgICBpZiAoby5zY3VmZnMpIHtcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvLnNjdWZmczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDUgKyBybmQoKSAqIChvLnNjdWZmU2NhbGUgPz8gMC4xNCkpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDI1NSwyNTUsMjU1LCR7by5zY3VmZkFscGhhID8/IDAuNTV9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgfVxuXG4gICAgLy8gQ0xPVURTOiBicm9hZCwgdmVyeSBzb2Z0IHBhdGNoZXMgb3ZlciB0aGUgV0hPTEUgdGlsZS4gQSBjYXN0IGZhY2UgaXMgbW90dGxlZCBhdCB0aGUgc2NhbGUgb2ZcbiAgICAvLyB0ZW5zIG9mIGNlbnRpbWV0cmVzIC0tIHBvdXIgbGluZXMsIGRhbXAsIHRoZSBtb3VsZCdzIG93biBoaXN0b3J5IC0tIGFuZCB0aGF0IGxvdyBmcmVxdWVuY3kgaXNcbiAgICAvLyBtb3N0IG9mIHdoYXQgc2VwYXJhdGVzIGEgcmVuZGVyZWQgc3RhbmRhcmQgZGV2aWF0aW9uIG9mIDYgZnJvbSB0aGUgcGxhdGUncyAxMi4gU21hbGwgbWFya3NcbiAgICAvLyBjYW5ub3Qgc3VwcGx5IGl0OiBhdCBwcm9wIGRpc3RhbmNlIGEgdGhvdXNhbmQgb2YgdGhlbSBhdmVyYWdlIGJhY2sgb3V0IHRvIG9uZSBmbGF0IHRvbmUuXG4gICAgLy8gS2VlcCB0aGVtIFNNQUxMIHJlbGF0aXZlIHRvIHRoZSB0aWxlLCB0aG91Z2guIEEgdGlsZSB0aGF0IHJlcGVhdHMgdHdvIG9yIHRocmVlIHRpbWVzIGFjcm9zcyBhXG4gICAgLy8gcHJvcCByZXBlYXRzIGl0cyBjbG91ZHMgdG9vLCBhbmQgYSBjbG91ZCB0aGUgc2l6ZSBvZiBhIHRoaXJkIG9mIHRoZSB0aWxlIHRoZW4gcmVhZHMgYXNcbiAgICAvLyBjYW1vdWZsYWdlIHdpdGggYSB2aXNpYmxlIHNlYW0gLS0gdGhlIHNhbWUgZmFpbHVyZSBhcyBoYXJkIGJsb3RjaGVzLCBvbmUgb2N0YXZlIGxvd2VyLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uY2xvdWRzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHYgPSBvLmNsb3VkID8/IFswLjg2LCAwLjg2LCAwLjg0XTtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKG8uY2xvdWRSID8/IDAuMTYpICogKDAuNCArIHJuZCgpICogMS40KSwgYSA9IChvLmNsb3VkQWxwaGEgPz8gMC4xMikgKiAoMC40ICsgcm5kKCkpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIFNDVUZGIGFyY3M6IHRoZSB0eXJlIGFuZCBidW1wZXIgbWFya3MgYSByb2Fkc2lkZSBiYXJyaWVyIGNvbGxlY3RzIG9uIHRoZSBiYW5kIHRoZSB0cmFmZmljXG4gICAgLy8gYWN0dWFsbHkgcmVhY2hlcy4gQnJvYWQsIHNvZnQsIG5lYXItaG9yaXpvbnRhbCBzbWVhcnMgd2l0aCBhIHN3ZXB0IHNoYXBlIC0tIGEgYmxvdGNoIHJlYWRzIGFzXG4gICAgLy8gYSBzdGFpbiwgYW5kIHdoYXQgdGhlIHBsYXRlIGNhcnJpZXMgaXMgc29tZXRoaW5nIHRoYXQgd2VudCBwYXN0LiBgc2N1ZmZCYW5kYCBpcyBhIHBhaXIgb2ZcbiAgICAvLyBIRUlHSFQgZnJhY3Rpb25zICgwIGF0IHRoZSBncm91bmQpLCBzbyBpdCBpcyBzdGF0ZWQgaW4gdGhlIHNhbWUgdGVybXMgYXMgYGNvdmVyYWdlYC5cbiAgICBpZiAoby5zY3VmZnMpIHtcbiAgICAgIGNvbnN0IHYgPSBvLnNjdWZmID8/IFswLjYyLCAwLjYyLCAwLjY0XSwgYmFuZCA9IG8uc2N1ZmZCYW5kID8/IFswLjMwLCAwLjcwXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5zY3VmZnM7IGkrKykge1xuICAgICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBzICogKDEgLSAoYmFuZFswXSArIHJuZCgpICogKGJhbmRbMV0gLSBiYW5kWzBdKSkpO1xuICAgICAgICBjb25zdCB3ID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjExKSwgaCA9IHcgKiAoMC4wNSArIHJuZCgpICogMC4xMCk7XG4gICAgICAgIGNvbnN0IGEgPSAoby5zY3VmZkFscGhhID8/IDAuMzQpICogKDAuNSArIHJuZCgpKTtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgICAgY3R4LnNhdmUoKTsgY3R4LnRyYW5zbGF0ZShjeCArIGR4LCBjeSk7IGN0eC5yb3RhdGUoKHJuZCgpIC0gMC41KSAqIDAuNDUpOyBjdHguc2NhbGUoMSwgaCAvIHcpO1xuICAgICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KDAsIDAsIDAsIDAsIDAsIHcpO1xuICAgICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNDUsIGByZ2JhKCR7cmdiKHYpfSwke2EgKiAwLjU1fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKDAsIDAsIHcsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEZPUk0gU0VBTVM6IHRoZSB2ZXJ0aWNhbCBqb2ludCBsaW5lcyBhIHByZWNhc3QgbW91bGQgbGVhdmVzLCBvbmUgcGVyIHRpbGUuIEEgZGFyayBoYWlybGluZSB3aXRoXG4gICAgLy8gYSBwYWxlciBsaXAgYmVzaWRlIGl0LCB3aGljaCBpcyB3aGF0IGEgcHJvdWQgc2VhbSBsb29rcyBsaWtlIC0tIGEgc2luZ2xlIGRhcmsgbGluZSByZWFkcyBhcyBhXG4gICAgLy8gc2NyYXRjaC4gYHNlYW1BdGAgcGxhY2VzIGl0IGFzIGEgZnJhY3Rpb24gb2YgdGhlIHRpbGUgc28gaXQgZG9lcyBub3QgbGFuZCBvbiB0aGUgd3JhcC5cbiAgICBpZiAoby5zZWFtcykge1xuICAgICAgY29uc3QgdiA9IG8uc2VhbSA/PyBbMC43MiwgMC43MSwgMC42OF07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8uc2VhbXM7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZChzICogKChvLnNlYW1BdCA/PyAwLjQyKSArIGkgLyBvLnNlYW1zKSkgJSBzO1xuICAgICAgICBjb25zdCB3cHggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHMgKiAwLjAwNCkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iodil9LCR7by5zZWFtQWxwaGEgPz8gMC41fSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgd3B4LCBzKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHYpfSwkeyhvLnNlYW1BbHBoYSA/PyAwLjUpICogMC4zfSlgOyBjdHguZmlsbFJlY3QoeCArIHdweCwgMCwgd3B4LCBzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUElOSE9MRVM6IHRoZSBhaXIgYnViYmxlcyBhIHByZWNhc3QgZmFjZSBpcyBjb3ZlcmVkIGluLiBUaGV5IGFyZSB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmdcbiAgICAvLyBtYXJrIG9mIGJhcmUgY29uY3JldGUgYXQgcHJvcCBkaXN0YW5jZSAtLSB3aXRob3V0IHRoZW0gdGhlIGZhY2UgaXMgYSBwYWludGVkIHNsYWIsIHdoaWNoIGlzXG4gICAgLy8gbWVhc3VyYWJsZSBhcyBhIHJlbmRlcmVkIHN0YW5kYXJkIGRldmlhdGlvbiBhIHRoaXJkIG9mIHRoZSBwbGF0ZSdzLiBTbWFsbCwgZGFyaywgYW5kIE1BTlkuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5waXRzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHYgPSBvLnBpdCA/PyBbMC40MiwgMC40MCwgMC4zNl07XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gKG8ucGl0UiA/PyAxLjYpICogKDAuNSArIHJuZCgpICogMS4zKTtcbiAgICAgIGNvbnN0IGEgPSAwLjI1ICsgcm5kKCkgKiAwLjU7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByICogMik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjQsIGByZ2JhKCR7cmdiKHYpfSwke2EgKiAwLjQ1fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIgKiAyLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gbW9zcyAvIGFsZ2FlIGluIHRoZSBib3R0b20gYmFuZDogY2x1c3RlcmVkIHNwZWNrcywgYnJpZ2h0ZXItdGhhbi13YXNoIGdyZWVuXG4gICAgaWYgKG8ubW9zcykge1xuICAgICAgY29uc3QgbSA9IG8ubW9zcywgYmFuZCA9IG8ubW9zc0JhbmQgPz8gMC4yMjtcbiAgICAgIC8vIGEgZmFpbnQgZ3JlZW4gd2FzaCBvdmVyIHRoZSB3aG9sZSBiYW5kIGZpcnN0LCBzbyB0aGUgY2FycGV0cyBzaXQgaW4gZGFtcCBncm91bmQgcmF0aGVyIHRoYW5cbiAgICAgIC8vIGFzIGlzb2xhdGVkIGRvdHMgb24gY2xlYW4gcGFpbnRcbiAgICAgIGNvbnN0IG1nID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGJhbmQgKiAxLjMpKTtcbiAgICAgIG1nLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihtKX0sJHtvLm1vc3NXYXNoID8/IDAuMzV9KWApOyBtZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IobSl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbWc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ubW9zc0NsdXN0ZXJzID8/IDE0KTsgaysrKSB7XG4gICAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMS42KSAqIHMgKiBiYW5kLCBjciA9IHMgKiAoMC4wMTUgKyBybmQoKSAqIDAuMDQpO1xuICAgICAgICAvLyB0aGUgY2FycGV0OiBhIHNvZnQgYmxvYiwgdGhlbiBzcGVja3Mgb3ZlciBpdCBmb3IgdGhlIHR1ZnRlZCBlZGdlXG4gICAgICAgIGNvbnN0IGNnID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGN4LCBjeSwgMCwgY3gsIGN5LCBjcik7XG4gICAgICAgIGNnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihtKX0sMC43KWApOyBjZy5hZGRDb2xvclN0b3AoMC42LCBgcmdiYSgke3JnYihtKX0sMC4zNSlgKTsgY2cuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKG0pfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY2c7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4ICsgZHgsIGN5LCBjciwgY3IgKiAwLjYsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjcjtcbiAgICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCAqIDAuNiwgciA9IDEgKyBybmQoKSAqIDM7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKG0pfSwkezAuMzUgKyBybmQoKSAqIDAuNX0pYDtcbiAgICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZ3JhaW4uIGBncmFpbmAvYGdyYWluQWxwaGFgIGRlZmF1bHQgdG8gdGhlIG9yaWdpbmFsIDE1MDAgYXQgMC4xMiwgc28gbm8gYWxyZWFkeS1lbWl0dGVkIHByb3BcbiAgICAvLyBjaGFuZ2VzOyBhIHRpbGUgc3RyZXRjaGVkIG92ZXIgYSBXSE9MRSBwcm9wICh1dlNjYWxlID4gaXRzIGhlaWdodCkgc2FtcGxlcyBvbmx5IHRoZSBmcmFjdGlvblxuICAgIC8vIG9mIHRoZSB0aWxlIHdpZHRoIGhlaWdodFVWIGZvbGRzIG9udG8gaXQsIGFuZCBuZWVkcyB0aGUgY291bnQgcmFpc2VkIHRvIGtlZXAgdGhlIHNhbWUgZGVuc2l0eS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmdyYWluID8/IDE1MDApOyBpKyspIHtcbiAgICAgIGNvbnN0IGxvID0gby5ncmFpbkxvID8/IDIwMDsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgdiA9IGxvICsgTWF0aC5yb3VuZChybmQoKSAqICgyNTUgLSBsbykpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LCR7by5ncmFpbkFscGhhID8/IDAuMTJ9KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAxLjUsIDEuNSk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIENIQUlOLUxJTksgdGlsZTogYSBkaWFtb25kIHdpcmUgbGF0dGljZSBkcmF3biBvcGFxdWUgb3ZlciBhIFRSQU5TUEFSRU5UIGdyb3VuZCwgYm91bmQgYXMgbWFwXG4gKiAgb24gYW4gYWxwaGEtdGVzdGVkIG1hdGVyaWFsIHNvIHRoZSBjZWxscyBhcmUgb3Blbi4gT25lIHRpbGUgaXMgb25lIGRpYW1vbmQgY2VsbDsgdGhlIHBhbmUnc1xuICogIFVWcyByZXBlYXQgaXQgYXQgdGhlIHJlYWwgbWVzaCBwaXRjaC4gYHdpcmVgIGlzIHRoZSB3aXJlIHdpZHRoIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGNlbGwuICovXG5mdW5jdGlvbiBjaGFpbmxpbmtUaWxlKHNpemU6IG51bWJlciwgd2lyZTogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHgubGluZVdpZHRoID0gTWF0aC5tYXgoMS41LCB3aXJlICogcyk7XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGNvbnN0IHYgPSAxNTAgKyBNYXRoLnJvdW5kKHJuZCgpICogMzApO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2IoJHt2fSwke3YgKyAyfSwke3YgKyA0fSlgO1xuICAgIC8vIHR3byBkaWFnb25hbHMgdGhyb3VnaCB0aGUgdGlsZSwgb2Zmc2V0IHNvIHRoZSB3cmFwIG1ha2VzIGEgY29udGludW91cyBkaWFtb25kIGxhdHRpY2VcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCAwKTsgY3R4LmxpbmVUbyhzLCBzKTtcbiAgICBjdHgubW92ZVRvKHMsIDApOyBjdHgubGluZVRvKDAsIHMpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICAvLyB0aGUga251Y2tsZSB3aGVyZSB3aXJlcyB0d2lzdCByb3VuZCBlYWNoIG90aGVyLCBhdCB0aGUgdHdvIGNyb3NzaW5ncyBvbiB0aGUgdGlsZSBlZGdlc1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7diAtIDIwfSwke3YgLSAxOH0sJHt2IC0gMTZ9KWA7XG4gICAgZm9yIChjb25zdCBbeCwgeV0gb2YgW1swLCAwXSwgW3MsIDBdLCBbMCwgc10sIFtzLCBzXSwgW3MgLyAyLCBzIC8gMl1dKSB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCwgeSwgY3R4LmxpbmVXaWR0aCAqIDAuOSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBCQU1CT08gU1RSSVAgdGlsZTogdmVydGljYWwgc3BsaXQtYmFtYm9vIHN0cmlwcyB3aXRoIHBhbGUgY3VsbSBmYWNlcywgZGFyayBqb2ludHMgYmV0d2VlbiB0aGVtXG4gKiAgYW5kIGEgbm9kZSBsaW5lIG9yIHR3byAtLSBhIG11bHRpcGxpZXIgb24gdGhlIG1lYXN1cmVkIHNpbHZlci1ncmV5LiAqL1xuZnVuY3Rpb24gYmFtYm9vVGlsZShzaXplOiBudW1iZXIsIHN0cmlwczogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IHN3ID0gcyAvIHN0cmlwcztcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IHN0cmlwczsgYisrKSB7XG4gICAgICBjb25zdCB0b25lID0gMC44MCArIHJuZCgpICogMC4yLCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0b25lKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2IC0gMn0sJHt2IC0gNn0pYDsgY3R4LmZpbGxSZWN0KGIgKiBzdywgMCwgc3csIHMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDUwLDQyLDM0LDAuNiknOyBjdHguZmlsbFJlY3QoYiAqIHN3LCAwLCBNYXRoLm1heCgxLCBzICogMC4wMDYpLCBzKTtcbiAgICAgIC8vIGEgaGlnaGxpZ2h0IGRvd24gdGhlIGN1bG0ncyByb3VuZFxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTApJzsgY3R4LmZpbGxSZWN0KGIgKiBzdyArIHN3ICogMC4zNSwgMCwgc3cgKiAwLjI1LCBzKTtcbiAgICAgIC8vIG5vZGUgcmluZ3NcbiAgICAgIGNvbnN0IG4gPSAxICsgTWF0aC5mbG9vcihybmQoKSAqIDIpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHsgY29uc3QgeSA9IHJuZCgpICogczsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDcwLDYwLDQ4LDAuNDUpJzsgY3R4LmZpbGxSZWN0KGIgKiBzdywgeSwgc3csIE1hdGgubWF4KDEsIHMgKiAwLjAwOCkpOyB9XG4gICAgICAvLyBmaW5lIGdyYWluIGxpbmVzXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDY7IGsrKykgeyBjb25zdCB4ID0gYiAqIHN3ICsgcm5kKCkgKiBzdzsgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDgwLDcwLDU4LCR7MC4wNSArIHJuZCgpICogMC4xfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7IH1cbiAgICB9XG4gICAgLy8gbW91bGQgc3BlY2tsZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzAwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogczsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDMwLDI4LDI0LDAuMTgpJzsgY3R4LmZpbGxSZWN0KHgsIHksIDEgKyBybmQoKSAqIDIsIDEgKyBybmQoKSAqIDIpOyB9XG4gIH0pO1xufVxuXG4vKiogUE9TVEVSIHRpbGUgZm9yIGEgaG9hcmRpbmc6IHRvcm4gcGFzdGUtdXAgc2hlZXRzIGFuZCBhIHNwcmF5IHN0ZW5jaWwgb3ZlciBhIFRSQU5TUEFSRU5UIGdyb3VuZCxcbiAqICBib3VuZCBvbiBhbiBhbHBoYS10ZXN0ZWQgcGFuZSBhIGZldyBtaWxsaW1ldHJlcyBwcm91ZCBvZiB0aGUgc2hlZXQuIGBsaW5lc2AgYXJlIHRoZSBzdGVuY2lsXG4gKiAgc3RyaW5nczsgYSBwcmludGVkIGdyYXBoaWMgaXMgZXhhY3RseSB0aGUgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIGNhc2UuICovXG5mdW5jdGlvbiBwb3N0ZXJUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBsaW5lczogc3RyaW5nW10pOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBwYXN0ZS11cHM6IG92ZXJsYXBwaW5nIG9mZi13aGl0ZSByZWN0YW5nbGVzIHdpdGggdG9ybiBlZGdlcyBhbmQgZmFpbnQgcHJpbnQgbGluZXNcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4zMCksIHkgPSBzICogKDAuMTUgKyBybmQoKSAqIDAuNDUpLCB3ID0gcyAqICgwLjE0ICsgcm5kKCkgKiAwLjE2KSwgaCA9IHMgKiAoMC4xOCArIHJuZCgpICogMC4yMik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHsyMjUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApfSwkezIyMiArIE1hdGgucm91bmQocm5kKCkgKiAxOCl9LCR7MjEwICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKX0sMC45NilgO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgY29uc3QgbiA9IDk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpKyspIGN0eC5saW5lVG8oeCArIHcgKiBpIC8gbiwgeSArIChybmQoKSAtIDAuNSkgKiBoICogMC4wOCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpKyspIGN0eC5saW5lVG8oeCArIHcgKyAocm5kKCkgLSAwLjUpICogdyAqIDAuMDgsIHkgKyBoICogaSAvIG4pO1xuICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGktLSkgY3R4LmxpbmVUbyh4ICsgdyAqIGkgLyBuLCB5ICsgaCArIChybmQoKSAtIDAuNSkgKiBoICogMC4xMik7XG4gICAgICBmb3IgKGxldCBpID0gbiAtIDE7IGkgPj0gMDsgaS0tKSBjdHgubGluZVRvKHggKyAocm5kKCkgLSAwLjUpICogdyAqIDAuMDgsIHkgKyBoICogaSAvIG4pO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDQwLDQ1LDAuNTUpJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSBjdHguZmlsbFJlY3QoeCArIHcgKiAwLjEsIHkgKyBoICogKDAuMiArIGkgKiAwLjEpLCB3ICogKDAuMyArIHJuZCgpICogMC41KSwgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSk7XG4gICAgfVxuICAgIC8vIHNwcmF5IHN0ZW5jaWwsIHNsaWdodGx5IHNvZnQgYW5kIHVuZXZlblxuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyMCwyMCwyMiwwLjg4KSc7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAke01hdGgucm91bmQocyAqIDAuMDcpfXB4IHNhbnMtc2VyaWZgO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcyAqIDAuNDAsIHkgPSBzICogKDAuNDQgKyBpICogMC4xMyk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDM7IGsrKykgeyBjdHguZ2xvYmFsQWxwaGEgPSAwLjY7IGN0eC5maWxsVGV4dChsaW5lc1tpXSwgeCArIChybmQoKSAtIDAuNSkgKiAzLCB5ICsgKHJuZCgpIC0gMC41KSAqIDMpOyB9XG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBTVFJJUEUgdGlsZTogYWx0ZXJuYXRpbmcgY29sb3VyIGJhbmRzIGFsb25nIHUgKGFuIGF3bmluZyksIHdpdGggYSBzb2Z0IGdyaW1lIG11bHRpcGx5IHNvIHRoZSBjbG90aFxuICogIHJlYWRzIHdvcm4gcmF0aGVyIHRoYW4gcHJpbnRlZC4gYGFgL2BiYCBhcmUgdGhlIHR3byBiYW5kIGNvbG91cnMgYXMgW3IsZyxiXSAwLTEuIEJvdW5kIGFzIG1hcCBvbiBhXG4gKiAgV0hJVEUgbWF0ZXJpYWwgc28gdGhlIGJhbmRzIGNhcnJ5IHRoZSB3aG9sZSBhbGJlZG8uICovXG4vLyBgb2AgaXMgb3B0aW9uYWwgYW5kIGV2ZXJ5IGZpZWxkIGRlZmF1bHRzIHRvIHRoZSBwcmV2aW91cyBoYXJkLWNvZGVkIGJlaGF2aW91ciwgc28gbm8gcHJvcCB0aGF0XG4vLyBkb2VzIG5vdCBwYXNzIGl0IGNoYW5nZXMuIGBzbXVkZ2VzYCBhbmQgYHNwZWNrc2AgZXhpc3QgYmVjYXVzZSBicnVzaGVkIFNURUVMIHdhbnRzIHRoZSBiYW5kaW5nXG4vLyB3aXRob3V0IHRoZSBkaXJ0OiB0aGUgNDAgcmFkaWFsIHNtdWRnZXMgYW5kIDEyMDAgbGlnaHQgc3BlY2tzIHJlYWQgYXMgbW91bGQgb24gYSBjbGVhbiBzYXRpblxuLy8gc3VyZmFjZSwgd2hpY2ggaXMgdGhlIG9wcG9zaXRlIG9mIHdoYXQgYSBzdHJpcGUgdGlsZSBpcyBmb3IgdGhlcmUuXG5mdW5jdGlvbiBzdHJpcGVUaWxlKHNpemU6IG51bWJlciwgYmFuZHM6IG51bWJlciwgYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIG86IGFueSA9IHt9KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYHJnYigke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfSlgO1xuICAgIGNvbnN0IHcgPSBzIC8gYmFuZHM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYW5kczsgaSsrKSB7IGN0eC5maWxsU3R5bGUgPSByZ2IoaSAlIDIgPyBiIDogYSk7IGN0eC5maWxsUmVjdChNYXRoLmZsb29yKGkgKiB3KSwgMCwgTWF0aC5jZWlsKHcpICsgMSwgcyk7IH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNtdWRnZXMgPz8gNDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSA0ICsgcm5kKCkgKiBzICogMC4wOCwgYWwgPSAwLjA2ICsgcm5kKCkgKiAwLjE4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTUwLDE0MCwxMjUsJHthbH0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxNTAsMTQwLDEyNSwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwZWNrcyA/PyAxMjAwKTsgaSsrKSB7IGNvbnN0IHYgPSAyMDAgKyBNYXRoLnJvdW5kKHJuZCgpICogNTUpOyBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4xMClgOyBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCBybmQoKSAqIHMsIDEuNSwgMS41KTsgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFNlYW1sZXNzIGFyb3VuZC1ieS11cCBVVnMgZm9yIGEgTGF0aGVHZW9tZXRyeTogdSBmcm9tIHRoZSBTRUdNRU5UIGluZGV4ICh0aGUgbGF0aGUgb3JkZXJzIGl0c1xuICogIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IsIGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSwgc28gdGhlIGR1cGxpY2F0ZWQgc2VhbSBjb2x1bW4gcmVhZHNcbiAqICB1ID0gcmVwZWF0cyBleGFjdGx5IGFuZCBSZXBlYXRXcmFwcGluZyBjbG9zZXMgaXQuIGBzY2FsZWAgaXMgdGhlIHRpbGUgc2l6ZSBpbiBtZXRyZXM7IHRoZVxuICogIGFyb3VuZC1yZXBlYXQgY291bnQgaXMgcm91bmRlZCBzbyB0aGUgdGlsZSBtZWV0cyBpdHNlbGYsIGZyb20gdGhlIHByb2ZpbGUncyB3aWRlc3QgcmFkaXVzLiAqL1xuZnVuY3Rpb24gbGF0aGVVVihnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgcG9pbnRDb3VudDogbnVtYmVyLCBzZWc6IG51bWJlciwgc2NhbGU6IG51bWJlciwgdlNjYWxlID0gc2NhbGUsIHYwID0gMCk6IHZvaWQge1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGxldCByTWF4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHJNYXggPSBNYXRoLm1heChyTWF4LCBNYXRoLmh5cG90KHAuZ2V0WChpKSwgcC5nZXRaKGkpKSk7XG4gIGNvbnN0IHJlcCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoMiAqIE1hdGguUEkgKiByTWF4IC8gc2NhbGUpKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBzID0gTWF0aC5mbG9vcihpIC8gcG9pbnRDb3VudCk7XG4gICAgdXZbaSAqIDJdID0gKHMgLyBzZWcpICogcmVwOyB1dltpICogMiArIDFdID0gKHAuZ2V0WShpKSAtIHYwKSAvIHZTY2FsZTtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG59XG5cbi8qKiBFWFBPU0VELUFHR1JFR0FURSB0aWxlOiBhIGRhcmsgbW9ydGFyIGdyb3VuZCBwYWNrZWQgd2l0aCByb3VuZGVkIHBlYmJsZXMgaW4gYSBtZWFzdXJlZCBwYWxldHRlLFxuICogIGVhY2ggZHJhd24gYXQgbmluZSB3cmFwcGVkIG9mZnNldHMgc28gdGhlIHRpbGUgaXMgc2VhbWxlc3MuIGBvLnBhbGV0dGVgIGlzIGEgbGlzdCBvZiBbcixnLGJdXG4gKiAgcmF0aW9zIGFnYWluc3QgdGhlIG1hdGVyaWFsIGNvbG91ciwgYG8uZ3JvdW5kYCB0aGUgbW9ydGFyIHJhdGlvLCBgby5jb3VudGAgdGhlIHBlYmJsZSBjb3VudC4gKi9cbmZ1bmN0aW9uIHBlYmJsZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGByZ2IoJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX0pYDtcbiAgICBjdHguZmlsbFN0eWxlID0gcmdiKG8uZ3JvdW5kID8/IFswLjQ1LCAwLjQyLCAwLjM4XSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBwYWw6IG51bWJlcltdW10gPSBvLnBhbGV0dGUgPz8gW1swLjg1LCAwLjc4LCAwLjY2XSwgWzAuNzIsIDAuNjIsIDAuNTBdLCBbMC42MCwgMC41OCwgMC41NV0sIFswLjkwLCAwLjg2LCAwLjgwXV07XG4gICAgY29uc3QgbiA9IG8uY291bnQgPz8gOTAwLCByTWluID0gcyAqIChvLnJNaW4gPz8gMC4wMTIpLCByTWF4ID0gcyAqIChvLnJNYXggPz8gMC4wMjgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByeCA9IHJNaW4gKyBybmQoKSAqIChyTWF4IC0gck1pbiksIHJ5ID0gcnggKiAoMC42ICsgcm5kKCkgKiAwLjUpLCBhID0gcm5kKCkgKiBNYXRoLlBJO1xuICAgICAgY29uc3QgYyA9IHBhbFtNYXRoLmZsb29yKHJuZCgpICogcGFsLmxlbmd0aCldLCBrID0gMC44NSArIHJuZCgpICogMC4zO1xuICAgICAgLy8gQ09OVEFDVCBTSEFET1cgZmlyc3QsIG9mZnNldCBkb3duLXJpZ2h0IGFuZCBhIHRvdWNoIGxhcmdlciwgc28gd2hhdCBzdXJ2aXZlcyBhcm91bmQgZWFjaFxuICAgICAgLy8gc3RvbmUgaXMgdGhlIGRhcmsgbW9ydGFyIGNyZXNjZW50IHRoYXQgbWFrZXMgYSBwYWNrZWQgYWdncmVnYXRlIHJlYWQgYXMgc3RvbmVzIHJhdGhlciB0aGFuXG4gICAgICAvLyBhcyBvdmVybGFwcGluZyBmbGF0IGRpc2NzLiBgc2hhZGVgIGlzIGEgcmF0aW8gYWdhaW5zdCB0aGUgbW9ydGFyIGdyb3VuZDsgMCBrZWVwcyB0aGUgb2xkXG4gICAgICAvLyBsb29rIGZvciBldmVyeSB0aWxlIGFscmVhZHkgc2hpcHBlZC5cbiAgICAgIGlmIChvLnNoYWRlKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSByZ2IoKG8uZ3JvdW5kID8/IFswLjQ1LCAwLjQyLCAwLjM4XSkubWFwKCh2KSA9PiB2ICogby5zaGFkZSkpO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCArIHJ4ICogMC4xNiwgeSArIGR5ICsgcnkgKiAwLjIyLCByeCAqIDEuMSwgcnkgKiAxLjEsIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgICAgY3R4LmZpbGxTdHlsZSA9IHJnYihjLm1hcCgodikgPT4gTWF0aC5taW4oMSwgdiAqIGspKSk7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSArIGR5LCByeCwgcnksIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgLy8gYSBoaWdobGlnaHQgY3Jlc2NlbnQgb24gdGhlIGxpdCBzaWRlIHNvIGVhY2ggc3RvbmUgcmVhZHMgYXMgYSBidW1wXG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMjU1LDI1NSwyNTUsJHtvLmdsb3NzID8/IDAuMTh9KWA7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCAtIHJ4ICogMC4yLCB5ICsgZHkgLSByeSAqIDAuMjUsIHJ4ICogMC41LCByeSAqIDAuNCwgYSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFRZUkUgVFJFQUQgdGlsZSBmb3IgYSBsYXRoZSBjYXJyeWluZyBgY3lsVVZgOiB1IHJ1bnMgQVJPVU5EIHRoZSB0eXJlIGFuZCB2IFVQIGl0LCBzbyB0cmVhZCBzbG90cyBhcmVcbiAqICBiYXJzIGF0IGNvbnN0YW50IHUgYW5kIHRoZSBjaXJjdW1mZXJlbnRpYWwgZ3Jvb3ZlcyBhcmUgbGluZXMgYXQgY29uc3RhbnQgdi4gRHJhd24gYXMgcmF0aW9zIG9uIHdoaXRlXG4gKiAgYW5kIG11bHRpcGxpZWQgaW50byB0aGUgKGxpZnRlZCkgcnViYmVyIGNvbG91cjsgYG8uZ3Jvb3ZlYCBpcyB0aGUgZGFya2VzdCByYXRpbywga2VwdCBhYm92ZSB0aGVcbiAqICBsdW1hLTU4IGhvbGUgYmFuZCBieSB0aGUgY2FsbGVyLiBgby5zbG90c2AgYmFycyBwZXIgdGlsZSwgYG8ucmluZ3NgIGNpcmN1bWZlcmVudGlhbCBsaW5lcy4gKi9cbmZ1bmN0aW9uIHRyZWFkVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IGdyb292ZSA9IG8uZ3Jvb3ZlID8/IDAuODAsIHNsb3RzID0gby5zbG90cyA/PyAyLCByaW5ncyA9IG8ucmluZ3MgPz8gMjtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgY29uc3QgZ3YgPSBNYXRoLnJvdW5kKDI1NSAqIGdyb292ZSk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtndn0sJHtndn0sJHtndn0pYDtcbiAgICBjb25zdCBwaXRjaCA9IHMgLyBzbG90cywgdyA9IHBpdGNoICogKG8uc2xvdFdpZHRoID8/IDAuMTYpO1xuICAgIC8vIHRyZWFkIHNsb3RzIHNwYW4gdGhlIGJhbmQgYmV0d2VlbiB0aGUgdHdvIGVkZ2Ugc2hvdWxkZXJzICh2IDAuMTIuLjAuODggb2YgdGhlIHRpbGUpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbG90czsgaSsrKSB7IGNvbnN0IHggPSBpICogcGl0Y2ggKyBwaXRjaCAqIDAuNCArIChybmQoKSAtIDAuNSkgKiBwaXRjaCAqIDAuMTsgY3R4LmZpbGxSZWN0KHgsIHMgKiAwLjEyLCB3LCBzICogMC43Nik7IGN0eC5maWxsUmVjdCh4IC0gcywgcyAqIDAuMTIsIHcsIHMgKiAwLjc2KTsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmluZ3M7IGkrKykgeyBjb25zdCB5ID0gcyAqICgwLjIgKyAwLjYgKiAoaSArIDAuNSkgLyByaW5ncyk7IGN0eC5maWxsUmVjdCgwLCB5IC0gMS41LCBzLCAzKTsgfVxuICAgIC8vIHNpZGV3YWxsIHNoZWVuOiBhIHNvZnQgbGlnaHRlciB3YXNoIHNvIHRoZSBydWJiZXIgaXMgbm90IG9uZSBmbGF0IHZhbHVlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTIpLCB2ID0gMjM1ICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpOyBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC41KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0gfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIE9MRCBUWVJFIHRpbGU6IFRXTyB0eXJlIGhlaWdodHMgdGFsbCBieSBgby5waXRjaGAgbWV0cmVzIGFyb3VuZCAoY3lsVVYpLiBUaGUgdXBwZXIgaGFsZiAodiAwLjUtMSlcbiAqICBpcyBhIHRyZWFkZWQgdHlyZSwgdGhlIGxvd2VyIGhhbGYgKHYgMC0wLjUpIGEgd29ybiBTTElDSyB3aXRoIGNpcmN1bWZlcmVudGlhbCBncm9vdmVzIGFuZCBzaG9ydFxuICogIHNob3VsZGVyIHNpcGVzIG9ubHksIHNvIGEgc3RhY2sgbWl4ZXMgYmFsZCBhbmQgdHJlYWRlZCB0eXJlcyBvZmYgb25lIGNhbnZhcyBieSB2MC4gRHJhd24gYXMgUkFUSU9TXG4gKiAgYWdhaW5zdCB0aGUgdmVydGV4LWNvbG91cmVkIHJ1YmJlciBhdCBgYmFzZWAgKDIwMC8yNTUgLT4gdmVydGV4IHRvbmVzIGFyZSBhdXRob3JlZCAxLjI3NXggdGhlXG4gKiAgaW50ZW5kZWQgYWxiZWRvIHNvIGR1c3QgYW5kIHNjdWZmcyBjYW4gZ28gQlJJR0hURVIgdGhhbiB0aGUgcnViYmVyIHVuZGVyIGEgbXVsdGlwbHkgY2FudmFzKS5cbiAqICBSb3dzIGFyZSBoZWlnaHRzOiBsb3dlciBzaWRld2FsbCwgdHJlYWQgYmFuZCAodiBgby5iYW5kWzBdYC4uYG8uYmFuZFsxXWAgb2YgdGhlIHN0cmlwKSwgdXBwZXJcbiAqICBzaWRld2FsbCB3aXRoIGJlYWQgcmluZ3MgYW5kIG1vdWxkIGxpbmVzLiBXZWFyOiBhIHdhcm0gZHVzdCB3YXNoIG9uIHRoZSBsb3dlciBzaG91bGRlciwgZ3JleSBzY3VmZnNcbiAqICBvbiBib3RoIHNob3VsZGVycywgZHVzdCBjYXVnaHQgaW4gdGhlIGN1dHMsIGdyYWluIG92ZXIgZXZlcnl0aGluZy4gKi9cbmZ1bmN0aW9uIHR5cmVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyAyMDAsIGJhbmQgPSBvLmJhbmQgPz8gWzAuMjQsIDAuNzZdLCBncm9vdmUgPSBvLmdyb292ZSA/PyAwLjQ1O1xuICAgIGNvbnN0IGd2ID0gTWF0aC5yb3VuZChiYXNlICogZ3Jvb3ZlKSwgcnYgPSBNYXRoLnJvdW5kKGJhc2UgKiAwLjcpLCBtdiA9IE1hdGgucm91bmQoYmFzZSAqIDAuOSk7XG4gICAgY29uc3QgZHVzdCA9IG8uZHVzdCA/PyBbMjMyLCAyMTQsIDE5MF07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtiYXNlfSwke2Jhc2V9LCR7YmFzZX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcyAqIHMgLyA2OyBpKyspIHsgY29uc3QgdiA9IGJhc2UgKyBNYXRoLnJvdW5kKChybmQoKSAtIDAuNSkgKiAyMik7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMiwgMik7IH1cbiAgICAvLyBvbmUgdHlyZSBzdHJpcCBiZXR3ZWVuIGNhbnZhcyByb3dzIHlhICh0b3ApIGFuZCB5YiAoYm90dG9tKTsgY2FudmFzIHkgZ3Jvd3MgRE9XTiwgdiBncm93cyBVUFxuICAgIGNvbnN0IHN0cmlwID0gKHlhOiBudW1iZXIsIHliOiBudW1iZXIsIHRyZWFkZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGNvbnN0IGggPSB5YiAtIHlhLCBiMCA9IHlhICsgaCAqICgxIC0gYmFuZFsxXSksIGIxID0geWEgKyBoICogKDEgLSBiYW5kWzBdKTtcbiAgICAgIGNvbnN0IG5nID0gby5ncm9vdmVzID8/IDMsIGd3ID0gaCAqIDAuMDI0O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtndn0sJHtndn0sJHtndn0pYDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmc7IGkrKykgeyBjb25zdCB5ID0gYjAgKyAoYjEgLSBiMCkgKiAoaSArIDEpIC8gKG5nICsgMSk7IGN0eC5maWxsUmVjdCgwLCB5IC0gZ3cgLyAyLCBzLCBndyk7IH1cbiAgICAgIGNvbnN0IG5zID0gby5zaXBlcyA/PyAyLCB3ID0gcyAqIChvLnNpcGVXaWR0aCA/PyAwLjA1KTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDw9IG5nOyBrKyspIHtcbiAgICAgICAgY29uc3QgeTAgPSBrID09PSAwID8gYjAgOiBiMCArIChiMSAtIGIwKSAqIGsgLyAobmcgKyAxKSArIGd3IC8gMiwgeTEgPSBrID09PSBuZyA/IGIxIDogYjAgKyAoYjEgLSBiMCkgKiAoayArIDEpIC8gKG5nICsgMSkgLSBndyAvIDI7XG4gICAgICAgIC8vIGEgc2xpY2sga2VlcHMgb25seSBTSE9SVCBzaXBlcyBhdCB0aGUgdHdvIHNob3VsZGVyIHJvd3MsIGN1dCBpbiBmcm9tIHRoZSBiYW5kIGVkZ2VcbiAgICAgICAgY29uc3Qgb3V0ZXIgPSBrID09PSAwIHx8IGsgPT09IG5nO1xuICAgICAgICBpZiAoIXRyZWFkZWQgJiYgIW91dGVyKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgeXMwID0gdHJlYWRlZCA/IHkwIDogKGsgPT09IDAgPyB5MCA6IHkxIC0gKHkxIC0geTApICogMC40NSksIHlzMSA9IHRyZWFkZWQgPyB5MSA6IChrID09PSAwID8geTAgKyAoeTEgLSB5MCkgKiAwLjQ1IDogeTEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5zOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB4ID0gKChpICsgMC41KSAvIG5zICsgKGsgJSAyKSAqIDAuNSAvIG5zKSAqIHMgKyAocm5kKCkgLSAwLjUpICogcyAqIDAuMDYsIHNsID0gKHJuZCgpIC0gMC41KSAqIHMgKiAwLjA4O1xuICAgICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCB5czApOyBjdHgubGluZVRvKHggKyBkeCArIHcsIHlzMCk7IGN0eC5saW5lVG8oeCArIGR4ICsgdyArIHNsLCB5czEpOyBjdHgubGluZVRvKHggKyBkeCArIHNsLCB5czEpOyBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gc2hvdWxkZXIgc3RlcCBhdCB0aGUgdG9wIG9mIHRoZSBiYW5kLCBiZWFkIHJpbmdzIGFuZCBtb3VsZCBsaW5lcyBvbiB0aGUgc2lkZXdhbGxzXG4gICAgICBjb25zdCBzaCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBiMCAtIGggKiAwLjAzLCAwLCBiMCArIGggKiAwLjAyKTsgc2guYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9LDApYCk7IHNoLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2d2fSwke2d2fSwke2d2fSwwLjQ1KWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHNoOyBjdHguZmlsbFJlY3QoMCwgYjAgLSBoICogMC4wMywgcywgaCAqIDAuMDUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtydn0sJHtydn0sJHtydn0pYDsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuMDQ1LCBzLCBoICogMC4wMTIpOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC45NCwgcywgaCAqIDAuMDEyKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7bXZ9LCR7bXZ9LCR7bXZ9KWA7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjExLCBzLCAyKTsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuODgsIHMsIDIpO1xuICAgICAgLy8gd2Vhcjogd2FybSByb2FkIGR1c3Qgb24gdGhlIGxvd2VyIHNob3VsZGVyIGFuZCBzaWRld2FsbCwgZ3JleSBzY3VmZnMgb24gYm90aCBzaG91bGRlcnNcbiAgICAgIGNvbnN0IGRnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliLCAwLCB5YSArIGggKiAwLjYpOyBkZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtkdXN0WzBdfSwke2R1c3RbMV19LCR7ZHVzdFsyXX0sJHtvLmR1c3RBbHBoYSA/PyAwLjM1fSlgKTsgZGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7ZHVzdFswXX0sJHtkdXN0WzFdfSwke2R1c3RbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZGc7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjYsIHMsIGggKiAwLjQpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zY3VmZnMgPz8gMTQpOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpIDwgMC41ID8gYjAgKyAocm5kKCkgLSAwLjMpICogaCAqIDAuMDggOiBiMSArIChybmQoKSAtIDAuNykgKiBoICogMC4wOCwgciA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSksIHYgPSAyMjUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjUpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTsgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuNSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5LCByICogMi4yLCByICogMC42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbGlnaHRlcic7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IGIwICsgcm5kKCkgKiAoYjEgLSBiMCksIHYgPSA2ICsgTWF0aC5yb3VuZChybmQoKSAqIDE0KTsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke01hdGgucm91bmQodiAqIDAuOSl9LCR7TWF0aC5yb3VuZCh2ICogMC43NSl9KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAyICsgcm5kKCkgKiA2LCAyICsgcm5kKCkgKiAzKTsgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfTtcbiAgICBzdHJpcCgwLCBzIC8gMiwgdHJ1ZSk7ICAgICAgLy8gdiAwLjUuLjE6IHRyZWFkZWRcbiAgICBzdHJpcChzIC8gMiwgcywgZmFsc2UpOyAgICAgLy8gdiAwLi4wLjU6IHNsaWNrXG4gIH0pO1xufVxuXG4vKiogQSB0YXBlcmVkIGJveDogQm94R2VvbWV0cnkoMSwgaCwgMSkgd2hvc2UgeC96IGFyZSBzY2FsZWQgcGVyIHZlcnRleCBieSB0aGUgZm9vdHByaW50IGludGVycG9sYXRlZFxuICogIGZyb20gKHcwLCBkMCkgYXQgdGhlIGJvdHRvbSB0byAodzEsIGQxKSBhdCB0aGUgdG9wLiBOb3JtYWxzIHJlY29tcHV0ZWQgc28gdGhlIHNsYW50ZWQgZmFjZXMgc2hhZGVcbiAqICBmbGF0LiBgYmAgPSBbY3gsIHlCb3R0b20sIGN6LCB3MCwgZDAsIHcxLCBkMSwgaF0uICovXG5mdW5jdGlvbiBmcnVzdHVtKGI6IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBbY3gsIHkwLCBjeiwgdzAsIGQwLCB3MSwgZDEsIGhdID0gYjtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCBoLCAxKTtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSAocC5nZXRZKGkpICsgaCAvIDIpIC8gaDtcbiAgICBwLnNldFgoaSwgcC5nZXRYKGkpICogKHcwICsgKHcxIC0gdzApICogdCkpOyBwLnNldFooaSwgcC5nZXRaKGkpICogKGQwICsgKGQxIC0gZDApICogdCkpO1xuICB9XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgZy50cmFuc2xhdGUoY3gsIHkwICsgaCAvIDIsIGN6KTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogSE9ULURJUCBHQUxWQU5JU0VEIFpJTkM6IGNsb3VkeSB0b25lIGRyaWZ0LCBjcnlzdGFsbGluZSBTUEFOR0xFLCBhbmQgcnVzdCBibGVlZGluZyBmcm9tIHRoZSB3ZWxkcy5cbiAqXG4gKiBUaGlzIGV4aXN0cyBiZWNhdXNlIGBncmltZVRpbGVgIG1lYXN1cmFibHkgY2Fubm90IHNheSBgZ2FsdmFuaXNlZGAuIE1lYXN1cmVkIG9uIHRoZSBjcm93ZFxuICogYmFycmllcidzIHBsYXRlIGFnYWluc3QgaXRzIGZpcnN0IGJ1aWxkLCBvdmVyIG1hdGNoZWQgZmxhdCBwYW5lbCBjcm9wczogdGhlIHBsYXRlIHJlYWRzIG1lYW4gbHVtYVxuICogMTU3LTE1OSB3aXRoIHNkIDEyLTE2IGFuZCBhIHA1Li5wOTUgc3BhbiBvZiB+NDIsIGFuZCB0aGUgcmVuZGVyIHJlYWQgbWVhbiAxNDIgd2l0aCBzZCA4LTEwIGFuZCBhXG4gKiBzcGFuIG9mIH4yMSAtLSBoYWxmIHRoZSB0b25hbCB2YXJpYXRpb24sIGFuZCBDTElQUEVEIGF0IHRoZSB0b3AgKHA3NSA9IHA5NSA9IDE0NywgdGhlIHRpbGUgZG9pbmdcbiAqIG5vdGhpbmcgYXQgYWxsIG92ZXIgdGhlIHVwcGVyIGhhbGYgb2YgdGhlIHBhbmVsKS4gQSBnYWx2YW5pc2VkIHN1cmZhY2UgaXMgbm90IGRpcnQgb24gZ3JleSBwYWludDpcbiAqIGl0IGlzIGEgZnJvemVuIGNyeXN0YWwgc3RydWN0dXJlLCBicmlnaHQgaXJyZWd1bGFyIHNwYW5nbGUgZmFjZXRzIHN0YW5kaW5nIEFCT1ZFIHRoZSBiYXNlIHRvbmVcbiAqIHdpdGggZHVsbCBncmV5LWJyb3duIGRyaWZ0IGJldHdlZW4gdGhlbSwgYW5kIHRoZSBicmlnaHRlc3QgZmlmdGggb2YgaXQgaXMgdGhlIHBhcnQgdGhhdCByZWFkcy5cbiAqXG4gKiBBIGNhbnZhcyB0aWxlIGlzIGJvdW5kIGFzIGEgTVVMVElQTFkgbWFwLCBzbyBpdCBjYW4gb25seSBldmVyIGRhcmtlbiAtLSB3aGljaCBpcyB3aHkgdGhlIHNwcmVhZFxuICogd2FzIG9uZS1zaWRlZC4gVGhlIHRpbGUgaXMgdGhlcmVmb3JlIGF1dGhvcmVkIGFyb3VuZCBhIGBtaWRgIG11bHRpcGxpZXIgd2VsbCBiZWxvdyAxIGFuZCB0aGVcbiAqIGNhbGxlciByYWlzZXMgdGhlIGJhc2UgYWxiZWRvIGJ5IDEvbWlkOiB0aGUgc3BhbmdsZSB0aGVuIHJlYWNoZXMgYmFjayB1cCB0byB0aGUgYmFzZSB3aGlsZSB0aGVcbiAqIGRyaWZ0IGZhbGxzIGF3YXkgYmVsb3cgaXQsIGFuZCB0aGUgc3VyZmFjZSB2YXJpZXMgaW4gQk9USCBkaXJlY3Rpb25zIGFib3V0IGl0cyBtZWFuLiBBdXRob3IgdGhlXG4gKiBhbGJlZG8gZm9yIHRoYXQsIG9yIHRoZSBwcm9wIHNoaXBzIGFzIGJyaWdodCBhcyB0aGUgc3BhbmdsZSBldmVyeXdoZXJlLlxuICpcbiAqIGBydXN0QmFuZGAgYmxlZWRzIGEgZGVzYXR1cmF0ZWQgYnJvd24gZG93biBmcm9tIHRoZSB0b3AgYW5kIHVwIGZyb20gdGhlIGJvdHRvbSAtLSB0aGUgdHdvIHBsYWNlcyBhXG4gKiBiYXJyaWVyJ3Mgd2VsZHMgYXJlIC0tIGJlY2F1c2UgcnVzdCBvbiBnYWx2YW5pc2VkIHN0ZWVsIHN0YXJ0cyBhdCBhIHdlbGQsIHdoZXJlIHRoZSB6aW5jIHdhc1xuICogYnVybnQgb2ZmLCBhbmQgUlVOUy4gVGhlIHBsYXRlJ3MgcnVzdCBtZWFzdXJlcyAjODI2ZTU4IG92ZXIgMi4yJSBvZiB0aGUgZnJhbWU6IGEgd2FzaCwgbm90IHRoZVxuICogb3JhbmdlIHBvbGthIGRvdHMgYSBibG90Y2ggdGlsZSBnaXZlcy5cbiAqL1xuZnVuY3Rpb24gemluY1RpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBtaWQgPSBvLm1pZCA/PyAwLjg4LCBsbyA9IG8ubG8gPz8gMC43NDtcbiAgICBjb25zdCBnID0gKHY6IG51bWJlcikgPT4geyBjb25zdCBiID0gTWF0aC5yb3VuZCgyNTUgKiB2KTsgcmV0dXJuIGByZ2IoJHtifSwke2J9LCR7Yn0pYDsgfTtcbiAgICBjdHguZmlsbFN0eWxlID0gZyhtaWQpOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gY2xvdWR5IGRyaWZ0OiBicm9hZCBzb2Z0IGJsb2JzIGJvdGggYWJvdmUgYW5kIGJlbG93IHRoZSBtaWQsIHRoZSBtb3R0bGUgYSBkaXAgbGVhdmVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5jbG91ZHMgPz8gNjApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDYgKyBybmQoKSAqIDAuMTYpO1xuICAgICAgY29uc3QgdXAgPSBybmQoKSA8IDAuNTtcbiAgICAgIGNvbnN0IHYgPSB1cCA/IG1pZCArICgxIC0gbWlkKSAqICgwLjM1ICsgcm5kKCkgKiAwLjUpIDogbG8gKyAobWlkIC0gbG8pICogcm5kKCk7XG4gICAgICBjb25zdCBnciA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke28uY2xvdWRBbHBoYSA/PyAwLjI4fSlgKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgwLDAsMCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gU1BBTkdMRTogaXJyZWd1bGFyIGJyaWdodCBjcnlzdGFsIGZhY2V0cywgYW5ndWxhciByYXRoZXIgdGhhbiByb3VuZCwgdXAgdG8gdGhlIGJhc2UgdG9uZS5cbiAgICAvLyBTbWFsbCBhbmQgZGVuc2UgLS0gbGFyZ2Ugb25lcyByZWFkIGFzIHNwbGFzaGVzIG9mIHdoaXRlIHBhaW50LCB3aGljaCBpcyB0aGUgZmFpbHVyZSBtb2RlIGFcbiAgICAvLyBibG90Y2ggdGlsZSBmYWxscyBpbnRvLlxuICAgIC8vIENMVVNURVJFRCwgbm90IHNjYXR0ZXJlZC4gVW5pZm9ybWx5IHNwcmVhZCBmYWNldHMgcmVhZCBhcyBzbm93IG9yIGR1c3Qgc3BlY2tzIC0tIGlzb2xhdGVkXG4gICAgLy8gYnJpZ2h0IGRvdHMgb24gYSBzbW9vdGggZmllbGQsIHdoaWNoIGlzIHdoYXQgdGhlIHNlY29uZCB0dW5pbmcgc2hpcHBlZCBhbmQgd2hhdCB0aGUgcGxhdGUgaGFzXG4gICAgLy8gbm9uZSBvZi4gUmVhbCBzcGFuZ2xlIGJsb29tczogdGhlIGNyeXN0YWxzIG51Y2xlYXRlIHRvZ2V0aGVyLCBzbyB0aGUgc3VyZmFjZSBpcyBwYXRjaGVzIG9mXG4gICAgLy8gZGVuc2UgYnJpZ2h0IGZhY2V0cyB3aXRoIHF1aWV0IGdyZXkgYmV0d2VlbiB0aGVtLiBgc3BhbmdsZUNsdXN0ZXJzYCBjZW50cmVzIGNhcnJ5XG4gICAgLy8gYDEgLSBzcGFuZ2xlTG9vc2VgIG9mIHRoZSBmYWNldHMsIGRpc3RyaWJ1dGVkIHNxcnQtdW5pZm9ybWx5IHNvIGVhY2ggYmxvb20gaXMgZGVuc2UgYXQgaXRzXG4gICAgLy8gbWlkZGxlIGFuZCB0aGlucyBhdCBpdHMgZWRnZTsgdGhlIHJlc3Qgc3RheSBzY2F0dGVyZWQgc28gdGhlIGZpZWxkIGlzIG5ldmVyIGJhbGQuXG4gICAgY29uc3QgY2wgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBvLnNwYW5nbGVDbHVzdGVycyA/PyAwIH0sICgpID0+IFtybmQoKSAqIHMsIHJuZCgpICogcywgcyAqICgwLjA0ICsgcm5kKCkgKiAwLjEwKV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BhbmdsZSA/PyA1MjApOyBpKyspIHtcbiAgICAgIGxldCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzO1xuICAgICAgaWYgKGNsLmxlbmd0aCAmJiBybmQoKSA+IChvLnNwYW5nbGVMb29zZSA/PyAwLjI1KSkge1xuICAgICAgICBjb25zdCBjID0gY2xbKHJuZCgpICogY2wubGVuZ3RoKSB8IDBdLCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjWzJdO1xuICAgICAgICB4ID0gY1swXSArIE1hdGguY29zKGEpICogZDsgeSA9IGNbMV0gKyBNYXRoLnNpbihhKSAqIGQ7XG4gICAgICB9XG4gICAgICBjb25zdCByID0gcyAqICgoby5zcGFuZ2xlTWluID8/IDAuMDA0KSArIE1hdGgucG93KHJuZCgpLCAyKSAqIChvLnNwYW5nbGVNYXggPz8gMC4wMTMpKTtcbiAgICAgIGNvbnN0IHYgPSBtaWQgKyAoMSAtIG1pZCkgKiAoMC41ICsgcm5kKCkgKiAwLjUpO1xuICAgICAgY29uc3QgayA9IDQgKyBNYXRoLmZsb29yKHJuZCgpICogMyk7XG4gICAgICBjb25zdCBhMCA9IHJuZCgpICogTWF0aC5QSSAqIDI7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHsoby5zcGFuZ2xlQWxwaGEgPz8gMC4yKSArIHJuZCgpICogKG8uc3BhbmdsZUFscGhhVmFyID8/IDAuMzUpfSlgO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGs7IGorKykge1xuICAgICAgICAgIGNvbnN0IGEgPSBhMCArIGogKiBNYXRoLlBJICogMiAvIGssIHJyID0gciAqICgwLjU1ICsgcm5kKCkgKiAwLjc1KTtcbiAgICAgICAgICBjb25zdCBweCA9IHggKyBkeCArIE1hdGguY29zKGEpICogcnIsIHB5ID0geSArIGR5ICsgTWF0aC5zaW4oYSkgKiByciAqIDAuODtcbiAgICAgICAgICBpZiAoaiA9PT0gMCkgY3R4Lm1vdmVUbyhweCwgcHkpOyBlbHNlIGN0eC5saW5lVG8ocHgsIHB5KTtcbiAgICAgICAgfVxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGRhcmsgZHJpcCBzdHJlYWtzIHJ1bm5pbmcgZG93bjogd2VhdGhlcmluZywgYW5kIHdoYXQgZ2l2ZXMgYSBmbGF0IHBhbmVsIGEgdmVydGljYWwgcmVhZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3RyZWFrcyA/PyAzMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMCwgeTAgPSBybmQoKSAqIHMgKiAwLjUsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjcpO1xuICAgICAgY29uc3QgdiA9IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpICogMC42LCBhID0gMC4wNiArIHJuZCgpICogMC4xNDtcbiAgICAgIGNvbnN0IGdyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkwLCAwLCB5MCArIGxlbik7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sMClgKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgwLjI1LCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke2F9KWApO1xuICAgICAgZ3IuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3I7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIHkwLCB3LCBsZW4pO1xuICAgIH1cbiAgICAvLyBGSU5FIEdSQUlOIGFuZCBTQ1JBVENIRVMuIE1lYXN1cmVkIGFnYWluc3QgdGhlIHBsYXRlIGF0IG1hdGNoZWQgbWFnbmlmaWNhdGlvbiwgdGhpcyBpcyB0aGVcbiAgICAvLyBsYXllciB0aGUgZmlyc3QgdHVuaW5nIHdhcyBtaXNzaW5nIGVudGlyZWx5OiB0aGUgcGxhdGUncyB6aW5jIGlzIHNjcmF0Y2h5IGF0IDEtMiBweCBldmVyeXdoZXJlXG4gICAgLy8gLS0gZHJhd2luZyBtYXJrcywgaGFuZGxpbmcgc2N1ZmZzLCB0aGUgY3J5c3RhbCBib3VuZGFyaWVzIHRoZW1zZWx2ZXMgLS0gYW5kIHdpdGhvdXQgaXQgdGhlXG4gICAgLy8gZHJpZnQgYW5kIHRoZSBzcGFuZ2xlIHJlYWQgYXMgc29mdCBzbm93IG9uIHNtb290aCBncmV5IGhvd2V2ZXIgd2VsbCB0aGUgSElTVE9HUkFNIG1hdGNoZXMuIFR3b1xuICAgIC8vIGNyb3BzIHdpdGggaWRlbnRpY2FsIG1lYW4sIHNkIGFuZCBwZXJjZW50aWxlcyBjYW4gbG9vayBub3RoaW5nIGFsaWtlOyB0aGUgc3RhdGlzdGljIHRoYXRcbiAgICAvLyBzZXBhcmF0ZXMgdGhlbSBpcyBzcGF0aWFsIGZyZXF1ZW5jeSwgc28gdHVuZSB0aGlzIGJ5IGV5ZSBhZ2FpbnN0IGEgbWF0Y2hlZCBjcm9wLCBub3QgYnkgc2QuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogMiwgaCA9IDEgKyBybmQoKSAqIDI7XG4gICAgICBjb25zdCB1cCA9IHJuZCgpIDwgMC41O1xuICAgICAgY29uc3QgdiA9IHVwID8gbWlkICsgKDEgLSBtaWQpICogKDAuNCArIHJuZCgpICogMC42KSA6IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7MC4xMCArIHJuZCgpICogMC4zMH0pYDtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5ICsgZHksIHcsIGgpO1xuICAgIH1cbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zY3JhdGNoZXMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjAwNiArIHJuZCgpICogMC4wNTUpLCBhID0gKHJuZCgpIC0gMC41KSAqIDAuNyArIE1hdGguUEkgLyAyO1xuICAgICAgY29uc3QgdXAgPSBybmQoKSA8IDAuNDU7XG4gICAgICBjb25zdCB2ID0gdXAgPyBtaWQgKyAoMSAtIG1pZCkgKiAoMC41ICsgcm5kKCkgKiAwLjUpIDogbG8gKyAobWlkIC0gbG8pICogcm5kKCkgKiAwLjg7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwkezAuMTAgKyBybmQoKSAqIDAuMjh9KWA7XG4gICAgICBjdHgubGluZVdpZHRoID0gMC43ICsgcm5kKCkgKiAxLjY7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCB5ICsgZHkpO1xuICAgICAgICBjdHgubGluZVRvKHggKyBkeCArIE1hdGguY29zKGEpICogbGVuLCB5ICsgZHkgKyBNYXRoLnNpbihhKSAqIGxlbik7IGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUlVTVCBmcm9tIHRoZSB3ZWxkczogYSB3YXNoIGluIHRoZSB0b3AgYW5kIGJvdHRvbSBiYW5kcywgcGx1cyBydW5zIHRyYWlsaW5nIG91dCBvZiBpdFxuICAgIGlmIChvLnJ1c3QpIHtcbiAgICAgIGNvbnN0IGMgPSBvLnJ1c3QsIGJhbmQgPSBvLnJ1c3RCYW5kID8/IDAuMTY7XG4gICAgICBjb25zdCByZ2JzID0gYCR7TWF0aC5yb3VuZCgyNTUgKiBjWzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIGNbMV0pfSwke01hdGgucm91bmQoMjU1ICogY1syXSl9YDtcbiAgICAgIC8vIHRoZSB0d28gYmFuZHMgYXJlIFNFUEFSQVRFOiBvbiBhIGJhcnJpZXIgdGhlIGdyb3VuZCBlbmQgY2FycmllcyB0aGUgZmVldCwgdGhlIHN0dWIgd2VsZHMgYW5kXG4gICAgICAvLyBldmVyeSBydW4gb2ZmIHRoZW0sIGFuZCB0aGUgdG9wIGVuZCBjYXJyaWVzIG9ubHkgdGhlIHJhaWwncyBvd24gd2VsZHMuIE9uZSBzeW1tZXRyaWMgYmFuZFxuICAgICAgLy8gd2lkZSBlbm91Z2ggdG8gcmVhY2ggdGhlIHJhaWwgd2VsZHMgYXQgdiA9IDAuMjYgYWxzbyB3YXNoZXMgdGhlIHdob2xlIHVwcGVyIHRoaXJkIG9mIGV2ZXJ5XG4gICAgICAvLyBwYW5lbCwgd2hpY2ggdGhlIHBsYXRlIGRvZXMgbm90IGhhdmUuXG4gICAgICBmb3IgKGNvbnN0IFtlZGdlLCBkaXIsIGJdIG9mIFtbMCwgMSwgby5ydXN0QmFuZFRvcCA/PyBiYW5kXSwgW3MsIC0xLCBiYW5kXV0gYXMgbnVtYmVyW11bXSkge1xuICAgICAgICBjb25zdCBnciA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBlZGdlLCAwLCBlZGdlICsgZGlyICogcyAqIGIpO1xuICAgICAgICBnci5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2JzfSwke28ucnVzdFdhc2ggPz8gMC4zMH0pYCk7IGdyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYnN9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBncjsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ydXN0UnVucyA/PyAyMik7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDE0O1xuICAgICAgICBjb25zdCB0b3AgPSBybmQoKSA8IDAuNTtcbiAgICAgICAgY29uc3QgeTAgPSB0b3AgPyAwIDogcyAtIHMgKiBiYW5kICogKDAuMyArIHJuZCgpKTtcbiAgICAgICAgY29uc3QgbGVuID0gcyAqICgwLjEwICsgcm5kKCkgKiAwLjMyKTtcbiAgICAgICAgY29uc3QgZ3IgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwICsgbGVuKTtcbiAgICAgICAgZ3IuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdic30sJHswLjE4ICsgcm5kKCkgKiAwLjMyfSlgKTsgZ3IuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdic30sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4ICsgZHgsIHkwLCB3LCBsZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY2Fub3B5LW1vZHVsZSBoZWxwZXJzXG4gKiBUaGUgZml2ZSBDQU5PUFkgTU9EVUxFUyAtLSBuaXBhIHRoYXRjaCwgdmV0aXZlciB0aGF0Y2gsIHNwbGl0IGJhbWJvbywgY29ycnVnYXRlZCBtZXRhbCxcbiAqIHRhcnBhdWxpbiAtLSBhcmUgb25lIGZhbWlseTogZm91ciBjb3JuZXIgcG9zdHMgaW5zaWRlIGEgNCB4IDQgbSBtb2R1bGUsIGEgaGVhZCBmcmFtZSwgYW5kIGEgcm9vZlxuICogd2hvc2UgbWF0ZXJpYWwgaXMgdGhlIHdob2xlIGlkZW50aXR5LiBXaGF0IHRoZXkgbmVlZCBiZXlvbmQgdGhlIHN0cmVldC1wcm9wIHZvY2FidWxhcnkgaXMgYVxuICogcm9vZmluZyB0aWxlIHBlciBtYXRlcmlhbCBhbmQgdGhlIGN1bG0gbWFwcGluZyBhIHJvdW5kIGJhbWJvbyBwb2xlIHdhbnRzLlxuICpcbiAqIGBjdWxtVVZgLCBgZ3JhaW5MaW5lc2AsIGB3ZWF0aGVyUGF0Y2hlc2AsIGBtb3VsZENsdXN0ZXJzYCBhbmQgYGN1bG1UaWxlYCBhcmUgcG9ydGVkIFZFUkJBVElNIGZyb21cbiAqIHNjcmF0Y2gvX2ZlbmNlL2ZlbmNlLmhlbHBlcnMudG1wbCwgd2hlcmUgdGhleSB3ZXJlIHdyaXR0ZW4gZm9yIHRoZSBiYW1ib28gZmVuY2UgcGFuZWwgYW5kIHdoZXJlXG4gKiB0aGUgcmVhc29uaW5nIGJlaGluZCBldmVyeSBudW1iZXIgaXMgcmVjb3JkZWQuIFRoZXkgYXJlIGNvcGllZCByYXRoZXIgdGhhbiBzaGFyZWQgYmVjYXVzZSB0aGUgdHdvXG4gKiBmYW1pbGllcyBrZWVwIHNlcGFyYXRlIHRlbXBsYXRlIHNldHM7IGEgdGhpcmQgZmFtaWx5IHdhbnRpbmcgdGhlbSBzaG91bGQgbW92ZSB0aGVtIHVwIGludG9cbiAqIGhlbHBlcnMudG1wbCByYXRoZXIgdGhhbiBjb3B5IHRoZW0gYSBzZWNvbmQgdGltZS5cbiAqL1xuXG4vKiogQ1VMTSBVVnM6IHUgYXJvdW5kIHRoZSBjaXJjdW1mZXJlbmNlIGFuZCB2IGFsb25nIHRoZSBsZW5ndGgsIGJvdGggaW4gbWV0cmVzIG92ZXIgYHNjYWxlYCwgc28gYVxuICogIGN1bG0gdGlsZSdzIG5vZGUgcmluZ3MgY3Jvc3MgdGhlIGN1bG0gYXQgcmVhbCBzcGFjaW5nIHdoaWNoZXZlciB3YXkgdGhlIGN5bGluZGVyIGlzIHRoZW4gcm90YXRlZC5cbiAqICBBcHBseSBCRUZPUkUgcm90YXRlL3RyYW5zbGF0ZS4gYHZPZmZgIHBoYXNlcyB0aGUgdGlsZSBhbG9uZyB0aGUgY3VsbSBzbyBubyB0d28gY3VsbXMgKG9yIGEgY29yZFxuICogIGNvbGxhcikgcmluZyBhdCB0aGUgc2FtZSBzdGF0aW9uLiAqL1xuZnVuY3Rpb24gY3VsbVVWKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCByOiBudW1iZXIsIGg6IG51bWJlciwgc2NhbGU6IG51bWJlciwgdk9mZiA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gIGNvbnN0IGt1ID0gKDIgKiBNYXRoLlBJICogcikgLyBzY2FsZSwga3YgPSBoIC8gc2NhbGU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIGt1LCB1di5nZXRZKGkpICoga3YgKyB2T2ZmKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBGaW5lIGxvbmdpdHVkaW5hbCBncmFpbiBiZXR3ZWVuIHkwIGFuZCB5MSBhY3Jvc3MgYSBiYW5kIHgwLi54MTogbWFueSBoYWlybGluZXMsIG1vc3RseSBhIGRhcmtcbiAqICBmaWJyZSB0b25lLCBhIGZldyBibGVhY2hlZCwgc28gdGhlIHN1cmZhY2UgcmVhZHMgYXMgZmlicm91cyBiYW1ib28gcmF0aGVyIHRoYW4gcGFpbnQuICovXG5mdW5jdGlvbiBncmFpbkxpbmVzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBybmQ6ICgpID0+IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgbjogbnVtYmVyLCBkYXJrOiBzdHJpbmcsIGxpZ2h0OiBzdHJpbmcsIGFNYXg6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykge1xuICAgIGNvbnN0IHggPSB4MCArIHJuZCgpICogKHgxIC0geDApLCBhID0gMC4wNCArIHJuZCgpICogYU1heCwgdyA9IHJuZCgpIDwgMC43NSA/IDEgOiAxLjY7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cm5kKCkgPCAwLjcyID8gZGFyayA6IGxpZ2h0fSwke2EudG9GaXhlZCgzKX0pYDtcbiAgICBjdHguZmlsbFJlY3QoeCwgeTAsIHcsIHkxIC0geTApO1xuICB9XG59XG5cbi8qKiBTb2Z0IGNsb3VkeSB3ZWF0aGVyaW5nIGFsb25nIHRoZSBmaWJyZSBkaXJlY3Rpb246IGxlbmd0aHdpc2UgcGF0Y2hlcyBvZiB3YXJtIGJyb3duLWdyZXkgKG9sZFxuICogIGxpZ25pbiBzaG93aW5nIHRocm91Z2ggdGhlIGJsZWFjaCkgYW5kIG9mIG5lYXItd2hpdGUgKHN1bi1ibGVhY2hlZCBmYWNlcyksIHNvIHRoZSB0b25lIGRyaWZ0c1xuICogIHRoZSB3YXkgd2VhdGhlcmVkIGJhbWJvbyBkb2VzIGluc3RlYWQgb2Ygc2l0dGluZyBhdCBvbmUgZ3JleS4gVmVydGljYWwgPSBhbG9uZyB0aGUgZmlicmUuICovXG5mdW5jdGlvbiB3ZWF0aGVyUGF0Y2hlcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcm5kOiAoKSA9PiBudW1iZXIsIHM6IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgbjogbnVtYmVyLCB3YXJtQTogbnVtYmVyLCBibGVhY2hBOiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICBjb25zdCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMTIgKyBybmQoKSAqIDAuNDUpLCB3YXJtID0gcm5kKCkgPCAwLjU7XG4gICAgY29uc3QgYyA9IHdhcm0gPyAnMTEyLDEwMCw4OCcgOiAnMjU1LDI1NSwyNTUnLCBhID0gd2FybSA/IHdhcm1BICogKDAuNCArIHJuZCgpICogMC42KSA6IGJsZWFjaEEgKiAoMC40ICsgcm5kKCkgKiAwLjYpO1xuICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHksIDAsIHkgKyBsZW4pO1xuICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2N9LDApYCk7IGcyLmFkZENvbG9yU3RvcCgwLjM1LCBgcmdiYSgke2N9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjY1LCBgcmdiYSgke2N9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2N9LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgwLCB5ICsgZHksIHgxIC0geDAsIGxlbik7XG4gIH1cbn1cblxuLyoqIE1vdWxkOiBjbHVzdGVycyBvZiBzbWFsbCBkYXJrIHNwZWNrcyAoYSBmZXcgZG96ZW4gZWFjaCksIHRoZSB3YXkgYmxhY2sgbW91bGQgc2l0cyBvbiBvdXRkb29yXG4gKiAgYmFtYm9vIC0tIGRlbnNlIGF0IGEgZmV3IHNwb3RzLCBhYnNlbnQgZWxzZXdoZXJlLiBBbHBoYSBjYXBwZWQgc28gdGhlIGRhcmtlc3Qgc3BlY2sgb3ZlciB0aGVcbiAqICBtZWFzdXJlZCBhbGJlZG8gc3RheXMgd2VsbCBjbGVhciBvZiB0aGUgaG9sZSBnYXRlJ3MgbHVtYSA1OC4gV3JhcHMgaW4geS4gKi9cbmZ1bmN0aW9uIG1vdWxkQ2x1c3RlcnMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJuZDogKCkgPT4gbnVtYmVyLCBzOiBudW1iZXIsIHNwb3RzOiBudW1iZXJbXVtdLCByeDogbnVtYmVyLCByeTogbnVtYmVyLCBuOiBudW1iZXIsIGFNYXg6IG51bWJlcik6IHZvaWQge1xuICBmb3IgKGNvbnN0IFtjeCwgY3ldIG9mIHNwb3RzKSB7XG4gICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY3gsIGN5LCAwLCBjeCwgY3ksIE1hdGgubWF4KHJ4LCByeSkgKiAwLjgpO1xuICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyOCwyNiwyMiwkeyhhTWF4ICogMC45KS50b0ZpeGVkKDMpfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI4LDI2LDIyLDApJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4LCBjeSArIGR5LCByeCwgcnksIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gY3ggKyAocm5kKCkgKyBybmQoKSAtIDEpICogcngsIHkgPSBjeSArIChybmQoKSArIHJuZCgpIC0gMSkgKiByeTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgyOCwyNiwyMiwkeygwLjA4ICsgcm5kKCkgKiBhTWF4KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIDIsIGggPSAxICsgcm5kKCkgKiAzO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCB3LCBoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIENVTE0gdGlsZSBmb3IgdGhlIHdob2xlLWJhbWJvbyBwb3N0IGFuZCByYWlsczogeCBydW5zIEFST1VORCB0aGUgY3VsbSwgeSBBTE9ORyBpdCAoc2VlIGN1bG1VViksXG4gKiAgMC42IG0gb2YgY3VsbSBwZXIgdGlsZS4gVHdvIG5vZGUgcmluZ3MgcGVyIHRpbGUgYXQgaXJyZWd1bGFyIHN0YXRpb25zIC0tIGEgZGFyayBncm9vdmUgdW5kZXIgYVxuICogIHBhbGUgcmFpc2VkIHJpZGdlLCB0aGUgZ3JhaW4gYnJlYWtpbmcgYXQgZWFjaCAtLSB3aXRoIGZpbmUgbG9uZ2l0dWRpbmFsIGdyYWluIGJldHdlZW4gdGhlbSwgYVxuICogIGxvbmcgZHJ5aW5nIHNwbGl0LCBsZW5ndGh3aXNlIHdlYXRoZXJpbmcgcGF0Y2hlcyBhbmQgYmxhY2sgbW91bGQgZ2F0aGVyZWQganVzdCBiZWxvdyBlYWNoIG5vZGUsXG4gKiAgYXMgaW4gdGhlIHBsYXRlJ3MgcG9zdCBhbmQgcmFpbCBjcm9wcy4gQSBtdWx0aXBsaWVyIG9uIHRoZSBtZWFzdXJlZCBjdWxtIGdyZXkuICovXG5mdW5jdGlvbiBjdWxtVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBEQVJLID0gJzkyLDc4LDYyJywgTElHSFQgPSAnMjU1LDI1NSwyNTUnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2YwZWZlYyc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBhIHNvZnQgdG9uZSBkcmlmdCBhcm91bmQgdGhlIGN1bG0sIHNvIHRoZSByb3VuZCBpcyBub3Qgb25lIGZsYXQgdmFsdWVcbiAgICBjb25zdCBnYSA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBzLCAwKTtcbiAgICBnYS5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMTAwLDkyLDg0LDAuMTIpJyk7IGdhLmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTApJyk7IGdhLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMDAsOTIsODQsMC4xMiknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ2E7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgMTQsIDAuMTIsIDAuMzApO1xuICAgIC8vIG5vZGUgc3RhdGlvbnM6IHR3byBwZXIgdGlsZSwgaXJyZWd1bGFyLCBuZXZlciB3aXRoaW4gMC4xOCBvZiBlYWNoIG90aGVyIG9yIHRoZSB3cmFwXG4gICAgY29uc3Qgbm9kZXMgPSBbcyAqICgwLjIwICsgcm5kKCkgKiAwLjEwKSwgcyAqICgwLjY2ICsgcm5kKCkgKiAwLjEyKV07XG4gICAgLy8gZ3JhaW4gaW4gc2VnbWVudHMgYmV0d2VlbiB0aGUgbm9kZXMgc28gaXQgYnJlYWtzIGF0IGVhY2ggcmluZ1xuICAgIGNvbnN0IHN0YXRpb25zID0gWzAsIC4uLm5vZGVzLCBzXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSArIDEgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykgZ3JhaW5MaW5lcyhjdHgsIHJuZCwgMCwgcywgc3RhdGlvbnNbaV0sIHN0YXRpb25zW2kgKyAxXSwgMjYwLCBEQVJLLCBMSUdIVCwgMC4yNik7XG4gICAgLy8gYSBjb3VwbGUgb2YgbG9uZyBkcnlpbmcgc3BsaXRzIGFsb25nIHRoZSBmaWJyZVxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMjsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCBsZW4gPSBzICogKDAuMjUgKyBybmQoKSAqIDAuNSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzgsMzIsMjYsMC41NSknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCAxLjQsIGxlbik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xOCknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCArIDEuNCwgeSArIGR5LCAxLCBsZW4pO1xuICAgIH1cbiAgICAvLyB0aGUgbm9kZSByaW5nc1xuICAgIGZvciAoY29uc3QgeSBvZiBub2Rlcykge1xuICAgICAgY29uc3QgZ3MgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSAtIHMgKiAwLjAzLCAwLCB5KTtcbiAgICAgIGdzLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw1MCw0MCwwKScpOyBncy5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNTAsNDAsMC4yMiknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnczsgY3R4LmZpbGxSZWN0KDAsIHkgLSBzICogMC4wMywgcywgcyAqIDAuMDMpOyAgICAgICAgICAvLyBzaGFkZSB1cCB0byB0aGUgcmluZ1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDUyLDQ0LDM2LDAuNjIpJzsgY3R4LmZpbGxSZWN0KDAsIHksIHMsIDIuNSk7ICAgICAgICAvLyB0aGUgZ3Jvb3ZlXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4zNCknOyBjdHguZmlsbFJlY3QoMCwgeSArIDIuNSwgcywgNCk7IC8vIHRoZSByYWlzZWQgc2hlYXRoIHJpZGdlXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNjAsNTAsNDAsMC4zMCknOyBjdHguZmlsbFJlY3QoMCwgeSArIDYuNSwgcywgMS41KTsgIC8vIGl0cyBsb3dlciBlZGdlXG4gICAgICBjb25zdCBnZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5ICsgOCwgMCwgeSArIHMgKiAwLjA1KTtcbiAgICAgIGdkLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCw1MCw0MCwwLjIwKScpOyBnZC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsNTAsNDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnZDsgY3R4LmZpbGxSZWN0KDAsIHkgKyA4LCBzLCBzICogMC4wNSk7XG4gICAgfVxuICAgIC8vIG1vdWxkIGdhdGhlcnMganVzdCBiZWxvdyB0aGUgbm9kZXMgYW5kIGluIGEgY291cGxlIG9mIGxvb3NlIHBhdGNoZXNcbiAgICBjb25zdCBzcG90czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAoY29uc3QgeSBvZiBub2RlcykgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHNwb3RzLnB1c2goW3JuZCgpICogcywgeSArIHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSldKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykgc3BvdHMucHVzaChbcm5kKCkgKiBzLCBybmQoKSAqIHNdKTtcbiAgICBtb3VsZENsdXN0ZXJzKGN0eCwgcm5kLCBzLCBzcG90cywgcyAqIDAuMTAsIHMgKiAwLjA2LCA5MCwgMC4zMCk7XG4gIH0pO1xufVxuXG5cbi8qKlxuICogVEhBVENIIHRpbGUsIGZvciBhIHJvb2YgbWFwcGVkIHdpdGggV09STEQgVVZzIHNvIHUgcnVucyBhbG9uZyB0aGUgcmlkZ2UgYW5kIHYgdXAgdGhlIHNsb3BlLlxuICpcbiAqIFRoYXRjaCBpcyBsYWlkIGluIENPVVJTRVM6IGVhY2ggY291cnNlIGlzIGEgYnVuZGxlIG9mIHN0ZW1zIHBlZ2dlZCB0byBhIHB1cmxpbiB3aXRoIGl0cyBidXR0c1xuICogaGFuZ2luZyBvdmVyIHRoZSBjb3Vyc2UgYmVsb3csIHNvIHdoYXQgYSB2aWV3ZXIgYWN0dWFsbHkgcmVzb2x2ZXMgYXQgcHJvcCBkaXN0YW5jZSBpcyBhIHN0YWNrIG9mXG4gKiBob3Jpem9udGFsIGJhbmRzIHdpdGggYSBzaGFkb3cgbGluZSB1bmRlciBlYWNoIGJ1dHQsIGFuZCBhIGZpYnJlIHRleHR1cmUgcnVubmluZyBkb3duIHRoZSBzbG9wZVxuICogaW5zaWRlIHRoZW0uIE1vZGVsbGluZyB0aGUgc3RlbXMgaXMgd2hhdCB0aGUgcmVnaXN0cnkgbm90ZXMgZm9yYmlkOyB0aGlzIGlzIHdoZXJlIHRoYXQgZGV0YWlsXG4gKiBnb2VzIGluc3RlYWQuXG4gKlxuICogT25lIHRpbGUgaXMgYGNvdXJzZXNgIGNvdXJzZXMgdGFsbC4gVGhlIGtub2JzIGFyZSB3aGF0IHNlcGFyYXRlcyB0aGUgdHdvIHRoYXRjaGVzIG9uIHRoZSBwbGF0ZXM6XG4gKiAgIG5pcGEgICAgIGJyb2FkIGZsYXQgcGFsbSBibGFkZXMgLS0gZmV3IHdpZGUgc3Ryb2tlcyAoYHN0ZW1XYCAzLTcgcHgpLCBhIHdpZGUgdG9uYWwgYHNwcmVhZGAsXG4gKiAgICAgICAgICAgIGEgZGVlcGx5IFJBR0dFRCBidXR0IGxpbmUgYW5kIG9jY2FzaW9uYWwgbWlzc2luZyBibGFkZXMuXG4gKiAgIHZldGl2ZXIgIGNvbWJlZCBncmFzcyAtLSBodW5kcmVkcyBvZiBoYWlybGluZXMsIGEgbmFycm93IHNwcmVhZCwgYW4gYWxtb3N0IHN0cmFpZ2h0IGJ1dHQuXG4gKiBgbW9zc2AgbXVsdGlwbGllcyBhIGdyZWVuIGNhc3QgaW50byBzY2F0dGVyZWQgcGF0Y2hlczogdGhlIHRpbGUgaXMgYSBNVUxUSVBMSUVSIG9uIGEgcGFsZSBzdHJhd1xuICogYWxiZWRvLCBhbmQgYSBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4sIHNvIGdyZWVuIGhhcyB0byBhcnJpdmUgYXMgXCJsZXNzIHJlZCBhbmQgYmx1ZVwiIGFuZCBuZXZlclxuICogYXMgYSBwYWludGVkIGdyZWVuLiBOb3RoaW5nIGhlcmUgZ29lcyBiZWxvdyAwLjQyIG9mIHRoZSBhbGJlZG8sIHdoaWNoIGtlZXBzIHRoZSBkYXJrZXN0IHRleGVsIG9mXG4gKiBhIHN0cmF3IGF0IGx1bWEgfjE1MCB3ZWxsIGNsZWFyIG9mIHRoZSBzaWxob3VldHRlIGdhdGUncyBiYWNrZHJvcCBiYW5kLlxuICovXG5mdW5jdGlvbiB0aGF0Y2hUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgbmM6IG51bWJlciA9IG8uY291cnNlcyA/PyA0LCBjaCA9IHMgLyBuYztcbiAgICBjb25zdCBzdGVtczogbnVtYmVyID0gby5zdGVtcyA/PyAyNjAsIHNwcmVhZDogbnVtYmVyID0gby5zcHJlYWQgPz8gMC4xMjtcbiAgICBjb25zdCB3TWluOiBudW1iZXIgPSBvLnN0ZW1XPy5bMF0gPz8gMSwgd01heDogbnVtYmVyID0gby5zdGVtVz8uWzFdID8/IDI7XG4gICAgY29uc3QgcmFnZ2VkOiBudW1iZXIgPSBvLnJhZ2dlZCA/PyAwLjA2OyAgICAgICAgICAgICAgICAgLy8gYnV0dC1saW5lIHdhdmluZXNzLCBhcyBhIHNoYXJlIG9mIGNoXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuXG4gICAgLy8gdGhlIGJ1dHQgbGluZSBvZiBlYWNoIGNvdXJzZSwgaml0dGVyZWQgcGVyIGNvbHVtbiBhbmQgU0hBUkVEIHdpdGggdGhlIGNvdXJzZSBhYm92ZSBzbyB0aGVcbiAgICAvLyBzaGFkb3cgYW5kIHRoZSBibGFkZXMgYWdyZWUgb24gd2hlcmUgdGhlIGVkZ2UgaXNcbiAgICBjb25zdCBidXR0czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDw9IG5jOyBjKyspIHtcbiAgICAgIGNvbnN0IHJvdzogbnVtYmVyW10gPSBbXTtcbiAgICAgIGxldCB5ID0gMDtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDw9IHM7IHgrKykge1xuICAgICAgICBpZiAoeCAlIE1hdGgubWF4KDIsIE1hdGgucm91bmQocyAvIDQ4KSkgPT09IDApIHkgPSAocm5kKCkgKiAyIC0gMSkgKiByYWdnZWQgKiBjaDtcbiAgICAgICAgcm93LnB1c2goYyAqIGNoICsgeSk7XG4gICAgICB9XG4gICAgICBidXR0cy5wdXNoKHJvdyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCBuYzsgYysrKSB7XG4gICAgICBjb25zdCB5MCA9IGMgKiBjaDtcbiAgICAgIC8vIHRoZSBjb3Vyc2UncyBvd24gdG9uZTogdGhhdGNoIHdlYXRoZXJzIGNvdXJzZSBieSBjb3Vyc2UsIHRoZSBsb3dlciBvbmVzIGdyZXllclxuICAgICAgY29uc3QgdCA9IDEgLSBzcHJlYWQgKiBybmQoKTtcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIHQpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke01hdGgucm91bmQodiAqIDAuOTg1KX0sJHtNYXRoLnJvdW5kKHYgKiAwLjk1KX0pYDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCB5MCAtIHJhZ2dlZCAqIGNoIC0gMSwgcywgY2ggKyAyICogcmFnZ2VkICogY2ggKyAyKTtcbiAgICAgIC8vIHN0ZW1zIHJ1bm5pbmcgRE9XTiB0aGUgc2xvcGUgaW5zaWRlIHRoZSBjb3Vyc2UsIGVhY2ggYSBsaXR0bGUgcGFzdCBpdHMgYnV0dCBsaW5lXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IHN0ZW1zOyBrKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcztcbiAgICAgICAgY29uc3QgdyA9IHdNaW4gKyBybmQoKSAqICh3TWF4IC0gd01pbik7XG4gICAgICAgIGNvbnN0IHRvbmUgPSAxIC0gc3ByZWFkICogKDAuMyArIHJuZCgpICogMC43KTtcbiAgICAgICAgY29uc3QgYSA9IDAuMTggKyBybmQoKSAqIDAuMzI7XG4gICAgICAgIGNvbnN0IGRhcmsgPSBybmQoKSA8IDAuNjI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBkYXJrID8gYHJnYmEoJHtNYXRoLnJvdW5kKDEyMCAqIHRvbmUpfSwke01hdGgucm91bmQoMTA2ICogdG9uZSl9LCR7TWF0aC5yb3VuZCg4NCAqIHRvbmUpfSwke2EudG9GaXhlZCgzKX0pYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGByZ2JhKDI1NSwyNTMsMjQ2LCR7KGEgKiAwLjYpLnRvRml4ZWQoMyl9KWA7XG4gICAgICAgIGNvbnN0IHlUb3AgPSB5MCAtIGNoICogKDAuMTUgKyBybmQoKSAqIDAuMjUpO1xuICAgICAgICBjb25zdCB5Qm90ID0gYnV0dHNbYyArIDFdW01hdGgubWluKHMsIE1hdGgucm91bmQoeCkpXSArIGNoICogKHJuZCgpICogMC4xMCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5VG9wLCB3LCBNYXRoLm1heCgyLCB5Qm90IC0geVRvcCkpO1xuICAgICAgfVxuICAgICAgLy8gTUlTU0lORyBibGFkZXM6IGEgZmV3IGdhcHMgd2hlcmUgdGhlIGNvdXJzZSBoYXMgdGhpbm5lZCwgZGFyayBidXQgbmV2ZXIgYmxhY2tcbiAgICAgIGNvbnN0IGdhcHMgPSBvLmdhcHMgPz8gMDtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgZ2FwczsgaysrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSBzICogKDAuMDEgKyBybmQoKSAqIDAuMDMpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoOTYsODQsNjYsJHsoMC4yMCArIHJuZCgpICogMC4xOCkudG9GaXhlZCgzKX0pYDtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHkwICsgY2ggKiAwLjI1LCB3LCBjaCAqICgwLjQgKyBybmQoKSAqIDAuNSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoZSBzaGFkb3cgZWFjaCBjb3Vyc2UncyBidXR0IGNhc3RzIG9uIHRoZSBvbmUgYmVsb3c6IGEgZ3JhZGllbnQgZmFsbGluZyBBV0FZIGZyb20gdGhlIGxpbmUsXG4gICAgLy8gZHJhd24gYWxvbmcgdGhlIGppdHRlcmVkIGJ1dHQgc28gdGhlIHNoYWRvdyBpcyBhcyByYWdnZWQgYXMgdGhlIGVkZ2UgdGhhdCBjYXN0cyBpdCwgd2l0aCB0aGVcbiAgICAvLyBMSVQgVElQUyBvZiB0aGUgY291cnNlIGFib3ZlIGl0IGFzIGEgcGFsZSBsaW5lLiBUaGUgcGFpciBpcyB3aGF0IG1ha2VzIHRoZSByb29mIHJlYWQgYXNcbiAgICAvLyBzdGFja2VkIGxheWVyczsgdGhlIHNoYWRvdyBhbG9uZSByZWFkcyBhcyBncmFpbiwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYnVpbGQgbG9va2VkIGxpa2UuXG4gICAgZm9yIChsZXQgYyA9IDE7IGMgPD0gbmM7IGMrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4KyspIHtcbiAgICAgICAgY29uc3QgeWIgPSBidXR0c1tjXVt4XTtcbiAgICAgICAgY29uc3QgZ2ggPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeWIgLSBjaCAqIDAuMDksIDAsIHliKTtcbiAgICAgICAgZ2guYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwyNTIsMjQyLDApJyk7IGdoLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgyNTUsMjUyLDI0MiwkeyhvLnRpcCA/PyAwLjM0KS50b0ZpeGVkKDMpfSlgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdoO1xuICAgICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5YiAtIGNoICogMC4wOSArIGR5LCAxLCBjaCAqIDAuMDkpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5YiwgMCwgeWIgKyBjaCAqIDAuMjIpO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoNTgsNDgsMzYsJHsoby5zaGFkb3cgPz8gMC40MikudG9GaXhlZCgzKX0pYCk7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSg1OCw0OCwzNiwwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHliICsgZHksIDEsIGNoICogMC4yMik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTU9TUyAvIE1PVUxEOiBsZXNzIHJlZCBhbmQgYmx1ZSBvdmVyIHNvZnQgcGF0Y2hlcywgbmV2ZXIgYSBwYWludGVkIGdyZWVuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5tb3NzID8/IDApOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTQpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBjb25zdCBhID0gMC4xNCArIHJuZCgpICogMC4yMjtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxNTAsMTkwLDExMCwke2EudG9GaXhlZCgzKX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxNTAsMTkwLDExMCwwKScpO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7IGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9XG4gICAgLy8gc29mdCB0b25hbCBkcmlmdCBzbyB0aGUgY291cnNlcyBkbyBub3QgcmVhZCBhcyBhIHByaW50ZWQgc3RyaXBlXG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIG8ud2VhdGhlciA/PyAxMCwgMC4xMCwgMC4yMik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFdPVkVOIFRBUlBBVUxJTiB0aWxlOiB0aGUgY29hcnNlIGNyb3NzLXdvdmVuIHBvbHlwcm9weWxlbmUgdGFwZSBvZiBhIFRoYWkgYnVpbGRlcidzIHRhcnAsIHBsdXNcbiAqIHRoZSBjcmVhc2VzIGEgZm9sZGVkIHNoZWV0IGtlZXBzIGZvciBsaWZlIGFuZCB0aGUgc3VuLWJsZWFjaGluZyBhbG9uZyB0aGUgcmlkZ2VzLiBBIG11bHRpcGxpZXIgb25cbiAqIHRoZSBtZWFzdXJlZCBibHVlLCBzbyB0aGUgd2VhdmUgZGFya2VucyBhbmQgdGhlIGJsZWFjaCBsaWZ0cyB0b3dhcmQgd2hpdGUuXG4gKi9cbmZ1bmN0aW9uIHRhcnBUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IHBpdGNoID0gTWF0aC5tYXgoMywgTWF0aC5yb3VuZChzIC8gKG8udGFwZXMgPz8gNjQpKSk7XG4gICAgLy8gdGhlIHdlYXZlOiB3YXJwIGFuZCB3ZWZ0IHRhcGVzLCBlYWNoIHBhaXIgd2l0aCBhIHNoYWRvdyBhdCBpdHMgam9pbiwgYWx0ZXJuYXRpbmcgb3Zlci91bmRlclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCArPSBwaXRjaCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDMwLDM0LDQ0LCR7KDAuMTAgKyBybmQoKSAqIDAuMDgpLnRvRml4ZWQoMyl9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA3KSc7IGN0eC5maWxsUmVjdCh4ICsgMSwgMCwgTWF0aC5tYXgoMSwgcGl0Y2ggKiAwLjM1KSwgcyk7XG4gICAgfVxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgczsgeSArPSBwaXRjaCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDMwLDM0LDQ0LCR7KDAuMTAgKyBybmQoKSAqIDAuMDgpLnRvRml4ZWQoMyl9KWA7IGN0eC5maWxsUmVjdCgwLCB5LCBzLCAxKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA3KSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgMSwgcywgTWF0aC5tYXgoMSwgcGl0Y2ggKiAwLjM1KSk7XG4gICAgfVxuICAgIC8vIGZvbGQgY3JlYXNlczogbG9uZyBwYWxlIGxpbmVzIHdpdGggYSBzaGFkb3cgb24gb25lIHNpZGUsIGF0IHRoZSB0d28gYXhlcyBhIHRhcnAgaXMgZm9sZGVkIG9uXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5jcmVhc2VzID8/IDYpOyBrKyspIHtcbiAgICAgIGNvbnN0IGhvcml6ID0gcm5kKCkgPCAwLjUsIHAgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC41ICsgcm5kKCkgKiAwLjUpLCBxID0gcm5kKCkgKiBzO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMjYpJztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjI2KSc7XG4gICAgICBpZiAoaG9yaXopIHsgY3R4LmZpbGxSZWN0KHEgLSBsZW4gLyAyLCBwLCBsZW4sIDEuNik7IGN0eC5maWxsU3R5bGUgPSAncmdiYSgyMCwyNiwzOCwwLjE4KSc7IGN0eC5maWxsUmVjdChxIC0gbGVuIC8gMiwgcCArIDEuNiwgbGVuLCAyKTsgfVxuICAgICAgZWxzZSB7IGN0eC5maWxsUmVjdChwLCBxIC0gbGVuIC8gMiwgMS42LCBsZW4pOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjAsMjYsMzgsMC4xOCknOyBjdHguZmlsbFJlY3QocCArIDEuNiwgcSAtIGxlbiAvIDIsIDIsIGxlbik7IH1cbiAgICB9XG4gICAgLy8gc3VuLWJsZWFjaGVkIHN0cmVha3MgYW5kIGEgbGl0dGxlIGdyaW1lXG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIG8ud2VhdGhlciA/PyAxMiwgMC4xMCwgMC4zNCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIFNBV04gVElNQkVSIHRpbGUgZm9yIGEgd2VhdGhlcmVkIHBvc3QtYW5kLXBsYXRlIGZyYW1lOiBmaW5lIGxvbmdpdHVkaW5hbCBncmFpbiwgYSBmZXcga25vdHMsIHRoZVxuICogb2RkIGRyeWluZyBzcGxpdCwgYW5kIGNsb3VkeSBzaWx2ZXIgd2VhdGhlcmluZy4gRGVsaWJlcmF0ZWx5IFdFQUtMWSBkaXJlY3Rpb25hbCAtLSB0aGUgZnJhbWUgaXNcbiAqIG1hcHBlZCB3aXRoIHdvcmxkIFVWcywgd2hpY2ggcHV0IHYgYWxvbmcgdGhlIHBvc3QgYnV0IEFDUk9TUyBhIGJlYW0sIGFuZCBhIHN0cm9uZ2x5IHN0cmlwZWQgdGlsZVxuICogd291bGQgdGhlbiByZWFkIGFzIGEgcGxhbmsgam9pbnQgcnVubmluZyB0aGUgd3Jvbmcgd2F5IG9uIGhhbGYgdGhlIGZyYW1lLiBUaGUgd2VhdGhlcmluZyBjYXJyaWVzXG4gKiBtb3N0IG9mIHRoZSByZWFkIGFuZCB0aGUgZ3JhaW4gb25seSBzaGFycGVucyBpdCwgd2hpY2ggc3Vydml2ZXMgYm90aCBvcmllbnRhdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIHNhd25UaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgREFSSyA9ICc5Niw4NCw2OCcsIExJR0hUID0gJzI1NSwyNTUsMjU1JztcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmNGYyZWUnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIG8ud2VhdGhlciA/PyAyMCwgMC4xNCwgMC4zMCk7XG4gICAgZ3JhaW5MaW5lcyhjdHgsIHJuZCwgMCwgcywgMCwgcywgby5ncmFpbiA/PyAyMjAsIERBUkssIExJR0hULCAwLjE4KTtcbiAgICAvLyBrbm90czogYSBkYXJrIGVsbGlwc2Ugd2l0aCB0aGUgZ3JhaW4gc3dlZXBpbmcgcm91bmQgaXRcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLmtub3RzID8/IDQpOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDEyICsgcm5kKCkgKiAwLjAyKTtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg3NCw2MCw0NCwwLjQ1KSc7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIsIHIgKiAxLjYsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoOTYsODAsNjAsMC4yMiknOyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgZm9yIChsZXQgcSA9IDE7IHEgPD0gMzsgcSsrKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIgKiAoMSArIHEgKiAwLjYpLCByICogKDEuNiArIHEgKiAwLjkpLCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBkcnlpbmcgc3BsaXRzIGFsb25nIHRoZSBmaWJyZVxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uc3BsaXRzID8/IDMpOyBrKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjQ1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg1OCw0OCwzNiwwLjQyKSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4LCB5ICsgZHksIDEuNCwgbGVuKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjE2KSc7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4ICsgMS40LCB5ICsgZHksIDEsIGxlbik7XG4gICAgfVxuICAgIGNvbnN0IHNwb3RzOiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5tb3VsZCA/PyAzKTsgaSsrKSBzcG90cy5wdXNoKFtybmQoKSAqIHMsIHJuZCgpICogc10pO1xuICAgIG1vdWxkQ2x1c3RlcnMoY3R4LCBybmQsIHMsIHNwb3RzLCBzICogMC4wOSwgcyAqIDAuMDcsIDcwLCAwLjI0KTtcbiAgfSk7XG59XG5cbi8qKlxuICogR0FMVkFOSVNFRCBTSEVFVCB3ZWF0aGVyaW5nOiBvbmUgc2VhbWxlc3MgbXVsdGlwbGllciB0aWxlIGNhcnJ5aW5nIHRoZSB0aHJlZSB0aGluZ3MgYSB6aW5jIHJvb2ZcbiAqIGFjdHVhbGx5IHNob3dzIC0tIHRoZSBjaGFsa3kgd2hpdGUgb3hpZGF0aW9uIHRoYXQgZWF0cyB0aGUgc3BhbmdsZSwgdGhlIGRhcmtlciBncmV5IGRyaWZ0IHdoZXJlXG4gKiBpdCBoYXMgbm90LCBhbmQgdGhlIHdhcm0gcnVzdCBmcmVja2xlcyB0aGF0IHN0YXJ0IGF0IGV2ZXJ5IGZpeGluZyBhbmQgbGFwLlxuICpcbiAqIExpa2UgYHBhaW50VGlsZWAgaXQgaXMgZHJhd24gaW4gQUJTT0xVVEUgbXVsdGlwbGllciBzcGFjZSBvdmVyIGEgUkUtQkFTRUQgZW52ZWxvcGUsIGJlY2F1c2VcbiAqIGNoYWxraW5nIGlzIEJSSUdIVEVSIHRoYW4gdGhlIGNsZWFuIHNoZWV0IGl0IHNpdHMgb24gYW5kIGEgcGxhaW4gbXVsdGlwbHkgY2FuIG9ubHkgZGFya2VuLiBgby5iYXNlYFxuICogaXMgdGhlIGNsZWFuIHppbmMncyBvd24gbXVsdGlwbGllciBhZ2FpbnN0IHRoYXQgZW52ZWxvcGUgYW5kIGlzIHdoYXQgbW9zdCBvZiB0aGUgdGlsZSBpcyBmaWxsZWRcbiAqIHdpdGg7IGBvLmNoYWxrYCByZWFjaGVzIGJhY2sgdXAgdG8gdGhlIGVudmVsb3BlLiBNZWFzdXJlZCBvZmYgdGhlIHBsYXRlLCB0aGUgZGVjayBydW5zIDE3MiB0byAxOTdcbiAqIGx1bWEgYWNyb3NzIGl0cyBvd24gc3VyZmFjZSBhdCBhIHNhdHVyYXRpb24gb2YgMC4wNCAtLSBhIDI1LWx1bWEgc3ByZWFkIG9uIGEgbm9taW5hbGx5IGZsYXQgZ3JleSxcbiAqIHdoaWNoIGlzIHRoZSB3aG9sZSBkaWZmZXJlbmNlIGJldHdlZW4gYSByb29mIGFuZCBhIHNoZWV0IG9mIHBsYXN0aWMuXG4gKlxuICogYGNoYWxrU2NhbGVgIC8gYGRyaWZ0U2NhbGVgIGV4aXN0IGJlY2F1c2Ugb24gYSByb29mIHRoZSB0aWxlIGlzIHNtYWxsIGFnYWluc3QgdGhlIHN1cmZhY2U6IHRoZVxuICogZGVjayByZXBlYXRzIGl0IGZvdXIgdGltZXMgYWNyb3NzLCBzbyBhbnkgbWFyayB3aWRlciB0aGFuIGEgdGVudGggb2YgaXQgZHJhd3MgYSB2aXNpYmxlIGxhdHRpY2UuXG4gKiBUaGUgQlJPQUQgY2hhbGsgem9uZXMgYmVsb25nIG9uIHRoZSBzaGVldCdzIG93biB2ZXJ0ZXggZ3JpZCwgd2hpY2ggZG9lcyBub3QgcmVwZWF0OyB3aGF0IHRoZSB0aWxlXG4gKiBvd2VzIGlzIHRoZSBmaW5lIHNwZWNrbGUgaW5zaWRlIHRoZW0uXG4gKlxuICogVGhlIHJvbGwgbWFya3MgYXJlIGRyYXduIExBU1QgYW5kIGFsb25nIHUsIHdoaWNoIG9uIHRoZSBkZWNrJ3Mgd29ybGQgVVZzIGlzIHRoZSBheGlzIHRoZSBtb2RlbGxlZFxuICogZmx1dGVzIHJ1biBhY3Jvc3MuIFRoZXkgYXJlIHdoYXQgdGhlIHRpbGUgc3RpbGwgb3dlcyB0aGUgZ2VvbWV0cnkgb25jZSB0aGUgY29ycnVnYXRpb24gaXRzZWxmIGlzXG4gKiByZWFsOiBhIHJvbGwgZm9ybWVyIGxlYXZlcyBmaW5lIGxlbmd0aHdpc2Ugc3RyaWF0aW9uIGJldHdlZW4gdGhlIGZsdXRlcywgYW5kIGBidW1wYCBwaWNrcyBpdCB1cC5cbiAqL1xuZnVuY3Rpb24gZ2FsdlRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyBbMSwgMSwgMV0sIGNoYWxrID0gby5jaGFsayA/PyBiYXNlLCBydXN0ID0gby5ydXN0ID8/IGJhc2UsIGRhcmsgPSBvLmRhcmsgPz8gYmFzZTtcbiAgICBjb25zdCB3cmFwID0gKGRyYXc6IChkeDogbnVtYmVyLCBkeTogbnVtYmVyKSA9PiB2b2lkKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgZHJhdyhkeCwgZHkpO1xuICAgIH07XG4gICAgY29uc3QgYmxvYiA9IChjOiBudW1iZXJbXSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHI6IG51bWJlciwgYTogbnVtYmVyLCByeSA9IDEsIHJvdCA9IDApID0+IHtcbiAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihjKX0sJHthfSlgKTsgZy5hZGRDb2xvclN0b3AoMC41NSwgYHJnYmEoJHtyZ2IoYyl9LCR7YSAqIDAuNX0pYCk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihjKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIsIHIgKiByeSwgcm90LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgIH07XG5cbiAgICAvLyBUaGUgYmFzZSBmaWxsIGNhcnJpZXMgdGhlIEZMVVRFIHNoYWRpbmcgd2hlbiBgZmx1dGVzYCBpcyBzZXQ6IGBmbHV0ZXNgIHJpcHBsZXMgcGVyIHRpbGUsIGluXG4gICAgLy8gcGhhc2Ugd2l0aCB0aGUgbW9kZWxsZWQgY29ycnVnYXRpb24gKGEgdHJvdWdoIGF0IHUgPSAwLCB3aGljaCBpcyB3aGVyZSB0aGUgZGVjaydzIHdvcmxkIFVWcyBwdXRcbiAgICAvLyBvbmUpLiBUaGUgZ2VvbWV0cnkgYWxyZWFkeSB0dXJucyB0aGUgZmx1dGVzIHRvIHRoZSBsaWdodCAtLSB0aGlzIGlzIHRoZSBhbWJpZW50IGRhcmtlbmluZyBpblxuICAgIC8vIHRoZSB2YWxsZXlzIGFuZCB0aGUgcm9sbC1mb3JtZXIncyBvd24gcG9saXNoIG9uIHRoZSBjcmVzdHMsIHdoaWNoIGZsYXQgc3R1ZGlvIGxpZ2h0aW5nIG9uIGFcbiAgICAvLyBzbW9vdGgtc2hhZGVkIHRyaWFuZ2xlIHdhdmUgZ2l2ZXMgbm9uZSBvZi4gT3V0IG9mIHBoYXNlIGl0IHdvdWxkIEJFQVQgd2l0aCB0aGUgZ2VvbWV0cnksIHdoaWNoXG4gICAgLy8gaXMgd2h5IHRoZSBwaXRjaCBpcyBsb2NrZWQgdG8gdGhlIGRlY2sncyBvd24gMTMgZmx1dGVzIHBlciBtZXRyZSByYXRoZXIgdGhhbiBjaG9zZW4uXG4gICAgY29uc3QgZmwgPSBvLmZsdXRlcyA/PyAwLCBmbG93ID0gby5mbHV0ZUxvdyA/PyAwLjg4O1xuICAgIGlmIChmbCA+IDApIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICAgIGNvbnN0IHQgPSAoMSAtIE1hdGguY29zKHggLyBzICogTWF0aC5QSSAqIDIgKiBmbCkpIC8gMjsgICAvLyAwIGluIHRoZSB0cm91Z2gsIDEgYXQgdGhlIGNyZXN0XG4gICAgICAgIGNvbnN0IGsgPSBmbG93ICsgKDEgLSBmbG93KSAqIHQ7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UubWFwKCh2OiBudW1iZXIpID0+IHYgKiBrKSl9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgeyBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpOyB9XG5cbiAgICAvLyAxLiB0aGUgZ3JleSBkcmlmdDogYnJvYWQsIHZlcnkgc29mdCwgdGhlIGFyZWFzIHRoZSBjaGFsayBoYXMgbm90IHJlYWNoZWRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmRyaWZ0ID8/IDE2KTsgaSsrKVxuICAgICAgYmxvYihkYXJrLCBybmQoKSAqIHMsIHJuZCgpICogcywgcyAqICgwLjE2ICsgcm5kKCkgKiAwLjMwKSAqIChvLmRyaWZ0U2NhbGUgPz8gMSksIDAuMTAgKyBybmQoKSAqIDAuMTgsIDAuNSArIHJuZCgpICogMC45LCBybmQoKSAqIE1hdGguUEkpO1xuXG4gICAgLy8gMi4gdGhlIGNoYWxrIGJsb29tOiBMQVJHRSwgc29mdCBhbmQgaXJyZWd1bGFyLCB3aXRoIGEgZ3JhbnVsYXIgZnJpbmdlLiBPbiBhIHJvb2YgaXQgaXMgdGhlXG4gICAgLy8gICAgZG9taW5hbnQgbWFyayAtLSB0aGUgcGxhdGUncyBkZWNrIGlzIG1vcmUgY2hhbGsgdGhhbiBjbGVhbiBzaGVldCAtLSBzbyBpdCBpcyBkcmF3biB3aWRlIGFuZFxuICAgIC8vICAgIGF0IGhpZ2ggYWxwaGEsIHVubGlrZSB0aGUgc3BhcnNlIGJsb29tcyBvZiBhIHBhaW50ZWQgcGFuZWwuXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5jaGFsa1BhdGNoZXMgPz8gMTQpOyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgY3IgPSBzICogKDAuMDggKyBybmQoKSAqIDAuMTgpICogKG8uY2hhbGtTY2FsZSA/PyAxKTtcbiAgICAgIGJsb2IoY2hhbGssIGN4LCBjeSwgY3IsIChvLmNoYWxrQWxwaGEgPz8gMC41NSkgKyBybmQoKSAqIDAuMzAsIDAuNSArIHJuZCgpICogMC45LCBybmQoKSAqIE1hdGguUEkpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyICogMS4zO1xuICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCwgciA9IDAuOCArIHJuZCgpICogMi40O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IoY2hhbGspfSwkezAuMiArIHJuZCgpICogMC40NX0pYDtcbiAgICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBydXN0OiBzbWFsbCB3YXJtIGZyZWNrbGUgY2x1c3RlcnMsIGVhY2ggYSBzb2Z0IHBhdGNoIHVuZGVyIGEgZmllbGQgb2Ygc3BlY2tzLCB3aXRoIGEgc2hvcnRcbiAgICAvLyAgICBydW4gYmVsb3cgaXQuIFppbmMgZG9lcyBub3Qgc2hlZXQtcnVzdCB0aGUgd2F5IGJhcmUgc3RlZWwgZG9lcyAtLSBpdCBmcmVja2xlcyBmaXJzdC5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLnJ1c3RDbHVzdGVycyA/PyAxMCk7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCBjciA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNTUpO1xuICAgICAgYmxvYihydXN0LCBjeCwgY3ksIGNyLCAwLjI1ICsgcm5kKCkgKiAwLjMwLCAwLjcgKyBybmQoKSAqIDAuNywgcm5kKCkgKiBNYXRoLlBJKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BlY2tzUGVyQ2x1c3RlciA/PyAyNik7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjcjtcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQsIHIgPSAwLjcgKyBybmQoKSAqIDEuODtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHJ1c3QpfSwkezAuMjUgKyBybmQoKSAqIDAuNDV9KWA7XG4gICAgICAgIHdyYXAoKGR4LCBkeSkgPT4geyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgICB9XG4gICAgICBpZiAocm5kKCkgPCAwLjYpIHtcbiAgICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAwNiwgbGVuID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjE2KTtcbiAgICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBjeSwgMCwgY3kgKyBsZW4pO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydXN0KX0sJHswLjE0ICsgcm5kKCkgKiAwLjE2fSlgKTsgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnVzdCl9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgICB3cmFwKChkeCkgPT4gY3R4LmZpbGxSZWN0KGN4ICsgZHggKyAocm5kKCkgLSAwLjUpICogY3IsIGN5LCB3LCBsZW4pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA0LiByb2xsIG1hcmtzOiBmaW5lIGxpbmVzIG9mIGNvbnN0YW50IHUsIGF0IGByb2xsc2AgcGVyIHRpbGUsIGFsdGVybmF0ZWx5IGEgc2hhZGUgdW5kZXIgYW5kIGFcbiAgICAvLyAgICBzaGFkZSBvdmVyIHRoZSB0b25lIHRoZXkgY3Jvc3MuIEJvdW5kIGFzIGEgYnVtcCBtYXAgdGhleSBhcmUgdGhlIHN0cmlhdGlvbiBiZXR3ZWVuIGZsdXRlcy5cbiAgICBjb25zdCByb2xscyA9IG8ucm9sbHMgPz8gNDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2xsczsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gKGkgKyAwLjM1ICsgcm5kKCkgKiAwLjMpICogcyAvIHJvbGxzLCB1cCA9IHJuZCgpIDwgMC40NTtcbiAgICAgIGNvbnN0IGMgPSB1cCA/IGNoYWxrIDogZGFyaywgYSA9IDAuMDYgKyBybmQoKSAqIDAuMTI7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSgke3JnYihjKX0sJHthfSlgOyBjdHgubGluZVdpZHRoID0gMC43ICsgcm5kKCkgKiAxLjM7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBkeCwgMCk7IGN0eC5saW5lVG8oeCArIGR4LCBzKTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgfVxuICB9KTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgLy8gQSBMSVQgc3VyZmFjZSAoYSBmbHVvcmVzY2VudCB0dWJlLCBhIGNoYXJjb2FsIGVtYmVyIGJlZCk6IGVtaXNzaXZlIGNhcnJpZXMgdGhlIGdsb3cgd2l0aG91dCBhXG4gICAgLy8gbGlnaHQgc291cmNlLCB3aGljaCB0aGUga2l0J3MgcHJvcHMgbmV2ZXIgb3duIC0tIHRoZSBob3N0IHNjZW5lIG93bnMgbGlnaHRpbmcuXG4gICAgaWYgKHMuZW1pc3NpdmUgIT09IHVuZGVmaW5lZCkgeyBtLmVtaXNzaXZlID0gbmV3IFRIUkVFLkNvbG9yKHMuZW1pc3NpdmUpOyBtLmVtaXNzaXZlSW50ZW5zaXR5ID0gcy5lbWlzc2l2ZUludGVuc2l0eSA/PyAxOyB9XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICAvLyBBbiBBTFBIQS1DVVQgcGFuZSAoY2hhaW4tbGluayBtZXNoKTogdGhlIGNhbnZhcyB0aWxlIGNhcnJpZXMgdGhlIGN1dC1vdXQgaW4gaXRzIGFscGhhIGNoYW5uZWwgYW5kXG4gICAgLy8gYWxwaGFUZXN0IGRpc2NhcmRzIHRoZSBvcGVuIGNlbGxzLCBzbyB0aGUgd2lyZSBzdGF5cyBvcGFxdWUgYW5kIHNvcnRzIGxpa2UgYSBzb2xpZC5cbiAgICBpZiAocy5hbHBoYVRlc3QgIT09IHVuZGVmaW5lZCkgeyBtLmFscGhhVGVzdCA9IHMuYWxwaGFUZXN0OyBtLnRyYW5zcGFyZW50ID0gZmFsc2U7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUm90aUdyaWRkbGVTdGFuZE1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnUm90aSBHcmlkZGxlIFN0YW5kJztcblxuICBjb25zdCBtYXRlcmlhbHMgPSBidWlsZE1hdGVyaWFscyhvcHRpb25zKTtcbiAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+ID0ge307XG4gIGNvbnN0IHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gIGNvbnN0IGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPiA9IHt9O1xuICBjb25zdCBjYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGNvbnN0IHJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcblxuICAvKipcbiAgICogQSBtYXRlcmlhbCB3aXRoIGB2ZXJ0ZXhDb2xvcnNgIHJlYWRzIGEgYGNvbG9yYCBhdHRyaWJ1dGUgb3V0IG9mIEVWRVJZIGdlb21ldHJ5IGJvdW5kIHRvIGl0LCBhbmRcbiAgICogYSBnZW9tZXRyeSB0aGF0IGhhcyBub25lIGhhbmRzIHRoZSBzaGFkZXIgYW4gdW5kZWZpbmVkIGF0dHJpYnV0ZSAtLSB3aGljaCBjb21lcyBiYWNrIGFzXG4gICAqICgwLCAwLCAwKSBhbmQgcmVuZGVycyB0aGUgbWVzaCBCTEFDSy4gVGhhdCBpcyBub3QgYSBoeXBvdGhldGljYWw6IHRoZSB1Ym9zb3QncyB3YWxsIGJvZHkgYW5kXG4gICAqIGl0cyBlaWdodCBib3VuZGFyeSBzdG9uZXMgc2hpcHBlZCBhcyBibGFjayBzaWxob3VldHRlcyBmcm9tIG9uZSB0aW50ZWQgcGxhdGZvcm0gc2hhcmluZyB0aGVpclxuICAgKiBzdG9uZSBtYXRlcmlhbCwgYW5kIHRoZSBmYWlsdXJlIGlzIHNpbGVudCBiZWNhdXNlIHRoZSB0aW50ZWQgY29tcG9uZW50IGl0c2VsZiBsb29rcyBwZXJmZWN0LlxuICAgKlxuICAgKiBBbiBJbnN0YW5jZWRNZXNoIGhpZGVzIGl0IC0tIGl0IGZhbGxzIGJhY2sgdG8gaW5zdGFuY2VDb2xvciBhbmQgY29tZXMgb3V0IHdoaXRlIC0tIHNvIHRoZSBzYW1lXG4gICAqIG1pc3Rha2Ugb24gdGhlIGNoZWRpJ3MgbmljaGUgZnJhbWVzIHJlbmRlcmVkIGNvcnJlY3RseSBhbmQgdGF1Z2h0IG5vdGhpbmcuIEd1YXJkIGl0IGhlcmUsIG9uY2UsXG4gICAqIGZvciBldmVyeSBnZW9tZXRyeTogbm8gY29sb3IgYXR0cmlidXRlIGFuZCBhIHZlcnRleENvbG9ycyBtYXRlcmlhbCBtZWFucyBmaWxsIHdpdGggd2hpdGUuXG4gICAqL1xuICBmdW5jdGlvbiBndWFyZFZlcnRleENvbG9ycyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKSB7XG4gICAgaWYgKCFtYXQgfHwgIW1hdC52ZXJ0ZXhDb2xvcnMgfHwgZ2VvLmdldEF0dHJpYnV0ZSgnY29sb3InKSkgcmV0dXJuO1xuICAgIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KG4gKiAzKS5maWxsKDEpLCAzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGQoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIC8vIHNldENvbG9yQXQgTVVMVElQTElFUyB3aXRoIG1hdGVyaWFsLmNvbG9yLCBzbyBhbiBpbnN0YW5jZWQgbWF0ZXJpYWwgY2FycnlpbmcgcGVyLWluc3RhbmNlXG4gICAgICAvLyB0b25lcyBtdXN0IGJlIHdoaXRlIG9yIGV2ZXJ5IHRvbmUgY29tZXMgb3V0IGRhcmtlbmVkIGJ5IHRoZSBiYXNlLlxuICAgICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzLmxlbmd0aDsgaSsrKSBpbnN0LnNldENvbG9yQXQoaSwgYy5zZXRIZXgoY29sc1tpXSkpO1xuICAgICAgaWYgKGluc3QuaW5zdGFuY2VDb2xvcikgaW5zdC5pbnN0YW5jZUNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5zdC5pbnN0YW5jZU1hdHJpeC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgbm9kZS5hZGQoaW5zdCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBpbnN0IGFzIHVua25vd24gYXMgVEhSRUUuTWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cbiAgLyoqIEZvdXIgaW5zdGFuY2VzIGF0IDkwLWRlZ3JlZSB5YXcgYWJvdXQgdGhlIGF4aXMgLS0gdGhlIGNvcm5lci9mYWNlIHJlcGV0aXRpb24gdGhhdCBldmVyeVxuICAgKiAgYnVpbGRpbmcgaW4gdGhpcyBzZXQgdXNlcyBmb3IgbmljaGVzLCBmaW5pYWxzLCBib3VuZGFyeSBzdG9uZXMgYW5kIGNvcm5lciBkb21lcy4gKi9cbiAgZnVuY3Rpb24gcXVhZChyYWRpdXM6IG51bWJlciwgeTogbnVtYmVyLCBwaGFzZSA9IDApOiBUSFJFRS5NYXRyaXg0W10ge1xuICAgIHJldHVybiBbMCwgMSwgMiwgM10ubWFwKChpKSA9PiB7XG4gICAgICBjb25zdCBhID0gcGhhc2UgKyBpICogTWF0aC5QSSAvIDI7XG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnNpbihhKSAqIHJhZGl1cywgeSwgTWF0aC5jb3MoYSkgKiByYWRpdXMpLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGEpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBHID0gQ09ORklHLmdlb21ldHJ5IGFzIGFueTtcblxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29tcG9uZW50c1xuICAgKiBFYWNoIGVudHJ5IG9mIENPTkZJRy5nZW9tZXRyeS5jb21wb25lbnRzIGlzIE9ORSBtZXJnZWQgZ2VvbWV0cnkgb24gT05FIG1hdGVyaWFsIC0tIG9uZSBkcmF3XG4gICAqIGNhbGwuIEV2ZXJ5IHBhcnQgaW5zaWRlIGl0IGlzIGEgdGludGVkIGJveCwgdHViZSwgY3lsaW5kZXIsIGxhdGhlIG9yIHBsYW5lOyBjb2xvdXIgZGlmZmVyZW5jZXNcbiAgICogYXJlIHZlcnRleCBjb2xvdXJzLiBgdXZgIHBpY2tzIGhvdyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHJlcGVhdHMgb3ZlciBpdC4gKi9cbiAgZm9yIChjb25zdCBjIG9mIEcuY29tcG9uZW50cyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBiIG9mIChjLmJveGVzID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgYiBvZiBtaXJyb3JYKChjLmJveGVzTWlycm9yZWQgPz8gW10pIGFzIG51bWJlcltdW10pKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgdCBvZiAoYy50dWJlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICAgIC8vIFNXRVBUIHR1YmVzOiBvbmUgbWl0cmVkIHJpbmcgcGVyIHBvaW50IGluc3RlYWQgb2YgYSBjeWxpbmRlciBwZXIgc2VnbWVudCAtLSB0aGUgb25seSB0aGluZyB0aGF0XG4gICAgLy8gc3Vydml2ZXMgYSB0aWdodCBiZW5kLiBTZWUgc3dlZXBUdWJlLlxuICAgIGZvciAoY29uc3QgdCBvZiAoYy5zd2VlcHMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHN3ZWVwVHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyAxMCwgdC5oZXgsIHQuY2FwICE9PSBmYWxzZSkpO1xuICAgIGZvciAoY29uc3Qgc3Qgb2YgKGMuc3RyYXBzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaChzdHJhcChzdC5wdHMsIHN0LncsIHN0LnQsIHN0LmFib3V0LCBzdC5oZXgpKTtcbiAgICBmb3IgKGNvbnN0IGN5IG9mIChjLmN5bHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgdGgwYC9gdGhMZW5gIG1ha2UgYSBQQVJUSUFMIGN5bGluZGVyIChhIGN1cnZlZCBzdGlja2VyIHBhdGNoIHdyYXBwZWQgb24gYSByb3VuZCBib2R5KSBhbmRcbiAgICAgIC8vIGBvcGVuYCBkcm9wcyB0aGUgY2FwczsgdGhlIHNpZGUgVVZzIHRoZW4gcnVuIDAuLjEgYWNyb3NzIHRoZSBhcmMgYW5kIHVwIHRoZSBoZWlnaHQsIHdoaWNoIGlzXG4gICAgICAvLyB3aGF0IGEgYmFrZWQgZ3JhcGhpYyB3YW50cy4gYHV2UmVwYCBtdWx0aXBsaWVzIHRoZW0gZm9yIGEgcmVwZWF0aW5nIHRpbGUuXG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoY3kucnQsIGN5LnJiLCBjeS5oLCBjeS5zZWcgPz8gMTIsIDEsIGN5Lm9wZW4gPz8gZmFsc2UsIGN5LnRoMCA/PyAwLCBjeS50aExlbiA/PyBNYXRoLlBJICogMik7XG4gICAgICBpZiAoY3kudXZSZXApIHsgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTsgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB1di5zZXRYWShpLCB1di5nZXRYKGkpICogY3kudXZSZXBbMF0sIHV2LmdldFkoaSkgKiBjeS51dlJlcFsxXSk7IH1cbiAgICAgIC8vIGBzaWRlVVZgIHBpbnMgdGhlIFNJREUgd2FsbCdzIFVWcyB0byBvbmUgdGV4ZWwgc28gYSBkaXNjIGNhcnJ5aW5nIGEgYmFrZWQgdG9wLWRvd24gaW1hZ2Ugc2hvd3NcbiAgICAgIC8vIHRoYXQgaW1hZ2Ugb24gaXRzIGNhcCBhbG9uZSwgd2l0aCBpdHMgcmltIGluIHdoYXRldmVyIHRoZSBwaW5uZWQgdGV4ZWwgaG9sZHMgKGEgYmFnIHRvbmUpLlxuICAgICAgaWYgKGN5LnNpZGVVVikgeyBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpLCBuID0gKChjeS5zZWcgPz8gMTIpICsgMSkgKiAyOyBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgdXYuc2V0WFkoaSwgY3kuc2lkZVVWWzBdLCBjeS5zaWRlVVZbMV0pOyB9XG4gICAgICAvLyBgc2NhbGVgIGJlZm9yZSB0aGUgcm90YXRpb25zOiBhbiBPVkFMIGJhc2luIG9yIGRpc2MsIHdoaWNoIGEgbGF0aGUgb3IgYSBjeWxpbmRlciBjYW5ub3RcbiAgICAgIC8vIHJldm9sdmUgb24gaXRzIG93bi4gTm9ybWFscyBhcmUgcmVjb21wdXRlZCBiZWNhdXNlIGEgbm9uLXVuaWZvcm0gc2NhbGUgc2tld3MgdGhlbS5cbiAgICAgIGlmIChjeS5zY2FsZSkgeyBnLnNjYWxlKGN5LnNjYWxlWzBdLCBjeS5zY2FsZVsxXSwgY3kuc2NhbGVbMl0pOyBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IH1cbiAgICAgIC8vIENVTE0gVVZzOiB1IGFyb3VuZCB0aGUgY2lyY3VtZmVyZW5jZSwgdiBhbG9uZyB0aGUgbGVuZ3RoLCBib3RoIGluIG1ldHJlcyAtLSBzbyB0aGUgbm9kZVxuICAgICAgLy8gcmluZ3Mgb2YgYSBjdWxtIHRpbGUgY3Jvc3MgYSBiYW1ib28gcG9sZSBhdCByZWFsIHNwYWNpbmcgaG93ZXZlciB0aGUgcG9sZSBpcyB0aGVuIHR1cm5lZC5cbiAgICAgIC8vIEl0IGhhcyB0byBoYXBwZW4gQkVGT1JFIHRoZSByb3RhdGlvbnMsIHdoaWxlIHRoZSBjeWxpbmRlciBzdGlsbCBydW5zIGFsb25nIGl0cyBvd24gWS5cbiAgICAgIGlmIChjLnV2ID09PSAnY3VsbScpIGN1bG1VVihnLCBjeS5ydCwgY3kuaCwgYy51dlNjYWxlID8/IDEsIGN5LnZPZmYgPz8gMCk7XG4gICAgICBpZiAoY3kucngpIGcucm90YXRlWChjeS5yeCk7IGlmIChjeS5yeSkgZy5yb3RhdGVZKGN5LnJ5KTsgaWYgKGN5LnJ6KSBnLnJvdGF0ZVooY3kucnopO1xuICAgICAgZy50cmFuc2xhdGUoY3kuYXRbMF0sIGN5LmF0WzFdLCBjeS5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBjeS5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBsIG9mIChjLmxhdGhlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIGByeWAgeWF3cyB0aGUgcmV2b2x1dGlvbjogYSA0LXNlZ21lbnQgbGF0aGUgdHVybmVkIDQ1IGRlZ3JlZXMgaXMgYSBjaGFtZmVyZWQgU1FVQVJFIHNsYWIgaW4gb25lXG4gICAgICAvLyBnZW9tZXRyeSAoYSBjb25lJ3MgcnViYmVyIGJhc2UpLCB3aGVyZSB0d28gc3RhY2tlZCBib3hlcyB3b3VsZCBjb3N0IHR3byBhbmQgYSBjb3BsYW5hciBwYWlyLlxuICAgICAgLy8gYGN5bFVWYCAoYSB0aWxlIHNpemUgaW4gbWV0cmVzKSB3cml0ZXMgYSBzZWFtbGVzcyBhcm91bmQtYnktdXAgVVYgZnJvbSB0aGUgbGF0aGUncyBvd24gc2VnbWVudFxuICAgICAgLy8gaW5kZXggLS0gYXRhbjIgd291bGQgZm9sZCBhIHdob2xlIHRpbGUgaW50byB0aGUgc2VhbSBjb2x1bW4gLS0gZm9yIHRyZWFkLCBmbHV0aW5nIGFuZCBncmFpbi5cbiAgICAgIGNvbnN0IGcgPSBsYXRoZShsLnB0cywgbC5zZWcgPz8gMTIsIDAsIGwuc2hhcnAgIT09IGZhbHNlLCBsLndlbGRTZWFtID09PSB0cnVlKTtcbiAgICAgIGlmIChsLmN5bFVWKSB7IGNvbnN0IGN1ID0gQXJyYXkuaXNBcnJheShsLmN5bFVWKSA/IGwuY3lsVVYgOiBbbC5jeWxVViwgbC5jeWxVViwgMF07IGxhdGhlVVYoZywgKGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50IC8gKChsLnNlZyA/PyAxMikgKyAxKSkgfCAwLCBsLnNlZyA/PyAxMiwgY3VbMF0sIGN1WzFdLCBjdVsyXSA/PyAwKTsgfVxuICAgICAgaWYgKGwuc2NhbGUpIHsgZy5zY2FsZShsLnNjYWxlWzBdLCBsLnNjYWxlWzFdLCBsLnNjYWxlWzJdKTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyB9XG4gICAgICAvLyBgcnlgIHlhd3MgdGhlIHJldm9sdXRpb24gKGFib3ZlKS4gYHJ4YC9gcnpgIFRJTFQgdGhlIGF4aXMgaXRzZWxmLCB3aGljaCBpcyB3aGF0IGEgV0FMTCBvclxuICAgICAgLy8gY2VpbGluZyBmaXR0aW5nIG5lZWRzOiBhIGxhdGhlIHJldm9sdmVzIGFib3V0ICtZLCBhbmQgYSBidWxraGVhZCBsYW1wJ3MgYXhpcyBpcyB0aGUgd2FsbFxuICAgICAgLy8gbm9ybWFsLCBzbyBpdHMgYmFja3BsYXRlIGFuZCBkb21lIGFyZSBhdXRob3JlZCBhYm91dCBZIGFuZCBsYWlkIGRvd24gd2l0aCByeCA9IFBJLzIuXG4gICAgICBpZiAobC5yeSkgZy5yb3RhdGVZKGwucnkpOyBpZiAobC5yeCkgZy5yb3RhdGVYKGwucngpOyBpZiAobC5yeikgZy5yb3RhdGVaKGwucnopO1xuICAgICAgZy50cmFuc2xhdGUobC5hdFswXSwgbC5hdFsxXSwgbC5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBsLmhleCkpO1xuICAgIH1cbiAgICAvLyBSSUJCRUQgRE9NRVM6IGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIGNhcnJ5aW5nIHZlcnRpY2FsIEZMVVRFUywgYXMgYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWBcbiAgICAvLyBzYW1wbGVkIHBlciBzZWN0b3IgcmF0aGVyIHRoYW4gYSBsYXRoZS4gQSBwcmVzc2VkLWdsYXNzIGxhbXAgZG9tZSBpcyBmbHV0ZWQsIGFuZCBhIHNtb290aCBvbmVcbiAgICAvLyByZWFkcyBhcyBhIHBsYXN0aWMgYnViYmxlIC0tIHRoZSByaWJzIGFyZSBtb3N0IG9mIHdoYXQgc2F5cyBgZ2xhc3NgIGF0IHByb3AgZGlzdGFuY2UuIEF1dGhvcmVkXG4gICAgLy8gYWJvdXQgK1kgbGlrZSBhIGxhdGhlLCBzbyBhIHdhbGwgZml0dGluZyBsYXlzIGl0IGRvd24gd2l0aCByeC5cbiAgICBmb3IgKGNvbnN0IGQgb2YgKGMuZG9tZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gcmliYmVkRG9tZShkLnB0cywgZC5yaWJzLCBkLmFtcCwgZC5zZWcgPz8gMjQsIGQudmFsbGV5KTtcbiAgICAgIGlmIChkLnJ5KSBnLnJvdGF0ZVkoZC5yeSk7IGlmIChkLnJ4KSBnLnJvdGF0ZVgoZC5yeCk7IGlmIChkLnJ6KSBnLnJvdGF0ZVooZC5yeik7XG4gICAgICBpZiAoZC5hdCkgZy50cmFuc2xhdGUoZC5hdFswXSwgZC5hdFsxXSwgZC5hdFsyXSk7XG4gICAgICAvLyBBIGZsdXRlZCBkb21lIHdyaXRlcyBpdHMgT1dOIGNvbG91ciBhdHRyaWJ1dGUgKHRoZSBjcmVzdC10by12YWxsZXkgbXVsdGlwbGllciksIHNvIHRpbnRHZW9cbiAgICAgIC8vIHdvdWxkIG92ZXJ3cml0ZSB0aGUgZmx1dGUgc3RyaXBpbmcgd2l0aCBvbmUgZmxhdCBoZXggLS0gdGhlIHNhbWUgdHJhcCBgc2hlZXRgJ3MgaGV4VW5kZXJcbiAgICAgIC8vIGZlbGwgaW50by4gTXVsdGlwbHkgdGhlIHRvbmUgSU5UTyB0aGUgbXVsdGlwbGllciBpbnN0ZWFkLCBzbyB0aGUgZG9tZSBjYXJyaWVzIGJvdGguXG4gICAgICBpZiAoZC52YWxsZXkgJiYgZC5oZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjb2wgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgICAgIGNvbnN0IHQgPSBuZXcgVEhSRUUuQ29sb3IoZC5oZXgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbC5jb3VudDsgaSsrKSBjb2wuc2V0WFlaKGksIGNvbC5nZXRYKGkpICogdC5yLCBjb2wuZ2V0WShpKSAqIHQuZywgY29sLmdldFooaSkgKiB0LmIpO1xuICAgICAgICBncy5wdXNoKGcpO1xuICAgICAgfSBlbHNlIGdzLnB1c2goZC52YWxsZXkgPyBnIDogdGludEdlbyhnLCBkLmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHAgb2YgKGMucGxhbmVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBQQU5FOiBhIHNpbmdsZSBxdWFkIGluIHRoZSBYWSBwbGFuZSBhdCBkZXB0aCB6LCBkb3VibGUtc2lkZWQgYnkgaXRzIG1hdGVyaWFsLiBJdHMgVVZzIHJ1blxuICAgICAgLy8gMC4uMSBhY3Jvc3MgdGhlIHBhbmUgc28gYW4gYWxwaGEtY3V0IHRpbGUgcmVwZWF0cyBgcmVwYCB0aW1lcyBhY3Jvc3MgYW5kIGRvd24uXG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkocC53LCBwLmgsIDEsIDEpO1xuICAgICAgZy50cmFuc2xhdGUocC5hdFswXSwgcC5hdFsxXSwgcC5hdFsyXSk7XG4gICAgICBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB1di5zZXRYWShpLCB1di5nZXRYKGkpICogKHAucmVwPy5bMF0gPz8gMSksIHV2LmdldFkoaSkgKiAocC5yZXA/LlsxXSA/PyAxKSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgcC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBlIG9mIChjLmV4dHJ1ZGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBwcm9maWxlIGluIHRoZSBYWSBwbGFuZSBleHRydWRlZCBhbG9uZyBaIGJldHdlZW4gejAgYW5kIHoxIC0tIGEgc2xhYiB3aXRoIGEgbW91bGRlZCBlZGdlLFxuICAgICAgLy8gYSBweXJhbWlkIGNhcCBhcyBhIHN0ZXBwZWQgcHJvZmlsZSwgYSBzcGVhciBmaW5pYWwuXG4gICAgICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgc2hhcGUubW92ZVRvKGUucG9seVswXVswXSwgZS5wb2x5WzBdWzFdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZS5wb2x5Lmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8oZS5wb2x5W2ldWzBdLCBlLnBvbHlbaV1bMV0pO1xuICAgICAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gICAgICBmb3IgKGNvbnN0IGggb2YgKGUuaG9sZXMgPz8gW10pIGFzIG51bWJlcltdW11bXSkge1xuICAgICAgICBjb25zdCBocCA9IG5ldyBUSFJFRS5QYXRoKCk7IGhwLm1vdmVUbyhoWzBdWzBdLCBoWzBdWzFdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBoLmxlbmd0aDsgaSsrKSBocC5saW5lVG8oaFtpXVswXSwgaFtpXVsxXSk7XG4gICAgICAgIGhwLmNsb3NlUGF0aCgpOyBzaGFwZS5ob2xlcy5wdXNoKGhwKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGcgPSBleHRydWRlQWxvbmdaKHNoYXBlLCBlLnowLCBlLnoxKTtcbiAgICAgIGlmIChlLnJ4KSBnLnJvdGF0ZVgoZS5yeCk7XG4gICAgICBpZiAoZS5yeSkgZy5yb3RhdGVZKGUucnkpO1xuICAgICAgaWYgKGUucnopIGcucm90YXRlWihlLnJ6KTtcbiAgICAgIGlmIChlLmF0KSBnLnRyYW5zbGF0ZShlLmF0WzBdLCBlLmF0WzFdLCBlLmF0WzJdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBlLmhleCkpO1xuICAgIH1cbiAgICAvLyBFTExJUFNPSURTOiBbaGV4LCBjeCwgY3ksIGN6LCByeCwgcnksIHJ6LCByb3RYPywgcm90WT8sIHJvdFo/XSAtLSBhIHVuaXQgc3BoZXJlIHNjYWxlZCBwZXIgYXhpc1xuICAgIC8vIGFuZCB0dXJuZWQgYWJvdXQgaXRzIG93biBjZW50cmUuIEEgc2t1bGwgZG9tZSwgYSBwYXcsIGEgbm9zZSBwYWQ6IHRoZSByb3VuZGVkIHNvbGlkcyBvZiBhblxuICAgIC8vIGFuaW1hbCB0aGF0IGEgYm94IG9yIGEgc3RhdGlvbiB0dWJlIGNhbm5vdCBnaXZlLCBzaGFyaW5nIHNtb290aCBub3JtYWxzIHRocm91Z2ggdGhlIG1lcmdlLlxuICAgIGZvciAoY29uc3QgZSBvZiAoYy5lbGxpcHNvaWRzID8/IFtdKSBhcyBudW1iZXJbXVtdKSB7XG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEsIGVbMTBdID8/IDE2LCBlWzExXSA/PyAxMik7XG4gICAgICBnLnNjYWxlKGVbNF0sIGVbNV0sIGVbNl0pO1xuICAgICAgaWYgKGVbN10pIGcucm90YXRlWChlWzddKTsgaWYgKGVbOF0pIGcucm90YXRlWShlWzhdKTsgaWYgKGVbOV0pIGcucm90YXRlWihlWzldKTtcbiAgICAgIGcudHJhbnNsYXRlKGVbMV0sIGVbMl0sIGVbM10pO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIGVbMF0pKTtcbiAgICB9XG4gICAgLy8gRlJVU1RBOiBbaGV4LCBjeCwgeUJvdHRvbSwgY3osIHcwLCBkMCwgdzEsIGQxLCBoXSAtLSBhIGJveCB3aG9zZSBmb290cHJpbnQgY2hhbmdlcyBmcm9tICh3MCwgZDApIGF0XG4gICAgLy8gdGhlIGJvdHRvbSB0byAodzEsIGQxKSBhdCB0aGUgdG9wOiB0aGUgdGFwZXJlZCBib2R5IG9mIGEgd2hlZWxpZSBiaW4gb3IgYSBzdGVlbCBjb250YWluZXIuXG4gICAgZm9yIChjb25zdCBmIG9mIChjLmZydXN0YSA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKGZydXN0dW0oZi5zbGljZSgxKSksIGZbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgKGMuc3Bpa2VzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNwaWtlKHMuYXQsIHMudywgcy5oKSwgcy5oZXgpKTtcbiAgICAvLyBEUkFQRUQgU0hFRVRTOiBhIHRhcnAgb3IgYXduaW5nIGFzIGEgaGVpZ2h0IGdyaWQgd2l0aCB0aGlja25lc3MgLS0gYSByaWRnZSwgdGhlIHNhZyBiZXR3ZWVuXG4gICAgLy8gaXRzIHBvbGVzIGFuZCB0aGUgZHJvb3Agb2YgaXRzIGZyZWUgZWRnZXMgYXJlIG51bWJlcnMgaW4gdGhlIGdyaWQsIGNvbXB1dGVkIGF0IGVtaXQgdGltZS5cbiAgICBmb3IgKGNvbnN0IHMgb2YgKGMuc2hlZXRzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBzaGVldCBnaXZlbiBgaGV4VW5kZXJgIGhhcyBhbHJlYWR5IHdyaXR0ZW4gaXRzIE9XTiBjb2xvdXIgYXR0cmlidXRlLCBvbmUgdG9uZSBmb3IgdGhlIHRvcFxuICAgICAgLy8gZ3JpZCBhbmQgYW5vdGhlciBmb3IgdGhlIHVuZGVyc2lkZSBhbmQgcmltLiB0aW50R2VvIHdvdWxkIG92ZXJ3cml0ZSB0aGUgbG90IHdpdGggYSBzaW5nbGVcbiAgICAgIC8vIGhleCAtLSB3aGljaCBpcyB3aGF0IHNoaXBwZWQgdGhlIHRhcnBhdWxpbiBiYXkncyBibHVlLW92ZXItb3JhbmdlIHRhcnAgYXMgYSB3aGl0ZSBzYWlsLlxuICAgICAgY29uc3QgZyA9IHNoZWV0KHMpO1xuICAgICAgZ3MucHVzaChzLmhleFVuZGVyICE9PSB1bmRlZmluZWQgPyBnIDogdGludEdlbyhnLCBzLmhleCkpO1xuICAgIH1cbiAgICAvLyBPUkdBTklDIHN0YXRpb24gdHViZXM6IFt6LCBjeCwgY3ksIHJ4LCByeV0gc3RhdGlvbnMgc3dlcHQgYWxvbmcgWiAtLSB0aGUgb25seSBzb2Z0IGZvcm0gaW4gdGhlXG4gICAgLy8ga2l0LCBhIGx5aW5nIGFuaW1hbC4gTGl0IHNtb290aCBieSB0aGUgaGVscGVyJ3Mgc2hhcmVkIHJpbmcgdmVydGljZXMuXG4gICAgZm9yIChjb25zdCB0IG9mIChjLnR1YmVzQWxvbmcgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gdHViZUFsb25nKHQuc3RhdGlvbnMsIHQuc2VnID8/IDEyKTtcbiAgICAgIGlmICh0LnJ5KSBnLnJvdGF0ZVkodC5yeSk7IGlmICh0LmF0KSBnLnRyYW5zbGF0ZSh0LmF0WzBdLCB0LmF0WzFdLCB0LmF0WzJdKTtcbiAgICAgIC8vIGBoZXhlc2AgLS0gb25lIGNvbG91ciBwZXIgU1RBVElPTiwgYmxlbmRlZCBhbG9uZyB0aGUgc3dlZXAgLS0gaXMgaG93IGEgY29hdCBwYXR0ZXJuIHRoYXQgcnVuc1xuICAgICAgLy8gYWxvbmcgdGhlIGJvZHkgKGEgd2hpdGUgY29sbGFyIGJldHdlZW4gYSB0YW4gc2t1bGwgYW5kIGEgdGFuIHNhZGRsZSkgaXMgY2FycmllZCBvbiBhIHNpbmdsZVxuICAgICAgLy8gbWVyZ2VkIG1lc2guIFRoZSBjb21wb25lbnQncyBheGlzIHRpbnQgdGhlbiBtdWx0aXBsaWVzIHRoZSBkb3JzYWwtdG8tdmVudHJhbCBmYWRlIGludG8gaXQsXG4gICAgICAvLyBhbmQgbmVpdGhlciBjb3N0cyBhIG1hdGVyaWFsLiBBIHNpbmdsZSBgaGV4YCBzdGF5cyB0aGUgZGVmYXVsdC5cbiAgICAgIGlmICh0LmhleGVzKSB7XG4gICAgICAgIC8vIEEgc3RhdGlvbiBlbnRyeSBtYXkgYmUgb25lIGhleCwgb3IgYSBQQUlSIFtkb3JzYWwsIHZlbnRyYWxdIGJsZW5kZWQgYXJvdW5kIHRoZSByaW5nIGJ5IHRoZVxuICAgICAgICAvLyBzYW1lIHNpbih0aGV0YSkgdHViZUFsb25nIHN3ZXB0IHRoZSBzZWN0aW9uIHdpdGggLS0gc28gdGhlIGNvYXQgcnVucyBib3RoIEFMT05HIHRoZSBib2R5XG4gICAgICAgIC8vIChhIHdoaXRlIGNvbGxhciBiZXR3ZWVuIGEgdGFuIHNrdWxsIGFuZCBhIHRhbiBzYWRkbGUpIGFuZCBBQ1JPU1MgaXQgKHRoZSBzYWRkbGUgZ2l2aW5nIHdheVxuICAgICAgICAvLyB0byBhIGR1c3R5IGZsYW5rIGFuZCBhIHBhbGUgYmVsbHkpLiBBbiBheGlzIHRpbnQgY2Fubm90IGRvIHRoZSBzZWNvbmQgaGFsZjogb24gYW4gYW5pbWFsXG4gICAgICAgIC8vIGx5aW5nIG9uIGl0cyBzaWRlIHRoZSBkb3JzYWwtdG8tdmVudHJhbCBheGlzIGlzIGhvcml6b250YWwsIHNvIGEgYmFuZCBpbiB4IGN1dHMgdGhlIGNyb3duXG4gICAgICAgIC8vIG9mIHRoZSBzd2VlcCBpbiBoYWxmLCBhbmQgYSBNVUxUSVBMWSBjYW4gb25seSBldmVyIGRhcmtlbiAtLSBpdCBjYW5ub3QgdGFrZSBhIHdhcm0gdGFuIHRvXG4gICAgICAgIC8vIGEgY29vbGVyIGdyZXkuIFR3byBjb2xvdXJzIHBlciBzdGF0aW9uLCBvbmUgYXR0cmlidXRlLCBzdGlsbCBvbmUgZHJhdyBjYWxsLlxuICAgICAgICBjb25zdCBzZWcgPSB0LnNlZyA/PyAxMiwgbiA9IHQuc3RhdGlvbnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHNlZyAqIG4gKiAzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBlID0gdC5oZXhlc1tNYXRoLm1pbih0LmhleGVzLmxlbmd0aCAtIDEsIGkpXTtcbiAgICAgICAgICBjb25zdCBkID0gbmV3IFRIUkVFLkNvbG9yKEFycmF5LmlzQXJyYXkoZSkgPyBlWzBdIDogZSksIHYgPSBuZXcgVEhSRUUuQ29sb3IoQXJyYXkuaXNBcnJheShlKSA/IGVbMV0gOiBlKTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBmID0gKE1hdGguc2luKGogKiBNYXRoLlBJICogMiAvIHNlZykgKyAxKSAvIDI7XG4gICAgICAgICAgICBjb25zdCBrID0gKGkgKiBzZWcgKyBqKSAqIDM7XG4gICAgICAgICAgICBjb2xba10gPSBkLnIgKyAodi5yIC0gZC5yKSAqIGY7IGNvbFtrICsgMV0gPSBkLmcgKyAodi5nIC0gZC5nKSAqIGY7IGNvbFtrICsgMl0gPSBkLmIgKyAodi5iIC0gZC5iKSAqIGY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gICAgICAgIGdzLnB1c2goZyk7XG4gICAgICB9IGVsc2UgZ3MucHVzaCh0aW50R2VvKGcsIHQuaGV4ID8/IDB4ZmZmZmZmKSk7XG4gICAgfVxuICAgIGxldCBnID0gbWVyZ2VHZW9zKGdzKTtcbiAgICAvLyBhIHBlci1jb21wb25lbnQgc2NhbGUsIGFwcGxpZWQgdG8gdGhlIG1lcmdlIGJlZm9yZSB0aW50aW5nOiBob3cgYSBseWluZyBhbmltYWwgYXV0aG9yZWQgYXRcbiAgICAvLyBpdHMgb3duIHByb3BvcnRpb25zIGlzIGZpdHRlZCBpbnRvIHRoZSBkZWNsYXJlZCBlbnZlbG9wZSB3aXRob3V0IHJlLXJlYWRpbmcgZXZlcnkgc3RhdGlvblxuICAgIGlmIChjLnNjYWxlKSBnLnNjYWxlKGMuc2NhbGVbMF0sIGMuc2NhbGVbMV0sIGMuc2NhbGVbMl0pO1xuICAgIC8vIEFYSVMgVElOVDogYSBwZXItdmVydGV4IGJsZW5kIGZyb20gYzAgYXQgYGZyb21gIHRvIGMxIGF0IGB0b2AgYWxvbmcgb25lIGF4aXMsIG92ZXIgdGhlIHdob2xlXG4gICAgLy8gbWVyZ2UgLS0gYSB0YW4gYmFjayBmYWRpbmcgdG8gYSB3aGl0ZSBiZWxseSBjb3N0cyBhbiBhdHRyaWJ1dGUsIG5vdCBhIHNlY29uZCBtYXRlcmlhbC4gQXBwbGllZFxuICAgIC8vIGluIExJTkVBUiBzcGFjZSB0aHJvdWdoIFRIUkVFLkNvbG9yLiBga2VlcGAgbXVsdGlwbGllcyB0aGUgYmxlbmQgaW50byB0aGUgZXhpc3RpbmcgdGludCBpbnN0ZWFkXG4gICAgLy8gb2YgcmVwbGFjaW5nIGl0LCBzbyBhIGRhcmsgbm9zZSBzdGF5cyBkYXJrLlxuICAgIGlmIChjLnRpbnQpIHtcbiAgICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuQ29sb3IoYy50aW50LmMwKSwgYiA9IG5ldyBUSFJFRS5Db2xvcihjLnRpbnQuYzEpO1xuICAgICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpOyBsZXQgY29sID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlIHwgbnVsbDtcbiAgICAgIGlmICghY29sKSB7IGNvbCA9IG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMykuZmlsbCgxKSwgMyk7IGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIGNvbCk7IH1cbiAgICAgIGNvbnN0IGF4ID0gYy50aW50LmF4aXMgPT09ICd4JyA/IDAgOiBjLnRpbnQuYXhpcyA9PT0gJ3knID8gMSA6IDI7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCB2ID0gYXggPT09IDAgPyBwLmdldFgoaSkgOiBheCA9PT0gMSA/IHAuZ2V0WShpKSA6IHAuZ2V0WihpKTtcbiAgICAgICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh2IC0gYy50aW50LmZyb20pIC8gKGMudGludC50byAtIGMudGludC5mcm9tKSkpO1xuICAgICAgICBjb25zdCByID0gYS5yICsgKGIuciAtIGEucikgKiB0LCBnZyA9IGEuZyArIChiLmcgLSBhLmcpICogdCwgYmIgPSBhLmIgKyAoYi5iIC0gYS5iKSAqIHQ7XG4gICAgICAgIGlmIChjLnRpbnQua2VlcCkgY29sLnNldFhZWihpLCBjb2wuZ2V0WChpKSAqIHIsIGNvbC5nZXRZKGkpICogZ2csIGNvbC5nZXRaKGkpICogYmIpOyBlbHNlIGNvbC5zZXRYWVooaSwgciwgZ2csIGJiKTtcbiAgICAgIH1cbiAgICAgIGNvbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjLnV2ID09PSAnd29ybGQnKSBnID0gd29ybGRVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdoZWlnaHQnKSBnID0gaGVpZ2h0VVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAncGFuZWwnKSBnID0gcGFuZWxVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdwYW5lbC1yb3QnKSBnID0gcGFuZWxVVihnLCBjLnV2U2NhbGUgPz8gMSwgdHJ1ZSk7XG4gICAgLy8gJ2N1bG0nIGlzIGRlbGliZXJhdGVseSBhYnNlbnQgaGVyZTogaXQgaXMgd3JpdHRlbiBwZXIgY3lsaW5kZXIgYWJvdmUsIGJlZm9yZSB0aGUgcm90YXRpb25zLFxuICAgIC8vIGFuZCBhIHdob2xlLW1lcmdlIHBhc3Mgd291bGQgZmxhdHRlbiBpdCBiYWNrIHRvIHRoZSBjeWxpbmRlcidzIGRlZmF1bHQgMC4uMSB3cmFwLlxuICAgIGFkZChjLmlkLCBjLm5hbWUsIGcsIGMubWF0ZXJpYWwpO1xuICAgIGlmIChjLmNvbGxpZGVyKSBjb2xsaWRlcnNbYy5pZF0gPSBjLmNvbGxpZGVyO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByZXBldGl0aW9uIHN5c3RlbXNcbiAgICogUGlja2V0cywgc2xhdHMsIGxhdHRpY2Ugc3RyaXBzOiBvbmUgZ2VvbWV0cnksIG9uZSBJbnN0YW5jZWRNZXNoLCBvbmUgZHJhdyBjYWxsLiAqL1xuICBmb3IgKGNvbnN0IHIgb2YgKEcuaW5zdGFuY2VkID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBiIG9mIChyLmJveGVzID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgcyBvZiAoci5zcGlrZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHRpbnRHZW8oc3Bpa2Uocy5hdCwgcy53LCBzLmgpLCBzLmhleCkpO1xuICAgIGZvciAoY29uc3QgZiBvZiAoci5mcnVzdGEgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhmcnVzdHVtKGYuc2xpY2UoMSkpLCBmWzBdKSk7XG4gICAgZm9yIChjb25zdCBjeSBvZiAoci5jeWxzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gYHRoMGAvYHRoTGVuYCBjdXQgYSBQQVJUSUFMIGN5bGluZGVyIHRoZSBzYW1lIHdheSB0aGUgY29tcG9uZW50IGJyYW5jaCBkb2VzOiBhIHNwbGl0IGJhbWJvb1xuICAgICAgLy8gY3VsbSBpcyBhIGhhbGYgcGlwZSwgdGhMZW4gPSBQSSwgYG9wZW5gIHNvIGl0IGlzIGEgc2hlbGwgd2l0aCBubyBkaXNjcyBhdCBpdHMgZW5kcy4gVGhlXG4gICAgICAvLyBtYXRlcmlhbCBjYXJyaWVzIGRvdWJsZVNpZGVkLCBiZWNhdXNlIGEgaG9sbG93LXVwIGN1bG0gaXMgc2VlbiBmcm9tIHRoZSBpbnNpZGUuXG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoY3kucnQsIGN5LnJiLCBjeS5oLCBjeS5zZWcgPz8gMTIsIDEsIGN5Lm9wZW4gPz8gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3kudGgwID8/IDAsIGN5LnRoTGVuID8/IE1hdGguUEkgKiAyKTtcbiAgICAgIGlmIChyLnV2ID09PSAnY3VsbScpIGN1bG1VVihnLCBjeS5ydCwgY3kuaCwgci51dlNjYWxlID8/IDEsIGN5LnZPZmYgPz8gMCk7XG4gICAgICBpZiAoY3kucngpIGcucm90YXRlWChjeS5yeCk7IGlmIChjeS5yeSkgZy5yb3RhdGVZKGN5LnJ5KTsgaWYgKGN5LnJ6KSBnLnJvdGF0ZVooY3kucnopO1xuICAgICAgZy50cmFuc2xhdGUoY3kuYXRbMF0sIGN5LmF0WzFdLCBjeS5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBjeS5oZXgpKTtcbiAgICB9XG4gICAgLy8gQW4gT1BFTiB3aGVlbCAtLSB0eXJlIGFuZCByaW0gYXMgY2xvc2VkIHJpbmcgbGF0aGVzLCBhIGh1YiwgYW5kIHdpcmUgc3Bva2VzIC0tIGZvciBhIGJpY3ljbGVcbiAgICAvLyB3aG9zZSB3aGVlbHMgcmVhZCBhcyBiaWN5Y2xlIHdoZWVscyByYXRoZXIgdGhhbiBkaXNjcy4gTGF0aGVzIHJldm9sdmUgYWJvdXQgWSAoYHJ4YCBsYXlzIHRoZVxuICAgIC8vIGF4bGUgd2hlcmUgdGhlIHBsYWNlbWVudCB3YW50cyBpdCk7IGBzcG9rZXNgIHJhZGlhdGUgYWJvdXQgWCBieSB0aGUgaGVscGVyJ3MgY29udmVudGlvbiwgc28gYW5cbiAgICAvLyBheGxlIG9uIFogdGFrZXMgYHJ5OiBQSS8yYC5cbiAgICBmb3IgKGNvbnN0IGwgb2YgKHIubGF0aGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IGxhdGhlKGwucHRzLCBsLnNlZyA/PyAxMiwgMCwgbC5zaGFycCAhPT0gZmFsc2UsIGwud2VsZFNlYW0gPT09IHRydWUpO1xuICAgICAgaWYgKGwucngpIGcucm90YXRlWChsLnJ4KTsgaWYgKGwucnkpIGcucm90YXRlWShsLnJ5KTsgaWYgKGwucnopIGcucm90YXRlWihsLnJ6KTtcbiAgICAgIGlmIChsLmF0KSBnLnRyYW5zbGF0ZShsLmF0WzBdLCBsLmF0WzFdLCBsLmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGwuaGV4KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgcyBvZiAoci5zcG9rZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gc3Bva2VzKHMuckh1Yiwgcy5yUmltLCBzLmhhbGZXLCBzLm4sIHMuaGV4LCBzLnQgPz8gMC4wMDYsIHMucHJpc20gPz8gZmFsc2UpO1xuICAgICAgaWYgKHMucngpIGcucm90YXRlWChzLnJ4KTsgaWYgKHMucnkpIGcucm90YXRlWShzLnJ5KTsgaWYgKHMucnopIGcucm90YXRlWihzLnJ6KTtcbiAgICAgIGlmIChzLmF0KSBnLnRyYW5zbGF0ZShzLmF0WzBdLCBzLmF0WzFdLCBzLmF0WzJdKTsgZ3MucHVzaChnKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB0IG9mIChyLnR1YmVzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0dWJlKHQucHRzLCB0LnIsIHQuc2VnID8/IDgsIHQuaGV4KSk7XG4gICAgbGV0IGcgPSBtZXJnZUdlb3MoZ3MpO1xuICAgIGlmIChyLnV2ID09PSAnd29ybGQnKSBnID0gd29ybGRVVihnLCByLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKHIudXYgPT09ICdoZWlnaHQnKSBnID0gaGVpZ2h0VVYoZywgci51dlNjYWxlID8/IDEpO1xuICAgIC8vICdjdWxtJyBhZ2FpbiB3cml0dGVuIHBlciBjeWxpbmRlciBhYm92ZSwgYmVmb3JlIHRoZSByb3RhdGlvbnMuXG4gICAgY29uc3QgbWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gICAgZm9yIChjb25zdCBwIG9mIHIucGxhY2VtZW50cyBhcyBudW1iZXJbXVtdKSB7XG4gICAgICBtYXRzLnB1c2gobmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhwWzBdLCBwWzFdLCBwWzJdKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tRXVsZXIobmV3IFRIUkVFLkV1bGVyKHBbM10gPz8gMCwgcFs0XSA/PyAwLCBwWzVdID8/IDApKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpKTtcbiAgICB9XG4gICAgYWRkSW5zdChyLmlkLCByLm5hbWUsIGcsIHIubWF0ZXJpYWwsIG1hdHMsIHIuY29sb3JzKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzZXMgKi9cbiAgZm9yIChjb25zdCB0IG9mIChDT05GSUcudGlsZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbWF0ID0gbWF0ZXJpYWxzW3QubWF0ZXJpYWxdO1xuICAgIGlmICghbWF0KSBjb250aW51ZTtcbiAgICAvLyBBIEJBS0VEIGdyYXBoaWMgKGEgcHJpbnRlZCBzaWduIGZhY2UpOiBvbmUgV2ViUCBkYXRhIFVSSSBjb21wb3NlZCBvZmZsaW5lIGZyb20gdGhlIHBsYXRlJ3Mgb3duXG4gICAgLy8gcHJpbnRlZCByZWdpb24gYW5kIHZlY3RvciBtYXJrcywgbG9hZGVkIHRocm91Z2ggVGV4dHVyZUxvYWRlci4gQXNzaWduZWQgc3luY2hyb25vdXNseSBzbyB0aGVcbiAgICAvLyBoYXJuZXNzIHdhaXRzIG9uIHRoZSBkZWNvZGUuIEl0IGJlYXRzIGZpbGxUZXh0LCB3aGljaCBkcmF3cyBhIGRpZmZlcmVudCB3b3JkbWFyayBwZXIgbWFjaGluZS5cbiAgICBpZiAodC5raW5kID09PSAnYmFrZWQnKSB7XG4gICAgICAvLyBVbmRlciBwbGFpbiBOb2RlICh0aGUgY29wbGFuYXIgY2hlY2ssIHRoZSBydW50aW1lIHByb2JlKSB0aGVyZSBpcyBubyBkb2N1bWVudCBmb3IgSW1hZ2VMb2FkZXI6XG4gICAgICAvLyBrZWVwIHRoZSB3aGl0ZSBmYWxsYmFjayByYXRoZXIgdGhhbiB0aHJvdywgZXhhY3RseSBhcyB0aGUgcmV0YWlsIGdsYXppbmcgZG9lcy5cbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGJha2VkID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKHQudXJpKTtcbiAgICAgIGNvbnN0IHNyZ2IgPSAoVEhSRUUgYXMgYW55KS5TUkdCQ29sb3JTcGFjZTtcbiAgICAgIGlmIChzcmdiKSBiYWtlZC5jb2xvclNwYWNlID0gc3JnYjtcbiAgICAgIGJha2VkLmFuaXNvdHJvcHkgPSA0O1xuICAgICAgbWF0Lm1hcCA9IGJha2VkOyBtYXQubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGxldCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgICBpZiAodC5raW5kID09PSAnbXVkJykgdGV4ID0gbXVkVGlsZSh0LnNpemUgPz8gNTEyLCB0LmJhc2UsIHQuc2VlZCA/PyAxLCB0LmNvdmVyYWdlID8/IDAuMzMpO1xuICAgIGlmICh0LmtpbmQgPT09ICdkdXN0JykgdGV4ID0gZHVzdFRpbGUodC5zaXplID8/IDUxMiwgdC5kdXN0LCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMwKTtcbiAgICBpZiAodC5raW5kID09PSAncGxhbmsnKSB0ZXggPSBwbGFua1RpbGUodC5zaXplID8/IDUxMiwgdC5ib2FyZHMgPz8gNiwgdC5zZWVkID8/IDUpO1xuICAgIGlmICh0LmtpbmQgPT09ICdydXN0JykgdGV4ID0gcnVzdFRpbGUodC5zaXplID8/IDUxMiwgdC5yYXRpbywgdC5zZWVkID8/IDcsIHQuZGVuc2l0eSA/PyA5MCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BhaW50JykgdGV4ID0gcGFpbnRUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAxNywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2NvcnJ1Z2F0aW9uJykgdGV4ID0gY29ycnVnYXRpb25UaWxlKHQuc2l6ZSA/PyA1MTIsIHQucGl0Y2ggPz8gMTIsIHQubG93ID8/IDAuNywgdC5zZWVkID8/IDMpO1xuICAgIGlmICh0LmtpbmQgPT09ICdncmltZScpIHRleCA9IGdyaW1lVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd6aW5jJykgdGV4ID0gemluY1RpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDE5LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnZnVyJykgdGV4ID0gZnVyVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdjaGFpbmxpbmsnKSB0ZXggPSBjaGFpbmxpbmtUaWxlKHQuc2l6ZSA/PyAyNTYsIHQud2lyZSA/PyAwLjA5LCB0LnNlZWQgPz8gNCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2JhbWJvbycpIHRleCA9IGJhbWJvb1RpbGUodC5zaXplID8/IDUxMiwgdC5zdHJpcHMgPz8gMTAsIHQuc2VlZCA/PyA2KTtcbiAgICBpZiAodC5raW5kID09PSAnc3RyaXBlcycpIHRleCA9IHN0cmlwZVRpbGUodC5zaXplID8/IDI1NiwgdC5iYW5kcyA/PyA4LCB0LmEsIHQuYiwgdC5zZWVkID8/IDksIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdwb3N0ZXInKSB0ZXggPSBwb3N0ZXJUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA4LCB0LmxpbmVzID8/IFtdKTtcbiAgICBpZiAodC5raW5kID09PSAncGViYmxlJykgdGV4ID0gcGViYmxlVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMjEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0cmVhZCcpIHRleCA9IHRyZWFkVGlsZSh0LnNpemUgPz8gMjU2LCB0LnNlZWQgPz8gMjMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0eXJlJykgdGV4ID0gdHlyZVRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDI5LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY3VsbScpIHRleCA9IGN1bG1UaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAzMSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3Nhd24nKSB0ZXggPSBzYXduVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNDMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0aGF0Y2gnKSB0ZXggPSB0aGF0Y2hUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAzNywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3RhcnAnKSB0ZXggPSB0YXJwVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNDEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdnYWx2JykgdGV4ID0gZ2FsdlRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDQ3LCB0KTtcbiAgICBiaW5kVGlsZShtYXQsIHRleCwgdC5idW1wID8/IDApO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlUm90aUdyaWRkbGVTdGFuZE1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogdGhlIHJvb3QsIHBsdXMgT05FIFBFUiBXSEVFTCAoYW5kIGFueSBvdGhlciBtZWNoYW5pc20gQ09ORklHLnBpdm90cyBuYW1lcyAtLSBhXG4gICAgLy8gc3RlZXJpbmcgaGVhZCwgYSBjYW5vcHkgc3RheSkuIEEgdmVoaWNsZSdzIHdoZWVscyBnZW51aW5lbHkgdHVybiwgc28gZWFjaCBvbmUgaXMgYSBwcm9taXNlXG4gICAgLy8ga2VwdDogdGhlIHBpdm90IHNpdHMgYXQgdGhlIGh1YiwgaXRzIGF4aXMgaXMgdGhlIGF4bGUsIGFuZCBgaW5zdGFuY2VgIG5hbWVzIHdoaWNoIGluc3RhbmNlXG4gICAgLy8gb2YgdGhlIHdoZWVsIEluc3RhbmNlZE1lc2ggaXQgZHJpdmVzLiBOb3RoaW5nIGVsc2Ugb24gdGhlIHByb3AgbW92ZXMgLS0gdGhlIGRvb3JzIGFyZSBwYXJ0XG4gICAgLy8gb2YgdGhlIGJvZHkgc2hlbGwgLS0gc28gbm90aGluZyBlbHNlIGdldHMgYW4gYXhpcy5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcbiAgICBmb3IgKGNvbnN0IHB2IG9mIChDT05GSUcucGl2b3RzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgbyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgICAgby5uYW1lID0gcHYubmFtZTtcbiAgICAgIG8ucG9zaXRpb24uc2V0KHB2LnBvc2l0aW9uWzBdLCBwdi5wb3NpdGlvblsxXSwgcHYucG9zaXRpb25bMl0pO1xuICAgICAgby51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgICBhbmltYXRpb25Sb2xlOiAnY2hpbGQnLFxuICAgICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogcHYucG9zaXRpb24sIGF4aXM6IHB2LmF4aXMsIG5hbWU6IHB2Lm5hbWUsXG4gICAgICAgICAgICAgICAgIGNvbXBvbmVudDogcHYuY29tcG9uZW50LCBpbnN0YW5jZTogcHYuaW5zdGFuY2UgPz8gbnVsbCwgbm90ZXM6IHB2Lm5vdGUgPz8gJycgfSxcbiAgICAgIH07XG4gICAgICByb290LmFkZChvKTtcbiAgICAgIHBpdm90cy5wdXNoKG8pO1xuICAgIH1cblxuICAgIC8vIFNvY2tldHM6IE5PTkUgdW5sZXNzIENPTkZJRy5zb2NrZXRzIG5hbWVzIG9uZS4gTm90aGluZyBhdHRhY2hlcyB0byBhIHZlaGljbGUgaW4gdGhpcyBraXRcbiAgICAvLyBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qKlxuICogVGhlIG9uZS1hcmd1bWVudCBlbnRyeSBwb2ludDogdmliZTNkJ3MgY29udHJhY3QsIGFuZCBpbWcydGhyZWVqcydzIG93bi5cbiAqXG4gKiBgY3JlYXRlT2JqZWN0TW9kZWxgIGFib3ZlIGtlZXBzIHRoYWlraXQncyBoaXN0b3JpY2FsIChzcGVjLCBvcHRpb25zKSBzaGFwZSBzb1xuICogdGhlIGhhcm5lc3MsIHRoZSBsZXZlbCBlZGl0b3IgYW5kIHRoZSBOb2RlLXNpZGUgZ2F0ZXMgY2Fycnkgb24gdW5jaGFuZ2VkLlxuICogYHNwZWNgIGhhcyBuZXZlciBiZWVuIHBhc3NlZCBieSBhbnkgY2FsbGVyIC0tIGl0IGlzIGluc3BlY3Rpb24gZGF0YSB0aGF0IGlzXG4gKiBhbHJlYWR5IGJha2VkIGludG8gdGhpcyBtb2R1bGUgLS0gc28gdGhpcyBpcyB0aGUgaG9uZXN0IHNpZ25hdHVyZSwgYW5kIGl0IGlzXG4gKiB3aGF0IGEgdmliZTNkIGNvbnN1bWVyIGluc3RhbGxzIGFuZCBjYWxscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgcmV0dXJuIGNyZWF0ZU9iamVjdE1vZGVsKHVuZGVmaW5lZCwgb3B0aW9ucyk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUE4Q3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQTtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFdBQVc7QUFBQSxJQUNiO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsY0FBYztBQUFBLE1BQ1o7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLE1BQU07QUFBQSxRQUNOLFdBQVc7QUFBQSxRQUNYLFlBQVk7QUFBQSxVQUNWLFNBQVM7QUFBQSxVQUNULGVBQWU7QUFBQSxZQUNiO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxlQUFlO0FBQUEsWUFDYjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNQO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDTjtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsVUFDUjtBQUFBLFlBQ0UsT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE9BQU87QUFBQSxjQUNMO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsY0FDSjtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0EsT0FBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FB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
