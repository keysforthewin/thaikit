/**
 * Smoke harness for a baked level: bundled by scripts/level/smoke-level.mjs
 * with everything inside (this page has no host three to share), so it is
 * self-contained. Loads the level through the runtime package, renders one
 * frame per LOD tier from the first spawn, and reports what the renderer drew.
 */
import * as THREE from 'three';
import { loadLevel } from '@thaikit/level-runtime';

const params = new URLSearchParams(location.search);
const url = params.get('level');
const size = Number(params.get('size') ?? 768);
// The r185 prefilter is 256-tap GGX importance sampling per output texel, and
// this page runs under SwiftShader against a 120 s deadline -- so the smoke run
// asks for the smallest probe unless told otherwise. It is exercising the CODE
// PATH, not judging the reflection.
const iblSize = Number(params.get('iblSize') ?? 64);

const canvas = document.getElementById('c');
canvas.width = size;
canvas.height = size;
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.setSize(size, size, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b0d16);
const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 2000);

/** Mean luma, and the share of pixels that are not the backdrop -- the honest test for a night scene. */
function frameStats() {
  const gl = renderer.getContext();
  const px = new Uint8Array(size * size * 4);
  gl.readPixels(0, 0, size, size, gl.RGBA, gl.UNSIGNED_BYTE, px);
  const bg = scene.background;
  const br = Math.round(bg.r ** (1 / 2.2) * 255), bgg = Math.round(bg.g ** (1 / 2.2) * 255), bb = Math.round(bg.b ** (1 / 2.2) * 255);
  let sum = 0;
  let fg = 0;
  for (let i = 0; i < px.length; i += 4) {
    sum += 0.2126 * px[i] + 0.7152 * px[i + 1] + 0.0722 * px[i + 2];
    if (Math.abs(px[i] - br) + Math.abs(px[i + 1] - bgg) + Math.abs(px[i + 2] - bb) > 12) fg += 1;
  }
  return { luma: +(sum / (px.length / 4)).toFixed(1), coverage: +(fg / (px.length / 4)).toFixed(4) };
}

window.__smoke = { ready: false };
(async () => {
  try {
    // No sky. `frameStats` measures the share of the frame that is NOT the
    // backdrop, and a sky makes every pixel foreground -- the coverage gate
    // would read 100% on an empty level. The smoke test is about geometry.
    const t0 = performance.now();
    // `sky: false` but IBL still on: the environment is prefiltered from the
    // sky's own texture, which loadLevel reads whether or not a dome is built,
    // so the geometry here is lit the way the shipped level lights it.
    const level = await loadLevel(url, { scene, renderer, camera, sky: false, iblSize, transcoderPath: '/node_modules/three/examples/jsm/libs/basis/' });
    const loadMs = Math.round(performance.now() - t0);
    const spawn = level.spawns.list[0] ?? { position: [0, 0, 0], yawDeg: 0 };
    const b = level.manifest.bounds;
    const center = new THREE.Vector3((b.min[0] + b.max[0]) / 2, 0, (b.min[2] + b.max[2]) / 2);
    camera.position.set(spawn.position[0], spawn.position[1] + 1.7, spawn.position[2]).add(new THREE.Vector3(0, 6, 14));
    camera.lookAt(center);
    const frames = {};
    for (const tier of [0, 1, 2]) {
      level.cells.forceTier(tier);
      level.update(1 / 60, camera.position);
      renderer.info.reset();
      renderer.render(scene, camera);
      frames[`tier${tier}`] = { calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, ...frameStats() };
    }
    level.cells.forceTier(0);
    renderer.render(scene, camera);
    window.__smoke = {
      ready: true, ok: true, frames, cells: level.cells.cells.length, lightmap: Boolean(level.lightmap),
      environment: level.environment
        ? { size: level.environment.size, source: level.environment.source, ms: level.environment.ms, mb: +(level.environment.bytes / 1048576).toFixed(2) }
        : null,
      loadMs,
      lights: level.lights.list.map((l) => l.entry.node), textures: renderer.info.memory.textures, geometries: renderer.info.memory.geometries,
      colliders: level.colliders.staticShapes.length, dynamic: level.colliders.dynamic.length,
    };
  } catch (err) {
    window.__smoke = { ready: true, ok: false, error: err.message, stack: err.stack };
  }
})();
