#!/usr/bin/env node
/**
 * Render a baked level through the runtime package, headlessly.
 *
 * The same puppeteer arrangement render-model.mjs uses: an ephemeral static
 * server over the repo, SwiftShader flags (or renders come back black), the
 * navigation fired without awaiting (its promise never settles here) and
 * readiness polled. Reports draw calls and triangles per LOD tier and fails on
 * a frame that is no brighter than the backdrop.
 *
 *   node scripts/level/smoke-level.mjs --level <id> [--size 768] [--cell <ix>_<iz>]
 */
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import * as esbuild from 'esbuild';

import { REPO_ROOT, toRepoRelative } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from '../lib/out.mjs';
import { assertCellKey, buildDirOf } from './pipeline/build-dir.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const RENDER_DIR = path.resolve(here, '../../render');

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.wasm': 'application/wasm', '.glb': 'model/gltf-binary', '.json': 'application/json', '.png': 'image/png' };

function serveRepo() {
  return new Promise((resolve) => {
    const server = http.createServer(async (req, res) => {
      try {
        const url = new URL(req.url, 'http://x');
        const file = path.join(REPO_ROOT, decodeURIComponent(url.pathname));
        if (!file.startsWith(REPO_ROOT)) throw new Error('outside repo');
        const data = await fs.readFile(file);
        res.writeHead(200, { 'content-type': MIME[path.extname(file)] ?? 'application/octet-stream', 'cache-control': 'no-store' });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end();
      }
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

async function findChrome() {
  for (const p of [process.env.CHROME_PATH, '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser'].filter(Boolean)) {
    try { await fs.access(p); return p; } catch { /* next */ }
  }
  throw new Error('no Chrome found; set CHROME_PATH');
}

async function main() {
  const args = parseArgs();
  const id = String(args.level ?? '');
  if (!id) return fail('need --level <id>');
  const size = Number(args.size ?? 768);
  const cell = assertCellKey(args.cell ?? null);
  const glb = path.join(buildDirOf(id, cell), 'level.glb');
  await fs.access(glb);

  log('bundling harness');
  await esbuild.build({
    entryPoints: [path.join(RENDER_DIR, 'level-harness.js')],
    outfile: path.join(RENDER_DIR, 'level-harness.bundle.js'),
    bundle: true, format: 'esm', platform: 'browser', target: 'es2022', logLevel: 'silent',
  });

  const { server, port } = await serveRepo();
  const puppeteer = await import('puppeteer-core');
  const browser = await puppeteer.launch({
    executablePath: await findChrome(),
    args: ['--headless=new', '--no-sandbox', '--disable-dev-shm-usage', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: size, height: size });
    const errors = [];
    page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(m.text()); });
    page.on('pageerror', (e) => errors.push(e.message));
    const levelUrl = `/${toRepoRelative(glb)}`;
    page.goto(`http://127.0.0.1:${port}/render/level-harness.html?level=${encodeURIComponent(levelUrl)}&size=${size}${args['ibl-size'] ? `&iblSize=${Number(args['ibl-size'])}` : ''}`).catch(() => {});
    const deadline = Date.now() + 120_000;
    let result = null;
    while (Date.now() < deadline) {
      result = await page.evaluate(() => window.__smoke ?? null).catch(() => null);
      if (result?.ready) break;
      await new Promise((r) => setTimeout(r, 250));
    }
    if (!result?.ready) throw new Error(`harness never became ready; console: ${errors.slice(-5).join(' | ')}`);
    if (!result.ok) throw new Error(`runtime failed: ${result.error}\n${result.stack ?? ''}`);
    const shot = path.join(buildDirOf(id, cell), 'smoke.png');
    await page.screenshot({ path: shot });
    // Coverage, not brightness: a night level is dark by design, but a blank
    // frame (SwiftShader silently failing) has nothing in it at all.
    const blank = Object.entries(result.frames).filter(([, f]) => f.coverage < 0.01).map(([k]) => k);
    for (const [tier, f] of Object.entries(result.frames)) log(`${tier}: ${f.calls} draw calls, ${f.triangles.toLocaleString()} triangles, ${(f.coverage * 100).toFixed(1)}% of the frame, mean luma ${f.luma}`);
    log(result.environment
      ? `environment: ${result.environment.source} at ${result.environment.size}² (${result.environment.mb} MB, ${result.environment.ms} ms); level loaded in ${result.loadMs} ms`
      : `environment: none; level loaded in ${result.loadMs} ms`);
    if (blank.length) throw new Error(`frames with nothing drawn in them: ${blank.join(', ')}`);
    // The runtime warns rather than throws when three's shader source moves
    // under it, and for years nothing read those warnings -- which is how
    // `attachLightmap`'s patch could no-op in every shipped level without
    // anyone noticing. A runtime warning is a failed smoke run now.
    const runtime = errors.filter((e) => e.includes('[level-runtime]'));
    if (runtime.length) throw new Error(`the runtime warned: ${[...new Set(runtime)].join(' | ')}`);
    return ok({ level: id, ...result, screenshot: toRepoRelative(shot), consoleErrors: errors.slice(0, 10) });
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch(fail);
