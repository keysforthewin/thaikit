import * as THREE from 'three';

export type ProceduralModelOptions = {
  wireframe?: boolean;
  castShadow?: boolean;
  receiveShadow?: boolean;
  textureSize?: number;
  textureAnisotropy?: number;
  qualityPriority?: 'reference-fidelity' | 'balanced';
  /**
   * Where this prop's shipped files live, with a trailing slash.
   *
   * Reference PBR maps may be recorded as bare filenames, because the same
   * bytes are served from different places by different hosts. The bundle is
   * evaluated rather than imported, so it has no import.meta and no
   * currentScript to resolve against, and a relative path would resolve
   * against the host DOCUMENT instead. Omit it and a relative map is simply
   * skipped, which is the behaviour every existing host already gets.
   */
  baseUrl?: string;
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

function referenceMapUrl(spec: SculptMaterialSpec, channel: string, options: ProceduralModelOptions): string | null {
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
  const raw = typeof record.url === 'string' && record.url.trim() ? record.url : record.path;
  if (typeof raw !== 'string' || !raw.trim()) return null;
  // An absolute URL is already resolvable and must not be re-based.
  if (/^(https?:|data:|blob:)/.test(raw)) return raw;
  // A relative map needs a base the host supplies; without one there is
  // nothing to resolve against, and returning null falls back to the
  // procedural path exactly as before this option existed.
  if (!options.baseUrl) return null;
  const file = raw.replace(/^.*\//, '');
  const docBase = typeof location !== 'undefined' ? location.href : undefined;
  return new URL(file, new URL(options.baseUrl, docBase)).href;
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
  const albedo = referenceMapUrl(spec, 'albedo', options);
  const roughness = referenceMapUrl(spec, 'roughness', options);
  const height = referenceMapUrl(spec, 'height', options);
  const normal = referenceMapUrl(spec, 'normal', options);
  const ao = referenceMapUrl(spec, 'ao', options);
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

// Generated from ObjectSculptSpec target: Kilometre Stone
// Sculpt build pass: optimization-pass
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createKilometreStoneModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "Kilometre Stone";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 40.0, "aspect": 1.0, "orientation": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "positionHint": [0.0, 0.0, 3.0], "note": "For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."}, "approximationNotes": []};
  root.userData.materialPipeline = {};
  root.userData.materialReferenceRegistry = null;

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["concrete"] = createSculptMaterial(
    "concrete",
    {"id": "concrete", "name": "Cast concrete with masked painted bands", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#FFFFFF", "color": "#FFFFFF", "albedo": {"dominant": "#98917F", "secondary": ["#E6EAEE", "#A32124", "#686554"], "samplingNotes": "White base colour because every band and stain is delivered by the atlas assigned after material construction; a tint here would multiply into all five colours at once."}, "colorVariation": {"palette": ["#98917F", "#E6EAEE", "#A32124", "#686554", "#1B1F22"], "pattern": "authored-bands", "amplitude": 0.0, "heightCorrelation": 1.0}, "roughness": {"base": 0.85, "variation": 0.06, "map": "none", "localResponse": "Chalky and fully matte - the highest roughness of the eight props. Cast concrete and masked paint both scatter completely; there is no tight highlight anywhere on this reference, and the two faces at right angles differ by only 2 luma on the body, which is what a fully diffuse surface under strong fill does."}, "metalness": {"base": 0.0, "variation": 0.0, "notes": "Concrete and paint are both dielectric. No metal anywhere on this prop, which makes it the only one of the eight with no galvanised material at all."}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "A convex solid with no cavity for AO to find, and baking any into base colour is what the material pass forbids."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "crown-white", "color": "#E6EAEE", "region": "the arched crown and the upper third of the stone", "evidenceRef": "region-crown", "notes": "Averaged from #ECF0F3 over 10799 lit bright px at (380,120,120,90) and #D9DCE0 over 6300 shaded bright px at (280,200,70,90). A 19-luma spread across the two faces, so the albedo is taken BETWEEN them rather than from the lit face alone - the same reasoning that put the red band's value on its lit face is reversed here, because the crown's shaded reading is fill-lit white rather than key-lit."}, {"id": "band-red", "color": "#A32124", "region": "the band wrapping the stone from 0.472 to 0.617 of height", "evidenceRef": "region-band", "notes": "Trimmed mean #A32124 over the full 10800 px of (560,380,180,60) on the lit face; the shaded face at (270,400,90,50) returns #882322 over 4500 px. The lit value is taken because the shaded face is fill-lit rather than key-lit and reads darker without being a different paint. Band edges re-read on the x=420 scanline of the shaded face: white-to-red at y=409 (0.617 of height from the foot) and red-to-concrete at y=537 (0.472), on a stone spanning y=72 to y=952. The first build had 0.431-0.561, both edges 0.05 low, which put the white crown over 44 per cent of the stone instead of 38."}, {"id": "body-concrete", "color": "#98917F", "region": "the bare concrete below the red band", "evidenceRef": "region-body", "notes": "Trimmed mean #98917F over 25200 px lit and #988F7A over 12600 px shaded - within 2 luma of each other. That agreement across two faces at right angles is why this albedo could be taken directly rather than de-lit."}, {"id": "algae", "color": "#686554", "region": "the lowest quarter of the concrete, heaviest at the corners", "evidenceRef": "region-algae", "notes": "Trimmed mean #686554 over 9900 px at (250,800,90,110). 45 luma below the clean body value and the strongest age cue on the prop. A saturation-band scan up the stone reads 0 per cent everywhere above y=330 and 34 per cent at y=360, confirming the growth is confined to the foot."}, {"id": "legend-ink", "color": "#1B1F22", "region": "the distance numeral on the crown and both legend lines on the concrete", "evidenceRef": "region-ink", "notes": "Trimmed mean of the 10415 sub-luma-70 px of (560,220,180,140). The whole-crop mean was far lighter because the crop's bright half is the white crown bouncing across a hard boundary, not ink."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["Reference plate, concrete body at (560,600,180,140) and (270,600,90,140): 25200 and 12600 px trimming to #98917F and #988F7A - within 2 luma across two faces at right angles, so this is a flat diffuse albedo and not a height field.", "Reference plate, red band at (560,380,180,60): 10800 px trimming to #A32124. Masked paint over cast concrete, flat across its face.", "Reference plate, white crown at (380,120,120,90): 10799 of 10800 px pass a bright filter, trimming to #ECF0F3 - a solid painted crown with no resolvable relief.", "The bands and the legend arrive as one canvas atlas assigned after material construction, which the textureless declaration does not touch. Letting the generator synthesise a texture set here would additionally force color to white and roughness to 1 and read both from the generated maps - discarding the measured #98917F that makes this stone concrete rather than grey.", "Measured cost: five synthesised canvases at 1024 would cost roughly 1.9 s inside createObjectModel, on a prop whose whole geometry is 88 triangles."]}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_stone_0 = makeAttachmentEndpoint(null);
  const node_stone_0 = new THREE.Group();
  node_stone_0.name = "Kilometre stone__pivot";
  node_stone_0.scale.set(1, 1, 1);
  if (endpoint_stone_0) {
    node_stone_0.position.copy(endpoint_stone_0.start);
    node_stone_0.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_stone_0.position.set(0.0, 0.0, 0.0);
    node_stone_0.rotation.set(0.0, 0.0, 0.0);
  }
  node_stone_0.userData.sculptComponent = {"id": "stone", "name": "Kilometre stone", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.85, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "A single cast-concrete solid: a rectangular block whose top is finished as a semicircular arch, extruded through its depth. One closed solid, not an assembly - there is no joint anywhere on this prop and nothing is bolted to anything, which is what separates it from every other prop in this signage set.", "geometryDescriptor": {"topologyIntent": "ExtrudeGeometry over an arch-topped profile, 0.49 x 0.9, extruded 0.42 deep, bevelEnabled false.", "profile2D": {"kind": "arch-topped-rect", "halfWidth": 0.245, "height": 0.9, "archRadius": 0.245, "archSegments": 16, "depth": 0.42, "points": [[-0.245, 0.0], [0.245, 0.0], [0.245, 0.655], [0.24029, 0.7028], [0.22635, 0.74876], [0.20371, 0.79111], [0.17324, 0.82824], [0.13611, 0.85871], [0.09376, 0.88135], [0.0478, 0.89529], [0.0, 0.9], [-0.0478, 0.89529], [-0.09376, 0.88135], [-0.13611, 0.85871], [-0.17324, 0.82824], [-0.20371, 0.79111], [-0.22635, 0.74876], [-0.24029, 0.7028], [-0.245, 0.655]], "note": "19 points: two bottom corners, straight sides up to y=0.655, then a 16-segment semicircular arch of radius 0.245 swept from angle 0 (right shoulder) through pi/2 (apex) to pi (LEFT shoulder). The earlier build swept -pi/2..pi/2, which is the RIGHT half of a circle - a quarter-round cusp on one side and no left shoulder at all - and rendered visibly lop-sided. The arch IS this prop's silhouette."}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - a two-region atlas. The FRONT cap takes a full face region carrying the painted bands and the legend; the wall and the back cap take a narrow band COLUMN whose v is the same height fraction, so the red band and the white crown wrap continuously round the stone and meet the front face exactly. This is what lets one material paint a banded solid rather than a plate with a printed front.", "normalStrategy": "flat", "segmentRationale": "16 arch segments on a 0.245 m radius and one segment everywhere else. The crown is the only curve on the prop."}, "parent": null, "attachment": null, "dimensions": {"width": 0.49, "height": 0.9, "depth": 0.42, "units": "m", "confidence": 0.85}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center. This prop has exactly ONE component and ONE pivot, and that is the correct count: a cast concrete stone has no moving parts and nothing attaches to it."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0.45, 0], "scale": [0.125, 0.45, 0.1], "isTrigger": false, "notes": "Declared collider for this asset is `box`, and unlike the post-mounted signs in this set the proxy is nearly EXACT: the stone is a rectangular solid apart from its arched crown, so the box is the shape rather than a circumscription of it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "concrete"}}, "material": "concrete", "materialLayers": ["concrete"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "white-crown", "description": "White painted crown covering the arched top and the upper third of the stone, down to the red band.", "representation": "texture-region"}, {"id": "red-band", "description": "Red painted band wrapping the whole stone between the white crown and the bare concrete, about 0.13 m deep.", "representation": "texture-region"}, {"id": "distance-numeral", "description": "Large black distance numeral on the white crown, set to the right of the face.", "representation": "texture-region"}, {"id": "place-name", "description": "Two black legend lines on the bare concrete below the band, a Thai province name over its Latin transliteration.", "representation": "texture-region"}, {"id": "algae-foot", "description": "Green-black algae darkening the lowest quarter of the concrete, heaviest at the corners where water sits.", "representation": "texture-region"}, {"id": "spalled-patch", "description": "A spalled patch on the front face below the legend where the render has broken away to expose aggregate.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#98917F", "stops": [{"position": 0.0, "color": "rgba(104,101,84,1.0)", "note": "algae-darkened concrete at the foot, measured #686554 over 9900 px"}, {"position": 0.25, "color": "rgba(152,145,127,1.0)", "note": "weathered concrete body, measured #98917F over 25200 lit px and #988F7A over 12600 shaded px - within 2 luma of each other, so this is albedo and not the key's work"}, {"position": 0.478, "color": "rgba(152,145,127,1.0)", "note": "concrete up to the red band's lower edge at 0.431 of height"}, {"position": 0.482, "color": "rgba(163,33,36,1.0)", "note": "SHARP edge into the red band, measured #A32124 over 10800 lit px"}, {"position": 0.622, "color": "rgba(163,33,36,1.0)", "note": "red band upper edge at 0.561 of height"}, {"position": 0.626, "color": "rgba(230,234,238,1.0)", "note": "SHARP edge into the white crown, averaged from #ECF0F3 lit and #D9DCE0 shaded"}, {"position": 1.0, "color": "rgba(230,234,238,1.0)", "note": "white over the whole arched crown"}], "finishStyle": "matte", "notes": "An ordered VERTICAL ramp measured up from the foot, with hard edges at both band boundaries: this is masked paint on cast concrete, so the boundaries are lines and not blends. The stops are doubled at each edge. Unlike every other prop in this set the bands WRAP the whole solid rather than sitting on a printed face, which is why the atlas carries a band column for the wall as well as a face region.", "dominantAlbedo": "rgba(152,145,127,1.0)", "secondaryAlbedo": "rgba(163,33,36,1.0)", "materialClass": "stone", "materialClassConfidence": 0.9}};
  node_stone_0.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center. This prop has exactly ONE component and ONE pivot, and that is the correct count: a cast concrete stone has no moving parts and nothing attaches to it."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0.45, 0], "scale": [0.125, 0.45, 0.1], "isTrigger": false, "notes": "Declared collider for this asset is `box`, and unlike the post-mounted signs in this set the proxy is nearly EXACT: the stone is a rectangular solid apart from its arched crown, so the box is the shape rather than a circumscription of it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "concrete"}};
  (nodes["root"] ?? root).add(node_stone_0);
  nodes["stone"] = node_stone_0;
  const mesh_stone_0Geometry = endpoint_stone_0
    ? new THREE.CylinderGeometry(endpoint_stone_0.endRadius, endpoint_stone_0.baseRadius, endpoint_stone_0.length, 8, 4)
    : buildExtrudeGeometry({"kind": "arch-topped-rect", "halfWidth": 0.245, "height": 0.9, "archRadius": 0.245, "archSegments": 16, "depth": 0.42, "points": [[-0.245, 0.0], [0.245, 0.0], [0.245, 0.655], [0.24029, 0.7028], [0.22635, 0.74876], [0.20371, 0.79111], [0.17324, 0.82824], [0.13611, 0.85871], [0.09376, 0.88135], [0.0478, 0.89529], [0.0, 0.9], [-0.0478, 0.89529], [-0.09376, 0.88135], [-0.13611, 0.85871], [-0.17324, 0.82824], [-0.20371, 0.79111], [-0.22635, 0.74876], [-0.24029, 0.7028], [-0.245, 0.655]], "note": "19 points: two bottom corners, straight sides up to y=0.655, then a 16-segment semicircular arch of radius 0.245 swept from angle 0 (right shoulder) through pi/2 (apex) to pi (LEFT shoulder). The earlier build swept -pi/2..pi/2, which is the RIGHT half of a circle - a quarter-round cusp on one side and no left shoulder at all - and rendered visibly lop-sided. The arch IS this prop's silhouette."});
  if (!endpoint_stone_0) {
    mesh_stone_0Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_stone_0 = new THREE.Mesh(
    mesh_stone_0Geometry,
    materialMap["concrete"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_stone_0.name = "Kilometre stone";
  if (endpoint_stone_0) {
    mesh_stone_0.position.copy(endpoint_stone_0.midpoint);
    mesh_stone_0.quaternion.copy(endpoint_stone_0.quaternion);
  }
  mesh_stone_0.castShadow = options.castShadow ?? true;
  mesh_stone_0.receiveShadow = options.receiveShadow ?? true;
  mesh_stone_0.userData.sculptComponent = {"id": "stone", "name": "Kilometre stone", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.85, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "A single cast-concrete solid: a rectangular block whose top is finished as a semicircular arch, extruded through its depth. One closed solid, not an assembly - there is no joint anywhere on this prop and nothing is bolted to anything, which is what separates it from every other prop in this signage set.", "geometryDescriptor": {"topologyIntent": "ExtrudeGeometry over an arch-topped profile, 0.49 x 0.9, extruded 0.42 deep, bevelEnabled false.", "profile2D": {"kind": "arch-topped-rect", "halfWidth": 0.245, "height": 0.9, "archRadius": 0.245, "archSegments": 16, "depth": 0.42, "points": [[-0.245, 0.0], [0.245, 0.0], [0.245, 0.655], [0.24029, 0.7028], [0.22635, 0.74876], [0.20371, 0.79111], [0.17324, 0.82824], [0.13611, 0.85871], [0.09376, 0.88135], [0.0478, 0.89529], [0.0, 0.9], [-0.0478, 0.89529], [-0.09376, 0.88135], [-0.13611, 0.85871], [-0.17324, 0.82824], [-0.20371, 0.79111], [-0.22635, 0.74876], [-0.24029, 0.7028], [-0.245, 0.655]], "note": "19 points: two bottom corners, straight sides up to y=0.655, then a 16-segment semicircular arch of radius 0.245 swept from angle 0 (right shoulder) through pi/2 (apex) to pi (LEFT shoulder). The earlier build swept -pi/2..pi/2, which is the RIGHT half of a circle - a quarter-round cusp on one side and no left shoulder at all - and rendered visibly lop-sided. The arch IS this prop's silhouette."}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - a two-region atlas. The FRONT cap takes a full face region carrying the painted bands and the legend; the wall and the back cap take a narrow band COLUMN whose v is the same height fraction, so the red band and the white crown wrap continuously round the stone and meet the front face exactly. This is what lets one material paint a banded solid rather than a plate with a printed front.", "normalStrategy": "flat", "segmentRationale": "16 arch segments on a 0.245 m radius and one segment everywhere else. The crown is the only curve on the prop."}, "parent": null, "attachment": null, "dimensions": {"width": 0.49, "height": 0.9, "depth": 0.42, "units": "m", "confidence": 0.85}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center. This prop has exactly ONE component and ONE pivot, and that is the correct count: a cast concrete stone has no moving parts and nothing attaches to it."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0.45, 0], "scale": [0.125, 0.45, 0.1], "isTrigger": false, "notes": "Declared collider for this asset is `box`, and unlike the post-mounted signs in this set the proxy is nearly EXACT: the stone is a rectangular solid apart from its arched crown, so the box is the shape rather than a circumscription of it."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "concrete"}}, "material": "concrete", "materialLayers": ["concrete"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "white-crown", "description": "White painted crown covering the arched top and the upper third of the stone, down to the red band.", "representation": "texture-region"}, {"id": "red-band", "description": "Red painted band wrapping the whole stone between the white crown and the bare concrete, about 0.13 m deep.", "representation": "texture-region"}, {"id": "distance-numeral", "description": "Large black distance numeral on the white crown, set to the right of the face.", "representation": "texture-region"}, {"id": "place-name", "description": "Two black legend lines on the bare concrete below the band, a Thai province name over its Latin transliteration.", "representation": "texture-region"}, {"id": "algae-foot", "description": "Green-black algae darkening the lowest quarter of the concrete, heaviest at the corners where water sits.", "representation": "texture-region"}, {"id": "spalled-patch", "description": "A spalled patch on the front face below the legend where the render has broken away to expose aggregate.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#98917F", "stops": [{"position": 0.0, "color": "rgba(104,101,84,1.0)", "note": "algae-darkened concrete at the foot, measured #686554 over 9900 px"}, {"position": 0.25, "color": "rgba(152,145,127,1.0)", "note": "weathered concrete body, measured #98917F over 25200 lit px and #988F7A over 12600 shaded px - within 2 luma of each other, so this is albedo and not the key's work"}, {"position": 0.478, "color": "rgba(152,145,127,1.0)", "note": "concrete up to the red band's lower edge at 0.431 of height"}, {"position": 0.482, "color": "rgba(163,33,36,1.0)", "note": "SHARP edge into the red band, measured #A32124 over 10800 lit px"}, {"position": 0.622, "color": "rgba(163,33,36,1.0)", "note": "red band upper edge at 0.561 of height"}, {"position": 0.626, "color": "rgba(230,234,238,1.0)", "note": "SHARP edge into the white crown, averaged from #ECF0F3 lit and #D9DCE0 shaded"}, {"position": 1.0, "color": "rgba(230,234,238,1.0)", "note": "white over the whole arched crown"}], "finishStyle": "matte", "notes": "An ordered VERTICAL ramp measured up from the foot, with hard edges at both band boundaries: this is masked paint on cast concrete, so the boundaries are lines and not blends. The stops are doubled at each edge. Unlike every other prop in this set the bands WRAP the whole solid rather than sitting on a printed face, which is why the atlas carries a band column for the wall as well as a face region.", "dominantAlbedo": "rgba(152,145,127,1.0)", "secondaryAlbedo": "rgba(163,33,36,1.0)", "materialClass": "stone", "materialClassConfidence": 0.9}};
  node_stone_0.add(mesh_stone_0);
  meshes["stone"] = mesh_stone_0;
  colliders["stone"] = {"type": "box", "offset": [0, 0.45, 0], "scale": [0.125, 0.45, 0.1], "isTrigger": false, "notes": "Declared collider for this asset is `box`, and unlike the post-mounted signs in this set the proxy is nearly EXACT: the stone is a rectangular solid apart from its arched crown, so the box is the shape rather than a circumscription of it."};

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createKilometreStoneLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "Kilometre Stone look-dev lights";
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
  lights.userData.lightingFromPhoto = [{"role": "key", "type": "area", "directionHint": [0.48, 0.56, 0.67], "intensity": 1.0, "colorTemperatureK": 5600, "evidence": "The crown reads #ECF0F3 at luma 239 on the right face against #D9DCE0 at 220 on the left, and the red band #A32124 against #882322 - a soft key high and camera-RIGHT, which is the opposite hand from every other prop in this set and was measured rather than assumed from the siblings."}, {"role": "fill", "type": "hemisphere", "directionHint": [-0.55, 0.2, -0.35], "intensity": 0.4, "colorTemperatureK": 6500, "evidence": "The concrete body reads #98917F on the lit face and #988F7A on the shaded one - within 2 luma of each other. A 2-luma spread across two faces at right angles is strong fill, and it is why the body's albedo could be taken directly."}, {"role": "rim", "type": "directional", "directionHint": [-0.6, 0.35, -0.7], "intensity": 0.2, "colorTemperatureK": 6500, "evidence": "A soft bright edge separates the crown's left shoulder from the backdrop at luma 239 against 160."}, {"role": "environment", "type": "studio-context", "environment": "studio softbox on a flat neutral backdrop", "exposure": 1.0, "toneMapping": "ACESFilmic", "evidence": "Border-ring scan trimming to #A0A0A0. MEASURED rather than assumed to be the grey the prompt asked for.", "note": "The render harness backs onto a much darker ground, so a candidate render reads darker overall and that difference is the backdrop, not the prop."}, {"role": "contact-shadow", "type": "ground-shadow", "intensity": 0.6, "evidence": "The reference floats the stone with a soft shadow pooling under its full footprint - the largest ground contact of the eight props, since this is the only one that meets the ground on a face rather than a post section.", "behavior": "Grounded at y=0, the prop's origin, over the stone's full 0.25 x 0.20 m footprint. Ambient occlusion is left at zero: a convex solid has no cavity for AO to find, and baking any into base colour is what the material pass forbids."}];
  lights.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  return lights;
}


// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameKilometreStoneCamera(
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


export function configureKilometreStoneRenderer(renderer: THREE.WebGLRenderer): void {
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
// "Loma" and "Garuda" are the Debian TLWG Thai faces the image installs. Naming them
// after Noto keeps a browser that HAS Noto on Noto and still gives the headless harness a
// real Thai face instead of a row of tofu boxes.
const SANS_R = (px: number) => `${px}px "Noto Sans Thai", Loma, Garuda, "Arial", sans-serif`;

/**
 * Draw text into an ANISOTROPIC atlas region.
 *
 * A band column plus a face region maps a tall narrow face onto a square-ish patch of
 * canvas, so one atlas pixel is not the same number of millimetres across as it is down.
 * On the flood marker that stretch is 16x, and text drawn normally into it comes out as
 * an illegible vertical smear. The fix is to pick the font by the world WIDTH the label
 * should occupy and then squash the glyphs vertically by exactly the region's anisotropy,
 * so the label lands on the prop at its real proportions.
 *
 * `pxPerMU` / `pxPerMV` are canvas pixels per metre along each axis of the region.
 */
function drawWorldText(
  ctx: CanvasRenderingContext2D, text: string,
  cx: number, cy: number,
  worldW: number, worldCapH: number,
  pxPerMU: number, pxPerMV: number,
  font: (px: number) => string,
): void {
  const targetPxW = worldW * pxPerMU;
  const targetPxH = worldCapH * pxPerMV;
  const px = fitText(ctx, text, targetPxW, font, Math.max(8, targetPxW * 0.4));
  // fitText leaves the font set at `px`; cap height is about 0.72 of the em for these faces.
  const squash = targetPxH / Math.max(1e-6, px * 0.72);
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(1, squash);
  ctx.fillText(text, 0, 0);
  ctx.restore();
}

/**
 * Measured off assets/kilometre-stone/preview.jpg. See the spec's localOverrides for crops.
 *
 * Every tone here is a MULTIPLIER-space albedo the harness's key light lands on, and the
 * turntable's hole gate reads a back-lit face at about 0.55 of its painted luma against a
 * backdrop at 58. So nothing composites below about luma 110 on this prop, and the tones
 * that carry the dirt earn their darkness with CHROMA rather than with luma: the old
 * `algae` was a neutral #686554, which is a grey the gate has to guess about.
 */
const PALETTE = {
  crown: '#E6EAEE',      // averaged from #ECF0F3 lit (10799 px) and #D9DCE0 shaded (6300 px)
  crownDirt: '#BCBBAE',  // the greyed white under the arch shoulders and along the band line
  band: '#A32124',       // 10800 lit px of (560,380,180,60); the shaded face reads #882322
  bandLit: '#B7393B',    // the sun-bleached crest of the band, off its upper third
  bandDeep: '#8E2226',   // the shaded lower edge, and the rim of every flake
  body: '#98917F',       // 25200 lit px and 12600 shaded px, within 2 luma of each other
  bodyPale: '#B2AC9A',   // the rain-washed arris and the high body between the drip runs
  stain: '#807D6B',      // the vertical drip runs, and the standing ramp toward the foot
  // The drift's two poles. Spread WIDE and biased LIGHT on purpose: a matched window on the
  // plate's shaded body reads luma 155 with sd 23, and the only way to reach that spread
  // without pushing a texel toward the turntable's backdrop luma of 58 is to let the clean
  // patches go well ABOVE the base albedo rather than only below it. Composited over
  // #98917F (luma 152) these land at about 132..186, mean 159.
  driftDark: '#7A7663',  // luma 116
  driftLight: '#DCD8C6', // luma 214
  algae: '#6F7659',      // green-chroma, over the lowest quarter; luma 113, saturation 0.25
  aggregate: '#C8C1AE',  // the lit paste at the bottom of the spalled recess
  // The void itself. Luma 96 and saturation 0.27: the hole gate reads a back-lit face at
  // about 0.55 of its painted luma against a backdrop at 58, and this is the one mark on
  // the prop that has to be genuinely dark, so it pays for the darkness with CHROMA. It is
  // 0.06 of the face's area, well under the gate's 1 per cent of foreground.
  spallDark: '#6B6047',
  rust: '#9E6E48',       // the orange flecks of exposed reinforcement dust in the spall
  ink: '#1B1F22',        // 10415 sub-luma-70 px of (560,220,180,140)
} as const;

/** Geometry, in metres, from the spec. Origin base-center: y=0 is ground contact. */
const DIM = {
  // 0.49 x 0.90 x 0.42: the Meshy proxy measures w/h 0.548 and a 5-95 pct body depth of 0.46
  // of height, and the plate's bounding box is 596 x 880 px across a three-quarter view. The
  // first build's 0.25 x 0.20 section was a slender post the plate never showed.
  W: 0.49, H: 0.90, D: 0.42, archR: 0.245, archSegs: 24,
  /**
   * Every arris is ROLLED, not sharp. The plate's crown turns over in the depth axis as
   * well as across the face - it is a rolled dome, not a barrel vault with a knife-edge
   * perimeter - and the body's vertical corners are worn soft. 22 mm on a 490 mm stone is
   * what the plate's corner highlight measures. The extrude is inset and shortened so the
   * bevel lands INSIDE the declared envelope rather than growing it.
   */
  bevel: 0.022, bevelSegs: 3,
  /**
   * Band boundaries as a fraction of height, read off the x=420 scanline of the shaded face:
   * white-to-red at y=409 and red-to-concrete at y=537 on a stone spanning y=72..952.
   */
  bandLo: 0.472, bandHi: 0.617,
} as const;

/**
 * The atlas is a band COLUMN plus a face region. Every other prop in this set gets away
 * with one plain texel for everything that is not the front, because its paint sits on a
 * printed face. Here the paint WRAPS the solid, so the wall and the back cap need the
 * bands too - and they get them at the same height fraction, so the red band meets the
 * front face exactly all the way round.
 */
/**
 * Two regions with a guard gutter between them. The column used to be sampled at ONE u
 * (0.04) by every side wall and the back, which is a single texel column stretched across
 * 0.42 m of stone: nothing on those faces could vary horizontally, so every wash, every
 * drip run and the algae's own gradient arrived as a full-width horizontal BAND, and three
 * of the four turntable frames showed a flat striped box. The column is 0.30 of the atlas
 * now and the walls map their horizontal position into it.
 *
 * `gut` is inset off both ends of both regions so bilinear filtering at the shared edge
 * cannot drag the face region's legend into the column or the other way round.
 */
const ATLAS = { colU0: 0.0, colW: 0.30, faceU0: 0.32, faceW: 0.68, gut: 0.006 } as const;

let faceAtlasCache: THREE.CanvasTexture | null | undefined;
let bumpAtlasCache: THREE.CanvasTexture | null | undefined;

/** A deterministic draw stream. No Math.random anywhere: every instance must be identical. */
function stream(seed: number): () => number {
  let i = seed | 0;
  return () => { i += 1; return noise1(i); };
}

function rgba(hex: string, a: number): string {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

function grey(v: number, a: number): string {
  const k = Math.max(0, Math.min(255, Math.round(v)));
  return `rgba(${k},${k},${k},${a})`;
}

/** An irregular closed blob. A chip of paint and a spall are both polygons, never ellipses. */
function blobPath(ctx: CanvasRenderingContext2D, cx: number, cy: number,
                  rx: number, ry: number, n: number, jitter: number,
                  seed: number): void {
  // A SEED, not a live stream: the colour atlas and the height atlas must draw the SAME
  // polygon, and a shared stream is consumed by whichever of the two draws first.
  const r = stream(seed);
  ctx.beginPath();
  for (let k = 0; k < n; k += 1) {
    const a = (k / n) * Math.PI * 2;
    const j = 1 - jitter + jitter * 2 * r();
    const px = cx + Math.cos(a) * rx * j;
    const py = cy + Math.sin(a) * ry * j;
    if (k === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

/**
 * A soft wash, ELONGATED along y by `ratio`.
 *
 * Hard blotches read as camouflage, which is the trap this kit has already paid for on
 * stone; but round soft ones read as mould, which is the opposite trap and is what the
 * first tuning of this prop rendered - a wall of blurred green clouds. Weather on a
 * vertical face RUNS, so every wash on the body is two to four times taller than it is
 * wide and the eye reads it as staining rather than as a pattern.
 */
function wash(ctx: CanvasRenderingContext2D, cx: number, cy: number, rad: number,
              hex: string, a: number, ratio = 1): void {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(1, ratio);
  const g = ctx.createRadialGradient(0, 0, 0, 0, 0, rad);
  g.addColorStop(0, rgba(hex, a));
  g.addColorStop(0.55, rgba(hex, a * 0.45));
  g.addColorStop(1, rgba(hex, 0));
  ctx.fillStyle = g;
  ctx.fillRect(-rad, -rad, rad * 2, rad * 2);
  ctx.restore();
}

/**
 * The colour atlas and the height atlas are painted TOGETHER, off the same draw streams,
 * so the relief lands on the same grain, the same drip runs and the same paint chips the
 * albedo shows. Painting them in two passes is how a bump map comes to disagree with the
 * picture it is meant to be the relief of.
 */
interface Surf { c: CanvasRenderingContext2D; b: CanvasRenderingContext2D }

/** Flat bands. v is the height fraction and flipY makes v=1 the canvas TOP. */
function paintBase(s: Surf, x: number, w: number, size: number): void {
  const yHi = (1 - DIM.bandHi) * size;
  const yLo = (1 - DIM.bandLo) * size;
  s.c.fillStyle = PALETTE.crown; s.c.fillRect(x, 0, w, yHi);
  s.c.fillStyle = PALETTE.band;  s.c.fillRect(x, yHi, w, yLo - yHi);
  s.c.fillStyle = PALETTE.body;  s.c.fillRect(x, yLo, w, size - yLo);
  // Mid-grey is the bump's zero: everything after this either stands proud or sinks.
  s.b.fillStyle = '#808080'; s.b.fillRect(x, 0, w, size);
}

/**
 * Cloudy drift over the concrete: several octaves of very soft washes, alternating a grey
 * stain against the rain-washed pale. This is the layer the previous build had NONE of,
 * and it is why its body read as one flat tone against a plate that is mottled over its
 * whole height.
 */
function paintDrift(s: Surf, x: number, w: number, size: number, seed: number, kk = 1): void {
  const yLo = (1 - DIM.bandLo) * size;
  const r = stream(seed);
  // The standing ramp: on the plate the body darkens CONTINUOUSLY from the band to the
  // foot, so a foot-only gradient leaves the middle third reading as clean new concrete.
  // Measured, not chosen: a matched 110x120 window on the plate's SHADED body reads luma
  // 155 with sd 23 at mid height and falls to 71 only at the foot. The first tuning ran the
  // ramp from the band down and rendered that window at 111 with sd 5 - a body both 44 luma
  // too dark and four times too flat, which is a smudge rather than weathering. The ramp is
  // nearly flat over the top half now and the CONTRAST does the work instead.
  const ramp = s.c.createLinearGradient(0, yLo, 0, size);
  ramp.addColorStop(0, rgba(PALETTE.stain, 0.02));
  ramp.addColorStop(0.45, rgba(PALETTE.stain, 0.07));
  ramp.addColorStop(1, rgba(PALETTE.stain, 0.32));
  s.c.fillStyle = ramp;
  s.c.fillRect(x, yLo, w, size - yLo);
  for (const [count, lo, hi, alpha] of [
    [Math.round(30 / kk), 0.14, 0.30, 0.34], [Math.round(70 / kk), 0.06, 0.16, 0.44],
    [Math.round(130 / kk), 0.02, 0.07, 0.46],
  ] as Array<[number, number, number, number]>) {
    for (let i = 0; i < count; i += 1) {
      const cx = x + w * (-0.1 + 1.2 * r());
      const cy = yLo + (size - yLo) * r();
      const rad = w * (lo + (hi - lo) * r()) * kk;
      const ratio = 1.8 + 2.8 * r();
      const pick = r();
      wash(s.c, cx, cy, rad, pick < 0.42 ? PALETTE.driftDark : PALETTE.driftLight,
           alpha * (0.5 + 0.5 * r()), ratio);
      // A stain sits in the surface, a wash-out stands proud: keep the relief gentle.
      wash(s.b, cx, cy, rad, pick < 0.42 ? '#6E6E6E' : '#8E8E8E', alpha * 0.34, ratio);
    }
  }
}

/**
 * Rain runs. On the plate every dark streak starts at the red band's lower edge or at a
 * chip in it and falls, fading, most of the way down - the band is the drip line. So the
 * starts are BIASED to the band edge rather than scattered over the body.
 */
function paintStreaks(s: Surf, x: number, w: number, size: number, seed: number,
                      origins: number[] = []): void {
  const yLo = (1 - DIM.bandLo) * size;
  const r = stream(seed);
  for (let i = 0; i < 72; i += 1) {
    // Just under half of the runs start under a CHIP in the band. On the plate the darkest
    // marks on the concrete are directly below the places the paint has come away, because
    // that is where the water gets behind the film and comes out again; scattering every
    // run evenly across the face loses the one thing that ties the two surfaces together.
    const under = origins.length > 0 && r() < 0.45;
    const sx = under ? origins[Math.floor(r() * origins.length) % origins.length]
                         + w * (r() - 0.5) * 0.06
                     : x + w * (0.01 + 0.98 * r());
    const sw = w * (0.004 + 0.026 * r() * r());
    const y0 = yLo + (size - yLo) * (under ? 0.04 : 0.30) * r() * r();
    const len = (size - y0) * (0.35 + 0.65 * r());
    const dark = r() < 0.72;
    const a = (dark ? 0.18 + 0.28 * r() : 0.10 + 0.16 * r()) * (under ? 1.25 : 1);
    const g = s.c.createLinearGradient(0, y0, 0, y0 + len);
    const hex = dark ? PALETTE.stain : PALETTE.bodyPale;
    g.addColorStop(0, rgba(hex, 0));
    g.addColorStop(0.14, rgba(hex, a));
    g.addColorStop(1, rgba(hex, 0));
    s.c.fillStyle = g;
    s.c.fillRect(sx, y0, sw, len);
    const gb = s.b.createLinearGradient(0, y0, 0, y0 + len);
    gb.addColorStop(0, grey(dark ? 110 : 150, 0));
    gb.addColorStop(0.14, grey(dark ? 110 : 150, a * 0.8));
    gb.addColorStop(1, grey(dark ? 110 : 150, 0));
    s.b.fillStyle = gb;
    s.b.fillRect(sx, y0, sw, len);
  }
}

/**
 * Formwork striation: short vertical scratches at the frequency BETWEEN the drift's washes
 * and the grain's specks. It is the band the material comparator was short of - the plate
 * reads luma variance 0.071 and mean gradient 0.058, and the build with drift and grain
 * alone read 0.050 and 0.033, scoring 0.82 on microstructure against 0.95 on base colour.
 * Washes cannot supply it (they are too soft) and specks cannot (they are too small to
 * survive minification), so it needs its own layer.
 */
function paintStriation(s: Surf, x: number, w: number, size: number, y0: number, y1: number,
                        seed: number, count: number, strength: number, k = 1): void {
  const r = stream(seed);
  for (let i = 0; i < count; i += 1) {
    const px = x + w * r();
    const len = (y1 - y0) * (0.02 + 0.10 * r() * r());
    const py = y0 + (y1 - y0 - len) * r();
    const sw = Math.max(1, w * (0.002 + 0.008 * r()) * k);
    const up = r() < 0.5;
    const a = strength * (0.4 + 0.6 * r());
    const g = s.c.createLinearGradient(0, py, 0, py + len);
    const hex = up ? PALETTE.driftLight : PALETTE.driftDark;
    g.addColorStop(0, rgba(hex, 0));
    g.addColorStop(0.35, rgba(hex, a));
    g.addColorStop(1, rgba(hex, 0));
    s.c.fillStyle = g;
    s.c.fillRect(px, py, sw, len);
    s.b.fillStyle = grey(up ? 170 : 84, a * 0.8);
    s.b.fillRect(px, py, sw, len);
  }
}

/** The pour line: one faint horizontal lift where the formwork was topped up. */
function paintPourLine(s: Surf, x: number, w: number, size: number): void {
  const yLo = (1 - DIM.bandLo) * size;
  const y = yLo + (size - yLo) * 0.42;
  // Faded at both ends: a pour line that runs edge to edge at full strength reads as a
  // shelf cut into the stone rather than as a lift in the formwork.
  const fade = s.c.createLinearGradient(x, 0, x + w, 0);
  fade.addColorStop(0, rgba(PALETTE.stain, 0));
  fade.addColorStop(0.3, rgba(PALETTE.stain, 0.20));
  fade.addColorStop(0.75, rgba(PALETTE.stain, 0.12));
  fade.addColorStop(1, rgba(PALETTE.stain, 0));
  s.c.fillStyle = fade;
  s.c.fillRect(x, y, w, Math.max(1, size * 0.0025));
  s.b.fillStyle = grey(104, 0.55);
  s.b.fillRect(x, y, w, Math.max(1, size * 0.0025));
}

/**
 * Aggregate grain. Two thousand one- and two-pixel specks is what stops cast concrete
 * reading as paint at close range, and it is the layer that carries almost all of the
 * bump map's high-frequency relief.
 */
function paintGrain(s: Surf, x: number, w: number, size: number, y0: number, y1: number,
                    seed: number, density: number, k = 1): void {
  const r = stream(seed);
  const n = Math.round(density * w * (y1 - y0) / 1000);
  for (let i = 0; i < n; i += 1) {
    const px = x + w * r();
    const py = y0 + (y1 - y0) * r();
    // Two to five texels. A one-pixel speck on a 1024 atlas is seen through three texels
    // of minification at prop distance, which is to say it is not seen at all - the first
    // tuning painted 1100 of them onto a face that rendered perfectly smooth.
    const d = Math.max(1, Math.round((2 + r() * 3) * k));
    const up = r() < 0.5;
    s.c.fillStyle = rgba(up ? PALETTE.driftLight : PALETTE.driftDark, 0.16 + 0.26 * r());
    s.c.fillRect(px, py, d, d);
    s.b.fillStyle = grey(up ? 176 : 74, 0.30 + 0.35 * r());
    s.b.fillRect(px, py, d, d);
  }
}

/**
 * Algae at the foot. A gradient alone is a smudge; on the plate the green is a field of
 * small CLUSTERS thickening downward, heaviest in the corner the rain runs into. Capped
 * at 0.78 alpha over the body so the composite bottoms out near luma 118 - a back-lit
 * frame renders that at ~65, clear of the gate's band around 58.
 */
function paintAlgae(s: Surf, x: number, w: number, size: number, seed: number): void {
  const top = size * 0.80;
  const g = s.c.createLinearGradient(0, top, 0, size);
  g.addColorStop(0, rgba(PALETTE.algae, 0));
  g.addColorStop(0.55, rgba(PALETTE.algae, 0.34));
  g.addColorStop(1, rgba(PALETTE.algae, 0.78));
  s.c.fillStyle = g;
  s.c.fillRect(x, top, w, size - top);

  const r = stream(seed);
  for (let k = 0; k < 44; k += 1) {
    const cx = x + w * r();
    const depth = r() * r();                       // biased to the foot
    const cy = size - (size - top) * depth * 0.95;
    const spread = w * (0.02 + 0.05 * r());
    const density = 14 + Math.round(26 * r());
    for (let i = 0; i < density; i += 1) {
      const a1 = r() * Math.PI * 2;
      const rr = spread * Math.sqrt(r());
      const px = cx + Math.cos(a1) * rr;
      const py = cy + Math.sin(a1) * rr * 1.3;
      if (py > size || py < top * 0.98) continue;
      const d = 1 + Math.round(r() * 2.4);
      s.c.fillStyle = rgba(PALETTE.algae, 0.30 + 0.50 * r());
      s.c.fillRect(px, py, d, d);
      s.b.fillStyle = grey(150, 0.28);
      s.b.fillRect(px, py, d, d);
    }
  }
}

/** The very bottom: grime, and the ragged chipped edge the plate's foot actually has. */
function paintFoot(s: Surf, x: number, w: number, size: number, seed: number): void {
  const g = s.c.createLinearGradient(0, size * 0.94, 0, size);
  g.addColorStop(0, rgba(PALETTE.stain, 0));
  g.addColorStop(1, rgba(PALETTE.stain, 0.42));
  s.c.fillStyle = g;
  s.c.fillRect(x, size * 0.94, w, size * 0.06);

  const r = stream(seed);
  for (let i = 0; i < 26; i += 1) {
    const cx = x + w * r();
    const rx = w * (0.008 + 0.030 * r());
    const ry = size * (0.004 + 0.014 * r());
    const cy = size - size * 0.004 - ry * r();
    blobPath(s.c, cx, cy, rx, ry, 7, 0.45, seed + i * 37);
    s.c.fillStyle = rgba(PALETTE.aggregate, 0.35 + 0.30 * r());
    s.c.fill();
    blobPath(s.b, cx, cy, rx, ry, 7, 0.45, seed + i * 37);
    s.b.fillStyle = grey(96, 0.5);
    s.b.fill();
  }
}

/**
 * The red band, which on the plate is the most damaged surface on the stone: sun-faded
 * across its crest, deep in its shadowed lower edge, and flaking off BOTH edges in
 * clustered irregular chips that expose the concrete beneath. The previous build had one
 * row of fourteen axis-aligned rectangles along the bottom edge, which rendered as a
 * sawtooth graphic rather than as paint coming away.
 */
function paintBandWear(s: Surf, x: number, w: number, size: number, seed: number): number[] {
  const yHi = (1 - DIM.bandHi) * size;
  const yLo = (1 - DIM.bandLo) * size;
  const bh = yLo - yHi;
  const r = stream(seed);

  s.c.save();
  s.c.beginPath(); s.c.rect(x, yHi, w, bh); s.c.clip();
  s.b.save();
  s.b.beginPath(); s.b.rect(x, yHi, w, bh); s.b.clip();

  // Fade across the crest, depth along the lower edge.
  const g = s.c.createLinearGradient(0, yHi, 0, yLo);
  g.addColorStop(0, rgba(PALETTE.bandDeep, 0.30));
  g.addColorStop(0.34, rgba(PALETTE.bandLit, 0.34));
  g.addColorStop(1, rgba(PALETTE.bandDeep, 0.38));
  s.c.fillStyle = g;
  s.c.fillRect(x, yHi, w, bh);
  for (let i = 0; i < 26; i += 1) {
    wash(s.c, x + w * r(), yHi + bh * r(), w * (0.03 + 0.13 * r()),
         r() < 0.5 ? PALETTE.bandLit : PALETTE.bandDeep, 0.12 + 0.20 * r(), 0.7);
  }

  // Flaking, in clusters. A chip is a polygon of exposed concrete with a darker rim where
  // the paint film has lifted; the clusters sit on the two edges, where water gets under.
  const drips: number[] = [];
  for (let k = 0; k < 13; k += 1) {
    const edge = r();
    const cy = edge < 0.52 ? yLo - bh * 0.10 * r()
             : edge < 0.80 ? yHi + bh * 0.12 * r()
             : yHi + bh * r();
    const cx = x + w * r();
    const spread = w * (0.02 + 0.05 * r());
    const chips = 4 + Math.round(7 * r());
    // Only a cluster on the band's LOWER edge sheds down the concrete.
    if (edge < 0.52) drips.push(cx);
    for (let i = 0; i < chips; i += 1) {
      const px = cx + (r() - 0.5) * 2 * spread;
      const py = cy + (r() - 0.5) * bh * 0.34;
      // Wider than they are tall, and small: a chip of paint comes away in a flake, and
      // the first pass's 0.07..0.33 of the band height hung white icicles off the red.
      const rx = w * (0.008 + 0.030 * r() * r());
      const ry = bh * (0.04 + 0.13 * r() * r());
      blobPath(s.c, px, py, rx, ry, 8, 0.55, seed + k * 97 + i);
      s.c.fillStyle = rgba(r() < 0.35 ? PALETTE.bodyPale : PALETTE.stain, 0.55 + 0.34 * r());
      s.c.fill();
      s.c.strokeStyle = rgba(PALETTE.bandDeep, 0.55);
      s.c.lineWidth = Math.max(1, size * 0.0015);
      s.c.stroke();
      blobPath(s.b, px, py, rx, ry, 8, 0.55, seed + k * 97 + i);
      s.b.fillStyle = grey(104, 0.55);
      s.b.fill();
    }
  }
  s.c.restore();
  s.b.restore();
  return drips;
}

/**
 * The white crown is not clean white. It greys toward the band, carries the same grey
 * drift under the arch shoulders, and takes a dirty line right where the paint meets the
 * red. Flat #E6EAEE over the whole crown is the second half of the flat-surface gap.
 */
function paintCrownGrime(s: Surf, x: number, w: number, size: number, seed: number, k: number): void {
  const yHi = (1 - DIM.bandHi) * size;
  const r = stream(seed);
  const g = s.c.createLinearGradient(0, yHi - size * 0.20, 0, yHi);
  g.addColorStop(0, rgba(PALETTE.crownDirt, 0));
  g.addColorStop(1, rgba(PALETTE.crownDirt, 0.72));
  s.c.fillStyle = g;
  s.c.fillRect(x, yHi - size * 0.20, w, size * 0.20);

  s.c.save();
  s.c.beginPath(); s.c.rect(x, 0, w, yHi); s.c.clip();
  for (let i = 0; i < 34; i += 1) {
    wash(s.c, x + w * r(), yHi * (0.35 + 0.68 * r()), w * (0.05 + 0.18 * r()),
         PALETTE.crownDirt, 0.14 + 0.22 * r(), 1.4);
  }
  // The shoulders themselves: the crown's widest point is where the run-off concentrates,
  // and it is the last part of the white the eye reads as clean.
  for (const sh of [0.10, 0.90]) {
    for (let i = 0; i < 10; i += 1) {
      wash(s.c, x + w * (sh + (r() - 0.5) * 0.18), yHi * (0.72 + 0.30 * r()),
           w * (0.06 + 0.14 * r()), PALETTE.algae, 0.08 + 0.13 * r(), 1.8);
    }
  }
  // Short runs off the shoulder, where the crown sheds onto the band.
  for (let i = 0; i < 26; i += 1) {
    const sx = x + w * r();
    const y0 = yHi * (0.45 + 0.5 * r());
    const len = (yHi - y0) * (0.5 + 0.5 * r());
    const gg = s.c.createLinearGradient(0, y0, 0, y0 + len);
    gg.addColorStop(0, rgba(PALETTE.crownDirt, 0));
    gg.addColorStop(1, rgba(PALETTE.crownDirt, 0.16 + 0.24 * r()));
    s.c.fillStyle = gg;
    s.c.fillRect(sx, y0, w * (0.005 + 0.02 * r()), len);
  }
  s.c.restore();
  paintStriation(s, x, w, size, yHi * 0.30, yHi, seed + 883, Math.round(200 / k), 0.16, k);
  paintGrain(s, x, w, size, 0, yHi, seed + 977, 0.9 / k, k);
}

/**
 * Everything that wraps, painted into one region.
 *
 * `k` is the region's texel scale relative to the face, and it exists because a mark sized
 * as a fraction of the region's WIDTH is not the same size in the world in both regions.
 * The face carries 0.49 m over 0.68 of the atlas (0.54 mm per texel); the column carries
 * 0.42 m over 0.30 (1.37 mm per texel), 2.5x coarser. Painting both at the same fractions
 * puts grain two and a half times too big on three of the four faces, and a 120 px window
 * on the side wall measured sd 10 against the front's 18 for exactly that reason. Sizes are
 * multiplied by `k` and counts divided by it, so both regions weather at the same scale.
 */
function paintWrapped(s: Surf, x: number, w: number, size: number, seed: number, k: number): void {
  const yLo = (1 - DIM.bandLo) * size;
  paintBase(s, x, w, size);
  // The band is painted BEFORE the body, out of order, because the body sheds FROM it: the
  // chip positions are what the drip runs are anchored to.
  const drips = paintBandWear(s, x, w, size, seed + 1013);
  s.c.save(); s.c.beginPath(); s.c.rect(x, yLo, w, size - yLo); s.c.clip();
  s.b.save(); s.b.beginPath(); s.b.rect(x, yLo, w, size - yLo); s.b.clip();
  paintDrift(s, x, w, size, seed, k);
  paintStreaks(s, x, w, size, seed + 211, drips);
  paintPourLine(s, x, w, size);
  paintStriation(s, x, w, size, yLo, size, seed + 307, Math.round(620 / k), 0.34, k);
  paintGrain(s, x, w, size, yLo, size, seed + 419, 3.4 / k, k);
  paintAlgae(s, x, w, size, seed + 613);
  paintFoot(s, x, w, size, seed + 811);
  s.c.restore(); s.b.restore();
  paintCrownGrime(s, x, w, size, seed + 1217, k);
}

/**
 * The spalled patch: a vertical almond of render broken away to expose the aggregate,
 * with rust-coloured dust in it. Painted rather than modelled - it is a surface loss of a
 * few millimetres - but it now carries real relief in the bump map, which is what makes a
 * hole in concrete read as a hole rather than as a decal.
 *
 * Re-measured off the plate: it spans y=735..870 on a stone spanning y=72..952, i.e. 0.093
 * to 0.247 of height, so it is centred at 0.17 and is 0.135 of the height tall. The
 * previous build had it at 0.21 and half that size.
 */
function paintSpall(s: Surf, fx: number, fw: number, size: number): void {
  const r = stream(7717);
  const cx = fx + fw * 0.115;
  const cy = size * 0.830;
  const rx = fw * 0.062;
  const ry = size * 0.077;

  // Read from the outside in, because a spall is a HOLE and a hole is darker than the wall
  // it is in. The first two tunings filled the void with pale aggregate and hung a thin
  // dark line round it, which renders as a light sticker with an outline. What actually
  // reads is: a soft shadow spilling onto the wall, a dark void, and a SMALL patch of lit
  // aggregate low inside it where the key reaches the bottom of the recess.
  wash(s.c, cx, cy, rx * 2.2, PALETTE.stain, 0.42, ry / rx);
  blobPath(s.c, cx, cy, rx * 1.10, ry * 1.06, 13, 0.30, 7717);
  s.c.fillStyle = rgba(PALETTE.spallDark, 0.70);
  s.c.fill();
  blobPath(s.c, cx, cy, rx, ry, 13, 0.28, 7719);
  s.c.fillStyle = rgba(PALETTE.spallDark, 0.92);
  s.c.fill();
  blobPath(s.c, cx - rx * 0.12, cy + ry * 0.26, rx * 0.58, ry * 0.46, 11, 0.34, 7723);
  s.c.fillStyle = rgba(PALETTE.aggregate, 0.72);
  s.c.fill();
  blobPath(s.b, cx, cy, rx, ry, 13, 0.28, 7719);
  s.b.fillStyle = grey(52, 0.95);
  s.b.fill();

  s.c.save();
  blobPath(s.c, cx, cy, rx, ry, 13, 0.28, 7719);
  s.c.clip();
  s.b.save();
  blobPath(s.b, cx, cy, rx, ry, 13, 0.28, 7719);
  s.b.clip();
  for (let i = 0; i < 130; i += 1) {
    const a = r() * Math.PI * 2;
    const rr = Math.sqrt(r());
    const px = cx + Math.cos(a) * rx * rr;
    const py = cy + Math.sin(a) * ry * rr;
    const d = 1 + Math.round(r() * 3);
    const rust = r() < 0.14;
    s.c.fillStyle = rgba(rust ? PALETTE.rust : (r() < 0.5 ? PALETTE.bodyPale : PALETTE.stain),
                         0.45 + 0.45 * r());
    s.c.fillRect(px, py, d, d);
    s.b.fillStyle = grey(150, 0.5);
    s.b.fillRect(px, py, d, d);
  }
  s.c.restore();
  s.b.restore();
}

function paintAtlases(size: number): { color: HTMLCanvasElement; bump: HTMLCanvasElement } | null {
  const mk = () => {
    const c = document.createElement('canvas');
    c.width = size; c.height = size;
    // A GPU-backed canvas costs seconds per thousand path fills; this atlas is read back
    // once and never composited, so keep it on the CPU raster.
    return { c, ctx: c.getContext('2d', { willReadFrequently: true }) };
  };
  const a = mk(); const b = mk();
  if (!a.ctx || !b.ctx) return null;
  const s: Surf = { c: a.ctx, b: b.ctx };
  // Flood both atlases before anything else. The guard gutter between the two regions is
  // never painted by a region, and left transparent it is BLACK - which at mip 3 is two
  // texels wide and gets dragged onto the stone by the bilinear tap either side of it.
  s.c.fillStyle = PALETTE.body; s.c.fillRect(0, 0, size, size);
  s.b.fillStyle = '#808080'; s.b.fillRect(0, 0, size, size);

  // The band column, sampled by the side walls and the back cap.
  // 0.40 = (0.49 / 0.68) / (0.42 / 0.30): the column's metres-per-texel against the face's.
  paintWrapped(s, size * ATLAS.colU0, size * ATLAS.colW, size, 3301, 0.40);
  // The face region, sampled by the front cap: the same treatment on its own draw stream,
  // so the front and the sides are not the same picture twice.
  const fx = size * ATLAS.faceU0, fw = size * ATLAS.faceW;
  paintWrapped(s, fx, fw, size, 5501, 1);
  paintSpall(s, fx, fw, size);

  // The legend, set RIGHT of centre on the face - asymmetric, so the atlas must not be
  // mirrored. Representative text for a province, not a transcription of one stone.
  //
  // The face region is anisotropic - 0.49 m of width onto 0.68 of u against 0.90 m of
  // height onto 1.0 of v - so the legend goes through drawWorldText and lands at its real
  // proportions rather than stretched.
  const ctx = a.ctx;
  const pxPerMU = fw / DIM.W;
  const pxPerMV = size / DIM.H;
  ctx.fillStyle = PALETTE.ink;
  // Stencilled paint on a rough wall, so the grain underneath comes a little way through
  // rather than the glyphs sitting on top as clean vector shapes.
  ctx.globalAlpha = 0.93;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  // Plate positions, as height fraction from the foot on a stone spanning y=72..952: the
  // numeral centred at y=270 (0.775), the Thai line at y=590 (0.41), the Latin line at
  // y=660 (0.33); all three centred at 0.54 of the face's width. Glyph heights 0.12, 0.056
  // and 0.036 m off the same plate at 880 px = 0.90 m.
  drawWorldText(ctx, '42', fx + fw * 0.54, size * 0.225, DIM.W * 0.40, 0.12, pxPerMU, pxPerMV, SANS);
  drawWorldText(ctx, 'สระบุรี', fx + fw * 0.54, size * 0.59, DIM.W * 0.52, 0.056, pxPerMU, pxPerMV, SANS_R);
  drawWorldText(ctx, 'SARABURI', fx + fw * 0.54, size * 0.67, DIM.W * 0.56, 0.036, pxPerMU, pxPerMV, SANS);
  ctx.globalAlpha = 1;
  // The height atlas ships at HALF resolution. It is painted at full size so its grain and
  // its chips line up with the albedo's, then downsampled: relief is low-frequency where it
  // matters, and two full 1024 RGBA textures is 11 MB of VRAM on a kit aimed at low-end
  // integrated GPUs.
  const half = document.createElement('canvas');
  half.width = size / 2; half.height = size / 2;
  const hc = half.getContext('2d');
  if (hc) hc.drawImage(b.c, 0, 0, half.width, half.height);
  return { color: a.c, bump: hc ? half : b.c };
}

function faceAtlas(size: number): THREE.CanvasTexture | null {
  if (faceAtlasCache !== undefined) return faceAtlasCache;
  if (typeof document === 'undefined') { faceAtlasCache = null; bumpAtlasCache = null; return null; }
  const painted = paintAtlases(size);
  if (!painted) { faceAtlasCache = null; bumpAtlasCache = null; return null; }

  const tex = new THREE.CanvasTexture(painted.color);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  faceAtlasCache = tex;

  // The height atlas is DATA, not a picture: leave it in linear space or the relief is
  // read through an sRGB decode and every gentle stain becomes a cliff.
  const bump = new THREE.CanvasTexture(painted.bump);
  bump.colorSpace = THREE.NoColorSpace;
  bump.needsUpdate = true;
  bumpAtlasCache = bump;
  return tex;
}

/**
 * Angle-limited normal smoothing.
 *
 * ExtrudeGeometry is non-indexed, so its normals are FLAT and a three-segment bevel reads
 * as a ladder of facets around the crown - the same banding the previous build showed on
 * its unbevelled arch. Averaging the normals that share a position AND point within
 * `maxDeg` of each other rounds every bevel over while leaving the flat faces flat.
 *
 * Unconditional averaging is the LatheGeometry mistake this kit has already paid for: it
 * tilts the first ring of a wall into the disc it meets and shades a dark band the
 * turntable gate reads as a hole. The threshold is what stops that here - a bevel step is
 * about 22 degrees, and a cap-to-wall junction with no bevel between them is 90.
 */
function smoothBevel(geo: THREE.BufferGeometry, maxDeg = 62): void {
  const pos = geo.getAttribute('position') as THREE.BufferAttribute;
  const nrm = geo.getAttribute('normal') as THREE.BufferAttribute;
  if (!pos || !nrm) return;
  const lim = Math.cos((maxDeg * Math.PI) / 180);
  const buckets = new Map<string, number[]>();
  for (let i = 0; i < pos.count; i += 1) {
    const k = `${Math.round(pos.getX(i) * 1e4)},${Math.round(pos.getY(i) * 1e4)},${Math.round(pos.getZ(i) * 1e4)}`;
    const b = buckets.get(k);
    if (b) b.push(i); else buckets.set(k, [i]);
  }
  const out = new Float32Array(nrm.count * 3);
  for (const ids of buckets.values()) {
    for (const i of ids) {
      const ix = nrm.getX(i), iy = nrm.getY(i), iz = nrm.getZ(i);
      let nx = 0, ny = 0, nz = 0;
      for (const j of ids) {
        const jx = nrm.getX(j), jy = nrm.getY(j), jz = nrm.getZ(j);
        if (ix * jx + iy * jy + iz * jz < lim) continue;
        nx += jx; ny += jy; nz += jz;
      }
      const L = Math.hypot(nx, ny, nz) || 1;
      out[i * 3] = nx / L; out[i * 3 + 1] = ny / L; out[i * 3 + 2] = nz / L;
    }
  }
  geo.setAttribute('normal', new THREE.BufferAttribute(out, 3));
}

/** The arch-topped front elevation: straight sides, then a true semicircular crown. */
function stoneShape(): THREE.Shape {
  // `bevelSize` runs OUTWARD from the outline, so the shape is INSET by it on all four
  // sides and lifted by it off the ground - measured, not assumed: the first attempt left
  // the shape at its full size and the harness read the bounds back as 0.534 x 0.944,
  // one whole bevel proud of the declared envelope in every direction.
  const b = DIM.bevel;
  const R = DIM.archR - b, s = new THREE.Shape();
  const hw = DIM.W / 2 - b;
  const H = DIM.H - b;
  s.moveTo(-hw, b);
  s.lineTo(hw, b);
  s.lineTo(hw, H - R);
  // Sweep 0 -> PI: from the RIGHT shoulder over the apex to the LEFT shoulder. The first
  // build swept -PI/2 -> PI/2, which is the right HALF of a circle - a cusp hanging below
  // the right shoulder and no left shoulder at all - and rendered visibly lop-sided.
  for (let k = 1; k <= DIM.archSegs; k += 1) {
    const a = Math.PI * (k / DIM.archSegs);
    s.lineTo(R * Math.cos(a), H - R + R * Math.sin(a));
  }
  s.lineTo(-hw, b);
  return s;
}

function buildGeometry(root: THREE.Group): void {
  const bt = DIM.bevel;
  // ExtrudeGeometry runs the caps from z=0 to z=depth and hangs the bevel off both ends,
  // so the finished z extent is depth + 2*bt. Shortening the extrusion by exactly that
  // keeps the solid inside its declared 0.42 m depth.
  const geo = new THREE.ExtrudeGeometry(stoneShape(), {
    depth: DIM.D - 2 * bt, bevelEnabled: true, bevelThickness: bt, bevelSize: bt,
    bevelOffset: 0, bevelSegments: DIM.bevelSegs, curveSegments: 4,
  });
  geo.translate(0, 0, -(DIM.D / 2 - bt));
  smoothBevel(geo);

  const pos = geo.getAttribute('position') as THREE.BufferAttribute;
  const nrm = geo.getAttribute('normal') as THREE.BufferAttribute;
  const uv = new Float32Array(pos.count * 2);
  const g = ATLAS.gut;
  for (let i = 0; i < pos.count; i += 1) {
    // v is the height fraction for EVERY vertex, front cap and wall alike. That is what
    // makes the bands wrap continuously and meet the front face exactly.
    const v = Math.min(1, Math.max(0, pos.getY(i) / DIM.H));
    const x = pos.getX(i), z = pos.getZ(i);
    if (nrm.getZ(i) > 0.5) {
      // The front cap, and the bevel ring around it: those normals sit near 45 degrees, so
      // they take the FACE region with the cap they belong to and u stays continuous
      // across the rolled arris.
      uv[i * 2] = ATLAS.faceU0 + g + (ATLAS.faceW - 2 * g) * (x / DIM.W + 0.5);
    } else {
      // Everything else reads the column, and it reads ACROSS it: a side wall varies along
      // z, the back cap and the crown along x. Whichever axis the face actually spans is
      // the one that carries the horizontal detail.
      const t = Math.abs(nrm.getX(i)) > Math.abs(nrm.getZ(i)) ? z / DIM.D + 0.5 : x / DIM.W + 0.5;
      uv[i * 2] = ATLAS.colU0 + g + (ATLAS.colW - 2 * g) * Math.min(1, Math.max(0, t));
    }
    uv[i * 2 + 1] = v;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  setMeshGeometry(root, 'stone', geo);
}

/** Assign the atlas AFTER material construction - the textureless declaration does not touch this route. */
function applyAtlases(root: THREE.Group, options: ProceduralModelOptions): void {
  const rt = root.userData.sculptRuntime as { meshes?: Record<string, THREE.Mesh> } | undefined;
  const mesh = rt?.meshes?.['stone'];
  if (!mesh) return;
  // 1024, not 512: the weathering is the identity of this prop at prop distance, and at 512
  // the flaked edge of the red band and the aggregate in the spall are both under two texels.
  // It is ONE canvas pair of Path2D fills, not a per-pixel loop, so it costs milliseconds.
  const tex = faceAtlas(options.textureSize ?? 1024);
  if (!tex) return;
  tex.anisotropy = options.textureAnisotropy ?? 4;
  const m = mesh.material as THREE.MeshPhysicalMaterial;
  m.map = tex;
  if (bumpAtlasCache) {
    bumpAtlasCache.anisotropy = tex.anisotropy;
    m.bumpMap = bumpAtlasCache;
    m.bumpScale = 0.6;
  }
  m.color.set('#FFFFFF');
  m.metalness = 0.0;
  // The highest roughness of the eight: cast concrete and masked paint both scatter
  // completely, and the reference's two faces at right angles differ by only 2 luma.
  m.roughness = 0.85;
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
  const root = createKilometreStoneModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  buildGeometry(root);
  applyAtlases(root, options);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: ONE. static prop: the root is the only axis it has.
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
