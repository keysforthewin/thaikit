/**
 * Level bakes: one child process per level, progress relayed as `level:bake`
 * SSE events. Same shape as the pack jobs; separate because two levels may
 * bake at once while two packs may not (they share an index file).
 */
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

const here = path.dirname(fileURLToPath(import.meta.url));
const SCRIPT = path.resolve(here, '../../../../scripts/level/bake-level.mjs');

const jobs = new Map();

export function bakeStatus(levelId) {
  return jobs.get(levelId) ?? null;
}

export function runBake(state, { id, baker }) {
  const job = { id: crypto.randomUUID().slice(0, 8), level: id, baker, status: 'running', startedAt: new Date().toISOString(), endedAt: null, result: null, log: [] };
  jobs.set(id, job);
  const broadcast = (data) => { for (const send of state.clients) send('level:bake', { level: id, jobId: job.id, ...data }); };
  broadcast({ phase: 'start', message: `baking ${id} (lightmap: ${baker})` });

  const child = spawn(process.execPath, [SCRIPT, '--level', id, '--baker', baker], { env: process.env });
  let stdout = '';
  let buf = '';
  child.stdout.on('data', (d) => { stdout += d; });
  child.stderr.on('data', (d) => {
    buf += d;
    let nl;
    while ((nl = buf.indexOf('\n')) >= 0) {
      const line = buf.slice(0, nl).trim();
      buf = buf.slice(nl + 1);
      if (!line) continue;
      let evt;
      try { evt = JSON.parse(line); } catch { evt = { phase: 'log', message: line }; }
      job.log.push(evt);
      if (job.log.length > 500) job.log.shift();
      broadcast(evt);
    }
  });
  child.on('close', (code) => {
    job.endedAt = new Date().toISOString();
    let result;
    try { result = JSON.parse(stdout.trim().split('\n').pop() || '{}'); } catch { result = { ok: false, error: `bake exited ${code}` }; }
    job.result = result;
    job.status = result.ok ? 'done' : 'failed';
    broadcast({ phase: job.status, message: result.ok ? 'done' : result.error, result });
  });
  return job;
}
