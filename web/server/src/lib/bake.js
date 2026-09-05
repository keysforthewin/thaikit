/**
 * Level bakes: one child process per level, progress relayed as `level:bake`
 * SSE events. Same shape as the pack jobs; separate because two levels may
 * bake at once while two packs may not (they share an index file).
 *
 * A bake OUTLIVES the page that started it, and it must outlive this process
 * too. The dev server runs under `node --watch-path`, so an edit to any
 * server file restarts it mid-bake -- and a pipeline whose stderr was a pipe
 * to the dead parent died with it on EPIPE, taking an hour of Cycles with it.
 * So nothing about a running bake lives only in this process's memory:
 *
 *   levels/<id>/build/bake-job.json   the record: id, pid, status, result
 *   levels/<id>/build/bake.log        the pipeline's stderr, one JSON event per line
 *   levels/<id>/build/bake.out        the pipeline's stdout, the one-line result
 *
 * The pipeline writes straight to those files (its stdio ARE the files, so a
 * vanished parent is nothing to it); this process TAILS the log to broadcast
 * and to keep an in-memory copy for a client that asks. On start-up
 * `adoptBakes` reads every record still marked running and, if the pid is
 * alive and is still our pipeline, carries on tailing it as though nothing had
 * happened; if the pid is gone it settles the record from bake.out or marks it
 * lost. A dialog that reopens reads the record plus the log and is back where
 * it was -- which is the point.
 *
 * Every event carries a `seq`, its index in the job's log, so a client that
 * fetched the log and then subscribed can drop the overlap exactly.
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

import { LEVELS_DIR, levelDir, writeFileAtomic } from '@thaikit/registry-core';

const here = path.dirname(fileURLToPath(import.meta.url));
const SCRIPT = path.resolve(here, '../../../../scripts/level/bake-level.mjs');
const POLL_MS = 300;
/** Lines kept in memory and handed to a reconnecting client. */
const LOG_CAP = 4000;

const jobs = new Map();

export const BAKERS = ['blender', 'blender-host', 'none'];

export function bakeStatus(levelId) {
  const job = jobs.get(levelId);
  return job ? publicJob(job) : null;
}

/** The record as clients see it: no handles, no timers. */
export function publicJob(job, { log = true } = {}) {
  const { id, level, baker, cpu, cell, status, startedAt, endedAt, result, cancelled, pid, adopted } = job;
  return { id, level, baker, cpu, cell: cell ?? null, status, startedAt, endedAt, result, cancelled, pid, adopted, ...(log ? { log: job.log } : { logLength: job.log.length }) };
}

const buildDirOf = (id) => path.join(levelDir(id), 'build');
const recordFile = (id) => path.join(buildDirOf(id), 'bake-job.json');
const logFile = (id) => path.join(buildDirOf(id), 'bake.log');
const outFile = (id) => path.join(buildDirOf(id), 'bake.out');

async function saveRecord(job) {
  const { id, level, baker, cpu, cell, status, startedAt, endedAt, result, cancelled, pid } = job;
  try {
    await writeFileAtomic(recordFile(level), JSON.stringify({ id, level, baker, cpu, cell: cell ?? null, status, startedAt, endedAt, result, cancelled, pid }, null, 2));
  } catch (e) {
    console.warn(`[bake] could not write ${recordFile(level)}: ${e.message}`);
  }
}

/** Is `pid` alive AND still the bake pipeline for this level? (pids are reused.) */
function isOurPipeline(pid, level) {
  if (!pid) return false;
  try { process.kill(pid, 0); } catch { return false; }
  try {
    const cmd = fs.readFileSync(`/proc/${pid}/cmdline`, 'utf8').split('\0');
    return cmd.some((a) => a.endsWith('bake-level.mjs')) && cmd.includes(level);
  } catch {
    // No /proc (not Linux): alive is the best answer available.
    return true;
  }
}

function makeJob(state, fields) {
  const job = { ...fields, log: [], offset: 0, partial: '', timers: [] };
  job.broadcast = (data) => { for (const send of state.clients) send('level:bake', { level: job.level, jobId: job.id, ...data }); };
  job.push = (evt) => {
    const entry = { ...evt, seq: job.seq++ };
    job.log.push(entry);
    if (job.log.length > LOG_CAP) job.log.shift();
    job.broadcast(entry);
  };
  job.seq = 0;
  jobs.set(job.level, job);
  return job;
}

/**
 * Read whatever the pipeline has appended to bake.log since the last look and
 * push each complete line. `silent` swallows the lines into the log without
 * broadcasting -- used when adopting, where the lines are history.
 */
function drainLog(job, { silent = false } = {}) {
  let fd;
  try { fd = fs.openSync(logFile(job.level), 'r'); } catch { return; }
  try {
    const stat = fs.fstatSync(fd);
    if (stat.size <= job.offset) return;
    const buf = Buffer.alloc(stat.size - job.offset);
    fs.readSync(fd, buf, 0, buf.length, job.offset);
    job.offset = stat.size;
    job.partial += buf.toString('utf8');
    let nl;
    while ((nl = job.partial.indexOf('\n')) >= 0) {
      const line = job.partial.slice(0, nl).trim();
      job.partial = job.partial.slice(nl + 1);
      if (!line) continue;
      let evt;
      try { evt = JSON.parse(line); } catch { evt = { phase: 'log', message: line }; }
      if (silent) {
        job.log.push({ ...evt, seq: job.seq++ });
        if (job.log.length > LOG_CAP) job.log.shift();
      } else {
        job.push(evt);
      }
    }
  } finally {
    fs.closeSync(fd);
  }
}

