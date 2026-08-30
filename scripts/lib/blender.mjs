/**
 * The bridge to Blender.
 *
 * Blender is not a library here, it is a running application on the other side
 * of a socket. `blender-mcp` connects to an addon inside a live Blender session
 * and drives it with Python; there is no headless mode in this setup. Two
 * consequences shape everything below:
 *
 *   1. Blender may be on a different OS than these scripts. On WSL it usually
 *      is -- the scripts run in Linux, Blender runs on Windows -- so a path
 *      this process can open is not a path Blender can open. `toBlenderPath`
 *      is the only place that translation happens; the registry keeps storing
 *      repo-relative POSIX paths as it always has.
 *   2. Blender may simply not be open. `probeAddon` exists so a skill can say
 *      "start Blender" instead of failing halfway through a build.
 */
import net from 'node:net';
import path from 'node:path';

import { REPO_ROOT, fromRepoRelative, toRepoRelative } from '@thaikit/registry-core';

export const BLENDER_HOST = process.env.THAIKIT_BLENDER_HOST || '127.0.0.1';
export const BLENDER_PORT = Number(process.env.THAIKIT_BLENDER_PORT || 9876);

/**
 * How Blender spells the path to this repo.
 *
 * Explicit override wins. Otherwise, if we are under WSL, Windows can reach the
 * distro's filesystem over UNC at \\wsl.localhost\<distro>\... -- verified
 * working against Blender 5.2. Off WSL, Blender is assumed to share our
 * filesystem and the repo root is used as-is.
 */
export function blenderRepoRoot() {
  const override = process.env.THAIKIT_BLENDER_REPO_PATH;
  if (override) return override.replace(/[\\/]+$/, '');

  const distro = process.env.WSL_DISTRO_NAME;
  if (distro) {
    return `\\\\wsl.localhost\\${distro}${REPO_ROOT.split('/').join('\\')}`;
  }
  return REPO_ROOT;
}

/** True when the Blender side uses backslashes, i.e. we are bridging to Windows. */
function bridgingToWindows() {
  return blenderRepoRoot().includes('\\');
}

/**
 * Translate a repo-relative POSIX path (the registry's storage form) into the
 * absolute path Blender should open. Absolute paths under the repo are accepted
 * too, so callers can pass either without thinking about it.
 */
export function toBlenderPath(repoRelativeOrAbs) {
  // When Blender shares our filesystem there is nothing to translate, and an
  // absolute path is ALREADY the answer. Returning early matters because the
  // repo is bind-mounted TWICE in the container -- /app for the code, /repo for
  // the data -- so a module resolving a sibling file off import.meta.url gets
  // /app/scripts/... while REPO_ROOT is /repo, and rebasing one on the other
  // yields `../app/scripts/...` and trips the guard below. That is not a path
  // escaping the repo; it is the same directory under its other name.
  //
  // The rebase exists only for the Windows bridge, where Blender genuinely
  // cannot open our paths and every one has to be rewritten to
  // \\wsl.localhost\<distro>\... -- so do it only when that is what is
  // happening.
  if (path.isAbsolute(repoRelativeOrAbs) && !bridgingToWindows()) return repoRelativeOrAbs;

  const rel = path.isAbsolute(repoRelativeOrAbs)
    ? toRepoRelative(repoRelativeOrAbs)
    : repoRelativeOrAbs;

  if (rel.startsWith('..')) {
    throw new Error(`path escapes the repo, Blender cannot reach it: ${repoRelativeOrAbs}`);
  }

  const root = blenderRepoRoot();
  const sep = bridgingToWindows() ? '\\' : '/';
  const tail = rel.split('/').join(sep);
  return tail ? `${root}${sep}${tail}` : root;
}

/**
 * A Python string literal Blender can open, raw-quoted so Windows backslashes
 * survive. Use this rather than interpolating a bare path into generated Python.
 */
export function toPythonPath(repoRelativeOrAbs) {
  const p = toBlenderPath(repoRelativeOrAbs);
  if (p.includes("'")) throw new Error(`path contains a quote, refusing: ${p}`);
  return `r'${p}'`;
}

/**
 * The one-line stub handed to execute_blender_code.
 *
 * Long programs do not belong in a tool payload: the socket carries kilobytes
 * instead of the whole script, the script survives in scratch for inspection
 * and re-running, and the diff between attempt N and N+1 is a readable file.
 */
export function execStub(scriptRepoPath) {
  return `exec(compile(open(${toPythonPath(scriptRepoPath)}, encoding='utf-8').read(), ${toPythonPath(scriptRepoPath)}, 'exec'))`;
}

/**
 * Is a BlenderMCP addon listening?
 *
 * A bare TCP connect, deliberately: the addon's own handshake varies by version
 * and all a preflight needs to know is whether anything is there to talk to.
 * The MCP tools report the Blender version once a real call goes through.
 */
export function probeAddon({
  host = BLENDER_HOST,
  port = BLENDER_PORT,
  timeoutMs = 1500,
} = {}) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    const done = (connected, error) => {
      socket.destroy();
      resolve({ connected, host, port, error: error ?? null });
    };
    socket.setTimeout(timeoutMs);
    socket.once('connect', () => done(true));
    socket.once('timeout', () => done(false, `no response within ${timeoutMs}ms`));
    socket.once('error', (err) => done(false, err.code || err.message));
    socket.connect(port, host);
  });
}

/** What to tell the user when nothing is listening. Same words everywhere. */
export const START_BLENDER = [
  'Blender is not reachable, and both mesh skills need it.',
  '',
  '  1. Open Blender (5.x).',
  '  2. In the 3D viewport press N to open the sidebar, pick the BlenderMCP tab.',
  '  3. Press "Connect to Claude".',
  '',
  `Then re-run the preflight. Expecting an addon on ${BLENDER_HOST}:${BLENDER_PORT}.`,
].join('\n');

/**
 * A Blender executable for BATCH work (`blender -b --python …`), which the
 * lightmap bake uses instead of the live-session addon. On WSL the Windows
 * install is reachable directly through interop.
 */
export async function blenderExe() {
  const { access } = await import('node:fs/promises');
  const { readdir } = await import('node:fs/promises');
  const candidates = [process.env.THAIKIT_BLENDER_EXE].filter(Boolean);
  try {
    const base = '/mnt/c/Program Files/Blender Foundation';
    for (const d of (await readdir(base)).sort().reverse()) candidates.push(`${base}/${d}/blender.exe`);
  } catch { /* not WSL, or no Windows Blender */ }
  candidates.push('/usr/bin/blender', '/usr/local/bin/blender', '/snap/bin/blender', '/Applications/Blender.app/Contents/MacOS/Blender');
  for (const c of candidates) {
    try { await access(c); return c; } catch { /* next */ }
  }
  return null;
}

export { fromRepoRelative, toRepoRelative };
