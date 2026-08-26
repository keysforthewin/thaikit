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

// Generated from ObjectSculptSpec target: FamilyMart Store Building
// Sculpt build pass: optimization-pass
// This factory is intentionally pass-gated. Finish browser screenshot review before unlocking deeper passes.
export function createFamilyMartStoreBuildingModel(options: ProceduralModelOptions = {}): THREE.Group {
  const root = new THREE.Group();
  root.name = "FamilyMart Store Building";
  root.userData.reconstructionEvidence = {"itemFamily": null, "subtype": null, "componentAdapter": null, "route": null, "exactnessTier": null, "referenceCamera": {"solved": false, "fovDegrees": 40.0, "aspect": 1.0, "orientation": {"yaw": 0.0, "pitch": 0.0, "roll": 0.0}, "positionHint": [0.0, 0.0, 3.0], "note": "For likeness work, solve the reference camera (forge/stage1_intake/solve_camera_pose.py) so the review render aligns with the photo and the reference can be projected. Confirm by overlay review."}, "approximationNotes": []};
  root.userData.materialPipeline = {};
  root.userData.materialReferenceRegistry = null;


  // ---- printed graphics: road markings in the albedo, not on a second surface --------
  // A painted marking has no thickness. Drawing it into the carriageway's base colour is
  // the physically correct representation AND it is why this tile needs no proud quad
  // over the asphalt -- the one thing guaranteed to z-fight as the camera moves. The
  // canvas is drawn with fillRect only, so it costs microseconds; it is not the per-pixel
  // synthesis that `textureless` exists to prevent.
  function buildMarkingTexture(specIn: any): THREE.Texture | null {
    if (typeof document === 'undefined') return null;   // headless without a DOM: skip
    const spec = specIn;
    // Resolution per canvas, not one global size: a 0.6 m drain grate at 512 square costs the
    // same VRAM as an 8 m road surface for detail nobody can resolve. Default 512, opt down.
    //
    // The canvas must match the SURFACE'S ASPECT, not be square. A square canvas stretched
    // across an 8.0 x 0.92 m fascia scales x and y by 8.7:1, which smears a wordmark into an
    // unreadable streak while leaving the plain colour bands looking fine -- so the bug only
    // shows on the one element that carries the identity.
    const PX = spec.px ?? 512;
    const PY = spec.pxH ?? Math.max(8, Math.round(PX * (spec.depth / spec.width)));
    const canvas = document.createElement('canvas');
    canvas.width = PX; canvas.height = PY;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.fillStyle = spec.base;
    ctx.fillRect(0, 0, PX, PY);
    // metres -> pixels. The SECOND axis scales by PY, not PX. Scaling both by PX drew
    // everything 8.7x too tall on a 2048x236 fascia, so only a sliver of the intended layout
    // reached the surface -- the brand band vanished while the plain colours still looked
    // plausible, which is why it read as a mapping problem rather than a scaling one.
    //
    // Canvas y grows DOWNWARD while three's CanvasTexture already flips for UV, so a band whose
    // second axis is HEIGHT needs flipY to come out the right way up: on a fascia the difference
    // is the brand's top band ending up along its bottom edge.
    const ux = (x: number) => ((x + spec.width / 2) / spec.width) * PX;
    const vz = spec.flipY
      ? (z: number) => (1 - (z + spec.depth / 2) / spec.depth) * PY
      : (z: number) => ((z + spec.depth / 2) / spec.depth) * PY;
    for (const b of spec.bands ?? []) {
      ctx.fillStyle = b.color;
      ctx.fillRect(ux(b.x0), Math.min(vz(b.z0), vz(b.z1)), ux(b.x1) - ux(b.x0), Math.abs(vz(b.z1) - vz(b.z0)));
    }
    // Polylines: a curved edge line is a STROKE, not a run of little squares. Approximating an
    // arc with axis-aligned rects gave a dotted line that reads as a lane of cat's eyes rather
    // than as painted edge marking.
    for (const pl of spec.polylines ?? []) {
      if (!pl.points || pl.points.length < 2) continue;
      ctx.strokeStyle = pl.color;
      ctx.lineWidth = Math.max(1, (pl.width / spec.width) * PX);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      if (pl.dash) ctx.setLineDash(pl.dash.map((v) => (v / spec.depth) * PX));
      else ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(ux(pl.points[0][0]), vz(pl.points[0][1]));
      for (const [px, pz] of pl.points.slice(1)) ctx.lineTo(ux(px), vz(pz));
      ctx.stroke();
      ctx.setLineDash([]);
    }
    for (const d of spec.dashes ?? []) {
      ctx.fillStyle = d.color;
      ctx.fillRect(ux(d.x0), Math.min(vz(d.z0), vz(d.z1)), ux(d.x1) - ux(d.x0), Math.abs(vz(d.z1) - vz(d.z0)));
    }
    // Wordmarks. A brand fascia is PRINTED GRAPHICS -- the case CLAUDE.md reserves the
    // after-construction canvas for. Drawn rather than modelled: lettering as geometry would
    // cost a draw call and several geometries on the axis this class is tightest on, and paint
    // has no thickness to model anyway.
    for (const t of spec.texts ?? []) {
      const px = Math.max(6, (t.size / spec.depth) * PY);
      ctx.font = `${t.weight ?? 700} ${px}px ${t.font ?? 'Helvetica, Arial, sans-serif'}`;
      ctx.fillStyle = t.color;
      ctx.textAlign = t.align ?? 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(t.text, ux(t.x), vz(t.z));
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    if (spec.uvMode === 'metres') {
      // ExtrudeGeometry's WorldUVGenerator emits CAP uvs as the shape's own (x, y) -- that is,
      // in METRES, spanning -4..4 on an 8 m tile -- not the 0..1 a BoxGeometry gives. Left
      // alone the canvas tiles eight times across the road and the lane lines come out as a
      // fine stripe pattern. Remap: u * (1/width) + 0.5 lands metres back on 0..1, which is
      // exactly the mapping the canvas was drawn with.
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.repeat.set(1 / spec.width, 1 / spec.depth);
      tex.offset.set(0.5, 0.5);
    }
    tex.needsUpdate = true;
    return tex;
  }
  const materialMap: Record<string, THREE.Material> = {};
  materialMap["render"] = createSculptMaterial(
    "render",
    {"id": "render", "name": "Painted cement render, walls", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#6D6F74", "color": "#6D6F74", "albedo": {"dominant": "#6D6F74", "secondary": ["#5A5C60", "#7B7D82"], "samplingNotes": "Measured on a 67x143 px crop of the +X flank between the door and the rear corner. Luma spread 5.2 -- the flattest read anywhere on this plate, so the crop sits on one surface and the number is the render's own albedo with no lift applied."}, "colorVariation": {"palette": ["#6D6F74", "#5A5C60", "#7B7D82"], "pattern": "mottled", "amplitude": 0.05, "heightCorrelation": 0.0}, "roughness": {"base": 0.86, "variation": 0.05, "map": "none", "localResponse": "Scalar; this surface has no cavity or edge-wear response worth a channel at prop distance."}, "metalness": {"base": 0.0, "variation": 0.0}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "No AO channel; the shell's own cast shadows carry the occlusion read."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.12, "cavityBias": 0.0, "color": "#4A4640"}, "localOverrides": [{"id": "wall-streaking", "albedo": "#5F6165", "roughnessDelta": 0.03, "coverage": 0.18, "evidenceRefs": ["full-object"], "description": "Run-off staining down the render below the coping drip, heaviest in the top 0.8 m of each wall. Carried as a shading note rather than a texture: it is localised dirt, not albedo variation of the material, and the plate's own crop spread of 5.2 says the render itself is uniform."}], "shaderNotes": ["MeshStandardMaterial, metalness 0. Flat painted render."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["material-crops/render-wall.png, 9,581 px: luma P10 108.1, P90 113.4, spread 5.2. A spread that small over that many pixels is a flat matte dielectric with no resolvable relief.", "The vertical streaking visible on the plate is run-off staining, which is localised dirt rather than albedo variation of the material, so it does not justify a texture set.", "Cost measurement carried from the 7-Eleven: declaring textureless took createObjectModel from 24,180 ms to 23 ms, and the cost is the SQUARE of textureResolution."]}},
    options
  );
  materialMap["roof-grey"] = createSculptMaterial(
    "roof-grey",
    {"id": "roof-grey", "name": "Weathered flat-roof membrane", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#7C8288", "color": "#7C8288", "albedo": {"dominant": "#7C8288", "secondary": ["#6B7076"], "samplingNotes": "Read from the roof deck between the parapet and the plant. Recorded at LOW confidence: the crop measured spread 82.2 because at this camera angle the deck and the parapet's inner face cannot be separated by any axis-aligned box."}, "colorVariation": {"palette": ["#7C8288", "#6B7076"], "pattern": "mottled", "amplitude": 0.05, "heightCorrelation": 0.0}, "roughness": {"base": 0.92, "variation": 0.05, "map": "none", "localResponse": "Scalar; this surface has no cavity or edge-wear response worth a channel at prop distance."}, "metalness": {"base": 0.0, "variation": 0.0}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "No AO channel; the shell's own cast shadows carry the occlusion read."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.2, "cavityBias": 0.0, "color": "#4A4640"}, "localOverrides": [], "shaderNotes": ["Authored from a REFUSED crop, deliberately. The honest alternative to a bad measurement is an authored value that says so, not a bad measurement."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["material-crops/roof-deck.png measures spread 82.2, which is REFUSED as a direct albedo reading and recorded as such; the authored value is the crop's lit quartile, one step below the render, which is the relationship the plate plainly shows.", "A flat-roof membrane at prop distance is a value, not a pattern: this surface is visible only from above and is never the read that identifies the building."]}},
    options
  );
  materialMap["white-trim"] = createSculptMaterial(
    "white-trim",
    {"id": "white-trim", "name": "White coping and shopfront framing", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#D4D6D7", "color": "#D4D6D7", "albedo": {"dominant": "#D4D6D7", "secondary": ["#C3C5C6", "#E2E4E5"], "samplingNotes": "Two crops. The coping (184x10 px, spread 25.1, in full key) gives #CACAC8 with no lift needed. The framing crop (205x10 px on a transom) straddles glazing either side and measures spread 172.2, so only its LIT quartile #D4D6D7 is used. The two agree within a few units, which is why they share one material."}, "colorVariation": {"palette": ["#D4D6D7", "#C3C5C6", "#E2E4E5"], "pattern": "mottled", "amplitude": 0.05, "heightCorrelation": 0.0}, "roughness": {"base": 0.55, "variation": 0.05, "map": "none", "localResponse": "Scalar; this surface has no cavity or edge-wear response worth a channel at prop distance."}, "metalness": {"base": 0.15, "variation": 0.0}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "No AO channel; the shell's own cast shadows carry the occlusion read."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#4A4640"}, "localOverrides": [], "shaderNotes": ["Coping and framing share this material on an observed match, not on convenience: the two independent crops land within a few units of each other.", "metalness 0.15 rather than a bare-metal value. The review harness has no environment map, and a high metalness with nothing to reflect renders near-black."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["material-crops/coping.png, 1,840 px, spread 25.1 in full key: a single lit surface.", "material-crops/frame-white.png, spread 172.2: REFUSED as a mean and used only for its lit quartile. A 205x10 px band across a shopfront on a three-quarter view cannot avoid the glass either side of the transom.", "Mill-finish aluminium and painted coping are both flat at prop distance: a 0.075 m mullion on an 8 m facade is under two texels from across a street."]}},
    options
  );
  materialMap["fascia"] = createSculptMaterial(
    "fascia",
    {"id": "fascia", "name": "Brand fascia, printed", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#FFFFFF", "color": "#FFFFFF", "albedo": {"dominant": "#FFFFFF", "secondary": ["#408546", "#1B6FB4"], "samplingNotes": "color is WHITE BY DESIGN. The surface colour lives in a canvas assigned AFTER material construction -- the route this kit reserves for printed graphics -- so a tinted base would multiply through and darken the wordmark along with the field."}, "colorVariation": {"palette": ["#FFFFFF", "#408546", "#1B6FB4"], "pattern": "mottled", "amplitude": 0.05, "heightCorrelation": 0.0}, "roughness": {"base": 0.5, "variation": 0.05, "map": "none", "localResponse": "Scalar; this surface has no cavity or edge-wear response worth a channel at prop distance."}, "metalness": {"base": 0.0, "variation": 0.0}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "No AO channel; the shell's own cast shadows carry the occlusion read."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#4A4640"}, "localOverrides": [], "shaderNotes": ["The green band, the blue line and the wordmark are ONE canvas on this material. As geometry they would have cost three materials and three geometries on a class whose binding axes are exactly those two."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["material-crops/fascia-green.png, 530 px, spread 9.4: a single flat surface, measured #29562d on the SHADED right wing. The authored green #408546 is that value lifted 1.55x toward full key, and the lift is stated rather than hidden.", "material-crops/fascia-white.png, 636 px, spread 21.3, same shaded wing, measured #8F939A and lifted to the field white for the same reason.", "material-crops/fascia-blue.png is REFUSED: spread 110.6 over a 5 px band. No placement on this plate isolates a 6-pixel stripe, so the blue is AUTHORED from the brand and labelled as authored.", "Printed vinyl has no relief at prop distance; the identity is the flat field plus the wordmark, and the wordmark is a canvas assigned after construction, which the textureless declaration does not affect."]}},
    options
  );
  materialMap["glass-tinted"] = createSculptMaterial(
    "glass-tinted",
    {"id": "glass-tinted", "name": "Tinted shopfront glazing", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#7E8A8A", "color": "#7E8A8A", "albedo": {"dominant": "#7E8A8A", "secondary": ["#6E7A7A"], "samplingNotes": "AUTHORED, not sampled, and deliberately. The crop measures a mid neutral, but every one of those pixels is the shop INTERIOR -- shelving, a magazine rack, a ceiling -- seen through the pane. Sampling it would reproduce a photograph of a room this model does not contain."}, "colorVariation": {"palette": ["#7E8A8A", "#6E7A7A"], "pattern": "mottled", "amplitude": 0.05, "heightCorrelation": 0.0}, "roughness": {"base": 0.1, "variation": 0.05, "map": "none", "localResponse": "Scalar; this surface has no cavity or edge-wear response worth a channel at prop distance."}, "metalness": {"base": 0.05, "variation": 0.0}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "No AO channel; the shell's own cast shadows carry the occlusion read."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#4A4640"}, "localOverrides": [], "shaderNotes": ["metalness 0.05: the harness has no environment map and a metallic pane with nothing to reflect renders black."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["material-crops/glazing.png measures spread 158.2, and inspection of the crop shows why: it is shelving and a lit ceiling, not a surface. REFUSED by rule, not by spread.", "Glass identity is the specular lobe and the tint, both carried by scalars. A generated texture set would force color to white and roughness to 1 and destroy precisely the two properties that make it read as glass."]}, "opacity": 0.92, "transparent": true, "opacityNote": "0.92 rather than a truly transparent pane. This prop is an exterior shell with NO interior geometry, so a transparent pane would show the inside of the far wall or the backdrop and read as a hole punched in the facade. At 0.92 it reads as glass with a hint of depth and nothing behind it is legible."},
    options
  );
  materialMap["door-grey"] = createSculptMaterial(
    "door-grey",
    {"id": "door-grey", "name": "Painted steel service door", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#3B3F42", "color": "#3B3F42", "albedo": {"dominant": "#3B3F42", "secondary": ["#33373A"], "samplingNotes": "Measured on a 29x102 px crop of the flank door. Spread 35 across a flat leaf."}, "colorVariation": {"palette": ["#3B3F42", "#33373A"], "pattern": "mottled", "amplitude": 0.05, "heightCorrelation": 0.0}, "roughness": {"base": 0.7, "variation": 0.05, "map": "none", "localResponse": "Scalar; this surface has no cavity or edge-wear response worth a channel at prop distance."}, "metalness": {"base": 0.0, "variation": 0.0}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "No AO channel; the shell's own cast shadows carry the occlusion read."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#4A4640"}, "localOverrides": [], "shaderNotes": ["MeshStandardMaterial, metalness 0. Flat paint on steel."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["material-crops/door.png, 2,958 px, spread 35.0: one flat painted panel.", "The louvre at its foot is under a texel at prop distance and is not modelled or textured."]}},
    options
  );
  materialMap["galvanised"] = createSculptMaterial(
    "galvanised",
    {"id": "galvanised", "name": "Galvanised condenser casing", "type": "standard", "shaderModel": "MeshStandardMaterial / PBR approximation", "baseColor": "#9AA0A4", "color": "#9AA0A4", "albedo": {"dominant": "#9AA0A4", "secondary": ["#868C90"], "samplingNotes": "Authored from the rooftop plant, which sits at the top of the plate at a shallow angle where no crop of usable area is available. Recorded as authored."}, "colorVariation": {"palette": ["#9AA0A4", "#868C90"], "pattern": "mottled", "amplitude": 0.05, "heightCorrelation": 0.0}, "roughness": {"base": 0.55, "variation": 0.05, "map": "none", "localResponse": "Scalar; this surface has no cavity or edge-wear response worth a channel at prop distance."}, "metalness": {"base": 0.25, "variation": 0.0}, "ambientOcclusion": {"cavityStrength": 0.0, "contactShadowBias": 0.0, "notes": "No AO channel; the shell's own cast shadows carry the occlusion read."}, "wear": {"edgeWear": 0.0, "scratches": [], "chips": []}, "dirt": {"amount": 0.0, "cavityBias": 0.0, "color": "#4A4640"}, "localOverrides": [], "shaderNotes": ["metalness 0.25 for the same environment-map reason as the other metals here."], "notes": "Replace with image-derived color, roughness, noise, and edge-wear notes.", "textureless": {"declared": true, "evidence": ["No crop of sufficient area exists: the plant occupies roughly 40x25 px at a grazing angle, below the reference-admission floor, so no measurement is claimed for it.", "Spangle is a centimetre-scale crystal pattern; on a 2.4 m condenser bank seen at prop distance it is under one texel and reads as the value alone."]}},
    options
  );

  const nodes: Record<string, THREE.Object3D> = { root };
  const meshes: Record<string, THREE.Mesh> = {};
  const sockets: Record<string, THREE.Object3D> = {};
  const colliders: Record<string, unknown> = {};
  const destructionGroups: Record<string, THREE.Object3D[]> = {};

  const endpoint_building_shell_0 = makeAttachmentEndpoint(null);

  {
    const tex = buildMarkingTexture({"materialId":"fascia","width":8,"depth":0.9199999999999999,"px":2048,"base":"#F2F3F3","bands":[{"x0":-4,"x1":4,"z0":0.15999999999999998,"z1":0.45999999999999996,"color":"#408546"},{"x0":-4,"x1":4,"z0":-0.36,"z1":-0.2899999999999999,"color":"#1B6FB4"},{"x0":-4,"x1":4,"z0":-0.45999999999999996,"z1":-0.42,"color":"#C9CCCE"},{"x0":-2.3,"x1":-1.85,"z0":-0.02,"z1":0.13,"color":"#408546"},{"x0":-2.3,"x1":-1.85,"z0":-0.17,"z1":-0.04,"color":"#1B6FB4"}],"texts":[{"text":"FamilyMart","x":-0.35,"z":-0.03,"size":0.4,"color":"#1B6FB4","weight":700,"align":"left"}],"flipY":true});
    const target = materialMap["fascia"] as THREE.MeshStandardMaterial | undefined;
    if (tex && target) {
      // color stays white: the surface colour lives in the map, and multiplying a tinted
      // base through it would darken the light marks along with the dark ground.
      target.map = tex;
      target.color = new THREE.Color(0xffffff);
      target.needsUpdate = true;
    }
  }
  const node_building_shell_0 = new THREE.Group();
  node_building_shell_0.name = "Render wall shell__pivot";
  node_building_shell_0.scale.set(1, 1, 1);
  if (endpoint_building_shell_0) {
    node_building_shell_0.position.copy(endpoint_building_shell_0.start);
    node_building_shell_0.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_building_shell_0.position.set(0.0, 1.85, 0.0);
    node_building_shell_0.rotation.set(0.0, 0.0, 0.0);
  }
  node_building_shell_0.userData.sculptComponent = {"id": "building-shell", "name": "Render wall shell", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.9, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A rigid box with flat faces and no interior: a prop kit is only ever looked at from outside, so an interior would cost draw calls, geometries and VRAM for something nobody sees. Solid rather than a wall ring for the same reason.", "geometryDescriptor": {"topologyIntent": "low-poly blockout with bevel-ready edges", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": null, "attachment": null, "dimensions": {"width": 7.8, "height": 3.7, "depth": 6.8, "units": "meters", "confidence": 0.9}, "transform": {"position": [0, 1.85, 0], "rotation": [0, 0, 0], "scale": [7.8, 3.7, 6.8]}, "actionProfile": {"animationRole": "root", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "The ONLY pivot on this prop. A shop building is static level geometry: no part turns on an axis, so a second pivot would promise a mechanism that does not exist. The roller shutter and the doors are modelled closed and do not open."}, "transformChannels": {"translate": true, "rotate": true, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 2.3, 0], "scale": [8.0, 4.6, 7.0], "isTrigger": false, "notes": "The asset's declared collider: one box over the whole envelope. A building is a solid obstacle; nothing about it needs a finer proxy."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "render"}}, "material": "render", "materialLayers": ["render"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "wall-mass", "description": "The building mass, 7.8 x 3.7 x 6.8 m, inset inside the declared 8.0 x 4.6 x 7.0 m envelope so the parapet and fascia can stand proud of it without overhanging the footprint.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#6D6F74", "secondary": ["#6D6F74"], "zones": [{"id": "wall", "albedo": "#6D6F74", "note": "flat render, the flattest read on the plate"}, {"id": "wall-shadowed", "albedo": "#595b5f", "note": "the flank away from the key"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(109, 111, 116, 1.0)", "secondaryAlbedo": "rgba(109, 111, 116, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.8}};
  node_building_shell_0.userData.actionProfile = {"animationRole": "root", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "The ONLY pivot on this prop. A shop building is static level geometry: no part turns on an axis, so a second pivot would promise a mechanism that does not exist. The roller shutter and the doors are modelled closed and do not open."}, "transformChannels": {"translate": true, "rotate": true, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 2.3, 0], "scale": [8.0, 4.6, 7.0], "isTrigger": false, "notes": "The asset's declared collider: one box over the whole envelope. A building is a solid obstacle; nothing about it needs a finer proxy."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "render"}};
  (nodes["root"] ?? root).add(node_building_shell_0);
  nodes["building-shell"] = node_building_shell_0;
  const mesh_building_shell_0Geometry = endpoint_building_shell_0
    ? new THREE.CylinderGeometry(endpoint_building_shell_0.endRadius, endpoint_building_shell_0.baseRadius, endpoint_building_shell_0.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_building_shell_0) {
    mesh_building_shell_0Geometry.scale(7.8, 3.7, 6.8);
  }
  const mesh_building_shell_0 = new THREE.Mesh(
    mesh_building_shell_0Geometry,
    materialMap["render"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_building_shell_0.name = "Render wall shell";
  if (endpoint_building_shell_0) {
    mesh_building_shell_0.position.copy(endpoint_building_shell_0.midpoint);
    mesh_building_shell_0.quaternion.copy(endpoint_building_shell_0.quaternion);
  }
  mesh_building_shell_0.castShadow = options.castShadow ?? true;
  mesh_building_shell_0.receiveShadow = options.receiveShadow ?? true;
  mesh_building_shell_0.userData.sculptComponent = {"id": "building-shell", "name": "Render wall shell", "level": "macro", "role": "body", "importance": 1.0, "confidence": 0.9, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A rigid box with flat faces and no interior: a prop kit is only ever looked at from outside, so an interior would cost draw calls, geometries and VRAM for something nobody sees. Solid rather than a wall ring for the same reason.", "geometryDescriptor": {"topologyIntent": "low-poly blockout with bevel-ready edges", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": null, "attachment": null, "dimensions": {"width": 7.8, "height": 3.7, "depth": 6.8, "units": "meters", "confidence": 0.9}, "transform": {"position": [0, 1.85, 0], "rotation": [0, 0, 0], "scale": [7.8, 3.7, 6.8]}, "actionProfile": {"animationRole": "root", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "The ONLY pivot on this prop. A shop building is static level geometry: no part turns on an axis, so a second pivot would promise a mechanism that does not exist. The roller shutter and the doors are modelled closed and do not open."}, "transformChannels": {"translate": true, "rotate": true, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": {"type": "box", "offset": [0, 2.3, 0], "scale": [8.0, 4.6, 7.0], "isTrigger": false, "notes": "The asset's declared collider: one box over the whole envelope. A building is a solid obstacle; nothing about it needs a finer proxy."}, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "render"}}, "material": "render", "materialLayers": ["render"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "wall-mass", "description": "The building mass, 7.8 x 3.7 x 6.8 m, inset inside the declared 8.0 x 4.6 x 7.0 m envelope so the parapet and fascia can stand proud of it without overhanging the footprint.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#6D6F74", "secondary": ["#6D6F74"], "zones": [{"id": "wall", "albedo": "#6D6F74", "note": "flat render, the flattest read on the plate"}, {"id": "wall-shadowed", "albedo": "#595b5f", "note": "the flank away from the key"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(109, 111, 116, 1.0)", "secondaryAlbedo": "rgba(109, 111, 116, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.8}};
  node_building_shell_0.add(mesh_building_shell_0);
  meshes["building-shell"] = mesh_building_shell_0;
  colliders["building-shell"] = {"type": "box", "offset": [0, 2.3, 0], "scale": [8.0, 4.6, 7.0], "isTrigger": false, "notes": "The asset's declared collider: one box over the whole envelope. A building is a solid obstacle; nothing about it needs a finer proxy."};

  const endpoint_roof_deck_1 = makeAttachmentEndpoint(null);
  const node_roof_deck_1 = new THREE.Group();
  node_roof_deck_1.name = "Flat roof deck__pivot";
  node_roof_deck_1.scale.set(1, 1, 1);
  if (endpoint_roof_deck_1) {
    node_roof_deck_1.position.copy(endpoint_roof_deck_1.start);
    node_roof_deck_1.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_roof_deck_1.position.set(0.0, 3.75, 0.0);
    node_roof_deck_1.rotation.set(0.0, 0.0, 0.0);
  }
  node_roof_deck_1.userData.sculptComponent = {"id": "roof-deck", "name": "Flat roof deck", "level": "meso", "role": "surface", "importance": 0.4, "confidence": 0.6, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A flat slab. It exists because the parapet stands above it -- without a deck the parapet ring would frame a hole straight through the building.", "geometryDescriptor": {"topologyIntent": "low-poly blockout with bevel-ready edges", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": null, "attachment": null, "dimensions": {"width": 7.359999999999999, "height": 0.14, "depth": 6.359999999999999, "units": "meters", "confidence": 0.6}, "transform": {"position": [0, 3.75, 0], "rotation": [0, 0, 0], "scale": [7.359999999999999, 0.14, 6.359999999999999]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "roof-grey"}}, "material": "roof-grey", "materialLayers": ["roof-grey"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "deck", "description": "Spans y=3.68 to 3.8200000000000003, so it EMBEDS 20 mm into the wall top rather than resting on it. Flush, its underside and the parapet's underside both sat at y=3.7 facing down; their footprints are complementary so nothing actually overlaps, but an envelope test cannot see that and check-coplanar reported a 46.8 m2 same-facing pair. Embedding is also the honest contact type -- a deck is laid INTO its upstand.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#7C8288", "secondary": ["#7C8288"], "zones": [{"id": "deck", "albedo": "#7C8288", "note": "weathered flat-roof membrane"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(124, 130, 136, 1.0)", "secondaryAlbedo": "rgba(124, 130, 136, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.8}};
  node_roof_deck_1.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "roof-grey"}};
  (nodes["root"] ?? root).add(node_roof_deck_1);
  nodes["roof-deck"] = node_roof_deck_1;
  const mesh_roof_deck_1Geometry = endpoint_roof_deck_1
    ? new THREE.CylinderGeometry(endpoint_roof_deck_1.endRadius, endpoint_roof_deck_1.baseRadius, endpoint_roof_deck_1.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_roof_deck_1) {
    mesh_roof_deck_1Geometry.scale(7.359999999999999, 0.14, 6.359999999999999);
  }
  const mesh_roof_deck_1 = new THREE.Mesh(
    mesh_roof_deck_1Geometry,
    materialMap["roof-grey"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_roof_deck_1.name = "Flat roof deck";
  if (endpoint_roof_deck_1) {
    mesh_roof_deck_1.position.copy(endpoint_roof_deck_1.midpoint);
    mesh_roof_deck_1.quaternion.copy(endpoint_roof_deck_1.quaternion);
  }
  mesh_roof_deck_1.castShadow = options.castShadow ?? true;
  mesh_roof_deck_1.receiveShadow = options.receiveShadow ?? true;
  mesh_roof_deck_1.userData.sculptComponent = {"id": "roof-deck", "name": "Flat roof deck", "level": "meso", "role": "surface", "importance": 0.4, "confidence": 0.6, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A flat slab. It exists because the parapet stands above it -- without a deck the parapet ring would frame a hole straight through the building.", "geometryDescriptor": {"topologyIntent": "low-poly blockout with bevel-ready edges", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": null, "attachment": null, "dimensions": {"width": 7.359999999999999, "height": 0.14, "depth": 6.359999999999999, "units": "meters", "confidence": 0.6}, "transform": {"position": [0, 3.75, 0], "rotation": [0, 0, 0], "scale": [7.359999999999999, 0.14, 6.359999999999999]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "roof-grey"}}, "material": "roof-grey", "materialLayers": ["roof-grey"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "deck", "description": "Spans y=3.68 to 3.8200000000000003, so it EMBEDS 20 mm into the wall top rather than resting on it. Flush, its underside and the parapet's underside both sat at y=3.7 facing down; their footprints are complementary so nothing actually overlaps, but an envelope test cannot see that and check-coplanar reported a 46.8 m2 same-facing pair. Embedding is also the honest contact type -- a deck is laid INTO its upstand.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#7C8288", "secondary": ["#7C8288"], "zones": [{"id": "deck", "albedo": "#7C8288", "note": "weathered flat-roof membrane"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(124, 130, 136, 1.0)", "secondaryAlbedo": "rgba(124, 130, 136, 1.0)", "materialClass": "stone", "materialClassConfidence": 0.8}};
  node_roof_deck_1.add(mesh_roof_deck_1);
  meshes["roof-deck"] = mesh_roof_deck_1;
  colliders["roof-deck"] = null;

  const endpoint_parapet_2 = makeAttachmentEndpoint(null);
  const node_parapet_2 = new THREE.Group();
  node_parapet_2.name = "Parapet upstand__pivot";
  node_parapet_2.scale.set(1, 1, 1);
  if (endpoint_parapet_2) {
    node_parapet_2.position.copy(endpoint_parapet_2.start);
    node_parapet_2.rotation.set(1.5707963267948966, 0.0, 0.0);
  } else {
    node_parapet_2.position.set(0.0, 4.3, 0.0);
    node_parapet_2.rotation.set(1.5707963267948966, 0.0, 0.0);
  }
  node_parapet_2.userData.sculptComponent = {"id": "parapet", "name": "Parapet upstand", "level": "meso", "role": "body", "importance": 0.7, "confidence": 0.8, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "An extruded RING -- the roof outline with the deck opening as a hole -- so the upstand's inner and outer faces come from one geometry and cannot drift apart. This is what makes the building read as a flat-roofed shop rather than an open-topped box.", "geometryDescriptor": {"topologyIntent": "roof outline extruded with the deck opening as a hole", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "profile2D": {"points": [[-3.9, -3.4], [3.9, -3.4], [3.9, 3.4], [-3.9, 3.4]], "depth": 0.5999999999999996, "holes": [[[-3.6799999999999997, -3.1799999999999997], [3.6799999999999997, -3.1799999999999997], [3.6799999999999997, 3.1799999999999997], [-3.6799999999999997, 3.1799999999999997]]]}}, "parent": null, "attachment": null, "dimensions": {"width": 7.8, "height": 0.5999999999999996, "depth": 6.8, "units": "meters", "confidence": 0.8}, "transform": {"position": [0, 4.3, 0], "rotation": [1.5707963267948966, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "white-trim"}}, "material": "white-trim", "materialLayers": ["white-trim"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "coping", "description": "Upstand from y=3.7 to y=4.3, 0.22 m thick, capping the walls. Reads a clear step lighter than the render below it, which is what separates the two planes.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#D4D6D7", "secondary": ["#D4D6D7"], "zones": [{"id": "coping", "albedo": "#D4D6D7", "note": "in full key, no lift needed"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(212, 214, 215, 1.0)", "secondaryAlbedo": "rgba(212, 214, 215, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.8}};
  node_parapet_2.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "white-trim"}};
  (nodes["root"] ?? root).add(node_parapet_2);
  nodes["parapet"] = node_parapet_2;
  const mesh_parapet_2Geometry = endpoint_parapet_2
    ? new THREE.CylinderGeometry(endpoint_parapet_2.endRadius, endpoint_parapet_2.baseRadius, endpoint_parapet_2.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-3.9, -3.4], [3.9, -3.4], [3.9, 3.4], [-3.9, 3.4]], "depth": 0.5999999999999996, "holes": [[[-3.6799999999999997, -3.1799999999999997], [3.6799999999999997, -3.1799999999999997], [3.6799999999999997, 3.1799999999999997], [-3.6799999999999997, 3.1799999999999997]]]});
  if (!endpoint_parapet_2) {
    mesh_parapet_2Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_parapet_2 = new THREE.Mesh(
    mesh_parapet_2Geometry,
    materialMap["white-trim"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_parapet_2.name = "Parapet upstand";
  if (endpoint_parapet_2) {
    mesh_parapet_2.position.copy(endpoint_parapet_2.midpoint);
    mesh_parapet_2.quaternion.copy(endpoint_parapet_2.quaternion);
  }
  mesh_parapet_2.castShadow = options.castShadow ?? true;
  mesh_parapet_2.receiveShadow = options.receiveShadow ?? true;
  mesh_parapet_2.userData.sculptComponent = {"id": "parapet", "name": "Parapet upstand", "level": "meso", "role": "body", "importance": 0.7, "confidence": 0.8, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "An extruded RING -- the roof outline with the deck opening as a hole -- so the upstand's inner and outer faces come from one geometry and cannot drift apart. This is what makes the building read as a flat-roofed shop rather than an open-topped box.", "geometryDescriptor": {"topologyIntent": "roof outline extruded with the deck opening as a hole", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "profile2D": {"points": [[-3.9, -3.4], [3.9, -3.4], [3.9, 3.4], [-3.9, 3.4]], "depth": 0.5999999999999996, "holes": [[[-3.6799999999999997, -3.1799999999999997], [3.6799999999999997, -3.1799999999999997], [3.6799999999999997, 3.1799999999999997], [-3.6799999999999997, 3.1799999999999997]]]}}, "parent": null, "attachment": null, "dimensions": {"width": 7.8, "height": 0.5999999999999996, "depth": 6.8, "units": "meters", "confidence": 0.8}, "transform": {"position": [0, 4.3, 0], "rotation": [1.5707963267948966, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "white-trim"}}, "material": "white-trim", "materialLayers": ["white-trim"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "coping", "description": "Upstand from y=3.7 to y=4.3, 0.22 m thick, capping the walls. Reads a clear step lighter than the render below it, which is what separates the two planes.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#D4D6D7", "secondary": ["#D4D6D7"], "zones": [{"id": "coping", "albedo": "#D4D6D7", "note": "in full key, no lift needed"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(212, 214, 215, 1.0)", "secondaryAlbedo": "rgba(212, 214, 215, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.8}};
  node_parapet_2.add(mesh_parapet_2);
  meshes["parapet"] = mesh_parapet_2;
  colliders["parapet"] = null;

  const endpoint_fascia_band_3 = makeAttachmentEndpoint(null);
  const node_fascia_band_3 = new THREE.Group();
  node_fascia_band_3.name = "Brand fascia band__pivot";
  node_fascia_band_3.scale.set(1, 1, 1);
  if (endpoint_fascia_band_3) {
    node_fascia_band_3.position.copy(endpoint_fascia_band_3.start);
    node_fascia_band_3.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_fascia_band_3.position.set(0.0, 3.4, 3.51);
    node_fascia_band_3.rotation.set(0.0, 0.0, 0.0);
  }
  node_fascia_band_3.userData.sculptComponent = {"id": "fascia-band", "name": "Brand fascia band", "level": "meso", "role": "signage", "importance": 0.95, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A shallow sign tray hung on the front. Its stripes and wordmark are PRINTED GRAPHICS carried in this material's canvas albedo -- paint has no thickness, and as proud panels they would be several coplanar surfaces over one face, plus materials and geometries on the two axes this class is tightest on.", "geometryDescriptor": {"topologyIntent": "low-poly blockout with bevel-ready edges", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": null, "attachment": null, "dimensions": {"width": 8.0, "height": 0.9199999999999999, "depth": 0.22, "units": "meters", "confidence": 0.85}, "transform": {"position": [0, 3.4, 3.51], "rotation": [0, 0, 0], "scale": [8.0, 0.9199999999999999, 0.22]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "fascia"}}, "material": "fascia", "materialLayers": ["fascia"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "brand-band", "description": "White field with a green band along the top and a blue line near the bottom, carrying the wordmark. This is the single most identity-defining surface on the prop: the shell is generic and the fascia is what names it.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#FFFFFF", "secondary": ["#FFFFFF"], "zones": [{"id": "field", "albedo": "#FFFFFF", "note": "white by design; the colour lives in the canvas"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(255, 255, 255, 1.0)", "secondaryAlbedo": "rgba(255, 255, 255, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.8}};
  node_fascia_band_3.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "fascia"}};
  (nodes["root"] ?? root).add(node_fascia_band_3);
  nodes["fascia-band"] = node_fascia_band_3;
  const mesh_fascia_band_3Geometry = endpoint_fascia_band_3
    ? new THREE.CylinderGeometry(endpoint_fascia_band_3.endRadius, endpoint_fascia_band_3.baseRadius, endpoint_fascia_band_3.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_fascia_band_3) {
    mesh_fascia_band_3Geometry.scale(8.0, 0.9199999999999999, 0.22);
  }
  const mesh_fascia_band_3 = new THREE.Mesh(
    mesh_fascia_band_3Geometry,
    materialMap["fascia"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_fascia_band_3.name = "Brand fascia band";
  if (endpoint_fascia_band_3) {
    mesh_fascia_band_3.position.copy(endpoint_fascia_band_3.midpoint);
    mesh_fascia_band_3.quaternion.copy(endpoint_fascia_band_3.quaternion);
  }
  mesh_fascia_band_3.castShadow = options.castShadow ?? true;
  mesh_fascia_band_3.receiveShadow = options.receiveShadow ?? true;
  mesh_fascia_band_3.userData.sculptComponent = {"id": "fascia-band", "name": "Brand fascia band", "level": "meso", "role": "signage", "importance": 0.95, "confidence": 0.85, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A shallow sign tray hung on the front. Its stripes and wordmark are PRINTED GRAPHICS carried in this material's canvas albedo -- paint has no thickness, and as proud panels they would be several coplanar surfaces over one face, plus materials and geometries on the two axes this class is tightest on.", "geometryDescriptor": {"topologyIntent": "low-poly blockout with bevel-ready edges", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": null, "attachment": null, "dimensions": {"width": 8.0, "height": 0.9199999999999999, "depth": 0.22, "units": "meters", "confidence": 0.85}, "transform": {"position": [0, 3.4, 3.51], "rotation": [0, 0, 0], "scale": [8.0, 0.9199999999999999, 0.22]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "fascia"}}, "material": "fascia", "materialLayers": ["fascia"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "brand-band", "description": "White field with a green band along the top and a blue line near the bottom, carrying the wordmark. This is the single most identity-defining surface on the prop: the shell is generic and the fascia is what names it.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#FFFFFF", "secondary": ["#FFFFFF"], "zones": [{"id": "field", "albedo": "#FFFFFF", "note": "white by design; the colour lives in the canvas"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(255, 255, 255, 1.0)", "secondaryAlbedo": "rgba(255, 255, 255, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.8}};
  node_fascia_band_3.add(mesh_fascia_band_3);
  meshes["fascia-band"] = mesh_fascia_band_3;
  colliders["fascia-band"] = null;

  const endpoint_shopfront_glazing_4 = makeAttachmentEndpoint(null);
  const node_shopfront_glazing_4 = new THREE.Group();
  node_shopfront_glazing_4.name = "Shopfront glazing__pivot";
  node_shopfront_glazing_4.scale.set(1, 1, 1);
  if (endpoint_shopfront_glazing_4) {
    node_shopfront_glazing_4.position.copy(endpoint_shopfront_glazing_4.start);
    node_shopfront_glazing_4.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_shopfront_glazing_4.position.set(0.0, 1.53, 3.42);
    node_shopfront_glazing_4.rotation.set(0.0, 0.0, 0.0);
  }
  node_shopfront_glazing_4.userData.sculptComponent = {"id": "shopfront-glazing", "name": "Shopfront glazing", "level": "meso", "role": "surface", "importance": 0.8, "confidence": 0.75, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A tinted, mostly opaque pane -- NOT a window. This prop is an exterior shell with nothing behind it, so a transparent pane would show the inside of the far wall and read as a hole punched in the facade.", "geometryDescriptor": {"topologyIntent": "low-poly blockout with bevel-ready edges", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": null, "attachment": null, "dimensions": {"width": 6.9, "height": 2.62, "depth": 0.04, "units": "meters", "confidence": 0.75}, "transform": {"position": [0, 1.53, 3.42], "rotation": [0, 0, 0], "scale": [6.9, 2.62, 0.04]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "glass-tinted"}}, "material": "glass-tinted", "materialLayers": ["glass-tinted"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "pane", "description": "Stands 0.02 m PROUD of the wall face at z=3.4. Flush would be a coplanar co-facing pair over 18 m2 of facade -- the exact defect the 7-Eleven shipped eight of.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#7E8A8A", "secondary": ["#7E8A8A"], "zones": [{"id": "pane", "albedo": "#7E8A8A", "note": "authored tint, not sampled"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(126, 138, 138, 1.0)", "secondaryAlbedo": "rgba(126, 138, 138, 1.0)", "materialClass": "glass", "materialClassConfidence": 0.8}};
  node_shopfront_glazing_4.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "glass-tinted"}};
  (nodes["root"] ?? root).add(node_shopfront_glazing_4);
  nodes["shopfront-glazing"] = node_shopfront_glazing_4;
  const mesh_shopfront_glazing_4Geometry = endpoint_shopfront_glazing_4
    ? new THREE.CylinderGeometry(endpoint_shopfront_glazing_4.endRadius, endpoint_shopfront_glazing_4.baseRadius, endpoint_shopfront_glazing_4.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_shopfront_glazing_4) {
    mesh_shopfront_glazing_4Geometry.scale(6.9, 2.62, 0.04);
  }
  const mesh_shopfront_glazing_4 = new THREE.Mesh(
    mesh_shopfront_glazing_4Geometry,
    materialMap["glass-tinted"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_shopfront_glazing_4.name = "Shopfront glazing";
  if (endpoint_shopfront_glazing_4) {
    mesh_shopfront_glazing_4.position.copy(endpoint_shopfront_glazing_4.midpoint);
    mesh_shopfront_glazing_4.quaternion.copy(endpoint_shopfront_glazing_4.quaternion);
  }
  mesh_shopfront_glazing_4.castShadow = options.castShadow ?? true;
  mesh_shopfront_glazing_4.receiveShadow = options.receiveShadow ?? true;
  mesh_shopfront_glazing_4.userData.sculptComponent = {"id": "shopfront-glazing", "name": "Shopfront glazing", "level": "meso", "role": "surface", "importance": 0.8, "confidence": 0.75, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A tinted, mostly opaque pane -- NOT a window. This prop is an exterior shell with nothing behind it, so a transparent pane would show the inside of the far wall and read as a hole punched in the facade.", "geometryDescriptor": {"topologyIntent": "low-poly blockout with bevel-ready edges", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": null, "attachment": null, "dimensions": {"width": 6.9, "height": 2.62, "depth": 0.04, "units": "meters", "confidence": 0.75}, "transform": {"position": [0, 1.53, 3.42], "rotation": [0, 0, 0], "scale": [6.9, 2.62, 0.04]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "glass-tinted"}}, "material": "glass-tinted", "materialLayers": ["glass-tinted"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "pane", "description": "Stands 0.02 m PROUD of the wall face at z=3.4. Flush would be a coplanar co-facing pair over 18 m2 of facade -- the exact defect the 7-Eleven shipped eight of.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#7E8A8A", "secondary": ["#7E8A8A"], "zones": [{"id": "pane", "albedo": "#7E8A8A", "note": "authored tint, not sampled"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(126, 138, 138, 1.0)", "secondaryAlbedo": "rgba(126, 138, 138, 1.0)", "materialClass": "glass", "materialClassConfidence": 0.8}};
  node_shopfront_glazing_4.add(mesh_shopfront_glazing_4);
  meshes["shopfront-glazing"] = mesh_shopfront_glazing_4;
  colliders["shopfront-glazing"] = null;

  const endpoint_shopfront_framing_5 = makeAttachmentEndpoint(null);
  const node_shopfront_framing_5 = new THREE.Group();
  node_shopfront_framing_5.name = "Shopfront framing__pivot";
  node_shopfront_framing_5.scale.set(1, 1, 1);
  if (endpoint_shopfront_framing_5) {
    node_shopfront_framing_5.position.copy(endpoint_shopfront_framing_5.start);
    node_shopfront_framing_5.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_shopfront_framing_5.position.set(0.0, 0.12, 3.4499999999999997);
    node_shopfront_framing_5.rotation.set(0.0, 0.0, 0.0);
  }
  node_shopfront_framing_5.userData.sculptComponent = {"id": "shopfront-framing", "name": "Shopfront framing", "level": "meso", "role": "body", "importance": 0.7, "confidence": 0.7, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "One extruded frame with the window openings as holes, rather than a mullion per bay: a bay per component would be five draw calls and five geometries for a part that is one welded assembly in life. It OVERLAPS the glazing it frames rather than meeting its reveal edge, which is the kit's standing rule.", "geometryDescriptor": {"topologyIntent": "one frame plate with the window bays as holes", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "profile2D": {"points": [[-3.55, 0.0], [3.55, 0.0], [3.55, 2.82], [-3.55, 2.82]], "depth": 0.06, "holes": [[[-3.42, 0.1], [-2.112, 0.1], [-2.112, 2.72], [-3.42, 2.72]], [[-2.037, 0.1], [-0.7289999999999999, 0.1], [-0.7289999999999999, 2.72], [-2.037, 2.72]], [[-0.6539999999999999, 0.1], [0.6540000000000001, 0.1], [0.6540000000000001, 2.72], [-0.6539999999999999, 2.72]], [[0.7290000000000001, 0.1], [2.037, 0.1], [2.037, 2.72], [0.7290000000000001, 2.72]], [[2.112, 0.1], [3.42, 0.1], [3.42, 2.72], [2.112, 2.72]]]}}, "parent": null, "attachment": null, "dimensions": {"width": 7.1, "height": 2.82, "depth": 0.06, "units": "meters", "confidence": 0.7}, "transform": {"position": [0, 0.12, 3.4499999999999997], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "white-trim"}}, "material": "white-trim", "materialLayers": ["white-trim"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "mullions", "description": "Perimeter frame plus four intermediate mullions and one transom, giving five bays. The openings are 0.05 m SMALLER than the glazing behind them on every side, so the frame laps the pane.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#D4D6D7", "secondary": ["#D4D6D7"], "zones": [{"id": "frame", "albedo": "#D4D6D7", "note": "lit figure only; the crop straddles glazing"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(212, 214, 215, 1.0)", "secondaryAlbedo": "rgba(212, 214, 215, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.8}};
  node_shopfront_framing_5.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "white-trim"}};
  (nodes["root"] ?? root).add(node_shopfront_framing_5);
  nodes["shopfront-framing"] = node_shopfront_framing_5;
  const mesh_shopfront_framing_5Geometry = endpoint_shopfront_framing_5
    ? new THREE.CylinderGeometry(endpoint_shopfront_framing_5.endRadius, endpoint_shopfront_framing_5.baseRadius, endpoint_shopfront_framing_5.length, 16, 6)
    : buildExtrudeGeometry({"points": [[-3.55, 0.0], [3.55, 0.0], [3.55, 2.82], [-3.55, 2.82]], "depth": 0.06, "holes": [[[-3.42, 0.1], [-2.112, 0.1], [-2.112, 2.72], [-3.42, 2.72]], [[-2.037, 0.1], [-0.7289999999999999, 0.1], [-0.7289999999999999, 2.72], [-2.037, 2.72]], [[-0.6539999999999999, 0.1], [0.6540000000000001, 0.1], [0.6540000000000001, 2.72], [-0.6539999999999999, 2.72]], [[0.7290000000000001, 0.1], [2.037, 0.1], [2.037, 2.72], [0.7290000000000001, 2.72]], [[2.112, 0.1], [3.42, 0.1], [3.42, 2.72], [2.112, 2.72]]]});
  if (!endpoint_shopfront_framing_5) {
    mesh_shopfront_framing_5Geometry.scale(1.0, 1.0, 1.0);
  }
  const mesh_shopfront_framing_5 = new THREE.Mesh(
    mesh_shopfront_framing_5Geometry,
    materialMap["white-trim"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_shopfront_framing_5.name = "Shopfront framing";
  if (endpoint_shopfront_framing_5) {
    mesh_shopfront_framing_5.position.copy(endpoint_shopfront_framing_5.midpoint);
    mesh_shopfront_framing_5.quaternion.copy(endpoint_shopfront_framing_5.quaternion);
  }
  mesh_shopfront_framing_5.castShadow = options.castShadow ?? true;
  mesh_shopfront_framing_5.receiveShadow = options.receiveShadow ?? true;
  mesh_shopfront_framing_5.userData.sculptComponent = {"id": "shopfront-framing", "name": "Shopfront framing", "level": "meso", "role": "body", "importance": 0.7, "confidence": 0.7, "primitive": "extrude", "topologyClass": "assembled-solid", "topologyRationale": "One extruded frame with the window openings as holes, rather than a mullion per bay: a bay per component would be five draw calls and five geometries for a part that is one welded assembly in life. It OVERLAPS the glazing it frames rather than meeting its reveal edge, which is the kit's standing rule.", "geometryDescriptor": {"topologyIntent": "one frame plate with the window bays as holes", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry", "profile2D": {"points": [[-3.55, 0.0], [3.55, 0.0], [3.55, 2.82], [-3.55, 2.82]], "depth": 0.06, "holes": [[[-3.42, 0.1], [-2.112, 0.1], [-2.112, 2.72], [-3.42, 2.72]], [[-2.037, 0.1], [-0.7289999999999999, 0.1], [-0.7289999999999999, 2.72], [-2.037, 2.72]], [[-0.6539999999999999, 0.1], [0.6540000000000001, 0.1], [0.6540000000000001, 2.72], [-0.6539999999999999, 2.72]], [[0.7290000000000001, 0.1], [2.037, 0.1], [2.037, 2.72], [0.7290000000000001, 2.72]], [[2.112, 0.1], [3.42, 0.1], [3.42, 2.72], [2.112, 2.72]]]}}, "parent": null, "attachment": null, "dimensions": {"width": 7.1, "height": 2.82, "depth": 0.06, "units": "meters", "confidence": 0.7}, "transform": {"position": [0, 0.12, 3.4499999999999997], "rotation": [0, 0, 0], "scale": [1, 1, 1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "white-trim"}}, "material": "white-trim", "materialLayers": ["white-trim"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "mullions", "description": "Perimeter frame plus four intermediate mullions and one transom, giving five bays. The openings are 0.05 m SMALLER than the glazing behind them on every side, so the frame laps the pane.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#D4D6D7", "secondary": ["#D4D6D7"], "zones": [{"id": "frame", "albedo": "#D4D6D7", "note": "lit figure only; the crop straddles glazing"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(212, 214, 215, 1.0)", "secondaryAlbedo": "rgba(212, 214, 215, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.8}};
  node_shopfront_framing_5.add(mesh_shopfront_framing_5);
  meshes["shopfront-framing"] = mesh_shopfront_framing_5;
  colliders["shopfront-framing"] = null;

  const endpoint_service_door_6 = makeAttachmentEndpoint(null);
  const node_service_door_6 = new THREE.Group();
  node_service_door_6.name = "Service door__pivot";
  node_service_door_6.scale.set(1, 1, 1);
  if (endpoint_service_door_6) {
    node_service_door_6.position.copy(endpoint_service_door_6.start);
    node_service_door_6.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_service_door_6.position.set(3.9299999999999997, 1.025, -0.6);
    node_service_door_6.rotation.set(0.0, 0.0, 0.0);
  }
  node_service_door_6.userData.sculptComponent = {"id": "service-door", "name": "Service door", "level": "meso", "role": "hardware", "importance": 0.35, "confidence": 0.6, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A flat leaf standing proud of the flank. Modelled shut and given no pivot: it is scenery, and a hinge would be a promise the prop cannot keep.", "geometryDescriptor": {"topologyIntent": "low-poly blockout with bevel-ready edges", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": null, "attachment": null, "dimensions": {"width": 0.06, "height": 2.05, "depth": 0.95, "units": "meters", "confidence": 0.6}, "transform": {"position": [3.9299999999999997, 1.025, -0.6], "rotation": [0, 0, 0], "scale": [0.06, 2.05, 0.95]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "door-grey"}}, "material": "door-grey", "materialLayers": ["door-grey"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "leaf", "description": "Stands 0.03 m proud of the flank wall so it reads as a leaf in a frame rather than as a painted rectangle.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#3B3F42", "secondary": ["#3B3F42"], "zones": [{"id": "leaf", "albedo": "#3B3F42", "note": "flat painted steel"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(59, 63, 66, 1.0)", "secondaryAlbedo": "rgba(59, 63, 66, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.8}};
  node_service_door_6.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "door-grey"}};
  (nodes["root"] ?? root).add(node_service_door_6);
  nodes["service-door"] = node_service_door_6;
  const mesh_service_door_6Geometry = endpoint_service_door_6
    ? new THREE.CylinderGeometry(endpoint_service_door_6.endRadius, endpoint_service_door_6.baseRadius, endpoint_service_door_6.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_service_door_6) {
    mesh_service_door_6Geometry.scale(0.06, 2.05, 0.95);
  }
  const mesh_service_door_6 = new THREE.Mesh(
    mesh_service_door_6Geometry,
    materialMap["door-grey"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_service_door_6.name = "Service door";
  if (endpoint_service_door_6) {
    mesh_service_door_6.position.copy(endpoint_service_door_6.midpoint);
    mesh_service_door_6.quaternion.copy(endpoint_service_door_6.quaternion);
  }
  mesh_service_door_6.castShadow = options.castShadow ?? true;
  mesh_service_door_6.receiveShadow = options.receiveShadow ?? true;
  mesh_service_door_6.userData.sculptComponent = {"id": "service-door", "name": "Service door", "level": "meso", "role": "hardware", "importance": 0.35, "confidence": 0.6, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A flat leaf standing proud of the flank. Modelled shut and given no pivot: it is scenery, and a hinge would be a promise the prop cannot keep.", "geometryDescriptor": {"topologyIntent": "low-poly blockout with bevel-ready edges", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": null, "attachment": null, "dimensions": {"width": 0.06, "height": 2.05, "depth": 0.95, "units": "meters", "confidence": 0.6}, "transform": {"position": [3.9299999999999997, 1.025, -0.6], "rotation": [0, 0, 0], "scale": [0.06, 2.05, 0.95]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "door-grey"}}, "material": "door-grey", "materialLayers": ["door-grey"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "leaf", "description": "Stands 0.03 m proud of the flank wall so it reads as a leaf in a frame rather than as a painted rectangle.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#3B3F42", "secondary": ["#3B3F42"], "zones": [{"id": "leaf", "albedo": "#3B3F42", "note": "flat painted steel"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(59, 63, 66, 1.0)", "secondaryAlbedo": "rgba(59, 63, 66, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.8}};
  node_service_door_6.add(mesh_service_door_6);
  meshes["service-door"] = mesh_service_door_6;
  colliders["service-door"] = null;

  const endpoint_rooftop_plant_7 = makeAttachmentEndpoint(null);
  const node_rooftop_plant_7 = new THREE.Group();
  node_rooftop_plant_7.name = "Rooftop condenser plant__pivot";
  node_rooftop_plant_7.scale.set(1, 1, 1);
  if (endpoint_rooftop_plant_7) {
    node_rooftop_plant_7.position.copy(endpoint_rooftop_plant_7.start);
    node_rooftop_plant_7.rotation.set(0.0, 0.0, 0.0);
  } else {
    node_rooftop_plant_7.position.set(1.1, 4.245, -1.4);
    node_rooftop_plant_7.rotation.set(0.0, 0.0, 0.0);
  }
  node_rooftop_plant_7.userData.sculptComponent = {"id": "rooftop-plant", "name": "Rooftop condenser plant", "level": "meso", "role": "hardware", "importance": 0.5, "confidence": 0.55, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A boxy condenser bank. Every Thai shop of this type carries one and it is a large part of the roofline read; one box for the bank rather than a unit each keeps it to a single draw call.", "geometryDescriptor": {"topologyIntent": "low-poly blockout with bevel-ready edges", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": null, "attachment": null, "dimensions": {"width": 2.4, "height": 0.85, "depth": 1.1, "units": "meters", "confidence": 0.55}, "transform": {"position": [1.1, 4.245, -1.4], "rotation": [0, 0, 0], "scale": [2.4, 0.85, 1.1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}}, "material": "galvanised", "materialLayers": ["galvanised"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "condenser-bank", "description": "Sits ON the roof deck, inside the parapet, so it breaks the roofline exactly as far as the plate shows and no further.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#9AA0A4", "secondary": ["#9AA0A4"], "zones": [{"id": "casing", "albedo": "#9AA0A4", "note": "galvanised steel casing"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(154, 160, 164, 1.0)", "secondaryAlbedo": "rgba(154, 160, 164, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.8}};
  node_rooftop_plant_7.userData.actionProfile = {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}};
  (nodes["root"] ?? root).add(node_rooftop_plant_7);
  nodes["rooftop-plant"] = node_rooftop_plant_7;
  const mesh_rooftop_plant_7Geometry = endpoint_rooftop_plant_7
    ? new THREE.CylinderGeometry(endpoint_rooftop_plant_7.endRadius, endpoint_rooftop_plant_7.baseRadius, endpoint_rooftop_plant_7.length, 16, 6)
    : new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);
  if (!endpoint_rooftop_plant_7) {
    mesh_rooftop_plant_7Geometry.scale(2.4, 0.85, 1.1);
  }
  const mesh_rooftop_plant_7 = new THREE.Mesh(
    mesh_rooftop_plant_7Geometry,
    materialMap["galvanised"] ?? new THREE.MeshStandardMaterial({ color: 0x888888 })
  );
  mesh_rooftop_plant_7.name = "Rooftop condenser plant";
  if (endpoint_rooftop_plant_7) {
    mesh_rooftop_plant_7.position.copy(endpoint_rooftop_plant_7.midpoint);
    mesh_rooftop_plant_7.quaternion.copy(endpoint_rooftop_plant_7.quaternion);
  }
  mesh_rooftop_plant_7.castShadow = options.castShadow ?? true;
  mesh_rooftop_plant_7.receiveShadow = options.receiveShadow ?? true;
  mesh_rooftop_plant_7.userData.sculptComponent = {"id": "rooftop-plant", "name": "Rooftop condenser plant", "level": "meso", "role": "hardware", "importance": 0.5, "confidence": 0.55, "primitive": "box", "topologyClass": "assembled-solid", "topologyRationale": "A boxy condenser bank. Every Thai shop of this type carries one and it is a large part of the roofline read; one box for the bank rather than a unit each keeps it to a single draw call.", "geometryDescriptor": {"topologyIntent": "low-poly blockout with bevel-ready edges", "edgeTreatment": {"type": "none", "bevelRadius": 0.0, "segments": 1}, "deformationStack": [], "uvStrategy": "generated procedural coordinates", "normalStrategy": "vertex normals from generated geometry"}, "parent": null, "attachment": null, "dimensions": {"width": 2.4, "height": 0.85, "depth": 1.1, "units": "meters", "confidence": 0.55}, "transform": {"position": [1.1, 4.245, -1.4], "rotation": [0, 0, 0], "scale": [2.4, 0.85, 1.1]}, "actionProfile": {"animationRole": "static", "pivot": {"mode": "custom", "localPosition": [0, 0, 0], "axis": [0, 1, 0], "confidence": 1.0, "note": "Inherited placement only; this component declares no axis."}, "transformChannels": {"translate": false, "rotate": false, "scale": false, "bend": false, "twist": false, "detach": false, "visibility": true, "materialState": false}, "sockets": [], "collider": null, "constraints": [], "destruction": {"breakable": false, "fractureGroup": null, "seamRefs": [], "detachableFragments": [], "breakImpulse": 0.0, "debrisMaterial": "galvanised"}}, "material": "galvanised", "materialLayers": ["galvanised"], "deformations": [], "joints": [], "seams": [], "localFeatures": [{"id": "condenser-bank", "description": "Sits ON the roof deck, inside the parapet, so it breaks the roofline exactly as far as the plate shows and no further.", "evidenceRefs": ["full-object"]}], "surfaceDetail": {"macroRoughness": 0.0, "microRoughness": 0.0, "bumpAmplitude": 0.0, "normalPattern": "", "displacementPattern": "", "occlusionPattern": "", "edgeWearPattern": "", "notes": ""}, "evidenceRefs": ["full-object"], "details": [], "fidelityTier": "blockout", "colorMaterialRecipe": {"dominant": "#9AA0A4", "secondary": ["#9AA0A4"], "zones": [{"id": "casing", "albedo": "#9AA0A4", "note": "galvanised steel casing"}], "finishStyle": "matte", "gradientStops": [], "dominantAlbedo": "rgba(154, 160, 164, 1.0)", "secondaryAlbedo": "rgba(154, 160, 164, 1.0)", "materialClass": "metal", "materialClassConfidence": 0.8}};
  node_rooftop_plant_7.add(mesh_rooftop_plant_7);
  meshes["rooftop-plant"] = mesh_rooftop_plant_7;
  colliders["rooftop-plant"] = null;

  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups } satisfies ProceduralModelRuntime;

  // ONE pivot: the root. This prop is static level geometry -- nothing turns on an axis and
  // nothing attaches to it -- so a named pivot per component, or any socket at all, would be
  // contract the kit has to keep for a mechanism that does not exist.
  {
    const rootPivot = new THREE.Object3D();
    rootPivot.name = "root";
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: 'root',
      pivot: { mode: 'custom', localPosition: [0, 0, 0], axis: [0, 1, 0], name: "root" },
    };
    root.add(rootPivot);

    // Colliders are plain DATA, not Object3D, so they carry no .name and would stringify as
    // [object Object]. Give each the id of the component it owns, and DROP the empty ones:
    // the generator writes an entry per component whether or not one was declared, and a
    // nameless empty proxy reads as a physics shape that exists and does nothing.
    const colliderList = Object.entries(colliders as Record<string, any>)
      .filter(([, c]) => c && typeof c === 'object' && Object.keys(c).length > 0)
      .map(([id, c]) => ({ name: id, ...(c as object) }));

    // Destruction groups DERIVED from what was actually built, never assumed empty: promotion
    // checks built against declared as an equality in both directions, so a component that
    // somehow carried a fractureGroup must show up here and fail loudly rather than be
    // quietly dropped at this boundary.
    const grouped = new Map<string, THREE.Object3D[]>();
    for (const [name, members] of Object.entries(destructionGroups as Record<string, THREE.Object3D[]>)) {
      grouped.set(name, [...members]);
    }
    for (const node of Object.values(nodes)) {
      const group = (node as any)?.userData?.actionProfile?.destruction?.fractureGroup;
      if (typeof group !== 'string' || !group) continue;
      if (!grouped.has(group)) grouped.set(group, []);
      grouped.get(group)!.push(node);
    }

    root.userData.sculptRuntime = {
      nodes: Object.keys(nodes).length,
      meshes,
      pivots: [rootPivot],
      sockets: Object.values(sockets as Record<string, THREE.Object3D>),
      colliders: colliderList,
      destructionGroups: [...grouped.entries()].map(([name, members]) => ({ name, members })),
      byId: { nodes, meshes, sockets },
    };
  }
  root.userData.lookDevTargets = {"contactShadow": {"enabled": true, "strength": 0.6, "radius": 0.4, "note": "A building needs a firm contact shadow or it floats off the tile it stands on."}, "groundShadow": {"enabled": true, "receive": true, "note": "castShadow matters more than receiveShadow here: this prop shades the street."}, "environment": {"intensity": 0.4, "note": "The glazing and the metals need SOMETHING to reflect; with no environment map a metallic surface renders near-black, which is why metalness is held low."}};
  root.userData.actionReadiness = {
    note: 'Use root.userData.sculptRuntime.nodes for transforms, sockets for attachments, colliders for physics proxies, and destructionGroups for breakable sets.',
  };
  return root;
}

export function createFamilyMartStoreBuildingLookDevLights(
  mode: 'neutral' | 'grazing' | 'reference' = 'neutral',
): THREE.Group {
  const lights = new THREE.Group();
  lights.name = "FamilyMart Store Building look-dev lights";
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
  lights.userData.lightingFromPhoto = [{"id": "key", "role": "key", "type": "directional", "direction": [-0.42, 0.8, 0.43], "intensity": 1.0, "intensityRelative": 1.0, "colorTemperatureK": 5600, "color": "#FFF4E2", "evidence": "The front elevation is in shade while the flank and the coping take the light: a high key from behind and to the camera-left."}, {"id": "fill", "role": "fill", "type": "hemisphere", "direction": [0, 1, 0], "intensity": 0.42, "intensityRelative": 0.42, "colorTemperatureK": 7000, "color": "#CFE0F0", "evidence": "The shaded front elevation still reads its own colours rather than going to black, so a broad sky fill is present. This is exactly why the front-elevation crops are lifted before use."}, {"id": "rim", "role": "rim", "type": "directional", "direction": [0.6, 0.4, -0.7], "intensity": 0.22, "intensityRelative": 0.22, "colorTemperatureK": 6200, "color": "#E8EEF6", "evidence": "The parapet's far edge separates from the backdrop with a faint bright line."}, {"id": "exposure", "role": "grade", "type": "tone-mapping", "toneMapping": "ACES filmic", "exposure": 1.0, "contactShadow": {"enabled": true, "strength": 0.6, "radius": 0.4}, "groundShadow": {"enabled": true, "receive": true}, "ambientOcclusion": {"enabled": false, "note": "No AO pass: the shopfront reveal is the only cavity and the framing's own cast shadow carries it."}, "evidence": "The plate holds detail in both the lit coping and the shaded front, which is a filmic roll-off rather than a linear grade."}];
  lights.userData.lookDevTargets = {"contactShadow": {"enabled": true, "strength": 0.6, "radius": 0.4, "note": "A building needs a firm contact shadow or it floats off the tile it stands on."}, "groundShadow": {"enabled": true, "receive": true, "note": "castShadow matters more than receiveShadow here: this prop shades the street."}, "environment": {"intensity": 0.4, "note": "The glazing and the metals need SOMETHING to reflect; with no environment map a metallic surface renders near-black, which is why metalness is held low."}};
  return lights;
}

// Preview-only exports (environment, camera framing, presentation composer, orbit
// controls) are deliberately NOT shipped: they imported three/examples/jsm, and this
// bundle must import 'three' as a bare specifier and nothing else. The host page
// injects its own three instance, and a second copy makes this factory's Mesh a
// different class from the renderer's, so nothing draws.

// thaikit entry point. Adapts the generated one-argument factory to thaikit's
// (spec, options) contract; the reconstruction spec is already baked into the module,
// so the first argument is accepted and ignored rather than being mistaken for options.
export function createObjectModel(_spec?: unknown, options: ProceduralModelOptions = {}): THREE.Group {
  return createFamilyMartStoreBuildingModel(options ?? {});
}
