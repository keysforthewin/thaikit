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

/** fascia-sign: brand panel standing proud of the band (3.63 / 3.60 / 3.50). */
function buildFasciaSignGeometry(): THREE.BufferGeometry {
  // Sized to the graphic, not to the band. A panel wider than its artwork shows
  // its own proud edge as a rectangle ruled across the fascia.
  return boxGeometry([-3.70, 3.50, ZO + 0.07], [-0.45, 4.25, ZO + 0.13]);
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
  return mergeGeometries([
    boxGeometry([-3.56, 1.15, ZO - 0.03], [3.56, 3.08, ZO + 0.05]),
    boxGeometry([XO - 0.03, 1.15, 1.48], [XO + 0.05, 3.08, 3.28]),
    // The entrance leaf is glazed to the ground. Without this the dado's gap
    // exposes the cream shell wall behind it and the doorway renders as a WHITE
    // panel -- the one place the applied-proud shopfront can betray that there is
    // a solid wall behind the glass.
    boxGeometry([-2.55, 0.06, ZO - 0.03], [-1.45, 1.15, ZO + 0.05]),
  ]);
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
function buildBrandCanvas(): HTMLCanvasElement | null {
  if (typeof document === 'undefined') return null;
  const W = 1024, H = 236;                       // 4.33:1, the panel's own aspect
  // The canvas and the panel are sized to the ARTWORK, not to the band. Any
  // green left over on the canvas becomes panel that is proud of the fascia
  // but carries no graphic, and its edge rules a visible rectangle across the
  // band -- which is exactly what the first render showed.
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  ctx.fillStyle = '#466748';                     // the measured sun-lit fascia green
  ctx.fillRect(0, 0, W, H);

  // --- logo roundel ---------------------------------------------------------
  // A STYLISED approximation of the Cafe Amazon mark, not the artwork. The real
  // roundel is an illustrated toucan over foliage; it is a registered trademark
  // and the vector is not available to this pipeline. At the size it occupies on
  // the prop -- 0.75 m tall, read from 5-15 m -- a stylised mark is the right
  // answer anyway, but it is an approximation and is recorded as one.
  const cx = 112, cy = H / 2, r = 92;
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff'; ctx.fill();                    // white outer ring
  ctx.beginPath(); ctx.arc(cx, cy, r - 9, 0, Math.PI * 2);
  ctx.fillStyle = '#f2a52c'; ctx.fill();                    // orange inner ring
  ctx.beginPath(); ctx.arc(cx, cy, r - 17, 0, Math.PI * 2);
  ctx.fillStyle = '#14532b'; ctx.fill();                    // dark green field
  // foliage: overlapping leaf blades across the lower half
  ctx.save();
  ctx.beginPath(); ctx.arc(cx, cy, r - 17, 0, Math.PI * 2); ctx.clip();
  for (let i = 0; i < 7; i += 1) {
    const lx = cx - 62 + i * 20;
    ctx.beginPath();
    ctx.ellipse(lx, cy + 42 - (i % 2) * 14, 15, 40, -0.5 + i * 0.16, 0, Math.PI * 2);
    ctx.fillStyle = i % 2 ? '#2f8f3e' : '#3fa84a';
    ctx.fill();
  }
  // toucan: dark body, white cheek, heavy yellow-orange beak
  ctx.beginPath();
  ctx.ellipse(cx + 4, cy - 18, 30, 26, -0.25, 0, Math.PI * 2);
  ctx.fillStyle = '#0d3b1e'; ctx.fill();
  ctx.beginPath();
  ctx.ellipse(cx + 2, cy - 22, 17, 14, -0.25, 0, Math.PI * 2);
  ctx.fillStyle = '#ffffff'; ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cx - 12, cy - 30);
  ctx.quadraticCurveTo(cx - 52, cy - 52, cx - 66, cy - 20);
  ctx.quadraticCurveTo(cx - 40, cy - 20, cx - 12, cy - 14);
  ctx.closePath();
  ctx.fillStyle = '#f2a52c'; ctx.fill();
  ctx.beginPath(); ctx.arc(cx + 2, cy - 26, 5, 0, Math.PI * 2);
  ctx.fillStyle = '#0d3b1e'; ctx.fill();
  ctx.restore();

  // --- wordmark: raised light-green channel lettering with a drop shadow ---
  const text = 'Café Amazon';
  ctx.font = 'bold 122px Georgia, "Times New Roman", serif';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'rgba(10, 26, 14, 0.85)';
  ctx.fillText(text, 232 + 5, cy + 7);
  ctx.fillStyle = '#5fbf4a';
  ctx.fillText(text, 232, cy + 2);
  return canvas;
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

  // --- the brand canvas, assigned after material construction --------------
  const signMesh = meshes['fascia-sign'];
  if (signMesh) {
    const canvas = buildBrandCanvas();
    if (canvas) {
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = (THREE as any).SRGBColorSpace ?? tex.colorSpace;
      tex.anisotropy = options.textureAnisotropy ?? 4;
      const mat = signMesh.material as THREE.MeshPhysicalMaterial;
      mat.map = tex;
      // The generated material already carries the measured green; leaving color
      // at anything but white would multiply the canvas by it twice.
      mat.color = new THREE.Color(0xffffff);
      mat.needsUpdate = true;
    }
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
