#!/usr/bin/env node
/**
 * Render the built Three.js model headlessly.
 *
 * Two jobs, one run. It produces the turntable img2threejs's review gates read
 * (`turntable_gate.py` wants 0/90/180/270), and the hero shot that becomes the
 * browse-grid thumbnail. Doing both at once means the picture in the UI is the
 * same picture the gates judged, rather than a second render that drifted.
 *
 * The model is a JS module, not a file format, so "measuring" it means running
 * it: triangles, draw calls and the sockets/pivots on `sculptRuntime` are read
 * off the constructed scene and returned here.
 *
 * Everything is served over a local http server. `file://` breaks ES module
 * loading (CORS), which is what the importmap in the harness needs.
 *
 * Usage:
 *   node scripts/render-model.mjs --id <id> [--module <file.js>] [--out <dir>]
 *                                 [--angles 0,90,180,270] [--modes beauty,clay]
 */
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';

import puppeteer from 'puppeteer-core';
import { REPO_ROOT, workDir, toRepoRelative, readRegistry, updateAsset } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';

const SIZE = 1024;
/** The azimuths turntable_gate.py expects, plus the 45 deg hero. */
const TURNTABLE = [0, 90, 180, 270];
const HERO = { azimuth: 45, elevation: 20 };

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.webp': 'image/webp', '.map': 'application/json',
};

async function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium', '/usr/bin/chromium-browser',
  ].filter(Boolean);
  for (const p of candidates) {
    try { await fs.access(p); return p; } catch { /* keep looking */ }
  }
  throw new Error('no Chrome found; set CHROME_PATH');
}

