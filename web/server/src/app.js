import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import fs from 'node:fs';
import path from 'node:path';

import { MODELS_DIR, SCRATCH_DIR, LEVELS_DIR, PACKS_DIR, ADOPTED_DIR } from '@thaikit/registry-core';

import { healthRouter } from './routes/health.js';
import { assetsRouter } from './routes/assets.js';
import { collidersRouter } from './routes/colliders.js';
import { eventsRouter } from './routes/events.js';
import { levelsRouter } from './routes/levels.js';
import { packsRouter } from './routes/packs.js';
import { itemsRouter } from './routes/items.js';
import { catalogue, facets } from './lib/catalogue.js';
import { errorHandler } from './errors.js';
import { CLIENT_DIST, IS_DEV, BASE_PATH } from './paths.js';
import { budgets } from '../../../scripts/lib/config.mjs';

export async function createApp(state) {
  const root = express();
  // Everything the app serves hangs off ONE router, mounted at THAIKIT_BASE_PATH
  // (or at / when there is none), so a reverse proxy can put the whole site under
  // outdoordevs.com/thaikit without a single route knowing. Express strips the
  // mount point, so inside here `req.path` is still '/api/...'. Vite is the one
  // exception below: it carries the prefix itself through its `base`.
  const app = express.Router();
  root.use(BASE_PATH || '/', app);
  if (BASE_PATH) root.get('/', (req, res) => res.redirect(`${BASE_PATH}/`));

  app.use(
    morgan('dev', {
      skip: (req) => req.path === '/api/health' || req.path === '/api/events',
    }),
  );
  app.use(
    compression({
      // compression buffers SSE and the stream stalls forever.
      filter: (req, res) => req.path !== '/api/events' && compression.filter(req, res),
    }),
  );
  app.use(express.json({ limit: '4mb' }));

  // THAIKIT_READ_ONLY: refuse every write at the door, before any router sees
  // it. The per-route guards below still exist for the fault case (a registry
  // that is malformed or unwritable answers 503); this is the deliberate mode,
  // and it covers the bake -- POST /api/levels/:id/bake is minutes of GPU time
  // anyone on the internet could otherwise start on the public instance.
  app.use('/api', (req, res, next) => {
    if (!state.publicReadOnly) return next();
    if (req.method === 'GET' || req.method === 'HEAD' || req.method === 'OPTIONS') return next();
    res.status(403).json({ error: 'this instance is read-only', reason: state.readOnlyReason, readOnly: true });
  });

  app.use('/api', healthRouter(state));
  app.use('/api', assetsRouter(state));
  app.use('/api', collidersRouter(state));
  app.use('/api', eventsRouter(state));
  app.use('/api', levelsRouter(state));
  app.use('/api', packsRouter(state));
  app.use('/api', itemsRouter(state));

  app.get('/api/meta', async (req, res, next) => {
    try {
      const { packs, items } = await catalogue();
      // The budget classes ride along so the UI can say what a class MEANS. A
      // select that offers "small / medium / large / hero" and nothing else asks
      // you to remember four numbers that live in a file you are not looking at.
      const { classes } = await budgets();
      const budgetClasses = Object.fromEntries(
        Object.entries(classes).filter(([name]) => !name.startsWith('$')),
      );
      res.json({
        ...facets(items),
        packList: packs,
        budgetClasses,
        total: items.length,
        etag: state.lastEtag,
      });
    } catch (err) {
      next(err);
    }
  });

  // The source tree's images and records: preview plates, thumbnails, sculpt
  // specs, shipped maps. Not the TypeScript -- the pack copy under /packs is
  // where a bundle and its source are served from -- so /media stays an
  // image-and-JSON mount. no-cache rather than immutable, because a file at a
  // stable path is overwritten on every regeneration.
  app.use('/media', (req, res, next) => {
    if (/\.(ts|js|mjs)$/i.test(req.path)) return res.status(404).json({ error: 'source is not served from /media' });
    next();
  });
  app.use(
    '/media',
    express.static(MODELS_DIR, {
      index: false,
      dotfiles: 'ignore',
      etag: true,
      cacheControl: true,
      maxAge: 0,
      setHeaders(res, filePath) {
        const ext = path.extname(filePath).toLowerCase();
        if (ext === '.glb') res.setHeader('Content-Type', 'model/gltf-binary');
        else if (ext === '.gltf') res.setHeader('Content-Type', 'model/gltf+json');
        else if (ext === '.ktx2') res.setHeader('Content-Type', 'image/ktx2');
        res.setHeader('Cache-Control', 'no-cache');
      },
    }),
  );

  // Adopted packs' images and records (adopted/<ns>/models/<name>/...), the
  // same rules as /media: pictures and JSON, never the TypeScript.
  app.use('/adopted', (req, res, next) => {
    if (/\.(ts|js|mjs)$/i.test(req.path)) return res.status(404).json({ error: 'source is not served from /adopted' });
    next();
  });
  app.use(
    '/adopted',
    express.static(ADOPTED_DIR, {
      index: false,
      dotfiles: 'ignore',
      etag: true,
      cacheControl: true,
      maxAge: 0,
      setHeaders(res) {
        res.setHeader('Cache-Control', 'no-cache');
      },
    }),
  );

  // In-flight attempt artefacts: raw generator output, renders and contact
  // sheets. Gitignored working data, but being able to look at it in the UI
  // while a run is going is the whole point of having a UI. Read-only, and
  // no-cache because every attempt overwrites the previous one's files.
  app.use(
    '/scratch',
    express.static(SCRATCH_DIR, {
      etag: true,
      cacheControl: true,
      maxAge: 0,
      index: false,
      dotfiles: 'ignore',
      setHeaders(res) {
        res.setHeader('Cache-Control', 'no-cache');
      },
    }),
  );

  // Level build products (the baked GLB, its smoke render) and downloaded pack
  // bundles. Both are overwritten in place, so no-cache like /media.
  for (const [mount, dir] of [['/levels', LEVELS_DIR], ['/packs', PACKS_DIR]]) {
    app.use(
      mount,
      express.static(dir, {
        etag: true,
        cacheControl: true,
        maxAge: 0,
        index: false,
        dotfiles: 'ignore',
        setHeaders(res, filePath) {
          const ext = path.extname(filePath).toLowerCase();
          if (ext === '.glb') res.setHeader('Content-Type', 'model/gltf-binary');
          else if (ext === '.ktx2') res.setHeader('Content-Type', 'image/ktx2');
          res.setHeader('Cache-Control', 'no-cache');
        },
      }),
    );
  }

  if (IS_DEV) {
    // Vite in middleware mode: HMR on the same port as the API, so there is no
    // proxy, no CORS, and no "which port do I open?" confusion.
    const { createServer } = await import('vite');
    const vite = await createServer({
      root: path.resolve(CLIENT_DIST, '..'),
      // vite.config.js reads THAIKIT_BASE_PATH too; this keeps the two agreeing
      // when the config is bypassed.
      base: `${BASE_PATH}/`,
      server: {
        middlewareMode: true,
        // Hand Vite our HTTP server, or it opens a second socket that silently
        // fails behind Docker's network stack.
        hmr: { server: state.httpServer },
      },
      appType: 'spa',
    });
    // On the ROOT app, not the mounted router: Vite serves under its own base
    // and expects the un-stripped URL.
    root.use(vite.middlewares);
    state.vite = vite;
  } else {
    app.use(express.static(CLIENT_DIST, { index: false }));
    // Express 5 uses path-to-regexp@8, which REMOVED the bare '*' pattern:
    // app.get('*') throws at boot. A terminal middleware needs no pattern.
    app.use((req, res, next) => {
      if (req.method !== 'GET' || req.path.startsWith('/api')) return next();
      const index = path.join(CLIENT_DIST, 'index.html');
      if (!fs.existsSync(index)) {
        return res
          .status(503)
          .type('text/plain')
          .send('client bundle not built. Run: npm run build');
      }
      res.sendFile(index);
    });
  }

  root.use(errorHandler);
  return root;
}

