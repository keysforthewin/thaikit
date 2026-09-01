/**
 * Adopting a third-party pack into a source tree of its own, and forking an
 * item out of it (docs/adopting-packs.md).
 *
 * registry-core reads THAIKIT_ADOPTED_DIR / THAIKIT_MODELS_DIR / THAIKIT_LEVELS_DIR
 * once, at import time, and every module here imports it -- so the suite runs
 * in a CHILD process launched with those pointed at temp directories, and the
 * parent's one test is that the child passed. Never let these tests touch the
 * real adopted/ tree: the first version did, and left a stray pack behind.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(import.meta.url);
const CHILD = process.env.THAIKIT_ADOPT_TEST_CHILD === '1';

if (!CHILD) {
  test('adoption and fork suite (isolated process)', async () => {
    const base = await fs.mkdtemp(path.join(os.tmpdir(), 'thaikit-adopt-suite-'));
    try {
      const env = {
        ...process.env,
        THAIKIT_ADOPT_TEST_CHILD: '1',
        THAIKIT_ADOPTED_DIR: path.join(base, 'adopted'),
        THAIKIT_MODELS_DIR: path.join(base, 'models'),
        THAIKIT_LEVELS_DIR: path.join(base, 'levels'),
        THAIKIT_SCRATCH_DIR: path.join(base, 'scratch'),
      };
      const { code, out } = await new Promise((resolve) => {
        const child = spawn(process.execPath, ['--test', here], { env, stdio: ['ignore', 'pipe', 'pipe'] });
        let out = '';
        child.stdout.on('data', (d) => (out += d));
        child.stderr.on('data', (d) => (out += d));
        child.on('exit', (code) => resolve({ code, out }));
      });
      const failed = out.split('\n').filter((l) => /^\s*not ok/.test(l));
      assert.equal(code, 0, `child suite failed:\n${out.split('\n').filter((l) => /not ok|Error|error:|expected|actual|at /.test(l)).slice(0, 40).join('\n')}`);
      assert.equal(failed.length, 0);
    } finally {
      await fs.rm(base, { recursive: true, force: true });
    }
  });
}

const suite = CHILD ? test : () => {};

async function freshModules() {
  const core = await import('@thaikit/registry-core');
  const adopt = await import('./packs/adopt.mjs');
  const fork = await import('./packs/fork.mjs');
  const tree = await import('./packs/tree.mjs');
  return { core, adopt, fork, tree };
}

const file = (target, content) => ({ path: target, target, content, hash: null });

/** A pack laid out the way real ones are: `{models}/<kit>/<name>/`, a shared lib, a vibe3d helper. */
function sampleRegistry() {
  return {
    schemaVersion: 2,
    namespace: '@toy-kit',
    name: 'Toy Kit',
    description: 'a test pack',
    license: 'MIT',
    defaultItem: 'kit',
    compatibility: { vibe3d: '^0.0.1', engine: 'three', three: '>=0.185.0', capabilities: [] },
    items: [
      {
        name: 'core', type: 'vibe3d:lib', title: 'core', description: 'shared', dependencies: [], registryDependencies: [],
        files: [
          file('{models}/toy-kit/core/index.ts', "export * from './random.ts'\nexport { helper } from '@vibe3d/toy-kit/helper.ts'\n"),
          file('{models}/toy-kit/core/random.ts', 'export const rnd = () => 4\n'),
          file('{vibe3d}/toy-kit/helper.ts', "import type { ModelInstance } from '@vibe3d/model.ts'\nexport const helper = 1\n"),
        ],
        artifacts: [],
      },
      {
        name: 'cube', type: 'vibe3d:model', title: 'Cube', description: 'a cube', dependencies: ['three@>=0.185.0'], registryDependencies: ['@toy-kit/core'],
        files: [file('{models}/toy-kit/cube/model.ts', "import { Group } from 'three'\nimport { rnd } from '../core/index.ts'\nexport function createModel() { const g = new Group(); g.userData.n = rnd(); return g }\n")],
        artifacts: [{ path: 'x', target: '{models}/toy-kit/cube/maps/albedo.png', mediaType: 'image/png', encoding: 'base64', content: Buffer.from('png!').toString('base64'), hash: null, byteLength: 4 }],
        meta: { title: 'Cube', description: 'a cube', category: 'Toys', tags: ['toy'], controls: {}, materialSlots: [], parts: [], sockets: [] },
      },
      { name: 'kit', type: 'vibe3d:kit', title: 'kit', description: 'all', dependencies: [], registryDependencies: ['@toy-kit/cube'], files: [], artifacts: [] },
    ],
  };
}

