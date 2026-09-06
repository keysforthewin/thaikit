import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { Document, NodeIO, Logger } from '@gltf-transform/core';
import { ALL_EXTENSIONS, KHRLightsPunctual } from '@gltf-transform/extensions';
import sharp from 'sharp';

import { convertUnrealLevel, parseGlb, readEpicLightmaps, eulerXYZ, forward, skySettingsFromSidecar } from './import-unreal-level.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(here, '../..');

/** A box mesh, centred on x/z, standing on y=0, with TEXCOORD_0 and TEXCOORD_1 both 0..1. */
function box(doc, name, w, h, d, buffer) {
  const hx = w / 2, hz = d / 2;
  const P = [];
  const N = [];
  const UV = [];
  const I = [];
  const face = (n, corners) => {
    const base = P.length / 3;
    for (const c of corners) { P.push(...c); N.push(...n); }
    UV.push(0, 0, 1, 0, 1, 1, 0, 1);
    I.push(base, base + 1, base + 2, base, base + 2, base + 3);
  };
  face([0, 0, 1], [[-hx, 0, hz], [hx, 0, hz], [hx, h, hz], [-hx, h, hz]]);
  face([0, 0, -1], [[hx, 0, -hz], [-hx, 0, -hz], [-hx, h, -hz], [hx, h, -hz]]);
  face([1, 0, 0], [[hx, 0, hz], [hx, 0, -hz], [hx, h, -hz], [hx, h, hz]]);
  face([-1, 0, 0], [[-hx, 0, -hz], [-hx, 0, hz], [-hx, h, hz], [-hx, h, -hz]]);
  face([0, 1, 0], [[-hx, h, hz], [hx, h, hz], [hx, h, -hz], [-hx, h, -hz]]);
  face([0, -1, 0], [[-hx, 0, -hz], [hx, 0, -hz], [hx, 0, hz], [-hx, 0, hz]]);
  const acc = (type, arr) => doc.createAccessor().setType(type).setArray(arr).setBuffer(buffer);
  const prim = doc.createPrimitive()
    .setAttribute('POSITION', acc('VEC3', new Float32Array(P)))
    .setAttribute('NORMAL', acc('VEC3', new Float32Array(N)))
    .setAttribute('TEXCOORD_0', acc('VEC2', new Float32Array(UV)))
    .setAttribute('TEXCOORD_1', acc('VEC2', new Float32Array(UV)))
    .setIndices(acc('SCALAR', new Uint16Array(I)))
    .setMaterial(doc.createMaterial(`${name}_mat`).setBaseColorFactor([0.6, 0.5, 0.4, 1]));
  return doc.createMesh(name).addPrimitive(prim);
}

const quatY = (deg) => { const r = (deg * Math.PI) / 180; return [0, Math.sin(r / 2), 0, Math.cos(r / 2)]; };

/**
 * What Unreal's exporter would hand us: two instances of a kit mesh (one
 * dynamic), an engine cube, a spot and a directional light, a spawn camera --
 * plus EPIC_lightmap_textures on the nodes, spliced into the JSON by hand
 * because gltf-transform drops extensions it does not know.
 */
