#!/usr/bin/env node
/**
 * The HOST bake agent: the one thing in this repo that runs on the host, and
 * it runs there because what it runs IS the host's Blender.
 *
 *   npm run level:bake-agent          # on the host (WSL shell), leave it running
 *
 * The web server -- and the bake pipeline it spawns -- lives in the container,
 * which cannot execute blender.exe and cannot see /mnt/c. When the export
 * dialog picks "host Blender", `scripts/level/bakers/blender-cycles.mjs` POSTs
 * the bake spec here with REPO-RELATIVE paths, this process respells them for
 * Windows (`toBlenderPath` -> \\wsl.localhost\<distro>\...), runs the Windows
 * Blender -- OptiX on the real card, which under WSL2 the container can never
 * reach -- and streams the `[thaikit]` progress lines back as NDJSON. Nothing
 * else moves: in.glb was written to the shared mount by the container and
 * out.glb / lightmap.png land there for it to read.
 *
 * Runtime: the host's node (>= 22) and the root node_modules the container
 * installed into the mount -- this file reaches @thaikit/registry-core (and so
 * zod) through scripts/lib/blender.mjs, all pure JS. No new dependency.
 *
 * Network: bound to :: (dual-stack; host.docker.internal resolves to an IPv6
 * address on this docker) so the docker bridge (host.docker.internal) can
 * reach it. Under WSL2's default NAT that is not the LAN; set
 * THAIKIT_BAKE_AGENT_TOKEN to require a bearer token anyway.
 *
 * Cancel: the container drops the request when its bake is cancelled, the
 * RESPONSE socket closes, and the agent kills Blender. A Windows process
 * started through WSL interop does not reliably die with `child.kill()` on the
 * stub, so bake_lightmap.py logs its own pid on its first line and the agent
 * runs `taskkill.exe /PID <that> /T /F` as well -- by pid, never by image
 * name, so a Blender the user has open is left alone.
 */
import http from 'node:http';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { blenderExe, blenderRepoRoot, toBlenderPath } from '../lib/blender.mjs';
import { buildBlenderArgs, blenderLineSink, CYCLES_DEVICES } from './bakers/blender-args.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const ALLOWED_SCRIPT = 'scripts/level/bakers/bake_lightmap.py';
const PORT = Number(process.env.THAIKIT_BAKE_AGENT_PORT || 3734);
const TOKEN = process.env.THAIKIT_BAKE_AGENT_TOKEN || '';

const stamp = () => new Date().toISOString().slice(11, 19);
const say = (...a) => console.error(`[bake-agent ${stamp()}]`, ...a);

const exe = await blenderExe();
if (!exe) {
  say('no Blender executable found. Set THAIKIT_BLENDER_EXE to the Windows blender.exe (or install Blender under C:\\Program Files\\Blender Foundation).');
  process.exit(1);
}
if (!exe.endsWith('.exe') && process.env.WSL_DISTRO_NAME) {
  say(`found ${exe}, which is a Linux Blender -- the container already has one of those. Set THAIKIT_BLENDER_EXE to the Windows blender.exe to get OptiX.`);
  process.exit(1);
}

let current = null; // { level, child, startedAt }

function json(res, status, body) {
  res.writeHead(status, { 'content-type': 'application/json' });
  res.end(JSON.stringify(body));
}

function authorised(req) {
  if (!TOKEN) return true;
  return req.headers.authorization === `Bearer ${TOKEN}`;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let s = '';
    req.on('data', (d) => { s += d; if (s.length > 1e6) reject(new Error('body too large')); });
    req.on('end', () => resolve(s));
    req.on('error', reject);
  });
}

/** Repo-relative, inside the repo, and a plain file path. */
function safeRel(p, what) {
  if (typeof p !== 'string' || !p || path.isAbsolute(p) || p.includes('\\') || p.split('/').includes('..')) {
    throw new Error(`${what} must be a repo-relative path, got ${JSON.stringify(p)}`);
  }
  return p;
}

function validate(body) {
  const { level, spec, paths } = body ?? {};
  if (!spec || typeof spec !== 'object') throw new Error('missing spec');
  if (!paths || typeof paths !== 'object') throw new Error('missing paths');
  if (paths.script !== ALLOWED_SCRIPT) throw new Error(`script must be ${ALLOWED_SCRIPT}`);
  safeRel(paths.glb, 'paths.glb');
  safeRel(paths.out, 'paths.out');
  if (paths.env != null) safeRel(paths.env, 'paths.env');
  if (!CYCLES_DEVICES.includes(spec.device)) throw new Error(`spec.device must be one of ${CYCLES_DEVICES.join(', ')}`);
  for (const k of ['size', 'samples', 'texelsPerMeter', 'exposure']) if (!Number.isFinite(spec[k])) throw new Error(`spec.${k} must be a number`);
  for (const k of ['moon', 'sky', 'ground']) if (!Array.isArray(spec[k]) || !spec[k].every(Number.isFinite)) throw new Error(`spec.${k} must be numbers`);
  if (spec.lights != null) {
    if (!Array.isArray(spec.lights) || spec.lights.length > 256) throw new Error('spec.lights must be an array of at most 256 lamps');
    for (const l of spec.lights) {
      if (!l || typeof l !== 'object' || !['point', 'spot'].includes(l.type)) throw new Error('spec.lights[].type must be point or spot');
      for (const k of ['position', 'color']) if (!Array.isArray(l[k]) || l[k].length < 3 || !l[k].every(Number.isFinite)) throw new Error(`spec.lights[].${k} must be numbers`);
      if (!Number.isFinite(l.intensity)) throw new Error('spec.lights[].intensity must be a number');
    }
  }
  return { level: typeof level === 'string' ? level : '?', spec, paths };
}