/** The pipeline is gone: read its result line and settle the record. */
async function finish(job, exitCode) {
  if (job.status !== 'running') return;
  for (const t of job.timers) clearInterval(t);
  job.timers = [];
  drainLog(job);
  job.endedAt = new Date().toISOString();
  let result;
  try {
    const out = await fsp.readFile(outFile(job.level), 'utf8');
    result = JSON.parse(out.trim().split('\n').pop() || '{}');
  } catch {
    result = null;
  }
  if (!result || typeof result !== 'object' || !('ok' in result)) {
    result = { ok: false, error: exitCode == null ? 'the bake process is gone and left no result (the server was restarted while it ran?)' : `bake exited ${exitCode}` };
  }
  job.result = result;
  job.status = job.cancelled ? 'cancelled' : (result.ok ? 'done' : 'failed');
  await saveRecord(job);
  job.push({ phase: job.status, message: job.cancelled ? 'cancelled' : (result.ok ? 'done' : result.error), result });
}

/** Tail the log until the job settles. */
function watch(job) {
  job.timers.push(setInterval(() => drainLog(job), POLL_MS).unref());
}

/**
 * `cell` (`<ix>_<iz>`) is the quick export. The record, log and out file still
 * live in `build/` -- one bake per level at a time, quick or full -- and only
 * the pipeline's own files move to `build/cell_<key>/`.
 */
export function runBake(state, { id, baker, cpu = false, cell = null }) {
  const job = makeJob(state, {
    id: crypto.randomUUID().slice(0, 8), level: id, baker, cpu, cell, status: 'running',
    startedAt: new Date().toISOString(), endedAt: null, result: null, cancelled: false, adopted: false,
  });
  // The pipeline's stdio are FILES on the shared mount, not pipes to this
  // process, so it neither notices nor cares when this process restarts. The
  // `start` line goes into the same file rather than straight to memory, so
  // the file is the ONE numbering: a process that adopts the job later counts
  // exactly the lines this one did.
  fs.mkdirSync(buildDirOf(id), { recursive: true });
  const outFd = fs.openSync(outFile(id), 'w');
  const logFd = fs.openSync(logFile(id), 'w');
  fs.writeSync(logFd, `${JSON.stringify({ phase: 'start', message: `baking ${id}${cell ? ` cell ${cell}` : ''} (lightmap: ${baker}${baker === 'none' ? '' : `, cpu ${cpu ? 'on' : 'off'}`})` })}\n`);
  // `detached` gives the pipeline its own process group, so a cancel can signal
  // the GROUP (-pid) and take the Blender child down with it -- there is no
  // per-stage bookkeeping to keep in step with the pipeline.
  const argv = [SCRIPT, '--level', id, '--baker', baker];
  if (cpu) argv.push('--cpu');
  if (cell) argv.push('--cell', cell);
  const child = spawn(process.execPath, argv, { env: process.env, detached: true, stdio: ['ignore', outFd, logFd] });
  fs.closeSync(outFd);
  fs.closeSync(logFd);
  child.unref();
  job.pid = child.pid;
  saveRecord(job);
  drainLog(job);
  watch(job);
  child.on('close', (code) => finish(job, code));
  child.on('error', (e) => { job.push({ phase: 'log', message: e.message }); finish(job, -1); });
  return job;
}

/**
 * Pick up the bakes a previous server process left running. Called once at
 * start-up; safe to call again.
 */
export async function adoptBakes(state) {
  let ids = [];
  try { ids = (await fsp.readdir(LEVELS_DIR, { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name); } catch { return []; }
  const adopted = [];
  for (const level of ids) {
    if (jobs.has(level)) continue;
    let rec;
    try { rec = JSON.parse(await fsp.readFile(recordFile(level), 'utf8')); } catch { continue; }
    if (!rec || rec.level !== level) continue;
    const job = makeJob(state, { ...rec, adopted: true });
    // History first, quietly: the clients that saw it live are gone with the
    // old process, and a client that asks gets the whole log in one answer.
    drainLog(job, { silent: true });
    if (rec.status !== 'running') continue; // settled; kept so a reopened dialog still shows the result
    if (isOurPipeline(rec.pid, level)) {
      console.error(`[bake] adopted the running bake of ${level} (pid ${rec.pid}, started ${rec.startedAt})`);
      watch(job);
      job.timers.push(setInterval(() => { if (!isOurPipeline(job.pid, level)) finish(job, null); }, 1000).unref());
      adopted.push(level);
    } else {
      console.error(`[bake] the bake of ${level} (pid ${rec.pid}) is gone; settling its record`);
      await finish(job, null);
    }
  }
  return adopted;
}

/**
 * Cancel a running bake. SIGTERM to the process group first (the pipeline
 * turns it into an abort: Blender child killed, or the host agent's request
 * dropped so the agent kills blender.exe), SIGKILL if the group is still there
 * five seconds later. The job ends as `cancelled` when the pipeline is gone.
 */
export function cancelBake(levelId) {
  const job = jobs.get(levelId);
  if (!job || job.status !== 'running') return null;
  if (!job.cancelled) {
    job.cancelled = true;
    saveRecord(job);
    const kill = (sig) => { try { process.kill(-job.pid, sig); } catch { /* already gone */ } };
    kill('SIGTERM');
    setTimeout(() => { if (job.status === 'running') kill('SIGKILL'); }, 5000).unref();
  }
  return job;
}
