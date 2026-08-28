/**
 * Stage 1b: cells.
 *
 * After flatten() every mesh node is a scene child with its world transform.
 * Static ones move under cell_<ix>_<iz>/lod0 so a later join() merges siblings
 * within a cell and never across one; dynamic placements keep their own node
 * at the placement's transform so a physics body can move them whole.
 */
/** The three mat4 operations this stage needs, column-major like glTF. */
const mat4 = {
  create: () => new Float64Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
  fromRotationTranslationScale(out, q, v, s) {
    const [x, y, z, w] = q;
    const x2 = x + x, y2 = y + y, z2 = z + z;
    const xx = x * x2, xy = x * y2, xz = x * z2, yy = y * y2, yz = y * z2, zz = z * z2, wx = w * x2, wy = w * y2, wz = w * z2;
    out[0] = (1 - (yy + zz)) * s[0]; out[1] = (xy + wz) * s[0]; out[2] = (xz - wy) * s[0]; out[3] = 0;
    out[4] = (xy - wz) * s[1]; out[5] = (1 - (xx + zz)) * s[1]; out[6] = (yz + wx) * s[1]; out[7] = 0;
    out[8] = (xz + wy) * s[2]; out[9] = (yz - wx) * s[2]; out[10] = (1 - (xx + yy)) * s[2]; out[11] = 0;
    out[12] = v[0]; out[13] = v[1]; out[14] = v[2]; out[15] = 1;
    return out;
  },
  multiply(out, a, b) {
    const r = new Float64Array(16);
    for (let c = 0; c < 4; c += 1) for (let rI = 0; rI < 4; rI += 1) {
      let sum = 0;
      for (let k = 0; k < 4; k += 1) sum += a[k * 4 + rI] * b[c * 4 + k];
      r[c * 4 + rI] = sum;
    }
    out.set(r);
    return out;
  },
  invert(out, m) {
    const a = m;
    const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3], a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11], a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    const b00 = a00 * a11 - a01 * a10, b01 = a00 * a12 - a02 * a10, b02 = a00 * a13 - a03 * a10, b03 = a01 * a12 - a02 * a11;
    const b04 = a01 * a13 - a03 * a11, b05 = a02 * a13 - a03 * a12, b06 = a20 * a31 - a21 * a30, b07 = a20 * a32 - a22 * a30;
    const b08 = a20 * a33 - a23 * a30, b09 = a21 * a32 - a22 * a31, b10 = a21 * a33 - a23 * a31, b11 = a22 * a33 - a23 * a32;
    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) throw new Error('singular placement matrix');
    det = 1 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det; out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det; out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det; out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det; out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det; out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det; out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det; out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det; out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
  },
};

export const cellName = (ix, iz) => `cell_${ix}_${iz}`;

function placementMatrix(p) {
  const q = quatFromEuler(p.rotation);
  return mat4.fromRotationTranslationScale(mat4.create(), q, p.position, p.scale);
}

function quatFromEuler([x, y, z]) {
  // XYZ order, matching THREE.Euler default.
  const c1 = Math.cos(x / 2), c2 = Math.cos(y / 2), c3 = Math.cos(z / 2);
  const s1 = Math.sin(x / 2), s2 = Math.sin(y / 2), s3 = Math.sin(z / 2);
  return [
    s1 * c2 * c3 + c1 * s2 * s3,
    c1 * s2 * c3 - s1 * c2 * s3,
    c1 * c2 * s3 + s1 * s2 * c3,
    c1 * c2 * c3 - s1 * s2 * s3,
  ];
}

export function partitionCells({ bake }) {
  return (doc) => {
    const scene = doc.getRoot().listScenes()[0];
    const byPlacement = new Map(bake.placements.map((p) => [p.id, p]));
    const cells = new Map();
    const dynamic = new Map();
    const stray = [];

    const cellNode = (key, ix, iz) => {
      if (!cells.has(key)) {
        const node = doc.createNode(cellName(ix, iz));
        const lod0 = doc.createNode('lod0');
        node.addChild(lod0);
        node.setExtras({ tk: { kind: 'cell', key, ix, iz } });
        scene.addChild(node);
        cells.set(key, { node, lod0, ix, iz });
      }
      return cells.get(key);
    };

    for (const node of [...scene.listChildren()]) {
      const tk = node.getExtras()?.tk;
      if (!tk || tk.kind !== 'placement' || !node.getMesh()) continue;
      const p = byPlacement.get(tk.placement);
      if (!p) { stray.push(node.getName()); continue; }
      scene.removeChild(node);
      if (p.static) {
        cellNode(p.cell, p.ix, p.iz).lod0.addChild(node);
        node.setExtras({});
      } else {
        let holder = dynamic.get(p.id);
        if (!holder) {
          holder = doc.createNode(`dynamic/${p.id}`);
          const m = placementMatrix(p);
          holder.setMatrix(Array.from(m));
          holder.setExtras({ tk: { kind: 'dynamic', placement: p.id, asset: p.ref } });
          scene.addChild(holder);
          dynamic.set(p.id, holder);
        }
        // World -> placement-local, so the holder's transform IS the placement.
        const inv = mat4.invert(mat4.create(), placementMatrix(p));
        const local = mat4.multiply(mat4.create(), inv, node.getWorldMatrix());
        node.setMatrix(Array.from(local));
        node.setExtras({});
        holder.addChild(node);
      }
    }
    return { cells, dynamic, stray };
  };
}
