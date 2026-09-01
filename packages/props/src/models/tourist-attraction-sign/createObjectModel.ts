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

// Generated from ObjectSculptSpec target: Tourist Attraction Sign
// Sculpt build pass: blockout
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createTouristAttractionSignModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "Tourist Attraction Sign";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 40.0, "aspect": 1.0, "orientation": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "positionHint": [0.0, 0.0, 3.0], "note": "For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."}, "approximationNotes": []};
  root.userData.materialPipeline = {};
  root.userData.materialReferenceRegistry = null;

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["sheeting"] = createSculptMaterial(
    "sheeting",
    {"id": "sheeting", "name": "Painted timber board and frame", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#FFFFFF", "color": "#FFFFFF", "albedo": {"dominant": "#FFFFFF", "secondary": ["#655851", "#D4D3CF", "#D8D6D2"], "samplingNotes": "White on purpose. The albedo is delivered by the board atlas assigned after material construction, and any tint here would multiply into the painted graphic."}, "colorVariation": {"palette": ["#655851", "#D4D3CF", "#D8D6D2", "#C7C4BE"], "pattern": "authored-regions", "amplitude": 0.0, "heightCorrelation": 0.0}, "roughness": {"base": 0.72, "variation": 0.06, "map": "none", "localResponse": "Calendered vinyl over aluminium: smooth, with no tight highlight anywhere on the plate."}, "metalness": {"base": 0.0, "variation": 0.0, "notes": "Dielectric. The vinyl is what is seen; the plate underneath never reaches the surface on the front cap."}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "Flat plate, no cavities."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "field-brown", "color": "#655851", "region": "the board's brown ground inside the frame", "evidenceRef": "region-field", "notes": "Trimmed mean #655851 over the full 7200 px of (420,180,120,60), high on the board and clear of both the legend and the arrow. A warm NEUTRAL brown rather than a saturated printed colour - this board is painted timber, not vinyl sheeting, and that is the single biggest material difference between this prop and the other seven."}, {"id": "frame-white", "color": "#D4D3CF", "region": "the wide painted frame on all four sides", "evidenceRef": "region-frame", "notes": "Trimmed mean of the 1274 bright px (luma>170) of (760,200,26,180), down the frame's right stile. A crop taken at (300,150,40,20) on the frame's shadowed left return returned #ABABAB and was DISCARDED - it is within 1 luma of the backdrop's #A9A9A9 and is backdrop contamination, not paint."}, {"id": "legend-white", "color": "#D8D6D2", "region": "both legend lines and the direction arrow", "evidenceRef": "region-legend", "notes": "Trimmed mean of the 5092 bright px of (380,290,300,60), across the Latin transliteration. Within 4 luma of the frame white, which is expected: the same paint was used for the frame and the lettering."}, {"id": "board-back", "color": "#C7C4BE", "region": "the board's back cap and its edge wall", "evidenceRef": "single-view-inference", "notes": "NOT OBSERVED as a face, but the three-quarter view does show the board's left EDGE as a pale weathered band, so this is inferred from an adjacent surface rather than invented. Confidence 0.6. This is the colour every non-front-cap vertex collapses onto in the atlas."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["Reference plate, brown field at (420,180,120,60): 7200 px trimming to #655851. Chalky matte paint on timber, with no relief resolvable at prop distance.", "Reference plate, frame stile at (760,200,26,180): 1274 bright px trimming to #D4D3CF. Flat paint, flaking at the arrises but flat across the face.", "The identity of this surface is PAINTED, not textured. It arrives as a canvas atlas assigned after material construction, which the textureless declaration does not touch.", "Measured cost: five synthesised canvases at 1024 would cost roughly 1.9 s inside createObjectModel for this one material, and the generator would additionally force color to white and roughness to 1 and read both from the generated maps - discarding the measured #655851 that makes this board brown rather than grey."]}},
    options
  );
  materialMap["galvanised"] = createSculptMaterial(
    "galvanised",
    {"id": "galvanised", "name": "Hot-dip galvanised steel, weathering to rust at the foot", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#FFFFFF", "color": "#FFFFFF", "albedo": {"dominant": "#777B79", "secondary": ["#6C533F"], "samplingNotes": "White base colour because the measured vertical ramp is delivered as VERTEX COLOURS, not a texture - a tint here would multiply into it."}, "colorVariation": {"palette": ["#777B79", "#6C533F"], "pattern": "mottled", "amplitude": 0.18, "heightCorrelation": 0.0}, "roughness": {"base": 0.62, "variation": 0.12, "map": "none", "localResponse": "Mill-finish galvanising scatters rather than reflecting a lobe; the rusted foot is rougher still."}, "metalness": {"base": 0.25, "variation": 0.0, "notes": "Held at 0.25, not the high value a zinc coating suggests by name. There is no environment map in the target harness, so a high metalness has nothing to reflect and renders near-black. The measured luma spread of the shaft is scatter, not a lobe."}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "Prismatic solid, no cavities."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "galv-spangle", "color": "#777B79", "region": "both tubes above the rust ramp", "evidenceRef": "region-post", "notes": "Trimmed mean #777B79 over the 7497 NEUTRAL pixels (|R-B|<12) of (330,600,50,150) on the left tube. 7497 of 7500 px pass the neutral filter, which is the cleanest galvanising reading of the eight props."}, {"id": "foot-rust", "color": "#6C533F", "region": "the lower third of both tubes", "evidenceRef": "region-foot", "notes": "Trimmed mean #6C533F over the 2067 ORANGE-BIASED px (R-B>28) of (330,860,55,110). Climbs as a RAMP with no hard top edge, unlike the square-post siblings' splash lines - the reference shows the same gradient on both tubes, so they share one ramp rather than being weathered independently."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["Reference plate, left tube at (330,600,50,150): 7497 of 7500 px pass a strict neutral filter, trimming to #777B79 - the cleanest galvanising reading of the eight props.", "Reference plate, tube foot at (330,860,55,110): 2067 ORANGE-BIASED px (R-B>28) trimming to #6C533F - a surface bloom on a smooth tube, not a pitted profile at prop distance.", "The spangle and the rust ramp arrive as VERTEX COLOURS over 10 height segments per tube, so a synthesised five-canvas set would be discarded work.", "Measured cost: five canvases at 1024 for this material alone is roughly 1.9 s inside createObjectModel, on a support whose whole geometry is 440 triangles."]}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_sign_board_0 = makeAttachmentEndpoint(null);
  const node_sign_board_0 = new THREE.Group();
  node_sign_board_0.name = "Framed directional board__pivot";
  node_sign_board_0.scale.set(1, 1, 1);
  if (endpoint_sign_board_0) {
    node_sign_board_0.position.copy(endpoint_sign_board_0.start);
    node_sign_board_0.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_sign_board_0.position.set(0.0, 2.09, 0.03);
    node_sign_board_0.rotation.set(0.0, 0.0, 0.0);
  }
  node_sign_board_0.userData.sculptComponent = {"id": "sign-board", "name": "Framed directional board", "level": "macro", "role": "panel", "importance": 1.0, "confidence": 0.8, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "A flat rectangular board inside a raised painted frame: two parallel planar caps joined by a short wall, closed and rigid. The frame is a PRINTED region of the same face, not a separate solid - see the localFeatures note.", "geometryDescriptor": {"topologyIntent": "ExtrudeGeometry over a rounded-rectangle profile, 1.2 x 0.62, corner radius 0.012, depth 0.055.", "profile2D": {"kind": "rounded-rect", "halfWidth": 0.6, "halfHeight": 0.31, "cornerRadius": 0.012, "cornerSegments": 4, "depth": 0.055, "points": [[0.588, -0.31], [0.59259, -0.30909], [0.59649, -0.30649], [0.59909, -0.30259], [0.6, -0.298], [0.6, 0.298], [0.59909, 0.30259], [0.59649, 0.30649], [0.59259, 0.30909], [0.588, 0.31], [-0.588, 0.31], [-0.59259, 0.30909], [-0.59649, 0.30649], [-0.59909, 0.30259], [-0.6, 0.298], [-0.6, -0.298], [-0.59909, -0.30259], [-0.59649, -0.30649], [-0.59259, -0.30909], [-0.588, -0.31]], "note": "The explicit polygon the layer builds. Corners are near-square here, unlike the informatory plates in this set: the reference shows a timber-framed board with sharp mitred corners, so the 12 mm radius is a manufacturing round rather than a design radius."}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - rewritten after generation into a two-region atlas: the front cap takes the board graphic INCLUDING its white frame, and every wall and back-cap vertex collapses to a single weathered-white texel. The frame being printed rather than modelled is what keeps this prop at one geometry for the board.", "normalStrategy": "flat-shaded caps, flat wall", "segmentRationale": "Four segments per corner on a 12 mm radius. The board is otherwise straight and gets one segment everywhere."}, "parent": null, "attachment": null, "dimensions": {"width": 1.2, "height": 0.62, "depth": 0.055, "units": "m", "confidence": 0.7}, "transform": {"position": [0, 2.09, 0.03], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. The board does not turn on anything; this is the component's own transform origin, and the model exposes exactly ONE named pivot, the root."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0, 0], "scale": [0.6, 0.0275, 0.6], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A convex proxy circumscribing the board."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "sheeting"}}, "material": "sheeting", "materialLayers": ["sheeting"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "painted-frame", "description": "Wide white painted frame surrounding the brown field on all four sides, with the paint flaking off its arrises. PRINTED into the atlas, not modelled as a separate solid: modelling it would cost a second geometry and a second draw call for a band that is flat at prop distance.", "representation": "texture-region"}, {"id": "legend-lines", "description": "Two white legend lines on the brown field, a large Thai place name over a Latin transliteration.", "representation": "texture-region"}, {"id": "direction-arrow", "description": "A white right-pointing arrow at the right end of the field, level with the Thai line. Chiral: it points one way and the atlas must not mirror it.", "representation": "texture-region"}, {"id": "flaked-paint", "description": "Chalky white paint flaking off the frame's arrises to show weathered timber beneath - the strongest age cue on this prop.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#655851", "stops": [{"position": 0.0, "color": "rgba(212,211,207,1.0)", "note": "the white painted frame, measured #D4D3CF over 1274 bright px on the frame's right stile"}, {"position": 0.1, "color": "rgba(212,211,207,1.0)", "note": "frame inner edge - the frame is a wide band, not a rule"}, {"position": 0.13, "color": "rgba(101,88,81,1.0)", "note": "brown board field begins, measured #655851 over 7200 px"}, {"position": 1.0, "color": "rgba(101,88,81,1.0)", "note": "brown field across the board; the legend and arrow sit on top of it as solid fill"}], "finishStyle": "matte", "notes": "An ordered ramp measured INWARD from the board edge. This is the only sign in the set whose 'sheeting' is not vinyl at all: the reference shows chalky painted timber with the paint flaking off the frame's arrises, so the finish is MATTE where every sibling is satin, and the brown is a warm neutral rather than a printed colour.", "dominantAlbedo": "rgba(101,88,81,1.0)", "secondaryAlbedo": "rgba(212,211,207,1.0)", "materialClass": "wood", "materialClassConfidence": 0.75}};
  node_sign_board_0.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. The board does not turn on anything; this is the component's own transform origin, and the model exposes exactly ONE named pivot, the root."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0, 0], "scale": [0.6, 0.0275, 0.6], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A convex proxy circumscribing the board."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "sheeting"}};
  (nodes["root"] ?? root).add(node_sign_board_0);
  nodes["sign-board"] = node_sign_board_0;
  const mesh_sign_board_0Geometry = endpoint_sign_board_0
    ? new THREE.CylinderGeometry(endpoint_sign_board_0.endRadius, endpoint_sign_board_0.baseRadius, endpoint_sign_board_0.length, 8, 4)
    : buildExtrudeGeometry({"kind": "rounded-rect", "halfWidth": 0.6, "halfHeight": 0.31, "cornerRadius": 0.012, "cornerSegments": 4, "depth": 0.055, "points": [[0.588, -0.31], [0.59259, -0.30909], [0.59649, -0.30649], [0.59909, -0.30259], [0.6, -0.298], [0.6, 0.298], [0.59909, 0.30259], [0.59649, 0.30649], [0.59259, 0.30909], [0.588, 0.31], [-0.588, 0.31], [-0.59259, 0.30909], [-0.59649, 0.30649], [-0.59909, 0.30259], [-0.6, 0.298], [-0.6, -0.298], [-0.59909, -0.30259], [-0.59649, -0.30649], [-0.59259, -0.30909], [-0.588, -0.31]], "note": "The explicit polygon the layer builds. Corners are near-square here, unlike the informatory plates in this set: the reference shows a timber-framed board with sharp mitred corners, so the 12 mm radius is a manufacturing round rather than a design radius."});
  if (!endpoint_sign_board_0) {
    mesh_sign_board_0Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_sign_board_0 = new THREE.Mesh(
    mesh_sign_board_0Geometry,
    materialMap["sheeting"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_sign_board_0.name = "Framed directional board";
  if (endpoint_sign_board_0) {
    mesh_sign_board_0.position.copy(endpoint_sign_board_0.midpoint);
    mesh_sign_board_0.quaternion.copy(endpoint_sign_board_0.quaternion);
  }
  mesh_sign_board_0.castShadow = options.castShadow ?? true;
  mesh_sign_board_0.receiveShadow = options.receiveShadow ?? true;
  mesh_sign_board_0.userData.sculptComponent = {"id": "sign-board", "name": "Framed directional board", "level": "macro", "role": "panel", "importance": 1.0, "confidence": 0.8, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "A flat rectangular board inside a raised painted frame: two parallel planar caps joined by a short wall, closed and rigid. The frame is a PRINTED region of the same face, not a separate solid - see the localFeatures note.", "geometryDescriptor": {"topologyIntent": "ExtrudeGeometry over a rounded-rectangle profile, 1.2 x 0.62, corner radius 0.012, depth 0.055.", "profile2D": {"kind": "rounded-rect", "halfWidth": 0.6, "halfHeight": 0.31, "cornerRadius": 0.012, "cornerSegments": 4, "depth": 0.055, "points": [[0.588, -0.31], [0.59259, -0.30909], [0.59649, -0.30649], [0.59909, -0.30259], [0.6, -0.298], [0.6, 0.298], [0.59909, 0.30259], [0.59649, 0.30649], [0.59259, 0.30909], [0.588, 0.31], [-0.588, 0.31], [-0.59259, 0.30909], [-0.59649, 0.30649], [-0.59909, 0.30259], [-0.6, 0.298], [-0.6, -0.298], [-0.59909, -0.30259], [-0.59649, -0.30649], [-0.59259, -0.30909], [-0.588, -0.31]], "note": "The explicit polygon the layer builds. Corners are near-square here, unlike the informatory plates in this set: the reference shows a timber-framed board with sharp mitred corners, so the 12 mm radius is a manufacturing round rather than a design radius."}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - rewritten after generation into a two-region atlas: the front cap takes the board graphic INCLUDING its white frame, and every wall and back-cap vertex collapses to a single weathered-white texel. The frame being printed rather than modelled is what keeps this prop at one geometry for the board.", "normalStrategy": "flat-shaded caps, flat wall", "segmentRationale": "Four segments per corner on a 12 mm radius. The board is otherwise straight and gets one segment everywhere."}, "parent": null, "attachment": null, "dimensions": {"width": 1.2, "height": 0.62, "depth": 0.055, "units": "m", "confidence": 0.7}, "transform": {"position": [0, 2.09, 0.03], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. The board does not turn on anything; this is the component's own transform origin, and the model exposes exactly ONE named pivot, the root."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0, 0], "scale": [0.6, 0.0275, 0.6], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A convex proxy circumscribing the board."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "sheeting"}}, "material": "sheeting", "materialLayers": ["sheeting"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "painted-frame", "description": "Wide white painted frame surrounding the brown field on all four sides, with the paint flaking off its arrises. PRINTED into the atlas, not modelled as a separate solid: modelling it would cost a second geometry and a second draw call for a band that is flat at prop distance.", "representation": "texture-region"}, {"id": "legend-lines", "description": "Two white legend lines on the brown field, a large Thai place name over a Latin transliteration.", "representation": "texture-region"}, {"id": "direction-arrow", "description": "A white right-pointing arrow at the right end of the field, level with the Thai line. Chiral: it points one way and the atlas must not mirror it.", "representation": "texture-region"}, {"id": "flaked-paint", "description": "Chalky white paint flaking off the frame's arrises to show weathered timber beneath - the strongest age cue on this prop.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#655851", "stops": [{"position": 0.0, "color": "rgba(212,211,207,1.0)", "note": "the white painted frame, measured #D4D3CF over 1274 bright px on the frame's right stile"}, {"position": 0.1, "color": "rgba(212,211,207,1.0)", "note": "frame inner edge - the frame is a wide band, not a rule"}, {"position": 0.13, "color": "rgba(101,88,81,1.0)", "note": "brown board field begins, measured #655851 over 7200 px"}, {"position": 1.0, "color": "rgba(101,88,81,1.0)", "note": "brown field across the board; the legend and arrow sit on top of it as solid fill"}], "finishStyle": "matte", "notes": "An ordered ramp measured INWARD from the board edge. This is the only sign in the set whose 'sheeting' is not vinyl at all: the reference shows chalky painted timber with the paint flaking off the frame's arrises, so the finish is MATTE where every sibling is satin, and the brown is a warm neutral rather than a printed colour.", "dominantAlbedo": "rgba(101,88,81,1.0)", "secondaryAlbedo": "rgba(212,211,207,1.0)", "materialClass": "wood", "materialClassConfidence": 0.75}};
  node_sign_board_0.add(mesh_sign_board_0);
  meshes["sign-board"] = mesh_sign_board_0;
  colliders["sign-board"] = {"type": "cylinder", "offset": [0, 0, 0], "scale": [0.6, 0.0275, 0.6], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`. A convex proxy circumscribing the board."};

  const attachment_posts_1 = null;
  const endpoint_posts_1 = makeAttachmentEndpoint(attachment_posts_1);
  const node_posts_1 = new THREE.Group();
  node_posts_1.name = "Twin galvanised round tubes__pivot";
  node_posts_1.scale.set(1, 1, 1);
  if (endpoint_posts_1) {
    node_posts_1.position.copy(endpoint_posts_1.start);
    node_posts_1.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_posts_1.position.set(0.0, 0.0, 0.0);
    node_posts_1.rotation.set(0.0, 0.0, 0.0);
  }
  node_posts_1.userData.sculptComponent = {"id": "posts", "name": "Twin galvanised round tubes", "level": "macro", "role": "support", "importance": 0.9, "confidence": 0.8, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "Two vertical tubes of circular section, each continuous around its axis and neither ever deforming. Merged into ONE buffer because they share a material and never move relative to one another.", "geometryDescriptor": {"topologyIntent": "Two CylinderGeometry(0.024, 0.024, 1.90, 10, 10) tubes at x = -0.405 and +0.405, merged into ONE BufferGeometry.", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "none - the weathering ramp arrives as VERTEX COLOURS across 10 height segments per tube, not as a texture", "normalStrategy": "flat", "note": "ROUND tubes, not the square posts most of this set uses: the reference shows continuous curved highlights down both shafts and open tube MOUTHS at the top, where the tubes pass through the board's frame and are cut off square. 10 radial segments each, two segments fewer than the soi-name tube, because these are seen at greater distance and in pairs.", "mergedAssembly": {"reason": "maxDrawCalls is 2 and the board must have one of them, so the two tubes get ONE mesh between them. They share a material and never move relative to each other, so merging is invisible. This is the prop that most tempts a third component - a leg each reads as the natural tree - and splitting them would double what every instance costs a scene for nothing.", "parts": [{"id": "post-left", "level": "meso", "primitive": "cylinder", "extent": {"width": 0.048, "height": 1.9, "depth": 0.048}, "localOffset": [-0.405, 0.95, -0.01], "note": "48 mm round tube from ground contact at y=0 to y=1.90, passing THROUGH the board's frame and cut off square just above it."}, {"id": "post-right", "level": "meso", "primitive": "cylinder", "extent": {"width": 0.048, "height": 1.9, "depth": 0.048}, "localOffset": [0.405, 0.95, -0.01], "note": "The mirror of the left tube. A left/right pair is a REFLECTION, not a rotation: the lateral axis is negated and nothing else. Both tubes are surfaces of revolution, so the reflection is trivially exact here and no winding flip is needed - but the pair is still built by negating x rather than by rotating, so the rule holds where it would matter."}], "jointNote": "In DEPTH the board's back face sits at z=+0.0025 and the tubes span z -0.034 to +0.014, so the tubes pass BEHIND and THROUGH the board's plane rather than butting against it, which is what the reference shows. No two same-facing surfaces are coincident."}}, "parent": null, "attachment": null, "dimensions": {"width": 0.86, "height": 1.9, "depth": 0.048, "units": "m", "confidence": 0.75}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center, between the two tubes. This is the ONLY named pivot in the prop, and it is the correct count: a bolted directional sign has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0.95, -0.01], "scale": [0.43, 0.95, 0.043], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, and here it is a COMPROMISE that is worth naming: the prop has two separate legs with a walk-through gap between them, and a single cylinder cannot express that. The proxy spans both legs, so it blocks the gap. The declared shape is honoured as the contract requires; a compound or box-pair proxy would describe this prop better and is not what the asset declares."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}}, "material": "galvanised", "materialLayers": ["galvanised"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "galv-spangle", "description": "Mottled grey hot-dip spangle over both tubes, with continuous soft highlights down their curved faces.", "representation": "texture-region"}, {"id": "foot-rust", "description": "Orange-brown rust climbing the lower third of both tubes as a ramp with no hard top edge.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#777B79", "stops": [{"position": 0.0, "color": "rgba(119,123,121,1.0)", "note": "tube under the board, cleanest coating, measured #777B79 over 7497 neutral px"}, {"position": 0.62, "color": "rgba(119,123,121,1.0)", "note": "held clean over the upper two-thirds"}, {"position": 0.72, "color": "rgba(108,83,63,1.0)", "note": "transition into rust - a ramp rather than a hard splash line, matching what the reference shows on both tubes"}, {"position": 1.0, "color": "rgba(108,83,63,1.0)", "note": "rust to ground contact, measured #6C533F over 2067 orange-biased px"}], "finishStyle": "satin", "notes": "An ordered vertical ramp measured DOWNWARD from the tube tops. A RAMP, not a step: the reference shows rust climbing both tubes over roughly their lower third with no hard top edge, unlike the square-post siblings' splash lines. Both tubes share this ramp because both are measured together - they weather identically in the reference.", "dominantAlbedo": "rgba(119,123,121,1.0)", "secondaryAlbedo": "rgba(108,83,63,1.0)", "materialClass": "metal", "materialClassConfidence": 0.85}};
  node_posts_1.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center, between the two tubes. This is the ONLY named pivot in the prop, and it is the correct count: a bolted directional sign has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0.95, -0.01], "scale": [0.43, 0.95, 0.043], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, and here it is a COMPROMISE that is worth naming: the prop has two separate legs with a walk-through gap between them, and a single cylinder cannot express that. The proxy spans both legs, so it blocks the gap. The declared shape is honoured as the contract requires; a compound or box-pair proxy would describe this prop better and is not what the asset declares."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}};
  (nodes["root"] ?? root).add(node_posts_1);
  nodes["posts"] = node_posts_1;
  const mesh_posts_1Geometry = endpoint_posts_1
    ? new THREE.CylinderGeometry(endpoint_posts_1.endRadius, endpoint_posts_1.baseRadius, endpoint_posts_1.length, 8, 4)
    : new THREE.CylinderGeometry(0.5, 0.5, 1, 10, 4);
  if (!endpoint_posts_1) {
    mesh_posts_1Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_posts_1 = new THREE.Mesh(
    mesh_posts_1Geometry,
    materialMap["galvanised"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_posts_1.name = "Twin galvanised round tubes";
  if (endpoint_posts_1) {
    mesh_posts_1.position.copy(endpoint_posts_1.midpoint);
    mesh_posts_1.quaternion.copy(endpoint_posts_1.quaternion);
  }
  mesh_posts_1.castShadow = options.castShadow ?? true;
  mesh_posts_1.receiveShadow = options.receiveShadow ?? true;
  mesh_posts_1.userData.sculptComponent = {"id": "posts", "name": "Twin galvanised round tubes", "level": "macro", "role": "support", "importance": 0.9, "confidence": 0.8, "primitive": "cylinder", "topologyClass": "assembled-solid", "topologyRationale": "Two vertical tubes of circular section, each continuous around its axis and neither ever deforming. Merged into ONE buffer because they share a material and never move relative to one another.", "geometryDescriptor": {"topologyIntent": "Two CylinderGeometry(0.024, 0.024, 1.90, 10, 10) tubes at x = -0.405 and +0.405, merged into ONE BufferGeometry.", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "none - the weathering ramp arrives as VERTEX COLOURS across 10 height segments per tube, not as a texture", "normalStrategy": "flat", "note": "ROUND tubes, not the square posts most of this set uses: the reference shows continuous curved highlights down both shafts and open tube MOUTHS at the top, where the tubes pass through the board's frame and are cut off square. 10 radial segments each, two segments fewer than the soi-name tube, because these are seen at greater distance and in pairs.", "mergedAssembly": {"reason": "maxDrawCalls is 2 and the board must have one of them, so the two tubes get ONE mesh between them. They share a material and never move relative to each other, so merging is invisible. This is the prop that most tempts a third component - a leg each reads as the natural tree - and splitting them would double what every instance costs a scene for nothing.", "parts": [{"id": "post-left", "level": "meso", "primitive": "cylinder", "extent": {"width": 0.048, "height": 1.9, "depth": 0.048}, "localOffset": [-0.405, 0.95, -0.01], "note": "48 mm round tube from ground contact at y=0 to y=1.90, passing THROUGH the board's frame and cut off square just above it."}, {"id": "post-right", "level": "meso", "primitive": "cylinder", "extent": {"width": 0.048, "height": 1.9, "depth": 0.048}, "localOffset": [0.405, 0.95, -0.01], "note": "The mirror of the left tube. A left/right pair is a REFLECTION, not a rotation: the lateral axis is negated and nothing else. Both tubes are surfaces of revolution, so the reflection is trivially exact here and no winding flip is needed - but the pair is still built by negating x rather than by rotating, so the rule holds where it would matter."}], "jointNote": "In DEPTH the board's back face sits at z=+0.0025 and the tubes span z -0.034 to +0.014, so the tubes pass BEHIND and THROUGH the board's plane rather than butting against it, which is what the reference shows. No two same-facing surfaces are coincident."}}, "parent": null, "attachment": null, "dimensions": {"width": 0.86, "height": 1.9, "depth": 0.048, "units": "m", "confidence": 0.75}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center, between the two tubes. This is the ONLY named pivot in the prop, and it is the correct count: a bolted directional sign has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0, 0.95, -0.01], "scale": [0.43, 0.95, 0.043], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, and here it is a COMPROMISE that is worth naming: the prop has two separate legs with a walk-through gap between them, and a single cylinder cannot express that. The proxy spans both legs, so it blocks the gap. The declared shape is honoured as the contract requires; a compound or box-pair proxy would describe this prop better and is not what the asset declares."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}}, "material": "galvanised", "materialLayers": ["galvanised"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "galv-spangle", "description": "Mottled grey hot-dip spangle over both tubes, with continuous soft highlights down their curved faces.", "representation": "texture-region"}, {"id": "foot-rust", "description": "Orange-brown rust climbing the lower third of both tubes as a ramp with no hard top edge.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#777B79", "stops": [{"position": 0.0, "color": "rgba(119,123,121,1.0)", "note": "tube under the board, cleanest coating, measured #777B79 over 7497 neutral px"}, {"position": 0.62, "color": "rgba(119,123,121,1.0)", "note": "held clean over the upper two-thirds"}, {"position": 0.72, "color": "rgba(108,83,63,1.0)", "note": "transition into rust - a ramp rather than a hard splash line, matching what the reference shows on both tubes"}, {"position": 1.0, "color": "rgba(108,83,63,1.0)", "note": "rust to ground contact, measured #6C533F over 2067 orange-biased px"}], "finishStyle": "satin", "notes": "An ordered vertical ramp measured DOWNWARD from the tube tops. A RAMP, not a step: the reference shows rust climbing both tubes over roughly their lower third with no hard top edge, unlike the square-post siblings' splash lines. Both tubes share this ramp because both are measured together - they weather identically in the reference.", "dominantAlbedo": "rgba(119,123,121,1.0)", "secondaryAlbedo": "rgba(108,83,63,1.0)", "materialClass": "metal", "materialClassConfidence": 0.85}};
  node_posts_1.add(mesh_posts_1);
  meshes["posts"] = mesh_posts_1;
  colliders["posts"] = {"type": "cylinder", "offset": [0, 0.95, -0.01], "scale": [0.43, 0.95, 0.043], "isTrigger": false, "notes": "Declared collider for this asset is `cylinder`, and here it is a COMPROMISE that is worth naming: the prop has two separate legs with a walk-through gap between them, and a single cylinder cannot express that. The proxy spans both legs, so it blocks the gap. The declared shape is honoured as the contract requires; a compound or box-pair proxy would describe this prop better and is not what the asset declares."};

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createTouristAttractionSignLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "Tourist Attraction Sign look-dev lights";
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
  lights.userData.lightingFromPhoto = [{"role": "key", "type": "area", "directionHint": [-0.4, 0.55, 0.73], "intensity": 1.0, "colorTemperatureK": 5600, "evidence": "The board's brown field falls from luma 86 at the top of the panel to 68 at the bottom across a vertical scanline at x=500, and the frame's left return sits in shadow while its right stile reads 211 - a soft key, high and camera-left."}, {"role": "fill", "type": "hemisphere", "directionHint": [0.55, 0.2, -0.4], "intensity": 0.34, "colorTemperatureK": 6500, "evidence": "The board's left edge return, fully turned from the key, still reads as a pale band rather than going black, which only happens with real fill."}, {"role": "rim", "type": "directional", "directionHint": [0.6, 0.3, -0.75], "intensity": 0.22, "colorTemperatureK": 6500, "evidence": "A bright line runs along the frame's top rail at luma 221-224 against the backdrop's 171."}, {"role": "environment", "type": "studio-context", "environment": "studio softbox on a flat neutral backdrop", "exposure": 1.0, "toneMapping": "ACESFilmic", "evidence": "Border-ring scan over 1024 samples trimming to #A9A9A9. MEASURED rather than assumed - and this backdrop is close enough to the frame's shadowed white that one crop had to be discarded as contamination.", "note": "The render harness backs onto a much darker ground, so a candidate render reads darker overall and that difference is the backdrop, not the prop."}, {"role": "contact-shadow", "type": "ground-shadow", "intensity": 0.55, "evidence": "The reference shows both tubes ending in mid-air at the frame edge with a soft pooled shadow under them, so ground contact is grounded at y=0 by construction.", "behavior": "Grounded at y=0, the prop's origin, so a placed instance darkens where both legs actually touch. Ambient occlusion is left at zero on both materials: two closed tubes and a sealed board have no cavity for AO to find, and baking any into base colour is what the material pass forbids."}];
  lights.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  return lights;
}


// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameTouristAttractionSignCamera(
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


export function configureTouristAttractionSignRenderer(renderer: THREE.WebGLRenderer): void {
  // Load-bearing for view-dependent finishes (anodized / Doppler): without ACES + sRGB
  // the environment reflection reads flat/washed instead of a believable metal response.
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
}
/* ---------------------------------------------------------------------------
 * thaikit post-generation layer — shared helpers.
 *
 * The generator emits the component tree, the userData contract and the materials.
 * It does NOT emit real dimensions, the merged assemblies the specs' `mergedAssembly`
 * blocks describe, the UV atlases that let ONE material carry a printed front and a
 * bare back, the printed faces, or the measured weathering ramps. Those live here and
 * are re-applied by rebuild-factory.sh, because a bare regenerate would silently drop
 * them and leave placeholder primitives that still validate.
 * ------------------------------------------------------------------------ */

/** Deterministic hash noise. No Math.random anywhere: every instance must be identical. */
function noise1(i: number): number {
  let h = (i * 374761393 + 668265263) >>> 0;
  h = (h ^ (h >>> 13)) >>> 0;
  h = (h * 1274126177) >>> 0;
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

/**
 * Position-keyed noise, quantised so coincident corners agree EXACTLY. Keying noise to
 * the vertex index instead gives the three corners of every triangle three different
 * values on a non-indexed buffer, and the surface renders as a patchwork of flat facets.
 */
function posNoise(x: number, y: number, z: number, q = 0.04): number {
  const k = (v: number) => Math.round(v / q);
  return noise1((k(y) * 73856093) ^ (k(x) * 19349663) ^ (k(z) * 83492791));
}

function toNonIndexed(g: THREE.BufferGeometry): THREE.BufferGeometry {
  return g.index ? g.toNonIndexed() : g;
}

/** Hand-rolled concat: BufferGeometryUtils lives under three/examples, which this bundle cannot import. */
function concatGeometry(parts: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const out = new THREE.BufferGeometry();
  for (const name of ['position', 'normal', 'uv']) {
    const attrs = parts.map((p) => p.getAttribute(name) as THREE.BufferAttribute);
    if (attrs.some((a) => !a)) continue;
    const total = attrs.reduce((s, a) => s + a.array.length, 0);
    const arr = new Float32Array(total);
    let off = 0;
    for (const a of attrs) { arr.set(a.array as Float32Array, off); off += a.array.length; }
    out.setAttribute(name, new THREE.BufferAttribute(arr, attrs[0].itemSize));
  }
  return out;
}

/** A box, non-indexed and translated into place, ready to merge. */
function boxAt(w: number, h: number, d: number, x: number, y: number, z: number,
               hSeg = 1): THREE.BufferGeometry {
  const g = toNonIndexed(new THREE.BoxGeometry(w, h, d, 1, hSeg, 1));
  g.translate(x, y, z);
  return g;
}

/** A vertical round tube, non-indexed and translated into place. */
function tubeAt(r: number, h: number, x: number, y: number, z: number,
                radial = 10, hSeg = 1): THREE.BufferGeometry {
  const g = toNonIndexed(new THREE.CylinderGeometry(r, r, h, radial, hSeg));
  g.translate(x, y, z);
  return g;
}

/**
 * Bake an ordered vertical colour ramp onto a geometry as VERTEX COLOURS, plus a
 * low-amplitude position-keyed blotch. Heights are in METRES, measured up from y=0.
 * This is how the weathering arrives on every support in this set: a texture would be
 * the expensive way to say the same thing, and these supports are tens of triangles.
 */
function bakeRamp(geo: THREE.BufferGeometry, ramp: Array<[number, string]>,
                  blotch = 0.07): void {
  const stops = ramp.map(([t, c]) => [t, new THREE.Color(c)] as [number, THREE.Color]);
  const pos = geo.getAttribute('position') as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 3);
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i += 1) {
    const y = pos.getY(i);
    let k = 0;
    while (k < stops.length - 2 && y > stops[k + 1][0]) k += 1;
    const [t0, c0] = stops[k];
    const [t1, c1] = stops[k + 1];
    const f = t1 > t0 ? (y - t0) / (t1 - t0) : 0;
    c.copy(c0).lerp(c1, Math.min(1, Math.max(0, f)));
    const n = (posNoise(pos.getX(i), y, pos.getZ(i)) - 0.5) * blotch;
    colors[i * 3] = Math.min(1, Math.max(0, c.r + n));
    colors[i * 3 + 1] = Math.min(1, Math.max(0, c.g + n));
    colors[i * 3 + 2] = Math.min(1, Math.max(0, c.b + n));
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
}

/** Swap a component's placeholder geometry for the real one and neutralise the mesh transform. */
function setMeshGeometry(root: THREE.Group, id: string, geo: THREE.BufferGeometry): THREE.Mesh | null {
  const rt = root.userData.sculptRuntime as { meshes?: Record<string, THREE.Mesh> } | undefined;
  const mesh = rt?.meshes?.[id];
  if (!mesh) return null;
  mesh.geometry.dispose();
  mesh.geometry = geo;
  mesh.position.set(0, 0, 0);
  mesh.rotation.set(0, 0, 0);
  mesh.scale.set(1, 1, 1);
  return mesh;
}

/** A rounded-rectangle path, for plates whose corner radius is an identity feature. */
function roundedRectShape(hw: number, hh: number, r: number, seg = 4): THREE.Shape {
  const s = new THREE.Shape();
  const k = Math.min(r, hw, hh);
  s.moveTo(-hw + k, -hh);
  s.lineTo(hw - k, -hh);
  s.absarc(hw - k, -hh + k, k, -Math.PI / 2, 0, false);
  s.lineTo(hw, hh - k);
  s.absarc(hw - k, hh - k, k, 0, Math.PI / 2, false);
  s.lineTo(-hw + k, hh);
  s.absarc(-hw + k, hh - k, k, Math.PI / 2, Math.PI, false);
  s.lineTo(-hw, -hh + k);
  s.absarc(-hw + k, -hh + k, k, Math.PI, Math.PI * 1.5, false);
  void seg;
  return s;
}

/** Fit text to a target width by measuring, then re-setting the font. */
function fitText(ctx: CanvasRenderingContext2D, text: string, targetW: number,
                 font: (px: number) => string, startPx: number): number {
  let px = startPx;
  ctx.font = font(px);
  const m = ctx.measureText(text).width;
  if (m > 0) px = px * (targetW / m);
  ctx.font = font(px);
  return px;
}

const SANS = (px: number) => `bold ${px}px "Arial Narrow", "Helvetica Neue Condensed", Impact, sans-serif`;
const SANS_R = (px: number) => `${px}px "Noto Sans Thai", Loma, Garuda, "Arial", sans-serif`;

/** Measured off assets/tourist-attraction-sign/preview.jpg. See the spec's localOverrides for crops. */
const PALETTE = {
  field: '#655851',    // 7200 px at (420,180,120,60) - painted timber, a warm NEUTRAL brown
  frame: '#D4D3CF',    // 1274 bright px of (760,200,26,180), the frame's right stile
  legend: '#D8D6D2',   // 5092 bright px of (380,290,300,60) - the same paint as the frame
  back: '#C7C4BE',     // inferred from the board's visible left edge, confidence 0.6
  galv: '#777B79',     // 7497 of 7500 neutral px of (330,600,50,150) - the cleanest of the eight
  rust: '#6C533F',     // 2067 orange-biased px of (330,860,55,110)
} as const;

/** Geometry, in metres, from the spec. Origin base-center: y=0 is ground contact. */
const DIM = {
  boardW: 1.2, boardH: 0.62, boardT: 0.055, boardR: 0.012, boardCY: 2.09, boardCZ: 0.030,
  tubeR: 0.024, tubeH: 1.90, tubeZ: -0.010, tubeX: 0.405,
} as const;

let faceAtlasCache: THREE.CanvasTexture | null | undefined;

/**
 * One canvas for the whole board material. The canvas GROUND is the weathered back, and
 * the board face - INCLUDING its wide painted frame - is drawn inset on top of it. The
 * frame being printed rather than modelled is what keeps this prop at one board geometry.
 */
function faceAtlas(size: number): THREE.CanvasTexture | null {
  if (faceAtlasCache !== undefined) return faceAtlasCache;
  if (typeof document === 'undefined') { faceAtlasCache = null; return null; }
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) { faceAtlasCache = null; return null; }

  ctx.fillStyle = PALETTE.back;
  ctx.fillRect(0, 0, size, size);

  const M = size * 0.05, S = size * 0.90;
  // The frame is a WIDE painted band, not a rule: it runs from the board edge inward to
  // about 0.12 of the half-height on the rails and 0.06 of the half-width on the stiles.
  ctx.fillStyle = PALETTE.frame;
  ctx.fillRect(M, M, S, S);
  const fx = S * 0.045, fy = S * 0.105;
  ctx.fillStyle = PALETTE.field;
  ctx.fillRect(M + fx, M + fy, S - 2 * fx, S - 2 * fy);

  // Paint flaking off the frame's arrises to show weathered timber beneath. The strongest
  // age cue on this prop, and the reason its finish is matte where every sibling is satin.
  ctx.fillStyle = 'rgba(150,142,132,0.55)';
  for (let i = 0; i < 26; i += 1) {
    const t = noise1(i * 7 + 3);
    const along = M + S * (0.03 + 0.94 * noise1(i * 7 + 5));
    const w = S * (0.010 + 0.035 * t), h = S * (0.008 + 0.020 * noise1(i * 7 + 11));
    // top rail, bottom rail, then the two stiles
    if (i % 4 === 0) ctx.fillRect(along, M + S * 0.008, w, h);
    else if (i % 4 === 1) ctx.fillRect(along, M + S * (0.97 - 0.02), w, h);
    else if (i % 4 === 2) ctx.fillRect(M + S * 0.006, along, h, w);
    else ctx.fillRect(M + S * (0.98 - 0.02), along, h, w);
  }

  // Legend and arrow. The arrow points RIGHT and that is chiral - an arrow the other way
  // sends traffic the wrong way - so the front-cap UV mapping must not mirror it.
  ctx.fillStyle = PALETTE.legend;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';
  const lx = M + fx + S * 0.045;
  fitText(ctx, 'น้ำตกเอราวัณ', S * 0.50, SANS_R, S * 0.24);
  ctx.fillText('น้ำตกเอราวัณ', lx, M + S * 0.400);
  fitText(ctx, 'ERAWAN WATERFALL', S * 0.50, SANS, S * 0.15);
  ctx.fillText('ERAWAN WATERFALL', lx, M + S * 0.640);

  const ax = M + S * 0.855, ay = M + S * 0.400, ah = S * 0.055, al = S * 0.10;
  ctx.beginPath();
  ctx.moveTo(ax - al, ay - ah * 0.28);
  ctx.lineTo(ax, ay - ah * 0.28);
  ctx.lineTo(ax, ay - ah * 0.62);
  ctx.lineTo(ax + al * 0.62, ay);              // the point, to the RIGHT
  ctx.lineTo(ax, ay + ah * 0.62);
  ctx.lineTo(ax, ay + ah * 0.28);
  ctx.lineTo(ax - al, ay + ah * 0.28);
  ctx.closePath();
  ctx.fill();

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  faceAtlasCache = tex;
  return tex;
}

function buildGeometry(root: THREE.Group): void {
  // --- the board: a rounded-rect extrusion with the two-region atlas ------------------
  const shape = roundedRectShape(DIM.boardW / 2, DIM.boardH / 2, DIM.boardR, 4);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: DIM.boardT, bevelEnabled: false, curveSegments: 4,
  });
  geo.translate(0, 0, -DIM.boardT / 2);
  const pos = geo.getAttribute('position') as THREE.BufferAttribute;
  const nrm = geo.getAttribute('normal') as THREE.BufferAttribute;
  const uv = new Float32Array(pos.count * 2);
  const M = 0.05, S = 0.90;
  for (let i = 0; i < pos.count; i += 1) {
    if (nrm.getZ(i) > 0.5) {
      uv[i * 2] = M + S * (pos.getX(i) / DIM.boardW + 0.5);
      uv[i * 2 + 1] = M + S * (pos.getY(i) / DIM.boardH + 0.5);
    } else {
      uv[i * 2] = 0.015; uv[i * 2 + 1] = 0.015;
    }
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  setMeshGeometry(root, 'sign-board', geo);

  // --- the twin tubes, merged into ONE buffer -----------------------------------------
  // A left/right pair is a REFLECTION, not a rotation: the lateral axis is negated and
  // nothing else. Both tubes are surfaces of revolution so the reflection is trivially
  // exact, but the pair is still built by negating x rather than by rotating, so the rule
  // holds where it would matter.
  const legs = [-1, 1].map((s) =>
    tubeAt(DIM.tubeR, DIM.tubeH, s * DIM.tubeX, DIM.tubeH / 2, DIM.tubeZ, 10, 10));
  const posts = concatGeometry(legs);
  for (const g of legs) g.dispose();
  // A RAMP, not a step: the reference shows rust climbing both tubes over roughly their
  // lower third with no hard top edge, unlike the square-post siblings' splash lines.
  bakeRamp(posts, [
    [0.00, PALETTE.rust],
    [0.30, PALETTE.rust],
    [0.70, PALETTE.galv],
    [DIM.tubeH, PALETTE.galv],
  ]);
  posts.computeVertexNormals();
  const pm = setMeshGeometry(root, 'posts', posts);
  if (pm) {
    const m = pm.material as THREE.MeshPhysicalMaterial;
    m.vertexColors = true;
    m.color.set('#FFFFFF');
    m.metalness = 0.25;
    m.roughness = 0.62;
    m.needsUpdate = true;
  }
}

/** Assign the atlas AFTER material construction - the textureless declaration does not touch this route. */
function applyAtlases(root: THREE.Group, options: ProceduralModelOptions): void {
  const rt = root.userData.sculptRuntime as { meshes?: Record<string, THREE.Mesh> } | undefined;
  const mesh = rt?.meshes?.['sign-board'];
  if (!mesh) return;
  const tex = faceAtlas(options.textureSize ?? 512);
  if (!tex) return;
  tex.anisotropy = options.textureAnisotropy ?? 4;
  const m = mesh.material as THREE.MeshPhysicalMaterial;
  m.map = tex;
  m.color.set('#FFFFFF');
  m.metalness = 0.0;
  // Matte: this board is chalky painted timber, not the satin vinyl of its siblings.
  m.roughness = 0.72;
  m.needsUpdate = true;
}

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it
 * with (spec, options); the generated factory is named for its target and takes options
 * alone. `spec` is accepted and attached for host-side inspection - the reconstruction data
 * already lives in the module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(
  spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = createTouristAttractionSignModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  buildGeometry(root);
  applyAtlases(root, options);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: ONE. A bolted directional sign has no hinge, bearing, lid or wheel, so the root is the only axis it has. A pivot per leg would describe a machine that does not exist.
    const rootPivot = new THREE.Object3D();
    rootPivot.name = 'root';
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'root' },
    };
    root.add(rootPivot);

    // Sockets: NONE. Nothing attaches to or is emitted from this prop, and a named socket
    // is a promise that something clips in there.

    // Colliders: drop the empty entries the generator emits, so the count is of REAL
    // proxies. An ARRAY of named proxies, not the Record - the harness maps over this.
    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // Destruction groups: this prop declares NONE, and promotion checks built against
    // declared as an equality in BOTH directions. Derived rather than assumed empty.
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
      // A COUNT, not the Record. thaikit's harness returns this field straight across the
      // puppeteer bridge and its registry field is a number; a Record of Object3D is
      // circular and fails to serialise, which surfaces as the whole stats object arriving
      // undefined. The Record stays reachable under byId.
      nodes: Object.keys(nodes).length,
      pivots: [rootPivot],
      sockets: [],
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
