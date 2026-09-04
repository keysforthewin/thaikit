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

export const BAKERS = ['blender', 'blender-host', 'none'];

export function runBake(state, { id, baker, cpu = false }) {
  const job = { id: crypto.randomUUID().slice(0, 8), level: id, baker, cpu, status: 'running', startedAt: new Date().toISOString(), endedAt: null, result: null, log: [], cancelled: false };
  jobs.set(id, job);
  const broadcast = (data) => { for (const send of state.clients) send('level:bake', { level: id, jobId: job.id, ...data }); };
  broadcast({ phase: 'start', message: `baking ${id} (lightmap: ${baker}${baker === 'none' ? '' : `, cpu ${cpu ? 'on' : 'off'}`})` });

  // `detached` gives the pipeline its own process group, so a cancel can signal
  // the GROUP (-pid) and take the Blender child down with it -- there is no
  // per-stage bookkeeping to keep in step with the pipeline.
  const argv = [SCRIPT, '--level', id, '--baker', baker];
  if (cpu) argv.push('--cpu');
  const child = spawn(process.execPath, argv, { env: process.env, detached: true });
  job.pid = child.pid;
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
    job.status = job.cancelled ? 'cancelled' : (result.ok ? 'done' : 'failed');
    broadcast({ phase: job.status, message: job.cancelled ? 'cancelled' : (result.ok ? 'done' : result.error), result });
  });
  job.kill = (sig) => { try { process.kill(-child.pid, sig); } catch { /* already gone */ } };
  return job;
}

/**
 * Cancel a running bake. SIGTERM to the process group first (the pipeline
 * turns it into an abort: Blender child killed, or the host agent's request
 * dropped so the agent kills blender.exe), SIGKILL if the group is still there
 * five seconds later. The job ends as `cancelled` when the child closes.
 */
export function cancelBake(levelId) {
  const job = jobs.get(levelId);
  if (!job || job.status !== 'running') return null;
  if (!job.cancelled) {
    job.cancelled = true;
    job.kill('SIGTERM');
    setTimeout(() => { if (job.status === 'running') job.kill('SIGKILL'); }, 5000).unref();
  }
  return job;
}
