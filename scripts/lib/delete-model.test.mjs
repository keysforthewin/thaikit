import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const repo = fileURLToPath(new URL('../../', import.meta.url));
const script = path.join(repo, 'scripts/delete-model.mjs');
async function fixture(t, { adopted = false } = {}) {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'thaikit-reset-'));
  t.after(() => fs.rm(root, { recursive: true, force: true }));
  const ns = adopted ? '@test-kit' : '@thai-kit';
  const id = adopted ? `${ns}/oil-drum` : 'oil-drum';
  const model = adopted ? `adopted/${ns}/models/oil-drum` : 'packages/props/src/models/oil-drum';
  const scratch = adopted ? `scratch/${ns}/oil-drum` : 'scratch/oil-drum';
  const write = async (rel, data = 'old generated work') => {
    await fs.mkdir(path.dirname(path.join(root, rel)), { recursive: true });
    await fs.writeFile(path.join(root, rel), typeof data === 'object' ? JSON.stringify(data) : data);
  };
  const read = async (rel) => JSON.parse(await fs.readFile(path.join(root, rel), 'utf8'));
  const has = async (rel) => fs.access(path.join(root, rel)).then(() => true, () => false);
  const asset = JSON.parse(await fs.readFile(path.join(repo, 'packages/props/src/models/oil-drum/thaikit.json'), 'utf8'));
  asset.model.state = 'scratch/custom-run/.img2threejs/state.json';
  asset.model.reference.glb = `${scratch}/reference.glb`;
  asset.scale.measured = { w: 1, h: 2, d: 1 };
  await write(`${model}/thaikit.json`, asset);
  await write(`${path.dirname(model)}/oil-drum-large/thaikit.json`, { ...asset, id: 'oil-drum-large' });
  await write(`${model}/preview.jpg`, 'original image');
  for (const file of ['createObjectModel.ts', 'model.ts', 'helper.ts', 'maps/paint.png', '.cache/module_cache.json', 'reference.glb', 'colliders.json']) await write(`${model}/${file}`);
  for (const file of ['reference.glb', '.img2threejs/state.json', '.cache/module_cache.json', 'src/createObjectModel.ts']) await write(`${scratch}/${file}`);
  await write('scratch/custom-run/.img2threejs/state.json', {});
  const archive = `scratch/_deleted/${adopted ? `${ns}/` : ''}oil-drum-2026-09-11T01-04-40-210Z`;
  await write(`${archive}/reference.glb`);
  await write('scratch/_deleted/oil-drum-large-2026-09-11T01-04-40-210Z/keep');
  await write('scratch/unrelated/keep');
  const shared = adopted ? `scratch/${ns}/_veh` : 'scratch/_veh';
  await write(`${shared}/oil-drum.v1.mjs.bak`);
  await write(`${shared}/oil-drum.mjs`);
  await write(`${shared}/other.mjs`);
  await write(`${shared}/oil-drum-oldplate/reference.glb`);
  for (const tag of ['old', 'current', 'orphan']) {
    await write(`packs/${ns}/${tag}/oil-drum/model.bundle.js`);
    await write(`packs/${ns}/${tag}/other/model.bundle.js`);
  }
  const items = [{ name: 'oil-drum', role: 'model' }, { name: 'other', role: 'model', registryDependencies: [`${ns}/oil-drum`] }];
  await write('packs/index.json', { schemaVersion: 1, packs: [{ id: ns, buildTag: 'current', items }] });
  await write('packages/props/dist/registry.json', { namespace: ns, items });
  await write('exports/unreal/manifest.json', { items: [{ ref: `${ns}/oil-drum`, file: 'Kit/Drum.glb' }, { ref: `${ns}/other`, file: 'Kit/Other.glb' }] });
  await write('exports/unreal/Kit/Drum.glb');
  await write('exports/unreal/_previews/Kit/Drum.webp');
  await write('exports/unreal/Kit/Other.glb');
  const run = (...args) => JSON.parse(execFileSync(process.execPath, [script, '--id', id, ...args], {
    cwd: repo, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, THAIKIT_REPO_ROOT: root, THAIKIT_MODELS_DIR: path.join(root, 'packages/props/src/models'),
      THAIKIT_ADOPTED_DIR: path.join(root, 'adopted'), THAIKIT_SCRATCH_DIR: path.join(root, 'scratch'),
      THAIKIT_PACKS_DIR: path.join(root, 'packs'), THAIKIT_UNREAL_EXPORT_DIR: path.join(root, 'exports/unreal') },
  }));
  return { root, model, scratch, archive, asset, ns, write, read, has, run };
}