async function bake(req, res) {
  let body;
  try { body = validate(JSON.parse(await readBody(req))); } catch (e) { return json(res, 400, { error: e.message }); }
  if (current) return json(res, 409, { error: `a bake for ${current.level} is already running on the host` });

  const args = buildBlenderArgs(body.spec, body.paths, toBlenderPath);
  say(`bake ${body.level}: ${path.basename(exe)} ${args.slice(4).join(' ')}`);
  res.writeHead(200, { 'content-type': 'application/x-ndjson', 'cache-control': 'no-cache', 'x-accel-buffering': 'no' });
  const send = (obj) => { if (!res.writableEnded) res.write(`${JSON.stringify(obj)}\n`); };

  const child = spawn(exe, args, { stdio: ['ignore', 'pipe', 'pipe'] });
  current = { level: body.level, child, startedAt: Date.now() };
  let blenderPid = null; // Blender's OWN pid (the Windows one), from its first [thaikit] line
  const sink = blenderLineSink((line) => {
    const m = /^[\d.]+s pid (\d+)$/.exec(line); // log() prefixes the elapsed seconds
    if (m) { blenderPid = Number(m[1]); return; }
    if (/cycles device:/.test(line)) say(`${body.level}: ${line}`);
    send({ line });
  });
  child.stdout.on('data', (d) => sink.feed(d.toString()));
  child.stderr.on('data', (d) => sink.feed(d.toString()));

  let cancelled = false;
  const cancel = (why) => {
    if (cancelled || child.exitCode !== null) return;
    cancelled = true;
    say(`${body.level}: cancelling (${why})`);
    child.kill('SIGTERM');
    setTimeout(() => { if (child.exitCode === null) child.kill('SIGKILL'); }, 5000).unref();
    // A Windows Blender is a WSL interop stub's child, and a signal to the
    // stub does not reliably reach it. Blender logged its own (Windows) pid on
    // its first line, so kill exactly that process -- never by image name,
    // which would take down a Blender the user has open.
    if (exe.endsWith('.exe') && blenderPid) {
      spawn('/mnt/c/Windows/System32/taskkill.exe', ['/PID', String(blenderPid), '/T', '/F'], { stdio: 'ignore' }).on('error', () => {});
    }
  };
  // The RESPONSE's close, not the request's: an IncomingMessage emits 'close'
  // once its body has been consumed (which happened above, before this line),
  // so listening on `req` sees nothing when the container drops the socket
  // mid-bake -- the first version left a 4.8 GB blender.exe running after a
  // cancel. `res` closes when the connection does, before the reply ended.
  res.on('close', () => { if (!res.writableEnded) cancel('client went away'); });
  current.cancel = cancel;

  child.on('error', (e) => { send({ exit: -1, tail: e.message }); res.end(); current = null; });
  child.on('close', (code, sig) => {
    const exit = cancelled ? 130 : (code ?? -1);
    say(`${body.level}: blender exited ${code ?? sig} after ${((Date.now() - current.startedAt) / 1000).toFixed(0)} s`);
    send({ exit, tail: exit === 0 ? '' : sink.tail() });
    res.end();
    current = null;
  });
}

const server = http.createServer(async (req, res) => {
  if (!authorised(req)) return json(res, 401, { error: 'bad or missing bearer token' });
  const url = new URL(req.url, 'http://x');
  if (req.method === 'GET' && url.pathname === '/health') {
    return json(res, 200, { ok: true, exe, distro: process.env.WSL_DISTRO_NAME ?? null, repoRoot: blenderRepoRoot(), busy: current ? { level: current.level, since: new Date(current.startedAt).toISOString() } : null });
  }
  if (req.method === 'POST' && url.pathname === '/bake') return bake(req, res);
  if (req.method === 'POST' && url.pathname === '/cancel') {
    if (!current) return json(res, 404, { error: 'nothing running' });
    current.cancel('cancel requested');
    return json(res, 202, { ok: true, level: current.level });
  }
  json(res, 404, { error: `no ${req.method} ${url.pathname}` });
});

server.listen(PORT, '::', () => {
  say(`listening on [::]:${PORT} (v4 and v6)${TOKEN ? ' (token required)' : ''}`);
  say(`blender: ${exe}`);
  say(`repo as Blender sees it: ${blenderRepoRoot()}`);
  say(`the container reaches this as THAIKIT_BAKE_AGENT_URL (compose sets http://host.docker.internal:${PORT})`);
});
for (const sig of ['SIGINT', 'SIGTERM']) {
  process.on(sig, () => { current?.cancel?.(sig); server.close(); setTimeout(() => process.exit(0), 500).unref(); });
}
