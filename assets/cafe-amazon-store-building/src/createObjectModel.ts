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

// Generated from ObjectSculptSpec target: Cafe Amazon Store Building
// Sculpt build pass: blockout
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createCafeAmazonStoreBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "Cafe Amazon Store Building";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 40.0, "aspect": 1.0, "orientation": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "positionHint": [0.0, 0.0, 3.0], "note": "For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."}, "approximationNotes": []};
  root.userData.materialPipeline = {};
  root.userData.materialReferenceRegistry = null;

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["render-cream"] = createSculptMaterial(
    "render-cream",
    {"id": "render-cream", "name": "Painted cement render", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#eedab7", "color": "#eedab7", "roughness": {"base": 0.88, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.680-0.728 for all six crops on this plate -- a near-constant across matte cement render, satin paint, oiled hardwood and low-roughness glazing is the extractor's regression default, not a measurement, and taking it would have made the glazing as matte as the roof screed.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1."}, "metalness": 0.0, "albedo": {"dominant": "#eedab7", "secondary": ["#ecd9b6", "#dfccae"], "samplingNotes": "Sun-lit +X side wall (800,500) sd=0.7 -> 238,218,183; parapet inner face (200,318) -> 239,222,196; coping top (905,338) -> 237,217,182. All three agree, so the coping is a LOCAL OVERRIDE on this material and not a second material. extract_pbr_evidence palette top #EEDAB7, confidence 0.725."}, "localOverrides": [{"id": "coping", "kind": "value-shift", "description": "The coping cap reads marginally lighter than the wall against the dark green band. MEASURED 237,217,182 at (905,338) against the wall's 238,218,183 - a 1-unit difference, i.e. the SAME paint. Recorded as an override so the coping is never split into a second material.", "appliesTo": "building-shell/parapet-coping-cap"}], "finishClass": "architectural", "evidenceRefs": ["evidence/material-evidence.json", "evidence/material-evidence.json"], "textureless": {"declared": true, "evidence": ["extract_pbr_evidence on evidence/mat/render-cream.png (118x236 px) reports confidence 0.725 with roughnessVariation 0.050 and normalStrength 0.16 -- no high-frequency component survives at plate resolution.", "Painted cement render is flat paint at prop distance; its tooth is finer than one texel of an 8 m wall seen from across a street."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a cream building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves."}, "materialPipelineNote": "Albedo anchored to the SUN-LIT (+X) plate reading via the measured L(+Z)/L(+X)=0.508 lighting solve; see evidence/material-evidence.json."},
    options
  );
  materialMap["fascia-green"] = createSculptMaterial(
    "fascia-green",
    {"id": "fascia-green", "name": "Satin architectural paint, dark green", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#466748", "color": "#466748", "roughness": {"base": 0.55, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.680-0.728 for all six crops on this plate -- a near-constant across matte cement render, satin paint, oiled hardwood and low-roughness glazing is the extractor's regression default, not a measurement, and taking it would have made the glazing as matte as the roof screed.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1."}, "metalness": 0.0, "albedo": {"dominant": "#466748", "secondary": ["#213228", "#657c5b"], "samplingNotes": "Sun-lit fascia RETURN (625,455) sd=0.9 -> 70,103,72. The extract_pbr crop landed on the SHADED front face (palette top #213228) and is deliberately not used for albedo; only its confidence (0.818) and variation statistics are taken from it."}, "localOverrides": [], "finishClass": "architectural", "evidenceRefs": ["evidence/material-evidence.json", "evidence/material-evidence.json"], "textureless": {"declared": true, "evidence": ["extract_pbr_evidence on evidence/mat/fascia-green.png reports roughnessVariation 0.050 and normalStrength 0.177 over a clean 96x64 field: the band is unbroken flat paint.", "Sprayed satin sign-panel paint has no resolvable relief at any distance a level builder places this prop at."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a cream building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves."}, "materialPipelineNote": "Albedo anchored to the SUN-LIT (+X) plate reading via the measured L(+Z)/L(+X)=0.508 lighting solve; see evidence/material-evidence.json."},
    options
  );
  materialMap["timber-slat"] = createSculptMaterial(
    "timber-slat",
    {"id": "timber-slat", "name": "Oiled hardwood slat cladding", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#ad7a4d", "color": "#ad7a4d", "roughness": {"base": 0.6, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.680-0.728 for all six crops on this plate -- a near-constant across matte cement render, satin paint, oiled hardwood and low-roughness glazing is the extractor's regression default, not a measurement, and taking it would have made the glazing as matte as the roof screed.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1."}, "metalness": 0.0, "albedo": {"dominant": "#ad7a4d", "secondary": ["#b07d51", "#8a6b52"], "samplingNotes": "Sun-lit dado return (655,706) -> 169,116,73 and extract_pbr palette top #B07D51 on the same region; the two agree within 4%. Confidence 0.855."}, "localOverrides": [], "finishClass": "architectural", "evidenceRefs": ["evidence/material-evidence.json", "evidence/material-evidence.json"], "textureless": {"declared": true, "evidence": ["The batten rhythm is carried by GEOMETRY, not texture: repetitionSystem dado-battens emits 42 real battens with real gaps, so the relief self-shadows correctly at grazing angles where a normal map would flatten.", "extract_pbr_evidence roughnessVariation 0.115 over evidence/mat/timber-slat.png is the batten SHADOW LINE, which the geometry now supplies; texturing it would double the signal."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a cream building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves."}, "materialPipelineNote": "Albedo anchored to the SUN-LIT (+X) plate reading via the measured L(+Z)/L(+X)=0.508 lighting solve; see evidence/material-evidence.json."},
    options
  );
  materialMap["glass-tinted"] = createSculptMaterial(
    "glass-tinted",
    {"id": "glass-tinted", "name": "Tinted architectural glazing", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#4a4b46", "color": "#4a4b46", "roughness": {"base": 0.06, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.680-0.728 for all six crops on this plate -- a near-constant across matte cement render, satin paint, oiled hardwood and low-roughness glazing is the extractor's regression default, not a measurement, and taking it would have made the glazing as matte as the roof screed.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1."}, "metalness": 0.0, "albedo": {"dominant": "#4a4b46", "secondary": ["#3f3d2f", "#1a1a13"], "samplingNotes": "Front glazing (320,580) -> 55,57,49 and return (622,640) -> 70,67,62. extract_pbr palette top #5D4731 is INTERIOR BLEED through the pane and is discarded; #3F3D2F and #1A1A13 are the glass. Confidence 0.860."}, "localOverrides": [{"id": "decals", "kind": "decal", "description": "White vinyl manifestation decals on the entrance leaf. Not modelled and not textured - sub-centimetre linework, tertiary, below resolvable prop distance.", "appliesTo": "shopfront-glazing/glass-manifestation-decals"}], "finishClass": "architectural", "evidenceRefs": ["evidence/material-evidence.json", "evidence/material-evidence.json"], "textureless": {"declared": true, "evidence": ["Float glass is optically smooth; there is no surface detail to synthesise, and a roughness map would destroy the specular response that makes it read as glazing.", "extract_pbr_evidence normalStrength 0.19 on evidence/mat/glass-tinted.png is reflected INTERIOR content, not surface relief."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a cream building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves."}, "materialPipelineNote": "Albedo anchored to the SUN-LIT (+X) plate reading via the measured L(+Z)/L(+X)=0.508 lighting solve; see evidence/material-evidence.json.", "envMapIntensity": 1.2},
    options
  );
  materialMap["concrete-deck"] = createSculptMaterial(
    "concrete-deck",
    {"id": "concrete-deck", "name": "Cast concrete roof screed", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#bdb8b4", "color": "#bdb8b4", "roughness": {"base": 0.92, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.680-0.728 for all six crops on this plate -- a near-constant across matte cement render, satin paint, oiled hardwood and low-roughness glazing is the extractor's regression default, not a measurement, and taking it would have made the glazing as matte as the roof screed.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1."}, "metalness": 0.0, "albedo": {"dominant": "#bdb8b4", "secondary": ["#c0bbb7", "#b5afa8"], "samplingNotes": "Roof deck (400,330) sd=2.2 -> 190,185,182; extract_pbr palette top #BDB8B4 on the same region -- exact agreement. Confidence 0.716."}, "localOverrides": [], "finishClass": "architectural", "evidenceRefs": ["evidence/material-evidence.json", "evidence/material-evidence.json"], "textureless": {"declared": true, "evidence": ["The deck is only ever seen from above; a level builder places this prop for an eye-level FPS camera where the deck is occluded by its own parapet.", "extract_pbr_evidence roughnessVariation 0.089 is the screed's float mottle, which is below one texel at any distance the deck is actually visible from."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a cream building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves."}, "materialPipelineNote": "Albedo anchored to the SUN-LIT (+X) plate reading via the measured L(+Z)/L(+X)=0.508 lighting solve; see evidence/material-evidence.json."},
    options
  );
  materialMap["galvanised"] = createSculptMaterial(
    "galvanised",
    {"id": "galvanised", "name": "Mill-finish galvanised sheet", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#9a9995", "color": "#9a9995", "roughness": {"base": 0.45, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.680-0.728 for all six crops on this plate -- a near-constant across matte cement render, satin paint, oiled hardwood and low-roughness glazing is the extractor's regression default, not a measurement, and taking it would have made the glazing as matte as the roof screed.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1."}, "metalness": 0.15, "albedo": {"dominant": "#9a9995", "secondary": ["#8f8e8a", "#a5a4a0"], "samplingNotes": "Sun-lit condenser flank (783,291) -> 154,153,149. extract_pbr palette top #49515A is dominated by the FAN GRILLE RECESS -- cavity shading, not albedo. Never colour-gate a concave feature (grimoire/review/divine_eye_microscope.md). Confidence 0.853."}, "localOverrides": [], "finishClass": "architectural", "evidenceRefs": ["evidence/material-evidence.json", "evidence/material-evidence.json"], "textureless": {"declared": true, "evidence": ["The condensers are 0.85 m boxes at 4.4 m; their spangle is far below one texel from any playable camera.", "The only surface variation that reads at that distance is the fan recess and the grille, both of which are GEOMETRY in the rooftop-condensers repetition system."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a cream building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves."}, "materialPipelineNote": "Albedo anchored to the SUN-LIT (+X) plate reading via the measured L(+Z)/L(+X)=0.508 lighting solve; see evidence/material-evidence.json."},
    options
  );
  materialMap["alu-dark"] = createSculptMaterial(
    "alu-dark",
    {"id": "alu-dark", "name": "Dark anodised aluminium framing", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#2e302c", "color": "#2e302c", "roughness": {"base": 0.38, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.680-0.728 for all six crops on this plate -- a near-constant across matte cement render, satin paint, oiled hardwood and low-roughness glazing is the extractor's regression default, not a measurement, and taking it would have made the glazing as matte as the roof screed.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1."}, "metalness": 0.25, "albedo": {"dominant": "#2e302c", "secondary": ["#26282a"], "samplingNotes": "Shopfront mullions and door frame. Members are 40-60 mm wide -- narrower than any crop extract_pbr_evidence can use -- so NO crop was taken rather than a contaminated one. Point sample at the frame (455,641) reads 78,79,73 on a shaded face; through the measured L(+Z)/L(+X)=0.508 that implies a near-black anodised albedo."}, "localOverrides": [], "finishClass": "architectural", "evidenceRefs": ["evidence/material-evidence.json", "evidence/material-evidence.json"], "textureless": {"declared": true, "evidence": ["Anodised aluminium is a uniform conversion coating with no pattern to reproduce.", "Members are 40-60 mm wide and read as pure silhouette at prop distance; a texture on them would never resolve."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a cream building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves."}, "materialPipelineNote": "Albedo anchored to the SUN-LIT (+X) plate reading via the measured L(+Z)/L(+X)=0.508 lighting solve; see evidence/material-evidence.json."},
    options
  );
  materialMap["fascia-sign-graphic"] = createSculptMaterial(
    "fascia-sign-graphic",
    {"id": "fascia-sign-graphic", "name": "Brand sign face (canvas-mapped)", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#466748", "color": "#466748", "roughness": {"base": 0.5, "variation": 0.05, "notes": "Authored from the observed specular response, NOT from extract_pbr_evidence's roughnessBase. That field returned 0.680-0.728 for all six crops on this plate -- a near-constant across matte cement render, satin paint, oiled hardwood and low-roughness glazing is the extractor's regression default, not a measurement, and taking it would have made the glazing as matte as the roof screed.", "bindingPolicy": "Scalar at runtime. The independently extracted map is kept on disk as evidence and is deliberately NOT bound: this material is textureless, and binding any map would force color to white and roughness to 1."}, "metalness": 0.0, "albedo": {"dominant": "#466748", "secondary": ["#466748"], "samplingNotes": "Same satin green as the fascia band (#466748) -- this material exists ONLY so the Cafe Amazon roundel and wordmark canvas can be bound to the sign panel WITHOUT texturing the whole fascia band, whose generated extrusion UVs cannot place a graphic reliably."}, "localOverrides": [], "finishClass": "architectural", "evidenceRefs": ["evidence/material-evidence.json", "evidence/material-evidence.json"], "textureless": {"declared": true, "evidence": ["The green ground under the graphic is the same flat satin paint as fascia-green, measured at (625,455).", "The brand artwork is a single authored canvas assigned after material construction, not a synthesised procedural texture set; textureless does not suppress it."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function writes FIVE canvases per material pixel by pixel in JavaScript at a cost that is the SQUARE of textureResolution; eight materials at 1024 would cost roughly 15 s inside createObjectModel before the drawer could show anything, on a kit aimed at low-end integrated GPUs. It is also a correctness fix: with a texture set present the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo -- which is what renders a cream building mid-grey. No textureResolution, referencePbr, textureProjection or surfaceFrequencyBands is carried here; the validator enforces both halves."}, "materialPipelineNote": "Albedo anchored to the SUN-LIT (+X) plate reading via the measured L(+Z)/L(+X)=0.508 lighting solve; see evidence/material-evidence.json.", "brandCanvas": {"appliedAfterMaterialConstruction": true, "note": "The logo roundel and the light-green (#5fbf4a) wordmark are drawn to a 2D canvas and assigned to this material's map AFTER createSculptMaterial returns. That route is explicitly unaffected by the textureless declaration -- textureless only skips the FIVE procedurally synthesised canvases, and a single authored brand canvas is not one of them.", "canvasSize": [1024, 256]}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_building_shell_0 = makeAttachmentEndpoint(null);
  const node_building_shell_0 = new THREE.Group();
  node_building_shell_0.name = "Rendered shell: four walls, parapet, coping, side service door__pivot";
  node_building_shell_0.scale.set(1, 1, 1);
  if (endpoint_building_shell_0) {
    node_building_shell_0.position.copy(endpoint_building_shell_0.start);
    node_building_shell_0.rotation.set(0, 0, 0);
  } else {
    node_building_shell_0.position.set(0, 0, 0);
    node_building_shell_0.rotation.set(0, 0, 0);
  }
  node_building_shell_0.userData.sculptComponent = {"id": "building-shell", "name": "Rendered shell: four walls, parapet, coping, side service door", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.9, "primitive": "extrude", "material": "render-cream", "materialId": "render-cream", "topologyClass": "assembled-solid", "topologyRationale": "All four walls are one continuous painted render surface and one extrusion; splitting them would spend a draw call each, forever, to express one skin. Unlike the AIS sibling this shell needs NO separate facade wall, because the shopfront here is APPLIED PROUD of an unbroken front wall instead of filling an opening in it -- which is also why this prop has no reveal faces to z-fight.", "geometryDescriptor": {"topologyIntent": "Closed rectangular wall RING extruded 0 -> 4.44 m, 0.20 m thick, plus a mitred coping cap, a proud side service door and a small coping return -- all MERGED into ONE BufferGeometry. One component is one draw call for the life of the prop, so every cream part of the building is folded here rather than left as parts an optimisation pass would have to merge later. A pivot hung off any of them would have made that merge impossible.", "wallThickness": 0.2, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "8 profile points, one extrusion step: 16 side quads plus caps ~= 100 triangles; coping 4 boxes = 48; door assembly 3 boxes = 36; tab 12. ~200 triangles total.", "profile2D": {"points": [[-4.0, -3.5], [-4.0, 3.5], [4.0, 3.5], [4.0, -3.5], [3.8, -3.3], [3.8, 3.3], [-3.8, 3.3], [-3.8, -3.3]], "depth": 4.44}, "shapeSpaceNote": "Profile authored in (sx,sy) = (worldX, worldZ) and rotated onto the ground plane with rotationEuler [-pi/2,0,0] so the extrusion axis is world +Y. Extrude components are NOT unit-scaled by the generator: these are real metres, the building's actual footprint.", "subParts": [{"id": "coping-front", "geom": {"kind": "box", "min": [-3.75, 4.44, 3.25], "max": [3.75, 4.6, 3.55], "size": [7.5, 0.16, 0.3], "center": [0.0, 4.52, 3.4], "note": ""}, "note": "MITRED, not overlapped: stops at x=+-3.75 so it BUTTS the +-X runs with opposed faces. An overlapping corner would put two up-facing tops at y=4.60 in the same plane -- the exact z-fight the 7-Eleven shipped eight of."}, {"id": "coping-rear", "geom": {"kind": "box", "min": [-3.75, 4.44, -3.55], "max": [3.75, 4.6, -3.25], "size": [7.5, 0.16, 0.3], "center": [0.0, 4.52, -3.4], "note": ""}}, {"id": "coping-left", "geom": {"kind": "box", "min": [-4.05, 4.44, -3.55], "max": [-3.75, 4.6, 3.55], "size": [0.3, 0.16, 7.1], "center": [-3.9, 4.52, 0.0], "note": ""}, "note": "Spans the FULL z so the front/rear runs butt into it. Its top at 4.60 is the only up-face there."}, {"id": "coping-right", "geom": {"kind": "box", "min": [3.75, 4.44, -3.55], "max": [4.05, 4.6, 3.55], "size": [0.3, 0.16, 7.1], "center": [3.9, 4.52, 0.0], "note": ""}}, {"id": "side-door-leaf", "geom": {"kind": "box", "min": [4.0, 0.02, -1.48], "max": [4.04, 2.17, -0.53], "size": [0.04, 2.15, 0.95], "center": [4.02, 1.095, -1.005], "note": ""}, "note": "Stands 0.040 PROUD of the +X wall face rather than recessed. Without booleans a true recess needs a reveal frame whose outer faces land in the wall plane -- coplanar and co-facing -- or an opening that would see straight through the shell. The plate shows a recess; a 40 mm proud leaf reads the same at prop distance on a secondary elevation. Deliberate, recorded deviation."}, {"id": "side-door-frame", "geom": {"kind": "box", "min": [4.0, 0.0, -1.51], "max": [4.055, 2.2, -0.5], "size": [0.055, 2.2, 1.01], "center": [4.0275, 1.1, -1.005], "note": ""}, "note": "Frame outer face 4.055, leaf outer face 4.040, wall face 4.000 -- three DISTINCT planes, no coplanar pair. Backs embed to x=3.98 so nothing shares the wall plane either."}, {"id": "coping-return-tab", "geom": {"kind": "box", "min": [4.0, 4.16, 2.55], "max": [4.14, 4.44, 2.9], "size": [0.14, 0.28, 0.35], "center": [4.07, 4.3, 2.725], "note": ""}, "note": "The small light element projecting from the right wall below the coping. Confidence 0.40 -- reads as either a coping return or a wall fitting; authored as the reading that costs nothing if wrong."}], "zFightingAudit": "Wall ring top face is at 4.44 facing UP; the coping bottoms at 4.44 face DOWN -- an OPPOSED butt, which is how solids are meant to meet. The wall never reaches 4.60, so there is no second up-face in the coping's plane. Coping corners are mitred, not overlapped. The door leaf, frame and wall occupy three distinct planes."}, "actionProfile": {"animationRole": "static", "pivot": {"declared": false, "note": "The root pivot at base-center serves the whole prop."}, "collider": {"type": "box", "offset": [0.0, 2.3, 0.0], "scale": [8.0, 4.6, 7.0], "isTrigger": false, "note": "registry collider is 'box'. One proxy on the shell covers the whole 8.0 x 4.6 x 7.0 envelope; the applied facade elements sit inside it and need no proxy of their own."}, "colliderNote": "The registry declares collider 'box'. One box proxy on the shell covers the whole 8.0 x 4.6 x 7.0 envelope; the applied facade elements sit within it and need no proxy of their own.", "colliderBounds": {"min": [-4.0, 0.0, -3.5], "max": [4.0, 4.6, 3.5]}, "destruction": {"breakable": false, "fractureGroup": null, "note": "registry destructionGroups is empty. No fractureGroup anywhere in this spec."}}, "localFeatures": [{"id": "side-service-door", "description": "Flush cream service door on the +X elevation at z=-1.0, authored 0.040 proud with a 0.055-proud frame - three distinct planes, no coplanar pair."}, {"id": "parapet-coping-cap", "description": "Continuous cream coping 4.44 -> 4.60 on all four sides, mitred at the corners so no two tops share the 4.60 plane."}], "colorMaterialRecipe": {"dominantAlbedo": "rgba(238, 218, 183, 1.0)", "secondaryAlbedo": "rgba(223, 204, 174, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.88, "evidence": "Painted cement render measured on the sun-lit +X wall (238,218,183, sd 0.7); classed stone as the nearest controlled class for a mineral render.", "evidenceRef": "evidence/material-evidence.json"}};
  node_building_shell_0.userData.actionProfile = {"animationRole": "static", "pivot": {"declared": false, "note": "The root pivot at base-center serves the whole prop."}, "collider": {"type": "box", "offset": [0.0, 2.3, 0.0], "scale": [8.0, 4.6, 7.0], "isTrigger": false, "note": "registry collider is 'box'. One proxy on the shell covers the whole 8.0 x 4.6 x 7.0 envelope; the applied facade elements sit inside it and need no proxy of their own."}, "colliderNote": "The registry declares collider 'box'. One box proxy on the shell covers the whole 8.0 x 4.6 x 7.0 envelope; the applied facade elements sit within it and need no proxy of their own.", "colliderBounds": {"min": [-4.0, 0.0, -3.5], "max": [4.0, 4.6, 3.5]}, "destruction": {"breakable": false, "fractureGroup": null, "note": "registry destructionGroups is empty. No fractureGroup anywhere in this spec."}};
  (nodes["root"] ?? root).add(node_building_shell_0);
  nodes["building-shell"] = node_building_shell_0;
  const mesh_building_shell_0Geometry = endpoint_building_shell_0
    ? new THREE.CylinderGeometry(endpoint_building_shell_0.endRadius, endpoint_building_shell_0.baseRadius, endpoint_building_shell_0.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-4.0, -3.5], [-4.0, 3.5], [4.0, 3.5], [4.0, -3.5], [3.8, -3.3], [3.8, 3.3], [-3.8, 3.3], [-3.8, -3.3]], "depth": 4.44});
  if (!endpoint_building_shell_0) {
    mesh_building_shell_0Geometry.scale(1, 1, 1);
  }
  const mesh_building_shell_0 = new THREE.Mesh(
    mesh_building_shell_0Geometry,
    materialMap["render-cream"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_building_shell_0.name = "Rendered shell: four walls, parapet, coping, side service door";
  if (endpoint_building_shell_0) {
    mesh_building_shell_0.position.copy(endpoint_building_shell_0.midpoint);
    mesh_building_shell_0.quaternion.copy(endpoint_building_shell_0.quaternion);
  }
  mesh_building_shell_0.castShadow = options.castShadow ?? true;
  mesh_building_shell_0.receiveShadow = options.receiveShadow ?? true;
  mesh_building_shell_0.userData.sculptComponent = {"id": "building-shell", "name": "Rendered shell: four walls, parapet, coping, side service door", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.9, "primitive": "extrude", "material": "render-cream", "materialId": "render-cream", "topologyClass": "assembled-solid", "topologyRationale": "All four walls are one continuous painted render surface and one extrusion; splitting them would spend a draw call each, forever, to express one skin. Unlike the AIS sibling this shell needs NO separate facade wall, because the shopfront here is APPLIED PROUD of an unbroken front wall instead of filling an opening in it -- which is also why this prop has no reveal faces to z-fight.", "geometryDescriptor": {"topologyIntent": "Closed rectangular wall RING extruded 0 -> 4.44 m, 0.20 m thick, plus a mitred coping cap, a proud side service door and a small coping return -- all MERGED into ONE BufferGeometry. One component is one draw call for the life of the prop, so every cream part of the building is folded here rather than left as parts an optimisation pass would have to merge later. A pivot hung off any of them would have made that merge impossible.", "wallThickness": 0.2, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "8 profile points, one extrusion step: 16 side quads plus caps ~= 100 triangles; coping 4 boxes = 48; door assembly 3 boxes = 36; tab 12. ~200 triangles total.", "profile2D": {"points": [[-4.0, -3.5], [-4.0, 3.5], [4.0, 3.5], [4.0, -3.5], [3.8, -3.3], [3.8, 3.3], [-3.8, 3.3], [-3.8, -3.3]], "depth": 4.44}, "shapeSpaceNote": "Profile authored in (sx,sy) = (worldX, worldZ) and rotated onto the ground plane with rotationEuler [-pi/2,0,0] so the extrusion axis is world +Y. Extrude components are NOT unit-scaled by the generator: these are real metres, the building's actual footprint.", "subParts": [{"id": "coping-front", "geom": {"kind": "box", "min": [-3.75, 4.44, 3.25], "max": [3.75, 4.6, 3.55], "size": [7.5, 0.16, 0.3], "center": [0.0, 4.52, 3.4], "note": ""}, "note": "MITRED, not overlapped: stops at x=+-3.75 so it BUTTS the +-X runs with opposed faces. An overlapping corner would put two up-facing tops at y=4.60 in the same plane -- the exact z-fight the 7-Eleven shipped eight of."}, {"id": "coping-rear", "geom": {"kind": "box", "min": [-3.75, 4.44, -3.55], "max": [3.75, 4.6, -3.25], "size": [7.5, 0.16, 0.3], "center": [0.0, 4.52, -3.4], "note": ""}}, {"id": "coping-left", "geom": {"kind": "box", "min": [-4.05, 4.44, -3.55], "max": [-3.75, 4.6, 3.55], "size": [0.3, 0.16, 7.1], "center": [-3.9, 4.52, 0.0], "note": ""}, "note": "Spans the FULL z so the front/rear runs butt into it. Its top at 4.60 is the only up-face there."}, {"id": "coping-right", "geom": {"kind": "box", "min": [3.75, 4.44, -3.55], "max": [4.05, 4.6, 3.55], "size": [0.3, 0.16, 7.1], "center": [3.9, 4.52, 0.0], "note": ""}}, {"id": "side-door-leaf", "geom": {"kind": "box", "min": [4.0, 0.02, -1.48], "max": [4.04, 2.17, -0.53], "size": [0.04, 2.15, 0.95], "center": [4.02, 1.095, -1.005], "note": ""}, "note": "Stands 0.040 PROUD of the +X wall face rather than recessed. Without booleans a true recess needs a reveal frame whose outer faces land in the wall plane -- coplanar and co-facing -- or an opening that would see straight through the shell. The plate shows a recess; a 40 mm proud leaf reads the same at prop distance on a secondary elevation. Deliberate, recorded deviation."}, {"id": "side-door-frame", "geom": {"kind": "box", "min": [4.0, 0.0, -1.51], "max": [4.055, 2.2, -0.5], "size": [0.055, 2.2, 1.01], "center": [4.0275, 1.1, -1.005], "note": ""}, "note": "Frame outer face 4.055, leaf outer face 4.040, wall face 4.000 -- three DISTINCT planes, no coplanar pair. Backs embed to x=3.98 so nothing shares the wall plane either."}, {"id": "coping-return-tab", "geom": {"kind": "box", "min": [4.0, 4.16, 2.55], "max": [4.14, 4.44, 2.9], "size": [0.14, 0.28, 0.35], "center": [4.07, 4.3, 2.725], "note": ""}, "note": "The small light element projecting from the right wall below the coping. Confidence 0.40 -- reads as either a coping return or a wall fitting; authored as the reading that costs nothing if wrong."}], "zFightingAudit": "Wall ring top face is at 4.44 facing UP; the coping bottoms at 4.44 face DOWN -- an OPPOSED butt, which is how solids are meant to meet. The wall never reaches 4.60, so there is no second up-face in the coping's plane. Coping corners are mitred, not overlapped. The door leaf, frame and wall occupy three distinct planes."}, "actionProfile": {"animationRole": "static", "pivot": {"declared": false, "note": "The root pivot at base-center serves the whole prop."}, "collider": {"type": "box", "offset": [0.0, 2.3, 0.0], "scale": [8.0, 4.6, 7.0], "isTrigger": false, "note": "registry collider is 'box'. One proxy on the shell covers the whole 8.0 x 4.6 x 7.0 envelope; the applied facade elements sit inside it and need no proxy of their own."}, "colliderNote": "The registry declares collider 'box'. One box proxy on the shell covers the whole 8.0 x 4.6 x 7.0 envelope; the applied facade elements sit within it and need no proxy of their own.", "colliderBounds": {"min": [-4.0, 0.0, -3.5], "max": [4.0, 4.6, 3.5]}, "destruction": {"breakable": false, "fractureGroup": null, "note": "registry destructionGroups is empty. No fractureGroup anywhere in this spec."}}, "localFeatures": [{"id": "side-service-door", "description": "Flush cream service door on the +X elevation at z=-1.0, authored 0.040 proud with a 0.055-proud frame - three distinct planes, no coplanar pair."}, {"id": "parapet-coping-cap", "description": "Continuous cream coping 4.44 -> 4.60 on all four sides, mitred at the corners so no two tops share the 4.60 plane."}], "colorMaterialRecipe": {"dominantAlbedo": "rgba(238, 218, 183, 1.0)", "secondaryAlbedo": "rgba(223, 204, 174, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.88, "evidence": "Painted cement render measured on the sun-lit +X wall (238,218,183, sd 0.7); classed stone as the nearest controlled class for a mineral render.", "evidenceRef": "evidence/material-evidence.json"}};
  node_building_shell_0.add(mesh_building_shell_0);
  meshes["building-shell"] = mesh_building_shell_0;
  colliders["building-shell"] = {"type": "box", "offset": [0.0, 2.3, 0.0], "scale": [8.0, 4.6, 7.0], "isTrigger": false, "note": "registry collider is 'box'. One proxy on the shell covers the whole 8.0 x 4.6 x 7.0 envelope; the applied facade elements sit inside it and need no proxy of their own."};

  const endpoint_roof_deck_1 = makeAttachmentEndpoint(null);
  const node_roof_deck_1 = new THREE.Group();
  node_roof_deck_1.name = "Concrete roof screed__pivot";
  node_roof_deck_1.scale.set(1, 1, 1);
  if (endpoint_roof_deck_1) {
    node_roof_deck_1.position.copy(endpoint_roof_deck_1.start);
    node_roof_deck_1.rotation.set(0, 0, 0);
  } else {
    node_roof_deck_1.position.set(0, 0, 0);
    node_roof_deck_1.rotation.set(0, 0, 0);
  }
  node_roof_deck_1.userData.sculptComponent = {"id": "roof-deck", "name": "Concrete roof screed", "level": "macro", "role": "surface", "importance": 0.6, "confidence": 0.88, "primitive": "box", "material": "concrete-deck", "materialId": "concrete-deck", "topologyClass": "assembled-solid", "topologyRationale": "A closed slab, not an open plane: it must read as a solid deck from the oblique aerial the plate is taken from, and its buried edges are what keep it out of the wall planes. One flat slab. It closes the top of the hollow wall ring so the shell is not open to the sky.", "geometryDescriptor": {"topologyIntent": "Flat slab inside the parapet, embedded 0.02 into every wall so no edge is coincident with a wall face.", "box": {"kind": "box", "min": [-3.82, 4.13, -3.32], "max": [3.82, 4.17, 3.32], "size": [7.64, 0.04, 6.64], "center": [0.0, 4.15, 0.0], "note": ""}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "One box, 12 triangles.", "zFightingAudit": "Top face at 4.17 is the only up-face at that height. Its four edges are buried 0.02 inside the walls, so no side face is coplanar with a wall face."}, "actionProfile": {"animationRole": "static", "pivot": {"declared": false, "note": "No pivot. This part does not articulate; the prop's only pivot is the root at base-center."}, "collider": {"type": "none", "note": "No proxy. The prop's single box collider lives on building-shell and already contains this part."}, "destruction": {"breakable": false, "fractureGroup": null, "note": "registry destructionGroups is empty -- this prop is not breakable, so no fractureGroup is set anywhere."}}, "localFeatures": [{"id": "condenser-fan-grille", "description": "Circular fan recess and grille ring on each condenser's +Z face, carried by the rooftop-condensers shared unit geometry. Reads dark by cavity shading, never by albedo."}, {"id": "refrigerant-conduit", "description": "Dark conduit running between the condensers. NOT modelled: visible only from directly above, so it would cost a draw call for something no playable camera sees."}], "colorMaterialRecipe": {"dominantAlbedo": "rgba(189, 184, 180, 1.0)", "secondaryAlbedo": "rgba(181, 175, 168, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.9, "evidence": "Cast concrete screed measured at (400,330) -> 190,185,182, sd 2.2; extractor palette top #BDB8B4 agrees exactly.", "evidenceRef": "evidence/material-evidence.json"}};
  node_roof_deck_1.userData.actionProfile = {"animationRole": "static", "pivot": {"declared": false, "note": "No pivot. This part does not articulate; the prop's only pivot is the root at base-center."}, "collider": {"type": "none", "note": "No proxy. The prop's single box collider lives on building-shell and already contains this part."}, "destruction": {"breakable": false, "fractureGroup": null, "note": "registry destructionGroups is empty -- this prop is not breakable, so no fractureGroup is set anywhere."}};
  (nodes["root"] ?? root).add(node_roof_deck_1);
  nodes["roof-deck"] = node_roof_deck_1;
  const mesh_roof_deck_1Geometry = endpoint_roof_deck_1
    ? new THREE.CylinderGeometry(endpoint_roof_deck_1.endRadius, endpoint_roof_deck_1.baseRadius, endpoint_roof_deck_1.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_roof_deck_1) {
    mesh_roof_deck_1Geometry.scale(1, 1, 1);
  }
  const mesh_roof_deck_1 = new THREE.Mesh(
    mesh_roof_deck_1Geometry,
    materialMap["concrete-deck"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_roof_deck_1.name = "Concrete roof screed";
  if (endpoint_roof_deck_1) {
    mesh_roof_deck_1.position.copy(endpoint_roof_deck_1.midpoint);
    mesh_roof_deck_1.quaternion.copy(endpoint_roof_deck_1.quaternion);
  }
  mesh_roof_deck_1.castShadow = options.castShadow ?? true;
  mesh_roof_deck_1.receiveShadow = options.receiveShadow ?? true;
  mesh_roof_deck_1.userData.sculptComponent = {"id": "roof-deck", "name": "Concrete roof screed", "level": "macro", "role": "surface", "importance": 0.6, "confidence": 0.88, "primitive": "box", "material": "concrete-deck", "materialId": "concrete-deck", "topologyClass": "assembled-solid", "topologyRationale": "A closed slab, not an open plane: it must read as a solid deck from the oblique aerial the plate is taken from, and its buried edges are what keep it out of the wall planes. One flat slab. It closes the top of the hollow wall ring so the shell is not open to the sky.", "geometryDescriptor": {"topologyIntent": "Flat slab inside the parapet, embedded 0.02 into every wall so no edge is coincident with a wall face.", "box": {"kind": "box", "min": [-3.82, 4.13, -3.32], "max": [3.82, 4.17, 3.32], "size": [7.64, 0.04, 6.64], "center": [0.0, 4.15, 0.0], "note": ""}, "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "One box, 12 triangles.", "zFightingAudit": "Top face at 4.17 is the only up-face at that height. Its four edges are buried 0.02 inside the walls, so no side face is coplanar with a wall face."}, "actionProfile": {"animationRole": "static", "pivot": {"declared": false, "note": "No pivot. This part does not articulate; the prop's only pivot is the root at base-center."}, "collider": {"type": "none", "note": "No proxy. The prop's single box collider lives on building-shell and already contains this part."}, "destruction": {"breakable": false, "fractureGroup": null, "note": "registry destructionGroups is empty -- this prop is not breakable, so no fractureGroup is set anywhere."}}, "localFeatures": [{"id": "condenser-fan-grille", "description": "Circular fan recess and grille ring on each condenser's +Z face, carried by the rooftop-condensers shared unit geometry. Reads dark by cavity shading, never by albedo."}, {"id": "refrigerant-conduit", "description": "Dark conduit running between the condensers. NOT modelled: visible only from directly above, so it would cost a draw call for something no playable camera sees."}], "colorMaterialRecipe": {"dominantAlbedo": "rgba(189, 184, 180, 1.0)", "secondaryAlbedo": "rgba(181, 175, 168, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.9, "evidence": "Cast concrete screed measured at (400,330) -> 190,185,182, sd 2.2; extractor palette top #BDB8B4 agrees exactly.", "evidenceRef": "evidence/material-evidence.json"}};
  node_roof_deck_1.add(mesh_roof_deck_1);
  meshes["roof-deck"] = mesh_roof_deck_1;
  colliders["roof-deck"] = {"type": "none", "note": "No proxy. The prop's single box collider lives on building-shell and already contains this part."};

  const endpoint_shopfront_glazing_2 = makeAttachmentEndpoint(null);
  const node_shopfront_glazing_2 = new THREE.Group();
  node_shopfront_glazing_2.name = "Tinted shopfront glazing__pivot";
  node_shopfront_glazing_2.scale.set(1, 1, 1);
  if (endpoint_shopfront_glazing_2) {
    node_shopfront_glazing_2.position.copy(endpoint_shopfront_glazing_2.start);
    node_shopfront_glazing_2.rotation.set(0, 0, 0);
  } else {
    node_shopfront_glazing_2.position.set(0, 0, 0);
    node_shopfront_glazing_2.rotation.set(0, 0, 0);
  }
  node_shopfront_glazing_2.userData.sculptComponent = {"id": "shopfront-glazing", "name": "Tinted shopfront glazing", "level": "macro", "role": "shell", "importance": 0.9, "confidence": 0.85, "primitive": "box", "material": "glass-tinted", "materialId": "glass-tinted", "topologyClass": "assembled-solid", "topologyRationale": "Closed panes, not planes. An open plane would be single-sided and vanish at grazing angles, and the 0.08 m thickness is what lets the mullions overlap it rather than meet its edge. Two merged panes, front and right return. Authored OPAQUE: the brief's ~0.92 assumed nothing behind the glass, but here the cream shell wall sits directly behind it, and an 8% bleed of a 238-value cream would read milky. Opaque plus roughness 0.06 makes it read as glazing through specular response instead, and removes the transparency blend cost outright.", "geometryDescriptor": {"topologyIntent": "Two panes standing 0.05 proud of the wall, from dado head 1.15 to glazing head 3.08.", "subParts": [{"id": "glazing-front", "geom": {"kind": "box", "min": [-3.55, 1.15, 3.47], "max": [3.55, 3.08, 3.55], "size": [7.1, 1.93, 0.08], "center": [0.0, 2.115, 3.51], "note": ""}}, {"id": "glazing-return", "geom": {"kind": "box", "min": [3.97, 1.15, 1.48], "max": [4.05, 3.08, 3.28], "size": [0.08, 1.93, 1.8], "center": [4.01, 2.115, 2.38], "note": ""}}], "opacity": 1.0, "interiorNote": "NO interior geometry. The plate shows a lit interior through the glazing; a prop kit is only looked at from outside, so an interior would cost draw calls, geometries and VRAM for something nobody sees.", "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Two boxes, 24 triangles.", "zFightingAudit": "Front face 3.55; the dado battens in front of it sit at 3.60 and the pilasters at 3.64. Back embedded to 3.47, inside the wall."}, "actionProfile": {"animationRole": "static", "pivot": {"declared": false, "note": "No pivot. This part does not articulate; the prop's only pivot is the root at base-center."}, "collider": {"type": "none", "note": "No proxy. The prop's single box collider lives on building-shell and already contains this part."}, "destruction": {"breakable": false, "fractureGroup": null, "note": "registry destructionGroups is empty -- this prop is not breakable, so no fractureGroup is set anywhere."}}, "localFeatures": [{"id": "dado-batten-courses", "description": "14 hardwood batten courses at 0.0786 m pitch below the glazing, built as the dado-battens InstancedMesh with real 0.0166 m gaps rather than a texture."}, {"id": "shopfront-mullion-rhythm", "description": "Slim near-black aluminium head/sill rails, seven front verticals, the entrance head transom and pull handle, built as the shopfront-mullions InstancedMesh standing 0.015 proud of the pane."}, {"id": "glass-manifestation-decals", "description": "Small white vinyl decals on the entrance leaf. NOT modelled: sub-centimetre linework, tertiary, below any resolvable prop distance."}], "colorMaterialRecipe": {"dominantAlbedo": "rgba(62, 60, 55, 1.0)", "secondaryAlbedo": "rgba(26, 26, 19, 1.0)", "materialClass": "glass", "materialClassConfidence": 0.9, "evidence": "Tinted glazing measured at (320,580) and (622,640); the extractor's #5D4731 palette top was interior bleed and was discarded.", "evidenceRef": "evidence/material-evidence.json"}};
  node_shopfront_glazing_2.userData.actionProfile = {"animationRole": "static", "pivot": {"declared": false, "note": "No pivot. This part does not articulate; the prop's only pivot is the root at base-center."}, "collider": {"type": "none", "note": "No proxy. The prop's single box collider lives on building-shell and already contains this part."}, "destruction": {"breakable": false, "fractureGroup": null, "note": "registry destructionGroups is empty -- this prop is not breakable, so no fractureGroup is set anywhere."}};
  (nodes["root"] ?? root).add(node_shopfront_glazing_2);
  nodes["shopfront-glazing"] = node_shopfront_glazing_2;
  const mesh_shopfront_glazing_2Geometry = endpoint_shopfront_glazing_2
    ? new THREE.CylinderGeometry(endpoint_shopfront_glazing_2.endRadius, endpoint_shopfront_glazing_2.baseRadius, endpoint_shopfront_glazing_2.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_shopfront_glazing_2) {
    mesh_shopfront_glazing_2Geometry.scale(1, 1, 1);
  }
  const mesh_shopfront_glazing_2 = new THREE.Mesh(
    mesh_shopfront_glazing_2Geometry,
    materialMap["glass-tinted"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_shopfront_glazing_2.name = "Tinted shopfront glazing";
  if (endpoint_shopfront_glazing_2) {
    mesh_shopfront_glazing_2.position.copy(endpoint_shopfront_glazing_2.midpoint);
    mesh_shopfront_glazing_2.quaternion.copy(endpoint_shopfront_glazing_2.quaternion);
  }
  mesh_shopfront_glazing_2.castShadow = options.castShadow ?? true;
  mesh_shopfront_glazing_2.receiveShadow = options.receiveShadow ?? true;
  mesh_shopfront_glazing_2.userData.sculptComponent = {"id": "shopfront-glazing", "name": "Tinted shopfront glazing", "level": "macro", "role": "shell", "importance": 0.9, "confidence": 0.85, "primitive": "box", "material": "glass-tinted", "materialId": "glass-tinted", "topologyClass": "assembled-solid", "topologyRationale": "Closed panes, not planes. An open plane would be single-sided and vanish at grazing angles, and the 0.08 m thickness is what lets the mullions overlap it rather than meet its edge. Two merged panes, front and right return. Authored OPAQUE: the brief's ~0.92 assumed nothing behind the glass, but here the cream shell wall sits directly behind it, and an 8% bleed of a 238-value cream would read milky. Opaque plus roughness 0.06 makes it read as glazing through specular response instead, and removes the transparency blend cost outright.", "geometryDescriptor": {"topologyIntent": "Two panes standing 0.05 proud of the wall, from dado head 1.15 to glazing head 3.08.", "subParts": [{"id": "glazing-front", "geom": {"kind": "box", "min": [-3.55, 1.15, 3.47], "max": [3.55, 3.08, 3.55], "size": [7.1, 1.93, 0.08], "center": [0.0, 2.115, 3.51], "note": ""}}, {"id": "glazing-return", "geom": {"kind": "box", "min": [3.97, 1.15, 1.48], "max": [4.05, 3.08, 3.28], "size": [0.08, 1.93, 1.8], "center": [4.01, 2.115, 2.38], "note": ""}}], "opacity": 1.0, "interiorNote": "NO interior geometry. The plate shows a lit interior through the glazing; a prop kit is only looked at from outside, so an interior would cost draw calls, geometries and VRAM for something nobody sees.", "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "segmentRationale": "Two boxes, 24 triangles.", "zFightingAudit": "Front face 3.55; the dado battens in front of it sit at 3.60 and the pilasters at 3.64. Back embedded to 3.47, inside the wall."}, "actionProfile": {"animationRole": "static", "pivot": {"declared": false, "note": "No pivot. This part does not articulate; the prop's only pivot is the root at base-center."}, "collider": {"type": "none", "note": "No proxy. The prop's single box collider lives on building-shell and already contains this part."}, "destruction": {"breakable": false, "fractureGroup": null, "note": "registry destructionGroups is empty -- this prop is not breakable, so no fractureGroup is set anywhere."}}, "localFeatures": [{"id": "dado-batten-courses", "description": "14 hardwood batten courses at 0.0786 m pitch below the glazing, built as the dado-battens InstancedMesh with real 0.0166 m gaps rather than a texture."}, {"id": "shopfront-mullion-rhythm", "description": "Slim near-black aluminium head/sill rails, seven front verticals, the entrance head transom and pull handle, built as the shopfront-mullions InstancedMesh standing 0.015 proud of the pane."}, {"id": "glass-manifestation-decals", "description": "Small white vinyl decals on the entrance leaf. NOT modelled: sub-centimetre linework, tertiary, below any resolvable prop distance."}], "colorMaterialRecipe": {"dominantAlbedo": "rgba(62, 60, 55, 1.0)", "secondaryAlbedo": "rgba(26, 26, 19, 1.0)", "materialClass": "glass", "materialClassConfidence": 0.9, "evidence": "Tinted glazing measured at (320,580) and (622,640); the extractor's #5D4731 palette top was interior bleed and was discarded.", "evidenceRef": "evidence/material-evidence.json"}};
  node_shopfront_glazing_2.add(mesh_shopfront_glazing_2);
  meshes["shopfront-glazing"] = mesh_shopfront_glazing_2;
  colliders["shopfront-glazing"] = {"type": "none", "note": "No proxy. The prop's single box collider lives on building-shell and already contains this part."};

  // Exposed for the thaikit adapter below: the generator emits only the MACRO
  // components as meshes, and it emits no repetition systems at all, so the
  // adapter has to build the meso components and the four InstancedMeshes and
  // needs the materials that were constructed here -- including alu-dark and
  // galvanised, which no macro component uses.
  root.userData.materialMap = materialMap;
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createCafeAmazonStoreBuildingLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "Cafe Amazon Store Building look-dev lights";
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
  lights.userData.lightingFromPhoto = [{"id": "key", "type": "directional", "direction": [-0.78, -0.52, -0.35], "intensity": 1.9, "color": "#FFF6E6", "notes": "Key from the upper RIGHT, solved off the plate rather than guessed: the same material on a +X face and a +Z face gives L(+Z)/L(+X)=0.508 across cream (0.543), green (0.479) and timber (0.502), and L(+Y)/L(+X)=0.995. A key that lights +X and +Y about equally and leaves +Z at half is what reproduces that."}, {"id": "fill", "type": "hemisphere", "direction": [0, 1, 0], "intensity": 0.62, "color": "#DCE4EC", "groundColor": "#6E6E6C", "notes": "Ambient bounce off the plate's mid-grey backdrop, measured at 90,90,90. Its magnitude is set by the same solve: with the front face at 0.508 of the lit face, ambient is close to equal with the key's contribution on a lit surface."}, {"id": "rim", "type": "directional", "direction": [0.35, -0.25, 0.9], "intensity": 0.3, "color": "#EAF0F6", "notes": "Weak front rim so the shaded +Z elevation -- which is the branded one, and the one a player looks at -- stays readable instead of going to the plate's near-black 33,49,39."}, {"id": "exposure", "type": "tone-mapping", "toneMapping": "ACESFilmic", "exposure": 1.0, "outputColorSpace": "sRGB", "notes": "ACES filmic at exposure 1.0. This matters more than usual here: albedo was anchored to the plate's SUN-LIT readings, so the cream at 238,218,183 sits near the top of the range and a linear or over-exposed tone curve would clip the render wall to flat white and lose the coping shadow line entirely."}, {"id": "shadowing", "type": "shadow-behaviour", "contactShadow": true, "groundShadow": true, "ambientOcclusion": "screen-space, weak", "notes": "Contact shadow where the shell meets the ground plane, and a ground shadow for the canopy's 0.55 m cantilever -- that overhang is the shopfront's strongest depth cue and reads flat without it. Weak AO in the dado batten gaps and the condenser fan recesses; those two features are modelled as real geometry precisely so occlusion does the shading rather than a baked map. No AO is baked into any base colour."}];
  lights.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
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
export function frameCafeAmazonStoreBuildingCamera(
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

export function configureCafeAmazonStoreBuildingRenderer(renderer: THREE.WebGLRenderer): void {
  // Load-bearing for view-dependent finishes (anodized / Doppler): without ACES + sRGB
  // the environment reflection reads flat/washed instead of a believable metal response.
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
}


/* ===========================================================================
 * thaikit adapter
 * ---------------------------------------------------------------------------
 * The generator emits material construction, the node/mesh scaffolding and the
 * runtime record. It does NOT read geometryDescriptor.subParts and it does NOT
 * emit repetitionSystems, so every component arrives as a unit box or a single
 * extrusion. Everything below rebuilds the real geometry the spec describes,
 * adds the four InstancedMeshes, paints the brand canvas, and normalises
 * sculptRuntime into the shape thaikit's harness reads.
 *
 * Every offset here was chosen against ONE rule: no two surfaces may sit flush
 * in the same plane facing the same way. Coincident co-facing faces tear into
 * interleaved triangles as the camera moves. An OPPOSED butt joint is fine and
 * is how solids are meant to meet; where two same-material parts would share a
 * plane they INTERPENETRATE instead. See zFightingAudit on each component.
 * =========================================================================== */

type Vec3 = [number, number, number];

/** A box given by world-space min/max corners. */
function boxGeometry(min: Vec3, max: Vec3): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(max[0] - min[0], max[1] - min[1], max[2] - min[2]);
  g.translate((min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2);
  return g.toNonIndexed();
}

/**
 * Concatenate geometries into one BufferGeometry.
 *
 * Hand-written rather than imported: BufferGeometryUtils lives under
 * three/examples/jsm, and this bundle may import 'three' as a bare specifier
 * and NOTHING else -- the host page injects its own three instance, and a
 * second copy means the factory's Mesh is not the renderer's Mesh and nothing
 * draws. Everything is converted to non-indexed first so the concat is a
 * straight array append with no index rebasing to get wrong.
 */
function mergeGeometries(parts: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const keep = ['position', 'normal', 'uv'] as const;
  const chunks: Record<string, number[]> = { position: [], normal: [], uv: [] };
  for (const part of parts) {
    const g = part.index ? part.toNonIndexed() : part;
    for (const name of keep) {
      const attr = g.getAttribute(name);
      if (!attr) continue;
      const arr = attr.array as ArrayLike<number>;
      for (let i = 0; i < arr.length; i += 1) chunks[name].push(arr[i]);
    }
  }
  const merged = new THREE.BufferGeometry();
  merged.setAttribute('position', new THREE.Float32BufferAttribute(chunks.position, 3));
  if (chunks.normal.length) merged.setAttribute('normal', new THREE.Float32BufferAttribute(chunks.normal, 3));
  if (chunks.uv.length) merged.setAttribute('uv', new THREE.Float32BufferAttribute(chunks.uv, 2));
  merged.computeBoundingSphere();
  return merged;
}

/** Rectangular ring (walls with a void), extruded in +Y. */
function wallRingGeometry(
  outer: { x0: number; x1: number; z0: number; z1: number },
  inner: { x0: number; x1: number; z0: number; z1: number },
  height: number,
): THREE.BufferGeometry {
  // Shape space is (sx, sy) = (worldX, -worldZ); rotating -PI/2 about X maps the
  // shape plane onto the ground plane and the extrusion axis onto world +Y.
  const shape = new THREE.Shape();
  shape.moveTo(outer.x0, -outer.z0);
  shape.lineTo(outer.x1, -outer.z0);
  shape.lineTo(outer.x1, -outer.z1);
  shape.lineTo(outer.x0, -outer.z1);
  shape.closePath();
  // A real HOLE, not a seam-traced polyline. An out-and-back polyline reads as a
  // U under the even-odd rule -- it silently loses the rear wall, which is the
  // one elevation the single reference plate cannot show anyone checking.
  // Wound OPPOSITE to the outer contour. Wound the same way, three.js emits the
  // hole's side walls with inverted normals: they are backface-culled, the
  // parapet's inner faces vanish, and the render looks straight through the
  // building and out the far side -- which reads as a thin gap between the deck
  // and the coping rather than as an obviously missing surface.
  const hole = new THREE.Path();
  hole.moveTo(inner.x0, -inner.z0);
  hole.lineTo(inner.x0, -inner.z1);
  hole.lineTo(inner.x1, -inner.z1);
  hole.lineTo(inner.x1, -inner.z0);
  hole.closePath();
  shape.holes.push(hole);

  const g = new THREE.ExtrudeGeometry(shape, { depth: height, bevelEnabled: false, steps: 1 });
  g.rotateX(-Math.PI / 2);
  return g.toNonIndexed();
}

/* --- world dimensions, from the registry's declared 8.0 x 4.6 x 7.0 module --- */
const XO = 4.00, ZO = 3.50;          // outer wall faces
const XI = 3.80, ZI = 3.30;          // inner wall faces (0.20 m walls)
const WALL_TOP = 4.50;               // walls stop here; the coping caps 4.50 -> 4.60
const DECK_Y = 4.02;                 // roof deck top (0.58 m of parapet upstand above it)

/** building-shell: wall ring + mitred coping + side door + coping return tab. */
function buildShellGeometry(): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = [
    wallRingGeometry({ x0: -XO, x1: XO, z0: -ZO, z1: ZO }, { x0: -XI, x1: XI, z0: -ZI, z1: ZI }, WALL_TOP),
    // Coping is MITRED, not overlapped: the +-Z runs stop at x = +-3.75 and butt
    // the +-X runs, which span the full depth. Overlapping them would put two
    // up-facing tops in the y = 4.60 plane -- the exact z-fight the 7-Eleven
    // shipped eight of, and the one the coplanar check cannot see because it
    // compares bounding boxes only.
    // Proud 0.06, not 0.05: at 0.05 the coping's front face lands at z=3.55, the
    // same plane the glazing's front face occupies. The two never touch in space
    // -- the coping is at y 4.44-4.60 and the glazing at 1.15-3.08 -- but sharing
    // a plane at all is what check-coplanar flags, and separating them is free.
    boxGeometry([-3.75, WALL_TOP, ZI - 0.045], [3.75, 4.60, ZO + 0.045]),
    boxGeometry([-3.75, WALL_TOP, -ZO - 0.045], [3.75, 4.60, -ZI + 0.045]),
    boxGeometry([-XO - 0.045, WALL_TOP, -ZO - 0.045], [-XI + 0.045, 4.60, ZO + 0.045]),
    boxGeometry([XI - 0.045, WALL_TOP, -ZO - 0.045], [XO + 0.045, 4.60, ZO + 0.045]),
    // Side service door on the +X elevation. Authored PROUD, not recessed: with
    // no boolean available a true recess needs either reveal faces lying in the
    // wall plane, or an opening that sees straight through the shell. Frame
    // 4.055, leaf 4.040, wall 4.000 -- three distinct planes. Backs embed to
    // 3.98 so nothing shares the wall plane either.
    boxGeometry([XO - 0.02, 0.00, -1.51], [XO + 0.055, 2.20, -0.50]),
    boxGeometry([XO - 0.02, 0.02, -1.48], [XO + 0.040, 2.17, -0.53]),
    // Small light element projecting from the right wall below the coping.
    // Confidence 0.40 -- read as a coping return, which is the reading that
    // costs nothing if it is wrong.
    boxGeometry([XO - 0.02, 4.22, -2.30], [XO + 0.14, WALL_TOP, -1.95]),
  ];
  return mergeGeometries(parts);
}

/** roof-deck: one slab, edges buried 0.02 in the walls so none is coplanar. */
function buildRoofDeckGeometry(): THREE.BufferGeometry {
  return boxGeometry([-XI - 0.02, DECK_Y - 0.04, -ZI - 0.02], [XI + 0.02, DECK_Y, ZI + 0.02]);
}

/** fascia-band: front run + right return, INTERPENETRATING rather than butting. */
function buildFasciaBandGeometry(): THREE.BufferGeometry {
  return mergeGeometries([
    boxGeometry([-XO - 0.10, 3.26, ZO - 0.05], [XO + 0.10, 4.52, ZO + 0.10]),
    // Runs to z = 3.52, PAST the front run's 3.45 back face, so the two share no
    // plane at all. Top at 4.46 likewise runs 0.02 INTO the coping's 4.44 base.
    boxGeometry([XO - 0.05, 3.26, 1.30], [XO + 0.10, 4.52, ZO + 0.02]),
  ]);
}

/** fascia-sign: brand panel standing 10 mm proud of the band's 3.60 face.
 *
 * CENTRED on the front elevation (x = 0), cut to the sign image's own aspect
 * (SIGN_W:SIGN_H = 4.35) so no un-drawn green is left on it, and only 10 mm
 * proud: at the first ship's 30 mm the panel's edge ruled a visible rectangle
 * across the fascia. Still NOT flush -- a coplanar co-facing panel z-fights the
 * band. */
function buildFasciaSignGeometry(): THREE.BufferGeometry {
  const w = 4.70, h = w * SIGN_H / SIGN_W;      // 4.70 x 1.081 m
  const y0 = 3.26 + (1.26 - h) / 2;             // centred in the 3.26..4.52 band
  return boxGeometry([-w / 2, y0, ZO + 0.09], [w / 2, y0 + h, ZO + 0.11]);
}

/** canopy: timber-faced cantilever, front run + right return. */
function buildCanopyGeometry(): THREE.BufferGeometry {
  return mergeGeometries([
    boxGeometry([-XO - 0.25, 3.14, ZO - 0.05], [XO + 0.55, 3.28, ZO + 0.55]),
    boxGeometry([XO - 0.05, 3.14, 1.30], [XO + 0.55, 3.28, ZO + 0.02]),
  ]);
}

/** shopfront-glazing: two panes, opaque -- see the spec's glazing-opacity note. */
function buildGlazingGeometry(): THREE.BufferGeometry {
  return planarUvByWorld(mergeGeometries([
    boxGeometry([-3.56, 1.15, ZO - 0.03], [3.56, 3.08, ZO + 0.05]),
    boxGeometry([XO - 0.03, 1.15, 1.48], [XO + 0.05, 3.08, 3.28]),
    // The entrance leaf is glazed to the ground. Without this the dado's gap
    // exposes the cream shell wall behind it and the doorway renders as a WHITE
    // panel -- the one place the applied-proud shopfront can betray that there is
    // a solid wall behind the glass.
    boxGeometry([-2.55, 0.06, ZO - 0.03], [-1.45, 1.15, ZO + 0.05]),
  ]), [-3.56, 3.56], [0.06, 3.08], [1.48, 3.28]);
}

/** The condenser unit, shared by all three instances of the rooftop cluster.
 *
 * An InstancedMesh repeats ONE geometry, so this unit can carry as much detail
 * as the triangle budget allows at zero cost in draw calls or unique
 * geometries -- and triangles are the axis with the headroom here. The fan
 * opening is a REAL square recess made from four border bars over a set-back
 * panel, not a dark disc: with one galvanised material there is no albedo to
 * darken it with, and a concave feature should read by cavity shading anyway.
 */
function buildCondenserGeometry(): THREE.BufferGeometry {
  const w = 0.85, h = 0.62, d = 0.35;
  const x0 = -w / 2, x1 = w / 2, z0 = -d / 2, z1 = d / 2;
  const back = z1 - 0.09;                       // recess floor
  const parts: THREE.BufferGeometry[] = [
    boxGeometry([x0, 0.04, z0], [x1, h, back]), // body
    boxGeometry([x0, h - 0.07, back], [x1, h, z1]),          // recess border: top
    boxGeometry([x0, 0.04, back], [x1, 0.11, z1]),           // bottom
    boxGeometry([x0, 0.04, back], [x0 + 0.07, h, z1]),       // left
    boxGeometry([x1 - 0.07, 0.04, back], [x1, h, z1]),       // right
  ];
  // Fan ring and hub, set INSIDE the recess so they are shaded by it.
  const ring = new THREE.TorusGeometry(0.19, 0.018, 6, 20);
  ring.translate(0, h / 2, back + 0.03);
  parts.push(ring.toNonIndexed());
  const hub = new THREE.CylinderGeometry(0.05, 0.05, 0.04, 10);
  hub.rotateX(Math.PI / 2);
  hub.translate(0, h / 2, back + 0.03);
  parts.push(hub.toNonIndexed());
  // Electrical box on the +X flank, and four feet embedded 0.02 into the deck
  // rather than resting exactly on it.
  parts.push(boxGeometry([x1 - 0.04, h * 0.45, z0 + 0.06], [x1 + 0.05, h * 0.75, z0 + 0.20]));
  for (const fx of [x0 + 0.07, x1 - 0.07]) {
    for (const fz of [z0 + 0.05, z1 - 0.05]) {
      parts.push(boxGeometry([fx - 0.04, -0.02, fz - 0.03], [fx + 0.04, 0.05, fz + 0.03]));
    }
  }
  return mergeGeometries(parts);
}

/* ---------------------------------------------------------------------------
 * Repetition systems. Four InstancedMeshes: four draw calls for 65 parts.
 * The pilaster, batten and mullion clusters SHARE one unit box, so the three of
 * them together add ONE unique geometry, not three -- each instance carries its
 * real size in a per-instance matrix instead of baking it into vertex data.
 * ------------------------------------------------------------------------- */

type Placement = { position: Vec3; scale: Vec3 };

function addCluster(
  parent: THREE.Object3D,
  name: string,
  geometry: THREE.BufferGeometry,
  material: THREE.Material,
  placements: Placement[],
  options: ProceduralModelOptions,
): THREE.InstancedMesh {
  const mesh = new THREE.InstancedMesh(geometry, material, placements.length);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const p = new THREE.Vector3();
  const s = new THREE.Vector3();
  placements.forEach((it, i) => {
    p.set(it.position[0], it.position[1], it.position[2]);
    s.set(it.scale[0], it.scale[1], it.scale[2]);
    mesh.setMatrixAt(i, m.compose(p, q, s));
  });
  mesh.instanceMatrix.needsUpdate = true;
  mesh.name = name;
  mesh.castShadow = options.castShadow ?? true;
  mesh.receiveShadow = options.receiveShadow ?? true;
  parent.add(mesh);
  return mesh;
}

const PILASTERS: Placement[] = [
  // Height 3.20, not 3.30: at 3.30 the blade tops sit in the canopy's own top
  // plane facing the same way -- 18.97 m2 of coplanar co-facing surface. At 3.20
  // they are buried 0.10 inside the canopy slab instead, where nothing sees them.
  { position: [-3.785, 1.60, 3.535], scale: [0.47, 3.20, 0.19] }, // left end of the shopfront
  { position: [3.835, 1.60, 3.535], scale: [0.57, 3.20, 0.19] },  // corner, front blade
  { position: [4.060, 1.60, 3.365], scale: [0.12, 3.20, 0.17] },  // corner, side blade
  // z 1.32-1.50, inboard of the canopy return's 1.30 edge, which it otherwise shared.
  { position: [4.060, 1.60, 1.410], scale: [0.12, 3.20, 0.18] },  // return terminator
];

/** 14 courses over three runs: left of the entrance, right of it, and the return. */
function battenPlacements(): Placement[] {
  const COURSES = 14, Y0 = 0.05, PITCH = 0.0786, TH = 0.062;
  const out: Placement[] = [];
  for (let i = 0; i < COURSES; i += 1) {
    const y = Y0 + i * PITCH + TH / 2;
    out.push({ position: [-3.05, y, 3.525], scale: [1.00, TH, 0.15] });
    out.push({ position: [1.05, y, 3.525], scale: [5.00, TH, 0.15] });
    out.push({ position: [4.025, y, 2.385], scale: [0.15, TH, 1.79] });
  }
  return out;
}

function mullionPlacements(): Placement[] {
  const out: Placement[] = [
    // The head and sill rails OVERLAP the pane rather than ending flush with it.
    // Flush, their outer faces share the glazing's own 3.08 and 1.15 planes facing
    // the same way -- 15.73 m2 of z-fight each. A frame should overlap the opening
    // it fills, never meet its edge exactly.
    { position: [0, 3.050, 3.565], scale: [7.20, 0.14, 0.14] },   // front head rail
    { position: [0, 1.190, 3.565], scale: [7.20, 0.14, 0.14] },   // front sill rail
    { position: [-2.00, 2.455, 3.575], scale: [1.16, 0.09, 0.13] }, // entrance head transom
    { position: [-1.58, 1.75, 3.615], scale: [0.045, 0.42, 0.045] }, // entrance pull handle
    { position: [4.035, 3.050, 2.380], scale: [0.14, 0.14, 1.86] }, // return head rail
    { position: [4.035, 1.190, 2.380], scale: [0.14, 0.14, 1.86] }, // return sill rail
  ];
  for (const x of [-3.55, -2.55, -1.45, -0.15, 1.15, 2.45, 3.55]) {
    out.push({ position: [x, 2.115, 3.565], scale: [0.06, 1.93, 0.13] });
  }
  for (const z of [1.48, 2.38, 3.28]) {
    out.push({ position: [4.035, 2.115, z], scale: [0.13, 1.93, 0.06] });
  }
  return out;
}

const CONDENSERS: Placement[] = [-0.60, 0.70, 2.00].map((x) => ({
  position: [x, DECK_Y, -2.30] as Vec3,
  scale: [1, 1, 1] as Vec3,
}));

/* ---------------------------------------------------------------------------
 * Brand canvas.
 *
 * Drawn to a 2D canvas and assigned to the sign panel's material map AFTER
 * createSculptMaterial has returned. That route is explicitly unaffected by the
 * textureless declaration: textureless skips the FIVE procedurally synthesised
 * canvases makeProceduralTextureSet would write pixel by pixel, and a single
 * authored brand canvas is not one of them.
 * ------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------
 * Front-elevation textures: brand sign, glazing, timber grain.
 *
 * All three are Canvas 2D images assigned AFTER material construction, which is
 * the one texture route the `textureless` declaration leaves open: it costs a
 * few milliseconds, not the 5-canvas-per-material procedural set, and it does
 * not force the authored albedo to white.
 *
 * LETTERING IS DRAWN AS PATHS, NEVER fillText. The headless harness has no
 * Georgia and no Arial Black, and a host page has whatever the player's OS has.
 * fillText silently falls back, and the first ship of this sign rendered a thin
 * Liberation Serif wordmark that ended 200 px short of its panel -- a different
 * shape on every machine. A stroked monoline glyph set with round caps is the
 * same on all of them, and a bold rounded sans is what the Cafe Amazon wordmark
 * IS, so the approximation is close rather than merely deterministic.
 * ------------------------------------------------------------------------- */

/** One stroke of a glyph: a polyline, or an arc sampled into one. Units: 100/em,
 *  y UP from the baseline, cap height 72, x-height 50, stroke width 20. */
type Stroke = { line: [number, number][] } | { arc: [number, number, number, number, number] };
type Glyph = { adv: number; strokes: Stroke[] };

const GLYPHS: Record<string, Glyph> = {
  ' ': { adv: 30, strokes: [] },
  'C': { adv: 74, strokes: [{ arc: [38, 36, 30, 0.75, 2 * Math.PI - 0.75] }] },
  'a': { adv: 62, strokes: [{ arc: [27, 25, 21, 0, 2 * Math.PI] }, { line: [[48, 50], [48, 0]] }] },
  'f': { adv: 46, strokes: [{ line: [[18, 0], [18, 58]] }, { arc: [36, 58, 18, Math.PI, Math.PI * 0.3] }, { line: [[4, 50], [36, 50]] }] },
  'e': { adv: 60, strokes: [{ line: [[6, 25], [48, 25]] }, { arc: [27, 25, 21, 0, Math.PI * 1.82] }] },
  'é': { adv: 60, strokes: [{ line: [[6, 25], [48, 25]] }, { arc: [27, 25, 21, 0, Math.PI * 1.82] }, { line: [[26, 64], [38, 74]] }] },
  'm': { adv: 90, strokes: [{ line: [[10, 50], [10, 0]] }, { line: [[10, 32], [10, 34]] }, { arc: [26, 34, 16, Math.PI, 0] }, { line: [[42, 34], [42, 0]] }, { arc: [58, 34, 16, Math.PI, 0] }, { line: [[74, 34], [74, 0]] }] },
  'n': { adv: 62, strokes: [{ line: [[10, 50], [10, 0]] }, { arc: [28, 32, 18, Math.PI, 0] }, { line: [[46, 32], [46, 0]] }] },
  'o': { adv: 60, strokes: [{ arc: [27, 25, 21, 0, 2 * Math.PI] }] },
  'z': { adv: 56, strokes: [{ line: [[6, 50], [46, 50], [6, 0], [46, 0]] }] },
  'A': { adv: 78, strokes: [{ line: [[6, 0], [38, 72], [70, 0]] }, { line: [[18, 26], [58, 26]] }] },
  'M': { adv: 82, strokes: [{ line: [[8, 0], [8, 72], [40, 22], [72, 72], [72, 0]] }] },
  'Z': { adv: 68, strokes: [{ line: [[6, 72], [58, 72], [6, 0], [58, 0]] }] },
  'O': { adv: 78, strokes: [{ arc: [38, 36, 30, 0, 2 * Math.PI] }] },
  'N': { adv: 70, strokes: [{ line: [[8, 0], [8, 72], [60, 0], [60, 72]] }] },
};

/** Stroke `text` at (x, baselineY) in canvas space, `scale` px per em unit. */
function strokeText(
  ctx: CanvasRenderingContext2D, text: string, x: number, baseline: number,
  scale: number, width: number, style: string,
): number {
  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = style;
  ctx.lineWidth = width * scale;
  let pen = x;
  for (const ch of text) {
    const g = GLYPHS[ch];
    if (!g) continue;
    for (const s of g.strokes) {
      ctx.beginPath();
      if ('line' in s) {
        s.line.forEach(([gx, gy], i) => {
          const px = pen + gx * scale, py = baseline - gy * scale;
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        });
      } else {
        const [cx, cy, r, a0, a1] = s.arc;
        // Sampled, so the direction is whichever way a0 -> a1 goes; canvas y is
        // down, so the sign of the sine flips.
        const n = 28;
        for (let i = 0; i <= n; i += 1) {
          const a = a0 + (a1 - a0) * (i / n);
          const px = pen + (cx + r * Math.cos(a)) * scale, py = baseline - (cy + r * Math.sin(a)) * scale;
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
    }
    pen += g.adv * scale;
  }
  ctx.restore();
  return pen;
}

function textAdvance(text: string, scale: number): number {
  let w = 0;
  for (const ch of text) w += (GLYPHS[ch]?.adv ?? 0) * scale;
  return w;
}

/** The shipped sign: 1200x276 WebP, baked once and embedded so it is identical
 *  on every host. Composed in Pillow from (a) a flux/dev-generated toucan-and-
 *  leaves badge -- a stylised approximation of the trademark, recorded as such --
 *  cut to a circle with a white rim, and (b) "Café Amazon" set in URW Gothic
 *  Demi with a dark drop shadow, on the fascia's measured #466748. Sources and
 *  the compose step live in scratch/<id>/sign/. buildBrandCanvas() below is the
 *  vector fallback used only if this image fails to decode. */
const SIGN_IMAGE_DATA_URL = 'data:image/webp;base64,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';

/** Canvas size of the brand panel; the panel box is cut to the same aspect. */
const SIGN_W = 1200, SIGN_H = 276;

function buildBrandCanvas(): HTMLCanvasElement | null {
  if (typeof document === 'undefined') return null;
  const W = SIGN_W, H = SIGN_H;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  ctx.fillStyle = '#466748';                     // the measured sun-lit fascia green
  ctx.fillRect(0, 0, W, H);

  // --- logo roundel ---------------------------------------------------------
  // A STYLISED approximation of the Cafe Amazon mark, not the artwork: the real
  // roundel is an illustrated toucan over a foliage wreath around a hand-drawn
  // "Amazon", a registered trademark whose vector is not available here. The
  // plate's roundel is ~0.85 of the band height and sits LEFT of the wordmark
  // with its centre above the wordmark's mid-line; both are kept.
  const cx = 140, cy = 134, R = 104;
  // foliage wreath: radial leaves, white-edged, behind the disc
  for (let i = 0; i < 12; i += 1) {
    const a = (i / 12) * Math.PI * 2 + 0.15;
    ctx.save();
    ctx.translate(cx + Math.cos(a) * (R - 22), cy + Math.sin(a) * (R - 22));
    ctx.rotate(a + 0.55);
    ctx.beginPath(); ctx.ellipse(0, 0, 30, 17, 0, 0, Math.PI * 2);
    ctx.fillStyle = i % 2 ? '#2f8a3c' : '#3da24a'; ctx.fill();
    ctx.lineWidth = 3; ctx.strokeStyle = '#ffffff'; ctx.stroke();
    ctx.restore();
  }
  ctx.beginPath(); ctx.arc(cx, cy, R - 24, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff'; ctx.fill();                    // white ring
  ctx.beginPath(); ctx.arc(cx, cy, R - 31, 0, Math.PI * 2);
  ctx.fillStyle = '#17482a'; ctx.fill();                    // dark green field
  ctx.save();
  ctx.beginPath(); ctx.arc(cx, cy, R - 31, 0, Math.PI * 2); ctx.clip();
  // inner leaves, lower half
  for (let i = 0; i < 6; i += 1) {
    ctx.beginPath();
    ctx.ellipse(cx - 50 + i * 20, cy + 46 + (i % 2) * 8, 11, 30, -0.6 + i * 0.24, 0, Math.PI * 2);
    ctx.fillStyle = i % 2 ? '#2f8a3c' : '#49b256'; ctx.fill();
  }
  // toucan, top-left: black body, white bib, big orange beak reaching up-left
  ctx.beginPath(); ctx.ellipse(cx - 20, cy - 20, 32, 26, -0.35, 0, Math.PI * 2);
  ctx.fillStyle = '#111a12'; ctx.fill();
  ctx.beginPath(); ctx.ellipse(cx - 24, cy - 26, 18, 14, -0.35, 0, Math.PI * 2);
  ctx.fillStyle = '#fff4d6'; ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cx - 36, cy - 40);
  ctx.quadraticCurveTo(cx - 66, cy - 84, cx - 80, cy - 62);
  ctx.quadraticCurveTo(cx - 64, cy - 42, cx - 28, cy - 22);
  ctx.closePath();
  ctx.fillStyle = '#f4a11c'; ctx.fill();
  ctx.beginPath(); ctx.moveTo(cx - 44, cy - 46); ctx.lineTo(cx - 74, cy - 62); ctx.lineTo(cx - 66, cy - 50); ctx.closePath();
  ctx.fillStyle = '#c8121b'; ctx.fill();
  ctx.beginPath(); ctx.arc(cx - 20, cy - 32, 4.5, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff'; ctx.fill();
  // "Café" small, white, tucked right of the toucan inside the disc
  strokeText(ctx, 'Café', cx + 18, cy - 12, 0.24, 24, '#ffffff');
  // "AMAZON" across the lower disc: dark outline under yellow
  const amz = 'AMAZON', amzScale = 0.31;
  const amzX = cx - textAdvance(amz, amzScale) / 2, amzY = cy + 34;
  strokeText(ctx, amz, amzX, amzY, amzScale, 38, '#0f2a16');
  strokeText(ctx, amz, amzX, amzY, amzScale, 20, '#f6c62e');
  ctx.restore();

  // --- wordmark: raised light-green rounded channel letters, dark shadow ---
  const text = 'Café Amazon', scale = 1.30, x0 = 286, baseline = 196;
  strokeText(ctx, text, x0 + 7, baseline + 9, scale, 22, 'rgba(6, 22, 12, 0.9)');
  strokeText(ctx, text, x0, baseline, scale, 20, '#7fc242');
  return canvas;
}

/** Glazing: a de-lit INTERIOR impression, not a hole.
 *
 * The plate shows a lit cafe interior through the glass -- floor, counter, back
 * wall -- and the exterior-shell rule says none of that is modelled. Authored
 * as a plain dark pane the glazing rendered at luma ~20 against a backdrop of
 * 58, which the silhouette gate reads as background punched through the model
 * and a player reads as a black slab. One 512x256 canvas carries the impression
 * instead: sky/ceiling reflection at the head, warm interior with a counter
 * band, dark floor below the sill (seen through the entrance leaf only), and a
 * soft diagonal sheen. Mean luma ~80, the plate's own, and above the gate's 58.
 *
 * Mapped by WORLD position (planarUvByWorld), so the counter sits at the same
 * height on the front run, the return and the door leaf.
 */
function buildGlazingCanvas(): HTMLCanvasElement | null {
  if (typeof document === 'undefined') return null;
  const W = 512, H = 256;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  // v = 1 is the head (y 3.08), v = 0 the ground (y 0.06); canvas y runs down.
  const yOf = (worldY: number) => H * (1 - (worldY - 0.06) / 3.02);
  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0.00, '#7d837e');   // ceiling / sky reflection at the head
  g.addColorStop(0.22, '#62635d');
  g.addColorStop(0.55, '#554f48');   // back wall, warm grey
  g.addColorStop(0.64, '#4a443c');
  g.addColorStop(1.00, '#3f3931');   // floor
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  // back counter: a lighter band at 0.9-1.15 m with a dark plinth under it
  ctx.fillStyle = '#75695a'; ctx.fillRect(0, yOf(1.15), W, yOf(0.85) - yOf(1.15));
  ctx.fillStyle = '#3f3a33'; ctx.fillRect(0, yOf(0.85), W, yOf(0.55) - yOf(0.85));
  // menu-board glow and a few soft interior verticals (shelving, a column)
  ctx.fillStyle = 'rgba(235, 220, 190, 0.20)'; ctx.fillRect(W * 0.30, yOf(2.45), W * 0.42, yOf(1.95) - yOf(2.45));
  for (const [u, w, a] of [[0.10, 0.03, 0.22], [0.52, 0.02, 0.18], [0.83, 0.035, 0.22]] as [number, number, number][]) {
    ctx.fillStyle = `rgba(30, 28, 24, ${a})`; ctx.fillRect(W * u, yOf(3.08), W * w, yOf(1.15) - yOf(3.08));
  }
  // diagonal sheen, upper-left to lower-right
  const sheen = ctx.createLinearGradient(0, 0, W, H);
  sheen.addColorStop(0.00, 'rgba(255,255,255,0.10)');
  sheen.addColorStop(0.35, 'rgba(255,255,255,0.03)');
  sheen.addColorStop(0.65, 'rgba(255,255,255,0.00)');
  sheen.addColorStop(1.00, 'rgba(255,255,255,0.06)');
  ctx.fillStyle = sheen; ctx.fillRect(0, 0, W, H);
  return canvas;
}

/** Timber grain: a MULTIPLIER over the authored slat albedo (#ad7a4d), so the
 *  canvas is near-white with darker along-grain streaks and the material's own
 *  colour survives. Horizontal in canvas space = along the batten, since every
 *  batten face maps u across its length. Per-batten tone comes from
 *  instanceColor, not from here. */
function buildTimberCanvas(): HTMLCanvasElement | null {
  if (typeof document === 'undefined') return null;
  const W = 512, H = 64;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  ctx.fillStyle = '#f2ece4'; ctx.fillRect(0, 0, W, H);
  let seed = 17;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  for (let i = 0; i < 90; i += 1) {
    const y = rnd() * H, len = 60 + rnd() * 420, x = rnd() * W - 100;
    const dark = rnd() < 0.7;
    ctx.strokeStyle = dark ? `rgba(70, 40, 18, ${0.10 + rnd() * 0.22})` : `rgba(255, 244, 225, ${0.15 + rnd() * 0.2})`;
    ctx.lineWidth = 0.8 + rnd() * 2.2;
    ctx.beginPath(); ctx.moveTo(x, y);
    ctx.bezierCurveTo(x + len * 0.3, y + (rnd() - 0.5) * 6, x + len * 0.6, y + (rnd() - 0.5) * 6, x + len, y + (rnd() - 0.5) * 4);
    ctx.stroke();
  }
  // a couple of tight cathedral figures
  for (let k = 0; k < 3; k += 1) {
    const x = rnd() * W, y = rnd() * H;
    for (let r = 6; r < 40; r += 5) {
      ctx.strokeStyle = `rgba(80, 45, 20, ${0.10 + rnd() * 0.1})`; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.ellipse(x, y, r * 4.5, r * 0.7, 0, 0, Math.PI * 2); ctx.stroke();
    }
  }
  return canvas;
}

function canvasTexture(canvas: HTMLCanvasElement, options: ProceduralModelOptions, repeat: [number, number] = [1, 1]): THREE.CanvasTexture {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = (THREE as any).SRGBColorSpace ?? tex.colorSpace;
  tex.anisotropy = options.textureAnisotropy ?? 4;
  tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat[0], repeat[1]);
  tex.needsUpdate = true;
  return tex;
}

/** Rewrite a geometry's UVs as a planar projection in WORLD metres: +Z faces map
 *  u over [x0,x1], +X faces map u over [z1,z0] (a viewer at +X sees -Z to the
 *  right), both map v over [y0,y1]. Other faces get a harmless x/z projection. */
function planarUvByWorld(geom: THREE.BufferGeometry, x: [number, number], y: [number, number], z: [number, number]): THREE.BufferGeometry {
  const pos = geom.getAttribute('position'), nrm = geom.getAttribute('normal');
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i += 1) {
    const px = pos.getX(i), py = pos.getY(i), pz = pos.getZ(i);
    const nx = Math.abs(nrm.getX(i)), ny = Math.abs(nrm.getY(i)), nz = Math.abs(nrm.getZ(i));
    let u: number, v: number;
    if (nz >= nx && nz >= ny) { u = (px - x[0]) / (x[1] - x[0]); v = (py - y[0]) / (y[1] - y[0]); }
    else if (nx >= ny) { u = (z[1] - pz) / (z[1] - z[0]); v = (py - y[0]) / (y[1] - y[0]); }
    else { u = (px - x[0]) / (x[1] - x[0]); v = (pz - z[0]) / (z[1] - z[0]); }
    uv[i * 2] = u; uv[i * 2 + 1] = v;
  }
  geom.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  return geom;
}

/** Assign the three front canvases. Called once every mesh and cluster exists. */
function applyFrontTextures(
  meshes: Record<string, THREE.Mesh>,
  clusters: Record<string, THREE.InstancedMesh>,
  options: ProceduralModelOptions,
): void {
  const signMesh = meshes['fascia-sign'];
  // GUARDED, like buildBrandCanvas and buildGlazingCanvas below it. THREE's
  // ImageLoader reaches for document.createElement, and this module is evaluated
  // under plain Node by check-coplanar.mjs and derive-colliders.mjs -- unguarded,
  // the prop passed every browser render and then failed every Node-side gate
  // with a stack trace that read as a broken module. It was the only one of the
  // hundred that would not construct, so it shipped with no physics compound.
  //
  // The colour is set INSIDE the guard on purpose: it is white only because the
  // baked canvas carries the measured green itself, so whitening it without
  // assigning the map would leave the fascia white to anything reading materials
  // outside a browser.
  if (signMesh && typeof document !== 'undefined') {
    const mat = signMesh.material as THREE.MeshPhysicalMaterial;
    // The canvas carries the measured green itself; leaving color at anything
    // but white would multiply it in twice.
    mat.color = new THREE.Color(0xffffff);
    // Assigned SYNCHRONOUSLY: the harness collects material maps after the
    // factory returns and waits on the ones still loading, so a map swapped in
    // from onLoad would be invisible to it and could miss the screenshot.
    const loader = new THREE.TextureLoader();
    const baked = loader.load(SIGN_IMAGE_DATA_URL, undefined, undefined, () => {
      const fallback = buildBrandCanvas();
      if (fallback) { mat.map = canvasTexture(fallback, options); mat.needsUpdate = true; }
    });
    baked.colorSpace = (THREE as any).SRGBColorSpace ?? baked.colorSpace;
    baked.anisotropy = options.textureAnisotropy ?? 4;
    mat.map = baked;
    mat.needsUpdate = true;
  }

  const glazing = meshes['shopfront-glazing'];
  const interior = glazing ? buildGlazingCanvas() : null;
  if (glazing && interior) {
    const mat = glazing.material as THREE.MeshPhysicalMaterial;
    mat.map = canvasTexture(interior, options);
    mat.color = new THREE.Color(0xffffff);      // absolute tones, see buildGlazingCanvas
    // 0.06 was authored for a pane reflecting a real environment; with the
    // reflection painted into the map a mirror finish only darkens it. 0.30
    // keeps a specular lobe without the pane going black off-axis.
    mat.roughness = 0.30;
    mat.needsUpdate = true;
  }

  const battens = clusters['dado-battens'];
  const canopy = meshes['canopy'];
  const timber = (battens ?? canopy) ? buildTimberCanvas() : null;
  if (timber) {
    const tex = canvasTexture(timber, options);
    for (const m of [battens?.material, canopy?.material]) {
      if (!m) continue;
      const mat = m as THREE.MeshPhysicalMaterial;
      if (mat.map) continue;                    // shared material: assign once
      mat.map = tex;                            // multiplies the authored #ad7a4d
      mat.needsUpdate = true;
    }
  }
  if (battens) {
    // Per-board tone: RELATIVE multipliers around 1, because setColorAt
    // multiplies with material.color and this material is deliberately not
    // white -- it is shared with the canopy and carries the measured albedo.
    const c = new THREE.Color();
    for (let i = 0; i < battens.count; i += 1) {
      const h = ((i * 2654435761) >>> 0) % 1000 / 1000;          // Knuth hash, deterministic
      const tone = 0.80 + h * 0.20;                               // 0.80 .. 1.00
      c.setRGB(tone, tone * (0.97 + h * 0.03), tone * (0.94 + h * 0.06));
      battens.setColorAt(i, c);
    }
    if (battens.instanceColor) battens.instanceColor.needsUpdate = true;
  }
}

/* ---------------------------------------------------------------------------
 * thaikit entry point.
 *
 * thaikit calls createObjectModel(spec, options); the generated factory is named
 * for its target and takes options alone. `spec` is accepted and attached for
 * host-side inspection -- the reconstruction data already lives in this module,
 * so it is deliberately not treated as a second source of truth.
 *
 * It also NORMALISES sculptRuntime into the shape thaikit's harness and drawer
 * read. The generator emits Records keyed by id; the harness maps over arrays
 * and returns the object straight across the puppeteer bridge, where a Record of
 * Object3D is circular and fails to serialise -- which surfaces not as an error
 * but as the whole stats object arriving undefined.
 * ------------------------------------------------------------------------- */
export function createObjectModel(
  spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = createCafeAmazonStoreBuildingModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  const nodes = (rt?.nodes ?? {}) as Record<string, THREE.Object3D>;
  const meshes = (rt?.meshes ?? {}) as Record<string, THREE.Mesh>;

  const materialMap = (root.userData.materialMap ?? {}) as Record<string, THREE.Material>;
  const matById = (id: string): THREE.Material =>
    materialMap[id] ?? new THREE.MeshStandardMaterial({ color: 0x888888 });

  // --- real geometry -------------------------------------------------------
  // Two things the generator does not do, both of which have to happen here:
  // it ignores geometryDescriptor.subParts, so the components it DOES emit
  // arrive as unit boxes; and it emits only MACRO components, so fascia-band,
  // fascia-sign and canopy -- all meso -- never got a mesh at all.
  const BUILD: [string, string, () => THREE.BufferGeometry][] = [
    ['building-shell', 'render-cream', buildShellGeometry],
    ['roof-deck', 'concrete-deck', buildRoofDeckGeometry],
    ['shopfront-glazing', 'glass-tinted', buildGlazingGeometry],
    ['fascia-band', 'fascia-green', buildFasciaBandGeometry],
    ['fascia-sign', 'fascia-sign-graphic', buildFasciaSignGeometry],
    ['canopy', 'timber-slat', buildCanopyGeometry],
  ];
  for (const [id, materialId, make] of BUILD) {
    let mesh = meshes[id];
    if (mesh) {
      mesh.geometry.dispose();
      mesh.geometry = make();
      // The generator names a mesh after the component's prose NAME ("Rendered
      // shell: four walls, parapet, coping, side service door"). The drawer's
      // runtime tab and the part-coverage gate both list parts by name, so use
      // the stable id instead of a sentence.
      mesh.name = id;
    } else {
      mesh = new THREE.Mesh(make(), matById(materialId));
      mesh.name = id;
      mesh.castShadow = options.castShadow ?? true;
      mesh.receiveShadow = options.receiveShadow ?? true;
      root.add(mesh);
      meshes[id] = mesh;
      nodes[id] = mesh;
    }
    // Geometry is authored in world metres, so neither the mesh nor its node may
    // add a transform on top of it.
    mesh.position.set(0, 0, 0);
    mesh.quaternion.identity();
    mesh.scale.set(1, 1, 1);
    const node = nodes[id];
    if (node && node !== mesh) { node.position.set(0, 0, 0); node.quaternion.identity(); node.scale.set(1, 1, 1); }
  }

  // --- repetition systems: 4 InstancedMeshes for 65 parts ------------------
  // ONE unit box shared by the pilaster, batten and mullion clusters: three
  // InstancedMeshes, one unique geometry between them.
  const unitBox = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
  const clusters: Record<string, THREE.InstancedMesh> = {};
  clusters['pilasters'] = addCluster(root, 'pilasters', unitBox, matById('fascia-green'), PILASTERS, options);
  clusters['dado-battens'] = addCluster(root, 'dado-battens', unitBox, matById('timber-slat'), battenPlacements(), options);
  clusters['shopfront-mullions'] = addCluster(root, 'shopfront-mullions', unitBox, matById('alu-dark'), mullionPlacements(), options);
  clusters['rooftop-condensers'] = addCluster(root, 'rooftop-condensers', buildCondenserGeometry(), matById('galvanised'), CONDENSERS, options);
  for (const [id, mesh] of Object.entries(clusters)) {
    mesh.userData.repetitionSystem = id;
    nodes[id] = mesh;
  }

  // --- front-elevation canvases, assigned after material construction ------
  applyFrontTextures(meshes, clusters, options);

  // --- runtime contract ----------------------------------------------------
  // PIVOTS: exactly ONE, the root. This is a sealed exterior building shell. It
  // has no lid, no wheel and no door leaf a game will articulate, so nothing
  // else gets an axis. A named pivot is a promise that a part turns on it, and
  // a prop that declares eight has described a machine that does not exist.
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

  // SOCKETS: none. Nothing clips into a building shell and nothing is emitted
  // from it. Naming a marker after a place on the surface would describe a
  // location, not a mechanism.
  const sockets: THREE.Object3D[] = [];

  // Colliders are plain DATA, not Object3D, so they carry no .name of their own
  // and would stringify as [object Object] in any name-mapping consumer. Give
  // each the id of the component it owns -- and drop the empty and 'none' ones:
  // the generator writes an entry per component whether or not one was declared,
  // and a nameless empty proxy reads as a physics shape that exists and does
  // nothing.
  const colliders = Object.entries((rt?.colliders ?? {}) as Record<string, any>)
    .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0 && c.type && c.type !== 'none')
    .map(([id, c]) => ({ name: id, ...(c as object) }));

  // Destruction groups: this prop declares NONE, and promotion checks built
  // against declared as an equality in BOTH directions. Derived rather than
  // assumed empty, so a component that somehow carried a fractureGroup fails the
  // gate loudly instead of being silently dropped here.
  const grouped = new Map<string, THREE.Object3D[]>();
  for (const [name, members] of Object.entries((rt?.destructionGroups ?? {}) as Record<string, THREE.Object3D[]>)) {
    grouped.set(name, [...members]);
  }
  for (const node of Object.values(nodes)) {
    const group = (node as any)?.userData?.actionProfile?.destruction?.fractureGroup;
    if (typeof group !== 'string' || !group) continue;
    if (!grouped.has(group)) grouped.set(group, []);
    grouped.get(group)!.push(node);
  }

  root.userData.sculptRuntime = {
    ...(rt ?? {}),
    // A COUNT, not the Record -- see the doc comment above.
    nodes: Object.keys(nodes).length,
    pivots,
    sockets,
    colliders,
    destructionGroups: [...grouped.entries()].map(([name, members]) => ({ name, members })),
    byId: { nodes, meshes, sockets: {} },
  };
  return root;
}
