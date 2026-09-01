/**
 * Thumbnails for an installed pack's items.
 *
 * A vibe3d pack ships no pictures. The scifi kit's `meta.preview` looks like one
 * and is not -- it is a code reference (`.../model.ts#createPreview`), a preview
 * SCENE the pack's own site builds -- so the picker had a hundred grey "no
 * preview" tiles. The item is a factory, exactly like a thaikit prop, so the
 * picture is taken the way thaikit takes its own: render/harness.html in
 * headless Chrome, the same three-point rig, the same 45/20 hero angle, resized
 * to a 512 px webp. A pack tile and a thaikit tile then sit in one grid looking
 * like they came from the same kit, because they did.
 *
 * One browser, one page, one model at a time. The page is reused across the
 * whole pack (the harness disposes the previous model), which is what keeps a
 * hundred items to one Chrome start rather than a hundred.
 *
 * Never fatal. A pack whose thumbnails fail is a pack with no thumbnails, not a
 * failed install -- the item is already measured, bundled and usable by then.
 */
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';

import { REPO_ROOT, toRepoRelative } from '@thaikit/registry-core';
import { checkThaiFont } from '../fonts.mjs';

/** Matches promote-model.mjs's browse thumbnail, so the grid is one size. */
const THUMB = 512;
/** The harness renders square at this; the screenshot is downsampled from it. */
const RENDER = 1024;
/** The hero angle the browse grid's tiles use. Evidence is the turntable; this is the tile. */
const HERO = { azimuth: 45, elevation: 20 };
/** Per item. A factory that has already been probed is not slow; a hung one must not stall the pack. */
const ITEM_TIMEOUT_MS = 60_000;

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.webp': 'image/webp', '.map': 'application/json',
};

async function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/usr/bin/chromium', '/usr/bin/chromium-browser',
    '/usr/bin/google-chrome', '/usr/bin/google-chrome-stable',
  ].filter(Boolean);
  for (const p of candidates) {
    try { await fs.access(p); return p; } catch { /* keep looking */ }
  }
  throw new Error('no Chrome found; set CHROME_PATH (the web image installs chromium at /usr/bin/chromium)');
}

/** Static server rooted at the repo, so the harness and the bundles share an origin. */
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

const withTimeout = (p, ms, what) => Promise.race([
  p,
  new Promise((_, rej) => setTimeout(() => rej(new Error(`${what} took longer than ${ms / 1000} s`)), ms)),
]);

/**
 * Render one thumbnail per entry.
 *
 * @param entries  [{ name, bundleFile, outFile }] -- absolute paths.
 * @param progress (message, extra) -> void
 * @returns Map name -> { file } for the ones that rendered, plus warnings[].
 */
export async function renderPreviews(entries, { progress = () => {} } = {}) {
  const warnings = [];
  const done = new Map();
  if (!entries.length) return { done, warnings };

  const [{ default: puppeteer }, { default: sharp }] = await Promise.all([
    import('puppeteer-core'),
    import('sharp'),
  ]);

  const executablePath = await findChrome();
  // Not fatal: by now the pack is installed and usable, and a thumbnail with
  // tofu is still a thumbnail. But say so, because it looks like a finished render.
  const font = checkThaiFont();
  if (!font.ok) progress(`warning: Thai text will render as boxes -- ${font.reason}`);
  const { server, port } = await serve(REPO_ROOT);
  const base = `http://127.0.0.1:${port}`;

  const browser = await puppeteer.launch({
    executablePath,
    // Without SwiftShader every render comes back silently black -- a valid PNG
    // of the backdrop, which is the failure that looks like success.
    args: [
      '--headless=new', '--no-sandbox', '--disable-dev-shm-usage',
      '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
      '--disable-lcd-text', `--window-size=${RENDER},${RENDER}`,
    ],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: RENDER, height: RENDER, deviceScaleFactor: 1 });
    const pageErrors = [];
    page.on('pageerror', (e) => pageErrors.push(String(e.message ?? e)));

    // page.goto's navigation promise never settles in this environment; the
    // harness's own ready flag is the real contract. See render-model.mjs.
    const harnessUrl = `${base}/render/harness.html`;
    page.goto(harnessUrl).catch(() => {});
    const deadline = Date.now() + 60_000;
    let ready = false;
    while (Date.now() < deadline) {
      ready = await page.evaluate(() => window.__thaikitReady === true).catch(() => false);
      if (ready) break;
      await new Promise((r) => setTimeout(r, 150));
    }
    if (!ready) throw new Error('render harness never signalled ready');

    let n = 0;
    for (const { name, bundleFile, outFile } of entries) {
      n += 1;
      pageErrors.length = 0;
      const moduleUrl = `${base}/${toRepoRelative(bundleFile).split(path.sep).join('/')}`;
      try {
        const stats = await withTimeout(
          page.evaluate((url) => window.__thaikit.load(url, 'createObjectModel'), moduleUrl),
          ITEM_TIMEOUT_MS, `${name}: building for its preview`,
        );
        if (!stats.triangles) throw new Error('the factory produced zero triangles');
        await page.evaluate((h) => { window.__thaikit.setMode('beauty'); window.__thaikit.setCamera(h.azimuth, h.elevation); window.__thaikit.render(); }, HERO);
        // Coverage, not brightness: a dark prop renders BELOW the backdrop's luma,
        // so only "how much of the frame is not backdrop" separates a dark model
        // from a GPU that drew nothing.
        const coverage = await page.evaluate(() => window.__thaikit.subjectCoverage());
        if (coverage < 0.01) throw new Error(`render is blank (${(coverage * 100).toFixed(2)}% of frame drawn)`);

        const png = await page.screenshot({ type: 'png' });
        await fs.mkdir(path.dirname(outFile), { recursive: true });
        await sharp(png).resize(THUMB, THUMB, { fit: 'inside' }).webp({ quality: 82 }).toFile(outFile);
        done.set(name, { file: outFile });
        progress(`${name} (${n}/${entries.length})`, { item: name });
      } catch (err) {
        const why = `${err.message}${pageErrors.length ? ` — ${pageErrors[0]}` : ''}`;
        warnings.push(`${name}: no preview — ${why}`);
        progress(`${name}: no preview — ${why} (${n}/${entries.length})`, { item: name });
      }
    }
  } finally {
    await browser.close().catch(() => {});
    server.close();
  }

  return { done, warnings };
}
