import * as THREE from 'three';

export type ProceduralModelOptions = {
  /**
   * Where this prop's shipped files live, with a trailing slash.
   *
   * The maps are recorded as bare filenames because the bundle is EVALUATED
   * rather than imported: it has no import.meta and no currentScript, so it
   * cannot see its own URL. Every host derives this from the module URL.
   */
  baseUrl?: string;
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

// Generated from ObjectSculptSpec target: AIS Shop Building
// Sculpt build pass: optimization-pass
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createAISShopBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "AIS Shop Building";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"viewpoint": "three-quarter from the front-left, elevated above the parapet", "notes": "One plate only. The elevation is high enough to show the roof deck and plant, which is why the roof band carries usable evidence at all; it is also why the right side wall and the rear wall are unseen."}, "approximationNotes": []};
  root.userData.materialPipeline = {"schemaVersion": 1, "status": "proceed", "registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "analysisArtifact": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-analysis.json", "targetThreshold": 0.7, "unresolvedNotObservedMaterials": [], "regions": [{"componentId": "building-shell", "regionId": "render", "specMaterialId": "render-cream", "profileId": "plastic.matte", "status": "proceed"}, {"componentId": "roof-deck", "regionId": "concrete", "specMaterialId": "concrete-grey", "profileId": "stone.natural", "status": "proceed"}, {"componentId": "fascia-band", "regionId": "panel", "specMaterialId": "white-panel", "profileId": "coating.painted-metal", "status": "proceed"}, {"componentId": "fascia-sign", "regionId": "acrylic", "specMaterialId": "sign-green", "profileId": "plastic.glossy", "status": "proceed"}, {"componentId": "shopfront-glazing", "regionId": "glass", "specMaterialId": "glass-tinted", "profileId": "glass.clear", "status": "proceed"}, {"componentId": "shopfront-glazing", "regionId": "framing", "specMaterialId": "aluminium", "profileId": "metal.aluminum", "status": "proceed"}, {"componentId": "roof-deck", "regionId": "plant", "specMaterialId": "galvanised", "profileId": "metal.steel-brushed", "status": "proceed"}], "controlledViewsRequired": ["albedo-unlit", "backlight-transmission", "environment-reflection", "grazing", "neutral-studio", "reference-beauty"]};
  root.userData.materialReferenceRegistry = "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json";

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["render-cream"] = createSculptMaterial(
    "render-cream",
    {"id": "render-cream", "name": "Painted cement render", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#E4D2AC", "color": "#E4D2AC", "roughness": {"base": 0.88, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.680-0.702 for all seven materials on this plate -- a constant across matte render, gloss acrylic and mirror glass is the extractor's regression default, not a measurement, and taking it would have made the glazing as matte as the concrete.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately not bound: this material is textureless, and binding any map would force color to white and roughness to 1.", "map": "material-evidence/render-cream_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#E4D2AC", "secondary": ["#DCC9A0", "#E3CDA8"], "samplingNotes": "Sampled from the clean field of the -X side wall between the parapet and the service door (material-crops/render-cream.png, 186x200 px, PBR confidence 0.751, background #E1D0B8). The value falloff toward the front corner is the studio key and was excluded from the sample rather than averaged into it."}, "localOverrides": [{"id": "render-grime-streaks", "kind": "stain", "region": "the top 0.9 m of every wall, immediately below the coping, heaviest at the corners", "colorShift": "#B9A886", "roughnessDelta": 0.04, "coverage": 0.18, "confidence": 0.75, "evidenceRef": "region-side-wall", "notes": "Vertical run-off streaks below the coping drip. Carried as vertex-darkening in the hand-refinement pass, not as a texture, so the textureless declaration holds."}], "finishClass": "plastic", "clearcoat": {"base": 0.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.3, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.8, "anisotropy": {"base": 1.0}, "finishStyle": "flat exterior emulsion over cement render", "evidenceRefs": ["view-full", "region-side-wall"], "textureless": {"declared": true, "evidence": ["extract_pbr_evidence on material-crops/render-cream.png measures valueRange 0.080 and heightP90Gradient 0.0200 over a 186x200 px field: no high-frequency component survives at plate resolution, and the extractor itself warns 'low high-frequency detail weakens normal/roughness inference'.", "Painted cement render is flat paint at prop distance; its tooth is finer than one texel of an 8 m wall seen from across a street."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript, at a cost that is the SQUARE of textureResolution; seven materials at 1024 would cost roughly 13 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a cream building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves of the declaration."}, "referenceMaterialId": "plastic.matte", "materialFamily": "plastic", "materialSubtype": "generic-polymer", "materialFinish": "matte", "materialReference": {"registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "profileId": "plastic.matte", "method": "family-subtype-finish", "confidence": 0.751, "sourceRefs": ["three.mesh-standard", "adobe.pbr-guide-1", "google.filament-pbr", "mit.material-recognition"], "requiredMaps": ["map", "roughnessMap"], "optionalMaps": ["normalMap", "aoMap"], "validationViews": ["albedo-unlit", "neutral-studio", "grazing"]}, "textureAnalysis": {"finishClass": "painted-metal", "recipe": {"metalness": 0.0, "roughness": 0.5, "clearcoat": 1.0, "clearcoatRoughness": 0.05, "transmission": 0.0, "ior": 1.5, "envMapIntensity": 1.0, "anisotropy": 0.0, "procedural": "flat-clearcoat"}, "palette": ["#E4CEA9", "#E3CDA8", "#DFCAA4", "#DCC9A0", "#D4CBBA"], "paletteHueRisk": [], "gradientAxis": "horizontal", "stats": {"meanLum": 205.0, "meanSaturation": 0.26, "gradientStrength": 0.079, "mottle": 0.005, "streakRatio": 1.53, "hueSpread": 0.0, "specularFraction": 0.0}}, "materialEvidence": {"componentId": "building-shell", "regionId": "render", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/00-render.png", "bbox": {"x": 196, "y": 470, "width": 186, "height": 200}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0355}, "observations": ["chromatic base-colour response", "single-image PBR inference requires controlled render validation"], "hypothesis": {"componentId": "building-shell", "regionId": "render", "materialId": null, "family": "plastic", "subtype": "generic-polymer", "finish": "matte", "aliases": [], "confidence": 0.751, "source": "vision"}, "alternatives": []}, "materialPipelineNote": "material_region_analysis + apply_material_analysis were run and their PROVENANCE is kept -- materialFamily/Subtype/Finish, referenceMaterialId, materialReference, materialEvidence and textureAnalysis all come from that chain, and this material's region resolved to its canonical profile with status 'proceed'. What was NOT kept: the chain also wrote textureResolution, referencePbr and textureProjection onto every material, and overwrote the authored roughness and metalness with the profile's generic priors. Both were reverted deliberately. The three texture keys directly contradict the textureless declaration, and the validator enforces both halves of it; keeping them would make createSculptMaterial synthesise five canvases per material and -- worse -- force color to white and roughness to 1 and read both from the generated maps, discarding the measured albedo. The scalar priors would also have re-raised aluminium and galvanised metalness to bare-metal values, which render near-black in a harness with no environment map. The profile is evidence about what KIND of surface this is; it is not a measurement of this one."},
    options
  );
  materialMap["concrete-grey"] = createSculptMaterial(
    "concrete-grey",
    {"id": "concrete-grey", "name": "Concrete roof deck and shopfront kerb", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#8C8F92", "color": "#8C8F92", "roughness": {"base": 0.92, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.680-0.702 for all seven materials on this plate -- a constant across matte render, gloss acrylic and mirror glass is the extractor's regression default, not a measurement, and taking it would have made the glazing as matte as the concrete.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately not bound: this material is textureless, and binding any map would force color to white and roughness to 1.", "map": "material-evidence/concrete-grey_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#8C8F92", "secondary": ["#969A9B", "#818587"], "samplingNotes": "Sampled from the roof deck inside the parapet (material-crops/concrete-grey.png, 96x26 px, PBR confidence 0.793, background #96999C). Shared with the shopfront kerb, which the plate shows as the same grey concrete."}, "localOverrides": [{"id": "deck-weather-wash", "kind": "stain", "region": "roof deck, pooling along the parapet's inner foot", "colorShift": "#7F8285", "roughnessDelta": 0.03, "coverage": 0.3, "confidence": 0.65, "evidenceRef": "region-roof-deck", "notes": "Darker wash where rainwater stands against the upstand."}], "finishClass": "stone", "clearcoat": {"base": 0.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.3, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.8, "anisotropy": {"base": 1.0}, "finishStyle": "untreated fair-faced concrete, matte", "evidenceRefs": ["region-roof-deck", "region-kerb"], "textureless": {"declared": true, "evidence": ["heightP90Gradient 0.0242 on material-crops/concrete-grey.png. The valueRange of 0.475 is the parapet's cast shadow crossing the deck, not surface relief -- confirmed by the flat height gradient beside it.", "The deck is seen only from above the parapet line and the kerb is 0.15 m tall; neither resolves aggregate at prop distance."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript, at a cost that is the SQUARE of textureResolution; seven materials at 1024 would cost roughly 13 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a cream building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves of the declaration."}, "referenceMaterialId": "stone.natural", "materialFamily": "stone", "materialSubtype": "natural", "materialFinish": "rough-or-polished", "materialReference": {"registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "profileId": "stone.natural", "method": "family-subtype-finish", "confidence": 0.793, "sourceRefs": ["three.mesh-standard", "three.mesh-physical", "adobe.pbr-guide-1", "mit.material-recognition"], "requiredMaps": ["map", "roughnessMap", "normalMap"], "optionalMaps": ["aoMap", "displacementMap", "clearcoatMap"], "validationViews": ["albedo-unlit", "neutral-studio", "grazing", "reference-beauty"]}, "textureAnalysis": {"finishClass": "worn-composite", "recipe": {"metalness": 0.0, "roughness": 0.9, "clearcoat": 0.0, "clearcoatRoughness": 0.0, "transmission": 0.0, "ior": 1.5, "envMapIntensity": 0.5, "anisotropy": 0.0, "procedural": "mottle"}, "palette": ["#ACB0B2", "#767B7D", "#7E8385", "#848687", "#787A7B"], "paletteHueRisk": [], "gradientAxis": "horizontal", "stats": {"meanLum": 134.6, "meanSaturation": 0.046, "gradientStrength": 0.248, "mottle": 0.022, "streakRatio": 1.02, "hueSpread": 0.0, "specularFraction": 0.0}}, "materialEvidence": {"componentId": "roof-deck", "regionId": "concrete", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/01-concrete.png", "bbox": {"x": 438, "y": 292, "width": 96, "height": 26}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0024}, "observations": ["near-neutral colour response", "strong image-space gradient; verify it is material pattern, not lighting", "single-image PBR inference requires controlled render validation"], "hypothesis": {"componentId": "roof-deck", "regionId": "concrete", "materialId": null, "family": "stone", "subtype": "natural", "finish": "rough-or-polished", "aliases": [], "confidence": 0.793, "source": "vision"}, "alternatives": []}, "materialPipelineNote": "material_region_analysis + apply_material_analysis were run and their PROVENANCE is kept -- materialFamily/Subtype/Finish, referenceMaterialId, materialReference, materialEvidence and textureAnalysis all come from that chain, and this material's region resolved to its canonical profile with status 'proceed'. What was NOT kept: the chain also wrote textureResolution, referencePbr and textureProjection onto every material, and overwrote the authored roughness and metalness with the profile's generic priors. Both were reverted deliberately. The three texture keys directly contradict the textureless declaration, and the validator enforces both halves of it; keeping them would make createSculptMaterial synthesise five canvases per material and -- worse -- force color to white and roughness to 1 and read both from the generated maps, discarding the measured albedo. The scalar priors would also have re-raised aluminium and galvanised metalness to bare-metal values, which render near-black in a harness with no environment map. The profile is evidence about what KIND of surface this is; it is not a measurement of this one.", "albedoCorrection": "material_comparator measured deltaE00 11.912, plate crop mean (131,136,137) against render (169,173,175) and classified it 'wrong-exposure-or-value'. Darkened from #9A9DA0."},
    options
  );
  materialMap["white-panel"] = createSculptMaterial(
    "white-panel",
    {"id": "white-panel", "name": "Painted composite fascia panel", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#EDEFEF", "color": "#EDEFEF", "roughness": {"base": 0.42, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.680-0.702 for all seven materials on this plate -- a constant across matte render, gloss acrylic and mirror glass is the extractor's regression default, not a measurement, and taking it would have made the glazing as matte as the concrete.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately not bound: this material is textureless, and binding any map would force color to white and roughness to 1.", "map": "material-evidence/white-panel_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#EDEFEF", "secondary": ["#DCE0E1", "#C8CDCA"], "samplingNotes": "Sampled from the fascia band's left return, clear of the sign tray (material-crops/white-panel.png, 52x134 px, PBR confidence 0.790, background #DCE0E1). A first crop taken as a horizontal strip below the sign was DISCARDED: perspective carried its right-hand end onto the glazing, and it measured rgb(119,127,111) -- a green-grey that is not the fascia at all. It raised the confidence score while sampling the wrong surface, which is exactly the failure the material rules warn about."}, "localOverrides": [], "finishClass": "plastic", "clearcoat": {"base": 0.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.3, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.8, "anisotropy": {"base": 1.0}, "finishStyle": "satin painted aluminium composite panel", "evidenceRefs": ["region-fascia"], "textureless": {"declared": true, "evidence": ["valueRange 0.138 and heightP90Gradient 0.0143 on material-crops/white-panel.png: a flat sheet with a broad soft highlight and no relief.", "A factory-finished composite panel has no texture to resolve; its identity is the satin specular lobe, which the roughness scalar carries."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript, at a cost that is the SQUARE of textureResolution; seven materials at 1024 would cost roughly 13 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a cream building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves of the declaration."}, "referenceMaterialId": "coating.painted-metal", "materialFamily": "coating", "materialSubtype": "paint-over-metal", "materialFinish": "gloss-or-satin", "materialReference": {"registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "profileId": "coating.painted-metal", "method": "family-subtype-finish", "confidence": 0.831, "sourceRefs": ["three.mesh-physical", "gltf.2", "khronos.gltf-pbr", "adobe.pbr-guide-1", "adobe.pbr-guide-2"], "requiredMaps": ["map", "roughnessMap"], "optionalMaps": ["normalMap", "clearcoatMap", "clearcoatRoughnessMap", "metalnessMap"], "validationViews": ["albedo-unlit", "neutral-studio", "grazing", "environment-reflection", "reference-beauty"]}, "textureAnalysis": {"finishClass": "plastic", "recipe": {"metalness": 0.05, "roughness": 0.6, "clearcoat": 0.2, "clearcoatRoughness": 0.3, "transmission": 0.0, "ior": 1.5, "envMapIntensity": 0.7, "anisotropy": 0.0, "procedural": "flat-clearcoat"}, "palette": ["#D0D4D3", "#CDD1D0", "#C8CDCA", "#BFC4BF", "#AEB3AD"], "paletteHueRisk": [], "gradientAxis": "horizontal", "stats": {"meanLum": 198.5, "meanSaturation": 0.026, "gradientStrength": 0.133, "mottle": 0.002, "streakRatio": 0.69, "hueSpread": 0.0, "specularFraction": 0.0}}, "materialEvidence": {"componentId": "fascia-band", "regionId": "panel", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/02-panel.png", "bbox": {"x": 404, "y": 398, "width": 52, "height": 134}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0066}, "observations": ["near-neutral colour response", "single-image PBR inference requires controlled render validation"], "hypothesis": {"componentId": "fascia-band", "regionId": "panel", "materialId": null, "family": "coating", "subtype": "paint-over-metal", "finish": "gloss-or-satin", "aliases": [], "confidence": 0.831, "source": "vision"}, "alternatives": []}, "materialPipelineNote": "material_region_analysis + apply_material_analysis were run and their PROVENANCE is kept -- materialFamily/Subtype/Finish, referenceMaterialId, materialReference, materialEvidence and textureAnalysis all come from that chain, and this material's region resolved to its canonical profile with status 'proceed'. What was NOT kept: the chain also wrote textureResolution, referencePbr and textureProjection onto every material, and overwrote the authored roughness and metalness with the profile's generic priors. Both were reverted deliberately. The three texture keys directly contradict the textureless declaration, and the validator enforces both halves of it; keeping them would make createSculptMaterial synthesise five canvases per material and -- worse -- force color to white and roughness to 1 and read both from the generated maps, discarding the measured albedo. The scalar priors would also have re-raised aluminium and galvanised metalness to bare-metal values, which render near-black in a harness with no environment map. The profile is evidence about what KIND of surface this is; it is not a measurement of this one."},
    options
  );
  materialMap["sign-green"] = createSculptMaterial(
    "sign-green",
    {"id": "sign-green", "name": "AIS illuminated sign face", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#8FC72C", "color": "#8FC72C", "roughness": {"base": 0.28, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.680-0.702 for all seven materials on this plate -- a constant across matte render, gloss acrylic and mirror glass is the extractor's regression default, not a measurement, and taking it would have made the glazing as matte as the concrete.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately not bound: this material is textureless, and binding any map would force color to white and roughness to 1.", "map": "material-evidence/sign-green_roughness.png"}, "metalness": 0.0, "albedo": {"dominant": "#8FC72C", "secondary": ["#A5CD1B", "#98C91E"], "samplingNotes": "Sampled from the clean green field left of the swoosh (material-crops/sign-green.png, 70x38 px, background #A0CB1F, sd 6.7/2.6/2.4). The measured #A0CB1F is BRIGHTER than the authored albedo on purpose: this is an internally lit lightbox, so part of the observed value is emission. Baking it into base colour would be baked lighting in albedo. The emission is carried separately as an emissive term instead."}, "localOverrides": [], "finishClass": "plastic", "clearcoat": {"base": 0.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.3, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.8, "anisotropy": {"base": 1.0}, "finishStyle": "gloss translucent acrylic lightbox face", "evidenceRefs": ["region-fascia-sign"], "textureless": {"declared": true, "evidence": ["extract_pbr_evidence returns confidence 0.665 -- BELOW the 0.7 threshold -- with valueRange 0.080, heightP90Gradient 0.00885 and normalStrength 0.167, the flattest of the seven crops. Its own warnings are 'low value range weakens height/roughness inference' and 'low high-frequency detail weakens normal/roughness inference'. On a moulded acrylic lightbox face that shortfall is the EVIDENCE FOR textureless, not a signal to widen the crop until noise appears: the extractor is reporting that there is no texture there, which is correct.", "The only pattern on this face is the printed AIS mark, which is a canvas applied AFTER material construction and is unaffected by this declaration."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript, at a cost that is the SQUARE of textureResolution; seven materials at 1024 would cost roughly 13 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a cream building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves of the declaration."}, "emissive": {"color": "#3E6A10", "intensity": 0.35, "notes": "Internally lit acrylic lightbox. Applied in the hand-refinement pass after material construction so the authored albedo survives."}, "referenceMaterialId": "plastic.glossy", "materialFamily": "plastic", "materialSubtype": "generic-polymer", "materialFinish": "glossy", "materialReference": {"registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "profileId": "plastic.glossy", "method": "family-subtype-finish", "confidence": 0.72, "sourceRefs": ["three.mesh-physical", "three.mesh-standard", "adobe.pbr-guide-1", "google.filament-pbr", "mit.material-recognition"], "requiredMaps": ["map", "roughnessMap"], "optionalMaps": ["normalMap", "clearcoatMap"], "validationViews": ["neutral-studio", "grazing", "environment-reflection", "reference-beauty"]}, "textureAnalysis": {"finishClass": "painted-metal", "recipe": {"metalness": 0.0, "roughness": 0.5, "clearcoat": 1.0, "clearcoatRoughness": 0.05, "transmission": 0.0, "ior": 1.5, "envMapIntensity": 1.0, "anisotropy": 0.0, "procedural": "flat-clearcoat"}, "palette": ["#92C51F", "#9AC91F", "#A0CC1C", "#A3CD1B", "#A5CC19"], "paletteHueRisk": [], "gradientAxis": "vertical", "stats": {"meanLum": 170.8, "meanSaturation": 0.858, "gradientStrength": 0.038, "mottle": 0.001, "streakRatio": 0.88, "hueSpread": 0.001, "specularFraction": 0.0}}, "materialEvidence": {"componentId": "fascia-sign", "regionId": "acrylic", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/03-acrylic.png", "bbox": {"x": 510, "y": 412, "width": 70, "height": 38}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0025}, "observations": ["chromatic base-colour response", "single-image PBR inference requires controlled render validation"], "hypothesis": {"componentId": "fascia-sign", "regionId": "acrylic", "materialId": null, "family": "plastic", "subtype": "generic-polymer", "finish": "glossy", "aliases": [], "confidence": 0.72, "source": "vision"}, "alternatives": []}, "materialPipelineNote": "material_region_analysis + apply_material_analysis were run and their PROVENANCE is kept -- materialFamily/Subtype/Finish, referenceMaterialId, materialReference, materialEvidence and textureAnalysis all come from that chain, and this material's region resolved to its canonical profile with status 'proceed'. What was NOT kept: the chain also wrote textureResolution, referencePbr and textureProjection onto every material, and overwrote the authored roughness and metalness with the profile's generic priors. Both were reverted deliberately. The three texture keys directly contradict the textureless declaration, and the validator enforces both halves of it; keeping them would make createSculptMaterial synthesise five canvases per material and -- worse -- force color to white and roughness to 1 and read both from the generated maps, discarding the measured albedo. The scalar priors would also have re-raised aluminium and galvanised metalness to bare-metal values, which render near-black in a harness with no environment map. The profile is evidence about what KIND of surface this is; it is not a measurement of this one."},
    options
  );
  materialMap["glass-tinted"] = createSculptMaterial(
    "glass-tinted",
    {"id": "glass-tinted", "name": "Tinted shopfront glazing", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#7E8C94", "color": "#7E8C94", "roughness": {"base": 0.08, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.680-0.702 for all seven materials on this plate -- a constant across matte render, gloss acrylic and mirror glass is the extractor's regression default, not a measurement, and taking it would have made the glazing as matte as the concrete.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately not bound: this material is textureless, and binding any map would force color to white and roughness to 1.", "map": "material-evidence/glass-tinted_roughness.png"}, "metalness": 0.05, "albedo": {"dominant": "#7E8C94", "secondary": ["#5B5C57", "#454641"], "samplingNotes": "AUTHORED, not sampled, and this is deliberate. The crop (material-crops/glass-tinted.png, 34x72 px, PBR confidence 0.793) measures rgb(84,85,81) -- but every one of those pixels is the shop INTERIOR seen through the pane, and this prop is an exterior shell with nothing behind the glass. Sampling it would reproduce a photograph of a room that does not exist in the model. The authored blue-grey is the pane's own tint."}, "localOverrides": [], "finishClass": "glass", "clearcoat": {"base": 0.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.3, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.5, "anisotropy": {"base": 1.0}, "finishStyle": "tinted architectural glass, mostly opaque surface", "evidenceRefs": ["region-glazing"], "textureless": {"declared": true, "evidence": ["The pane is a flat float-glass surface: heightP90Gradient 0.0315 on the crop is the mullion edge crossing it, not relief on the glass.", "Glass identity is the specular lobe and the tint, both carried by scalars. A procedural texture set here would force color to white and roughness to 1 and destroy exactly the two properties that make it read as glass."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript, at a cost that is the SQUARE of textureResolution; seven materials at 1024 would cost roughly 13 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a cream building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves of the declaration."}, "metalnessNote": "Also reduced, for the same no-environment-map reason, though less far: the pane is a dielectric and its 0.08 roughness is what carries the highlight, not its metalness.", "referenceMaterialId": "glass.clear", "materialFamily": "glass", "materialSubtype": "clear", "materialFinish": "polished", "materialReference": {"registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "profileId": "glass.clear", "method": "family-subtype-finish", "confidence": 0.793, "sourceRefs": ["three.mesh-physical", "three.pmrem", "gltf.2", "khronos.transmission", "khronos.volume", "google.filament-pbr"], "requiredMaps": ["roughnessMap", "thicknessMap"], "optionalMaps": ["map", "normalMap", "transmissionMap"], "validationViews": ["neutral-studio", "environment-reflection", "backlight-transmission", "reference-beauty"]}, "textureAnalysis": {"finishClass": "worn-composite", "recipe": {"metalness": 0.0, "roughness": 0.9, "clearcoat": 0.0, "clearcoatRoughness": 0.0, "transmission": 0.0, "ior": 1.5, "envMapIntensity": 0.5, "anisotropy": 0.0, "procedural": "mottle"}, "palette": ["#52524C", "#4D4E49", "#4C4D47", "#434643", "#464947"], "paletteHueRisk": [], "gradientAxis": "horizontal", "stats": {"meanLum": 85.0, "meanSaturation": 0.069, "gradientStrength": 0.549, "mottle": 0.023, "streakRatio": 6.14, "hueSpread": 0.0, "specularFraction": 0.0}}, "materialEvidence": {"componentId": "shopfront-glazing", "regionId": "glass", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/04-glass.png", "bbox": {"x": 700, "y": 600, "width": 34, "height": 72}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0023}, "observations": ["near-neutral colour response", "directional surface frequency", "strong image-space gradient; verify it is material pattern, not lighting", "single-image PBR inference requires controlled render validation"], "hypothesis": {"componentId": "shopfront-glazing", "regionId": "glass", "materialId": null, "family": "glass", "subtype": "clear", "finish": "polished", "aliases": [], "confidence": 0.793, "source": "vision"}, "alternatives": []}, "needsEnvironment": true, "materialPipelineNote": "material_region_analysis + apply_material_analysis were run and their PROVENANCE is kept -- materialFamily/Subtype/Finish, referenceMaterialId, materialReference, materialEvidence and textureAnalysis all come from that chain, and this material's region resolved to its canonical profile with status 'proceed'. What was NOT kept: the chain also wrote textureResolution, referencePbr and textureProjection onto every material, and overwrote the authored roughness and metalness with the profile's generic priors. Both were reverted deliberately. The three texture keys directly contradict the textureless declaration, and the validator enforces both halves of it; keeping them would make createSculptMaterial synthesise five canvases per material and -- worse -- force color to white and roughness to 1 and read both from the generated maps, discarding the measured albedo. The scalar priors would also have re-raised aluminium and galvanised metalness to bare-metal values, which render near-black in a harness with no environment map. The profile is evidence about what KIND of surface this is; it is not a measurement of this one.", "albedoCorrection": "material_comparator measured deltaE00 23.69, plate crop mean (83,84,80) against render (131,143,150), classified 'wrong-base-color' and 'wrong-exposure-or-value'. The glazing read far lighter than the plate. Darkened to #6B767E. The correction is applied to the CANVAS field rather than to material.color, because the map now owns the albedo and the colour slot is white; putting it back on material.color would multiply twice. It is also deliberately not taken all the way to the plate's measured value: those pixels are the shop INTERIOR seen through the pane, and this prop is an exterior shell, so matching them exactly would darken the glass to reproduce a room that does not exist and turn the shopfront back into the hole this material exists to avoid."},
    options
  );
  materialMap["aluminium"] = createSculptMaterial(
    "aluminium",
    {"id": "aluminium", "name": "Mill-finish aluminium shopfront framing", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#8E9294", "color": "#8E9294", "roughness": {"base": 0.38, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.680-0.702 for all seven materials on this plate -- a constant across matte render, gloss acrylic and mirror glass is the extractor's regression default, not a measurement, and taking it would have made the glazing as matte as the concrete.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately not bound: this material is textureless, and binding any map would force color to white and roughness to 1.", "map": "material-evidence/aluminium_roughness.png"}, "metalness": 0.35, "albedo": {"dominant": "#8E9294", "secondary": ["#ACB1B1", "#B2B7B6"], "samplingNotes": "Sampled from a single mullion (material-crops/aluminium.png, 9x150 px, PBR confidence 0.761). Recorded as CORROBORATING rather than decisive: at 1024 px across an 8 m building a 0.06 m mullion is about 9 px wide, at the edge of what the plate resolves, and the crop's sd of ~37 is glass bleeding in at both edges. The neutral mid-high value it returns agrees with mill-finish aluminium, so the authored scalars are held."}, "localOverrides": [], "finishClass": "metal", "clearcoat": {"base": 0.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.3, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.5, "anisotropy": {"base": 1.0}, "finishStyle": "satin mill-finish anodised aluminium", "evidenceRefs": ["region-glazing", "region-framing"], "textureless": {"declared": true, "evidence": ["heightP90Gradient 0.0154 on material-crops/aluminium.png; the valueRange of 0.475 is dark glass either side of the member, not brushing on the metal.", "Mill finish carries a faint linear brush that is well under one texel at prop distance; the anisotropic highlight is what reads, and that is a scalar."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript, at a cost that is the SQUARE of textureResolution; seven materials at 1024 would cost roughly 13 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a cream building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves of the declaration."}, "metalnessNote": "LOWERED from the physically-correct bare-metal value after the structural-pass render. A metalness near 1 has almost no diffuse term and gets its entire appearance from what it REFLECTS; thaikit's render harness lights analytically -- a hemisphere and three directional lights, no environment map and no PMREM -- so there is nothing to reflect and the surface renders near-black. The structural-pass render showed the condensers and duct as black boxes. This is not a harness quirk to work around either: this is a browser FPS prop for low-end integrated GPUs, where a level's lighting is very often analytic for the same performance reason, so a material that only reads under IBL is the wrong choice for the kit. The sibling 7-Eleven capped its aluminium at 0.35 and its galvanised at 0.30 for this exact reason. Roughness is nudged up with it so the specular lobe still carries the finish.", "referenceMaterialId": "metal.aluminum", "materialFamily": "metal", "materialSubtype": "aluminum", "materialFinish": "satin", "materialReference": {"registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "profileId": "metal.aluminum", "method": "family-subtype-finish", "confidence": 0.794, "sourceRefs": ["three.mesh-standard", "three.pmrem", "gltf.2", "khronos.gltf-pbr", "adobe.pbr-guide-2", "google.filament-pbr"], "optionalMaps": ["normalMap", "anisotropyMap"], "validationViews": ["neutral-studio", "environment-reflection", "grazing"], "requiredMapsWaived": ["map", "roughnessMap"]}, "textureAnalysis": {"finishClass": "plastic", "recipe": {"metalness": 0.05, "roughness": 0.6, "clearcoat": 0.2, "clearcoatRoughness": 0.3, "transmission": 0.0, "ior": 1.5, "envMapIntensity": 0.7, "anisotropy": 0.0, "procedural": "flat-clearcoat"}, "palette": ["#343732", "#434744", "#ACB1B1", "#818480", "#6F7069"], "paletteHueRisk": [], "gradientAxis": "horizontal", "stats": {"meanLum": 121.8, "meanSaturation": 0.063, "gradientStrength": 0.529, "mottle": 0.016, "streakRatio": 0.78, "hueSpread": 0.021, "specularFraction": 0.0}}, "materialEvidence": {"componentId": "shopfront-glazing", "regionId": "framing", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/05-framing.png", "bbox": {"x": 596, "y": 560, "width": 18, "height": 150}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0026}, "observations": ["near-neutral colour response", "strong image-space gradient; verify it is material pattern, not lighting", "single-image PBR inference requires controlled render validation"], "hypothesis": {"componentId": "shopfront-glazing", "regionId": "framing", "materialId": null, "family": "metal", "subtype": "aluminum", "finish": "satin", "aliases": [], "confidence": 0.794, "source": "vision"}, "alternatives": []}, "needsEnvironment": true, "materialPipelineNote": "material_region_analysis + apply_material_analysis were run and their PROVENANCE is kept -- materialFamily/Subtype/Finish, referenceMaterialId, materialReference, materialEvidence and textureAnalysis all come from that chain, and this material's region resolved to its canonical profile with status 'proceed'. What was NOT kept: the chain also wrote textureResolution, referencePbr and textureProjection onto every material, and overwrote the authored roughness and metalness with the profile's generic priors. Both were reverted deliberately. The three texture keys directly contradict the textureless declaration, and the validator enforces both halves of it; keeping them would make createSculptMaterial synthesise five canvases per material and -- worse -- force color to white and roughness to 1 and read both from the generated maps, discarding the measured albedo. The scalar priors would also have re-raised aluminium and galvanised metalness to bare-metal values, which render near-black in a harness with no environment map. The profile is evidence about what KIND of surface this is; it is not a measurement of this one.", "albedoCorrection": "Darkened #B6BABB -> #A5A9AA -> #8E9294 over the material_comparator rounds, and the last step was taken on APPEARANCE rather than on the metric: side by side the rendered mullions read near-white against the plate's mid-grey. The metric itself is only partly usable here and the limit is stated rather than chased. A 0.06 m mullion is about 9 px on a 1024 plate, so no crop isolates it -- the comparator masked one render crop down to 22% coverage and kept the flanking GLASS rather than the metal, and it warns 'foreground mask is tiny; material extraction is likely unreliable' on the plate side. The plate's framing is also genuinely darker than any correct albedo would make it, because it is backlit by a dim shop interior that this exterior shell does not have. Driving deltaE to zero against that crop would mean baking the plate's lighting into base colour, which the material rules forbid outright. So the value is set to the darkest reading that is still an albedo, and the residual gap is reported.", "profileDeviation": "The canonical profile resolved for this material (metal.aluminum) declares requiredMaps, and the compatibility check then fails it for having no UV/textureProjection contract. The requirement is waived here, recorded rather than deleted, for two reasons that are both properties of this pipeline rather than oversights. FIRST, img2threejs emits CODE and no textures: there is no baked map to bind, the material is declared textureless on measured evidence, and adding a textureProjection to satisfy the check would re-enable makeProceduralTextureSet and force color to white and roughness to 1 -- destroying the very albedo this material pass spent its rounds measuring. SECOND, the profile is evidence about what KIND of surface this is -- it is what let the region resolve at 0.79 and 0.86 confidence -- and its map list describes a photoreal metal workflow, not a low-end-GPU browser prop. This material is also bound to no componentTree entry by design: it is carried entirely by an InstancedMesh cluster, which the componentTree does not model, so no component could supply the uvContract the check looks for."},
    options
  );
  materialMap["galvanised"] = createSculptMaterial(
    "galvanised",
    {"id": "galvanised", "name": "Galvanised steel rooftop plant", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#7C7A74", "color": "#7C7A74", "roughness": {"base": 0.55, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.680-0.702 for all seven materials on this plate -- a constant across matte render, gloss acrylic and mirror glass is the extractor's regression default, not a measurement, and taking it would have made the glazing as matte as the concrete.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately not bound: this material is textureless, and binding any map would force color to white and roughness to 1.", "map": "material-evidence/galvanised_roughness.png"}, "metalness": 0.3, "albedo": {"dominant": "#7C7A74", "secondary": ["#978B7B", "#7C7366"], "samplingNotes": "Sampled from a condenser casing (material-crops/galvanised.png, 72x52 px, PBR confidence 0.807 -- the highest of the seven). The measured palette skews warm (#978B7B) from rust staining; the authored albedo is the neutral zinc value and the staining is carried as a localOverride rather than averaged into base colour."}, "localOverrides": [{"id": "plant-rust-staining", "kind": "stain", "region": "lower third of each condenser casing and the duct's underside", "colorShift": "#8A7B68", "roughnessDelta": 0.1, "coverage": 0.25, "confidence": 0.7, "evidenceRef": "region-roof-plant", "notes": "Warm rust bloom measured in the crop palette (#978B7B, #7C7366) and deliberately kept OUT of base colour so the zinc stays neutral."}], "finishClass": "metal", "clearcoat": {"base": 0.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.3, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.5, "anisotropy": {"base": 1.0}, "finishStyle": "hot-dip galvanised steel, semi-matte with weathering", "evidenceRefs": ["region-roof-plant"], "textureless": {"declared": true, "evidence": ["heightP90Gradient 0.00692 -- the LOWEST of the seven crops -- on a surface whose valueRange of 0.519 comes entirely from staining and cast shadow between units.", "The rooftop plant is visible only from above the parapet line. Spending five synthesised canvases on zinc spangle nobody in a first-person view will ever see is the clearest textureless case in this prop."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript, at a cost that is the SQUARE of textureResolution; seven materials at 1024 would cost roughly 13 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a cream building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves of the declaration."}, "metalnessNote": "LOWERED from the physically-correct bare-metal value after the structural-pass render. A metalness near 1 has almost no diffuse term and gets its entire appearance from what it REFLECTS; thaikit's render harness lights analytically -- a hemisphere and three directional lights, no environment map and no PMREM -- so there is nothing to reflect and the surface renders near-black. The structural-pass render showed the condensers and duct as black boxes. This is not a harness quirk to work around either: this is a browser FPS prop for low-end integrated GPUs, where a level's lighting is very often analytic for the same performance reason, so a material that only reads under IBL is the wrong choice for the kit. The sibling 7-Eleven capped its aluminium at 0.35 and its galvanised at 0.30 for this exact reason. Roughness is nudged up with it so the specular lobe still carries the finish.", "referenceMaterialId": "metal.steel-brushed", "materialFamily": "metal", "materialSubtype": "steel", "materialFinish": "brushed", "materialReference": {"registry": "/home/mulligan/.claude/skills/img2threejs/docs/materials/material-reference.json", "profileId": "metal.steel-brushed", "method": "family-subtype-finish", "confidence": 0.859, "sourceRefs": ["three.mesh-physical", "three.pmrem", "gltf.2", "khronos.gltf-pbr", "adobe.pbr-guide-2", "google.filament-pbr"], "optionalMaps": ["metalnessMap"], "validationViews": ["neutral-studio", "grazing", "environment-reflection", "reference-beauty"], "requiredMapsWaived": ["map", "roughnessMap", "normalMap", "anisotropyMap"]}, "textureAnalysis": {"finishClass": "worn-composite", "recipe": {"metalness": 0.0, "roughness": 0.9, "clearcoat": 0.0, "clearcoatRoughness": 0.0, "transmission": 0.0, "ior": 1.5, "envMapIntensity": 0.5, "anisotropy": 0.0, "procedural": "mottle"}, "palette": ["#786E61", "#6A6B6C", "#5C5E5C", "#6B6E6F", "#999E9C"], "paletteHueRisk": [], "gradientAxis": "horizontal", "stats": {"meanLum": 118.6, "meanSaturation": 0.061, "gradientStrength": 0.39, "mottle": 0.052, "streakRatio": 1.32, "hueSpread": 0.043, "specularFraction": 0.0}}, "materialEvidence": {"componentId": "roof-deck", "regionId": "plant", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/06-plant.png", "bbox": {"x": 600, "y": 248, "width": 72, "height": 52}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0036}, "observations": ["near-neutral colour response", "visible meso/micro variation", "strong image-space gradient; verify it is material pattern, not lighting", "single-image PBR inference requires controlled render validation"], "hypothesis": {"componentId": "roof-deck", "regionId": "plant", "materialId": null, "family": "metal", "subtype": "steel", "finish": "brushed", "aliases": [], "confidence": 0.859, "source": "vision"}, "alternatives": []}, "needsEnvironment": true, "materialPipelineNote": "material_region_analysis + apply_material_analysis were run and their PROVENANCE is kept -- materialFamily/Subtype/Finish, referenceMaterialId, materialReference, materialEvidence and textureAnalysis all come from that chain, and this material's region resolved to its canonical profile with status 'proceed'. What was NOT kept: the chain also wrote textureResolution, referencePbr and textureProjection onto every material, and overwrote the authored roughness and metalness with the profile's generic priors. Both were reverted deliberately. The three texture keys directly contradict the textureless declaration, and the validator enforces both halves of it; keeping them would make createSculptMaterial synthesise five canvases per material and -- worse -- force color to white and roughness to 1 and read both from the generated maps, discarding the measured albedo. The scalar priors would also have re-raised aluminium and galvanised metalness to bare-metal values, which render near-black in a harness with no environment map. The profile is evidence about what KIND of surface this is; it is not a measurement of this one.", "albedoCorrection": "Two rounds of material_comparator. Round 1 measured deltaE00 35.995 against the plate crop (mean rgb 99,92,81) and the value was taken from #A6ABAD to #909496; round 2 still measured 25.782, so it is taken to #7C7A74. The plate's rooftop plant is genuinely dark and warm -- it sits in the parapet's shade and carries rust staining -- and an earlier draft kept that warmth OUT of base colour on the principle that staining belongs in a localOverride. That principle is right for a generator that renders localOverrides, and this one does not: the override is declarative only, so insisting on it meant the observed staining appeared nowhere at all and the plant rendered as clean bright zinc. The override is kept as the record of WHY the value is warm; the value itself now lives where it can actually be seen.", "profileDeviation": "The canonical profile resolved for this material (metal.steel-brushed) declares requiredMaps, and the compatibility check then fails it for having no UV/textureProjection contract. The requirement is waived here, recorded rather than deleted, for two reasons that are both properties of this pipeline rather than oversights. FIRST, img2threejs emits CODE and no textures: there is no baked map to bind, the material is declared textureless on measured evidence, and adding a textureProjection to satisfy the check would re-enable makeProceduralTextureSet and force color to white and roughness to 1 -- destroying the very albedo this material pass spent its rounds measuring. SECOND, the profile is evidence about what KIND of surface this is -- it is what let the region resolve at 0.79 and 0.86 confidence -- and its map list describes a photoreal metal workflow, not a low-end-GPU browser prop. This material is also bound to no componentTree entry by design: it is carried entirely by an InstancedMesh cluster, which the componentTree does not model, so no component could supply the uvContract the check looks for."},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_building_shell_0 = makeAttachmentEndpoint(null);
  const node_building_shell_0 = new THREE.Group();
  node_building_shell_0.name = "Building shell: side and rear walls with parapet__pivot";
  node_building_shell_0.scale.set(1, 1, 1);
  if (endpoint_building_shell_0) {
    node_building_shell_0.position.copy(endpoint_building_shell_0.start);
    node_building_shell_0.rotation.set(-1.5707963267948966, 0.0, 0.0);
  } else {
    node_building_shell_0.position.set(0.0, 0.0, 0.0);
    node_building_shell_0.rotation.set(-1.5707963267948966, 0.0, 0.0);
  }
  node_building_shell_0.userData.sculptComponent = {"id": "building-shell", "name": "Building shell: side and rear walls with parapet", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.88, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "The -X, -Z and +X walls are one continuous painted render surface and one extrusion. Splitting them into three components would spend three draw calls, for the life of the prop, to express one skin. The +Z wall is separate ONLY because a plan extrusion cannot carry a vertical opening, and the shopfront opening is the identity feature of the front elevation.", "geometryDescriptor": {"topologyIntent": "U-shaped footprint ring extruded 4.60 m upward: the -X, -Z and +X walls at 0.20 m thickness, open on +Z where the facade wall takes over. Hollow by construction. The parapet is the same extrusion continuing past the roof deck at 3.90 m -- it is NOT a separate proud element, because the plate shows one unbroken render surface from ground to coping.", "wallThickness": 0.2, "copingProfile": {"top": 4.6, "bottom": 4.46, "proudEachFace": 0.05, "chamfer": 0.02, "note": "Lighter cream-grey cap projecting proud of both parapet faces with a drip edge, measured off crops/side-wall.png at 0.85 confidence."}, "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.012, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Eight profile points, one extrusion step: 8 side quads plus caps, about 60 triangles.", "profile2D": {"points": [[-4.0, -3.3], [-4.0, 3.5], [4.0, 3.5], [4.0, -3.3], [3.8, -3.3], [3.8, 3.3], [-3.8, 3.3], [-3.8, -3.3]], "depth": 4.52}, "shapeSpaceNote": "Profile is authored in (sx, sy) = (worldX, -worldZ). The component carries rotationEuler [-pi/2, 0, 0], mapping the shape plane onto the ground plane and the extrusion axis onto world +Y. Extrude components are NOT unit-scaled by the generator -- profile units are real metres, so these are the building's actual footprint coordinates.", "zFightingNote": "The U's open ends stop at sy=-3.30, which is worldZ=+3.30 -- the facade wall's BACK face -- not at +3.50 where its front face is. Two surfaces in the same plane facing the SAME direction tear into interleaved triangles as the camera moves; this joint is instead a butt of OPPOSED faces, which is how solids are meant to meet. A first draft of this profile put the open ends at +3.50 and would have shipped the identical defect the sibling 7-Eleven had in eight places. The rear outer face at sy=+3.50 is worldZ=-3.50, so the footprint still comes out at exactly the declared 7.0 m.", "copingHandoffNote": "The walls stop at y=4.52 and the parapet COPING owns the top 0.16 m, ending at the declared 4.60 m. That split exists to avoid a z-fight, not for its own sake: a coping band laid on top of a wall that also reaches 4.60 puts two +Y faces in the same plane, which is the coincident co-facing case this prop has been careful about throughout. With the wall at 4.52 its top face is BURIED inside the coping's 4.44-4.60 span and only the coping's own top is exposed. Total height is unchanged at the declared 4.60 m."}, "parent": null, "attachment": null, "dimensions": {"width": 8.0, "height": 4.52, "depth": 7.0, "units": "meters", "confidence": 0.88}, "transform": {"position": [0, 0, 0], "rotationEuler": [-1.5707963267948966, 0, 0], "scale": [1, 1, 1], "rotation": [-1.5707963267948966, 0, 0]}, "material": "render-cream", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "parapet-coping", "kind": "ridge", "confidence": 0.85, "placement": {"yTop": 4.6, "yBottom": 4.44, "proudEachFace": 0.05}, "notes": "Lighter cream-grey cap standing 0.05 m proud of both parapet faces. BUILT, by the parapet-coping cluster, after the material-pass comparison showed the plate's cap reading clearly lighter than the wall while the model's parapet was a single flat cream. It carries the white-panel material, costs one draw call -- the prop's last -- and costs ZERO unique geometries because it shares the clusters' unit box.", "evidenceRef": "region-side-wall"}, {"id": "render-grime-streaks", "kind": "stain", "confidence": 0.75, "placement": {"yTop": 4.46, "yBottom": 3.55}, "notes": "Vertical run-off streaking below the coping drip, heaviest at the corners.", "evidenceRef": "region-side-wall"}, {"id": "side-door-reveal", "kind": "groove", "confidence": 0.85, "placement": {"wall": "-X", "z": 1.15, "leaf": [0.9, 2.1]}, "notes": "Service door on the -X wall, read as a shadow reveal around the leaf. Built by the side-wall-fittings cluster as a proud architrave with a less-proud leaf; see that system's rationale for the stated relief deviation.", "evidenceRef": "region-side-wall"}], "surfaceDetail": {"macroRoughness": 0.1, "microRoughness": 0.3, "bumpAmplitude": 0.2, "normalPattern": "cement render tooth, uniform across the wall field", "displacementPattern": "", "occlusionPattern": "soft occlusion in the parapet's inner corner and under the coping drip", "edgeWearPattern": "clean - a maintained shopfront, no edge wear on the render", "notes": "Carried by the roughness scalar and the grime localOverride, not by geometry."}, "evidenceRefs": ["view-full", "region-side-wall"], "details": ["parapet-coping", "render-grime-streaks"], "fidelityTier": "primary", "actionProfile": {"animationRole": "root", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "root", "notes": "base-center, as the asset declares. The building is a static shell; this is its only rigid-body pivot and the prop has no articulated part."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [{"name": "sign-mount", "localPosition": [0, 3.47, 3.5], "axis": [0, 0, 1], "confidence": 0.9, "notes": "Where the brand fascia attaches. This is the prop's ONLY socket and it is a real mechanism with a real consumer, not a marker named after a place on the surface: the kit's branded shops share this identical 8.0 x 4.6 x 7.0 m building module and differ essentially in the sign hung here, so a level builder swapping fascias relies on it. fascia-sign declares it as its attachment.parentSocket, so the contract is used inside the model as well as outside it."}], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}, "collider": {"type": "convex", "offset": [0, 2.3, 0], "scale": [4.0, 2.3, 3.5], "isTrigger": false, "notes": "Declared convex on the asset. The full walled envelope; the rooftop plant sits inside its vertical extent, so one convex hull covers the whole prop."}}, "colorMaterialRecipe": {"baseColor": {"hex": "#E4D2AC", "evidenceRef": "region-side-wall", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "field", "hex": "#E4D2AC", "coverage": 1.0, "evidenceRef": "region-side-wall"}], "finishStyle": "flat exterior emulsion over cement render", "materialRef": "render-cream", "dominantAlbedo": "rgba(228, 210, 172, 1.0)", "secondaryAlbedo": "rgba(228, 210, 172, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.9}, "uvContract": {"status": "unwrapped", "strategy": "generated procedural coordinates", "materialId": "render-cream"}, "materialRegions": [{"regionId": "render", "materialId": "render-cream", "profileId": "plastic.matte", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/00-render.png", "bbox": {"x": 196, "y": 470, "width": 186, "height": 200}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0355}}]};
  node_building_shell_0.userData.actionProfile = {"animationRole": "root", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "root", "notes": "base-center, as the asset declares. The building is a static shell; this is its only rigid-body pivot and the prop has no articulated part."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [{"name": "sign-mount", "localPosition": [0, 3.47, 3.5], "axis": [0, 0, 1], "confidence": 0.9, "notes": "Where the brand fascia attaches. This is the prop's ONLY socket and it is a real mechanism with a real consumer, not a marker named after a place on the surface: the kit's branded shops share this identical 8.0 x 4.6 x 7.0 m building module and differ essentially in the sign hung here, so a level builder swapping fascias relies on it. fascia-sign declares it as its attachment.parentSocket, so the contract is used inside the model as well as outside it."}], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}, "collider": {"type": "convex", "offset": [0, 2.3, 0], "scale": [4.0, 2.3, 3.5], "isTrigger": false, "notes": "Declared convex on the asset. The full walled envelope; the rooftop plant sits inside its vertical extent, so one convex hull covers the whole prop."}};
  (nodes["root"] ?? root).add(node_building_shell_0);
  nodes["building-shell"] = node_building_shell_0;
  const mesh_building_shell_0Geometry = endpoint_building_shell_0
    ? new THREE.CylinderGeometry(endpoint_building_shell_0.endRadius, endpoint_building_shell_0.baseRadius, endpoint_building_shell_0.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-4.0, -3.3], [-4.0, 3.5], [4.0, 3.5], [4.0, -3.3], [3.8, -3.3], [3.8, 3.3], [-3.8, 3.3], [-3.8, -3.3]], "depth": 4.52});
  if (!endpoint_building_shell_0) {
    mesh_building_shell_0Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_building_shell_0 = new THREE.Mesh(
    mesh_building_shell_0Geometry,
    materialMap["render-cream"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_building_shell_0.name = "Building shell: side and rear walls with parapet";
  if (endpoint_building_shell_0) {
    mesh_building_shell_0.position.copy(endpoint_building_shell_0.midpoint);
    mesh_building_shell_0.quaternion.copy(endpoint_building_shell_0.quaternion);
  }
  mesh_building_shell_0.castShadow = options.castShadow ?? true;
  mesh_building_shell_0.receiveShadow = options.receiveShadow ?? true;
  mesh_building_shell_0.userData.sculptComponent = {"id": "building-shell", "name": "Building shell: side and rear walls with parapet", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.88, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "The -X, -Z and +X walls are one continuous painted render surface and one extrusion. Splitting them into three components would spend three draw calls, for the life of the prop, to express one skin. The +Z wall is separate ONLY because a plan extrusion cannot carry a vertical opening, and the shopfront opening is the identity feature of the front elevation.", "geometryDescriptor": {"topologyIntent": "U-shaped footprint ring extruded 4.60 m upward: the -X, -Z and +X walls at 0.20 m thickness, open on +Z where the facade wall takes over. Hollow by construction. The parapet is the same extrusion continuing past the roof deck at 3.90 m -- it is NOT a separate proud element, because the plate shows one unbroken render surface from ground to coping.", "wallThickness": 0.2, "copingProfile": {"top": 4.6, "bottom": 4.46, "proudEachFace": 0.05, "chamfer": 0.02, "note": "Lighter cream-grey cap projecting proud of both parapet faces with a drip edge, measured off crops/side-wall.png at 0.85 confidence."}, "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.012, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Eight profile points, one extrusion step: 8 side quads plus caps, about 60 triangles.", "profile2D": {"points": [[-4.0, -3.3], [-4.0, 3.5], [4.0, 3.5], [4.0, -3.3], [3.8, -3.3], [3.8, 3.3], [-3.8, 3.3], [-3.8, -3.3]], "depth": 4.52}, "shapeSpaceNote": "Profile is authored in (sx, sy) = (worldX, -worldZ). The component carries rotationEuler [-pi/2, 0, 0], mapping the shape plane onto the ground plane and the extrusion axis onto world +Y. Extrude components are NOT unit-scaled by the generator -- profile units are real metres, so these are the building's actual footprint coordinates.", "zFightingNote": "The U's open ends stop at sy=-3.30, which is worldZ=+3.30 -- the facade wall's BACK face -- not at +3.50 where its front face is. Two surfaces in the same plane facing the SAME direction tear into interleaved triangles as the camera moves; this joint is instead a butt of OPPOSED faces, which is how solids are meant to meet. A first draft of this profile put the open ends at +3.50 and would have shipped the identical defect the sibling 7-Eleven had in eight places. The rear outer face at sy=+3.50 is worldZ=-3.50, so the footprint still comes out at exactly the declared 7.0 m.", "copingHandoffNote": "The walls stop at y=4.52 and the parapet COPING owns the top 0.16 m, ending at the declared 4.60 m. That split exists to avoid a z-fight, not for its own sake: a coping band laid on top of a wall that also reaches 4.60 puts two +Y faces in the same plane, which is the coincident co-facing case this prop has been careful about throughout. With the wall at 4.52 its top face is BURIED inside the coping's 4.44-4.60 span and only the coping's own top is exposed. Total height is unchanged at the declared 4.60 m."}, "parent": null, "attachment": null, "dimensions": {"width": 8.0, "height": 4.52, "depth": 7.0, "units": "meters", "confidence": 0.88}, "transform": {"position": [0, 0, 0], "rotationEuler": [-1.5707963267948966, 0, 0], "scale": [1, 1, 1], "rotation": [-1.5707963267948966, 0, 0]}, "material": "render-cream", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "parapet-coping", "kind": "ridge", "confidence": 0.85, "placement": {"yTop": 4.6, "yBottom": 4.44, "proudEachFace": 0.05}, "notes": "Lighter cream-grey cap standing 0.05 m proud of both parapet faces. BUILT, by the parapet-coping cluster, after the material-pass comparison showed the plate's cap reading clearly lighter than the wall while the model's parapet was a single flat cream. It carries the white-panel material, costs one draw call -- the prop's last -- and costs ZERO unique geometries because it shares the clusters' unit box.", "evidenceRef": "region-side-wall"}, {"id": "render-grime-streaks", "kind": "stain", "confidence": 0.75, "placement": {"yTop": 4.46, "yBottom": 3.55}, "notes": "Vertical run-off streaking below the coping drip, heaviest at the corners.", "evidenceRef": "region-side-wall"}, {"id": "side-door-reveal", "kind": "groove", "confidence": 0.85, "placement": {"wall": "-X", "z": 1.15, "leaf": [0.9, 2.1]}, "notes": "Service door on the -X wall, read as a shadow reveal around the leaf. Built by the side-wall-fittings cluster as a proud architrave with a less-proud leaf; see that system's rationale for the stated relief deviation.", "evidenceRef": "region-side-wall"}], "surfaceDetail": {"macroRoughness": 0.1, "microRoughness": 0.3, "bumpAmplitude": 0.2, "normalPattern": "cement render tooth, uniform across the wall field", "displacementPattern": "", "occlusionPattern": "soft occlusion in the parapet's inner corner and under the coping drip", "edgeWearPattern": "clean - a maintained shopfront, no edge wear on the render", "notes": "Carried by the roughness scalar and the grime localOverride, not by geometry."}, "evidenceRefs": ["view-full", "region-side-wall"], "details": ["parapet-coping", "render-grime-streaks"], "fidelityTier": "primary", "actionProfile": {"animationRole": "root", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "root", "notes": "base-center, as the asset declares. The building is a static shell; this is its only rigid-body pivot and the prop has no articulated part."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [{"name": "sign-mount", "localPosition": [0, 3.47, 3.5], "axis": [0, 0, 1], "confidence": 0.9, "notes": "Where the brand fascia attaches. This is the prop's ONLY socket and it is a real mechanism with a real consumer, not a marker named after a place on the surface: the kit's branded shops share this identical 8.0 x 4.6 x 7.0 m building module and differ essentially in the sign hung here, so a level builder swapping fascias relies on it. fascia-sign declares it as its attachment.parentSocket, so the contract is used inside the model as well as outside it."}], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}, "collider": {"type": "convex", "offset": [0, 2.3, 0], "scale": [4.0, 2.3, 3.5], "isTrigger": false, "notes": "Declared convex on the asset. The full walled envelope; the rooftop plant sits inside its vertical extent, so one convex hull covers the whole prop."}}, "colorMaterialRecipe": {"baseColor": {"hex": "#E4D2AC", "evidenceRef": "region-side-wall", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "field", "hex": "#E4D2AC", "coverage": 1.0, "evidenceRef": "region-side-wall"}], "finishStyle": "flat exterior emulsion over cement render", "materialRef": "render-cream", "dominantAlbedo": "rgba(228, 210, 172, 1.0)", "secondaryAlbedo": "rgba(228, 210, 172, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.9}, "uvContract": {"status": "unwrapped", "strategy": "generated procedural coordinates", "materialId": "render-cream"}, "materialRegions": [{"regionId": "render", "materialId": "render-cream", "profileId": "plastic.matte", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/00-render.png", "bbox": {"x": 196, "y": 470, "width": 186, "height": 200}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0355}}]};
  node_building_shell_0.add(mesh_building_shell_0);
  meshes["building-shell"] = mesh_building_shell_0;
  colliders["building-shell"] = {"type": "convex", "offset": [0, 2.3, 0], "scale": [4.0, 2.3, 3.5], "isTrigger": false, "notes": "Declared convex on the asset. The full walled envelope; the rooftop plant sits inside its vertical extent, so one convex hull covers the whole prop."};
  const socket_building_shell_socket_0_0 = new THREE.Object3D();
  socket_building_shell_socket_0_0.name = "socket-0";
  socket_building_shell_socket_0_0.position.set(0.0, 3.47, 3.5);
  socket_building_shell_socket_0_0.rotation.set(0, 0, 0);
  socket_building_shell_socket_0_0.userData.socket = {"name": "sign-mount", "localPosition": [0, 3.47, 3.5], "axis": [0, 0, 1], "confidence": 0.9, "notes": "Where the brand fascia attaches. This is the prop's ONLY socket and it is a real mechanism with a real consumer, not a marker named after a place on the surface: the kit's branded shops share this identical 8.0 x 4.6 x 7.0 m building module and differ essentially in the sign hung here, so a level builder swapping fascias relies on it. fascia-sign declares it as its attachment.parentSocket, so the contract is used inside the model as well as outside it."};
  node_building_shell_0.add(socket_building_shell_socket_0_0);
  sockets["building-shell:socket-0"] = socket_building_shell_socket_0_0;

  const endpoint_facade_wall_1 = makeAttachmentEndpoint(null);
  const node_facade_wall_1 = new THREE.Group();
  node_facade_wall_1.name = "Facade wall with shopfront opening__pivot";
  node_facade_wall_1.scale.set(1, 1, 1);
  if (endpoint_facade_wall_1) {
    node_facade_wall_1.position.copy(endpoint_facade_wall_1.start);
    node_facade_wall_1.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_facade_wall_1.position.set(0.0, 0.0, 3.3);
    node_facade_wall_1.rotation.set(0.0, 0.0, 0.0);
  }
  node_facade_wall_1.userData.sculptComponent = {"id": "facade-wall", "name": "Facade wall with shopfront opening", "level": "macro", "role": "body", "importance": 0.95, "confidence": 0.9, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "A Shape WITH A HOLE, extruded 0.20 m in +Z. This is the one part of the shell a plan extrusion cannot express: the shopfront opening is a vertical void, so the front wall is authored in elevation instead of in plan. It costs one draw call and one geometry, and it buys the identity feature of the whole prop.", "geometryDescriptor": {"topologyIntent": "Front elevation authored in the XY plane and extruded 0.20 m along +Z: an outer rectangle 8.0 x 4.60 m with a single rectangular hole for the shopfront opening. Piers of 0.60 m survive at each end, which the plate shows as cream render returning past the glazing.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Eight outline points and four hole points, one extrusion step: about 120 triangles including the reveal faces.", "profile2D": {"points": [[-4.0, 0.0], [4.0, 0.0], [4.0, 4.52], [-4.0, 4.52]], "holes": [[[-3.4, 0.15], [3.4, 0.15], [3.4, 3.0], [-3.4, 3.0]]], "depth": 0.2}, "shapeSpaceNote": "Authored in (sx, sy) = (worldX, worldY) with no rotation; the extrusion axis is world +Z. Positioned so the extrusion spans z=+3.30 to z=+3.50.", "zFightingNote": "The opening's four reveal faces are the classic z-fighting trap: a frame whose hole is EXACTLY the wall's opening puts four coincident co-facing faces in the model. Nothing in this prop meets those reveals. The glazing pane is inset to z=+3.40 and OVERSIZED to +-3.45 x 0.10..3.10, so it passes behind the reveal rather than meeting it; the framing cluster overlaps the opening edge by 0.06 m on all four sides and stands proud to z=+3.53, clear of the wall's own front face at +3.50.", "copingHandoffNote": "The walls stop at y=4.52 and the parapet COPING owns the top 0.16 m, ending at the declared 4.60 m. That split exists to avoid a z-fight, not for its own sake: a coping band laid on top of a wall that also reaches 4.60 puts two +Y faces in the same plane, which is the coincident co-facing case this prop has been careful about throughout. With the wall at 4.52 its top face is BURIED inside the coping's 4.44-4.60 span and only the coping's own top is exposed. Total height is unchanged at the declared 4.60 m."}, "parent": null, "attachment": {"parentSocket": "", "contactType": "butt", "notes": "Butts against the shell's two open ends at z=+3.30, opposed faces."}, "dimensions": {"width": 8.0, "height": 4.52, "depth": 0.2, "units": "meters", "confidence": 0.9}, "transform": {"position": [0, 0, 3.3], "rotationEuler": [0, 0, 0], "scale": [1, 1, 1], "rotation": [0, 0, 0]}, "material": "render-cream", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "shopfront-opening", "kind": "hole", "confidence": 0.9, "placement": {"xHalf": 3.4, "yBottom": 0.15, "yTop": 3.0}, "notes": "6.80 x 2.85 m opening leaving a 0.60 m cream pier at each end.", "evidenceRef": "region-glazing"}], "surfaceDetail": {"macroRoughness": 0.1, "microRoughness": 0.3, "bumpAmplitude": 0.2, "normalPattern": "cement render tooth", "displacementPattern": "", "occlusionPattern": "soft occlusion in the opening reveal", "edgeWearPattern": "clean", "notes": "Same render skin as the shell; one material between them."}, "evidenceRefs": ["view-full", "region-glazing"], "details": ["shopfront-opening"], "fidelityTier": "primary", "actionProfile": {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "facade-wall-node", "notes": "Static. No pivot is declared for this part: it does not move relative to the shell."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}, "collider": {"type": "convex", "offset": [0, 2.3, 0.1], "scale": [4.0, 2.3, 0.1], "isTrigger": false, "notes": "Convex proxy for the front wall plane."}}, "colorMaterialRecipe": {"baseColor": {"hex": "#E4D2AC", "evidenceRef": "region-side-wall", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "field", "hex": "#E4D2AC", "coverage": 1.0, "evidenceRef": "region-side-wall"}], "finishStyle": "flat exterior emulsion over cement render", "materialRef": "render-cream", "dominantAlbedo": "rgba(228, 210, 172, 1.0)", "secondaryAlbedo": "rgba(228, 210, 172, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.9}};
  node_facade_wall_1.userData.actionProfile = {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "facade-wall-node", "notes": "Static. No pivot is declared for this part: it does not move relative to the shell."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}, "collider": {"type": "convex", "offset": [0, 2.3, 0.1], "scale": [4.0, 2.3, 0.1], "isTrigger": false, "notes": "Convex proxy for the front wall plane."}};
  (nodes["root"] ?? root).add(node_facade_wall_1);
  nodes["facade-wall"] = node_facade_wall_1;
  const mesh_facade_wall_1Geometry = endpoint_facade_wall_1
    ? new THREE.CylinderGeometry(endpoint_facade_wall_1.endRadius, endpoint_facade_wall_1.baseRadius, endpoint_facade_wall_1.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-4.0, 0.0], [4.0, 0.0], [4.0, 4.52], [-4.0, 4.52]], "holes": [[[-3.4, 0.15], [3.4, 0.15], [3.4, 3.0], [-3.4, 3.0]]], "depth": 0.2});
  if (!endpoint_facade_wall_1) {
    mesh_facade_wall_1Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_facade_wall_1 = new THREE.Mesh(
    mesh_facade_wall_1Geometry,
    materialMap["render-cream"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_facade_wall_1.name = "Facade wall with shopfront opening";
  if (endpoint_facade_wall_1) {
    mesh_facade_wall_1.position.copy(endpoint_facade_wall_1.midpoint);
    mesh_facade_wall_1.quaternion.copy(endpoint_facade_wall_1.quaternion);
  }
  mesh_facade_wall_1.castShadow = options.castShadow ?? true;
  mesh_facade_wall_1.receiveShadow = options.receiveShadow ?? true;
  mesh_facade_wall_1.userData.sculptComponent = {"id": "facade-wall", "name": "Facade wall with shopfront opening", "level": "macro", "role": "body", "importance": 0.95, "confidence": 0.9, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "A Shape WITH A HOLE, extruded 0.20 m in +Z. This is the one part of the shell a plan extrusion cannot express: the shopfront opening is a vertical void, so the front wall is authored in elevation instead of in plan. It costs one draw call and one geometry, and it buys the identity feature of the whole prop.", "geometryDescriptor": {"topologyIntent": "Front elevation authored in the XY plane and extruded 0.20 m along +Z: an outer rectangle 8.0 x 4.60 m with a single rectangular hole for the shopfront opening. Piers of 0.60 m survive at each end, which the plate shows as cream render returning past the glazing.", "edgeTreatment": {"type": "chamfer", "bevelRadius": 0.01, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Eight outline points and four hole points, one extrusion step: about 120 triangles including the reveal faces.", "profile2D": {"points": [[-4.0, 0.0], [4.0, 0.0], [4.0, 4.52], [-4.0, 4.52]], "holes": [[[-3.4, 0.15], [3.4, 0.15], [3.4, 3.0], [-3.4, 3.0]]], "depth": 0.2}, "shapeSpaceNote": "Authored in (sx, sy) = (worldX, worldY) with no rotation; the extrusion axis is world +Z. Positioned so the extrusion spans z=+3.30 to z=+3.50.", "zFightingNote": "The opening's four reveal faces are the classic z-fighting trap: a frame whose hole is EXACTLY the wall's opening puts four coincident co-facing faces in the model. Nothing in this prop meets those reveals. The glazing pane is inset to z=+3.40 and OVERSIZED to +-3.45 x 0.10..3.10, so it passes behind the reveal rather than meeting it; the framing cluster overlaps the opening edge by 0.06 m on all four sides and stands proud to z=+3.53, clear of the wall's own front face at +3.50.", "copingHandoffNote": "The walls stop at y=4.52 and the parapet COPING owns the top 0.16 m, ending at the declared 4.60 m. That split exists to avoid a z-fight, not for its own sake: a coping band laid on top of a wall that also reaches 4.60 puts two +Y faces in the same plane, which is the coincident co-facing case this prop has been careful about throughout. With the wall at 4.52 its top face is BURIED inside the coping's 4.44-4.60 span and only the coping's own top is exposed. Total height is unchanged at the declared 4.60 m."}, "parent": null, "attachment": {"parentSocket": "", "contactType": "butt", "notes": "Butts against the shell's two open ends at z=+3.30, opposed faces."}, "dimensions": {"width": 8.0, "height": 4.52, "depth": 0.2, "units": "meters", "confidence": 0.9}, "transform": {"position": [0, 0, 3.3], "rotationEuler": [0, 0, 0], "scale": [1, 1, 1], "rotation": [0, 0, 0]}, "material": "render-cream", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "shopfront-opening", "kind": "hole", "confidence": 0.9, "placement": {"xHalf": 3.4, "yBottom": 0.15, "yTop": 3.0}, "notes": "6.80 x 2.85 m opening leaving a 0.60 m cream pier at each end.", "evidenceRef": "region-glazing"}], "surfaceDetail": {"macroRoughness": 0.1, "microRoughness": 0.3, "bumpAmplitude": 0.2, "normalPattern": "cement render tooth", "displacementPattern": "", "occlusionPattern": "soft occlusion in the opening reveal", "edgeWearPattern": "clean", "notes": "Same render skin as the shell; one material between them."}, "evidenceRefs": ["view-full", "region-glazing"], "details": ["shopfront-opening"], "fidelityTier": "primary", "actionProfile": {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "facade-wall-node", "notes": "Static. No pivot is declared for this part: it does not move relative to the shell."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}, "collider": {"type": "convex", "offset": [0, 2.3, 0.1], "scale": [4.0, 2.3, 0.1], "isTrigger": false, "notes": "Convex proxy for the front wall plane."}}, "colorMaterialRecipe": {"baseColor": {"hex": "#E4D2AC", "evidenceRef": "region-side-wall", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "field", "hex": "#E4D2AC", "coverage": 1.0, "evidenceRef": "region-side-wall"}], "finishStyle": "flat exterior emulsion over cement render", "materialRef": "render-cream", "dominantAlbedo": "rgba(228, 210, 172, 1.0)", "secondaryAlbedo": "rgba(228, 210, 172, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.9}};
  node_facade_wall_1.add(mesh_facade_wall_1);
  meshes["facade-wall"] = mesh_facade_wall_1;
  colliders["facade-wall"] = {"type": "convex", "offset": [0, 2.3, 0.1], "scale": [4.0, 2.3, 0.1], "isTrigger": false, "notes": "Convex proxy for the front wall plane."};

  const endpoint_roof_deck_2 = makeAttachmentEndpoint(null);
  const node_roof_deck_2 = new THREE.Group();
  node_roof_deck_2.name = "Concrete roof deck slab__pivot";
  node_roof_deck_2.scale.set(1, 1, 1);
  if (endpoint_roof_deck_2) {
    node_roof_deck_2.position.copy(endpoint_roof_deck_2.start);
    node_roof_deck_2.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_roof_deck_2.position.set(0.0, 3.82, 0.0);
    node_roof_deck_2.rotation.set(0.0, 0.0, 0.0);
  }
  node_roof_deck_2.userData.sculptComponent = {"id": "roof-deck", "name": "Concrete roof deck slab", "level": "macro", "role": "structure", "importance": 0.45, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A flat slab seen only from above the parapet line. A box is exactly the right primitive. The roof WELL that surrounds it is genuine concavity, but it is carved by the shell's hollow plan extrusion, not by this component -- this is only the floor at the bottom of it.", "geometryDescriptor": {"topologyIntent": "single hard-edged box; no bevel, no subdivision", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "1x1x1 segments: 12 triangles. Triangles are not the binding axis here.", "zFightingNote": "Oversized to x=+-3.85 and z=-3.35..+3.35 so its edge faces sit INSIDE the 0.20 m wall thickness on all four sides rather than meeting the walls' inner faces at +-3.80 / +-3.30. Its top face at y=3.90 is coincident with nothing.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the glazing rendered as a 1 m box floating in a 6.8 m opening. The extrude components are the exact opposite and MUST keep scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8x4.6x7."}, "parent": null, "attachment": {"parentSocket": "", "contactType": "embed", "notes": "Embedded into the wall ring; edges buried in the 0.20 m wall thickness."}, "dimensions": {"width": 7.7, "height": 0.16, "depth": 6.7, "units": "meters", "confidence": 0.85}, "transform": {"position": [0, 3.82, 0.0], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "concrete-grey", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "deck-weather-wash", "kind": "stain", "confidence": 0.65, "placement": {"region": "parapet inner foot"}, "notes": "Darker wash where rainwater stands against the upstand.", "evidenceRef": "region-roof-deck"}, {"id": "condenser-fan-grille", "kind": "contour", "confidence": 0.55, "placement": {"perUnit": 1, "face": "+Z of each condenser"}, "notes": "Circular fan grille with a louvre strip beside it on each condenser's outward face. Carried as a darker instance-coloured plate on the rooftop-plant cluster; the disc is not resolvable and is not modelled. Roof-only, so confidence is deliberately low.", "evidenceRef": "region-roof-plant"}], "surfaceDetail": {"macroRoughness": 0.12, "microRoughness": 0.35, "bumpAmplitude": 0.1, "normalPattern": "fair-faced concrete, no aggregate resolvable", "displacementPattern": "", "occlusionPattern": "occlusion along the parapet's inner foot", "edgeWearPattern": "clean", "notes": "Parapet upstand is 0.70 m above this deck."}, "evidenceRefs": ["region-roof-deck"], "details": ["deck-weather-wash"], "fidelityTier": "secondary", "actionProfile": {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "roof-deck-node", "notes": "Static slab, no pivot declared."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#8C8F92", "evidenceRef": "region-roof-deck", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "field", "hex": "#8C8F92", "coverage": 1.0, "evidenceRef": "region-roof-deck"}], "finishStyle": "untreated fair-faced concrete, matte", "materialRef": "concrete-grey", "dominantAlbedo": "rgba(140, 143, 146, 1.0)", "secondaryAlbedo": "rgba(140, 143, 146, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.85}, "levelRationale": "MACRO, not meso. A blockout is the clay mass, and a mass with a 6.80 x 2.85 m hole punched through its front and its roof open to the sky is not a closed solid -- turntable_gate measured the front silhouette as 45% interior hole. The glazed shopfront is 6.80 m of an 8.0 m elevation and the deck is the roof: both are the building's mass, not detail applied to it. The applied bands, the sign, the kerb and every instanced cluster stay meso/micro, so the blockout is still clay-macro.", "uvContract": {"status": "unwrapped", "strategy": "generated procedural coordinates", "materialId": "concrete-grey"}, "materialRegions": [{"regionId": "concrete", "materialId": "concrete-grey", "profileId": "stone.natural", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/01-concrete.png", "bbox": {"x": 438, "y": 292, "width": 96, "height": 26}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0024}}, {"regionId": "plant", "materialId": "galvanised", "profileId": "metal.steel-brushed", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/06-plant.png", "bbox": {"x": 600, "y": 248, "width": 72, "height": 52}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0036}}], "materialRebindNote": "apply_material_analysis rebound this to 'galvanised'; restored to 'concrete-grey', the material this component actually carries."};
  node_roof_deck_2.userData.actionProfile = {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "roof-deck-node", "notes": "Static slab, no pivot declared."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_roof_deck_2);
  nodes["roof-deck"] = node_roof_deck_2;
  const mesh_roof_deck_2Geometry = endpoint_roof_deck_2
    ? new THREE.CylinderGeometry(endpoint_roof_deck_2.endRadius, endpoint_roof_deck_2.baseRadius, endpoint_roof_deck_2.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_roof_deck_2) {
    mesh_roof_deck_2Geometry.scale(7.7, 0.16, 6.7);
  }
  const mesh_roof_deck_2 = new THREE.Mesh(
    mesh_roof_deck_2Geometry,
    materialMap["concrete-grey"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_roof_deck_2.name = "Concrete roof deck slab";
  if (endpoint_roof_deck_2) {
    mesh_roof_deck_2.position.copy(endpoint_roof_deck_2.midpoint);
    mesh_roof_deck_2.quaternion.copy(endpoint_roof_deck_2.quaternion);
  }
  mesh_roof_deck_2.castShadow = options.castShadow ?? true;
  mesh_roof_deck_2.receiveShadow = options.receiveShadow ?? true;
  mesh_roof_deck_2.userData.sculptComponent = {"id": "roof-deck", "name": "Concrete roof deck slab", "level": "macro", "role": "structure", "importance": 0.45, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A flat slab seen only from above the parapet line. A box is exactly the right primitive. The roof WELL that surrounds it is genuine concavity, but it is carved by the shell's hollow plan extrusion, not by this component -- this is only the floor at the bottom of it.", "geometryDescriptor": {"topologyIntent": "single hard-edged box; no bevel, no subdivision", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "1x1x1 segments: 12 triangles. Triangles are not the binding axis here.", "zFightingNote": "Oversized to x=+-3.85 and z=-3.35..+3.35 so its edge faces sit INSIDE the 0.20 m wall thickness on all four sides rather than meeting the walls' inner faces at +-3.80 / +-3.30. Its top face at y=3.90 is coincident with nothing.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the glazing rendered as a 1 m box floating in a 6.8 m opening. The extrude components are the exact opposite and MUST keep scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8x4.6x7."}, "parent": null, "attachment": {"parentSocket": "", "contactType": "embed", "notes": "Embedded into the wall ring; edges buried in the 0.20 m wall thickness."}, "dimensions": {"width": 7.7, "height": 0.16, "depth": 6.7, "units": "meters", "confidence": 0.85}, "transform": {"position": [0, 3.82, 0.0], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "concrete-grey", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "deck-weather-wash", "kind": "stain", "confidence": 0.65, "placement": {"region": "parapet inner foot"}, "notes": "Darker wash where rainwater stands against the upstand.", "evidenceRef": "region-roof-deck"}, {"id": "condenser-fan-grille", "kind": "contour", "confidence": 0.55, "placement": {"perUnit": 1, "face": "+Z of each condenser"}, "notes": "Circular fan grille with a louvre strip beside it on each condenser's outward face. Carried as a darker instance-coloured plate on the rooftop-plant cluster; the disc is not resolvable and is not modelled. Roof-only, so confidence is deliberately low.", "evidenceRef": "region-roof-plant"}], "surfaceDetail": {"macroRoughness": 0.12, "microRoughness": 0.35, "bumpAmplitude": 0.1, "normalPattern": "fair-faced concrete, no aggregate resolvable", "displacementPattern": "", "occlusionPattern": "occlusion along the parapet's inner foot", "edgeWearPattern": "clean", "notes": "Parapet upstand is 0.70 m above this deck."}, "evidenceRefs": ["region-roof-deck"], "details": ["deck-weather-wash"], "fidelityTier": "secondary", "actionProfile": {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "roof-deck-node", "notes": "Static slab, no pivot declared."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#8C8F92", "evidenceRef": "region-roof-deck", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "field", "hex": "#8C8F92", "coverage": 1.0, "evidenceRef": "region-roof-deck"}], "finishStyle": "untreated fair-faced concrete, matte", "materialRef": "concrete-grey", "dominantAlbedo": "rgba(140, 143, 146, 1.0)", "secondaryAlbedo": "rgba(140, 143, 146, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.85}, "levelRationale": "MACRO, not meso. A blockout is the clay mass, and a mass with a 6.80 x 2.85 m hole punched through its front and its roof open to the sky is not a closed solid -- turntable_gate measured the front silhouette as 45% interior hole. The glazed shopfront is 6.80 m of an 8.0 m elevation and the deck is the roof: both are the building's mass, not detail applied to it. The applied bands, the sign, the kerb and every instanced cluster stay meso/micro, so the blockout is still clay-macro.", "uvContract": {"status": "unwrapped", "strategy": "generated procedural coordinates", "materialId": "concrete-grey"}, "materialRegions": [{"regionId": "concrete", "materialId": "concrete-grey", "profileId": "stone.natural", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/01-concrete.png", "bbox": {"x": 438, "y": 292, "width": 96, "height": 26}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0024}}, {"regionId": "plant", "materialId": "galvanised", "profileId": "metal.steel-brushed", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/06-plant.png", "bbox": {"x": 600, "y": 248, "width": 72, "height": 52}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0036}}], "materialRebindNote": "apply_material_analysis rebound this to 'galvanised'; restored to 'concrete-grey', the material this component actually carries."};
  node_roof_deck_2.add(mesh_roof_deck_2);
  meshes["roof-deck"] = mesh_roof_deck_2;
  colliders["roof-deck"] = {};

  const endpoint_fascia_band_3 = makeAttachmentEndpoint(null);
  const node_fascia_band_3 = new THREE.Group();
  node_fascia_band_3.name = "White fascia band__pivot";
  node_fascia_band_3.scale.set(1, 1, 1);
  if (endpoint_fascia_band_3) {
    node_fascia_band_3.position.copy(endpoint_fascia_band_3.start);
    node_fascia_band_3.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_fascia_band_3.position.set(0.0, 3.4699999999999998, 3.52);
    node_fascia_band_3.rotation.set(0.0, 0.0, 0.0);
  }
  node_fascia_band_3.userData.sculptComponent = {"id": "fascia-band", "name": "White fascia band", "level": "meso", "role": "structure", "importance": 0.8, "confidence": 0.88, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A flat applied panel band. Box.", "geometryDescriptor": {"topologyIntent": "single hard-edged box; no bevel, no subdivision", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "1x1x1 segments: 12 triangles. Triangles are not the binding axis here.", "zFightingNote": "Spans z=+3.44 to +3.60, so its back face is 0.06 m INSIDE the facade wall rather than flush with the wall's front face at +3.50. Overlap, not a meeting of planes. It also overlaps the shopfront opening's head by 0.08 m (bottom at 2.92 against an opening head at 3.00), which is what a fascia does and what keeps the head reveal out of the silhouette. ALSO, the width is 7.90 m and not 8.00 m. At the full 8.00 the band's two END faces sat at x=+-4.000, exactly coplanar and co-facing with the facade wall's own end faces, and check-coplanar.mjs flagged both (0.07 m2 each). Pulling the band in by 0.05 m at each end leaves a cream return of 0.6% of the facade's width -- not resolvable at prop distance -- and removes the pair. Widening instead would have pushed the prop past its declared 8.0 m envelope.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the glazing rendered as a 1 m box floating in a 6.8 m opening. The extrude components are the exact opposite and MUST keep scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8x4.6x7."}, "parent": null, "attachment": {"parentSocket": "", "contactType": "overlap", "notes": "Stands 0.10 m proud of the facade, back face buried in the wall."}, "dimensions": {"width": 7.9, "height": 1.0999999999999996, "depth": 0.16, "units": "meters", "confidence": 0.88}, "transform": {"position": [0, 3.4699999999999998, 3.52], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "white-panel", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "fascia-reveal-groove", "kind": "groove", "confidence": 0.7, "placement": {"y": 3.9, "depth": 0.012}, "notes": "Horizontal reveal groove and a vertical panel joint right of the sign tray, both shadow lines rather than geometry at this scale.", "evidenceRef": "region-fascia"}], "surfaceDetail": {"macroRoughness": 0.05, "microRoughness": 0.15, "bumpAmplitude": 0.04, "normalPattern": "factory-finished composite panel, no tooth", "displacementPattern": "", "occlusionPattern": "shadow gap under the band's bottom edge", "edgeWearPattern": "clean", "notes": "The satin specular lobe is the identity here, carried by roughness 0.42."}, "evidenceRefs": ["region-fascia"], "details": ["fascia-reveal-groove"], "fidelityTier": "primary", "actionProfile": {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "fascia-band-node", "notes": "Static applied panel, no pivot declared."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#EDEFEF", "evidenceRef": "region-fascia", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "field", "hex": "#EDEFEF", "coverage": 1.0, "evidenceRef": "region-fascia"}], "finishStyle": "satin painted aluminium composite panel", "materialRef": "white-panel", "dominantAlbedo": "rgba(237, 239, 239, 1.0)", "secondaryAlbedo": "rgba(237, 239, 239, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.88}, "uvContract": {"status": "unwrapped", "strategy": "generated procedural coordinates", "materialId": "white-panel"}, "materialRegions": [{"regionId": "panel", "materialId": "white-panel", "profileId": "coating.painted-metal", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/02-panel.png", "bbox": {"x": 404, "y": 398, "width": 52, "height": 134}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0066}}]};
  node_fascia_band_3.userData.actionProfile = {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "fascia-band-node", "notes": "Static applied panel, no pivot declared."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_fascia_band_3);
  nodes["fascia-band"] = node_fascia_band_3;
  const mesh_fascia_band_3Geometry = endpoint_fascia_band_3
    ? new THREE.CylinderGeometry(endpoint_fascia_band_3.endRadius, endpoint_fascia_band_3.baseRadius, endpoint_fascia_band_3.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_fascia_band_3) {
    mesh_fascia_band_3Geometry.scale(7.9, 1.0999999999999996, 0.16);
  }
  const mesh_fascia_band_3 = new THREE.Mesh(
    mesh_fascia_band_3Geometry,
    materialMap["white-panel"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_fascia_band_3.name = "White fascia band";
  if (endpoint_fascia_band_3) {
    mesh_fascia_band_3.position.copy(endpoint_fascia_band_3.midpoint);
    mesh_fascia_band_3.quaternion.copy(endpoint_fascia_band_3.quaternion);
  }
  mesh_fascia_band_3.castShadow = options.castShadow ?? true;
  mesh_fascia_band_3.receiveShadow = options.receiveShadow ?? true;
  mesh_fascia_band_3.userData.sculptComponent = {"id": "fascia-band", "name": "White fascia band", "level": "meso", "role": "structure", "importance": 0.8, "confidence": 0.88, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A flat applied panel band. Box.", "geometryDescriptor": {"topologyIntent": "single hard-edged box; no bevel, no subdivision", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "1x1x1 segments: 12 triangles. Triangles are not the binding axis here.", "zFightingNote": "Spans z=+3.44 to +3.60, so its back face is 0.06 m INSIDE the facade wall rather than flush with the wall's front face at +3.50. Overlap, not a meeting of planes. It also overlaps the shopfront opening's head by 0.08 m (bottom at 2.92 against an opening head at 3.00), which is what a fascia does and what keeps the head reveal out of the silhouette. ALSO, the width is 7.90 m and not 8.00 m. At the full 8.00 the band's two END faces sat at x=+-4.000, exactly coplanar and co-facing with the facade wall's own end faces, and check-coplanar.mjs flagged both (0.07 m2 each). Pulling the band in by 0.05 m at each end leaves a cream return of 0.6% of the facade's width -- not resolvable at prop distance -- and removes the pair. Widening instead would have pushed the prop past its declared 8.0 m envelope.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the glazing rendered as a 1 m box floating in a 6.8 m opening. The extrude components are the exact opposite and MUST keep scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8x4.6x7."}, "parent": null, "attachment": {"parentSocket": "", "contactType": "overlap", "notes": "Stands 0.10 m proud of the facade, back face buried in the wall."}, "dimensions": {"width": 7.9, "height": 1.0999999999999996, "depth": 0.16, "units": "meters", "confidence": 0.88}, "transform": {"position": [0, 3.4699999999999998, 3.52], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "white-panel", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "fascia-reveal-groove", "kind": "groove", "confidence": 0.7, "placement": {"y": 3.9, "depth": 0.012}, "notes": "Horizontal reveal groove and a vertical panel joint right of the sign tray, both shadow lines rather than geometry at this scale.", "evidenceRef": "region-fascia"}], "surfaceDetail": {"macroRoughness": 0.05, "microRoughness": 0.15, "bumpAmplitude": 0.04, "normalPattern": "factory-finished composite panel, no tooth", "displacementPattern": "", "occlusionPattern": "shadow gap under the band's bottom edge", "edgeWearPattern": "clean", "notes": "The satin specular lobe is the identity here, carried by roughness 0.42."}, "evidenceRefs": ["region-fascia"], "details": ["fascia-reveal-groove"], "fidelityTier": "primary", "actionProfile": {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "fascia-band-node", "notes": "Static applied panel, no pivot declared."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#EDEFEF", "evidenceRef": "region-fascia", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "field", "hex": "#EDEFEF", "coverage": 1.0, "evidenceRef": "region-fascia"}], "finishStyle": "satin painted aluminium composite panel", "materialRef": "white-panel", "dominantAlbedo": "rgba(237, 239, 239, 1.0)", "secondaryAlbedo": "rgba(237, 239, 239, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.88}, "uvContract": {"status": "unwrapped", "strategy": "generated procedural coordinates", "materialId": "white-panel"}, "materialRegions": [{"regionId": "panel", "materialId": "white-panel", "profileId": "coating.painted-metal", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/02-panel.png", "bbox": {"x": 404, "y": 398, "width": 52, "height": 134}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0066}}]};
  node_fascia_band_3.add(mesh_fascia_band_3);
  meshes["fascia-band"] = mesh_fascia_band_3;
  colliders["fascia-band"] = {};

  const endpoint_fascia_sign_4 = makeAttachmentEndpoint(null);
  const node_fascia_sign_4 = new THREE.Group();
  node_fascia_sign_4.name = "AIS illuminated fascia sign face__pivot";
  node_fascia_sign_4.scale.set(1, 1, 1);
  if (endpoint_fascia_sign_4) {
    node_fascia_sign_4.position.copy(endpoint_fascia_sign_4.start);
    node_fascia_sign_4.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_fascia_sign_4.position.set(0.0, 3.4699999999999998, 3.62);
    node_fascia_sign_4.rotation.set(0.0, 0.0, 0.0);
  }
  node_fascia_sign_4.userData.sculptComponent = {"id": "fascia-sign", "name": "AIS illuminated fascia sign face", "level": "meso", "role": "identity", "importance": 1.0, "confidence": 0.92, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A thin graphic FACE, not the whole tray. The tray's proud return is a separate InstancedMesh cluster on the shared unit box, which costs one draw call and zero unique geometries. Splitting it this way is what lets the printed AIS mark live on a 0.03 m plate whose side faces are hidden inside the return -- a canvas map on a BoxGeometry lands on all six faces, so a deep tray would have carried a squashed slice of the mark down each edge.", "geometryDescriptor": {"topologyIntent": "single hard-edged box; no bevel, no subdivision", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "1x1x1 segments: 12 triangles. Triangles are not the binding axis here.", "zFightingNote": "Front face at z=+3.635, standing 0.035 m proud of the fascia band's +3.60. The surrounding tray return spans +3.52 to +3.645 and OVERLAPS this plate's edges, so no two co-facing surfaces share a plane.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the glazing rendered as a 1 m box floating in a 6.8 m opening. The extrude components are the exact opposite and MUST keep scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8x4.6x7."}, "parent": null, "attachment": {"parentSocket": "sign-mount", "contactType": "overlap", "notes": "Sits on the fascia band, inside the tray return."}, "dimensions": {"width": 5.8, "height": 0.8, "depth": 0.03, "units": "meters", "confidence": 0.92}, "transform": {"position": [0, 3.4699999999999998, 3.62], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "sign-green", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "sign-tray-relief", "kind": "ridge", "confidence": 0.9, "placement": {"proudOfFascia": 0.045, "returnDepth": 0.125, "rails": 4}, "notes": "The lightbox tray stands proud of the white fascia band with a visible drop shadow along its lower edge and a lighter edge return on all four sides. Built by the sign-tray-return cluster; this face sits inside it, 0.01 m behind the return's front plane.", "evidenceRef": "region-fascia-sign"}, {"id": "ais-swoosh-wordmark", "kind": "decal", "confidence": 0.95, "placement": {"anchor": "centred", "markWidthFraction": 0.34}, "notes": "White AIS swoosh (a curved crescent) followed by the AIS wordmark in a bold rounded sans. Drawn on a canvas applied AFTER material construction, which is the route the textureless declaration deliberately leaves open. It is a RECONSTRUCTION of the brand mark, not a pixel lift of the plate.", "evidenceRef": "region-fascia-sign"}, {"id": "sign-face-emissive", "kind": "emissive", "confidence": 0.8, "placement": {"whole": true}, "notes": "Internally lit lightbox. The plate's green measures brighter (#A0CB1F) than the authored albedo (#8FC72C); the difference is emission and is carried as an emissive term rather than baked into base colour.", "evidenceRef": "region-fascia-sign"}], "surfaceDetail": {"macroRoughness": 0.03, "microRoughness": 0.1, "bumpAmplitude": 0.02, "normalPattern": "moulded acrylic, no tooth", "displacementPattern": "", "occlusionPattern": "none - the face is flush inside its return", "edgeWearPattern": "clean", "notes": "Gloss acrylic; roughness 0.28 gives the tight highlight the plate shows."}, "evidenceRefs": ["region-fascia-sign"], "details": ["ais-swoosh-wordmark", "sign-face-emissive"], "fidelityTier": "critical", "actionProfile": {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "fascia-sign-node", "notes": "Static sign face, no pivot declared."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#8FC72C", "evidenceRef": "region-fascia-sign", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "green-field", "hex": "#8FC72C", "coverage": 0.86, "evidenceRef": "region-fascia-sign"}, {"id": "white-mark", "hex": "#FFFFFF", "coverage": 0.14, "evidenceRef": "region-fascia-sign"}], "finishStyle": "gloss translucent acrylic lightbox face", "materialRef": "sign-green", "dominantAlbedo": "rgba(143, 199, 44, 1.0)", "secondaryAlbedo": "rgba(143, 199, 44, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.92}, "dimensionNote": "Widened 5.40 -> 5.80 m after the structural-pass render. Measured against the plate, the sign spans about 82% of the shopfront opening (436 px of 530); at 5.40 m it spanned 78%. 5.80/6.90 = 84%.", "uvContract": {"status": "unwrapped", "strategy": "generated procedural coordinates", "materialId": "sign-green"}, "materialRegions": [{"regionId": "acrylic", "materialId": "sign-green", "profileId": "plastic.glossy", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/03-acrylic.png", "bbox": {"x": 510, "y": 412, "width": 70, "height": 38}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0025}}]};
  node_fascia_sign_4.userData.actionProfile = {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "fascia-sign-node", "notes": "Static sign face, no pivot declared."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_fascia_sign_4);
  nodes["fascia-sign"] = node_fascia_sign_4;
  const mesh_fascia_sign_4Geometry = endpoint_fascia_sign_4
    ? new THREE.CylinderGeometry(endpoint_fascia_sign_4.endRadius, endpoint_fascia_sign_4.baseRadius, endpoint_fascia_sign_4.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_fascia_sign_4) {
    mesh_fascia_sign_4Geometry.scale(5.8, 0.8, 0.03);
  }
  const mesh_fascia_sign_4 = new THREE.Mesh(
    mesh_fascia_sign_4Geometry,
    materialMap["sign-green"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_fascia_sign_4.name = "AIS illuminated fascia sign face";
  if (endpoint_fascia_sign_4) {
    mesh_fascia_sign_4.position.copy(endpoint_fascia_sign_4.midpoint);
    mesh_fascia_sign_4.quaternion.copy(endpoint_fascia_sign_4.quaternion);
  }
  mesh_fascia_sign_4.castShadow = options.castShadow ?? true;
  mesh_fascia_sign_4.receiveShadow = options.receiveShadow ?? true;
  mesh_fascia_sign_4.userData.sculptComponent = {"id": "fascia-sign", "name": "AIS illuminated fascia sign face", "level": "meso", "role": "identity", "importance": 1.0, "confidence": 0.92, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A thin graphic FACE, not the whole tray. The tray's proud return is a separate InstancedMesh cluster on the shared unit box, which costs one draw call and zero unique geometries. Splitting it this way is what lets the printed AIS mark live on a 0.03 m plate whose side faces are hidden inside the return -- a canvas map on a BoxGeometry lands on all six faces, so a deep tray would have carried a squashed slice of the mark down each edge.", "geometryDescriptor": {"topologyIntent": "single hard-edged box; no bevel, no subdivision", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "1x1x1 segments: 12 triangles. Triangles are not the binding axis here.", "zFightingNote": "Front face at z=+3.635, standing 0.035 m proud of the fascia band's +3.60. The surrounding tray return spans +3.52 to +3.645 and OVERLAPS this plate's edges, so no two co-facing surfaces share a plane.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the glazing rendered as a 1 m box floating in a 6.8 m opening. The extrude components are the exact opposite and MUST keep scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8x4.6x7."}, "parent": null, "attachment": {"parentSocket": "sign-mount", "contactType": "overlap", "notes": "Sits on the fascia band, inside the tray return."}, "dimensions": {"width": 5.8, "height": 0.8, "depth": 0.03, "units": "meters", "confidence": 0.92}, "transform": {"position": [0, 3.4699999999999998, 3.62], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "sign-green", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "sign-tray-relief", "kind": "ridge", "confidence": 0.9, "placement": {"proudOfFascia": 0.045, "returnDepth": 0.125, "rails": 4}, "notes": "The lightbox tray stands proud of the white fascia band with a visible drop shadow along its lower edge and a lighter edge return on all four sides. Built by the sign-tray-return cluster; this face sits inside it, 0.01 m behind the return's front plane.", "evidenceRef": "region-fascia-sign"}, {"id": "ais-swoosh-wordmark", "kind": "decal", "confidence": 0.95, "placement": {"anchor": "centred", "markWidthFraction": 0.34}, "notes": "White AIS swoosh (a curved crescent) followed by the AIS wordmark in a bold rounded sans. Drawn on a canvas applied AFTER material construction, which is the route the textureless declaration deliberately leaves open. It is a RECONSTRUCTION of the brand mark, not a pixel lift of the plate.", "evidenceRef": "region-fascia-sign"}, {"id": "sign-face-emissive", "kind": "emissive", "confidence": 0.8, "placement": {"whole": true}, "notes": "Internally lit lightbox. The plate's green measures brighter (#A0CB1F) than the authored albedo (#8FC72C); the difference is emission and is carried as an emissive term rather than baked into base colour.", "evidenceRef": "region-fascia-sign"}], "surfaceDetail": {"macroRoughness": 0.03, "microRoughness": 0.1, "bumpAmplitude": 0.02, "normalPattern": "moulded acrylic, no tooth", "displacementPattern": "", "occlusionPattern": "none - the face is flush inside its return", "edgeWearPattern": "clean", "notes": "Gloss acrylic; roughness 0.28 gives the tight highlight the plate shows."}, "evidenceRefs": ["region-fascia-sign"], "details": ["ais-swoosh-wordmark", "sign-face-emissive"], "fidelityTier": "critical", "actionProfile": {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "fascia-sign-node", "notes": "Static sign face, no pivot declared."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#8FC72C", "evidenceRef": "region-fascia-sign", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "green-field", "hex": "#8FC72C", "coverage": 0.86, "evidenceRef": "region-fascia-sign"}, {"id": "white-mark", "hex": "#FFFFFF", "coverage": 0.14, "evidenceRef": "region-fascia-sign"}], "finishStyle": "gloss translucent acrylic lightbox face", "materialRef": "sign-green", "dominantAlbedo": "rgba(143, 199, 44, 1.0)", "secondaryAlbedo": "rgba(143, 199, 44, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.92}, "dimensionNote": "Widened 5.40 -> 5.80 m after the structural-pass render. Measured against the plate, the sign spans about 82% of the shopfront opening (436 px of 530); at 5.40 m it spanned 78%. 5.80/6.90 = 84%.", "uvContract": {"status": "unwrapped", "strategy": "generated procedural coordinates", "materialId": "sign-green"}, "materialRegions": [{"regionId": "acrylic", "materialId": "sign-green", "profileId": "plastic.glossy", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/03-acrylic.png", "bbox": {"x": 510, "y": 412, "width": 70, "height": 38}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0025}}]};
  node_fascia_sign_4.add(mesh_fascia_sign_4);
  meshes["fascia-sign"] = mesh_fascia_sign_4;
  colliders["fascia-sign"] = {};

  const endpoint_shopfront_glazing_5 = makeAttachmentEndpoint(null);
  const node_shopfront_glazing_5 = new THREE.Group();
  node_shopfront_glazing_5.name = "Shopfront glazing and spandrel field__pivot";
  node_shopfront_glazing_5.scale.set(1, 1, 1);
  if (endpoint_shopfront_glazing_5) {
    node_shopfront_glazing_5.position.copy(endpoint_shopfront_glazing_5.start);
    node_shopfront_glazing_5.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_shopfront_glazing_5.position.set(0.0, 1.6, 3.4);
    node_shopfront_glazing_5.rotation.set(0.0, 0.0, 0.0);
  }
  node_shopfront_glazing_5.userData.sculptComponent = {"id": "shopfront-glazing", "name": "Shopfront glazing and spandrel field", "level": "macro", "role": "identity", "importance": 0.9, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "ONE pane spanning the whole opening, not one per bay. Eight bays as eight components would be eight draw calls and eight unique geometries on a prop whose entire ceiling is eight geometries. The bay rhythm comes from the framing cluster in front of it, and the two opaque green spandrel bays are regions of the canvas rather than separate solids.", "geometryDescriptor": {"topologyIntent": "single hard-edged box; no bevel, no subdivision", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "1x1x1 segments: 12 triangles. Triangles are not the binding axis here.", "zFightingNote": "Inset to z=+3.385..3.415, well behind the wall's front face at +3.50, and OVERSIZED to +-3.45 x 0.10..3.10 so its edges pass behind the opening's reveals instead of meeting them. No face of this pane shares a plane with any other surface.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the glazing rendered as a 1 m box floating in a 6.8 m opening. The extrude components are the exact opposite and MUST keep scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8x4.6x7."}, "parent": null, "attachment": {"parentSocket": "", "contactType": "embed", "notes": "Sits inside the facade opening, edges buried behind the reveals."}, "dimensions": {"width": 6.9, "height": 3.0, "depth": 0.03, "units": "meters", "confidence": 0.85}, "transform": {"position": [0, 1.6, 3.4], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "glass-tinted", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "green-spandrel-bays", "kind": "decal", "confidence": 0.92, "placement": {"bays": ["outermost left", "outermost right"], "widthEach": 0.85}, "notes": "Full-height opaque vivid-green vinyl-faced spandrel panels bracketing the glazed bays. Painted as canvas regions on this pane rather than modelled: at an opacity of 0.94 the pane is already all but opaque, so a green region on it reads as an opaque panel and costs no geometry, no draw call and no material.", "evidenceRef": "region-glazing"}, {"id": "spandrel-poster-panels", "kind": "decal", "confidence": 0.8, "placement": {"perBay": 1, "anchor": "upper middle of each green bay"}, "notes": "A pale near-white poster rectangle on each green spandrel bay.", "evidenceRef": "region-promo-panel"}, {"id": "transom-rail", "kind": "ridge", "confidence": 0.88, "placement": {"y": 2.34, "spans": "the full glazed width"}, "notes": "Horizontal aluminium transom rail near the head, with a lower sill rail at 0.19 m. Built by the shopfront-framing cluster in front of this pane.", "evidenceRef": "region-glazing"}, {"id": "door-meeting-stile", "kind": "ridge", "confidence": 0.85, "placement": {"x": 0.0, "width": 0.1, "handleAt": [0.1, 1.15]}, "notes": "A wider vertical meeting stile on the building's centre line carrying a vertical pull handle. Built by the shopfront-framing cluster.", "evidenceRef": "region-glazing"}], "surfaceDetail": {"macroRoughness": 0.02, "microRoughness": 0.06, "bumpAmplitude": 0.0, "normalPattern": "float glass, no relief", "displacementPattern": "", "occlusionPattern": "none", "edgeWearPattern": "clean", "notes": "Authored as a SURFACE, not a window: this is an exterior shell with nothing behind the pane, so opacity is 0.94 and the tint plus a tight specular lobe is what makes it read as glass instead of a hole."}, "evidenceRefs": ["region-glazing", "region-promo-panel"], "details": ["green-spandrel-bays", "spandrel-poster-panels"], "fidelityTier": "critical", "actionProfile": {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "shopfront-glazing-node", "notes": "Static pane. The entrance leaves are drawn as framing on this pane and are NOT articulated, so no door pivot is declared."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#7E8C94", "evidenceRef": "region-glazing", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "glass-field", "hex": "#7E8C94", "coverage": 0.72, "evidenceRef": "region-glazing"}, {"id": "green-spandrel", "hex": "#8FC72C", "coverage": 0.24, "evidenceRef": "region-glazing"}, {"id": "poster-panel", "hex": "#EDF2E6", "coverage": 0.04, "evidenceRef": "region-promo-panel"}], "finishStyle": "tinted architectural glass, mostly opaque surface", "materialRef": "glass-tinted", "dominantAlbedo": "rgba(126, 140, 148, 1.0)", "secondaryAlbedo": "rgba(126, 140, 148, 1.0)", "materialClass": "glass", "materialClassConfidence": 0.85}, "levelRationale": "MACRO, not meso. A blockout is the clay mass, and a mass with a 6.80 x 2.85 m hole punched through its front and its roof open to the sky is not a closed solid -- turntable_gate measured the front silhouette as 45% interior hole. The glazed shopfront is 6.80 m of an 8.0 m elevation and the deck is the roof: both are the building's mass, not detail applied to it. The applied bands, the sign, the kerb and every instanced cluster stay meso/micro, so the blockout is still clay-macro.", "uvContract": {"status": "unwrapped", "strategy": "generated procedural coordinates", "materialId": "glass-tinted"}, "materialRegions": [{"regionId": "glass", "materialId": "glass-tinted", "profileId": "glass.clear", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/04-glass.png", "bbox": {"x": 700, "y": 600, "width": 34, "height": 72}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0023}}, {"regionId": "framing", "materialId": "aluminium", "profileId": "metal.aluminum", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/05-framing.png", "bbox": {"x": 596, "y": 560, "width": 18, "height": 150}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0026}}], "materialRebindNote": "apply_material_analysis rebound this to 'aluminium'; restored to 'glass-tinted', the material this component actually carries."};
  node_shopfront_glazing_5.userData.actionProfile = {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "shopfront-glazing-node", "notes": "Static pane. The entrance leaves are drawn as framing on this pane and are NOT articulated, so no door pivot is declared."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_shopfront_glazing_5);
  nodes["shopfront-glazing"] = node_shopfront_glazing_5;
  const mesh_shopfront_glazing_5Geometry = endpoint_shopfront_glazing_5
    ? new THREE.CylinderGeometry(endpoint_shopfront_glazing_5.endRadius, endpoint_shopfront_glazing_5.baseRadius, endpoint_shopfront_glazing_5.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_shopfront_glazing_5) {
    mesh_shopfront_glazing_5Geometry.scale(6.9, 3.0, 0.03);
  }
  const mesh_shopfront_glazing_5 = new THREE.Mesh(
    mesh_shopfront_glazing_5Geometry,
    materialMap["glass-tinted"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_shopfront_glazing_5.name = "Shopfront glazing and spandrel field";
  if (endpoint_shopfront_glazing_5) {
    mesh_shopfront_glazing_5.position.copy(endpoint_shopfront_glazing_5.midpoint);
    mesh_shopfront_glazing_5.quaternion.copy(endpoint_shopfront_glazing_5.quaternion);
  }
  mesh_shopfront_glazing_5.castShadow = options.castShadow ?? true;
  mesh_shopfront_glazing_5.receiveShadow = options.receiveShadow ?? true;
  mesh_shopfront_glazing_5.userData.sculptComponent = {"id": "shopfront-glazing", "name": "Shopfront glazing and spandrel field", "level": "macro", "role": "identity", "importance": 0.9, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "ONE pane spanning the whole opening, not one per bay. Eight bays as eight components would be eight draw calls and eight unique geometries on a prop whose entire ceiling is eight geometries. The bay rhythm comes from the framing cluster in front of it, and the two opaque green spandrel bays are regions of the canvas rather than separate solids.", "geometryDescriptor": {"topologyIntent": "single hard-edged box; no bevel, no subdivision", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "1x1x1 segments: 12 triangles. Triangles are not the binding axis here.", "zFightingNote": "Inset to z=+3.385..3.415, well behind the wall's front face at +3.50, and OVERSIZED to +-3.45 x 0.10..3.10 so its edges pass behind the opening's reveals instead of meeting them. No face of this pane shares a plane with any other surface.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the glazing rendered as a 1 m box floating in a 6.8 m opening. The extrude components are the exact opposite and MUST keep scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8x4.6x7."}, "parent": null, "attachment": {"parentSocket": "", "contactType": "embed", "notes": "Sits inside the facade opening, edges buried behind the reveals."}, "dimensions": {"width": 6.9, "height": 3.0, "depth": 0.03, "units": "meters", "confidence": 0.85}, "transform": {"position": [0, 1.6, 3.4], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "glass-tinted", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "green-spandrel-bays", "kind": "decal", "confidence": 0.92, "placement": {"bays": ["outermost left", "outermost right"], "widthEach": 0.85}, "notes": "Full-height opaque vivid-green vinyl-faced spandrel panels bracketing the glazed bays. Painted as canvas regions on this pane rather than modelled: at an opacity of 0.94 the pane is already all but opaque, so a green region on it reads as an opaque panel and costs no geometry, no draw call and no material.", "evidenceRef": "region-glazing"}, {"id": "spandrel-poster-panels", "kind": "decal", "confidence": 0.8, "placement": {"perBay": 1, "anchor": "upper middle of each green bay"}, "notes": "A pale near-white poster rectangle on each green spandrel bay.", "evidenceRef": "region-promo-panel"}, {"id": "transom-rail", "kind": "ridge", "confidence": 0.88, "placement": {"y": 2.34, "spans": "the full glazed width"}, "notes": "Horizontal aluminium transom rail near the head, with a lower sill rail at 0.19 m. Built by the shopfront-framing cluster in front of this pane.", "evidenceRef": "region-glazing"}, {"id": "door-meeting-stile", "kind": "ridge", "confidence": 0.85, "placement": {"x": 0.0, "width": 0.1, "handleAt": [0.1, 1.15]}, "notes": "A wider vertical meeting stile on the building's centre line carrying a vertical pull handle. Built by the shopfront-framing cluster.", "evidenceRef": "region-glazing"}], "surfaceDetail": {"macroRoughness": 0.02, "microRoughness": 0.06, "bumpAmplitude": 0.0, "normalPattern": "float glass, no relief", "displacementPattern": "", "occlusionPattern": "none", "edgeWearPattern": "clean", "notes": "Authored as a SURFACE, not a window: this is an exterior shell with nothing behind the pane, so opacity is 0.94 and the tint plus a tight specular lobe is what makes it read as glass instead of a hole."}, "evidenceRefs": ["region-glazing", "region-promo-panel"], "details": ["green-spandrel-bays", "spandrel-poster-panels"], "fidelityTier": "critical", "actionProfile": {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "shopfront-glazing-node", "notes": "Static pane. The entrance leaves are drawn as framing on this pane and are NOT articulated, so no door pivot is declared."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#7E8C94", "evidenceRef": "region-glazing", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "glass-field", "hex": "#7E8C94", "coverage": 0.72, "evidenceRef": "region-glazing"}, {"id": "green-spandrel", "hex": "#8FC72C", "coverage": 0.24, "evidenceRef": "region-glazing"}, {"id": "poster-panel", "hex": "#EDF2E6", "coverage": 0.04, "evidenceRef": "region-promo-panel"}], "finishStyle": "tinted architectural glass, mostly opaque surface", "materialRef": "glass-tinted", "dominantAlbedo": "rgba(126, 140, 148, 1.0)", "secondaryAlbedo": "rgba(126, 140, 148, 1.0)", "materialClass": "glass", "materialClassConfidence": 0.85}, "levelRationale": "MACRO, not meso. A blockout is the clay mass, and a mass with a 6.80 x 2.85 m hole punched through its front and its roof open to the sky is not a closed solid -- turntable_gate measured the front silhouette as 45% interior hole. The glazed shopfront is 6.80 m of an 8.0 m elevation and the deck is the roof: both are the building's mass, not detail applied to it. The applied bands, the sign, the kerb and every instanced cluster stay meso/micro, so the blockout is still clay-macro.", "uvContract": {"status": "unwrapped", "strategy": "generated procedural coordinates", "materialId": "glass-tinted"}, "materialRegions": [{"regionId": "glass", "materialId": "glass-tinted", "profileId": "glass.clear", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/04-glass.png", "bbox": {"x": 700, "y": 600, "width": 34, "height": 72}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0023}}, {"regionId": "framing", "materialId": "aluminium", "profileId": "metal.aluminum", "crop": {"path": "/home/mulligan/code/thaikit/scratch/ais-shop-building/material-evidence/05-framing.png", "bbox": {"x": 596, "y": 560, "width": 18, "height": 150}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0026}}], "materialRebindNote": "apply_material_analysis rebound this to 'aluminium'; restored to 'glass-tinted', the material this component actually carries."};
  node_shopfront_glazing_5.add(mesh_shopfront_glazing_5);
  meshes["shopfront-glazing"] = mesh_shopfront_glazing_5;
  colliders["shopfront-glazing"] = {};

  const endpoint_shopfront_sill_6 = makeAttachmentEndpoint(null);
  const node_shopfront_sill_6 = new THREE.Group();
  node_shopfront_sill_6.name = "Concrete shopfront kerb__pivot";
  node_shopfront_sill_6.scale.set(1, 1, 1);
  if (endpoint_shopfront_sill_6) {
    node_shopfront_sill_6.position.copy(endpoint_shopfront_sill_6.start);
    node_shopfront_sill_6.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_shopfront_sill_6.position.set(0.0, 0.065, 3.49);
    node_shopfront_sill_6.rotation.set(0.0, 0.0, 0.0);
  }
  node_shopfront_sill_6.userData.sculptComponent = {"id": "shopfront-sill", "name": "Concrete shopfront kerb", "level": "meso", "role": "structure", "importance": 0.45, "confidence": 0.88, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A plain kerb course. Box.", "geometryDescriptor": {"topologyIntent": "single hard-edged box; no bevel, no subdivision", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "1x1x1 segments: 12 triangles. Triangles are not the binding axis here.", "zFightingNote": "Spans z=+3.36 to +3.62, standing 0.12 m proud of the facade and burying its back face 0.14 m inside the wall. Its top face at y=0.15 meets the framing cluster's sill rail, which starts at y=0.12 and therefore OVERLAPS it rather than landing on it. ALSO, the kerb spans y=-0.02..0.15 rather than 0.00..0.15. Its underside at y=0.000 was coplanar and co-facing with the facade wall's own underside -- a 1.01 m2 pair, the largest check-coplanar.mjs found. Both faces point DOWN into the ground and are never seen in normal play, but they would tear the moment the prop is viewed from below or through a floor, so the kerb is buried 0.02 m instead. The pivot stays at base-center on y=0 and the visible base line is unchanged; the model's minimum Y is -0.02 on a 4.6 m prop, well inside the asset's 0.1 scale tolerance.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the glazing rendered as a 1 m box floating in a 6.8 m opening. The extrude components are the exact opposite and MUST keep scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8x4.6x7."}, "parent": null, "attachment": {"parentSocket": "", "contactType": "overlap", "notes": "Proud course under the glazing, back face inside the wall."}, "dimensions": {"width": 7.2, "height": 0.17, "depth": 0.26, "units": "meters", "confidence": 0.88}, "transform": {"position": [0, 0.065, 3.49], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "concrete-grey", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "shopfront-kerb", "kind": "ridge", "confidence": 0.88, "placement": {"proud": 0.12, "height": 0.15}, "notes": "Grey concrete kerb standing proud of the render under the full width of the glazing.", "evidenceRef": "region-kerb"}], "surfaceDetail": {"macroRoughness": 0.12, "microRoughness": 0.35, "bumpAmplitude": 0.1, "normalPattern": "fair-faced concrete", "displacementPattern": "", "occlusionPattern": "occlusion in the kerb's top reveal against the framing", "edgeWearPattern": "light scuffing at the nose", "notes": "Eye-level in a first-person view, unlike the roof deck it shares a material with."}, "evidenceRefs": ["region-kerb"], "details": ["shopfront-kerb"], "fidelityTier": "secondary", "actionProfile": {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "shopfront-sill-node", "notes": "Static kerb, no pivot declared."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#8C8F92", "evidenceRef": "region-kerb", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "field", "hex": "#8C8F92", "coverage": 1.0, "evidenceRef": "region-kerb"}], "finishStyle": "untreated fair-faced concrete, matte", "materialRef": "concrete-grey", "dominantAlbedo": "rgba(140, 143, 146, 1.0)", "secondaryAlbedo": "rgba(140, 143, 146, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.85}};
  node_shopfront_sill_6.userData.actionProfile = {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "shopfront-sill-node", "notes": "Static kerb, no pivot declared."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}};
  (nodes["root"] ?? root).add(node_shopfront_sill_6);
  nodes["shopfront-sill"] = node_shopfront_sill_6;
  const mesh_shopfront_sill_6Geometry = endpoint_shopfront_sill_6
    ? new THREE.CylinderGeometry(endpoint_shopfront_sill_6.endRadius, endpoint_shopfront_sill_6.baseRadius, endpoint_shopfront_sill_6.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_shopfront_sill_6) {
    mesh_shopfront_sill_6Geometry.scale(7.2, 0.17, 0.26);
  }
  const mesh_shopfront_sill_6 = new THREE.Mesh(
    mesh_shopfront_sill_6Geometry,
    materialMap["concrete-grey"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_shopfront_sill_6.name = "Concrete shopfront kerb";
  if (endpoint_shopfront_sill_6) {
    mesh_shopfront_sill_6.position.copy(endpoint_shopfront_sill_6.midpoint);
    mesh_shopfront_sill_6.quaternion.copy(endpoint_shopfront_sill_6.quaternion);
  }
  mesh_shopfront_sill_6.castShadow = options.castShadow ?? true;
  mesh_shopfront_sill_6.receiveShadow = options.receiveShadow ?? true;
  mesh_shopfront_sill_6.userData.sculptComponent = {"id": "shopfront-sill", "name": "Concrete shopfront kerb", "level": "meso", "role": "structure", "importance": 0.45, "confidence": 0.88, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A plain kerb course. Box.", "geometryDescriptor": {"topologyIntent": "single hard-edged box; no bevel, no subdivision", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "1x1x1 segments: 12 triangles. Triangles are not the binding axis here.", "zFightingNote": "Spans z=+3.36 to +3.62, standing 0.12 m proud of the facade and burying its back face 0.14 m inside the wall. Its top face at y=0.15 meets the framing cluster's sill rail, which starts at y=0.12 and therefore OVERLAPS it rather than landing on it. ALSO, the kerb spans y=-0.02..0.15 rather than 0.00..0.15. Its underside at y=0.000 was coplanar and co-facing with the facade wall's own underside -- a 1.01 m2 pair, the largest check-coplanar.mjs found. Both faces point DOWN into the ground and are never seen in normal play, but they would tear the moment the prop is viewed from below or through a floor, so the kerb is buried 0.02 m instead. The pivot stays at base-center on y=0 and the visible base line is unchanged; the model's minimum Y is -0.02 on a 4.6 m prop, well inside the asset's 0.1 scale tolerance.", "scaleConvention": "NO `scale` key on transform, deliberately. generate_threejs_factory.py's scale_vector() SHORT-CIRCUITS on the presence of transform.scale and returns it verbatim; only when the key is ABSENT does it fall through to sizing the unit box from dimensions.width/height/depth. An authored `scale: [1, 1, 1]` therefore reads as 'this box is one metre cubed', and every box in a first draft of this spec collapsed to a unit cube -- the glazing rendered as a 1 m box floating in a 6.8 m opening. The extrude components are the exact opposite and MUST keep scale: [1, 1, 1]: their profile2D points are already in real metres, so falling through to dimensions would rescale an 8 m building by a further 8x4.6x7."}, "parent": null, "attachment": {"parentSocket": "", "contactType": "overlap", "notes": "Proud course under the glazing, back face inside the wall."}, "dimensions": {"width": 7.2, "height": 0.17, "depth": 0.26, "units": "meters", "confidence": 0.88}, "transform": {"position": [0, 0.065, 3.49], "rotationEuler": [0, 0, 0], "rotation": [0, 0, 0]}, "material": "concrete-grey", "materialLayers": [], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "shopfront-kerb", "kind": "ridge", "confidence": 0.88, "placement": {"proud": 0.12, "height": 0.15}, "notes": "Grey concrete kerb standing proud of the render under the full width of the glazing.", "evidenceRef": "region-kerb"}], "surfaceDetail": {"macroRoughness": 0.12, "microRoughness": 0.35, "bumpAmplitude": 0.1, "normalPattern": "fair-faced concrete", "displacementPattern": "", "occlusionPattern": "occlusion in the kerb's top reveal against the framing", "edgeWearPattern": "light scuffing at the nose", "notes": "Eye-level in a first-person view, unlike the roof deck it shares a material with."}, "evidenceRefs": ["region-kerb"], "details": ["shopfront-kerb"], "fidelityTier": "secondary", "actionProfile": {"animationRole": "structure", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.95, "name": "shopfront-sill-node", "notes": "Static kerb, no pivot declared."}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": []}}, "colorMaterialRecipe": {"baseColor": {"hex": "#8C8F92", "evidenceRef": "region-kerb", "notes": "Measured from the named evidence region, not chosen."}, "regions": [{"id": "field", "hex": "#8C8F92", "coverage": 1.0, "evidenceRef": "region-kerb"}], "finishStyle": "untreated fair-faced concrete, matte", "materialRef": "concrete-grey", "dominantAlbedo": "rgba(140, 143, 146, 1.0)", "secondaryAlbedo": "rgba(140, 143, 146, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.85}};
  node_shopfront_sill_6.add(mesh_shopfront_sill_6);
  meshes["shopfront-sill"] = mesh_shopfront_sill_6;
  colliders["shopfront-sill"] = {};

  root.userData.materialMap = materialMap;
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"environment": "neutral studio, mid-grey backdrop", "keyRatio": 3.6, "exposure": 1.0, "notes": "Match the plate's soft studio key so a review comparison measures the model rather than a lighting difference.", "toneMapping": "ACESFilmic", "toneMappingIntent": "Match the plate's soft studio key. ACES holds the sign's saturated green and the white fascia apart instead of clipping both toward white, which is what a linear response does to a lit acrylic panel next to a high-value panel.", "contactShadow": {"mode": "shadow-map", "notes": "The prop is floor-placed, so it needs a real ground contact: the shell casts onto the ground plane, and inside the model the coping casts a short shadow onto the roof deck and the fascia band casts onto the glazing head. Those two internal contacts are what make the two relief steps on the front elevation read."}, "groundShadowBehavior": "receiveShadow on the roof deck and the glazing; castShadow on every component and every cluster."};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createAISShopBuildingLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "AIS Shop Building look-dev lights";
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
  lights.userData.lightingFromPhoto = [{"id": "key", "type": "directional", "direction": [-0.45, -0.72, -0.53], "intensity": 2.0, "color": "#FFF6E8", "notes": "Soft key from upper front-left: the -X wall carries a gentle value falloff toward the front corner and the coping casts a short shadow onto the deck."}, {"id": "fill", "type": "hemisphere", "direction": [0, 1, 0], "intensity": 0.55, "color": "#DCE4EC", "groundColor": "#6E6E6C", "notes": "Studio bounce off a mid-grey backdrop; keeps the shaded wall readable."}, {"id": "rim", "type": "directional", "direction": [0.62, -0.3, 0.72], "intensity": 0.35, "color": "#EAF0F6", "notes": "Weak rim separating the parapet coping from the backdrop."}, {"id": "sign-emission", "type": "emissive-surface", "surface": "fascia-sign", "intensity": 0.35, "color": "#3E6A10", "notes": "The lightbox itself. Carried on the material, not as a scene light: it must not spill onto the render."}, {"id": "exposure-and-shadow", "type": "render-intent", "exposure": 1.0, "toneMapping": "ACESFilmic", "notes": "Exposure 1.0 with ACESFilmic tone mapping, matched to the plate's soft studio key. ACES holds the sign's saturated green apart from the white fascia beside it instead of clipping both toward white, which is what a linear response does to a lit acrylic panel next to a high-value one. Contact shadow: the prop is floor-placed, so the shell casts a ground shadow, and INSIDE the model the coping casts onto the roof deck and the fascia band casts onto the glazing head -- those two internal contacts are what make the front elevation's two relief steps read as relief rather than as flat colour bands. castShadow on every component and cluster; receiveShadow on the roof deck, the glazing and the facade wall. Ambient occlusion is left to the renderer rather than baked, since no AO may enter base colour."}];
  lights.userData.lookDevTargets = {"environment": "neutral studio, mid-grey backdrop", "keyRatio": 3.6, "exposure": 1.0, "notes": "Match the plate's soft studio key so a review comparison measures the model rather than a lighting difference.", "toneMapping": "ACESFilmic", "toneMappingIntent": "Match the plate's soft studio key. ACES holds the sign's saturated green and the white fascia apart instead of clipping both toward white, which is what a linear response does to a lit acrylic panel next to a high-value panel.", "contactShadow": {"mode": "shadow-map", "notes": "The prop is floor-placed, so it needs a real ground contact: the shell casts onto the ground plane, and inside the model the coping casts a short shadow onto the roof deck and the fascia band casts onto the glazing head. Those two internal contacts are what make the two relief steps on the front elevation read."}, "groundShadowBehavior": "receiveShadow on the roof deck and the glazing; castShadow on every component and every cluster."};
  return lights;
}

// PBR materials (clearcoat/iridescence/transmission/anisotropy) need an environment
// map to visually behave as intended — call this once per renderer and assign the
// result to scene.environment before rendering. No external HDR asset required.

// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameAISShopBuildingCamera(
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

// Plan 1.3 §3.2c — PRESENTATION composer (DOF + bloom). CRITICAL (R-POSTFX): this is
// for the showcase/hero render ONLY. The Divine Eye's EVALUATION render MUST use a
// plain renderer with NO composer — bloom blows highlights and DOF blurs edges, which
// would corrupt the deterministic IoU/DCD/edge/blowout signals. Enable dof/bloom ONLY
// when the reference photo actually exhibits them (detect_reference_effects.py authorizes).

export function configureAISShopBuildingRenderer(renderer: THREE.WebGLRenderer): void {
  // Load-bearing for view-dependent finishes (anodized / Doppler): without ACES + sRGB
  // the environment reflection reads flat/washed instead of a believable metal response.
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
}
/** The build pass this factory was generated for. The hand-emitted clusters obey the
 * same macro/meso/micro gate the generator applies to componentTree, so a blockout
 * render shows a blockout and not a finished prop. */
const BUILD_PASS = 'optimization-pass';
// MUST match sculptPipeline.passOrder in the spec. 'surface-pass' was missing from a first
// draft of this list, and indexOf returned -1 for it, so passAtLeast() answered false for
// every gate and the surface pass silently rendered with no clusters and no canvases --
// 7 draw calls instead of 12. A pass gate that fails OPEN is worse than none.
const PASS_ORDER = ['blockout', 'structural-pass', 'form-refinement', 'material-pass',
  'surface-pass', 'lighting-pass', 'interaction-pass', 'optimization-pass'];
const passAtLeast = (p: string): boolean =>
  PASS_ORDER.indexOf(BUILD_PASS) >= PASS_ORDER.indexOf(p);


/* ==================== THAIKIT HAND REFINEMENT ==================== */

/**
 * Emit the four LINEAR repetition clusters the generator cannot.
 *
 * generate_threejs_factory.py distributes instances RADIALLY, evenly around an axis
 * with '(i * 360) / count'. That is right for spokes, teeth and fasteners and wrong
 * for a row of mullions. It also reads `count` while the spec schema writes
 * `instanceCount`, so these four systems are skipped there in silence.
 *
 * Every cluster shares ONE unit BoxGeometry. Per-instance matrices carry the size, so
 * 31 repeated boxes across four clusters cost ONE unique geometry between them --
 * unlike componentTree boxes, where the generator bakes dimensions into vertex data
 * and each becomes distinct. That single fact is what holds this prop inside the
 * hero2x ceiling of 8 unique geometries.
 */
function applyLinearRepetition(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as any;
  const meshes: Record<string, THREE.Mesh> = rt?.meshes ?? {};
  const unit = new THREE.BoxGeometry(1, 1, 1);
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();

  type P = { pos: [number, number, number]; scale: [number, number, number]; color?: string };
  const cluster = (id: string, material: THREE.Material, placements: P[]): void => {
    const inst = new THREE.InstancedMesh(unit, material, placements.length);
    inst.name = id;
    placements.forEach((p, i) => {
      m4.compose(new THREE.Vector3(...p.pos), q, new THREE.Vector3(...p.scale));
      inst.setMatrixAt(i, m4);
      if (p.color) inst.setColorAt(i, new THREE.Color(p.color));
    });
    inst.instanceMatrix.needsUpdate = true;
    if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    inst.castShadow = true;
    inst.receiveShadow = true;
    root.add(inst);
    meshes[id] = inst as unknown as THREE.Mesh;
  };

  const mat = (id: string, fallback: number): THREE.Material =>
    (root.userData.materialMap?.[id] as THREE.Material)
    ?? new THREE.MeshStandardMaterial({ color: fallback });

  // --- shopfront framing: perimeter, six mullions over eight bays, transom, meeting stile ---
  // The band sits at z=3.40..3.53: it OVERLAPS the opening edge by 0.06 m on all four
  // sides rather than meeting the reveals, and its front face stands proud of the wall's
  // own front face at 3.50 instead of sharing that plane.
  const ZF = 3.465;
  const framing: P[] = [
    { pos: [0, 2.93, ZF], scale: [6.92, 0.14, 0.13] },     // head rail
    { pos: [0, 0.19, ZF], scale: [6.92, 0.14, 0.13] },     // sill rail
    { pos: [-3.39, 1.56, ZF], scale: [0.14, 2.88, 0.13] }, // jamb -X
    { pos: [3.39, 1.56, ZF], scale: [0.14, 2.88, 0.13] },  // jamb +X
    { pos: [0, 2.34, ZF], scale: [6.80, 0.10, 0.12] },     // transom rail
    ...([-2.55, -1.70, -0.85, 0.85, 1.70, 2.55].map((x) => ({
      pos: [x, 1.56, ZF] as [number, number, number],
      scale: [0.06, 2.60, 0.12] as [number, number, number],
    }))),
    { pos: [0, 1.245, ZF], scale: [0.10, 2.19, 0.12] },    // door meeting stile
    { pos: [0, 2.30, ZF + 0.005], scale: [1.70, 0.08, 0.12] }, // door head
    { pos: [0.10, 1.15, 3.55], scale: [0.04, 0.34, 0.04] },    // pull handle
  ];
  cluster('shopfront-framing', mat('aluminium', 0xb6babb), framing);

  // --- sign tray return: four rails around the graphic face, standing 0.01 m proud of it ---
  const ZT = 3.5825;
  cluster('sign-tray-return', mat('sign-green', 0x8fc72c), [
    { pos: [0, 3.895, ZT], scale: [5.96, 0.08, 0.125] },
    { pos: [0, 3.045, ZT], scale: [5.96, 0.08, 0.125] },
    { pos: [-2.92, 3.47, ZT], scale: [0.08, 0.97, 0.125] },
    { pos: [2.92, 3.47, ZT], scale: [0.08, 0.97, 0.125] },
  ]);

  // --- rooftop plant: two condensers, duct run, support rail, two darker grille plates ---
  // Every top sits at or below y=4.52, under the coping at 4.60 -- the plate shows the
  // plant silhouetted AGAINST the parapet, not over it.
  cluster('rooftop-plant', mat('galvanised', 0xa6abad), [
    { pos: [-1.55, 4.15, 0.55], scale: [1.05, 0.50, 0.46] },
    { pos: [1.35, 4.15, 0.30], scale: [1.05, 0.50, 0.46] },
    { pos: [0.10, 4.16, -0.95], scale: [3.30, 0.52, 0.72] },
    { pos: [-2.35, 4.12, -0.70], scale: [0.95, 0.44, 0.70] },
    { pos: [1.95, 4.16, -0.95], scale: [0.70, 0.52, 0.72] },
    { pos: [0.10, 3.96, -0.30], scale: [3.60, 0.08, 0.10] },
    // instanceColor MULTIPLIES the material colour, it does not replace it. An authored
    // #4A4E50 against galvanised #A6ABAD resolved to roughly #303234 and the grilles rendered
    // as pure black holes -- darker than the plate's mid-grey mesh, and reading as a gap in
    // the casing rather than as a grille. #9AA0A4 multiplies through to about #646A6D.
    { pos: [-1.55, 4.15, 0.79], scale: [0.52, 0.38, 0.03], color: '#9AA0A4' },
    { pos: [1.35, 4.15, 0.54], scale: [0.52, 0.38, 0.03], color: '#9AA0A4' },
  ]);

  // --- parapet coping: a lighter cap on all four sides, 0.05 m proud of each face ---
  // The walls stop at y=4.52 and this owns 4.44..4.60, so the wall's top face is buried inside
  // the cap rather than sharing the plane with it. Corners overlap, which is a butt of the same
  // material and not a coincident co-facing pair.
  cluster('parapet-coping', mat('white-panel', 0xedefef), [
    { pos: [0, 4.52, 3.40], scale: [8.10, 0.16, 0.30] },
    { pos: [0, 4.52, -3.40], scale: [8.10, 0.16, 0.30] },
    { pos: [-3.90, 4.52, 0], scale: [0.30, 0.16, 7.10] },
    { pos: [3.90, 4.52, 0], scale: [0.30, 0.16, 7.10] },
  ]);

  // --- side wall service door: architrave 0.08 m proud, leaf only 0.037 m proud inside
  // it, so the leaf READS recessed relative to its surround. Stated deviation: the plate
  // shows a genuine recess, which would need a second hole in an extrusion already
  // carrying the shopfront opening plus four more reveal faces. ---
  cluster('side-wall-fittings', mat('render-cream', 0xe4d2ac), [
    { pos: [-4.035, 2.155, 1.15], scale: [0.09, 0.11, 1.06] },
    { pos: [-4.035, 1.05, 1.71], scale: [0.09, 2.21, 0.06] },
    { pos: [-4.035, 1.05, 0.59], scale: [0.09, 2.21, 0.06] },
    { pos: [-4.012, 1.05, 1.15], scale: [0.05, 2.10, 0.90], color: '#FFF6E2' },
    { pos: [-4.055, 1.00, 0.72], scale: [0.05, 0.05, 0.14], color: '#9EA2A3' },
  ]);
}

/**
 * The two canvases, drawn and assigned AFTER material construction.
 *
 * All seven materials declare `textureless`, so createSculptMaterial skips
 * makeProceduralTextureSet entirely -- five synthesised canvases per material, written
 * pixel by pixel in JavaScript at a cost that is the SQUARE of the resolution. That
 * declaration deliberately leaves ONE texture route open: a map assigned to a mesh after
 * its material exists. It is the right route for printed graphics and the wrong one for
 * a surface finish, and these are the only two printed graphics on the prop.
 *
 * Both are drawn ORTHOGRAPHICALLY. The plate sees the sign obliquely and its green face
 * carries a left-to-right lightening that reads as lightbox lamp falloff; projecting
 * those pixels would bake both the perspective and the lighting into base colour.
 */
/**
 * True only where a 2D canvas can actually be created. The factory is evaluated OUTSIDE a browser
 * by parts of thaikit's own tooling -- the parts-coverage manifest walks the built Group in node
 * -- and `document.createElement` throws there. A factory that dies outside a DOM is fragile for
 * no benefit: the canvases carry printed graphics, not structure, so the right behaviour without
 * a DOM is to skip them and still return a complete, walkable model.
 */
function hasCanvas(): boolean {
  return typeof document !== 'undefined' && typeof document.createElement === 'function';
}

function makeGraphicCanvas(w: number, h: number): { c: HTMLCanvasElement; g: CanvasRenderingContext2D } {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return { c, g: c.getContext('2d') as CanvasRenderingContext2D };
}

function asTexture(c: HTMLCanvasElement): THREE.CanvasTexture {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  t.needsUpdate = true;
  return t;
}

/**
 * The white AIS swoosh: a bold crescent, blunt and thick at the left, sweeping down and then
 * hooking UP to a sharp point at the right. Measured off crops/fascia-sign.png -- it is about
 * 0.9x the cap height of the wordmark beside it and sits immediately to its left.
 */
function drawSwoosh(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number): void {
  g.fillStyle = '#FFFFFF';
  g.beginPath();
  // upper edge, left blunt end -> sweeping down -> hooking up to the sharp right tip
  g.moveTo(x, y + h * 0.06);
  g.bezierCurveTo(x + w * 0.16, y + h * 0.74, x + w * 0.56, y + h * 1.02, x + w, y);
  // lower edge back to the left end, closer in: the gap between the two curves is the taper
  g.bezierCurveTo(x + w * 0.62, y + h * 0.80, x + w * 0.30, y + h * 0.60, x + w * 0.16, y + h * 0.06);
  g.closePath();
  g.fill();
}

/** The shipped sign, baked from the plate's own mark -- see applyCanvasGraphics. */
const SIGN_IMAGE_DATA_URL = 'data:image/webp;base64,UklGRjolAABXRUJQVlA4IC4lAABwTgGdASoACAACPjEYiEQiIYhtiBABglpbvxn+f/AHpbr5U1iT75fxn5aeG3IPd37f/cv2H/eb/EfPfWf61/Rvzb+8X9x5RaqvoA+JnxH8z/xX9+/ab+7//////f//T+pb9U/9r3Af4r/KP8n/o/8P/qf6p/////+cvQZ5gf1w/73+R/f/5b/8v+33uw/tX+9/0P9d/wHyAfzD+m/8r8/+8j/bf2AP6D/hP+P+f/y9f8H/zf5P/mf/////ab+0H/l/x3/D///0Lf0D+2/9D8///T9AHoAdRv1I/33997lf85/evP+w0dD8Df499xf5nmr3t8AL8c/oO6xgA/ju8b1bsgL9WuK1oB/0T/L+ivpKewgQ4nuevXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evWfItneEs0WLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsThCcXoeiP94ALzzVW8kMBukNgt04LFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixX1Cz3MQHG+kAk608XdYex2p06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTmm4Y9QilKCJENQNj1J4qz3PXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr168YvzXKMMTqQ2C2+zu/NtgquVISErN7hlDdsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYr4KWhxkk21sgFnt9ZZ/zKdMVi1KD+INSyu2FNlU9Rmgjx48ePHjx48ePHjx48ePHjx48ePHjx48ePHjx48ePHjx48ePHjx48ePHjx48eN7IK82uAB93yc+47/R/C9ZAIP/1bh80FJYhoAfMMK6cFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLfSosnTvO+e3cOlbguoxU3TsAQ7l5ntxixGof+B2sRw7J5uMsNOU6dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp05oqe/moZiBc7rk0Wmp5TKZ8ePHjx48ePHjx48ePHjx48ePHjx48ePHjx48ePHjx48ePHjx48ePHjx48ePHjx48ePAxZjTuZ04yQ2CzjHb0X9DXEWC3TXC8jOevXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evWNBrHDwsUuXgHe9AMr9xkhr2F8UuFfIp0SK9eoo9PfubmQz1QomTQiYkexzj1q3l/kSQMkMb1KVUYDdIbBbpwWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsToqaGau+NVqCGFkfBe/sZeGImINTrhbyFDshkcmt6ShhmI3ch5PNZKFUQH4T4oIs6ytSI5f+CxYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYnFH6I5gtkslFXS6XSjkHLgdkf0cAMqxpt/9vAytns5K1VnRN+TnaN1MEYZPm55BFCtfoqyd7kk5XlUCZb0skUeeERIPiKAG6Q2C3TgsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWK+TlIJdYFzKMFbMv282wNVsqniO2js43zcre0iCFUgkt3Der50XR3h0p8ChmMekBj4mrpEzs7riPeLYLdOCxYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFivh6Wg63Bf0yD/j13+BweSctAIOepVJ3rcD4vrcekBvl1n4iHc6imkswAL3JRTukNgt04LFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYnQHH3irqjJVAYTfC0EizO3bx76ywLcyoPJ6emMLZb3IZkUDMywD28iKzZyXSmOpUluevXr169evXr169evXr169evXr169evXr169evXr169evXr169evXr169evXuhPs6IIdl5UBRw9QnfHlsMrpZQGa36VuTpUAFKbAo/3gDJbCLNn+Fe2Ic0cs5PRXELcZvxUaCb9lII8ePHjx48ePHjx48ePHjx48ePHjx48ePHjx48ePHjx48ePHjx48ePHjx48ePIQ5vy+OJ7W6+GgOaWGEjbYZJD0gMfE4LVHy25Oyr+zk730IGl8kMBukNgt04LFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsV8juTAl44bytGcNBLQMpCtgMzCo2dpriwsNkvaRKmwEaLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWK+YWKSqk1LJexuU3eGPUngNc6vIZwDdPpGBXrRyLUHf8EgdarMlpi93DOoOBc+SGA3SGwW6cFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWK+aINJjkYHaHznt7Sv5DANLDIK9CSUw0+8lbEhqomJAblUi6KmXZTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTF95cqdLOrHEkI6yJVb/jp/ggLE0RZSVtNuaq/MZnZEo3Be2Ea2hWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLGf8p06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp0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';

/** Decode fallback only: a hand-drawn approximation of the mark, never the shipped look. */
function drawFallbackSign(): HTMLCanvasElement {
  const { c, g } = makeGraphicCanvas(1024, 152);
  g.fillStyle = '#8FC72C';
  g.fillRect(0, 0, c.width, c.height);
  g.fillStyle = '#FFFFFF';
  g.font = 'bold 92px "Helvetica Neue", Helvetica, Arial, sans-serif';
  g.textBaseline = 'middle';
  const word = 'AIS';
  const wordW = g.measureText(word).width;
  const swooshW = 150, gap = 26;
  const markW = swooshW + gap + wordW;
  const x0 = (c.width - markW) / 2;
  drawSwoosh(g, x0, c.height * 0.30, swooshW, c.height * 0.34);
  g.fillText(word, x0 + swooshW + gap, c.height * 0.55);
  return c;
}

function applyCanvasGraphics(root: THREE.Group): void {
  if (!hasCanvas()) return;
  const rt = root.userData.sculptRuntime as any;
  const meshes: Record<string, THREE.Mesh> = rt?.meshes ?? {};

  // --- the AIS fascia mark, on the 0.03 m graphic face ---
  // It lives on a thin plate rather than on the tray body for a concrete reason: a canvas
  // map on a BoxGeometry lands on ALL SIX faces, so a deep tray would carry a squashed
  // slice of the mark down each edge. The tray's proud return is a separate cluster.
  const sign = meshes['fascia-sign'];
  if (sign) {
    // The mark is the plate's own: scratch/<id>/sign/rectify.py perspective-rectifies
    // crops/fascia-sign.png on its measured edge lines, extracts the white pixels, and
    // blur-thresholds them into a clean silhouette -- the double swoosh (thin wing over a
    // thick crescent) and the rounded wordmark, exactly as drawn on the reference. compose.py
    // places it at the plate's own mark-height / sign-height ratio (0.65, 1.175 x 0.522 m)
    // centred on the face, on the authored lightbox green, and bakes a 2048 x 512 WebP --
    // non-square pixels, 353 px/m across against 640 px/m up, so the mark keeps its 334 px
    // of height on a 7.25:1 face. The bbox is MEASURED off the mask each time compose.py runs:
    // a stale hard-coded 75..369 once shipped the wordmark with its bottom quarter cut off.
    // Baked ONCE and embedded (9.5 KB) so it is identical on every
    // host; the canvas drawing below is only the decode fallback, and it is a known
    // approximation (single crescent, fillText in whatever font the host has).
    const m = (sign.material as THREE.MeshStandardMaterial).clone();
    const baked = new THREE.TextureLoader().load(SIGN_IMAGE_DATA_URL, undefined, undefined, () => {
      m.map = asTexture(drawFallbackSign());
      m.emissiveMap = m.map;
      m.needsUpdate = true;
    });
    baked.colorSpace = THREE.SRGBColorSpace;
    baked.anisotropy = 4;
    m.map = baked;
    // A `map` MULTIPLIES `color`. Leaving the authored #8FC72C on the material while the image
    // also carries #8FC72C squares the green and renders a vivid lightbox as dark olive -- and it
    // crushes the white mark to a pale green smear. Once a map carries the albedo, the colour
    // slot must be white or it is applied twice.
    m.color = new THREE.Color(0xffffff);
    m.needsUpdate = true;
    sign.material = m;
  }

  // --- the shopfront graphic: green spandrel bays and their poster panels ---
  // The two end bays are OPAQUE green vinyl-faced spandrel, not glass. They are canvas
  // regions on the single glazing pane rather than components: at opacity 0.94 the pane
  // is already all but opaque, so a green region on it reads as an opaque panel and costs
  // no geometry, no draw call and no material. Modelling them would have cost one of each,
  // on a prop whose geometry ceiling is at 8 of 8.
  const glazing = meshes['shopfront-glazing'];
  if (glazing) {
    const { c, g } = makeGraphicCanvas(1024, 445);          // 6.90 x 3.00 m
    g.fillStyle = '#626D75';                          // tinted glass field: the AUTHORED albedo,
    // carried here rather than on material.color now that the map owns the albedo
    g.fillRect(0, 0, c.width, c.height);
    const bay = c.width * (0.85 / 6.90);              // one 0.85 m bay
    for (const x of [0, c.width - bay]) {
      g.fillStyle = '#8FC72C';
      g.fillRect(x, 0, bay, c.height);
      // Poster panel: measured off crops/promo-panel-left.png as roughly 70% of the bay's width
      // and a third of its height, sitting a little above centre -- NOT the half-bay slab a first
      // draft drew. Very pale green-white, not pure white.
      g.fillStyle = '#EAF1E2';
      g.fillRect(x + bay * 0.15, c.height * 0.30, bay * 0.70, c.height * 0.34);
    }
    const m = (glazing.material as THREE.MeshStandardMaterial).clone();
    m.map = asTexture(c);
    // Same multiply: the tinted #7E8C94 against a #5E6B73 canvas field resolved to rgb(46,59,67),
    // which read as a black hole rather than as glass -- the exact failure an exterior shell's
    // glazing has to avoid. The canvas is the albedo now, so the colour slot is white.
    m.color = new THREE.Color(0xffffff);
    m.needsUpdate = true;
    glazing.material = m;
  }
}

/** Surface refinements that are properties of the SCENE, not of the spec's material block. */
function applySurfaceRefinements(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as any;
  const meshes: Record<string, THREE.Mesh> = rt?.meshes ?? {};

  // Glass as a SURFACE, not a window. This is an exterior shell -- there is nothing behind
  // the pane -- so a near-transparent sheet over an empty interior reads as a hole punched
  // in the building. Mostly opaque, darker than the render, low roughness so it catches the
  // key as a highlight.
  const glazing = meshes['shopfront-glazing'];
  if (glazing) {
    const m = glazing.material as THREE.MeshPhysicalMaterial;
    m.transmission = 0;
    m.transparent = true;
    m.opacity = 0.94;
    m.roughness = 0.08;
    m.metalness = 0.10;
    m.depthWrite = true;
    m.side = THREE.DoubleSide;
    m.needsUpdate = true;
  }

  // Evidence-driven albedo corrections from material_comparator, applied as a refine-code edit
  // on the built artifact. They are ALSO recorded in the spec's materials block -- the spec is
  // the source of truth and this is the same value, not a second one -- but a locked build pass
  // will not regenerate while its own material gate is unsatisfied, and refine-code is the
  // pipeline action for exactly that: fix the artifact, re-measure, then let the gate clear.
  for (const [id, hex] of [['roof-deck', '#8C8F92'], ['shopfront-sill', '#8C8F92']] as [string, string][]) {
    const m = meshes[id]?.material as THREE.MeshStandardMaterial | undefined;
    if (m) { m.color = new THREE.Color(hex); m.needsUpdate = true; }
  }
  const plant = meshes['rooftop-plant']?.material as THREE.MeshStandardMaterial | undefined;
  if (plant) { plant.color = new THREE.Color('#7C7A74'); plant.needsUpdate = true; }
  const frame = meshes['shopfront-framing']?.material as THREE.MeshStandardMaterial | undefined;
  if (frame) { frame.color = new THREE.Color('#8E9294'); frame.needsUpdate = true; }

  // The lightbox. The plate's green measures #A0CB1F, BRIGHTER than the authored albedo
  // #8FC72C; the difference is emission from the lamps behind the acrylic. Carried here so
  // the authored albedo survives instead of having the brightness baked into it.
  const sign = meshes['fascia-sign'];
  if (sign) {
    const m = sign.material as THREE.MeshStandardMaterial;
    m.emissive = new THREE.Color('#3E6A10');
    m.emissiveIntensity = 0.22;
    if (m.map) m.emissiveMap = m.map;
    m.needsUpdate = true;
  }
}

/**
 * thaikit entry point.
 *
 * The registry records `createObjectModel` as the export and calls it with (spec, options);
 * the generated factory is named for its target and takes options alone. `spec` is accepted
 * and attached for host-side inspection -- the reconstruction data already lives in this
 * module, so it is deliberately not treated as a second source of truth.
 *
 * It also NORMALISES sculptRuntime into the shape thaikit's harness and drawer read. The
 * generator emits Records keyed by id; the harness maps over arrays and returns the object
 * straight across the puppeteer bridge, where a Record of Object3D is circular and fails to
 * serialise -- which surfaces not as an error but as the whole stats object arriving
 * undefined.
 */
export function createObjectModel(
  spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = createAISShopBuildingModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  // meso/micro detail: the framing, tray return, roof plant and side fittings
  if (passAtLeast('structural-pass')) applyLinearRepetition(root);
  // printed graphics and finish response belong to the material pass onward
  if (passAtLeast('material-pass')) {
    applyCanvasGraphics(root);
    applySurfaceRefinements(root);
  }

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // PIVOTS: exactly ONE, the root. This is a fixed building shell. It has no lid, no
    // wheel and no door leaf that a game will articulate, so every other component
    // declares animationRole 'structure' and gets no axis. A pivot per component would
    // describe a machine this prop is not -- and a named pivot is a promise that a part
    // turns on that axis, which the kit would then have to keep.
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

    // SOCKETS: exactly ONE, sign-mount. The generator names the Object3D positionally
    // ('socket-0'); rename it to the MECHANISM name it declares, because a socket named
    // after its ordinal tells a consumer nothing about what attaches there.
    const sockets = Object.values((rt.sockets ?? {}) as Record<string, THREE.Object3D>);
    for (const s of sockets) {
      const declared = (s as any)?.userData?.socket?.name;
      if (typeof declared === 'string' && declared) s.name = declared;
    }

    // Colliders are plain DATA, not Object3D, so they carry no .name of their own and would
    // stringify as [object Object] in any name-mapping consumer. Give each the id of the
    // component it owns -- and drop the empty ones: the generator writes a collider entry
    // for every component whether or not one was declared, and a nameless empty proxy in
    // the runtime list reads as a physics shape that exists and does nothing.
    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // Destruction groups: this prop declares NONE, and promotion checks built against
    // declared as an equality in BOTH directions. Derived rather than assumed empty, so a
    // component that somehow carried a fractureGroup fails the gate loudly instead of
    // being silently dropped here.
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
      // A COUNT, not the Record -- see the doc comment above.
      nodes: Object.keys(nodes).length,
      pivots,
      sockets,
      colliders,
      destructionGroups: [...grouped.entries()].map(([name, members]) => ({ name, members })),
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: rt.sockets ?? {} },
    };
  }
  return root;
}

/**
 * The one-argument entry point: vibe3d's contract, and img2threejs's own.
 *
 * `createObjectModel` above keeps thaikit's historical (spec, options) shape so
 * the harness, the level editor and the Node-side gates carry on unchanged.
 * `spec` has never been passed by any caller -- it is inspection data that is
 * already baked into this module -- so this is the honest signature, and it is
 * what a vibe3d consumer installs and calls.
 */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}
