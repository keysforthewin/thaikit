/**
 * The argv for `blender -b --python bake_lightmap.py -- ...`, built ONCE for
 * both places Blender can run.
 *
 * The container bakes with its own Linux Blender and hands it absolute paths;
 * the host bake agent (`scripts/level/bake-host-agent.mjs`) runs the Windows
 * Blender, which reads the repo over \\wsl.localhost, so every path has to be
 * spelled the way THAT process can open it. The spec therefore carries paths
 * as data and `mapPath` decides the spelling, so the two callers can never
 * drift on which flags a bake gets -- the spec is also what crosses the wire
 * to the agent, with repo-relative paths, and is rebuilt there with the host's
 * own `toBlenderPath`.
 */

const hexToLinear = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => { const v = c / 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; });
};

export const CYCLES_DEVICES = ['GPU', 'GPU+CPU', 'CPU'];

/**
 * Everything bake_lightmap.py needs, as plain data.
 *
 * @param {object} p
 * @param {object} p.bake       scene.extras.thaikitBake (settings + lights)
 * @param {boolean} [p.cpu]     also enable the CPU devices (Cycles hybrid)
 * @param {boolean} [p.hasEnv]  a sky equirect was written beside the input
 */
export function blenderBakeSpec({ bake, cpu = false, hasEnv = false }) {
  const lm = bake.settings?.lightmap ?? {};
  const moon = bake.lights?.find((l) => l.role === 'moon') ?? null;
  const moonDir = moon?.direction ?? [-0.4, -1, -0.3];
  const moonRgb = hexToLinear(moon?.color ?? '#b8c7f2');
  const hemi = bake.settings?.environment?.hemisphere ?? {};
  const skyRgb = hexToLinear(hemi.sky ?? '#8797c2');
  // Every enabled point and spot lamp goes INTO the bake, in three's units;
  // bake_lightmap.py rebuilds them itself (the glTF-imported copies arrive
  // through Blender's lighting-mode conversion at the wrong brightness). The
  // moon is the sun, handled above; a non-moon directional stays live and
  // unbaked, because the runtime only cuts point/spot on static materials.
  const lights = (bake.lights ?? [])
    .filter((l) => l.role !== 'moon' && (l.type === 'point' || l.type === 'spot'))
    .map((l) => {
      const color = l.bakeColor ?? hexToLinear(l.color ?? '#ffffff');
      const gain = Math.max(1, ...color);
      return {
        name: String(l.name ?? l.id ?? l.node ?? ''), type: l.type,
        shape: l.bakeShape ?? null, castShadow: l.bakeCastShadow ?? true,
        sourceRadius: l.sourceRadius ?? null, sourceWidth: l.sourceWidth ?? null, sourceHeight: l.sourceHeight ?? null,
        up: l.up ?? null, right: l.right ?? null,
        position: l.position, direction: l.direction ?? null,
        color: color.map((c) => c / gain), intensity: (l.intensity ?? 1) * gain,
        angle: l.angle ?? null, penumbra: l.penumbra ?? null, distance: l.distance ?? null, decay: l.decay ?? null,
      };
    });
  return {
    size: lm.size ?? 4096,
    samples: lm.samples ?? 128,
    noiseThreshold: lm.noiseThreshold ?? null,
    texelsPerMeter: lm.texelsPerMeter ?? 8,
    // The eighth number is the sun's angular diameter in degrees: the width
    // of the penumbra Cycles gives the moon's shadow on static geometry.
    moon: [...moonDir, ...moonRgb, moon?.intensity ?? 0.6, moon?.shadow?.softDeg ?? 1.5],
    sky: [...skyRgb, hemi.intensity ?? 0.35],
    ground: hexToLinear(hemi.ground ?? '#2a2620'),
    exposure: lm.exposure ?? 1,
    device: cpu ? 'GPU+CPU' : 'GPU',
    lights,
    env: hasEnv ? {
      // An exported SkyLight captures the authored sky brightness, then applies
      // its own intensity and tint. The hemisphere fallback is independent.
      strength: (bake.settings?.sky?.base?.intensity ?? 1) * (bake.skyLight?.intensity ?? 1),
      color: bake.skyLight?.color ?? [1, 1, 1],
      // NEGATED: Blender's Mapping node rotates the lookup vector, the runtime
      // turns the dome. Derived, not measured -- see blender-cycles.mjs.
      rotation: -(bake.settings?.sky?.base?.rotationDeg ?? 0),
    } : null,
  };
}

/**
 * @param {object} spec   from blenderBakeSpec()
 * @param {object} paths  { script, glb, out, env? } in whatever form mapPath takes
 * @param {(p: string) => string} mapPath  how Blender spells each path
 */
export function buildBlenderArgs(spec, paths, mapPath) {
  if (!CYCLES_DEVICES.includes(spec.device)) throw new Error(`unknown cycles device ${spec.device}`);
  const f4 = (n) => Number(n).toFixed(4);
  const args = [
    '-b', '--python', mapPath(paths.script), '--',
    '--glb', mapPath(paths.glb), '--out', mapPath(paths.out),
    // `--size` is the CEILING; the atlas is derived from the density below.
    '--size', String(spec.size), '--samples', String(spec.samples),
    `--texels-per-meter=${spec.texelsPerMeter}`,
    // '=' form: a value starting with '-' (a downward moon) reads as an option otherwise.
    `--moon=${spec.moon.map(f4).join(',')}`,
    `--sky=${spec.sky.map(f4).join(',')}`,
    `--ground=${spec.ground.map(f4).join(',')}`,
    '--exposure', String(spec.exposure),
    '--device', spec.device,
    // A file avoids OS argument-length limits for large inventories. Older
    // callers can still pass the small inline form. Neither route uses a shell.
    paths.lights ? `--lights-file=${mapPath(paths.lights)}` : `--lights=${JSON.stringify(spec.lights ?? [])}`,
  ];
  if (spec.noiseThreshold != null) args.push(`--noise-threshold=${Number(spec.noiseThreshold)}`);
  if (spec.env) {
    if (!paths.env) throw new Error('spec has a sky env but no env path');
    args.push(`--env=${mapPath(paths.env)}`);
    args.push(`--env-strength=${f4(spec.env.strength)}`);
    args.push(`--env-color=${(spec.env.color ?? [1, 1, 1]).map(f4).join(',')}`);
    args.push(`--env-rotation=${Number(spec.env.rotation).toFixed(3)}`);
  }
  return args;
}

/**
 * Feed Blender's stdout/stderr through this: it keeps a tail for the error
 * message and hands every `[thaikit]` progress line to `onLine`.
 */
export function blenderLineSink(onLine, tailSize = 40) {
  let buf = '';
  const tail = [];
  return {
    feed(chunk) {
      buf += chunk;
      let nl;
      while ((nl = buf.indexOf('\n')) >= 0) {
        const line = buf.slice(0, nl).replace(/\r$/, '');
        buf = buf.slice(nl + 1);
        tail.push(line);
        if (tail.length > tailSize) tail.shift();
        if (line.startsWith('[thaikit]')) onLine(line.slice(10).trim());
      }
    },
    tail: () => tail.join('\n'),
  };
}