async function unrealLikeGlb({ withLightmaps = true, withSky = false } = {}) {
  const doc = new Document();
  doc.setLogger(new Logger(Logger.Verbosity.SILENT));
  const buffer = doc.createBuffer();
  const scene = doc.createScene('ThaiSoi');
  const drum = box(doc, 'SM_TK_OilDrum', 0.58, 0.85, 0.58, buffer);
  const cube = box(doc, 'SM_Cube', 4, 1, 4, buffer);
  const a = doc.createNode('Drum_A').setMesh(drum).setTranslation([2, 0, 3]).setRotation(quatY(90));
  const b = doc.createNode('dyn_Drum_B').setMesh(drum).setTranslation([30, 0, 3]);
  const c = doc.createNode('Floor').setMesh(cube).setTranslation([0, -1, 0]);
  scene.addChild(a).addChild(b).addChild(c);
  if (withSky) {
    // A skyline imposter labelled bb_ (kit item with a thin box compound) and
    // thaikit's own sky actor's preview sphere, which must never ship.
    const card = box(doc, 'SM_TK_Tower', 36.8, 83, 0.02, buffer);
    scene.addChild(doc.createNode('bb_Tower').setMesh(card).setTranslation([300, 0, -200]).setRotation(quatY(45)));
    const dome = box(doc, 'Sphere', 2800, 2800, 2800, buffer);
    scene.addChild(doc.createNode('tk_sky').setMesh(dome).setTranslation([0, -200, 0]));
    // A climbable ladder: an ordinary static kit body whose label tags it.
    const rungs = box(doc, 'SM_TK_Ladder', 0.5, 3, 0.2, buffer);
    scene.addChild(doc.createNode('ladder_Fire').setMesh(rungs).setTranslation([6, 0, 3]));
  }

  const lights = doc.createExtension(KHRLightsPunctual);
  const spot = lights.createLight('Lamp').setType('spot').setColor([1, 0.6, 0.2]).setIntensity(1600).setOuterConeAngle(0.6).setInnerConeAngle(0.3).setRange(18);
  scene.addChild(doc.createNode('Lamp').setTranslation([2, 7.5, 3]).setRotation([-Math.SQRT1_2, 0, 0, Math.SQRT1_2]).setExtension('KHR_lights_punctual', spot));
  const moon = lights.createLight('Moon').setType('directional').setColor([0.7, 0.8, 1]).setIntensity(1);
  scene.addChild(doc.createNode('Moon').setTranslation([0, 40, 0]).setRotation([-0.5, 0, 0, Math.SQRT1_2]).setExtension('KHR_lights_punctual', moon));
  const cam = doc.createCamera('spawncam').setType('perspective').setYFov(1).setZNear(0.1);
  scene.addChild(doc.createNode('spawn_red_a').setCamera(cam).setTranslation([1, 1.7, 8]).setRotation(quatY(90)));
  scene.addChild(doc.createNode('Empty'));

  const io = new NodeIO().setLogger(new Logger(Logger.Verbosity.SILENT)).registerExtensions(ALL_EXTENSIONS);
  const { json, resources } = await io.writeJSON(doc, { format: 'glb' });
  let bin = Buffer.from(Object.values(resources)[0]);
  // One embedded buffer, no uri: what a real .glb carries.
  json.buffers = [{ byteLength: bin.length }];

  if (withLightmaps) {
    // Two 4x4 lightmap textures, red and green, so the atlas tiling is visible.
    json.images ??= []; json.textures ??= []; json.bufferViews ??= []; json.samplers ??= [{}];
    const addImage = async (rgb) => {
      const png = await sharp({ create: { width: 4, height: 4, channels: 3, background: { r: rgb[0], g: rgb[1], b: rgb[2] } } }).png().toBuffer();
      const pad = (4 - (bin.length % 4)) % 4;
      bin = Buffer.concat([bin, Buffer.alloc(pad), png]);
      json.bufferViews.push({ buffer: 0, byteOffset: bin.length - png.length, byteLength: png.length });
      json.images.push({ bufferView: json.bufferViews.length - 1, mimeType: 'image/png', name: `LM_${json.images.length}` });
      json.textures.push({ source: json.images.length - 1, sampler: 0 });
      return json.textures.length - 1;
    };
    const t0 = await addImage([200, 40, 40]);
    const t1 = await addImage([40, 200, 40]);
    json.extensionsUsed = [...(json.extensionsUsed ?? []), 'EPIC_lightmap_textures'];
    const nodeOf = (name) => json.nodes.findIndex((n) => n.name === name);
    json.nodes[nodeOf('Drum_A')].extensions = { EPIC_lightmap_textures: { lightmapTexture: { index: t0, texCoord: 1 }, lightmapScale: [0.5, 0.5], lightmapOffset: [0.25, 0.25] } };
    json.nodes[nodeOf('Floor')].extensions = { EPIC_lightmap_textures: { lightmapTexture: { index: t1, texCoord: 1 }, lightmapScale: [1, 1], lightmapOffset: [0, 0] } };
    json.buffers[0].byteLength = bin.length;
  }

  const jsonBytes = Buffer.from(JSON.stringify(json));
  const jpad = (4 - (jsonBytes.length % 4)) % 4;
  const bpad = (4 - (bin.length % 4)) % 4;
  const header = Buffer.alloc(12);
  header.writeUInt32LE(0x46546c67, 0); header.writeUInt32LE(2, 4);
  const total = 12 + 8 + jsonBytes.length + jpad + 8 + bin.length + bpad;
  header.writeUInt32LE(total, 8);
  const jh = Buffer.alloc(8); jh.writeUInt32LE(jsonBytes.length + jpad, 0); jh.writeUInt32LE(0x4e4f534a, 4);
  const bh = Buffer.alloc(8); bh.writeUInt32LE(bin.length + bpad, 0); bh.writeUInt32LE(0x004e4942, 4);
  return new Uint8Array(Buffer.concat([header, jh, jsonBytes, Buffer.alloc(jpad, 0x20), bh, bin, Buffer.alloc(bpad)]));
}

