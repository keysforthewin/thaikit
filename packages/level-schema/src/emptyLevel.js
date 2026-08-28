/**
 * A brand-new level, as glTF JSON.
 *
 * Built by hand rather than through three's exporter because the server has no
 * three and needs none: an empty level is one scene, one moon light, and the
 * extras that name it. The editor's first Save replaces the whole file.
 */
import { LevelExtras } from './index.js';

export function emptyLevelExtras({ id, name, now = new Date().toISOString() }) {
  return LevelExtras.parse({
    schemaVersion: 1,
    id,
    name,
    createdAt: now,
    updatedAt: now,
    settings: {},
    packs: [],
    spawns: [],
  });
}

/** Direction the default moon shines along, as a unit vector. */
export const DEFAULT_MOON_DIRECTION = [-0.4, -1, -0.3];

/**
 * A directional light in glTF points down its node's -Z axis, so the node's
 * rotation is the quaternion that carries -Z onto the moon direction.
 */
function quaternionFromNegZ(dir) {
  const len = Math.hypot(dir[0], dir[1], dir[2]) || 1;
  const d = [dir[0] / len, dir[1] / len, dir[2] / len];
  const from = [0, 0, -1];
  const dot = from[0] * d[0] + from[1] * d[1] + from[2] * d[2];
  if (dot > 0.999999) return [0, 0, 0, 1];
  if (dot < -0.999999) return [0, 1, 0, 0];
  const cross = [
    from[1] * d[2] - from[2] * d[1],
    from[2] * d[0] - from[0] * d[2],
    from[0] * d[1] - from[1] * d[0],
  ];
  const w = 1 + dot;
  const n = Math.hypot(cross[0], cross[1], cross[2], w);
  return [cross[0] / n, cross[1] / n, cross[2] / n, w / n];
}

export function emptyLevelGltf({ id, name, now }) {
  const extras = emptyLevelExtras({ id, name, now });
  return {
    asset: { version: '2.0', generator: 'thaikit level editor' },
    extensionsUsed: ['KHR_lights_punctual'],
    extensions: {
      KHR_lights_punctual: {
        lights: [{ type: 'directional', name: 'moon', color: [0.72, 0.78, 0.95], intensity: 0.6 }],
      },
    },
    scene: 0,
    scenes: [{ name: name, nodes: [0], extras: { thaikitLevel: extras } }],
    nodes: [
      {
        name: 'light_moon',
        translation: [0, 40, 0],
        rotation: quaternionFromNegZ(DEFAULT_MOON_DIRECTION),
        extensions: { KHR_lights_punctual: { light: 0 } },
        extras: {
          tk: {
            kind: 'light',
            role: 'moon',
            enabled: true,
            castShadow: true,
            shadow: { mapSize: 2048, extent: 60, bias: -0.0005, normalBias: 0.02 },
          },
        },
      },
    ],
  };
}
