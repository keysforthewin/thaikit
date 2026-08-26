import * as THREE from 'three';

export type ProceduralModelOptions = {
  wireframe?: boolean;
  castShadow?: boolean;
  receiveShadow?: boolean;
  textureSize?: number;
  textureAnisotropy?: number;
  qualityPriority?: 'reference-fidelity' | 'balanced';
};

export type ProceduralModelRuntime = {
  nodes: Record<string, THREE.Object3D>;
  meshes: Record<string, THREE.Mesh>;
  sockets: Record<string, THREE.Object3D>;
  colliders: Record<string, unknown>;
  destructionGroups: Record<string, THREE.Object3D[]>;
};

type SculptMaterialSpec = Record<string, any>;

type SdfVector = readonly [number, number, number];
type SdfTransform = { position?: SdfVector; translation?: SdfVector; rotation?: SdfVector; scale?: SdfVector };
type SdfPrimitive = {
  readonly id: string;
  readonly type: 'sphere' | 'capsule' | 'box' | 'cone' | 'ellipsoid';
  readonly center?: SdfVector;
  readonly radius?: number | SdfVector;
  readonly height?: number;
  readonly size?: SdfVector;
  readonly dimensions?: SdfVector;
  readonly radii?: SdfVector;
  readonly transform?: SdfTransform;
};
type SdfOperation = {
  readonly id?: string;
  readonly output?: string;
  readonly type: 'smooth-union' | 'subtract' | 'intersect';
  readonly left: string;
  readonly right: string;
  readonly radius?: number;
};
type SdfDescriptor = {
  readonly primitives: readonly SdfPrimitive[];
  readonly operations?: readonly SdfOperation[];
  readonly resolution: number;
  readonly bounds?: { readonly min: SdfVector; readonly max: SdfVector };
};
type SdfFunction = (point: THREE.Vector3) => number;

function sdfSphere(point: THREE.Vector3, radius: number): number {
  return point.length() - radius;
}

function sdfCapsule(point: THREE.Vector3, radius: number, height: number): number {
  const halfHeight = height * 0.5;
  const y = Math.max(-halfHeight, Math.min(halfHeight, point.y));
  return point.distanceTo(new THREE.Vector3(0, y, 0)) - radius;
}

function sdfBox(point: THREE.Vector3, size: SdfVector): number {
  const q = new THREE.Vector3(Math.abs(point.x), Math.abs(point.y), Math.abs(point.z))
    .sub(new THREE.Vector3(size[0] * 0.5, size[1] * 0.5, size[2] * 0.5));
  return q.clone().max(new THREE.Vector3()).length() + Math.min(Math.max(q.x, q.y, q.z), 0);
}

function sdfCone(point: THREE.Vector3, radius: number, height: number): number {
  const halfHeight = height * 0.5;
  const taper = radius * (1 - (point.y + halfHeight) / height);
  return Math.max(Math.hypot(point.x, point.z) - Math.max(0, taper), Math.abs(point.y) - halfHeight);
}

function sdfEllipsoid(point: THREE.Vector3, radii: SdfVector): number {
  const scaled = new THREE.Vector3(point.x / radii[0], point.y / radii[1], point.z / radii[2]);
  return (scaled.length() - 1) * Math.min(radii[0], radii[1], radii[2]);
}

function sdfRadii(primitive: SdfPrimitive): SdfVector {
  const radius = primitive.radius;
  if (primitive.radii) return primitive.radii;
  if (typeof radius === 'number') return [radius, radius, radius];
  return radius ?? [0.5, 0.5, 0.5];
}

function smin(left: number, right: number, radius: number): number {
  const blend = Math.max(radius - Math.abs(left - right), 0) / radius;
  return Math.min(left, right) - blend * blend * radius * 0.25;
}

function sdfLocalPoint(point: THREE.Vector3, primitive: SdfPrimitive): { point: THREE.Vector3; scale: number } {
  const transform = primitive.transform;
  const translation = transform?.position ?? transform?.translation ?? primitive.center ?? [0, 0, 0];
  const rotation = transform?.rotation ?? [0, 0, 0];
  const scale = transform?.scale ?? [1, 1, 1];
  const local = point.clone().sub(new THREE.Vector3(translation[0], translation[1], translation[2]));
  const inverseRotation = new THREE.Quaternion()
    .setFromEuler(new THREE.Euler(rotation[0], rotation[1], rotation[2]))
    .invert();
  local.applyQuaternion(inverseRotation);
  local.set(local.x / scale[0], local.y / scale[1], local.z / scale[2]);
  return { point: local, scale: Math.min(scale[0], scale[1], scale[2]) };
}

function sdfPrimitive(point: THREE.Vector3, primitive: SdfPrimitive): number {
  const local = sdfLocalPoint(point, primitive);
  let distance: number;
  switch (primitive.type) {
    case 'sphere':
      distance = sdfSphere(local.point, typeof primitive.radius === 'number' ? primitive.radius : 0.5);
      break;
    case 'capsule':
      distance = sdfCapsule(local.point, typeof primitive.radius === 'number' ? primitive.radius : 0.25, primitive.height ?? 1);
      break;
    case 'box':
      distance = sdfBox(local.point, primitive.size ?? primitive.dimensions ?? [1, 1, 1]);
      break;
    case 'cone':
      distance = sdfCone(local.point, typeof primitive.radius === 'number' ? primitive.radius : 0.5, primitive.height ?? 1);
      break;
    case 'ellipsoid':
      distance = sdfEllipsoid(local.point, sdfRadii(primitive));
      break;
  }
  return distance * local.scale;
}

function sdfSample(descriptor: SdfDescriptor): SdfFunction {
  const nodes = new Map<string, SdfFunction>();
  for (const primitive of descriptor.primitives) nodes.set(primitive.id, (point) => sdfPrimitive(point, primitive));
  let result = descriptor.primitives.length > 0 ? nodes.get(descriptor.primitives[0].id) : undefined;
  for (let index = 0; index < (descriptor.operations?.length ?? 0); index += 1) {
    const operation = descriptor.operations?.[index];
    if (!operation) continue;
    const left = nodes.get(operation.left);
    const right = nodes.get(operation.right);
    if (!left || !right) continue;
    let combined: SdfFunction;
    switch (operation.type) {
      case 'smooth-union':
        combined = (point) => smin(left(point), right(point), operation.radius ?? 0.1);
        break;
      case 'subtract':
        combined = (point) => Math.max(left(point), -right(point));
        break;
      case 'intersect':
        combined = (point) => Math.max(left(point), right(point));
        break;
    }
    nodes.set(operation.id ?? operation.output ?? `operation-${index}`, combined);
    result = combined;
  }
  return result ?? (() => Infinity);
}

function polygonizeSdf(descriptor: SdfDescriptor): THREE.BufferGeometry {
  // SURFACE NETS, not a voxel shell.
  //
  // This used to emit one axis-aligned quad per exposed voxel face, which is a Minecraft surface:
  // every face is axis-aligned, every edge is a 90-degree step, and the result is stair-stepped at
  // exactly the scale of the sampling grid. For a subject whose whole identity is smooth blended
  // organic form -- which is the only kind of subject anyone reaches for an implicit surface to
  // build -- that is worse than the assembled primitives it was meant to replace.
  //
  // Naive surface nets places ONE vertex per sign-changing cell, at the average of the linearly
  // interpolated crossings on that cell's edges, and joins the four cells around each crossing
  // edge into a quad. It is compact, manifold, and smooth, and it is a natural fit for a field
  // that can be sampled anywhere rather than only at corners.
  //
  // Normals come from the field GRADIENT, not from face averaging: the gradient is the exact
  // surface normal of the implicit surface, so shading no longer carries the grid's imprint.
  const resolution = Math.max(4, Math.min(64, Math.floor(descriptor.resolution)));
  const defaultBounds: { readonly min: SdfVector; readonly max: SdfVector } = { min: [-2, -2, -2], max: [2, 2, 2] };
  const bounds = descriptor.bounds ?? defaultBounds;
  const min = new THREE.Vector3(bounds.min[0], bounds.min[1], bounds.min[2]);
  const step = new THREE.Vector3(
    (bounds.max[0] - bounds.min[0]) / resolution,
    (bounds.max[1] - bounds.min[1]) / resolution,
    (bounds.max[2] - bounds.min[2]) / resolution,
  );
  const sample = sdfSample(descriptor);
  const scratch = new THREE.Vector3();

  // Corner grid: one more corner than cells on each axis.
  const side = resolution + 1;
  const field = new Float32Array(side * side * side);
  const cornerAt = (x: number, y: number, z: number): number => (z * side + y) * side + x;
  for (let z = 0; z < side; z += 1) {
    for (let y = 0; y < side; y += 1) {
      for (let x = 0; x < side; x += 1) {
        scratch.set(min.x + x * step.x, min.y + y * step.y, min.z + z * step.z);
        field[cornerAt(x, y, z)] = sample(scratch);
      }
    }
  }

  // The 12 cell edges as corner-offset pairs.
  const CUBE_EDGES: readonly (readonly [number, number, number, number, number, number])[] = [
    [0, 0, 0, 1, 0, 0], [1, 0, 0, 1, 1, 0], [0, 1, 0, 1, 1, 0], [0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 0, 1], [1, 0, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1], [0, 0, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 0, 1], [1, 1, 0, 1, 1, 1], [0, 1, 0, 0, 1, 1],
  ];

  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];
  const cellVertex = new Int32Array(resolution * resolution * resolution).fill(-1);
  const cellAt = (x: number, y: number, z: number): number => (z * resolution + y) * resolution + x;

  // Central-difference gradient, stepped at a fraction of a cell so it follows the field rather
  // than the grid.
  const epsilon = Math.min(step.x, step.y, step.z) * 0.25;
  const gradient = (point: THREE.Vector3): THREE.Vector3 => {
    const gx = sample(scratch.set(point.x + epsilon, point.y, point.z))
      - sample(scratch.set(point.x - epsilon, point.y, point.z));
    const gy = sample(scratch.set(point.x, point.y + epsilon, point.z))
      - sample(scratch.set(point.x, point.y - epsilon, point.z));
    const gz = sample(scratch.set(point.x, point.y, point.z + epsilon))
      - sample(scratch.set(point.x, point.y, point.z - epsilon));
    const normal = new THREE.Vector3(gx, gy, gz);
    // A point where the field is flat has no defined normal; +Y is arbitrary but finite, and
    // leaving a zero vector would poison every lighting calculation downstream.
    return normal.lengthSq() < 1e-20 ? new THREE.Vector3(0, 1, 0) : normal.normalize();
  };

  for (let z = 0; z < resolution; z += 1) {
    for (let y = 0; y < resolution; y += 1) {
      for (let x = 0; x < resolution; x += 1) {
        let crossings = 0;
        let sumX = 0;
        let sumY = 0;
        let sumZ = 0;
        for (const [ax, ay, az, bx, by, bz] of CUBE_EDGES) {
          const a = field[cornerAt(x + ax, y + ay, z + az)];
          const b = field[cornerAt(x + bx, y + by, z + bz)];
          if ((a <= 0) === (b <= 0)) continue;
          const t = a / (a - b);
          sumX += (ax + (bx - ax) * t);
          sumY += (ay + (by - ay) * t);
          sumZ += (az + (bz - az) * t);
          crossings += 1;
        }
        if (crossings === 0) continue;
        const px = min.x + (x + sumX / crossings) * step.x;
        const py = min.y + (y + sumY / crossings) * step.y;
        const pz = min.z + (z + sumZ / crossings) * step.z;
        cellVertex[cellAt(x, y, z)] = positions.length / 3;
        positions.push(px, py, pz);
        const normal = gradient(new THREE.Vector3(px, py, pz));
        normals.push(normal.x, normal.y, normal.z);
      }
    }
  }

  // One quad per sign-changing grid edge, joining the four cells that share it.
  //
  // Winding, worked out rather than guessed. For the +x edge from corner (x,y,z), the four cells
  // around it are (x, y-1, z-1), (x, y, z-1), (x, y, z), (x, y-1, z); in the (y,z) plane that
  // traversal is +y, +z, -y, whose cross product is +x. So when the corner is INSIDE and its
  // neighbour is outside, the unflipped order already faces out, and the flip belongs on the
  // opposite case. Getting this backwards is invisible in the normals -- those come from the
  // gradient and stay correct -- and shows only as back-face culling removing the front surface,
  // i.e. the model rendering as a hollow shell with its interior visible.
  const quad = (a: number, b: number, c: number, d: number, flip: boolean): void => {
    if (a < 0 || b < 0 || c < 0 || d < 0) return;
    if (flip) indices.push(a, c, b, a, d, c);
    else indices.push(a, b, c, a, c, d);
  };
  // Each quad joins the FOUR cells sharing one grid edge, so every one of those cells must exist.
  // Bounding only the edge axis and the lower end of the other two let y/z reach `resolution`, which
  // is a corner index, not a cell index: `cellAt` then strides into an unrelated slot (with
  // resolution 8, `cellAt(3, 8, 1)` is 131 -- the slot for cell (3, 0, 2)) or past the end of the
  // array, where a typed-array read yields `undefined`. `undefined < 0` is false, so the guard in
  // `quad` passed it through to `setIndex`, which coerces it to 0. Measured on a sphere reaching its
  // own bounds at resolution 8: 60 out-of-range reads and 108 aliased reads. A surface that touches
  // the sampling box is therefore left OPEN at that face rather than closed with wrong triangles --
  // pad `bounds` past the surface to get a closed mesh.
  for (let z = 0; z < side; z += 1) {
    for (let y = 0; y < side; y += 1) {
      for (let x = 0; x < side; x += 1) {
        const here = field[cornerAt(x, y, z)] <= 0;
        if (x + 1 < side && y > 0 && z > 0 && y < side - 1 && z < side - 1
          && here !== (field[cornerAt(x + 1, y, z)] <= 0)) {
          quad(
            cellVertex[cellAt(x, y - 1, z - 1)], cellVertex[cellAt(x, y, z - 1)],
            cellVertex[cellAt(x, y, z)], cellVertex[cellAt(x, y - 1, z)], !here,
          );
        }
        if (y + 1 < side && x > 0 && z > 0 && x < side - 1 && z < side - 1
          && here !== (field[cornerAt(x, y + 1, z)] <= 0)) {
          quad(
            cellVertex[cellAt(x - 1, y, z - 1)], cellVertex[cellAt(x - 1, y, z)],
            cellVertex[cellAt(x, y, z)], cellVertex[cellAt(x, y, z - 1)], !here,
          );
        }
        if (z + 1 < side && x > 0 && y > 0 && x < side - 1 && y < side - 1
          && here !== (field[cornerAt(x, y, z + 1)] <= 0)) {
          quad(
            cellVertex[cellAt(x - 1, y - 1, z)], cellVertex[cellAt(x, y - 1, z)],
            cellVertex[cellAt(x, y, z)], cellVertex[cellAt(x - 1, y, z)], !here,
          );
        }
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setIndex(indices);
  geometry.computeBoundingSphere();
  return geometry;
}

type TaperedStation = { position: [number, number, number]; rx: number; rz: number; twist?: number };

// Frames come from PARALLEL TRANSPORT, not from a Frenet frame. A Frenet frame is defined by
// the curve's normal, which flips sign wherever the path has an inflection or straightens out,
// and every flip twists the surface 180 degrees within one segment. Carrying the previous frame
// forward and removing only its along-path component keeps the twist continuous. THREE's own
// extrudePath and TubeGeometry do not expose this, which is why this is hand-built.
function buildTaperedSweepGeometry(
  sweep: { stations: TaperedStation[]; radialSegments?: number; capEnds?: boolean },
): THREE.BufferGeometry {
  const stations = sweep.stations;
  if (stations.length < 2) throw new Error('tapered-sweep needs at least two stations');
  const radial = Math.max(3, sweep.radialSegments ?? 10);
  const centres = stations.map((s) => new THREE.Vector3(...s.position));

  const tangents = centres.map((_, i) => {
    const prev = centres[Math.max(0, i - 1)];
    const next = centres[Math.min(centres.length - 1, i + 1)];
    const t = next.clone().sub(prev);
    // Coincident neighbours would normalise to NaN and poison every downstream vertex.
    return t.lengthSq() < 1e-12 ? new THREE.Vector3(0, 1, 0) : t.normalize();
  });

  // Seed a reference axis that is not parallel to the first tangent, or the first cross
  // product is degenerate and the whole sweep collapses to a line.
  let ref = new THREE.Vector3(0, 0, 1);
  if (Math.abs(tangents[0].dot(ref)) > 0.9) ref = new THREE.Vector3(1, 0, 0);

  const normals: THREE.Vector3[] = [];
  const binormals: THREE.Vector3[] = [];
  let carried = ref.clone().sub(tangents[0].clone().multiplyScalar(ref.dot(tangents[0]))).normalize();
  for (let i = 0; i < tangents.length; i += 1) {
    const t = tangents[i];
    // Project the carried frame back onto the plane perpendicular to this tangent.
    const n = carried.clone().sub(t.clone().multiplyScalar(carried.dot(t)));
    if (n.lengthSq() < 1e-12) {
      const fallback = Math.abs(t.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
      n.copy(fallback.sub(t.clone().multiplyScalar(fallback.dot(t))));
    }
    n.normalize();
    normals.push(n);
    binormals.push(new THREE.Vector3().crossVectors(t, n).normalize());
    carried = n;
  }

  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];
  const ringStart: number[] = [];
  const isPoint: boolean[] = [];

  for (let i = 0; i < stations.length; i += 1) {
    const st = stations[i];
    const v = i / (stations.length - 1);
    ringStart.push(positions.length / 3);
    // A station whose section has collapsed emits ONE vertex, not a ring of radius zero.
    // A degenerate ring still carries `radial` coincident vertices and `radial` zero-area
    // triangles, so the lock ends in a blunt cap the width of the floating-point noise
    // rather than at a point -- and a hair lock, a horn or a blade tip has to reach a point.
    if (st.rx <= 1e-6 && st.rz <= 1e-6) {
      isPoint.push(true);
      positions.push(centres[i].x, centres[i].y, centres[i].z);
      uvs.push(0.5, v);
      continue;
    }
    isPoint.push(false);
    const twist = ((st.twist ?? 0) * Math.PI) / 180;
    for (let j = 0; j <= radial; j += 1) {
      const theta = (j / radial) * Math.PI * 2 + twist;
      const offset = normals[i].clone().multiplyScalar(Math.cos(theta) * st.rx)
        .add(binormals[i].clone().multiplyScalar(Math.sin(theta) * st.rz));
      const p = centres[i].clone().add(offset);
      positions.push(p.x, p.y, p.z);
      uvs.push(j / radial, v);
    }
  }

  for (let i = 0; i < stations.length - 1; i += 1) {
    const a0 = ringStart[i];
    const b0 = ringStart[i + 1];
    if (isPoint[i] && isPoint[i + 1]) continue;   // two collapsed stations bound nothing
    for (let j = 0; j < radial; j += 1) {
      // Wound so the face normal points radially OUTWARD.
      //
      // Ring vertices advance from `normal` toward `binormal`, and binormal is
      // tangent x normal, so increasing theta runs counter-clockwise seen from the
      // far end of the segment. Taking the ring-to-ring edge first therefore puts
      // the cross product on the inside. Measured as signed volume on the built
      // mesh: every tapered-sweep came out negative -- a torso at -0.0674 and a
      // tail at -0.0044 against a positive ellipsoid head -- so every sweep this
      // generator has ever emitted rendered its back faces, with normals pointing
      // into the solid and every lighting judgement made on the wrong surface.
      if (isPoint[i]) indices.push(a0, b0 + j + 1, b0 + j);
      else if (isPoint[i + 1]) indices.push(a0 + j, a0 + j + 1, b0);
      else indices.push(a0 + j, a0 + j + 1, b0 + j, a0 + j + 1, b0 + j + 1, b0 + j);
    }
  }

  if (sweep.capEnds ?? true) {
    for (const end of [0, stations.length - 1]) {
      if (isPoint[end]) continue;   // a point end is already closed
      const centreIndex = positions.length / 3;
      positions.push(centres[end].x, centres[end].y, centres[end].z);
      uvs.push(0.5, end === 0 ? 0 : 1);
      const base = ringStart[end];
      for (let j = 0; j < radial; j += 1) {
        if (end === 0) indices.push(centreIndex, base + j + 1, base + j);
        else indices.push(centreIndex, base + j, base + j + 1);
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function hashString(value: string): number {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function readLayerNumber(value: unknown, keys: string[], fallback: number): number {
  if (typeof value === 'number') return value;
  if (value && typeof value === 'object') {
    const record = value as Record<string, unknown>;
    for (const key of keys) {
      if (typeof record[key] === 'number') return record[key] as number;
    }
  }
  return fallback;
}

function hexToRgb(hex: string): [number, number, number] {
  const normalized = /^#[0-9a-f]{3}$/i.test(hex)
    ? '#' + hex.slice(1).split('').map((part) => part + part).join('')
    : hex;
  const value = /^#[0-9a-f]{6}$/i.test(normalized) ? Number.parseInt(normalized.slice(1), 16) : 0x8a7a5f;
  return [clampAlbedoChannel((value >> 16) & 255), clampAlbedoChannel((value >> 8) & 255), clampAlbedoChannel(value & 255)];
}

function materialPalette(spec: SculptMaterialSpec): string[] {
  const palette = spec.colorVariation?.palette;
  if (Array.isArray(palette) && palette.length > 0) return palette.filter((value) => typeof value === 'string');
  const secondary = spec.albedo?.secondary;
  const colors = [spec.baseColor ?? spec.color ?? spec.albedo?.dominant, ...(Array.isArray(secondary) ? secondary : [])];
  return colors.filter((value): value is string => typeof value === 'string' && value.startsWith('#'));
}

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function clampAlbedoChannel(value: number): number {
  return Math.max(30, Math.min(240, Math.round(value)));
}

function clampPbrF0(value: number): number {
  return Math.max(0.02, Math.min(1, value));
}

function clampPbrIor(value: number): number {
  return Math.max(1, Math.min(2.5, value));
}

function clampPbrMetalness(value: number): number {
  return value >= 0.5 ? 1 : 0;
}

function clampedAlbedoColor(spec: SculptMaterialSpec): THREE.Color {
  const source = typeof spec.baseColor === 'string' ? spec.baseColor : '#8A7A5F';
  // setStyle with an explicit SRGBColorSpace, NOT the numeric constructor.
  //
  // `new THREE.Color(r, g, b)` treats its arguments as LINEAR working-space components,
  // while an authored `baseColor` hex is sRGB. Feeding one to the other skipped the
  // transfer function and lifted every dark albedo: #2e2a28, authored as a near-black
  // vinyl, rendered at roughly sRGB 0.46 — a mid grey. The error is largest exactly where
  // it matters most, because the transfer curve is steepest near black.
  return new THREE.Color().setStyle(source, THREE.SRGBColorSpace);
}

function smoothCurve(value: number): number {
  return value * value * (3 - 2 * value);
}

function periodicHash(x: number, y: number, seed: number, periodX: number, periodY: number): number {
  const wrappedX = ((x % periodX) + periodX) % periodX;
  const wrappedY = ((y % periodY) + periodY) % periodY;
  let value = Math.imul(wrappedX + seed * 17, 374761393) ^ Math.imul(wrappedY + seed * 31, 668265263);
  value = Math.imul(value ^ (value >>> 13), 1274126177);
  return ((value ^ (value >>> 16)) >>> 0) / 4294967295;
}

function periodicValueNoise(u: number, v: number, seed: number, periodX: number, periodY: number): number {
  const x = u * periodX;
  const y = v * periodY;
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const tx = smoothCurve(x - x0);
  const ty = smoothCurve(y - y0);
  const a = periodicHash(x0, y0, seed, periodX, periodY);
  const b = periodicHash(x0 + 1, y0, seed, periodX, periodY);
  const c = periodicHash(x0, y0 + 1, seed, periodX, periodY);
  const d = periodicHash(x0 + 1, y0 + 1, seed, periodX, periodY);
  return THREE.MathUtils.lerp(THREE.MathUtils.lerp(a, b, tx), THREE.MathUtils.lerp(c, d, tx), ty);
}

type SurfaceBand = {
  frequency: number;
  amplitude: number;
  stretchX: number;
  stretchY: number;
  ridge: boolean;
};

function surfaceBands(spec: SculptMaterialSpec): SurfaceBand[] {
  const source = Array.isArray(spec.surfaceFrequencyBands) ? spec.surfaceFrequencyBands : [];
  const parsed = source.flatMap((item: unknown) => {
    if (!item || typeof item !== 'object') return [];
    const band = item as Record<string, unknown>;
    const frequency = typeof band.frequency === 'number' ? band.frequency : 0;
    const amplitude = typeof band.amplitude === 'number' ? band.amplitude : 0;
    if (frequency <= 0 || amplitude <= 0) return [];
    const stretch = Array.isArray(band.stretch) ? band.stretch : [1, 1];
    const description = `${String(band.pattern ?? '')} ${String(band.role ?? '')}`.toLowerCase();
    return [{
      frequency,
      amplitude,
      stretchX: typeof stretch[0] === 'number' ? Math.max(0.1, stretch[0]) : 1,
      stretchY: typeof stretch[1] === 'number' ? Math.max(0.1, stretch[1]) : 1,
      ridge: /(ridge|groove|grain|fiber|striated|crack)/.test(description),
    }];
  });
  return parsed.length > 0 ? parsed : [
    { frequency: 2, amplitude: 0.42, stretchX: 1, stretchY: 1, ridge: false },
    { frequency: 12, amplitude: 0.22, stretchX: 1, stretchY: 1, ridge: false },
    { frequency: 56, amplitude: 0.08, stretchX: 1, stretchY: 1, ridge: false },
  ];
}

function sampleSurface(u: number, v: number, bands: SurfaceBand[], seed: number): number {
  let value = 0;
  let weight = 0;
  for (let index = 0; index < bands.length; index += 1) {
    const band = bands[index];
    const periodX = Math.max(1, Math.round(band.frequency * band.stretchX));
    const periodY = Math.max(1, Math.round(band.frequency * band.stretchY));
    let sample = periodicValueNoise(u, v, seed + index * 1013, periodX, periodY);
    if (band.ridge) sample = 1 - Math.abs(sample * 2 - 1);
    value += sample * band.amplitude;
    weight += band.amplitude;
  }
  return weight > 0 ? clamp01(value / weight) : 0.5;
}

function mixPalette(colors: [number, number, number][], value: number): [number, number, number] {
  if (colors.length === 1) return colors[0];
  const scaled = clamp01(value) * (colors.length - 1);
  const index = Math.min(colors.length - 2, Math.floor(scaled));
  const mix = scaled - index;
  const a = colors[index];
  const b = colors[index + 1];
  return [
    Math.round(THREE.MathUtils.lerp(a[0], b[0], mix)),
    Math.round(THREE.MathUtils.lerp(a[1], b[1], mix)),
    Math.round(THREE.MathUtils.lerp(a[2], b[2], mix)),
  ];
}

type ColorGradientStop = { offset: number; color: string };
type ColorGradientSpec = {
  type: 'linear' | 'radial';
  axis: [number, number];
  stops: ColorGradientStop[];
};

function parseRgba(value: string): [number, number, number] {
  const match = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/.exec(value);
  if (!match) return [138, 122, 95];
  return [clampAlbedoChannel(Number(match[1])), clampAlbedoChannel(Number(match[2])), clampAlbedoChannel(Number(match[3]))];
}

// Analytical per-pixel gradient sample. The extraction schema's colorGradient carries
// exact rgba(...) stop colors (see extract_part_color_recipe.py), so this samples the
// same trend directly in JS math rather than round-tripping through a Canvas 2D
// createLinearGradient/createRadialGradient object — same visual result, and it composes
// directly with the existing noise/height-correlated colorVariation blend below.
function sampleColorGradient(gradient: ColorGradientSpec, u: number, v: number): [number, number, number] {
  const stops = gradient.stops.length >= 2 ? gradient.stops : [{ offset: 0, color: 'rgba(138,122,95,1)' }, { offset: 1, color: 'rgba(138,122,95,1)' }];
  let t: number;
  if (gradient.type === 'radial') {
    const [cx, cy] = gradient.axis;
    const dx = u - cx;
    const dy = v - cy;
    const maxRadius = Math.max(0.001, Math.hypot(Math.max(cx, 1 - cx), Math.max(cy, 1 - cy)));
    t = clamp01(Math.hypot(dx, dy) / maxRadius);
  } else {
    const [ax, ay] = gradient.axis;
    const projection = (u - 0.5) * ax + (v - 0.5) * ay;
    const maxProjection = 0.5 * (Math.abs(ax) + Math.abs(ay)) || 0.5;
    t = clamp01(projection / maxProjection + 0.5);
  }
  const scaled = t * (stops.length - 1);
  const index = Math.min(stops.length - 2, Math.max(0, Math.floor(scaled)));
  const mix = scaled - index;
  const a = parseRgba(stops[index].color);
  const b = parseRgba(stops[index + 1].color);
  return [
    THREE.MathUtils.lerp(a[0], b[0], mix),
    THREE.MathUtils.lerp(a[1], b[1], mix),
    THREE.MathUtils.lerp(a[2], b[2], mix),
  ];
}

function writePixel(data: Uint8ClampedArray, offset: number, red: number, green: number, blue: number): void {
  data[offset] = Math.max(0, Math.min(255, Math.round(red)));
  data[offset + 1] = Math.max(0, Math.min(255, Math.round(green)));
  data[offset + 2] = Math.max(0, Math.min(255, Math.round(blue)));
  data[offset + 3] = 255;
}

function makeCanvas(size: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  return canvas;
}

function createMapTexture(
  canvas: HTMLCanvasElement,
  colorSpace: THREE.ColorSpace,
  spec: SculptMaterialSpec,
  options: ProceduralModelOptions,
): THREE.CanvasTexture {
  const texture = new THREE.CanvasTexture(canvas);
  const projection = spec.textureProjection && typeof spec.textureProjection === 'object' ? spec.textureProjection : {};
  const repeat = Array.isArray(projection.repeat) ? projection.repeat : [2, 2];
  texture.colorSpace = colorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(
    typeof repeat[0] === 'number' ? repeat[0] : 2,
    typeof repeat[1] === 'number' ? repeat[1] : 2,
  );
  texture.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? projection.anisotropy ?? 8));
  texture.needsUpdate = true;
  return texture;
}

type ProceduralTextureSet = {
  albedo: THREE.Texture;
  roughness: THREE.Texture;
  height: THREE.Texture;
  normal: THREE.Texture;
  ao: THREE.Texture;
  source: 'reference-pixel-extraction' | 'procedural';
};

function referenceMapUrl(spec: SculptMaterialSpec, channel: string): string | null {
  const reference = spec.referencePbr;
  if (!reference || typeof reference !== 'object') return null;
  if (reference.usable === false) return null;
  const confidence = typeof reference.confidence === 'number'
    ? reference.confidence
    : (typeof reference.estimatedFidelity === 'number' ? reference.estimatedFidelity : 0);
  const threshold = typeof reference.targetThreshold === 'number' ? reference.targetThreshold : 0.7;
  if (confidence < threshold) return null;
  const maps = reference.maps;
  if (!maps || typeof maps !== 'object') return null;
  const map = (maps as Record<string, unknown>)[channel];
  if (!map || typeof map !== 'object') return null;
  const record = map as Record<string, unknown>;
  const url = typeof record.url === 'string' && record.url.trim() ? record.url : record.path;
  return typeof url === 'string' && url.trim() ? url : null;
}

function createLoadedMapTexture(
  url: string,
  colorSpace: THREE.ColorSpace,
  spec: SculptMaterialSpec,
  options: ProceduralModelOptions,
): THREE.Texture {
  const texture = new THREE.TextureLoader().load(url);
  const projection = spec.textureProjection && typeof spec.textureProjection === 'object' ? spec.textureProjection : {};
  const repeat = Array.isArray(projection.repeat) ? projection.repeat : [1, 1];
  texture.colorSpace = colorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(
    typeof repeat[0] === 'number' ? repeat[0] : 1,
    typeof repeat[1] === 'number' ? repeat[1] : 1,
  );
  texture.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? projection.anisotropy ?? 8));
  texture.needsUpdate = true;
  return texture;
}

function makeReferenceTextureSet(spec: SculptMaterialSpec, options: ProceduralModelOptions): ProceduralTextureSet | null {
  const albedo = referenceMapUrl(spec, 'albedo');
  const roughness = referenceMapUrl(spec, 'roughness');
  const height = referenceMapUrl(spec, 'height');
  const normal = referenceMapUrl(spec, 'normal');
  const ao = referenceMapUrl(spec, 'ao');
  if (!albedo || !roughness || !height || !normal || !ao) return null;
  return {
    albedo: createLoadedMapTexture(albedo, THREE.SRGBColorSpace, spec, options),
    roughness: createLoadedMapTexture(roughness, THREE.NoColorSpace, spec, options),
    height: createLoadedMapTexture(height, THREE.NoColorSpace, spec, options),
    normal: createLoadedMapTexture(normal, THREE.NoColorSpace, spec, options),
    ao: createLoadedMapTexture(ao, THREE.NoColorSpace, spec, options),
    source: 'reference-pixel-extraction',
  };
}

function makeProceduralTextureSet(
  id: string,
  spec: SculptMaterialSpec,
  options: ProceduralModelOptions,
): ProceduralTextureSet | null {
  if (typeof document === 'undefined') return null;
  const qualityFirst = (options.qualityPriority ?? 'reference-fidelity') === 'reference-fidelity';
  const requested = options.textureSize ?? spec.textureResolution;
  const requestedSize = typeof requested === 'number' && Number.isFinite(requested)
    ? requested
    : (qualityFirst ? 1024 : 512);
  const size = Math.max(256, Math.min(2048, 2 ** Math.round(Math.log2(requestedSize))));
  const canvases = {
    albedo: makeCanvas(size),
    roughness: makeCanvas(size),
    height: makeCanvas(size),
    normal: makeCanvas(size),
    ao: makeCanvas(size),
  };
  const contexts = {
    albedo: canvases.albedo.getContext('2d'),
    roughness: canvases.roughness.getContext('2d'),
    height: canvases.height.getContext('2d'),
    normal: canvases.normal.getContext('2d'),
    ao: canvases.ao.getContext('2d'),
  };
  if (!contexts.albedo || !contexts.roughness || !contexts.height || !contexts.normal || !contexts.ao) return null;
  const images = {
    albedo: contexts.albedo.createImageData(size, size),
    roughness: contexts.roughness.createImageData(size, size),
    height: contexts.height.createImageData(size, size),
    normal: contexts.normal.createImageData(size, size),
    ao: contexts.ao.createImageData(size, size),
  };
  const seed = hashString(id);
  const bands = surfaceBands(spec);
  const heightField = new Float32Array(size * size);
  const roughnessField = new Float32Array(size * size);
  const palette = materialPalette(spec);
  const fallback = typeof spec.baseColor === 'string' ? spec.baseColor : '#8A7A5F';
  const colors = (palette.length >= 2 ? palette : [fallback, '#6E614B', '#A08F70']).map(hexToRgb);
  const baseRoughness = clamp01(readLayerNumber(spec.roughness, ['base'], 0.76));
  const roughnessVariation = clamp01(readLayerNumber(spec.roughness, ['variation'], 0.18));
  const colorAmplitude = clamp01(readLayerNumber(spec.colorVariation, ['amplitude', 'variation'], 0.18));
  const heightCorrelation = clamp01(readLayerNumber(spec.colorVariation, ['heightCorrelation'], 0.3));
  const colorGradient: ColorGradientSpec | undefined = spec.colorGradient;
  for (let y = 0; y < size; y += 1) {
    const v = y / size;
    for (let x = 0; x < size; x += 1) {
      const u = x / size;
      const index = y * size + x;
      const height = sampleSurface(u, v, bands, seed + 101);
      const roughNoise = sampleSurface(u, v, bands, seed + 7001);
      const colorNoise = sampleSurface(u, v, bands, seed + 15013);
      heightField[index] = height;
      roughnessField[index] = clamp01(baseRoughness + (roughNoise - 0.5) * roughnessVariation * 2);
      let color: [number, number, number];
      if (colorGradient) {
        // Evidence-derived spatial gradient (Plan 1.3 Workstream C) takes priority
        // over the noise-based palette blend below — it is a measured trend, not a guess.
        color = sampleColorGradient(colorGradient, u, v);
      } else {
        const paletteValue = clamp01(
          0.5 + (colorNoise - 0.5) * colorAmplitude * 2 + (height - 0.5) * heightCorrelation
        );
        color = mixPalette(colors, paletteValue);
      }
      writePixel(images.albedo.data, index * 4, color[0], color[1], color[2]);
    }
  }
  const normalStrength = Math.max(0.05, readLayerNumber(spec.normal, ['strength', 'amplitude'], 0.35));
  const aoStrength = clamp01(readLayerNumber(spec.ambientOcclusion, ['cavityStrength', 'strength'], 0.35));
  for (let y = 0; y < size; y += 1) {
    const up = ((y - 1 + size) % size) * size;
    const down = ((y + 1) % size) * size;
    for (let x = 0; x < size; x += 1) {
      const left = (x - 1 + size) % size;
      const right = (x + 1) % size;
      const index = y * size + x;
      const center = heightField[index];
      const dx = (heightField[y * size + right] - heightField[y * size + left]) * normalStrength * 6;
      const dy = (heightField[down + x] - heightField[up + x]) * normalStrength * 6;
      const inverseLength = 1 / Math.sqrt(dx * dx + dy * dy + 1);
      const normalX = -dx * inverseLength;
      const normalY = -dy * inverseLength;
      const normalZ = inverseLength;
      const neighborAverage = (
        heightField[y * size + left] + heightField[y * size + right]
        + heightField[up + x] + heightField[down + x]
      ) * 0.25;
      const cavity = Math.max(0, neighborAverage - center);
      const ao = clamp01(1 - aoStrength * (cavity * 12 + (1 - center) * 0.16));
      const offset = index * 4;
      const heightByte = center * 255;
      const roughnessByte = roughnessField[index] * 255;
      writePixel(images.height.data, offset, heightByte, heightByte, heightByte);
      writePixel(images.roughness.data, offset, roughnessByte, roughnessByte, roughnessByte);
      writePixel(
        images.normal.data, offset,
        (normalX * 0.5 + 0.5) * 255,
        (normalY * 0.5 + 0.5) * 255,
        (normalZ * 0.5 + 0.5) * 255,
      );
      writePixel(images.ao.data, offset, ao * 255, ao * 255, ao * 255);
    }
  }
  contexts.albedo.putImageData(images.albedo, 0, 0);
  contexts.roughness.putImageData(images.roughness, 0, 0);
  contexts.height.putImageData(images.height, 0, 0);
  contexts.normal.putImageData(images.normal, 0, 0);
  contexts.ao.putImageData(images.ao, 0, 0);
  return {
    albedo: createMapTexture(canvases.albedo, THREE.SRGBColorSpace, spec, options),
    roughness: createMapTexture(canvases.roughness, THREE.NoColorSpace, spec, options),
    height: createMapTexture(canvases.height, THREE.NoColorSpace, spec, options),
    normal: createMapTexture(canvases.normal, THREE.NoColorSpace, spec, options),
    ao: createMapTexture(canvases.ao, THREE.NoColorSpace, spec, options),
    source: 'procedural',
  };
}

function createSculptMaterial(id: string, spec: SculptMaterialSpec, options: ProceduralModelOptions, denseComponent = false): THREE.MeshPhysicalMaterial {
  // A material that declares -- with evidence -- that its subject carries no texture
  // detail gets NO texture set. Synthesising one anyway is not a harmless default: the
  // branch below then forces color to white and roughness to 1 and reads both from the
  // generated maps, so the authored albedo and the reference-derived roughness are both
  // discarded, and the model gains mottling the reference does not have. Measured on the
  // tuxedo cat, whose black fur rendered as speckled grey-and-white from a palette that
  // only ever described two flat regions.
  const textureless = (spec.textureless as { declared?: boolean } | undefined)?.declared === true;
  const textures = textureless
    ? null
    : makeReferenceTextureSet(spec, options) ?? makeProceduralTextureSet(id, spec, options);
  const material = new THREE.MeshPhysicalMaterial({
    color: textures ? 0xffffff : clampedAlbedoColor(spec),
    roughness: textures ? 1 : clamp01(readLayerNumber(spec.roughness, ['base'], 0.76)),
    metalness: clampPbrMetalness(readLayerNumber(spec.metalness, ['base'], 0.0)),
    clearcoat: clamp01(readLayerNumber(spec.clearcoat, ['base', 'amount'], 0)),
    clearcoatRoughness: clamp01(readLayerNumber(spec.clearcoatRoughness, ['base'], 0.25)),
    transmission: clamp01(readLayerNumber(spec.transmission, ['base', 'amount'], 0)),
    ior: clampPbrIor(readLayerNumber(spec.ior, ['base', 'value'], 1.5)),
    thickness: Math.max(0, readLayerNumber(spec.thickness, ['base', 'amount'], 0)),
    attenuationDistance: Math.max(0.001, readLayerNumber(spec.attenuationDistance, ['base', 'value'], Infinity)),
    attenuationColor: new THREE.Color(typeof spec.attenuationColor === 'string' ? spec.attenuationColor : '#ffffff'),
    sheen: clamp01(readLayerNumber(spec.sheen, ['base', 'amount'], 0)),
    sheenColor: new THREE.Color(typeof spec.sheenColor === 'string' ? spec.sheenColor : '#ffffff'),
    sheenRoughness: clamp01(readLayerNumber(spec.sheenRoughness, ['base'], 1.0)),
    iridescence: clamp01(readLayerNumber(spec.iridescence, ['base', 'amount'], 0)),
    iridescenceIOR: clampPbrIor(readLayerNumber(spec.iridescenceIOR, ['base', 'value'], 1.3)),
    anisotropy: clamp01(readLayerNumber(spec.anisotropy, ['base', 'amount'], 0)),
    anisotropyRotation: readLayerNumber(spec.anisotropy, ['rotation'], 0),
    specularIntensity: clampPbrF0(readLayerNumber(spec.specularF0 ?? spec.f0 ?? spec.specularIntensity, ['base', 'value'], 1.0)),
    specularColor: new THREE.Color(typeof spec.specularColor === 'string' ? spec.specularColor : '#ffffff'),
    emissive: new THREE.Color(typeof spec.emissive === 'string' ? spec.emissive : '#000000'),
    emissiveIntensity: Math.max(0, readLayerNumber(spec.emissiveIntensity, ['base'], 1.0)),
    opacity: clamp01(readLayerNumber(spec.opacity, ['base'], 1)),
    transparent: readLayerNumber(spec.transmission, ['base', 'amount'], 0) > 0 || readLayerNumber(spec.opacity, ['base'], 1) < 1,
    alphaTest: Math.max(0, readLayerNumber(spec.alpha, ['cutoff', 'alphaTest'], 0)),
    wireframe: options.wireframe ?? false,
    side: spec.doubleSided === true ? THREE.DoubleSide : THREE.FrontSide,
    flatShading: spec.flatShading === true,
  });
  if (textures) {
    material.map = textures.albedo;
    material.roughnessMap = textures.roughness;
    material.normalMap = textures.normal;
    material.normalScale.setScalar(Math.max(0.05, readLayerNumber(spec.normal, ['strength', 'amplitude'], 0.35)));
    material.aoMap = textures.ao;
    material.aoMap.channel = 0;
    material.aoMapIntensity = readLayerNumber(spec.ambientOcclusion, ['cavityStrength', 'strength'], 0.35);
    const denseMesh = denseComponent || spec.denseMesh === true || spec.geometryDensity === 'dense' || spec.topologyClass === 'dense';
    const bumpScale = Math.max(0, readLayerNumber(spec.bump, ['amplitude', 'strength'], 0));
    const effectiveBumpScale = denseMesh ? Math.max(0.05, bumpScale) : bumpScale;
    if (effectiveBumpScale > 0) {
      material.bumpMap = textures.height;
      material.bumpScale = effectiveBumpScale;
    }
    const displacementScale = Math.max(0, readLayerNumber(spec.displacement, ['amplitude', 'strength'], 0));
    const effectiveDisplacementScale = denseMesh ? Math.max(0.005, displacementScale) : displacementScale;
    if (effectiveDisplacementScale > 0) {
      material.displacementMap = textures.height;
      material.displacementScale = effectiveDisplacementScale;
      material.displacementBias = -effectiveDisplacementScale * 0.5;
    }
  }
  material.envMapIntensity = readLayerNumber(spec, ['envMapIntensity'], 0.8);
  material.userData.sculptMaterial = spec;
  material.userData.proceduralMapsIndependent = true;
  material.userData.pbrConstraints = { albedoRange: [30, 240], binaryMetalness: true, f0Range: [0.02, 1], iorRange: [1, 2.5] };
  material.userData.pbrTextureSource = textures?.source ?? 'flat-fallback';
  material.userData.referencePbr = spec.referencePbr ?? null;
  material.userData.referenceMaterialId = spec.referenceMaterialId ?? spec.materialReference?.profileId ?? null;
  material.userData.materialEvidence = spec.materialEvidence ?? null;
  material.userData.validationViews = spec.materialReference?.validationViews ?? [];
  material.needsUpdate = true;
  return material;
}

type AttachmentEndpoint = {
  start: THREE.Vector3;
  midpoint: THREE.Vector3;
  quaternion: THREE.Quaternion;
  length: number;
  baseRadius: number;
  endRadius: number;
};

function readVector3(value: unknown, fallback: [number, number, number]): THREE.Vector3 {
  if (Array.isArray(value) && value.length === 3 && value.every((item) => typeof item === 'number')) {
    return new THREE.Vector3(value[0], value[1], value[2]);
  }
  return new THREE.Vector3(fallback[0], fallback[1], fallback[2]);
}

function readNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function makeAttachmentEndpoint(attachment: unknown): AttachmentEndpoint | null {
  if (!attachment || typeof attachment !== 'object') return null;
  const record = attachment as Record<string, unknown>;
  const start = readVector3(record.localStart, [0, 0, 0]);
  const end = readVector3(record.localEnd, [0, 1, 0]);
  const delta = end.clone().sub(start);
  const length = delta.length();
  if (length <= 0.0001) return null;
  const direction = delta.clone().normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);
  const baseRadius = Math.max(0.005, readNumber(record.baseRadius, 0.06));
  const endRadius = Math.max(0.003, readNumber(record.endRadius, baseRadius * 0.55));
  return {
    start,
    midpoint: delta.multiplyScalar(0.5),
    quaternion,
    length,
    baseRadius,
    endRadius,
  };
}

// Generated from ObjectSculptSpec target: Fighting Cock
// Sculpt build pass: optimization-pass
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createFightingCockModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "Fighting Cock";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 40.0, "aspect": 1.0, "orientation": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "positionHint": [0.0, 0.0, 3.0], "note": "For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."}, "approximationNotes": []};
  root.userData.materialPipeline = {"schemaVersion": 1, "status": "proceed", "registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "artifact": "material-analysis.json", "manifest": "material-regions.json", "referenceId": "fighting-cock-lateral", "targetThreshold": 0.7, "regions": [{"componentId": "body-shell", "regionId": "plumage", "specMaterialId": "plumage-dark", "profileId": "fur.stylized", "registryStatus": "proceed", "registryConfidence": 1.0, "registryMethod": "explicit-material-id", "pixelEvidence": {"verdict": "pass", "confidence": 0.751, "targetThreshold": 0.7, "palette": ["#100E09", "#1B1610", "#0B0904", "#2F2820", "#756D67"], "crop": {"x": 706, "y": 486, "width": 56, "height": 64}}, "authority": "PIXEL EVIDENCE. extract_pbr_evidence returned pass at confidence 0.751 against a 0.7 threshold on this crop. The registryConfidence of 1.0 beside it is NOT a second opinion agreeing -- see statusNote.", "status": "proceed"}, {"componentId": "hackle-cape", "regionId": "oxblood-mantle", "specMaterialId": "plumage-oxblood", "profileId": "fur.stylized", "registryStatus": "proceed", "registryConfidence": 1.0, "registryMethod": "explicit-material-id", "pixelEvidence": {"verdict": "pass", "confidence": 0.751, "targetThreshold": 0.7, "palette": ["#42140F", "#3A0B07", "#4E1D17", "#2A0804", "#5F342E"], "crop": {"x": 700, "y": 186, "width": 44, "height": 70}}, "authority": "PIXEL EVIDENCE. extract_pbr_evidence returned pass at confidence 0.751 against a 0.7 threshold on this crop. The registryConfidence of 1.0 beside it is NOT a second opinion agreeing -- see statusNote.", "status": "proceed"}, {"componentId": "head", "regionId": "bare-skin", "specMaterialId": "skin-red", "profileId": "skin.human.code-only", "registryStatus": "proceed", "registryConfidence": 1.0, "registryMethod": "explicit-material-id", "pixelEvidence": {"verdict": "pass", "confidence": 0.801, "targetThreshold": 0.7, "palette": ["#703C36", "#582923", "#8B4F4B", "#401711", "#B26C6B"], "crop": {"x": 768, "y": 118, "width": 34, "height": 32}}, "authority": "PIXEL EVIDENCE. extract_pbr_evidence returned pass at confidence 0.801 against a 0.7 threshold on this crop. The registryConfidence of 1.0 beside it is NOT a second opinion agreeing -- see statusNote.", "status": "proceed"}, {"componentId": "beak", "regionId": "keratin-sheath", "specMaterialId": "beak-horn", "profileId": "leather.matte", "registryStatus": "proceed", "registryConfidence": 1.0, "registryMethod": "explicit-material-id", "pixelEvidence": {"verdict": "pass", "confidence": 0.86, "targetThreshold": 0.7, "palette": ["#937C65", "#79644F", "#5C4938", "#A69078", "#BBA78B"], "crop": {"x": 856, "y": 112, "width": 18, "height": 14}}, "authority": "PIXEL EVIDENCE. extract_pbr_evidence returned pass at confidence 0.860 against a 0.7 threshold on this crop. The registryConfidence of 1.0 beside it is NOT a second opinion agreeing -- see statusNote.", "status": "proceed"}, {"componentId": "leg-l", "regionId": "scute-keratin", "specMaterialId": "leg-scale", "profileId": "leather.matte", "registryStatus": "proceed", "registryConfidence": 1.0, "registryMethod": "explicit-material-id", "pixelEvidence": {"verdict": "pass", "confidence": 0.86, "targetThreshold": 0.7, "palette": ["#968869", "#AC9D7E", "#807356", "#C7B89D", "#685B3F"], "crop": {"x": 588, "y": 784, "width": 26, "height": 72}}, "authority": "PIXEL EVIDENCE. extract_pbr_evidence returned pass at confidence 0.860 against a 0.7 threshold on this crop. The registryConfidence of 1.0 beside it is NOT a second opinion agreeing -- see statusNote.", "status": "proceed"}, {"componentId": "tail-fan", "regionId": "mottled-feather", "specMaterialId": "feather-pale", "profileId": "fur.stylized", "registryStatus": "proceed", "registryConfidence": 1.0, "registryMethod": "explicit-material-id", "pixelEvidence": {"verdict": "pass", "confidence": 0.829, "targetThreshold": 0.7, "palette": ["#3D3125", "#584B3D", "#7D6C5B", "#22180E", "#A79480"], "crop": {"x": 252, "y": 252, "width": 90, "height": 74}}, "authority": "PIXEL EVIDENCE. extract_pbr_evidence returned pass at confidence 0.829 against a 0.7 threshold on this crop. The registryConfidence of 1.0 beside it is NOT a second opinion agreeing -- see statusNote.", "status": "proceed"}, {"componentId": "wing-l", "regionId": "iridescent-covert", "specMaterialId": "plumage-dark", "profileId": "fur.stylized", "registryStatus": "proceed", "registryConfidence": 1.0, "registryMethod": "explicit-material-id", "pixelEvidence": {"verdict": "pass", "confidence": 0.841, "targetThreshold": 0.7, "palette": ["#24211C", "#1A1712", "#373029", "#0D0A06", "#514741"], "crop": {"x": 646, "y": 342, "width": 48, "height": 44}}, "authority": "PIXEL EVIDENCE. extract_pbr_evidence returned pass at confidence 0.841 against a 0.7 threshold on this crop. The registryConfidence of 1.0 beside it is NOT a second opinion agreeing -- see statusNote.", "status": "proceed"}], "statusNote": "`proceed`, and the honest reading of every registryConfidence of 1.0 below is: I NAMED THE PROFILE, the tool did not measure it. The method on all seven is `explicit-material-id`, which means the id resolves in docs/materials/material-reference.json -- nothing more.\nThe first run of this manifest is preserved in the reasoning because it is the informative one. Left to resolve by family it returned `probe`: six regions fell back at confidences of 0.488 to 0.559, and the seventh, the bare comb and face skin, returned `request-input` outright rather than call a rooster's comb human skin. That refusal was correct. The registry carries fourteen families -- ceramic, coating, fabric, fur, gemstone, glass, hair, leather, metal, plastic, rubber, skin, stone, wood -- and NOT ONE of them is feather, beak or scute.\nSo the ids here are the nearest canonical profiles, chosen deliberately and named for what they are: `fur.stylized` for all three plumage materials, because a fibrous keratinous covering with a soft sheen and no specular lobe is the closest light transport the library has; `skin.human.code-only` for bare vascular avian skin, which differs from human skin in papillation and colour but not in family; `leather.matte` for beak and scute keratin, which is hard where leather is soft and is chosen for being a dielectric protein sheath rather than for feeling similar. The per-material materialClassConfidence values on spec.materials -- 0.40 to 0.90 -- are the honest numbers for how near these are, and they are deliberately NOT overwritten by the 1.0 here.\nWhat actually determines every rendered value is the pixel evidence: seven crops, each visually confirmed on the surface it names, each returning `pass` from extract_pbr_evidence at confidence 0.751 to 0.860. Where a tool and the pixels disagree the pixels govern -- which is also why analyze_texture.py's finish classifier is refused outright in materialEvidenceReport.finishClassRejected, having called the tail feathers `candy-coat` at metalness 0.35.", "limitations": ["PBR extraction is reference-derived inference, not inverse rendering.", "A crop must be checked against the component visible footprint before accepting material scores.", "The material registry has no avian entry of any kind. Every profileId above is a NAMED NEAREST NEIGHBOUR, not a match, and the registryConfidence of 1.0 measures id resolution only.", "Crop coverage runs 0.001 to 0.006 of the plate. Each crop was confirmed on a contact sheet after an earlier pass put three crops on the wrong surface entirely -- the comb crop was mostly backdrop and the first 'tarsus' crop was pure backdrop grey."]};
  root.userData.materialReferenceRegistry = "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json";

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["plumage-dark"] = createSculptMaterial(
    "plumage-dark",
    {"id": "plumage-dark", "name": "Near-black body plumage with a teal structural sheen", "type": "standard", "materialClass": "fabric", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#332E24", "color": "#332E24", "albedo": {"dominant": "#332E24", "secondary": ["#18150F", "#282520", "#2E2B22"], "samplingNotes": "Two verified crops: the flank at (706,486,56,64) reads rgb 24,21,15 and the wing coverts at (646,342,48,44) read rgb 40,37,32. The flank crop's lit side (luma P90) only reaches 36, so this really is a near-black surface rather than a mid tone in shadow -- the de-lighting sanity check the plate itself provides. Lifted by about 10% off the raw mean so it does not clamp to black under a game's ambient. LIFTED #26221A -> #332E24 in material-pass. P90 ratio 0.28, by far the worst. Lifted about 35 percent. It must stay a NEAR-BLACK plumage -- that is identity-defining -- so this is the smallest lift that restores tonal range rather than a move toward grey. material-pass correction 1, from a measured render-vs-plate comparison rather than by eye. Six crops were taken on the RENDER at each material's visible footprint -- placed against a gridded render and confirmed on a contact sheet, after a first attempt put three of them on the wrong surface (the 'leg' crop came back as black plumage) -- and compared to the plate crop for the same material by luma percentile. The pattern is systematic and is NOT a uniform exposure gap: P90 render/plate ratios came back 1.05 for the beak, 0.73 for the tail, 0.70 for the oxblood, 0.68 for the leg scale, 0.59 for the head skin and 0.28 for the body. Bright material correct, mid tones short, darks crushed -- that is a tone curve crushing shadows, and the consequence is that the body flank rendered with a luma range of 6 to 10 where the plate's spans 10 to 36. A surface with four levels of range has no readable FORM; it is a silhouette. Each albedo below is lifted by the factor its own measurement asks for, and the beak, which measured correct, is deliberately NOT touched."}, "roughness": {"base": 0.45, "variation": 0.09, "notes": "Feather keratin is satin, not matte: the covert crop's local contrast of 43 against the flank's 26 is the sheen, and it is directional structural colour rather than a specular lobe. Metalness stays 0 -- the teal is a thin-film effect on a dielectric."}, "metalness": 0.0, "colorVariation": {"amount": 0.15, "axis": "y", "notes": "Darker at the vent, slightly warmer over the shoulder. Variation raised by half in the same correction: with a flat albedo and a shadow-crushing tone curve, colorVariation is the only thing carrying form on these surfaces."}, "textureless": {"declared": true, "evidence": ["Flank crop (706,486,56,64): mean rgb 24,21,15 with luma P10 10 and P90 36 -- a 26-luma spread over 3,584 px. There is no resolvable pattern in it; the variation is shading, not albedo.", "The identity of this surface is its near-blackness and the scalloped feather EDGES, which are meso-scale form carried by the body shell, not a texture.", "At the prop's real size, 0.55 m tall on a low-end integrated GPU, a single feather is under 2 px. Synthesising five 1024 canvases for it would cost seconds of createObjectModel time to render detail no camera resolves.", "Correctness: a texture set forces color to white and roughness to 1 and reads both from the generated maps, which would discard the measured #26221A entirely.", "analyze_texture.py on crops/body-dark.png: meanLum 21.0, mottle 0.019, specularFraction 0.0, gradientStrength 0.168; confidence 0.751. specularFraction 0.0 and mottle at or below 0.060 is a surface with no resolvable pattern and no tight highlight -- measured, not asserted."]}, "referenceCrops": ["ev-body-dark", "ev-covert-iridescent"], "localOverrides": [{"id": "covert-iridescence", "appliesTo": ["wing-l", "wing-r"], "description": "Teal-green sheen on the covert tips, measured rgb 40,37,32 -- a low-saturation shift, not a metallic response.", "color": "#282520", "roughness": 0.38}], "qualityTier": "hero", "materialClassConfidence": 0.55, "materialClassNote": "None of the ten offered classes is `feather`. Fabric is the nearest real light-transport analogue -- a fibrous dielectric with a soft, slightly anisotropic sheen and no specular lobe -- and the confidence says how near, which is not very.", "measuredEvidence": {"crop": "body-dark", "analyzeTexture": {"lum": 21.0, "sat": 0.448, "mottle": 0.019, "spec": 0.0, "grad": 0.168, "finish": "painted-metal"}, "pbrConfidence": 0.751, "summary": "meanLum 21.0, mottle 0.019, specularFraction 0.0, gradientStrength 0.168; confidence 0.751", "finishClassUsed": false, "finishClassNote": "See materialPipeline.finishClassRejected."}},
    options
  );
  materialMap["plumage-oxblood"] = createSculptMaterial(
    "plumage-oxblood",
    {"id": "plumage-oxblood", "name": "Oxblood hackle and saddle plumage", "type": "standard", "materialClass": "fabric", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#571B13", "color": "#571B13", "albedo": {"dominant": "#571B13", "secondary": ["#42140F", "#351815", "#54201A"], "samplingNotes": "Hackle crop (700,186,44,70) reads rgb 66,20,15; saddle crop (572,398,62,48) reads rgb 53,24,21. Both sit on verified feather, confirmed in the contact sheet. The two agree to within 13 luma, which is what justifies ONE material across both mantles rather than two. LIFTED #4A1710 -> #571B13 in material-pass. P90 ratio 0.70. Lifted about 18 percent. material-pass correction 1, from a measured render-vs-plate comparison rather than by eye. Six crops were taken on the RENDER at each material's visible footprint -- placed against a gridded render and confirmed on a contact sheet, after a first attempt put three of them on the wrong surface (the 'leg' crop came back as black plumage) -- and compared to the plate crop for the same material by luma percentile. The pattern is systematic and is NOT a uniform exposure gap: P90 render/plate ratios came back 1.05 for the beak, 0.73 for the tail, 0.70 for the oxblood, 0.68 for the leg scale, 0.59 for the head skin and 0.28 for the body. Bright material correct, mid tones short, darks crushed -- that is a tone curve crushing shadows, and the consequence is that the body flank rendered with a luma range of 6 to 10 where the plate's spans 10 to 36. A surface with four levels of range has no readable FORM; it is a silhouette. Each albedo below is lifted by the factor its own measurement asks for, and the beak, which measured correct, is deliberately NOT touched."}, "roughness": {"base": 0.48, "variation": 0.07, "notes": "Slightly glossier than the body: the hackle's lanceolate feathers lie flatter and catch a broader sheen."}, "metalness": 0.0, "colorVariation": {"amount": 0.12, "axis": "y", "notes": "Deeper at the roots, brighter at the lance tips. Variation raised by half in the same correction: with a flat albedo and a shadow-crushing tone curve, colorVariation is the only thing carrying form on these surfaces."}, "textureless": {"declared": true, "evidence": ["Hackle crop (700,186,44,70): luma P10 17, P90 43 -- a 26-luma spread with no resolvable pattern; the streaking is individual feather shafts at meso scale, carried by the cape's taper.", "Saddle crop (572,398,62,48): mean rgb 53,24,21, spread 46. Same finding.", "The identity of these mantles is WHERE the oxblood sits against the near-black body, which is component placement, not texture.", "analyze_texture.py on crops/hackle-oxblood.png: meanLum 33.6, meanSaturation 0.784 (the most saturated surface on the bird), mottle 0.021, specularFraction 0.0; confidence 0.751. specularFraction 0.0 and mottle at or below 0.060 is a surface with no resolvable pattern and no tight highlight -- measured, not asserted."]}, "referenceCrops": ["ev-hackle-oxblood", "ev-saddle-oxblood"], "qualityTier": "hero", "materialClassConfidence": 0.55, "materialClassNote": "Same reasoning as plumage-dark; these are the same feather keratin at a different albedo.", "measuredEvidence": {"crop": "hackle-oxblood", "analyzeTexture": {"lum": 33.6, "sat": 0.784, "mottle": 0.021, "spec": 0.0, "grad": 0.061, "finish": "painted-metal"}, "pbrConfidence": 0.751, "summary": "meanLum 33.6, meanSaturation 0.784 (the most saturated surface on the bird), mottle 0.021, specularFraction 0.0; confidence 0.751", "finishClassUsed": false, "finishClassNote": "See materialPipeline.finishClassRejected."}},
    options
  );
  materialMap["skin-red"] = createSculptMaterial(
    "skin-red",
    {"id": "skin-red", "name": "Bare vascular head and neck skin", "type": "standard", "materialClass": "skin", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#9E4A40", "color": "#9E4A40", "albedo": {"dominant": "#9E4A40", "secondary": ["#6F3A35", "#914F4D", "#76645F"], "samplingNotes": "Three verified crops on bare skin: the cheek at (768,118,34,32) reads rgb 111,58,53 in shade, the ear-lobe/wattle at (760,126,18,16) reads rgb 145,79,77 lit, and the comb ridge at (772,66,44,16) reads rgb 118,100,95 diluted by backdrop at the silhouette edge. The lit and shaded readings bracket the albedo; #8A3F38 sits between them, which is the de-lit value and not either raw sample. LIFTED #8A3F38 -> #9E4A40 in material-pass. P90 ratio 0.59, and the render also read flat: plate 34/67/108 against render 44/52/64. Lifted about 16 percent with the saturation held. material-pass correction 1, from a measured render-vs-plate comparison rather than by eye. Six crops were taken on the RENDER at each material's visible footprint -- placed against a gridded render and confirmed on a contact sheet, after a first attempt put three of them on the wrong surface (the 'leg' crop came back as black plumage) -- and compared to the plate crop for the same material by luma percentile. The pattern is systematic and is NOT a uniform exposure gap: P90 render/plate ratios came back 1.05 for the beak, 0.73 for the tail, 0.70 for the oxblood, 0.68 for the leg scale, 0.59 for the head skin and 0.28 for the body. Bright material correct, mid tones short, darks crushed -- that is a tone curve crushing shadows, and the consequence is that the body flank rendered with a luma range of 6 to 10 where the plate's spans 10 to 36. A surface with four levels of range has no readable FORM; it is a silhouette. Each albedo below is lifted by the factor its own measurement asks for, and the beak, which measured correct, is deliberately NOT touched."}, "roughness": {"base": 0.55, "variation": 0.08, "notes": "Papillated skin: satin overall with no tight highlight anywhere on it. Real comb tissue is strongly subsurface-scattering, which is deliberately NOT modelled -- an SSS term on a low-end integrated GPU is not affordable and the albedo alone carries the read."}, "metalness": 0.0, "colorVariation": {"amount": 0.18, "axis": "y", "notes": "Brightest on the comb and wattle, deepening down the throat. Variation raised by half in the same correction: with a flat albedo and a shadow-crushing tone curve, colorVariation is the only thing carrying form on these surfaces."}, "textureless": {"declared": true, "evidence": ["Cheek crop (768,118,34,32): the papillae that give this skin its texture measure under 1 mm on a 0.55 m bird -- below one pixel at any distance an FPS camera sees it from.", "The identity of the head is the SHAPE of the dressed comb and the trimmed wattle, both built as geometry in the head's implicit field, not surface detail.", "Correctness: a texture set would force color to white and discard the de-lit #8A3F38 that three separate crops were used to establish.", "analyze_texture.py on crops/head-skin-bare.png: meanLum 74.0, meanSaturation 0.548, mottle 0.026, specularFraction 0.0, gradientStrength 0.219; confidence 0.801. specularFraction 0.0 and mottle at or below 0.060 is a surface with no resolvable pattern and no tight highlight -- measured, not asserted."]}, "referenceCrops": ["ev-comb-ridge", "ev-head-skin-bare", "ev-wattle-earlobe"], "qualityTier": "hero", "materialClassConfidence": 0.9, "materialClassNote": "Bare vascular avian skin. This is the one material where the schema's class is exactly right.", "measuredEvidence": {"crop": "head-skin-bare", "analyzeTexture": {"lum": 74.0, "sat": 0.548, "mottle": 0.026, "spec": 0.0, "grad": 0.219, "finish": "painted-metal"}, "pbrConfidence": 0.801, "summary": "meanLum 74.0, meanSaturation 0.548, mottle 0.026, specularFraction 0.0, gradientStrength 0.219; confidence 0.801", "finishClassUsed": false, "finishClassNote": "See materialPipeline.finishClassRejected."}},
    options
  );
  materialMap["beak-horn"] = createSculptMaterial(
    "beak-horn",
    {"id": "beak-horn", "name": "Beak keratin", "type": "standard", "materialClass": "skin", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#9B8465", "color": "#9B8465", "albedo": {"dominant": "#9B8465", "secondary": ["#81654F", "#8F7E6B", "#A89070"], "samplingNotes": "Beak crops (840,112,26,16) rgb 129,101,79 and (856,112,18,14) rgb 143,126,107. The first crop straddles the silhouette edge and is pulled toward the backdrop, so the second is the better read. #9B8465 is between the two, lifted slightly: the beak reads brighter than it measures because it is small and surrounded by dark red, and that simultaneous contrast does not survive into a render where the surroundings differ. Corroborated by extract_pbr_evidence's own palette for this crop -- #937D65, #7B6650, #5C4A3A, #A79179, #BDA88C -- inside which the authored #9B8465 sits between the first and fourth entries. NOT LIFTED in material-pass, and that is a decision rather than an oversight: this was the one material whose render matched the plate, at a P90 ratio of 1.05 (plate 81/130/168 against render 58/132/177). Adjusting it to match the others would have broken the one surface that was already right."}, "roughness": {"base": 0.42, "variation": 0.06, "notes": "REVISED from the 0.35 first authored by eye, on measurement. analyze_texture.py reports specularFraction 0.0 on the beak crop and on every other crop of this bird: there is no tight highlight anywhere to justify a low roughness. What the crop does carry is gradientStrength 0.230, one of the highest on the prop -- and a broad gradient with no specular fraction is a MID roughness under a soft key, not a low one. 0.42 keeps the beak the glossiest surface on the bird, which the plate supports, without claiming a polish the measurement denies. extract_pbr_evidence confidence on this crop is 0.86, the joint highest."}, "metalness": 0.0, "colorVariation": {"amount": 0.06, "axis": "z", "notes": "Darker at the base, paler toward the tip."}, "textureless": {"declared": true, "evidence": ["Beak crop (856,112,18,14): a smooth tonal gradient across 252 px with no pattern -- this is a polished keratin sheath, which is the definition of a textureless surface.", "The whole beak is 26 mm long on a 0.55 m prop. Its identity is the HOOK, which is spine geometry.", "Correctness: a texture set would force roughness to 1 and destroy the 0.35 satin culmen sheen that is the only reason the beak reads as keratin.", "analyze_texture.py on crops/beak-horn.png: meanLum 128.2, mottle 0.020, specularFraction 0.0, gradientStrength 0.230; confidence 0.860. specularFraction 0.0 and mottle at or below 0.060 is a surface with no resolvable pattern and no tight highlight -- measured, not asserted."]}, "referenceCrops": ["ev-beak-horn"], "qualityTier": "hero", "materialClassConfidence": 0.55, "materialClassNote": "Beak keratin is a hard, polished derivative of skin. `skin` is the nearest class; the 0.35 roughness is much lower than any real skin, which is what the confidence records.", "measuredEvidence": {"crop": "beak-horn", "analyzeTexture": {"lum": 128.2, "sat": 0.267, "mottle": 0.02, "spec": 0.0, "grad": 0.23, "finish": "painted-metal"}, "pbrConfidence": 0.86, "summary": "meanLum 128.2, mottle 0.020, specularFraction 0.0, gradientStrength 0.230; confidence 0.860", "finishClassUsed": false, "finishClassNote": "See materialPipeline.finishClassRejected."}},
    options
  );
  materialMap["leg-scale"] = createSculptMaterial(
    "leg-scale",
    {"id": "leg-scale", "name": "Tarsal scute and claw keratin", "type": "standard", "materialClass": "skin", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#A69F8B", "color": "#A69F8B", "albedo": {"dominant": "#A69F8B", "secondary": ["#827D72", "#9A9382", "#8C8473"], "samplingNotes": "Near tarsus (588,784,26,72) rgb 154,147,130; far tarsus (648,762,26,58) rgb 130,125,114; toe (624,898,60,22) rgb 140,132,115. The claws measure within 10% of the scutes, which is the evidence for ONE material covering scale and claw rather than two: a separate claw material would be a colour distinction the plate does not support. LIFTED #8F8A78 -> #A69F8B in material-pass. P90 ratio 0.68. Lifted about 16 percent; the scaled tarsus is the palest surface on the bird after the beak and was reading mid-grey. material-pass correction 1, from a measured render-vs-plate comparison rather than by eye. Six crops were taken on the RENDER at each material's visible footprint -- placed against a gridded render and confirmed on a contact sheet, after a first attempt put three of them on the wrong surface (the 'leg' crop came back as black plumage) -- and compared to the plate crop for the same material by luma percentile. The pattern is systematic and is NOT a uniform exposure gap: P90 render/plate ratios came back 1.05 for the beak, 0.73 for the tail, 0.70 for the oxblood, 0.68 for the leg scale, 0.59 for the head skin and 0.28 for the body. Bright material correct, mid tones short, darks crushed -- that is a tone curve crushing shadows, and the consequence is that the body flank rendered with a luma range of 6 to 10 where the plate's spans 10 to 36. A surface with four levels of range has no readable FORM; it is a silhouette. Each albedo below is lifted by the factor its own measurement asks for, and the beak, which measured correct, is deliberately NOT touched."}, "roughness": {"base": 0.5, "variation": 0.1, "notes": "Hard keratin scutes, satin, with the variation carrying the overlapping scute rows."}, "metalness": 0.0, "colorVariation": {"amount": 0.15, "axis": "y", "notes": "A faint pink flush at the toe joints, paler up the tarsus. Variation raised by half in the same correction: with a flat albedo and a shadow-crushing tone curve, colorVariation is the only thing carrying form on these surfaces."}, "textureless": {"declared": true, "evidence": ["Tarsus crop (588,784,26,72): the scute rows are 2-3 mm on a 13 mm leg -- meso-scale FORM, and they are built as the implicit leg field's own surface rather than painted on.", "Claw crop (624,898,60,22) rgb 140,132,115 against the scute's 154,147,130: within 10%, so one material covers both and no texture region is needed to separate them.", "Correctness: a texture set would force color to white and discard the measured pale yellow-grey that separates the leg from every other surface on this prop.", "analyze_texture.py on crops/tarsus-near.png: meanLum 144.0, meanSaturation 0.210, mottle 0.017, specularFraction 0.0; confidence 0.860. specularFraction 0.0 and mottle at or below 0.060 is a surface with no resolvable pattern and no tight highlight -- measured, not asserted."]}, "referenceCrops": ["ev-tarsus-far", "ev-tarsus-near", "ev-toe-claw"], "qualityTier": "hero", "materialClassConfidence": 0.55, "materialClassNote": "Tarsal scutes and claws are hard keratin, the same family as the beak and the same distance from the class that names them.", "measuredEvidence": {"crop": "tarsus-near", "analyzeTexture": {"lum": 144.0, "sat": 0.21, "mottle": 0.017, "spec": 0.0, "grad": 0.164, "finish": "painted-metal"}, "pbrConfidence": 0.86, "summary": "meanLum 144.0, meanSaturation 0.210, mottle 0.017, specularFraction 0.0; confidence 0.860", "finishClassUsed": false, "finishClassNote": "See materialPipeline.finishClassRejected."}},
    options
  );
  materialMap["feather-pale"] = createSculptMaterial(
    "feather-pale",
    {"id": "feather-pale", "name": "Mottled pale tail feather", "type": "standard", "materialClass": "fabric", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#95836D", "color": "#95836D", "albedo": {"dominant": "#95836D", "secondary": ["#5F5245", "#635545", "#A0937C"], "samplingNotes": "Tail crops (252,252,90,74) rgb 95,82,69 and (330,380,44,40) rgb 99,85,69. Both verified on feather in the contact sheet. The MEAN understates the pale ground badly: within the first crop luma P90 is 156 and P10 is 31, so the surface is a pale ground at roughly rgb 160,145,125 carrying dark flecks at roughly rgb 70,60,48. #95836D is the area-weighted blend, which is what a single flat albedo has to be. NOT LIFTED. Its P90 ratio is 0.73, but the informative number is the SPREAD: the plate reads 31/74/156 and the render 74/100/113. The render is brighter in shadow and darker in highlight -- it is FLATTER, not darker. That is exactly and only the cost of the textureless declaration on the one surface with a measured case for a texture (mottle 0.060 against the body's 0.019), and lifting the albedo would not touch it. Recorded here as the visible consequence of a recorded trade."}, "roughness": {"base": 0.72, "variation": 0.12, "notes": "The mattest surface on the bird. These feathers are worn and dusty and show no sheen anywhere in the plate."}, "metalness": 0.0, "colorVariation": {"amount": 0.16, "axis": "z", "notes": "The largest colour variation of any material here, and it is doing the mottling's job: darker toward the feather roots, paler toward the tips."}, "textureless": {"declared": true, "evidence": ["Tail crop (252,252,90,74): luma P10 31, P90 156 -- a spread of 125, the HIGHEST local contrast anywhere on this bird, so this is the one surface with a genuine case for a texture.", "It is declared textureless anyway, and the reason is recorded rather than assumed: the mottling is STOCHASTIC, so a synthesised canvas would pin one arbitrary flecking pattern to the geometry with no reference to register it against, and a projected crop would pin the plate's specific random flecks to specific feathers.", "Correctness weighs harder than detail here: a texture set forces color to white and roughness to 1, which would discard both the measured #95836D and the 0.72 matte response -- and this is the exact failure that rendered a white building mid-grey earlier in this kit.", "The identity of the tail is its swept ARC and its pale value against a near-black body. Both are carried by geometry and by this flat albedo. Revisit at the material pass with a render in hand: if the tail reads flat, the bounded correction is to raise colorVariation, not to add a texture.", "analyze_texture.py on crops/tail-pale.png: meanLum 85.4, mottle 0.060 -- the HIGHEST on the prop -- gradientStrength 0.297, specularFraction 0.0; confidence 0.829. specularFraction 0.0 and mottle at or below 0.060 is a surface with no resolvable pattern and no tight highlight -- measured, not asserted.", "The tail's mottle of 0.060 against the body's 0.019 is exactly why this material's textureless declaration is a DECISION and not a default: it is the one surface on the prop with a measured case for a texture, and the case is refused on the stochastic-pattern and forced-white-albedo grounds recorded above, not overlooked."]}, "referenceCrops": ["ev-tail-fleck", "ev-tail-pale"], "qualityTier": "hero", "materialClassConfidence": 0.6, "materialClassNote": "Worn matte feather is the closest of any surface here to actual cloth.", "measuredEvidence": {"crop": "tail-pale", "analyzeTexture": {"lum": 85.4, "sat": 0.331, "mottle": 0.06, "spec": 0.0, "grad": 0.297, "finish": "candy-coat"}, "pbrConfidence": 0.829, "summary": "meanLum 85.4, mottle 0.060 -- the HIGHEST on the prop -- gradientStrength 0.297, specularFraction 0.0; confidence 0.829", "finishClassUsed": false, "finishClassNote": "See materialPipeline.finishClassRejected."}},
    options
  );
  materialMap["eye-dark"] = createSculptMaterial(
    "eye-dark",
    {"id": "eye-dark", "name": "Eye", "type": "standard", "materialClass": "skin", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#14100D", "color": "#14100D", "albedo": {"dominant": "#14100D", "secondary": ["#0E0B09", "#1C1714"], "samplingNotes": "Eye crop (788,94,16,14) reads rgb 110,78,70 across the whole 224 px, but that mean is meaningless here: the crop is a dark pupil inside a pale amber iris ring inside a red orbital, and averaging the three gives a colour that appears nowhere in it. The pupil itself is near-black, and the pupil is what this material is for."}, "roughness": {"base": 0.25, "variation": 0.03, "notes": "The wettest surface on the bird -- a cornea. Low roughness is what makes an eye read as alive rather than as a painted dot. The eye crop's measured specularFraction of 0.0 does NOT govern here and is deliberately not adopted: that crop is dominated by the iris ring and the red orbital, and the cornea itself is about 4 mm, below what a 16x14 px crop resolves. This is the one roughness on the prop set from anatomy rather than from the plate, and it is flagged as such rather than dressed up as a measurement."}, "metalness": 0.0, "colorVariation": {"amount": 0.04, "axis": "y", "notes": "Effectively uniform; an eye has no gradient at this scale."}, "textureless": {"declared": true, "evidence": ["The eye is a 9.2 mm sphere on a 0.55 m prop. Even the pale amber iris ring, which IS visible in the plate at high zoom, is about 4 mm and is knowingly omitted as below what an FPS camera resolves -- recorded in unknownsToResolveBeforeImplementation as a decision rather than an oversight.", "A texture on a sphere this size would be five canvases for a feature under 3 px.", "analyze_texture.py on crops/eye.png: meanLum 86.9 across pupil, iris ring and orbital together, so this figure describes the crop and not the cornea; confidence 0.829. specularFraction 0.0 and mottle at or below 0.060 is a surface with no resolvable pattern and no tight highlight -- measured, not asserted."]}, "referenceCrops": ["ev-eye"], "qualityTier": "utility", "materialClassConfidence": 0.4, "materialClassNote": "A cornea is wet and specular. `glass` would be wrong -- nothing transmits here -- and `skin` is merely the least wrong of the ten. The lowest material-class confidence on the prop, and it costs nothing because the eye is 9 mm.", "measuredEvidence": {"crop": "eye", "analyzeTexture": {"lum": 86.9, "sat": 0.41, "mottle": 0.024, "spec": 0.0, "grad": 0.209, "finish": "painted-metal"}, "pbrConfidence": 0.829, "summary": "meanLum 86.9 across pupil, iris ring and orbital together, so this figure describes the crop and not the cornea; confidence 0.829", "finishClassUsed": false, "finishClassNote": "See materialPipeline.finishClassRejected."}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_body_shell_0 = makeAttachmentEndpoint(null);
  const node_body_shell_0 = new THREE.Group();
  node_body_shell_0.name = "Body shell: breast, back, flank and tail base__pivot";
  node_body_shell_0.scale.set(1, 1, 1);
  if (endpoint_body_shell_0) {
    node_body_shell_0.position.copy(endpoint_body_shell_0.start);
    node_body_shell_0.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_body_shell_0.position.set(0.0, 0.0, 0.0);
    node_body_shell_0.rotation.set(0.0, 0.0, 0.0);
  }
  node_body_shell_0.userData.sculptComponent = {"id": "body-shell", "name": "Body shell: breast, back, flank and tail base", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.82, "primitive": "ellipsoid", "topologyClass": "implicit", "topologyRationale": "A bird's trunk is one continuous organic volume with no seam anywhere on it. Seven smooth-unioned ellipsoids give the tilted ovoid the plate shows -- deep breast forward and low, back sloping down aft to the pygostyle -- which no single primitive reproduces. `continuous-sculpt` was the alternative but it forbids exactly the box/cylinder/cone primitives and still needs one lathe axis, and this body has no axis of revolution.", "geometryDescriptor": {"topologyIntent": "tilted continuous trunk volume, shoulder-high and forward, vent-low and aft", "sdf": {"primitives": [{"id": "body-shoulder", "type": "ellipsoid", "radii": [0.051, 0.062, 0.075], "transform": {"position": [0.0, 0.345, 0.035]}}, {"id": "body-keel", "type": "ellipsoid", "radii": [0.044, 0.055, 0.06], "transform": {"position": [0.0, 0.248, 0.03]}}, {"id": "body-mid", "type": "ellipsoid", "radii": [0.05, 0.066, 0.07], "transform": {"position": [0.0, 0.3, -0.012]}}, {"id": "body-vent", "type": "ellipsoid", "radii": [0.038, 0.048, 0.046], "transform": {"position": [0.0, 0.284, -0.055]}}, {"id": "body-pygostyle", "type": "ellipsoid", "radii": [0.026, 0.032, 0.026], "transform": {"position": [0.0, 0.3, -0.075]}}], "operations": [{"id": "body-u0", "type": "smooth-union", "left": "body-shoulder", "right": "body-keel", "radius": 0.03}, {"id": "body-u1", "type": "smooth-union", "left": "body-u0", "right": "body-mid", "radius": 0.03}, {"id": "body-u2", "type": "smooth-union", "left": "body-u1", "right": "body-vent", "radius": 0.03}, {"id": "body-u3", "type": "smooth-union", "left": "body-u2", "right": "body-pygostyle", "radius": 0.03}], "resolution": 24, "bounds": {"min": [-0.058, 0.185, -0.108], "max": [0.058, 0.412, 0.115]}}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Implicit surface at resolution 24 over its own bounds; see resolutionNote for the measured cost.", "proportionNote": "Measured off the plate, height normalised to 0.55 m: back top y = 0.406, belly y = 0.194, crotch y = 0.165, breast forward z = +0.116, tail root z = -0.083. The body's long axis is tilted about 32 degrees nose-up, which is the upright gamecock carriage.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "resolutionNote": "Resolution 24, about 9.5 mm cells. The body is a smooth blob with NO geometric feature at any scale -- its detail is the scalloped feather edge, which is material. 9.5 mm cells cost about 4,800 triangles where 34 cost 9,560 for a shape no camera can tell apart. Measured, not guessed. A resolution sweep on this exact spec (res_probe.mjs, five builds) gives total triangles 4,672 / 10,516 / 21,000 / 29,456 / 29,456 at resolutions 16 / 24 / 34 / 44 / 52, and factory build times of 169 / 382 / 898 / 1,274 / 1,279 ms. Two things follow. Triangle count goes as the SQUARE of the resolution, so this is the only lever that matters. And it SATURATES at 44: 44 and 52 return identical geometry, because the tessellation tier derived from targetTriangles caps the implicit sampling grid. The 52 and 56 first authored here were therefore never real -- they were clamped, and reading the spec you would have believed otherwise. SOURCE OF THE SATURATION, found in optimization-pass: the sweep showed resolutions 44 and 52 returning identical geometry and I recorded that as 'saturates at 44'. The real number is 40 -- forge/_shared/subdivision.py sets SDF_MAX_RESOLUTION to 40 for the `standard` tessellation tier, which targetTriangles 32000 selects. Both 44 and 52 were being clamped to 40, which is why they agreed. Every resolution on this prop (24, 34, 36) is below the cap and is therefore real.", "correctionNote": "blockout correction 1. Two defects the first render made visible and no gate would have: the thigh was modelled TWICE, once as two ellipsoids inside this field and again as the thigh-l/-r capsules, which rendered as a pendulous bifurcated sack; and the vent/pygostyle lobes reached z -0.129 against a measured tail root at -0.083, making the body 0.240 m deep where the plate says 0.199. The body ellipsoids are now five, and the two aft lobes are pulled forward.", "blendNote": "blockout correction 3. Blend radius 0.022 -> 0.030. At 0.022 the render showed a hard horizontal crease between the shoulder and keel lobes, so the trunk read as two stacked balloons. smin displaces by at most radius*0.25, so this inflates by up to 7.5 mm -- checked against the measured back top of 0.406 and belly of 0.194 rather than accepted blind."}, "parent": null, "attachment": {"parentId": null, "parentSocket": null, "contactType": "root"}, "dimensions": {"width": 0.116, "height": 0.227, "depth": 0.223}, "transform": {"position": [0.0, 0.0, 0.0], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "plumage-dark", "actionProfile": {"collider": {"shape": "convex", "note": "The declared collider for this asset is `convex`. One convex hull over the trunk is the whole prop's physics proxy: the legs are 13 mm thick and the tail is feathers, and neither earns its own hull on a low-end target."}, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "scalloped-feather-edges", "kind": "material-variation", "description": "Meso-scale scalloping of feather edges over the flank and back.", "evidenceRefs": ["ev-crop-body-wing"]}, {"id": "tail-covert-mass", "kind": "form", "description": "The green-black covert mass at the tail base, built into the pygostyle lobe of this shell.", "evidenceRefs": ["ev-crop-tail"]}], "evidenceRefs": ["ev-glb-bands", "ev-plate-full"], "fidelityTier": "macro", "colorMaterialRecipe": {"baseColor": "#332E24", "secondary": ["#18150F", "#282520", "#2E2B22"], "roughness": 0.45, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #26221A at roughness 0.45, no texture. Variation comes from colorVariation amount 0.10 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-body-dark", "ev-covert-iridescent"], "dominantAlbedo": "rgba(51, 46, 36, 1.0)", "secondaryAlbedo": "rgba(24, 21, 15, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.55, "materialClassNote": "None of the ten offered classes is `feather`. Fabric is the nearest real light-transport analogue -- a fibrous dielectric with a soft, slightly anisotropic sheen and no specular lobe -- and the confidence says how near, which is not very."}};
  node_body_shell_0.userData.actionProfile = {"collider": {"shape": "convex", "note": "The declared collider for this asset is `convex`. One convex hull over the trunk is the whole prop's physics proxy: the legs are 13 mm thick and the tail is feathers, and neither earns its own hull on a low-end target."}, "sockets": [], "destruction": {"fractureGroup": null}};
  (nodes["root"] ?? root).add(node_body_shell_0);
  nodes["body-shell"] = node_body_shell_0;
  const mesh_body_shell_0Geometry = polygonizeSdf({"primitives": [{"id": "body-shoulder", "type": "ellipsoid", "radii": [0.051, 0.062, 0.075], "transform": {"position": [0.0, 0.345, 0.035]}}, {"id": "body-keel", "type": "ellipsoid", "radii": [0.044, 0.055, 0.06], "transform": {"position": [0.0, 0.248, 0.03]}}, {"id": "body-mid", "type": "ellipsoid", "radii": [0.05, 0.066, 0.07], "transform": {"position": [0.0, 0.3, -0.012]}}, {"id": "body-vent", "type": "ellipsoid", "radii": [0.038, 0.048, 0.046], "transform": {"position": [0.0, 0.284, -0.055]}}, {"id": "body-pygostyle", "type": "ellipsoid", "radii": [0.026, 0.032, 0.026], "transform": {"position": [0.0, 0.3, -0.075]}}], "operations": [{"id": "body-u0", "type": "smooth-union", "left": "body-shoulder", "right": "body-keel", "radius": 0.03}, {"id": "body-u1", "type": "smooth-union", "left": "body-u0", "right": "body-mid", "radius": 0.03}, {"id": "body-u2", "type": "smooth-union", "left": "body-u1", "right": "body-vent", "radius": 0.03}, {"id": "body-u3", "type": "smooth-union", "left": "body-u2", "right": "body-pygostyle", "radius": 0.03}], "resolution": 24, "bounds": {"min": [-0.058, 0.185, -0.108], "max": [0.058, 0.412, 0.115]}});
  if (!endpoint_body_shell_0) {
    mesh_body_shell_0Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_body_shell_0 = new THREE.Mesh(
    mesh_body_shell_0Geometry,
    createSculptMaterial("plumage-dark", {"id": "plumage-dark", "name": "Near-black body plumage with a teal structural sheen", "type": "standard", "materialClass": "fabric", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#332E24", "color": "#332E24", "albedo": {"dominant": "#332E24", "secondary": ["#18150F", "#282520", "#2E2B22"], "samplingNotes": "Two verified crops: the flank at (706,486,56,64) reads rgb 24,21,15 and the wing coverts at (646,342,48,44) read rgb 40,37,32. The flank crop's lit side (luma P90) only reaches 36, so this really is a near-black surface rather than a mid tone in shadow -- the de-lighting sanity check the plate itself provides. Lifted by about 10% off the raw mean so it does not clamp to black under a game's ambient. LIFTED #26221A -> #332E24 in material-pass. P90 ratio 0.28, by far the worst. Lifted about 35 percent. It must stay a NEAR-BLACK plumage -- that is identity-defining -- so this is the smallest lift that restores tonal range rather than a move toward grey. material-pass correction 1, from a measured render-vs-plate comparison rather than by eye. Six crops were taken on the RENDER at each material's visible footprint -- placed against a gridded render and confirmed on a contact sheet, after a first attempt put three of them on the wrong surface (the 'leg' crop came back as black plumage) -- and compared to the plate crop for the same material by luma percentile. The pattern is systematic and is NOT a uniform exposure gap: P90 render/plate ratios came back 1.05 for the beak, 0.73 for the tail, 0.70 for the oxblood, 0.68 for the leg scale, 0.59 for the head skin and 0.28 for the body. Bright material correct, mid tones short, darks crushed -- that is a tone curve crushing shadows, and the consequence is that the body flank rendered with a luma range of 6 to 10 where the plate's spans 10 to 36. A surface with four levels of range has no readable FORM; it is a silhouette. Each albedo below is lifted by the factor its own measurement asks for, and the beak, which measured correct, is deliberately NOT touched."}, "roughness": {"base": 0.45, "variation": 0.09, "notes": "Feather keratin is satin, not matte: the covert crop's local contrast of 43 against the flank's 26 is the sheen, and it is directional structural colour rather than a specular lobe. Metalness stays 0 -- the teal is a thin-film effect on a dielectric."}, "metalness": 0.0, "colorVariation": {"amount": 0.15, "axis": "y", "notes": "Darker at the vent, slightly warmer over the shoulder. Variation raised by half in the same correction: with a flat albedo and a shadow-crushing tone curve, colorVariation is the only thing carrying form on these surfaces."}, "textureless": {"declared": true, "evidence": ["Flank crop (706,486,56,64): mean rgb 24,21,15 with luma P10 10 and P90 36 -- a 26-luma spread over 3,584 px. There is no resolvable pattern in it; the variation is shading, not albedo.", "The identity of this surface is its near-blackness and the scalloped feather EDGES, which are meso-scale form carried by the body shell, not a texture.", "At the prop's real size, 0.55 m tall on a low-end integrated GPU, a single feather is under 2 px. Synthesising five 1024 canvases for it would cost seconds of createObjectModel time to render detail no camera resolves.", "Correctness: a texture set forces color to white and roughness to 1 and reads both from the generated maps, which would discard the measured #26221A entirely.", "analyze_texture.py on crops/body-dark.png: meanLum 21.0, mottle 0.019, specularFraction 0.0, gradientStrength 0.168; confidence 0.751. specularFraction 0.0 and mottle at or below 0.060 is a surface with no resolvable pattern and no tight highlight -- measured, not asserted."]}, "referenceCrops": ["ev-body-dark", "ev-covert-iridescent"], "localOverrides": [{"id": "covert-iridescence", "appliesTo": ["wing-l", "wing-r"], "description": "Teal-green sheen on the covert tips, measured rgb 40,37,32 -- a low-saturation shift, not a metallic response.", "color": "#282520", "roughness": 0.38}], "qualityTier": "hero", "materialClassConfidence": 0.55, "materialClassNote": "None of the ten offered classes is `feather`. Fabric is the nearest real light-transport analogue -- a fibrous dielectric with a soft, slightly anisotropic sheen and no specular lobe -- and the confidence says how near, which is not very.", "measuredEvidence": {"crop": "body-dark", "analyzeTexture": {"lum": 21.0, "sat": 0.448, "mottle": 0.019, "spec": 0.0, "grad": 0.168, "finish": "painted-metal"}, "pbrConfidence": 0.751, "summary": "meanLum 21.0, mottle 0.019, specularFraction 0.0, gradientStrength 0.168; confidence 0.751", "finishClassUsed": false, "finishClassNote": "See materialPipeline.finishClassRejected."}}, options, true)
  );
  mesh_body_shell_0.name = "Body shell: breast, back, flank and tail base";
  if (endpoint_body_shell_0) {
    mesh_body_shell_0.position.copy(endpoint_body_shell_0.midpoint);
    mesh_body_shell_0.quaternion.copy(endpoint_body_shell_0.quaternion);
  }
  mesh_body_shell_0.castShadow = options.castShadow ?? true;
  mesh_body_shell_0.receiveShadow = options.receiveShadow ?? true;
  mesh_body_shell_0.userData.sculptComponent = {"id": "body-shell", "name": "Body shell: breast, back, flank and tail base", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.82, "primitive": "ellipsoid", "topologyClass": "implicit", "topologyRationale": "A bird's trunk is one continuous organic volume with no seam anywhere on it. Seven smooth-unioned ellipsoids give the tilted ovoid the plate shows -- deep breast forward and low, back sloping down aft to the pygostyle -- which no single primitive reproduces. `continuous-sculpt` was the alternative but it forbids exactly the box/cylinder/cone primitives and still needs one lathe axis, and this body has no axis of revolution.", "geometryDescriptor": {"topologyIntent": "tilted continuous trunk volume, shoulder-high and forward, vent-low and aft", "sdf": {"primitives": [{"id": "body-shoulder", "type": "ellipsoid", "radii": [0.051, 0.062, 0.075], "transform": {"position": [0.0, 0.345, 0.035]}}, {"id": "body-keel", "type": "ellipsoid", "radii": [0.044, 0.055, 0.06], "transform": {"position": [0.0, 0.248, 0.03]}}, {"id": "body-mid", "type": "ellipsoid", "radii": [0.05, 0.066, 0.07], "transform": {"position": [0.0, 0.3, -0.012]}}, {"id": "body-vent", "type": "ellipsoid", "radii": [0.038, 0.048, 0.046], "transform": {"position": [0.0, 0.284, -0.055]}}, {"id": "body-pygostyle", "type": "ellipsoid", "radii": [0.026, 0.032, 0.026], "transform": {"position": [0.0, 0.3, -0.075]}}], "operations": [{"id": "body-u0", "type": "smooth-union", "left": "body-shoulder", "right": "body-keel", "radius": 0.03}, {"id": "body-u1", "type": "smooth-union", "left": "body-u0", "right": "body-mid", "radius": 0.03}, {"id": "body-u2", "type": "smooth-union", "left": "body-u1", "right": "body-vent", "radius": 0.03}, {"id": "body-u3", "type": "smooth-union", "left": "body-u2", "right": "body-pygostyle", "radius": 0.03}], "resolution": 24, "bounds": {"min": [-0.058, 0.185, -0.108], "max": [0.058, 0.412, 0.115]}}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Implicit surface at resolution 24 over its own bounds; see resolutionNote for the measured cost.", "proportionNote": "Measured off the plate, height normalised to 0.55 m: back top y = 0.406, belly y = 0.194, crotch y = 0.165, breast forward z = +0.116, tail root z = -0.083. The body's long axis is tilted about 32 degrees nose-up, which is the upright gamecock carriage.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "resolutionNote": "Resolution 24, about 9.5 mm cells. The body is a smooth blob with NO geometric feature at any scale -- its detail is the scalloped feather edge, which is material. 9.5 mm cells cost about 4,800 triangles where 34 cost 9,560 for a shape no camera can tell apart. Measured, not guessed. A resolution sweep on this exact spec (res_probe.mjs, five builds) gives total triangles 4,672 / 10,516 / 21,000 / 29,456 / 29,456 at resolutions 16 / 24 / 34 / 44 / 52, and factory build times of 169 / 382 / 898 / 1,274 / 1,279 ms. Two things follow. Triangle count goes as the SQUARE of the resolution, so this is the only lever that matters. And it SATURATES at 44: 44 and 52 return identical geometry, because the tessellation tier derived from targetTriangles caps the implicit sampling grid. The 52 and 56 first authored here were therefore never real -- they were clamped, and reading the spec you would have believed otherwise. SOURCE OF THE SATURATION, found in optimization-pass: the sweep showed resolutions 44 and 52 returning identical geometry and I recorded that as 'saturates at 44'. The real number is 40 -- forge/_shared/subdivision.py sets SDF_MAX_RESOLUTION to 40 for the `standard` tessellation tier, which targetTriangles 32000 selects. Both 44 and 52 were being clamped to 40, which is why they agreed. Every resolution on this prop (24, 34, 36) is below the cap and is therefore real.", "correctionNote": "blockout correction 1. Two defects the first render made visible and no gate would have: the thigh was modelled TWICE, once as two ellipsoids inside this field and again as the thigh-l/-r capsules, which rendered as a pendulous bifurcated sack; and the vent/pygostyle lobes reached z -0.129 against a measured tail root at -0.083, making the body 0.240 m deep where the plate says 0.199. The body ellipsoids are now five, and the two aft lobes are pulled forward.", "blendNote": "blockout correction 3. Blend radius 0.022 -> 0.030. At 0.022 the render showed a hard horizontal crease between the shoulder and keel lobes, so the trunk read as two stacked balloons. smin displaces by at most radius*0.25, so this inflates by up to 7.5 mm -- checked against the measured back top of 0.406 and belly of 0.194 rather than accepted blind."}, "parent": null, "attachment": {"parentId": null, "parentSocket": null, "contactType": "root"}, "dimensions": {"width": 0.116, "height": 0.227, "depth": 0.223}, "transform": {"position": [0.0, 0.0, 0.0], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "plumage-dark", "actionProfile": {"collider": {"shape": "convex", "note": "The declared collider for this asset is `convex`. One convex hull over the trunk is the whole prop's physics proxy: the legs are 13 mm thick and the tail is feathers, and neither earns its own hull on a low-end target."}, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "scalloped-feather-edges", "kind": "material-variation", "description": "Meso-scale scalloping of feather edges over the flank and back.", "evidenceRefs": ["ev-crop-body-wing"]}, {"id": "tail-covert-mass", "kind": "form", "description": "The green-black covert mass at the tail base, built into the pygostyle lobe of this shell.", "evidenceRefs": ["ev-crop-tail"]}], "evidenceRefs": ["ev-glb-bands", "ev-plate-full"], "fidelityTier": "macro", "colorMaterialRecipe": {"baseColor": "#332E24", "secondary": ["#18150F", "#282520", "#2E2B22"], "roughness": 0.45, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #26221A at roughness 0.45, no texture. Variation comes from colorVariation amount 0.10 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-body-dark", "ev-covert-iridescent"], "dominantAlbedo": "rgba(51, 46, 36, 1.0)", "secondaryAlbedo": "rgba(24, 21, 15, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.55, "materialClassNote": "None of the ten offered classes is `feather`. Fabric is the nearest real light-transport analogue -- a fibrous dielectric with a soft, slightly anisotropic sheen and no specular lobe -- and the confidence says how near, which is not very."}};
  node_body_shell_0.add(mesh_body_shell_0);
  meshes["body-shell"] = mesh_body_shell_0;
  colliders["body-shell"] = {"shape": "convex", "note": "The declared collider for this asset is `convex`. One convex hull over the trunk is the whole prop's physics proxy: the legs are 13 mm thick and the tail is feathers, and neither earns its own hull on a low-end target."};

  const endpoint_hackle_cape_1 = makeAttachmentEndpoint(null);
  const node_hackle_cape_1 = new THREE.Group();
  node_hackle_cape_1.name = "Oxblood hackle cape over the lower neck and shoulder__pivot";
  node_hackle_cape_1.scale.set(1, 1, 1);
  if (endpoint_hackle_cape_1) {
    node_hackle_cape_1.position.copy(endpoint_hackle_cape_1.start);
    node_hackle_cape_1.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_hackle_cape_1.position.set(0.0, 0.398, 0.046);
    node_hackle_cape_1.rotation.set(0.0, 0.0, 0.0);
  }
  node_hackle_cape_1.userData.sculptComponent = {"id": "hackle-cape", "name": "Oxblood hackle cape over the lower neck and shoulder", "level": "meso", "role": "plumage-mantle", "importance": 0.8, "confidence": 0.85, "primitive": "tapered-sweep", "topologyClass": "conforming-shell", "topologyRationale": "The hackle is a mantle of feathers lying OVER the neck and shoulder, so it conforms to what it covers rather than being a solid in its own right. Swept up the neck axis with a section that tapers from a wide shoulder flare to a narrow collar.", "geometryDescriptor": {"topologyIntent": "neck-and-shoulder cape flaring over the shoulder and narrowing to a collar", "taperedSweep": {"stations": [{"position": [0.0, -0.03, -0.01], "rx": 0.04, "rz": 0.036, "twist": 0.0}, {"position": [0.0, 0.006, 0.002], "rx": 0.032, "rz": 0.029, "twist": 0.0}, {"position": [0.0, 0.042, 0.014], "rx": 0.025, "rz": 0.023, "twist": 0.0}, {"position": [0.0, 0.076, 0.028], "rx": 0.019, "rz": 0.018, "twist": 0.0}], "radialSegments": 12, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 12 radial segments, capped: about 120 triangles.", "standProudNote": "Base (world y 0.368) radius 0.040 against the body's half-width of about 0.035 at that height: 5 mm proud. Collar (world y 0.474) radius 0.019 against the neck's 0.0165: 2.5 mm proud. Clears what it covers along its whole run, and nowhere is it flush.", "taperNote": "Tip/root ratio 0.019/0.040 = 0.48.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "correctionNote": "form-refinement correction 1. In the structural render this cape read as an OXBLOOD BLANKET thrown over the whole back, merging with the saddle into one red mass -- the plate has a narrow cape hugging the neck. Its base radius was 0.058, which is 12 mm proud of the body's own 0.0455 half-width at that height and flared it out over both shoulders. Cut to 0.040, which clears the body by a deliberate but modest 5 mm at the base and by 3 mm against the neck at the collar. Height reduced from 0.105 to 0.106 of run but shifted UP so it sleeves the neck's lower half rather than sitting on the shoulder."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "overlap", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.008, "overlap": 0.008, "gapTolerance": 0.0005, "note": "No gap is permitted: gapTolerance 0.5 mm, and the joint is an overlap so no two faces are coincident and co-facing."}, "dimensions": {"width": 0.08, "height": 0.106, "depth": 0.086}, "transform": {"position": [0.0, 0.398, 0.046], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "plumage-oxblood", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "hackle-lance-tips", "kind": "form", "description": "Narrow lanceolate hackle feathers; read as the cape's taper rather than modelled singly.", "evidenceRefs": ["ev-crop-neck-hackle"]}], "evidenceRefs": ["ev-crop-neck-hackle", "ev-hackle-oxblood"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#571B13", "secondary": ["#42140F", "#351815", "#54201A"], "roughness": 0.48, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #4A1710 at roughness 0.48, no texture. Variation comes from colorVariation amount 0.08 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-hackle-oxblood", "ev-saddle-oxblood"], "dominantAlbedo": "rgba(87, 27, 19, 1.0)", "secondaryAlbedo": "rgba(66, 20, 15, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.55, "materialClassNote": "Same reasoning as plumage-dark; these are the same feather keratin at a different albedo."}};
  node_hackle_cape_1.userData.actionProfile = {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}};
  (nodes["root"] ?? root).add(node_hackle_cape_1);
  nodes["hackle-cape"] = node_hackle_cape_1;
  const mesh_hackle_cape_1Geometry = endpoint_hackle_cape_1
    ? new THREE.CylinderGeometry(endpoint_hackle_cape_1.endRadius, endpoint_hackle_cape_1.baseRadius, endpoint_hackle_cape_1.length, 16, 6)
    : buildTaperedSweepGeometry({"stations": [{"position": [0.0, -0.03, -0.01], "rx": 0.04, "rz": 0.036, "twist": 0.0}, {"position": [0.0, 0.006, 0.002], "rx": 0.032, "rz": 0.029, "twist": 0.0}, {"position": [0.0, 0.042, 0.014], "rx": 0.025, "rz": 0.023, "twist": 0.0}, {"position": [0.0, 0.076, 0.028], "rx": 0.019, "rz": 0.018, "twist": 0.0}], "radialSegments": 12, "capEnds": true});
  if (!endpoint_hackle_cape_1) {
    mesh_hackle_cape_1Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_hackle_cape_1 = new THREE.Mesh(
    mesh_hackle_cape_1Geometry,
    materialMap["plumage-oxblood"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_hackle_cape_1.name = "Oxblood hackle cape over the lower neck and shoulder";
  if (endpoint_hackle_cape_1) {
    mesh_hackle_cape_1.position.copy(endpoint_hackle_cape_1.midpoint);
    mesh_hackle_cape_1.quaternion.copy(endpoint_hackle_cape_1.quaternion);
  }
  mesh_hackle_cape_1.castShadow = options.castShadow ?? true;
  mesh_hackle_cape_1.receiveShadow = options.receiveShadow ?? true;
  mesh_hackle_cape_1.userData.sculptComponent = {"id": "hackle-cape", "name": "Oxblood hackle cape over the lower neck and shoulder", "level": "meso", "role": "plumage-mantle", "importance": 0.8, "confidence": 0.85, "primitive": "tapered-sweep", "topologyClass": "conforming-shell", "topologyRationale": "The hackle is a mantle of feathers lying OVER the neck and shoulder, so it conforms to what it covers rather than being a solid in its own right. Swept up the neck axis with a section that tapers from a wide shoulder flare to a narrow collar.", "geometryDescriptor": {"topologyIntent": "neck-and-shoulder cape flaring over the shoulder and narrowing to a collar", "taperedSweep": {"stations": [{"position": [0.0, -0.03, -0.01], "rx": 0.04, "rz": 0.036, "twist": 0.0}, {"position": [0.0, 0.006, 0.002], "rx": 0.032, "rz": 0.029, "twist": 0.0}, {"position": [0.0, 0.042, 0.014], "rx": 0.025, "rz": 0.023, "twist": 0.0}, {"position": [0.0, 0.076, 0.028], "rx": 0.019, "rz": 0.018, "twist": 0.0}], "radialSegments": 12, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 12 radial segments, capped: about 120 triangles.", "standProudNote": "Base (world y 0.368) radius 0.040 against the body's half-width of about 0.035 at that height: 5 mm proud. Collar (world y 0.474) radius 0.019 against the neck's 0.0165: 2.5 mm proud. Clears what it covers along its whole run, and nowhere is it flush.", "taperNote": "Tip/root ratio 0.019/0.040 = 0.48.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "correctionNote": "form-refinement correction 1. In the structural render this cape read as an OXBLOOD BLANKET thrown over the whole back, merging with the saddle into one red mass -- the plate has a narrow cape hugging the neck. Its base radius was 0.058, which is 12 mm proud of the body's own 0.0455 half-width at that height and flared it out over both shoulders. Cut to 0.040, which clears the body by a deliberate but modest 5 mm at the base and by 3 mm against the neck at the collar. Height reduced from 0.105 to 0.106 of run but shifted UP so it sleeves the neck's lower half rather than sitting on the shoulder."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "overlap", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.008, "overlap": 0.008, "gapTolerance": 0.0005, "note": "No gap is permitted: gapTolerance 0.5 mm, and the joint is an overlap so no two faces are coincident and co-facing."}, "dimensions": {"width": 0.08, "height": 0.106, "depth": 0.086}, "transform": {"position": [0.0, 0.398, 0.046], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "plumage-oxblood", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "hackle-lance-tips", "kind": "form", "description": "Narrow lanceolate hackle feathers; read as the cape's taper rather than modelled singly.", "evidenceRefs": ["ev-crop-neck-hackle"]}], "evidenceRefs": ["ev-crop-neck-hackle", "ev-hackle-oxblood"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#571B13", "secondary": ["#42140F", "#351815", "#54201A"], "roughness": 0.48, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #4A1710 at roughness 0.48, no texture. Variation comes from colorVariation amount 0.08 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-hackle-oxblood", "ev-saddle-oxblood"], "dominantAlbedo": "rgba(87, 27, 19, 1.0)", "secondaryAlbedo": "rgba(66, 20, 15, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.55, "materialClassNote": "Same reasoning as plumage-dark; these are the same feather keratin at a different albedo."}};
  node_hackle_cape_1.add(mesh_hackle_cape_1);
  meshes["hackle-cape"] = mesh_hackle_cape_1;
  colliders["hackle-cape"] = null;

  const endpoint_saddle_cape_2 = makeAttachmentEndpoint(null);
  const node_saddle_cape_2 = new THREE.Group();
  node_saddle_cape_2.name = "Oxblood saddle over the lower back__pivot";
  node_saddle_cape_2.scale.set(1, 1, 1);
  if (endpoint_saddle_cape_2) {
    node_saddle_cape_2.position.copy(endpoint_saddle_cape_2.start);
    node_saddle_cape_2.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_saddle_cape_2.position.set(0.0, 0.385, 0.01);
    node_saddle_cape_2.rotation.set(0.0, 0.0, 0.0);
  }
  node_saddle_cape_2.userData.sculptComponent = {"id": "saddle-cape", "name": "Oxblood saddle over the lower back", "level": "meso", "role": "plumage-mantle", "importance": 0.7, "confidence": 0.8, "primitive": "tapered-sweep", "topologyClass": "conforming-shell", "topologyRationale": "Like the hackle, a mantle lying over the back rather than a solid. Swept aft along the back's own falling line and tapering into the tail root.", "geometryDescriptor": {"topologyIntent": "saddle mantle running aft over the back and closing at the tail root", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.03], "rx": 0.056, "rz": 0.03, "twist": 0.0}, {"position": [0.0, -0.01, -0.02], "rx": 0.046, "rz": 0.028, "twist": 0.0}, {"position": [0.0, -0.03, -0.07], "rx": 0.028, "rz": 0.022, "twist": 0.0}, {"position": [0.0, -0.052, -0.107], "rx": 0.013, "rz": 0.011, "twist": 0.0}], "radialSegments": 12, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 12 radial segments, capped: about 120 triangles.", "standProudNote": "Root top reaches world y 0.415 against the body's back at 0.407 -- 8 mm proud. The sweep sleeves the back rather than sitting flush on it, so there is no co-facing pair anywhere.", "taperNote": "Tip/root ratio 0.013/0.056 = 0.23.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "overlap", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.008, "overlap": 0.008, "gapTolerance": 0.0005, "note": "No gap is permitted: gapTolerance 0.5 mm, and the joint is an overlap so no two faces are coincident and co-facing."}, "dimensions": {"width": 0.112, "height": 0.082, "depth": 0.15}, "transform": {"position": [0.0, 0.385, 0.01], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "plumage-oxblood", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "saddle-patch", "kind": "material-variation", "description": "The oxblood patch measured at rgb 53,24,21 against the body's 24,21,15.", "evidenceRefs": ["ev-saddle-oxblood"]}], "evidenceRefs": ["ev-saddle-oxblood"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#571B13", "secondary": ["#42140F", "#351815", "#54201A"], "roughness": 0.48, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #4A1710 at roughness 0.48, no texture. Variation comes from colorVariation amount 0.08 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-hackle-oxblood", "ev-saddle-oxblood"], "dominantAlbedo": "rgba(87, 27, 19, 1.0)", "secondaryAlbedo": "rgba(66, 20, 15, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.55, "materialClassNote": "Same reasoning as plumage-dark; these are the same feather keratin at a different albedo."}};
  node_saddle_cape_2.userData.actionProfile = {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}};
  (nodes["root"] ?? root).add(node_saddle_cape_2);
  nodes["saddle-cape"] = node_saddle_cape_2;
  const mesh_saddle_cape_2Geometry = endpoint_saddle_cape_2
    ? new THREE.CylinderGeometry(endpoint_saddle_cape_2.endRadius, endpoint_saddle_cape_2.baseRadius, endpoint_saddle_cape_2.length, 16, 6)
    : buildTaperedSweepGeometry({"stations": [{"position": [0.0, 0.0, 0.03], "rx": 0.056, "rz": 0.03, "twist": 0.0}, {"position": [0.0, -0.01, -0.02], "rx": 0.046, "rz": 0.028, "twist": 0.0}, {"position": [0.0, -0.03, -0.07], "rx": 0.028, "rz": 0.022, "twist": 0.0}, {"position": [0.0, -0.052, -0.107], "rx": 0.013, "rz": 0.011, "twist": 0.0}], "radialSegments": 12, "capEnds": true});
  if (!endpoint_saddle_cape_2) {
    mesh_saddle_cape_2Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_saddle_cape_2 = new THREE.Mesh(
    mesh_saddle_cape_2Geometry,
    materialMap["plumage-oxblood"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_saddle_cape_2.name = "Oxblood saddle over the lower back";
  if (endpoint_saddle_cape_2) {
    mesh_saddle_cape_2.position.copy(endpoint_saddle_cape_2.midpoint);
    mesh_saddle_cape_2.quaternion.copy(endpoint_saddle_cape_2.quaternion);
  }
  mesh_saddle_cape_2.castShadow = options.castShadow ?? true;
  mesh_saddle_cape_2.receiveShadow = options.receiveShadow ?? true;
  mesh_saddle_cape_2.userData.sculptComponent = {"id": "saddle-cape", "name": "Oxblood saddle over the lower back", "level": "meso", "role": "plumage-mantle", "importance": 0.7, "confidence": 0.8, "primitive": "tapered-sweep", "topologyClass": "conforming-shell", "topologyRationale": "Like the hackle, a mantle lying over the back rather than a solid. Swept aft along the back's own falling line and tapering into the tail root.", "geometryDescriptor": {"topologyIntent": "saddle mantle running aft over the back and closing at the tail root", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.03], "rx": 0.056, "rz": 0.03, "twist": 0.0}, {"position": [0.0, -0.01, -0.02], "rx": 0.046, "rz": 0.028, "twist": 0.0}, {"position": [0.0, -0.03, -0.07], "rx": 0.028, "rz": 0.022, "twist": 0.0}, {"position": [0.0, -0.052, -0.107], "rx": 0.013, "rz": 0.011, "twist": 0.0}], "radialSegments": 12, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 12 radial segments, capped: about 120 triangles.", "standProudNote": "Root top reaches world y 0.415 against the body's back at 0.407 -- 8 mm proud. The sweep sleeves the back rather than sitting flush on it, so there is no co-facing pair anywhere.", "taperNote": "Tip/root ratio 0.013/0.056 = 0.23.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "overlap", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.008, "overlap": 0.008, "gapTolerance": 0.0005, "note": "No gap is permitted: gapTolerance 0.5 mm, and the joint is an overlap so no two faces are coincident and co-facing."}, "dimensions": {"width": 0.112, "height": 0.082, "depth": 0.15}, "transform": {"position": [0.0, 0.385, 0.01], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "plumage-oxblood", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "saddle-patch", "kind": "material-variation", "description": "The oxblood patch measured at rgb 53,24,21 against the body's 24,21,15.", "evidenceRefs": ["ev-saddle-oxblood"]}], "evidenceRefs": ["ev-saddle-oxblood"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#571B13", "secondary": ["#42140F", "#351815", "#54201A"], "roughness": 0.48, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #4A1710 at roughness 0.48, no texture. Variation comes from colorVariation amount 0.08 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-hackle-oxblood", "ev-saddle-oxblood"], "dominantAlbedo": "rgba(87, 27, 19, 1.0)", "secondaryAlbedo": "rgba(66, 20, 15, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.55, "materialClassNote": "Same reasoning as plumage-dark; these are the same feather keratin at a different albedo."}};
  node_saddle_cape_2.add(mesh_saddle_cape_2);
  meshes["saddle-cape"] = mesh_saddle_cape_2;
  colliders["saddle-cape"] = null;

  const endpoint_wing_l_3 = makeAttachmentEndpoint(null);
  const node_wing_l_3 = new THREE.Group();
  node_wing_l_3.name = "Folded wing (left)__pivot";
  node_wing_l_3.scale.set(1, 1, 1);
  if (endpoint_wing_l_3) {
    node_wing_l_3.position.copy(endpoint_wing_l_3.start);
    node_wing_l_3.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_wing_l_3.position.set(0.052, 0.352, 0.048);
    node_wing_l_3.rotation.set(0.0, 0.0, 0.0);
  }
  node_wing_l_3.userData.sculptComponent = {"id": "wing-l", "name": "Folded wing (left)", "level": "meso", "role": "wing", "importance": 0.7, "confidence": 0.72, "primitive": "tapered-sweep", "topologyClass": "conforming-shell", "topologyRationale": "A folded wing is a thin shell lying ON the flank, not a solid of its own and not relief carved into the body. It is swept along the wing's own fore-aft spine with a laterally thin, vertically deep cross-section that tapers to a true point at the primaries.", "geometryDescriptor": {"topologyIntent": "flank-conforming wing shell swept aft and down from the shoulder to the primary tip", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.016, "rz": 0.036, "twist": 0.0}, {"position": [0.0, -0.022, -0.042], "rx": 0.015, "rz": 0.042, "twist": 0.0}, {"position": [0.0, -0.048, -0.084], "rx": 0.01, "rz": 0.032, "twist": 0.0}, {"position": [0.0, -0.07, -0.12], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 10, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 10 radial segments, capped: about 90 triangles.", "standProudNote": "The spine sits at x = +0.048 and the section is 0.0125 half-wide, so the wing's outer surface reaches 0.060 while the body's half-width at the same height is about 0.046. The wing stands roughly 20 mm proud of the flank and is nowhere flush with it.", "chiralityNote": "A reflection of wing-r, not a rotation: every station's x is 0 in local space and the pivot's x negates. (x, y, z) -> (-x, y, z) with nothing else touched.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "correctionNote": "form-refinement correction 3. The wings did not READ in the structural render -- same material as the body and only 10 mm proud of a curved flank, so they vanished into it. The spine moves out from x +0.048 to +0.052 and the section deepens from 0.030 to 0.042 at its widest, so the wing now stands about 22 mm off the flank and casts an edge. It is a folded wing lying ON the body, so it must be visible as a distinct plane without becoming a fin.", "frameNote": "The spine runs aft and down in a plane of constant x, so the parallel-transport frame puts rx on the LATERAL axis and rz in that plane: rx is the wing's thickness away from the body and rz its vertical depth. The values are chosen accordingly -- thin across, deep down."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "overlap", "note": "Overlaps the flank rather than butting against it, so no two faces are coincident. No gap is permitted: gapTolerance 0.5 mm, and the joint is an overlap so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.008, "overlap": 0.008, "gapTolerance": 0.0005}, "dimensions": {"width": 0.032, "height": 0.084, "depth": 0.126}, "transform": {"position": [0.052, 0.352, 0.048], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "plumage-dark", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "covert-iridescence", "kind": "material-variation", "description": "Teal-green structural-colour sheen on the covert tips over the wing's upper fore third.", "evidenceRefs": ["ev-covert-iridescent"]}], "evidenceRefs": ["ev-crop-body-wing"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#332E24", "secondary": ["#18150F", "#282520", "#2E2B22"], "roughness": 0.45, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #26221A at roughness 0.45, no texture. Variation comes from colorVariation amount 0.10 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-body-dark", "ev-covert-iridescent"], "dominantAlbedo": "rgba(51, 46, 36, 1.0)", "secondaryAlbedo": "rgba(24, 21, 15, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.55, "materialClassNote": "None of the ten offered classes is `feather`. Fabric is the nearest real light-transport analogue -- a fibrous dielectric with a soft, slightly anisotropic sheen and no specular lobe -- and the confidence says how near, which is not very."}};
  node_wing_l_3.userData.actionProfile = {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}};
  (nodes["root"] ?? root).add(node_wing_l_3);
  nodes["wing-l"] = node_wing_l_3;
  const mesh_wing_l_3Geometry = endpoint_wing_l_3
    ? new THREE.CylinderGeometry(endpoint_wing_l_3.endRadius, endpoint_wing_l_3.baseRadius, endpoint_wing_l_3.length, 16, 6)
    : buildTaperedSweepGeometry({"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.016, "rz": 0.036, "twist": 0.0}, {"position": [0.0, -0.022, -0.042], "rx": 0.015, "rz": 0.042, "twist": 0.0}, {"position": [0.0, -0.048, -0.084], "rx": 0.01, "rz": 0.032, "twist": 0.0}, {"position": [0.0, -0.07, -0.12], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 10, "capEnds": true});
  if (!endpoint_wing_l_3) {
    mesh_wing_l_3Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_wing_l_3 = new THREE.Mesh(
    mesh_wing_l_3Geometry,
    materialMap["plumage-dark"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_wing_l_3.name = "Folded wing (left)";
  if (endpoint_wing_l_3) {
    mesh_wing_l_3.position.copy(endpoint_wing_l_3.midpoint);
    mesh_wing_l_3.quaternion.copy(endpoint_wing_l_3.quaternion);
  }
  mesh_wing_l_3.castShadow = options.castShadow ?? true;
  mesh_wing_l_3.receiveShadow = options.receiveShadow ?? true;
  mesh_wing_l_3.userData.sculptComponent = {"id": "wing-l", "name": "Folded wing (left)", "level": "meso", "role": "wing", "importance": 0.7, "confidence": 0.72, "primitive": "tapered-sweep", "topologyClass": "conforming-shell", "topologyRationale": "A folded wing is a thin shell lying ON the flank, not a solid of its own and not relief carved into the body. It is swept along the wing's own fore-aft spine with a laterally thin, vertically deep cross-section that tapers to a true point at the primaries.", "geometryDescriptor": {"topologyIntent": "flank-conforming wing shell swept aft and down from the shoulder to the primary tip", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.016, "rz": 0.036, "twist": 0.0}, {"position": [0.0, -0.022, -0.042], "rx": 0.015, "rz": 0.042, "twist": 0.0}, {"position": [0.0, -0.048, -0.084], "rx": 0.01, "rz": 0.032, "twist": 0.0}, {"position": [0.0, -0.07, -0.12], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 10, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 10 radial segments, capped: about 90 triangles.", "standProudNote": "The spine sits at x = +0.048 and the section is 0.0125 half-wide, so the wing's outer surface reaches 0.060 while the body's half-width at the same height is about 0.046. The wing stands roughly 20 mm proud of the flank and is nowhere flush with it.", "chiralityNote": "A reflection of wing-r, not a rotation: every station's x is 0 in local space and the pivot's x negates. (x, y, z) -> (-x, y, z) with nothing else touched.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "correctionNote": "form-refinement correction 3. The wings did not READ in the structural render -- same material as the body and only 10 mm proud of a curved flank, so they vanished into it. The spine moves out from x +0.048 to +0.052 and the section deepens from 0.030 to 0.042 at its widest, so the wing now stands about 22 mm off the flank and casts an edge. It is a folded wing lying ON the body, so it must be visible as a distinct plane without becoming a fin.", "frameNote": "The spine runs aft and down in a plane of constant x, so the parallel-transport frame puts rx on the LATERAL axis and rz in that plane: rx is the wing's thickness away from the body and rz its vertical depth. The values are chosen accordingly -- thin across, deep down."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "overlap", "note": "Overlaps the flank rather than butting against it, so no two faces are coincident. No gap is permitted: gapTolerance 0.5 mm, and the joint is an overlap so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.008, "overlap": 0.008, "gapTolerance": 0.0005}, "dimensions": {"width": 0.032, "height": 0.084, "depth": 0.126}, "transform": {"position": [0.052, 0.352, 0.048], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "plumage-dark", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "covert-iridescence", "kind": "material-variation", "description": "Teal-green structural-colour sheen on the covert tips over the wing's upper fore third.", "evidenceRefs": ["ev-covert-iridescent"]}], "evidenceRefs": ["ev-crop-body-wing"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#332E24", "secondary": ["#18150F", "#282520", "#2E2B22"], "roughness": 0.45, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #26221A at roughness 0.45, no texture. Variation comes from colorVariation amount 0.10 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-body-dark", "ev-covert-iridescent"], "dominantAlbedo": "rgba(51, 46, 36, 1.0)", "secondaryAlbedo": "rgba(24, 21, 15, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.55, "materialClassNote": "None of the ten offered classes is `feather`. Fabric is the nearest real light-transport analogue -- a fibrous dielectric with a soft, slightly anisotropic sheen and no specular lobe -- and the confidence says how near, which is not very."}};
  node_wing_l_3.add(mesh_wing_l_3);
  meshes["wing-l"] = mesh_wing_l_3;
  colliders["wing-l"] = null;

  const endpoint_wing_r_4 = makeAttachmentEndpoint(null);
  const node_wing_r_4 = new THREE.Group();
  node_wing_r_4.name = "Folded wing (right)__pivot";
  node_wing_r_4.scale.set(1, 1, 1);
  if (endpoint_wing_r_4) {
    node_wing_r_4.position.copy(endpoint_wing_r_4.start);
    node_wing_r_4.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_wing_r_4.position.set(-0.052, 0.352, 0.048);
    node_wing_r_4.rotation.set(0.0, 0.0, 0.0);
  }
  node_wing_r_4.userData.sculptComponent = {"id": "wing-r", "name": "Folded wing (right)", "level": "meso", "role": "wing", "importance": 0.7, "confidence": 0.6, "primitive": "tapered-sweep", "topologyClass": "conforming-shell", "topologyRationale": "A folded wing is a thin shell lying ON the flank, not a solid of its own and not relief carved into the body. It is swept along the wing's own fore-aft spine with a laterally thin, vertically deep cross-section that tapers to a true point at the primaries.", "geometryDescriptor": {"topologyIntent": "flank-conforming wing shell swept aft and down from the shoulder to the primary tip", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.016, "rz": 0.036, "twist": 0.0}, {"position": [0.0, -0.022, -0.042], "rx": 0.015, "rz": 0.042, "twist": 0.0}, {"position": [0.0, -0.048, -0.084], "rx": 0.01, "rz": 0.032, "twist": 0.0}, {"position": [0.0, -0.07, -0.12], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 10, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 10 radial segments, capped: about 90 triangles.", "standProudNote": "The spine sits at x = -0.048 and the section is 0.0125 half-wide, so the wing's outer surface reaches 0.060 while the body's half-width at the same height is about 0.046. The wing stands roughly 20 mm proud of the flank and is nowhere flush with it.", "chiralityNote": "A reflection of wing-l, not a rotation: every station's x is 0 in local space and the pivot's x negates. (x, y, z) -> (-x, y, z) with nothing else touched.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "correctionNote": "form-refinement correction 3. The wings did not READ in the structural render -- same material as the body and only 10 mm proud of a curved flank, so they vanished into it. The spine moves out from x -0.048 to -0.052 and the section deepens from 0.030 to 0.042 at its widest, so the wing now stands about 22 mm off the flank and casts an edge. It is a folded wing lying ON the body, so it must be visible as a distinct plane without becoming a fin.", "frameNote": "The spine runs aft and down in a plane of constant x, so the parallel-transport frame puts rx on the LATERAL axis and rz in that plane: rx is the wing's thickness away from the body and rz its vertical depth. The values are chosen accordingly -- thin across, deep down."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "overlap", "note": "Overlaps the flank rather than butting against it, so no two faces are coincident. No gap is permitted: gapTolerance 0.5 mm, and the joint is an overlap so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.008, "overlap": 0.008, "gapTolerance": 0.0005}, "dimensions": {"width": 0.032, "height": 0.084, "depth": 0.126}, "transform": {"position": [-0.052, 0.352, 0.048], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "plumage-dark", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "covert-iridescence", "kind": "material-variation", "description": "Teal-green structural-colour sheen on the covert tips over the wing's upper fore third.", "evidenceRefs": ["ev-covert-iridescent"]}], "evidenceRefs": ["ev-crop-body-wing"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#332E24", "secondary": ["#18150F", "#282520", "#2E2B22"], "roughness": 0.45, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #26221A at roughness 0.45, no texture. Variation comes from colorVariation amount 0.10 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-body-dark", "ev-covert-iridescent"], "dominantAlbedo": "rgba(51, 46, 36, 1.0)", "secondaryAlbedo": "rgba(24, 21, 15, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.55, "materialClassNote": "None of the ten offered classes is `feather`. Fabric is the nearest real light-transport analogue -- a fibrous dielectric with a soft, slightly anisotropic sheen and no specular lobe -- and the confidence says how near, which is not very."}};
  node_wing_r_4.userData.actionProfile = {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}};
  (nodes["root"] ?? root).add(node_wing_r_4);
  nodes["wing-r"] = node_wing_r_4;
  const mesh_wing_r_4Geometry = endpoint_wing_r_4
    ? new THREE.CylinderGeometry(endpoint_wing_r_4.endRadius, endpoint_wing_r_4.baseRadius, endpoint_wing_r_4.length, 16, 6)
    : buildTaperedSweepGeometry({"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.016, "rz": 0.036, "twist": 0.0}, {"position": [0.0, -0.022, -0.042], "rx": 0.015, "rz": 0.042, "twist": 0.0}, {"position": [0.0, -0.048, -0.084], "rx": 0.01, "rz": 0.032, "twist": 0.0}, {"position": [0.0, -0.07, -0.12], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 10, "capEnds": true});
  if (!endpoint_wing_r_4) {
    mesh_wing_r_4Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_wing_r_4 = new THREE.Mesh(
    mesh_wing_r_4Geometry,
    materialMap["plumage-dark"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_wing_r_4.name = "Folded wing (right)";
  if (endpoint_wing_r_4) {
    mesh_wing_r_4.position.copy(endpoint_wing_r_4.midpoint);
    mesh_wing_r_4.quaternion.copy(endpoint_wing_r_4.quaternion);
  }
  mesh_wing_r_4.castShadow = options.castShadow ?? true;
  mesh_wing_r_4.receiveShadow = options.receiveShadow ?? true;
  mesh_wing_r_4.userData.sculptComponent = {"id": "wing-r", "name": "Folded wing (right)", "level": "meso", "role": "wing", "importance": 0.7, "confidence": 0.6, "primitive": "tapered-sweep", "topologyClass": "conforming-shell", "topologyRationale": "A folded wing is a thin shell lying ON the flank, not a solid of its own and not relief carved into the body. It is swept along the wing's own fore-aft spine with a laterally thin, vertically deep cross-section that tapers to a true point at the primaries.", "geometryDescriptor": {"topologyIntent": "flank-conforming wing shell swept aft and down from the shoulder to the primary tip", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.016, "rz": 0.036, "twist": 0.0}, {"position": [0.0, -0.022, -0.042], "rx": 0.015, "rz": 0.042, "twist": 0.0}, {"position": [0.0, -0.048, -0.084], "rx": 0.01, "rz": 0.032, "twist": 0.0}, {"position": [0.0, -0.07, -0.12], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 10, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 10 radial segments, capped: about 90 triangles.", "standProudNote": "The spine sits at x = -0.048 and the section is 0.0125 half-wide, so the wing's outer surface reaches 0.060 while the body's half-width at the same height is about 0.046. The wing stands roughly 20 mm proud of the flank and is nowhere flush with it.", "chiralityNote": "A reflection of wing-l, not a rotation: every station's x is 0 in local space and the pivot's x negates. (x, y, z) -> (-x, y, z) with nothing else touched.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "correctionNote": "form-refinement correction 3. The wings did not READ in the structural render -- same material as the body and only 10 mm proud of a curved flank, so they vanished into it. The spine moves out from x -0.048 to -0.052 and the section deepens from 0.030 to 0.042 at its widest, so the wing now stands about 22 mm off the flank and casts an edge. It is a folded wing lying ON the body, so it must be visible as a distinct plane without becoming a fin.", "frameNote": "The spine runs aft and down in a plane of constant x, so the parallel-transport frame puts rx on the LATERAL axis and rz in that plane: rx is the wing's thickness away from the body and rz its vertical depth. The values are chosen accordingly -- thin across, deep down."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "overlap", "note": "Overlaps the flank rather than butting against it, so no two faces are coincident. No gap is permitted: gapTolerance 0.5 mm, and the joint is an overlap so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.008, "overlap": 0.008, "gapTolerance": 0.0005}, "dimensions": {"width": 0.032, "height": 0.084, "depth": 0.126}, "transform": {"position": [-0.052, 0.352, 0.048], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "plumage-dark", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "covert-iridescence", "kind": "material-variation", "description": "Teal-green structural-colour sheen on the covert tips over the wing's upper fore third.", "evidenceRefs": ["ev-covert-iridescent"]}], "evidenceRefs": ["ev-crop-body-wing"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#332E24", "secondary": ["#18150F", "#282520", "#2E2B22"], "roughness": 0.45, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #26221A at roughness 0.45, no texture. Variation comes from colorVariation amount 0.10 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-body-dark", "ev-covert-iridescent"], "dominantAlbedo": "rgba(51, 46, 36, 1.0)", "secondaryAlbedo": "rgba(24, 21, 15, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.55, "materialClassNote": "None of the ten offered classes is `feather`. Fabric is the nearest real light-transport analogue -- a fibrous dielectric with a soft, slightly anisotropic sheen and no specular lobe -- and the confidence says how near, which is not very."}};
  node_wing_r_4.add(mesh_wing_r_4);
  meshes["wing-r"] = mesh_wing_r_4;
  colliders["wing-r"] = null;

  const endpoint_neck_skin_5 = makeAttachmentEndpoint(null);
  const node_neck_skin_5 = new THREE.Group();
  node_neck_skin_5.name = "Bare red neck column__pivot";
  node_neck_skin_5.scale.set(1, 1, 1);
  if (endpoint_neck_skin_5) {
    node_neck_skin_5.position.copy(endpoint_neck_skin_5.start);
    node_neck_skin_5.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_neck_skin_5.position.set(0.0, 0.37, 0.035);
    node_neck_skin_5.rotation.set(0.0, 0.0, 0.0);
  }
  node_neck_skin_5.userData.sculptComponent = {"id": "neck-skin", "name": "Bare red neck column", "level": "meso", "role": "neck", "importance": 0.85, "confidence": 0.85, "primitive": "tapered-sweep", "topologyClass": "continuous-sculpt", "topologyRationale": "The neck is one continuous tapering organic column between two volumes it is welded to. `tapered-sweep` is one of the three primitives continuous-sculpt allows and the only one that both curves and narrows.", "geometryDescriptor": {"topologyIntent": "erect neck column, near-vertical with a slight forward lean, narrowing toward the head", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.032, "rz": 0.032, "twist": 0.0}, {"position": [0.0, 0.06, 0.02], "rx": 0.024, "rz": 0.024, "twist": 0.0}, {"position": [0.0, 0.105, 0.038], "rx": 0.017, "rz": 0.017, "twist": 0.0}, {"position": [0.0, 0.145, 0.052], "rx": 0.012, "rz": 0.012, "twist": 0.0}], "radialSegments": 12, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 12 radial segments, capped: about 120 triangles.", "carriageNote": "Rises 0.115 m while moving only 0.042 m forward -- about 20 degrees off vertical. This erect carriage is identity-defining; a farmyard rooster's S-curve is not what the plate shows. Measured: above 0.80 of standing height the silhouette's fore-aft extent collapses from 0.602 to 0.139 of height, which is the neck standing clear of the body.", "taperNote": "Tip/root ratio 0.012/0.032 = 0.375.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "correctionNote": "blockout correction 1. The root was at y 0.400 with radius 0.030, which put it exactly ON the body's upper surface at that depth rather than inside it -- an embed of about zero, and the kind of joint that shows as a crease or a gap once the body moves under it. Dropped to y 0.370 and lengthened to 0.145 so the root is 35 mm inside the shoulder volume. The tip still lands at world (0, 0.515, 0.087), inside the head's nape ellipsoid (z 0.0625-0.0885, y 0.494-0.526), so neck and head weld rather than meet."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "embed", "note": "The root station sits inside the shoulder volume, so the two weld rather than meet. No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.035, "overlap": 0.012, "gapTolerance": 0.0005}, "dimensions": {"width": 0.064, "height": 0.145, "depth": 0.116}, "transform": {"position": [0.0, 0.37, 0.035], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "skin-red", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "bare-skin-boundary", "kind": "boundary", "description": "Bare crimson skin above, hackle below; the boundary is abrupt, at about world y 0.480.", "evidenceRefs": ["ev-crop-head"]}], "evidenceRefs": ["ev-crop-head"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#9E4A40", "secondary": ["#6F3A35", "#914F4D", "#76645F"], "roughness": 0.55, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #8A3F38 at roughness 0.55, no texture. Variation comes from colorVariation amount 0.12 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-comb-ridge", "ev-head-skin-bare", "ev-wattle-earlobe"], "dominantAlbedo": "rgba(158, 74, 64, 1.0)", "secondaryAlbedo": "rgba(111, 58, 53, 1.0)", "materialClass": "skin", "materialClassConfidence": 0.9, "materialClassNote": "Bare vascular avian skin. This is the one material where the schema's class is exactly right."}};
  node_neck_skin_5.userData.actionProfile = {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}};
  (nodes["root"] ?? root).add(node_neck_skin_5);
  nodes["neck-skin"] = node_neck_skin_5;
  const mesh_neck_skin_5Geometry = endpoint_neck_skin_5
    ? new THREE.CylinderGeometry(endpoint_neck_skin_5.endRadius, endpoint_neck_skin_5.baseRadius, endpoint_neck_skin_5.length, 16, 6)
    : buildTaperedSweepGeometry({"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.032, "rz": 0.032, "twist": 0.0}, {"position": [0.0, 0.06, 0.02], "rx": 0.024, "rz": 0.024, "twist": 0.0}, {"position": [0.0, 0.105, 0.038], "rx": 0.017, "rz": 0.017, "twist": 0.0}, {"position": [0.0, 0.145, 0.052], "rx": 0.012, "rz": 0.012, "twist": 0.0}], "radialSegments": 12, "capEnds": true});
  if (!endpoint_neck_skin_5) {
    mesh_neck_skin_5Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_neck_skin_5 = new THREE.Mesh(
    mesh_neck_skin_5Geometry,
    materialMap["skin-red"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_neck_skin_5.name = "Bare red neck column";
  if (endpoint_neck_skin_5) {
    mesh_neck_skin_5.position.copy(endpoint_neck_skin_5.midpoint);
    mesh_neck_skin_5.quaternion.copy(endpoint_neck_skin_5.quaternion);
  }
  mesh_neck_skin_5.castShadow = options.castShadow ?? true;
  mesh_neck_skin_5.receiveShadow = options.receiveShadow ?? true;
  mesh_neck_skin_5.userData.sculptComponent = {"id": "neck-skin", "name": "Bare red neck column", "level": "meso", "role": "neck", "importance": 0.85, "confidence": 0.85, "primitive": "tapered-sweep", "topologyClass": "continuous-sculpt", "topologyRationale": "The neck is one continuous tapering organic column between two volumes it is welded to. `tapered-sweep` is one of the three primitives continuous-sculpt allows and the only one that both curves and narrows.", "geometryDescriptor": {"topologyIntent": "erect neck column, near-vertical with a slight forward lean, narrowing toward the head", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.032, "rz": 0.032, "twist": 0.0}, {"position": [0.0, 0.06, 0.02], "rx": 0.024, "rz": 0.024, "twist": 0.0}, {"position": [0.0, 0.105, 0.038], "rx": 0.017, "rz": 0.017, "twist": 0.0}, {"position": [0.0, 0.145, 0.052], "rx": 0.012, "rz": 0.012, "twist": 0.0}], "radialSegments": 12, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 12 radial segments, capped: about 120 triangles.", "carriageNote": "Rises 0.115 m while moving only 0.042 m forward -- about 20 degrees off vertical. This erect carriage is identity-defining; a farmyard rooster's S-curve is not what the plate shows. Measured: above 0.80 of standing height the silhouette's fore-aft extent collapses from 0.602 to 0.139 of height, which is the neck standing clear of the body.", "taperNote": "Tip/root ratio 0.012/0.032 = 0.375.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "correctionNote": "blockout correction 1. The root was at y 0.400 with radius 0.030, which put it exactly ON the body's upper surface at that depth rather than inside it -- an embed of about zero, and the kind of joint that shows as a crease or a gap once the body moves under it. Dropped to y 0.370 and lengthened to 0.145 so the root is 35 mm inside the shoulder volume. The tip still lands at world (0, 0.515, 0.087), inside the head's nape ellipsoid (z 0.0625-0.0885, y 0.494-0.526), so neck and head weld rather than meet."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "embed", "note": "The root station sits inside the shoulder volume, so the two weld rather than meet. No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.035, "overlap": 0.012, "gapTolerance": 0.0005}, "dimensions": {"width": 0.064, "height": 0.145, "depth": 0.116}, "transform": {"position": [0.0, 0.37, 0.035], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "skin-red", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "bare-skin-boundary", "kind": "boundary", "description": "Bare crimson skin above, hackle below; the boundary is abrupt, at about world y 0.480.", "evidenceRefs": ["ev-crop-head"]}], "evidenceRefs": ["ev-crop-head"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#9E4A40", "secondary": ["#6F3A35", "#914F4D", "#76645F"], "roughness": 0.55, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #8A3F38 at roughness 0.55, no texture. Variation comes from colorVariation amount 0.12 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-comb-ridge", "ev-head-skin-bare", "ev-wattle-earlobe"], "dominantAlbedo": "rgba(158, 74, 64, 1.0)", "secondaryAlbedo": "rgba(111, 58, 53, 1.0)", "materialClass": "skin", "materialClassConfidence": 0.9, "materialClassNote": "Bare vascular avian skin. This is the one material where the schema's class is exactly right."}};
  node_neck_skin_5.add(mesh_neck_skin_5);
  meshes["neck-skin"] = mesh_neck_skin_5;
  colliders["neck-skin"] = null;

  const endpoint_head_6 = makeAttachmentEndpoint(null);
  const node_head_6 = new THREE.Group();
  node_head_6.name = "Head with dressed comb and trimmed wattle__pivot";
  node_head_6.scale.set(1, 1, 1);
  if (endpoint_head_6) {
    node_head_6.position.copy(endpoint_head_6.start);
    node_head_6.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_head_6.position.set(0.0, 0.531, 0.1023);
    node_head_6.rotation.set(0.0, 0.0, 0.0);
  }
  node_head_6.userData.sculptComponent = {"id": "head", "name": "Head with dressed comb and trimmed wattle", "level": "macro", "role": "head", "importance": 1.0, "confidence": 0.85, "primitive": "ellipsoid", "topologyClass": "implicit", "topologyRationale": "Skull, cheek, nape, comb and wattle are ONE continuous skin surface on a live bird. Building the comb as a separate component would put a small ridge flush on the crown -- the exact coincident-co-facing-surface pair that z-fights -- while an implicit union of five ellipsoids welds them and still leaves the comb standing proud in the silhouette.", "geometryDescriptor": {"topologyIntent": "welded head volume: skull, jaw, nape, a low dressed comb ridge and a trimmed wattle nub", "sdf": {"primitives": [{"id": "skull", "type": "ellipsoid", "radii": [0.0175, 0.0205, 0.0255], "transform": {"position": [0.0, -0.0055, -0.0068]}}, {"id": "jaw-cheek", "type": "ellipsoid", "radii": [0.0165, 0.015, 0.0215], "transform": {"position": [0.0, -0.018, -0.0143]}}, {"id": "comb-ridge", "type": "ellipsoid", "radii": [0.0052, 0.0066, 0.0178], "transform": {"position": [0.0, 0.0138, -0.0032]}}, {"id": "wattle-nub", "type": "ellipsoid", "radii": [0.006, 0.0072, 0.0058], "transform": {"position": [0.0, -0.0315, 0.0012]}}, {"id": "nape", "type": "ellipsoid", "radii": [0.015, 0.016, 0.013], "transform": {"position": [0.0, -0.021, -0.0268]}}], "operations": [{"id": "head-u0", "type": "smooth-union", "left": "skull", "right": "jaw-cheek", "radius": 0.0058}, {"id": "head-u1", "type": "smooth-union", "left": "head-u0", "right": "nape", "radius": 0.0058}, {"id": "head-u2", "type": "smooth-union", "left": "head-u1", "right": "comb-ridge", "radius": 0.0058}, {"id": "head-u3", "type": "smooth-union", "left": "head-u2", "right": "wattle-nub", "radius": 0.0058}], "resolution": 34, "bounds": {"min": [-0.03, -0.047, -0.0423], "max": [0.03, 0.031, 0.0317]}}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Implicit surface at resolution 30 over its own bounds; see resolutionNote for the measured cost.", "combNote": "form-refinement correction 5. Two changes, both found in the head close-up rather than by a gate. The ridge was 9.6 x 17.6 x 43.0 mm and read as a squared-off block: too TALL for a dressed comb, and longer than the plate's, which runs from behind the beak to about mid-skull rather than the whole crown. Now 10.4 x 13.2 x 35.6 mm, shifted 3.2 mm forward. It stands 6.9 mm proud of the skull's 0.5460 crown, is rounded rather than flat-topped, and still carries NO serrated points. The union radius stays a tight 5.8 mm so the blend cannot swallow it -- that constraint has held through every correction.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "pivotNote": "The head node sits at the PUPIL, world (0.0, 0.531, 0.1023), measured as the centroid of the 99 pixels below luma 45 in the plate's eye window. Its SDF is authored in local coordinates around that point. The pivot is placed there rather than at the head's volumetric centre for a concrete reason: the eye pair is an InstancedMesh, and the repetition emitter can only place instances on a ring about the parent node's own origin -- it has no per-instance offset. Putting the head's pivot on the eye line is what makes a two-element ring of radius 0.033 land both eyes exactly where they were measured, instead of at the model origin on the floor.", "resolutionNote": "Resolution 30, about 2.6 mm cells. Held higher than the body's because the comb ridge is 9.6 mm wide and must survive: 2.6 mm cells give it 3.7 across and 6.8 tall. This is the one place on the prop where resolution buys identity rather than smoothness. RAISED 30 -> 34 in form-refinement correction 5. At 30 the comb rendered with a FLAT, squared-off top: 2.6 mm cells across a 17.6 mm ridge keeps the ridge but not its roundness, and a flat-topped slab on the crown is exactly what a DRESSED comb must not look like. 34 gives 2.3 mm cells for about 1,240 extra triangles, affordable at 61 percent of the ceiling. SOURCE OF THE SATURATION, found in optimization-pass: the sweep showed resolutions 44 and 52 returning identical geometry and I recorded that as 'saturates at 44'. The real number is 40 -- forge/_shared/subdivision.py sets SDF_MAX_RESOLUTION to 40 for the `standard` tessellation tier, which targetTriangles 32000 selects. Both 44 and 52 were being clamped to 40, which is why they agreed. Every resolution on this prop (24, 34, 36) is below the cap and is therefore real."}, "parent": null, "attachment": {"parentId": "neck-skin", "parentSocket": null, "contactType": "embed", "note": "The neck's top station sits inside the nape ellipsoid; the two overlap rather than butt. No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.012, "overlap": 0.012, "gapTolerance": 0.0005}, "dimensions": {"width": 0.06, "height": 0.078, "depth": 0.074}, "transform": {"position": [0.0, 0.531, 0.1023], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "skin-red", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "dressed-comb", "kind": "form", "description": "A low papillated fore-aft ridge with no points -- the comb has been trimmed.", "evidenceRefs": ["ev-comb-ridge", "ev-crop-head"]}, {"id": "trimmed-wattle", "kind": "form", "description": "One small fleshy nub under the jaw where an untrimmed bird carries two hanging lobes.", "evidenceRefs": ["ev-wattle-earlobe"]}, {"id": "ear-lobe", "kind": "material-variation", "description": "Bare skin patch behind and below the eye, measured rgb 145,79,77.", "evidenceRefs": ["ev-wattle-earlobe"]}], "evidenceRefs": ["ev-crop-head"], "fidelityTier": "macro", "colorMaterialRecipe": {"baseColor": "#9E4A40", "secondary": ["#6F3A35", "#914F4D", "#76645F"], "roughness": 0.55, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #8A3F38 at roughness 0.55, no texture. Variation comes from colorVariation amount 0.12 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-comb-ridge", "ev-head-skin-bare", "ev-wattle-earlobe"], "dominantAlbedo": "rgba(158, 74, 64, 1.0)", "secondaryAlbedo": "rgba(111, 58, 53, 1.0)", "materialClass": "skin", "materialClassConfidence": 0.9, "materialClassNote": "Bare vascular avian skin. This is the one material where the schema's class is exactly right."}};
  node_head_6.userData.actionProfile = {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}};
  (nodes["root"] ?? root).add(node_head_6);
  nodes["head"] = node_head_6;
  const mesh_head_6Geometry = polygonizeSdf({"primitives": [{"id": "skull", "type": "ellipsoid", "radii": [0.0175, 0.0205, 0.0255], "transform": {"position": [0.0, -0.0055, -0.0068]}}, {"id": "jaw-cheek", "type": "ellipsoid", "radii": [0.0165, 0.015, 0.0215], "transform": {"position": [0.0, -0.018, -0.0143]}}, {"id": "comb-ridge", "type": "ellipsoid", "radii": [0.0052, 0.0066, 0.0178], "transform": {"position": [0.0, 0.0138, -0.0032]}}, {"id": "wattle-nub", "type": "ellipsoid", "radii": [0.006, 0.0072, 0.0058], "transform": {"position": [0.0, -0.0315, 0.0012]}}, {"id": "nape", "type": "ellipsoid", "radii": [0.015, 0.016, 0.013], "transform": {"position": [0.0, -0.021, -0.0268]}}], "operations": [{"id": "head-u0", "type": "smooth-union", "left": "skull", "right": "jaw-cheek", "radius": 0.0058}, {"id": "head-u1", "type": "smooth-union", "left": "head-u0", "right": "nape", "radius": 0.0058}, {"id": "head-u2", "type": "smooth-union", "left": "head-u1", "right": "comb-ridge", "radius": 0.0058}, {"id": "head-u3", "type": "smooth-union", "left": "head-u2", "right": "wattle-nub", "radius": 0.0058}], "resolution": 34, "bounds": {"min": [-0.03, -0.047, -0.0423], "max": [0.03, 0.031, 0.0317]}});
  if (!endpoint_head_6) {
    mesh_head_6Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_head_6 = new THREE.Mesh(
    mesh_head_6Geometry,
    createSculptMaterial("skin-red", {"id": "skin-red", "name": "Bare vascular head and neck skin", "type": "standard", "materialClass": "skin", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#9E4A40", "color": "#9E4A40", "albedo": {"dominant": "#9E4A40", "secondary": ["#6F3A35", "#914F4D", "#76645F"], "samplingNotes": "Three verified crops on bare skin: the cheek at (768,118,34,32) reads rgb 111,58,53 in shade, the ear-lobe/wattle at (760,126,18,16) reads rgb 145,79,77 lit, and the comb ridge at (772,66,44,16) reads rgb 118,100,95 diluted by backdrop at the silhouette edge. The lit and shaded readings bracket the albedo; #8A3F38 sits between them, which is the de-lit value and not either raw sample. LIFTED #8A3F38 -> #9E4A40 in material-pass. P90 ratio 0.59, and the render also read flat: plate 34/67/108 against render 44/52/64. Lifted about 16 percent with the saturation held. material-pass correction 1, from a measured render-vs-plate comparison rather than by eye. Six crops were taken on the RENDER at each material's visible footprint -- placed against a gridded render and confirmed on a contact sheet, after a first attempt put three of them on the wrong surface (the 'leg' crop came back as black plumage) -- and compared to the plate crop for the same material by luma percentile. The pattern is systematic and is NOT a uniform exposure gap: P90 render/plate ratios came back 1.05 for the beak, 0.73 for the tail, 0.70 for the oxblood, 0.68 for the leg scale, 0.59 for the head skin and 0.28 for the body. Bright material correct, mid tones short, darks crushed -- that is a tone curve crushing shadows, and the consequence is that the body flank rendered with a luma range of 6 to 10 where the plate's spans 10 to 36. A surface with four levels of range has no readable FORM; it is a silhouette. Each albedo below is lifted by the factor its own measurement asks for, and the beak, which measured correct, is deliberately NOT touched."}, "roughness": {"base": 0.55, "variation": 0.08, "notes": "Papillated skin: satin overall with no tight highlight anywhere on it. Real comb tissue is strongly subsurface-scattering, which is deliberately NOT modelled -- an SSS term on a low-end integrated GPU is not affordable and the albedo alone carries the read."}, "metalness": 0.0, "colorVariation": {"amount": 0.18, "axis": "y", "notes": "Brightest on the comb and wattle, deepening down the throat. Variation raised by half in the same correction: with a flat albedo and a shadow-crushing tone curve, colorVariation is the only thing carrying form on these surfaces."}, "textureless": {"declared": true, "evidence": ["Cheek crop (768,118,34,32): the papillae that give this skin its texture measure under 1 mm on a 0.55 m bird -- below one pixel at any distance an FPS camera sees it from.", "The identity of the head is the SHAPE of the dressed comb and the trimmed wattle, both built as geometry in the head's implicit field, not surface detail.", "Correctness: a texture set would force color to white and discard the de-lit #8A3F38 that three separate crops were used to establish.", "analyze_texture.py on crops/head-skin-bare.png: meanLum 74.0, meanSaturation 0.548, mottle 0.026, specularFraction 0.0, gradientStrength 0.219; confidence 0.801. specularFraction 0.0 and mottle at or below 0.060 is a surface with no resolvable pattern and no tight highlight -- measured, not asserted."]}, "referenceCrops": ["ev-comb-ridge", "ev-head-skin-bare", "ev-wattle-earlobe"], "qualityTier": "hero", "materialClassConfidence": 0.9, "materialClassNote": "Bare vascular avian skin. This is the one material where the schema's class is exactly right.", "measuredEvidence": {"crop": "head-skin-bare", "analyzeTexture": {"lum": 74.0, "sat": 0.548, "mottle": 0.026, "spec": 0.0, "grad": 0.219, "finish": "painted-metal"}, "pbrConfidence": 0.801, "summary": "meanLum 74.0, meanSaturation 0.548, mottle 0.026, specularFraction 0.0, gradientStrength 0.219; confidence 0.801", "finishClassUsed": false, "finishClassNote": "See materialPipeline.finishClassRejected."}}, options, true)
  );
  mesh_head_6.name = "Head with dressed comb and trimmed wattle";
  if (endpoint_head_6) {
    mesh_head_6.position.copy(endpoint_head_6.midpoint);
    mesh_head_6.quaternion.copy(endpoint_head_6.quaternion);
  }
  mesh_head_6.castShadow = options.castShadow ?? true;
  mesh_head_6.receiveShadow = options.receiveShadow ?? true;
  mesh_head_6.userData.sculptComponent = {"id": "head", "name": "Head with dressed comb and trimmed wattle", "level": "macro", "role": "head", "importance": 1.0, "confidence": 0.85, "primitive": "ellipsoid", "topologyClass": "implicit", "topologyRationale": "Skull, cheek, nape, comb and wattle are ONE continuous skin surface on a live bird. Building the comb as a separate component would put a small ridge flush on the crown -- the exact coincident-co-facing-surface pair that z-fights -- while an implicit union of five ellipsoids welds them and still leaves the comb standing proud in the silhouette.", "geometryDescriptor": {"topologyIntent": "welded head volume: skull, jaw, nape, a low dressed comb ridge and a trimmed wattle nub", "sdf": {"primitives": [{"id": "skull", "type": "ellipsoid", "radii": [0.0175, 0.0205, 0.0255], "transform": {"position": [0.0, -0.0055, -0.0068]}}, {"id": "jaw-cheek", "type": "ellipsoid", "radii": [0.0165, 0.015, 0.0215], "transform": {"position": [0.0, -0.018, -0.0143]}}, {"id": "comb-ridge", "type": "ellipsoid", "radii": [0.0052, 0.0066, 0.0178], "transform": {"position": [0.0, 0.0138, -0.0032]}}, {"id": "wattle-nub", "type": "ellipsoid", "radii": [0.006, 0.0072, 0.0058], "transform": {"position": [0.0, -0.0315, 0.0012]}}, {"id": "nape", "type": "ellipsoid", "radii": [0.015, 0.016, 0.013], "transform": {"position": [0.0, -0.021, -0.0268]}}], "operations": [{"id": "head-u0", "type": "smooth-union", "left": "skull", "right": "jaw-cheek", "radius": 0.0058}, {"id": "head-u1", "type": "smooth-union", "left": "head-u0", "right": "nape", "radius": 0.0058}, {"id": "head-u2", "type": "smooth-union", "left": "head-u1", "right": "comb-ridge", "radius": 0.0058}, {"id": "head-u3", "type": "smooth-union", "left": "head-u2", "right": "wattle-nub", "radius": 0.0058}], "resolution": 34, "bounds": {"min": [-0.03, -0.047, -0.0423], "max": [0.03, 0.031, 0.0317]}}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Implicit surface at resolution 30 over its own bounds; see resolutionNote for the measured cost.", "combNote": "form-refinement correction 5. Two changes, both found in the head close-up rather than by a gate. The ridge was 9.6 x 17.6 x 43.0 mm and read as a squared-off block: too TALL for a dressed comb, and longer than the plate's, which runs from behind the beak to about mid-skull rather than the whole crown. Now 10.4 x 13.2 x 35.6 mm, shifted 3.2 mm forward. It stands 6.9 mm proud of the skull's 0.5460 crown, is rounded rather than flat-topped, and still carries NO serrated points. The union radius stays a tight 5.8 mm so the blend cannot swallow it -- that constraint has held through every correction.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "pivotNote": "The head node sits at the PUPIL, world (0.0, 0.531, 0.1023), measured as the centroid of the 99 pixels below luma 45 in the plate's eye window. Its SDF is authored in local coordinates around that point. The pivot is placed there rather than at the head's volumetric centre for a concrete reason: the eye pair is an InstancedMesh, and the repetition emitter can only place instances on a ring about the parent node's own origin -- it has no per-instance offset. Putting the head's pivot on the eye line is what makes a two-element ring of radius 0.033 land both eyes exactly where they were measured, instead of at the model origin on the floor.", "resolutionNote": "Resolution 30, about 2.6 mm cells. Held higher than the body's because the comb ridge is 9.6 mm wide and must survive: 2.6 mm cells give it 3.7 across and 6.8 tall. This is the one place on the prop where resolution buys identity rather than smoothness. RAISED 30 -> 34 in form-refinement correction 5. At 30 the comb rendered with a FLAT, squared-off top: 2.6 mm cells across a 17.6 mm ridge keeps the ridge but not its roundness, and a flat-topped slab on the crown is exactly what a DRESSED comb must not look like. 34 gives 2.3 mm cells for about 1,240 extra triangles, affordable at 61 percent of the ceiling. SOURCE OF THE SATURATION, found in optimization-pass: the sweep showed resolutions 44 and 52 returning identical geometry and I recorded that as 'saturates at 44'. The real number is 40 -- forge/_shared/subdivision.py sets SDF_MAX_RESOLUTION to 40 for the `standard` tessellation tier, which targetTriangles 32000 selects. Both 44 and 52 were being clamped to 40, which is why they agreed. Every resolution on this prop (24, 34, 36) is below the cap and is therefore real."}, "parent": null, "attachment": {"parentId": "neck-skin", "parentSocket": null, "contactType": "embed", "note": "The neck's top station sits inside the nape ellipsoid; the two overlap rather than butt. No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.012, "overlap": 0.012, "gapTolerance": 0.0005}, "dimensions": {"width": 0.06, "height": 0.078, "depth": 0.074}, "transform": {"position": [0.0, 0.531, 0.1023], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "skin-red", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "dressed-comb", "kind": "form", "description": "A low papillated fore-aft ridge with no points -- the comb has been trimmed.", "evidenceRefs": ["ev-comb-ridge", "ev-crop-head"]}, {"id": "trimmed-wattle", "kind": "form", "description": "One small fleshy nub under the jaw where an untrimmed bird carries two hanging lobes.", "evidenceRefs": ["ev-wattle-earlobe"]}, {"id": "ear-lobe", "kind": "material-variation", "description": "Bare skin patch behind and below the eye, measured rgb 145,79,77.", "evidenceRefs": ["ev-wattle-earlobe"]}], "evidenceRefs": ["ev-crop-head"], "fidelityTier": "macro", "colorMaterialRecipe": {"baseColor": "#9E4A40", "secondary": ["#6F3A35", "#914F4D", "#76645F"], "roughness": 0.55, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #8A3F38 at roughness 0.55, no texture. Variation comes from colorVariation amount 0.12 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-comb-ridge", "ev-head-skin-bare", "ev-wattle-earlobe"], "dominantAlbedo": "rgba(158, 74, 64, 1.0)", "secondaryAlbedo": "rgba(111, 58, 53, 1.0)", "materialClass": "skin", "materialClassConfidence": 0.9, "materialClassNote": "Bare vascular avian skin. This is the one material where the schema's class is exactly right."}};
  node_head_6.add(mesh_head_6);
  meshes["head"] = mesh_head_6;
  colliders["head"] = null;

  const endpoint_beak_7 = makeAttachmentEndpoint(null);
  const node_beak_7 = new THREE.Group();
  node_beak_7.name = "Hooked horn beak__pivot";
  node_beak_7.scale.set(1, 1, 1);
  if (endpoint_beak_7) {
    node_beak_7.position.copy(endpoint_beak_7.start);
    node_beak_7.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_beak_7.position.set(0.0, 0.5215, 0.112);
    node_beak_7.rotation.set(0.0, 0.0, 0.0);
  }
  node_beak_7.userData.sculptComponent = {"id": "beak", "name": "Hooked horn beak", "level": "micro", "role": "beak", "importance": 0.75, "confidence": 0.8, "primitive": "tapered-sweep", "topologyClass": "continuous-sculpt", "topologyRationale": "A beak is one continuous keratin form that curves AND comes to a point. Only tapered-sweep carries both a curved spine and a section that closes to zero.", "geometryDescriptor": {"topologyIntent": "stout beak hooking downward at the tip, upper mandible overhanging", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.011, "rz": 0.01, "twist": 0.0}, {"position": [0.0, -0.002, 0.018], "rx": 0.0088, "rz": 0.008, "twist": 0.0}, {"position": [0.0, -0.008, 0.028], "rx": 0.005, "rz": 0.0048, "twist": 0.0}, {"position": [0.0, -0.014, 0.034], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 10, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 10 radial segments: about 80 triangles.", "hookNote": "The spine drops 14 mm over 26 mm of forward travel and the drop accelerates over the last station -- that acceleration IS the hook. A straight cone would occupy roughly the same silhouette cells, which is why the swept-arc gate is run on this component too.", "taperNote": "Tip closes to a true point, ratio 0.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "capNote": "POST-SHIP CORRECTION 3b. The corrected point-in-mesh test measured this joint at 0.4 mm -- the beak root sat at world z 0.1200 against a skull whose fore surface at that height is 0.1205, so it was touching by half a millimetre and its cap was effectively flush with the head. The BROKEN version of the test had reported 4.6 mm here and hidden it. The pivot moves back 8 mm to z 0.1120, which is 8.5 mm inside the skull, and the stations lengthen by the same 8 mm so the tip still lands at world z 0.146 and the silhouette is unchanged. The root radius of 0.011 also fits inside the skull's 0.0129 half-width at that point, so the cap is swallowed rather than merely overlapped."}, "parent": null, "attachment": {"parentId": "head", "parentSocket": null, "contactType": "embed", "note": "Root station is inside the jaw ellipsoid, so the beak grows out of the head. No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.0085, "overlap": 0.012, "gapTolerance": 0.0005}, "dimensions": {"width": 0.022, "height": 0.024, "depth": 0.034}, "transform": {"position": [0.0, 0.5215, 0.112], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "beak-horn", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "culmen-sheen", "kind": "material-variation", "description": "A satin highlight runs the length of the culmen; carried by the beak-horn roughness of 0.35.", "evidenceRefs": ["ev-beak-horn"]}], "evidenceRefs": ["ev-beak-base"], "fidelityTier": "micro", "colorMaterialRecipe": {"baseColor": "#9B8465", "secondary": ["#81654F", "#8F7E6B", "#A89070"], "roughness": 0.42, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #9B8465 at roughness 0.35, no texture. Variation comes from colorVariation amount 0.06 on the z axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-beak-horn"], "dominantAlbedo": "rgba(155, 132, 101, 1.0)", "secondaryAlbedo": "rgba(129, 101, 79, 1.0)", "materialClass": "skin", "materialClassConfidence": 0.55, "materialClassNote": "Beak keratin is a hard, polished derivative of skin. `skin` is the nearest class; the 0.35 roughness is much lower than any real skin, which is what the confidence records."}};
  node_beak_7.userData.actionProfile = {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}};
  (nodes["root"] ?? root).add(node_beak_7);
  nodes["beak"] = node_beak_7;
  const mesh_beak_7Geometry = endpoint_beak_7
    ? new THREE.CylinderGeometry(endpoint_beak_7.endRadius, endpoint_beak_7.baseRadius, endpoint_beak_7.length, 16, 6)
    : buildTaperedSweepGeometry({"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.011, "rz": 0.01, "twist": 0.0}, {"position": [0.0, -0.002, 0.018], "rx": 0.0088, "rz": 0.008, "twist": 0.0}, {"position": [0.0, -0.008, 0.028], "rx": 0.005, "rz": 0.0048, "twist": 0.0}, {"position": [0.0, -0.014, 0.034], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 10, "capEnds": true});
  if (!endpoint_beak_7) {
    mesh_beak_7Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_beak_7 = new THREE.Mesh(
    mesh_beak_7Geometry,
    materialMap["beak-horn"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_beak_7.name = "Hooked horn beak";
  if (endpoint_beak_7) {
    mesh_beak_7.position.copy(endpoint_beak_7.midpoint);
    mesh_beak_7.quaternion.copy(endpoint_beak_7.quaternion);
  }
  mesh_beak_7.castShadow = options.castShadow ?? true;
  mesh_beak_7.receiveShadow = options.receiveShadow ?? true;
  mesh_beak_7.userData.sculptComponent = {"id": "beak", "name": "Hooked horn beak", "level": "micro", "role": "beak", "importance": 0.75, "confidence": 0.8, "primitive": "tapered-sweep", "topologyClass": "continuous-sculpt", "topologyRationale": "A beak is one continuous keratin form that curves AND comes to a point. Only tapered-sweep carries both a curved spine and a section that closes to zero.", "geometryDescriptor": {"topologyIntent": "stout beak hooking downward at the tip, upper mandible overhanging", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.011, "rz": 0.01, "twist": 0.0}, {"position": [0.0, -0.002, 0.018], "rx": 0.0088, "rz": 0.008, "twist": 0.0}, {"position": [0.0, -0.008, 0.028], "rx": 0.005, "rz": 0.0048, "twist": 0.0}, {"position": [0.0, -0.014, 0.034], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 10, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 10 radial segments: about 80 triangles.", "hookNote": "The spine drops 14 mm over 26 mm of forward travel and the drop accelerates over the last station -- that acceleration IS the hook. A straight cone would occupy roughly the same silhouette cells, which is why the swept-arc gate is run on this component too.", "taperNote": "Tip closes to a true point, ratio 0.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "capNote": "POST-SHIP CORRECTION 3b. The corrected point-in-mesh test measured this joint at 0.4 mm -- the beak root sat at world z 0.1200 against a skull whose fore surface at that height is 0.1205, so it was touching by half a millimetre and its cap was effectively flush with the head. The BROKEN version of the test had reported 4.6 mm here and hidden it. The pivot moves back 8 mm to z 0.1120, which is 8.5 mm inside the skull, and the stations lengthen by the same 8 mm so the tip still lands at world z 0.146 and the silhouette is unchanged. The root radius of 0.011 also fits inside the skull's 0.0129 half-width at that point, so the cap is swallowed rather than merely overlapped."}, "parent": null, "attachment": {"parentId": "head", "parentSocket": null, "contactType": "embed", "note": "Root station is inside the jaw ellipsoid, so the beak grows out of the head. No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.0085, "overlap": 0.012, "gapTolerance": 0.0005}, "dimensions": {"width": 0.022, "height": 0.024, "depth": 0.034}, "transform": {"position": [0.0, 0.5215, 0.112], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "beak-horn", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "culmen-sheen", "kind": "material-variation", "description": "A satin highlight runs the length of the culmen; carried by the beak-horn roughness of 0.35.", "evidenceRefs": ["ev-beak-horn"]}], "evidenceRefs": ["ev-beak-base"], "fidelityTier": "micro", "colorMaterialRecipe": {"baseColor": "#9B8465", "secondary": ["#81654F", "#8F7E6B", "#A89070"], "roughness": 0.42, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #9B8465 at roughness 0.35, no texture. Variation comes from colorVariation amount 0.06 on the z axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-beak-horn"], "dominantAlbedo": "rgba(155, 132, 101, 1.0)", "secondaryAlbedo": "rgba(129, 101, 79, 1.0)", "materialClass": "skin", "materialClassConfidence": 0.55, "materialClassNote": "Beak keratin is a hard, polished derivative of skin. `skin` is the nearest class; the 0.35 roughness is much lower than any real skin, which is what the confidence records."}};
  node_beak_7.add(mesh_beak_7);
  meshes["beak"] = mesh_beak_7;
  colliders["beak"] = null;

  const endpoint_thigh_l_8 = makeAttachmentEndpoint(null);
  const node_thigh_l_8 = new THREE.Group();
  node_thigh_l_8.name = "Feathered drumstick (left)__pivot";
  node_thigh_l_8.scale.set(1, 1, 1);
  if (endpoint_thigh_l_8) {
    node_thigh_l_8.position.copy(endpoint_thigh_l_8.start);
    node_thigh_l_8.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_thigh_l_8.position.set(0.03, 0.25, 0.006);
    node_thigh_l_8.rotation.set(0.0, 0.0, 0.0);
  }
  node_thigh_l_8.userData.sculptComponent = {"id": "thigh-l", "name": "Feathered drumstick (left)", "level": "meso", "role": "leg", "importance": 0.55, "confidence": 0.7, "primitive": "tapered-sweep", "topologyClass": "continuous-sculpt", "topologyRationale": "The feathered drumstick is one continuous organic limb segment that TAPERS from a thick root buried in the flank to a narrow hock. tapered-sweep is one of the three primitives continuous-sculpt allows and the only one that narrows.", "geometryDescriptor": {"topologyIntent": "feathered thigh tapering from inside the flank down to the hard hock boundary", "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 12 radial segments, capped: about 120 triangles.", "chiralityNote": "A reflection of thigh-r: x negates, y and z are identical.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "levelNote": "Kept at MESO. Promoting these to macro was tried and reverted: it would have filled the 68 mm gap the blockout render shows between the body's underside at y 0.193 and the hock at y 0.126, but blockout is deliberately clay-macro and that gap is the pass working rather than failing -- structural-pass is what closes it. Promotion also dropped the meso count from 8 to 6, below the quality contract's minimum, which is the contract saying the same thing a different way.", "taperedSweep": {"stations": [{"position": [-0.02, 0.0, 0.0], "rx": 0.028, "rz": 0.024, "twist": 0.0}, {"position": [-0.014, -0.042, -0.001], "rx": 0.026, "rz": 0.022, "twist": 0.0}, {"position": [-0.006, -0.088, -0.004], "rx": 0.02, "rz": 0.017, "twist": 0.0}, {"position": [0.0, -0.124, -0.005], "rx": 0.011, "rz": 0.01, "twist": 0.0}], "radialSegments": 14, "capEnds": true}, "correctionNote": "STRUCTURAL-PASS CORRECTION 1 -- a real defect with a real visual consequence, found by self_intersection and then pinned down by signed volume. These two components were the ONLY ones built from the `capsule` primitive, and they were the only two the gate flagged: 256 of 258 vertices reading as inside their own surface, 99.2%. That is not an intersection, it is INVERTED WINDING. Measured directly: signed volume -7.29e-5 for both thighs against +2.44e-3, +4.52e-4, +1.05e-4 and so on for every other component, and 1% of vertex normals pointing outward against 100% everywhere else. buildWatertightCapsule emits its triangles wound inward. With backface culling that renders the far wall of the limb instead of the near one, which is why the drumstick read as a thin hollow sleeve.\nFIX: stop using `capsule` here rather than patch the generated helper -- a patch would be lost on the next regeneration, and img2threejs is a SHARED checkout where an unflagged behaviour change is not mine to make. tapered-sweep is independently the better primitive for a drumstick: a thigh tapers from a thick top to a narrow hock and a capsule cannot. This also fixes the measured band error at 0.30 of height, where the plate reads 0.156 of fore-aft extent and the capsule gave 0.067.", "frameNote": "The spine runs almost straight down, so the parallel-transport frame puts the NORMAL on Z and the BINORMAL on X: here rx is the FORE-AFT half-depth and rz the LATERAL half-width. Root is 0.060 m deep and 0.048 m wide; the hock is 0.026 x 0.022.", "taperNote": "Tip/root ratio 0.011/0.028 = 0.39, and the section decreases monotonically root to tip.", "attachmentDepthNote": "POST-SHIP CORRECTION 2 -- THE LEGS WERE NOT ATTACHED TO THE BODY. Reported by eye, then measured with a new surface-proximity check rather than argued about. The thigh's root sat at world y 0.205, and the body's surface at the thigh's own position -- x 0.030, z 0.006 -- is at about y 0.214, NOT at the 0.1934 its bounding box reports. The box minimum occurs at x=0 on the midline, where the keel ellipsoid hangs lowest; by the time you move 30 mm out to the leg the body has already curved back up. So the boxes 'overlapped by 13.6 mm' while the surfaces barely grazed: measured penetration depth was 6.1 mm on the left thigh and 2.5 mm on the right. Those two numbers are also the proof it was marginal -- the pair is an exact mirror and cannot genuinely differ, so a 6-versus-2 split is a sampling artefact of an overlap too thin to sample reliably. Against a body whose smooth-union blend alone moves its surface by up to 7.5 mm, that is not a joint.\nFIX: the root rises from y 0.205 to 0.228 and widens from 0.030 x 0.024 to 0.032 x 0.026, while the sweep lengthens so its tip still lands exactly on the hock at y 0.126. The root is now about 18 mm INSIDE the flank instead of grazing its surface. The drumstick still bulges 8 mm proud of the body laterally, which is what a thigh does.\nWHY NO GATE CAUGHT THIS EITHER: nothing in the suite compared two components' SURFACES. The connectivity check added after the detached feet tests whether ONE mesh is one piece, which every mesh was; bounding boxes overlapped, so nothing looked wrong from the outside. An attachment-proximity check that reports a DEPTH now runs over every declared attachment.parentId, and it fails anything joined by less than 2 mm.", "capNote": "POST-SHIP CORRECTION 3 -- THE FLAT CAP ON TOP OF THE LEG. Correction 2 buried the thigh root 18 mm into the flank and the joint measured 14-28 mm deep, but a tapered sweep is CAPPED: capEnds puts a flat disc across its first station, and that disc was still partly outside the body. At world y 0.228 the body is only 0.037 wide at the thigh's own z, while the cap reached 0.056, so a crescent of flat plane sat proud of the curved flank and read as a machined face on an organic form -- connected, and still visibly not JOINED.\nTwo obvious fixes are both wrong. Removing the cap (capEnds false) leaves an open rim whose inner wall is backfacing, so the leg would render see-through at that crescent instead of flat -- worse. Shrinking the root is blocked by the taper rule: tip/root must be at most 0.55 and the hock end is 0.011, so the root cannot go below 0.020.\nFIX: move the root INWARD and DEEPER, to where the body is wide enough to swallow it. Sampling the body's own ellipsoids gives a half-width of 0.037 at y 0.228 but 0.040 at y 0.250, so the root rises to y 0.250 and moves in to world x 0.010, where its 0.024 lateral half-extent spans -0.014 to 0.034 -- entirely inside the body's 0.040. The sweep then walks back OUT to x 0.030 as it descends, so the drumstick still emerges from the flank and lands on the tarsus at the hock. Stations carry a local x for the first time on this prop, mirrored through the side sign like everything else, so the pair stays an exact reflection."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "embed", "note": "Buried into the flank; only the segment below the body contour is visible. No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.03, "overlap": 0.012, "gapTolerance": 0.0005}, "dimensions": {"width": 0.068, "height": 0.124, "depth": 0.056}, "transform": {"position": [0.03, 0.25, 0.006], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "plumage-dark", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "hock-feather-line", "kind": "boundary", "description": "Dark plumage stops and pale scale begins at y = 0.126 m, measured off the plate: dark pixels fall from 68 to 33 and pale rise from 15 to 27 across rows 730-750 of 883.", "evidenceRefs": ["ev-crop-legs", "ev-plate-rowscan"]}], "evidenceRefs": ["ev-crop-legs"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#332E24", "secondary": ["#18150F", "#282520", "#2E2B22"], "roughness": 0.45, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #26221A at roughness 0.45, no texture. Variation comes from colorVariation amount 0.10 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-body-dark", "ev-covert-iridescent"], "dominantAlbedo": "rgba(51, 46, 36, 1.0)", "secondaryAlbedo": "rgba(24, 21, 15, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.55, "materialClassNote": "None of the ten offered classes is `feather`. Fabric is the nearest real light-transport analogue -- a fibrous dielectric with a soft, slightly anisotropic sheen and no specular lobe -- and the confidence says how near, which is not very."}};
  node_thigh_l_8.userData.actionProfile = {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}};
  (nodes["root"] ?? root).add(node_thigh_l_8);
  nodes["thigh-l"] = node_thigh_l_8;
  const mesh_thigh_l_8Geometry = endpoint_thigh_l_8
    ? new THREE.CylinderGeometry(endpoint_thigh_l_8.endRadius, endpoint_thigh_l_8.baseRadius, endpoint_thigh_l_8.length, 16, 6)
    : buildTaperedSweepGeometry({"stations": [{"position": [-0.02, 0.0, 0.0], "rx": 0.028, "rz": 0.024, "twist": 0.0}, {"position": [-0.014, -0.042, -0.001], "rx": 0.026, "rz": 0.022, "twist": 0.0}, {"position": [-0.006, -0.088, -0.004], "rx": 0.02, "rz": 0.017, "twist": 0.0}, {"position": [0.0, -0.124, -0.005], "rx": 0.011, "rz": 0.01, "twist": 0.0}], "radialSegments": 14, "capEnds": true});
  if (!endpoint_thigh_l_8) {
    mesh_thigh_l_8Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_thigh_l_8 = new THREE.Mesh(
    mesh_thigh_l_8Geometry,
    materialMap["plumage-dark"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_thigh_l_8.name = "Feathered drumstick (left)";
  if (endpoint_thigh_l_8) {
    mesh_thigh_l_8.position.copy(endpoint_thigh_l_8.midpoint);
    mesh_thigh_l_8.quaternion.copy(endpoint_thigh_l_8.quaternion);
  }
  mesh_thigh_l_8.castShadow = options.castShadow ?? true;
  mesh_thigh_l_8.receiveShadow = options.receiveShadow ?? true;
  mesh_thigh_l_8.userData.sculptComponent = {"id": "thigh-l", "name": "Feathered drumstick (left)", "level": "meso", "role": "leg", "importance": 0.55, "confidence": 0.7, "primitive": "tapered-sweep", "topologyClass": "continuous-sculpt", "topologyRationale": "The feathered drumstick is one continuous organic limb segment that TAPERS from a thick root buried in the flank to a narrow hock. tapered-sweep is one of the three primitives continuous-sculpt allows and the only one that narrows.", "geometryDescriptor": {"topologyIntent": "feathered thigh tapering from inside the flank down to the hard hock boundary", "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 12 radial segments, capped: about 120 triangles.", "chiralityNote": "A reflection of thigh-r: x negates, y and z are identical.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "levelNote": "Kept at MESO. Promoting these to macro was tried and reverted: it would have filled the 68 mm gap the blockout render shows between the body's underside at y 0.193 and the hock at y 0.126, but blockout is deliberately clay-macro and that gap is the pass working rather than failing -- structural-pass is what closes it. Promotion also dropped the meso count from 8 to 6, below the quality contract's minimum, which is the contract saying the same thing a different way.", "taperedSweep": {"stations": [{"position": [-0.02, 0.0, 0.0], "rx": 0.028, "rz": 0.024, "twist": 0.0}, {"position": [-0.014, -0.042, -0.001], "rx": 0.026, "rz": 0.022, "twist": 0.0}, {"position": [-0.006, -0.088, -0.004], "rx": 0.02, "rz": 0.017, "twist": 0.0}, {"position": [0.0, -0.124, -0.005], "rx": 0.011, "rz": 0.01, "twist": 0.0}], "radialSegments": 14, "capEnds": true}, "correctionNote": "STRUCTURAL-PASS CORRECTION 1 -- a real defect with a real visual consequence, found by self_intersection and then pinned down by signed volume. These two components were the ONLY ones built from the `capsule` primitive, and they were the only two the gate flagged: 256 of 258 vertices reading as inside their own surface, 99.2%. That is not an intersection, it is INVERTED WINDING. Measured directly: signed volume -7.29e-5 for both thighs against +2.44e-3, +4.52e-4, +1.05e-4 and so on for every other component, and 1% of vertex normals pointing outward against 100% everywhere else. buildWatertightCapsule emits its triangles wound inward. With backface culling that renders the far wall of the limb instead of the near one, which is why the drumstick read as a thin hollow sleeve.\nFIX: stop using `capsule` here rather than patch the generated helper -- a patch would be lost on the next regeneration, and img2threejs is a SHARED checkout where an unflagged behaviour change is not mine to make. tapered-sweep is independently the better primitive for a drumstick: a thigh tapers from a thick top to a narrow hock and a capsule cannot. This also fixes the measured band error at 0.30 of height, where the plate reads 0.156 of fore-aft extent and the capsule gave 0.067.", "frameNote": "The spine runs almost straight down, so the parallel-transport frame puts the NORMAL on Z and the BINORMAL on X: here rx is the FORE-AFT half-depth and rz the LATERAL half-width. Root is 0.060 m deep and 0.048 m wide; the hock is 0.026 x 0.022.", "taperNote": "Tip/root ratio 0.011/0.028 = 0.39, and the section decreases monotonically root to tip.", "attachmentDepthNote": "POST-SHIP CORRECTION 2 -- THE LEGS WERE NOT ATTACHED TO THE BODY. Reported by eye, then measured with a new surface-proximity check rather than argued about. The thigh's root sat at world y 0.205, and the body's surface at the thigh's own position -- x 0.030, z 0.006 -- is at about y 0.214, NOT at the 0.1934 its bounding box reports. The box minimum occurs at x=0 on the midline, where the keel ellipsoid hangs lowest; by the time you move 30 mm out to the leg the body has already curved back up. So the boxes 'overlapped by 13.6 mm' while the surfaces barely grazed: measured penetration depth was 6.1 mm on the left thigh and 2.5 mm on the right. Those two numbers are also the proof it was marginal -- the pair is an exact mirror and cannot genuinely differ, so a 6-versus-2 split is a sampling artefact of an overlap too thin to sample reliably. Against a body whose smooth-union blend alone moves its surface by up to 7.5 mm, that is not a joint.\nFIX: the root rises from y 0.205 to 0.228 and widens from 0.030 x 0.024 to 0.032 x 0.026, while the sweep lengthens so its tip still lands exactly on the hock at y 0.126. The root is now about 18 mm INSIDE the flank instead of grazing its surface. The drumstick still bulges 8 mm proud of the body laterally, which is what a thigh does.\nWHY NO GATE CAUGHT THIS EITHER: nothing in the suite compared two components' SURFACES. The connectivity check added after the detached feet tests whether ONE mesh is one piece, which every mesh was; bounding boxes overlapped, so nothing looked wrong from the outside. An attachment-proximity check that reports a DEPTH now runs over every declared attachment.parentId, and it fails anything joined by less than 2 mm.", "capNote": "POST-SHIP CORRECTION 3 -- THE FLAT CAP ON TOP OF THE LEG. Correction 2 buried the thigh root 18 mm into the flank and the joint measured 14-28 mm deep, but a tapered sweep is CAPPED: capEnds puts a flat disc across its first station, and that disc was still partly outside the body. At world y 0.228 the body is only 0.037 wide at the thigh's own z, while the cap reached 0.056, so a crescent of flat plane sat proud of the curved flank and read as a machined face on an organic form -- connected, and still visibly not JOINED.\nTwo obvious fixes are both wrong. Removing the cap (capEnds false) leaves an open rim whose inner wall is backfacing, so the leg would render see-through at that crescent instead of flat -- worse. Shrinking the root is blocked by the taper rule: tip/root must be at most 0.55 and the hock end is 0.011, so the root cannot go below 0.020.\nFIX: move the root INWARD and DEEPER, to where the body is wide enough to swallow it. Sampling the body's own ellipsoids gives a half-width of 0.037 at y 0.228 but 0.040 at y 0.250, so the root rises to y 0.250 and moves in to world x 0.010, where its 0.024 lateral half-extent spans -0.014 to 0.034 -- entirely inside the body's 0.040. The sweep then walks back OUT to x 0.030 as it descends, so the drumstick still emerges from the flank and lands on the tarsus at the hock. Stations carry a local x for the first time on this prop, mirrored through the side sign like everything else, so the pair stays an exact reflection."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "embed", "note": "Buried into the flank; only the segment below the body contour is visible. No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.03, "overlap": 0.012, "gapTolerance": 0.0005}, "dimensions": {"width": 0.068, "height": 0.124, "depth": 0.056}, "transform": {"position": [0.03, 0.25, 0.006], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "plumage-dark", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "hock-feather-line", "kind": "boundary", "description": "Dark plumage stops and pale scale begins at y = 0.126 m, measured off the plate: dark pixels fall from 68 to 33 and pale rise from 15 to 27 across rows 730-750 of 883.", "evidenceRefs": ["ev-crop-legs", "ev-plate-rowscan"]}], "evidenceRefs": ["ev-crop-legs"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#332E24", "secondary": ["#18150F", "#282520", "#2E2B22"], "roughness": 0.45, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #26221A at roughness 0.45, no texture. Variation comes from colorVariation amount 0.10 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-body-dark", "ev-covert-iridescent"], "dominantAlbedo": "rgba(51, 46, 36, 1.0)", "secondaryAlbedo": "rgba(24, 21, 15, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.55, "materialClassNote": "None of the ten offered classes is `feather`. Fabric is the nearest real light-transport analogue -- a fibrous dielectric with a soft, slightly anisotropic sheen and no specular lobe -- and the confidence says how near, which is not very."}};
  node_thigh_l_8.add(mesh_thigh_l_8);
  meshes["thigh-l"] = mesh_thigh_l_8;
  colliders["thigh-l"] = null;

  const endpoint_thigh_r_9 = makeAttachmentEndpoint(null);
  const node_thigh_r_9 = new THREE.Group();
  node_thigh_r_9.name = "Feathered drumstick (right)__pivot";
  node_thigh_r_9.scale.set(1, 1, 1);
  if (endpoint_thigh_r_9) {
    node_thigh_r_9.position.copy(endpoint_thigh_r_9.start);
    node_thigh_r_9.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_thigh_r_9.position.set(-0.03, 0.25, 0.006);
    node_thigh_r_9.rotation.set(0.0, 0.0, 0.0);
  }
  node_thigh_r_9.userData.sculptComponent = {"id": "thigh-r", "name": "Feathered drumstick (right)", "level": "meso", "role": "leg", "importance": 0.55, "confidence": 0.7, "primitive": "tapered-sweep", "topologyClass": "continuous-sculpt", "topologyRationale": "The feathered drumstick is one continuous organic limb segment that TAPERS from a thick root buried in the flank to a narrow hock. tapered-sweep is one of the three primitives continuous-sculpt allows and the only one that narrows.", "geometryDescriptor": {"topologyIntent": "feathered thigh tapering from inside the flank down to the hard hock boundary", "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 12 radial segments, capped: about 120 triangles.", "chiralityNote": "A reflection of thigh-l: x negates, y and z are identical.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "levelNote": "Kept at MESO. Promoting these to macro was tried and reverted: it would have filled the 68 mm gap the blockout render shows between the body's underside at y 0.193 and the hock at y 0.126, but blockout is deliberately clay-macro and that gap is the pass working rather than failing -- structural-pass is what closes it. Promotion also dropped the meso count from 8 to 6, below the quality contract's minimum, which is the contract saying the same thing a different way.", "taperedSweep": {"stations": [{"position": [0.02, 0.0, 0.0], "rx": 0.028, "rz": 0.024, "twist": 0.0}, {"position": [0.014, -0.042, -0.001], "rx": 0.026, "rz": 0.022, "twist": 0.0}, {"position": [0.006, -0.088, -0.004], "rx": 0.02, "rz": 0.017, "twist": 0.0}, {"position": [0.0, -0.124, -0.005], "rx": 0.011, "rz": 0.01, "twist": 0.0}], "radialSegments": 14, "capEnds": true}, "correctionNote": "STRUCTURAL-PASS CORRECTION 1 -- a real defect with a real visual consequence, found by self_intersection and then pinned down by signed volume. These two components were the ONLY ones built from the `capsule` primitive, and they were the only two the gate flagged: 256 of 258 vertices reading as inside their own surface, 99.2%. That is not an intersection, it is INVERTED WINDING. Measured directly: signed volume -7.29e-5 for both thighs against +2.44e-3, +4.52e-4, +1.05e-4 and so on for every other component, and 1% of vertex normals pointing outward against 100% everywhere else. buildWatertightCapsule emits its triangles wound inward. With backface culling that renders the far wall of the limb instead of the near one, which is why the drumstick read as a thin hollow sleeve.\nFIX: stop using `capsule` here rather than patch the generated helper -- a patch would be lost on the next regeneration, and img2threejs is a SHARED checkout where an unflagged behaviour change is not mine to make. tapered-sweep is independently the better primitive for a drumstick: a thigh tapers from a thick top to a narrow hock and a capsule cannot. This also fixes the measured band error at 0.30 of height, where the plate reads 0.156 of fore-aft extent and the capsule gave 0.067.", "frameNote": "The spine runs almost straight down, so the parallel-transport frame puts the NORMAL on Z and the BINORMAL on X: here rx is the FORE-AFT half-depth and rz the LATERAL half-width. Root is 0.060 m deep and 0.048 m wide; the hock is 0.026 x 0.022.", "taperNote": "Tip/root ratio 0.011/0.028 = 0.39, and the section decreases monotonically root to tip.", "attachmentDepthNote": "POST-SHIP CORRECTION 2 -- THE LEGS WERE NOT ATTACHED TO THE BODY. Reported by eye, then measured with a new surface-proximity check rather than argued about. The thigh's root sat at world y 0.205, and the body's surface at the thigh's own position -- x 0.030, z 0.006 -- is at about y 0.214, NOT at the 0.1934 its bounding box reports. The box minimum occurs at x=0 on the midline, where the keel ellipsoid hangs lowest; by the time you move 30 mm out to the leg the body has already curved back up. So the boxes 'overlapped by 13.6 mm' while the surfaces barely grazed: measured penetration depth was 6.1 mm on the left thigh and 2.5 mm on the right. Those two numbers are also the proof it was marginal -- the pair is an exact mirror and cannot genuinely differ, so a 6-versus-2 split is a sampling artefact of an overlap too thin to sample reliably. Against a body whose smooth-union blend alone moves its surface by up to 7.5 mm, that is not a joint.\nFIX: the root rises from y 0.205 to 0.228 and widens from 0.030 x 0.024 to 0.032 x 0.026, while the sweep lengthens so its tip still lands exactly on the hock at y 0.126. The root is now about 18 mm INSIDE the flank instead of grazing its surface. The drumstick still bulges 8 mm proud of the body laterally, which is what a thigh does.\nWHY NO GATE CAUGHT THIS EITHER: nothing in the suite compared two components' SURFACES. The connectivity check added after the detached feet tests whether ONE mesh is one piece, which every mesh was; bounding boxes overlapped, so nothing looked wrong from the outside. An attachment-proximity check that reports a DEPTH now runs over every declared attachment.parentId, and it fails anything joined by less than 2 mm.", "capNote": "POST-SHIP CORRECTION 3 -- THE FLAT CAP ON TOP OF THE LEG. Correction 2 buried the thigh root 18 mm into the flank and the joint measured 14-28 mm deep, but a tapered sweep is CAPPED: capEnds puts a flat disc across its first station, and that disc was still partly outside the body. At world y 0.228 the body is only 0.037 wide at the thigh's own z, while the cap reached 0.056, so a crescent of flat plane sat proud of the curved flank and read as a machined face on an organic form -- connected, and still visibly not JOINED.\nTwo obvious fixes are both wrong. Removing the cap (capEnds false) leaves an open rim whose inner wall is backfacing, so the leg would render see-through at that crescent instead of flat -- worse. Shrinking the root is blocked by the taper rule: tip/root must be at most 0.55 and the hock end is 0.011, so the root cannot go below 0.020.\nFIX: move the root INWARD and DEEPER, to where the body is wide enough to swallow it. Sampling the body's own ellipsoids gives a half-width of 0.037 at y 0.228 but 0.040 at y 0.250, so the root rises to y 0.250 and moves in to world x 0.010, where its 0.024 lateral half-extent spans -0.014 to 0.034 -- entirely inside the body's 0.040. The sweep then walks back OUT to x 0.030 as it descends, so the drumstick still emerges from the flank and lands on the tarsus at the hock. Stations carry a local x for the first time on this prop, mirrored through the side sign like everything else, so the pair stays an exact reflection."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "embed", "note": "Buried into the flank; only the segment below the body contour is visible. No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.03, "overlap": 0.012, "gapTolerance": 0.0005}, "dimensions": {"width": 0.068, "height": 0.124, "depth": 0.056}, "transform": {"position": [-0.03, 0.25, 0.006], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "plumage-dark", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "hock-feather-line", "kind": "boundary", "description": "Dark plumage stops and pale scale begins at y = 0.126 m, measured off the plate: dark pixels fall from 68 to 33 and pale rise from 15 to 27 across rows 730-750 of 883.", "evidenceRefs": ["ev-crop-legs", "ev-plate-rowscan"]}], "evidenceRefs": ["ev-crop-legs"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#332E24", "secondary": ["#18150F", "#282520", "#2E2B22"], "roughness": 0.45, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #26221A at roughness 0.45, no texture. Variation comes from colorVariation amount 0.10 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-body-dark", "ev-covert-iridescent"], "dominantAlbedo": "rgba(51, 46, 36, 1.0)", "secondaryAlbedo": "rgba(24, 21, 15, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.55, "materialClassNote": "None of the ten offered classes is `feather`. Fabric is the nearest real light-transport analogue -- a fibrous dielectric with a soft, slightly anisotropic sheen and no specular lobe -- and the confidence says how near, which is not very."}};
  node_thigh_r_9.userData.actionProfile = {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}};
  (nodes["root"] ?? root).add(node_thigh_r_9);
  nodes["thigh-r"] = node_thigh_r_9;
  const mesh_thigh_r_9Geometry = endpoint_thigh_r_9
    ? new THREE.CylinderGeometry(endpoint_thigh_r_9.endRadius, endpoint_thigh_r_9.baseRadius, endpoint_thigh_r_9.length, 16, 6)
    : buildTaperedSweepGeometry({"stations": [{"position": [0.02, 0.0, 0.0], "rx": 0.028, "rz": 0.024, "twist": 0.0}, {"position": [0.014, -0.042, -0.001], "rx": 0.026, "rz": 0.022, "twist": 0.0}, {"position": [0.006, -0.088, -0.004], "rx": 0.02, "rz": 0.017, "twist": 0.0}, {"position": [0.0, -0.124, -0.005], "rx": 0.011, "rz": 0.01, "twist": 0.0}], "radialSegments": 14, "capEnds": true});
  if (!endpoint_thigh_r_9) {
    mesh_thigh_r_9Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_thigh_r_9 = new THREE.Mesh(
    mesh_thigh_r_9Geometry,
    materialMap["plumage-dark"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_thigh_r_9.name = "Feathered drumstick (right)";
  if (endpoint_thigh_r_9) {
    mesh_thigh_r_9.position.copy(endpoint_thigh_r_9.midpoint);
    mesh_thigh_r_9.quaternion.copy(endpoint_thigh_r_9.quaternion);
  }
  mesh_thigh_r_9.castShadow = options.castShadow ?? true;
  mesh_thigh_r_9.receiveShadow = options.receiveShadow ?? true;
  mesh_thigh_r_9.userData.sculptComponent = {"id": "thigh-r", "name": "Feathered drumstick (right)", "level": "meso", "role": "leg", "importance": 0.55, "confidence": 0.7, "primitive": "tapered-sweep", "topologyClass": "continuous-sculpt", "topologyRationale": "The feathered drumstick is one continuous organic limb segment that TAPERS from a thick root buried in the flank to a narrow hock. tapered-sweep is one of the three primitives continuous-sculpt allows and the only one that narrows.", "geometryDescriptor": {"topologyIntent": "feathered thigh tapering from inside the flank down to the hard hock boundary", "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Four stations x 12 radial segments, capped: about 120 triangles.", "chiralityNote": "A reflection of thigh-l: x negates, y and z are identical.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "levelNote": "Kept at MESO. Promoting these to macro was tried and reverted: it would have filled the 68 mm gap the blockout render shows between the body's underside at y 0.193 and the hock at y 0.126, but blockout is deliberately clay-macro and that gap is the pass working rather than failing -- structural-pass is what closes it. Promotion also dropped the meso count from 8 to 6, below the quality contract's minimum, which is the contract saying the same thing a different way.", "taperedSweep": {"stations": [{"position": [0.02, 0.0, 0.0], "rx": 0.028, "rz": 0.024, "twist": 0.0}, {"position": [0.014, -0.042, -0.001], "rx": 0.026, "rz": 0.022, "twist": 0.0}, {"position": [0.006, -0.088, -0.004], "rx": 0.02, "rz": 0.017, "twist": 0.0}, {"position": [0.0, -0.124, -0.005], "rx": 0.011, "rz": 0.01, "twist": 0.0}], "radialSegments": 14, "capEnds": true}, "correctionNote": "STRUCTURAL-PASS CORRECTION 1 -- a real defect with a real visual consequence, found by self_intersection and then pinned down by signed volume. These two components were the ONLY ones built from the `capsule` primitive, and they were the only two the gate flagged: 256 of 258 vertices reading as inside their own surface, 99.2%. That is not an intersection, it is INVERTED WINDING. Measured directly: signed volume -7.29e-5 for both thighs against +2.44e-3, +4.52e-4, +1.05e-4 and so on for every other component, and 1% of vertex normals pointing outward against 100% everywhere else. buildWatertightCapsule emits its triangles wound inward. With backface culling that renders the far wall of the limb instead of the near one, which is why the drumstick read as a thin hollow sleeve.\nFIX: stop using `capsule` here rather than patch the generated helper -- a patch would be lost on the next regeneration, and img2threejs is a SHARED checkout where an unflagged behaviour change is not mine to make. tapered-sweep is independently the better primitive for a drumstick: a thigh tapers from a thick top to a narrow hock and a capsule cannot. This also fixes the measured band error at 0.30 of height, where the plate reads 0.156 of fore-aft extent and the capsule gave 0.067.", "frameNote": "The spine runs almost straight down, so the parallel-transport frame puts the NORMAL on Z and the BINORMAL on X: here rx is the FORE-AFT half-depth and rz the LATERAL half-width. Root is 0.060 m deep and 0.048 m wide; the hock is 0.026 x 0.022.", "taperNote": "Tip/root ratio 0.011/0.028 = 0.39, and the section decreases monotonically root to tip.", "attachmentDepthNote": "POST-SHIP CORRECTION 2 -- THE LEGS WERE NOT ATTACHED TO THE BODY. Reported by eye, then measured with a new surface-proximity check rather than argued about. The thigh's root sat at world y 0.205, and the body's surface at the thigh's own position -- x 0.030, z 0.006 -- is at about y 0.214, NOT at the 0.1934 its bounding box reports. The box minimum occurs at x=0 on the midline, where the keel ellipsoid hangs lowest; by the time you move 30 mm out to the leg the body has already curved back up. So the boxes 'overlapped by 13.6 mm' while the surfaces barely grazed: measured penetration depth was 6.1 mm on the left thigh and 2.5 mm on the right. Those two numbers are also the proof it was marginal -- the pair is an exact mirror and cannot genuinely differ, so a 6-versus-2 split is a sampling artefact of an overlap too thin to sample reliably. Against a body whose smooth-union blend alone moves its surface by up to 7.5 mm, that is not a joint.\nFIX: the root rises from y 0.205 to 0.228 and widens from 0.030 x 0.024 to 0.032 x 0.026, while the sweep lengthens so its tip still lands exactly on the hock at y 0.126. The root is now about 18 mm INSIDE the flank instead of grazing its surface. The drumstick still bulges 8 mm proud of the body laterally, which is what a thigh does.\nWHY NO GATE CAUGHT THIS EITHER: nothing in the suite compared two components' SURFACES. The connectivity check added after the detached feet tests whether ONE mesh is one piece, which every mesh was; bounding boxes overlapped, so nothing looked wrong from the outside. An attachment-proximity check that reports a DEPTH now runs over every declared attachment.parentId, and it fails anything joined by less than 2 mm.", "capNote": "POST-SHIP CORRECTION 3 -- THE FLAT CAP ON TOP OF THE LEG. Correction 2 buried the thigh root 18 mm into the flank and the joint measured 14-28 mm deep, but a tapered sweep is CAPPED: capEnds puts a flat disc across its first station, and that disc was still partly outside the body. At world y 0.228 the body is only 0.037 wide at the thigh's own z, while the cap reached 0.056, so a crescent of flat plane sat proud of the curved flank and read as a machined face on an organic form -- connected, and still visibly not JOINED.\nTwo obvious fixes are both wrong. Removing the cap (capEnds false) leaves an open rim whose inner wall is backfacing, so the leg would render see-through at that crescent instead of flat -- worse. Shrinking the root is blocked by the taper rule: tip/root must be at most 0.55 and the hock end is 0.011, so the root cannot go below 0.020.\nFIX: move the root INWARD and DEEPER, to where the body is wide enough to swallow it. Sampling the body's own ellipsoids gives a half-width of 0.037 at y 0.228 but 0.040 at y 0.250, so the root rises to y 0.250 and moves in to world x 0.010, where its 0.024 lateral half-extent spans -0.014 to 0.034 -- entirely inside the body's 0.040. The sweep then walks back OUT to x 0.030 as it descends, so the drumstick still emerges from the flank and lands on the tarsus at the hock. Stations carry a local x for the first time on this prop, mirrored through the side sign like everything else, so the pair stays an exact reflection."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "embed", "note": "Buried into the flank; only the segment below the body contour is visible. No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.03, "overlap": 0.012, "gapTolerance": 0.0005}, "dimensions": {"width": 0.068, "height": 0.124, "depth": 0.056}, "transform": {"position": [-0.03, 0.25, 0.006], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "plumage-dark", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "hock-feather-line", "kind": "boundary", "description": "Dark plumage stops and pale scale begins at y = 0.126 m, measured off the plate: dark pixels fall from 68 to 33 and pale rise from 15 to 27 across rows 730-750 of 883.", "evidenceRefs": ["ev-crop-legs", "ev-plate-rowscan"]}], "evidenceRefs": ["ev-crop-legs"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#332E24", "secondary": ["#18150F", "#282520", "#2E2B22"], "roughness": 0.45, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #26221A at roughness 0.45, no texture. Variation comes from colorVariation amount 0.10 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-body-dark", "ev-covert-iridescent"], "dominantAlbedo": "rgba(51, 46, 36, 1.0)", "secondaryAlbedo": "rgba(24, 21, 15, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.55, "materialClassNote": "None of the ten offered classes is `feather`. Fabric is the nearest real light-transport analogue -- a fibrous dielectric with a soft, slightly anisotropic sheen and no specular lobe -- and the confidence says how near, which is not very."}};
  node_thigh_r_9.add(mesh_thigh_r_9);
  meshes["thigh-r"] = mesh_thigh_r_9;
  colliders["thigh-r"] = null;

  const endpoint_leg_l_10 = makeAttachmentEndpoint(null);
  const node_leg_l_10 = new THREE.Group();
  node_leg_l_10.name = "Tarsus, foot, claws and spur (left)__pivot";
  node_leg_l_10.scale.set(1, 1, 1);
  if (endpoint_leg_l_10) {
    node_leg_l_10.position.copy(endpoint_leg_l_10.start);
    node_leg_l_10.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_leg_l_10.position.set(0.0, -0.00253, 0.0);
    node_leg_l_10.rotation.set(0.0, 0.0, 0.0);
  }
  node_leg_l_10.userData.sculptComponent = {"id": "leg-l", "name": "Tarsus, foot, claws and spur (left)", "level": "macro", "role": "leg", "importance": 0.8, "confidence": 0.78, "primitive": "capsule", "topologyClass": "implicit", "topologyRationale": "Tarsus, four toes, four claws and the spur are ONE continuous keratinised surface in life, not parts bolted together, so they are one implicit field smooth-unioned from fourteen primitives. This also removes every coincident face a toe-per-component build would have created at the ankle.", "geometryDescriptor": {"topologyIntent": "continuous scaled leg: tarsometatarsus, ankle, three forward toes sloping to the ground, an aft hallux, five horn points -- ONE connected surface", "sdf": {"primitives": [{"id": "tarsus-l", "type": "capsule", "radius": 0.0068, "height": 0.1, "transform": {"position": [0.03, 0.087, 0.001], "rotation": [0.03, 0.0, 0.0]}}, {"id": "ankle-l", "type": "sphere", "radius": 0.0095, "transform": {"position": [0.03, 0.036, 0.003]}}, {"id": "toe-in-l", "type": "capsule", "radius": 0.005, "height": 0.044, "transform": {"position": [0.03897, 0.02296, 0.0194], "rotation": [2.0944, 0.0, -0.42]}}, {"id": "claw-toe-in-l", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [0.05039, 0.01017, 0.04154], "rotation": [2.2444, 0.0, -0.42]}}, {"id": "toe-mid-l", "type": "capsule", "radius": 0.005, "height": 0.05, "transform": {"position": [0.03, 0.0205, 0.02365], "rotation": [2.0944, 0.0, 0.0]}}, {"id": "claw-toe-mid-l", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [0.03, 0.005, 0.0505], "rotation": [2.2444, 0.0, 0.0]}}, {"id": "toe-out-l", "type": "capsule", "radius": 0.005, "height": 0.042, "transform": {"position": [0.02144, 0.02341, 0.01861], "rotation": [2.0944, 0.0, 0.42]}}, {"id": "claw-toe-out-l", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [0.01043, 0.01109, 0.03996], "rotation": [2.2444, 0.0, 0.42]}}, {"id": "toe-back-l", "type": "capsule", "radius": 0.0046, "height": 0.026, "transform": {"position": [0.03, 0.02304, -0.01035], "rotation": [-2.4438, 0.0, 0.0]}}, {"id": "claw-back-l", "type": "cone", "radius": 0.004, "height": 0.012, "transform": {"position": [0.03, 0.00925, -0.02192], "rotation": [-2.4438, 0.0, 0.0]}}, {"id": "spur-l", "type": "cone", "radius": 0.0052, "height": 0.019, "transform": {"position": [0.0225, 0.062, -0.008], "rotation": [-1.2208, 0.0, 0.5]}}], "operations": [{"id": "legl-u0", "type": "smooth-union", "left": "tarsus-l", "right": "ankle-l", "radius": 0.0055}, {"id": "legl-u1", "type": "smooth-union", "left": "legl-u0", "right": "toe-in-l", "radius": 0.0055}, {"id": "legl-u2", "type": "smooth-union", "left": "legl-u1", "right": "claw-toe-in-l", "radius": 0.0055}, {"id": "legl-u3", "type": "smooth-union", "left": "legl-u2", "right": "toe-mid-l", "radius": 0.0055}, {"id": "legl-u4", "type": "smooth-union", "left": "legl-u3", "right": "claw-toe-mid-l", "radius": 0.0055}, {"id": "legl-u5", "type": "smooth-union", "left": "legl-u4", "right": "toe-out-l", "radius": 0.0055}, {"id": "legl-u6", "type": "smooth-union", "left": "legl-u5", "right": "claw-toe-out-l", "radius": 0.0055}, {"id": "legl-u7", "type": "smooth-union", "left": "legl-u6", "right": "toe-back-l", "radius": 0.0055}, {"id": "legl-u8", "type": "smooth-union", "left": "legl-u7", "right": "claw-back-l", "radius": 0.0055}, {"id": "legl-u9", "type": "smooth-union", "left": "legl-u8", "right": "spur-l", "radius": 0.0055}], "resolution": 36, "bounds": {"min": [-0.002, -0.004, -0.046], "max": [0.062, 0.152, 0.068]}}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Implicit surface at resolution 36 over its own bounds; see resolutionNote for the measured cost.", "chiralityNote": "A reflection of leg-r. Every primitive's x negates and the toe splay angle psi negates with it, so the toes fan outward on both sides instead of both fanning the same way -- which is the defect medial_lateral_bias exists to catch.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "resolutionNote": "Resolution 36, about 4.0 mm cells. Held higher again: the toes are 10 mm across and the claws 8.8 mm, so 4.0 mm cells give a toe 2.5 cells. That is the floor before the implicit union fuses three toes into a paddle, and it is checked by eye on the render rather than assumed. Measured, not guessed. A resolution sweep on this exact spec (res_probe.mjs, five builds) gives total triangles 4,672 / 10,516 / 21,000 / 29,456 / 29,456 at resolutions 16 / 24 / 34 / 44 / 52, and factory build times of 169 / 382 / 898 / 1,274 / 1,279 ms. Two things follow. Triangle count goes as the SQUARE of the resolution, so this is the only lever that matters. And it SATURATES at 44: 44 and 52 return identical geometry, because the tessellation tier derived from targetTriangles caps the implicit sampling grid. The 52 and 56 first authored here were therefore never real -- they were clamped, and reading the spec you would have believed otherwise. SOURCE OF THE SATURATION, found in optimization-pass: the sweep showed resolutions 44 and 52 returning identical geometry and I recorded that as 'saturates at 44'. The real number is 40 -- forge/_shared/subdivision.py sets SDF_MAX_RESOLUTION to 40 for the `standard` tessellation tier, which targetTriangles 32000 selects. Both 44 and 52 were being clamped to 40, which is why they agreed. Every resolution on this prop (24, 34, 36) is below the cap and is therefore real.", "connectivityNote": "POST-SHIP CORRECTION -- THE FEET WERE NOT ATTACHED. Reported by eye, then confirmed as a topology measurement rather than an impression: welding vertices by position and counting connected components gave leg-l and leg-r TWO islands each, 867 vertices of tarsus and 754 of foot, where all fourteen other components are a single island.\nCAUSE: the ankle sphere sat at y 0.047 with radius 0.0085, bottoming out at 0.0385, while the toe capsules lay flat at y 0.011 with radius 0.005, topping out at 0.016. A 22.5 mm gap, against a smooth-union radius of 4.5 mm. The field never joined them, so marching cubes correctly produced two surfaces -- the toes were floating 22 mm below the leg.\nWHY NO GATE CAUGHT IT, which matters more than the fix: self_intersection tests whether a surface folds through ITSELF, not whether it is one piece, and it passed at 0 of 9,832 vertices. turntable_gate would have seen enclosed background, but it is run with --allow-holes because a standing bird legitimately encloses background between its legs, and that waiver covered this too. check_part_coverage counts parts, not connectivity. The defect sat exactly in the blind spot all three share, which is why a connectivity check is now part of the gate suite.\nFIX: the toes no longer lie flat. Each roots INSIDE the ankle sphere at (x0, 0.033, +/-0.002) -- 3.2 mm from its centre, well within the 9.5 mm radius -- and runs forward and DOWN at 30 degrees to rest its tip on the ground, which is also what the plate shows: the foot spreads from about y 0.045 down to the ground over roughly 0.09 m of reach. The ankle drops to y 0.036 and grows to 9.5 mm, the tarsus segment now ends ON the ankle centre rather than 11 mm above it, and the hallux droops 50 degrees aft-down instead of lying flat. Union radius 4.5 -> 5.5 mm. Every change is mirrored through the side sign alone, so the pair stays a true reflection.", "groundContactNote": "The leg field is authored in world coordinates and the node then drops it 2.53 mm, which is exactly the clearance the built model measured between the lowest toe vertex and y = 0. A floor prop whose declared origin is 'on the ground plane at the centroid of the two foot contact patches' must actually TOUCH that plane; at 2.5 mm the bird hovered, and in a level builder that reads as a placement bug rather than as a modelling one. The thigh-to-tarsus overlap absorbs the drop -- it was 7.6 mm and is now 5.1 mm, so the joint stays welded.", "hockJointNote": "The tarsus capsule's segment now runs y 0.037 to 0.137 (caps to 0.030-0.144) rather than stopping at 0.126. Measured at 4.1 and 3.8 mm for a MIRRORED pair, the old hock joint was thin enough that the two sides sampled differently, which is the signature of a marginal overlap. The tarsus now runs 18 mm up inside the drumstick, where the thigh's section is 0.0135 against the tarsus's 0.0068, so it is comfortably enclosed."}, "parent": null, "attachment": {"parentId": "thigh-l", "parentSocket": null, "contactType": "butt", "note": "Butts against the drumstick at the hock. The faces there are OPPOSED, which is how solids are meant to meet; the thigh capsule also overlaps the tarsus top by 4 mm. No gap is permitted: gapTolerance 0.5 mm, and the joint is an butt so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.004, "overlap": 0.004, "gapTolerance": 0.0005}, "dimensions": {"width": 0.064, "height": 0.137, "depth": 0.114}, "transform": {"position": [0.0, -0.00253, 0.0], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "leg-scale", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "spur-l", "kind": "protrusion", "description": "Short conical spur on the medial aspect of the tarsus, aft and slightly inward.", "evidenceRefs": ["ev-crop-legs"]}, {"id": "scute-rows-l", "kind": "material-variation", "description": "Overlapping keratin scutes; carried by the leg-scale material's roughness variation.", "evidenceRefs": ["ev-tarsus-near"]}], "evidenceRefs": ["ev-crop-legs"], "fidelityTier": "macro", "colorMaterialRecipe": {"baseColor": "#A69F8B", "secondary": ["#827D72", "#9A9382", "#8C8473"], "roughness": 0.5, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #8F8A78 at roughness 0.50, no texture. Variation comes from colorVariation amount 0.10 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-tarsus-far", "ev-tarsus-near", "ev-toe-claw"], "dominantAlbedo": "rgba(166, 159, 139, 1.0)", "secondaryAlbedo": "rgba(130, 125, 114, 1.0)", "materialClass": "skin", "materialClassConfidence": 0.55, "materialClassNote": "Tarsal scutes and claws are hard keratin, the same family as the beak and the same distance from the class that names them."}};
  node_leg_l_10.userData.actionProfile = {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}};
  (nodes["root"] ?? root).add(node_leg_l_10);
  nodes["leg-l"] = node_leg_l_10;
  const mesh_leg_l_10Geometry = polygonizeSdf({"primitives": [{"id": "tarsus-l", "type": "capsule", "radius": 0.0068, "height": 0.1, "transform": {"position": [0.03, 0.087, 0.001], "rotation": [0.03, 0.0, 0.0]}}, {"id": "ankle-l", "type": "sphere", "radius": 0.0095, "transform": {"position": [0.03, 0.036, 0.003]}}, {"id": "toe-in-l", "type": "capsule", "radius": 0.005, "height": 0.044, "transform": {"position": [0.03897, 0.02296, 0.0194], "rotation": [2.0944, 0.0, -0.42]}}, {"id": "claw-toe-in-l", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [0.05039, 0.01017, 0.04154], "rotation": [2.2444, 0.0, -0.42]}}, {"id": "toe-mid-l", "type": "capsule", "radius": 0.005, "height": 0.05, "transform": {"position": [0.03, 0.0205, 0.02365], "rotation": [2.0944, 0.0, 0.0]}}, {"id": "claw-toe-mid-l", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [0.03, 0.005, 0.0505], "rotation": [2.2444, 0.0, 0.0]}}, {"id": "toe-out-l", "type": "capsule", "radius": 0.005, "height": 0.042, "transform": {"position": [0.02144, 0.02341, 0.01861], "rotation": [2.0944, 0.0, 0.42]}}, {"id": "claw-toe-out-l", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [0.01043, 0.01109, 0.03996], "rotation": [2.2444, 0.0, 0.42]}}, {"id": "toe-back-l", "type": "capsule", "radius": 0.0046, "height": 0.026, "transform": {"position": [0.03, 0.02304, -0.01035], "rotation": [-2.4438, 0.0, 0.0]}}, {"id": "claw-back-l", "type": "cone", "radius": 0.004, "height": 0.012, "transform": {"position": [0.03, 0.00925, -0.02192], "rotation": [-2.4438, 0.0, 0.0]}}, {"id": "spur-l", "type": "cone", "radius": 0.0052, "height": 0.019, "transform": {"position": [0.0225, 0.062, -0.008], "rotation": [-1.2208, 0.0, 0.5]}}], "operations": [{"id": "legl-u0", "type": "smooth-union", "left": "tarsus-l", "right": "ankle-l", "radius": 0.0055}, {"id": "legl-u1", "type": "smooth-union", "left": "legl-u0", "right": "toe-in-l", "radius": 0.0055}, {"id": "legl-u2", "type": "smooth-union", "left": "legl-u1", "right": "claw-toe-in-l", "radius": 0.0055}, {"id": "legl-u3", "type": "smooth-union", "left": "legl-u2", "right": "toe-mid-l", "radius": 0.0055}, {"id": "legl-u4", "type": "smooth-union", "left": "legl-u3", "right": "claw-toe-mid-l", "radius": 0.0055}, {"id": "legl-u5", "type": "smooth-union", "left": "legl-u4", "right": "toe-out-l", "radius": 0.0055}, {"id": "legl-u6", "type": "smooth-union", "left": "legl-u5", "right": "claw-toe-out-l", "radius": 0.0055}, {"id": "legl-u7", "type": "smooth-union", "left": "legl-u6", "right": "toe-back-l", "radius": 0.0055}, {"id": "legl-u8", "type": "smooth-union", "left": "legl-u7", "right": "claw-back-l", "radius": 0.0055}, {"id": "legl-u9", "type": "smooth-union", "left": "legl-u8", "right": "spur-l", "radius": 0.0055}], "resolution": 36, "bounds": {"min": [-0.002, -0.004, -0.046], "max": [0.062, 0.152, 0.068]}});
  if (!endpoint_leg_l_10) {
    mesh_leg_l_10Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_leg_l_10 = new THREE.Mesh(
    mesh_leg_l_10Geometry,
    createSculptMaterial("leg-scale", {"id": "leg-scale", "name": "Tarsal scute and claw keratin", "type": "standard", "materialClass": "skin", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#A69F8B", "color": "#A69F8B", "albedo": {"dominant": "#A69F8B", "secondary": ["#827D72", "#9A9382", "#8C8473"], "samplingNotes": "Near tarsus (588,784,26,72) rgb 154,147,130; far tarsus (648,762,26,58) rgb 130,125,114; toe (624,898,60,22) rgb 140,132,115. The claws measure within 10% of the scutes, which is the evidence for ONE material covering scale and claw rather than two: a separate claw material would be a colour distinction the plate does not support. LIFTED #8F8A78 -> #A69F8B in material-pass. P90 ratio 0.68. Lifted about 16 percent; the scaled tarsus is the palest surface on the bird after the beak and was reading mid-grey. material-pass correction 1, from a measured render-vs-plate comparison rather than by eye. Six crops were taken on the RENDER at each material's visible footprint -- placed against a gridded render and confirmed on a contact sheet, after a first attempt put three of them on the wrong surface (the 'leg' crop came back as black plumage) -- and compared to the plate crop for the same material by luma percentile. The pattern is systematic and is NOT a uniform exposure gap: P90 render/plate ratios came back 1.05 for the beak, 0.73 for the tail, 0.70 for the oxblood, 0.68 for the leg scale, 0.59 for the head skin and 0.28 for the body. Bright material correct, mid tones short, darks crushed -- that is a tone curve crushing shadows, and the consequence is that the body flank rendered with a luma range of 6 to 10 where the plate's spans 10 to 36. A surface with four levels of range has no readable FORM; it is a silhouette. Each albedo below is lifted by the factor its own measurement asks for, and the beak, which measured correct, is deliberately NOT touched."}, "roughness": {"base": 0.5, "variation": 0.1, "notes": "Hard keratin scutes, satin, with the variation carrying the overlapping scute rows."}, "metalness": 0.0, "colorVariation": {"amount": 0.15, "axis": "y", "notes": "A faint pink flush at the toe joints, paler up the tarsus. Variation raised by half in the same correction: with a flat albedo and a shadow-crushing tone curve, colorVariation is the only thing carrying form on these surfaces."}, "textureless": {"declared": true, "evidence": ["Tarsus crop (588,784,26,72): the scute rows are 2-3 mm on a 13 mm leg -- meso-scale FORM, and they are built as the implicit leg field's own surface rather than painted on.", "Claw crop (624,898,60,22) rgb 140,132,115 against the scute's 154,147,130: within 10%, so one material covers both and no texture region is needed to separate them.", "Correctness: a texture set would force color to white and discard the measured pale yellow-grey that separates the leg from every other surface on this prop.", "analyze_texture.py on crops/tarsus-near.png: meanLum 144.0, meanSaturation 0.210, mottle 0.017, specularFraction 0.0; confidence 0.860. specularFraction 0.0 and mottle at or below 0.060 is a surface with no resolvable pattern and no tight highlight -- measured, not asserted."]}, "referenceCrops": ["ev-tarsus-far", "ev-tarsus-near", "ev-toe-claw"], "qualityTier": "hero", "materialClassConfidence": 0.55, "materialClassNote": "Tarsal scutes and claws are hard keratin, the same family as the beak and the same distance from the class that names them.", "measuredEvidence": {"crop": "tarsus-near", "analyzeTexture": {"lum": 144.0, "sat": 0.21, "mottle": 0.017, "spec": 0.0, "grad": 0.164, "finish": "painted-metal"}, "pbrConfidence": 0.86, "summary": "meanLum 144.0, meanSaturation 0.210, mottle 0.017, specularFraction 0.0; confidence 0.860", "finishClassUsed": false, "finishClassNote": "See materialPipeline.finishClassRejected."}}, options, true)
  );
  mesh_leg_l_10.name = "Tarsus, foot, claws and spur (left)";
  if (endpoint_leg_l_10) {
    mesh_leg_l_10.position.copy(endpoint_leg_l_10.midpoint);
    mesh_leg_l_10.quaternion.copy(endpoint_leg_l_10.quaternion);
  }
  mesh_leg_l_10.castShadow = options.castShadow ?? true;
  mesh_leg_l_10.receiveShadow = options.receiveShadow ?? true;
  mesh_leg_l_10.userData.sculptComponent = {"id": "leg-l", "name": "Tarsus, foot, claws and spur (left)", "level": "macro", "role": "leg", "importance": 0.8, "confidence": 0.78, "primitive": "capsule", "topologyClass": "implicit", "topologyRationale": "Tarsus, four toes, four claws and the spur are ONE continuous keratinised surface in life, not parts bolted together, so they are one implicit field smooth-unioned from fourteen primitives. This also removes every coincident face a toe-per-component build would have created at the ankle.", "geometryDescriptor": {"topologyIntent": "continuous scaled leg: tarsometatarsus, ankle, three forward toes sloping to the ground, an aft hallux, five horn points -- ONE connected surface", "sdf": {"primitives": [{"id": "tarsus-l", "type": "capsule", "radius": 0.0068, "height": 0.1, "transform": {"position": [0.03, 0.087, 0.001], "rotation": [0.03, 0.0, 0.0]}}, {"id": "ankle-l", "type": "sphere", "radius": 0.0095, "transform": {"position": [0.03, 0.036, 0.003]}}, {"id": "toe-in-l", "type": "capsule", "radius": 0.005, "height": 0.044, "transform": {"position": [0.03897, 0.02296, 0.0194], "rotation": [2.0944, 0.0, -0.42]}}, {"id": "claw-toe-in-l", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [0.05039, 0.01017, 0.04154], "rotation": [2.2444, 0.0, -0.42]}}, {"id": "toe-mid-l", "type": "capsule", "radius": 0.005, "height": 0.05, "transform": {"position": [0.03, 0.0205, 0.02365], "rotation": [2.0944, 0.0, 0.0]}}, {"id": "claw-toe-mid-l", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [0.03, 0.005, 0.0505], "rotation": [2.2444, 0.0, 0.0]}}, {"id": "toe-out-l", "type": "capsule", "radius": 0.005, "height": 0.042, "transform": {"position": [0.02144, 0.02341, 0.01861], "rotation": [2.0944, 0.0, 0.42]}}, {"id": "claw-toe-out-l", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [0.01043, 0.01109, 0.03996], "rotation": [2.2444, 0.0, 0.42]}}, {"id": "toe-back-l", "type": "capsule", "radius": 0.0046, "height": 0.026, "transform": {"position": [0.03, 0.02304, -0.01035], "rotation": [-2.4438, 0.0, 0.0]}}, {"id": "claw-back-l", "type": "cone", "radius": 0.004, "height": 0.012, "transform": {"position": [0.03, 0.00925, -0.02192], "rotation": [-2.4438, 0.0, 0.0]}}, {"id": "spur-l", "type": "cone", "radius": 0.0052, "height": 0.019, "transform": {"position": [0.0225, 0.062, -0.008], "rotation": [-1.2208, 0.0, 0.5]}}], "operations": [{"id": "legl-u0", "type": "smooth-union", "left": "tarsus-l", "right": "ankle-l", "radius": 0.0055}, {"id": "legl-u1", "type": "smooth-union", "left": "legl-u0", "right": "toe-in-l", "radius": 0.0055}, {"id": "legl-u2", "type": "smooth-union", "left": "legl-u1", "right": "claw-toe-in-l", "radius": 0.0055}, {"id": "legl-u3", "type": "smooth-union", "left": "legl-u2", "right": "toe-mid-l", "radius": 0.0055}, {"id": "legl-u4", "type": "smooth-union", "left": "legl-u3", "right": "claw-toe-mid-l", "radius": 0.0055}, {"id": "legl-u5", "type": "smooth-union", "left": "legl-u4", "right": "toe-out-l", "radius": 0.0055}, {"id": "legl-u6", "type": "smooth-union", "left": "legl-u5", "right": "claw-toe-out-l", "radius": 0.0055}, {"id": "legl-u7", "type": "smooth-union", "left": "legl-u6", "right": "toe-back-l", "radius": 0.0055}, {"id": "legl-u8", "type": "smooth-union", "left": "legl-u7", "right": "claw-back-l", "radius": 0.0055}, {"id": "legl-u9", "type": "smooth-union", "left": "legl-u8", "right": "spur-l", "radius": 0.0055}], "resolution": 36, "bounds": {"min": [-0.002, -0.004, -0.046], "max": [0.062, 0.152, 0.068]}}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Implicit surface at resolution 36 over its own bounds; see resolutionNote for the measured cost.", "chiralityNote": "A reflection of leg-r. Every primitive's x negates and the toe splay angle psi negates with it, so the toes fan outward on both sides instead of both fanning the same way -- which is the defect medial_lateral_bias exists to catch.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "resolutionNote": "Resolution 36, about 4.0 mm cells. Held higher again: the toes are 10 mm across and the claws 8.8 mm, so 4.0 mm cells give a toe 2.5 cells. That is the floor before the implicit union fuses three toes into a paddle, and it is checked by eye on the render rather than assumed. Measured, not guessed. A resolution sweep on this exact spec (res_probe.mjs, five builds) gives total triangles 4,672 / 10,516 / 21,000 / 29,456 / 29,456 at resolutions 16 / 24 / 34 / 44 / 52, and factory build times of 169 / 382 / 898 / 1,274 / 1,279 ms. Two things follow. Triangle count goes as the SQUARE of the resolution, so this is the only lever that matters. And it SATURATES at 44: 44 and 52 return identical geometry, because the tessellation tier derived from targetTriangles caps the implicit sampling grid. The 52 and 56 first authored here were therefore never real -- they were clamped, and reading the spec you would have believed otherwise. SOURCE OF THE SATURATION, found in optimization-pass: the sweep showed resolutions 44 and 52 returning identical geometry and I recorded that as 'saturates at 44'. The real number is 40 -- forge/_shared/subdivision.py sets SDF_MAX_RESOLUTION to 40 for the `standard` tessellation tier, which targetTriangles 32000 selects. Both 44 and 52 were being clamped to 40, which is why they agreed. Every resolution on this prop (24, 34, 36) is below the cap and is therefore real.", "connectivityNote": "POST-SHIP CORRECTION -- THE FEET WERE NOT ATTACHED. Reported by eye, then confirmed as a topology measurement rather than an impression: welding vertices by position and counting connected components gave leg-l and leg-r TWO islands each, 867 vertices of tarsus and 754 of foot, where all fourteen other components are a single island.\nCAUSE: the ankle sphere sat at y 0.047 with radius 0.0085, bottoming out at 0.0385, while the toe capsules lay flat at y 0.011 with radius 0.005, topping out at 0.016. A 22.5 mm gap, against a smooth-union radius of 4.5 mm. The field never joined them, so marching cubes correctly produced two surfaces -- the toes were floating 22 mm below the leg.\nWHY NO GATE CAUGHT IT, which matters more than the fix: self_intersection tests whether a surface folds through ITSELF, not whether it is one piece, and it passed at 0 of 9,832 vertices. turntable_gate would have seen enclosed background, but it is run with --allow-holes because a standing bird legitimately encloses background between its legs, and that waiver covered this too. check_part_coverage counts parts, not connectivity. The defect sat exactly in the blind spot all three share, which is why a connectivity check is now part of the gate suite.\nFIX: the toes no longer lie flat. Each roots INSIDE the ankle sphere at (x0, 0.033, +/-0.002) -- 3.2 mm from its centre, well within the 9.5 mm radius -- and runs forward and DOWN at 30 degrees to rest its tip on the ground, which is also what the plate shows: the foot spreads from about y 0.045 down to the ground over roughly 0.09 m of reach. The ankle drops to y 0.036 and grows to 9.5 mm, the tarsus segment now ends ON the ankle centre rather than 11 mm above it, and the hallux droops 50 degrees aft-down instead of lying flat. Union radius 4.5 -> 5.5 mm. Every change is mirrored through the side sign alone, so the pair stays a true reflection.", "groundContactNote": "The leg field is authored in world coordinates and the node then drops it 2.53 mm, which is exactly the clearance the built model measured between the lowest toe vertex and y = 0. A floor prop whose declared origin is 'on the ground plane at the centroid of the two foot contact patches' must actually TOUCH that plane; at 2.5 mm the bird hovered, and in a level builder that reads as a placement bug rather than as a modelling one. The thigh-to-tarsus overlap absorbs the drop -- it was 7.6 mm and is now 5.1 mm, so the joint stays welded.", "hockJointNote": "The tarsus capsule's segment now runs y 0.037 to 0.137 (caps to 0.030-0.144) rather than stopping at 0.126. Measured at 4.1 and 3.8 mm for a MIRRORED pair, the old hock joint was thin enough that the two sides sampled differently, which is the signature of a marginal overlap. The tarsus now runs 18 mm up inside the drumstick, where the thigh's section is 0.0135 against the tarsus's 0.0068, so it is comfortably enclosed."}, "parent": null, "attachment": {"parentId": "thigh-l", "parentSocket": null, "contactType": "butt", "note": "Butts against the drumstick at the hock. The faces there are OPPOSED, which is how solids are meant to meet; the thigh capsule also overlaps the tarsus top by 4 mm. No gap is permitted: gapTolerance 0.5 mm, and the joint is an butt so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.004, "overlap": 0.004, "gapTolerance": 0.0005}, "dimensions": {"width": 0.064, "height": 0.137, "depth": 0.114}, "transform": {"position": [0.0, -0.00253, 0.0], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "leg-scale", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "spur-l", "kind": "protrusion", "description": "Short conical spur on the medial aspect of the tarsus, aft and slightly inward.", "evidenceRefs": ["ev-crop-legs"]}, {"id": "scute-rows-l", "kind": "material-variation", "description": "Overlapping keratin scutes; carried by the leg-scale material's roughness variation.", "evidenceRefs": ["ev-tarsus-near"]}], "evidenceRefs": ["ev-crop-legs"], "fidelityTier": "macro", "colorMaterialRecipe": {"baseColor": "#A69F8B", "secondary": ["#827D72", "#9A9382", "#8C8473"], "roughness": 0.5, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #8F8A78 at roughness 0.50, no texture. Variation comes from colorVariation amount 0.10 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-tarsus-far", "ev-tarsus-near", "ev-toe-claw"], "dominantAlbedo": "rgba(166, 159, 139, 1.0)", "secondaryAlbedo": "rgba(130, 125, 114, 1.0)", "materialClass": "skin", "materialClassConfidence": 0.55, "materialClassNote": "Tarsal scutes and claws are hard keratin, the same family as the beak and the same distance from the class that names them."}};
  node_leg_l_10.add(mesh_leg_l_10);
  meshes["leg-l"] = mesh_leg_l_10;
  colliders["leg-l"] = null;

  const endpoint_leg_r_11 = makeAttachmentEndpoint(null);
  const node_leg_r_11 = new THREE.Group();
  node_leg_r_11.name = "Tarsus, foot, claws and spur (right)__pivot";
  node_leg_r_11.scale.set(1, 1, 1);
  if (endpoint_leg_r_11) {
    node_leg_r_11.position.copy(endpoint_leg_r_11.start);
    node_leg_r_11.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_leg_r_11.position.set(0.0, -0.00253, 0.0);
    node_leg_r_11.rotation.set(0.0, 0.0, 0.0);
  }
  node_leg_r_11.userData.sculptComponent = {"id": "leg-r", "name": "Tarsus, foot, claws and spur (right)", "level": "macro", "role": "leg", "importance": 0.8, "confidence": 0.66, "primitive": "capsule", "topologyClass": "implicit", "topologyRationale": "Tarsus, four toes, four claws and the spur are ONE continuous keratinised surface in life, not parts bolted together, so they are one implicit field smooth-unioned from fourteen primitives. This also removes every coincident face a toe-per-component build would have created at the ankle.", "geometryDescriptor": {"topologyIntent": "continuous scaled leg: tarsometatarsus, ankle, three forward toes sloping to the ground, an aft hallux, five horn points -- ONE connected surface", "sdf": {"primitives": [{"id": "tarsus-r", "type": "capsule", "radius": 0.0068, "height": 0.1, "transform": {"position": [-0.03, 0.087, 0.001], "rotation": [0.03, 0.0, 0.0]}}, {"id": "ankle-r", "type": "sphere", "radius": 0.0095, "transform": {"position": [-0.03, 0.036, 0.003]}}, {"id": "toe-in-r", "type": "capsule", "radius": 0.005, "height": 0.044, "transform": {"position": [-0.03897, 0.02296, 0.0194], "rotation": [2.0944, 0.0, 0.42]}}, {"id": "claw-toe-in-r", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [-0.05039, 0.01017, 0.04154], "rotation": [2.2444, 0.0, 0.42]}}, {"id": "toe-mid-r", "type": "capsule", "radius": 0.005, "height": 0.05, "transform": {"position": [-0.03, 0.0205, 0.02365], "rotation": [2.0944, 0.0, -0.0]}}, {"id": "claw-toe-mid-r", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [-0.03, 0.005, 0.0505], "rotation": [2.2444, 0.0, -0.0]}}, {"id": "toe-out-r", "type": "capsule", "radius": 0.005, "height": 0.042, "transform": {"position": [-0.02144, 0.02341, 0.01861], "rotation": [2.0944, 0.0, -0.42]}}, {"id": "claw-toe-out-r", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [-0.01043, 0.01109, 0.03996], "rotation": [2.2444, 0.0, -0.42]}}, {"id": "toe-back-r", "type": "capsule", "radius": 0.0046, "height": 0.026, "transform": {"position": [-0.03, 0.02304, -0.01035], "rotation": [-2.4438, 0.0, 0.0]}}, {"id": "claw-back-r", "type": "cone", "radius": 0.004, "height": 0.012, "transform": {"position": [-0.03, 0.00925, -0.02192], "rotation": [-2.4438, 0.0, 0.0]}}, {"id": "spur-r", "type": "cone", "radius": 0.0052, "height": 0.019, "transform": {"position": [-0.0225, 0.062, -0.008], "rotation": [-1.2208, 0.0, -0.5]}}], "operations": [{"id": "legr-u0", "type": "smooth-union", "left": "tarsus-r", "right": "ankle-r", "radius": 0.0055}, {"id": "legr-u1", "type": "smooth-union", "left": "legr-u0", "right": "toe-in-r", "radius": 0.0055}, {"id": "legr-u2", "type": "smooth-union", "left": "legr-u1", "right": "claw-toe-in-r", "radius": 0.0055}, {"id": "legr-u3", "type": "smooth-union", "left": "legr-u2", "right": "toe-mid-r", "radius": 0.0055}, {"id": "legr-u4", "type": "smooth-union", "left": "legr-u3", "right": "claw-toe-mid-r", "radius": 0.0055}, {"id": "legr-u5", "type": "smooth-union", "left": "legr-u4", "right": "toe-out-r", "radius": 0.0055}, {"id": "legr-u6", "type": "smooth-union", "left": "legr-u5", "right": "claw-toe-out-r", "radius": 0.0055}, {"id": "legr-u7", "type": "smooth-union", "left": "legr-u6", "right": "toe-back-r", "radius": 0.0055}, {"id": "legr-u8", "type": "smooth-union", "left": "legr-u7", "right": "claw-back-r", "radius": 0.0055}, {"id": "legr-u9", "type": "smooth-union", "left": "legr-u8", "right": "spur-r", "radius": 0.0055}], "resolution": 36, "bounds": {"min": [-0.062, -0.004, -0.046], "max": [0.002, 0.152, 0.068]}}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Implicit surface at resolution 36 over its own bounds; see resolutionNote for the measured cost.", "chiralityNote": "A reflection of leg-l. Every primitive's x negates and the toe splay angle psi negates with it, so the toes fan outward on both sides instead of both fanning the same way -- which is the defect medial_lateral_bias exists to catch.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "resolutionNote": "Resolution 36, about 4.0 mm cells. Mirror of leg-l; same reasoning. Measured, not guessed. A resolution sweep on this exact spec (res_probe.mjs, five builds) gives total triangles 4,672 / 10,516 / 21,000 / 29,456 / 29,456 at resolutions 16 / 24 / 34 / 44 / 52, and factory build times of 169 / 382 / 898 / 1,274 / 1,279 ms. Two things follow. Triangle count goes as the SQUARE of the resolution, so this is the only lever that matters. And it SATURATES at 44: 44 and 52 return identical geometry, because the tessellation tier derived from targetTriangles caps the implicit sampling grid. The 52 and 56 first authored here were therefore never real -- they were clamped, and reading the spec you would have believed otherwise. SOURCE OF THE SATURATION, found in optimization-pass: the sweep showed resolutions 44 and 52 returning identical geometry and I recorded that as 'saturates at 44'. The real number is 40 -- forge/_shared/subdivision.py sets SDF_MAX_RESOLUTION to 40 for the `standard` tessellation tier, which targetTriangles 32000 selects. Both 44 and 52 were being clamped to 40, which is why they agreed. Every resolution on this prop (24, 34, 36) is below the cap and is therefore real.", "connectivityNote": "POST-SHIP CORRECTION -- THE FEET WERE NOT ATTACHED. Reported by eye, then confirmed as a topology measurement rather than an impression: welding vertices by position and counting connected components gave leg-l and leg-r TWO islands each, 867 vertices of tarsus and 754 of foot, where all fourteen other components are a single island.\nCAUSE: the ankle sphere sat at y 0.047 with radius 0.0085, bottoming out at 0.0385, while the toe capsules lay flat at y 0.011 with radius 0.005, topping out at 0.016. A 22.5 mm gap, against a smooth-union radius of 4.5 mm. The field never joined them, so marching cubes correctly produced two surfaces -- the toes were floating 22 mm below the leg.\nWHY NO GATE CAUGHT IT, which matters more than the fix: self_intersection tests whether a surface folds through ITSELF, not whether it is one piece, and it passed at 0 of 9,832 vertices. turntable_gate would have seen enclosed background, but it is run with --allow-holes because a standing bird legitimately encloses background between its legs, and that waiver covered this too. check_part_coverage counts parts, not connectivity. The defect sat exactly in the blind spot all three share, which is why a connectivity check is now part of the gate suite.\nFIX: the toes no longer lie flat. Each roots INSIDE the ankle sphere at (x0, 0.033, +/-0.002) -- 3.2 mm from its centre, well within the 9.5 mm radius -- and runs forward and DOWN at 30 degrees to rest its tip on the ground, which is also what the plate shows: the foot spreads from about y 0.045 down to the ground over roughly 0.09 m of reach. The ankle drops to y 0.036 and grows to 9.5 mm, the tarsus segment now ends ON the ankle centre rather than 11 mm above it, and the hallux droops 50 degrees aft-down instead of lying flat. Union radius 4.5 -> 5.5 mm. Every change is mirrored through the side sign alone, so the pair stays a true reflection.", "groundContactNote": "The leg field is authored in world coordinates and the node then drops it 2.53 mm, which is exactly the clearance the built model measured between the lowest toe vertex and y = 0. A floor prop whose declared origin is 'on the ground plane at the centroid of the two foot contact patches' must actually TOUCH that plane; at 2.5 mm the bird hovered, and in a level builder that reads as a placement bug rather than as a modelling one. The thigh-to-tarsus overlap absorbs the drop -- it was 7.6 mm and is now 5.1 mm, so the joint stays welded.", "hockJointNote": "The tarsus capsule's segment now runs y 0.037 to 0.137 (caps to 0.030-0.144) rather than stopping at 0.126. Measured at 4.1 and 3.8 mm for a MIRRORED pair, the old hock joint was thin enough that the two sides sampled differently, which is the signature of a marginal overlap. The tarsus now runs 18 mm up inside the drumstick, where the thigh's section is 0.0135 against the tarsus's 0.0068, so it is comfortably enclosed."}, "parent": null, "attachment": {"parentId": "thigh-r", "parentSocket": null, "contactType": "butt", "note": "Butts against the drumstick at the hock. The faces there are OPPOSED, which is how solids are meant to meet; the thigh capsule also overlaps the tarsus top by 4 mm. No gap is permitted: gapTolerance 0.5 mm, and the joint is an butt so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.004, "overlap": 0.004, "gapTolerance": 0.0005}, "dimensions": {"width": 0.064, "height": 0.137, "depth": 0.114}, "transform": {"position": [0.0, -0.00253, 0.0], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "leg-scale", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "spur-r", "kind": "protrusion", "description": "Short conical spur on the medial aspect of the tarsus, aft and slightly inward.", "evidenceRefs": ["ev-crop-legs"]}, {"id": "scute-rows-r", "kind": "material-variation", "description": "Overlapping keratin scutes; carried by the leg-scale material's roughness variation.", "evidenceRefs": ["ev-tarsus-near"]}], "evidenceRefs": ["ev-crop-legs"], "fidelityTier": "macro", "colorMaterialRecipe": {"baseColor": "#A69F8B", "secondary": ["#827D72", "#9A9382", "#8C8473"], "roughness": 0.5, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #8F8A78 at roughness 0.50, no texture. Variation comes from colorVariation amount 0.10 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-tarsus-far", "ev-tarsus-near", "ev-toe-claw"], "dominantAlbedo": "rgba(166, 159, 139, 1.0)", "secondaryAlbedo": "rgba(130, 125, 114, 1.0)", "materialClass": "skin", "materialClassConfidence": 0.55, "materialClassNote": "Tarsal scutes and claws are hard keratin, the same family as the beak and the same distance from the class that names them."}};
  node_leg_r_11.userData.actionProfile = {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}};
  (nodes["root"] ?? root).add(node_leg_r_11);
  nodes["leg-r"] = node_leg_r_11;
  const mesh_leg_r_11Geometry = polygonizeSdf({"primitives": [{"id": "tarsus-r", "type": "capsule", "radius": 0.0068, "height": 0.1, "transform": {"position": [-0.03, 0.087, 0.001], "rotation": [0.03, 0.0, 0.0]}}, {"id": "ankle-r", "type": "sphere", "radius": 0.0095, "transform": {"position": [-0.03, 0.036, 0.003]}}, {"id": "toe-in-r", "type": "capsule", "radius": 0.005, "height": 0.044, "transform": {"position": [-0.03897, 0.02296, 0.0194], "rotation": [2.0944, 0.0, 0.42]}}, {"id": "claw-toe-in-r", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [-0.05039, 0.01017, 0.04154], "rotation": [2.2444, 0.0, 0.42]}}, {"id": "toe-mid-r", "type": "capsule", "radius": 0.005, "height": 0.05, "transform": {"position": [-0.03, 0.0205, 0.02365], "rotation": [2.0944, 0.0, -0.0]}}, {"id": "claw-toe-mid-r", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [-0.03, 0.005, 0.0505], "rotation": [2.2444, 0.0, -0.0]}}, {"id": "toe-out-r", "type": "capsule", "radius": 0.005, "height": 0.042, "transform": {"position": [-0.02144, 0.02341, 0.01861], "rotation": [2.0944, 0.0, -0.42]}}, {"id": "claw-toe-out-r", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [-0.01043, 0.01109, 0.03996], "rotation": [2.2444, 0.0, -0.42]}}, {"id": "toe-back-r", "type": "capsule", "radius": 0.0046, "height": 0.026, "transform": {"position": [-0.03, 0.02304, -0.01035], "rotation": [-2.4438, 0.0, 0.0]}}, {"id": "claw-back-r", "type": "cone", "radius": 0.004, "height": 0.012, "transform": {"position": [-0.03, 0.00925, -0.02192], "rotation": [-2.4438, 0.0, 0.0]}}, {"id": "spur-r", "type": "cone", "radius": 0.0052, "height": 0.019, "transform": {"position": [-0.0225, 0.062, -0.008], "rotation": [-1.2208, 0.0, -0.5]}}], "operations": [{"id": "legr-u0", "type": "smooth-union", "left": "tarsus-r", "right": "ankle-r", "radius": 0.0055}, {"id": "legr-u1", "type": "smooth-union", "left": "legr-u0", "right": "toe-in-r", "radius": 0.0055}, {"id": "legr-u2", "type": "smooth-union", "left": "legr-u1", "right": "claw-toe-in-r", "radius": 0.0055}, {"id": "legr-u3", "type": "smooth-union", "left": "legr-u2", "right": "toe-mid-r", "radius": 0.0055}, {"id": "legr-u4", "type": "smooth-union", "left": "legr-u3", "right": "claw-toe-mid-r", "radius": 0.0055}, {"id": "legr-u5", "type": "smooth-union", "left": "legr-u4", "right": "toe-out-r", "radius": 0.0055}, {"id": "legr-u6", "type": "smooth-union", "left": "legr-u5", "right": "claw-toe-out-r", "radius": 0.0055}, {"id": "legr-u7", "type": "smooth-union", "left": "legr-u6", "right": "toe-back-r", "radius": 0.0055}, {"id": "legr-u8", "type": "smooth-union", "left": "legr-u7", "right": "claw-back-r", "radius": 0.0055}, {"id": "legr-u9", "type": "smooth-union", "left": "legr-u8", "right": "spur-r", "radius": 0.0055}], "resolution": 36, "bounds": {"min": [-0.062, -0.004, -0.046], "max": [0.002, 0.152, 0.068]}});
  if (!endpoint_leg_r_11) {
    mesh_leg_r_11Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_leg_r_11 = new THREE.Mesh(
    mesh_leg_r_11Geometry,
    createSculptMaterial("leg-scale", {"id": "leg-scale", "name": "Tarsal scute and claw keratin", "type": "standard", "materialClass": "skin", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#A69F8B", "color": "#A69F8B", "albedo": {"dominant": "#A69F8B", "secondary": ["#827D72", "#9A9382", "#8C8473"], "samplingNotes": "Near tarsus (588,784,26,72) rgb 154,147,130; far tarsus (648,762,26,58) rgb 130,125,114; toe (624,898,60,22) rgb 140,132,115. The claws measure within 10% of the scutes, which is the evidence for ONE material covering scale and claw rather than two: a separate claw material would be a colour distinction the plate does not support. LIFTED #8F8A78 -> #A69F8B in material-pass. P90 ratio 0.68. Lifted about 16 percent; the scaled tarsus is the palest surface on the bird after the beak and was reading mid-grey. material-pass correction 1, from a measured render-vs-plate comparison rather than by eye. Six crops were taken on the RENDER at each material's visible footprint -- placed against a gridded render and confirmed on a contact sheet, after a first attempt put three of them on the wrong surface (the 'leg' crop came back as black plumage) -- and compared to the plate crop for the same material by luma percentile. The pattern is systematic and is NOT a uniform exposure gap: P90 render/plate ratios came back 1.05 for the beak, 0.73 for the tail, 0.70 for the oxblood, 0.68 for the leg scale, 0.59 for the head skin and 0.28 for the body. Bright material correct, mid tones short, darks crushed -- that is a tone curve crushing shadows, and the consequence is that the body flank rendered with a luma range of 6 to 10 where the plate's spans 10 to 36. A surface with four levels of range has no readable FORM; it is a silhouette. Each albedo below is lifted by the factor its own measurement asks for, and the beak, which measured correct, is deliberately NOT touched."}, "roughness": {"base": 0.5, "variation": 0.1, "notes": "Hard keratin scutes, satin, with the variation carrying the overlapping scute rows."}, "metalness": 0.0, "colorVariation": {"amount": 0.15, "axis": "y", "notes": "A faint pink flush at the toe joints, paler up the tarsus. Variation raised by half in the same correction: with a flat albedo and a shadow-crushing tone curve, colorVariation is the only thing carrying form on these surfaces."}, "textureless": {"declared": true, "evidence": ["Tarsus crop (588,784,26,72): the scute rows are 2-3 mm on a 13 mm leg -- meso-scale FORM, and they are built as the implicit leg field's own surface rather than painted on.", "Claw crop (624,898,60,22) rgb 140,132,115 against the scute's 154,147,130: within 10%, so one material covers both and no texture region is needed to separate them.", "Correctness: a texture set would force color to white and discard the measured pale yellow-grey that separates the leg from every other surface on this prop.", "analyze_texture.py on crops/tarsus-near.png: meanLum 144.0, meanSaturation 0.210, mottle 0.017, specularFraction 0.0; confidence 0.860. specularFraction 0.0 and mottle at or below 0.060 is a surface with no resolvable pattern and no tight highlight -- measured, not asserted."]}, "referenceCrops": ["ev-tarsus-far", "ev-tarsus-near", "ev-toe-claw"], "qualityTier": "hero", "materialClassConfidence": 0.55, "materialClassNote": "Tarsal scutes and claws are hard keratin, the same family as the beak and the same distance from the class that names them.", "measuredEvidence": {"crop": "tarsus-near", "analyzeTexture": {"lum": 144.0, "sat": 0.21, "mottle": 0.017, "spec": 0.0, "grad": 0.164, "finish": "painted-metal"}, "pbrConfidence": 0.86, "summary": "meanLum 144.0, meanSaturation 0.210, mottle 0.017, specularFraction 0.0; confidence 0.860", "finishClassUsed": false, "finishClassNote": "See materialPipeline.finishClassRejected."}}, options, true)
  );
  mesh_leg_r_11.name = "Tarsus, foot, claws and spur (right)";
  if (endpoint_leg_r_11) {
    mesh_leg_r_11.position.copy(endpoint_leg_r_11.midpoint);
    mesh_leg_r_11.quaternion.copy(endpoint_leg_r_11.quaternion);
  }
  mesh_leg_r_11.castShadow = options.castShadow ?? true;
  mesh_leg_r_11.receiveShadow = options.receiveShadow ?? true;
  mesh_leg_r_11.userData.sculptComponent = {"id": "leg-r", "name": "Tarsus, foot, claws and spur (right)", "level": "macro", "role": "leg", "importance": 0.8, "confidence": 0.66, "primitive": "capsule", "topologyClass": "implicit", "topologyRationale": "Tarsus, four toes, four claws and the spur are ONE continuous keratinised surface in life, not parts bolted together, so they are one implicit field smooth-unioned from fourteen primitives. This also removes every coincident face a toe-per-component build would have created at the ankle.", "geometryDescriptor": {"topologyIntent": "continuous scaled leg: tarsometatarsus, ankle, three forward toes sloping to the ground, an aft hallux, five horn points -- ONE connected surface", "sdf": {"primitives": [{"id": "tarsus-r", "type": "capsule", "radius": 0.0068, "height": 0.1, "transform": {"position": [-0.03, 0.087, 0.001], "rotation": [0.03, 0.0, 0.0]}}, {"id": "ankle-r", "type": "sphere", "radius": 0.0095, "transform": {"position": [-0.03, 0.036, 0.003]}}, {"id": "toe-in-r", "type": "capsule", "radius": 0.005, "height": 0.044, "transform": {"position": [-0.03897, 0.02296, 0.0194], "rotation": [2.0944, 0.0, 0.42]}}, {"id": "claw-toe-in-r", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [-0.05039, 0.01017, 0.04154], "rotation": [2.2444, 0.0, 0.42]}}, {"id": "toe-mid-r", "type": "capsule", "radius": 0.005, "height": 0.05, "transform": {"position": [-0.03, 0.0205, 0.02365], "rotation": [2.0944, 0.0, -0.0]}}, {"id": "claw-toe-mid-r", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [-0.03, 0.005, 0.0505], "rotation": [2.2444, 0.0, -0.0]}}, {"id": "toe-out-r", "type": "capsule", "radius": 0.005, "height": 0.042, "transform": {"position": [-0.02144, 0.02341, 0.01861], "rotation": [2.0944, 0.0, -0.42]}}, {"id": "claw-toe-out-r", "type": "cone", "radius": 0.0044, "height": 0.014, "transform": {"position": [-0.01043, 0.01109, 0.03996], "rotation": [2.2444, 0.0, -0.42]}}, {"id": "toe-back-r", "type": "capsule", "radius": 0.0046, "height": 0.026, "transform": {"position": [-0.03, 0.02304, -0.01035], "rotation": [-2.4438, 0.0, 0.0]}}, {"id": "claw-back-r", "type": "cone", "radius": 0.004, "height": 0.012, "transform": {"position": [-0.03, 0.00925, -0.02192], "rotation": [-2.4438, 0.0, 0.0]}}, {"id": "spur-r", "type": "cone", "radius": 0.0052, "height": 0.019, "transform": {"position": [-0.0225, 0.062, -0.008], "rotation": [-1.2208, 0.0, -0.5]}}], "operations": [{"id": "legr-u0", "type": "smooth-union", "left": "tarsus-r", "right": "ankle-r", "radius": 0.0055}, {"id": "legr-u1", "type": "smooth-union", "left": "legr-u0", "right": "toe-in-r", "radius": 0.0055}, {"id": "legr-u2", "type": "smooth-union", "left": "legr-u1", "right": "claw-toe-in-r", "radius": 0.0055}, {"id": "legr-u3", "type": "smooth-union", "left": "legr-u2", "right": "toe-mid-r", "radius": 0.0055}, {"id": "legr-u4", "type": "smooth-union", "left": "legr-u3", "right": "claw-toe-mid-r", "radius": 0.0055}, {"id": "legr-u5", "type": "smooth-union", "left": "legr-u4", "right": "toe-out-r", "radius": 0.0055}, {"id": "legr-u6", "type": "smooth-union", "left": "legr-u5", "right": "claw-toe-out-r", "radius": 0.0055}, {"id": "legr-u7", "type": "smooth-union", "left": "legr-u6", "right": "toe-back-r", "radius": 0.0055}, {"id": "legr-u8", "type": "smooth-union", "left": "legr-u7", "right": "claw-back-r", "radius": 0.0055}, {"id": "legr-u9", "type": "smooth-union", "left": "legr-u8", "right": "spur-r", "radius": 0.0055}], "resolution": 36, "bounds": {"min": [-0.062, -0.004, -0.046], "max": [0.002, 0.152, 0.068]}}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Implicit surface at resolution 36 over its own bounds; see resolutionNote for the measured cost.", "chiralityNote": "A reflection of leg-l. Every primitive's x negates and the toe splay angle psi negates with it, so the toes fan outward on both sides instead of both fanning the same way -- which is the defect medial_lateral_bias exists to catch.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "resolutionNote": "Resolution 36, about 4.0 mm cells. Mirror of leg-l; same reasoning. Measured, not guessed. A resolution sweep on this exact spec (res_probe.mjs, five builds) gives total triangles 4,672 / 10,516 / 21,000 / 29,456 / 29,456 at resolutions 16 / 24 / 34 / 44 / 52, and factory build times of 169 / 382 / 898 / 1,274 / 1,279 ms. Two things follow. Triangle count goes as the SQUARE of the resolution, so this is the only lever that matters. And it SATURATES at 44: 44 and 52 return identical geometry, because the tessellation tier derived from targetTriangles caps the implicit sampling grid. The 52 and 56 first authored here were therefore never real -- they were clamped, and reading the spec you would have believed otherwise. SOURCE OF THE SATURATION, found in optimization-pass: the sweep showed resolutions 44 and 52 returning identical geometry and I recorded that as 'saturates at 44'. The real number is 40 -- forge/_shared/subdivision.py sets SDF_MAX_RESOLUTION to 40 for the `standard` tessellation tier, which targetTriangles 32000 selects. Both 44 and 52 were being clamped to 40, which is why they agreed. Every resolution on this prop (24, 34, 36) is below the cap and is therefore real.", "connectivityNote": "POST-SHIP CORRECTION -- THE FEET WERE NOT ATTACHED. Reported by eye, then confirmed as a topology measurement rather than an impression: welding vertices by position and counting connected components gave leg-l and leg-r TWO islands each, 867 vertices of tarsus and 754 of foot, where all fourteen other components are a single island.\nCAUSE: the ankle sphere sat at y 0.047 with radius 0.0085, bottoming out at 0.0385, while the toe capsules lay flat at y 0.011 with radius 0.005, topping out at 0.016. A 22.5 mm gap, against a smooth-union radius of 4.5 mm. The field never joined them, so marching cubes correctly produced two surfaces -- the toes were floating 22 mm below the leg.\nWHY NO GATE CAUGHT IT, which matters more than the fix: self_intersection tests whether a surface folds through ITSELF, not whether it is one piece, and it passed at 0 of 9,832 vertices. turntable_gate would have seen enclosed background, but it is run with --allow-holes because a standing bird legitimately encloses background between its legs, and that waiver covered this too. check_part_coverage counts parts, not connectivity. The defect sat exactly in the blind spot all three share, which is why a connectivity check is now part of the gate suite.\nFIX: the toes no longer lie flat. Each roots INSIDE the ankle sphere at (x0, 0.033, +/-0.002) -- 3.2 mm from its centre, well within the 9.5 mm radius -- and runs forward and DOWN at 30 degrees to rest its tip on the ground, which is also what the plate shows: the foot spreads from about y 0.045 down to the ground over roughly 0.09 m of reach. The ankle drops to y 0.036 and grows to 9.5 mm, the tarsus segment now ends ON the ankle centre rather than 11 mm above it, and the hallux droops 50 degrees aft-down instead of lying flat. Union radius 4.5 -> 5.5 mm. Every change is mirrored through the side sign alone, so the pair stays a true reflection.", "groundContactNote": "The leg field is authored in world coordinates and the node then drops it 2.53 mm, which is exactly the clearance the built model measured between the lowest toe vertex and y = 0. A floor prop whose declared origin is 'on the ground plane at the centroid of the two foot contact patches' must actually TOUCH that plane; at 2.5 mm the bird hovered, and in a level builder that reads as a placement bug rather than as a modelling one. The thigh-to-tarsus overlap absorbs the drop -- it was 7.6 mm and is now 5.1 mm, so the joint stays welded.", "hockJointNote": "The tarsus capsule's segment now runs y 0.037 to 0.137 (caps to 0.030-0.144) rather than stopping at 0.126. Measured at 4.1 and 3.8 mm for a MIRRORED pair, the old hock joint was thin enough that the two sides sampled differently, which is the signature of a marginal overlap. The tarsus now runs 18 mm up inside the drumstick, where the thigh's section is 0.0135 against the tarsus's 0.0068, so it is comfortably enclosed."}, "parent": null, "attachment": {"parentId": "thigh-r", "parentSocket": null, "contactType": "butt", "note": "Butts against the drumstick at the hock. The faces there are OPPOSED, which is how solids are meant to meet; the thigh capsule also overlaps the tarsus top by 4 mm. No gap is permitted: gapTolerance 0.5 mm, and the joint is an butt so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.004, "overlap": 0.004, "gapTolerance": 0.0005}, "dimensions": {"width": 0.064, "height": 0.137, "depth": 0.114}, "transform": {"position": [0.0, -0.00253, 0.0], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "leg-scale", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "spur-r", "kind": "protrusion", "description": "Short conical spur on the medial aspect of the tarsus, aft and slightly inward.", "evidenceRefs": ["ev-crop-legs"]}, {"id": "scute-rows-r", "kind": "material-variation", "description": "Overlapping keratin scutes; carried by the leg-scale material's roughness variation.", "evidenceRefs": ["ev-tarsus-near"]}], "evidenceRefs": ["ev-crop-legs"], "fidelityTier": "macro", "colorMaterialRecipe": {"baseColor": "#A69F8B", "secondary": ["#827D72", "#9A9382", "#8C8473"], "roughness": 0.5, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #8F8A78 at roughness 0.50, no texture. Variation comes from colorVariation amount 0.10 on the y axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-tarsus-far", "ev-tarsus-near", "ev-toe-claw"], "dominantAlbedo": "rgba(166, 159, 139, 1.0)", "secondaryAlbedo": "rgba(130, 125, 114, 1.0)", "materialClass": "skin", "materialClassConfidence": 0.55, "materialClassNote": "Tarsal scutes and claws are hard keratin, the same family as the beak and the same distance from the class that names them."}};
  node_leg_r_11.add(mesh_leg_r_11);
  meshes["leg-r"] = mesh_leg_r_11;
  colliders["leg-r"] = null;

  const endpoint_tail_fan_12 = makeAttachmentEndpoint(null);
  const node_tail_fan_12 = new THREE.Group();
  node_tail_fan_12.name = "Shingled pale tail fan__pivot";
  node_tail_fan_12.scale.set(1, 1, 1);
  if (endpoint_tail_fan_12) {
    node_tail_fan_12.position.copy(endpoint_tail_fan_12.start);
    node_tail_fan_12.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_tail_fan_12.position.set(0.0, 0.296, -0.083);
    node_tail_fan_12.rotation.set(0.0, 0.0, 0.0);
  }
  node_tail_fan_12.userData.sculptComponent = {"id": "tail-fan", "name": "Shingled pale tail fan", "level": "macro", "role": "tail", "importance": 0.95, "confidence": 0.75, "primitive": "tapered-sweep", "topologyClass": "conforming-shell", "topologyRationale": "The tail's main mass is a shingled stack of overlapping feathers that reads as one laterally-wide, dorsoventrally-thin sheaf at prop distance. Built as one swept shell along the tail's measured arc, laterally wide and thin through, tapering to a point.", "geometryDescriptor": {"topologyIntent": "swept sheaf of tail feathers arching aft and up, then curling aft and down", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.032, "rz": 0.026, "twist": 0.0}, {"position": [0.0, 0.0249, -0.0072], "rx": 0.0363, "rz": 0.0263, "twist": 0.0}, {"position": [0.0, 0.047, -0.0183], "rx": 0.0407, "rz": 0.0267, "twist": 0.0}, {"position": [0.0, 0.0659, -0.0326], "rx": 0.045, "rz": 0.027, "twist": 0.0}, {"position": [0.0, 0.0811, -0.0495], "rx": 0.0493, "rz": 0.0273, "twist": 0.0}, {"position": [0.0, 0.0924, -0.0683], "rx": 0.0537, "rz": 0.0277, "twist": 0.0}, {"position": [0.0, 0.0994, -0.0882], "rx": 0.058, "rz": 0.028, "twist": 0.0}, {"position": [0.0, 0.1017, -0.1088], "rx": 0.0433, "rz": 0.0209, "twist": 0.0}, {"position": [0.0, 0.0989, -0.1292], "rx": 0.0303, "rz": 0.0146, "twist": 0.0}, {"position": [0.0, 0.0907, -0.1488], "rx": 0.0191, "rz": 0.0092, "twist": 0.0}, {"position": [0.0, 0.0767, -0.1669], "rx": 0.01, "rz": 0.0048, "twist": 0.0}, {"position": [0.0, 0.0566, -0.1829], "rx": 0.0033, "rz": 0.0016, "twist": 0.0}, {"position": [0.0, 0.03, -0.196], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 14, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "13 stations x 14 radial segments, capped: about 364 triangles.", "sweptArcNote": "THE arc claim on this prop. Measured off the plate: tail root at world (y 0.300, z -0.083); the tail's highest point at (y 0.453, z -0.189); the aft-most point of the WHOLE silhouette at (y 0.338, z -0.303). The spine rises 0.092 m before it falls, so it is NOT monotonic. A straight cone from root to tip occupies roughly the right silhouette cells and is completely wrong, which is the case swept_arc_gate.py exists for.", "sectionNote": "rx (in-plane) runs 0.030 -> 0.054 -> 0 and rz (lateral) stays between 0.024 and 0.011, so the fan is roughly TWICE as deep in profile as it is wide across. That is the right anisotropy for a rooster's tail, which spreads in the sagittal plane and stays narrow seen from behind.", "taperNote": "Tip closes to a true point, ratio 0.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "frameNote": "FRAME SEMANTICS, read out of buildTaperedSweepGeometry rather than assumed. The sweep uses a PARALLEL-TRANSPORT frame: `rx` scales the frame's NORMAL and `rz` its BINORMAL. For a spine that lies wholly in the YZ plane, as both tail sweeps and the neck do, the seed reference (0,0,1) transports to a normal inside the sagittal plane and a binormal of exactly (1,0,0). So for this prop `rx` is the IN-PLANE (profile) half-thickness and `rz` is the LATERAL half-width -- the opposite way round from what the first draft of this spec claimed. The first blockout render is what exposed it: the tail read broad in profile and narrow from behind, which is the right answer arrived at from a wrong description, and a description that would have sent the next correction in exactly the wrong direction.", "correctionNote": "form-refinement correction 2. Band 0.80 of height was the WORST band in the structural review at -0.479: the plate carries 0.598 of fore-aft extent at y 0.44 and the model carried 0.119, because the tail crossed that height as a narrow tube and left it again. The plate's tail is broad there because its arc runs NEAR-HORIZONTAL across the crest for a long stretch while a fan of feathers spreads along it. The Bezier control points are re-chosen so the spine flattens across its crest instead of turning a corner, and the in-plane radius at the crest goes 0.054 -> 0.058 for the fan. Station count 11 -> 13 to keep the flatter curve from faceting.", "smoothingNote": "blockout correction 3. The six-station arc rendered as a faceted polygonal slab with visible creases, because buildTaperedSweepGeometry joins stations with STRAIGHT segments -- it does not spline between them, so station count IS the curve's resolution. Resampled to eleven stations along a cubic Bezier through the three measured points (root, crest, tip). The cost was measured rather than assumed: stations x radialSegments x 2, so 11 x 14 x 2 = 308 triangles for the fan against the 15,748 already spent on the implicit surfaces.", "crestNote": "Crest spine now sits at world y 0.3977 and holds within 10 mm of that height over roughly a third of the sweep's length."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "embed", "note": "Root station sits inside the pygostyle lobe of the body shell. No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.012, "overlap": 0.012, "gapTolerance": 0.0005}, "dimensions": {"width": 0.052, "height": 0.2, "depth": 0.2}, "transform": {"position": [0.0, 0.296, -0.083], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "feather-pale", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "feather-mottling", "kind": "material-variation", "description": "Irregular dark flecking over a pale grey-brown ground. Measured luma contrast within a single crop is 125 (P10 31, P90 156) -- the highest local contrast anywhere on the bird.", "evidenceRefs": ["ev-tail-pale"]}, {"id": "shingle-overlap", "kind": "form", "description": "Feathers overlap in a shingled stack; carried by the sheaf's flattened section.", "evidenceRefs": ["ev-crop-tail"]}], "evidenceRefs": ["ev-crop-tail", "ev-glb-bands"], "fidelityTier": "macro", "colorMaterialRecipe": {"baseColor": "#95836D", "secondary": ["#5F5245", "#635545", "#A0937C"], "roughness": 0.72, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #95836D at roughness 0.72, no texture. Variation comes from colorVariation amount 0.16 on the z axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-tail-fleck", "ev-tail-pale"], "dominantAlbedo": "rgba(149, 131, 109, 1.0)", "secondaryAlbedo": "rgba(95, 82, 69, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.6, "materialClassNote": "Worn matte feather is the closest of any surface here to actual cloth."}};
  node_tail_fan_12.userData.actionProfile = {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}};
  (nodes["root"] ?? root).add(node_tail_fan_12);
  nodes["tail-fan"] = node_tail_fan_12;
  const mesh_tail_fan_12Geometry = endpoint_tail_fan_12
    ? new THREE.CylinderGeometry(endpoint_tail_fan_12.endRadius, endpoint_tail_fan_12.baseRadius, endpoint_tail_fan_12.length, 16, 6)
    : buildTaperedSweepGeometry({"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.032, "rz": 0.026, "twist": 0.0}, {"position": [0.0, 0.0249, -0.0072], "rx": 0.0363, "rz": 0.0263, "twist": 0.0}, {"position": [0.0, 0.047, -0.0183], "rx": 0.0407, "rz": 0.0267, "twist": 0.0}, {"position": [0.0, 0.0659, -0.0326], "rx": 0.045, "rz": 0.027, "twist": 0.0}, {"position": [0.0, 0.0811, -0.0495], "rx": 0.0493, "rz": 0.0273, "twist": 0.0}, {"position": [0.0, 0.0924, -0.0683], "rx": 0.0537, "rz": 0.0277, "twist": 0.0}, {"position": [0.0, 0.0994, -0.0882], "rx": 0.058, "rz": 0.028, "twist": 0.0}, {"position": [0.0, 0.1017, -0.1088], "rx": 0.0433, "rz": 0.0209, "twist": 0.0}, {"position": [0.0, 0.0989, -0.1292], "rx": 0.0303, "rz": 0.0146, "twist": 0.0}, {"position": [0.0, 0.0907, -0.1488], "rx": 0.0191, "rz": 0.0092, "twist": 0.0}, {"position": [0.0, 0.0767, -0.1669], "rx": 0.01, "rz": 0.0048, "twist": 0.0}, {"position": [0.0, 0.0566, -0.1829], "rx": 0.0033, "rz": 0.0016, "twist": 0.0}, {"position": [0.0, 0.03, -0.196], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 14, "capEnds": true});
  if (!endpoint_tail_fan_12) {
    mesh_tail_fan_12Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_tail_fan_12 = new THREE.Mesh(
    mesh_tail_fan_12Geometry,
    materialMap["feather-pale"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_tail_fan_12.name = "Shingled pale tail fan";
  if (endpoint_tail_fan_12) {
    mesh_tail_fan_12.position.copy(endpoint_tail_fan_12.midpoint);
    mesh_tail_fan_12.quaternion.copy(endpoint_tail_fan_12.quaternion);
  }
  mesh_tail_fan_12.castShadow = options.castShadow ?? true;
  mesh_tail_fan_12.receiveShadow = options.receiveShadow ?? true;
  mesh_tail_fan_12.userData.sculptComponent = {"id": "tail-fan", "name": "Shingled pale tail fan", "level": "macro", "role": "tail", "importance": 0.95, "confidence": 0.75, "primitive": "tapered-sweep", "topologyClass": "conforming-shell", "topologyRationale": "The tail's main mass is a shingled stack of overlapping feathers that reads as one laterally-wide, dorsoventrally-thin sheaf at prop distance. Built as one swept shell along the tail's measured arc, laterally wide and thin through, tapering to a point.", "geometryDescriptor": {"topologyIntent": "swept sheaf of tail feathers arching aft and up, then curling aft and down", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.032, "rz": 0.026, "twist": 0.0}, {"position": [0.0, 0.0249, -0.0072], "rx": 0.0363, "rz": 0.0263, "twist": 0.0}, {"position": [0.0, 0.047, -0.0183], "rx": 0.0407, "rz": 0.0267, "twist": 0.0}, {"position": [0.0, 0.0659, -0.0326], "rx": 0.045, "rz": 0.027, "twist": 0.0}, {"position": [0.0, 0.0811, -0.0495], "rx": 0.0493, "rz": 0.0273, "twist": 0.0}, {"position": [0.0, 0.0924, -0.0683], "rx": 0.0537, "rz": 0.0277, "twist": 0.0}, {"position": [0.0, 0.0994, -0.0882], "rx": 0.058, "rz": 0.028, "twist": 0.0}, {"position": [0.0, 0.1017, -0.1088], "rx": 0.0433, "rz": 0.0209, "twist": 0.0}, {"position": [0.0, 0.0989, -0.1292], "rx": 0.0303, "rz": 0.0146, "twist": 0.0}, {"position": [0.0, 0.0907, -0.1488], "rx": 0.0191, "rz": 0.0092, "twist": 0.0}, {"position": [0.0, 0.0767, -0.1669], "rx": 0.01, "rz": 0.0048, "twist": 0.0}, {"position": [0.0, 0.0566, -0.1829], "rx": 0.0033, "rz": 0.0016, "twist": 0.0}, {"position": [0.0, 0.03, -0.196], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 14, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "13 stations x 14 radial segments, capped: about 364 triangles.", "sweptArcNote": "THE arc claim on this prop. Measured off the plate: tail root at world (y 0.300, z -0.083); the tail's highest point at (y 0.453, z -0.189); the aft-most point of the WHOLE silhouette at (y 0.338, z -0.303). The spine rises 0.092 m before it falls, so it is NOT monotonic. A straight cone from root to tip occupies roughly the right silhouette cells and is completely wrong, which is the case swept_arc_gate.py exists for.", "sectionNote": "rx (in-plane) runs 0.030 -> 0.054 -> 0 and rz (lateral) stays between 0.024 and 0.011, so the fan is roughly TWICE as deep in profile as it is wide across. That is the right anisotropy for a rooster's tail, which spreads in the sagittal plane and stays narrow seen from behind.", "taperNote": "Tip closes to a true point, ratio 0.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "frameNote": "FRAME SEMANTICS, read out of buildTaperedSweepGeometry rather than assumed. The sweep uses a PARALLEL-TRANSPORT frame: `rx` scales the frame's NORMAL and `rz` its BINORMAL. For a spine that lies wholly in the YZ plane, as both tail sweeps and the neck do, the seed reference (0,0,1) transports to a normal inside the sagittal plane and a binormal of exactly (1,0,0). So for this prop `rx` is the IN-PLANE (profile) half-thickness and `rz` is the LATERAL half-width -- the opposite way round from what the first draft of this spec claimed. The first blockout render is what exposed it: the tail read broad in profile and narrow from behind, which is the right answer arrived at from a wrong description, and a description that would have sent the next correction in exactly the wrong direction.", "correctionNote": "form-refinement correction 2. Band 0.80 of height was the WORST band in the structural review at -0.479: the plate carries 0.598 of fore-aft extent at y 0.44 and the model carried 0.119, because the tail crossed that height as a narrow tube and left it again. The plate's tail is broad there because its arc runs NEAR-HORIZONTAL across the crest for a long stretch while a fan of feathers spreads along it. The Bezier control points are re-chosen so the spine flattens across its crest instead of turning a corner, and the in-plane radius at the crest goes 0.054 -> 0.058 for the fan. Station count 11 -> 13 to keep the flatter curve from faceting.", "smoothingNote": "blockout correction 3. The six-station arc rendered as a faceted polygonal slab with visible creases, because buildTaperedSweepGeometry joins stations with STRAIGHT segments -- it does not spline between them, so station count IS the curve's resolution. Resampled to eleven stations along a cubic Bezier through the three measured points (root, crest, tip). The cost was measured rather than assumed: stations x radialSegments x 2, so 11 x 14 x 2 = 308 triangles for the fan against the 15,748 already spent on the implicit surfaces.", "crestNote": "Crest spine now sits at world y 0.3977 and holds within 10 mm of that height over roughly a third of the sweep's length."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "embed", "note": "Root station sits inside the pygostyle lobe of the body shell. No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.012, "overlap": 0.012, "gapTolerance": 0.0005}, "dimensions": {"width": 0.052, "height": 0.2, "depth": 0.2}, "transform": {"position": [0.0, 0.296, -0.083], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "feather-pale", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "feather-mottling", "kind": "material-variation", "description": "Irregular dark flecking over a pale grey-brown ground. Measured luma contrast within a single crop is 125 (P10 31, P90 156) -- the highest local contrast anywhere on the bird.", "evidenceRefs": ["ev-tail-pale"]}, {"id": "shingle-overlap", "kind": "form", "description": "Feathers overlap in a shingled stack; carried by the sheaf's flattened section.", "evidenceRefs": ["ev-crop-tail"]}], "evidenceRefs": ["ev-crop-tail", "ev-glb-bands"], "fidelityTier": "macro", "colorMaterialRecipe": {"baseColor": "#95836D", "secondary": ["#5F5245", "#635545", "#A0937C"], "roughness": 0.72, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #95836D at roughness 0.72, no texture. Variation comes from colorVariation amount 0.16 on the z axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-tail-fleck", "ev-tail-pale"], "dominantAlbedo": "rgba(149, 131, 109, 1.0)", "secondaryAlbedo": "rgba(95, 82, 69, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.6, "materialClassNote": "Worn matte feather is the closest of any surface here to actual cloth."}};
  node_tail_fan_12.add(mesh_tail_fan_12);
  meshes["tail-fan"] = mesh_tail_fan_12;
  colliders["tail-fan"] = null;

  const endpoint_tail_sickles_13 = makeAttachmentEndpoint(null);
  const node_tail_sickles_13 = new THREE.Group();
  node_tail_sickles_13.name = "Long curling sickle feathers__pivot";
  node_tail_sickles_13.scale.set(1, 1, 1);
  if (endpoint_tail_sickles_13) {
    node_tail_sickles_13.position.copy(endpoint_tail_sickles_13.start);
    node_tail_sickles_13.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_tail_sickles_13.position.set(0.0, 0.322, -0.083);
    node_tail_sickles_13.rotation.set(0.0, 0.0, 0.0);
  }
  node_tail_sickles_13.userData.sculptComponent = {"id": "tail-sickles", "name": "Long curling sickle feathers", "level": "meso", "role": "tail", "importance": 0.9, "confidence": 0.7, "primitive": "tapered-sweep", "topologyClass": "conforming-shell", "topologyRationale": "The two longest sickles curl further than the fan and are what makes the tail read as a gamecock's rather than a hen's. A narrower sweep on the same arc, carried further and dropped lower.", "geometryDescriptor": {"topologyIntent": "the pair of long sickles, curling further aft and down than the fan they sit on", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.02, "rz": 0.014, "twist": 0.0}, {"position": [0.0, 0.028, -0.0085], "rx": 0.0207, "rz": 0.0138, "twist": 0.0}, {"position": [0.0, 0.0528, -0.0213], "rx": 0.0213, "rz": 0.0137, "twist": 0.0}, {"position": [0.0, 0.0739, -0.0377], "rx": 0.022, "rz": 0.0135, "twist": 0.0}, {"position": [0.0, 0.0909, -0.057], "rx": 0.0227, "rz": 0.0133, "twist": 0.0}, {"position": [0.0, 0.1034, -0.0784], "rx": 0.0233, "rz": 0.0132, "twist": 0.0}, {"position": [0.0, 0.111, -0.101], "rx": 0.024, "rz": 0.013, "twist": 0.0}, {"position": [0.0, 0.1133, -0.1241], "rx": 0.0179, "rz": 0.0097, "twist": 0.0}, {"position": [0.0, 0.1098, -0.147], "rx": 0.0125, "rz": 0.0068, "twist": 0.0}, {"position": [0.0, 0.1001, -0.1688], "rx": 0.0079, "rz": 0.0043, "twist": 0.0}, {"position": [0.0, 0.0839, -0.1887], "rx": 0.0041, "rz": 0.0022, "twist": 0.0}, {"position": [0.0, 0.0607, -0.206], "rx": 0.0014, "rz": 0.0007, "twist": 0.0}, {"position": [0.0, 0.03, -0.22], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 12, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "13 stations x 12 radial segments, capped: about 312 triangles.", "sweptArcNote": "The same arc as the fan, carried 30 mm further aft and dropped to world y 0.354 at the tip. This is the component the swept-arc gate should be run against: it rises 0.106 m and then falls 0.082 m.", "standProudNote": "At the crest this sweep's spine sits at world y 0.442 with rx 0.022, reaching 0.464, against the fan's upper edge at 0.446: the sickles ride 18 mm ABOVE the fan and are narrower, so they read as the long feathers lying over the mass rather than as part of it. The two interpenetrate as solids, which is what self_intersection.py measures; they share no surface, so there is nothing to z-fight.", "taperNote": "Tip closes to a true point, ratio 0.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "frameNote": "FRAME SEMANTICS, read out of buildTaperedSweepGeometry rather than assumed. The sweep uses a PARALLEL-TRANSPORT frame: `rx` scales the frame's NORMAL and `rz` its BINORMAL. For a spine that lies wholly in the YZ plane, as both tail sweeps and the neck do, the seed reference (0,0,1) transports to a normal inside the sagittal plane and a binormal of exactly (1,0,0). So for this prop `rx` is the IN-PLANE (profile) half-thickness and `rz` is the LATERAL half-width -- the opposite way round from what the first draft of this spec claimed. The first blockout render is what exposed it: the tail read broad in profile and narrow from behind, which is the right answer arrived at from a wrong description, and a description that would have sent the next correction in exactly the wrong direction.", "correctionNote": "form-refinement correction 2. Band 0.80 of height was the WORST band in the structural review at -0.479: the plate carries 0.598 of fore-aft extent at y 0.44 and the model carried 0.119, because the tail crossed that height as a narrow tube and left it again. The plate's tail is broad there because its arc runs NEAR-HORIZONTAL across the crest for a long stretch while a fan of feathers spreads along it. The Bezier control points are re-chosen so the spine flattens across its crest instead of turning a corner, and the in-plane radius at the crest goes 0.054 -> 0.058 for the fan. Station count 11 -> 13 to keep the flatter curve from faceting.", "smoothingNote": "blockout correction 3. The six-station arc rendered as a faceted polygonal slab with visible creases, because buildTaperedSweepGeometry joins stations with STRAIGHT segments -- it does not spline between them, so station count IS the curve's resolution. Resampled to eleven stations along a cubic Bezier through the three measured points (root, crest, tip). The cost was measured rather than assumed: stations x radialSegments x 2, so 11 x 14 x 2 = 308 triangles for the fan against the 15,748 already spent on the implicit surfaces.", "crestNote": "Crest spine now sits at world y 0.4353 and holds within 10 mm of that height over roughly a third of the sweep's length."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "embed", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.012, "overlap": 0.012, "gapTolerance": 0.0005, "note": "No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing."}, "dimensions": {"width": 0.026, "height": 0.13, "depth": 0.22}, "transform": {"position": [0.0, 0.322, -0.083], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "feather-pale", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "sickle-curl", "kind": "form", "description": "The tip curls down below the arc's crest -- a hook, not a straight taper.", "evidenceRefs": ["ev-crop-tail"]}], "evidenceRefs": ["ev-crop-tail"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#95836D", "secondary": ["#5F5245", "#635545", "#A0937C"], "roughness": 0.72, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #95836D at roughness 0.72, no texture. Variation comes from colorVariation amount 0.16 on the z axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-tail-fleck", "ev-tail-pale"], "dominantAlbedo": "rgba(149, 131, 109, 1.0)", "secondaryAlbedo": "rgba(95, 82, 69, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.6, "materialClassNote": "Worn matte feather is the closest of any surface here to actual cloth."}};
  node_tail_sickles_13.userData.actionProfile = {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}};
  (nodes["root"] ?? root).add(node_tail_sickles_13);
  nodes["tail-sickles"] = node_tail_sickles_13;
  const mesh_tail_sickles_13Geometry = endpoint_tail_sickles_13
    ? new THREE.CylinderGeometry(endpoint_tail_sickles_13.endRadius, endpoint_tail_sickles_13.baseRadius, endpoint_tail_sickles_13.length, 16, 6)
    : buildTaperedSweepGeometry({"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.02, "rz": 0.014, "twist": 0.0}, {"position": [0.0, 0.028, -0.0085], "rx": 0.0207, "rz": 0.0138, "twist": 0.0}, {"position": [0.0, 0.0528, -0.0213], "rx": 0.0213, "rz": 0.0137, "twist": 0.0}, {"position": [0.0, 0.0739, -0.0377], "rx": 0.022, "rz": 0.0135, "twist": 0.0}, {"position": [0.0, 0.0909, -0.057], "rx": 0.0227, "rz": 0.0133, "twist": 0.0}, {"position": [0.0, 0.1034, -0.0784], "rx": 0.0233, "rz": 0.0132, "twist": 0.0}, {"position": [0.0, 0.111, -0.101], "rx": 0.024, "rz": 0.013, "twist": 0.0}, {"position": [0.0, 0.1133, -0.1241], "rx": 0.0179, "rz": 0.0097, "twist": 0.0}, {"position": [0.0, 0.1098, -0.147], "rx": 0.0125, "rz": 0.0068, "twist": 0.0}, {"position": [0.0, 0.1001, -0.1688], "rx": 0.0079, "rz": 0.0043, "twist": 0.0}, {"position": [0.0, 0.0839, -0.1887], "rx": 0.0041, "rz": 0.0022, "twist": 0.0}, {"position": [0.0, 0.0607, -0.206], "rx": 0.0014, "rz": 0.0007, "twist": 0.0}, {"position": [0.0, 0.03, -0.22], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 12, "capEnds": true});
  if (!endpoint_tail_sickles_13) {
    mesh_tail_sickles_13Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_tail_sickles_13 = new THREE.Mesh(
    mesh_tail_sickles_13Geometry,
    materialMap["feather-pale"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_tail_sickles_13.name = "Long curling sickle feathers";
  if (endpoint_tail_sickles_13) {
    mesh_tail_sickles_13.position.copy(endpoint_tail_sickles_13.midpoint);
    mesh_tail_sickles_13.quaternion.copy(endpoint_tail_sickles_13.quaternion);
  }
  mesh_tail_sickles_13.castShadow = options.castShadow ?? true;
  mesh_tail_sickles_13.receiveShadow = options.receiveShadow ?? true;
  mesh_tail_sickles_13.userData.sculptComponent = {"id": "tail-sickles", "name": "Long curling sickle feathers", "level": "meso", "role": "tail", "importance": 0.9, "confidence": 0.7, "primitive": "tapered-sweep", "topologyClass": "conforming-shell", "topologyRationale": "The two longest sickles curl further than the fan and are what makes the tail read as a gamecock's rather than a hen's. A narrower sweep on the same arc, carried further and dropped lower.", "geometryDescriptor": {"topologyIntent": "the pair of long sickles, curling further aft and down than the fan they sit on", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.02, "rz": 0.014, "twist": 0.0}, {"position": [0.0, 0.028, -0.0085], "rx": 0.0207, "rz": 0.0138, "twist": 0.0}, {"position": [0.0, 0.0528, -0.0213], "rx": 0.0213, "rz": 0.0137, "twist": 0.0}, {"position": [0.0, 0.0739, -0.0377], "rx": 0.022, "rz": 0.0135, "twist": 0.0}, {"position": [0.0, 0.0909, -0.057], "rx": 0.0227, "rz": 0.0133, "twist": 0.0}, {"position": [0.0, 0.1034, -0.0784], "rx": 0.0233, "rz": 0.0132, "twist": 0.0}, {"position": [0.0, 0.111, -0.101], "rx": 0.024, "rz": 0.013, "twist": 0.0}, {"position": [0.0, 0.1133, -0.1241], "rx": 0.0179, "rz": 0.0097, "twist": 0.0}, {"position": [0.0, 0.1098, -0.147], "rx": 0.0125, "rz": 0.0068, "twist": 0.0}, {"position": [0.0, 0.1001, -0.1688], "rx": 0.0079, "rz": 0.0043, "twist": 0.0}, {"position": [0.0, 0.0839, -0.1887], "rx": 0.0041, "rz": 0.0022, "twist": 0.0}, {"position": [0.0, 0.0607, -0.206], "rx": 0.0014, "rz": 0.0007, "twist": 0.0}, {"position": [0.0, 0.03, -0.22], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 12, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "13 stations x 12 radial segments, capped: about 312 triangles.", "sweptArcNote": "The same arc as the fan, carried 30 mm further aft and dropped to world y 0.354 at the tip. This is the component the swept-arc gate should be run against: it rises 0.106 m and then falls 0.082 m.", "standProudNote": "At the crest this sweep's spine sits at world y 0.442 with rx 0.022, reaching 0.464, against the fan's upper edge at 0.446: the sickles ride 18 mm ABOVE the fan and are narrower, so they read as the long feathers lying over the mass rather than as part of it. The two interpenetrate as solids, which is what self_intersection.py measures; they share no surface, so there is nothing to z-fight.", "taperNote": "Tip closes to a true point, ratio 0.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "frameNote": "FRAME SEMANTICS, read out of buildTaperedSweepGeometry rather than assumed. The sweep uses a PARALLEL-TRANSPORT frame: `rx` scales the frame's NORMAL and `rz` its BINORMAL. For a spine that lies wholly in the YZ plane, as both tail sweeps and the neck do, the seed reference (0,0,1) transports to a normal inside the sagittal plane and a binormal of exactly (1,0,0). So for this prop `rx` is the IN-PLANE (profile) half-thickness and `rz` is the LATERAL half-width -- the opposite way round from what the first draft of this spec claimed. The first blockout render is what exposed it: the tail read broad in profile and narrow from behind, which is the right answer arrived at from a wrong description, and a description that would have sent the next correction in exactly the wrong direction.", "correctionNote": "form-refinement correction 2. Band 0.80 of height was the WORST band in the structural review at -0.479: the plate carries 0.598 of fore-aft extent at y 0.44 and the model carried 0.119, because the tail crossed that height as a narrow tube and left it again. The plate's tail is broad there because its arc runs NEAR-HORIZONTAL across the crest for a long stretch while a fan of feathers spreads along it. The Bezier control points are re-chosen so the spine flattens across its crest instead of turning a corner, and the in-plane radius at the crest goes 0.054 -> 0.058 for the fan. Station count 11 -> 13 to keep the flatter curve from faceting.", "smoothingNote": "blockout correction 3. The six-station arc rendered as a faceted polygonal slab with visible creases, because buildTaperedSweepGeometry joins stations with STRAIGHT segments -- it does not spline between them, so station count IS the curve's resolution. Resampled to eleven stations along a cubic Bezier through the three measured points (root, crest, tip). The cost was measured rather than assumed: stations x radialSegments x 2, so 11 x 14 x 2 = 308 triangles for the fan against the 15,748 already spent on the implicit surfaces.", "crestNote": "Crest spine now sits at world y 0.4353 and holds within 10 mm of that height over roughly a third of the sweep's length."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "embed", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.012, "overlap": 0.012, "gapTolerance": 0.0005, "note": "No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing."}, "dimensions": {"width": 0.026, "height": 0.13, "depth": 0.22}, "transform": {"position": [0.0, 0.322, -0.083], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "feather-pale", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "sickle-curl", "kind": "form", "description": "The tip curls down below the arc's crest -- a hook, not a straight taper.", "evidenceRefs": ["ev-crop-tail"]}], "evidenceRefs": ["ev-crop-tail"], "fidelityTier": "meso", "colorMaterialRecipe": {"baseColor": "#95836D", "secondary": ["#5F5245", "#635545", "#A0937C"], "roughness": 0.72, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #95836D at roughness 0.72, no texture. Variation comes from colorVariation amount 0.16 on the z axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-tail-fleck", "ev-tail-pale"], "dominantAlbedo": "rgba(149, 131, 109, 1.0)", "secondaryAlbedo": "rgba(95, 82, 69, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.6, "materialClassNote": "Worn matte feather is the closest of any surface here to actual cloth."}};
  node_tail_sickles_13.add(mesh_tail_sickles_13);
  meshes["tail-sickles"] = mesh_tail_sickles_13;
  colliders["tail-sickles"] = null;

  const endpoint_tail_lower_fan_14 = makeAttachmentEndpoint(null);
  const node_tail_lower_fan_14 = new THREE.Group();
  node_tail_lower_fan_14.name = "Lower tail fan hanging below the arc__pivot";
  node_tail_lower_fan_14.scale.set(1, 1, 1);
  if (endpoint_tail_lower_fan_14) {
    node_tail_lower_fan_14.position.copy(endpoint_tail_lower_fan_14.start);
    node_tail_lower_fan_14.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_tail_lower_fan_14.position.set(0.0, 0.3, -0.09);
    node_tail_lower_fan_14.rotation.set(0.0, 0.0, 0.0);
  }
  node_tail_lower_fan_14.userData.sculptComponent = {"id": "tail-lower-fan", "name": "Lower tail fan hanging below the arc", "level": "meso", "role": "tail", "importance": 0.7, "confidence": 0.65, "primitive": "tapered-sweep", "topologyClass": "conforming-shell", "topologyRationale": "The tail is a LAYERED stack, not one sheaf. Below the arching upper fan a second group of feathers hangs aft and slightly DOWN from the coverts; it is what fills the space between the tail and the body's underside. Built as its own conforming shell because a single sweep has one spine and cannot be in two places.", "geometryDescriptor": {"topologyIntent": "lower tail sheaf running aft and down from the coverts, below the arching fan", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.03, "rz": 0.024, "twist": 0.0}, {"position": [0.0, 0.01, -0.048], "rx": 0.034, "rz": 0.024, "twist": 0.0}, {"position": [0.0, 0.008, -0.1], "rx": 0.03, "rz": 0.02, "twist": 0.0}, {"position": [0.0, -0.006, -0.146], "rx": 0.02, "rz": 0.014, "twist": 0.0}, {"position": [0.0, -0.026, -0.176], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 12, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "5 stations x 12 radial segments, capped: about 120 triangles.", "sectionNote": "rx (in-plane) runs 0.030 -> 0.054 -> 0 and rz (lateral) stays between 0.024 and 0.011, so the fan is roughly TWICE as deep in profile as it is wide across. That is the right anisotropy for a rooster's tail, which spreads in the sagittal plane and stays narrow seen from behind.", "taperNote": "Tip closes to a true point, ratio 0.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "frameNote": "FRAME SEMANTICS, read out of buildTaperedSweepGeometry rather than assumed. The sweep uses a PARALLEL-TRANSPORT frame: `rx` scales the frame's NORMAL and `rz` its BINORMAL. For a spine that lies wholly in the YZ plane, as both tail sweeps and the neck do, the seed reference (0,0,1) transports to a normal inside the sagittal plane and a binormal of exactly (1,0,0). So for this prop `rx` is the IN-PLANE (profile) half-thickness and `rz` is the LATERAL half-width -- the opposite way round from what the first draft of this spec claimed. The first blockout render is what exposed it: the tail read broad in profile and narrow from behind, which is the right answer arrived at from a wrong description, and a description that would have sent the next correction in exactly the wrong direction.", "correctionNote": "form-refinement correction 4, and the LAST unique-geometry slot on this prop -- it takes the count to 16 of 16. Spent here because bands 0.50 and 0.55 of height were the two worst remaining after the crest fix, at -0.154 and -0.191: the plate carries 0.531 and 0.619 of fore-aft extent at y 0.275 and y 0.303, and the model carried 0.377 and 0.428, because the upper fan's LOWEST point is its tip at y 0.326 and there was simply nothing below it. In the plate a second group of feathers hangs aft and down from the coverts and fills exactly that space. One sweep has one spine and cannot occupy both, so this is the case for a second component rather than a wider first one.", "smoothingNote": "blockout correction 3. The six-station arc rendered as a faceted polygonal slab with visible creases, because buildTaperedSweepGeometry joins stations with STRAIGHT segments -- it does not spline between them, so station count IS the curve's resolution. Resampled to eleven stations along a cubic Bezier through the three measured points (root, crest, tip). The cost was measured rather than assumed: stations x radialSegments x 2, so 11 x 14 x 2 = 308 triangles for the fan against the 15,748 already spent on the implicit surfaces.", "standProudNote": "Runs BELOW the upper fan along its whole length -- 26 to 40 mm lower at every matching fore-aft station -- and roots inside the same pygostyle lobe. The two overlap as solids near the root and separate aft; they share no surface, so there is nothing co-facing to z-fight."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "embed", "note": "Root station sits inside the pygostyle lobe of the body shell. No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.012, "overlap": 0.012, "gapTolerance": 0.0005}, "dimensions": {"width": 0.048, "height": 0.062, "depth": 0.186}, "transform": {"position": [0.0, 0.3, -0.09], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "feather-pale", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "lower-fan-drape", "kind": "form", "description": "The lower sheaf droops rather than arching; its tip sits 52 mm below the upper fan's.", "evidenceRefs": ["ev-crop-tail"]}], "evidenceRefs": ["ev-crop-tail", "ev-glb-bands"], "fidelityTier": "macro", "colorMaterialRecipe": {"baseColor": "#95836D", "secondary": ["#5F5245", "#635545", "#A0937C"], "roughness": 0.72, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #95836D at roughness 0.72, no texture. Variation comes from colorVariation amount 0.16 on the z axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-tail-fleck", "ev-tail-pale"], "dominantAlbedo": "rgba(149, 131, 109, 1.0)", "secondaryAlbedo": "rgba(95, 82, 69, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.6, "materialClassNote": "Worn matte feather is the closest of any surface here to actual cloth."}};
  node_tail_lower_fan_14.userData.actionProfile = {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}};
  (nodes["root"] ?? root).add(node_tail_lower_fan_14);
  nodes["tail-lower-fan"] = node_tail_lower_fan_14;
  const mesh_tail_lower_fan_14Geometry = endpoint_tail_lower_fan_14
    ? new THREE.CylinderGeometry(endpoint_tail_lower_fan_14.endRadius, endpoint_tail_lower_fan_14.baseRadius, endpoint_tail_lower_fan_14.length, 16, 6)
    : buildTaperedSweepGeometry({"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.03, "rz": 0.024, "twist": 0.0}, {"position": [0.0, 0.01, -0.048], "rx": 0.034, "rz": 0.024, "twist": 0.0}, {"position": [0.0, 0.008, -0.1], "rx": 0.03, "rz": 0.02, "twist": 0.0}, {"position": [0.0, -0.006, -0.146], "rx": 0.02, "rz": 0.014, "twist": 0.0}, {"position": [0.0, -0.026, -0.176], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 12, "capEnds": true});
  if (!endpoint_tail_lower_fan_14) {
    mesh_tail_lower_fan_14Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_tail_lower_fan_14 = new THREE.Mesh(
    mesh_tail_lower_fan_14Geometry,
    materialMap["feather-pale"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_tail_lower_fan_14.name = "Lower tail fan hanging below the arc";
  if (endpoint_tail_lower_fan_14) {
    mesh_tail_lower_fan_14.position.copy(endpoint_tail_lower_fan_14.midpoint);
    mesh_tail_lower_fan_14.quaternion.copy(endpoint_tail_lower_fan_14.quaternion);
  }
  mesh_tail_lower_fan_14.castShadow = options.castShadow ?? true;
  mesh_tail_lower_fan_14.receiveShadow = options.receiveShadow ?? true;
  mesh_tail_lower_fan_14.userData.sculptComponent = {"id": "tail-lower-fan", "name": "Lower tail fan hanging below the arc", "level": "meso", "role": "tail", "importance": 0.7, "confidence": 0.65, "primitive": "tapered-sweep", "topologyClass": "conforming-shell", "topologyRationale": "The tail is a LAYERED stack, not one sheaf. Below the arching upper fan a second group of feathers hangs aft and slightly DOWN from the coverts; it is what fills the space between the tail and the body's underside. Built as its own conforming shell because a single sweep has one spine and cannot be in two places.", "geometryDescriptor": {"topologyIntent": "lower tail sheaf running aft and down from the coverts, below the arching fan", "taperedSweep": {"stations": [{"position": [0.0, 0.0, 0.0], "rx": 0.03, "rz": 0.024, "twist": 0.0}, {"position": [0.0, 0.01, -0.048], "rx": 0.034, "rz": 0.024, "twist": 0.0}, {"position": [0.0, 0.008, -0.1], "rx": 0.03, "rz": 0.02, "twist": 0.0}, {"position": [0.0, -0.006, -0.146], "rx": 0.02, "rz": 0.014, "twist": 0.0}, {"position": [0.0, -0.026, -0.176], "rx": 0.0, "rz": 0.0, "twist": 0.0}], "radialSegments": 12, "capEnds": true}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "5 stations x 12 radial segments, capped: about 120 triangles.", "sectionNote": "rx (in-plane) runs 0.030 -> 0.054 -> 0 and rz (lateral) stays between 0.024 and 0.011, so the fan is roughly TWICE as deep in profile as it is wide across. That is the right anisotropy for a rooster's tail, which spreads in the sagittal plane and stays narrow seen from behind.", "taperNote": "Tip closes to a true point, ratio 0.", "parentingNote": "TRANSFORM PARENT IS THE ROOT for every component; the logical hierarchy lives in attachment.parentId. The generator parents nodes by `component.parent` and COMPOSES their transforms, and most geometry here is authored in world coordinates (both leg fields, the body field) or hung off a world-placed pivot (every sweep). Leaving the logical parent in `parent` would have added the thigh's offset to a leg already at its world position and displaced it by exactly that much. Flattening is the same fix the 7-Eleven's facade wall carries, for the same reason. The model is still fully explodable and clickable: every component is its own named node.", "frameNote": "FRAME SEMANTICS, read out of buildTaperedSweepGeometry rather than assumed. The sweep uses a PARALLEL-TRANSPORT frame: `rx` scales the frame's NORMAL and `rz` its BINORMAL. For a spine that lies wholly in the YZ plane, as both tail sweeps and the neck do, the seed reference (0,0,1) transports to a normal inside the sagittal plane and a binormal of exactly (1,0,0). So for this prop `rx` is the IN-PLANE (profile) half-thickness and `rz` is the LATERAL half-width -- the opposite way round from what the first draft of this spec claimed. The first blockout render is what exposed it: the tail read broad in profile and narrow from behind, which is the right answer arrived at from a wrong description, and a description that would have sent the next correction in exactly the wrong direction.", "correctionNote": "form-refinement correction 4, and the LAST unique-geometry slot on this prop -- it takes the count to 16 of 16. Spent here because bands 0.50 and 0.55 of height were the two worst remaining after the crest fix, at -0.154 and -0.191: the plate carries 0.531 and 0.619 of fore-aft extent at y 0.275 and y 0.303, and the model carried 0.377 and 0.428, because the upper fan's LOWEST point is its tip at y 0.326 and there was simply nothing below it. In the plate a second group of feathers hangs aft and down from the coverts and fills exactly that space. One sweep has one spine and cannot occupy both, so this is the case for a second component rather than a wider first one.", "smoothingNote": "blockout correction 3. The six-station arc rendered as a faceted polygonal slab with visible creases, because buildTaperedSweepGeometry joins stations with STRAIGHT segments -- it does not spline between them, so station count IS the curve's resolution. Resampled to eleven stations along a cubic Bezier through the three measured points (root, crest, tip). The cost was measured rather than assumed: stations x radialSegments x 2, so 11 x 14 x 2 = 308 triangles for the fan against the 15,748 already spent on the implicit surfaces.", "standProudNote": "Runs BELOW the upper fan along its whole length -- 26 to 40 mm lower at every matching fore-aft station -- and roots inside the same pygostyle lobe. The two overlap as solids near the root and separate aft; they share no surface, so there is nothing co-facing to z-fight."}, "parent": null, "attachment": {"parentId": "body-shell", "parentSocket": null, "contactType": "embed", "note": "Root station sits inside the pygostyle lobe of the body shell. No gap is permitted: gapTolerance 0.5 mm, and the joint is an embed so no two faces are coincident and co-facing.", "localStart": [0.0, 0.0, 0.0], "localEnd": [0.0, 0.0, 0.0], "embedDepth": 0.012, "overlap": 0.012, "gapTolerance": 0.0005}, "dimensions": {"width": 0.048, "height": 0.062, "depth": 0.186}, "transform": {"position": [0.0, 0.3, -0.09], "rotation": [0.0, 0.0, 0.0], "scale": [1.0, 1.0, 1.0]}, "material": "feather-pale", "actionProfile": {"collider": null, "sockets": [], "destruction": {"fractureGroup": null}}, "localFeatures": [{"id": "lower-fan-drape", "kind": "form", "description": "The lower sheaf droops rather than arching; its tip sits 52 mm below the upper fan's.", "evidenceRefs": ["ev-crop-tail"]}], "evidenceRefs": ["ev-crop-tail", "ev-glb-bands"], "fidelityTier": "macro", "colorMaterialRecipe": {"baseColor": "#95836D", "secondary": ["#5F5245", "#635545", "#A0937C"], "roughness": 0.72, "metalness": 0.0, "finish": "satin dielectric", "recipe": "Flat de-lit albedo #95836D at roughness 0.72, no texture. Variation comes from colorVariation amount 0.16 on the z axis, which is what carries the surface's read in place of a map.", "sourceEvidence": ["ev-tail-fleck", "ev-tail-pale"], "dominantAlbedo": "rgba(149, 131, 109, 1.0)", "secondaryAlbedo": "rgba(95, 82, 69, 1.0)", "materialClass": "fabric", "materialClassConfidence": 0.6, "materialClassNote": "Worn matte feather is the closest of any surface here to actual cloth."}};
  node_tail_lower_fan_14.add(mesh_tail_lower_fan_14);
  meshes["tail-lower-fan"] = mesh_tail_lower_fan_14;
  colliders["tail-lower-fan"] = null;

  // repetition system: eyes (InstancedMesh, radial, count=2, level=micro)
  {
    const parent = nodes["head"] ?? root;
    const geo = new THREE.SphereGeometry(0.5, 32, 20);
    const mat = materialMap["eye-dark"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 });
    // Contract (PLAN_1.5 WS-E): instanceScale is ABSOLUTE, in the parent pivot's
    // local units -- it is never multiplied by the parent component's own declared
    // dimensional scale. This falls out of the same fix as componentTree: the pivot
    // Group this cluster is parented to always carries identity scale (dimensions are
    // baked into that component's OWN geometry, not exposed on the Group), so an
    // instanced fastener/tooth/spoke sized [0.05, 0.05, 0.05] renders at exactly that
    // size regardless of how non-uniformly its host component is shaped, and a
    // `radial` ring's placement stays circular instead of being squashed into an
    // ellipse by a non-uniform host.
    const scl = [0.0092, 0.0092, 0.0092];
    const axis = new THREE.Vector3(0.0, 1.0, 0.0).normalize();
    const radius = 0.033;
    const seed = Math.abs(axis.z) < 0.9 ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(1, 0, 0);
    const perp = new THREE.Vector3().crossVectors(axis, seed).normalize();
    // One InstancedMesh = one draw call for all repeated parts (teeth/fasteners/spokes),
    // replacing the former per-instance Mesh clone loop (real-time perf principle).
    const cluster = new THREE.InstancedMesh(geo, mat, 2);
    const _m = new THREE.Matrix4();
    const _p = new THREE.Vector3();
    const _q = new THREE.Quaternion();
    const _s = new THREE.Vector3(scl[0], scl[1], scl[2]);
    for (let i = 0; i < 2; i++) {
      const ang = ((0.0) + (i * 360) / 2) * Math.PI / 180;
      const dir = perp.clone().applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axis, ang));
      _p.copy(radius > 0 ? dir.clone().multiplyScalar(radius * 0.5) : new THREE.Vector3());
      _q.setFromUnitVectors(new THREE.Vector3(1, 0, 0), dir);
      _m.compose(_p, _q, _s);
      cluster.setMatrixAt(i, _m);
    }
    cluster.instanceMatrix.needsUpdate = true;
    cluster.castShadow = options.castShadow ?? true;
    cluster.receiveShadow = options.receiveShadow ?? true;
    cluster.name = "eyes";
    parent.add(cluster);
  }

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"keyLight": {"azimuthDeg": 35, "elevationDeg": 40, "note": "Matches the plate: the key comes from upper front right, confirmed by the flank being 12 luma darker than the breast."}, "fillRatio": 0.45, "backdrop": "#9D9D9D", "backdropNote": "Measured from the plate's border ring: rgb 157,157,157 with a standard deviation of 0.08 -- a genuinely flat studio grey, not assumed.", "materialResponseTargets": ["Beak at roughness 0.35 must show a visible culmen highlight.", "Tail at roughness 0.72 must show none.", "Body must stay near-black without clamping to pure black in shadow."], "rimLight": {"present": false, "measurement": "aft silhouette edge 25.3 luma vs 25.0 at 8 px inside, over 43 rows: a 0.3 lift", "note": "Declared absent so that nothing downstream adds one by default."}, "environment": {"type": "uniform studio hemisphere", "color": "#9D9D9D", "intensityRelativeToKey": 0.45, "measurement": "border-ring mean rgb 157,157,157, standard deviation 0.08"}, "exposure": {"value": 1.0, "toneMapping": "ACES filmic"}};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createFightingCockLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "Fighting Cock look-dev lights";
  const hemi = new THREE.HemisphereLight(
    mode === 'reference' ? 0xfff0d6 : 0xf2f4ff,
    0x363b42,
    mode === 'grazing' ? 0.28 : mode === 'reference' ? 0.72 : 0.85,
  );
  lights.add(hemi);
  const key = new THREE.DirectionalLight(
    mode === 'reference' ? 0xffcf8a : 0xfff4e8,
    mode === 'grazing' ? 4.2 : mode === 'reference' ? 2.6 : 2.15,
  );
  if (mode === 'grazing') key.position.set(7.5, 1.1, 4.0);
  else if (mode === 'reference') key.position.set(-4.5, 7.5, 5.0);
  else key.position.set(-4.0, 6.0, 5.5);
  key.castShadow = true;
  key.shadow.mapSize.set(4096, 4096);
  key.shadow.bias = -0.00025;
  key.shadow.normalBias = 0.018;
  key.shadow.radius = 7;
  key.shadow.blurSamples = 24;
  key.shadow.camera.near = 0.5;
  key.shadow.camera.far = 30;
  key.shadow.camera.left = -2.6;
  key.shadow.camera.right = 2.6;
  key.shadow.camera.top = 2.6;
  key.shadow.camera.bottom = -2.6;
  key.shadow.camera.updateProjectionMatrix();
  lights.add(key);
  const fill = new THREE.DirectionalLight(0xa8c4ff, mode === 'grazing' ? 0.12 : 0.42);
  fill.position.set(4.0, 3.0, 3.5);
  lights.add(fill);
  const rim = new THREE.DirectionalLight(0xfff1c4, mode === 'grazing' ? 0.28 : 0.85);
  rim.position.set(0.5, 4.5, -6.0);
  lights.add(rim);
  lights.userData.reviewMode = mode;
  lights.userData.lightingFromPhoto = ["KEY: upper front right, about 35 degrees azimuth and 40 degrees elevation, soft-edged. Confirmed by the flank reading about 12 luma below the breast, and by the key-side silhouette edge reading 113 luma against 24 just 8 px inside it -- a curving surface turning into the key, not an edge light.", "FILL: broad and soft, from the backdrop, at roughly 0.45 of the key. The shadow side never drops below luma 10 anywhere on the bird.", "RIM: NONE, and this is measured rather than assumed. Across 43 rows of the body the aft, shadow-side silhouette edge reads 25.3 luma against 25.0 eight pixels inside it -- a lift of 0.3, which is nothing. The only bright edge on the plate is on the KEY side and is the key itself. So no rim or kicker is declared, because adding one would be inventing a light the photograph does not contain, and it would wash out the near-black plumage that is identity-defining here.", "ENVIRONMENT: a flat studio backdrop measuring rgb 157,157,157 with a standard deviation of 0.08, taken from a 12 px border ring rather than assumed -- a genuinely flat grey, not a white product matte. It behaves as a large low-intensity hemisphere and it is what fills the shadow side; it is the only environment contribution in the plate and there is no HDR content, no window and no coloured bounce to reproduce.", "EXPOSURE AND TONE MAPPING: render at exposure 1.0 with ACES filmic tone mapping. This matters more than usual on this prop and it was measured, not assumed: with the body's albedo the render's flank spanned a luma range of 6 to 10 against the plate's 10 to 36, so the tone curve was crushing the darks and the flank had no readable form. Four albedos were lifted in the material pass to compensate, and the median luma now tracks the plate within 3 levels on four of six materials.", "No baked lighting and no ambient occlusion enters any base colour. Every albedo is de-lit and each records the method and the crop it came from."];
  lights.userData.lookDevTargets = {"keyLight": {"azimuthDeg": 35, "elevationDeg": 40, "note": "Matches the plate: the key comes from upper front right, confirmed by the flank being 12 luma darker than the breast."}, "fillRatio": 0.45, "backdrop": "#9D9D9D", "backdropNote": "Measured from the plate's border ring: rgb 157,157,157 with a standard deviation of 0.08 -- a genuinely flat studio grey, not assumed.", "materialResponseTargets": ["Beak at roughness 0.35 must show a visible culmen highlight.", "Tail at roughness 0.72 must show none.", "Body must stay near-black without clamping to pure black in shadow."], "rimLight": {"present": false, "measurement": "aft silhouette edge 25.3 luma vs 25.0 at 8 px inside, over 43 rows: a 0.3 lift", "note": "Declared absent so that nothing downstream adds one by default."}, "environment": {"type": "uniform studio hemisphere", "color": "#9D9D9D", "intensityRelativeToKey": 0.45, "measurement": "border-ring mean rgb 157,157,157, standard deviation 0.08"}, "exposure": {"value": 1.0, "toneMapping": "ACES filmic"}};
  return lights;
}


// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameFightingCockCamera(
  camera: THREE.PerspectiveCamera,
  object: THREE.Object3D,
  options: { margin?: number; azimuthDeg?: number; elevationDeg?: number } = {},
): void {
  const box = new THREE.Box3().setFromObject(object);
  if (box.isEmpty()) return;
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const margin = options.margin ?? 1.15;
  const maxDim = Math.max(size.x, size.y, size.z) * margin;
  const fov = (camera.fov * Math.PI) / 180;
  // distance so the largest object dimension fits vertically in the frame
  const distance = (maxDim / 2) / Math.tan(fov / 2);
  const az = ((options.azimuthDeg ?? 0) * Math.PI) / 180;
  const el = ((options.elevationDeg ?? 0) * Math.PI) / 180;
  const dir = new THREE.Vector3(
    Math.sin(az) * Math.cos(el),
    Math.sin(el),
    Math.cos(az) * Math.cos(el),
  );
  camera.position.copy(center).addScaledVector(dir, distance);
  camera.near = Math.max(0.01, distance - maxDim);
  camera.far = distance + maxDim * 2;
  camera.lookAt(center);
  camera.updateProjectionMatrix();
}


export function configureFightingCockRenderer(renderer: THREE.WebGLRenderer): void {
  // Load-bearing for view-dependent finishes (anodized / Doppler): without ACES + sRGB
  // the environment reflection reads flat/washed instead of a believable metal response.
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
}

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it with
 * (spec, options); the generated factory is named for its target and takes options alone. `spec`
 * is accepted and attached for host-side inspection -- the reconstruction data already lives in
 * this module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(
  spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = createFightingCockModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // PIVOTS: exactly ONE, the root at base-center. This bird is static geometry in a fixed
    // standing pose -- no rig, no animation, nothing that articulates. A live rooster has a
    // hock, a hip, a neck and a jaw, and giving each of them a pivot would promise a game that
    // those parts turn. They do not. Zero sockets for the same reason: nothing attaches to it.
    const pivots: THREE.Object3D[] = [];
    const rootPivot = new THREE.Object3D();
    rootPivot.name = 'root';
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'root' },
    };
    root.add(rootPivot);
    nodes['root'] = rootPivot;
    pivots.push(rootPivot);

    // Colliders are plain DATA, not Object3D, so they carry no .name and would stringify as
    // [object Object] in a name-mapping consumer. Give each the id of the component it owns, and
    // drop the empty ones: the generator writes an entry for every component whether or not one
    // was declared, and a nameless empty proxy reads as a physics shape that exists and does
    // nothing. This prop declares `convex` and exposes exactly one, on body-shell.
    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // Destruction groups: this prop declares NONE, and promotion checks built against declared as
    // an equality in BOTH directions. Derived rather than assumed empty, so a component that
    // somehow carried a fractureGroup fails the gate loudly instead of being silently dropped.
    const grouped = new Map<string, THREE.Object3D[]>();
    for (const [name, members] of Object.entries((rt.destructionGroups ?? {}) as Record<string, THREE.Object3D[]>)) {
      grouped.set(name, [...members]);
    }
    for (const node of Object.values(nodes)) {
      const group = (node as any)?.userData?.actionProfile?.destruction?.fractureGroup;
      if (typeof group !== 'string' || !group) continue;
      if (!grouped.has(group)) grouped.set(group, []);
      grouped.get(group)!.push(node);
    }

    root.userData.sculptRuntime = {
      ...rt,
      // A COUNT, not the Record. thaikit's harness returns this field straight across the
      // puppeteer bridge and its registry field is a number; a Record of Object3D is circular and
      // fails to serialise, which surfaces as the whole stats object arriving undefined.
      nodes: Object.keys(nodes).length,
      pivots,
      sockets: Object.values((rt.sockets ?? {}) as Record<string, THREE.Object3D>),
      colliders,
      destructionGroups: [...grouped.entries()].map(([name, members]) => ({ name, members })),
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: rt.sockets ?? {} },
    };
  }

  return root;
}
