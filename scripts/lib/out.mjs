/**
 * Every script in this repo prints ONE JSON line on stdout and human logs on
 * stderr. Skills parse stdout; humans read stderr. This is what keeps the
 * 8-attempt critique loop from drowning in build output.
 */
export function ok(data = {}) {
  process.stdout.write(JSON.stringify({ ok: true, ...data }) + '\n');
}

export function fail(error, extra = {}) {
  const message = error instanceof Error ? error.message : String(error);
  process.stdout.write(JSON.stringify({ ok: false, error: message, ...extra }) + '\n');
  process.exitCode = 1;
}

/** Human-facing progress. Never parsed. */
export function log(...args) {
  console.error(...args);
}

/** Minimal flag parser: --key value, --flag, --key=value. */
export function parseArgs(argv = process.argv.slice(2)) {
  const args = {};
  const positional = [];
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (!token.startsWith('--')) {
      positional.push(token);
      continue;
    }
    const body = token.slice(2);
    const eq = body.indexOf('=');
    if (eq !== -1) {
      args[body.slice(0, eq)] = body.slice(eq + 1);
    } else if (i + 1 < argv.length && !argv[i + 1].startsWith('--')) {
      args[body] = argv[++i];
    } else {
      args[body] = true;
    }
  }
  args._ = positional;
  return args;
}
