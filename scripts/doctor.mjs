#!/usr/bin/env node
/**
 * Preflight. Run before a generation session so failures surface as one clear
 * report rather than as a crash six steps into a paid pipeline.
 */
import fs from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

import { REGISTRY_PATH, ASSETS_DIR, SCRATCH_DIR, readRegistry } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';
import { budgets, styleProfiles, categories } from './lib/config.mjs';
import { blenderRepoRoot, probeAddon, BLENDER_HOST, BLENDER_PORT, blenderExe } from './lib/blender.mjs';
import { findKtx, KTX_INSTALL_HINT } from './level/pipeline/ktx2.mjs';

const run = promisify(execFile);

async function check(name, fn, { fatal = false } = {}) {
  try {
    const detail = await fn();
    return { name, ok: true, detail: detail ?? null, fatal };
  } catch (err) {
    return { name, ok: false, detail: err.message, fatal };
  }
}

async function main() {
  const args = parseArgs();
  const checks = await Promise.all([
    check('node >= 22', () => {
      const major = Number(process.versions.node.split('.')[0]);
      if (major < 22) throw new Error(`node ${process.versions.node} is too old`);
      return `node ${process.versions.node}`;
    }, { fatal: true }),

    check('registry readable and valid', async () => {
      const r = await readRegistry();
      return `${r.assets.length} assets`;
    }, { fatal: true }),

    check('registry writable', async () => {
      await fs.access(REGISTRY_PATH, fs.constants.W_OK);
      return REGISTRY_PATH;
    }, { fatal: true }),

    check('assets/ and scratch/ writable', async () => {
      for (const dir of [ASSETS_DIR, SCRATCH_DIR]) {
        await fs.mkdir(dir, { recursive: true });
        await fs.access(dir, fs.constants.W_OK);
      }
      return 'ok';
    }, { fatal: true }),

    check('config files parse', async () => {
      const b = await budgets();
      const s = await styleProfiles();
      const c = await categories();
      const classes = Object.keys(b.classes).filter((k) => !k.startsWith('$'));
      return `${classes.length} budget classes, ${Object.keys(s.profiles).length} style profiles, ${Object.keys(c.categories).length} categories`;
    }, { fatal: true }),

    // img2threejs owns generation now, and every forge/ script is stdlib python.
    // A missing or ancient python is the failure that would otherwise surface
    // halfway through a paid run.
    check('python >= 3.10 (img2threejs forge scripts)', async () => {
      const { stdout } = await run('python3', ['--version']);
      const [major, minor] = stdout.trim().split(' ')[1].split('.').map(Number);
      if (major < 3 || (major === 3 && minor < 10)) {
        throw new Error(`${stdout.trim()} is too old; forge/ needs 3.10+`);
      }
      return stdout.trim();
    }, { fatal: true }),

    check('img2threejs skill installed', async () => {
      const root = process.env.IMG2THREEJS_ROOT
        ?? `${process.env.HOME}/.claude/skills/img2threejs`;
      await fs.access(`${root}/forge/next.py`);
      await fs.access(`${root}/integrations/mesh3d/generate_reference_mesh.py`);
      return root;
    }, { fatal: true }),

    check('FAL_KEY set (Meshy reference mesh + preview images)', async () => {
      if (!process.env.FAL_KEY) throw new Error('not set; copy .env.example to .env');
      return 'set';
    }),

    check('esbuild (builds the Three.js factory for the browser)', async () => {
      const esbuild = await import('esbuild');
      return `esbuild ${esbuild.version}`;
    }, { fatal: true }),

    check('sharp', async () => {
      const sharp = (await import('sharp')).default;
      await sharp({ create: { width: 8, height: 8, channels: 3, background: '#000' } }).png().toBuffer();
      return 'encodes ok';
    }, { fatal: true }),

    check('chrome for headless render', async () => {
      for (const p of [process.env.CHROME_PATH, '/usr/bin/google-chrome', '/usr/bin/chromium'].filter(Boolean)) {
        try {
          await fs.access(p);
          const { stdout } = await run(p, ['--version']).catch(() => ({ stdout: p }));
          return stdout.trim();
        } catch { /* keep looking */ }
      }
      throw new Error('no Chrome found; set CHROME_PATH. Renders and thumbnails will fail.');
    }),

    check('ktx (KTX-Software; level export texture compression)', async () => {
      const k = await findKtx();
      if (!k) throw new Error(KTX_INSTALL_HINT);
      return `${k.version} at ${k.bin}`;
    }),

    check('gltf-transform + meshoptimizer (level bake)', async () => {
      const core = await import('@gltf-transform/core');
      const { MeshoptEncoder } = await import('meshoptimizer');
      await MeshoptEncoder.ready;
      return `gltf-transform ${core.VERSION ?? 'ok'}, meshopt ok`;
    }),

    check('blender.exe (headless lightmap bake)', async () => {
      const exe = await blenderExe();
      if (!exe) throw new Error('no blender executable found; set THAIKIT_BLENDER_EXE');
      return exe;
    }),

    // Kept, but no skill is on this path any more: generation is procedural
    // Three.js code and never opens Blender. The wiring stays for ad-hoc use, so
    // a closed Blender is information, not a problem.
    check('blender addon (optional; no skill uses it)', async () => {
      const probe = await probeAddon();
      if (!probe.connected) {
        throw new Error(
          `nothing listening on ${BLENDER_HOST}:${BLENDER_PORT} (${probe.error}). ` +
            'Open Blender, N-panel -> BlenderMCP -> Connect to Claude.',
        );
      }
      return `reachable on ${probe.host}:${probe.port}; repo path for Blender: ${blenderRepoRoot()}`;
    }),
  ]);

  const failed = checks.filter((c) => !c.ok);
  const fatal = failed.filter((c) => c.fatal);

  for (const c of checks) {
    log(`${c.ok ? '  ok  ' : c.fatal ? ' FAIL ' : ' warn '} ${c.name}: ${c.detail ?? ''}`);
  }
  if (!fatal.length && failed.length) {
    log('');
    log('Optional checks failed. Blender is no longer on any skill\'s path, so a');
    log('closed Blender is expected unless you want it for ad-hoc work.');
  }
  if (fatal.length) {
    log('');
    log('Fatal problems above must be fixed before generating.');
  }

  return ok({ healthy: fatal.length === 0, checks, failed: failed.map((c) => c.name) });
}

main().catch(fail);
