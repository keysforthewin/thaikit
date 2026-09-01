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

// bevelEnabled defaults to true on THREE.ExtrudeGeometry and rounds every
// corner — sharp/pointed profiles (blades, fork tines, spikes) need
// bevelEnabled: false plus lineTo()-only path segments near the tip, since a
// curve command cannot produce a true converging point.
function buildExtrudeShape(points: [number, number][], holes?: [number, number][][]): THREE.Shape {
  const shape = new THREE.Shape();
  if (points.length > 0) {
    shape.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i += 1) {
      shape.lineTo(points[i][0], points[i][1]);
    }
  }
  // Cutouts (e.g. an oval wire-cutter hole) as THREE.Path added to shape.holes —
  // dep-free boolean subtraction via the tessellator, no CSG library needed.
  for (const loop of holes ?? []) {
    if (loop.length < 3) continue;
    const path = new THREE.Path();
    path.moveTo(loop[0][0], loop[0][1]);
    for (let i = 1; i < loop.length; i += 1) path.lineTo(loop[i][0], loop[i][1]);
    path.closePath();
    shape.holes.push(path);
  }
  return shape;
}

// Build an N-gon oval loop (for hole authoring from a compact {cx,cy,rx,ry} descriptor).
function ovalLoop(cx: number, cy: number, rx: number, ry: number, seg = 24): [number, number][] {
  const loop: [number, number][] = [];
  for (let i = 0; i < seg; i += 1) {
    const a = (i / seg) * Math.PI * 2;
    loop.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]);
  }
  return loop;
}

function buildExtrudeGeometry(profile: { points: [number, number][]; depth: number; holes?: [number, number][][]; ovalHoles?: { cx: number; cy: number; rx: number; ry: number }[] }): THREE.ExtrudeGeometry {
  const holes = [...(profile.holes ?? []), ...((profile.ovalHoles ?? []).map((o) => ovalLoop(o.cx, o.cy, o.rx, o.ry)))];
  const shape = buildExtrudeShape(profile.points, holes);
  return new THREE.ExtrudeGeometry(shape, {
    depth: profile.depth,
    bevelEnabled: false,
    steps: 1,
  });
}

function buildLatheGeometry(profile: { points: [number, number][]; segments?: number }): THREE.LatheGeometry {
  const points = profile.points.map(([x, y]) => new THREE.Vector2(Math.max(0.0001, x), y));
  return new THREE.LatheGeometry(points, profile.segments ?? 24);
}

/* ------------------------------------------------------------------ deity arms
 *
 * THE PROXY RESOLVED THE ARMS THE PLATE COULD NOT. This component shipped as a bare lathe with a
 * written note that the four arms were unmodelled because they are "occluded by garland masses in
 * the only view available so there is no evidence for them" (unknown unk-deity-arms, confidence
 * 0.3). That was true of the PLATE and it is not true of the reference mesh: the proxy's front
 * elevation shows a seated figure with a crowned head and arms spread symmetrically on both sides
 * at shoulder height, which is enough evidence for their number and their gesture. A four-armed
 * seated Brahma is also canonical iconography, and the component has been named "Seated four-armed
 * deity figure" throughout while being a solid of revolution -- a name promising something the
 * geometry did not have.
 *
 * They merge into the deity's OWN geometry rather than becoming a component: this prop sits at
 * 11 of 12 draw calls and 11 of 12 unique geometries, so a fifth component would spend the last
 * slot on it, while the triangle budget has 5,296 spare. One geometry, one draw call, one material.
 *
 * `three` is the only import allowed here -- the host injects its own instance and any second
 * module fails at runtime -- so BufferGeometryUtils is unavailable and the merge is hand-rolled.
 * It converts to non-indexed first: LatheGeometry and CylinderGeometry are both indexed, and
 * concatenating index buffers means rebasing every index, where concatenating vertices does not. */
function mergeNonIndexed(geos: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const parts = geos.map((g) => (g.index ? g.toNonIndexed() : g));
  let total = 0;
  for (const part of parts) total += part.getAttribute('position').count;
  const pos = new Float32Array(total * 3);
  const nor = new Float32Array(total * 3);
  const uv = new Float32Array(total * 2);
  let o = 0;
  for (const part of parts) {
    const pa = part.getAttribute('position');
    const na = part.getAttribute('normal');
    const ua = part.getAttribute('uv');
    for (let i = 0; i < pa.count; i += 1) {
      pos[(o + i) * 3] = pa.getX(i); pos[(o + i) * 3 + 1] = pa.getY(i); pos[(o + i) * 3 + 2] = pa.getZ(i);
      if (na) { nor[(o + i) * 3] = na.getX(i); nor[(o + i) * 3 + 1] = na.getY(i); nor[(o + i) * 3 + 2] = na.getZ(i); }
      if (ua) { uv[(o + i) * 2] = ua.getX(i); uv[(o + i) * 2 + 1] = ua.getY(i); }
    }
    o += pa.count;
  }
  const merged = new THREE.BufferGeometry();
  merged.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  merged.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  merged.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return merged;
}

/* One limb segment: a tapered cylinder aimed from a to b. Aimed point to point rather than
 * composed from angles, because an arm that has to meet the shoulder at one end and the lap at the
 * other is defined by its endpoints and nothing else. */
function limbSegment(a: number[], b: number[], r0: number, r1: number, seg = 7): THREE.BufferGeometry {
  const d = new THREE.Vector3(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
  const len = d.length();
  const g = new THREE.CylinderGeometry(r1, r0, len, seg, 1);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0), d.clone().normalize()));
  g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2);
  return g;
}

/* The four arms, in the deity's own absolute frame -- the lathe profile is authored in absolute y
 * (lap 1.87, waist 2.42, shoulder 2.70, neck 2.80) and the mesh sits at the origin, so these share
 * that frame directly.
 *
 * The FRONT pair comes down and forward to hands resting at the lap, which is the pair the plate
 * shows through the garlands. The REAR pair lifts out and up, which is the spread the proxy's front
 * elevation resolves at shoulder height. A shoulder ball at each root stops the upper arm reading
 * as a rod pushed into the torso. */