for (const adopted of [false, true]) test(`full reset preserves image and unrelated work (${adopted ? 'adopted' : 'own'})`, async (t) => {
  const f = await fixture(t, { adopted });
  const before = await fs.readFile(path.join(f.root, f.model, 'thaikit.json'), 'utf8');
  assert.equal(f.run('--dry-run').ok, true);
  assert.equal(await fs.readFile(path.join(f.root, f.model, 'thaikit.json'), 'utf8'), before);
  assert.equal(await f.has(`${f.scratch}/reference.glb`), true);
  assert.equal(f.run().ok, true);
  const shared = adopted ? `scratch/${f.ns}/_veh` : 'scratch/_veh';
  for (const file of ['oil-drum.v1.mjs.bak', 'oil-drum.mjs', 'oil-drum-oldplate']) assert.equal(await f.has(`${shared}/${file}`), false);
  assert.equal(await f.has(`${shared}/other.mjs`), true);
  assert.deepEqual((await fs.readdir(path.join(f.root, f.model))).sort(), ['preview.jpg', 'thaikit.json']);
  for (const rel of [f.scratch, f.archive, 'scratch/custom-run', 'exports/unreal/Kit/Drum.glb', 'exports/unreal/_previews/Kit/Drum.webp']) assert.equal(await f.has(rel), false, rel);
  for (const tag of ['old', 'current', 'orphan']) {
    assert.equal(await f.has(`packs/${f.ns}/${tag}/oil-drum`), false);
    assert.equal(await f.has(`packs/${f.ns}/${tag}/other/model.bundle.js`), true);
  }
  for (const rel of ['scratch/unrelated/keep', 'scratch/_deleted/oil-drum-large-2026-09-11T01-04-40-210Z/keep', 'exports/unreal/Kit/Other.glb']) assert.equal(await f.has(rel), true);
  const after = await f.read(`${f.model}/thaikit.json`);
  for (const key of ['image', 'prompts', 'description', 'notes', 'physics', 'destructionGroups']) assert.deepEqual(after[key], f.asset[key]);
  assert.equal(after.status.model, 'pending');
  assert.equal(after.status.image, f.asset.status.image);
  assert.equal(after.scale.measured, null);
  assert.deepEqual(after.scale.declared, f.asset.scale.declared);
  assert.equal(after.model.state, null);
  assert.equal(after.model.reference.glb, null);
  assert.equal(after.model.reference.requestId, null);
  assert.deepEqual((await f.read('packs/index.json')).packs[0].items.map((i) => i.name), ['other']);
  assert.deepEqual((await f.read('packages/props/dist/registry.json')).items.map((i) => i.name), ['other']);
  assert.equal((await f.read('exports/unreal/manifest.json')).items.length, 1);
  assert.equal(f.run().ok, true);
});

test('invalid caches, unsafe paths and keep-scratch fail before removing the model', async (t) => {
  const f = await fixture(t);
  assert.throws(() => f.run('--keep-scratch'));
  await f.write('packs/index.json', 'invalid JSON');
  assert.throws(() => f.run());
  assert.equal(await f.has(`${f.model}/createObjectModel.ts`), true);
  await f.write('packs/index.json', { packs: [] });
  f.asset.model.state = '.img2threejs/state.json';
  await f.write(`${f.model}/thaikit.json`, f.asset);
  assert.throws(() => f.run());
  assert.equal(await f.has(`${f.model}/createObjectModel.ts`), true);
});

test('missing pack index is harmless and orphan bundles still disappear', async (t) => {
  const f = await fixture(t);
  await fs.rm(path.join(f.root, 'packs/index.json'));
  assert.equal(f.run('--purge-scratch').ok, true);
  assert.equal(await f.has(`packs/${f.ns}/old/oil-drum`), false);
});

test('ambiguous adopted legacy archive prevents a false successful reset', async (t) => {
  const f = await fixture(t, { adopted: true });
  await f.write('scratch/_deleted/oil-drum-2026-09-11T01-04-40-210Z/reference.glb');
  assert.throws(() => f.run());
  assert.equal(await f.has(`${f.model}/createObjectModel.ts`), true);
});
