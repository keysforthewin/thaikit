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

// Generated from ObjectSculptSpec target: Expressway Gantry Sign
// Sculpt build pass: optimization-pass
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createExpresswayGantrySignModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "Expressway Gantry Sign";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 40.0, "aspect": 1.0, "orientation": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "positionHint": [0.0, 0.0, 3.0], "note": "For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."}, "approximationNotes": []};
  root.userData.materialPipeline = {};
  root.userData.materialReferenceRegistry = null;

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["galvanised"] = createSculptMaterial(
    "galvanised",
    {"id": "galvanised", "name": "Hot-dip galvanised structural steel", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#FFFFFF", "color": "#FFFFFF", "albedo": {"dominant": "#7F8285", "secondary": ["#92979A", "#5B5C5B", "#7B6757", "#6E6963"], "samplingNotes": "White base colour because the measured vertical ramp is delivered as VERTEX COLOURS; a tint here would multiply into it."}, "colorVariation": {"palette": ["#7F8285", "#92979A", "#5B5C5B", "#7B6757"], "pattern": "mottled", "amplitude": 0.14, "heightCorrelation": 0.3}, "roughness": {"base": 0.62, "variation": 0.1, "map": "none", "localResponse": "Mill-finish galvanising scatters rather than reflecting a lobe. The structural sections here are cleaner than any other prop's in this set."}, "metalness": {"base": 0.25, "variation": 0.0, "notes": "Held at 0.25. There is no environment map in the target harness, so a high metalness has nothing to reflect and renders near-black."}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "Convex prismatic members with no cavity for AO to find, and baking any into base colour is what the material pass forbids."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "galv-spangle", "color": "#7F8285", "region": "the legs, rails and brackets", "evidenceRef": "region-post", "notes": "Averaged from #92979A over 10181 neutral px on the right leg's LIT face and #6C6E70 over 12000 on its shaded face. A 40-luma spread across two faces of the same member is far too large to take either as albedo."}, {"id": "baseplate-grey", "color": "#5B5C5B", "region": "the two bolted base plates and their gussets", "evidenceRef": "region-baseplate", "notes": "Trimmed mean #5B5C5B over 2935 neutral px at (670,700,120,30); gussets #656460 over 4800 px at (215,900,120,40) with fewer than 10 rusty px. Darker than the legs, which is dirt and shadow at ground level rather than a different steel."}, {"id": "flange-rust", "color": "#7B6757", "region": "the flange splice collars and a streak down each leg beneath them", "evidenceRef": "region-flange", "notes": "313 of 1980 px at (215,412,90,22) pass an orange filter and trim to #7B6757; the collar as a whole trims to #6E6963. The right collar reads #756350 over 127 px. The leg streak below trims to #7A6E5A over 60 px at (225,440,70,60) - thin, and baked thin."}, {"id": "bracket-rust", "color": "#806E5C", "region": "the four rail end-plate brackets and the two cap plates", "evidenceRef": "region-bracket", "notes": "316 of 3200 px at (300,330,40,80) trim to #806E5C on the lower-left bracket, whose whole crop trims to #676562; the right cap at (745,48,60,28) trims to #949392 with 190 rusty px at #826D5B. THIN readings, and recorded as thin: this is the least rusty prop of the eight."}, {"id": "rung-steel", "color": "#5A5B5A", "region": "the eight climbing rungs", "evidenceRef": "region-rung", "notes": "Trimmed mean #5A5B5A over 1293 of 1350 neutral px at (215,480,45,30). Reads darker than the leg behind it because a 30 mm bar in front of a lit face is mostly its own shadow."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["Reference plate, right leg lit face at (760,300,35,300): 10181 NEUTRAL px trimming to #92979A; its shaded face at (700,300,40,300) 12000 px trimming to #6C6E70. Hot-dip spangle is a flat crystalline blotch and the spread between the crops is lighting, not height.", "Reference plate, base plate at (670,700,120,30): 2935 neutral px trimming to #5B5C5B; gussets at (215,900,120,40) 4800 px to #656460 - flat rolled plate.", "Flange collar at (215,412,90,22): 1980 px trimming to #6E6963 with 313 rusty px at #7B6757 - a tone change, no relief a viewer resolves at gantry distance.", "The tones arrive as VERTEX COLOURS baked per part before the merge, and the spangle mottle is one seeded seamless 1 m canvas tile assigned AFTER material construction, which the declaration does not touch.", "Measured cost: five synthesised canvases at 1024 for this material alone is roughly 1.9 s inside createObjectModel, for a frame of about 760 triangles."]}},
    options
  );
  materialMap["sheeting"] = createSculptMaterial(
    "sheeting",
    {"id": "sheeting", "name": "Retroreflective vinyl sheeting on aluminium board", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#FFFFFF", "color": "#FFFFFF", "albedo": {"dominant": "#FFFFFF", "secondary": ["#2E644C", "#CEDAD3", "#BDC6C5", "#7F8285"], "samplingNotes": "White on purpose. The albedo is delivered by the board atlas assigned after material construction."}, "colorVariation": {"palette": ["#2E644C", "#CEDAD3", "#BDC6C5", "#7F8285"], "pattern": "authored-regions", "amplitude": 0.0, "heightCorrelation": 0.0}, "roughness": {"base": 0.44, "variation": 0.06, "map": "none", "localResponse": "Calendered vinyl over aluminium: smooth, with no tight highlight anywhere on the board."}, "metalness": {"base": 0.0, "variation": 0.0, "notes": "Dielectric. The vinyl is what is seen."}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "Flat board, no cavities."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#2F2A22"}, "localOverrides": [{"id": "field-green", "color": "#347055", "region": "the board's green ground inside the border rule", "evidenceRef": "region-field", "notes": "Trimmed mean #2E644C (luma 87) over the full 8400 px of (400,300,140,60), well inside the border. SHIPPED LIFTED to #347055 (luma 97): the measured value rendered at luma 75.3 in beauty-000 against the harness backdrop's 58.0, a 17-luma margin that _holecc.mjs already read as an enclosed background component of 58,726 px, and the silhouette gate classifies background by mean luma alone. The lift buys roughly 9 luma of margin for a hue change no viewer resolves."}, {"id": "legend-white", "color": "#CEDAD3", "region": "the border rule and both legend lines", "evidenceRef": "region-legend", "notes": "Trimmed mean of the 3768 bright px (luma>170) of (430,200,240,80), across the legend. Faintly green-tinted rather than neutral, which is the green field bouncing into it."}, {"id": "top-wash", "color": "#BDC6C5", "region": "the top fifth of the board face, strongest at the edge", "evidenceRef": "region-wash", "notes": "Trimmed mean of the 2420 bright px (luma>170) of (360,150,300,40) along the board's top edge. Painted at 45% over the green at the edge, fading to nothing by a fifth of the way down."}, {"id": "edge-galv", "color": "#7F8285", "region": "the folded edge return and the whole back cap", "evidenceRef": "single-view-inference", "notes": "NOT OBSERVED - the board is seen face-on from below and its return is not visible. Assumed to share the frame's galvanised value at confidence 0.5, the lowest-confidence colour in this spec. This is what every non-front-cap vertex collapses onto in the atlas."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["Reference plate, green field at (400,300,140,60): 8400 px trimming to #2E644C with no resolvable relief.", "Reference plate, white legend at (430,200,240,80): 3768 bright px trimming to #CEDAD3.", "Reference plate, board top edge at (360,150,300,40): 2420 of 12000 bright px trimming to #BDC6C5 - a chalky wash, painted into the atlas as an alpha gradient, not a height field.", "The identity of this surface is PRINTED, not textured. It arrives as a canvas atlas assigned after material construction.", "Measured cost: five synthesised canvases at 1024 would cost roughly 1.9 s inside createObjectModel for this one material, for a surface whose height field is flat."]}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_gantry_frame_0 = makeAttachmentEndpoint(null);
  const node_gantry_frame_0 = new THREE.Group();
  node_gantry_frame_0.name = "Legs, caps, base plates, gussets, flange collars, rails, brackets and rungs__pivot";
  node_gantry_frame_0.scale.set(1, 1, 1);
  if (endpoint_gantry_frame_0) {
    node_gantry_frame_0.position.copy(endpoint_gantry_frame_0.start);
    node_gantry_frame_0.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_gantry_frame_0.position.set(0.0, 0.0, 0.0);
    node_gantry_frame_0.rotation.set(0.0, 0.0, 0.0);
  }
  node_gantry_frame_0.userData.sculptComponent = {"id": "gantry-frame", "name": "Legs, caps, base plates, gussets, flange collars, rails, brackets and rungs", "level": "macro", "role": "support", "importance": 1.0, "confidence": 0.8, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Axis-aligned prismatic solids and triangular gusset fins that never deform and never move relative to one another. Boxes are exact here rather than approximations, and merging them into one buffer costs nothing in fidelity.", "geometryDescriptor": {"topologyIntent": "Forty-six prisms merged into ONE BufferGeometry at build time, with position, normal, uv AND color carried through the merge.", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "world-planar per face: u along the face's horizontal axis, v along its vertical axis, in metres, so one seamless 1 m spangle tile wraps every member without a seam and the tones arrive as VERTEX COLOURS multiplied under it", "normalStrategy": "flat", "note": "Left unchamfered throughout. Every arris on this prop is a rolled steel edge and a box already has it; on a structure seen from tens of metres a chamfer would be invisible and would cost triangles on the only prop in this set big enough for that to matter.", "mergedAssembly": {"reason": "maxDrawCalls is 3 and this build spends two: one for the board and ONE for everything galvanised. Legs, caps, base plates, gussets, flange collars, rails, brackets and rungs are all the same hot-dip steel, none moves relative to any other, and merging them is invisible. The rungs were an InstancedMesh in the first build; merging them frees a draw call, a unique geometry and a material slot for 288 triangles.", "parts": [{"id": "leg-left", "level": "meso", "primitive": "box", "extent": {"width": 0.5, "height": 6.92, "depth": 0.5}, "localOffset": [-3.65, 3.51, 0.0], "note": "0.50 m square hollow section from its base plate at y=0.05 up to its cap plate at y=6.97, 14 height segments for the vertex-colour ramp. From the proxy's 6-of-80-column occupancy, not the plate."}, {"id": "leg-right", "level": "meso", "primitive": "box", "extent": {"width": 0.5, "height": 6.92, "depth": 0.5}, "localOffset": [3.65, 3.51, 0.0], "note": "The mirror of the left leg: a REFLECTION, the lateral axis negated and nothing else."}, {"id": "cap-left", "level": "meso", "primitive": "box", "extent": {"width": 0.56, "height": 0.03, "depth": 0.56}, "localOffset": [-3.65, 6.985, 0.0], "note": "Cap plate closing the section, 3 cm proud all round. The leg top stands 15 cm above the rail top: the plate shows the legs rising past the beam on both sides."}, {"id": "cap-right", "level": "meso", "primitive": "box", "extent": {"width": 0.56, "height": 0.03, "depth": 0.56}, "localOffset": [3.65, 6.985, 0.0], "note": "Mirror of the left cap."}, {"id": "baseplate-left", "level": "meso", "primitive": "box", "extent": {"width": 0.7, "height": 0.06, "depth": 0.6}, "localOffset": [-3.65, 0.03, 0.0], "note": "The bolted footplate. Its 0.60 m depth is what sets the declared prop depth; 0.70 wide so the outboard gussets land on it and the outer edge sits at exactly x=-4.0."}, {"id": "baseplate-right", "level": "meso", "primitive": "box", "extent": {"width": 0.7, "height": 0.06, "depth": 0.6}, "localOffset": [3.65, 0.03, 0.0], "note": "Mirror of the left base plate."}, {"id": "gussets-left", "level": "micro", "primitive": "extrude", "extent": {"width": 0.7, "height": 0.28, "depth": 0.6}, "localOffset": [-3.65, 0.2, 0.0], "note": "Four triangular stiffener fins, 2 cm thick, from each leg face down to the plate edge: 0.10 m run on the x faces and 0.05 on the z faces, 0.28 m rise. Visible in the plate at both feet and widening the proxy's bottom rows to 0.13 H."}, {"id": "gussets-right", "level": "micro", "primitive": "extrude", "extent": {"width": 0.7, "height": 0.28, "depth": 0.6}, "localOffset": [3.65, 0.2, 0.0], "note": "Mirror of the left gussets."}, {"id": "flange-left", "level": "meso", "primitive": "box", "extent": {"width": 0.6, "height": 0.07, "depth": 0.6}, "localOffset": [-3.65, 5.0, 0.0], "note": "Bolted splice collar through which the leg passes, at 0.72 of height: the plate's rust ring at 0.70 of the left leg and the proxy's widened row 0.72. 0.60 square, 5 cm proud of the leg each side - 0.62 put its front face coplanar with the board face at z=0.31."}, {"id": "flange-right", "level": "meso", "primitive": "box", "extent": {"width": 0.6, "height": 0.07, "depth": 0.6}, "localOffset": [3.65, 5.0, 0.0], "note": "Mirror of the left flange; the plate shows the ring at 0.68 of the right leg. 0.60 square, 5 cm proud of the leg each side - 0.62 put its front face coplanar with the board face at z=0.31."}, {"id": "rail-upper", "level": "meso", "primitive": "box", "extent": {"width": 6.8, "height": 0.5, "depth": 0.44}, "localOffset": [0.0, 6.6, 0.0], "note": "Upper box rail spanning BETWEEN the legs from inner face to inner face (opposed butt joints at x=+/-3.40). Its top at 6.85 shows as a 0.3 m strip above the board, as the plate and the proxy's rows 0.94-0.98 show."}, {"id": "rail-lower", "level": "meso", "primitive": "box", "extent": {"width": 6.8, "height": 0.4, "depth": 0.44}, "localOffset": [0.0, 5.45, 0.0], "note": "Lower box rail behind the board's lower third, carrying the board's bottom fixings. Hidden by the board from the front; inferred at confidence 0.6."}, {"id": "bracket-upper-left", "level": "meso", "primitive": "box", "extent": {"width": 0.16, "height": 0.66, "depth": 0.54}, "localOffset": [-3.36, 6.61, 0.0], "note": "End-plate bracket wrapping the upper rail's end at the leg, bolted to the leg's inner face and standing 5 cm proud of the rail on every side - the clip the plate shows at each leg top."}, {"id": "bracket-upper-right", "level": "meso", "primitive": "box", "extent": {"width": 0.16, "height": 0.66, "depth": 0.54}, "localOffset": [3.36, 6.61, 0.0], "note": "Mirror."}, {"id": "bracket-lower-left", "level": "meso", "primitive": "box", "extent": {"width": 0.16, "height": 0.54, "depth": 0.54}, "localOffset": [-3.36, 5.45, 0.0], "note": "End-plate bracket at the lower rail's left end, the rusted clip the plate shows at the board's lower-left corner."}, {"id": "bracket-lower-right", "level": "meso", "primitive": "box", "extent": {"width": 0.16, "height": 0.54, "depth": 0.54}, "localOffset": [3.36, 5.45, 0.0], "note": "Mirror."}, {"id": "rungs-left", "level": "micro", "primitive": "box", "extent": {"width": 0.2, "height": 3.15, "depth": 0.32}, "localOffset": [-4.0, 2.075, 0.0], "note": "Eight staple rungs on the left leg's OUTER (-x) face from y=0.5 to 3.65 at 0.45 pitch: two 3.5 cm stubs out 0.20 m and a 0.32 m crossbar. 24 boxes, 288 triangles, merged."}], "jointNote": "Each leg's bottom face at y=0.05 meets its base plate's top face, and its top face at 6.97 meets its cap's underside: OPPOSED butt joints. The rails end at x=+/-3.40 against the legs' inner faces, again opposed, and the brackets overlap both rail end and leg face so no rail end face is exposed. The flange collars are solid boxes the legs pass through; the gussets' inner faces sit against the leg faces facing outward. In DEPTH the legs and rails are centred on z=0 (rails -0.22..0.22, legs -0.25..0.25); the board's back at z=0.25 faces -z 3 cm clear of the rail fronts at 0.22, and its front at 0.31 is 6 cm proud of the leg fronts. The base plates span z -0.30..0.30 and set the declared 0.60 m. Nothing is flush with anything facing the same way."}}, "parent": null, "attachment": null, "dimensions": {"width": 8.0, "height": 7.0, "depth": 0.6, "units": "m", "confidence": 0.8}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center, midway between the two legs. This is the ONLY named pivot in the prop, and it is the correct count: a welded and bolted gantry has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 3.5, 0], "scale": [4.0, 3.5, 0.3], "isTrigger": false, "notes": "Declared collider for this asset is `box`, and it is worth naming what that costs here: the gantry is mostly EMPTY - traffic drives under it - and a single box spanning both legs and the full height fills the carriageway. The declared shape is honoured as the contract requires; a compound proxy of two leg boxes would describe this prop far better and is not what the asset declares."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}}, "material": "galvanised", "materialLayers": ["galvanised"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "galv-spangle", "description": "Mottled grey hot-dip spangle over the whole frame, a seeded seamless 1 m canvas tile under the vertex ramp.", "representation": "texture-region"}, {"id": "flange-rust", "description": "Rust ring at the flange splice on both legs with a short streak below it, vertex colour on the collar and the leg segments beneath.", "representation": "texture-region"}, {"id": "bracket-rust", "description": "Rust at the rail end-plate brackets, the cap plates and the base bolts, thin and local rather than a splash line.", "representation": "texture-region"}, {"id": "climbing-rungs", "description": "Eight staple rungs on the outer face of the left leg only.", "representation": "geometry"}, {"id": "base-gussets", "description": "Four gusset fins per base plate.", "representation": "geometry"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#7F8285", "stops": [{"position": 0.0, "color": "rgba(148,147,146,1.0)", "note": "cap plates and upper legs, cleanest coating, measured #949392 over 1680 px on the right cap and #92979A over 10181 neutral px on the right leg's lit face"}, {"position": 0.29, "color": "rgba(110,105,99,1.0)", "note": "flange collar at 5.0 m, #6E6963 over 1980 px, with #7B6757 rust over 313 of them on its underside and a streak below"}, {"position": 0.55, "color": "rgba(127,130,133,1.0)", "note": "leg field value, averaged between the lit #92979A and the shaded #6C6E70"}, {"position": 0.96, "color": "rgba(101,100,96,1.0)", "note": "gussets and leg foot, #656460 over 4800 px"}, {"position": 1.0, "color": "rgba(91,92,91,1.0)", "note": "base plates, #5B5C5B over 2935 neutral px, with #7E6A57 rust over 70 px at the bolts"}], "finishStyle": "satin", "notes": "An ordered vertical ramp measured DOWNWARD from the cap plates, with per-part overrides for the collars, brackets, rungs and plates baked BEFORE the merge and carried through it as vertex colour. Rust is local to the bolted connections - flange, brackets, caps, feet - and thin everywhere, as the orange-filter counts say.", "dominantAlbedo": "rgba(127,130,133,1.0)", "secondaryAlbedo": "rgba(123,103,87,1.0)", "materialClass": "metal", "materialClassConfidence": 0.85}};
  node_gantry_frame_0.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center, midway between the two legs. This is the ONLY named pivot in the prop, and it is the correct count: a welded and bolted gantry has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 3.5, 0], "scale": [4.0, 3.5, 0.3], "isTrigger": false, "notes": "Declared collider for this asset is `box`, and it is worth naming what that costs here: the gantry is mostly EMPTY - traffic drives under it - and a single box spanning both legs and the full height fills the carriageway. The declared shape is honoured as the contract requires; a compound proxy of two leg boxes would describe this prop far better and is not what the asset declares."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}};
  (nodes["root"] ?? root).add(node_gantry_frame_0);
  nodes["gantry-frame"] = node_gantry_frame_0;
  const mesh_gantry_frame_0Geometry = endpoint_gantry_frame_0
    ? new THREE.CylinderGeometry(endpoint_gantry_frame_0.endRadius, endpoint_gantry_frame_0.baseRadius, endpoint_gantry_frame_0.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_gantry_frame_0) {
    mesh_gantry_frame_0Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_gantry_frame_0 = new THREE.Mesh(
    mesh_gantry_frame_0Geometry,
    materialMap["galvanised"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_gantry_frame_0.name = "Legs, caps, base plates, gussets, flange collars, rails, brackets and rungs";
  if (endpoint_gantry_frame_0) {
    mesh_gantry_frame_0.position.copy(endpoint_gantry_frame_0.midpoint);
    mesh_gantry_frame_0.quaternion.copy(endpoint_gantry_frame_0.quaternion);
  }
  mesh_gantry_frame_0.castShadow = options.castShadow ?? true;
  mesh_gantry_frame_0.receiveShadow = options.receiveShadow ?? true;
  mesh_gantry_frame_0.userData.sculptComponent = {"id": "gantry-frame", "name": "Legs, caps, base plates, gussets, flange collars, rails, brackets and rungs", "level": "macro", "role": "support", "importance": 1.0, "confidence": 0.8, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Axis-aligned prismatic solids and triangular gusset fins that never deform and never move relative to one another. Boxes are exact here rather than approximations, and merging them into one buffer costs nothing in fidelity.", "geometryDescriptor": {"topologyIntent": "Forty-six prisms merged into ONE BufferGeometry at build time, with position, normal, uv AND color carried through the merge.", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "world-planar per face: u along the face's horizontal axis, v along its vertical axis, in metres, so one seamless 1 m spangle tile wraps every member without a seam and the tones arrive as VERTEX COLOURS multiplied under it", "normalStrategy": "flat", "note": "Left unchamfered throughout. Every arris on this prop is a rolled steel edge and a box already has it; on a structure seen from tens of metres a chamfer would be invisible and would cost triangles on the only prop in this set big enough for that to matter.", "mergedAssembly": {"reason": "maxDrawCalls is 3 and this build spends two: one for the board and ONE for everything galvanised. Legs, caps, base plates, gussets, flange collars, rails, brackets and rungs are all the same hot-dip steel, none moves relative to any other, and merging them is invisible. The rungs were an InstancedMesh in the first build; merging them frees a draw call, a unique geometry and a material slot for 288 triangles.", "parts": [{"id": "leg-left", "level": "meso", "primitive": "box", "extent": {"width": 0.5, "height": 6.92, "depth": 0.5}, "localOffset": [-3.65, 3.51, 0.0], "note": "0.50 m square hollow section from its base plate at y=0.05 up to its cap plate at y=6.97, 14 height segments for the vertex-colour ramp. From the proxy's 6-of-80-column occupancy, not the plate."}, {"id": "leg-right", "level": "meso", "primitive": "box", "extent": {"width": 0.5, "height": 6.92, "depth": 0.5}, "localOffset": [3.65, 3.51, 0.0], "note": "The mirror of the left leg: a REFLECTION, the lateral axis negated and nothing else."}, {"id": "cap-left", "level": "meso", "primitive": "box", "extent": {"width": 0.56, "height": 0.03, "depth": 0.56}, "localOffset": [-3.65, 6.985, 0.0], "note": "Cap plate closing the section, 3 cm proud all round. The leg top stands 15 cm above the rail top: the plate shows the legs rising past the beam on both sides."}, {"id": "cap-right", "level": "meso", "primitive": "box", "extent": {"width": 0.56, "height": 0.03, "depth": 0.56}, "localOffset": [3.65, 6.985, 0.0], "note": "Mirror of the left cap."}, {"id": "baseplate-left", "level": "meso", "primitive": "box", "extent": {"width": 0.7, "height": 0.06, "depth": 0.6}, "localOffset": [-3.65, 0.03, 0.0], "note": "The bolted footplate. Its 0.60 m depth is what sets the declared prop depth; 0.70 wide so the outboard gussets land on it and the outer edge sits at exactly x=-4.0."}, {"id": "baseplate-right", "level": "meso", "primitive": "box", "extent": {"width": 0.7, "height": 0.06, "depth": 0.6}, "localOffset": [3.65, 0.03, 0.0], "note": "Mirror of the left base plate."}, {"id": "gussets-left", "level": "micro", "primitive": "extrude", "extent": {"width": 0.7, "height": 0.28, "depth": 0.6}, "localOffset": [-3.65, 0.2, 0.0], "note": "Four triangular stiffener fins, 2 cm thick, from each leg face down to the plate edge: 0.10 m run on the x faces and 0.05 on the z faces, 0.28 m rise. Visible in the plate at both feet and widening the proxy's bottom rows to 0.13 H."}, {"id": "gussets-right", "level": "micro", "primitive": "extrude", "extent": {"width": 0.7, "height": 0.28, "depth": 0.6}, "localOffset": [3.65, 0.2, 0.0], "note": "Mirror of the left gussets."}, {"id": "flange-left", "level": "meso", "primitive": "box", "extent": {"width": 0.6, "height": 0.07, "depth": 0.6}, "localOffset": [-3.65, 5.0, 0.0], "note": "Bolted splice collar through which the leg passes, at 0.72 of height: the plate's rust ring at 0.70 of the left leg and the proxy's widened row 0.72. 0.60 square, 5 cm proud of the leg each side - 0.62 put its front face coplanar with the board face at z=0.31."}, {"id": "flange-right", "level": "meso", "primitive": "box", "extent": {"width": 0.6, "height": 0.07, "depth": 0.6}, "localOffset": [3.65, 5.0, 0.0], "note": "Mirror of the left flange; the plate shows the ring at 0.68 of the right leg. 0.60 square, 5 cm proud of the leg each side - 0.62 put its front face coplanar with the board face at z=0.31."}, {"id": "rail-upper", "level": "meso", "primitive": "box", "extent": {"width": 6.8, "height": 0.5, "depth": 0.44}, "localOffset": [0.0, 6.6, 0.0], "note": "Upper box rail spanning BETWEEN the legs from inner face to inner face (opposed butt joints at x=+/-3.40). Its top at 6.85 shows as a 0.3 m strip above the board, as the plate and the proxy's rows 0.94-0.98 show."}, {"id": "rail-lower", "level": "meso", "primitive": "box", "extent": {"width": 6.8, "height": 0.4, "depth": 0.44}, "localOffset": [0.0, 5.45, 0.0], "note": "Lower box rail behind the board's lower third, carrying the board's bottom fixings. Hidden by the board from the front; inferred at confidence 0.6."}, {"id": "bracket-upper-left", "level": "meso", "primitive": "box", "extent": {"width": 0.16, "height": 0.66, "depth": 0.54}, "localOffset": [-3.36, 6.61, 0.0], "note": "End-plate bracket wrapping the upper rail's end at the leg, bolted to the leg's inner face and standing 5 cm proud of the rail on every side - the clip the plate shows at each leg top."}, {"id": "bracket-upper-right", "level": "meso", "primitive": "box", "extent": {"width": 0.16, "height": 0.66, "depth": 0.54}, "localOffset": [3.36, 6.61, 0.0], "note": "Mirror."}, {"id": "bracket-lower-left", "level": "meso", "primitive": "box", "extent": {"width": 0.16, "height": 0.54, "depth": 0.54}, "localOffset": [-3.36, 5.45, 0.0], "note": "End-plate bracket at the lower rail's left end, the rusted clip the plate shows at the board's lower-left corner."}, {"id": "bracket-lower-right", "level": "meso", "primitive": "box", "extent": {"width": 0.16, "height": 0.54, "depth": 0.54}, "localOffset": [3.36, 5.45, 0.0], "note": "Mirror."}, {"id": "rungs-left", "level": "micro", "primitive": "box", "extent": {"width": 0.2, "height": 3.15, "depth": 0.32}, "localOffset": [-4.0, 2.075, 0.0], "note": "Eight staple rungs on the left leg's OUTER (-x) face from y=0.5 to 3.65 at 0.45 pitch: two 3.5 cm stubs out 0.20 m and a 0.32 m crossbar. 24 boxes, 288 triangles, merged."}], "jointNote": "Each leg's bottom face at y=0.05 meets its base plate's top face, and its top face at 6.97 meets its cap's underside: OPPOSED butt joints. The rails end at x=+/-3.40 against the legs' inner faces, again opposed, and the brackets overlap both rail end and leg face so no rail end face is exposed. The flange collars are solid boxes the legs pass through; the gussets' inner faces sit against the leg faces facing outward. In DEPTH the legs and rails are centred on z=0 (rails -0.22..0.22, legs -0.25..0.25); the board's back at z=0.25 faces -z 3 cm clear of the rail fronts at 0.22, and its front at 0.31 is 6 cm proud of the leg fronts. The base plates span z -0.30..0.30 and set the declared 0.60 m. Nothing is flush with anything facing the same way."}}, "parent": null, "attachment": null, "dimensions": {"width": 8.0, "height": 7.0, "depth": 0.6, "units": "m", "confidence": 0.8}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "The root pivot, at base-center, midway between the two legs. This is the ONLY named pivot in the prop, and it is the correct count: a welded and bolted gantry has no moving parts."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 3.5, 0], "scale": [4.0, 3.5, 0.3], "isTrigger": false, "notes": "Declared collider for this asset is `box`, and it is worth naming what that costs here: the gantry is mostly EMPTY - traffic drives under it - and a single box spanning both legs and the full height fills the carriageway. The declared shape is honoured as the contract requires; a compound proxy of two leg boxes would describe this prop far better and is not what the asset declares."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}}, "material": "galvanised", "materialLayers": ["galvanised"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "galv-spangle", "description": "Mottled grey hot-dip spangle over the whole frame, a seeded seamless 1 m canvas tile under the vertex ramp.", "representation": "texture-region"}, {"id": "flange-rust", "description": "Rust ring at the flange splice on both legs with a short streak below it, vertex colour on the collar and the leg segments beneath.", "representation": "texture-region"}, {"id": "bracket-rust", "description": "Rust at the rail end-plate brackets, the cap plates and the base bolts, thin and local rather than a splash line.", "representation": "texture-region"}, {"id": "climbing-rungs", "description": "Eight staple rungs on the outer face of the left leg only.", "representation": "geometry"}, {"id": "base-gussets", "description": "Four gusset fins per base plate.", "representation": "geometry"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#7F8285", "stops": [{"position": 0.0, "color": "rgba(148,147,146,1.0)", "note": "cap plates and upper legs, cleanest coating, measured #949392 over 1680 px on the right cap and #92979A over 10181 neutral px on the right leg's lit face"}, {"position": 0.29, "color": "rgba(110,105,99,1.0)", "note": "flange collar at 5.0 m, #6E6963 over 1980 px, with #7B6757 rust over 313 of them on its underside and a streak below"}, {"position": 0.55, "color": "rgba(127,130,133,1.0)", "note": "leg field value, averaged between the lit #92979A and the shaded #6C6E70"}, {"position": 0.96, "color": "rgba(101,100,96,1.0)", "note": "gussets and leg foot, #656460 over 4800 px"}, {"position": 1.0, "color": "rgba(91,92,91,1.0)", "note": "base plates, #5B5C5B over 2935 neutral px, with #7E6A57 rust over 70 px at the bolts"}], "finishStyle": "satin", "notes": "An ordered vertical ramp measured DOWNWARD from the cap plates, with per-part overrides for the collars, brackets, rungs and plates baked BEFORE the merge and carried through it as vertex colour. Rust is local to the bolted connections - flange, brackets, caps, feet - and thin everywhere, as the orange-filter counts say.", "dominantAlbedo": "rgba(127,130,133,1.0)", "secondaryAlbedo": "rgba(123,103,87,1.0)", "materialClass": "metal", "materialClassConfidence": 0.85}};
  node_gantry_frame_0.add(mesh_gantry_frame_0);
  meshes["gantry-frame"] = mesh_gantry_frame_0;
  colliders["gantry-frame"] = {"type": "box", "offset": [0, 3.5, 0], "scale": [4.0, 3.5, 0.3], "isTrigger": false, "notes": "Declared collider for this asset is `box`, and it is worth naming what that costs here: the gantry is mostly EMPTY - traffic drives under it - and a single box spanning both legs and the full height fills the carriageway. The declared shape is honoured as the contract requires; a compound proxy of two leg boxes would describe this prop far better and is not what the asset declares."};

  const endpoint_sign_board_1 = makeAttachmentEndpoint(null);
  const node_sign_board_1 = new THREE.Group();
  node_sign_board_1.name = "Overhead direction board__pivot";
  node_sign_board_1.scale.set(1, 1, 1);
  if (endpoint_sign_board_1) {
    node_sign_board_1.position.copy(endpoint_sign_board_1.start);
    node_sign_board_1.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_sign_board_1.position.set(0.0, 5.8, 0.28);
    node_sign_board_1.rotation.set(0.0, 0.0, 0.0);
  }
  node_sign_board_1.userData.sculptComponent = {"id": "sign-board", "name": "Overhead direction board", "level": "macro", "role": "panel", "importance": 1.0, "confidence": 0.8, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "A flat rounded-corner board with a folded edge return: two parallel planar caps joined by a short wall, closed and rigid.", "geometryDescriptor": {"topologyIntent": "ExtrudeGeometry over a rounded-rectangle profile, 6.0 x 1.5, corner radius 0.12, depth 0.06.", "profile2D": {"kind": "rounded-rect", "halfWidth": 3.0, "halfHeight": 0.75, "cornerRadius": 0.12, "cornerSegments": 4, "depth": 0.06, "points": [[2.88, -0.75], [2.92592, -0.74087], [2.96485, -0.71485], [2.99087, -0.67592], [3.0, -0.63], [3.0, 0.63], [2.99087, 0.67592], [2.96485, 0.71485], [2.92592, 0.74087], [2.88, 0.75], [-2.88, 0.75], [-2.92592, 0.74087], [-2.96485, 0.71485], [-2.99087, 0.67592], [-3.0, 0.63], [-3.0, -0.63], [-2.99087, -0.67592], [-2.96485, -0.71485], [-2.92592, -0.74087], [-2.88, -0.75]], "note": "The explicit polygon the layer builds: four 4-segment corner arcs joined by four straight runs, bevelEnabled false."}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - a 4:1 atlas (2 x textureSize by textureSize / 2). The front cap takes the green face with its white border rule, legend and top-edge wash at one isotropic scale; every wall and back-cap vertex collapses to a bare-galvanised strip along the atlas's bottom edge.", "normalStrategy": "flat-shaded caps, flat wall", "segmentRationale": "Four segments per corner on a 120 mm radius. At gantry height the corner radius is barely resolvable, and four segments is already generous."}, "parent": null, "attachment": null, "dimensions": {"width": 6.0, "height": 1.5, "depth": 0.06, "units": "m", "confidence": 0.7}, "transform": {"position": [0, 5.8, 0.28], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. The board hangs rigidly off the beam brackets; the prop's single named pivot is the root."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [3.0, 0.75, 0.03], "isTrigger": false, "notes": "Declared collider for this asset is `box`, and on the board the proxy is EXACT: a rectangular plate is a box."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "sheeting"}}, "material": "sheeting", "materialLayers": ["sheeting"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "border-rule", "description": "White inset rule following the board's rounded outline.", "representation": "texture-region"}, {"id": "legend-lines", "description": "Two white legend lines, a large Thai destination over its Latin transliteration, set left of centre.", "representation": "texture-region"}, {"id": "distance-legend", "description": "A distance in kilometres set at the right end of the board, level with the Thai line.", "representation": "texture-region"}, {"id": "top-wash", "description": "Chalky weathering wash along the top edge of the face, fading within the top fifth.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#347055", "stops": [{"position": 0.0, "color": "rgba(127,130,133,1.0)", "note": "folded edge return, sharing the frame's galvanised value"}, {"position": 0.03, "color": "rgba(206,218,211,1.0)", "note": "white border rule, measured #CEDAD3 over 3768 bright px"}, {"position": 0.06, "color": "rgba(52,112,85,1.0)", "note": "green field begins, measured #2E644C over 8400 px (lifted from measured #2E644C for the hole gate, see the material override)"}, {"position": 0.2, "color": "rgba(189,198,197,0.45)", "note": "chalky top-edge wash, #BDC6C5 over 2420 of 12000 bright px at (360,150,300,40), fading into the green within the top fifth"}, {"position": 1.0, "color": "rgba(52,112,85,1.0)", "note": "green field across the board; the legend sits on top of it as solid fill (lifted from measured #2E644C for the hole gate, see the material override)"}], "finishStyle": "satin", "notes": "An ordered ramp measured INWARD from the board edge, with hard printed boundaries. The green is a DEEP forest, measured over a crop well inside the border - an earlier crop at (420,220,120,60) returned the much greyer #42725D and was discarded as overlapping the white border and legend.", "dominantAlbedo": "rgba(46,100,76,1.0)", "secondaryAlbedo": "rgba(206,218,211,1.0)", "materialClass": "plastic", "materialClassConfidence": 0.85}};
  node_sign_board_1.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. The board hangs rigidly off the beam brackets; the prop's single named pivot is the root."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [3.0, 0.75, 0.03], "isTrigger": false, "notes": "Declared collider for this asset is `box`, and on the board the proxy is EXACT: a rectangular plate is a box."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "sheeting"}};
  (nodes["root"] ?? root).add(node_sign_board_1);
  nodes["sign-board"] = node_sign_board_1;
  const mesh_sign_board_1Geometry = endpoint_sign_board_1
    ? new THREE.CylinderGeometry(endpoint_sign_board_1.endRadius, endpoint_sign_board_1.baseRadius, endpoint_sign_board_1.length, 16, 6)
    : buildExtrudeGeometry({"kind": "rounded-rect", "halfWidth": 3.0, "halfHeight": 0.75, "cornerRadius": 0.12, "cornerSegments": 4, "depth": 0.06, "points": [[2.88, -0.75], [2.92592, -0.74087], [2.96485, -0.71485], [2.99087, -0.67592], [3.0, -0.63], [3.0, 0.63], [2.99087, 0.67592], [2.96485, 0.71485], [2.92592, 0.74087], [2.88, 0.75], [-2.88, 0.75], [-2.92592, 0.74087], [-2.96485, 0.71485], [-2.99087, 0.67592], [-3.0, 0.63], [-3.0, -0.63], [-2.99087, -0.67592], [-2.96485, -0.71485], [-2.92592, -0.74087], [-2.88, -0.75]], "note": "The explicit polygon the layer builds: four 4-segment corner arcs joined by four straight runs, bevelEnabled false."});
  if (!endpoint_sign_board_1) {
    mesh_sign_board_1Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_sign_board_1 = new THREE.Mesh(
    mesh_sign_board_1Geometry,
    materialMap["sheeting"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_sign_board_1.name = "Overhead direction board";
  if (endpoint_sign_board_1) {
    mesh_sign_board_1.position.copy(endpoint_sign_board_1.midpoint);
    mesh_sign_board_1.quaternion.copy(endpoint_sign_board_1.quaternion);
  }
  mesh_sign_board_1.castShadow = options.castShadow ?? true;
  mesh_sign_board_1.receiveShadow = options.receiveShadow ?? true;
  mesh_sign_board_1.userData.sculptComponent = {"id": "sign-board", "name": "Overhead direction board", "level": "macro", "role": "panel", "importance": 1.0, "confidence": 0.8, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "A flat rounded-corner board with a folded edge return: two parallel planar caps joined by a short wall, closed and rigid.", "geometryDescriptor": {"topologyIntent": "ExtrudeGeometry over a rounded-rectangle profile, 6.0 x 1.5, corner radius 0.12, depth 0.06.", "profile2D": {"kind": "rounded-rect", "halfWidth": 3.0, "halfHeight": 0.75, "cornerRadius": 0.12, "cornerSegments": 4, "depth": 0.06, "points": [[2.88, -0.75], [2.92592, -0.74087], [2.96485, -0.71485], [2.99087, -0.67592], [3.0, -0.63], [3.0, 0.63], [2.99087, 0.67592], [2.96485, 0.71485], [2.92592, 0.74087], [2.88, 0.75], [-2.88, 0.75], [-2.92592, 0.74087], [-2.96485, 0.71485], [-2.99087, 0.67592], [-3.0, 0.63], [-3.0, -0.63], [-2.99087, -0.67592], [-2.96485, -0.71485], [-2.92592, -0.74087], [-2.88, -0.75]], "note": "The explicit polygon the layer builds: four 4-segment corner arcs joined by four straight runs, bevelEnabled false."}, "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "authored - a 4:1 atlas (2 x textureSize by textureSize / 2). The front cap takes the green face with its white border rule, legend and top-edge wash at one isotropic scale; every wall and back-cap vertex collapses to a bare-galvanised strip along the atlas's bottom edge.", "normalStrategy": "flat-shaded caps, flat wall", "segmentRationale": "Four segments per corner on a 120 mm radius. At gantry height the corner radius is barely resolvable, and four segments is already generous."}, "parent": null, "attachment": null, "dimensions": {"width": 6.0, "height": 1.5, "depth": 0.06, "units": "m", "confidence": 0.7}, "transform": {"position": [0, 5.8, 0.28], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 0.9, "notes": "Not an articulation. The board hangs rigidly off the beam brackets; the prop's single named pivot is the root."}, "transformChannels": {"translate": true, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "box", "offset": [0, 0, 0], "scale": [3.0, 0.75, 0.03], "isTrigger": false, "notes": "Declared collider for this asset is `box`, and on the board the proxy is EXACT: a rectangular plate is a box."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "sheeting"}}, "material": "sheeting", "materialLayers": ["sheeting"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "border-rule", "description": "White inset rule following the board's rounded outline.", "representation": "texture-region"}, {"id": "legend-lines", "description": "Two white legend lines, a large Thai destination over its Latin transliteration, set left of centre.", "representation": "texture-region"}, {"id": "distance-legend", "description": "A distance in kilometres set at the right end of the board, level with the Thai line.", "representation": "texture-region"}, {"id": "top-wash", "description": "Chalky weathering wash along the top edge of the face, fading within the top fifth.", "representation": "texture-region"}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"base": "#347055", "stops": [{"position": 0.0, "color": "rgba(127,130,133,1.0)", "note": "folded edge return, sharing the frame's galvanised value"}, {"position": 0.03, "color": "rgba(206,218,211,1.0)", "note": "white border rule, measured #CEDAD3 over 3768 bright px"}, {"position": 0.06, "color": "rgba(52,112,85,1.0)", "note": "green field begins, measured #2E644C over 8400 px (lifted from measured #2E644C for the hole gate, see the material override)"}, {"position": 0.2, "color": "rgba(189,198,197,0.45)", "note": "chalky top-edge wash, #BDC6C5 over 2420 of 12000 bright px at (360,150,300,40), fading into the green within the top fifth"}, {"position": 1.0, "color": "rgba(52,112,85,1.0)", "note": "green field across the board; the legend sits on top of it as solid fill (lifted from measured #2E644C for the hole gate, see the material override)"}], "finishStyle": "satin", "notes": "An ordered ramp measured INWARD from the board edge, with hard printed boundaries. The green is a DEEP forest, measured over a crop well inside the border - an earlier crop at (420,220,120,60) returned the much greyer #42725D and was discarded as overlapping the white border and legend.", "dominantAlbedo": "rgba(46,100,76,1.0)", "secondaryAlbedo": "rgba(206,218,211,1.0)", "materialClass": "plastic", "materialClassConfidence": 0.85}};
  node_sign_board_1.add(mesh_sign_board_1);
  meshes["sign-board"] = mesh_sign_board_1;
  colliders["sign-board"] = {"type": "box", "offset": [0, 0, 0], "scale": [3.0, 0.75, 0.03], "isTrigger": false, "notes": "Declared collider for this asset is `box`, and on the board the proxy is EXACT: a rectangular plate is a box."};
  // repetition system "climbing-rungs" describes 1 parts that are already built individually; not instanced.

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createExpresswayGantrySignLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "Expressway Gantry Sign look-dev lights";
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
  lights.userData.lightingFromPhoto = [{"role": "key", "type": "area", "directionHint": [0.52, 0.55, 0.65], "intensity": 1.0, "colorTemperatureK": 5600, "evidence": "The right leg's outboard face trims to #92979A at luma 150 against its inboard face at #6C6E70 at 110, and the left leg's visible face reads #5D6063 at 96 - a key high and camera-RIGHT, the same hand as the kilometre stone and the flood marker."}, {"role": "fill", "type": "hemisphere", "directionHint": [-0.55, 0.2, -0.35], "intensity": 0.32, "colorTemperatureK": 6500, "evidence": "The left leg, fully turned from the key, holds luma 96 rather than falling away, so there is real fill - but the 40-luma spread between the right leg's two faces is large, so the galvanised field value had to be averaged between them."}, {"role": "rim", "type": "directional", "directionHint": [-0.6, 0.35, -0.7], "intensity": 0.2, "colorTemperatureK": 6500, "evidence": "A bright edge runs along the beam's top rail separating it from the backdrop."}, {"role": "environment", "type": "studio-context", "environment": "studio softbox on a flat neutral backdrop", "exposure": 1.0, "toneMapping": "ACESFilmic", "evidence": "Border-ring scan trimming to #838383. MEASURED rather than assumed - and this backdrop is EXACTLY the value a beam crop returned, so that crop was discarded as contamination rather than used as the beam's colour.", "note": "The render harness backs onto a darker ground, so a candidate render reads darker overall and that difference is the backdrop, not the prop."}, {"role": "contact-shadow", "type": "ground-shadow", "intensity": 0.55, "evidence": "The reference shows soft shadows pooling under both base plates and nothing under the span, which is what a portal does: it touches the ground in two places only.", "behavior": "Grounded at y=0 under the two base plates rather than under the prop's footprint, so a placed instance darkens where it actually touches and leaves the carriageway between them clean. Ambient occlusion is left at zero on both materials: convex prismatic members have no cavity for AO to find, and baking any into base colour is what the material pass forbids."}];
  lights.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  return lights;
}


// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameExpresswayGantrySignCamera(
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


export function configureExpresswayGantrySignRenderer(renderer: THREE.WebGLRenderer): void {
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

/** Measured off assets/expressway-gantry-sign/preview.jpg. See the spec's localOverrides for crops. */
const PALETTE = {
  galv: '#7F8285',      // averaged: #92979A lit (10181 px) and #6C6E70 shaded (12000 px)
  galvClean: '#92979A', // the right leg's lit face
  cap: '#949392',       // right leg cap, 1680 px of (745,48,60,28)
  capRust: '#826D5B',   // 190 rusty px of the same crop
  plate: '#5B5C5B',     // 2935 neutral px of (670,700,120,30)
  gusset: '#656460',    // 4800 px of (215,900,120,40), <10 rusty
  footRust: '#7E6A57',  // 70 orange-biased px at the leg foot
  flange: '#6E6963',    // 1980 px of (215,412,90,22)
  flangeRust: '#7B6757',// 313 rusty px of the same crop
  legStreak: '#7A6E5A', // 60 rusty px of (225,440,70,60), below the flange
  bracket: '#676562',   // 3200 px of (300,330,40,80)
  bracketRust: '#806E5C', // 316 rusty px of the same crop
  rung: '#5A5B5A',      // 1293 of 1350 neutral px of (215,480,45,30)
  // Measured #2E644C (luma 87) over 8400 px of (400,300,140,60), well inside the border. Shipped
  // LIFTED to #347055: the measured value rendered at luma 75 in beauty-000 against the harness
  // backdrop's 58, and _holecc.mjs already grouped the whole 618x113 px face with the background.
  field: '#347055',
  legend: '#CEDAD3',    // 3768 bright px of (430,200,240,80)
  wash: '#BDC6C5',      // 2420 of 12000 bright px of (360,150,300,40), the board's top edge
} as const;

/**
 * Geometry, in metres, from the spec. Origin base-center: y=0 is the base plates' underside,
 * z=0 the leg section centre, +z the lettered face. Member proportions come from the Meshy
 * proxy's surface-sampled occupancy map (legs 0.074 H, board rows 0.73-0.93 H across 0.75 W,
 * flange row 0.72 H, rungs rows 0.06-0.52 H at the outer columns), the envelope from the
 * declared 8.0 x 7.0 x 0.60.
 */
const DIM = {
  span: 8.0, height: 7.0,
  legX: 3.65, legW: 0.50, legY0: 0.05, legTop: 6.97, legSeg: 14,
  capW: 0.56, capH: 0.03,
  plateW: 0.70, plateH: 0.06, plateD: 0.60,
  gussetRise: 0.28, gussetT: 0.02,
  flangeY: 5.0, flangeW: 0.60, flangeH: 0.07,
  railZ: 0.44, railUpperY0: 6.35, railUpperY1: 6.85, railLowerY0: 5.25, railLowerY1: 5.65,
  bracketW: 0.16, bracketPad: 0.05,
  boardW: 6.0, boardH: 1.5, boardT: 0.06, boardR: 0.12, boardCY: 5.80, boardCZ: 0.28,
  rungCount: 8, rungY0: 0.5, rungPitch: 0.45, rungOut: 0.20, rungBar: 0.32, rungD: 0.035,
} as const;

/** Merge that carries COLOR as well as position/normal/uv - the shared concat drops it. */
function concatWithColor(parts: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const out = new THREE.BufferGeometry();
  for (const name of ['position', 'normal', 'uv', 'color']) {
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

/** Flat vertex colour with the position-keyed blotch, for parts that are one tone. */
function bakeFlat(geo: THREE.BufferGeometry, hex: string, blotch = 0.05): void {
  bakeRamp(geo, [[-1, hex], [100, hex]], blotch);
}

/**
 * World-planar UVs in metres, per face by its normal, so one seamless 1 m spangle tile wraps
 * every member of the frame without a visible seam or stretch. Must run AFTER translation.
 */
function planarUV(geo: THREE.BufferGeometry, scale = 1.0): void {
  const pos = geo.getAttribute('position') as THREE.BufferAttribute;
  const nrm = geo.getAttribute('normal') as THREE.BufferAttribute;
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i += 1) {
    const nx = Math.abs(nrm.getX(i)), ny = Math.abs(nrm.getY(i)), nz = Math.abs(nrm.getZ(i));
    let u: number, v: number;
    if (nx >= ny && nx >= nz) { u = pos.getZ(i); v = pos.getY(i); }
    else if (nz >= ny) { u = pos.getX(i); v = pos.getY(i); }
    else { u = pos.getX(i); v = pos.getZ(i); }
    uv[i * 2] = u / scale; uv[i * 2 + 1] = v / scale;
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}

/** A triangular gusset fin: right triangle in the (run, rise) plane, extruded `t` thick. */
function gussetAt(run: number, rise: number, t: number, x: number, y: number, z: number,
                  dir: 'px' | 'nx' | 'pz' | 'nz'): THREE.BufferGeometry {
  const s = new THREE.Shape();
  s.moveTo(0, 0); s.lineTo(run, 0); s.lineTo(0, rise); s.lineTo(0, 0);
  const g = toNonIndexed(new THREE.ExtrudeGeometry(s, { depth: t, bevelEnabled: false }));
  g.translate(0, 0, -t / 2);
  // The shape's +x is the fin's outward run. Rotate it about +Y onto the requested leg face.
  const yaw = { px: 0, nz: Math.PI / 2, nx: Math.PI, pz: -Math.PI / 2 }[dir];
  g.rotateY(yaw);
  g.translate(x, y, z);
  return g;
}

let spangleCache: THREE.CanvasTexture | null | undefined;

/**
 * Seeded, seamless 1 m hot-dip spangle tile. Near-white so it MULTIPLIES under the vertex
 * ramp rather than replacing it: crystalline blotches at 0.90-1.0 and a few faint vertical
 * run-off streaks. Every blob is drawn at its four wrap offsets so the tile has no seam.
 */
function spangleTile(size: number): THREE.CanvasTexture | null {
  if (spangleCache !== undefined) return spangleCache;
  if (typeof document === 'undefined') { spangleCache = null; return null; }
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) { spangleCache = null; return null; }
  ctx.fillStyle = '#F2F2F2';
  ctx.fillRect(0, 0, size, size);
  const wrapped = (draw: (dx: number, dy: number) => void) => {
    for (const dx of [-size, 0, size]) for (const dy of [-size, 0, size]) draw(dx, dy);
  };
  for (let i = 0; i < 160; i += 1) {
    const x = noise1(i * 3 + 1) * size, y = noise1(i * 3 + 2) * size;
    const r = (0.012 + 0.045 * noise1(i * 3 + 3)) * size;
    const l = Math.round(230 + 24 * noise1(i * 7 + 5));
    ctx.fillStyle = `rgb(${l},${l},${l + 2})`;
    wrapped((dx, dy) => {
      ctx.beginPath();
      ctx.ellipse(x + dx, y + dy, r, r * (0.6 + 0.6 * noise1(i * 11 + 9)), noise1(i * 13 + 4) * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    });
  }
  for (let i = 0; i < 7; i += 1) {
    const x = noise1(i * 5 + 101) * size;
    const w = (0.004 + 0.008 * noise1(i * 5 + 102)) * size;
    const y0 = noise1(i * 5 + 103) * size, len = (0.3 + 0.6 * noise1(i * 5 + 104)) * size;
    const grad = ctx.createLinearGradient(0, y0, 0, y0 + len);
    grad.addColorStop(0, 'rgba(180,182,184,0.0)');
    grad.addColorStop(0.3, 'rgba(180,182,184,0.35)');
    grad.addColorStop(1, 'rgba(180,182,184,0.0)');
    ctx.fillStyle = grad;
    wrapped((dx, dy) => ctx.fillRect(x + dx - w / 2, y0 + dy, w, len));
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  spangleCache = tex;
  return tex;
}

let faceAtlasCache: THREE.CanvasTexture | null | undefined;
const ATLAS_STRIP = 0.0625; // bottom 1/16 of v is the bare-galvanised return

/** 4:1 atlas: the front cap at one isotropic scale, a galvanised strip along the bottom edge. */
function faceAtlas(size: number): THREE.CanvasTexture | null {
  if (faceAtlasCache !== undefined) return faceAtlasCache;
  if (typeof document === 'undefined') { faceAtlasCache = null; return null; }
  const canvas = document.createElement('canvas');
  const W = size * 2, H = size / 2;
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) { faceAtlasCache = null; return null; }

  // The ground: the board's bare edge return. NOT OBSERVED in the reference, so it takes the
  // frame's galvanised value at confidence 0.5, the lowest-confidence colour in this spec.
  ctx.fillStyle = PALETTE.galv;
  ctx.fillRect(0, 0, W, H);

  // Canvas y grows downward; the face region is the top (1 - STRIP) of the canvas.
  const faceH = H * (1 - ATLAS_STRIP);
  const pxPerM = W / DIM.boardW;          // isotropic: faceH / boardH is the same number
  ctx.fillStyle = PALETTE.field;
  ctx.fillRect(0, 0, W, faceH);

  // Chalky weathering wash along the top edge, fading within the top fifth.
  const wash = ctx.createLinearGradient(0, 0, 0, faceH * 0.22);
  wash.addColorStop(0, 'rgba(189,198,197,0.45)');
  wash.addColorStop(0.5, 'rgba(189,198,197,0.16)');
  wash.addColorStop(1, 'rgba(189,198,197,0.0)');
  ctx.fillStyle = wash;
  ctx.fillRect(0, 0, W, faceH * 0.22);

  // Border rule 0.08 m in, 0.04 m wide, following the rounded outline.
  const inset = 0.08 * pxPerM, lw = 0.04 * pxPerM, rr = 0.10 * pxPerM;
  ctx.strokeStyle = PALETTE.legend;
  ctx.lineWidth = lw;
  ctx.beginPath();
  const x0 = inset, y0 = inset, x1 = W - inset, y1 = faceH - inset;
  ctx.moveTo(x0 + rr, y0); ctx.lineTo(x1 - rr, y0); ctx.arcTo(x1, y0, x1, y0 + rr, rr);
  ctx.lineTo(x1, y1 - rr); ctx.arcTo(x1, y1, x1 - rr, y1, rr);
  ctx.lineTo(x0 + rr, y1); ctx.arcTo(x0, y1, x0, y1 - rr, rr);
  ctx.lineTo(x0, y0 + rr); ctx.arcTo(x0, y0, x0 + rr, y0, rr);
  ctx.closePath(); ctx.stroke();

  // Legend: Thai destination over its Latin transliteration, left of centre; distance right.
  // The region is isotropic so drawWorldText's squash is unity; it is still routed through it
  // so the glyphs land at their stated world size.
  const cx = (mx: number) => (mx / DIM.boardW + 0.5) * W;
  const cy = (my: number) => (0.5 - my / DIM.boardH) * faceH;
  ctx.fillStyle = PALETTE.legend;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  drawWorldText(ctx, 'ดอนเมือง', cx(-0.85), cy(0.30), 2.5, 0.44, pxPerM, pxPerM, SANS_R);
  drawWorldText(ctx, 'DON MUEANG', cx(-0.85), cy(-0.36), 1.9, 0.22, pxPerM, pxPerM, SANS);
  drawWorldText(ctx, '12 กม.', cx(1.95), cy(-0.30), 0.95, 0.26, pxPerM, pxPerM, SANS_R);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  faceAtlasCache = tex;
  return tex;
}

function buildGeometry(root: THREE.Group): void {
  const D = DIM;
  const parts: THREE.BufferGeometry[] = [];
  const add = (g: THREE.BufferGeometry, tone: string | Array<[number, string]>, blotch = 0.05) => {
    if (typeof tone === 'string') bakeFlat(g, tone, blotch); else bakeRamp(g, tone, blotch);
    planarUV(g);
    parts.push(g);
  };
  const legH = D.legTop - D.legY0;
  const legRamp: Array<[number, string]> = [
    [0.00, PALETTE.footRust],
    [0.12, PALETTE.plate],
    [0.70, PALETTE.galv],
    [4.30, PALETTE.galv],
    [4.85, PALETTE.legStreak],   // run-off below the flange collar
    [5.10, PALETTE.galv],
    [D.height, PALETTE.galvClean],
  ];
  const half = D.legW / 2;
  for (const s of [-1, 1]) {
    // A left/right pair is a REFLECTION: the lateral axis is negated and nothing else.
    const x = s * D.legX;
    add(boxAt(D.legW, legH, D.legW, x, D.legY0 + legH / 2, 0, D.legSeg), legRamp, 0.06);
    add(boxAt(D.capW, D.capH, D.capW, x, D.legTop + D.capH / 2, 0),
        [[D.legTop, PALETTE.capRust], [D.legTop + D.capH, PALETTE.cap]], 0.04);
    add(boxAt(D.plateW, D.plateH, D.plateD, x, D.plateH / 2, 0), PALETTE.plate);
    // Four gusset fins per foot: 0.10 run on the x faces (to the 0.70 plate's edge), 0.05 on z.
    const gy = D.plateH, gr = D.gussetRise, gt = D.gussetT;
    add(gussetAt(D.plateW / 2 - half, gr, gt, x + half, gy, 0, 'px'), PALETTE.gusset);
    add(gussetAt(D.plateW / 2 - half, gr, gt, x - half, gy, 0, 'nx'), PALETTE.gusset);
    add(gussetAt(D.plateD / 2 - half, gr, gt, x, gy, half, 'pz'), PALETTE.gusset);
    add(gussetAt(D.plateD / 2 - half, gr, gt, x, gy, -half, 'nz'), PALETTE.gusset);
    // Bolted flange splice collar the leg passes through: rust on its underside.
    add(boxAt(D.flangeW, D.flangeH, D.flangeW, x, D.flangeY, 0, 2),
        [[D.flangeY - D.flangeH / 2, PALETTE.flangeRust], [D.flangeY + D.flangeH / 2, PALETTE.flange]], 0.05);
    // End-plate brackets wrapping each rail end against the leg's inner face.
    const bx = s * (D.legX - half + D.bracketW / 2 - 0.04);
    for (const [y0, y1] of [[D.railUpperY0, D.railUpperY1], [D.railLowerY0, D.railLowerY1]]) {
      const by0 = y0 - D.bracketPad - (y1 === D.railUpperY1 ? 0.02 : 0), by1 = y1 + D.bracketPad + (y1 === D.railUpperY1 ? 0.04 : 0);
      add(boxAt(D.bracketW, by1 - by0, D.railZ + 2 * D.bracketPad, bx, (by0 + by1) / 2, 0, 2),
          [[by0, PALETTE.bracketRust], [by1, PALETTE.bracket]], 0.05);
    }
  }
  // Two box rails BETWEEN the legs, inner face to inner face: opposed butt joints at x=+/-3.40.
  const clear = 2 * (D.legX - half);
  for (const [y0, y1] of [[D.railUpperY0, D.railUpperY1], [D.railLowerY0, D.railLowerY1]]) {
    add(boxAt(clear, y1 - y0, D.railZ, 0, (y0 + y1) / 2, 0), PALETTE.galvClean, 0.04);
  }
  // Eight staple rungs on the LEFT leg's OUTER face only, as the reference shows.
  const faceX = -D.legX - half;
  for (let i = 0; i < D.rungCount; i += 1) {
    const y = D.rungY0 + i * D.rungPitch;
    for (const zs of [-1, 1]) {
      add(boxAt(D.rungOut, D.rungD, D.rungD, faceX - D.rungOut / 2, y, zs * (D.rungBar / 2 - D.rungD / 2)), PALETTE.rung, 0.03);
    }
    add(boxAt(D.rungD, D.rungD, D.rungBar, faceX - D.rungOut + D.rungD / 2, y, 0), PALETTE.rung, 0.03);
  }

  const frame = concatWithColor(parts);
  for (const g of parts) g.dispose();
  frame.computeVertexNormals();
  const fm = setMeshGeometry(root, 'gantry-frame', frame);
  if (fm) {
    const m = fm.material as THREE.MeshPhysicalMaterial;
    m.vertexColors = true;
    m.color.set('#FFFFFF');
    m.metalness = 0.25;
    m.roughness = 0.62;
    m.needsUpdate = true;
  }

  // --- the board: a rounded-rect extrusion with the 4:1 atlas, centred on its own origin;
  // the component transform places it at (0, 5.80, 0.28). ----------------------------
  const shape = roundedRectShape(D.boardW / 2, D.boardH / 2, D.boardR, 4);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: D.boardT, bevelEnabled: false, curveSegments: 4 });
  geo.translate(0, 0, -D.boardT / 2);
  const pos = geo.getAttribute('position') as THREE.BufferAttribute;
  const nrm = geo.getAttribute('normal') as THREE.BufferAttribute;
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i += 1) {
    if (nrm.getZ(i) > 0.5) {
      uv[i * 2] = pos.getX(i) / D.boardW + 0.5;
      uv[i * 2 + 1] = ATLAS_STRIP + (1 - ATLAS_STRIP) * (pos.getY(i) / D.boardH + 0.5);
    } else {
      uv[i * 2] = 0.5; uv[i * 2 + 1] = ATLAS_STRIP / 2;
    }
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  setMeshGeometry(root, 'sign-board', geo);
}

/** Assign the canvases AFTER material construction - the textureless declaration does not touch this route. */
function applyAtlases(root: THREE.Group, options: ProceduralModelOptions): void {
  const rt = root.userData.sculptRuntime as { meshes?: Record<string, THREE.Mesh> } | undefined;
  const size = options.textureSize ?? 512;
  const board = rt?.meshes?.['sign-board'];
  const tex = faceAtlas(size);
  if (board && tex) {
    tex.anisotropy = options.textureAnisotropy ?? 4;
    const m = board.material as THREE.MeshPhysicalMaterial;
    m.map = tex;
    m.color.set('#FFFFFF');
    m.metalness = 0.0;
    m.roughness = 0.44;
    m.needsUpdate = true;
  }
  const frame = rt?.meshes?.['gantry-frame'];
  const tile = spangleTile(Math.min(256, size));
  if (frame && tile) {
    tile.anisotropy = options.textureAnisotropy ?? 4;
    const m = frame.material as THREE.MeshPhysicalMaterial;
    m.map = tile;
    m.needsUpdate = true;
  }
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
  const root = createExpresswayGantrySignModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  buildGeometry(root);
  applyAtlases(root, options);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: ONE. A welded and bolted gantry has no hinge, bearing, lid or wheel, so the root is the only axis it has. A pivot per member would describe a machine that does not exist.
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