suite('computePrefix finds the shared kit prefix and rejects a misnamed item directory', async () => {
  const { adopt } = await freshModules();
  const reg = sampleRegistry();
  assert.deepEqual(adopt.computePrefix(reg), { prefix: 'toy-kit', problems: [] });
  assert.equal(adopt.rewriteTarget('{models}/toy-kit/cube/model.ts', 'toy-kit'), '{models}/cube/model.ts');
  assert.equal(adopt.rewriteTarget('{vibe3d}/toy-kit/helper.ts', 'toy-kit'), '{vibe3d}/toy-kit/helper.ts');
  assert.equal(adopt.rewriteTarget('{models}/cube/model.ts', ''), '{models}/cube/model.ts');

  reg.items[1].files[0].target = '{models}/toy-kit/box/model.ts';
  const { problems } = adopt.computePrefix(reg);
  assert.equal(problems.length, 1);
  assert.match(problems[0], /cube: its files live under/);
});

suite('adoptRegistry writes a prefix-free tree with a manifest; upgrade keeps records and drops stale files', async () => {
  const { core, adopt } = await freshModules();
  const root = core.ADOPTED_DIR;
  await fs.rm(root, { recursive: true, force: true });
  try {
    const reg = sampleRegistry();
    const done = await adopt.adoptRegistry({ registry: reg, ns: '@toy-kit', version: '1.0.0', source: 'npm:@toy-kit/registry@latest', license: 'MIT' });
    assert.equal(done.files, 4);
    assert.equal(done.artifacts, 1);
    const packDir = path.join(root, '@toy-kit');
    assert.equal(done.root, packDir);
    for (const rel of ['models/cube/model.ts', 'models/cube/maps/albedo.png', 'models/core/index.ts', 'vibe3d/toy-kit/helper.ts', 'pack.json']) {
      await fs.access(path.join(packDir, rel));
    }
    const manifest = await adopt.readManifest(packDir);
    assert.equal(manifest.prefix, 'toy-kit');
    assert.equal(manifest.upstream.version, '1.0.0');
    assert.deepEqual(manifest.items.find((i) => i.name === 'cube').dir, 'models/cube');
    assert.equal(core.rootFor('@toy-kit'), path.join(packDir, 'models'));

    // A record beside the item, as the installer would write after probing.
    const record = adopt.recordForAdopted({ ns: '@toy-kit', manifest, item: manifest.items.find((i) => i.name === 'cube'), probe: { supported: true, size: { w: 1, h: 2, d: 1 }, stats: { triangles: 12 }, sockets: [], pivots: [] }, entryRel: 'adopted/@toy-kit/models/cube/model.ts', budgetClass: 'small' });
    const parsed = core.AssetSchema.safeParse(record);
    assert.ok(parsed.success, JSON.stringify(parsed.error?.issues));
    assert.equal(parsed.data.category, 'toys');
    assert.equal(parsed.data.status.image, 'pending');
    await core.updateRegistry((r) => ({ ...r, assets: [record] }), { modelsDir: core.rootFor('@toy-kit') });
    assert.equal((await core.readAsset('@toy-kit/cube')).pack, '@toy-kit');

    // Edit a file, then upgrade: divergence is reported, records survive, a dropped file goes.
    await fs.writeFile(path.join(packDir, 'models/cube/model.ts'), '// edited\n');
    const edits = await adopt.divergence(packDir);
    assert.deepEqual(edits.map((e) => e.target), ['{models}/cube/model.ts']);
    const next = sampleRegistry();
    next.items[0].files = next.items[0].files.filter((f) => !f.target.endsWith('random.ts'));
    const up = await adopt.adoptRegistry({ registry: next, ns: '@toy-kit', version: '1.1.0', source: 'npm:@toy-kit/registry@latest' }, { mode: 'replace' });
    assert.equal(up.removed, 1);
    await assert.rejects(fs.access(path.join(packDir, 'models/core/random.ts')));
    assert.match(await fs.readFile(path.join(packDir, 'models/cube/model.ts'), 'utf8'), /createModel/);
    assert.equal((await core.readAsset('@toy-kit/cube')).id, 'cube');
    await assert.rejects(adopt.adoptRegistry({ registry: next, ns: '@toy-kit', version: '1.1.0', source: 'x' }), /already adopted/);
  } finally {
    await fs.rm(root, { recursive: true, force: true });
  }
});