/** Static server rooted at the repo, so the harness and the module share an origin. */
function serve(root) {
  return new Promise((resolve) => {
    const server = http.createServer(async (req, res) => {
      const rel = decodeURIComponent(new URL(req.url, 'http://x').pathname).replace(/^\/+/, '');
      const abs = path.resolve(root, rel);
      if (!abs.startsWith(root)) { res.writeHead(403).end(); return; }
      try {
        const body = await fs.readFile(abs);
        res.writeHead(200, {
          'content-type': MIME[path.extname(abs).toLowerCase()] ?? 'application/octet-stream',
          'cache-control': 'no-store',
        }).end(body);
      } catch {
        res.writeHead(404).end('not found');
      }
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

async function main() {
  const args = parseArgs();
  const id = args.id;

  let modulePath = args.module ? path.resolve(args.module) : null;
  let exportName = args.export ?? 'createObjectModel';

  if (!modulePath) {
    if (!id) return fail('need --id or --module');
    const registry = await readRegistry();
    const asset = registry.assets.find((a) => a.id === id);
    if (!asset) return fail(`no asset with id ${id}`);
    exportName = args.export ?? asset.model.export ?? 'createObjectModel';
    const recorded = asset.model.file;
    modulePath = recorded
      ? path.resolve(REPO_ROOT, recorded)
      : path.join(workDir(id), 'model.bundle.js');
  }
  try {
    await fs.access(modulePath);
  } catch {
    return fail(
      `no built module at ${toRepoRelative(modulePath)}. ` +
        'Run scripts/build-model-module.mjs first.',
    );
  }

  const outDir = args.out
    ? path.resolve(args.out)
    : path.join(id ? workDir(id) : path.dirname(modulePath), 'renders');
  await fs.mkdir(outDir, { recursive: true });

  const angles = (args.angles ? String(args.angles).split(',').map(Number) : TURNTABLE);
  const modes = (args.modes ? String(args.modes).split(',') : ['beauty']);

  const executablePath = await findChrome();
  const { server, port } = await serve(REPO_ROOT);
  const base = `http://127.0.0.1:${port}`;

  const browser = await puppeteer.launch({
    executablePath,
    // Without SwiftShader every render comes back silently black -- a valid PNG
    // of nothing, which reads downstream as "the model is invisible".
    args: [
      '--headless=new', '--no-sandbox', '--disable-dev-shm-usage',
      '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
      '--disable-lcd-text', `--window-size=${SIZE},${SIZE}`,
    ],
  });

  const written = [];
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: SIZE, height: SIZE, deviceScaleFactor: 1 });

    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e.message ?? e)));
    page.on('console', (m) => {
      if (m.type() !== 'error') return;
      // The favicon 404 is noise every headless page produces, and its console
      // text does not name the URL -- only location() does. It is not a defect
      // in the model and must not look like one in the report.
      if (m.location()?.url?.includes('favicon')) return;
      errors.push(m.text());
    });

    const harnessUrl = `${base}/render/harness.html`;

    // Prove the URL is good from here, so a genuinely missing harness is one
    // clear line rather than a timeout that looks like a hung browser.
    const probe = await fetch(harnessUrl);
    if (!probe.ok) throw new Error(`harness not served: ${probe.status} at ${harnessUrl}`);

    // page.goto's navigation promise NEVER settles in this environment -- not on
    // 'load', not 'domcontentloaded', not 'networkidle2' -- even though the page
    // loads correctly and sets its ready flag. So do not await it. The flag at
    // the end of the harness module is the real readiness contract; wait on that
    // and let the lifecycle events be somebody else's problem.
    page.goto(harnessUrl).catch(() => {});
    await page.waitForFunction('window.__thaikitReady === true', { timeout: 60_000 });

    const moduleUrl = `${base}/${toRepoRelative(modulePath).split(path.sep).join('/')}`;
    log(`module : ${toRepoRelative(modulePath)}`);

    let stats;
    try {
      stats = await page.evaluate(
        (url, name) => window.__thaikit.load(url, name), moduleUrl, exportName);
    } catch (err) {
      throw new Error(
        `the factory failed to run: ${err.message}` +
          (errors.length ? `\n  page errors: ${errors.join(' | ')}` : ''),
      );
    }

    log(`stats  : ${stats.triangles} tris, ${stats.drawCalls} draw calls, ` +
        `${stats.materials} materials, ${stats.textures} textures`);
    if (stats.triangles === 0) {
      throw new Error('the factory produced zero triangles; there is nothing to render');
    }

    for (const mode of modes) {
      await page.evaluate((m) => window.__thaikit.setMode(m), mode);
      for (const azimuth of angles) {
        await page.evaluate((az) => window.__thaikit.setCamera(az, 20), azimuth);
        await page.evaluate(() => window.__thaikit.render());
        const name = `${mode}-${String(azimuth).padStart(3, '0')}.png`;
        await page.screenshot({ path: path.join(outDir, name) });
        written.push(name);
      }
    }

    // The hero is a separate, deliberately flattering angle: the turntable is
    // evidence, this is the tile in the grid.
    await page.evaluate((m) => window.__thaikit.setMode(m), 'beauty');
    await page.evaluate((h) => window.__thaikit.setCamera(h.azimuth, h.elevation), HERO);
    await page.evaluate(() => window.__thaikit.render());
    const luma = await page.evaluate(() => window.__thaikit.meanLuma());
    const heroName = `beauty-hero.png`;
    await page.screenshot({ path: path.join(outDir, heroName) });
    written.push(heroName);

    // A valid PNG of the background is the failure mode that looks like success.
    // The harness background is 0x3a3a3a, mean luma ~58; anything at or below it
    // means nothing was drawn.
    if (luma <= 59) {
      throw new Error(
        `render is blank (mean luma ${luma.toFixed(1)} against a ~58 background). ` +
          'Usually SwiftShader: check the --use-angle flags and CHROME_PATH.',
      );
    }
    log(`luma   : ${luma.toFixed(1)} (background ~58, so something was drawn)`);

    if (id) {
      await updateAsset(id, (asset) => {
        asset.model.triangles = stats.triangles;
        asset.model.vertices = stats.vertices;
        asset.model.meshes = stats.drawCalls;
        asset.model.materials = stats.materials;
        asset.model.textures = stats.textures;
        asset.model.drawCalls = stats.drawCalls;
        asset.model.gpuBytesEstimate = stats.gpuBytesEstimate;
        if (stats.runtime) asset.model.runtime = stats.runtime;
        return asset;
      });
    }

    return ok({
      id: id ?? null,
      module: toRepoRelative(modulePath),
      outDir: toRepoRelative(outDir),
      hero: toRepoRelative(path.join(outDir, heroName)),
      renders: written,
      meanLuma: luma,
      stats,
      pageErrors: errors,
    });
  } finally {
    await browser.close().catch(() => {});
    server.close();
  }
}

main().catch(fail);