const KIT = {
  byAsset: new Map([['SM_TK_OilDrum', {
    ref: '@thai-kit/oil-drum', asset: 'SM_TK_OilDrum', category: 'container', size: { w: 0.58, h: 0.85, d: 0.58 },
    physics: { enabled: true, massKg: 18 }, destructionGroups: [],
    colliders: [{ name: 'layer0', type: 'cylinder', offset: [0, 0.43, 0], scale: [0.29, 0.43, 0.29], isTrigger: false }],
  }], ['SM_TK_Ladder', {
    ref: '@thai-kit/fire-escape-ladder-segment', asset: 'SM_TK_Ladder', category: 'building-part', size: { w: 0.5, h: 3, d: 0.2 },
    physics: { enabled: false, massKg: null }, destructionGroups: [],
    colliders: [{ name: 'stiles', type: 'box', offset: [0, 1.5, 0], scale: [0.25, 1.5, 0.1], isTrigger: false }],
  }], ['SM_TK_Tower', {
    ref: '@thai-kit/tower', asset: 'SM_TK_Tower', category: 'building-part', size: { w: 36.8, h: 83, d: 0 },
    physics: { enabled: false, massKg: null }, destructionGroups: [],
    colliders: [{ name: 'billboard', type: 'box', offset: [0, 41.5, 0], scale: [18.4, 41.5, 0.025], isTrigger: false }],
  }]]),
  generatedAt: '2026-09-05T00:00:00.000Z', file: null,
};

async function convert(bytes, opts = {}) {
  const { json, bin } = parseGlb(bytes);
  const io = new NodeIO().setLogger(new Logger(Logger.Verbosity.SILENT)).registerExtensions(ALL_EXTENSIONS);
  const doc = await io.readBinary(bytes);
  return convertUnrealLevel({ id: 'zz-unreal-test', doc, json, bin, kit: KIT, ...opts });
}

test('euler and forward helpers agree with three', () => {
  const [x, y, z] = eulerXYZ(quatY(90));
  assert.ok(Math.abs(x) < 1e-6 && Math.abs(y - Math.PI / 2) < 1e-6 && Math.abs(z) < 1e-6);
  const f = forward([-Math.SQRT1_2, 0, 0, Math.SQRT1_2]); // -90 about X: -Z becomes -Y
  assert.ok(Math.abs(f[1] + 1) < 1e-6, `points down, got ${f}`);
});

