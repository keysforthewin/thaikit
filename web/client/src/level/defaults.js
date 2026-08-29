import { newLightId } from './ids.js';
import { DEFAULT_GROUND } from './ground.js';
import { DEFAULT_SKY } from './sky.js';

export const DEFAULT_SETTINGS = {
  cellSize: 24,
  ground: { ...DEFAULT_GROUND },
  sky: structuredClone(DEFAULT_SKY),
  gridSize: 1,
  snap: {
    enabled: true, translate: 0.5, rotateDeg: 15, scale: 0.1,
    surface: { enabled: true, threshold: 0.3, edgeThreshold: 0.25, angleDeg: 5, minOverlap: 0.05 },
  },
  showGrid: true,
  showAxes: true,
  environment: { background: '#0b0d16', hemisphere: { sky: '#8797c2', ground: '#2a2620', intensity: 0.35 } },
  lightmap: { enabled: true, size: 4096, texelsPerMeter: 8, samples: 128, intensity: 1 },
  lod: { lod1Ratio: 0.4, lod2Ratio: 0.15, lod1Distance: 60, lod2Distance: 140, hysteresis: 8 },
  textures: { colorMode: 'etc1s', dataMode: 'uastc', maxSize: 2048 },
};

export const DEFAULT_SHADOW = { mapSize: 2048, extent: 60, bias: -0.0005, normalBias: 0.02 };

export function defaultMoon() {
  return {
    id: newLightId(), type: 'directional', role: 'moon', name: 'moon', enabled: true,
    color: '#b8c7f2', intensity: 0.6, position: [16, 40, 12], direction: norm([-0.4, -1, -0.3]),
    castShadow: true, shadow: { ...DEFAULT_SHADOW },
  };
}

export function defaultPointLight(position) {
  return {
    id: newLightId(), type: 'point', role: null, name: 'point light', enabled: true,
    color: '#ffd9a3', intensity: 12, position, distance: 12, decay: 2, castShadow: false, shadow: { ...DEFAULT_SHADOW, mapSize: 512 },
  };
}

export function defaultSpotLight(position) {
  return {
    id: newLightId(), type: 'spot', role: null, name: 'spot light', enabled: true,
    color: '#fff1d6', intensity: 40, position, direction: [0, -1, 0], distance: 18, decay: 2,
    angle: Math.PI / 6, penumbra: 0.3, castShadow: false, shadow: { ...DEFAULT_SHADOW, mapSize: 1024 },
  };
}

export function norm(v) {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
}

export const round4 = (n) => +Number(n).toFixed(4);
export const roundVec = (v) => v.map(round4);