suite('registryFromAdopted reads the tree back, records overriding meta and hiding items', async () => {
  const { core, adopt, tree } = await freshModules();
  const root = core.ADOPTED_DIR;
  await fs.rm(root, { recursive: true, force: true });
  try {
    await adopt.adoptRegistry({ registry: sampleRegistry(), ns: '@toy-kit', version: '1.0.0', source: 'npm:x' });
    const packDir = path.join(root, '@toy-kit');
    let out = await tree.registryFromTree(packDir);
    assert.equal(out.registry.namespace, '@toy-kit');
    assert.equal(out.tree, core.toRepoRelative(path.join(packDir, 'models')));
    const cube = out.registry.items.find((i) => i.name === 'cube');
    assert.ok(cube.files.some((f) => f.target === '{models}/cube/model.ts' && typeof f.src === 'string'));
    assert.ok(cube.artifacts.some((a) => a.target === '{models}/cube/maps/albedo.png'));
    assert.ok(out.registry.items.find((i) => i.name === 'core').files.some((f) => f.target === '{models}/core/index.ts'));
    assert.deepEqual(out.registry.items.find((i) => i.name === 'kit').registryDependencies, ['@toy-kit/cube']);

    const manifest = await adopt.readManifest(packDir);
    const record = adopt.recordForAdopted({ ns: '@toy-kit', manifest, item: manifest.items[1], probe: { supported: true, size: { w: 1, h: 1, d: 1 }, stats: {} }, entryRel: 'x/model.ts', budgetClass: 'small' });
    record.name = 'Renamed Cube';
    record.category = 'building-part';
    await core.updateRegistry((r) => ({ ...r, assets: [record] }), { modelsDir: core.rootFor('@toy-kit') });
    out = await tree.registryFromTree(packDir);
    const c2 = out.registry.items.find((i) => i.name === 'cube');
    assert.equal(c2.title, 'Renamed Cube');
    assert.equal(c2.meta.category, 'Building Part');
    assert.ok(c2.files.some((f) => f.target === '{models}/cube/thaikit.json'));

    await core.updateAsset('@toy-kit/cube', (a) => ({ ...a, hidden: true }));
    out = await tree.registryFromTree(packDir);
    assert.ok(!out.registry.items.some((i) => i.name === 'cube'));
  } finally {
    await fs.rm(root, { recursive: true, force: true });
  }
});

