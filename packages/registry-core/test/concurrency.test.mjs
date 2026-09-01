/**
 * The load-bearing test.
 *
 * The registry is written by the Express server AND by host-side generation
 * skills, concurrently. If lost updates are possible here, every score and every
 * attempt record downstream is untrustworthy. So this is tested first, before
 * anything is built on top of it.
 *
 * The registry is a DIRECTORY of `<id>/thaikit.json` records now; the fixtures
 * and assertions look at that tree.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

async function makeTempModels() {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'thaikit-test-'));
  return path.join(dir, 'models');
}

const recordOf = (modelsDir, id) => path.join(modelsDir, id, 'thaikit.json');
const readRecord = async (modelsDir, id) => JSON.parse(await fs.readFile(recordOf(modelsDir, id), 'utf8'));

function assetFixture(id) {
  const now = new Date().toISOString();
  return {
    id,
    name: id,
    nameTh: '',
    description: '',
    category: 'test',
    tags: [],
    prompts: { image: 'x', imageBase: 'x', texture: '', styleProfileId: 'p' },
    budgetClass: 'small',
    scale: {
      declared: { w: 1, h: 1, d: 1 },
      measured: null,
      primaryAxis: 'h',
      tolerance: 0.1,
    },
    pivot: 'base-center',
    placement: ['floor'],
    physics: { enabled: false, massKg: null },
    destructionGroups: [],
    status: { image: 'pending', model: 'pending' },
    image: null,
    model: {},
    license: {},
    hidden: false,
    notes: '',
    createdAt: now,
    updatedAt: now,
  };
}

test('serialization is stable regardless of input key or asset order', async () => {
  const { serializeRegistry, serializeAsset } = await import('../src/hash.js');
  const base = {
    schemaVersion: 1,
    updatedAt: '2026-01-01T00:00:00.000Z',
    license: 'MIT',
    assets: [assetFixture('zebra'), assetFixture('apple')],
  };
  const shuffled = { ...base, assets: [...base.assets].reverse() };
  assert.equal(serializeRegistry(base), serializeRegistry(shuffled));
  assert.match(serializeRegistry(base), /\n$/, 'must end with a trailing newline');

  const a = assetFixture('apple');
  const reversed = Object.fromEntries(Object.entries(a).reverse());
  assert.equal(serializeAsset(a, 6), serializeAsset(reversed, 6));
  assert.match(serializeAsset(a, 6), /^\{\n  "budgetClass"/, 'keys sorted, schemaVersion is not first by accident');
  assert.match(serializeAsset(a, 6), /"schemaVersion": 6/);
});

test('an invalid registry is refused, not written', async () => {
  const modelsDir = await makeTempModels();
  const { updateRegistry, ValidationError } = await import('../src/store.js');

  await assert.rejects(
    () =>
      updateRegistry((r) => {
        r.assets.push({ id: 'NOT A SLUG', name: 'bad' });
        return r;
      }, { modelsDir }),
    ValidationError,
  );

  const entries = await fs.readdir(modelsDir);
  assert.deepEqual(entries.filter((e) => !e.startsWith('.')), [], 'the bad write must not have landed');
});

test('concurrent writers from separate processes lose no updates', async () => {
  const modelsDir = await makeTempModels();
  const WRITERS = 6;
  const WRITES_EACH = 12;

  const workerSrc = `
    import { updateRegistry } from ${JSON.stringify(path.join(here, '../src/store.js'))};
    const [modelsDir, tag, count] = process.argv.slice(2);
    const fixture = ${assetFixture.toString()};
    for (let i = 0; i < Number(count); i++) {
      await updateRegistry((r) => {
        r.assets.push(fixture(\`\${tag}-\${i}\`));
        return r;
      }, { modelsDir });
    }
    process.exit(0);
  `;
  const workerPath = path.join(path.dirname(modelsDir), 'writer.mjs');
  await fs.writeFile(workerPath, workerSrc);

  await Promise.all(
    Array.from({ length: WRITERS }, (_, w) =>
      new Promise((resolve, reject) => {
        const child = fork(workerPath, [modelsDir, `w${w}`, String(WRITES_EACH)], {
          stdio: 'pipe',
        });
        let stderr = '';
        child.stderr.on('data', (d) => (stderr += d));
        child.on('exit', (code) =>
          code === 0 ? resolve() : reject(new Error(`writer ${w} failed: ${stderr}`)),
        );
      }),
    ),
  );

  const { readRegistry } = await import('../src/store.js');
  const onDisk = await readRegistry({ modelsDir });
  assert.equal(onDisk.assets.length, WRITERS * WRITES_EACH, 'every concurrent write must survive');
  const ids = new Set(onDisk.assets.map((a) => a.id));
  assert.equal(ids.size, WRITERS * WRITES_EACH, 'no duplicate or clobbered ids');
  for (const id of ids) {
    const rec = await readRecord(modelsDir, id);
    assert.equal(rec.id, id, 'each record sits in the directory named after it');
    assert.equal(rec.schemaVersion, 6);
  }
});

test('If-Match mismatch raises a conflict instead of clobbering', async () => {
  const modelsDir = await makeTempModels();
  const { updateRegistry, ConflictError } = await import('../src/store.js');

  const first = await updateRegistry((r) => {
    r.assets.push(assetFixture('alpha'));
    return r;
  }, { modelsDir });

  // Someone else writes, invalidating the ETag we are holding.
  await updateRegistry((r) => {
    r.assets.push(assetFixture('beta'));
    return r;
  }, { modelsDir });

  await assert.rejects(
    () => updateRegistry((r) => r, { modelsDir, ifMatch: first.etag }),
    ConflictError,
  );
});

test('no stray temp files survive a completed write', async () => {
  const modelsDir = await makeTempModels();
  const { updateRegistry } = await import('../src/store.js');
  await updateRegistry((r) => {
    r.assets.push(assetFixture('gamma'));
    return r;
  }, { modelsDir });

  const entries = await fs.readdir(path.join(modelsDir, 'gamma'));
  assert.equal(entries.filter((e) => e.includes('.tmp-')).length, 0, 'temp files must be renamed away, not left behind');
});

test('updateAsset writes exactly one record and leaves the others untouched', async () => {
  const modelsDir = await makeTempModels();
  const { updateRegistry, updateAsset, readRegistry } = await import('../src/store.js');
  await updateRegistry((r) => {
    r.assets.push(assetFixture('a'), assetFixture('b'));
    return r;
  }, { modelsDir });
  const bBefore = await fs.stat(recordOf(modelsDir, 'b'));
  const aBefore = await readRecord(modelsDir, 'a');
  await new Promise((r) => setTimeout(r, 20));

  const { asset } = await updateAsset('a', (x) => ({ ...x, notes: 'edited' }), { modelsDir });
  assert.equal(asset.notes, 'edited');
  assert.notEqual(asset.updatedAt, aBefore.updatedAt, 'a changed record gets a fresh updatedAt');

  const bAfter = await fs.stat(recordOf(modelsDir, 'b'));
  assert.equal(bAfter.mtimeMs, bBefore.mtimeMs, 'the untouched record must not be rewritten');
  const onDisk = await readRegistry({ modelsDir });
  assert.equal(onDisk.assets.find((x) => x.id === 'a').notes, 'edited');
});

test('removing an asset deletes only its record, never its sibling files', async () => {
  const modelsDir = await makeTempModels();
  const { updateRegistry } = await import('../src/store.js');
  await updateRegistry((r) => {
    r.assets.push(assetFixture('a'));
    return r;
  }, { modelsDir });
  await fs.writeFile(path.join(modelsDir, 'a', 'preview.jpg'), 'not really a jpeg');

  const { deleted } = await updateRegistry((r) => ({ ...r, assets: [] }), { modelsDir });
  assert.deepEqual(deleted, ['a']);
  await assert.rejects(fs.access(recordOf(modelsDir, 'a')));
  await fs.access(path.join(modelsDir, 'a', 'preview.jpg'));
});

test('a record whose id disagrees with its directory is refused by name', async () => {
  const modelsDir = await makeTempModels();
  const { readRegistry, ValidationError, serializeAsset } = await import('../src/index.js');
  await fs.mkdir(path.join(modelsDir, 'foo'), { recursive: true });
  await fs.writeFile(recordOf(modelsDir, 'foo'), serializeAsset(assetFixture('bar'), 6));
  await assert.rejects(() => readRegistry({ modelsDir }), (err) => {
    assert.ok(err instanceof ValidationError);
    assert.match(err.message, /foo/);
    assert.match(err.message, /bar/);
    return true;
  });
});

test('a record written by an older schema is refused with the migration hint', async () => {
  const modelsDir = await makeTempModels();
  const { readRegistry, ValidationError, serializeAsset } = await import('../src/index.js');
  await fs.mkdir(path.join(modelsDir, 'old'), { recursive: true });
  await fs.writeFile(recordOf(modelsDir, 'old'), serializeAsset(assetFixture('old'), 5));
  await assert.rejects(() => readRegistry({ modelsDir }), (err) => {
    assert.ok(err instanceof ValidationError);
    assert.match(err.message, /schemaVersion 5/);
    assert.match(err.message, /migrateRegistry/);
    return true;
  });
});

test('migrateRegistry hands over raw records and rewrites every one it is given', async () => {
  const modelsDir = await makeTempModels();
  const { migrateRegistry, readRegistry, serializeAsset } = await import('../src/index.js');
  await fs.mkdir(path.join(modelsDir, 'old'), { recursive: true });
  const legacy = { ...assetFixture('old'), collider: 'box' };
  await fs.writeFile(recordOf(modelsDir, 'old'), serializeAsset(legacy, 5));

  await migrateRegistry(({ assets }) => {
    assert.equal(assets.length, 1);
    assert.equal(assets[0].dir, 'old');
    assert.equal(assets[0].raw.schemaVersion, 5);
    const { collider: _c, schemaVersion: _v, ...rest } = assets[0].raw;
    return { assets: [{ ...rest, notes: 'migrated' }] };
  }, { modelsDir });

  const after = await readRegistry({ modelsDir });
  assert.equal(after.assets[0].notes, 'migrated');
  assert.equal((await readRecord(modelsDir, 'old')).schemaVersion, 6);
});

test('ids parse bare or qualified and resolve to their own root', async () => {
  const { parseId, qualifiedId, modelDir, workDir, rootFor, MODELS_DIR, ADOPTED_DIR, namespaceOfRoot, storeOptionsFor } = await import('../src/index.js');
  assert.deepEqual(parseId('oil-drum'), { ns: '@thai-kit', name: 'oil-drum', own: true, ref: '@thai-kit/oil-drum' });
  assert.deepEqual(parseId('@scifi-kit/crate'), { ns: '@scifi-kit', name: 'crate', own: false, ref: '@scifi-kit/crate' });
  assert.equal(qualifiedId('@thai-kit', 'oil-drum'), 'oil-drum');
  assert.equal(qualifiedId('@scifi-kit', 'crate'), '@scifi-kit/crate');
  assert.equal(modelDir('oil-drum'), path.join(MODELS_DIR, 'oil-drum'));
  assert.equal(modelDir('@scifi-kit/crate'), path.join(ADOPTED_DIR, '@scifi-kit', 'models', 'crate'));
  assert.equal(rootFor('@scifi-kit'), path.join(ADOPTED_DIR, '@scifi-kit', 'models'));
  assert.equal(namespaceOfRoot(rootFor('@scifi-kit')), '@scifi-kit');
  assert.equal(namespaceOfRoot(MODELS_DIR), '@thai-kit');
  assert.equal(storeOptionsFor('@scifi-kit/crate').modelsDir, rootFor('@scifi-kit'));
  assert.ok(workDir('@scifi-kit/crate').endsWith(path.join('@scifi-kit', 'crate')));
  for (const bad of ['../x', '@scifi-kit', '@scifi-kit/../x', 'Oil Drum', '@Scifi/crate', 'a/b']) {
    assert.throws(() => parseId(bad), new RegExp('not a'), bad);
  }
});

test('updateAsset and readAsset on a qualified id act on the adopted root', async () => {
  // paths.js reads THAIKIT_ADOPTED_DIR at import time and every module shares
  // the one instance, so the check runs in a child pointed at a temp dir --
  // never at the repo's real adopted/ tree.
  const adopted = await fs.mkdtemp(path.join(os.tmpdir(), 'thaikit-adopted-'));
  const script = `
    import assert from 'node:assert/strict';
    const mod = await import(${JSON.stringify(new URL('../src/index.js', import.meta.url).href)});
    const fixture = ${JSON.stringify(assetFixture('crate'))};
    const root = mod.rootFor('@scifi-kit');
    assert.ok(root.startsWith(${JSON.stringify(adopted)}), root);
    await mod.updateRegistry((r) => ({ ...r, assets: [fixture] }), { modelsDir: root });
    const { asset } = await mod.updateAsset('@scifi-kit/crate', (a) => ({ ...a, notes: 'adopted' }));
    assert.equal(asset.notes, 'adopted');
    const read = await mod.readAsset('@scifi-kit/crate');
    assert.equal(read.pack, '@scifi-kit');
    assert.equal(read.notes, 'adopted');
    assert.equal(await mod.readAsset('@scifi-kit/nothing'), null);
    const roots = await mod.listRoots();
    assert.deepEqual(roots.map((r) => r.ns), ['@thai-kit', '@scifi-kit']);
    const all = await mod.readAllAssets();
    assert.ok(all.some((a) => a.id === 'crate' && a.pack === '@scifi-kit'));
  `;
  try {
    const { code, stderr } = await new Promise((resolve) => {
      const child = fork('--input-type=module', ['-e', script], {
        execArgv: [],
        env: { ...process.env, THAIKIT_ADOPTED_DIR: adopted },
        stdio: ['ignore', 'ignore', 'pipe', 'ipc'],
      });
      let stderr = '';
      child.stderr.on('data', (d) => (stderr += d));
      child.on('exit', (code) => resolve({ code, stderr }));
    });
    assert.equal(code, 0, stderr);
  } finally {
    await fs.rm(adopted, { recursive: true, force: true });
  }
});