test('an Unreal export becomes placement rows, lights, spawns and colliders the pipeline understands', async () => {
  const bytes = await unrealLikeGlb({ withLightmaps: false });
  const { bake, report, doc } = await convert(bytes);
  assert.equal(report.placements, 3);
  assert.equal(report.static, 2);
  assert.equal(report.dynamic, 1);
  assert.equal(report.lightmap, 'none');

  const a = bake.placements.find((p) => p.source.actor === 'Drum_A');
  assert.equal(a.ref, '@thai-kit/oil-drum');
  assert.equal(a.static, true);
  assert.deepEqual(a.position, [2, 0, 3]);
  assert.ok(Math.abs(a.rotation[1] - Math.PI / 2) < 1e-4, 'yaw 90 survives as euler XYZ');
  assert.equal(a.colliders[0].type, 'cylinder', 'the kit compound comes from the manifest');
  assert.equal(a.cell, '0_0');

  const b = bake.placements.find((p) => p.source.actor === 'dyn_Drum_B');
  assert.equal(b.static, false);
  assert.deepEqual(b.physics, { enabled: true, massKg: 18 });
  assert.equal(b.cell, '1_0');

  const floor = bake.placements.find((p) => p.source.actor === 'Floor');
  assert.equal(floor.ref, '@unreal/sm-cube');
  assert.equal(floor.colliders.length, 1, 'an unknown static mesh gets a bbox box');
  assert.deepEqual(floor.colliders[0].scale, [2, 0.5, 2]);

  assert.equal(bake.lights.length, 2);
  const moon = bake.lights.find((l) => l.role === 'moon');
  assert.ok(moon && moon.castShadow && moon.shadow, 'the directional is the moon with a shadow block');
  const lamp = bake.lights.find((l) => l.type === 'spot');
  assert.equal(lamp.intensity, 1600);
  assert.equal(lamp.distance, 18);
  assert.ok(Math.abs(lamp.direction[1] + 1) < 1e-3, 'the spot points down');
  assert.ok(Math.abs(lamp.penumbra - 0.5) < 1e-3);

  assert.equal(bake.spawns.length, 1);
  assert.equal(bake.spawns[0].name, 'red-a');
  assert.equal(bake.spawns[0].team, 'red');
  assert.ok(Math.abs(bake.spawns[0].yawDeg - 90) < 0.01, `camera yaw, got ${bake.spawns[0].yawDeg}`);
  assert.deepEqual(report.dropped, ['Empty']);

  // Every mesh node is tagged the way partitionCells expects, and nothing else is left.
  const scene = doc.getRoot().listScenes()[0];
  const kids = scene.listChildren();
  assert.equal(kids.length, 3);
  for (const k of kids) assert.equal(k.getExtras().tk.kind, 'placement');
  assert.deepEqual(scene.getExtras().thaikitBake.placements.map((p) => p.id).sort(), ['drum-a', 'dyn-drum-b', 'floor']);
});