suite('forkItem moves an item into the own tree, vendors what it imports, and rewrites level refs', async () => {
  const { core, adopt, fork } = await freshModules();
  const adopted = core.ADOPTED_DIR;
  const models = core.MODELS_DIR;
  const levels = core.LEVELS_DIR;
  for (const d of [adopted, models, levels]) await fs.rm(d, { recursive: true, force: true });
  try {
    await adopt.adoptRegistry({ registry: sampleRegistry(), ns: '@toy-kit', version: '1.0.0', source: 'npm:x' });
    const packDir = path.join(adopted, '@toy-kit');
    const manifest = await adopt.readManifest(packDir);
    const record = adopt.recordForAdopted({ ns: '@toy-kit', manifest, item: manifest.items[1], probe: { supported: true, size: { w: 1, h: 1, d: 1 }, stats: {} }, entryRel: core.toRepoRelative(path.join(packDir, 'models/cube/model.ts')), budgetClass: 'small' });
    await core.updateRegistry((r) => ({ ...r, assets: [record] }), { modelsDir: core.rootFor('@toy-kit') });

    // A level that places the item.
    const { buildGlb } = await import('./glb.mjs');
    const json = { asset: { version: '2.0' }, scene: 0, scenes: [{ nodes: [0], extras: { thaikitLevel: { packs: [{ id: '@toy-kit', version: '1.0.0', source: null }] } } }], nodes: [{ name: 'p1', extras: { tk: { kind: 'placement', ref: '@toy-kit/cube', version: 'abc' } } }] };
    await fs.mkdir(path.join(levels, 'l1'), { recursive: true });
    await fs.writeFile(path.join(levels, 'l1', 'level.glb'), buildGlb(json, null));

    const dry = await fork.forkItem('@toy-kit/cube', { dryRun: true });
    assert.equal(dry.to, '@thai-kit/cube');
    assert.deepEqual(dry.levels, [{ level: 'l1', rewritten: 1 }]);
    await fs.access(path.join(packDir, 'models/cube/model.ts'));

    const result = await fork.forkItem('@toy-kit/cube');
    assert.equal(result.dir, core.toRepoRelative(path.join(models, 'cube')));
    const moved = await fs.readFile(path.join(models, 'cube', 'model.ts'), 'utf8');
    assert.match(moved, /from '\.\/_vendor\/models\/core\/index\.ts'/);
    assert.ok(result.vendored.some((v) => v.endsWith('_vendor/models/core/index.ts')));
    assert.ok(result.vendored.some((v) => v.endsWith('_vendor/models/core/random.ts')), 'transitive relative import vendored');
    assert.ok(result.vendored.some((v) => v.endsWith('_vendor/vibe3d/toy-kit/helper.ts')), '@vibe3d alias vendored');
    const vendoredIndex = await fs.readFile(path.join(models, 'cube', '_vendor/models/core/index.ts'), 'utf8');
    assert.match(vendoredIndex, /from '\.\/random\.ts'/, 'vendored -> vendored specifier untouched');
    assert.match(vendoredIndex, /from '\.\.\/\.\.\/vibe3d\/toy-kit\/helper\.ts'/, '@vibe3d rewritten relative to the vendored copy');
    const helper = await fs.readFile(path.join(models, 'cube', '_vendor/vibe3d/toy-kit/helper.ts'), 'utf8');
    assert.match(helper, /from '@vibe3d\/model\.ts'/, 'runtime template import left alone');
    await fs.access(path.join(models, 'cube', 'maps', 'albedo.png'));
    await assert.rejects(fs.access(path.join(packDir, 'models/cube')));

    const own = await core.readRegistry({ modelsDir: models });
    assert.equal(own.assets.length, 1);
    assert.deepEqual(own.assets[0].forkedFrom, { ref: '@toy-kit/cube', version: '1.0.0', hash: own.assets[0].forkedFrom.hash });
    assert.equal(own.assets[0].forkedFrom.hash.length, 64);
    assert.equal(own.assets[0].model.source, core.toRepoRelative(path.join(models, 'cube', 'model.ts')));
    assert.equal((await core.readRegistry({ modelsDir: core.rootFor('@toy-kit') })).assets.length, 0);

    const { parseGlb } = await import('./glb.mjs');
    const after = parseGlb(await fs.readFile(path.join(levels, 'l1', 'level.glb'))).json;
    assert.equal(after.nodes[0].extras.tk.ref, '@thai-kit/cube');
    assert.ok(after.scenes[0].extras.thaikitLevel.packs.some((p) => p.id === '@thai-kit'));

    await assert.rejects(fork.forkItem('cube'), /thaikit's own/);
  } finally {
    for (const d of [adopted, models, levels]) await fs.rm(d, { recursive: true, force: true });
  }
});