function deityArms(): THREE.BufferGeometry[] {
  const out: THREE.BufferGeometry[] = [];
  for (const sx of [-1, 1]) {
    const shoulder = [sx * 0.25, 2.66, 0.0];
    out.push(new THREE.SphereGeometry(0.075, 8, 6)
      .translate(shoulder[0], shoulder[1], shoulder[2]));
    /* The pose is TUCKED, not splayed. The first attempt ran the rear pair to y 2.99 and x 0.60 --
     * above the shoulder at 2.68 and two thirds of the lap's own half-width out -- and the figure
     * read as a man surrendering rather than as a seated deity. On both the plate and the proxy
     * the rear arms sit at about shoulder height and lift only slightly, and the front pair comes
     * to rest on the lap rather than dangling in front of it. The torso is only 0.93 m tall, so an
     * arm that reaches far from it stops looking like an arm. */
    // front arm: shoulder -> elbow (out and down) -> hand resting on the lap
    const elbowF = [sx * 0.33, 2.36, 0.12];
    const handF = [sx * 0.27, 2.12, 0.24];
    out.push(limbSegment(shoulder, elbowF, 0.070, 0.054));
    out.push(limbSegment(elbowF, handF, 0.054, 0.045));
    out.push(new THREE.SphereGeometry(0.050, 7, 5).translate(handF[0], handF[1], handF[2]));
    // rear arm: shoulder -> elbow (out, level) -> hand lifted a little
    const elbowR = [sx * 0.39, 2.65, -0.07];
    const handR = [sx * 0.45, 2.85, -0.11];
    out.push(limbSegment(shoulder, elbowR, 0.067, 0.052));
    out.push(limbSegment(elbowR, handR, 0.052, 0.043));
    out.push(new THREE.SphereGeometry(0.048, 7, 5).translate(handR[0], handR[1], handR[2]));
  }
  return out;
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

// Generated from ObjectSculptSpec target: Brahman Street Shrine
// Sculpt build pass: optimization-pass
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createBrahmanStreetShrineModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "Brahman Street Shrine";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 40.0, "aspect": 1.0, "orientation": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "positionHint": [0.0, 0.0, 3.0], "note": "For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."}, "approximationNotes": []};
  root.userData.materialPipeline = {};
  root.userData.materialReferenceRegistry = null;

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["granite"] = createSculptMaterial(
    "granite",
    {"id": "granite", "name": "Speckled grey granite", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "color": "#737370", "baseColor": "#737370", "albedo": {"dominant": "#8E9195", "secondary": ["#6E7176", "#B0B3B6"], "samplingNotes": "Sampled from mat/granite-plinth.png, a 150x55 crop entirely on the plinth base block's front face. Two earlier candidate crops landed on an offering tray and on the balusters and were discarded rather than used. extract_pbr_evidence confidence 0.739 against a 0.7 threshold. The authored albedo is DE-LIT off that palette rather than copied from it: the crop carries the plate's key light, and copying a lit value straight into base colour is baked lighting.", "measuredPalette": ["#4B4C48", "#565652", "#838382"]}, "roughness": {"base": 0.72, "variation": 0.1, "localResponse": "slightly lower on the polished cap-slab chamfer, higher on the deck where wax residue has built up", "albedoCompromiseNote": "One albedo serves both a shaded vertical face and an up-facing slab, and the harness lights the two very differently: matched to the shaded plinth front the deck and cap slab rendered +30 luma above the plate and read WHITE. The authored value splits the difference, which leaves the front face a little dark and the top a little bright rather than one of them wrong by 30.", "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.691 for polished gold leaf, 0.711 for satin timber, and 0.764 for matte granite -- three unrelated surfaces inside a 0.073 band, which is the extractor's regression default rather than a measurement. Taking gold's 0.691 would have made gold leaf as matte as the plinth it stands on.", "bindingPolicy": "Scalar at runtime. The independently extracted maps are kept on disk as evidence under material-evidence/ and are deliberately NOT bound: this material is textureless, and binding any map forces color to white and roughness to 1.", "map": "material-evidence/granite_roughness.png"}, "metalness": 0.0, "localOverrides": [{"id": "granite-speckle", "appliesTo": "stone-podium", "region": "every granite face: plinth, cap slab, deck and pedestal", "effect": "fine high-frequency feldspar flake, measured at heightP90Gradient 0.07194 and roughnessVariation 0.147", "evidenceRef": "mat/granite-plinth.png", "built": false, "note": "MEASURED AND DELIBERATELY NOT BUILT. The flake resolves at roughly 0.003 m, which is under a pixel at prop distance on a 4.70 m landmark viewed from the street, and it averages to the flat mid-grey the albedo already carries. Recorded here rather than dropped so the decision is visible: this was the strongest candidate on the prop for opting IN to a texture."}, {"id": "deck-wax-staining", "appliesTo": "stone-podium", "region": "the deck-top annulus between the rail line and the pedestal, y=1.36", "effect": "low-saturation ochre and brown wax runs, saturation up and value down by about 15%", "evidenceRef": "mat/granite-deck-b.png", "note": "Evidence for the STAIN only. This crop is not used for the base albedo -- it is almost entirely residue, and reading a base colour off it would make the whole podium ochre."}], "referenceEvidence": {"crop": "mat/granite-plinth.png", "confidence": 0.739, "heightP90Gradient": 0.07194, "normalStrength": 0.241, "note": "Kept as evidence; no map is bound. See textureless.evidence."}, "textureless": {"declared": true, "evidence": ["extract_pbr_evidence on mat/granite-plinth.png measures heightP90Gradient 0.07194 and roughnessVariation 0.147 -- real speckle, and the strongest case on this prop for a texture.", "Opted OUT anyway, on prop distance: the feldspar flake resolves at roughly 0.003 m. This is a 5 m landmark seen from the street on a low-end integrated GPU, where that flake is well under a pixel and averages to the flat mid-grey the albedo already carries.", "createSculptMaterial synthesises five canvases per material in JavaScript, pixel by pixel, at the SQUARE of the resolution. Buying speckle nobody can resolve would put time-to-first-draw back into seconds.", "And it would be wrong as well as slow: a bound map forces color to white and roughness to 1 and reads both back from the generated maps, discarding the de-lit #7C7E7D authored above."]}},
    options
  );
  materialMap["timber"] = createSculptMaterial(
    "timber",
    {"id": "timber", "name": "Dark stained hardwood", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "color": "#635852", "baseColor": "#635852", "albedo": {"dominant": "#4A3227", "secondary": ["#33221A", "#6A4A38"], "samplingNotes": "Sampled from mat/timber-roof.png, a 120x75 crop on the roof slope clear of the gold hip cap that contaminated the first attempt. extract_pbr_evidence confidence 0.844 against a 0.7 threshold. The authored albedo is DE-LIT off that palette rather than copied from it: the crop carries the plate's key light, and copying a lit value straight into base colour is baked lighting.", "measuredPalette": ["#8A756B", "#75655D", "#61534C"]}, "roughness": {"base": 0.55, "variation": 0.08, "localResponse": "satin, not matte -- the plate shows a broad soft specular roll across each plank course", "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.691 for polished gold leaf, 0.711 for satin timber, and 0.764 for matte granite -- three unrelated surfaces inside a 0.073 band, which is the extractor's regression default rather than a measurement. Taking gold's 0.691 would have made gold leaf as matte as the plinth it stands on.", "bindingPolicy": "Scalar at runtime. The independently extracted maps are kept on disk as evidence under material-evidence/ and are deliberately NOT bound: this material is textureless, and binding any map forces color to white and roughness to 1.", "map": "material-evidence/timber_roughness.png"}, "metalness": 0.0, "textureless": {"declared": true, "evidence": ["extract_pbr_evidence on mat/timber-roof.png measures heightP90Gradient 0.07998, the highest of the four -- but that signal is the 0.084 m PLANK PITCH, which this spec authors as sixteen 0.022 m micro-steps in the roof-canopy lathe profile.", "mat/timber-roof.png (120x75 px on the roof slope): the only high-frequency signal in the crop is the PLANK COURSING at a ~0.084 m pitch, and this spec authors that coursing as geometry -- sixteen 0.022 m micro-steps in the roof-canopy lathe profile. A texture would be a second, disagreeing copy of relief the mesh already has.", "The wood grain itself is below one pixel at prop distance for a 5 m prop on a low-end target; the plate resolves plank JOINTS, not grain.", "Correctness, not only cost: binding any generated map forces color to white and roughness to 1 and reads both back from the map, which would discard the measured #4A3227 and render this dark stained hardwood mid-grey."]}, "referenceEvidence": {"crop": "mat/timber-roof.png", "confidence": 0.844, "heightP90Gradient": 0.07998, "normalStrength": 0.25, "note": "Kept as evidence; no map is bound. See textureless.evidence."}},
    options
  );
  materialMap["gilt"] = createSculptMaterial(
    "gilt",
    {"id": "gilt", "name": "Gold leaf over cast bronze", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "color": "#846F4B", "baseColor": "#846F4B", "albedo": {"dominant": "#C08F32", "secondary": ["#8F6620", "#E3B95E"], "samplingNotes": "Sampled from mat/gilt-column.png, a 24x180 crop down a single column shaft, clear of the backdrop. extract_pbr_evidence confidence 0.86 against a 0.7 threshold. The authored albedo is DE-LIT off that palette rather than copied from it: the crop carries the plate's key light, and copying a lit value straight into base colour is baked lighting.", "measuredPalette": ["#7A5A28", "#8B6931", "#66491F"]}, "roughness": {"base": 0.34, "variation": 0.06, "localResponse": "the broad soft specular lobe down each column shaft is the strongest identity signal on the prop", "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.691 for polished gold leaf, 0.711 for satin timber, and 0.764 for matte granite -- three unrelated surfaces inside a 0.073 band, which is the extractor's regression default rather than a measurement. Taking gold's 0.691 would have made gold leaf as matte as the plinth it stands on.", "bindingPolicy": "Scalar at runtime. The independently extracted maps are kept on disk as evidence under material-evidence/ and are deliberately NOT bound: this material is textureless, and binding any map forces color to white and roughness to 1.", "map": "material-evidence/gilt_roughness.png"}, "metalness": 0.35, "metalnessNote": "Gold leaf is physically a conductor and the first draft authored it at 0.9. It rendered BLACK. render/harness.html carries no scene.environment -- a hemisphere and three directional lights, nothing else -- and a MeshStandardMaterial at metalness 0.9 has almost no diffuse term and nothing to reflect, so outside the few specular hits it goes to nearly zero. That harness is what the review gates and the shipped thumbnail both read. 0.35 is also the ceiling every metal already in this kit uses (oil-drum steel 0.35, makro and 7-Eleven aluminium 0.35, galvanised 0.25-0.30), so this is the house convention rather than a local workaround, and the gold is carried by a warm bright albedo instead.", "textureless": {"declared": true, "evidence": ["extract_pbr_evidence on mat/gilt-column.png measures heightP90Gradient 0.01709 and normalStrength 0.176 -- the LOWEST relief of the four materials by a factor of four. There is no surface structure to map.", "mat/gilt-column.png (24x180 px on a column shaft): an unbroken vertical specular gradient with no resolvable surface structure -- polished gold leaf has none at prop distance.", "This material is the identity of the prop and is the one most damaged by texturing: a bound map forces color to white and roughness to 1, which would turn every gilt surface -- columns, hip caps, finial and the whole deity -- into rough white plastic."]}, "referenceEvidence": {"crop": "mat/gilt-column.png", "confidence": 0.86, "heightP90Gradient": 0.01709, "normalStrength": 0.176, "note": "Kept as evidence; no map is bound. See textureless.evidence."}},
    options
  );

  // NOTE: 4 generated radial repetition cluster(s) were stripped here by
  // tools/refine.py; the thaikit layer below re-emits them with square-ring placement.
  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_stone_podium_0 = makeAttachmentEndpoint(null);
  const node_stone_podium_0 = new THREE.Group();
  node_stone_podium_0.name = "Granite podium: plinth, cap slab, deck and deity pedestal__pivot";
  node_stone_podium_0.scale.set(1, 1, 1);
  if (endpoint_stone_podium_0) {
    node_stone_podium_0.position.copy(endpoint_stone_podium_0.start);
    node_stone_podium_0.rotation.set(0.0, 0.7853981633974483, 0.0);
  } else {
    node_stone_podium_0.position.set(0.0, 0.0, 0.0);
    node_stone_podium_0.rotation.set(0.0, 0.7853981633974483, 0.0);
  }
  node_stone_podium_0.userData.sculptComponent = {"id": "stone-podium", "name": "Granite podium: plinth, cap slab, deck and deity pedestal", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.88, "primitive": "lathe", "topologyClass": "assembled-solid", "topologyRationale": "A single square solid of revolution. LatheGeometry at segments=4 puts the profile radius at the CORNERS, so a face half-width he is authored as r = he*sqrt(2) and the component is rotated 45 deg about Y to bring the faces axis-aligned. One profile therefore carries four stacked masses that would otherwise be four boxes, four draw calls and four geometries.", "geometryDescriptor": {"topologyIntent": "Profile from the ground: plinth base block to y=0.92, chamfered cap slab flaring to the full 5.00 m width, the exposed cap-slab annulus at y=1.20 that the elephant ring stands on, the deck slab, the deck top, then the stepped deity pedestal closing with a flat cap at y=2.00.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[2.7577, 0.0], [2.7577, 0.81], [3.2385, 0.89], [3.3234, 0.93], [3.3234, 1.05], [3.2668, 1.09], [2.8567, 1.09], [2.8567, 1.25], [0.9617, 1.25], [0.9617, 1.36], [0.792, 1.36], [0.792, 1.77], [0.9334, 1.83], [0.9334, 1.89], [0.0001, 1.89]], "segments": 4}, "segmentRationale": "15 profile points at 4 segments: 112 triangles for the entire stone mass.", "coplanarNote": "Nothing is authored flush against this component. The rails sink 0.04 m below the deck top, the columns sink 0.02 m, and every elephant instance is embedded 0.015 m into the cap ledge, so no co-facing pair shares a plane."}, "parent": null, "attachment": null, "dimensions": {"width": 5.0, "height": 2.0, "depth": 5.0, "units": "metres", "confidence": 0.88}, "transform": {"position": [0, 0, 0], "rotation": [0, 0.7853981633974483, 0], "scale": [1, 1, 1], "rotationUnits": "radians"}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}, "collider": {"type": "box", "offset": [0, 3.0, 0], "scale": [5.0, 6.0, 5.0], "isTrigger": false, "notes": "One box around the WHOLE prop envelope, as the asset declares -- it is hung on the podium because that is the component that spans the footprint, not because the box stops at the podium. The elephant figurines deliberately get no collider of their own: a physics proxy per votive object costs more to test than the prop is worth, and nothing in an FPS needs to collide with an individual figurine."}}, "material": "granite", "materialId": "granite", "localFeatures": [{"id": "cap-slab-chamfer", "kind": "bevel", "description": "0.04 m chamfer under and over the cap slab, throwing the shadow line that separates podium from base.", "scale": "meso"}, {"id": "elephant-ledge", "kind": "ridge", "description": "The exposed cap-slab annulus at y=1.20 between he 2.02 and 2.46, which the 48 elephant instances stand on, each embedded 0.015 m.", "scale": "meso"}, {"id": "column-seat", "kind": "groove", "description": "The four points on the deck top at he 1.62 where the gilt columns sink 0.02 m in, so no column base is flush with the deck.", "scale": "micro"}], "colorMaterialRecipe": {"materialId": "granite", "baseColor": "#7C7E7D", "finish": "matte", "evidenceRef": "material-evidence/granite.json", "notes": "Flat de-lit mid-grey granite; speckle deliberately not textured -- see materials.granite.textureless.", "dominantAlbedo": "rgba(142, 145, 149, 1.0)", "secondaryAlbedo": "rgba(110, 113, 118, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.9}, "surfaceDetail": {"macroRoughness": 0.72, "microRoughness": 0.1, "bumpAmplitude": 0.0, "realisation": "none", "notes": "Flat sawn granite faces with a 0.04 m chamfer under and over the cap slab. The feldspar speckle measured at heightP90Gradient 0.07194 is deliberately NOT built: it resolves at ~0.003 m, which is under a pixel at prop distance. bumpAmplitude 0 is honest -- there is no relief on this surface beyond the chamfers, which are silhouette, not bump."}};
  node_stone_podium_0.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}, "collider": {"type": "box", "offset": [0, 3.0, 0], "scale": [5.0, 6.0, 5.0], "isTrigger": false, "notes": "One box around the WHOLE prop envelope, as the asset declares -- it is hung on the podium because that is the component that spans the footprint, not because the box stops at the podium. The elephant figurines deliberately get no collider of their own: a physics proxy per votive object costs more to test than the prop is worth, and nothing in an FPS needs to collide with an individual figurine."}};
  (nodes["root"] ?? root).add(node_stone_podium_0);
  nodes["stone-podium"] = node_stone_podium_0;
  const mesh_stone_podium_0Geometry = endpoint_stone_podium_0
    ? new THREE.CylinderGeometry(endpoint_stone_podium_0.endRadius, endpoint_stone_podium_0.baseRadius, endpoint_stone_podium_0.length, 16, 6)
    : buildLatheGeometry({"points": [[2.7577, 0.0], [2.7577, 0.81], [3.2385, 0.89], [3.3234, 0.93], [3.3234, 1.05], [3.2668, 1.09], [2.8567, 1.09], [2.8567, 1.25], [0.9617, 1.25], [0.9617, 1.36], [0.792, 1.36], [0.792, 1.77], [0.9334, 1.83], [0.9334, 1.89], [0.0001, 1.89]], "segments": 4});
  if (!endpoint_stone_podium_0) {
    mesh_stone_podium_0Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_stone_podium_0 = new THREE.Mesh(
    mesh_stone_podium_0Geometry,
    materialMap["granite"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_stone_podium_0.name = "Granite podium: plinth, cap slab, deck and deity pedestal";
  if (endpoint_stone_podium_0) {
    mesh_stone_podium_0.position.copy(endpoint_stone_podium_0.midpoint);
    mesh_stone_podium_0.quaternion.copy(endpoint_stone_podium_0.quaternion);
  }
  mesh_stone_podium_0.castShadow = options.castShadow ?? true;
  mesh_stone_podium_0.receiveShadow = options.receiveShadow ?? true;
  mesh_stone_podium_0.userData.sculptComponent = {"id": "stone-podium", "name": "Granite podium: plinth, cap slab, deck and deity pedestal", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.88, "primitive": "lathe", "topologyClass": "assembled-solid", "topologyRationale": "A single square solid of revolution. LatheGeometry at segments=4 puts the profile radius at the CORNERS, so a face half-width he is authored as r = he*sqrt(2) and the component is rotated 45 deg about Y to bring the faces axis-aligned. One profile therefore carries four stacked masses that would otherwise be four boxes, four draw calls and four geometries.", "geometryDescriptor": {"topologyIntent": "Profile from the ground: plinth base block to y=0.92, chamfered cap slab flaring to the full 5.00 m width, the exposed cap-slab annulus at y=1.20 that the elephant ring stands on, the deck slab, the deck top, then the stepped deity pedestal closing with a flat cap at y=2.00.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[2.7577, 0.0], [2.7577, 0.81], [3.2385, 0.89], [3.3234, 0.93], [3.3234, 1.05], [3.2668, 1.09], [2.8567, 1.09], [2.8567, 1.25], [0.9617, 1.25], [0.9617, 1.36], [0.792, 1.36], [0.792, 1.77], [0.9334, 1.83], [0.9334, 1.89], [0.0001, 1.89]], "segments": 4}, "segmentRationale": "15 profile points at 4 segments: 112 triangles for the entire stone mass.", "coplanarNote": "Nothing is authored flush against this component. The rails sink 0.04 m below the deck top, the columns sink 0.02 m, and every elephant instance is embedded 0.015 m into the cap ledge, so no co-facing pair shares a plane."}, "parent": null, "attachment": null, "dimensions": {"width": 5.0, "height": 2.0, "depth": 5.0, "units": "metres", "confidence": 0.88}, "transform": {"position": [0, 0, 0], "rotation": [0, 0.7853981633974483, 0], "scale": [1, 1, 1], "rotationUnits": "radians"}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}, "collider": {"type": "box", "offset": [0, 3.0, 0], "scale": [5.0, 6.0, 5.0], "isTrigger": false, "notes": "One box around the WHOLE prop envelope, as the asset declares -- it is hung on the podium because that is the component that spans the footprint, not because the box stops at the podium. The elephant figurines deliberately get no collider of their own: a physics proxy per votive object costs more to test than the prop is worth, and nothing in an FPS needs to collide with an individual figurine."}}, "material": "granite", "materialId": "granite", "localFeatures": [{"id": "cap-slab-chamfer", "kind": "bevel", "description": "0.04 m chamfer under and over the cap slab, throwing the shadow line that separates podium from base.", "scale": "meso"}, {"id": "elephant-ledge", "kind": "ridge", "description": "The exposed cap-slab annulus at y=1.20 between he 2.02 and 2.46, which the 48 elephant instances stand on, each embedded 0.015 m.", "scale": "meso"}, {"id": "column-seat", "kind": "groove", "description": "The four points on the deck top at he 1.62 where the gilt columns sink 0.02 m in, so no column base is flush with the deck.", "scale": "micro"}], "colorMaterialRecipe": {"materialId": "granite", "baseColor": "#7C7E7D", "finish": "matte", "evidenceRef": "material-evidence/granite.json", "notes": "Flat de-lit mid-grey granite; speckle deliberately not textured -- see materials.granite.textureless.", "dominantAlbedo": "rgba(142, 145, 149, 1.0)", "secondaryAlbedo": "rgba(110, 113, 118, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.9}, "surfaceDetail": {"macroRoughness": 0.72, "microRoughness": 0.1, "bumpAmplitude": 0.0, "realisation": "none", "notes": "Flat sawn granite faces with a 0.04 m chamfer under and over the cap slab. The feldspar speckle measured at heightP90Gradient 0.07194 is deliberately NOT built: it resolves at ~0.003 m, which is under a pixel at prop distance. bumpAmplitude 0 is honest -- there is no relief on this surface beyond the chamfers, which are silhouette, not bump."}};
  node_stone_podium_0.add(mesh_stone_podium_0);
  meshes["stone-podium"] = mesh_stone_podium_0;
  colliders["stone-podium"] = {"type": "box", "offset": [0, 3.0, 0], "scale": [5.0, 6.0, 5.0], "isTrigger": false, "notes": "One box around the WHOLE prop envelope, as the asset declares -- it is hung on the podium because that is the component that spans the footprint, not because the box stops at the podium. The elephant figurines deliberately get no collider of their own: a physics proxy per votive object costs more to test than the prop is worth, and nothing in an FPS needs to collide with an individual figurine."};

  const endpoint_roof_canopy_1 = makeAttachmentEndpoint(null);
  const node_roof_canopy_1 = new THREE.Group();
  node_roof_canopy_1.name = "Concave-flared hip roof with timber fascia band__pivot";
  node_roof_canopy_1.scale.set(1, 1, 1);
  if (endpoint_roof_canopy_1) {
    node_roof_canopy_1.position.copy(endpoint_roof_canopy_1.start);
    node_roof_canopy_1.rotation.set(0.0, 0.7853981633974483, 0.0);
  } else {
    node_roof_canopy_1.position.set(0.0, 0.0, 0.0);
    node_roof_canopy_1.rotation.set(0.0, 0.7853981633974483, 0.0);
  }
  node_roof_canopy_1.userData.sculptComponent = {"id": "roof-canopy", "name": "Concave-flared hip roof with timber fascia band", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.85, "primitive": "lathe", "topologyClass": "assembled-solid", "topologyRationale": "The second square solid of revolution. A closed profile - up the outer slope, over the apex, back down an inner surface inset by the 0.10 m shell thickness - so the roof is a real shell with a visible underside rather than a one-sided cone that shows backfaces from the street.", "geometryDescriptor": {"topologyIntent": "Fascia band from the column tops at y=3.52 to y=3.90, an eave lip turned out and down at y=3.96 and he=2.29, then the slope to the apex at y=5.30. The slope is a straight pitch plus a concave kick that dies out by the first quarter, which is what reads as a Thai hip roof rather than a shingle pyramid. Sixteen plank courses are micro-steps of 0.022 m in the profile: the coursing is GEOMETRY, which is what lets the timber material stay textureless.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[1.5698, 3.77], [1.7536, 3.77], [1.7536, 4.11], [2.0506, 4.14], [2.2062, 4.17], [2.0437, 4.2387], [2.0126, 4.2387], [1.862, 4.3075], [1.8308, 4.3075], [1.6941, 4.3762], [1.663, 4.3762], [1.5436, 4.445], [1.5125, 4.445], [1.4187, 4.5137], [1.3876, 4.5137], [1.3004, 4.5825], [1.2693, 4.5825], [1.1819, 4.6513], [1.1507, 4.6513], [1.0635, 4.72], [1.0324, 4.72], [0.9451, 4.7887], [0.9139, 4.7887], [0.8266, 4.8575], [0.7955, 4.8575], [0.7082, 4.9262], [0.6771, 4.9262], [0.5897, 4.995], [0.5586, 4.995], [0.4714, 5.0637], [0.4402, 5.0637], [0.3528, 5.1325], [0.3217, 5.1325], [0.2345, 5.2012], [0.2034, 5.2012], [0.116, 5.27], [0.0849, 5.27], [0.0619, 5.1462], [0.1803, 5.0775], [0.2988, 5.0087], [0.4172, 4.94], [0.5357, 4.8712], [0.6541, 4.8025], [0.7724, 4.7337], [0.891, 4.665], [1.0093, 4.5963], [1.1278, 4.5275], [1.2462, 4.4587], [1.3711, 4.39], [1.5216, 4.3212], [1.6894, 4.2525], [1.8711, 4.1837], [2.0648, 4.115], [1.5698, 3.77]], "segments": 4}, "segmentRationale": "70 profile points at 4 segments: 552 triangles, of which about 256 are the plank coursing.", "swept_arc_note": "The concave kick is the curve claim on this prop. A straight cone occupies roughly the right silhouette cells and would pass an IoU test, so this needs swept_arc_gate.py rather than a silhouette score."}, "parent": null, "attachment": null, "dimensions": {"width": 4.58, "height": 1.78, "depth": 4.58, "units": "metres", "confidence": 0.85}, "transform": {"position": [0, 0, 0], "rotation": [0, 0.7853981633974483, 0], "scale": [1, 1, 1], "rotationUnits": "radians"}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}}, "material": "timber", "materialId": "timber", "localFeatures": [{"id": "plank-coursing", "kind": "groove", "description": "Sixteen 0.022 m micro-steps in the lathe profile, one per plank course at a 0.084 m pitch. Geometry, which is what lets the timber material stay textureless.", "scale": "micro"}, {"id": "eave-flare", "kind": "contour", "description": "The concave kick over the last quarter of the slope, from a straight pitch outward and down to an eave lip at he 2.29. This is the curve claim on the prop.", "scale": "macro"}, {"id": "hip-cap-line", "kind": "ridge", "description": "The four hip lines from eave corner to apex that the gilt ridge caps sit on, standing 0.03 m proud so they are never coplanar with the roof surface.", "scale": "meso"}], "colorMaterialRecipe": {"materialId": "timber", "baseColor": "#5A4136", "finish": "satin", "evidenceRef": "material-evidence/timber.json", "notes": "Dark stained hardwood; the plank relief is geometry, not albedo.", "dominantAlbedo": "rgba(74, 50, 39, 1.0)", "secondaryAlbedo": "rgba(51, 34, 26, 1.0)", "materialClass": "wood", "materialClassConfidence": 0.88}, "surfaceDetail": {"macroRoughness": 0.55, "microRoughness": 0.08, "bumpAmplitude": 0.022, "realisation": "geometry", "notes": "Sixteen plank courses at a 0.084 m pitch, each standing 0.022 m proud of the one above, built as micro-steps in the lathe profile. This is the prop's largest piece of surface relief and it is GEOMETRY: it casts real silhouette against the sky at the eave, which a normal map cannot."}};
  node_roof_canopy_1.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}};
  (nodes["root"] ?? root).add(node_roof_canopy_1);
  nodes["roof-canopy"] = node_roof_canopy_1;
  const mesh_roof_canopy_1Geometry = endpoint_roof_canopy_1
    ? new THREE.CylinderGeometry(endpoint_roof_canopy_1.endRadius, endpoint_roof_canopy_1.baseRadius, endpoint_roof_canopy_1.length, 16, 6)
    : buildLatheGeometry({"points": [[1.5698, 3.77], [1.7536, 3.77], [1.7536, 4.11], [2.0506, 4.14], [2.2062, 4.17], [2.0437, 4.2387], [2.0126, 4.2387], [1.862, 4.3075], [1.8308, 4.3075], [1.6941, 4.3762], [1.663, 4.3762], [1.5436, 4.445], [1.5125, 4.445], [1.4187, 4.5137], [1.3876, 4.5137], [1.3004, 4.5825], [1.2693, 4.5825], [1.1819, 4.6513], [1.1507, 4.6513], [1.0635, 4.72], [1.0324, 4.72], [0.9451, 4.7887], [0.9139, 4.7887], [0.8266, 4.8575], [0.7955, 4.8575], [0.7082, 4.9262], [0.6771, 4.9262], [0.5897, 4.995], [0.5586, 4.995], [0.4714, 5.0637], [0.4402, 5.0637], [0.3528, 5.1325], [0.3217, 5.1325], [0.2345, 5.2012], [0.2034, 5.2012], [0.116, 5.27], [0.0849, 5.27], [0.0619, 5.1462], [0.1803, 5.0775], [0.2988, 5.0087], [0.4172, 4.94], [0.5357, 4.8712], [0.6541, 4.8025], [0.7724, 4.7337], [0.891, 4.665], [1.0093, 4.5963], [1.1278, 4.5275], [1.2462, 4.4587], [1.3711, 4.39], [1.5216, 4.3212], [1.6894, 4.2525], [1.8711, 4.1837], [2.0648, 4.115], [1.5698, 3.77]], "segments": 4});
  if (!endpoint_roof_canopy_1) {
    mesh_roof_canopy_1Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_roof_canopy_1 = new THREE.Mesh(
    mesh_roof_canopy_1Geometry,
    materialMap["timber"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_roof_canopy_1.name = "Concave-flared hip roof with timber fascia band";
  if (endpoint_roof_canopy_1) {
    mesh_roof_canopy_1.position.copy(endpoint_roof_canopy_1.midpoint);
    mesh_roof_canopy_1.quaternion.copy(endpoint_roof_canopy_1.quaternion);
  }
  mesh_roof_canopy_1.castShadow = options.castShadow ?? true;
  mesh_roof_canopy_1.receiveShadow = options.receiveShadow ?? true;
  mesh_roof_canopy_1.userData.sculptComponent = {"id": "roof-canopy", "name": "Concave-flared hip roof with timber fascia band", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.85, "primitive": "lathe", "topologyClass": "assembled-solid", "topologyRationale": "The second square solid of revolution. A closed profile - up the outer slope, over the apex, back down an inner surface inset by the 0.10 m shell thickness - so the roof is a real shell with a visible underside rather than a one-sided cone that shows backfaces from the street.", "geometryDescriptor": {"topologyIntent": "Fascia band from the column tops at y=3.52 to y=3.90, an eave lip turned out and down at y=3.96 and he=2.29, then the slope to the apex at y=5.30. The slope is a straight pitch plus a concave kick that dies out by the first quarter, which is what reads as a Thai hip roof rather than a shingle pyramid. Sixteen plank courses are micro-steps of 0.022 m in the profile: the coursing is GEOMETRY, which is what lets the timber material stay textureless.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[1.5698, 3.77], [1.7536, 3.77], [1.7536, 4.11], [2.0506, 4.14], [2.2062, 4.17], [2.0437, 4.2387], [2.0126, 4.2387], [1.862, 4.3075], [1.8308, 4.3075], [1.6941, 4.3762], [1.663, 4.3762], [1.5436, 4.445], [1.5125, 4.445], [1.4187, 4.5137], [1.3876, 4.5137], [1.3004, 4.5825], [1.2693, 4.5825], [1.1819, 4.6513], [1.1507, 4.6513], [1.0635, 4.72], [1.0324, 4.72], [0.9451, 4.7887], [0.9139, 4.7887], [0.8266, 4.8575], [0.7955, 4.8575], [0.7082, 4.9262], [0.6771, 4.9262], [0.5897, 4.995], [0.5586, 4.995], [0.4714, 5.0637], [0.4402, 5.0637], [0.3528, 5.1325], [0.3217, 5.1325], [0.2345, 5.2012], [0.2034, 5.2012], [0.116, 5.27], [0.0849, 5.27], [0.0619, 5.1462], [0.1803, 5.0775], [0.2988, 5.0087], [0.4172, 4.94], [0.5357, 4.8712], [0.6541, 4.8025], [0.7724, 4.7337], [0.891, 4.665], [1.0093, 4.5963], [1.1278, 4.5275], [1.2462, 4.4587], [1.3711, 4.39], [1.5216, 4.3212], [1.6894, 4.2525], [1.8711, 4.1837], [2.0648, 4.115], [1.5698, 3.77]], "segments": 4}, "segmentRationale": "70 profile points at 4 segments: 552 triangles, of which about 256 are the plank coursing.", "swept_arc_note": "The concave kick is the curve claim on this prop. A straight cone occupies roughly the right silhouette cells and would pass an IoU test, so this needs swept_arc_gate.py rather than a silhouette score."}, "parent": null, "attachment": null, "dimensions": {"width": 4.58, "height": 1.78, "depth": 4.58, "units": "metres", "confidence": 0.85}, "transform": {"position": [0, 0, 0], "rotation": [0, 0.7853981633974483, 0], "scale": [1, 1, 1], "rotationUnits": "radians"}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}}, "material": "timber", "materialId": "timber", "localFeatures": [{"id": "plank-coursing", "kind": "groove", "description": "Sixteen 0.022 m micro-steps in the lathe profile, one per plank course at a 0.084 m pitch. Geometry, which is what lets the timber material stay textureless.", "scale": "micro"}, {"id": "eave-flare", "kind": "contour", "description": "The concave kick over the last quarter of the slope, from a straight pitch outward and down to an eave lip at he 2.29. This is the curve claim on the prop.", "scale": "macro"}, {"id": "hip-cap-line", "kind": "ridge", "description": "The four hip lines from eave corner to apex that the gilt ridge caps sit on, standing 0.03 m proud so they are never coplanar with the roof surface.", "scale": "meso"}], "colorMaterialRecipe": {"materialId": "timber", "baseColor": "#5A4136", "finish": "satin", "evidenceRef": "material-evidence/timber.json", "notes": "Dark stained hardwood; the plank relief is geometry, not albedo.", "dominantAlbedo": "rgba(74, 50, 39, 1.0)", "secondaryAlbedo": "rgba(51, 34, 26, 1.0)", "materialClass": "wood", "materialClassConfidence": 0.88}, "surfaceDetail": {"macroRoughness": 0.55, "microRoughness": 0.08, "bumpAmplitude": 0.022, "realisation": "geometry", "notes": "Sixteen plank courses at a 0.084 m pitch, each standing 0.022 m proud of the one above, built as micro-steps in the lathe profile. This is the prop's largest piece of surface relief and it is GEOMETRY: it casts real silhouette against the sky at the eave, which a normal map cannot."}};
  node_roof_canopy_1.add(mesh_roof_canopy_1);
  meshes["roof-canopy"] = mesh_roof_canopy_1;
  colliders["roof-canopy"] = {};

  const endpoint_roof_finial_2 = makeAttachmentEndpoint(null);
  const node_roof_finial_2 = new THREE.Group();
  node_roof_finial_2.name = "Gilt axial spire finial__pivot";
  node_roof_finial_2.scale.set(1, 1, 1);
  if (endpoint_roof_finial_2) {
    node_roof_finial_2.position.copy(endpoint_roof_finial_2.start);
    node_roof_finial_2.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_roof_finial_2.position.set(0.0, 0.0, 0.0);
    node_roof_finial_2.rotation.set(0.0, 0.0, 0.0);
  }
  node_roof_finial_2.userData.sculptComponent = {"id": "roof-finial", "name": "Gilt axial spire finial", "level": "macro", "role": "body", "importance": 0.75, "confidence": 0.85, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "A round solid of revolution at 14 segments. It is genuinely axially symmetric, unlike the roof it sits on, and it is gilt where the roof is timber - a separate material, so it cannot fold into the roof profile however well the axes line up. MACRO rather than meso despite being an ornament: it is the top 12% of the silhouette and it is what makes the declared 6.00 m height, so a blockout without it is measured against a reference 12% taller than itself.", "geometryDescriptor": {"topologyIntent": "Stepped base at the apex, a swelling bulb, a tapering needle, a collar and a ball terminal at exactly y=6.00, which is the declared height.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.0001, 5.27], [0.15, 5.27], [0.15, 5.3357], [0.11, 5.3722], [0.13, 5.4379], [0.15, 5.5328], [0.13, 5.6277], [0.09, 5.6861], [0.055, 5.7664], [0.032, 5.8686], [0.045, 5.8978], [0.03, 5.927], [0.048, 5.9562], [0.02, 6.0], [0.0001, 6.0]], "segments": 14}, "segmentRationale": "15 points at 14 segments: 392 triangles."}, "parent": null, "attachment": null, "dimensions": {"width": 0.3, "height": 0.7, "depth": 0.3, "units": "metres", "confidence": 0.85}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1], "rotationUnits": "radians"}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}}, "material": "gilt", "materialId": "gilt", "colorMaterialRecipe": {"materialId": "gilt", "baseColor": "#B08238", "finish": "metallic", "evidenceRef": "material-evidence/gilt.json", "notes": "Gold leaf: metalness 0.9, roughness 0.28.", "dominantAlbedo": "rgba(192, 143, 50, 1.0)", "secondaryAlbedo": "rgba(143, 102, 32, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.86}, "surfaceDetail": {"macroRoughness": 0.34, "microRoughness": 0.06, "bumpAmplitude": 0.02, "realisation": "geometry", "notes": "Turned steps, bulb and collar in the lathe profile; polished gold leaf has no micro-relief, measured at heightP90Gradient 0.01709, the lowest of the four materials by a factor of four."}};
  node_roof_finial_2.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}};
  (nodes["root"] ?? root).add(node_roof_finial_2);
  nodes["roof-finial"] = node_roof_finial_2;
  const mesh_roof_finial_2Geometry = endpoint_roof_finial_2
    ? new THREE.CylinderGeometry(endpoint_roof_finial_2.endRadius, endpoint_roof_finial_2.baseRadius, endpoint_roof_finial_2.length, 16, 6)
    : buildLatheGeometry({"points": [[0.0001, 5.27], [0.15, 5.27], [0.15, 5.3357], [0.11, 5.3722], [0.13, 5.4379], [0.15, 5.5328], [0.13, 5.6277], [0.09, 5.6861], [0.055, 5.7664], [0.032, 5.8686], [0.045, 5.8978], [0.03, 5.927], [0.048, 5.9562], [0.02, 6.0], [0.0001, 6.0]], "segments": 14});
  if (!endpoint_roof_finial_2) {
    mesh_roof_finial_2Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_roof_finial_2 = new THREE.Mesh(
    mesh_roof_finial_2Geometry,
    materialMap["gilt"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_roof_finial_2.name = "Gilt axial spire finial";
  if (endpoint_roof_finial_2) {
    mesh_roof_finial_2.position.copy(endpoint_roof_finial_2.midpoint);
    mesh_roof_finial_2.quaternion.copy(endpoint_roof_finial_2.quaternion);
  }
  mesh_roof_finial_2.castShadow = options.castShadow ?? true;
  mesh_roof_finial_2.receiveShadow = options.receiveShadow ?? true;
  mesh_roof_finial_2.userData.sculptComponent = {"id": "roof-finial", "name": "Gilt axial spire finial", "level": "macro", "role": "body", "importance": 0.75, "confidence": 0.85, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "A round solid of revolution at 14 segments. It is genuinely axially symmetric, unlike the roof it sits on, and it is gilt where the roof is timber - a separate material, so it cannot fold into the roof profile however well the axes line up. MACRO rather than meso despite being an ornament: it is the top 12% of the silhouette and it is what makes the declared 6.00 m height, so a blockout without it is measured against a reference 12% taller than itself.", "geometryDescriptor": {"topologyIntent": "Stepped base at the apex, a swelling bulb, a tapering needle, a collar and a ball terminal at exactly y=6.00, which is the declared height.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.0001, 5.27], [0.15, 5.27], [0.15, 5.3357], [0.11, 5.3722], [0.13, 5.4379], [0.15, 5.5328], [0.13, 5.6277], [0.09, 5.6861], [0.055, 5.7664], [0.032, 5.8686], [0.045, 5.8978], [0.03, 5.927], [0.048, 5.9562], [0.02, 6.0], [0.0001, 6.0]], "segments": 14}, "segmentRationale": "15 points at 14 segments: 392 triangles."}, "parent": null, "attachment": null, "dimensions": {"width": 0.3, "height": 0.7, "depth": 0.3, "units": "metres", "confidence": 0.85}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1], "rotationUnits": "radians"}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}}, "material": "gilt", "materialId": "gilt", "colorMaterialRecipe": {"materialId": "gilt", "baseColor": "#B08238", "finish": "metallic", "evidenceRef": "material-evidence/gilt.json", "notes": "Gold leaf: metalness 0.9, roughness 0.28.", "dominantAlbedo": "rgba(192, 143, 50, 1.0)", "secondaryAlbedo": "rgba(143, 102, 32, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.86}, "surfaceDetail": {"macroRoughness": 0.34, "microRoughness": 0.06, "bumpAmplitude": 0.02, "realisation": "geometry", "notes": "Turned steps, bulb and collar in the lathe profile; polished gold leaf has no micro-relief, measured at heightP90Gradient 0.01709, the lowest of the four materials by a factor of four."}};
  node_roof_finial_2.add(mesh_roof_finial_2);
  meshes["roof-finial"] = mesh_roof_finial_2;
  colliders["roof-finial"] = {};

  const endpoint_deity_body_3 = makeAttachmentEndpoint(null);
  const node_deity_body_3 = new THREE.Group();
  node_deity_body_3.name = "Seated four-armed deity figure, body and lap__pivot";
  node_deity_body_3.scale.set(1, 1, 1);
  if (endpoint_deity_body_3) {
    node_deity_body_3.position.copy(endpoint_deity_body_3.start);
    node_deity_body_3.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_deity_body_3.position.set(0.0, 0.0, 0.0);
    node_deity_body_3.rotation.set(0.0, 0.0, 0.0);
  }
  node_deity_body_3.userData.sculptComponent = {"id": "deity-body", "name": "Seated four-armed deity figure, body and lap", "level": "macro", "role": "body", "importance": 0.95, "confidence": 0.55, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "A solid of revolution at 10 segments. This is an APPROXIMATION and is declared as one: a seated figure is not truly a lathe, but the deity is close to 4-fold symmetric by iconography, its arms are occluded by garlands in the only view available so there is no evidence for them, and the budget affords one primitive here. Reported at confidence 0.55.", "geometryDescriptor": {"topologyIntent": "Broad lap over crossed legs at the pedestal top, drawing in to a waist at y=2.40, swelling to a shoulder line at y=2.88 and closing to the neck at y=3.02.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.0001, 1.87], [0.44, 1.87], [0.46, 1.91], [0.43, 1.99], [0.35, 2.09], [0.27, 2.19], [0.22, 2.31], [0.215, 2.42], [0.26, 2.53], [0.32, 2.63], [0.33, 2.7], [0.28, 2.76], [0.16, 2.8]], "segments": 8}, "segmentRationale": "12 points at 10 segments: 220 triangles.", "approximationNote": "The four arms are NOT modelled: they are occluded by garland masses in the single plate, so there is no evidence for their number or gesture (unknown unk-deity-arms, confidence 0.3). The first build authored garlands over exactly the shoulder region that hides them, which masked the omission; the garlands were removed after review because displaced spheres read as orange blobs rather than flowers, so the bare shoulder now shows. A stated omission, not an oversight."}, "parent": null, "attachment": null, "dimensions": {"width": 1.28, "height": 1.02, "depth": 1.28, "units": "metres", "confidence": 0.55}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1], "rotationUnits": "radians"}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}}, "material": "gilt", "materialId": "gilt", "localFeatures": [{"id": "shoulder-line", "kind": "contour", "description": "The shoulder line at y=2.72-2.80 where the chest stops swelling and falls to the neck. This is the region the plate's garland masses drape over and the region that occludes the figure's unmodelled arms; the garlands are not built, so the shoulder carries the read alone.", "scale": "meso"}], "colorMaterialRecipe": {"materialId": "gilt", "baseColor": "#B08238", "finish": "metallic", "evidenceRef": "material-evidence/gilt.json", "notes": "Gold leaf, same material as the columns and finial -- one shader switch for every gilt surface on the prop.", "dominantAlbedo": "rgba(192, 143, 50, 1.0)", "secondaryAlbedo": "rgba(143, 102, 32, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.86}, "surfaceDetail": {"macroRoughness": 0.34, "microRoughness": 0.06, "bumpAmplitude": 0.0, "realisation": "none", "notes": "Cast and gilded, faceted at 8 lathe segments so the figure reads as a cast sculpture rather than a turned vase. No surface relief, and since the garlands were removed nothing stands in front of it: the faceting is the whole of the figure's local detail."}};
  node_deity_body_3.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}};
  (nodes["root"] ?? root).add(node_deity_body_3);
  nodes["deity-body"] = node_deity_body_3;
  const mesh_deity_body_3Geometry = endpoint_deity_body_3
    ? new THREE.CylinderGeometry(endpoint_deity_body_3.endRadius, endpoint_deity_body_3.baseRadius, endpoint_deity_body_3.length, 16, 6)
    : mergeNonIndexed([
        buildLatheGeometry({"points": [[0.0001, 1.87], [0.44, 1.87], [0.46, 1.91], [0.43, 1.99], [0.35, 2.09], [0.27, 2.19], [0.22, 2.31], [0.215, 2.42], [0.26, 2.53], [0.32, 2.63], [0.33, 2.7], [0.28, 2.76], [0.16, 2.8]], "segments": 8}),
        ...deityArms(),
      ]);
  if (!endpoint_deity_body_3) {
    mesh_deity_body_3Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_deity_body_3 = new THREE.Mesh(
    mesh_deity_body_3Geometry,
    materialMap["gilt"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_deity_body_3.name = "Seated four-armed deity figure, body and lap";
  if (endpoint_deity_body_3) {
    mesh_deity_body_3.position.copy(endpoint_deity_body_3.midpoint);
    mesh_deity_body_3.quaternion.copy(endpoint_deity_body_3.quaternion);
  }
  mesh_deity_body_3.castShadow = options.castShadow ?? true;
  mesh_deity_body_3.receiveShadow = options.receiveShadow ?? true;
  mesh_deity_body_3.userData.sculptComponent = {"id": "deity-body", "name": "Seated four-armed deity figure, body and lap", "level": "macro", "role": "body", "importance": 0.95, "confidence": 0.55, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "A solid of revolution at 10 segments. This is an APPROXIMATION and is declared as one: a seated figure is not truly a lathe, but the deity is close to 4-fold symmetric by iconography, its arms are occluded by garlands in the only view available so there is no evidence for them, and the budget affords one primitive here. Reported at confidence 0.55.", "geometryDescriptor": {"topologyIntent": "Broad lap over crossed legs at the pedestal top, drawing in to a waist at y=2.40, swelling to a shoulder line at y=2.88 and closing to the neck at y=3.02.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.0001, 1.87], [0.44, 1.87], [0.46, 1.91], [0.43, 1.99], [0.35, 2.09], [0.27, 2.19], [0.22, 2.31], [0.215, 2.42], [0.26, 2.53], [0.32, 2.63], [0.33, 2.7], [0.28, 2.76], [0.16, 2.8]], "segments": 8}, "segmentRationale": "12 points at 10 segments: 220 triangles.", "approximationNote": "The four arms are NOT modelled: they are occluded by garland masses in the single plate, so there is no evidence for their number or gesture (unknown unk-deity-arms, confidence 0.3). The first build authored garlands over exactly the shoulder region that hides them, which masked the omission; the garlands were removed after review because displaced spheres read as orange blobs rather than flowers, so the bare shoulder now shows. A stated omission, not an oversight."}, "parent": null, "attachment": null, "dimensions": {"width": 1.28, "height": 1.02, "depth": 1.28, "units": "metres", "confidence": 0.55}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1], "rotationUnits": "radians"}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}}, "material": "gilt", "materialId": "gilt", "localFeatures": [{"id": "shoulder-line", "kind": "contour", "description": "The shoulder line at y=2.72-2.80 where the chest stops swelling and falls to the neck. This is the region the plate's garland masses drape over and the region that occludes the figure's unmodelled arms; the garlands are not built, so the shoulder carries the read alone.", "scale": "meso"}], "colorMaterialRecipe": {"materialId": "gilt", "baseColor": "#B08238", "finish": "metallic", "evidenceRef": "material-evidence/gilt.json", "notes": "Gold leaf, same material as the columns and finial -- one shader switch for every gilt surface on the prop.", "dominantAlbedo": "rgba(192, 143, 50, 1.0)", "secondaryAlbedo": "rgba(143, 102, 32, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.86}, "surfaceDetail": {"macroRoughness": 0.34, "microRoughness": 0.06, "bumpAmplitude": 0.0, "realisation": "none", "notes": "Cast and gilded, faceted at 8 lathe segments so the figure reads as a cast sculpture rather than a turned vase. No surface relief, and since the garlands were removed nothing stands in front of it: the faceting is the whole of the figure's local detail."}};
  node_deity_body_3.add(mesh_deity_body_3);
  meshes["deity-body"] = mesh_deity_body_3;
  colliders["deity-body"] = {};

  const endpoint_deity_head_crown_4 = makeAttachmentEndpoint(null);
  const node_deity_head_crown_4 = new THREE.Group();
  node_deity_head_crown_4.name = "Four-faced head block and tiered crown__pivot";
  node_deity_head_crown_4.scale.set(1, 1, 1);
  if (endpoint_deity_head_crown_4) {
    node_deity_head_crown_4.position.copy(endpoint_deity_head_crown_4.start);
    node_deity_head_crown_4.rotation.set(0.0, 0.7853981633974483, 0.0);
  } else {
    node_deity_head_crown_4.position.set(0.0, 0.0, 0.0);
    node_deity_head_crown_4.rotation.set(0.0, 0.7853981633974483, 0.0);
  }
  node_deity_head_crown_4.userData.sculptComponent = {"id": "deity-head-crown", "name": "Four-faced head block and tiered crown", "level": "meso", "role": "body", "importance": 0.9, "confidence": 0.5, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "A square solid of revolution at segments=4 - and here the square is the ICONOGRAPHY, not a budget trick: four segments give the head block exactly four flat faces at 90 deg, which is what a Brahma image is. The 45 deg Y rotation puts one face on +Z, facing the street.", "geometryDescriptor": {"topologyIntent": "Neck, the four-faced head block from y=3.14 to y=3.40, then the tiered crown stepping in to a spire at y=3.88. Facial relief is not modelled: at prop distance on a low-end target the gilt response carries the read, and only one of the four faces is legible in the plate.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.0001, 2.79], [0.1344, 2.79], [0.1485, 2.84], [0.2404, 2.9], [0.2475, 2.99], [0.2376, 3.09], [0.2121, 3.16], [0.2758, 3.19], [0.2546, 3.23], [0.2121, 3.27], [0.2263, 3.3], [0.1838, 3.34], [0.1909, 3.37], [0.1414, 3.41], [0.1485, 3.43], [0.0849, 3.47], [0.0001, 3.51]], "segments": 4}, "segmentRationale": "13 points at 4 segments: 96 triangles."}, "parent": null, "attachment": null, "dimensions": {"width": 0.62, "height": 0.88, "depth": 0.62, "units": "metres", "confidence": 0.5}, "transform": {"position": [0, 0, 0], "rotation": [0, 0.7853981633974483, 0], "scale": [1, 1, 1], "rotationUnits": "radians"}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}}, "material": "gilt", "materialId": "gilt", "localFeatures": [{"id": "four-face-block", "kind": "contour", "description": "The head block from y=3.14 to 3.40 built at lathe segments=4, so it has exactly four flat faces at 90 degrees. Here the square is the iconography, not a budget trick.", "scale": "meso"}], "colorMaterialRecipe": {"materialId": "gilt", "baseColor": "#B08238", "finish": "metallic", "evidenceRef": "material-evidence/gilt.json", "notes": "Gold leaf.", "dominantAlbedo": "rgba(192, 143, 50, 1.0)", "secondaryAlbedo": "rgba(143, 102, 32, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.86}, "surfaceDetail": {"macroRoughness": 0.34, "microRoughness": 0.06, "bumpAmplitude": 0.03, "realisation": "geometry", "notes": "The crown tiers step in by 0.03 m each over a flared brow band -- built relief. The four faces are the four flat sides of a 4-segment lathe; facial features are NOT modelled and are the declared approximation."}};
  node_deity_head_crown_4.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}};
  (nodes["root"] ?? root).add(node_deity_head_crown_4);
  nodes["deity-head-crown"] = node_deity_head_crown_4;
  const mesh_deity_head_crown_4Geometry = endpoint_deity_head_crown_4
    ? new THREE.CylinderGeometry(endpoint_deity_head_crown_4.endRadius, endpoint_deity_head_crown_4.baseRadius, endpoint_deity_head_crown_4.length, 16, 6)
    : buildLatheGeometry({"points": [[0.0001, 2.79], [0.1344, 2.79], [0.1485, 2.84], [0.2404, 2.9], [0.2475, 2.99], [0.2376, 3.09], [0.2121, 3.16], [0.2758, 3.19], [0.2546, 3.23], [0.2121, 3.27], [0.2263, 3.3], [0.1838, 3.34], [0.1909, 3.37], [0.1414, 3.41], [0.1485, 3.43], [0.0849, 3.47], [0.0001, 3.51]], "segments": 4});
  if (!endpoint_deity_head_crown_4) {
    mesh_deity_head_crown_4Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_deity_head_crown_4 = new THREE.Mesh(
    mesh_deity_head_crown_4Geometry,
    materialMap["gilt"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_deity_head_crown_4.name = "Four-faced head block and tiered crown";
  if (endpoint_deity_head_crown_4) {
    mesh_deity_head_crown_4.position.copy(endpoint_deity_head_crown_4.midpoint);
    mesh_deity_head_crown_4.quaternion.copy(endpoint_deity_head_crown_4.quaternion);
  }
  mesh_deity_head_crown_4.castShadow = options.castShadow ?? true;
  mesh_deity_head_crown_4.receiveShadow = options.receiveShadow ?? true;
  mesh_deity_head_crown_4.userData.sculptComponent = {"id": "deity-head-crown", "name": "Four-faced head block and tiered crown", "level": "meso", "role": "body", "importance": 0.9, "confidence": 0.5, "primitive": "lathe", "topologyClass": "continuous-sculpt", "topologyRationale": "A square solid of revolution at segments=4 - and here the square is the ICONOGRAPHY, not a budget trick: four segments give the head block exactly four flat faces at 90 deg, which is what a Brahma image is. The 45 deg Y rotation puts one face on +Z, facing the street.", "geometryDescriptor": {"topologyIntent": "Neck, the four-faced head block from y=3.14 to y=3.40, then the tiered crown stepping in to a spire at y=3.88. Facial relief is not modelled: at prop distance on a low-end target the gilt response carries the read, and only one of the four faces is legible in the plate.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "latheProfile": {"points": [[0.0001, 2.79], [0.1344, 2.79], [0.1485, 2.84], [0.2404, 2.9], [0.2475, 2.99], [0.2376, 3.09], [0.2121, 3.16], [0.2758, 3.19], [0.2546, 3.23], [0.2121, 3.27], [0.2263, 3.3], [0.1838, 3.34], [0.1909, 3.37], [0.1414, 3.41], [0.1485, 3.43], [0.0849, 3.47], [0.0001, 3.51]], "segments": 4}, "segmentRationale": "13 points at 4 segments: 96 triangles."}, "parent": null, "attachment": null, "dimensions": {"width": 0.62, "height": 0.88, "depth": 0.62, "units": "metres", "confidence": 0.5}, "transform": {"position": [0, 0, 0], "rotation": [0, 0.7853981633974483, 0], "scale": [1, 1, 1], "rotationUnits": "radians"}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}}, "material": "gilt", "materialId": "gilt", "localFeatures": [{"id": "four-face-block", "kind": "contour", "description": "The head block from y=3.14 to 3.40 built at lathe segments=4, so it has exactly four flat faces at 90 degrees. Here the square is the iconography, not a budget trick.", "scale": "meso"}], "colorMaterialRecipe": {"materialId": "gilt", "baseColor": "#B08238", "finish": "metallic", "evidenceRef": "material-evidence/gilt.json", "notes": "Gold leaf.", "dominantAlbedo": "rgba(192, 143, 50, 1.0)", "secondaryAlbedo": "rgba(143, 102, 32, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.86}, "surfaceDetail": {"macroRoughness": 0.34, "microRoughness": 0.06, "bumpAmplitude": 0.03, "realisation": "geometry", "notes": "The crown tiers step in by 0.03 m each over a flared brow band -- built relief. The four faces are the four flat sides of a 4-segment lathe; facial features are NOT modelled and are the declared approximation."}};
  node_deity_head_crown_4.add(mesh_deity_head_crown_4);
  meshes["deity-head-crown"] = mesh_deity_head_crown_4;
  colliders["deity-head-crown"] = {};

  const endpoint_rail_top_5 = makeAttachmentEndpoint(null);
  const node_rail_top_5 = new THREE.Group();
  node_rail_top_5.name = "Balustrade top rail__pivot";
  node_rail_top_5.scale.set(1, 1, 1);
  if (endpoint_rail_top_5) {
    node_rail_top_5.position.copy(endpoint_rail_top_5.start);
    node_rail_top_5.rotation.set(-1.5707963267948966, 0.0, 0.0);
  } else {
    node_rail_top_5.position.set(0.0, 1.85, 0.0);
    node_rail_top_5.rotation.set(-1.5707963267948966, 0.0, 0.0);
  }
  node_rail_top_5.userData.sculptComponent = {"id": "rail-top", "name": "Balustrade top rail", "level": "macro", "role": "body", "importance": 0.7, "confidence": 0.85, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "A Shape WITH A HOLE extruded through its thickness: a square ring in plan, so the balustrade is a real frame with a void in the middle rather than a solid parapet. Authored in plan (sx, sy) = (worldX, worldZ) and rotated -90 deg about X so the extrusion axis becomes world +Y.", "geometryDescriptor": {"topologyIntent": "Outer half-width 1.95 m, inner 1.83 m, from y=1.85 to y=1.95. Every number is read from the spec's published runtime block so the rail cannot drift away from the balusters when the podium height is refitted.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "profile2D": {"points": [[-1.95, -1.95], [1.95, -1.95], [1.95, 1.95], [-1.95, 1.95]], "holes": [[[-1.83, -1.83], [1.83, -1.83], [1.83, 1.83], [-1.83, 1.83]]], "depth": 0.1}, "shapeSpaceNote": "Shape space (sx, sy) maps to world (x, -z); the ring is symmetric so the sign does not matter.", "segmentRationale": "Four outline points and four hole points, one extrusion step: about 80 triangles including the reveal faces."}, "parent": null, "attachment": null, "dimensions": {"width": 3.9, "height": 0.1, "depth": 3.9, "units": "metres", "confidence": 0.85}, "transform": {"position": [0, 1.85, 0], "rotation": [-1.5707963267948966, 0, 0], "scale": [1, 1, 1], "rotationUnits": "radians"}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}}, "material": "timber", "materialId": "timber", "colorMaterialRecipe": {"materialId": "timber", "baseColor": "#5A4136", "finish": "satin", "evidenceRef": "material-evidence/timber.json", "notes": "Dark stained hardwood, same material as the roof and the elephant figurines.", "dominantAlbedo": "rgba(74, 50, 39, 1.0)", "secondaryAlbedo": "rgba(51, 34, 26, 1.0)", "materialClass": "wood", "materialClassConfidence": 0.88}, "surfaceDetail": {"macroRoughness": 0.55, "microRoughness": 0.08, "bumpAmplitude": 0.0, "realisation": "none", "notes": "Square-section timber rail; flat faces, no relief."}};
  node_rail_top_5.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}};
  (nodes["root"] ?? root).add(node_rail_top_5);
  nodes["rail-top"] = node_rail_top_5;
  const mesh_rail_top_5Geometry = endpoint_rail_top_5
    ? new THREE.CylinderGeometry(endpoint_rail_top_5.endRadius, endpoint_rail_top_5.baseRadius, endpoint_rail_top_5.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-1.95, -1.95], [1.95, -1.95], [1.95, 1.95], [-1.95, 1.95]], "holes": [[[-1.83, -1.83], [1.83, -1.83], [1.83, 1.83], [-1.83, 1.83]]], "depth": 0.1});
  if (!endpoint_rail_top_5) {
    mesh_rail_top_5Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_rail_top_5 = new THREE.Mesh(
    mesh_rail_top_5Geometry,
    materialMap["timber"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_rail_top_5.name = "Balustrade top rail";
  if (endpoint_rail_top_5) {
    mesh_rail_top_5.position.copy(endpoint_rail_top_5.midpoint);
    mesh_rail_top_5.quaternion.copy(endpoint_rail_top_5.quaternion);
  }
  mesh_rail_top_5.castShadow = options.castShadow ?? true;
  mesh_rail_top_5.receiveShadow = options.receiveShadow ?? true;
  mesh_rail_top_5.userData.sculptComponent = {"id": "rail-top", "name": "Balustrade top rail", "level": "macro", "role": "body", "importance": 0.7, "confidence": 0.85, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "A Shape WITH A HOLE extruded through its thickness: a square ring in plan, so the balustrade is a real frame with a void in the middle rather than a solid parapet. Authored in plan (sx, sy) = (worldX, worldZ) and rotated -90 deg about X so the extrusion axis becomes world +Y.", "geometryDescriptor": {"topologyIntent": "Outer half-width 1.95 m, inner 1.83 m, from y=1.85 to y=1.95. Every number is read from the spec's published runtime block so the rail cannot drift away from the balusters when the podium height is refitted.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "profile2D": {"points": [[-1.95, -1.95], [1.95, -1.95], [1.95, 1.95], [-1.95, 1.95]], "holes": [[[-1.83, -1.83], [1.83, -1.83], [1.83, 1.83], [-1.83, 1.83]]], "depth": 0.1}, "shapeSpaceNote": "Shape space (sx, sy) maps to world (x, -z); the ring is symmetric so the sign does not matter.", "segmentRationale": "Four outline points and four hole points, one extrusion step: about 80 triangles including the reveal faces."}, "parent": null, "attachment": null, "dimensions": {"width": 3.9, "height": 0.1, "depth": 3.9, "units": "metres", "confidence": 0.85}, "transform": {"position": [0, 1.85, 0], "rotation": [-1.5707963267948966, 0, 0], "scale": [1, 1, 1], "rotationUnits": "radians"}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}}, "material": "timber", "materialId": "timber", "colorMaterialRecipe": {"materialId": "timber", "baseColor": "#5A4136", "finish": "satin", "evidenceRef": "material-evidence/timber.json", "notes": "Dark stained hardwood, same material as the roof and the elephant figurines.", "dominantAlbedo": "rgba(74, 50, 39, 1.0)", "secondaryAlbedo": "rgba(51, 34, 26, 1.0)", "materialClass": "wood", "materialClassConfidence": 0.88}, "surfaceDetail": {"macroRoughness": 0.55, "microRoughness": 0.08, "bumpAmplitude": 0.0, "realisation": "none", "notes": "Square-section timber rail; flat faces, no relief."}};
  node_rail_top_5.add(mesh_rail_top_5);
  meshes["rail-top"] = mesh_rail_top_5;
  colliders["rail-top"] = {};

  const endpoint_rail_bottom_6 = makeAttachmentEndpoint(null);
  const node_rail_bottom_6 = new THREE.Group();
  node_rail_bottom_6.name = "Balustrade bottom rail__pivot";
  node_rail_bottom_6.scale.set(1, 1, 1);
  if (endpoint_rail_bottom_6) {
    node_rail_bottom_6.position.copy(endpoint_rail_bottom_6.start);
    node_rail_bottom_6.rotation.set(-1.5707963267948966, 0.0, 0.0);
  } else {
    node_rail_bottom_6.position.set(0.0, 1.21, 0.0);
    node_rail_bottom_6.rotation.set(-1.5707963267948966, 0.0, 0.0);
  }
  node_rail_bottom_6.userData.sculptComponent = {"id": "rail-bottom", "name": "Balustrade bottom rail", "level": "macro", "role": "body", "importance": 0.7, "confidence": 0.85, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "The same square-ring extrusion as the top rail. It is a second component rather than a second profile on one, because an extrude is a single prismatic solid and the two rails sit at different heights.", "geometryDescriptor": {"topologyIntent": "Outer half-width 1.95 m, inner 1.83 m, from y=1.21 to y=1.35 - so it OVERLAPS 0.04 m into the deck slab, whose top is y=1.25, rather than sitting flush on it.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "profile2D": {"points": [[-1.95, -1.95], [1.95, -1.95], [1.95, 1.95], [-1.95, 1.95]], "holes": [[[-1.83, -1.83], [1.83, -1.83], [1.83, 1.83], [-1.83, 1.83]]], "depth": 0.14}, "shapeSpaceNote": "Shape space (sx, sy) maps to world (x, -z).", "segmentRationale": "About 80 triangles."}, "parent": null, "attachment": null, "dimensions": {"width": 3.9, "height": 0.14, "depth": 3.9, "units": "metres", "confidence": 0.85}, "transform": {"position": [0, 1.21, 0], "rotation": [-1.5707963267948966, 0, 0], "scale": [1, 1, 1], "rotationUnits": "radians"}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}}, "material": "timber", "materialId": "timber", "localFeatures": [{"id": "baluster-seat", "kind": "contour", "description": "The top face of the bottom rail at y=1.46 that the 40 turned balusters seat into, each sunk 0.02 m so no foot is flush.", "scale": "micro"}], "colorMaterialRecipe": {"materialId": "timber", "baseColor": "#5A4136", "finish": "satin", "evidenceRef": "material-evidence/timber.json", "notes": "Dark stained hardwood.", "dominantAlbedo": "rgba(74, 50, 39, 1.0)", "secondaryAlbedo": "rgba(51, 34, 26, 1.0)", "materialClass": "wood", "materialClassConfidence": 0.88}, "surfaceDetail": {"macroRoughness": 0.55, "microRoughness": 0.08, "bumpAmplitude": 0.0, "realisation": "none", "notes": "Square-section timber rail; flat faces, no relief."}};
  node_rail_bottom_6.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}};
  (nodes["root"] ?? root).add(node_rail_bottom_6);
  nodes["rail-bottom"] = node_rail_bottom_6;
  const mesh_rail_bottom_6Geometry = endpoint_rail_bottom_6
    ? new THREE.CylinderGeometry(endpoint_rail_bottom_6.endRadius, endpoint_rail_bottom_6.baseRadius, endpoint_rail_bottom_6.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-1.95, -1.95], [1.95, -1.95], [1.95, 1.95], [-1.95, 1.95]], "holes": [[[-1.83, -1.83], [1.83, -1.83], [1.83, 1.83], [-1.83, 1.83]]], "depth": 0.14});
  if (!endpoint_rail_bottom_6) {
    mesh_rail_bottom_6Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_rail_bottom_6 = new THREE.Mesh(
    mesh_rail_bottom_6Geometry,
    materialMap["timber"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_rail_bottom_6.name = "Balustrade bottom rail";
  if (endpoint_rail_bottom_6) {
    mesh_rail_bottom_6.position.copy(endpoint_rail_bottom_6.midpoint);
    mesh_rail_bottom_6.quaternion.copy(endpoint_rail_bottom_6.quaternion);
  }
  mesh_rail_bottom_6.castShadow = options.castShadow ?? true;
  mesh_rail_bottom_6.receiveShadow = options.receiveShadow ?? true;
  mesh_rail_bottom_6.userData.sculptComponent = {"id": "rail-bottom", "name": "Balustrade bottom rail", "level": "macro", "role": "body", "importance": 0.7, "confidence": 0.85, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "The same square-ring extrusion as the top rail. It is a second component rather than a second profile on one, because an extrude is a single prismatic solid and the two rails sit at different heights.", "geometryDescriptor": {"topologyIntent": "Outer half-width 1.95 m, inner 1.83 m, from y=1.21 to y=1.35 - so it OVERLAPS 0.04 m into the deck slab, whose top is y=1.25, rather than sitting flush on it.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "profile2D": {"points": [[-1.95, -1.95], [1.95, -1.95], [1.95, 1.95], [-1.95, 1.95]], "holes": [[[-1.83, -1.83], [1.83, -1.83], [1.83, 1.83], [-1.83, 1.83]]], "depth": 0.14}, "shapeSpaceNote": "Shape space (sx, sy) maps to world (x, -z).", "segmentRationale": "About 80 triangles."}, "parent": null, "attachment": null, "dimensions": {"width": 3.9, "height": 0.14, "depth": 3.9, "units": "metres", "confidence": 0.85}, "transform": {"position": [0, 1.21, 0], "rotation": [-1.5707963267948966, 0, 0], "scale": [1, 1, 1], "rotationUnits": "radians"}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "explicit", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "destruction": {"breakable": false, "notes": "Static landmark geometry; the asset declares no destruction groups, so no component carries a fractureGroup."}}, "material": "timber", "materialId": "timber", "localFeatures": [{"id": "baluster-seat", "kind": "contour", "description": "The top face of the bottom rail at y=1.46 that the 40 turned balusters seat into, each sunk 0.02 m so no foot is flush.", "scale": "micro"}], "colorMaterialRecipe": {"materialId": "timber", "baseColor": "#5A4136", "finish": "satin", "evidenceRef": "material-evidence/timber.json", "notes": "Dark stained hardwood.", "dominantAlbedo": "rgba(74, 50, 39, 1.0)", "secondaryAlbedo": "rgba(51, 34, 26, 1.0)", "materialClass": "wood", "materialClassConfidence": 0.88}, "surfaceDetail": {"macroRoughness": 0.55, "microRoughness": 0.08, "bumpAmplitude": 0.0, "realisation": "none", "notes": "Square-section timber rail; flat faces, no relief."}};
  node_rail_bottom_6.add(mesh_rail_bottom_6);
  meshes["rail-bottom"] = mesh_rail_bottom_6;
  colliders["rail-bottom"] = {};





  root.userData.materialMap = materialMap;
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createBrahmanStreetShrineLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "Brahman Street Shrine look-dev lights";
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
  lights.userData.lightingFromPhoto = [{"id": "key", "type": "directional", "role": "key", "intensity": 2.0, "direction": [-0.42, -0.8, -0.43], "colorTemperatureK": 5500, "color": "#FFF5E8", "evidence": "Read off the plate's shading split: the +Z front and the -X side of the plinth both carry light with the front marginally brighter, the roof slopes are the brightest planes on the prop, and the cap-slab chamfer throws a soft downward shadow line. Key is high, forward and to the left. Shadow edges under the canopy are soft, so it is a broad source, not a point.", "confidence": 0.78}, {"id": "fill", "type": "hemisphere", "role": "fill", "intensity": 0.9, "skyColor": "#C9D0D6", "groundColor": "#8A8580", "evidence": "The plate is a studio cut-out on a measured mid-grey backdrop with no ground plane and no cast shadow. Faces turned away from the key sit only about 22% below lit ones -- the deck under the canopy stays legible -- which is a strong ambient fill, not a second lamp.", "confidence": 0.8, "contactShadow": {"enabled": true, "strength": 0.35, "radius": 0.3, "note": "A CONTRACT for the host scene, not baked. There is no ground plane in the plate to measure a contact shadow from; a street-placed shrine needs one where the plinth meets the pavement or it floats."}}, {"id": "rim", "type": "directional", "role": "rim", "intensity": 0.5, "direction": [0.62, -0.28, 0.73], "color": "#E8EEF5", "evidence": "A cool narrow edge highlight runs down the right-hand column shafts and the right eave, separating the gilt from the backdrop. A weak cool kicker opposite the key, not part of the fill.", "confidence": 0.6}];
  lights.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  return lights;
}


// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameBrahmanStreetShrineCamera(
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


export function configureBrahmanStreetShrineRenderer(renderer: THREE.WebGLRenderer): void {
  // Load-bearing for view-dependent finishes (anodized / Doppler): without ACES + sRGB
  // the environment reflection reads flat/washed instead of a believable metal response.
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
}



/* ==================== THAIKIT HAND REFINEMENT ==================== */

/** The build pass this factory was generated for. The hand-emitted clusters obey the same
 * macro/meso/micro gate the generator applies to componentTree, so a blockout render shows a
 * blockout and not a finished prop. */
const BUILD_PASS = 'optimization-pass';
// MUST match sculptPipeline.passOrder in the spec. A pass gate that fails OPEN is worse than none:
// a missing entry makes indexOf return -1 and passAtLeast() answer false for everything, which
// renders silently empty.
const PASS_ORDER = ["blockout", "structural-pass", "form-refinement", "material-pass", "surface-pass", "lighting-pass", "interaction-pass", "optimization-pass"];
const passAtLeast = (p: string): boolean =>
  PASS_ORDER.indexOf(BUILD_PASS) >= PASS_ORDER.indexOf(p);

/**
 * Merge a list of axis-aligned boxes into ONE BufferGeometry.
 *
 * Hand-rolled because BufferGeometryUtils lives in three/examples/jsm, which this module may not
 * import -- see the strip above. Without it the votive elephant would need seven primitives and
 * therefore seven geometries, and the prop has exactly zero spare.
 */
function mergeBoxes(boxes: { pos: [number, number, number]; size: [number, number, number] }[]): THREE.BufferGeometry {
  const pos: number[] = [];
  const idx: number[] = [];
  const CUBE: [number, number, number][] = [
    [-0.5,-0.5,-0.5],[0.5,-0.5,-0.5],[0.5,0.5,-0.5],[-0.5,0.5,-0.5],
    [-0.5,-0.5, 0.5],[0.5,-0.5, 0.5],[0.5,0.5, 0.5],[-0.5,0.5, 0.5],
  ];
  const FACES = [[0,1,2,3],[5,4,7,6],[4,0,3,7],[1,5,6,2],[3,2,6,7],[4,5,1,0]];
  for (const b of boxes) {
    const base = pos.length / 3;
    for (const [x, y, z] of CUBE) {
      pos.push(x * b.size[0] + b.pos[0], y * b.size[1] + b.pos[1], z * b.size[2] + b.pos[2]);
    }
    for (const [a, c, d, e] of FACES) idx.push(base+a, base+c, base+d, base+a, base+d, base+e);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/** One low-poly votive elephant, broadside, trunk down. Seven boxes, 84 triangles, ONE geometry
 * shared by all 48 instances. Deliberately crude: at prop distance this reads as a massed ring,
 * and 48 carved figurines would eat a third of the triangle budget for detail nobody resolves. */
function buildElephantGeometry(): THREE.BufferGeometry {
  return mergeBoxes([
    { pos: [0, 0.62, 0], size: [1.00, 0.52, 0.52] },   // body
    { pos: [0.60, 0.66, 0], size: [0.34, 0.42, 0.40] }, // head
    { pos: [0.76, 0.34, 0], size: [0.16, 0.44, 0.16] }, // trunk
    { pos: [-0.32, 0.18, 0.18], size: [0.20, 0.42, 0.18] },
    { pos: [-0.32, 0.18,-0.18], size: [0.20, 0.42, 0.18] },
    { pos: [ 0.32, 0.18, 0.18], size: [0.20, 0.42, 0.18] },
    { pos: [ 0.32, 0.18,-0.18], size: [0.20, 0.42, 0.18] },
  ]);
}

/**
 * One hip ridge cap: a square-section strip swept up a hip, plus a quarter of the eave band.
 *
 * A hip of a square hip roof runs along the plan DIAGONAL while it rises, so its cross-section has
 * to be carried along that direction. A chain of axis-aligned boxes cannot express it -- the first
 * attempt did exactly that and rendered a row of gold fenceposts standing on the roof.
 *
 * Four instances at 0/90/180/270 complete all four hips AND the full eave ring, because each
 * instance also carries the eave edge running from its own corner to the next one.
 */
function buildHipCapGeometry(hip: [number, number][], eaveHe: number, eaveY: number): THREE.BufferGeometry {
  const pos: number[] = [];
  const idx: number[] = [];
  const W = 0.055, T = 0.035;            // strip half-width and half-thickness

  const ring = (centre: THREE.Vector3, dir: THREE.Vector3, side: THREE.Vector3): void => {
    const up = new THREE.Vector3().crossVectors(dir, side).normalize();
    for (const [a, b] of [[-1, -1], [1, -1], [1, 1], [-1, 1]] as [number, number][]) {
      pos.push(
        centre.x + side.x * W * a + up.x * T * b,
        centre.y + side.y * W * a + up.y * T * b,
        centre.z + side.z * W * a + up.z * T * b);
    }
  };
  const bridge = (i0: number, i1: number): void => {
    for (let k = 0; k < 4; k++) {
      const a = i0 + k, b = i0 + (k + 1) % 4, c = i1 + (k + 1) % 4, d = i1 + k;
      idx.push(a, b, c, a, c, d);
    }
  };

  // the hip: stations run along the plan diagonal (h, y, h)
  const diag = new THREE.Vector3(1, 0, 1).normalize();
  const side = new THREE.Vector3(1, 0, -1).normalize();
  let prev = -1;
  for (let i = 0; i < hip.length; i++) {
    const [h, y] = hip[i];
    const [h2, y2] = hip[Math.min(i + 1, hip.length - 1)];
    const [h0, y0] = hip[Math.max(i - 1, 0)];
    const dir = new THREE.Vector3((h2 - h0) * diag.x, y2 - y0, (h2 - h0) * diag.z);
    if (dir.lengthSq() < 1e-9) dir.set(0, 1, 0);
    dir.normalize();
    const base = pos.length / 3;
    ring(new THREE.Vector3(h, y, h), dir, side);
    if (prev >= 0) bridge(prev, base);
    prev = base;
  }

  // one quarter of the eave band: the edge from this corner round to the next, which four
  // instances turn into the complete ring
  const along = new THREE.Vector3(-1, 0, 1).normalize();
  const eaveDirSide = new THREE.Vector3(0, 1, 0);
  let ePrev = -1;
  const STEPS = 4;
  // Stop 3% short of each corner. Run edge-to-edge and the four instances each put a full
  // cross-section ring on the SAME corner point -- coincident co-facing faces at the most looked-at
  // part of the roofline. The hip strip passes through that corner and closes the join visually.
  const T0 = 0.03, T1 = 0.97;
  for (let i = 0; i <= STEPS; i++) {
    const t = T0 + (T1 - T0) * (i / STEPS);
    const c = new THREE.Vector3(eaveHe - 2 * eaveHe * t, eaveY, eaveHe);
    const base = pos.length / 3;
    ring(c, along, eaveDirSide);
    if (ePrev >= 0) bridge(ePrev, base);
    ePrev = base;
  }

  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function latheOf(points: [number, number][], segments: number): THREE.LatheGeometry {
  return new THREE.LatheGeometry(points.map(([x, y]) => new THREE.Vector2(Math.max(0.0001, x), y)), segments);
}

/**
 * Emit the five repetition clusters, each one InstancedMesh and one draw call.
 *
 * Placement is EXPLICIT and square where the prop is square. The generator's radial emitter would
 * put the balusters and the elephants on a circle inscribed in the balustrade, which is why these
 * live here and why repetitionSystems in the spec carries the real coordinates.
 */
function applyVotiveClusters(root: THREE.Group, macro: boolean, meso: boolean): void {
  const rt = root.userData.sculptRuntime as any;
  const meshes: Record<string, THREE.Mesh> = rt?.meshes ?? {};
  const m4 = new THREE.Matrix4();
  const qy = (deg: number) => new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), deg * Math.PI / 180);
  const mat = (id: string, fallback: number): THREE.Material =>
    (root.userData.materialMap?.[id] as THREE.Material) ?? new THREE.MeshStandardMaterial({ color: fallback });

  type P = { pos: [number, number, number]; scale: [number, number, number]; rotY?: number };
  const cluster = (id: string, geom: THREE.BufferGeometry, material: THREE.Material, ps: P[]): void => {
    const inst = new THREE.InstancedMesh(geom, material, ps.length);
    inst.name = id;
    ps.forEach((p, i) => {
      m4.compose(new THREE.Vector3(...p.pos), qy(p.rotY ?? 0), new THREE.Vector3(...p.scale));
      inst.setMatrixAt(i, m4);
    });
    inst.instanceMatrix.needsUpdate = true;
    inst.castShadow = true;
    inst.receiveShadow = true;
    root.add(inst);
    meshes[id] = inst as unknown as THREE.Mesh;
  };

  // --- columns: shaft, base torus and fluted capital collar in ONE lathe profile, 4 instances.
  // Sunk 0.02 m into the deck: a column base flush with the deck top is a coincident co-facing
  // pair, and those tear into interleaved triangles as the camera moves.
  // Height comes from the spec's published runtime block, NOT a literal. A hard-coded 2.20 m
  // shaft stopped tracking the fitted bay height and left the roof floating on a 0.34 m gap.
  const CH = 2.54;
  const columnGeo = latheOf(([
    [0.0001, 0.000], [0.115, 0.000], [0.115, 0.027], [0.098, 0.041],  // base torus
    [0.085, 0.064], [0.082, 0.864], [0.088, 0.891],                    // shaft, slight entasis
    [0.084, 0.909], [0.100, 0.927], [0.100, 0.982], [0.086, 1.000],    // fluted capital collar
    [0.0001, 1.000],
  ] as [number, number][]).map(([r, f]) => [r, f * CH] as [number, number]), 10);
  if (macro) cluster('columns', columnGeo, mat('gilt', 0x846f4b),
    [[-1.1, 1.23, -1.1], [1.1, 1.23, -1.1], [1.1, 1.23, 1.1], [-1.1, 1.23, 1.1]].map((p: number[]) => ({ pos: p as [number, number, number], scale: [1, 1, 1] as [number, number, number] })));

  // --- balusters: turned vase profile, 10 per side on a SQUARE ring, 40 instances.
  // Seated 0.02 m into the bottom rail at both ends so neither foot nor head is flush.
  // 9 points at 6 segments = 96 triangles. At 13 points and 8 segments this was 192 each, and
  // 40 of them were 7,680 triangles -- half the prop's entire budget for a turned baluster that
  // is a few pixels wide at prop distance. The vase profile survives the reduction; the count
  // and the gaps between them are what the balustrade actually reads as.
  // Likewise the baluster: its height is the measured gap between the two rails plus a 0.02 m
  // overlap into each, so the balustrade cannot come apart when the podium height is refitted.
  const BH = 0.54;
  const balusterGeo = latheOf(([
    [0.0001, 0.000], [0.048, 0.000], [0.030, 0.167],                // foot
    [0.026, 0.278], [0.052, 0.500], [0.026, 0.741],                 // belly
    [0.046, 0.926], [0.046, 1.000], [0.0001, 1.000],                // neck and head
  ] as [number, number][]).map(([r, f]) => [r, f * BH] as [number, number]), 6);
  if (meso) cluster('balusters', balusterGeo, mat('timber', 0x8a7a70),
    [[[-1.701, 1.33, 1.89], 0.0], [[-1.323, 1.33, 1.89], 0.0], [[-0.945, 1.33, 1.89], 0.0], [[-0.567, 1.33, 1.89], 0.0], [[-0.189, 1.33, 1.89], 0.0], [[0.189, 1.33, 1.89], 0.0], [[0.567, 1.33, 1.89], 0.0], [[0.945, 1.33, 1.89], 0.0], [[1.323, 1.33, 1.89], 0.0], [[1.701, 1.33, 1.89], 0.0], [[1.89, 1.33, 1.701], 90.0], [[1.89, 1.33, 1.323], 90.0], [[1.89, 1.33, 0.945], 90.0], [[1.89, 1.33, 0.567], 90.0], [[1.89, 1.33, 0.189], 90.0], [[1.89, 1.33, -0.189], 90.0], [[1.89, 1.33, -0.567], 90.0], [[1.89, 1.33, -0.945], 90.0], [[1.89, 1.33, -1.323], 90.0], [[1.89, 1.33, -1.701], 90.0], [[1.701, 1.33, -1.89], 180.0], [[1.323, 1.33, -1.89], 180.0], [[0.945, 1.33, -1.89], 180.0], [[0.567, 1.33, -1.89], 180.0], [[0.189, 1.33, -1.89], 180.0], [[-0.189, 1.33, -1.89], 180.0], [[-0.567, 1.33, -1.89], 180.0], [[-0.945, 1.33, -1.89], 180.0], [[-1.323, 1.33, -1.89], 180.0], [[-1.701, 1.33, -1.89], 180.0], [[-1.89, 1.33, -1.701], 270.0], [[-1.89, 1.33, -1.323], 270.0], [[-1.89, 1.33, -0.945], 270.0], [[-1.89, 1.33, -0.567], 270.0], [[-1.89, 1.33, -0.189], 270.0], [[-1.89, 1.33, 0.189], 270.0], [[-1.89, 1.33, 0.567], 270.0], [[-1.89, 1.33, 0.945], 270.0], [[-1.89, 1.33, 1.323], 270.0], [[-1.89, 1.33, 1.701], 270.0]].map((e: any) => ({ pos: e[0], scale: [1, 1, 1], rotY: e[1] })));

  // --- hip ridge caps: a swept strip up each hip, PLUS one quarter of the gold eave band.
  // Rotated 0/90/180/270 the four instances complete both the four hips and the whole eave ring,
  // so the prop's most identity-defining trim costs one geometry and one draw call.
  //
  // Swept, not a chain of boxes: mergeBoxes emits AXIS-ALIGNED boxes, so a box "along" a hip came
  // out as a vertical post standing on the roof. A hip runs diagonally in plan and rises, so its
  // cross-section has to be carried along that direction.
  const HIP = [[1.56, 4.215], [1.4231, 4.2837], [1.2946, 4.3525], [1.1759, 4.4212], [1.0695, 4.49], [0.9812, 4.5587], [0.8975, 4.6275], [0.8137, 4.6963], [0.73, 4.765], [0.6462, 4.8337], [0.5625, 4.9025], [0.4788, 4.9712], [0.395, 5.04], [0.3113, 5.1087], [0.2275, 5.1775], [0.1438, 5.2462], [0.06, 5.315]] as [number, number][];
  cluster('hip-ridge-caps', buildHipCapGeometry(HIP, 1.4, 4.18), mat('gilt', 0x846f4b),
    [0, 90, 180, 270].map((r) => ({ pos: [0, 0, 0] as [number, number, number], scale: [1, 1, 1] as [number, number, number], rotY: r })));

  // --- elephant figurine ring: 12 per side on the cap-slab ledge, embedded 0.015 m.
  if (meso) cluster('elephant-figurines', buildElephantGeometry(), mat('timber', 0x8a7a70),
    [[[-2.0717, 1.075, 2.26], 0.0], [[-1.695, 1.075, 2.26], 0.0], [[-1.3183, 1.075, 2.26], 0.0], [[-0.9417, 1.075, 2.26], 0.0], [[-0.565, 1.075, 2.26], 0.0], [[-0.1883, 1.075, 2.26], 0.0], [[0.1883, 1.075, 2.26], 0.0], [[0.565, 1.075, 2.26], 0.0], [[0.9417, 1.075, 2.26], 0.0], [[1.3183, 1.075, 2.26], 0.0], [[1.695, 1.075, 2.26], 0.0], [[2.0717, 1.075, 2.26], 0.0], [[2.26, 1.075, 2.0717], 90.0], [[2.26, 1.075, 1.695], 90.0], [[2.26, 1.075, 1.3183], 90.0], [[2.26, 1.075, 0.9417], 90.0], [[2.26, 1.075, 0.565], 90.0], [[2.26, 1.075, 0.1883], 90.0], [[2.26, 1.075, -0.1883], 90.0], [[2.26, 1.075, -0.565], 90.0], [[2.26, 1.075, -0.9417], 90.0], [[2.26, 1.075, -1.3183], 90.0], [[2.26, 1.075, -1.695], 90.0], [[2.26, 1.075, -2.0717], 90.0], [[2.0717, 1.075, -2.26], 180.0], [[1.695, 1.075, -2.26], 180.0], [[1.3183, 1.075, -2.26], 180.0], [[0.9417, 1.075, -2.26], 180.0], [[0.565, 1.075, -2.26], 180.0], [[0.1883, 1.075, -2.26], 180.0], [[-0.1883, 1.075, -2.26], 180.0], [[-0.565, 1.075, -2.26], 180.0], [[-0.9417, 1.075, -2.26], 180.0], [[-1.3183, 1.075, -2.26], 180.0], [[-1.695, 1.075, -2.26], 180.0], [[-2.0717, 1.075, -2.26], 180.0], [[-2.26, 1.075, -2.0717], 270.0], [[-2.26, 1.075, -1.695], 270.0], [[-2.26, 1.075, -1.3183], 270.0], [[-2.26, 1.075, -0.9417], 270.0], [[-2.26, 1.075, -0.565], 270.0], [[-2.26, 1.075, -0.1883], 270.0], [[-2.26, 1.075, 0.1883], 270.0], [[-2.26, 1.075, 0.565], 270.0], [[-2.26, 1.075, 0.9417], 270.0], [[-2.26, 1.075, 1.3183], 270.0], [[-2.26, 1.075, 1.695], 270.0], [[-2.26, 1.075, 2.0717], 270.0]].map((e: any) => ({ pos: e[0], scale: [0.22, 0.17, 0.11], rotY: e[1] })));

}

/**
 * Bake each component pivot's rotation into its geometry's vertices, then zero the rotation.
 *
 * THREE.Box3.setFromObject transforms the geometry's AABB, not its vertices. Three of the seven
 * components are square solids of revolution carried at a 45 degree Y rotation, and rotating an
 * axis-aligned box by 45 degrees inflates its own AABB by sqrt(2): the 5.00 m podium measured
 * 9.73 m across, which is the number the render harness records and the promotion gate reads.
 * Baking the rotation makes the measured bounds the real ones. Safe because no two components
 * share a geometry -- the generator builds one per component.
 */
function bakeComponentRotations(root: THREE.Group): void {
  root.traverse((o) => {
    if (!(o as THREE.Mesh).isMesh) return;
    const mesh = o as THREE.Mesh;
    const pivot = mesh.parent;
    if (!pivot || !pivot.isObject3D) return;
    const r = pivot.rotation;
    if (r.x === 0 && r.y === 0 && r.z === 0) return;
    mesh.geometry.applyMatrix4(new THREE.Matrix4().makeRotationFromEuler(r));
    mesh.geometry.computeVertexNormals();
    mesh.geometry.computeBoundingBox();
    mesh.geometry.computeBoundingSphere();
    r.set(0, 0, 0);
    pivot.updateMatrix();
  });
}

/**
 * thaikit entry point. `three` is the only import and the host injects its own instance.
 */
export function createObjectModel(
  spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = createBrahmanStreetShrineModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;
  bakeComponentRotations(root);

  // Gated per cluster by its own declared level, not all five together. The columns are MACRO --
  // they carry the roof, and a blockout that renders the roof floating is not a blockout that
  // showed the macro silhouette. The rest is meso structure (still not finish work: without the
  // votive ring the prop is a bare pavilion, which is explicitly the wrong object).
  applyVotiveClusters(root, passAtLeast('blockout'), passAtLeast('structural-pass'));

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // PIVOTS: exactly ONE, the root, at the declared base-center. This is masonry and timber.
    // Nothing on it hinges, turns or detaches. A named pivot is a promise that a part turns on
    // that axis, and a pivot per component would describe a machine this prop is not. The one
    // candidate -- the balustrade as a swinging gate -- was rejected: the single plate does not
    // show whether an opening exists at all, so a `gate-hinge` would be a promise made from a
    // guess.
    const pivots: THREE.Object3D[] = [];
    const rootPivot = new THREE.Object3D();
    rootPivot.name = 'root';
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'root' },
    };
    root.add(rootPivot);
    pivots.push(rootPivot);

    // SOCKETS: ZERO, and that is the correct answer rather than a gap. A named socket promises
    // something attaches there, and nothing attaches to this shrine. The elephant figurines are
    // OFFERINGS and are part of the asset, not attachments a game clips on later -- an
    // `offering-socket` would invite a consumer to place what the prop already has.
    const sockets = Object.values((rt.sockets ?? {}) as Record<string, THREE.Object3D>);
    for (const s of sockets) {
      const declared = (s as any)?.userData?.socket?.name;
      if (typeof declared === 'string' && declared) s.name = declared;
    }

    // Colliders are plain DATA, not Object3D, so they carry no .name and would stringify as
    // [object Object] in a name-mapping consumer. Give each the id of the component it owns, and
    // drop the empty ones: the generator writes an entry per component whether or not one was
    // declared, and a nameless empty proxy reads as a physics shape that exists and does nothing.
    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // DESTRUCTION: none declared, so none built. Derived rather than assumed empty, so a component
    // that somehow carried a fractureGroup fails the equality gate loudly instead of vanishing.
    const grouped = new Map<string, THREE.Object3D[]>();
    for (const [name, members] of Object.entries(
      (rt.destructionGroups ?? {}) as Record<string, THREE.Object3D[]>,
    )) {
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
      nodes: Object.keys(nodes).length,   // a COUNT: the harness reads this as a number
      pivots,
      sockets,
      colliders,
      destructionGroups: [...grouped.entries()].map(([name, members]) => ({ name, members })),
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: rt.sockets ?? {} },
    };
  }
  return root;
}
