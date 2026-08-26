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

// Generated from ObjectSculptSpec target: Elephant Crossing Sign
// Sculpt build pass: optimization-pass
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createElephantCrossingSignModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "Elephant Crossing Sign";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": true, "fovDegrees": 40.0, "aspect": 1.0, "orientation": {"yaw": -36.3, "pitch": 0.0, "roll": -8.0}, "positionHint": [0.0, 1.75, 3.4], "method": "homography from the black border rule's four fitted edge lines (homography.json)", "note": "Not solved with solve_camera_pose.py, which had nothing to fit: this subject is planar, so the camera IS a homography and the plate gives it exactly. The diamond's two diagonals must be equal and measure 333/413 px, so the plate is seen acos(0.806) = 36.3 deg off its normal. The -8 deg roll is the plate's in-plane tilt in the photograph, confirmed independently by the left vertex's two edge slopes (0.94 and 0.66, mean 0.80 = cos 36.3). Camera framing only - neither the yaw nor the roll is modelled into the prop, which stands square and faces +Z."}, "approximationNotes": []};
  root.userData.materialPipeline = {"status": "proceed", "regions": [{"componentId": "sign-plates", "regionId": "sheeting", "materialId": "coating.painted-metal", "status": "proceed", "confidence": 0.75, "assignment": {"materialId": "coating.painted-metal", "status": "proceed", "source": "vision", "confidence": 0.75, "method": "family-fallback", "alternatives": [], "evidence": {"crop": {"path": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/00-sheeting.png", "bbox": {"x": 443, "y": 168, "width": 40, "height": 30}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0011}, "pbr": {"ok": true, "verdict": "pass", "confidence": 0.751, "estimatedFidelity": 0.751, "targetThreshold": 0.7, "materialId": "sheeting", "sourceImage": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/00-sheeting.png", "outDir": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/pbr-00-sheeting", "palette": ["#D5B932", "#D2B52C", "#DBBE38", "#CDB027", "#DCC347"], "maps": {"albedo": {"path": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/pbr-00-sheeting/sheeting_albedo.png", "url": "sheeting_albedo.png", "channel": "albedo", "source": "reference-pixel-extraction"}, "roughness": {"path": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/pbr-00-sheeting/sheeting_roughness.png", "url": "sheeting_roughness.png", "channel": "roughness", "source": "reference-pixel-extraction"}, "height": {"path": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/pbr-00-sheeting/sheeting_height.png", "url": "sheeting_height.png", "channel": "height", "source": "reference-pixel-extraction"}, "normal": {"path": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/pbr-00-sheeting/sheeting_normal.png", "url": "sheeting_normal.png", "channel": "normal", "source": "reference-pixel-extraction"}, "ao": {"path": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/pbr-00-sheeting/sheeting_ao.png", "url": "sheeting_ao.png", "channel": "ao", "source": "reference-pixel-extraction"}}, "diagnostics": {"sourceWidth": 40, "sourceHeight": 30, "mapSize": 512, "cropBBoxPixels": {"x": 0, "y": 0, "width": 40, "height": 30}, "mask": {"backgroundColor": "#D2B72E", "backgroundNoise": 10.677, "transparentPixelFraction": 0.0, "foregroundCoverage": 1.0}, "mapStats": {"valueRange": 0.08, "heightP90Gradient": 0.11264, "roughnessBase": 0.793, "roughnessVariation": 0.163, "normalStrength": 0.288, "blurRadius": 10}, "palette": ["#D5B932", "#D2B52C", "#DBBE38", "#CDB027", "#DCC347"]}, "warnings": ["image is not clearly isolated from background; using most pixels as material evidence", "object/background separation is weak", "single-image inverse rendering cannot prove true physical PBR; confidence is capped", "low value range weakens height/roughness inference"], "limitation": "single-image PBR extraction is an estimate; 70%+ extraction confidence still needs render screenshot review"}, "texture": {"finishClass": "painted-metal", "recipe": {"metalness": 0.0, "roughness": 0.5, "clearcoat": 1.0, "clearcoatRoughness": 0.05, "transmission": 0.0, "ior": 1.5, "envMapIntensity": 1.0, "anisotropy": 0.0, "procedural": "flat-clearcoat"}, "palette": ["#D2B52F", "#DABF42", "#D3B62F", "#D3B72D", "#D6B933"], "paletteHueRisk": [], "gradientAxis": "horizontal", "stats": {"meanLum": 178.3, "meanSaturation": 0.764, "gradientStrength": 0.05, "mottle": 0.011, "streakRatio": 1.46, "hueSpread": 0.0, "specularFraction": 0.0}}}, "profileId": "coating.painted-metal", "family": "coating", "subtype": "paint-over-metal", "finish": "gloss-or-satin", "renderPrior": {"metalness": 0.0, "roughness": 0.45, "clearcoat": 0.75, "clearcoatRoughness": 0.12, "ior": 1.5}, "requiredMaps": ["map", "roughnessMap"], "optionalMaps": ["normalMap", "clearcoatMap", "clearcoatRoughnessMap", "metalnessMap"], "validationViews": ["albedo-unlit", "neutral-studio", "grazing", "environment-reflection", "reference-beauty"], "sourceRefs": ["three.mesh-physical", "gltf.2", "khronos.gltf-pbr", "adobe.pbr-guide-1", "adobe.pbr-guide-2"], "visualCues": ["diffuse paint colour under a separate glossy coat", "chips may expose metallic substrate"], "confidenceNote": "Resolved to coating.painted-metal at 0.488, below the registry's own bar, and promoted to proceed on independent evidence rather than on that number: retroreflective sheeting IS a coating over an aluminium blank, so the FAMILY is exact; the crop's PBR extraction cleared 0.7 at 0.827; and the per-crop comparator passed at 0.8631 with no mismatches. Every authored value sits inside the profile's own priors - metalness 0.0 against a range of [0.0, 0.1], roughness 0.50 against [0.2, 0.7], clearcoat 0.10 against [0.0, 1.0]."}, "specMaterialId": "sheeting", "profileId": "coating.painted-metal"}, {"componentId": "post", "regionId": "galvanised", "materialId": "metal.aluminum", "status": "proceed", "confidence": 0.75, "assignment": {"materialId": "metal.aluminum", "status": "proceed", "source": "vision", "confidence": 0.75, "method": "unresolved", "alternatives": ["metal.aluminum", "metal.brass", "metal.copper", "metal.gold", "metal.steel-brushed", "metal.steel-polished"], "evidence": {"crop": {"path": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/01-galvanised.png", "bbox": {"x": 466, "y": 730, "width": 80, "height": 150}, "sourceWidth": 1024, "sourceHeight": 1024, "loaderWarnings": [], "coverage": 0.0114}, "pbr": {"ok": true, "verdict": "pass", "confidence": 0.86, "estimatedFidelity": 0.86, "targetThreshold": 0.7, "materialId": "galvanised", "sourceImage": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/01-galvanised.png", "outDir": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/pbr-01-galvanised", "palette": ["#949D9D", "#8D9594", "#9FA7A6", "#5A5E58", "#ACB4B3"], "maps": {"albedo": {"path": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/pbr-01-galvanised/galvanised_albedo.png", "url": "galvanised_albedo.png", "channel": "albedo", "source": "reference-pixel-extraction"}, "roughness": {"path": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/pbr-01-galvanised/galvanised_roughness.png", "url": "galvanised_roughness.png", "channel": "roughness", "source": "reference-pixel-extraction"}, "height": {"path": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/pbr-01-galvanised/galvanised_height.png", "url": "galvanised_height.png", "channel": "height", "source": "reference-pixel-extraction"}, "normal": {"path": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/pbr-01-galvanised/galvanised_normal.png", "url": "galvanised_normal.png", "channel": "normal", "source": "reference-pixel-extraction"}, "ao": {"path": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-review/regions/pbr-01-galvanised/galvanised_ao.png", "url": "galvanised_ao.png", "channel": "ao", "source": "reference-pixel-extraction"}}, "diagnostics": {"sourceWidth": 80, "sourceHeight": 150, "mapSize": 512, "cropBBoxPixels": {"x": 16, "y": 0, "width": 48, "height": 150}, "mask": {"backgroundColor": "#818181", "backgroundNoise": 1.732, "transparentPixelFraction": 0.0, "foregroundCoverage": 0.3573}, "mapStats": {"valueRange": 0.3592, "heightP90Gradient": 0.07897, "roughnessBase": 0.729, "roughnessVariation": 0.136, "normalStrength": 0.249, "blurRadius": 10}, "palette": ["#949D9D", "#8D9594", "#9FA7A6", "#5A5E58", "#ACB4B3"]}, "warnings": ["single-image inverse rendering cannot prove true physical PBR; confidence is capped"], "limitation": "single-image PBR extraction is an estimate; 70%+ extraction confidence still needs render screenshot review"}, "texture": {"finishClass": "worn-composite", "recipe": {"metalness": 0.0, "roughness": 0.9, "clearcoat": 0.0, "clearcoatRoughness": 0.0, "transmission": 0.0, "ior": 1.5, "envMapIntensity": 0.5, "anisotropy": 0.0, "procedural": "mottle"}, "palette": ["#929799", "#989D98", "#8B9495", "#7D8482", "#7F8382"], "paletteHueRisk": [], "gradientAxis": "horizontal", "stats": {"meanLum": 142.0, "meanSaturation": 0.074, "gradientStrength": 0.239, "mottle": 0.024, "streakRatio": 0.65, "hueSpread": 0.015, "specularFraction": 0.0}}}, "approximation": true, "approximationNote": "LABELLED AN APPROXIMATION, not a resolution. The library has no entry for hot-dip galvanised steel: material_region_analysis returned request-input at confidence 0.0 and offered aluminum, brass, copper, gold, steel-brushed and steel-polished, every one of which is model 'conductor' with metalness locked at 1.0. Weathered galvanising is an oxidised zinc layer over steel and does not behave like a clean conductor, and the reference says so: analyze_texture measures specularFraction 0.0 on the post crop, so there is no specular lobe anywhere on it, and its luma runs a gentle 115-170 gradient. A metalness of 1.0 would render a chalky post as chrome. metal.aluminum is taken as the nearest profile on its visual cues - 'bright neutral conductor, soft satin highlight unless polished' - and the shipped metalness of 0.25 is a DELIBERATE DEVIATION from its prior, evidenced above. The crop comparator passes this material at 0.8182 with the reference and render crop means within 2 per channel, so the deviation is measured, not assumed. The registry gap is a finding about the library, not about this prop.", "deviations": [{"field": "metalness", "profilePrior": 1.0, "shipped": 0.25, "evidence": "analyze_texture specularFraction 0.0 on crops/galvanised-post.png; meanSaturation 0.074; mottle 0.018"}]}, "specMaterialId": "galvanised", "profileId": "metal.aluminum"}], "unresolvedNotObservedMaterials": [], "note": "Two regions, both observed in the single admitted view and both crop-verified to sit on the surface they name. The galvanised assignment is carried as an explicit approximation with its deviation recorded; see its approximationNote.", "evidence": {"analysis": "material-review/material-analysis.json", "comparisons": ["material-review/cmp-sheeting.json", "material-review/cmp-galvanised.json"], "viewPlans": ["material-review/view-plan-sheeting.json", "material-review/view-plan-galvanised.json"]}, "schemaVersion": 1, "registry": "docs/materials/material-reference.json"};
  root.userData.materialReferenceRegistry = "docs/materials/material-reference.json";

  const materialMap: Record<string, THREE.Material> = {};
  materialMap["sheeting"] = createSculptMaterial(
    "sheeting",
    {"id": "sheeting", "name": "Retroreflective sign sheeting on aluminium", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#D1B630", "color": "#D1B630", "albedo": {"dominant": "#D1B630", "secondary": ["#D5B831", "#CDB52F", "#B9AB36"], "samplingNotes": "Trimmed mean (15-85 percentile) of two crops verified clear of the border rule and the pictogram: crops/sheeting-yellow.png at (443,168,40,30) -> #D5B831 over 840 px, and a second field at (470,430,45,35) -> #CDB52F over 1102 px. No key removal was applied: the field's median luma reads 177 at the top of the plate and 173 at the bottom, so the studio gradient across the whole face is 4 luma and subtracting it would be noise, not correction. The third secondary is the algal staining, which is albedo and is carried as a localOverride."}, "roughness": {"base": 0.5, "variation": 0.05, "notes": "Adopted from analyze_texture.py's measured recipe for finishClass `painted-metal` on crops/sheeting-yellow.png, in preference to the 0.34 first authored by eye. The crop's specularFraction is 0.0 and its mottle is 0.035: there is no tight highlight anywhere on this face, which is a mid roughness under a soft key rather than the low one a broad sheen suggested. extract_pbr_evidence.py's 0.696 was NOT adopted - it returned 0.696 here and 0.680 for the galvanised post, two finishes that plainly differ, and two numbers that close together across two different surfaces are a class default rather than a measurement."}, "metalness": 0.0, "finishClass": "painted-metal", "clearcoat": {"base": 0.1, "variation": 0.0}, "clearcoatRoughness": {"base": 0.3, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.8, "localOverrides": [{"id": "sheeting-margin-algae", "color": "#B9AB36", "region": "outboard margin of the diamond plate and along the folded edge return", "evidenceRef": "region-diamond", "notes": "Desaturated yellow-green weathering, trimmed mean #B9AB36 over 375 green-biased pixels at (325,262,26,40). Concentrated where water sits - the outboard margin and the fold - and absent from the middle of the face. Drawn into the legend canvas as a soft margin gradient, which is where a bounded albedo region on a flat panel belongs."}, {"id": "legend-black", "color": "#1D1D1A", "region": "border rules, pictogram and both legend lines on both plates", "evidenceRef": "region-pictogram", "notes": "Trimmed mean of the darkest half of a pictogram crop, 563 px below luma 60 at (440,285,35,35). The whole-crop mean was #2D2C20; the darker figure is the one taken because the crop's brighter half is the sheeting's ambient bounce spilling across a hard boundary, not the ink."}], "textureless": {"declared": true, "evidence": ["Measured on crop-sheeting (crops/sheeting-yellow.png, 40x30 px verified clear of the border rule and the pictogram): luma min 163, max 195, interquartile range 9. A flat field.", "The faint hexagonal prismatic cell pattern visible in the yellow sits at the JPEG noise floor at 1024 and is sub-pixel at prop distance; it is recorded as undetermined in the assessment rather than modelled.", "Every mark that IS on this surface - rules, pictogram, legend, algal margin - is supplied as a generated canvas texture assigned after material construction, which a procedural noise set would overwrite."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function builds FIVE canvases per material at textureResolution, pixel by pixel in JavaScript with multi-octave noise, at a cost that is the SQUARE of the resolution (256 -> 1.6 s, 512 -> 6.5 s, 1024 -> 26 s). It is also a CORRECTNESS fix: whenever a texture set exists the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo. On a prop whose whole job is to be a saturated highway yellow legible at distance, that is not a performance nicety - it is the difference between a sign and a grey board."}, "qualityTier": "hero", "clearcoatNote": "analyze_texture.py's painted-metal recipe proposes clearcoat 1.0 with clearcoatRoughness 0.05 and that is REJECTED, with the same tool's own measurement as the reason: specularFraction on this crop is 0.0. A clearcoat at 1.0 exists to produce a lacquer highlight, and there is no highlight in the evidence to produce. 0.10 keeps a trace of the film's sheen without inventing a lobe the plate does not show.", "materialEvidenceArchive": {"sourceCrop": "crops/sheeting-yellow.png", "extractPbrEvidence": {"script": "forge/stage1_intake/extract_pbr_evidence.py", "confidence": 0.827, "targetThreshold": 0.7, "verdict": "pass", "maps": {"albedo": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-evidence/sheeting_albedo.png", "roughness": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-evidence/sheeting_roughness.png", "height": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-evidence/sheeting_height.png", "normal": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-evidence/sheeting_normal.png", "ao": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-evidence/sheeting_ao.png"}, "warnings": ["image is not clearly isolated from background; using most pixels as material evidence", "object/background separation is weak", "single-image inverse rendering cannot prove true physical PBR; confidence is capped"], "boundAtRuntime": false, "bindingPolicy": "Evidence only. The maps on disk are real and the extraction cleared its bar at 0.827 against 0.7, but they are not bound: this material is declared textureless, and binding a generated set would force color to white and roughness to 1 and discard the measured highway yellow - which is the one property that makes the prop legible at distance."}, "analyzeTexture": {"script": "forge/stage1_intake/analyze_texture.py", "finishClass": "painted-metal", "recipe": {"metalness": 0.0, "roughness": 0.5, "clearcoat": 1.0, "clearcoatRoughness": 0.05, "transmission": 0.0, "ior": 1.5, "envMapIntensity": 1.0, "anisotropy": 0.0, "procedural": "flat-clearcoat"}, "stats": {"meanLum": 159.2, "meanSaturation": 0.673, "gradientStrength": 0.211, "mottle": 0.035, "streakRatio": 1.36, "hueSpread": 0.001, "specularFraction": 0.0}, "palette": ["#8F834D", "#A79332", "#C1A82D", "#D4B82E", "#BEA538"], "paletteStatus": "Inert. colorVariation.palette is read only by makeProceduralTextureSet, which this material is declared textureless to skip. Kept as recorded evidence, and NOT promoted to albedo: these are raw pixel samples and therefore carry the plate's studio key."}}},
    options
  );
  materialMap["galvanised"] = createSculptMaterial(
    "galvanised",
    {"id": "galvanised", "name": "Hot-dip galvanised steel", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#919999", "color": "#919999", "albedo": {"dominant": "#919999", "secondary": ["#5D4431", "#A9AEB0"], "samplingNotes": "Trimmed mean over 3222 px of the post shaft at (489,730,38,130), excluding pixels below luma 110 so the dark vertical arris does not drag the field value down. The first secondary is the rust runoff, trimmed mean #5D4431 over 415 red-biased px at the base."}, "roughness": {"base": 0.58, "variation": 0.08, "notes": "Mid, matte-leaning. The post's measured IQR of 25 luma against the sheeting's 9 is the spangle mottle of a zinc coating, and it scatters rather than reflecting a lobe. Held at 0.58 between the two tools' figures - analyze_texture.py's 0.35, which comes with the brushed-steel classification rejected above, and extract_pbr_evidence.py's 0.680, which is within 0.016 of what the same script returned for the sheeting and is therefore a default. 0.58 is the matte-leaning value the measured IQR of 25 luma supports."}, "metalness": 0.25, "metalnessNotes": "Not 1.0. Weathered galvanising is an oxidised zinc layer over steel, so it reads as a dielectric-leaning surface with a metallic undertone; a fully metallic value renders it as bare chrome and loses the chalky quality the plate plainly shows.", "finishClass": "worn-composite", "clearcoat": {"base": 0.0, "variation": 0.0}, "clearcoatRoughness": {"base": 0.0, "variation": 0.0}, "transmission": {"base": 0.0, "variation": 0.0}, "ior": {"base": 1.5, "value": 1.5}, "envMapIntensity": 0.6, "localOverrides": [{"id": "post-rust", "color": "#5D4431", "region": "vertical streaks on the post below the supplementary plate's fixing, widening to a band at the cut end", "evidenceRef": "region-post", "notes": "Runoff, so it starts AT a fixing and runs down, and pools at the ground end where the coating is cut. A streak that starts in mid-air reads wrong. Applied as a vertex-colour gradient on the post rather than a texture, which keeps the material textureless."}], "vertexColors": true, "textureless": {"declared": true, "evidence": ["Measured on crop-galvanised (crops/galvanised-post.png, the post shaft above the rust band): the surface scans as a broad soft value gradient with an IQR of 25 luma and no periodic structure.", "Spangle is a hand-distance feature. The post is 0.075 m across and is seen at street distance, where the whole section spans a few pixels.", "The one non-uniform mark that matters - the rust runoff - is bounded and directional, so it is carried as a vertex-colour gradient rather than as a noise field."], "note": "Declared textureless so createSculptMaterial skips makeProceduralTextureSet entirely. That function builds FIVE canvases per material at textureResolution, pixel by pixel in JavaScript with multi-octave noise, at a cost that is the SQUARE of the resolution (256 -> 1.6 s, 512 -> 6.5 s, 1024 -> 26 s). It is also a CORRECTNESS fix: whenever a texture set exists the generator forces color to white and roughness to 1 and reads both from the generated maps, discarding the authored albedo. On a prop whose whole job is to be a saturated highway yellow legible at distance, that is not a performance nicety - it is the difference between a sign and a grey board."}, "qualityTier": "hero", "finishClassNote": "analyze_texture.py classifies this crop as `brushed-steel` with metalness 1.0, roughness 0.35 and anisotropy 1.0, and that classification is REJECTED. It keys on the crop's streakRatio of 0.52, and those streaks are the RUST RUNOFF read as brush grain - a mark the spec already carries, correctly, as a directional localOverride. Building on the classification instead would render an oxidised, chalky zinc coating as anisotropic chrome. The spec keeps finishClass `worn-composite`, metalness 0.25 and roughness 0.58. Two of the classifier's numbers ARE taken as corroboration: meanSaturation 0.074 confirms a neutral albedo, and mottle 0.018 confirms a flat field, which is half the textureless case.", "materialEvidenceArchive": {"sourceCrop": "crops/galvanised-post.png", "extractPbrEvidence": {"script": "forge/stage1_intake/extract_pbr_evidence.py", "confidence": 0.758, "targetThreshold": 0.7, "verdict": "pass", "maps": {"albedo": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-evidence/galvanised_albedo.png", "roughness": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-evidence/galvanised_roughness.png", "height": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-evidence/galvanised_height.png", "normal": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-evidence/galvanised_normal.png", "ao": "/home/mulligan/code/thaikit/scratch/elephant-crossing-sign/material-evidence/galvanised_ao.png"}, "warnings": ["foreground mask is very small", "single-image inverse rendering cannot prove true physical PBR; confidence is capped", "low high-frequency detail weakens normal/roughness inference"], "boundAtRuntime": false, "bindingPolicy": "Evidence only, not bound. Extraction cleared its bar at 0.758 against 0.7, but carries the warnings 'foreground mask is very small' and 'low high-frequency detail weakens normal/roughness inference' - both true of a 0.075 m post shaft, and both reasons to record the maps rather than render from them."}, "analyzeTexture": {"script": "forge/stage1_intake/analyze_texture.py", "finishClass": "brushed-steel", "recipe": {"metalness": 1.0, "roughness": 0.35, "clearcoat": 0.0, "clearcoatRoughness": 0.0, "transmission": 0.0, "ior": 1.5, "envMapIntensity": 1.0, "anisotropy": 1.0, "procedural": "brushed"}, "stats": {"meanLum": 144.4, "meanSaturation": 0.074, "gradientStrength": 0.223, "mottle": 0.018, "streakRatio": 0.52, "hueSpread": 0.01, "specularFraction": 0.0}, "palette": ["#99A0A0", "#9BA3A0", "#8F989B", "#848D8C", "#808887"], "paletteStatus": "Inert. colorVariation.palette is read only by makeProceduralTextureSet, which this material is declared textureless to skip. Kept as recorded evidence, and NOT promoted to albedo: these are raw pixel samples and therefore carry the plate's studio key."}}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_sign_plates_0 = makeAttachmentEndpoint(null);
  const node_sign_plates_0 = new THREE.Group();
  node_sign_plates_0.name = "Sign plates (diamond warning plate + supplementary legend plate)__pivot";
  node_sign_plates_0.scale.set(1, 1, 1);
  if (endpoint_sign_plates_0) {
    node_sign_plates_0.position.copy(endpoint_sign_plates_0.start);
    node_sign_plates_0.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_sign_plates_0.position.set(0.0, 1.95, 0.037);
    node_sign_plates_0.rotation.set(0.0, 0.0, 0.0);
  }
  node_sign_plates_0.userData.sculptComponent = {"id": "sign-plates", "name": "Sign plates (diamond warning plate + supplementary legend plate)", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.9, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "Decision tree step 4: hard, distinct faces you can point to and count - a front face, a back face and a constant-thickness edge wall. Folded aluminium sheet with real thickness, built as an extruded profile. NOT conforming-shell, which would mean a skin following something else's curvature with no volume of its own; NOT material-only, which has no geometry and could not show the grey edge return the reference plainly shows along the diamond's upper-right side; NOT surface-relief, since this IS the silhouette rather than detail riding on one. The grimoire's own worked example puts a flat rigid wall panel here, and its closing note says a large flat panel and a small flat plate are the same class.", "geometryDescriptor": {"topologyIntent": "low-poly prop", "profile2D": {"points": [[0.43887, -0.02687], [0.44711, -0.01454], [0.45, 0.0], [0.44711, 0.01454], [0.43887, 0.02687], [0.02687, 0.43887], [0.01454, 0.44711], [0.0, 0.45], [-0.01454, 0.44711], [-0.02687, 0.43887], [-0.43887, 0.02687], [-0.44711, 0.01454], [-0.45, 0.0], [-0.44711, -0.01454], [-0.43887, -0.02687], [-0.02687, -0.43887], [-0.01454, -0.44711], [-0.0, -0.45], [0.01454, -0.44711], [0.02687, -0.43887]], "depth": 0.006}, "edgeTreatment": {"type": "fillet-in-profile", "bevelRadius": 0.038, "segments": 4}, "deformationStack": [], "uvStrategy": "authored - rewritten after generation into a two-region atlas (see mergedAssembly)", "normalStrategy": "vertex normals from generated geometry", "mergedAssembly": {"reason": "maxDrawCalls is 2 and this prop needs a post, so the two plates get ONE mesh between them. They are the same material, the same thickness and the same plane, so merging costs nothing in fidelity and buys the only draw call the post could otherwise not have. This is a BLOCKOUT decision, recorded here so a later pass does not 'fix' the shallow tree by splitting it and silently doubling what every instance of this sign costs a scene.", "parts": [{"id": "diamond-plate", "level": "meso", "profile": "geometryDescriptor.profile2D", "localOffset": [0.0, 0.0, 0.0], "extent": {"width": 0.9, "height": 0.9, "depth": 0.006}, "note": "A square on point. The profile's SHARP half-diagonal is 0.46574 rather than 0.45 because a filleted 90-degree vertex is cut back from the sharp vertex by R(sqrt2-1) = 0.01574 m, and the reference's 0.90 m was measured between the ROUNDED apexes. Built extent is therefore exactly 0.90 x 0.90."}, {"id": "supplementary-plate", "level": "meso", "profile": {"points": [[0.252, -0.125], [0.26157, -0.1231], [0.26968, -0.11768], [0.2751, -0.10957], [0.277, -0.1], [0.277, 0.1], [0.2751, 0.10957], [0.26968, 0.11768], [0.26157, 0.1231], [0.252, 0.125], [-0.252, 0.125], [-0.26157, 0.1231], [-0.26968, 0.11768], [-0.2751, 0.10957], [-0.277, 0.1], [-0.277, -0.1], [-0.2751, -0.10957], [-0.26968, -0.11768], [-0.26157, -0.1231], [-0.252, -0.125]], "depth": 0.006}, "localOffset": [0.0, -0.619, 0.0], "extent": {"width": 0.554, "height": 0.25, "depth": 0.006}, "note": "Rounded rectangle, aspect 2.21:1 as measured. Merged into this component's buffer after generation, because THREE.Shape carries one outer contour and cannot express two disjoint islands in a single extrusion."}, {"id": "plate-edge-return", "level": "meso", "note": "Not separate geometry: it IS the extrusion's side wall, 0.006 m deep, and it is what makes the plate read as folded sheet rather than a zero-thickness card. It is given the atlas's plain galvanised patch, which is why the plate's edge and back are grey while its face is yellow."}], "uvAtlas": {"canvas": [1024, 512], "regions": {"diamond-graphic": {"rect": [0, 0, 512, 512], "maps": "the diamond plate's +Z face, local (x,y) over the 0.90 x 0.90 m bounding square", "texelsPerMeter": 569}, "supplementary-graphic": {"rect": [512, 0, 512, 231], "maps": "the supplementary plate's +Z face, local (x,y) over its 0.554 x 0.250 m rectangle", "texelsPerMeter": 924}, "plain-galvanised": {"rect": [512, 250, 512, 262], "maps": "EVERY other vertex - both plate backs and the whole edge return - collapsed to the single texel at (768, 381)", "texelsPerMeter": null}}, "rule": "A vertex whose normal has z > 0.5 takes a graphic region chosen by its local y; every other vertex takes the plain patch. Collapsing the non-face vertices to one texel is what lets a single-material mesh carry a printed front and a plain back without a second material and therefore without a second draw call.", "note": "At 569 texels per metre the diamond region already exceeds the reference itself, where the same 0.90 m spans 413 px. The atlas is built once at module scope and shared by every instance rather than rebuilt per call."}}}, "parent": null, "attachment": {"parent": "post", "parentSocket": null, "contactType": "overlap", "overlapDepth": 0.0005, "notes": "The plates are embedded 0.5 mm into the post's front face rather than butted onto it. A butt joint here would be legal - the faces oppose - but the embed costs nothing and removes the question entirely."}, "dimensions": {"width": 0.9, "height": 1.194, "depth": 0.006, "units": "meters", "confidence": 0.9}, "transform": {"position": [0.0, 1.95, 0.037], "rotation": [0, 0, 0], "scale": [1, 1, 1], "scaleNote": "scale is an explicit [1,1,1] because profile2D is authored in METRES. scale_vector() prefers transform.scale over dimensions, and without it the generator would multiply the already-real profile by the dimensions again."}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "inherit-root", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "notes": "No pivot of its own. A sign plate does not turn on anything."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "colliderNote": "Deliberately none. The declared collider is a cylinder on the POST, because what a player walks into is the post; a proxy on a plate mounted two metres up would block the pavement underneath it.", "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "sheeting", "materialLayers": ["sheeting"], "colorMaterialRecipe": {"base": "#D1B630", "stops": [{"position": 0.0, "color": "rgba(209, 182, 48, 1.0)", "note": "sheeting field, measured"}, {"position": 0.85, "color": "rgba(185, 171, 54, 1.0)", "note": "algal margin, measured"}, {"position": 1.0, "color": "rgba(29, 29, 26, 1.0)", "note": "legend ink, measured"}], "finishStyle": "satin", "notes": "Three measured stops, not a ramp: the field and the margin meet as a soft gradient, the ink meets both as a hard boundary. The hard boundary is the point - a filled silhouette with a crisp edge is what survives distance and a low texture resolution.", "dominantAlbedo": "rgba(209, 182, 48, 1.0)", "secondaryAlbedo": "rgba(29, 29, 26, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.8, "materialClassNote": "plastic, not metal: the visible surface is a retroreflective vinyl/acrylic sheeting film laminated to an aluminium blank, and it is the film that light interacts with - measured metalness 0.0, a dielectric response with no specular lobe. The aluminium underneath is never seen."}, "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "plate-corner-radius", "kind": "bevel", "detailRef": "plate-corner-radius", "edgeTreatment": {"type": "fillet-in-profile", "bevelRadius": 0.038, "segments": 4}, "notes": "Measured 0.044 m at the left vertex and 0.031 m at the top; 0.038 adopted. Silhouette, so it must be geometry."}, {"id": "plate-edge-return", "kind": "bevel", "detailRef": "plate-edge-return", "edgeTreatment": {"type": "extrusion-wall", "bevelRadius": 0.0, "segments": 1}, "depth": 0.006, "notes": "The 0.006 m extrusion wall. Grey, from the atlas's plain patch."}, {"id": "legend-diamond", "kind": "linework", "detailRefs": ["elephant-pictogram", "border-rule-diamond", "plate-fasteners"], "technique": "painted decal via a generated canvas texture assigned after material construction", "pictogramSource": {"points": 180, "frame": "normalized unit square whose INSCRIBED DIAMOND is the black border rule's OUTER boundary; +x right, +y down", "ruleFrameToPlateFrame": 0.9556, "note": "180-point polygon traced from the homography-rectified plate. Its normalized frame is the border rule's OUTER boundary, which is inset from the plate edge by 0.014 m perpendicular - a diamond half-diagonal shrink of 0.014*sqrt2 - so rule-frame coordinates map to plate-frame as 0.5 + (u-0.5)*0.9556."}, "notes": "Rule stroke 0.020 m, edge-to-rule margin 0.014 m, both measured."}, {"id": "legend-supp", "kind": "linework", "detailRefs": ["border-rule-supp", "legend-thai", "legend-english"], "technique": "painted decal via the same canvas", "notes": "Thai line set larger than the English line, as measured. The English line is CONDENSED: measured per-glyph advance is ~0.55 of cap height, so a normal-width face at the same size overruns the plate."}], "surfaceDetail": {"macroRoughness": 0.5, "microRoughness": 0.04, "bumpAmplitude": 0.0, "normalPattern": "none", "displacementPattern": "none", "occlusionPattern": "contact darkening where each plate meets the post", "edgeWearPattern": "algal staining concentrated on the outboard margin and the fold", "notes": "bumpAmplitude is 0.0 and that is the measurement, not a gap: IQR 9 luma over the clean field."}, "evidenceRefs": ["region-diamond", "region-supp", "region-pictogram", "crop-sheeting"], "details": ["elephant-pictogram", "border-rule-diamond", "border-rule-supp", "legend-thai", "legend-english", "plate-fasteners", "plate-corner-radius", "plate-edge-return", "algal-margin-staining"], "fidelityTier": "hero"};
  node_sign_plates_0.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "inherit-root", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "notes": "No pivot of its own. A sign plate does not turn on anything."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "colliderNote": "Deliberately none. The declared collider is a cylinder on the POST, because what a player walks into is the post; a proxy on a plate mounted two metres up would block the pavement underneath it.", "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_sign_plates_0);
  nodes["sign-plates"] = node_sign_plates_0;
  const mesh_sign_plates_0Geometry = endpoint_sign_plates_0
    ? new THREE.CylinderGeometry(endpoint_sign_plates_0.endRadius, endpoint_sign_plates_0.baseRadius, endpoint_sign_plates_0.length, 8, 4)
    : buildExtrudeGeometry({"points": [[0.43887, -0.02687], [0.44711, -0.01454], [0.45, 0.0], [0.44711, 0.01454], [0.43887, 0.02687], [0.02687, 0.43887], [0.01454, 0.44711], [0.0, 0.45], [-0.01454, 0.44711], [-0.02687, 0.43887], [-0.43887, 0.02687], [-0.44711, 0.01454], [-0.45, 0.0], [-0.44711, -0.01454], [-0.43887, -0.02687], [-0.02687, -0.43887], [-0.01454, -0.44711], [-0.0, -0.45], [0.01454, -0.44711], [0.02687, -0.43887]], "depth": 0.006});
  if (!endpoint_sign_plates_0) {
    mesh_sign_plates_0Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_sign_plates_0 = new THREE.Mesh(
    mesh_sign_plates_0Geometry,
    materialMap["sheeting"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_sign_plates_0.name = "Sign plates (diamond warning plate + supplementary legend plate)";
  if (endpoint_sign_plates_0) {
    mesh_sign_plates_0.position.copy(endpoint_sign_plates_0.midpoint);
    mesh_sign_plates_0.quaternion.copy(endpoint_sign_plates_0.quaternion);
  }
  mesh_sign_plates_0.castShadow = options.castShadow ?? true;
  mesh_sign_plates_0.receiveShadow = options.receiveShadow ?? true;
  mesh_sign_plates_0.userData.sculptComponent = {"id": "sign-plates", "name": "Sign plates (diamond warning plate + supplementary legend plate)", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.9, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "Decision tree step 4: hard, distinct faces you can point to and count - a front face, a back face and a constant-thickness edge wall. Folded aluminium sheet with real thickness, built as an extruded profile. NOT conforming-shell, which would mean a skin following something else's curvature with no volume of its own; NOT material-only, which has no geometry and could not show the grey edge return the reference plainly shows along the diamond's upper-right side; NOT surface-relief, since this IS the silhouette rather than detail riding on one. The grimoire's own worked example puts a flat rigid wall panel here, and its closing note says a large flat panel and a small flat plate are the same class.", "geometryDescriptor": {"topologyIntent": "low-poly prop", "profile2D": {"points": [[0.43887, -0.02687], [0.44711, -0.01454], [0.45, 0.0], [0.44711, 0.01454], [0.43887, 0.02687], [0.02687, 0.43887], [0.01454, 0.44711], [0.0, 0.45], [-0.01454, 0.44711], [-0.02687, 0.43887], [-0.43887, 0.02687], [-0.44711, 0.01454], [-0.45, 0.0], [-0.44711, -0.01454], [-0.43887, -0.02687], [-0.02687, -0.43887], [-0.01454, -0.44711], [-0.0, -0.45], [0.01454, -0.44711], [0.02687, -0.43887]], "depth": 0.006}, "edgeTreatment": {"type": "fillet-in-profile", "bevelRadius": 0.038, "segments": 4}, "deformationStack": [], "uvStrategy": "authored - rewritten after generation into a two-region atlas (see mergedAssembly)", "normalStrategy": "vertex normals from generated geometry", "mergedAssembly": {"reason": "maxDrawCalls is 2 and this prop needs a post, so the two plates get ONE mesh between them. They are the same material, the same thickness and the same plane, so merging costs nothing in fidelity and buys the only draw call the post could otherwise not have. This is a BLOCKOUT decision, recorded here so a later pass does not 'fix' the shallow tree by splitting it and silently doubling what every instance of this sign costs a scene.", "parts": [{"id": "diamond-plate", "level": "meso", "profile": "geometryDescriptor.profile2D", "localOffset": [0.0, 0.0, 0.0], "extent": {"width": 0.9, "height": 0.9, "depth": 0.006}, "note": "A square on point. The profile's SHARP half-diagonal is 0.46574 rather than 0.45 because a filleted 90-degree vertex is cut back from the sharp vertex by R(sqrt2-1) = 0.01574 m, and the reference's 0.90 m was measured between the ROUNDED apexes. Built extent is therefore exactly 0.90 x 0.90."}, {"id": "supplementary-plate", "level": "meso", "profile": {"points": [[0.252, -0.125], [0.26157, -0.1231], [0.26968, -0.11768], [0.2751, -0.10957], [0.277, -0.1], [0.277, 0.1], [0.2751, 0.10957], [0.26968, 0.11768], [0.26157, 0.1231], [0.252, 0.125], [-0.252, 0.125], [-0.26157, 0.1231], [-0.26968, 0.11768], [-0.2751, 0.10957], [-0.277, 0.1], [-0.277, -0.1], [-0.2751, -0.10957], [-0.26968, -0.11768], [-0.26157, -0.1231], [-0.252, -0.125]], "depth": 0.006}, "localOffset": [0.0, -0.619, 0.0], "extent": {"width": 0.554, "height": 0.25, "depth": 0.006}, "note": "Rounded rectangle, aspect 2.21:1 as measured. Merged into this component's buffer after generation, because THREE.Shape carries one outer contour and cannot express two disjoint islands in a single extrusion."}, {"id": "plate-edge-return", "level": "meso", "note": "Not separate geometry: it IS the extrusion's side wall, 0.006 m deep, and it is what makes the plate read as folded sheet rather than a zero-thickness card. It is given the atlas's plain galvanised patch, which is why the plate's edge and back are grey while its face is yellow."}], "uvAtlas": {"canvas": [1024, 512], "regions": {"diamond-graphic": {"rect": [0, 0, 512, 512], "maps": "the diamond plate's +Z face, local (x,y) over the 0.90 x 0.90 m bounding square", "texelsPerMeter": 569}, "supplementary-graphic": {"rect": [512, 0, 512, 231], "maps": "the supplementary plate's +Z face, local (x,y) over its 0.554 x 0.250 m rectangle", "texelsPerMeter": 924}, "plain-galvanised": {"rect": [512, 250, 512, 262], "maps": "EVERY other vertex - both plate backs and the whole edge return - collapsed to the single texel at (768, 381)", "texelsPerMeter": null}}, "rule": "A vertex whose normal has z > 0.5 takes a graphic region chosen by its local y; every other vertex takes the plain patch. Collapsing the non-face vertices to one texel is what lets a single-material mesh carry a printed front and a plain back without a second material and therefore without a second draw call.", "note": "At 569 texels per metre the diamond region already exceeds the reference itself, where the same 0.90 m spans 413 px. The atlas is built once at module scope and shared by every instance rather than rebuilt per call."}}}, "parent": null, "attachment": {"parent": "post", "parentSocket": null, "contactType": "overlap", "overlapDepth": 0.0005, "notes": "The plates are embedded 0.5 mm into the post's front face rather than butted onto it. A butt joint here would be legal - the faces oppose - but the embed costs nothing and removes the question entirely."}, "dimensions": {"width": 0.9, "height": 1.194, "depth": 0.006, "units": "meters", "confidence": 0.9}, "transform": {"position": [0.0, 1.95, 0.037], "rotation": [0, 0, 0], "scale": [1, 1, 1], "scaleNote": "scale is an explicit [1,1,1] because profile2D is authored in METRES. scale_vector() prefers transform.scale over dimensions, and without it the generator would multiply the already-real profile by the dimensions again."}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "inherit-root", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "notes": "No pivot of its own. A sign plate does not turn on anything."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": null, "colliderNote": "Deliberately none. The declared collider is a cylinder on the POST, because what a player walks into is the post; a proxy on a plate mounted two metres up would block the pavement underneath it.", "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "sheeting", "materialLayers": ["sheeting"], "colorMaterialRecipe": {"base": "#D1B630", "stops": [{"position": 0.0, "color": "rgba(209, 182, 48, 1.0)", "note": "sheeting field, measured"}, {"position": 0.85, "color": "rgba(185, 171, 54, 1.0)", "note": "algal margin, measured"}, {"position": 1.0, "color": "rgba(29, 29, 26, 1.0)", "note": "legend ink, measured"}], "finishStyle": "satin", "notes": "Three measured stops, not a ramp: the field and the margin meet as a soft gradient, the ink meets both as a hard boundary. The hard boundary is the point - a filled silhouette with a crisp edge is what survives distance and a low texture resolution.", "dominantAlbedo": "rgba(209, 182, 48, 1.0)", "secondaryAlbedo": "rgba(29, 29, 26, 1.0)", "materialClass": "plastic", "materialClassConfidence": 0.8, "materialClassNote": "plastic, not metal: the visible surface is a retroreflective vinyl/acrylic sheeting film laminated to an aluminium blank, and it is the film that light interacts with - measured metalness 0.0, a dielectric response with no specular lobe. The aluminium underneath is never seen."}, "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "plate-corner-radius", "kind": "bevel", "detailRef": "plate-corner-radius", "edgeTreatment": {"type": "fillet-in-profile", "bevelRadius": 0.038, "segments": 4}, "notes": "Measured 0.044 m at the left vertex and 0.031 m at the top; 0.038 adopted. Silhouette, so it must be geometry."}, {"id": "plate-edge-return", "kind": "bevel", "detailRef": "plate-edge-return", "edgeTreatment": {"type": "extrusion-wall", "bevelRadius": 0.0, "segments": 1}, "depth": 0.006, "notes": "The 0.006 m extrusion wall. Grey, from the atlas's plain patch."}, {"id": "legend-diamond", "kind": "linework", "detailRefs": ["elephant-pictogram", "border-rule-diamond", "plate-fasteners"], "technique": "painted decal via a generated canvas texture assigned after material construction", "pictogramSource": {"points": 180, "frame": "normalized unit square whose INSCRIBED DIAMOND is the black border rule's OUTER boundary; +x right, +y down", "ruleFrameToPlateFrame": 0.9556, "note": "180-point polygon traced from the homography-rectified plate. Its normalized frame is the border rule's OUTER boundary, which is inset from the plate edge by 0.014 m perpendicular - a diamond half-diagonal shrink of 0.014*sqrt2 - so rule-frame coordinates map to plate-frame as 0.5 + (u-0.5)*0.9556."}, "notes": "Rule stroke 0.020 m, edge-to-rule margin 0.014 m, both measured."}, {"id": "legend-supp", "kind": "linework", "detailRefs": ["border-rule-supp", "legend-thai", "legend-english"], "technique": "painted decal via the same canvas", "notes": "Thai line set larger than the English line, as measured. The English line is CONDENSED: measured per-glyph advance is ~0.55 of cap height, so a normal-width face at the same size overruns the plate."}], "surfaceDetail": {"macroRoughness": 0.5, "microRoughness": 0.04, "bumpAmplitude": 0.0, "normalPattern": "none", "displacementPattern": "none", "occlusionPattern": "contact darkening where each plate meets the post", "edgeWearPattern": "algal staining concentrated on the outboard margin and the fold", "notes": "bumpAmplitude is 0.0 and that is the measurement, not a gap: IQR 9 luma over the clean field."}, "evidenceRefs": ["region-diamond", "region-supp", "region-pictogram", "crop-sheeting"], "details": ["elephant-pictogram", "border-rule-diamond", "border-rule-supp", "legend-thai", "legend-english", "plate-fasteners", "plate-corner-radius", "plate-edge-return", "algal-margin-staining"], "fidelityTier": "hero"};
  node_sign_plates_0.add(mesh_sign_plates_0);
  meshes["sign-plates"] = mesh_sign_plates_0;
  colliders["sign-plates"] = null;

  const endpoint_post_1 = makeAttachmentEndpoint(null);
  const node_post_1 = new THREE.Group();
  node_post_1.name = "Galvanised square hollow section post__pivot";
  node_post_1.scale.set(1, 1, 1);
  if (endpoint_post_1) {
    node_post_1.position.copy(endpoint_post_1.start);
    node_post_1.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_post_1.position.set(0.0, 1.05, 0.0);
    node_post_1.rotation.set(0.0, 0.0, 0.0);
  }
  node_post_1.userData.sculptComponent = {"id": "post", "name": "Galvanised square hollow section post", "level": "macro", "role": "support", "importance": 0.8, "confidence": 0.8, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A prismatic structural section. Square rather than round on the evidence of a single vertical arris with a lit face either side of it and a square cut end; a U-channel would show a flange edge and a shadowed web, and neither is there.", "geometryDescriptor": {"topologyIntent": "low-poly prop", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "note": "Kept as a plain box on purpose. The arris is the identity feature and a box already has it; adding a chamfer would spend triangles rounding off the one edge that matters."}, "parent": null, "attachment": {"parent": null, "parentSocket": null, "contactType": "ground", "notes": "The cut end sits at y=0. Real posts continue into the ground; the prop stops at the origin."}, "dimensions": {"width": 0.075, "height": 2.1, "depth": 0.075, "units": "meters", "confidence": 0.8}, "transform": {"position": [0.0, 1.05, 0.0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "inherit-root", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "notes": "No pivot of its own."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0.0, 0.0, 0.0], "scale": [0.075, 2.1, 0.075], "isTrigger": false, "notes": "The registry declares `collider: cylinder` for this asset and this is where it lands. A cylinder circumscribing a square section is the cheap convex proxy a physics engine wants; the 3 mm it adds at the corners is far below anything a player feels, and it is sized to the POST rather than to the prop so nothing blocks the pavement under the plates."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "galvanised", "materialLayers": ["galvanised"], "colorMaterialRecipe": {"base": "#919999", "stops": [{"position": 0.0, "color": "rgba(169, 174, 176, 1.0)", "note": "clean spangle near the top, measured"}, {"position": 0.55, "color": "rgba(145, 153, 153, 1.0)", "note": "field value, measured"}, {"position": 1.0, "color": "rgba(93, 68, 49, 1.0)", "note": "rust at the cut end, measured"}], "finishStyle": "satin", "notes": "An ordered vertical ramp, not a scatter. Position is height down the post: the coating is intact at the top, and the rust is worst at the cut end where the galvanising was severed.", "dominantAlbedo": "rgba(145, 153, 153, 1.0)", "secondaryAlbedo": "rgba(93, 68, 49, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.85}, "deformations": [], "joints": [], "seams": [{"id": "post-arris", "kind": "ridge", "detailRef": "post-arris", "notes": "The section's own corner. Real geometry, present in the box by construction."}], "localFeatures": [{"id": "post-rust-streaks", "kind": "stain", "detailRef": "post-rust-streaks", "technique": "vertex-colour gradient", "notes": "Vertex colour rather than a texture, which keeps the material textureless. Directional: it starts at the lower fixing and runs down, and pools at the cut end."}], "surfaceDetail": {"macroRoughness": 0.58, "microRoughness": 0.08, "bumpAmplitude": 0.0, "normalPattern": "none", "displacementPattern": "none", "occlusionPattern": "contact darkening under each plate", "edgeWearPattern": "rust runoff from the fixings and a corrosion band at the cut end", "notes": "Spangle is a hand-distance feature on a 0.075 m section seen from the street."}, "evidenceRefs": ["region-post", "crop-galvanised"], "details": ["post-rust-streaks", "post-arris"], "fidelityTier": "hero"};
  node_post_1.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "inherit-root", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "notes": "No pivot of its own."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0.0, 0.0, 0.0], "scale": [0.075, 2.1, 0.075], "isTrigger": false, "notes": "The registry declares `collider: cylinder` for this asset and this is where it lands. A cylinder circumscribing a square section is the cheap convex proxy a physics engine wants; the 3 mm it adds at the corners is far below anything a player feels, and it is sized to the POST rather than to the prop so nothing blocks the pavement under the plates."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}};
  (nodes["root"] ?? root).add(node_post_1);
  nodes["post"] = node_post_1;
  const mesh_post_1Geometry = endpoint_post_1
    ? new THREE.CylinderGeometry(endpoint_post_1.endRadius, endpoint_post_1.baseRadius, endpoint_post_1.length, 8, 4)
    : new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
  if (!endpoint_post_1) {
    mesh_post_1Geometry.scale(0.075, 2.1, 0.075);
  }
  const mesh_post_1 = new THREE.Mesh(
    mesh_post_1Geometry,
    materialMap["galvanised"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_post_1.name = "Galvanised square hollow section post";
  if (endpoint_post_1) {
    mesh_post_1.position.copy(endpoint_post_1.midpoint);
    mesh_post_1.quaternion.copy(endpoint_post_1.quaternion);
  }
  mesh_post_1.castShadow = options.castShadow ?? true;
  mesh_post_1.receiveShadow = options.receiveShadow ?? true;
  mesh_post_1.userData.sculptComponent = {"id": "post", "name": "Galvanised square hollow section post", "level": "macro", "role": "support", "importance": 0.8, "confidence": 0.8, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A prismatic structural section. Square rather than round on the evidence of a single vertical arris with a lit face either side of it and a square cut end; a U-channel would show a flange edge and a shadowed web, and neither is there.", "geometryDescriptor": {"topologyIntent": "low-poly prop", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "note": "Kept as a plain box on purpose. The arris is the identity feature and a box already has it; adding a chamfer would spend triangles rounding off the one edge that matters."}, "parent": null, "attachment": {"parent": null, "parentSocket": null, "contactType": "ground", "notes": "The cut end sits at y=0. Real posts continue into the ground; the prop stops at the origin."}, "dimensions": {"width": 0.075, "height": 2.1, "depth": 0.075, "units": "meters", "confidence": 0.8}, "transform": {"position": [0.0, 1.05, 0.0], "rotation": [0, 0, 0]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "inherit-root", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "notes": "No pivot of its own."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": true}, "sockets": [], "collider": {"type": "cylinder", "offset": [0.0, 0.0, 0.0], "scale": [0.075, 2.1, 0.075], "isTrigger": false, "notes": "The registry declares `collider: cylinder` for this asset and this is where it lands. A cylinder circumscribing a square section is the cheap convex proxy a physics engine wants; the 3 mm it adds at the corners is far below anything a player feels, and it is sized to the POST rather than to the prop so nothing blocks the pavement under the plates."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "base"}}, "material": "galvanised", "materialLayers": ["galvanised"], "colorMaterialRecipe": {"base": "#919999", "stops": [{"position": 0.0, "color": "rgba(169, 174, 176, 1.0)", "note": "clean spangle near the top, measured"}, {"position": 0.55, "color": "rgba(145, 153, 153, 1.0)", "note": "field value, measured"}, {"position": 1.0, "color": "rgba(93, 68, 49, 1.0)", "note": "rust at the cut end, measured"}], "finishStyle": "satin", "notes": "An ordered vertical ramp, not a scatter. Position is height down the post: the coating is intact at the top, and the rust is worst at the cut end where the galvanising was severed.", "dominantAlbedo": "rgba(145, 153, 153, 1.0)", "secondaryAlbedo": "rgba(93, 68, 49, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.85}, "deformations": [], "joints": [], "seams": [{"id": "post-arris", "kind": "ridge", "detailRef": "post-arris", "notes": "The section's own corner. Real geometry, present in the box by construction."}], "localFeatures": [{"id": "post-rust-streaks", "kind": "stain", "detailRef": "post-rust-streaks", "technique": "vertex-colour gradient", "notes": "Vertex colour rather than a texture, which keeps the material textureless. Directional: it starts at the lower fixing and runs down, and pools at the cut end."}], "surfaceDetail": {"macroRoughness": 0.58, "microRoughness": 0.08, "bumpAmplitude": 0.0, "normalPattern": "none", "displacementPattern": "none", "occlusionPattern": "contact darkening under each plate", "edgeWearPattern": "rust runoff from the fixings and a corrosion band at the cut end", "notes": "Spangle is a hand-distance feature on a 0.075 m section seen from the street."}, "evidenceRefs": ["region-post", "crop-galvanised"], "details": ["post-rust-streaks", "post-arris"], "fidelityTier": "hero"};
  node_post_1.add(mesh_post_1);
  meshes["post"] = mesh_post_1;
  colliders["post"] = {"type": "cylinder", "offset": [0.0, 0.0, 0.0], "scale": [0.075, 2.1, 0.075], "isTrigger": false, "notes": "The registry declares `collider: cylinder` for this asset and this is where it lands. A cylinder circumscribing a square section is the cheap convex proxy a physics engine wants; the 3 mm it adds at the corners is far below anything a player feels, and it is sized to the POST rather than to the prop so nothing blocks the pavement under the plates."};

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;
  root.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createElephantCrossingSignLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "Elephant Crossing Sign look-dev lights";
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
  lights.userData.lightingFromPhoto = [{"role": "key", "type": "area", "directionHint": [-0.35, 0.55, 0.76], "intensity": 1.0, "colorTemperatureK": 5600, "evidence": "The plate face's median luma falls from 177 at the top of the diamond to 173 at the bottom, and the post's left face reads brighter than its right - a soft key high and slightly camera-left."}, {"role": "fill", "type": "hemisphere", "directionHint": [0.5, 0.2, -0.4], "intensity": 0.35, "colorTemperatureK": 6500, "evidence": "The plate's grey edge return stays legible at 130-160 luma where it faces away from the key, so there is real fill rather than a single hard source."}, {"role": "rim", "type": "directional", "directionHint": [0.6, 0.3, -0.75], "intensity": 0.25, "colorTemperatureK": 6500, "evidence": "A thin bright line along the plate's upper-right fold separates it from the backdrop."}, {"role": "environment", "type": "studio-context", "environment": "studio softbox on a flat neutral backdrop, measured at RGB 129,129,129", "exposure": 1.0, "toneMapping": "ACESFilmic", "evidence": "Backdrop measured at RGB 129,129,129 by a border-ring scan.", "notes": "Recorded as the plate's OWN lighting, for review alignment only. None of it is baked into albedo: every measured colour in this spec is a trimmed mean over a flat field, and the across-face gradient the key produces is 4 luma, which is below what subtracting it could do honestly."}, {"role": "shadow", "type": "shadow-behaviour", "groundShadow": "Floor-placed prop: the post casts a real ground shadow from the key, and it is the only thing that stops a sign reading as though it hovers. castShadow on both components, receiveShadow on neither - nothing on this prop is below anything else on it.", "contactShadow": "Contact darkening where each plate meets the post, on both the plate's back and the post's front face. The plates are embedded 0.5 mm into the post, so the contact is a real intersection and an ambient-occlusion response rather than a painted line.", "ambientOcclusion": "Cavity AO has almost nothing to occlude here - the prop is two flat plates and a prism with no concavities - so AO is set low and is meaningful only at the two plate/post junctions and along the plates' edge return.", "evidence": "In the plate the post darkens visibly where it passes behind the supplementary plate's lower edge, and the plate's own edge return darkens where it turns away from the key.", "notes": "The studio reference has no ground plane, so the ground shadow is a placement requirement rather than something measured from the photograph."}];
  lights.userData.lookDevTargets = {"qualityPriority": "reference-fidelity", "materialPass": {"albedoPaletteRequired": true, "roughnessVariationRequired": true, "normalOrBumpRequired": true, "localOverridesRequired": true, "minimumTextureResolution": 1024, "preferredTextureResolution": 2048, "independentMapChannels": ["albedo", "roughness", "height", "normal", "ambient-occlusion"], "requiredSurfaceFrequencyBands": ["macro", "meso", "micro"], "geometryReliefRequiredWhenSilhouetteAffected": true, "referencePbrExtraction": {"requiredWhenSourceImagePresent": true, "targetThreshold": 0.7, "stopOnLowConfidence": true, "script": "forge/stage1_intake/extract_pbr_evidence.py", "acceptedLimitation": "single-image extraction is reference-derived inference, not exact photogrammetry"}, "mustAvoid": ["single flat albedo per material", "uniform roughness", "albedo texture reused as roughness/height/normal/AO", "single-frequency random noise", "plastic-looking smooth bark, stone, cloth, foliage, or aged material", "local color/detail described only in prose without material masks", "claiming exact PBR recovery when confidence is below the target threshold"]}, "lightingPass": {"requiredTerms": ["key light", "fill light", "rim or environment light", "exposure", "tone mapping", "background", "contact shadow"], "mustAvoid": ["ambient-only lighting", "flat value range", "missing contact shadow", "reference lighting copied without separating material readability"]}, "screenshotReview": ["Compare albedo palette and local color zones.", "Compare roughness/normal/bump response under light.", "Compare cavity dirt, edge wear, stains, moss, scratches, or other local masks.", "Compare key/fill/rim structure, exposure, tone mapping, background, and contact shadows.", "Capture a neutral-light render to verify material readability without reference lighting.", "Capture a grazing-light close-up to expose flat normals, uniform roughness, tiling, and plastic highlights.", "Capture a reference-matched render from the same camera framing as the source."]};
  return lights;
}


// Plan 1.3 §3.2 — auto-framing by bounding box. The Divine Eye can only compare a
// render to the reference if the object is FRAMED consistently (an object framed
// differently scores as wrong even when its shape is right). This positions the camera
// deterministically from the object's bounding box so it fills the frame at a stable
// margin, and sets near/far to the object scale. Call after adding the model to the
// scene, and again on resize (after updating camera.aspect).
export function frameElephantCrossingSignCamera(
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


export function configureElephantCrossingSignRenderer(renderer: THREE.WebGLRenderer): void {
  // Load-bearing for view-dependent finishes (anodized / Doppler): without ACES + sRGB
  // the environment reflection reads flat/washed instead of a believable metal response.
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
}

/* ===========================================================================
 * thaikit post-generation layer
 *
 * Four things generate_threejs_factory.py cannot express, applied after it builds.
 * Everything here is a consequence of ONE constraint: maxDrawCalls is 2, so the prop
 * gets exactly two meshes and the two sign plates have to share one of them.
 * =========================================================================== */

/** Plate geometry, in metres. Every number is measured; see scratch/<id>/measurements.md. */
const PLATE = {
  halfExtent: 0.45,          // built extent of the diamond, half of the declared 0.90 m width
  cornerRadius: 0.038,       // mean of the left vertex's 0.044 and the top vertex's 0.031
  thickness: 0.006,          // folded sheet: face plus edge return
  ruleStroke: 0.020,         // black border rule, perpendicular stroke
  ruleMargin: 0.014,         // plate edge to the rule's outer edge
  suppHalfW: 0.277,
  suppHalfH: 0.125,
  suppCornerRadius: 0.025,
  suppRuleStroke: 0.007,
  suppRuleMargin: 0.011,
  suppOffsetY: -0.619,       // supplementary plate centre, in the diamond's frame
  splitY: -0.47,             // anything below this local y belongs to the supplementary plate
} as const;

const PALETTE = {
  sheeting: '#D1B630',       // trimmed mean of two verified-clean field crops
  algae: '#A5A052',        // outboard margin, banded off the rectified plate
  algaePeak: '#9B9653',    // greenest 15% of that band
  ink: '#1D1D1A',
  galvanised: '#919999',
  galvanisedClean: '#A9AEB0',
  rust: '#5D4431',
} as const;

/** Atlas layout. Two graphic regions and one plain patch that every non-face vertex collapses to. */
const ATLAS = {
  w: 1024, h: 512,
  dia:   { x: 0,   y: 0,   w: 512, h: 512 },
  supp:  { x: 512, y: 0,   w: 512, h: 231 },
  plain: { x: 512, y: 240, w: 512, h: 272 },
  plainSampleU: 768 / 1024,
  plainSampleV: 1 - 376 / 512,
} as const;

/**
 * The elephant, as 180 normalized points traced from the reference.
 *
 * Not drawn freehand: the pictogram IS this prop's identity, so its shape is taken from the
 * plate rather than invented. The plate was rectified through a homography fitted to the black
 * border rule's four edge lines, the dark mask's largest connected component was extracted
 * (49,897 px, one island -- it is a solid silhouette, not an outline), its boundary traced, and
 * the 2,026-point contour simplified to these 180 at 1.4 px. See projection-route.md.
 *
 * The frame is the unit square whose INSCRIBED DIAMOND is the rule's outer boundary -- which is
 * inset from the plate edge, hence RULE_FRAME below. +x right, +y DOWN.
 */
const ELEPHANT: number[] = [0.3052, 0.3302, 0.3083, 0.3333, 0.3177, 0.3302, 0.3349, 0.3318, 0.3365, 0.3349, 0.3396, 0.3333, 0.3599, 0.3412, 0.3662, 0.3474, 0.3834, 0.3474, 0.385, 0.3505, 0.4335, 0.3505, 0.4851, 0.3443, 0.5086, 0.3443, 0.5102, 0.3474, 0.5336, 0.349, 0.59, 0.3646, 0.6197, 0.3787, 0.6495, 0.4006, 0.6823, 0.4444, 0.6901, 0.4601, 0.6901, 0.4679, 0.6933, 0.4679, 0.6933, 0.4757, 0.6964, 0.4773, 0.6964, 0.4898, 0.6995, 0.4914, 0.7042, 0.5884, 0.7214, 0.6182, 0.723, 0.6385, 0.7183, 0.6369, 0.7089, 0.6213, 0.7027, 0.59, 0.6995, 0.5884, 0.6886, 0.5102, 0.6839, 0.5149, 0.687, 0.5743, 0.6823, 0.6088, 0.6854, 0.6103, 0.6854, 0.626, 0.7027, 0.6588, 0.7042, 0.6948, 0.7074, 0.6964, 0.7058, 0.7074, 0.6588, 0.7121, 0.651, 0.7058, 0.651, 0.6964, 0.6588, 0.6776, 0.6557, 0.6448, 0.6526, 0.6338, 0.6244, 0.6072, 0.6197, 0.6103, 0.6135, 0.6275, 0.6135, 0.6698, 0.6103, 0.6714, 0.6119, 0.6808, 0.6088, 0.6839, 0.6119, 0.6854, 0.6119, 0.698, 0.6056, 0.7042, 0.5571, 0.7011, 0.5524, 0.6964, 0.5524, 0.6901, 0.5712, 0.6667, 0.5759, 0.6354, 0.5759, 0.6182, 0.5728, 0.6166, 0.5728, 0.6056, 0.5649, 0.59, 0.5571, 0.5822, 0.5243, 0.5806, 0.518, 0.5759, 0.5008, 0.5743, 0.4977, 0.5696, 0.4867, 0.5681, 0.4851, 0.5649, 0.471, 0.5665, 0.4648, 0.5775, 0.4664, 0.6197, 0.4695, 0.6213, 0.4695, 0.6448, 0.4726, 0.6463, 0.471, 0.6823, 0.4804, 0.6964, 0.4804, 0.7042, 0.4679, 0.7074, 0.4351, 0.7027, 0.4225, 0.7042, 0.4225, 0.6933, 0.4351, 0.6823, 0.4366, 0.6714, 0.4319, 0.651, 0.4288, 0.6495, 0.4257, 0.6275, 0.4163, 0.6135, 0.4163, 0.6056, 0.41, 0.5931, 0.3991, 0.6025, 0.3772, 0.6448, 0.3756, 0.6698, 0.3787, 0.6698, 0.3818, 0.6901, 0.3787, 0.6933, 0.3552, 0.6964, 0.3537, 0.6933, 0.3443, 0.6964, 0.3427, 0.6933, 0.3365, 0.6948, 0.3255, 0.6901, 0.3255, 0.6808, 0.3333, 0.6745, 0.3412, 0.6588, 0.3396, 0.6275, 0.3427, 0.626, 0.3443, 0.6072, 0.3474, 0.6056, 0.349, 0.59, 0.3521, 0.5884, 0.3505, 0.5806, 0.3537, 0.579, 0.3599, 0.5321, 0.3631, 0.5305, 0.3599, 0.507, 0.3537, 0.5039, 0.3396, 0.4867, 0.3208, 0.493, 0.302, 0.493, 0.2895, 0.5039, 0.2848, 0.5133, 0.2817, 0.5133, 0.2817, 0.4977, 0.2754, 0.4961, 0.266, 0.5117, 0.2739, 0.5649, 0.2739, 0.5978, 0.2707, 0.5994, 0.2692, 0.6197, 0.266, 0.6213, 0.266, 0.6354, 0.277, 0.6416, 0.2848, 0.6322, 0.2942, 0.6354, 0.302, 0.6432, 0.2973, 0.6526, 0.2833, 0.6604, 0.2723, 0.6604, 0.2645, 0.6541, 0.2613, 0.6557, 0.2473, 0.6338, 0.2457, 0.5728, 0.2394, 0.5649, 0.2379, 0.5524, 0.2347, 0.5524, 0.2285, 0.5336, 0.2238, 0.5305, 0.2222, 0.5336, 0.2081, 0.5368, 0.1862, 0.5368, 0.1847, 0.5336, 0.18, 0.5352, 0.1643, 0.5274, 0.1753, 0.5274, 0.1768, 0.5305, 0.1862, 0.5274, 0.1972, 0.529, 0.2175, 0.5211, 0.216, 0.5164, 0.1987, 0.5196, 0.169, 0.5133, 0.1831, 0.5117, 0.1847, 0.5149, 0.2081, 0.5102, 0.2222, 0.4992, 0.2238, 0.4617, 0.2379, 0.4351, 0.2426, 0.4006, 0.2629, 0.3803, 0.2645, 0.3678, 0.277, 0.3443, 0.2879, 0.3365, 0.3036, 0.3318];

/** Half-diagonal of the rule's outer boundary: a perpendicular inset of `ruleMargin` moves a
 *  diamond's vertex in by that times sqrt(2). This is the scale the traced frame is in. */
const RULE_FRAME = PLATE.halfExtent - PLATE.ruleMargin * Math.SQRT2;   // 0.43020 m

/** The supplementary plate's outline, same closed-form fillet as the diamond's. */
const SUPP_PROFILE: [number, number][] = [[0.252, -0.125], [0.26157, -0.1231], [0.26968, -0.11768], [0.2751, -0.10957], [0.277, -0.1], [0.277, 0.1], [0.2751, 0.10957], [0.26968, 0.11768], [0.26157, 0.1231], [0.252, 0.125], [-0.252, 0.125], [-0.26157, 0.1231], [-0.26968, 0.11768], [-0.2751, 0.10957], [-0.277, 0.1], [-0.277, -0.1], [-0.2751, -0.10957], [-0.26968, -0.11768], [-0.26157, -0.1231], [-0.252, -0.125]];

/** A square-on-point with filleted vertices, in metres.
 *  For a 90-degree corner the fillet centre sits r*sqrt(2) in from the sharp vertex along the
 *  bisector and the arc sweeps +-45 degrees, so the built extent is a - r*(sqrt(2)-1). */
function filletedDiamond(extent: number, r: number, seg: number): [number, number][] {
  const aSharp = extent + r * (Math.SQRT2 - 1);
  const cr = aSharp - r * Math.SQRT2;
  const pts: [number, number][] = [];
  for (let k = 0; k < 4; k += 1) {
    const phi = (k * Math.PI) / 2;
    const cx = cr * Math.cos(phi), cy = cr * Math.sin(phi);
    for (let i = 0; i <= seg; i += 1) {
      const t = phi - Math.PI / 4 + (i / seg) * (Math.PI / 2);
      pts.push([cx + r * Math.cos(t), cy + r * Math.sin(t)]);
    }
  }
  return pts;
}

/**
 * The plate outline inset PERPENDICULARLY by `p` metres.
 *
 * Not the same as calling filletedDiamond with a smaller extent, and the difference is a real
 * measured error this replaced. filletedDiamond takes the FILLETED extent and derives the sharp
 * half-diagonal from it as `extent + r(sqrt(2)-1)` -- so two diamonds given filleted extents that
 * differ by p*sqrt(2) do NOT have straight edges p apart, unless their fillet radii are equal too.
 * The border rule's radius is smaller than the plate's by exactly the inset, so the correction
 * differed between them and pushed the rule an extra r_inset*(sqrt(2)-1)/sqrt(2) inboard: the
 * margin measured 0.026 m in the render against the 0.014 m measured on the plate.
 *
 * A perpendicular inset of p moves the SHARP half-diagonal in by p*sqrt(2) and the fillet radius
 * in by p. Working in sharp-diagonal space makes that exact.
 */
const PLATE_SHARP = PLATE.halfExtent + PLATE.cornerRadius * (Math.SQRT2 - 1);

function plateOutlineInset(p: number, seg: number): [number, number][] {
  const aSharp = PLATE_SHARP - p * Math.SQRT2;
  const r = Math.max(0.002, PLATE.cornerRadius - p);
  const cr = aSharp - r * Math.SQRT2;
  const pts: [number, number][] = [];
  for (let k = 0; k < 4; k += 1) {
    const phi = (k * Math.PI) / 2;
    const cx = cr * Math.cos(phi), cy = cr * Math.sin(phi);
    for (let i = 0; i <= seg; i += 1) {
      const t = phi - Math.PI / 4 + (i / seg) * (Math.PI / 2);
      pts.push([cx + r * Math.cos(t), cy + r * Math.sin(t)]);
    }
  }
  return pts;
}

function roundedRect(hw: number, hh: number, r: number, seg: number): [number, number][] {
  const pts: [number, number][] = [];
  const corners: [number, number, number][] = [
    [hw - r, -(hh - r), -Math.PI / 2], [hw - r, hh - r, 0],
    [-(hw - r), hh - r, Math.PI / 2], [-(hw - r), -(hh - r), Math.PI],
  ];
  for (const [cx, cy, a0] of corners) {
    for (let i = 0; i <= seg; i += 1) {
      const t = a0 + (i / seg) * (Math.PI / 2);
      pts.push([cx + r * Math.cos(t), cy + r * Math.sin(t)]);
    }
  }
  return pts;
}

/* ---------------------------------------------------------------- the atlas --- */

/**
 * Built ONCE at module scope and shared by every instance of the prop.
 *
 * A level builder places hundreds of these signs, and a canvas rebuilt per call would be
 * hundreds of 1024x512 textures for one identical image. `null` is a legitimate result:
 * `document` may not exist (SSR, a worker), and the material's authored yellow albedo is
 * then what shows -- a plain sign rather than no sign.
 */
let legendTextureCache: THREE.CanvasTexture | null | undefined;

function legendTexture(anisotropy: number): THREE.CanvasTexture | null {
  if (legendTextureCache !== undefined) return legendTextureCache;
  if (typeof document === 'undefined') { legendTextureCache = null; return null; }
  const canvas = document.createElement('canvas');
  canvas.width = ATLAS.w; canvas.height = ATLAS.h;
  const ctx = canvas.getContext('2d');
  if (!ctx) { legendTextureCache = null; return null; }

  // --- plain patch: every plate BACK and the whole edge return sample one texel of this ----
  ctx.fillStyle = PALETTE.galvanised;
  ctx.fillRect(ATLAS.plain.x, ATLAS.plain.y, ATLAS.plain.w, ATLAS.plain.h);

  drawDiamondFace(ctx);
  drawSupplementaryFace(ctx);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = anisotropy;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  legendTextureCache = tex;
  return tex;
}

/** Trace a metre-space polygon into a canvas region via a supplied mapping. */
function tracePath(
  ctx: CanvasRenderingContext2D,
  pts: [number, number][],
  px: (x: number) => number,
  py: (y: number) => number,
): void {
  ctx.beginPath();
  ctx.moveTo(px(pts[0][0]), py(pts[0][1]));
  for (let i = 1; i < pts.length; i += 1) ctx.lineTo(px(pts[i][0]), py(pts[i][1]));
  ctx.closePath();
}

function drawDiamondFace(ctx: CanvasRenderingContext2D): void {
  const R = ATLAS.dia;
  const S = R.w / (PLATE.halfExtent * 2);              // 568.9 px per metre
  const px = (x: number) => R.x + (x + PLATE.halfExtent) * S;
  const py = (y: number) => R.y + (PLATE.halfExtent - y) * S;

  ctx.save();
  ctx.fillStyle = PALETTE.sheeting;
  ctx.fillRect(R.x, R.y, R.w, R.h);

  // Clip to the plate outline so the margin stroke and the staining stay on the plate. The
  // corners outside it are never sampled, but they are what a mip level averages into the edge.
  tracePath(ctx, plateOutlineInset(0, 12), px, py);
  ctx.clip();

  // --- algal margin ----------------------------------------------------------------------
  // Banded off the rectified plate rather than judged by eye, and the measurement changed the
  // design. Sampling by diamond-radius in the rule's own frame, on the sides the post does not
  // bleed into:
  //     field                        #D0B735  G-B 130  L 176
  //     just inside the rule         #C9B439  G-B 122  L 172   <- barely stained
  //     OUTBOARD MARGIN, outside it  #A5A052  G-B  79  L 153   <- all of the staining
  //     greenest 15% of that band    #9B9653  G-B  67  L 144
  // So the algae is not a wide soft wash reaching into the face, which is what the first build
  // drew: it is a NARROW STRIP in the 0.014 m margin between the rule and the plate edge, where
  // water sits and runs. It is also much greener than the #B9AB36 first authored - that came
  // from a crop filtered for green-biased pixels, which had selected stained YELLOW rather than
  // the stain itself.
  ctx.lineJoin = 'round';
  tracePath(ctx, plateOutlineInset(PLATE.ruleMargin / 2, 12), px, py);
  ctx.strokeStyle = PALETTE.algaePeak;
  ctx.globalAlpha = 0.92;
  ctx.lineWidth = PLATE.ruleMargin * S;
  ctx.stroke();

  // A light bleed inboard of the rule, for the 8-point G-B drop measured there. A GRADIENT, not
  // a stroke: an inset stroke of the same colour drew a visible second ring inside the border
  // rule, which the reference does not have. The measured falloff is gentle and continuous, so
  // the drawing has to be too.
  const wash = ctx.createRadialGradient(px(0), py(0), 0.18 * S, px(0), py(0), 0.50 * S);
  wash.addColorStop(0, 'rgba(165,160,82,0)');
  wash.addColorStop(1, 'rgba(165,160,82,0.42)');
  ctx.fillStyle = wash;
  ctx.fillRect(R.x, R.y, R.w, R.h);

  // --- black border rule -----------------------------------------------------------------
  // Stroke CENTRELINE, so the perpendicular inset is margin + half the stroke. The fillet
  // radius shrinks by the same perpendicular inset, which is why an inset rule looks tighter
  // at the corners than the plate outline does.
  const ruleInset = PLATE.ruleMargin + PLATE.ruleStroke / 2;
  tracePath(ctx, plateOutlineInset(ruleInset, 12), px, py);
  ctx.strokeStyle = PALETTE.ink;
  ctx.lineWidth = PLATE.ruleStroke * S;
  ctx.stroke();

  // --- the elephant ----------------------------------------------------------------------
  // Filled, never stroked: a solid silhouette is what survives highway distance and a low
  // texture resolution, and an outline of the same shape does not.
  ctx.fillStyle = PALETTE.ink;
  ctx.beginPath();
  for (let i = 0; i < ELEPHANT.length; i += 2) {
    const x = (ELEPHANT[i] - 0.5) * 2 * RULE_FRAME;
    const y = (0.5 - ELEPHANT[i + 1]) * 2 * RULE_FRAME;
    if (i === 0) ctx.moveTo(px(x), py(y)); else ctx.lineTo(px(x), py(y));
  }
  ctx.closePath();
  ctx.fill();

  // --- fasteners: printed, not modelled. 0.009 m is sub-pixel at prop distance, and an ----
  // --- InstancedMesh would spend one of only two draw calls saying so. -------------------
  drawFastener(ctx, px(0), py(0.305), 0.0045 * S);
  drawFastener(ctx, px(0), py(-0.341), 0.0045 * S);
  ctx.restore();
}

function drawSupplementaryFace(ctx: CanvasRenderingContext2D): void {
  const R = ATLAS.supp;
  const S = R.w / (PLATE.suppHalfW * 2);              // 924 px per metre, same on both axes
  const px = (x: number) => R.x + (x + PLATE.suppHalfW) * S;
  const py = (y: number) => R.y + (PLATE.suppHalfH - y) * S;

  ctx.save();
  ctx.fillStyle = PALETTE.sheeting;
  ctx.fillRect(R.x, R.y, R.w, R.h);
  tracePath(ctx, SUPP_PROFILE, px, py);
  ctx.clip();

  // Same narrow margin strip as the diamond, scaled to this plate's own 0.011 m margin.
  ctx.lineJoin = 'round';
  ctx.strokeStyle = PALETTE.algaePeak;
  ctx.globalAlpha = 0.92;
  ctx.lineWidth = PLATE.suppRuleMargin * 1.15 * S;
  tracePath(ctx, roundedRect(PLATE.suppHalfW - PLATE.suppRuleMargin / 2,
                             PLATE.suppHalfH - PLATE.suppRuleMargin / 2,
                             PLATE.suppCornerRadius - PLATE.suppRuleMargin / 2, 12), px, py);
  ctx.stroke();
  ctx.globalAlpha = 1;

  const ruleInset = PLATE.suppRuleMargin + PLATE.suppRuleStroke / 2;
  tracePath(ctx, roundedRect(PLATE.suppHalfW - ruleInset, PLATE.suppHalfH - ruleInset,
                             PLATE.suppCornerRadius - ruleInset, 12), px, py);
  ctx.strokeStyle = PALETTE.ink;
  ctx.lineWidth = PLATE.suppRuleStroke * S;
  ctx.stroke();

  // --- the legend ------------------------------------------------------------------------
  // Each line is measured and then scaled horizontally to the width the plate actually has.
  // That is what makes the layout independent of which face resolves: the reference's English
  // line is CONDENSED (per-glyph advance ~0.55 of cap height), and a normal-width face set at
  // the same size overruns the plate. Fitting by measurement gets the right width from any face.
  ctx.fillStyle = PALETTE.ink;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  fitText(ctx, 'ระวังช้าง',
          `700 ${Math.round(0.090 * S)}px "Noto Sans Thai", "Leelawadee UI", Tahoma, Loma, "Sarabun", "Thonburi", FreeSerif, sans-serif`,
          px(0), py(0.035), 0.34 * S);
  fitText(ctx, 'ELEPHANT CROSSING',
          `700 ${Math.round(0.055 * S)}px "Liberation Sans Narrow", "Arial Narrow", "Nimbus Sans Narrow", "Roboto Condensed", Arial, Helvetica, sans-serif`,
          px(0), py(-0.065), 0.45 * S);

  // Fasteners at the plate's top and bottom margins rather than mid-legend. The reference does
  // put a bolt over the wording, but at this size a dark disc sitting in the gap between
  // ELEPHANT and CROSSING reads as an interpunct -- a legibility artefact the photograph does
  // not have, because the photograph has the resolution to show a bolt head as a bolt head.
  // 0.100 clears the English descenders below and stays inside the rule centreline at 0.1105.
  drawFastener(ctx, px(0), py(0.100), 0.004 * S);
  drawFastener(ctx, px(0), py(-0.100), 0.004 * S);
  ctx.restore();
}

/** Draw text centred at (cx, cy), squeezed horizontally to exactly `targetWidth`. */
function fitText(
  ctx: CanvasRenderingContext2D, text: string, font: string,
  cx: number, cy: number, targetWidth: number,
): void {
  ctx.font = font;
  const measured = ctx.measureText(text).width;
  if (!(measured > 0)) return;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(Math.min(1.6, targetWidth / measured), 1);
  ctx.fillText(text, 0, 0);
  ctx.restore();
}

/** A bolt head as the reference shows it: a dark disc with a light upper rim. */
function drawFastener(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number): void {
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = '#4A4A46';
  ctx.fill();
  ctx.beginPath();
  ctx.arc(cx - r * 0.25, cy - r * 0.25, r * 0.55, 0, Math.PI * 2);
  ctx.fillStyle = '#8E8E88';
  ctx.fill();
  ctx.restore();
}

/* ------------------------------------------------------- merge + author UVs --- */

function toNonIndexed(g: THREE.BufferGeometry): THREE.BufferGeometry {
  return g.getIndex() ? g.toNonIndexed() : g;
}

/** Concatenate two non-indexed geometries' position and normal buffers. */
function concatGeometry(a: THREE.BufferGeometry, b: THREE.BufferGeometry): THREE.BufferGeometry {
  const out = new THREE.BufferGeometry();
  for (const name of ['position', 'normal']) {
    const pa = a.getAttribute(name), pb = b.getAttribute(name);
    if (!pa || !pb) continue;
    const arr = new Float32Array(pa.count * pa.itemSize + pb.count * pb.itemSize);
    arr.set(pa.array as ArrayLike<number>, 0);
    arr.set(pb.array as ArrayLike<number>, pa.count * pa.itemSize);
    out.setAttribute(name, new THREE.BufferAttribute(arr, pa.itemSize));
  }
  return out;
}

/**
 * Merge the supplementary plate into the diamond's buffer and author the UV atlas.
 *
 * THREE.Shape carries ONE outer contour, so a single ExtrudeGeometry cannot hold two disjoint
 * islands -- which is why the generator emitted only the diamond and the second plate arrives
 * here. Merging them is not an optimisation applied at the end: it is the blockout decision
 * recorded in the spec, because a prop whose ceiling is 2 draw calls cannot afford a plate and
 * a post and a second plate.
 *
 * The UV rule is what lets ONE material carry a printed front and a plain back. A vertex whose
 * normal faces +Z takes a graphic region chosen by its local y; every other vertex -- both plate
 * backs, and the whole edge return -- collapses to a single galvanised texel. All three corners
 * of those triangles land on one texel, so their UV derivative is zero and they sample the top
 * mip; there is no filtering cost to the collapse.
 */
function mergePlatesAndAuthorUVs(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as { meshes?: Record<string, THREE.Mesh> } | undefined;
  const mesh = rt?.meshes?.['sign-plates'];
  if (!mesh) return;

  const supp = buildExtrudeGeometry({ points: SUPP_PROFILE, depth: PLATE.thickness });
  supp.translate(0, PLATE.suppOffsetY, 0);
  const merged = concatGeometry(toNonIndexed(mesh.geometry), toNonIndexed(supp));
  supp.dispose();

  const pos = merged.getAttribute('position');
  const nor = merged.getAttribute('normal');
  const uv = new Float32Array(pos.count * 2);
  const D = ATLAS.dia, U = ATLAS.supp;

  for (let i = 0; i < pos.count; i += 1) {
    const x = pos.getX(i), y = pos.getY(i);
    let cu: number, cv: number;
    if (nor.getZ(i) > 0.5) {
      if (y > PLATE.splitY) {
        cu = D.x + ((x + PLATE.halfExtent) / (PLATE.halfExtent * 2)) * D.w;
        cv = D.y + ((PLATE.halfExtent - y) / (PLATE.halfExtent * 2)) * D.h;
      } else {
        const sy = y - PLATE.suppOffsetY;
        cu = U.x + ((x + PLATE.suppHalfW) / (PLATE.suppHalfW * 2)) * U.w;
        cv = U.y + ((PLATE.suppHalfH - sy) / (PLATE.suppHalfH * 2)) * U.h;
      }
      uv[i * 2] = cu / ATLAS.w;
      uv[i * 2 + 1] = 1 - cv / ATLAS.h;
    } else {
      uv[i * 2] = ATLAS.plainSampleU;
      uv[i * 2 + 1] = ATLAS.plainSampleV;
    }
  }
  merged.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  merged.computeBoundingBox();
  merged.computeBoundingSphere();

  mesh.geometry.dispose();
  mesh.geometry = merged;
}

/** Bind the atlas. The map carries albedo now, so the material's colour goes to white. */
function applyLegendAtlas(root: THREE.Group, options: ProceduralModelOptions): void {
  const rt = root.userData.sculptRuntime as { meshes?: Record<string, THREE.Mesh> } | undefined;
  const mesh = rt?.meshes?.['sign-plates'];
  if (!mesh) return;
  const tex = legendTexture(options.textureAnisotropy ?? 8);
  if (!tex) return;
  const m = (mesh.material as THREE.MeshPhysicalMaterial).clone();
  m.map = tex;
  m.color.setRGB(1, 1, 1);
  m.needsUpdate = true;
  mesh.material = m;
}

/**
 * The post's rust, as a vertex-colour ramp.
 *
 * The post geometry is rebuilt here at 8 height segments. The generator emitted a 1-segment box,
 * which is the right answer to an 800-triangle budget and the wrong one for a weathering
 * gradient: two rows of vertices can only carry a linear ramp from top to bottom, which would
 * rust the entire post. Nine rows can say what the reference says -- intact coating at the top,
 * runoff streaking from the lower fixing, and a solid corrosion band at the cut end where the
 * galvanising was severed. It costs 56 triangles out of 636 spare, and it keeps the material
 * textureless, which is worth more than the triangles.
 */
function applyPostWeathering(root: THREE.Group): void {
  const rt = root.userData.sculptRuntime as { meshes?: Record<string, THREE.Mesh> } | undefined;
  const mesh = rt?.meshes?.['post'];
  if (!mesh) return;

  const H = 2.10, W = 0.075;
  const geo = new THREE.BoxGeometry(W, H, W, 1, 8, 1);
  const pos = geo.getAttribute('position');
  const clean = new THREE.Color(PALETTE.galvanisedClean);
  const field = new THREE.Color(PALETTE.galvanised);
  const rust = new THREE.Color(PALETTE.rust);
  const c = new THREE.Color();
  const colors = new Float32Array(pos.count * 3);

  for (let i = 0; i < pos.count; i += 1) {
    // t = 0 at the cut end, 1 at the top of the post
    const t = (pos.getY(i) + H / 2) / H;
    if (t > 0.55) c.copy(field).lerp(clean, Math.min(1, (t - 0.55) / 0.45));
    else if (t > 0.16) c.copy(field);
    else c.copy(field).lerp(rust, Math.min(1, (0.16 - t) / 0.16));
    // Runoff: a streak on the -X face only, starting at the lower fixing and running down.
    if (pos.getX(i) < 0 && t < 0.62) c.lerp(rust, 0.35 * (1 - t / 0.62));
    colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const m = (mesh.material as THREE.MeshPhysicalMaterial).clone();
  m.vertexColors = true;
  // Vertex colours MULTIPLY material.color, so the authored galvanised grey has to go to white
  // or it is applied twice. Leaving it in place rendered the post at #919999 squared -- a dark
  // slate blue -- and turned the rust band at the cut end nearly black.
  m.color.setRGB(1, 1, 1);
  m.needsUpdate = true;

  mesh.geometry.dispose();
  mesh.geometry = geo;
  mesh.material = m;
}

/**
 * thaikit entry point. The registry records `createObjectModel` as the export and calls it with
 * (spec, options); the generated factory is named for its target and takes options alone. `spec`
 * is accepted and attached for host-side inspection -- the reconstruction data already lives in
 * the module, so it is deliberately not a second source of truth.
 */
export function createObjectModel(
  spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = createElephantCrossingSignModel(options);
  if (spec !== undefined && spec !== null) root.userData.sculptSpec = spec;

  mergePlatesAndAuthorUVs(root);
  applyLegendAtlas(root, options);
  applyPostWeathering(root);

  const rt = root.userData.sculptRuntime as Record<string, any> | undefined;
  if (rt) {
    const nodes = (rt.nodes ?? {}) as Record<string, THREE.Object3D>;

    // Pivots: ONE. This prop has no moving parts -- no hinge, no bearing, no lid, no wheel --
    // so the root is the only axis it has, and that is the correct answer rather than a gap.
    // A pivot per component would describe a machine that does not exist.
    const rootPivot = new THREE.Object3D();
    rootPivot.name = 'root';
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: 'root' },
    };
    root.add(rootPivot);

    // Colliders: drop the null the generator emits for a component that declares none, so the
    // count is of real proxies. The declared shape is a cylinder and it is on the POST, because
    // what a player walks into is the post; a proxy sized to the whole prop would block the
    // pavement under a plate mounted two metres up.
    // An ARRAY of named proxies, not the Record: the harness maps over this field.
    const colliders = Object.entries((rt.colliders ?? {}) as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // Destruction groups: this prop declares NONE, and promotion checks built against declared
    // as an equality in BOTH directions. Derived rather than assumed empty, so a component that
    // somehow carried a fractureGroup fails the gate loudly instead of being dropped here.
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
      // puppeteer bridge and its registry field is a number; a Record of Object3D is circular
      // and fails to serialise, which surfaces as the whole stats object arriving undefined.
      // The Record stays reachable under byId.
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