test('EPIC_lightmap_textures is adopted: per-node UVs baked into TEXCOORD_1 and the textures tiled into one atlas', async () => {
  const bytes = await unrealLikeGlb({ withLightmaps: true });
  const { json } = parseGlb(bytes);
  const epic = readEpicLightmaps(json);
  assert.equal(epic.perNode.length, 2);
  assert.deepEqual(epic.perNode[0].scale, [0.5, 0.5]);
  assert.equal(epic.perNode[0].texCoord, 1);

  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'tk-unreal-lm-'));
  const { report, doc, lightmapPng } = await convert(bytes, { lightmapDir: dir });
  assert.equal(report.lightmap, 'adopted');
  assert.ok(lightmapPng);
  const meta = await sharp(lightmapPng).metadata();
  assert.equal(meta.width, 8, 'two 4x4 textures side by side');
  assert.equal(meta.height, 4);
  assert.equal(meta.channels, 4);
  const px = await sharp(lightmapPng).raw().toBuffer();
  assert.ok(px[0] > 150 && px[1] < 80, 'left tile is the red texture');
  assert.ok(px[4 * 4 + 1] > 150, 'right tile is the green texture');
  assert.equal(px[3], 255, 'alpha (moon visibility) is fully lit');

  // Drum_A: uv 0..1 -> 0.25..0.75 (scale/offset) -> /2 for column 0 of 2 -> 0.125..0.375.
  const scene = doc.getRoot().listScenes()[0];
  const a = scene.listChildren().find((n) => n.getName() === 'Drum_A');
  const uv1 = a.getMesh().listPrimitives()[0].getAttribute('TEXCOORD_1');
  const el = [0, 0];
  uv1.getElement(0, el); assert.ok(Math.abs(el[0] - 0.125) < 1e-6 && Math.abs(el[1] - 0.25) < 1e-6, `got ${el}`);
  uv1.getElement(2, el); assert.ok(Math.abs(el[0] - 0.375) < 1e-6 && Math.abs(el[1] - 0.75) < 1e-6, `got ${el}`);
  // The dynamic twin shares the Static Mesh but had no entry: its own zeros, not Drum_A's UVs.
  const b = scene.listChildren().find((n) => n.getName() === 'dyn_Drum_B');
  assert.notEqual(a.getMesh(), b.getMesh(), 'the lightmapped instance got its own mesh copy');
  b.getMesh().listPrimitives()[0].getAttribute('TEXCOORD_1').getElement(2, el);
  assert.deepEqual(el, [0, 0]);
  // Floor: column 1 -> 0.5..1.0
  const f = scene.listChildren().find((n) => n.getName() === 'Floor');
  f.getMesh().listPrimitives()[0].getAttribute('TEXCOORD_1').getElement(2, el);
  assert.ok(Math.abs(el[0] - 1) < 1e-6 && Math.abs(el[1] - 1) < 1e-6, `got ${el}`);
  await fs.rm(dir, { recursive: true, force: true });
});

const SKY_SIDECAR = {
  level: 'zz-unreal-test', actor: 'tk_sky',
  sky: {
    enabled: true,
    base: { mode: 'panoramic', panorama: 'panorama.png', elevation: { minDeg: -90, maxDeg: 90 }, nadir: { mode: 'cut', color: '#75724b', startDeg: 0, endDeg: 3 }, intensity: 1, lodBias: -0.5, rotationDeg: 0 },
    clouds: { file: 'clouds.png', color: '#ffffff', opacity: 0.5, driftDegPerMin: 3, repeat: 2, heightScale: 0.35 },
    stars: { enabled: true, density: 2, brightness: 0.5, twinkleSpeed: 1, color: '#dfe6ff', horizonFade: 0.25 },
  },
  moon: { actor: 'Moon', sourceAngleDeg: 6, intensityOverride: 0.6, intensityLux: 16 },
};

test('the sky sidecar drives settings.sky and the moon; a billboard ships no collider; the preview sphere is dropped', async () => {
  const bytes = await unrealLikeGlb({ withLightmaps: false, withSky: true });
  const onDisk = new Set(['panorama.png', 'clouds.png']);
  const { bake, report } = await convert(bytes, { skyMap: SKY_SIDECAR, lightScale: 1 / 128, skyFileExists: async (n) => onDisk.has(n) });

  assert.equal(bake.settings.sky.enabled, true);
  assert.equal(bake.settings.sky.base.mode, 'panoramic');
  assert.equal(bake.settings.sky.base.panorama, 'panorama.png');
  assert.equal(bake.settings.sky.base.nadir.mode, 'cut');
  assert.equal(bake.settings.sky.clouds.file, 'clouds.png');
  assert.equal(bake.settings.sky.stars.density, 2);
  assert.equal(report.sky.source, 'sidecar');
  assert.deepEqual(report.sky.found, { 'base.panorama': true, 'clouds.file': true });
  assert.ok(!report.notes.some((n) => n.startsWith('WARNING sky.json')), report.notes.join('\n'));

  const moon = bake.lights.find((l) => l.role === 'moon');
  assert.equal(moon.intensity, 0.6, 'MoonIntensity override wins over lux x light-scale');
  assert.equal(moon.shadow.softDeg, 6, 'light_source_angle becomes the Cycles sun angle');

  const tower = bake.placements.find((p) => p.source.actor === 'bb_Tower');
  assert.equal(tower.billboard, 'yaw');
  assert.equal(tower.static, false);
  assert.deepEqual(tower.colliders, [], 'a billboard never ships the kit compound');
  assert.ok(!bake.placements.some((p) => p.source.actor === 'tk_sky'), 'the BP_TK_Sky preview sphere is not a placement');
  assert.ok(report.notes.some((n) => n.includes('dropped backdrop "tk_sky"')));

  const ladder = bake.placements.find((p) => p.source.actor === 'ladder_Fire');
  assert.deepEqual(ladder.tags, ['ladder'], 'a ladder_ label tags the row');
  assert.equal(ladder.static, true, 'a ladder is a static body');
  assert.equal(ladder.colliders.length, 1, 'and keeps its compound: it is climbed AND stood on');
  assert.deepEqual(tower.tags, [], 'other rows carry no tags');
  assert.equal(report.ladders, 1);
});

