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
 *                                 [--elevation 20]
 */
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';

import puppeteer from 'puppeteer-core';
import { REPO_ROOT, workDir, toRepoRelative, readRegistry, updateAsset } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';
import { judgeAsset, formatAxis, overBudgetMessage } from './lib/budget.mjs';

const SIZE = 1024;
/** The azimuths turntable_gate.py expects, plus the 45 deg hero. */
const TURNTABLE = [0, 90, 180, 270];
const HERO = { azimuth: 45, elevation: 20 };
/** Turntable elevation. Overridable with --elevation so a review capture can be taken
 *  at the reference plate's own elevation; comparing a 20-degree render against a
 *  7-degree photograph measures the two CAMERAS as much as the two shapes. */
const TURNTABLE_ELEVATION = 20;

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

  // Looked up whenever there is an id, not only when the module path has to be
  // derived from it: the scene budget lives on the asset, and rendering an
  // explicit --module for a known prop should still be judged against it.
  let asset = null;
  if (id) {
    const registry = await readRegistry();
    asset = registry.assets.find((a) => a.id === id) ?? null;
    if (!asset) return fail(`no asset with id ${id}`);
  }
  if (!modulePath) {
    if (!asset) return fail('need --id or --module');
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
  const elevation = args.elevation !== undefined ? Number(args.elevation) : TURNTABLE_ELEVATION;

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
    // Poll the flag with page.evaluate rather than page.waitForFunction, for the
    // same class of reason the goto above is not awaited. waitForFunction never
    // resolves on this page -- not on its default requestAnimationFrame polling and
    // not with an explicit `polling` interval -- while page.evaluate reads the flag
    // as true throughout. It failed as a 60s timeout on a page that was ready in
    // about a second, which reads as a hung browser rather than a polling choice.
    const readyDeadline = Date.now() + 60_000;
    let ready = false;
    while (Date.now() < readyDeadline) {
      ready = await page.evaluate(() => window.__thaikitReady === true).catch(() => false);
      if (ready) break;
      await new Promise((r) => setTimeout(r, 150));
    }
    if (!ready) {
      throw new Error(
        'harness never signalled __thaikitReady within 60s' +
          (errors.length ? `\n  page errors: ${errors.join(' | ')}` : ''),
      );
    }

    const moduleUrl = `${base}/${toRepoRelative(modulePath).split(path.sep).join('/')}`;
    log(`module : ${toRepoRelative(modulePath)}`);

    let stats;
    let factoryMs = null;
    try {
      // Timed, because the factory's own build cost is invisible in every other number here and
      // is the thing a person actually waits on before the drawer shows anything. The 7-Eleven
      // spent 24 SECONDS in createObjectModel synthesising procedural texture canvases while
      // reporting a perfectly healthy 2,804 triangles.
      const t0 = Date.now();
      stats = await page.evaluate(
        (url, name) => window.__thaikit.load(url, name), moduleUrl, exportName);
      factoryMs = Date.now() - t0;
    } catch (err) {
      throw new Error(
        `the factory failed to run: ${err.message}` +
          (errors.length ? `\n  page errors: ${errors.join(' | ')}` : ''),
      );
    }

    log(`stats  : ${stats.triangles} tris, ${stats.drawCalls} draw calls, ` +
        `${stats.materials} materials, ${stats.uniqueGeometries} geometries, ` +
        `${stats.textures} textures`);
    if (factoryMs !== null) {
      log(`factory: built in ${factoryMs} ms` +
          (stats.textureMs ? ` (${stats.textureMs} ms of it waiting on ${stats.textures} loaded map(s))` : '') +
          (stats.gpuBytesEstimate ? ` (${(stats.gpuBytesEstimate / 1048576).toFixed(1)} MB texture VRAM)` : ''));
    }
    if (stats.triangles === 0) {
      throw new Error('the factory produced zero triangles; there is nothing to render');
    }

    // A texture that never arrived renders as a flat untextured surface -- a valid
    // PNG of the wrong thing, which is the same class of failure as a black render.
    // For a prop whose surface IS its identity, like a road tile whose every marking
    // is a pixel, that is the whole prop missing.
    if (stats.texturesPending) {
      throw new Error(
        `${stats.texturesPending} texture(s) never finished loading` +
          (stats.textureErrors?.length ? `; failed: ${stats.textureErrors.join(', ')}` : '') +
          '. The render would be untextured.',
      );
    }

    // A slow factory is almost always synthesised procedural texture sets, not geometry:
    // createSculptMaterial builds FIVE canvases per material at textureResolution, pixel by pixel
    // in JavaScript, and the cost is the SQUARE of the resolution. Warned rather than thrown,
    // because a prop whose surface detail IS its identity earns its textures -- the oil drum's
    // rust and worn hoop crowns build in 1.0 s. What this catches is the default nobody chose.
    // Waiting on the network is not the factory being slow, and a prop that LOADS its
    // maps did not synthesise anything -- warning it about procedural texture synthesis
    // would be advice for a mistake it did not make.
    const buildMs = factoryMs === null ? null : factoryMs - (stats.textureMs ?? 0);
    const loadedMaps = (stats.textureMs ?? 0) > 0;
    if (buildMs !== null && (buildMs > 2000 || (stats.textures > 8 && !loadedMaps))) {
      log(`WARN   : slow factory (${buildMs} ms, ${stats.textures} textures). Almost always ` +
          'procedural texture synthesis rather than geometry. Declare textureless on every ' +
          'material whose surface a viewer does not resolve at prop distance -- see CLAUDE.md.');
    }

    // Measured against the class budget, and REPORTED rather than thrown. This
    // render is also what img2threejs's own review gates read, so failing here
    // would withhold the pictures you need in order to see why a prop is heavy.
    // promote-model.mjs is where an over-budget prop is actually stopped.
    let budget = null;
    if (asset) {
      budget = await judgeAsset(asset, stats);
      log(`budget : ${asset.budgetClass} — ${budget.axes.map(formatAxis).join(', ')}`);
      if (!budget.ok) {
        log(`WARN   : over budget on ${budget.over.length} axis/axes\n  ` +
            overBudgetMessage(budget));
      }
    }

    for (const mode of modes) {
      await page.evaluate((m) => window.__thaikit.setMode(m), mode);
      for (const azimuth of angles) {
        await page.evaluate(([az, el]) => window.__thaikit.setCamera(az, el), [azimuth, elevation]);
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
    const heroName = 'beauty-hero.png';
    await page.screenshot({ path: path.join(outDir, heroName) });
    written.push(heroName);
    const luma = await page.evaluate(() => window.__thaikit.meanLuma());
    const coverage = await page.evaluate(() => window.__thaikit.subjectCoverage());

    // A valid PNG of the background is the failure that looks like success, so the run
    // still fails on an empty frame -- but the test is COVERAGE, not brightness. The old
    // check was `luma <= 59` against a ~58 backdrop, which assumed anything drawn makes
    // the frame brighter. A dark prop does the opposite: this drum is a dark blue under
    // ACES tone mapping and rendered a perfect turntable at mean luma 56.7, which the
    // brightness test called blank. Coverage separates the two cases properly -- an empty
    // frame is uniformly the backdrop and scores ~0 whatever its brightness.
    if (coverage < 0.01) {
      throw new Error(
        `render is blank (subject coverage ${(coverage * 100).toFixed(2)}% of frame, ` +
          `mean luma ${luma.toFixed(1)}). Usually SwiftShader: check the --use-angle flags and CHROME_PATH.`,
      );
    }
    log(`luma   : ${luma.toFixed(1)}, subject covers ${(coverage * 100).toFixed(1)}% of frame`);

    if (id) {
      await updateAsset(id, (entry) => {
        entry.model.triangles = stats.triangles;
        entry.model.vertices = stats.vertices;
        entry.model.meshes = stats.drawCalls;
        entry.model.materials = stats.materials;
        entry.model.uniqueGeometries = stats.uniqueGeometries;
        entry.model.textures = stats.textures;
        entry.model.drawCalls = stats.drawCalls;
        entry.model.gpuBytesEstimate = stats.gpuBytesEstimate;
        if (stats.runtime) entry.model.runtime = stats.runtime;
        return entry;
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
      budget: budget && {
        class: asset.budgetClass,
        ok: budget.ok,
        axes: budget.axes,
      },
      pageErrors: errors,
    });
  } finally {
    await browser.close().catch(() => {});
    server.close();
  }
}

main().catch(fail);
