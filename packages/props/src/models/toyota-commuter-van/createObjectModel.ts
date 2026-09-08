import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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

// Generated from ObjectSculptSpec target: Toyota Commuter Van
// Sculpt build pass: material-pass
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createToyotaCommuterVanModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "Toyota Commuter Van";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 40, "aspect": 1, "orientation": {"yaw": 0, "pitch": 0, "roll": 0}, "positionHint": [0, 0, 3], "note": "For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."}, "approximationNotes": []};
  root.userData.materialPipeline = {"schemaVersion": 1, "registry": "docs/materials/material-reference.json", "status": "proceed", "analysisArtifact": "/repo/scratch/toyota-commuter-van/material-evidence", "targetThreshold": 0.7, "method": "Verified single-crop route: analyze_texture and extract_pbr_evidence for four materials; scalar/vertex-color recipes, not extracted maps bound as textures.", "regions": [{"regionId": "paint", "componentId": "root", "specMaterialId": "paint", "profileId": "coating.painted-metal", "status": "proceed", "confidence": 0.716, "variant": "aged satin paint, textureless shader/vertex-color route"}, {"regionId": "glass", "componentId": "windscreen", "specMaterialId": "glass", "profileId": "glass.clear", "status": "proceed", "confidence": 0.831, "variant": "opaque tinted-window approximation; surface reflection only, no transmitted interior claim"}, {"regionId": "rubber", "componentId": "trim", "specMaterialId": "rubber", "profileId": "rubber.matte", "status": "proceed", "confidence": 0.722}, {"regionId": "steel", "componentId": "hardware", "specMaterialId": "steel", "profileId": "metal.steel-polished", "status": "proceed", "confidence": 0.86, "variant": "aged and coated steel; roughness/metalness deliberately differ from pristine-polish prior"}], "unresolvedNotObservedMaterials": [], "controlledViewsRequired": ["neutral-studio", "grazing", "reference-beauty"]};
  root.userData.materialReferenceRegistry = "docs/materials/material-reference.json";

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["paint"] = createSculptMaterial(
    "paint",
    {"id": "paint", "name": "paint", "type": "physical", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#DBDEE3", "color": "#DBDEE3", "albedo": {"dominant": "#DBDEE3", "secondary": [], "samplingNotes": "Measured source crop; see material-evidence/paint.json"}, "colorVariation": {"palette": ["#DBDEE3"], "pattern": "bounded vertex-colour variation", "amplitude": 0.045}, "roughness": {"base": 0.6, "variation": 0.06, "map": "none", "localResponse": "reference-derived scalar"}, "metalness": {"base": 0, "variation": 0}, "ambientOcclusion": {"cavityStrength": 0.25, "contactShadowBias": 0.35, "notes": "Darken creases, seams, intersections, and recessed local features."}, "wear": {"edgeWear": 0, "scratches": [], "chips": []}, "dirt": {"amount": 0, "cavityBias": 0, "color": "#2F2A22"}, "localOverrides": [{"id": "paint-variation", "region": "visible paint surfaces", "roughness": 0.6, "color": "#DBDEE3", "evidenceRefs": ["full-object"], "notes": "Shader scalar and authored vertex-colour variation; no baked highlights."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions.", "clearcoat": 0.15, "textureless": {"declared": true, "evidence": ["Reference paint crop in crops/paint.png; no resolvable microrelief requiring generated canvases. Macroscopic colour boundaries use vertex regions."]}},
    options
  );
  materialMap["glass"] = createSculptMaterial(
    "glass",
    {"id": "glass", "name": "glass", "type": "physical", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#273735", "color": "#273735", "albedo": {"dominant": "#273735", "secondary": [], "samplingNotes": "Measured source crop; see material-evidence/glass.json"}, "colorVariation": {"palette": ["#273735"], "pattern": "bounded vertex-colour variation", "amplitude": 0.01}, "roughness": {"base": 0.16, "variation": 0.06, "map": "none", "localResponse": "reference-derived scalar"}, "metalness": {"base": 0, "variation": 0}, "ambientOcclusion": {"cavityStrength": 0.25, "contactShadowBias": 0.35, "notes": "Darken creases, seams, intersections, and recessed local features."}, "wear": {"edgeWear": 0, "scratches": [], "chips": []}, "dirt": {"amount": 0, "cavityBias": 0, "color": "#2F2A22"}, "localOverrides": [{"id": "glass-variation", "region": "visible glass surfaces", "roughness": 0.16, "color": "#273735", "evidenceRefs": ["full-object"], "notes": "Shader scalar and authored vertex-colour variation; no baked highlights."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions.", "clearcoat": 0.5, "textureless": {"declared": true, "evidence": ["Reference glass crop in crops/glass.png; no resolvable microrelief requiring generated canvases. Macroscopic colour boundaries use vertex regions."]}},
    options
  );
  materialMap["rubber"] = createSculptMaterial(
    "rubber",
    {"id": "rubber", "name": "rubber", "type": "physical", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#343633", "color": "#343633", "albedo": {"dominant": "#343633", "secondary": [], "samplingNotes": "Measured source crop; see material-evidence/rubber.json"}, "colorVariation": {"palette": ["#343633"], "pattern": "bounded vertex-colour variation", "amplitude": 0.01}, "roughness": {"base": 0.88, "variation": 0.06, "map": "none", "localResponse": "reference-derived scalar"}, "metalness": {"base": 0, "variation": 0}, "ambientOcclusion": {"cavityStrength": 0.25, "contactShadowBias": 0.35, "notes": "Darken creases, seams, intersections, and recessed local features."}, "wear": {"edgeWear": 0, "scratches": [], "chips": []}, "dirt": {"amount": 0, "cavityBias": 0, "color": "#2F2A22"}, "localOverrides": [{"id": "rubber-variation", "region": "visible rubber surfaces", "roughness": 0.88, "color": "#343633", "evidenceRefs": ["full-object"], "notes": "Shader scalar and authored vertex-colour variation; no baked highlights."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions.", "clearcoat": 0, "textureless": {"declared": true, "evidence": ["Reference rubber crop in crops/rubber.png; no resolvable microrelief requiring generated canvases. Macroscopic colour boundaries use vertex regions."]}},
    options
  );
  materialMap["steel"] = createSculptMaterial(
    "steel",
    {"id": "steel", "name": "steel", "type": "physical", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#858783", "color": "#858783", "albedo": {"dominant": "#858783", "secondary": [], "samplingNotes": "Measured source crop; see material-evidence/steel.json"}, "colorVariation": {"palette": ["#858783"], "pattern": "bounded vertex-colour variation", "amplitude": 0.01}, "roughness": {"base": 0.38, "variation": 0.06, "map": "none", "localResponse": "reference-derived scalar"}, "metalness": {"base": 0.8, "variation": 0}, "ambientOcclusion": {"cavityStrength": 0.25, "contactShadowBias": 0.35, "notes": "Darken creases, seams, intersections, and recessed local features."}, "wear": {"edgeWear": 0, "scratches": [], "chips": []}, "dirt": {"amount": 0, "cavityBias": 0, "color": "#2F2A22"}, "localOverrides": [{"id": "steel-variation", "region": "visible steel surfaces", "roughness": 0.38, "color": "#858783", "evidenceRefs": ["full-object"], "notes": "Shader scalar and authored vertex-colour variation; no baked highlights."}], "shaderNotes": ["Prefer MeshPhysicalMaterial when clearcoat, sheen, transmission, or thin-surface response is observed; otherwise use MeshStandardMaterial-compatible PBR channels.", "Generate albedo, roughness, height/normal, and AO independently; never alias albedo into roughness.", "Use normal/bump/displacement only when they map to observed surface relief.", "Use displacement geometry when the observed relief changes the close-up silhouette; texture-only relief is insufficient there."], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions.", "clearcoat": 0, "textureless": {"declared": true, "evidence": ["Reference steel crop in crops/steel.png; no resolvable microrelief requiring generated canvases. Macroscopic colour boundaries use vertex regions."]}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_root_0 = makeAttachmentEndpoint(null);
  const node_root_0 = new THREE.Group();
  node_root_0.name = "Body shell__pivot";
  node_root_0.scale.set(1, 1, 1);
  if (endpoint_root_0) {
    node_root_0.position.copy(endpoint_root_0.start);
    node_root_0.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_root_0.position.set(0.0, 0.0, 0.0);
    node_root_0.rotation.set(0.0, 0.0, 0.0);
  }
  node_root_0.userData.sculptComponent = {"id": "root", "name": "Body shell", "level": "macro", "role": "body", "importance": 1, "confidence": 1, "primitive": "extrude", "topologyClass": "continuous-sculpt", "topologyRationale": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "geometryDescriptor": {"topologyIntent": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "root", "profile2D": {"points": [[-2.64, 0.31], [-1.995, 0.31], [-1.995, 0.3400000000000001], [-1.9877944801512115, 0.41315887075604824], [-1.9664548246917326, 0.48350628713690874], [-1.9318011046134547, 0.5483388373823508], [-1.8851650429449553, 0.6051650429449553], [-1.8283388373823508, 0.6518011046134545], [-1.7635062871369087, 0.6864548246917326], [-1.693158870756048, 0.7077944801512115], [-1.62, 0.7150000000000001], [-1.546841129243952, 0.7077944801512115], [-1.4764937128630915, 0.6864548246917326], [-1.4116611626176494, 0.6518011046134545], [-1.3548349570550449, 0.6051650429449553], [-1.3081988953865455, 0.5483388373823508], [-1.2735451753082676, 0.4835062871369087], [-1.2522055198487887, 0.4131588707560482], [-1.245, 0.34], [-1.245, 0.31], [1.265, 0.31], [1.265, 0.3400000000000001], [1.2722055198487885, 0.41315887075604824], [1.2935451753082674, 0.48350628713690874], [1.3281988953865453, 0.5483388373823508], [1.3748349570550447, 0.6051650429449553], [1.4316611626176492, 0.6518011046134545], [1.4964937128630913, 0.6864548246917326], [1.566841129243952, 0.7077944801512115], [1.64, 0.7150000000000001], [1.7131588707560481, 0.7077944801512115], [1.7835062871369085, 0.6864548246917326], [1.8483388373823506, 0.6518011046134545], [1.9051650429449554, 0.6051650429449553], [1.9518011046134545, 0.5483388373823508], [1.9864548246917324, 0.4835062871369087], [2.0077944801512113, 0.4131588707560482], [2.0149999999999997, 0.34], [2.0149999999999997, 0.31], [2.49, 0.36], [2.63, 0.72], [2.59, 1.05], [1.98, 1.91], [-2.49, 1.91], [-2.64, 1.73]], "depth": 1.74}}, "parent": null, "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 1}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "root", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "paint", "materialLayers": ["paint"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "arch-clearance", "kind": "hole", "description": "Four real wheel-arch openings", "confidence": 0.9, "evidenceRefs": ["full-object"], "geometryEffect": "Four real wheel-arch openings", "materialEffect": "independent PBR response"}, {"id": "triple-stripe", "kind": "linework", "description": "Muted red, yellow and green stripes follow lower side panels", "confidence": 0.95, "evidenceRefs": ["full-object"], "geometryEffect": "Muted red, yellow and green stripes follow lower side panels", "materialEffect": "vertex-colour region"}, {"id": "sill-roadfilm", "kind": "stain", "description": "Grey-brown road film becomes stronger toward lower sill", "confidence": 0.85, "evidenceRefs": ["full-object"], "geometryEffect": "Grey-brown road film becomes stronger toward lower sill", "materialEffect": "vertex-colour region"}], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Body shell reconstructed from the reference plate"], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(219, 222, 227, 1)", "secondaryAlbedo": "rgba(219, 222, 227, 1)", "materialClass": "metal", "materialClassConfidence": 1, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_root_0.userData.actionProfile = {"animationRole": "root", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}};
  (nodes["root"] ?? root).add(node_root_0);
  nodes["root"] = node_root_0;
  const mesh_root_0Geometry = endpoint_root_0
    ? new THREE.CylinderGeometry(endpoint_root_0.endRadius, endpoint_root_0.baseRadius, endpoint_root_0.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-2.64, 0.31], [-1.995, 0.31], [-1.995, 0.3400000000000001], [-1.9877944801512115, 0.41315887075604824], [-1.9664548246917326, 0.48350628713690874], [-1.9318011046134547, 0.5483388373823508], [-1.8851650429449553, 0.6051650429449553], [-1.8283388373823508, 0.6518011046134545], [-1.7635062871369087, 0.6864548246917326], [-1.693158870756048, 0.7077944801512115], [-1.62, 0.7150000000000001], [-1.546841129243952, 0.7077944801512115], [-1.4764937128630915, 0.6864548246917326], [-1.4116611626176494, 0.6518011046134545], [-1.3548349570550449, 0.6051650429449553], [-1.3081988953865455, 0.5483388373823508], [-1.2735451753082676, 0.4835062871369087], [-1.2522055198487887, 0.4131588707560482], [-1.245, 0.34], [-1.245, 0.31], [1.265, 0.31], [1.265, 0.3400000000000001], [1.2722055198487885, 0.41315887075604824], [1.2935451753082674, 0.48350628713690874], [1.3281988953865453, 0.5483388373823508], [1.3748349570550447, 0.6051650429449553], [1.4316611626176492, 0.6518011046134545], [1.4964937128630913, 0.6864548246917326], [1.566841129243952, 0.7077944801512115], [1.64, 0.7150000000000001], [1.7131588707560481, 0.7077944801512115], [1.7835062871369085, 0.6864548246917326], [1.8483388373823506, 0.6518011046134545], [1.9051650429449554, 0.6051650429449553], [1.9518011046134545, 0.5483388373823508], [1.9864548246917324, 0.4835062871369087], [2.0077944801512113, 0.4131588707560482], [2.0149999999999997, 0.34], [2.0149999999999997, 0.31], [2.49, 0.36], [2.63, 0.72], [2.59, 1.05], [1.98, 1.91], [-2.49, 1.91], [-2.64, 1.73]], "depth": 1.74});
  if (!endpoint_root_0) {
    mesh_root_0Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_root_0 = new THREE.Mesh(
    mesh_root_0Geometry,
    materialMap["paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_root_0.name = "Body shell";
  if (endpoint_root_0) {
    mesh_root_0.position.copy(endpoint_root_0.midpoint);
    mesh_root_0.quaternion.copy(endpoint_root_0.quaternion);
  }
  mesh_root_0.castShadow = options.castShadow ?? true;
  mesh_root_0.receiveShadow = options.receiveShadow ?? true;
  mesh_root_0.userData.sculptComponent = {"id": "root", "name": "Body shell", "level": "macro", "role": "body", "importance": 1, "confidence": 1, "primitive": "extrude", "topologyClass": "continuous-sculpt", "topologyRationale": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "geometryDescriptor": {"topologyIntent": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "root", "profile2D": {"points": [[-2.64, 0.31], [-1.995, 0.31], [-1.995, 0.3400000000000001], [-1.9877944801512115, 0.41315887075604824], [-1.9664548246917326, 0.48350628713690874], [-1.9318011046134547, 0.5483388373823508], [-1.8851650429449553, 0.6051650429449553], [-1.8283388373823508, 0.6518011046134545], [-1.7635062871369087, 0.6864548246917326], [-1.693158870756048, 0.7077944801512115], [-1.62, 0.7150000000000001], [-1.546841129243952, 0.7077944801512115], [-1.4764937128630915, 0.6864548246917326], [-1.4116611626176494, 0.6518011046134545], [-1.3548349570550449, 0.6051650429449553], [-1.3081988953865455, 0.5483388373823508], [-1.2735451753082676, 0.4835062871369087], [-1.2522055198487887, 0.4131588707560482], [-1.245, 0.34], [-1.245, 0.31], [1.265, 0.31], [1.265, 0.3400000000000001], [1.2722055198487885, 0.41315887075604824], [1.2935451753082674, 0.48350628713690874], [1.3281988953865453, 0.5483388373823508], [1.3748349570550447, 0.6051650429449553], [1.4316611626176492, 0.6518011046134545], [1.4964937128630913, 0.6864548246917326], [1.566841129243952, 0.7077944801512115], [1.64, 0.7150000000000001], [1.7131588707560481, 0.7077944801512115], [1.7835062871369085, 0.6864548246917326], [1.8483388373823506, 0.6518011046134545], [1.9051650429449554, 0.6051650429449553], [1.9518011046134545, 0.5483388373823508], [1.9864548246917324, 0.4835062871369087], [2.0077944801512113, 0.4131588707560482], [2.0149999999999997, 0.34], [2.0149999999999997, 0.31], [2.49, 0.36], [2.63, 0.72], [2.59, 1.05], [1.98, 1.91], [-2.49, 1.91], [-2.64, 1.73]], "depth": 1.74}}, "parent": null, "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 1}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "root", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": true, "rotate": true, "scale": true, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "paint", "materialLayers": ["paint"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "arch-clearance", "kind": "hole", "description": "Four real wheel-arch openings", "confidence": 0.9, "evidenceRefs": ["full-object"], "geometryEffect": "Four real wheel-arch openings", "materialEffect": "independent PBR response"}, {"id": "triple-stripe", "kind": "linework", "description": "Muted red, yellow and green stripes follow lower side panels", "confidence": 0.95, "evidenceRefs": ["full-object"], "geometryEffect": "Muted red, yellow and green stripes follow lower side panels", "materialEffect": "vertex-colour region"}, {"id": "sill-roadfilm", "kind": "stain", "description": "Grey-brown road film becomes stronger toward lower sill", "confidence": 0.85, "evidenceRefs": ["full-object"], "geometryEffect": "Grey-brown road film becomes stronger toward lower sill", "materialEffect": "vertex-colour region"}], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Body shell reconstructed from the reference plate"], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(219, 222, 227, 1)", "secondaryAlbedo": "rgba(219, 222, 227, 1)", "materialClass": "metal", "materialClassConfidence": 1, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_root_0.add(mesh_root_0);
  meshes["root"] = mesh_root_0;
  colliders["root"] = {"type": "none"};

  const endpoint_roof_1 = makeAttachmentEndpoint(null);
  const node_roof_1 = new THREE.Group();
  node_roof_1.name = "High roof crown__pivot";
  node_roof_1.scale.set(1, 1, 1);
  if (endpoint_roof_1) {
    node_roof_1.position.copy(endpoint_roof_1.start);
    node_roof_1.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_roof_1.position.set(0.0, 0.0, 0.0);
    node_roof_1.rotation.set(0.0, 0.0, 0.0);
  }
  node_roof_1.userData.sculptComponent = {"id": "roof", "name": "High roof crown", "level": "macro", "role": "body", "importance": 0.95, "confidence": 0.95, "primitive": "extrude", "topologyClass": "conforming-shell", "topologyRationale": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "geometryDescriptor": {"topologyIntent": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "roof", "profile2D": {"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05}}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.95}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "paint", "materialLayers": ["paint"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "roof-ribs", "kind": "ridge", "description": "Two longitudinal pressed roof ribs, 0.009 m relief", "confidence": 0.9, "evidenceRefs": ["full-object"], "geometryEffect": "Two longitudinal pressed roof ribs, 0.009 m relief", "materialEffect": "independent PBR response"}, {"id": "roof-chalking", "kind": "stain", "description": "Low-amplitude pale mottling on sun-chalked roof", "confidence": 0.85, "evidenceRefs": ["full-object"], "geometryEffect": "Low-amplitude pale mottling on sun-chalked roof", "materialEffect": "vertex-colour region"}], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["High roof crown reconstructed from the reference plate"], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(219, 222, 227, 1)", "secondaryAlbedo": "rgba(219, 222, 227, 1)", "materialClass": "metal", "materialClassConfidence": 0.95, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_roof_1.userData.actionProfile = {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}};
  (nodes["root"] ?? root).add(node_roof_1);
  nodes["roof"] = node_roof_1;
  const mesh_roof_1Geometry = endpoint_roof_1
    ? new THREE.CylinderGeometry(endpoint_roof_1.endRadius, endpoint_roof_1.baseRadius, endpoint_roof_1.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05});
  if (!endpoint_roof_1) {
    mesh_roof_1Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_roof_1 = new THREE.Mesh(
    mesh_roof_1Geometry,
    materialMap["paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_roof_1.name = "High roof crown";
  if (endpoint_roof_1) {
    mesh_roof_1.position.copy(endpoint_roof_1.midpoint);
    mesh_roof_1.quaternion.copy(endpoint_roof_1.quaternion);
  }
  mesh_roof_1.castShadow = options.castShadow ?? true;
  mesh_roof_1.receiveShadow = options.receiveShadow ?? true;
  mesh_roof_1.userData.sculptComponent = {"id": "roof", "name": "High roof crown", "level": "macro", "role": "body", "importance": 0.95, "confidence": 0.95, "primitive": "extrude", "topologyClass": "conforming-shell", "topologyRationale": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "geometryDescriptor": {"topologyIntent": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "roof", "profile2D": {"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05}}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.95}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "paint", "materialLayers": ["paint"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "roof-ribs", "kind": "ridge", "description": "Two longitudinal pressed roof ribs, 0.009 m relief", "confidence": 0.9, "evidenceRefs": ["full-object"], "geometryEffect": "Two longitudinal pressed roof ribs, 0.009 m relief", "materialEffect": "independent PBR response"}, {"id": "roof-chalking", "kind": "stain", "description": "Low-amplitude pale mottling on sun-chalked roof", "confidence": 0.85, "evidenceRefs": ["full-object"], "geometryEffect": "Low-amplitude pale mottling on sun-chalked roof", "materialEffect": "vertex-colour region"}], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["High roof crown reconstructed from the reference plate"], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(219, 222, 227, 1)", "secondaryAlbedo": "rgba(219, 222, 227, 1)", "materialClass": "metal", "materialClassConfidence": 0.95, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_roof_1.add(mesh_roof_1);
  meshes["roof"] = mesh_roof_1;
  colliders["roof"] = {"type": "none"};

  const endpoint_ac_pod_2 = makeAttachmentEndpoint(null);
  const node_ac_pod_2 = new THREE.Group();
  node_ac_pod_2.name = "Roof air conditioner__pivot";
  node_ac_pod_2.scale.set(1, 1, 1);
  if (endpoint_ac_pod_2) {
    node_ac_pod_2.position.copy(endpoint_ac_pod_2.start);
    node_ac_pod_2.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_ac_pod_2.position.set(0.0, 0.0, 0.0);
    node_ac_pod_2.rotation.set(0.0, 0.0, 0.0);
  }
  node_ac_pod_2.userData.sculptComponent = {"id": "ac-pod", "name": "Roof air conditioner", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Discrete rigid manufactured assembly; batch its fixed details by material.", "geometryDescriptor": {"topologyIntent": "Discrete rigid manufactured assembly; batch its fixed details by material.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "ac-pod"}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.85}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "paint", "materialLayers": ["paint"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "pod-rim", "kind": "bevel", "description": "Rounded low-profile AC housing with a dark base gasket", "confidence": 0.9, "evidenceRefs": ["full-object"], "geometryEffect": "Rounded low-profile AC housing with a dark base gasket", "materialEffect": "independent PBR response"}], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Roof air conditioner reconstructed from the reference plate"], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(219, 222, 227, 1)", "secondaryAlbedo": "rgba(219, 222, 227, 1)", "materialClass": "metal", "materialClassConfidence": 0.85, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_ac_pod_2.userData.actionProfile = {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}};
  (nodes["root"] ?? root).add(node_ac_pod_2);
  nodes["ac-pod"] = node_ac_pod_2;
  const mesh_ac_pod_2Geometry = endpoint_ac_pod_2
    ? new THREE.CylinderGeometry(endpoint_ac_pod_2.endRadius, endpoint_ac_pod_2.baseRadius, endpoint_ac_pod_2.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_ac_pod_2) {
    mesh_ac_pod_2Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_ac_pod_2 = new THREE.Mesh(
    mesh_ac_pod_2Geometry,
    materialMap["paint"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_ac_pod_2.name = "Roof air conditioner";
  if (endpoint_ac_pod_2) {
    mesh_ac_pod_2.position.copy(endpoint_ac_pod_2.midpoint);
    mesh_ac_pod_2.quaternion.copy(endpoint_ac_pod_2.quaternion);
  }
  mesh_ac_pod_2.castShadow = options.castShadow ?? true;
  mesh_ac_pod_2.receiveShadow = options.receiveShadow ?? true;
  mesh_ac_pod_2.userData.sculptComponent = {"id": "ac-pod", "name": "Roof air conditioner", "level": "macro", "role": "body", "importance": 0.85, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Discrete rigid manufactured assembly; batch its fixed details by material.", "geometryDescriptor": {"topologyIntent": "Discrete rigid manufactured assembly; batch its fixed details by material.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "ac-pod"}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.85}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "paint", "materialLayers": ["paint"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "pod-rim", "kind": "bevel", "description": "Rounded low-profile AC housing with a dark base gasket", "confidence": 0.9, "evidenceRefs": ["full-object"], "geometryEffect": "Rounded low-profile AC housing with a dark base gasket", "materialEffect": "independent PBR response"}], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Roof air conditioner reconstructed from the reference plate"], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominantAlbedo": "rgba(219, 222, 227, 1)", "secondaryAlbedo": "rgba(219, 222, 227, 1)", "materialClass": "metal", "materialClassConfidence": 0.85, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_ac_pod_2.add(mesh_ac_pod_2);
  meshes["ac-pod"] = mesh_ac_pod_2;
  colliders["ac-pod"] = {"type": "none"};

  const endpoint_windscreen_3 = makeAttachmentEndpoint(null);
  const node_windscreen_3 = new THREE.Group();
  node_windscreen_3.name = "Front windscreen__pivot";
  node_windscreen_3.scale.set(1, 1, 1);
  if (endpoint_windscreen_3) {
    node_windscreen_3.position.copy(endpoint_windscreen_3.start);
    node_windscreen_3.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_windscreen_3.position.set(0.0, 0.0, 0.0);
    node_windscreen_3.rotation.set(0.0, 0.0, 0.0);
  }
  node_windscreen_3.userData.sculptComponent = {"id": "windscreen", "name": "Front windscreen", "level": "meso", "role": "body", "importance": 0.98, "confidence": 0.98, "primitive": "extrude", "topologyClass": "conforming-shell", "topologyRationale": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "geometryDescriptor": {"topologyIntent": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "windscreen", "profile2D": {"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05}}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.98}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "glass", "materialLayers": ["glass"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "window-corners", "kind": "bevel", "description": "Rounded windscreen corners follow sloping cab plane", "confidence": 0.9, "evidenceRefs": ["full-object"], "geometryEffect": "Rounded windscreen corners follow sloping cab plane", "materialEffect": "independent PBR response"}], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Front windscreen reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(39, 55, 53, 1)", "secondaryAlbedo": "rgba(39, 55, 53, 1)", "materialClass": "glass", "materialClassConfidence": 0.98, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_windscreen_3.userData.actionProfile = {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}};
  (nodes["root"] ?? root).add(node_windscreen_3);
  nodes["windscreen"] = node_windscreen_3;
  const mesh_windscreen_3Geometry = endpoint_windscreen_3
    ? new THREE.CylinderGeometry(endpoint_windscreen_3.endRadius, endpoint_windscreen_3.baseRadius, endpoint_windscreen_3.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05});
  if (!endpoint_windscreen_3) {
    mesh_windscreen_3Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_windscreen_3 = new THREE.Mesh(
    mesh_windscreen_3Geometry,
    materialMap["glass"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_windscreen_3.name = "Front windscreen";
  if (endpoint_windscreen_3) {
    mesh_windscreen_3.position.copy(endpoint_windscreen_3.midpoint);
    mesh_windscreen_3.quaternion.copy(endpoint_windscreen_3.quaternion);
  }
  mesh_windscreen_3.castShadow = options.castShadow ?? true;
  mesh_windscreen_3.receiveShadow = options.receiveShadow ?? true;
  mesh_windscreen_3.userData.sculptComponent = {"id": "windscreen", "name": "Front windscreen", "level": "meso", "role": "body", "importance": 0.98, "confidence": 0.98, "primitive": "extrude", "topologyClass": "conforming-shell", "topologyRationale": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "geometryDescriptor": {"topologyIntent": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "windscreen", "profile2D": {"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05}}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.98}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "glass", "materialLayers": ["glass"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "window-corners", "kind": "bevel", "description": "Rounded windscreen corners follow sloping cab plane", "confidence": 0.9, "evidenceRefs": ["full-object"], "geometryEffect": "Rounded windscreen corners follow sloping cab plane", "materialEffect": "independent PBR response"}], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Front windscreen reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(39, 55, 53, 1)", "secondaryAlbedo": "rgba(39, 55, 53, 1)", "materialClass": "glass", "materialClassConfidence": 0.98, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_windscreen_3.add(mesh_windscreen_3);
  meshes["windscreen"] = mesh_windscreen_3;
  colliders["windscreen"] = {"type": "none"};

  const endpoint_passenger_left_4 = makeAttachmentEndpoint(null);
  const node_passenger_left_4 = new THREE.Group();
  node_passenger_left_4.name = "Left passenger glazing__pivot";
  node_passenger_left_4.scale.set(1, 1, 1);
  if (endpoint_passenger_left_4) {
    node_passenger_left_4.position.copy(endpoint_passenger_left_4.start);
    node_passenger_left_4.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_passenger_left_4.position.set(0.0, 0.0, 0.0);
    node_passenger_left_4.rotation.set(0.0, 0.0, 0.0);
  }
  node_passenger_left_4.userData.sculptComponent = {"id": "passenger-left", "name": "Left passenger glazing", "level": "meso", "role": "body", "importance": 0.95, "confidence": 0.95, "primitive": "extrude", "topologyClass": "conforming-shell", "topologyRationale": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "geometryDescriptor": {"topologyIntent": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "passenger-left", "profile2D": {"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05}}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.95}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "glass", "materialLayers": ["glass"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "glass-gloss", "kind": "gloss", "description": "Dark green-grey glass with smooth specular reflection", "confidence": 0.85, "evidenceRefs": ["full-object"], "geometryEffect": "Dark green-grey glass with smooth specular reflection", "materialEffect": "independent PBR response"}], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Left passenger glazing reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(39, 55, 53, 1)", "secondaryAlbedo": "rgba(39, 55, 53, 1)", "materialClass": "glass", "materialClassConfidence": 0.95, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_passenger_left_4.userData.actionProfile = {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}};
  (nodes["root"] ?? root).add(node_passenger_left_4);
  nodes["passenger-left"] = node_passenger_left_4;
  const mesh_passenger_left_4Geometry = endpoint_passenger_left_4
    ? new THREE.CylinderGeometry(endpoint_passenger_left_4.endRadius, endpoint_passenger_left_4.baseRadius, endpoint_passenger_left_4.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05});
  if (!endpoint_passenger_left_4) {
    mesh_passenger_left_4Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_passenger_left_4 = new THREE.Mesh(
    mesh_passenger_left_4Geometry,
    materialMap["glass"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_passenger_left_4.name = "Left passenger glazing";
  if (endpoint_passenger_left_4) {
    mesh_passenger_left_4.position.copy(endpoint_passenger_left_4.midpoint);
    mesh_passenger_left_4.quaternion.copy(endpoint_passenger_left_4.quaternion);
  }
  mesh_passenger_left_4.castShadow = options.castShadow ?? true;
  mesh_passenger_left_4.receiveShadow = options.receiveShadow ?? true;
  mesh_passenger_left_4.userData.sculptComponent = {"id": "passenger-left", "name": "Left passenger glazing", "level": "meso", "role": "body", "importance": 0.95, "confidence": 0.95, "primitive": "extrude", "topologyClass": "conforming-shell", "topologyRationale": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "geometryDescriptor": {"topologyIntent": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "passenger-left", "profile2D": {"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05}}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.95}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "glass", "materialLayers": ["glass"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "glass-gloss", "kind": "gloss", "description": "Dark green-grey glass with smooth specular reflection", "confidence": 0.85, "evidenceRefs": ["full-object"], "geometryEffect": "Dark green-grey glass with smooth specular reflection", "materialEffect": "independent PBR response"}], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Left passenger glazing reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(39, 55, 53, 1)", "secondaryAlbedo": "rgba(39, 55, 53, 1)", "materialClass": "glass", "materialClassConfidence": 0.95, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_passenger_left_4.add(mesh_passenger_left_4);
  meshes["passenger-left"] = mesh_passenger_left_4;
  colliders["passenger-left"] = {"type": "none"};

  const endpoint_passenger_right_5 = makeAttachmentEndpoint(null);
  const node_passenger_right_5 = new THREE.Group();
  node_passenger_right_5.name = "Right passenger glazing__pivot";
  node_passenger_right_5.scale.set(1, 1, 1);
  if (endpoint_passenger_right_5) {
    node_passenger_right_5.position.copy(endpoint_passenger_right_5.start);
    node_passenger_right_5.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_passenger_right_5.position.set(0.0, 0.0, 0.0);
    node_passenger_right_5.rotation.set(0.0, 0.0, 0.0);
  }
  node_passenger_right_5.userData.sculptComponent = {"id": "passenger-right", "name": "Right passenger glazing", "level": "meso", "role": "body", "importance": 0.65, "confidence": 0.65, "primitive": "extrude", "topologyClass": "conforming-shell", "topologyRationale": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "geometryDescriptor": {"topologyIntent": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "passenger-right", "profile2D": {"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05}}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.65}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "glass", "materialLayers": ["glass"], "deformations": [], "joints": [], "seams": [], "localFeatures": [], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Right passenger glazing reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(39, 55, 53, 1)", "secondaryAlbedo": "rgba(39, 55, 53, 1)", "materialClass": "glass", "materialClassConfidence": 0.65, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_passenger_right_5.userData.actionProfile = {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}};
  (nodes["root"] ?? root).add(node_passenger_right_5);
  nodes["passenger-right"] = node_passenger_right_5;
  const mesh_passenger_right_5Geometry = endpoint_passenger_right_5
    ? new THREE.CylinderGeometry(endpoint_passenger_right_5.endRadius, endpoint_passenger_right_5.baseRadius, endpoint_passenger_right_5.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05});
  if (!endpoint_passenger_right_5) {
    mesh_passenger_right_5Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_passenger_right_5 = new THREE.Mesh(
    mesh_passenger_right_5Geometry,
    materialMap["glass"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_passenger_right_5.name = "Right passenger glazing";
  if (endpoint_passenger_right_5) {
    mesh_passenger_right_5.position.copy(endpoint_passenger_right_5.midpoint);
    mesh_passenger_right_5.quaternion.copy(endpoint_passenger_right_5.quaternion);
  }
  mesh_passenger_right_5.castShadow = options.castShadow ?? true;
  mesh_passenger_right_5.receiveShadow = options.receiveShadow ?? true;
  mesh_passenger_right_5.userData.sculptComponent = {"id": "passenger-right", "name": "Right passenger glazing", "level": "meso", "role": "body", "importance": 0.65, "confidence": 0.65, "primitive": "extrude", "topologyClass": "conforming-shell", "topologyRationale": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "geometryDescriptor": {"topologyIntent": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "passenger-right", "profile2D": {"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05}}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.65}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "glass", "materialLayers": ["glass"], "deformations": [], "joints": [], "seams": [], "localFeatures": [], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Right passenger glazing reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(39, 55, 53, 1)", "secondaryAlbedo": "rgba(39, 55, 53, 1)", "materialClass": "glass", "materialClassConfidence": 0.65, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_passenger_right_5.add(mesh_passenger_right_5);
  meshes["passenger-right"] = mesh_passenger_right_5;
  colliders["passenger-right"] = {"type": "none"};

  const endpoint_cab_left_6 = makeAttachmentEndpoint(null);
  const node_cab_left_6 = new THREE.Group();
  node_cab_left_6.name = "Left cab glazing__pivot";
  node_cab_left_6.scale.set(1, 1, 1);
  if (endpoint_cab_left_6) {
    node_cab_left_6.position.copy(endpoint_cab_left_6.start);
    node_cab_left_6.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_cab_left_6.position.set(0.0, 0.0, 0.0);
    node_cab_left_6.rotation.set(0.0, 0.0, 0.0);
  }
  node_cab_left_6.userData.sculptComponent = {"id": "cab-left", "name": "Left cab glazing", "level": "meso", "role": "body", "importance": 0.9, "confidence": 0.9, "primitive": "extrude", "topologyClass": "conforming-shell", "topologyRationale": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "geometryDescriptor": {"topologyIntent": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "cab-left", "profile2D": {"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05}}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.9}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "glass", "materialLayers": ["glass"], "deformations": [], "joints": [], "seams": [], "localFeatures": [], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Left cab glazing reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(39, 55, 53, 1)", "secondaryAlbedo": "rgba(39, 55, 53, 1)", "materialClass": "glass", "materialClassConfidence": 0.9, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_cab_left_6.userData.actionProfile = {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}};
  (nodes["root"] ?? root).add(node_cab_left_6);
  nodes["cab-left"] = node_cab_left_6;
  const mesh_cab_left_6Geometry = endpoint_cab_left_6
    ? new THREE.CylinderGeometry(endpoint_cab_left_6.endRadius, endpoint_cab_left_6.baseRadius, endpoint_cab_left_6.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05});
  if (!endpoint_cab_left_6) {
    mesh_cab_left_6Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_cab_left_6 = new THREE.Mesh(
    mesh_cab_left_6Geometry,
    materialMap["glass"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_cab_left_6.name = "Left cab glazing";
  if (endpoint_cab_left_6) {
    mesh_cab_left_6.position.copy(endpoint_cab_left_6.midpoint);
    mesh_cab_left_6.quaternion.copy(endpoint_cab_left_6.quaternion);
  }
  mesh_cab_left_6.castShadow = options.castShadow ?? true;
  mesh_cab_left_6.receiveShadow = options.receiveShadow ?? true;
  mesh_cab_left_6.userData.sculptComponent = {"id": "cab-left", "name": "Left cab glazing", "level": "meso", "role": "body", "importance": 0.9, "confidence": 0.9, "primitive": "extrude", "topologyClass": "conforming-shell", "topologyRationale": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "geometryDescriptor": {"topologyIntent": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "cab-left", "profile2D": {"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05}}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.9}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "glass", "materialLayers": ["glass"], "deformations": [], "joints": [], "seams": [], "localFeatures": [], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Left cab glazing reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(39, 55, 53, 1)", "secondaryAlbedo": "rgba(39, 55, 53, 1)", "materialClass": "glass", "materialClassConfidence": 0.9, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_cab_left_6.add(mesh_cab_left_6);
  meshes["cab-left"] = mesh_cab_left_6;
  colliders["cab-left"] = {"type": "none"};

  const endpoint_cab_right_7 = makeAttachmentEndpoint(null);
  const node_cab_right_7 = new THREE.Group();
  node_cab_right_7.name = "Right cab glazing__pivot";
  node_cab_right_7.scale.set(1, 1, 1);
  if (endpoint_cab_right_7) {
    node_cab_right_7.position.copy(endpoint_cab_right_7.start);
    node_cab_right_7.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_cab_right_7.position.set(0.0, 0.0, 0.0);
    node_cab_right_7.rotation.set(0.0, 0.0, 0.0);
  }
  node_cab_right_7.userData.sculptComponent = {"id": "cab-right", "name": "Right cab glazing", "level": "meso", "role": "body", "importance": 0.65, "confidence": 0.65, "primitive": "extrude", "topologyClass": "conforming-shell", "topologyRationale": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "geometryDescriptor": {"topologyIntent": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "cab-right", "profile2D": {"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05}}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.65}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "glass", "materialLayers": ["glass"], "deformations": [], "joints": [], "seams": [], "localFeatures": [], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Right cab glazing reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(39, 55, 53, 1)", "secondaryAlbedo": "rgba(39, 55, 53, 1)", "materialClass": "glass", "materialClassConfidence": 0.65, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_cab_right_7.userData.actionProfile = {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}};
  (nodes["root"] ?? root).add(node_cab_right_7);
  nodes["cab-right"] = node_cab_right_7;
  const mesh_cab_right_7Geometry = endpoint_cab_right_7
    ? new THREE.CylinderGeometry(endpoint_cab_right_7.endRadius, endpoint_cab_right_7.baseRadius, endpoint_cab_right_7.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05});
  if (!endpoint_cab_right_7) {
    mesh_cab_right_7Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_cab_right_7 = new THREE.Mesh(
    mesh_cab_right_7Geometry,
    materialMap["glass"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_cab_right_7.name = "Right cab glazing";
  if (endpoint_cab_right_7) {
    mesh_cab_right_7.position.copy(endpoint_cab_right_7.midpoint);
    mesh_cab_right_7.quaternion.copy(endpoint_cab_right_7.quaternion);
  }
  mesh_cab_right_7.castShadow = options.castShadow ?? true;
  mesh_cab_right_7.receiveShadow = options.receiveShadow ?? true;
  mesh_cab_right_7.userData.sculptComponent = {"id": "cab-right", "name": "Right cab glazing", "level": "meso", "role": "body", "importance": 0.65, "confidence": 0.65, "primitive": "extrude", "topologyClass": "conforming-shell", "topologyRationale": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "geometryDescriptor": {"topologyIntent": "Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "cab-right", "profile2D": {"points": [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]], "depth": 0.05}}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.65}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "glass", "materialLayers": ["glass"], "deformations": [], "joints": [], "seams": [], "localFeatures": [], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Right cab glazing reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(39, 55, 53, 1)", "secondaryAlbedo": "rgba(39, 55, 53, 1)", "materialClass": "glass", "materialClassConfidence": 0.65, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_cab_right_7.add(mesh_cab_right_7);
  meshes["cab-right"] = mesh_cab_right_7;
  colliders["cab-right"] = {"type": "none"};

  const endpoint_rear_glazing_8 = makeAttachmentEndpoint(null);
  const node_rear_glazing_8 = new THREE.Group();
  node_rear_glazing_8.name = "Rear glazing__pivot";
  node_rear_glazing_8.scale.set(1, 1, 1);
  if (endpoint_rear_glazing_8) {
    node_rear_glazing_8.position.copy(endpoint_rear_glazing_8.start);
    node_rear_glazing_8.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_rear_glazing_8.position.set(0.0, 0.0, 0.0);
    node_rear_glazing_8.rotation.set(0.0, 0.0, 0.0);
  }
  node_rear_glazing_8.userData.sculptComponent = {"id": "rear-glazing", "name": "Rear glazing", "level": "meso", "role": "body", "importance": 0.45, "confidence": 0.45, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Discrete rigid manufactured assembly; batch its fixed details by material.", "geometryDescriptor": {"topologyIntent": "Discrete rigid manufactured assembly; batch its fixed details by material.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "rear-glazing"}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.45}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "glass", "materialLayers": ["glass"], "deformations": [], "joints": [], "seams": [], "localFeatures": [], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Rear glazing reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(39, 55, 53, 1)", "secondaryAlbedo": "rgba(39, 55, 53, 1)", "materialClass": "glass", "materialClassConfidence": 0.45, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_rear_glazing_8.userData.actionProfile = {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}};
  (nodes["root"] ?? root).add(node_rear_glazing_8);
  nodes["rear-glazing"] = node_rear_glazing_8;
  const mesh_rear_glazing_8Geometry = endpoint_rear_glazing_8
    ? new THREE.CylinderGeometry(endpoint_rear_glazing_8.endRadius, endpoint_rear_glazing_8.baseRadius, endpoint_rear_glazing_8.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_rear_glazing_8) {
    mesh_rear_glazing_8Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_rear_glazing_8 = new THREE.Mesh(
    mesh_rear_glazing_8Geometry,
    materialMap["glass"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_rear_glazing_8.name = "Rear glazing";
  if (endpoint_rear_glazing_8) {
    mesh_rear_glazing_8.position.copy(endpoint_rear_glazing_8.midpoint);
    mesh_rear_glazing_8.quaternion.copy(endpoint_rear_glazing_8.quaternion);
  }
  mesh_rear_glazing_8.castShadow = options.castShadow ?? true;
  mesh_rear_glazing_8.receiveShadow = options.receiveShadow ?? true;
  mesh_rear_glazing_8.userData.sculptComponent = {"id": "rear-glazing", "name": "Rear glazing", "level": "meso", "role": "body", "importance": 0.45, "confidence": 0.45, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Discrete rigid manufactured assembly; batch its fixed details by material.", "geometryDescriptor": {"topologyIntent": "Discrete rigid manufactured assembly; batch its fixed details by material.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "rear-glazing"}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.45}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "glass", "materialLayers": ["glass"], "deformations": [], "joints": [], "seams": [], "localFeatures": [], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Rear glazing reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(39, 55, 53, 1)", "secondaryAlbedo": "rgba(39, 55, 53, 1)", "materialClass": "glass", "materialClassConfidence": 0.45, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_rear_glazing_8.add(mesh_rear_glazing_8);
  meshes["rear-glazing"] = mesh_rear_glazing_8;
  colliders["rear-glazing"] = {"type": "none"};

  const endpoint_trim_9 = makeAttachmentEndpoint(null);
  const node_trim_9 = new THREE.Group();
  node_trim_9.name = "Window seals, mirrors, grille and seams__pivot";
  node_trim_9.scale.set(1, 1, 1);
  if (endpoint_trim_9) {
    node_trim_9.position.copy(endpoint_trim_9.start);
    node_trim_9.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_trim_9.position.set(0.0, 0.0, 0.0);
    node_trim_9.rotation.set(0.0, 0.0, 0.0);
  }
  node_trim_9.userData.sculptComponent = {"id": "trim", "name": "Window seals, mirrors, grille and seams", "level": "meso", "role": "body", "importance": 0.9, "confidence": 0.9, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Discrete rigid manufactured assembly; batch its fixed details by material.", "geometryDescriptor": {"topologyIntent": "Discrete rigid manufactured assembly; batch its fixed details by material.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "trim"}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.9}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "rubber", "materialLayers": ["rubber"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "sliding-door-seam", "kind": "seam", "description": "Cab door and sliding-door outlines, thin dark recessed-looking seams", "confidence": 0.9, "evidenceRefs": ["full-object"], "geometryEffect": "Cab door and sliding-door outlines, thin dark recessed-looking seams", "materialEffect": "independent PBR response"}, {"id": "window-dividers", "kind": "linework", "description": "Narrow upright dividers within long passenger glazing", "confidence": 0.9, "evidenceRefs": ["full-object"], "geometryEffect": "Narrow upright dividers within long passenger glazing", "materialEffect": "vertex-colour region"}, {"id": "wipers", "kind": "ridge", "description": "Two wipers seated at the lower windscreen", "confidence": 0.85, "evidenceRefs": ["full-object"], "geometryEffect": "Two wipers seated at the lower windscreen", "materialEffect": "independent PBR response"}, {"id": "grille-slats", "kind": "ridge", "description": "Six horizontal grille slats below nose", "confidence": 0.9, "evidenceRefs": ["full-object"], "geometryEffect": "Six horizontal grille slats below nose", "materialEffect": "independent PBR response"}], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Window seals, mirrors, grille and seams reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(52, 54, 51, 1)", "secondaryAlbedo": "rgba(52, 54, 51, 1)", "materialClass": "rubber", "materialClassConfidence": 0.9, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_trim_9.userData.actionProfile = {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}};
  (nodes["root"] ?? root).add(node_trim_9);
  nodes["trim"] = node_trim_9;
  const mesh_trim_9Geometry = endpoint_trim_9
    ? new THREE.CylinderGeometry(endpoint_trim_9.endRadius, endpoint_trim_9.baseRadius, endpoint_trim_9.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_trim_9) {
    mesh_trim_9Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_trim_9 = new THREE.Mesh(
    mesh_trim_9Geometry,
    materialMap["rubber"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_trim_9.name = "Window seals, mirrors, grille and seams";
  if (endpoint_trim_9) {
    mesh_trim_9.position.copy(endpoint_trim_9.midpoint);
    mesh_trim_9.quaternion.copy(endpoint_trim_9.quaternion);
  }
  mesh_trim_9.castShadow = options.castShadow ?? true;
  mesh_trim_9.receiveShadow = options.receiveShadow ?? true;
  mesh_trim_9.userData.sculptComponent = {"id": "trim", "name": "Window seals, mirrors, grille and seams", "level": "meso", "role": "body", "importance": 0.9, "confidence": 0.9, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Discrete rigid manufactured assembly; batch its fixed details by material.", "geometryDescriptor": {"topologyIntent": "Discrete rigid manufactured assembly; batch its fixed details by material.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "trim"}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.9}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "rubber", "materialLayers": ["rubber"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "sliding-door-seam", "kind": "seam", "description": "Cab door and sliding-door outlines, thin dark recessed-looking seams", "confidence": 0.9, "evidenceRefs": ["full-object"], "geometryEffect": "Cab door and sliding-door outlines, thin dark recessed-looking seams", "materialEffect": "independent PBR response"}, {"id": "window-dividers", "kind": "linework", "description": "Narrow upright dividers within long passenger glazing", "confidence": 0.9, "evidenceRefs": ["full-object"], "geometryEffect": "Narrow upright dividers within long passenger glazing", "materialEffect": "vertex-colour region"}, {"id": "wipers", "kind": "ridge", "description": "Two wipers seated at the lower windscreen", "confidence": 0.85, "evidenceRefs": ["full-object"], "geometryEffect": "Two wipers seated at the lower windscreen", "materialEffect": "independent PBR response"}, {"id": "grille-slats", "kind": "ridge", "description": "Six horizontal grille slats below nose", "confidence": 0.9, "evidenceRefs": ["full-object"], "geometryEffect": "Six horizontal grille slats below nose", "materialEffect": "independent PBR response"}], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Window seals, mirrors, grille and seams reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(52, 54, 51, 1)", "secondaryAlbedo": "rgba(52, 54, 51, 1)", "materialClass": "rubber", "materialClassConfidence": 0.9, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_trim_9.add(mesh_trim_9);
  meshes["trim"] = mesh_trim_9;
  colliders["trim"] = {"type": "none"};

  const endpoint_hardware_10 = makeAttachmentEndpoint(null);
  const node_hardware_10 = new THREE.Group();
  node_hardware_10.name = "Steel rims, handles and light lenses__pivot";
  node_hardware_10.scale.set(1, 1, 1);
  if (endpoint_hardware_10) {
    node_hardware_10.position.copy(endpoint_hardware_10.start);
    node_hardware_10.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_hardware_10.position.set(0.0, 0.0, 0.0);
    node_hardware_10.rotation.set(0.0, 0.0, 0.0);
  }
  node_hardware_10.userData.sculptComponent = {"id": "hardware", "name": "Steel rims, handles and light lenses", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Discrete rigid manufactured assembly; batch its fixed details by material.", "geometryDescriptor": {"topologyIntent": "Discrete rigid manufactured assembly; batch its fixed details by material.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "hardware"}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.85}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "steel", "materialLayers": ["steel"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "rim-fasteners", "kind": "fastener", "description": "Six radial lug fasteners on each of four steel wheels", "confidence": 0.85, "evidenceRefs": ["full-object"], "geometryEffect": "Six radial lug fasteners on each of four steel wheels", "materialEffect": "independent PBR response"}, {"id": "rim-vents", "kind": "hole", "description": "Ten small dark ventilation recesses around each steel wheel", "confidence": 0.8, "evidenceRefs": ["full-object"], "geometryEffect": "Ten small dark ventilation recesses around each steel wheel", "materialEffect": "independent PBR response"}, {"id": "handles", "kind": "bevel", "description": "Horizontal chrome cab handles and vertical sliding-door handle", "confidence": 0.85, "evidenceRefs": ["full-object"], "geometryEffect": "Horizontal chrome cab handles and vertical sliding-door handle", "materialEffect": "independent PBR response"}, {"id": "tail-lenses", "kind": "linework", "description": "Conservative small amber/red rear lenses; hidden layout inferred", "confidence": 0.45, "evidenceRefs": ["full-object"], "geometryEffect": "Conservative small amber/red rear lenses; hidden layout inferred", "materialEffect": "vertex-colour region"}], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Steel rims, handles and light lenses reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(133, 135, 131, 1)", "secondaryAlbedo": "rgba(133, 135, 131, 1)", "materialClass": "metal", "materialClassConfidence": 0.85, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_hardware_10.userData.actionProfile = {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}};
  (nodes["root"] ?? root).add(node_hardware_10);
  nodes["hardware"] = node_hardware_10;
  const mesh_hardware_10Geometry = endpoint_hardware_10
    ? new THREE.CylinderGeometry(endpoint_hardware_10.endRadius, endpoint_hardware_10.baseRadius, endpoint_hardware_10.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_hardware_10) {
    mesh_hardware_10Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_hardware_10 = new THREE.Mesh(
    mesh_hardware_10Geometry,
    materialMap["steel"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_hardware_10.name = "Steel rims, handles and light lenses";
  if (endpoint_hardware_10) {
    mesh_hardware_10.position.copy(endpoint_hardware_10.midpoint);
    mesh_hardware_10.quaternion.copy(endpoint_hardware_10.quaternion);
  }
  mesh_hardware_10.castShadow = options.castShadow ?? true;
  mesh_hardware_10.receiveShadow = options.receiveShadow ?? true;
  mesh_hardware_10.userData.sculptComponent = {"id": "hardware", "name": "Steel rims, handles and light lenses", "level": "meso", "role": "body", "importance": 0.85, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "Discrete rigid manufactured assembly; batch its fixed details by material.", "geometryDescriptor": {"topologyIntent": "Discrete rigid manufactured assembly; batch its fixed details by material.", "edgeTreatment": {"type": "bevel", "bevelRadius": 0.015, "segments": 2}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "analytic roof normals and crease-preserving panel normals", "vanAssembly": "hardware"}, "parent": "root", "attachment": null, "dimensions": {"width": 1, "height": 1, "depth": 1, "units": "metres", "confidence": 0.85}, "transform": {"position": [0, 0, 0], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static-part", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "none"}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": "", "seamRefs": [], "detachableFragments": [], "breakImpulse": 0}}, "material": "steel", "materialLayers": ["steel"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "rim-fasteners", "kind": "fastener", "description": "Six radial lug fasteners on each of four steel wheels", "confidence": 0.85, "evidenceRefs": ["full-object"], "geometryEffect": "Six radial lug fasteners on each of four steel wheels", "materialEffect": "independent PBR response"}, {"id": "rim-vents", "kind": "hole", "description": "Ten small dark ventilation recesses around each steel wheel", "confidence": 0.8, "evidenceRefs": ["full-object"], "geometryEffect": "Ten small dark ventilation recesses around each steel wheel", "materialEffect": "independent PBR response"}, {"id": "handles", "kind": "bevel", "description": "Horizontal chrome cab handles and vertical sliding-door handle", "confidence": 0.85, "evidenceRefs": ["full-object"], "geometryEffect": "Horizontal chrome cab handles and vertical sliding-door handle", "materialEffect": "independent PBR response"}, {"id": "tail-lenses", "kind": "linework", "description": "Conservative small amber/red rear lenses; hidden layout inferred", "confidence": 0.45, "evidenceRefs": ["full-object"], "geometryEffect": "Conservative small amber/red rear lenses; hidden layout inferred", "materialEffect": "vertex-colour region"}], "surfaceDetail": {"macroRoughness": 0, "microRoughness": 0, "bumpAmplitude": 0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": ["Steel rims, handles and light lenses reconstructed from the reference plate"], "fidelityTier": "structural", "colorMaterialRecipe": {"dominantAlbedo": "rgba(133, 135, 131, 1)", "secondaryAlbedo": "rgba(133, 135, 131, 1)", "materialClass": "metal", "materialClassConfidence": 0.85, "evidenceRefs": ["full-object"], "notes": "Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}};
  node_hardware_10.add(mesh_hardware_10);
  meshes["hardware"] = mesh_hardware_10;
  colliders["hardware"] = {"type": "none"};

  // repetition system: wheels (InstancedMesh, explicit, count=4, level=macro)
  {
    const parent = nodes["root"] ?? root;
    const geo = new THREE.TorusGeometry(0.45, 0.08, 12, 48);
    const mat = materialMap["rubber"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 });
    // Contract (PLAN_1.5 WS-E): instanceScale is ABSOLUTE, in the parent pivot's
    // local units -- it is never multiplied by the parent component's own declared
    // dimensional scale. This falls out of the same fix as componentTree: the pivot
    // Group this cluster is parented to always carries identity scale (dimensions are
    // baked into that component's OWN geometry, not exposed on the Group), so an
    // instanced fastener/tooth/spoke sized [0.05, 0.05, 0.05] renders at exactly that
    // size regardless of how non-uniformly its host component is shaped, and a
    // `radial` ring's placement stays circular instead of being squashed into an
    // ellipse by a non-uniform host.
    const scl = [1.0, 1.0, 1.0];
    const axis = new THREE.Vector3(1.0, 0.0, 0.0).normalize();
    const radius = 0.0;
    const seed = Math.abs(axis.z) < 0.9 ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(1, 0, 0);
    const perp = new THREE.Vector3().crossVectors(axis, seed).normalize();
    // One InstancedMesh = one draw call for all repeated parts (teeth/fasteners/spokes),
    // replacing the former per-instance Mesh clone loop (real-time perf principle).
    const cluster = new THREE.InstancedMesh(geo, mat, 4);
    const _m = new THREE.Matrix4();
    const _p = new THREE.Vector3();
    const _q = new THREE.Quaternion();
    const _s = new THREE.Vector3(scl[0], scl[1], scl[2]);
    for (let i = 0; i < 4; i++) {
      const ang = ((0.0) + (i * 360) / 4) * Math.PI / 180;
      const dir = perp.clone().applyQuaternion(new THREE.Quaternion().setFromAxisAngle(axis, ang));
      _p.copy(radius > 0 ? dir.clone().multiplyScalar(radius * 0.5) : new THREE.Vector3());
      _q.setFromUnitVectors(new THREE.Vector3(1, 0, 0), dir);
      _m.compose(_p, _q, _s);
      cluster.setMatrixAt(i, _m);
    }
    cluster.instanceMatrix.needsUpdate = true;
    cluster.castShadow = options.castShadow ?? true;
    cluster.receiveShadow = options.receiveShadow ?? true;
    cluster.name = "wheels";
    parent.add(cluster);
  }

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createToyotaCommuterVanLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "Toyota Commuter Van look-dev lights";
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
  lights.userData.lightingFromPhoto = ["Key light: neutral white directional from [-3,7,5], intensity 2.2.", "Fill light: white directional from [5,3,-2], intensity 1.1.", "Environment light: neutral studio hemisphere and broad reflection cards.", "Exposure 1, ACESFilmicToneMapping, solid #808080 background.", "Contact shadow: absent, reference has no floor; review scene has no floor."];
  lights.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  return lights;
}

// PBR materials (clearcoat/iridescence/transmission/anisotropy) need an environment
// map to visually behave as intended — call this once per renderer and assign the
// result to scene.environment before rendering. No external HDR asset required.
export function createToyotaCommuterVanEnvironment(renderer: THREE.WebGLRenderer): THREE.Texture {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const texture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
  return texture;
}

// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameToyotaCommuterVanCamera(
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
export function createToyotaCommuterVanPresentationComposer(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  options: { dof?: boolean; bloom?: boolean; bloomStrength?: number; dofFocus?: number; dofAperture?: number } = {},
): EffectComposer {
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  if (options.dof) {
    composer.addPass(new BokehPass(scene, camera, {
      focus: options.dofFocus ?? 10.0,
      aperture: options.dofAperture ?? 0.0002,
      maxblur: 0.01,
    }));
  }
  if (options.bloom) {
    const size = new THREE.Vector2();
    renderer.getSize(size);
    composer.addPass(new UnrealBloomPass(size, options.bloomStrength ?? 0.4, 0.4, 0.85));
  }
  return composer;
}

export function configureToyotaCommuterVanRenderer(renderer: THREE.WebGLRenderer): void {
  // Load-bearing for view-dependent finishes (anodized / Doppler): without ACES + sRGB
  // the environment reflection reads flat/washed instead of a believable metal response.
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
}

export function createToyotaCommuterVanInspectControls(
  camera: THREE.Camera,
  domElement: HTMLElement,
): OrbitControls {
  // View-dependent finishes only read correctly once the user orbits — their color
  // comes from the environment reflection, not albedo, so free rotation matters here.
  const controls = new OrbitControls(camera, domElement);
  controls.enableDamping = true;
  controls.minDistance = 1.0;
  controls.maxDistance = 8.0;
  controls.autoRotate = false;
  return controls;
}

// Van-specific implementation of the independently authored vanGeometry contract.
// This adapter replaces primitive scaffold geometry only for the unlocked pass.
const VAN_SPEC = {"vanGeometry":{"formRevision2":{"roof":"Closed 19-vertex transverse rings at z=-2.53,-2.48,-2.32,-1.3,0,1.3,1.57,1.78,1.93,2.035; elliptical fore/aft crown roll-off removes abrupt flat brow.","wheels":"24-segment closed tyre lathe. Ten genuine 19mm-radius ventilation holes per 35mm-deep steel wheel. Manifold 12-sided raised center hub joins the inner cap boundary; no overlapping cap or internal wall. Planar vent annulus replaces the warped cap.","mirror":"Rounded 150x230x60mm housing centered at y=1.16m, mounted at x=+/-0.895m through a 47mm bracket. Clears cab seal.","front":"Wider 730x160mm four-slat grille, 370x150mm headlamps and amber corners wrapped along the rounded nose; dark lamp bezels. Closed rounded painted bumper with plate recess and paired vent inserts.","side":"2.18m sliding door rail at y=.925; vertical sliding-door handle; 19mm sill mouldings at y=.44/.59. Six shallow longitudinal roof ribs at x=+/-.4/.63. Conservative red/amber rear lamp stacks and rear handle (hidden-side layout inferred). Static painted-accessory batch groups these mouldings and bumper with AC pod to retain 12 draws; they move only with the root."},"finish":{"paint":"Split existing side-cap triangles at all six stripe boundaries; exact vertex-color regions without overlaid coincident surfaces.","weathering":"Three-octave continuous object-space chalk variation at 14-19 cells/m, elongated road-film streaks below 0.78 m; independent roughness modulation. Seeded approximation of aging, not exact photographed stains.","paintRoughness":0.62,"steelColor":"#AAAAAA","steelRoughness":0.52,"steelMetalness":0.55,"glazing":"Dark green weathered glazing with roughness 0.32, no redundant clearcoat lobe, environment intensity 0.35 and specular intensity 0.05. This art-directed rough/tinted approximation prevents direct-light white-out in the actual host. View-dependent rounded seat-back, dashboard and right-hand-drive steering-ring interior mapping; lighter front windscreen tint. Cabin depth is material parallax, not interior geometry; inferred seat arrangement confidence 0.35. Lamp colors bypass interior mapping.","steelAging":"Vertex color enabled for steel; scalar gray base multiplied by local gray hardware tint. Deterministic oxidation speckle, darker hub centers and six surface bolt marks per wheel. Independent roughness 0.52 and metalness 0.55; no baked illumination."},"size":[1.88,2.28,5.38],"bodyHalfWidth":0.87,"bodyBottom":0.31,"roofBase":1.91,"roofCrown":2.135,"frontBase":2.66,"frontRoof":1.98,"rear":-2.64,"archRadius":0.375,"wheelCenters":[1.64,-1.62],"wheelY":0.34,"pod":{"position":[0,2.175,-1.2],"size":[1.08,0.21,0.9]},"passengerWindows":[[-2.34,-0.72],[-0.6,0.83]],"cabWindow":[0.96,1.94],"windowBottom":1.17,"windowTop":1.81,"stripes":[{"y":0.83,"h":0.026,"color":"#A78585"},{"y":0.797,"h":0.018,"color":"#B6AD87"},{"y":0.769,"h":0.023,"color":"#7F9D97"}],"rearConfidence":0.45,"farSideConfidence":0.65,"frontCornerRetraction":0.17,"rearCornerRetraction":0.055,"formDetails":{"passengerDividerZ":[-1.52,0],"dividerWidth":0.014,"doorSeamZ":[0.9,-0.665],"doorSeamY":[0.4,1.075],"grilleSlats":3,"rimVents":{"count":6,"radius":0.028,"orbitRadius":0.145,"segments":8,"construction":"real through-holes in a closed steel extrusion"},"rimDepth":0.02,"bodyBevel":0.035,"bodyExtrusionDepth":1.67,"wipers":{"size":[0.53,0.014,0.013],"centerY":1.155,"centerX":0.38,"frontPlaneDepth":0.0205,"rollRadians":0.065,"construction":"conform to windshield plane above lower seal; back face meets glass outer depth 0.014"}},"structuralConstruction":{"sideSurface":"x = side * (0.872 - 0.023 * max(0, y - 1.1) / 0.81 + extrusionDepth); z follows authored window outline","glazingDepth":0.013,"sealWidth":0.016,"sealDepth":0.012,"cabOutlineZY":[[0.97,1.08],[2.24,1.08],[1.85,1.79],[0.97,1.79]],"cabCornerRadius":0.05,"windscreen":{"width":1.51,"height":0.7,"centerY":1.465,"cornerRadius":0.045,"depth":0.014,"topTaper":0.035,"frontPlane":"For each glass, seal and wiper vertex, barycentrically sample the frontmost actual body triangle at (x,y). z = bodySurfaceZ(x,y) - embedDepth + localExtrusionZ. This includes body bevel and corner retraction, eliminating the former 123-125 mm lower-edge air gap.","embedDepth":0.003,"gapTolerance":0.001,"attachmentEvidence":"windscreen-attachment.json: actual bundled lower-edge glass and seal ray measurements across their full straight runs and corner transition."},"rearGlazing":{"width":1.48,"height":0.61,"centerY":1.395,"z":-2.645,"depth":0.014},"mirrorHousing":{"size":[0.076,0.15,0.13],"centers":[[-0.91,0.97,2.15],[0.91,0.97,2.15]],"construction":"continuous closed housing, no overlapping bracket caps"},"rims":{"radius":0.215,"depth":0.014,"axis":"X","outerCenterX":0.897,"radialSegments":24},"headlampSize":[0.35,0.115,0.025],"batching":"Each glazing assembly remains independently named. Rubber seals, mirrors and grille share trim; fixed rims, brackets and handles share hardware. Painted bumper, ribs and sill mouldings share the painted-accessories batch with the roof AC. Four tyres are instanced."}},"componentTree":[{"id":"root","name":"Body shell","level":"macro","role":"body","importance":1,"confidence":1,"primitive":"extrude","topologyClass":"continuous-sculpt","topologyRationale":"Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.","geometryDescriptor":{"topologyIntent":"Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.","edgeTreatment":{"type":"bevel","bevelRadius":0.015,"segments":2},"deformationStack":[],"uvStrategy":"generated procedural coordinates","normalStrategy":"analytic roof normals and crease-preserving panel normals","vanAssembly":"root","profile2D":{"points":[[-2.64,0.31],[-1.995,0.31],[-1.995,0.3400000000000001],[-1.9877944801512115,0.41315887075604824],[-1.9664548246917326,0.48350628713690874],[-1.9318011046134547,0.5483388373823508],[-1.8851650429449553,0.6051650429449553],[-1.8283388373823508,0.6518011046134545],[-1.7635062871369087,0.6864548246917326],[-1.693158870756048,0.7077944801512115],[-1.62,0.7150000000000001],[-1.546841129243952,0.7077944801512115],[-1.4764937128630915,0.6864548246917326],[-1.4116611626176494,0.6518011046134545],[-1.3548349570550449,0.6051650429449553],[-1.3081988953865455,0.5483388373823508],[-1.2735451753082676,0.4835062871369087],[-1.2522055198487887,0.4131588707560482],[-1.245,0.34],[-1.245,0.31],[1.265,0.31],[1.265,0.3400000000000001],[1.2722055198487885,0.41315887075604824],[1.2935451753082674,0.48350628713690874],[1.3281988953865453,0.5483388373823508],[1.3748349570550447,0.6051650429449553],[1.4316611626176492,0.6518011046134545],[1.4964937128630913,0.6864548246917326],[1.566841129243952,0.7077944801512115],[1.64,0.7150000000000001],[1.7131588707560481,0.7077944801512115],[1.7835062871369085,0.6864548246917326],[1.8483388373823506,0.6518011046134545],[1.9051650429449554,0.6051650429449553],[1.9518011046134545,0.5483388373823508],[1.9864548246917324,0.4835062871369087],[2.0077944801512113,0.4131588707560482],[2.0149999999999997,0.34],[2.0149999999999997,0.31],[2.49,0.36],[2.63,0.72],[2.59,1.05],[1.98,1.91],[-2.49,1.91],[-2.64,1.73]],"depth":1.74}},"parent":null,"attachment":null,"dimensions":{"width":1,"height":1,"depth":1,"units":"metres","confidence":1},"transform":{"position":[0,0,0],"rotation":[0,0,0],"scale":[1,1,1]},"actionProfile":{"animationRole":"root","pivot":{"mode":"custom","localPosition":[0,0,0],"axis":[0,1,0],"confidence":1},"transformChannels":{"translate":true,"rotate":true,"scale":true,"bend":false,"twist":false,"detach":false,"visibility":true,"materialState":true},"sockets":[],"collider":{"type":"none"},"constraints":[],"destruction":{"breakable":false,"fractureGroup":"","seamRefs":[],"detachableFragments":[],"breakImpulse":0}},"material":"paint","materialLayers":["paint"],"deformations":[],"joints":[],"seams":[],"localFeatures":[{"id":"arch-clearance","kind":"hole","description":"Four real wheel-arch openings","confidence":0.9,"evidenceRefs":["full-object"],"geometryEffect":"Four real wheel-arch openings","materialEffect":"independent PBR response"},{"id":"triple-stripe","kind":"linework","description":"Muted red, yellow and green stripes follow lower side panels","confidence":0.95,"evidenceRefs":["full-object"],"geometryEffect":"Muted red, yellow and green stripes follow lower side panels","materialEffect":"vertex-colour region"},{"id":"sill-roadfilm","kind":"stain","description":"Grey-brown road film becomes stronger toward lower sill","confidence":0.85,"evidenceRefs":["full-object"],"geometryEffect":"Grey-brown road film becomes stronger toward lower sill","materialEffect":"vertex-colour region"}],"surfaceDetail":{"macroRoughness":0,"microRoughness":0,"bumpAmplitude":0,"normalPattern":"","displacementPattern":"","occlusionPattern":"","edgeWearPattern":"","notes":""},"evidenceRefs":["full-object"],"details":["Body shell reconstructed from the reference plate"],"fidelityTier":"blockout","colorMaterialRecipe":{"dominantAlbedo":"rgba(219, 222, 227, 1)","secondaryAlbedo":"rgba(219, 222, 227, 1)","materialClass":"metal","materialClassConfidence":1,"evidenceRefs":["full-object"],"notes":"Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}},{"id":"roof","name":"High roof crown","level":"macro","role":"body","importance":0.95,"confidence":0.95,"primitive":"extrude","topologyClass":"conforming-shell","topologyRationale":"Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.","geometryDescriptor":{"topologyIntent":"Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.","edgeTreatment":{"type":"bevel","bevelRadius":0.015,"segments":2},"deformationStack":[],"uvStrategy":"generated procedural coordinates","normalStrategy":"analytic roof normals and crease-preserving panel normals","vanAssembly":"roof","profile2D":{"points":[[-0.5,-0.5],[0.5,-0.5],[0.5,0.5],[-0.5,0.5]],"depth":0.05}},"parent":"root","attachment":null,"dimensions":{"width":1,"height":1,"depth":1,"units":"metres","confidence":0.95},"transform":{"position":[0,0,0],"rotation":[0,0,0],"scale":[1,1,1]},"actionProfile":{"animationRole":"static-part","pivot":{"mode":"custom","localPosition":[0,0,0],"axis":[0,1,0],"confidence":1},"transformChannels":{"translate":false,"rotate":false,"scale":false,"bend":false,"twist":false,"detach":false,"visibility":true,"materialState":true},"sockets":[],"collider":{"type":"none"},"constraints":[],"destruction":{"breakable":false,"fractureGroup":"","seamRefs":[],"detachableFragments":[],"breakImpulse":0}},"material":"paint","materialLayers":["paint"],"deformations":[],"joints":[],"seams":[],"localFeatures":[{"id":"roof-ribs","kind":"ridge","description":"Two longitudinal pressed roof ribs, 0.009 m relief","confidence":0.9,"evidenceRefs":["full-object"],"geometryEffect":"Two longitudinal pressed roof ribs, 0.009 m relief","materialEffect":"independent PBR response"},{"id":"roof-chalking","kind":"stain","description":"Low-amplitude pale mottling on sun-chalked roof","confidence":0.85,"evidenceRefs":["full-object"],"geometryEffect":"Low-amplitude pale mottling on sun-chalked roof","materialEffect":"vertex-colour region"}],"surfaceDetail":{"macroRoughness":0,"microRoughness":0,"bumpAmplitude":0,"normalPattern":"","displacementPattern":"","occlusionPattern":"","edgeWearPattern":"","notes":""},"evidenceRefs":["full-object"],"details":["High roof crown reconstructed from the reference plate"],"fidelityTier":"blockout","colorMaterialRecipe":{"dominantAlbedo":"rgba(219, 222, 227, 1)","secondaryAlbedo":"rgba(219, 222, 227, 1)","materialClass":"metal","materialClassConfidence":0.95,"evidenceRefs":["full-object"],"notes":"Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}},{"id":"ac-pod","name":"Painted accessories: roof AC, bumper, ribs and sill mouldings","level":"macro","role":"body","importance":0.85,"confidence":0.85,"primitive":"box","topologyClass":"assembled-solid","topologyRationale":"Discrete rigid manufactured assembly; batch its fixed details by material.","geometryDescriptor":{"topologyIntent":"Discrete rigid manufactured assembly; batch its fixed details by material.","edgeTreatment":{"type":"bevel","bevelRadius":0.015,"segments":2},"deformationStack":[],"uvStrategy":"generated procedural coordinates","normalStrategy":"analytic roof normals and crease-preserving panel normals","vanAssembly":"ac-pod"},"parent":"root","attachment":null,"dimensions":{"width":1,"height":1,"depth":1,"units":"metres","confidence":0.85},"transform":{"position":[0,0,0],"rotation":[0,0,0],"scale":[1,1,1]},"actionProfile":{"animationRole":"static-part","pivot":{"mode":"custom","localPosition":[0,0,0],"axis":[0,1,0],"confidence":1},"transformChannels":{"translate":false,"rotate":false,"scale":false,"bend":false,"twist":false,"detach":false,"visibility":true,"materialState":true},"sockets":[],"collider":{"type":"none"},"constraints":[],"destruction":{"breakable":false,"fractureGroup":"","seamRefs":[],"detachableFragments":[],"breakImpulse":0}},"material":"paint","materialLayers":["paint"],"deformations":[],"joints":[],"seams":[],"localFeatures":[{"id":"pod-rim","kind":"bevel","description":"Rounded low-profile AC housing with a dark base gasket","confidence":0.9,"evidenceRefs":["full-object"],"geometryEffect":"Rounded low-profile AC housing with a dark base gasket","materialEffect":"independent PBR response"}],"surfaceDetail":{"macroRoughness":0,"microRoughness":0,"bumpAmplitude":0,"normalPattern":"","displacementPattern":"","occlusionPattern":"","edgeWearPattern":"","notes":""},"evidenceRefs":["full-object"],"details":["Roof air conditioner reconstructed from the reference plate"],"fidelityTier":"blockout","colorMaterialRecipe":{"dominantAlbedo":"rgba(219, 222, 227, 1)","secondaryAlbedo":"rgba(219, 222, 227, 1)","materialClass":"metal","materialClassConfidence":0.85,"evidenceRefs":["full-object"],"notes":"Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}},{"id":"windscreen","name":"Front windscreen","level":"meso","role":"body","importance":0.98,"confidence":0.98,"primitive":"extrude","topologyClass":"conforming-shell","topologyRationale":"Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.","geometryDescriptor":{"topologyIntent":"Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.","edgeTreatment":{"type":"bevel","bevelRadius":0.015,"segments":2},"deformationStack":[],"uvStrategy":"generated procedural coordinates","normalStrategy":"analytic roof normals and crease-preserving panel normals","vanAssembly":"windscreen","profile2D":{"points":[[-0.5,-0.5],[0.5,-0.5],[0.5,0.5],[-0.5,0.5]],"depth":0.05}},"parent":"root","attachment":null,"dimensions":{"width":1,"height":1,"depth":1,"units":"metres","confidence":0.98},"transform":{"position":[0,0,0],"rotation":[0,0,0],"scale":[1,1,1]},"actionProfile":{"animationRole":"static-part","pivot":{"mode":"custom","localPosition":[0,0,0],"axis":[0,1,0],"confidence":1},"transformChannels":{"translate":false,"rotate":false,"scale":false,"bend":false,"twist":false,"detach":false,"visibility":true,"materialState":true},"sockets":[],"collider":{"type":"none"},"constraints":[],"destruction":{"breakable":false,"fractureGroup":"","seamRefs":[],"detachableFragments":[],"breakImpulse":0}},"material":"glass","materialLayers":["glass"],"deformations":[],"joints":[],"seams":[],"localFeatures":[{"id":"window-corners","kind":"bevel","description":"Rounded windscreen corners follow sloping cab plane","confidence":0.9,"evidenceRefs":["full-object"],"geometryEffect":"Rounded windscreen corners follow sloping cab plane","materialEffect":"independent PBR response"}],"surfaceDetail":{"macroRoughness":0,"microRoughness":0,"bumpAmplitude":0,"normalPattern":"","displacementPattern":"","occlusionPattern":"","edgeWearPattern":"","notes":""},"evidenceRefs":["full-object"],"details":["Front windscreen reconstructed from the reference plate"],"fidelityTier":"structural","colorMaterialRecipe":{"dominantAlbedo":"rgba(39, 55, 53, 1)","secondaryAlbedo":"rgba(39, 55, 53, 1)","materialClass":"glass","materialClassConfidence":0.98,"evidenceRefs":["full-object"],"notes":"Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}},{"id":"passenger-left","name":"Left passenger glazing","level":"meso","role":"body","importance":0.95,"confidence":0.95,"primitive":"extrude","topologyClass":"conforming-shell","topologyRationale":"Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.","geometryDescriptor":{"topologyIntent":"Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.","edgeTreatment":{"type":"bevel","bevelRadius":0.015,"segments":2},"deformationStack":[],"uvStrategy":"generated procedural coordinates","normalStrategy":"analytic roof normals and crease-preserving panel normals","vanAssembly":"passenger-left","profile2D":{"points":[[-0.5,-0.5],[0.5,-0.5],[0.5,0.5],[-0.5,0.5]],"depth":0.05}},"parent":"root","attachment":null,"dimensions":{"width":1,"height":1,"depth":1,"units":"metres","confidence":0.95},"transform":{"position":[0,0,0],"rotation":[0,0,0],"scale":[1,1,1]},"actionProfile":{"animationRole":"static-part","pivot":{"mode":"custom","localPosition":[0,0,0],"axis":[0,1,0],"confidence":1},"transformChannels":{"translate":false,"rotate":false,"scale":false,"bend":false,"twist":false,"detach":false,"visibility":true,"materialState":true},"sockets":[],"collider":{"type":"none"},"constraints":[],"destruction":{"breakable":false,"fractureGroup":"","seamRefs":[],"detachableFragments":[],"breakImpulse":0}},"material":"glass","materialLayers":["glass"],"deformations":[],"joints":[],"seams":[],"localFeatures":[{"id":"glass-gloss","kind":"gloss","description":"Dark green-grey glass with smooth specular reflection","confidence":0.85,"evidenceRefs":["full-object"],"geometryEffect":"Dark green-grey glass with smooth specular reflection","materialEffect":"independent PBR response"}],"surfaceDetail":{"macroRoughness":0,"microRoughness":0,"bumpAmplitude":0,"normalPattern":"","displacementPattern":"","occlusionPattern":"","edgeWearPattern":"","notes":""},"evidenceRefs":["full-object"],"details":["Left passenger glazing reconstructed from the reference plate"],"fidelityTier":"structural","colorMaterialRecipe":{"dominantAlbedo":"rgba(39, 55, 53, 1)","secondaryAlbedo":"rgba(39, 55, 53, 1)","materialClass":"glass","materialClassConfidence":0.95,"evidenceRefs":["full-object"],"notes":"Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}},{"id":"passenger-right","name":"Right passenger glazing","level":"meso","role":"body","importance":0.65,"confidence":0.65,"primitive":"extrude","topologyClass":"conforming-shell","topologyRationale":"Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.","geometryDescriptor":{"topologyIntent":"Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.","edgeTreatment":{"type":"bevel","bevelRadius":0.015,"segments":2},"deformationStack":[],"uvStrategy":"generated procedural coordinates","normalStrategy":"analytic roof normals and crease-preserving panel normals","vanAssembly":"passenger-right","profile2D":{"points":[[-0.5,-0.5],[0.5,-0.5],[0.5,0.5],[-0.5,0.5]],"depth":0.05}},"parent":"root","attachment":null,"dimensions":{"width":1,"height":1,"depth":1,"units":"metres","confidence":0.65},"transform":{"position":[0,0,0],"rotation":[0,0,0],"scale":[1,1,1]},"actionProfile":{"animationRole":"static-part","pivot":{"mode":"custom","localPosition":[0,0,0],"axis":[0,1,0],"confidence":1},"transformChannels":{"translate":false,"rotate":false,"scale":false,"bend":false,"twist":false,"detach":false,"visibility":true,"materialState":true},"sockets":[],"collider":{"type":"none"},"constraints":[],"destruction":{"breakable":false,"fractureGroup":"","seamRefs":[],"detachableFragments":[],"breakImpulse":0}},"material":"glass","materialLayers":["glass"],"deformations":[],"joints":[],"seams":[],"localFeatures":[],"surfaceDetail":{"macroRoughness":0,"microRoughness":0,"bumpAmplitude":0,"normalPattern":"","displacementPattern":"","occlusionPattern":"","edgeWearPattern":"","notes":""},"evidenceRefs":["full-object"],"details":["Right passenger glazing reconstructed from the reference plate"],"fidelityTier":"structural","colorMaterialRecipe":{"dominantAlbedo":"rgba(39, 55, 53, 1)","secondaryAlbedo":"rgba(39, 55, 53, 1)","materialClass":"glass","materialClassConfidence":0.65,"evidenceRefs":["full-object"],"notes":"Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}},{"id":"cab-left","name":"Left cab glazing","level":"meso","role":"body","importance":0.9,"confidence":0.9,"primitive":"extrude","topologyClass":"conforming-shell","topologyRationale":"Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.","geometryDescriptor":{"topologyIntent":"Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.","edgeTreatment":{"type":"bevel","bevelRadius":0.015,"segments":2},"deformationStack":[],"uvStrategy":"generated procedural coordinates","normalStrategy":"analytic roof normals and crease-preserving panel normals","vanAssembly":"cab-left","profile2D":{"points":[[-0.5,-0.5],[0.5,-0.5],[0.5,0.5],[-0.5,0.5]],"depth":0.05}},"parent":"root","attachment":null,"dimensions":{"width":1,"height":1,"depth":1,"units":"metres","confidence":0.9},"transform":{"position":[0,0,0],"rotation":[0,0,0],"scale":[1,1,1]},"actionProfile":{"animationRole":"static-part","pivot":{"mode":"custom","localPosition":[0,0,0],"axis":[0,1,0],"confidence":1},"transformChannels":{"translate":false,"rotate":false,"scale":false,"bend":false,"twist":false,"detach":false,"visibility":true,"materialState":true},"sockets":[],"collider":{"type":"none"},"constraints":[],"destruction":{"breakable":false,"fractureGroup":"","seamRefs":[],"detachableFragments":[],"breakImpulse":0}},"material":"glass","materialLayers":["glass"],"deformations":[],"joints":[],"seams":[],"localFeatures":[],"surfaceDetail":{"macroRoughness":0,"microRoughness":0,"bumpAmplitude":0,"normalPattern":"","displacementPattern":"","occlusionPattern":"","edgeWearPattern":"","notes":""},"evidenceRefs":["full-object"],"details":["Left cab glazing reconstructed from the reference plate"],"fidelityTier":"structural","colorMaterialRecipe":{"dominantAlbedo":"rgba(39, 55, 53, 1)","secondaryAlbedo":"rgba(39, 55, 53, 1)","materialClass":"glass","materialClassConfidence":0.9,"evidenceRefs":["full-object"],"notes":"Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}},{"id":"cab-right","name":"Right cab glazing","level":"meso","role":"body","importance":0.65,"confidence":0.65,"primitive":"extrude","topologyClass":"conforming-shell","topologyRationale":"Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.","geometryDescriptor":{"topologyIntent":"Continuous image-derived contour; custom loft/extrusion and arch cuts preserve the volume and openings.","edgeTreatment":{"type":"bevel","bevelRadius":0.015,"segments":2},"deformationStack":[],"uvStrategy":"generated procedural coordinates","normalStrategy":"analytic roof normals and crease-preserving panel normals","vanAssembly":"cab-right","profile2D":{"points":[[-0.5,-0.5],[0.5,-0.5],[0.5,0.5],[-0.5,0.5]],"depth":0.05}},"parent":"root","attachment":null,"dimensions":{"width":1,"height":1,"depth":1,"units":"metres","confidence":0.65},"transform":{"position":[0,0,0],"rotation":[0,0,0],"scale":[1,1,1]},"actionProfile":{"animationRole":"static-part","pivot":{"mode":"custom","localPosition":[0,0,0],"axis":[0,1,0],"confidence":1},"transformChannels":{"translate":false,"rotate":false,"scale":false,"bend":false,"twist":false,"detach":false,"visibility":true,"materialState":true},"sockets":[],"collider":{"type":"none"},"constraints":[],"destruction":{"breakable":false,"fractureGroup":"","seamRefs":[],"detachableFragments":[],"breakImpulse":0}},"material":"glass","materialLayers":["glass"],"deformations":[],"joints":[],"seams":[],"localFeatures":[],"surfaceDetail":{"macroRoughness":0,"microRoughness":0,"bumpAmplitude":0,"normalPattern":"","displacementPattern":"","occlusionPattern":"","edgeWearPattern":"","notes":""},"evidenceRefs":["full-object"],"details":["Right cab glazing reconstructed from the reference plate"],"fidelityTier":"structural","colorMaterialRecipe":{"dominantAlbedo":"rgba(39, 55, 53, 1)","secondaryAlbedo":"rgba(39, 55, 53, 1)","materialClass":"glass","materialClassConfidence":0.65,"evidenceRefs":["full-object"],"notes":"Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}},{"id":"rear-glazing","name":"Rear glazing","level":"meso","role":"body","importance":0.45,"confidence":0.45,"primitive":"box","topologyClass":"assembled-solid","topologyRationale":"Discrete rigid manufactured assembly; batch its fixed details by material.","geometryDescriptor":{"topologyIntent":"Discrete rigid manufactured assembly; batch its fixed details by material.","edgeTreatment":{"type":"bevel","bevelRadius":0.015,"segments":2},"deformationStack":[],"uvStrategy":"generated procedural coordinates","normalStrategy":"analytic roof normals and crease-preserving panel normals","vanAssembly":"rear-glazing"},"parent":"root","attachment":null,"dimensions":{"width":1,"height":1,"depth":1,"units":"metres","confidence":0.45},"transform":{"position":[0,0,0],"rotation":[0,0,0],"scale":[1,1,1]},"actionProfile":{"animationRole":"static-part","pivot":{"mode":"custom","localPosition":[0,0,0],"axis":[0,1,0],"confidence":1},"transformChannels":{"translate":false,"rotate":false,"scale":false,"bend":false,"twist":false,"detach":false,"visibility":true,"materialState":true},"sockets":[],"collider":{"type":"none"},"constraints":[],"destruction":{"breakable":false,"fractureGroup":"","seamRefs":[],"detachableFragments":[],"breakImpulse":0}},"material":"glass","materialLayers":["glass"],"deformations":[],"joints":[],"seams":[],"localFeatures":[],"surfaceDetail":{"macroRoughness":0,"microRoughness":0,"bumpAmplitude":0,"normalPattern":"","displacementPattern":"","occlusionPattern":"","edgeWearPattern":"","notes":""},"evidenceRefs":["full-object"],"details":["Rear glazing reconstructed from the reference plate"],"fidelityTier":"structural","colorMaterialRecipe":{"dominantAlbedo":"rgba(39, 55, 53, 1)","secondaryAlbedo":"rgba(39, 55, 53, 1)","materialClass":"glass","materialClassConfidence":0.45,"evidenceRefs":["full-object"],"notes":"Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}},{"id":"trim","name":"Window seals, mirrors, grille and seams","level":"meso","role":"body","importance":0.9,"confidence":0.9,"primitive":"box","topologyClass":"assembled-solid","topologyRationale":"Discrete rigid manufactured assembly; batch its fixed details by material.","geometryDescriptor":{"topologyIntent":"Discrete rigid manufactured assembly; batch its fixed details by material.","edgeTreatment":{"type":"bevel","bevelRadius":0.015,"segments":2},"deformationStack":[],"uvStrategy":"generated procedural coordinates","normalStrategy":"analytic roof normals and crease-preserving panel normals","vanAssembly":"trim"},"parent":"root","attachment":null,"dimensions":{"width":1,"height":1,"depth":1,"units":"metres","confidence":0.9},"transform":{"position":[0,0,0],"rotation":[0,0,0],"scale":[1,1,1]},"actionProfile":{"animationRole":"static-part","pivot":{"mode":"custom","localPosition":[0,0,0],"axis":[0,1,0],"confidence":1},"transformChannels":{"translate":false,"rotate":false,"scale":false,"bend":false,"twist":false,"detach":false,"visibility":true,"materialState":true},"sockets":[],"collider":{"type":"none"},"constraints":[],"destruction":{"breakable":false,"fractureGroup":"","seamRefs":[],"detachableFragments":[],"breakImpulse":0}},"material":"rubber","materialLayers":["rubber"],"deformations":[],"joints":[],"seams":[],"localFeatures":[{"id":"sliding-door-seam","kind":"seam","description":"Cab door and sliding-door outlines, thin dark recessed-looking seams","confidence":0.9,"evidenceRefs":["full-object"],"geometryEffect":"Cab door and sliding-door outlines, thin dark recessed-looking seams","materialEffect":"independent PBR response"},{"id":"window-dividers","kind":"linework","description":"Narrow upright dividers within long passenger glazing","confidence":0.9,"evidenceRefs":["full-object"],"geometryEffect":"Narrow upright dividers within long passenger glazing","materialEffect":"vertex-colour region"},{"id":"wipers","kind":"ridge","description":"Two wipers seated at the lower windscreen","confidence":0.85,"evidenceRefs":["full-object"],"geometryEffect":"Two wipers seated at the lower windscreen","materialEffect":"independent PBR response"},{"id":"grille-slats","kind":"ridge","description":"Six horizontal grille slats below nose","confidence":0.9,"evidenceRefs":["full-object"],"geometryEffect":"Six horizontal grille slats below nose","materialEffect":"independent PBR response"}],"surfaceDetail":{"macroRoughness":0,"microRoughness":0,"bumpAmplitude":0,"normalPattern":"","displacementPattern":"","occlusionPattern":"","edgeWearPattern":"","notes":""},"evidenceRefs":["full-object"],"details":["Window seals, mirrors, grille and seams reconstructed from the reference plate"],"fidelityTier":"structural","colorMaterialRecipe":{"dominantAlbedo":"rgba(52, 54, 51, 1)","secondaryAlbedo":"rgba(52, 54, 51, 1)","materialClass":"rubber","materialClassConfidence":0.9,"evidenceRefs":["full-object"],"notes":"Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}},{"id":"hardware","name":"Steel rims, handles and light lenses","level":"meso","role":"body","importance":0.85,"confidence":0.85,"primitive":"box","topologyClass":"assembled-solid","topologyRationale":"Discrete rigid manufactured assembly; batch its fixed details by material.","geometryDescriptor":{"topologyIntent":"Discrete rigid manufactured assembly; batch its fixed details by material.","edgeTreatment":{"type":"bevel","bevelRadius":0.015,"segments":2},"deformationStack":[],"uvStrategy":"generated procedural coordinates","normalStrategy":"analytic roof normals and crease-preserving panel normals","vanAssembly":"hardware"},"parent":"root","attachment":null,"dimensions":{"width":1,"height":1,"depth":1,"units":"metres","confidence":0.85},"transform":{"position":[0,0,0],"rotation":[0,0,0],"scale":[1,1,1]},"actionProfile":{"animationRole":"static-part","pivot":{"mode":"custom","localPosition":[0,0,0],"axis":[0,1,0],"confidence":1},"transformChannels":{"translate":false,"rotate":false,"scale":false,"bend":false,"twist":false,"detach":false,"visibility":true,"materialState":true},"sockets":[],"collider":{"type":"none"},"constraints":[],"destruction":{"breakable":false,"fractureGroup":"","seamRefs":[],"detachableFragments":[],"breakImpulse":0}},"material":"steel","materialLayers":["steel"],"deformations":[],"joints":[],"seams":[],"localFeatures":[{"id":"rim-fasteners","kind":"fastener","description":"Six radial lug fasteners on each of four steel wheels","confidence":0.85,"evidenceRefs":["full-object"],"geometryEffect":"Six radial lug fasteners on each of four steel wheels","materialEffect":"independent PBR response"},{"id":"rim-vents","kind":"hole","description":"Ten small dark ventilation recesses around each steel wheel","confidence":0.8,"evidenceRefs":["full-object"],"geometryEffect":"Ten small dark ventilation recesses around each steel wheel","materialEffect":"independent PBR response"},{"id":"handles","kind":"bevel","description":"Horizontal chrome cab handles and vertical sliding-door handle","confidence":0.85,"evidenceRefs":["full-object"],"geometryEffect":"Horizontal chrome cab handles and vertical sliding-door handle","materialEffect":"independent PBR response"},{"id":"tail-lenses","kind":"linework","description":"Conservative small amber/red rear lenses; hidden layout inferred","confidence":0.45,"evidenceRefs":["full-object"],"geometryEffect":"Conservative small amber/red rear lenses; hidden layout inferred","materialEffect":"vertex-colour region"}],"surfaceDetail":{"macroRoughness":0.52,"microRoughness":0,"bumpAmplitude":0.0025,"normalPattern":"Analytic radial wheel-lip Gaussian at radius .197m and width .008m, differentiated in the shader and applied to the shading normal. Geometry and silhouette unchanged.","displacementPattern":"","occlusionPattern":"","edgeWearPattern":"Neutral aged steel with subtle oxidation speckle, darker hub centers and six radial surface fastener marks.","notes":"Source wheel rim zoom and controlled grazing renders. Normal relief is independent of albedo; no baked light, AO, or copied proxy material."},"evidenceRefs":["full-object"],"details":["Steel rims, handles and light lenses reconstructed from the reference plate"],"fidelityTier":"structural","colorMaterialRecipe":{"dominantAlbedo":"rgba(133, 135, 131, 1)","secondaryAlbedo":"rgba(133, 135, 131, 1)","materialClass":"metal","materialClassConfidence":0.85,"evidenceRefs":["full-object"],"notes":"Physical parameters remain scalars. Pixel extraction is evidence only; geometry carries visible relief and colour regions."}}],"repetitionSystems":[{"id":"wheels","name":"Four road wheels","level":"macro","parent":"root","count":4,"primitive":"torus","material":"rubber","buildsGeometry":true,"instanceScale":[1,1,1],"placement":{"mode":"explicit","positions":[[-0.79,0.34,1.64],[0.79,0.34,1.64],[-0.79,0.34,-1.62],[0.79,0.34,-1.62]],"axis":[1,0,0]},"instances":[{"position":[-0.79,0.34,1.64]},{"position":[0.79,0.34,1.64]},{"position":[-0.79,0.34,-1.62]},{"position":[0.79,0.34,-1.62]}],"geometry":{"outerRadius":0.34,"innerRadius":0.2,"width":0.19,"radialSegments":32,"profileSegments":8,"latheProfile":[[0,-0.095],[0.19,-0.095],[0.23,-0.095],[0.3,-0.086],[0.338,-0.03],[0.34,0.03],[0.3,0.086],[0.23,0.095],[0.19,0.095],[0,0.095]],"notes":"Closed tyre/hub cross-section; centre closes the wheel volume in the macro pass. Rim relief belongs to the subsequent hardware pass."},"evidenceRefs":["full-object"],"notes":"Static wheel set; repeated lug and vent details are batched into hardware geometry."}],"assumptions":["Static parked minibus; fixed wheels and doors; root pivot only, zero sockets, no destruction groups.","Rear and hidden-side details are approximate. Meshy is reference evidence only.","All custom geometry operations below are independently authored from the image; no proxy vertices, topology or materials enter the factory."]};

function vanShape(points: number[][]): THREE.Shape {
  const shape=new THREE.Shape();points.forEach(([x,y],i)=>i?shape.lineTo(x,y):shape.moveTo(x,y));shape.closePath();return shape;
}
function vanExtrude(points:number[][],depth:number,bevel=0):THREE.BufferGeometry {
  return new THREE.ExtrudeGeometry(vanShape(points),{depth,bevelEnabled:bevel>0,bevelThickness:bevel,bevelSize:bevel,bevelSegments:2,curveSegments:12,steps:1});
}
function vanRoundedRect(w:number,h:number,r:number):number[][] {
 const a:number[][]=[];for(const [x,y,start] of [[w/2-r,h/2-r,0],[-w/2+r,h/2-r,90],[-w/2+r,-h/2+r,180],[w/2-r,-h/2+r,270]])for(let i=0;i<=4;i++){const t=(start+i*90/4)*Math.PI/180;a.push([x+r*Math.cos(t),y+r*Math.sin(t)]);}return a;
}
function vanColors(g:THREE.BufferGeometry,color:string){const c=new THREE.Color(color),n=g.getAttribute('position').count,arr=new Float32Array(n*3);for(let i=0;i<n;i++)c.toArray(arr,i*3);g.setAttribute('color',new THREE.BufferAttribute(arr,3));return g;}
function vanMerge(parts:THREE.BufferGeometry[]):THREE.BufferGeometry {
 const ps:number[]=[],ns:number[]=[],cs:number[]=[];
 for(let g of parts){if(g.index)g=g.toNonIndexed();if(!g.getAttribute('normal'))g.computeVertexNormals();if(!g.getAttribute('color'))vanColors(g,'#ffffff');ps.push(...Array.from(g.getAttribute('position').array));ns.push(...Array.from(g.getAttribute('normal').array));cs.push(...Array.from(g.getAttribute('color').array));}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(ps,3));g.setAttribute('normal',new THREE.Float32BufferAttribute(ns,3));g.setAttribute('color',new THREE.Float32BufferAttribute(cs,3));return g;
}
function vanBox(size:number[],pos:number[],color='#ffffff',rotation:number[]=[0,0,0]){const g=new THREE.BoxGeometry(...size as [number,number,number]);g.rotateX(rotation[0]);g.rotateY(rotation[1]);g.rotateZ(rotation[2]);g.translate(...pos as [number,number,number]);return vanColors(g,color);}
function vanRing(points:number[][],width:number,depth=.012){
 const cx=points.reduce((a,p)=>a+p[0],0)/points.length,cy=points.reduce((a,p)=>a+p[1],0)/points.length;
 const wx=Math.max(...points.map(p=>Math.abs(p[0]-cx))),wy=Math.max(...points.map(p=>Math.abs(p[1]-cy)));
 const outer=points.map(([x,y])=>[cx+(x-cx)*(1+width/wx),cy+(y-cy)*(1+width/wy)]);
 const shape=vanShape(outer),hole=new THREE.Path();points.slice().reverse().forEach(([x,y],i)=>i?hole.lineTo(x,y):hole.moveTo(x,y));hole.closePath();shape.holes.push(hole);
 return new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:false,curveSegments:4,steps:1});
}
function vanRoundPolygon(points:number[][],r=.05){const out:number[][]=[];points.forEach((p,i)=>{const prev=points[(i+points.length-1)%points.length],next=points[(i+1)%points.length];const a=prev.map((x,k)=>p[k]+(x-p[k])*r/Math.hypot(prev[0]-p[0],prev[1]-p[1]));const b=next.map((x,k)=>p[k]+(x-p[k])*r/Math.hypot(next[0]-p[0],next[1]-p[1]));for(let j=0;j<=4;j++){const t=j/4;out.push(p.map((x,k)=>(1-t)*(1-t)*a[k]+2*(1-t)*t*x+t*t*b[k]));}});return out;}
function vanSide(g:THREE.BufferGeometry,s:number){const p=g.getAttribute('position');for(let i=0;i<p.count;i++){const y=p.getY(i);p.setXYZ(i,s*(.872-.023*Math.max(0,y-1.1)/.81+p.getZ(i)),y,-s*p.getX(i));}g.computeVertexNormals();return g;}
function vanFrontProjector(body:THREE.BufferGeometry,embedDepth:number){
 // Fit attached front parts to the ACTUAL beveled/recessed shell, not another plane.
 const p=body.getAttribute('position'),index=body.index,triangles:number[][]=[];
 for(let i=0;i<(index?.count??p.count);i+=3){const ids=[0,1,2].map(j=>index?index.getX(i+j):i+j),v=ids.flatMap(j=>[p.getX(j),p.getY(j),p.getZ(j)]);
  const [ax,ay,,bx,by,,cx,cy]=v,den=(by-cy)*(ax-cx)+(cx-bx)*(ay-cy);if(Math.abs(den)>1e-10)triangles.push([...v,den]);}
 const cache=new Map<string,number>();
 return (g:THREE.BufferGeometry)=>{const q=g.getAttribute('position');for(let i=0;i<q.count;i++){const x=q.getX(i),y=q.getY(i),key=x+','+y;let z=cache.get(key);
  if(z===undefined){z=-Infinity;for(const [ax,ay,az,bx,by,bz,cx,cy,cz,den] of triangles){const a=((by-cy)*(x-cx)+(cx-bx)*(y-cy))/den,b=((cy-ay)*(x-cx)+(ax-cx)*(y-cy))/den,c=1-a-b;if(Math.min(a,b,c)>=-1e-6)z=Math.max(z,a*az+b*bz+c*cz);}if(!Number.isFinite(z))throw Error('Unsupported windshield point '+key);cache.set(key,z);}
  q.setZ(i,z-embedDepth+q.getZ(i));}g.computeVertexNormals();return g;};
}
function vanNose(g:THREE.BufferGeometry){const p=g.getAttribute('position');for(let i=0;i<p.count;i++)p.setZ(i,p.getZ(i)-.19*Math.pow(Math.abs(p.getX(i))/.85,4));g.computeVertexNormals();return g;}
function vanRoof(){
 const zs=[-2.53,-2.48,-2.32,-1.3,0,1.30,1.57,1.78,1.93,2.035],ps:number[]=[],ix:number[]=[];
 const n=19;
 zs.forEach((z,j)=>{const factor=z>1.3?Math.sqrt(Math.max(.015,1-Math.pow((z-1.3)/.745,2))):z< -2.32?Math.sqrt(Math.max(.15,1-Math.pow((z+2.32)/.235,2))):1;
  const pts=[[-.853,1.885],[.853,1.885]];for(let i=0;i<=16;i++){const t=i*Math.PI/16;pts.push([.853*Math.cos(t),1.91+.205*Math.sin(t)*factor]);}
  for(const [x,y] of pts)ps.push(x,y,z-(z>1.3?.08*Math.pow(Math.abs(x)/.853,4)*(z-1.3)/.735:0));
  if(j)for(let i=0;i<n;i++){const a=(j-1)*n+i,b=(j-1)*n+(i+1)%n,c=j*n+i,d=j*n+(i+1)%n;ix.push(a,b,c,b,d,c);}
 });
 for(const j of [0,zs.length-1]){const center=ps.length/3;ps.push(0,1.91,zs[j]);for(let i=0;i<n;i++){const a=j*n+i,b=j*n+(i+1)%n;j?ix.push(center,a,b):ix.push(center,b,a);}}
 const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(ps,3));g.setIndex(ix);g.computeVertexNormals();return vanColors(g,'#DBDEE3');
}
function vanPaintBands(source:THREE.BufferGeometry,stripes:any[]){
 const g=source.index?source.toNonIndexed():source,p=g.getAttribute('position'),n=g.getAttribute('normal'),positions:number[]=[],normals:number[]=[],colors:number[]=[];
 const cuts=stripes.flatMap(s=>[s.y-s.h/2,s.y+s.h/2]).sort((a,b)=>a-b);
 const clip=(poly:number[][],cut:number,above:boolean)=>{const out:number[][]=[];for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length],ia=above?a[1]>=cut:a[1]<=cut,ib=above?b[1]>=cut:b[1]<=cut;if(ia)out.push(a);if(ia!==ib){const t=(cut-a[1])/(b[1]-a[1]);out.push(a.map((x,k)=>x+t*(b[k]-x)));}}return out;};
 for(let i=0;i<p.count;i+=3){let polys=[Array.from({length:3},(_,j)=>[p.getX(i+j),p.getY(i+j),p.getZ(i+j),n.getX(i+j),n.getY(i+j),n.getZ(i+j)])];const side=Math.abs(n.getX(i))>.9;
  if(side)for(const cut of cuts){polys=polys.flatMap(poly=>{if(Math.min(...poly.map(v=>v[1]))>=cut||Math.max(...poly.map(v=>v[1]))<=cut)return[poly];return[clip(poly,cut,false),clip(poly,cut,true)].filter(x=>x.length>=3);});}
  for(const poly of polys){const y=poly.reduce((a,v)=>a+v[1],0)/poly.length,stripe=side?stripes.find(s=>Math.abs(y-s.y)<s.h/2+1e-8):null,c=new THREE.Color(stripe?.color??'#DBDEE3');for(let j=1;j<poly.length-1;j++)for(const v of [poly[0],poly[j],poly[j+1]]){positions.push(...v.slice(0,3));normals.push(...v.slice(3));colors.push(c.r,c.g,c.b);}}
 }
 const out=new THREE.BufferGeometry();out.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));out.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));out.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));return out;
}

export function createObjectModel(spec:any=VAN_SPEC, options:ProceduralModelOptions={}):THREE.Group {
 const root=createToyotaCommuterVanModel(options);
 const runtime=root.userData.sculptRuntime;
 const v=spec?.vanGeometry??VAN_SPEC.vanGeometry;
 const present=runtime.meshes as Record<string,THREE.Mesh>;
 const paint=(present.root.material as THREE.MeshStandardMaterial);paint.vertexColors=true;paint.color.set('#ffffff');paint.roughness=.62;
 paint.onBeforeCompile=(shader)=>{
  shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vVanPosition;').replace('#include <begin_vertex>','#include <begin_vertex>\nvVanPosition=position;');
  shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
varying vec3 vVanPosition;
float vanHash(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}
float vanNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(mix(vanHash(i),vanHash(i+vec3(1,0,0)),f.x),mix(vanHash(i+vec3(0,1,0)),vanHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(vanHash(i+vec3(0,0,1)),vanHash(i+vec3(1,0,1)),f.x),mix(vanHash(i+vec3(0,1,1)),vanHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
float vanFbm(vec3 p){return .57*vanNoise(p)+.28*vanNoise(p*2.13)+.15*vanNoise(p*4.31);}`);
  shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
float cloud=vanFbm(vVanPosition*vec3(19.0,14.0,16.0));
float streak=vanFbm(vVanPosition*vec3(48.0,2.0,43.0));
float grime=(1.0-smoothstep(.31,.78,vVanPosition.y))*(.12+.38*streak);
float chalk=mix(.90,.78,smoothstep(1.8,2.0,vVanPosition.y))+.12*smoothstep(.25,.72,cloud);
diffuseColor.rgb*=chalk*(1.0-grime);
diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(.79,.73,.61),grime*.35);`);
  shader.fragmentShader=shader.fragmentShader.replace('#include <roughnessmap_fragment>','#include <roughnessmap_fragment>\nroughnessFactor=clamp(roughnessFactor+0.06*sin(vVanPosition.z*27.0)*sin(vVanPosition.y*39.0)+0.10*(1.0-smoothstep(0.32,0.65,vVanPosition.y)),0.4,0.9);');
 };paint.customProgramCacheKey=()=> 'commuter-paint-v2';
 const replace=(id:string,g:THREE.BufferGeometry)=>{const m=present[id];if(!m)return; m.geometry.dispose();m.geometry=g;m.position.set(0,0,0);m.rotation.set(0,0,0);m.scale.set(1,1,1);m.name=id;m.userData.componentId=id;const n=runtime.nodes[id];if(n){n.position.set(0,0,0);n.rotation.set(0,0,0);n.scale.set(1,1,1);n.name=id==='root'?'root-pivot':id+'-assembly';if(id!=='root'){delete n.userData.pivot;n.userData.animationRole='static-part';}}};
 // Side-profile extrusion contains true arch cut-outs. Beveled caps roll the body corners.
 const bodyPoints=VAN_SPEC.componentTree.find((c:any)=>c.id==='root').geometryDescriptor.profile2D.points.map(([z,y]:number[])=>[-z,y]);
 const body=vanExtrude(bodyPoints,1.67,.035);const bp=body.getAttribute('position');
 for(let i=0;i<bp.count;i++){let longitudinal=-bp.getX(i);const y=bp.getY(i),x=bp.getZ(i)-.835;const taper=1-.022*Math.max(0,y-1.10)/.81;if(longitudinal>2.10)longitudinal-=(v.frontCornerRetraction??0)*Math.pow(Math.abs(x)/.87,4)*Math.min(1,(longitudinal-2.1)/.4);if(longitudinal< -2.4)longitudinal+=(v.rearCornerRetraction??0)*Math.pow(Math.abs(x)/.87,4);bp.setXYZ(i,x*taper,y,longitudinal);}
 body.computeVertexNormals();replace('root',vanPaintBands(body,v.stripes));
 // Roof uses a continuous rounded transverse section, not a rectangular slab.
 replace('roof',vanRoof());
 const pod=vanExtrude(vanRoundedRect(1.04,.87,.14),.135,.025);pod.rotateX(-Math.PI/2);pod.translate(0,2.12,-1.20);vanColors(pod,'#DBDEE3');replace('ac-pod',pod);
 const wheels=root.getObjectByName('wheels') as THREE.InstancedMesh;
 if(wheels){wheels.geometry.dispose();const profile=VAN_SPEC.repetitionSystems[0].geometry.latheProfile;wheels.geometry=new THREE.LatheGeometry(profile.map(([r,y]:number[])=>new THREE.Vector2(r,y)),24);wheels.geometry.rotateZ(Math.PI/2);for(let i=0;i<4;i++){const p=VAN_SPEC.repetitionSystems[0].instances[i].position;wheels.setMatrixAt(i,new THREE.Matrix4().makeTranslation(...p as [number,number,number]));}wheels.instanceMatrix.needsUpdate=true;wheels.userData.componentId='wheels';}
 if(present.windscreen){
  const vanFront=vanFrontProjector(present.root.geometry,v.structuralConstruction.windscreen.embedDepth);
  const trim:THREE.BufferGeometry[]=[],metal:THREE.BufferGeometry[]=[];
  for(const s of [-1,1]){
   const passenger:THREE.BufferGeometry[]=[];
   for(const [za,zb] of v.passengerWindows){
    const points=vanRoundedRect(zb-za,v.windowTop-v.windowBottom,.06).map(([u,y])=>[u-s*(za+zb)/2,y+(v.windowTop+v.windowBottom)/2]);
    passenger.push(vanSide(vanExtrude(points,.013),s));trim.push(vanSide(vanRing(points,.016),s));
   }
   replace(s<0?'passenger-left':'passenger-right',vanMerge(passenger));
   const cab=vanRoundPolygon([[.97,1.08],[2.24,1.08],[1.85,1.79],[.97,1.79]]).map(([z,y])=>[-s*z,y]);
   if(s>0)cab.reverse();replace(s<0?'cab-left':'cab-right',vanSide(vanExtrude(cab,.013),s));trim.push(vanSide(vanRing(cab,.016),s));
   // Mirrors are outside the silhouette and join the cab through a short bracket.
   const mirror=vanExtrude(vanRoundedRect(.15,.23,.025),.06);mirror.rotateY(s*Math.PI/2);mirror.translate(s*.895,1.16,2.15);trim.push(mirror);
   metal.push(vanBox([.047,.025,.03],[s*.881,1.065,2.14],'#3d4440'));
   for(const z of v.wheelCenters){
    const shape=new THREE.Shape();for(let i=0;i<=24;i++){const a=i*Math.PI/12;i?shape.lineTo(.215*Math.cos(a),.215*Math.sin(a)):shape.moveTo(.215,0);}shape.closePath();
    for(let i=0;i<10;i++){const a=i*Math.PI/5,h=new THREE.Path(),cx=.152*Math.cos(a),cy=.152*Math.sin(a);for(let j=0;j<=5;j++){const t=-j*Math.PI*2/5;j?h.lineTo(cx+.019*Math.cos(t),cy+.019*Math.sin(t)):h.moveTo(cx+.019,cy);}h.closePath();shape.holes.push(h);}
    const centerHole=new THREE.Path();for(let i=0;i<=12;i++){const a=-i*Math.PI/6;i?centerHole.lineTo(.09*Math.cos(a),.09*Math.sin(a)):centerHole.moveTo(.09,0);}centerHole.closePath();shape.holes.push(centerHole);
    const raw=new THREE.ExtrudeGeometry(shape,{depth:.035,bevelEnabled:false,steps:1}),rp=raw.getAttribute('position'),vertices:number[]=[];
    // Open the inner cylindrical wall, then connect the raised hub to its boundary.
    for(let i=0;i<rp.count;i+=3){const radii=[0,1,2].map(j=>Math.hypot(rp.getX(i+j),rp.getY(i+j)));if(radii.every(r=>Math.abs(r-.09)<1e-5))continue;for(let j=0;j<3;j++)vertices.push(rp.getX(i+j),rp.getY(i+j),rp.getZ(i+j));}
    const ring=(i:number,r:number,d:number)=>[r*Math.cos(i*Math.PI/6),r*Math.sin(i*Math.PI/6),d];
    for(let i=0;i<12;i++){const a=ring(i,.09,.035),b=ring(i+1,.09,.035),c=ring(i,.07,.064),d=ring(i+1,.07,.064);vertices.push(...a,...b,...c,...b,...d,...c,0,0,.064,...c,...d,0,0,0,...ring(i+1,.09,0),...ring(i,.09,0));}
    const rim=new THREE.BufferGeometry();rim.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));rim.computeVertexNormals();rim.rotateY(s*Math.PI/2);rim.translate(s*.885,.34,z);metal.push(vanColors(rim,'#B0ACA7'));
   }
   for(const z of [-1.52,0])trim.push(vanBox([.012,v.windowTop-v.windowBottom-.035,.014],[s*.882,(v.windowTop+v.windowBottom)/2,z]));
   for(const z of [.90,-.665])trim.push(vanBox([.01,.675,.006],[s*.89,.7375,z]));
   metal.push(vanBox([.022,.04,.12],[s*.885,1.0,.98]));metal.push(vanBox([.028,.13,.043],[s*.89,.995,-.62]));
   trim.push(vanBox([.012,.012,2.18],[s*.886,.925,-1.46]));
  }
  const windshield=vanRoundedRect(1.51,.70,.045).map(([x,y])=>[x*(1-.035*(y+.35)/.7),y+1.465]);
  const frontGlass=[vanColors(vanFront(vanExtrude(windshield,.014)),'#273735')];trim.push(vanFront(vanRing(windshield,.018)));
  for(const s of [-1,1]){frontGlass.push(vanNose(vanBox([.37,.15,.025],[s*.565,.66,2.641],'#9ba69e')));frontGlass.push(vanNose(vanBox([.055,.12,.026],[s*.79,.66,2.641],'#bfa27a')));trim.push(vanNose(vanBox([.38,.17,.012],[s*.565,.66,2.624])));}
  replace('windscreen',vanMerge(frontGlass));
  const rearPoints=vanRoundedRect(1.48,.61,.055).map(([x,y])=>[x,y+1.395]);
  const rear=vanExtrude(rearPoints,.014);rear.rotateY(Math.PI);rear.translate(0,0,-2.645);vanColors(rear,'#273735');const rearParts=[rear];for(const s of [-1,1]){rearParts.push(vanBox([.07,.16,.038],[s*.80,.77,-2.638],'#893b35'));rearParts.push(vanBox([.07,.09,.038],[s*.80,.905,-2.638],'#b29365'));}replace('rear-glazing',vanMerge(rearParts));
  metal.push(vanBox([.16,.03,.025],[0,.94,-2.66],'#565d56'));
  const rearSeal=vanRing(rearPoints,.018);rearSeal.rotateY(Math.PI);rearSeal.translate(0,0,-2.645);trim.push(rearSeal);
  // Grille and bumper use real shallow volumes, not painted imagery.
  trim.push(vanBox([.73,.16,.03],[0,.66,2.643]));
  for(let i=0;i<4;i++)metal.push(vanBox([.69,.008,.01],[0,.60+i*.038,2.665],'#666b67'));
  const bumper=vanExtrude(vanRoundedRect(1.57,.18,.055),.105,.02);bumper.translate(0,.425,2.49);const bump=bumper.getAttribute('position');for(let i=0;i<bump.count;i++)bump.setZ(i,bump.getZ(i)-.13*Math.pow(Math.abs(bump.getX(i))/.81,4));bumper.computeVertexNormals();
  // Front bumper is painted steel, batched with the AC assembly to avoid a draw call.
  const painted=[pod,vanColors(bumper,'#DBDEE3')];
  for(const s of [-1,1]){for(const [a,b] of [[-.69,1.30],[-2.25,-1.72]])painted.push(vanBox([.012,.008,b-a],[s*.40,2.093,(a+b)/2],'#DBDEE3'));painted.push(vanBox([.012,.006,3.55],[s*.63,2.05,-.475],'#DBDEE3'));for(const y of [.44,.59])painted.push(vanBox([.016,.019,2.34],[s*.877,y,.01],'#DBDEE3'));}
  replace('ac-pod',vanMerge(painted));
  trim.push(vanBox([.29,.073,.015],[0,.426,2.617]));
  for(const s of [-1,1])trim.push(vanBox([.18,.05,.016],[s*.34,.424,2.613]));
  trim.push(vanBox([1.59,.085,.045],[0,.40,-2.637]));
  for(const s of [-1,1])trim.push(vanFront(vanBox([.53,.014,.013],[s*.38,v.formDetails.wipers.centerY,.0205],'#ffffff',[0,0,s*.065])));
  replace('trim',vanMerge(trim));replace('hardware',vanMerge(metal));
  for(const id of ['windscreen','passenger-left','passenger-right','cab-left','cab-right','rear-glazing']){const m=present[id].material as THREE.MeshPhysicalMaterial;m.color.set('#ffffff');m.roughness=.32;m.metalness=0;m.clearcoat=0;m.envMapIntensity=.35;m.specularIntensity=.05;m.vertexColors=true;if(id!=='windscreen'&&id!=='rear-glazing')vanColors(present[id].geometry,'#273735');}
  // Budgeted interior mapping: view-dependent analytic seat boxes behind the panes.
  // Inferred seating is a parallax material approximation, not shipped interior geometry.
  const glass=present.windscreen.material as THREE.MeshPhysicalMaterial;
  glass.onBeforeCompile=shader=>{
   shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vCabPosition;\nvarying vec3 vCabEye;').replace('#include <begin_vertex>','#include <begin_vertex>\nvCabPosition=position;\nvCabEye=(inverse(modelMatrix)*vec4(cameraPosition,1.0)).xyz;');
   shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
varying vec3 vCabPosition;
varying vec3 vCabEye;
vec2 cabBox(vec3 ro,vec3 rd,vec3 c,vec3 b){vec3 inv=1.0/(rd+vec3(.000001));vec3 n=(c-ro)*inv,k=abs(inv)*b,t1=n-k,t2=n+k;return vec2(max(max(t1.x,t1.y),t1.z),min(min(t2.x,t2.y),t2.z));}
`);
   shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
if(diffuseColor.r<.04&&diffuseColor.g>diffuseColor.r){
 vec3 rd=normalize(vCabPosition-vCabEye),ro=vCabPosition;float nearest=20.0;vec3 interior=vec3(.019,.027,.024);
 for(int row=0;row<4;row++){for(int col=0;col<2;col++){
  vec3 center=vec3(col==0?-.46:.46,1.19,1.17-float(row)*.94);
  vec2 hit=cabBox(ro,rd,center,vec3(.25,.34,.105));
  if(hit.x>0.01&&hit.x<hit.y&&hit.x<nearest){vec3 q=ro+rd*hit.x-center;
   if(length(max(abs(q.xy)-vec2(.14,.23),0.0))<.11){nearest=hit.x;
   float edge=smoothstep(.23,.25,abs(q.x));float piping=1.0-smoothstep(.005,.012,abs(abs(q.x)-.21));
   interior=mix(vec3(.033,.047,.042),vec3(.023,.034,.028),edge)+vec3(.004)*piping;
  }}
 }}
 vec2 dash=cabBox(ro,rd,vec3(0,1.04,1.95),vec3(.72,.105,.27));
 if(dash.x>.01&&dash.x<dash.y&&dash.x<nearest){interior=vec3(.047,.070,.072);nearest=dash.x;}
 vec3 sc=vec3(-.43,1.25,1.86),sn=normalize(vec3(0,.7,.7));float st=dot(sc-ro,sn)/dot(rd,sn);vec3 sq=ro+rd*st-sc;vec2 suv=vec2(sq.x,dot(sq,normalize(vec3(0,.7,-.7))));float sr=length(suv);
 if(st>.01&&st<nearest&&((abs(sr-.15)<.012)||(sr<.145&&abs(suv.x)<.009))){interior=vec3(.006,.012,.009);nearest=st;}
 float fade=exp(-nearest*.11);diffuseColor.rgb=mix(vec3(.014,.022,.019),interior,fade);
 if(abs(ro.x)<.78&&ro.z>1.85)diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.030,.055,.060),.30);
}
`);
  };glass.customProgramCacheKey=()=> 'commuter-interior-parallax-v1';
  (present.trim.material as THREE.MeshStandardMaterial).color.set('#343633');
  const steel=present.hardware.material as THREE.MeshStandardMaterial;steel.color.set('#AAAAAA');steel.vertexColors=true;steel.roughness=.52;steel.metalness=.55;
  steel.onBeforeCompile=shader=>{
   shader.vertexShader=shader.vertexShader.replace('#include <common>','#include <common>\nvarying vec3 vSteelPosition;').replace('#include <begin_vertex>','#include <begin_vertex>\nvSteelPosition=position;');
   shader.fragmentShader=shader.fragmentShader.replace('#include <common>','#include <common>\nvarying vec3 vSteelPosition;\nfloat steelGrain(vec3 p){return fract(sin(dot(floor(p),vec3(12.9898,78.233,37.719)))*43758.5453);}');
   shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
float axle=vSteelPosition.z>0.0?1.64:-1.62;vec2 q=vec2(vSteelPosition.z-axle,vSteelPosition.y-.34);float r=length(q);
if(abs(vSteelPosition.x)>.87&&r<.23){
 float speck=steelGrain(vSteelPosition*270.0),oxidePatch=steelGrain(vSteelPosition*48.0);
 diffuseColor.rgb*=.86+.10*speck+.04*oxidePatch;
 diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(.55,.47,.35),(1.0-smoothstep(.075,.105,r))*.55);
 for(int i=0;i<6;i++){float a=float(i)*1.04719755;vec2 bolt=vec2(cos(a),sin(a))*.043;float d=length(q-bolt);diffuseColor.rgb*=1.0-.48*(1.0-smoothstep(.007,.011,d));}
}`);
   shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
float wheelAxle=vSteelPosition.z>0.0?1.64:-1.62;vec2 wheelUV=vec2(vSteelPosition.z-wheelAxle,vSteelPosition.y-.34);float wheelR=length(wheelUV);
float wheelRelief=abs(vSteelPosition.x)>.87&&wheelR<.23?.0025*exp(-pow((wheelR-.197)/.008,2.0)):0.0;
vec3 sx=dFdx(-vViewPosition),sy=dFdy(-vViewPosition);vec3 rx=cross(sy,normal),ry=cross(normal,sx);float det=dot(sx,rx);
normal=normalize(abs(det)*normal-sign(det)*(dFdx(wheelRelief)*rx+dFdy(wheelRelief)*ry));
`);
  };steel.customProgramCacheKey=()=> 'commuter-aged-steel-v1';
 }
 root.name='Toyota Commuter Van';
 // Only the root is an articulation mechanism for this parked prop.
 const nodes=runtime.nodes;
 root.userData.sculptRuntime={...runtime,nodes:Object.keys(nodes).length,pivots:[nodes.root],sockets:[],colliders:[],destructionGroups:[],byId:{nodes,meshes:runtime.meshes,sockets:{}}};
 root.userData.approximationNotes=VAN_SPEC.assumptions;
 root.updateMatrixWorld(true);return root;
}

/** One-argument entry point used by the installed vibe3d pack. */
export function createModel(options:ProceduralModelOptions={}):THREE.Group {
 return createObjectModel(undefined,options);
}