test('without an override the moon keeps lux x light-scale, and a sidecar naming a missing image warns by name', async () => {
  const bytes = await unrealLikeGlb({ withLightmaps: false });
  const sidecar = { ...SKY_SIDECAR, moon: { sourceAngleDeg: 3, intensityOverride: 0 } };
  const { bake, report } = await convert(bytes, { skyMap: sidecar, lightScale: 0.5, skyFileExists: async (n) => n === 'panorama.png' });
  const moon = bake.lights.find((l) => l.role === 'moon');
  assert.equal(moon.intensity, 0.5, '1 lux x 0.5');
  assert.equal(moon.shadow.softDeg, 3);
  assert.equal(report.sky.found['clouds.file'], false);
  assert.ok(report.notes.some((n) => n.startsWith('WARNING sky.json names clouds.file = clouds.png')), report.notes.join('\n'));
  // No sidecar at all: the schema default, and the note that says why there is no sky.
  const plain = await convert(bytes, {});
  assert.equal(plain.bake.settings.sky.enabled, false);
  assert.equal(plain.report.sky.source, 'none');
  assert.ok(plain.report.notes.some((n) => n.startsWith('no sky sidecar')));
});

test('skySettingsFromSidecar parses through the schema and checks every cube face', async () => {
  const notes = [];
  const faces = { px: 'px.png', nx: 'nx.png', py: 'py.png', ny: 'ny.png', pz: 'pz.png' };
  const { sky, found } = await skySettingsFromSidecar({ sky: { enabled: true, base: { mode: 'cube', faces } } }, 'zz', notes, { fileExists: async () => true });
  assert.equal(sky.base.mode, 'cube');
  assert.equal(sky.base.lodBias, -0.5, 'schema defaults fill what the sidecar omits');
  assert.equal(Object.keys(found).length, 5);
  assert.ok(notes.some((n) => n.includes('no nz face')));
});

