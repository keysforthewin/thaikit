/**
 * Pack install / refresh / remove jobs, one at a time.
 *
 * The work is a child process running scripts/install-pack.mjs, in the same
 * shape index.js uses for bootstrap: progress lines on stderr (JSON, forwarded
 * to every SSE client as `pack` events), one JSON result line on stdout.
 * Single-flight because two installs writing packs/index.json at once is the
 * lost-update the registry lock exists to prevent everywhere else.
 */
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

const here = path.dirname(fileURLToPath(import.meta.url));
const SCRIPT = path.resolve(here, '../../../../scripts/install-pack.mjs');

const jobs = new Map();
let queue = Promise.resolve();

function broadcast(state, event, data) {
  for (const send of state.clients) send(event, data);
}

export function jobStatus(id) {
  return jobs.get(id) ?? null;
}

/**
 * Start (or join) a pack job.
 *
 * `refreshItem` rebuilds ONE item of an editable pack from the source tree --
 * bundle, probe, thumbnail, index entry -- which is what a promote or a source
 * edit needs and a 134-item reinstall is not. Two refreshes of the same ref
 * queued back to back are one job: the watcher fires per file, and a save that
 * touches the factory and its maps must not rebuild the prop twice.
 */
export function runPackJob(state, { source, refresh = false, remove = false, previews = false, pack = null, refreshItem = null, add = false, upgrade = false, force = false, keepSource = false, adopt = true, dropItem = null }) {
  if (refreshItem) {
    for (const queued of jobs.values()) {
      if (queued.status === 'queued' && queued.refreshItem === refreshItem) return queued;
    }
  }
  const id = crypto.randomUUID().slice(0, 8);
  const job = { id, source, pack, refresh, remove, previews, refreshItem, add, upgrade, dropItem, status: 'queued', log: [], result: null, startedAt: null, endedAt: null };
  jobs.set(id, job);

  queue = queue.then(
    () =>
      new Promise((resolve) => {
        job.status = 'running';
        job.startedAt = new Date().toISOString();
        broadcast(state, 'pack', { jobId: id, phase: 'start', item: refreshItem ?? undefined, message: dropItem ? `dropping ${dropItem}` : refreshItem ? `rebuilding ${refreshItem}` : remove ? `removing ${pack}` : previews ? `rendering previews for ${pack}` : upgrade ? `upgrading ${pack} from upstream` : `installing ${source}` });

        const args = [SCRIPT];
        if (dropItem) args.push('--drop-item', dropItem);
        else if (refreshItem) {
          args.push('--refresh-item', refreshItem);
          if (add) args.push('--add');
        } else if (remove) {
          args.push('--remove', pack);
          if (keepSource) args.push('--keep-source');
        } else if (previews) args.push('--previews', pack, '--force');
        else if (upgrade) {
          args.push('--upgrade', pack);
          if (force) args.push('--force');
        } else {
          args.push('--source', source);
          if (refresh) args.push('--refresh');
          if (pack) args.push('--pack', pack);
          if (!adopt) args.push('--no-adopt');
        }
        const child = spawn(process.execPath, args, { env: process.env });

        let stdout = '';
        let stderrBuf = '';
        child.stdout.on('data', (d) => { stdout += d; });
        child.stderr.on('data', (d) => {
          stderrBuf += d;
          let nl;
          while ((nl = stderrBuf.indexOf('\n')) >= 0) {
            const line = stderrBuf.slice(0, nl).trim();
            stderrBuf = stderrBuf.slice(nl + 1);
            if (!line) continue;
            let evt;
            try {
              evt = JSON.parse(line);
            } catch {
              evt = { phase: 'log', message: line };
            }
            job.log.push(evt);
            if (job.log.length > 500) job.log.shift();
            broadcast(state, 'pack', { jobId: id, ...evt });
          }
        });
        child.on('close', (code) => {
          job.endedAt = new Date().toISOString();
          let result = null;
          try {
            result = JSON.parse(stdout.trim().split('\n').pop() || '{}');
          } catch {
            result = { ok: false, error: `install-pack exited ${code} with unparseable output` };
          }
          job.result = result;
          job.status = result.ok ? 'done' : 'failed';
          broadcast(state, 'pack', { jobId: id, phase: job.status, item: refreshItem ?? undefined, message: result.ok ? 'done' : result.error, result });
          if (refreshItem) broadcast(state, 'catalogue', { ref: refreshItem, kind: 'rebuilt', ok: Boolean(result.ok) });
          resolve();
        });
      }),
  );
  return job;
}
