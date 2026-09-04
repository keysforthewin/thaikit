/**
 * The container's side of a HOST bake.
 *
 * The web server -- and so every bake it spawns -- runs inside the container,
 * which cannot execute a Windows binary and does not even see /mnt/c. When the
 * user picks "host Blender" the Blender step is handed to a small agent on the
 * host (`scripts/level/bake-host-agent.mjs`) over HTTP: the spec goes across
 * with REPO-RELATIVE paths, the agent respells them for blender.exe, and its
 * `[thaikit]` progress lines stream back as NDJSON so the export dialog sees
 * the same log it would for a container bake. Everything before (writing
 * in.glb) and after (reading out.glb) stays in the container, on the shared
 * mount.
 */

export const AGENT_URL_ENV = 'THAIKIT_BAKE_AGENT_URL';

export function agentUrl() {
  return (process.env[AGENT_URL_ENV] || '').replace(/\/+$/, '') || null;
}

const START_HINT = 'on the host run: npm run level:bake-agent';

function authHeaders() {
  const token = process.env.THAIKIT_BAKE_AGENT_TOKEN;
  return token ? { authorization: `Bearer ${token}` } : {};
}

/** Cheap reachability probe for the dialog and doctor. Never throws. */
export async function probeAgent({ url = agentUrl(), timeoutMs = 1500 } = {}) {
  if (!url) return { url: null, reachable: false, error: `${AGENT_URL_ENV} is not set` };
  try {
    const res = await fetch(`${url}/health`, { headers: authHeaders(), signal: AbortSignal.timeout(timeoutMs) });
    if (!res.ok) return { url, reachable: false, error: `${res.status} ${res.statusText}` };
    const body = await res.json();
    return { url, reachable: true, ...body };
  } catch (e) {
    return { url, reachable: false, error: e.cause?.code || e.name === 'TimeoutError' ? 'timeout' : e.message };
  }
}

/**
 * Run one bake on the host. `paths` are REPO-RELATIVE (`levels/<id>/build/...`).
 * Resolves when blender.exe exits 0; rejects with its tail otherwise. Aborting
 * `signal` drops the request, and the agent kills Blender when the socket
 * closes -- that is how a cancel reaches the host.
 */
export async function runBlenderOnHost({ spec, paths, level }, onLine, { url = agentUrl(), signal } = {}) {
  if (!url) throw new Error(`host bake requested but ${AGENT_URL_ENV} is not set; ${START_HINT}`);
  let res;
  try {
    res = await fetch(`${url}/bake`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeaders() },
      body: JSON.stringify({ level, spec, paths }),
      signal,
    });
  } catch (e) {
    if (e.name === 'AbortError') throw e;
    throw new Error(`host bake agent not reachable at ${url} (${e.cause?.code || e.message}); ${START_HINT}`);
  }
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(`host bake agent refused: ${body.error || `${res.status} ${res.statusText}`}`);
  }
  const reader = res.body.getReader();
  const dec = new TextDecoder();
  let buf = '';
  let final = null;
  const take = (line) => {
    if (!line.trim()) return;
    let evt;
    try { evt = JSON.parse(line); } catch { onLine(line); return; }
    if (typeof evt.line === 'string') onLine(evt.line);
    if ('exit' in evt) final = evt;
  };
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buf += dec.decode(value, { stream: true });
    let nl;
    while ((nl = buf.indexOf('\n')) >= 0) { take(buf.slice(0, nl)); buf = buf.slice(nl + 1); }
  }
  if (buf) take(buf);
  if (!final) throw new Error('host bake agent closed the stream before Blender finished');
  if (final.exit !== 0) throw new Error(`blender.exe on the host exited ${final.exit}:\n${final.tail ?? ''}`);
}