// End to end through bake-level.mjs --baker unreal, when the toolchain (ktx) is here.
const ktxPresent = await new Promise((r) => { const c = spawn('ktx', ['--version']); c.on('error', () => r(false)); c.on('close', (code) => r(code === 0)); });
test('the imported level bakes with --baker unreal into a GLB the runtime loads headlessly', { skip: !ktxPresent && 'no ktx on PATH' }, async () => {
  const id = 'zz-unreal-test';
  const levelDir = path.join(REPO, 'levels', id);
  await fs.rm(levelDir, { recursive: true, force: true });
  await fs.mkdir(path.join(levelDir, 'unreal'), { recursive: true });
  await fs.writeFile(path.join(levelDir, 'unreal', 'level.glb'), await unrealLikeGlb({ withLightmaps: true, withSky: true }));
  await fs.writeFile(path.join(levelDir, 'unreal', 'kit-manifest.json'), JSON.stringify({ items: [...KIT.byAsset.values()], generatedAt: KIT.generatedAt }));
  // The sky sidecar plus the two images it names, as tk_sky_dump.py would leave them.
  await fs.mkdir(path.join(levelDir, 'sky'), { recursive: true });
  await fs.writeFile(path.join(levelDir, 'unreal', 'sky.json'), JSON.stringify(SKY_SIDECAR));
  const pano = await sharp({ create: { width: 64, height: 32, channels: 3, background: { r: 20, g: 30, b: 70 } } }).png().toBuffer();
  const cloud = await sharp({ create: { width: 16, height: 16, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 128 } } }).png().toBuffer();
  await fs.writeFile(path.join(levelDir, 'sky', 'panorama.png'), pano);
  await fs.writeFile(path.join(levelDir, 'sky', 'clouds.png'), cloud);
  const run = (script, args) => new Promise((resolve) => {
    const c = spawn(process.execPath, [path.join(here, script), ...args], { cwd: REPO, stdio: ['ignore', 'pipe', 'pipe'] });
    let out = ''; let err = '';
    c.stdout.on('data', (d) => { out += d; }); c.stderr.on('data', (d) => { err += d; });
    c.on('close', (code) => resolve({ code, out, err }));
  });
  try {
    const imp = await run('import-unreal-level.mjs', ['--level', id, '--manifest', `levels/${id}/unreal/kit-manifest.json`]);
    assert.equal(imp.code, 0, imp.err);
    const impResult = JSON.parse(imp.out.trim().split('\n').pop());
    assert.equal(impResult.nextBaker, 'unreal');

    const bake = await run('bake-level.mjs', ['--level', id, '--baker', 'unreal']);
    assert.equal(bake.code, 0, bake.err);
    const result = JSON.parse(bake.out.trim().split('\n').pop());
    assert.equal(result.ok, true, JSON.stringify(result));
    assert.equal(result.lightmap, true, 'the adopted lightmap shipped');
    assert.equal(result.dynamic, 2, 'the dyn_ drum and the bb_ card');
    assert.ok(result.colliders >= 2, `colliders: ${result.colliders}`);
    assert.equal(impResult.sky.source, 'sidecar');
    assert.equal(result.verify.ok, true, JSON.stringify(result.verify.failures));

    const { loadLevelHeadless } = await import('../../packages/level-runtime/src/node.js');
    const level = await loadLevelHeadless(path.join(levelDir, 'build', 'level.glb'));
    assert.equal(level.manifest.lightmap.bakedLights, true);
    assert.equal(level.manifest.spawns[0].team, 'red');
    assert.equal(level.manifest.lights.find((l) => l.role === 'moon')?.type, 'directional');
    const drum = level.manifest.dynamic.find((d) => d.placement === 'dyn-drum-b');
    assert.equal(drum.colliders[0].type, 'cylinder');
    const card = level.manifest.dynamic.find((d) => d.placement === 'bb-tower');
    assert.equal(card.billboard, 'yaw');
    assert.deepEqual(card.colliders, [], 'the manifest ships no collider for a billboard');
    const ladderEntry = level.manifest.colliders.find((c) => c.placement === 'ladder-fire');
    assert.deepEqual(ladderEntry?.tags, ['ladder'], 'the ladder tag reaches the manifest collider entry');
    assert.equal(level.colliders.ladders.length, 1, 'and the runtime lists it');
    assert.equal(level.colliders.ladders[0].placement, 'ladder-fire');
    assert.ok(level.colliders.ladders[0].bounds.max[1] > level.colliders.ladders[0].bounds.min[1] + 2.9, 'the volume spans the ladder');
    assert.ok(level.manifest.sky?.base, 'the sidecar sky reached the manifest');
    assert.equal(level.manifest.sky.base.projection, 'cube', 'a panoramic source ships as a cubemap');
    assert.ok(level.manifest.sky.clouds && level.manifest.sky.stars);
    assert.equal(level.manifest.sky.stars.density, 2);
    const moon = level.manifest.lights.find((l) => l.role === 'moon');
    assert.equal(moon.shadow.softDeg, 6);
    level.dispose();
  } finally {
    await fs.rm(levelDir, { recursive: true, force: true });
  }
});
