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

// ../repo/scratch/red-chinese-hanging-lantern/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createModel: () => createModel,
  createObjectModel: () => createObjectModel,
  createRedChineseHangingLanternModel: () => createRedChineseHangingLanternModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "red-chinese-hanging-lantern",
  "name": "Red Chinese Hanging Lantern",
  "exportName": "RedChineseHangingLantern",
  "envelope": "Envelope 0.38 x 0.92 x 0.38 m, origin TOP-CENTER at the crown of the hanging loop, so the prop occupies y -0.92 to 0.\n * Budget (large): <=4000 triangles, <=4 draw calls, <=3 materials, <=6 unique geometries.",
  "materials": [
    {
      "id": "red-silk",
      "color": 16777215,
      "roughness": 0.92,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "gilt-metal",
      "color": 16777215,
      "roughness": 0.38,
      "metalness": 0.55,
      "vertexColors": true
    },
    {
      "id": "rope",
      "color": 16777215,
      "roughness": 0.88,
      "metalness": 0,
      "vertexColors": true
    }
  ],
  "tiles": [
    {
      "material": "rope",
      "kind": "rope",
      "size": 256,
      "seed": 733
    }
  ],
  "geometry": {
    "components": [
      {
        "id": "lantern-body",
        "name": "Ribbed red silk belly",
        "material": "red-silk",
        "uv": "world",
        "uvScale": 0.2,
        "collider": {
          "shape": "sphere",
          "localCenter": [
            0,
            -0.55,
            0
          ],
          "halfExtents": [
            0.19,
            0.19,
            0.19
          ],
          "notes": "A sphere over the belly. It hangs, so nothing stands on it. physics.enabled is false -- it is tied to an awning frame by the rope."
        },
        "domes": [
          {
            "pts": [
              [
                0.072,
                -0.745
              ],
              [
                0.1415734950145696,
                -0.69625
              ],
              [
                0.16952113754219697,
                -0.6475
              ],
              [
                0.18497190380638964,
                -0.59875
              ],
              [
                0.19,
                -0.55
              ],
              [
                0.18497190380638964,
                -0.50125
              ],
              [
                0.169521137542197,
                -0.4525
              ],
              [
                0.14157349501456962,
                -0.40375
              ],
              [
                0.07200000020906819,
                -0.355
              ]
            ],
            "ribs": 16,
            "amp": 0.022,
            "seg": 48,
            "valley": [
              0.7040460348858119,
              0.8325457190084662,
              0.8005401755570558
            ],
            "hex": 8195095
          }
        ]
      },
      {
        "id": "gold-caps",
        "name": "Gold caps, rope eyelet and the tassel",
        "material": "gilt-metal",
        "parent": "lantern-body",
        "uv": "world",
        "uvScale": 0.1,
        "cyls": [
          {
            "rt": 0.052,
            "rb": 0.078,
            "h": 0.042,
            "seg": 16,
            "at": [
              0,
              -0.33199999999999996,
              0
            ],
            "hex": 13214247
          },
          {
            "rt": 0.08,
            "rb": 0.074,
            "h": 0.016,
            "seg": 16,
            "at": [
              0,
              -0.36,
              0
            ],
            "hex": 11044639
          },
          {
            "rt": 0.072,
            "rb": 0.058,
            "h": 0.038,
            "seg": 16,
            "at": [
              0,
              -0.762,
              0
            ],
            "hex": 13214247
          },
          {
            "rt": 0.076,
            "rb": 0.07,
            "h": 0.014,
            "seg": 16,
            "at": [
              0,
              -0.74,
              0
            ],
            "hex": 11044639
          },
          {
            "rt": 0.012,
            "rb": 0.015,
            "h": 0.024,
            "seg": 12,
            "at": [
              0,
              -0.305,
              0
            ],
            "hex": 11044639
          }
        ],
        "frusta": [
          [
            11044639,
            0,
            -0.8,
            0,
            0.026,
            0.026,
            0.03,
            0.03,
            0.022
          ],
          [
            7014930,
            0,
            -0.9199999999999999,
            0,
            0.026,
            0.026,
            0.052,
            0.052,
            0.12
          ]
        ]
      },
      {
        "id": "hanging-rope",
        "name": "Jute hanging cord with its loop",
        "material": "rope",
        "parent": "gold-caps",
        "uv": "culm",
        "uvScale": 0.06,
        "cyls": [
          {
            "rt": 7e-3,
            "rb": 7e-3,
            "h": 0.25,
            "seg": 8,
            "at": [
              0,
              -0.186,
              0
            ],
            "hex": 11575164,
            "vOff": 0.3
          },
          {
            "rt": 0.011,
            "rb": 0.011,
            "h": 0.024,
            "seg": 8,
            "at": [
              0,
              -0.066,
              0
            ],
            "hex": 10522218,
            "vOff": 0.7
          }
        ],
        "sweeps": [
          {
            "pts": [
              [
                14083438190194562e-34,
                -0.053,
                0
              ],
              [
                0.005952838037357977,
                -0.05221629400464857,
                0
              ],
              [
                0.011499999999999998,
                -0.049918584287042087,
                0
              ],
              [
                0.016263455967290594,
                -0.04626345596729059,
                0
              ],
              [
                0.019918584287042088,
                -0.041499999999999995,
                0
              ],
              [
                0.02221629400464857,
                -0.03595283803735797,
                0
              ],
              [
                0.023,
                -0.03,
                0
              ],
              [
                0.022216294004648567,
                -0.02404716196264202,
                0
              ],
              [
                0.01991858428704209,
                -0.018500000000000003,
                0
              ],
              [
                0.016263455967290594,
                -0.013736544032709408,
                0
              ],
              [
                0.011499999999999998,
                -0.010081415712957908,
                0
              ],
              [
                0.005952838037357982,
                -0.007783705995351432,
                0
              ],
              [
                14083438190194562e-34,
                -0.006999999999999999,
                0
              ],
              [
                -0.005952838037357969,
                -0.007783705995351425,
                0
              ],
              [
                -0.011500000000000005,
                -0.010081415712957911,
                0
              ],
              [
                -0.01626345596729059,
                -0.013736544032709404,
                0
              ],
              [
                -0.019918584287042084,
                -0.018499999999999992,
                0
              ],
              [
                -0.02221629400464857,
                -0.024047161962642026,
                0
              ],
              [
                -0.023,
                -0.029999999999999995,
                0
              ],
              [
                -0.022216294004648574,
                -0.035952838037357965,
                0
              ],
              [
                -0.019918584287042088,
                -0.0415,
                0
              ],
              [
                -0.016263455967290598,
                -0.04626345596729059,
                0
              ],
              [
                -0.01150000000000001,
                -0.049918584287042087,
                0
              ],
              [
                -0.005952838037357975,
                -0.05221629400464857,
                0
              ],
              [
                -42250314570583685e-34,
                -0.053,
                0
              ]
            ],
            "r": 7e-3,
            "seg": 8,
            "hex": 11575164,
            "cap": false
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
function createRedChineseHangingLanternModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Red Chinese Hanging Lantern";
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
    bindTile(mat, tex, t.bump ?? 0);
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createRedChineseHangingLanternModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogUmVkIENoaW5lc2UgSGFuZ2luZyBMYW50ZXJuIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDAuMzggeCAwLjkyIHggMC4zOCBtLCBvcmlnaW4gVE9QLUNFTlRFUiBhdCB0aGUgY3Jvd24gb2YgdGhlIGhhbmdpbmcgbG9vcCwgc28gdGhlIHByb3Agb2NjdXBpZXMgeSAtMC45MiB0byAwLlxuICogQnVkZ2V0IChsYXJnZSk6IDw9NDAwMCB0cmlhbmdsZXMsIDw9NCBkcmF3IGNhbGxzLCA8PTMgbWF0ZXJpYWxzLCA8PTYgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhhaWtpdCdzIFNUUkVFVCBBTkQgVkVORE9SIFBST1BTIC0tIGEgY29uZSwgYSBiYXJyaWVyLCBhIGNhcnQsIGEgc3Rvb2wuIFRoZVxuICogc2hhcmVkIHZvY2FidWxhcnkgaXMgdGhlIFRJTlRFRCBCT1ggYW5kIHRoZSBwb2x5bGluZSBUVUJFIG1lcmdlZCBpbnRvIG9uZSBnZW9tZXRyeSBwZXIgbWF0ZXJpYWwsXG4gKiB3aXRoIGV2ZXJ5IGNvbG91ciBkaWZmZXJlbmNlIGluc2lkZSBhIG1hdGVyaWFsIGNhcnJpZWQgYXMgYSB2ZXJ0ZXggY29sb3VyIG9uIGEgV0hJVEUgbWF0ZXJpYWwsXG4gKiBhbmQgc3VyZmFjZSBpZGVudGl0eSAoY29ycnVnYXRpb24sIGdyaW1lIHdhc2gsIG1vc3MsIHBsYW5rIGpvaW50cywgcnVzdCkgZGVsaXZlcmVkIGFzIE9ORVxuICogcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgcGVyIG1hdGVyaWFsIHJhdGhlciB0aGFuIGFzIGdlb21ldHJ5IG9yIGEgcHJvY2VkdXJhbCB0ZXh0dXJlIHNldC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcInJlZC1jaGluZXNlLWhhbmdpbmctbGFudGVyblwiLFxuICAgIFwibmFtZVwiOiBcIlJlZCBDaGluZXNlIEhhbmdpbmcgTGFudGVyblwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIlJlZENoaW5lc2VIYW5naW5nTGFudGVyblwiLFxuICAgIFwiZW52ZWxvcGVcIjogXCJFbnZlbG9wZSAwLjM4IHggMC45MiB4IDAuMzggbSwgb3JpZ2luIFRPUC1DRU5URVIgYXQgdGhlIGNyb3duIG9mIHRoZSBoYW5naW5nIGxvb3AsIHNvIHRoZSBwcm9wIG9jY3VwaWVzIHkgLTAuOTIgdG8gMC5cXG4gKiBCdWRnZXQgKGxhcmdlKTogPD00MDAwIHRyaWFuZ2xlcywgPD00IGRyYXcgY2FsbHMsIDw9MyBtYXRlcmlhbHMsIDw9NiB1bmlxdWUgZ2VvbWV0cmllcy5cIixcbiAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJyZWQtc2lsa1wiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjkyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ2lsdC1tZXRhbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjM4LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjU1LFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwicm9wZVwiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjg4LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBcInRpbGVzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcInJvcGVcIixcbiAgICAgICAgXCJraW5kXCI6IFwicm9wZVwiLFxuICAgICAgICBcInNpemVcIjogMjU2LFxuICAgICAgICBcInNlZWRcIjogNzMzXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwiY29tcG9uZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwibGFudGVybi1ib2R5XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiUmliYmVkIHJlZCBzaWxrIGJlbGx5XCIsXG4gICAgICAgICAgXCJtYXRlcmlhbFwiOiBcInJlZC1zaWxrXCIsXG4gICAgICAgICAgXCJ1dlwiOiBcIndvcmxkXCIsXG4gICAgICAgICAgXCJ1dlNjYWxlXCI6IDAuMixcbiAgICAgICAgICBcImNvbGxpZGVyXCI6IHtcbiAgICAgICAgICAgIFwic2hhcGVcIjogXCJzcGhlcmVcIixcbiAgICAgICAgICAgIFwibG9jYWxDZW50ZXJcIjogW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAtMC41NSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiaGFsZkV4dGVudHNcIjogW1xuICAgICAgICAgICAgICAwLjE5LFxuICAgICAgICAgICAgICAwLjE5LFxuICAgICAgICAgICAgICAwLjE5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJub3Rlc1wiOiBcIkEgc3BoZXJlIG92ZXIgdGhlIGJlbGx5LiBJdCBoYW5ncywgc28gbm90aGluZyBzdGFuZHMgb24gaXQuIHBoeXNpY3MuZW5hYmxlZCBpcyBmYWxzZSAtLSBpdCBpcyB0aWVkIHRvIGFuIGF3bmluZyBmcmFtZSBieSB0aGUgcm9wZS5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkb21lc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjA3MixcbiAgICAgICAgICAgICAgICAgIC0wLjc0NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xNDE1NzM0OTUwMTQ1Njk2LFxuICAgICAgICAgICAgICAgICAgLTAuNjk2MjVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTY5NTIxMTM3NTQyMTk2OTcsXG4gICAgICAgICAgICAgICAgICAtMC42NDc1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjE4NDk3MTkwMzgwNjM4OTY0LFxuICAgICAgICAgICAgICAgICAgLTAuNTk4NzVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTksXG4gICAgICAgICAgICAgICAgICAtMC41NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xODQ5NzE5MDM4MDYzODk2NCxcbiAgICAgICAgICAgICAgICAgIC0wLjUwMTI1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjE2OTUyMTEzNzU0MjE5NyxcbiAgICAgICAgICAgICAgICAgIC0wLjQ1MjVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTQxNTczNDk1MDE0NTY5NjIsXG4gICAgICAgICAgICAgICAgICAtMC40MDM3NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4wNzIwMDAwMDAyMDkwNjgxOSxcbiAgICAgICAgICAgICAgICAgIC0wLjM1NVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJyaWJzXCI6IDE2LFxuICAgICAgICAgICAgICBcImFtcFwiOiAwLjAyMixcbiAgICAgICAgICAgICAgXCJzZWdcIjogNDgsXG4gICAgICAgICAgICAgIFwidmFsbGV5XCI6IFtcbiAgICAgICAgICAgICAgICAwLjcwNDA0NjAzNDg4NTgxMTksXG4gICAgICAgICAgICAgICAgMC44MzI1NDU3MTkwMDg0NjYyLFxuICAgICAgICAgICAgICAgIDAuODAwNTQwMTc1NTU3MDU1OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImhleFwiOiA4MTk1MDk1XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiBcImdvbGQtY2Fwc1wiLFxuICAgICAgICAgIFwibmFtZVwiOiBcIkdvbGQgY2Fwcywgcm9wZSBleWVsZXQgYW5kIHRoZSB0YXNzZWxcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwiZ2lsdC1tZXRhbFwiLFxuICAgICAgICAgIFwicGFyZW50XCI6IFwibGFudGVybi1ib2R5XCIsXG4gICAgICAgICAgXCJ1dlwiOiBcIndvcmxkXCIsXG4gICAgICAgICAgXCJ1dlNjYWxlXCI6IDAuMSxcbiAgICAgICAgICBcImN5bHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDUyLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDc4LFxuICAgICAgICAgICAgICBcImhcIjogMC4wNDIsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDE2LFxuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIC0wLjMzMTk5OTk5OTk5OTk5OTk2LFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTMyMTQyNDdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicnRcIjogMC4wOCxcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjA3NCxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDE2LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxNixcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAtMC4zNixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExMDQ0NjM5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDcyLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDU4LFxuICAgICAgICAgICAgICBcImhcIjogMC4wMzgsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDE2LFxuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIC0wLjc2MixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDEzMjE0MjQ3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDc2LFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDcsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjAxNCxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTYsXG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgLTAuNzQsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImhleFwiOiAxMTA0NDYzOVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJydFwiOiAwLjAxMixcbiAgICAgICAgICAgICAgXCJyYlwiOiAwLjAxNSxcbiAgICAgICAgICAgICAgXCJoXCI6IDAuMDI0LFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMixcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAtMC4zMDUsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImhleFwiOiAxMTA0NDYzOVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJmcnVzdGFcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxMTA0NDYzOSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgLTAuOCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4wMjYsXG4gICAgICAgICAgICAgIDAuMDI2LFxuICAgICAgICAgICAgICAwLjAzLFxuICAgICAgICAgICAgICAwLjAzLFxuICAgICAgICAgICAgICAwLjAyMlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgNzAxNDkzMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgLTAuOTE5OTk5OTk5OTk5OTk5OSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4wMjYsXG4gICAgICAgICAgICAgIDAuMDI2LFxuICAgICAgICAgICAgICAwLjA1MixcbiAgICAgICAgICAgICAgMC4wNTIsXG4gICAgICAgICAgICAgIDAuMTJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IFwiaGFuZ2luZy1yb3BlXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSnV0ZSBoYW5naW5nIGNvcmQgd2l0aCBpdHMgbG9vcFwiLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJyb3BlXCIsXG4gICAgICAgICAgXCJwYXJlbnRcIjogXCJnb2xkLWNhcHNcIixcbiAgICAgICAgICBcInV2XCI6IFwiY3VsbVwiLFxuICAgICAgICAgIFwidXZTY2FsZVwiOiAwLjA2LFxuICAgICAgICAgIFwiY3lsc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicnRcIjogMC4wMDcsXG4gICAgICAgICAgICAgIFwicmJcIjogMC4wMDcsXG4gICAgICAgICAgICAgIFwiaFwiOiAwLjI1LFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIC0wLjE4NixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDExNTc1MTY0LFxuICAgICAgICAgICAgICBcInZPZmZcIjogMC4zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInJ0XCI6IDAuMDExLFxuICAgICAgICAgICAgICBcInJiXCI6IDAuMDExLFxuICAgICAgICAgICAgICBcImhcIjogMC4wMjQsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgLTAuMDY2LFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTA1MjIyMTgsXG4gICAgICAgICAgICAgIFwidk9mZlwiOiAwLjdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwic3dlZXBzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDEuNDA4MzQzODE5MDE5NDU2MmUtMTgsXG4gICAgICAgICAgICAgICAgICAtMC4wNTMsXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjAwNTk1MjgzODAzNzM1Nzk3NyxcbiAgICAgICAgICAgICAgICAgIC0wLjA1MjIxNjI5NDAwNDY0ODU3LFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4wMTE0OTk5OTk5OTk5OTk5OTgsXG4gICAgICAgICAgICAgICAgICAtMC4wNDk5MTg1ODQyODcwNDIwODcsXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjAxNjI2MzQ1NTk2NzI5MDU5NCxcbiAgICAgICAgICAgICAgICAgIC0wLjA0NjI2MzQ1NTk2NzI5MDU5LFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4wMTk5MTg1ODQyODcwNDIwODgsXG4gICAgICAgICAgICAgICAgICAtMC4wNDE0OTk5OTk5OTk5OTk5OTUsXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjAyMjIxNjI5NDAwNDY0ODU3LFxuICAgICAgICAgICAgICAgICAgLTAuMDM1OTUyODM4MDM3MzU3OTcsXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjAyMyxcbiAgICAgICAgICAgICAgICAgIC0wLjAzLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4wMjIyMTYyOTQwMDQ2NDg1NjcsXG4gICAgICAgICAgICAgICAgICAtMC4wMjQwNDcxNjE5NjI2NDIwMixcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDE5OTE4NTg0Mjg3MDQyMDksXG4gICAgICAgICAgICAgICAgICAtMC4wMTg1MDAwMDAwMDAwMDAwMDMsXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjAxNjI2MzQ1NTk2NzI5MDU5NCxcbiAgICAgICAgICAgICAgICAgIC0wLjAxMzczNjU0NDAzMjcwOTQwOCxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDExNDk5OTk5OTk5OTk5OTk4LFxuICAgICAgICAgICAgICAgICAgLTAuMDEwMDgxNDE1NzEyOTU3OTA4LFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4wMDU5NTI4MzgwMzczNTc5ODIsXG4gICAgICAgICAgICAgICAgICAtMC4wMDc3ODM3MDU5OTUzNTE0MzIsXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAxLjQwODM0MzgxOTAxOTQ1NjJlLTE4LFxuICAgICAgICAgICAgICAgICAgLTAuMDA2OTk5OTk5OTk5OTk5OTk5LFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMDA1OTUyODM4MDM3MzU3OTY5LFxuICAgICAgICAgICAgICAgICAgLTAuMDA3NzgzNzA1OTk1MzUxNDI1LFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMDExNTAwMDAwMDAwMDAwMDA1LFxuICAgICAgICAgICAgICAgICAgLTAuMDEwMDgxNDE1NzEyOTU3OTExLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMDE2MjYzNDU1OTY3MjkwNTksXG4gICAgICAgICAgICAgICAgICAtMC4wMTM3MzY1NDQwMzI3MDk0MDQsXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4wMTk5MTg1ODQyODcwNDIwODQsXG4gICAgICAgICAgICAgICAgICAtMC4wMTg0OTk5OTk5OTk5OTk5OTIsXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4wMjIyMTYyOTQwMDQ2NDg1NyxcbiAgICAgICAgICAgICAgICAgIC0wLjAyNDA0NzE2MTk2MjY0MjAyNixcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjAyMyxcbiAgICAgICAgICAgICAgICAgIC0wLjAyOTk5OTk5OTk5OTk5OTk5NSxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjAyMjIxNjI5NDAwNDY0ODU3NCxcbiAgICAgICAgICAgICAgICAgIC0wLjAzNTk1MjgzODAzNzM1Nzk2NSxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjAxOTkxODU4NDI4NzA0MjA4OCxcbiAgICAgICAgICAgICAgICAgIC0wLjA0MTUsXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4wMTYyNjM0NTU5NjcyOTA1OTgsXG4gICAgICAgICAgICAgICAgICAtMC4wNDYyNjM0NTU5NjcyOTA1OSxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjAxMTUwMDAwMDAwMDAwMDAxLFxuICAgICAgICAgICAgICAgICAgLTAuMDQ5OTE4NTg0Mjg3MDQyMDg3LFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMDA1OTUyODM4MDM3MzU3OTc1LFxuICAgICAgICAgICAgICAgICAgLTAuMDUyMjE2Mjk0MDA0NjQ4NTcsXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtNC4yMjUwMzE0NTcwNTgzNjg1ZS0xOCxcbiAgICAgICAgICAgICAgICAgIC0wLjA1MyxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiclwiOiAwLjAwNyxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTE1NzUxNjQsXG4gICAgICAgICAgICAgIFwiY2FwXCI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgLy8gQ09MT1IgaGFzIHRvIGJlIGNhcnJpZWQgdG9vLCBhbmQgaXQgaXMgZWFzeSB0byBmb3JnZXQ6IHRoaXMgZnVuY3Rpb24gY29waWVkIHBvc2l0aW9uLCBub3JtYWxcbiAgLy8gYW5kIHV2IG9ubHksIGFuZCB0aGUgbW9zcXVlJ3MgcmliYmVkIGRvbWVzIGxvc3QgdGhlaXIgZ3JlZW4tYW5kLXBhbGUgc3RyaXBpbmcgdGhlIG1vbWVudCB0aGV5XG4gIC8vIHdlcmUgbWVyZ2VkIHdpdGggYW55dGhpbmcuIFRoZSBmYWlsdXJlIGlzIHNpbGVudCAtLSB0aGUgZG9tZSByZW5kZXJzLCBpbiBvbmUgZmxhdCBjb2xvdXIgLS0gYW5kXG4gIC8vIHRvb2sgYSB3cm9uZyB0aGVvcnkgYWJvdXQgc1JHQiBnYW1tYSBiZWZvcmUgdGhlIGF0dHJpYnV0ZSBsaXN0IHdhcyByZWFkLiBBbnkgaW5wdXQgY2FycnlpbmcgYVxuICAvLyBjb2xvdXIgbWVhbnMgZXZlcnkgaW5wdXQgZ2V0cyBvbmUsIHdoaXRlIHdoZXJlIGl0IGhhZCBub25lLlxuICBjb25zdCBhbnlDb2xvciA9IHBhcnRzLnNvbWUoKGcpID0+ICEhZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpO1xuICBjb25zdCBjb2xvciA9IGFueUNvbG9yID8gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpLmZpbGwoMSkgOiBudWxsO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGNvbnN0IGMgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICAgIGlmIChjb2xvciAmJiBjKSB7IGNvbG9yWyh2ICsgaSkgKiAzXSA9IGMuZ2V0WChpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAxXSA9IGMuZ2V0WShpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAyXSA9IGMuZ2V0WihpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sb3IpIG91dC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgMykpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHJUb3A6IG51bWJlciwgckJvdDogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyVG9wLCByQm90LCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogUmV2b2x2ZSBhIHByb2ZpbGUgYWJvdXQgK1kuIGBwdHNgIGFyZSBbcmFkaXVzLCB5XSBpbiBtZXRyZXMsIGJvdHRvbSB0byB0b3AuXG4gKlxuICogVGhpcyBpcyB0aGUgc2hhcGUgdm9jYWJ1bGFyeSB0aGUgd2hvbGUgbW9udW1lbnRhbCBzZXQgaXMgYnVpbHQgZnJvbSAtLSBhIGNoZWRpJ3MgYmVsbCwgYSBwcmFuZydzXG4gKiBjb3JuLWNvYiB0YXBlciwgYSBkb21lLCBhIHJpbmdlZCBzcGlyZSBhcmUgYWxsIG9uZSBwcm9maWxlIGVhY2guIFR3byB0aGluZ3MgYXJlIHdvcnRoIHN0YXRpbmdcbiAqIGJlY2F1c2UgYm90aCBjb3N0IGEgcmVidWlsZCB0byBsZWFybjpcbiAqXG4gKiAtIExhdGhlR2VvbWV0cnkgaXMgT1BFTiBhdCB0b3AgYW5kIGJvdHRvbS4gQSBwcm9maWxlIHRoYXQgZG9lcyBub3QgY2xvc2Ugb24gdGhlIGF4aXMgKHJhZGl1cyAwKVxuICogICBsZWF2ZXMgYSBob2xlIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkcyBhcyBiYWNrZ3JvdW5kIGVuY2xvc2VkIGJ5IHRoZSBzaWxob3VldHRlLiBDbG9zZSBpdCwgb3JcbiAqICAgY2FwIGl0IHdpdGggd2hhdCBzaXRzIGFib3ZlLlxuICogLSBSQURJQUwgU0VHTUVOVCBDT1VOVCBpcyB0aGUgdHJpYW5nbGUgYnVkZ2V0J3MgbWFpbiBsZXZlciBoZXJlIGFuZCBpdCBpcyBwZXItbGF0aGU6IGEgcHJvZmlsZSBvZlxuICogICBuIHBvaW50cyBhdCBzIHNlZ21lbnRzIGlzIDIqKG4tMSkqcyB0cmlhbmdsZXMuIEEgMjQtcmluZyBzcGlyZSBhdCAzMiBzZWdtZW50cyBpcyAxLDQ3MlxuICogICB0cmlhbmdsZXMgb24gaXRzIG93biwgd2hpY2ggaXMgd2h5IHRoZSBsb3ctcmVsaWVmIHJpbmdzIGFyZSBhIHByb2ZpbGUgcmF0aGVyIHRoYW4gMjQgcmluZ3MuXG4gKi9cbi8qKiBMYXRoZUdlb21ldHJ5IHNoYXJlcyB0aGUgY29ybmVyIHZlcnRleCBiZXR3ZWVuIGFuIGVuZCBkaXNjIGFuZCB0aGUgc2lkZSB3YWxsLCBzb1xuICogIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIHRpbHRzIHRoZSB3YWxsJ3MgZmlyc3QgcmluZyA0NSBkZWdyZWVzIHRvd2FyZCB0aGUgZGlzYyBhbmQgdGhlIGhhcm5lc3Mgc2hhZGVzXG4gKiAgYSBkYXJrIGdyYWRpZW50IHRoZXJlIC0tIGEgcmluZyB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBhcyBhIEhPTEUgdW5kZXIgdGhlIHN0YWlubGVzcyBiaW4ncyBjYXAuXG4gKiAgSW5zZXJ0aW5nIGEgcG9pbnQgMC44IG1tIHBhc3QgZXZlcnkgc2hhcnAgY29ybmVyICg+IDcwIGRlZ3JlZXMpIGNvbmZpbmVzIHRoZSBhdmVyYWdlZCBub3JtYWwgdG8gdGhhdFxuICogIHNsaXZlci4gQ29zdHMgb25lIHJpbmcgcGVyIGNvcm5lcjsgcGFzcyBgc2hhcnAgPSBmYWxzZWAgd2hlcmUgdGhlIGJ1ZGdldCBjYW5ub3QgY2FycnkgaXQuICovXG5mdW5jdGlvbiBzcGxpdENvcm5lcnMocHRzOiBudW1iZXJbXVtdLCBtaW5EZWcgPSA3MCwgZXBzID0gMC4wMDA4KTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IG91dDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHAgPSBwdHNbaV0sIGEgPSBwdHNbaSAtIDFdLCBiID0gcHRzW2kgKyAxXTtcbiAgICBsZXQgc2hhcnAgPSBmYWxzZTtcbiAgICBpZiAoYSAmJiBiKSB7XG4gICAgICBjb25zdCB1eCA9IHBbMF0gLSBhWzBdLCB1eSA9IHBbMV0gLSBhWzFdLCB2eCA9IGJbMF0gLSBwWzBdLCB2eSA9IGJbMV0gLSBwWzFdO1xuICAgICAgY29uc3QgbHUgPSBNYXRoLmh5cG90KHV4LCB1eSksIGx2ID0gTWF0aC5oeXBvdCh2eCwgdnkpO1xuICAgICAgaWYgKGx1ID4gMCAmJiBsdiA+IDApIHNoYXJwID0gTWF0aC5hY29zKE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCAodXggKiB2eCArIHV5ICogdnkpIC8gKGx1ICogbHYpKSkpID4gbWluRGVnICogTWF0aC5QSSAvIDE4MDtcbiAgICAgIGlmIChzaGFycCAmJiBsdSA+IDMgKiBlcHMpIG91dC5wdXNoKFtwWzBdIC0gdXggLyBsdSAqIGVwcywgcFsxXSAtIHV5IC8gbHUgKiBlcHNdKTtcbiAgICAgIG91dC5wdXNoKHApO1xuICAgICAgaWYgKHNoYXJwICYmIGx2ID4gMyAqIGVwcykgb3V0LnB1c2goW3BbMF0gKyB2eCAvIGx2ICogZXBzLCBwWzFdICsgdnkgLyBsdiAqIGVwc10pO1xuICAgIH0gZWxzZSBvdXQucHVzaChwKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKiogYHdlbGRTZWFtYCBhdmVyYWdlcyB0aGUgbm9ybWFscyBvZiB0aGUgZmlyc3QgYW5kIGxhc3QgcmFkaWFsIGNvbHVtbiwgd2hpY2ggaXMgd2hhdCBjbG9zZXMgdGhlXG4gKiAgcmV2b2x2ZSdzIFNIQURJTkcgc2VhbS4gTGF0aGVHZW9tZXRyeSBhbHJlYWR5IGRvZXMgdGhpcyBpdHNlbGYgLS0gaXQgZXhwbGljaXRseSBhdmVyYWdlcyB0aGUgdHdvXG4gKiAgZW5kIGNvbHVtbnMgZm9yIGEgZnVsbCAyKlBJIHN3ZWVwIC0tIGFuZCB0aGUgYGNvbXB1dGVWZXJ0ZXhOb3JtYWxzKClgIGJlbG93IHRocm93cyB0aGF0IHdvcmtcbiAqICBhd2F5LCBiZWNhdXNlIGEgcmVjb21wdXRlIHNlZXMgdGhlIHNlYW0gYXMgdHdvIHVuY29ubmVjdGVkIGVkZ2VzIGFuZCBnaXZlcyBlYWNoIHRoZSBub3JtYWwgb2ZcbiAqICB0aGUgZmFjZXMgb24gaXRzIG93biBzaWRlIG9ubHkuIE9uIGEgbWF0dGUgcHJvcCB0aGUgcmVzdWx0aW5nIGNyZWFzZSBpcyBpbnZpc2libGUsIHdoaWNoIGlzIHdoeVxuICogIGl0IHN1cnZpdmVkOyBvbiBhIHNhdGluIG1ldGFsIGl0IGlzIGEgaGFyZCB2ZXJ0aWNhbCBsaW5lIGRvd24gdGhlIHJldm9sdmUuIE1lYXN1cmVkIG9uIHRoZVxuICogIG5vb2RsZS1zaG9wIHRhYmxlJ3MgcmltIGF0IGF6aW11dGggMDogYSAzMS1sZXZlbCBsdW1hIHN0ZXAgYXQgeD01MTIgKDI0NSAtPiAyMTQgYXQgeT0yNTgpLFxuICogIFJFVkVSU0lORyB0byArMjcgYXQgeT0yNjYgLS0gYSBkaXNjb250aW51aXR5LCBub3QgYSBncmFkaWVudC5cbiAqICBEZWZhdWx0IE9GRiBzbyBubyBhbHJlYWR5LWVtaXR0ZWQgcHJvcCBjaGFuZ2VzIHNoYWRpbmcgaWYgaXQgaXMgZXZlciByZS1lbWl0dGVkOyB0aGUgcmVjb21wdXRlXG4gKiAgaXMgc3RpbGwgbmVlZGVkIGZvciB0aGUgc2hhcnAtY29ybmVyIHNwbGl0cywgc28gdGhpcyB3ZWxkcyBhZnRlcndhcmRzIHJhdGhlciB0aGFuIHNraXBwaW5nIGl0LiAqL1xuZnVuY3Rpb24gbGF0aGUocHRzOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlciwgeU9mZnNldCA9IDAsIHNoYXJwID0gdHJ1ZSwgd2VsZFNlYW0gPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdiA9IChzaGFycCA/IHNwbGl0Q29ybmVycyhwdHMpIDogcHRzKS5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKE1hdGgubWF4KHBbMF0sIDApLCBwWzFdICsgeU9mZnNldCkpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkodiwgc2VnKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICBpZiAod2VsZFNlYW0pIHtcbiAgICAvLyBMYXRoZUdlb21ldHJ5IGxheXMgb3V0IChzZWcgKyAxKSBjb2x1bW5zIG9mIGByb3dzYCB2ZXJ0aWNlczsgY29sdW1uIDAgYW5kIGNvbHVtbiBzZWcgYXJlIHRoZVxuICAgIC8vIHNhbWUgcGxhY2UgaW4gc3BhY2UuIEF2ZXJhZ2UgdGhlIHBhaXIgYW5kIHdyaXRlIGl0IGJhY2sgdG8gYm90aC5cbiAgICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICAgIGNvbnN0IHJvd3MgPSBuLmNvdW50IC8gKHNlZyArIDEpO1xuICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93czsgcisrKSB7XG4gICAgICBjb25zdCBhID0gciwgYiA9IHNlZyAqIHJvd3MgKyByO1xuICAgICAgY29uc3QgeCA9IG4uZ2V0WChhKSArIG4uZ2V0WChiKSwgeSA9IG4uZ2V0WShhKSArIG4uZ2V0WShiKSwgeiA9IG4uZ2V0WihhKSArIG4uZ2V0WihiKTtcbiAgICAgIGNvbnN0IGwgPSBNYXRoLmh5cG90KHgsIHksIHopIHx8IDE7XG4gICAgICBuLnNldFhZWihhLCB4IC8gbCwgeSAvIGwsIHogLyBsKTtcbiAgICAgIG4uc2V0WFlaKGIsIHggLyBsLCB5IC8gbCwgeiAvIGwpO1xuICAgIH1cbiAgICBuLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZztcbn1cblxuLyoqIEEgc3RlcHBlZCB0YXBlciBhcyBhIGxhdGhlIHByb2ZpbGU6IGByaW5nc2AgYWx0ZXJuYXRpbmcgb3V0L2luIHJhZGlpIGNsaW1iaW5nIGZyb20geTAgdG8geTEuXG4gKiAgT25lIGdlb21ldHJ5LCBvbmUgZHJhdyBjYWxsLCBhbmQgdGhlIHN0ZXAgY291bnQgaXMgYSBwcm9maWxlLXBvaW50IGNvdW50IHJhdGhlciB0aGFuIGEgbWVzaFxuICogIGNvdW50IC0tIHdoaWNoIGlzIHdoYXQga2VlcHMgYSAyMC1yaW5nIGNoZWRpIHNwaXJlIGluc2lkZSBhIDMyLWdlb21ldHJ5IGNlaWxpbmcuICovXG5mdW5jdGlvbiByaW5nZWRUYXBlcih5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByMDogbnVtYmVyLCByMTogbnVtYmVyLCByaW5nczogbnVtYmVyLCBidWxnZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSByaW5nczsgaSsrKSB7XG4gICAgY29uc3QgdCA9IGkgLyByaW5ncztcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IHIgPSByMCArIChyMSAtIHIwKSAqIHQ7XG4gICAgY29uc3Qgc3RlcCA9ICh5MSAtIHkwKSAvIHJpbmdzO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHldKTtcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5ICsgc3RlcCAqIDAuNDVdKTtcbiAgICBwdHMucHVzaChbciwgeSArIHN0ZXAgKiAwLjU1XSk7XG4gIH1cbiAgcHRzLnB1c2goW3IxLCB5MV0pO1xuICByZXR1cm4gcHRzO1xufVxuXG5cbi8qKlxuICogVGhlIFJFREVOVEVEIHNxdWFyZSBwbGFuIC0tIGEgc3F1YXJlIHdob3NlIGZvdXIgY29ybmVycyBhcmUgY3V0IGJhY2sgaW4gdHdvIHJpZ2h0LWFuZ2xlZCBzdGVwcy5cbiAqIEl0IGlzIHRoZSBwbGFuIG9mIGEgVGhhaSBjaGVkaSdzIHRlcnJhY2UgYW5kIG9mIGEgcHJhbmcncyBiYXNlLCBhbmQgYnVpbGRpbmcgaXQgYXMgYSBTaGFwZSB0aGF0XG4gKiBpcyB0aGVuIGV4dHJ1ZGVkIGlzIG5vdCBhIHN0eWxpc3RpYyBjaG9pY2U6IHRoZSBvYnZpb3VzIGFsdGVybmF0aXZlLCBhIHdpZGUgYm94IGNyb3NzZWQgYnkgYVxuICogZGVlcCBib3gsIHB1dHMgdGhlIHR3byBib3hlcycgdG9wIGZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgb3ZlciB0aGVpciB3aG9sZVxuICogaW50ZXJzZWN0aW9uLCB3aGljaCB6LWZpZ2h0cy4gT25lIGV4dHJ1c2lvbiBvZiBvbmUgY2xvc2VkIHBsYW4gaGFzIG5vIGludGVyaW9yIGNvaW5jaWRlbmNlIGF0XG4gKiBhbGwuXG4gKlxuICogYGFgIGlzIHRoZSBoYWxmLXdpZHRoIGFjcm9zcyB0aGUgZmxhdHM7IGByYCBpcyB0aGUgZGVwdGggb2YgZWFjaCByZWRlbnQgc3RlcC5cbiAqL1xuZnVuY3Rpb24gcmVkZW50ZWRTaGFwZShhOiBudW1iZXIsIHI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcXVhZCA9IFtbYSwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSByXSwgW2EgLSAyICogciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhXV07XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgIGZvciAoY29uc3QgW3gsIHpdIG9mIHF1YWQpIHtcbiAgICAgIC8vIHJvdDkwXmssIGFwcGxpZWQgayB0aW1lczogKHgsIHopIC0+ICgteiwgeClcbiAgICAgIGxldCBweCA9IHgsIHB6ID0gejtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgazsgaSsrKSB7IGNvbnN0IHQgPSBweDsgcHggPSAtcHo7IHB6ID0gdDsgfVxuICAgICAgcHRzLnB1c2goW3B4LCBwel0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGJldHdlZW4gdHdvIGhlaWdodHMuIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgYWxvbmcgK1osIHNvIHRoZSByZXN1bHQgaXNcbiAqICByb3RhdGVkIG9udG8gK1k7IGAtTWF0aC5QSSAvIDJgIGFib3V0IFggbWFwcyArWiB0byArWSBhbmQgbGVhdmVzIHRoZSBwbGFuJ3Mgb3duIHggYXMgeC4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVTbGFiKHNoYXBlOiBUSFJFRS5TaGFwZSwgeTA6IG51bWJlciwgeTE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHkxIC0geTAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIC8vIHJvdGF0ZVgoLVBJLzIpIG1hcHMgKHgsIHksIHopIC0+ICh4LCB6LCAteSksIHNvIHRoZSBleHRydXNpb24gZGVwdGggYmVjb21lcyBoZWlnaHQgYW5kIHRoZVxuICAvLyBwbGFuJ3Mgb3duIHNlY29uZCBheGlzIGJlY29tZXMgLXouIEV2ZXJ5IHBsYW4gaGVyZSBpcyBmb3VyLWZvbGQgc3ltbWV0cmljLCBzbyB0aGF0IHNpZ24gaXNcbiAgLy8gaW1tYXRlcmlhbDsgd2hhdCBtYXR0ZXJzIGlzIHRoYXQgdGhlIHNsYWIgbm93IHJ1bnMgVVAgZnJvbSB5PTAgYW5kIG5lZWRzIGxpZnRpbmcgYnkgeTAuXG4gIGcucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSgwLCB5MCwgMCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBzcXVhcmUgcGxhbiB3aXRoIGEgcmVjdGFuZ3VsYXIgTk9UQ0ggY3V0IGludG8gaXRzICtYIGZhY2UgLS0gdGhlIHN0YWlyIHdlbGwgb2YgYSB0ZW1wbGVcbiAqIHRlcnJhY2UuIEN1dHRpbmcgdGhlIHN0YWlyIG91dCBvZiB0aGUgcGxhbiByYXRoZXIgdGhhbiBoYW5naW5nIGl0IG9mZiB0aGUgb3V0c2lkZSBpcyB3aGF0IGtlZXBzXG4gKiBhbiBhc3ltbWV0cmljIGZlYXR1cmUgaW5zaWRlIGEgc3ltbWV0cmljIGRlY2xhcmVkIGVudmVsb3BlOiBhIGZsaWdodCBwcm9qZWN0aW5nIHBhc3QgYSA5IG1cbiAqIHRlcnJhY2Ugd291bGQgcHV0IHRoZSBwcm9wJ3MgYm91bmRpbmcgYm94IG9mZi1jZW50cmUgYW5kIG92ZXIgaXRzIGRlY2xhcmVkIHdpZHRoIG9uIG9uZSBzaWRlLlxuICovXG5mdW5jdGlvbiBub3RjaGVkU3F1YXJlKGE6IG51bWJlciwgbm90Y2hIYWxmWjogbnVtYmVyLCB4SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1thLCAtYV0sIFthLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgbm90Y2hIYWxmWl0sXG4gICAgICAgICAgICAgICBbYSwgbm90Y2hIYWxmWl0sIFthLCBhXSwgWy1hLCBhXSwgWy1hLCAtYV1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFJFQ1RBTkdVTEFSIHBsYW4gd2l0aCBhIG5vdGNoIGN1dCBpbnRvIGl0cyArWiBmYWNlLiBUaGUgc3F1YXJlIHZlcnNpb24gYWJvdmUgaXMgd2hhdCBhIGNoZWRpIG9yXG4gKiBhIHByYW5nIHRlcnJhY2UgbmVlZHM7IGEgaGFsbCB0aGF0IGlzIHR3aWNlIGFzIGxvbmcgYXMgaXQgaXMgd2lkZSBuZWVkcyB0aGUgdHdvIGhhbGYtZXh0ZW50cyBrZXB0XG4gKiBhcGFydCwgYW5kIGl0cyBzdGFpciBpcyBvbiBhIHNob3J0IGVuZCByYXRoZXIgdGhhbiBhIGxvbmcgb25lLlxuICovXG5mdW5jdGlvbiBub3RjaGVkUmVjdChoeDogbnVtYmVyLCBoejogbnVtYmVyLCBueDogbnVtYmVyLCB6SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1toeCwgLWh6XSwgW2h4LCBoel0sIFtueCwgaHpdLCBbbngsIHpJbm5lcl0sIFstbngsIHpJbm5lcl0sIFstbngsIGh6XSwgWy1oeCwgaHpdLCBbLWh4LCAtaHpdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogVGhlIGNyb3NzLXNlY3Rpb24gb2Ygb25lIHJvb2YgdGllciwgYXMgYSBjbG9zZWQgdHJhcGV6b2lkIGluIFhZOiBlYXZlcyBhdCAoKy1oYWxmQmFzZSwgeTApXG4gKiByaXNpbmcgYXQgYHBpdGNoYCAoYXMgYSB0YW5nZW50KSB0byBhIGZsYXQgdG9wIGF0IHkxLlxuICpcbiAqIFRoYWkgdGVtcGxlIHJvb2ZzIG5lc3QsIGFuZCB0aGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSBUUlVOQ0FUSU9OLiBUaHJlZSBmdWxsIGdhYmxlcyBhdCBvbmVcbiAqIHBpdGNoIGNhbm5vdCBuZXN0IC0tIHRoZSB3aWRlc3QgdGllcidzIHJpZGdlIHdvdWxkIGJlIHRoZSBoaWdoZXN0LCB3aGljaCBpcyB1cHNpZGUgZG93bi4gV2hhdFxuICogYWN0dWFsbHkgaGFwcGVucyBpcyB0aGF0IGVhY2ggbG93ZXIgdGllciBpcyBjdXQgb2ZmIGF0IHRoZSBoZWlnaHQgd2hlcmUgdGhlIG5leHQgdGllcidzIGVhdmVzXG4gKiBiZWdpbiwgYW5kIGl0cyB1cHBlciBwYXJ0IGlzIGhpZGRlbiBiZWhpbmQgdGhhdCB0aWVyOyBvbmx5IHRoZSB0b3Btb3N0IHRpZXIgaXMgYSByZWFsIGdhYmxlLFxuICogY2xvc2VkIGJ5IHBhc3NpbmcgeTEgYXQgdGhlIGFwZXguXG4gKi9cbmZ1bmN0aW9uIHRpZXJQcm9maWxlKGhhbGZCYXNlOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHBpdGNoOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGluc2V0ID0gKHkxIC0geTApIC8gcGl0Y2g7XG4gIGNvbnN0IGhhbGZUb3AgPSBoYWxmQmFzZSAtIGluc2V0O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLWhhbGZCYXNlLCB5MCk7XG4gIHNoYXBlLmxpbmVUbyhoYWxmQmFzZSwgeTApO1xuICBpZiAoaGFsZlRvcCA+IDAuMDIpIHtcbiAgICBzaGFwZS5saW5lVG8oaGFsZlRvcCwgeTEpO1xuICAgIHNoYXBlLmxpbmVUbygtaGFsZlRvcCwgeTEpO1xuICB9IGVsc2Uge1xuICAgIHNoYXBlLmxpbmVUbygwLCB5MCArIGhhbGZCYXNlICogcGl0Y2gpOyAgIC8vIGEgcmVhbCByaWRnZTogdGhlIHRvcG1vc3QgdGllciBjbG9zZXMgdG8gYSBwb2ludFxuICB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBhbG9uZyArWiBiZXR3ZWVuIHR3byBkZXB0aHMsIHdpdGggbm8gcm90YXRpb24gLS0gdGhlIG5hdGl2ZSBkaXJlY3Rpb24gb2ZcbiAqICBFeHRydWRlR2VvbWV0cnkuIFVzZWQgd2hlcmUgdGhlIHByb2ZpbGUgZ2VudWluZWx5IGxpdmVzIGluIHRoZSBYWSBwbGFuZSwgc3VjaCBhcyB0aGUgcmFraW5nXG4gKiAgdHJpYW5nbGUgb2YgYSBzdGFpciBjaGVlay4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVBbG9uZ1ooc2hhcGU6IFRIUkVFLlNoYXBlLCB6MDogbnVtYmVyLCB6MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogejEgLSB6MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgZy50cmFuc2xhdGUoMCwgMCwgejApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSByZWN0YW5ndWxhciBwbGF0ZSB3aG9zZSBoZWFkIGlzIGEgaGFsZi1yb3VuZCBhcmNoLCBvcHRpb25hbGx5IGNhcnJ5aW5nIGFuIGFyY2hlZCBhcGVydHVyZSBvZlxuICogIHRoZSBzYW1lIGZvcm0uIFRoZSBhcGVydHVyZSBhcmMgaXMgQUxXQVlTIHN3ZXB0IGZyb20gYW5nbGUgMCB0byBQSTogd3JpdHRlbiB0aGUgb3RoZXIgd2F5IGl0XG4gKiAgcnVucyB1bmRlciB0aGUgY2lyY2xlIGluc3RlYWQgb2Ygb3ZlciBpdCBhbmQgbGVhdmVzIHRoZSBhcmNoIGhlYWQgZmlsbGVkIHNvbGlkLCB3aGljaCByZWFkcyBhc1xuICogIGEgc3F1YXJlIHdpbmRvdyB3aXRoIGEgZ2hvc3QgYXJjaCBkcmF3biBhY3Jvc3MgaXQuICovXG5mdW5jdGlvbiBhcmNoZWRQbGF0ZSh3OiBudW1iZXIsIGg6IG51bWJlciwgYXJjaFI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBob2xlPzogeyByOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC13IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuYWJzYXJjKDAsIHNwcmluZywgYXJjaFIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgc2hhcGUubGluZVRvKC13IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgcC5tb3ZlVG8oaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAubGluZVRvKGhvbGUuciwgaG9sZS5zcHJpbmcpO1xuICAgIHAuYWJzYXJjKDAsIGhvbGUuc3ByaW5nLCBob2xlLnIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgICBwLmxpbmVUbygtaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAuY2xvc2VQYXRoKCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBISVAgUk9PRiB3aXRoIGEgY29uY2F2ZSBzbG9wZSBhbmQgdXBzd2VwdCBjb3JuZXJzIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YsIHdoaWNoIG5vbmUgb2YgdGhlXG4gKiBvdGhlciBzaGFwZSBoZWxwZXJzIGhlcmUgY2FuIGV4cHJlc3MuXG4gKlxuICogSXQgaXMgZ2VuZXJhdGVkIGFzIGEgcmluZyBvZiByZWN0YW5nbGVzIGNsaW1iaW5nIGZyb20gdGhlIGVhdmVzIHRvIHRoZSByaWRnZSByYXRoZXIgdGhhbiBhcyBhblxuICogZXh0cnVkZWQgcHJvZmlsZSwgYmVjYXVzZSBhIGhpcCBzbG9wZXMgb24gYWxsIGZvdXIgc2lkZXM6IGFuIGV4dHJ1c2lvbiBnaXZlcyB2ZXJ0aWNhbCBnYWJsZSBlbmRzLFxuICogd2hpY2ggaXMgYSBkaWZmZXJlbnQgYnVpbGRpbmcuXG4gKlxuICogVGhlIGhvcml6b250YWwgc2hyaW5rIGZvbGxvd3MgYCgxIC0gdCleY3VydmVFeHBgLCBhbmQgdGhlIGV4cG9uZW50IG11c3QgYmUgQUJPVkUgb25lLiBUaGUgc2xvcGVcbiAqIGF0IGFueSBoZWlnaHQgaXMgZHkvZHgsIHNvIGEgcGxhbiB0aGF0IHNocmlua3MgRkFTVCBmb3IgYSBnaXZlbiByaXNlIGlzIGEgc2hhbGxvdyBzbG9wZTogd2l0aFxuICogcSA+IDEgdGhlIGRlcml2YXRpdmUgcSgxLXQpXihxLTEpIGlzIGxhcmdlIGF0IHRoZSBlYXZlcyBhbmQgc21hbGwgYXQgdGhlIHJpZGdlLCB3aGljaCBpcyBzaGFsbG93XG4gKiBlYXZlcyBhbmQgYSBzdGVlcCByaWRnZSAtLSB0aGUgRWFzdCBBc2lhbiByb29mLiBCZWxvdyBvbmUgaXQgaXMgdGhlIG90aGVyIHdheSByb3VuZCBhbmQgYnVpbGRzIGFcbiAqIGZsYXQtdG9wcGVkIHRlbnQsIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGF0dGVtcHQgaGVyZSByZW5kZXJlZC4gQSBsaW5lYXIgc2hyaW5rIGdpdmVzIHRoZVxuICogc3RyYWlnaHQgcHlyYW1pZCBvZiBhIGhpcCByb29mIGFueXdoZXJlIGVsc2UgaW4gdGhlIHdvcmxkLlxuICpcbiAqIGBjb3JuZXJMaWZ0YCByYWlzZXMgYW5kIHB1c2hlcyBvdXQgdGhlIGZvdXIgZWF2ZXMgY29ybmVycywgdGFwZXJpbmcgYXdheSBieSBhIHRoaXJkIG9mIHRoZSB3YXlcbiAqIHVwLiBUaGF0IHVwc3dlZXAgaXMgdGhlIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nIHRoaW5nIGFib3V0IHRoZSByb29mLCBhbmQgaXQgaXMgd2h5IHRoZSBwbGFuXG4gKiBoYWxmLXdpZHRoIHBhc3NlZCBpbiBtdXN0IGxlYXZlIHJvb206IHRoZSBjb3JuZXJzIGVuZCB1cCBmdXJ0aGVyIG91dCB0aGFuIHRoZSBlYXZlcyBsaW5lLlxuICpcbiAqIFRoZSByZXN1bHQgaXMgYSBjbG9zZWQgc29saWQgLS0gb3V0ZXIgc3VyZmFjZSwgYSBzb2ZmaXQgYGRyb3BgIGJlbG93IHRoZSBlYXZlcywgYW5kIGEgZmFzY2lhIGJhbmRcbiAqIGJldHdlZW4gdGhlbS4gQW4gb3BlbiBzaGVsbCB3b3VsZCBsZXQgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueVxuICogbG93IGFuZ2xlLlxuICovXG5mdW5jdGlvbiBoaXBSb29mKGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIHJpZGdlSGFsZlo6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgY3VydmVFeHA6IG51bWJlciwgc3RlcHM6IG51bWJlciwgZHJvcDogbnVtYmVyLCBjb3JuZXJMaWZ0OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIEVJR0hUIHBvaW50cyBwZXIgcmluZywgbm90IGZvdXI6IHRoZSBmb3VyIGNvcm5lcnMgYW5kIHRoZSBmb3VyIGVkZ2UgbWlkcG9pbnRzLiBXaXRoIGZvdXIgdGhlXG4gIC8vIGNvcm5lciBsaWZ0IGhhcyBub3doZXJlIHRvIGZhbGwgYXdheSB0byBhbmQgcmFpc2VzIHRoZSBFTlRJUkUgZWF2ZXMgbGluZSwgd2hpY2ggYnVpbHQgYSBzYWRkbGVcbiAgLy8gaW5zdGVhZCBvZiBhIHJvb2YuIFRoZSBtaWRwb2ludHMgYXJlIHdoYXQgaG9sZCB0aGUgZWF2ZXMgZG93biBiZXR3ZWVuIHRoZSBjb3JuZXJzLlxuICAvL1xuICAvLyBUaGUgb3JkZXIgaXMgKCt4LC16KSwgbWlkLCAoLXgsLXopLCBtaWQsICgteCwreiksIG1pZCwgKCt4LCt6KSwgbWlkLCB3aGljaCBpcyBjb3VudGVyLWNsb2Nrd2lzZVxuICAvLyBzZWVuIGZyb20gQUJPVkUgLS0gdGhlIHdpbmRpbmcgYW4gdXB3YXJkLWZhY2luZyBzdXJmYWNlIG5lZWRzLiBXb3VuZCB0aGUgb3RoZXIgd2F5IHRoZSB3aG9sZVxuICAvLyByb29mIHJlbmRlcnMgaW5zaWRlIG91dCwgd2hpY2ggbG9va3MgbGlrZSBhIHRoaW4gYmxhY2sgbWVtYnJhbmUgcmF0aGVyIHRoYW4gYSBtaXN0YWtlLlxuICBjb25zdCByaW5nID0gKHQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygxIC0gdCwgY3VydmVFeHApO1xuICAgIGNvbnN0IGcgPSBNYXRoLnBvdyhNYXRoLm1heCgwLCAxIC0gdCAvIDAuMzQpLCAyKTtcbiAgICBjb25zdCBsaWZ0ID0gY29ybmVyTGlmdCAqIGcsIG91dCA9IDEgKyAwLjA0NSAqIGc7XG4gICAgY29uc3QgYXggPSBoeCAqIGYgKiBvdXQsIGF6ID0gKHJpZGdlSGFsZlogKyAoaHogLSByaWRnZUhhbGZaKSAqIGYpICogb3V0O1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgYyA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHkgKyBsaWZ0LCB6XTtcbiAgICBjb25zdCBtID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSwgel07XG4gICAgcmV0dXJuIFtjKGF4LCAtYXopLCBtKDAsIC1heiksIGMoLWF4LCAtYXopLCBtKC1heCwgMCksXG4gICAgICAgICAgICBjKC1heCwgYXopLCBtKDAsIGF6KSwgYyhheCwgYXopLCBtKGF4LCAwKV07XG4gIH07XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgbGV0IHByZXYgPSByaW5nKDApO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgY29uc3QgY3VyID0gcmluZyhpIC8gc3RlcHMpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgICAgcHVzaChwcmV2W2tdLCBwcmV2W2syXSwgY3VyW2syXSk7XG4gICAgICBwdXNoKHByZXZba10sIGN1cltrMl0sIGN1cltrXSk7XG4gICAgfVxuICAgIHByZXYgPSBjdXI7XG4gIH1cbiAgLy8gRmFzY2lhIGJhbmQgYW5kIHNvZmZpdCwgc28gdGhlIHJvb2YgaXMgYSBzb2xpZCByYXRoZXIgdGhhbiBhIHNoZWxsLiBBbiBvcGVuIHNoZWxsIGxldHMgdGhlXG4gIC8vIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueSBsb3cgYW5nbGUuXG4gIGNvbnN0IGUgPSByaW5nKDApO1xuICBjb25zdCBsb3cgPSBlLm1hcCgocCkgPT4gW3BbMF0sIHBbMV0gLSBkcm9wLCBwWzJdXSk7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICBwdXNoKGxvd1trXSwgZVtrXSwgZVtrMl0pO1xuICAgIHB1c2gobG93W2tdLCBlW2syXSwgbG93W2syXSk7XG4gIH1cbiAgZm9yIChsZXQgayA9IDE7IGsgPCA3OyBrKyspIHB1c2gobG93WzBdLCBsb3dbayArIDFdLCBsb3dba10pOyAgIC8vIHNvZmZpdCBmYW4sIGZhY2luZyBkb3duXG5cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBSSUJCRUQgZG9tZSAtLSBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiB3aG9zZSByYWRpdXMgaXMgbW9kdWxhdGVkIGFyb3VuZCB0aGUgYXhpcywgc28gaXQgcmVhZHNcbiAqIGFzIHRoZSBtZWxvbi1yaWJiZWQgZG9tZSBvZiBhIG1vc3F1ZSByYXRoZXIgdGhhbiBhIHNtb290aCBoZW1pc3BoZXJlLlxuICpcbiAqIExhdGhlR2VvbWV0cnkgY2Fubm90IGRvIHRoaXM6IGEgbGF0aGUgcmV2b2x2ZXMgb25lIHByb2ZpbGUgYXQgb25lIHJhZGl1cyBwZXIgaGVpZ2h0LCBhbmQgcmlicyBhcmVcbiAqIGEgdmFyaWF0aW9uIEFST1VORCB0aGUgYXhpcywgbm90IGFsb25nIGl0LiBTbyB0aGUgc3VyZmFjZSBpcyBnZW5lcmF0ZWQgZGlyZWN0bHksIHNhbXBsaW5nXG4gKiBgMSArIGFtcCAqIGNvcyhyaWJzICogdGhldGEpYCBwZXIgc2VjdG9yLiBUaGUgcmlicyBhcmUgdGhlIHJlYXNvbiB0aGUgZG9tZSBpcyByZWNvZ25pc2FibGUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20gLS0gYSBzbW9vdGggZ3JlZW4gaGVtaXNwaGVyZSByZWFkcyBhcyBhIHdhdGVyIHRhbmsuXG4gKi9cbmZ1bmN0aW9uIHJpYmJlZERvbWUocHJvZmlsZTogbnVtYmVyW11bXSwgcmliczogbnVtYmVyLCBhbXA6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHZhbGxleT86IG51bWJlcltdLCBzbW9vdGggPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBjb2w6IG51bWJlcltdID0gW107XG4gIC8vIFRoZSByaWJzIGFyZSBub3Qgb25seSBhIHNoYXBlLiBPbiB0aGUgbW9zcXVlJ3MgZG9tZXMgdGhlIGNyZXN0cyBhcmUgcGFsZSBhbmQgdGhlIHZhbGxleXMgYXJlXG4gIC8vIGdyZWVuLCBhbmQgdGhhdCBzdHJpcGUgaXMgbW9zdCBvZiB3aGF0IHRoZSBkb21lIHJlYWRzIGFzIGF0IGRpc3RhbmNlLiBJdCBpcyBjYXJyaWVkIGFzIGFcbiAgLy8gcGVyLXZlcnRleCBNVUxUSVBMSUVSIG9mZiB0aGUgc2FtZSBjb3NpbmUgdGhhdCBzaGFwZXMgdGhlIHJpYiAtLSB0d28gbWVhc3VyZW1lbnRzLCB0aGUgY3Jlc3RcbiAgLy8gY29sb3VyIG9uIHRoZSBtYXRlcmlhbCBhbmQgdGhlIHZhbGxleSBhcyB0aGUgcmF0aW8gYmV0d2VlbiB0aGVtIC0tIHNvIHRoZSBzdHJpcGluZyBjb3N0cyBhblxuICAvLyBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSB0ZXh0dXJlIHNldCBvciBhIHNlY29uZCBkcmF3IGNhbGwuXG4gIGNvbnN0IHRpbnQgPSAoajogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWxsZXkpIHJldHVybiBbMSwgMSwgMV07XG4gICAgLy8gUmFpc2VkIHRvIDAuNTUgcmF0aGVyIHRoYW4gbGVmdCBsaW5lYXIuIEEgY29zaW5lIHNwZW5kcyBoYWxmIGl0cyBhcmVhIG5lYXIgZWFjaCBleHRyZW1lLCBhbmRcbiAgICAvLyB0aGF0IHJlbmRlcnMgYSBkb21lIHRoYXQgaXMgcGFsZSBvdmVyYWxsIHdoZXJlIHRoZSBwbGF0ZSdzIGlzIGdyZWVuIG92ZXJhbGw6IHRoZSBjcmVzdCBpcyBhXG4gICAgLy8gbmFycm93IGhpZ2hsaWdodCBvbiBhIHJlYWwgcmliLCBub3QgaGFsZiBvZiBpdC4gVGhlIGV4cG9uZW50IHdpZGVucyB0aGUgdmFsbGV5LlxuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygoMSAtIE1hdGguY29zKHJpYnMgKiAoKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWcpKSkgLyAyLCAwLjU1KTtcbiAgICByZXR1cm4gWzEgKyAodmFsbGV5WzBdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsxXSAtIDEpICogZiwgMSArICh2YWxsZXlbMl0gLSAxKSAqIGZdO1xuICB9O1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgY29uc3QgZiA9IDEgKyBhbXAgKiBNYXRoLmNvcyhyaWJzICogdGgpO1xuICAgIGNvbnN0IHIgPSBwcm9maWxlW2ldWzBdICogZjtcbiAgICByZXR1cm4gW01hdGguc2luKHRoKSAqIHIsIHByb2ZpbGVbaV1bMV0sIE1hdGguY29zKHRoKSAqIHJdO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2ZpbGUubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGksIGopLCBiID0gYXQoaSwgaiArIDEpLCBjID0gYXQoaSArIDEsIGogKyAxKSwgZCA9IGF0KGkgKyAxLCBqKTtcbiAgICAgIHB1c2goYSwgYiwgYyk7XG4gICAgICBwdXNoKGEsIGMsIGQpO1xuICAgICAgY29uc3QgdGEgPSB0aW50KGopLCB0YiA9IHRpbnQoaiArIDEpO1xuICAgICAgY29sLnB1c2goLi4udGEsIC4uLnRiLCAuLi50YiwgLi4udGEsIC4uLnRiLCAuLi50YSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBpZiAodmFsbGV5KSBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sKSwgMykpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIC8vIGBzbW9vdGhgIGF2ZXJhZ2VzIHRoZSBub3JtYWxzIG9mIGV2ZXJ5IHZlcnRleCBzaGFyaW5nIGEgcG9zaXRpb24sIHNvIGEgbG93LXNlY3RvciBmbG93ZXIgaGVhZFxuICAvLyBvciBwb21wb20gc2hhZGVzIGFzIGEgcm91bmRlZCBzb2xpZCByYXRoZXIgdGhhbiBhIGN1dCBnZW0uIFRoZSBzb3VwIGlzIG5vbi1pbmRleGVkLCBzbyB0aGVcbiAgLy8gZmFjZXRlZCBkZWZhdWx0IGlzIHdoYXQgY29tcHV0ZVZlcnRleE5vcm1hbHMgZ2l2ZXM7IHRoZSBtb3NxdWUncyBkb21lcyBrZWVwIGl0LlxuICBpZiAoc21vb3RoKSB7XG4gICAgY29uc3QgcG9zID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlLCBucm0gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgIGNvbnN0IGFjYyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXJbXT4oKTtcbiAgICBjb25zdCBrZXkgPSAoaTogbnVtYmVyKSA9PiBgJHtwb3MuZ2V0WChpKS50b0ZpeGVkKDUpfSwke3Bvcy5nZXRZKGkpLnRvRml4ZWQoNSl9LCR7cG9zLmdldFooaSkudG9GaXhlZCg1KX1gO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zLmNvdW50OyBpKyspIHsgY29uc3QgayA9IGtleShpKSwgYSA9IGFjYy5nZXQoaykgPz8gWzAsIDAsIDBdOyBhWzBdICs9IG5ybS5nZXRYKGkpOyBhWzFdICs9IG5ybS5nZXRZKGkpOyBhWzJdICs9IG5ybS5nZXRaKGkpOyBhY2Muc2V0KGssIGEpOyB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3MuY291bnQ7IGkrKykgeyBjb25zdCBhID0gYWNjLmdldChrZXkoaSkpISwgbCA9IE1hdGguaHlwb3QoYVswXSwgYVsxXSwgYVsyXSkgfHwgMTsgbnJtLnNldFhZWihpLCBhWzBdIC8gbCwgYVsxXSAvIGwsIGFbMl0gLyBsKTsgfVxuICAgIG5ybS5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBQT0lOVEVEIGFyY2ggcGxhdGUgLS0gdGhlIHR3by1jZW50cmVkIGFyY2ggb2YgYSBtb3NxdWUsIG5vdCB0aGUgaGFsZi1yb3VuZCBvZiBhIFJvbWFuIG9uZS5cbiAqIGBhcmNoZWRQbGF0ZWAgYWJvdmUgc3dlZXBzIGEgc2luZ2xlIHNlbWljaXJjbGUsIHdoaWNoIGlzIHRoZSB3cm9uZyBhcmNoIGhlcmUgYW5kIHJlYWRzIGFzIGFcbiAqIHJhaWx3YXkgdmlhZHVjdDsgdGhpcyBvbmUgcnVucyBlYWNoIHNpZGUgdXAgdG8gYSBzaGFyZWQgYXBleCB0aHJvdWdoIGEgcXVhZHJhdGljLCB3aGljaCBnaXZlcyB0aGVcbiAqIG9nZWUgcG9pbnQuXG4gKi9cbmZ1bmN0aW9uIHBvaW50ZWRBcmNoU2hhcGUodzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob2xlPzogeyB3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgYnVpbGQgPSAodGFyZ2V0OiBUSFJFRS5TaGFwZSB8IFRIUkVFLlBhdGgsIHd3OiBudW1iZXIsIHNwOiBudW1iZXIsIHJpc2U6IG51bWJlciwgc2w6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGh3ID0gd3cgLyAyO1xuICAgIHRhcmdldC5tb3ZlVG8oaHcsIHNsKTtcbiAgICB0YXJnZXQubGluZVRvKGh3LCBzcCk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oaHcsIHNwICsgcmlzZSAqIDAuNzIsIDAsIHNwICsgcmlzZSk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oLWh3LCBzcCArIHJpc2UgKiAwLjcyLCAtaHcsIHNwKTtcbiAgICB0YXJnZXQubGluZVRvKC1odywgc2wpO1xuICAgIHRhcmdldC5jbG9zZVBhdGgoKTtcbiAgfTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgYnVpbGQoc2hhcGUsIHcsIHNwcmluZywgYXBleFJpc2UsIHNpbGwpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIGJ1aWxkKHAsIGhvbGUudywgaG9sZS5zcHJpbmcsIGhvbGUuYXBleFJpc2UsIGhvbGUuc2lsbCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBUQVBFUklORyBUVUJFIGFsb25nICtaLCBidWlsdCBmcm9tIGEgbGlzdCBvZiBzdGF0aW9ucy4gRWFjaCBzdGF0aW9uIGlzXG4gKiBbeiwgY2VudHJlWCwgY2VudHJlWSwgcmFkaXVzWCwgcmFkaXVzWV0sIGFuZCBjb25zZWN1dGl2ZSBzdGF0aW9ucyBhcmUgam9pbmVkIGJ5IGEgcmluZyBvZiBgc2VnYFxuICogcG9pbnRzLCBzbyB0aGUgcmFkaXVzLCB0aGUgY2VudHJlIGFuZCB0aGUgZWxsaXBzZSByYXRpbyBjYW4gYWxsIHZhcnkgYWxvbmcgdGhlIGxlbmd0aC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvbmx5IE9SR0FOSUMgZm9ybSBpbiB0aGUgd2hvbGUga2l0LCBhbmQgaXQgZXhpc3RzIGZvciBvbmUgcHJvcDogYSByZWNsaW5pbmcgZmlndXJlIGlzXG4gKiBhIGxvbmcgc29mdCBtYXNzIHdob3NlIHNlY3Rpb24gY2hhbmdlcyBhdCBldmVyeSBwb2ludCBhbG9uZyBpdCAtLSBzaG91bGRlciB0byB3YWlzdCB0byBoaXAgdG9cbiAqIGNhbGYgLS0gYW5kIG5laXRoZXIgYSBsYXRoZSBub3IgYSBzdGFjayBvZiBib3hlcyBjYW4gc2F5IHRoYXQuIEEgYm94IGRlY29tcG9zaXRpb24gb2YgYSBseWluZ1xuICogYm9keSBpcyBub3QgYSBsb3ctcG9seSBib2R5LCBpdCBpcyBhIHBpbGUgb2YgbHVnZ2FnZS5cbiAqXG4gKiBBIHN0YXRpb24gd2l0aCBhIHJhZGl1cyBhdCBvciBuZWFyIHplcm8gY2xvc2VzIHRoZSB0dWJlLCBzbyB0aGUgZW5kcyBjYW4gYmUgY2FwcGVkIGJ5IHRoZVxuICogc3RhdGlvbiBsaXN0IGl0c2VsZiByYXRoZXIgdGhhbiBieSBhIHNlcGFyYXRlIGZhbi5cbiAqL1xuZnVuY3Rpb24gdHViZUFsb25nKHN0YXRpb25zOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gSU5ERVhFRCwgd2l0aCBzaGFyZWQgcmluZyB2ZXJ0aWNlcywgc28gY29tcHV0ZVZlcnRleE5vcm1hbHMgYXZlcmFnZXMgYWNyb3NzIHRoZSBxdWFkcyBhbmQgdGhlXG4gIC8vIHN1cmZhY2Ugc2hhZGVzIHNtb290aC4gVGhlIGZpcnN0IGJ1aWxkIGVtaXR0ZWQgbG9vc2UgdHJpYW5nbGVzLCBhbmQgYSBmbGF0LXNoYWRlZCBzb2Z0IGJvZHlcbiAgLy8gc2hvd3MgZXZlcnkgc3RhdGlvbiBhcyBhIGNyZWFzZSAtLSBhIHJlY2xpbmluZyBmaWd1cmUgdGhhdCBsb29rZWQgY3J1bXBsZWQgcmF0aGVyIHRoYW4gZHJhcGVkLlxuICAvL1xuICAvLyBBIHNpeHRoIHN0YXRpb24gZWxlbWVudCBgZmxhdFlgIENMQU1QUyB0aGUgcmluZydzIHVuZGVyc2lkZSB0byB0aGF0IGhlaWdodC4gQSBib2R5IHJlc3Rpbmcgb25cbiAgLy8gdGhlIGdyb3VuZCBpcyBub3QgYSBmbG9hdGluZyBlbGxpcHNlOiBpdCBzcHJlYWRzIHdoZXJlIGl0IGJlYXJzLCBhbmQgYW4gdW5jbGFtcGVkIHR1YmUgcmVhZHMgYXNcbiAgLy8gYSBzYXVzYWdlIG9uIGEgdGFibGUuIFRoZSBjbGFtcCBpcyBhIHNvZnQgb25lIC0tIHRoZSByaW5nIGtlZXBzIGl0cyB3aWR0aCBhbmQgbG9zZXMgaXRzIGRyb29wIC0tXG4gIC8vIHNvIHRoZSBjcmVhc2UgaXQgbGVhdmVzIGlzIHRoZSBjb250YWN0IGVkZ2UgcmF0aGVyIHRoYW4gYSBjdXQuXG4gIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgW3osIGN4LCBjeSwgcngsIHJ5LCBmbGF0WV0gPSBzdGF0aW9uc1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCB0aCA9IGogKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguc2luKHRoKSAqIHJ4O1xuICAgICAgbGV0IHkgPSBjeSArIE1hdGguY29zKHRoKSAqIHJ5O1xuICAgICAgaWYgKGZsYXRZICE9PSB1bmRlZmluZWQgJiYgeSA8IGZsYXRZKSB5ID0gZmxhdFk7XG4gICAgICBwb3MucHVzaCh4LCB5LCB6KTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gaSAqIHNlZyArIGosIGIgPSAoaSArIDEpICogc2VnICsgaiwgYyA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgICBpZHgucHVzaChhLCBiLCBjLCBhLCBjLCBkKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIGN1cmxlZCBob3JuOiBgbmAgdGFwZXJpbmcgYm94IHNlZ21lbnRzIHNhbXBsZWQgYWxvbmcgYSBzaW5lLCBlYWNoIHJvdGF0ZWQgdG8gaXRzIG93biB0YW5nZW50LlxuICogU2hhcmVkIGJ5IHRoZSB1Ym9zb3QncyBjaG9mYSwgdGhlIHByYW5nJ3MgdHJpZGVudCBwcm9uZ3MgYW5kIHRoZSBDaGluZXNlIHNocmluZSdzIGZseWluZyBlYXZlcyxcbiAqIGJlY2F1c2UgYWxsIHRocmVlIGFyZSB0aGUgc2FtZSBwcm9ibGVtIC0tIGEgc3RyYWlnaHQgc3Bpa2UgYXQgYSByb29mIGVuZCByZWFkcyBhcyBhIGxpZ2h0bmluZyByb2RcbiAqIGFuZCB0aGUgY3VybCBpcyB0aGUgd2hvbGUgZmVhdHVyZS5cbiAqL1xuZnVuY3Rpb24gY3VybGVkSG9ybihyZWFjaDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHRoaWNrOiBudW1iZXIsIG4gPSA2KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGF0ID0gKHU6IG51bWJlcikgPT4gW3JlYWNoICogTWF0aC5zaW4odSAqIE1hdGguUEkgKiAwLjQ2KSwgcmlzZSAqIHVdO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGNvbnN0IGEgPSBhdChqIC8gbiksIGIgPSBhdCgoaiArIDEpIC8gbik7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCB3ID0gdGhpY2sgKiAoMSAtIGogLyBuKSArIHRoaWNrICogMC4yODtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIE1hdGguaHlwb3QoZHgsIGR5KSArIHRoaWNrICogMC4yLCB3KTtcbiAgICBnLnJvdGF0ZVooTWF0aC5hdGFuMigtZHgsIGR5KSk7XG4gICAgZy50cmFuc2xhdGUoKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyLCAwKTtcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlR2VvcyhzZWdzKTtcbn1cblxuLyoqXG4gKiBSYW1wIGEgcGVyLXZlcnRleCB0aW50IG92ZXIgYSBoZWlnaHQgYmFuZCwgYXMgYSBNVUxUSVBMSUVSIG9uIHRoZSBtYXRlcmlhbCBjb2xvdXIuXG4gKlxuICogVGhpcyBpcyBob3cgYSBsb2NhbCBtYXRlcmlhbCBvdmVycmlkZSBnZXRzIGRlbGl2ZXJlZCBvbiBhIG1lcmdlZCBjb21wb25lbnQgdGhhdCBpcyBvbmUgbWVzaCBhbmRcbiAqIG11c3Qgc3RheSBvbmUgZHJhdyBjYWxsOiBhIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgc3VibWlzc2lvbiBhbmQgYSBzaGFkZXIgc3dpdGNoIHRvIHNheVxuICogdGhhdCB0aGUgYm90dG9tIG9mIGEgd2FsbCBpcyBkaXJ0aWVyIHRoYW4gdGhlIHRvcC4gYHJnYjBgIGlzIHRoZSBtZWFzdXJlZCB0aW50IGF0IHkwIGV4cHJlc3NlZFxuICogYXMgYSBmcmFjdGlvbiBvZiB0aGUgbWF0ZXJpYWwncyBvd24gbWVhc3VyZWQgYWxiZWRvLCBzbyB0aGUgdG9wIG9mIHRoZSBiYW5kIGlzIHVudGludGVkIDEuMCBhbmRcbiAqIHRoZSBudW1iZXJzIGJlbG93IHN0YXkgdHJhY2VhYmxlIHRvIHR3byBjcm9wIG1lYXN1cmVtZW50cyByYXRoZXIgdGhhbiB0byBhIGNob3NlbiBkYXJrZW5pbmcuXG4gKi9cbmZ1bmN0aW9uIHRpbnRCeUhlaWdodChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByZ2IwOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChwLmdldFkoaSkgLSB5MCkgLyAoeTEgLSB5MCkpKTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IDM7IGMrKykgY29sW2kgKiAzICsgY10gPSByZ2IwW2NdICsgKDEgLSByZ2IwW2NdKSAqIHQ7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdmVoaWNsZSBoZWxwZXJzICovXG5cbi8qKiBQYWludCBhIHdob2xlIGdlb21ldHJ5IG9uZSB2ZXJ0ZXggY29sb3VyLiBFdmVyeSB2ZWhpY2xlIG1hdGVyaWFsIGhlcmUgaXMgV0hJVEUgd2l0aFxuICogIHZlcnRleENvbG9ycyBvbiwgc28gYSBjb2xvdXIgZGlmZmVyZW5jZSBjb3N0cyBhbiBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSBtYXRlcmlhbDogdGhlIGJvZHknc1xuICogIHR3by10b25lLCB0aGUgdHlyZSBhZ2FpbnN0IGl0cyByaW0sIGFuIGFtYmVyIGluZGljYXRvciBvbiBhIGJsYWNrIGJ1bXBlciBhbGwgcmlkZSBvbmUgc2hhZGVyLlxuICogIFZlcnRleCBjb2xvdXJzIG11bHRpcGx5IGluIExJTkVBUiBzcGFjZSwgc28gdGhlIGhleCBpcyBjb252ZXJ0ZWQgdGhyb3VnaCBUSFJFRS5Db2xvciwgd2hpY2hcbiAqICBkb2VzIHRoZSBzUkdCLXRvLWxpbmVhciBzdGVwLiAqL1xuZnVuY3Rpb24gdGludEdlbyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBoZXg6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcihoZXgpO1xuICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjsgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBCb3gtcHJvamVjdCB3b3JsZC1tZXRyZSBVVnMgc28gYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSAobXVkLCBydXN0LCBjb3JydWdhdGlvbikgcmVwZWF0c1xuICogIGF0IGEgcmVhbCBzaXplIG9uIGV2ZXJ5IGZhY2UuIGBzY2FsZWAgaXMgbWV0cmVzIHBlciB0aWxlLiBUaGUgZG9taW5hbnQgbm9ybWFsIGF4aXMgcGlja3MgdGhlXG4gKiAgcGFpciBvZiB3b3JsZCBheGVzIHVzZWQsIHNvIGEgcm9vZiByZWFkcyAoeCwgeikgYW5kIGEgc2lkZSByZWFkcyAoeiwgeSkuICovXG5mdW5jdGlvbiB3b3JsZFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXkgPSBNYXRoLmFicyhucm0uZ2V0WShpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGxldCB1OiBudW1iZXIsIHY6IG51bWJlcjtcbiAgICBpZiAoYXggPj0gYXkgJiYgYXggPj0gYXopIHsgdSA9IHAuZ2V0WihpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIGVsc2UgaWYgKGF5ID49IGF6KSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFooaSk7IH1cbiAgICBlbHNlIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqXG4gKiBTSURFLVBST0ZJTEUgRVhUUlVTSU9OOiBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgKHRoZSB2ZWhpY2xlJ3Mgc2lkZSBzaWxob3VldHRlLCB3aGVlbFxuICogYXJjaGVzIGluY2x1ZGVkIGFzIG5vdGNoZXMpIHN3ZXB0IGFjcm9zcyB0aGUgZnVsbCB3aWR0aCwgdGhlbiBzaGFwZWQgcGVyIHZlcnRleDpcbiAqXG4gKiAgLSBgdHVtYmxlYCAgbmFycm93cyB0aGUgc2VjdGlvbiBhYm92ZSB0aGUgYmVsdCBsaW5lIC0tIHggaXMgc2NhbGVkIGJ5ICgxIC0gayAqIHQpIHdoZXJlIHQgcnVuc1xuICogICAgICAgICAgICAgIDAgYXQgYGJlbHRgIHRvIDEgYXQgYHJvb2ZgLiBUaGF0IGlzIHRoZSB0dW1ibGVob21lIG9mIGEgcmVhbCBjYXIgYm9keSBhbmQgaXMgd2hhdFxuICogICAgICAgICAgICAgIHN0b3BzIHRoZSBnbGFzc2hvdXNlIHJlYWRpbmcgYXMgYSBib3ggb24gYSBib3guXG4gKiAgLSBgcGxhbmAgICAgcm91bmRzIHRoZSBwbGFuIGF0IHRoZSBub3NlIGFuZCB0YWlsOiBhbiBvcHRpb25hbCBsaXN0IG9mIFt6LCB4U2NhbGVdIHN0YXRpb25zXG4gKiAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkIGFsb25nIHosIHNvIGEgYm9ubmV0IGNhbiB0YXBlciB0byAwLjkgb2YgdGhlIHdpZHRoIGF0IHRoZSBidW1wZXIgbGluZS5cbiAqXG4gKiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGluIGl0cyBvd24gKHUsIHYsIGRlcHRoKSBmcmFtZTsgcm90YXRlWSgtUEkvMikgbWFwcyBkZXB0aCB0byAteCBhbmQgdSB0b1xuICogd29ybGQgeiwgYW5kIHRoZSB0cmFuc2xhdGUgcmUtY2VudHJlcyB0aGUgc2xhYiBvbiB4ID0gMC4gQW55IHNoYXBpbmcgaXMgYXBwbGllZCBBRlRFUiB0aGF0LCBhbmRcbiAqIG5vcm1hbHMgYXJlIHJlY29tcHV0ZWQgbGFzdCBzbyB0aGUgc2hhZGVkIGZhY2VzIGZvbGxvdyB0aGUgc2hhcGVkIHN1cmZhY2UuXG4gKi9cbmZ1bmN0aW9uIHNpZGVFeHRydWRlKHByb2ZpbGU6IG51bWJlcltdW10sIHdpZHRoOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBvcHRzOiB7IHR1bWJsZT86IHsgYmVsdDogbnVtYmVyLCByb29mOiBudW1iZXIsIGs6IG51bWJlciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFuPzogbnVtYmVyW11bXSwgY3VydmVTZWdtZW50cz86IG51bWJlciB9ID0ge30pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwcm9maWxlWzBdWzBdLCBwcm9maWxlWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9maWxlLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHJvZmlsZVtpXVswXSwgcHJvZmlsZVtpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogd2lkdGgsIGJldmVsRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZVNlZ21lbnRzOiBvcHRzLmN1cnZlU2VnbWVudHMgPz8gNiB9KTtcbiAgZy5yb3RhdGVZKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKHdpZHRoIC8gMiwgMCwgMCk7XG4gIHNoYXBlV2lkdGgoZywgb3B0cyk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogVGhlIHBlci12ZXJ0ZXggeCBzaGFwaW5nIHNoYXJlZCBieSB0aGUgYm9keSBhbmQgaXRzIGdsYXNzIGJhbmQsIHNvIGEgcGFuZSBvZmZzZXQgNSBtbSBwcm91ZCBvZlxuICogIHRoZSBib2R5IHN0YXlzIDUgbW0gcHJvdWQgYWZ0ZXIgYm90aCBhcmUgbmFycm93ZWQgYnkgdGhlIHNhbWUgZnVuY3Rpb24uICovXG5mdW5jdGlvbiBzaGFwZVdpZHRoKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LFxuICAgICAgICAgICAgICAgICAgICBvcHRzOiB7IHR1bWJsZT86IHsgYmVsdDogbnVtYmVyLCByb29mOiBudW1iZXIsIGs6IG51bWJlciB9LCBwbGFuPzogbnVtYmVyW11bXSB9KTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBsZXQgeCA9IHAuZ2V0WChpKTsgY29uc3QgeSA9IHAuZ2V0WShpKSwgeiA9IHAuZ2V0WihpKTtcbiAgICBpZiAob3B0cy50dW1ibGUpIHtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAoeSAtIG9wdHMudHVtYmxlLmJlbHQpIC8gKG9wdHMudHVtYmxlLnJvb2YgLSBvcHRzLnR1bWJsZS5iZWx0KSkpO1xuICAgICAgeCAqPSAxIC0gb3B0cy50dW1ibGUuayAqIHQ7XG4gICAgfVxuICAgIGlmIChvcHRzLnBsYW4gJiYgb3B0cy5wbGFuLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHN0ID0gb3B0cy5wbGFuO1xuICAgICAgbGV0IHMgPSBzdFswXVsxXTtcbiAgICAgIGlmICh6IDw9IHN0WzBdWzBdKSBzID0gc3RbMF1bMV07XG4gICAgICBlbHNlIGlmICh6ID49IHN0W3N0Lmxlbmd0aCAtIDFdWzBdKSBzID0gc3Rbc3QubGVuZ3RoIC0gMV1bMV07XG4gICAgICBlbHNlIGZvciAobGV0IGsgPSAwOyBrIDwgc3QubGVuZ3RoIC0gMTsgaysrKSB7XG4gICAgICAgIGlmICh6ID49IHN0W2tdWzBdICYmIHogPD0gc3RbayArIDFdWzBdKSB7XG4gICAgICAgICAgY29uc3QgdSA9ICh6IC0gc3Rba11bMF0pIC8gKHN0W2sgKyAxXVswXSAtIHN0W2tdWzBdKTtcbiAgICAgICAgICBzID0gc3Rba11bMV0gKyAoc3RbayArIDFdWzFdIC0gc3Rba11bMV0pICogdTsgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHggKj0gcztcbiAgICB9XG4gICAgcC5zZXRYKGksIHgpO1xuICB9XG4gIHAubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG59XG5cbi8qKiBBIHNlbWljaXJjdWxhciB3aGVlbC1hcmNoIG5vdGNoIGFzIHByb2ZpbGUgcG9pbnRzLCB0byBiZSBzcGxpY2VkIGludG8gYSBzaWRlIHByb2ZpbGUgdGhhdCBydW5zXG4gKiAgYWxvbmcgdGhlIHNpbGwgZnJvbSAreiB0byAteiAoaS5lLiB6IERFQ1JFQVNJTkcpLiBgbmAgc2VnbWVudHM7IHRoZSBhcmMgaXMgdGhlIFRPUCBoYWxmLiAqL1xuZnVuY3Rpb24gYXJjaE5vdGNoKHpjOiBudW1iZXIsIHlTaWxsOiBudW1iZXIsIHI6IG51bWJlciwgbiA9IDcpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBpICogTWF0aC5QSSAvIG47ICAgICAgICAgICAgICAgLy8gMCAuLiBQSSwgZnJvbSAreiByb3VuZCB0aGUgdG9wIHRvIC16XG4gICAgcHRzLnB1c2goW3pjICsgTWF0aC5jb3MoYSkgKiByLCB5U2lsbCArIE1hdGguc2luKGEpICogcl0pO1xuICB9XG4gIHJldHVybiBwdHM7XG59XG5cbi8qKlxuICogQSBXSEVFTDogb25lIGxhdGhlIGFib3V0IHRoZSBheGxlLiBUaGUgcHJvZmlsZSBydW5zIGZyb20gdGhlIGh1YiBmYWNlIG9uIG9uZSBzaWRlIG92ZXIgdGhlIHJpbVxuICogbGlwLCB0aGUgdHlyZSBzaWRld2FsbCwgdGhlIHRyZWFkIGFuZCBiYWNrIGRvd24gdGhlIGZhciBzaWRlLCBzbyB0aGUgd2hlZWwgaXMgYSBjbG9zZWQgc29saWQgd2l0aFxuICogbm8gb3BlbiBlbmQgZm9yIHRoZSB0dXJudGFibGUgZ2F0ZSB0byByZWFkIHRocm91Z2guIFJldm9sdmVkIGFib3V0IFkgYW5kIHRoZW4gbGFpZCBvbiBYLCBzbyB0aGVcbiAqIGF4bGUgaXMgdGhlIHggYXhpcyBhbmQgdGhlIHdoZWVsIHJvbGxzIGFib3V0IGl0IC0tIHdoaWNoIGlzIHRoZSBheGlzIGl0cyBwaXZvdCBkZWNsYXJlcy5cbiAqXG4gKiBUd28gdmVydGV4IGNvbG91cnM6IGByaW1IZXhgIG9uIHRoZSBodWIgYW5kIHJpbSBwb2ludHMsIGB0eXJlSGV4YCBvbiB0aGUgc2lkZXdhbGwgYW5kIHRyZWFkLiBUaGVcbiAqIGxhdGhlIG9yZGVycyB2ZXJ0aWNlcyBzZWdtZW50LW1ham9yIChpbmRleCA9IHNlZyAqIHBvaW50Q291bnQgKyBwb2ludCksIHdoaWNoIGlzIHdoYXQgbGV0cyBhXG4gKiBwZXItcHJvZmlsZS1wb2ludCBjb2xvdXIgYmUgd3JpdHRlbiB3aXRob3V0IGEgc2Vjb25kIGdlb21ldHJ5LlxuICovXG5mdW5jdGlvbiB3aGVlbEdlbyhyVHlyZTogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgdHlyZUhleDogbnVtYmVyLCByaW1IZXg6IG51bWJlciwgZGlzaCA9IDAuNTUpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGh3ID0gaGFsZlc7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtcbiAgICBbMCwgLWh3ICogZGlzaF0sIFtyUmltICogMC4zMCwgLWh3ICogZGlzaF0sIFtyUmltICogMC42MiwgLWh3ICogMC44MF0sIFtyUmltLCAtaHcgKiAwLjg2XSwgW3JSaW0sIC1odyAqIDAuOThdLFxuICAgIFtyVHlyZSAqIDAuOTMsIC1od10sIFtyVHlyZSwgLWh3ICogMC43Ml0sIFtyVHlyZSwgaHcgKiAwLjcyXSwgW3JUeXJlICogMC45MywgaHddLFxuICAgIFtyUmltLCBodyAqIDAuOThdLCBbclJpbSwgaHcgKiAwLjg2XSwgW3JSaW0gKiAwLjYyLCBodyAqIDAuODBdLCBbclJpbSAqIDAuMzAsIGh3ICogZGlzaF0sIFswLCBodyAqIGRpc2hdLFxuICBdO1xuICBjb25zdCByaW1Qb2ludCA9IChqOiBudW1iZXIpID0+IGogPD0gNCB8fCBqID49IDk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihwWzBdLCBwWzFdKSksIHNlZyk7XG4gIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGNvbnN0IGN0ID0gbmV3IFRIUkVFLkNvbG9yKHR5cmVIZXgpLCBjciA9IG5ldyBUSFJFRS5Db2xvcihyaW1IZXgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGMgPSByaW1Qb2ludChpICUgcHRzLmxlbmd0aCkgPyBjciA6IGN0O1xuICAgIGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICBnLnJvdGF0ZVooTWF0aC5QSSAvIDIpOyAgICAvLyBsYXRoZSBheGlzIFkgLT4gYXhsZSBvbiBYXG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBXaXJlLXNwb2tlZCB3aGVlbCBkcmVzc2luZzogYG5gIHRoaW4gYm94ZXMgcmFkaWF0aW5nIGZyb20gdGhlIGh1YiwgbGFjZWQgYWx0ZXJuYXRlbHkgdG8gZWFjaFxuICogIHNpZGUgb2YgdGhlIHJpbSBzbyB0aGV5IGNyb3NzIHRoZSB3YXkgcmVhbCBzcG9rZXMgZG8uIE1lcmdlZCBpbnRvIHRoZSB3aGVlbCBnZW9tZXRyeSBzbyB0aGVcbiAqICB3aGVlbCBzdGF5cyBPTkUgaW5zdGFuY2VkIGdlb21ldHJ5LiAqL1xuZnVuY3Rpb24gc3Bva2VzKHJIdWI6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBuOiBudW1iZXIsIGhleDogbnVtYmVyLCB0ID0gMC4wMDYsIHByaXNtID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgKiAyIC8gbjtcbiAgICBjb25zdCBzaWRlID0gKGkgJSAyID09PSAwID8gMSA6IC0xKSAqIGhhbGZXICogMC4zNTtcbiAgICBjb25zdCBsZW4gPSByUmltIC0gckh1YjtcbiAgICAvLyBgcHJpc21gOiBhbiBvcGVuIHRocmVlLXNpZGVkIHByaXNtIGF0IHNpeCB0cmlhbmdsZXMgd2hlcmUgdGhlIGJveCBjb3N0cyB0d2VsdmUgLS0gYSB3aXJlXG4gICAgLy8gc3Bva2UgaGFzIG5vIHJlc29sdmFibGUgc2VjdGlvbiBhdCBwcm9wIGRpc3RhbmNlLCBhbmQgMjggb2YgdGhlbSBvbiB0aHJlZSB3aGVlbHMgaXMgdGhlXG4gICAgLy8gZGlmZmVyZW5jZSBiZXR3ZWVuIGEgbGFyZ2UgcHJvcCBpbnNpZGUgaXRzIHRyaWFuZ2xlIGNlaWxpbmcgYW5kIG9uZSBvdmVyIGl0XG4gICAgY29uc3QgZyA9IHByaXNtID8gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkodCAqIDAuNjIsIHQgKiAwLjYyLCBsZW4sIDMsIDEsIHRydWUpIDogbmV3IFRIUkVFLkJveEdlb21ldHJ5KHQsIGxlbiwgdCk7XG4gICAgZy50cmFuc2xhdGUoMCwgckh1YiArIGxlbiAvIDIsIDApO1xuICAgIGcucm90YXRlWChNYXRoLmF0YW4yKHNpZGUsIGxlbikgKiAwLjYpO1xuICAgIGcucm90YXRlWCgwKTsgZy50cmFuc2xhdGUoMCwgMCwgc2lkZSAqIDAuNSk7XG4gICAgZy5yb3RhdGVYKGEpOyAgICAgICAgICAgIC8vIHJhZGlhdGUgYXJvdW5kIHRoZSBheGxlICh4KVxuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gdGludEdlbyhtZXJnZUdlb3Moc2VncyksIGhleCk7XG59XG5cbi8qKiBBIHBvbHlsaW5lIFRVQkU6IG9uZSBjeWxpbmRlciBwZXIgc2VnbWVudCwgZWFjaCByb3RhdGVkIG9udG8gaXRzIGNob3JkLCB3aXRoIGEgc21hbGwgc3BoZXJlLWxlc3NcbiAqICBvdmVybGFwIHNvIHRoZSBqb2ludHMgY2xvc2UuIEhhbmRsZWJhcnMsIGNhbm9weSByYWlscywgcm9sbCBjYWdlcyBhbmQgZnJhbWUgdHViZXMuICovXG4vKipcbiAqIGByYCBtYXkgYmUgYSBzaW5nbGUgcmFkaXVzIChldmVyeSBzZWdtZW50IHRoZSBzYW1lLCB0aGUgb3JpZ2luYWwgYmVoYXZpb3VyKSBvciBPTkUgUkFESVVTIFBFUlxuICogU1RBVElPTiwgd2hpY2ggdGFwZXJzIHRoZSB0dWJlLiBBIGNhcHBlZCBjb25zdGFudC1yYWRpdXMgdHViZSBlbmRzIGluIGEgZmxhdCBkaXNjLCBhbmQgb24gdGhlXG4gKiBzcGlyaXQgaG91c2UncyBlYXZlIGhvcm5zIHRoYXQgcmVhZCBhcyBmb3VyIGN1dC1vZmYgcG9zdHMgcmF0aGVyIHRoYW4gcG9pbnRzOyBhIGhvcm4sIGEgc3Bpa2Ugb3JcbiAqIGEgd2hpc2tlciBuZWVkcyBpdHMgbGFzdCBzdGF0aW9uIGF0IH4wLjI1IG9mIHRoZSBmYXNjaWEgcmFkaXVzLiBUaGUgam9pbnQgb3ZlcmxhcCB0aGF0IGhpZGVzIHRoZVxuICogc2VhbSBiZXR3ZWVuIHNlZ21lbnRzIGlzIChyYSArIHJiKSAqIDAuNiwgd2hpY2ggaXMgZXhhY3RseSB0aGUgb2xkIGByICogMS4yYCB3aGVuIHRoZXkgYXJlIGVxdWFsLFxuICogc28gYSBudW1iZXIgc3RpbGwgcHJvZHVjZXMgYnl0ZS1pZGVudGljYWwgZ2VvbWV0cnkuXG4gKi9cbmZ1bmN0aW9uIHR1YmUocHRzOiBudW1iZXJbXVtdLCByOiBudW1iZXIgfCBudW1iZXJbXSwgc2VnID0gOCwgaGV4PzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCByQXQgPSAoaTogbnVtYmVyKSA9PiAodHlwZW9mIHIgPT09ICdudW1iZXInID8gciA6IHJbTWF0aC5taW4oaSwgci5sZW5ndGggLSAxKV0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBhID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2ldWzBdLCBwdHNbaV1bMV0sIHB0c1tpXVsyXSk7XG4gICAgY29uc3QgYiA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpICsgMV1bMF0sIHB0c1tpICsgMV1bMV0sIHB0c1tpICsgMV1bMl0pO1xuICAgIGNvbnN0IGQgPSBiLmNsb25lKCkuc3ViKGEpOyBjb25zdCBsZW4gPSBkLmxlbmd0aCgpO1xuICAgIGlmIChsZW4gPCAxZS02KSBjb250aW51ZTtcbiAgICBjb25zdCByYSA9IHJBdChpKSwgcmIgPSByQXQoaSArIDEpO1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyYiwgcmEsIGxlbiArIChyYSArIHJiKSAqIDAuNiwgc2VnLCAxLCBmYWxzZSk7XG4gICAgY29uc3QgcSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBkLm5vcm1hbGl6ZSgpKTtcbiAgICBnLmFwcGx5UXVhdGVybmlvbihxKTtcbiAgICBjb25zdCBtID0gYS5jbG9uZSgpLmFkZChiKS5tdWx0aXBseVNjYWxhcigwLjUpO1xuICAgIGcudHJhbnNsYXRlKG0ueCwgbS55LCBtLnopO1xuICAgIHBhcnRzLnB1c2goZyk7XG4gIH1cbiAgY29uc3Qgb3V0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgcmV0dXJuIGhleCA9PT0gdW5kZWZpbmVkID8gb3V0IDogdGludEdlbyhvdXQsIGhleCk7XG59XG5cbi8qKlxuICogQSBGTEFUIFNUUkFQIHN3ZXB0IGFsb25nIGEgcG9seWxpbmU6IGEgY2hhaW4gb2YgYm94ZXMsIGVhY2ggb3JpZW50ZWQgc28gaXRzIExFTkdUSCBydW5zIGFsb25nIHRoZVxuICogc2VnbWVudCwgaXRzIFRISUNLTkVTUyBhbG9uZyB0aGUgb3V0d2FyZCBub3JtYWwgZnJvbSBgYWJvdXRgLCBhbmQgaXRzIFdJRFRIIHRhbmdlbnQgdG8gdGhhdFxuICogc3VyZmFjZS4gVGhpcyBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgZ3VhcmQgYW5kIGEgd2lyZTogYSBidWxraGVhZCBsYW1wJ3MgY2FnZSBpcyBwcmVzc2VkXG4gKiBmbGF0IGJhciwgYW5kIGEgcm91bmQgdHViZSBvZiB0aGUgc2FtZSBtZWFzdXJlZCB3aWR0aCBzaGFkZXMgdG8gYSBuYXJyb3cgaGlnaGxpZ2h0IGFuZCByZWFkcyBhc1xuICogd2lyZSAtLSB3aGljaCBpcyB0aGUgdGhpbmcgdGhpcyBraXQncyBhc3NldCBub3RlcyBydWxlIG91dC4gSXQgaXMgYWxzbyBDSEVBUEVSIHRoYW4gYHR1YmVgOiBhIGJveFxuICogaXMgMTIgdHJpYW5nbGVzIGFnYWluc3QgYSBjYXBwZWQgNS1zaWRlZCBjeWxpbmRlcidzIDIwLlxuICovXG5mdW5jdGlvbiBzdHJhcChwdHM6IG51bWJlcltdW10sIHc6IG51bWJlciwgdDogbnVtYmVyLCBhYm91dDogbnVtYmVyW10sIGhleD86IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYyA9IG5ldyBUSFJFRS5WZWN0b3IzKGFib3V0WzBdLCBhYm91dFsxXSwgYWJvdXRbMl0pO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBhID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2ldWzBdLCBwdHNbaV1bMV0sIHB0c1tpXVsyXSk7XG4gICAgY29uc3QgYiA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpICsgMV1bMF0sIHB0c1tpICsgMV1bMV0sIHB0c1tpICsgMV1bMl0pO1xuICAgIGNvbnN0IGRpciA9IGIuY2xvbmUoKS5zdWIoYSk7IGNvbnN0IGxlbiA9IGRpci5sZW5ndGgoKTtcbiAgICBpZiAobGVuIDwgMWUtNikgY29udGludWU7XG4gICAgZGlyLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IG1pZCA9IGEuY2xvbmUoKS5hZGQoYikubXVsdGlwbHlTY2FsYXIoMC41KTtcbiAgICAvLyBPdXR3YXJkIG5vcm1hbCBhdCB0aGUgbWlkcG9pbnQsIHJlLW9ydGhvZ29uYWxpc2VkIGFnYWluc3QgdGhlIHJ1biBzbyB0aGUgYmFzaXMgc3RheXMgc3F1YXJlXG4gICAgLy8gd2hlcmUgdGhlIHN0cmFwIGNsaW1icyBzdGVlcGx5IGFuZCB0aGUgdHdvIHdvdWxkIG90aGVyd2lzZSBiZSBuZWFybHkgcGFyYWxsZWwuXG4gICAgbGV0IG5ybSA9IG1pZC5jbG9uZSgpLnN1YihjKTtcbiAgICBucm0uc3ViKGRpci5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKG5ybS5kb3QoZGlyKSkpO1xuICAgIGlmIChucm0ubGVuZ3RoU3EoKSA8IDFlLTEyKSBucm0gPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxKS5zdWIoZGlyLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoZGlyLnopKTtcbiAgICBucm0ubm9ybWFsaXplKCk7XG4gICAgLy8gZGlyIHggbnJtLCBOT1QgbnJtIHggZGlyLiBUaGUgYmFzaXMgY29sdW1ucyBhcmUgKHNpZGUsIGRpciwgbnJtKSBhZ2FpbnN0IGEgYm94J3MgKHcsIGxlbiwgdCksXG4gICAgLy8gc28gYSByaWdodC1oYW5kZWQgYmFzaXMgbmVlZHMgc2lkZSB4IGRpciA9IG5ybTsgbnJtIHggZGlyIGdpdmVzIC1ucm0sIGEgbWlycm9yZWQgYmFzaXMgd2l0aCBhXG4gICAgLy8gbmVnYXRpdmUgZGV0ZXJtaW5hbnQsIGFuZCBldmVyeSBzdHJhcCByZW5kZXJzIGluc2lkZSBvdXQgLS0gd2hpY2ggbG9va3MgbGlrZSBhIHRoaW4gZGFya1xuICAgIC8vIHNsaXZlciByYXRoZXIgdGhhbiBhbiBvYnZpb3VzbHkgZmxpcHBlZCBmYWNlLCBzbyBpdCByZWFkcyBhcyBhIGdlb21ldHJ5IGJ1Zywgbm90IGEgd2luZGluZyBvbmUuXG4gICAgY29uc3Qgc2lkZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY3Jvc3NWZWN0b3JzKGRpciwgbnJtKS5ub3JtYWxpemUoKTtcbiAgICAvLyBPdmVybGFwIHRoZSBqb2ludHMgYnkgdGhlIHRoaWNrbmVzcyBzbyBjb25zZWN1dGl2ZSBib3hlcyBjbG9zZSB0aGUgbWl0cmUgcmF0aGVyIHRoYW5cbiAgICAvLyBsZWF2aW5nIGEgd2VkZ2Ugb2YgZGF5bGlnaHQgYXQgZXZlcnkgc3RhdGlvbi5cbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGxlbiArIHQsIHQpO1xuICAgIGcuYXBwbHlNYXRyaXg0KG5ldyBUSFJFRS5NYXRyaXg0KCkubWFrZUJhc2lzKHNpZGUsIGRpciwgbnJtKSk7XG4gICAgZy50cmFuc2xhdGUobWlkLngsIG1pZC55LCBtaWQueik7XG4gICAgcGFydHMucHVzaChnKTtcbiAgfVxuICBjb25zdCBvdXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBvdXQgOiB0aW50R2VvKG91dCwgaGV4KTtcbn1cblxuLyoqIEEgcm90YXRlZCBib3g6IFtjeCwgY3ksIGN6LCB3LCBoLCBkLCByeCwgcnksIHJ6XSB3aXRoIHRoZSByb3RhdGlvbnMgYXBwbGllZCBpbiB4LCB5LCB6IG9yZGVyXG4gKiAgYWJvdXQgdGhlIGJveCdzIG93biBjZW50cmUuIEEgYm9ubmV0IGxpcCwgYSByYWtlZCBtaXJyb3Igc3RlbSwgYSBjYW5vcHkgc3RheS4gKi9cbmZ1bmN0aW9uIHJib3goYjogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoYlszXSwgYls0XSwgYls1XSk7XG4gIGlmIChiWzZdKSBnLnJvdGF0ZVgoYls2XSk7IGlmIChiWzddKSBnLnJvdGF0ZVkoYls3XSk7IGlmIChiWzhdKSBnLnJvdGF0ZVooYls4XSk7XG4gIGcudHJhbnNsYXRlKGJbMF0sIGJbMV0sIGJbMl0pO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgYmF0Y2ggb2YgYm94ZXMsIGVhY2ggdGludGVkLCBtZXJnZWQ6IFtbaGV4LCBjeCwgY3ksIGN6LCB3LCBoLCBkLCByeD8sIHJ5Pywgcno/XSwgLi4uXS4gVGhlXG4gKiAgdHJpbSBjb21wb25lbnQgb2YgZXZlcnkgdmVoaWNsZSBpcyBvbmUgb2YgdGhlc2UgLS0gYnVtcGVycywgZ3JpbGxlLCBsYW1wcywgbWlycm9ycywgaGFuZGxlcyxcbiAqICBzdGVwcywgYXJjaCBmbGFyZXMgLS0gc28gZm9ydHkgcGFydHMgcmlkZSBvbmUgc3VibWlzc2lvbi4gKi9cbmZ1bmN0aW9uIHRpbnRlZEJveGVzKGxpc3Q6IG51bWJlcltdW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpKTtcbn1cblxuLyoqIE1pcnJvciBhIGJveCBsaXN0IGFjcm9zcyB4ID0gMCAobGVmdC9yaWdodCBwYWlycykuIFJvdGF0aW9ucyBhYm91dCB5IGFuZCB6IGZsaXAgc2lnbi4gKi9cbmZ1bmN0aW9uIG1pcnJvclgobGlzdDogbnVtYmVyW11bXSk6IG51bWJlcltdW10ge1xuICByZXR1cm4gbGlzdC5mbGF0TWFwKChiKSA9PiBbYiwgW2JbMF0sIC1iWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdLCBiWzZdLCBiWzddID8/IDAsIC0oYls4XSA/PyAwKSwgLShiWzldID8/IDApXV0pO1xufVxuXG4vKiogQSBzZWFtbGVzcyBDYW52YXMgMkQgdGlsZTogYGRyYXcoY3R4LCBzaXplKWAgcGFpbnRzIGl0LCBhbmQgdGhlIHJlc3VsdCBpcyBhIHJlcGVhdGluZyB0ZXh0dXJlXG4gKiAgaW4gc1JHQi4gVXNlZCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24sIHNvIHRoZSB0ZXh0dXJlbGVzcyBkZWNsYXJhdGlvbiBzdGFuZHMgYW5kIG5vXG4gKiAgcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpcyBzeW50aGVzaXNlZC4gUmV0dXJucyBudWxsIHdoZXJlIHRoZXJlIGlzIG5vIERPTSAodGhlIGhlYWRsZXNzIGhhcm5lc3NcbiAqICBoYXMgb25lOyBhIG5vZGUtc2lkZSBwcm9iZSBkb2VzIG5vdCksIGFuZCBldmVyeSBjYWxsZXIgdG9sZXJhdGVzIG51bGwuICovXG5mdW5jdGlvbiBjYW52YXNUaWxlKHNpemU6IG51bWJlciwgZHJhdzogKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzOiBudW1iZXIpID0+IHZvaWQpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgY3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsgY3Yud2lkdGggPSBzaXplOyBjdi5oZWlnaHQgPSBzaXplO1xuICAvLyB3aWxsUmVhZEZyZXF1ZW50bHkga2VlcHMgdGhlIHRpbGUgb24gdGhlIENQVSByYXN0ZXIgcGF0aDogYSBHUFUtYmFja2VkIGNhbnZhcyBjb3N0cyBzZWNvbmRzIHBlclxuICAvLyB0aG91c2FuZCBwYXRoIGZpbGxzIHdoZXJlIHRoZSBzb2Z0d2FyZSBwYXRoIHRha2VzIHRlbnMgb2YgbWlsbGlzZWNvbmRzLlxuICBjb25zdCBjdHggPSBjdi5nZXRDb250ZXh0KCcyZCcsIHsgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlIH0pIGFzIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGw7IGlmICghY3R4KSByZXR1cm4gbnVsbDtcbiAgZHJhdyhjdHgsIHNpemUpO1xuICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjdik7XG4gIHRleC53cmFwUyA9IHRleC53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xuICB0ZXguY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICB0ZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICByZXR1cm4gdGV4O1xufVxuXG4vKiogRGV0ZXJtaW5pc3RpYyBwc2V1ZG8tcmFuZG9tIGZvciBjYW52YXMgZHJlc3NpbmcgLS0gYXNzaWduZWQgYnkgaW5kZXgsIG5ldmVyIE1hdGgucmFuZG9tLCBzbyB0aGVcbiAqICBtb2RlbCBpcyBieXRlLWlkZW50aWNhbCBvbiBldmVyeSBidWlsZC4gKi9cbmZ1bmN0aW9uIGxjZyhzZWVkOiBudW1iZXIpOiAoKSA9PiBudW1iZXIge1xuICBsZXQgcyA9IHNlZWQgPj4+IDA7XG4gIHJldHVybiAoKSA9PiB7IHMgPSAocyAqIDE2NjQ1MjUgKyAxMDEzOTA0MjIzKSA+Pj4gMDsgcmV0dXJuIHMgLyA0Mjk0OTY3Mjk2OyB9O1xufVxuXG4vKipcbiAqIE1VRCAvIFJPQUQtR1JJTUUgdGlsZSwgUkUtQkFTRUQuIFRoYWkgcm9hZCBtdWQgaXMgdGFuIGFuZCBCUklHSFRFUiB0aGFuIG1vc3QgcGFpbnQsIGFuZCBhXG4gKiBtdWx0aXBsaWVyIGNhbm5vdCBicmlnaHRlbjogc28gdGhlIHBhaW50IG1hdGVyaWFsIGNhcnJpZXMgdGhlIE1VRCBFTlZFTE9QRSBjb2xvdXIgKG1lYXN1cmVkIG9uXG4gKiB0aGUgbXVkZHkgc2lsbCksIHRoaXMgdGlsZSBjYXJyaWVzIHRoZSBjbGVhbiBwYWludCBhcyBhIFJBVElPIG9mIHRoYXQgZW52ZWxvcGUgb3ZlciBtb3N0IG9mIGl0c1xuICogYXJlYSAoYGJhc2VgKSwgYW5kIHRoZSBtdWQgaXMgcGFpbnRlZCBhcyB3aGl0ZSAtLSBpLmUuIHRoZSBlbnZlbG9wZSBpdHNlbGYgLS0gaW4gYSB3YXNoIHJpc2luZ1xuICogZnJvbSB0aGUgYm90dG9tIHRvIGBjb3ZlcmFnZWAgb2YgdGhlIHRpbGUgaGVpZ2h0IHBsdXMgc3BsYXR0ZXIgYWJvdmUgaXQuIEJvdW5kIHdpdGggaGVpZ2h0IFVWc1xuICogc28gdiA9IDAgaXMgdGhlIGdyb3VuZCBhbmQgdGhlIHdhc2ggc2l0cyBvbiB0aGUgc2lsbHMgYW5kIGFyY2hlcy5cbiAqL1xuZnVuY3Rpb24gbXVkVGlsZShzaXplOiBudW1iZXIsIGJhc2U6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGNvdmVyYWdlID0gMC4zMyk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCB0b0hleCA9ICh2OiBudW1iZXJbXSkgPT4gJyMnICsgdi5tYXAoKGMpID0+IE1hdGgucm91bmQoTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYykpICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSkuam9pbignJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRvSGV4KGJhc2UpOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwyNTUsMjU1LDAuODgpJyk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC40NSwgJ3JnYmEoMjU1LDI1NSwyNTUsMC40NSknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjU1LDI1NSwwKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS4zNTtcbiAgICAgIGNvbnN0IHIgPSAzICsgcm5kKCkgKiBzICogMC4wNTtcbiAgICAgIGNvbnN0IGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMjU1LDI1MCwyNDAsJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwyNTAsMjQwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGEgbGl0dGxlIGdyYWluIHNvIHRoZSBjbGVhbiBwYWludCBpcyBub3QgYSBmbGF0IGZpbGxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyMDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogczsgY29uc3QgdiA9IHJuZCgpIDwgMC41ID8gMCA6IDI1NTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjAzNSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMS41LCAxLjUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBEVVNUIHRpbGUgZm9yIHBhaW50IHRoYXQgaXMgQlJJR0hURVIgdGhhbiBpdHMgZGlydCAoYSB3aGl0ZSB2YW4pOiBhIHBsYWluIG11bHRpcGxpZXIsIHdoaXRlXG4gKiAgYmFzZSBhbmQgYSBncmV5LWJyb3duIHdhc2ggcmlzaW5nIGZyb20gdGhlIGdyb3VuZCB0byBgY292ZXJhZ2VgLCBwbHVzIHNvZnQgYmxvYnMuICovXG5mdW5jdGlvbiBkdXN0VGlsZShzaXplOiBudW1iZXIsIGR1c3Q6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGNvdmVyYWdlID0gMC4zMCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgYyA9IGR1c3QubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIE1hdGgubWluKDEsIHYpKSk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuOSlgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuNClgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS40LCByID0gMyArIHJuZCgpICogcyAqIDAuMDUsIGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI1O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIENPUlJVR0FURUQgU0hFRVQgdGlsZTogdmVydGljYWwgcmlkZ2VzIGFzIGEgc2luZS1zaGFkZWQgc3RyaXBlIGZpZWxkLCB1c2VkIGFzIG1hcCBBTkQgYnVtcE1hcCBvblxuICogIGEgc29uZ3RoYWV3IHJvb2Ygc28gdGhlIHJpZGdlcyBjYXRjaCBsaWdodC4gYHBpdGNoYCByaWRnZXMgcGVyIHRpbGUuICovXG5mdW5jdGlvbiBjb3JydWdhdGlvblRpbGUoc2l6ZTogbnVtYmVyLCBwaXRjaDogbnVtYmVyLCBsb3c6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICBjb25zdCB0ID0gKE1hdGguY29zKHggLyBzICogTWF0aC5QSSAqIDIgKiBwaXRjaCkgKyAxKSAvIDI7ICAgLy8gMSBhdCBjcmVzdCwgMCBpbiB0cm91Z2hcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIChsb3cgKyAoMSAtIGxvdykgKiB0KSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDQgKyBybmQoKSAqIHMgKiAwLjA4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4xODtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxMjAsOTAsNjAsJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDEyMCw5MCw2MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogUExBTksgdGlsZTogYm9hcmRzIHJ1bm5pbmcgYWxvbmcgdSB3aXRoIGRhcmsgam9pbnRzIGFuZCBncmFpbiBzdHJlYWtzLCBhIG11bHRpcGxpZXIgb24gYVxuICogIG1lYXN1cmVkIHRpbWJlciBhbGJlZG8uIGBib2FyZHNgIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gcGxhbmtUaWxlKHNpemU6IG51bWJlciwgYm9hcmRzOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgYmggPSBzIC8gYm9hcmRzO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgYm9hcmRzOyBiKyspIHtcbiAgICAgIGNvbnN0IHRvbmUgPSAwLjgyICsgcm5kKCkgKiAwLjE4O1xuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogdG9uZSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3QoMCwgYiAqIGJoLCBzLCBiaCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsMzAsMjAsMC41NSknOyBjdHguZmlsbFJlY3QoMCwgYiAqIGJoLCBzLCBNYXRoLm1heCgxLCBzICogMC4wMDYpKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMTQ7IGsrKykge1xuICAgICAgICBjb25zdCB5ID0gYiAqIGJoICsgcm5kKCkgKiBiaCwgbGVuID0gcyAqICgwLjIgKyBybmQoKSAqIDAuNiksIHggPSBybmQoKSAqIHM7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKDYwLDQ1LDMwLCR7MC4wNSArIHJuZCgpICogMC4xMn0pYDsgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4IC0gcywgeSk7IGN0eC5saW5lVG8oeCAtIHMgKyBsZW4sIHkpOyBjdHgubW92ZVRvKHgsIHkpOyBjdHgubGluZVRvKHggKyBsZW4sIHkpOyBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFJVU1QgdGlsZTogYSBtdWx0aXBsaWVyIG9mIGJsb3RjaGVkIG9yYW5nZS1icm93biBvdmVyIGEgYmFzZSwgZGFyayBjb3JlcyBsaWZ0ZWQgc28gbm90aGluZyBsYW5kc1xuICogIG9uIHRoZSBsdW1hLTU4IGhvbGUgZ2F0ZS4gKi9cbmZ1bmN0aW9uIHJ1c3RUaWxlKHNpemU6IG51bWJlciwgcmF0aW86IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGRlbnNpdHkgPSA5MCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZW5zaXR5OyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wOTtcbiAgICAgIGNvbnN0IGEgPSAwLjE1ICsgcm5kKCkgKiAwLjQ1O1xuICAgICAgY29uc3QgYyA9IHJhdGlvLm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiB2KSk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIEhlaWdodC1rZXllZCBVVnM6IHYgaXMgd29ybGQgSEVJR0hUIG92ZXIgYHNjYWxlYCBtZXRyZXMsIHUgcnVucyBhbG9uZyB0aGUgZG9taW5hbnQgaG9yaXpvbnRhbFxuICogIGF4aXMuIEEgbXVkIHRpbGUgYm91bmQgdGhpcyB3YXkgZGFya2VucyB0aGUgc2lsbHMgYW5kIHN0YXlzIGNsZWFuIG9uIHRoZSByb29mIC0tIGEgcGxhaW4gYm94XG4gKiAgcHJvamVjdGlvbiB3b3VsZCByZXBlYXQgdGhlIHRpbGUncyBkaXJ0eSBiYW5kIGFjcm9zcyB0aGUgcm9vZiBhcyBzdHJpcGVzLiAqL1xuLyoqXG4gKiBTSE9SVCBGVVI6IGEgc2VhbWxlc3MgdGlsZSBvZiBkZW5zZSwgc2hvcnQsIGRpcmVjdGlvbmFsIGhhaXIgc3Ryb2tlcyBvdmVyIGEgY2xvdWR5IHRvbmUgZHJpZnQsIGFzIGFcbiAqIG11bHRpcGx5IG1hcCAoYW5kIGJ1bXApIG9uIGEgd2hpdGUgdmVydGV4LWNvbG91cmVkIGNvYXQuIFRoZSBzdHJva2VzIHJ1biBhbG9uZyB2IHdpdGggYSBqaXR0ZXJlZFxuICogbGVhbiBhbmQgYSBuYXJyb3cgdG9uZSBzcHJlYWQgLS0gYSB3aWRlIHNwcmVhZCByZWFkcyBhcyBzY2FsZXMsIGEgcGVyZmVjdCBsYXkgcmVhZHMgYXMgY29tYmVkXG4gKiBwbGFzdGljLiBgcGF0Y2hlc2AgYWRkcyBhIGZldyBzb2Z0IHBpbmstZ3JleSBiYXJlIHBhdGNoZXMsIHRoZSBtYW5nZSBtYXJrcyBvZiBhIHN0cmVldCBkb2cuXG4gKi9cbmZ1bmN0aW9uIGZ1clRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3QgdG9uZSA9IG8udG9uZSA/PyBbMC43MiwgMC42NiwgMC41OF0sIG0gPSBzICogMC4wNjtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gY2xvdWR5IGRyaWZ0IHVuZGVybmVhdGggc28gdGhlIGNvYXQgaXMgbm90IG9uZSBmbGF0IHZhbHVlXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5jbG91ZHMgPz8gMjYpOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDggKyBybmQoKSAqIDAuMTgpLCBhID0gMC4wNCArIHJuZCgpICogMC4xMDtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHRvbmUpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IodG9uZSl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBiYXJlIHBhdGNoZXM6IHNvZnQsIHNwYXJzZSwgd2FybSBncmV5LXBpbmtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnBhdGNoZXMgPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNCArIHJuZCgpICogMC4wNSksIHBjID0gby5wYXRjaFRvbmUgPz8gWzAuNzIsIDAuNTYsIDAuNTJdO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocGMpfSwwLjU1KWApOyBnMi5hZGRDb2xvclN0b3AoMC42LCBgcmdiYSgke3JnYihwYyl9LDAuMylgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHBjKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5ICsgZHksIHIgKiAxLjMsIHIsIHJuZCgpICogTWF0aC5QSSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGhhaXIgc3Ryb2tlczogZGFyayBhbmQgbGlnaHQsIHNob3J0LCBsZWFuaW5nIHdpdGhpbiArLTIyIGRlZ3JlZXMgb2YgdlxuICAgIGNvbnN0IHN0cm9rZXMgPSBvLnN0cm9rZXMgPz8gNTAwMCwgbGVuID0gcyAqIChvLmxlbmd0aCA/PyAwLjAyMik7XG4gICAgY29uc3QgZHJhd1N0cm9rZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgZHg6IG51bWJlciwgZHk6IG51bWJlciwgdzogbnVtYmVyKSA9PiB7XG4gICAgICBjdHgubGluZVdpZHRoID0gdzsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkpOyBjdHgubGluZVRvKHggKyBkeCwgeSArIGR5KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgaWYgKHggPCBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgcywgeSk7IGN0eC5saW5lVG8oeCArIHMgKyBkeCwgeSArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICBpZiAoeCA+IHMgLSBtKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4IC0gcywgeSk7IGN0eC5saW5lVG8oeCAtIHMgKyBkeCwgeSArIGR5KTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICBpZiAoeSA8IG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkgKyBzKTsgY3R4LmxpbmVUbyh4ICsgZHgsIHkgKyBzICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIGlmICh5ID4gcyAtIG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkgLSBzKTsgY3R4LmxpbmVUbyh4ICsgZHgsIHkgLSBzICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICB9O1xuICAgIGN0eC5saW5lQ2FwID0gJ3JvdW5kJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cm9rZXM7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgdGggPSAocm5kKCkgLSAwLjUpICogMC43OCwgbCA9IGxlbiAqICgwLjYgKyBybmQoKSAqIDAuOCk7XG4gICAgICBjb25zdCBsaWdodCA9IHJuZCgpIDwgMC40MjtcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBsaWdodCA/ICdzY3JlZW4nIDogJ211bHRpcGx5JztcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGxpZ2h0ID8gYHJnYmEoMjU1LDI1MCwyNDAsJHswLjA1ICsgcm5kKCkgKiAwLjEwfSlgIDogYHJnYmEoJHtyZ2IodG9uZSl9LCR7MC4wNiArIHJuZCgpICogMC4xNH0pYDtcbiAgICAgIGRyYXdTdHJva2UoeCwgeSwgTWF0aC5zaW4odGgpICogbCwgTWF0aC5jb3ModGgpICogbCwgMC42ICsgcm5kKCkgKiAxLjIpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhlaWdodFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgY29uc3QgdSA9IGF4ID49IGF6ID8gcC5nZXRaKGkpIDogcC5nZXRYKGkpO1xuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHAuZ2V0WShpKSAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogT2Zmc2V0IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyBvdXR3YXJkIGJ5IGBkYCBhbG9uZyB0aGUgYXZlcmFnZWQgZWRnZSBub3JtYWxzLiBVc2VkXG4gKiAgdG8gc3RhbmQgdGhlIGdsYXNzIGJhbmQgYSBmZXcgbWlsbGltZXRyZXMgcHJvdWQgb2YgdGhlIGJvZHkncyByYWtlZCB3aW5kc2NyZWVuIGFuZCByZWFyIGdsYXNzXG4gKiAgZmFjZXMsIHNvIHRoZSBwYW5lIGFuZCB0aGUgYm9keSBuZXZlciBzaGFyZSBhIHBsYW5lLiBXaW5kaW5nOiBjb3VudGVyLWNsb2Nrd2lzZSBpbiAoeiwgeSkuICovXG5mdW5jdGlvbiBvZmZzZXRQb2x5KHB0czogbnVtYmVyW11bXSwgZDogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IG4gPSBwdHMubGVuZ3RoLCBvdXQ6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gcHRzWyhpICsgbiAtIDEpICUgbl0sIGIgPSBwdHNbaV0sIGMgPSBwdHNbKGkgKyAxKSAlIG5dO1xuICAgIGNvbnN0IGUxID0gW2JbMF0gLSBhWzBdLCBiWzFdIC0gYVsxXV0sIGUyID0gW2NbMF0gLSBiWzBdLCBjWzFdIC0gYlsxXV07XG4gICAgY29uc3QgbDEgPSBNYXRoLmh5cG90KGUxWzBdLCBlMVsxXSkgfHwgMSwgbDIgPSBNYXRoLmh5cG90KGUyWzBdLCBlMlsxXSkgfHwgMTtcbiAgICAvLyBvdXR3YXJkIG5vcm1hbCBvZiBhIENDVyBlZGdlIChkeiwgZHkpIGlzIChkeSwgLWR6KVxuICAgIGNvbnN0IG4xID0gW2UxWzFdIC8gbDEsIC1lMVswXSAvIGwxXSwgbjIgPSBbZTJbMV0gLyBsMiwgLWUyWzBdIC8gbDJdO1xuICAgIGxldCBueCA9IG4xWzBdICsgbjJbMF0sIG55ID0gbjFbMV0gKyBuMlsxXTtcbiAgICBjb25zdCBubCA9IE1hdGguaHlwb3QobngsIG55KSB8fCAxOyBueCAvPSBubDsgbnkgLz0gbmw7XG4gICAgY29uc3QgY29zSGFsZiA9IE1hdGgubWF4KDAuMzUsIG54ICogbjFbMF0gKyBueSAqIG4xWzFdKTtcbiAgICBvdXQucHVzaChbYlswXSArIG54ICogZCAvIGNvc0hhbGYsIGJbMV0gKyBueSAqIGQgLyBjb3NIYWxmXSk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqIEEgd2hlZWwtYXJjaCBGTEFSRTogYSBoYWxmLWFubnVsdXMgaW4gdGhlICh6LCB5KSBwbGFuZSwgZXh0cnVkZWQgYWNyb3NzIHgwLi54MSBvbiBib3RoIHNpZGVzXG4gKiAgYW5kIHRpbnRlZC4gU3RhbmRzIHByb3VkIG9mIHRoZSBib2R5IHNpZGUgYW5kIGhpZGVzIHRoZSBhcmNoJ3MgY3V0IGVkZ2UuICovXG5mdW5jdGlvbiBmbGFyZSh6YzogbnVtYmVyLCB5YzogbnVtYmVyLCBySW46IG51bWJlciwgck91dDogbnVtYmVyLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCBoZXg6IG51bWJlciwgbiA9IDkpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gbjsgY29uc3QgeiA9IHpjICsgTWF0aC5jb3MoYSkgKiByT3V0LCB5ID0geWMgKyBNYXRoLnNpbihhKSAqIHJPdXQ7IGlmIChpID09PSAwKSBzaGFwZS5tb3ZlVG8oeiwgeSk7IGVsc2Ugc2hhcGUubGluZVRvKHosIHkpOyB9XG4gIGZvciAobGV0IGkgPSBuOyBpID49IDA7IGktLSkgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gbjsgc2hhcGUubGluZVRvKHpjICsgTWF0aC5jb3MoYSkgKiBySW4sIHljICsgTWF0aC5zaW4oYSkgKiBySW4pOyB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBjb25zdCBtayA9IChzeDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHgxIC0geDAsIGJldmVsRW5hYmxlZDogZmFsc2UgfSk7XG4gICAgZy5yb3RhdGVZKC1NYXRoLlBJIC8gMik7IGcudHJhbnNsYXRlKHgxLCAwLCAwKTsgaWYgKHN4IDwgMCkgZy5zY2FsZSgtMSwgMSwgMSk7XG4gICAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gdGludEdlbyhnLCBoZXgpO1xuICB9O1xuICBjb25zdCBsID0gbWsoLTEpLCByID0gbWsoMSk7XG4gIC8vIGEgbmVnYXRpdmUgc2NhbGUgZmxpcHMgdGhlIHdpbmRpbmc7IHJlc3RvcmUgaXQgc28gdGhlIGZsYXJlIGlzIG5vdCBpbnNpZGUgb3V0XG4gIGNvbnN0IGlkeCA9IGwuZ2V0SW5kZXgoKTsgaWYgKGlkeCkgeyBjb25zdCBhID0gaWR4LmFycmF5IGFzIGFueTsgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSArPSAzKSB7IGNvbnN0IHQgPSBhW2kgKyAxXTsgYVtpICsgMV0gPSBhW2kgKyAyXTsgYVtpICsgMl0gPSB0OyB9IGlkeC5uZWVkc1VwZGF0ZSA9IHRydWU7IH1cbiAgZWxzZSB7IGNvbnN0IHAgPSBsLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTsgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpICs9IDMpIHsgY29uc3QgeDFfID0gcC5nZXRYKGkgKyAxKSwgeTFfID0gcC5nZXRZKGkgKyAxKSwgejFfID0gcC5nZXRaKGkgKyAxKTsgcC5zZXRYWVooaSArIDEsIHAuZ2V0WChpICsgMiksIHAuZ2V0WShpICsgMiksIHAuZ2V0WihpICsgMikpOyBwLnNldFhZWihpICsgMiwgeDFfLCB5MV8sIHoxXyk7IH0gfVxuICBsLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBtZXJnZUdlb3MoW2wsIHJdKTtcbn1cblxuLyoqIEJpbmQgYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSB0byBhIG1hdGVyaWFsIGFzIG1hcCAoYW5kIGJ1bXApLCBsZWF2aW5nIHRoZSB0ZXh0dXJlbGVzc1xuICogIGRlY2xhcmF0aW9uIGludGFjdDogbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpcyBzeW50aGVzaXNlZCwgdGhlIG1lYXN1cmVkIGNvbG91ciBzdGF5cyB0aGVcbiAqICBtdWx0aXBsaWNhbmQsIGFuZCB0aGUgd2hvbGUgdGhpbmcgY29zdHMgb25lIGNhbnZhcy4gKi9cbmZ1bmN0aW9uIGJpbmRUaWxlKG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwsIHRleDogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwsIGJ1bXAgPSAwKTogdm9pZCB7XG4gIGlmICghdGV4KSByZXR1cm47XG4gIG1hdC5tYXAgPSB0ZXg7XG4gIGlmIChidW1wID4gMCkgeyBtYXQuYnVtcE1hcCA9IHRleDsgbWF0LmJ1bXBTY2FsZSA9IGJ1bXA7IH1cbiAgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbn1cblxuXG4vKipcbiAqIEEgRFJBUEVEIFNIRUVUOiBgaGVpZ2h0c1tqXVtpXWAgaXMgdGhlIHRvcCBzdXJmYWNlIGF0IHggPSB4MC4ueDEgKGkgb3ZlciBueCkgYW5kIHogPSB6MC4uejEgKGogb3ZlclxuICogbnopOyB0aGUgc2hlZXQgaXMgYHRgIHRoaWNrLiBUb3AgYW5kIHVuZGVyc2lkZSBhcmUgc21vb3RoLXNoYWRlZCBncmlkcywgdGhlIGZvdXIgZWRnZXMgYXJlIGZsYXRcbiAqIHN0cmlwcyB3b3VuZCBvdXR3YXJkLiBBIHRhcnAgY2Fub3B5IGlzIGEgcmlkZ2UgbGluZSBtaW51cyB0aGUgc2FnIGJldHdlZW4gaXRzIHBvbGVzIG1pbnVzIHRoZVxuICogZHJvb3Agb2YgaXRzIGZyZWUgZWRnZXMgLS0gY2xvdGgsIHdoZXJlIGEgc2xhYiByZWFkcyBhcyBhIHBhaW50ZWQgYm94LlxuICovXG5mdW5jdGlvbiBzaGVldChzOiBhbnkpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IG54OiBudW1iZXIgPSBzLm54LCBuejogbnVtYmVyID0gcy5ueiwgSGg6IG51bWJlcltdW10gPSBzLmhlaWdodHMsIHQ6IG51bWJlciA9IHMudCA/PyAwLjAxMjtcbiAgY29uc3QgWCA9IChpOiBudW1iZXIpID0+IHMueDAgKyAocy54MSAtIHMueDApICogaSAvIG54O1xuICAvLyBgenNgIGdpdmVzIHRoZSB6IFNUQVRJT05TIGV4cGxpY2l0bHkgaW5zdGVhZCBvZiBkaXZpZGluZyB6MC4uejEgZXZlbmx5LiBBIHJvb2Ygd2hvc2UgZWF2ZSBhbmRcbiAgLy8gcmFrZSB3YW50IGEgbmFycm93IHJ1c3RlZCBiYW5kIG5lZWRzIHJvd3MgMC4xMCBtIGluIGZyb20gdGhlIGVkZ2UsIGFuZCByZWFjaGluZyB0aGF0IGJ5IHJhaXNpbmdcbiAgLy8gbnogYWxvbmUgd291bGQgbXVsdGlwbHkgdGhlIHdob2xlIGdyaWQgLS0gMTA0IGZsdXRlIGNvbHVtbnMgaXMgd2hhdCBtYWtlcyBhIHJvdyBleHBlbnNpdmUuXG4gIGNvbnN0IFpTOiBudW1iZXJbXSB8IG51bGwgPSBBcnJheS5pc0FycmF5KHMuenMpID8gcy56cyA6IG51bGw7XG4gIGNvbnN0IFogPSAoajogbnVtYmVyKSA9PiAoWlMgPyBaU1tqXSA6IHMuejAgKyAocy56MSAtIHMuejApICogaiAvIG56KTtcbiAgY29uc3QgZ3JpZCA9ICh5T2ZmOiBudW1iZXIsIGZsaXA6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIHV2OiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gbno7IGorKykgZm9yIChsZXQgaSA9IDA7IGkgPD0gbng7IGkrKykgeyBwb3MucHVzaChYKGkpLCBIaFtqXVtpXSArIHlPZmYsIFooaikpOyB1di5wdXNoKGkgLyBueCwgaiAvIG56KTsgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbno7IGorKykgZm9yIChsZXQgaSA9IDA7IGkgPCBueDsgaSsrKSB7XG4gICAgICBjb25zdCBhID0gaiAqIChueCArIDEpICsgaSwgYiA9IGEgKyAxLCBjID0gYSArIG54ICsgMSwgZCA9IGMgKyAxO1xuICAgICAgaWYgKGZsaXApIGlkeC5wdXNoKGEsIGIsIGMsIGIsIGQsIGMpOyBlbHNlIGlkeC5wdXNoKGEsIGMsIGIsIGIsIGMsIGQpO1xuICAgIH1cbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zLCAzKSk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICBnLnNldEluZGV4KGlkeCk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIGc7XG4gIH07XG4gIC8vIGBoZXhUb3BgIC8gYGhleFVuZGVyYDogYSBjb2xvdXIgYXR0cmlidXRlIHdyaXR0ZW4gcGVyIGdyaWQsIHNvIGEgdGFycCBjYW4gYmUgYmx1ZSBvbiB0b3AgYW5kXG4gIC8vIG9yYW5nZSB1bmRlcm5lYXRoIG9uIE9ORSBtYXRlcmlhbCBhbmQgT05FIGRyYXcgY2FsbC4gQSBjb21wb25lbnQgdGludCBjYW5ub3QgZG8gaXQgLS0gdGhlIHR3b1xuICAvLyBzdXJmYWNlcyBhcmUgbWlsbGltZXRyZXMgYXBhcnQgaW4geSwgc28gbm8gYXhpcyBibGVuZCBzZXBhcmF0ZXMgdGhlbSAtLSBhbmQgYSBzZWNvbmQgc2hlZXRcbiAgLy8gd291bGQgZG91YmxlIHRoZSByb29mJ3MgdHJpYW5nbGVzIGZvciBhIGNvbG91ci4gT21pdHRlZCwgdGhlIGdlb21ldHJ5IGlzIHVudGludGVkIGFzIGJlZm9yZS5cbiAgY29uc3QgcGFpbnQgPSAoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGhleDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50LCBjID0gbmV3IFRIUkVFLkNvbG9yKGhleCksIGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjsgfVxuICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7IHJldHVybiBnO1xuICB9O1xuICAvLyBgaGV4R3JpZFtqXVtpXWAgaXMgYSBjb2xvdXIgUEVSIFRPUC1HUklEIFZFUlRFWCwgY29tcHV0ZWQgYXQgZW1pdCB0aW1lIC0tIHdoaWNoIGlzIHRoZSBvbmx5IHdheVxuICAvLyB0byBwdXQgYSBtYXJrIGF0IGEga25vd24gcGxhY2Ugb24gdGhlIHNoZWV0LiBBIGNhbnZhcyB0aWxlIHJlcGVhdHMgYnkgd29ybGQgcG9zaXRpb24gYW5kIGtub3dzXG4gIC8vIG5vdGhpbmcgYWJvdXQgd2hlcmUgdGhlIGVhdmUgaXM7IGBoZXhUb3BgIGlzIG9uZSBmbGF0IHRvbmUgZm9yIHRoZSB3aG9sZSBzdXJmYWNlLiBUaGlzIGlzIHdoYXRcbiAgLy8gY2FycmllcyB0aGUgcnVzdGVkIGJhbmQgYWxvbmcgdGhlIGVhdmUgYW5kIHRoZSByYWtlcywgYW5kIHRoZSBzdGFpbmluZyBiZXNpZGUgZWFjaCBzaGVldCBsYXAuXG4gIGNvbnN0IHBhaW50R3JpZCA9IChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgSEc6IG51bWJlcltdW10pID0+IHtcbiAgICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQsIGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgbGV0IGsgPSAwO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IG56OyBqKyspIGZvciAobGV0IGkgPSAwOyBpIDw9IG54OyBpKyspIHsgYy5zZXRIZXgoSEdbal1baV0pOyBjb2xbaysrXSA9IGMucjsgY29sW2srK10gPSBjLmc7IGNvbFtrKytdID0gYy5iOyB9XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTsgcmV0dXJuIGc7XG4gIH07XG4gIGNvbnN0IHRvcDAgPSBncmlkKDAsIGZhbHNlKSwgdW5kMCA9IGdyaWQoLXQsIHRydWUpO1xuICBjb25zdCBwYXJ0cyA9IHMuaGV4R3JpZCAhPT0gdW5kZWZpbmVkXG4gICAgPyBbcGFpbnRHcmlkKHRvcDAsIHMuaGV4R3JpZCksIHBhaW50KHVuZDAsIHMuaGV4VW5kZXIgPz8gMHhmZmZmZmYpXVxuICAgIDogcy5oZXhVbmRlciAhPT0gdW5kZWZpbmVkXG4gICAgICA/IFtwYWludCh0b3AwLCBzLmhleFRvcCA/PyAweGZmZmZmZiksIHBhaW50KHVuZDAsIHMuaGV4VW5kZXIpXVxuICAgICAgOiBbdG9wMCwgdW5kMF07XG4gIC8vIGVkZ2Ugc3RyaXBzOiBlYWNoIHF1YWQgZnJvbSB0aGUgdG9wIGVkZ2UgZG93biB0byB0aGUgdW5kZXJzaWRlLCB3b3VuZCBzbyBpdHMgbm9ybWFsIGZhY2VzIGBvdXRgXG4gIGNvbnN0IHN0cmlwID0gKHB0czogbnVtYmVyW11bXVtdLCBvdXQ6IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCB1djogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtwMCwgcDFdIG9mIHB0cykge1xuICAgICAgY29uc3QgcTAgPSBwMCwgcTEgPSBwMSwgcTIgPSBbcDFbMF0sIHAxWzFdIC0gdCwgcDFbMl1dLCBxMyA9IFtwMFswXSwgcDBbMV0gLSB0LCBwMFsyXV07XG4gICAgICBjb25zdCBlMSA9IFtxMVswXSAtIHEwWzBdLCBxMVsxXSAtIHEwWzFdLCBxMVsyXSAtIHEwWzJdXSwgZTIgPSBbcTJbMF0gLSBxMFswXSwgcTJbMV0gLSBxMFsxXSwgcTJbMl0gLSBxMFsyXV07XG4gICAgICBjb25zdCBuID0gW2UxWzFdICogZTJbMl0gLSBlMVsyXSAqIGUyWzFdLCBlMVsyXSAqIGUyWzBdIC0gZTFbMF0gKiBlMlsyXSwgZTFbMF0gKiBlMlsxXSAtIGUxWzFdICogZTJbMF1dO1xuICAgICAgY29uc3QgdHJpID0gblswXSAqIG91dFswXSArIG5bMV0gKiBvdXRbMV0gKyBuWzJdICogb3V0WzJdID49IDAgPyBbcTAsIHExLCBxMiwgcTAsIHEyLCBxM10gOiBbcTAsIHEyLCBxMSwgcTAsIHEzLCBxMl07XG4gICAgICBmb3IgKGNvbnN0IHEgb2YgdHJpKSB7IHBvcy5wdXNoKHFbMF0sIHFbMV0sIHFbMl0pOyB1di5wdXNoKDAsIDApOyB9XG4gICAgfVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3MsIDMpKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIGc7XG4gIH07XG4gIGNvbnN0IHRvcCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4gW1goaSksIEhoW2pdW2ldLCBaKGopXTtcbiAgY29uc3QgZTA6IG51bWJlcltdW11bXSA9IFtdLCBlMTogbnVtYmVyW11bXVtdID0gW10sIGUyOiBudW1iZXJbXVtdW10gPSBbXSwgZTM6IG51bWJlcltdW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG54OyBpKyspIHsgZTAucHVzaChbdG9wKGksIDApLCB0b3AoaSArIDEsIDApXSk7IGUxLnB1c2goW3RvcChpLCBueiksIHRvcChpICsgMSwgbnopXSk7IH1cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuejsgaisrKSB7IGUyLnB1c2goW3RvcCgwLCBqKSwgdG9wKDAsIGogKyAxKV0pOyBlMy5wdXNoKFt0b3AobngsIGopLCB0b3AobngsIGogKyAxKV0pOyB9XG4gIGNvbnN0IGVkZ2VzID0gW3N0cmlwKGUwLCBbMCwgMCwgLTFdKSwgc3RyaXAoZTEsIFswLCAwLCAxXSksIHN0cmlwKGUyLCBbLTEsIDAsIDBdKSwgc3RyaXAoZTMsIFsxLCAwLCAwXSldO1xuICAvLyBUaGUgcmltIGlzIHRoZSBzZWFtIGJldHdlZW4gdGhlIHR3byBmYWNlcywgc28gaXQgdGFrZXMgdGhlIFVOREVSIGNvbG91cjogb24gYSBkcmFwZWQgdGFycCB0aGVcbiAgLy8gZWRnZSBpcyB3aGF0IGEgdmlld2VyIHN0YW5kaW5nIGJlc2lkZSBpdCBhY3R1YWxseSBzZWVzLCBhbmQgaXQgaXMgdGhlIGxpbmluZywgbm90IHRoZSB0b3AuIE9uIGFcbiAgLy8gcm9vZiBkZWNrIGl0IGlzIHRoZSBmbHV0ZWQgZWF2ZSwgd2hpY2ggaXMgd2hlcmUgdGhlIHJ1c3QgaXMsIHNvIGBoZXhSaW1gIG92ZXJyaWRlcyBpdC5cbiAgY29uc3QgcmltSGV4ID0gcy5oZXhSaW0gPz8gcy5oZXhVbmRlcjtcbiAgcGFydHMucHVzaCguLi4ocmltSGV4ICE9PSB1bmRlZmluZWQgPyBlZGdlcy5tYXAoKGcpID0+IHBhaW50KGcsIHJpbUhleCkpIDogZWRnZXMpKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhwYXJ0cyk7XG59XG5cbi8qKlxuICogV0VBVEhFUkVEIFBBSU5UIG9uIGEgc3RlZWwgY29udGFpbmVyOiBvbmUgc2VhbWxlc3MgbXVsdGlwbGllciB0aWxlIGNhcnJ5aW5nIGNsZWFuIHBhaW50LCBydXN0XG4gKiBhbmQgY2hhbGtlZCBibG9vbSB0b2dldGhlci5cbiAqXG4gKiBUaGUgdGhyZWUgdG9uZXMgY2Fubm90IHJpZGUgYSBwbGFpbiBtdWx0aXBseSBvdmVyIHRoZSBjbGVhbiBwYWludCwgYmVjYXVzZSBhIGNoYWxrIGJsb29tIGlzXG4gKiBCUklHSFRFUiB0aGFuIHRoZSBwYWludCBpdCBzaXRzIG9uIGluIHR3byBjaGFubmVscyAtLSBhIG11bHRpcGx5IGNhbiBvbmx5IGRhcmtlbi4gU28gdGhlIHZlcnRleFxuICogY29sb3VyIGlzIFJFLUJBU0VEIHRvIGFuIGVudmVsb3BlIGFib3ZlIGV2ZXJ5IHRvbmUgdGhlIHRpbGUgaGFzIHRvIHJlYWNoIChgby5iYXNlYCBpcyB0aGUgY2xlYW5cbiAqIHBhaW50J3Mgb3duIG11bHRpcGxpZXIgYWdhaW5zdCB0aGF0IGVudmVsb3BlLCBhbmQgaXQgaXMgd2hhdCBtb3N0IG9mIHRoZSB0aWxlIGlzIGZpbGxlZCB3aXRoKSxcbiAqIGV4YWN0bHkgYXMgdGhlIGxpY2hlbi1vbi1zdG9uZSByb3V0ZSBkb2VzLiBFdmVyeXRoaW5nIGFmdGVyIHRoZSBmaWxsIGlzIGRyYXduIHNvdXJjZS1vdmVyIGluXG4gKiBhYnNvbHV0ZSBtdWx0aXBsaWVyIHNwYWNlLCBzbyBhIG1hcmsgbWF5IGxhbmQgZWl0aGVyIHNpZGUgb2YgY2xlYW4uXG4gKlxuICogT3JkZXIgbWF0dGVycyBhbmQgaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB3ZWF0aGVyaW5nIGFuZCBjYW1vdWZsYWdlOiBhIHNvZnQgY2xvdWR5IGRyaWZ0XG4gKiBmaXJzdCwgdGhlbiB0aGUgcnVzdCBhcyBjbHVzdGVyZWQgZ3JhbnVsYXIgcGF0Y2hlcyByYXRoZXIgdGhhbiBoYXJkIGJsb3RjaGVzLCB0aGVuIHRoZSBydW5zIGl0XG4gKiBsZWF2ZXMgQkVMT1cgaXRzZWxmLCB0aGVuIHRoZSBjaGFsayBibG9vbXMsIHRoZW4gYSBmaW5lIGdyYWluIG92ZXIgdGhlIGxvdC5cbiAqL1xuZnVuY3Rpb24gcGFpbnRUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gWzEsIDEsIDFdLCBydXN0ID0gby5ydXN0ID8/IGJhc2UsIGNoYWxrID0gby5jaGFsayA/PyBiYXNlO1xuICAgIGNvbnN0IHJ1biA9IG8ucnVuID8/IHJ1c3Q7XG4gICAgLy8gd3JhcCBldmVyeSBtYXJrIHRocmVlIHdheXMgc28gbm90aGluZyBpcyBjdXQgYnkgdGhlIHRpbGUgZWRnZVxuICAgIGNvbnN0IHdyYXAgPSAoZHJhdzogKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpID0+IHZvaWQpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBkcmF3KGR4LCBkeSk7XG4gICAgfTtcbiAgICAvLyBgaGFyZGAga2VlcHMgdGhlIG1hcmsgYXQgZnVsbCBhbHBoYSB0byAwLjcyIG9mIGl0cyByYWRpdXMgYW5kIGRyb3BzIGl0IG92ZXIgdGhlIGxhc3QgcXVhcnRlcjpcbiAgICAvLyBhIHJ1c3QgYmxvb20gb3ZlciBpdHMgQ09NUExFTUVOVCAodGVhbCkgYmxlbmRzIHRvIGEgbmV1dHJhbCBncmV5IGFsb25nIGEgc29mdCBlZGdlLCBhbmQgdGhlXG4gICAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZHMgdGhhdCByaW5nIGFzIGJhY2tkcm9wIC0tIGEgcmVhbCBibG9vbSBoYXMgYSBncmFudWxhciwgbm90IGEgZmVhdGhlcmVkLCBlZGdlLlxuICAgIGNvbnN0IGJsb2IgPSAoYzogbnVtYmVyW10sIHg6IG51bWJlciwgeTogbnVtYmVyLCByOiBudW1iZXIsIGE6IG51bWJlciwgcnkgPSAxLCBoYXJkID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihjKX0sJHthfSlgKTsgZy5hZGRDb2xvclN0b3AoaGFyZCA/IDAuNzIgOiAwLjU1LCBgcmdiYSgke3JnYihjKX0sJHtoYXJkID8gYSA6IGEgKiAwLjQ1fSlgKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKGMpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciwgciAqIHJ5LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgIH07XG5cbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuXG4gICAgLy8gMS4gY2xvdWR5IGRyaWZ0OiBicm9hZCwgdmVyeSBzb2Z0LCBiYXJlbHkgb2ZmIGNsZWFuIC0tIHdoYXQgc3RvcHMgdGhlIGZsYXQgYXJlYXMgcmVhZGluZyBhcyBwYWludCBjaGlwcyBvbiBwbGFzdGljXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5kcmlmdCA/PyAxNCk7IGkrKykge1xuICAgICAgY29uc3QgYyA9IHJuZCgpIDwgMC41ID8gcnVzdCA6IGNoYWxrO1xuICAgICAgYmxvYihjLCBybmQoKSAqIHMsIHJuZCgpICogcywgcyAqICgwLjE4ICsgcm5kKCkgKiAwLjMwKSAqIChvLmRyaWZ0U2NhbGUgPz8gMSksIDAuMDUgKyBybmQoKSAqIDAuMDcsIDAuNiArIHJuZCgpICogMC44KTtcbiAgICB9XG5cbiAgICAvLyAyLiBydXN0OiBjbHVzdGVycywgZWFjaCBhIHNvZnQgcGF0Y2ggd2l0aCBncmFudWxhciBzcGVja3Mgb3ZlciBpdC4gQmFyZSBzdGVlbCBjb3Jyb2RlcyBpblxuICAgIC8vICAgIGZpZWxkcywgbm90IGluIGRvdHM7IGEgc3BlY2sgZmllbGQgd2l0aCBubyBwYXRjaCB1bmRlciBpdCByZWFkcyBhcyBjb25mZXR0aS5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLnJ1c3RDbHVzdGVycyA/PyAxNik7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCBjciA9IHMgKiAoMC4wNCArIHJuZCgpICogMC4xMSkgKiAoby5jbHVzdGVyU2NhbGUgPz8gMSk7XG4gICAgICAvLyBUaGUgY2x1c3RlciBwYXRjaCdzIE9QQUNJVFkuIFRoZSB0aWxlIGlzIGNvbXBvc2l0ZWQgc291cmNlLW92ZXIgb24gdGhlIGJhc2UgZmlsbCwgc28gYVxuICAgICAgLy8gY2x1c3RlciBhdCBhbHBoYSAwLjMwLTAuNjUgYmxlbmRzIHRvIGFuIGludGVybWVkaWF0ZSB0b25lIGFuZCBvbmx5IHRoZSBzcGVja3Mgb3ZlciBpdCBldmVyXG4gICAgICAvLyByZWFjaCB0aGUgYXV0aG9yZWQgcnVzdCAtLSB3aGljaCBpcyByaWdodCBmb3IgYSBydXN0IEJMT09NIG9uIHBhaW50ZWQgc3RlZWwgYW5kIHdyb25nIGZvclxuICAgICAgLy8gdGhlIGJvbGQgY2hpcHBlZCBwYXRjaGVzIGEgcGVlbGluZyBsaWQgY2Fycmllcywgd2hlcmUgYmFyZSBtZXRhbCBpcyBzaW1wbHkgZXhwb3NlZC5cbiAgICAgIC8vIERlZmF1bHRzIGFyZSB0aGUgcHJldmlvdXMgY29uc3RhbnRzIGV4YWN0bHksIHNvIG5vIGV4aXN0aW5nIGNhbGxlciBjaGFuZ2VzLlxuICAgICAgYmxvYihydXN0LCBjeCwgY3ksIGNyLCAoby5ydXN0QWxwaGEgPz8gMC4zMCkgKyBybmQoKSAqIChvLnJ1c3RBbHBoYVZhciA/PyAwLjM1KSwgMC43ICsgcm5kKCkgKiAwLjYsIG8uaGFyZEVkZ2VzID09PSB0cnVlKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3BlY2tzUGVyQ2x1c3RlciA/PyA0MCk7IGkrKykge1xuICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjcjtcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQsIHIgPSAwLjggKyBybmQoKSAqIDIuNDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKG8uc3BlY2tSdW4gPyBydW4gOiBydXN0KX0sJHsoby5zcGVja0FscGhhID8/IDAuMjUpICsgcm5kKCkgKiAoby5zcGVja0FscGhhVmFyID8/IDAuNSl9KWA7ICAgLy8gc3BlY2tSdW46IGRhcmtlciBzcGVja3MgdGhhdCB0ZXh0dXJlIGFuIG9wYXF1ZSBibG9vbVxuICAgICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgfVxuICAgICAgLy8gdGhlIHJ1biBpdCBsZWF2ZXMgYmVsb3cgaXRzZWxmOiBydXN0IGJsZWVkcyBET1dOIGEgdmVydGljYWwgcGFuZWwgYW5kIG5vd2hlcmUgZWxzZVxuICAgICAgaWYgKHJuZCgpIDwgKG8ucnVuQ2hhbmNlID8/IDAuNTUpKSB7XG4gICAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTAsIGxlbiA9IHMgKiAoMC4xMCArIHJuZCgpICogMC4zNSk7XG4gICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgY3ksIDAsIGN5ICsgbGVuKTtcbiAgICAgICAgY29uc3QgcmEgPSAoby5ydW5BbHBoYSA/PyAwLjE2KSArIHJuZCgpICogMC4xODtcbiAgICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnVuKX0sJHtyYX0pYCk7IGlmIChvLmhhcmRFZGdlcykgZy5hZGRDb2xvclN0b3AoMC45MiwgYHJnYmEoJHtyZ2IocnVuKX0sJHtyYX0pYCk7IGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHJ1bil9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgICB3cmFwKChkeCkgPT4gY3R4LmZpbGxSZWN0KGN4ICsgZHggKyAocm5kKCkgLSAwLjUpICogY3IsIGN5LCB3LCBsZW4pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBjaGFsayBibG9vbTogbGFyZ2UsIHZlcnkgc29mdCwgbG93LWNvbnRyYXN0LiBJdCBpcyB0aGUgdG9uZSB0aGUgdGlsZSB3YXMgcmUtYmFzZWQgZm9yLlxuICAgIGNvbnN0IGNzY2FsZSA9IG8uY2hhbGtTY2FsZSA/PyAxLCBjYWxwaGEgPSBvLmNoYWxrQWxwaGEgPz8gMC4zNTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLmNoYWxrUGF0Y2hlcyA/PyA5KTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIGNyID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjEwKSAqIGNzY2FsZTtcbiAgICAgIGJsb2IoY2hhbGssIGN4LCBjeSwgY3IsIGNhbHBoYSArIHJuZCgpICogMC4zMCwgMC41ICsgcm5kKCkgKiAwLjcpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyICogMS4yNTtcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQgKiAwLjcsIHIgPSAxICsgcm5kKCkgKiAzO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IoY2hhbGspfSwkezAuMiArIHJuZCgpICogMC40fSlgO1xuICAgICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDQuIHRoZSB0d28gbWFya3MgdGhhdCBvbmx5IG1ha2Ugc2Vuc2Ugb25jZSB0aGUgdGlsZSBpcyBIRUlHSFQta2V5ZWQ6IGxvbmcgcnVucyBibGVlZGluZyBkb3duXG4gICAgLy8gICAgZnJvbSB0aGUgdG9wIGVkZ2UgKHRoZSB0b3AgcmFpbCBpcyB3aGVyZSB3YXRlciBzaXRzIGFuZCB0aGUgcGFpbnQgZ29lcyBmaXJzdCkgYW5kIGEgZGlydFxuICAgIC8vICAgIGJhbmQgYWxvbmcgdGhlIGJvdHRvbS4gQm90aCBhcmUgbm8tb3BzIG9uIGEgd29ybGQtc3BhY2UgdGlsZSwgd2hlcmUgdGhlcmUgaXMgbm8gdXAuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby50b3BTdHJlYWtzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogKG8uc3RyZWFrV2lkdGggPz8gMC4wMTQpLCBsZW4gPSBzICogKDAuMjUgKyBybmQoKSAqIDAuNTUpO1xuICAgICAgY29uc3QgYSA9IChvLnN0cmVha0FscGhhID8/IDAuMTApICsgcm5kKCkgKiAwLjIyO1xuICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBsZW4pO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IocnVuKX0sJHthfSlgKTsgZy5hZGRDb2xvclN0b3Aoby5oYXJkRWRnZXMgPyAwLjkyIDogMC4yNSwgYHJnYmEoJHtyZ2IocnVzdCl9LCR7by5oYXJkRWRnZXMgPyBhIDogYSAqIDAuOH0pYCk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydXN0KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCAwLCB3LCBsZW4pO1xuICAgIH1cbiAgICAvLyA0Yi4gQVRMQVMgbWFya3MgZm9yIGEgdGlsZSBtYXBwZWQgT05DRSB1cCBhIHByb3AgKGN5bFVWIHdpdGggdGhlIHRpbGUgaGVpZ2h0ID0gdGhlIHByb3AgaGVpZ2h0KTpcbiAgICAvLyAgICAgYGhiYW5kc2AgcGFpbnRzIGEgdG9uZSBhY3Jvc3MgYSBob3Jpem9udGFsIGJhbmQgb2YgdiAoYSBydXN0ZWQgY2hpbWUsIGEgd29ybiBob29wIGNyb3duKSxcbiAgICAvLyAgICAgYGJhbmRTdHJlYWtzYCBoYW5ncyBydW5zIGZyb20gYSBnaXZlbiB2ICh3YXRlciBzaXRzIG9uIGEgcm9sbGluZyBob29wIGFuZCBibGVlZHMgZG93biBmcm9tIGl0LFxuICAgIC8vICAgICBleGFjdGx5IGFzIGl0IGRvZXMgZnJvbSB0aGUgdG9wIGVkZ2UpLCBhbmQgYHN0ZW5jaWxgIGEgcGFpbnRlZCBtYXJrIGF0ICh1LCB2KS4gdiBpcyB1cC5cbiAgICBmb3IgKGNvbnN0IGhiIG9mIChvLmhiYW5kcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IHkwID0gcyAqICgxIC0gaGIudjEpLCB5MSA9IHMgKiAoMSAtIGhiLnYwKSwgdG9uZSA9IGhiLnRvbmUgPz8gcnVzdDtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYih0b25lKX0sJHtoYi5hbHBoYSA/PyAwLjh9KWA7IGN0eC5maWxsUmVjdCgwLCB5MCwgcywgeTEgLSB5MCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChoYi5zcGVja3MgPz8gMCk7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0geTAgKyBybmQoKSAqICh5MSAtIHkwKSwgciA9IDAuOCArIHJuZCgpICogMi4yO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iocm5kKCkgPCAwLjUgPyBydW4gOiBiYXNlKX0sJHswLjIgKyBybmQoKSAqIDAuNX0pYDtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGJzIG9mIChvLmJhbmRTdHJlYWtzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgeTAgPSBzICogKDEgLSBicy52KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGJzLmNvdW50ID8/IDEyKTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogKGJzLndpZHRoID8/IDAuMDEyKSwgbGVuID0gcyAqICgoYnMubGVuID8/IDAuMTIpICsgcm5kKCkgKiAoYnMubGVuVmFyID8/IDAuMjUpKTtcbiAgICAgICAgY29uc3QgYSA9IChicy5hbHBoYSA/PyAwLjE0KSArIHJuZCgpICogMC4yMjtcbiAgICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5MCwgMCwgeTAgKyBsZW4pO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke2F9KWApOyBnLmFkZENvbG9yU3RvcChvLmhhcmRFZGdlcyA/IDAuOTIgOiAwLjMsIGByZ2JhKCR7cmdiKHJ1c3QpfSwke28uaGFyZEVkZ2VzID8gYSA6IGEgKiAwLjh9KWApO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydXN0KX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggKyBkeCwgeTAgLSAyLCB3LCBsZW4pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoby5zdGVuY2lsKSB7XG4gICAgICBjb25zdCBzdCA9IG8uc3RlbmNpbCwgcHggPSBzICogKHN0LnNpemUgPz8gMC4wNik7XG4gICAgICBjdHguZm9udCA9IGBib2xkICR7cHh9cHggc2Fucy1zZXJpZmA7IGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJzsgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHN0LnRvbmUgPz8gY2hhbGspfSwke3N0LmFscGhhID8/IDAuODV9KWA7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsVGV4dChzdC50ZXh0LCBzICogKHN0LnUgPz8gMC41KSArIGR4LCBzICogKDEgLSAoc3QudiA/PyAwLjUpKSk7XG4gICAgfVxuICAgIGlmIChvLmdyb3VuZEJhbmQpIHtcbiAgICAgIGNvbnN0IGIgPSBvLmdyb3VuZEJhbmQsIGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gKG8uZ3JvdW5kSGVpZ2h0ID8/IDAuMjIpKSk7XG4gICAgICBnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydW4pfSwke2J9KWApOyBnLmFkZENvbG9yU3RvcCgwLjQ1LCBgcmdiYSgke3JnYihydW4pfSwke2IgKiAwLjR9KWApO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnVuKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfVxuXG4gICAgLy8gNS4gZmluZSBncmFpbjogdGhlIHRvb3RoIG9mIGEgYnJ1c2gtcm9sbGVkIGluZHVzdHJpYWwgcGFpbnQuIE11bHRpcGx5LCBzbyBpdCBvbmx5IGRhcmtlbnMuXG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ncmFpbiA/PyAxODAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMC41ICsgcm5kKCkgKiAxLjMsIGEgPSAwLjAzICsgcm5kKCkgKiAwLjA3O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDE1MCwxNDAsMTMwLCR7YX0pYDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqXG4gKiBBIFNXRVBUIHBvbHlsaW5lIHR1YmU6IE9ORSByaW5nIG9mIGBzZWdgIHZlcnRpY2VzIHBlciBwb2ludCwgbWl0cmVkIGF0IGV2ZXJ5IGJlbmQsIGluZGV4ZWQgYW5kXG4gKiBzbW9vdGgtc2hhZGVkLiBUaGlzIGlzIG5vdCB3aGF0IGB0dWJlYCBkb2VzLCBhbmQgdGhlIGRpZmZlcmVuY2UgaXMgYSB2aXNpYmxlIGRlZmVjdCByYXRoZXIgdGhhbiBhXG4gKiByZWZpbmVtZW50LiBgdHViZWAgY2hhaW5zIGEgc2VwYXJhdGUgY3lsaW5kZXIgcGVyIHNlZ21lbnQgYW5kIEVYVEVORFMgZWFjaCBvbmUgYnkgYHIgKiAxLjJgIHNvIHRoZVxuICogam9pbnRzIGNsb3NlIC0tIHdoaWNoIGlzIGZpbmUgd2hpbGUgdGhlIHNlZ21lbnRzIGFyZSBsb25nLCBhbmQgY2F0YXN0cm9waGljIG9uIGEgdGlnaHQgY3VydmU6IGFcbiAqIDAuMTIgbSBjb3JuZXIgcmFkaXVzIHNhbXBsZWQgaW4gZml2ZSBzdGVwcyBoYXMgYSAwLjAzOCBtIGNob3JkIGFnYWluc3QgYSAwLjAyNSBtIG92ZXJsYXAsIHNvXG4gKiBjb25zZWN1dGl2ZSBjeWxpbmRlcnMgb3ZlcnNob290IGVhY2ggb3RoZXIgYnkgdHdvIHRoaXJkcyBvZiB0aGVpciBsZW5ndGggYW5kIHRoZSBiZW5kIHJlbmRlcnMgYXMgYVxuICogY3J1bXBsZWQgYWNjb3JkaW9uIG9mIHBsZWF0cy4gVGhlIGNyb3dkIGJhcnJpZXIncyByb3VuZGVkIHRvcCBjb3JuZXJzIHNoaXBwZWQgdGhhdCB3YXkuXG4gKlxuICogVGhlIGZyYW1lIGlzIHJvdGF0aW9uLW1pbmltaXNpbmcgKHBhcmFsbGVsIHRyYW5zcG9ydCksIG5vdCBGcmVuZXQ6IGEgRnJlbmV0IGZyYW1lIGZsaXBzIGl0cyBub3JtYWxcbiAqIHRocm91Z2ggYW4gaW5mbGVjdGlvbiBhbmQgdHdpc3RzIHRoZSB0dWJlLCB3aGljaCBhIFVWIG9yIGEgdmVydGV4IGNvbG91ciB0aGVuIHNob3dzIGFzIGEgc3RyaXBlXG4gKiBzcGlyYWxsaW5nIGFsb25nIGEgcmFpbCB0aGF0IGlzIG1lYW50IHRvIGJlIHN0cmFpZ2h0LiBJbnRlcmlvciBwb2ludHMgcmluZyBvbiB0aGUgQklTRUNUT1Igb2YgdGhlXG4gKiB0d28gYWRqYWNlbnQgdGFuZ2VudHMsIHdoaWNoIGlzIHRoZSBtaXRyZSBhIHJlYWwgYmVudCB0dWJlIGhhcy5cbiAqL1xuZnVuY3Rpb24gc3dlZXBUdWJlKHB0czogbnVtYmVyW11bXSwgcjogbnVtYmVyLCBzZWcgPSAxMCwgaGV4PzogbnVtYmVyLCBjYXAgPSB0cnVlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBQID0gcHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjMocFswXSwgcFsxXSwgcFsyXSkpO1xuICAvLyBkcm9wIHJlcGVhdGVkIHBvaW50czogYSB6ZXJvLWxlbmd0aCBzZWdtZW50IGhhcyBubyB0YW5nZW50LCBhbmQgb25lIGR1cGxpY2F0ZSBpcyBlbm91Z2ggdG9cbiAgLy8gcHV0IGEgTmFOIHRocm91Z2ggdGhlIHdob2xlIHRyYW5zcG9ydCBjaGFpblxuICBmb3IgKGxldCBpID0gUC5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSBpZiAoUFtpXS5kaXN0YW5jZVRvKFBbaSAtIDFdKSA8IDFlLTcpIFAuc3BsaWNlKGksIDEpO1xuICBpZiAoUC5sZW5ndGggPCAyKSByZXR1cm4gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGNvbnN0IG4gPSBQLmxlbmd0aDtcbiAgY29uc3Qgc2VnRGlyOiBUSFJFRS5WZWN0b3IzW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSBzZWdEaXIucHVzaChQW2kgKyAxXS5jbG9uZSgpLnN1YihQW2ldKS5ub3JtYWxpemUoKSk7XG4gIC8vIHBlci1wb2ludCB0YW5nZW50OiB0aGUgc2VnbWVudCBkaXJlY3Rpb24gYXQgdGhlIGVuZHMsIHRoZSBiaXNlY3RvciBiZXR3ZWVuIHR3byBzZWdtZW50cyBpbnNpZGVcbiAgY29uc3QgVCA9IFAubWFwKChfLCBpKSA9PiBpID09PSAwID8gc2VnRGlyWzBdLmNsb25lKClcbiAgICA6IGkgPT09IG4gLSAxID8gc2VnRGlyW24gLSAyXS5jbG9uZSgpXG4gICAgOiBzZWdEaXJbaSAtIDFdLmNsb25lKCkuYWRkKHNlZ0RpcltpXSkubm9ybWFsaXplKCkpO1xuICAvLyBzZWVkIGEgbm9ybWFsIHRoYXQgaXMgbm90IHBhcmFsbGVsIHRvIHRoZSBmaXJzdCB0YW5nZW50LCB0aGVuIHRyYW5zcG9ydCBpdCBwb2ludCB0byBwb2ludFxuICBsZXQgTiA9IE1hdGguYWJzKFRbMF0ueSkgPiAwLjkgPyBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKSA6IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApO1xuICBOLnN1YihUWzBdLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoTi5kb3QoVFswXSkpKS5ub3JtYWxpemUoKTtcbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgaWYgKGkgPiAwKSB7XG4gICAgICAvLyByb3RhdGUgdGhlIGNhcnJpZWQgbm9ybWFsIGJ5IHRoZSBzYW1lIHJvdGF0aW9uIHRoYXQgdGFrZXMgdGhlIHByZXZpb3VzIHRhbmdlbnQgdG8gdGhpcyBvbmVcbiAgICAgIGNvbnN0IHEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhUW2kgLSAxXSwgVFtpXSk7XG4gICAgICBOLmFwcGx5UXVhdGVybmlvbihxKTtcbiAgICAgIE4uc3ViKFRbaV0uY2xvbmUoKS5tdWx0aXBseVNjYWxhcihOLmRvdChUW2ldKSkpLm5vcm1hbGl6ZSgpO1xuICAgIH1cbiAgICBjb25zdCBCID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jcm9zc1ZlY3RvcnMoVFtpXSwgTikubm9ybWFsaXplKCk7XG4gICAgLy8gYSBtaXRyZWQgcmluZyBpcyBhbiBFTExJUFNFIGluIGl0cyBvd24gcGxhbmU6IHdpZGVuIGl0IGJ5IDEvY29zKGhhbGYtYW5nbGUpIGFsb25nIHRoZSBiZW5kIHNvXG4gICAgLy8gdGhlIHN3ZXB0IHNlY3Rpb24gc3RheXMgY2lyY3VsYXIgdGhyb3VnaCB0aGUgY29ybmVyIHJhdGhlciB0aGFuIHBpbmNoaW5nIHRvIGEgd2Fpc3RcbiAgICBjb25zdCBrID0gaSA+IDAgJiYgaSA8IG4gLSAxID8gMSAvIE1hdGgubWF4KDAuNSwgc2VnRGlyW2kgLSAxXS5kb3QoVFtpXSkpIDogMTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCB0aCA9IGogKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICAgIGNvbnN0IGMgPSBNYXRoLmNvcyh0aCksIHMgPSBNYXRoLnNpbih0aCk7XG4gICAgICBwb3MucHVzaChQW2ldLnggKyAoTi54ICogYyArIEIueCAqIHMgKiBrKSAqIHIsIFBbaV0ueSArIChOLnkgKiBjICsgQi55ICogcyAqIGspICogciwgUFtpXS56ICsgKE4ueiAqIGMgKyBCLnogKiBzICogaykgKiByKTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuIC0gMTsgaSsrKSBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgLy8gKGEsIGMyLCBiKSwgTk9UIChhLCBiLCBjMikuIFRoZSByaW5nIHJ1bnMgTiAtPiBCIHdpdGggQiA9IFQgeCBOLCBzbyB3aW5kaW5nIGFsb25nIHRoZSB0dWJlXG4gICAgLy8gZmlyc3QgYW5kIGFyb3VuZCBpdCBzZWNvbmQgZ2l2ZXMgYSBmYWNlIG5vcm1hbCBvZiBUIHggQiA9IC1OOiBldmVyeSB3YWxsIHRyaWFuZ2xlIGZhY2VzIElOV0FSRC5cbiAgICAvLyBCYWNrZmFjZSBjdWxsaW5nIHRoZW4gaGlkZXMgdGhlIG5lYXIgd2FsbCBhbmQgc2hvd3MgdGhlIEZBUiBvbmUsIHdoaWNoIGZvciBhIGxpdCBncmV5IHR1YmUgbG9va3NcbiAgICAvLyBhbG1vc3QgcmlnaHQgLS0gYW5kIHdyaXRlcyBpdHMgZGVwdGggb24gdGhlIGZhciBzaWRlLCBzbyBhbnl0aGluZyBwYXNzaW5nIHRocm91Z2ggdGhlIHR1YmUgZHJhd3NcbiAgICAvLyBpbiBmcm9udCBvZiBpdC4gVGhlIGZvb3Qgc3R1YnMgc3Rvb2QgcHJvdWRseSB0aHJvdWdoIHRoZSBib3R0b20gcmFpbCBiZWNhdXNlIG9mIHRoaXMsIGFuZCBpdFxuICAgIC8vIHJlYWQgYXMgYSBnZW9tZXRyeSBlcnJvciBpbiB0aGUgc3R1YiByYXRoZXIgdGhhbiBhIHdpbmRpbmcgZXJyb3IgaW4gdGhlIHN3ZWVwLlxuICAgIGNvbnN0IGEgPSBpICogc2VnICsgaiwgYiA9IChpICsgMSkgKiBzZWcgKyBqLCBjMiA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgaWR4LnB1c2goYSwgYzIsIGIsIGEsIGQsIGMyKTtcbiAgfVxuICBpZiAoY2FwKSB7XG4gICAgLy8gRmxhdCBlbmQgZGlzY3MsIG9uIHRoZWlyIE9XTiBDT1BZIG9mIHRoZSByaW0gdmVydGljZXMuIEZhbm5pbmcgdGhlbSBvZmYgdGhlIHNpZGUgd2FsbCdzIHJpbmdcbiAgICAvLyBzaGFyZXMgdGhvc2UgdmVydGljZXMsIGFuZCBgY29tcHV0ZVZlcnRleE5vcm1hbHNgIHRoZW4gYXZlcmFnZXMgdGhlIGRpc2MncyBheGlhbCBub3JtYWwgaW50b1xuICAgIC8vIHRoZSB3YWxsJ3MgcmFkaWFsIG9uZSAtLSB3aGljaCBkb2VzIG5vdCBzaGFkZSBhIHNsaWdodGx5IHdyb25nIHJpbSwgaXQgdGlsdHMgdGhlIG5vcm1hbCBhdCBCT1RIXG4gICAgLy8gZW5kcyBvZiBhIHR3by1wb2ludCB0dWJlIGFuZCBzbyBzaGFkZXMgdGhlIFdIT0xFIHR1YmUgd3JvbmcuIFRoZSBmb290IHN0dWJzIHJlbmRlcmVkIGFzIGdsYXNzXG4gICAgLy8gdGVzdCB0dWJlcyB3aXRoIGEgYnJpZ2h0IGJhbmQgdW5kZXIgdGhlIHJhaWwsIGFuZCB0aGUgYmFuZCByZWFkIGFzIGEgc2VwYXJhdGUgb2JqZWN0IHNpdHRpbmcgb25cbiAgICAvLyBpdC4gU2FtZSBmYXVsdCwgc2FtZSBmaXgsIGFzIHRoZSBzaGFycC1jb3JuZXIgc3BsaXQgaW4gYGxhdGhlYC5cbiAgICBmb3IgKGNvbnN0IFtyaW5nLCBhdCwgZmxpcF0gb2YgW1swLCBQWzBdLCB0cnVlXSwgW24gLSAxLCBQW24gLSAxXSwgZmFsc2VdXSBhcyBbbnVtYmVyLCBUSFJFRS5WZWN0b3IzLCBib29sZWFuXVtdKSB7XG4gICAgICBjb25zdCBiYXNlID0gcG9zLmxlbmd0aCAvIDM7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7IGNvbnN0IGsgPSAocmluZyAqIHNlZyArIGopICogMzsgcG9zLnB1c2gocG9zW2tdLCBwb3NbayArIDFdLCBwb3NbayArIDJdKTsgfVxuICAgICAgY29uc3QgY2kgPSBwb3MubGVuZ3RoIC8gMzsgcG9zLnB1c2goYXQueCwgYXQueSwgYXQueik7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBiYXNlICsgaiwgYiA9IGJhc2UgKyAoaiArIDEpICUgc2VnO1xuICAgICAgICBpZiAoZmxpcCkgaWR4LnB1c2goY2ksIGIsIGEpOyBlbHNlIGlkeC5wdXNoKGNpLCBhLCBiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBnIDogdGludEdlbyhnLCBoZXgpO1xufVxuXG4vKipcbiAqIEZST05ULUFUTEFTIFVWczogZXZlcnkgdmVydGV4IHdob3NlIG5vcm1hbCBmYWNlcyArWiBhbmQgdGhhdCBsaWVzIGluc2lkZSB0aGUgYXRsYXMncyB3b3JsZFxuICogcmVjdGFuZ2xlIHRha2VzIGEgUExBTkFSICh4LCB5KSBVViBpbnRvIGEgYmFrZWQgZnJvbnQtZWxldmF0aW9uIGltYWdlLCBhbmQgZXZlcnkgb3RoZXIgdmVydGV4IGlzXG4gKiBwaW5uZWQgdG8gb25lIGNsZWFuIHRleGVsIG9mIGl0LiBBIHdhbGwtbW91bnRlZCBib3ggc2VlbiBmcm9tIHRoZSBmcm9udCBJUyBpdHMgZWxldmF0aW9uLCBzbyB0aGVcbiAqIHBsYXRlJ3Mgb3duIHByaW50ZWQgbGFiZWxzLCBzY3JldyBoZWFkcywgZ2Fza2V0IGxpbmUgYW5kIHJ1c3QgbGFuZCBleGFjdGx5IHdoZXJlIHRoZSBnZW9tZXRyeVxuICogcHV0cyB0aGVtLCBvbiBvbmUgbWF0ZXJpYWwuIGBiYXNlYCBvdmVycmlkZXMgdGhlIGZyb250IHZlcnRpY2VzJyBjb2xvdXIsIGJlY2F1c2UgdGhlIGF0bGFzIGlzIGFcbiAqIHJhdGlvIG92ZXIgb25lIHJlZmVyZW5jZSB0b25lIGFuZCB0aGUgcGVyLXBhcnQgdGludHMgb25seSBiZWxvbmcgb24gdGhlIGZhY2VzIHRoZSBhdGxhcyBkb2VzIG5vdFxuICogcmVhY2guIGB5TWluYCBrZWVwcyBwYXJ0cyBoYW5naW5nIGJlbG93IHRoZSBhdGxhcyAoYSBjb25kdWl0IHN0dWIpIG91dCBvZiBpdC5cbiAqL1xuZnVuY3Rpb24gZnJvbnRBdGxhc1VWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGE6IGFueSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBjb25zdCBjb2wgPSBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSB8IG51bGw7XG4gIGNvbnN0IGJhc2UgPSBhLmJhc2UgIT09IHVuZGVmaW5lZCA/IG5ldyBUSFJFRS5Db2xvcihhLmJhc2UpIDogbnVsbDtcbiAgY29uc3QgbWluTnogPSBhLm1pbk56ID8/IDAuNztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB4ID0gcC5nZXRYKGkpLCB5ID0gcC5nZXRZKGkpO1xuICAgIC8vIDFlLTQgdG9sZXJhbmNlOiBhIGNhcCB2ZXJ0ZXggc2l0dGluZyBleGFjdGx5IG9uIHRoZSBhdGxhcyBib3VuZGFyeSAodGhlIHNwZWVkIHNpZ24ncyBkaXNjIGF0IHggPSAtYXcvMilcbiAgICAvLyBmYWlsZWQgdGhlIHRlc3QgYnkgZmxvYXQgZXJyb3IsIHdhcyBwaW5uZWQsIGFuZCBpdHMgdGhyZWUgdHJpYW5nbGVzIHNtZWFyZWQgdGhlIHdob2xlIGF0bGFzIHJvdyBkb3duXG4gICAgLy8gdGhlIGRpc2MncyBlZGdlICgyMDI2LTA5LTAzKS5cbiAgICBjb25zdCBFID0gMWUtNDtcbiAgICBjb25zdCBmcm9udCA9IG5ybS5nZXRaKGkpID4gbWluTnogJiYgeCA+PSBhLngwIC0gRSAmJiB4IDw9IGEueDEgKyBFICYmIHkgPj0gKGEueU1pbiA/PyBhLnkxKSAtIEUgJiYgeSA8PSBhLnkwICsgRTtcbiAgICBpZiAoZnJvbnQpIHtcbiAgICAgIHV2W2kgKiAyXSA9ICh4IC0gYS54MCkgLyAoYS54MSAtIGEueDApO1xuICAgICAgdXZbaSAqIDIgKyAxXSA9ICh5IC0gYS55MSkgLyAoYS55MCAtIGEueTEpO1xuICAgICAgaWYgKGJhc2UgJiYgY29sKSBjb2wuc2V0WFlaKGksIGJhc2UuciwgYmFzZS5nLCBiYXNlLmIpO1xuICAgIH0gZWxzZSB7IHV2W2kgKiAyXSA9IGEucGluWzBdOyB1dltpICogMiArIDFdID0gYS5waW5bMV07IH1cbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgaWYgKGNvbCkgY29sLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZlbmNlIGhlbHBlcnMgKi9cblxuLyoqIFBhbmVsIFVWczogdSBhbG9uZyB3b3JsZCBYIG92ZXIgYHNjYWxlYCBtZXRyZXMsIHYgd29ybGQgSEVJR0hUIG92ZXIgdGhlIHNhbWUsIHJlZ2FyZGxlc3Mgb2YgdGhlXG4gKiAgZmFjZSBub3JtYWwuIE9uIGEgdGhpbiBzbGFiIHRoaXMgbWVhbnMgdGhlIGZyb250IGFuZCBiYWNrIGZhY2VzIHNoYXJlIHRoZSBzYW1lIHRpbGUgcGxhY2VtZW50XG4gKiAgYW5kIHRoZSBlZGdlcyB0YWtlIGEgc2xpdmVyIG9mIGl0OyBhIGdyaW1lIHdhc2ggdGhhdCBrZXlzIG9uIHYgdGhlbiBsYW5kcyBhdCB0aGUgc2FtZSBoZWlnaHQgb25cbiAqICBldmVyeSBmYWNlLCB3aGljaCBpcyB3aGF0IHJhaW4gYW5kIGFsZ2FlIGRvLiAqL1xuZnVuY3Rpb24gcGFuZWxVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyLCByb3QgPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIC8vIGByb3RgIHN3YXBzIHRoZSBheGVzIHNvIGEgdGlsZSBvZiBWRVJUSUNBTCBzdHJpcHMgcmVhZHMgaG9yaXpvbnRhbCAtLSB0aGUgd292ZW4gYmFuZHMgb2YgYVxuICAvLyBiYW1ib28gcGFuZWwgYWdhaW5zdCBpdHMgdmVydGljYWwgbXVsbGlvbnMsIG9uZSB0aWxlLCBvbmUgbWF0ZXJpYWwuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdSA9IHJvdCA/IHAuZ2V0WShpKSA6IHAuZ2V0WChpKSwgdiA9IHJvdCA/IHAuZ2V0WChpKSA6IHAuZ2V0WShpKTtcbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSB2IC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBBIHNxdWFyZSBweXJhbWlkIFNQSUtFOiBiYXNlIHcgeCB3IGF0IGBhdGAsIGFwZXggaCBhYm92ZS4gQSBwaWNrZXQncyBzcGVhciBwb2ludCwgYSBwaWVyIGNhcC4gKi9cbmZ1bmN0aW9uIHNwaWtlKGF0OiBudW1iZXJbXSwgdzogbnVtYmVyLCBoOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ29uZUdlb21ldHJ5KHcgLyBNYXRoLlNRUlQyLCBoLCA0LCAxLCBmYWxzZSk7XG4gIGcucm90YXRlWShNYXRoLlBJIC8gNCk7XG4gIGcudHJhbnNsYXRlKGF0WzBdLCBhdFsxXSArIGggLyAyLCBhdFsyXSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogR1JJTUUgdGlsZTogYSBtdWx0aXBsaWVyIG9mIHdoaXRlIHdpdGggKGEpIGEgZGFyayB3YXNoIHJpc2luZyBmcm9tIHRoZSBncm91bmQgdG8gYGNvdmVyYWdlYCxcbiAqIChiKSB2ZXJ0aWNhbCByYWluIHN0cmVha3MgZnJvbSB0aGUgdG9wLCAoYykgc29mdCBkYXJrIGJsb3RjaGVzLCAoYzIpIGJyb2FkIENMT1VEIG1vdHRsaW5nLFxuICogKGQpIHN3ZXB0IHR5cmUgU0NVRkZTIG92ZXIgYVxuICogaGVpZ2h0IGJhbmQsIChlKSB2ZXJ0aWNhbCBmb3JtIFNFQU1TLCAoZikgUElOSE9MRVMgLS0gdGhlIGFpciBidWJibGVzIG9mIGEgcHJlY2FzdCBmYWNlLCAoZylcbiAqIG9wdGlvbmFsIGdyZWVuIG1vc3MvYWxnYWUgYmxvYnMgY29uY2VudHJhdGVkIGluIHRoZSBib3R0b20gYmFuZCwgYW5kIChoKSBmaW5lIGdyYWluLiAoZCksIChlKVxuICogYW5kIChmKSBhcmUgb2ZmIHVubGVzcyBhc2tlZCBmb3IsIHNvIG5vdGhpbmcgYWxyZWFkeSBlbWl0dGVkIGNoYW5nZXMuIEV2ZXJ5IGNvbG91ciBpcyBhIGZyYWN0aW9uIG9mIHRoZVxuICogbWF0ZXJpYWwncyBtZWFzdXJlZCBhbGJlZG8sIGFuZCB0aGUgZGFya2VzdCBjb3JlIGlzIGNsYW1wZWQgc28gbm90aGluZyBvbiBhIHdoaXRlIG9yIGNyZWFtXG4gKiBzdXJmYWNlIGRyb3BzIHRvd2FyZCB0aGUgaG9sZSBnYXRlJ3MgbHVtYSA1OC5cbiAqL1xuZnVuY3Rpb24gZ3JpbWVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX1gO1xuICAgIGNvbnN0IHdhc2ggPSBvLndhc2ggPz8gWzAuNjIsIDAuNjIsIDAuNThdLCB3YXNoQSA9IG8ud2FzaEFscGhhID8/IDAuNywgY292ID0gby5jb3ZlcmFnZSA/PyAwLjM7XG4gICAgLy8gYGJhc2VgIGlzIHRoZSB0b25lIHRoZSBVTi1ncmltZWQgcGFydCBvZiB0aGUgdGlsZSBjYXJyaWVzLCBkZWZhdWx0aW5nIHRvIHdoaXRlIC0tIGkuZS4gdG9cbiAgICAvLyBcImxlYXZlIHRoZSB2ZXJ0ZXggY29sb3VyIGFsb25lXCIsIHdoaWNoIGlzIGV2ZXJ5IGV4aXN0aW5nIGNhbGxlci4gSXQgZXhpc3RzIGZvciBFTlZFTE9QRVxuICAgIC8vIFJFLUJBU0lORzogYSBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4sIHNvIGEgcGFydCB0aGF0IG11c3QgcmVhZCBjbGVhbiBvcmFuZ2UgaW4gb25lIHBsYWNlIGFuZFxuICAgIC8vIGdyZXkgcm9hZCBncmltZSBpbiBhbm90aGVyIGNhbm5vdCBkbyBpdCBmcm9tIGEgc2luZ2xlIHZlcnRleCBjb2xvdXIsIGJlY2F1c2UgdGhlIGdyaW1lIGlzXG4gICAgLy8gSElHSEVSIGluIGJsdWUgdGhhbiB0aGUgb3JhbmdlIGlzLiBUaGUgdmVydGV4IGNvbG91ciBiZWNvbWVzIHRoZSBwZXItY2hhbm5lbCBtYXhpbXVtIG9mIGJvdGhcbiAgICAvLyBhbmQgdGhpcyBmaWxsIHBhaW50cyB0aGUgY2xlYW4gdG9uZSBiYWNrIG91dCBvZiBpdC5cbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IFsxLCAxLCAxXTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIC8vIHJhaW4gc3RyZWFrcyBmcm9tIHRoZSB0b3BcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnN0cmVha3MgPz8gMjYpOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTIsIGxlbiA9IHMgKiAoMC4xNSArIHJuZCgpICogMC42KSwgYSA9IDAuMDUgKyBybmQoKSAqIDAuMTI7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCBsZW4pO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGN0eC5maWxsUmVjdCh4LCAwLCB3LCBsZW4pOyBjdHguZmlsbFJlY3QoeCAtIHMsIDAsIHcsIGxlbik7XG4gICAgfVxuICAgIC8vIGdyb3VuZCB3YXNoLiBgd2FzaEZsYXRgIG1ha2VzIGl0IFVOSUZPUk0gaW5zdGVhZCBvZiBhIGJvdHRvbS11cCBncmFkaWVudCwgd2hpY2ggaXMgd2hhdCBhXG4gICAgLy8gaG9yaXpvbnRhbCBzbGFiIG5lZWRzOiBhIGdyYWRpZW50IGtleWVkIHRvIHRoZSB0aWxlJ3MgdiBtYXBzIHN0cmFpZ2h0IGFjcm9zcyBhIGZsYXQgZmFjZSBhbmRcbiAgICAvLyBzcGxpdHMgaXQgaW50byBhIHBhbGUgaGFsZiBhbmQgYSBkYXJrIGhhbGYgd2l0aCBhIGhhcmQgZWRnZSBiZXR3ZWVuIHRoZW0uIERlZmF1bHRlZCBvZmYsIHNvXG4gICAgLy8gZXZlcnkgcHJvcCB0aGF0IGRvZXMgbm90IGFzayBmb3IgaXQgaXMgdW5jaGFuZ2VkLlxuICAgIGlmIChvLndhc2hGbGF0KSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iod2FzaCl9LCR7d2FzaEF9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3YpKTtcbiAgICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBfSlgKTsgZ3JhZC5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQSAqIDAuNDV9KWApOyBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgfVxuICAgIC8vIGJsb3RjaGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ibG90Y2hlcyA/PyA0MCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMS42KSAqIHMsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wNiwgYSA9IDAuMDggKyBybmQoKSAqIDAuMztcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIFJVQlM6IG5lYXItYmxhY2sgdHlyZSBzbWVhcnMgbG93IG9uIHRoZSB0aWxlLiBEaXN0aW5jdCBmcm9tIGBibG90Y2hlc2AsIHdoaWNoIGRhcmtlbiB0b3dhcmRcbiAgICAvLyB0aGUgZ3JpbWUgdG9uZTogYSB0eXJlIHJ1YiBpcyBhIGRpZmZlcmVudCBjb2xvdXIgYW5kIGEgZGlmZmVyZW50IHNoYXBlIC0tIGxvbmcsIGxvdywgYW5kIG11Y2hcbiAgICAvLyBkYXJrZXIgdGhhbiBhbnl0aGluZyB3ZWF0aGVyIGRvZXMuIERlZmF1bHQgMCwgc28gbm8gZXhpc3RpbmcgY2FsbGVyIGNoYW5nZXMuXG4gICAgaWYgKG8ucnVicykge1xuICAgICAgY29uc3QgcnViID0gby5ydWIgPz8gWzAuMzAsIDAuMjgsIDAuMzBdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvLnJ1YnM7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAqICgwLjYwICsgcm5kKCkgKiAwLjM4KTtcbiAgICAgICAgY29uc3QgdyA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4yMiksIGggPSBzICogKDAuMDA2ICsgcm5kKCkgKiAwLjAzMCksIGEgPSAwLjIwICsgcm5kKCkgKiAwLjQ1O1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCh4IC0gdyAvIDIsIDAsIHggKyB3IC8gMiwgMCk7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihydWIpfSwwKWApO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke3JnYihydWIpfSwke2F9KWApO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocnViKX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGN0eC5maWxsUmVjdCh4IC0gdyAvIDIgKyBkeCwgeSAtIGggLyAyLCB3LCBoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gU0NVRkZTOiBzb2Z0IHBhdGNoZXMgd2hlcmUgdGhlIHdhc2ggaXMgZXJhc2VkIGJhY2sgdG93YXJkIHdoaXRlLiBUaGUgdGlsZSBpcyBjb21wb3NpdGVkXG4gICAgLy8gbXVsdGlwbHktb24td2hpdGUsIHNvIHBhaW50aW5nIHdoaXRlIHNvdXJjZS1vdmVyIGlzIHBhaW50aW5nIFwibm90IGRhcmtlbmVkXCIgLS0gd2hpY2ggaXMgdGhlXG4gICAgLy8gb25seSB3YXkgYSBtdWx0aXBseSB0aWxlIGNhbiBwdXQgUEFMRSB3ZWFyIG9uIGEgZGFyayBiYXNlIHdpdGhvdXQgcmUtYmFzaW5nIHRoZSBlbnZlbG9wZVxuICAgIC8vIHR3aWNlLiBEZWZhdWx0ZWQgdG8gbm9uZS5cbiAgICBpZiAoby5zY3VmZnMpIHtcbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvLnNjdWZmczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDUgKyBybmQoKSAqIChvLnNjdWZmU2NhbGUgPz8gMC4xNCkpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDI1NSwyNTUsMjU1LCR7by5zY3VmZkFscGhhID8/IDAuNTV9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgfVxuXG4gICAgLy8gQ0xPVURTOiBicm9hZCwgdmVyeSBzb2Z0IHBhdGNoZXMgb3ZlciB0aGUgV0hPTEUgdGlsZS4gQSBjYXN0IGZhY2UgaXMgbW90dGxlZCBhdCB0aGUgc2NhbGUgb2ZcbiAgICAvLyB0ZW5zIG9mIGNlbnRpbWV0cmVzIC0tIHBvdXIgbGluZXMsIGRhbXAsIHRoZSBtb3VsZCdzIG93biBoaXN0b3J5IC0tIGFuZCB0aGF0IGxvdyBmcmVxdWVuY3kgaXNcbiAgICAvLyBtb3N0IG9mIHdoYXQgc2VwYXJhdGVzIGEgcmVuZGVyZWQgc3RhbmRhcmQgZGV2aWF0aW9uIG9mIDYgZnJvbSB0aGUgcGxhdGUncyAxMi4gU21hbGwgbWFya3NcbiAgICAvLyBjYW5ub3Qgc3VwcGx5IGl0OiBhdCBwcm9wIGRpc3RhbmNlIGEgdGhvdXNhbmQgb2YgdGhlbSBhdmVyYWdlIGJhY2sgb3V0IHRvIG9uZSBmbGF0IHRvbmUuXG4gICAgLy8gS2VlcCB0aGVtIFNNQUxMIHJlbGF0aXZlIHRvIHRoZSB0aWxlLCB0aG91Z2guIEEgdGlsZSB0aGF0IHJlcGVhdHMgdHdvIG9yIHRocmVlIHRpbWVzIGFjcm9zcyBhXG4gICAgLy8gcHJvcCByZXBlYXRzIGl0cyBjbG91ZHMgdG9vLCBhbmQgYSBjbG91ZCB0aGUgc2l6ZSBvZiBhIHRoaXJkIG9mIHRoZSB0aWxlIHRoZW4gcmVhZHMgYXNcbiAgICAvLyBjYW1vdWZsYWdlIHdpdGggYSB2aXNpYmxlIHNlYW0gLS0gdGhlIHNhbWUgZmFpbHVyZSBhcyBoYXJkIGJsb3RjaGVzLCBvbmUgb2N0YXZlIGxvd2VyLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uY2xvdWRzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHYgPSBvLmNsb3VkID8/IFswLjg2LCAwLjg2LCAwLjg0XTtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKG8uY2xvdWRSID8/IDAuMTYpICogKDAuNCArIHJuZCgpICogMS40KSwgYSA9IChvLmNsb3VkQWxwaGEgPz8gMC4xMikgKiAoMC40ICsgcm5kKCkpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih2KX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIFNDVUZGIGFyY3M6IHRoZSB0eXJlIGFuZCBidW1wZXIgbWFya3MgYSByb2Fkc2lkZSBiYXJyaWVyIGNvbGxlY3RzIG9uIHRoZSBiYW5kIHRoZSB0cmFmZmljXG4gICAgLy8gYWN0dWFsbHkgcmVhY2hlcy4gQnJvYWQsIHNvZnQsIG5lYXItaG9yaXpvbnRhbCBzbWVhcnMgd2l0aCBhIHN3ZXB0IHNoYXBlIC0tIGEgYmxvdGNoIHJlYWRzIGFzXG4gICAgLy8gYSBzdGFpbiwgYW5kIHdoYXQgdGhlIHBsYXRlIGNhcnJpZXMgaXMgc29tZXRoaW5nIHRoYXQgd2VudCBwYXN0LiBgc2N1ZmZCYW5kYCBpcyBhIHBhaXIgb2ZcbiAgICAvLyBIRUlHSFQgZnJhY3Rpb25zICgwIGF0IHRoZSBncm91bmQpLCBzbyBpdCBpcyBzdGF0ZWQgaW4gdGhlIHNhbWUgdGVybXMgYXMgYGNvdmVyYWdlYC5cbiAgICBpZiAoby5zY3VmZnMpIHtcbiAgICAgIGNvbnN0IHYgPSBvLnNjdWZmID8/IFswLjYyLCAwLjYyLCAwLjY0XSwgYmFuZCA9IG8uc2N1ZmZCYW5kID8/IFswLjMwLCAwLjcwXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgby5zY3VmZnM7IGkrKykge1xuICAgICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBzICogKDEgLSAoYmFuZFswXSArIHJuZCgpICogKGJhbmRbMV0gLSBiYW5kWzBdKSkpO1xuICAgICAgICBjb25zdCB3ID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjExKSwgaCA9IHcgKiAoMC4wNSArIHJuZCgpICogMC4xMCk7XG4gICAgICAgIGNvbnN0IGEgPSAoby5zY3VmZkFscGhhID8/IDAuMzQpICogKDAuNSArIHJuZCgpKTtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgICAgY3R4LnNhdmUoKTsgY3R4LnRyYW5zbGF0ZShjeCArIGR4LCBjeSk7IGN0eC5yb3RhdGUoKHJuZCgpIC0gMC41KSAqIDAuNDUpOyBjdHguc2NhbGUoMSwgaCAvIHcpO1xuICAgICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KDAsIDAsIDAsIDAsIDAsIHcpO1xuICAgICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYih2KX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDAuNDUsIGByZ2JhKCR7cmdiKHYpfSwke2EgKiAwLjU1fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKDAsIDAsIHcsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEZPUk0gU0VBTVM6IHRoZSB2ZXJ0aWNhbCBqb2ludCBsaW5lcyBhIHByZWNhc3QgbW91bGQgbGVhdmVzLCBvbmUgcGVyIHRpbGUuIEEgZGFyayBoYWlybGluZSB3aXRoXG4gICAgLy8gYSBwYWxlciBsaXAgYmVzaWRlIGl0LCB3aGljaCBpcyB3aGF0IGEgcHJvdWQgc2VhbSBsb29rcyBsaWtlIC0tIGEgc2luZ2xlIGRhcmsgbGluZSByZWFkcyBhcyBhXG4gICAgLy8gc2NyYXRjaC4gYHNlYW1BdGAgcGxhY2VzIGl0IGFzIGEgZnJhY3Rpb24gb2YgdGhlIHRpbGUgc28gaXQgZG9lcyBub3QgbGFuZCBvbiB0aGUgd3JhcC5cbiAgICBpZiAoby5zZWFtcykge1xuICAgICAgY29uc3QgdiA9IG8uc2VhbSA/PyBbMC43MiwgMC43MSwgMC42OF07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8uc2VhbXM7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5yb3VuZChzICogKChvLnNlYW1BdCA/PyAwLjQyKSArIGkgLyBvLnNlYW1zKSkgJSBzO1xuICAgICAgICBjb25zdCB3cHggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHMgKiAwLjAwNCkpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2Iodil9LCR7by5zZWFtQWxwaGEgPz8gMC41fSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgd3B4LCBzKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKHYpfSwkeyhvLnNlYW1BbHBoYSA/PyAwLjUpICogMC4zfSlgOyBjdHguZmlsbFJlY3QoeCArIHdweCwgMCwgd3B4LCBzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUElOSE9MRVM6IHRoZSBhaXIgYnViYmxlcyBhIHByZWNhc3QgZmFjZSBpcyBjb3ZlcmVkIGluLiBUaGV5IGFyZSB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmdcbiAgICAvLyBtYXJrIG9mIGJhcmUgY29uY3JldGUgYXQgcHJvcCBkaXN0YW5jZSAtLSB3aXRob3V0IHRoZW0gdGhlIGZhY2UgaXMgYSBwYWludGVkIHNsYWIsIHdoaWNoIGlzXG4gICAgLy8gbWVhc3VyYWJsZSBhcyBhIHJlbmRlcmVkIHN0YW5kYXJkIGRldmlhdGlvbiBhIHRoaXJkIG9mIHRoZSBwbGF0ZSdzLiBTbWFsbCwgZGFyaywgYW5kIE1BTlkuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5waXRzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHYgPSBvLnBpdCA/PyBbMC40MiwgMC40MCwgMC4zNl07XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gKG8ucGl0UiA/PyAxLjYpICogKDAuNSArIHJuZCgpICogMS4zKTtcbiAgICAgIGNvbnN0IGEgPSAwLjI1ICsgcm5kKCkgKiAwLjU7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByICogMik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iodil9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgwLjQsIGByZ2JhKCR7cmdiKHYpfSwke2EgKiAwLjQ1fSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIgKiAyLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gbW9zcyAvIGFsZ2FlIGluIHRoZSBib3R0b20gYmFuZDogY2x1c3RlcmVkIHNwZWNrcywgYnJpZ2h0ZXItdGhhbi13YXNoIGdyZWVuXG4gICAgaWYgKG8ubW9zcykge1xuICAgICAgY29uc3QgbSA9IG8ubW9zcywgYmFuZCA9IG8ubW9zc0JhbmQgPz8gMC4yMjtcbiAgICAgIC8vIGEgZmFpbnQgZ3JlZW4gd2FzaCBvdmVyIHRoZSB3aG9sZSBiYW5kIGZpcnN0LCBzbyB0aGUgY2FycGV0cyBzaXQgaW4gZGFtcCBncm91bmQgcmF0aGVyIHRoYW5cbiAgICAgIC8vIGFzIGlzb2xhdGVkIGRvdHMgb24gY2xlYW4gcGFpbnRcbiAgICAgIGNvbnN0IG1nID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGJhbmQgKiAxLjMpKTtcbiAgICAgIG1nLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihtKX0sJHtvLm1vc3NXYXNoID8/IDAuMzV9KWApOyBtZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IobSl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbWc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ubW9zc0NsdXN0ZXJzID8/IDE0KTsgaysrKSB7XG4gICAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMS42KSAqIHMgKiBiYW5kLCBjciA9IHMgKiAoMC4wMTUgKyBybmQoKSAqIDAuMDQpO1xuICAgICAgICAvLyB0aGUgY2FycGV0OiBhIHNvZnQgYmxvYiwgdGhlbiBzcGVja3Mgb3ZlciBpdCBmb3IgdGhlIHR1ZnRlZCBlZGdlXG4gICAgICAgIGNvbnN0IGNnID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGN4LCBjeSwgMCwgY3gsIGN5LCBjcik7XG4gICAgICAgIGNnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihtKX0sMC43KWApOyBjZy5hZGRDb2xvclN0b3AoMC42LCBgcmdiYSgke3JnYihtKX0sMC4zNSlgKTsgY2cuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKG0pfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY2c7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4ICsgZHgsIGN5LCBjciwgY3IgKiAwLjYsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgICBjb25zdCBhID0gcm5kKCkgKiBNYXRoLlBJICogMiwgZCA9IE1hdGguc3FydChybmQoKSkgKiBjcjtcbiAgICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCAqIDAuNiwgciA9IDEgKyBybmQoKSAqIDM7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7cmdiKG0pfSwkezAuMzUgKyBybmQoKSAqIDAuNX0pYDtcbiAgICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZ3JhaW4uIGBncmFpbmAvYGdyYWluQWxwaGFgIGRlZmF1bHQgdG8gdGhlIG9yaWdpbmFsIDE1MDAgYXQgMC4xMiwgc28gbm8gYWxyZWFkeS1lbWl0dGVkIHByb3BcbiAgICAvLyBjaGFuZ2VzOyBhIHRpbGUgc3RyZXRjaGVkIG92ZXIgYSBXSE9MRSBwcm9wICh1dlNjYWxlID4gaXRzIGhlaWdodCkgc2FtcGxlcyBvbmx5IHRoZSBmcmFjdGlvblxuICAgIC8vIG9mIHRoZSB0aWxlIHdpZHRoIGhlaWdodFVWIGZvbGRzIG9udG8gaXQsIGFuZCBuZWVkcyB0aGUgY291bnQgcmFpc2VkIHRvIGtlZXAgdGhlIHNhbWUgZGVuc2l0eS5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmdyYWluID8/IDE1MDApOyBpKyspIHtcbiAgICAgIGNvbnN0IGxvID0gby5ncmFpbkxvID8/IDIwMDsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgdiA9IGxvICsgTWF0aC5yb3VuZChybmQoKSAqICgyNTUgLSBsbykpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LCR7by5ncmFpbkFscGhhID8/IDAuMTJ9KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAxLjUsIDEuNSk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIENIQUlOLUxJTksgdGlsZTogYSBkaWFtb25kIHdpcmUgbGF0dGljZSBkcmF3biBvcGFxdWUgb3ZlciBhIFRSQU5TUEFSRU5UIGdyb3VuZCwgYm91bmQgYXMgbWFwXG4gKiAgb24gYW4gYWxwaGEtdGVzdGVkIG1hdGVyaWFsIHNvIHRoZSBjZWxscyBhcmUgb3Blbi4gT25lIHRpbGUgaXMgb25lIGRpYW1vbmQgY2VsbDsgdGhlIHBhbmUnc1xuICogIFVWcyByZXBlYXQgaXQgYXQgdGhlIHJlYWwgbWVzaCBwaXRjaC4gYHdpcmVgIGlzIHRoZSB3aXJlIHdpZHRoIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGNlbGwuICovXG5mdW5jdGlvbiBjaGFpbmxpbmtUaWxlKHNpemU6IG51bWJlciwgd2lyZTogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHgubGluZVdpZHRoID0gTWF0aC5tYXgoMS41LCB3aXJlICogcyk7XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGNvbnN0IHYgPSAxNTAgKyBNYXRoLnJvdW5kKHJuZCgpICogMzApO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2IoJHt2fSwke3YgKyAyfSwke3YgKyA0fSlgO1xuICAgIC8vIHR3byBkaWFnb25hbHMgdGhyb3VnaCB0aGUgdGlsZSwgb2Zmc2V0IHNvIHRoZSB3cmFwIG1ha2VzIGEgY29udGludW91cyBkaWFtb25kIGxhdHRpY2VcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygwLCAwKTsgY3R4LmxpbmVUbyhzLCBzKTtcbiAgICBjdHgubW92ZVRvKHMsIDApOyBjdHgubGluZVRvKDAsIHMpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICAvLyB0aGUga251Y2tsZSB3aGVyZSB3aXJlcyB0d2lzdCByb3VuZCBlYWNoIG90aGVyLCBhdCB0aGUgdHdvIGNyb3NzaW5ncyBvbiB0aGUgdGlsZSBlZGdlc1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7diAtIDIwfSwke3YgLSAxOH0sJHt2IC0gMTZ9KWA7XG4gICAgZm9yIChjb25zdCBbeCwgeV0gb2YgW1swLCAwXSwgW3MsIDBdLCBbMCwgc10sIFtzLCBzXSwgW3MgLyAyLCBzIC8gMl1dKSB7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCwgeSwgY3R4LmxpbmVXaWR0aCAqIDAuOSwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBCQU1CT08gU1RSSVAgdGlsZTogdmVydGljYWwgc3BsaXQtYmFtYm9vIHN0cmlwcyB3aXRoIHBhbGUgY3VsbSBmYWNlcywgZGFyayBqb2ludHMgYmV0d2VlbiB0aGVtXG4gKiAgYW5kIGEgbm9kZSBsaW5lIG9yIHR3byAtLSBhIG11bHRpcGxpZXIgb24gdGhlIG1lYXN1cmVkIHNpbHZlci1ncmV5LiAqL1xuZnVuY3Rpb24gYmFtYm9vVGlsZShzaXplOiBudW1iZXIsIHN0cmlwczogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IHN3ID0gcyAvIHN0cmlwcztcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IHN0cmlwczsgYisrKSB7XG4gICAgICBjb25zdCB0b25lID0gMC44MCArIHJuZCgpICogMC4yLCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0b25lKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2IC0gMn0sJHt2IC0gNn0pYDsgY3R4LmZpbGxSZWN0KGIgKiBzdywgMCwgc3csIHMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDUwLDQyLDM0LDAuNiknOyBjdHguZmlsbFJlY3QoYiAqIHN3LCAwLCBNYXRoLm1heCgxLCBzICogMC4wMDYpLCBzKTtcbiAgICAgIC8vIGEgaGlnaGxpZ2h0IGRvd24gdGhlIGN1bG0ncyByb3VuZFxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTApJzsgY3R4LmZpbGxSZWN0KGIgKiBzdyArIHN3ICogMC4zNSwgMCwgc3cgKiAwLjI1LCBzKTtcbiAgICAgIC8vIG5vZGUgcmluZ3NcbiAgICAgIGNvbnN0IG4gPSAxICsgTWF0aC5mbG9vcihybmQoKSAqIDIpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHsgY29uc3QgeSA9IHJuZCgpICogczsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDcwLDYwLDQ4LDAuNDUpJzsgY3R4LmZpbGxSZWN0KGIgKiBzdywgeSwgc3csIE1hdGgubWF4KDEsIHMgKiAwLjAwOCkpOyB9XG4gICAgICAvLyBmaW5lIGdyYWluIGxpbmVzXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDY7IGsrKykgeyBjb25zdCB4ID0gYiAqIHN3ICsgcm5kKCkgKiBzdzsgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDgwLDcwLDU4LCR7MC4wNSArIHJuZCgpICogMC4xfSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7IH1cbiAgICB9XG4gICAgLy8gbW91bGQgc3BlY2tsZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzAwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogczsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDMwLDI4LDI0LDAuMTgpJzsgY3R4LmZpbGxSZWN0KHgsIHksIDEgKyBybmQoKSAqIDIsIDEgKyBybmQoKSAqIDIpOyB9XG4gIH0pO1xufVxuXG4vKiogUE9TVEVSIHRpbGUgZm9yIGEgaG9hcmRpbmc6IHRvcm4gcGFzdGUtdXAgc2hlZXRzIGFuZCBhIHNwcmF5IHN0ZW5jaWwgb3ZlciBhIFRSQU5TUEFSRU5UIGdyb3VuZCxcbiAqICBib3VuZCBvbiBhbiBhbHBoYS10ZXN0ZWQgcGFuZSBhIGZldyBtaWxsaW1ldHJlcyBwcm91ZCBvZiB0aGUgc2hlZXQuIGBsaW5lc2AgYXJlIHRoZSBzdGVuY2lsXG4gKiAgc3RyaW5nczsgYSBwcmludGVkIGdyYXBoaWMgaXMgZXhhY3RseSB0aGUgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIGNhc2UuICovXG5mdW5jdGlvbiBwb3N0ZXJUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBsaW5lczogc3RyaW5nW10pOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBwYXN0ZS11cHM6IG92ZXJsYXBwaW5nIG9mZi13aGl0ZSByZWN0YW5nbGVzIHdpdGggdG9ybiBlZGdlcyBhbmQgZmFpbnQgcHJpbnQgbGluZXNcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4zMCksIHkgPSBzICogKDAuMTUgKyBybmQoKSAqIDAuNDUpLCB3ID0gcyAqICgwLjE0ICsgcm5kKCkgKiAwLjE2KSwgaCA9IHMgKiAoMC4xOCArIHJuZCgpICogMC4yMik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHsyMjUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApfSwkezIyMiArIE1hdGgucm91bmQocm5kKCkgKiAxOCl9LCR7MjEwICsgTWF0aC5yb3VuZChybmQoKSAqIDIwKX0sMC45NilgO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgY29uc3QgbiA9IDk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpKyspIGN0eC5saW5lVG8oeCArIHcgKiBpIC8gbiwgeSArIChybmQoKSAtIDAuNSkgKiBoICogMC4wOCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBuOyBpKyspIGN0eC5saW5lVG8oeCArIHcgKyAocm5kKCkgLSAwLjUpICogdyAqIDAuMDgsIHkgKyBoICogaSAvIG4pO1xuICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGktLSkgY3R4LmxpbmVUbyh4ICsgdyAqIGkgLyBuLCB5ICsgaCArIChybmQoKSAtIDAuNSkgKiBoICogMC4xMik7XG4gICAgICBmb3IgKGxldCBpID0gbiAtIDE7IGkgPj0gMDsgaS0tKSBjdHgubGluZVRvKHggKyAocm5kKCkgLSAwLjUpICogdyAqIDAuMDgsIHkgKyBoICogaSAvIG4pO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDQwLDQ1LDAuNTUpJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSBjdHguZmlsbFJlY3QoeCArIHcgKiAwLjEsIHkgKyBoICogKDAuMiArIGkgKiAwLjEpLCB3ICogKDAuMyArIHJuZCgpICogMC41KSwgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSk7XG4gICAgfVxuICAgIC8vIHNwcmF5IHN0ZW5jaWwsIHNsaWdodGx5IHNvZnQgYW5kIHVuZXZlblxuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyMCwyMCwyMiwwLjg4KSc7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAke01hdGgucm91bmQocyAqIDAuMDcpfXB4IHNhbnMtc2VyaWZgO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcyAqIDAuNDAsIHkgPSBzICogKDAuNDQgKyBpICogMC4xMyk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDM7IGsrKykgeyBjdHguZ2xvYmFsQWxwaGEgPSAwLjY7IGN0eC5maWxsVGV4dChsaW5lc1tpXSwgeCArIChybmQoKSAtIDAuNSkgKiAzLCB5ICsgKHJuZCgpIC0gMC41KSAqIDMpOyB9XG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSAxO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBTVFJJUEUgdGlsZTogYWx0ZXJuYXRpbmcgY29sb3VyIGJhbmRzIGFsb25nIHUgKGFuIGF3bmluZyksIHdpdGggYSBzb2Z0IGdyaW1lIG11bHRpcGx5IHNvIHRoZSBjbG90aFxuICogIHJlYWRzIHdvcm4gcmF0aGVyIHRoYW4gcHJpbnRlZC4gYGFgL2BiYCBhcmUgdGhlIHR3byBiYW5kIGNvbG91cnMgYXMgW3IsZyxiXSAwLTEuIEJvdW5kIGFzIG1hcCBvbiBhXG4gKiAgV0hJVEUgbWF0ZXJpYWwgc28gdGhlIGJhbmRzIGNhcnJ5IHRoZSB3aG9sZSBhbGJlZG8uICovXG4vLyBgb2AgaXMgb3B0aW9uYWwgYW5kIGV2ZXJ5IGZpZWxkIGRlZmF1bHRzIHRvIHRoZSBwcmV2aW91cyBoYXJkLWNvZGVkIGJlaGF2aW91ciwgc28gbm8gcHJvcCB0aGF0XG4vLyBkb2VzIG5vdCBwYXNzIGl0IGNoYW5nZXMuIGBzbXVkZ2VzYCBhbmQgYHNwZWNrc2AgZXhpc3QgYmVjYXVzZSBicnVzaGVkIFNURUVMIHdhbnRzIHRoZSBiYW5kaW5nXG4vLyB3aXRob3V0IHRoZSBkaXJ0OiB0aGUgNDAgcmFkaWFsIHNtdWRnZXMgYW5kIDEyMDAgbGlnaHQgc3BlY2tzIHJlYWQgYXMgbW91bGQgb24gYSBjbGVhbiBzYXRpblxuLy8gc3VyZmFjZSwgd2hpY2ggaXMgdGhlIG9wcG9zaXRlIG9mIHdoYXQgYSBzdHJpcGUgdGlsZSBpcyBmb3IgdGhlcmUuXG5mdW5jdGlvbiBzdHJpcGVUaWxlKHNpemU6IG51bWJlciwgYmFuZHM6IG51bWJlciwgYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIG86IGFueSA9IHt9KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYHJnYigke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfSlgO1xuICAgIGNvbnN0IHcgPSBzIC8gYmFuZHM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYW5kczsgaSsrKSB7IGN0eC5maWxsU3R5bGUgPSByZ2IoaSAlIDIgPyBiIDogYSk7IGN0eC5maWxsUmVjdChNYXRoLmZsb29yKGkgKiB3KSwgMCwgTWF0aC5jZWlsKHcpICsgMSwgcyk7IH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNtdWRnZXMgPz8gNDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSA0ICsgcm5kKCkgKiBzICogMC4wOCwgYWwgPSAwLjA2ICsgcm5kKCkgKiAwLjE4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTUwLDE0MCwxMjUsJHthbH0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxNTAsMTQwLDEyNSwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwZWNrcyA/PyAxMjAwKTsgaSsrKSB7IGNvbnN0IHYgPSAyMDAgKyBNYXRoLnJvdW5kKHJuZCgpICogNTUpOyBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4xMClgOyBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCBybmQoKSAqIHMsIDEuNSwgMS41KTsgfVxuICAgIC8vIEJST0FEIHJlZmxlY3Rpb24gYmFuZGluZzogYG8uYnJvYWRgIHdob2xlIGJyaWdodC9kYXJrIGN5Y2xlcyBhY3Jvc3MgdGhlIHRpbGUsIGRyYXduIGFzIG9uZVxuICAgIC8vIHdyYXBwaW5nIGNvc2luZSBncmFkaWVudC4gQnJ1c2hlZCBzdGVlbCB3aXRoIG5vIGVudmlyb25tZW50IG1hcCB0byByZWZsZWN0IGhhcyBub3RoaW5nIHRvXG4gICAgLy8gbWFrZSBpdHMgZmxhbmtzIGJyaWdodCBhbmQgaXRzIG1pZGRsZSBkYXJrLCBhbmQgdGhlIGZpbmUgZ3JhaW4gY2Fubm90IHN1cHBseSBpdCAtLSBhIDMgbW1cbiAgICAvLyBwaXRjaCBhdmVyYWdlcyB0byBvbmUgZmxhdCB0b25lIGF0IHByb3AgZGlzdGFuY2UsIHdoaWNoIGlzIHdoYXQgYSByZW5kZXJlZCBzdGFpbmxlc3MgYmluXG4gICAgLy8gbG9va3MgbGlrZSB3aGVuIGl0IHJlYWRzIGFzIHBhaW50ZWQgbWV0YWwuIFdob2xlIGN5Y2xlcywgc28gdGhlIHRpbGUgc3RpbGwgbWVldHMgaXRzZWxmLlxuICAgIC8vIERlZmF1bHRlZCBPRkYsIHNvIGV2ZXJ5IGV4aXN0aW5nIGNhbGxlciBpcyBieXRlLWlkZW50aWNhbC5cbiAgICBpZiAoby5icm9hZCkge1xuICAgICAgY29uc3QgbG8gPSBvLmJyb2FkTG8gPz8gMC44MCwgaGkgPSBvLmJyb2FkSGkgPz8gMS4wO1xuICAgICAgY29uc3QgZzMgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgcywgMCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA2NDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHQgPSBpIC8gNjQ7XG4gICAgICAgIGNvbnN0IHYgPSBsbyArIChoaSAtIGxvKSAqICgwLjUgKyAwLjUgKiBNYXRoLmNvcygyICogTWF0aC5QSSAqIG8uYnJvYWQgKiB0KSk7XG4gICAgICAgIGNvbnN0IGMgPSBNYXRoLnJvdW5kKDI1NSAqIHYpO1xuICAgICAgICBnMy5hZGRDb2xvclN0b3AodCwgYHJnYigke2N9LCR7Y30sJHtjfSlgKTtcbiAgICAgIH1cbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBTZWFtbGVzcyBhcm91bmQtYnktdXAgVVZzIGZvciBhIExhdGhlR2VvbWV0cnk6IHUgZnJvbSB0aGUgU0VHTUVOVCBpbmRleCAodGhlIGxhdGhlIG9yZGVycyBpdHNcbiAqICB2ZXJ0aWNlcyBzZWdtZW50LW1ham9yLCBpbmRleCA9IHNlZyAqIHBvaW50Q291bnQgKyBwb2ludCksIHNvIHRoZSBkdXBsaWNhdGVkIHNlYW0gY29sdW1uIHJlYWRzXG4gKiAgdSA9IHJlcGVhdHMgZXhhY3RseSBhbmQgUmVwZWF0V3JhcHBpbmcgY2xvc2VzIGl0LiBgc2NhbGVgIGlzIHRoZSB0aWxlIHNpemUgaW4gbWV0cmVzOyB0aGVcbiAqICBhcm91bmQtcmVwZWF0IGNvdW50IGlzIHJvdW5kZWQgc28gdGhlIHRpbGUgbWVldHMgaXRzZWxmLCBmcm9tIHRoZSBwcm9maWxlJ3Mgd2lkZXN0IHJhZGl1cy4gKi9cbmZ1bmN0aW9uIGxhdGhlVVYoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHBvaW50Q291bnQ6IG51bWJlciwgc2VnOiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIHZTY2FsZSA9IHNjYWxlLCB2MCA9IDApOiB2b2lkIHtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBsZXQgck1heCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSByTWF4ID0gTWF0aC5tYXgock1heCwgTWF0aC5oeXBvdChwLmdldFgoaSksIHAuZ2V0WihpKSkpO1xuICBjb25zdCByZXAgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKDIgKiBNYXRoLlBJICogck1heCAvIHNjYWxlKSk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgcyA9IE1hdGguZmxvb3IoaSAvIHBvaW50Q291bnQpO1xuICAgIHV2W2kgKiAyXSA9IChzIC8gc2VnKSAqIHJlcDsgdXZbaSAqIDIgKyAxXSA9IChwLmdldFkoaSkgLSB2MCkgLyB2U2NhbGU7XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xufVxuXG4vKiogRVhQT1NFRC1BR0dSRUdBVEUgdGlsZTogYSBkYXJrIG1vcnRhciBncm91bmQgcGFja2VkIHdpdGggcm91bmRlZCBwZWJibGVzIGluIGEgbWVhc3VyZWQgcGFsZXR0ZSxcbiAqICBlYWNoIGRyYXduIGF0IG5pbmUgd3JhcHBlZCBvZmZzZXRzIHNvIHRoZSB0aWxlIGlzIHNlYW1sZXNzLiBgby5wYWxldHRlYCBpcyBhIGxpc3Qgb2YgW3IsZyxiXVxuICogIHJhdGlvcyBhZ2FpbnN0IHRoZSBtYXRlcmlhbCBjb2xvdXIsIGBvLmdyb3VuZGAgdGhlIG1vcnRhciByYXRpbywgYG8uY291bnRgIHRoZSBwZWJibGUgY291bnQuICovXG5mdW5jdGlvbiBwZWJibGVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgcmdiID0gKHY6IG51bWJlcltdKSA9PiBgcmdiKCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9KWA7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHJnYihvLmdyb3VuZCA/PyBbMC40NSwgMC40MiwgMC4zOF0pOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgcGFsOiBudW1iZXJbXVtdID0gby5wYWxldHRlID8/IFtbMC44NSwgMC43OCwgMC42Nl0sIFswLjcyLCAwLjYyLCAwLjUwXSwgWzAuNjAsIDAuNTgsIDAuNTVdLCBbMC45MCwgMC44NiwgMC44MF1dO1xuICAgIGNvbnN0IG4gPSBvLmNvdW50ID8/IDkwMCwgck1pbiA9IHMgKiAoby5yTWluID8/IDAuMDEyKSwgck1heCA9IHMgKiAoby5yTWF4ID8/IDAuMDI4KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgcnggPSByTWluICsgcm5kKCkgKiAock1heCAtIHJNaW4pLCByeSA9IHJ4ICogKDAuNiArIHJuZCgpICogMC41KSwgYSA9IHJuZCgpICogTWF0aC5QSTtcbiAgICAgIGNvbnN0IGMgPSBwYWxbTWF0aC5mbG9vcihybmQoKSAqIHBhbC5sZW5ndGgpXSwgayA9IDAuODUgKyBybmQoKSAqIDAuMztcbiAgICAgIC8vIENPTlRBQ1QgU0hBRE9XIGZpcnN0LCBvZmZzZXQgZG93bi1yaWdodCBhbmQgYSB0b3VjaCBsYXJnZXIsIHNvIHdoYXQgc3Vydml2ZXMgYXJvdW5kIGVhY2hcbiAgICAgIC8vIHN0b25lIGlzIHRoZSBkYXJrIG1vcnRhciBjcmVzY2VudCB0aGF0IG1ha2VzIGEgcGFja2VkIGFnZ3JlZ2F0ZSByZWFkIGFzIHN0b25lcyByYXRoZXIgdGhhblxuICAgICAgLy8gYXMgb3ZlcmxhcHBpbmcgZmxhdCBkaXNjcy4gYHNoYWRlYCBpcyBhIHJhdGlvIGFnYWluc3QgdGhlIG1vcnRhciBncm91bmQ7IDAga2VlcHMgdGhlIG9sZFxuICAgICAgLy8gbG9vayBmb3IgZXZlcnkgdGlsZSBhbHJlYWR5IHNoaXBwZWQuXG4gICAgICBpZiAoby5zaGFkZSkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gcmdiKChvLmdyb3VuZCA/PyBbMC40NSwgMC40MiwgMC4zOF0pLm1hcCgodikgPT4gdiAqIG8uc2hhZGUpKTtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHggKyByeCAqIDAuMTYsIHkgKyBkeSArIHJ5ICogMC4yMiwgcnggKiAxLjEsIHJ5ICogMS4xLCBhLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICAgIGN0eC5maWxsU3R5bGUgPSByZ2IoYy5tYXAoKHYpID0+IE1hdGgubWluKDEsIHYgKiBrKSkpO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgcngsIHJ5LCBhLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIC8vIGEgaGlnaGxpZ2h0IGNyZXNjZW50IG9uIHRoZSBsaXQgc2lkZSBzbyBlYWNoIHN0b25lIHJlYWRzIGFzIGEgYnVtcFxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKDI1NSwyNTUsMjU1LCR7by5nbG9zcyA/PyAwLjE4fSlgO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHggLSByeCAqIDAuMiwgeSArIGR5IC0gcnkgKiAwLjI1LCByeCAqIDAuNSwgcnkgKiAwLjQsIGEsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBUWVJFIFRSRUFEIHRpbGUgZm9yIGEgbGF0aGUgY2FycnlpbmcgYGN5bFVWYDogdSBydW5zIEFST1VORCB0aGUgdHlyZSBhbmQgdiBVUCBpdCwgc28gdHJlYWQgc2xvdHMgYXJlXG4gKiAgYmFycyBhdCBjb25zdGFudCB1IGFuZCB0aGUgY2lyY3VtZmVyZW50aWFsIGdyb292ZXMgYXJlIGxpbmVzIGF0IGNvbnN0YW50IHYuIERyYXduIGFzIHJhdGlvcyBvbiB3aGl0ZVxuICogIGFuZCBtdWx0aXBsaWVkIGludG8gdGhlIChsaWZ0ZWQpIHJ1YmJlciBjb2xvdXI7IGBvLmdyb292ZWAgaXMgdGhlIGRhcmtlc3QgcmF0aW8sIGtlcHQgYWJvdmUgdGhlXG4gKiAgbHVtYS01OCBob2xlIGJhbmQgYnkgdGhlIGNhbGxlci4gYG8uc2xvdHNgIGJhcnMgcGVyIHRpbGUsIGBvLnJpbmdzYCBjaXJjdW1mZXJlbnRpYWwgbGluZXMuICovXG5mdW5jdGlvbiB0cmVhZFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBncm9vdmUgPSBvLmdyb292ZSA/PyAwLjgwLCBzbG90cyA9IG8uc2xvdHMgPz8gMiwgcmluZ3MgPSBvLnJpbmdzID8/IDI7XG4gICAgLy8gYGJhc2VgIGlzIHRoZSB0b25lIHRoZSBVTi1ncmltZWQgcGFydCBvZiB0aGUgdGlsZSBjYXJyaWVzLCBkZWZhdWx0aW5nIHRvIHdoaXRlIC0tIGkuZS4gdG9cbiAgICAvLyBcImxlYXZlIHRoZSB2ZXJ0ZXggY29sb3VyIGFsb25lXCIsIHdoaWNoIGlzIGV2ZXJ5IGV4aXN0aW5nIGNhbGxlci4gSXQgZXhpc3RzIGZvciBFTlZFTE9QRVxuICAgIC8vIFJFLUJBU0lORzogYSBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4sIHNvIGEgcGFydCB0aGF0IG11c3QgcmVhZCBjbGVhbiBvcmFuZ2UgaW4gb25lIHBsYWNlIGFuZFxuICAgIC8vIGdyZXkgcm9hZCBncmltZSBpbiBhbm90aGVyIGNhbm5vdCBkbyBpdCBmcm9tIGEgc2luZ2xlIHZlcnRleCBjb2xvdXIsIGJlY2F1c2UgdGhlIGdyaW1lIGlzXG4gICAgLy8gSElHSEVSIGluIGJsdWUgdGhhbiB0aGUgb3JhbmdlIGlzLiBUaGUgdmVydGV4IGNvbG91ciBiZWNvbWVzIHRoZSBwZXItY2hhbm5lbCBtYXhpbXVtIG9mIGJvdGhcbiAgICAvLyBhbmQgdGhpcyBmaWxsIHBhaW50cyB0aGUgY2xlYW4gdG9uZSBiYWNrIG91dCBvZiBpdC5cbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IFsxLCAxLCAxXTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3JnYihiYXNlKX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGNvbnN0IGd2ID0gTWF0aC5yb3VuZCgyNTUgKiBncm9vdmUpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9KWA7XG4gICAgY29uc3QgcGl0Y2ggPSBzIC8gc2xvdHMsIHcgPSBwaXRjaCAqIChvLnNsb3RXaWR0aCA/PyAwLjE2KTtcbiAgICAvLyB0cmVhZCBzbG90cyBzcGFuIHRoZSBiYW5kIGJldHdlZW4gdGhlIHR3byBlZGdlIHNob3VsZGVycyAodiAwLjEyLi4wLjg4IG9mIHRoZSB0aWxlKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xvdHM7IGkrKykgeyBjb25zdCB4ID0gaSAqIHBpdGNoICsgcGl0Y2ggKiAwLjQgKyAocm5kKCkgLSAwLjUpICogcGl0Y2ggKiAwLjE7IGN0eC5maWxsUmVjdCh4LCBzICogMC4xMiwgdywgcyAqIDAuNzYpOyBjdHguZmlsbFJlY3QoeCAtIHMsIHMgKiAwLjEyLCB3LCBzICogMC43Nik7IH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJpbmdzOyBpKyspIHsgY29uc3QgeSA9IHMgKiAoMC4yICsgMC42ICogKGkgKyAwLjUpIC8gcmluZ3MpOyBjdHguZmlsbFJlY3QoMCwgeSAtIDEuNSwgcywgMyk7IH1cbiAgICAvLyBzaWRld2FsbCBzaGVlbjogYSBzb2Z0IGxpZ2h0ZXIgd2FzaCBzbyB0aGUgcnViYmVyIGlzIG5vdCBvbmUgZmxhdCB2YWx1ZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykgeyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA1ICsgcm5kKCkgKiAwLjEyKSwgdiA9IDIzNSArIE1hdGgucm91bmQocm5kKCkgKiAyMCk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTsgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuNSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9IH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBPTEQgVFlSRSB0aWxlOiBUV08gdHlyZSBoZWlnaHRzIHRhbGwgYnkgYG8ucGl0Y2hgIG1ldHJlcyBhcm91bmQgKGN5bFVWKS4gVGhlIHVwcGVyIGhhbGYgKHYgMC41LTEpXG4gKiAgaXMgYSB0cmVhZGVkIHR5cmUsIHRoZSBsb3dlciBoYWxmICh2IDAtMC41KSBhIHdvcm4gU0xJQ0sgd2l0aCBjaXJjdW1mZXJlbnRpYWwgZ3Jvb3ZlcyBhbmQgc2hvcnRcbiAqICBzaG91bGRlciBzaXBlcyBvbmx5LCBzbyBhIHN0YWNrIG1peGVzIGJhbGQgYW5kIHRyZWFkZWQgdHlyZXMgb2ZmIG9uZSBjYW52YXMgYnkgdjAuIERyYXduIGFzIFJBVElPU1xuICogIGFnYWluc3QgdGhlIHZlcnRleC1jb2xvdXJlZCBydWJiZXIgYXQgYGJhc2VgICgyMDAvMjU1IC0+IHZlcnRleCB0b25lcyBhcmUgYXV0aG9yZWQgMS4yNzV4IHRoZVxuICogIGludGVuZGVkIGFsYmVkbyBzbyBkdXN0IGFuZCBzY3VmZnMgY2FuIGdvIEJSSUdIVEVSIHRoYW4gdGhlIHJ1YmJlciB1bmRlciBhIG11bHRpcGx5IGNhbnZhcykuXG4gKiAgUm93cyBhcmUgaGVpZ2h0czogbG93ZXIgc2lkZXdhbGwsIHRyZWFkIGJhbmQgKHYgYG8uYmFuZFswXWAuLmBvLmJhbmRbMV1gIG9mIHRoZSBzdHJpcCksIHVwcGVyXG4gKiAgc2lkZXdhbGwgd2l0aCBiZWFkIHJpbmdzIGFuZCBtb3VsZCBsaW5lcy4gV2VhcjogYSB3YXJtIGR1c3Qgd2FzaCBvbiB0aGUgbG93ZXIgc2hvdWxkZXIsIGdyZXkgc2N1ZmZzXG4gKiAgb24gYm90aCBzaG91bGRlcnMsIGR1c3QgY2F1Z2h0IGluIHRoZSBjdXRzLCBncmFpbiBvdmVyIGV2ZXJ5dGhpbmcuICovXG5mdW5jdGlvbiB0eXJlVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gMjAwLCBiYW5kID0gby5iYW5kID8/IFswLjI0LCAwLjc2XSwgZ3Jvb3ZlID0gby5ncm9vdmUgPz8gMC40NTtcbiAgICBjb25zdCBndiA9IE1hdGgucm91bmQoYmFzZSAqIGdyb292ZSksIHJ2ID0gTWF0aC5yb3VuZChiYXNlICogMC43KSwgbXYgPSBNYXRoLnJvdW5kKGJhc2UgKiAwLjkpO1xuICAgIGNvbnN0IGR1c3QgPSBvLmR1c3QgPz8gWzIzMiwgMjE0LCAxOTBdO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7YmFzZX0sJHtiYXNlfSwke2Jhc2V9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMgKiBzIC8gNjsgaSsrKSB7IGNvbnN0IHYgPSBiYXNlICsgTWF0aC5yb3VuZCgocm5kKCkgLSAwLjUpICogMjIpOyBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCBybmQoKSAqIHMsIDIsIDIpOyB9XG4gICAgLy8gb25lIHR5cmUgc3RyaXAgYmV0d2VlbiBjYW52YXMgcm93cyB5YSAodG9wKSBhbmQgeWIgKGJvdHRvbSk7IGNhbnZhcyB5IGdyb3dzIERPV04sIHYgZ3Jvd3MgVVBcbiAgICBjb25zdCBzdHJpcCA9ICh5YTogbnVtYmVyLCB5YjogbnVtYmVyLCB0cmVhZGVkOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCBoID0geWIgLSB5YSwgYjAgPSB5YSArIGggKiAoMSAtIGJhbmRbMV0pLCBiMSA9IHlhICsgaCAqICgxIC0gYmFuZFswXSk7XG4gICAgICBjb25zdCBuZyA9IG8uZ3Jvb3ZlcyA/PyAzLCBndyA9IGggKiAwLjAyNDtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9KWA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5nOyBpKyspIHsgY29uc3QgeSA9IGIwICsgKGIxIC0gYjApICogKGkgKyAxKSAvIChuZyArIDEpOyBjdHguZmlsbFJlY3QoMCwgeSAtIGd3IC8gMiwgcywgZ3cpOyB9XG4gICAgICBjb25zdCBucyA9IG8uc2lwZXMgPz8gMiwgdyA9IHMgKiAoby5zaXBlV2lkdGggPz8gMC4wNSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8PSBuZzsgaysrKSB7XG4gICAgICAgIGNvbnN0IHkwID0gayA9PT0gMCA/IGIwIDogYjAgKyAoYjEgLSBiMCkgKiBrIC8gKG5nICsgMSkgKyBndyAvIDIsIHkxID0gayA9PT0gbmcgPyBiMSA6IGIwICsgKGIxIC0gYjApICogKGsgKyAxKSAvIChuZyArIDEpIC0gZ3cgLyAyO1xuICAgICAgICAvLyBhIHNsaWNrIGtlZXBzIG9ubHkgU0hPUlQgc2lwZXMgYXQgdGhlIHR3byBzaG91bGRlciByb3dzLCBjdXQgaW4gZnJvbSB0aGUgYmFuZCBlZGdlXG4gICAgICAgIGNvbnN0IG91dGVyID0gayA9PT0gMCB8fCBrID09PSBuZztcbiAgICAgICAgaWYgKCF0cmVhZGVkICYmICFvdXRlcikgY29udGludWU7XG4gICAgICAgIGNvbnN0IHlzMCA9IHRyZWFkZWQgPyB5MCA6IChrID09PSAwID8geTAgOiB5MSAtICh5MSAtIHkwKSAqIDAuNDUpLCB5czEgPSB0cmVhZGVkID8geTEgOiAoayA9PT0gMCA/IHkwICsgKHkxIC0geTApICogMC40NSA6IHkxKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuczsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgeCA9ICgoaSArIDAuNSkgLyBucyArIChrICUgMikgKiAwLjUgLyBucykgKiBzICsgKHJuZCgpIC0gMC41KSAqIHMgKiAwLjA2LCBzbCA9IChybmQoKSAtIDAuNSkgKiBzICogMC4wODtcbiAgICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBkeCwgeXMwKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB3LCB5czApOyBjdHgubGluZVRvKHggKyBkeCArIHcgKyBzbCwgeXMxKTsgY3R4LmxpbmVUbyh4ICsgZHggKyBzbCwgeXMxKTsgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHNob3VsZGVyIHN0ZXAgYXQgdGhlIHRvcCBvZiB0aGUgYmFuZCwgYmVhZCByaW5ncyBhbmQgbW91bGQgbGluZXMgb24gdGhlIHNpZGV3YWxsc1xuICAgICAgY29uc3Qgc2ggPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgYjAgLSBoICogMC4wMywgMCwgYjAgKyBoICogMC4wMik7IHNoLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2d2fSwke2d2fSwke2d2fSwwKWApOyBzaC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtndn0sJHtndn0sJHtndn0sMC40NSlgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBzaDsgY3R4LmZpbGxSZWN0KDAsIGIwIC0gaCAqIDAuMDMsIHMsIGggKiAwLjA1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cnZ9LCR7cnZ9LCR7cnZ9KWA7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjA0NSwgcywgaCAqIDAuMDEyKTsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuOTQsIHMsIGggKiAwLjAxMik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke212fSwke212fSwke212fSlgOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC4xMSwgcywgMik7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjg4LCBzLCAyKTtcbiAgICAgIC8vIHdlYXI6IHdhcm0gcm9hZCBkdXN0IG9uIHRoZSBsb3dlciBzaG91bGRlciBhbmQgc2lkZXdhbGwsIGdyZXkgc2N1ZmZzIG9uIGJvdGggc2hvdWxkZXJzXG4gICAgICBjb25zdCBkZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5YiwgMCwgeWEgKyBoICogMC42KTsgZGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7ZHVzdFswXX0sJHtkdXN0WzFdfSwke2R1c3RbMl19LCR7by5kdXN0QWxwaGEgPz8gMC4zNX0pYCk7IGRnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2R1c3RbMF19LCR7ZHVzdFsxXX0sJHtkdXN0WzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGRnOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC42LCBzLCBoICogMC40KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc2N1ZmZzID8/IDE0KTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSA8IDAuNSA/IGIwICsgKHJuZCgpIC0gMC4zKSAqIGggKiAwLjA4IDogYjEgKyAocm5kKCkgLSAwLjcpICogaCAqIDAuMDgsIHIgPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMDUpLCB2ID0gMjI1ICsgTWF0aC5yb3VuZChybmQoKSAqIDI1KTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7IGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjUpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSwgciAqIDIuMiwgciAqIDAuNiwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2xpZ2h0ZXInO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBiMCArIHJuZCgpICogKGIxIC0gYjApLCB2ID0gNiArIE1hdGgucm91bmQocm5kKCkgKiAxNCk7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHtNYXRoLnJvdW5kKHYgKiAwLjkpfSwke01hdGgucm91bmQodiAqIDAuNzUpfSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMiArIHJuZCgpICogNiwgMiArIHJuZCgpICogMyk7IH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH07XG4gICAgc3RyaXAoMCwgcyAvIDIsIHRydWUpOyAgICAgIC8vIHYgMC41Li4xOiB0cmVhZGVkXG4gICAgc3RyaXAocyAvIDIsIHMsIGZhbHNlKTsgICAgIC8vIHYgMC4uMC41OiBzbGlja1xuICB9KTtcbn1cblxuLyoqIEEgdGFwZXJlZCBib3g6IEJveEdlb21ldHJ5KDEsIGgsIDEpIHdob3NlIHgveiBhcmUgc2NhbGVkIHBlciB2ZXJ0ZXggYnkgdGhlIGZvb3RwcmludCBpbnRlcnBvbGF0ZWRcbiAqICBmcm9tICh3MCwgZDApIGF0IHRoZSBib3R0b20gdG8gKHcxLCBkMSkgYXQgdGhlIHRvcC4gTm9ybWFscyByZWNvbXB1dGVkIHNvIHRoZSBzbGFudGVkIGZhY2VzIHNoYWRlXG4gKiAgZmxhdC4gYGJgID0gW2N4LCB5Qm90dG9tLCBjeiwgdzAsIGQwLCB3MSwgZDEsIGhdLiAqL1xuZnVuY3Rpb24gZnJ1c3R1bShiOiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgW2N4LCB5MCwgY3osIHcwLCBkMCwgdzEsIGQxLCBoXSA9IGI7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgaCwgMSk7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gKHAuZ2V0WShpKSArIGggLyAyKSAvIGg7XG4gICAgcC5zZXRYKGksIHAuZ2V0WChpKSAqICh3MCArICh3MSAtIHcwKSAqIHQpKTsgcC5zZXRaKGksIHAuZ2V0WihpKSAqIChkMCArIChkMSAtIGQwKSAqIHQpKTtcbiAgfVxuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIGcudHJhbnNsYXRlKGN4LCB5MCArIGggLyAyLCBjeik7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEhPVC1ESVAgR0FMVkFOSVNFRCBaSU5DOiBjbG91ZHkgdG9uZSBkcmlmdCwgY3J5c3RhbGxpbmUgU1BBTkdMRSwgYW5kIHJ1c3QgYmxlZWRpbmcgZnJvbSB0aGUgd2VsZHMuXG4gKlxuICogVGhpcyBleGlzdHMgYmVjYXVzZSBgZ3JpbWVUaWxlYCBtZWFzdXJhYmx5IGNhbm5vdCBzYXkgYGdhbHZhbmlzZWRgLiBNZWFzdXJlZCBvbiB0aGUgY3Jvd2RcbiAqIGJhcnJpZXIncyBwbGF0ZSBhZ2FpbnN0IGl0cyBmaXJzdCBidWlsZCwgb3ZlciBtYXRjaGVkIGZsYXQgcGFuZWwgY3JvcHM6IHRoZSBwbGF0ZSByZWFkcyBtZWFuIGx1bWFcbiAqIDE1Ny0xNTkgd2l0aCBzZCAxMi0xNiBhbmQgYSBwNS4ucDk1IHNwYW4gb2YgfjQyLCBhbmQgdGhlIHJlbmRlciByZWFkIG1lYW4gMTQyIHdpdGggc2QgOC0xMCBhbmQgYVxuICogc3BhbiBvZiB+MjEgLS0gaGFsZiB0aGUgdG9uYWwgdmFyaWF0aW9uLCBhbmQgQ0xJUFBFRCBhdCB0aGUgdG9wIChwNzUgPSBwOTUgPSAxNDcsIHRoZSB0aWxlIGRvaW5nXG4gKiBub3RoaW5nIGF0IGFsbCBvdmVyIHRoZSB1cHBlciBoYWxmIG9mIHRoZSBwYW5lbCkuIEEgZ2FsdmFuaXNlZCBzdXJmYWNlIGlzIG5vdCBkaXJ0IG9uIGdyZXkgcGFpbnQ6XG4gKiBpdCBpcyBhIGZyb3plbiBjcnlzdGFsIHN0cnVjdHVyZSwgYnJpZ2h0IGlycmVndWxhciBzcGFuZ2xlIGZhY2V0cyBzdGFuZGluZyBBQk9WRSB0aGUgYmFzZSB0b25lXG4gKiB3aXRoIGR1bGwgZ3JleS1icm93biBkcmlmdCBiZXR3ZWVuIHRoZW0sIGFuZCB0aGUgYnJpZ2h0ZXN0IGZpZnRoIG9mIGl0IGlzIHRoZSBwYXJ0IHRoYXQgcmVhZHMuXG4gKlxuICogQSBjYW52YXMgdGlsZSBpcyBib3VuZCBhcyBhIE1VTFRJUExZIG1hcCwgc28gaXQgY2FuIG9ubHkgZXZlciBkYXJrZW4gLS0gd2hpY2ggaXMgd2h5IHRoZSBzcHJlYWRcbiAqIHdhcyBvbmUtc2lkZWQuIFRoZSB0aWxlIGlzIHRoZXJlZm9yZSBhdXRob3JlZCBhcm91bmQgYSBgbWlkYCBtdWx0aXBsaWVyIHdlbGwgYmVsb3cgMSBhbmQgdGhlXG4gKiBjYWxsZXIgcmFpc2VzIHRoZSBiYXNlIGFsYmVkbyBieSAxL21pZDogdGhlIHNwYW5nbGUgdGhlbiByZWFjaGVzIGJhY2sgdXAgdG8gdGhlIGJhc2Ugd2hpbGUgdGhlXG4gKiBkcmlmdCBmYWxscyBhd2F5IGJlbG93IGl0LCBhbmQgdGhlIHN1cmZhY2UgdmFyaWVzIGluIEJPVEggZGlyZWN0aW9ucyBhYm91dCBpdHMgbWVhbi4gQXV0aG9yIHRoZVxuICogYWxiZWRvIGZvciB0aGF0LCBvciB0aGUgcHJvcCBzaGlwcyBhcyBicmlnaHQgYXMgdGhlIHNwYW5nbGUgZXZlcnl3aGVyZS5cbiAqXG4gKiBgcnVzdEJhbmRgIGJsZWVkcyBhIGRlc2F0dXJhdGVkIGJyb3duIGRvd24gZnJvbSB0aGUgdG9wIGFuZCB1cCBmcm9tIHRoZSBib3R0b20gLS0gdGhlIHR3byBwbGFjZXMgYVxuICogYmFycmllcidzIHdlbGRzIGFyZSAtLSBiZWNhdXNlIHJ1c3Qgb24gZ2FsdmFuaXNlZCBzdGVlbCBzdGFydHMgYXQgYSB3ZWxkLCB3aGVyZSB0aGUgemluYyB3YXNcbiAqIGJ1cm50IG9mZiwgYW5kIFJVTlMuIFRoZSBwbGF0ZSdzIHJ1c3QgbWVhc3VyZXMgIzgyNmU1OCBvdmVyIDIuMiUgb2YgdGhlIGZyYW1lOiBhIHdhc2gsIG5vdCB0aGVcbiAqIG9yYW5nZSBwb2xrYSBkb3RzIGEgYmxvdGNoIHRpbGUgZ2l2ZXMuXG4gKi9cbmZ1bmN0aW9uIHppbmNUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgbWlkID0gby5taWQgPz8gMC44OCwgbG8gPSBvLmxvID8/IDAuNzQ7XG4gICAgY29uc3QgZyA9ICh2OiBudW1iZXIpID0+IHsgY29uc3QgYiA9IE1hdGgucm91bmQoMjU1ICogdik7IHJldHVybiBgcmdiKCR7Yn0sJHtifSwke2J9KWA7IH07XG4gICAgY3R4LmZpbGxTdHlsZSA9IGcobWlkKTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGNsb3VkeSBkcmlmdDogYnJvYWQgc29mdCBibG9icyBib3RoIGFib3ZlIGFuZCBiZWxvdyB0aGUgbWlkLCB0aGUgbW90dGxlIGEgZGlwIGxlYXZlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uY2xvdWRzID8/IDYwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA2ICsgcm5kKCkgKiAwLjE2KTtcbiAgICAgIGNvbnN0IHVwID0gcm5kKCkgPCAwLjU7XG4gICAgICBjb25zdCB2ID0gdXAgPyBtaWQgKyAoMSAtIG1pZCkgKiAoMC4zNSArIHJuZCgpICogMC41KSA6IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpO1xuICAgICAgY29uc3QgZ3IgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtvLmNsb3VkQWxwaGEgPz8gMC4yOH0pYCk7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMCwwLDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIFNQQU5HTEU6IGlycmVndWxhciBicmlnaHQgY3J5c3RhbCBmYWNldHMsIGFuZ3VsYXIgcmF0aGVyIHRoYW4gcm91bmQsIHVwIHRvIHRoZSBiYXNlIHRvbmUuXG4gICAgLy8gU21hbGwgYW5kIGRlbnNlIC0tIGxhcmdlIG9uZXMgcmVhZCBhcyBzcGxhc2hlcyBvZiB3aGl0ZSBwYWludCwgd2hpY2ggaXMgdGhlIGZhaWx1cmUgbW9kZSBhXG4gICAgLy8gYmxvdGNoIHRpbGUgZmFsbHMgaW50by5cbiAgICAvLyBDTFVTVEVSRUQsIG5vdCBzY2F0dGVyZWQuIFVuaWZvcm1seSBzcHJlYWQgZmFjZXRzIHJlYWQgYXMgc25vdyBvciBkdXN0IHNwZWNrcyAtLSBpc29sYXRlZFxuICAgIC8vIGJyaWdodCBkb3RzIG9uIGEgc21vb3RoIGZpZWxkLCB3aGljaCBpcyB3aGF0IHRoZSBzZWNvbmQgdHVuaW5nIHNoaXBwZWQgYW5kIHdoYXQgdGhlIHBsYXRlIGhhc1xuICAgIC8vIG5vbmUgb2YuIFJlYWwgc3BhbmdsZSBibG9vbXM6IHRoZSBjcnlzdGFscyBudWNsZWF0ZSB0b2dldGhlciwgc28gdGhlIHN1cmZhY2UgaXMgcGF0Y2hlcyBvZlxuICAgIC8vIGRlbnNlIGJyaWdodCBmYWNldHMgd2l0aCBxdWlldCBncmV5IGJldHdlZW4gdGhlbS4gYHNwYW5nbGVDbHVzdGVyc2AgY2VudHJlcyBjYXJyeVxuICAgIC8vIGAxIC0gc3BhbmdsZUxvb3NlYCBvZiB0aGUgZmFjZXRzLCBkaXN0cmlidXRlZCBzcXJ0LXVuaWZvcm1seSBzbyBlYWNoIGJsb29tIGlzIGRlbnNlIGF0IGl0c1xuICAgIC8vIG1pZGRsZSBhbmQgdGhpbnMgYXQgaXRzIGVkZ2U7IHRoZSByZXN0IHN0YXkgc2NhdHRlcmVkIHNvIHRoZSBmaWVsZCBpcyBuZXZlciBiYWxkLlxuICAgIGNvbnN0IGNsID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogby5zcGFuZ2xlQ2x1c3RlcnMgPz8gMCB9LCAoKSA9PiBbcm5kKCkgKiBzLCBybmQoKSAqIHMsIHMgKiAoMC4wNCArIHJuZCgpICogMC4xMCldKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNwYW5nbGUgPz8gNTIwKTsgaSsrKSB7XG4gICAgICBsZXQgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcztcbiAgICAgIGlmIChjbC5sZW5ndGggJiYgcm5kKCkgPiAoby5zcGFuZ2xlTG9vc2UgPz8gMC4yNSkpIHtcbiAgICAgICAgY29uc3QgYyA9IGNsWyhybmQoKSAqIGNsLmxlbmd0aCkgfCAwXSwgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY1syXTtcbiAgICAgICAgeCA9IGNbMF0gKyBNYXRoLmNvcyhhKSAqIGQ7IHkgPSBjWzFdICsgTWF0aC5zaW4oYSkgKiBkO1xuICAgICAgfVxuICAgICAgY29uc3QgciA9IHMgKiAoKG8uc3BhbmdsZU1pbiA/PyAwLjAwNCkgKyBNYXRoLnBvdyhybmQoKSwgMikgKiAoby5zcGFuZ2xlTWF4ID8/IDAuMDEzKSk7XG4gICAgICBjb25zdCB2ID0gbWlkICsgKDEgLSBtaWQpICogKDAuNSArIHJuZCgpICogMC41KTtcbiAgICAgIGNvbnN0IGsgPSA0ICsgTWF0aC5mbG9vcihybmQoKSAqIDMpO1xuICAgICAgY29uc3QgYTAgPSBybmQoKSAqIE1hdGguUEkgKiAyO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7KG8uc3BhbmdsZUFscGhhID8/IDAuMikgKyBybmQoKSAqIChvLnNwYW5nbGVBbHBoYVZhciA/PyAwLjM1KX0pYDtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBhID0gYTAgKyBqICogTWF0aC5QSSAqIDIgLyBrLCByciA9IHIgKiAoMC41NSArIHJuZCgpICogMC43NSk7XG4gICAgICAgICAgY29uc3QgcHggPSB4ICsgZHggKyBNYXRoLmNvcyhhKSAqIHJyLCBweSA9IHkgKyBkeSArIE1hdGguc2luKGEpICogcnIgKiAwLjg7XG4gICAgICAgICAgaWYgKGogPT09IDApIGN0eC5tb3ZlVG8ocHgsIHB5KTsgZWxzZSBjdHgubGluZVRvKHB4LCBweSk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBkYXJrIGRyaXAgc3RyZWFrcyBydW5uaW5nIGRvd246IHdlYXRoZXJpbmcsIGFuZCB3aGF0IGdpdmVzIGEgZmxhdCBwYW5lbCBhIHZlcnRpY2FsIHJlYWRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnN0cmVha3MgPz8gMzApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSAxICsgcm5kKCkgKiBzICogMC4wMTAsIHkwID0gcm5kKCkgKiBzICogMC41LCBsZW4gPSBzICogKDAuMiArIHJuZCgpICogMC43KTtcbiAgICAgIGNvbnN0IHYgPSBsbyArIChtaWQgLSBsbykgKiBybmQoKSAqIDAuNiwgYSA9IDAuMDYgKyBybmQoKSAqIDAuMTQ7XG4gICAgICBjb25zdCBnciA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5MCwgMCwgeTAgKyBsZW4pO1xuICAgICAgZ3IuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LDApYCk7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMC4yNSwgYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHthfSlgKTtcbiAgICAgIGdyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5MCwgdywgbGVuKTtcbiAgICB9XG4gICAgLy8gRklORSBHUkFJTiBhbmQgU0NSQVRDSEVTLiBNZWFzdXJlZCBhZ2FpbnN0IHRoZSBwbGF0ZSBhdCBtYXRjaGVkIG1hZ25pZmljYXRpb24sIHRoaXMgaXMgdGhlXG4gICAgLy8gbGF5ZXIgdGhlIGZpcnN0IHR1bmluZyB3YXMgbWlzc2luZyBlbnRpcmVseTogdGhlIHBsYXRlJ3MgemluYyBpcyBzY3JhdGNoeSBhdCAxLTIgcHggZXZlcnl3aGVyZVxuICAgIC8vIC0tIGRyYXdpbmcgbWFya3MsIGhhbmRsaW5nIHNjdWZmcywgdGhlIGNyeXN0YWwgYm91bmRhcmllcyB0aGVtc2VsdmVzIC0tIGFuZCB3aXRob3V0IGl0IHRoZVxuICAgIC8vIGRyaWZ0IGFuZCB0aGUgc3BhbmdsZSByZWFkIGFzIHNvZnQgc25vdyBvbiBzbW9vdGggZ3JleSBob3dldmVyIHdlbGwgdGhlIEhJU1RPR1JBTSBtYXRjaGVzLiBUd29cbiAgICAvLyBjcm9wcyB3aXRoIGlkZW50aWNhbCBtZWFuLCBzZCBhbmQgcGVyY2VudGlsZXMgY2FuIGxvb2sgbm90aGluZyBhbGlrZTsgdGhlIHN0YXRpc3RpYyB0aGF0XG4gICAgLy8gc2VwYXJhdGVzIHRoZW0gaXMgc3BhdGlhbCBmcmVxdWVuY3ksIHNvIHR1bmUgdGhpcyBieSBleWUgYWdhaW5zdCBhIG1hdGNoZWQgY3JvcCwgbm90IGJ5IHNkLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZ3JhaW4gPz8gMCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIDIsIGggPSAxICsgcm5kKCkgKiAyO1xuICAgICAgY29uc3QgdXAgPSBybmQoKSA8IDAuNTtcbiAgICAgIGNvbnN0IHYgPSB1cCA/IG1pZCArICgxIC0gbWlkKSAqICgwLjQgKyBybmQoKSAqIDAuNikgOiBsbyArIChtaWQgLSBsbykgKiBybmQoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwkezAuMTAgKyBybmQoKSAqIDAuMzB9KWA7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHggKyBkeCwgeSArIGR5LCB3LCBoKTtcbiAgICB9XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc2NyYXRjaGVzID8/IDApOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIGxlbiA9IHMgKiAoMC4wMDYgKyBybmQoKSAqIDAuMDU1KSwgYSA9IChybmQoKSAtIDAuNSkgKiAwLjcgKyBNYXRoLlBJIC8gMjtcbiAgICAgIGNvbnN0IHVwID0gcm5kKCkgPCAwLjQ1O1xuICAgICAgY29uc3QgdiA9IHVwID8gbWlkICsgKDEgLSBtaWQpICogKDAuNSArIHJuZCgpICogMC41KSA6IGxvICsgKG1pZCAtIGxvKSAqIHJuZCgpICogMC44O1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoJHtNYXRoLnJvdW5kKDI1NSAqIHYpfSwke01hdGgucm91bmQoMjU1ICogdil9LCR7TWF0aC5yb3VuZCgyNTUgKiB2KX0sJHswLjEwICsgcm5kKCkgKiAwLjI4fSlgO1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IDAuNyArIHJuZCgpICogMS42O1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBkeCwgeSArIGR5KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgZHggKyBNYXRoLmNvcyhhKSAqIGxlbiwgeSArIGR5ICsgTWF0aC5zaW4oYSkgKiBsZW4pOyBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJVU1QgZnJvbSB0aGUgd2VsZHM6IGEgd2FzaCBpbiB0aGUgdG9wIGFuZCBib3R0b20gYmFuZHMsIHBsdXMgcnVucyB0cmFpbGluZyBvdXQgb2YgaXRcbiAgICBpZiAoby5ydXN0KSB7XG4gICAgICBjb25zdCBjID0gby5ydXN0LCBiYW5kID0gby5ydXN0QmFuZCA/PyAwLjE2O1xuICAgICAgY29uc3QgcmdicyA9IGAke01hdGgucm91bmQoMjU1ICogY1swXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiBjWzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIGNbMl0pfWA7XG4gICAgICAvLyB0aGUgdHdvIGJhbmRzIGFyZSBTRVBBUkFURTogb24gYSBiYXJyaWVyIHRoZSBncm91bmQgZW5kIGNhcnJpZXMgdGhlIGZlZXQsIHRoZSBzdHViIHdlbGRzIGFuZFxuICAgICAgLy8gZXZlcnkgcnVuIG9mZiB0aGVtLCBhbmQgdGhlIHRvcCBlbmQgY2FycmllcyBvbmx5IHRoZSByYWlsJ3Mgb3duIHdlbGRzLiBPbmUgc3ltbWV0cmljIGJhbmRcbiAgICAgIC8vIHdpZGUgZW5vdWdoIHRvIHJlYWNoIHRoZSByYWlsIHdlbGRzIGF0IHYgPSAwLjI2IGFsc28gd2FzaGVzIHRoZSB3aG9sZSB1cHBlciB0aGlyZCBvZiBldmVyeVxuICAgICAgLy8gcGFuZWwsIHdoaWNoIHRoZSBwbGF0ZSBkb2VzIG5vdCBoYXZlLlxuICAgICAgZm9yIChjb25zdCBbZWRnZSwgZGlyLCBiXSBvZiBbWzAsIDEsIG8ucnVzdEJhbmRUb3AgPz8gYmFuZF0sIFtzLCAtMSwgYmFuZF1dIGFzIG51bWJlcltdW10pIHtcbiAgICAgICAgY29uc3QgZ3IgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgZWRnZSwgMCwgZWRnZSArIGRpciAqIHMgKiBiKTtcbiAgICAgICAgZ3IuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdic30sJHtvLnJ1c3RXYXNoID8/IDAuMzB9KWApOyBnci5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2JzfSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3I7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ucnVzdFJ1bnMgPz8gMjIpOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxNDtcbiAgICAgICAgY29uc3QgdG9wID0gcm5kKCkgPCAwLjU7XG4gICAgICAgIGNvbnN0IHkwID0gdG9wID8gMCA6IHMgLSBzICogYmFuZCAqICgwLjMgKyBybmQoKSk7XG4gICAgICAgIGNvbnN0IGxlbiA9IHMgKiAoMC4xMCArIHJuZCgpICogMC4zMik7XG4gICAgICAgIGNvbnN0IGdyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkwLCAwLCB5MCArIGxlbik7XG4gICAgICAgIGdyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYnN9LCR7MC4xOCArIHJuZCgpICogMC4zMn0pYCk7IGdyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYnN9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBncjtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBjdHguZmlsbFJlY3QoeCArIGR4LCB5MCwgdywgbGVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNhbm9weS1tb2R1bGUgaGVscGVyc1xuICogVGhlIGZpdmUgQ0FOT1BZIE1PRFVMRVMgLS0gbmlwYSB0aGF0Y2gsIHZldGl2ZXIgdGhhdGNoLCBzcGxpdCBiYW1ib28sIGNvcnJ1Z2F0ZWQgbWV0YWwsXG4gKiB0YXJwYXVsaW4gLS0gYXJlIG9uZSBmYW1pbHk6IGZvdXIgY29ybmVyIHBvc3RzIGluc2lkZSBhIDQgeCA0IG0gbW9kdWxlLCBhIGhlYWQgZnJhbWUsIGFuZCBhIHJvb2ZcbiAqIHdob3NlIG1hdGVyaWFsIGlzIHRoZSB3aG9sZSBpZGVudGl0eS4gV2hhdCB0aGV5IG5lZWQgYmV5b25kIHRoZSBzdHJlZXQtcHJvcCB2b2NhYnVsYXJ5IGlzIGFcbiAqIHJvb2ZpbmcgdGlsZSBwZXIgbWF0ZXJpYWwgYW5kIHRoZSBjdWxtIG1hcHBpbmcgYSByb3VuZCBiYW1ib28gcG9sZSB3YW50cy5cbiAqXG4gKiBgY3VsbVVWYCwgYGdyYWluTGluZXNgLCBgd2VhdGhlclBhdGNoZXNgLCBgbW91bGRDbHVzdGVyc2AgYW5kIGBjdWxtVGlsZWAgYXJlIHBvcnRlZCBWRVJCQVRJTSBmcm9tXG4gKiBzY3JhdGNoL19mZW5jZS9mZW5jZS5oZWxwZXJzLnRtcGwsIHdoZXJlIHRoZXkgd2VyZSB3cml0dGVuIGZvciB0aGUgYmFtYm9vIGZlbmNlIHBhbmVsIGFuZCB3aGVyZVxuICogdGhlIHJlYXNvbmluZyBiZWhpbmQgZXZlcnkgbnVtYmVyIGlzIHJlY29yZGVkLiBUaGV5IGFyZSBjb3BpZWQgcmF0aGVyIHRoYW4gc2hhcmVkIGJlY2F1c2UgdGhlIHR3b1xuICogZmFtaWxpZXMga2VlcCBzZXBhcmF0ZSB0ZW1wbGF0ZSBzZXRzOyBhIHRoaXJkIGZhbWlseSB3YW50aW5nIHRoZW0gc2hvdWxkIG1vdmUgdGhlbSB1cCBpbnRvXG4gKiBoZWxwZXJzLnRtcGwgcmF0aGVyIHRoYW4gY29weSB0aGVtIGEgc2Vjb25kIHRpbWUuXG4gKi9cblxuLyoqIENVTE0gVVZzOiB1IGFyb3VuZCB0aGUgY2lyY3VtZmVyZW5jZSBhbmQgdiBhbG9uZyB0aGUgbGVuZ3RoLCBib3RoIGluIG1ldHJlcyBvdmVyIGBzY2FsZWAsIHNvIGFcbiAqICBjdWxtIHRpbGUncyBub2RlIHJpbmdzIGNyb3NzIHRoZSBjdWxtIGF0IHJlYWwgc3BhY2luZyB3aGljaGV2ZXIgd2F5IHRoZSBjeWxpbmRlciBpcyB0aGVuIHJvdGF0ZWQuXG4gKiAgQXBwbHkgQkVGT1JFIHJvdGF0ZS90cmFuc2xhdGUuIGB2T2ZmYCBwaGFzZXMgdGhlIHRpbGUgYWxvbmcgdGhlIGN1bG0gc28gbm8gdHdvIGN1bG1zIChvciBhIGNvcmRcbiAqICBjb2xsYXIpIHJpbmcgYXQgdGhlIHNhbWUgc3RhdGlvbi4gKi9cbmZ1bmN0aW9uIGN1bG1VVihnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgcjogbnVtYmVyLCBoOiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIHZPZmYgPSAwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICBjb25zdCBrdSA9ICgyICogTWF0aC5QSSAqIHIpIC8gc2NhbGUsIGt2ID0gaCAvIHNjYWxlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHV2LnNldFhZKGksIHV2LmdldFgoaSkgKiBrdSwgdXYuZ2V0WShpKSAqIGt2ICsgdk9mZik7XG4gIHJldHVybiBnO1xufVxuXG4vKiogRmluZSBsb25naXR1ZGluYWwgZ3JhaW4gYmV0d2VlbiB5MCBhbmQgeTEgYWNyb3NzIGEgYmFuZCB4MC4ueDE6IG1hbnkgaGFpcmxpbmVzLCBtb3N0bHkgYSBkYXJrXG4gKiAgZmlicmUgdG9uZSwgYSBmZXcgYmxlYWNoZWQsIHNvIHRoZSBzdXJmYWNlIHJlYWRzIGFzIGZpYnJvdXMgYmFtYm9vIHJhdGhlciB0aGFuIHBhaW50LiAqL1xuZnVuY3Rpb24gZ3JhaW5MaW5lcyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcm5kOiAoKSA9PiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIG46IG51bWJlciwgZGFyazogc3RyaW5nLCBsaWdodDogc3RyaW5nLCBhTWF4OiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICBjb25zdCB4ID0geDAgKyBybmQoKSAqICh4MSAtIHgwKSwgYSA9IDAuMDQgKyBybmQoKSAqIGFNYXgsIHcgPSBybmQoKSA8IDAuNzUgPyAxIDogMS42O1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JuZCgpIDwgMC43MiA/IGRhcmsgOiBsaWdodH0sJHthLnRvRml4ZWQoMyl9KWA7XG4gICAgY3R4LmZpbGxSZWN0KHgsIHkwLCB3LCB5MSAtIHkwKTtcbiAgfVxufVxuXG4vKiogU29mdCBjbG91ZHkgd2VhdGhlcmluZyBhbG9uZyB0aGUgZmlicmUgZGlyZWN0aW9uOiBsZW5ndGh3aXNlIHBhdGNoZXMgb2Ygd2FybSBicm93bi1ncmV5IChvbGRcbiAqICBsaWduaW4gc2hvd2luZyB0aHJvdWdoIHRoZSBibGVhY2gpIGFuZCBvZiBuZWFyLXdoaXRlIChzdW4tYmxlYWNoZWQgZmFjZXMpLCBzbyB0aGUgdG9uZSBkcmlmdHNcbiAqICB0aGUgd2F5IHdlYXRoZXJlZCBiYW1ib28gZG9lcyBpbnN0ZWFkIG9mIHNpdHRpbmcgYXQgb25lIGdyZXkuIFZlcnRpY2FsID0gYWxvbmcgdGhlIGZpYnJlLiAqL1xuZnVuY3Rpb24gd2VhdGhlclBhdGNoZXMoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJuZDogKCkgPT4gbnVtYmVyLCBzOiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIG46IG51bWJlciwgd2FybUE6IG51bWJlciwgYmxlYWNoQTogbnVtYmVyKTogdm9pZCB7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgY29uc3QgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjEyICsgcm5kKCkgKiAwLjQ1KSwgd2FybSA9IHJuZCgpIDwgMC41O1xuICAgIGNvbnN0IGMgPSB3YXJtID8gJzExMiwxMDAsODgnIDogJzI1NSwyNTUsMjU1JywgYSA9IHdhcm0gPyB3YXJtQSAqICgwLjQgKyBybmQoKSAqIDAuNikgOiBibGVhY2hBICogKDAuNCArIHJuZCgpICogMC42KTtcbiAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5LCAwLCB5ICsgbGVuKTtcbiAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjfSwwKWApOyBnMi5hZGRDb2xvclN0b3AoMC4zNSwgYHJnYmEoJHtjfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMC42NSwgYHJnYmEoJHtjfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMF0pIGN0eC5maWxsUmVjdCh4MCwgeSArIGR5LCB4MSAtIHgwLCBsZW4pO1xuICB9XG59XG5cbi8qKiBNb3VsZDogY2x1c3RlcnMgb2Ygc21hbGwgZGFyayBzcGVja3MgKGEgZmV3IGRvemVuIGVhY2gpLCB0aGUgd2F5IGJsYWNrIG1vdWxkIHNpdHMgb24gb3V0ZG9vclxuICogIGJhbWJvbyAtLSBkZW5zZSBhdCBhIGZldyBzcG90cywgYWJzZW50IGVsc2V3aGVyZS4gQWxwaGEgY2FwcGVkIHNvIHRoZSBkYXJrZXN0IHNwZWNrIG92ZXIgdGhlXG4gKiAgbWVhc3VyZWQgYWxiZWRvIHN0YXlzIHdlbGwgY2xlYXIgb2YgdGhlIGhvbGUgZ2F0ZSdzIGx1bWEgNTguIFdyYXBzIGluIHkuICovXG5mdW5jdGlvbiBtb3VsZENsdXN0ZXJzKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBybmQ6ICgpID0+IG51bWJlciwgczogbnVtYmVyLCBzcG90czogbnVtYmVyW11bXSwgcng6IG51bWJlciwgcnk6IG51bWJlciwgbjogbnVtYmVyLCBhTWF4OiBudW1iZXIpOiB2b2lkIHtcbiAgZm9yIChjb25zdCBbY3gsIGN5XSBvZiBzcG90cykge1xuICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGN4LCBjeSwgMCwgY3gsIGN5LCBNYXRoLm1heChyeCwgcnkpICogMC44KTtcbiAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMjgsMjYsMjIsJHsoYU1heCAqIDAuOSkudG9GaXhlZCgzKX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyOCwyNiwyMiwwKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCwgY3kgKyBkeSwgcngsIHJ5LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgY29uc3QgeCA9IGN4ICsgKHJuZCgpICsgcm5kKCkgLSAxKSAqIHJ4LCB5ID0gY3kgKyAocm5kKCkgKyBybmQoKSAtIDEpICogcnk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMjgsMjYsMjIsJHsoMC4wOCArIHJuZCgpICogYU1heCkudG9GaXhlZCgzKX0pYDtcbiAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiAyLCBoID0gMSArIHJuZCgpICogMztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgY3R4LmZpbGxSZWN0KHgsIHkgKyBkeSwgdywgaCk7XG4gICAgfVxuICB9XG59XG5cbi8qKiBDVUxNIHRpbGUgZm9yIHRoZSB3aG9sZS1iYW1ib28gcG9zdCBhbmQgcmFpbHM6IHggcnVucyBBUk9VTkQgdGhlIGN1bG0sIHkgQUxPTkcgaXQgKHNlZSBjdWxtVVYpLFxuICogIDAuNiBtIG9mIGN1bG0gcGVyIHRpbGUuIFR3byBub2RlIHJpbmdzIHBlciB0aWxlIGF0IGlycmVndWxhciBzdGF0aW9ucyAtLSBhIGRhcmsgZ3Jvb3ZlIHVuZGVyIGFcbiAqICBwYWxlIHJhaXNlZCByaWRnZSwgdGhlIGdyYWluIGJyZWFraW5nIGF0IGVhY2ggLS0gd2l0aCBmaW5lIGxvbmdpdHVkaW5hbCBncmFpbiBiZXR3ZWVuIHRoZW0sIGFcbiAqICBsb25nIGRyeWluZyBzcGxpdCwgbGVuZ3Rod2lzZSB3ZWF0aGVyaW5nIHBhdGNoZXMgYW5kIGJsYWNrIG1vdWxkIGdhdGhlcmVkIGp1c3QgYmVsb3cgZWFjaCBub2RlLFxuICogIGFzIGluIHRoZSBwbGF0ZSdzIHBvc3QgYW5kIHJhaWwgY3JvcHMuIEEgbXVsdGlwbGllciBvbiB0aGUgbWVhc3VyZWQgY3VsbSBncmV5LiAqL1xuZnVuY3Rpb24gY3VsbVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgREFSSyA9ICc5Miw3OCw2MicsIExJR0hUID0gJzI1NSwyNTUsMjU1JztcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmMGVmZWMnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gYSBzb2Z0IHRvbmUgZHJpZnQgYXJvdW5kIHRoZSBjdWxtLCBzbyB0aGUgcm91bmQgaXMgbm90IG9uZSBmbGF0IHZhbHVlXG4gICAgY29uc3QgZ2EgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgcywgMCk7XG4gICAgZ2EuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDEwMCw5Miw4NCwwLjEyKScpOyBnYS5hZGRDb2xvclN0b3AoMC41LCAncmdiYSgyNTUsMjU1LDI1NSwwLjEwKScpOyBnYS5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTAwLDkyLDg0LDAuMTIpJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdhOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgd2VhdGhlclBhdGNoZXMoY3R4LCBybmQsIHMsIDAsIHMsIDE0LCAwLjEyLCAwLjMwKTtcbiAgICAvLyBub2RlIHN0YXRpb25zOiB0d28gcGVyIHRpbGUsIGlycmVndWxhciwgbmV2ZXIgd2l0aGluIDAuMTggb2YgZWFjaCBvdGhlciBvciB0aGUgd3JhcFxuICAgIGNvbnN0IG5vZGVzID0gW3MgKiAoMC4yMCArIHJuZCgpICogMC4xMCksIHMgKiAoMC42NiArIHJuZCgpICogMC4xMildO1xuICAgIC8vIGdyYWluIGluIHNlZ21lbnRzIGJldHdlZW4gdGhlIG5vZGVzIHNvIGl0IGJyZWFrcyBhdCBlYWNoIHJpbmdcbiAgICBjb25zdCBzdGF0aW9ucyA9IFswLCAuLi5ub2Rlcywgc107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgKyAxIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIGdyYWluTGluZXMoY3R4LCBybmQsIDAsIHMsIHN0YXRpb25zW2ldLCBzdGF0aW9uc1tpICsgMV0sIDI2MCwgREFSSywgTElHSFQsIDAuMjYpO1xuICAgIC8vIGEgY291cGxlIG9mIGxvbmcgZHJ5aW5nIHNwbGl0cyBhbG9uZyB0aGUgZmlicmVcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDI7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjI1ICsgcm5kKCkgKiAwLjUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDM4LDMyLDI2LDAuNTUpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHkgKyBkeSwgMS40LCBsZW4pO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTgpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHggKyAxLjQsIHkgKyBkeSwgMSwgbGVuKTtcbiAgICB9XG4gICAgLy8gdGhlIG5vZGUgcmluZ3NcbiAgICBmb3IgKGNvbnN0IHkgb2Ygbm9kZXMpIHtcbiAgICAgIGNvbnN0IGdzID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkgLSBzICogMC4wMywgMCwgeSk7XG4gICAgICBncy5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoNjAsNTAsNDAsMCknKTsgZ3MuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDYwLDUwLDQwLDAuMjIpJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3M7IGN0eC5maWxsUmVjdCgwLCB5IC0gcyAqIDAuMDMsIHMsIHMgKiAwLjAzKTsgICAgICAgICAgLy8gc2hhZGUgdXAgdG8gdGhlIHJpbmdcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg1Miw0NCwzNiwwLjYyKSc7IGN0eC5maWxsUmVjdCgwLCB5LCBzLCAyLjUpOyAgICAgICAgLy8gdGhlIGdyb292ZVxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMzQpJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyAyLjUsIHMsIDQpOyAvLyB0aGUgcmFpc2VkIHNoZWF0aCByaWRnZVxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDYwLDUwLDQwLDAuMzApJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyA2LjUsIHMsIDEuNSk7ICAvLyBpdHMgbG93ZXIgZWRnZVxuICAgICAgY29uc3QgZ2QgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSArIDgsIDAsIHkgKyBzICogMC4wNSk7XG4gICAgICBnZC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoNjAsNTAsNDAsMC4yMCknKTsgZ2QuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDYwLDUwLDQwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ2Q7IGN0eC5maWxsUmVjdCgwLCB5ICsgOCwgcywgcyAqIDAuMDUpO1xuICAgIH1cbiAgICAvLyBtb3VsZCBnYXRoZXJzIGp1c3QgYmVsb3cgdGhlIG5vZGVzIGFuZCBpbiBhIGNvdXBsZSBvZiBsb29zZSBwYXRjaGVzXG4gICAgY29uc3Qgc3BvdHM6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHkgb2Ygbm9kZXMpIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSBzcG90cy5wdXNoKFtybmQoKSAqIHMsIHkgKyBzICogKDAuMDIgKyBybmQoKSAqIDAuMDUpXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHNwb3RzLnB1c2goW3JuZCgpICogcywgcm5kKCkgKiBzXSk7XG4gICAgbW91bGRDbHVzdGVycyhjdHgsIHJuZCwgcywgc3BvdHMsIHMgKiAwLjEwLCBzICogMC4wNiwgOTAsIDAuMzApO1xuICB9KTtcbn1cblxuXG4vKipcbiAqIFRIQVRDSCB0aWxlLCBmb3IgYSByb29mIG1hcHBlZCB3aXRoIFdPUkxEIFVWcyBzbyB1IHJ1bnMgYWxvbmcgdGhlIHJpZGdlIGFuZCB2IHVwIHRoZSBzbG9wZS5cbiAqXG4gKiBUaGF0Y2ggaXMgbGFpZCBpbiBDT1VSU0VTOiBlYWNoIGNvdXJzZSBpcyBhIGJ1bmRsZSBvZiBzdGVtcyBwZWdnZWQgdG8gYSBwdXJsaW4gd2l0aCBpdHMgYnV0dHNcbiAqIGhhbmdpbmcgb3ZlciB0aGUgY291cnNlIGJlbG93LCBzbyB3aGF0IGEgdmlld2VyIGFjdHVhbGx5IHJlc29sdmVzIGF0IHByb3AgZGlzdGFuY2UgaXMgYSBzdGFjayBvZlxuICogaG9yaXpvbnRhbCBiYW5kcyB3aXRoIGEgc2hhZG93IGxpbmUgdW5kZXIgZWFjaCBidXR0LCBhbmQgYSBmaWJyZSB0ZXh0dXJlIHJ1bm5pbmcgZG93biB0aGUgc2xvcGVcbiAqIGluc2lkZSB0aGVtLiBNb2RlbGxpbmcgdGhlIHN0ZW1zIGlzIHdoYXQgdGhlIHJlZ2lzdHJ5IG5vdGVzIGZvcmJpZDsgdGhpcyBpcyB3aGVyZSB0aGF0IGRldGFpbFxuICogZ29lcyBpbnN0ZWFkLlxuICpcbiAqIE9uZSB0aWxlIGlzIGBjb3Vyc2VzYCBjb3Vyc2VzIHRhbGwuIFRoZSBrbm9icyBhcmUgd2hhdCBzZXBhcmF0ZXMgdGhlIHR3byB0aGF0Y2hlcyBvbiB0aGUgcGxhdGVzOlxuICogICBuaXBhICAgICBicm9hZCBmbGF0IHBhbG0gYmxhZGVzIC0tIGZldyB3aWRlIHN0cm9rZXMgKGBzdGVtV2AgMy03IHB4KSwgYSB3aWRlIHRvbmFsIGBzcHJlYWRgLFxuICogICAgICAgICAgICBhIGRlZXBseSBSQUdHRUQgYnV0dCBsaW5lIGFuZCBvY2Nhc2lvbmFsIG1pc3NpbmcgYmxhZGVzLlxuICogICB2ZXRpdmVyICBjb21iZWQgZ3Jhc3MgLS0gaHVuZHJlZHMgb2YgaGFpcmxpbmVzLCBhIG5hcnJvdyBzcHJlYWQsIGFuIGFsbW9zdCBzdHJhaWdodCBidXR0LlxuICogYG1vc3NgIG11bHRpcGxpZXMgYSBncmVlbiBjYXN0IGludG8gc2NhdHRlcmVkIHBhdGNoZXM6IHRoZSB0aWxlIGlzIGEgTVVMVElQTElFUiBvbiBhIHBhbGUgc3RyYXdcbiAqIGFsYmVkbywgYW5kIGEgbXVsdGlwbHkgY2FuIG9ubHkgZGFya2VuLCBzbyBncmVlbiBoYXMgdG8gYXJyaXZlIGFzIFwibGVzcyByZWQgYW5kIGJsdWVcIiBhbmQgbmV2ZXJcbiAqIGFzIGEgcGFpbnRlZCBncmVlbi4gTm90aGluZyBoZXJlIGdvZXMgYmVsb3cgMC40MiBvZiB0aGUgYWxiZWRvLCB3aGljaCBrZWVwcyB0aGUgZGFya2VzdCB0ZXhlbCBvZlxuICogYSBzdHJhdyBhdCBsdW1hIH4xNTAgd2VsbCBjbGVhciBvZiB0aGUgc2lsaG91ZXR0ZSBnYXRlJ3MgYmFja2Ryb3AgYmFuZC5cbiAqL1xuZnVuY3Rpb24gdGhhdGNoVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IG5jOiBudW1iZXIgPSBvLmNvdXJzZXMgPz8gNCwgY2ggPSBzIC8gbmM7XG4gICAgY29uc3Qgc3RlbXM6IG51bWJlciA9IG8uc3RlbXMgPz8gMjYwLCBzcHJlYWQ6IG51bWJlciA9IG8uc3ByZWFkID8/IDAuMTI7XG4gICAgY29uc3Qgd01pbjogbnVtYmVyID0gby5zdGVtVz8uWzBdID8/IDEsIHdNYXg6IG51bWJlciA9IG8uc3RlbVc/LlsxXSA/PyAyO1xuICAgIGNvbnN0IHJhZ2dlZDogbnVtYmVyID0gby5yYWdnZWQgPz8gMC4wNjsgICAgICAgICAgICAgICAgIC8vIGJ1dHQtbGluZSB3YXZpbmVzcywgYXMgYSBzaGFyZSBvZiBjaFxuICAgIGNvbnN0IFtzciwgc2csIHNiXTogbnVtYmVyW10gPSBvLnN0ZW1SZ2IgPz8gWzEyMCwgMTA2LCA4NF07ICAgLy8gdGhlIGRhcmsgYmxhZGUgdGludDsgbmlwYSBpcyBncmV5ZXIgdGhhbiBncmFzc1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcblxuICAgIC8vIHRoZSBidXR0IGxpbmUgb2YgZWFjaCBjb3Vyc2UsIGppdHRlcmVkIHBlciBjb2x1bW4gYW5kIFNIQVJFRCB3aXRoIHRoZSBjb3Vyc2UgYWJvdmUgc28gdGhlXG4gICAgLy8gc2hhZG93IGFuZCB0aGUgYmxhZGVzIGFncmVlIG9uIHdoZXJlIHRoZSBlZGdlIGlzXG4gICAgY29uc3QgYnV0dHM6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8PSBuYzsgYysrKSB7XG4gICAgICBjb25zdCByb3c6IG51bWJlcltdID0gW107XG4gICAgICBsZXQgeSA9IDA7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSBzOyB4KyspIHtcbiAgICAgICAgaWYgKHggJSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKHMgLyA0OCkpID09PSAwKSB5ID0gKHJuZCgpICogMiAtIDEpICogcmFnZ2VkICogY2g7XG4gICAgICAgIHJvdy5wdXNoKGMgKiBjaCArIHkpO1xuICAgICAgfVxuICAgICAgYnV0dHMucHVzaChyb3cpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgbmM7IGMrKykge1xuICAgICAgY29uc3QgeTAgPSBjICogY2g7XG4gICAgICAvLyB0aGUgY291cnNlJ3Mgb3duIHRvbmU6IHRoYXRjaCB3ZWF0aGVycyBjb3Vyc2UgYnkgY291cnNlLCB0aGUgbG93ZXIgb25lcyBncmV5ZXJcbiAgICAgIGNvbnN0IHQgPSAxIC0gc3ByZWFkICogcm5kKCk7XG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHtNYXRoLnJvdW5kKHYgKiAwLjk4NSl9LCR7TWF0aC5yb3VuZCh2ICogMC45NSl9KWA7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgeTAgLSByYWdnZWQgKiBjaCAtIDEsIHMsIGNoICsgMiAqIHJhZ2dlZCAqIGNoICsgMik7XG4gICAgICAvLyBzdGVtcyBydW5uaW5nIERPV04gdGhlIHNsb3BlIGluc2lkZSB0aGUgY291cnNlLCBlYWNoIGEgbGl0dGxlIHBhc3QgaXRzIGJ1dHQgbGluZVxuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBzdGVtczsgaysrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHM7XG4gICAgICAgIGNvbnN0IHcgPSB3TWluICsgcm5kKCkgKiAod01heCAtIHdNaW4pO1xuICAgICAgICBjb25zdCB0b25lID0gMSAtIHNwcmVhZCAqICgwLjMgKyBybmQoKSAqIDAuNyk7XG4gICAgICAgIGNvbnN0IGEgPSAwLjE4ICsgcm5kKCkgKiAwLjMyO1xuICAgICAgICBjb25zdCBkYXJrID0gcm5kKCkgPCAwLjYyO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZGFyayA/IGByZ2JhKCR7TWF0aC5yb3VuZChzciAqIHRvbmUpfSwke01hdGgucm91bmQoc2cgKiB0b25lKX0sJHtNYXRoLnJvdW5kKHNiICogdG9uZSl9LCR7YS50b0ZpeGVkKDMpfSlgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYHJnYmEoMjU1LDI1MywyNDYsJHsoYSAqIDAuNikudG9GaXhlZCgzKX0pYDtcbiAgICAgICAgY29uc3QgeVRvcCA9IHkwIC0gY2ggKiAoMC4xNSArIHJuZCgpICogMC4yNSk7XG4gICAgICAgIGNvbnN0IHlCb3QgPSBidXR0c1tjICsgMV1bTWF0aC5taW4ocywgTWF0aC5yb3VuZCh4KSldICsgY2ggKiAocm5kKCkgKiAwLjEwKTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHlUb3AsIHcsIE1hdGgubWF4KDIsIHlCb3QgLSB5VG9wKSk7XG4gICAgICAgIC8vIFRPUk4gVElQOiBzb21lIGJsYWRlcyBydW4gb24gcGFzdCB0aGUgYnV0dCBsaW5lIGFuZCBlbmQgaW4gYSBwb2ludCwgc28gdGhlIGNvdXJzZSBlZGdlIGlzXG4gICAgICAgIC8vIGEgZnJpbmdlIG9mIGluZGl2aWR1YWwgYmxhZGVzIHJhdGhlciB0aGFuIGEgd2F2eSBjdXQgKHRoZSBuaXBhIHBsYXRlJ3Mgd2hvbGUgY2hhcmFjdGVyKVxuICAgICAgICBjb25zdCB0ZWFyOiBudW1iZXIgPSBvLnRlYXIgPz8gMDtcbiAgICAgICAgaWYgKHRlYXIgPiAwICYmIHJuZCgpIDwgMC40NSkge1xuICAgICAgICAgIGNvbnN0IEwgPSBjaCAqIHRlYXIgKiAoMC4zICsgcm5kKCkgKiAwLjcpO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4LCB5Qm90KTsgY3R4LmxpbmVUbyh4ICsgdywgeUJvdCk7IGN0eC5saW5lVG8oeCArIHcgLyAyLCB5Qm90ICsgTCk7IGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoNTgsNDgsMzYsJHsoMC4xMCArIHJuZCgpICogMC4xNikudG9GaXhlZCgzKX0pYDtcbiAgICAgICAgICBjdHguZmlsbFJlY3QoeCAtIDEsIHlCb3QsIHcgKyAyLCBMICogMC41KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gQkxBREUgU0VBTVM6IGEgdGhpbiBkYXJrIGxpbmUgYmV0d2VlbiBuZWlnaGJvdXJpbmcgYmxhZGVzLCB3aGljaCBpcyB3aGF0IHNlcGFyYXRlcyBhIG5pcGFcbiAgICAgIC8vIHJvb2YgKGJyb2FkIGxlYWZsZXRzIGxhaWQgc2lkZSBieSBzaWRlKSBmcm9tIGNvbWJlZCBncmFzcyB0aGF0Y2hcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8uc2VhbXMgPz8gMCk7IGsrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoNzAsNjAsNDYsJHsoMC4xMCArIHJuZCgpICogMC4xOCkudG9GaXhlZCgzKX0pYDtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHkwIC0gY2ggKiAwLjEsIDEsIGNoICogKDAuNyArIHJuZCgpICogMC41KSk7XG4gICAgICB9XG4gICAgICAvLyBNSVNTSU5HIGJsYWRlczogYSBmZXcgZ2FwcyB3aGVyZSB0aGUgY291cnNlIGhhcyB0aGlubmVkLCBkYXJrIGJ1dCBuZXZlciBibGFja1xuICAgICAgY29uc3QgZ2FwcyA9IG8uZ2FwcyA/PyAwO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBnYXBzOyBrKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IHMgKiAoMC4wMSArIHJuZCgpICogMC4wMyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSg5Niw4NCw2NiwkeygwLjIwICsgcm5kKCkgKiAwLjE4KS50b0ZpeGVkKDMpfSlgO1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeTAgKyBjaCAqIDAuMjUsIHcsIGNoICogKDAuNCArIHJuZCgpICogMC41KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhlIHNoYWRvdyBlYWNoIGNvdXJzZSdzIGJ1dHQgY2FzdHMgb24gdGhlIG9uZSBiZWxvdzogYSBncmFkaWVudCBmYWxsaW5nIEFXQVkgZnJvbSB0aGUgbGluZSxcbiAgICAvLyBkcmF3biBhbG9uZyB0aGUgaml0dGVyZWQgYnV0dCBzbyB0aGUgc2hhZG93IGlzIGFzIHJhZ2dlZCBhcyB0aGUgZWRnZSB0aGF0IGNhc3RzIGl0LCB3aXRoIHRoZVxuICAgIC8vIExJVCBUSVBTIG9mIHRoZSBjb3Vyc2UgYWJvdmUgaXQgYXMgYSBwYWxlIGxpbmUuIFRoZSBwYWlyIGlzIHdoYXQgbWFrZXMgdGhlIHJvb2YgcmVhZCBhc1xuICAgIC8vIHN0YWNrZWQgbGF5ZXJzOyB0aGUgc2hhZG93IGFsb25lIHJlYWRzIGFzIGdyYWluLCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBidWlsZCBsb29rZWQgbGlrZS5cbiAgICBmb3IgKGxldCBjID0gMTsgYyA8PSBuYzsgYysrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgICBjb25zdCB5YiA9IGJ1dHRzW2NdW3hdO1xuICAgICAgICBjb25zdCBnaCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5YiAtIGNoICogMC4wOSwgMCwgeWIpO1xuICAgICAgICBnaC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LDI1MiwyNDIsMCknKTsgZ2guYWRkQ29sb3JTdG9wKDEsIGByZ2JhKDI1NSwyNTIsMjQyLCR7KG8udGlwID8/IDAuMzQpLnRvRml4ZWQoMyl9KWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ2g7XG4gICAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHliIC0gY2ggKiAwLjA5ICsgZHksIDEsIGNoICogMC4wOSk7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliLCAwLCB5YiArIGNoICogMC4yMik7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSg1OCw0OCwzNiwkeyhvLnNoYWRvdyA/PyAwLjQyKS50b0ZpeGVkKDMpfSlgKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDU4LDQ4LDM2LDApJyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeWIgKyBkeSwgMSwgY2ggKiAwLjIyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNT1NTIC8gTU9VTEQ6IGxlc3MgcmVkIGFuZCBibHVlIG92ZXIgc29mdCBwYXRjaGVzLCBuZXZlciBhIHBhaW50ZWQgZ3JlZW5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLm1vc3MgPz8gMCk7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wNSArIHJuZCgpICogMC4xNCk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGNvbnN0IGEgPSAwLjE0ICsgcm5kKCkgKiAwLjIyO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDE1MCwxOTAsMTEwLCR7YS50b0ZpeGVkKDMpfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDE1MCwxOTAsMTEwLDApJyk7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JzsgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH1cbiAgICAvLyBST1Q6IGRhcmsgZ3JleS1icm93biBwYXRjaGVzIHdoZXJlIHRoZSB0aGF0Y2ggaGFzIGRlY2F5ZWQsIG5ldXRyYWwgcmF0aGVyIHRoYW4gZ3JlZW5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLnJvdCA/PyAwKTsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA0ICsgcm5kKCkgKiAwLjA4KTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMzAgKyBybmQoKSAqIDAuMjU7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoOTYsODYsNzQsJHthLnRvRml4ZWQoMyl9KWApOyBnMi5hZGRDb2xvclN0b3AoMC42LCBgcmdiYSg5Niw4Niw3NCwkeyhhICogMC41KS50b0ZpeGVkKDMpfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDk2LDg2LDc0LDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBzb2Z0IHRvbmFsIGRyaWZ0IHNvIHRoZSBjb3Vyc2VzIGRvIG5vdCByZWFkIGFzIGEgcHJpbnRlZCBzdHJpcGVcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgby53ZWF0aGVyID8/IDEwLCAwLjEwLCAwLjIyKTtcbiAgfSk7XG59XG5cbi8qKlxuICogV09WRU4gVEFSUEFVTElOIHRpbGU6IHRoZSBjb2Fyc2UgY3Jvc3Mtd292ZW4gcG9seXByb3B5bGVuZSB0YXBlIG9mIGEgVGhhaSBidWlsZGVyJ3MgdGFycCwgcGx1c1xuICogdGhlIGNyZWFzZXMgYSBmb2xkZWQgc2hlZXQga2VlcHMgZm9yIGxpZmUgYW5kIHRoZSBzdW4tYmxlYWNoaW5nIGFsb25nIHRoZSByaWRnZXMuIEEgbXVsdGlwbGllciBvblxuICogdGhlIG1lYXN1cmVkIGJsdWUsIHNvIHRoZSB3ZWF2ZSBkYXJrZW5zIGFuZCB0aGUgYmxlYWNoIGxpZnRzIHRvd2FyZCB3aGl0ZS5cbiAqL1xuZnVuY3Rpb24gdGFycFRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgcGl0Y2ggPSBNYXRoLm1heCgzLCBNYXRoLnJvdW5kKHMgLyAoby50YXBlcyA/PyA2NCkpKTtcbiAgICAvLyB0aGUgd2VhdmU6IHdhcnAgYW5kIHdlZnQgdGFwZXMsIGVhY2ggcGFpciB3aXRoIGEgc2hhZG93IGF0IGl0cyBqb2luLCBhbHRlcm5hdGluZyBvdmVyL3VuZGVyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4ICs9IHBpdGNoKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMzAsMzQsNDQsJHsoMC4xMCArIHJuZCgpICogMC4wOCkudG9GaXhlZCgzKX0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDcpJzsgY3R4LmZpbGxSZWN0KHggKyAxLCAwLCBNYXRoLm1heCgxLCBwaXRjaCAqIDAuMzUpLCBzKTtcbiAgICB9XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzOyB5ICs9IHBpdGNoKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMzAsMzQsNDQsJHsoMC4xMCArIHJuZCgpICogMC4wOCkudG9GaXhlZCgzKX0pYDsgY3R4LmZpbGxSZWN0KDAsIHksIHMsIDEpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMDcpJzsgY3R4LmZpbGxSZWN0KDAsIHkgKyAxLCBzLCBNYXRoLm1heCgxLCBwaXRjaCAqIDAuMzUpKTtcbiAgICB9XG4gICAgLy8gZm9sZCBjcmVhc2VzOiBsb25nIHBhbGUgbGluZXMgd2l0aCBhIHNoYWRvdyBvbiBvbmUgc2lkZSwgYXQgdGhlIHR3byBheGVzIGEgdGFycCBpcyBmb2xkZWQgb25cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLmNyZWFzZXMgPz8gNik7IGsrKykge1xuICAgICAgY29uc3QgaG9yaXogPSBybmQoKSA8IDAuNSwgcCA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjUgKyBybmQoKSAqIDAuNSksIHEgPSBybmQoKSAqIHM7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yNiknO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMjYpJztcbiAgICAgIGlmIChob3JpeikgeyBjdHguZmlsbFJlY3QocSAtIGxlbiAvIDIsIHAsIGxlbiwgMS42KTsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDIwLDI2LDM4LDAuMTgpJzsgY3R4LmZpbGxSZWN0KHEgLSBsZW4gLyAyLCBwICsgMS42LCBsZW4sIDIpOyB9XG4gICAgICBlbHNlIHsgY3R4LmZpbGxSZWN0KHAsIHEgLSBsZW4gLyAyLCAxLjYsIGxlbik7IGN0eC5maWxsU3R5bGUgPSAncmdiYSgyMCwyNiwzOCwwLjE4KSc7IGN0eC5maWxsUmVjdChwICsgMS42LCBxIC0gbGVuIC8gMiwgMiwgbGVuKTsgfVxuICAgIH1cbiAgICAvLyBzdW4tYmxlYWNoZWQgc3RyZWFrcyBhbmQgYSBsaXR0bGUgZ3JpbWVcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgby53ZWF0aGVyID8/IDEyLCAwLjEwLCAwLjM0KTtcbiAgfSk7XG59XG5cbi8qKlxuICogU0FXTiBUSU1CRVIgdGlsZSBmb3IgYSB3ZWF0aGVyZWQgcG9zdC1hbmQtcGxhdGUgZnJhbWU6IGZpbmUgbG9uZ2l0dWRpbmFsIGdyYWluLCBhIGZldyBrbm90cywgdGhlXG4gKiBvZGQgZHJ5aW5nIHNwbGl0LCBhbmQgY2xvdWR5IHNpbHZlciB3ZWF0aGVyaW5nLiBEZWxpYmVyYXRlbHkgV0VBS0xZIGRpcmVjdGlvbmFsIC0tIHRoZSBmcmFtZSBpc1xuICogbWFwcGVkIHdpdGggd29ybGQgVVZzLCB3aGljaCBwdXQgdiBhbG9uZyB0aGUgcG9zdCBidXQgQUNST1NTIGEgYmVhbSwgYW5kIGEgc3Ryb25nbHkgc3RyaXBlZCB0aWxlXG4gKiB3b3VsZCB0aGVuIHJlYWQgYXMgYSBwbGFuayBqb2ludCBydW5uaW5nIHRoZSB3cm9uZyB3YXkgb24gaGFsZiB0aGUgZnJhbWUuIFRoZSB3ZWF0aGVyaW5nIGNhcnJpZXNcbiAqIG1vc3Qgb2YgdGhlIHJlYWQgYW5kIHRoZSBncmFpbiBvbmx5IHNoYXJwZW5zIGl0LCB3aGljaCBzdXJ2aXZlcyBib3RoIG9yaWVudGF0aW9ucy5cbiAqL1xuZnVuY3Rpb24gc2F3blRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBEQVJLID0gJzk2LDg0LDY4JywgTElHSFQgPSAnMjU1LDI1NSwyNTUnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2Y0ZjJlZSc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgby53ZWF0aGVyID8/IDIwLCAwLjE0LCAwLjMwKTtcbiAgICBncmFpbkxpbmVzKGN0eCwgcm5kLCAwLCBzLCAwLCBzLCBvLmdyYWluID8/IDIyMCwgREFSSywgTElHSFQsIDAuMTgpO1xuICAgIC8vIGtub3RzOiBhIGRhcmsgZWxsaXBzZSB3aXRoIHRoZSBncmFpbiBzd2VlcGluZyByb3VuZCBpdFxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ua25vdHMgPz8gNCk7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wMTIgKyBybmQoKSAqIDAuMDIpO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDc0LDYwLDQ0LDAuNDUpJztcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciwgciAqIDEuNiwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSg5Niw4MCw2MCwwLjIyKSc7IGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBmb3IgKGxldCBxID0gMTsgcSA8PSAzOyBxKyspIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciAqICgxICsgcSAqIDAuNiksIHIgKiAoMS42ICsgcSAqIDAuOSksIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LnN0cm9rZSgpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGRyeWluZyBzcGxpdHMgYWxvbmcgdGhlIGZpYnJlXG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCAoby5zcGxpdHMgPz8gMyk7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjIgKyBybmQoKSAqIDAuNDUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDU4LDQ4LDM2LDAuNDIpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHgsIHkgKyBkeSwgMS40LCBsZW4pO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMTYpJztcbiAgICAgIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KHggKyAxLjQsIHkgKyBkeSwgMSwgbGVuKTtcbiAgICB9XG4gICAgY29uc3Qgc3BvdHM6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLm1vdWxkID8/IDMpOyBpKyspIHNwb3RzLnB1c2goW3JuZCgpICogcywgcm5kKCkgKiBzXSk7XG4gICAgbW91bGRDbHVzdGVycyhjdHgsIHJuZCwgcywgc3BvdHMsIHMgKiAwLjA5LCBzICogMC4wNywgNzAsIDAuMjQpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBHQUxWQU5JU0VEIFNIRUVUIHdlYXRoZXJpbmc6IG9uZSBzZWFtbGVzcyBtdWx0aXBsaWVyIHRpbGUgY2FycnlpbmcgdGhlIHRocmVlIHRoaW5ncyBhIHppbmMgcm9vZlxuICogYWN0dWFsbHkgc2hvd3MgLS0gdGhlIGNoYWxreSB3aGl0ZSBveGlkYXRpb24gdGhhdCBlYXRzIHRoZSBzcGFuZ2xlLCB0aGUgZGFya2VyIGdyZXkgZHJpZnQgd2hlcmVcbiAqIGl0IGhhcyBub3QsIGFuZCB0aGUgd2FybSBydXN0IGZyZWNrbGVzIHRoYXQgc3RhcnQgYXQgZXZlcnkgZml4aW5nIGFuZCBsYXAuXG4gKlxuICogTGlrZSBgcGFpbnRUaWxlYCBpdCBpcyBkcmF3biBpbiBBQlNPTFVURSBtdWx0aXBsaWVyIHNwYWNlIG92ZXIgYSBSRS1CQVNFRCBlbnZlbG9wZSwgYmVjYXVzZVxuICogY2hhbGtpbmcgaXMgQlJJR0hURVIgdGhhbiB0aGUgY2xlYW4gc2hlZXQgaXQgc2l0cyBvbiBhbmQgYSBwbGFpbiBtdWx0aXBseSBjYW4gb25seSBkYXJrZW4uIGBvLmJhc2VgXG4gKiBpcyB0aGUgY2xlYW4gemluYydzIG93biBtdWx0aXBsaWVyIGFnYWluc3QgdGhhdCBlbnZlbG9wZSBhbmQgaXMgd2hhdCBtb3N0IG9mIHRoZSB0aWxlIGlzIGZpbGxlZFxuICogd2l0aDsgYG8uY2hhbGtgIHJlYWNoZXMgYmFjayB1cCB0byB0aGUgZW52ZWxvcGUuIE1lYXN1cmVkIG9mZiB0aGUgcGxhdGUsIHRoZSBkZWNrIHJ1bnMgMTcyIHRvIDE5N1xuICogbHVtYSBhY3Jvc3MgaXRzIG93biBzdXJmYWNlIGF0IGEgc2F0dXJhdGlvbiBvZiAwLjA0IC0tIGEgMjUtbHVtYSBzcHJlYWQgb24gYSBub21pbmFsbHkgZmxhdCBncmV5LFxuICogd2hpY2ggaXMgdGhlIHdob2xlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIHJvb2YgYW5kIGEgc2hlZXQgb2YgcGxhc3RpYy5cbiAqXG4gKiBgY2hhbGtTY2FsZWAgLyBgZHJpZnRTY2FsZWAgZXhpc3QgYmVjYXVzZSBvbiBhIHJvb2YgdGhlIHRpbGUgaXMgc21hbGwgYWdhaW5zdCB0aGUgc3VyZmFjZTogdGhlXG4gKiBkZWNrIHJlcGVhdHMgaXQgZm91ciB0aW1lcyBhY3Jvc3MsIHNvIGFueSBtYXJrIHdpZGVyIHRoYW4gYSB0ZW50aCBvZiBpdCBkcmF3cyBhIHZpc2libGUgbGF0dGljZS5cbiAqIFRoZSBCUk9BRCBjaGFsayB6b25lcyBiZWxvbmcgb24gdGhlIHNoZWV0J3Mgb3duIHZlcnRleCBncmlkLCB3aGljaCBkb2VzIG5vdCByZXBlYXQ7IHdoYXQgdGhlIHRpbGVcbiAqIG93ZXMgaXMgdGhlIGZpbmUgc3BlY2tsZSBpbnNpZGUgdGhlbS5cbiAqXG4gKiBUaGUgcm9sbCBtYXJrcyBhcmUgZHJhd24gTEFTVCBhbmQgYWxvbmcgdSwgd2hpY2ggb24gdGhlIGRlY2sncyB3b3JsZCBVVnMgaXMgdGhlIGF4aXMgdGhlIG1vZGVsbGVkXG4gKiBmbHV0ZXMgcnVuIGFjcm9zcy4gVGhleSBhcmUgd2hhdCB0aGUgdGlsZSBzdGlsbCBvd2VzIHRoZSBnZW9tZXRyeSBvbmNlIHRoZSBjb3JydWdhdGlvbiBpdHNlbGYgaXNcbiAqIHJlYWw6IGEgcm9sbCBmb3JtZXIgbGVhdmVzIGZpbmUgbGVuZ3Rod2lzZSBzdHJpYXRpb24gYmV0d2VlbiB0aGUgZmx1dGVzLCBhbmQgYGJ1bXBgIHBpY2tzIGl0IHVwLlxuICovXG5mdW5jdGlvbiBnYWx2VGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IFsxLCAxLCAxXSwgY2hhbGsgPSBvLmNoYWxrID8/IGJhc2UsIHJ1c3QgPSBvLnJ1c3QgPz8gYmFzZSwgZGFyayA9IG8uZGFyayA/PyBiYXNlO1xuICAgIGNvbnN0IHdyYXAgPSAoZHJhdzogKGR4OiBudW1iZXIsIGR5OiBudW1iZXIpID0+IHZvaWQpID0+IHtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSBkcmF3KGR4LCBkeSk7XG4gICAgfTtcbiAgICBjb25zdCBibG9iID0gKGM6IG51bWJlcltdLCB4OiBudW1iZXIsIHk6IG51bWJlciwgcjogbnVtYmVyLCBhOiBudW1iZXIsIHJ5ID0gMSwgcm90ID0gMCkgPT4ge1xuICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKGMpfSwke2F9KWApOyBnLmFkZENvbG9yU3RvcCgwLjU1LCBgcmdiYSgke3JnYihjKX0sJHthICogMC41fSlgKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKGMpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciwgciAqIHJ5LCByb3QsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfSk7XG4gICAgfTtcblxuICAgIC8vIFRoZSBiYXNlIGZpbGwgY2FycmllcyB0aGUgRkxVVEUgc2hhZGluZyB3aGVuIGBmbHV0ZXNgIGlzIHNldDogYGZsdXRlc2AgcmlwcGxlcyBwZXIgdGlsZSwgaW5cbiAgICAvLyBwaGFzZSB3aXRoIHRoZSBtb2RlbGxlZCBjb3JydWdhdGlvbiAoYSB0cm91Z2ggYXQgdSA9IDAsIHdoaWNoIGlzIHdoZXJlIHRoZSBkZWNrJ3Mgd29ybGQgVVZzIHB1dFxuICAgIC8vIG9uZSkuIFRoZSBnZW9tZXRyeSBhbHJlYWR5IHR1cm5zIHRoZSBmbHV0ZXMgdG8gdGhlIGxpZ2h0IC0tIHRoaXMgaXMgdGhlIGFtYmllbnQgZGFya2VuaW5nIGluXG4gICAgLy8gdGhlIHZhbGxleXMgYW5kIHRoZSByb2xsLWZvcm1lcidzIG93biBwb2xpc2ggb24gdGhlIGNyZXN0cywgd2hpY2ggZmxhdCBzdHVkaW8gbGlnaHRpbmcgb24gYVxuICAgIC8vIHNtb290aC1zaGFkZWQgdHJpYW5nbGUgd2F2ZSBnaXZlcyBub25lIG9mLiBPdXQgb2YgcGhhc2UgaXQgd291bGQgQkVBVCB3aXRoIHRoZSBnZW9tZXRyeSwgd2hpY2hcbiAgICAvLyBpcyB3aHkgdGhlIHBpdGNoIGlzIGxvY2tlZCB0byB0aGUgZGVjaydzIG93biAxMyBmbHV0ZXMgcGVyIG1ldHJlIHJhdGhlciB0aGFuIGNob3Nlbi5cbiAgICBjb25zdCBmbCA9IG8uZmx1dGVzID8/IDAsIGZsb3cgPSBvLmZsdXRlTG93ID8/IDAuODg7XG4gICAgaWYgKGZsID4gMCkge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4KyspIHtcbiAgICAgICAgY29uc3QgdCA9ICgxIC0gTWF0aC5jb3MoeCAvIHMgKiBNYXRoLlBJICogMiAqIGZsKSkgLyAyOyAgIC8vIDAgaW4gdGhlIHRyb3VnaCwgMSBhdCB0aGUgY3Jlc3RcbiAgICAgICAgY29uc3QgayA9IGZsb3cgKyAoMSAtIGZsb3cpICogdDtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtyZ2IoYmFzZS5tYXAoKHY6IG51bWJlcikgPT4gdiAqIGspKX0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cmdiKGJhc2UpfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7IH1cblxuICAgIC8vIDEuIHRoZSBncmV5IGRyaWZ0OiBicm9hZCwgdmVyeSBzb2Z0LCB0aGUgYXJlYXMgdGhlIGNoYWxrIGhhcyBub3QgcmVhY2hlZFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uZHJpZnQgPz8gMTYpOyBpKyspXG4gICAgICBibG9iKGRhcmssIHJuZCgpICogcywgcm5kKCkgKiBzLCBzICogKDAuMTYgKyBybmQoKSAqIDAuMzApICogKG8uZHJpZnRTY2FsZSA/PyAxKSwgMC4xMCArIHJuZCgpICogMC4xOCwgMC41ICsgcm5kKCkgKiAwLjksIHJuZCgpICogTWF0aC5QSSk7XG5cbiAgICAvLyAyLiB0aGUgY2hhbGsgYmxvb206IExBUkdFLCBzb2Z0IGFuZCBpcnJlZ3VsYXIsIHdpdGggYSBncmFudWxhciBmcmluZ2UuIE9uIGEgcm9vZiBpdCBpcyB0aGVcbiAgICAvLyAgICBkb21pbmFudCBtYXJrIC0tIHRoZSBwbGF0ZSdzIGRlY2sgaXMgbW9yZSBjaGFsayB0aGFuIGNsZWFuIHNoZWV0IC0tIHNvIGl0IGlzIGRyYXduIHdpZGUgYW5kXG4gICAgLy8gICAgYXQgaGlnaCBhbHBoYSwgdW5saWtlIHRoZSBzcGFyc2UgYmxvb21zIG9mIGEgcGFpbnRlZCBwYW5lbC5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLmNoYWxrUGF0Y2hlcyA/PyAxNCk7IGsrKykge1xuICAgICAgY29uc3QgY3ggPSBybmQoKSAqIHMsIGN5ID0gcm5kKCkgKiBzLCBjciA9IHMgKiAoMC4wOCArIHJuZCgpICogMC4xOCkgKiAoby5jaGFsa1NjYWxlID8/IDEpO1xuICAgICAgYmxvYihjaGFsaywgY3gsIGN5LCBjciwgKG8uY2hhbGtBbHBoYSA/PyAwLjU1KSArIHJuZCgpICogMC4zMCwgMC41ICsgcm5kKCkgKiAwLjksIHJuZCgpICogTWF0aC5QSSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQwOyBpKyspIHtcbiAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3IgKiAxLjM7XG4gICAgICAgIGNvbnN0IHggPSBjeCArIE1hdGguY29zKGEpICogZCwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiBkLCByID0gMC44ICsgcm5kKCkgKiAyLjQ7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihjaGFsayl9LCR7MC4yICsgcm5kKCkgKiAwLjQ1fSlgO1xuICAgICAgICB3cmFwKChkeCwgZHkpID0+IHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIHJ1c3Q6IHNtYWxsIHdhcm0gZnJlY2tsZSBjbHVzdGVycywgZWFjaCBhIHNvZnQgcGF0Y2ggdW5kZXIgYSBmaWVsZCBvZiBzcGVja3MsIHdpdGggYSBzaG9ydFxuICAgIC8vICAgIHJ1biBiZWxvdyBpdC4gWmluYyBkb2VzIG5vdCBzaGVldC1ydXN0IHRoZSB3YXkgYmFyZSBzdGVlbCBkb2VzIC0tIGl0IGZyZWNrbGVzIGZpcnN0LlxuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgKG8ucnVzdENsdXN0ZXJzID8/IDEwKTsgaysrKSB7XG4gICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBybmQoKSAqIHMsIGNyID0gcyAqICgwLjAyICsgcm5kKCkgKiAwLjA1NSk7XG4gICAgICBibG9iKHJ1c3QsIGN4LCBjeSwgY3IsIDAuMjUgKyBybmQoKSAqIDAuMzAsIDAuNyArIHJuZCgpICogMC43LCBybmQoKSAqIE1hdGguUEkpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zcGVja3NQZXJDbHVzdGVyID8/IDI2KTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBybmQoKSAqIE1hdGguUEkgKiAyLCBkID0gTWF0aC5zcXJ0KHJuZCgpKSAqIGNyO1xuICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCwgciA9IDAuNyArIHJuZCgpICogMS44O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHtyZ2IocnVzdCl9LCR7MC4yNSArIHJuZCgpICogMC40NX0pYDtcbiAgICAgICAgd3JhcCgoZHgsIGR5KSA9PiB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChybmQoKSA8IDAuNikge1xuICAgICAgICBjb25zdCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDA2LCBsZW4gPSBzICogKDAuMDUgKyBybmQoKSAqIDAuMTYpO1xuICAgICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGN5LCAwLCBjeSArIGxlbik7XG4gICAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHJ1c3QpfSwkezAuMTQgKyBybmQoKSAqIDAuMTZ9KWApOyBnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihydXN0KX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICAgIHdyYXAoKGR4KSA9PiBjdHguZmlsbFJlY3QoY3ggKyBkeCArIChybmQoKSAtIDAuNSkgKiBjciwgY3ksIHcsIGxlbikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDQuIHJvbGwgbWFya3M6IGZpbmUgbGluZXMgb2YgY29uc3RhbnQgdSwgYXQgYHJvbGxzYCBwZXIgdGlsZSwgYWx0ZXJuYXRlbHkgYSBzaGFkZSB1bmRlciBhbmQgYVxuICAgIC8vICAgIHNoYWRlIG92ZXIgdGhlIHRvbmUgdGhleSBjcm9zcy4gQm91bmQgYXMgYSBidW1wIG1hcCB0aGV5IGFyZSB0aGUgc3RyaWF0aW9uIGJldHdlZW4gZmx1dGVzLlxuICAgIGNvbnN0IHJvbGxzID0gby5yb2xscyA/PyA0MDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvbGxzOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSAoaSArIDAuMzUgKyBybmQoKSAqIDAuMykgKiBzIC8gcm9sbHMsIHVwID0gcm5kKCkgPCAwLjQ1O1xuICAgICAgY29uc3QgYyA9IHVwID8gY2hhbGsgOiBkYXJrLCBhID0gMC4wNiArIHJuZCgpICogMC4xMjtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKCR7cmdiKGMpfSwke2F9KWA7IGN0eC5saW5lV2lkdGggPSAwLjcgKyBybmQoKSAqIDEuMztcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCAwKTsgY3R4LmxpbmVUbyh4ICsgZHgsIHMpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogU1BMSVQtQ1VMTSB0aWxlIGZvciB0aGUgaGFsZi1waXBlIHJvb2Zpbmc6IHggQVJPVU5EIHRoZSBoYWxmIGN1bG0gKGN1bG1VViBvdmVyIDAuNzAgbSwgc28gdGhlXG4gKiAgc2VhbSBsYW5kcyBvbiB0aGUgaGlkZGVuIHVuZGVyc2lkZSksIHkgQUxPTkcgaXQuIFdoYXQgdGhlIHBsYXRlIHNob3dzIG9uIGEgcm9vZmluZyBjdWxtIHRoYXQgYVxuICogIHdob2xlIHBvbGUgZG9lcyBub3Q6IE9ORSBub2RlIHJpbmcgcGVyIDAuNzAgbSAodGhlIHJvb2YgY3VsbXMgYXJlIGxvbmdlciBpbnRlcm5vZGVzIHRoYW4gdGhlXG4gKiAgcG9zdHMpLCBkZW5zZSBsb25naXR1ZGluYWwgZmlicmUsIGEgbG9uZyBkcnlpbmcgc3BsaXQsIGJsZWFjaGVkIGZhY2VzLCBhbmQgUk9UIC0tIGRhcmtcbiAqICBpcnJlZ3VsYXIgaG9sZXMgd2l0aCBhIHN0YWluZWQgaGFsbyBhbmQgYSBzY2F0dGVyIG9mIGluc2VjdCBwaW5ob2xlcywgdGhyZWUgb3IgZm91ciBwZXIgdGlsZS5cbiAqICBBIG11bHRpcGxpZXIgb24gdGhlIHBlci1pbnN0YW5jZSB0b25lOyB0aGUgcm90IGNvcmVzIGFyZSBzbWFsbCBlbm91Z2ggKDEwLTIwIHB4IG9mIDUxMiwgb24gYVxuICogIDAuNzAgbSB0aWxlLCBzbyAxNS0zMCBtbSkgdGhhdCBubyBlbmNsb3NlZCBkYXJrIHBhdGNoIHJlYWNoZXMgdGhlIHNpbGhvdWV0dGUgZ2F0ZS4gKi9cbmZ1bmN0aW9uIHNwbGl0VGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBEQVJLID0gJzg4LDc2LDU4JywgTElHSFQgPSAnMjU1LDI1NSwyNTUnO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2YzZjBlOCc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBhIHNvZnQgcm91bmQtb2ZmIGFjcm9zcyB0aGUgYXJjOiB0aGUgcmltcyBhIHRvdWNoIGRhcmtlciB0aGFuIHRoZSBjcm93blxuICAgIGNvbnN0IGdhID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHMsIDApO1xuICAgIGdhLmFkZENvbG9yU3RvcCgwLCAncmdiYSg5MCw4NCw3NCwwLjE0KScpOyBnYS5hZGRDb2xvclN0b3AoMC41LCAncmdiYSgyNTUsMjU1LDI1NSwwLjA4KScpOyBnYS5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoOTAsODQsNzQsMC4xNCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ2E7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICB3ZWF0aGVyUGF0Y2hlcyhjdHgsIHJuZCwgcywgMCwgcywgMTAsIDAuMTAsIDAuMzQpO1xuICAgIGNvbnN0IG5vZGUgPSBzICogKDAuMzAgKyBybmQoKSAqIDAuNDApO1xuICAgIGZvciAoY29uc3QgW3kwLCB5MV0gb2YgW1swLCBub2RlXSwgW25vZGUsIHNdXSkgZ3JhaW5MaW5lcyhjdHgsIHJuZCwgMCwgcywgeTAsIHkxLCAzMjAsIERBUkssIExJR0hULCAwLjI0KTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDM7IGsrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgbGVuID0gcyAqICgwLjMgKyBybmQoKSAqIDAuNik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsMzQsMjYsMC41NSknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCwgeSArIGR5LCAxLjYsIGxlbik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4yMCknO1xuICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDBdKSBjdHguZmlsbFJlY3QoeCArIDEuNiwgeSArIGR5LCAxLjIsIGxlbik7XG4gICAgfVxuICAgIC8vIHRoZSBub2RlIHJpbmdcbiAgICB7XG4gICAgICBjb25zdCB5ID0gbm9kZTtcbiAgICAgIGNvbnN0IGdzID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkgLSBzICogMC4wMywgMCwgeSk7XG4gICAgICBncy5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoNjAsNTAsNDAsMCknKTsgZ3MuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDYwLDUwLDQwLDAuMjQpJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3M7IGN0eC5maWxsUmVjdCgwLCB5IC0gcyAqIDAuMDMsIHMsIHMgKiAwLjAzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg1Miw0NCwzNiwwLjY2KSc7IGN0eC5maWxsUmVjdCgwLCB5LCBzLCAzKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjM2KSc7IGN0eC5maWxsUmVjdCgwLCB5ICsgMywgcywgNSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNjAsNTAsNDAsMC4zMCknOyBjdHguZmlsbFJlY3QoMCwgeSArIDgsIHMsIDIpO1xuICAgIH1cbiAgICAvLyBST1Q6IGFuIGlycmVndWxhciBkYXJrIGNvcmUgd2l0aCBhIHdhcm0gc3RhaW5lZCBoYWxvLCBhbmQgcGluaG9sZXMgYXJvdW5kIGl0XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICAgIGNvbnN0IGN4ID0gcm5kKCkgKiBzLCBjeSA9IHJuZCgpICogcywgcnggPSBzICogKDAuMDEyICsgcm5kKCkgKiAwLjAzKSwgcnkgPSByeCAqICgxLjQgKyBybmQoKSAqIDEuNiksIHJvdCA9IChybmQoKSAtIDAuNSkgKiAwLjY7XG4gICAgICBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY29uc3QgaGFsbyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjeCwgY3kgKyBkeSwgMCwgY3gsIGN5ICsgZHksIE1hdGgubWF4KHJ4LCByeSkgKiAyLjQpO1xuICAgICAgICBoYWxvLmFkZENvbG9yU3RvcCgwLCAncmdiYSg5Niw3NCw0MCwwLjQyKScpOyBoYWxvLmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDk2LDc0LDQwLDAuMjApJyk7IGhhbG8uYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDk2LDc0LDQwLDApJyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBoYWxvOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4LCBjeSArIGR5LCByeCAqIDIuNiwgcnkgKiAyLjQsIHJvdCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzYsMjgsMTgsMC44MiknOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKGN4LCBjeSArIGR5LCByeCwgcnksIHJvdCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMTQsMTAsNiwwLjkpJzsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCArIHJ4ICogMC4yLCBjeSArIGR5IC0gcnkgKiAwLjEsIHJ4ICogMC41LCByeSAqIDAuNTUsIHJvdCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IGN4ICsgKHJuZCgpIC0gMC41KSAqIHMgKiAwLjEyLCB5ID0gY3kgKyAocm5kKCkgLSAwLjUpICogcyAqIDAuMiwgciA9IDEgKyBybmQoKSAqIDEuODtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDMwLDI0LDE2LDAuODUpJztcbiAgICAgICAgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBsb29zZSBtb3VsZCBiZWxvdyB0aGUgbm9kZVxuICAgIG1vdWxkQ2x1c3RlcnMoY3R4LCBybmQsIHMsIFtbcm5kKCkgKiBzLCBub2RlICsgcyAqIDAuMDRdLCBbcm5kKCkgKiBzLCBybmQoKSAqIHNdXSwgcyAqIDAuMDgsIHMgKiAwLjA1LCA2MCwgMC4yNik7XG4gIH0pO1xufVxuXG4vKiogUk9QRSB0aWxlIGZvciB0aGUgbGFzaGluZ3M6IHggQVJPVU5EIHRoZSBjb2xsYXIsIHkgQUxPTkcgdGhlIHBvbGUgaXQgd3JhcHMuIEEgbGFzaGluZyBpcyB0dXJuc1xuICogIG9mIGxhaWQgcm9wZSwgc28gdGhlIHN1cmZhY2UgaXMgZGlhZ29uYWwgU1RSQU5EUyAtLSBhIGdyb292ZSBhbmQgYSBsaXQgcmlkZ2UgcGVyIHN0cmFuZCBhdCBhXG4gKiAgc2hhbGxvdyB3cmFwIGFuZ2xlIC0tIHdpdGggZmlicmUgZnV6eiBhbmQgYSBmZXcgZGFya2VyIHNvaWxlZCB0dXJucy4gT3ZlciAwLjEyIG0gcGVyIHRpbGUgdGhlXG4gKiAgc3RyYW5kIHBpdGNoIGlzIH4xMiBtbSwgd2hpY2ggaXMgdGhlIHBsYXRlJ3Mgcm9wZS4gU2VhbWxlc3M6IGV2ZXJ5IHN0cm9rZSBpcyBkcmF3biBhdCB0aHJlZVxuICogIHkgb2Zmc2V0cyBhbmQgdGhlIHN0cmFuZCBydW5zIGFjcm9zcyB0aGUgd3JhcC4gKi9cbmZ1bmN0aW9uIHJvcGVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2Y0ZWZlNCc7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBuID0gMTAsIHBpdGNoID0gcyAvIG4sIGFuZyA9IDAuMzI7ICAgICAgICAgICAgICAgIC8vIHdyYXAgYW5nbGUsIHJhZGlhbnNcbiAgICBjb25zdCBkeCA9IE1hdGgudGFuKGFuZykgKiBzOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBob3cgZmFyIGEgc3RyYW5kIGRyaWZ0cyBpbiB4IG92ZXIgb25lIHRpbGUgaGVpZ2h0XG4gICAgY3R4LnNhdmUoKTtcbiAgICBmb3IgKGxldCBrID0gLTM7IGsgPCBuICsgMzsgaysrKSB7XG4gICAgICBjb25zdCB4MCA9IGsgKiBwaXRjaDtcbiAgICAgIGZvciAoY29uc3Qgb3kgb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICAvLyBncm9vdmUgYmV0d2VlbiB0dXJuc1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSg3MCw1OCw0MCwwLjU1KSc7IGN0eC5saW5lV2lkdGggPSBwaXRjaCAqIDAuMjI7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4MCwgb3kpOyBjdHgubGluZVRvKHgwICsgZHgsIG95ICsgcyk7IGN0eC5zdHJva2UoKTtcbiAgICAgICAgLy8gdGhlIGxpdCBjcm93biBvZiB0aGUgdHVyblxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjMwKSc7IGN0eC5saW5lV2lkdGggPSBwaXRjaCAqIDAuMzA7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4MCArIHBpdGNoICogMC41LCBveSk7IGN0eC5saW5lVG8oeDAgKyBwaXRjaCAqIDAuNSArIGR4LCBveSArIHMpOyBjdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIHR3aXN0IG1hcmtzIGFjcm9zcyBlYWNoIHR1cm5cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoOTAsNzYsNTIsMC4yOCknOyBjdHgubGluZVdpZHRoID0gMS4yO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IDEyOyB0KyspIHtcbiAgICAgICAgICBjb25zdCB5eSA9IG95ICsgKHQgKyBybmQoKSkgKiBzIC8gMTIsIHh4ID0geDAgKyBwaXRjaCAqIDAuNSArIGR4ICogKCh5eSAtIG95KSAvIHMpO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4eCAtIHBpdGNoICogMC4zNSwgeXkgLSBwaXRjaCAqIDAuMTgpOyBjdHgubGluZVRvKHh4ICsgcGl0Y2ggKiAwLjM1LCB5eSArIHBpdGNoICogMC4xOCk7IGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjdHgucmVzdG9yZSgpO1xuICAgIC8vIGZ1enogYW5kIHNvaWxpbmdcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHJuZCgpIDwgMC42ID8gJ3JnYmEoNzAsNTgsNDAsMC4xOCknIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC4yMiknO1xuICAgICAgY3R4LmZpbGxSZWN0KHgsIHksIDEsIDEgKyBybmQoKSAqIDIpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgY29uc3QgeSA9IHJuZCgpICogcywgaCA9IHMgKiAoMC4wNiArIHJuZCgpICogMC4xMCk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5LCAwLCB5ICsgaCk7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoNjAsNDgsMzIsMCknKTsgZzIuYWRkQ29sb3JTdG9wKDAuNSwgJ3JnYmEoNjAsNDgsMzIsMC4yMiknKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDYwLDQ4LDMyLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHkgb2YgWy1zLCAwXSkgY3R4LmZpbGxSZWN0KDAsIHkgKyBkeSwgcywgaCk7XG4gICAgfVxuICB9KTtcbn1cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgLy8gQSBMSVQgc3VyZmFjZSAoYSBmbHVvcmVzY2VudCB0dWJlLCBhIGNoYXJjb2FsIGVtYmVyIGJlZCk6IGVtaXNzaXZlIGNhcnJpZXMgdGhlIGdsb3cgd2l0aG91dCBhXG4gICAgLy8gbGlnaHQgc291cmNlLCB3aGljaCB0aGUga2l0J3MgcHJvcHMgbmV2ZXIgb3duIC0tIHRoZSBob3N0IHNjZW5lIG93bnMgbGlnaHRpbmcuXG4gICAgaWYgKHMuZW1pc3NpdmUgIT09IHVuZGVmaW5lZCkgeyBtLmVtaXNzaXZlID0gbmV3IFRIUkVFLkNvbG9yKHMuZW1pc3NpdmUpOyBtLmVtaXNzaXZlSW50ZW5zaXR5ID0gcy5lbWlzc2l2ZUludGVuc2l0eSA/PyAxOyB9XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICAvLyBBbiBBTFBIQS1DVVQgcGFuZSAoY2hhaW4tbGluayBtZXNoKTogdGhlIGNhbnZhcyB0aWxlIGNhcnJpZXMgdGhlIGN1dC1vdXQgaW4gaXRzIGFscGhhIGNoYW5uZWwgYW5kXG4gICAgLy8gYWxwaGFUZXN0IGRpc2NhcmRzIHRoZSBvcGVuIGNlbGxzLCBzbyB0aGUgd2lyZSBzdGF5cyBvcGFxdWUgYW5kIHNvcnRzIGxpa2UgYSBzb2xpZC5cbiAgICBpZiAocy5hbHBoYVRlc3QgIT09IHVuZGVmaW5lZCkgeyBtLmFscGhhVGVzdCA9IHMuYWxwaGFUZXN0OyBtLnRyYW5zcGFyZW50ID0gZmFsc2U7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVkQ2hpbmVzZUhhbmdpbmdMYW50ZXJuTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdSZWQgQ2hpbmVzZSBIYW5naW5nIExhbnRlcm4nO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIG1hdGVyaWFsIHdpdGggYHZlcnRleENvbG9yc2AgcmVhZHMgYSBgY29sb3JgIGF0dHJpYnV0ZSBvdXQgb2YgRVZFUlkgZ2VvbWV0cnkgYm91bmQgdG8gaXQsIGFuZFxuICAgKiBhIGdlb21ldHJ5IHRoYXQgaGFzIG5vbmUgaGFuZHMgdGhlIHNoYWRlciBhbiB1bmRlZmluZWQgYXR0cmlidXRlIC0tIHdoaWNoIGNvbWVzIGJhY2sgYXNcbiAgICogKDAsIDAsIDApIGFuZCByZW5kZXJzIHRoZSBtZXNoIEJMQUNLLiBUaGF0IGlzIG5vdCBhIGh5cG90aGV0aWNhbDogdGhlIHVib3NvdCdzIHdhbGwgYm9keSBhbmRcbiAgICogaXRzIGVpZ2h0IGJvdW5kYXJ5IHN0b25lcyBzaGlwcGVkIGFzIGJsYWNrIHNpbGhvdWV0dGVzIGZyb20gb25lIHRpbnRlZCBwbGF0Zm9ybSBzaGFyaW5nIHRoZWlyXG4gICAqIHN0b25lIG1hdGVyaWFsLCBhbmQgdGhlIGZhaWx1cmUgaXMgc2lsZW50IGJlY2F1c2UgdGhlIHRpbnRlZCBjb21wb25lbnQgaXRzZWxmIGxvb2tzIHBlcmZlY3QuXG4gICAqXG4gICAqIEFuIEluc3RhbmNlZE1lc2ggaGlkZXMgaXQgLS0gaXQgZmFsbHMgYmFjayB0byBpbnN0YW5jZUNvbG9yIGFuZCBjb21lcyBvdXQgd2hpdGUgLS0gc28gdGhlIHNhbWVcbiAgICogbWlzdGFrZSBvbiB0aGUgY2hlZGkncyBuaWNoZSBmcmFtZXMgcmVuZGVyZWQgY29ycmVjdGx5IGFuZCB0YXVnaHQgbm90aGluZy4gR3VhcmQgaXQgaGVyZSwgb25jZSxcbiAgICogZm9yIGV2ZXJ5IGdlb21ldHJ5OiBubyBjb2xvciBhdHRyaWJ1dGUgYW5kIGEgdmVydGV4Q29sb3JzIG1hdGVyaWFsIG1lYW5zIGZpbGwgd2l0aCB3aGl0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGd1YXJkVmVydGV4Q29sb3JzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpIHtcbiAgICBpZiAoIW1hdCB8fCAhbWF0LnZlcnRleENvbG9ycyB8fCBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpKSByZXR1cm47XG4gICAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLmZpbGwoMSksIDMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgLy8gc2V0Q29sb3JBdCBNVUxUSVBMSUVTIHdpdGggbWF0ZXJpYWwuY29sb3IsIHNvIGFuIGluc3RhbmNlZCBtYXRlcmlhbCBjYXJyeWluZyBwZXItaW5zdGFuY2VcbiAgICAgIC8vIHRvbmVzIG11c3QgYmUgd2hpdGUgb3IgZXZlcnkgdG9uZSBjb21lcyBvdXQgZGFya2VuZWQgYnkgdGhlIGJhc2UuXG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuICAvKiogRm91ciBpbnN0YW5jZXMgYXQgOTAtZGVncmVlIHlhdyBhYm91dCB0aGUgYXhpcyAtLSB0aGUgY29ybmVyL2ZhY2UgcmVwZXRpdGlvbiB0aGF0IGV2ZXJ5XG4gICAqICBidWlsZGluZyBpbiB0aGlzIHNldCB1c2VzIGZvciBuaWNoZXMsIGZpbmlhbHMsIGJvdW5kYXJ5IHN0b25lcyBhbmQgY29ybmVyIGRvbWVzLiAqL1xuICBmdW5jdGlvbiBxdWFkKHJhZGl1czogbnVtYmVyLCB5OiBudW1iZXIsIHBoYXNlID0gMCk6IFRIUkVFLk1hdHJpeDRbXSB7XG4gICAgcmV0dXJuIFswLCAxLCAyLCAzXS5tYXAoKGkpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBwaGFzZSArIGkgKiBNYXRoLlBJIC8gMjtcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKE1hdGguc2luKGEpICogcmFkaXVzLCB5LCBNYXRoLmNvcyhhKSAqIHJhZGl1cyksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgYSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb21wb25lbnRzXG4gICAqIEVhY2ggZW50cnkgb2YgQ09ORklHLmdlb21ldHJ5LmNvbXBvbmVudHMgaXMgT05FIG1lcmdlZCBnZW9tZXRyeSBvbiBPTkUgbWF0ZXJpYWwgLS0gb25lIGRyYXdcbiAgICogY2FsbC4gRXZlcnkgcGFydCBpbnNpZGUgaXQgaXMgYSB0aW50ZWQgYm94LCB0dWJlLCBjeWxpbmRlciwgbGF0aGUgb3IgcGxhbmU7IGNvbG91ciBkaWZmZXJlbmNlc1xuICAgKiBhcmUgdmVydGV4IGNvbG91cnMuIGB1dmAgcGlja3MgaG93IGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgcmVwZWF0cyBvdmVyIGl0LiAqL1xuICBmb3IgKGNvbnN0IGMgb2YgRy5jb21wb25lbnRzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgKGMuYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCBiIG9mIG1pcnJvclgoKGMuYm94ZXNNaXJyb3JlZCA/PyBbXSkgYXMgbnVtYmVyW11bXSkpIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCB0IG9mIChjLnR1YmVzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0dWJlKHQucHRzLCB0LnIsIHQuc2VnID8/IDgsIHQuaGV4KSk7XG4gICAgLy8gU1dFUFQgdHViZXM6IG9uZSBtaXRyZWQgcmluZyBwZXIgcG9pbnQgaW5zdGVhZCBvZiBhIGN5bGluZGVyIHBlciBzZWdtZW50IC0tIHRoZSBvbmx5IHRoaW5nIHRoYXRcbiAgICAvLyBzdXJ2aXZlcyBhIHRpZ2h0IGJlbmQuIFNlZSBzd2VlcFR1YmUuXG4gICAgZm9yIChjb25zdCB0IG9mIChjLnN3ZWVwcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2goc3dlZXBUdWJlKHQucHRzLCB0LnIsIHQuc2VnID8/IDEwLCB0LmhleCwgdC5jYXAgIT09IGZhbHNlKSk7XG4gICAgZm9yIChjb25zdCBzdCBvZiAoYy5zdHJhcHMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHN0cmFwKHN0LnB0cywgc3Qudywgc3QudCwgc3QuYWJvdXQsIHN0LmhleCkpO1xuICAgIGZvciAoY29uc3QgY3kgb2YgKGMuY3lscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIC8vIGB0aDBgL2B0aExlbmAgbWFrZSBhIFBBUlRJQUwgY3lsaW5kZXIgKGEgY3VydmVkIHN0aWNrZXIgcGF0Y2ggd3JhcHBlZCBvbiBhIHJvdW5kIGJvZHkpIGFuZFxuICAgICAgLy8gYG9wZW5gIGRyb3BzIHRoZSBjYXBzOyB0aGUgc2lkZSBVVnMgdGhlbiBydW4gMC4uMSBhY3Jvc3MgdGhlIGFyYyBhbmQgdXAgdGhlIGhlaWdodCwgd2hpY2ggaXNcbiAgICAgIC8vIHdoYXQgYSBiYWtlZCBncmFwaGljIHdhbnRzLiBgdXZSZXBgIG11bHRpcGxpZXMgdGhlbSBmb3IgYSByZXBlYXRpbmcgdGlsZS5cbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjeS5ydCwgY3kucmIsIGN5LmgsIGN5LnNlZyA/PyAxMiwgMSwgY3kub3BlbiA/PyBmYWxzZSwgY3kudGgwID8/IDAsIGN5LnRoTGVuID8/IE1hdGguUEkgKiAyKTtcbiAgICAgIGlmIChjeS51dlJlcCkgeyBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpOyBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHV2LnNldFhZKGksIHV2LmdldFgoaSkgKiBjeS51dlJlcFswXSwgdXYuZ2V0WShpKSAqIGN5LnV2UmVwWzFdKTsgfVxuICAgICAgLy8gYHNpZGVVVmAgcGlucyB0aGUgU0lERSB3YWxsJ3MgVVZzIHRvIG9uZSB0ZXhlbCBzbyBhIGRpc2MgY2FycnlpbmcgYSBiYWtlZCB0b3AtZG93biBpbWFnZSBzaG93c1xuICAgICAgLy8gdGhhdCBpbWFnZSBvbiBpdHMgY2FwIGFsb25lLCB3aXRoIGl0cyByaW0gaW4gd2hhdGV2ZXIgdGhlIHBpbm5lZCB0ZXhlbCBob2xkcyAoYSBiYWcgdG9uZSkuXG4gICAgICBpZiAoY3kuc2lkZVVWKSB7IGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2JyksIG4gPSAoKGN5LnNlZyA/PyAxMikgKyAxKSAqIDI7IGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB1di5zZXRYWShpLCBjeS5zaWRlVVZbMF0sIGN5LnNpZGVVVlsxXSk7IH1cbiAgICAgIC8vIGBzY2FsZWAgYmVmb3JlIHRoZSByb3RhdGlvbnM6IGFuIE9WQUwgYmFzaW4gb3IgZGlzYywgd2hpY2ggYSBsYXRoZSBvciBhIGN5bGluZGVyIGNhbm5vdFxuICAgICAgLy8gcmV2b2x2ZSBvbiBpdHMgb3duLiBOb3JtYWxzIGFyZSByZWNvbXB1dGVkIGJlY2F1c2UgYSBub24tdW5pZm9ybSBzY2FsZSBza2V3cyB0aGVtLlxuICAgICAgaWYgKGN5LnNjYWxlKSB7IGcuc2NhbGUoY3kuc2NhbGVbMF0sIGN5LnNjYWxlWzFdLCBjeS5zY2FsZVsyXSk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgfVxuICAgICAgLy8gQ1VMTSBVVnM6IHUgYXJvdW5kIHRoZSBjaXJjdW1mZXJlbmNlLCB2IGFsb25nIHRoZSBsZW5ndGgsIGJvdGggaW4gbWV0cmVzIC0tIHNvIHRoZSBub2RlXG4gICAgICAvLyByaW5ncyBvZiBhIGN1bG0gdGlsZSBjcm9zcyBhIGJhbWJvbyBwb2xlIGF0IHJlYWwgc3BhY2luZyBob3dldmVyIHRoZSBwb2xlIGlzIHRoZW4gdHVybmVkLlxuICAgICAgLy8gSXQgaGFzIHRvIGhhcHBlbiBCRUZPUkUgdGhlIHJvdGF0aW9ucywgd2hpbGUgdGhlIGN5bGluZGVyIHN0aWxsIHJ1bnMgYWxvbmcgaXRzIG93biBZLlxuICAgICAgaWYgKGMudXYgPT09ICdjdWxtJykgY3VsbVVWKGcsIGN5LnJ0LCBjeS5oLCBjLnV2U2NhbGUgPz8gMSwgY3kudk9mZiA/PyAwKTtcbiAgICAgIGlmIChjeS5yeCkgZy5yb3RhdGVYKGN5LnJ4KTsgaWYgKGN5LnJ5KSBnLnJvdGF0ZVkoY3kucnkpOyBpZiAoY3kucnopIGcucm90YXRlWihjeS5yeik7XG4gICAgICBnLnRyYW5zbGF0ZShjeS5hdFswXSwgY3kuYXRbMV0sIGN5LmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGN5LmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGwgb2YgKGMubGF0aGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gYHJ5YCB5YXdzIHRoZSByZXZvbHV0aW9uOiBhIDQtc2VnbWVudCBsYXRoZSB0dXJuZWQgNDUgZGVncmVlcyBpcyBhIGNoYW1mZXJlZCBTUVVBUkUgc2xhYiBpbiBvbmVcbiAgICAgIC8vIGdlb21ldHJ5IChhIGNvbmUncyBydWJiZXIgYmFzZSksIHdoZXJlIHR3byBzdGFja2VkIGJveGVzIHdvdWxkIGNvc3QgdHdvIGFuZCBhIGNvcGxhbmFyIHBhaXIuXG4gICAgICAvLyBgY3lsVVZgIChhIHRpbGUgc2l6ZSBpbiBtZXRyZXMpIHdyaXRlcyBhIHNlYW1sZXNzIGFyb3VuZC1ieS11cCBVViBmcm9tIHRoZSBsYXRoZSdzIG93biBzZWdtZW50XG4gICAgICAvLyBpbmRleCAtLSBhdGFuMiB3b3VsZCBmb2xkIGEgd2hvbGUgdGlsZSBpbnRvIHRoZSBzZWFtIGNvbHVtbiAtLSBmb3IgdHJlYWQsIGZsdXRpbmcgYW5kIGdyYWluLlxuICAgICAgY29uc3QgZyA9IGxhdGhlKGwucHRzLCBsLnNlZyA/PyAxMiwgMCwgbC5zaGFycCAhPT0gZmFsc2UsIGwud2VsZFNlYW0gPT09IHRydWUpO1xuICAgICAgaWYgKGwuY3lsVVYpIHsgY29uc3QgY3UgPSBBcnJheS5pc0FycmF5KGwuY3lsVVYpID8gbC5jeWxVViA6IFtsLmN5bFVWLCBsLmN5bFVWLCAwXTsgbGF0aGVVVihnLCAoZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQgLyAoKGwuc2VnID8/IDEyKSArIDEpKSB8IDAsIGwuc2VnID8/IDEyLCBjdVswXSwgY3VbMV0sIGN1WzJdID8/IDApOyB9XG4gICAgICBpZiAobC5zY2FsZSkgeyBnLnNjYWxlKGwuc2NhbGVbMF0sIGwuc2NhbGVbMV0sIGwuc2NhbGVbMl0pOyBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IH1cbiAgICAgIC8vIGByeWAgeWF3cyB0aGUgcmV2b2x1dGlvbiAoYWJvdmUpLiBgcnhgL2ByemAgVElMVCB0aGUgYXhpcyBpdHNlbGYsIHdoaWNoIGlzIHdoYXQgYSBXQUxMIG9yXG4gICAgICAvLyBjZWlsaW5nIGZpdHRpbmcgbmVlZHM6IGEgbGF0aGUgcmV2b2x2ZXMgYWJvdXQgK1ksIGFuZCBhIGJ1bGtoZWFkIGxhbXAncyBheGlzIGlzIHRoZSB3YWxsXG4gICAgICAvLyBub3JtYWwsIHNvIGl0cyBiYWNrcGxhdGUgYW5kIGRvbWUgYXJlIGF1dGhvcmVkIGFib3V0IFkgYW5kIGxhaWQgZG93biB3aXRoIHJ4ID0gUEkvMi5cbiAgICAgIGlmIChsLnJ5KSBnLnJvdGF0ZVkobC5yeSk7IGlmIChsLnJ4KSBnLnJvdGF0ZVgobC5yeCk7IGlmIChsLnJ6KSBnLnJvdGF0ZVoobC5yeik7XG4gICAgICBnLnRyYW5zbGF0ZShsLmF0WzBdLCBsLmF0WzFdLCBsLmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGwuaGV4KSk7XG4gICAgfVxuICAgIC8vIFJJQkJFRCBET01FUzogYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gY2FycnlpbmcgdmVydGljYWwgRkxVVEVTLCBhcyBgMSArIGFtcCAqIGNvcyhyaWJzICogdGhldGEpYFxuICAgIC8vIHNhbXBsZWQgcGVyIHNlY3RvciByYXRoZXIgdGhhbiBhIGxhdGhlLiBBIHByZXNzZWQtZ2xhc3MgbGFtcCBkb21lIGlzIGZsdXRlZCwgYW5kIGEgc21vb3RoIG9uZVxuICAgIC8vIHJlYWRzIGFzIGEgcGxhc3RpYyBidWJibGUgLS0gdGhlIHJpYnMgYXJlIG1vc3Qgb2Ygd2hhdCBzYXlzIGBnbGFzc2AgYXQgcHJvcCBkaXN0YW5jZS4gQXV0aG9yZWRcbiAgICAvLyBhYm91dCArWSBsaWtlIGEgbGF0aGUsIHNvIGEgd2FsbCBmaXR0aW5nIGxheXMgaXQgZG93biB3aXRoIHJ4LlxuICAgIGZvciAoY29uc3QgZCBvZiAoYy5kb21lcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSByaWJiZWREb21lKGQucHRzLCBkLnJpYnMsIGQuYW1wLCBkLnNlZyA/PyAyNCwgZC52YWxsZXksIGQuc21vb3RoID09PSB0cnVlKTtcbiAgICAgIGlmIChkLnJ5KSBnLnJvdGF0ZVkoZC5yeSk7IGlmIChkLnJ4KSBnLnJvdGF0ZVgoZC5yeCk7IGlmIChkLnJ6KSBnLnJvdGF0ZVooZC5yeik7XG4gICAgICBpZiAoZC5hdCkgZy50cmFuc2xhdGUoZC5hdFswXSwgZC5hdFsxXSwgZC5hdFsyXSk7XG4gICAgICAvLyBBIGZsdXRlZCBkb21lIHdyaXRlcyBpdHMgT1dOIGNvbG91ciBhdHRyaWJ1dGUgKHRoZSBjcmVzdC10by12YWxsZXkgbXVsdGlwbGllciksIHNvIHRpbnRHZW9cbiAgICAgIC8vIHdvdWxkIG92ZXJ3cml0ZSB0aGUgZmx1dGUgc3RyaXBpbmcgd2l0aCBvbmUgZmxhdCBoZXggLS0gdGhlIHNhbWUgdHJhcCBgc2hlZXRgJ3MgaGV4VW5kZXJcbiAgICAgIC8vIGZlbGwgaW50by4gTXVsdGlwbHkgdGhlIHRvbmUgSU5UTyB0aGUgbXVsdGlwbGllciBpbnN0ZWFkLCBzbyB0aGUgZG9tZSBjYXJyaWVzIGJvdGguXG4gICAgICBpZiAoZC52YWxsZXkgJiYgZC5oZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjb2wgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgICAgIGNvbnN0IHQgPSBuZXcgVEhSRUUuQ29sb3IoZC5oZXgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbC5jb3VudDsgaSsrKSBjb2wuc2V0WFlaKGksIGNvbC5nZXRYKGkpICogdC5yLCBjb2wuZ2V0WShpKSAqIHQuZywgY29sLmdldFooaSkgKiB0LmIpO1xuICAgICAgICBncy5wdXNoKGcpO1xuICAgICAgfSBlbHNlIGdzLnB1c2goZC52YWxsZXkgPyBnIDogdGludEdlbyhnLCBkLmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHAgb2YgKGMucGxhbmVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBQQU5FOiBhIHNpbmdsZSBxdWFkIGluIHRoZSBYWSBwbGFuZSBhdCBkZXB0aCB6LCBkb3VibGUtc2lkZWQgYnkgaXRzIG1hdGVyaWFsLiBJdHMgVVZzIHJ1blxuICAgICAgLy8gMC4uMSBhY3Jvc3MgdGhlIHBhbmUgc28gYW4gYWxwaGEtY3V0IHRpbGUgcmVwZWF0cyBgcmVwYCB0aW1lcyBhY3Jvc3MgYW5kIGRvd24uXG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkocC53LCBwLmgsIDEsIDEpO1xuICAgICAgZy50cmFuc2xhdGUocC5hdFswXSwgcC5hdFsxXSwgcC5hdFsyXSk7XG4gICAgICBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB1di5zZXRYWShpLCB1di5nZXRYKGkpICogKHAucmVwPy5bMF0gPz8gMSksIHV2LmdldFkoaSkgKiAocC5yZXA/LlsxXSA/PyAxKSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgcC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBlIG9mIChjLmV4dHJ1ZGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBwcm9maWxlIGluIHRoZSBYWSBwbGFuZSBleHRydWRlZCBhbG9uZyBaIGJldHdlZW4gejAgYW5kIHoxIC0tIGEgc2xhYiB3aXRoIGEgbW91bGRlZCBlZGdlLFxuICAgICAgLy8gYSBweXJhbWlkIGNhcCBhcyBhIHN0ZXBwZWQgcHJvZmlsZSwgYSBzcGVhciBmaW5pYWwuXG4gICAgICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgc2hhcGUubW92ZVRvKGUucG9seVswXVswXSwgZS5wb2x5WzBdWzFdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZS5wb2x5Lmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8oZS5wb2x5W2ldWzBdLCBlLnBvbHlbaV1bMV0pO1xuICAgICAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gICAgICBmb3IgKGNvbnN0IGggb2YgKGUuaG9sZXMgPz8gW10pIGFzIG51bWJlcltdW11bXSkge1xuICAgICAgICBjb25zdCBocCA9IG5ldyBUSFJFRS5QYXRoKCk7IGhwLm1vdmVUbyhoWzBdWzBdLCBoWzBdWzFdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBoLmxlbmd0aDsgaSsrKSBocC5saW5lVG8oaFtpXVswXSwgaFtpXVsxXSk7XG4gICAgICAgIGhwLmNsb3NlUGF0aCgpOyBzaGFwZS5ob2xlcy5wdXNoKGhwKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGcgPSBleHRydWRlQWxvbmdaKHNoYXBlLCBlLnowLCBlLnoxKTtcbiAgICAgIGlmIChlLnJ4KSBnLnJvdGF0ZVgoZS5yeCk7XG4gICAgICBpZiAoZS5yeSkgZy5yb3RhdGVZKGUucnkpO1xuICAgICAgaWYgKGUucnopIGcucm90YXRlWihlLnJ6KTtcbiAgICAgIGlmIChlLmF0KSBnLnRyYW5zbGF0ZShlLmF0WzBdLCBlLmF0WzFdLCBlLmF0WzJdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBlLmhleCkpO1xuICAgIH1cbiAgICAvLyBFTExJUFNPSURTOiBbaGV4LCBjeCwgY3ksIGN6LCByeCwgcnksIHJ6LCByb3RYPywgcm90WT8sIHJvdFo/XSAtLSBhIHVuaXQgc3BoZXJlIHNjYWxlZCBwZXIgYXhpc1xuICAgIC8vIGFuZCB0dXJuZWQgYWJvdXQgaXRzIG93biBjZW50cmUuIEEgc2t1bGwgZG9tZSwgYSBwYXcsIGEgbm9zZSBwYWQ6IHRoZSByb3VuZGVkIHNvbGlkcyBvZiBhblxuICAgIC8vIGFuaW1hbCB0aGF0IGEgYm94IG9yIGEgc3RhdGlvbiB0dWJlIGNhbm5vdCBnaXZlLCBzaGFyaW5nIHNtb290aCBub3JtYWxzIHRocm91Z2ggdGhlIG1lcmdlLlxuICAgIGZvciAoY29uc3QgZSBvZiAoYy5lbGxpcHNvaWRzID8/IFtdKSBhcyBudW1iZXJbXVtdKSB7XG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEsIGVbMTBdID8/IDE2LCBlWzExXSA/PyAxMik7XG4gICAgICBnLnNjYWxlKGVbNF0sIGVbNV0sIGVbNl0pO1xuICAgICAgaWYgKGVbN10pIGcucm90YXRlWChlWzddKTsgaWYgKGVbOF0pIGcucm90YXRlWShlWzhdKTsgaWYgKGVbOV0pIGcucm90YXRlWihlWzldKTtcbiAgICAgIGcudHJhbnNsYXRlKGVbMV0sIGVbMl0sIGVbM10pO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIGVbMF0pKTtcbiAgICB9XG4gICAgLy8gRlJVU1RBOiBbaGV4LCBjeCwgeUJvdHRvbSwgY3osIHcwLCBkMCwgdzEsIGQxLCBoXSAtLSBhIGJveCB3aG9zZSBmb290cHJpbnQgY2hhbmdlcyBmcm9tICh3MCwgZDApIGF0XG4gICAgLy8gdGhlIGJvdHRvbSB0byAodzEsIGQxKSBhdCB0aGUgdG9wOiB0aGUgdGFwZXJlZCBib2R5IG9mIGEgd2hlZWxpZSBiaW4gb3IgYSBzdGVlbCBjb250YWluZXIuXG4gICAgZm9yIChjb25zdCBmIG9mIChjLmZydXN0YSA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKGZydXN0dW0oZi5zbGljZSgxKSksIGZbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgKGMuc3Bpa2VzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNwaWtlKHMuYXQsIHMudywgcy5oKSwgcy5oZXgpKTtcbiAgICAvLyBEUkFQRUQgU0hFRVRTOiBhIHRhcnAgb3IgYXduaW5nIGFzIGEgaGVpZ2h0IGdyaWQgd2l0aCB0aGlja25lc3MgLS0gYSByaWRnZSwgdGhlIHNhZyBiZXR3ZWVuXG4gICAgLy8gaXRzIHBvbGVzIGFuZCB0aGUgZHJvb3Agb2YgaXRzIGZyZWUgZWRnZXMgYXJlIG51bWJlcnMgaW4gdGhlIGdyaWQsIGNvbXB1dGVkIGF0IGVtaXQgdGltZS5cbiAgICBmb3IgKGNvbnN0IHMgb2YgKGMuc2hlZXRzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBzaGVldCBnaXZlbiBgaGV4VW5kZXJgIGhhcyBhbHJlYWR5IHdyaXR0ZW4gaXRzIE9XTiBjb2xvdXIgYXR0cmlidXRlLCBvbmUgdG9uZSBmb3IgdGhlIHRvcFxuICAgICAgLy8gZ3JpZCBhbmQgYW5vdGhlciBmb3IgdGhlIHVuZGVyc2lkZSBhbmQgcmltLiB0aW50R2VvIHdvdWxkIG92ZXJ3cml0ZSB0aGUgbG90IHdpdGggYSBzaW5nbGVcbiAgICAgIC8vIGhleCAtLSB3aGljaCBpcyB3aGF0IHNoaXBwZWQgdGhlIHRhcnBhdWxpbiBiYXkncyBibHVlLW92ZXItb3JhbmdlIHRhcnAgYXMgYSB3aGl0ZSBzYWlsLlxuICAgICAgY29uc3QgZyA9IHNoZWV0KHMpO1xuICAgICAgZ3MucHVzaChzLmhleFVuZGVyICE9PSB1bmRlZmluZWQgPyBnIDogdGludEdlbyhnLCBzLmhleCkpO1xuICAgIH1cbiAgICAvLyBPUkdBTklDIHN0YXRpb24gdHViZXM6IFt6LCBjeCwgY3ksIHJ4LCByeV0gc3RhdGlvbnMgc3dlcHQgYWxvbmcgWiAtLSB0aGUgb25seSBzb2Z0IGZvcm0gaW4gdGhlXG4gICAgLy8ga2l0LCBhIGx5aW5nIGFuaW1hbC4gTGl0IHNtb290aCBieSB0aGUgaGVscGVyJ3Mgc2hhcmVkIHJpbmcgdmVydGljZXMuXG4gICAgZm9yIChjb25zdCB0IG9mIChjLnR1YmVzQWxvbmcgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gdHViZUFsb25nKHQuc3RhdGlvbnMsIHQuc2VnID8/IDEyKTtcbiAgICAgIGlmICh0LnJ5KSBnLnJvdGF0ZVkodC5yeSk7IGlmICh0LmF0KSBnLnRyYW5zbGF0ZSh0LmF0WzBdLCB0LmF0WzFdLCB0LmF0WzJdKTtcbiAgICAgIC8vIGBoZXhlc2AgLS0gb25lIGNvbG91ciBwZXIgU1RBVElPTiwgYmxlbmRlZCBhbG9uZyB0aGUgc3dlZXAgLS0gaXMgaG93IGEgY29hdCBwYXR0ZXJuIHRoYXQgcnVuc1xuICAgICAgLy8gYWxvbmcgdGhlIGJvZHkgKGEgd2hpdGUgY29sbGFyIGJldHdlZW4gYSB0YW4gc2t1bGwgYW5kIGEgdGFuIHNhZGRsZSkgaXMgY2FycmllZCBvbiBhIHNpbmdsZVxuICAgICAgLy8gbWVyZ2VkIG1lc2guIFRoZSBjb21wb25lbnQncyBheGlzIHRpbnQgdGhlbiBtdWx0aXBsaWVzIHRoZSBkb3JzYWwtdG8tdmVudHJhbCBmYWRlIGludG8gaXQsXG4gICAgICAvLyBhbmQgbmVpdGhlciBjb3N0cyBhIG1hdGVyaWFsLiBBIHNpbmdsZSBgaGV4YCBzdGF5cyB0aGUgZGVmYXVsdC5cbiAgICAgIGlmICh0LmhleGVzKSB7XG4gICAgICAgIC8vIEEgc3RhdGlvbiBlbnRyeSBtYXkgYmUgb25lIGhleCwgb3IgYSBQQUlSIFtkb3JzYWwsIHZlbnRyYWxdIGJsZW5kZWQgYXJvdW5kIHRoZSByaW5nIGJ5IHRoZVxuICAgICAgICAvLyBzYW1lIHNpbih0aGV0YSkgdHViZUFsb25nIHN3ZXB0IHRoZSBzZWN0aW9uIHdpdGggLS0gc28gdGhlIGNvYXQgcnVucyBib3RoIEFMT05HIHRoZSBib2R5XG4gICAgICAgIC8vIChhIHdoaXRlIGNvbGxhciBiZXR3ZWVuIGEgdGFuIHNrdWxsIGFuZCBhIHRhbiBzYWRkbGUpIGFuZCBBQ1JPU1MgaXQgKHRoZSBzYWRkbGUgZ2l2aW5nIHdheVxuICAgICAgICAvLyB0byBhIGR1c3R5IGZsYW5rIGFuZCBhIHBhbGUgYmVsbHkpLiBBbiBheGlzIHRpbnQgY2Fubm90IGRvIHRoZSBzZWNvbmQgaGFsZjogb24gYW4gYW5pbWFsXG4gICAgICAgIC8vIGx5aW5nIG9uIGl0cyBzaWRlIHRoZSBkb3JzYWwtdG8tdmVudHJhbCBheGlzIGlzIGhvcml6b250YWwsIHNvIGEgYmFuZCBpbiB4IGN1dHMgdGhlIGNyb3duXG4gICAgICAgIC8vIG9mIHRoZSBzd2VlcCBpbiBoYWxmLCBhbmQgYSBNVUxUSVBMWSBjYW4gb25seSBldmVyIGRhcmtlbiAtLSBpdCBjYW5ub3QgdGFrZSBhIHdhcm0gdGFuIHRvXG4gICAgICAgIC8vIGEgY29vbGVyIGdyZXkuIFR3byBjb2xvdXJzIHBlciBzdGF0aW9uLCBvbmUgYXR0cmlidXRlLCBzdGlsbCBvbmUgZHJhdyBjYWxsLlxuICAgICAgICBjb25zdCBzZWcgPSB0LnNlZyA/PyAxMiwgbiA9IHQuc3RhdGlvbnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHNlZyAqIG4gKiAzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBlID0gdC5oZXhlc1tNYXRoLm1pbih0LmhleGVzLmxlbmd0aCAtIDEsIGkpXTtcbiAgICAgICAgICBjb25zdCBkID0gbmV3IFRIUkVFLkNvbG9yKEFycmF5LmlzQXJyYXkoZSkgPyBlWzBdIDogZSksIHYgPSBuZXcgVEhSRUUuQ29sb3IoQXJyYXkuaXNBcnJheShlKSA/IGVbMV0gOiBlKTtcbiAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBmID0gKE1hdGguc2luKGogKiBNYXRoLlBJICogMiAvIHNlZykgKyAxKSAvIDI7XG4gICAgICAgICAgICBjb25zdCBrID0gKGkgKiBzZWcgKyBqKSAqIDM7XG4gICAgICAgICAgICBjb2xba10gPSBkLnIgKyAodi5yIC0gZC5yKSAqIGY7IGNvbFtrICsgMV0gPSBkLmcgKyAodi5nIC0gZC5nKSAqIGY7IGNvbFtrICsgMl0gPSBkLmIgKyAodi5iIC0gZC5iKSAqIGY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gICAgICAgIGdzLnB1c2goZyk7XG4gICAgICB9IGVsc2UgZ3MucHVzaCh0aW50R2VvKGcsIHQuaGV4ID8/IDB4ZmZmZmZmKSk7XG4gICAgfVxuICAgIGxldCBnID0gbWVyZ2VHZW9zKGdzKTtcbiAgICAvLyBhIHBlci1jb21wb25lbnQgc2NhbGUsIGFwcGxpZWQgdG8gdGhlIG1lcmdlIGJlZm9yZSB0aW50aW5nOiBob3cgYSBseWluZyBhbmltYWwgYXV0aG9yZWQgYXRcbiAgICAvLyBpdHMgb3duIHByb3BvcnRpb25zIGlzIGZpdHRlZCBpbnRvIHRoZSBkZWNsYXJlZCBlbnZlbG9wZSB3aXRob3V0IHJlLXJlYWRpbmcgZXZlcnkgc3RhdGlvblxuICAgIGlmIChjLnNjYWxlKSBnLnNjYWxlKGMuc2NhbGVbMF0sIGMuc2NhbGVbMV0sIGMuc2NhbGVbMl0pO1xuICAgIC8vIEFYSVMgVElOVDogYSBwZXItdmVydGV4IGJsZW5kIGZyb20gYzAgYXQgYGZyb21gIHRvIGMxIGF0IGB0b2AgYWxvbmcgb25lIGF4aXMsIG92ZXIgdGhlIHdob2xlXG4gICAgLy8gbWVyZ2UgLS0gYSB0YW4gYmFjayBmYWRpbmcgdG8gYSB3aGl0ZSBiZWxseSBjb3N0cyBhbiBhdHRyaWJ1dGUsIG5vdCBhIHNlY29uZCBtYXRlcmlhbC4gQXBwbGllZFxuICAgIC8vIGluIExJTkVBUiBzcGFjZSB0aHJvdWdoIFRIUkVFLkNvbG9yLiBga2VlcGAgbXVsdGlwbGllcyB0aGUgYmxlbmQgaW50byB0aGUgZXhpc3RpbmcgdGludCBpbnN0ZWFkXG4gICAgLy8gb2YgcmVwbGFjaW5nIGl0LCBzbyBhIGRhcmsgbm9zZSBzdGF5cyBkYXJrLlxuICAgIGlmIChjLnRpbnQpIHtcbiAgICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuQ29sb3IoYy50aW50LmMwKSwgYiA9IG5ldyBUSFJFRS5Db2xvcihjLnRpbnQuYzEpO1xuICAgICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpOyBsZXQgY29sID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlIHwgbnVsbDtcbiAgICAgIGlmICghY29sKSB7IGNvbCA9IG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMykuZmlsbCgxKSwgMyk7IGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIGNvbCk7IH1cbiAgICAgIGNvbnN0IGF4ID0gYy50aW50LmF4aXMgPT09ICd4JyA/IDAgOiBjLnRpbnQuYXhpcyA9PT0gJ3knID8gMSA6IDI7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCB2ID0gYXggPT09IDAgPyBwLmdldFgoaSkgOiBheCA9PT0gMSA/IHAuZ2V0WShpKSA6IHAuZ2V0WihpKTtcbiAgICAgICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh2IC0gYy50aW50LmZyb20pIC8gKGMudGludC50byAtIGMudGludC5mcm9tKSkpO1xuICAgICAgICBjb25zdCByID0gYS5yICsgKGIuciAtIGEucikgKiB0LCBnZyA9IGEuZyArIChiLmcgLSBhLmcpICogdCwgYmIgPSBhLmIgKyAoYi5iIC0gYS5iKSAqIHQ7XG4gICAgICAgIGlmIChjLnRpbnQua2VlcCkgY29sLnNldFhZWihpLCBjb2wuZ2V0WChpKSAqIHIsIGNvbC5nZXRZKGkpICogZ2csIGNvbC5nZXRaKGkpICogYmIpOyBlbHNlIGNvbC5zZXRYWVooaSwgciwgZ2csIGJiKTtcbiAgICAgIH1cbiAgICAgIGNvbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjLnV2ID09PSAnd29ybGQnKSBnID0gd29ybGRVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdoZWlnaHQnKSBnID0gaGVpZ2h0VVYoZywgYy51dlNjYWxlID8/IDEpO1xuICAgIGlmIChjLnV2ID09PSAncGFuZWwnKSBnID0gcGFuZWxVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdwYW5lbC1yb3QnKSBnID0gcGFuZWxVVihnLCBjLnV2U2NhbGUgPz8gMSwgdHJ1ZSk7XG4gICAgLy8gJ2Zyb250JzogcGxhbmFyIFVWcyBpbnRvIGEgYmFrZWQgZnJvbnQtZWxldmF0aW9uIGF0bGFzIG9uICtaIGZhY2VzLCBvbmUgcGlubmVkIHRleGVsIGVsc2V3aGVyZS5cbiAgICBpZiAoYy51diA9PT0gJ2Zyb250JykgZyA9IGZyb250QXRsYXNVVihnLCBjLmF0bGFzKTtcbiAgICAvLyAnY3VsbScgaXMgZGVsaWJlcmF0ZWx5IGFic2VudCBoZXJlOiBpdCBpcyB3cml0dGVuIHBlciBjeWxpbmRlciBhYm92ZSwgYmVmb3JlIHRoZSByb3RhdGlvbnMsXG4gICAgLy8gYW5kIGEgd2hvbGUtbWVyZ2UgcGFzcyB3b3VsZCBmbGF0dGVuIGl0IGJhY2sgdG8gdGhlIGN5bGluZGVyJ3MgZGVmYXVsdCAwLi4xIHdyYXAuXG4gICAgYWRkKGMuaWQsIGMubmFtZSwgZywgYy5tYXRlcmlhbCk7XG4gICAgaWYgKGMuY29sbGlkZXIpIGNvbGxpZGVyc1tjLmlkXSA9IGMuY29sbGlkZXI7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJlcGV0aXRpb24gc3lzdGVtc1xuICAgKiBQaWNrZXRzLCBzbGF0cywgbGF0dGljZSBzdHJpcHM6IG9uZSBnZW9tZXRyeSwgb25lIEluc3RhbmNlZE1lc2gsIG9uZSBkcmF3IGNhbGwuICovXG4gIGZvciAoY29uc3QgciBvZiAoRy5pbnN0YW5jZWQgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgKHIuYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCBzIG9mIChyLnNwaWtlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godGludEdlbyhzcGlrZShzLmF0LCBzLncsIHMuaCksIHMuaGV4KSk7XG4gICAgZm9yIChjb25zdCBmIG9mIChyLmZydXN0YSA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKGZydXN0dW0oZi5zbGljZSgxKSksIGZbMF0pKTtcbiAgICBmb3IgKGNvbnN0IGN5IG9mIChyLmN5bHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICAvLyBgdGgwYC9gdGhMZW5gIGN1dCBhIFBBUlRJQUwgY3lsaW5kZXIgdGhlIHNhbWUgd2F5IHRoZSBjb21wb25lbnQgYnJhbmNoIGRvZXM6IGEgc3BsaXQgYmFtYm9vXG4gICAgICAvLyBjdWxtIGlzIGEgaGFsZiBwaXBlLCB0aExlbiA9IFBJLCBgb3BlbmAgc28gaXQgaXMgYSBzaGVsbCB3aXRoIG5vIGRpc2NzIGF0IGl0cyBlbmRzLiBUaGVcbiAgICAgIC8vIG1hdGVyaWFsIGNhcnJpZXMgZG91YmxlU2lkZWQsIGJlY2F1c2UgYSBob2xsb3ctdXAgY3VsbSBpcyBzZWVuIGZyb20gdGhlIGluc2lkZS5cbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjeS5ydCwgY3kucmIsIGN5LmgsIGN5LnNlZyA/PyAxMiwgMSwgY3kub3BlbiA/PyBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeS50aDAgPz8gMCwgY3kudGhMZW4gPz8gTWF0aC5QSSAqIDIpO1xuICAgICAgaWYgKHIudXYgPT09ICdjdWxtJykgY3VsbVVWKGcsIGN5LnJ0LCBjeS5oLCByLnV2U2NhbGUgPz8gMSwgY3kudk9mZiA/PyAwKTtcbiAgICAgIGlmIChjeS5yeCkgZy5yb3RhdGVYKGN5LnJ4KTsgaWYgKGN5LnJ5KSBnLnJvdGF0ZVkoY3kucnkpOyBpZiAoY3kucnopIGcucm90YXRlWihjeS5yeik7XG4gICAgICBnLnRyYW5zbGF0ZShjeS5hdFswXSwgY3kuYXRbMV0sIGN5LmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGN5LmhleCkpO1xuICAgIH1cbiAgICAvLyBBbiBPUEVOIHdoZWVsIC0tIHR5cmUgYW5kIHJpbSBhcyBjbG9zZWQgcmluZyBsYXRoZXMsIGEgaHViLCBhbmQgd2lyZSBzcG9rZXMgLS0gZm9yIGEgYmljeWNsZVxuICAgIC8vIHdob3NlIHdoZWVscyByZWFkIGFzIGJpY3ljbGUgd2hlZWxzIHJhdGhlciB0aGFuIGRpc2NzLiBMYXRoZXMgcmV2b2x2ZSBhYm91dCBZIChgcnhgIGxheXMgdGhlXG4gICAgLy8gYXhsZSB3aGVyZSB0aGUgcGxhY2VtZW50IHdhbnRzIGl0KTsgYHNwb2tlc2AgcmFkaWF0ZSBhYm91dCBYIGJ5IHRoZSBoZWxwZXIncyBjb252ZW50aW9uLCBzbyBhblxuICAgIC8vIGF4bGUgb24gWiB0YWtlcyBgcnk6IFBJLzJgLlxuICAgIGZvciAoY29uc3QgbCBvZiAoci5sYXRoZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gbGF0aGUobC5wdHMsIGwuc2VnID8/IDEyLCAwLCBsLnNoYXJwICE9PSBmYWxzZSwgbC53ZWxkU2VhbSA9PT0gdHJ1ZSk7XG4gICAgICBpZiAobC5yeCkgZy5yb3RhdGVYKGwucngpOyBpZiAobC5yeSkgZy5yb3RhdGVZKGwucnkpOyBpZiAobC5yeikgZy5yb3RhdGVaKGwucnopO1xuICAgICAgaWYgKGwuYXQpIGcudHJhbnNsYXRlKGwuYXRbMF0sIGwuYXRbMV0sIGwuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgbC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBzIG9mIChyLnNwb2tlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IGcgPSBzcG9rZXMocy5ySHViLCBzLnJSaW0sIHMuaGFsZlcsIHMubiwgcy5oZXgsIHMudCA/PyAwLjAwNiwgcy5wcmlzbSA/PyBmYWxzZSk7XG4gICAgICBpZiAocy5yeCkgZy5yb3RhdGVYKHMucngpOyBpZiAocy5yeSkgZy5yb3RhdGVZKHMucnkpOyBpZiAocy5yeikgZy5yb3RhdGVaKHMucnopO1xuICAgICAgaWYgKHMuYXQpIGcudHJhbnNsYXRlKHMuYXRbMF0sIHMuYXRbMV0sIHMuYXRbMl0pOyBncy5wdXNoKGcpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHQgb2YgKHIudHViZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gOCwgdC5oZXgpKTtcbiAgICAvLyBFWFRSVURFUyBvbiBhbiBpbnN0YW5jZWQgc2V0LCB0aGUgc2FtZSBwcm9maWxlLWluLVhZLWFsb25nLVogZm9ybSBhcyBhIGNvbXBvbmVudCdzOiBhIGNoYW1mZXJlZFxuICAgIC8vIGxpZCBwbGF0ZSB0aGF0IHR3byBpbnN0YW5jZXMgc2hhcmUgKHRoZSBkdW1wc3RlcidzIGxpZHMsIHRoZSByaWdodCBvbmUgeWF3ZWQgYSBoYWxmIHR1cm4pLlxuICAgIGZvciAoY29uc3QgZSBvZiAoci5leHRydWRlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICBzaGFwZS5tb3ZlVG8oZS5wb2x5WzBdWzBdLCBlLnBvbHlbMF1bMV0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBlLnBvbHkubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhlLnBvbHlbaV1bMF0sIGUucG9seVtpXVsxXSk7XG4gICAgICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgICAgIGNvbnN0IGcgPSBleHRydWRlQWxvbmdaKHNoYXBlLCBlLnowLCBlLnoxKTtcbiAgICAgIGlmIChlLnJ4KSBnLnJvdGF0ZVgoZS5yeCk7IGlmIChlLnJ5KSBnLnJvdGF0ZVkoZS5yeSk7IGlmIChlLnJ6KSBnLnJvdGF0ZVooZS5yeik7XG4gICAgICBpZiAoZS5hdCkgZy50cmFuc2xhdGUoZS5hdFswXSwgZS5hdFsxXSwgZS5hdFsyXSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgZS5oZXgpKTtcbiAgICB9XG4gICAgbGV0IGcgPSBtZXJnZUdlb3MoZ3MpO1xuICAgIGlmIChyLnV2ID09PSAnd29ybGQnKSBnID0gd29ybGRVVihnLCByLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKHIudXYgPT09ICdoZWlnaHQnKSBnID0gaGVpZ2h0VVYoZywgci51dlNjYWxlID8/IDEpO1xuICAgIC8vICdjdWxtJyBhZ2FpbiB3cml0dGVuIHBlciBjeWxpbmRlciBhYm92ZSwgYmVmb3JlIHRoZSByb3RhdGlvbnMuXG4gICAgY29uc3QgbWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gICAgZm9yIChjb25zdCBwIG9mIHIucGxhY2VtZW50cyBhcyBudW1iZXJbXVtdKSB7XG4gICAgICBtYXRzLnB1c2gobmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhwWzBdLCBwWzFdLCBwWzJdKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tRXVsZXIobmV3IFRIUkVFLkV1bGVyKHBbM10gPz8gMCwgcFs0XSA/PyAwLCBwWzVdID8/IDApKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpKTtcbiAgICB9XG4gICAgYWRkSW5zdChyLmlkLCByLm5hbWUsIGcsIHIubWF0ZXJpYWwsIG1hdHMsIHIuY29sb3JzKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzZXMgKi9cbiAgZm9yIChjb25zdCB0IG9mIChDT05GSUcudGlsZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbWF0ID0gbWF0ZXJpYWxzW3QubWF0ZXJpYWxdO1xuICAgIGlmICghbWF0KSBjb250aW51ZTtcbiAgICAvLyBBIEJBS0VEIGdyYXBoaWMgKGEgcHJpbnRlZCBzaWduIGZhY2UpOiBvbmUgV2ViUCBkYXRhIFVSSSBjb21wb3NlZCBvZmZsaW5lIGZyb20gdGhlIHBsYXRlJ3Mgb3duXG4gICAgLy8gcHJpbnRlZCByZWdpb24gYW5kIHZlY3RvciBtYXJrcywgbG9hZGVkIHRocm91Z2ggVGV4dHVyZUxvYWRlci4gQXNzaWduZWQgc3luY2hyb25vdXNseSBzbyB0aGVcbiAgICAvLyBoYXJuZXNzIHdhaXRzIG9uIHRoZSBkZWNvZGUuIEl0IGJlYXRzIGZpbGxUZXh0LCB3aGljaCBkcmF3cyBhIGRpZmZlcmVudCB3b3JkbWFyayBwZXIgbWFjaGluZS5cbiAgICBpZiAodC5raW5kID09PSAnYmFrZWQnKSB7XG4gICAgICAvLyBVbmRlciBwbGFpbiBOb2RlICh0aGUgY29wbGFuYXIgY2hlY2ssIHRoZSBydW50aW1lIHByb2JlKSB0aGVyZSBpcyBubyBkb2N1bWVudCBmb3IgSW1hZ2VMb2FkZXI6XG4gICAgICAvLyBrZWVwIHRoZSB3aGl0ZSBmYWxsYmFjayByYXRoZXIgdGhhbiB0aHJvdywgZXhhY3RseSBhcyB0aGUgcmV0YWlsIGdsYXppbmcgZG9lcy5cbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGJha2VkID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKHQudXJpKTtcbiAgICAgIGNvbnN0IHNyZ2IgPSAoVEhSRUUgYXMgYW55KS5TUkdCQ29sb3JTcGFjZTtcbiAgICAgIGlmIChzcmdiKSBiYWtlZC5jb2xvclNwYWNlID0gc3JnYjtcbiAgICAgIGJha2VkLmFuaXNvdHJvcHkgPSA0O1xuICAgICAgbWF0Lm1hcCA9IGJha2VkOyBtYXQubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGxldCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgICBpZiAodC5raW5kID09PSAnbXVkJykgdGV4ID0gbXVkVGlsZSh0LnNpemUgPz8gNTEyLCB0LmJhc2UsIHQuc2VlZCA/PyAxLCB0LmNvdmVyYWdlID8/IDAuMzMpO1xuICAgIGlmICh0LmtpbmQgPT09ICdkdXN0JykgdGV4ID0gZHVzdFRpbGUodC5zaXplID8/IDUxMiwgdC5kdXN0LCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMwKTtcbiAgICBpZiAodC5raW5kID09PSAncGxhbmsnKSB0ZXggPSBwbGFua1RpbGUodC5zaXplID8/IDUxMiwgdC5ib2FyZHMgPz8gNiwgdC5zZWVkID8/IDUpO1xuICAgIGlmICh0LmtpbmQgPT09ICdydXN0JykgdGV4ID0gcnVzdFRpbGUodC5zaXplID8/IDUxMiwgdC5yYXRpbywgdC5zZWVkID8/IDcsIHQuZGVuc2l0eSA/PyA5MCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BhaW50JykgdGV4ID0gcGFpbnRUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAxNywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2NvcnJ1Z2F0aW9uJykgdGV4ID0gY29ycnVnYXRpb25UaWxlKHQuc2l6ZSA/PyA1MTIsIHQucGl0Y2ggPz8gMTIsIHQubG93ID8/IDAuNywgdC5zZWVkID8/IDMpO1xuICAgIGlmICh0LmtpbmQgPT09ICdncmltZScpIHRleCA9IGdyaW1lVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd6aW5jJykgdGV4ID0gemluY1RpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDE5LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnZnVyJykgdGV4ID0gZnVyVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdjaGFpbmxpbmsnKSB0ZXggPSBjaGFpbmxpbmtUaWxlKHQuc2l6ZSA/PyAyNTYsIHQud2lyZSA/PyAwLjA5LCB0LnNlZWQgPz8gNCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2JhbWJvbycpIHRleCA9IGJhbWJvb1RpbGUodC5zaXplID8/IDUxMiwgdC5zdHJpcHMgPz8gMTAsIHQuc2VlZCA/PyA2KTtcbiAgICBpZiAodC5raW5kID09PSAnc3RyaXBlcycpIHRleCA9IHN0cmlwZVRpbGUodC5zaXplID8/IDI1NiwgdC5iYW5kcyA/PyA4LCB0LmEsIHQuYiwgdC5zZWVkID8/IDksIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdwb3N0ZXInKSB0ZXggPSBwb3N0ZXJUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA4LCB0LmxpbmVzID8/IFtdKTtcbiAgICBpZiAodC5raW5kID09PSAncGViYmxlJykgdGV4ID0gcGViYmxlVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMjEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0cmVhZCcpIHRleCA9IHRyZWFkVGlsZSh0LnNpemUgPz8gMjU2LCB0LnNlZWQgPz8gMjMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0eXJlJykgdGV4ID0gdHlyZVRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDI5LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnY3VsbScpIHRleCA9IGN1bG1UaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAzMSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3Nhd24nKSB0ZXggPSBzYXduVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNDMsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICd0aGF0Y2gnKSB0ZXggPSB0aGF0Y2hUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAzNywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3RhcnAnKSB0ZXggPSB0YXJwVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gNDEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdnYWx2JykgdGV4ID0gZ2FsdlRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDQ3LCB0KTtcbiAgICBpZiAodC5raW5kID09PSAnc3BsaXQnKSB0ZXggPSBzcGxpdFRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDUzKTtcbiAgICBpZiAodC5raW5kID09PSAncm9wZScpIHRleCA9IHJvcGVUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyA1OSk7XG4gICAgYmluZFRpbGUobWF0LCB0ZXgsIHQuYnVtcCA/PyAwKTtcbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJlZENoaW5lc2VIYW5naW5nTGFudGVybk1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogdGhlIHJvb3QsIHBsdXMgT05FIFBFUiBXSEVFTCAoYW5kIGFueSBvdGhlciBtZWNoYW5pc20gQ09ORklHLnBpdm90cyBuYW1lcyAtLSBhXG4gICAgLy8gc3RlZXJpbmcgaGVhZCwgYSBjYW5vcHkgc3RheSkuIEEgdmVoaWNsZSdzIHdoZWVscyBnZW51aW5lbHkgdHVybiwgc28gZWFjaCBvbmUgaXMgYSBwcm9taXNlXG4gICAgLy8ga2VwdDogdGhlIHBpdm90IHNpdHMgYXQgdGhlIGh1YiwgaXRzIGF4aXMgaXMgdGhlIGF4bGUsIGFuZCBgaW5zdGFuY2VgIG5hbWVzIHdoaWNoIGluc3RhbmNlXG4gICAgLy8gb2YgdGhlIHdoZWVsIEluc3RhbmNlZE1lc2ggaXQgZHJpdmVzLiBOb3RoaW5nIGVsc2Ugb24gdGhlIHByb3AgbW92ZXMgLS0gdGhlIGRvb3JzIGFyZSBwYXJ0XG4gICAgLy8gb2YgdGhlIGJvZHkgc2hlbGwgLS0gc28gbm90aGluZyBlbHNlIGdldHMgYW4gYXhpcy5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcbiAgICBmb3IgKGNvbnN0IHB2IG9mIChDT05GSUcucGl2b3RzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgbyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgICAgby5uYW1lID0gcHYubmFtZTtcbiAgICAgIG8ucG9zaXRpb24uc2V0KHB2LnBvc2l0aW9uWzBdLCBwdi5wb3NpdGlvblsxXSwgcHYucG9zaXRpb25bMl0pO1xuICAgICAgby51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgICBhbmltYXRpb25Sb2xlOiAnY2hpbGQnLFxuICAgICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogcHYucG9zaXRpb24sIGF4aXM6IHB2LmF4aXMsIG5hbWU6IHB2Lm5hbWUsXG4gICAgICAgICAgICAgICAgIGNvbXBvbmVudDogcHYuY29tcG9uZW50LCBpbnN0YW5jZTogcHYuaW5zdGFuY2UgPz8gbnVsbCwgbm90ZXM6IHB2Lm5vdGUgPz8gJycgfSxcbiAgICAgIH07XG4gICAgICByb290LmFkZChvKTtcbiAgICAgIHBpdm90cy5wdXNoKG8pO1xuICAgIH1cblxuICAgIC8vIFNvY2tldHM6IE5PTkUgdW5sZXNzIENPTkZJRy5zb2NrZXRzIG5hbWVzIG9uZS4gTm90aGluZyBhdHRhY2hlcyB0byBhIHZlaGljbGUgaW4gdGhpcyBraXRcbiAgICAvLyBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qKlxuICogVGhlIG9uZS1hcmd1bWVudCBlbnRyeSBwb2ludDogdmliZTNkJ3MgY29udHJhY3QsIGFuZCBpbWcydGhyZWVqcydzIG93bi5cbiAqXG4gKiBgY3JlYXRlT2JqZWN0TW9kZWxgIGFib3ZlIGtlZXBzIHRoYWlraXQncyBoaXN0b3JpY2FsIChzcGVjLCBvcHRpb25zKSBzaGFwZSBzb1xuICogdGhlIGhhcm5lc3MsIHRoZSBsZXZlbCBlZGl0b3IgYW5kIHRoZSBOb2RlLXNpZGUgZ2F0ZXMgY2Fycnkgb24gdW5jaGFuZ2VkLlxuICogYHNwZWNgIGhhcyBuZXZlciBiZWVuIHBhc3NlZCBieSBhbnkgY2FsbGVyIC0tIGl0IGlzIGluc3BlY3Rpb24gZGF0YSB0aGF0IGlzXG4gKiBhbHJlYWR5IGJha2VkIGludG8gdGhpcyBtb2R1bGUgLS0gc28gdGhpcyBpcyB0aGUgaG9uZXN0IHNpZ25hdHVyZSwgYW5kIGl0IGlzXG4gKiB3aGF0IGEgdmliZTNkIGNvbnN1bWVyIGluc3RhbGxzIGFuZCBjYWxscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgcmV0dXJuIGNyZWF0ZU9iamVjdE1vZGVsKHVuZGVmaW5lZCwgb3B0aW9ucyk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFzQ3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLGNBQWM7QUFBQSxNQUNaO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxZQUFZO0FBQUEsVUFDVixTQUFTO0FBQUEsVUFDVCxlQUFlO0FBQUEsWUFDYjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsZUFBZTtBQUFBLFlBQ2I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLFFBQVE7QUFBQSxZQUNSLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxZQUNQLFVBQVU7QUFBQSxjQUNSO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxRQUFRO0FBQUEsVUFDTjtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE9BQU87QUFBQSxZQUNQLFFBQVE7QUFBQSxVQUNWO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLGNBQ0o7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE9BQU87QUFBQSxZQUNQLFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE9BQU87QUFBQSxjQUNMO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtB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QyxJQUNoRSxFQUFFLGFBQWEsU0FDYixDQUFDLE1BQU0sTUFBTSxFQUFFLFVBQVUsUUFBUSxHQUFHLE1BQU0sTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUMzRCxDQUFDLE1BQU0sSUFBSTtBQUVqQixRQUFNLFFBQVEsQ0FBQyxLQUFtQixRQUFrQjtBQUNsRCxVQUFNLE1BQWdCLENBQUMsR0FBRyxLQUFlLENBQUM7QUFDMUMsZUFBVyxDQUFDLElBQUksRUFBRSxLQUFLLEtBQUs7QUFDMUIsWUFBTSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDckYsWUFBTUMsTUFBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUdDLE1BQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUMzRyxZQUFNLElBQUksQ0FBQ0QsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxJQUFJRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLEdBQUdELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsSUFBSUQsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxHQUFHRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLElBQUlELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsQ0FBQztBQUN0RyxZQUFNLE1BQU0sRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUNuSCxpQkFBVyxLQUFLLEtBQUs7QUFBRSxZQUFJLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFBRyxXQUFHLEtBQUssR0FBRyxDQUFDO0FBQUEsTUFBRztBQUFBLElBQ3BFO0FBQ0EsVUFBTSxJQUFJLElBQVUscUJBQWU7QUFDbkMsTUFBRSxhQUFhLFlBQVksSUFBVSw2QkFBdUIsS0FBSyxDQUFDLENBQUM7QUFDbkUsTUFBRSxhQUFhLE1BQU0sSUFBVSw2QkFBdUIsSUFBSSxDQUFDLENBQUM7QUFDNUQsTUFBRSxxQkFBcUI7QUFBRyxXQUFPO0FBQUEsRUFDbkM7QUFDQSxRQUFNLE1BQU0sQ0FBQyxHQUFXLE1BQWMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDM0QsUUFBTSxLQUFtQixDQUFDLEdBQUcsS0FBbUIsQ0FBQyxHQUFHLEtBQW1CLENBQUMsR0FBRyxLQUFtQixDQUFDO0FBQy9GLFdBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQUUsT0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUFHLE9BQUcsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFBQSxFQUFHO0FBQzNHLFdBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQUUsT0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUFHLE9BQUcsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7QUFBQSxFQUFHO0FBQzNHLFFBQU0sUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUl2RyxRQUFNLFNBQVMsRUFBRSxVQUFVLEVBQUU7QUFDN0IsUUFBTSxLQUFLLEdBQUksV0FBVyxTQUFZLE1BQU0sSUFBSSxDQUFDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQU07QUFDakYsU0FBTyxVQUFVLEtBQUs7QUFDeEI7QUFpQkEsU0FBUyxVQUFVLE1BQWMsTUFBYyxHQUFvQztBQUNqRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU1DLE9BQU0sQ0FBQyxNQUFnQixHQUFHLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRyxVQUFNLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxPQUFPLEVBQUUsUUFBUSxNQUFNLFFBQVEsRUFBRSxTQUFTO0FBQzVFLFVBQU0sTUFBTSxFQUFFLE9BQU87QUFFckIsVUFBTSxPQUFPLENBQUMsU0FBMkM7QUFDdkQsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsTUFBSyxJQUFJLEVBQUU7QUFBQSxJQUN2RTtBQUlBLFVBQU0sT0FBTyxDQUFDLEdBQWEsR0FBVyxHQUFXLEdBQVcsR0FBVyxLQUFLLEdBQUcsT0FBTyxVQUFVO0FBQzlGLFlBQU0sSUFBSSxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNuRCxRQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFFBQUUsYUFBYSxPQUFPLE9BQU8sTUFBTSxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksR0FBRztBQUN0SCxRQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxLQUFLO0FBQ3JDLFVBQUksWUFBWTtBQUNoQixXQUFLLENBQUMsSUFBSSxPQUFPO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRyxDQUFDO0FBQUEsSUFDOUc7QUFFQSxRQUFJLFlBQVksT0FBT0EsS0FBSSxJQUFJLENBQUM7QUFBSyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUc1RCxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsU0FBUyxLQUFLLEtBQUs7QUFDeEMsWUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLE9BQU87QUFDL0IsV0FBSyxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEtBQUssT0FBTyxJQUFJLElBQUksUUFBUyxFQUFFLGNBQWMsSUFBSSxPQUFPLElBQUksSUFBSSxNQUFNLE1BQU0sSUFBSSxJQUFJLEdBQUc7QUFBQSxJQUN2SDtBQUlBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxnQkFBZ0IsS0FBSyxLQUFLO0FBQy9DLFlBQU0sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssS0FBSyxPQUFPLElBQUksSUFBSSxTQUFTLEVBQUUsZ0JBQWdCO0FBTTFGLFdBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLGFBQWEsT0FBUSxJQUFJLEtBQUssRUFBRSxnQkFBZ0IsT0FBTyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsY0FBYyxJQUFJO0FBQ3hILGVBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxvQkFBb0IsS0FBSyxLQUFLO0FBQ25ELGNBQU0sSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUk7QUFDdEQsY0FBTSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxNQUFNLElBQUksSUFBSTtBQUM1RSxZQUFJLFlBQVksUUFBUUEsS0FBSSxFQUFFLFdBQVcsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLGNBQWMsUUFBUSxJQUFJLEtBQUssRUFBRSxpQkFBaUIsSUFBSTtBQUNqSCxhQUFLLENBQUMsSUFBSSxPQUFPO0FBQUUsY0FBSSxVQUFVO0FBQUcsY0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxLQUFLO0FBQUEsUUFBRyxDQUFDO0FBQUEsTUFDL0Y7QUFFQSxVQUFJLElBQUksS0FBSyxFQUFFLGFBQWEsT0FBTztBQUNqQyxjQUFNLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxNQUFPLE1BQU0sS0FBSyxNQUFPLElBQUksSUFBSTtBQUMzRCxjQUFNLElBQUksSUFBSSxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHO0FBQ3JELGNBQU0sTUFBTSxFQUFFLFlBQVksUUFBUSxJQUFJLElBQUk7QUFDMUMsVUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUc7QUFBRyxZQUFJLEVBQUUsVUFBVyxHQUFFLGFBQWEsTUFBTSxRQUFRQSxLQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRztBQUFHLFVBQUUsYUFBYSxHQUFHLFFBQVFBLEtBQUksR0FBRyxDQUFDLEtBQUs7QUFDdkosWUFBSSxZQUFZO0FBQ2hCLGFBQUssQ0FBQyxPQUFPLElBQUksU0FBUyxLQUFLLE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQUEsTUFDckU7QUFBQSxJQUNGO0FBR0EsVUFBTSxTQUFTLEVBQUUsY0FBYyxHQUFHLFNBQVMsRUFBRSxjQUFjO0FBQzNELGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxnQkFBZ0IsSUFBSSxLQUFLO0FBQzlDLFlBQU0sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssS0FBSyxPQUFPLElBQUksSUFBSSxPQUFRO0FBQ3ZFLFdBQUssT0FBTyxJQUFJLElBQUksSUFBSSxTQUFTLElBQUksSUFBSSxLQUFNLE1BQU0sSUFBSSxJQUFJLEdBQUc7QUFDaEUsZUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsY0FBTSxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLO0FBQzNELGNBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSTtBQUNoRixZQUFJLFlBQVksUUFBUUEsS0FBSSxLQUFLLENBQUMsSUFBSSxNQUFNLElBQUksSUFBSSxHQUFHO0FBQ3ZELGFBQUssQ0FBQyxJQUFJLE9BQU87QUFBRSxjQUFJLFVBQVU7QUFBRyxjQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLEtBQUs7QUFBQSxRQUFHLENBQUM7QUFBQSxNQUMvRjtBQUFBLElBQ0Y7QUFLQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsY0FBYyxJQUFJLEtBQUs7QUFDNUMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFLGVBQWUsUUFBUSxNQUFNLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDN0YsWUFBTSxLQUFLLEVBQUUsZUFBZSxPQUFRLElBQUksSUFBSTtBQUM1QyxZQUFNLElBQUksSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUMvQyxRQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFFBQUUsYUFBYSxFQUFFLFlBQVksT0FBTyxNQUFNLFFBQVFBLEtBQUksSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLElBQUksSUFBSSxHQUFHLEdBQUc7QUFDeEksUUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxJQUFJLENBQUMsS0FBSztBQUN4QyxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHO0FBQUEsSUFDN0Q7QUFLQSxlQUFXLE1BQU8sRUFBRSxVQUFVLENBQUMsR0FBYTtBQUMxQyxZQUFNLEtBQUssS0FBSyxJQUFJLEdBQUcsS0FBSyxLQUFLLEtBQUssSUFBSSxHQUFHLEtBQUssT0FBTyxHQUFHLFFBQVE7QUFDcEUsVUFBSSxZQUFZLFFBQVFBLEtBQUksSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUc7QUFBSyxVQUFJLFNBQVMsR0FBRyxJQUFJLEdBQUcsS0FBSyxFQUFFO0FBQ3ZGLGVBQVMsSUFBSSxHQUFHLEtBQUssR0FBRyxVQUFVLElBQUksS0FBSztBQUN6QyxjQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSTtBQUNuRSxZQUFJLFlBQVksUUFBUUEsS0FBSSxJQUFJLElBQUksTUFBTSxNQUFNLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxJQUFJLEdBQUc7QUFDMUUsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLEtBQUs7QUFBQSxRQUFHO0FBQUEsTUFDckc7QUFBQSxJQUNGO0FBQ0EsZUFBVyxNQUFPLEVBQUUsZUFBZSxDQUFDLEdBQWE7QUFDL0MsWUFBTSxLQUFLLEtBQUssSUFBSSxHQUFHO0FBQ3ZCLGVBQVMsSUFBSSxHQUFHLEtBQUssR0FBRyxTQUFTLEtBQUssS0FBSztBQUN6QyxjQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLEdBQUcsU0FBUyxRQUFRLE1BQU0sTUFBTSxHQUFHLE9BQU8sUUFBUSxJQUFJLEtBQUssR0FBRyxVQUFVO0FBQ2xILGNBQU0sS0FBSyxHQUFHLFNBQVMsUUFBUSxJQUFJLElBQUk7QUFDdkMsY0FBTSxJQUFJLElBQUkscUJBQXFCLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRztBQUNyRCxVQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFVBQUUsYUFBYSxFQUFFLFlBQVksT0FBTyxLQUFLLFFBQVFBLEtBQUksSUFBSSxDQUFDLElBQUksRUFBRSxZQUFZLElBQUksSUFBSSxHQUFHLEdBQUc7QUFDdkksVUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxJQUFJLENBQUMsS0FBSztBQUN4QyxZQUFJLFlBQVk7QUFDaEIsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsSUFBSSxJQUFJLEtBQUssR0FBRyxHQUFHLEdBQUc7QUFBQSxNQUNsRTtBQUFBLElBQ0Y7QUFDQSxRQUFJLEVBQUUsU0FBUztBQUNiLFlBQU0sS0FBSyxFQUFFLFNBQVMsS0FBSyxLQUFLLEdBQUcsUUFBUTtBQUMzQyxVQUFJLE9BQU8sUUFBUSxFQUFFO0FBQWlCLFVBQUksWUFBWTtBQUFVLFVBQUksZUFBZTtBQUNuRixVQUFJLFlBQVksUUFBUUEsS0FBSSxHQUFHLFFBQVEsS0FBSyxDQUFDLElBQUksR0FBRyxTQUFTLElBQUk7QUFDakUsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsR0FBRyxNQUFNLEtBQUssR0FBRyxLQUFLLE9BQU8sSUFBSSxLQUFLLEtBQUssR0FBRyxLQUFLLEtBQUs7QUFBQSxJQUNwRztBQUNBLFFBQUksRUFBRSxZQUFZO0FBQ2hCLFlBQU0sSUFBSSxFQUFFLFlBQVksSUFBSSxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssRUFBRSxnQkFBZ0IsTUFBTTtBQUNoRyxRQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFFBQUUsYUFBYSxNQUFNLFFBQVFBLEtBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLEdBQUc7QUFDaEcsUUFBRSxhQUFhLEdBQUcsUUFBUUEsS0FBSSxHQUFHLENBQUMsS0FBSztBQUN2QyxVQUFJLFlBQVk7QUFBRyxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQzVDO0FBR0EsUUFBSSwyQkFBMkI7QUFDL0IsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFNBQVMsT0FBTyxLQUFLO0FBQzFDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQzlFLFVBQUksWUFBWSxvQkFBb0IsQ0FBQztBQUNyQyxVQUFJLFVBQVU7QUFBRyxVQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFVBQUksS0FBSztBQUFBLElBQzlEO0FBQ0EsUUFBSSwyQkFBMkI7QUFBQSxFQUNqQyxDQUFDO0FBQ0g7QUFnQkEsU0FBUyxVQUFVLEtBQWlCLEdBQVcsTUFBTSxJQUFJLEtBQWMsTUFBTSxNQUE0QjtBQUN2RyxRQUFNLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFVLGNBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUc1RCxXQUFTLElBQUksRUFBRSxTQUFTLEdBQUcsSUFBSSxHQUFHLElBQUssS0FBSSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFNLEdBQUUsT0FBTyxHQUFHLENBQUM7QUFDMUYsTUFBSSxFQUFFLFNBQVMsRUFBRyxRQUFPLElBQVUscUJBQWU7QUFDbEQsUUFBTSxJQUFJLEVBQUU7QUFDWixRQUFNLFNBQTBCLENBQUM7QUFDakMsV0FBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSyxRQUFPLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztBQUVsRixRQUFNLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxNQUFNLE1BQU0sSUFBSSxPQUFPLENBQUMsRUFBRSxNQUFNLElBQ2hELE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUNsQyxPQUFPLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDO0FBRXBELE1BQUksSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sSUFBVSxjQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBVSxjQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ3ZGLElBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVTtBQUMxRCxRQUFNLE1BQWdCLENBQUMsR0FBRyxNQUFnQixDQUFDO0FBQzNDLFdBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFFBQUksSUFBSSxHQUFHO0FBRVQsWUFBTSxJQUFJLElBQVUsaUJBQVcsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNsRSxRQUFFLGdCQUFnQixDQUFDO0FBQ25CLFFBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVTtBQUFBLElBQzVEO0FBQ0EsVUFBTSxJQUFJLElBQVUsY0FBUSxFQUFFLGFBQWEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVU7QUFHOUQsVUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7QUFDNUUsYUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsWUFBTSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUk7QUFDN0IsWUFBTSxJQUFJLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxLQUFLLElBQUksRUFBRTtBQUN2QyxVQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxLQUFLLENBQUM7QUFBQSxJQUMzSDtBQUFBLEVBQ0Y7QUFDQSxXQUFTLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxJQUFLLFVBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLO0FBTzVELFVBQU0sSUFBSSxJQUFJLE1BQU0sR0FBRyxLQUFLLElBQUksS0FBSyxNQUFNLEdBQUcsTUFBTSxJQUFJLEtBQUssT0FBTyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUs7QUFDMUcsUUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDN0I7QUFDQSxNQUFJLEtBQUs7QUFPUCxlQUFXLENBQUMsTUFBTSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBeUM7QUFDaEgsWUFBTSxPQUFPLElBQUksU0FBUztBQUMxQixlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQUFFLGNBQU0sS0FBSyxPQUFPLE1BQU0sS0FBSztBQUFHLFlBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7QUFBQSxNQUFHO0FBQzFHLFlBQU0sS0FBSyxJQUFJLFNBQVM7QUFBRyxVQUFJLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUIsY0FBTSxJQUFJLE9BQU8sR0FBRyxJQUFJLFFBQVEsSUFBSSxLQUFLO0FBQ3pDLFlBQUksS0FBTSxLQUFJLEtBQUssSUFBSSxHQUFHLENBQUM7QUFBQSxZQUFRLEtBQUksS0FBSyxJQUFJLEdBQUcsQ0FBQztBQUFBLE1BQ3REO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxRQUFNLElBQUksSUFBVSxxQkFBZTtBQUNuQyxJQUFFLGFBQWEsWUFBWSxJQUFVLHNCQUFnQixJQUFJLGFBQWEsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM5RSxJQUFFLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLGFBQWMsSUFBSSxTQUFTLElBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6RixJQUFFLFNBQVMsR0FBRztBQUNkLElBQUUscUJBQXFCO0FBQ3ZCLFNBQU8sUUFBUSxTQUFZLElBQUksUUFBUSxHQUFHLEdBQUc7QUFDL0M7QUFXQSxTQUFTLGFBQWEsS0FBMkIsR0FBOEI7QUFDN0UsUUFBTSxJQUFJLElBQUksYUFBYSxVQUFVLEdBQUcsTUFBTSxJQUFJLGFBQWEsUUFBUTtBQUN2RSxRQUFNLEtBQUssSUFBSSxhQUFhLEVBQUUsUUFBUSxDQUFDO0FBQ3ZDLFFBQU0sTUFBTSxJQUFJLGFBQWEsT0FBTztBQUNwQyxRQUFNLE9BQU8sRUFBRSxTQUFTLFNBQVksSUFBVSxZQUFNLEVBQUUsSUFBSSxJQUFJO0FBQzlELFFBQU0sUUFBUSxFQUFFLFNBQVM7QUFDekIsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxVQUFNLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBSWpDLFVBQU0sSUFBSTtBQUNWLFVBQU0sUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLFNBQVMsS0FBSyxFQUFFLEtBQUssS0FBSyxLQUFLLEVBQUUsS0FBSyxLQUFLLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxLQUFLLEtBQUssRUFBRSxLQUFLO0FBQ2hILFFBQUksT0FBTztBQUNULFNBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDbkMsU0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3ZDLFVBQUksUUFBUSxJQUFLLEtBQUksT0FBTyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQUEsSUFDdkQsT0FBTztBQUFFLFNBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7QUFBRyxTQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7QUFBQSxJQUFHO0FBQUEsRUFDM0Q7QUFDQSxNQUFJLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLENBQUMsQ0FBQztBQUN2RCxNQUFJLElBQUssS0FBSSxjQUFjO0FBQzNCLFNBQU87QUFDVDtBQVFBLFNBQVMsUUFBUSxLQUEyQixPQUFlLE1BQU0sT0FBNkI7QUFDNUYsUUFBTSxJQUFJLElBQUksYUFBYSxVQUFVO0FBQ3JDLFFBQU0sS0FBSyxJQUFJLGFBQWEsRUFBRSxRQUFRLENBQUM7QUFHdkMsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxVQUFNLElBQUksTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFDckUsT0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJO0FBQU8sT0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUk7QUFBQSxFQUM3QztBQUNBLE1BQUksYUFBYSxNQUFNLElBQVUsc0JBQWdCLElBQUksQ0FBQyxDQUFDO0FBQ3ZELFNBQU87QUFDVDtBQUdBLFNBQVMsTUFBTSxJQUFjLEdBQVcsR0FBaUM7QUFDdkUsUUFBTSxJQUFJLElBQVUsbUJBQWEsSUFBSSxLQUFLLE9BQU8sR0FBRyxHQUFHLEdBQUcsS0FBSztBQUMvRCxJQUFFLFFBQVEsS0FBSyxLQUFLLENBQUM7QUFDckIsSUFBRSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUN2QyxJQUFFLHFCQUFxQjtBQUN2QixTQUFPO0FBQ1Q7QUFZQSxTQUFTLFVBQVUsTUFBYyxNQUFjLEdBQW9DO0FBQ2pGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTUEsT0FBTSxDQUFDLE1BQWdCLEdBQUcsS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFHLFVBQU0sT0FBTyxFQUFFLFFBQVEsQ0FBQyxNQUFNLE1BQU0sSUFBSSxHQUFHLFFBQVEsRUFBRSxhQUFhLEtBQUssTUFBTSxFQUFFLFlBQVk7QUFPM0YsVUFBTSxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQy9CLFFBQUksWUFBWSxPQUFPQSxLQUFJLElBQUksQ0FBQztBQUFLLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzVELFFBQUksMkJBQTJCO0FBRS9CLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxXQUFXLEtBQUssS0FBSztBQUMxQyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLE9BQU8sTUFBTSxLQUFLLE9BQU8sSUFBSSxJQUFJLE1BQU0sSUFBSSxPQUFPLElBQUksSUFBSTtBQUNuRyxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUNoRCxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksSUFBSSxDQUFDLEtBQUs7QUFDeEYsVUFBSSxZQUFZO0FBQUksVUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFBRyxVQUFJLFNBQVMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQUEsSUFDL0U7QUFLQSxRQUFJLEVBQUUsVUFBVTtBQUNkLFVBQUksWUFBWSxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLEtBQUs7QUFBSyxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ3hFLE9BQU87QUFDTCxZQUFNLE9BQU8sSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsS0FBSyxJQUFJLElBQUk7QUFDNUQsV0FBSyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUc7QUFBRyxXQUFLLGFBQWEsS0FBSyxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLFFBQVEsSUFBSSxHQUFHO0FBQUcsV0FBSyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxJQUFJLENBQUMsS0FBSztBQUM5SixVQUFJLFlBQVk7QUFBTSxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQy9DO0FBRUEsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFlBQVksS0FBSyxLQUFLO0FBQzNDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBQ3BHLFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksSUFBSSxDQUFDLEtBQUs7QUFDeEYsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3JHO0FBSUEsUUFBSSxFQUFFLE1BQU07QUFDVixZQUFNLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBTSxNQUFNLEdBQUk7QUFDdEMsZUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE1BQU0sS0FBSztBQUMvQixjQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE1BQU8sSUFBSSxJQUFJO0FBQzdDLGNBQU0sSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLE9BQVEsSUFBSSxJQUFJLE9BQVEsSUFBSSxNQUFPLElBQUksSUFBSTtBQUN6RixjQUFNLEtBQUssSUFBSSxxQkFBcUIsSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksR0FBRyxDQUFDO0FBQzlELFdBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksR0FBRyxDQUFDLEtBQUs7QUFDeEMsV0FBRyxhQUFhLEtBQUssUUFBUUEsS0FBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFDN0MsV0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxHQUFHLENBQUMsS0FBSztBQUN4QyxZQUFJLFlBQVk7QUFDaEIsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7QUFBQSxNQUMzRTtBQUFBLElBQ0Y7QUFLQSxRQUFJLEVBQUUsUUFBUTtBQUNaLFVBQUksMkJBQTJCO0FBQy9CLGVBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsY0FBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sSUFBSSxLQUFLLEVBQUUsY0FBYztBQUM3RSxjQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsV0FBRyxhQUFhLEdBQUcsb0JBQW9CLEVBQUUsY0FBYyxJQUFJLEdBQUc7QUFBRyxXQUFHLGFBQWEsR0FBRyxxQkFBcUI7QUFDekcsWUFBSSxZQUFZO0FBQ2hCLG1CQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsY0FBSSxVQUFVO0FBQUcsY0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxLQUFLO0FBQUEsUUFBRztBQUFBLE1BQ3ZJO0FBQ0EsVUFBSSwyQkFBMkI7QUFBQSxJQUNqQztBQVNBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxVQUFVLElBQUksS0FBSztBQUN4QyxZQUFNLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxNQUFNLElBQUk7QUFDdEMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUUsVUFBVSxTQUFTLE1BQU0sSUFBSSxJQUFJLE1BQU0sS0FBSyxFQUFFLGNBQWMsU0FBUyxNQUFNLElBQUk7QUFDOUgsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFNBQUcsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsS0FBSztBQUNsRixVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDdkk7QUFLQSxRQUFJLEVBQUUsUUFBUTtBQUNaLFlBQU0sSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLE1BQU0sSUFBSSxHQUFHLE9BQU8sRUFBRSxhQUFhLENBQUMsS0FBTSxHQUFJO0FBQzFFLGVBQVMsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLEtBQUs7QUFDakMsY0FBTSxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssS0FBSyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUM7QUFDeEUsY0FBTSxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDN0QsY0FBTSxLQUFLLEVBQUUsY0FBYyxTQUFTLE1BQU0sSUFBSTtBQUM5QyxtQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQzNCLGNBQUksS0FBSztBQUFHLGNBQUksVUFBVSxLQUFLLElBQUksRUFBRTtBQUFHLGNBQUksUUFBUSxJQUFJLElBQUksT0FBTyxJQUFJO0FBQUcsY0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQzVGLGdCQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsYUFBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxhQUFHLGFBQWEsTUFBTSxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHO0FBQUcsYUFBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsS0FBSztBQUN4SSxjQUFJLFlBQVk7QUFBSSxjQUFJLFVBQVU7QUFBRyxjQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLGNBQUksS0FBSztBQUNoRixjQUFJLFFBQVE7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFJQSxRQUFJLEVBQUUsT0FBTztBQUNYLFlBQU0sSUFBSSxFQUFFLFFBQVEsQ0FBQyxNQUFNLE1BQU0sSUFBSTtBQUNyQyxlQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsT0FBTyxLQUFLO0FBQ2hDLGNBQU0sSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLFVBQVUsUUFBUSxJQUFJLEVBQUUsTUFBTSxJQUFJO0FBQy9ELGNBQU0sTUFBTSxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sSUFBSSxJQUFLLENBQUM7QUFDN0MsWUFBSSxZQUFZLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxhQUFhLEdBQUc7QUFBSyxZQUFJLFNBQVMsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUNsRixZQUFJLFlBQVksUUFBUUEsS0FBSSxDQUFDLENBQUMsS0FBSyxFQUFFLGFBQWEsT0FBTyxHQUFHO0FBQUssWUFBSSxTQUFTLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztBQUFBLE1BQ2xHO0FBQUEsSUFDRjtBQUlBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxRQUFRLElBQUksS0FBSztBQUN0QyxZQUFNLElBQUksRUFBRSxPQUFPLENBQUMsTUFBTSxLQUFNLElBQUk7QUFDcEMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLFFBQVEsUUFBUSxNQUFNLElBQUksSUFBSTtBQUN6RSxZQUFNLElBQUksT0FBTyxJQUFJLElBQUk7QUFDekIsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDeEQsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsS0FBSyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHO0FBQUcsU0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsS0FBSztBQUN2SSxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFBQSxJQUN6RztBQUVBLFFBQUksRUFBRSxNQUFNO0FBQ1YsWUFBTSxJQUFJLEVBQUUsTUFBTSxPQUFPLEVBQUUsWUFBWTtBQUd2QyxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsS0FBSyxJQUFJLE9BQU8sSUFBSTtBQUNqRSxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxJQUFJLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxLQUFLO0FBQ25HLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzNDLGVBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxnQkFBZ0IsS0FBSyxLQUFLO0FBQy9DLGNBQU0sS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxNQUFNLEtBQUssS0FBSyxRQUFRLElBQUksSUFBSTtBQUUxRixjQUFNLEtBQUssSUFBSSxxQkFBcUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFDekQsV0FBRyxhQUFhLEdBQUcsUUFBUUEsS0FBSSxDQUFDLENBQUMsT0FBTztBQUFHLFdBQUcsYUFBYSxLQUFLLFFBQVFBLEtBQUksQ0FBQyxDQUFDLFFBQVE7QUFBRyxXQUFHLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxLQUFLO0FBQy9ILFlBQUksWUFBWTtBQUNoQixtQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsY0FBSSxVQUFVO0FBQUcsY0FBSSxRQUFRLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLGNBQUksS0FBSztBQUFBLFFBQUc7QUFDdkgsaUJBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzNCLGdCQUFNLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxHQUFHLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJO0FBQ3RELGdCQUFNLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLElBQUk7QUFDaEYsY0FBSSxZQUFZLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLElBQUksR0FBRztBQUNwRCxxQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsZ0JBQUksVUFBVTtBQUFHLGdCQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsZ0JBQUksS0FBSztBQUFBLFVBQUc7QUFBQSxRQUNyRztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBSUEsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFNBQVMsT0FBTyxLQUFLO0FBQzFDLFlBQU0sS0FBSyxFQUFFLFdBQVc7QUFBSyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSyxNQUFNLElBQUksS0FBSyxNQUFNLEdBQUc7QUFDdkcsVUFBSSxZQUFZLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxjQUFjLElBQUk7QUFBSyxVQUFJLFNBQVMsR0FBRyxHQUFHLEtBQUssR0FBRztBQUFBLElBQzdGO0FBQ0EsUUFBSSwyQkFBMkI7QUFBQSxFQUNqQyxDQUFDO0FBQ0g7QUFLQSxTQUFTLGNBQWMsTUFBYyxNQUFjLE1BQTBDO0FBQzNGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsUUFBSSxVQUFVLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDeEIsUUFBSSxZQUFZLEtBQUssSUFBSSxLQUFLLE9BQU8sQ0FBQztBQUN0QyxRQUFJLFVBQVU7QUFDZCxVQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFDckMsUUFBSSxjQUFjLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQztBQUU1QyxRQUFJLFVBQVU7QUFDZCxRQUFJLE9BQU8sR0FBRyxDQUFDO0FBQUcsUUFBSSxPQUFPLEdBQUcsQ0FBQztBQUNqQyxRQUFJLE9BQU8sR0FBRyxDQUFDO0FBQUcsUUFBSSxPQUFPLEdBQUcsQ0FBQztBQUNqQyxRQUFJLE9BQU87QUFFWCxRQUFJLFlBQVksT0FBTyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDakQsZUFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHO0FBQ3JFLFVBQUksVUFBVTtBQUFHLFVBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxZQUFZLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFVBQUksS0FBSztBQUFBLElBQ2hGO0FBQUEsRUFDRixDQUFDO0FBQ0g7QUFJQSxTQUFTLFdBQVcsTUFBYyxRQUFnQixNQUEwQztBQUMxRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFFBQUksWUFBWTtBQUFXLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2xELFVBQU0sS0FBSyxJQUFJO0FBQ2YsYUFBUyxJQUFJLEdBQUcsSUFBSSxRQUFRLEtBQUs7QUFDL0IsWUFBTSxPQUFPLE1BQU8sSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLE1BQU0sTUFBTSxJQUFJO0FBQzFELFVBQUksWUFBWSxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUM7QUFBSyxVQUFJLFNBQVMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQzVFLFVBQUksWUFBWTtBQUFzQixVQUFJLFNBQVMsSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFLLEdBQUcsQ0FBQztBQUV2RixVQUFJLFlBQVk7QUFBMEIsVUFBSSxTQUFTLElBQUksS0FBSyxLQUFLLE1BQU0sR0FBRyxLQUFLLE1BQU0sQ0FBQztBQUUxRixZQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUM7QUFDbEMsZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFBRSxjQUFNLElBQUksSUFBSSxJQUFJO0FBQUcsWUFBSSxZQUFZO0FBQXVCLFlBQUksU0FBUyxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSyxDQUFDO0FBQUEsTUFBRztBQUUvSSxlQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUFFLGNBQU0sSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJO0FBQUksWUFBSSxZQUFZLGlCQUFpQixPQUFPLElBQUksSUFBSSxHQUFHO0FBQUssWUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxNQUFHO0FBQUEsSUFDako7QUFFQSxhQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQUFFLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSTtBQUFHLFVBQUksWUFBWTtBQUF1QixVQUFJLFNBQVMsR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQztBQUFBLElBQUc7QUFBQSxFQUMvSixDQUFDO0FBQ0g7QUFLQSxTQUFTLFdBQVcsTUFBYyxNQUFjLE9BQTZDO0FBQzNGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsUUFBSSxVQUFVLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFFeEIsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsWUFBTSxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksTUFBTyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDM0gsVUFBSSxZQUFZLFFBQVEsTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUUsQ0FBQyxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3BILFVBQUksVUFBVTtBQUFHLFVBQUksT0FBTyxHQUFHLENBQUM7QUFDaEMsWUFBTSxJQUFJO0FBQ1YsZUFBUyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUssS0FBSSxPQUFPLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksT0FBTyxJQUFJLElBQUk7QUFDbkYsZUFBUyxJQUFJLEdBQUcsS0FBSyxHQUFHLElBQUssS0FBSSxPQUFPLElBQUksS0FBSyxJQUFJLElBQUksT0FBTyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQztBQUN2RixlQUFTLElBQUksSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFLLEtBQUksT0FBTyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLElBQUksT0FBTyxJQUFJLElBQUk7QUFDM0YsZUFBUyxJQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSyxLQUFJLE9BQU8sS0FBSyxJQUFJLElBQUksT0FBTyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQztBQUN2RixVQUFJLFVBQVU7QUFBRyxVQUFJLEtBQUs7QUFDMUIsVUFBSSxZQUFZO0FBQ2hCLGVBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFLLEtBQUksU0FBUyxJQUFJLElBQUksS0FBSyxJQUFJLEtBQUssTUFBTSxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSyxDQUFDO0FBQUEsSUFDaEk7QUFFQSxRQUFJLFlBQVk7QUFDaEIsUUFBSSxPQUFPLFFBQVEsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDO0FBQ3ZDLFFBQUksZUFBZTtBQUNuQixhQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sUUFBUSxLQUFLO0FBQ3JDLFlBQU0sSUFBSSxJQUFJLEtBQU0sSUFBSSxLQUFLLE9BQU8sSUFBSTtBQUN4QyxlQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUFFLFlBQUksY0FBYztBQUFLLFlBQUksU0FBUyxNQUFNLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxPQUFPLEdBQUcsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDO0FBQUEsTUFBRztBQUMzSCxVQUFJLGNBQWM7QUFBQSxJQUNwQjtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBU0EsU0FBUyxXQUFXLE1BQWMsT0FBZSxHQUFhLEdBQWEsTUFBYyxJQUFTLENBQUMsR0FBK0I7QUFDaEksU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNQSxPQUFNLENBQUMsTUFBZ0IsT0FBTyxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUcsVUFBTSxJQUFJLElBQUk7QUFDZCxhQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sS0FBSztBQUFFLFVBQUksWUFBWUEsS0FBSSxJQUFJLElBQUksSUFBSSxDQUFDO0FBQUcsVUFBSSxTQUFTLEtBQUssTUFBTSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDO0FBQUEsSUFBRztBQUMvSCxRQUFJLDJCQUEyQjtBQUMvQixhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsV0FBVyxLQUFLLEtBQUs7QUFDMUMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLE1BQU0sS0FBSyxPQUFPLElBQUksSUFBSTtBQUNsRixZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsU0FBRyxhQUFhLEdBQUcsb0JBQW9CLEVBQUUsR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLHFCQUFxQjtBQUN2RixVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDckc7QUFDQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsVUFBVSxPQUFPLEtBQUs7QUFBRSxZQUFNLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFBRyxVQUFJLFlBQVksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFBVSxVQUFJLFNBQVMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHO0FBQUEsSUFBRztBQU9sTCxRQUFJLEVBQUUsT0FBTztBQUNYLFlBQU0sS0FBSyxFQUFFLFdBQVcsS0FBTSxLQUFLLEVBQUUsV0FBVztBQUNoRCxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM5QyxlQUFTLElBQUksR0FBRyxLQUFLLElBQUksS0FBSztBQUM1QixjQUFNLElBQUksSUFBSTtBQUNkLGNBQU0sSUFBSSxNQUFNLEtBQUssT0FBTyxNQUFNLE1BQU0sS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUUsUUFBUSxDQUFDO0FBQzFFLGNBQU0sSUFBSSxLQUFLLE1BQU0sTUFBTSxDQUFDO0FBQzVCLFdBQUcsYUFBYSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBQSxNQUMxQztBQUNBLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFDN0M7QUFDQSxRQUFJLDJCQUEyQjtBQUFBLEVBQ2pDLENBQUM7QUFDSDtBQU1BLFNBQVMsUUFBUSxHQUF5QixZQUFvQixLQUFhLE9BQWUsU0FBUyxPQUFPLEtBQUssR0FBUztBQUN0SCxRQUFNLElBQUksRUFBRSxhQUFhLFVBQVU7QUFDbkMsTUFBSSxPQUFPO0FBQ1gsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sSUFBSyxRQUFPLEtBQUssSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUN4RixRQUFNLE1BQU0sS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLElBQUksS0FBSyxLQUFLLE9BQU8sS0FBSyxDQUFDO0FBQzlELFFBQU0sS0FBSyxJQUFJLGFBQWEsRUFBRSxRQUFRLENBQUM7QUFDdkMsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxVQUFNLElBQUksS0FBSyxNQUFNLElBQUksVUFBVTtBQUNuQyxPQUFHLElBQUksQ0FBQyxJQUFLLElBQUksTUFBTztBQUFLLE9BQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLE1BQU07QUFBQSxFQUNsRTtBQUNBLElBQUUsYUFBYSxNQUFNLElBQVUsc0JBQWdCLElBQUksQ0FBQyxDQUFDO0FBQ3ZEO0FBS0EsU0FBUyxXQUFXLE1BQWMsTUFBYyxHQUFvQztBQUNsRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU1BLE9BQU0sQ0FBQyxNQUFnQixPQUFPLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5RyxRQUFJLFlBQVlBLEtBQUksRUFBRSxVQUFVLENBQUMsTUFBTSxNQUFNLElBQUksQ0FBQztBQUFHLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzVFLFVBQU0sTUFBa0IsRUFBRSxXQUFXLENBQUMsQ0FBQyxNQUFNLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxNQUFNLEdBQUksR0FBRyxDQUFDLEtBQU0sTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFNLE1BQU0sR0FBSSxDQUFDO0FBQ3BILFVBQU0sSUFBSSxFQUFFLFNBQVMsS0FBSyxPQUFPLEtBQUssRUFBRSxRQUFRLFFBQVEsT0FBTyxLQUFLLEVBQUUsUUFBUTtBQUM5RSxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLE9BQU8sSUFBSSxLQUFLLE9BQU8sT0FBTyxLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxLQUFLO0FBQ3ZILFlBQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLE9BQU8sSUFBSSxJQUFJO0FBS2xFLFVBQUksRUFBRSxPQUFPO0FBQ1gsWUFBSSxZQUFZQSxNQUFLLEVBQUUsVUFBVSxDQUFDLE1BQU0sTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLEtBQUssQ0FBQztBQUM1RSxtQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksUUFBUSxJQUFJLEtBQUssS0FBSyxNQUFNLElBQUksS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLEtBQUs7QUFBQSxRQUFHO0FBQUEsTUFDdkw7QUFDQSxVQUFJLFlBQVlBLEtBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3BELGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQUc7QUFFakosVUFBSSxZQUFZLG9CQUFvQixFQUFFLFNBQVMsSUFBSTtBQUNuRCxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksUUFBUSxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDdEw7QUFBQSxFQUNGLENBQUM7QUFDSDtBQU1BLFNBQVMsVUFBVSxNQUFjLE1BQWMsR0FBb0M7QUFDakYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNLFNBQVMsRUFBRSxVQUFVLEtBQU0sUUFBUSxFQUFFLFNBQVMsR0FBRyxRQUFRLEVBQUUsU0FBUztBQU8xRSxVQUFNLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDL0IsUUFBSSxZQUFZLE9BQU8sSUFBSSxJQUFJLENBQUM7QUFBSyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM1RCxRQUFJLDJCQUEyQjtBQUMvQixVQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sTUFBTTtBQUNsQyxRQUFJLFlBQVksT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDckMsVUFBTSxRQUFRLElBQUksT0FBTyxJQUFJLFNBQVMsRUFBRSxhQUFhO0FBRXJELGFBQVMsSUFBSSxHQUFHLElBQUksT0FBTyxLQUFLO0FBQUUsWUFBTSxJQUFJLElBQUksUUFBUSxRQUFRLE9BQU8sSUFBSSxJQUFJLE9BQU8sUUFBUTtBQUFLLFVBQUksU0FBUyxHQUFHLElBQUksTUFBTSxHQUFHLElBQUksSUFBSTtBQUFHLFVBQUksU0FBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJO0FBQUEsSUFBRztBQUN2TCxhQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sS0FBSztBQUFFLFlBQU0sSUFBSSxLQUFLLE1BQU0sT0FBTyxJQUFJLE9BQU87QUFBUSxVQUFJLFNBQVMsR0FBRyxJQUFJLEtBQUssR0FBRyxDQUFDO0FBQUEsSUFBRztBQUVqSCxhQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUFFLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxPQUFPLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFDL0gsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUcsU0FBRyxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7QUFDbEosVUFBSSxZQUFZO0FBQUksaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFBRTtBQUM3SixRQUFJLDJCQUEyQjtBQUFBLEVBQ2pDLENBQUM7QUFDSDtBQVVBLFNBQVMsU0FBUyxNQUFjLE1BQWMsR0FBb0M7QUFDaEYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNLE9BQU8sRUFBRSxRQUFRLEtBQUssT0FBTyxFQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUksR0FBRyxTQUFTLEVBQUUsVUFBVTtBQUNoRixVQUFNLEtBQUssS0FBSyxNQUFNLE9BQU8sTUFBTSxHQUFHLEtBQUssS0FBSyxNQUFNLE9BQU8sR0FBRyxHQUFHLEtBQUssS0FBSyxNQUFNLE9BQU8sR0FBRztBQUM3RixVQUFNLE9BQU8sRUFBRSxRQUFRLENBQUMsS0FBSyxLQUFLLEdBQUc7QUFDckMsUUFBSSxZQUFZLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQUssUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDdkUsYUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLO0FBQUUsWUFBTSxJQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksSUFBSSxPQUFPLEVBQUU7QUFBRyxVQUFJLFlBQVksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFBSyxVQUFJLFNBQVMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFBRztBQUV4SyxVQUFNLFFBQVEsQ0FBQyxJQUFZLElBQVksWUFBcUI7QUFDMUQsWUFBTSxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksS0FBSyxDQUFDO0FBQ3pFLFlBQU0sS0FBSyxFQUFFLFdBQVcsR0FBRyxLQUFLLElBQUk7QUFDcEMsVUFBSSxZQUFZLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ3JDLGVBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQUUsY0FBTSxJQUFJLE1BQU0sS0FBSyxPQUFPLElBQUksTUFBTSxLQUFLO0FBQUksWUFBSSxTQUFTLEdBQUcsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFO0FBQUEsTUFBRztBQUNsSCxZQUFNLEtBQUssRUFBRSxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsYUFBYTtBQUNqRCxlQUFTLElBQUksR0FBRyxLQUFLLElBQUksS0FBSztBQUM1QixjQUFNLEtBQUssTUFBTSxJQUFJLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHLEtBQUssTUFBTSxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sSUFBSSxNQUFNLEtBQUssS0FBSyxLQUFLO0FBRWxJLGNBQU0sUUFBUSxNQUFNLEtBQUssTUFBTTtBQUMvQixZQUFJLENBQUMsV0FBVyxDQUFDLE1BQU87QUFDeEIsY0FBTSxNQUFNLFVBQVUsS0FBTSxNQUFNLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxNQUFPLE1BQU0sVUFBVSxLQUFNLE1BQU0sSUFBSSxNQUFNLEtBQUssTUFBTSxPQUFPO0FBQzNILGlCQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQixnQkFBTSxNQUFNLElBQUksT0FBTyxLQUFNLElBQUksSUFBSyxNQUFNLE1BQU0sS0FBSyxJQUFJLElBQUksT0FBTyxJQUFJLE1BQU0sTUFBTSxJQUFJLElBQUksT0FBTyxJQUFJO0FBQ3pHLHFCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxnQkFBSSxVQUFVO0FBQUcsZ0JBQUksT0FBTyxJQUFJLElBQUksR0FBRztBQUFHLGdCQUFJLE9BQU8sSUFBSSxLQUFLLEdBQUcsR0FBRztBQUFHLGdCQUFJLE9BQU8sSUFBSSxLQUFLLElBQUksSUFBSSxHQUFHO0FBQUcsZ0JBQUksT0FBTyxJQUFJLEtBQUssSUFBSSxHQUFHO0FBQUcsZ0JBQUksVUFBVTtBQUFHLGdCQUFJLEtBQUs7QUFBQSxVQUFHO0FBQUEsUUFDck07QUFBQSxNQUNGO0FBRUEsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsS0FBSyxJQUFJLE1BQU0sR0FBRyxLQUFLLElBQUksSUFBSTtBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUs7QUFBRyxTQUFHLGFBQWEsR0FBRyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRO0FBQzNLLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJO0FBQzlELFVBQUksWUFBWSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUFLLFVBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxPQUFPLEdBQUcsSUFBSSxLQUFLO0FBQUcsVUFBSSxTQUFTLEdBQUcsS0FBSyxJQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUs7QUFDcEksVUFBSSxZQUFZLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQUssVUFBSSxTQUFTLEdBQUcsS0FBSyxJQUFJLE1BQU0sR0FBRyxDQUFDO0FBQUcsVUFBSSxTQUFTLEdBQUcsS0FBSyxJQUFJLE1BQU0sR0FBRyxDQUFDO0FBRW5ILFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLElBQUksR0FBRyxLQUFLLElBQUksR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVEsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxhQUFhLElBQUksR0FBRztBQUFHLFNBQUcsYUFBYSxHQUFHLFFBQVEsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEtBQUs7QUFDL00sVUFBSSxZQUFZO0FBQUksVUFBSSxTQUFTLEdBQUcsS0FBSyxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUc7QUFDNUQsZUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFVBQVUsS0FBSyxLQUFLO0FBQ3pDLGNBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxNQUFNLE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSSxPQUFPLE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSSxNQUFNLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxPQUFPLElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFDcEssY0FBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUcsV0FBRyxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztBQUFHLFdBQUcsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7QUFDbEosWUFBSSxZQUFZO0FBQUksbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksUUFBUSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLGNBQUksS0FBSztBQUFBLFFBQUc7QUFBQSxNQUMvSTtBQUNBLFVBQUksMkJBQTJCO0FBQy9CLGVBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQUUsY0FBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFBRyxZQUFJLFlBQVksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDO0FBQUssWUFBSSxTQUFTLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUM7QUFBQSxNQUFHO0FBQzlPLFVBQUksMkJBQTJCO0FBQUEsSUFDakM7QUFDQSxVQUFNLEdBQUcsSUFBSSxHQUFHLElBQUk7QUFDcEIsVUFBTSxJQUFJLEdBQUcsR0FBRyxLQUFLO0FBQUEsRUFDdkIsQ0FBQztBQUNIO0FBS0EsU0FBUyxRQUFRLEdBQW1DO0FBQ2xELFFBQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSTtBQUN4QyxRQUFNLElBQUksSUFBVSxrQkFBWSxHQUFHLEdBQUcsQ0FBQztBQUN2QyxRQUFNLElBQUksRUFBRSxhQUFhLFVBQVU7QUFDbkMsV0FBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxVQUFNLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUs7QUFDaEMsTUFBRSxLQUFLLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxNQUFNLEtBQUssTUFBTSxFQUFFO0FBQUcsTUFBRSxLQUFLLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxNQUFNLEtBQUssTUFBTSxFQUFFO0FBQUEsRUFDekY7QUFDQSxJQUFFLHFCQUFxQjtBQUN2QixJQUFFLFVBQVUsSUFBSSxLQUFLLElBQUksR0FBRyxFQUFFO0FBQzlCLFNBQU87QUFDVDtBQXdCQSxTQUFTLFNBQVMsTUFBYyxNQUFjLEdBQW9DO0FBQ2hGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTSxNQUFNLEVBQUUsT0FBTyxNQUFNLEtBQUssRUFBRSxNQUFNO0FBQ3hDLFVBQU0sSUFBSSxDQUFDLE1BQWM7QUFBRSxZQUFNLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQztBQUFHLGFBQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFBQSxJQUFLO0FBQ3hGLFFBQUksWUFBWSxFQUFFLEdBQUc7QUFBRyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUUvQyxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsVUFBVSxLQUFLLEtBQUs7QUFDekMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQzVELFlBQU0sS0FBSyxJQUFJLElBQUk7QUFDbkIsWUFBTSxJQUFJLEtBQUssT0FBTyxJQUFJLFFBQVEsT0FBTyxJQUFJLElBQUksT0FBTyxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQzlFLFlBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNwRCxTQUFHLGFBQWEsR0FBRyxRQUFRLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsY0FBYyxJQUFJLEdBQUc7QUFDdkgsU0FBRyxhQUFhLEdBQUcsZUFBZTtBQUNsQyxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDdkk7QUFVQSxVQUFNLEtBQUssTUFBTSxLQUFLLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEtBQUssT0FBTyxJQUFJLElBQUksSUFBSyxDQUFDO0FBQ2pILGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxXQUFXLE1BQU0sS0FBSztBQUMzQyxVQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUk7QUFDL0IsVUFBSSxHQUFHLFVBQVUsSUFBSSxLQUFLLEVBQUUsZ0JBQWdCLE9BQU87QUFDakQsY0FBTSxJQUFJLEdBQUksSUFBSSxJQUFJLEdBQUcsU0FBVSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzFGLFlBQUksRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSTtBQUFHLFlBQUksRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSTtBQUFBLE1BQ3ZEO0FBQ0EsWUFBTSxJQUFJLE1BQU0sRUFBRSxjQUFjLFFBQVMsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRSxjQUFjO0FBQy9FLFlBQU0sSUFBSSxPQUFPLElBQUksUUFBUSxNQUFNLElBQUksSUFBSTtBQUMzQyxZQUFNLElBQUksSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUM7QUFDbEMsWUFBTSxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUs7QUFDN0IsVUFBSSxZQUFZLFFBQVEsS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsT0FBTyxJQUFJLEtBQUssRUFBRSxtQkFBbUIsS0FBSztBQUMxSixpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUN4RCxZQUFJLFVBQVU7QUFDZCxpQkFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsZ0JBQU0sSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksR0FBRyxLQUFLLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDN0QsZ0JBQU0sS0FBSyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSztBQUN2RSxjQUFJLE1BQU0sRUFBRyxLQUFJLE9BQU8sSUFBSSxFQUFFO0FBQUEsY0FBUSxLQUFJLE9BQU8sSUFBSSxFQUFFO0FBQUEsUUFDekQ7QUFDQSxZQUFJLFVBQVU7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUM1QjtBQUFBLElBQ0Y7QUFFQSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsV0FBVyxLQUFLLEtBQUs7QUFDMUMsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxNQUFPLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUk7QUFDL0YsWUFBTSxJQUFJLE1BQU0sTUFBTSxNQUFNLElBQUksSUFBSSxLQUFLLElBQUksT0FBTyxJQUFJLElBQUk7QUFDNUQsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRztBQUN0RCxTQUFHLGFBQWEsR0FBRyxRQUFRLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxLQUFLO0FBQ2pHLFNBQUcsYUFBYSxNQUFNLFFBQVEsS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQ3ZHLFNBQUcsYUFBYSxHQUFHLFFBQVEsS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQyxDQUFDLEtBQUs7QUFDakcsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRztBQUFBLElBQzlEO0FBT0EsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFNBQVMsSUFBSSxLQUFLO0FBQ3ZDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ3ZFLFlBQU0sS0FBSyxJQUFJLElBQUk7QUFDbkIsWUFBTSxJQUFJLEtBQUssT0FBTyxJQUFJLFFBQVEsTUFBTSxJQUFJLElBQUksT0FBTyxNQUFNLE1BQU0sTUFBTSxJQUFJO0FBQzdFLFVBQUksWUFBWSxRQUFRLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU8sSUFBSSxJQUFJLEdBQUk7QUFDaEgsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDO0FBQUEsSUFDN0Y7QUFDQSxRQUFJLFVBQVU7QUFDZCxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsYUFBYSxJQUFJLEtBQUs7QUFDM0MsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsTUFBTSxLQUFLLE9BQVEsSUFBSSxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksT0FBTyxNQUFNLEtBQUssS0FBSztBQUMzRyxZQUFNLEtBQUssSUFBSSxJQUFJO0FBQ25CLFlBQU0sSUFBSSxLQUFLLE9BQU8sSUFBSSxRQUFRLE1BQU0sSUFBSSxJQUFJLE9BQU8sTUFBTSxNQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ2pGLFVBQUksY0FBYyxRQUFRLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU8sSUFBSSxJQUFJLElBQUk7QUFDbEgsVUFBSSxZQUFZLE1BQU0sSUFBSSxJQUFJO0FBQzlCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQ3hELFlBQUksVUFBVTtBQUFHLFlBQUksT0FBTyxJQUFJLElBQUksSUFBSSxFQUFFO0FBQzFDLFlBQUksT0FBTyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUc7QUFBRyxZQUFJLE9BQU87QUFBQSxNQUNqRjtBQUFBLElBQ0Y7QUFFQSxRQUFJLEVBQUUsTUFBTTtBQUNWLFlBQU0sSUFBSSxFQUFFLE1BQU0sT0FBTyxFQUFFLFlBQVk7QUFDdkMsWUFBTSxPQUFPLEdBQUcsS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBSzFGLGlCQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsZUFBZSxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQWlCO0FBQ3pGLGNBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLE1BQU0sR0FBRyxPQUFPLE1BQU0sSUFBSSxDQUFDO0FBQ2xFLFdBQUcsYUFBYSxHQUFHLFFBQVEsSUFBSSxJQUFJLEVBQUUsWUFBWSxHQUFJLEdBQUc7QUFBRyxXQUFHLGFBQWEsR0FBRyxRQUFRLElBQUksS0FBSztBQUMvRixZQUFJLFlBQVk7QUFBSSxZQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLE1BQzdDO0FBQ0EsZUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFlBQVksS0FBSyxLQUFLO0FBQzNDLGNBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFDekMsY0FBTSxNQUFNLElBQUksSUFBSTtBQUNwQixjQUFNLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxRQUFRLE1BQU0sSUFBSTtBQUMvQyxjQUFNLE1BQU0sS0FBSyxNQUFPLElBQUksSUFBSTtBQUNoQyxjQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHO0FBQ3RELFdBQUcsYUFBYSxHQUFHLFFBQVEsSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksR0FBRztBQUFHLFdBQUcsYUFBYSxHQUFHLFFBQVEsSUFBSSxLQUFLO0FBQ2hHLFlBQUksWUFBWTtBQUNoQixtQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUc7QUFBQSxNQUM5RDtBQUFBLElBQ0Y7QUFBQSxFQUNGLENBQUM7QUFDSDtBQWtCQSxTQUFTLE9BQU8sR0FBeUIsR0FBVyxHQUFXLE9BQWUsT0FBTyxHQUF5QjtBQUM1RyxRQUFNLEtBQUssRUFBRSxhQUFhLElBQUk7QUFDOUIsUUFBTSxLQUFNLElBQUksS0FBSyxLQUFLLElBQUssT0FBTyxLQUFLLElBQUk7QUFDL0MsV0FBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLE9BQU8sSUFBSyxJQUFHLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUk7QUFDdEYsU0FBTztBQUNUO0FBSUEsU0FBUyxXQUFXLEtBQStCLEtBQW1CLElBQVksSUFBWSxJQUFZLElBQVksR0FBVyxNQUFjLE9BQWUsTUFBb0I7QUFDaEwsV0FBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsVUFBTSxJQUFJLEtBQUssSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJO0FBQ2xGLFFBQUksWUFBWSxRQUFRLElBQUksSUFBSSxPQUFPLE9BQU8sS0FBSyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDbkUsUUFBSSxTQUFTLEdBQUcsSUFBSSxHQUFHLEtBQUssRUFBRTtBQUFBLEVBQ2hDO0FBQ0Y7QUFLQSxTQUFTLGVBQWUsS0FBK0IsS0FBbUIsR0FBVyxJQUFZLElBQVksR0FBVyxPQUFlLFNBQXVCO0FBQzVKLFdBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFVBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxNQUFNLEtBQUssT0FBTyxJQUFJLElBQUksT0FBTyxPQUFPLElBQUksSUFBSTtBQUNyRSxVQUFNLElBQUksT0FBTyxlQUFlLGVBQWUsSUFBSSxPQUFPLFNBQVMsTUFBTSxJQUFJLElBQUksT0FBTyxXQUFXLE1BQU0sSUFBSSxJQUFJO0FBQ2pILFVBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUc7QUFDcEQsT0FBRyxhQUFhLEdBQUcsUUFBUSxDQUFDLEtBQUs7QUFBRyxPQUFHLGFBQWEsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxPQUFHLGFBQWEsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUc7QUFBRyxPQUFHLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSztBQUN6SixRQUFJLFlBQVk7QUFDaEIsZUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUc7QUFBQSxFQUNqRTtBQUNGO0FBS0EsU0FBUyxjQUFjLEtBQStCLEtBQW1CLEdBQVcsT0FBbUIsSUFBWSxJQUFZLEdBQVcsTUFBb0I7QUFDNUosYUFBVyxDQUFDLElBQUksRUFBRSxLQUFLLE9BQU87QUFDNUIsVUFBTSxLQUFLLElBQUkscUJBQXFCLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFLElBQUksR0FBRztBQUM3RSxPQUFHLGFBQWEsR0FBRyxrQkFBa0IsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLEdBQUc7QUFBRyxPQUFHLGFBQWEsR0FBRyxrQkFBa0I7QUFDdEcsUUFBSSxZQUFZO0FBQ2hCLGVBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLFVBQUksVUFBVTtBQUFHLFVBQUksUUFBUSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsVUFBSSxLQUFLO0FBQUEsSUFBRztBQUNqSCxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixZQUFNLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLO0FBQ3hFLFVBQUksWUFBWSxrQkFBa0IsT0FBTyxJQUFJLElBQUksTUFBTSxRQUFRLENBQUMsQ0FBQztBQUNqRSxZQUFNLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ3pDLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUFBLElBQzNEO0FBQUEsRUFDRjtBQUNGO0FBT0EsU0FBUyxTQUFTLE1BQWMsTUFBMEM7QUFDeEUsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixVQUFNLE9BQU8sWUFBWSxRQUFRO0FBQ2pDLFFBQUksWUFBWTtBQUFXLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBRWxELFVBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzlDLE9BQUcsYUFBYSxHQUFHLHNCQUFzQjtBQUFHLE9BQUcsYUFBYSxLQUFLLHdCQUF3QjtBQUFHLE9BQUcsYUFBYSxHQUFHLHNCQUFzQjtBQUNySSxRQUFJLFlBQVk7QUFBSSxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUMzQyxtQkFBZSxLQUFLLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxNQUFNLEdBQUk7QUFFaEQsVUFBTSxRQUFRLENBQUMsS0FBSyxNQUFPLElBQUksSUFBSSxNQUFPLEtBQUssT0FBTyxJQUFJLElBQUksS0FBSztBQUVuRSxVQUFNLFdBQVcsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO0FBQ2hDLGFBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxTQUFTLFFBQVEsSUFBSyxZQUFXLEtBQUssS0FBSyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxJQUFJLENBQUMsR0FBRyxLQUFLLE1BQU0sT0FBTyxJQUFJO0FBRTdILGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLE1BQU0sS0FBSyxPQUFPLElBQUksSUFBSTtBQUM5RCxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLEtBQUssR0FBRztBQUMxRCxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLElBQUksS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHO0FBQUEsSUFDaEU7QUFFQSxlQUFXLEtBQUssT0FBTztBQUNyQixZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxJQUFJLElBQUksTUFBTSxHQUFHLENBQUM7QUFDekQsU0FBRyxhQUFhLEdBQUcsa0JBQWtCO0FBQUcsU0FBRyxhQUFhLEdBQUcscUJBQXFCO0FBQ2hGLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJO0FBQzdELFVBQUksWUFBWTtBQUF1QixVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUNoRSxVQUFJLFlBQVk7QUFBMEIsVUFBSSxTQUFTLEdBQUcsSUFBSSxLQUFLLEdBQUcsQ0FBQztBQUN2RSxVQUFJLFlBQVk7QUFBdUIsVUFBSSxTQUFTLEdBQUcsSUFBSSxLQUFLLEdBQUcsR0FBRztBQUN0RSxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSTtBQUM3RCxTQUFHLGFBQWEsR0FBRyxxQkFBcUI7QUFBRyxTQUFHLGFBQWEsR0FBRyxrQkFBa0I7QUFDaEYsVUFBSSxZQUFZO0FBQUksVUFBSSxTQUFTLEdBQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJO0FBQUEsSUFDeEQ7QUFFQSxVQUFNLFFBQW9CLENBQUM7QUFDM0IsZUFBVyxLQUFLLE1BQU8sVUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUssT0FBTSxLQUFLLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssQ0FBQztBQUN4RyxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSyxPQUFNLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDO0FBQzdELGtCQUFjLEtBQUssS0FBSyxHQUFHLE9BQU8sSUFBSSxLQUFNLElBQUksTUFBTSxJQUFJLEdBQUk7QUFBQSxFQUNoRSxDQUFDO0FBQ0g7QUFxQkEsU0FBUyxXQUFXLE1BQWMsTUFBYyxHQUFvQztBQUNsRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU0sS0FBYSxFQUFFLFdBQVcsR0FBRyxLQUFLLElBQUk7QUFDNUMsVUFBTSxRQUFnQixFQUFFLFNBQVMsS0FBSyxTQUFpQixFQUFFLFVBQVU7QUFDbkUsVUFBTSxPQUFlLEVBQUUsUUFBUSxDQUFDLEtBQUssR0FBRyxPQUFlLEVBQUUsUUFBUSxDQUFDLEtBQUs7QUFDdkUsVUFBTSxTQUFpQixFQUFFLFVBQVU7QUFDbkMsVUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQWMsRUFBRSxXQUFXLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDekQsUUFBSSxZQUFZO0FBQVcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFJbEQsVUFBTSxRQUFvQixDQUFDO0FBQzNCLGFBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxLQUFLO0FBQzVCLFlBQU0sTUFBZ0IsQ0FBQztBQUN2QixVQUFJLElBQUk7QUFDUixlQUFTLElBQUksR0FBRyxLQUFLLEdBQUcsS0FBSztBQUMzQixZQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRyxNQUFLLElBQUksSUFBSSxJQUFJLEtBQUssU0FBUztBQUM5RSxZQUFJLEtBQUssSUFBSSxLQUFLLENBQUM7QUFBQSxNQUNyQjtBQUNBLFlBQU0sS0FBSyxHQUFHO0FBQUEsSUFDaEI7QUFFQSxhQUFTLElBQUksR0FBRyxJQUFJLElBQUksS0FBSztBQUMzQixZQUFNLEtBQUssSUFBSTtBQUVmLFlBQU0sSUFBSSxJQUFJLFNBQVMsSUFBSTtBQUMzQixZQUFNLElBQUksS0FBSyxNQUFNLE1BQU0sQ0FBQztBQUM1QixVQUFJLFlBQVksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDO0FBQ3pFLFVBQUksU0FBUyxHQUFHLEtBQUssU0FBUyxLQUFLLEdBQUcsR0FBRyxLQUFLLElBQUksU0FBUyxLQUFLLENBQUM7QUFFakUsZUFBUyxJQUFJLEdBQUcsSUFBSSxPQUFPLEtBQUs7QUFDOUIsY0FBTSxJQUFJLElBQUksSUFBSTtBQUNsQixjQUFNLElBQUksT0FBTyxJQUFJLEtBQUssT0FBTztBQUNqQyxjQUFNLE9BQU8sSUFBSSxVQUFVLE1BQU0sSUFBSSxJQUFJO0FBQ3pDLGNBQU0sSUFBSSxPQUFPLElBQUksSUFBSTtBQUN6QixjQUFNLE9BQU8sSUFBSSxJQUFJO0FBQ3JCLFlBQUksWUFBWSxPQUFPLFFBQVEsS0FBSyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxNQUMvRixxQkFBcUIsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDO0FBQy9ELGNBQU0sT0FBTyxLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUk7QUFDdkMsY0FBTSxPQUFPLE1BQU0sSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLElBQUk7QUFDdEUsWUFBSSxTQUFTLEdBQUcsTUFBTSxHQUFHLEtBQUssSUFBSSxHQUFHLE9BQU8sSUFBSSxDQUFDO0FBR2pELGNBQU0sT0FBZSxFQUFFLFFBQVE7QUFDL0IsWUFBSSxPQUFPLEtBQUssSUFBSSxJQUFJLE1BQU07QUFDNUIsZ0JBQU0sSUFBSSxLQUFLLFFBQVEsTUFBTSxJQUFJLElBQUk7QUFDckMsY0FBSSxVQUFVO0FBQUcsY0FBSSxPQUFPLEdBQUcsSUFBSTtBQUFHLGNBQUksT0FBTyxJQUFJLEdBQUcsSUFBSTtBQUFHLGNBQUksT0FBTyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUM7QUFBRyxjQUFJLFVBQVU7QUFBRyxjQUFJLEtBQUs7QUFDMUgsY0FBSSxZQUFZLGtCQUFrQixNQUFPLElBQUksSUFBSSxNQUFNLFFBQVEsQ0FBQyxDQUFDO0FBQ2pFLGNBQUksU0FBUyxJQUFJLEdBQUcsTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHO0FBQUEsUUFDMUM7QUFBQSxNQUNGO0FBR0EsZUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFNBQVMsSUFBSSxLQUFLO0FBQ3ZDLGNBQU0sSUFBSSxJQUFJLElBQUk7QUFDbEIsWUFBSSxZQUFZLGtCQUFrQixNQUFPLElBQUksSUFBSSxNQUFNLFFBQVEsQ0FBQyxDQUFDO0FBQ2pFLFlBQUksU0FBUyxHQUFHLEtBQUssS0FBSyxLQUFLLEdBQUcsTUFBTSxNQUFNLElBQUksSUFBSSxJQUFJO0FBQUEsTUFDNUQ7QUFFQSxZQUFNLE9BQU8sRUFBRSxRQUFRO0FBQ3ZCLGVBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxLQUFLO0FBQzdCLGNBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDN0MsWUFBSSxZQUFZLGtCQUFrQixNQUFPLElBQUksSUFBSSxNQUFNLFFBQVEsQ0FBQyxDQUFDO0FBQ2pFLFlBQUksU0FBUyxHQUFHLEtBQUssS0FBSyxNQUFNLEdBQUcsTUFBTSxNQUFNLElBQUksSUFBSSxJQUFJO0FBQUEsTUFDN0Q7QUFBQSxJQUNGO0FBTUEsYUFBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLEtBQUs7QUFDNUIsZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsY0FBTSxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUM7QUFDckIsY0FBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsS0FBSyxLQUFLLE1BQU0sR0FBRyxFQUFFO0FBQzVELFdBQUcsYUFBYSxHQUFHLHFCQUFxQjtBQUFHLFdBQUcsYUFBYSxHQUFHLHFCQUFxQixFQUFFLE9BQU8sTUFBTSxRQUFRLENBQUMsQ0FBQyxHQUFHO0FBQy9HLFlBQUksWUFBWTtBQUNoQixtQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsR0FBRyxLQUFLLEtBQUssT0FBTyxJQUFJLEdBQUcsS0FBSyxJQUFJO0FBQzNFLGNBQU0sS0FBSyxJQUFJLHFCQUFxQixHQUFHLElBQUksR0FBRyxLQUFLLEtBQUssSUFBSTtBQUM1RCxXQUFHLGFBQWEsR0FBRyxrQkFBa0IsRUFBRSxVQUFVLE1BQU0sUUFBUSxDQUFDLENBQUMsR0FBRztBQUNwRSxXQUFHLGFBQWEsR0FBRyxrQkFBa0I7QUFDckMsWUFBSSxZQUFZO0FBQ2hCLG1CQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxHQUFHLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSTtBQUFBLE1BQ2pFO0FBQUEsSUFDRjtBQUdBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxRQUFRLElBQUksS0FBSztBQUN0QyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDNUQsWUFBTSxLQUFLLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3BELFlBQU0sSUFBSSxPQUFPLElBQUksSUFBSTtBQUN6QixTQUFHLGFBQWEsR0FBRyxvQkFBb0IsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHO0FBQUcsU0FBRyxhQUFhLEdBQUcscUJBQXFCO0FBQ2pHLFVBQUksMkJBQTJCO0FBQVksVUFBSSxZQUFZO0FBQzNELGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUNySSxVQUFJLDJCQUEyQjtBQUFBLElBQ2pDO0FBRUEsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLE9BQU8sSUFBSSxLQUFLO0FBQ3JDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLElBQUksSUFBSTtBQUM1RCxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDcEQsWUFBTSxJQUFJLE1BQU8sSUFBSSxJQUFJO0FBQ3pCLFNBQUcsYUFBYSxHQUFHLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsS0FBSyxrQkFBa0IsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLEdBQUc7QUFBRyxTQUFHLGFBQWEsR0FBRyxrQkFBa0I7QUFDM0osVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUcsWUFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRztBQUFBLElBQ3ZJO0FBRUEsbUJBQWUsS0FBSyxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsV0FBVyxJQUFJLEtBQU0sSUFBSTtBQUFBLEVBQy9ELENBQUM7QUFDSDtBQU9BLFNBQVMsU0FBUyxNQUFjLE1BQWMsR0FBb0M7QUFDaEYsU0FBTyxXQUFXLE1BQU0sQ0FBQyxLQUFLLE1BQU07QUFDbEMsVUFBTSxNQUFNLElBQUksSUFBSTtBQUNwQixRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNsRCxVQUFNLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxNQUFNLEtBQUssRUFBRSxTQUFTLEdBQUcsQ0FBQztBQUV6RCxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSyxPQUFPO0FBQ2pDLFVBQUksWUFBWSxrQkFBa0IsTUFBTyxJQUFJLElBQUksTUFBTSxRQUFRLENBQUMsQ0FBQztBQUFLLFVBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzdGLFVBQUksWUFBWTtBQUEwQixVQUFJLFNBQVMsSUFBSSxHQUFHLEdBQUcsS0FBSyxJQUFJLEdBQUcsUUFBUSxJQUFJLEdBQUcsQ0FBQztBQUFBLElBQy9GO0FBQ0EsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssT0FBTztBQUNqQyxVQUFJLFlBQVksa0JBQWtCLE1BQU8sSUFBSSxJQUFJLE1BQU0sUUFBUSxDQUFDLENBQUM7QUFBSyxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM3RixVQUFJLFlBQVk7QUFBMEIsVUFBSSxTQUFTLEdBQUcsSUFBSSxHQUFHLEdBQUcsS0FBSyxJQUFJLEdBQUcsUUFBUSxJQUFJLENBQUM7QUFBQSxJQUMvRjtBQUVBLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxXQUFXLElBQUksS0FBSztBQUN6QyxZQUFNLFFBQVEsSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksSUFBSTtBQUNyRixVQUFJLFlBQVk7QUFDaEIsVUFBSSxZQUFZO0FBQ2hCLFVBQUksT0FBTztBQUFFLFlBQUksU0FBUyxJQUFJLE1BQU0sR0FBRyxHQUFHLEtBQUssR0FBRztBQUFHLFlBQUksWUFBWTtBQUF1QixZQUFJLFNBQVMsSUFBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLEtBQUssQ0FBQztBQUFBLE1BQUcsT0FDbkk7QUFBRSxZQUFJLFNBQVMsR0FBRyxJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUc7QUFBRyxZQUFJLFlBQVk7QUFBdUIsWUFBSSxTQUFTLElBQUksS0FBSyxJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUc7QUFBQSxNQUFHO0FBQUEsSUFDcEk7QUFFQSxtQkFBZSxLQUFLLEtBQUssR0FBRyxHQUFHLEdBQUcsRUFBRSxXQUFXLElBQUksS0FBTSxJQUFJO0FBQUEsRUFDL0QsQ0FBQztBQUNIO0FBU0EsU0FBUyxTQUFTLE1BQWMsTUFBYyxHQUFvQztBQUNoRixTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFVBQU0sT0FBTyxZQUFZLFFBQVE7QUFDakMsUUFBSSxZQUFZO0FBQVcsUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDbEQsbUJBQWUsS0FBSyxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsV0FBVyxJQUFJLE1BQU0sR0FBSTtBQUM3RCxlQUFXLEtBQUssS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsU0FBUyxLQUFLLE1BQU0sT0FBTyxJQUFJO0FBRWxFLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxTQUFTLElBQUksS0FBSztBQUN2QyxZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUk7QUFDN0QsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFDeEQsWUFBSSxZQUFZO0FBQ2hCLFlBQUksVUFBVTtBQUFHLFlBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLEdBQUcsR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUN0RixZQUFJLGNBQWM7QUFBdUIsWUFBSSxZQUFZO0FBQ3pELGlCQUFTLElBQUksR0FBRyxLQUFLLEdBQUcsS0FBSztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxNQUFNLElBQUksTUFBTSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLE9BQU87QUFBQSxRQUFHO0FBQUEsTUFDeEo7QUFBQSxJQUNGO0FBRUEsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFVBQVUsSUFBSSxLQUFLO0FBQ3hDLFlBQU0sSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLE1BQU0sS0FBSyxNQUFNLElBQUksSUFBSTtBQUM3RCxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLEtBQUssR0FBRztBQUMxRCxVQUFJLFlBQVk7QUFDaEIsaUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUcsS0FBSSxTQUFTLElBQUksS0FBSyxJQUFJLElBQUksR0FBRyxHQUFHO0FBQUEsSUFDaEU7QUFDQSxVQUFNLFFBQW9CLENBQUM7QUFDM0IsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLFNBQVMsSUFBSSxJQUFLLE9BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7QUFDMUUsa0JBQWMsS0FBSyxLQUFLLEdBQUcsT0FBTyxJQUFJLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSTtBQUFBLEVBQ2hFLENBQUM7QUFDSDtBQXVCQSxTQUFTLFNBQVMsTUFBYyxNQUFjLEdBQW9DO0FBQ2hGLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTUEsT0FBTSxDQUFDLE1BQWdCLEdBQUcsS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzFHLFVBQU0sT0FBTyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLFFBQVEsRUFBRSxTQUFTLE1BQU0sT0FBTyxFQUFFLFFBQVEsTUFBTSxPQUFPLEVBQUUsUUFBUTtBQUNuRyxVQUFNLE9BQU8sQ0FBQyxTQUEyQztBQUN2RCxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFHLFlBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRyxNQUFLLElBQUksRUFBRTtBQUFBLElBQ3ZFO0FBQ0EsVUFBTSxPQUFPLENBQUMsR0FBYSxHQUFXLEdBQVcsR0FBVyxHQUFXLEtBQUssR0FBRyxNQUFNLE1BQU07QUFDekYsWUFBTSxJQUFJLElBQUkscUJBQXFCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ25ELFFBQUUsYUFBYSxHQUFHLFFBQVFBLEtBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHO0FBQUcsUUFBRSxhQUFhLE1BQU0sUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsR0FBRztBQUM1RixRQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLENBQUMsQ0FBQyxLQUFLO0FBQ3JDLFVBQUksWUFBWTtBQUNoQixXQUFLLENBQUMsSUFBSSxPQUFPO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQUEsTUFBRyxDQUFDO0FBQUEsSUFDaEg7QUFRQSxVQUFNLEtBQUssRUFBRSxVQUFVLEdBQUcsT0FBTyxFQUFFLFlBQVk7QUFDL0MsUUFBSSxLQUFLLEdBQUc7QUFDVixlQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixjQUFNLEtBQUssSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsS0FBSztBQUNyRCxjQUFNLElBQUksUUFBUSxJQUFJLFFBQVE7QUFDOUIsWUFBSSxZQUFZLE9BQU9BLEtBQUksS0FBSyxJQUFJLENBQUMsTUFBYyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQUssWUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFBQSxNQUN4RjtBQUFBLElBQ0YsT0FBTztBQUFFLFVBQUksWUFBWSxPQUFPQSxLQUFJLElBQUksQ0FBQztBQUFLLFVBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFBRztBQUd4RSxhQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsU0FBUyxLQUFLO0FBQ25DLFdBQUssTUFBTSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxLQUFLLE9BQU8sSUFBSSxJQUFJLFFBQVMsRUFBRSxjQUFjLElBQUksTUFBTyxJQUFJLElBQUksTUFBTSxNQUFNLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLEVBQUU7QUFLM0ksYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLGdCQUFnQixLQUFLLEtBQUs7QUFDL0MsWUFBTSxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxLQUFLLE9BQU8sSUFBSSxJQUFJLFNBQVMsRUFBRSxjQUFjO0FBQ3hGLFdBQUssT0FBTyxJQUFJLElBQUksS0FBSyxFQUFFLGNBQWMsUUFBUSxJQUFJLElBQUksS0FBTSxNQUFNLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLEVBQUU7QUFDakcsZUFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsY0FBTSxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLO0FBQzNELGNBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLElBQUk7QUFDNUUsWUFBSSxZQUFZLFFBQVFBLEtBQUksS0FBSyxDQUFDLElBQUksTUFBTSxJQUFJLElBQUksSUFBSTtBQUN4RCxhQUFLLENBQUMsSUFBSSxPQUFPO0FBQUUsY0FBSSxVQUFVO0FBQUcsY0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxLQUFLO0FBQUEsUUFBRyxDQUFDO0FBQUEsTUFDL0Y7QUFBQSxJQUNGO0FBSUEsYUFBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLGdCQUFnQixLQUFLLEtBQUs7QUFDL0MsWUFBTSxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQy9ELFdBQUssTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxLQUFNLE1BQU0sSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssRUFBRTtBQUM5RSxlQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsb0JBQW9CLEtBQUssS0FBSztBQUNuRCxjQUFNLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxHQUFHLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxJQUFJO0FBQ3RELGNBQU0sSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLElBQUk7QUFDNUUsWUFBSSxZQUFZLFFBQVFBLEtBQUksSUFBSSxDQUFDLElBQUksT0FBTyxJQUFJLElBQUksSUFBSTtBQUN4RCxhQUFLLENBQUMsSUFBSSxPQUFPO0FBQUUsY0FBSSxVQUFVO0FBQUcsY0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsY0FBSSxLQUFLO0FBQUEsUUFBRyxDQUFDO0FBQUEsTUFDL0Y7QUFDQSxVQUFJLElBQUksSUFBSSxLQUFLO0FBQ2YsY0FBTSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksTUFBTyxNQUFNLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDM0QsY0FBTSxJQUFJLElBQUkscUJBQXFCLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRztBQUNyRCxVQUFFLGFBQWEsR0FBRyxRQUFRQSxLQUFJLElBQUksQ0FBQyxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksR0FBRztBQUFHLFVBQUUsYUFBYSxHQUFHLFFBQVFBLEtBQUksSUFBSSxDQUFDLEtBQUs7QUFDeEcsWUFBSSxZQUFZO0FBQ2hCLGFBQUssQ0FBQyxPQUFPLElBQUksU0FBUyxLQUFLLE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQUEsTUFDckU7QUFBQSxJQUNGO0FBSUEsVUFBTSxRQUFRLEVBQUUsU0FBUztBQUN6QixhQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sS0FBSztBQUM5QixZQUFNLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxPQUFPLElBQUksT0FBTyxLQUFLLElBQUksSUFBSTtBQUM3RCxZQUFNLElBQUksS0FBSyxRQUFRLE1BQU0sSUFBSSxPQUFPLElBQUksSUFBSTtBQUNoRCxVQUFJLGNBQWMsUUFBUUEsS0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQUssVUFBSSxZQUFZLE1BQU0sSUFBSSxJQUFJO0FBQ3hFLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLE9BQU8sSUFBSSxJQUFJLENBQUM7QUFBRyxZQUFJLE9BQU8sSUFBSSxJQUFJLENBQUM7QUFBRyxZQUFJLE9BQU87QUFBQSxNQUFHO0FBQUEsSUFDOUc7QUFBQSxFQUNGLENBQUM7QUFDSDtBQVNBLFNBQVMsVUFBVSxNQUFjLE1BQTBDO0FBQ3pFLFNBQU8sV0FBVyxNQUFNLENBQUMsS0FBSyxNQUFNO0FBQ2xDLFVBQU0sTUFBTSxJQUFJLElBQUk7QUFDcEIsVUFBTSxPQUFPLFlBQVksUUFBUTtBQUNqQyxRQUFJLFlBQVk7QUFBVyxRQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUVsRCxVQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM5QyxPQUFHLGFBQWEsR0FBRyxxQkFBcUI7QUFBRyxPQUFHLGFBQWEsS0FBSyx3QkFBd0I7QUFBRyxPQUFHLGFBQWEsR0FBRyxxQkFBcUI7QUFDbkksUUFBSSxZQUFZO0FBQUksUUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDM0MsbUJBQWUsS0FBSyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksS0FBTSxJQUFJO0FBQ2hELFVBQU0sT0FBTyxLQUFLLE1BQU8sSUFBSSxJQUFJO0FBQ2pDLGVBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFHLFlBQVcsS0FBSyxLQUFLLEdBQUcsR0FBRyxJQUFJLElBQUksS0FBSyxNQUFNLE9BQU8sSUFBSTtBQUN4RyxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUk7QUFDN0QsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUc7QUFDMUQsVUFBSSxZQUFZO0FBQ2hCLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFHLEtBQUksU0FBUyxJQUFJLEtBQUssSUFBSSxJQUFJLEtBQUssR0FBRztBQUFBLElBQ2xFO0FBRUE7QUFDRSxZQUFNLElBQUk7QUFDVixZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxJQUFJLElBQUksTUFBTSxHQUFHLENBQUM7QUFDekQsU0FBRyxhQUFhLEdBQUcsa0JBQWtCO0FBQUcsU0FBRyxhQUFhLEdBQUcscUJBQXFCO0FBQ2hGLFVBQUksWUFBWTtBQUFJLFVBQUksU0FBUyxHQUFHLElBQUksSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJO0FBQzdELFVBQUksWUFBWTtBQUF1QixVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUM5RCxVQUFJLFlBQVk7QUFBMEIsVUFBSSxTQUFTLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNyRSxVQUFJLFlBQVk7QUFBdUIsVUFBSSxTQUFTLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ3BFO0FBRUEsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsWUFBTSxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxLQUFLLFFBQVEsSUFBSSxJQUFJLE9BQU8sS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLE1BQU0sT0FBTyxJQUFJLElBQUksT0FBTztBQUM1SCxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHO0FBQzNCLGNBQU0sT0FBTyxJQUFJLHFCQUFxQixJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUUsSUFBSSxHQUFHO0FBQ3pGLGFBQUssYUFBYSxHQUFHLHFCQUFxQjtBQUFHLGFBQUssYUFBYSxLQUFLLHFCQUFxQjtBQUFHLGFBQUssYUFBYSxHQUFHLGtCQUFrQjtBQUNuSSxZQUFJLFlBQVk7QUFBTSxZQUFJLFVBQVU7QUFBRyxZQUFJLFFBQVEsSUFBSSxLQUFLLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFDbkgsWUFBSSxZQUFZO0FBQXVCLFlBQUksVUFBVTtBQUFHLFlBQUksUUFBUSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLEtBQUssS0FBSyxDQUFDO0FBQUcsWUFBSSxLQUFLO0FBQ3hILFlBQUksWUFBWTtBQUFxQixZQUFJLFVBQVU7QUFBRyxZQUFJLFFBQVEsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEtBQUssR0FBRyxLQUFLLEtBQUssQ0FBQztBQUFHLFlBQUksS0FBSztBQUFBLE1BQzNKO0FBQ0EsZUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsY0FBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLE9BQU8sSUFBSSxNQUFNLElBQUksTUFBTSxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSTtBQUMzRixZQUFJLFlBQVk7QUFDaEIsbUJBQVcsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRztBQUFFLGNBQUksVUFBVTtBQUFHLGNBQUksSUFBSSxHQUFHLElBQUksSUFBSSxHQUFHLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxjQUFJLEtBQUs7QUFBQSxRQUFHO0FBQUEsTUFDckc7QUFBQSxJQUNGO0FBRUEsa0JBQWMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLE9BQU8sSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxNQUFNLElBQUksTUFBTSxJQUFJLElBQUk7QUFBQSxFQUNqSCxDQUFDO0FBQ0g7QUFPQSxTQUFTLFNBQVMsTUFBYyxNQUEwQztBQUN4RSxTQUFPLFdBQVcsTUFBTSxDQUFDLEtBQUssTUFBTTtBQUNsQyxVQUFNLE1BQU0sSUFBSSxJQUFJO0FBQ3BCLFFBQUksWUFBWTtBQUFXLFFBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2xELFVBQU0sSUFBSSxJQUFJLFFBQVEsSUFBSSxHQUFHLE1BQU07QUFDbkMsVUFBTSxLQUFLLEtBQUssSUFBSSxHQUFHLElBQUk7QUFDM0IsUUFBSSxLQUFLO0FBQ1QsYUFBUyxJQUFJLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSztBQUMvQixZQUFNLEtBQUssSUFBSTtBQUNmLGlCQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFFM0IsWUFBSSxjQUFjO0FBQXVCLFlBQUksWUFBWSxRQUFRO0FBQ2pFLFlBQUksVUFBVTtBQUFHLFlBQUksT0FBTyxJQUFJLEVBQUU7QUFBRyxZQUFJLE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQztBQUFHLFlBQUksT0FBTztBQUU3RSxZQUFJLGNBQWM7QUFBMEIsWUFBSSxZQUFZLFFBQVE7QUFDcEUsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLEtBQUssUUFBUSxLQUFLLEVBQUU7QUFBRyxZQUFJLE9BQU8sS0FBSyxRQUFRLE1BQU0sSUFBSSxLQUFLLENBQUM7QUFBRyxZQUFJLE9BQU87QUFFekcsWUFBSSxjQUFjO0FBQXVCLFlBQUksWUFBWTtBQUN6RCxpQkFBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFDM0IsZ0JBQU0sS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssUUFBUSxNQUFNLE9BQU8sS0FBSyxNQUFNO0FBQ2hGLGNBQUksVUFBVTtBQUFHLGNBQUksT0FBTyxLQUFLLFFBQVEsTUFBTSxLQUFLLFFBQVEsSUFBSTtBQUFHLGNBQUksT0FBTyxLQUFLLFFBQVEsTUFBTSxLQUFLLFFBQVEsSUFBSTtBQUFHLGNBQUksT0FBTztBQUFBLFFBQ2xJO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFDQSxRQUFJLFFBQVE7QUFFWixhQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQUM1QixZQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUk7QUFDakMsVUFBSSxZQUFZLElBQUksSUFBSSxNQUFNLHdCQUF3QjtBQUN0RCxVQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQztBQUFBLElBQ3JDO0FBQ0EsYUFBUyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDMUIsWUFBTSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLElBQUksSUFBSTtBQUM3QyxZQUFNLEtBQUssSUFBSSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ2xELFNBQUcsYUFBYSxHQUFHLGtCQUFrQjtBQUFHLFNBQUcsYUFBYSxLQUFLLHFCQUFxQjtBQUFHLFNBQUcsYUFBYSxHQUFHLGtCQUFrQjtBQUMxSCxVQUFJLFlBQVk7QUFBSSxpQkFBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRyxLQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksR0FBRyxDQUFDO0FBQUEsSUFDNUU7QUFBQSxFQUNGLENBQUM7QUFDSDtBQWVBLFNBQVMsZUFBZSxTQUE2RTtBQUNuRyxRQUFNLE1BQWtELENBQUM7QUFDekQsYUFBVyxLQUFLLE9BQU8sV0FBb0I7QUFDekMsVUFBTSxJQUFJLElBQVUsMkJBQXFCO0FBQUEsTUFDdkMsT0FBTyxJQUFVLFlBQU0sRUFBRSxLQUFLO0FBQUEsTUFDOUIsV0FBVyxFQUFFO0FBQUEsTUFDYixXQUFXLEVBQUU7QUFBQSxNQUNiLFdBQVcsUUFBUSxhQUFhO0FBQUEsTUFDaEMsTUFBTSxFQUFFLGNBQW9CLG1CQUFtQjtBQUFBLE1BQy9DLGNBQWMsRUFBRSxpQkFBaUI7QUFBQSxJQUNuQyxDQUFDO0FBQ0QsUUFBSSxFQUFFLG9CQUFvQixPQUFXLEdBQUUsa0JBQWtCLEVBQUU7QUFHM0QsUUFBSSxFQUFFLGFBQWEsUUFBVztBQUFFLFFBQUUsV0FBVyxJQUFVLFlBQU0sRUFBRSxRQUFRO0FBQUcsUUFBRSxvQkFBb0IsRUFBRSxxQkFBcUI7QUFBQSxJQUFHO0FBQzFILFFBQUksRUFBRSxZQUFZLFFBQVc7QUFBRSxRQUFFLGNBQWM7QUFBTSxRQUFFLFVBQVUsRUFBRTtBQUFTLFFBQUUsYUFBYTtBQUFBLElBQU07QUFHakcsUUFBSSxFQUFFLGNBQWMsUUFBVztBQUFFLFFBQUUsWUFBWSxFQUFFO0FBQVcsUUFBRSxjQUFjO0FBQUEsSUFBTztBQUNuRixNQUFFLE9BQU8sRUFBRTtBQUNYLFFBQUksRUFBRSxFQUFFLElBQUk7QUFBQSxFQUNkO0FBQ0EsU0FBTztBQUNUO0FBSU8sU0FBUyxvQ0FBb0MsVUFBa0MsQ0FBQyxHQUFnQjtBQUNyRyxRQUFNLE9BQU8sSUFBVSxZQUFNO0FBQzdCLE9BQUssT0FBTztBQUVaLFFBQU0sWUFBWSxlQUFlLE9BQU87QUFDeEMsUUFBTSxRQUF3QyxDQUFDO0FBQy9DLFFBQU0sU0FBcUMsQ0FBQztBQUM1QyxRQUFNLFVBQTBDLENBQUM7QUFDakQsUUFBTSxZQUFxQyxDQUFDO0FBQzVDLFFBQU0sb0JBQXNELENBQUM7QUFDN0QsUUFBTSxhQUFhLFFBQVEsY0FBYztBQUN6QyxRQUFNLGdCQUFnQixRQUFRLGlCQUFpQjtBQWEvQyxXQUFTLGtCQUFrQixLQUEyQixLQUFpQztBQUNyRixRQUFJLENBQUMsT0FBTyxDQUFDLElBQUksZ0JBQWdCLElBQUksYUFBYSxPQUFPLEVBQUc7QUFDNUQsVUFBTSxJQUFJLElBQUksYUFBYSxVQUFVLEVBQUU7QUFDdkMsUUFBSSxhQUFhLFNBQVMsSUFBVSxzQkFBZ0IsSUFBSSxhQUFhLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUFBLEVBQ3pGO0FBRUEsV0FBUyxJQUFJLElBQVksTUFBYyxLQUEyQixPQUFlO0FBQy9FLFVBQU0sT0FBTyxJQUFVLFlBQU07QUFBRyxTQUFLLE9BQU8sT0FBTztBQUNuRCxzQkFBa0IsS0FBSyxVQUFVLEtBQUssQ0FBQztBQUN2QyxVQUFNLE9BQU8sSUFBVSxXQUFLLEtBQUssVUFBVSxLQUFLLENBQUM7QUFDakQsU0FBSyxPQUFPO0FBQU0sU0FBSyxhQUFhO0FBQVksU0FBSyxnQkFBZ0I7QUFDckUsU0FBSyxJQUFJLElBQUk7QUFBRyxTQUFLLElBQUksSUFBSTtBQUM3QixVQUFNLEVBQUUsSUFBSTtBQUFNLFdBQU8sRUFBRSxJQUFJO0FBQU0sY0FBVSxFQUFFLElBQUk7QUFDckQsV0FBTztBQUFBLEVBQ1Q7QUFDQSxXQUFTLFFBQVEsSUFBWSxNQUFjLEtBQTJCLE9BQWUsTUFBdUIsTUFBaUI7QUFDM0gsVUFBTSxPQUFPLElBQVUsWUFBTTtBQUFHLFNBQUssT0FBTyxPQUFPO0FBQ25ELHNCQUFrQixLQUFLLFVBQVUsS0FBSyxDQUFDO0FBQ3ZDLFVBQU0sT0FBTyxJQUFVLG9CQUFjLEtBQUssVUFBVSxLQUFLLEdBQUcsS0FBSyxNQUFNO0FBQ3ZFLFNBQUssT0FBTztBQUFNLFNBQUssYUFBYTtBQUFZLFNBQUssZ0JBQWdCO0FBQ3JFLGFBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLElBQUssTUFBSyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDakUsUUFBSSxNQUFNO0FBR1IsWUFBTSxJQUFJLElBQVUsWUFBTTtBQUMxQixlQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxJQUFLLE1BQUssV0FBVyxHQUFHLEVBQUUsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzFFLFVBQUksS0FBSyxjQUFlLE1BQUssY0FBYyxjQUFjO0FBQUEsSUFDM0Q7QUFDQSxTQUFLLGVBQWUsY0FBYztBQUNsQyxTQUFLLElBQUksSUFBSTtBQUFHLFNBQUssSUFBSSxJQUFJO0FBQzdCLFVBQU0sRUFBRSxJQUFJO0FBQU0sV0FBTyxFQUFFLElBQUk7QUFBK0IsY0FBVSxFQUFFLElBQUk7QUFDOUUsV0FBTztBQUFBLEVBQ1Q7QUFHQSxXQUFTLEtBQUssUUFBZ0IsR0FBVyxRQUFRLEdBQW9CO0FBQ25FLFdBQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU07QUFDN0IsWUFBTSxJQUFJLFFBQVEsSUFBSSxLQUFLLEtBQUs7QUFDaEMsYUFBTyxJQUFVLGNBQVEsRUFBRTtBQUFBLFFBQ3pCLElBQVUsY0FBUSxLQUFLLElBQUksQ0FBQyxJQUFJLFFBQVEsR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLE1BQU07QUFBQSxRQUMvRCxJQUFVLGlCQUFXLEVBQUUsaUJBQWlCLElBQVUsY0FBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFBQSxRQUNyRSxJQUFVLGNBQVEsR0FBRyxHQUFHLENBQUM7QUFBQSxNQUFDO0FBQUEsSUFDOUIsQ0FBQztBQUFBLEVBQ0g7QUFFQSxRQUFNLElBQUksT0FBTztBQU9qQixhQUFXLEtBQUssRUFBRSxZQUFxQjtBQUNyQyxVQUFNLEtBQTZCLENBQUM7QUFDcEMsZUFBVyxLQUFNLEVBQUUsU0FBUyxDQUFDLEVBQWtCLElBQUcsS0FBSyxRQUFRLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdEYsZUFBVyxLQUFLLFFBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFnQixFQUFHLElBQUcsS0FBSyxRQUFRLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkcsZUFBVyxLQUFNLEVBQUUsU0FBUyxDQUFDLEVBQWEsSUFBRyxLQUFLLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUdyRixlQUFXLEtBQU0sRUFBRSxVQUFVLENBQUMsRUFBYSxJQUFHLEtBQUssVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsS0FBSyxDQUFDO0FBQzdHLGVBQVcsTUFBTyxFQUFFLFVBQVUsQ0FBQyxFQUFhLElBQUcsS0FBSyxNQUFNLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUMvRixlQUFXLE1BQU8sRUFBRSxRQUFRLENBQUMsR0FBYTtBQUl4QyxZQUFNQyxLQUFJLElBQVUsdUJBQWlCLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsT0FBTyxJQUFJLEdBQUcsR0FBRyxRQUFRLE9BQU8sR0FBRyxPQUFPLEdBQUcsR0FBRyxTQUFTLEtBQUssS0FBSyxDQUFDO0FBQ2hJLFVBQUksR0FBRyxPQUFPO0FBQUUsY0FBTSxLQUFLQSxHQUFFLGFBQWEsSUFBSTtBQUFHLGlCQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsT0FBTyxJQUFLLElBQUcsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUM7QUFBQSxNQUFHO0FBR3JKLFVBQUksR0FBRyxRQUFRO0FBQUUsY0FBTSxLQUFLQSxHQUFFLGFBQWEsSUFBSSxHQUFHLE1BQU0sR0FBRyxPQUFPLE1BQU0sS0FBSztBQUFHLGlCQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSyxJQUFHLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFBQSxNQUFHO0FBR3JKLFVBQUksR0FBRyxPQUFPO0FBQUUsUUFBQUEsR0FBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQUcsUUFBQUEsR0FBRSxxQkFBcUI7QUFBQSxNQUFHO0FBSTFGLFVBQUksRUFBRSxPQUFPLE9BQVEsUUFBT0EsSUFBRyxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsV0FBVyxHQUFHLEdBQUcsUUFBUSxDQUFDO0FBQ3hFLFVBQUksR0FBRyxHQUFJLENBQUFBLEdBQUUsUUFBUSxHQUFHLEVBQUU7QUFBRyxVQUFJLEdBQUcsR0FBSSxDQUFBQSxHQUFFLFFBQVEsR0FBRyxFQUFFO0FBQUcsVUFBSSxHQUFHLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEdBQUcsRUFBRTtBQUNwRixNQUFBQSxHQUFFLFVBQVUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFBRyxTQUFHLEtBQUssUUFBUUEsSUFBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQ3ZFO0FBQ0EsZUFBVyxLQUFNLEVBQUUsVUFBVSxDQUFDLEdBQWE7QUFLekMsWUFBTUEsS0FBSSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sSUFBSSxHQUFHLEVBQUUsVUFBVSxPQUFPLEVBQUUsYUFBYSxJQUFJO0FBQzdFLFVBQUksRUFBRSxPQUFPO0FBQUUsY0FBTSxLQUFLLE1BQU0sUUFBUSxFQUFFLEtBQUssSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7QUFBRyxnQkFBUUEsSUFBSUEsR0FBRSxhQUFhLFVBQVUsRUFBRSxVQUFVLEVBQUUsT0FBTyxNQUFNLEtBQU0sR0FBRyxFQUFFLE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQUEsTUFBRztBQUNyTSxVQUFJLEVBQUUsT0FBTztBQUFFLFFBQUFBLEdBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUFHLFFBQUFBLEdBQUUscUJBQXFCO0FBQUEsTUFBRztBQUl0RixVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQUcsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUFHLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFDOUUsTUFBQUEsR0FBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQUcsU0FBRyxLQUFLLFFBQVFBLElBQUcsRUFBRSxHQUFHLENBQUM7QUFBQSxJQUNuRTtBQUtBLGVBQVcsS0FBTSxFQUFFLFNBQVMsQ0FBQyxHQUFhO0FBQ3hDLFlBQU1BLEtBQUksV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sSUFBSSxFQUFFLFFBQVEsRUFBRSxXQUFXLElBQUk7QUFDbkYsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUFHLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFBRyxVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQzlFLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUkvQyxVQUFJLEVBQUUsVUFBVSxFQUFFLFFBQVEsUUFBVztBQUNuQyxjQUFNLE1BQU1BLEdBQUUsYUFBYSxPQUFPO0FBQ2xDLGNBQU0sSUFBSSxJQUFVLFlBQU0sRUFBRSxHQUFHO0FBQy9CLGlCQUFTLElBQUksR0FBRyxJQUFJLElBQUksT0FBTyxJQUFLLEtBQUksT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pHLFdBQUcsS0FBS0EsRUFBQztBQUFBLE1BQ1gsTUFBTyxJQUFHLEtBQUssRUFBRSxTQUFTQSxLQUFJLFFBQVFBLElBQUcsRUFBRSxHQUFHLENBQUM7QUFBQSxJQUNqRDtBQUNBLGVBQVcsS0FBTSxFQUFFLFVBQVUsQ0FBQyxHQUFhO0FBR3pDLFlBQU1BLEtBQUksSUFBVSxvQkFBYyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUNoRCxNQUFBQSxHQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDckMsWUFBTSxLQUFLQSxHQUFFLGFBQWEsSUFBSTtBQUM5QixlQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsT0FBTyxJQUFLLElBQUcsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQzdHLFNBQUcsS0FBSyxRQUFRQSxJQUFHLEVBQUUsR0FBRyxDQUFDO0FBQUEsSUFDM0I7QUFDQSxlQUFXLEtBQU0sRUFBRSxZQUFZLENBQUMsR0FBYTtBQUczQyxZQUFNLFFBQVEsSUFBVSxZQUFNO0FBQzlCLFlBQU0sT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QyxlQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsS0FBSyxRQUFRLElBQUssT0FBTSxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQy9FLFlBQU0sVUFBVTtBQUNoQixpQkFBVyxLQUFNLEVBQUUsU0FBUyxDQUFDLEdBQW9CO0FBQy9DLGNBQU0sS0FBSyxJQUFVLFdBQUs7QUFBRyxXQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2RCxpQkFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsSUFBSyxJQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3RCxXQUFHLFVBQVU7QUFBRyxjQUFNLE1BQU0sS0FBSyxFQUFFO0FBQUEsTUFDckM7QUFDQSxZQUFNQSxLQUFJLGNBQWMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFO0FBQ3pDLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsUUFBUSxFQUFFLEVBQUU7QUFDeEIsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUN4QixVQUFJLEVBQUUsR0FBSSxDQUFBQSxHQUFFLFFBQVEsRUFBRSxFQUFFO0FBQ3hCLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMvQyxTQUFHLEtBQUssUUFBUUEsSUFBRyxFQUFFLEdBQUcsQ0FBQztBQUFBLElBQzNCO0FBSUEsZUFBVyxLQUFNLEVBQUUsY0FBYyxDQUFDLEdBQWtCO0FBQ2xELFlBQU1BLEtBQUksSUFBVSxxQkFBZSxHQUFHLEVBQUUsRUFBRSxLQUFLLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRTtBQUM5RCxNQUFBQSxHQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDeEIsVUFBSSxFQUFFLENBQUMsRUFBRyxDQUFBQSxHQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFBRyxVQUFJLEVBQUUsQ0FBQyxFQUFHLENBQUFBLEdBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUFHLFVBQUksRUFBRSxDQUFDLEVBQUcsQ0FBQUEsR0FBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLE1BQUFBLEdBQUUsVUFBVSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUM1QixTQUFHLEtBQUssUUFBUUEsSUFBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQUEsSUFDMUI7QUFHQSxlQUFXLEtBQU0sRUFBRSxVQUFVLENBQUMsRUFBa0IsSUFBRyxLQUFLLFFBQVEsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMxRixlQUFXLEtBQU0sRUFBRSxVQUFVLENBQUMsRUFBYSxJQUFHLEtBQUssUUFBUSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFHeEYsZUFBVyxLQUFNLEVBQUUsVUFBVSxDQUFDLEdBQWE7QUFJekMsWUFBTUEsS0FBSSxNQUFNLENBQUM7QUFDakIsU0FBRyxLQUFLLEVBQUUsYUFBYSxTQUFZQSxLQUFJLFFBQVFBLElBQUcsRUFBRSxHQUFHLENBQUM7QUFBQSxJQUMxRDtBQUdBLGVBQVcsS0FBTSxFQUFFLGNBQWMsQ0FBQyxHQUFhO0FBQzdDLFlBQU1BLEtBQUksVUFBVSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUU7QUFDM0MsVUFBSSxFQUFFLEdBQUksQ0FBQUEsR0FBRSxRQUFRLEVBQUUsRUFBRTtBQUFHLFVBQUksRUFBRSxHQUFJLENBQUFBLEdBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFB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QUFNLEVBQUUsUUFBUSxDQUFDO0FBQzFGLFFBQUksRUFBRSxTQUFTLFNBQVUsT0FBTSxXQUFXLEVBQUUsUUFBUSxLQUFLLEVBQUUsVUFBVSxJQUFJLEVBQUUsUUFBUSxDQUFDO0FBQ3BGLFFBQUksRUFBRSxTQUFTLFVBQVcsT0FBTSxXQUFXLEVBQUUsUUFBUSxLQUFLLEVBQUUsU0FBUyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEdBQUcsQ0FBQztBQUNoRyxRQUFJLEVBQUUsU0FBUyxTQUFVLE9BQU0sV0FBVyxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ25GLFFBQUksRUFBRSxTQUFTLFNBQVUsT0FBTSxXQUFXLEVBQUUsUUFBUSxLQUFLLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFDeEUsUUFBSSxFQUFFLFNBQVMsUUFBUyxPQUFNLFVBQVUsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLElBQUksQ0FBQztBQUN0RSxRQUFJLEVBQUUsU0FBUyxPQUFRLE9BQU0sU0FBUyxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsSUFBSSxDQUFDO0FBQ3BFLFFBQUksRUFBRSxTQUFTLE9BQVEsT0FBTSxTQUFTLEVBQUUsUUFBUSxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQ2pFLFFBQUksRUFBRSxTQUFTLE9BQVEsT0FBTSxTQUFTLEVBQUUsUUFBUSxLQUFLLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFDcEUsUUFBSSxFQUFFLFNBQVMsU0FBVSxPQUFNLFdBQVcsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLElBQUksQ0FBQztBQUN4RSxRQUFJLEVBQUUsU0FBUyxPQUFRLE9BQU0sU0FBUyxFQUFFLFFBQVEsS0FBSyxFQUFFLFFBQVEsSUFBSSxDQUFDO0FBQ3BFLFFBQUksRUFBRSxTQUFTLE9BQVEsT0FBTSxTQUFTLEVBQUUsUUFBUSxLQUFLLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFDcEUsUUFBSSxFQUFFLFNBQVMsUUFBUyxPQUFNLFVBQVUsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDbkUsUUFBSSxFQUFFLFNBQVMsT0FBUSxPQUFNLFNBQVMsRUFBRSxRQUFRLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDakUsYUFBUyxLQUFLLEtBQUssRUFBRSxRQUFRLENBQUM7QUFBQSxFQUNoQztBQUVBLE9BQUssU0FBUyxnQkFBZ0IsRUFBRSxPQUFPLFFBQVEsU0FBUyxXQUFXLGtCQUFrQjtBQUNyRixTQUFPO0FBQ1Q7QUFTTyxTQUFTLGtCQUFrQixNQUFnQixVQUFrQyxDQUFDLEdBQWdCO0FBQ25HLFFBQU0sT0FBTyxvQ0FBb0MsT0FBTztBQUN4RCxNQUFJLFNBQVMsVUFBYSxTQUFTLEtBQU0sTUFBSyxTQUFTLGFBQWE7QUFFcEUsUUFBTSxLQUFLLEtBQUssU0FBUztBQUN6QixNQUFJLElBQUk7QUFDTixVQUFNLFFBQVMsR0FBRyxTQUFTLENBQUM7QUFPNUIsVUFBTSxTQUEyQixDQUFDO0FBQ2xDLFVBQU0sWUFBWSxJQUFVLGVBQVM7QUFDckMsY0FBVSxPQUFPO0FBQ2pCLGNBQVUsU0FBUyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQzlCLGNBQVUsU0FBUyxnQkFBZ0I7QUFBQSxNQUNqQyxlQUFlO0FBQUEsTUFDZixPQUFPLEVBQUUsTUFBTSxVQUFVLGVBQWUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sT0FBTztBQUFBLElBQ25GO0FBQ0EsU0FBSyxJQUFJLFNBQVM7QUFDbEIsV0FBTyxLQUFLLFNBQVM7QUFDckIsZUFBVyxNQUFPLE9BQU8sVUFBVSxDQUFDLEdBQWE7QUFDL0MsWUFBTSxJQUFJLElBQVUsZUFBUztBQUM3QixRQUFFLE9BQU8sR0FBRztBQUNaLFFBQUUsU0FBUyxJQUFJLEdBQUcsU0FBUyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQzdELFFBQUUsU0FBUyxnQkFBZ0I7QUFBQSxRQUN6QixlQUFlO0FBQUEsUUFDZixPQUFPO0FBQUEsVUFBRSxNQUFNO0FBQUEsVUFBVSxlQUFlLEdBQUc7QUFBQSxVQUFVLE1BQU0sR0FBRztBQUFBLFVBQU0sTUFBTSxHQUFHO0FBQUEsVUFDcEUsV0FBVyxHQUFHO0FBQUEsVUFBVyxVQUFVLEdBQUcsWUFBWTtBQUFBLFVBQU0sT0FBTyxHQUFHLFFBQVE7QUFBQSxRQUFHO0FBQUEsTUFDeEY7QUFDQSxXQUFLLElBQUksQ0FBQztBQUNWLGFBQU8sS0FBSyxDQUFDO0FBQUEsSUFDZjtBQVFBLFVBQU0sWUFBWSxPQUFPLFFBQVMsR0FBRyxhQUFhLENBQUMsQ0FBeUIsRUFDekUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUN6RSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxHQUFJLEVBQWEsRUFBRTtBQUtwRCxVQUFNLFVBQVUsb0JBQUksSUFBOEI7QUFDbEQsZUFBVyxDQUFDLE1BQU0sT0FBTyxLQUFLLE9BQU8sUUFBUyxHQUFHLHFCQUFxQixDQUFDLENBQXNDLEdBQUc7QUFDOUcsY0FBUSxJQUFJLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUFBLElBQ2hDO0FBQ0EsZUFBVyxRQUFRLE9BQU8sT0FBTyxLQUFLLEdBQUc7QUFDdkMsWUFBTSxRQUFTLE1BQWMsVUFBVSxlQUFlLGFBQWE7QUFDbkUsVUFBSSxPQUFPLFVBQVUsWUFBWSxDQUFDLE1BQU87QUFDekMsVUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEVBQUcsU0FBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLGNBQVEsSUFBSSxLQUFLLEVBQUcsS0FBSyxJQUFJO0FBQUEsSUFDL0I7QUFFQSxTQUFLLFNBQVMsZ0JBQWdCO0FBQUEsTUFDNUIsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLSCxPQUFPLE9BQU8sS0FBSyxLQUFLLEVBQUU7QUFBQSxNQUMxQjtBQUFBLE1BQ0EsU0FBUyxPQUFPLE9BQVEsR0FBRyxXQUFXLENBQUMsQ0FBb0M7QUFBQSxNQUMzRTtBQUFBLE1BQ0EsbUJBQW1CLENBQUMsR0FBRyxRQUFRLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sT0FBTyxPQUFPLEVBQUUsTUFBTSxRQUFRLEVBQUU7QUFBQSxNQUN0RixNQUFNLEVBQUUsT0FBTyxRQUFRLEdBQUcsVUFBVSxDQUFDLEdBQUcsU0FBUyxHQUFHLFdBQVcsQ0FBQyxFQUFFO0FBQUEsSUFDcEU7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBV08sU0FBUyxZQUFZLFVBQWtDLENBQUMsR0FBZ0I7QUFDN0UsU0FBTyxrQkFBa0IsUUFBVyxPQUFPO0FBQzdDOyIsCiAgIm5hbWVzIjogWyJyZ2IiLCAiZTEiLCAiZTIiLCAicmdiIiwgImciXQp9Cg==
