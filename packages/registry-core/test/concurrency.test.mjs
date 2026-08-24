/**
 * The load-bearing test.
 *
 * The registry is written by the Express server AND by host-side generation
 * skills, concurrently. If lost updates are possible here, every score and every
 * attempt record downstream is untrustworthy. So this is tested first, before
 * anything is built on top of it.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { fork } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

async function makeTempRegistry() {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'thaikit-test-'));
  return path.join(dir, 'registry.json');
}

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
    collider: 'box',
    status: { image: 'pending', mesh: 'pending', critic: 'pending' },
    image: null,
    mesh: {},
    quality: {},
    attempts: [],
    bestAttempt: null,
    bestScore: null,
    quarantine: null,
    license: {},
    hidden: false,
    notes: '',
    createdAt: now,
    updatedAt: now,
  };
}

test('serialization is stable regardless of input key or asset order', async () => {
  const { serializeRegistry } = await import('../src/hash.js');
  const base = {
    schemaVersion: 1,
    updatedAt: '2026-01-01T00:00:00.000Z',
    license: 'MIT',
    assets: [assetFixture('zebra'), assetFixture('apple')],
  };
  const shuffled = { ...base, assets: [...base.assets].reverse() };
  assert.equal(serializeRegistry(base), serializeRegistry(shuffled));
  assert.match(serializeRegistry(base), /\n$/, 'must end with a trailing newline');
});

test('an invalid registry is refused, not written', async (t) => {
  const registryPath = await makeTempRegistry();
  process.env.THAIKIT_REGISTRY_PATH = registryPath;
  const { updateRegistry, ValidationError } = await import(
    `../src/store.js?invalid=${Date.now()}`
  );

  await assert.rejects(
    () =>
      updateRegistry((r) => {
        r.assets.push({ id: 'NOT A SLUG', name: 'bad' });
        return r;
      }, { registryPath }),
    ValidationError,
  );

  const onDisk = JSON.parse(await fs.readFile(registryPath, 'utf8'));
  assert.equal(onDisk.assets.length, 0, 'the bad write must not have landed');
});

test('concurrent writers from separate processes lose no updates', async () => {
  const registryPath = await makeTempRegistry();
  const WRITERS = 6;
  const WRITES_EACH = 12;

  const workerSrc = `
    import { updateRegistry } from ${JSON.stringify(path.join(here, '../src/store.js'))};
    const [registryPath, tag, count] = process.argv.slice(2);
    const fixture = ${assetFixture.toString()};
    for (let i = 0; i < Number(count); i++) {
      await updateRegistry((r) => {
        r.assets.push(fixture(\`\${tag}-\${i}\`));
        return r;
      }, { registryPath });
    }
    process.exit(0);
  `;
  const workerPath = path.join(path.dirname(registryPath), 'writer.mjs');
  await fs.writeFile(workerPath, workerSrc);

  await Promise.all(
    Array.from({ length: WRITERS }, (_, w) =>
      new Promise((resolve, reject) => {
        const child = fork(workerPath, [registryPath, `w${w}`, String(WRITES_EACH)], {
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

  const onDisk = JSON.parse(await fs.readFile(registryPath, 'utf8'));
  assert.equal(
    onDisk.assets.length,
    WRITERS * WRITES_EACH,
    'every concurrent write must survive',
  );
  const ids = new Set(onDisk.assets.map((a) => a.id));
  assert.equal(ids.size, WRITERS * WRITES_EACH, 'no duplicate or clobbered ids');
});

test('If-Match mismatch raises a conflict instead of clobbering', async () => {
  const registryPath = await makeTempRegistry();
  const { updateRegistry, ConflictError } = await import('../src/store.js');

  const first = await updateRegistry((r) => {
    r.assets.push(assetFixture('alpha'));
    return r;
  }, { registryPath });

  // Someone else writes, invalidating the ETag we are holding.
  await updateRegistry((r) => {
    r.assets.push(assetFixture('beta'));
    return r;
  }, { registryPath });

  await assert.rejects(
    () => updateRegistry((r) => r, { registryPath, ifMatch: first.etag }),
    ConflictError,
  );
});

test('no stray temp files survive a completed write', async () => {
  const registryPath = await makeTempRegistry();
  const { updateRegistry } = await import('../src/store.js');
  await updateRegistry((r) => {
    r.assets.push(assetFixture('gamma'));
    return r;
  }, { registryPath });

  const entries = await fs.readdir(path.dirname(registryPath));
  assert.equal(
    entries.filter((e) => e.includes('.tmp-')).length,
    0,
    'temp files must be renamed away, not left behind',
  );
});
